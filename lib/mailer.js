// mailer.js — utility di invio email transazionale condivisa.
//
// Provider: Amazon SES (SESv3 via AWS SDK) con Nodemailer per comporre il
// messaggio MIME e gestire gli allegati (SES richiede SendRawEmail per gli
// allegati; Nodemailer costruisce il raw MIME).
//
// Variabili d'ambiente richieste (vedi .env.example):
//   AWS_REGION           — regione SES (es. eu-west-1, eu-central-1)
//   AWS_ACCESS_KEY_ID     \ credenziali IAM con permesso ses:SendRawEmail.
//   AWS_SECRET_ACCESS_KEY / In produzione si può usare un IAM Role al posto delle chiavi.
//   SES_FROM             — mittente VERIFICATO in SES (email o dominio verificato)
//   SES_FROM_NAME        — (opz.) nome mittente, default "LogiExpert"
//   CAREERS_MAIL_TO      — destinatari candidature, separati da virgola
//
// NOTA SES SANDBOX: un account SES nuovo è in sandbox e può inviare solo verso
// indirizzi/domini verificati. Per inviare ai destinatari HR reali va richiesto
// l'accesso in produzione (o verificati i destinatari) dalla console SES.

import nodemailer from 'nodemailer';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';
import { renderCandidatureEmail } from './emailTemplate';

let cachedTransporter = null;

function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  const region = process.env.AWS_REGION || process.env.SES_REGION;
  if (!region) {
    throw new Error('AWS_REGION non configurata: SES non è ancora collegato.');
  }

  // Le credenziali sono risolte dalla catena standard AWS
  // (env AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY, oppure IAM role in produzione).
  const sesClient = new SESv2Client({ region });

  // Nodemailer 9 usa il client SESv2 (SendEmailCommand con contenuto Raw MIME,
  // che supporta gli allegati).
  cachedTransporter = nodemailer.createTransport({
    SES: { sesClient, SendEmailCommand },
  });
  return cachedTransporter;
}

function parseRecipients(raw) {
  return (raw || '').split(',').map((s) => s.trim()).filter(Boolean);
}

/**
 * Invia un'email transazionale, con eventuali allegati.
 * @param {Object}   opts
 * @param {string[]} opts.to            - indirizzi destinatari
 * @param {string}   opts.subject
 * @param {string}   opts.html
 * @param {string}   [opts.text]        - fallback testuale
 * @param {string}   [opts.replyTo]     - indirizzo Reply-To
 * @param {Array}    [opts.attachments] - [{ filename, content, encoding }] (Nodemailer)
 */
export async function sendTransactionalEmail({ to, subject, html, text, replyTo, attachments }) {
  const from = process.env.SES_FROM;
  if (!from) {
    throw new Error('SES_FROM non configurata: il mittente verificato SES manca.');
  }
  const transporter = getTransporter();

  return transporter.sendMail({
    from: { address: from, name: process.env.SES_FROM_NAME || 'LogiExpert' },
    to,
    subject,
    html,
    text,
    replyTo,
    attachments,
  });
}

/**
 * Invia una candidatura al reparto HR con il CV in allegato, usando il template
 * grafico coerente con la UI del sito (lib/emailTemplate.js).
 * @param {Object} data
 * @param {Object} data.fields       - campi del form (già validati lato route)
 * @param {Object} data.cv           - { filename, base64 }
 * @param {string} [data.receivedAt] - ISO string di ricezione
 */
export async function sendCandidatureEmail({ fields, cv, receivedAt }) {
  const to = parseRecipients(process.env.CAREERS_MAIL_TO);
  if (!to.length) {
    throw new Error('CAREERS_MAIL_TO non configurata: nessun destinatario per le candidature.');
  }

  const { subject, html, text } = renderCandidatureEmail({
    fields,
    attachmentName: cv?.filename,
    receivedAt,
  });

  return sendTransactionalEmail({
    to, // entrambi i referenti HR
    subject,
    html,
    text,
    replyTo: fields.email || undefined,
    attachments: cv ? [{ filename: cv.filename, content: cv.base64, encoding: 'base64' }] : [],
  });
}

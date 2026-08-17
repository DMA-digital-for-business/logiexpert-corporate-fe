// emailTemplate.js — template email HTML per la notifica candidatura a HR.
//
// Vincoli email (diversi dal sito): niente font custom (Outfit non si carica nei
// client di posta) → fallback Arial/Helvetica; layout a tabelle e stili inline
// per compatibilità (Outlook/Gmail/Apple Mail). Palette coerente con la UI del
// sito: dark #0D0D12, rosso #CD1632, muted #666D80, bordo #ECEFF3, surface #F6F8FA.

const RED = '#CD1632';
const DARK = '#0D0D12';
const MUTED = '#666D80';
const BORDER = '#ECEFF3';
const SURFACE = '#F6F8FA';
const FONT = 'Arial, Helvetica, sans-serif';

const esc = (s) => String(s ?? '').replace(/[<>&"]/g, (ch) => (
  { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[ch]
));

function row(label, value) {
  if (!value || !String(value).trim()) return '';
  return `
    <tr>
      <td style="padding:10px 16px 10px 0;font-family:${FONT};font-size:13px;color:${MUTED};vertical-align:top;white-space:nowrap;">${esc(label)}</td>
      <td style="padding:10px 0;font-family:${FONT};font-size:14px;color:${DARK};font-weight:bold;vertical-align:top;border-bottom:1px solid ${BORDER};word-break:break-word;overflow-wrap:anywhere;">${esc(value)}</td>
    </tr>`;
}

function group(title, rowsHtml) {
  if (!rowsHtml.trim()) return '';
  return `
    <tr><td style="padding:0 0 6px;font-family:${FONT};font-size:11px;font-weight:bold;letter-spacing:0.10em;text-transform:uppercase;color:${RED};">${esc(title)}</td></tr>
    <tr><td style="padding:0 0 26px;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">${rowsHtml}</table>
    </td></tr>`;
}

function formatDate(iso, lang) {
  if (!iso) return '';
  try {
    return new Intl.DateTimeFormat(lang === 'en' ? 'en-GB' : 'it-IT', {
      dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Rome',
    }).format(new Date(iso));
  } catch (_) {
    return '';
  }
}

/**
 * Costruisce subject, HTML e testo dell'email di notifica candidatura.
 * @param {Object} opts
 * @param {Object} opts.fields         - campi del form (validati)
 * @param {string} [opts.attachmentName] - nome del file CV allegato
 * @param {string} [opts.receivedAt]   - ISO string di ricezione
 * @returns {{ subject: string, html: string, text: string }}
 */
export function renderCandidatureEmail({ fields, attachmentName, receivedAt }) {
  const fullName = `${fields.nome || ''} ${fields.cognome || ''}`.trim();
  const position = fields.posizioneLabel || 'Candidatura spontanea';
  const subject = `Candidatura — ${position} — ${fullName}`;
  const receivedLabel = formatDate(receivedAt, fields.lang);

  const contatto =
    row('Nome', fullName) +
    row('Email', fields.email) +
    row('Telefono', fields.telefono) +
    row('Città', fields.citta) +
    row('LinkedIn / Portfolio', fields.linkedin);

  const candidatura =
    row('Posizione', position) +
    row('Area desiderata', fields.area) +
    row('Datore attuale', fields.datore) +
    row('Disponibilità', fields.disponibilita) +
    row('CV allegato', attachmentName);

  const messageBlock = fields.messaggio && fields.messaggio.trim() ? `
    <tr><td style="padding:0 0 6px;font-family:${FONT};font-size:11px;font-weight:bold;letter-spacing:0.10em;text-transform:uppercase;color:${RED};">Messaggio</td></tr>
    <tr><td style="padding:0 0 26px;">
      <div style="font-family:${FONT};font-size:14px;line-height:22px;color:#36394A;background:${SURFACE};border:1px solid ${BORDER};border-radius:10px;padding:16px 18px;">${esc(fields.messaggio).replace(/\n/g, '<br>')}</div>
    </td></tr>` : '';

  const html = `<!DOCTYPE html>
<html lang="${fields.lang === 'en' ? 'en' : 'it'}" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="format-detection" content="telephone=no,address=no,email=no">
  <!--[if mso]><style>table,td,div,span{font-family:Arial,Helvetica,sans-serif !important;}</style><![endif]-->
  <title>${esc(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#F2F2F2;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;opacity:0;">Nuova candidatura da ${esc(fullName)} — ${esc(position)}</div>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#F2F2F2" style="background:#F2F2F2;margin:0;padding:0;mso-table-lspace:0;mso-table-rspace:0;">
    <tr><td align="center" style="padding:28px 12px;">
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" bgcolor="#ffffff" style="width:600px;max-width:600px;background:#ffffff;border:1px solid ${BORDER};border-radius:16px;overflow:hidden;mso-table-lspace:0;mso-table-rspace:0;">

        <!-- Header -->
        <tr><td bgcolor="${DARK}" style="background:${DARK};padding:30px 32px 26px;">
          <span style="font-family:${FONT};font-weight:bold;font-size:20px;color:#ffffff;letter-spacing:-0.02em;">Logi<span style="color:${RED};">Expert</span></span>
          <div style="margin-top:18px;font-family:${FONT};font-size:11px;font-weight:bold;letter-spacing:0.12em;text-transform:uppercase;color:${RED};">Nuova candidatura</div>
          <div style="margin-top:8px;font-family:${FONT};font-size:19px;line-height:26px;color:#ffffff;">${esc(fullName)}</div>
          <div style="margin-top:2px;font-family:${FONT};font-size:14px;color:#B8BDC7;">${esc(position)}</div>
        </td></tr>
        <tr><td bgcolor="${RED}" height="4" style="height:4px;line-height:4px;font-size:0;background:${RED};">&nbsp;</td></tr>

        <!-- Body -->
        <tr><td style="padding:30px 32px 8px;">
          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;">
            ${group('Contatto', contatto)}
            ${group('Candidatura', candidatura)}
            ${messageBlock}
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td bgcolor="${SURFACE}" style="background:${SURFACE};padding:20px 32px;border-top:1px solid ${BORDER};">
          <div style="font-family:${FONT};font-size:12px;line-height:18px;color:${MUTED};">
            Email generata automaticamente dal form <strong>Lavora con noi</strong> di logiexpert.com.${receivedLabel ? ` Ricevuta il ${esc(receivedLabel)}.` : ''}<br>
            Rispondi a questa email per contattare direttamente il candidato.
          </div>
        </td></tr>

      </table>
      <div style="font-family:${FONT};font-size:11px;color:#A4ABB8;margin-top:16px;">LogiExpert srl · Viale Sarca 336/F, 20126 Milano · info@logiexpert.com</div>
    </td></tr>
  </table>
</body>
</html>`;

  // Fallback testuale (deliverability + client senza HTML)
  const textRows = [
    ['Nome', fullName], ['Email', fields.email], ['Telefono', fields.telefono],
    ['Città', fields.citta], ['LinkedIn/Portfolio', fields.linkedin],
    ['Posizione', position], ['Area desiderata', fields.area],
    ['Datore attuale', fields.datore], ['Disponibilità', fields.disponibilita],
    ['CV allegato', attachmentName],
  ].filter(([, v]) => v && String(v).trim());
  const text = [
    'NUOVA CANDIDATURA — LogiExpert',
    ...textRows.map(([k, v]) => `${k}: ${v}`),
    fields.messaggio ? `\nMessaggio:\n${fields.messaggio}` : '',
    receivedLabel ? `\nRicevuta il ${receivedLabel}` : '',
  ].filter(Boolean).join('\n');

  return { subject, html, text };
}

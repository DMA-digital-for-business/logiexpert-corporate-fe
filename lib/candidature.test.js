import { describe, it, expect } from 'vitest';
import {
  validateCandidatura, SPONTANEOUS, CV_MAX_BYTES, CV_EXT_RE, EMAIL_RE, ERROR_CODES,
} from './candidature.js';

const validFields = () => ({
  nome: 'Mario', cognome: 'Rossi', email: 'mario@example.com',
  telefono: '+39 333 1234567', posizione: 'sales-account-manager',
  area: '', privacy: true,
});
const validCv = () => ({ size: 1024, name: 'cv.pdf' });

describe('validateCandidatura', () => {
  it('accetta una candidatura valida (nessun errore)', () => {
    expect(validateCandidatura(validFields(), validCv())).toEqual({});
  });

  it.each(['nome', 'cognome', 'email', 'telefono', 'posizione'])(
    'segnala %s obbligatorio', (field) => {
      const f = validFields();
      f[field] = '';
      expect(validateCandidatura(f, validCv())[field]).toBe(ERROR_CODES.REQUIRED);
    },
  );

  it('rifiuta un email malformata', () => {
    expect(validateCandidatura({ ...validFields(), email: 'nope' }, validCv()).email)
      .toBe(ERROR_CODES.EMAIL);
  });

  it('richiede l’area solo per la candidatura spontanea', () => {
    const spont = { ...validFields(), posizione: SPONTANEOUS, area: '' };
    expect(validateCandidatura(spont, validCv()).area).toBe(ERROR_CODES.REQUIRED);
    expect(validateCandidatura({ ...spont, area: 'Commerciale' }, validCv())).toEqual({});
  });

  it('richiede il CV', () => {
    expect(validateCandidatura(validFields(), null).cv).toBe(ERROR_CODES.REQUIRED);
  });

  it('rifiuta un CV troppo grande', () => {
    expect(validateCandidatura(validFields(), { size: CV_MAX_BYTES + 1, name: 'cv.pdf' }).cv)
      .toBe(ERROR_CODES.CV_SIZE);
  });

  it('rifiuta un formato CV non ammesso', () => {
    expect(validateCandidatura(validFields(), { size: 10, name: 'cv.exe' }).cv)
      .toBe(ERROR_CODES.CV_TYPE);
  });

  it('richiede il consenso privacy', () => {
    expect(validateCandidatura({ ...validFields(), privacy: false }, validCv()).privacy)
      .toBe(ERROR_CODES.PRIVACY);
  });

  it('accumula più errori insieme', () => {
    const errs = validateCandidatura({ posizione: '', privacy: false }, null);
    expect(Object.keys(errs).sort()).toEqual(
      ['cognome', 'cv', 'email', 'nome', 'posizione', 'privacy', 'telefono'].sort(),
    );
  });
});

describe('costanti condivise', () => {
  it('CV_MAX_BYTES è 5MB', () => {
    expect(CV_MAX_BYTES).toBe(5 * 1024 * 1024);
  });
  it('EMAIL_RE valida indirizzi ragionevoli', () => {
    expect(EMAIL_RE.test('a.b@c.it')).toBe(true);
    expect(EMAIL_RE.test('a@b')).toBe(false);
  });
  it('CV_EXT_RE accetta pdf/doc/docx, case-insensitive', () => {
    expect(CV_EXT_RE.test('CV.PDF')).toBe(true);
    expect(CV_EXT_RE.test('cv.docx')).toBe(true);
    expect(CV_EXT_RE.test('cv.txt')).toBe(false);
  });
});

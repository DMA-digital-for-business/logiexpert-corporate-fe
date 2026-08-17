import { describe, it, expect } from 'vitest';
import { resolvePositionLabel, JOBS_DATA, CAREERS_COPY } from './careersData.js';

describe('resolvePositionLabel', () => {
  it('restituisce l’etichetta della candidatura spontanea per lingua', () => {
    expect(resolvePositionLabel('spontaneous', 'it')).toBe(CAREERS_COPY.it.spontaneous);
    expect(resolvePositionLabel('spontaneous', 'en')).toBe(CAREERS_COPY.en.spontaneous);
  });

  it('deriva il titolo della posizione dall’id (fonte di verità server)', () => {
    const job = JOBS_DATA[0];
    expect(resolvePositionLabel(job.id, 'it')).toBe(job.title.it);
    expect(resolvePositionLabel(job.id, 'en')).toBe(job.title.en);
  });

  it('usa l’italiano come default', () => {
    expect(resolvePositionLabel('spontaneous')).toBe(CAREERS_COPY.it.spontaneous);
  });

  it('restituisce stringa vuota per un id sconosciuto', () => {
    expect(resolvePositionLabel('non-esiste', 'it')).toBe('');
  });
});

describe('coerenza dati posizioni', () => {
  it('ogni posizione ha titolo e contenuti in entrambe le lingue', () => {
    for (const job of JOBS_DATA) {
      expect(job.title.it && job.title.en).toBeTruthy();
      expect(job.responsibilities.it.length).toBeGreaterThan(0);
      expect(job.responsibilities.en.length).toBeGreaterThan(0);
      expect(job.requirements.it.length).toBeGreaterThan(0);
      expect(job.requirements.en.length).toBeGreaterThan(0);
    }
  });

  it('ogni areaKey punta a un’area esistente in entrambe le lingue', () => {
    for (const job of JOBS_DATA) {
      expect(CAREERS_COPY.it.areas[job.areaKey]).toBeTruthy();
      expect(CAREERS_COPY.en.areas[job.areaKey]).toBeTruthy();
    }
  });
});

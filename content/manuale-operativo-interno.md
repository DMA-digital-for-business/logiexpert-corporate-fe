# Manuale operativo — Gestione ordini e preventivi B2B

**Uso interno LogiExpert** · Piattaforma: BigCommerce B2B Edition con workflow CPQ
Versione bozza 1.0 — da validare con il cliente

---

## 1. Ruoli e responsabilità

| Ruolo | Chi | Responsabilità |
|---|---|---|
| **Sales rep** | [CONTENUTO MANCANTE: nomi] | Presa in carico preventivi, approvazione registrazioni, validazione prezzi, invio offerte |
| **Admin ecommerce** | [CONTENUTO MANCANTE] | Configurazione account azienda, metodi di pagamento, condizioni, credito |
| **Amministrazione** | [CONTENUTO MANCANTE] | Verifica bonifici, emissione e sollecito fatture |
| **Magazzino / logistica** | [CONTENUTO MANCANTE] | Evasione ordini, spedizioni |

**Casella di riferimento:** le notifiche arrivano su `info@logiexpert.com`.
⚠️ Una casella condivisa rende difficile capire chi ha preso in carico cosa. Raccomandazione: definire un responsabile di turno giornaliero, oppure attivare un alias dedicato ai preventivi. [CONTENUTO MANCANTE: decisione del cliente]

---

## 2. Livelli di servizio

| Evento | Tempo di presa in carico | Responsabile |
|---|---|---|
| Richiesta di registrazione azienda | [CONTENUTO MANCANTE] | Sales rep |
| Richiesta di preventivo | [CONTENUTO MANCANTE] | Sales rep |
| Ordine con bonifico da verificare | [CONTENUTO MANCANTE] | Amministrazione |
| Ordine confermato → magazzino | [CONTENUTO MANCANTE] | Admin ecommerce |

Il tempo di approvazione delle registrazioni rientra nel tempo di risposta ai preventivi: un cliente che si registra dopo aver chiesto un preventivo resta bloccato finché la registrazione non è approvata. Conviene che sia la stessa persona a gestire entrambe le code.

---

## 3. I tre percorsi d'acquisto

Ogni richiesta rientra in uno di questi tre casi. Riconoscerlo è il primo passo di ogni presa in carico.

**A · Acquisto diretto senza account**
L'utente compra a listino pagando con carta o bonifico. Non viene creata alcuna azienda. Nessuna azione commerciale richiesta, salvo la verifica del bonifico.

**B · Preventivo da utente registrato**
L'utente ha già un account azienda. Il preventivo arriva già collegato alla sua azienda: si passa direttamente alla validazione.

**C · Preventivo da utente non registrato**
Il preventivo arriva senza azienda collegata. Va creata l'azienda oppure approvata la registrazione, se nel frattempo l'utente si è registrato per conto suo.

---

## 4. Procedura — Approvazione di una registrazione azienda

1. Aprire la richiesta dalla sezione aziende del pannello B2B.
2. **Verificare i dati fiscali**: Partita IVA attiva, ragione sociale coerente, Codice SDI o PEC presenti. [CONTENUTO MANCANTE: definire i criteri di rifiuto]
3. **Verificare che non esista già un'azienda con la stessa email o Partita IVA.** Se esiste, non creare un secondo account: unificare sull'esistente.
4. Approvare la registrazione.
5. Configurare le condizioni commerciali (vedi § 6) **prima** di comunicare l'attivazione al cliente.
6. Verificare che l'email di attivazione sia partita.

**Se la registrazione va rifiutata:** [CONTENUTO MANCANTE: procedura e testo di comunicazione al cliente]

---

## 5. Procedura — Gestione di una richiesta di preventivo

### 5.1 Presa in carico

La richiesta arriva in elenco con stato **New** e, se l'utente non è registrato, senza azienda collegata.

> ⚠️ **L'utente non riceve alcuna email automatica dopo l'invio della richiesta.** Fino alla nostra risposta non ha alcun riscontro: il rispetto dello SLA è l'unica cosa che gli dice che la richiesta è arrivata.

Aprire il preventivo dall'elenco (clic sul numero identificativo o *Edit* dal menu azioni).

### 5.2 Controllo anti-duplicati — sempre, prima di tutto

**Cercare l'email del richiedente tra le aziende e le registrazioni in attesa.**

| Esito | Azione |
|---|---|
| Esiste già un'azienda o una registrazione in attesa | Approvare/usare quella esistente. **Non creare una nuova azienda.** |
| Nessuna corrispondenza | Creare l'azienda dal preventivo (§ 5.3) |

Saltare questo controllo genera due aziende per lo stesso cliente, con storico ordini spezzato e condizioni applicate solo a una delle due.

### 5.3 Creazione dell'azienda dal preventivo

Nella sezione **Buyer Info** del preventivo, aprire il campo **Company account** e scegliere **Create new company**. Compilati i dati, referente e indirizzi vengono riportati automaticamente sul preventivo.

**Regole da rispettare:**

- **L'email del referente deve essere identica a quella della richiesta.** È la chiave che collega preventivo, account e comunicazioni. Copiarla, non riscriverla.
- Non confondere **Company account** (l'anagrafica vera) con **Company name** (solo testo sul PDF del preventivo).
- Lasciare attivo l'invio dell'email di creazione account: senza, il cliente non ha modo di accedere.
- L'azienda creata dal backoffice è già attiva: non richiede ulteriore approvazione.

### 5.4 Validazione dell'offerta

- Impostare i prezzi riga per riga, oppure uno sconto sul totale.
- Per non mostrare al cliente lo scostamento dal listino, disattivare la visualizzazione degli sconti.
- Impostare o confermare la **data di scadenza** dell'offerta.
- Selezionare la modalità di spedizione. Senza una modalità selezionata, le imposte non vengono calcolate e restano da definire fino al checkout.
- Se il catalogo è cambiato dopo la richiesta, aggiornare le righe prodotto prima di inviare.

> **Verifica del margine.** Il costo d'acquisto dei prodotti non è visibile sul preventivo. Per controllarlo occorre aprire la scheda prodotto a catalogo. In alternativa, rispettare le soglie di sconto massimo per categoria. [CONTENUTO MANCANTE: definire le soglie]

### 5.5 Invio al cliente

1. Configurare i metodi di pagamento dell'azienda (§ 6) **prima dell'invio**, così al checkout il cliente trova le condizioni corrette.
2. Salvare e inviare il preventivo.
3. **Eseguire esplicitamente l'azione di invio email.** Non è automatica: senza questo passaggio il cliente non riceve nulla.
4. Verificare che il cliente riceva sia l'email di attivazione account sia il preventivo.

L'email contiene la versione **salvata** del preventivo: eventuali modifiche non salvate non vengono incluse.

### 5.6 Dopo l'invio

- Le richieste di modifica del cliente arrivano come messaggi sul preventivo stesso: rispondere da lì, così la trattativa resta tracciata.
- Preventivo scaduto da recuperare: aggiornare la data di scadenza prima di procedere.
- Preventivo nato con valuta o canale errati: non sono modificabili. Duplicare il preventivo e ripartire dalla copia.

---

## 6. Procedura — Condizioni commerciali di un'azienda

Da eseguire alla creazione di ogni nuova azienda, prima di comunicare l'attivazione al cliente.

**6.1 Metodi di pagamento.** Nella scheda dell'azienda, sezione metodi di pagamento, attivare solo quelli previsti dall'accordo. I metodi disponibili sono quelli già attivi a livello di negozio; qui si sceglie quali rendere visibili a quella specifica azienda.

Impostazione consigliata: [CONTENUTO MANCANTE: policy del cliente, es. "nuovi clienti solo carta e bonifico anticipato; pagamento differito dopo N ordini o su approvazione amministrazione"]

**6.2 Termini di pagamento.** Impostare il termine concordato (da pagamento alla ricezione fino a 60 giorni). In assenza di impostazione, vale il termine predefinito del negozio.

**6.3 Credito e tutele.** Se è attivo il pagamento con ordine d'acquisto:

- impostare il **massimale di credito**, che limita il valore del **singolo ordine** pagabile con ordine d'acquisto;
- attivare il blocco automatico dell'ordine d'acquisto oltre soglia (gli altri metodi restano disponibili);
- il **blocco per insoluto** sospende tutte le transazioni tranne il pagamento delle fatture, e mostra al cliente un avviso nella sua area riservata.

> ⚠️ **Il massimale non è un fido.** Non si riduce con gli ordini effettuati né si ripristina con i pagamenti ricevuti: va aggiornato manualmente. Se serve un controllo reale dell'esposizione, va sincronizzato con il gestionale. [CONTENUTO MANCANTE: decidere se integrare con Odoo]

**6.4 Listino.** Assegnare l'azienda al listino corretto, così i prezzi a catalogo risultano già scontati. [CONTENUTO MANCANTE: mappa listini/categorie cliente]

---

## 7. Procedura — Gestione degli ordini

**7.1 Ordine con carta.** Confermato automaticamente in base all'esito del pagamento. Nessun intervento manuale.

**7.2 Ordine con bonifico anticipato.** Resta in attesa. L'amministrazione verifica l'accredito in banca e, a riscontro avvenuto, completa manualmente l'ordine a sistema. Solo allora l'ordine passa al magazzino.
Frequenza di controllo: [CONTENUTO MANCANTE]

**7.3 Ordine con pagamento differito.** Confermato subito; la fattura eredita i termini dell'azienda ed è consultabile e pagabile dal cliente nella sua area riservata.

**7.4 Ordine caricato manualmente.** Quando l'ordine viene chiuso fuori dal sito (telefono, email, accordo diretto), va inserito manualmente a sistema. Attenzione: gli ordini creati manualmente **non vengono tracciati dagli strumenti di analisi**, quindi i dati di conversione online risulteranno sottostimati.

**7.5 Passaggio al gestionale.** Ogni ordine confermato deve essere riportato su Odoo. [CONTENUTO MANCANTE: modalità — manuale o integrazione — e responsabile]

---

## 8. Controlli periodici

**Ogni giorno**

- [ ] Preventivi in stato *New* non ancora presi in carico
- [ ] Richieste di registrazione in attesa di approvazione
- [ ] Ordini in attesa di verifica bonifico
- [ ] Ordini confermati non ancora riportati sul gestionale

**Ogni settimana**

- [ ] Preventivi inviati e senza risposta: sollecito o chiusura
- [ ] Preventivi in scadenza nei prossimi 7 giorni
- [ ] Aziende duplicate da unificare
- [ ] Fatture scadute e posizioni da bloccare

**Ogni mese**

- [ ] Revisione dei massimali di credito rispetto all'esposizione reale
- [ ] Verifica dei metodi di pagamento attivi per azienda
- [ ] Tasso di conversione dei preventivi e tempi medi di risposta

---

## 9. Errori da evitare

| Errore | Conseguenza | Come evitarlo |
|---|---|---|
| Creare l'azienda senza cercare l'email | Due account per lo stesso cliente | Controllo anti-duplicati sempre, § 5.2 |
| Email del referente diversa da quella della richiesta | Il cliente non ritrova il preventivo e non riceve le comunicazioni | Copiare e incollare, mai riscrivere |
| Inviare il preventivo senza configurare i pagamenti | Al checkout il cliente non trova le condizioni pattuite | Configurare le condizioni prima dell'invio, § 6 |
| Salvare il preventivo senza eseguire l'invio email | Il cliente non riceve nulla e resta in attesa | Invio email come passaggio finale obbligatorio, § 5.5 |
| Convertire un preventivo in ordine senza averlo inviato | L'offerta non resta tracciata da nessuna parte | Inviare sempre prima di convertire |
| Trattare il massimale di credito come un fido | Esposizione superiore al previsto | Aggiornamento manuale o integrazione gestionale |

---

## 10. Verifica prima dell'avvio

- [ ] Richieste di preventivo abilitate per utenti non registrati
- [ ] Workflow CPQ attivo sul pannello preventivi
- [ ] Metodi di pagamento configurati a livello di negozio
- [ ] Funzionalità di credito azienda attivate
- [ ] Termine di pagamento predefinito impostato
- [ ] Email di attivazione account e di invio preventivo verificate: contenuto, mittente, recapito
- [ ] Test completo: richiesta da utente non registrato → presa in carico → creazione azienda → configurazione pagamenti → invio → accesso del cliente → accettazione → ordine → fattura
- [ ] Test del percorso alternativo: registrazione con la stessa email della richiesta → approvazione → il preventivo risulta collegato all'account
- [ ] Visibilità dei preventivi senza azienda collegata verificata per tutti gli utenti del team
- [ ] Ruoli, responsabili e livelli di servizio assegnati e comunicati

---

### Note per la validazione con il cliente (da rimuovere nella versione definitiva)

- I segnaposto `[CONTENUTO MANCANTE: ...]` corrispondono a decisioni organizzative che spettano a LogiExpert: nomi e ruoli, tempi di servizio, policy sui pagamenti, soglie di sconto, gestione del passaggio a Odoo.
- Le denominazioni delle funzioni sono volutamente descrittive e non tecniche, per rendere il documento leggibile a chi non conosce la terminologia della piattaforma. Le etichette esatte dell'interfaccia andranno inserite dopo il test sul pannello, insieme agli screenshot.
- § 1 e § 7.5 contengono due questioni aperte da chiudere prima dell'avvio: la gestione della casella condivisa e le modalità di passaggio degli ordini al gestionale.

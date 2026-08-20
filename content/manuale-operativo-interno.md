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

![Vetrina: il cliente sceglie tra «Aggiungi al carrello» (acquisto diretto) e «Aggiungi al preventivo».](/manuale/prodotto_aggiunto_carrello.png)

---

## 4. Procedura — Approvazione di una registrazione azienda

1. Aprire la richiesta dalla sezione aziende del pannello B2B.
2. **Verificare i dati fiscali**: Partita IVA attiva, ragione sociale coerente, Codice SDI o PEC presenti.
3. **Verificare che non esista già un'azienda con la stessa email o Partita IVA.** Se esiste, non creare un secondo account: unificare sull'esistente.
4. Approvare la registrazione.
5. Configurare le condizioni commerciali (vedi § 6) **prima** di comunicare l'attivazione al cliente.
6. Verificare che l'email di attivazione sia partita.

![Accesso al pannello B2B dal menu laterale di BigCommerce.](/manuale/selezionare_sezione_B2B.png)

![Elenco aziende con stato PENDING / APPROVED: individuare la registrazione da approvare.](/manuale/verificare_company_da_approvare.png)

![Scheda azienda: verifica dei dati e pulsanti Approve / Reject.](/manuale/approvare_company.png)

---

## 5. Procedura — Gestione di una richiesta di preventivo

### 5.1 Presa in carico

La richiesta arriva in elenco con stato **New** e, se l'utente non è registrato, senza azienda collegata.

> ⚠️ **L'utente non riceve alcuna email automatica dopo l'invio della richiesta.** Fino alla nostra risposta non ha alcun riscontro: il rispetto dello SLA è l'unica cosa che gli dice che la richiesta è arrivata.

Aprire il preventivo dall'elenco (clic sul numero identificativo o *Edit* dal menu azioni).

![Elenco preventivi con stato NEW / IN PROCESS.](/manuale/verificare_richieste_preventivo.png)

### 5.2 Controllo anti-duplicati — sempre, prima di tutto

**Cercare l'email del richiedente tra le aziende e le registrazioni in attesa.**

| Esito | Azione |
|---|---|
| Esiste già un'azienda o una registrazione in attesa | Approvare/usare quella esistente. **Non creare una nuova azienda.** |
| Nessuna corrispondenza | Creare l'azienda dal preventivo (§ 5.3) |

Saltare questo controllo genera due aziende per lo stesso cliente, con storico ordini spezzato e condizioni applicate solo a una delle due.

### 5.3 Creazione dell'azienda dal preventivo

Nella sezione **Buyer Info** del preventivo, aprire il campo **Company account** e scegliere **Create new company**. Compilati i dati, referente e indirizzi vengono riportati automaticamente sul preventivo.

![Dettaglio preventivo: la sezione Buyer info con il campo Company account.](/manuale/dettaglio_richiesta_preventivo.png)

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

**6.2 Termini di pagamento.** Impostare il termine concordato (da pagamento alla ricezione fino a 60 giorni). In assenza di impostazione, vale il termine predefinito del negozio.

---

## 7. Procedura — Gestione degli ordini

![Elenco ordini con i relativi stati (in attesa di pagamento, di evasione, ecc.).](/manuale/gestione_ordini.png)

**7.1 Ordine con carta.** Confermato automaticamente in base all'esito del pagamento. Nessun intervento manuale.

**7.2 Ordine con bonifico anticipato.** Resta in attesa. L'amministrazione verifica l'accredito in banca e, a riscontro avvenuto, completa manualmente l'ordine a sistema. Solo allora l'ordine passa al magazzino.
Frequenza di controllo: [CONTENUTO MANCANTE]

**7.3 Ordine con pagamento differito.** Confermato subito; la fattura eredita i termini dell'azienda ed è consultabile e pagabile dal cliente nella sua area riservata.

**7.4 Ordine caricato manualmente.** Quando l'ordine viene chiuso fuori dal sito (telefono, email, accordo diretto), va inserito manualmente a sistema. Attenzione: gli ordini creati manualmente **non vengono tracciati dagli strumenti di analisi**, quindi i dati di conversione online risulteranno sottostimati.

**7.5 Passaggio al gestionale.** Ogni ordine confermato deve essere riportato su Odoo. [CONTENUTO MANCANTE: modalità — manuale o integrazione — e responsabile]

![Commenti e note interne sull'ordine (es. dettaglio di cosa approvvigionare presso i fornitori).](/manuale/dettaglio_richiesta_cosa_ordinare.png)

---

### Note per la validazione con il cliente (da rimuovere nella versione definitiva)

- I segnaposto `[CONTENUTO MANCANTE: ...]` corrispondono a decisioni organizzative che spettano a LogiExpert: nomi e ruoli, tempi di servizio, policy sui pagamenti, soglie di sconto, gestione del passaggio a Odoo.
- Le denominazioni delle funzioni sono volutamente descrittive e non tecniche, per rendere il documento leggibile a chi non conosce la terminologia della piattaforma. Le etichette esatte dell'interfaccia andranno inserite dopo il test sul pannello, insieme agli screenshot.
- § 1 e § 7.5 contengono due questioni aperte da chiudere prima dell'avvio: la gestione della casella condivisa e le modalità di passaggio degli ordini al gestionale.

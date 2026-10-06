<!-- ELUCENIA technical documentation · risco-relativo-e-odds-ratio · it · no clinical/professional/rights approval -->

# Rischio relativo e odds ratio

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/risco-relativo-e-odds-ratio)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Disegno dello studio

`desenho`

- `coorte` — Coorte o sperimentazione clinica
- `caso` — Caso-controllo

### Esposti con l’esito (a)

`a`

intervallo: 0–1000000

### Esposti senza l’esito (b)

`b`

intervallo: 0–1000000

### Non esposti con l’esito (c)

`c`

intervallo: 0–1000000

### Non esposti senza l’esito (d)

`d`

intervallo: 0–1000000

## Edizione del metodo

RR/Katz 1978 IC log; OR/Woolf 1955 IC log; Haldane 0,5 se zero;95% z=1,96

## Formula documentata

RR = \[a/(a+b)\] / \[c/(c+d)\], ES(ln RR) = √(1/a − 1/(a+b) + 1/c − 1/(c+d)) (Katz, 1978).

OR = (a × d) / (b × c), ES(ln OR) = √(1/a + 1/b + 1/c + 1/d) (Woolf, 1955).

IC 95% = exp(ln misura ± 1,96 × ES). Se una cella è zero, aggiungere 0,5 a tutte (correzione Haldane).

## Limiti e popolazione

Usare conteggi di due gruppi indipendenti e dello stesso esito binario; questa tabella non modella coppie appaiate né tassi per persona-tempo. Odds ratio e rischio relativo non sono la stessa misura e non vanno presentati come intercambiabili. Gli intervalli logaritmici sono approssimazioni; Woolf 1955 segnala il limite quando una frequenza è piccola. Quando una qualsiasi cella è zero, questa implementazione aggiunge 0,5 a tutte e quattro le celle; questa scelta non prova la validità in piccoli campioni. L’associazione non dimostra causalità.

## Riferimenti

- [Katz D, Baptista J, Azen SP, Pike MC. Obtaining confidence intervals for the risk ratio in cohort studies. Biometrics, 1978.](https://doi.org/10.2307/2530610)

- [Woolf B. On estimating the relation between blood group and disease. Ann Hum Genet, 1955.](https://doi.org/10.1111/j.1469-1809.1955.tb01348.x)

- [Bland JM, Altman DG. Statistics Notes: The odds ratio. BMJ, 2000.](https://doi.org/10.1136/bmj.320.7247.1468)

- [Woolf1955](https://jhanley.biostat.mcgill.ca/c634/stratified/Woolf.pdf)

- [Bland/Altman2000](https://www.bmj.com/content/bmj/320/7247/1468.1.full.pdf)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Nessuna associazione statisticamente significativa: l’IC 95% include 1

| Dettagli del risultato | |
| --- | --- |
| Rischio negli esposti | 20,0% |
| Rischio nei non esposti | 10,0% |
| Differenza di rischio (rischio attribuibile) | 10,0% |
| Odds ratio | 2,25 (IC 95%: 0,99 a 5,09) |


### 2

Associazione positiva (fattore di rischio): l’IC 95% non include 1

| Dettagli del risultato | |
| --- | --- |
| Rischio negli esposti | 30,0% |
| Rischio nei non esposti | 10,0% |
| Differenza di rischio (rischio attribuibile) | 20,0% |
| Odds ratio | 3,86 (IC 95%: 1,77 a 8,42) |


### 3

Associazione positiva (fattore di rischio): l’IC 95% non include 1

| Dettagli del risultato | |
| --- | --- |
| Odds ratio | 3,86 (IC 95%: 1,77 a 8,42) |
| Rischio relativo | non stimabile in uno studio caso-controllo (la proporzione di casi è definita dal ricercatore) |


### 4

Associazione negativa (fattore protettivo): l’IC 95% non include 1

| Dettagli del risultato | |
| --- | --- |
| Rischio negli esposti | 10,0% |
| Rischio nei non esposti | 30,0% |
| Differenza di rischio (rischio attribuibile) | -20,0% |
| Odds ratio | 0,26 (IC 95%: 0,12 a 0,57) |


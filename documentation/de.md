<!-- ELUCENIA technical documentation · risco-relativo-e-odds-ratio · de · no clinical/professional/rights approval -->

# Relatives Risiko und Odds Ratio

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/risco-relativo-e-odds-ratio)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Studiendesign

`desenho`

- `coorte` — Kohorte oder klinische Studie
- `caso` — Fall-Kontroll

### Exponierte mit dem Ereignis (a)

`a`

Bereich: 0–1000000

### Exponierte ohne das Ereignis (b)

`b`

Bereich: 0–1000000

### Nicht Exponierte mit dem Ereignis (c)

`c`

Bereich: 0–1000000

### Nicht Exponierte ohne dem Ereignis (d)

`d`

Bereich: 0–1000000

## Fassung der Methode

RR/Katz 1978 Log-KI; OR/Woolf 1955 Log-KI; Haldane 0,5 bei Null;95% z=1,96

## Dokumentierte Formel

RR = \[a/(a+b)\] / \[c/(c+d)\], SE(ln RR) = √(1/a − 1/(a+b) + 1/c − 1/(c+d)) (Katz, 1978).

OR = (a × d) / (b × c), SE(ln OR) = √(1/a + 1/b + 1/c + 1/d) (Woolf, 1955).

KI 95% = exp(ln Maß ± 1,96 × SE). Bei einer Nullzelle allen Zellen 0,5 hinzufügen (Haldane-Korrektur).

## Grenzen und Population

Verwenden Sie Häufigkeiten aus zwei unabhängigen Gruppen für denselben binären Endpunkt; diese Tabelle modelliert weder gematchte Paare noch Raten pro Personenzeit. Odds Ratio und relatives Risiko sind nicht dasselbe Maß und dürfen nicht als austauschbar dargestellt werden. Logarithmische Intervalle sind Näherungen; Woolf 1955 nennt die Einschränkung bei kleinen Zellhäufigkeiten. Wenn eine der Zellen null ist, addiert diese Implementierung 0,5 zu allen vier Zellen; diese Entscheidung belegt keine Gültigkeit bei kleinen Stichproben. Assoziation belegt keine Kausalität.

## Referenzen

- [Katz D, Baptista J, Azen SP, Pike MC. Obtaining confidence intervals for the risk ratio in cohort studies. Biometrics, 1978.](https://doi.org/10.2307/2530610)

- [Woolf B. On estimating the relation between blood group and disease. Ann Hum Genet, 1955.](https://doi.org/10.1111/j.1469-1809.1955.tb01348.x)

- [Bland JM, Altman DG. Statistics Notes: The odds ratio. BMJ, 2000.](https://doi.org/10.1136/bmj.320.7247.1468)

- [Woolf1955](https://jhanley.biostat.mcgill.ca/c634/stratified/Woolf.pdf)

- [Bland/Altman2000](https://www.bmj.com/content/bmj/320/7247/1468.1.full.pdf)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

<!-- ELUCENIA technical documentation · risco-relativo-e-odds-ratio · fr · no clinical/professional/rights approval -->

# Risque relatif et odds ratio

[conditions, sources et autorisations](https://elucenia.org/fr/outils/risco-relativo-e-odds-ratio)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Plan d’étude

`desenho`

- `coorte` — Cohorte ou essai clinique
- `caso` — Cas-témoins

### Exposés avec l’événement (a)

`a`

intervalle: 0–1000000

### Exposés sans l’événement (b)

`b`

intervalle: 0–1000000

### Non exposés avec l’événement (c)

`c`

intervalle: 0–1000000

### Non exposés sans l’événement (d)

`d`

intervalle: 0–1000000

## Édition de la méthode

RR/Katz 1978 IC log ; OR/Woolf 1955 IC log ; Haldane 0,5 si zéro ;95% z=1,96

## Formule documentée

RR = \[a/(a+b)\] / \[c/(c+d)\], ET(ln RR) = √(1/a − 1/(a+b) + 1/c − 1/(c+d)) (Katz, 1978).

OR = (a × d) / (b × c), ET(ln OR) = √(1/a + 1/b + 1/c + 1/d) (Woolf, 1955).

IC 95% = exp(ln mesure ± 1,96 × ET). Si une case est nulle, ajouter 0,5 à toutes (correction Haldane).

## Limites et population

Utilisez les effectifs de deux groupes indépendants pour le même événement binaire ; ce tableau ne modélise ni paires appariées ni taux par personne-temps. L’odds ratio et le risque relatif ne sont pas la même mesure et ne doivent pas être présentés comme interchangeables. Les intervalles logarithmiques sont des approximations ; Woolf 1955 souligne la limite lorsqu’un effectif est faible. Lorsqu’une cellule est nulle, cette implémentation ajoute 0,5 aux quatre cellules ; ce choix ne prouve pas la validité pour de petits échantillons. L’association ne démontre pas la causalité.

## Références

- [Katz D, Baptista J, Azen SP, Pike MC. Obtaining confidence intervals for the risk ratio in cohort studies. Biometrics, 1978.](https://doi.org/10.2307/2530610)

- [Woolf B. On estimating the relation between blood group and disease. Ann Hum Genet, 1955.](https://doi.org/10.1111/j.1469-1809.1955.tb01348.x)

- [Bland JM, Altman DG. Statistics Notes: The odds ratio. BMJ, 2000.](https://doi.org/10.1136/bmj.320.7247.1468)

- [Woolf1955](https://jhanley.biostat.mcgill.ca/c634/stratified/Woolf.pdf)

- [Bland/Altman2000](https://www.bmj.com/content/bmj/320/7247/1468.1.full.pdf)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Aucune association statistiquement significative : l’IC 95% inclut 1

| Détails du résultat | |
| --- | --- |
| Risque chez les exposés | 20,0% |
| Risque chez les non-exposés | 10,0% |
| Différence de risque (risque attribuable) | 10,0% |
| Odds ratio | 2,25 (IC 95% : 0,99 à 5,09) |


### 2

Association positive (facteur de risque) : l’IC 95% n’inclut pas 1

| Détails du résultat | |
| --- | --- |
| Risque chez les exposés | 30,0% |
| Risque chez les non-exposés | 10,0% |
| Différence de risque (risque attribuable) | 20,0% |
| Odds ratio | 3,86 (IC 95% : 1,77 à 8,42) |


### 3

Association positive (facteur de risque) : l’IC 95% n’inclut pas 1

| Détails du résultat | |
| --- | --- |
| Odds ratio | 3,86 (IC 95% : 1,77 à 8,42) |
| Risque relatif | non estimable dans une étude cas-témoins (la proportion de cas est définie par le chercheur) |


### 4

Association négative (facteur de protection) : l’IC 95% n’inclut pas 1

| Détails du résultat | |
| --- | --- |
| Risque chez les exposés | 10,0% |
| Risque chez les non-exposés | 30,0% |
| Différence de risque (risque attribuable) | -20,0% |
| Odds ratio | 0,26 (IC 95% : 0,12 à 0,57) |


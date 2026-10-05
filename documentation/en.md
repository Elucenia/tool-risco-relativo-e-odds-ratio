<!-- ELUCENIA technical documentation · risco-relativo-e-odds-ratio · en · no clinical/professional/rights approval -->

# Relative risk and odds ratio

[conditions, sources and permissions](https://elucenia.org/en/tools/risco-relativo-e-odds-ratio)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Study design

`desenho`

- `coorte` — Cohort or clinical trial
- `caso` — Case-control

### Exposed with the outcome (a)

`a`

range: 0–1000000

### Exposed without the outcome (b)

`b`

range: 0–1000000

### Unexposed with the outcome (c)

`c`

range: 0–1000000

### Unexposed without the outcome (d)

`d`

range: 0–1000000

## Method edition

RR/Katz 1978 log CI; OR/Woolf 1955 log CI; Haldane 0.5 for zero; 95% z=1.96

## Documented formula

RR = \[a/(a+b)\] / \[c/(c+d)\], SE(ln RR) = √(1/a − 1/(a+b) + 1/c − 1/(c+d)) (Katz, 1978).

OR = (a × d) / (b × c), SE(ln OR) = √(1/a + 1/b + 1/c + 1/d) (Woolf, 1955).

CI 95% = exp(ln measure ± 1.96 × SE). If any cell is zero, add 0.5 to all cells (Haldane correction).

## Limits and population

Use counts from two independent groups and the same binary outcome; this table does not model matched pairs or person-time rates. Odds ratio and relative risk are not the same measure and must not be presented as interchangeable. Logarithmic intervals are approximations; Woolf 1955 notes the limitation when any frequency is small. When any cell is zero, this implementation adds 0.5 to all four cells; this choice does not establish validity in small samples. Association does not establish causation.

## References

- [Katz D, Baptista J, Azen SP, Pike MC. Obtaining confidence intervals for the risk ratio in cohort studies. Biometrics, 1978.](https://doi.org/10.2307/2530610)

- [Woolf B. On estimating the relation between blood group and disease. Ann Hum Genet, 1955.](https://doi.org/10.1111/j.1469-1809.1955.tb01348.x)

- [Bland JM, Altman DG. Statistics Notes: The odds ratio. BMJ, 2000.](https://doi.org/10.1136/bmj.320.7247.1468)

- [Woolf1955](https://jhanley.biostat.mcgill.ca/c634/stratified/Woolf.pdf)

- [Bland/Altman2000](https://www.bmj.com/content/bmj/320/7247/1468.1.full.pdf)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

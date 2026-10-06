<!-- ELUCENIA technical documentation · risco-relativo-e-odds-ratio · pt-BR · no clinical/professional/rights approval -->

# Risco relativo e odds ratio

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/risco-relativo-e-odds-ratio)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Desenho do estudo

`desenho`

- `coorte` — Coorte ou ensaio clínico
- `caso` — Caso-controle

### Expostos com o desfecho (a)

`a`

intervalo: 0–1000000

### Expostos sem o desfecho (b)

`b`

intervalo: 0–1000000

### Não expostos com o desfecho (c)

`c`

intervalo: 0–1000000

### Não expostos sem o desfecho (d)

`d`

intervalo: 0–1000000

## Edição do método

RR/Katz 1978 log CI; OR/Woolf 1955 log CI; correção Haldane 0,5 sezero; 95%z 1,96

## Fórmula documentada

RR = \[a/(a+b)\] / \[c/(c+d)\], com EP(ln RR) = √(1/a − 1/(a+b) + 1/c − 1/(c+d)) (Katz, 1978).

OR = (a × d) / (b × c), com EP(ln OR) = √(1/a + 1/b + 1/c + 1/d) (Woolf, 1955).

IC 95% = exp(ln medida ± 1,96 × EP). Com alguma casela zero, soma-se 0,5 a todas (correção de Haldane).

## Limites e população

Use contagens de dois grupos independentes e do mesmo desfecho binário; esta tabela não modela pares combinados nem taxas por pessoa-tempo. Odds ratio e risco relativo não são a mesma medida e não devem ser apresentados como intercambiáveis. Os intervalos logarítmicos são aproximações; Woolf 1955 ressalta a limitação quando alguma frequência é pequena. Quando alguma célula é zero, esta implementação soma 0,5 a todas as quatro células; essa escolha não prova validade em amostras pequenas. Associação não demonstra causalidade.

## Referências

- [Katz D, Baptista J, Azen SP, Pike MC. Obtaining confidence intervals for the risk ratio in cohort studies. Biometrics, 1978.](https://doi.org/10.2307/2530610)

- [Woolf B. On estimating the relation between blood group and disease. Ann Hum Genet, 1955.](https://doi.org/10.1111/j.1469-1809.1955.tb01348.x)

- [Bland JM, Altman DG. Statistics Notes: The odds ratio. BMJ, 2000.](https://doi.org/10.1136/bmj.320.7247.1468)

- [Woolf1955](https://jhanley.biostat.mcgill.ca/c634/stratified/Woolf.pdf)

- [Bland/Altman2000](https://www.bmj.com/content/bmj/320/7247/1468.1.full.pdf)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Sem associação estatisticamente significativa: o IC 95% inclui 1

| Detalhes do resultado | |
| --- | --- |
| Risco nos expostos | 20,0% |
| Risco nos não expostos | 10,0% |
| Diferença de risco (risco atribuível) | 10,0% |
| Odds ratio | 2,25 (IC 95%: 0,99 a 5,09) |


### 2

Associação positiva (fator de risco): o IC 95% não inclui 1

| Detalhes do resultado | |
| --- | --- |
| Risco nos expostos | 30,0% |
| Risco nos não expostos | 10,0% |
| Diferença de risco (risco atribuível) | 20,0% |
| Odds ratio | 3,86 (IC 95%: 1,77 a 8,42) |


### 3

Associação positiva (fator de risco): o IC 95% não inclui 1

| Detalhes do resultado | |
| --- | --- |
| Odds ratio | 3,86 (IC 95%: 1,77 a 8,42) |
| Risco relativo | não estimável em estudo caso-controle (a proporção de casos é definida pelo pesquisador) |


### 4

Associação negativa (fator de proteção): o IC 95% não inclui 1

| Detalhes do resultado | |
| --- | --- |
| Risco nos expostos | 10,0% |
| Risco nos não expostos | 30,0% |
| Diferença de risco (risco atribuível) | -20,0% |
| Odds ratio | 0,26 (IC 95%: 0,12 a 0,57) |


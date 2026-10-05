<!-- ELUCENIA technical documentation · risco-relativo-e-odds-ratio · es · no clinical/professional/rights approval -->

# Riesgo relativo y odds ratio

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/risco-relativo-e-odds-ratio)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Diseño del estudio

`desenho`

- `coorte` — Cohorte o ensayo clínico
- `caso` — Casos y controles

### Expuestos con el desenlace (a)

`a`

intervalo: 0–1000000

### Expuestos sin el desenlace (b)

`b`

intervalo: 0–1000000

### No expuestos con el desenlace (c)

`c`

intervalo: 0–1000000

### No expuestos sin el desenlace (d)

`d`

intervalo: 0–1000000

## Edición del método

RR/Katz 1978 IC log; OR/Woolf 1955 IC log; Haldane 0,5 si cero;95% z=1,96

## Fórmula documentada

RR = \[a/(a+b)\] / \[c/(c+d)\], EE(ln RR) = √(1/a − 1/(a+b) + 1/c − 1/(c+d)) (Katz, 1978).

OR = (a × d) / (b × c), EE(ln OR) = √(1/a + 1/b + 1/c + 1/d) (Woolf, 1955).

IC 95% = exp(ln medida ± 1,96 × EE). Si alguna casilla es cero, añada 0,5 a todas (corrección Haldane).

## Límites y población

Use recuentos de dos grupos independientes y del mismo desenlace binario; esta tabla no modela pares emparejados ni tasas por persona-tiempo. Odds ratio y riesgo relativo no son la misma medida y no deben presentarse como intercambiables. Los intervalos logarítmicos son aproximaciones; Woolf 1955 señala la limitación cuando alguna frecuencia es pequeña. Cuando alguna celda es cero, esta implementación suma 0,5 a las cuatro celdas; esta elección no demuestra validez en muestras pequeñas. La asociación no demuestra causalidad.

## Referencias

- [Katz D, Baptista J, Azen SP, Pike MC. Obtaining confidence intervals for the risk ratio in cohort studies. Biometrics, 1978.](https://doi.org/10.2307/2530610)

- [Woolf B. On estimating the relation between blood group and disease. Ann Hum Genet, 1955.](https://doi.org/10.1111/j.1469-1809.1955.tb01348.x)

- [Bland JM, Altman DG. Statistics Notes: The odds ratio. BMJ, 2000.](https://doi.org/10.1136/bmj.320.7247.1468)

- [Woolf1955](https://jhanley.biostat.mcgill.ca/c634/stratified/Woolf.pdf)

- [Bland/Altman2000](https://www.bmj.com/content/bmj/320/7247/1468.1.full.pdf)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

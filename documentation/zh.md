<!-- ELUCENIA technical documentation · risco-relativo-e-odds-ratio · zh · no clinical/professional/rights approval -->

# 相对风险与比值比

[条件、来源与许可](https://elucenia.org/zh/tools/risco-relativo-e-odds-ratio)

## 使用方法

在门户中使用工具，或通过本地 HTTP 服务器打开 index.html。选择语言，填写各字段，然后计算。

## 输入与单位

### 研究设计

`desenho`

- `coorte` — 队列研究或临床试验
- `caso` — 病例对照

### 暴露者有结局（a）

`a`

范围: 0–1000000

### 暴露者无结局（b）

`b`

范围: 0–1000000

### 非暴露者有结局（c）

`c`

范围: 0–1000000

### 非暴露者无结局（d）

`d`

范围: 0–1000000

## 方法版本

RR/Katz 1978对数CI；OR/Woolf 1955对数CI；零格Haldane 0.5；95% z=1.96

## 已记录的公式

RR = \[a/(a+b)\] / \[c/(c+d)\], 标准误(ln RR) = √(1/a − 1/(a+b) + 1/c − 1/(c+d)) (Katz, 1978).

OR = (a × d) / (b × c), 标准误(ln OR) = √(1/a + 1/b + 1/c + 1/d) (Woolf, 1955).

置信区间 95% = exp(ln 指标 ± 1.96 × 标准误). 任一格为零时所有格加0.5（Haldane校正）。

## 限制与适用人群

请使用两个独立组针对相同二分类结局的计数；此表不处理配对数据或人时发生率。优势比（OR）与相对风险不是同一种度量，不应视为可互换。对数区间是近似方法；Woolf 1955 指出了任一格的频数较小时的限制。当任意一格为零时，本实现向全部四格各加 0.5；这一选择并不证明小样本中的有效性。关联不能证明因果关系。

## 参考文献

- [Katz D, Baptista J, Azen SP, Pike MC. Obtaining confidence intervals for the risk ratio in cohort studies. Biometrics, 1978.](https://doi.org/10.2307/2530610)

- [Woolf B. On estimating the relation between blood group and disease. Ann Hum Genet, 1955.](https://doi.org/10.1111/j.1469-1809.1955.tb01348.x)

- [Bland JM, Altman DG. Statistics Notes: The odds ratio. BMJ, 2000.](https://doi.org/10.1136/bmj.320.7247.1468)

- [Woolf1955](https://jhanley.biostat.mcgill.ca/c634/stratified/Woolf.pdf)

- [Bland/Altman2000](https://www.bmj.com/content/bmj/320/7247/1468.1.full.pdf)

## 复现技术测试

在此仓库的根目录中运行 node test.cjs，以重复已记录的合成案例。原始输入、预期结果和容差保持不变。技术测试不构成临床验证。

```sh
node test.cjs
```

tool.json 包含来源、版本和审查范围。examples.json 保留合成输入与预期结果；results.json 记录实际得到的结果。

[记录与参考文献](../tool.json) · [JavaScript代码](../calculator.js) · [参考案例](../examples.json) · [results.json](../results.json)

## 审查与使用条件

尚未开展独立临床审查。

此界面为自主编写的翻译，并非官方或认证版本。尚未完成独立临床审查、专业语言审查或工具权利授权。

公式或分类结果。解释、处理及适用性须结合专业评估和所选来源。

## 许可与署名

Apache-2.0 仅适用于 ELUCENIA 代码。工具、出版物、翻译和数据的权利仍归各自权利人所有。请保留 LICENSE 和 NOTICE。

ELUCENIA · Felipe Guedes · Copyright © 2026

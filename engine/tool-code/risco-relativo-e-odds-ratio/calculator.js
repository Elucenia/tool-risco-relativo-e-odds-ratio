/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"risco-relativo-e-odds-ratio","title":"Risco relativo e odds ratio","fields":[["desenho","Desenho do estudo","radio",{"opts":{"coorte":"Coorte ou ensaio clínico","caso":"Caso-controle"}}],["a","Expostos <strong>com</strong> o desfecho (a)","num",{"min":0,"max":1000000,"step":1,"ph":"20"}],["b","Expostos <strong>sem</strong> o desfecho (b)","num",{"min":0,"max":1000000,"step":1,"ph":"80"}],["c","Não expostos <strong>com</strong> o desfecho (c)","num",{"min":0,"max":1000000,"step":1,"ph":"10"}],["d","Não expostos <strong>sem</strong> o desfecho (d)","num",{"min":0,"max":1000000,"step":1,"ph":"90"}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var r=1.959964;
var i=function(a){return null==a||""===a||isNaN(+a)?0:+a};
var t=function(a,e){return o(100*a,null==e?1:e)+"%"};
a.def("risco-relativo-e-odds-ratio",function(a){var e=i(a.a),n=i(a.b),s=i(a.c),d=i(a.d),l="";if(e+n===0||s+d===0)return{error:"Cada grupo (expostos e não expostos) precisa ter ao menos um participante."};if(e+s===0)return{error:"Não há nenhum caso com o desfecho: RR e OR não são estimáveis."};e&&n&&s&&d||(e+=.5,n+=.5,s+=.5,d+=.5,l="Há casela com zero: foi somado 0,5 a todas as caselas (correção de Haldane) para estimar as medidas e os intervalos.");var m=e/(e+n),c=s/(s+d),u=m/c,p=Math.sqrt(1/e-1/(e+n)+1/s-1/(s+d)),v=e*d/(n*s),f=Math.sqrt(1/e+1/n+1/s+1/d),h=Math.exp(Math.log(u)-r*p),b=Math.exp(Math.log(u)+r*p),g=Math.exp(Math.log(v)-r*f),R=Math.exp(Math.log(v)+r*f),x="caso"===a.desenho,M=x?[v,g,R,"Odds ratio (OR)"]:[u,h,b,"Risco relativo (RR)"],w=M[1]>1?"high":M[2]<1?"low":"info",C="high"===w?"Associação positiva (fator de risco): o IC 95% não inclui 1":"low"===w?"Associação negativa (fator de proteção): o IC 95% não inclui 1":"Sem associação estatisticamente significativa: o IC 95% inclui 1",A=function(a,e){return" (IC 95%: "+o(a,2)+" a "+o(e,2)+")"},N=x?[["Odds ratio",o(v,2)+A(g,R)],["Risco relativo","não estimável em estudo caso-controle (a proporção de casos é definida pelo pesquisador)"]]:[["Risco nos expostos",t(m)],["Risco nos não expostos",t(c)],["Diferença de risco (risco atribuível)",t(m-c)],["Odds ratio",o(v,2)+A(g,R)]];return{main:[o(M[0],2),""],label:M[3]+A(M[1],M[2]),level:w,verdict:C,rows:N,note:l,raw:{rr:u,rrLo:h,rrHi:b,or:v,orLo:g,orHi:R}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);

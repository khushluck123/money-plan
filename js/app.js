"use strict";
const B=[
 {k:'safety',n:'Safety',e:'🛡️',c:'var(--safety)',d:'Emergency fund and term insurance, your financial seatbelt.',a:20,b:5},
 {k:'growth',n:'Growth',e:'📈',c:'var(--growth)',d:'Mutual funds and SIPs that quietly compound over the years.',a:15,b:25},
 {k:'fixed',n:'Fixed & Safe',e:'🎯',c:'var(--fixed)',d:'Short-term planned goals like a laptop, a trip or fees.',a:10,b:15},
 {k:'skill',n:'Skill',e:'🧠',c:'var(--skill)',d:'Courses, books and tools that raise your future earning power.',a:10,b:10},
 {k:'live',n:'Live',e:'🎉',c:'var(--live)',d:'Daily lifestyle and enjoyment, spent without guilt.',a:45,b:45}];
const CUR={INR:{s:'₹',l:'en-IN',ch:[500,1000,5000,10000,50000]},USD:{s:'$',l:'en-US',ch:[50,100,500,1000,5000]},EUR:{s:'€',l:'de-DE',ch:[50,100,500,1000,5000]},GBP:{s:'£',l:'en-GB',ch:[50,100,500,1000,5000]}};
const NOTES={1:'Building your safety net. Safety gets 20% until your emergency fund is complete.',2:'Emergency fund done. Safety drops to 5% and Growth jumps to 25%.'};
const $=id=>document.getElementById(id);
let S={amount:'',phase:1,cur:'INR',theme:''};
try{Object.assign(S,JSON.parse(localStorage.getItem('moneyplan')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('moneyplan',JSON.stringify(S))}catch(e){}};
const num=()=>{const v=parseFloat(String(S.amount).replace(/,/g,''));return isFinite(v)&&v>0?v:0};
const fmt=v=>new Intl.NumberFormat(CUR[S.cur].l,{style:'currency',currency:S.cur,maximumFractionDigits:2}).format(v);
const pct=b=>S.phase===1?b.a:b.b;

// build cards + donut once
const R=80,C=2*Math.PI*R,GAP=18;
$('list').innerHTML=B.map((b,i)=>`<article class="glass bucket p-5 sm:p-6 rise" style="animation-delay:${.2+i*.06}s" data-k="${b.k}">
 <div class="flex items-center gap-4"><div class="ico" style="background:color-mix(in srgb,${b.c} 16%,transparent)">${b.e}</div>
 <div class="flex-1 min-w-0"><div class="flex items-baseline justify-between gap-3"><h3 class="font-semibold text-lg">${b.n}</h3><span id="pct-${b.k}" class="text-sm font-semibold" style="color:${b.c}"></span></div>
 <p class="text-sm muted mt-0.5 leading-snug">${b.d}</p></div></div>
 <div class="flex items-end justify-between mt-5 gap-4"><p id="amt-${b.k}" class="text-3xl sm:text-4xl font-bold tracking-tight">0</p></div>
 <div class="bar mt-4"><i id="bar-${b.k}" style="background:${b.c}"></i></div></article>`).join('');
B.forEach(b=>{const c=document.createElementNS('http://www.w3.org/2000/svg','circle');
 c.setAttribute('cx',100);c.setAttribute('cy',100);c.setAttribute('r',R);c.setAttribute('class','seg-c');c.setAttribute('stroke',getComputedStyle(document.documentElement).getPropertyValue('--'+b.k).trim());c.id='seg-'+b.k;c.dataset.k=b.k;$('donut').appendChild(c)});

// hover linking between donut and cards
function hl(k){$('donut').classList.toggle('hl',!!k);$('list').classList.toggle('hl',!!k);
 B.forEach(b=>{$('seg-'+b.k).classList.toggle('act',b.k===k);document.querySelector(`[data-k="${b.k}"].bucket`).classList.toggle('act',b.k===k)})}
document.querySelectorAll('[data-k]').forEach(el=>{el.addEventListener('mouseenter',()=>hl(el.dataset.k));el.addEventListener('mouseleave',()=>hl(null))});

// count-up animation
const shown={};const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
function tween(id,to,f){const el=$(id),from=shown[id]||0;shown[id]=to;if(reduce||from===to){el.textContent=f(to);return}
 const t0=performance.now();(function step(t){const p=Math.min((t-t0)/600,1),e=1-Math.pow(1-p,4);el.textContent=f(from+(to-from)*e);if(p<1)requestAnimationFrame(step)})(t0)}

function render(){
 const t=num(),cu=CUR[S.cur];
 $('sym').textContent=cu.s;$('seg').classList.toggle('p2',S.phase===2);
 $('p1').classList.toggle('on',S.phase===1);$('p2').classList.toggle('on',S.phase===2);
 $('note').textContent=NOTES[S.phase];
 $('chips').innerHTML=cu.ch.map(v=>`<button class="chip" data-v="${v}">${cu.s}${v.toLocaleString(cu.l)}</button>`).join('');
 tween('center',t,v=>t?fmt(v):'–');$('centerSub').textContent=t?'this month':'\u00a0';
 let cum=0;
 B.forEach(b=>{const p=pct(b),len=Math.max(p/100*C-GAP,.1),s=$('seg-'+b.k);
  s.style.strokeDasharray=`${len} ${C}`;s.style.strokeDashoffset=-(cum+GAP/2);cum+=p/100*C;
  $('pct-'+b.k).textContent=p+'%';$('bar-'+b.k).style.width=p+'%';tween('amt-'+b.k,t*p/100,fmt)});
 document.querySelectorAll('.bucket').forEach(c=>c.style.opacity='');
 document.documentElement.dataset.theme=S.theme||'';if(!S.theme)document.documentElement.removeAttribute('data-theme');
 save();
}
function toast(m){const t=$('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)}

$('amount').addEventListener('input',e=>{let r=e.target.value.replace(/[^\d.]/g,'');const p=r.split('.');if(p.length>2)r=p[0]+'.'+p.slice(1).join('');
 const[i,d]=r.split('.');e.target.value=(i?Number(i).toLocaleString(CUR[S.cur].l):'')+(d!==undefined?'.'+d.slice(0,2):'');S.amount=e.target.value;render()});
$('chips').addEventListener('click',e=>{const v=e.target.dataset.v;if(!v)return;S.amount=Number(v).toLocaleString(CUR[S.cur].l);$('amount').value=S.amount;render()});
$('p1').onclick=()=>{S.phase=1;render()};$('p2').onclick=()=>{S.phase=2;render()};
$('cur').onchange=e=>{S.cur=e.target.value;const n=num();S.amount=n?n.toLocaleString(CUR[S.cur].l):'';$('amount').value=S.amount;render()};
$('theme').onclick=()=>{const dark=S.theme?S.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;S.theme=dark?'light':'dark';render()};
$('reset').onclick=()=>{S.amount='';S.phase=1;$('amount').value='';render();toast('Reset')};
$('copy').onclick=async()=>{const t=num();if(!t){toast('Enter an amount first');return}
 const txt=`Money Plan · Phase ${S.phase} · ${fmt(t)}\n`+B.map(b=>`${b.n} (${pct(b)}%): ${fmt(t*pct(b)/100)}`).join('\n');
 try{await navigator.clipboard.writeText(txt);toast('Copied to clipboard')}catch(e){toast('Copy not available here')}};

$('cur').value=S.cur;$('amount').value=S.amount;render();

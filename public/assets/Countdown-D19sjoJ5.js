import{At as e,Cn as t,Ct as n,Lt as r,Nt as i,Tt as a,dt as o,en as s,ft as c,mt as l,pn as u,pt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{i as h,l as g,n as _,o as v,r as y,s as b,t as x}from"./vapor-runtime-ygJWVcNn.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as T}from"./Code-DhoWkRkB.js";import{n as E,t as D}from"./src-CCTNpCXV.js";import{t as O}from"./tabs-B1XdBEJF.js";import{r as k}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var A=`HH:mm:ss`,j=1e3/30,M=1e3,N=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],P=(e,t)=>t?`${e} ${t}`:e,F=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return N.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?j:M,z=e=>`value`in e,B=(e,t)=>{let n=`--value: ${String(e)};`;return t!=null&&(n+=` --digits: ${String(t)};`),n},V=e=>typeof e==`string`?e.replace(/ /g,`\xA0`):e,H=e=>e.digits>1?e.digits:void 0,U=(e,t)=>t[e.unit]??0,W=(e,t,n,r)=>{!e.style||typeof e.style.setProperty!=`function`||typeof e.setAttribute!=`function`||(e.style.setProperty(`--value`,String(t)),n==null?(e.style.removeProperty(`--digits`),e.removeAttribute(`data-countdown-digits`)):(e.style.setProperty(`--digits`,String(n)),e.setAttribute(`data-countdown-digits`,String(n))),e.setAttribute(`aria-live`,r),e.setAttribute(`aria-label`,String(t)),e.setAttribute(`data-countdown-value`,String(t)))},G=Object.assign(l=>{let y=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>u(0)),t=null,n=!1,i=null,a=()=>{},o=()=>{t!=null&&(clearInterval(t),t=null)},c=()=>{let t=F(l.value);if(t==null)return e.value=0,a(),l.onChange&&l.onChange(void 0),o(),!1;let r=Math.max(t-Date.now(),0);return e.value=r,a(),l.onChange&&l.onChange(r),r<=0?(o(),n||(n=!0,l.onFinish&&l.onFinish()),!1):(n=!1,!0)},d=()=>{if(o(),l.value==null){e.value=0;return}c()&&(t=setInterval(c,R(l.format===void 0?A:l.format,l.interval)))};S(`watch:1:1`,()=>s(()=>`${F(l.value)??`invalid`}|${l.format===void 0?A:l.format}|${l.interval??``}`,()=>{n=!1,d()},{immediate:!0})),h(o);let f=S(`computed:1:2`,()=>r(()=>P(`countdown`,l.className))),p=S(`computed:1:3`,()=>r(()=>!!(l.items&&l.items.length))),m=S(`computed:1:4`,()=>r(()=>!p.get()&&l.value!=null)),g=S(`computed:1:5`,()=>r(()=>I(l.format===void 0?A:l.format))),_=S(`computed:1:6`,()=>r(()=>l.ariaLive??((l.format===void 0?A:l.format).includes(`S`)?`off`:`polite`)));return a=()=>{let t=m.get(),n=g.get(),r=L(e.value,n),a=_.get();!i||!t||Array.from(i.children??[]).forEach(e=>{let t=e,i=Number(t.dataset.countdownTokenIndex),o=n[i];!o||o.type!==`unit`||W(t,U(o,r),H(o),a)})},{remaining:e,stopTimer:o,syncRemaining:c,startTimer:d,resolvedClassName:f,hasItems:p,usesTimerMode:m,formatTokens:g,resolvedAriaLive:_,getTimerTokenValue:t=>U(t,L(e.value,g.get())),setRootElement:e=>{i=e,a()},timer:t,finished:n,rootElement:i,syncTimerDom:a}})),{remaining:x,stopTimer:T,syncRemaining:E,startTimer:D,resolvedClassName:O,hasItems:k,usesTimerMode:j,formatTokens:M,resolvedAriaLive:N,getTimerTokenValue:G,setRootElement:K}=y,{timer:ee,finished:q,rootElement:te,syncTimerDom:J}=y;return g(t=>{let r=d(`span`,t),s=w(r,()=>K);_(()=>{s()}),p(()=>{a(r,O.get())});let u=o(`rue:slot:anchor`);return f(r,u),p(()=>{let t=k.get()?g(()=>{let t=c(),r=o(`rue:list:start`),s=o(`rue:list:end`);f(t,r),f(t,s);let u=new Map;return p(()=>{u=C({items:(l.items??[])||[],getKey:(e,t)=>t,elements:u,parent:r.parentNode,before:s,start:r,renderItem:(t,r,s,l,u)=>{b(z(t)?g(()=>{let r=c(),s=d(`span`,r);f(r,s),p(()=>{let n=B(t.value,t.digits);e(s,n)}),p(()=>{n(s,`aria-live`,String(t.ariaLive??`polite`))}),p(()=>{n(s,`aria-label`,String(t.ariaLabel??String(t.value)))}),p(()=>{n(s,`data-countdown-value`,String(String(t.value)))}),p(()=>{i(s,t.digits==null?{}:{"data-countdown-digits":String(t.digits)})}),p(()=>{a(s,t.className?t.className.trim():``)});let l=o(`rue:children:anchor`);return f(s,l),p(()=>{let e=t.children;m(()=>v(e,s,l))}),r}):V(t.content),r,s,l)}})}),t}):j.get()?g(()=>{let t=c(),r=o(`rue:list:start`),a=o(`rue:list:end`);f(t,r),f(t,a);let s=new Map;return p(()=>{s=C({items:M.get()||[],getKey:(e,t)=>t,elements:s,parent:r.parentNode,before:a,start:r,renderItem:(t,r,a,o,s)=>{b(t.type===`unit`?g(()=>{let r=c(),a=d(`span`,r);return f(r,a),p(()=>{n(a,`key`,String(s))}),p(()=>{n(a,`data-countdown-token-index`,String(String(s)))}),p(()=>{let n=B(G(t),H(t));e(a,n)}),p(()=>{n(a,`aria-live`,String(N.get()))}),p(()=>{n(a,`aria-label`,String(String(G(t))))}),p(()=>{n(a,`data-countdown-value`,String(String(G(t))))}),p(()=>{i(a,H(t)==null?{}:{"data-countdown-digits":String(H(t))})}),r}):V(t.content),r,a,o)}})}),t}):l.children;m(()=>v(t,r,u))}),r})},{Value:s=>{let{resolvedClassName:c}=S(`useSetup:0:0:dup1`,()=>t(()=>({resolvedClassName:S(`computed:1:7`,()=>r(()=>s.className?s.className.trim():``))})));return g(t=>{let r=d(`span`,t);p(()=>{let t=B(s.value,s.digits);e(r,t)}),p(()=>{n(r,`aria-live`,String(s.ariaLive===void 0?`polite`:s.ariaLive))}),p(()=>{n(r,`aria-label`,String(s.ariaLabel??String(s.value)))}),p(()=>{n(r,`data-countdown-value`,String(String(s.value)))}),p(()=>{i(r,s.digits==null?{}:{"data-countdown-digits":String(s.digits)})}),p(()=>{a(r,c.get())});let l=o(`rue:slot:anchor`);return f(r,l),p(()=>{let e=s.children==null?String(s.value):s.children;m(()=>v(e,r,l))}),r})}}),K=e=>g(t=>{let n=d(`div`,t);a(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=d(`div`,n);f(n,r),a(r,`flex flex-wrap items-start justify-between gap-3`);let i=d(`div`,r);f(r,i);let s=d(`h2`,i);f(i,s),a(s,`component-preview-title mt-2 mb-1 text-lg font-semibold`),f(s,l(`# `));let u=o(`rue:slot:anchor`);f(s,u),p(()=>{let t=e.title;m(()=>v(t,s,u))});let h=o(`rue:slot:anchor`);f(i,h),p(()=>{let t=e.summary?g(()=>{let t=c(),n=d(`p`,t);f(t,n),a(n,`m-0 text-sm opacity-70`);let r=o(`rue:slot:anchor`);return f(n,r),p(()=>{let t=e.summary;m(()=>v(t,n,r))}),t}):``;m(()=>v(t,i,h))});let _=o(`rue:component:anchor`);f(n,_),p(()=>{let t=x(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});m(()=>v(t,n,_))});let y=o(`rue:slot:anchor`);return f(n,y),p(()=>{let t=e.tab.value===`preview`?e.preview():g(()=>{let t=c(),n=o(`rue:component:anchor`);return f(t,n),p(()=>{let r=x(T,{className:`mt-2`,lang:`tsx`,code:e.code});m(()=>v(r,t,n))}),t});m(()=>v(t,n,y))}),n}),ee=e=>g(t=>{let r=d(`div`,t);a(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=d(`table`,r);f(r,i),a(i,`table table-zebra`);let s=d(`thead`,i);f(i,s);let u=d(`tr`,s);f(s,u);let h=d(`th`,u);f(u,h),f(h,l(`属性`));let _=d(`th`,u);f(u,_),f(_,l(`说明`));let y=d(`th`,u);f(u,y),f(y,l(`类型`));let b=d(`th`,u);f(u,b),f(b,l(`默认值`));let x=d(`tbody`,i);f(i,x);let S=o(`rue:list:start`),w=o(`rue:list:end`);f(x,S),f(x,w);let T=new Map;return p(()=>{T=C({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,t,r,i,a)=>{v(g(()=>{let t=c(),r=d(`tr`,t);f(t,r),p(()=>{n(r,`key`,String(e.prop))});let i=d(`td`,r);f(r,i);let a=d(`code`,i);f(i,a);let s=o(`rue:slot:anchor`);f(a,s),p(()=>{let t=e.prop;m(()=>v(t,a,s))});let l=d(`td`,r);f(r,l);let u=o(`rue:slot:anchor`);f(l,u),p(()=>{let t=e.description;m(()=>v(t,l,u))});let h=d(`td`,r);f(r,h);let g=d(`code`,h);f(h,g);let _=o(`rue:slot:anchor`);f(g,_),p(()=>{let t=e.type;m(()=>v(t,g,_))});let y=d(`td`,r);f(r,y);let b=d(`code`,y);f(y,b);let x=o(`rue:slot:anchor`);return f(b,x),p(()=>{let t=e.defaultValue;m(()=>v(t,b,x))}),t}),t,r)}})}),r}),q=e=>g(t=>{let n=d(`div`,t);p(()=>{a(n,e.className)});let r=o(`rue:component:anchor`);f(n,r),p(()=>{let t=x(G,{className:e.countdownClassName,children:e.children});m(()=>v(t,n,r))});let i=o(`rue:slot:anchor`);return f(n,i),p(()=>{let t=e.label;m(()=>v(t,n,i))}),n}),te=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保持字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],J=()=>{let e=S(`useSetup:0:0`,()=>t(()=>{let e=S(`ref:1:0`,()=>u(59)),t=null,n=S(`ref:1:1`,()=>u(Date.now()+600*60*1e3+1440*1e3+59*1e3)),i=S(`ref:1:2`,()=>u(Math.max(Math.floor((n.value-Date.now())/1e3),0))),a=S(`ref:1:3`,()=>u(Math.floor(i.value/3600))),o=S(`ref:1:4`,()=>u(Math.floor(i.value%3600/60))),s=S(`ref:1:5`,()=>u(i.value%60)),c=S(`ref:1:6`,()=>u(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),l=S(`ref:1:7`,()=>u(Date.now()+10*1e3)),d=S(`ref:1:8`,()=>u(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),f=S(`ref:1:9`,()=>u(Date.now()+10*1e3)),p=S(`ref:1:10`,()=>u(`计时中`)),m=S(`ref:1:11`,()=>u(1e4)),g=()=>{let e=Math.max(Math.floor((n.value-Date.now())/1e3),0);i.value=e,a.value=Math.floor(e/3600),o.value=Math.floor(e%3600/60),s.value=e%60},_=()=>{t!=null&&(clearInterval(t),t=null)},v=()=>{t??=(g(),setInterval(()=>{e.value=e.value>0?e.value-1:59,g()},1e3))};return y(()=>{v()}),h(_),{counter:e,comboTarget:n,comboTotalSeconds:i,comboHours:a,comboMinutes:o,comboSeconds:s,basicTarget:c,millisecondTarget:l,dayLevelTarget:d,callbackTarget:f,callbackStatus:p,callbackRemaining:m,syncComboCountdown:g,stopTimer:_,startTimer:v,tabBasic:S(`ref:1:12`,()=>u(`preview`)),tabLarge2:S(`ref:1:13`,()=>u(`preview`)),tabClock:S(`ref:1:14`,()=>u(`preview`)),tabClockColon:S(`ref:1:15`,()=>u(`preview`)),tabLabels:S(`ref:1:16`,()=>u(`preview`)),tabLabelsUnder:S(`ref:1:17`,()=>u(`preview`)),tabInBoxes:S(`ref:1:18`,()=>u(`preview`)),tabArrayInternal:S(`ref:1:19`,()=>u(`preview`)),tabTarget:S(`ref:1:20`,()=>u(`preview`)),tabMillisecond:S(`ref:1:21`,()=>u(`preview`)),tabDayLevel:S(`ref:1:22`,()=>u(`preview`)),tabCallbacks:S(`ref:1:23`,()=>u(`preview`)),countdownItems:S(`computed:1:24`,()=>r(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{c.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59},restartMillisecondDemo:()=>{l.value=Date.now()+10*1e3},restartDayLevelDemo:()=>{d.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3},restartCallbackDemo:()=>{p.value=`计时中`,m.value=1e4,f.value=Date.now()+10*1e3},timer:t}})),{counter:n,comboTarget:i,comboTotalSeconds:s,comboHours:_,comboMinutes:b,comboSeconds:C,basicTarget:w,millisecondTarget:T,dayLevelTarget:O,callbackTarget:A,callbackStatus:j,callbackRemaining:M,syncComboCountdown:N,stopTimer:P,startTimer:F,tabBasic:I,tabLarge2:L,tabClock:R,tabClockColon:z,tabLabels:B,tabLabelsUnder:V,tabInBoxes:H,tabArrayInternal:U,tabTarget:W,tabMillisecond:J,tabDayLevel:ne,tabCallbacks:re,countdownItems:ie,restartTargetDemo:ae,restartMillisecondDemo:oe,restartDayLevelDemo:se,restartCallbackDemo:ce}=e,{timer:Y}=e;return g(e=>{let t=c(),r=o(`rue:component:anchor`);return f(t,r),v(x(k,{children:g(()=>{let e=c(),t=d(`div`,e);f(e,t),a(t,`max-w-none prose prose-sm md:prose-base`);let r=d(`h1`,t);f(t,r),f(r,l(`Countdown 倒计时`));let i=d(`p`,t);f(t,i),a(i,`text-sm mt-3 mb-3`),f(i,l("现在既能可以使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let u=o(`rue:component:anchor`);f(t,u),p(()=>{let e=x(K,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:W,preview:()=>E(`div`,{className:`space-y-4`,children:[D(G,{className:`font-mono text-4xl`,value:w.value,format:`HH:mm:ss`},w.value),D(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:ae,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});m(()=>v(e,t,u))});let h=o(`rue:component:anchor`);f(t,h),p(()=>{let e=x(K,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:J,preview:()=>E(`div`,{className:`space-y-4`,children:[D(G,{className:`font-mono text-3xl`,value:T.value,format:`HH:mm:ss:SSS`,interval:250},T.value),D(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:oe,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
  interval={250}
/>`});m(()=>v(e,t,h))});let g=o(`rue:component:anchor`);f(t,g),p(()=>{let e=x(K,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ne,preview:()=>E(`div`,{className:`space-y-4`,children:[D(G,{className:`font-mono text-2xl`,value:O.value,format:`D [days] H [hours] m [minutes] s [seconds]`},O.value),D(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:se,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});m(()=>v(e,t,g))});let y=o(`rue:component:anchor`);f(t,y),p(()=>{let e=x(K,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:re,preview:()=>E(`div`,{className:`space-y-4`,children:[D(G,{className:`font-mono text-3xl`,value:A.value,format:`s.SSS`,interval:250,onChange:e=>{M.value=Math.max(Math.round(e??0),0)},onFinish:()=>{j.value=`已完成`}},A.value),E(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,M.value,` ms`]}),E(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,j.value]}),D(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
const status = ref('计时中')
const lastRemaining = ref(10_000)

<Countdown
  className="font-mono text-3xl"
  value={target}
  format="s.SSS"
  interval={250}
  onChange={remaining => {
    lastRemaining.value = Math.max(Math.round(remaining ?? 0), 0)
  }}
  onFinish={() => {
    status.value = '已完成'
  }}
/>`});m(()=>v(e,t,y))});let S=d(`h2`,t);f(t,S),f(S,l(`组合方式`));let k=d(`p`,t);f(t,k),a(k,`text-sm`),f(k,l("这组示例使用 Rue 组合式写法，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let N=o(`rue:component:anchor`);f(t,N),p(()=>{let e=x(K,{title:`Countdown`,tab:I,preview:()=>D(G,{children:D(G.Value,{value:s.value,ariaLabel:`${s.value} seconds remaining`})}),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});m(()=>v(e,t,N))});let P=o(`rue:component:anchor`);f(t,P),p(()=>{let e=x(K,{title:`Large Text With 2 Digits`,tab:L,preview:()=>D(G,{className:`font-mono text-6xl`,children:D(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds remaining`})}),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});m(()=>v(e,t,P))});let F=o(`rue:component:anchor`);f(t,F),p(()=>{let e=x(K,{title:`Clock Countdown`,tab:R,preview:()=>E(G,{className:`font-mono text-2xl`,children:[D(G.Value,{value:_.value,ariaLabel:`${_.value} hours`}),`h`,D(G.Value,{value:b.value,digits:2,ariaLabel:`${b.value} minutes`}),`m`,D(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds`}),`s`]}),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)

  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
})

<Countdown className="font-mono text-2xl">
  <Countdown.Value value={parts.get().hours} ariaLabel={\`\${parts.get().hours} hours\`} />h
  <Countdown.Value value={parts.get().minutes} digits={2} ariaLabel={\`\${parts.get().minutes} minutes\`} />m
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds\`} />s
</Countdown>`});m(()=>v(e,t,F))});let Y=o(`rue:component:anchor`);f(t,Y),p(()=>{let e=x(K,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:U,preview:()=>D(G,{className:`font-mono text-2xl`,items:ie.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});m(()=>v(e,t,Y))});let X=o(`rue:component:anchor`);f(t,X),p(()=>{let e=x(K,{title:`Clock Countdown With Colons`,tab:z,preview:()=>E(G,{className:`font-mono text-2xl`,children:[D(G.Value,{value:10,ariaLabel:`10`}),`:`,D(G.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,D(G.Value,{value:n.value,digits:2,ariaLabel:String(n.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});m(()=>v(e,t,X))});let Z=o(`rue:component:anchor`);f(t,Z),p(()=>{let e=x(K,{title:`Large Text With Labels`,tab:B,preview:()=>E(`div`,{className:`flex gap-5`,children:[D(q,{label:`days`,countdownClassName:`font-mono text-4xl`,children:D(G.Value,{value:15,ariaLabel:`15`})}),D(q,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:D(G.Value,{value:10,ariaLabel:`10`})}),D(q,{label:`min`,countdownClassName:`font-mono text-4xl`,children:D(G.Value,{value:24,ariaLabel:`24`})}),D(q,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:D(G.Value,{value:n.value,ariaLabel:String(n.value)})})]}),code:`<div className="flex gap-5">
  <div>
    <Countdown className="font-mono text-4xl">
      <Countdown.Value value={15} ariaLabel="15" />
    </Countdown>
    days
  </div>
  <div>
    <Countdown className="font-mono text-4xl">
      <Countdown.Value value={10} ariaLabel="10" />
    </Countdown>
    hours
  </div>
  <div>
    <Countdown className="font-mono text-4xl">
      <Countdown.Value value={24} ariaLabel="24" />
    </Countdown>
    min
  </div>
  <div>
    <Countdown className="font-mono text-4xl">
      <Countdown.Value value={59} ariaLabel="59" />
    </Countdown>
    sec
  </div>
</div>`});m(()=>v(e,t,Z))});let Q=o(`rue:component:anchor`);f(t,Q),p(()=>{let e=x(K,{title:`Large Text With Labels Under`,tab:V,preview:()=>E(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[D(q,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:15,ariaLabel:`15`})}),D(q,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:10,ariaLabel:`10`})}),D(q,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:24,ariaLabel:`24`})}),D(q,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:n.value,ariaLabel:String(n.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={15} ariaLabel="15" />
    </Countdown>
    days
  </div>
  <div className="flex flex-col">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={10} ariaLabel="10" />
    </Countdown>
    hours
  </div>
  <div className="flex flex-col">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={24} ariaLabel="24" />
    </Countdown>
    min
  </div>
  <div className="flex flex-col">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={59} ariaLabel="59" />
    </Countdown>
    sec
  </div>
</div>`});m(()=>v(e,t,Q))});let $=o(`rue:component:anchor`);f(t,$),p(()=>{let e=x(K,{title:`In Boxes`,tab:H,preview:()=>E(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[D(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:15,ariaLabel:`15`})}),D(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:10,ariaLabel:`10`})}),D(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:24,ariaLabel:`24`})}),D(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:n.value,ariaLabel:String(n.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={15} ariaLabel="15" />
    </Countdown>
    days
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={10} ariaLabel="10" />
    </Countdown>
    hours
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={24} ariaLabel="24" />
    </Countdown>
    min
  </div>
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <Countdown className="font-mono text-5xl">
      <Countdown.Value value={59} ariaLabel="59" />
    </Countdown>
    sec
  </div>
</div>`});m(()=>v(e,t,$))});let le=d(`h2`,t);f(t,le),f(le,l(`API`));let ue=o(`rue:component:anchor`);return f(t,ue),p(()=>{let e=x(ee,{rows:te});m(()=>v(e,t,ue))}),e})}),t,r),t})};export{J as default};
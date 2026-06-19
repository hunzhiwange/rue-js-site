import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,Zt as o,et as s,gt as c,i as l,l as u,lt as d,n as f,o as p,pt as m,r as h,s as g,st as _,t as v,tt as y,vt as b,zt as x}from"./vapor-runtime-CXIalONM.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as T,i as E}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as D}from"./Code-BIscIyEp.js";import{t as O}from"./tabs-CZWMQq5i.js";import{r as k}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var A=`HH:mm:ss`,j=1e3/30,M=1e3,N=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],P=(e,t)=>t?`${e} ${t}`:e,F=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return N.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?j:M,z=e=>`value`in e,B=(e,t)=>{let n=`--value: ${String(e)};`;return t!=null&&(n+=` --digits: ${String(t)};`),n},V=e=>typeof e==`string`?e.replace(/ /g,`\xA0`):e,H=e=>e.digits>1?e.digits:void 0,U=(e,t)=>t[e.unit]??0,W=(e,t,n,r)=>{e.style.setProperty(`--value`,String(t)),n==null?(e.style.removeProperty(`--digits`),e.removeAttribute(`data-countdown-digits`)):(e.style.setProperty(`--digits`,String(n)),e.setAttribute(`data-countdown-digits`,String(n))),e.setAttribute(`aria-live`,r),e.setAttribute(`aria-label`,String(t)),e.setAttribute(`data-countdown-value`,String(t))},G=Object.assign(h=>{let v=S(`useSetup:0:0`,()=>a(()=>{let e=S(`ref:1:0`,()=>x(0)),t=null,n=!1,r=null,i=()=>{},a=()=>{t!=null&&(clearInterval(t),t=null)},s=()=>{let t=F(h.value);if(t==null)return e.value=0,i(),h.onChange&&h.onChange(void 0),a(),!1;let r=Math.max(t-Date.now(),0);return e.value=r,i(),h.onChange&&h.onChange(r),r<=0?(a(),n||(n=!0,h.onFinish&&h.onFinish()),!1):(n=!1,!0)},c=()=>{if(a(),h.value==null){e.value=0;return}s()&&(t=setInterval(s,R(h.format===void 0?A:h.format,h.interval)))};S(`watch:1:1`,()=>o(()=>`${F(h.value)??`invalid`}|${h.format===void 0?A:h.format}|${h.interval??``}`,()=>{n=!1,c()},{immediate:!0})),l(a);let u=S(`computed:1:2`,()=>b(()=>P(`countdown`,h.className))),d=S(`computed:1:3`,()=>b(()=>!!(h.items&&h.items.length))),f=S(`computed:1:4`,()=>b(()=>!d.get()&&h.value!=null)),p=S(`computed:1:5`,()=>b(()=>I(h.format===void 0?A:h.format))),m=S(`computed:1:6`,()=>b(()=>h.ariaLive??((h.format===void 0?A:h.format).includes(`S`)?`off`:`polite`)));return i=()=>{let t=f.get(),n=p.get(),i=L(e.value,n),a=m.get();!r||!t||Array.from(r.children).forEach(e=>{let t=e,r=n[Number(t.dataset.countdownTokenIndex)];!r||r.type!==`unit`||W(t,U(r,i),H(r),a)})},{remaining:e,stopTimer:a,syncRemaining:s,startTimer:c,resolvedClassName:u,hasItems:d,usesTimerMode:f,formatTokens:p,resolvedAriaLive:m,getTimerTokenValue:t=>U(t,L(e.value,p.get())),setRootElement:e=>{r=e,i()},timer:t,finished:n,rootElement:r,syncTimerDom:i}})),{remaining:y,stopTimer:T,syncRemaining:E,startTimer:D,resolvedClassName:O,hasItems:k,usesTimerMode:j,formatTokens:M,resolvedAriaLive:N,getTimerTokenValue:G,setRootElement:K}=v,{timer:ee,finished:q,rootElement:te,syncTimerDom:J}=v;return u(a=>{let o=s(`span`,a),l=w(o,()=>K);f(()=>{l()}),n(()=>{d(o,O.get())});let v=t(`rue:slot:anchor`);return i(o,v),n(()=>{let a=k.get()?u(()=>{let a=e(),o=t(`rue:list:start`),l=t(`rue:list:end`);i(a,o),i(a,l);let f=new Map;return n(()=>{f=C({items:(h.items??[])||[],getKey:(e,t)=>t,elements:f,parent:o.parentNode,before:l,start:o,renderItem:(a,o,l,f,h)=>{g(z(a)?u(()=>{let o=e(),l=s(`span`,o);i(o,l),n(()=>{m(l,B(a.value,a.digits))}),n(()=>{_(l,`aria-live`,String(a.ariaLive??`polite`))}),n(()=>{_(l,`aria-label`,String(a.ariaLabel??String(a.value)))}),n(()=>{_(l,`data-countdown-value`,String(String(a.value)))}),n(()=>{c(l,a.digits==null?{}:{"data-countdown-digits":String(a.digits)})}),n(()=>{d(l,a.className?a.className.trim():``)});let u=t(`rue:children:anchor`);return i(l,u),n(()=>{let e=a.children;r(()=>p(e,l,u))}),o}):V(a.content),o,l,f)}})}),a}):j.get()?u(()=>{let r=e(),a=t(`rue:list:start`),o=t(`rue:list:end`);i(r,a),i(r,o);let l=new Map;return n(()=>{l=C({items:M.get()||[],getKey:(e,t)=>t,elements:l,parent:a.parentNode,before:o,start:a,renderItem:(t,r,a,o,l)=>{g(t.type===`unit`?u(()=>{let r=e(),a=s(`span`,r);return i(r,a),n(()=>{_(a,`key`,String(l))}),n(()=>{_(a,`data-countdown-token-index`,String(String(l)))}),n(()=>{m(a,B(G(t),H(t)))}),n(()=>{_(a,`aria-live`,String(N.get()))}),n(()=>{_(a,`aria-label`,String(String(G(t))))}),n(()=>{_(a,`data-countdown-value`,String(String(G(t))))}),n(()=>{c(a,H(t)==null?{}:{"data-countdown-digits":String(H(t))})}),r}):V(t.content),r,a,o)}})}),r}):h.children;r(()=>p(a,o,v))}),o})},{Value:e=>{let{resolvedClassName:o}=S(`useSetup:0:0:dup1`,()=>a(()=>({resolvedClassName:S(`computed:1:7`,()=>b(()=>e.className?e.className.trim():``))})));return u(a=>{let l=s(`span`,a);n(()=>{m(l,B(e.value,e.digits))}),n(()=>{_(l,`aria-live`,String(e.ariaLive===void 0?`polite`:e.ariaLive))}),n(()=>{_(l,`aria-label`,String(e.ariaLabel??String(e.value)))}),n(()=>{_(l,`data-countdown-value`,String(String(e.value)))}),n(()=>{c(l,e.digits==null?{}:{"data-countdown-digits":String(e.digits)})}),n(()=>{d(l,o.get())});let u=t(`rue:slot:anchor`);return i(l,u),n(()=>{let t=e.children==null?String(e.value):e.children;r(()=>p(t,l,u))}),l})}}),K=a=>u(o=>{let c=s(`div`,o);d(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=s(`div`,c);i(c,l),d(l,`flex flex-wrap items-start justify-between gap-3`);let f=s(`div`,l);i(l,f);let m=s(`h2`,f);i(f,m),d(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(m,y(`# `));let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.title;r(()=>p(e,m,h))});let g=t(`rue:slot:anchor`);i(f,g),n(()=>{let o=a.summary?u(()=>{let o=e(),c=s(`p`,o);i(o,c),d(c,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return i(c,l),n(()=>{let e=a.summary;r(()=>p(e,c,l))}),o}):``;r(()=>p(o,f,g))});let _=t(`rue:component:anchor`);i(c,_),n(()=>{let e=v(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>p(e,c,_))});let b=t(`rue:slot:anchor`);return i(c,b),n(()=>{let o=a.tab.value===`preview`?a.preview():u(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=v(D,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>p(e,o,s))}),o});r(()=>p(o,c,b))}),c}),ee=a=>u(o=>{let c=s(`div`,o);d(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=s(`table`,c);i(c,l),d(l,`table table-zebra`);let f=s(`thead`,l);i(l,f);let m=s(`tr`,f);i(f,m);let h=s(`th`,m);i(m,h),i(h,y(`属性`));let g=s(`th`,m);i(m,g),i(g,y(`说明`));let v=s(`th`,m);i(m,v),i(v,y(`类型`));let b=s(`th`,m);i(m,b),i(b,y(`默认值`));let x=s(`tbody`,l);i(l,x);let S=t(`rue:list:start`),w=t(`rue:list:end`);i(x,S),i(x,w);let T=new Map;return n(()=>{T=C({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(a,o,c,l,d)=>{p(u(()=>{let o=e(),c=s(`tr`,o);i(o,c),n(()=>{_(c,`key`,String(a.prop))});let l=s(`td`,c);i(c,l);let u=s(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>p(e,u,d))});let f=s(`td`,c);i(c,f);let m=t(`rue:slot:anchor`);i(f,m),n(()=>{let e=a.description;r(()=>p(e,f,m))});let h=s(`td`,c);i(c,h);let g=s(`code`,h);i(h,g);let v=t(`rue:slot:anchor`);i(g,v),n(()=>{let e=a.type;r(()=>p(e,g,v))});let y=s(`td`,c);i(c,y);let b=s(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>p(e,b,x))}),o}),o,c)}})}),c}),q=e=>u(a=>{let o=s(`div`,a);n(()=>{d(o,e.className)});let c=t(`rue:component:anchor`);i(o,c),n(()=>{let t=v(G,{className:e.countdownClassName,children:e.children});r(()=>p(t,o,c))});let l=t(`rue:slot:anchor`);return i(o,l),n(()=>{let t=e.label;r(()=>p(t,o,l))}),o}),te=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],J=()=>{let o=S(`useSetup:0:0`,()=>a(()=>{let e=S(`ref:1:0`,()=>x(59)),t=null,n=S(`ref:1:1`,()=>x(Date.now()+600*60*1e3+1440*1e3+59*1e3)),r=S(`ref:1:2`,()=>x(Math.max(Math.floor((n.value-Date.now())/1e3),0))),i=S(`ref:1:3`,()=>x(Math.floor(r.value/3600))),a=S(`ref:1:4`,()=>x(Math.floor(r.value%3600/60))),o=S(`ref:1:5`,()=>x(r.value%60)),s=S(`ref:1:6`,()=>x(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),c=S(`ref:1:7`,()=>x(Date.now()+10*1e3)),u=S(`ref:1:8`,()=>x(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),d=S(`ref:1:9`,()=>x(Date.now()+10*1e3)),f=S(`ref:1:10`,()=>x(`计时中`)),p=S(`ref:1:11`,()=>x(1e4)),m=()=>{let e=Math.max(Math.floor((n.value-Date.now())/1e3),0);r.value=e,i.value=Math.floor(e/3600),a.value=Math.floor(e%3600/60),o.value=e%60},g=()=>{t!=null&&(clearInterval(t),t=null)},_=()=>{t??=(m(),setInterval(()=>{e.value=e.value>0?e.value-1:59,m()},1e3))};return h(()=>{_()}),l(g),{counter:e,comboTarget:n,comboTotalSeconds:r,comboHours:i,comboMinutes:a,comboSeconds:o,basicTarget:s,millisecondTarget:c,dayLevelTarget:u,callbackTarget:d,callbackStatus:f,callbackRemaining:p,syncComboCountdown:m,stopTimer:g,startTimer:_,tabBasic:S(`ref:1:12`,()=>x(`preview`)),tabLarge2:S(`ref:1:13`,()=>x(`preview`)),tabClock:S(`ref:1:14`,()=>x(`preview`)),tabClockColon:S(`ref:1:15`,()=>x(`preview`)),tabLabels:S(`ref:1:16`,()=>x(`preview`)),tabLabelsUnder:S(`ref:1:17`,()=>x(`preview`)),tabInBoxes:S(`ref:1:18`,()=>x(`preview`)),tabArrayInternal:S(`ref:1:19`,()=>x(`preview`)),tabTarget:S(`ref:1:20`,()=>x(`preview`)),tabMillisecond:S(`ref:1:21`,()=>x(`preview`)),tabDayLevel:S(`ref:1:22`,()=>x(`preview`)),tabCallbacks:S(`ref:1:23`,()=>x(`preview`)),countdownItems:S(`computed:1:24`,()=>b(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{s.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59},restartMillisecondDemo:()=>{c.value=Date.now()+10*1e3},restartDayLevelDemo:()=>{u.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3},restartCallbackDemo:()=>{f.value=`计时中`,p.value=1e4,d.value=Date.now()+10*1e3},timer:t}})),{counter:c,comboTarget:f,comboTotalSeconds:m,comboHours:g,comboMinutes:_,comboSeconds:C,basicTarget:w,millisecondTarget:D,dayLevelTarget:O,callbackTarget:A,callbackStatus:j,callbackRemaining:M,syncComboCountdown:N,stopTimer:P,startTimer:F,tabBasic:I,tabLarge2:L,tabClock:R,tabClockColon:z,tabLabels:B,tabLabelsUnder:V,tabInBoxes:H,tabArrayInternal:U,tabTarget:W,tabMillisecond:J,tabDayLevel:ne,tabCallbacks:re,countdownItems:ie,restartTargetDemo:ae,restartMillisecondDemo:oe,restartDayLevelDemo:se,restartCallbackDemo:ce}=o,{timer:Y}=o;return u(a=>{let o=e(),l=t(`rue:component:anchor`);return i(o,l),p(v(k,{children:u(()=>{let a=e(),o=s(`div`,a);i(a,o),d(o,`max-w-none prose prose-sm md:prose-base`);let l=s(`h1`,o);i(o,l),i(l,y(`Countdown 倒计时`));let u=s(`p`,o);i(o,u),d(u,`text-sm mt-3 mb-3`),i(u,y("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let f=t(`rue:component:anchor`);i(o,f),n(()=>{let e=v(K,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:W,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-4xl`,value:w.value,format:`HH:mm:ss`},w.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:ae,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});r(()=>p(e,o,f))});let h=t(`rue:component:anchor`);i(o,h),n(()=>{let e=v(K,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:J,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-3xl`,value:D.value,format:`HH:mm:ss:SSS`,interval:250},D.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:oe,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
  interval={250}
/>`});r(()=>p(e,o,h))});let b=t(`rue:component:anchor`);i(o,b),n(()=>{let e=v(K,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ne,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-2xl`,value:O.value,format:`D [days] H [hours] m [minutes] s [seconds]`},O.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:se,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});r(()=>p(e,o,b))});let x=t(`rue:component:anchor`);i(o,x),n(()=>{let e=v(K,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:re,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-3xl`,value:A.value,format:`s.SSS`,interval:250,onChange:e=>{M.value=Math.max(Math.round(e??0),0)},onFinish:()=>{j.value=`已完成`}},A.value),T(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,M.value,` ms`]}),T(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,j.value]}),E(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});r(()=>p(e,o,x))});let S=s(`h2`,o);i(o,S),i(S,y(`组合方式`));let k=s(`p`,o);i(o,k),d(k,`text-sm`),i(k,y("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let N=t(`rue:component:anchor`);i(o,N),n(()=>{let e=v(K,{title:`Countdown`,tab:I,preview:()=>E(G,{children:E(G.Value,{value:m.value,ariaLabel:`${m.value} seconds remaining`})}),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});r(()=>p(e,o,N))});let P=t(`rue:component:anchor`);i(o,P),n(()=>{let e=v(K,{title:`Large Text With 2 Digits`,tab:L,preview:()=>E(G,{className:`font-mono text-6xl`,children:E(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds remaining`})}),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});r(()=>p(e,o,P))});let F=t(`rue:component:anchor`);i(o,F),n(()=>{let e=v(K,{title:`Clock Countdown`,tab:R,preview:()=>T(G,{className:`font-mono text-2xl`,children:[E(G.Value,{value:g.value,ariaLabel:`${g.value} hours`}),`h`,E(G.Value,{value:_.value,digits:2,ariaLabel:`${_.value} minutes`}),`m`,E(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds`}),`s`]}),code:`const parts = computed(() => {
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
</Countdown>`});r(()=>p(e,o,F))});let Y=t(`rue:component:anchor`);i(o,Y),n(()=>{let e=v(K,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:U,preview:()=>E(G,{className:`font-mono text-2xl`,items:ie.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});r(()=>p(e,o,Y))});let X=t(`rue:component:anchor`);i(o,X),n(()=>{let e=v(K,{title:`Clock Countdown With Colons`,tab:z,preview:()=>T(G,{className:`font-mono text-2xl`,children:[E(G.Value,{value:10,ariaLabel:`10`}),`:`,E(G.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,E(G.Value,{value:c.value,digits:2,ariaLabel:String(c.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});r(()=>p(e,o,X))});let Z=t(`rue:component:anchor`);i(o,Z),n(()=>{let e=v(K,{title:`Large Text With Labels`,tab:B,preview:()=>T(`div`,{className:`flex gap-5`,children:[E(q,{label:`days`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{label:`min`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:c.value,ariaLabel:String(c.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});r(()=>p(e,o,Z))});let Q=t(`rue:component:anchor`);i(o,Q),n(()=>{let e=v(K,{title:`Large Text With Labels Under`,tab:V,preview:()=>T(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[E(q,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:c.value,ariaLabel:String(c.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});r(()=>p(e,o,Q))});let $=t(`rue:component:anchor`);i(o,$),n(()=>{let e=v(K,{title:`In Boxes`,tab:H,preview:()=>T(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:c.value,ariaLabel:String(c.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});r(()=>p(e,o,$))});let le=s(`h2`,o);i(o,le),i(le,y(`API`));let ue=t(`rue:component:anchor`);return i(o,ue),n(()=>{let e=v(ee,{rows:te});r(()=>p(e,o,ue))}),a})}),o,l),o})};export{J as default};
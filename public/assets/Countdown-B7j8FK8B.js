import{$ as e,$t as t,Bt as n,Gt as r,Qt as i,Xt as a,Z as o,_t as s,ct as c,et as l,i as u,l as d,mt as f,n as p,nt as m,o as h,r as g,s as _,t as v,tt as y,ut as b,yt as x}from"./vapor-runtime-CKrmRMZX.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as T,i as E}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as D}from"./Code-D5UqTwV6.js";import{t as O}from"./tabs-DRfs918f.js";import{r as k}from"./SidebarPlaygroundDesign-CWudvLqE.js";var A=`HH:mm:ss`,j=1e3/30,M=1e3,N=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],P=(e,t)=>t?`${e} ${t}`:e,F=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return N.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?j:M,z=e=>`value`in e,B=(e,t)=>{let n=`--value: ${String(e)};`;return t!=null&&(n+=` --digits: ${String(t)};`),n},V=e=>typeof e==`string`?e.replace(/ /g,`\xA0`):e,H=e=>e.digits>1?e.digits:void 0,U=(e,t)=>t[e.unit]??0,W=(e,t,n,r)=>{e.style.setProperty(`--value`,String(t)),n==null?(e.style.removeProperty(`--digits`),e.removeAttribute(`data-countdown-digits`)):(e.style.setProperty(`--digits`,String(n)),e.setAttribute(`data-countdown-digits`,String(n))),e.setAttribute(`aria-live`,r),e.setAttribute(`aria-label`,String(t)),e.setAttribute(`data-countdown-value`,String(t))},G=Object.assign(m=>{let g=S(`useSetup:0:0`,()=>a(()=>{let e=S(`ref:1:0`,()=>n(0)),t=null,r=!1,a=null,o=()=>{},s=()=>{t!=null&&(clearInterval(t),t=null)},c=()=>{let t=F(m.value);if(t==null)return e.value=0,o(),m.onChange&&m.onChange(void 0),s(),!1;let n=Math.max(t-Date.now(),0);return e.value=n,o(),m.onChange&&m.onChange(n),n<=0?(s(),r||(r=!0,m.onFinish&&m.onFinish()),!1):(r=!1,!0)},l=()=>{if(s(),m.value==null){e.value=0;return}c()&&(t=setInterval(c,R(m.format===void 0?A:m.format,m.interval)))};S(`watch:1:1`,()=>i(()=>`${F(m.value)??`invalid`}|${m.format===void 0?A:m.format}|${m.interval??``}`,()=>{r=!1,l()},{immediate:!0})),u(s);let d=S(`computed:1:2`,()=>x(()=>P(`countdown`,m.className))),f=S(`computed:1:3`,()=>x(()=>!!(m.items&&m.items.length))),p=S(`computed:1:4`,()=>x(()=>!f.get()&&m.value!=null)),h=S(`computed:1:5`,()=>x(()=>I(m.format===void 0?A:m.format))),g=S(`computed:1:6`,()=>x(()=>m.ariaLive??((m.format===void 0?A:m.format).includes(`S`)?`off`:`polite`)));return o=()=>{let t=p.get(),n=h.get(),r=L(e.value,n),i=g.get();!a||!t||Array.from(a.children).forEach(e=>{let t=e,a=n[Number(t.dataset.countdownTokenIndex)];!a||a.type!==`unit`||W(t,U(a,r),H(a),i)})},{remaining:e,stopTimer:s,syncRemaining:c,startTimer:l,resolvedClassName:d,hasItems:f,usesTimerMode:p,formatTokens:h,resolvedAriaLive:g,getTimerTokenValue:t=>U(t,L(e.value,h.get())),setRootElement:e=>{a=e,o()},timer:t,finished:r,rootElement:a,syncTimerDom:o}})),{remaining:v,stopTimer:T,syncRemaining:E,startTimer:D,resolvedClassName:O,hasItems:k,usesTimerMode:j,formatTokens:M,resolvedAriaLive:N,getTimerTokenValue:G,setRootElement:K}=g,{timer:ee,finished:q,rootElement:te,syncTimerDom:J}=g;return d(n=>{let i=y(`span`,n),a=w(i,()=>K);p(()=>{a()}),t(()=>{b(i,O.get())});let u=e(`rue:slot:anchor`);return o(i,u),t(()=>{let n=k.get()?d(()=>{let n=l(),i=e(`rue:list:start`),a=e(`rue:list:end`);o(n,i),o(n,a);let u=new Map;return t(()=>{u=C({items:(m.items??[])||[],getKey:(e,t)=>t,elements:u,parent:i.parentNode,before:a,start:i,renderItem:(n,i,a,u,p)=>{_(z(n)?d(()=>{let i=l(),a=y(`span`,i);o(i,a),t(()=>{f(a,B(n.value,n.digits))}),t(()=>{c(a,`aria-live`,String(n.ariaLive??`polite`))}),t(()=>{c(a,`aria-label`,String(n.ariaLabel??String(n.value)))}),t(()=>{c(a,`data-countdown-value`,String(String(n.value)))}),t(()=>{s(a,n.digits==null?{}:{"data-countdown-digits":String(n.digits)})}),t(()=>{b(a,n.className?n.className.trim():``)});let u=e(`rue:children:anchor`);return o(a,u),t(()=>{let e=n.children;r(()=>h(e,a,u))}),i}):V(n.content),i,a,u)}})}),n}):j.get()?d(()=>{let n=l(),r=e(`rue:list:start`),i=e(`rue:list:end`);o(n,r),o(n,i);let a=new Map;return t(()=>{a=C({items:M.get()||[],getKey:(e,t)=>t,elements:a,parent:r.parentNode,before:i,start:r,renderItem:(e,n,r,i,a)=>{_(e.type===`unit`?d(()=>{let n=l(),r=y(`span`,n);return o(n,r),t(()=>{c(r,`key`,String(a))}),t(()=>{c(r,`data-countdown-token-index`,String(String(a)))}),t(()=>{f(r,B(G(e),H(e)))}),t(()=>{c(r,`aria-live`,String(N.get()))}),t(()=>{c(r,`aria-label`,String(String(G(e))))}),t(()=>{c(r,`data-countdown-value`,String(String(G(e))))}),t(()=>{s(r,H(e)==null?{}:{"data-countdown-digits":String(H(e))})}),n}):V(e.content),n,r,i)}})}),n}):m.children;r(()=>h(n,i,u))}),i})},{Value:n=>{let{resolvedClassName:i}=S(`useSetup:0:0:dup1`,()=>a(()=>({resolvedClassName:S(`computed:1:7`,()=>x(()=>n.className?n.className.trim():``))})));return d(a=>{let l=y(`span`,a);t(()=>{f(l,B(n.value,n.digits))}),t(()=>{c(l,`aria-live`,String(n.ariaLive===void 0?`polite`:n.ariaLive))}),t(()=>{c(l,`aria-label`,String(n.ariaLabel??String(n.value)))}),t(()=>{c(l,`data-countdown-value`,String(String(n.value)))}),t(()=>{s(l,n.digits==null?{}:{"data-countdown-digits":String(n.digits)})}),t(()=>{b(l,i.get())});let u=e(`rue:slot:anchor`);return o(l,u),t(()=>{let e=n.children==null?String(n.value):n.children;r(()=>h(e,l,u))}),l})}}),K=n=>d(i=>{let a=y(`div`,i);b(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=y(`div`,a);o(a,s),b(s,`flex flex-wrap items-start justify-between gap-3`);let c=y(`div`,s);o(s,c);let u=y(`h2`,c);o(c,u),b(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(u,m(`# `));let f=e(`rue:slot:anchor`);o(u,f),t(()=>{let e=n.title;r(()=>h(e,u,f))});let p=e(`rue:slot:anchor`);o(c,p),t(()=>{let i=n.summary?d(()=>{let i=l(),a=y(`p`,i);o(i,a),b(a,`m-0 text-sm opacity-70`);let s=e(`rue:slot:anchor`);return o(a,s),t(()=>{let e=n.summary;r(()=>h(e,a,s))}),i}):``;r(()=>h(i,c,p))});let g=e(`rue:component:anchor`);o(a,g),t(()=>{let e=v(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>h(e,a,g))});let _=e(`rue:slot:anchor`);return o(a,_),t(()=>{let i=n.tab.value===`preview`?n.preview():d(()=>{let i=l(),a=e(`rue:component:anchor`);return o(i,a),t(()=>{let e=v(D,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>h(e,i,a))}),i});r(()=>h(i,a,_))}),a}),ee=n=>d(i=>{let a=y(`div`,i);b(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=y(`table`,a);o(a,s),b(s,`table table-zebra`);let u=y(`thead`,s);o(s,u);let f=y(`tr`,u);o(u,f);let p=y(`th`,f);o(f,p),o(p,m(`属性`));let g=y(`th`,f);o(f,g),o(g,m(`说明`));let _=y(`th`,f);o(f,_),o(_,m(`类型`));let v=y(`th`,f);o(f,v),o(v,m(`默认值`));let x=y(`tbody`,s);o(s,x);let S=e(`rue:list:start`),w=e(`rue:list:end`);o(x,S),o(x,w);let T=new Map;return t(()=>{T=C({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,i,a,s,u)=>{h(d(()=>{let i=l(),a=y(`tr`,i);o(i,a),t(()=>{c(a,`key`,String(n.prop))});let s=y(`td`,a);o(a,s);let u=y(`code`,s);o(s,u);let d=e(`rue:slot:anchor`);o(u,d),t(()=>{let e=n.prop;r(()=>h(e,u,d))});let f=y(`td`,a);o(a,f);let p=e(`rue:slot:anchor`);o(f,p),t(()=>{let e=n.description;r(()=>h(e,f,p))});let m=y(`td`,a);o(a,m);let g=y(`code`,m);o(m,g);let _=e(`rue:slot:anchor`);o(g,_),t(()=>{let e=n.type;r(()=>h(e,g,_))});let v=y(`td`,a);o(a,v);let b=y(`code`,v);o(v,b);let x=e(`rue:slot:anchor`);return o(b,x),t(()=>{let e=n.defaultValue;r(()=>h(e,b,x))}),i}),i,a)}})}),a}),q=n=>d(i=>{let a=y(`div`,i);t(()=>{b(a,n.className)});let s=e(`rue:component:anchor`);o(a,s),t(()=>{let e=v(G,{className:n.countdownClassName,children:n.children});r(()=>h(e,a,s))});let c=e(`rue:slot:anchor`);return o(a,c),t(()=>{let e=n.label;r(()=>h(e,a,c))}),a}),te=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],J=()=>{let i=S(`useSetup:0:0`,()=>a(()=>{let e=S(`ref:1:0`,()=>n(59)),t=null,r=S(`ref:1:1`,()=>n(Date.now()+600*60*1e3+1440*1e3+59*1e3)),i=S(`ref:1:2`,()=>n(Math.max(Math.floor((r.value-Date.now())/1e3),0))),a=S(`ref:1:3`,()=>n(Math.floor(i.value/3600))),o=S(`ref:1:4`,()=>n(Math.floor(i.value%3600/60))),s=S(`ref:1:5`,()=>n(i.value%60)),c=S(`ref:1:6`,()=>n(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),l=S(`ref:1:7`,()=>n(Date.now()+10*1e3)),d=S(`ref:1:8`,()=>n(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),f=S(`ref:1:9`,()=>n(Date.now()+10*1e3)),p=S(`ref:1:10`,()=>n(`计时中`)),m=S(`ref:1:11`,()=>n(1e4)),h=()=>{let e=Math.max(Math.floor((r.value-Date.now())/1e3),0);i.value=e,a.value=Math.floor(e/3600),o.value=Math.floor(e%3600/60),s.value=e%60},_=()=>{t!=null&&(clearInterval(t),t=null)},v=()=>{t??=(h(),setInterval(()=>{e.value=e.value>0?e.value-1:59,h()},1e3))};return g(()=>{v()}),u(_),{counter:e,comboTarget:r,comboTotalSeconds:i,comboHours:a,comboMinutes:o,comboSeconds:s,basicTarget:c,millisecondTarget:l,dayLevelTarget:d,callbackTarget:f,callbackStatus:p,callbackRemaining:m,syncComboCountdown:h,stopTimer:_,startTimer:v,tabBasic:S(`ref:1:12`,()=>n(`preview`)),tabLarge2:S(`ref:1:13`,()=>n(`preview`)),tabClock:S(`ref:1:14`,()=>n(`preview`)),tabClockColon:S(`ref:1:15`,()=>n(`preview`)),tabLabels:S(`ref:1:16`,()=>n(`preview`)),tabLabelsUnder:S(`ref:1:17`,()=>n(`preview`)),tabInBoxes:S(`ref:1:18`,()=>n(`preview`)),tabArrayInternal:S(`ref:1:19`,()=>n(`preview`)),tabTarget:S(`ref:1:20`,()=>n(`preview`)),tabMillisecond:S(`ref:1:21`,()=>n(`preview`)),tabDayLevel:S(`ref:1:22`,()=>n(`preview`)),tabCallbacks:S(`ref:1:23`,()=>n(`preview`)),countdownItems:S(`computed:1:24`,()=>x(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{c.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59},restartMillisecondDemo:()=>{l.value=Date.now()+10*1e3},restartDayLevelDemo:()=>{d.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3},restartCallbackDemo:()=>{p.value=`计时中`,m.value=1e4,f.value=Date.now()+10*1e3},timer:t}})),{counter:s,comboTarget:c,comboTotalSeconds:f,comboHours:p,comboMinutes:_,comboSeconds:C,basicTarget:w,millisecondTarget:D,dayLevelTarget:O,callbackTarget:A,callbackStatus:j,callbackRemaining:M,syncComboCountdown:N,stopTimer:P,startTimer:F,tabBasic:I,tabLarge2:L,tabClock:R,tabClockColon:z,tabLabels:B,tabLabelsUnder:V,tabInBoxes:H,tabArrayInternal:U,tabTarget:W,tabMillisecond:J,tabDayLevel:ne,tabCallbacks:re,countdownItems:ie,restartTargetDemo:ae,restartMillisecondDemo:oe,restartDayLevelDemo:se,restartCallbackDemo:ce}=i,{timer:Y}=i;return d(n=>{let i=l(),a=e(`rue:component:anchor`);return o(i,a),h(v(k,{children:d(()=>{let n=l(),i=y(`div`,n);o(n,i),b(i,`max-w-none prose prose-sm md:prose-base`);let a=y(`h1`,i);o(i,a),o(a,m(`Countdown 倒计时`));let c=y(`p`,i);o(i,c),b(c,`text-sm mt-3 mb-3`),o(c,m("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let u=e(`rue:component:anchor`);o(i,u),t(()=>{let e=v(K,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:W,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-4xl`,value:w.value,format:`HH:mm:ss`},w.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:ae,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});r(()=>h(e,i,u))});let d=e(`rue:component:anchor`);o(i,d),t(()=>{let e=v(K,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:J,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-3xl`,value:D.value,format:`HH:mm:ss:SSS`,interval:250},D.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:oe,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
  interval={250}
/>`});r(()=>h(e,i,d))});let g=e(`rue:component:anchor`);o(i,g),t(()=>{let e=v(K,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ne,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-2xl`,value:O.value,format:`D [days] H [hours] m [minutes] s [seconds]`},O.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:se,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});r(()=>h(e,i,g))});let x=e(`rue:component:anchor`);o(i,x),t(()=>{let e=v(K,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:re,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-3xl`,value:A.value,format:`s.SSS`,interval:250,onChange:e=>{M.value=Math.max(Math.round(e??0),0)},onFinish:()=>{j.value=`已完成`}},A.value),T(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,M.value,` ms`]}),T(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,j.value]}),E(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});r(()=>h(e,i,x))});let S=y(`h2`,i);o(i,S),o(S,m(`组合方式`));let k=y(`p`,i);o(i,k),b(k,`text-sm`),o(k,m("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let N=e(`rue:component:anchor`);o(i,N),t(()=>{let e=v(K,{title:`Countdown`,tab:I,preview:()=>E(G,{children:E(G.Value,{value:f.value,ariaLabel:`${f.value} seconds remaining`})}),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});r(()=>h(e,i,N))});let P=e(`rue:component:anchor`);o(i,P),t(()=>{let e=v(K,{title:`Large Text With 2 Digits`,tab:L,preview:()=>E(G,{className:`font-mono text-6xl`,children:E(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds remaining`})}),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});r(()=>h(e,i,P))});let F=e(`rue:component:anchor`);o(i,F),t(()=>{let e=v(K,{title:`Clock Countdown`,tab:R,preview:()=>T(G,{className:`font-mono text-2xl`,children:[E(G.Value,{value:p.value,ariaLabel:`${p.value} hours`}),`h`,E(G.Value,{value:_.value,digits:2,ariaLabel:`${_.value} minutes`}),`m`,E(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds`}),`s`]}),code:`const parts = computed(() => {
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
</Countdown>`});r(()=>h(e,i,F))});let Y=e(`rue:component:anchor`);o(i,Y),t(()=>{let e=v(K,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:U,preview:()=>E(G,{className:`font-mono text-2xl`,items:ie.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});r(()=>h(e,i,Y))});let X=e(`rue:component:anchor`);o(i,X),t(()=>{let e=v(K,{title:`Clock Countdown With Colons`,tab:z,preview:()=>T(G,{className:`font-mono text-2xl`,children:[E(G.Value,{value:10,ariaLabel:`10`}),`:`,E(G.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,E(G.Value,{value:s.value,digits:2,ariaLabel:String(s.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});r(()=>h(e,i,X))});let Z=e(`rue:component:anchor`);o(i,Z),t(()=>{let e=v(K,{title:`Large Text With Labels`,tab:B,preview:()=>T(`div`,{className:`flex gap-5`,children:[E(q,{label:`days`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{label:`min`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});r(()=>h(e,i,Z))});let Q=e(`rue:component:anchor`);o(i,Q),t(()=>{let e=v(K,{title:`Large Text With Labels Under`,tab:V,preview:()=>T(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[E(q,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});r(()=>h(e,i,Q))});let $=e(`rue:component:anchor`);o(i,$),t(()=>{let e=v(K,{title:`In Boxes`,tab:H,preview:()=>T(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});r(()=>h(e,i,$))});let le=y(`h2`,i);o(i,le),o(le,m(`API`));let ue=e(`rue:component:anchor`);return o(i,ue),t(()=>{let e=v(ee,{rows:te});r(()=>h(e,i,ue))}),n})}),i,a),i})};export{J as default};
import{Bt as e,Q as t,Vt as n,Xt as r,dt as i,i as a,it as o,l as s,n as c,nt as l,o as u,on as d,pt as f,r as p,rt as m,s as h,t as g,tn as _,tt as v,vt as y,wt as b,xt as x}from"./vapor-runtime-x7F5M-49.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as T}from"./Code-BoXKy3gJ.js";import{n as E,t as D}from"./src-Dlanwp1X.js";import{t as O}from"./tabs-C7cPs47_.js";import{r as k}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";var A=`HH:mm:ss`,j=1e3/30,M=1e3,N=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],P=(e,t)=>t?`${e} ${t}`:e,F=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return N.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?j:M,z=e=>`value`in e,B=(e,t)=>{let n=`--value: ${String(e)};`;return t!=null&&(n+=` --digits: ${String(t)};`),n},V=e=>typeof e==`string`?e.replace(/ /g,`\xA0`):e,H=e=>e.digits>1?e.digits:void 0,U=(e,t)=>t[e.unit]??0,W=(e,t,n,r)=>{!e.style||typeof e.style.setProperty!=`function`||typeof e.setAttribute!=`function`||(e.style.setProperty(`--value`,String(t)),n==null?(e.style.removeProperty(`--digits`),e.removeAttribute(`data-countdown-digits`)):(e.style.setProperty(`--digits`,String(n)),e.setAttribute(`data-countdown-digits`,String(n))),e.setAttribute(`aria-live`,r),e.setAttribute(`aria-label`,String(t)),e.setAttribute(`data-countdown-value`,String(t)))},G=Object.assign(o=>{let p=S(`useSetup:0:0`,()=>d(()=>{let t=S(`ref:1:0`,()=>r(0)),n=null,i=!1,s=null,c=()=>{},l=()=>{n!=null&&(clearInterval(n),n=null)},u=()=>{let e=F(o.value);if(e==null)return t.value=0,c(),o.onChange&&o.onChange(void 0),l(),!1;let n=Math.max(e-Date.now(),0);return t.value=n,c(),o.onChange&&o.onChange(n),n<=0?(l(),i||(i=!0,o.onFinish&&o.onFinish()),!1):(i=!1,!0)},d=()=>{if(l(),o.value==null){t.value=0;return}u()&&(n=setInterval(u,R(o.format===void 0?A:o.format,o.interval)))};S(`watch:1:1`,()=>e(()=>`${F(o.value)??`invalid`}|${o.format===void 0?A:o.format}|${o.interval??``}`,()=>{i=!1,d()},{immediate:!0})),a(l);let f=S(`computed:1:2`,()=>b(()=>P(`countdown`,o.className))),p=S(`computed:1:3`,()=>b(()=>!!(o.items&&o.items.length))),m=S(`computed:1:4`,()=>b(()=>!p.get()&&o.value!=null)),h=S(`computed:1:5`,()=>b(()=>I(o.format===void 0?A:o.format))),g=S(`computed:1:6`,()=>b(()=>o.ariaLive??((o.format===void 0?A:o.format).includes(`S`)?`off`:`polite`)));return c=()=>{let e=m.get(),n=h.get(),r=L(t.value,n),i=g.get();!s||!e||Array.from(s.children??[]).forEach(e=>{let t=e,a=n[Number(t.dataset.countdownTokenIndex)];!a||a.type!==`unit`||W(t,U(a,r),H(a),i)})},{remaining:t,stopTimer:l,syncRemaining:u,startTimer:d,resolvedClassName:f,hasItems:p,usesTimerMode:m,formatTokens:h,resolvedAriaLive:g,getTimerTokenValue:e=>U(e,L(t.value,h.get())),setRootElement:e=>{s=e,c()},timer:n,finished:i,rootElement:s,syncTimerDom:c}})),{remaining:g,stopTimer:T,syncRemaining:E,startTimer:D,resolvedClassName:O,hasItems:k,usesTimerMode:j,formatTokens:M,resolvedAriaLive:N,getTimerTokenValue:G,setRootElement:K}=p,{timer:ee,finished:q,rootElement:te,syncTimerDom:J}=p;return s(e=>{let r=m(`span`,e),a=w(r,()=>K);c(()=>{a()}),n(()=>{f(r,O.get())});let d=v(`rue:slot:anchor`);return t(r,d),n(()=>{let e=k.get()?s(()=>{let e=l(),r=v(`rue:list:start`),a=v(`rue:list:end`);t(e,r),t(e,a);let c=new Map;return n(()=>{c=C({items:(o.items??[])||[],getKey:(e,t)=>t,elements:c,parent:r.parentNode,before:a,start:r,renderItem:(e,r,a,o,c)=>{h(z(e)?s(()=>{let r=l(),a=m(`span`,r);t(r,a),n(()=>{y(a,B(e.value,e.digits))}),n(()=>{i(a,`aria-live`,String(e.ariaLive??`polite`))}),n(()=>{i(a,`aria-label`,String(e.ariaLabel??String(e.value)))}),n(()=>{i(a,`data-countdown-value`,String(String(e.value)))}),n(()=>{x(a,e.digits==null?{}:{"data-countdown-digits":String(e.digits)})}),n(()=>{f(a,e.className?e.className.trim():``)});let o=v(`rue:children:anchor`);return t(a,o),n(()=>{let t=e.children;_(()=>u(t,a,o))}),r}):V(e.content),r,a,o)}})}),e}):j.get()?s(()=>{let e=l(),r=v(`rue:list:start`),a=v(`rue:list:end`);t(e,r),t(e,a);let o=new Map;return n(()=>{o=C({items:M.get()||[],getKey:(e,t)=>t,elements:o,parent:r.parentNode,before:a,start:r,renderItem:(e,r,a,o,c)=>{h(e.type===`unit`?s(()=>{let r=l(),a=m(`span`,r);return t(r,a),n(()=>{i(a,`key`,String(c))}),n(()=>{i(a,`data-countdown-token-index`,String(String(c)))}),n(()=>{y(a,B(G(e),H(e)))}),n(()=>{i(a,`aria-live`,String(N.get()))}),n(()=>{i(a,`aria-label`,String(String(G(e))))}),n(()=>{i(a,`data-countdown-value`,String(String(G(e))))}),n(()=>{x(a,H(e)==null?{}:{"data-countdown-digits":String(H(e))})}),r}):V(e.content),r,a,o)}})}),e}):o.children;_(()=>u(e,r,d))}),r})},{Value:e=>{let{resolvedClassName:r}=S(`useSetup:0:0:dup1`,()=>d(()=>({resolvedClassName:S(`computed:1:7`,()=>b(()=>e.className?e.className.trim():``))})));return s(a=>{let o=m(`span`,a);n(()=>{y(o,B(e.value,e.digits))}),n(()=>{i(o,`aria-live`,String(e.ariaLive===void 0?`polite`:e.ariaLive))}),n(()=>{i(o,`aria-label`,String(e.ariaLabel??String(e.value)))}),n(()=>{i(o,`data-countdown-value`,String(String(e.value)))}),n(()=>{x(o,e.digits==null?{}:{"data-countdown-digits":String(e.digits)})}),n(()=>{f(o,r.get())});let s=v(`rue:slot:anchor`);return t(o,s),n(()=>{let t=e.children==null?String(e.value):e.children;_(()=>u(t,o,s))}),o})}}),K=e=>s(r=>{let i=m(`div`,r);f(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let a=m(`div`,i);t(i,a),f(a,`flex flex-wrap items-start justify-between gap-3`);let c=m(`div`,a);t(a,c);let d=m(`h2`,c);t(c,d),f(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(d,o(`# `));let p=v(`rue:slot:anchor`);t(d,p),n(()=>{let t=e.title;_(()=>u(t,d,p))});let h=v(`rue:slot:anchor`);t(c,h),n(()=>{let r=e.summary?s(()=>{let r=l(),i=m(`p`,r);t(r,i),f(i,`m-0 text-sm opacity-70`);let a=v(`rue:slot:anchor`);return t(i,a),n(()=>{let t=e.summary;_(()=>u(t,i,a))}),r}):``;_(()=>u(r,c,h))});let y=v(`rue:component:anchor`);t(i,y),n(()=>{let t=g(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});_(()=>u(t,i,y))});let b=v(`rue:slot:anchor`);return t(i,b),n(()=>{let r=e.tab.value===`preview`?e.preview():s(()=>{let r=l(),i=v(`rue:component:anchor`);return t(r,i),n(()=>{let t=g(T,{className:`mt-2`,lang:`tsx`,code:e.code});_(()=>u(t,r,i))}),r});_(()=>u(r,i,b))}),i}),ee=e=>s(r=>{let a=m(`div`,r);f(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=m(`table`,a);t(a,c),f(c,`table table-zebra`);let d=m(`thead`,c);t(c,d);let p=m(`tr`,d);t(d,p);let h=m(`th`,p);t(p,h),t(h,o(`属性`));let g=m(`th`,p);t(p,g),t(g,o(`说明`));let y=m(`th`,p);t(p,y),t(y,o(`类型`));let b=m(`th`,p);t(p,b),t(b,o(`默认值`));let x=m(`tbody`,c);t(c,x);let S=v(`rue:list:start`),w=v(`rue:list:end`);t(x,S),t(x,w);let T=new Map;return n(()=>{T=C({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,r,a,o,c)=>{u(s(()=>{let r=l(),a=m(`tr`,r);t(r,a),n(()=>{i(a,`key`,String(e.prop))});let o=m(`td`,a);t(a,o);let s=m(`code`,o);t(o,s);let c=v(`rue:slot:anchor`);t(s,c),n(()=>{let t=e.prop;_(()=>u(t,s,c))});let d=m(`td`,a);t(a,d);let f=v(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.description;_(()=>u(t,d,f))});let p=m(`td`,a);t(a,p);let h=m(`code`,p);t(p,h);let g=v(`rue:slot:anchor`);t(h,g),n(()=>{let t=e.type;_(()=>u(t,h,g))});let y=m(`td`,a);t(a,y);let b=m(`code`,y);t(y,b);let x=v(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;_(()=>u(t,b,x))}),r}),r,a)}})}),a}),q=e=>s(r=>{let i=m(`div`,r);n(()=>{f(i,e.className)});let a=v(`rue:component:anchor`);t(i,a),n(()=>{let t=g(G,{className:e.countdownClassName,children:e.children});_(()=>u(t,i,a))});let o=v(`rue:slot:anchor`);return t(i,o),n(()=>{let t=e.label;_(()=>u(t,i,o))}),i}),te=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保持字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],J=()=>{let e=S(`useSetup:0:0`,()=>d(()=>{let e=S(`ref:1:0`,()=>r(59)),t=null,n=S(`ref:1:1`,()=>r(Date.now()+600*60*1e3+1440*1e3+59*1e3)),i=S(`ref:1:2`,()=>r(Math.max(Math.floor((n.value-Date.now())/1e3),0))),o=S(`ref:1:3`,()=>r(Math.floor(i.value/3600))),s=S(`ref:1:4`,()=>r(Math.floor(i.value%3600/60))),c=S(`ref:1:5`,()=>r(i.value%60)),l=S(`ref:1:6`,()=>r(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),u=S(`ref:1:7`,()=>r(Date.now()+10*1e3)),d=S(`ref:1:8`,()=>r(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),f=S(`ref:1:9`,()=>r(Date.now()+10*1e3)),m=S(`ref:1:10`,()=>r(`计时中`)),h=S(`ref:1:11`,()=>r(1e4)),g=()=>{let e=Math.max(Math.floor((n.value-Date.now())/1e3),0);i.value=e,o.value=Math.floor(e/3600),s.value=Math.floor(e%3600/60),c.value=e%60},_=()=>{t!=null&&(clearInterval(t),t=null)},v=()=>{t??=(g(),setInterval(()=>{e.value=e.value>0?e.value-1:59,g()},1e3))};return p(()=>{v()}),a(_),{counter:e,comboTarget:n,comboTotalSeconds:i,comboHours:o,comboMinutes:s,comboSeconds:c,basicTarget:l,millisecondTarget:u,dayLevelTarget:d,callbackTarget:f,callbackStatus:m,callbackRemaining:h,syncComboCountdown:g,stopTimer:_,startTimer:v,tabBasic:S(`ref:1:12`,()=>r(`preview`)),tabLarge2:S(`ref:1:13`,()=>r(`preview`)),tabClock:S(`ref:1:14`,()=>r(`preview`)),tabClockColon:S(`ref:1:15`,()=>r(`preview`)),tabLabels:S(`ref:1:16`,()=>r(`preview`)),tabLabelsUnder:S(`ref:1:17`,()=>r(`preview`)),tabInBoxes:S(`ref:1:18`,()=>r(`preview`)),tabArrayInternal:S(`ref:1:19`,()=>r(`preview`)),tabTarget:S(`ref:1:20`,()=>r(`preview`)),tabMillisecond:S(`ref:1:21`,()=>r(`preview`)),tabDayLevel:S(`ref:1:22`,()=>r(`preview`)),tabCallbacks:S(`ref:1:23`,()=>r(`preview`)),countdownItems:S(`computed:1:24`,()=>b(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{l.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59},restartMillisecondDemo:()=>{u.value=Date.now()+10*1e3},restartDayLevelDemo:()=>{d.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3},restartCallbackDemo:()=>{m.value=`计时中`,h.value=1e4,f.value=Date.now()+10*1e3},timer:t}})),{counter:i,comboTarget:c,comboTotalSeconds:h,comboHours:y,comboMinutes:x,comboSeconds:C,basicTarget:w,millisecondTarget:T,dayLevelTarget:O,callbackTarget:A,callbackStatus:j,callbackRemaining:M,syncComboCountdown:N,stopTimer:P,startTimer:F,tabBasic:I,tabLarge2:L,tabClock:R,tabClockColon:z,tabLabels:B,tabLabelsUnder:V,tabInBoxes:H,tabArrayInternal:U,tabTarget:W,tabMillisecond:J,tabDayLevel:ne,tabCallbacks:re,countdownItems:ie,restartTargetDemo:ae,restartMillisecondDemo:oe,restartDayLevelDemo:se,restartCallbackDemo:ce}=e,{timer:Y}=e;return s(e=>{let r=l(),a=v(`rue:component:anchor`);return t(r,a),u(g(k,{children:s(()=>{let e=l(),r=m(`div`,e);t(e,r),f(r,`max-w-none prose prose-sm md:prose-base`);let a=m(`h1`,r);t(r,a),t(a,o(`Countdown 倒计时`));let s=m(`p`,r);t(r,s),f(s,`text-sm mt-3 mb-3`),t(s,o("现在既能可以使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let c=v(`rue:component:anchor`);t(r,c),n(()=>{let e=g(K,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:W,preview:()=>E(`div`,{className:`space-y-4`,children:[D(G,{className:`font-mono text-4xl`,value:w.value,format:`HH:mm:ss`},w.value),D(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:ae,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});_(()=>u(e,r,c))});let d=v(`rue:component:anchor`);t(r,d),n(()=>{let e=g(K,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:J,preview:()=>E(`div`,{className:`space-y-4`,children:[D(G,{className:`font-mono text-3xl`,value:T.value,format:`HH:mm:ss:SSS`,interval:250},T.value),D(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:oe,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
  interval={250}
/>`});_(()=>u(e,r,d))});let p=v(`rue:component:anchor`);t(r,p),n(()=>{let e=g(K,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ne,preview:()=>E(`div`,{className:`space-y-4`,children:[D(G,{className:`font-mono text-2xl`,value:O.value,format:`D [days] H [hours] m [minutes] s [seconds]`},O.value),D(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:se,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});_(()=>u(e,r,p))});let b=v(`rue:component:anchor`);t(r,b),n(()=>{let e=g(K,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:re,preview:()=>E(`div`,{className:`space-y-4`,children:[D(G,{className:`font-mono text-3xl`,value:A.value,format:`s.SSS`,interval:250,onChange:e=>{M.value=Math.max(Math.round(e??0),0)},onFinish:()=>{j.value=`已完成`}},A.value),E(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,M.value,` ms`]}),E(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,j.value]}),D(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});_(()=>u(e,r,b))});let S=m(`h2`,r);t(r,S),t(S,o(`组合方式`));let k=m(`p`,r);t(r,k),f(k,`text-sm`),t(k,o("这组示例使用 Rue 组合式写法，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let N=v(`rue:component:anchor`);t(r,N),n(()=>{let e=g(K,{title:`Countdown`,tab:I,preview:()=>D(G,{children:D(G.Value,{value:h.value,ariaLabel:`${h.value} seconds remaining`})}),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});_(()=>u(e,r,N))});let P=v(`rue:component:anchor`);t(r,P),n(()=>{let e=g(K,{title:`Large Text With 2 Digits`,tab:L,preview:()=>D(G,{className:`font-mono text-6xl`,children:D(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds remaining`})}),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});_(()=>u(e,r,P))});let F=v(`rue:component:anchor`);t(r,F),n(()=>{let e=g(K,{title:`Clock Countdown`,tab:R,preview:()=>E(G,{className:`font-mono text-2xl`,children:[D(G.Value,{value:y.value,ariaLabel:`${y.value} hours`}),`h`,D(G.Value,{value:x.value,digits:2,ariaLabel:`${x.value} minutes`}),`m`,D(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds`}),`s`]}),code:`const parts = computed(() => {
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
</Countdown>`});_(()=>u(e,r,F))});let Y=v(`rue:component:anchor`);t(r,Y),n(()=>{let e=g(K,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:U,preview:()=>D(G,{className:`font-mono text-2xl`,items:ie.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});_(()=>u(e,r,Y))});let X=v(`rue:component:anchor`);t(r,X),n(()=>{let e=g(K,{title:`Clock Countdown With Colons`,tab:z,preview:()=>E(G,{className:`font-mono text-2xl`,children:[D(G.Value,{value:10,ariaLabel:`10`}),`:`,D(G.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,D(G.Value,{value:i.value,digits:2,ariaLabel:String(i.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});_(()=>u(e,r,X))});let Z=v(`rue:component:anchor`);t(r,Z),n(()=>{let e=g(K,{title:`Large Text With Labels`,tab:B,preview:()=>E(`div`,{className:`flex gap-5`,children:[D(q,{label:`days`,countdownClassName:`font-mono text-4xl`,children:D(G.Value,{value:15,ariaLabel:`15`})}),D(q,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:D(G.Value,{value:10,ariaLabel:`10`})}),D(q,{label:`min`,countdownClassName:`font-mono text-4xl`,children:D(G.Value,{value:24,ariaLabel:`24`})}),D(q,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:D(G.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});_(()=>u(e,r,Z))});let Q=v(`rue:component:anchor`);t(r,Q),n(()=>{let e=g(K,{title:`Large Text With Labels Under`,tab:V,preview:()=>E(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[D(q,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:15,ariaLabel:`15`})}),D(q,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:10,ariaLabel:`10`})}),D(q,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:24,ariaLabel:`24`})}),D(q,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});_(()=>u(e,r,Q))});let $=v(`rue:component:anchor`);t(r,$),n(()=>{let e=g(K,{title:`In Boxes`,tab:H,preview:()=>E(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[D(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:15,ariaLabel:`15`})}),D(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:10,ariaLabel:`10`})}),D(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:24,ariaLabel:`24`})}),D(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:D(G.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});_(()=>u(e,r,$))});let le=m(`h2`,r);t(r,le),t(le,o(`API`));let ue=v(`rue:component:anchor`);return t(r,ue),n(()=>{let e=g(ee,{rows:te});_(()=>u(e,r,ue))}),e})}),r,a),r})};export{J as default};
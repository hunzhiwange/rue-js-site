import{$ as e,A as t,Et as n,G as r,H as i,K as a,Ot as o,Tt as s,W as c,_t as l,d as u,dt as d,kt as f,l as p,o as m,q as h,s as g,t as _,tt as v,xt as y}from"./vapor-runtime-EUvELKQT.js";import{a as b,n as x}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as S,t as C}from"./src-BI4ToZNE.js";import{n as w}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as T}from"./Code-BdVklNCb.js";import{t as E}from"./tabs-Brdd3EMz.js";var D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},N=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},P=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},F=(e,t,n)=>{let r=N(t),i=P(e,r);return r.flatMap(e=>{if(e.type===`literal`)return e.content?[{content:e.content}]:[];let t=i[e.unit]??0;return[{value:t,digits:e.digits>1?e.digits:void 0,ariaLive:n,ariaLabel:String(t)}]})},I=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,L=e=>e.map((e,t)=>{if(`value`in e){let{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s}=e;return C(z,{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s},`${t}:${n}:${r??``}:${o??``}`)}return e.content}),R=({className:e,children:n,items:r,value:i,format:a=D,interval:c,ariaLive:u,onChange:d,onFinish:f})=>{let p=l(0),m=s(null),h=s(!1),g=()=>{m.current!=null&&(clearInterval(m.current),m.current=null)},_=()=>{let e=M(i);if(e==null)return p.value=0,d&&d(void 0),g(),!1;let t=Math.max(e-Date.now(),0);return p.value=t,d&&d(t),t<=0?(g(),h.current||(h.current=!0,f&&f()),!1):(h.current=!1,!0)},v=()=>{g(),i!=null&&_()&&(m.current=setInterval(_,I(a,c)))};o(()=>`${M(i)??`invalid`}|${a}|${c??``}`,()=>{h.current=!1,v()},{immediate:!0}),t(g);let y=j(`countdown`,e),b=!!(r&&r.length),x=!b&&i!=null,S=u??(a.includes(`S`)?`off`:`polite`);return b?C(`span`,{className:y,children:L(r)}):x?C(`span`,{className:y,children:L(F(p.value,a,S))}):C(`span`,{className:y,children:n})},z=({value:e,digits:t,className:n,ariaLive:r=`polite`,ariaLabel:i,children:a})=>C(`span`,{ref:n=>{n&&(n.style.setProperty(`--value`,String(e)),t==null?n.style.removeProperty(`--digits`):n.style.setProperty(`--digits`,String(t)))},"aria-live":r,"aria-label":i??String(e),"data-countdown-value":String(e),"data-countdown-digits":t==null?void 0:String(t),className:n?.trim(),children:a??String(e)}),B=Object.assign(R,{Value:z}),V=e=>{let t=Math.max(e,0),n=Math.floor(t/1e3);return{days:Math.floor(n/(1440*60)),hours:Math.floor(n%(1440*60)/3600),minutes:Math.floor(n%3600/60),seconds:n%60,milliseconds:t%1e3}},H=e=>u(t=>{let n=a(`div`,t);v(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let o=a(`div`,n);i(n,o),v(o,`flex flex-wrap items-start justify-between gap-3`);let s=a(`div`,o);i(o,s);let l=a(`h2`,s);i(s,l),v(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(l,h(`# `));let d=c(`rue:slot:anchor`);i(l,d),f(()=>{let t=e.title;y(()=>p(t,l,d))});let m=c(`rue:slot:anchor`);i(s,m),f(()=>{let t=e.summary?u(()=>{let t=r(),n=a(`p`,t);i(t,n),v(n,`m-0 text-sm opacity-70`);let o=c(`rue:slot:anchor`);return i(n,o),f(()=>{let t=e.summary;y(()=>p(t,n,o))}),t}):``;y(()=>p(t,s,m))});let g=c(`rue:component:anchor`);i(n,g),f(()=>{let t=_(E,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});y(()=>p(t,n,g))});let b=c(`rue:slot:anchor`);return i(n,b),f(()=>{let t=e.tab.value===`preview`?e.preview():u(()=>{let t=r(),n=c(`rue:component:anchor`);return i(t,n),f(()=>{let r=_(T,{className:`mt-2`,lang:`tsx`,code:e.code});y(()=>p(r,t,n))}),t});y(()=>p(t,n,b))}),n}),ee=t=>u(n=>{let o=a(`div`,n);v(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=a(`table`,o);i(o,s),v(s,`table table-zebra`);let l=a(`thead`,s);i(s,l);let d=a(`tr`,l);i(l,d);let m=a(`th`,d);i(d,m),i(m,h(`属性`));let g=a(`th`,d);i(d,g),i(g,h(`说明`));let _=a(`th`,d);i(d,_),i(_,h(`类型`));let b=a(`th`,d);i(d,b),i(b,h(`默认值`));let S=a(`tbody`,s);i(s,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return f(()=>{T=x({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,o,s,l)=>{p(u(()=>{let n=r(),o=a(`tr`,n);i(n,o),f(()=>{e(o,`key`,String(t.prop))});let s=a(`td`,o);i(o,s);let l=a(`code`,s);i(s,l);let u=c(`rue:slot:anchor`);i(l,u),f(()=>{let e=t.prop;y(()=>p(e,l,u))});let d=a(`td`,o);i(o,d);let m=c(`rue:slot:anchor`);i(d,m),f(()=>{let e=t.description;y(()=>p(e,d,m))});let h=a(`td`,o);i(o,h);let g=a(`code`,h);i(h,g);let _=c(`rue:slot:anchor`);i(g,_),f(()=>{let e=t.type;y(()=>p(e,g,_))});let v=a(`td`,o);i(o,v);let b=a(`code`,v);i(v,b);let x=c(`rue:slot:anchor`);return i(b,x),f(()=>{let e=t.defaultValue;y(()=>p(e,b,x))}),n}),n,o)}})}),o}),U=e=>u(t=>{let n=a(`div`,t);f(()=>{v(n,String(e.className))});let r=c(`rue:component:anchor`);i(n,r),f(()=>{let t=_(B,{className:e.countdownClassName,children:e.children});y(()=>p(t,n,r))});let o=c(`rue:slot:anchor`);return i(n,o),f(()=>{let t=e.label;y(()=>p(t,n,o))}),n}),W=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],G=()=>{let{counter:e,timerRef:t,precisionTimerRef:o,demoNow:x,precisionNow:T,comboTarget:E,comboTotalSeconds:D,comboHours:O,comboMinutes:k,comboSeconds:A,basicTarget:j,millisecondTarget:M,dayLevelTarget:N,callbackTarget:P,callbackStatus:F,callbackRemaining:I,syncComboCountdown:L,stopTimer:R,startTimer:z,startPrecisionTimer:G,tabBasic:K,tabLarge2:q,tabClock:J,tabClockColon:Y,tabLabels:X,tabLabelsUnder:Z,tabInBoxes:Q,tabArrayInternal:te,tabTarget:ne,tabMillisecond:re,tabDayLevel:ie,tabCallbacks:ae,countdownItems:oe,restartTargetDemo:se,restartMillisecondDemo:ce,restartDayLevelDemo:$,restartCallbackDemo:le,targetCountdownItems:ue,millisecondCountdownItems:de,dayLevelCountdownItems:fe}=b(`useSetup:0:0`,()=>n(()=>{let e=b(`ref:1:0`,()=>l(59)),t=b(`useRef:1:1`,()=>s(null)),n=b(`useRef:1:2`,()=>s(null)),r=b(`ref:1:3`,()=>l(Date.now())),i=b(`ref:1:4`,()=>l(Date.now())),a=b(`ref:1:5`,()=>l(Date.now()+600*60*1e3+1440*1e3+59*1e3)),o=b(`ref:1:6`,()=>l(Math.max(Math.floor((a.value-Date.now())/1e3),0))),c=b(`ref:1:7`,()=>l(Math.floor(o.value/3600))),u=b(`ref:1:8`,()=>l(Math.floor(o.value%3600/60))),f=b(`ref:1:9`,()=>l(o.value%60)),p=b(`ref:1:10`,()=>l(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),h=b(`ref:1:11`,()=>l(Date.now()+10*1e3)),_=b(`ref:1:12`,()=>l(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),v=b(`ref:1:13`,()=>l(Date.now()+10*1e3)),y=b(`ref:1:14`,()=>l(`计时中`)),x=b(`ref:1:15`,()=>l(1e4)),S=()=>{let e=Math.max(Math.floor((a.value-Date.now())/1e3),0);o.value=e,c.value=Math.floor(e/3600),u.value=Math.floor(e%3600/60),f.value=e%60},C=()=>{t.current!=null&&(clearInterval(t.current),t.current=null),n.current!=null&&(clearInterval(n.current),n.current=null)},w=()=>{t.current??=(S(),r.value=Date.now(),setInterval(()=>{e.value=e.value>0?e.value-1:59,r.value=Date.now(),S()},1e3))},T=()=>{n.current??=(i.value=Date.now(),setInterval(()=>{i.value=Date.now()},1e3/30))};return m(()=>{w(),T()}),g(C),{counter:e,timerRef:t,precisionTimerRef:n,demoNow:r,precisionNow:i,comboTarget:a,comboTotalSeconds:o,comboHours:c,comboMinutes:u,comboSeconds:f,basicTarget:p,millisecondTarget:h,dayLevelTarget:_,callbackTarget:v,callbackStatus:y,callbackRemaining:x,syncComboCountdown:S,stopTimer:C,startTimer:w,startPrecisionTimer:T,tabBasic:b(`ref:1:16`,()=>l(`preview`)),tabLarge2:b(`ref:1:17`,()=>l(`preview`)),tabClock:b(`ref:1:18`,()=>l(`preview`)),tabClockColon:b(`ref:1:19`,()=>l(`preview`)),tabLabels:b(`ref:1:20`,()=>l(`preview`)),tabLabelsUnder:b(`ref:1:21`,()=>l(`preview`)),tabInBoxes:b(`ref:1:22`,()=>l(`preview`)),tabArrayInternal:b(`ref:1:23`,()=>l(`preview`)),tabTarget:b(`ref:1:24`,()=>l(`preview`)),tabMillisecond:b(`ref:1:25`,()=>l(`preview`)),tabDayLevel:b(`ref:1:26`,()=>l(`preview`)),tabCallbacks:b(`ref:1:27`,()=>l(`preview`)),countdownItems:b(`computed:1:28`,()=>d(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{p.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59,r.value=Date.now()},restartMillisecondDemo:()=>{h.value=Date.now()+10*1e3,i.value=Date.now()},restartDayLevelDemo:()=>{_.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3,r.value=Date.now()},restartCallbackDemo:()=>{y.value=`计时中`,x.value=1e4,v.value=Date.now()+10*1e3},targetCountdownItems:b(`computed:1:29`,()=>d(()=>{let e=V(p.value-r.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2}]})),millisecondCountdownItems:b(`computed:1:30`,()=>d(()=>{let e=V(h.value-i.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2},{content:`:`},{value:e.milliseconds,digits:3}]})),dayLevelCountdownItems:b(`computed:1:31`,()=>d(()=>{let e=V(_.value-r.value);return[{value:e.days},{content:` days `},{value:e.hours,digits:2},{content:` hours `},{value:e.minutes,digits:2},{content:` minutes `},{value:e.seconds,digits:2},{content:` seconds`}]}))}}));return u(t=>{let n=r(),o=c(`rue:component:anchor`);return i(n,o),p(_(w,{children:u(()=>{let t=r(),n=a(`div`,t);i(t,n),v(n,`max-w-none prose prose-sm md:prose-base`);let o=a(`h1`,n);i(n,o),i(o,h(`Countdown 倒计时`));let s=a(`p`,n);i(n,s),v(s,`text-sm mt-3 mb-3`),i(s,h("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let l=c(`rue:component:anchor`);i(n,l),f(()=>{let e=_(H,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:ne,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-4xl`,items:ue.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:se,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});y(()=>p(e,n,l))});let u=c(`rue:component:anchor`);i(n,u),f(()=>{let e=_(H,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:re,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,items:de.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
/>`});y(()=>p(e,n,u))});let d=c(`rue:component:anchor`);i(n,d),f(()=>{let e=_(H,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ie,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-2xl`,items:fe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:$,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});y(()=>p(e,n,d))});let m=c(`rue:component:anchor`);i(n,m),f(()=>{let e=_(H,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:ae,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,value:P.value,format:`s.SSS`,onChange:e=>{I.value=Math.max(Math.round(e??0),0)},onFinish:()=>{F.value=`已完成`}}),S(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,I.value,` ms`]}),S(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,F.value]}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:le,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
const status = ref('计时中')
const lastRemaining = ref(10_000)

<Countdown
  className="font-mono text-3xl"
  value={target}
  format="s.SSS"
  onChange={remaining => {
    lastRemaining.value = Math.max(Math.round(remaining ?? 0), 0)
  }}
  onFinish={() => {
    status.value = '已完成'
  }}
/>`});y(()=>p(e,n,m))});let g=a(`h2`,n);i(n,g),i(g,h(`组合方式`));let b=a(`p`,n);i(n,b),v(b,`text-sm`),i(b,h("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let x=c(`rue:component:anchor`);i(n,x),f(()=>{let e=_(H,{title:`Countdown`,tab:K,preview:()=>C(B,{children:C(B.Value,{value:D.value,ariaLabel:`${D.value} seconds remaining`},D.value)},D.value),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});y(()=>p(e,n,x))});let w=c(`rue:component:anchor`);i(n,w),f(()=>{let e=_(H,{title:`Large Text With 2 Digits`,tab:q,preview:()=>C(B,{className:`font-mono text-6xl`,children:C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds remaining`},A.value)},A.value),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});y(()=>p(e,n,w))});let T=c(`rue:component:anchor`);i(n,T),f(()=>{let e=_(H,{title:`Clock Countdown`,tab:J,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:O.value,ariaLabel:`${O.value} hours`},`h:${O.value}`),`h`,C(B.Value,{value:k.value,digits:2,ariaLabel:`${k.value} minutes`},`m:${k.value}`),`m`,C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds`},`s:${A.value}`),`s`]},`${O.value}:${k.value}:${A.value}`),code:`const parts = computed(() => {
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
</Countdown>`});y(()=>p(e,n,T))});let E=c(`rue:component:anchor`);i(n,E),f(()=>{let e=_(H,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:te,preview:()=>C(B,{className:`font-mono text-2xl`,items:oe.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});y(()=>p(e,n,E))});let j=c(`rue:component:anchor`);i(n,j),f(()=>{let t=_(H,{title:`Clock Countdown With Colons`,tab:Y,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:10,ariaLabel:`10`}),`:`,C(B.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,C(B.Value,{value:e.value,digits:2,ariaLabel:String(e.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});y(()=>p(t,n,j))});let M=c(`rue:component:anchor`);i(n,M),f(()=>{let t=_(H,{title:`Large Text With Labels`,tab:X,preview:()=>S(`div`,{className:`flex gap-5`,children:[C(U,{label:`days`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{label:`min`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});y(()=>p(t,n,M))});let N=c(`rue:component:anchor`);i(n,N),f(()=>{let t=_(H,{title:`Large Text With Labels Under`,tab:Z,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});y(()=>p(t,n,N))});let L=c(`rue:component:anchor`);i(n,L),f(()=>{let t=_(H,{title:`In Boxes`,tab:Q,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});y(()=>p(t,n,L))});let R=a(`h2`,n);i(n,R),i(R,h(`API`));let z=c(`rue:component:anchor`);return i(n,z),f(()=>{let e=_(ee,{rows:W});y(()=>p(e,n,z))}),t})}),n,o),n})};export{G as default};
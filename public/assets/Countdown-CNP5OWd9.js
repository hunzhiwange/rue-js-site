import{$ as e,Ht as t,Kt as n,Q as r,Rt as i,Xt as a,Y as o,Yt as s,Z as c,_t as l,a as u,ct as d,et as f,i as p,j as m,l as h,ot as g,qt as _,s as v,t as y}from"./vapor-runtime-aZAg0Qkw.js";import{a as b,n as x}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as S,i as C}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as w}from"./Code-5DOEyGxf.js";import{t as T}from"./tabs-CWmjyn0I.js";import{r as E}from"./SidebarPlaygroundDesign-CS11MI8e.js";var D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},N=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},P=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},F=(e,t,n)=>{let r=N(t),i=P(e,r);return r.flatMap(e=>{if(e.type===`literal`)return e.content?[{content:e.content}]:[];let t=i[e.unit]??0;return[{value:t,digits:e.digits>1?e.digits:void 0,ariaLive:n,ariaLabel:String(t)}]})},I=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,L=e=>e.map((e,t)=>{if(`value`in e){let{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s}=e;return C(z,{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s},`${t}:${n}:${r??``}:${o??``}`)}return e.content}),R=({className:e,children:t,items:r,value:a,format:o=D,interval:c,ariaLive:l,onChange:u,onFinish:d})=>{let f=i(0),p=n(null),h=n(!1),g=()=>{p.current!=null&&(clearInterval(p.current),p.current=null)},_=()=>{let e=M(a);if(e==null)return f.value=0,u&&u(void 0),g(),!1;let t=Math.max(e-Date.now(),0);return f.value=t,u&&u(t),t<=0?(g(),h.current||(h.current=!0,d&&d()),!1):(h.current=!1,!0)},v=()=>{g(),a!=null&&_()&&(p.current=setInterval(_,I(o,c)))};s(()=>`${M(a)??`invalid`}|${o}|${c??``}`,()=>{h.current=!1,v()},{immediate:!0}),m(g);let y=j(`countdown`,e),b=!!(r&&r.length),x=!b&&a!=null,S=l??(o.includes(`S`)?`off`:`polite`);return b?C(`span`,{className:y,children:L(r)}):x?C(`span`,{className:y,children:L(F(f.value,o,S))}):C(`span`,{className:y,children:t})},z=({value:e,digits:t,className:n,ariaLive:r=`polite`,ariaLabel:i,children:a})=>C(`span`,{ref:n=>{n&&(n.style.setProperty(`--value`,String(e)),t==null?n.style.removeProperty(`--digits`):n.style.setProperty(`--digits`,String(t)))},"aria-live":r,"aria-label":i??String(e),"data-countdown-value":String(e),"data-countdown-digits":t==null?void 0:String(t),className:n?.trim(),children:a??String(e)}),B=Object.assign(R,{Value:z}),V=e=>{let t=Math.max(e,0),n=Math.floor(t/1e3);return{days:Math.floor(n/(1440*60)),hours:Math.floor(n%(1440*60)/3600),minutes:Math.floor(n%3600/60),seconds:n%60,milliseconds:t%1e3}},H=n=>h(i=>{let s=e(`div`,i);d(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=e(`div`,s);o(s,l),d(l,`flex flex-wrap items-start justify-between gap-3`);let u=e(`div`,l);o(l,u);let p=e(`h2`,u);o(u,p),d(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(p,f(`# `));let m=c(`rue:slot:anchor`);o(p,m),a(()=>{let e=n.title;t(()=>v(e,p,m))});let g=c(`rue:slot:anchor`);o(u,g),a(()=>{let i=n.summary?h(()=>{let i=r(),s=e(`p`,i);o(i,s),d(s,`m-0 text-sm opacity-70`);let l=c(`rue:slot:anchor`);return o(s,l),a(()=>{let e=n.summary;t(()=>v(e,s,l))}),i}):``;t(()=>v(i,u,g))});let _=c(`rue:component:anchor`);o(s,_),a(()=>{let e=y(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});t(()=>v(e,s,_))});let b=c(`rue:slot:anchor`);return o(s,b),a(()=>{let e=n.tab.value===`preview`?n.preview():h(()=>{let e=r(),i=c(`rue:component:anchor`);return o(e,i),a(()=>{let r=y(w,{className:`mt-2`,lang:`tsx`,code:n.code});t(()=>v(r,e,i))}),e});t(()=>v(e,s,b))}),s}),ee=n=>h(i=>{let s=e(`div`,i);d(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=e(`table`,s);o(s,l),d(l,`table table-zebra`);let u=e(`thead`,l);o(l,u);let p=e(`tr`,u);o(u,p);let m=e(`th`,p);o(p,m),o(m,f(`属性`));let _=e(`th`,p);o(p,_),o(_,f(`说明`));let y=e(`th`,p);o(p,y),o(y,f(`类型`));let b=e(`th`,p);o(p,b),o(b,f(`默认值`));let S=e(`tbody`,l);o(l,S);let C=c(`rue:list:start`),w=c(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return a(()=>{T=x({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,s,l,u)=>{v(h(()=>{let i=r(),s=e(`tr`,i);o(i,s),a(()=>{g(s,`key`,String(n.prop))});let l=e(`td`,s);o(s,l);let u=e(`code`,l);o(l,u);let d=c(`rue:slot:anchor`);o(u,d),a(()=>{let e=n.prop;t(()=>v(e,u,d))});let f=e(`td`,s);o(s,f);let p=c(`rue:slot:anchor`);o(f,p),a(()=>{let e=n.description;t(()=>v(e,f,p))});let m=e(`td`,s);o(s,m);let h=e(`code`,m);o(m,h);let _=c(`rue:slot:anchor`);o(h,_),a(()=>{let e=n.type;t(()=>v(e,h,_))});let y=e(`td`,s);o(s,y);let b=e(`code`,y);o(y,b);let x=c(`rue:slot:anchor`);return o(b,x),a(()=>{let e=n.defaultValue;t(()=>v(e,b,x))}),i}),i,s)}})}),s}),U=n=>h(r=>{let i=e(`div`,r);a(()=>{d(i,String(n.className))});let s=c(`rue:component:anchor`);o(i,s),a(()=>{let e=y(B,{className:n.countdownClassName,children:n.children});t(()=>v(e,i,s))});let l=c(`rue:slot:anchor`);return o(i,l),a(()=>{let e=n.label;t(()=>v(e,i,l))}),i}),W=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],G=()=>{let{counter:s,timerRef:m,precisionTimerRef:g,demoNow:x,precisionNow:w,comboTarget:T,comboTotalSeconds:D,comboHours:O,comboMinutes:k,comboSeconds:A,basicTarget:j,millisecondTarget:M,dayLevelTarget:N,callbackTarget:P,callbackStatus:F,callbackRemaining:I,syncComboCountdown:L,stopTimer:R,startTimer:z,startPrecisionTimer:G,tabBasic:K,tabLarge2:q,tabClock:J,tabClockColon:Y,tabLabels:X,tabLabelsUnder:Z,tabInBoxes:Q,tabArrayInternal:te,tabTarget:ne,tabMillisecond:re,tabDayLevel:ie,tabCallbacks:ae,countdownItems:oe,restartTargetDemo:se,restartMillisecondDemo:ce,restartDayLevelDemo:$,restartCallbackDemo:le,targetCountdownItems:ue,millisecondCountdownItems:de,dayLevelCountdownItems:fe}=b(`useSetup:0:0`,()=>_(()=>{let e=b(`ref:1:0`,()=>i(59)),t=b(`useRef:1:1`,()=>n(null)),r=b(`useRef:1:2`,()=>n(null)),a=b(`ref:1:3`,()=>i(Date.now())),o=b(`ref:1:4`,()=>i(Date.now())),s=b(`ref:1:5`,()=>i(Date.now()+600*60*1e3+1440*1e3+59*1e3)),c=b(`ref:1:6`,()=>i(Math.max(Math.floor((s.value-Date.now())/1e3),0))),d=b(`ref:1:7`,()=>i(Math.floor(c.value/3600))),f=b(`ref:1:8`,()=>i(Math.floor(c.value%3600/60))),m=b(`ref:1:9`,()=>i(c.value%60)),h=b(`ref:1:10`,()=>i(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),g=b(`ref:1:11`,()=>i(Date.now()+10*1e3)),_=b(`ref:1:12`,()=>i(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),v=b(`ref:1:13`,()=>i(Date.now()+10*1e3)),y=b(`ref:1:14`,()=>i(`计时中`)),x=b(`ref:1:15`,()=>i(1e4)),S=()=>{let e=Math.max(Math.floor((s.value-Date.now())/1e3),0);c.value=e,d.value=Math.floor(e/3600),f.value=Math.floor(e%3600/60),m.value=e%60},C=()=>{t.current!=null&&(clearInterval(t.current),t.current=null),r.current!=null&&(clearInterval(r.current),r.current=null)},w=()=>{t.current??=(S(),a.value=Date.now(),setInterval(()=>{e.value=e.value>0?e.value-1:59,a.value=Date.now(),S()},1e3))},T=()=>{r.current??=(o.value=Date.now(),setInterval(()=>{o.value=Date.now()},1e3/30))};return p(()=>{w(),T()}),u(C),{counter:e,timerRef:t,precisionTimerRef:r,demoNow:a,precisionNow:o,comboTarget:s,comboTotalSeconds:c,comboHours:d,comboMinutes:f,comboSeconds:m,basicTarget:h,millisecondTarget:g,dayLevelTarget:_,callbackTarget:v,callbackStatus:y,callbackRemaining:x,syncComboCountdown:S,stopTimer:C,startTimer:w,startPrecisionTimer:T,tabBasic:b(`ref:1:16`,()=>i(`preview`)),tabLarge2:b(`ref:1:17`,()=>i(`preview`)),tabClock:b(`ref:1:18`,()=>i(`preview`)),tabClockColon:b(`ref:1:19`,()=>i(`preview`)),tabLabels:b(`ref:1:20`,()=>i(`preview`)),tabLabelsUnder:b(`ref:1:21`,()=>i(`preview`)),tabInBoxes:b(`ref:1:22`,()=>i(`preview`)),tabArrayInternal:b(`ref:1:23`,()=>i(`preview`)),tabTarget:b(`ref:1:24`,()=>i(`preview`)),tabMillisecond:b(`ref:1:25`,()=>i(`preview`)),tabDayLevel:b(`ref:1:26`,()=>i(`preview`)),tabCallbacks:b(`ref:1:27`,()=>i(`preview`)),countdownItems:b(`computed:1:28`,()=>l(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{h.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59,a.value=Date.now()},restartMillisecondDemo:()=>{g.value=Date.now()+10*1e3,o.value=Date.now()},restartDayLevelDemo:()=>{_.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3,a.value=Date.now()},restartCallbackDemo:()=>{y.value=`计时中`,x.value=1e4,v.value=Date.now()+10*1e3},targetCountdownItems:b(`computed:1:29`,()=>l(()=>{let e=V(h.value-a.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2}]})),millisecondCountdownItems:b(`computed:1:30`,()=>l(()=>{let e=V(g.value-o.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2},{content:`:`},{value:e.milliseconds,digits:3}]})),dayLevelCountdownItems:b(`computed:1:31`,()=>l(()=>{let e=V(_.value-a.value);return[{value:e.days},{content:` days `},{value:e.hours,digits:2},{content:` hours `},{value:e.minutes,digits:2},{content:` minutes `},{value:e.seconds,digits:2},{content:` seconds`}]}))}}));return h(n=>{let i=r(),l=c(`rue:component:anchor`);return o(i,l),v(y(E,{children:h(()=>{let n=r(),i=e(`div`,n);o(n,i),d(i,`max-w-none prose prose-sm md:prose-base`);let l=e(`h1`,i);o(i,l),o(l,f(`Countdown 倒计时`));let u=e(`p`,i);o(i,u),d(u,`text-sm mt-3 mb-3`),o(u,f("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let p=c(`rue:component:anchor`);o(i,p),a(()=>{let e=y(H,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:ne,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-4xl`,items:ue.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:se,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});t(()=>v(e,i,p))});let m=c(`rue:component:anchor`);o(i,m),a(()=>{let e=y(H,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:re,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,items:de.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
/>`});t(()=>v(e,i,m))});let h=c(`rue:component:anchor`);o(i,h),a(()=>{let e=y(H,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ie,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-2xl`,items:fe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:$,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});t(()=>v(e,i,h))});let g=c(`rue:component:anchor`);o(i,g),a(()=>{let e=y(H,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:ae,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,value:P.value,format:`s.SSS`,onChange:e=>{I.value=Math.max(Math.round(e??0),0)},onFinish:()=>{F.value=`已完成`}}),S(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,I.value,` ms`]}),S(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,F.value]}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:le,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});t(()=>v(e,i,g))});let _=e(`h2`,i);o(i,_),o(_,f(`组合方式`));let b=e(`p`,i);o(i,b),d(b,`text-sm`),o(b,f("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let x=c(`rue:component:anchor`);o(i,x),a(()=>{let e=y(H,{title:`Countdown`,tab:K,preview:()=>C(B,{children:C(B.Value,{value:D.value,ariaLabel:`${D.value} seconds remaining`},D.value)},D.value),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});t(()=>v(e,i,x))});let w=c(`rue:component:anchor`);o(i,w),a(()=>{let e=y(H,{title:`Large Text With 2 Digits`,tab:q,preview:()=>C(B,{className:`font-mono text-6xl`,children:C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds remaining`},A.value)},A.value),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});t(()=>v(e,i,w))});let T=c(`rue:component:anchor`);o(i,T),a(()=>{let e=y(H,{title:`Clock Countdown`,tab:J,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:O.value,ariaLabel:`${O.value} hours`},`h:${O.value}`),`h`,C(B.Value,{value:k.value,digits:2,ariaLabel:`${k.value} minutes`},`m:${k.value}`),`m`,C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds`},`s:${A.value}`),`s`]},`${O.value}:${k.value}:${A.value}`),code:`const parts = computed(() => {
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
</Countdown>`});t(()=>v(e,i,T))});let E=c(`rue:component:anchor`);o(i,E),a(()=>{let e=y(H,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:te,preview:()=>C(B,{className:`font-mono text-2xl`,items:oe.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});t(()=>v(e,i,E))});let j=c(`rue:component:anchor`);o(i,j),a(()=>{let e=y(H,{title:`Clock Countdown With Colons`,tab:Y,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:10,ariaLabel:`10`}),`:`,C(B.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,C(B.Value,{value:s.value,digits:2,ariaLabel:String(s.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});t(()=>v(e,i,j))});let M=c(`rue:component:anchor`);o(i,M),a(()=>{let e=y(H,{title:`Large Text With Labels`,tab:X,preview:()=>S(`div`,{className:`flex gap-5`,children:[C(U,{label:`days`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{label:`min`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});t(()=>v(e,i,M))});let N=c(`rue:component:anchor`);o(i,N),a(()=>{let e=y(H,{title:`Large Text With Labels Under`,tab:Z,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});t(()=>v(e,i,N))});let L=c(`rue:component:anchor`);o(i,L),a(()=>{let e=y(H,{title:`In Boxes`,tab:Q,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});t(()=>v(e,i,L))});let R=e(`h2`,i);o(i,R),o(R,f(`API`));let z=c(`rue:component:anchor`);return o(i,z),a(()=>{let e=y(ee,{rows:W});t(()=>v(e,i,z))}),n})}),i,l),i})};export{G as default};
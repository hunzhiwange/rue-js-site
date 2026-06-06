import{$ as e,B as t,Ct as n,Dt as r,Et as i,G as a,H as o,O as s,U as c,W as l,Z as u,a as d,ht as f,i as p,l as m,lt as h,s as g,t as _,wt as v,yt as y}from"./vapor-runtime-C1rlwc61.js";import{a as b,n as x}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as S}from"./Code-BCLFq1E3.js";import{n as C,t as w}from"./src-BLzF0BqW.js";import{n as T}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as E}from"./tabs-BOxm6iIN.js";var D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},N=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},P=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},F=(e,t,n)=>{let r=N(t),i=P(e,r);return r.flatMap(e=>{if(e.type===`literal`)return e.content?[{content:e.content}]:[];let t=i[e.unit]??0;return[{value:t,digits:e.digits>1?e.digits:void 0,ariaLive:n,ariaLabel:String(t)}]})},I=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,L=e=>e.map((e,t)=>{if(`value`in e){let{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s}=e;return w(z,{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s},`${t}:${n}:${r??``}:${o??``}`)}return e.content}),R=({className:e,children:t,items:r,value:a,format:o=D,interval:c,ariaLive:l,onChange:u,onFinish:d})=>{let p=f(0),m=n(null),h=n(!1),g=()=>{m.current!=null&&(clearInterval(m.current),m.current=null)},_=()=>{let e=M(a);if(e==null)return p.value=0,u&&u(void 0),g(),!1;let t=Math.max(e-Date.now(),0);return p.value=t,u&&u(t),t<=0?(g(),h.current||(h.current=!0,d&&d()),!1):(h.current=!1,!0)},v=()=>{g(),a!=null&&_()&&(m.current=setInterval(_,I(o,c)))};i(()=>`${M(a)??`invalid`}|${o}|${c??``}`,()=>{h.current=!1,v()},{immediate:!0}),s(g);let y=j(`countdown`,e),b=!!(r&&r.length),x=!b&&a!=null,S=l??(o.includes(`S`)?`off`:`polite`);return b?w(`span`,{className:y,children:L(r)}):x?w(`span`,{className:y,children:L(F(p.value,o,S))}):w(`span`,{className:y,children:t})},z=({value:e,digits:t,className:n,ariaLive:r=`polite`,ariaLabel:i,children:a})=>w(`span`,{ref:n=>{n&&(n.style.setProperty(`--value`,String(e)),t==null?n.style.removeProperty(`--digits`):n.style.setProperty(`--digits`,String(t)))},"aria-live":r,"aria-label":i??String(e),"data-countdown-value":String(e),"data-countdown-digits":t==null?void 0:String(t),className:n?.trim(),children:a??String(e)}),B=Object.assign(R,{Value:z}),V=e=>{let t=Math.max(e,0),n=Math.floor(t/1e3);return{days:Math.floor(n/(1440*60)),hours:Math.floor(n%(1440*60)/3600),minutes:Math.floor(n%3600/60),seconds:n%60,milliseconds:t%1e3}},H=n=>m(i=>{let s=l(`div`,i);e(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=l(`div`,s);t(s,u),e(u,`flex flex-wrap items-start justify-between gap-3`);let d=l(`div`,u);t(u,d);let f=l(`h2`,d);t(d,f),e(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(f,a(`# `));let p=o(`rue:slot:anchor`);t(f,p),r(()=>{let e=n.title;y(()=>g(e,f,p))});let h=o(`rue:slot:anchor`);t(d,h),r(()=>{let i=n.summary?m(()=>{let i=c(),a=l(`p`,i);t(i,a),e(a,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return t(a,s),r(()=>{let e=n.summary;y(()=>g(e,a,s))}),i}):``;y(()=>g(i,d,h))});let v=o(`rue:component:anchor`);t(s,v),r(()=>{let e=_(E,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});y(()=>g(e,s,v))});let b=o(`rue:slot:anchor`);return t(s,b),r(()=>{let e=n.tab.value===`preview`?n.preview():m(()=>{let e=c(),i=o(`rue:component:anchor`);return t(e,i),r(()=>{let t=_(S,{className:`mt-2`,lang:`tsx`,code:n.code});y(()=>g(t,e,i))}),e});y(()=>g(e,s,b))}),s}),ee=n=>m(i=>{let s=l(`div`,i);e(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=l(`table`,s);t(s,d),e(d,`table table-zebra`);let f=l(`thead`,d);t(d,f);let p=l(`tr`,f);t(f,p);let h=l(`th`,p);t(p,h),t(h,a(`属性`));let _=l(`th`,p);t(p,_),t(_,a(`说明`));let v=l(`th`,p);t(p,v),t(v,a(`类型`));let b=l(`th`,p);t(p,b),t(b,a(`默认值`));let S=l(`tbody`,d);t(d,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=x({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,a,s)=>{g(m(()=>{let n=c(),i=l(`tr`,n);t(n,i),r(()=>{u(i,`key`,String(e.prop))});let a=l(`td`,i);t(i,a);let s=l(`code`,a);t(a,s);let d=o(`rue:slot:anchor`);t(s,d),r(()=>{let t=e.prop;y(()=>g(t,s,d))});let f=l(`td`,i);t(i,f);let p=o(`rue:slot:anchor`);t(f,p),r(()=>{let t=e.description;y(()=>g(t,f,p))});let m=l(`td`,i);t(i,m);let h=l(`code`,m);t(m,h);let _=o(`rue:slot:anchor`);t(h,_),r(()=>{let t=e.type;y(()=>g(t,h,_))});let v=l(`td`,i);t(i,v);let b=l(`code`,v);t(v,b);let x=o(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;y(()=>g(t,b,x))}),n}),n,i)}})}),s}),U=n=>m(i=>{let a=l(`div`,i);r(()=>{e(a,String(n.className))});let s=o(`rue:component:anchor`);t(a,s),r(()=>{let e=_(B,{className:n.countdownClassName,children:n.children});y(()=>g(e,a,s))});let c=o(`rue:slot:anchor`);return t(a,c),r(()=>{let e=n.label;y(()=>g(e,a,c))}),a}),W=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],G=()=>{let{counter:i,timerRef:s,precisionTimerRef:u,demoNow:x,precisionNow:S,comboTarget:E,comboTotalSeconds:D,comboHours:O,comboMinutes:k,comboSeconds:A,basicTarget:j,millisecondTarget:M,dayLevelTarget:N,callbackTarget:P,callbackStatus:F,callbackRemaining:I,syncComboCountdown:L,stopTimer:R,startTimer:z,startPrecisionTimer:G,tabBasic:K,tabLarge2:q,tabClock:J,tabClockColon:Y,tabLabels:X,tabLabelsUnder:Z,tabInBoxes:Q,tabArrayInternal:te,tabTarget:ne,tabMillisecond:re,tabDayLevel:ie,tabCallbacks:ae,countdownItems:oe,restartTargetDemo:se,restartMillisecondDemo:ce,restartDayLevelDemo:$,restartCallbackDemo:le,targetCountdownItems:ue,millisecondCountdownItems:de,dayLevelCountdownItems:fe}=b(`useSetup:0:0`,()=>v(()=>{let e=b(`ref:1:0`,()=>f(59)),t=b(`useRef:1:1`,()=>n(null)),r=b(`useRef:1:2`,()=>n(null)),i=b(`ref:1:3`,()=>f(Date.now())),a=b(`ref:1:4`,()=>f(Date.now())),o=b(`ref:1:5`,()=>f(Date.now()+600*60*1e3+1440*1e3+59*1e3)),s=b(`ref:1:6`,()=>f(Math.max(Math.floor((o.value-Date.now())/1e3),0))),c=b(`ref:1:7`,()=>f(Math.floor(s.value/3600))),l=b(`ref:1:8`,()=>f(Math.floor(s.value%3600/60))),u=b(`ref:1:9`,()=>f(s.value%60)),m=b(`ref:1:10`,()=>f(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),g=b(`ref:1:11`,()=>f(Date.now()+10*1e3)),_=b(`ref:1:12`,()=>f(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),v=b(`ref:1:13`,()=>f(Date.now()+10*1e3)),y=b(`ref:1:14`,()=>f(`计时中`)),x=b(`ref:1:15`,()=>f(1e4)),S=()=>{let e=Math.max(Math.floor((o.value-Date.now())/1e3),0);s.value=e,c.value=Math.floor(e/3600),l.value=Math.floor(e%3600/60),u.value=e%60},C=()=>{t.current!=null&&(clearInterval(t.current),t.current=null),r.current!=null&&(clearInterval(r.current),r.current=null)},w=()=>{t.current??=(S(),i.value=Date.now(),setInterval(()=>{e.value=e.value>0?e.value-1:59,i.value=Date.now(),S()},1e3))},T=()=>{r.current??=(a.value=Date.now(),setInterval(()=>{a.value=Date.now()},1e3/30))};return p(()=>{w(),T()}),d(C),{counter:e,timerRef:t,precisionTimerRef:r,demoNow:i,precisionNow:a,comboTarget:o,comboTotalSeconds:s,comboHours:c,comboMinutes:l,comboSeconds:u,basicTarget:m,millisecondTarget:g,dayLevelTarget:_,callbackTarget:v,callbackStatus:y,callbackRemaining:x,syncComboCountdown:S,stopTimer:C,startTimer:w,startPrecisionTimer:T,tabBasic:b(`ref:1:16`,()=>f(`preview`)),tabLarge2:b(`ref:1:17`,()=>f(`preview`)),tabClock:b(`ref:1:18`,()=>f(`preview`)),tabClockColon:b(`ref:1:19`,()=>f(`preview`)),tabLabels:b(`ref:1:20`,()=>f(`preview`)),tabLabelsUnder:b(`ref:1:21`,()=>f(`preview`)),tabInBoxes:b(`ref:1:22`,()=>f(`preview`)),tabArrayInternal:b(`ref:1:23`,()=>f(`preview`)),tabTarget:b(`ref:1:24`,()=>f(`preview`)),tabMillisecond:b(`ref:1:25`,()=>f(`preview`)),tabDayLevel:b(`ref:1:26`,()=>f(`preview`)),tabCallbacks:b(`ref:1:27`,()=>f(`preview`)),countdownItems:b(`computed:1:28`,()=>h(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{m.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59,i.value=Date.now()},restartMillisecondDemo:()=>{g.value=Date.now()+10*1e3,a.value=Date.now()},restartDayLevelDemo:()=>{_.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3,i.value=Date.now()},restartCallbackDemo:()=>{y.value=`计时中`,x.value=1e4,v.value=Date.now()+10*1e3},targetCountdownItems:b(`computed:1:29`,()=>h(()=>{let e=V(m.value-i.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2}]})),millisecondCountdownItems:b(`computed:1:30`,()=>h(()=>{let e=V(g.value-a.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2},{content:`:`},{value:e.milliseconds,digits:3}]})),dayLevelCountdownItems:b(`computed:1:31`,()=>h(()=>{let e=V(_.value-i.value);return[{value:e.days},{content:` days `},{value:e.hours,digits:2},{content:` hours `},{value:e.minutes,digits:2},{content:` minutes `},{value:e.seconds,digits:2},{content:` seconds`}]}))}}));return m(n=>{let s=c(),u=o(`rue:component:anchor`);return t(s,u),g(_(T,{children:m(()=>{let n=c(),s=l(`div`,n);t(n,s),e(s,`max-w-none prose prose-sm md:prose-base`);let u=l(`h1`,s);t(s,u),t(u,a(`Countdown 倒计时`));let d=l(`p`,s);t(s,d),e(d,`text-sm mt-3 mb-3`),t(d,a("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let f=o(`rue:component:anchor`);t(s,f),r(()=>{let e=_(H,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:ne,preview:()=>C(`div`,{className:`space-y-4`,children:[w(B,{className:`font-mono text-4xl`,items:ue.get()}),w(`button`,{className:`btn btn-sm btn-outline`,onClick:se,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});y(()=>g(e,s,f))});let p=o(`rue:component:anchor`);t(s,p),r(()=>{let e=_(H,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:re,preview:()=>C(`div`,{className:`space-y-4`,children:[w(B,{className:`font-mono text-3xl`,items:de.get()}),w(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
/>`});y(()=>g(e,s,p))});let m=o(`rue:component:anchor`);t(s,m),r(()=>{let e=_(H,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ie,preview:()=>C(`div`,{className:`space-y-4`,children:[w(B,{className:`font-mono text-2xl`,items:fe.get()}),w(`button`,{className:`btn btn-sm btn-outline`,onClick:$,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});y(()=>g(e,s,m))});let h=o(`rue:component:anchor`);t(s,h),r(()=>{let e=_(H,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:ae,preview:()=>C(`div`,{className:`space-y-4`,children:[w(B,{className:`font-mono text-3xl`,value:P.value,format:`s.SSS`,onChange:e=>{I.value=Math.max(Math.round(e??0),0)},onFinish:()=>{F.value=`已完成`}}),C(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,I.value,` ms`]}),C(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,F.value]}),w(`button`,{className:`btn btn-sm btn-outline`,onClick:le,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});y(()=>g(e,s,h))});let v=l(`h2`,s);t(s,v),t(v,a(`组合方式`));let b=l(`p`,s);t(s,b),e(b,`text-sm`),t(b,a("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let x=o(`rue:component:anchor`);t(s,x),r(()=>{let e=_(H,{title:`Countdown`,tab:K,preview:()=>w(B,{children:w(B.Value,{value:D.value,ariaLabel:`${D.value} seconds remaining`},D.value)},D.value),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});y(()=>g(e,s,x))});let S=o(`rue:component:anchor`);t(s,S),r(()=>{let e=_(H,{title:`Large Text With 2 Digits`,tab:q,preview:()=>w(B,{className:`font-mono text-6xl`,children:w(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds remaining`},A.value)},A.value),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});y(()=>g(e,s,S))});let T=o(`rue:component:anchor`);t(s,T),r(()=>{let e=_(H,{title:`Clock Countdown`,tab:J,preview:()=>C(B,{className:`font-mono text-2xl`,children:[w(B.Value,{value:O.value,ariaLabel:`${O.value} hours`},`h:${O.value}`),`h`,w(B.Value,{value:k.value,digits:2,ariaLabel:`${k.value} minutes`},`m:${k.value}`),`m`,w(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds`},`s:${A.value}`),`s`]},`${O.value}:${k.value}:${A.value}`),code:`const parts = computed(() => {
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
</Countdown>`});y(()=>g(e,s,T))});let E=o(`rue:component:anchor`);t(s,E),r(()=>{let e=_(H,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:te,preview:()=>w(B,{className:`font-mono text-2xl`,items:oe.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});y(()=>g(e,s,E))});let j=o(`rue:component:anchor`);t(s,j),r(()=>{let e=_(H,{title:`Clock Countdown With Colons`,tab:Y,preview:()=>C(B,{className:`font-mono text-2xl`,children:[w(B.Value,{value:10,ariaLabel:`10`}),`:`,w(B.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,w(B.Value,{value:i.value,digits:2,ariaLabel:String(i.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});y(()=>g(e,s,j))});let M=o(`rue:component:anchor`);t(s,M),r(()=>{let e=_(H,{title:`Large Text With Labels`,tab:X,preview:()=>C(`div`,{className:`flex gap-5`,children:[w(U,{label:`days`,countdownClassName:`font-mono text-4xl`,children:w(B.Value,{value:15,ariaLabel:`15`})}),w(U,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:w(B.Value,{value:10,ariaLabel:`10`})}),w(U,{label:`min`,countdownClassName:`font-mono text-4xl`,children:w(B.Value,{value:24,ariaLabel:`24`})}),w(U,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:w(B.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});y(()=>g(e,s,M))});let N=o(`rue:component:anchor`);t(s,N),r(()=>{let e=_(H,{title:`Large Text With Labels Under`,tab:Z,preview:()=>C(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[w(U,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:w(B.Value,{value:15,ariaLabel:`15`})}),w(U,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:w(B.Value,{value:10,ariaLabel:`10`})}),w(U,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:w(B.Value,{value:24,ariaLabel:`24`})}),w(U,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:w(B.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});y(()=>g(e,s,N))});let L=o(`rue:component:anchor`);t(s,L),r(()=>{let e=_(H,{title:`In Boxes`,tab:Q,preview:()=>C(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[w(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:w(B.Value,{value:15,ariaLabel:`15`})}),w(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:w(B.Value,{value:10,ariaLabel:`10`})}),w(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:w(B.Value,{value:24,ariaLabel:`24`})}),w(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:w(B.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});y(()=>g(e,s,L))});let R=l(`h2`,s);t(s,R),t(R,a(`API`));let z=o(`rue:component:anchor`);return t(s,z),r(()=>{let e=_(ee,{rows:W});y(()=>g(e,s,z))}),n})}),s,u),s})};export{G as default};
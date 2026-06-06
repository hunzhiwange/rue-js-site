import{$ as e,Gt as t,Jt as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,a as u,ct as d,et as f,gt as p,i as m,j as h,l as g,ot as _,s as v,t as y}from"./vapor-runtime-DHPuOjqh.js";import{a as b,n as x}from"./vapor-helpers-vapor-CJFAWine.js";import{a as S,i as C}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as w}from"./Code-Ds9lKLk6.js";import{t as T}from"./tabs-DSy0eY-V.js";import{n as E}from"./SidebarPlaygroundDesign-DMSFSCs3.js";var D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},N=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},P=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},F=(e,t,n)=>{let r=N(t),i=P(e,r);return r.flatMap(e=>{if(e.type===`literal`)return e.content?[{content:e.content}]:[];let t=i[e.unit]??0;return[{value:t,digits:e.digits>1?e.digits:void 0,ariaLive:n,ariaLabel:String(t)}]})},I=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,L=e=>e.map((e,t)=>{if(`value`in e){let{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s}=e;return C(z,{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s},`${t}:${n}:${r??``}:${o??``}`)}return e.content}),R=({className:e,children:r,items:a,value:o,format:s=D,interval:c,ariaLive:l,onChange:u,onFinish:d})=>{let f=i(0),p=t(null),m=t(!1),g=()=>{p.current!=null&&(clearInterval(p.current),p.current=null)},_=()=>{let e=M(o);if(e==null)return f.value=0,u&&u(void 0),g(),!1;let t=Math.max(e-Date.now(),0);return f.value=t,u&&u(t),t<=0?(g(),m.current||(m.current=!0,d&&d()),!1):(m.current=!1,!0)},v=()=>{g(),o!=null&&_()&&(p.current=setInterval(_,I(s,c)))};n(()=>`${M(o)??`invalid`}|${s}|${c??``}`,()=>{m.current=!1,v()},{immediate:!0}),h(g);let y=j(`countdown`,e),b=!!(a&&a.length),x=!b&&o!=null,S=l??(s.includes(`S`)?`off`:`polite`);return b?C(`span`,{className:y,children:L(a)}):x?C(`span`,{className:y,children:L(F(f.value,s,S))}):C(`span`,{className:y,children:r})},z=({value:e,digits:t,className:n,ariaLive:r=`polite`,ariaLabel:i,children:a})=>C(`span`,{ref:n=>{n&&(n.style.setProperty(`--value`,String(e)),t==null?n.style.removeProperty(`--digits`):n.style.setProperty(`--digits`,String(t)))},"aria-live":r,"aria-label":i??String(e),"data-countdown-value":String(e),"data-countdown-digits":t==null?void 0:String(t),className:n?.trim(),children:a??String(e)}),B=Object.assign(R,{Value:z}),V=e=>{let t=Math.max(e,0),n=Math.floor(t/1e3);return{days:Math.floor(n/(1440*60)),hours:Math.floor(n%(1440*60)/3600),minutes:Math.floor(n%3600/60),seconds:n%60,milliseconds:t%1e3}},H=t=>g(n=>{let r=e(`div`,n);d(r,`component-preview not-prose text-base-content my-6 lg:my-12`);let i=e(`div`,r);s(r,i),d(i,`flex flex-wrap items-start justify-between gap-3`);let u=e(`div`,i);s(i,u);let p=e(`h2`,u);s(u,p),d(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),s(p,f(`# `));let m=l(`rue:slot:anchor`);s(p,m),c(()=>{let e=t.title;o(()=>v(e,p,m))});let h=l(`rue:slot:anchor`);s(u,h),c(()=>{let n=t.summary?g(()=>{let n=a(),r=e(`p`,n);s(n,r),d(r,`m-0 text-sm opacity-70`);let i=l(`rue:slot:anchor`);return s(r,i),c(()=>{let e=t.summary;o(()=>v(e,r,i))}),n}):``;o(()=>v(n,u,h))});let _=l(`rue:component:anchor`);s(r,_),c(()=>{let e=y(T,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});o(()=>v(e,r,_))});let b=l(`rue:slot:anchor`);return s(r,b),c(()=>{let e=t.tab.value===`preview`?t.preview():g(()=>{let e=a(),n=l(`rue:component:anchor`);return s(e,n),c(()=>{let r=y(w,{className:`mt-2`,lang:`tsx`,code:t.code});o(()=>v(r,e,n))}),e});o(()=>v(e,r,b))}),r}),ee=t=>g(n=>{let r=e(`div`,n);d(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);s(r,i),d(i,`table table-zebra`);let u=e(`thead`,i);s(i,u);let p=e(`tr`,u);s(u,p);let m=e(`th`,p);s(p,m),s(m,f(`属性`));let h=e(`th`,p);s(p,h),s(h,f(`说明`));let y=e(`th`,p);s(p,y),s(y,f(`类型`));let b=e(`th`,p);s(p,b),s(b,f(`默认值`));let S=e(`tbody`,i);s(i,S);let C=l(`rue:list:start`),w=l(`rue:list:end`);s(S,C),s(S,w);let T=new Map;return c(()=>{T=x({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,r,i,u)=>{v(g(()=>{let n=a(),r=e(`tr`,n);s(n,r),c(()=>{_(r,`key`,String(t.prop))});let i=e(`td`,r);s(r,i);let u=e(`code`,i);s(i,u);let d=l(`rue:slot:anchor`);s(u,d),c(()=>{let e=t.prop;o(()=>v(e,u,d))});let f=e(`td`,r);s(r,f);let p=l(`rue:slot:anchor`);s(f,p),c(()=>{let e=t.description;o(()=>v(e,f,p))});let m=e(`td`,r);s(r,m);let h=e(`code`,m);s(m,h);let g=l(`rue:slot:anchor`);s(h,g),c(()=>{let e=t.type;o(()=>v(e,h,g))});let y=e(`td`,r);s(r,y);let b=e(`code`,y);s(y,b);let x=l(`rue:slot:anchor`);return s(b,x),c(()=>{let e=t.defaultValue;o(()=>v(e,b,x))}),n}),n,r)}})}),r}),U=t=>g(n=>{let r=e(`div`,n);c(()=>{d(r,String(t.className))});let i=l(`rue:component:anchor`);s(r,i),c(()=>{let e=y(B,{className:t.countdownClassName,children:t.children});o(()=>v(e,r,i))});let a=l(`rue:slot:anchor`);return s(r,a),c(()=>{let e=t.label;o(()=>v(e,r,a))}),r}),W=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],G=()=>{let{counter:n,timerRef:h,precisionTimerRef:_,demoNow:x,precisionNow:w,comboTarget:T,comboTotalSeconds:D,comboHours:O,comboMinutes:k,comboSeconds:A,basicTarget:j,millisecondTarget:M,dayLevelTarget:N,callbackTarget:P,callbackStatus:F,callbackRemaining:I,syncComboCountdown:L,stopTimer:R,startTimer:z,startPrecisionTimer:G,tabBasic:K,tabLarge2:q,tabClock:J,tabClockColon:Y,tabLabels:X,tabLabelsUnder:Z,tabInBoxes:Q,tabArrayInternal:te,tabTarget:ne,tabMillisecond:re,tabDayLevel:ie,tabCallbacks:ae,countdownItems:oe,restartTargetDemo:se,restartMillisecondDemo:ce,restartDayLevelDemo:$,restartCallbackDemo:le,targetCountdownItems:ue,millisecondCountdownItems:de,dayLevelCountdownItems:fe}=b(`useSetup:0:0`,()=>r(()=>{let e=b(`ref:1:0`,()=>i(59)),n=b(`useRef:1:1`,()=>t(null)),r=b(`useRef:1:2`,()=>t(null)),a=b(`ref:1:3`,()=>i(Date.now())),o=b(`ref:1:4`,()=>i(Date.now())),s=b(`ref:1:5`,()=>i(Date.now()+600*60*1e3+1440*1e3+59*1e3)),c=b(`ref:1:6`,()=>i(Math.max(Math.floor((s.value-Date.now())/1e3),0))),l=b(`ref:1:7`,()=>i(Math.floor(c.value/3600))),d=b(`ref:1:8`,()=>i(Math.floor(c.value%3600/60))),f=b(`ref:1:9`,()=>i(c.value%60)),h=b(`ref:1:10`,()=>i(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),g=b(`ref:1:11`,()=>i(Date.now()+10*1e3)),_=b(`ref:1:12`,()=>i(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),v=b(`ref:1:13`,()=>i(Date.now()+10*1e3)),y=b(`ref:1:14`,()=>i(`计时中`)),x=b(`ref:1:15`,()=>i(1e4)),S=()=>{let e=Math.max(Math.floor((s.value-Date.now())/1e3),0);c.value=e,l.value=Math.floor(e/3600),d.value=Math.floor(e%3600/60),f.value=e%60},C=()=>{n.current!=null&&(clearInterval(n.current),n.current=null),r.current!=null&&(clearInterval(r.current),r.current=null)},w=()=>{n.current??=(S(),a.value=Date.now(),setInterval(()=>{e.value=e.value>0?e.value-1:59,a.value=Date.now(),S()},1e3))},T=()=>{r.current??=(o.value=Date.now(),setInterval(()=>{o.value=Date.now()},1e3/30))};return m(()=>{w(),T()}),u(C),{counter:e,timerRef:n,precisionTimerRef:r,demoNow:a,precisionNow:o,comboTarget:s,comboTotalSeconds:c,comboHours:l,comboMinutes:d,comboSeconds:f,basicTarget:h,millisecondTarget:g,dayLevelTarget:_,callbackTarget:v,callbackStatus:y,callbackRemaining:x,syncComboCountdown:S,stopTimer:C,startTimer:w,startPrecisionTimer:T,tabBasic:b(`ref:1:16`,()=>i(`preview`)),tabLarge2:b(`ref:1:17`,()=>i(`preview`)),tabClock:b(`ref:1:18`,()=>i(`preview`)),tabClockColon:b(`ref:1:19`,()=>i(`preview`)),tabLabels:b(`ref:1:20`,()=>i(`preview`)),tabLabelsUnder:b(`ref:1:21`,()=>i(`preview`)),tabInBoxes:b(`ref:1:22`,()=>i(`preview`)),tabArrayInternal:b(`ref:1:23`,()=>i(`preview`)),tabTarget:b(`ref:1:24`,()=>i(`preview`)),tabMillisecond:b(`ref:1:25`,()=>i(`preview`)),tabDayLevel:b(`ref:1:26`,()=>i(`preview`)),tabCallbacks:b(`ref:1:27`,()=>i(`preview`)),countdownItems:b(`computed:1:28`,()=>p(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{h.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59,a.value=Date.now()},restartMillisecondDemo:()=>{g.value=Date.now()+10*1e3,o.value=Date.now()},restartDayLevelDemo:()=>{_.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3,a.value=Date.now()},restartCallbackDemo:()=>{y.value=`计时中`,x.value=1e4,v.value=Date.now()+10*1e3},targetCountdownItems:b(`computed:1:29`,()=>p(()=>{let e=V(h.value-a.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2}]})),millisecondCountdownItems:b(`computed:1:30`,()=>p(()=>{let e=V(g.value-o.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2},{content:`:`},{value:e.milliseconds,digits:3}]})),dayLevelCountdownItems:b(`computed:1:31`,()=>p(()=>{let e=V(_.value-a.value);return[{value:e.days},{content:` days `},{value:e.hours,digits:2},{content:` hours `},{value:e.minutes,digits:2},{content:` minutes `},{value:e.seconds,digits:2},{content:` seconds`}]}))}}));return g(t=>{let r=a(),i=l(`rue:component:anchor`);return s(r,i),v(y(E,{children:g(()=>{let t=a(),r=e(`div`,t);s(t,r),d(r,`max-w-none prose prose-sm md:prose-base`);let i=e(`h1`,r);s(r,i),s(i,f(`Countdown 倒计时`));let u=e(`p`,r);s(r,u),d(u,`text-sm mt-3 mb-3`),s(u,f("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let p=l(`rue:component:anchor`);s(r,p),c(()=>{let e=y(H,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:ne,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-4xl`,items:ue.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:se,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});o(()=>v(e,r,p))});let m=l(`rue:component:anchor`);s(r,m),c(()=>{let e=y(H,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:re,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,items:de.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
/>`});o(()=>v(e,r,m))});let h=l(`rue:component:anchor`);s(r,h),c(()=>{let e=y(H,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ie,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-2xl`,items:fe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:$,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});o(()=>v(e,r,h))});let g=l(`rue:component:anchor`);s(r,g),c(()=>{let e=y(H,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:ae,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,value:P.value,format:`s.SSS`,onChange:e=>{I.value=Math.max(Math.round(e??0),0)},onFinish:()=>{F.value=`已完成`}}),S(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,I.value,` ms`]}),S(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,F.value]}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:le,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});o(()=>v(e,r,g))});let _=e(`h2`,r);s(r,_),s(_,f(`组合方式`));let b=e(`p`,r);s(r,b),d(b,`text-sm`),s(b,f("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let x=l(`rue:component:anchor`);s(r,x),c(()=>{let e=y(H,{title:`Countdown`,tab:K,preview:()=>C(B,{children:C(B.Value,{value:D.value,ariaLabel:`${D.value} seconds remaining`},D.value)},D.value),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});o(()=>v(e,r,x))});let w=l(`rue:component:anchor`);s(r,w),c(()=>{let e=y(H,{title:`Large Text With 2 Digits`,tab:q,preview:()=>C(B,{className:`font-mono text-6xl`,children:C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds remaining`},A.value)},A.value),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});o(()=>v(e,r,w))});let T=l(`rue:component:anchor`);s(r,T),c(()=>{let e=y(H,{title:`Clock Countdown`,tab:J,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:O.value,ariaLabel:`${O.value} hours`},`h:${O.value}`),`h`,C(B.Value,{value:k.value,digits:2,ariaLabel:`${k.value} minutes`},`m:${k.value}`),`m`,C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds`},`s:${A.value}`),`s`]},`${O.value}:${k.value}:${A.value}`),code:`const parts = computed(() => {
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
</Countdown>`});o(()=>v(e,r,T))});let E=l(`rue:component:anchor`);s(r,E),c(()=>{let e=y(H,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:te,preview:()=>C(B,{className:`font-mono text-2xl`,items:oe.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});o(()=>v(e,r,E))});let j=l(`rue:component:anchor`);s(r,j),c(()=>{let e=y(H,{title:`Clock Countdown With Colons`,tab:Y,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:10,ariaLabel:`10`}),`:`,C(B.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,C(B.Value,{value:n.value,digits:2,ariaLabel:String(n.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});o(()=>v(e,r,j))});let M=l(`rue:component:anchor`);s(r,M),c(()=>{let e=y(H,{title:`Large Text With Labels`,tab:X,preview:()=>S(`div`,{className:`flex gap-5`,children:[C(U,{label:`days`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{label:`min`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:n.value,ariaLabel:String(n.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});o(()=>v(e,r,M))});let N=l(`rue:component:anchor`);s(r,N),c(()=>{let e=y(H,{title:`Large Text With Labels Under`,tab:Z,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:n.value,ariaLabel:String(n.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});o(()=>v(e,r,N))});let L=l(`rue:component:anchor`);s(r,L),c(()=>{let e=y(H,{title:`In Boxes`,tab:Q,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:n.value,ariaLabel:String(n.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});o(()=>v(e,r,L))});let R=e(`h2`,r);s(r,R),s(R,f(`API`));let z=l(`rue:component:anchor`);return s(r,z),c(()=>{let e=y(ee,{rows:W});o(()=>v(e,r,z))}),t})}),r,i),r})};export{G as default};
import{C as e,F as t,I as n,K as r,L as i,N as a,R as o,W as s,_t as c,d as l,gt as u,l as d,mt as f,nt as p,o as m,ot as h,pt as g,s as _,t as v,ut as y}from"./vapor-runtime-B3ypJaOM.js";import{a as b,n as x}from"./vapor-helpers-vapor-CER7Yupw.js";import{n as S,t as C}from"./src-BhCwGZbQ.js";import{n as w}from"./SidebarPlaygroundDesign-DJJx0NbZ.js";import{t as T}from"./Code-DOCCgQFa.js";import{t as E}from"./tabs-Cu0uJJtf.js";var D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},N=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},P=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},F=(e,t,n)=>{let r=N(t),i=P(e,r);return r.flatMap(e=>{if(e.type===`literal`)return e.content?[{content:e.content}]:[];let t=i[e.unit]??0;return[{value:t,digits:e.digits>1?e.digits:void 0,ariaLive:n,ariaLabel:String(t)}]})},I=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,L=e=>e.map((e,t)=>{if(`value`in e){let{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s}=e;return C(z,{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s},`${t}:${n}:${r??``}:${o??``}`)}return e.content}),R=({className:t,children:n,items:r,value:i,format:a=D,interval:o,ariaLive:s,onChange:c,onFinish:l})=>{let d=h(0),f=g(null),p=g(!1),m=()=>{f.current!=null&&(clearInterval(f.current),f.current=null)},_=()=>{let e=M(i);if(e==null)return d.value=0,c&&c(void 0),m(),!1;let t=Math.max(e-Date.now(),0);return d.value=t,c&&c(t),t<=0?(m(),p.current||(p.current=!0,l&&l()),!1):(p.current=!1,!0)},v=()=>{m(),i!=null&&_()&&(f.current=setInterval(_,I(a,o)))};u(()=>`${M(i)??`invalid`}|${a}|${o??``}`,()=>{p.current=!1,v()},{immediate:!0}),e(m);let y=j(`countdown`,t),b=!!(r&&r.length),x=!b&&i!=null,S=s??(a.includes(`S`)?`off`:`polite`);return b?C(`span`,{className:y,children:L(r)}):x?C(`span`,{className:y,children:L(F(d.value,a,S))}):C(`span`,{className:y,children:n})},z=({value:e,digits:t,className:n,ariaLive:r=`polite`,ariaLabel:i,children:a})=>C(`span`,{ref:n=>{n&&(n.style.setProperty(`--value`,String(e)),t==null?n.style.removeProperty(`--digits`):n.style.setProperty(`--digits`,String(t)))},"aria-live":r,"aria-label":i??String(e),"data-countdown-value":String(e),"data-countdown-digits":t==null?void 0:String(t),className:n?.trim(),children:a??String(e)}),B=Object.assign(R,{Value:z}),V=e=>{let t=Math.max(e,0),n=Math.floor(t/1e3);return{days:Math.floor(n/(1440*60)),hours:Math.floor(n%(1440*60)/3600),minutes:Math.floor(n%3600/60),seconds:n%60,milliseconds:t%1e3}},H=e=>l(s=>{let u=i(`div`,s);r(u,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=i(`div`,u);a(u,f),r(f,`flex flex-wrap items-start justify-between gap-3`);let p=i(`div`,f);a(f,p);let m=i(`h2`,p);a(p,m),r(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(m,o(`# `));let h=t(`rue:slot:anchor`);a(m,h),c(()=>{let t=e.title;y(()=>d(t,m,h))});let g=t(`rue:slot:anchor`);a(p,g),c(()=>{let o=e.summary?l(()=>{let o=n(),s=i(`p`,o);a(o,s),r(s,`m-0 text-sm opacity-70`);let l=t(`rue:slot:anchor`);return a(s,l),c(()=>{let t=e.summary;y(()=>d(t,s,l))}),o}):``;y(()=>d(o,p,g))});let _=t(`rue:component:anchor`);a(u,_),c(()=>{let t=v(E,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});y(()=>d(t,u,_))});let b=t(`rue:slot:anchor`);return a(u,b),c(()=>{let r=e.tab.value===`preview`?e.preview():l(()=>{let r=n(),i=t(`rue:component:anchor`);return a(r,i),c(()=>{let t=v(T,{className:`mt-2`,lang:`tsx`,code:e.code});y(()=>d(t,r,i))}),r});y(()=>d(r,u,b))}),u}),ee=e=>l(u=>{let f=i(`div`,u);r(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=i(`table`,f);a(f,p),r(p,`table table-zebra`);let m=i(`thead`,p);a(p,m);let h=i(`tr`,m);a(m,h);let g=i(`th`,h);a(h,g),a(g,o(`属性`));let _=i(`th`,h);a(h,_),a(_,o(`说明`));let v=i(`th`,h);a(h,v),a(v,o(`类型`));let b=i(`th`,h);a(h,b),a(b,o(`默认值`));let S=i(`tbody`,p);a(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return c(()=>{T=x({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,o,u,f)=>{d(l(()=>{let r=n(),o=i(`tr`,r);a(r,o),c(()=>{s(o,`key`,String(e.prop))});let l=i(`td`,o);a(o,l);let u=i(`code`,l);a(l,u);let f=t(`rue:slot:anchor`);a(u,f),c(()=>{let t=e.prop;y(()=>d(t,u,f))});let p=i(`td`,o);a(o,p);let m=t(`rue:slot:anchor`);a(p,m),c(()=>{let t=e.description;y(()=>d(t,p,m))});let h=i(`td`,o);a(o,h);let g=i(`code`,h);a(h,g);let _=t(`rue:slot:anchor`);a(g,_),c(()=>{let t=e.type;y(()=>d(t,g,_))});let v=i(`td`,o);a(o,v);let b=i(`code`,v);a(v,b);let x=t(`rue:slot:anchor`);return a(b,x),c(()=>{let t=e.defaultValue;y(()=>d(t,b,x))}),r}),r,o)}})}),f}),U=e=>l(n=>{let o=i(`div`,n);c(()=>{r(o,String(e.className))});let s=t(`rue:component:anchor`);a(o,s),c(()=>{let t=v(B,{className:e.countdownClassName,children:e.children});y(()=>d(t,o,s))});let l=t(`rue:slot:anchor`);return a(o,l),c(()=>{let t=e.label;y(()=>d(t,o,l))}),o}),W=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],G=()=>{let{counter:e,timerRef:u,precisionTimerRef:x,demoNow:T,precisionNow:E,comboTarget:D,comboTotalSeconds:O,comboHours:k,comboMinutes:A,comboSeconds:j,basicTarget:M,millisecondTarget:N,dayLevelTarget:P,callbackTarget:F,callbackStatus:I,callbackRemaining:L,syncComboCountdown:R,stopTimer:z,startTimer:G,startPrecisionTimer:K,tabBasic:q,tabLarge2:J,tabClock:Y,tabClockColon:X,tabLabels:Z,tabLabelsUnder:Q,tabInBoxes:te,tabArrayInternal:ne,tabTarget:re,tabMillisecond:ie,tabDayLevel:ae,tabCallbacks:oe,countdownItems:se,restartTargetDemo:ce,restartMillisecondDemo:le,restartDayLevelDemo:$,restartCallbackDemo:ue,targetCountdownItems:de,millisecondCountdownItems:fe,dayLevelCountdownItems:pe}=b(`useSetup:0:0`,()=>f(()=>{let e=b(`ref:1:0`,()=>h(59)),t=b(`useRef:1:1`,()=>g(null)),n=b(`useRef:1:2`,()=>g(null)),r=b(`ref:1:3`,()=>h(Date.now())),i=b(`ref:1:4`,()=>h(Date.now())),a=b(`ref:1:5`,()=>h(Date.now()+600*60*1e3+1440*1e3+59*1e3)),o=b(`ref:1:6`,()=>h(Math.max(Math.floor((a.value-Date.now())/1e3),0))),s=b(`ref:1:7`,()=>h(Math.floor(o.value/3600))),c=b(`ref:1:8`,()=>h(Math.floor(o.value%3600/60))),l=b(`ref:1:9`,()=>h(o.value%60)),u=b(`ref:1:10`,()=>h(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),d=b(`ref:1:11`,()=>h(Date.now()+10*1e3)),f=b(`ref:1:12`,()=>h(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),v=b(`ref:1:13`,()=>h(Date.now()+10*1e3)),y=b(`ref:1:14`,()=>h(`计时中`)),x=b(`ref:1:15`,()=>h(1e4)),S=()=>{let e=Math.max(Math.floor((a.value-Date.now())/1e3),0);o.value=e,s.value=Math.floor(e/3600),c.value=Math.floor(e%3600/60),l.value=e%60},C=()=>{t.current!=null&&(clearInterval(t.current),t.current=null),n.current!=null&&(clearInterval(n.current),n.current=null)},w=()=>{t.current??=(S(),r.value=Date.now(),setInterval(()=>{e.value=e.value>0?e.value-1:59,r.value=Date.now(),S()},1e3))},T=()=>{n.current??=(i.value=Date.now(),setInterval(()=>{i.value=Date.now()},1e3/30))};return m(()=>{w(),T()}),_(C),{counter:e,timerRef:t,precisionTimerRef:n,demoNow:r,precisionNow:i,comboTarget:a,comboTotalSeconds:o,comboHours:s,comboMinutes:c,comboSeconds:l,basicTarget:u,millisecondTarget:d,dayLevelTarget:f,callbackTarget:v,callbackStatus:y,callbackRemaining:x,syncComboCountdown:S,stopTimer:C,startTimer:w,startPrecisionTimer:T,tabBasic:b(`ref:1:16`,()=>h(`preview`)),tabLarge2:b(`ref:1:17`,()=>h(`preview`)),tabClock:b(`ref:1:18`,()=>h(`preview`)),tabClockColon:b(`ref:1:19`,()=>h(`preview`)),tabLabels:b(`ref:1:20`,()=>h(`preview`)),tabLabelsUnder:b(`ref:1:21`,()=>h(`preview`)),tabInBoxes:b(`ref:1:22`,()=>h(`preview`)),tabArrayInternal:b(`ref:1:23`,()=>h(`preview`)),tabTarget:b(`ref:1:24`,()=>h(`preview`)),tabMillisecond:b(`ref:1:25`,()=>h(`preview`)),tabDayLevel:b(`ref:1:26`,()=>h(`preview`)),tabCallbacks:b(`ref:1:27`,()=>h(`preview`)),countdownItems:b(`computed:1:28`,()=>p(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{u.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59,r.value=Date.now()},restartMillisecondDemo:()=>{d.value=Date.now()+10*1e3,i.value=Date.now()},restartDayLevelDemo:()=>{f.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3,r.value=Date.now()},restartCallbackDemo:()=>{y.value=`计时中`,x.value=1e4,v.value=Date.now()+10*1e3},targetCountdownItems:b(`computed:1:29`,()=>p(()=>{let e=V(u.value-r.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2}]})),millisecondCountdownItems:b(`computed:1:30`,()=>p(()=>{let e=V(d.value-i.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2},{content:`:`},{value:e.milliseconds,digits:3}]})),dayLevelCountdownItems:b(`computed:1:31`,()=>p(()=>{let e=V(f.value-r.value);return[{value:e.days},{content:` days `},{value:e.hours,digits:2},{content:` hours `},{value:e.minutes,digits:2},{content:` minutes `},{value:e.seconds,digits:2},{content:` seconds`}]}))}}));return l(u=>{let f=n(),p=t(`rue:component:anchor`);return a(f,p),d(v(w,{children:l(()=>{let l=n(),u=i(`div`,l);a(l,u),r(u,`max-w-none prose prose-sm md:prose-base`);let f=i(`h1`,u);a(u,f),a(f,o(`Countdown 倒计时`));let p=i(`p`,u);a(u,p),r(p,`text-sm mt-3 mb-3`),a(p,o("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let m=i(`div`,u);a(u,m),r(m,`text-sm`);let h=i(`a`,m);a(m,h),s(h,`href`,`https://daisyui.com/components/countdown/`),s(h,`target`,`_blank`),a(h,o(`查看 Countdown 静态样式`));let g=t(`rue:component:anchor`);a(u,g),c(()=>{let e=v(H,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:re,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-4xl`,items:de.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});y(()=>d(e,u,g))});let _=t(`rue:component:anchor`);a(u,_),c(()=>{let e=v(H,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:ie,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,items:fe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:le,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
/>`});y(()=>d(e,u,_))});let b=t(`rue:component:anchor`);a(u,b),c(()=>{let e=v(H,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ae,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-2xl`,items:pe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:$,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});y(()=>d(e,u,b))});let x=t(`rue:component:anchor`);a(u,x),c(()=>{let e=v(H,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:oe,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,value:F.value,format:`s.SSS`,onChange:e=>{L.value=Math.max(Math.round(e??0),0)},onFinish:()=>{I.value=`已完成`}}),S(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,L.value,` ms`]}),S(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,I.value]}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ue,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});y(()=>d(e,u,x))});let w=i(`h2`,u);a(u,w),a(w,o(`组合方式`));let T=i(`p`,u);a(u,T),r(T,`text-sm`),a(T,o("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let E=t(`rue:component:anchor`);a(u,E),c(()=>{let e=v(H,{title:`Countdown`,tab:q,preview:()=>C(B,{children:C(B.Value,{value:O.value,ariaLabel:`${O.value} seconds remaining`},O.value)},O.value),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});y(()=>d(e,u,E))});let D=t(`rue:component:anchor`);a(u,D),c(()=>{let e=v(H,{title:`Large Text With 2 Digits`,tab:J,preview:()=>C(B,{className:`font-mono text-6xl`,children:C(B.Value,{value:j.value,digits:2,ariaLabel:`${j.value} seconds remaining`},j.value)},j.value),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});y(()=>d(e,u,D))});let M=t(`rue:component:anchor`);a(u,M),c(()=>{let e=v(H,{title:`Clock Countdown`,tab:Y,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:k.value,ariaLabel:`${k.value} hours`},`h:${k.value}`),`h`,C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} minutes`},`m:${A.value}`),`m`,C(B.Value,{value:j.value,digits:2,ariaLabel:`${j.value} seconds`},`s:${j.value}`),`s`]},`${k.value}:${A.value}:${j.value}`),code:`const parts = computed(() => {
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
</Countdown>`});y(()=>d(e,u,M))});let N=t(`rue:component:anchor`);a(u,N),c(()=>{let e=v(H,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:ne,preview:()=>C(B,{className:`font-mono text-2xl`,items:se.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});y(()=>d(e,u,N))});let P=t(`rue:component:anchor`);a(u,P),c(()=>{let t=v(H,{title:`Clock Countdown With Colons`,tab:X,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:10,ariaLabel:`10`}),`:`,C(B.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,C(B.Value,{value:e.value,digits:2,ariaLabel:String(e.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});y(()=>d(t,u,P))});let R=t(`rue:component:anchor`);a(u,R),c(()=>{let t=v(H,{title:`Large Text With Labels`,tab:Z,preview:()=>S(`div`,{className:`flex gap-5`,children:[C(U,{label:`days`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{label:`min`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});y(()=>d(t,u,R))});let z=t(`rue:component:anchor`);a(u,z),c(()=>{let t=v(H,{title:`Large Text With Labels Under`,tab:Q,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});y(()=>d(t,u,z))});let V=t(`rue:component:anchor`);a(u,V),c(()=>{let t=v(H,{title:`In Boxes`,tab:te,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});y(()=>d(t,u,V))});let G=i(`h2`,u);a(u,G),a(G,o(`API`));let K=t(`rue:component:anchor`);return a(u,K),c(()=>{let e=v(ee,{rows:W});y(()=>d(e,u,K))}),l})}),f,p),f})};export{G as default};
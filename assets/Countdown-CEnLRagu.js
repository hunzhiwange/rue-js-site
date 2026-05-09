import{$ as e,F as t,H as n,I as r,L as i,N as a,P as o,S as s,W as c,Y as l,c as u,ft as d,j as f,lt as p,o as m,pt as h,rt as g,s as _,t as v,u as y,ut as b}from"./vapor-runtime-CKndxKFn.js";import{a as x,n as S}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as C,t as w}from"./src-CqIWk1va.js";import{n as T}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as E}from"./Code-B1JFTu6m.js";import{t as D}from"./tabs-BbiCzXqJ.js";var O=`HH:mm:ss`,k=1e3/30,A=1e3,j=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],M=(e,t)=>t?`${e} ${t}`:e,N=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},P=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},F=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return j.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},I=(e,t,n)=>{let r=P(t),i=F(e,r);return r.flatMap(e=>{if(e.type===`literal`)return e.content?[{content:e.content}]:[];let t=i[e.unit]??0;return[{value:t,digits:e.digits>1?e.digits:void 0,ariaLive:n,ariaLabel:String(t)}]})},L=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?k:A,R=e=>e.map((e,t)=>{if(`value`in e){let{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s}=e;return w(B,{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s},`${t}:${n}:${r??``}:${o??``}`)}return e.content}),z=({className:e,children:t,items:n,value:r,format:i=O,interval:a,ariaLive:o,onChange:c,onFinish:l})=>{let u=g(0),f=p(null),m=p(!1),h=()=>{f.current!=null&&(clearInterval(f.current),f.current=null)},_=()=>{let e=N(r);if(e==null)return u.value=0,c&&c(void 0),h(),!1;let t=Math.max(e-Date.now(),0);return u.value=t,c&&c(t),t<=0?(h(),m.current||(m.current=!0,l&&l()),!1):(m.current=!1,!0)},v=()=>{h(),r!=null&&_()&&(f.current=setInterval(_,L(i,a)))};d(()=>`${N(r)??`invalid`}|${i}|${a??``}`,()=>{m.current=!1,v()},{immediate:!0}),s(h);let y=M(`countdown`,e),b=!!(n&&n.length),x=!b&&r!=null,S=o??(i.includes(`S`)?`off`:`polite`);return b?w(`span`,{className:y,children:R(n)}):x?w(`span`,{className:y,children:R(I(u.value,i,S))}):w(`span`,{className:y,children:t})},B=({value:e,digits:t,className:n,ariaLive:r=`polite`,ariaLabel:i,children:a})=>w(`span`,{ref:n=>{n&&(n.style.setProperty(`--value`,String(e)),t==null?n.style.removeProperty(`--digits`):n.style.setProperty(`--digits`,String(t)))},"aria-live":r,"aria-label":i??String(e),"data-countdown-value":String(e),"data-countdown-digits":t==null?void 0:String(t),className:n?.trim(),children:a??String(e)}),V=Object.assign(z,{Value:B}),H=e=>{let t=Math.max(e,0),n=Math.floor(t/1e3);return{days:Math.floor(n/(1440*60)),hours:Math.floor(n%(1440*60)/3600),minutes:Math.floor(n%3600/60),seconds:n%60,milliseconds:t%1e3}},U=({title:e,summary:n,tab:s,preview:d,code:p})=>y(()=>{let m=t(`div`);c(m,`component-preview not-prose text-base-content my-6 lg:my-12`);let g=t(`div`);f(m,g),c(g,`flex flex-wrap items-start justify-between gap-3`);let _=t(`div`);f(g,_);let b=t(`h2`);f(_,b),c(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),f(b,r(`# `));let x=i(b);f(b,x),h(()=>{l(x,e)});let S=a(`rue:slot:anchor`);f(_,S),h(()=>{u(n?y(()=>{let e=o(),r=t(`p`);f(e,r),c(r,`m-0 text-sm opacity-70`);let a=i(r);return f(r,a),h(()=>{l(a,n)}),e}):``,_,S)});let C=a(`rue:component:anchor`);f(m,C),h(()=>{u(v(D,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:s.value,onChange:e=>s.value=e,className:`mb-3 mt-4`}),m,C)});let w=a(`rue:slot:anchor`);return f(m,w),h(()=>{u(s.value===`preview`?d():y(()=>{let e=o(),t=a(`rue:component:anchor`);return f(e,t),h(()=>{u(v(E,{className:`mt-2`,lang:`tsx`,code:p}),e,t)}),e}),m,w)}),m}),W=({rows:e})=>y(()=>{let i=t(`div`);c(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=t(`table`);f(i,s),c(s,`table table-zebra`);let l=t(`thead`);f(s,l);let d=t(`tr`);f(l,d);let p=t(`th`);f(d,p),f(p,r(`属性`));let m=t(`th`);f(d,m),f(m,r(`说明`));let g=t(`th`);f(d,g),f(g,r(`类型`));let _=t(`th`);f(d,_),f(_,r(`默认值`));let v=t(`tbody`);f(s,v);let b=a(`rue:list:start`),x=a(`rue:list:end`);f(v,b),f(v,x);let C=new Map;return h(()=>{C=S({items:e||[],getKey:(e,t)=>e.prop,elements:C,parent:v,before:x,singleRoot:!0,start:b,renderItem:(e,r,i,s,c)=>{u(y(()=>{let r=o(),i=t(`tr`);f(r,i),h(()=>{n(i,`key`,String(e.prop))});let s=t(`td`);f(i,s);let c=t(`code`);f(s,c);let l=a(`rue:slot:anchor`);f(c,l),h(()=>{let t=e.prop;u(t,c,l)});let d=t(`td`);f(i,d);let p=a(`rue:slot:anchor`);f(d,p),h(()=>{let t=e.description;u(t,d,p)});let m=t(`td`);f(i,m);let g=t(`code`);f(m,g);let _=a(`rue:slot:anchor`);f(g,_),h(()=>{let t=e.type;u(t,g,_)});let v=t(`td`);f(i,v);let y=t(`code`);f(v,y);let b=a(`rue:slot:anchor`);return f(y,b),h(()=>{let t=e.defaultValue;u(t,y,b)}),r}),r,i)}})}),i}),G=({className:e,label:n,countdownClassName:r,children:i})=>y(()=>{let o=t(`div`);h(()=>{c(o,String(e))});let s=a(`rue:component:anchor`);f(o,s),h(()=>{u(v(V,{className:r,children:i}),o,s)});let l=a(`rue:slot:anchor`);return f(o,l),h(()=>{u(n,o,l)}),o}),K=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按 ant-design Countdown 风格拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],q=()=>{let{counter:i,timerRef:s,precisionTimerRef:l,demoNow:d,precisionNow:S,comboTarget:E,comboTotalSeconds:D,comboHours:O,comboMinutes:k,comboSeconds:A,basicTarget:j,millisecondTarget:M,dayLevelTarget:N,callbackTarget:P,callbackStatus:F,callbackRemaining:I,syncComboCountdown:L,stopTimer:R,startTimer:z,startPrecisionTimer:B,tabBasic:q,tabLarge2:J,tabClock:Y,tabClockColon:X,tabLabels:Z,tabLabelsUnder:Q,tabInBoxes:$,tabArrayInternal:ee,tabTarget:te,tabMillisecond:ne,tabDayLevel:re,tabCallbacks:ie,countdownItems:ae,restartTargetDemo:oe,restartMillisecondDemo:se,restartDayLevelDemo:ce,restartCallbackDemo:le,targetCountdownItems:ue,millisecondCountdownItems:de,dayLevelCountdownItems:fe}=x(`useSetup:0:0`,()=>b(()=>{let t=x(`ref:1:0`,()=>g(59)),n=x(`useRef:1:1`,()=>p(null)),r=x(`useRef:1:2`,()=>p(null)),i=x(`ref:1:3`,()=>g(Date.now())),a=x(`ref:1:4`,()=>g(Date.now())),o=x(`ref:1:5`,()=>g(Date.now()+600*60*1e3+1440*1e3+59*1e3)),s=x(`ref:1:6`,()=>g(Math.max(Math.floor((o.value-Date.now())/1e3),0))),c=x(`ref:1:7`,()=>g(Math.floor(s.value/3600))),l=x(`ref:1:8`,()=>g(Math.floor(s.value%3600/60))),u=x(`ref:1:9`,()=>g(s.value%60)),d=x(`ref:1:10`,()=>g(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),f=x(`ref:1:11`,()=>g(Date.now()+10*1e3)),h=x(`ref:1:12`,()=>g(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),v=x(`ref:1:13`,()=>g(Date.now()+10*1e3)),y=x(`ref:1:14`,()=>g(`计时中`)),b=x(`ref:1:15`,()=>g(1e4)),S=()=>{let e=Math.max(Math.floor((o.value-Date.now())/1e3),0);s.value=e,c.value=Math.floor(e/3600),l.value=Math.floor(e%3600/60),u.value=e%60},C=()=>{n.current!=null&&(clearInterval(n.current),n.current=null),r.current!=null&&(clearInterval(r.current),r.current=null)},w=()=>{n.current??=(S(),i.value=Date.now(),setInterval(()=>{t.value=t.value>0?t.value-1:59,i.value=Date.now(),S()},1e3))},T=()=>{r.current??=(a.value=Date.now(),setInterval(()=>{a.value=Date.now()},1e3/30))};return m(()=>{w(),T()}),_(C),{counter:t,timerRef:n,precisionTimerRef:r,demoNow:i,precisionNow:a,comboTarget:o,comboTotalSeconds:s,comboHours:c,comboMinutes:l,comboSeconds:u,basicTarget:d,millisecondTarget:f,dayLevelTarget:h,callbackTarget:v,callbackStatus:y,callbackRemaining:b,syncComboCountdown:S,stopTimer:C,startTimer:w,startPrecisionTimer:T,tabBasic:x(`ref:1:16`,()=>g(`preview`)),tabLarge2:x(`ref:1:17`,()=>g(`preview`)),tabClock:x(`ref:1:18`,()=>g(`preview`)),tabClockColon:x(`ref:1:19`,()=>g(`preview`)),tabLabels:x(`ref:1:20`,()=>g(`preview`)),tabLabelsUnder:x(`ref:1:21`,()=>g(`preview`)),tabInBoxes:x(`ref:1:22`,()=>g(`preview`)),tabArrayInternal:x(`ref:1:23`,()=>g(`preview`)),tabTarget:x(`ref:1:24`,()=>g(`preview`)),tabMillisecond:x(`ref:1:25`,()=>g(`preview`)),tabDayLevel:x(`ref:1:26`,()=>g(`preview`)),tabCallbacks:x(`ref:1:27`,()=>g(`preview`)),countdownItems:x(`computed:1:28`,()=>e(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:t.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{d.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59,i.value=Date.now()},restartMillisecondDemo:()=>{f.value=Date.now()+10*1e3,a.value=Date.now()},restartDayLevelDemo:()=>{h.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3,i.value=Date.now()},restartCallbackDemo:()=>{y.value=`计时中`,b.value=1e4,v.value=Date.now()+10*1e3},targetCountdownItems:x(`computed:1:29`,()=>e(()=>{let e=H(d.value-i.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2}]})),millisecondCountdownItems:x(`computed:1:30`,()=>e(()=>{let e=H(f.value-a.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2},{content:`:`},{value:e.milliseconds,digits:3}]})),dayLevelCountdownItems:x(`computed:1:31`,()=>e(()=>{let e=H(h.value-i.value);return[{value:e.days},{content:` days `},{value:e.hours,digits:2},{content:` hours `},{value:e.minutes,digits:2},{content:` minutes `},{value:e.seconds,digits:2},{content:` seconds`}]}))}}));return y(()=>{let e=o(),s=a(`rue:component:anchor`);return f(e,s),u(v(T,{children:y(()=>{let e=o(),s=t(`div`);f(e,s),c(s,`max-w-none prose prose-sm md:prose-base`);let l=t(`h1`);f(s,l),f(l,r(`Countdown 倒计时`));let d=t(`p`);f(s,d),c(d,`text-sm mt-3 mb-3`),f(d,r("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let p=t(`div`);f(s,p),c(p,`text-sm`);let m=t(`a`);f(p,m),n(m,`href`,`https://daisyui.com/components/countdown/`),n(m,`target`,`_blank`),f(m,r(`查看 Countdown 静态样式`));let g=a(`rue:component:anchor`);f(s,g),h(()=>{u(v(U,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:te,preview:()=>C(`div`,{className:`space-y-4`,children:[w(V,{className:`font-mono text-4xl`,items:ue.get()}),w(`button`,{className:`btn btn-sm btn-outline`,onClick:oe,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`}),s,g)});let _=a(`rue:component:anchor`);f(s,_),h(()=>{u(v(U,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:ne,preview:()=>C(`div`,{className:`space-y-4`,children:[w(V,{className:`font-mono text-3xl`,items:de.get()}),w(`button`,{className:`btn btn-sm btn-outline`,onClick:se,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
/>`}),s,_)});let y=a(`rue:component:anchor`);f(s,y),h(()=>{u(v(U,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:re,preview:()=>C(`div`,{className:`space-y-4`,children:[w(V,{className:`font-mono text-2xl`,items:fe.get()}),w(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`}),s,y)});let b=a(`rue:component:anchor`);f(s,b),h(()=>{u(v(U,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:ie,preview:()=>C(`div`,{className:`space-y-4`,children:[w(V,{className:`font-mono text-3xl`,value:P.value,format:`s.SSS`,onChange:e=>{I.value=Math.max(Math.round(e??0),0)},onFinish:()=>{F.value=`已完成`}}),C(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,I.value,` ms`]}),C(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,F.value]}),w(`button`,{className:`btn btn-sm btn-outline`,onClick:le,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`}),s,b)});let x=t(`h2`);f(s,x),f(x,r(`组合方式`));let S=t(`p`);f(s,S),c(S,`text-sm`),f(S,r("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let T=a(`rue:component:anchor`);f(s,T),h(()=>{u(v(U,{title:`Countdown`,tab:q,preview:()=>w(V,{children:w(V.Value,{value:D.value,ariaLabel:`${D.value} seconds remaining`},D.value)},D.value),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`}),s,T)});let E=a(`rue:component:anchor`);f(s,E),h(()=>{u(v(U,{title:`Large Text With 2 Digits`,tab:J,preview:()=>w(V,{className:`font-mono text-6xl`,children:w(V.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds remaining`},A.value)},A.value),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`}),s,E)});let j=a(`rue:component:anchor`);f(s,j),h(()=>{u(v(U,{title:`Clock Countdown`,tab:Y,preview:()=>C(V,{className:`font-mono text-2xl`,children:[w(V.Value,{value:O.value,ariaLabel:`${O.value} hours`},`h:${O.value}`),`h`,w(V.Value,{value:k.value,digits:2,ariaLabel:`${k.value} minutes`},`m:${k.value}`),`m`,w(V.Value,{value:A.value,digits:2,ariaLabel:`${A.value} seconds`},`s:${A.value}`),`s`]},`${O.value}:${k.value}:${A.value}`),code:`const parts = computed(() => {
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
</Countdown>`}),s,j)});let M=a(`rue:component:anchor`);f(s,M),h(()=>{u(v(U,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:ee,preview:()=>w(V,{className:`font-mono text-2xl`,items:ae.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`}),s,M)});let N=a(`rue:component:anchor`);f(s,N),h(()=>{u(v(U,{title:`Clock Countdown With Colons`,tab:X,preview:()=>C(V,{className:`font-mono text-2xl`,children:[w(V.Value,{value:10,ariaLabel:`10`}),`:`,w(V.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,w(V.Value,{value:i.value,digits:2,ariaLabel:String(i.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`}),s,N)});let L=a(`rue:component:anchor`);f(s,L),h(()=>{u(v(U,{title:`Large Text With Labels`,tab:Z,preview:()=>C(`div`,{className:`flex gap-5`,children:[w(G,{label:`days`,countdownClassName:`font-mono text-4xl`,children:w(V.Value,{value:15,ariaLabel:`15`})}),w(G,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:w(V.Value,{value:10,ariaLabel:`10`})}),w(G,{label:`min`,countdownClassName:`font-mono text-4xl`,children:w(V.Value,{value:24,ariaLabel:`24`})}),w(G,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:w(V.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="flex gap-5">
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
</div>`}),s,L)});let R=a(`rue:component:anchor`);f(s,R),h(()=>{u(v(U,{title:`Large Text With Labels Under`,tab:Q,preview:()=>C(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[w(G,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:w(V.Value,{value:15,ariaLabel:`15`})}),w(G,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:w(V.Value,{value:10,ariaLabel:`10`})}),w(G,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:w(V.Value,{value:24,ariaLabel:`24`})}),w(G,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:w(V.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`}),s,R)});let z=a(`rue:component:anchor`);f(s,z),h(()=>{u(v(U,{title:`In Boxes`,tab:$,preview:()=>C(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[w(G,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:w(V.Value,{value:15,ariaLabel:`15`})}),w(G,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:w(V.Value,{value:10,ariaLabel:`10`})}),w(G,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:w(V.Value,{value:24,ariaLabel:`24`})}),w(G,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:w(V.Value,{value:i.value,ariaLabel:String(i.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`}),s,z)});let B=t(`h2`);f(s,B),f(B,r(`API`));let H=a(`rue:component:anchor`);return f(s,H),h(()=>{u(v(W,{rows:K}),s,H)}),e})}),e,s),e})};export{q as default};
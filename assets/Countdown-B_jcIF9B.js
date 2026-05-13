import{F as e,G as t,I as n,L as r,M as i,P as a,S as o,U as s,_t as c,at as l,bt as u,c as d,gt as f,lt as p,o as m,pt as h,s as g,t as _,u as v,yt as y}from"./vapor-runtime-D3a-68js.js";import{a as b,n as x}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as S,t as C}from"./src-BfQKH6_d.js";import{n as w}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as T}from"./Code-2C2psoH3.js";import{t as E}from"./tabs-BgQmsOey.js";var D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},N=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},P=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},F=(e,t,n)=>{let r=N(t),i=P(e,r);return r.flatMap(e=>{if(e.type===`literal`)return e.content?[{content:e.content}]:[];let t=i[e.unit]??0;return[{value:t,digits:e.digits>1?e.digits:void 0,ariaLive:n,ariaLabel:String(t)}]})},I=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,L=e=>e.map((e,t)=>{if(`value`in e){let{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s}=e;return C(z,{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s},`${t}:${n}:${r??``}:${o??``}`)}return e.content}),R=({className:e,children:t,items:n,value:r,format:i=D,interval:a,ariaLive:s,onChange:c,onFinish:l})=>{let u=p(0),d=f(null),m=f(!1),h=()=>{d.current!=null&&(clearInterval(d.current),d.current=null)},g=()=>{let e=M(r);if(e==null)return u.value=0,c&&c(void 0),h(),!1;let t=Math.max(e-Date.now(),0);return u.value=t,c&&c(t),t<=0?(h(),m.current||(m.current=!0,l&&l()),!1):(m.current=!1,!0)},_=()=>{h(),r!=null&&g()&&(d.current=setInterval(g,I(i,a)))};y(()=>`${M(r)??`invalid`}|${i}|${a??``}`,()=>{m.current=!1,_()},{immediate:!0}),o(h);let v=j(`countdown`,e),b=!!(n&&n.length),x=!b&&r!=null,S=s??(i.includes(`S`)?`off`:`polite`);return b?C(`span`,{className:v,children:L(n)}):x?C(`span`,{className:v,children:L(F(u.value,i,S))}):C(`span`,{className:v,children:t})},z=({value:e,digits:t,className:n,ariaLive:r=`polite`,ariaLabel:i,children:a})=>C(`span`,{ref:n=>{n&&(n.style.setProperty(`--value`,String(e)),t==null?n.style.removeProperty(`--digits`):n.style.setProperty(`--digits`,String(t)))},"aria-live":r,"aria-label":i??String(e),"data-countdown-value":String(e),"data-countdown-digits":t==null?void 0:String(t),className:n?.trim(),children:a??String(e)}),B=Object.assign(R,{Value:z}),V=e=>{let t=Math.max(e,0),n=Math.floor(t/1e3);return{days:Math.floor(n/(1440*60)),hours:Math.floor(n%(1440*60)/3600),minutes:Math.floor(n%3600/60),seconds:n%60,milliseconds:t%1e3}},H=o=>v(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=n(`div`);i(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=n(`div`);i(c,l);let f=n(`h2`);i(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(f,r(`# `));let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=o.title;h(()=>d(e,f,p))});let m=a(`rue:slot:anchor`);i(l,m),u(()=>{let r=o.summary?v(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let c=a(`rue:slot:anchor`);return i(s,c),u(()=>{let e=o.summary;h(()=>d(e,s,c))}),r}):``;h(()=>d(r,l,m))});let g=a(`rue:component:anchor`);i(s,g),u(()=>{let e=_(E,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});h(()=>d(e,s,g))});let y=a(`rue:slot:anchor`);return i(s,y),u(()=>{let t=o.tab.value===`preview`?o.preview():v(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=_(T,{className:`mt-2`,lang:`tsx`,code:o.code});h(()=>d(e,t,n))}),t});h(()=>d(t,s,y))}),s}),ee=o=>v(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let m=n(`th`);i(p,m),i(m,r(`属性`));let g=n(`th`);i(p,g),i(g,r(`说明`));let _=n(`th`);i(p,_),i(_,r(`类型`));let y=n(`th`);i(p,y),i(y,r(`默认值`));let b=n(`tbody`);i(l,b);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(b,S),i(b,C);let w=new Map;return u(()=>{w=x({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(v(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;h(()=>d(e,l,f))});let p=n(`td`);i(o,p);let m=a(`rue:slot:anchor`);i(p,m),u(()=>{let e=t.description;h(()=>d(e,p,m))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;h(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;h(()=>d(e,b,x))}),r}),r,o)}})}),c}),U=e=>v(()=>{let r=n(`div`);u(()=>{t(r,String(e.className))});let o=a(`rue:component:anchor`);i(r,o),u(()=>{let t=_(B,{className:e.countdownClassName,children:e.children});h(()=>d(t,r,o))});let s=a(`rue:slot:anchor`);return i(r,s),u(()=>{let t=e.label;h(()=>d(t,r,s))}),r}),W=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],G=()=>{let{counter:o,timerRef:y,precisionTimerRef:x,demoNow:T,precisionNow:E,comboTarget:D,comboTotalSeconds:O,comboHours:k,comboMinutes:A,comboSeconds:j,basicTarget:M,millisecondTarget:N,dayLevelTarget:P,callbackTarget:F,callbackStatus:I,callbackRemaining:L,syncComboCountdown:R,stopTimer:z,startTimer:G,startPrecisionTimer:K,tabBasic:q,tabLarge2:J,tabClock:Y,tabClockColon:X,tabLabels:Z,tabLabelsUnder:Q,tabInBoxes:te,tabArrayInternal:ne,tabTarget:re,tabMillisecond:ie,tabDayLevel:ae,tabCallbacks:oe,countdownItems:se,restartTargetDemo:ce,restartMillisecondDemo:le,restartDayLevelDemo:$,restartCallbackDemo:ue,targetCountdownItems:de,millisecondCountdownItems:fe,dayLevelCountdownItems:pe}=b(`useSetup:0:0`,()=>c(()=>{let e=b(`ref:1:0`,()=>p(59)),t=b(`useRef:1:1`,()=>f(null)),n=b(`useRef:1:2`,()=>f(null)),r=b(`ref:1:3`,()=>p(Date.now())),i=b(`ref:1:4`,()=>p(Date.now())),a=b(`ref:1:5`,()=>p(Date.now()+600*60*1e3+1440*1e3+59*1e3)),o=b(`ref:1:6`,()=>p(Math.max(Math.floor((a.value-Date.now())/1e3),0))),s=b(`ref:1:7`,()=>p(Math.floor(o.value/3600))),c=b(`ref:1:8`,()=>p(Math.floor(o.value%3600/60))),u=b(`ref:1:9`,()=>p(o.value%60)),d=b(`ref:1:10`,()=>p(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),h=b(`ref:1:11`,()=>p(Date.now()+10*1e3)),_=b(`ref:1:12`,()=>p(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),v=b(`ref:1:13`,()=>p(Date.now()+10*1e3)),y=b(`ref:1:14`,()=>p(`计时中`)),x=b(`ref:1:15`,()=>p(1e4)),S=()=>{let e=Math.max(Math.floor((a.value-Date.now())/1e3),0);o.value=e,s.value=Math.floor(e/3600),c.value=Math.floor(e%3600/60),u.value=e%60},C=()=>{t.current!=null&&(clearInterval(t.current),t.current=null),n.current!=null&&(clearInterval(n.current),n.current=null)},w=()=>{t.current??=(S(),r.value=Date.now(),setInterval(()=>{e.value=e.value>0?e.value-1:59,r.value=Date.now(),S()},1e3))},T=()=>{n.current??=(i.value=Date.now(),setInterval(()=>{i.value=Date.now()},1e3/30))};return m(()=>{w(),T()}),g(C),{counter:e,timerRef:t,precisionTimerRef:n,demoNow:r,precisionNow:i,comboTarget:a,comboTotalSeconds:o,comboHours:s,comboMinutes:c,comboSeconds:u,basicTarget:d,millisecondTarget:h,dayLevelTarget:_,callbackTarget:v,callbackStatus:y,callbackRemaining:x,syncComboCountdown:S,stopTimer:C,startTimer:w,startPrecisionTimer:T,tabBasic:b(`ref:1:16`,()=>p(`preview`)),tabLarge2:b(`ref:1:17`,()=>p(`preview`)),tabClock:b(`ref:1:18`,()=>p(`preview`)),tabClockColon:b(`ref:1:19`,()=>p(`preview`)),tabLabels:b(`ref:1:20`,()=>p(`preview`)),tabLabelsUnder:b(`ref:1:21`,()=>p(`preview`)),tabInBoxes:b(`ref:1:22`,()=>p(`preview`)),tabArrayInternal:b(`ref:1:23`,()=>p(`preview`)),tabTarget:b(`ref:1:24`,()=>p(`preview`)),tabMillisecond:b(`ref:1:25`,()=>p(`preview`)),tabDayLevel:b(`ref:1:26`,()=>p(`preview`)),tabCallbacks:b(`ref:1:27`,()=>p(`preview`)),countdownItems:b(`computed:1:28`,()=>l(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{d.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59,r.value=Date.now()},restartMillisecondDemo:()=>{h.value=Date.now()+10*1e3,i.value=Date.now()},restartDayLevelDemo:()=>{_.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3,r.value=Date.now()},restartCallbackDemo:()=>{y.value=`计时中`,x.value=1e4,v.value=Date.now()+10*1e3},targetCountdownItems:b(`computed:1:29`,()=>l(()=>{let e=V(d.value-r.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2}]})),millisecondCountdownItems:b(`computed:1:30`,()=>l(()=>{let e=V(h.value-i.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2},{content:`:`},{value:e.milliseconds,digits:3}]})),dayLevelCountdownItems:b(`computed:1:31`,()=>l(()=>{let e=V(_.value-r.value);return[{value:e.days},{content:` days `},{value:e.hours,digits:2},{content:` hours `},{value:e.minutes,digits:2},{content:` minutes `},{value:e.seconds,digits:2},{content:` seconds`}]}))}}));return v(()=>{let c=e(),l=a(`rue:component:anchor`);return i(c,l),d(_(w,{children:v(()=>{let c=e(),l=n(`div`);i(c,l),t(l,`max-w-none prose prose-sm md:prose-base`);let f=n(`h1`);i(l,f),i(f,r(`Countdown 倒计时`));let p=n(`p`);i(l,p),t(p,`text-sm mt-3 mb-3`),i(p,r("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let m=n(`div`);i(l,m),t(m,`text-sm`);let g=n(`a`);i(m,g),s(g,`href`,`https://daisyui.com/components/countdown/`),s(g,`target`,`_blank`),i(g,r(`查看 Countdown 静态样式`));let v=a(`rue:component:anchor`);i(l,v),u(()=>{let e=_(H,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:re,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-4xl`,items:de.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});h(()=>d(e,l,v))});let y=a(`rue:component:anchor`);i(l,y),u(()=>{let e=_(H,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:ie,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,items:fe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:le,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
/>`});h(()=>d(e,l,y))});let b=a(`rue:component:anchor`);i(l,b),u(()=>{let e=_(H,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ae,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-2xl`,items:pe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:$,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});h(()=>d(e,l,b))});let x=a(`rue:component:anchor`);i(l,x),u(()=>{let e=_(H,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:oe,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,value:F.value,format:`s.SSS`,onChange:e=>{L.value=Math.max(Math.round(e??0),0)},onFinish:()=>{I.value=`已完成`}}),S(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,L.value,` ms`]}),S(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,I.value]}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ue,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});h(()=>d(e,l,x))});let w=n(`h2`);i(l,w),i(w,r(`组合方式`));let T=n(`p`);i(l,T),t(T,`text-sm`),i(T,r("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let E=a(`rue:component:anchor`);i(l,E),u(()=>{let e=_(H,{title:`Countdown`,tab:q,preview:()=>C(B,{children:C(B.Value,{value:O.value,ariaLabel:`${O.value} seconds remaining`},O.value)},O.value),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});h(()=>d(e,l,E))});let D=a(`rue:component:anchor`);i(l,D),u(()=>{let e=_(H,{title:`Large Text With 2 Digits`,tab:J,preview:()=>C(B,{className:`font-mono text-6xl`,children:C(B.Value,{value:j.value,digits:2,ariaLabel:`${j.value} seconds remaining`},j.value)},j.value),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});h(()=>d(e,l,D))});let M=a(`rue:component:anchor`);i(l,M),u(()=>{let e=_(H,{title:`Clock Countdown`,tab:Y,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:k.value,ariaLabel:`${k.value} hours`},`h:${k.value}`),`h`,C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} minutes`},`m:${A.value}`),`m`,C(B.Value,{value:j.value,digits:2,ariaLabel:`${j.value} seconds`},`s:${j.value}`),`s`]},`${k.value}:${A.value}:${j.value}`),code:`const parts = computed(() => {
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
</Countdown>`});h(()=>d(e,l,M))});let N=a(`rue:component:anchor`);i(l,N),u(()=>{let e=_(H,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:ne,preview:()=>C(B,{className:`font-mono text-2xl`,items:se.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});h(()=>d(e,l,N))});let P=a(`rue:component:anchor`);i(l,P),u(()=>{let e=_(H,{title:`Clock Countdown With Colons`,tab:X,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:10,ariaLabel:`10`}),`:`,C(B.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,C(B.Value,{value:o.value,digits:2,ariaLabel:String(o.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});h(()=>d(e,l,P))});let R=a(`rue:component:anchor`);i(l,R),u(()=>{let e=_(H,{title:`Large Text With Labels`,tab:Z,preview:()=>S(`div`,{className:`flex gap-5`,children:[C(U,{label:`days`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{label:`min`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:o.value,ariaLabel:String(o.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});h(()=>d(e,l,R))});let z=a(`rue:component:anchor`);i(l,z),u(()=>{let e=_(H,{title:`Large Text With Labels Under`,tab:Q,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:o.value,ariaLabel:String(o.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});h(()=>d(e,l,z))});let V=a(`rue:component:anchor`);i(l,V),u(()=>{let e=_(H,{title:`In Boxes`,tab:te,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:o.value,ariaLabel:String(o.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});h(()=>d(e,l,V))});let G=n(`h2`);i(l,G),i(G,r(`API`));let K=a(`rue:component:anchor`);return i(l,K),u(()=>{let e=_(ee,{rows:W});h(()=>d(e,l,K))}),c})}),c,l),c})};export{G as default};
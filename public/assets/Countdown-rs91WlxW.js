import{C as e,F as t,I as n,K as r,L as i,N as a,R as o,W as s,_t as c,d as l,dt as u,ht as d,l as f,mt as p,o as m,rt as h,s as g,st as _,t as v,vt as y}from"./vapor-runtime-BuwLbCGk.js";import{a as b,n as x}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as S,t as C}from"./src-BQwLQD8R.js";import{n as w}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as T}from"./Code-DQxnq0in.js";import{t as E}from"./tabs-DqfJzZfa.js";var D=`HH:mm:ss`,O=1e3/30,k=1e3,A=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],j=(e,t)=>t?`${e} ${t}`:e,M=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},N=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},P=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return A.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},F=(e,t,n)=>{let r=N(t),i=P(e,r);return r.flatMap(e=>{if(e.type===`literal`)return e.content?[{content:e.content}]:[];let t=i[e.unit]??0;return[{value:t,digits:e.digits>1?e.digits:void 0,ariaLive:n,ariaLabel:String(t)}]})},I=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?O:k,L=e=>e.map((e,t)=>{if(`value`in e){let{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s}=e;return C(z,{value:n,digits:r,className:i,ariaLive:a,ariaLabel:o,children:s},`${t}:${n}:${r??``}:${o??``}`)}return e.content}),R=({className:t,children:n,items:r,value:i,format:a=D,interval:o,ariaLive:s,onChange:l,onFinish:u})=>{let d=_(0),f=p(null),m=p(!1),h=()=>{f.current!=null&&(clearInterval(f.current),f.current=null)},g=()=>{let e=M(i);if(e==null)return d.value=0,l&&l(void 0),h(),!1;let t=Math.max(e-Date.now(),0);return d.value=t,l&&l(t),t<=0?(h(),m.current||(m.current=!0,u&&u()),!1):(m.current=!1,!0)},v=()=>{h(),i!=null&&g()&&(f.current=setInterval(g,I(a,o)))};c(()=>`${M(i)??`invalid`}|${a}|${o??``}`,()=>{m.current=!1,v()},{immediate:!0}),e(h);let y=j(`countdown`,t),b=!!(r&&r.length),x=!b&&i!=null,S=s??(a.includes(`S`)?`off`:`polite`);return b?C(`span`,{className:y,children:L(r)}):x?C(`span`,{className:y,children:L(F(d.value,a,S))}):C(`span`,{className:y,children:n})},z=({value:e,digits:t,className:n,ariaLive:r=`polite`,ariaLabel:i,children:a})=>C(`span`,{ref:n=>{n&&(n.style.setProperty(`--value`,String(e)),t==null?n.style.removeProperty(`--digits`):n.style.setProperty(`--digits`,String(t)))},"aria-live":r,"aria-label":i??String(e),"data-countdown-value":String(e),"data-countdown-digits":t==null?void 0:String(t),className:n?.trim(),children:a??String(e)}),B=Object.assign(R,{Value:z}),V=e=>{let t=Math.max(e,0),n=Math.floor(t/1e3);return{days:Math.floor(n/(1440*60)),hours:Math.floor(n%(1440*60)/3600),minutes:Math.floor(n%3600/60),seconds:n%60,milliseconds:t%1e3}},H=e=>l(s=>{let c=i(`div`,s);r(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=i(`div`,c);a(c,d),r(d,`flex flex-wrap items-start justify-between gap-3`);let p=i(`div`,d);a(d,p);let m=i(`h2`,p);a(p,m),r(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(m,o(`# `));let h=t(`rue:slot:anchor`);a(m,h),y(()=>{let t=e.title;u(()=>f(t,m,h))});let g=t(`rue:slot:anchor`);a(p,g),y(()=>{let o=e.summary?l(()=>{let o=n(),s=i(`p`,o);a(o,s),r(s,`m-0 text-sm opacity-70`);let c=t(`rue:slot:anchor`);return a(s,c),y(()=>{let t=e.summary;u(()=>f(t,s,c))}),o}):``;u(()=>f(o,p,g))});let _=t(`rue:component:anchor`);a(c,_),y(()=>{let t=v(E,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});u(()=>f(t,c,_))});let b=t(`rue:slot:anchor`);return a(c,b),y(()=>{let r=e.tab.value===`preview`?e.preview():l(()=>{let r=n(),i=t(`rue:component:anchor`);return a(r,i),y(()=>{let t=v(T,{className:`mt-2`,lang:`tsx`,code:e.code});u(()=>f(t,r,i))}),r});u(()=>f(r,c,b))}),c}),ee=e=>l(c=>{let d=i(`div`,c);r(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=i(`table`,d);a(d,p),r(p,`table table-zebra`);let m=i(`thead`,p);a(p,m);let h=i(`tr`,m);a(m,h);let g=i(`th`,h);a(h,g),a(g,o(`属性`));let _=i(`th`,h);a(h,_),a(_,o(`说明`));let v=i(`th`,h);a(h,v),a(v,o(`类型`));let b=i(`th`,h);a(h,b),a(b,o(`默认值`));let S=i(`tbody`,p);a(p,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return y(()=>{T=x({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,o,c,d)=>{f(l(()=>{let r=n(),o=i(`tr`,r);a(r,o),y(()=>{s(o,`key`,String(e.prop))});let c=i(`td`,o);a(o,c);let l=i(`code`,c);a(c,l);let d=t(`rue:slot:anchor`);a(l,d),y(()=>{let t=e.prop;u(()=>f(t,l,d))});let p=i(`td`,o);a(o,p);let m=t(`rue:slot:anchor`);a(p,m),y(()=>{let t=e.description;u(()=>f(t,p,m))});let h=i(`td`,o);a(o,h);let g=i(`code`,h);a(h,g);let _=t(`rue:slot:anchor`);a(g,_),y(()=>{let t=e.type;u(()=>f(t,g,_))});let v=i(`td`,o);a(o,v);let b=i(`code`,v);a(v,b);let x=t(`rue:slot:anchor`);return a(b,x),y(()=>{let t=e.defaultValue;u(()=>f(t,b,x))}),r}),r,o)}})}),d}),U=e=>l(n=>{let o=i(`div`,n);y(()=>{r(o,String(e.className))});let s=t(`rue:component:anchor`);a(o,s),y(()=>{let t=v(B,{className:e.countdownClassName,children:e.children});u(()=>f(t,o,s))});let c=t(`rue:slot:anchor`);return a(o,c),y(()=>{let t=e.label;u(()=>f(t,o,c))}),o}),W=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],G=()=>{let{counter:e,timerRef:c,precisionTimerRef:x,demoNow:T,precisionNow:E,comboTarget:D,comboTotalSeconds:O,comboHours:k,comboMinutes:A,comboSeconds:j,basicTarget:M,millisecondTarget:N,dayLevelTarget:P,callbackTarget:F,callbackStatus:I,callbackRemaining:L,syncComboCountdown:R,stopTimer:z,startTimer:G,startPrecisionTimer:K,tabBasic:q,tabLarge2:J,tabClock:Y,tabClockColon:X,tabLabels:Z,tabLabelsUnder:Q,tabInBoxes:te,tabArrayInternal:ne,tabTarget:re,tabMillisecond:ie,tabDayLevel:ae,tabCallbacks:oe,countdownItems:se,restartTargetDemo:ce,restartMillisecondDemo:le,restartDayLevelDemo:$,restartCallbackDemo:ue,targetCountdownItems:de,millisecondCountdownItems:fe,dayLevelCountdownItems:pe}=b(`useSetup:0:0`,()=>d(()=>{let e=b(`ref:1:0`,()=>_(59)),t=b(`useRef:1:1`,()=>p(null)),n=b(`useRef:1:2`,()=>p(null)),r=b(`ref:1:3`,()=>_(Date.now())),i=b(`ref:1:4`,()=>_(Date.now())),a=b(`ref:1:5`,()=>_(Date.now()+600*60*1e3+1440*1e3+59*1e3)),o=b(`ref:1:6`,()=>_(Math.max(Math.floor((a.value-Date.now())/1e3),0))),s=b(`ref:1:7`,()=>_(Math.floor(o.value/3600))),c=b(`ref:1:8`,()=>_(Math.floor(o.value%3600/60))),l=b(`ref:1:9`,()=>_(o.value%60)),u=b(`ref:1:10`,()=>_(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),d=b(`ref:1:11`,()=>_(Date.now()+10*1e3)),f=b(`ref:1:12`,()=>_(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),v=b(`ref:1:13`,()=>_(Date.now()+10*1e3)),y=b(`ref:1:14`,()=>_(`计时中`)),x=b(`ref:1:15`,()=>_(1e4)),S=()=>{let e=Math.max(Math.floor((a.value-Date.now())/1e3),0);o.value=e,s.value=Math.floor(e/3600),c.value=Math.floor(e%3600/60),l.value=e%60},C=()=>{t.current!=null&&(clearInterval(t.current),t.current=null),n.current!=null&&(clearInterval(n.current),n.current=null)},w=()=>{t.current??=(S(),r.value=Date.now(),setInterval(()=>{e.value=e.value>0?e.value-1:59,r.value=Date.now(),S()},1e3))},T=()=>{n.current??=(i.value=Date.now(),setInterval(()=>{i.value=Date.now()},1e3/30))};return m(()=>{w(),T()}),g(C),{counter:e,timerRef:t,precisionTimerRef:n,demoNow:r,precisionNow:i,comboTarget:a,comboTotalSeconds:o,comboHours:s,comboMinutes:c,comboSeconds:l,basicTarget:u,millisecondTarget:d,dayLevelTarget:f,callbackTarget:v,callbackStatus:y,callbackRemaining:x,syncComboCountdown:S,stopTimer:C,startTimer:w,startPrecisionTimer:T,tabBasic:b(`ref:1:16`,()=>_(`preview`)),tabLarge2:b(`ref:1:17`,()=>_(`preview`)),tabClock:b(`ref:1:18`,()=>_(`preview`)),tabClockColon:b(`ref:1:19`,()=>_(`preview`)),tabLabels:b(`ref:1:20`,()=>_(`preview`)),tabLabelsUnder:b(`ref:1:21`,()=>_(`preview`)),tabInBoxes:b(`ref:1:22`,()=>_(`preview`)),tabArrayInternal:b(`ref:1:23`,()=>_(`preview`)),tabTarget:b(`ref:1:24`,()=>_(`preview`)),tabMillisecond:b(`ref:1:25`,()=>_(`preview`)),tabDayLevel:b(`ref:1:26`,()=>_(`preview`)),tabCallbacks:b(`ref:1:27`,()=>_(`preview`)),countdownItems:b(`computed:1:28`,()=>h(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{u.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59,r.value=Date.now()},restartMillisecondDemo:()=>{d.value=Date.now()+10*1e3,i.value=Date.now()},restartDayLevelDemo:()=>{f.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3,r.value=Date.now()},restartCallbackDemo:()=>{y.value=`计时中`,x.value=1e4,v.value=Date.now()+10*1e3},targetCountdownItems:b(`computed:1:29`,()=>h(()=>{let e=V(u.value-r.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2}]})),millisecondCountdownItems:b(`computed:1:30`,()=>h(()=>{let e=V(d.value-i.value);return[{value:e.hours,digits:2},{content:`:`},{value:e.minutes,digits:2},{content:`:`},{value:e.seconds,digits:2},{content:`:`},{value:e.milliseconds,digits:3}]})),dayLevelCountdownItems:b(`computed:1:31`,()=>h(()=>{let e=V(f.value-r.value);return[{value:e.days},{content:` days `},{value:e.hours,digits:2},{content:` hours `},{value:e.minutes,digits:2},{content:` minutes `},{value:e.seconds,digits:2},{content:` seconds`}]}))}}));return l(c=>{let d=n(),p=t(`rue:component:anchor`);return a(d,p),f(v(w,{children:l(()=>{let c=n(),l=i(`div`,c);a(c,l),r(l,`max-w-none prose prose-sm md:prose-base`);let d=i(`h1`,l);a(l,d),a(d,o(`Countdown 倒计时`));let p=i(`p`,l);a(l,p),r(p,`text-sm mt-3 mb-3`),a(p,o("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let m=i(`div`,l);a(l,m),r(m,`text-sm`);let h=i(`a`,m);a(m,h),s(h,`href`,`https://daisyui.com/components/countdown/`),s(h,`target`,`_blank`),a(h,o(`查看 Countdown 静态样式`));let g=t(`rue:component:anchor`);a(l,g),y(()=>{let e=v(H,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:re,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-4xl`,items:de.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});u(()=>f(e,l,g))});let _=t(`rue:component:anchor`);a(l,_),y(()=>{let e=v(H,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:ie,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,items:fe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:le,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
/>`});u(()=>f(e,l,_))});let b=t(`rue:component:anchor`);a(l,b),y(()=>{let e=v(H,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ae,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-2xl`,items:pe.get()}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:$,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});u(()=>f(e,l,b))});let x=t(`rue:component:anchor`);a(l,x),y(()=>{let e=v(H,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:oe,preview:()=>S(`div`,{className:`space-y-4`,children:[C(B,{className:`font-mono text-3xl`,value:F.value,format:`s.SSS`,onChange:e=>{L.value=Math.max(Math.round(e??0),0)},onFinish:()=>{I.value=`已完成`}}),S(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,L.value,` ms`]}),S(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,I.value]}),C(`button`,{className:`btn btn-sm btn-outline`,onClick:ue,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});u(()=>f(e,l,x))});let w=i(`h2`,l);a(l,w),a(w,o(`组合方式`));let T=i(`p`,l);a(l,T),r(T,`text-sm`),a(T,o("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let E=t(`rue:component:anchor`);a(l,E),y(()=>{let e=v(H,{title:`Countdown`,tab:q,preview:()=>C(B,{children:C(B.Value,{value:O.value,ariaLabel:`${O.value} seconds remaining`},O.value)},O.value),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});u(()=>f(e,l,E))});let D=t(`rue:component:anchor`);a(l,D),y(()=>{let e=v(H,{title:`Large Text With 2 Digits`,tab:J,preview:()=>C(B,{className:`font-mono text-6xl`,children:C(B.Value,{value:j.value,digits:2,ariaLabel:`${j.value} seconds remaining`},j.value)},j.value),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});u(()=>f(e,l,D))});let M=t(`rue:component:anchor`);a(l,M),y(()=>{let e=v(H,{title:`Clock Countdown`,tab:Y,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:k.value,ariaLabel:`${k.value} hours`},`h:${k.value}`),`h`,C(B.Value,{value:A.value,digits:2,ariaLabel:`${A.value} minutes`},`m:${A.value}`),`m`,C(B.Value,{value:j.value,digits:2,ariaLabel:`${j.value} seconds`},`s:${j.value}`),`s`]},`${k.value}:${A.value}:${j.value}`),code:`const parts = computed(() => {
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
</Countdown>`});u(()=>f(e,l,M))});let N=t(`rue:component:anchor`);a(l,N),y(()=>{let e=v(H,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:ne,preview:()=>C(B,{className:`font-mono text-2xl`,items:se.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});u(()=>f(e,l,N))});let P=t(`rue:component:anchor`);a(l,P),y(()=>{let t=v(H,{title:`Clock Countdown With Colons`,tab:X,preview:()=>S(B,{className:`font-mono text-2xl`,children:[C(B.Value,{value:10,ariaLabel:`10`}),`:`,C(B.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,C(B.Value,{value:e.value,digits:2,ariaLabel:String(e.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});u(()=>f(t,l,P))});let R=t(`rue:component:anchor`);a(l,R),y(()=>{let t=v(H,{title:`Large Text With Labels`,tab:Z,preview:()=>S(`div`,{className:`flex gap-5`,children:[C(U,{label:`days`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{label:`min`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});u(()=>f(t,l,R))});let z=t(`rue:component:anchor`);a(l,z),y(()=>{let t=v(H,{title:`Large Text With Labels Under`,tab:Q,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});u(()=>f(t,l,z))});let V=t(`rue:component:anchor`);a(l,V),y(()=>{let t=v(H,{title:`In Boxes`,tab:te,preview:()=>S(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:15,ariaLabel:`15`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:10,ariaLabel:`10`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:24,ariaLabel:`24`})}),C(U,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:C(B.Value,{value:e.value,ariaLabel:String(e.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});u(()=>f(t,l,V))});let G=i(`h2`,l);a(l,G),a(G,o(`API`));let K=t(`rue:component:anchor`);return a(l,K),y(()=>{let e=v(ee,{rows:W});u(()=>f(e,l,K))}),c})}),d,p),d})};export{G as default};
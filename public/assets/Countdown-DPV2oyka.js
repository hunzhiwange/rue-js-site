import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Yt as s,Z as c,a as l,at as u,c as d,dt as f,gt as p,i as m,l as h,mt as g,qt as _,r as v,s as y,st as b,t as x}from"./vapor-runtime-iQZthBPQ.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as T,i as E}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as D}from"./Code-CZqShVUj.js";import{t as O}from"./tabs-BBuGEPV7.js";import{r as k}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var A=`HH:mm:ss`,j=1e3/30,M=1e3,N=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],P=(e,t)=>t?`${e} ${t}`:e,F=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return N.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?j:M,z=e=>`value`in e,B=(e,t)=>{let n=`--value: ${String(e)};`;return t!=null&&(n+=` --digits: ${String(t)};`),n},V=e=>typeof e==`string`?e.replace(/ /g,`\xA0`):e,H=e=>e.digits>1?e.digits:void 0,U=(e,t)=>t[e.unit]??0,W=(e,t,n,r)=>{e.style.setProperty(`--value`,String(t)),n==null?(e.style.removeProperty(`--digits`),e.removeAttribute(`data-countdown-digits`)):(e.style.setProperty(`--digits`,String(n)),e.setAttribute(`data-countdown-digits`,String(n))),e.setAttribute(`aria-live`,r),e.setAttribute(`aria-label`,String(t)),e.setAttribute(`data-countdown-value`,String(t))},G=Object.assign(e=>{let m=S(`useSetup:0:0`,()=>_(()=>{let t=S(`ref:1:0`,()=>r(0)),n=null,i=!1,a=null,o=()=>{},c=()=>{n!=null&&(clearInterval(n),n=null)},u=()=>{let n=F(e.value);if(n==null)return t.value=0,o(),e.onChange&&e.onChange(void 0),c(),!1;let r=Math.max(n-Date.now(),0);return t.value=r,o(),e.onChange&&e.onChange(r),r<=0?(c(),i||(i=!0,e.onFinish&&e.onFinish()),!1):(i=!1,!0)},d=()=>{if(c(),e.value==null){t.value=0;return}u()&&(n=setInterval(u,R(e.format===void 0?A:e.format,e.interval)))};S(`watch:1:1`,()=>s(()=>`${F(e.value)??`invalid`}|${e.format===void 0?A:e.format}|${e.interval??``}`,()=>{i=!1,d()},{immediate:!0})),l(c);let f=S(`computed:1:2`,()=>p(()=>P(`countdown`,e.className))),m=S(`computed:1:3`,()=>p(()=>!!(e.items&&e.items.length))),h=S(`computed:1:4`,()=>p(()=>!m.get()&&e.value!=null)),g=S(`computed:1:5`,()=>p(()=>I(e.format===void 0?A:e.format))),_=S(`computed:1:6`,()=>p(()=>e.ariaLive??((e.format===void 0?A:e.format).includes(`S`)?`off`:`polite`)));return o=()=>{let e=h.get(),n=g.get(),r=L(t.value,n),i=_.get();!a||!e||Array.from(a.children).forEach(e=>{let t=e,a=n[Number(t.dataset.countdownTokenIndex)];!a||a.type!==`unit`||W(t,U(a,r),H(a),i)})},{remaining:t,stopTimer:c,syncRemaining:u,startTimer:d,resolvedClassName:f,hasItems:m,usesTimerMode:h,formatTokens:g,resolvedAriaLive:_,getTimerTokenValue:e=>U(e,L(t.value,g.get())),setRootElement:e=>{a=e,o()},timer:n,finished:i,rootElement:a,syncTimerDom:o}})),{remaining:x,stopTimer:T,syncRemaining:E,startTimer:D,resolvedClassName:O,hasItems:k,usesTimerMode:j,formatTokens:M,resolvedAriaLive:N,getTimerTokenValue:G,setRootElement:K}=m,{timer:ee,finished:q,rootElement:te,syncTimerDom:J}=m;return h(r=>{let s=i(`span`,r),l=w(s,()=>K);v(()=>{l()}),o(()=>{b(s,O.get())});let p=a(`rue:slot:anchor`);return n(s,p),o(()=>{let r=k.get()?h(()=>{let r=c(),s=a(`rue:list:start`),l=a(`rue:list:end`);n(r,s),n(r,l);let p=new Map;return o(()=>{p=C({items:(e.items??[])||[],getKey:(e,t)=>t,elements:p,parent:s.parentNode,before:l,start:s,renderItem:(e,r,s,l,p)=>{d(z(e)?h(()=>{let r=c(),s=i(`span`,r);n(r,s),o(()=>{f(s,B(e.value,e.digits))}),o(()=>{u(s,`aria-live`,String(e.ariaLive??`polite`))}),o(()=>{u(s,`aria-label`,String(e.ariaLabel??String(e.value)))}),o(()=>{u(s,`data-countdown-value`,String(String(e.value)))}),o(()=>{g(s,e.digits==null?{}:{"data-countdown-digits":String(e.digits)})}),o(()=>{b(s,e.className?e.className.trim():``)});let l=a(`rue:children:anchor`);return n(s,l),o(()=>{let n=e.children;t(()=>y(n,s,l))}),r}):V(e.content),r,s,l)}})}),r}):j.get()?h(()=>{let e=c(),t=a(`rue:list:start`),r=a(`rue:list:end`);n(e,t),n(e,r);let s=new Map;return o(()=>{s=C({items:M.get()||[],getKey:(e,t)=>t,elements:s,parent:t.parentNode,before:r,start:t,renderItem:(e,t,r,a,s)=>{d(e.type===`unit`?h(()=>{let t=c(),r=i(`span`,t);return n(t,r),o(()=>{u(r,`key`,String(s))}),o(()=>{u(r,`data-countdown-token-index`,String(String(s)))}),o(()=>{f(r,B(G(e),H(e)))}),o(()=>{u(r,`aria-live`,String(N.get()))}),o(()=>{u(r,`aria-label`,String(String(G(e))))}),o(()=>{u(r,`data-countdown-value`,String(String(G(e))))}),o(()=>{g(r,H(e)==null?{}:{"data-countdown-digits":String(H(e))})}),t}):V(e.content),t,r,a)}})}),e}):e.children;t(()=>y(r,s,p))}),s})},{Value:e=>{let{resolvedClassName:r}=S(`useSetup:0:0:dup1`,()=>_(()=>({resolvedClassName:S(`computed:1:7`,()=>p(()=>e.className?e.className.trim():``))})));return h(s=>{let c=i(`span`,s);o(()=>{f(c,B(e.value,e.digits))}),o(()=>{u(c,`aria-live`,String(e.ariaLive===void 0?`polite`:e.ariaLive))}),o(()=>{u(c,`aria-label`,String(e.ariaLabel??String(e.value)))}),o(()=>{u(c,`data-countdown-value`,String(String(e.value)))}),o(()=>{g(c,e.digits==null?{}:{"data-countdown-digits":String(e.digits)})}),o(()=>{b(c,r.get())});let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let n=e.children==null?String(e.value):e.children;t(()=>y(n,c,l))}),c})}}),K=r=>h(s=>{let l=i(`div`,s);b(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),b(u,`flex flex-wrap items-start justify-between gap-3`);let d=i(`div`,u);n(u,d);let f=i(`h2`,d);n(d,f),b(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(f,e(`# `));let p=a(`rue:slot:anchor`);n(f,p),o(()=>{let e=r.title;t(()=>y(e,f,p))});let m=a(`rue:slot:anchor`);n(d,m),o(()=>{let e=r.summary?h(()=>{let e=c(),s=i(`p`,e);n(e,s),b(s,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(s,l),o(()=>{let e=r.summary;t(()=>y(e,s,l))}),e}):``;t(()=>y(e,d,m))});let g=a(`rue:component:anchor`);n(l,g),o(()=>{let e=x(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>y(e,l,g))});let _=a(`rue:slot:anchor`);return n(l,_),o(()=>{let e=r.tab.value===`preview`?r.preview():h(()=>{let e=c(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=x(D,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>y(n,e,i))}),e});t(()=>y(e,l,_))}),l}),ee=r=>h(s=>{let l=i(`div`,s);b(l,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=i(`table`,l);n(l,d),b(d,`table table-zebra`);let f=i(`thead`,d);n(d,f);let p=i(`tr`,f);n(f,p);let m=i(`th`,p);n(p,m),n(m,e(`属性`));let g=i(`th`,p);n(p,g),n(g,e(`说明`));let _=i(`th`,p);n(p,_),n(_,e(`类型`));let v=i(`th`,p);n(p,v),n(v,e(`默认值`));let x=i(`tbody`,d);n(d,x);let S=a(`rue:list:start`),w=a(`rue:list:end`);n(x,S),n(x,w);let T=new Map;return o(()=>{T=C({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,r,s,l,d)=>{y(h(()=>{let r=c(),s=i(`tr`,r);n(r,s),o(()=>{u(s,`key`,String(e.prop))});let l=i(`td`,s);n(s,l);let d=i(`code`,l);n(l,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>y(n,d,f))});let p=i(`td`,s);n(s,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>y(n,p,m))});let h=i(`td`,s);n(s,h);let g=i(`code`,h);n(h,g);let _=a(`rue:slot:anchor`);n(g,_),o(()=>{let n=e.type;t(()=>y(n,g,_))});let v=i(`td`,s);n(s,v);let b=i(`code`,v);n(v,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>y(n,b,x))}),r}),r,s)}})}),l}),q=e=>h(r=>{let s=i(`div`,r);o(()=>{b(s,e.className)});let c=a(`rue:component:anchor`);n(s,c),o(()=>{let n=x(G,{className:e.countdownClassName,children:e.children});t(()=>y(n,s,c))});let l=a(`rue:slot:anchor`);return n(s,l),o(()=>{let n=e.label;t(()=>y(n,s,l))}),s}),te=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保留字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],J=()=>{let s=S(`useSetup:0:0`,()=>_(()=>{let e=S(`ref:1:0`,()=>r(59)),t=null,n=S(`ref:1:1`,()=>r(Date.now()+600*60*1e3+1440*1e3+59*1e3)),i=S(`ref:1:2`,()=>r(Math.max(Math.floor((n.value-Date.now())/1e3),0))),a=S(`ref:1:3`,()=>r(Math.floor(i.value/3600))),o=S(`ref:1:4`,()=>r(Math.floor(i.value%3600/60))),s=S(`ref:1:5`,()=>r(i.value%60)),c=S(`ref:1:6`,()=>r(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),u=S(`ref:1:7`,()=>r(Date.now()+10*1e3)),d=S(`ref:1:8`,()=>r(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),f=S(`ref:1:9`,()=>r(Date.now()+10*1e3)),h=S(`ref:1:10`,()=>r(`计时中`)),g=S(`ref:1:11`,()=>r(1e4)),_=()=>{let e=Math.max(Math.floor((n.value-Date.now())/1e3),0);i.value=e,a.value=Math.floor(e/3600),o.value=Math.floor(e%3600/60),s.value=e%60},v=()=>{t!=null&&(clearInterval(t),t=null)},y=()=>{t??=(_(),setInterval(()=>{e.value=e.value>0?e.value-1:59,_()},1e3))};return m(()=>{y()}),l(v),{counter:e,comboTarget:n,comboTotalSeconds:i,comboHours:a,comboMinutes:o,comboSeconds:s,basicTarget:c,millisecondTarget:u,dayLevelTarget:d,callbackTarget:f,callbackStatus:h,callbackRemaining:g,syncComboCountdown:_,stopTimer:v,startTimer:y,tabBasic:S(`ref:1:12`,()=>r(`preview`)),tabLarge2:S(`ref:1:13`,()=>r(`preview`)),tabClock:S(`ref:1:14`,()=>r(`preview`)),tabClockColon:S(`ref:1:15`,()=>r(`preview`)),tabLabels:S(`ref:1:16`,()=>r(`preview`)),tabLabelsUnder:S(`ref:1:17`,()=>r(`preview`)),tabInBoxes:S(`ref:1:18`,()=>r(`preview`)),tabArrayInternal:S(`ref:1:19`,()=>r(`preview`)),tabTarget:S(`ref:1:20`,()=>r(`preview`)),tabMillisecond:S(`ref:1:21`,()=>r(`preview`)),tabDayLevel:S(`ref:1:22`,()=>r(`preview`)),tabCallbacks:S(`ref:1:23`,()=>r(`preview`)),countdownItems:S(`computed:1:24`,()=>p(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{c.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59},restartMillisecondDemo:()=>{u.value=Date.now()+10*1e3},restartDayLevelDemo:()=>{d.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3},restartCallbackDemo:()=>{h.value=`计时中`,g.value=1e4,f.value=Date.now()+10*1e3},timer:t}})),{counter:u,comboTarget:d,comboTotalSeconds:f,comboHours:g,comboMinutes:v,comboSeconds:C,basicTarget:w,millisecondTarget:D,dayLevelTarget:O,callbackTarget:A,callbackStatus:j,callbackRemaining:M,syncComboCountdown:N,stopTimer:P,startTimer:F,tabBasic:I,tabLarge2:L,tabClock:R,tabClockColon:z,tabLabels:B,tabLabelsUnder:V,tabInBoxes:H,tabArrayInternal:U,tabTarget:W,tabMillisecond:J,tabDayLevel:ne,tabCallbacks:re,countdownItems:ie,restartTargetDemo:ae,restartMillisecondDemo:oe,restartDayLevelDemo:se,restartCallbackDemo:ce}=s,{timer:Y}=s;return h(r=>{let s=c(),l=a(`rue:component:anchor`);return n(s,l),y(x(k,{children:h(()=>{let r=c(),s=i(`div`,r);n(r,s),b(s,`max-w-none prose prose-sm md:prose-base`);let l=i(`h1`,s);n(s,l),n(l,e(`Countdown 倒计时`));let d=i(`p`,s);n(s,d),b(d,`text-sm mt-3 mb-3`),n(d,e("现在既能继续使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let p=a(`rue:component:anchor`);n(s,p),o(()=>{let e=x(K,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:W,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-4xl`,value:w.value,format:`HH:mm:ss`},w.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:ae,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});t(()=>y(e,s,p))});let m=a(`rue:component:anchor`);n(s,m),o(()=>{let e=x(K,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:J,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-3xl`,value:D.value,format:`HH:mm:ss:SSS`,interval:250},D.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:oe,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
  interval={250}
/>`});t(()=>y(e,s,m))});let h=a(`rue:component:anchor`);n(s,h),o(()=>{let e=x(K,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ne,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-2xl`,value:O.value,format:`D [days] H [hours] m [minutes] s [seconds]`},O.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:se,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});t(()=>y(e,s,h))});let _=a(`rue:component:anchor`);n(s,_),o(()=>{let e=x(K,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:re,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-3xl`,value:A.value,format:`s.SSS`,interval:250,onChange:e=>{M.value=Math.max(Math.round(e??0),0)},onFinish:()=>{j.value=`已完成`}},A.value),T(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,M.value,` ms`]}),T(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,j.value]}),E(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});t(()=>y(e,s,_))});let S=i(`h2`,s);n(s,S),n(S,e(`组合方式`));let k=i(`p`,s);n(s,k),b(k,`text-sm`),n(k,e("这一组保留 Rue 原有的组合式示例，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let N=a(`rue:component:anchor`);n(s,N),o(()=>{let e=x(K,{title:`Countdown`,tab:I,preview:()=>E(G,{children:E(G.Value,{value:f.value,ariaLabel:`${f.value} seconds remaining`})}),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});t(()=>y(e,s,N))});let P=a(`rue:component:anchor`);n(s,P),o(()=>{let e=x(K,{title:`Large Text With 2 Digits`,tab:L,preview:()=>E(G,{className:`font-mono text-6xl`,children:E(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds remaining`})}),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});t(()=>y(e,s,P))});let F=a(`rue:component:anchor`);n(s,F),o(()=>{let e=x(K,{title:`Clock Countdown`,tab:R,preview:()=>T(G,{className:`font-mono text-2xl`,children:[E(G.Value,{value:g.value,ariaLabel:`${g.value} hours`}),`h`,E(G.Value,{value:v.value,digits:2,ariaLabel:`${v.value} minutes`}),`m`,E(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds`}),`s`]}),code:`const parts = computed(() => {
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
</Countdown>`});t(()=>y(e,s,F))});let Y=a(`rue:component:anchor`);n(s,Y),o(()=>{let e=x(K,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:U,preview:()=>E(G,{className:`font-mono text-2xl`,items:ie.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});t(()=>y(e,s,Y))});let X=a(`rue:component:anchor`);n(s,X),o(()=>{let e=x(K,{title:`Clock Countdown With Colons`,tab:z,preview:()=>T(G,{className:`font-mono text-2xl`,children:[E(G.Value,{value:10,ariaLabel:`10`}),`:`,E(G.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,E(G.Value,{value:u.value,digits:2,ariaLabel:String(u.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});t(()=>y(e,s,X))});let Z=a(`rue:component:anchor`);n(s,Z),o(()=>{let e=x(K,{title:`Large Text With Labels`,tab:B,preview:()=>T(`div`,{className:`flex gap-5`,children:[E(q,{label:`days`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{label:`min`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:u.value,ariaLabel:String(u.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});t(()=>y(e,s,Z))});let Q=a(`rue:component:anchor`);n(s,Q),o(()=>{let e=x(K,{title:`Large Text With Labels Under`,tab:V,preview:()=>T(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[E(q,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:u.value,ariaLabel:String(u.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});t(()=>y(e,s,Q))});let $=a(`rue:component:anchor`);n(s,$),o(()=>{let e=x(K,{title:`In Boxes`,tab:H,preview:()=>T(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:u.value,ariaLabel:String(u.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});t(()=>y(e,s,$))});let le=i(`h2`,s);n(s,le),n(le,e(`API`));let ue=a(`rue:component:anchor`);return n(s,ue),o(()=>{let e=x(ee,{rows:te});t(()=>y(e,s,ue))}),r})}),s,l),s})};export{J as default};
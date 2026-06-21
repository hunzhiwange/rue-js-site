import{$t as e,Jt as t,Q as n,Rt as r,St as i,dt as a,et as o,gt as s,i as c,in as l,l as u,lt as d,n as f,nt as p,o as m,r as h,rt as g,s as _,t as v,tt as y,yt as b,zt as x}from"./vapor-runtime-DsQWl-IB.js";import{a as S,n as C,t as w}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as T,i as E}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as D}from"./Code-4SUSUwRg.js";import{t as O}from"./tabs-Duzh3URW.js";import{r as k}from"./SidebarPlaygroundDesign-EU389JDE.js";var A=`HH:mm:ss`,j=1e3/30,M=1e3,N=[[`Y`,1e3*60*60*24*365],[`M`,1e3*60*60*24*30],[`D`,1e3*60*60*24],[`H`,1e3*60*60],[`m`,1e3*60],[`s`,1e3],[`S`,1]],P=(e,t)=>t?`${e} ${t}`:e,F=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},I=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},L=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return N.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},R=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?j:M,z=e=>`value`in e,B=(e,t)=>{let n=`--value: ${String(e)};`;return t!=null&&(n+=` --digits: ${String(t)};`),n},V=e=>typeof e==`string`?e.replace(/ /g,`\xA0`):e,H=e=>e.digits>1?e.digits:void 0,U=(e,t)=>t[e.unit]??0,W=(e,t,n,r)=>{e.style.setProperty(`--value`,String(t)),n==null?(e.style.removeProperty(`--digits`),e.removeAttribute(`data-countdown-digits`)):(e.style.setProperty(`--digits`,String(n)),e.setAttribute(`data-countdown-digits`,String(n))),e.setAttribute(`aria-live`,r),e.setAttribute(`aria-label`,String(t)),e.setAttribute(`data-countdown-value`,String(t))},G=Object.assign(h=>{let g=S(`useSetup:0:0`,()=>l(()=>{let e=S(`ref:1:0`,()=>t(0)),n=null,a=!1,o=null,s=()=>{},l=()=>{n!=null&&(clearInterval(n),n=null)},u=()=>{let t=F(h.value);if(t==null)return e.value=0,s(),h.onChange&&h.onChange(void 0),l(),!1;let n=Math.max(t-Date.now(),0);return e.value=n,s(),h.onChange&&h.onChange(n),n<=0?(l(),a||(a=!0,h.onFinish&&h.onFinish()),!1):(a=!1,!0)},d=()=>{if(l(),h.value==null){e.value=0;return}u()&&(n=setInterval(u,R(h.format===void 0?A:h.format,h.interval)))};S(`watch:1:1`,()=>r(()=>`${F(h.value)??`invalid`}|${h.format===void 0?A:h.format}|${h.interval??``}`,()=>{a=!1,d()},{immediate:!0})),c(l);let f=S(`computed:1:2`,()=>i(()=>P(`countdown`,h.className))),p=S(`computed:1:3`,()=>i(()=>!!(h.items&&h.items.length))),m=S(`computed:1:4`,()=>i(()=>!p.get()&&h.value!=null)),g=S(`computed:1:5`,()=>i(()=>I(h.format===void 0?A:h.format))),_=S(`computed:1:6`,()=>i(()=>h.ariaLive??((h.format===void 0?A:h.format).includes(`S`)?`off`:`polite`)));return s=()=>{let t=m.get(),n=g.get(),r=L(e.value,n),i=_.get();!o||!t||Array.from(o.children).forEach(e=>{let t=e,a=n[Number(t.dataset.countdownTokenIndex)];!a||a.type!==`unit`||W(t,U(a,r),H(a),i)})},{remaining:e,stopTimer:l,syncRemaining:u,startTimer:d,resolvedClassName:f,hasItems:p,usesTimerMode:m,formatTokens:g,resolvedAriaLive:_,getTimerTokenValue:t=>U(t,L(e.value,g.get())),setRootElement:e=>{o=e,s()},timer:n,finished:a,rootElement:o,syncTimerDom:s}})),{remaining:v,stopTimer:T,syncRemaining:E,startTimer:D,resolvedClassName:O,hasItems:k,usesTimerMode:j,formatTokens:M,resolvedAriaLive:N,getTimerTokenValue:G,setRootElement:K}=g,{timer:ee,finished:q,rootElement:te,syncTimerDom:J}=g;return u(t=>{let r=p(`span`,t),i=w(r,()=>K);f(()=>{i()}),x(()=>{a(r,O.get())});let c=o(`rue:slot:anchor`);return n(r,c),x(()=>{let t=k.get()?u(()=>{let t=y(),r=o(`rue:list:start`),i=o(`rue:list:end`);n(t,r),n(t,i);let c=new Map;return x(()=>{c=C({items:(h.items??[])||[],getKey:(e,t)=>t,elements:c,parent:r.parentNode,before:i,start:r,renderItem:(t,r,i,c,l)=>{_(z(t)?u(()=>{let r=y(),i=p(`span`,r);n(r,i),x(()=>{s(i,B(t.value,t.digits))}),x(()=>{d(i,`aria-live`,String(t.ariaLive??`polite`))}),x(()=>{d(i,`aria-label`,String(t.ariaLabel??String(t.value)))}),x(()=>{d(i,`data-countdown-value`,String(String(t.value)))}),x(()=>{b(i,t.digits==null?{}:{"data-countdown-digits":String(t.digits)})}),x(()=>{a(i,t.className?t.className.trim():``)});let c=o(`rue:children:anchor`);return n(i,c),x(()=>{let n=t.children;e(()=>m(n,i,c))}),r}):V(t.content),r,i,c)}})}),t}):j.get()?u(()=>{let e=y(),t=o(`rue:list:start`),r=o(`rue:list:end`);n(e,t),n(e,r);let i=new Map;return x(()=>{i=C({items:M.get()||[],getKey:(e,t)=>t,elements:i,parent:t.parentNode,before:r,start:t,renderItem:(e,t,r,i,a)=>{_(e.type===`unit`?u(()=>{let t=y(),r=p(`span`,t);return n(t,r),x(()=>{d(r,`key`,String(a))}),x(()=>{d(r,`data-countdown-token-index`,String(String(a)))}),x(()=>{s(r,B(G(e),H(e)))}),x(()=>{d(r,`aria-live`,String(N.get()))}),x(()=>{d(r,`aria-label`,String(String(G(e))))}),x(()=>{d(r,`data-countdown-value`,String(String(G(e))))}),x(()=>{b(r,H(e)==null?{}:{"data-countdown-digits":String(H(e))})}),t}):V(e.content),t,r,i)}})}),e}):h.children;e(()=>m(t,r,c))}),r})},{Value:t=>{let{resolvedClassName:r}=S(`useSetup:0:0:dup1`,()=>l(()=>({resolvedClassName:S(`computed:1:7`,()=>i(()=>t.className?t.className.trim():``))})));return u(i=>{let c=p(`span`,i);x(()=>{s(c,B(t.value,t.digits))}),x(()=>{d(c,`aria-live`,String(t.ariaLive===void 0?`polite`:t.ariaLive))}),x(()=>{d(c,`aria-label`,String(t.ariaLabel??String(t.value)))}),x(()=>{d(c,`data-countdown-value`,String(String(t.value)))}),x(()=>{b(c,t.digits==null?{}:{"data-countdown-digits":String(t.digits)})}),x(()=>{a(c,r.get())});let l=o(`rue:slot:anchor`);return n(c,l),x(()=>{let n=t.children==null?String(t.value):t.children;e(()=>m(n,c,l))}),c})}}),K=t=>u(r=>{let i=p(`div`,r);a(i,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=p(`div`,i);n(i,s),a(s,`flex flex-wrap items-start justify-between gap-3`);let c=p(`div`,s);n(s,c);let l=p(`h2`,c);n(c,l),a(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(l,g(`# `));let d=o(`rue:slot:anchor`);n(l,d),x(()=>{let n=t.title;e(()=>m(n,l,d))});let f=o(`rue:slot:anchor`);n(c,f),x(()=>{let r=t.summary?u(()=>{let r=y(),i=p(`p`,r);n(r,i),a(i,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return n(i,s),x(()=>{let n=t.summary;e(()=>m(n,i,s))}),r}):``;e(()=>m(r,c,f))});let h=o(`rue:component:anchor`);n(i,h),x(()=>{let n=v(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>m(n,i,h))});let _=o(`rue:slot:anchor`);return n(i,_),x(()=>{let r=t.tab.value===`preview`?t.preview():u(()=>{let r=y(),i=o(`rue:component:anchor`);return n(r,i),x(()=>{let n=v(D,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>m(n,r,i))}),r});e(()=>m(r,i,_))}),i}),ee=t=>u(r=>{let i=p(`div`,r);a(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=p(`table`,i);n(i,s),a(s,`table table-zebra`);let c=p(`thead`,s);n(s,c);let l=p(`tr`,c);n(c,l);let f=p(`th`,l);n(l,f),n(f,g(`属性`));let h=p(`th`,l);n(l,h),n(h,g(`说明`));let _=p(`th`,l);n(l,_),n(_,g(`类型`));let v=p(`th`,l);n(l,v),n(v,g(`默认值`));let b=p(`tbody`,s);n(s,b);let S=o(`rue:list:start`),w=o(`rue:list:end`);n(b,S),n(b,w);let T=new Map;return x(()=>{T=C({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:b,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,i,a,s)=>{m(u(()=>{let r=y(),i=p(`tr`,r);n(r,i),x(()=>{d(i,`key`,String(t.prop))});let a=p(`td`,i);n(i,a);let s=p(`code`,a);n(a,s);let c=o(`rue:slot:anchor`);n(s,c),x(()=>{let n=t.prop;e(()=>m(n,s,c))});let l=p(`td`,i);n(i,l);let u=o(`rue:slot:anchor`);n(l,u),x(()=>{let n=t.description;e(()=>m(n,l,u))});let f=p(`td`,i);n(i,f);let h=p(`code`,f);n(f,h);let g=o(`rue:slot:anchor`);n(h,g),x(()=>{let n=t.type;e(()=>m(n,h,g))});let _=p(`td`,i);n(i,_);let v=p(`code`,_);n(_,v);let b=o(`rue:slot:anchor`);return n(v,b),x(()=>{let n=t.defaultValue;e(()=>m(n,v,b))}),r}),r,i)}})}),i}),q=t=>u(r=>{let i=p(`div`,r);x(()=>{a(i,t.className)});let s=o(`rue:component:anchor`);n(i,s),x(()=>{let n=v(G,{className:t.countdownClassName,children:t.children});e(()=>m(n,i,s))});let c=o(`rue:slot:anchor`);return n(i,c),x(()=>{let n=t.label;e(()=>m(n,i,c))}),i}),te=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保持字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],J=()=>{let r=S(`useSetup:0:0`,()=>l(()=>{let e=S(`ref:1:0`,()=>t(59)),n=null,r=S(`ref:1:1`,()=>t(Date.now()+600*60*1e3+1440*1e3+59*1e3)),a=S(`ref:1:2`,()=>t(Math.max(Math.floor((r.value-Date.now())/1e3),0))),o=S(`ref:1:3`,()=>t(Math.floor(a.value/3600))),s=S(`ref:1:4`,()=>t(Math.floor(a.value%3600/60))),l=S(`ref:1:5`,()=>t(a.value%60)),u=S(`ref:1:6`,()=>t(Date.now()+1e3*60*60*10+1e3*60*24+1e3*59)),d=S(`ref:1:7`,()=>t(Date.now()+10*1e3)),f=S(`ref:1:8`,()=>t(Date.now()+2880*60*1e3+10800*1e3+45*1e3)),p=S(`ref:1:9`,()=>t(Date.now()+10*1e3)),m=S(`ref:1:10`,()=>t(`计时中`)),g=S(`ref:1:11`,()=>t(1e4)),_=()=>{let e=Math.max(Math.floor((r.value-Date.now())/1e3),0);a.value=e,o.value=Math.floor(e/3600),s.value=Math.floor(e%3600/60),l.value=e%60},v=()=>{n!=null&&(clearInterval(n),n=null)},y=()=>{n??=(_(),setInterval(()=>{e.value=e.value>0?e.value-1:59,_()},1e3))};return h(()=>{y()}),c(v),{counter:e,comboTarget:r,comboTotalSeconds:a,comboHours:o,comboMinutes:s,comboSeconds:l,basicTarget:u,millisecondTarget:d,dayLevelTarget:f,callbackTarget:p,callbackStatus:m,callbackRemaining:g,syncComboCountdown:_,stopTimer:v,startTimer:y,tabBasic:S(`ref:1:12`,()=>t(`preview`)),tabLarge2:S(`ref:1:13`,()=>t(`preview`)),tabClock:S(`ref:1:14`,()=>t(`preview`)),tabClockColon:S(`ref:1:15`,()=>t(`preview`)),tabLabels:S(`ref:1:16`,()=>t(`preview`)),tabLabelsUnder:S(`ref:1:17`,()=>t(`preview`)),tabInBoxes:S(`ref:1:18`,()=>t(`preview`)),tabArrayInternal:S(`ref:1:19`,()=>t(`preview`)),tabTarget:S(`ref:1:20`,()=>t(`preview`)),tabMillisecond:S(`ref:1:21`,()=>t(`preview`)),tabDayLevel:S(`ref:1:22`,()=>t(`preview`)),tabCallbacks:S(`ref:1:23`,()=>t(`preview`)),countdownItems:S(`computed:1:24`,()=>i(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:e.value,digits:2},{content:`s`}])),restartTargetDemo:()=>{u.value=Date.now()+1e3*60*60*10+1e3*60*24+1e3*59},restartMillisecondDemo:()=>{d.value=Date.now()+10*1e3},restartDayLevelDemo:()=>{f.value=Date.now()+2880*60*1e3+10800*1e3+45*1e3},restartCallbackDemo:()=>{m.value=`计时中`,g.value=1e4,p.value=Date.now()+10*1e3},timer:n}})),{counter:s,comboTarget:d,comboTotalSeconds:f,comboHours:_,comboMinutes:b,comboSeconds:C,basicTarget:w,millisecondTarget:D,dayLevelTarget:O,callbackTarget:A,callbackStatus:j,callbackRemaining:M,syncComboCountdown:N,stopTimer:P,startTimer:F,tabBasic:I,tabLarge2:L,tabClock:R,tabClockColon:z,tabLabels:B,tabLabelsUnder:V,tabInBoxes:H,tabArrayInternal:U,tabTarget:W,tabMillisecond:J,tabDayLevel:ne,tabCallbacks:re,countdownItems:ie,restartTargetDemo:ae,restartMillisecondDemo:oe,restartDayLevelDemo:se,restartCallbackDemo:ce}=r,{timer:Y}=r;return u(t=>{let r=y(),i=o(`rue:component:anchor`);return n(r,i),m(v(k,{children:u(()=>{let t=y(),r=p(`div`,t);n(t,r),a(r,`max-w-none prose prose-sm md:prose-base`);let i=p(`h1`,r);n(r,i),n(i,g(`Countdown 倒计时`));let c=p(`p`,r);n(r,c),a(c,`text-sm mt-3 mb-3`),n(c,g("现在既能可以使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。"));let l=o(`rue:component:anchor`);n(r,l),x(()=>{let t=v(K,{title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:W,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-4xl`,value:w.value,format:`HH:mm:ss`},w.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:ae,children:`重新开始`})]}),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`});e(()=>m(t,r,l))});let u=o(`rue:component:anchor`);n(r,u),x(()=>{let t=v(K,{title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:J,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-3xl`,value:D.value,format:`HH:mm:ss:SSS`,interval:250},D.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:oe,children:`再来 10 秒`})]}),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
  interval={250}
/>`});e(()=>m(t,r,u))});let d=o(`rue:component:anchor`);n(r,d),x(()=>{let t=v(K,{title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:ne,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-2xl`,value:O.value,format:`D [days] H [hours] m [minutes] s [seconds]`},O.value),E(`button`,{className:`btn btn-sm btn-outline ml-3`,onClick:se,children:`重置长倒计时`})]}),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`});e(()=>m(t,r,d))});let h=o(`rue:component:anchor`);n(r,h),x(()=>{let t=v(K,{title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:re,preview:()=>T(`div`,{className:`space-y-4`,children:[E(G,{className:`font-mono text-3xl`,value:A.value,format:`s.SSS`,interval:250,onChange:e=>{M.value=Math.max(Math.round(e??0),0)},onFinish:()=>{j.value=`已完成`}},A.value),T(`div`,{className:`text-sm opacity-70`,children:[`最近一次 onChange: `,M.value,` ms`]}),T(`div`,{className:`text-sm opacity-70`,children:[`onFinish 状态: `,j.value]}),E(`button`,{className:`btn btn-sm btn-outline`,onClick:ce,children:`重置 10 秒示例`})]}),code:`const target = Date.now() + 10 * 1000
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
/>`});e(()=>m(t,r,h))});let S=p(`h2`,r);n(r,S),n(S,g(`组合方式`));let k=p(`p`,r);n(r,k),a(k,`text-sm`),n(k,g("这组示例使用 Rue 组合式写法，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。"));let N=o(`rue:component:anchor`);n(r,N),x(()=>{let t=v(K,{title:`Countdown`,tab:I,preview:()=>E(G,{children:E(G.Value,{value:f.value,ariaLabel:`${f.value} seconds remaining`})}),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`});e(()=>m(t,r,N))});let P=o(`rue:component:anchor`);n(r,P),x(()=>{let t=v(K,{title:`Large Text With 2 Digits`,tab:L,preview:()=>E(G,{className:`font-mono text-6xl`,children:E(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds remaining`})}),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`});e(()=>m(t,r,P))});let F=o(`rue:component:anchor`);n(r,F),x(()=>{let t=v(K,{title:`Clock Countdown`,tab:R,preview:()=>T(G,{className:`font-mono text-2xl`,children:[E(G.Value,{value:_.value,ariaLabel:`${_.value} hours`}),`h`,E(G.Value,{value:b.value,digits:2,ariaLabel:`${b.value} minutes`}),`m`,E(G.Value,{value:C.value,digits:2,ariaLabel:`${C.value} seconds`}),`s`]}),code:`const parts = computed(() => {
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
</Countdown>`});e(()=>m(t,r,F))});let Y=o(`rue:component:anchor`);n(r,Y),x(()=>{let t=v(K,{title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:U,preview:()=>E(G,{className:`font-mono text-2xl`,items:ie.get()}),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`});e(()=>m(t,r,Y))});let X=o(`rue:component:anchor`);n(r,X),x(()=>{let t=v(K,{title:`Clock Countdown With Colons`,tab:z,preview:()=>T(G,{className:`font-mono text-2xl`,children:[E(G.Value,{value:10,ariaLabel:`10`}),`:`,E(G.Value,{value:24,digits:2,ariaLabel:`24`}),`:`,E(G.Value,{value:s.value,digits:2,ariaLabel:String(s.value)})]}),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`});e(()=>m(t,r,X))});let Z=o(`rue:component:anchor`);n(r,Z),x(()=>{let t=v(K,{title:`Large Text With Labels`,tab:B,preview:()=>T(`div`,{className:`flex gap-5`,children:[E(q,{label:`days`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{label:`hours`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{label:`min`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{label:`sec`,countdownClassName:`font-mono text-4xl`,children:E(G.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="flex gap-5">
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
</div>`});e(()=>m(t,r,Z))});let Q=o(`rue:component:anchor`);n(r,Q),x(()=>{let t=v(K,{title:`Large Text With Labels Under`,tab:V,preview:()=>T(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[E(q,{className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});e(()=>m(t,r,Q))});let $=o(`rue:component:anchor`);n(r,$),x(()=>{let t=v(K,{title:`In Boxes`,tab:H,preview:()=>T(`div`,{className:`grid grid-flow-col gap-5 text-center auto-cols-max`,children:[E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:15,ariaLabel:`15`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:10,ariaLabel:`10`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:24,ariaLabel:`24`})}),E(q,{className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:E(G.Value,{value:s.value,ariaLabel:String(s.value)})})]}),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`});e(()=>m(t,r,$))});let le=p(`h2`,r);n(r,le),n(le,g(`API`));let ue=o(`rue:component:anchor`);return n(r,ue),x(()=>{let t=v(ee,{rows:te});e(()=>m(t,r,ue))}),t})}),r,i),r})};export{J as default};
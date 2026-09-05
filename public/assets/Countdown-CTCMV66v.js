import{Bt as e,C as t,Et as n,G as r,H as i,It as a,K as o,Kt as s,L as c,Lt as l,Mt as u,Rt as d,S as f,Sn as p,V as m,W as h,X as g,Y as _,Z as v,_n as y,_t as b,b as x,bn as S,dn as C,dt as w,fn as T,gn as E,gt as D,hn as O,ht as k,kn as A,mn as j,mt as M,nt as N,ot as P,pn as F,q as I,rt as ee,tt as te,wn as L,x as R,yn as ne,yt as re,z}from"./rue-runtime-CwEGJ854.js";import{t as ie}from"./Code-B3jCYMAr.js";import{t as ae}from"./tabs-DUviBzjL.js";import{r as oe}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var B=y(`<span><!--rue:text-hole:0--></span>`),V=`HH:mm:ss`,se=1e3/30,ce=1e3,le=[[`Y`,31536e6],[`M`,2592e6],[`D`,864e5],[`H`,36e5],[`m`,6e4],[`s`,1e3],[`S`,1]],ue=(e,t)=>t?`${e} ${t}`:e,H=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},de=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},U=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return le.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},W=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?se:ce,fe=e=>`value`in e,G=(e,t)=>{let n=`--value: ${String(e)};`;return t!=null&&(n+=` --digits: ${String(t)};`),n},K=e=>typeof e==`string`?e.replace(/ /g,`\xA0`):e,q=e=>e.digits>1?e.digits:void 0,J=(e,t)=>t[e.unit]??0,Y=(e,t,n,r)=>{!e.style||typeof e.style.setProperty!=`function`||typeof e.setAttribute!=`function`||(e.style.setProperty(`--value`,String(t)),n==null?(e.style.removeProperty(`--digits`),e.removeAttribute(`data-countdown-digits`)):(e.style.setProperty(`--digits`,String(n)),e.setAttribute(`data-countdown-digits`,String(n))),e.setAttribute(`aria-live`,r),e.setAttribute(`aria-label`,String(t)),e.setAttribute(`data-countdown-value`,String(t)))},X=Object.assign(t=>{let r=ne(`useSetup:0:0`,()=>{let n=e(0),r=null,i=!1,a=null,o=()=>{},s=()=>{r!=null&&(clearInterval(r),r=null)},c=()=>{let e=H(t.value);if(e==null)return n.value=0,o(),t.onChange&&t.onChange(void 0),s(),!1;let r=Math.max(e-Date.now(),0);return n.value=r,o(),t.onChange&&t.onChange(r),r<=0?(s(),i||(i=!0,t.onFinish&&t.onFinish()),!1):(i=!1,!0)},l=()=>{if(s(),t.value==null){n.value=0;return}c()&&(r=setInterval(c,W(t.format===void 0?V:t.format,t.interval)))};C(()=>`${H(t.value)??`invalid`}|${t.format===void 0?V:t.format}|${t.interval??``}`,()=>{i=!1,l()},{immediate:!0}),d(s);let u=p(()=>ue(`countdown`,t.className)),f=p(()=>!!(t.items&&t.items.length)),m=p(()=>!f.get()&&t.value!=null),h=p(()=>de(t.format===void 0?V:t.format)),g=p(()=>t.ariaLive??((t.format===void 0?V:t.format).includes(`S`)?`off`:`polite`));return o=()=>{let e=m.get(),t=h.get(),r=U(n.value,t),i=g.get();!a||!e||Array.from(a.children??[]).forEach(e=>{let n=e,a=Number(n.dataset.countdownTokenIndex),o=t[a];!o||o.type!==`unit`||Y(n,J(o,r),q(o),i)})},{remaining:n,stopTimer:s,syncRemaining:c,startTimer:l,resolvedClassName:u,hasItems:f,usesTimerMode:m,formatTokens:h,resolvedAriaLive:g,getTimerTokenValue:e=>J(e,U(n.value,h.get())),setRootElement:e=>{a=e,o()},timer:r,finished:i,rootElement:a,syncTimerDom:o}}),{remaining:i,stopTimer:a,syncRemaining:o,startTimer:s,resolvedClassName:l,hasItems:u,usesTimerMode:f,formatTokens:m,resolvedAriaLive:h,getTimerTokenValue:y,setRootElement:b}=r,{timer:x,finished:S,rootElement:T,syncTimerDom:E}=r;return k(e=>{let r=B().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode;return v(i,()=>b),L(()=>{c(i,l.get())}),L(()=>{let e=u.get()?(t.items??[]).map(e=>fe(e)?k(()=>{let t=N(),n=ee(`span`,t);g(t,n),L(()=>{let t=G(e.value,e.digits);w(n,t)}),L(()=>{P(n,`aria-live`,String(e.ariaLive??`polite`))}),L(()=>{P(n,`aria-label`,String(e.ariaLabel??String(e.value)))}),L(()=>{P(n,`data-countdown-value`,String(String(e.value)))}),L(()=>{M(n,e.digits==null?{}:{"data-countdown-digits":String(e.digits)},[`className`])}),L(()=>{c(n,e.className?e.className.trim():``)});let r=te(`rue:children:anchor`);return g(n,r),L(()=>{let t=e.children;A(()=>_(t,n,r))}),t},!0):K(e.content)):f.get()?m.get().map((e,t)=>e.type===`unit`?n(Object.assign(n=>{let r=O(`span`,n),i;L(()=>{let e=String(t);Object.is(i,e)||(i=e,e==null||e===!1?r.removeAttribute(`data-countdown-token-index`):r.setAttribute(`data-countdown-token-index`,String(e)))});let a;L(()=>{let t=G(y(e),q(e));Object.is(a,t)||(a=t,w(r,t))});let o;L(()=>{let e=h.get();Object.is(o,e)||(o=e,e==null||e===!1?r.removeAttribute(`aria-live`):r.setAttribute(`aria-live`,String(e)))});let s;L(()=>{let t=String(y(e));Object.is(s,t)||(s=t,t==null||t===!1?r.removeAttribute(`aria-label`):r.setAttribute(`aria-label`,String(t)))});let c;return L(()=>{let t=String(y(e));Object.is(c,t)||(c=t,t==null||t===!1?r.removeAttribute(`data-countdown-value`):r.setAttribute(`data-countdown-value`,String(t)))}),re(r,()=>q(e)==null?{}:{"data-countdown-digits":String(q(e))},[]),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})):K(e.content)):t.children;A(()=>_(e,o,a))}),r})},{Value:e=>{let t=h(e.ariaLabel),i=h(e.ariaLive),a=h(e.children),o=h(e.className),s=h(e.digits),l=h(e.value),u=o.get()?o.get().trim():``;return I(k(()=>{let e=N(),o=B().content.cloneNode(!0),d=o.firstChild,f=d,p=d.childNodes[0],h=p.parentNode;return e.appendChild(o),L(()=>{let e=G(l.get(),s.get());w(f,e)}),L(()=>{P(f,`aria-live`,String(i.get()===void 0?`polite`:i.get()))}),L(()=>{P(f,`aria-label`,String(t.get()??String(l.get())))}),L(()=>{P(f,`data-countdown-value`,String(String(l.get())))}),L(()=>{M(f,s.get()==null?{}:{"data-countdown-digits":String(s.get())},[`className`])}),L(()=>{c(f,u)}),m(h,p,()=>a.get()==null?{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=E(typeof String(l.get())==`string`||typeof String(l.get())==`number`||typeof String(l.get())==`bigint`?String(l.get()):``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!0,create:()=>r(()=>a.get())}),e},!0),e=>z(()=>{t.set(e.ariaLabel),i.set(e.ariaLive),a.set(e.children),o.set(e.className),s.set(e.digits),l.set(e.value)}),()=>e)}}),pe=y(`<div class="space-y-4"><!--rue:opaque-hole:0--><button class="btn btn-sm btn-outline ml-3">重新开始</button></div>`),me=y(`<div class="space-y-4"><!--rue:opaque-hole:0--><button class="btn btn-sm btn-outline ml-3">再来 10 秒</button></div>`),he=y(`<div class="space-y-4"><!--rue:opaque-hole:0--><button class="btn btn-sm btn-outline ml-3">重置长倒计时</button></div>`),ge=y(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="text-sm opacity-70">最近一次 onChange: <!--rue:text-hole:1--> ms</div><div class="text-sm opacity-70">onFinish 状态: <!--rue:text-hole:2--></div><button class="btn btn-sm btn-outline">重置 10 秒示例</button></div>`),_e=y(`<div class="flex gap-5"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),ve=y(`<div class="grid grid-flow-col gap-5 text-center auto-cols-max"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),ye=y(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),Z=y(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),be=y(`<div><!--rue:opaque-hole:0--><!--rue:text-hole:1--></div>`),xe=y('<div class="max-w-none prose prose-sm md:prose-base"><h1>Countdown 倒计时</h1><p class="text-sm mt-3 mb-3">现在既能可以使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><h2>组合方式</h2><p class="text-sm">这组示例使用 Rue 组合式写法，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。</p><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><!--rue:opaque-hole:11--><h2>API</h2><!--rue:opaque-hole:12--></div>'),Q=e=>k(t=>{let r=ye().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=a.parentNode,c=r.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u=r.childNodes[1],d=u.parentNode,f=r.childNodes[2],p=f.parentNode;x({parent:s,before:a},()=>e.title,()=>({})),m(l,c,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>n(Object.assign(t=>{let n=O(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=F(`rue:compiled-slot`);return T(n,r),x({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>n(Object.assign(e=>{let t=N();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let h=j(d);return o(h,ae,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),d.insertBefore(h,u),L(()=>{let t=e.tab.value===`preview`?e.preview():i(ie,()=>({className:`mt-2`,lang:`tsx`,code:e.code}));A(()=>_(t,p,f))}),r}),Se=e=>{let r=h(e.rows);return I(n(Object.assign(e=>{let i=Z().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return L(()=>{let e=r.get()||[];s=t(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let r=h(e),i=h(t);return f((e,t,i)=>R(e,i,()=>n(Object.assign(e=>{let t=O(`tr`,e),n=O(`td`,t);T(t,n);let i=O(`code`,n);T(n,i);let a=E(``);T(i,a),S(a,()=>r.get().prop);let o=O(`td`,t);T(t,o);let s=E(``);T(o,s),S(s,()=>r.get().description);let c=O(`td`,t);T(t,c);let l=O(`code`,c);T(c,l);let u=E(``);T(l,u),S(u,()=>r.get().type);let d=O(`td`,t);T(t,d);let f=O(`code`,d);T(d,f);let p=E(``);return T(f,p),S(p,()=>r.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>z(()=>{r.set(e.rows)}),()=>e)},$=e=>{let t=h(e.children),r=h(e.className),i=h(e.countdownClassName),a=h(e.label);return I(n(Object.assign(e=>{let s=be().content.cloneNode(!0).firstChild,c=s,l=s.childNodes[0],u=l.parentNode,d=s.childNodes[1],f=d.parentNode,p;L(()=>{let e=r.get(),t=e==null?``:String(e);Object.is(p,t)||(p=t,c.className=t)});let m=j(u);o(m,X,()=>({className:i.get(),children:(e,r,i)=>R(e,i,()=>n(Object.assign(e=>{let n=N(),r=F(`rue:compiled-slot`);return T(n,r),x({parent:n,before:r},()=>t.get(),()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(m,l);let h=E(``);return f.insertBefore(h,d),f.removeChild(d),S(h,()=>a.get()),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0})),e=>z(()=>{t.set(e.children),r.set(e.className),i.set(e.countdownClassName),a.set(e.label)}),()=>e)},Ce=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保持字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],we=()=>{let t=e(59),r=null,f=e(Date.now()+36e6+144e4+59e3),m=e(Math.max(Math.floor((f.value-Date.now())/1e3),0)),h=e(Math.floor(m.value/3600)),g=e(Math.floor(m.value%3600/60)),v=e(m.value%60),y=e(Date.now()+36e6+144e4+59e3),x=e(Date.now()+1e4),S=e(Date.now()+1728e5+108e5+45e3),C=e(Date.now()+1e4),w=e(`计时中`),T=e(1e4),E=()=>{let e=Math.max(Math.floor((f.value-Date.now())/1e3),0);m.value=e,h.value=Math.floor(e/3600),g.value=Math.floor(e%3600/60),v.value=e%60},O=()=>{r!=null&&(clearInterval(r),r=null)},M=()=>{r??=(E(),setInterval(()=>{t.value=t.value>0?t.value-1:59,E()},1e3))};a(()=>{M()}),d(O);let P=e(`preview`),F=e(`preview`),ee=e(`preview`),te=e(`preview`),ne=e(`preview`),re=e(`preview`),ie=e(`preview`),ae=e(`preview`),B=e(`preview`),V=e(`preview`),se=e(`preview`),ce=e(`preview`),le=p(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:t.value,digits:2},{content:`s`}]),ue=()=>{y.value=Date.now()+36e6+144e4+59e3},H=()=>{x.value=Date.now()+1e4},de=()=>{S.value=Date.now()+1728e5+108e5+45e3},U=()=>{w.value=`计时中`,T.value=1e4,C.value=Date.now()+1e4};return u(()=>I((()=>{let e=k(()=>{let e=N(),r=xe().content.cloneNode(!0),a=r.firstChild,u=a.childNodes[2],d=u.parentNode,f=a.childNodes[3],p=f.parentNode,E=a.childNodes[4],O=E.parentNode,M=a.childNodes[5],I=M.parentNode,z=a.childNodes[8],oe=z.parentNode,W=a.childNodes[9],fe=W.parentNode,G=a.childNodes[10],K=G.parentNode,q=a.childNodes[11],J=q.parentNode,Y=a.childNodes[12],ye=Y.parentNode,Z=a.childNodes[13],be=Z.parentNode,we=a.childNodes[14],Te=we.parentNode,Ee=a.childNodes[15],De=Ee.parentNode,Oe=a.childNodes[17],ke=Oe.parentNode;e.appendChild(r),L(()=>{let e=b(Q,()=>({title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:B,preview:s(()=>k(e=>{let t=pe().content.cloneNode(!0).firstChild,n=t.childNodes[1],r=t.childNodes[0],i=r.parentNode;c(n,`btn btn-sm btn-outline ml-3`);let a=e=>{let t=ue;typeof t==`function`&&t(e)};return n.addEventListener(`click`,a),l(()=>n.removeEventListener(`click`,a)),L(()=>{let e=b(X,()=>({key:y.value,className:`font-mono text-4xl`,value:y.value,format:`HH:mm:ss`}));A(()=>_(e,i,r))}),t})),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`}));A(()=>_(e,d,u))}),L(()=>{let e=b(Q,()=>({title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:V,preview:s(()=>k(e=>{let t=me().content.cloneNode(!0).firstChild,n=t.childNodes[1],r=t.childNodes[0],i=r.parentNode;c(n,`btn btn-sm btn-outline ml-3`);let a=e=>{let t=H;typeof t==`function`&&t(e)};return n.addEventListener(`click`,a),l(()=>n.removeEventListener(`click`,a)),L(()=>{let e=b(X,()=>({key:x.value,className:`font-mono text-3xl`,value:x.value,format:`HH:mm:ss:SSS`,interval:250}));A(()=>_(e,i,r))}),t})),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
  interval={250}
/>`}));A(()=>_(e,p,f))}),L(()=>{let e=b(Q,()=>({title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:se,preview:s(()=>k(e=>{let t=he().content.cloneNode(!0).firstChild,n=t.childNodes[1],r=t.childNodes[0],i=r.parentNode;c(n,`btn btn-sm btn-outline ml-3`);let a=e=>{let t=de;typeof t==`function`&&t(e)};return n.addEventListener(`click`,a),l(()=>n.removeEventListener(`click`,a)),L(()=>{let e=b(X,()=>({key:S.value,className:`font-mono text-2xl`,value:S.value,format:`D [days] H [hours] m [minutes] s [seconds]`}));A(()=>_(e,i,r))}),t})),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`}));A(()=>_(e,O,E))}),L(()=>{let e=b(Q,()=>({title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:ce,preview:s(()=>k(e=>{let t=ge().content.cloneNode(!0).firstChild,n=t.childNodes[3],r=t.childNodes[0],i=r.parentNode,a=t.childNodes[1].childNodes[1],o=a.parentNode,s=t.childNodes[2].childNodes[1],u=s.parentNode;c(n,`btn btn-sm btn-outline`);let d=e=>{let t=U;typeof t==`function`&&t(e)};return n.addEventListener(`click`,d),l(()=>n.removeEventListener(`click`,d)),L(()=>{let e=b(X,()=>({key:C.value,className:`font-mono text-3xl`,value:C.value,format:`s.SSS`,interval:250,onChange:e=>{T.value=Math.max(Math.round(e??0),0)},onFinish:()=>{w.value=`已完成`}}));A(()=>_(e,i,r))}),L(()=>{let e=T.value;A(()=>_(e,o,a))}),L(()=>{let e=w.value;A(()=>_(e,u,s))}),t})),code:`const target = Date.now() + 10 * 1000
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
/>`}));A(()=>_(e,I,M))}),L(()=>{let e=b(Q,()=>({title:`Countdown`,tab:P,preview:s(()=>(()=>{let e=b(X.Value,()=>({value:m.value,ariaLabel:`${m.value} seconds remaining`}));return b(X,()=>({children:e}))})()),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`}));A(()=>_(e,oe,z))}),L(()=>{let e=b(Q,()=>({title:`Large Text With 2 Digits`,tab:F,preview:s(()=>(()=>{let e=b(X.Value,()=>({value:v.value,digits:2,ariaLabel:`${v.value} seconds remaining`}));return b(X,()=>({className:`font-mono text-6xl`,children:e}))})()),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`}));A(()=>_(e,fe,W))}),L(()=>{let e=b(Q,()=>({title:`Clock Countdown`,tab:ee,preview:s(()=>(()=>{let e=b(X.Value,()=>({value:h.value,ariaLabel:`${h.value} hours`})),t=b(X.Value,()=>({value:g.value,digits:2,ariaLabel:`${g.value} minutes`})),n=b(X.Value,()=>({value:v.value,digits:2,ariaLabel:`${v.value} seconds`}));return b(X,()=>({className:`font-mono text-2xl`,children:[e,`h`,t,`m`,n,`s`]}))})()),code:`const parts = computed(() => {
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
</Countdown>`}));A(()=>_(e,K,G))}),L(()=>{let e=b(Q,()=>({title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:ae,preview:s(()=>i(X,()=>({className:`font-mono text-2xl`,items:le.get()}))),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`}));A(()=>_(e,J,q))}),L(()=>{let e=b(Q,()=>({title:`Clock Countdown With Colons`,tab:te,preview:s(()=>(()=>{let e=b(X.Value,()=>({value:10,ariaLabel:`10`})),n=b(X.Value,()=>({value:24,digits:2,ariaLabel:`24`})),r=b(X.Value,()=>({value:t.value,digits:2,ariaLabel:String(t.value)}));return b(X,()=>({className:`font-mono text-2xl`,children:[e,`:`,n,`:`,r]}))})()),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`}));A(()=>_(e,ye,Y))}),L(()=>{let e=b(Q,()=>({title:`Large Text With Labels`,tab:ne,preview:s(()=>k(e=>{let r=_e().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,s=r.childNodes[1],c=s.parentNode,l=r.childNodes[2],u=l.parentNode,d=r.childNodes[3],f=d.parentNode,p=j(a);o(p,$,()=>({label:`days`,countdownClassName:`font-mono text-4xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:15,ariaLabel:`15`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(p,i);let m=j(c);o(m,$,()=>({label:`hours`,countdownClassName:`font-mono text-4xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:10,ariaLabel:`10`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(m,s);let h=j(u);return o(h,$,()=>({label:`min`,countdownClassName:`font-mono text-4xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:24,ariaLabel:`24`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(h,l),L(()=>{let e=b(X.Value,()=>({value:t.value,ariaLabel:String(t.value)})),n=b($,()=>({label:`sec`,countdownClassName:`font-mono text-4xl`,children:e}));A(()=>_(n,f,d))}),r})),code:`<div className="flex gap-5">
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
</div>`}));A(()=>_(e,be,Z))}),L(()=>{let e=b(Q,()=>({title:`Large Text With Labels Under`,tab:re,preview:s(()=>k(e=>{let r=ve().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,s=r.childNodes[1],c=s.parentNode,l=r.childNodes[2],u=l.parentNode,d=r.childNodes[3],f=d.parentNode,p=j(a);o(p,$,()=>({className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:15,ariaLabel:`15`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(p,i);let m=j(c);o(m,$,()=>({className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:10,ariaLabel:`10`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(m,s);let h=j(u);return o(h,$,()=>({className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:24,ariaLabel:`24`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(h,l),L(()=>{let e=b(X.Value,()=>({value:t.value,ariaLabel:String(t.value)})),n=b($,()=>({className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:e}));A(()=>_(n,f,d))}),r})),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`}));A(()=>_(e,Te,we))}),L(()=>{let e=b(Q,()=>({title:`In Boxes`,tab:ie,preview:s(()=>k(e=>{let r=ve().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=i.parentNode,s=r.childNodes[1],c=s.parentNode,l=r.childNodes[2],u=l.parentNode,d=r.childNodes[3],f=d.parentNode,p=j(a);o(p,$,()=>({className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:15,ariaLabel:`15`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),a.insertBefore(p,i);let m=j(c);o(m,$,()=>({className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:10,ariaLabel:`10`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(m,s);let h=j(u);return o(h,$,()=>({className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:(e,t,r)=>R(e,r,()=>n(Object.assign(e=>{let t=N();return D(()=>b(X.Value,()=>({value:24,ariaLabel:`24`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(h,l),L(()=>{let e=b(X.Value,()=>({value:t.value,ariaLabel:String(t.value)})),n=b($,()=>({className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:e}));A(()=>_(n,f,d))}),r})),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`}));A(()=>_(e,De,Ee))});let Ae=j(ke);return o(Ae,Se,()=>({rows:Ce})),ke.insertBefore(Ae,Oe),e});return b(oe,()=>({children:e}))})(),e=>z(()=>{})))};export{we as default};
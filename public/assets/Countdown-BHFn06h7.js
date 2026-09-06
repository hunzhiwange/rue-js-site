import{$t as e,At as t,Dn as n,E as r,Et as i,Mt as a,P as o,Pt as s,Q as c,Qt as l,T as u,Vt as d,Y as f,Zt as p,_n as m,_t as h,at as g,b as _,bn as v,ct as y,dt as b,et as x,ft as S,gn as C,gt as w,hn as T,jt as E,kn as D,kt as O,mn as k,nt as A,on as j,ot as ee,pn as M,qt as te,rt as ne,st as N,tn as P,ut as F,vn as I,vt as re,w as ie,wn as L,x as ae,xn as oe,xt as R}from"./rue-runtime-HIMg8Lz8.js";import{t as se}from"./Code-DpH7u0gk.js";import{t as ce}from"./tabs-C020zIXs.js";import{r as le}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";var z=I(`<span><!--rue:text-hole:0--></span>`),B=`HH:mm:ss`,ue=1e3/30,de=1e3,fe=[[`Y`,31536e6],[`M`,2592e6],[`D`,864e5],[`H`,36e5],[`m`,6e4],[`s`,1e3],[`S`,1]],pe=(e,t)=>t?`${e} ${t}`:e,V=e=>{if(e==null)return null;let t=e instanceof Date?e.getTime():new Date(e).getTime();return Number.isFinite(t)?t:null},H=e=>{let t=[],n=0;for(;n<e.length;){let r=e[n];if(r===`[`){let r=e.indexOf(`]`,n+1),i=r===-1?e.slice(n+1):e.slice(n+1,r);if(i){let e=t[t.length-1];e?.type===`literal`?e.content+=i:t.push({type:`literal`,content:i})}n=r===-1?e.length:r+1;continue}if(/[YMDHmsS]/.test(r)){let i=n+1;for(;i<e.length&&e[i]===r;)i+=1;t.push({type:`unit`,unit:r,digits:i-n}),n=i;continue}let i=n+1;for(;i<e.length&&e[i]!==`[`&&!/[YMDHmsS]/.test(e[i]);)i+=1;let a=e.slice(n,i);if(a){let e=t[t.length-1];e?.type===`literal`?e.content+=a:t.push({type:`literal`,content:a})}n=i}return t},U=(e,t)=>{let n=new Set;t.forEach(e=>{e.type===`unit`&&n.add(e.unit)});let r=Math.max(e,0),i={};return fe.forEach(([e,t])=>{if(!n.has(e))return;let a=Math.floor(r/t);i[e]=a,r-=a*t}),i},W=(e,t)=>typeof t==`number`&&t>0?t:e.includes(`S`)?ue:de,me=e=>`value`in e,G=(e,t)=>{let n=`--value: ${String(e)};`;return t!=null&&(n+=` --digits: ${String(t)};`),n},K=e=>typeof e==`string`?e.replace(/ /g,`\xA0`):e,q=e=>e.digits>1?e.digits:void 0,J=(e,t)=>t[e.unit]??0,Y=(e,t,n,r)=>{!e.style||typeof e.style.setProperty!=`function`||typeof e.setAttribute!=`function`||(e.style.setProperty(`--value`,String(t)),n==null?(e.style.removeProperty(`--digits`),e.removeAttribute(`data-countdown-digits`)):(e.style.setProperty(`--digits`,String(n)),e.setAttribute(`data-countdown-digits`,String(n))),e.setAttribute(`aria-live`,r),e.setAttribute(`aria-label`,String(t)),e.setAttribute(`data-countdown-value`,String(t)))},X=Object.assign(n=>{let r=v(`useSetup:0:0`,()=>{let t=P(0),r=null,i=!1,a=null,s=()=>{},c=()=>{r!=null&&(clearInterval(r),r=null)},l=()=>{let e=V(n.value);if(e==null)return t.value=0,s(),n.onChange&&n.onChange(void 0),c(),!1;let r=Math.max(e-Date.now(),0);return t.value=r,s(),n.onChange&&n.onChange(r),r<=0?(c(),i||(i=!0,n.onFinish&&n.onFinish()),!1):(i=!1,!0)},u=()=>{if(c(),n.value==null){t.value=0;return}l()&&(r=setInterval(l,W(n.format===void 0?B:n.format,n.interval)))};f(()=>`${V(n.value)??`invalid`}|${n.format===void 0?B:n.format}|${n.interval??``}`,()=>{i=!1,u()},{immediate:!0}),e(c);let d=o(()=>pe(`countdown`,n.className)),p=o(()=>!!(n.items&&n.items.length)),m=o(()=>!p.get()&&n.value!=null),h=o(()=>H(n.format===void 0?B:n.format)),g=o(()=>n.ariaLive??((n.format===void 0?B:n.format).includes(`S`)?`off`:`polite`));return s=()=>{let e=m.get(),n=h.get(),r=U(t.value,n),i=g.get();!a||!e||Array.from(a.children??[]).forEach(e=>{let t=e,a=Number(t.dataset.countdownTokenIndex),o=n[a];!o||o.type!==`unit`||Y(t,J(o,r),q(o),i)})},{remaining:t,stopTimer:c,syncRemaining:l,startTimer:u,resolvedClassName:d,hasItems:p,usesTimerMode:m,formatTokens:h,resolvedAriaLive:g,getTimerTokenValue:e=>J(e,U(t.value,h.get())),setRootElement:e=>{a=e,s()},timer:r,finished:i,rootElement:a,syncTimerDom:s}}),{remaining:a,stopTimer:l,syncRemaining:u,startTimer:p,resolvedClassName:m,hasItems:g,usesTimerMode:_,formatTokens:y,resolvedAriaLive:x,getTimerTokenValue:T,setRootElement:E}=r,{timer:k,finished:A,rootElement:j,syncTimerDom:ee}=r;return t(e=>{let r=z().content.cloneNode(!0).firstChild,a=r,o=r.childNodes[0],l=o.parentNode;return S(a,()=>E),L(()=>{c(a,m.get())}),L(()=>{let e=g.get()?(n.items??[]).map(e=>me(e)?t(()=>{let t=h(),n=re(`span`,t);b(t,n),L(()=>{let t=G(e.value,e.digits);i(n,t)}),L(()=>{R(n,`aria-live`,String(e.ariaLive??`polite`))}),L(()=>{R(n,`aria-label`,String(e.ariaLabel??String(e.value)))}),L(()=>{R(n,`data-countdown-value`,String(String(e.value)))}),L(()=>{O(n,e.digits==null?{}:{"data-countdown-digits":String(e.digits)},[`className`])}),L(()=>{c(n,e.className?e.className.trim():``)});let r=w(`rue:children:anchor`);return b(n,r),L(()=>{let t=e.children;D(()=>F(t,n,r))}),t},!0):K(e.content)):_.get()?y.get().map((e,t)=>e.type===`unit`?d(Object.assign(n=>{let r=C(`span`,n),a;L(()=>{let e=String(t);Object.is(a,e)||(a=e,e==null||e===!1?r.removeAttribute(`data-countdown-token-index`):r.setAttribute(`data-countdown-token-index`,String(e)))});let o;L(()=>{let t=G(T(e),q(e));Object.is(o,t)||(o=t,i(r,t))});let c;L(()=>{let e=x.get();Object.is(c,e)||(c=e,e==null||e===!1?r.removeAttribute(`aria-live`):r.setAttribute(`aria-live`,String(e)))});let l;L(()=>{let t=String(T(e));Object.is(l,t)||(l=t,t==null||t===!1?r.removeAttribute(`aria-label`):r.setAttribute(`aria-label`,String(t)))});let u;return L(()=>{let t=String(T(e));Object.is(u,t)||(u=t,t==null||t===!1?r.removeAttribute(`data-countdown-value`):r.setAttribute(`data-countdown-value`,String(t)))}),s(r,()=>q(e)==null?{}:{"data-countdown-digits":String(q(e))},[]),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})):K(e.content)):n.children;D(()=>F(e,l,o))}),r})},{Value:e=>{let n=g(e.ariaLabel),r=g(e.ariaLive),a=g(e.children),o=g(e.className),s=g(e.digits),l=g(e.value),u=o.get()?o.get().trim():``;return y(t(()=>{let e=h(),t=z().content.cloneNode(!0),o=t.firstChild,f=o,p=o.childNodes[0],g=p.parentNode;return e.appendChild(t),L(()=>{let e=G(l.get(),s.get());i(f,e)}),L(()=>{R(f,`aria-live`,String(r.get()===void 0?`polite`:r.get()))}),L(()=>{R(f,`aria-label`,String(n.get()??String(l.get())))}),L(()=>{R(f,`data-countdown-value`,String(String(l.get())))}),L(()=>{O(f,s.get()==null?{}:{"data-countdown-digits":String(s.get())},[`className`])}),L(()=>{c(f,u)}),A(g,p,()=>a.get()==null?{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=m(typeof String(l.get())==`string`||typeof String(l.get())==`number`||typeof String(l.get())==`bigint`?String(l.get()):``);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!0,create:()=>ee(()=>a.get())}),e},!0),e=>x(()=>{n.set(e.ariaLabel),r.set(e.ariaLive),a.set(e.children),o.set(e.className),s.set(e.digits),l.set(e.value)}),()=>e)}}),he=I(`<div class="space-y-4"><!--rue:opaque-hole:0--><button class="btn btn-sm btn-outline ml-3">重新开始</button></div>`),ge=I(`<div class="space-y-4"><!--rue:opaque-hole:0--><button class="btn btn-sm btn-outline ml-3">再来 10 秒</button></div>`),_e=I(`<div class="space-y-4"><!--rue:opaque-hole:0--><button class="btn btn-sm btn-outline ml-3">重置长倒计时</button></div>`),ve=I(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="text-sm opacity-70">最近一次 onChange: <!--rue:text-hole:1--> ms</div><div class="text-sm opacity-70">onFinish 状态: <!--rue:text-hole:2--></div><button class="btn btn-sm btn-outline">重置 10 秒示例</button></div>`),ye=I(`<div class="flex gap-5"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),be=I(`<div class="grid grid-flow-col gap-5 text-center auto-cols-max"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div>`),xe=I(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),Z=I(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),Se=I(`<div><!--rue:opaque-hole:0--><!--rue:text-hole:1--></div>`),Ce=I('<div class="max-w-none prose prose-sm md:prose-base"><h1>Countdown 倒计时</h1><p class="text-sm mt-3 mb-3">现在既能可以使用 `Countdown.Value` / `items` 进行静态拼装，也能直接传入目标时间并通过 `format`、`onChange`、`onFinish` 驱动完整倒计时。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><h2>组合方式</h2><p class="text-sm">这组示例使用 Rue 组合式写法，用于展示 `Countdown.Value` 与 `items` 的自由排布能力。</p><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><!--rue:opaque-hole:11--><h2>API</h2><!--rue:opaque-hole:12--></div>'),Q=e=>t(t=>{let n=xe().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,s=n.childNodes[1],c=s.parentNode,l=n.childNodes[2],f=l.parentNode;u({parent:i,before:r},()=>e.title,()=>({})),A(o,a,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>d(Object.assign(t=>{let n=C(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=k(`rue:compiled-slot`);return M(n,r),u({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>d(Object.assign(e=>{let t=h();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let p=T(c);return N(p,ce,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),c.insertBefore(p,s),L(()=>{let t=e.tab.value===`preview`?e.preview():ne(se,()=>({className:`mt-2`,lang:`tsx`,code:e.code}));D(()=>F(t,f,l))}),n}),we=e=>{let t=g(e.rows);return y(d(Object.assign(e=>{let r=Z().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=I(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return L(()=>{let e=t.get()||[];s=ie(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return ae(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=m(``);a.insertBefore(f,n),a.removeChild(n);let p;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}let g=m(``);l.insertBefore(g,c),l.removeChild(c);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=m(``);d.insertBefore(v,u),d.removeChild(u);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>_(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{t.set(e.rows)}),()=>e)},$=e=>{let t=g(e.children),n=g(e.className),i=g(e.countdownClassName),a=g(e.label);return y(d(Object.assign(e=>{let o=Se().content.cloneNode(!0).firstChild,s=o,c=o.childNodes[0],l=c.parentNode,f=o.childNodes[1],p=f.parentNode,g;L(()=>{let e=n.get(),t=e==null?``:String(e);Object.is(g,t)||(g=t,s.className=t)});let _=T(l);N(_,X,()=>({className:i.get(),children:(e,n,i)=>r(e,i,()=>d(Object.assign(e=>{let n=h(),r=k(`rue:compiled-slot`);return M(n,r),u({parent:n,before:r},()=>t.get(),()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})),l.insertBefore(_,c);let v=m(``);return p.insertBefore(v,f),p.removeChild(f),oe(v,()=>a.get()),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),e=>x(()=>{t.set(e.children),n.set(e.className),i.set(e.countdownClassName),a.set(e.label)}),()=>e)},Te=[{prop:`className`,description:`追加到 Rue countdown 根节点的视觉类名。`,type:`string`,defaultValue:`-`},{prop:`value`,description:`目标时间戳、Date 或可解析时间字符串；传入后启用自动倒计时模式。`,type:`number | string | Date`,defaultValue:`-`},{prop:`format`,description:"按常见倒计时组件的格式拆分时间段，支持 `[]` 保持字面量。",type:`string`,defaultValue:`HH:mm:ss`},{prop:`interval`,description:`自定义刷新间隔；含毫秒位时默认约 33ms，否则默认 1000ms。`,type:`number`,defaultValue:`auto`},{prop:`ariaLive`,description:`控制自动倒计时模式下每个数值段的播报策略。`,type:`'polite' | 'off' | 'assertive'`,defaultValue:`秒级 polite，毫秒 off`},{prop:`onChange`,description:`自动倒计时每次刷新时返回剩余毫秒数。`,type:`(remaining?: number) => void`,defaultValue:`-`},{prop:`onFinish`,description:`倒计时归零时触发一次。`,type:`() => void`,defaultValue:`-`},{prop:`items`,description:`数据驱动的文本/数值混合渲染，适合完全自定义排布。`,type:`CountdownItem[]`,defaultValue:`-`}],Ee=()=>{let n=P(59),i=null,s=P(Date.now()+36e6+144e4+59e3),u=P(Math.max(Math.floor((s.value-Date.now())/1e3),0)),f=P(Math.floor(u.value/3600)),m=P(Math.floor(u.value%3600/60)),g=P(u.value%60),_=P(Date.now()+36e6+144e4+59e3),v=P(Date.now()+1e4),b=P(Date.now()+1728e5+108e5+45e3),S=P(Date.now()+1e4),C=P(`计时中`),w=P(1e4),O=()=>{let e=Math.max(Math.floor((s.value-Date.now())/1e3),0);u.value=e,f.value=Math.floor(e/3600),m.value=Math.floor(e%3600/60),g.value=e%60},k=()=>{i!=null&&(clearInterval(i),i=null)},A=()=>{i??=(O(),setInterval(()=>{n.value=n.value>0?n.value-1:59,O()},1e3))};p(()=>{A()}),e(k);let ee=P(`preview`),M=P(`preview`),I=P(`preview`),re=P(`preview`),ie=P(`preview`),ae=P(`preview`),oe=P(`preview`),R=P(`preview`),se=P(`preview`),ce=P(`preview`),z=P(`preview`),B=P(`preview`),ue=o(()=>[{value:10},{content:`h`},{value:24,digits:2},{content:`m`},{value:n.value,digits:2},{content:`s`}]),de=()=>{_.value=Date.now()+36e6+144e4+59e3},fe=()=>{v.value=Date.now()+1e4},pe=()=>{b.value=Date.now()+1728e5+108e5+45e3},V=()=>{C.value=`计时中`,w.value=1e4,S.value=Date.now()+1e4};return te(()=>y((()=>{let e=t(()=>{let e=h(),i=Ce().content.cloneNode(!0),o=i.firstChild,s=o.childNodes[2],p=s.parentNode,y=o.childNodes[3],x=y.parentNode,O=o.childNodes[4],k=O.parentNode,A=o.childNodes[5],te=A.parentNode,P=o.childNodes[8],le=P.parentNode,H=o.childNodes[9],U=H.parentNode,W=o.childNodes[10],me=W.parentNode,G=o.childNodes[11],K=G.parentNode,q=o.childNodes[12],J=q.parentNode,Y=o.childNodes[13],xe=Y.parentNode,Z=o.childNodes[14],Se=Z.parentNode,Ee=o.childNodes[15],De=Ee.parentNode,Oe=o.childNodes[17],ke=Oe.parentNode;e.appendChild(i),L(()=>{let e=a(Q,()=>({title:`Target Time Countdown`,summary:`直接传入目标时间戳与 format，组件内部自动计算剩余时间。`,tab:se,preview:j(()=>t(e=>{let t=he().content.cloneNode(!0).firstChild,n=t.childNodes[1],r=t.childNodes[0],i=r.parentNode;c(n,`btn btn-sm btn-outline ml-3`);let o=e=>{let t=de;typeof t==`function`&&t(e)};return n.addEventListener(`click`,o),l(()=>n.removeEventListener(`click`,o)),L(()=>{let e=a(X,()=>({key:_.value,className:`font-mono text-4xl`,value:_.value,format:`HH:mm:ss`}));D(()=>F(e,i,r))}),t})),code:`const deadline = Date.now() + 1000 * 60 * 60 * 10 + 1000 * 60 * 24 + 1000 * 59

<Countdown
  className="font-mono text-4xl"
  value={deadline}
  format="HH:mm:ss"
/>`}));D(()=>F(e,p,s))}),L(()=>{let e=a(Q,()=>({title:`Millisecond Precision`,summary:`包含 S 时会自动切到更高频率刷新，适合展示毫秒级结尾。`,tab:ce,preview:j(()=>t(e=>{let t=ge().content.cloneNode(!0).firstChild,n=t.childNodes[1],r=t.childNodes[0],i=r.parentNode;c(n,`btn btn-sm btn-outline ml-3`);let o=e=>{let t=fe;typeof t==`function`&&t(e)};return n.addEventListener(`click`,o),l(()=>n.removeEventListener(`click`,o)),L(()=>{let e=a(X,()=>({key:v.value,className:`font-mono text-3xl`,value:v.value,format:`HH:mm:ss:SSS`,interval:250}));D(()=>F(e,i,r))}),t})),code:`const preciseDeadline = Date.now() + 10 * 1000

<Countdown
  className="font-mono text-3xl"
  value={preciseDeadline}
  format="HH:mm:ss:SSS"
  interval={250}
/>`}));D(()=>F(e,x,y))}),L(()=>{let e=a(Q,()=>({title:`Day Level Format`,summary:`支持把单位文字写进 format，并自动拆成数字段与纯文本分隔符。`,tab:z,preview:j(()=>t(e=>{let t=_e().content.cloneNode(!0).firstChild,n=t.childNodes[1],r=t.childNodes[0],i=r.parentNode;c(n,`btn btn-sm btn-outline ml-3`);let o=e=>{let t=pe;typeof t==`function`&&t(e)};return n.addEventListener(`click`,o),l(()=>n.removeEventListener(`click`,o)),L(()=>{let e=a(X,()=>({key:b.value,className:`font-mono text-2xl`,value:b.value,format:`D [days] H [hours] m [minutes] s [seconds]`}));D(()=>F(e,i,r))}),t})),code:`const longDeadline =
  Date.now() + 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000 + 45 * 1000

<Countdown
  className="font-mono text-2xl"
  value={longDeadline}
  format="D [days] H [hours] m [minutes] s [seconds]"
/>`}));D(()=>F(e,k,O))}),L(()=>{let e=a(Q,()=>({title:`Callbacks`,summary:`onChange 返回剩余毫秒数，onFinish 只在归零时触发一次。`,tab:B,preview:j(()=>t(e=>{let t=ve().content.cloneNode(!0).firstChild,n=t.childNodes[3],r=t.childNodes[0],i=r.parentNode,o=t.childNodes[1].childNodes[1],s=o.parentNode,u=t.childNodes[2].childNodes[1],d=u.parentNode;c(n,`btn btn-sm btn-outline`);let f=e=>{let t=V;typeof t==`function`&&t(e)};return n.addEventListener(`click`,f),l(()=>n.removeEventListener(`click`,f)),L(()=>{let e=a(X,()=>({key:S.value,className:`font-mono text-3xl`,value:S.value,format:`s.SSS`,interval:250,onChange:e=>{w.value=Math.max(Math.round(e??0),0)},onFinish:()=>{C.value=`已完成`}}));D(()=>F(e,i,r))}),L(()=>{let e=w.value;D(()=>F(e,s,o))}),L(()=>{let e=C.value;D(()=>F(e,d,u))}),t})),code:`const target = Date.now() + 10 * 1000
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
/>`}));D(()=>F(e,te,A))}),L(()=>{let e=a(Q,()=>({title:`Countdown`,tab:ee,preview:j(()=>(()=>{let e=a(X.Value,()=>({value:u.value,ariaLabel:`${u.value} seconds remaining`}));return a(X,()=>({children:e}))})()),code:`const remaining = ref(10 * 60 * 60 + 24 * 60 + 59)

<Countdown>
  <Countdown.Value value={remaining.value} ariaLabel={\`\${remaining.value} seconds remaining\`} />
</Countdown>`}));D(()=>F(e,le,P))}),L(()=>{let e=a(Q,()=>({title:`Large Text With 2 Digits`,tab:M,preview:j(()=>(()=>{let e=a(X.Value,()=>({value:g.value,digits:2,ariaLabel:`${g.value} seconds remaining`}));return a(X,()=>({className:`font-mono text-6xl`,children:e}))})()),code:`const parts = computed(() => {
  const totalSeconds = Math.max(Math.floor(remaining.value), 0)
  return { seconds: totalSeconds % 60 }
})

<Countdown className="font-mono text-6xl">
  <Countdown.Value value={parts.get().seconds} digits={2} ariaLabel={\`\${parts.get().seconds} seconds remaining\`} />
</Countdown>`}));D(()=>F(e,U,H))}),L(()=>{let e=a(Q,()=>({title:`Clock Countdown`,tab:I,preview:j(()=>(()=>{let e=a(X.Value,()=>({value:f.value,ariaLabel:`${f.value} hours`})),t=a(X.Value,()=>({value:m.value,digits:2,ariaLabel:`${m.value} minutes`})),n=a(X.Value,()=>({value:g.value,digits:2,ariaLabel:`${g.value} seconds`}));return a(X,()=>({className:`font-mono text-2xl`,children:[e,`h`,t,`m`,n,`s`]}))})()),code:`const parts = computed(() => {
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
</Countdown>`}));D(()=>F(e,me,W))}),L(()=>{let e=a(Q,()=>({title:`Countdown 通过数据渲染（数组，组件内部）`,summary:`items 适合在业务层先拼好数字段与分隔符，再一次性交给 Countdown。`,tab:R,preview:j(()=>ne(X,()=>({className:`font-mono text-2xl`,items:ue.get()}))),code:`const items = [
  { value: 10 },
  { content: 'h' },
  { value: 24, digits: 2 },
  { content: 'm' },
  { value: 59, digits: 2 },
  { content: 's' },
]

<Countdown className="font-mono text-2xl" items={items} />`}));D(()=>F(e,K,G))}),L(()=>{let e=a(Q,()=>({title:`Clock Countdown With Colons`,tab:re,preview:j(()=>(()=>{let e=a(X.Value,()=>({value:10,ariaLabel:`10`})),t=a(X.Value,()=>({value:24,digits:2,ariaLabel:`24`})),r=a(X.Value,()=>({value:n.value,digits:2,ariaLabel:String(n.value)}));return a(X,()=>({className:`font-mono text-2xl`,children:[e,`:`,t,`:`,r]}))})()),code:`<Countdown className="font-mono text-2xl">
  <Countdown.Value value={10} ariaLabel="10" />:
  <Countdown.Value value={24} digits={2} ariaLabel="24" />:
  <Countdown.Value value={59} digits={2} ariaLabel="59" />
</Countdown>`}));D(()=>F(e,J,q))}),L(()=>{let e=a(Q,()=>({title:`Large Text With Labels`,tab:ie,preview:j(()=>t(e=>{let t=ye().content.cloneNode(!0).firstChild,i=t.childNodes[0],o=i.parentNode,s=t.childNodes[1],c=s.parentNode,l=t.childNodes[2],u=l.parentNode,f=t.childNodes[3],p=f.parentNode,m=T(o);N(m,$,()=>({label:`days`,countdownClassName:`font-mono text-4xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:15,ariaLabel:`15`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(m,i);let g=T(c);N(g,$,()=>({label:`hours`,countdownClassName:`font-mono text-4xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:10,ariaLabel:`10`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(g,s);let _=T(u);return N(_,$,()=>({label:`min`,countdownClassName:`font-mono text-4xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:24,ariaLabel:`24`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(_,l),L(()=>{let e=a(X.Value,()=>({value:n.value,ariaLabel:String(n.value)})),t=a($,()=>({label:`sec`,countdownClassName:`font-mono text-4xl`,children:e}));D(()=>F(t,p,f))}),t})),code:`<div className="flex gap-5">
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
</div>`}));D(()=>F(e,xe,Y))}),L(()=>{let e=a(Q,()=>({title:`Large Text With Labels Under`,tab:ae,preview:j(()=>t(e=>{let t=be().content.cloneNode(!0).firstChild,i=t.childNodes[0],o=i.parentNode,s=t.childNodes[1],c=s.parentNode,l=t.childNodes[2],u=l.parentNode,f=t.childNodes[3],p=f.parentNode,m=T(o);N(m,$,()=>({className:`flex flex-col`,label:`days`,countdownClassName:`font-mono text-5xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:15,ariaLabel:`15`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(m,i);let g=T(c);N(g,$,()=>({className:`flex flex-col`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:10,ariaLabel:`10`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(g,s);let _=T(u);return N(_,$,()=>({className:`flex flex-col`,label:`min`,countdownClassName:`font-mono text-5xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:24,ariaLabel:`24`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(_,l),L(()=>{let e=a(X.Value,()=>({value:n.value,ariaLabel:String(n.value)})),t=a($,()=>({className:`flex flex-col`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:e}));D(()=>F(t,p,f))}),t})),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`}));D(()=>F(e,Se,Z))}),L(()=>{let e=a(Q,()=>({title:`In Boxes`,tab:oe,preview:j(()=>t(e=>{let t=be().content.cloneNode(!0).firstChild,i=t.childNodes[0],o=i.parentNode,s=t.childNodes[1],c=s.parentNode,l=t.childNodes[2],u=l.parentNode,f=t.childNodes[3],p=f.parentNode,m=T(o);N(m,$,()=>({className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`days`,countdownClassName:`font-mono text-5xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:15,ariaLabel:`15`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),o.insertBefore(m,i);let g=T(c);N(g,$,()=>({className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`hours`,countdownClassName:`font-mono text-5xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:10,ariaLabel:`10`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(g,s);let _=T(u);return N(_,$,()=>({className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`min`,countdownClassName:`font-mono text-5xl`,children:(e,t,n)=>r(e,n,()=>d(Object.assign(e=>{let t=h();return E(()=>a(X.Value,()=>({value:24,ariaLabel:`24`}))).__rue_compiled_mount(t),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(_,l),L(()=>{let e=a(X.Value,()=>({value:n.value,ariaLabel:String(n.value)})),t=a($,()=>({className:`flex flex-col p-2 bg-neutral rounded-box text-neutral-content`,label:`sec`,countdownClassName:`font-mono text-5xl`,children:e}));D(()=>F(t,p,f))}),t})),code:`<div className="grid grid-flow-col gap-5 text-center auto-cols-max">
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
</div>`}));D(()=>F(e,De,Ee))});let Ae=T(ke);return N(Ae,we,()=>({rows:Te})),ke.insertBefore(Ae,Oe),e});return a(le,()=>({children:e}))})(),e=>x(()=>{})))};export{Ee as default};
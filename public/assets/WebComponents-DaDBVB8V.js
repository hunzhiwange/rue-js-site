import{At as e,Bt as t,Dt as n,E as r,F as i,I as a,It as o,Jt as s,L as c,Lt as l,Qt as u,Rt as d,Tt as f,U as p,Ut as m,V as h,Vt as g,W as _,Wt as v,_ as y,_n as b,_t as x,an as S,at as C,dn as w,en as T,f as ee,fn as E,gn as D,gt as O,h as te,hn as k,in as A,it as j,mn as M,p as ne,pn as N,q as P,qt as re,sn as F,st as I,tt as L,u as R,v as ie,vn as ae,vt as z,xt as oe,y as B,yn as V,yt as H,z as se,zt as U}from"./rue-runtime-Cv6BZekS.js";import{t as W}from"./Code-BzFVdc3U.js";import{r as G}from"./SidebarPlaygroundExample-rFyhXfC_.js";var ce=V(`<div class="bridgeSlot" data-testid="ce-scoped-slot"><!--rue:text-hole:0--> / <!--rue:text-hole:1--> / <!--rue:text-hole:2--></div>`),le=V(`<p class="lightMeta">实例 #<!--rue:text-hole:0--> · <!--rue:text-hole:1--> · <!--rue:text-hole:2--></p>`),ue=V(`<article><header class="hero"><div><p class="eyebrow">Shadow Root / Slot / CustomEvent</p><h2 class="title"><!--rue:text-hole:0--></h2><p class="subtitle">实例 #<!--rue:text-hole:1--> · <!--rue:text-hole:2--> · <!--rue:text-hole:3--></p></div><div class="actions"><button type="button" class="button primary">派发 save</button><button type="button" class="button">派发 pulse</button></div></header><div class="grid"><section class="panel"><div class="metricValue">rue:direct-text</div><div class="metricLabel">这个数值来自宿主上的 el.props.count</div><div class="meter"><div class="meterFill"></div></div><div class="chips"><!--rue:text-hole:5--></div></section><section class="panel"><p class="slotTitle">命名 Slot</p><slot name="meta"></slot><div></div><p class="slotTitle">默认 Slot</p><slot></slot></section><section class="panel"><p class="slotTitle">Rue scoped slot / Context</p><div class="bridgeBox"><div class="bridgeContext" data-testid="ce-context">Context: <!--rue:text-hole:6--></div><!--rue:opaque-hole:7--></div></section></div><footer class="footer"><span>preset: <!--rue:text-hole:8--></span><span>rue:direct-text</span><span><!--rue:text-hole:10--></span></footer></article>`),de=V(`<div><div><p class="lightTitle">rue:direct-text</p><!--rue:opaque-hole:1--></div><div class="lightValue"><!--rue:text-hole:2--> events / <!--rue:text-hole:3--> tags</div><button type="button" class="lightButton">emit</button></div>`),K=V(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">原生 Web Components</h1>`),q=V(`<p class="text-base-content/70 max-w-4xl leading-7">这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。</p>`),J=V(`<div role="tablist" class="tabs tabs-box mt-4"><button role="tab">效果</button><button role="tab">代码</button></div>`),fe=V(`<div><div class="grid gap-6 items-start"><div class="card bg-base-100 shadow-xl border border-base-300"><div class="card-body gap-5"><div><p class="text-xs uppercase tracking-[0.28em] text-base-content/45">Preset</p><div class="mt-3 flex w-full gap-2"><!--rue:text-hole:0--></div></div><label class="floating-label"><input class="input input-bordered w-full"><span>panel-title attribute</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>host.props.tags（逗号分隔）</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>默认 slot 文案</span></label><div class="grid gap-3 sm:grid-cols-2"><fieldset class="fieldset"><legend class="fieldset-legend">accent attribute</legend><select class="select select-bordered"><option value="teal">teal</option><option value="amber">amber</option><option value="rose">rose</option></select></fieldset><fieldset class="fieldset"><legend class="fieldset-legend">light label attribute</legend><input class="input input-bordered"></fieldset></div><div><div class="flex items-center justify-between text-sm mb-2"><span>host.props.count</span><span class="font-semibold">rue:direct-text</span></div><input type="range" min="1" max="15" class="range range-primary"></div><div class="grid gap-3 sm:grid-cols-2"><label class="label cursor-pointer justify-start gap-3"><input type="checkbox" class="toggle toggle-primary"><span class="label-text">host.props.busy</span></label><label class="label cursor-pointer justify-start gap-3"><input type="checkbox" class="toggle toggle-secondary"><span class="label-text">host.props.config.compact</span></label></div><div class="grid gap-2 sm:grid-cols-2"><button class="btn btn-primary">追加 tag</button><button class="btn btn-outline">删除最后一个 tag</button><button class="btn btn-secondary">count + 2</button><button class="btn btn-ghost">移除 title attribute</button></div></div></div><div class="space-y-6"><div class="card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden"><div class="card-body gap-5"><div class="flex flex-wrap items-center justify-between gap-4"><div><p class="text-xs uppercase tracking-[0.28em] text-base-content/45">Live Preview</p><h2 class="text-2xl font-semibold mt-2">Shadow + Light 双宿主联动</h2></div><div class="stats stats-vertical lg:stats-horizontal shadow bg-base-100"><div class="stat py-3 px-4"><div class="stat-title">shadow configureApp</div><div class="stat-value text-lg">rue:direct-text</div></div><div class="stat py-3 px-4"><div class="stat-title">light configureApp</div><div class="stat-value text-lg">rue:direct-text</div></div><div class="stat py-3 px-4"><div class="stat-title">mounted instances</div><div class="stat-value text-lg"><!--rue:text-hole:4--></div></div></div></div><div data-testid="ce-latest-event"><span><!--rue:text-hole:5--></span></div><!--rue:opaque-hole:6--></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-4"><div class="flex items-center justify-between gap-3"><h3 class="card-title text-lg">运行时诊断</h3><span class="badge badge-primary badge-outline">nonce / styles / mode</span></div><ul class="list bg-base-100 rounded-box"><li class="list-row"><div class="font-medium">shadow style tags</div><div class="text-right">rue:direct-text</div></li><li class="list-row"><div class="font-medium">shadow nonce</div><div class="text-right break-all">rue:direct-text</div></li><li class="list-row"><div class="font-medium">light style tags</div><div class="text-right">rue:direct-text</div></li><li class="list-row"><div class="font-medium">hook 期望</div><div class="text-right">shadow / light</div></li></ul></div></div><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-4"><div class="flex items-center justify-between gap-3"><h3 class="card-title text-lg">事件桥接日志</h3><button class="btn btn-sm btn-ghost">清空</button></div><div class="space-y-3 max-h-[320px] overflow-auto pr-1"><!--rue:text-hole:10--></div></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-3"><h3 class="card-title text-lg">shadow host.props 快照</h3><pre class="text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4"><!--rue:text-hole:11--></pre></div></div><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-3"><h3 class="card-title text-lg">light host.props 快照</h3><pre class="text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4"><!--rue:text-hole:12--></pre></div></div></div></div></div></div>`),Y=V(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),pe=I(0),me=I(0),he=I(0),ge=I(0),X=0,Z=0,_e=new WeakMap,ve=new WeakMap,ye=`rue-demo-nonce`,Q=`rue-shadow-console`,$=`rue-light-signal`,be=o(`provider:missing`),xe=(e,n,r)=>{let i=z(O(e,`children`)),a=z(O(e,`value`));return l(be,()=>a.get()),p(v(e=>{let n=M(),r=N(`rue:compiled-slot`);E(n,r),t({parent:n,before:r},()=>i.get(),()=>({}));let a=D(``),o=D(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]}),e=>T(()=>{i.set(e.children),a.set(e.value)}),()=>x(e))},Se=[`
    :host {
      display: block;
      color: #e5eef3;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    }

    .frame {
      background:
        radial-gradient(circle at top right, rgba(255, 255, 255, 0.16), transparent 34%),
        linear-gradient(135deg, #0f172a, #111827 60%, #1f2937);
      border: 1px solid rgba(148, 163, 184, 0.22);
      border-radius: 24px;
      padding: 20px;
      box-shadow: 0 20px 45px rgba(15, 23, 42, 0.24);
      overflow: hidden;
    }

    .frame[data-busy='yes'] {
      box-shadow: 0 24px 52px rgba(225, 29, 72, 0.26);
    }

    .frame[data-accent='teal'] {
      --accent: #2dd4bf;
      --accent-soft: rgba(45, 212, 191, 0.16);
    }

    .frame[data-accent='amber'] {
      --accent: #f59e0b;
      --accent-soft: rgba(245, 158, 11, 0.16);
    }

    .frame[data-accent='rose'] {
      --accent: #fb7185;
      --accent-soft: rgba(251, 113, 133, 0.16);
    }

    .hero {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      align-items: flex-start;
      justify-content: space-between;
    }

    .eyebrow {
      margin: 0 0 6px;
      font-size: 11px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.72);
    }

    .title {
      margin: 0;
      font-size: 28px;
      line-height: 1.1;
      color: white;
    }

    .subtitle {
      margin: 8px 0 0;
      color: rgba(226, 232, 240, 0.84);
      font-size: 13px;
    }

    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .button {
      appearance: none;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.06);
      color: white;
      padding: 10px 14px;
      font-size: 13px;
      cursor: pointer;
      transition:
        transform 180ms ease,
        border-color 180ms ease,
        background 180ms ease;
    }

    .button:hover {
      transform: translateY(-1px);
      border-color: rgba(255, 255, 255, 0.32);
      background: rgba(255, 255, 255, 0.12);
    }

    .button.primary {
      background: var(--accent);
      color: #04111b;
      border-color: transparent;
      font-weight: 700;
    }

    .grid {
      margin-top: 18px;
      display: grid;
      gap: 14px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .frame.compact .grid {
      grid-template-columns: 1fr;
    }

    .panel {
      border: 1px solid rgba(148, 163, 184, 0.16);
      background: rgba(15, 23, 42, 0.48);
      border-radius: 18px;
      padding: 14px;
    }

    .metricValue {
      font-size: 44px;
      font-weight: 800;
      color: white;
      line-height: 1;
    }

    .metricLabel {
      margin-top: 4px;
      font-size: 12px;
      color: rgba(226, 232, 240, 0.76);
    }

    .meter {
      margin-top: 14px;
      height: 10px;
      border-radius: 999px;
      background: rgba(148, 163, 184, 0.18);
      overflow: hidden;
    }

    .meterFill {
      height: 100%;
      border-radius: inherit;
      background: linear-gradient(90deg, var(--accent), white);
      transition: width 180ms ease;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 14px;
    }

    .chip {
      display: inline-flex;
      align-items: center;
      border-radius: 999px;
      padding: 6px 10px;
      font-size: 12px;
      background: var(--accent-soft);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.12);
    }

    .chip.muted {
      background: rgba(148, 163, 184, 0.18);
      color: rgba(226, 232, 240, 0.76);
    }

    .slotTitle {
      margin: 0 0 10px;
      font-size: 12px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.6);
    }

    .bridgeBox {
      display: grid;
      gap: 10px;
    }

    .bridgeContext {
      border-radius: 14px;
      padding: 10px 12px;
      background: rgba(255, 255, 255, 0.08);
      color: rgba(226, 232, 240, 0.86);
      font-size: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .bridgeSlot {
      border-radius: 14px;
      padding: 10px 12px;
      background: var(--accent-soft);
      color: white;
      font-size: 12px;
      border: 1px solid rgba(255, 255, 255, 0.14);
    }

    .footer {
      margin-top: 16px;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      font-size: 12px;
      color: rgba(226, 232, 240, 0.7);
    }
  `,`
    ::slotted([slot='meta']) {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-radius: 999px;
      padding: 6px 12px;
      border: 1px solid rgba(255, 255, 255, 0.16);
      background: rgba(255, 255, 255, 0.08);
      font-size: 12px;
      color: white;
    }

    ::slotted(*) {
      color: inherit;
    }
  `],Ce=[`
    :host {
      display: block;
    }

    .lightShell {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto auto;
      align-items: center;
      gap: 12px;
      border-radius: 20px;
      padding: 14px 16px;
      border: 1px solid rgba(15, 23, 42, 0.08);
      background: white;
      box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08);
    }

    .lightShell.tone-teal {
      border-color: rgba(13, 148, 136, 0.2);
      background: linear-gradient(135deg, rgba(240, 253, 250, 0.96), white);
    }

    .lightShell.tone-amber {
      border-color: rgba(217, 119, 6, 0.2);
      background: linear-gradient(135deg, rgba(255, 251, 235, 0.96), white);
    }

    .lightShell.tone-rose {
      border-color: rgba(225, 29, 72, 0.18);
      background: linear-gradient(135deg, rgba(255, 241, 242, 0.98), white);
    }

    .lightTitle {
      margin: 0;
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
    }

    .lightMeta {
      margin-top: 4px;
      font-size: 12px;
      color: rgba(15, 23, 42, 0.64);
    }

    .lightValue {
      font-size: 13px;
      font-weight: 700;
      color: #334155;
    }

    .lightButton {
      appearance: none;
      border: 0;
      border-radius: 999px;
      background: #0f172a;
      color: white;
      padding: 8px 12px;
      cursor: pointer;
      font-size: 12px;
    }
  `],we=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Te=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),Ee=e=>e&&typeof e==`object`?e:void 0,De=e=>Ee(e.config)?.compact===!0,Oe=e=>{let t=Ee(e.config)?.preset;return typeof t==`string`?t:`manual`},ke=e=>e?_e.get(e)||(X+=1,he.value+=1,_e.set(e,X),X):0,Ae=e=>e?ve.get(e)||(Z+=1,ge.value+=1,ve.set(e,Z),Z):0,je=e=>Number(Ee(e.metrics)?.events??0),Me=e=>Number(Ee(e.metrics)?.tags??0),Ne=e=>e,Pe=(e,n,r)=>{let i=ie(),a=B(),o=L(()=>Ae(i));return w(()=>o.get()),v(e=>{let n=le().content.cloneNode(!0).firstChild,r=n.childNodes[1],s=r.parentNode,c=n.childNodes[3],l=c.parentNode,u=n.childNodes[5],d=u.parentNode;return t({parent:s,before:r},()=>U(o.get()),()=>({})),t({parent:l,before:c},()=>U(i?.tagName.toLowerCase()??`unknown-host`),()=>({})),m(d,u,()=>a?{__rue_compiled_branch_key:!0,create:()=>H(e=>{let t=D(`shadow-root`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>H(e=>{let t=D(`light-dom`);return[t,t]})}),[n,n]})},Fe=(e,n,o)=>{let s=ie(),l=B(),u=d(be),f=c(e),p=L(()=>ke(s));w(()=>p.get());let _=L(()=>Number(O(e,`count`)??0));_.get();let y=_,b=L(()=>String(O(e,`accent`)??`teal`));b.get();let S=L(()=>String(O(e,`panelTitle`)??`Shadow console`));S.get();let C=L(()=>Array.isArray(O(e,`tags`))?O(e,`tags`):[]);C.get();let T=L(()=>O(e,`busy`)===!0);T.get();let j=L(()=>`${Math.max(8,Math.min(y.get()*9,100))}%`);return j.get(),v(n=>{let o=ue().content.cloneNode(!0).firstChild,c=o,d=o.childNodes[0].childNodes[1].childNodes[0],y=o.childNodes[0].childNodes[1].childNodes[1],w=o.childNodes[1].childNodes[0].childNodes[2].childNodes[0],O=o.childNodes[1].childNodes[1].childNodes[2],P=o.childNodes[0].childNodes[0].childNodes[1].childNodes[0],I=P.parentNode,L=o.childNodes[0].childNodes[0].childNodes[2].childNodes[1],ie=L.parentNode,ae=o.childNodes[0].childNodes[0].childNodes[2].childNodes[3],oe=ae.parentNode,B=o.childNodes[0].childNodes[0].childNodes[2].childNodes[5],V=B.parentNode,se=o.childNodes[1].childNodes[0].childNodes[0].childNodes[0],W=se.parentNode,G=o.childNodes[1].childNodes[0].childNodes[3].childNodes[0],ce=G.parentNode,le=o.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[1],de=le.parentNode,K=o.childNodes[1].childNodes[2].childNodes[1].childNodes[1],q=K.parentNode,J=o.childNodes[2].childNodes[0].childNodes[1],fe=J.parentNode,Y=o.childNodes[2].childNodes[1].childNodes[0],pe=Y.parentNode,me=o.childNodes[2].childNodes[2].childNodes[0],he=me.parentNode,ge=N(`rue:text-hole:4`);W.replaceChild(ge,se);let X=N(`rue:text-hole:9`);pe.replaceChild(X,Y);let Z;A(()=>{let t=`frame ${De(x(e))?`compact`:``}`,n=t===!1||t==null?``:String(t);Object.is(Z,n)||(Z=n,c.setAttribute(`class`,n))});let _e;A(()=>{let e=b.get();Object.is(_e,e)||(_e=e,e==null?c.removeAttribute(`data-accent`):c.setAttribute(`data-accent`,String(e)))});let ve;A(()=>{let e=T.get()?`yes`:`no`;Object.is(ve,e)||(ve=e,e==null?c.removeAttribute(`data-busy`):c.setAttribute(`data-busy`,String(e)))}),d.setAttribute(`type`,`button`),d.setAttribute(`class`,`button primary`),F(R(n,d,`click`,()=>()=>{f(`save`,{mountId:p.get(),panelTitle:S.get(),count:_.get(),tags:C.get(),busy:T.get()},{host:s?.tagName.toLowerCase()??`unknown`,rootMode:l?`shadow`:`light`})})),y.setAttribute(`type`,`button`),y.setAttribute(`class`,`button`),F(R(n,y,`click`,()=>()=>{f(`pulse`,_.get()+1,b.get())})),w.setAttribute(`class`,`meterFill`);let ye;A(()=>{let e=j.get(),t=e===!1||e==null?``:String(e);Object.is(ye,t)||(ye=t,w.style.width=t)}),Object.assign(O.style,{height:`12px`}),t({parent:I,before:P},()=>U(S.get()),()=>({})),t({parent:ie,before:L},()=>U(p.get()),()=>({})),t({parent:oe,before:ae},()=>U(s?.tagName.toLowerCase()??`unknown-host`),()=>({})),m(V,B,()=>l?{__rue_compiled_branch_key:!0,create:()=>H(e=>{let t=D(`shadow-root 已开启`);return[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>H(e=>{let t=D(`light-dom`);return[t,t]})}),t({parent:W,before:ge},()=>U(_.get()),()=>({})),m(ce,G,()=>C.get().length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let t=M(),n=N(`rue:list:end`);E(t,n);let r=[];re(()=>{let e=C.get()||[];r=te(n.parentNode,n,r,e,(e,t)=>e,(e,t)=>{let n=z(e);return ne((e,t,r)=>{let o=()=>i(e=>{let t=k(`span`,e);t.setAttribute(`class`,`chip`);let r=D(``);return E(t,r),a(r,()=>n.get()),[t,t]});return e==null?o():g(e,r,o)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>ee(r));let o=D(``),s=D(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>H(e=>{let t=k(`span`,e);return t.setAttribute(`class`,`chip muted`),E(t,D(`暂无 tags`)),[t,t]})}),t({parent:de,before:le},()=>U(u),()=>({}));let Q=(t,n,i)=>{let a=()=>h(r,()=>({source:x(e),name:`badge`,props:{channel:u,count:_.get(),accent:b.get()},children:(e,t,n)=>{let r=()=>H(e=>{let t=M(),n=k(`span`,t);E(t,n),n.setAttribute(`data-testid`,`ce-scoped-fallback`),E(n,D(`等待外层 scoped slot`));let r=D(``),i=D(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():g(e,n,r)}}));return t==null?a():g(t,i,a)},$=K.nextSibling;return q.removeChild(K),t({parent:q,before:$},()=>Q,()=>({})),t({parent:fe,before:J},()=>(e=>(t,n,r)=>U(Oe(e))(t,n,r))(x(e)),()=>({})),t({parent:pe,before:X},()=>T.get()?(e,t,n)=>{let r=()=>H(e=>{let t=D(`后台同步中`);return[t,t]});return e==null?r():g(e,n,r)}:(e,t,n)=>{let r=()=>H(e=>{let t=D(`空闲`);return[t,t]});return e==null?r():g(e,n,r)},()=>({})),t({parent:he,before:me},()=>De(x(e))?(e,t,n)=>{let r=()=>H(e=>{let t=D(`compact on`);return[t,t]});return e==null?r():g(e,n,r)}:(e,t,n)=>{let r=()=>H(e=>{let t=D(`compact off`);return[t,t]});return e==null?r():g(e,n,r)},()=>({})),[o,o]})},Ie=(e,n,r)=>{let i=c(e),a=L(()=>String(O(e,`label`)??`Light DOM signal`));a.get();let o=L(()=>String(O(e,`tone`)??`teal`));return o.get(),v(n=>{let r=de().content.cloneNode(!0).firstChild,s=r,c=r.childNodes[2],l=r.childNodes[0].childNodes[0].childNodes[0],u=l.parentNode,d=r.childNodes[0].childNodes[1],f=d.parentNode,p=r.childNodes[1].childNodes[0],m=p.parentNode,_=r.childNodes[1].childNodes[2],v=_.parentNode,y=N(`rue:text-hole:0`);u.replaceChild(y,l);let b;A(()=>{let e=`lightShell tone-${o.get()}`,t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,s.setAttribute(`class`,t))}),c.setAttribute(`type`,`button`),c.setAttribute(`class`,`lightButton`),F(R(n,c,`click`,()=>()=>{i(`light-tap`,{label:a.get(),events:je(x(e)),tags:Me(x(e))})})),t({parent:u,before:y},()=>U(a.get()),()=>({}));let S=(e,t,n)=>{let r=()=>h(Pe,()=>({}));return e==null?r():g(e,n,r)},C=d.nextSibling;return f.removeChild(d),t({parent:f,before:C},()=>S,()=>({})),t({parent:m,before:p},()=>U(je(x(e))),()=>({})),t({parent:v,before:_},()=>U(Me(x(e))),()=>({})),[r,r]})},Le=y(Fe,{styles:Se,nonce:ye,configureApp(){pe.value+=1}}),Re=y(Ie,{shadowRoot:!1,styles:Ce,configureApp(){me.value+=1}}),ze=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};ze(Q,Le),ze($,Re);var Be=String.raw`import {
  createContext,
  Slot,
  Template,
  type FC,
  onMounted,
  onUnmounted,
  ref,
  useContext,
  useCustomElement,
  useEmit,
  useHost,
  useRef,
  useShadowRoot,
} from '@rue-js/rue'

type AccentTone = 'teal' | 'amber' | 'rose'
type DemoHostElement = HTMLElement & { props?: Record<string, unknown> }
type BridgeSlotProps = {
  channel: string
  count: number
  accent: string
}

const SHADOW_NONCE = 'rue-demo-nonce'
const SHADOW_TAG = 'rue-shadow-console'
const LIGHT_TAG = 'rue-light-signal'
const BridgeContext = createContext('provider:missing')

const shadowStyles = [
  [
    ':host { display: block; color: #e5eef3; font-family: ui-sans-serif, system-ui, sans-serif; }',
    '.frame { background: linear-gradient(135deg, #0f172a, #111827 60%, #1f2937); border: 1px solid rgba(148, 163, 184, 0.22); border-radius: 24px; padding: 20px; box-shadow: 0 20px 45px rgba(15, 23, 42, 0.24); overflow: hidden; }',
    ".frame[data-busy='yes'] { box-shadow: 0 24px 52px rgba(225, 29, 72, 0.26); }",
    ".frame[data-accent='teal'] { --accent: #2dd4bf; --accent-soft: rgba(45, 212, 191, 0.16); }",
    ".frame[data-accent='amber'] { --accent: #f59e0b; --accent-soft: rgba(245, 158, 11, 0.16); }",
    ".frame[data-accent='rose'] { --accent: #fb7185; --accent-soft: rgba(251, 113, 133, 0.16); }",
    '.hero { display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start; justify-content: space-between; }',
    '.eyebrow { margin: 0 0 6px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(226, 232, 240, 0.72); }',
    '.title { margin: 0; font-size: 28px; line-height: 1.1; color: white; }',
    '.subtitle { margin: 8px 0 0; color: rgba(226, 232, 240, 0.84); font-size: 13px; }',
    '.actions { display: flex; flex-wrap: wrap; gap: 10px; }',
    '.button { appearance: none; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 999px; background: rgba(255, 255, 255, 0.06); color: white; padding: 10px 14px; font-size: 13px; cursor: pointer; }',
    '.button.primary { background: var(--accent); color: #04111b; border-color: transparent; font-weight: 700; }',
    '.grid { margin-top: 18px; display: grid; gap: 14px; grid-template-columns: repeat(2, minmax(0, 1fr)); }',
    '.frame.compact .grid { grid-template-columns: 1fr; }',
    '.panel { border: 1px solid rgba(148, 163, 184, 0.16); background: rgba(15, 23, 42, 0.48); border-radius: 18px; padding: 14px; }',
    '.metricValue { font-size: 44px; font-weight: 800; color: white; line-height: 1; }',
    '.metricLabel { margin-top: 4px; font-size: 12px; color: rgba(226, 232, 240, 0.76); }',
    '.meter { margin-top: 14px; height: 10px; border-radius: 999px; background: rgba(148, 163, 184, 0.18); overflow: hidden; }',
    '.meterFill { height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--accent), white); }',
    '.chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }',
    '.chip { display: inline-flex; align-items: center; border-radius: 999px; padding: 6px 10px; font-size: 12px; background: var(--accent-soft); color: white; border: 1px solid rgba(255, 255, 255, 0.12); }',
    '.chip.muted { background: rgba(148, 163, 184, 0.18); color: rgba(226, 232, 240, 0.76); }',
    '.slotTitle { margin: 0 0 10px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(226, 232, 240, 0.6); }',
    '.bridgeBox { display: grid; gap: 10px; }',
    '.bridgeContext, .bridgeSlot { border-radius: 14px; padding: 10px 12px; color: white; font-size: 12px; border: 1px solid rgba(255, 255, 255, 0.14); }',
    '.bridgeContext { background: rgba(255, 255, 255, 0.08); }',
    '.bridgeSlot { background: var(--accent-soft); }',
    '.footer { margin-top: 16px; display: flex; flex-wrap: wrap; gap: 10px; font-size: 12px; color: rgba(226, 232, 240, 0.7); }',
  ].join('\n'),
  [
    "::slotted([slot='meta']) { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 6px 12px; border: 1px solid rgba(255, 255, 255, 0.16); background: rgba(255, 255, 255, 0.08); font-size: 12px; color: white; }",
    '::slotted(*) { color: inherit; }',
  ].join('\n'),
]

const lightStyles = [
  [
    ':host { display: block; }',
    '.lightShell { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 12px; border-radius: 20px; padding: 14px 16px; border: 1px solid rgba(15, 23, 42, 0.08); background: white; box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08); }',
    '.lightShell.tone-teal { border-color: rgba(13, 148, 136, 0.2); background: linear-gradient(135deg, rgba(240, 253, 250, 0.96), white); }',
    '.lightShell.tone-amber { border-color: rgba(217, 119, 6, 0.2); background: linear-gradient(135deg, rgba(255, 251, 235, 0.96), white); }',
    '.lightShell.tone-rose { border-color: rgba(225, 29, 72, 0.18); background: linear-gradient(135deg, rgba(255, 241, 242, 0.98), white); }',
    '.lightTitle { margin: 0; font-size: 16px; font-weight: 700; color: #0f172a; }',
    '.lightMeta { margin-top: 4px; font-size: 12px; color: rgba(15, 23, 42, 0.64); }',
    '.lightValue { font-size: 13px; font-weight: 700; color: #334155; }',
    '.lightButton { appearance: none; border: 0; border-radius: 999px; background: #0f172a; color: white; padding: 8px 12px; cursor: pointer; font-size: 12px; }',
  ].join('\n'),
]

const parseTagInput = (value: string) =>
  value
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)

const readRecordProp = (value: unknown) =>
  value && typeof value === 'object' ? (value as Record<string, unknown>) : undefined

const readLightMetric = (props: Record<string, unknown>, key: string) =>
  Number(readRecordProp(props.metrics)?.[key] ?? 0)

const toneToLight = (accent: AccentTone) => accent

const ShadowConsole: FC<Record<string, unknown>> = props => {
  const host = useHost()
  const shadowRoot = useShadowRoot()
  const bridgeChannel = useContext(BridgeContext)
  const emit = useEmit(props as any)

  const count = Number(props.count ?? 0)
  const accent = String(props.accent ?? 'teal')
  const panelTitle = String(props.panelTitle ?? 'Shadow console')
  const tags = Array.isArray(props.tags) ? (props.tags as string[]) : []
  const busy = props.busy === true
  const compact = readRecordProp(props.config)?.compact === true
  const preset = String(readRecordProp(props.config)?.preset ?? 'manual')
  const meterWidth = Math.max(8, Math.min(count * 9, 100)) + '%'

  return (
    <article
      className={'frame' + (compact ? ' compact' : '')}
      data-accent={accent}
      data-busy={busy ? 'yes' : 'no'}
    >
      <header className="hero">
        <div>
          <p className="eyebrow">Shadow Root / Slot / CustomEvent</p>
          <h2 className="title">{panelTitle}</h2>
          <p className="subtitle">
            {host?.tagName.toLowerCase() ?? 'unknown-host'} /{' '}
            {shadowRoot ? 'shadow-root 已开启' : 'light-dom'}
          </p>
        </div>
        <div className="actions">
          <button
            type="button"
            className="button primary"
            onClick={() => {
              emit(
                'save',
                { panelTitle, count, tags, busy },
                { rootMode: shadowRoot ? 'shadow' : 'light' },
              )
            }}
          >
            派发 save
          </button>
          <button
            type="button"
            className="button"
            onClick={() => {
              emit('pulse', count + 1, accent)
            }}
          >
            派发 pulse
          </button>
        </div>
      </header>

      <div className="grid">
        <section className="panel">
          <div className="metricValue">{count}</div>
          <div className="metricLabel">来自宿主 el.props.count</div>
          <div className="meter">
            <div className="meterFill" style={{ width: meterWidth }}></div>
          </div>
          <div className="chips">
            {tags.length ? (
              tags.map(tag => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))
            ) : (
              <span className="chip muted">暂无 tags</span>
            )}
          </div>
        </section>

        <section className="panel">
          <p className="slotTitle">命名 Slot</p>
          <slot name="meta"></slot>
          <div style={{ height: '12px' }}></div>
          <p className="slotTitle">默认 Slot</p>
          <slot></slot>
        </section>

        <section className="panel">
          <p className="slotTitle">Rue scoped slot / Context</p>
          <div className="bridgeBox">
            <div className="bridgeContext">Context: {bridgeChannel}</div>
            <Slot
              source={props}
              name="badge"
              props={{ channel: bridgeChannel, count, accent } satisfies BridgeSlotProps}
            >
              <span>等待外层 scoped slot</span>
            </Slot>
          </div>
        </section>
      </div>

      <footer className="footer">
        <span>preset: {preset}</span>
        <span>{busy ? '后台同步中' : '空闲'}</span>
        <span>{compact ? 'compact on' : 'compact off'}</span>
      </footer>
    </article>
  )
}

const LightSignalMeta: FC = () => {
  const host = useHost()
  const shadowRoot = useShadowRoot()

  return (
    <p className="lightMeta">
      {host?.tagName.toLowerCase() ?? 'unknown-host'} / {shadowRoot ? 'shadow-root' : 'light-dom'}
    </p>
  )
}

const LightSignal: FC<Record<string, unknown>> = props => {
  const emit = useEmit(props as any)
  const label = String(props.label ?? 'Light DOM signal')
  const tone = String(props.tone ?? 'teal')

  return (
    <div className={'lightShell tone-' + tone}>
      <div>
        <p className="lightTitle">{label}</p>
        <LightSignalMeta />
      </div>
      <div className="lightValue">
        {readLightMetric(props, 'events')} events / {readLightMetric(props, 'tags')} tags
      </div>
      <button
        type="button"
        className="lightButton"
        onClick={() => {
          emit('light-tap', {
            label,
            events: readLightMetric(props, 'events'),
            tags: readLightMetric(props, 'tags'),
          })
        }}
      >
        emit
      </button>
    </div>
  )
}

const ShadowConsoleElement = useCustomElement(ShadowConsole, {
  styles: shadowStyles,
  nonce: SHADOW_NONCE,
  configureApp() {
    console.log('shadow custom element app configured')
  },
})

const LightSignalElement = useCustomElement(LightSignal, {
  shadowRoot: false,
  styles: lightStyles,
  configureApp() {
    console.log('light custom element app configured')
  },
})

const registerCustomElement = (tag: string, ctor: CustomElementConstructor) => {
  if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
    customElements.define(tag, ctor)
  }
}

registerCustomElement(SHADOW_TAG, ShadowConsoleElement)
registerCustomElement(LIGHT_TAG, LightSignalElement)

const WebComponentsCopyableDemo: FC = () => {
  const panelTitle = ref('Ops Console / Native CE')
  const accent = ref<AccentTone>('teal')
  const count = ref(7)
  const tagInput = ref('shadow, events, slots, props')
  const busy = ref(false)
  const compact = ref(false)
  const eventLog = ref('等待 CustomEvent')

  const shadowHostRef = useRef<DemoHostElement>()
  const lightHostRef = useRef<DemoHostElement>()

  const shadowPropsPayload = () => ({
    count: count.value,
    tags: parseTagInput(tagInput.value),
    config: { compact: compact.value, preset: 'ops' },
    busy: busy.value,
  })

  const lightPropsPayload = () => ({
    metrics: {
      events: eventLog.value === '等待 CustomEvent' ? 0 : 1,
      tags: parseTagInput(tagInput.value).length,
      busy: busy.value,
    },
  })

  const syncHosts = () => {
    const shadowHost = shadowHostRef.current
    if (shadowHost) {
      shadowHost.setAttribute('panel-title', panelTitle.value)
      shadowHost.setAttribute('accent', accent.value)
      shadowHost.props = shadowPropsPayload()
    }

    const lightHost = lightHostRef.current
    if (lightHost) {
      lightHost.setAttribute('label', 'Light DOM signal')
      lightHost.setAttribute('tone', toneToLight(accent.value))
      lightHost.props = lightPropsPayload()
    }
  }

  const handleShadowSave = (event: Event) => {
    eventLog.value = JSON.stringify((event as CustomEvent).detail, null, 2)
    syncHosts()
  }

  const handleShadowPulse = (event: Event) => {
    eventLog.value = JSON.stringify((event as CustomEvent).detail, null, 2)
    syncHosts()
  }

  const bindCustomEvent = (el: DemoHostElement | undefined, name: string) => {
    if (!el) {
      return () => {}
    }

    const handler = (event: Event) => {
      eventLog.value = JSON.stringify((event as CustomEvent).detail, null, 2)
      syncHosts()
    }

    el.addEventListener(name, handler as EventListener)
    return () => {
      el.removeEventListener(name, handler as EventListener)
    }
  }

  onMounted(() => {
    let offLightTap = () => {}

    Promise.resolve().then(() => {
      syncHosts()
      offLightTap = bindCustomEvent(lightHostRef.current, 'light-tap')
    })

    onUnmounted(() => {
      offLightTap()
    })
  })

  return (
    <BridgeContext.Provider value={'ops:' + accent.value}>
      <div className="space-y-4">
        <label>
          panel-title
          <input
            value={panelTitle.value}
            onInput={(event: Event) => {
              panelTitle.value = (event.target as HTMLInputElement).value
              syncHosts()
            }}
          />
        </label>

        <label>
          tags
          <input
            value={tagInput.value}
            onInput={(event: Event) => {
              tagInput.value = (event.target as HTMLInputElement).value
              syncHosts()
            }}
          />
        </label>

        <label>
          count
          <input
            type="range"
            min="1"
            max="15"
            value={count.value}
            onInput={(event: Event) => {
              count.value = Number((event.target as HTMLInputElement).value)
              syncHosts()
            }}
          />
        </label>

        <label>
          busy
          <input
            type="checkbox"
            checked={busy.value}
            onChange={(event: Event) => {
              busy.value = (event.target as HTMLInputElement).checked
              syncHosts()
            }}
          />
        </label>

        <label>
          compact
          <input
            type="checkbox"
            checked={compact.value}
            onChange={(event: Event) => {
              compact.value = (event.target as HTMLInputElement).checked
              syncHosts()
            }}
          />
        </label>

        <select
          value={accent.value}
          onChange={(event: Event) => {
            accent.value = (event.target as HTMLSelectElement).value as AccentTone
            syncHosts()
          }}
        >
          <option value="teal">teal</option>
          <option value="amber">amber</option>
          <option value="rose">rose</option>
        </select>

        <rue-shadow-console
          ref={shadowHostRef}
          onSave={handleShadowSave}
          onPulse={handleShadowPulse}
        >
          <div slot="meta">SLA 99.99%</div>

          <p>
            默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。
          </p>

          <Template slot="badge">
            {(({ channel, count, accent }: BridgeSlotProps) => (
              <strong>
                {channel} / {count} / {accent}
              </strong>
            )) as any}
          </Template>
        </rue-shadow-console>

        <rue-light-signal ref={lightHostRef}></rue-light-signal>

        <pre>{eventLog.value}</pre>
      </div>
    </BridgeContext.Provider>
  )
}

export default WebComponentsCopyableDemo`,Ve=(r,o,c)=>{let{activeTab:l,panelTitle:d,accent:p,count:y,tagInput:x,busy:w,compact:T,activePreset:O,slotNote:L,metaBadge:ie,lightLabel:B,eventLog:V,shadowNonce:le,shadowStyleCount:ue,lightStyleCount:de,shadowHostRef:X,lightHostRef:Z,shadowPropsPayload:_e,lightPropsPayload:ve,refreshDiagnostics:ye,scheduleDiagnostics:Q,syncShadowHost:$,syncLightHost:be,syncHosts:Se,pushEvent:Ce,handleShadowSave:Ee,handleShadowPulse:De,bindCustomEvent:Oe,applyPreset:ke,appendTag:Ae,removeLastTag:je,clearTitleAttr:Me,clearEvents:Pe}=s(`useSetup:0:0`,()=>{let e=I(`preview`),t=I(`Ops Console / Native CE`),n=I(`teal`),r=I(7),i=I(`shadow, events, slots, props`),a=I(!1),o=I(!1),s=I(`ops`),c=I(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`),l=I(`SLA 99.99%`),u=I(`Light DOM signal`),d=I([]),f=I(`等待挂载`),p=I(0),m=I(0),h=P(`plan:30713:hook:0`),g=P(`plan:30713:hook:1`),_=()=>({count:r.value,tags:Te(i.value),config:{compact:o.value,preset:s.value},busy:a.value}),v=()=>({metrics:{events:d.value.length,tags:Te(i.value).length,busy:a.value}}),y=()=>{let e=h.current,t=g.current;p.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,f.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,m.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},b=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{y()})})},x=()=>{let e=h.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=_()},S=()=>{let e=g.current;if(!e)return;let t=u.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Ne(n.value)),e.props=v()},w=()=>{x(),S(),b()},T=(e,t,n)=>{d.value=[{source:e,name:t,detail:we(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...d.value].slice(0,8),S(),b()},ee=e=>{T(`shadow`,`save`,e.detail)},E=e=>{T(`shadow`,`pulse`,e.detail)},D=(e,t,n)=>{if(!e)return()=>{};let r=e=>{T(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return j(()=>{let e=()=>{};Promise.resolve().then(()=>{w(),e=D(g.current,`light-tap`,`light`),b()}),C(()=>{e()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:i,busy:a,compact:o,activePreset:s,slotNote:c,metaBadge:l,lightLabel:u,eventLog:d,shadowNonce:f,shadowStyleCount:p,lightStyleCount:m,shadowHostRef:h,lightHostRef:g,shadowPropsPayload:_,lightPropsPayload:v,refreshDiagnostics:y,scheduleDiagnostics:b,syncShadowHost:x,syncLightHost:S,syncHosts:w,pushEvent:T,handleShadowSave:ee,handleShadowPulse:E,bindCustomEvent:D,applyPreset:e=>{s.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,i.value=`shadow, events, slots, props`,c.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,l.value=`SLA 99.99%`,u.value=`Light DOM signal`,a.value=!1,o.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,i.value=`checkout, fulfillment, analytics, queue`,c.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,l.value=`AOV +18%`,u.value=`Revenue pulse`,a.value=!1,o.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,i.value=`incident, pager, bridge, rollback`,c.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,l.value=`P1 ongoing`,u.value=`War-room heartbeat`,a.value=!0,o.value=!1),w()},appendTag:()=>{let e=Te(i.value);e.push(`tag-${e.length+1}`),i.value=e.join(`, `),w()},removeLastTag:()=>{let e=Te(i.value);e.pop(),i.value=e.join(`, `),w()},clearTitleAttr:()=>{t.value=``,w()},clearEvents:()=>{d.value=[],S(),b()}}});return(()=>{let r=v(r=>{let o=M(),s=fe().content.cloneNode(!0),c=s.firstChild,h=c,C=c.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],j=c.childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0],P=c.childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes[0],I=c.childNodes[0].childNodes[0].childNodes[0].childNodes[4].childNodes[0].childNodes[1],W=c.childNodes[0].childNodes[0].childNodes[0].childNodes[4].childNodes[1].childNodes[1],G=c.childNodes[0].childNodes[0].childNodes[0].childNodes[5].childNodes[1],K=c.childNodes[0].childNodes[0].childNodes[0].childNodes[6].childNodes[0].childNodes[0],q=c.childNodes[0].childNodes[0].childNodes[0].childNodes[6].childNodes[1].childNodes[0],J=c.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[0],Y=c.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[1],ye=c.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[2],Ce=c.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[3],Oe=c.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1],Ne=c.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1],Fe=c.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],Ie=Fe.parentNode,Le=c.childNodes[0].childNodes[0].childNodes[0].childNodes[5].childNodes[0].childNodes[1].childNodes[0];Le.parentNode;let Re=c.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],ze=Re.parentNode,Be=c.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],Ve=Be.parentNode,He=c.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0],Ue=He.parentNode,We=c.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],Ge=We.parentNode,Ke=c.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[2],qe=Ke.parentNode,Je=c.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0];Je.parentNode;let Ye=c.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0];Ye.parentNode;let Xe=c.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0];Xe.parentNode;let Ze=c.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0],Qe=Ze.parentNode,$e=c.childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0],et=$e.parentNode,tt=c.childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[1].childNodes[0],nt=tt.parentNode,rt=N(`rue:text-hole:2`);ze.replaceChild(rt,Re);let it=N(`rue:text-hole:3`);Ve.replaceChild(it,Be),o.appendChild(s);let at;A(()=>{let e=l.value===`preview`?`mt-4 space-y-6`:`hidden`,t=e===!1||e==null?``:String(e);Object.is(at,t)||(at=t,h.setAttribute(`class`,t))}),C.setAttribute(`class`,`input input-bordered w-full`);let ot;A(()=>{let e=d.value,t=e==null?``:String(e);Object.is(ot,t)||(ot=t,C.value=t)});let st=e=>{let t=e=>{d.value=e.target.value,$(),Q()};typeof t==`function`&&t(e)};C.addEventListener(`input`,st),F(()=>C.removeEventListener(`input`,st)),j.setAttribute(`class`,`input input-bordered w-full`);let ct;A(()=>{let e=x.value,t=e==null?``:String(e);Object.is(ct,t)||(ct=t,j.value=t)});let lt=e=>{let t=e=>{x.value=e.target.value,Se()};typeof t==`function`&&t(e)};j.addEventListener(`input`,lt),F(()=>j.removeEventListener(`input`,lt)),P.setAttribute(`class`,`input input-bordered w-full`);let ut;A(()=>{let e=L.value,t=e==null?``:String(e);Object.is(ut,t)||(ut=t,P.value=t)});let dt=e=>{let t=e=>{L.value=e.target.value};typeof t==`function`&&t(e)};P.addEventListener(`input`,dt),F(()=>P.removeEventListener(`input`,dt)),I.setAttribute(`class`,`select select-bordered`);let ft;A(()=>{let e=p.value;Object.is(ft,e)||(ft=e,oe(I,e))});let pt=e=>{let t=e=>{p.value=e.target.value,Se()};typeof t==`function`&&t(e)};I.addEventListener(`change`,pt),F(()=>I.removeEventListener(`change`,pt)),W.setAttribute(`class`,`input input-bordered`);let mt;A(()=>{let e=B.value,t=e==null?``:String(e);Object.is(mt,t)||(mt=t,W.value=t)});let ht=e=>{let t=e=>{B.value=e.target.value,be(),Q()};typeof t==`function`&&t(e)};W.addEventListener(`input`,ht),F(()=>W.removeEventListener(`input`,ht)),G.setAttribute(`type`,`range`),G.setAttribute(`min`,`1`),G.setAttribute(`max`,`15`);let gt;A(()=>{let e=y.value,t=e==null?``:String(e);Object.is(gt,t)||(gt=t,G.value=t)}),G.setAttribute(`class`,`range range-primary`);let _t=e=>{let t=e=>{y.value=Number(e.target.value),$(),Q()};typeof t==`function`&&t(e)};G.addEventListener(`input`,_t),F(()=>G.removeEventListener(`input`,_t)),K.setAttribute(`type`,`checkbox`),K.setAttribute(`class`,`toggle toggle-primary`);let vt;A(()=>{let e=!!w.value;Object.is(vt,e)||(vt=e,K.checked=e)});let yt=e=>{let t=e=>{w.value=e.target.checked,Se()};typeof t==`function`&&t(e)};K.addEventListener(`change`,yt),F(()=>K.removeEventListener(`change`,yt)),q.setAttribute(`type`,`checkbox`),q.setAttribute(`class`,`toggle toggle-secondary`);let bt;A(()=>{let e=!!T.value;Object.is(bt,e)||(bt=e,q.checked=e)});let xt=e=>{let t=e=>{T.value=e.target.checked,$(),Q()};typeof t==`function`&&t(e)};q.addEventListener(`change`,xt),F(()=>q.removeEventListener(`change`,xt)),J.setAttribute(`class`,`btn btn-primary`);let St=e=>{let t=Ae;typeof t==`function`&&t(e)};J.addEventListener(`click`,St),F(()=>J.removeEventListener(`click`,St)),Y.setAttribute(`class`,`btn btn-outline`);let Ct=e=>{let t=je;typeof t==`function`&&t(e)};Y.addEventListener(`click`,Ct),F(()=>Y.removeEventListener(`click`,Ct)),ye.setAttribute(`class`,`btn btn-secondary`),F(R(r,ye,`click`,()=>()=>{y.value+=2,$(),Q()})),Ce.setAttribute(`class`,`btn btn-ghost`);let wt=e=>{let t=Me;typeof t==`function`&&t(e)};Ce.addEventListener(`click`,wt),F(()=>Ce.removeEventListener(`click`,wt));let Tt;A(()=>{let e=`alert ${V.value.length?`alert-success`:`alert-soft`} py-3`,t=e===!1||e==null?``:String(e);Object.is(Tt,t)||(Tt=t,Oe.setAttribute(`class`,t))}),Oe.setAttribute(`data-testid`,`ce-latest-event`),Ne.setAttribute(`class`,`btn btn-sm btn-ghost`);let Et=e=>{let t=Pe;typeof t==`function`&&t(e)};Ne.addEventListener(`click`,Et),F(()=>Ne.removeEventListener(`click`,Et));let Dt=[];re(()=>{Dt=te(Ie,Fe,Dt,[`ops`,`commerce`,`incident`],(e,t)=>e,(e,t)=>{let n=z(e);return ne((e,t,r)=>{let i=()=>v(e=>{let t=k(`button`,e),r;A(()=>{let e=`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${O.value===n.get()?`btn-primary`:`btn-outline`}`,i=e===!1||e==null?``:String(e);Object.is(r,i)||(r=i,t.setAttribute(`class`,i))}),F(R(e,t,`click`,()=>()=>ke(n.get())));let i=D(``);return E(t,i),u(i,()=>n.get()),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>ee(Dt)),u(Le,()=>y.value),t({parent:ze,before:rt},()=>U(pe.value),()=>({})),t({parent:Ve,before:it},()=>U(me.value),()=>({})),t({parent:Ue,before:He},()=>U(he.value+ge.value),()=>({})),t({parent:Ge,before:We},()=>V.value.length?U(`最近事件：${V.value[0].source}.${V.value[0].name} \xb7 ${V.value[0].at}`):(e,t,n)=>{let r=()=>H(e=>{let t=D(`等待自定义元素事件`);return[t,t]});return e==null?r():g(e,n,r)},()=>({}));let Ot=v(r=>{let o=M(),s=k(`div`,o);E(o,s),n(s,`space-y-4`);let c=k(`rue-shadow-console`,s);e(c,`__rue_context_parent_instance__`,S()),E(s,c),_(c,()=>X);let l=e=>{let t=Ee;typeof t==`function`&&t(e)};c.addEventListener(`save`,l),F(()=>c.removeEventListener(`save`,l));let u=e=>{let t=De;typeof t==`function`&&t(e)};c.addEventListener(`pulse`,u),F(()=>c.removeEventListener(`pulse`,u)),e(c,`__rue_slots`,{badge:({channel:e,count:n,accent:r})=>v(i=>{let a=ce().content.cloneNode(!0).firstChild,o=a.childNodes[0],s=o.parentNode,c=a.childNodes[2],l=c.parentNode,u=a.childNodes[4],d=u.parentNode;return t({parent:s,before:o},()=>U(e),()=>({})),t({parent:l,before:c},()=>U(n),()=>({})),t({parent:d,before:u},()=>U(r),()=>({})),[a,a]})});let d=k(`div`,c);E(c,d),f(d,`slot`,`meta`);let p=k(`span`,d);E(d,p),n(p,`status status-success`);let m=k(`span`,d);E(d,m);let h=b(m);E(m,h),A(()=>{ae(h,ie.value)});let y=k(`div`,c);E(c,y),n(y,`space-y-3 text-sm text-base-content/80`);let C=k(`p`,y);E(y,C);let w=b(C);E(C,w),A(()=>{ae(w,L.value)});let T=k(`div`,y);E(y,T),n(T,`flex flex-wrap gap-2`);let O=N(`rue:list:end`);E(T,O);let j=[];re(()=>{let e=Te(x.value)||[];j=te(T,O,j,e,(e,t)=>e,(e,t)=>{let n=z(e);return ne((e,t,r)=>{let o=()=>i(e=>{let t=k(`span`,e);t.setAttribute(`class`,`badge badge-outline`);let r=D(``);return E(t,r),a(r,()=>n.get()),[t,t]});return e==null?o():g(e,r,o)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),F(()=>ee(j));let P=k(`rue-light-signal`,s);e(P,`__rue_context_parent_instance__`,S()),E(s,P),_(P,()=>Z);let I=D(``),R=D(``);return o.insertBefore(I,o.firstChild),o.appendChild(R),[o.firstChild,o.lastChild]});t({parent:qe,before:Ke},()=>(e,t,n)=>g(e,n,()=>se(xe,()=>({value:`${O.value}:${p.value}`,children:Ot}))),()=>({})),u(Je,()=>ue.value),u(Ye,()=>le.value),u(Xe,()=>de.value),m(Qe,Ze,()=>V.value.length?{__rue_compiled_branch_key:!0,create:()=>v(e=>{let n=M(),r=N(`rue:list:end`);E(n,r);let i=[];re(()=>{let e=V.value||[];i=te(r.parentNode,r,i,e,(e,t)=>`${e.name}-${e.at}-${t}`,(e,n)=>{let r=z(e);return ne((e,n,i)=>{let a=()=>v(e=>{let n=k(`div`,e);n.setAttribute(`class`,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let i=k(`div`,n);E(n,i),i.setAttribute(`class`,`flex items-center justify-between gap-3 text-sm`);let a=k(`div`,i);E(i,a),a.setAttribute(`class`,`flex items-center gap-2`);let o=k(`span`,a);E(a,o);let s;A(()=>{let e=`badge ${r.get().source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,o.setAttribute(`class`,t))});let c=N(`rue:compiled-slot`);E(o,c),t({parent:o,before:c},()=>U(r.get().source),()=>({}));let l=k(`span`,a);E(a,l),l.setAttribute(`class`,`font-medium`);let u=N(`rue:compiled-slot`);E(l,u),t({parent:l,before:u},()=>U(r.get().name),()=>({}));let d=k(`span`,i);E(i,d),d.setAttribute(`class`,`text-base-content/50`);let f=N(`rue:compiled-slot`);E(d,f),t({parent:d,before:f},()=>U(r.get().at),()=>({}));let p=k(`pre`,n);E(n,p),p.setAttribute(`class`,`mt-2 text-xs whitespace-pre-wrap break-words`);let m=N(`rue:compiled-slot`);return E(p,m),t({parent:p,before:m},()=>U(r.get().detail),()=>({})),[n,n]});return e==null?a():g(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),F(()=>ee(i));let a=D(``),o=D(``);return n.insertBefore(a,n.firstChild),n.appendChild(o),[n.firstChild,n.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>H(e=>{let t=k(`div`,e);t.setAttribute(`class`,`alert alert-soft`);let n=k(`span`,t);return E(t,n),E(n,D(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),[t,t]})}),t({parent:et,before:$e},()=>(e=>(t,n,r)=>U(we(e))(t,n,r))(_e()),()=>({})),t({parent:nt,before:tt},()=>(e=>(t,n,r)=>U(we(e))(t,n,r))(ve()),()=>({}));let kt=D(``),At=D(``);return o.insertBefore(kt,o.firstChild),o.appendChild(At),[o.firstChild,o.lastChild]});return se(G,()=>({children:[H(e=>{let t=K().content.cloneNode(!0).firstChild;return[t,t]}),H(e=>{let t=q().content.cloneNode(!0).firstChild;return[t,t]}),v(e=>{let t=J().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=t.childNodes[1];n.setAttribute(`role`,`tab`);let i;A(()=>{let e=`tab ${l.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))}),F(R(e,n,`click`,()=>()=>{l.value=`preview`})),r.setAttribute(`role`,`tab`);let a;return A(()=>{let e=`tab ${l.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),F(R(e,r,`click`,()=>()=>{l.value=`code`})),[t,t]}),r,v(e=>{let n=Y().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o;A(()=>{let e=l.value===`code`?`mt-4`:`hidden`,t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,r.setAttribute(`class`,t))});let s=(e,t,n)=>{let r=()=>h(W,()=>({lang:`tsx`,code:Be}));return e==null?r():g(e,n,r)},c=i.nextSibling;return a.removeChild(i),t({parent:a,before:c},()=>s,()=>({})),[n,n]})]}))})()};export{Ve as default};
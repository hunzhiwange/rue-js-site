import{$t as e,A as t,At as n,C as r,Dn as i,Dt as a,E as o,Et as s,M as c,Mt as l,Ot as u,P as d,Q as f,Qt as p,St as m,Tn as h,Tt as g,Vt as _,Zt as v,_n as y,_t as b,at as x,b as S,bn as C,bt as w,ct as T,d as E,dt as D,et as O,ft as ee,gn as k,hn as A,j,kn as M,l as N,mn as te,nt as P,on as ne,pn as F,rn as I,sn as L,st as R,tn as z,u as B,ut as V,vn as H,vt as U,w as re,wn as W,xn as G,xt as K,y as ie,yt as ae}from"./rue-runtime-HIMg8Lz8.js";import{t as q}from"./Code-DpH7u0gk.js";import{r as J}from"./SidebarPlaygroundExample-BCPRe0hA.js";var oe=H(`<div class="bridgeSlot" data-testid="ce-scoped-slot"><!--rue:text-hole:0--> / <!--rue:text-hole:1--> / <!--rue:text-hole:2--></div>`),se=H(`<p class="lightMeta">实例 #<!--rue:text-hole:0--> · <!--rue:text-hole:1--> · <!--rue:text-hole:2--></p>`),ce=H(`<article><header class="hero"><div><p class="eyebrow">Shadow Root / Slot / CustomEvent</p><h2 class="title"><!--rue:text-hole:0--></h2><p class="subtitle">实例 #<!--rue:text-hole:1--> · <!--rue:text-hole:2--> · <!--rue:text-hole:3--></p></div><div class="actions"><button type="button" class="button primary">派发 save</button><button type="button" class="button">派发 pulse</button></div></header><div class="grid"><section class="panel"><div class="metricValue"><!--rue:text-hole:4--></div><div class="metricLabel">这个数值来自宿主上的 el.props.count</div><div class="meter"><div class="meterFill"></div></div><div class="chips"><!--rue:text-hole:5--></div></section><section class="panel"><p class="slotTitle">命名 Slot</p><slot name="meta"></slot><div></div><p class="slotTitle">默认 Slot</p><slot></slot></section><section class="panel"><p class="slotTitle">Rue scoped slot / Context</p><div class="bridgeBox"><div class="bridgeContext" data-testid="ce-context">Context: <!--rue:text-hole:6--></div><!--rue:opaque-hole:7--></div></section></div><footer class="footer"><span>preset: <!--rue:text-hole:8--></span><span><!--rue:text-hole:9--></span><span><!--rue:text-hole:10--></span></footer></article>`),le=H(`<div><div><p class="lightTitle"><!--rue:text-hole:0--></p><!--rue:opaque-hole:1--></div><div class="lightValue"><!--rue:text-hole:2--> events / <!--rue:text-hole:3--> tags</div><button type="button" class="lightButton">emit</button></div>`),Y=H(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">原生 Web Components</h1>`),X=H(`<p class="text-base-content/70 max-w-4xl leading-7">这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。</p>`),ue=H(`<div role="tablist" class="tabs tabs-box mt-4"><button role="tab">效果</button><button role="tab">代码</button></div>`),de=H(`<div><div class="grid gap-6 items-start"><div class="card bg-base-100 shadow-xl border border-base-300"><div class="card-body gap-5"><div><p class="text-xs uppercase tracking-[0.28em] text-base-content/45">Preset</p><div class="mt-3 flex w-full gap-2"><!--rue:text-hole:0--></div></div><label class="floating-label"><input class="input input-bordered w-full"><span>panel-title attribute</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>host.props.tags（逗号分隔）</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>默认 slot 文案</span></label><div class="grid gap-3 sm:grid-cols-2"><fieldset class="fieldset"><legend class="fieldset-legend">accent attribute</legend><!--rue:opaque-hole:1--></fieldset><fieldset class="fieldset"><legend class="fieldset-legend">light label attribute</legend><input class="input input-bordered"></fieldset></div><div><div class="flex items-center justify-between text-sm mb-2"><span>host.props.count</span><span class="font-semibold"><!--rue:text-hole:2--></span></div><input type="range" min="1" max="15" class="range range-primary"></div><div class="grid gap-3 sm:grid-cols-2"><label class="label cursor-pointer justify-start gap-3"><input type="checkbox" class="toggle toggle-primary"><span class="label-text">host.props.busy</span></label><label class="label cursor-pointer justify-start gap-3"><input type="checkbox" class="toggle toggle-secondary"><span class="label-text">host.props.config.compact</span></label></div><div class="grid gap-2 sm:grid-cols-2"><button class="btn btn-primary">追加 tag</button><button class="btn btn-outline">删除最后一个 tag</button><button class="btn btn-secondary">count + 2</button><button class="btn btn-ghost">移除 title attribute</button></div></div></div><div class="space-y-6"><div class="card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden"><div class="card-body gap-5"><div class="flex flex-wrap items-center justify-between gap-4"><div><p class="text-xs uppercase tracking-[0.28em] text-base-content/45">Live Preview</p><h2 class="text-2xl font-semibold mt-2">Shadow + Light 双宿主联动</h2></div><div class="stats stats-vertical lg:stats-horizontal shadow bg-base-100"><div class="stat py-3 px-4"><div class="stat-title">shadow configureApp</div><div class="stat-value text-lg"><!--rue:text-hole:3--></div></div><div class="stat py-3 px-4"><div class="stat-title">light configureApp</div><div class="stat-value text-lg"><!--rue:text-hole:4--></div></div><div class="stat py-3 px-4"><div class="stat-title">mounted instances</div><div class="stat-value text-lg"><!--rue:text-hole:5--></div></div></div></div><div data-testid="ce-latest-event"><span><!--rue:text-hole:6--></span></div><!--rue:opaque-hole:7--></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-4"><div class="flex items-center justify-between gap-3"><h3 class="card-title text-lg">运行时诊断</h3><span class="badge badge-primary badge-outline">nonce / styles / mode</span></div><ul class="list bg-base-100 rounded-box"><li class="list-row"><div class="font-medium">shadow style tags</div><div class="text-right"><!--rue:text-hole:8--></div></li><li class="list-row"><div class="font-medium">shadow nonce</div><div class="text-right break-all"><!--rue:text-hole:9--></div></li><li class="list-row"><div class="font-medium">light style tags</div><div class="text-right"><!--rue:text-hole:10--></div></li><li class="list-row"><div class="font-medium">hook 期望</div><div class="text-right">shadow / light</div></li></ul></div></div><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-4"><div class="flex items-center justify-between gap-3"><h3 class="card-title text-lg">事件桥接日志</h3><button class="btn btn-sm btn-ghost">清空</button></div><div class="space-y-3 max-h-[320px] overflow-auto pr-1"><!--rue:text-hole:11--></div></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-3"><h3 class="card-title text-lg">shadow host.props 快照</h3><pre class="text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4"><!--rue:text-hole:12--></pre></div></div><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-3"><h3 class="card-title text-lg">light host.props 快照</h3><pre class="text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4"><!--rue:text-hole:13--></pre></div></div></div></div></div></div>`),fe=H(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),pe=L(`ref:1:0`,()=>z(0)),me=L(`ref:1:1`,()=>z(0)),he=L(`ref:1:2`,()=>z(0)),ge=L(`ref:1:3`,()=>z(0)),Z=0,_e=0,ve=new WeakMap,Q=new WeakMap,ye=`rue-demo-nonce`,be=`rue-shadow-console`,xe=`rue-light-signal`,Se=j(`provider:missing`),Ce=[`
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
  `],we=[`
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
  `],Te=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ee=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),De=e=>e&&typeof e==`object`?e:void 0,Oe=e=>De(e.config)?.compact===!0,ke=e=>{let t=De(e.config)?.preset;return typeof t==`string`?t:`manual`},Ae=e=>e?ve.get(e)||(Z+=1,he.value+=1,ve.set(e,Z),Z):0,je=e=>e?Q.get(e)||(_e+=1,ge.value+=1,Q.set(e,_e),_e):0,Me=e=>Number(De(e.metrics)?.events??0),Ne=e=>Number(De(e.metrics)?.tags??0),Pe=e=>e,Fe=()=>{let e=B(),t=E(),r=d(()=>je(e));return r.get(),T(n(()=>{let n=b(),i=se().content.cloneNode(!0),a=i.firstChild,o=a.childNodes[1],s=o.parentNode,c=a.childNodes[3],l=c.parentNode,u=a.childNodes[5],d=u.parentNode;return n.appendChild(i),W(()=>{let e=r.get();M(()=>V(e,s,o))}),P(l,c,()=>{let t=e?.tagName.toLowerCase();return t==null?{__rue_compiled_branch_key:null,create:()=>_(Object.assign(e=>{let t=y(`unknown-host`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:t,create:()=>_(Object.assign(e=>{let n=y(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),P(d,u,()=>t?{__rue_compiled_branch_key:!0,create:()=>_(Object.assign(e=>{let t=y(`shadow-root`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>_(Object.assign(e=>{let t=y(`light-dom`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),n},!0),e=>O(()=>{}))},Ie=ne(e=>{let a=B(),l=E(),u=c(Se),m=t(e),h=L(`computed:1:4`,()=>d(()=>Ae(a)));h.get();let g=L(`computed:1:5`,()=>d(()=>Number(e.count??0)));g.get();let v=g,C=L(`computed:1:6`,()=>d(()=>String(e.accent??`teal`)));C.get();let w=L(`computed:1:7`,()=>d(()=>String(e.panelTitle??`Shadow console`)));w.get();let T=L(`computed:1:8`,()=>d(()=>Array.isArray(e.tags)?e.tags:[]));T.get();let D=L(`computed:1:9`,()=>d(()=>e.busy===!0));D.get();let O=L(`computed:1:10`,()=>d(()=>`${Math.max(8,Math.min(v.get()*9,100))}%`));return O.get(),n(t=>{let n=ce().content.cloneNode(!0).firstChild,c=n,d=n.childNodes[0].childNodes[1].childNodes[0],v=n.childNodes[0].childNodes[1].childNodes[1],E=n.childNodes[1].childNodes[0].childNodes[2].childNodes[0],ee=n.childNodes[1].childNodes[1].childNodes[2],j=n.childNodes[0].childNodes[0].childNodes[1].childNodes[0],N=j.parentNode,ne=n.childNodes[0].childNodes[0].childNodes[2].childNodes[1],I=ne.parentNode,L=n.childNodes[0].childNodes[0].childNodes[2].childNodes[3],z=L.parentNode,B=n.childNodes[0].childNodes[0].childNodes[2].childNodes[5],H=B.parentNode,U=n.childNodes[1].childNodes[0].childNodes[0].childNodes[0],ae=U.parentNode,q=n.childNodes[1].childNodes[0].childNodes[3].childNodes[0],J=q.parentNode,oe=n.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[1],se=oe.parentNode,le=n.childNodes[1].childNodes[2].childNodes[1].childNodes[1],Y=le.parentNode,X=n.childNodes[2].childNodes[0].childNodes[1],ue=X.parentNode,de=n.childNodes[2].childNodes[1].childNodes[0],fe=de.parentNode,pe=n.childNodes[2].childNodes[2].childNodes[0],me=pe.parentNode;W(()=>{f(c,`frame ${Oe(e)?`compact`:``}`)}),W(()=>{K(c,`data-accent`,String(C.get()))}),W(()=>{K(c,`data-busy`,String(D.get()?`yes`:`no`))}),K(d,`type`,`button`),f(d,`button primary`);let he=e=>{let t=()=>{m(`save`,{mountId:h.get(),panelTitle:w.get(),count:g.get(),tags:T.get(),busy:D.get()},{host:a?.tagName.toLowerCase()??`unknown`,rootMode:l?`shadow`:`light`})};typeof t==`function`&&t(e)};d.addEventListener(`click`,he),p(()=>d.removeEventListener(`click`,he)),K(v,`type`,`button`),f(v,`button`);let ge=e=>{let t=()=>{m(`pulse`,g.get()+1,C.get())};typeof t==`function`&&t(e)};v.addEventListener(`click`,ge),p(()=>v.removeEventListener(`click`,ge)),f(E,`meterFill`),W(()=>{let e={width:O.get()};s(E,e)}),s(ee,{height:`12px`}),W(()=>{let e=w.get();M(()=>V(e,N,j))}),W(()=>{let e=h.get();M(()=>V(e,I,ne))}),P(z,L,()=>{let e=a?.tagName.toLowerCase();return e==null?{__rue_compiled_branch_key:null,create:()=>_(Object.assign(e=>{let t=y(`unknown-host`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:e,create:()=>_(Object.assign(t=>{let n=y(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),P(H,B,()=>l?{__rue_compiled_branch_key:!0,create:()=>_(Object.assign(e=>{let t=y(`shadow-root 已开启`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>_(Object.assign(e=>{let t=y(`light-dom`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),W(()=>{let e=g.get();M(()=>V(e,ae,U))}),P(J,q,()=>T.get().length?{__rue_compiled_branch_key:!0,create:()=>_(Object.assign(e=>{let t=b(),n=te(`rue:list:end`);F(t,n);let a=[];return W(()=>{let e=T.get()||[];a=re(n.parentNode,n,a,e,(e,t)=>e,(e,t)=>{let n=x(e);return r((e,t,r)=>o(e,r,()=>_(Object.assign(e=>{let t=k(`span`,e);t.className=`chip`;let r=y(``);return F(t,r),G(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),i(()=>S(a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>_(Object.assign(e=>{let t=k(`span`,e);return t.className=`chip muted`,F(t,y(`暂无 tags`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),W(()=>{let e=u;M(()=>V(e,se,oe))});let Z=A(Y);return R(Z,ie,()=>({source:e,name:`badge`,props:{channel:u,count:g.get(),accent:C.get()},children:(e,t,n)=>o(e,n,()=>_(Object.assign(e=>{let t=b(),n=k(`span`,t);return F(t,n),n.setAttribute(`data-testid`,`ce-scoped-fallback`),F(n,y(`等待外层 scoped slot`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),Y.insertBefore(Z,le),W(()=>{let t=ke(e);M(()=>V(t,ue,X))}),P(fe,de,()=>D.get()?{__rue_compiled_branch_key:!0,create:()=>_(Object.assign(e=>{let t=y(`后台同步中`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>_(Object.assign(e=>{let t=y(`空闲`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),P(me,pe,()=>Oe(e)?{__rue_compiled_branch_key:!0,create:()=>_(Object.assign(e=>{let t=y(`compact on`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>_(Object.assign(e=>{let t=y(`compact off`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),n})}),Le=e=>{let r=t(e),i=L(`computed:1:11`,()=>d(()=>String(e.label??`Light DOM signal`)));i.get();let a=L(`computed:1:12`,()=>d(()=>String(e.tone??`teal`)));return a.get(),n(t=>{let n=le().content.cloneNode(!0).firstChild,o=n,s=n.childNodes[2],c=n.childNodes[0].childNodes[0].childNodes[0],l=c.parentNode,u=n.childNodes[0].childNodes[1],d=u.parentNode,m=n.childNodes[1].childNodes[0],h=m.parentNode,g=n.childNodes[1].childNodes[2],_=g.parentNode;W(()=>{f(o,`lightShell tone-${a.get()}`)}),K(s,`type`,`button`),f(s,`lightButton`);let v=t=>{let n=()=>{r(`light-tap`,{label:i.get(),events:Me(e),tags:Ne(e)})};typeof n==`function`&&n(t)};s.addEventListener(`click`,v),p(()=>s.removeEventListener(`click`,v)),W(()=>{let e=i.get();M(()=>V(e,l,c))});let y=A(d);return R(y,Fe,()=>({})),d.insertBefore(y,u),W(()=>{let t=Me(e);M(()=>V(t,h,m))}),W(()=>{let t=Ne(e);M(()=>V(t,_,g))}),n})},Re=N(Ie,{styles:Ce,nonce:ye,configureApp(){pe.value+=1}}),ze=N(Le,{shadowRoot:!1,styles:we,configureApp(){me.value+=1}}),Be=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};Be(be,Re),Be(xe,ze);var Ve=String.raw`import {
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

export default WebComponentsCopyableDemo`,He=()=>{let{activeTab:t,panelTitle:s,accent:c,count:d,tagInput:T,busy:E,compact:O,activePreset:j,slotNote:N,metaBadge:ne,lightLabel:L,eventLog:B,shadowNonce:H,shadowStyleCount:ie,lightStyleCount:se,shadowHostRef:ce,lightHostRef:le,shadowPropsPayload:Z,lightPropsPayload:_e,refreshDiagnostics:ve,scheduleDiagnostics:Q,syncShadowHost:ye,syncLightHost:be,syncHosts:xe,pushEvent:Ce,handleShadowSave:we,handleShadowPulse:De,bindCustomEvent:Oe,applyPreset:ke,appendTag:Ae,removeLastTag:je,clearTitleAttr:Me,clearEvents:Ne}=C(`useSetup:0:0`,()=>{let t=z(`preview`),n=z(`Ops Console / Native CE`),r=z(`teal`),i=z(7),a=z(`shadow, events, slots, props`),o=z(!1),s=z(!1),c=z(`ops`),l=z(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`),u=z(`SLA 99.99%`),d=z(`Light DOM signal`),f=z([]),p=z(`等待挂载`),m=z(0),h=z(0),g=I(),_=I(),y=()=>({count:i.value,tags:Ee(a.value),config:{compact:s.value,preset:c.value},busy:o.value}),b=()=>({metrics:{events:f.value.length,tags:Ee(a.value).length,busy:o.value}}),x=()=>{let e=g.current,t=_.current;m.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,p.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,h.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},S=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{x()})})},C=()=>{let e=g.current;if(!e)return;let t=n.value.trim();t?e.setAttribute(`panel-title`,t):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,r.value),e.props=y()},w=()=>{let e=_.current;if(!e)return;let t=d.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Pe(r.value)),e.props=b()},T=()=>{C(),w(),S()},E=(e,t,n)=>{f.value=[{source:e,name:t,detail:Te(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...f.value].slice(0,8),w(),S()},D=e=>{E(`shadow`,`save`,e.detail)},O=e=>{E(`shadow`,`pulse`,e.detail)},ee=(e,t,n)=>{if(!e)return()=>{};let r=e=>{E(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return v(()=>{let t=()=>{};Promise.resolve().then(()=>{T(),t=ee(_.current,`light-tap`,`light`),S()}),e(()=>{t()})}),{activeTab:t,panelTitle:n,accent:r,count:i,tagInput:a,busy:o,compact:s,activePreset:c,slotNote:l,metaBadge:u,lightLabel:d,eventLog:f,shadowNonce:p,shadowStyleCount:m,lightStyleCount:h,shadowHostRef:g,lightHostRef:_,shadowPropsPayload:y,lightPropsPayload:b,refreshDiagnostics:x,scheduleDiagnostics:S,syncShadowHost:C,syncLightHost:w,syncHosts:T,pushEvent:E,handleShadowSave:D,handleShadowPulse:O,bindCustomEvent:ee,applyPreset:e=>{c.value=e,e===`ops`?(n.value=`Ops Console / Native CE`,r.value=`teal`,i.value=7,a.value=`shadow, events, slots, props`,l.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,u.value=`SLA 99.99%`,d.value=`Light DOM signal`,o.value=!1,s.value=!1):e===`commerce`?(n.value=`Commerce Fulfillment Board`,r.value=`amber`,i.value=11,a.value=`checkout, fulfillment, analytics, queue`,l.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,u.value=`AOV +18%`,d.value=`Revenue pulse`,o.value=!1,s.value=!0):(n.value=`Incident Bridge / P1`,r.value=`rose`,i.value=13,a.value=`incident, pager, bridge, rollback`,l.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,u.value=`P1 ongoing`,d.value=`War-room heartbeat`,o.value=!0,s.value=!1),T()},appendTag:()=>{let e=Ee(a.value);e.push(`tag-${e.length+1}`),a.value=e.join(`, `),T()},removeLastTag:()=>{let e=Ee(a.value);e.pop(),a.value=e.join(`, `),T()},clearTitleAttr:()=>{n.value=``,T()},clearEvents:()=>{f.value=[],w(),S()}}});return(()=>{let e=n(()=>{let e=b(),v=de().content.cloneNode(!0),C=v.firstChild,A=C,I=C.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],R=C.childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0],z=C.childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes[0],q=C.childNodes[0].childNodes[0].childNodes[0].childNodes[4].childNodes[1].childNodes[1],J=C.childNodes[0].childNodes[0].childNodes[0].childNodes[5].childNodes[1],Y=C.childNodes[0].childNodes[0].childNodes[0].childNodes[6].childNodes[0].childNodes[0],X=C.childNodes[0].childNodes[0].childNodes[0].childNodes[6].childNodes[1].childNodes[0],ue=C.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[0],fe=C.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[1],ve=C.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[2],Ce=C.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[3],Oe=C.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1],Pe=C.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1],Fe=C.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],Ie=Fe.parentNode,Le=C.childNodes[0].childNodes[0].childNodes[0].childNodes[4].childNodes[0].childNodes[1],Re=Le.parentNode,ze=C.childNodes[0].childNodes[0].childNodes[0].childNodes[5].childNodes[0].childNodes[1].childNodes[0],Be=ze.parentNode,Ve=C.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],He=Ve.parentNode,Ue=C.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],We=Ue.parentNode,Ge=C.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0],Ke=Ge.parentNode,qe=C.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],Je=qe.parentNode,Ye=C.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[2],Xe=Ye.parentNode,Ze=C.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],Qe=Ze.parentNode,$e=C.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],et=$e.parentNode,tt=C.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0],nt=tt.parentNode,rt=C.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0],it=rt.parentNode,at=C.childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0],ot=at.parentNode,st=C.childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[1].childNodes[0],ct=st.parentNode;e.appendChild(v),W(()=>{f(A,t.value===`preview`?`mt-4 space-y-6`:`hidden`)}),f(I,`input input-bordered w-full`),W(()=>{a(I,s.value)});let lt=e=>{let t=e=>{s.value=e.target.value,ye(),Q()};typeof t==`function`&&t(e)};I.addEventListener(`input`,lt),p(()=>I.removeEventListener(`input`,lt)),f(R,`input input-bordered w-full`),W(()=>{a(R,T.value)});let ut=e=>{let t=e=>{T.value=e.target.value,xe()};typeof t==`function`&&t(e)};R.addEventListener(`input`,ut),p(()=>R.removeEventListener(`input`,ut)),f(z,`input input-bordered w-full`),W(()=>{a(z,N.value)});let dt=e=>{let t=e=>{N.value=e.target.value};typeof t==`function`&&t(e)};z.addEventListener(`input`,dt),p(()=>z.removeEventListener(`input`,dt)),f(q,`input input-bordered`),W(()=>{a(q,L.value)});let ft=e=>{let t=e=>{L.value=e.target.value,be(),Q()};typeof t==`function`&&t(e)};q.addEventListener(`input`,ft),p(()=>q.removeEventListener(`input`,ft)),K(J,`type`,`range`),K(J,`min`,`1`),K(J,`max`,`15`),W(()=>{a(J,d.value)}),f(J,`range range-primary`);let pt=e=>{let t=e=>{d.value=Number(e.target.value),ye(),Q()};typeof t==`function`&&t(e)};J.addEventListener(`input`,pt),p(()=>J.removeEventListener(`input`,pt)),K(Y,`type`,`checkbox`),f(Y,`toggle toggle-primary`),W(()=>{m(Y,!!E.value)});let mt=e=>{let t=e=>{E.value=e.target.checked,xe()};typeof t==`function`&&t(e)};Y.addEventListener(`change`,mt),p(()=>Y.removeEventListener(`change`,mt)),K(X,`type`,`checkbox`),f(X,`toggle toggle-secondary`),W(()=>{m(X,!!O.value)});let ht=e=>{let t=e=>{O.value=e.target.checked,ye(),Q()};typeof t==`function`&&t(e)};X.addEventListener(`change`,ht),p(()=>X.removeEventListener(`change`,ht)),f(ue,`btn btn-primary`);let gt=e=>{let t=Ae;typeof t==`function`&&t(e)};ue.addEventListener(`click`,gt),p(()=>ue.removeEventListener(`click`,gt)),f(fe,`btn btn-outline`);let _t=e=>{let t=je;typeof t==`function`&&t(e)};fe.addEventListener(`click`,_t),p(()=>fe.removeEventListener(`click`,_t)),f(ve,`btn btn-secondary`);let vt=e=>{let t=()=>{d.value+=2,ye(),Q()};typeof t==`function`&&t(e)};ve.addEventListener(`click`,vt),p(()=>ve.removeEventListener(`click`,vt)),f(Ce,`btn btn-ghost`);let yt=e=>{let t=Me;typeof t==`function`&&t(e)};Ce.addEventListener(`click`,yt),p(()=>Ce.removeEventListener(`click`,yt)),W(()=>{f(Oe,`alert ${B.value.length?`alert-success`:`alert-soft`} py-3`)}),K(Oe,`data-testid`,`ce-latest-event`),f(Pe,`btn btn-sm btn-ghost`);let bt=e=>{let t=Ne;typeof t==`function`&&t(e)};Pe.addEventListener(`click`,bt),p(()=>Pe.removeEventListener(`click`,bt));let xt=[];W(()=>{xt=re(Ie,Fe,xt,[`ops`,`commerce`,`incident`],(e,t)=>e,(e,t)=>{let n=x(e);return r((e,t,r)=>o(e,r,()=>_(Object.assign(e=>{let t=k(`button`,e),r;W(()=>{let e=`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${j.value===n.get()?`btn-primary`:`btn-outline`}`,i=e==null?``:String(e);Object.is(r,i)||(r=i,t.className=i)});let a=e=>{let t=()=>ke(n.get());typeof t==`function`&&t(e)};t.addEventListener(`click`,a),i(()=>t.removeEventListener(`click`,a));let o=y(``);return F(t,o),G(o,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),i(()=>S(xt));let $=U(`select`,Re);D(Re,$),Re.insertBefore($,Le),f($,`select select-bordered`),W(()=>{a($,c.value)});let St=e=>{let t=e=>{c.value=e.target.value,xe()};typeof t==`function`&&t(e)};$.addEventListener(`change`,St),p(()=>$.removeEventListener(`change`,St));let Ct=U(`option`,$);D($,Ct),K(Ct,`value`,`teal`),D(Ct,ae(`teal`));let wt=U(`option`,$);D($,wt),K(wt,`value`,`amber`),D(wt,ae(`amber`));let Tt=U(`option`,$);return D($,Tt),K(Tt,`value`,`rose`),D(Tt,ae(`rose`)),W(()=>{let e=d.value;M(()=>V(e,Be,ze))}),W(()=>{let e=pe.value;M(()=>V(e,He,Ve))}),W(()=>{let e=me.value;M(()=>V(e,We,Ue))}),W(()=>{let e=he.value+ge.value;M(()=>V(e,Ke,Ge))}),W(()=>{let e=B.value.length?`最近事件：${B.value[0].source}.${B.value[0].name} \xb7 ${B.value[0].at}`:`等待自定义元素事件`;M(()=>V(e,Je,qe))}),W(()=>{let e=n(()=>{let e=b(),t=U(`div`,e);D(e,t),f(t,`space-y-4`);let a=U(`rue-shadow-console`,t);g(a,`__rue_context_parent_instance__`,h()),D(t,a),ee(a,()=>ce);let s=e=>{let t=we;typeof t==`function`&&t(e)};a.addEventListener(`save`,s),p(()=>a.removeEventListener(`save`,s));let c=e=>{let t=De;typeof t==`function`&&t(e)};a.addEventListener(`pulse`,c),p(()=>a.removeEventListener(`pulse`,c)),g(a,`__rue_slots`,{badge:({channel:e,count:t,accent:r})=>n(n=>{let i=oe().content.cloneNode(!0).firstChild,a=i.childNodes[0],o=a.parentNode,s=i.childNodes[2],c=s.parentNode,l=i.childNodes[4],u=l.parentNode;return W(()=>{let t=e;M(()=>V(t,o,a))}),W(()=>{let e=t;M(()=>V(e,c,s))}),W(()=>{let e=r;M(()=>V(e,u,l))}),i})});let l=U(`div`,a);D(a,l),K(l,`slot`,`meta`);let d=U(`span`,l);D(l,d),f(d,`status status-success`);let m=U(`span`,l);D(l,m);let v=w(m);D(m,v),W(()=>{u(v,ne.value)});let C=U(`div`,a);D(a,C),f(C,`space-y-3 text-sm text-base-content/80`);let E=U(`p`,C);D(C,E);let O=w(E);D(E,O),W(()=>{u(O,N.value)});let A=U(`div`,C);D(C,A),f(A,`flex flex-wrap gap-2`);let j=te(`rue:list:end`);F(A,j);let P=[];W(()=>{let e=Ee(T.value)||[];P=re(A,j,P,e,(e,t)=>e,(e,t)=>{let n=x(e);return r((e,t,r)=>o(e,r,()=>_(Object.assign(e=>{let t=k(`span`,e);t.className=`badge badge-outline`;let r=y(``);return F(t,r),G(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),i(()=>S(P));let I=U(`rue-light-signal`,t);return g(I,`__rue_context_parent_instance__`,h()),D(t,I),ee(I,()=>le),e}),t=l(Se.Provider,()=>({value:`${j.value}:${c.value}`,children:e}));M(()=>V(t,Xe,Ye))}),W(()=>{let e=ie.value;M(()=>V(e,Qe,Ze))}),W(()=>{let e=H.value;M(()=>V(e,et,$e))}),W(()=>{let e=se.value;M(()=>V(e,nt,tt))}),P(it,rt,()=>B.value.length?{__rue_compiled_branch_key:!0,create:()=>_(Object.assign(e=>{let t=b(),n=te(`rue:list:end`);F(t,n);let a=[];return W(()=>{let e=B.value||[];a=re(n.parentNode,n,a,e,(e,t)=>`${e.name}-${e.at}-${t}`,(e,t)=>{let n=x(e);return r((e,t,r)=>o(e,r,()=>_(Object.assign(e=>{let t=k(`div`,e);t.className=`rounded-2xl border border-base-300 bg-base-200/60 p-3`;let r=k(`div`,t);F(t,r),r.className=`flex items-center justify-between gap-3 text-sm`;let i=k(`div`,r);F(r,i),i.className=`flex items-center gap-2`;let a=k(`span`,i);F(i,a);let o;W(()=>{let e=`badge ${n.get().source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`,t=e==null?``:String(e);Object.is(o,t)||(o=t,a.className=t)});let s=y(``);F(a,s),G(s,()=>n.get().source);let c=k(`span`,i);F(i,c),c.className=`font-medium`;let l=y(``);F(c,l),G(l,()=>n.get().name);let u=k(`span`,r);F(r,u),u.className=`text-base-content/50`;let d=y(``);F(u,d),G(d,()=>n.get().at);let f=k(`pre`,t);F(t,f),f.className=`mt-2 text-xs whitespace-pre-wrap break-words`;let p=y(``);return F(f,p),G(p,()=>n.get().detail),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),i(()=>S(a)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>_(Object.assign(e=>{let t=k(`div`,e);t.className=`alert alert-soft`;let n=k(`span`,t);return F(t,n),F(n,y(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),W(()=>{let e=Te(Z());M(()=>V(e,ot,at))}),W(()=>{let e=Te(_e());M(()=>V(e,ct,st))}),e});return l(J,()=>({children:[_(e=>Y().content.cloneNode(!0).firstChild),_(e=>X().content.cloneNode(!0).firstChild),_(Object.assign(e=>{let n=ue().content.cloneNode(!0).firstChild,r=n.childNodes[0],a=n.childNodes[1];r.setAttribute(`role`,`tab`);let o;W(()=>{let e=`tab ${t.value===`preview`?`tab-active`:``}`,n=e==null?``:String(e);Object.is(o,n)||(o=n,r.className=n)});let s=e=>{let n=()=>{t.value=`preview`};typeof n==`function`&&n(e)};r.addEventListener(`click`,s),i(()=>r.removeEventListener(`click`,s)),a.setAttribute(`role`,`tab`);let c;W(()=>{let e=`tab ${t.value===`code`?`tab-active`:``}`,n=e==null?``:String(e);Object.is(c,n)||(c=n,a.className=n)});let l=e=>{let n=()=>{t.value=`code`};typeof n==`function`&&n(e)};return a.addEventListener(`click`,l),i(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e,_(Object.assign(e=>{let n=fe().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o;W(()=>{let e=t.value===`code`?`mt-4`:`hidden`,n=e==null?``:String(e);Object.is(o,n)||(o=n,r.className=n)});let s=A(a);return R(s,q,()=>({lang:`tsx`,code:Ve})),a.insertBefore(s,i),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))]}))})()};ne(Fe);export{He as default};
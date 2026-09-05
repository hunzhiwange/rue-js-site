import{Bt as e,C as t,D as n,Dn as r,Et as i,It as a,K as o,Kt as s,L as c,Lt as l,O as u,Rt as d,S as f,Sn as p,Tn as m,Ut as h,V as g,W as _,X as v,Y as y,Z as b,_n as x,_t as S,at as C,bn as w,d as T,dt as E,f as D,fn as O,ft as k,gn as A,hn as j,ht as M,it as N,k as P,kn as F,mn as I,nt as L,ot as R,p as z,pn as ee,pt as te,q as B,qt as V,rt as H,st as ne,u as re,ut as U,wn as W,x as ie,yn as G,z as ae}from"./rue-runtime-CwEGJ854.js";import{t as K}from"./Code-DUvGro8N.js";import{r as q}from"./SidebarPlaygroundExample-EGR0CyDT.js";var oe=x(`<div class="bridgeSlot" data-testid="ce-scoped-slot"><!--rue:text-hole:0--> / <!--rue:text-hole:1--> / <!--rue:text-hole:2--></div>`),se=x(`<p class="lightMeta">实例 #<!--rue:text-hole:0--> · <!--rue:text-hole:1--> · <!--rue:text-hole:2--></p>`),ce=x(`<article><header class="hero"><div><p class="eyebrow">Shadow Root / Slot / CustomEvent</p><h2 class="title"><!--rue:text-hole:0--></h2><p class="subtitle">实例 #<!--rue:text-hole:1--> · <!--rue:text-hole:2--> · <!--rue:text-hole:3--></p></div><div class="actions"><button type="button" class="button primary">派发 save</button><button type="button" class="button">派发 pulse</button></div></header><div class="grid"><section class="panel"><div class="metricValue"><!--rue:text-hole:4--></div><div class="metricLabel">这个数值来自宿主上的 el.props.count</div><div class="meter"><div class="meterFill"></div></div><div class="chips"><!--rue:text-hole:5--></div></section><section class="panel"><p class="slotTitle">命名 Slot</p><slot name="meta"></slot><div></div><p class="slotTitle">默认 Slot</p><slot></slot></section><section class="panel"><p class="slotTitle">Rue scoped slot / Context</p><div class="bridgeBox"><div class="bridgeContext" data-testid="ce-context">Context: <!--rue:text-hole:6--></div><!--rue:opaque-hole:7--></div></section></div><footer class="footer"><span>preset: <!--rue:text-hole:8--></span><span><!--rue:text-hole:9--></span><span><!--rue:text-hole:10--></span></footer></article>`),le=x(`<div><div><p class="lightTitle"><!--rue:text-hole:0--></p><!--rue:opaque-hole:1--></div><div class="lightValue"><!--rue:text-hole:2--> events / <!--rue:text-hole:3--> tags</div><button type="button" class="lightButton">emit</button></div>`),J=x(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">原生 Web Components</h1>`),Y=x(`<p class="text-base-content/70 max-w-4xl leading-7">这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。</p>`),X=x(`<div role="tablist" class="tabs tabs-box mt-4"><button role="tab">效果</button><button role="tab">代码</button></div>`),ue=x(`<div><div class="grid gap-6 items-start"><div class="card bg-base-100 shadow-xl border border-base-300"><div class="card-body gap-5"><div><p class="text-xs uppercase tracking-[0.28em] text-base-content/45">Preset</p><div class="mt-3 flex w-full gap-2"><!--rue:text-hole:0--></div></div><label class="floating-label"><input class="input input-bordered w-full"><span>panel-title attribute</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>host.props.tags（逗号分隔）</span></label><label class="floating-label"><input class="input input-bordered w-full"><span>默认 slot 文案</span></label><div class="grid gap-3 sm:grid-cols-2"><fieldset class="fieldset"><legend class="fieldset-legend">accent attribute</legend><!--rue:opaque-hole:1--></fieldset><fieldset class="fieldset"><legend class="fieldset-legend">light label attribute</legend><input class="input input-bordered"></fieldset></div><div><div class="flex items-center justify-between text-sm mb-2"><span>host.props.count</span><span class="font-semibold"><!--rue:text-hole:2--></span></div><input type="range" min="1" max="15" class="range range-primary"></div><div class="grid gap-3 sm:grid-cols-2"><label class="label cursor-pointer justify-start gap-3"><input type="checkbox" class="toggle toggle-primary"><span class="label-text">host.props.busy</span></label><label class="label cursor-pointer justify-start gap-3"><input type="checkbox" class="toggle toggle-secondary"><span class="label-text">host.props.config.compact</span></label></div><div class="grid gap-2 sm:grid-cols-2"><button class="btn btn-primary">追加 tag</button><button class="btn btn-outline">删除最后一个 tag</button><button class="btn btn-secondary">count + 2</button><button class="btn btn-ghost">移除 title attribute</button></div></div></div><div class="space-y-6"><div class="card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden"><div class="card-body gap-5"><div class="flex flex-wrap items-center justify-between gap-4"><div><p class="text-xs uppercase tracking-[0.28em] text-base-content/45">Live Preview</p><h2 class="text-2xl font-semibold mt-2">Shadow + Light 双宿主联动</h2></div><div class="stats stats-vertical lg:stats-horizontal shadow bg-base-100"><div class="stat py-3 px-4"><div class="stat-title">shadow configureApp</div><div class="stat-value text-lg"><!--rue:text-hole:3--></div></div><div class="stat py-3 px-4"><div class="stat-title">light configureApp</div><div class="stat-value text-lg"><!--rue:text-hole:4--></div></div><div class="stat py-3 px-4"><div class="stat-title">mounted instances</div><div class="stat-value text-lg"><!--rue:text-hole:5--></div></div></div></div><div data-testid="ce-latest-event"><span><!--rue:text-hole:6--></span></div><!--rue:opaque-hole:7--></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-4"><div class="flex items-center justify-between gap-3"><h3 class="card-title text-lg">运行时诊断</h3><span class="badge badge-primary badge-outline">nonce / styles / mode</span></div><ul class="list bg-base-100 rounded-box"><li class="list-row"><div class="font-medium">shadow style tags</div><div class="text-right"><!--rue:text-hole:8--></div></li><li class="list-row"><div class="font-medium">shadow nonce</div><div class="text-right break-all"><!--rue:text-hole:9--></div></li><li class="list-row"><div class="font-medium">light style tags</div><div class="text-right"><!--rue:text-hole:10--></div></li><li class="list-row"><div class="font-medium">hook 期望</div><div class="text-right">shadow / light</div></li></ul></div></div><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-4"><div class="flex items-center justify-between gap-3"><h3 class="card-title text-lg">事件桥接日志</h3><button class="btn btn-sm btn-ghost">清空</button></div><div class="space-y-3 max-h-[320px] overflow-auto pr-1"><!--rue:text-hole:11--></div></div></div></div><div class="grid gap-6"><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-3"><h3 class="card-title text-lg">shadow host.props 快照</h3><pre class="text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4"><!--rue:text-hole:12--></pre></div></div><div class="card bg-base-100 shadow border border-base-300"><div class="card-body gap-3"><h3 class="card-title text-lg">light host.props 快照</h3><pre class="text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4"><!--rue:text-hole:13--></pre></div></div></div></div></div></div>`),Z=x(`<div><div class="card bg-base-100 shadow overflow-auto"><div class="card-body p-0"><!--rue:opaque-hole:0--></div></div></div>`),de=V(`ref:1:0`,()=>e(0)),fe=V(`ref:1:1`,()=>e(0)),pe=V(`ref:1:2`,()=>e(0)),me=V(`ref:1:3`,()=>e(0)),he=0,ge=0,_e=new WeakMap,Q=new WeakMap,ve=`rue-demo-nonce`,ye=`rue-shadow-console`,be=`rue-light-signal`,xe=u(`provider:missing`),Se=[`
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
  `],we=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Te=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),Ee=e=>e&&typeof e==`object`?e:void 0,De=e=>Ee(e.config)?.compact===!0,Oe=e=>{let t=Ee(e.config)?.preset;return typeof t==`string`?t:`manual`},ke=e=>e?_e.get(e)||(he+=1,pe.value+=1,_e.set(e,he),he):0,Ae=e=>e?Q.get(e)||(ge+=1,me.value+=1,Q.set(e,ge),ge):0,je=e=>Number(Ee(e.metrics)?.events??0),Me=e=>Number(Ee(e.metrics)?.tags??0),Ne=e=>e,Pe=()=>{let e=D(),t=z(),n=p(()=>Ae(e));return n.get(),B(i(Object.assign(r=>{let a=se().content.cloneNode(!0).firstChild,o=a.childNodes[1],s=o.parentNode,c=a.childNodes[3],l=c.parentNode,u=a.childNodes[5],d=u.parentNode,f=A(``);return s.insertBefore(f,o),s.removeChild(o),w(f,()=>n.get()),g(l,c,()=>{let t=e?.tagName.toLowerCase();return t==null?{__rue_compiled_branch_key:null,create:()=>i(Object.assign(e=>{let t=A(`unknown-host`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:t,create:()=>i(Object.assign(e=>{let n=A(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),g(d,u,()=>t?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=A(`shadow-root`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=A(`light-dom`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>ae(()=>{}))},Fe=s(e=>{let r=D(),a=z(),s=P(xe),u=n(e),d=V(`computed:1:4`,()=>p(()=>ke(r)));d.get();let m=V(`computed:1:5`,()=>p(()=>Number(e.count??0)));m.get();let h=m,v=V(`computed:1:6`,()=>p(()=>String(e.accent??`teal`)));v.get();let b=V(`computed:1:7`,()=>p(()=>String(e.panelTitle??`Shadow console`)));b.get();let x=V(`computed:1:8`,()=>p(()=>Array.isArray(e.tags)?e.tags:[]));x.get();let S=V(`computed:1:9`,()=>p(()=>e.busy===!0));S.get();let C=V(`computed:1:10`,()=>p(()=>`${Math.max(8,Math.min(h.get()*9,100))}%`));return C.get(),M(n=>{let p=ce().content.cloneNode(!0).firstChild,h=p,T=p.childNodes[0].childNodes[1].childNodes[0],D=p.childNodes[0].childNodes[1].childNodes[1],k=p.childNodes[1].childNodes[0].childNodes[2].childNodes[0],M=p.childNodes[1].childNodes[1].childNodes[2],N=p.childNodes[0].childNodes[0].childNodes[1].childNodes[0],P=N.parentNode,z=p.childNodes[0].childNodes[0].childNodes[2].childNodes[1],te=z.parentNode,B=p.childNodes[0].childNodes[0].childNodes[2].childNodes[3],V=B.parentNode,H=p.childNodes[0].childNodes[0].childNodes[2].childNodes[5],ne=H.parentNode,U=p.childNodes[1].childNodes[0].childNodes[0].childNodes[0],G=U.parentNode,ae=p.childNodes[1].childNodes[0].childNodes[3].childNodes[0],K=ae.parentNode,q=p.childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[1],oe=q.parentNode,se=p.childNodes[1].childNodes[2].childNodes[1].childNodes[1],le=se.parentNode,J=p.childNodes[2].childNodes[0].childNodes[1],Y=J.parentNode,X=p.childNodes[2].childNodes[1].childNodes[0],ue=X.parentNode,Z=p.childNodes[2].childNodes[2].childNodes[0],de=Z.parentNode;W(()=>{c(h,`frame ${De(e)?`compact`:``}`)}),W(()=>{R(h,`data-accent`,String(v.get()))}),W(()=>{R(h,`data-busy`,String(S.get()?`yes`:`no`))}),R(T,`type`,`button`),c(T,`button primary`);let fe=e=>{let t=()=>{u(`save`,{mountId:d.get(),panelTitle:b.get(),count:m.get(),tags:x.get(),busy:S.get()},{host:r?.tagName.toLowerCase()??`unknown`,rootMode:a?`shadow`:`light`})};typeof t==`function`&&t(e)};T.addEventListener(`click`,fe),l(()=>T.removeEventListener(`click`,fe)),R(D,`type`,`button`),c(D,`button`);let pe=e=>{let t=()=>{u(`pulse`,m.get()+1,v.get())};typeof t==`function`&&t(e)};D.addEventListener(`click`,pe),l(()=>D.removeEventListener(`click`,pe)),c(k,`meterFill`),W(()=>{let e={width:C.get()};E(k,e)}),E(M,{height:`12px`}),W(()=>{let e=b.get();F(()=>y(e,P,N))}),W(()=>{let e=d.get();F(()=>y(e,te,z))}),g(V,B,()=>{let e=r?.tagName.toLowerCase();return e==null?{__rue_compiled_branch_key:null,create:()=>i(Object.assign(e=>{let t=A(`unknown-host`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:e,create:()=>i(Object.assign(t=>{let n=A(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}}),g(ne,H,()=>a?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=A(`shadow-root 已开启`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=A(`light-dom`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),W(()=>{let e=m.get();F(()=>y(e,G,U))}),g(K,ae,()=>x.get().length?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let n=L(),r=ee(`rue:list:end`);O(n,r);let a=[];return W(()=>{let e=x.get()||[];a=t(r.parentNode,r,a,e,(e,t)=>e,(e,t)=>{let n=_(e),r=_(t);return f((e,t,r)=>ie(e,r,()=>i(Object.assign(e=>{let t=j(`span`,e);t.className=`chip`;let r=A(``);return O(t,r),w(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=j(`span`,e);return t.className=`chip muted`,O(t,A(`暂无 tags`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),W(()=>{let e=s;F(()=>y(e,oe,q))});let me=I(le);return o(me,re,()=>({source:e,name:`badge`,props:{channel:s,count:m.get(),accent:v.get()},children:(e,t,n)=>ie(e,n,()=>i(Object.assign(e=>{let t=L(),n=j(`span`,t);return O(t,n),n.setAttribute(`data-testid`,`ce-scoped-fallback`),O(n,A(`等待外层 scoped slot`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),le.insertBefore(me,se),W(()=>{let t=Oe(e);F(()=>y(t,Y,J))}),W(()=>{let e=S.get()?`后台同步中`:`空闲`;F(()=>y(e,ue,X))}),g(de,Z,()=>De(e)?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let t=A(`compact on`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=A(`compact off`);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),p})}),Ie=e=>{let t=n(e),r=V(`computed:1:11`,()=>p(()=>String(e.label??`Light DOM signal`)));r.get();let i=V(`computed:1:12`,()=>p(()=>String(e.tone??`teal`)));return i.get(),M(n=>{let a=le().content.cloneNode(!0).firstChild,s=a,u=a.childNodes[2],d=a.childNodes[0].childNodes[0].childNodes[0],f=d.parentNode,p=a.childNodes[0].childNodes[1],m=p.parentNode,h=a.childNodes[1].childNodes[0],g=h.parentNode,_=a.childNodes[1].childNodes[2],v=_.parentNode;W(()=>{c(s,`lightShell tone-${i.get()}`)}),R(u,`type`,`button`),c(u,`lightButton`);let b=n=>{let i=()=>{t(`light-tap`,{label:r.get(),events:je(e),tags:Me(e)})};typeof i==`function`&&i(n)};u.addEventListener(`click`,b),l(()=>u.removeEventListener(`click`,b)),W(()=>{let e=r.get();F(()=>y(e,f,d))});let x=I(m);return o(x,Pe,()=>({})),m.insertBefore(x,p),W(()=>{let t=je(e);F(()=>y(t,g,h))}),W(()=>{let t=Me(e);F(()=>y(t,v,_))}),a})},Le=T(Fe,{styles:Se,nonce:ve,configureApp(){de.value+=1}}),Re=T(Ie,{shadowRoot:!1,styles:Ce,configureApp(){fe.value+=1}}),ze=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};ze(ye,Le),ze(be,Re);var Be=String.raw`import {
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

export default WebComponentsCopyableDemo`,Ve=()=>{let{activeTab:n,panelTitle:s,accent:u,count:p,tagInput:x,busy:T,compact:E,activePreset:D,slotNote:P,metaBadge:z,lightLabel:B,eventLog:V,shadowNonce:re,shadowStyleCount:ae,lightStyleCount:se,shadowHostRef:ce,lightHostRef:le,shadowPropsPayload:he,lightPropsPayload:ge,refreshDiagnostics:_e,scheduleDiagnostics:Q,syncShadowHost:ve,syncLightHost:ye,syncHosts:be,pushEvent:Se,handleShadowSave:Ce,handleShadowPulse:Ee,bindCustomEvent:De,applyPreset:Oe,appendTag:ke,removeLastTag:Ae,clearTitleAttr:je,clearEvents:Me}=G(`useSetup:0:0`,()=>{let t=e(`preview`),n=e(`Ops Console / Native CE`),r=e(`teal`),i=e(7),o=e(`shadow, events, slots, props`),s=e(!1),c=e(!1),l=e(`ops`),u=e(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`),f=e(`SLA 99.99%`),p=e(`Light DOM signal`),m=e([]),g=e(`等待挂载`),_=e(0),v=e(0),y=h(),b=h(),x=()=>({count:i.value,tags:Te(o.value),config:{compact:c.value,preset:l.value},busy:s.value}),S=()=>({metrics:{events:m.value.length,tags:Te(o.value).length,busy:s.value}}),C=()=>{let e=y.current,t=b.current;_.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,g.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,v.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},w=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{C()})})},T=()=>{let e=y.current;if(!e)return;let t=n.value.trim();t?e.setAttribute(`panel-title`,t):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,r.value),e.props=x()},E=()=>{let e=b.current;if(!e)return;let t=p.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Ne(r.value)),e.props=S()},D=()=>{T(),E(),w()},O=(e,t,n)=>{m.value=[{source:e,name:t,detail:we(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...m.value].slice(0,8),E(),w()},k=e=>{O(`shadow`,`save`,e.detail)},A=e=>{O(`shadow`,`pulse`,e.detail)},j=(e,t,n)=>{if(!e)return()=>{};let r=e=>{O(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return a(()=>{let e=()=>{};Promise.resolve().then(()=>{D(),e=j(b.current,`light-tap`,`light`),w()}),d(()=>{e()})}),{activeTab:t,panelTitle:n,accent:r,count:i,tagInput:o,busy:s,compact:c,activePreset:l,slotNote:u,metaBadge:f,lightLabel:p,eventLog:m,shadowNonce:g,shadowStyleCount:_,lightStyleCount:v,shadowHostRef:y,lightHostRef:b,shadowPropsPayload:x,lightPropsPayload:S,refreshDiagnostics:C,scheduleDiagnostics:w,syncShadowHost:T,syncLightHost:E,syncHosts:D,pushEvent:O,handleShadowSave:k,handleShadowPulse:A,bindCustomEvent:j,applyPreset:e=>{l.value=e,e===`ops`?(n.value=`Ops Console / Native CE`,r.value=`teal`,i.value=7,o.value=`shadow, events, slots, props`,u.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,f.value=`SLA 99.99%`,p.value=`Light DOM signal`,s.value=!1,c.value=!1):e===`commerce`?(n.value=`Commerce Fulfillment Board`,r.value=`amber`,i.value=11,o.value=`checkout, fulfillment, analytics, queue`,u.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,f.value=`AOV +18%`,p.value=`Revenue pulse`,s.value=!1,c.value=!0):(n.value=`Incident Bridge / P1`,r.value=`rose`,i.value=13,o.value=`incident, pager, bridge, rollback`,u.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,f.value=`P1 ongoing`,p.value=`War-room heartbeat`,s.value=!0,c.value=!1),D()},appendTag:()=>{let e=Te(o.value);e.push(`tag-${e.length+1}`),o.value=e.join(`, `),D()},removeLastTag:()=>{let e=Te(o.value);e.pop(),o.value=e.join(`, `),D()},clearTitleAttr:()=>{n.value=``,D()},clearEvents:()=>{m.value=[],E(),w()}}});return(()=>{let e=M(()=>{let e=L(),a=ue().content.cloneNode(!0),o=a.firstChild,d=o,h=o.childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],I=o.childNodes[0].childNodes[0].childNodes[0].childNodes[2].childNodes[0],G=o.childNodes[0].childNodes[0].childNodes[0].childNodes[3].childNodes[0],K=o.childNodes[0].childNodes[0].childNodes[0].childNodes[4].childNodes[1].childNodes[1],q=o.childNodes[0].childNodes[0].childNodes[0].childNodes[5].childNodes[1],J=o.childNodes[0].childNodes[0].childNodes[0].childNodes[6].childNodes[0].childNodes[0],Y=o.childNodes[0].childNodes[0].childNodes[0].childNodes[6].childNodes[1].childNodes[0],X=o.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[0],Z=o.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[1],_e=o.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[2],Se=o.childNodes[0].childNodes[0].childNodes[0].childNodes[7].childNodes[3],De=o.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1],Ne=o.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1],Pe=o.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0],Fe=Pe.parentNode,Ie=o.childNodes[0].childNodes[0].childNodes[0].childNodes[4].childNodes[0].childNodes[1],Le=Ie.parentNode,Re=o.childNodes[0].childNodes[0].childNodes[0].childNodes[5].childNodes[0].childNodes[1].childNodes[0],ze=Re.parentNode,Be=o.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],Ve=Be.parentNode,He=o.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],Ue=He.parentNode,We=o.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0],Ge=We.parentNode,Ke=o.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0],qe=Ke.parentNode,Je=o.childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[2],Ye=Je.parentNode,Xe=o.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],Ze=Xe.parentNode,Qe=o.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0],$e=Qe.parentNode,et=o.childNodes[0].childNodes[1].childNodes[1].childNodes[0].childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0],tt=et.parentNode,nt=o.childNodes[0].childNodes[1].childNodes[1].childNodes[1].childNodes[0].childNodes[1].childNodes[0],rt=nt.parentNode,it=o.childNodes[0].childNodes[1].childNodes[2].childNodes[0].childNodes[0].childNodes[1].childNodes[0],at=it.parentNode,ot=o.childNodes[0].childNodes[1].childNodes[2].childNodes[1].childNodes[0].childNodes[1].childNodes[0],st=ot.parentNode;e.appendChild(a),W(()=>{c(d,n.value===`preview`?`mt-4 space-y-6`:`hidden`)}),c(h,`input input-bordered w-full`),W(()=>{k(h,s.value)});let ct=e=>{let t=e=>{s.value=e.target.value,ve(),Q()};typeof t==`function`&&t(e)};h.addEventListener(`input`,ct),l(()=>h.removeEventListener(`input`,ct)),c(I,`input input-bordered w-full`),W(()=>{k(I,x.value)});let lt=e=>{let t=e=>{x.value=e.target.value,be()};typeof t==`function`&&t(e)};I.addEventListener(`input`,lt),l(()=>I.removeEventListener(`input`,lt)),c(G,`input input-bordered w-full`),W(()=>{k(G,P.value)});let ut=e=>{let t=e=>{P.value=e.target.value};typeof t==`function`&&t(e)};G.addEventListener(`input`,ut),l(()=>G.removeEventListener(`input`,ut)),c(K,`input input-bordered`),W(()=>{k(K,B.value)});let dt=e=>{let t=e=>{B.value=e.target.value,ye(),Q()};typeof t==`function`&&t(e)};K.addEventListener(`input`,dt),l(()=>K.removeEventListener(`input`,dt)),R(q,`type`,`range`),R(q,`min`,`1`),R(q,`max`,`15`),W(()=>{k(q,p.value)}),c(q,`range range-primary`);let ft=e=>{let t=e=>{p.value=Number(e.target.value),ve(),Q()};typeof t==`function`&&t(e)};q.addEventListener(`input`,ft),l(()=>q.removeEventListener(`input`,ft)),R(J,`type`,`checkbox`),c(J,`toggle toggle-primary`),W(()=>{ne(J,!!T.value)});let pt=e=>{let t=e=>{T.value=e.target.checked,be()};typeof t==`function`&&t(e)};J.addEventListener(`change`,pt),l(()=>J.removeEventListener(`change`,pt)),R(Y,`type`,`checkbox`),c(Y,`toggle toggle-secondary`),W(()=>{ne(Y,!!E.value)});let mt=e=>{let t=e=>{E.value=e.target.checked,ve(),Q()};typeof t==`function`&&t(e)};Y.addEventListener(`change`,mt),l(()=>Y.removeEventListener(`change`,mt)),c(X,`btn btn-primary`);let ht=e=>{let t=ke;typeof t==`function`&&t(e)};X.addEventListener(`click`,ht),l(()=>X.removeEventListener(`click`,ht)),c(Z,`btn btn-outline`);let gt=e=>{let t=Ae;typeof t==`function`&&t(e)};Z.addEventListener(`click`,gt),l(()=>Z.removeEventListener(`click`,gt)),c(_e,`btn btn-secondary`);let _t=e=>{let t=()=>{p.value+=2,ve(),Q()};typeof t==`function`&&t(e)};_e.addEventListener(`click`,_t),l(()=>_e.removeEventListener(`click`,_t)),c(Se,`btn btn-ghost`);let vt=e=>{let t=je;typeof t==`function`&&t(e)};Se.addEventListener(`click`,vt),l(()=>Se.removeEventListener(`click`,vt)),W(()=>{c(De,`alert ${V.value.length?`alert-success`:`alert-soft`} py-3`)}),R(De,`data-testid`,`ce-latest-event`),c(Ne,`btn btn-sm btn-ghost`);let yt=e=>{let t=Me;typeof t==`function`&&t(e)};Ne.addEventListener(`click`,yt),l(()=>Ne.removeEventListener(`click`,yt));let bt=[];W(()=>{bt=t(Fe,Pe,bt,[`ops`,`commerce`,`incident`],(e,t)=>e,(e,t)=>{let n=_(e),a=_(t);return f((e,t,a)=>ie(e,a,()=>i(Object.assign(e=>{let t=j(`button`,e),i;W(()=>{let e=`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${D.value===n.get()?`btn-primary`:`btn-outline`}`,r=e==null?``:String(e);Object.is(i,r)||(i=r,t.className=r)});let a=e=>{let t=()=>Oe(n.get());typeof t==`function`&&t(e)};t.addEventListener(`click`,a),r(()=>t.removeEventListener(`click`,a));let o=A(``);return O(t,o),w(o,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r),a.set(i)})})});let $=H(`select`,Le);v(Le,$),Le.insertBefore($,Ie),c($,`select select-bordered`),W(()=>{k($,u.value)});let xt=e=>{let t=e=>{u.value=e.target.value,be()};typeof t==`function`&&t(e)};$.addEventListener(`change`,xt),l(()=>$.removeEventListener(`change`,xt));let St=H(`option`,$);v($,St),R(St,`value`,`teal`),v(St,N(`teal`));let Ct=H(`option`,$);v($,Ct),R(Ct,`value`,`amber`),v(Ct,N(`amber`));let wt=H(`option`,$);return v($,wt),R(wt,`value`,`rose`),v(wt,N(`rose`)),W(()=>{let e=p.value;F(()=>y(e,ze,Re))}),W(()=>{let e=de.value;F(()=>y(e,Ve,Be))}),W(()=>{let e=fe.value;F(()=>y(e,Ue,He))}),W(()=>{let e=pe.value+me.value;F(()=>y(e,Ge,We))}),W(()=>{let e=V.value.length?`最近事件：${V.value[0].source}.${V.value[0].name} \xb7 ${V.value[0].at}`:`等待自定义元素事件`;F(()=>y(e,qe,Ke))}),W(()=>{let e=M(()=>{let e=L(),n=H(`div`,e);v(e,n),c(n,`space-y-4`);let r=H(`rue-shadow-console`,n);U(r,`__rue_context_parent_instance__`,m()),v(n,r),b(r,()=>ce);let a=e=>{let t=Ce;typeof t==`function`&&t(e)};r.addEventListener(`save`,a),l(()=>r.removeEventListener(`save`,a));let o=e=>{let t=Ee;typeof t==`function`&&t(e)};r.addEventListener(`pulse`,o),l(()=>r.removeEventListener(`pulse`,o)),U(r,`__rue_slots`,{badge:({channel:e,count:t,accent:n})=>M(r=>{let i=oe().content.cloneNode(!0).firstChild,a=i.childNodes[0],o=a.parentNode,s=i.childNodes[2],c=s.parentNode,l=i.childNodes[4],u=l.parentNode;return W(()=>{let t=e;F(()=>y(t,o,a))}),W(()=>{let e=t;F(()=>y(e,c,s))}),W(()=>{let e=n;F(()=>y(e,u,l))}),i})});let s=H(`div`,r);v(r,s),R(s,`slot`,`meta`);let u=H(`span`,s);v(s,u),c(u,`status status-success`);let d=H(`span`,s);v(s,d);let p=C(d);v(d,p),W(()=>{te(p,z.value)});let h=H(`div`,r);v(r,h),c(h,`space-y-3 text-sm text-base-content/80`);let g=H(`p`,h);v(h,g);let S=C(g);v(g,S),W(()=>{te(S,P.value)});let T=H(`div`,h);v(h,T),c(T,`flex flex-wrap gap-2`);let E=ee(`rue:list:end`);O(T,E);let D=[];W(()=>{let e=Te(x.value)||[];D=t(T,E,D,e,(e,t)=>e,(e,t)=>{let n=_(e),r=_(t);return f((e,t,r)=>ie(e,r,()=>i(Object.assign(e=>{let t=j(`span`,e);t.className=`badge badge-outline`;let r=A(``);return O(t,r),w(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let k=H(`rue-light-signal`,n);return U(k,`__rue_context_parent_instance__`,m()),v(n,k),b(k,()=>le),e}),n=S(xe.Provider,()=>({value:`${D.value}:${u.value}`,children:e}));F(()=>y(n,Ye,Je))}),W(()=>{let e=ae.value;F(()=>y(e,Ze,Xe))}),W(()=>{let e=re.value;F(()=>y(e,$e,Qe))}),W(()=>{let e=se.value;F(()=>y(e,tt,et))}),g(rt,nt,()=>V.value.length?{__rue_compiled_branch_key:!0,create:()=>i(Object.assign(e=>{let n=L(),r=ee(`rue:list:end`);O(n,r);let a=[];return W(()=>{let e=V.value||[];a=t(r.parentNode,r,a,e,(e,t)=>`${e.name}-${e.at}-${t}`,(e,t)=>{let n=_(e),r=_(t);return f((e,t,r)=>ie(e,r,()=>i(Object.assign(e=>{let t=j(`div`,e);t.className=`rounded-2xl border border-base-300 bg-base-200/60 p-3`;let r=j(`div`,t);O(t,r),r.className=`flex items-center justify-between gap-3 text-sm`;let i=j(`div`,r);O(r,i),i.className=`flex items-center gap-2`;let a=j(`span`,i);O(i,a);let o;W(()=>{let e=`badge ${n.get().source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`,t=e==null?``:String(e);Object.is(o,t)||(o=t,a.className=t)});let s=A(``);O(a,s),w(s,()=>n.get().source);let c=j(`span`,i);O(i,c),c.className=`font-medium`;let l=A(``);O(c,l),w(l,()=>n.get().name);let u=j(`span`,r);O(r,u),u.className=`text-base-content/50`;let d=A(``);O(u,d),w(d,()=>n.get().at);let f=j(`pre`,t);O(t,f),f.className=`mt-2 text-xs whitespace-pre-wrap break-words`;let p=A(``);return O(f,p),w(p,()=>n.get().detail),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>i(Object.assign(e=>{let t=j(`div`,e);t.className=`alert alert-soft`;let n=j(`span`,t);return O(t,n),O(n,A(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),W(()=>{let e=we(he());F(()=>y(e,at,it))}),W(()=>{let e=we(ge());F(()=>y(e,st,ot))}),e});return S(q,()=>({children:[i(e=>J().content.cloneNode(!0).firstChild),i(e=>Y().content.cloneNode(!0).firstChild),i(Object.assign(e=>{let t=X().content.cloneNode(!0).firstChild,i=t.childNodes[0],a=t.childNodes[1];i.setAttribute(`role`,`tab`);let o;W(()=>{let e=`tab ${n.value===`preview`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(o,t)||(o=t,i.className=t)});let s=e=>{let t=()=>{n.value=`preview`};typeof t==`function`&&t(e)};i.addEventListener(`click`,s),r(()=>i.removeEventListener(`click`,s)),a.setAttribute(`role`,`tab`);let c;W(()=>{let e=`tab ${n.value===`code`?`tab-active`:``}`,t=e==null?``:String(e);Object.is(c,t)||(c=t,a.className=t)});let l=e=>{let t=()=>{n.value=`code`};typeof t==`function`&&t(e)};return a.addEventListener(`click`,l),r(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e,i(Object.assign(e=>{let t=Z().content.cloneNode(!0).firstChild,r=t,i=t.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,s;W(()=>{let e=n.value===`code`?`mt-4`:`hidden`,t=e==null?``:String(e);Object.is(s,t)||(s=t,r.className=t)});let c=I(a);return o(c,K,()=>({lang:`tsx`,code:Be})),a.insertBefore(c,i),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]}))})()};export{Ve as default};
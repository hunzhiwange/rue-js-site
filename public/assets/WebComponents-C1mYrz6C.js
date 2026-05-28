import{$ as e,C as t,Gt as n,J as r,Kt as i,Lt as a,Q as o,R as s,Rt as c,S as l,T as u,V as d,Vt as f,Y as p,Yt as m,Z as h,ct as g,d as _,et as v,ft as y,gt as b,ht as x,i as S,l as C,mt as w,o as T,ot as E,pt as D,s as O,st as k,t as ee,tt as A,w as te}from"./vapor-runtime-BR_2rwNk.js";import{a as j,n as ne,t as re}from"./vapor-helpers-vapor-DkadWylb.js";import{t as ie}from"./useApp-D_Cc-2O7.js";import{t as ae}from"./Code-B_4lzH85.js";import{t as oe}from"./SidebarPlaygroundExample-CtM-WHq_.js";var M=new Set([`data-rue-app`]),N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,se=new WeakMap,ce=new WeakMap,L=new WeakMap,R=new WeakMap,z=[],B=null,le=()=>z.length>0?z[z.length-1]:B,V=(e,t)=>{B=e,z.push(e);try{return t()}finally{z.pop()}},H=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return L.get(e)??null},U=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return R.get(e)??null},ue=()=>{let e=le();return e?e.host:H(u())},de=()=>{let e=le();return e?e.shadowRoot:U(u())},W=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},fe=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),pe=e=>{let t={};for(let n of e.getAttributeNames())M.has(n)||(t[fe(n)]=e.getAttribute(n));return t},G=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},me=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},K=e=>({...pe(e),...G(e),...F.get(e)}),he=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},ge=e=>{let t={};return Object.defineProperty(t,x,{configurable:!0,enumerable:!0,value:he(e)}),c(t)},_e=e=>F.get(e)??{},q=(e,t)=>{F.set(e,me(t))},ve=e=>I.get(e)??null,ye=(e,t)=>{if(t){I.set(e,t);return}I.delete(e)},be=(e,t)=>{if(t){se.set(e,t);return}se.delete(e)},xe=e=>{let t=se.get(e);t&&(t.value+=1)},Se=e=>{let t=I.get(e);if(!t)return;let n=K(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},J=e=>N.get(e)??null,Ce=(e,t)=>{if(t){N.set(e,t);return}N.delete(e)},we=e=>P.get(e)??null,Te=(e,t)=>{if(t){P.set(e,t);return}P.delete(e)},Ee=(e,t)=>{if(ce.set(e,t),L.set(e,e),L.set(t,e),t instanceof ShadowRoot){R.set(e,t),R.set(t,t);return}R.delete(e),R.delete(t)},De=e=>{let t=ce.get(e);t&&(L.delete(e),L.delete(t),R.delete(e),R.delete(t),ce.delete(e))},Y=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Oe=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(Oe(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&M.has(e.attributeName);function je(n,r={}){let{shadowRoot:o=!0,styles:c,configureApp:u,nonce:f}=r,g=typeof n==`function`?n:e=>{let t=typeof n.setup==`function`?i(()=>n.setup(e)):e;return typeof n.render==`function`?n.render(t):[]},_=n=>{let r=Y(n,o),i=t(),_={host:n,shadowRoot:r instanceof ShadowRoot?r:null},v=ge(n),y=a(0);ye(n,v),be(n,y),Se(n),Ee(n,r);let b=e=>V(_,()=>g(e)),x=ie(()=>i.vapor(()=>{let t=e(`span`);t.style.display=`contents`;let r=h(`rue:custom-element:anchor`);return p(t,r),m(()=>{y.value,d(i,()=>{s(l(b,ve(n)??{}),t,r)})}),t}),i);u?.(x),Ce(n,x),x.mount(r),W(()=>{J(n)&&ke(r,c,f)})},v=e=>{J(e)?.unmount(),Ce(e,null),ye(e,null),be(e,null),De(e)},y=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||Se(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),q(this,null)}get props(){return _e(this)}set props(e){q(this,e),Se(this)}connectedCallback(){J(this)||(_(this),y(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),v(this)}}}var Me=j(`ref:1:0`,()=>a(0)),Ne=j(`ref:1:1`,()=>a(0)),Pe=j(`ref:1:2`,()=>a(0)),Fe=j(`ref:1:3`,()=>a(0)),Ie=0,Le=0,Re=new WeakMap,ze=new WeakMap,Be=`rue-demo-nonce`,Ve=`rue-shadow-console`,He=`rue-light-signal`,Ue=[`
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
  `],We=[`
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
  `],Ge=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ke=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,qe=e=>X(e.config)?.compact===!0,Je=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},Ye=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>Number(X(e.metrics)?.events??0),Z=e=>Number(X(e.metrics)?.tags??0),Qe=e=>e,$e=()=>{let{host:t,shadowRoot:n,mountId:r}=j(`useSetup:0:0`,()=>i(()=>{let e=ue();return{host:e,shadowRoot:de(),mountId:Xe(e)}}));return _(i=>{let a=e(`p`,i);g(a,`lightMeta`),p(a,v(`实例 #`));let o=h(`rue:slot:anchor`);p(a,o),m(()=>{let e=r;f(()=>C(e,a,o))}),p(a,v(` · `));let s=h(`rue:slot:anchor`);p(a,s),m(()=>{let e=t?.tagName.toLowerCase()??`unknown-host`;f(()=>C(e,a,s))}),p(a,v(` ·`));let c=h(`rue:slot:anchor`);p(a,c),m(()=>{f(()=>C(` `,a,c))}),p(a,v(` `));let l=h(`rue:slot:anchor`);return p(a,l),m(()=>{let e=n?`shadow-root`:`light-dom`;f(()=>C(e,a,l))}),a})},et=t=>{let{host:n,shadowRoot:a,emit:s,mountId:c,count:l,accent:u,panelTitle:d,tags:x,busy:S,meterWidth:T}=j(`useSetup:0:0:dup1`,()=>i(()=>{let e=ue(),n=de(),r=j(`computed:1:4`,()=>b(()=>te(t))),i=Ye(e),a=j(`computed:1:5`,()=>b(()=>Number(t.count??0))),o=a;return{host:e,shadowRoot:n,emit:r,mountId:i,count:a,accent:j(`computed:1:6`,()=>b(()=>String(t.accent??`teal`))),panelTitle:j(`computed:1:7`,()=>b(()=>String(t.panelTitle??`Shadow console`))),tags:j(`computed:1:8`,()=>b(()=>Array.isArray(t.tags)?t.tags:[])),busy:j(`computed:1:9`,()=>b(()=>t.busy===!0)),meterWidth:j(`computed:1:10`,()=>b(()=>`${Math.max(8,Math.min(o.get()*9,100))}%`))}}));return _(i=>{let b=e(`article`,i);m(()=>{g(b,String(`frame ${qe(t)?`compact`:``}`))}),m(()=>{E(b,`data-accent`,String(u.get()))}),m(()=>{E(b,`data-busy`,String(S.get()?`yes`:`no`))});let D=e(`header`,b);p(b,D),g(D,`hero`);let O=e(`div`,D);p(D,O);let k=e(`p`,O);p(O,k),g(k,`eyebrow`),p(k,v(`Shadow Root / Slot / CustomEvent`));let ee=e(`h2`,O);p(O,ee),g(ee,`title`);let te=A(ee);p(ee,te),m(()=>{w(te,d.get())});let j=e(`p`,O);p(O,j),g(j,`subtitle`),p(j,v(`实例 #`));let re=A(j);p(j,re),m(()=>{w(re,c)}),p(j,v(` · `));let ie=A(j);p(j,ie),m(()=>{w(ie,n?.tagName.toLowerCase()??`unknown-host`)}),p(j,v(` ·`));let ae=A(j);p(j,ae),w(ae,` `),p(j,v(` `));let oe=A(j);p(j,oe),m(()=>{w(oe,a?`shadow-root 已开启`:`light-dom`)});let M=e(`div`,D);p(D,M),g(M,`actions`);let N=e(`button`,M);p(M,N),E(N,`type`,`button`),g(N,`button primary`),r(N,`click`,()=>{s.get()(`save`,{mountId:c,panelTitle:d.get(),count:l.get(),tags:x.get(),busy:S.get()},{host:n?.tagName.toLowerCase()??`unknown`,rootMode:a?`shadow`:`light`})}),p(N,v(`派发 save`));let P=e(`button`,M);p(M,P),E(P,`type`,`button`),g(P,`button`),r(P,`click`,()=>{s.get()(`pulse`,l.get()+1,u.get())}),p(P,v(`派发 pulse`));let F=e(`div`,b);p(b,F),g(F,`grid`);let I=e(`section`,F);p(F,I),g(I,`panel`);let se=e(`div`,I);p(I,se),g(se,`metricValue`);let ce=A(se);p(se,ce),m(()=>{w(ce,l.get())});let L=e(`div`,I);p(I,L),g(L,`metricLabel`),p(L,v(`这个数值来自宿主上的 el.props.count`));let R=e(`div`,I);p(I,R),g(R,`meter`);let z=e(`div`,R);p(R,z),g(z,`meterFill`),m(()=>{y(z,{width:T.get()})});let B=e(`div`,I);p(I,B),g(B,`chips`);let le=h(`rue:slot:anchor`);p(B,le),m(()=>{let t=x.get().length?_(()=>{let t=o(),n=h(`rue:list:start`),r=h(`rue:list:end`);p(t,n),p(t,r);let i=new Map;return m(()=>{i=ne({items:x.get()||[],getKey:(e,t)=>e,elements:i,parent:n.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,r,i,a)=>{C(_(()=>{let n=o(),r=e(`span`,n);p(n,r),m(()=>{E(r,`key`,String(t))}),g(r,`chip`);let i=A(r);return p(r,i),m(()=>{w(i,t)}),n}),n,r)}})}),t}):_(()=>{let t=o(),n=e(`span`,t);return p(t,n),g(n,`chip muted`),p(n,v(`暂无 tags`)),t});f(()=>C(t,B,le))});let V=e(`section`,F);p(F,V),g(V,`panel`);let H=e(`p`,V);p(V,H),g(H,`slotTitle`),p(H,v(`命名 Slot`));let U=e(`slot`,V);p(V,U),E(U,`name`,`meta`);let ue=e(`div`,V);p(V,ue),y(ue,{height:`12px`});let de=e(`p`,V);p(V,de),g(de,`slotTitle`),p(de,v(`默认 Slot`)),p(V,e(`slot`,V));let W=e(`footer`,b);p(b,W),g(W,`footer`);let fe=e(`span`,W);p(W,fe),p(fe,v(`preset: `));let pe=h(`rue:slot:anchor`);p(fe,pe),m(()=>{let e=Je(t);f(()=>C(e,fe,pe))});let G=e(`span`,W);p(W,G);let me=A(G);p(G,me),m(()=>{w(me,S.get()?`后台同步中`:`空闲`)});let K=e(`span`,W);p(W,K);let he=A(K);return p(K,he),m(()=>{w(he,qe(t)?`compact on`:`compact off`)}),b})},tt=t=>{let{emit:n,label:a,tone:o}=j(`useSetup:0:0:dup2`,()=>i(()=>({emit:j(`computed:1:11`,()=>b(()=>te(t))),label:j(`computed:1:12`,()=>b(()=>String(t.label??`Light DOM signal`))),tone:j(`computed:1:13`,()=>b(()=>String(t.tone??`teal`)))})));return _(i=>{let s=e(`div`,i);m(()=>{g(s,String(`lightShell tone-${o.get()}`))});let c=e(`div`,s);p(s,c);let l=e(`p`,c);p(c,l),g(l,`lightTitle`);let u=A(l);p(l,u),m(()=>{w(u,a.get())});let d=h(`rue:component:anchor`);p(c,d),C(ee($e,{}),c,d);let _=e(`div`,s);p(s,_),g(_,`lightValue`);let y=h(`rue:slot:anchor`);p(_,y),m(()=>{let e=Ze(t);f(()=>C(e,_,y))}),p(_,v(` events / `));let b=h(`rue:slot:anchor`);p(_,b),m(()=>{let e=Z(t);f(()=>C(e,_,b))}),p(_,v(` tags`));let x=e(`button`,s);return p(s,x),E(x,`type`,`button`),g(x,`lightButton`),r(x,`click`,()=>{n.get()(`light-tap`,{label:a.get(),events:Ze(t),tags:Z(t)})}),p(x,v(`emit`)),s})},Q=je(et,{styles:Ue,nonce:Be,configureApp(){Me.value+=1}}),nt=je(tt,{shadowRoot:!1,styles:We,configureApp(){Ne.value+=1}}),rt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};rt(Ve,Q),rt(He,nt);var it=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),at=()=>{let{activeTab:t,panelTitle:s,accent:c,count:l,tagInput:u,busy:d,compact:y,activePreset:b,slotNote:x,metaBadge:te,lightLabel:ie,eventLog:M,shadowNonce:N,shadowStyleCount:P,lightStyleCount:F,shadowHostRef:I,lightHostRef:se,shadowPropsPayload:ce,lightPropsPayload:L,refreshDiagnostics:R,scheduleDiagnostics:z,syncShadowHost:B,syncLightHost:le,syncHosts:V,pushEvent:H,bindCustomEvent:U,applyPreset:ue,appendTag:de,removeLastTag:W,clearTitleAttr:fe,clearEvents:pe}=j(`useSetup:0:0:dup3`,()=>i(()=>{let e=j(`ref:1:14`,()=>a(`preview`)),t=j(`ref:1:15`,()=>a(`Ops Console / Native CE`)),r=j(`ref:1:16`,()=>a(`teal`)),i=j(`ref:1:17`,()=>a(7)),o=j(`ref:1:18`,()=>a(`shadow, events, slots, props`)),s=j(`ref:1:19`,()=>a(!1)),c=j(`ref:1:20`,()=>a(!1)),l=j(`ref:1:21`,()=>a(`ops`)),u=j(`ref:1:22`,()=>a(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),d=j(`ref:1:23`,()=>a(`SLA 99.99%`)),f=j(`ref:1:24`,()=>a(`Light DOM signal`)),p=j(`ref:1:25`,()=>a([])),m=j(`ref:1:26`,()=>a(`等待挂载`)),h=j(`ref:1:27`,()=>a(0)),g=j(`ref:1:28`,()=>a(0)),_=j(`useRef:1:29`,()=>n()),v=j(`useRef:1:30`,()=>n()),y=()=>({count:i.value,tags:Ke(o.value),config:{compact:c.value,preset:l.value},busy:s.value}),b=()=>({metrics:{events:p.value.length,tags:Ke(o.value).length,busy:s.value}}),x=()=>{let e=_.current,t=v.current;h.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,m.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,g.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},S=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{x()})})},C=()=>{let e=_.current;if(!e)return;let n=t.value.trim();n?e.setAttribute(`panel-title`,n):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,r.value),e.props=y()},w=()=>{let e=v.current;if(!e)return;let t=f.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Qe(r.value)),e.props=b()},E=()=>{C(),w(),S()},D=(e,t,n)=>{p.value=[{source:e,name:t,detail:Ge(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...p.value].slice(0,8),w(),S()},k=(e,t,n)=>{if(!e)return()=>{};let r=e=>{D(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return T(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{E(),e=k(_.current,`save`,`shadow`),t=k(_.current,`pulse`,`shadow`),n=k(v.current,`light-tap`,`light`),S()}),O(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:r,count:i,tagInput:o,busy:s,compact:c,activePreset:l,slotNote:u,metaBadge:d,lightLabel:f,eventLog:p,shadowNonce:m,shadowStyleCount:h,lightStyleCount:g,shadowHostRef:_,lightHostRef:v,shadowPropsPayload:y,lightPropsPayload:b,refreshDiagnostics:x,scheduleDiagnostics:S,syncShadowHost:C,syncLightHost:w,syncHosts:E,pushEvent:D,bindCustomEvent:k,applyPreset:e=>{l.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,r.value=`teal`,i.value=7,o.value=`shadow, events, slots, props`,u.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,d.value=`SLA 99.99%`,f.value=`Light DOM signal`,s.value=!1,c.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,r.value=`amber`,i.value=11,o.value=`checkout, fulfillment, analytics, queue`,u.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,d.value=`AOV +18%`,f.value=`Revenue pulse`,s.value=!1,c.value=!0):(t.value=`Incident Bridge / P1`,r.value=`rose`,i.value=13,o.value=`incident, pager, bridge, rollback`,u.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,d.value=`P1 ongoing`,f.value=`War-room heartbeat`,s.value=!0,c.value=!1),E()},appendTag:()=>{let e=Ke(o.value);e.push(`tag-${e.length+1}`),o.value=e.join(`, `),E()},removeLastTag:()=>{let e=Ke(o.value);e.pop(),o.value=e.join(`, `),E()},clearTitleAttr:()=>{t.value=``,E()},clearEvents:()=>{p.value=[],w(),S()}}}));return _(n=>{let i=o(),a=h(`rue:component:anchor`);return p(i,a),C(ee(oe,{children:_(()=>{let n=o(),i=e(`h1`,n);p(n,i),g(i,`text-5xl font-semibold mb-4 md:mb-4`),p(i,v(`原生 Web Components`));let a=e(`p`,n);p(n,a),g(a,`text-base-content/70 max-w-4xl leading-7`),p(a,v(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let T=e(`div`,n);p(n,T),E(T,`role`,`tablist`),g(T,`tabs tabs-box mt-4`);let O=e(`button`,T);p(T,O),E(O,`role`,`tab`),m(()=>{g(O,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),r(O,`click`,()=>{t.value=`preview`}),p(O,v(`效果`));let j=e(`button`,T);p(T,j),E(j,`role`,`tab`),m(()=>{g(j,String(`tab ${t.value===`code`?`tab-active`:``}`))}),r(j,`click`,()=>{t.value=`code`}),p(j,v(`代码`));let oe=e(`div`,n);p(n,oe),m(()=>{g(oe,String(t.value===`preview`?`mt-4 space-y-6`:`hidden`))});let R=e(`div`,oe);p(oe,R),g(R,`grid gap-6 items-start`);let H=e(`div`,R);p(R,H),g(H,`card bg-base-100 shadow-xl border border-base-300`);let U=e(`div`,H);p(H,U),g(U,`card-body gap-5`);let G=e(`div`,U);p(U,G);let me=e(`p`,G);p(G,me),g(me,`text-xs uppercase tracking-[0.28em] text-base-content/45`),p(me,v(`Preset`));let K=e(`div`,G);p(G,K),g(K,`mt-3 flex w-full gap-2`);let he=h(`rue:list:start`),ge=h(`rue:list:end`);p(K,he),p(K,ge);let _e=new Map;m(()=>{_e=ne({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:_e,parent:K,before:ge,singleRoot:!0,trackIndex:!1,start:he,renderItem:(t,n,i,a,s)=>{C(_(()=>{let n=o(),i=e(`button`,n);p(n,i),m(()=>{E(i,`key`,String(t))}),m(()=>{g(i,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${b.value===t?`btn-primary`:`btn-outline`}`))}),r(i,`click`,()=>ue(t));let a=A(i);return p(i,a),m(()=>{w(a,t)}),n}),n,i)}})});let q=e(`label`,U);p(U,q),g(q,`floating-label`);let ve=e(`input`,q);p(q,ve),g(ve,`input input-bordered w-full`),m(()=>{D(ve,s.value)}),r(ve,`input`,e=>{s.value=e.target.value,B(),z()});let ye=e(`span`,q);p(q,ye),p(ye,v(`panel-title attribute`));let be=e(`label`,U);p(U,be),g(be,`floating-label`);let xe=e(`input`,be);p(be,xe),g(xe,`input input-bordered w-full`),m(()=>{D(xe,u.value)}),r(xe,`input`,e=>{u.value=e.target.value,V()});let Se=e(`span`,be);p(be,Se),p(Se,v(`host.props.tags（逗号分隔）`));let J=e(`label`,U);p(U,J),g(J,`floating-label`);let Ce=e(`input`,J);p(J,Ce),g(Ce,`input input-bordered w-full`),m(()=>{D(Ce,x.value)}),r(Ce,`input`,e=>{x.value=e.target.value});let we=e(`span`,J);p(J,we),p(we,v(`默认 slot 文案`));let Te=e(`div`,U);p(U,Te),g(Te,`grid gap-3 sm:grid-cols-2`);let Ee=e(`fieldset`,Te);p(Te,Ee),g(Ee,`fieldset`);let De=e(`legend`,Ee);p(Ee,De),g(De,`fieldset-legend`),p(De,v(`accent attribute`));let Y=e(`select`,Ee);p(Ee,Y),g(Y,`select select-bordered`),m(()=>{D(Y,c.value)}),r(Y,`change`,e=>{c.value=e.target.value,V()});let Oe=e(`option`,Y);p(Y,Oe),E(Oe,`value`,`teal`),p(Oe,v(`teal`));let ke=e(`option`,Y);p(Y,ke),E(ke,`value`,`amber`),p(ke,v(`amber`));let Ae=e(`option`,Y);p(Y,Ae),E(Ae,`value`,`rose`),p(Ae,v(`rose`));let je=e(`fieldset`,Te);p(Te,je),g(je,`fieldset`);let Ie=e(`legend`,je);p(je,Ie),g(Ie,`fieldset-legend`),p(Ie,v(`light label attribute`));let Le=e(`input`,je);p(je,Le),g(Le,`input input-bordered`),m(()=>{D(Le,ie.value)}),r(Le,`input`,e=>{ie.value=e.target.value,le(),z()});let Re=e(`div`,U);p(U,Re);let ze=e(`div`,Re);p(Re,ze),g(ze,`flex items-center justify-between text-sm mb-2`);let Be=e(`span`,ze);p(ze,Be),p(Be,v(`host.props.count`));let Ve=e(`span`,ze);p(ze,Ve),g(Ve,`font-semibold`);let He=A(Ve);p(Ve,He),m(()=>{w(He,l.value)});let Ue=e(`input`,Re);p(Re,Ue),E(Ue,`type`,`range`),E(Ue,`min`,`1`),E(Ue,`max`,`15`),m(()=>{D(Ue,l.value)}),g(Ue,`range range-primary`),r(Ue,`input`,e=>{l.value=Number(e.target.value),B(),z()});let We=e(`div`,U);p(U,We),g(We,`grid gap-3 sm:grid-cols-2`);let X=e(`label`,We);p(We,X),g(X,`label cursor-pointer justify-start gap-3`);let qe=e(`input`,X);p(X,qe),E(qe,`type`,`checkbox`),g(qe,`toggle toggle-primary`),m(()=>{k(qe,!!d.value)}),r(qe,`change`,e=>{d.value=e.target.checked,V()});let Je=e(`span`,X);p(X,Je),g(Je,`label-text`),p(Je,v(`host.props.busy`));let Ye=e(`label`,We);p(We,Ye),g(Ye,`label cursor-pointer justify-start gap-3`);let Xe=e(`input`,Ye);p(Ye,Xe),E(Xe,`type`,`checkbox`),g(Xe,`toggle toggle-secondary`),m(()=>{k(Xe,!!y.value)}),r(Xe,`change`,e=>{y.value=e.target.checked,B(),z()});let Ze=e(`span`,Ye);p(Ye,Ze),g(Ze,`label-text`),p(Ze,v(`host.props.config.compact`));let Z=e(`div`,U);p(U,Z),g(Z,`grid gap-2 sm:grid-cols-2`);let Qe=e(`button`,Z);p(Z,Qe),g(Qe,`btn btn-primary`),r(Qe,`click`,de),p(Qe,v(`追加 tag`));let $e=e(`button`,Z);p(Z,$e),g($e,`btn btn-outline`),r($e,`click`,W),p($e,v(`删除最后一个 tag`));let et=e(`button`,Z);p(Z,et),g(et,`btn btn-secondary`),r(et,`click`,()=>{l.value+=2,B(),z()}),p(et,v(`count + 2`));let tt=e(`button`,Z);p(Z,tt),g(tt,`btn btn-ghost`),r(tt,`click`,fe),p(tt,v(`移除 title attribute`));let Q=e(`div`,R);p(R,Q),g(Q,`space-y-6`);let nt=e(`div`,Q);p(Q,nt),g(nt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=e(`div`,nt);p(nt,rt),g(rt,`card-body gap-5`);let at=e(`div`,rt);p(rt,at),g(at,`flex flex-wrap items-center justify-between gap-4`);let ot=e(`div`,at);p(at,ot);let st=e(`p`,ot);p(ot,st),g(st,`text-xs uppercase tracking-[0.28em] text-base-content/45`),p(st,v(`Live Preview`));let ct=e(`h2`,ot);p(ot,ct),g(ct,`text-2xl font-semibold mt-2`),p(ct,v(`Shadow + Light 双宿主联动`));let lt=e(`div`,at);p(at,lt),g(lt,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=e(`div`,lt);p(lt,ut),g(ut,`stat py-3 px-4`);let dt=e(`div`,ut);p(ut,dt),g(dt,`stat-title`),p(dt,v(`shadow configureApp`));let ft=e(`div`,ut);p(ut,ft),g(ft,`stat-value text-lg`);let pt=A(ft);p(ft,pt),m(()=>{w(pt,Me.value)});let mt=e(`div`,lt);p(lt,mt),g(mt,`stat py-3 px-4`);let ht=e(`div`,mt);p(mt,ht),g(ht,`stat-title`),p(ht,v(`light configureApp`));let gt=e(`div`,mt);p(mt,gt),g(gt,`stat-value text-lg`);let _t=A(gt);p(gt,_t),m(()=>{w(_t,Ne.value)});let vt=e(`div`,lt);p(lt,vt),g(vt,`stat py-3 px-4`);let yt=e(`div`,vt);p(vt,yt),g(yt,`stat-title`),p(yt,v(`mounted instances`));let bt=e(`div`,vt);p(vt,bt),g(bt,`stat-value text-lg`);let xt=A(bt);p(bt,xt),m(()=>{w(xt,Pe.value+Fe.value)});let St=e(`div`,rt);p(rt,St),g(St,`space-y-4`);let Ct=e(`rue-shadow-console`,St);p(St,Ct);let wt=re(Ct,()=>I);S(()=>{wt()});let Tt=e(`div`,Ct);p(Ct,Tt),E(Tt,`slot`,`meta`);let Et=e(`span`,Tt);p(Tt,Et),g(Et,`status status-success`);let Dt=e(`span`,Tt);p(Tt,Dt);let Ot=A(Dt);p(Dt,Ot),m(()=>{w(Ot,te.value)});let kt=e(`div`,Ct);p(Ct,kt),g(kt,`space-y-3 text-sm text-base-content/80`);let At=e(`p`,kt);p(kt,At);let jt=A(At);p(At,jt),m(()=>{w(jt,x.value)});let Mt=e(`div`,kt);p(kt,Mt),g(Mt,`flex flex-wrap gap-2`);let Nt=h(`rue:list:start`),Pt=h(`rue:list:end`);p(Mt,Nt),p(Mt,Pt);let Ft=new Map;m(()=>{Ft=ne({items:Ke(u.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(t,n,r,i,a)=>{C(_(()=>{let n=o(),r=e(`span`,n);p(n,r),m(()=>{E(r,`key`,String(t))}),g(r,`badge badge-outline`);let i=A(r);return p(r,i),m(()=>{w(i,t)}),n}),n,r)}})});let It=e(`rue-light-signal`,St);p(St,It);let Lt=re(It,()=>se);S(()=>{Lt()});let Rt=e(`div`,Q);p(Q,Rt),g(Rt,`grid gap-6`);let zt=e(`div`,Rt);p(Rt,zt),g(zt,`card bg-base-100 shadow border border-base-300`);let Bt=e(`div`,zt);p(zt,Bt),g(Bt,`card-body gap-4`);let Vt=e(`div`,Bt);p(Bt,Vt),g(Vt,`flex items-center justify-between gap-3`);let Ht=e(`h3`,Vt);p(Vt,Ht),g(Ht,`card-title text-lg`),p(Ht,v(`运行时诊断`));let Ut=e(`span`,Vt);p(Vt,Ut),g(Ut,`badge badge-primary badge-outline`),p(Ut,v(`nonce / styles / mode`));let $=e(`ul`,Bt);p(Bt,$),g($,`list bg-base-100 rounded-box`);let Wt=e(`li`,$);p($,Wt),g(Wt,`list-row`);let Gt=e(`div`,Wt);p(Wt,Gt),g(Gt,`font-medium`),p(Gt,v(`shadow style tags`));let Kt=e(`div`,Wt);p(Wt,Kt),g(Kt,`text-right`);let qt=A(Kt);p(Kt,qt),m(()=>{w(qt,P.value)});let Jt=e(`li`,$);p($,Jt),g(Jt,`list-row`);let Yt=e(`div`,Jt);p(Jt,Yt),g(Yt,`font-medium`),p(Yt,v(`shadow nonce`));let Xt=e(`div`,Jt);p(Jt,Xt),g(Xt,`text-right break-all`);let Zt=A(Xt);p(Xt,Zt),m(()=>{w(Zt,N.value)});let Qt=e(`li`,$);p($,Qt),g(Qt,`list-row`);let $t=e(`div`,Qt);p(Qt,$t),g($t,`font-medium`),p($t,v(`light style tags`));let en=e(`div`,Qt);p(Qt,en),g(en,`text-right`);let tn=A(en);p(en,tn),m(()=>{w(tn,F.value)});let nn=e(`li`,$);p($,nn),g(nn,`list-row`);let rn=e(`div`,nn);p(nn,rn),g(rn,`font-medium`),p(rn,v(`hook 期望`));let an=e(`div`,nn);p(nn,an),g(an,`text-right`),p(an,v(`shadow / light`));let on=e(`div`,Rt);p(Rt,on),g(on,`card bg-base-100 shadow border border-base-300`);let sn=e(`div`,on);p(on,sn),g(sn,`card-body gap-4`);let cn=e(`div`,sn);p(sn,cn),g(cn,`flex items-center justify-between gap-3`);let ln=e(`h3`,cn);p(cn,ln),g(ln,`card-title text-lg`),p(ln,v(`事件桥接日志`));let un=e(`button`,cn);p(cn,un),g(un,`btn btn-sm btn-ghost`),r(un,`click`,pe),p(un,v(`清空`));let dn=e(`div`,sn);p(sn,dn),g(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=h(`rue:slot:anchor`);p(dn,fn),m(()=>{let t=M.value.length?_(()=>{let t=o(),n=h(`rue:list:start`),r=h(`rue:list:end`);p(t,n),p(t,r);let i=new Map;return m(()=>{i=ne({items:M.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:i,parent:n.parentNode,before:r,singleRoot:!0,start:n,renderItem:(t,n,r,i,a)=>{C(_(()=>{let n=o(),r=e(`div`,n);p(n,r),m(()=>{E(r,`key`,String(`${t.name}-${t.at}-${a}`))}),g(r,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let i=e(`div`,r);p(r,i),g(i,`flex items-center justify-between gap-3 text-sm`);let s=e(`div`,i);p(i,s),g(s,`flex items-center gap-2`);let c=e(`span`,s);p(s,c),m(()=>{g(c,String(`badge ${t.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let l=h(`rue:slot:anchor`);p(c,l),m(()=>{let e=t.source;f(()=>C(e,c,l))});let u=e(`span`,s);p(s,u),g(u,`font-medium`);let d=h(`rue:slot:anchor`);p(u,d),m(()=>{let e=t.name;f(()=>C(e,u,d))});let _=e(`span`,i);p(i,_),g(_,`text-base-content/50`);let v=h(`rue:slot:anchor`);p(_,v),m(()=>{let e=t.at;f(()=>C(e,_,v))});let y=e(`pre`,r);p(r,y),g(y,`mt-2 text-xs whitespace-pre-wrap break-words`);let b=h(`rue:slot:anchor`);return p(y,b),m(()=>{let e=t.detail;f(()=>C(e,y,b))}),n}),n,r)}})}),t}):_(()=>{let t=o(),n=e(`div`,t);p(t,n),g(n,`alert alert-soft`);let r=e(`span`,n);return p(n,r),p(r,v(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),t});f(()=>C(t,dn,fn))});let pn=e(`div`,Q);p(Q,pn),g(pn,`grid gap-6`);let mn=e(`div`,pn);p(pn,mn),g(mn,`card bg-base-100 shadow border border-base-300`);let hn=e(`div`,mn);p(mn,hn),g(hn,`card-body gap-3`);let gn=e(`h3`,hn);p(hn,gn),g(gn,`card-title text-lg`),p(gn,v(`shadow host.props 快照`));let _n=e(`pre`,hn);p(hn,_n),g(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=h(`rue:slot:anchor`);p(_n,vn),m(()=>{let e=Ge(ce());f(()=>C(e,_n,vn))});let yn=e(`div`,pn);p(pn,yn),g(yn,`card bg-base-100 shadow border border-base-300`);let bn=e(`div`,yn);p(yn,bn),g(bn,`card-body gap-3`);let xn=e(`h3`,bn);p(bn,xn),g(xn,`card-title text-lg`),p(xn,v(`light host.props 快照`));let Sn=e(`pre`,bn);p(bn,Sn),g(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=h(`rue:slot:anchor`);p(Sn,Cn),m(()=>{let e=Ge(L());f(()=>C(e,Sn,Cn))});let wn=e(`div`,n);p(n,wn),m(()=>{g(wn,String(t.value===`code`?`mt-4`:`hidden`))});let Tn=e(`div`,wn);p(wn,Tn),g(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=e(`div`,Tn);p(Tn,En),g(En,`card-body p-0`);let Dn=h(`rue:component:anchor`);return p(En,Dn),m(()=>{let e=ee(ae,{className:`h-full`,lang:`tsx`,code:it});f(()=>C(e,En,Dn))}),n})}),i,a),i})};export{at as default};
import{$ as e,C as t,Et as n,F as r,G as i,H as a,J as o,K as s,M as c,S as l,Tt as u,V as d,W as f,_t as p,at as m,b as h,ct as g,d as _,dt as v,et as y,i as ee,kt as b,l as x,o as S,ot as C,q as w,s as T,st as E,t as te,tt as D,vt as O,x as ne,xt as k}from"./vapor-runtime-BAZOdMd8.js";import{a as A,n as re,t as ie}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as ae}from"./useApp-QQnSpfJs.js";import{t as oe}from"./Code-DY4Ua5uc.js";import{t as se}from"./SidebarPlaygroundExample-B8LFNSBu.js";var j=new Set([`data-rue-app`]),M=new WeakMap,N=new WeakMap,P=new WeakMap,F=new WeakMap,ce=new WeakMap,le=new WeakMap,I=new WeakMap,L=new WeakMap,R=[],z=null,ue=()=>R.length>0?R[R.length-1]:z,B=(e,t)=>{z=e,R.push(e);try{return t()}finally{R.pop()}},V=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return I.get(e)??null},H=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return L.get(e)??null},de=()=>{let e=ue();return e?e.host:V(t())},fe=()=>{let e=ue();return e?e.shadowRoot:H(t())},U=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},pe=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),me=e=>{let t={};for(let n of e.getAttributeNames())j.has(n)||(t[pe(n)]=e.getAttribute(n));return t},W=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},he=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},G=e=>({...me(e),...W(e),...P.get(e)}),ge=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},_e=e=>{let t={};return Object.defineProperty(t,g,{configurable:!0,enumerable:!0,value:ge(e)}),O(t)},ve=e=>P.get(e)??{},K=(e,t)=>{P.set(e,he(t))},ye=e=>F.get(e)??null,be=(e,t)=>{if(t){F.set(e,t);return}F.delete(e)},q=(e,t)=>{if(t){ce.set(e,t);return}ce.delete(e)},xe=e=>{let t=ce.get(e);t&&(t.value+=1)},Se=e=>{let t=F.get(e);if(!t)return;let n=G(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},J=e=>M.get(e)??null,Ce=(e,t)=>{if(t){M.set(e,t);return}M.delete(e)},we=e=>N.get(e)??null,Te=(e,t)=>{if(t){N.set(e,t);return}N.delete(e)},Ee=(e,t)=>{if(le.set(e,t),I.set(e,e),I.set(t,e),t instanceof ShadowRoot){L.set(e,t),L.set(t,t);return}L.delete(e),L.delete(t)},De=e=>{let t=le.get(e);t&&(I.delete(e),I.delete(t),L.delete(e),L.delete(t),le.delete(e))},Y=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Oe=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(Oe(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&j.has(e.attributeName);function je(e,t={}){let{shadowRoot:i=!0,styles:o,configureApp:l,nonce:u}=t,d=typeof e==`function`?e:t=>{let r=typeof e.setup==`function`?n(()=>e.setup(t)):t;return typeof e.render==`function`?e.render(r):[]},m=e=>{let t=Y(e,i),n=ne(),m={host:e,shadowRoot:t instanceof ShadowRoot?t:null},g=_e(e),_=p(0);be(e,g),q(e,_),Se(e),Ee(e,t);let v=e=>B(m,()=>d(e)),y=ae(()=>n.vapor(()=>{let t=s(`span`);t.style.display=`contents`;let i=f(`rue:custom-element:anchor`);return a(t,i),b(()=>{_.value,r(n,()=>{c(h(v,ye(e)??{}),t,i)})}),t}),n);l?.(y),Ce(e,y),y.mount(t),U(()=>{J(e)&&ke(t,o,u)})},g=e=>{J(e)?.unmount(),Ce(e,null),be(e,null),q(e,null),De(e)},_=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||Se(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),K(this,null)}get props(){return ve(this)}set props(e){K(this,e),Se(this)}connectedCallback(){J(this)||(m(this),_(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),g(this)}}}var Me=A(`ref:1:0`,()=>p(0)),Ne=A(`ref:1:1`,()=>p(0)),Pe=A(`ref:1:2`,()=>p(0)),Fe=A(`ref:1:3`,()=>p(0)),Ie=0,Le=0,Re=new WeakMap,ze=new WeakMap,Be=`rue-demo-nonce`,Ve=`rue-shadow-console`,He=`rue-light-signal`,Ue=[`
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
  `],Ge=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ke=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,qe=e=>X(e.config)?.compact===!0,Je=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},Ye=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>Number(X(e.metrics)?.events??0),Z=e=>Number(X(e.metrics)?.tags??0),Qe=e=>e,$e=()=>{let{host:e,shadowRoot:t,mountId:r}=A(`useSetup:0:0`,()=>n(()=>{let e=de();return{host:e,shadowRoot:fe(),mountId:Xe(e)}}));return _(n=>{let i=s(`p`,n);D(i,`lightMeta`),a(i,w(`实例 #`));let o=f(`rue:slot:anchor`);a(i,o),b(()=>{let e=r;k(()=>x(e,i,o))}),a(i,w(` · `));let c=f(`rue:slot:anchor`);a(i,c),b(()=>{let t=e?.tagName.toLowerCase()??`unknown-host`;k(()=>x(t,i,c))}),a(i,w(` ·`));let l=f(`rue:slot:anchor`);a(i,l),b(()=>{k(()=>x(` `,i,l))}),a(i,w(` `));let u=f(`rue:slot:anchor`);return a(i,u),b(()=>{let e=t?`shadow-root`:`light-dom`;k(()=>x(e,i,u))}),i})},et=t=>{let{host:r,shadowRoot:c,emit:u,mountId:p,count:h,accent:g,panelTitle:y,tags:ee,busy:S,meterWidth:C}=A(`useSetup:0:0:dup1`,()=>n(()=>{let e=de(),n=fe(),r=A(`computed:1:4`,()=>v(()=>l(t))),i=Ye(e),a=A(`computed:1:5`,()=>v(()=>Number(t.count??0))),o=a;return{host:e,shadowRoot:n,emit:r,mountId:i,count:a,accent:A(`computed:1:6`,()=>v(()=>String(t.accent??`teal`))),panelTitle:A(`computed:1:7`,()=>v(()=>String(t.panelTitle??`Shadow console`))),tags:A(`computed:1:8`,()=>v(()=>Array.isArray(t.tags)?t.tags:[])),busy:A(`computed:1:9`,()=>v(()=>t.busy===!0)),meterWidth:A(`computed:1:10`,()=>v(()=>`${Math.max(8,Math.min(o.get()*9,100))}%`))}}));return _(n=>{let l=s(`article`,n);b(()=>{D(l,String(`frame ${qe(t)?`compact`:``}`))}),b(()=>{e(l,`data-accent`,String(g.get()))}),b(()=>{e(l,`data-busy`,String(S.get()?`yes`:`no`))});let v=s(`header`,l);a(l,v),D(v,`hero`);let T=s(`div`,v);a(v,T);let te=s(`p`,T);a(T,te),D(te,`eyebrow`),a(te,w(`Shadow Root / Slot / CustomEvent`));let O=s(`h2`,T);a(T,O),D(O,`title`);let ne=o(O);a(O,ne),b(()=>{E(ne,y.get())});let A=s(`p`,T);a(T,A),D(A,`subtitle`),a(A,w(`实例 #`));let ie=o(A);a(A,ie),b(()=>{E(ie,p)}),a(A,w(` · `));let ae=o(A);a(A,ae),b(()=>{E(ae,r?.tagName.toLowerCase()??`unknown-host`)}),a(A,w(` ·`));let oe=o(A);a(A,oe),E(oe,` `),a(A,w(` `));let se=o(A);a(A,se),b(()=>{E(se,c?`shadow-root 已开启`:`light-dom`)});let j=s(`div`,v);a(v,j),D(j,`actions`);let M=s(`button`,j);a(j,M),e(M,`type`,`button`),D(M,`button primary`),d(M,`click`,()=>{u.get()(`save`,{mountId:p,panelTitle:y.get(),count:h.get(),tags:ee.get(),busy:S.get()},{host:r?.tagName.toLowerCase()??`unknown`,rootMode:c?`shadow`:`light`})}),a(M,w(`派发 save`));let N=s(`button`,j);a(j,N),e(N,`type`,`button`),D(N,`button`),d(N,`click`,()=>{u.get()(`pulse`,h.get()+1,g.get())}),a(N,w(`派发 pulse`));let P=s(`div`,l);a(l,P),D(P,`grid`);let F=s(`section`,P);a(P,F),D(F,`panel`);let ce=s(`div`,F);a(F,ce),D(ce,`metricValue`);let le=o(ce);a(ce,le),b(()=>{E(le,h.get())});let I=s(`div`,F);a(F,I),D(I,`metricLabel`),a(I,w(`这个数值来自宿主上的 el.props.count`));let L=s(`div`,F);a(F,L),D(L,`meter`);let R=s(`div`,L);a(L,R),D(R,`meterFill`),b(()=>{m(R,{width:C.get()})});let z=s(`div`,F);a(F,z),D(z,`chips`);let ue=f(`rue:slot:anchor`);a(z,ue),b(()=>{let t=ee.get().length?_(()=>{let t=i(),n=f(`rue:list:start`),r=f(`rue:list:end`);a(t,n),a(t,r);let c=new Map;return b(()=>{c=re({items:ee.get()||[],getKey:(e,t)=>e,elements:c,parent:n.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,r,c,l)=>{x(_(()=>{let n=i(),r=s(`span`,n);a(n,r),b(()=>{e(r,`key`,String(t))}),D(r,`chip`);let c=o(r);return a(r,c),b(()=>{E(c,t)}),n}),n,r)}})}),t}):_(()=>{let e=i(),t=s(`span`,e);return a(e,t),D(t,`chip muted`),a(t,w(`暂无 tags`)),e});k(()=>x(t,z,ue))});let B=s(`section`,P);a(P,B),D(B,`panel`);let V=s(`p`,B);a(B,V),D(V,`slotTitle`),a(V,w(`命名 Slot`));let H=s(`slot`,B);a(B,H),e(H,`name`,`meta`);let de=s(`div`,B);a(B,de),m(de,{height:`12px`});let fe=s(`p`,B);a(B,fe),D(fe,`slotTitle`),a(fe,w(`默认 Slot`)),a(B,s(`slot`,B));let U=s(`footer`,l);a(l,U),D(U,`footer`);let pe=s(`span`,U);a(U,pe),a(pe,w(`preset: `));let me=f(`rue:slot:anchor`);a(pe,me),b(()=>{let e=Je(t);k(()=>x(e,pe,me))});let W=s(`span`,U);a(U,W);let he=o(W);a(W,he),b(()=>{E(he,S.get()?`后台同步中`:`空闲`)});let G=s(`span`,U);a(U,G);let ge=o(G);return a(G,ge),b(()=>{E(ge,qe(t)?`compact on`:`compact off`)}),l})},tt=t=>{let{emit:r,label:i,tone:c}=A(`useSetup:0:0:dup2`,()=>n(()=>({emit:A(`computed:1:11`,()=>v(()=>l(t))),label:A(`computed:1:12`,()=>v(()=>String(t.label??`Light DOM signal`))),tone:A(`computed:1:13`,()=>v(()=>String(t.tone??`teal`)))})));return _(n=>{let l=s(`div`,n);b(()=>{D(l,String(`lightShell tone-${c.get()}`))});let u=s(`div`,l);a(l,u);let p=s(`p`,u);a(u,p),D(p,`lightTitle`);let m=o(p);a(p,m),b(()=>{E(m,i.get())});let h=f(`rue:component:anchor`);a(u,h),x(te($e,{}),u,h);let g=s(`div`,l);a(l,g),D(g,`lightValue`);let _=f(`rue:slot:anchor`);a(g,_),b(()=>{let e=Ze(t);k(()=>x(e,g,_))}),a(g,w(` events / `));let v=f(`rue:slot:anchor`);a(g,v),b(()=>{let e=Z(t);k(()=>x(e,g,v))}),a(g,w(` tags`));let y=s(`button`,l);return a(l,y),e(y,`type`,`button`),D(y,`lightButton`),d(y,`click`,()=>{r.get()(`light-tap`,{label:i.get(),events:Ze(t),tags:Z(t)})}),a(y,w(`emit`)),l})},Q=je(et,{styles:Ue,nonce:Be,configureApp(){Me.value+=1}}),nt=je(tt,{shadowRoot:!1,styles:We,configureApp(){Ne.value+=1}}),rt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};rt(Ve,Q),rt(He,nt);var it=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),at=()=>{let{activeTab:t,panelTitle:r,accent:c,count:l,tagInput:m,busy:h,compact:g,activePreset:v,slotNote:O,metaBadge:ne,lightLabel:ae,eventLog:j,shadowNonce:M,shadowStyleCount:N,lightStyleCount:P,shadowHostRef:F,lightHostRef:ce,shadowPropsPayload:le,lightPropsPayload:I,refreshDiagnostics:L,scheduleDiagnostics:R,syncShadowHost:z,syncLightHost:ue,syncHosts:B,pushEvent:V,bindCustomEvent:H,applyPreset:de,appendTag:fe,removeLastTag:U,clearTitleAttr:pe,clearEvents:me}=A(`useSetup:0:0:dup3`,()=>n(()=>{let e=A(`ref:1:14`,()=>p(`preview`)),t=A(`ref:1:15`,()=>p(`Ops Console / Native CE`)),n=A(`ref:1:16`,()=>p(`teal`)),r=A(`ref:1:17`,()=>p(7)),i=A(`ref:1:18`,()=>p(`shadow, events, slots, props`)),a=A(`ref:1:19`,()=>p(!1)),o=A(`ref:1:20`,()=>p(!1)),s=A(`ref:1:21`,()=>p(`ops`)),c=A(`ref:1:22`,()=>p(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),l=A(`ref:1:23`,()=>p(`SLA 99.99%`)),d=A(`ref:1:24`,()=>p(`Light DOM signal`)),f=A(`ref:1:25`,()=>p([])),m=A(`ref:1:26`,()=>p(`等待挂载`)),h=A(`ref:1:27`,()=>p(0)),g=A(`ref:1:28`,()=>p(0)),_=A(`useRef:1:29`,()=>u()),v=A(`useRef:1:30`,()=>u()),y=()=>({count:r.value,tags:Ke(i.value),config:{compact:o.value,preset:s.value},busy:a.value}),ee=()=>({metrics:{events:f.value.length,tags:Ke(i.value).length,busy:a.value}}),b=()=>{let e=_.current,t=v.current;h.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,m.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,g.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},x=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{b()})})},C=()=>{let e=_.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=y()},w=()=>{let e=v.current;if(!e)return;let t=d.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Qe(n.value)),e.props=ee()},E=()=>{C(),w(),x()},te=(e,t,n)=>{f.value=[{source:e,name:t,detail:Ge(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...f.value].slice(0,8),w(),x()},D=(e,t,n)=>{if(!e)return()=>{};let r=e=>{te(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return S(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{E(),e=D(_.current,`save`,`shadow`),t=D(_.current,`pulse`,`shadow`),n=D(v.current,`light-tap`,`light`),x()}),T(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:i,busy:a,compact:o,activePreset:s,slotNote:c,metaBadge:l,lightLabel:d,eventLog:f,shadowNonce:m,shadowStyleCount:h,lightStyleCount:g,shadowHostRef:_,lightHostRef:v,shadowPropsPayload:y,lightPropsPayload:ee,refreshDiagnostics:b,scheduleDiagnostics:x,syncShadowHost:C,syncLightHost:w,syncHosts:E,pushEvent:te,bindCustomEvent:D,applyPreset:e=>{s.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,i.value=`shadow, events, slots, props`,c.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,l.value=`SLA 99.99%`,d.value=`Light DOM signal`,a.value=!1,o.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,i.value=`checkout, fulfillment, analytics, queue`,c.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,l.value=`AOV +18%`,d.value=`Revenue pulse`,a.value=!1,o.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,i.value=`incident, pager, bridge, rollback`,c.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,l.value=`P1 ongoing`,d.value=`War-room heartbeat`,a.value=!0,o.value=!1),E()},appendTag:()=>{let e=Ke(i.value);e.push(`tag-${e.length+1}`),i.value=e.join(`, `),E()},removeLastTag:()=>{let e=Ke(i.value);e.pop(),i.value=e.join(`, `),E()},clearTitleAttr:()=>{t.value=``,E()},clearEvents:()=>{f.value=[],w(),x()}}}));return _(n=>{let u=i(),p=f(`rue:component:anchor`);return a(u,p),x(te(se,{children:_(()=>{let n=i(),u=s(`h1`,n);a(n,u),D(u,`text-5xl font-semibold mb-4 md:mb-4`),a(u,w(`原生 Web Components`));let p=s(`p`,n);a(n,p),D(p,`text-base-content/70 max-w-4xl leading-7`),a(p,w(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let S=s(`div`,n);a(n,S),e(S,`role`,`tablist`),D(S,`tabs tabs-box mt-4`);let T=s(`button`,S);a(S,T),e(T,`role`,`tab`),b(()=>{D(T,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),d(T,`click`,()=>{t.value=`preview`}),a(T,w(`效果`));let A=s(`button`,S);a(S,A),e(A,`role`,`tab`),b(()=>{D(A,String(`tab ${t.value===`code`?`tab-active`:``}`))}),d(A,`click`,()=>{t.value=`code`}),a(A,w(`代码`));let se=s(`div`,n);a(n,se),b(()=>{D(se,String(t.value===`preview`?`mt-4 space-y-6`:`hidden`))});let L=s(`div`,se);a(se,L),D(L,`grid gap-6 items-start`);let V=s(`div`,L);a(L,V),D(V,`card bg-base-100 shadow-xl border border-base-300`);let H=s(`div`,V);a(V,H),D(H,`card-body gap-5`);let W=s(`div`,H);a(H,W);let he=s(`p`,W);a(W,he),D(he,`text-xs uppercase tracking-[0.28em] text-base-content/45`),a(he,w(`Preset`));let G=s(`div`,W);a(W,G),D(G,`mt-3 flex w-full gap-2`);let ge=f(`rue:list:start`),_e=f(`rue:list:end`);a(G,ge),a(G,_e);let ve=new Map;b(()=>{ve=re({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ve,parent:G,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(t,n,r,c,l)=>{x(_(()=>{let n=i(),r=s(`button`,n);a(n,r),b(()=>{e(r,`key`,String(t))}),b(()=>{D(r,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${v.value===t?`btn-primary`:`btn-outline`}`))}),d(r,`click`,()=>de(t));let c=o(r);return a(r,c),b(()=>{E(c,t)}),n}),n,r)}})});let K=s(`label`,H);a(H,K),D(K,`floating-label`);let ye=s(`input`,K);a(K,ye),D(ye,`input input-bordered w-full`),b(()=>{C(ye,r.value)}),d(ye,`input`,e=>{r.value=e.target.value,z(),R()});let be=s(`span`,K);a(K,be),a(be,w(`panel-title attribute`));let q=s(`label`,H);a(H,q),D(q,`floating-label`);let xe=s(`input`,q);a(q,xe),D(xe,`input input-bordered w-full`),b(()=>{C(xe,m.value)}),d(xe,`input`,e=>{m.value=e.target.value,B()});let Se=s(`span`,q);a(q,Se),a(Se,w(`host.props.tags（逗号分隔）`));let J=s(`label`,H);a(H,J),D(J,`floating-label`);let Ce=s(`input`,J);a(J,Ce),D(Ce,`input input-bordered w-full`),b(()=>{C(Ce,O.value)}),d(Ce,`input`,e=>{O.value=e.target.value});let we=s(`span`,J);a(J,we),a(we,w(`默认 slot 文案`));let Te=s(`div`,H);a(H,Te),D(Te,`grid gap-3 sm:grid-cols-2`);let Ee=s(`fieldset`,Te);a(Te,Ee),D(Ee,`fieldset`);let De=s(`legend`,Ee);a(Ee,De),D(De,`fieldset-legend`),a(De,w(`accent attribute`));let Y=s(`select`,Ee);a(Ee,Y),D(Y,`select select-bordered`),b(()=>{C(Y,c.value)}),d(Y,`change`,e=>{c.value=e.target.value,B()});let Oe=s(`option`,Y);a(Y,Oe),e(Oe,`value`,`teal`),a(Oe,w(`teal`));let ke=s(`option`,Y);a(Y,ke),e(ke,`value`,`amber`),a(ke,w(`amber`));let Ae=s(`option`,Y);a(Y,Ae),e(Ae,`value`,`rose`),a(Ae,w(`rose`));let je=s(`fieldset`,Te);a(Te,je),D(je,`fieldset`);let Ie=s(`legend`,je);a(je,Ie),D(Ie,`fieldset-legend`),a(Ie,w(`light label attribute`));let Le=s(`input`,je);a(je,Le),D(Le,`input input-bordered`),b(()=>{C(Le,ae.value)}),d(Le,`input`,e=>{ae.value=e.target.value,ue(),R()});let Re=s(`div`,H);a(H,Re);let ze=s(`div`,Re);a(Re,ze),D(ze,`flex items-center justify-between text-sm mb-2`);let Be=s(`span`,ze);a(ze,Be),a(Be,w(`host.props.count`));let Ve=s(`span`,ze);a(ze,Ve),D(Ve,`font-semibold`);let He=o(Ve);a(Ve,He),b(()=>{E(He,l.value)});let Ue=s(`input`,Re);a(Re,Ue),e(Ue,`type`,`range`),e(Ue,`min`,`1`),e(Ue,`max`,`15`),b(()=>{C(Ue,l.value)}),D(Ue,`range range-primary`),d(Ue,`input`,e=>{l.value=Number(e.target.value),z(),R()});let We=s(`div`,H);a(H,We),D(We,`grid gap-3 sm:grid-cols-2`);let X=s(`label`,We);a(We,X),D(X,`label cursor-pointer justify-start gap-3`);let qe=s(`input`,X);a(X,qe),e(qe,`type`,`checkbox`),D(qe,`toggle toggle-primary`),b(()=>{y(qe,!!h.value)}),d(qe,`change`,e=>{h.value=e.target.checked,B()});let Je=s(`span`,X);a(X,Je),D(Je,`label-text`),a(Je,w(`host.props.busy`));let Ye=s(`label`,We);a(We,Ye),D(Ye,`label cursor-pointer justify-start gap-3`);let Xe=s(`input`,Ye);a(Ye,Xe),e(Xe,`type`,`checkbox`),D(Xe,`toggle toggle-secondary`),b(()=>{y(Xe,!!g.value)}),d(Xe,`change`,e=>{g.value=e.target.checked,z(),R()});let Ze=s(`span`,Ye);a(Ye,Ze),D(Ze,`label-text`),a(Ze,w(`host.props.config.compact`));let Z=s(`div`,H);a(H,Z),D(Z,`grid gap-2 sm:grid-cols-2`);let Qe=s(`button`,Z);a(Z,Qe),D(Qe,`btn btn-primary`),d(Qe,`click`,fe),a(Qe,w(`追加 tag`));let $e=s(`button`,Z);a(Z,$e),D($e,`btn btn-outline`),d($e,`click`,U),a($e,w(`删除最后一个 tag`));let et=s(`button`,Z);a(Z,et),D(et,`btn btn-secondary`),d(et,`click`,()=>{l.value+=2,z(),R()}),a(et,w(`count + 2`));let tt=s(`button`,Z);a(Z,tt),D(tt,`btn btn-ghost`),d(tt,`click`,pe),a(tt,w(`移除 title attribute`));let Q=s(`div`,L);a(L,Q),D(Q,`space-y-6`);let nt=s(`div`,Q);a(Q,nt),D(nt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=s(`div`,nt);a(nt,rt),D(rt,`card-body gap-5`);let at=s(`div`,rt);a(rt,at),D(at,`flex flex-wrap items-center justify-between gap-4`);let ot=s(`div`,at);a(at,ot);let st=s(`p`,ot);a(ot,st),D(st,`text-xs uppercase tracking-[0.28em] text-base-content/45`),a(st,w(`Live Preview`));let ct=s(`h2`,ot);a(ot,ct),D(ct,`text-2xl font-semibold mt-2`),a(ct,w(`Shadow + Light 双宿主联动`));let lt=s(`div`,at);a(at,lt),D(lt,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=s(`div`,lt);a(lt,ut),D(ut,`stat py-3 px-4`);let dt=s(`div`,ut);a(ut,dt),D(dt,`stat-title`),a(dt,w(`shadow configureApp`));let ft=s(`div`,ut);a(ut,ft),D(ft,`stat-value text-lg`);let pt=o(ft);a(ft,pt),b(()=>{E(pt,Me.value)});let mt=s(`div`,lt);a(lt,mt),D(mt,`stat py-3 px-4`);let ht=s(`div`,mt);a(mt,ht),D(ht,`stat-title`),a(ht,w(`light configureApp`));let gt=s(`div`,mt);a(mt,gt),D(gt,`stat-value text-lg`);let _t=o(gt);a(gt,_t),b(()=>{E(_t,Ne.value)});let vt=s(`div`,lt);a(lt,vt),D(vt,`stat py-3 px-4`);let yt=s(`div`,vt);a(vt,yt),D(yt,`stat-title`),a(yt,w(`mounted instances`));let bt=s(`div`,vt);a(vt,bt),D(bt,`stat-value text-lg`);let xt=o(bt);a(bt,xt),b(()=>{E(xt,Pe.value+Fe.value)});let St=s(`div`,rt);a(rt,St),D(St,`space-y-4`);let Ct=s(`rue-shadow-console`,St);a(St,Ct);let wt=ie(Ct,()=>F);ee(()=>{wt()});let Tt=s(`div`,Ct);a(Ct,Tt),e(Tt,`slot`,`meta`);let Et=s(`span`,Tt);a(Tt,Et),D(Et,`status status-success`);let Dt=s(`span`,Tt);a(Tt,Dt);let Ot=o(Dt);a(Dt,Ot),b(()=>{E(Ot,ne.value)});let kt=s(`div`,Ct);a(Ct,kt),D(kt,`space-y-3 text-sm text-base-content/80`);let At=s(`p`,kt);a(kt,At);let jt=o(At);a(At,jt),b(()=>{E(jt,O.value)});let Mt=s(`div`,kt);a(kt,Mt),D(Mt,`flex flex-wrap gap-2`);let Nt=f(`rue:list:start`),Pt=f(`rue:list:end`);a(Mt,Nt),a(Mt,Pt);let Ft=new Map;b(()=>{Ft=re({items:Ke(m.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(t,n,r,c,l)=>{x(_(()=>{let n=i(),r=s(`span`,n);a(n,r),b(()=>{e(r,`key`,String(t))}),D(r,`badge badge-outline`);let c=o(r);return a(r,c),b(()=>{E(c,t)}),n}),n,r)}})});let It=s(`rue-light-signal`,St);a(St,It);let Lt=ie(It,()=>ce);ee(()=>{Lt()});let Rt=s(`div`,Q);a(Q,Rt),D(Rt,`grid gap-6`);let zt=s(`div`,Rt);a(Rt,zt),D(zt,`card bg-base-100 shadow border border-base-300`);let Bt=s(`div`,zt);a(zt,Bt),D(Bt,`card-body gap-4`);let Vt=s(`div`,Bt);a(Bt,Vt),D(Vt,`flex items-center justify-between gap-3`);let Ht=s(`h3`,Vt);a(Vt,Ht),D(Ht,`card-title text-lg`),a(Ht,w(`运行时诊断`));let Ut=s(`span`,Vt);a(Vt,Ut),D(Ut,`badge badge-primary badge-outline`),a(Ut,w(`nonce / styles / mode`));let $=s(`ul`,Bt);a(Bt,$),D($,`list bg-base-100 rounded-box`);let Wt=s(`li`,$);a($,Wt),D(Wt,`list-row`);let Gt=s(`div`,Wt);a(Wt,Gt),D(Gt,`font-medium`),a(Gt,w(`shadow style tags`));let Kt=s(`div`,Wt);a(Wt,Kt),D(Kt,`text-right`);let qt=o(Kt);a(Kt,qt),b(()=>{E(qt,N.value)});let Jt=s(`li`,$);a($,Jt),D(Jt,`list-row`);let Yt=s(`div`,Jt);a(Jt,Yt),D(Yt,`font-medium`),a(Yt,w(`shadow nonce`));let Xt=s(`div`,Jt);a(Jt,Xt),D(Xt,`text-right break-all`);let Zt=o(Xt);a(Xt,Zt),b(()=>{E(Zt,M.value)});let Qt=s(`li`,$);a($,Qt),D(Qt,`list-row`);let $t=s(`div`,Qt);a(Qt,$t),D($t,`font-medium`),a($t,w(`light style tags`));let en=s(`div`,Qt);a(Qt,en),D(en,`text-right`);let tn=o(en);a(en,tn),b(()=>{E(tn,P.value)});let nn=s(`li`,$);a($,nn),D(nn,`list-row`);let rn=s(`div`,nn);a(nn,rn),D(rn,`font-medium`),a(rn,w(`hook 期望`));let an=s(`div`,nn);a(nn,an),D(an,`text-right`),a(an,w(`shadow / light`));let on=s(`div`,Rt);a(Rt,on),D(on,`card bg-base-100 shadow border border-base-300`);let sn=s(`div`,on);a(on,sn),D(sn,`card-body gap-4`);let cn=s(`div`,sn);a(sn,cn),D(cn,`flex items-center justify-between gap-3`);let ln=s(`h3`,cn);a(cn,ln),D(ln,`card-title text-lg`),a(ln,w(`事件桥接日志`));let un=s(`button`,cn);a(cn,un),D(un,`btn btn-sm btn-ghost`),d(un,`click`,me),a(un,w(`清空`));let dn=s(`div`,sn);a(sn,dn),D(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=f(`rue:slot:anchor`);a(dn,fn),b(()=>{let t=j.value.length?_(()=>{let t=i(),n=f(`rue:list:start`),r=f(`rue:list:end`);a(t,n),a(t,r);let o=new Map;return b(()=>{o=re({items:j.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:o,parent:n.parentNode,before:r,singleRoot:!0,start:n,renderItem:(t,n,r,o,c)=>{x(_(()=>{let n=i(),r=s(`div`,n);a(n,r),b(()=>{e(r,`key`,String(`${t.name}-${t.at}-${c}`))}),D(r,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let o=s(`div`,r);a(r,o),D(o,`flex items-center justify-between gap-3 text-sm`);let l=s(`div`,o);a(o,l),D(l,`flex items-center gap-2`);let u=s(`span`,l);a(l,u),b(()=>{D(u,String(`badge ${t.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let d=f(`rue:slot:anchor`);a(u,d),b(()=>{let e=t.source;k(()=>x(e,u,d))});let p=s(`span`,l);a(l,p),D(p,`font-medium`);let m=f(`rue:slot:anchor`);a(p,m),b(()=>{let e=t.name;k(()=>x(e,p,m))});let h=s(`span`,o);a(o,h),D(h,`text-base-content/50`);let g=f(`rue:slot:anchor`);a(h,g),b(()=>{let e=t.at;k(()=>x(e,h,g))});let _=s(`pre`,r);a(r,_),D(_,`mt-2 text-xs whitespace-pre-wrap break-words`);let v=f(`rue:slot:anchor`);return a(_,v),b(()=>{let e=t.detail;k(()=>x(e,_,v))}),n}),n,r)}})}),t}):_(()=>{let e=i(),t=s(`div`,e);a(e,t),D(t,`alert alert-soft`);let n=s(`span`,t);return a(t,n),a(n,w(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),e});k(()=>x(t,dn,fn))});let pn=s(`div`,Q);a(Q,pn),D(pn,`grid gap-6`);let mn=s(`div`,pn);a(pn,mn),D(mn,`card bg-base-100 shadow border border-base-300`);let hn=s(`div`,mn);a(mn,hn),D(hn,`card-body gap-3`);let gn=s(`h3`,hn);a(hn,gn),D(gn,`card-title text-lg`),a(gn,w(`shadow host.props 快照`));let _n=s(`pre`,hn);a(hn,_n),D(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=f(`rue:slot:anchor`);a(_n,vn),b(()=>{let e=Ge(le());k(()=>x(e,_n,vn))});let yn=s(`div`,pn);a(pn,yn),D(yn,`card bg-base-100 shadow border border-base-300`);let bn=s(`div`,yn);a(yn,bn),D(bn,`card-body gap-3`);let xn=s(`h3`,bn);a(bn,xn),D(xn,`card-title text-lg`),a(xn,w(`light host.props 快照`));let Sn=s(`pre`,bn);a(bn,Sn),D(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=f(`rue:slot:anchor`);a(Sn,Cn),b(()=>{let e=Ge(I());k(()=>x(e,Sn,Cn))});let wn=s(`div`,n);a(n,wn),b(()=>{D(wn,String(t.value===`code`?`mt-4`:`hidden`))});let Tn=s(`div`,wn);a(wn,Tn),D(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=s(`div`,Tn);a(Tn,En),D(En,`card-body p-0`);let Dn=f(`rue:component:anchor`);return a(En,Dn),b(()=>{let e=te(oe,{className:`h-full`,lang:`tsx`,code:it});k(()=>x(e,En,Dn))}),n})}),u,p),u})};export{at as default};
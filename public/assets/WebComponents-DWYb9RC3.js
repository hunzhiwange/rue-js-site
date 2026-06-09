import{$ as e,Ht as t,I as n,J as r,Kt as i,N as a,Q as o,Rt as s,Xt as c,Y as l,Z as u,_ as d,_t as f,a as p,b as m,ct as h,et as g,ft as _,gt as v,i as y,l as b,mt as x,ot as S,pt as C,qt as w,r as ee,s as T,st as E,t as D,tt as O,v as te,y as k,zt as ne}from"./vapor-runtime-aZAg0Qkw.js";import{a as A,n as re,t as ie}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as ae}from"./useApp-CekQX5Ln.js";import{t as oe}from"./Code-5DOEyGxf.js";import{r as se}from"./SidebarPlaygroundExample-cASgDpH3.js";var j=new Set([`data-rue-app`]),M=new WeakMap,N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,ce=new WeakMap,L=new WeakMap,R=new WeakMap,z=[],B=null,le=()=>z.length>0?z[z.length-1]:B,V=(e,t)=>{B=e,z.push(e);try{return t()}finally{z.pop()}},ue=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return L.get(e)??null},H=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return R.get(e)??null},de=()=>{let e=le();return e?e.host:ue(m())},fe=()=>{let e=le();return e?e.shadowRoot:H(m())},U=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},pe=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),me=e=>{let t={};for(let n of e.getAttributeNames())j.has(n)||(t[pe(n)]=e.getAttribute(n));return t},W=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},he=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},G=e=>({...me(e),...W(e),...P.get(e)}),ge=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},_e=e=>{let t={};return Object.defineProperty(t,v,{configurable:!0,enumerable:!0,value:ge(e)}),ne(t)},ve=e=>P.get(e)??{},K=(e,t)=>{P.set(e,he(t))},ye=e=>F.get(e)??null,be=(e,t)=>{if(t){F.set(e,t);return}F.delete(e)},q=(e,t)=>{if(t){I.set(e,t);return}I.delete(e)},xe=e=>{let t=I.get(e);t&&(t.value+=1)},Se=e=>{let t=F.get(e);if(!t)return;let n=G(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},J=e=>M.get(e)??null,Ce=(e,t)=>{if(t){M.set(e,t);return}M.delete(e)},we=e=>N.get(e)??null,Te=(e,t)=>{if(t){N.set(e,t);return}N.delete(e)},Ee=(e,t)=>{if(ce.set(e,t),L.set(e,e),L.set(t,e),t instanceof ShadowRoot){R.set(e,t),R.set(t,t);return}R.delete(e),R.delete(t)},De=e=>{let t=ce.get(e);t&&(L.delete(e),L.delete(t),R.delete(e),R.delete(t),ce.delete(e))},Y=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Oe=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(Oe(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&j.has(e.attributeName);function je(t,r={}){let{shadowRoot:i=!0,styles:o,configureApp:f,nonce:p}=r,m=typeof t==`function`?t:e=>{let n=typeof t.setup==`function`?w(()=>t.setup(e)):e;return typeof t.render==`function`?t.render(n):[]},h=t=>{let r=Y(t,i),h=te(),g={host:t,shadowRoot:r instanceof ShadowRoot?r:null},_=_e(t),v=s(0);be(t,_),q(t,v),Se(t),Ee(t,r);let y=e=>V(g,()=>m(e)),b=ae(()=>h.vapor(()=>{let r=e(`span`);r.style.display=`contents`;let i=u(`rue:custom-element:anchor`);return l(r,i),c(()=>{v.value,n(h,()=>{a(d(y,ye(t)??{}),r,i)})}),r}),h);f?.(b),Ce(t,b),b.mount(r),U(()=>{J(t)&&ke(r,o,p)})},g=e=>{J(e)?.unmount(),Ce(e,null),be(e,null),q(e,null),De(e)},_=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||Se(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),K(this,null)}get props(){return ve(this)}set props(e){K(this,e),Se(this)}connectedCallback(){J(this)||(h(this),_(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),g(this)}}}var Me=A(`ref:1:0`,()=>s(0)),Ne=A(`ref:1:1`,()=>s(0)),Pe=A(`ref:1:2`,()=>s(0)),Fe=A(`ref:1:3`,()=>s(0)),Ie=0,Le=0,Re=new WeakMap,ze=new WeakMap,Be=`rue-demo-nonce`,Ve=`rue-shadow-console`,He=`rue-light-signal`,Ue=[`
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
  `],Ge=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ke=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,qe=e=>X(e.config)?.compact===!0,Je=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},Ye=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>Number(X(e.metrics)?.events??0),Z=e=>Number(X(e.metrics)?.tags??0),Qe=e=>e,$e=()=>{let{host:n,shadowRoot:r,mountId:i}=A(`useSetup:0:0`,()=>w(()=>{let e=de();return{host:e,shadowRoot:fe(),mountId:Xe(e)}}));return b(a=>{let o=e(`p`,a);h(o,`lightMeta`),l(o,g(`实例 #`));let s=u(`rue:slot:anchor`);l(o,s),c(()=>{let e=i;t(()=>T(e,o,s))}),l(o,g(` · `));let d=u(`rue:slot:anchor`);l(o,d),c(()=>{let e=n?.tagName.toLowerCase()??`unknown-host`;t(()=>T(e,o,d))}),l(o,g(` ·`));let f=u(`rue:slot:anchor`);l(o,f),c(()=>{t(()=>T(` `,o,f))}),l(o,g(` `));let p=u(`rue:slot:anchor`);return l(o,p),c(()=>{let e=r?`shadow-root`:`light-dom`;t(()=>T(e,o,p))}),o})},et=n=>{let{host:i,shadowRoot:a,emit:s,mountId:d,count:p,accent:m,panelTitle:v,tags:y,busy:C,meterWidth:ee}=A(`useSetup:0:0:dup1`,()=>w(()=>{let e=de(),t=fe(),r=A(`computed:1:4`,()=>f(()=>k(n))),i=Ye(e),a=A(`computed:1:5`,()=>f(()=>Number(n.count??0))),o=a;return{host:e,shadowRoot:t,emit:r,mountId:i,count:a,accent:A(`computed:1:6`,()=>f(()=>String(n.accent??`teal`))),panelTitle:A(`computed:1:7`,()=>f(()=>String(n.panelTitle??`Shadow console`))),tags:A(`computed:1:8`,()=>f(()=>Array.isArray(n.tags)?n.tags:[])),busy:A(`computed:1:9`,()=>f(()=>n.busy===!0)),meterWidth:A(`computed:1:10`,()=>f(()=>`${Math.max(8,Math.min(o.get()*9,100))}%`))}}));return b(f=>{let w=e(`article`,f);c(()=>{h(w,String(`frame ${qe(n)?`compact`:``}`))}),c(()=>{S(w,`data-accent`,String(m.get()))}),c(()=>{S(w,`data-busy`,String(C.get()?`yes`:`no`))});let E=e(`header`,w);l(w,E),h(E,`hero`);let D=e(`div`,E);l(E,D);let te=e(`p`,D);l(D,te),h(te,`eyebrow`),l(te,g(`Shadow Root / Slot / CustomEvent`));let k=e(`h2`,D);l(D,k),h(k,`title`);let ne=O(k);l(k,ne),c(()=>{x(ne,v.get())});let A=e(`p`,D);l(D,A),h(A,`subtitle`),l(A,g(`实例 #`));let ie=O(A);l(A,ie),c(()=>{x(ie,d)}),l(A,g(` · `));let ae=O(A);l(A,ae),c(()=>{x(ae,i?.tagName.toLowerCase()??`unknown-host`)}),l(A,g(` ·`));let oe=O(A);l(A,oe),x(oe,` `),l(A,g(` `));let se=O(A);l(A,se),c(()=>{x(se,a?`shadow-root 已开启`:`light-dom`)});let j=e(`div`,E);l(E,j),h(j,`actions`);let M=e(`button`,j);l(j,M),S(M,`type`,`button`),h(M,`button primary`),r(M,`click`,()=>{s.get()(`save`,{mountId:d,panelTitle:v.get(),count:p.get(),tags:y.get(),busy:C.get()},{host:i?.tagName.toLowerCase()??`unknown`,rootMode:a?`shadow`:`light`})}),l(M,g(`派发 save`));let N=e(`button`,j);l(j,N),S(N,`type`,`button`),h(N,`button`),r(N,`click`,()=>{s.get()(`pulse`,p.get()+1,m.get())}),l(N,g(`派发 pulse`));let P=e(`div`,w);l(w,P),h(P,`grid`);let F=e(`section`,P);l(P,F),h(F,`panel`);let I=e(`div`,F);l(F,I),h(I,`metricValue`);let ce=O(I);l(I,ce),c(()=>{x(ce,p.get())});let L=e(`div`,F);l(F,L),h(L,`metricLabel`),l(L,g(`这个数值来自宿主上的 el.props.count`));let R=e(`div`,F);l(F,R),h(R,`meter`);let z=e(`div`,R);l(R,z),h(z,`meterFill`),c(()=>{_(z,{width:ee.get()})});let B=e(`div`,F);l(F,B),h(B,`chips`);let le=u(`rue:slot:anchor`);l(B,le),c(()=>{let n=y.get().length?b(()=>{let t=o(),n=u(`rue:list:start`),r=u(`rue:list:end`);l(t,n),l(t,r);let i=new Map;return c(()=>{i=re({items:y.get()||[],getKey:(e,t)=>e,elements:i,parent:n.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,r,i,a)=>{T(b(()=>{let n=o(),r=e(`span`,n);l(n,r),c(()=>{S(r,`key`,String(t))}),h(r,`chip`);let i=O(r);return l(r,i),c(()=>{x(i,t)}),n}),n,r)}})}),t}):b(()=>{let t=o(),n=e(`span`,t);return l(t,n),h(n,`chip muted`),l(n,g(`暂无 tags`)),t});t(()=>T(n,B,le))});let V=e(`section`,P);l(P,V),h(V,`panel`);let ue=e(`p`,V);l(V,ue),h(ue,`slotTitle`),l(ue,g(`命名 Slot`));let H=e(`slot`,V);l(V,H),S(H,`name`,`meta`);let de=e(`div`,V);l(V,de),_(de,{height:`12px`});let fe=e(`p`,V);l(V,fe),h(fe,`slotTitle`),l(fe,g(`默认 Slot`)),l(V,e(`slot`,V));let U=e(`footer`,w);l(w,U),h(U,`footer`);let pe=e(`span`,U);l(U,pe),l(pe,g(`preset: `));let me=u(`rue:slot:anchor`);l(pe,me),c(()=>{let e=Je(n);t(()=>T(e,pe,me))});let W=e(`span`,U);l(U,W);let he=O(W);l(W,he),c(()=>{x(he,C.get()?`后台同步中`:`空闲`)});let G=e(`span`,U);l(U,G);let ge=O(G);return l(G,ge),c(()=>{x(ge,qe(n)?`compact on`:`compact off`)}),w})},tt=n=>{let{emit:i,label:a,tone:o}=A(`useSetup:0:0:dup2`,()=>w(()=>({emit:A(`computed:1:11`,()=>f(()=>k(n))),label:A(`computed:1:12`,()=>f(()=>String(n.label??`Light DOM signal`))),tone:A(`computed:1:13`,()=>f(()=>String(n.tone??`teal`)))})));return b(s=>{let d=e(`div`,s);c(()=>{h(d,String(`lightShell tone-${o.get()}`))});let f=e(`div`,d);l(d,f);let p=e(`p`,f);l(f,p),h(p,`lightTitle`);let m=O(p);l(p,m),c(()=>{x(m,a.get())});let _=u(`rue:component:anchor`);l(f,_),T(D($e,{}),f,_);let v=e(`div`,d);l(d,v),h(v,`lightValue`);let y=u(`rue:slot:anchor`);l(v,y),c(()=>{let e=Ze(n);t(()=>T(e,v,y))}),l(v,g(` events / `));let b=u(`rue:slot:anchor`);l(v,b),c(()=>{let e=Z(n);t(()=>T(e,v,b))}),l(v,g(` tags`));let C=e(`button`,d);return l(d,C),S(C,`type`,`button`),h(C,`lightButton`),r(C,`click`,()=>{i.get()(`light-tap`,{label:a.get(),events:Ze(n),tags:Z(n)})}),l(C,g(`emit`)),d})},Q=je(et,{styles:Ue,nonce:Be,configureApp(){Me.value+=1}}),nt=je(tt,{shadowRoot:!1,styles:We,configureApp(){Ne.value+=1}}),rt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};rt(Ve,Q),rt(He,nt);var it=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),at=()=>{let{activeTab:n,panelTitle:a,accent:d,count:f,tagInput:m,busy:_,compact:v,activePreset:te,slotNote:k,metaBadge:ne,lightLabel:ae,eventLog:j,shadowNonce:M,shadowStyleCount:N,lightStyleCount:P,shadowHostRef:F,lightHostRef:I,shadowPropsPayload:ce,lightPropsPayload:L,refreshDiagnostics:R,scheduleDiagnostics:z,syncShadowHost:B,syncLightHost:le,syncHosts:V,pushEvent:ue,bindCustomEvent:H,applyPreset:de,appendTag:fe,removeLastTag:U,clearTitleAttr:pe,clearEvents:me}=A(`useSetup:0:0:dup3`,()=>w(()=>{let e=A(`ref:1:14`,()=>s(`preview`)),t=A(`ref:1:15`,()=>s(`Ops Console / Native CE`)),n=A(`ref:1:16`,()=>s(`teal`)),r=A(`ref:1:17`,()=>s(7)),a=A(`ref:1:18`,()=>s(`shadow, events, slots, props`)),o=A(`ref:1:19`,()=>s(!1)),c=A(`ref:1:20`,()=>s(!1)),l=A(`ref:1:21`,()=>s(`ops`)),u=A(`ref:1:22`,()=>s(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),d=A(`ref:1:23`,()=>s(`SLA 99.99%`)),f=A(`ref:1:24`,()=>s(`Light DOM signal`)),m=A(`ref:1:25`,()=>s([])),h=A(`ref:1:26`,()=>s(`等待挂载`)),g=A(`ref:1:27`,()=>s(0)),_=A(`ref:1:28`,()=>s(0)),v=A(`useRef:1:29`,()=>i()),b=A(`useRef:1:30`,()=>i()),x=()=>({count:r.value,tags:Ke(a.value),config:{compact:c.value,preset:l.value},busy:o.value}),S=()=>({metrics:{events:m.value.length,tags:Ke(a.value).length,busy:o.value}}),C=()=>{let e=v.current,t=b.current;g.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,h.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,_.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},w=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{C()})})},ee=()=>{let e=v.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=x()},T=()=>{let e=b.current;if(!e)return;let t=f.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Qe(n.value)),e.props=S()},E=()=>{ee(),T(),w()},D=(e,t,n)=>{m.value=[{source:e,name:t,detail:Ge(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...m.value].slice(0,8),T(),w()},O=(e,t,n)=>{if(!e)return()=>{};let r=e=>{D(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return y(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{E(),e=O(v.current,`save`,`shadow`),t=O(v.current,`pulse`,`shadow`),n=O(b.current,`light-tap`,`light`),w()}),p(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:a,busy:o,compact:c,activePreset:l,slotNote:u,metaBadge:d,lightLabel:f,eventLog:m,shadowNonce:h,shadowStyleCount:g,lightStyleCount:_,shadowHostRef:v,lightHostRef:b,shadowPropsPayload:x,lightPropsPayload:S,refreshDiagnostics:C,scheduleDiagnostics:w,syncShadowHost:ee,syncLightHost:T,syncHosts:E,pushEvent:D,bindCustomEvent:O,applyPreset:e=>{l.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,a.value=`shadow, events, slots, props`,u.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,d.value=`SLA 99.99%`,f.value=`Light DOM signal`,o.value=!1,c.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,a.value=`checkout, fulfillment, analytics, queue`,u.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,d.value=`AOV +18%`,f.value=`Revenue pulse`,o.value=!1,c.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,a.value=`incident, pager, bridge, rollback`,u.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,d.value=`P1 ongoing`,f.value=`War-room heartbeat`,o.value=!0,c.value=!1),E()},appendTag:()=>{let e=Ke(a.value);e.push(`tag-${e.length+1}`),a.value=e.join(`, `),E()},removeLastTag:()=>{let e=Ke(a.value);e.pop(),a.value=e.join(`, `),E()},clearTitleAttr:()=>{t.value=``,E()},clearEvents:()=>{m.value=[],T(),w()}}}));return b(i=>{let s=o(),p=u(`rue:component:anchor`);return l(s,p),T(D(se,{children:b(()=>{let i=o(),s=e(`h1`,i);l(i,s),h(s,`text-5xl font-semibold mb-4 md:mb-4`),l(s,g(`原生 Web Components`));let p=e(`p`,i);l(i,p),h(p,`text-base-content/70 max-w-4xl leading-7`),l(p,g(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let y=e(`div`,i);l(i,y),S(y,`role`,`tablist`),h(y,`tabs tabs-box mt-4`);let w=e(`button`,y);l(y,w),S(w,`role`,`tab`),c(()=>{h(w,String(`tab ${n.value===`preview`?`tab-active`:``}`))}),r(w,`click`,()=>{n.value=`preview`}),l(w,g(`效果`));let A=e(`button`,y);l(y,A),S(A,`role`,`tab`),c(()=>{h(A,String(`tab ${n.value===`code`?`tab-active`:``}`))}),r(A,`click`,()=>{n.value=`code`}),l(A,g(`代码`));let se=e(`div`,i);l(i,se),c(()=>{h(se,String(n.value===`preview`?`mt-4 space-y-6`:`hidden`))});let R=e(`div`,se);l(se,R),h(R,`grid gap-6 items-start`);let ue=e(`div`,R);l(R,ue),h(ue,`card bg-base-100 shadow-xl border border-base-300`);let H=e(`div`,ue);l(ue,H),h(H,`card-body gap-5`);let W=e(`div`,H);l(H,W);let he=e(`p`,W);l(W,he),h(he,`text-xs uppercase tracking-[0.28em] text-base-content/45`),l(he,g(`Preset`));let G=e(`div`,W);l(W,G),h(G,`mt-3 flex w-full gap-2`);let ge=u(`rue:list:start`),_e=u(`rue:list:end`);l(G,ge),l(G,_e);let ve=new Map;c(()=>{ve=re({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ve,parent:G,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(t,n,i,a,s)=>{T(b(()=>{let n=o(),i=e(`button`,n);l(n,i),c(()=>{S(i,`key`,String(t))}),c(()=>{h(i,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${te.value===t?`btn-primary`:`btn-outline`}`))}),r(i,`click`,()=>de(t));let a=O(i);return l(i,a),c(()=>{x(a,t)}),n}),n,i)}})});let K=e(`label`,H);l(H,K),h(K,`floating-label`);let ye=e(`input`,K);l(K,ye),h(ye,`input input-bordered w-full`),c(()=>{C(ye,a.value)}),r(ye,`input`,e=>{a.value=e.target.value,B(),z()});let be=e(`span`,K);l(K,be),l(be,g(`panel-title attribute`));let q=e(`label`,H);l(H,q),h(q,`floating-label`);let xe=e(`input`,q);l(q,xe),h(xe,`input input-bordered w-full`),c(()=>{C(xe,m.value)}),r(xe,`input`,e=>{m.value=e.target.value,V()});let Se=e(`span`,q);l(q,Se),l(Se,g(`host.props.tags（逗号分隔）`));let J=e(`label`,H);l(H,J),h(J,`floating-label`);let Ce=e(`input`,J);l(J,Ce),h(Ce,`input input-bordered w-full`),c(()=>{C(Ce,k.value)}),r(Ce,`input`,e=>{k.value=e.target.value});let we=e(`span`,J);l(J,we),l(we,g(`默认 slot 文案`));let Te=e(`div`,H);l(H,Te),h(Te,`grid gap-3 sm:grid-cols-2`);let Ee=e(`fieldset`,Te);l(Te,Ee),h(Ee,`fieldset`);let De=e(`legend`,Ee);l(Ee,De),h(De,`fieldset-legend`),l(De,g(`accent attribute`));let Y=e(`select`,Ee);l(Ee,Y),h(Y,`select select-bordered`),c(()=>{C(Y,d.value)}),r(Y,`change`,e=>{d.value=e.target.value,V()});let Oe=e(`option`,Y);l(Y,Oe),S(Oe,`value`,`teal`),l(Oe,g(`teal`));let ke=e(`option`,Y);l(Y,ke),S(ke,`value`,`amber`),l(ke,g(`amber`));let Ae=e(`option`,Y);l(Y,Ae),S(Ae,`value`,`rose`),l(Ae,g(`rose`));let je=e(`fieldset`,Te);l(Te,je),h(je,`fieldset`);let Ie=e(`legend`,je);l(je,Ie),h(Ie,`fieldset-legend`),l(Ie,g(`light label attribute`));let Le=e(`input`,je);l(je,Le),h(Le,`input input-bordered`),c(()=>{C(Le,ae.value)}),r(Le,`input`,e=>{ae.value=e.target.value,le(),z()});let Re=e(`div`,H);l(H,Re);let ze=e(`div`,Re);l(Re,ze),h(ze,`flex items-center justify-between text-sm mb-2`);let Be=e(`span`,ze);l(ze,Be),l(Be,g(`host.props.count`));let Ve=e(`span`,ze);l(ze,Ve),h(Ve,`font-semibold`);let He=O(Ve);l(Ve,He),c(()=>{x(He,f.value)});let Ue=e(`input`,Re);l(Re,Ue),S(Ue,`type`,`range`),S(Ue,`min`,`1`),S(Ue,`max`,`15`),c(()=>{C(Ue,f.value)}),h(Ue,`range range-primary`),r(Ue,`input`,e=>{f.value=Number(e.target.value),B(),z()});let We=e(`div`,H);l(H,We),h(We,`grid gap-3 sm:grid-cols-2`);let X=e(`label`,We);l(We,X),h(X,`label cursor-pointer justify-start gap-3`);let qe=e(`input`,X);l(X,qe),S(qe,`type`,`checkbox`),h(qe,`toggle toggle-primary`),c(()=>{E(qe,!!_.value)}),r(qe,`change`,e=>{_.value=e.target.checked,V()});let Je=e(`span`,X);l(X,Je),h(Je,`label-text`),l(Je,g(`host.props.busy`));let Ye=e(`label`,We);l(We,Ye),h(Ye,`label cursor-pointer justify-start gap-3`);let Xe=e(`input`,Ye);l(Ye,Xe),S(Xe,`type`,`checkbox`),h(Xe,`toggle toggle-secondary`),c(()=>{E(Xe,!!v.value)}),r(Xe,`change`,e=>{v.value=e.target.checked,B(),z()});let Ze=e(`span`,Ye);l(Ye,Ze),h(Ze,`label-text`),l(Ze,g(`host.props.config.compact`));let Z=e(`div`,H);l(H,Z),h(Z,`grid gap-2 sm:grid-cols-2`);let Qe=e(`button`,Z);l(Z,Qe),h(Qe,`btn btn-primary`),r(Qe,`click`,fe),l(Qe,g(`追加 tag`));let $e=e(`button`,Z);l(Z,$e),h($e,`btn btn-outline`),r($e,`click`,U),l($e,g(`删除最后一个 tag`));let et=e(`button`,Z);l(Z,et),h(et,`btn btn-secondary`),r(et,`click`,()=>{f.value+=2,B(),z()}),l(et,g(`count + 2`));let tt=e(`button`,Z);l(Z,tt),h(tt,`btn btn-ghost`),r(tt,`click`,pe),l(tt,g(`移除 title attribute`));let Q=e(`div`,R);l(R,Q),h(Q,`space-y-6`);let nt=e(`div`,Q);l(Q,nt),h(nt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=e(`div`,nt);l(nt,rt),h(rt,`card-body gap-5`);let at=e(`div`,rt);l(rt,at),h(at,`flex flex-wrap items-center justify-between gap-4`);let ot=e(`div`,at);l(at,ot);let st=e(`p`,ot);l(ot,st),h(st,`text-xs uppercase tracking-[0.28em] text-base-content/45`),l(st,g(`Live Preview`));let ct=e(`h2`,ot);l(ot,ct),h(ct,`text-2xl font-semibold mt-2`),l(ct,g(`Shadow + Light 双宿主联动`));let lt=e(`div`,at);l(at,lt),h(lt,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=e(`div`,lt);l(lt,ut),h(ut,`stat py-3 px-4`);let dt=e(`div`,ut);l(ut,dt),h(dt,`stat-title`),l(dt,g(`shadow configureApp`));let ft=e(`div`,ut);l(ut,ft),h(ft,`stat-value text-lg`);let pt=O(ft);l(ft,pt),c(()=>{x(pt,Me.value)});let mt=e(`div`,lt);l(lt,mt),h(mt,`stat py-3 px-4`);let ht=e(`div`,mt);l(mt,ht),h(ht,`stat-title`),l(ht,g(`light configureApp`));let gt=e(`div`,mt);l(mt,gt),h(gt,`stat-value text-lg`);let _t=O(gt);l(gt,_t),c(()=>{x(_t,Ne.value)});let vt=e(`div`,lt);l(lt,vt),h(vt,`stat py-3 px-4`);let yt=e(`div`,vt);l(vt,yt),h(yt,`stat-title`),l(yt,g(`mounted instances`));let bt=e(`div`,vt);l(vt,bt),h(bt,`stat-value text-lg`);let xt=O(bt);l(bt,xt),c(()=>{x(xt,Pe.value+Fe.value)});let St=e(`div`,rt);l(rt,St),h(St,`space-y-4`);let Ct=e(`rue-shadow-console`,St);l(St,Ct);let wt=ie(Ct,()=>F);ee(()=>{wt()});let Tt=e(`div`,Ct);l(Ct,Tt),S(Tt,`slot`,`meta`);let Et=e(`span`,Tt);l(Tt,Et),h(Et,`status status-success`);let Dt=e(`span`,Tt);l(Tt,Dt);let Ot=O(Dt);l(Dt,Ot),c(()=>{x(Ot,ne.value)});let kt=e(`div`,Ct);l(Ct,kt),h(kt,`space-y-3 text-sm text-base-content/80`);let At=e(`p`,kt);l(kt,At);let jt=O(At);l(At,jt),c(()=>{x(jt,k.value)});let Mt=e(`div`,kt);l(kt,Mt),h(Mt,`flex flex-wrap gap-2`);let Nt=u(`rue:list:start`),Pt=u(`rue:list:end`);l(Mt,Nt),l(Mt,Pt);let Ft=new Map;c(()=>{Ft=re({items:Ke(m.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(t,n,r,i,a)=>{T(b(()=>{let n=o(),r=e(`span`,n);l(n,r),c(()=>{S(r,`key`,String(t))}),h(r,`badge badge-outline`);let i=O(r);return l(r,i),c(()=>{x(i,t)}),n}),n,r)}})});let It=e(`rue-light-signal`,St);l(St,It);let Lt=ie(It,()=>I);ee(()=>{Lt()});let Rt=e(`div`,Q);l(Q,Rt),h(Rt,`grid gap-6`);let zt=e(`div`,Rt);l(Rt,zt),h(zt,`card bg-base-100 shadow border border-base-300`);let Bt=e(`div`,zt);l(zt,Bt),h(Bt,`card-body gap-4`);let Vt=e(`div`,Bt);l(Bt,Vt),h(Vt,`flex items-center justify-between gap-3`);let Ht=e(`h3`,Vt);l(Vt,Ht),h(Ht,`card-title text-lg`),l(Ht,g(`运行时诊断`));let Ut=e(`span`,Vt);l(Vt,Ut),h(Ut,`badge badge-primary badge-outline`),l(Ut,g(`nonce / styles / mode`));let $=e(`ul`,Bt);l(Bt,$),h($,`list bg-base-100 rounded-box`);let Wt=e(`li`,$);l($,Wt),h(Wt,`list-row`);let Gt=e(`div`,Wt);l(Wt,Gt),h(Gt,`font-medium`),l(Gt,g(`shadow style tags`));let Kt=e(`div`,Wt);l(Wt,Kt),h(Kt,`text-right`);let qt=O(Kt);l(Kt,qt),c(()=>{x(qt,N.value)});let Jt=e(`li`,$);l($,Jt),h(Jt,`list-row`);let Yt=e(`div`,Jt);l(Jt,Yt),h(Yt,`font-medium`),l(Yt,g(`shadow nonce`));let Xt=e(`div`,Jt);l(Jt,Xt),h(Xt,`text-right break-all`);let Zt=O(Xt);l(Xt,Zt),c(()=>{x(Zt,M.value)});let Qt=e(`li`,$);l($,Qt),h(Qt,`list-row`);let $t=e(`div`,Qt);l(Qt,$t),h($t,`font-medium`),l($t,g(`light style tags`));let en=e(`div`,Qt);l(Qt,en),h(en,`text-right`);let tn=O(en);l(en,tn),c(()=>{x(tn,P.value)});let nn=e(`li`,$);l($,nn),h(nn,`list-row`);let rn=e(`div`,nn);l(nn,rn),h(rn,`font-medium`),l(rn,g(`hook 期望`));let an=e(`div`,nn);l(nn,an),h(an,`text-right`),l(an,g(`shadow / light`));let on=e(`div`,Rt);l(Rt,on),h(on,`card bg-base-100 shadow border border-base-300`);let sn=e(`div`,on);l(on,sn),h(sn,`card-body gap-4`);let cn=e(`div`,sn);l(sn,cn),h(cn,`flex items-center justify-between gap-3`);let ln=e(`h3`,cn);l(cn,ln),h(ln,`card-title text-lg`),l(ln,g(`事件桥接日志`));let un=e(`button`,cn);l(cn,un),h(un,`btn btn-sm btn-ghost`),r(un,`click`,me),l(un,g(`清空`));let dn=e(`div`,sn);l(sn,dn),h(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=u(`rue:slot:anchor`);l(dn,fn),c(()=>{let n=j.value.length?b(()=>{let n=o(),r=u(`rue:list:start`),i=u(`rue:list:end`);l(n,r),l(n,i);let a=new Map;return c(()=>{a=re({items:j.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:a,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(n,r,i,a,s)=>{T(b(()=>{let r=o(),i=e(`div`,r);l(r,i),c(()=>{S(i,`key`,String(`${n.name}-${n.at}-${s}`))}),h(i,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let a=e(`div`,i);l(i,a),h(a,`flex items-center justify-between gap-3 text-sm`);let d=e(`div`,a);l(a,d),h(d,`flex items-center gap-2`);let f=e(`span`,d);l(d,f),c(()=>{h(f,String(`badge ${n.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let p=u(`rue:slot:anchor`);l(f,p),c(()=>{let e=n.source;t(()=>T(e,f,p))});let m=e(`span`,d);l(d,m),h(m,`font-medium`);let g=u(`rue:slot:anchor`);l(m,g),c(()=>{let e=n.name;t(()=>T(e,m,g))});let _=e(`span`,a);l(a,_),h(_,`text-base-content/50`);let v=u(`rue:slot:anchor`);l(_,v),c(()=>{let e=n.at;t(()=>T(e,_,v))});let y=e(`pre`,i);l(i,y),h(y,`mt-2 text-xs whitespace-pre-wrap break-words`);let b=u(`rue:slot:anchor`);return l(y,b),c(()=>{let e=n.detail;t(()=>T(e,y,b))}),r}),r,i)}})}),n}):b(()=>{let t=o(),n=e(`div`,t);l(t,n),h(n,`alert alert-soft`);let r=e(`span`,n);return l(n,r),l(r,g(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),t});t(()=>T(n,dn,fn))});let pn=e(`div`,Q);l(Q,pn),h(pn,`grid gap-6`);let mn=e(`div`,pn);l(pn,mn),h(mn,`card bg-base-100 shadow border border-base-300`);let hn=e(`div`,mn);l(mn,hn),h(hn,`card-body gap-3`);let gn=e(`h3`,hn);l(hn,gn),h(gn,`card-title text-lg`),l(gn,g(`shadow host.props 快照`));let _n=e(`pre`,hn);l(hn,_n),h(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=u(`rue:slot:anchor`);l(_n,vn),c(()=>{let e=Ge(ce());t(()=>T(e,_n,vn))});let yn=e(`div`,pn);l(pn,yn),h(yn,`card bg-base-100 shadow border border-base-300`);let bn=e(`div`,yn);l(yn,bn),h(bn,`card-body gap-3`);let xn=e(`h3`,bn);l(bn,xn),h(xn,`card-title text-lg`),l(xn,g(`light host.props 快照`));let Sn=e(`pre`,bn);l(bn,Sn),h(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=u(`rue:slot:anchor`);l(Sn,Cn),c(()=>{let e=Ge(L());t(()=>T(e,Sn,Cn))});let wn=e(`div`,i);l(i,wn),c(()=>{h(wn,String(n.value===`code`?`mt-4`:`hidden`))});let Tn=e(`div`,wn);l(wn,Tn),h(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=e(`div`,Tn);l(Tn,En),h(En,`card-body p-0`);let Dn=u(`rue:component:anchor`);return l(En,Dn),c(()=>{let e=D(oe,{className:`h-full`,lang:`tsx`,code:it});t(()=>T(e,En,Dn))}),i})}),s,p),s})};export{at as default};
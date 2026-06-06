import{$ as e,A as t,B as n,Ct as r,Dt as i,G as a,H as o,K as s,N as c,Q as l,U as u,W as d,Z as f,a as p,at as m,b as h,gt as g,ht as _,i as v,it as y,l as b,lt as x,ot as S,r as ee,rt as C,s as w,t as T,v as E,wt as D,x as O,y as te,yt as k,z as A}from"./vapor-runtime-C1rlwc61.js";import{a as j,n as ne,t as re}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as ie}from"./useApp-BWfkBIU9.js";import{t as ae}from"./Code-BCLFq1E3.js";import{t as oe}from"./SidebarPlaygroundExample-CdMvdgT7.js";var M=new Set([`data-rue-app`]),N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,se=new WeakMap,ce=new WeakMap,L=new WeakMap,R=new WeakMap,z=[],B=null,le=()=>z.length>0?z[z.length-1]:B,V=(e,t)=>{B=e,z.push(e);try{return t()}finally{z.pop()}},ue=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return L.get(e)??null},H=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return R.get(e)??null},de=()=>{let e=le();return e?e.host:ue(O())},fe=()=>{let e=le();return e?e.shadowRoot:H(O())},U=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},pe=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),me=e=>{let t={};for(let n of e.getAttributeNames())M.has(n)||(t[pe(n)]=e.getAttribute(n));return t},W=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},he=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},G=e=>({...me(e),...W(e),...F.get(e)}),ge=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},_e=e=>{let t={};return Object.defineProperty(t,S,{configurable:!0,enumerable:!0,value:ge(e)}),g(t)},ve=e=>F.get(e)??{},K=(e,t)=>{F.set(e,he(t))},ye=e=>I.get(e)??null,be=(e,t)=>{if(t){I.set(e,t);return}I.delete(e)},q=(e,t)=>{if(t){se.set(e,t);return}se.delete(e)},xe=e=>{let t=se.get(e);t&&(t.value+=1)},Se=e=>{let t=I.get(e);if(!t)return;let n=G(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},J=e=>N.get(e)??null,Ce=(e,t)=>{if(t){N.set(e,t);return}N.delete(e)},we=e=>P.get(e)??null,Te=(e,t)=>{if(t){P.set(e,t);return}P.delete(e)},Ee=(e,t)=>{if(ce.set(e,t),L.set(e,e),L.set(t,e),t instanceof ShadowRoot){R.set(e,t),R.set(t,t);return}R.delete(e),R.delete(t)},De=e=>{let t=ce.get(e);t&&(L.delete(e),L.delete(t),R.delete(e),R.delete(t),ce.delete(e))},Y=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Oe=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(Oe(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&M.has(e.attributeName);function je(e,r={}){let{shadowRoot:a=!0,styles:s,configureApp:l,nonce:u}=r,f=typeof e==`function`?e:t=>{let n=typeof e.setup==`function`?D(()=>e.setup(t)):t;return typeof e.render==`function`?e.render(n):[]},p=e=>{let r=Y(e,a),p=te(),m={host:e,shadowRoot:r instanceof ShadowRoot?r:null},h=_e(e),g=_(0);be(e,h),q(e,g),Se(e),Ee(e,r);let v=e=>V(m,()=>f(e)),y=ie(()=>p.vapor(()=>{let r=d(`span`);r.style.display=`contents`;let a=o(`rue:custom-element:anchor`);return n(r,a),i(()=>{g.value,c(p,()=>{t(E(v,ye(e)??{}),r,a)})}),r}),p);l?.(y),Ce(e,y),y.mount(r),U(()=>{J(e)&&ke(r,s,u)})},m=e=>{J(e)?.unmount(),Ce(e,null),be(e,null),q(e,null),De(e)},h=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||Se(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),K(this,null)}get props(){return ve(this)}set props(e){K(this,e),Se(this)}connectedCallback(){J(this)||(p(this),h(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),m(this)}}}var Me=j(`ref:1:0`,()=>_(0)),Ne=j(`ref:1:1`,()=>_(0)),Pe=j(`ref:1:2`,()=>_(0)),Fe=j(`ref:1:3`,()=>_(0)),Ie=0,Le=0,Re=new WeakMap,ze=new WeakMap,Be=`rue-demo-nonce`,Ve=`rue-shadow-console`,He=`rue-light-signal`,Ue=[`
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
  `],Ge=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ke=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,qe=e=>X(e.config)?.compact===!0,Je=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},Ye=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>Number(X(e.metrics)?.events??0),Z=e=>Number(X(e.metrics)?.tags??0),Qe=e=>e,$e=()=>{let{host:t,shadowRoot:r,mountId:s}=j(`useSetup:0:0`,()=>D(()=>{let e=de();return{host:e,shadowRoot:fe(),mountId:Xe(e)}}));return b(c=>{let l=d(`p`,c);e(l,`lightMeta`),n(l,a(`实例 #`));let u=o(`rue:slot:anchor`);n(l,u),i(()=>{let e=s;k(()=>w(e,l,u))}),n(l,a(` · `));let f=o(`rue:slot:anchor`);n(l,f),i(()=>{let e=t?.tagName.toLowerCase()??`unknown-host`;k(()=>w(e,l,f))}),n(l,a(` ·`));let p=o(`rue:slot:anchor`);n(l,p),i(()=>{k(()=>w(` `,l,p))}),n(l,a(` `));let m=o(`rue:slot:anchor`);return n(l,m),i(()=>{let e=r?`shadow-root`:`light-dom`;k(()=>w(e,l,m))}),l})},et=t=>{let{host:r,shadowRoot:c,emit:l,mountId:p,count:g,accent:_,panelTitle:v,tags:y,busy:S,meterWidth:ee}=j(`useSetup:0:0:dup1`,()=>D(()=>{let e=de(),n=fe(),r=j(`computed:1:4`,()=>x(()=>h(t))),i=Ye(e),a=j(`computed:1:5`,()=>x(()=>Number(t.count??0))),o=a;return{host:e,shadowRoot:n,emit:r,mountId:i,count:a,accent:j(`computed:1:6`,()=>x(()=>String(t.accent??`teal`))),panelTitle:j(`computed:1:7`,()=>x(()=>String(t.panelTitle??`Shadow console`))),tags:j(`computed:1:8`,()=>x(()=>Array.isArray(t.tags)?t.tags:[])),busy:j(`computed:1:9`,()=>x(()=>t.busy===!0)),meterWidth:j(`computed:1:10`,()=>x(()=>`${Math.max(8,Math.min(o.get()*9,100))}%`))}}));return b(h=>{let x=d(`article`,h);i(()=>{e(x,String(`frame ${qe(t)?`compact`:``}`))}),i(()=>{f(x,`data-accent`,String(_.get()))}),i(()=>{f(x,`data-busy`,String(S.get()?`yes`:`no`))});let T=d(`header`,x);n(x,T),e(T,`hero`);let E=d(`div`,T);n(T,E);let D=d(`p`,E);n(E,D),e(D,`eyebrow`),n(D,a(`Shadow Root / Slot / CustomEvent`));let O=d(`h2`,E);n(E,O),e(O,`title`);let te=s(O);n(O,te),i(()=>{m(te,v.get())});let j=d(`p`,E);n(E,j),e(j,`subtitle`),n(j,a(`实例 #`));let re=s(j);n(j,re),i(()=>{m(re,p)}),n(j,a(` · `));let ie=s(j);n(j,ie),i(()=>{m(ie,r?.tagName.toLowerCase()??`unknown-host`)}),n(j,a(` ·`));let ae=s(j);n(j,ae),m(ae,` `),n(j,a(` `));let oe=s(j);n(j,oe),i(()=>{m(oe,c?`shadow-root 已开启`:`light-dom`)});let M=d(`div`,T);n(T,M),e(M,`actions`);let N=d(`button`,M);n(M,N),f(N,`type`,`button`),e(N,`button primary`),A(N,`click`,()=>{l.get()(`save`,{mountId:p,panelTitle:v.get(),count:g.get(),tags:y.get(),busy:S.get()},{host:r?.tagName.toLowerCase()??`unknown`,rootMode:c?`shadow`:`light`})}),n(N,a(`派发 save`));let P=d(`button`,M);n(M,P),f(P,`type`,`button`),e(P,`button`),A(P,`click`,()=>{l.get()(`pulse`,g.get()+1,_.get())}),n(P,a(`派发 pulse`));let F=d(`div`,x);n(x,F),e(F,`grid`);let I=d(`section`,F);n(F,I),e(I,`panel`);let se=d(`div`,I);n(I,se),e(se,`metricValue`);let ce=s(se);n(se,ce),i(()=>{m(ce,g.get())});let L=d(`div`,I);n(I,L),e(L,`metricLabel`),n(L,a(`这个数值来自宿主上的 el.props.count`));let R=d(`div`,I);n(I,R),e(R,`meter`);let z=d(`div`,R);n(R,z),e(z,`meterFill`),i(()=>{C(z,{width:ee.get()})});let B=d(`div`,I);n(I,B),e(B,`chips`);let le=o(`rue:slot:anchor`);n(B,le),i(()=>{let t=y.get().length?b(()=>{let t=u(),r=o(`rue:list:start`),a=o(`rue:list:end`);n(t,r),n(t,a);let c=new Map;return i(()=>{c=ne({items:y.get()||[],getKey:(e,t)=>e,elements:c,parent:r.parentNode,before:a,singleRoot:!0,trackIndex:!1,start:r,renderItem:(t,r,a,o,c)=>{w(b(()=>{let r=u(),a=d(`span`,r);n(r,a),i(()=>{f(a,`key`,String(t))}),e(a,`chip`);let o=s(a);return n(a,o),i(()=>{m(o,t)}),r}),r,a)}})}),t}):b(()=>{let t=u(),r=d(`span`,t);return n(t,r),e(r,`chip muted`),n(r,a(`暂无 tags`)),t});k(()=>w(t,B,le))});let V=d(`section`,F);n(F,V),e(V,`panel`);let ue=d(`p`,V);n(V,ue),e(ue,`slotTitle`),n(ue,a(`命名 Slot`));let H=d(`slot`,V);n(V,H),f(H,`name`,`meta`);let de=d(`div`,V);n(V,de),C(de,{height:`12px`});let fe=d(`p`,V);n(V,fe),e(fe,`slotTitle`),n(fe,a(`默认 Slot`)),n(V,d(`slot`,V));let U=d(`footer`,x);n(x,U),e(U,`footer`);let pe=d(`span`,U);n(U,pe),n(pe,a(`preset: `));let me=o(`rue:slot:anchor`);n(pe,me),i(()=>{let e=Je(t);k(()=>w(e,pe,me))});let W=d(`span`,U);n(U,W);let he=s(W);n(W,he),i(()=>{m(he,S.get()?`后台同步中`:`空闲`)});let G=d(`span`,U);n(U,G);let ge=s(G);return n(G,ge),i(()=>{m(ge,qe(t)?`compact on`:`compact off`)}),x})},tt=t=>{let{emit:r,label:c,tone:l}=j(`useSetup:0:0:dup2`,()=>D(()=>({emit:j(`computed:1:11`,()=>x(()=>h(t))),label:j(`computed:1:12`,()=>x(()=>String(t.label??`Light DOM signal`))),tone:j(`computed:1:13`,()=>x(()=>String(t.tone??`teal`)))})));return b(u=>{let p=d(`div`,u);i(()=>{e(p,String(`lightShell tone-${l.get()}`))});let h=d(`div`,p);n(p,h);let g=d(`p`,h);n(h,g),e(g,`lightTitle`);let _=s(g);n(g,_),i(()=>{m(_,c.get())});let v=o(`rue:component:anchor`);n(h,v),w(T($e,{}),h,v);let y=d(`div`,p);n(p,y),e(y,`lightValue`);let b=o(`rue:slot:anchor`);n(y,b),i(()=>{let e=Ze(t);k(()=>w(e,y,b))}),n(y,a(` events / `));let x=o(`rue:slot:anchor`);n(y,x),i(()=>{let e=Z(t);k(()=>w(e,y,x))}),n(y,a(` tags`));let S=d(`button`,p);return n(p,S),f(S,`type`,`button`),e(S,`lightButton`),A(S,`click`,()=>{r.get()(`light-tap`,{label:c.get(),events:Ze(t),tags:Z(t)})}),n(S,a(`emit`)),p})},Q=je(et,{styles:Ue,nonce:Be,configureApp(){Me.value+=1}}),nt=je(tt,{shadowRoot:!1,styles:We,configureApp(){Ne.value+=1}}),rt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};rt(Ve,Q),rt(He,nt);var it=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),at=()=>{let{activeTab:t,panelTitle:c,accent:h,count:g,tagInput:x,busy:S,compact:C,activePreset:E,slotNote:O,metaBadge:te,lightLabel:ie,eventLog:M,shadowNonce:N,shadowStyleCount:P,lightStyleCount:F,shadowHostRef:I,lightHostRef:se,shadowPropsPayload:ce,lightPropsPayload:L,refreshDiagnostics:R,scheduleDiagnostics:z,syncShadowHost:B,syncLightHost:le,syncHosts:V,pushEvent:ue,bindCustomEvent:H,applyPreset:de,appendTag:fe,removeLastTag:U,clearTitleAttr:pe,clearEvents:me}=j(`useSetup:0:0:dup3`,()=>D(()=>{let e=j(`ref:1:14`,()=>_(`preview`)),t=j(`ref:1:15`,()=>_(`Ops Console / Native CE`)),n=j(`ref:1:16`,()=>_(`teal`)),i=j(`ref:1:17`,()=>_(7)),a=j(`ref:1:18`,()=>_(`shadow, events, slots, props`)),o=j(`ref:1:19`,()=>_(!1)),s=j(`ref:1:20`,()=>_(!1)),c=j(`ref:1:21`,()=>_(`ops`)),l=j(`ref:1:22`,()=>_(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),u=j(`ref:1:23`,()=>_(`SLA 99.99%`)),d=j(`ref:1:24`,()=>_(`Light DOM signal`)),f=j(`ref:1:25`,()=>_([])),m=j(`ref:1:26`,()=>_(`等待挂载`)),h=j(`ref:1:27`,()=>_(0)),g=j(`ref:1:28`,()=>_(0)),y=j(`useRef:1:29`,()=>r()),b=j(`useRef:1:30`,()=>r()),x=()=>({count:i.value,tags:Ke(a.value),config:{compact:s.value,preset:c.value},busy:o.value}),S=()=>({metrics:{events:f.value.length,tags:Ke(a.value).length,busy:o.value}}),ee=()=>{let e=y.current,t=b.current;h.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,m.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,g.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},C=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{ee()})})},w=()=>{let e=y.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=x()},T=()=>{let e=b.current;if(!e)return;let t=d.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Qe(n.value)),e.props=S()},E=()=>{w(),T(),C()},D=(e,t,n)=>{f.value=[{source:e,name:t,detail:Ge(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...f.value].slice(0,8),T(),C()},O=(e,t,n)=>{if(!e)return()=>{};let r=e=>{D(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return v(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{E(),e=O(y.current,`save`,`shadow`),t=O(y.current,`pulse`,`shadow`),n=O(b.current,`light-tap`,`light`),C()}),p(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:i,tagInput:a,busy:o,compact:s,activePreset:c,slotNote:l,metaBadge:u,lightLabel:d,eventLog:f,shadowNonce:m,shadowStyleCount:h,lightStyleCount:g,shadowHostRef:y,lightHostRef:b,shadowPropsPayload:x,lightPropsPayload:S,refreshDiagnostics:ee,scheduleDiagnostics:C,syncShadowHost:w,syncLightHost:T,syncHosts:E,pushEvent:D,bindCustomEvent:O,applyPreset:e=>{c.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,i.value=7,a.value=`shadow, events, slots, props`,l.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,u.value=`SLA 99.99%`,d.value=`Light DOM signal`,o.value=!1,s.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,i.value=11,a.value=`checkout, fulfillment, analytics, queue`,l.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,u.value=`AOV +18%`,d.value=`Revenue pulse`,o.value=!1,s.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,i.value=13,a.value=`incident, pager, bridge, rollback`,l.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,u.value=`P1 ongoing`,d.value=`War-room heartbeat`,o.value=!0,s.value=!1),E()},appendTag:()=>{let e=Ke(a.value);e.push(`tag-${e.length+1}`),a.value=e.join(`, `),E()},removeLastTag:()=>{let e=Ke(a.value);e.pop(),a.value=e.join(`, `),E()},clearTitleAttr:()=>{t.value=``,E()},clearEvents:()=>{f.value=[],T(),C()}}}));return b(r=>{let p=u(),_=o(`rue:component:anchor`);return n(p,_),w(T(oe,{children:b(()=>{let r=u(),p=d(`h1`,r);n(r,p),e(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,a(`原生 Web Components`));let _=d(`p`,r);n(r,_),e(_,`text-base-content/70 max-w-4xl leading-7`),n(_,a(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let v=d(`div`,r);n(r,v),f(v,`role`,`tablist`),e(v,`tabs tabs-box mt-4`);let D=d(`button`,v);n(v,D),f(D,`role`,`tab`),i(()=>{e(D,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),A(D,`click`,()=>{t.value=`preview`}),n(D,a(`效果`));let j=d(`button`,v);n(v,j),f(j,`role`,`tab`),i(()=>{e(j,String(`tab ${t.value===`code`?`tab-active`:``}`))}),A(j,`click`,()=>{t.value=`code`}),n(j,a(`代码`));let oe=d(`div`,r);n(r,oe),i(()=>{e(oe,String(t.value===`preview`?`mt-4 space-y-6`:`hidden`))});let R=d(`div`,oe);n(oe,R),e(R,`grid gap-6 items-start`);let ue=d(`div`,R);n(R,ue),e(ue,`card bg-base-100 shadow-xl border border-base-300`);let H=d(`div`,ue);n(ue,H),e(H,`card-body gap-5`);let W=d(`div`,H);n(H,W);let he=d(`p`,W);n(W,he),e(he,`text-xs uppercase tracking-[0.28em] text-base-content/45`),n(he,a(`Preset`));let G=d(`div`,W);n(W,G),e(G,`mt-3 flex w-full gap-2`);let ge=o(`rue:list:start`),_e=o(`rue:list:end`);n(G,ge),n(G,_e);let ve=new Map;i(()=>{ve=ne({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ve,parent:G,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(t,r,a,o,c)=>{w(b(()=>{let r=u(),a=d(`button`,r);n(r,a),i(()=>{f(a,`key`,String(t))}),i(()=>{e(a,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${E.value===t?`btn-primary`:`btn-outline`}`))}),A(a,`click`,()=>de(t));let o=s(a);return n(a,o),i(()=>{m(o,t)}),r}),r,a)}})});let K=d(`label`,H);n(H,K),e(K,`floating-label`);let ye=d(`input`,K);n(K,ye),e(ye,`input input-bordered w-full`),i(()=>{y(ye,c.value)}),A(ye,`input`,e=>{c.value=e.target.value,B(),z()});let be=d(`span`,K);n(K,be),n(be,a(`panel-title attribute`));let q=d(`label`,H);n(H,q),e(q,`floating-label`);let xe=d(`input`,q);n(q,xe),e(xe,`input input-bordered w-full`),i(()=>{y(xe,x.value)}),A(xe,`input`,e=>{x.value=e.target.value,V()});let Se=d(`span`,q);n(q,Se),n(Se,a(`host.props.tags（逗号分隔）`));let J=d(`label`,H);n(H,J),e(J,`floating-label`);let Ce=d(`input`,J);n(J,Ce),e(Ce,`input input-bordered w-full`),i(()=>{y(Ce,O.value)}),A(Ce,`input`,e=>{O.value=e.target.value});let we=d(`span`,J);n(J,we),n(we,a(`默认 slot 文案`));let Te=d(`div`,H);n(H,Te),e(Te,`grid gap-3 sm:grid-cols-2`);let Ee=d(`fieldset`,Te);n(Te,Ee),e(Ee,`fieldset`);let De=d(`legend`,Ee);n(Ee,De),e(De,`fieldset-legend`),n(De,a(`accent attribute`));let Y=d(`select`,Ee);n(Ee,Y),e(Y,`select select-bordered`),i(()=>{y(Y,h.value)}),A(Y,`change`,e=>{h.value=e.target.value,V()});let Oe=d(`option`,Y);n(Y,Oe),f(Oe,`value`,`teal`),n(Oe,a(`teal`));let ke=d(`option`,Y);n(Y,ke),f(ke,`value`,`amber`),n(ke,a(`amber`));let Ae=d(`option`,Y);n(Y,Ae),f(Ae,`value`,`rose`),n(Ae,a(`rose`));let je=d(`fieldset`,Te);n(Te,je),e(je,`fieldset`);let Ie=d(`legend`,je);n(je,Ie),e(Ie,`fieldset-legend`),n(Ie,a(`light label attribute`));let Le=d(`input`,je);n(je,Le),e(Le,`input input-bordered`),i(()=>{y(Le,ie.value)}),A(Le,`input`,e=>{ie.value=e.target.value,le(),z()});let Re=d(`div`,H);n(H,Re);let ze=d(`div`,Re);n(Re,ze),e(ze,`flex items-center justify-between text-sm mb-2`);let Be=d(`span`,ze);n(ze,Be),n(Be,a(`host.props.count`));let Ve=d(`span`,ze);n(ze,Ve),e(Ve,`font-semibold`);let He=s(Ve);n(Ve,He),i(()=>{m(He,g.value)});let Ue=d(`input`,Re);n(Re,Ue),f(Ue,`type`,`range`),f(Ue,`min`,`1`),f(Ue,`max`,`15`),i(()=>{y(Ue,g.value)}),e(Ue,`range range-primary`),A(Ue,`input`,e=>{g.value=Number(e.target.value),B(),z()});let We=d(`div`,H);n(H,We),e(We,`grid gap-3 sm:grid-cols-2`);let X=d(`label`,We);n(We,X),e(X,`label cursor-pointer justify-start gap-3`);let qe=d(`input`,X);n(X,qe),f(qe,`type`,`checkbox`),e(qe,`toggle toggle-primary`),i(()=>{l(qe,!!S.value)}),A(qe,`change`,e=>{S.value=e.target.checked,V()});let Je=d(`span`,X);n(X,Je),e(Je,`label-text`),n(Je,a(`host.props.busy`));let Ye=d(`label`,We);n(We,Ye),e(Ye,`label cursor-pointer justify-start gap-3`);let Xe=d(`input`,Ye);n(Ye,Xe),f(Xe,`type`,`checkbox`),e(Xe,`toggle toggle-secondary`),i(()=>{l(Xe,!!C.value)}),A(Xe,`change`,e=>{C.value=e.target.checked,B(),z()});let Ze=d(`span`,Ye);n(Ye,Ze),e(Ze,`label-text`),n(Ze,a(`host.props.config.compact`));let Z=d(`div`,H);n(H,Z),e(Z,`grid gap-2 sm:grid-cols-2`);let Qe=d(`button`,Z);n(Z,Qe),e(Qe,`btn btn-primary`),A(Qe,`click`,fe),n(Qe,a(`追加 tag`));let $e=d(`button`,Z);n(Z,$e),e($e,`btn btn-outline`),A($e,`click`,U),n($e,a(`删除最后一个 tag`));let et=d(`button`,Z);n(Z,et),e(et,`btn btn-secondary`),A(et,`click`,()=>{g.value+=2,B(),z()}),n(et,a(`count + 2`));let tt=d(`button`,Z);n(Z,tt),e(tt,`btn btn-ghost`),A(tt,`click`,pe),n(tt,a(`移除 title attribute`));let Q=d(`div`,R);n(R,Q),e(Q,`space-y-6`);let nt=d(`div`,Q);n(Q,nt),e(nt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=d(`div`,nt);n(nt,rt),e(rt,`card-body gap-5`);let at=d(`div`,rt);n(rt,at),e(at,`flex flex-wrap items-center justify-between gap-4`);let ot=d(`div`,at);n(at,ot);let st=d(`p`,ot);n(ot,st),e(st,`text-xs uppercase tracking-[0.28em] text-base-content/45`),n(st,a(`Live Preview`));let ct=d(`h2`,ot);n(ot,ct),e(ct,`text-2xl font-semibold mt-2`),n(ct,a(`Shadow + Light 双宿主联动`));let lt=d(`div`,at);n(at,lt),e(lt,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=d(`div`,lt);n(lt,ut),e(ut,`stat py-3 px-4`);let dt=d(`div`,ut);n(ut,dt),e(dt,`stat-title`),n(dt,a(`shadow configureApp`));let ft=d(`div`,ut);n(ut,ft),e(ft,`stat-value text-lg`);let pt=s(ft);n(ft,pt),i(()=>{m(pt,Me.value)});let mt=d(`div`,lt);n(lt,mt),e(mt,`stat py-3 px-4`);let ht=d(`div`,mt);n(mt,ht),e(ht,`stat-title`),n(ht,a(`light configureApp`));let gt=d(`div`,mt);n(mt,gt),e(gt,`stat-value text-lg`);let _t=s(gt);n(gt,_t),i(()=>{m(_t,Ne.value)});let vt=d(`div`,lt);n(lt,vt),e(vt,`stat py-3 px-4`);let yt=d(`div`,vt);n(vt,yt),e(yt,`stat-title`),n(yt,a(`mounted instances`));let bt=d(`div`,vt);n(vt,bt),e(bt,`stat-value text-lg`);let xt=s(bt);n(bt,xt),i(()=>{m(xt,Pe.value+Fe.value)});let St=d(`div`,rt);n(rt,St),e(St,`space-y-4`);let Ct=d(`rue-shadow-console`,St);n(St,Ct);let wt=re(Ct,()=>I);ee(()=>{wt()});let Tt=d(`div`,Ct);n(Ct,Tt),f(Tt,`slot`,`meta`);let Et=d(`span`,Tt);n(Tt,Et),e(Et,`status status-success`);let Dt=d(`span`,Tt);n(Tt,Dt);let Ot=s(Dt);n(Dt,Ot),i(()=>{m(Ot,te.value)});let kt=d(`div`,Ct);n(Ct,kt),e(kt,`space-y-3 text-sm text-base-content/80`);let At=d(`p`,kt);n(kt,At);let jt=s(At);n(At,jt),i(()=>{m(jt,O.value)});let Mt=d(`div`,kt);n(kt,Mt),e(Mt,`flex flex-wrap gap-2`);let Nt=o(`rue:list:start`),Pt=o(`rue:list:end`);n(Mt,Nt),n(Mt,Pt);let Ft=new Map;i(()=>{Ft=ne({items:Ke(x.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(t,r,a,o,c)=>{w(b(()=>{let r=u(),a=d(`span`,r);n(r,a),i(()=>{f(a,`key`,String(t))}),e(a,`badge badge-outline`);let o=s(a);return n(a,o),i(()=>{m(o,t)}),r}),r,a)}})});let It=d(`rue-light-signal`,St);n(St,It);let Lt=re(It,()=>se);ee(()=>{Lt()});let Rt=d(`div`,Q);n(Q,Rt),e(Rt,`grid gap-6`);let zt=d(`div`,Rt);n(Rt,zt),e(zt,`card bg-base-100 shadow border border-base-300`);let Bt=d(`div`,zt);n(zt,Bt),e(Bt,`card-body gap-4`);let Vt=d(`div`,Bt);n(Bt,Vt),e(Vt,`flex items-center justify-between gap-3`);let Ht=d(`h3`,Vt);n(Vt,Ht),e(Ht,`card-title text-lg`),n(Ht,a(`运行时诊断`));let Ut=d(`span`,Vt);n(Vt,Ut),e(Ut,`badge badge-primary badge-outline`),n(Ut,a(`nonce / styles / mode`));let $=d(`ul`,Bt);n(Bt,$),e($,`list bg-base-100 rounded-box`);let Wt=d(`li`,$);n($,Wt),e(Wt,`list-row`);let Gt=d(`div`,Wt);n(Wt,Gt),e(Gt,`font-medium`),n(Gt,a(`shadow style tags`));let Kt=d(`div`,Wt);n(Wt,Kt),e(Kt,`text-right`);let qt=s(Kt);n(Kt,qt),i(()=>{m(qt,P.value)});let Jt=d(`li`,$);n($,Jt),e(Jt,`list-row`);let Yt=d(`div`,Jt);n(Jt,Yt),e(Yt,`font-medium`),n(Yt,a(`shadow nonce`));let Xt=d(`div`,Jt);n(Jt,Xt),e(Xt,`text-right break-all`);let Zt=s(Xt);n(Xt,Zt),i(()=>{m(Zt,N.value)});let Qt=d(`li`,$);n($,Qt),e(Qt,`list-row`);let $t=d(`div`,Qt);n(Qt,$t),e($t,`font-medium`),n($t,a(`light style tags`));let en=d(`div`,Qt);n(Qt,en),e(en,`text-right`);let tn=s(en);n(en,tn),i(()=>{m(tn,F.value)});let nn=d(`li`,$);n($,nn),e(nn,`list-row`);let rn=d(`div`,nn);n(nn,rn),e(rn,`font-medium`),n(rn,a(`hook 期望`));let an=d(`div`,nn);n(nn,an),e(an,`text-right`),n(an,a(`shadow / light`));let on=d(`div`,Rt);n(Rt,on),e(on,`card bg-base-100 shadow border border-base-300`);let sn=d(`div`,on);n(on,sn),e(sn,`card-body gap-4`);let cn=d(`div`,sn);n(sn,cn),e(cn,`flex items-center justify-between gap-3`);let ln=d(`h3`,cn);n(cn,ln),e(ln,`card-title text-lg`),n(ln,a(`事件桥接日志`));let un=d(`button`,cn);n(cn,un),e(un,`btn btn-sm btn-ghost`),A(un,`click`,me),n(un,a(`清空`));let dn=d(`div`,sn);n(sn,dn),e(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=o(`rue:slot:anchor`);n(dn,fn),i(()=>{let t=M.value.length?b(()=>{let t=u(),r=o(`rue:list:start`),a=o(`rue:list:end`);n(t,r),n(t,a);let s=new Map;return i(()=>{s=ne({items:M.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:s,parent:r.parentNode,before:a,singleRoot:!0,start:r,renderItem:(t,r,a,s,c)=>{w(b(()=>{let r=u(),a=d(`div`,r);n(r,a),i(()=>{f(a,`key`,String(`${t.name}-${t.at}-${c}`))}),e(a,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let s=d(`div`,a);n(a,s),e(s,`flex items-center justify-between gap-3 text-sm`);let l=d(`div`,s);n(s,l),e(l,`flex items-center gap-2`);let p=d(`span`,l);n(l,p),i(()=>{e(p,String(`badge ${t.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let m=o(`rue:slot:anchor`);n(p,m),i(()=>{let e=t.source;k(()=>w(e,p,m))});let h=d(`span`,l);n(l,h),e(h,`font-medium`);let g=o(`rue:slot:anchor`);n(h,g),i(()=>{let e=t.name;k(()=>w(e,h,g))});let _=d(`span`,s);n(s,_),e(_,`text-base-content/50`);let v=o(`rue:slot:anchor`);n(_,v),i(()=>{let e=t.at;k(()=>w(e,_,v))});let y=d(`pre`,a);n(a,y),e(y,`mt-2 text-xs whitespace-pre-wrap break-words`);let b=o(`rue:slot:anchor`);return n(y,b),i(()=>{let e=t.detail;k(()=>w(e,y,b))}),r}),r,a)}})}),t}):b(()=>{let t=u(),r=d(`div`,t);n(t,r),e(r,`alert alert-soft`);let i=d(`span`,r);return n(r,i),n(i,a(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),t});k(()=>w(t,dn,fn))});let pn=d(`div`,Q);n(Q,pn),e(pn,`grid gap-6`);let mn=d(`div`,pn);n(pn,mn),e(mn,`card bg-base-100 shadow border border-base-300`);let hn=d(`div`,mn);n(mn,hn),e(hn,`card-body gap-3`);let gn=d(`h3`,hn);n(hn,gn),e(gn,`card-title text-lg`),n(gn,a(`shadow host.props 快照`));let _n=d(`pre`,hn);n(hn,_n),e(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=o(`rue:slot:anchor`);n(_n,vn),i(()=>{let e=Ge(ce());k(()=>w(e,_n,vn))});let yn=d(`div`,pn);n(pn,yn),e(yn,`card bg-base-100 shadow border border-base-300`);let bn=d(`div`,yn);n(yn,bn),e(bn,`card-body gap-3`);let xn=d(`h3`,bn);n(bn,xn),e(xn,`card-title text-lg`),n(xn,a(`light host.props 快照`));let Sn=d(`pre`,bn);n(bn,Sn),e(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=o(`rue:slot:anchor`);n(Sn,Cn),i(()=>{let e=Ge(L());k(()=>w(e,Sn,Cn))});let wn=d(`div`,r);n(r,wn),i(()=>{e(wn,String(t.value===`code`?`mt-4`:`hidden`))});let Tn=d(`div`,wn);n(wn,Tn),e(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=d(`div`,Tn);n(Tn,En),e(En,`card-body p-0`);let Dn=o(`rue:component:anchor`);return n(En,Dn),i(()=>{let e=T(ae,{className:`h-full`,lang:`tsx`,code:it});k(()=>w(e,En,Dn))}),r})}),p,_),p})};export{at as default};
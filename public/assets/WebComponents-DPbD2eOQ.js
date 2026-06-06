import{$ as e,Gt as t,I as n,J as r,Kt as i,Lt as a,N as o,Q as s,Rt as c,Vt as l,Y as u,Yt as d,Z as f,_ as p,a as m,b as h,ct as g,et as _,ft as v,gt as y,ht as b,i as x,l as S,mt as C,ot as w,pt as T,r as E,s as D,st as O,t as k,tt as A,v as ee,y as te}from"./vapor-runtime-DHPuOjqh.js";import{a as j,n as ne,t as re}from"./vapor-helpers-vapor-CJFAWine.js";import{t as ie}from"./useApp-BLya-Jm6.js";import{t as ae}from"./Code-Ds9lKLk6.js";import{t as oe}from"./SidebarPlaygroundExample-KML-rOvA.js";var M=new Set([`data-rue-app`]),N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,se=new WeakMap,ce=new WeakMap,L=new WeakMap,R=new WeakMap,z=[],B=null,le=()=>z.length>0?z[z.length-1]:B,V=(e,t)=>{B=e,z.push(e);try{return t()}finally{z.pop()}},H=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return L.get(e)??null},U=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return R.get(e)??null},ue=()=>{let e=le();return e?e.host:H(h())},de=()=>{let e=le();return e?e.shadowRoot:U(h())},W=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},fe=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),pe=e=>{let t={};for(let n of e.getAttributeNames())M.has(n)||(t[fe(n)]=e.getAttribute(n));return t},G=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},me=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},K=e=>({...pe(e),...G(e),...F.get(e)}),he=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},ge=e=>{let t={};return Object.defineProperty(t,b,{configurable:!0,enumerable:!0,value:he(e)}),c(t)},_e=e=>F.get(e)??{},ve=(e,t)=>{F.set(e,me(t))},ye=e=>I.get(e)??null,be=(e,t)=>{if(t){I.set(e,t);return}I.delete(e)},q=(e,t)=>{if(t){se.set(e,t);return}se.delete(e)},xe=e=>{let t=se.get(e);t&&(t.value+=1)},Se=e=>{let t=I.get(e);if(!t)return;let n=K(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},J=e=>N.get(e)??null,Ce=(e,t)=>{if(t){N.set(e,t);return}N.delete(e)},we=e=>P.get(e)??null,Te=(e,t)=>{if(t){P.set(e,t);return}P.delete(e)},Ee=(e,t)=>{if(ce.set(e,t),L.set(e,e),L.set(t,e),t instanceof ShadowRoot){R.set(e,t),R.set(t,t);return}R.delete(e),R.delete(t)},De=e=>{let t=ce.get(e);t&&(L.delete(e),L.delete(t),R.delete(e),R.delete(t),ce.delete(e))},Y=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Oe=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(Oe(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&M.has(e.attributeName);function je(t,r={}){let{shadowRoot:s=!0,styles:c,configureApp:l,nonce:m}=r,h=typeof t==`function`?t:e=>{let n=typeof t.setup==`function`?i(()=>t.setup(e)):e;return typeof t.render==`function`?t.render(n):[]},g=t=>{let r=Y(t,s),i=ee(),g={host:t,shadowRoot:r instanceof ShadowRoot?r:null},_=ge(t),v=a(0);be(t,_),q(t,v),Se(t),Ee(t,r);let y=e=>V(g,()=>h(e)),b=ie(()=>i.vapor(()=>{let r=e(`span`);r.style.display=`contents`;let a=f(`rue:custom-element:anchor`);return u(r,a),d(()=>{v.value,n(i,()=>{o(p(y,ye(t)??{}),r,a)})}),r}),i);l?.(b),Ce(t,b),b.mount(r),W(()=>{J(t)&&ke(r,c,m)})},_=e=>{J(e)?.unmount(),Ce(e,null),be(e,null),q(e,null),De(e)},v=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||Se(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),ve(this,null)}get props(){return _e(this)}set props(e){ve(this,e),Se(this)}connectedCallback(){J(this)||(g(this),v(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),_(this)}}}var Me=j(`ref:1:0`,()=>a(0)),Ne=j(`ref:1:1`,()=>a(0)),Pe=j(`ref:1:2`,()=>a(0)),Fe=j(`ref:1:3`,()=>a(0)),Ie=0,Le=0,Re=new WeakMap,ze=new WeakMap,Be=`rue-demo-nonce`,Ve=`rue-shadow-console`,He=`rue-light-signal`,Ue=[`
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
  `],Ge=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ke=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,qe=e=>X(e.config)?.compact===!0,Je=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},Ye=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>Number(X(e.metrics)?.events??0),Z=e=>Number(X(e.metrics)?.tags??0),Qe=e=>e,$e=()=>{let{host:t,shadowRoot:n,mountId:r}=j(`useSetup:0:0`,()=>i(()=>{let e=ue();return{host:e,shadowRoot:de(),mountId:Xe(e)}}));return S(i=>{let a=e(`p`,i);g(a,`lightMeta`),u(a,_(`实例 #`));let o=f(`rue:slot:anchor`);u(a,o),d(()=>{let e=r;l(()=>D(e,a,o))}),u(a,_(` · `));let s=f(`rue:slot:anchor`);u(a,s),d(()=>{let e=t?.tagName.toLowerCase()??`unknown-host`;l(()=>D(e,a,s))}),u(a,_(` ·`));let c=f(`rue:slot:anchor`);u(a,c),d(()=>{l(()=>D(` `,a,c))}),u(a,_(` `));let p=f(`rue:slot:anchor`);return u(a,p),d(()=>{let e=n?`shadow-root`:`light-dom`;l(()=>D(e,a,p))}),a})},et=t=>{let{host:n,shadowRoot:a,emit:o,mountId:c,count:p,accent:m,panelTitle:h,tags:b,busy:x,meterWidth:T}=j(`useSetup:0:0:dup1`,()=>i(()=>{let e=ue(),n=de(),r=j(`computed:1:4`,()=>y(()=>te(t))),i=Ye(e),a=j(`computed:1:5`,()=>y(()=>Number(t.count??0))),o=a;return{host:e,shadowRoot:n,emit:r,mountId:i,count:a,accent:j(`computed:1:6`,()=>y(()=>String(t.accent??`teal`))),panelTitle:j(`computed:1:7`,()=>y(()=>String(t.panelTitle??`Shadow console`))),tags:j(`computed:1:8`,()=>y(()=>Array.isArray(t.tags)?t.tags:[])),busy:j(`computed:1:9`,()=>y(()=>t.busy===!0)),meterWidth:j(`computed:1:10`,()=>y(()=>`${Math.max(8,Math.min(o.get()*9,100))}%`))}}));return S(i=>{let y=e(`article`,i);d(()=>{g(y,String(`frame ${qe(t)?`compact`:``}`))}),d(()=>{w(y,`data-accent`,String(m.get()))}),d(()=>{w(y,`data-busy`,String(x.get()?`yes`:`no`))});let E=e(`header`,y);u(y,E),g(E,`hero`);let O=e(`div`,E);u(E,O);let k=e(`p`,O);u(O,k),g(k,`eyebrow`),u(k,_(`Shadow Root / Slot / CustomEvent`));let ee=e(`h2`,O);u(O,ee),g(ee,`title`);let te=A(ee);u(ee,te),d(()=>{C(te,h.get())});let j=e(`p`,O);u(O,j),g(j,`subtitle`),u(j,_(`实例 #`));let re=A(j);u(j,re),d(()=>{C(re,c)}),u(j,_(` · `));let ie=A(j);u(j,ie),d(()=>{C(ie,n?.tagName.toLowerCase()??`unknown-host`)}),u(j,_(` ·`));let ae=A(j);u(j,ae),C(ae,` `),u(j,_(` `));let oe=A(j);u(j,oe),d(()=>{C(oe,a?`shadow-root 已开启`:`light-dom`)});let M=e(`div`,E);u(E,M),g(M,`actions`);let N=e(`button`,M);u(M,N),w(N,`type`,`button`),g(N,`button primary`),r(N,`click`,()=>{o.get()(`save`,{mountId:c,panelTitle:h.get(),count:p.get(),tags:b.get(),busy:x.get()},{host:n?.tagName.toLowerCase()??`unknown`,rootMode:a?`shadow`:`light`})}),u(N,_(`派发 save`));let P=e(`button`,M);u(M,P),w(P,`type`,`button`),g(P,`button`),r(P,`click`,()=>{o.get()(`pulse`,p.get()+1,m.get())}),u(P,_(`派发 pulse`));let F=e(`div`,y);u(y,F),g(F,`grid`);let I=e(`section`,F);u(F,I),g(I,`panel`);let se=e(`div`,I);u(I,se),g(se,`metricValue`);let ce=A(se);u(se,ce),d(()=>{C(ce,p.get())});let L=e(`div`,I);u(I,L),g(L,`metricLabel`),u(L,_(`这个数值来自宿主上的 el.props.count`));let R=e(`div`,I);u(I,R),g(R,`meter`);let z=e(`div`,R);u(R,z),g(z,`meterFill`),d(()=>{v(z,{width:T.get()})});let B=e(`div`,I);u(I,B),g(B,`chips`);let le=f(`rue:slot:anchor`);u(B,le),d(()=>{let t=b.get().length?S(()=>{let t=s(),n=f(`rue:list:start`),r=f(`rue:list:end`);u(t,n),u(t,r);let i=new Map;return d(()=>{i=ne({items:b.get()||[],getKey:(e,t)=>e,elements:i,parent:n.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,r,i,a)=>{D(S(()=>{let n=s(),r=e(`span`,n);u(n,r),d(()=>{w(r,`key`,String(t))}),g(r,`chip`);let i=A(r);return u(r,i),d(()=>{C(i,t)}),n}),n,r)}})}),t}):S(()=>{let t=s(),n=e(`span`,t);return u(t,n),g(n,`chip muted`),u(n,_(`暂无 tags`)),t});l(()=>D(t,B,le))});let V=e(`section`,F);u(F,V),g(V,`panel`);let H=e(`p`,V);u(V,H),g(H,`slotTitle`),u(H,_(`命名 Slot`));let U=e(`slot`,V);u(V,U),w(U,`name`,`meta`);let ue=e(`div`,V);u(V,ue),v(ue,{height:`12px`});let de=e(`p`,V);u(V,de),g(de,`slotTitle`),u(de,_(`默认 Slot`)),u(V,e(`slot`,V));let W=e(`footer`,y);u(y,W),g(W,`footer`);let fe=e(`span`,W);u(W,fe),u(fe,_(`preset: `));let pe=f(`rue:slot:anchor`);u(fe,pe),d(()=>{let e=Je(t);l(()=>D(e,fe,pe))});let G=e(`span`,W);u(W,G);let me=A(G);u(G,me),d(()=>{C(me,x.get()?`后台同步中`:`空闲`)});let K=e(`span`,W);u(W,K);let he=A(K);return u(K,he),d(()=>{C(he,qe(t)?`compact on`:`compact off`)}),y})},tt=t=>{let{emit:n,label:a,tone:o}=j(`useSetup:0:0:dup2`,()=>i(()=>({emit:j(`computed:1:11`,()=>y(()=>te(t))),label:j(`computed:1:12`,()=>y(()=>String(t.label??`Light DOM signal`))),tone:j(`computed:1:13`,()=>y(()=>String(t.tone??`teal`)))})));return S(i=>{let s=e(`div`,i);d(()=>{g(s,String(`lightShell tone-${o.get()}`))});let c=e(`div`,s);u(s,c);let p=e(`p`,c);u(c,p),g(p,`lightTitle`);let m=A(p);u(p,m),d(()=>{C(m,a.get())});let h=f(`rue:component:anchor`);u(c,h),D(k($e,{}),c,h);let v=e(`div`,s);u(s,v),g(v,`lightValue`);let y=f(`rue:slot:anchor`);u(v,y),d(()=>{let e=Ze(t);l(()=>D(e,v,y))}),u(v,_(` events / `));let b=f(`rue:slot:anchor`);u(v,b),d(()=>{let e=Z(t);l(()=>D(e,v,b))}),u(v,_(` tags`));let x=e(`button`,s);return u(s,x),w(x,`type`,`button`),g(x,`lightButton`),r(x,`click`,()=>{n.get()(`light-tap`,{label:a.get(),events:Ze(t),tags:Z(t)})}),u(x,_(`emit`)),s})},Q=je(et,{styles:Ue,nonce:Be,configureApp(){Me.value+=1}}),nt=je(tt,{shadowRoot:!1,styles:We,configureApp(){Ne.value+=1}}),rt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};rt(Ve,Q),rt(He,nt);var it=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),at=()=>{let{activeTab:n,panelTitle:o,accent:c,count:p,tagInput:h,busy:v,compact:y,activePreset:b,slotNote:ee,metaBadge:te,lightLabel:ie,eventLog:M,shadowNonce:N,shadowStyleCount:P,lightStyleCount:F,shadowHostRef:I,lightHostRef:se,shadowPropsPayload:ce,lightPropsPayload:L,refreshDiagnostics:R,scheduleDiagnostics:z,syncShadowHost:B,syncLightHost:le,syncHosts:V,pushEvent:H,bindCustomEvent:U,applyPreset:ue,appendTag:de,removeLastTag:W,clearTitleAttr:fe,clearEvents:pe}=j(`useSetup:0:0:dup3`,()=>i(()=>{let e=j(`ref:1:14`,()=>a(`preview`)),n=j(`ref:1:15`,()=>a(`Ops Console / Native CE`)),r=j(`ref:1:16`,()=>a(`teal`)),i=j(`ref:1:17`,()=>a(7)),o=j(`ref:1:18`,()=>a(`shadow, events, slots, props`)),s=j(`ref:1:19`,()=>a(!1)),c=j(`ref:1:20`,()=>a(!1)),l=j(`ref:1:21`,()=>a(`ops`)),u=j(`ref:1:22`,()=>a(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),d=j(`ref:1:23`,()=>a(`SLA 99.99%`)),f=j(`ref:1:24`,()=>a(`Light DOM signal`)),p=j(`ref:1:25`,()=>a([])),h=j(`ref:1:26`,()=>a(`等待挂载`)),g=j(`ref:1:27`,()=>a(0)),_=j(`ref:1:28`,()=>a(0)),v=j(`useRef:1:29`,()=>t()),y=j(`useRef:1:30`,()=>t()),b=()=>({count:i.value,tags:Ke(o.value),config:{compact:c.value,preset:l.value},busy:s.value}),S=()=>({metrics:{events:p.value.length,tags:Ke(o.value).length,busy:s.value}}),C=()=>{let e=v.current,t=y.current;g.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,h.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,_.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},w=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{C()})})},T=()=>{let e=v.current;if(!e)return;let t=n.value.trim();t?e.setAttribute(`panel-title`,t):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,r.value),e.props=b()},E=()=>{let e=y.current;if(!e)return;let t=f.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Qe(r.value)),e.props=S()},D=()=>{T(),E(),w()},O=(e,t,n)=>{p.value=[{source:e,name:t,detail:Ge(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...p.value].slice(0,8),E(),w()},k=(e,t,n)=>{if(!e)return()=>{};let r=e=>{O(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return x(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{D(),e=k(v.current,`save`,`shadow`),t=k(v.current,`pulse`,`shadow`),n=k(y.current,`light-tap`,`light`),w()}),m(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:n,accent:r,count:i,tagInput:o,busy:s,compact:c,activePreset:l,slotNote:u,metaBadge:d,lightLabel:f,eventLog:p,shadowNonce:h,shadowStyleCount:g,lightStyleCount:_,shadowHostRef:v,lightHostRef:y,shadowPropsPayload:b,lightPropsPayload:S,refreshDiagnostics:C,scheduleDiagnostics:w,syncShadowHost:T,syncLightHost:E,syncHosts:D,pushEvent:O,bindCustomEvent:k,applyPreset:e=>{l.value=e,e===`ops`?(n.value=`Ops Console / Native CE`,r.value=`teal`,i.value=7,o.value=`shadow, events, slots, props`,u.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,d.value=`SLA 99.99%`,f.value=`Light DOM signal`,s.value=!1,c.value=!1):e===`commerce`?(n.value=`Commerce Fulfillment Board`,r.value=`amber`,i.value=11,o.value=`checkout, fulfillment, analytics, queue`,u.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,d.value=`AOV +18%`,f.value=`Revenue pulse`,s.value=!1,c.value=!0):(n.value=`Incident Bridge / P1`,r.value=`rose`,i.value=13,o.value=`incident, pager, bridge, rollback`,u.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,d.value=`P1 ongoing`,f.value=`War-room heartbeat`,s.value=!0,c.value=!1),D()},appendTag:()=>{let e=Ke(o.value);e.push(`tag-${e.length+1}`),o.value=e.join(`, `),D()},removeLastTag:()=>{let e=Ke(o.value);e.pop(),o.value=e.join(`, `),D()},clearTitleAttr:()=>{n.value=``,D()},clearEvents:()=>{p.value=[],E(),w()}}}));return S(t=>{let i=s(),a=f(`rue:component:anchor`);return u(i,a),D(k(oe,{children:S(()=>{let t=s(),i=e(`h1`,t);u(t,i),g(i,`text-5xl font-semibold mb-4 md:mb-4`),u(i,_(`原生 Web Components`));let a=e(`p`,t);u(t,a),g(a,`text-base-content/70 max-w-4xl leading-7`),u(a,_(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let m=e(`div`,t);u(t,m),w(m,`role`,`tablist`),g(m,`tabs tabs-box mt-4`);let x=e(`button`,m);u(m,x),w(x,`role`,`tab`),d(()=>{g(x,String(`tab ${n.value===`preview`?`tab-active`:``}`))}),r(x,`click`,()=>{n.value=`preview`}),u(x,_(`效果`));let j=e(`button`,m);u(m,j),w(j,`role`,`tab`),d(()=>{g(j,String(`tab ${n.value===`code`?`tab-active`:``}`))}),r(j,`click`,()=>{n.value=`code`}),u(j,_(`代码`));let oe=e(`div`,t);u(t,oe),d(()=>{g(oe,String(n.value===`preview`?`mt-4 space-y-6`:`hidden`))});let R=e(`div`,oe);u(oe,R),g(R,`grid gap-6 items-start`);let H=e(`div`,R);u(R,H),g(H,`card bg-base-100 shadow-xl border border-base-300`);let U=e(`div`,H);u(H,U),g(U,`card-body gap-5`);let G=e(`div`,U);u(U,G);let me=e(`p`,G);u(G,me),g(me,`text-xs uppercase tracking-[0.28em] text-base-content/45`),u(me,_(`Preset`));let K=e(`div`,G);u(G,K),g(K,`mt-3 flex w-full gap-2`);let he=f(`rue:list:start`),ge=f(`rue:list:end`);u(K,he),u(K,ge);let _e=new Map;d(()=>{_e=ne({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:_e,parent:K,before:ge,singleRoot:!0,trackIndex:!1,start:he,renderItem:(t,n,i,a,o)=>{D(S(()=>{let n=s(),i=e(`button`,n);u(n,i),d(()=>{w(i,`key`,String(t))}),d(()=>{g(i,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${b.value===t?`btn-primary`:`btn-outline`}`))}),r(i,`click`,()=>ue(t));let a=A(i);return u(i,a),d(()=>{C(a,t)}),n}),n,i)}})});let ve=e(`label`,U);u(U,ve),g(ve,`floating-label`);let ye=e(`input`,ve);u(ve,ye),g(ye,`input input-bordered w-full`),d(()=>{T(ye,o.value)}),r(ye,`input`,e=>{o.value=e.target.value,B(),z()});let be=e(`span`,ve);u(ve,be),u(be,_(`panel-title attribute`));let q=e(`label`,U);u(U,q),g(q,`floating-label`);let xe=e(`input`,q);u(q,xe),g(xe,`input input-bordered w-full`),d(()=>{T(xe,h.value)}),r(xe,`input`,e=>{h.value=e.target.value,V()});let Se=e(`span`,q);u(q,Se),u(Se,_(`host.props.tags（逗号分隔）`));let J=e(`label`,U);u(U,J),g(J,`floating-label`);let Ce=e(`input`,J);u(J,Ce),g(Ce,`input input-bordered w-full`),d(()=>{T(Ce,ee.value)}),r(Ce,`input`,e=>{ee.value=e.target.value});let we=e(`span`,J);u(J,we),u(we,_(`默认 slot 文案`));let Te=e(`div`,U);u(U,Te),g(Te,`grid gap-3 sm:grid-cols-2`);let Ee=e(`fieldset`,Te);u(Te,Ee),g(Ee,`fieldset`);let De=e(`legend`,Ee);u(Ee,De),g(De,`fieldset-legend`),u(De,_(`accent attribute`));let Y=e(`select`,Ee);u(Ee,Y),g(Y,`select select-bordered`),d(()=>{T(Y,c.value)}),r(Y,`change`,e=>{c.value=e.target.value,V()});let Oe=e(`option`,Y);u(Y,Oe),w(Oe,`value`,`teal`),u(Oe,_(`teal`));let ke=e(`option`,Y);u(Y,ke),w(ke,`value`,`amber`),u(ke,_(`amber`));let Ae=e(`option`,Y);u(Y,Ae),w(Ae,`value`,`rose`),u(Ae,_(`rose`));let je=e(`fieldset`,Te);u(Te,je),g(je,`fieldset`);let Ie=e(`legend`,je);u(je,Ie),g(Ie,`fieldset-legend`),u(Ie,_(`light label attribute`));let Le=e(`input`,je);u(je,Le),g(Le,`input input-bordered`),d(()=>{T(Le,ie.value)}),r(Le,`input`,e=>{ie.value=e.target.value,le(),z()});let Re=e(`div`,U);u(U,Re);let ze=e(`div`,Re);u(Re,ze),g(ze,`flex items-center justify-between text-sm mb-2`);let Be=e(`span`,ze);u(ze,Be),u(Be,_(`host.props.count`));let Ve=e(`span`,ze);u(ze,Ve),g(Ve,`font-semibold`);let He=A(Ve);u(Ve,He),d(()=>{C(He,p.value)});let Ue=e(`input`,Re);u(Re,Ue),w(Ue,`type`,`range`),w(Ue,`min`,`1`),w(Ue,`max`,`15`),d(()=>{T(Ue,p.value)}),g(Ue,`range range-primary`),r(Ue,`input`,e=>{p.value=Number(e.target.value),B(),z()});let We=e(`div`,U);u(U,We),g(We,`grid gap-3 sm:grid-cols-2`);let X=e(`label`,We);u(We,X),g(X,`label cursor-pointer justify-start gap-3`);let qe=e(`input`,X);u(X,qe),w(qe,`type`,`checkbox`),g(qe,`toggle toggle-primary`),d(()=>{O(qe,!!v.value)}),r(qe,`change`,e=>{v.value=e.target.checked,V()});let Je=e(`span`,X);u(X,Je),g(Je,`label-text`),u(Je,_(`host.props.busy`));let Ye=e(`label`,We);u(We,Ye),g(Ye,`label cursor-pointer justify-start gap-3`);let Xe=e(`input`,Ye);u(Ye,Xe),w(Xe,`type`,`checkbox`),g(Xe,`toggle toggle-secondary`),d(()=>{O(Xe,!!y.value)}),r(Xe,`change`,e=>{y.value=e.target.checked,B(),z()});let Ze=e(`span`,Ye);u(Ye,Ze),g(Ze,`label-text`),u(Ze,_(`host.props.config.compact`));let Z=e(`div`,U);u(U,Z),g(Z,`grid gap-2 sm:grid-cols-2`);let Qe=e(`button`,Z);u(Z,Qe),g(Qe,`btn btn-primary`),r(Qe,`click`,de),u(Qe,_(`追加 tag`));let $e=e(`button`,Z);u(Z,$e),g($e,`btn btn-outline`),r($e,`click`,W),u($e,_(`删除最后一个 tag`));let et=e(`button`,Z);u(Z,et),g(et,`btn btn-secondary`),r(et,`click`,()=>{p.value+=2,B(),z()}),u(et,_(`count + 2`));let tt=e(`button`,Z);u(Z,tt),g(tt,`btn btn-ghost`),r(tt,`click`,fe),u(tt,_(`移除 title attribute`));let Q=e(`div`,R);u(R,Q),g(Q,`space-y-6`);let nt=e(`div`,Q);u(Q,nt),g(nt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=e(`div`,nt);u(nt,rt),g(rt,`card-body gap-5`);let at=e(`div`,rt);u(rt,at),g(at,`flex flex-wrap items-center justify-between gap-4`);let ot=e(`div`,at);u(at,ot);let st=e(`p`,ot);u(ot,st),g(st,`text-xs uppercase tracking-[0.28em] text-base-content/45`),u(st,_(`Live Preview`));let ct=e(`h2`,ot);u(ot,ct),g(ct,`text-2xl font-semibold mt-2`),u(ct,_(`Shadow + Light 双宿主联动`));let lt=e(`div`,at);u(at,lt),g(lt,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=e(`div`,lt);u(lt,ut),g(ut,`stat py-3 px-4`);let dt=e(`div`,ut);u(ut,dt),g(dt,`stat-title`),u(dt,_(`shadow configureApp`));let ft=e(`div`,ut);u(ut,ft),g(ft,`stat-value text-lg`);let pt=A(ft);u(ft,pt),d(()=>{C(pt,Me.value)});let mt=e(`div`,lt);u(lt,mt),g(mt,`stat py-3 px-4`);let ht=e(`div`,mt);u(mt,ht),g(ht,`stat-title`),u(ht,_(`light configureApp`));let gt=e(`div`,mt);u(mt,gt),g(gt,`stat-value text-lg`);let _t=A(gt);u(gt,_t),d(()=>{C(_t,Ne.value)});let vt=e(`div`,lt);u(lt,vt),g(vt,`stat py-3 px-4`);let yt=e(`div`,vt);u(vt,yt),g(yt,`stat-title`),u(yt,_(`mounted instances`));let bt=e(`div`,vt);u(vt,bt),g(bt,`stat-value text-lg`);let xt=A(bt);u(bt,xt),d(()=>{C(xt,Pe.value+Fe.value)});let St=e(`div`,rt);u(rt,St),g(St,`space-y-4`);let Ct=e(`rue-shadow-console`,St);u(St,Ct);let wt=re(Ct,()=>I);E(()=>{wt()});let Tt=e(`div`,Ct);u(Ct,Tt),w(Tt,`slot`,`meta`);let Et=e(`span`,Tt);u(Tt,Et),g(Et,`status status-success`);let Dt=e(`span`,Tt);u(Tt,Dt);let Ot=A(Dt);u(Dt,Ot),d(()=>{C(Ot,te.value)});let kt=e(`div`,Ct);u(Ct,kt),g(kt,`space-y-3 text-sm text-base-content/80`);let At=e(`p`,kt);u(kt,At);let jt=A(At);u(At,jt),d(()=>{C(jt,ee.value)});let Mt=e(`div`,kt);u(kt,Mt),g(Mt,`flex flex-wrap gap-2`);let Nt=f(`rue:list:start`),Pt=f(`rue:list:end`);u(Mt,Nt),u(Mt,Pt);let Ft=new Map;d(()=>{Ft=ne({items:Ke(h.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(t,n,r,i,a)=>{D(S(()=>{let n=s(),r=e(`span`,n);u(n,r),d(()=>{w(r,`key`,String(t))}),g(r,`badge badge-outline`);let i=A(r);return u(r,i),d(()=>{C(i,t)}),n}),n,r)}})});let It=e(`rue-light-signal`,St);u(St,It);let Lt=re(It,()=>se);E(()=>{Lt()});let Rt=e(`div`,Q);u(Q,Rt),g(Rt,`grid gap-6`);let zt=e(`div`,Rt);u(Rt,zt),g(zt,`card bg-base-100 shadow border border-base-300`);let Bt=e(`div`,zt);u(zt,Bt),g(Bt,`card-body gap-4`);let Vt=e(`div`,Bt);u(Bt,Vt),g(Vt,`flex items-center justify-between gap-3`);let Ht=e(`h3`,Vt);u(Vt,Ht),g(Ht,`card-title text-lg`),u(Ht,_(`运行时诊断`));let Ut=e(`span`,Vt);u(Vt,Ut),g(Ut,`badge badge-primary badge-outline`),u(Ut,_(`nonce / styles / mode`));let $=e(`ul`,Bt);u(Bt,$),g($,`list bg-base-100 rounded-box`);let Wt=e(`li`,$);u($,Wt),g(Wt,`list-row`);let Gt=e(`div`,Wt);u(Wt,Gt),g(Gt,`font-medium`),u(Gt,_(`shadow style tags`));let Kt=e(`div`,Wt);u(Wt,Kt),g(Kt,`text-right`);let qt=A(Kt);u(Kt,qt),d(()=>{C(qt,P.value)});let Jt=e(`li`,$);u($,Jt),g(Jt,`list-row`);let Yt=e(`div`,Jt);u(Jt,Yt),g(Yt,`font-medium`),u(Yt,_(`shadow nonce`));let Xt=e(`div`,Jt);u(Jt,Xt),g(Xt,`text-right break-all`);let Zt=A(Xt);u(Xt,Zt),d(()=>{C(Zt,N.value)});let Qt=e(`li`,$);u($,Qt),g(Qt,`list-row`);let $t=e(`div`,Qt);u(Qt,$t),g($t,`font-medium`),u($t,_(`light style tags`));let en=e(`div`,Qt);u(Qt,en),g(en,`text-right`);let tn=A(en);u(en,tn),d(()=>{C(tn,F.value)});let nn=e(`li`,$);u($,nn),g(nn,`list-row`);let rn=e(`div`,nn);u(nn,rn),g(rn,`font-medium`),u(rn,_(`hook 期望`));let an=e(`div`,nn);u(nn,an),g(an,`text-right`),u(an,_(`shadow / light`));let on=e(`div`,Rt);u(Rt,on),g(on,`card bg-base-100 shadow border border-base-300`);let sn=e(`div`,on);u(on,sn),g(sn,`card-body gap-4`);let cn=e(`div`,sn);u(sn,cn),g(cn,`flex items-center justify-between gap-3`);let ln=e(`h3`,cn);u(cn,ln),g(ln,`card-title text-lg`),u(ln,_(`事件桥接日志`));let un=e(`button`,cn);u(cn,un),g(un,`btn btn-sm btn-ghost`),r(un,`click`,pe),u(un,_(`清空`));let dn=e(`div`,sn);u(sn,dn),g(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=f(`rue:slot:anchor`);u(dn,fn),d(()=>{let t=M.value.length?S(()=>{let t=s(),n=f(`rue:list:start`),r=f(`rue:list:end`);u(t,n),u(t,r);let i=new Map;return d(()=>{i=ne({items:M.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:i,parent:n.parentNode,before:r,singleRoot:!0,start:n,renderItem:(t,n,r,i,a)=>{D(S(()=>{let n=s(),r=e(`div`,n);u(n,r),d(()=>{w(r,`key`,String(`${t.name}-${t.at}-${a}`))}),g(r,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let i=e(`div`,r);u(r,i),g(i,`flex items-center justify-between gap-3 text-sm`);let o=e(`div`,i);u(i,o),g(o,`flex items-center gap-2`);let c=e(`span`,o);u(o,c),d(()=>{g(c,String(`badge ${t.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let p=f(`rue:slot:anchor`);u(c,p),d(()=>{let e=t.source;l(()=>D(e,c,p))});let m=e(`span`,o);u(o,m),g(m,`font-medium`);let h=f(`rue:slot:anchor`);u(m,h),d(()=>{let e=t.name;l(()=>D(e,m,h))});let _=e(`span`,i);u(i,_),g(_,`text-base-content/50`);let v=f(`rue:slot:anchor`);u(_,v),d(()=>{let e=t.at;l(()=>D(e,_,v))});let y=e(`pre`,r);u(r,y),g(y,`mt-2 text-xs whitespace-pre-wrap break-words`);let b=f(`rue:slot:anchor`);return u(y,b),d(()=>{let e=t.detail;l(()=>D(e,y,b))}),n}),n,r)}})}),t}):S(()=>{let t=s(),n=e(`div`,t);u(t,n),g(n,`alert alert-soft`);let r=e(`span`,n);return u(n,r),u(r,_(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),t});l(()=>D(t,dn,fn))});let pn=e(`div`,Q);u(Q,pn),g(pn,`grid gap-6`);let mn=e(`div`,pn);u(pn,mn),g(mn,`card bg-base-100 shadow border border-base-300`);let hn=e(`div`,mn);u(mn,hn),g(hn,`card-body gap-3`);let gn=e(`h3`,hn);u(hn,gn),g(gn,`card-title text-lg`),u(gn,_(`shadow host.props 快照`));let _n=e(`pre`,hn);u(hn,_n),g(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=f(`rue:slot:anchor`);u(_n,vn),d(()=>{let e=Ge(ce());l(()=>D(e,_n,vn))});let yn=e(`div`,pn);u(pn,yn),g(yn,`card bg-base-100 shadow border border-base-300`);let bn=e(`div`,yn);u(yn,bn),g(bn,`card-body gap-3`);let xn=e(`h3`,bn);u(bn,xn),g(xn,`card-title text-lg`),u(xn,_(`light host.props 快照`));let Sn=e(`pre`,bn);u(bn,Sn),g(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=f(`rue:slot:anchor`);u(Sn,Cn),d(()=>{let e=Ge(L());l(()=>D(e,Sn,Cn))});let wn=e(`div`,t);u(t,wn),d(()=>{g(wn,String(n.value===`code`?`mt-4`:`hidden`))});let Tn=e(`div`,wn);u(wn,Tn),g(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=e(`div`,Tn);u(Tn,En),g(En,`card-body p-0`);let Dn=f(`rue:component:anchor`);return u(En,Dn),d(()=>{let e=k(ae,{className:`h-full`,lang:`tsx`,code:it});l(()=>D(e,En,Dn))}),t})}),i,a),i})};export{at as default};
import{$ as e,F as t,Ht as n,J as r,Kt as i,Lt as a,M as o,Q as s,Rt as c,X as l,Xt as u,Z as d,_ as f,a as p,at as m,dt as h,et as g,ft as _,g as v,gt as y,ht as b,i as x,l as S,ot as C,pt as w,q as T,qt as E,r as D,s as O,st as k,t as ee,v as A,y as te}from"./vapor-runtime-iQZthBPQ.js";import{a as j,n as ne,t as re}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as ie}from"./useApp-B-SjjQlV.js";import{t as ae}from"./Code-CZqShVUj.js";import{r as oe}from"./SidebarPlaygroundExample-5H7RL-T7.js";var M=new Set([`data-rue-app`]),N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,L=new WeakMap,se=new WeakMap,R=new WeakMap,z=new WeakMap,B=[],V=null,ce=()=>B.length>0?B[B.length-1]:V,H=(e,t)=>{V=e,B.push(e);try{return t()}finally{B.pop()}},le=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return R.get(e)??null},U=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return z.get(e)??null},ue=()=>{let e=ce();return e?e.host:le(te())},de=()=>{let e=ce();return e?e.shadowRoot:U(te())},W=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},fe=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),pe=e=>{let t={};for(let n of e.getAttributeNames())M.has(n)||(t[fe(n)]=e.getAttribute(n));return t},G=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},me=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},K=e=>({...pe(e),...G(e),...F.get(e)}),he=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},ge=e=>{let t={};return Object.defineProperty(t,b,{configurable:!0,enumerable:!0,value:he(e)}),c(t)},_e=e=>F.get(e)??{},ve=(e,t)=>{F.set(e,me(t))},ye=e=>I.get(e)??null,be=(e,t)=>{if(t){I.set(e,t);return}I.delete(e)},xe=(e,t)=>{if(t){L.set(e,t);return}L.delete(e)},Se=e=>{let t=L.get(e);t&&(t.value+=1)},Ce=e=>{let t=I.get(e);if(!t)return;let n=K(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&Se(e)},q=e=>N.get(e)??null,we=(e,t)=>{if(t){N.set(e,t);return}N.delete(e)},Te=e=>P.get(e)??null,Ee=(e,t)=>{if(t){P.set(e,t);return}P.delete(e)},De=(e,t)=>{if(se.set(e,t),R.set(e,e),R.set(t,e),t instanceof ShadowRoot){z.set(e,t),z.set(t,t);return}z.delete(e),z.delete(t)},Oe=e=>{let t=se.get(e);t&&(R.delete(e),R.delete(t),z.delete(e),z.delete(t),se.delete(e))},J=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,ke=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},Ae=(e,t,n)=>{if(ke(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},je=e=>e.type===`attributes`&&e.attributeName!=null&&M.has(e.attributeName);function Me(e,n={}){let{shadowRoot:i=!0,styles:c,configureApp:d,nonce:p}=n,m=typeof e==`function`?e:t=>{let n=typeof e.setup==`function`?E(()=>e.setup(t)):t;return typeof e.render==`function`?e.render(n):[]},h=e=>{let n=J(e,i),h=f(),g={host:e,shadowRoot:n instanceof ShadowRoot?n:null},_=ge(e),y=a(0);be(e,_),xe(e,y),Ce(e),De(e,n);let b=e=>H(g,()=>m(e)),x=ie(()=>h.vapor(()=>{let n=s(`span`);n.style.display=`contents`;let i=l(`rue:custom-element:anchor`);return r(n,i),u(()=>{y.value,t(h,()=>{o(v(b,{...ye(e)??{}}),n,i)})}),n}),h);d?.(x),we(e,x),x.mount(n),W(()=>{q(e)&&Ae(n,c,p)})},g=e=>{q(e)?.unmount(),we(e,null),be(e,null),xe(e,null),Oe(e)},_=e=>{if(typeof MutationObserver!=`function`)return;Te(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(je)||Ce(e)});t.observe(e,{attributes:!0}),Ee(e,t)};return class extends HTMLElement{constructor(){super(),ve(this,null)}get props(){return _e(this)}set props(e){ve(this,e),Ce(this)}connectedCallback(){q(this)||(h(this),_(this))}disconnectedCallback(){Te(this)?.disconnect(),Ee(this,null),g(this)}}}var Ne=j(`ref:1:0`,()=>a(0)),Pe=j(`ref:1:1`,()=>a(0)),Fe=j(`ref:1:2`,()=>a(0)),Ie=j(`ref:1:3`,()=>a(0)),Le=0,Re=0,ze=new WeakMap,Be=new WeakMap,Ve=`rue-demo-nonce`,He=`rue-shadow-console`,Ue=`rue-light-signal`,We=[`
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
  `],Ge=[`
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
  `],Ke=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},qe=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),Y=e=>e&&typeof e==`object`?e:void 0,Je=e=>Y(e.config)?.compact===!0,Ye=e=>{let t=Y(e.config)?.preset;return typeof t==`string`?t:`manual`},Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>e?Be.get(e)||(Re+=1,Ie.value+=1,Be.set(e,Re),Re):0,Qe=e=>Number(Y(e.metrics)?.events??0),X=e=>Number(Y(e.metrics)?.tags??0),$e=e=>e,et=()=>{let{host:t,shadowRoot:i,mountId:a}=j(`useSetup:0:0`,()=>E(()=>{let e=ue();return{host:e,shadowRoot:de(),mountId:Ze(e)}}));return S(o=>{let c=s(`p`,o);k(c,`lightMeta`),r(c,e(`实例 #`));let d=l(`rue:slot:anchor`);r(c,d),u(()=>{let e=a;n(()=>O(e,c,d))}),r(c,e(` · `));let f=l(`rue:slot:anchor`);r(c,f),u(()=>{let e=t?.tagName.toLowerCase()??`unknown-host`;n(()=>O(e,c,f))}),r(c,e(` ·`));let p=l(`rue:slot:anchor`);r(c,p),u(()=>{n(()=>O(` `,c,p))}),r(c,e(` `));let m=l(`rue:slot:anchor`);return r(c,m),u(()=>{let e=i?`shadow-root`:`light-dom`;n(()=>O(e,c,m))}),c})},tt=t=>{let{host:i,shadowRoot:a,emit:o,mountId:c,count:f,accent:p,panelTitle:_,tags:v,busy:b,meterWidth:x}=j(`useSetup:0:0:dup1`,()=>E(()=>{let e=ue(),n=de(),r=j(`computed:1:4`,()=>y(()=>A(t))),i=Xe(e),a=j(`computed:1:5`,()=>y(()=>Number(t.count??0))),o=a;return{host:e,shadowRoot:n,emit:r,mountId:i,count:a,accent:j(`computed:1:6`,()=>y(()=>String(t.accent??`teal`))),panelTitle:j(`computed:1:7`,()=>y(()=>String(t.panelTitle??`Shadow console`))),tags:j(`computed:1:8`,()=>y(()=>Array.isArray(t.tags)?t.tags:[])),busy:j(`computed:1:9`,()=>y(()=>t.busy===!0)),meterWidth:j(`computed:1:10`,()=>y(()=>`${Math.max(8,Math.min(o.get()*9,100))}%`))}}));return S(y=>{let C=s(`article`,y);u(()=>{k(C,`frame ${Je(t)?`compact`:``}`)}),u(()=>{m(C,`data-accent`,String(p.get()))}),u(()=>{m(C,`data-busy`,String(b.get()?`yes`:`no`))});let E=s(`header`,C);r(C,E),k(E,`hero`);let D=s(`div`,E);r(E,D);let ee=s(`p`,D);r(D,ee),k(ee,`eyebrow`),r(ee,e(`Shadow Root / Slot / CustomEvent`));let A=s(`h2`,D);r(D,A),k(A,`title`);let te=l(`rue:slot:anchor`);r(A,te),u(()=>{let e=_.get();n(()=>O(e,A,te))});let j=s(`p`,D);r(D,j),k(j,`subtitle`),r(j,e(`实例 #`));let re=l(`rue:slot:anchor`);r(j,re),u(()=>{let e=c;n(()=>O(e,j,re))}),r(j,e(` · `));let ie=g(j);r(j,ie),u(()=>{w(ie,i?.tagName.toLowerCase()??`unknown-host`)}),r(j,e(` ·`));let ae=g(j);r(j,ae),w(ae,` `),r(j,e(` `));let oe=g(j);r(j,oe),u(()=>{w(oe,a?`shadow-root 已开启`:`light-dom`)});let M=s(`div`,E);r(E,M),k(M,`actions`);let N=s(`button`,M);r(M,N),m(N,`type`,`button`),k(N,`button primary`),T(N,`click`,()=>{o.get()(`save`,{mountId:c,panelTitle:_.get(),count:f.get(),tags:v.get(),busy:b.get()},{host:i?.tagName.toLowerCase()??`unknown`,rootMode:a?`shadow`:`light`})}),r(N,e(`派发 save`));let P=s(`button`,M);r(M,P),m(P,`type`,`button`),k(P,`button`),T(P,`click`,()=>{o.get()(`pulse`,f.get()+1,p.get())}),r(P,e(`派发 pulse`));let F=s(`div`,C);r(C,F),k(F,`grid`);let I=s(`section`,F);r(F,I),k(I,`panel`);let L=s(`div`,I);r(I,L),k(L,`metricValue`);let se=l(`rue:slot:anchor`);r(L,se),u(()=>{let e=f.get();n(()=>O(e,L,se))});let R=s(`div`,I);r(I,R),k(R,`metricLabel`),r(R,e(`这个数值来自宿主上的 el.props.count`));let z=s(`div`,I);r(I,z),k(z,`meter`);let B=s(`div`,z);r(z,B),k(B,`meterFill`),u(()=>{h(B,{width:x.get()})});let V=s(`div`,I);r(I,V),k(V,`chips`);let ce=l(`rue:slot:anchor`);r(V,ce),u(()=>{let t=v.get().length?S(()=>{let e=d(),t=l(`rue:list:start`),n=l(`rue:list:end`);r(e,t),r(e,n);let i=new Map;return u(()=>{i=ne({items:v.get()||[],getKey:(e,t)=>e,elements:i,parent:t.parentNode,before:n,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,n,i,a)=>{O(S(()=>{let t=d(),n=s(`span`,t);r(t,n),u(()=>{m(n,`key`,String(e))}),k(n,`chip`);let i=g(n);return r(n,i),u(()=>{w(i,e)}),t}),t,n)}})}),e}):S(()=>{let t=d(),n=s(`span`,t);return r(t,n),k(n,`chip muted`),r(n,e(`暂无 tags`)),t});n(()=>O(t,V,ce))});let H=s(`section`,F);r(F,H),k(H,`panel`);let le=s(`p`,H);r(H,le),k(le,`slotTitle`),r(le,e(`命名 Slot`));let U=s(`slot`,H);r(H,U),m(U,`name`,`meta`);let ue=s(`div`,H);r(H,ue),h(ue,{height:`12px`});let de=s(`p`,H);r(H,de),k(de,`slotTitle`),r(de,e(`默认 Slot`)),r(H,s(`slot`,H));let W=s(`footer`,C);r(C,W),k(W,`footer`);let fe=s(`span`,W);r(W,fe),r(fe,e(`preset: `));let pe=l(`rue:slot:anchor`);r(fe,pe),u(()=>{let e=Ye(t);n(()=>O(e,fe,pe))});let G=s(`span`,W);r(W,G);let me=g(G);r(G,me),u(()=>{w(me,b.get()?`后台同步中`:`空闲`)});let K=s(`span`,W);r(W,K);let he=g(K);return r(K,he),u(()=>{w(he,Je(t)?`compact on`:`compact off`)}),C})},nt=t=>{let{emit:i,label:a,tone:o}=j(`useSetup:0:0:dup2`,()=>E(()=>({emit:j(`computed:1:11`,()=>y(()=>A(t))),label:j(`computed:1:12`,()=>y(()=>String(t.label??`Light DOM signal`))),tone:j(`computed:1:13`,()=>y(()=>String(t.tone??`teal`)))})));return S(c=>{let d=s(`div`,c);u(()=>{k(d,`lightShell tone-${o.get()}`)});let f=s(`div`,d);r(d,f);let p=s(`p`,f);r(f,p),k(p,`lightTitle`);let h=l(`rue:slot:anchor`);r(p,h),u(()=>{let e=a.get();n(()=>O(e,p,h))});let g=l(`rue:component:anchor`);r(f,g),O(ee(et,{}),f,g);let _=s(`div`,d);r(d,_),k(_,`lightValue`);let v=l(`rue:slot:anchor`);r(_,v),u(()=>{let e=Qe(t);n(()=>O(e,_,v))}),r(_,e(` events / `));let y=l(`rue:slot:anchor`);r(_,y),u(()=>{let e=X(t);n(()=>O(e,_,y))}),r(_,e(` tags`));let b=s(`button`,d);return r(d,b),m(b,`type`,`button`),k(b,`lightButton`),T(b,`click`,()=>{i.get()(`light-tap`,{label:a.get(),events:Qe(t),tags:X(t)})}),r(b,e(`emit`)),d})},Z=Me(tt,{styles:We,nonce:Ve,configureApp(){Ne.value+=1}}),rt=Me(nt,{shadowRoot:!1,styles:Ge,configureApp(){Pe.value+=1}}),it=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};it(He,Z),it(Ue,rt);var at=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),ot=()=>{let{activeTab:t,panelTitle:o,accent:c,count:f,tagInput:h,busy:v,compact:y,activePreset:b,slotNote:A,metaBadge:te,lightLabel:ie,eventLog:M,shadowNonce:N,shadowStyleCount:P,lightStyleCount:F,shadowHostRef:I,lightHostRef:L,shadowPropsPayload:se,lightPropsPayload:R,refreshDiagnostics:z,scheduleDiagnostics:B,syncShadowHost:V,syncLightHost:ce,syncHosts:H,pushEvent:le,bindCustomEvent:U,applyPreset:ue,appendTag:de,removeLastTag:W,clearTitleAttr:fe,clearEvents:pe}=j(`useSetup:0:0:dup3`,()=>E(()=>{let e=j(`ref:1:14`,()=>a(`preview`)),t=j(`ref:1:15`,()=>a(`Ops Console / Native CE`)),n=j(`ref:1:16`,()=>a(`teal`)),r=j(`ref:1:17`,()=>a(7)),o=j(`ref:1:18`,()=>a(`shadow, events, slots, props`)),s=j(`ref:1:19`,()=>a(!1)),c=j(`ref:1:20`,()=>a(!1)),l=j(`ref:1:21`,()=>a(`ops`)),u=j(`ref:1:22`,()=>a(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),d=j(`ref:1:23`,()=>a(`SLA 99.99%`)),f=j(`ref:1:24`,()=>a(`Light DOM signal`)),m=j(`ref:1:25`,()=>a([])),h=j(`ref:1:26`,()=>a(`等待挂载`)),g=j(`ref:1:27`,()=>a(0)),_=j(`ref:1:28`,()=>a(0)),v=j(`useRef:1:29`,()=>i()),y=j(`useRef:1:30`,()=>i()),b=()=>({count:r.value,tags:qe(o.value),config:{compact:c.value,preset:l.value},busy:s.value}),S=()=>({metrics:{events:m.value.length,tags:qe(o.value).length,busy:s.value}}),C=()=>{let e=v.current,t=y.current;g.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,h.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,_.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},w=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{C()})})},T=()=>{let e=v.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=b()},E=()=>{let e=y.current;if(!e)return;let t=f.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,$e(n.value)),e.props=S()},D=()=>{T(),E(),w()},O=(e,t,n)=>{m.value=[{source:e,name:t,detail:Ke(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...m.value].slice(0,8),E(),w()},k=(e,t,n)=>{if(!e)return()=>{};let r=e=>{O(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return x(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{D(),e=k(v.current,`save`,`shadow`),t=k(v.current,`pulse`,`shadow`),n=k(y.current,`light-tap`,`light`),w()}),p(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:o,busy:s,compact:c,activePreset:l,slotNote:u,metaBadge:d,lightLabel:f,eventLog:m,shadowNonce:h,shadowStyleCount:g,lightStyleCount:_,shadowHostRef:v,lightHostRef:y,shadowPropsPayload:b,lightPropsPayload:S,refreshDiagnostics:C,scheduleDiagnostics:w,syncShadowHost:T,syncLightHost:E,syncHosts:D,pushEvent:O,bindCustomEvent:k,applyPreset:e=>{l.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,o.value=`shadow, events, slots, props`,u.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,d.value=`SLA 99.99%`,f.value=`Light DOM signal`,s.value=!1,c.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,o.value=`checkout, fulfillment, analytics, queue`,u.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,d.value=`AOV +18%`,f.value=`Revenue pulse`,s.value=!1,c.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,o.value=`incident, pager, bridge, rollback`,u.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,d.value=`P1 ongoing`,f.value=`War-room heartbeat`,s.value=!0,c.value=!1),D()},appendTag:()=>{let e=qe(o.value);e.push(`tag-${e.length+1}`),o.value=e.join(`, `),D()},removeLastTag:()=>{let e=qe(o.value);e.pop(),o.value=e.join(`, `),D()},clearTitleAttr:()=>{t.value=``,D()},clearEvents:()=>{m.value=[],E(),w()}}}));return S(i=>{let a=d(),p=l(`rue:component:anchor`);return r(a,p),O(ee(oe,{children:S(()=>{let i=d(),a=s(`h1`,i);r(i,a),k(a,`text-5xl font-semibold mb-4 md:mb-4`),r(a,e(`原生 Web Components`));let p=s(`p`,i);r(i,p),k(p,`text-base-content/70 max-w-4xl leading-7`),r(p,e(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let x=s(`div`,i);r(i,x),m(x,`role`,`tablist`),k(x,`tabs tabs-box mt-4`);let E=s(`button`,x);r(x,E),m(E,`role`,`tab`),u(()=>{k(E,`tab ${t.value===`preview`?`tab-active`:``}`)}),T(E,`click`,()=>{t.value=`preview`}),r(E,e(`效果`));let j=s(`button`,x);r(x,j),m(j,`role`,`tab`),u(()=>{k(j,`tab ${t.value===`code`?`tab-active`:``}`)}),T(j,`click`,()=>{t.value=`code`}),r(j,e(`代码`));let oe=s(`div`,i);r(i,oe),u(()=>{k(oe,t.value===`preview`?`mt-4 space-y-6`:`hidden`)});let z=s(`div`,oe);r(oe,z),k(z,`grid gap-6 items-start`);let le=s(`div`,z);r(z,le),k(le,`card bg-base-100 shadow-xl border border-base-300`);let U=s(`div`,le);r(le,U),k(U,`card-body gap-5`);let G=s(`div`,U);r(U,G);let me=s(`p`,G);r(G,me),k(me,`text-xs uppercase tracking-[0.28em] text-base-content/45`),r(me,e(`Preset`));let K=s(`div`,G);r(G,K),k(K,`mt-3 flex w-full gap-2`);let he=l(`rue:list:start`),ge=l(`rue:list:end`);r(K,he),r(K,ge);let _e=new Map;u(()=>{_e=ne({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:_e,parent:K,before:ge,singleRoot:!0,trackIndex:!1,start:he,renderItem:(e,t,n,i,a)=>{O(S(()=>{let t=d(),n=s(`button`,t);r(t,n),u(()=>{m(n,`key`,String(e))}),u(()=>{k(n,`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${b.value===e?`btn-primary`:`btn-outline`}`)}),T(n,`click`,()=>ue(e));let i=g(n);return r(n,i),u(()=>{w(i,e)}),t}),t,n)}})});let ve=s(`label`,U);r(U,ve),k(ve,`floating-label`);let ye=s(`input`,ve);r(ve,ye),k(ye,`input input-bordered w-full`),u(()=>{_(ye,o.value)}),T(ye,`input`,e=>{o.value=e.target.value,V(),B()});let be=s(`span`,ve);r(ve,be),r(be,e(`panel-title attribute`));let xe=s(`label`,U);r(U,xe),k(xe,`floating-label`);let Se=s(`input`,xe);r(xe,Se),k(Se,`input input-bordered w-full`),u(()=>{_(Se,h.value)}),T(Se,`input`,e=>{h.value=e.target.value,H()});let Ce=s(`span`,xe);r(xe,Ce),r(Ce,e(`host.props.tags（逗号分隔）`));let q=s(`label`,U);r(U,q),k(q,`floating-label`);let we=s(`input`,q);r(q,we),k(we,`input input-bordered w-full`),u(()=>{_(we,A.value)}),T(we,`input`,e=>{A.value=e.target.value});let Te=s(`span`,q);r(q,Te),r(Te,e(`默认 slot 文案`));let Ee=s(`div`,U);r(U,Ee),k(Ee,`grid gap-3 sm:grid-cols-2`);let De=s(`fieldset`,Ee);r(Ee,De),k(De,`fieldset`);let Oe=s(`legend`,De);r(De,Oe),k(Oe,`fieldset-legend`),r(Oe,e(`accent attribute`));let J=s(`select`,De);r(De,J),k(J,`select select-bordered`),u(()=>{_(J,c.value)}),T(J,`change`,e=>{c.value=e.target.value,H()});let ke=s(`option`,J);r(J,ke),m(ke,`value`,`teal`),r(ke,e(`teal`));let Ae=s(`option`,J);r(J,Ae),m(Ae,`value`,`amber`),r(Ae,e(`amber`));let je=s(`option`,J);r(J,je),m(je,`value`,`rose`),r(je,e(`rose`));let Me=s(`fieldset`,Ee);r(Ee,Me),k(Me,`fieldset`);let Le=s(`legend`,Me);r(Me,Le),k(Le,`fieldset-legend`),r(Le,e(`light label attribute`));let Re=s(`input`,Me);r(Me,Re),k(Re,`input input-bordered`),u(()=>{_(Re,ie.value)}),T(Re,`input`,e=>{ie.value=e.target.value,ce(),B()});let ze=s(`div`,U);r(U,ze);let Be=s(`div`,ze);r(ze,Be),k(Be,`flex items-center justify-between text-sm mb-2`);let Ve=s(`span`,Be);r(Be,Ve),r(Ve,e(`host.props.count`));let He=s(`span`,Be);r(Be,He),k(He,`font-semibold`);let Ue=g(He);r(He,Ue),u(()=>{w(Ue,f.value)});let We=s(`input`,ze);r(ze,We),m(We,`type`,`range`),m(We,`min`,`1`),m(We,`max`,`15`),u(()=>{_(We,f.value)}),k(We,`range range-primary`),T(We,`input`,e=>{f.value=Number(e.target.value),V(),B()});let Ge=s(`div`,U);r(U,Ge),k(Ge,`grid gap-3 sm:grid-cols-2`);let Y=s(`label`,Ge);r(Ge,Y),k(Y,`label cursor-pointer justify-start gap-3`);let Je=s(`input`,Y);r(Y,Je),m(Je,`type`,`checkbox`),k(Je,`toggle toggle-primary`),u(()=>{C(Je,!!v.value)}),T(Je,`change`,e=>{v.value=e.target.checked,H()});let Ye=s(`span`,Y);r(Y,Ye),k(Ye,`label-text`),r(Ye,e(`host.props.busy`));let Xe=s(`label`,Ge);r(Ge,Xe),k(Xe,`label cursor-pointer justify-start gap-3`);let Ze=s(`input`,Xe);r(Xe,Ze),m(Ze,`type`,`checkbox`),k(Ze,`toggle toggle-secondary`),u(()=>{C(Ze,!!y.value)}),T(Ze,`change`,e=>{y.value=e.target.checked,V(),B()});let Qe=s(`span`,Xe);r(Xe,Qe),k(Qe,`label-text`),r(Qe,e(`host.props.config.compact`));let X=s(`div`,U);r(U,X),k(X,`grid gap-2 sm:grid-cols-2`);let $e=s(`button`,X);r(X,$e),k($e,`btn btn-primary`),T($e,`click`,de),r($e,e(`追加 tag`));let et=s(`button`,X);r(X,et),k(et,`btn btn-outline`),T(et,`click`,W),r(et,e(`删除最后一个 tag`));let tt=s(`button`,X);r(X,tt),k(tt,`btn btn-secondary`),T(tt,`click`,()=>{f.value+=2,V(),B()}),r(tt,e(`count + 2`));let nt=s(`button`,X);r(X,nt),k(nt,`btn btn-ghost`),T(nt,`click`,fe),r(nt,e(`移除 title attribute`));let Z=s(`div`,z);r(z,Z),k(Z,`space-y-6`);let rt=s(`div`,Z);r(Z,rt),k(rt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let it=s(`div`,rt);r(rt,it),k(it,`card-body gap-5`);let ot=s(`div`,it);r(it,ot),k(ot,`flex flex-wrap items-center justify-between gap-4`);let st=s(`div`,ot);r(ot,st);let ct=s(`p`,st);r(st,ct),k(ct,`text-xs uppercase tracking-[0.28em] text-base-content/45`),r(ct,e(`Live Preview`));let lt=s(`h2`,st);r(st,lt),k(lt,`text-2xl font-semibold mt-2`),r(lt,e(`Shadow + Light 双宿主联动`));let Q=s(`div`,ot);r(ot,Q),k(Q,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=s(`div`,Q);r(Q,ut),k(ut,`stat py-3 px-4`);let dt=s(`div`,ut);r(ut,dt),k(dt,`stat-title`),r(dt,e(`shadow configureApp`));let ft=s(`div`,ut);r(ut,ft),k(ft,`stat-value text-lg`);let pt=g(ft);r(ft,pt),u(()=>{w(pt,Ne.value)});let mt=s(`div`,Q);r(Q,mt),k(mt,`stat py-3 px-4`);let ht=s(`div`,mt);r(mt,ht),k(ht,`stat-title`),r(ht,e(`light configureApp`));let gt=s(`div`,mt);r(mt,gt),k(gt,`stat-value text-lg`);let _t=g(gt);r(gt,_t),u(()=>{w(_t,Pe.value)});let vt=s(`div`,Q);r(Q,vt),k(vt,`stat py-3 px-4`);let yt=s(`div`,vt);r(vt,yt),k(yt,`stat-title`),r(yt,e(`mounted instances`));let bt=s(`div`,vt);r(vt,bt),k(bt,`stat-value text-lg`);let xt=g(bt);r(bt,xt),u(()=>{w(xt,Fe.value+Ie.value)});let St=s(`div`,it);r(it,St),k(St,`space-y-4`);let Ct=s(`rue-shadow-console`,St);r(St,Ct);let wt=re(Ct,()=>I);D(()=>{wt()});let Tt=s(`div`,Ct);r(Ct,Tt),m(Tt,`slot`,`meta`);let Et=s(`span`,Tt);r(Tt,Et),k(Et,`status status-success`);let Dt=s(`span`,Tt);r(Tt,Dt);let Ot=g(Dt);r(Dt,Ot),u(()=>{w(Ot,te.value)});let kt=s(`div`,Ct);r(Ct,kt),k(kt,`space-y-3 text-sm text-base-content/80`);let At=s(`p`,kt);r(kt,At);let jt=g(At);r(At,jt),u(()=>{w(jt,A.value)});let Mt=s(`div`,kt);r(kt,Mt),k(Mt,`flex flex-wrap gap-2`);let Nt=l(`rue:list:start`),Pt=l(`rue:list:end`);r(Mt,Nt),r(Mt,Pt);let Ft=new Map;u(()=>{Ft=ne({items:qe(h.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(e,t,n,i,a)=>{O(S(()=>{let t=d(),n=s(`span`,t);r(t,n),u(()=>{m(n,`key`,String(e))}),k(n,`badge badge-outline`);let i=g(n);return r(n,i),u(()=>{w(i,e)}),t}),t,n)}})});let It=s(`rue-light-signal`,St);r(St,It);let Lt=re(It,()=>L);D(()=>{Lt()});let Rt=s(`div`,Z);r(Z,Rt),k(Rt,`grid gap-6`);let zt=s(`div`,Rt);r(Rt,zt),k(zt,`card bg-base-100 shadow border border-base-300`);let Bt=s(`div`,zt);r(zt,Bt),k(Bt,`card-body gap-4`);let Vt=s(`div`,Bt);r(Bt,Vt),k(Vt,`flex items-center justify-between gap-3`);let Ht=s(`h3`,Vt);r(Vt,Ht),k(Ht,`card-title text-lg`),r(Ht,e(`运行时诊断`));let Ut=s(`span`,Vt);r(Vt,Ut),k(Ut,`badge badge-primary badge-outline`),r(Ut,e(`nonce / styles / mode`));let $=s(`ul`,Bt);r(Bt,$),k($,`list bg-base-100 rounded-box`);let Wt=s(`li`,$);r($,Wt),k(Wt,`list-row`);let Gt=s(`div`,Wt);r(Wt,Gt),k(Gt,`font-medium`),r(Gt,e(`shadow style tags`));let Kt=s(`div`,Wt);r(Wt,Kt),k(Kt,`text-right`);let qt=g(Kt);r(Kt,qt),u(()=>{w(qt,P.value)});let Jt=s(`li`,$);r($,Jt),k(Jt,`list-row`);let Yt=s(`div`,Jt);r(Jt,Yt),k(Yt,`font-medium`),r(Yt,e(`shadow nonce`));let Xt=s(`div`,Jt);r(Jt,Xt),k(Xt,`text-right break-all`);let Zt=g(Xt);r(Xt,Zt),u(()=>{w(Zt,N.value)});let Qt=s(`li`,$);r($,Qt),k(Qt,`list-row`);let $t=s(`div`,Qt);r(Qt,$t),k($t,`font-medium`),r($t,e(`light style tags`));let en=s(`div`,Qt);r(Qt,en),k(en,`text-right`);let tn=g(en);r(en,tn),u(()=>{w(tn,F.value)});let nn=s(`li`,$);r($,nn),k(nn,`list-row`);let rn=s(`div`,nn);r(nn,rn),k(rn,`font-medium`),r(rn,e(`hook 期望`));let an=s(`div`,nn);r(nn,an),k(an,`text-right`),r(an,e(`shadow / light`));let on=s(`div`,Rt);r(Rt,on),k(on,`card bg-base-100 shadow border border-base-300`);let sn=s(`div`,on);r(on,sn),k(sn,`card-body gap-4`);let cn=s(`div`,sn);r(sn,cn),k(cn,`flex items-center justify-between gap-3`);let ln=s(`h3`,cn);r(cn,ln),k(ln,`card-title text-lg`),r(ln,e(`事件桥接日志`));let un=s(`button`,cn);r(cn,un),k(un,`btn btn-sm btn-ghost`),T(un,`click`,pe),r(un,e(`清空`));let dn=s(`div`,sn);r(sn,dn),k(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=l(`rue:slot:anchor`);r(dn,fn),u(()=>{let t=M.value.length?S(()=>{let e=d(),t=l(`rue:list:start`),i=l(`rue:list:end`);r(e,t),r(e,i);let a=new Map;return u(()=>{a=ne({items:M.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:a,parent:t.parentNode,before:i,singleRoot:!0,start:t,renderItem:(e,t,i,a,o)=>{O(S(()=>{let t=d(),i=s(`div`,t);r(t,i),u(()=>{m(i,`key`,String(`${e.name}-${e.at}-${o}`))}),k(i,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let a=s(`div`,i);r(i,a),k(a,`flex items-center justify-between gap-3 text-sm`);let c=s(`div`,a);r(a,c),k(c,`flex items-center gap-2`);let f=s(`span`,c);r(c,f),u(()=>{k(f,`badge ${e.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`)});let p=l(`rue:slot:anchor`);r(f,p),u(()=>{let t=e.source;n(()=>O(t,f,p))});let h=s(`span`,c);r(c,h),k(h,`font-medium`);let g=l(`rue:slot:anchor`);r(h,g),u(()=>{let t=e.name;n(()=>O(t,h,g))});let _=s(`span`,a);r(a,_),k(_,`text-base-content/50`);let v=l(`rue:slot:anchor`);r(_,v),u(()=>{let t=e.at;n(()=>O(t,_,v))});let y=s(`pre`,i);r(i,y),k(y,`mt-2 text-xs whitespace-pre-wrap break-words`);let b=l(`rue:slot:anchor`);return r(y,b),u(()=>{let t=e.detail;n(()=>O(t,y,b))}),t}),t,i)}})}),e}):S(()=>{let t=d(),n=s(`div`,t);r(t,n),k(n,`alert alert-soft`);let i=s(`span`,n);return r(n,i),r(i,e(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),t});n(()=>O(t,dn,fn))});let pn=s(`div`,Z);r(Z,pn),k(pn,`grid gap-6`);let mn=s(`div`,pn);r(pn,mn),k(mn,`card bg-base-100 shadow border border-base-300`);let hn=s(`div`,mn);r(mn,hn),k(hn,`card-body gap-3`);let gn=s(`h3`,hn);r(hn,gn),k(gn,`card-title text-lg`),r(gn,e(`shadow host.props 快照`));let _n=s(`pre`,hn);r(hn,_n),k(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=l(`rue:slot:anchor`);r(_n,vn),u(()=>{let e=Ke(se());n(()=>O(e,_n,vn))});let yn=s(`div`,pn);r(pn,yn),k(yn,`card bg-base-100 shadow border border-base-300`);let bn=s(`div`,yn);r(yn,bn),k(bn,`card-body gap-3`);let xn=s(`h3`,bn);r(bn,xn),k(xn,`card-title text-lg`),r(xn,e(`light host.props 快照`));let Sn=s(`pre`,bn);r(bn,Sn),k(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=l(`rue:slot:anchor`);r(Sn,Cn),u(()=>{let e=Ke(R());n(()=>O(e,Sn,Cn))});let wn=s(`div`,i);r(i,wn),u(()=>{k(wn,t.value===`code`?`mt-4`:`hidden`)});let Tn=s(`div`,wn);r(wn,Tn),k(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=s(`div`,Tn);r(Tn,En),k(En,`card-body p-0`);let Dn=l(`rue:component:anchor`);return r(En,Dn),u(()=>{let e=ee(ae,{className:`h-full`,lang:`tsx`,code:at});n(()=>O(e,En,Dn))}),i})}),a,p),a})};export{ot as default};
import{A as e,D as t,F as n,H as r,I as i,J as a,L as o,N as s,P as c,Q as l,U as u,W as d,Y as f,c as p,f as m,h,i as g,it as _,j as v,l as y,lt as b,m as x,o as S,p as ee,pt as C,q as w,rt as T,s as E,t as D,u as O,ut as k,w as te}from"./vapor-runtime-BZZbPG7x.js";import{a as A,n as ne,t as re}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as ie}from"./useApp-DxckY8g0.js";import{t as ae}from"./Code-C8wy38VS.js";import{t as oe}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var j=new Set([`data-rue-app`]),M=new WeakMap,N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,se=new WeakMap,L=new WeakMap,R=new WeakMap,z=[],B=null,V=()=>z.length>0?z[z.length-1]:B,H=(e,t)=>{B=e,z.push(e);try{return t()}finally{z.pop()}},U=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return L.get(e)??null},ce=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return R.get(e)??null},W=()=>{let e=V();return e?e.host:U(h())},le=()=>{let e=V();return e?e.shadowRoot:ce(h())},G=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},ue=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),de=e=>{let t={};for(let n of e.getAttributeNames())j.has(n)||(t[ue(n)]=e.getAttribute(n));return t},fe=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},pe=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},K=e=>({...de(e),...fe(e),...P.get(e)}),q=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},me=e=>{let t={};return Object.defineProperty(t,l,{configurable:!0,enumerable:!0,value:q(e)}),_(t)},he=e=>P.get(e)??{},ge=(e,t)=>{P.set(e,pe(t))},_e=e=>F.get(e)??null,ve=(e,t)=>{if(t){F.set(e,t);return}F.delete(e)},ye=(e,t)=>{if(t){I.set(e,t);return}I.delete(e)},be=e=>{let t=I.get(e);t&&(t.value+=1)},J=e=>{let t=F.get(e);if(!t)return;let n=K(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&be(e)},xe=e=>M.get(e)??null,Se=(e,t)=>{if(t){M.set(e,t);return}M.delete(e)},Ce=e=>N.get(e)??null,we=(e,t)=>{if(t){N.set(e,t);return}N.delete(e)},Te=(e,t)=>{if(se.set(e,t),L.set(e,e),L.set(t,e),t instanceof ShadowRoot){R.set(e,t),R.set(t,t);return}R.delete(e),R.delete(t)},Ee=e=>{let t=se.get(e);t&&(L.delete(e),L.delete(t),R.delete(e),R.delete(t),se.delete(e))},De=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Y=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},Oe=(e,t,n)=>{if(Y(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},ke=e=>e.type===`attributes`&&e.attributeName!=null&&j.has(e.attributeName);function Ae(e,r={}){let{shadowRoot:i=!0,styles:a,configureApp:o,nonce:c}=r,l=typeof e==`function`?e:t=>{let n=typeof e.setup==`function`?k(()=>e.setup(t)):t;return typeof e.render==`function`?e.render(n):[]},u=e=>{let r=De(e,i),u=ee(),d={host:e,shadowRoot:r instanceof ShadowRoot?r:null},f=me(e),p=T(0);ve(e,f),ye(e,p),J(e),Te(e,r);let h=e=>H(d,()=>l(e)),g=ie(()=>u.vapor(()=>{let r=n(`span`);r.style.display=`contents`;let i=s(`rue:custom-element:anchor`);return v(r,i),C(()=>{p.value,t(u,()=>{te(m(h,_e(e)??{}),r,i)})}),r}),u);o?.(g),Se(e,g),g.mount(r),G(()=>{xe(e)&&Oe(r,a,c)})},d=e=>{xe(e)?.unmount(),Se(e,null),ve(e,null),ye(e,null),Ee(e)},f=e=>{if(typeof MutationObserver!=`function`)return;Ce(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(ke)||J(e)});t.observe(e,{attributes:!0}),we(e,t)};return class extends HTMLElement{constructor(){super(),ge(this,null)}get props(){return he(this)}set props(e){ge(this,e),J(this)}connectedCallback(){xe(this)||(u(this),f(this))}disconnectedCallback(){Ce(this)?.disconnect(),we(this,null),d(this)}}}var je=A(`ref:1:0`,()=>T(0)),Me=A(`ref:1:1`,()=>T(0)),Ne=A(`ref:1:2`,()=>T(0)),Pe=A(`ref:1:3`,()=>T(0)),X=0,Fe=0,Ie=new WeakMap,Le=new WeakMap,Re=`rue-demo-nonce`,ze=`rue-shadow-console`,Be=`rue-light-signal`,Ve=[`
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
  `],Z=[`
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
  `],He=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ue=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),Q=e=>e&&typeof e==`object`?e:void 0,We=e=>Q(e.config)?.compact===!0,Ge=e=>{let t=Q(e.config)?.preset;return typeof t==`string`?t:`manual`},Ke=e=>e?Ie.get(e)||(X+=1,Ne.value+=1,Ie.set(e,X),X):0,qe=e=>e?Le.get(e)||(Fe+=1,Pe.value+=1,Le.set(e,Fe),Fe):0,$=e=>Number(Q(e.metrics)?.events??0),Je=e=>Number(Q(e.metrics)?.tags??0),Ye=e=>e,Xe=()=>{let{host:e,shadowRoot:t,mountId:r}=A(`useSetup:0:0`,()=>k(()=>{let e=W();return{host:e,shadowRoot:le(),mountId:qe(e)}}));return O(()=>{let a=n(`p`);d(a,`lightMeta`),v(a,i(`实例 #`));let o=s(`rue:slot:anchor`);v(a,o),C(()=>{p(r,a,o)}),v(a,i(` · `));let c=s(`rue:slot:anchor`);v(a,c),C(()=>{p(e?.tagName.toLowerCase()??`unknown-host`,a,c)}),v(a,i(` ·`));let l=s(`rue:slot:anchor`);v(a,l),C(()=>{p(` `,a,l)}),v(a,i(` `));let u=s(`rue:slot:anchor`);return v(a,u),C(()=>{p(t?`shadow-root`:`light-dom`,a,u)}),a})},Ze=t=>{let{host:a,shadowRoot:l,mountId:u}=A(`useSetup:0:0`,()=>k(()=>{let e=W();return{host:e,shadowRoot:le(),mountId:Ke(e)}})),m=x(t),h=Number(t.count??0),g=String(t.accent??`teal`),_=String(t.panelTitle??`Shadow console`),b=Array.isArray(t.tags)?t.tags:[],S=t.busy===!0,ee=`${Math.max(8,Math.min(h*9,100))}%`;return O(()=>{let x=n(`article`);C(()=>{d(x,String(`frame ${We(t)?`compact`:``}`))}),C(()=>{r(x,`data-accent`,String(g))}),C(()=>{r(x,`data-busy`,String(S?`yes`:`no`))});let T=n(`header`);v(x,T),d(T,`hero`);let E=n(`div`);v(T,E);let D=n(`p`);v(E,D),d(D,`eyebrow`),v(D,i(`Shadow Root / Slot / CustomEvent`));let k=n(`h2`);v(E,k),d(k,`title`);let te=o(k);v(k,te),C(()=>{f(te,_)});let A=n(`p`);v(E,A),d(A,`subtitle`),v(A,i(`实例 #`));let re=o(A);v(A,re),C(()=>{f(re,u)}),v(A,i(` · `));let ie=o(A);v(A,ie),C(()=>{f(ie,a?.tagName.toLowerCase()??`unknown-host`)}),v(A,i(` ·`));let ae=o(A);v(A,ae),f(ae,` `),v(A,i(` `));let oe=o(A);v(A,oe),C(()=>{f(oe,l?`shadow-root 已开启`:`light-dom`)});let j=n(`div`);v(T,j),d(j,`actions`);let M=n(`button`);v(j,M),r(M,`type`,`button`),d(M,`button primary`),e(M,`click`,()=>{m(`save`,{mountId:u,panelTitle:_,count:h,tags:b,busy:S},{host:a?.tagName.toLowerCase()??`unknown`,rootMode:l?`shadow`:`light`})}),v(M,i(`派发 save`));let N=n(`button`);v(j,N),r(N,`type`,`button`),d(N,`button`),e(N,`click`,()=>{m(`pulse`,h+1,g)}),v(N,i(`派发 pulse`));let P=n(`div`);v(x,P),d(P,`grid`);let F=n(`section`);v(P,F),d(F,`panel`);let I=n(`div`);v(F,I),d(I,`metricValue`);let se=o(I);v(I,se),C(()=>{f(se,h)});let L=n(`div`);v(F,L),d(L,`metricLabel`),v(L,i(`这个数值来自宿主上的 el.props.count`));let R=n(`div`);v(F,R),d(R,`meter`);let z=n(`div`);v(R,z),d(z,`meterFill`),C(()=>{w(z,{width:ee})});let B=n(`div`);v(F,B),d(B,`chips`);let V=s(`rue:slot:anchor`);v(B,V),C(()=>{p(b.length?O(()=>{let e=c(),t=s(`rue:list:start`),i=s(`rue:list:end`);v(e,t),v(e,i);let a=new Map;return C(()=>{a=ne({items:b||[],getKey:(e,t)=>e,elements:a,parent:t.parentNode,before:i,start:t,renderItem:(e,t,i,a,o)=>{y(O(()=>{let t=n(`span`);C(()=>{r(t,`key`,String(e))}),d(t,`chip`);let i=s(`rue:slot:anchor`);return v(t,i),C(()=>{p(e,t,i)}),t}),t,i,a)}})}),e}):O(()=>{let e=c(),t=n(`span`);return v(e,t),d(t,`chip muted`),v(t,i(`暂无 tags`)),e}),B,V)});let H=n(`section`);v(P,H),d(H,`panel`);let U=n(`p`);v(H,U),d(U,`slotTitle`),v(U,i(`命名 Slot`));let ce=n(`slot`);v(H,ce),r(ce,`name`,`meta`);let W=n(`div`);v(H,W),w(W,{height:`12px`});let le=n(`p`);v(H,le),d(le,`slotTitle`),v(le,i(`默认 Slot`)),v(H,n(`slot`));let G=n(`footer`);v(x,G),d(G,`footer`);let ue=n(`span`);v(G,ue),v(ue,i(`preset: `));let de=o(ue);v(ue,de),C(()=>{f(de,Ge(t))});let fe=n(`span`);v(G,fe);let pe=o(fe);v(fe,pe),C(()=>{f(pe,S?`后台同步中`:`空闲`)});let K=n(`span`);v(G,K);let q=o(K);return v(K,q),C(()=>{f(q,We(t)?`compact on`:`compact off`)}),x})},Qe=t=>{let a=x(t),c=String(t.label??`Light DOM signal`),l=String(t.tone??`teal`);return O(()=>{let u=n(`div`);C(()=>{d(u,String(`lightShell tone-${l}`))});let m=n(`div`);v(u,m);let h=n(`p`);v(m,h),d(h,`lightTitle`);let g=o(h);v(h,g),C(()=>{f(g,c)});let _=s(`rue:component:anchor`);v(m,_),p(D(Xe,{}),m,_);let y=n(`div`);v(u,y),d(y,`lightValue`);let b=o(y);v(y,b),C(()=>{f(b,$(t))}),v(y,i(` events / `));let x=o(y);v(y,x),C(()=>{f(x,Je(t))}),v(y,i(` tags`));let S=n(`button`);return v(u,S),r(S,`type`,`button`),d(S,`lightButton`),e(S,`click`,()=>{a(`light-tap`,{label:c,events:$(t),tags:Je(t)})}),v(S,i(`emit`)),u})},$e=Ae(Ze,{styles:Ve,nonce:Re,configureApp(){je.value+=1}}),et=Ae(Qe,{shadowRoot:!1,styles:Z,configureApp(){Me.value+=1}}),tt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};tt(ze,$e),tt(Be,et);var nt=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),rt=()=>{let{activeTab:t,panelTitle:l,accent:m,count:h,tagInput:_,busy:x,compact:ee,activePreset:w,slotNote:te,metaBadge:ie,lightLabel:j,eventLog:M,shadowNonce:N,shadowStyleCount:P,lightStyleCount:F,shadowHostRef:I,lightHostRef:se,shadowPropsPayload:L,lightPropsPayload:R,refreshDiagnostics:z,scheduleDiagnostics:B,syncShadowHost:V,syncLightHost:H,syncHosts:U,pushEvent:ce,bindCustomEvent:W,applyPreset:le,appendTag:G,removeLastTag:ue,clearTitleAttr:de,clearEvents:fe}=A(`useSetup:0:0`,()=>k(()=>{let e=A(`ref:1:4`,()=>T(`preview`)),t=A(`ref:1:5`,()=>T(`Ops Console / Native CE`)),n=A(`ref:1:6`,()=>T(`teal`)),r=A(`ref:1:7`,()=>T(7)),i=A(`ref:1:8`,()=>T(`shadow, events, slots, props`)),a=A(`ref:1:9`,()=>T(!1)),o=A(`ref:1:10`,()=>T(!1)),s=A(`ref:1:11`,()=>T(`ops`)),c=A(`ref:1:12`,()=>T(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),l=A(`ref:1:13`,()=>T(`SLA 99.99%`)),u=A(`ref:1:14`,()=>T(`Light DOM signal`)),d=A(`ref:1:15`,()=>T([])),f=A(`ref:1:16`,()=>T(`等待挂载`)),p=A(`ref:1:17`,()=>T(0)),m=A(`ref:1:18`,()=>T(0)),h=A(`useRef:1:19`,()=>b()),g=A(`useRef:1:20`,()=>b()),_=()=>({count:r.value,tags:Ue(i.value),config:{compact:o.value,preset:s.value},busy:a.value}),v=()=>({metrics:{events:d.value.length,tags:Ue(i.value).length,busy:a.value}}),y=()=>{let e=h.current,t=g.current;p.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,f.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,m.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},x=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{y()})})},ee=()=>{let e=h.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=_()},C=()=>{let e=g.current;if(!e)return;let t=u.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Ye(n.value)),e.props=v()},w=()=>{ee(),C(),x()},D=(e,t,n)=>{d.value=[{source:e,name:t,detail:He(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...d.value].slice(0,8),C(),x()},O=(e,t,n)=>{if(!e)return()=>{};let r=e=>{D(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return S(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{w(),e=O(h.current,`save`,`shadow`),t=O(h.current,`pulse`,`shadow`),n=O(g.current,`light-tap`,`light`),x()}),E(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:i,busy:a,compact:o,activePreset:s,slotNote:c,metaBadge:l,lightLabel:u,eventLog:d,shadowNonce:f,shadowStyleCount:p,lightStyleCount:m,shadowHostRef:h,lightHostRef:g,shadowPropsPayload:_,lightPropsPayload:v,refreshDiagnostics:y,scheduleDiagnostics:x,syncShadowHost:ee,syncLightHost:C,syncHosts:w,pushEvent:D,bindCustomEvent:O,applyPreset:e=>{s.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,i.value=`shadow, events, slots, props`,c.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,l.value=`SLA 99.99%`,u.value=`Light DOM signal`,a.value=!1,o.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,i.value=`checkout, fulfillment, analytics, queue`,c.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,l.value=`AOV +18%`,u.value=`Revenue pulse`,a.value=!1,o.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,i.value=`incident, pager, bridge, rollback`,c.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,l.value=`P1 ongoing`,u.value=`War-room heartbeat`,a.value=!0,o.value=!1),w()},appendTag:()=>{let e=Ue(i.value);e.push(`tag-${e.length+1}`),i.value=e.join(`, `),w()},removeLastTag:()=>{let e=Ue(i.value);e.pop(),i.value=e.join(`, `),w()},clearTitleAttr:()=>{t.value=``,w()},clearEvents:()=>{d.value=[],C(),x()}}}));return O(()=>{let b=c(),S=s(`rue:component:anchor`);return v(b,S),p(D(oe,{children:O(()=>{let b=c(),S=n(`h1`);v(b,S),d(S,`text-5xl font-semibold mb-4 md:mb-4`),v(S,i(`原生 Web Components`));let T=n(`p`);v(b,T),d(T,`text-base-content/70 max-w-4xl leading-7`),v(T,i(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let E=n(`div`);v(b,E),r(E,`role`,`tablist`),d(E,`tabs tabs-box mt-4`);let k=n(`button`);v(E,k),r(k,`role`,`tab`),C(()=>{d(k,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),e(k,`click`,()=>{t.value=`preview`}),v(k,i(`效果`));let A=n(`button`);v(E,A),r(A,`role`,`tab`),C(()=>{d(A,String(`tab ${t.value===`code`?`tab-active`:``}`))}),e(A,`click`,()=>{t.value=`code`}),v(A,i(`代码`));let oe=n(`div`);v(b,oe),C(()=>{d(oe,String(t.value===`preview`?`mt-4 space-y-6`:`hidden`))});let z=n(`div`);v(oe,z),d(z,`grid gap-6 items-start`);let ce=n(`div`);v(z,ce),d(ce,`card bg-base-100 shadow-xl border border-base-300`);let W=n(`div`);v(ce,W),d(W,`card-body gap-5`);let pe=n(`div`);v(W,pe);let K=n(`p`);v(pe,K),d(K,`text-xs uppercase tracking-[0.28em] text-base-content/45`),v(K,i(`Preset`));let q=n(`div`);v(pe,q),d(q,`mt-3 flex w-full gap-2`);let me=s(`rue:list:start`),he=s(`rue:list:end`);v(q,me),v(q,he);let ge=new Map;C(()=>{ge=ne({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ge,parent:q,before:he,singleRoot:!0,start:me,renderItem:(t,i,a,s,l)=>{p(O(()=>{let i=c(),a=n(`button`);v(i,a),C(()=>{r(a,`key`,String(t))}),C(()=>{d(a,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${w.value===t?`btn-primary`:`btn-outline`}`))}),e(a,`click`,()=>le(t));let s=o(a);return v(a,s),C(()=>{f(s,t)}),i}),i,a)}})});let _e=n(`label`);v(W,_e),d(_e,`floating-label`);let ve=n(`input`);v(_e,ve),d(ve,`input input-bordered w-full`),C(()=>{a(ve,l.value)}),e(ve,`input`,e=>{l.value=e.target.value,V(),B()});let ye=n(`span`);v(_e,ye),v(ye,i(`panel-title attribute`));let be=n(`label`);v(W,be),d(be,`floating-label`);let J=n(`input`);v(be,J),d(J,`input input-bordered w-full`),C(()=>{a(J,_.value)}),e(J,`input`,e=>{_.value=e.target.value,U()});let xe=n(`span`);v(be,xe),v(xe,i(`host.props.tags（逗号分隔）`));let Se=n(`label`);v(W,Se),d(Se,`floating-label`);let Ce=n(`input`);v(Se,Ce),d(Ce,`input input-bordered w-full`),C(()=>{a(Ce,te.value)}),e(Ce,`input`,e=>{te.value=e.target.value});let we=n(`span`);v(Se,we),v(we,i(`默认 slot 文案`));let Te=n(`div`);v(W,Te),d(Te,`grid gap-3 sm:grid-cols-2`);let Ee=n(`fieldset`);v(Te,Ee),d(Ee,`fieldset`);let De=n(`legend`);v(Ee,De),d(De,`fieldset-legend`),v(De,i(`accent attribute`));let Y=n(`select`);v(Ee,Y),d(Y,`select select-bordered`),C(()=>{a(Y,m.value)}),e(Y,`change`,e=>{m.value=e.target.value,U()});let Oe=n(`option`);v(Y,Oe),r(Oe,`value`,`teal`),v(Oe,i(`teal`));let ke=n(`option`);v(Y,ke),r(ke,`value`,`amber`),v(ke,i(`amber`));let Ae=n(`option`);v(Y,Ae),r(Ae,`value`,`rose`),v(Ae,i(`rose`));let X=n(`fieldset`);v(Te,X),d(X,`fieldset`);let Fe=n(`legend`);v(X,Fe),d(Fe,`fieldset-legend`),v(Fe,i(`light label attribute`));let Ie=n(`input`);v(X,Ie),d(Ie,`input input-bordered`),C(()=>{a(Ie,j.value)}),e(Ie,`input`,e=>{j.value=e.target.value,H(),B()});let Le=n(`div`);v(W,Le);let Re=n(`div`);v(Le,Re),d(Re,`flex items-center justify-between text-sm mb-2`);let ze=n(`span`);v(Re,ze),v(ze,i(`host.props.count`));let Be=n(`span`);v(Re,Be),d(Be,`font-semibold`);let Ve=o(Be);v(Be,Ve),C(()=>{f(Ve,h.value)});let Z=n(`input`);v(Le,Z),r(Z,`type`,`range`),r(Z,`min`,`1`),r(Z,`max`,`15`),C(()=>{a(Z,h.value)}),d(Z,`range range-primary`),e(Z,`input`,e=>{h.value=Number(e.target.value),V(),B()});let Q=n(`div`);v(W,Q),d(Q,`grid gap-3 sm:grid-cols-2`);let We=n(`label`);v(Q,We),d(We,`label cursor-pointer justify-start gap-3`);let Ge=n(`input`);v(We,Ge),r(Ge,`type`,`checkbox`),d(Ge,`toggle toggle-primary`),C(()=>{u(Ge,!!x.value)}),e(Ge,`change`,e=>{x.value=e.target.checked,U()});let Ke=n(`span`);v(We,Ke),d(Ke,`label-text`),v(Ke,i(`host.props.busy`));let qe=n(`label`);v(Q,qe),d(qe,`label cursor-pointer justify-start gap-3`);let $=n(`input`);v(qe,$),r($,`type`,`checkbox`),d($,`toggle toggle-secondary`),C(()=>{u($,!!ee.value)}),e($,`change`,e=>{ee.value=e.target.checked,V(),B()});let Je=n(`span`);v(qe,Je),d(Je,`label-text`),v(Je,i(`host.props.config.compact`));let Ye=n(`div`);v(W,Ye),d(Ye,`grid gap-2 sm:grid-cols-2`);let Xe=n(`button`);v(Ye,Xe),d(Xe,`btn btn-primary`),e(Xe,`click`,G),v(Xe,i(`追加 tag`));let Ze=n(`button`);v(Ye,Ze),d(Ze,`btn btn-outline`),e(Ze,`click`,ue),v(Ze,i(`删除最后一个 tag`));let Qe=n(`button`);v(Ye,Qe),d(Qe,`btn btn-secondary`),e(Qe,`click`,()=>{h.value+=2,V(),B()}),v(Qe,i(`count + 2`));let $e=n(`button`);v(Ye,$e),d($e,`btn btn-ghost`),e($e,`click`,de),v($e,i(`移除 title attribute`));let et=n(`div`);v(z,et),d(et,`space-y-6`);let tt=n(`div`);v(et,tt),d(tt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=n(`div`);v(tt,rt),d(rt,`card-body gap-5`);let it=n(`div`);v(rt,it),d(it,`flex flex-wrap items-center justify-between gap-4`);let at=n(`div`);v(it,at);let ot=n(`p`);v(at,ot),d(ot,`text-xs uppercase tracking-[0.28em] text-base-content/45`),v(ot,i(`Live Preview`));let st=n(`h2`);v(at,st),d(st,`text-2xl font-semibold mt-2`),v(st,i(`Shadow + Light 双宿主联动`));let ct=n(`div`);v(it,ct),d(ct,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let lt=n(`div`);v(ct,lt),d(lt,`stat py-3 px-4`);let ut=n(`div`);v(lt,ut),d(ut,`stat-title`),v(ut,i(`shadow configureApp`));let dt=n(`div`);v(lt,dt),d(dt,`stat-value text-lg`);let ft=o(dt);v(dt,ft),C(()=>{f(ft,je.value)});let pt=n(`div`);v(ct,pt),d(pt,`stat py-3 px-4`);let mt=n(`div`);v(pt,mt),d(mt,`stat-title`),v(mt,i(`light configureApp`));let ht=n(`div`);v(pt,ht),d(ht,`stat-value text-lg`);let gt=o(ht);v(ht,gt),C(()=>{f(gt,Me.value)});let _t=n(`div`);v(ct,_t),d(_t,`stat py-3 px-4`);let vt=n(`div`);v(_t,vt),d(vt,`stat-title`),v(vt,i(`mounted instances`));let yt=n(`div`);v(_t,yt),d(yt,`stat-value text-lg`);let bt=o(yt);v(yt,bt),C(()=>{f(bt,Ne.value+Pe.value)});let xt=n(`div`);v(rt,xt),d(xt,`space-y-4`);let St=n(`rue-shadow-console`);v(xt,St);let Ct=re(St,()=>I);g(()=>{Ct()});let wt=n(`div`);v(St,wt),r(wt,`slot`,`meta`);let Tt=n(`span`);v(wt,Tt),d(Tt,`status status-success`);let Et=n(`span`);v(wt,Et);let Dt=o(Et);v(Et,Dt),C(()=>{f(Dt,ie.value)});let Ot=n(`div`);v(St,Ot),d(Ot,`space-y-3 text-sm text-base-content/80`);let kt=n(`p`);v(Ot,kt);let At=o(kt);v(kt,At),C(()=>{f(At,te.value)});let jt=n(`div`);v(Ot,jt),d(jt,`flex flex-wrap gap-2`);let Mt=s(`rue:list:start`),Nt=s(`rue:list:end`);v(jt,Mt),v(jt,Nt);let Pt=new Map;C(()=>{Pt=ne({items:Ue(_.value)||[],getKey:(e,t)=>e,elements:Pt,parent:jt,before:Nt,singleRoot:!0,start:Mt,renderItem:(e,t,i,a,s)=>{p(O(()=>{let t=c(),i=n(`span`);v(t,i),C(()=>{r(i,`key`,String(e))}),d(i,`badge badge-outline`);let a=o(i);return v(i,a),C(()=>{f(a,e)}),t}),t,i)}})});let Ft=n(`rue-light-signal`);v(xt,Ft);let It=re(Ft,()=>se);g(()=>{It()});let Lt=n(`div`);v(et,Lt),d(Lt,`grid gap-6`);let Rt=n(`div`);v(Lt,Rt),d(Rt,`card bg-base-100 shadow border border-base-300`);let zt=n(`div`);v(Rt,zt),d(zt,`card-body gap-4`);let Bt=n(`div`);v(zt,Bt),d(Bt,`flex items-center justify-between gap-3`);let Vt=n(`h3`);v(Bt,Vt),d(Vt,`card-title text-lg`),v(Vt,i(`运行时诊断`));let Ht=n(`span`);v(Bt,Ht),d(Ht,`badge badge-primary badge-outline`),v(Ht,i(`nonce / styles / mode`));let Ut=n(`ul`);v(zt,Ut),d(Ut,`list bg-base-100 rounded-box`);let Wt=n(`li`);v(Ut,Wt),d(Wt,`list-row`);let Gt=n(`div`);v(Wt,Gt),d(Gt,`font-medium`),v(Gt,i(`shadow style tags`));let Kt=n(`div`);v(Wt,Kt),d(Kt,`text-right`);let qt=o(Kt);v(Kt,qt),C(()=>{f(qt,P.value)});let Jt=n(`li`);v(Ut,Jt),d(Jt,`list-row`);let Yt=n(`div`);v(Jt,Yt),d(Yt,`font-medium`),v(Yt,i(`shadow nonce`));let Xt=n(`div`);v(Jt,Xt),d(Xt,`text-right break-all`);let Zt=o(Xt);v(Xt,Zt),C(()=>{f(Zt,N.value)});let Qt=n(`li`);v(Ut,Qt),d(Qt,`list-row`);let $t=n(`div`);v(Qt,$t),d($t,`font-medium`),v($t,i(`light style tags`));let en=n(`div`);v(Qt,en),d(en,`text-right`);let tn=o(en);v(en,tn),C(()=>{f(tn,F.value)});let nn=n(`li`);v(Ut,nn),d(nn,`list-row`);let rn=n(`div`);v(nn,rn),d(rn,`font-medium`),v(rn,i(`hook 期望`));let an=n(`div`);v(nn,an),d(an,`text-right`),v(an,i(`shadow / light`));let on=n(`div`);v(Lt,on),d(on,`card bg-base-100 shadow border border-base-300`);let sn=n(`div`);v(on,sn),d(sn,`card-body gap-4`);let cn=n(`div`);v(sn,cn),d(cn,`flex items-center justify-between gap-3`);let ln=n(`h3`);v(cn,ln),d(ln,`card-title text-lg`),v(ln,i(`事件桥接日志`));let un=n(`button`);v(cn,un),d(un,`btn btn-sm btn-ghost`),e(un,`click`,fe),v(un,i(`清空`));let dn=n(`div`);v(sn,dn),d(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=s(`rue:slot:anchor`);v(dn,fn),C(()=>{p(M.value.length?O(()=>{let e=c(),t=s(`rue:list:start`),i=s(`rue:list:end`);v(e,t),v(e,i);let a=new Map;return C(()=>{a=ne({items:M.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:a,parent:t.parentNode,before:i,start:t,renderItem:(e,t,i,a,o)=>{y(O(()=>{let t=n(`div`);C(()=>{r(t,`key`,String(`${e.name}-${e.at}-${o}`))}),d(t,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let i=n(`div`);v(t,i),d(i,`flex items-center justify-between gap-3 text-sm`);let a=n(`div`);v(i,a),d(a,`flex items-center gap-2`);let c=n(`span`);v(a,c),C(()=>{d(c,String(`badge ${e.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let l=s(`rue:slot:anchor`);v(c,l),C(()=>{let t=e.source;p(t,c,l)});let u=n(`span`);v(a,u),d(u,`font-medium`);let f=s(`rue:slot:anchor`);v(u,f),C(()=>{let t=e.name;p(t,u,f)});let m=n(`span`);v(i,m),d(m,`text-base-content/50`);let h=s(`rue:slot:anchor`);v(m,h),C(()=>{let t=e.at;p(t,m,h)});let g=n(`pre`);v(t,g),d(g,`mt-2 text-xs whitespace-pre-wrap break-words`);let _=s(`rue:slot:anchor`);return v(g,_),C(()=>{let t=e.detail;p(t,g,_)}),t}),t,i,a)}})}),e}):O(()=>{let e=c(),t=n(`div`);v(e,t),d(t,`alert alert-soft`);let r=n(`span`);return v(t,r),v(r,i(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),e}),dn,fn)});let pn=n(`div`);v(et,pn),d(pn,`grid gap-6`);let mn=n(`div`);v(pn,mn),d(mn,`card bg-base-100 shadow border border-base-300`);let hn=n(`div`);v(mn,hn),d(hn,`card-body gap-3`);let gn=n(`h3`);v(hn,gn),d(gn,`card-title text-lg`),v(gn,i(`shadow host.props 快照`));let _n=n(`pre`);v(hn,_n),d(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=o(_n);v(_n,vn),C(()=>{f(vn,He(L()))});let yn=n(`div`);v(pn,yn),d(yn,`card bg-base-100 shadow border border-base-300`);let bn=n(`div`);v(yn,bn),d(bn,`card-body gap-3`);let xn=n(`h3`);v(bn,xn),d(xn,`card-title text-lg`),v(xn,i(`light host.props 快照`));let Sn=n(`pre`);v(bn,Sn),d(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=o(Sn);v(Sn,Cn),C(()=>{f(Cn,He(R()))});let wn=n(`div`);v(b,wn),C(()=>{d(wn,String(t.value===`code`?`mt-4`:`hidden`))});let Tn=n(`div`);v(wn,Tn),d(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=n(`div`);v(Tn,En),d(En,`card-body p-0`);let Dn=s(`rue:component:anchor`);return v(En,Dn),C(()=>{p(D(ae,{className:`h-full`,lang:`tsx`,code:nt}),En,Dn)}),b})}),b,S),b})};export{rt as default};
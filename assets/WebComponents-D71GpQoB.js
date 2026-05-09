import{A as e,D as t,F as n,H as r,I as i,J as a,L as o,N as s,P as c,Q as l,U as u,W as d,Y as f,c as p,f as m,h,i as g,it as _,j as v,lt as y,m as b,o as x,p as S,pt as C,q as w,rt as T,s as E,t as D,u as O,ut as k,w as ee}from"./vapor-runtime-CKndxKFn.js";import{a as A,n as te,t as ne}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as re}from"./useApp-fo-cVns9.js";import{t as ie}from"./Code-B1JFTu6m.js";import{t as j}from"./SidebarPlaygroundExample-DlK8mtjC.js";var M=new Set([`data-rue-app`]),N=new WeakMap,P=new WeakMap,F=new WeakMap,I=new WeakMap,ae=new WeakMap,L=new WeakMap,R=new WeakMap,z=new WeakMap,B=[],V=null,H=()=>B.length>0?B[B.length-1]:V,oe=(e,t)=>{V=e,B.push(e);try{return t()}finally{B.pop()}},se=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return R.get(e)??null},ce=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return z.get(e)??null},U=()=>{let e=H();return e?e.host:se(h())},W=()=>{let e=H();return e?e.shadowRoot:ce(h())},le=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},ue=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),de=e=>{let t={};for(let n of e.getAttributeNames())M.has(n)||(t[ue(n)]=e.getAttribute(n));return t},fe=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},G=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},pe=e=>({...de(e),...fe(e),...F.get(e)}),me=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},he=e=>{let t={};return Object.defineProperty(t,l,{configurable:!0,enumerable:!0,value:me(e)}),_(t)},ge=e=>F.get(e)??{},_e=(e,t)=>{F.set(e,G(t))},ve=e=>I.get(e)??null,ye=(e,t)=>{if(t){I.set(e,t);return}I.delete(e)},be=(e,t)=>{if(t){ae.set(e,t);return}ae.delete(e)},xe=e=>{let t=ae.get(e);t&&(t.value+=1)},K=e=>{let t=I.get(e);if(!t)return;let n=pe(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},Se=e=>N.get(e)??null,Ce=(e,t)=>{if(t){N.set(e,t);return}N.delete(e)},we=e=>P.get(e)??null,Te=(e,t)=>{if(t){P.set(e,t);return}P.delete(e)},Ee=(e,t)=>{if(L.set(e,t),R.set(e,e),R.set(t,e),t instanceof ShadowRoot){z.set(e,t),z.set(t,t);return}z.delete(e),z.delete(t)},De=e=>{let t=L.get(e);t&&(R.delete(e),R.delete(t),z.delete(e),z.delete(t),L.delete(e))},Oe=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,q=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(q(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&M.has(e.attributeName);function je(e,r={}){let{shadowRoot:i=!0,styles:a,configureApp:o,nonce:c}=r,l=typeof e==`function`?e:t=>{let n=typeof e.setup==`function`?k(()=>e.setup(t)):t;return typeof e.render==`function`?e.render(n):[]},u=e=>{let r=Oe(e,i),u=S(),d={host:e,shadowRoot:r instanceof ShadowRoot?r:null},f=he(e),p=T(0);ye(e,f),be(e,p),K(e),Ee(e,r);let h=e=>oe(d,()=>l(e)),g=re(()=>u.vapor(()=>{let r=n(`span`);r.style.display=`contents`;let i=s(`rue:custom-element:anchor`);return v(r,i),C(()=>{p.value,t(u,()=>{ee(m(h,ve(e)??{}),r,i)})}),r}),u);o?.(g),Ce(e,g),g.mount(r),le(()=>{Se(e)&&ke(r,a,c)})},d=e=>{Se(e)?.unmount(),Ce(e,null),ye(e,null),be(e,null),De(e)},f=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||K(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),_e(this,null)}get props(){return ge(this)}set props(e){_e(this,e),K(this)}connectedCallback(){Se(this)||(u(this),f(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),d(this)}}}var Me=A(`ref:1:0`,()=>T(0)),Ne=A(`ref:1:1`,()=>T(0)),Pe=A(`ref:1:2`,()=>T(0)),Fe=A(`ref:1:3`,()=>T(0)),J=0,Ie=0,Le=new WeakMap,Re=new WeakMap,ze=`rue-demo-nonce`,Be=`rue-shadow-console`,Ve=`rue-light-signal`,He=[`
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
  `],Y=[`
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
  `],Ue=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},We=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,Ge=e=>X(e.config)?.compact===!0,Ke=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},qe=e=>e?Le.get(e)||(J+=1,Pe.value+=1,Le.set(e,J),J):0,Je=e=>e?Re.get(e)||(Ie+=1,Fe.value+=1,Re.set(e,Ie),Ie):0,Z=e=>Number(X(e.metrics)?.events??0),Ye=e=>Number(X(e.metrics)?.tags??0),Q=e=>e,Xe=()=>{let{host:e,shadowRoot:t,mountId:r}=A(`useSetup:0:0`,()=>k(()=>{let e=U();return{host:e,shadowRoot:W(),mountId:Je(e)}}));return O(()=>{let a=n(`p`);d(a,`lightMeta`),v(a,i(`实例 #`));let o=s(`rue:slot:anchor`);v(a,o),C(()=>{p(r,a,o)}),v(a,i(` · `));let c=s(`rue:slot:anchor`);v(a,c),C(()=>{p(e?.tagName.toLowerCase()??`unknown-host`,a,c)}),v(a,i(` ·`));let l=s(`rue:slot:anchor`);v(a,l),C(()=>{p(` `,a,l)}),v(a,i(` `));let u=s(`rue:slot:anchor`);return v(a,u),C(()=>{p(t?`shadow-root`:`light-dom`,a,u)}),a})},Ze=t=>{let{host:a,shadowRoot:l,mountId:u}=A(`useSetup:0:0`,()=>k(()=>{let e=U();return{host:e,shadowRoot:W(),mountId:qe(e)}})),m=b(t),h=Number(t.count??0),g=String(t.accent??`teal`),_=String(t.panelTitle??`Shadow console`),y=Array.isArray(t.tags)?t.tags:[],x=t.busy===!0,S=`${Math.max(8,Math.min(h*9,100))}%`;return O(()=>{let b=n(`article`);C(()=>{d(b,String(`frame ${Ge(t)?`compact`:``}`))}),C(()=>{r(b,`data-accent`,String(g))}),C(()=>{r(b,`data-busy`,String(x?`yes`:`no`))});let T=n(`header`);v(b,T),d(T,`hero`);let E=n(`div`);v(T,E);let D=n(`p`);v(E,D),d(D,`eyebrow`),v(D,i(`Shadow Root / Slot / CustomEvent`));let k=n(`h2`);v(E,k),d(k,`title`);let ee=o(k);v(k,ee),C(()=>{f(ee,_)});let A=n(`p`);v(E,A),d(A,`subtitle`),v(A,i(`实例 #`));let te=o(A);v(A,te),C(()=>{f(te,u)}),v(A,i(` · `));let ne=o(A);v(A,ne),C(()=>{f(ne,a?.tagName.toLowerCase()??`unknown-host`)}),v(A,i(` ·`));let re=o(A);v(A,re),f(re,` `),v(A,i(` `));let ie=o(A);v(A,ie),C(()=>{f(ie,l?`shadow-root 已开启`:`light-dom`)});let j=n(`div`);v(T,j),d(j,`actions`);let M=n(`button`);v(j,M),r(M,`type`,`button`),d(M,`button primary`),e(M,`click`,()=>{m(`save`,{mountId:u,panelTitle:_,count:h,tags:y,busy:x},{host:a?.tagName.toLowerCase()??`unknown`,rootMode:l?`shadow`:`light`})}),v(M,i(`派发 save`));let N=n(`button`);v(j,N),r(N,`type`,`button`),d(N,`button`),e(N,`click`,()=>{m(`pulse`,h+1,g)}),v(N,i(`派发 pulse`));let P=n(`div`);v(b,P),d(P,`grid`);let F=n(`section`);v(P,F),d(F,`panel`);let I=n(`div`);v(F,I),d(I,`metricValue`);let ae=o(I);v(I,ae),C(()=>{f(ae,h)});let L=n(`div`);v(F,L),d(L,`metricLabel`),v(L,i(`这个数值来自宿主上的 el.props.count`));let R=n(`div`);v(F,R),d(R,`meter`);let z=n(`div`);v(R,z),d(z,`meterFill`),C(()=>{w(z,{width:S})});let B=n(`div`);v(F,B),d(B,`chips`);let V=s(`rue:slot:anchor`);v(B,V),C(()=>{p(y.length?y.map(e=>O(()=>{let t=n(`span`);C(()=>{r(t,`key`,String(e))}),d(t,`chip`);let i=s(`rue:slot:anchor`);return v(t,i),C(()=>{p(e,t,i)}),t})):O(()=>{let e=c(),t=n(`span`);return v(e,t),d(t,`chip muted`),v(t,i(`暂无 tags`)),e}),B,V)});let H=n(`section`);v(P,H),d(H,`panel`);let oe=n(`p`);v(H,oe),d(oe,`slotTitle`),v(oe,i(`命名 Slot`));let se=n(`slot`);v(H,se),r(se,`name`,`meta`);let ce=n(`div`);v(H,ce),w(ce,{height:`12px`});let U=n(`p`);v(H,U),d(U,`slotTitle`),v(U,i(`默认 Slot`)),v(H,n(`slot`));let W=n(`footer`);v(b,W),d(W,`footer`);let le=n(`span`);v(W,le),v(le,i(`preset: `));let ue=o(le);v(le,ue),C(()=>{f(ue,Ke(t))});let de=n(`span`);v(W,de);let fe=o(de);v(de,fe),C(()=>{f(fe,x?`后台同步中`:`空闲`)});let G=n(`span`);v(W,G);let pe=o(G);return v(G,pe),C(()=>{f(pe,Ge(t)?`compact on`:`compact off`)}),b})},Qe=t=>{let a=b(t),c=String(t.label??`Light DOM signal`),l=String(t.tone??`teal`);return O(()=>{let u=n(`div`);C(()=>{d(u,String(`lightShell tone-${l}`))});let m=n(`div`);v(u,m);let h=n(`p`);v(m,h),d(h,`lightTitle`);let g=o(h);v(h,g),C(()=>{f(g,c)});let _=s(`rue:component:anchor`);v(m,_),p(D(Xe,{}),m,_);let y=n(`div`);v(u,y),d(y,`lightValue`);let b=o(y);v(y,b),C(()=>{f(b,Z(t))}),v(y,i(` events / `));let x=o(y);v(y,x),C(()=>{f(x,Ye(t))}),v(y,i(` tags`));let S=n(`button`);return v(u,S),r(S,`type`,`button`),d(S,`lightButton`),e(S,`click`,()=>{a(`light-tap`,{label:c,events:Z(t),tags:Ye(t)})}),v(S,i(`emit`)),u})},$e=je(Ze,{styles:He,nonce:ze,configureApp(){Me.value+=1}}),$=je(Qe,{shadowRoot:!1,styles:Y,configureApp(){Ne.value+=1}}),et=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};et(Be,$e),et(Ve,$);var tt=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),nt=()=>{let{activeTab:t,panelTitle:l,accent:m,count:h,tagInput:_,busy:b,compact:S,activePreset:w,slotNote:ee,metaBadge:re,lightLabel:M,eventLog:N,shadowNonce:P,shadowStyleCount:F,lightStyleCount:I,shadowHostRef:ae,lightHostRef:L,shadowPropsPayload:R,lightPropsPayload:z,refreshDiagnostics:B,scheduleDiagnostics:V,syncShadowHost:H,syncLightHost:oe,syncHosts:se,pushEvent:ce,bindCustomEvent:U,applyPreset:W,appendTag:le,removeLastTag:ue,clearTitleAttr:de,clearEvents:fe}=A(`useSetup:0:0`,()=>k(()=>{let e=A(`ref:1:4`,()=>T(`preview`)),t=A(`ref:1:5`,()=>T(`Ops Console / Native CE`)),n=A(`ref:1:6`,()=>T(`teal`)),r=A(`ref:1:7`,()=>T(7)),i=A(`ref:1:8`,()=>T(`shadow, events, slots, props`)),a=A(`ref:1:9`,()=>T(!1)),o=A(`ref:1:10`,()=>T(!1)),s=A(`ref:1:11`,()=>T(`ops`)),c=A(`ref:1:12`,()=>T(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),l=A(`ref:1:13`,()=>T(`SLA 99.99%`)),u=A(`ref:1:14`,()=>T(`Light DOM signal`)),d=A(`ref:1:15`,()=>T([])),f=A(`ref:1:16`,()=>T(`等待挂载`)),p=A(`ref:1:17`,()=>T(0)),m=A(`ref:1:18`,()=>T(0)),h=A(`useRef:1:19`,()=>y()),g=A(`useRef:1:20`,()=>y()),_=()=>({count:r.value,tags:We(i.value),config:{compact:o.value,preset:s.value},busy:a.value}),v=()=>({metrics:{events:d.value.length,tags:We(i.value).length,busy:a.value}}),b=()=>{let e=h.current,t=g.current;p.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,f.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,m.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},S=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{b()})})},C=()=>{let e=h.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=_()},w=()=>{let e=g.current;if(!e)return;let t=u.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Q(n.value)),e.props=v()},D=()=>{C(),w(),S()},O=(e,t,n)=>{d.value=[{source:e,name:t,detail:Ue(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...d.value].slice(0,8),w(),S()},k=(e,t,n)=>{if(!e)return()=>{};let r=e=>{O(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return x(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{D(),e=k(h.current,`save`,`shadow`),t=k(h.current,`pulse`,`shadow`),n=k(g.current,`light-tap`,`light`),S()}),E(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:i,busy:a,compact:o,activePreset:s,slotNote:c,metaBadge:l,lightLabel:u,eventLog:d,shadowNonce:f,shadowStyleCount:p,lightStyleCount:m,shadowHostRef:h,lightHostRef:g,shadowPropsPayload:_,lightPropsPayload:v,refreshDiagnostics:b,scheduleDiagnostics:S,syncShadowHost:C,syncLightHost:w,syncHosts:D,pushEvent:O,bindCustomEvent:k,applyPreset:e=>{s.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,i.value=`shadow, events, slots, props`,c.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,l.value=`SLA 99.99%`,u.value=`Light DOM signal`,a.value=!1,o.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,i.value=`checkout, fulfillment, analytics, queue`,c.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,l.value=`AOV +18%`,u.value=`Revenue pulse`,a.value=!1,o.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,i.value=`incident, pager, bridge, rollback`,c.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,l.value=`P1 ongoing`,u.value=`War-room heartbeat`,a.value=!0,o.value=!1),D()},appendTag:()=>{let e=We(i.value);e.push(`tag-${e.length+1}`),i.value=e.join(`, `),D()},removeLastTag:()=>{let e=We(i.value);e.pop(),i.value=e.join(`, `),D()},clearTitleAttr:()=>{t.value=``,D()},clearEvents:()=>{d.value=[],w(),S()}}}));return O(()=>{let y=c(),x=s(`rue:component:anchor`);return v(y,x),p(D(j,{children:O(()=>{let y=c(),x=n(`h1`);v(y,x),d(x,`text-5xl font-semibold mb-4 md:mb-4`),v(x,i(`原生 Web Components`));let T=n(`p`);v(y,T),d(T,`text-base-content/70 max-w-4xl leading-7`),v(T,i(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let E=n(`div`);v(y,E),r(E,`role`,`tablist`),d(E,`tabs tabs-box mt-4`);let k=n(`button`);v(E,k),r(k,`role`,`tab`),C(()=>{d(k,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),e(k,`click`,()=>{t.value=`preview`}),v(k,i(`效果`));let A=n(`button`);v(E,A),r(A,`role`,`tab`),C(()=>{d(A,String(`tab ${t.value===`code`?`tab-active`:``}`))}),e(A,`click`,()=>{t.value=`code`}),v(A,i(`代码`));let j=n(`div`);v(y,j),C(()=>{d(j,String(t.value===`preview`?`mt-4 space-y-6`:`hidden`))});let B=n(`div`);v(j,B),d(B,`grid gap-6 items-start`);let ce=n(`div`);v(B,ce),d(ce,`card bg-base-100 shadow-xl border border-base-300`);let U=n(`div`);v(ce,U),d(U,`card-body gap-5`);let G=n(`div`);v(U,G);let pe=n(`p`);v(G,pe),d(pe,`text-xs uppercase tracking-[0.28em] text-base-content/45`),v(pe,i(`Preset`));let me=n(`div`);v(G,me),d(me,`mt-3 flex w-full gap-2`);let he=s(`rue:list:start`),ge=s(`rue:list:end`);v(me,he),v(me,ge);let _e=new Map;C(()=>{_e=te({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:_e,parent:me,before:ge,singleRoot:!0,start:he,renderItem:(t,i,a,s,l)=>{p(O(()=>{let i=c(),a=n(`button`);v(i,a),C(()=>{r(a,`key`,String(t))}),C(()=>{d(a,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${w.value===t?`btn-primary`:`btn-outline`}`))}),e(a,`click`,()=>W(t));let s=o(a);return v(a,s),C(()=>{f(s,t)}),i}),i,a)}})});let ve=n(`label`);v(U,ve),d(ve,`floating-label`);let ye=n(`input`);v(ve,ye),d(ye,`input input-bordered w-full`),C(()=>{a(ye,l.value)}),e(ye,`input`,e=>{l.value=e.target.value,H(),V()});let be=n(`span`);v(ve,be),v(be,i(`panel-title attribute`));let xe=n(`label`);v(U,xe),d(xe,`floating-label`);let K=n(`input`);v(xe,K),d(K,`input input-bordered w-full`),C(()=>{a(K,_.value)}),e(K,`input`,e=>{_.value=e.target.value,se()});let Se=n(`span`);v(xe,Se),v(Se,i(`host.props.tags（逗号分隔）`));let Ce=n(`label`);v(U,Ce),d(Ce,`floating-label`);let we=n(`input`);v(Ce,we),d(we,`input input-bordered w-full`),C(()=>{a(we,ee.value)}),e(we,`input`,e=>{ee.value=e.target.value});let Te=n(`span`);v(Ce,Te),v(Te,i(`默认 slot 文案`));let Ee=n(`div`);v(U,Ee),d(Ee,`grid gap-3 sm:grid-cols-2`);let De=n(`fieldset`);v(Ee,De),d(De,`fieldset`);let Oe=n(`legend`);v(De,Oe),d(Oe,`fieldset-legend`),v(Oe,i(`accent attribute`));let q=n(`select`);v(De,q),d(q,`select select-bordered`),C(()=>{a(q,m.value)}),e(q,`change`,e=>{m.value=e.target.value,se()});let ke=n(`option`);v(q,ke),r(ke,`value`,`teal`),v(ke,i(`teal`));let Ae=n(`option`);v(q,Ae),r(Ae,`value`,`amber`),v(Ae,i(`amber`));let je=n(`option`);v(q,je),r(je,`value`,`rose`),v(je,i(`rose`));let J=n(`fieldset`);v(Ee,J),d(J,`fieldset`);let Ie=n(`legend`);v(J,Ie),d(Ie,`fieldset-legend`),v(Ie,i(`light label attribute`));let Le=n(`input`);v(J,Le),d(Le,`input input-bordered`),C(()=>{a(Le,M.value)}),e(Le,`input`,e=>{M.value=e.target.value,oe(),V()});let Re=n(`div`);v(U,Re);let ze=n(`div`);v(Re,ze),d(ze,`flex items-center justify-between text-sm mb-2`);let Be=n(`span`);v(ze,Be),v(Be,i(`host.props.count`));let Ve=n(`span`);v(ze,Ve),d(Ve,`font-semibold`);let He=o(Ve);v(Ve,He),C(()=>{f(He,h.value)});let Y=n(`input`);v(Re,Y),r(Y,`type`,`range`),r(Y,`min`,`1`),r(Y,`max`,`15`),C(()=>{a(Y,h.value)}),d(Y,`range range-primary`),e(Y,`input`,e=>{h.value=Number(e.target.value),H(),V()});let X=n(`div`);v(U,X),d(X,`grid gap-3 sm:grid-cols-2`);let Ge=n(`label`);v(X,Ge),d(Ge,`label cursor-pointer justify-start gap-3`);let Ke=n(`input`);v(Ge,Ke),r(Ke,`type`,`checkbox`),d(Ke,`toggle toggle-primary`),C(()=>{u(Ke,!!b.value)}),e(Ke,`change`,e=>{b.value=e.target.checked,se()});let qe=n(`span`);v(Ge,qe),d(qe,`label-text`),v(qe,i(`host.props.busy`));let Je=n(`label`);v(X,Je),d(Je,`label cursor-pointer justify-start gap-3`);let Z=n(`input`);v(Je,Z),r(Z,`type`,`checkbox`),d(Z,`toggle toggle-secondary`),C(()=>{u(Z,!!S.value)}),e(Z,`change`,e=>{S.value=e.target.checked,H(),V()});let Ye=n(`span`);v(Je,Ye),d(Ye,`label-text`),v(Ye,i(`host.props.config.compact`));let Q=n(`div`);v(U,Q),d(Q,`grid gap-2 sm:grid-cols-2`);let Xe=n(`button`);v(Q,Xe),d(Xe,`btn btn-primary`),e(Xe,`click`,le),v(Xe,i(`追加 tag`));let Ze=n(`button`);v(Q,Ze),d(Ze,`btn btn-outline`),e(Ze,`click`,ue),v(Ze,i(`删除最后一个 tag`));let Qe=n(`button`);v(Q,Qe),d(Qe,`btn btn-secondary`),e(Qe,`click`,()=>{h.value+=2,H(),V()}),v(Qe,i(`count + 2`));let $e=n(`button`);v(Q,$e),d($e,`btn btn-ghost`),e($e,`click`,de),v($e,i(`移除 title attribute`));let $=n(`div`);v(B,$),d($,`space-y-6`);let et=n(`div`);v($,et),d(et,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let nt=n(`div`);v(et,nt),d(nt,`card-body gap-5`);let rt=n(`div`);v(nt,rt),d(rt,`flex flex-wrap items-center justify-between gap-4`);let it=n(`div`);v(rt,it);let at=n(`p`);v(it,at),d(at,`text-xs uppercase tracking-[0.28em] text-base-content/45`),v(at,i(`Live Preview`));let ot=n(`h2`);v(it,ot),d(ot,`text-2xl font-semibold mt-2`),v(ot,i(`Shadow + Light 双宿主联动`));let st=n(`div`);v(rt,st),d(st,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ct=n(`div`);v(st,ct),d(ct,`stat py-3 px-4`);let lt=n(`div`);v(ct,lt),d(lt,`stat-title`),v(lt,i(`shadow configureApp`));let ut=n(`div`);v(ct,ut),d(ut,`stat-value text-lg`);let dt=o(ut);v(ut,dt),C(()=>{f(dt,Me.value)});let ft=n(`div`);v(st,ft),d(ft,`stat py-3 px-4`);let pt=n(`div`);v(ft,pt),d(pt,`stat-title`),v(pt,i(`light configureApp`));let mt=n(`div`);v(ft,mt),d(mt,`stat-value text-lg`);let ht=o(mt);v(mt,ht),C(()=>{f(ht,Ne.value)});let gt=n(`div`);v(st,gt),d(gt,`stat py-3 px-4`);let _t=n(`div`);v(gt,_t),d(_t,`stat-title`),v(_t,i(`mounted instances`));let vt=n(`div`);v(gt,vt),d(vt,`stat-value text-lg`);let yt=o(vt);v(vt,yt),C(()=>{f(yt,Pe.value+Fe.value)});let bt=n(`div`);v(nt,bt),d(bt,`space-y-4`);let xt=n(`rue-shadow-console`);v(bt,xt);let St=ne(xt,()=>ae);g(()=>{St()});let Ct=n(`div`);v(xt,Ct),r(Ct,`slot`,`meta`);let wt=n(`span`);v(Ct,wt),d(wt,`status status-success`);let Tt=n(`span`);v(Ct,Tt);let Et=o(Tt);v(Tt,Et),C(()=>{f(Et,re.value)});let Dt=n(`div`);v(xt,Dt),d(Dt,`space-y-3 text-sm text-base-content/80`);let Ot=n(`p`);v(Dt,Ot);let kt=o(Ot);v(Ot,kt),C(()=>{f(kt,ee.value)});let At=n(`div`);v(Dt,At),d(At,`flex flex-wrap gap-2`);let jt=s(`rue:list:start`),Mt=s(`rue:list:end`);v(At,jt),v(At,Mt);let Nt=new Map;C(()=>{Nt=te({items:We(_.value)||[],getKey:(e,t)=>e,elements:Nt,parent:At,before:Mt,singleRoot:!0,start:jt,renderItem:(e,t,i,a,s)=>{p(O(()=>{let t=c(),i=n(`span`);v(t,i),C(()=>{r(i,`key`,String(e))}),d(i,`badge badge-outline`);let a=o(i);return v(i,a),C(()=>{f(a,e)}),t}),t,i)}})});let Pt=n(`rue-light-signal`);v(bt,Pt);let Ft=ne(Pt,()=>L);g(()=>{Ft()});let It=n(`div`);v($,It),d(It,`grid gap-6`);let Lt=n(`div`);v(It,Lt),d(Lt,`card bg-base-100 shadow border border-base-300`);let Rt=n(`div`);v(Lt,Rt),d(Rt,`card-body gap-4`);let zt=n(`div`);v(Rt,zt),d(zt,`flex items-center justify-between gap-3`);let Bt=n(`h3`);v(zt,Bt),d(Bt,`card-title text-lg`),v(Bt,i(`运行时诊断`));let Vt=n(`span`);v(zt,Vt),d(Vt,`badge badge-primary badge-outline`),v(Vt,i(`nonce / styles / mode`));let Ht=n(`ul`);v(Rt,Ht),d(Ht,`list bg-base-100 rounded-box`);let Ut=n(`li`);v(Ht,Ut),d(Ut,`list-row`);let Wt=n(`div`);v(Ut,Wt),d(Wt,`font-medium`),v(Wt,i(`shadow style tags`));let Gt=n(`div`);v(Ut,Gt),d(Gt,`text-right`);let Kt=o(Gt);v(Gt,Kt),C(()=>{f(Kt,F.value)});let qt=n(`li`);v(Ht,qt),d(qt,`list-row`);let Jt=n(`div`);v(qt,Jt),d(Jt,`font-medium`),v(Jt,i(`shadow nonce`));let Yt=n(`div`);v(qt,Yt),d(Yt,`text-right break-all`);let Xt=o(Yt);v(Yt,Xt),C(()=>{f(Xt,P.value)});let Zt=n(`li`);v(Ht,Zt),d(Zt,`list-row`);let Qt=n(`div`);v(Zt,Qt),d(Qt,`font-medium`),v(Qt,i(`light style tags`));let $t=n(`div`);v(Zt,$t),d($t,`text-right`);let en=o($t);v($t,en),C(()=>{f(en,I.value)});let tn=n(`li`);v(Ht,tn),d(tn,`list-row`);let nn=n(`div`);v(tn,nn),d(nn,`font-medium`),v(nn,i(`hook 期望`));let rn=n(`div`);v(tn,rn),d(rn,`text-right`),v(rn,i(`shadow / light`));let an=n(`div`);v(It,an),d(an,`card bg-base-100 shadow border border-base-300`);let on=n(`div`);v(an,on),d(on,`card-body gap-4`);let sn=n(`div`);v(on,sn),d(sn,`flex items-center justify-between gap-3`);let cn=n(`h3`);v(sn,cn),d(cn,`card-title text-lg`),v(cn,i(`事件桥接日志`));let ln=n(`button`);v(sn,ln),d(ln,`btn btn-sm btn-ghost`),e(ln,`click`,fe),v(ln,i(`清空`));let un=n(`div`);v(on,un),d(un,`space-y-3 max-h-[320px] overflow-auto pr-1`);let dn=s(`rue:slot:anchor`);v(un,dn),C(()=>{p(N.value.length?N.value.map((e,t)=>O(()=>{let i=n(`div`);C(()=>{r(i,`key`,String(`${e.name}-${e.at}-${t}`))}),d(i,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let a=n(`div`);v(i,a),d(a,`flex items-center justify-between gap-3 text-sm`);let o=n(`div`);v(a,o),d(o,`flex items-center gap-2`);let c=n(`span`);v(o,c),C(()=>{d(c,String(`badge ${e.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let l=s(`rue:slot:anchor`);v(c,l),C(()=>{let t=e.source;p(t,c,l)});let u=n(`span`);v(o,u),d(u,`font-medium`);let f=s(`rue:slot:anchor`);v(u,f),C(()=>{let t=e.name;p(t,u,f)});let m=n(`span`);v(a,m),d(m,`text-base-content/50`);let h=s(`rue:slot:anchor`);v(m,h),C(()=>{let t=e.at;p(t,m,h)});let g=n(`pre`);v(i,g),d(g,`mt-2 text-xs whitespace-pre-wrap break-words`);let _=s(`rue:slot:anchor`);return v(g,_),C(()=>{let t=e.detail;p(t,g,_)}),i})):O(()=>{let e=c(),t=n(`div`);v(e,t),d(t,`alert alert-soft`);let r=n(`span`);return v(t,r),v(r,i(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),e}),un,dn)});let fn=n(`div`);v($,fn),d(fn,`grid gap-6`);let pn=n(`div`);v(fn,pn),d(pn,`card bg-base-100 shadow border border-base-300`);let mn=n(`div`);v(pn,mn),d(mn,`card-body gap-3`);let hn=n(`h3`);v(mn,hn),d(hn,`card-title text-lg`),v(hn,i(`shadow host.props 快照`));let gn=n(`pre`);v(mn,gn),d(gn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let _n=o(gn);v(gn,_n),C(()=>{f(_n,Ue(R()))});let vn=n(`div`);v(fn,vn),d(vn,`card bg-base-100 shadow border border-base-300`);let yn=n(`div`);v(vn,yn),d(yn,`card-body gap-3`);let bn=n(`h3`);v(yn,bn),d(bn,`card-title text-lg`),v(bn,i(`light host.props 快照`));let xn=n(`pre`);v(yn,xn),d(xn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Sn=o(xn);v(xn,Sn),C(()=>{f(Sn,Ue(z()))});let Cn=n(`div`);v(y,Cn),C(()=>{d(Cn,String(t.value===`code`?`mt-4`:`hidden`))});let wn=n(`div`);v(Cn,wn),d(wn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let Tn=n(`div`);v(wn,Tn),d(Tn,`card-body p-0`);let En=s(`rue:component:anchor`);return v(Tn,En),C(()=>{p(D(ie,{className:`h-full`,lang:`tsx`,code:tt}),Tn,En)}),y})}),y,x),y})};export{nt as default};
import{F as e,G as t,I as n,K as r,L as i,M as a,N as o,O as s,Q as c,R as l,T as u,W as d,X as f,Z as p,_t as m,d as h,g,h as _,i as v,l as y,m as b,mt as x,nt as S,o as C,ot as w,p as T,pt as E,s as D,st as O,t as k,tt as ee,ut as A,z as j}from"./vapor-runtime-Bp8DIxJg.js";import{a as M,n as te,t as ne}from"./vapor-helpers-vapor-D3i3KBBg.js";import{t as re}from"./useApp-D-t-jQJH.js";import{t as ie}from"./Code-D55WiaDx.js";import{t as ae}from"./SidebarPlaygroundExample-Cpkm7O-2.js";var N=new Set([`data-rue-app`]),P=new WeakMap,F=new WeakMap,I=new WeakMap,L=new WeakMap,R=new WeakMap,oe=new WeakMap,z=new WeakMap,B=new WeakMap,V=[],H=null,se=()=>V.length>0?V[V.length-1]:H,U=(e,t)=>{H=e,V.push(e);try{return t()}finally{V.pop()}},ce=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return z.get(e)??null},W=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return B.get(e)??null},le=()=>{let e=se();return e?e.host:ce(g())},ue=()=>{let e=se();return e?e.shadowRoot:W(g())},G=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},de=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),fe=e=>{let t={};for(let n of e.getAttributeNames())N.has(n)||(t[de(n)]=e.getAttribute(n));return t},K=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},pe=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},q=e=>({...fe(e),...K(e),...I.get(e)}),me=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},he=e=>{let t={};return Object.defineProperty(t,ee,{configurable:!0,enumerable:!0,value:me(e)}),O(t)},ge=e=>I.get(e)??{},_e=(e,t)=>{I.set(e,pe(t))},ve=e=>L.get(e)??null,ye=(e,t)=>{if(t){L.set(e,t);return}L.delete(e)},be=(e,t)=>{if(t){R.set(e,t);return}R.delete(e)},xe=e=>{let t=R.get(e);t&&(t.value+=1)},Se=e=>{let t=L.get(e);if(!t)return;let n=q(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},J=e=>P.get(e)??null,Ce=(e,t)=>{if(t){P.set(e,t);return}P.delete(e)},we=e=>F.get(e)??null,Te=(e,t)=>{if(t){F.set(e,t);return}F.delete(e)},Ee=(e,t)=>{if(oe.set(e,t),z.set(e,e),z.set(t,e),t instanceof ShadowRoot){B.set(e,t),B.set(t,t);return}B.delete(e),B.delete(t)},De=e=>{let t=oe.get(e);t&&(z.delete(e),z.delete(t),B.delete(e),B.delete(t),oe.delete(e))},Y=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Oe=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(Oe(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&N.has(e.attributeName);function je(t,n={}){let{shadowRoot:r=!0,styles:a,configureApp:c,nonce:l}=n,d=typeof t==`function`?t:e=>{let n=typeof t.setup==`function`?x(()=>t.setup(e)):e;return typeof t.render==`function`?t.render(n):[]},f=t=>{let n=Y(t,r),f=b(),p={host:t,shadowRoot:n instanceof ShadowRoot?n:null},h=he(t),g=w(0);ye(t,h),be(t,g),Se(t),Ee(t,n);let _=e=>U(p,()=>d(e)),v=re(()=>f.vapor(()=>{let n=i(`span`);n.style.display=`contents`;let r=e(`rue:custom-element:anchor`);return o(n,r),m(()=>{g.value,s(f,()=>{u(T(_,ve(t)??{}),n,r)})}),n}),f);c?.(v),Ce(t,v),v.mount(n),G(()=>{J(t)&&ke(n,a,l)})},p=e=>{J(e)?.unmount(),Ce(e,null),ye(e,null),be(e,null),De(e)},h=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||Se(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),_e(this,null)}get props(){return ge(this)}set props(e){_e(this,e),Se(this)}connectedCallback(){J(this)||(f(this),h(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),p(this)}}}var Me=M(`ref:1:0`,()=>w(0)),Ne=M(`ref:1:1`,()=>w(0)),Pe=M(`ref:1:2`,()=>w(0)),Fe=M(`ref:1:3`,()=>w(0)),Ie=0,Le=0,Re=new WeakMap,ze=new WeakMap,Be=`rue-demo-nonce`,Ve=`rue-shadow-console`,He=`rue-light-signal`,Ue=[`
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
  `],Ge=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ke=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,qe=e=>X(e.config)?.compact===!0,Je=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},Ye=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>Number(X(e.metrics)?.events??0),Z=e=>Number(X(e.metrics)?.tags??0),Qe=e=>e,$e=()=>{let{host:t,shadowRoot:n,mountId:a}=M(`useSetup:0:0`,()=>x(()=>{let e=le();return{host:e,shadowRoot:ue(),mountId:Xe(e)}}));return h(s=>{let c=i(`p`,s);r(c,`lightMeta`),o(c,l(`实例 #`));let u=e(`rue:slot:anchor`);o(c,u),m(()=>{let e=a;A(()=>y(e,c,u))}),o(c,l(` · `));let d=e(`rue:slot:anchor`);o(c,d),m(()=>{let e=t?.tagName.toLowerCase()??`unknown-host`;A(()=>y(e,c,d))}),o(c,l(` ·`));let f=e(`rue:slot:anchor`);o(c,f),m(()=>{A(()=>y(` `,c,f))}),o(c,l(` `));let p=e(`rue:slot:anchor`);return o(c,p),m(()=>{let e=n?`shadow-root`:`light-dom`;A(()=>y(e,c,p))}),c})},et=t=>{let{host:s,shadowRoot:u,emit:p,mountId:g,count:v,accent:b,panelTitle:C,tags:w,busy:T,meterWidth:E}=M(`useSetup:0:0:dup1`,()=>x(()=>{let e=le(),n=ue(),r=M(`computed:1:4`,()=>S(()=>_(t))),i=Ye(e),a=M(`computed:1:5`,()=>S(()=>Number(t.count??0))),o=a;return{host:e,shadowRoot:n,emit:r,mountId:i,count:a,accent:M(`computed:1:6`,()=>S(()=>String(t.accent??`teal`))),panelTitle:M(`computed:1:7`,()=>S(()=>String(t.panelTitle??`Shadow console`))),tags:M(`computed:1:8`,()=>S(()=>Array.isArray(t.tags)?t.tags:[])),busy:M(`computed:1:9`,()=>S(()=>t.busy===!0)),meterWidth:M(`computed:1:10`,()=>S(()=>`${Math.max(8,Math.min(o.get()*9,100))}%`))}}));return h(_=>{let x=i(`article`,_);m(()=>{r(x,String(`frame ${qe(t)?`compact`:``}`))}),m(()=>{d(x,`data-accent`,String(b.get()))}),m(()=>{d(x,`data-busy`,String(T.get()?`yes`:`no`))});let S=i(`header`,x);o(x,S),r(S,`hero`);let D=i(`div`,S);o(S,D);let O=i(`p`,D);o(D,O),r(O,`eyebrow`),o(O,l(`Shadow Root / Slot / CustomEvent`));let k=i(`h2`,D);o(D,k),r(k,`title`);let ee=j(k);o(k,ee),m(()=>{c(ee,C.get())});let M=i(`p`,D);o(D,M),r(M,`subtitle`),o(M,l(`实例 #`));let ne=j(M);o(M,ne),m(()=>{c(ne,g)}),o(M,l(` · `));let re=j(M);o(M,re),m(()=>{c(re,s?.tagName.toLowerCase()??`unknown-host`)}),o(M,l(` ·`));let ie=j(M);o(M,ie),c(ie,` `),o(M,l(` `));let ae=j(M);o(M,ae),m(()=>{c(ae,u?`shadow-root 已开启`:`light-dom`)});let N=i(`div`,S);o(S,N),r(N,`actions`);let P=i(`button`,N);o(N,P),d(P,`type`,`button`),r(P,`button primary`),a(P,`click`,()=>{p.get()(`save`,{mountId:g,panelTitle:C.get(),count:v.get(),tags:w.get(),busy:T.get()},{host:s?.tagName.toLowerCase()??`unknown`,rootMode:u?`shadow`:`light`})}),o(P,l(`派发 save`));let F=i(`button`,N);o(N,F),d(F,`type`,`button`),r(F,`button`),a(F,`click`,()=>{p.get()(`pulse`,v.get()+1,b.get())}),o(F,l(`派发 pulse`));let I=i(`div`,x);o(x,I),r(I,`grid`);let L=i(`section`,I);o(I,L),r(L,`panel`);let R=i(`div`,L);o(L,R),r(R,`metricValue`);let oe=j(R);o(R,oe),m(()=>{c(oe,v.get())});let z=i(`div`,L);o(L,z),r(z,`metricLabel`),o(z,l(`这个数值来自宿主上的 el.props.count`));let B=i(`div`,L);o(L,B),r(B,`meter`);let V=i(`div`,B);o(B,V),r(V,`meterFill`),m(()=>{f(V,{width:E.get()})});let H=i(`div`,L);o(L,H),r(H,`chips`);let se=e(`rue:slot:anchor`);o(H,se),m(()=>{let t=w.get().length?h(()=>{let t=n(),a=e(`rue:list:start`),s=e(`rue:list:end`);o(t,a),o(t,s);let l=new Map;return m(()=>{l=te({items:w.get()||[],getKey:(e,t)=>e,elements:l,parent:a.parentNode,before:s,singleRoot:!0,trackIndex:!1,start:a,renderItem:(e,t,a,s,l)=>{y(h(()=>{let t=n(),a=i(`span`,t);o(t,a),m(()=>{d(a,`key`,String(e))}),r(a,`chip`);let s=j(a);return o(a,s),m(()=>{c(s,e)}),t}),t,a)}})}),t}):h(()=>{let e=n(),t=i(`span`,e);return o(e,t),r(t,`chip muted`),o(t,l(`暂无 tags`)),e});A(()=>y(t,H,se))});let U=i(`section`,I);o(I,U),r(U,`panel`);let ce=i(`p`,U);o(U,ce),r(ce,`slotTitle`),o(ce,l(`命名 Slot`));let W=i(`slot`,U);o(U,W),d(W,`name`,`meta`);let le=i(`div`,U);o(U,le),f(le,{height:`12px`});let ue=i(`p`,U);o(U,ue),r(ue,`slotTitle`),o(ue,l(`默认 Slot`)),o(U,i(`slot`,U));let G=i(`footer`,x);o(x,G),r(G,`footer`);let de=i(`span`,G);o(G,de),o(de,l(`preset: `));let fe=e(`rue:slot:anchor`);o(de,fe),m(()=>{let e=Je(t);A(()=>y(e,de,fe))});let K=i(`span`,G);o(G,K);let pe=j(K);o(K,pe),m(()=>{c(pe,T.get()?`后台同步中`:`空闲`)});let q=i(`span`,G);o(G,q);let me=j(q);return o(q,me),m(()=>{c(me,qe(t)?`compact on`:`compact off`)}),x})},tt=t=>{let{emit:n,label:s,tone:u}=M(`useSetup:0:0:dup2`,()=>x(()=>({emit:M(`computed:1:11`,()=>S(()=>_(t))),label:M(`computed:1:12`,()=>S(()=>String(t.label??`Light DOM signal`))),tone:M(`computed:1:13`,()=>S(()=>String(t.tone??`teal`)))})));return h(f=>{let p=i(`div`,f);m(()=>{r(p,String(`lightShell tone-${u.get()}`))});let h=i(`div`,p);o(p,h);let g=i(`p`,h);o(h,g),r(g,`lightTitle`);let _=j(g);o(g,_),m(()=>{c(_,s.get())});let v=e(`rue:component:anchor`);o(h,v),y(k($e,{}),h,v);let b=i(`div`,p);o(p,b),r(b,`lightValue`);let x=e(`rue:slot:anchor`);o(b,x),m(()=>{let e=Ze(t);A(()=>y(e,b,x))}),o(b,l(` events / `));let S=e(`rue:slot:anchor`);o(b,S),m(()=>{let e=Z(t);A(()=>y(e,b,S))}),o(b,l(` tags`));let C=i(`button`,p);return o(p,C),d(C,`type`,`button`),r(C,`lightButton`),a(C,`click`,()=>{n.get()(`light-tap`,{label:s.get(),events:Ze(t),tags:Z(t)})}),o(C,l(`emit`)),p})},Q=je(et,{styles:Ue,nonce:Be,configureApp(){Me.value+=1}}),nt=je(tt,{shadowRoot:!1,styles:We,configureApp(){Ne.value+=1}}),rt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};rt(Ve,Q),rt(He,nt);var it=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),at=()=>{let{activeTab:s,panelTitle:u,accent:f,count:g,tagInput:_,busy:b,compact:S,activePreset:T,slotNote:O,metaBadge:ee,lightLabel:re,eventLog:N,shadowNonce:P,shadowStyleCount:F,lightStyleCount:I,shadowHostRef:L,lightHostRef:R,shadowPropsPayload:oe,lightPropsPayload:z,refreshDiagnostics:B,scheduleDiagnostics:V,syncShadowHost:H,syncLightHost:se,syncHosts:U,pushEvent:ce,bindCustomEvent:W,applyPreset:le,appendTag:ue,removeLastTag:G,clearTitleAttr:de,clearEvents:fe}=M(`useSetup:0:0:dup3`,()=>x(()=>{let e=M(`ref:1:14`,()=>w(`preview`)),t=M(`ref:1:15`,()=>w(`Ops Console / Native CE`)),n=M(`ref:1:16`,()=>w(`teal`)),r=M(`ref:1:17`,()=>w(7)),i=M(`ref:1:18`,()=>w(`shadow, events, slots, props`)),a=M(`ref:1:19`,()=>w(!1)),o=M(`ref:1:20`,()=>w(!1)),s=M(`ref:1:21`,()=>w(`ops`)),c=M(`ref:1:22`,()=>w(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),l=M(`ref:1:23`,()=>w(`SLA 99.99%`)),u=M(`ref:1:24`,()=>w(`Light DOM signal`)),d=M(`ref:1:25`,()=>w([])),f=M(`ref:1:26`,()=>w(`等待挂载`)),p=M(`ref:1:27`,()=>w(0)),m=M(`ref:1:28`,()=>w(0)),h=M(`useRef:1:29`,()=>E()),g=M(`useRef:1:30`,()=>E()),_=()=>({count:r.value,tags:Ke(i.value),config:{compact:o.value,preset:s.value},busy:a.value}),v=()=>({metrics:{events:d.value.length,tags:Ke(i.value).length,busy:a.value}}),y=()=>{let e=h.current,t=g.current;p.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,f.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,m.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},b=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{y()})})},x=()=>{let e=h.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=_()},S=()=>{let e=g.current;if(!e)return;let t=u.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Qe(n.value)),e.props=v()},T=()=>{x(),S(),b()},O=(e,t,n)=>{d.value=[{source:e,name:t,detail:Ge(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...d.value].slice(0,8),S(),b()},k=(e,t,n)=>{if(!e)return()=>{};let r=e=>{O(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return C(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{T(),e=k(h.current,`save`,`shadow`),t=k(h.current,`pulse`,`shadow`),n=k(g.current,`light-tap`,`light`),b()}),D(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:i,busy:a,compact:o,activePreset:s,slotNote:c,metaBadge:l,lightLabel:u,eventLog:d,shadowNonce:f,shadowStyleCount:p,lightStyleCount:m,shadowHostRef:h,lightHostRef:g,shadowPropsPayload:_,lightPropsPayload:v,refreshDiagnostics:y,scheduleDiagnostics:b,syncShadowHost:x,syncLightHost:S,syncHosts:T,pushEvent:O,bindCustomEvent:k,applyPreset:e=>{s.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,i.value=`shadow, events, slots, props`,c.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,l.value=`SLA 99.99%`,u.value=`Light DOM signal`,a.value=!1,o.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,i.value=`checkout, fulfillment, analytics, queue`,c.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,l.value=`AOV +18%`,u.value=`Revenue pulse`,a.value=!1,o.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,i.value=`incident, pager, bridge, rollback`,c.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,l.value=`P1 ongoing`,u.value=`War-room heartbeat`,a.value=!0,o.value=!1),T()},appendTag:()=>{let e=Ke(i.value);e.push(`tag-${e.length+1}`),i.value=e.join(`, `),T()},removeLastTag:()=>{let e=Ke(i.value);e.pop(),i.value=e.join(`, `),T()},clearTitleAttr:()=>{t.value=``,T()},clearEvents:()=>{d.value=[],S(),b()}}}));return h(x=>{let C=n(),w=e(`rue:component:anchor`);return o(C,w),y(k(ae,{children:h(()=>{let x=n(),C=i(`h1`,x);o(x,C),r(C,`text-5xl font-semibold mb-4 md:mb-4`),o(C,l(`原生 Web Components`));let w=i(`p`,x);o(x,w),r(w,`text-base-content/70 max-w-4xl leading-7`),o(w,l(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let E=i(`div`,x);o(x,E),d(E,`role`,`tablist`),r(E,`tabs tabs-box mt-4`);let D=i(`button`,E);o(E,D),d(D,`role`,`tab`),m(()=>{r(D,String(`tab ${s.value===`preview`?`tab-active`:``}`))}),a(D,`click`,()=>{s.value=`preview`}),o(D,l(`效果`));let M=i(`button`,E);o(E,M),d(M,`role`,`tab`),m(()=>{r(M,String(`tab ${s.value===`code`?`tab-active`:``}`))}),a(M,`click`,()=>{s.value=`code`}),o(M,l(`代码`));let ae=i(`div`,x);o(x,ae),m(()=>{r(ae,String(s.value===`preview`?`mt-4 space-y-6`:`hidden`))});let B=i(`div`,ae);o(ae,B),r(B,`grid gap-6 items-start`);let ce=i(`div`,B);o(B,ce),r(ce,`card bg-base-100 shadow-xl border border-base-300`);let W=i(`div`,ce);o(ce,W),r(W,`card-body gap-5`);let K=i(`div`,W);o(W,K);let pe=i(`p`,K);o(K,pe),r(pe,`text-xs uppercase tracking-[0.28em] text-base-content/45`),o(pe,l(`Preset`));let q=i(`div`,K);o(K,q),r(q,`mt-3 flex w-full gap-2`);let me=e(`rue:list:start`),he=e(`rue:list:end`);o(q,me),o(q,he);let ge=new Map;m(()=>{ge=te({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ge,parent:q,before:he,singleRoot:!0,trackIndex:!1,start:me,renderItem:(e,t,s,l,u)=>{y(h(()=>{let t=n(),s=i(`button`,t);o(t,s),m(()=>{d(s,`key`,String(e))}),m(()=>{r(s,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${T.value===e?`btn-primary`:`btn-outline`}`))}),a(s,`click`,()=>le(e));let l=j(s);return o(s,l),m(()=>{c(l,e)}),t}),t,s)}})});let _e=i(`label`,W);o(W,_e),r(_e,`floating-label`);let ve=i(`input`,_e);o(_e,ve),r(ve,`input input-bordered w-full`),m(()=>{p(ve,u.value)}),a(ve,`input`,e=>{u.value=e.target.value,H(),V()});let ye=i(`span`,_e);o(_e,ye),o(ye,l(`panel-title attribute`));let be=i(`label`,W);o(W,be),r(be,`floating-label`);let xe=i(`input`,be);o(be,xe),r(xe,`input input-bordered w-full`),m(()=>{p(xe,_.value)}),a(xe,`input`,e=>{_.value=e.target.value,U()});let Se=i(`span`,be);o(be,Se),o(Se,l(`host.props.tags（逗号分隔）`));let J=i(`label`,W);o(W,J),r(J,`floating-label`);let Ce=i(`input`,J);o(J,Ce),r(Ce,`input input-bordered w-full`),m(()=>{p(Ce,O.value)}),a(Ce,`input`,e=>{O.value=e.target.value});let we=i(`span`,J);o(J,we),o(we,l(`默认 slot 文案`));let Te=i(`div`,W);o(W,Te),r(Te,`grid gap-3 sm:grid-cols-2`);let Ee=i(`fieldset`,Te);o(Te,Ee),r(Ee,`fieldset`);let De=i(`legend`,Ee);o(Ee,De),r(De,`fieldset-legend`),o(De,l(`accent attribute`));let Y=i(`select`,Ee);o(Ee,Y),r(Y,`select select-bordered`),m(()=>{p(Y,f.value)}),a(Y,`change`,e=>{f.value=e.target.value,U()});let Oe=i(`option`,Y);o(Y,Oe),d(Oe,`value`,`teal`),o(Oe,l(`teal`));let ke=i(`option`,Y);o(Y,ke),d(ke,`value`,`amber`),o(ke,l(`amber`));let Ae=i(`option`,Y);o(Y,Ae),d(Ae,`value`,`rose`),o(Ae,l(`rose`));let je=i(`fieldset`,Te);o(Te,je),r(je,`fieldset`);let Ie=i(`legend`,je);o(je,Ie),r(Ie,`fieldset-legend`),o(Ie,l(`light label attribute`));let Le=i(`input`,je);o(je,Le),r(Le,`input input-bordered`),m(()=>{p(Le,re.value)}),a(Le,`input`,e=>{re.value=e.target.value,se(),V()});let Re=i(`div`,W);o(W,Re);let ze=i(`div`,Re);o(Re,ze),r(ze,`flex items-center justify-between text-sm mb-2`);let Be=i(`span`,ze);o(ze,Be),o(Be,l(`host.props.count`));let Ve=i(`span`,ze);o(ze,Ve),r(Ve,`font-semibold`);let He=j(Ve);o(Ve,He),m(()=>{c(He,g.value)});let Ue=i(`input`,Re);o(Re,Ue),d(Ue,`type`,`range`),d(Ue,`min`,`1`),d(Ue,`max`,`15`),m(()=>{p(Ue,g.value)}),r(Ue,`range range-primary`),a(Ue,`input`,e=>{g.value=Number(e.target.value),H(),V()});let We=i(`div`,W);o(W,We),r(We,`grid gap-3 sm:grid-cols-2`);let X=i(`label`,We);o(We,X),r(X,`label cursor-pointer justify-start gap-3`);let qe=i(`input`,X);o(X,qe),d(qe,`type`,`checkbox`),r(qe,`toggle toggle-primary`),m(()=>{t(qe,!!b.value)}),a(qe,`change`,e=>{b.value=e.target.checked,U()});let Je=i(`span`,X);o(X,Je),r(Je,`label-text`),o(Je,l(`host.props.busy`));let Ye=i(`label`,We);o(We,Ye),r(Ye,`label cursor-pointer justify-start gap-3`);let Xe=i(`input`,Ye);o(Ye,Xe),d(Xe,`type`,`checkbox`),r(Xe,`toggle toggle-secondary`),m(()=>{t(Xe,!!S.value)}),a(Xe,`change`,e=>{S.value=e.target.checked,H(),V()});let Ze=i(`span`,Ye);o(Ye,Ze),r(Ze,`label-text`),o(Ze,l(`host.props.config.compact`));let Z=i(`div`,W);o(W,Z),r(Z,`grid gap-2 sm:grid-cols-2`);let Qe=i(`button`,Z);o(Z,Qe),r(Qe,`btn btn-primary`),a(Qe,`click`,ue),o(Qe,l(`追加 tag`));let $e=i(`button`,Z);o(Z,$e),r($e,`btn btn-outline`),a($e,`click`,G),o($e,l(`删除最后一个 tag`));let et=i(`button`,Z);o(Z,et),r(et,`btn btn-secondary`),a(et,`click`,()=>{g.value+=2,H(),V()}),o(et,l(`count + 2`));let tt=i(`button`,Z);o(Z,tt),r(tt,`btn btn-ghost`),a(tt,`click`,de),o(tt,l(`移除 title attribute`));let Q=i(`div`,B);o(B,Q),r(Q,`space-y-6`);let nt=i(`div`,Q);o(Q,nt),r(nt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=i(`div`,nt);o(nt,rt),r(rt,`card-body gap-5`);let at=i(`div`,rt);o(rt,at),r(at,`flex flex-wrap items-center justify-between gap-4`);let ot=i(`div`,at);o(at,ot);let st=i(`p`,ot);o(ot,st),r(st,`text-xs uppercase tracking-[0.28em] text-base-content/45`),o(st,l(`Live Preview`));let ct=i(`h2`,ot);o(ot,ct),r(ct,`text-2xl font-semibold mt-2`),o(ct,l(`Shadow + Light 双宿主联动`));let lt=i(`div`,at);o(at,lt),r(lt,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=i(`div`,lt);o(lt,ut),r(ut,`stat py-3 px-4`);let dt=i(`div`,ut);o(ut,dt),r(dt,`stat-title`),o(dt,l(`shadow configureApp`));let ft=i(`div`,ut);o(ut,ft),r(ft,`stat-value text-lg`);let pt=j(ft);o(ft,pt),m(()=>{c(pt,Me.value)});let mt=i(`div`,lt);o(lt,mt),r(mt,`stat py-3 px-4`);let ht=i(`div`,mt);o(mt,ht),r(ht,`stat-title`),o(ht,l(`light configureApp`));let gt=i(`div`,mt);o(mt,gt),r(gt,`stat-value text-lg`);let _t=j(gt);o(gt,_t),m(()=>{c(_t,Ne.value)});let vt=i(`div`,lt);o(lt,vt),r(vt,`stat py-3 px-4`);let yt=i(`div`,vt);o(vt,yt),r(yt,`stat-title`),o(yt,l(`mounted instances`));let bt=i(`div`,vt);o(vt,bt),r(bt,`stat-value text-lg`);let xt=j(bt);o(bt,xt),m(()=>{c(xt,Pe.value+Fe.value)});let St=i(`div`,rt);o(rt,St),r(St,`space-y-4`);let Ct=i(`rue-shadow-console`,St);o(St,Ct);let wt=ne(Ct,()=>L);v(()=>{wt()});let Tt=i(`div`,Ct);o(Ct,Tt),d(Tt,`slot`,`meta`);let Et=i(`span`,Tt);o(Tt,Et),r(Et,`status status-success`);let Dt=i(`span`,Tt);o(Tt,Dt);let Ot=j(Dt);o(Dt,Ot),m(()=>{c(Ot,ee.value)});let kt=i(`div`,Ct);o(Ct,kt),r(kt,`space-y-3 text-sm text-base-content/80`);let At=i(`p`,kt);o(kt,At);let jt=j(At);o(At,jt),m(()=>{c(jt,O.value)});let Mt=i(`div`,kt);o(kt,Mt),r(Mt,`flex flex-wrap gap-2`);let Nt=e(`rue:list:start`),Pt=e(`rue:list:end`);o(Mt,Nt),o(Mt,Pt);let Ft=new Map;m(()=>{Ft=te({items:Ke(_.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(e,t,a,s,l)=>{y(h(()=>{let t=n(),a=i(`span`,t);o(t,a),m(()=>{d(a,`key`,String(e))}),r(a,`badge badge-outline`);let s=j(a);return o(a,s),m(()=>{c(s,e)}),t}),t,a)}})});let It=i(`rue-light-signal`,St);o(St,It);let Lt=ne(It,()=>R);v(()=>{Lt()});let Rt=i(`div`,Q);o(Q,Rt),r(Rt,`grid gap-6`);let zt=i(`div`,Rt);o(Rt,zt),r(zt,`card bg-base-100 shadow border border-base-300`);let Bt=i(`div`,zt);o(zt,Bt),r(Bt,`card-body gap-4`);let Vt=i(`div`,Bt);o(Bt,Vt),r(Vt,`flex items-center justify-between gap-3`);let Ht=i(`h3`,Vt);o(Vt,Ht),r(Ht,`card-title text-lg`),o(Ht,l(`运行时诊断`));let Ut=i(`span`,Vt);o(Vt,Ut),r(Ut,`badge badge-primary badge-outline`),o(Ut,l(`nonce / styles / mode`));let $=i(`ul`,Bt);o(Bt,$),r($,`list bg-base-100 rounded-box`);let Wt=i(`li`,$);o($,Wt),r(Wt,`list-row`);let Gt=i(`div`,Wt);o(Wt,Gt),r(Gt,`font-medium`),o(Gt,l(`shadow style tags`));let Kt=i(`div`,Wt);o(Wt,Kt),r(Kt,`text-right`);let qt=j(Kt);o(Kt,qt),m(()=>{c(qt,F.value)});let Jt=i(`li`,$);o($,Jt),r(Jt,`list-row`);let Yt=i(`div`,Jt);o(Jt,Yt),r(Yt,`font-medium`),o(Yt,l(`shadow nonce`));let Xt=i(`div`,Jt);o(Jt,Xt),r(Xt,`text-right break-all`);let Zt=j(Xt);o(Xt,Zt),m(()=>{c(Zt,P.value)});let Qt=i(`li`,$);o($,Qt),r(Qt,`list-row`);let $t=i(`div`,Qt);o(Qt,$t),r($t,`font-medium`),o($t,l(`light style tags`));let en=i(`div`,Qt);o(Qt,en),r(en,`text-right`);let tn=j(en);o(en,tn),m(()=>{c(tn,I.value)});let nn=i(`li`,$);o($,nn),r(nn,`list-row`);let rn=i(`div`,nn);o(nn,rn),r(rn,`font-medium`),o(rn,l(`hook 期望`));let an=i(`div`,nn);o(nn,an),r(an,`text-right`),o(an,l(`shadow / light`));let on=i(`div`,Rt);o(Rt,on),r(on,`card bg-base-100 shadow border border-base-300`);let sn=i(`div`,on);o(on,sn),r(sn,`card-body gap-4`);let cn=i(`div`,sn);o(sn,cn),r(cn,`flex items-center justify-between gap-3`);let ln=i(`h3`,cn);o(cn,ln),r(ln,`card-title text-lg`),o(ln,l(`事件桥接日志`));let un=i(`button`,cn);o(cn,un),r(un,`btn btn-sm btn-ghost`),a(un,`click`,fe),o(un,l(`清空`));let dn=i(`div`,sn);o(sn,dn),r(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=e(`rue:slot:anchor`);o(dn,fn),m(()=>{let t=N.value.length?h(()=>{let t=n(),a=e(`rue:list:start`),s=e(`rue:list:end`);o(t,a),o(t,s);let c=new Map;return m(()=>{c=te({items:N.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:c,parent:a.parentNode,before:s,singleRoot:!0,start:a,renderItem:(t,a,s,c,l)=>{y(h(()=>{let a=n(),s=i(`div`,a);o(a,s),m(()=>{d(s,`key`,String(`${t.name}-${t.at}-${l}`))}),r(s,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let c=i(`div`,s);o(s,c),r(c,`flex items-center justify-between gap-3 text-sm`);let u=i(`div`,c);o(c,u),r(u,`flex items-center gap-2`);let f=i(`span`,u);o(u,f),m(()=>{r(f,String(`badge ${t.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let p=e(`rue:slot:anchor`);o(f,p),m(()=>{let e=t.source;A(()=>y(e,f,p))});let h=i(`span`,u);o(u,h),r(h,`font-medium`);let g=e(`rue:slot:anchor`);o(h,g),m(()=>{let e=t.name;A(()=>y(e,h,g))});let _=i(`span`,c);o(c,_),r(_,`text-base-content/50`);let v=e(`rue:slot:anchor`);o(_,v),m(()=>{let e=t.at;A(()=>y(e,_,v))});let b=i(`pre`,s);o(s,b),r(b,`mt-2 text-xs whitespace-pre-wrap break-words`);let x=e(`rue:slot:anchor`);return o(b,x),m(()=>{let e=t.detail;A(()=>y(e,b,x))}),a}),a,s)}})}),t}):h(()=>{let e=n(),t=i(`div`,e);o(e,t),r(t,`alert alert-soft`);let a=i(`span`,t);return o(t,a),o(a,l(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),e});A(()=>y(t,dn,fn))});let pn=i(`div`,Q);o(Q,pn),r(pn,`grid gap-6`);let mn=i(`div`,pn);o(pn,mn),r(mn,`card bg-base-100 shadow border border-base-300`);let hn=i(`div`,mn);o(mn,hn),r(hn,`card-body gap-3`);let gn=i(`h3`,hn);o(hn,gn),r(gn,`card-title text-lg`),o(gn,l(`shadow host.props 快照`));let _n=i(`pre`,hn);o(hn,_n),r(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=e(`rue:slot:anchor`);o(_n,vn),m(()=>{let e=Ge(oe());A(()=>y(e,_n,vn))});let yn=i(`div`,pn);o(pn,yn),r(yn,`card bg-base-100 shadow border border-base-300`);let bn=i(`div`,yn);o(yn,bn),r(bn,`card-body gap-3`);let xn=i(`h3`,bn);o(bn,xn),r(xn,`card-title text-lg`),o(xn,l(`light host.props 快照`));let Sn=i(`pre`,bn);o(bn,Sn),r(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=e(`rue:slot:anchor`);o(Sn,Cn),m(()=>{let e=Ge(z());A(()=>y(e,Sn,Cn))});let wn=i(`div`,x);o(x,wn),m(()=>{r(wn,String(s.value===`code`?`mt-4`:`hidden`))});let Tn=i(`div`,wn);o(wn,Tn),r(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=i(`div`,Tn);o(Tn,En),r(En,`card-body p-0`);let Dn=e(`rue:component:anchor`);return o(En,Dn),m(()=>{let e=k(ie,{className:`h-full`,lang:`tsx`,code:it});A(()=>y(e,En,Dn))}),x})}),C,w),C})};export{at as default};
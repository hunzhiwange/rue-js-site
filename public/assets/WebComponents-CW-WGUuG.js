import{$ as e,$t as t,Bt as n,F as r,Gt as i,I as a,M as o,Vt as s,X as c,Xt as l,Yt as u,Z as d,_ as f,ct as p,et as m,g as h,gt as g,ht as _,i as v,l as y,lt as b,mt as ee,n as te,nt as x,o as S,r as C,rt as w,t as T,tt as E,ut as D,v as ne,vt as re,yt as O}from"./vapor-runtime-CKrmRMZX.js";import{a as k,n as ie,t as ae}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as oe}from"./useApp-BxmWHMth.js";import{t as se}from"./Code-D5UqTwV6.js";import{r as ce}from"./SidebarPlaygroundExample-D2vGHFCu.js";var A=new Set([`data-rue-app`]),j=new WeakMap,M=new WeakMap,N=new WeakMap,P=new WeakMap,F=new WeakMap,le=new WeakMap,I=new WeakMap,L=new WeakMap,R=[],z=null,ue=()=>R.length>0?R[R.length-1]:z,B=(e,t)=>{z=e,R.push(e);try{return t()}finally{R.pop()}},V=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return I.get(e)??null},H=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return L.get(e)??null},de=()=>{let e=ue();return e?e.host:V(ne())},fe=()=>{let e=ue();return e?e.shadowRoot:H(ne())},U=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},pe=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),me=e=>{let t={};for(let n of e.getAttributeNames())A.has(n)||(t[pe(n)]=e.getAttribute(n));return t},W=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},he=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},G=e=>({...me(e),...W(e),...N.get(e)}),ge=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},_e=e=>{let t={};return Object.defineProperty(t,re,{configurable:!0,enumerable:!0,value:ge(e)}),s(t)},ve=e=>N.get(e)??{},K=(e,t)=>{N.set(e,he(t))},ye=e=>P.get(e)??null,be=(e,t)=>{if(t){P.set(e,t);return}P.delete(e)},q=(e,t)=>{if(t){F.set(e,t);return}F.delete(e)},xe=e=>{let t=F.get(e);t&&(t.value+=1)},Se=e=>{let t=P.get(e);if(!t)return;let n=G(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},J=e=>j.get(e)??null,Ce=(e,t)=>{if(t){j.set(e,t);return}j.delete(e)},we=e=>M.get(e)??null,Te=(e,t)=>{if(t){M.set(e,t);return}M.delete(e)},Ee=(e,t)=>{if(le.set(e,t),I.set(e,e),I.set(t,e),t instanceof ShadowRoot){L.set(e,t),L.set(t,t);return}L.delete(e),L.delete(t)},De=e=>{let t=le.get(e);t&&(I.delete(e),I.delete(t),L.delete(e),L.delete(t),le.delete(e))},Y=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Oe=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(Oe(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&A.has(e.attributeName);function je(i,a={}){let{shadowRoot:s=!0,styles:c,configureApp:u,nonce:p}=a,m=typeof i==`function`?i:e=>{let t=typeof i.setup==`function`?l(()=>i.setup(e)):e;return typeof i.render==`function`?i.render(t):[]},g=i=>{let a=Y(i,s),l=f(),g={host:i,shadowRoot:a instanceof ShadowRoot?a:null},_=_e(i),v=n(0);be(i,_),q(i,v),Se(i),Ee(i,a);let y=e=>B(g,()=>m(e)),b=oe(()=>l.vapor(()=>{let n=E(`span`);n.style.display=`contents`;let a=e(`rue:custom-element:anchor`);return d(n,a),t(()=>{v.value,r(l,()=>{o(h(y,{...ye(i)??{}}),n,a)})}),n}),l);u?.(b),Ce(i,b),b.mount(a),U(()=>{J(i)&&ke(a,c,p)})},_=e=>{J(e)?.unmount(),Ce(e,null),be(e,null),q(e,null),De(e)},v=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||Se(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),K(this,null)}get props(){return ve(this)}set props(e){K(this,e),Se(this)}connectedCallback(){J(this)||(g(this),v(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),_(this)}}}var Me=k(`ref:1:0`,()=>n(0)),Ne=k(`ref:1:1`,()=>n(0)),Pe=k(`ref:1:2`,()=>n(0)),Fe=k(`ref:1:3`,()=>n(0)),Ie=0,Le=0,Re=new WeakMap,ze=new WeakMap,Be=`rue-demo-nonce`,Ve=`rue-shadow-console`,He=`rue-light-signal`,Ue=[`
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
  `],Ge=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ke=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,qe=e=>X(e.config)?.compact===!0,Je=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},Ye=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>Number(X(e.metrics)?.events??0),Z=e=>Number(X(e.metrics)?.tags??0),Qe=e=>e,$e=()=>{let{host:n,shadowRoot:r,mountId:a}=k(`useSetup:0:0`,()=>l(()=>{let e=de();return{host:e,shadowRoot:fe(),mountId:Xe(e)}}));return y(o=>{let s=E(`p`,o);D(s,`lightMeta`),d(s,x(`实例 #`));let c=e(`rue:slot:anchor`);d(s,c),t(()=>{let e=a;i(()=>S(e,s,c))}),d(s,x(` · `));let l=e(`rue:slot:anchor`);d(s,l),t(()=>{let e=n?.tagName.toLowerCase()??`unknown-host`;i(()=>S(e,s,l))}),d(s,x(` ·`));let u=e(`rue:slot:anchor`);d(s,u),t(()=>{i(()=>S(` `,s,u))}),d(s,x(` `));let f=e(`rue:slot:anchor`);return d(s,f),t(()=>{let e=r?`shadow-root`:`light-dom`;i(()=>S(e,s,f))}),s})},et=n=>{let{host:r,shadowRoot:o,emit:s,mountId:u,count:f,accent:h,panelTitle:_,tags:v,busy:b,meterWidth:te}=k(`useSetup:0:0:dup1`,()=>l(()=>{let e=de(),t=fe(),r=k(`computed:1:4`,()=>O(()=>a(n))),i=Ye(e),o=k(`computed:1:5`,()=>O(()=>Number(n.count??0))),s=o;return{host:e,shadowRoot:t,emit:r,mountId:i,count:o,accent:k(`computed:1:6`,()=>O(()=>String(n.accent??`teal`))),panelTitle:k(`computed:1:7`,()=>O(()=>String(n.panelTitle??`Shadow console`))),tags:k(`computed:1:8`,()=>O(()=>Array.isArray(n.tags)?n.tags:[])),busy:k(`computed:1:9`,()=>O(()=>n.busy===!0)),meterWidth:k(`computed:1:10`,()=>O(()=>`${Math.max(8,Math.min(s.get()*9,100))}%`))}}));return y(a=>{let l=E(`article`,a);t(()=>{D(l,`frame ${qe(n)?`compact`:``}`)}),t(()=>{p(l,`data-accent`,String(h.get()))}),t(()=>{p(l,`data-busy`,String(b.get()?`yes`:`no`))});let C=E(`header`,l);d(l,C),D(C,`hero`);let T=E(`div`,C);d(C,T);let ne=E(`p`,T);d(T,ne),D(ne,`eyebrow`),d(ne,x(`Shadow Root / Slot / CustomEvent`));let re=E(`h2`,T);d(T,re),D(re,`title`);let O=e(`rue:slot:anchor`);d(re,O),t(()=>{let e=_.get();i(()=>S(e,re,O))});let k=E(`p`,T);d(T,k),D(k,`subtitle`),d(k,x(`实例 #`));let ae=e(`rue:slot:anchor`);d(k,ae),t(()=>{let e=u;i(()=>S(e,k,ae))}),d(k,x(` · `));let oe=w(k);d(k,oe),t(()=>{g(oe,r?.tagName.toLowerCase()??`unknown-host`)}),d(k,x(` ·`));let se=w(k);d(k,se),g(se,` `),d(k,x(` `));let ce=w(k);d(k,ce),t(()=>{g(ce,o?`shadow-root 已开启`:`light-dom`)});let A=E(`div`,C);d(C,A),D(A,`actions`);let j=E(`button`,A);d(A,j),p(j,`type`,`button`),D(j,`button primary`),c(j,`click`,()=>{s.get()(`save`,{mountId:u,panelTitle:_.get(),count:f.get(),tags:v.get(),busy:b.get()},{host:r?.tagName.toLowerCase()??`unknown`,rootMode:o?`shadow`:`light`})}),d(j,x(`派发 save`));let M=E(`button`,A);d(A,M),p(M,`type`,`button`),D(M,`button`),c(M,`click`,()=>{s.get()(`pulse`,f.get()+1,h.get())}),d(M,x(`派发 pulse`));let N=E(`div`,l);d(l,N),D(N,`grid`);let P=E(`section`,N);d(N,P),D(P,`panel`);let F=E(`div`,P);d(P,F),D(F,`metricValue`);let le=e(`rue:slot:anchor`);d(F,le),t(()=>{let e=f.get();i(()=>S(e,F,le))});let I=E(`div`,P);d(P,I),D(I,`metricLabel`),d(I,x(`这个数值来自宿主上的 el.props.count`));let L=E(`div`,P);d(P,L),D(L,`meter`);let R=E(`div`,L);d(L,R),D(R,`meterFill`),t(()=>{ee(R,{width:te.get()})});let z=E(`div`,P);d(P,z),D(z,`chips`);let ue=e(`rue:slot:anchor`);d(z,ue),t(()=>{let n=v.get().length?y(()=>{let n=m(),r=e(`rue:list:start`),i=e(`rue:list:end`);d(n,r),d(n,i);let a=new Map;return t(()=>{a=ie({items:v.get()||[],getKey:(e,t)=>e,elements:a,parent:r.parentNode,before:i,singleRoot:!0,trackIndex:!1,start:r,renderItem:(e,n,r,i,a)=>{S(y(()=>{let n=m(),r=E(`span`,n);d(n,r),t(()=>{p(r,`key`,String(e))}),D(r,`chip`);let i=w(r);return d(r,i),t(()=>{g(i,e)}),n}),n,r)}})}),n}):y(()=>{let e=m(),t=E(`span`,e);return d(e,t),D(t,`chip muted`),d(t,x(`暂无 tags`)),e});i(()=>S(n,z,ue))});let B=E(`section`,N);d(N,B),D(B,`panel`);let V=E(`p`,B);d(B,V),D(V,`slotTitle`),d(V,x(`命名 Slot`));let H=E(`slot`,B);d(B,H),p(H,`name`,`meta`);let de=E(`div`,B);d(B,de),ee(de,{height:`12px`});let fe=E(`p`,B);d(B,fe),D(fe,`slotTitle`),d(fe,x(`默认 Slot`)),d(B,E(`slot`,B));let U=E(`footer`,l);d(l,U),D(U,`footer`);let pe=E(`span`,U);d(U,pe),d(pe,x(`preset: `));let me=e(`rue:slot:anchor`);d(pe,me),t(()=>{let e=Je(n);i(()=>S(e,pe,me))});let W=E(`span`,U);d(U,W);let he=w(W);d(W,he),t(()=>{g(he,b.get()?`后台同步中`:`空闲`)});let G=E(`span`,U);d(U,G);let ge=w(G);return d(G,ge),t(()=>{g(ge,qe(n)?`compact on`:`compact off`)}),l})},tt=n=>{let{emit:r,label:o,tone:s}=k(`useSetup:0:0:dup2`,()=>l(()=>({emit:k(`computed:1:11`,()=>O(()=>a(n))),label:k(`computed:1:12`,()=>O(()=>String(n.label??`Light DOM signal`))),tone:k(`computed:1:13`,()=>O(()=>String(n.tone??`teal`)))})));return y(a=>{let l=E(`div`,a);t(()=>{D(l,`lightShell tone-${s.get()}`)});let u=E(`div`,l);d(l,u);let f=E(`p`,u);d(u,f),D(f,`lightTitle`);let m=e(`rue:slot:anchor`);d(f,m),t(()=>{let e=o.get();i(()=>S(e,f,m))});let h=e(`rue:component:anchor`);d(u,h),S(T($e,{}),u,h);let g=E(`div`,l);d(l,g),D(g,`lightValue`);let _=e(`rue:slot:anchor`);d(g,_),t(()=>{let e=Ze(n);i(()=>S(e,g,_))}),d(g,x(` events / `));let v=e(`rue:slot:anchor`);d(g,v),t(()=>{let e=Z(n);i(()=>S(e,g,v))}),d(g,x(` tags`));let y=E(`button`,l);return d(l,y),p(y,`type`,`button`),D(y,`lightButton`),c(y,`click`,()=>{r.get()(`light-tap`,{label:o.get(),events:Ze(n),tags:Z(n)})}),d(y,x(`emit`)),l})},Q=je(et,{styles:Ue,nonce:Be,configureApp(){Me.value+=1}}),nt=je(tt,{shadowRoot:!1,styles:We,configureApp(){Ne.value+=1}}),rt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};rt(Ve,Q),rt(He,nt);var it=[`import { useCustomElement, useEmit, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = useEmit(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),at=()=>{let{activeTab:r,panelTitle:a,accent:o,count:s,tagInput:f,busy:h,compact:ee,activePreset:ne,slotNote:re,metaBadge:O,lightLabel:oe,eventLog:A,shadowNonce:j,shadowStyleCount:M,lightStyleCount:N,shadowHostRef:P,lightHostRef:F,shadowPropsPayload:le,lightPropsPayload:I,refreshDiagnostics:L,scheduleDiagnostics:R,syncShadowHost:z,syncLightHost:ue,syncHosts:B,pushEvent:V,bindCustomEvent:H,applyPreset:de,appendTag:fe,removeLastTag:U,clearTitleAttr:pe,clearEvents:me}=k(`useSetup:0:0:dup3`,()=>l(()=>{let e=k(`ref:1:14`,()=>n(`preview`)),t=k(`ref:1:15`,()=>n(`Ops Console / Native CE`)),r=k(`ref:1:16`,()=>n(`teal`)),i=k(`ref:1:17`,()=>n(7)),a=k(`ref:1:18`,()=>n(`shadow, events, slots, props`)),o=k(`ref:1:19`,()=>n(!1)),s=k(`ref:1:20`,()=>n(!1)),c=k(`ref:1:21`,()=>n(`ops`)),l=k(`ref:1:22`,()=>n(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),d=k(`ref:1:23`,()=>n(`SLA 99.99%`)),f=k(`ref:1:24`,()=>n(`Light DOM signal`)),p=k(`ref:1:25`,()=>n([])),m=k(`ref:1:26`,()=>n(`等待挂载`)),h=k(`ref:1:27`,()=>n(0)),g=k(`ref:1:28`,()=>n(0)),_=k(`useRef:1:29`,()=>u()),y=k(`useRef:1:30`,()=>u()),b=()=>({count:i.value,tags:Ke(a.value),config:{compact:s.value,preset:c.value},busy:o.value}),ee=()=>({metrics:{events:p.value.length,tags:Ke(a.value).length,busy:o.value}}),te=()=>{let e=_.current,t=y.current;h.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,m.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,g.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},x=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{te()})})},S=()=>{let e=_.current;if(!e)return;let n=t.value.trim();n?e.setAttribute(`panel-title`,n):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,r.value),e.props=b()},w=()=>{let e=y.current;if(!e)return;let t=f.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Qe(r.value)),e.props=ee()},T=()=>{S(),w(),x()},E=(e,t,n)=>{p.value=[{source:e,name:t,detail:Ge(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...p.value].slice(0,8),w(),x()},D=(e,t,n)=>{if(!e)return()=>{};let r=e=>{E(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return C(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{T(),e=D(_.current,`save`,`shadow`),t=D(_.current,`pulse`,`shadow`),n=D(y.current,`light-tap`,`light`),x()}),v(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:r,count:i,tagInput:a,busy:o,compact:s,activePreset:c,slotNote:l,metaBadge:d,lightLabel:f,eventLog:p,shadowNonce:m,shadowStyleCount:h,lightStyleCount:g,shadowHostRef:_,lightHostRef:y,shadowPropsPayload:b,lightPropsPayload:ee,refreshDiagnostics:te,scheduleDiagnostics:x,syncShadowHost:S,syncLightHost:w,syncHosts:T,pushEvent:E,bindCustomEvent:D,applyPreset:e=>{c.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,r.value=`teal`,i.value=7,a.value=`shadow, events, slots, props`,l.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,d.value=`SLA 99.99%`,f.value=`Light DOM signal`,o.value=!1,s.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,r.value=`amber`,i.value=11,a.value=`checkout, fulfillment, analytics, queue`,l.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,d.value=`AOV +18%`,f.value=`Revenue pulse`,o.value=!1,s.value=!0):(t.value=`Incident Bridge / P1`,r.value=`rose`,i.value=13,a.value=`incident, pager, bridge, rollback`,l.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,d.value=`P1 ongoing`,f.value=`War-room heartbeat`,o.value=!0,s.value=!1),T()},appendTag:()=>{let e=Ke(a.value);e.push(`tag-${e.length+1}`),a.value=e.join(`, `),T()},removeLastTag:()=>{let e=Ke(a.value);e.pop(),a.value=e.join(`, `),T()},clearTitleAttr:()=>{t.value=``,T()},clearEvents:()=>{p.value=[],w(),x()}}}));return y(n=>{let l=m(),u=e(`rue:component:anchor`);return d(l,u),S(T(ce,{children:y(()=>{let n=m(),l=E(`h1`,n);d(n,l),D(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,x(`原生 Web Components`));let u=E(`p`,n);d(n,u),D(u,`text-base-content/70 max-w-4xl leading-7`),d(u,x(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let v=E(`div`,n);d(n,v),p(v,`role`,`tablist`),D(v,`tabs tabs-box mt-4`);let C=E(`button`,v);d(v,C),p(C,`role`,`tab`),t(()=>{D(C,`tab ${r.value===`preview`?`tab-active`:``}`)}),c(C,`click`,()=>{r.value=`preview`}),d(C,x(`效果`));let k=E(`button`,v);d(v,k),p(k,`role`,`tab`),t(()=>{D(k,`tab ${r.value===`code`?`tab-active`:``}`)}),c(k,`click`,()=>{r.value=`code`}),d(k,x(`代码`));let ce=E(`div`,n);d(n,ce),t(()=>{D(ce,r.value===`preview`?`mt-4 space-y-6`:`hidden`)});let L=E(`div`,ce);d(ce,L),D(L,`grid gap-6 items-start`);let V=E(`div`,L);d(L,V),D(V,`card bg-base-100 shadow-xl border border-base-300`);let H=E(`div`,V);d(V,H),D(H,`card-body gap-5`);let W=E(`div`,H);d(H,W);let he=E(`p`,W);d(W,he),D(he,`text-xs uppercase tracking-[0.28em] text-base-content/45`),d(he,x(`Preset`));let G=E(`div`,W);d(W,G),D(G,`mt-3 flex w-full gap-2`);let ge=e(`rue:list:start`),_e=e(`rue:list:end`);d(G,ge),d(G,_e);let ve=new Map;t(()=>{ve=ie({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ve,parent:G,before:_e,singleRoot:!0,trackIndex:!1,start:ge,renderItem:(e,n,r,i,a)=>{S(y(()=>{let n=m(),r=E(`button`,n);d(n,r),t(()=>{p(r,`key`,String(e))}),t(()=>{D(r,`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${ne.value===e?`btn-primary`:`btn-outline`}`)}),c(r,`click`,()=>de(e));let i=w(r);return d(r,i),t(()=>{g(i,e)}),n}),n,r)}})});let K=E(`label`,H);d(H,K),D(K,`floating-label`);let ye=E(`input`,K);d(K,ye),D(ye,`input input-bordered w-full`),t(()=>{_(ye,a.value)}),c(ye,`input`,e=>{a.value=e.target.value,z(),R()});let be=E(`span`,K);d(K,be),d(be,x(`panel-title attribute`));let q=E(`label`,H);d(H,q),D(q,`floating-label`);let xe=E(`input`,q);d(q,xe),D(xe,`input input-bordered w-full`),t(()=>{_(xe,f.value)}),c(xe,`input`,e=>{f.value=e.target.value,B()});let Se=E(`span`,q);d(q,Se),d(Se,x(`host.props.tags（逗号分隔）`));let J=E(`label`,H);d(H,J),D(J,`floating-label`);let Ce=E(`input`,J);d(J,Ce),D(Ce,`input input-bordered w-full`),t(()=>{_(Ce,re.value)}),c(Ce,`input`,e=>{re.value=e.target.value});let we=E(`span`,J);d(J,we),d(we,x(`默认 slot 文案`));let Te=E(`div`,H);d(H,Te),D(Te,`grid gap-3 sm:grid-cols-2`);let Ee=E(`fieldset`,Te);d(Te,Ee),D(Ee,`fieldset`);let De=E(`legend`,Ee);d(Ee,De),D(De,`fieldset-legend`),d(De,x(`accent attribute`));let Y=E(`select`,Ee);d(Ee,Y),D(Y,`select select-bordered`),t(()=>{_(Y,o.value)}),c(Y,`change`,e=>{o.value=e.target.value,B()});let Oe=E(`option`,Y);d(Y,Oe),p(Oe,`value`,`teal`),d(Oe,x(`teal`));let ke=E(`option`,Y);d(Y,ke),p(ke,`value`,`amber`),d(ke,x(`amber`));let Ae=E(`option`,Y);d(Y,Ae),p(Ae,`value`,`rose`),d(Ae,x(`rose`));let je=E(`fieldset`,Te);d(Te,je),D(je,`fieldset`);let Ie=E(`legend`,je);d(je,Ie),D(Ie,`fieldset-legend`),d(Ie,x(`light label attribute`));let Le=E(`input`,je);d(je,Le),D(Le,`input input-bordered`),t(()=>{_(Le,oe.value)}),c(Le,`input`,e=>{oe.value=e.target.value,ue(),R()});let Re=E(`div`,H);d(H,Re);let ze=E(`div`,Re);d(Re,ze),D(ze,`flex items-center justify-between text-sm mb-2`);let Be=E(`span`,ze);d(ze,Be),d(Be,x(`host.props.count`));let Ve=E(`span`,ze);d(ze,Ve),D(Ve,`font-semibold`);let He=w(Ve);d(Ve,He),t(()=>{g(He,s.value)});let Ue=E(`input`,Re);d(Re,Ue),p(Ue,`type`,`range`),p(Ue,`min`,`1`),p(Ue,`max`,`15`),t(()=>{_(Ue,s.value)}),D(Ue,`range range-primary`),c(Ue,`input`,e=>{s.value=Number(e.target.value),z(),R()});let We=E(`div`,H);d(H,We),D(We,`grid gap-3 sm:grid-cols-2`);let X=E(`label`,We);d(We,X),D(X,`label cursor-pointer justify-start gap-3`);let qe=E(`input`,X);d(X,qe),p(qe,`type`,`checkbox`),D(qe,`toggle toggle-primary`),t(()=>{b(qe,!!h.value)}),c(qe,`change`,e=>{h.value=e.target.checked,B()});let Je=E(`span`,X);d(X,Je),D(Je,`label-text`),d(Je,x(`host.props.busy`));let Ye=E(`label`,We);d(We,Ye),D(Ye,`label cursor-pointer justify-start gap-3`);let Xe=E(`input`,Ye);d(Ye,Xe),p(Xe,`type`,`checkbox`),D(Xe,`toggle toggle-secondary`),t(()=>{b(Xe,!!ee.value)}),c(Xe,`change`,e=>{ee.value=e.target.checked,z(),R()});let Ze=E(`span`,Ye);d(Ye,Ze),D(Ze,`label-text`),d(Ze,x(`host.props.config.compact`));let Z=E(`div`,H);d(H,Z),D(Z,`grid gap-2 sm:grid-cols-2`);let Qe=E(`button`,Z);d(Z,Qe),D(Qe,`btn btn-primary`),c(Qe,`click`,fe),d(Qe,x(`追加 tag`));let $e=E(`button`,Z);d(Z,$e),D($e,`btn btn-outline`),c($e,`click`,U),d($e,x(`删除最后一个 tag`));let et=E(`button`,Z);d(Z,et),D(et,`btn btn-secondary`),c(et,`click`,()=>{s.value+=2,z(),R()}),d(et,x(`count + 2`));let tt=E(`button`,Z);d(Z,tt),D(tt,`btn btn-ghost`),c(tt,`click`,pe),d(tt,x(`移除 title attribute`));let Q=E(`div`,L);d(L,Q),D(Q,`space-y-6`);let nt=E(`div`,Q);d(Q,nt),D(nt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=E(`div`,nt);d(nt,rt),D(rt,`card-body gap-5`);let at=E(`div`,rt);d(rt,at),D(at,`flex flex-wrap items-center justify-between gap-4`);let ot=E(`div`,at);d(at,ot);let st=E(`p`,ot);d(ot,st),D(st,`text-xs uppercase tracking-[0.28em] text-base-content/45`),d(st,x(`Live Preview`));let ct=E(`h2`,ot);d(ot,ct),D(ct,`text-2xl font-semibold mt-2`),d(ct,x(`Shadow + Light 双宿主联动`));let lt=E(`div`,at);d(at,lt),D(lt,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=E(`div`,lt);d(lt,ut),D(ut,`stat py-3 px-4`);let dt=E(`div`,ut);d(ut,dt),D(dt,`stat-title`),d(dt,x(`shadow configureApp`));let ft=E(`div`,ut);d(ut,ft),D(ft,`stat-value text-lg`);let pt=w(ft);d(ft,pt),t(()=>{g(pt,Me.value)});let mt=E(`div`,lt);d(lt,mt),D(mt,`stat py-3 px-4`);let ht=E(`div`,mt);d(mt,ht),D(ht,`stat-title`),d(ht,x(`light configureApp`));let gt=E(`div`,mt);d(mt,gt),D(gt,`stat-value text-lg`);let _t=w(gt);d(gt,_t),t(()=>{g(_t,Ne.value)});let vt=E(`div`,lt);d(lt,vt),D(vt,`stat py-3 px-4`);let yt=E(`div`,vt);d(vt,yt),D(yt,`stat-title`),d(yt,x(`mounted instances`));let bt=E(`div`,vt);d(vt,bt),D(bt,`stat-value text-lg`);let xt=w(bt);d(bt,xt),t(()=>{g(xt,Pe.value+Fe.value)});let St=E(`div`,rt);d(rt,St),D(St,`space-y-4`);let Ct=E(`rue-shadow-console`,St);d(St,Ct);let wt=ae(Ct,()=>P);te(()=>{wt()});let Tt=E(`div`,Ct);d(Ct,Tt),p(Tt,`slot`,`meta`);let Et=E(`span`,Tt);d(Tt,Et),D(Et,`status status-success`);let Dt=E(`span`,Tt);d(Tt,Dt);let Ot=w(Dt);d(Dt,Ot),t(()=>{g(Ot,O.value)});let kt=E(`div`,Ct);d(Ct,kt),D(kt,`space-y-3 text-sm text-base-content/80`);let At=E(`p`,kt);d(kt,At);let jt=w(At);d(At,jt),t(()=>{g(jt,re.value)});let Mt=E(`div`,kt);d(kt,Mt),D(Mt,`flex flex-wrap gap-2`);let Nt=e(`rue:list:start`),Pt=e(`rue:list:end`);d(Mt,Nt),d(Mt,Pt);let Ft=new Map;t(()=>{Ft=ie({items:Ke(f.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(e,n,r,i,a)=>{S(y(()=>{let n=m(),r=E(`span`,n);d(n,r),t(()=>{p(r,`key`,String(e))}),D(r,`badge badge-outline`);let i=w(r);return d(r,i),t(()=>{g(i,e)}),n}),n,r)}})});let It=E(`rue-light-signal`,St);d(St,It);let Lt=ae(It,()=>F);te(()=>{Lt()});let Rt=E(`div`,Q);d(Q,Rt),D(Rt,`grid gap-6`);let zt=E(`div`,Rt);d(Rt,zt),D(zt,`card bg-base-100 shadow border border-base-300`);let Bt=E(`div`,zt);d(zt,Bt),D(Bt,`card-body gap-4`);let Vt=E(`div`,Bt);d(Bt,Vt),D(Vt,`flex items-center justify-between gap-3`);let Ht=E(`h3`,Vt);d(Vt,Ht),D(Ht,`card-title text-lg`),d(Ht,x(`运行时诊断`));let Ut=E(`span`,Vt);d(Vt,Ut),D(Ut,`badge badge-primary badge-outline`),d(Ut,x(`nonce / styles / mode`));let $=E(`ul`,Bt);d(Bt,$),D($,`list bg-base-100 rounded-box`);let Wt=E(`li`,$);d($,Wt),D(Wt,`list-row`);let Gt=E(`div`,Wt);d(Wt,Gt),D(Gt,`font-medium`),d(Gt,x(`shadow style tags`));let Kt=E(`div`,Wt);d(Wt,Kt),D(Kt,`text-right`);let qt=w(Kt);d(Kt,qt),t(()=>{g(qt,M.value)});let Jt=E(`li`,$);d($,Jt),D(Jt,`list-row`);let Yt=E(`div`,Jt);d(Jt,Yt),D(Yt,`font-medium`),d(Yt,x(`shadow nonce`));let Xt=E(`div`,Jt);d(Jt,Xt),D(Xt,`text-right break-all`);let Zt=w(Xt);d(Xt,Zt),t(()=>{g(Zt,j.value)});let Qt=E(`li`,$);d($,Qt),D(Qt,`list-row`);let $t=E(`div`,Qt);d(Qt,$t),D($t,`font-medium`),d($t,x(`light style tags`));let en=E(`div`,Qt);d(Qt,en),D(en,`text-right`);let tn=w(en);d(en,tn),t(()=>{g(tn,N.value)});let nn=E(`li`,$);d($,nn),D(nn,`list-row`);let rn=E(`div`,nn);d(nn,rn),D(rn,`font-medium`),d(rn,x(`hook 期望`));let an=E(`div`,nn);d(nn,an),D(an,`text-right`),d(an,x(`shadow / light`));let on=E(`div`,Rt);d(Rt,on),D(on,`card bg-base-100 shadow border border-base-300`);let sn=E(`div`,on);d(on,sn),D(sn,`card-body gap-4`);let cn=E(`div`,sn);d(sn,cn),D(cn,`flex items-center justify-between gap-3`);let ln=E(`h3`,cn);d(cn,ln),D(ln,`card-title text-lg`),d(ln,x(`事件桥接日志`));let un=E(`button`,cn);d(cn,un),D(un,`btn btn-sm btn-ghost`),c(un,`click`,me),d(un,x(`清空`));let dn=E(`div`,sn);d(sn,dn),D(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=e(`rue:slot:anchor`);d(dn,fn),t(()=>{let n=A.value.length?y(()=>{let n=m(),r=e(`rue:list:start`),a=e(`rue:list:end`);d(n,r),d(n,a);let o=new Map;return t(()=>{o=ie({items:A.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:o,parent:r.parentNode,before:a,singleRoot:!0,start:r,renderItem:(n,r,a,o,s)=>{S(y(()=>{let r=m(),a=E(`div`,r);d(r,a),t(()=>{p(a,`key`,String(`${n.name}-${n.at}-${s}`))}),D(a,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let o=E(`div`,a);d(a,o),D(o,`flex items-center justify-between gap-3 text-sm`);let c=E(`div`,o);d(o,c),D(c,`flex items-center gap-2`);let l=E(`span`,c);d(c,l),t(()=>{D(l,`badge ${n.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`)});let u=e(`rue:slot:anchor`);d(l,u),t(()=>{let e=n.source;i(()=>S(e,l,u))});let f=E(`span`,c);d(c,f),D(f,`font-medium`);let h=e(`rue:slot:anchor`);d(f,h),t(()=>{let e=n.name;i(()=>S(e,f,h))});let g=E(`span`,o);d(o,g),D(g,`text-base-content/50`);let _=e(`rue:slot:anchor`);d(g,_),t(()=>{let e=n.at;i(()=>S(e,g,_))});let v=E(`pre`,a);d(a,v),D(v,`mt-2 text-xs whitespace-pre-wrap break-words`);let y=e(`rue:slot:anchor`);return d(v,y),t(()=>{let e=n.detail;i(()=>S(e,v,y))}),r}),r,a)}})}),n}):y(()=>{let e=m(),t=E(`div`,e);d(e,t),D(t,`alert alert-soft`);let n=E(`span`,t);return d(t,n),d(n,x(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),e});i(()=>S(n,dn,fn))});let pn=E(`div`,Q);d(Q,pn),D(pn,`grid gap-6`);let mn=E(`div`,pn);d(pn,mn),D(mn,`card bg-base-100 shadow border border-base-300`);let hn=E(`div`,mn);d(mn,hn),D(hn,`card-body gap-3`);let gn=E(`h3`,hn);d(hn,gn),D(gn,`card-title text-lg`),d(gn,x(`shadow host.props 快照`));let _n=E(`pre`,hn);d(hn,_n),D(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=e(`rue:slot:anchor`);d(_n,vn),t(()=>{let e=Ge(le());i(()=>S(e,_n,vn))});let yn=E(`div`,pn);d(pn,yn),D(yn,`card bg-base-100 shadow border border-base-300`);let bn=E(`div`,yn);d(yn,bn),D(bn,`card-body gap-3`);let xn=E(`h3`,bn);d(bn,xn),D(xn,`card-title text-lg`),d(xn,x(`light host.props 快照`));let Sn=E(`pre`,bn);d(bn,Sn),D(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=e(`rue:slot:anchor`);d(Sn,Cn),t(()=>{let e=Ge(I());i(()=>S(e,Sn,Cn))});let wn=E(`div`,n);d(n,wn),t(()=>{D(wn,r.value===`code`?`mt-4`:`hidden`)});let Tn=E(`div`,wn);d(wn,Tn),D(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=E(`div`,Tn);d(Tn,En),D(En,`card-body p-0`);let Dn=e(`rue:component:anchor`);return d(En,Dn),t(()=>{let e=T(se,{className:`h-full`,lang:`tsx`,code:it});i(()=>S(e,En,Dn))}),n})}),l,u),l})};export{at as default};
import{$ as e,Bt as t,F as n,I as r,Jt as i,M as a,Q as o,Qt as s,Wt as c,X as l,Y as u,Yt as d,_ as f,_t as p,ct as m,et as h,g,ht as _,i as v,l as y,lt as b,mt as x,n as ee,nt as S,o as C,pt as w,r as T,st as E,t as D,tt as O,v as k,vt as A,zt as j}from"./vapor-runtime-CXIalONM.js";import{a as M,n as te,t as ne}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as re}from"./useApp-DcZ6w5oj.js";import{t as ie}from"./Code-BIscIyEp.js";import{r as ae}from"./SidebarPlaygroundExample-CEz1fABX.js";var N=new Set([`data-rue-app`]),P=new WeakMap,F=new WeakMap,I=new WeakMap,L=new WeakMap,oe=new WeakMap,se=new WeakMap,R=new WeakMap,z=new WeakMap,B=[],V=null,ce=()=>B.length>0?B[B.length-1]:V,H=(e,t)=>{V=e,B.push(e);try{return t()}finally{B.pop()}},U=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return R.get(e)??null},W=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return z.get(e)??null},le=()=>{let e=ce();return e?e.host:U(k())},ue=()=>{let e=ce();return e?e.shadowRoot:W(k())},G=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},de=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),fe=e=>{let t={};for(let n of e.getAttributeNames())N.has(n)||(t[de(n)]=e.getAttribute(n));return t},K=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},pe=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},q=e=>({...fe(e),...K(e),...I.get(e)}),me=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},he=e=>{let n={};return Object.defineProperty(n,p,{configurable:!0,enumerable:!0,value:me(e)}),t(n)},ge=e=>I.get(e)??{},_e=(e,t)=>{I.set(e,pe(t))},ve=e=>L.get(e)??null,ye=(e,t)=>{if(t){L.set(e,t);return}L.delete(e)},be=(e,t)=>{if(t){oe.set(e,t);return}oe.delete(e)},xe=e=>{let t=oe.get(e);t&&(t.value+=1)},Se=e=>{let t=L.get(e);if(!t)return;let n=q(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&xe(e)},J=e=>P.get(e)??null,Ce=(e,t)=>{if(t){P.set(e,t);return}P.delete(e)},we=e=>F.get(e)??null,Te=(e,t)=>{if(t){F.set(e,t);return}F.delete(e)},Ee=(e,t)=>{if(se.set(e,t),R.set(e,e),R.set(t,e),t instanceof ShadowRoot){z.set(e,t),z.set(t,t);return}z.delete(e),z.delete(t)},De=e=>{let t=se.get(e);t&&(R.delete(e),R.delete(t),z.delete(e),z.delete(t),se.delete(e))},Y=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,Oe=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},ke=(e,t,n)=>{if(Oe(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},Ae=e=>e.type===`attributes`&&e.attributeName!=null&&N.has(e.attributeName);function je(e,t={}){let{shadowRoot:r=!0,styles:i,configureApp:c,nonce:u}=t,p=typeof e==`function`?e:t=>{let n=typeof e.setup==`function`?d(()=>e.setup(t)):t;return typeof e.render==`function`?e.render(n):[]},m=e=>{let t=Y(e,r),d=f(),m={host:e,shadowRoot:t instanceof ShadowRoot?t:null},_=he(e),v=j(0);ye(e,_),be(e,v),Se(e),Ee(e,t);let y=e=>H(m,()=>p(e)),b=re(()=>d.vapor(()=>{let t=h(`span`);t.style.display=`contents`;let r=o(`rue:custom-element:anchor`);return l(t,r),s(()=>{v.value,n(d,()=>{a(g(y,{...ve(e)??{}}),t,r)})}),t}),d);c?.(b),Ce(e,b),b.mount(t),G(()=>{J(e)&&ke(t,i,u)})},_=e=>{J(e)?.unmount(),Ce(e,null),ye(e,null),be(e,null),De(e)},v=e=>{if(typeof MutationObserver!=`function`)return;we(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(Ae)||Se(e)});t.observe(e,{attributes:!0}),Te(e,t)};return class extends HTMLElement{constructor(){super(),_e(this,null)}get props(){return ge(this)}set props(e){_e(this,e),Se(this)}connectedCallback(){J(this)||(m(this),v(this))}disconnectedCallback(){we(this)?.disconnect(),Te(this,null),_(this)}}}var Me=M(`ref:1:0`,()=>j(0)),Ne=M(`ref:1:1`,()=>j(0)),Pe=M(`ref:1:2`,()=>j(0)),Fe=M(`ref:1:3`,()=>j(0)),Ie=0,Le=0,Re=new WeakMap,ze=new WeakMap,Be=`rue-demo-nonce`,Ve=`rue-shadow-console`,He=`rue-light-signal`,Ue=[`
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
  `],Ge=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},Ke=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),X=e=>e&&typeof e==`object`?e:void 0,qe=e=>X(e.config)?.compact===!0,Je=e=>{let t=X(e.config)?.preset;return typeof t==`string`?t:`manual`},Ye=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Xe=e=>e?ze.get(e)||(Le+=1,Fe.value+=1,ze.set(e,Le),Le):0,Ze=e=>Number(X(e.metrics)?.events??0),Z=e=>Number(X(e.metrics)?.tags??0),Qe=e=>e,$e=()=>{let{host:e,shadowRoot:t,mountId:n}=M(`useSetup:0:0`,()=>d(()=>{let e=le();return{host:e,shadowRoot:ue(),mountId:Xe(e)}}));return y(r=>{let i=h(`p`,r);b(i,`lightMeta`),l(i,O(`实例 #`));let a=o(`rue:slot:anchor`);l(i,a),s(()=>{let e=n;c(()=>C(e,i,a))}),l(i,O(` · `));let u=o(`rue:slot:anchor`);l(i,u),s(()=>{let t=e?.tagName.toLowerCase()??`unknown-host`;c(()=>C(t,i,u))}),l(i,O(` ·`));let d=o(`rue:slot:anchor`);l(i,d),s(()=>{c(()=>C(` `,i,d))}),l(i,O(` `));let f=o(`rue:slot:anchor`);return l(i,f),s(()=>{let e=t?`shadow-root`:`light-dom`;c(()=>C(e,i,f))}),i})},et=t=>{let{host:n,shadowRoot:i,emit:a,mountId:f,count:p,accent:m,panelTitle:g,tags:v,busy:x,meterWidth:ee}=M(`useSetup:0:0:dup1`,()=>d(()=>{let e=le(),n=ue(),i=M(`computed:1:4`,()=>A(()=>r(t))),a=Ye(e),o=M(`computed:1:5`,()=>A(()=>Number(t.count??0))),s=o;return{host:e,shadowRoot:n,emit:i,mountId:a,count:o,accent:M(`computed:1:6`,()=>A(()=>String(t.accent??`teal`))),panelTitle:M(`computed:1:7`,()=>A(()=>String(t.panelTitle??`Shadow console`))),tags:M(`computed:1:8`,()=>A(()=>Array.isArray(t.tags)?t.tags:[])),busy:M(`computed:1:9`,()=>A(()=>t.busy===!0)),meterWidth:M(`computed:1:10`,()=>A(()=>`${Math.max(8,Math.min(s.get()*9,100))}%`))}}));return y(r=>{let d=h(`article`,r);s(()=>{b(d,`frame ${qe(t)?`compact`:``}`)}),s(()=>{E(d,`data-accent`,String(m.get()))}),s(()=>{E(d,`data-busy`,String(x.get()?`yes`:`no`))});let T=h(`header`,d);l(d,T),b(T,`hero`);let D=h(`div`,T);l(T,D);let k=h(`p`,D);l(D,k),b(k,`eyebrow`),l(k,O(`Shadow Root / Slot / CustomEvent`));let A=h(`h2`,D);l(D,A),b(A,`title`);let j=o(`rue:slot:anchor`);l(A,j),s(()=>{let e=g.get();c(()=>C(e,A,j))});let M=h(`p`,D);l(D,M),b(M,`subtitle`),l(M,O(`实例 #`));let ne=o(`rue:slot:anchor`);l(M,ne),s(()=>{let e=f;c(()=>C(e,M,ne))}),l(M,O(` · `));let re=S(M);l(M,re),s(()=>{_(re,n?.tagName.toLowerCase()??`unknown-host`)}),l(M,O(` ·`));let ie=S(M);l(M,ie),_(ie,` `),l(M,O(` `));let ae=S(M);l(M,ae),s(()=>{_(ae,i?`shadow-root 已开启`:`light-dom`)});let N=h(`div`,T);l(T,N),b(N,`actions`);let P=h(`button`,N);l(N,P),E(P,`type`,`button`),b(P,`button primary`),u(P,`click`,()=>{a.get()(`save`,{mountId:f,panelTitle:g.get(),count:p.get(),tags:v.get(),busy:x.get()},{host:n?.tagName.toLowerCase()??`unknown`,rootMode:i?`shadow`:`light`})}),l(P,O(`派发 save`));let F=h(`button`,N);l(N,F),E(F,`type`,`button`),b(F,`button`),u(F,`click`,()=>{a.get()(`pulse`,p.get()+1,m.get())}),l(F,O(`派发 pulse`));let I=h(`div`,d);l(d,I),b(I,`grid`);let L=h(`section`,I);l(I,L),b(L,`panel`);let oe=h(`div`,L);l(L,oe),b(oe,`metricValue`);let se=o(`rue:slot:anchor`);l(oe,se),s(()=>{let e=p.get();c(()=>C(e,oe,se))});let R=h(`div`,L);l(L,R),b(R,`metricLabel`),l(R,O(`这个数值来自宿主上的 el.props.count`));let z=h(`div`,L);l(L,z),b(z,`meter`);let B=h(`div`,z);l(z,B),b(B,`meterFill`),s(()=>{w(B,{width:ee.get()})});let V=h(`div`,L);l(L,V),b(V,`chips`);let ce=o(`rue:slot:anchor`);l(V,ce),s(()=>{let t=v.get().length?y(()=>{let t=e(),n=o(`rue:list:start`),r=o(`rue:list:end`);l(t,n),l(t,r);let i=new Map;return s(()=>{i=te({items:v.get()||[],getKey:(e,t)=>e,elements:i,parent:n.parentNode,before:r,singleRoot:!0,trackIndex:!1,start:n,renderItem:(t,n,r,i,a)=>{C(y(()=>{let n=e(),r=h(`span`,n);l(n,r),s(()=>{E(r,`key`,String(t))}),b(r,`chip`);let i=S(r);return l(r,i),s(()=>{_(i,t)}),n}),n,r)}})}),t}):y(()=>{let t=e(),n=h(`span`,t);return l(t,n),b(n,`chip muted`),l(n,O(`暂无 tags`)),t});c(()=>C(t,V,ce))});let H=h(`section`,I);l(I,H),b(H,`panel`);let U=h(`p`,H);l(H,U),b(U,`slotTitle`),l(U,O(`命名 Slot`));let W=h(`slot`,H);l(H,W),E(W,`name`,`meta`);let le=h(`div`,H);l(H,le),w(le,{height:`12px`});let ue=h(`p`,H);l(H,ue),b(ue,`slotTitle`),l(ue,O(`默认 Slot`)),l(H,h(`slot`,H));let G=h(`footer`,d);l(d,G),b(G,`footer`);let de=h(`span`,G);l(G,de),l(de,O(`preset: `));let fe=o(`rue:slot:anchor`);l(de,fe),s(()=>{let e=Je(t);c(()=>C(e,de,fe))});let K=h(`span`,G);l(G,K);let pe=S(K);l(K,pe),s(()=>{_(pe,x.get()?`后台同步中`:`空闲`)});let q=h(`span`,G);l(G,q);let me=S(q);return l(q,me),s(()=>{_(me,qe(t)?`compact on`:`compact off`)}),d})},tt=e=>{let{emit:t,label:n,tone:i}=M(`useSetup:0:0:dup2`,()=>d(()=>({emit:M(`computed:1:11`,()=>A(()=>r(e))),label:M(`computed:1:12`,()=>A(()=>String(e.label??`Light DOM signal`))),tone:M(`computed:1:13`,()=>A(()=>String(e.tone??`teal`)))})));return y(r=>{let a=h(`div`,r);s(()=>{b(a,`lightShell tone-${i.get()}`)});let d=h(`div`,a);l(a,d);let f=h(`p`,d);l(d,f),b(f,`lightTitle`);let p=o(`rue:slot:anchor`);l(f,p),s(()=>{let e=n.get();c(()=>C(e,f,p))});let m=o(`rue:component:anchor`);l(d,m),C(D($e,{}),d,m);let g=h(`div`,a);l(a,g),b(g,`lightValue`);let _=o(`rue:slot:anchor`);l(g,_),s(()=>{let t=Ze(e);c(()=>C(t,g,_))}),l(g,O(` events / `));let v=o(`rue:slot:anchor`);l(g,v),s(()=>{let t=Z(e);c(()=>C(t,g,v))}),l(g,O(` tags`));let y=h(`button`,a);return l(a,y),E(y,`type`,`button`),b(y,`lightButton`),u(y,`click`,()=>{t.get()(`light-tap`,{label:n.get(),events:Ze(e),tags:Z(e)})}),l(y,O(`emit`)),a})},Q=je(et,{styles:Ue,nonce:Be,configureApp(){Me.value+=1}}),nt=je(tt,{shadowRoot:!1,styles:We,configureApp(){Ne.value+=1}}),rt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};rt(Ve,Q),rt(He,nt);var it=[`import { useCustomElement, useEmit, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = useEmit(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),at=()=>{let{activeTab:t,panelTitle:n,accent:r,count:a,tagInput:f,busy:p,compact:g,activePreset:w,slotNote:k,metaBadge:A,lightLabel:re,eventLog:N,shadowNonce:P,shadowStyleCount:F,lightStyleCount:I,shadowHostRef:L,lightHostRef:oe,shadowPropsPayload:se,lightPropsPayload:R,refreshDiagnostics:z,scheduleDiagnostics:B,syncShadowHost:V,syncLightHost:ce,syncHosts:H,pushEvent:U,bindCustomEvent:W,applyPreset:le,appendTag:ue,removeLastTag:G,clearTitleAttr:de,clearEvents:fe}=M(`useSetup:0:0:dup3`,()=>d(()=>{let e=M(`ref:1:14`,()=>j(`preview`)),t=M(`ref:1:15`,()=>j(`Ops Console / Native CE`)),n=M(`ref:1:16`,()=>j(`teal`)),r=M(`ref:1:17`,()=>j(7)),a=M(`ref:1:18`,()=>j(`shadow, events, slots, props`)),o=M(`ref:1:19`,()=>j(!1)),s=M(`ref:1:20`,()=>j(!1)),c=M(`ref:1:21`,()=>j(`ops`)),l=M(`ref:1:22`,()=>j(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),u=M(`ref:1:23`,()=>j(`SLA 99.99%`)),d=M(`ref:1:24`,()=>j(`Light DOM signal`)),f=M(`ref:1:25`,()=>j([])),p=M(`ref:1:26`,()=>j(`等待挂载`)),m=M(`ref:1:27`,()=>j(0)),h=M(`ref:1:28`,()=>j(0)),g=M(`useRef:1:29`,()=>i()),_=M(`useRef:1:30`,()=>i()),y=()=>({count:r.value,tags:Ke(a.value),config:{compact:s.value,preset:c.value},busy:o.value}),b=()=>({metrics:{events:f.value.length,tags:Ke(a.value).length,busy:o.value}}),x=()=>{let e=g.current,t=_.current;m.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,p.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,h.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},ee=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{x()})})},S=()=>{let e=g.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=y()},C=()=>{let e=_.current;if(!e)return;let t=d.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Qe(n.value)),e.props=b()},w=()=>{S(),C(),ee()},E=(e,t,n)=>{f.value=[{source:e,name:t,detail:Ge(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...f.value].slice(0,8),C(),ee()},D=(e,t,n)=>{if(!e)return()=>{};let r=e=>{E(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return T(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{w(),e=D(g.current,`save`,`shadow`),t=D(g.current,`pulse`,`shadow`),n=D(_.current,`light-tap`,`light`),ee()}),v(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:a,busy:o,compact:s,activePreset:c,slotNote:l,metaBadge:u,lightLabel:d,eventLog:f,shadowNonce:p,shadowStyleCount:m,lightStyleCount:h,shadowHostRef:g,lightHostRef:_,shadowPropsPayload:y,lightPropsPayload:b,refreshDiagnostics:x,scheduleDiagnostics:ee,syncShadowHost:S,syncLightHost:C,syncHosts:w,pushEvent:E,bindCustomEvent:D,applyPreset:e=>{c.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,a.value=`shadow, events, slots, props`,l.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,u.value=`SLA 99.99%`,d.value=`Light DOM signal`,o.value=!1,s.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,a.value=`checkout, fulfillment, analytics, queue`,l.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,u.value=`AOV +18%`,d.value=`Revenue pulse`,o.value=!1,s.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,a.value=`incident, pager, bridge, rollback`,l.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,u.value=`P1 ongoing`,d.value=`War-room heartbeat`,o.value=!0,s.value=!1),w()},appendTag:()=>{let e=Ke(a.value);e.push(`tag-${e.length+1}`),a.value=e.join(`, `),w()},removeLastTag:()=>{let e=Ke(a.value);e.pop(),a.value=e.join(`, `),w()},clearTitleAttr:()=>{t.value=``,w()},clearEvents:()=>{f.value=[],C(),ee()}}}));return y(i=>{let d=e(),v=o(`rue:component:anchor`);return l(d,v),C(D(ae,{children:y(()=>{let i=e(),d=h(`h1`,i);l(i,d),b(d,`text-5xl font-semibold mb-4 md:mb-4`),l(d,O(`原生 Web Components`));let v=h(`p`,i);l(i,v),b(v,`text-base-content/70 max-w-4xl leading-7`),l(v,O(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let T=h(`div`,i);l(i,T),E(T,`role`,`tablist`),b(T,`tabs tabs-box mt-4`);let j=h(`button`,T);l(T,j),E(j,`role`,`tab`),s(()=>{b(j,`tab ${t.value===`preview`?`tab-active`:``}`)}),u(j,`click`,()=>{t.value=`preview`}),l(j,O(`效果`));let M=h(`button`,T);l(T,M),E(M,`role`,`tab`),s(()=>{b(M,`tab ${t.value===`code`?`tab-active`:``}`)}),u(M,`click`,()=>{t.value=`code`}),l(M,O(`代码`));let ae=h(`div`,i);l(i,ae),s(()=>{b(ae,t.value===`preview`?`mt-4 space-y-6`:`hidden`)});let z=h(`div`,ae);l(ae,z),b(z,`grid gap-6 items-start`);let U=h(`div`,z);l(z,U),b(U,`card bg-base-100 shadow-xl border border-base-300`);let W=h(`div`,U);l(U,W),b(W,`card-body gap-5`);let K=h(`div`,W);l(W,K);let pe=h(`p`,K);l(K,pe),b(pe,`text-xs uppercase tracking-[0.28em] text-base-content/45`),l(pe,O(`Preset`));let q=h(`div`,K);l(K,q),b(q,`mt-3 flex w-full gap-2`);let me=o(`rue:list:start`),he=o(`rue:list:end`);l(q,me),l(q,he);let ge=new Map;s(()=>{ge=te({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ge,parent:q,before:he,singleRoot:!0,trackIndex:!1,start:me,renderItem:(t,n,r,i,a)=>{C(y(()=>{let n=e(),r=h(`button`,n);l(n,r),s(()=>{E(r,`key`,String(t))}),s(()=>{b(r,`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${w.value===t?`btn-primary`:`btn-outline`}`)}),u(r,`click`,()=>le(t));let i=S(r);return l(r,i),s(()=>{_(i,t)}),n}),n,r)}})});let _e=h(`label`,W);l(W,_e),b(_e,`floating-label`);let ve=h(`input`,_e);l(_e,ve),b(ve,`input input-bordered w-full`),s(()=>{x(ve,n.value)}),u(ve,`input`,e=>{n.value=e.target.value,V(),B()});let ye=h(`span`,_e);l(_e,ye),l(ye,O(`panel-title attribute`));let be=h(`label`,W);l(W,be),b(be,`floating-label`);let xe=h(`input`,be);l(be,xe),b(xe,`input input-bordered w-full`),s(()=>{x(xe,f.value)}),u(xe,`input`,e=>{f.value=e.target.value,H()});let Se=h(`span`,be);l(be,Se),l(Se,O(`host.props.tags（逗号分隔）`));let J=h(`label`,W);l(W,J),b(J,`floating-label`);let Ce=h(`input`,J);l(J,Ce),b(Ce,`input input-bordered w-full`),s(()=>{x(Ce,k.value)}),u(Ce,`input`,e=>{k.value=e.target.value});let we=h(`span`,J);l(J,we),l(we,O(`默认 slot 文案`));let Te=h(`div`,W);l(W,Te),b(Te,`grid gap-3 sm:grid-cols-2`);let Ee=h(`fieldset`,Te);l(Te,Ee),b(Ee,`fieldset`);let De=h(`legend`,Ee);l(Ee,De),b(De,`fieldset-legend`),l(De,O(`accent attribute`));let Y=h(`select`,Ee);l(Ee,Y),b(Y,`select select-bordered`),s(()=>{x(Y,r.value)}),u(Y,`change`,e=>{r.value=e.target.value,H()});let Oe=h(`option`,Y);l(Y,Oe),E(Oe,`value`,`teal`),l(Oe,O(`teal`));let ke=h(`option`,Y);l(Y,ke),E(ke,`value`,`amber`),l(ke,O(`amber`));let Ae=h(`option`,Y);l(Y,Ae),E(Ae,`value`,`rose`),l(Ae,O(`rose`));let je=h(`fieldset`,Te);l(Te,je),b(je,`fieldset`);let Ie=h(`legend`,je);l(je,Ie),b(Ie,`fieldset-legend`),l(Ie,O(`light label attribute`));let Le=h(`input`,je);l(je,Le),b(Le,`input input-bordered`),s(()=>{x(Le,re.value)}),u(Le,`input`,e=>{re.value=e.target.value,ce(),B()});let Re=h(`div`,W);l(W,Re);let ze=h(`div`,Re);l(Re,ze),b(ze,`flex items-center justify-between text-sm mb-2`);let Be=h(`span`,ze);l(ze,Be),l(Be,O(`host.props.count`));let Ve=h(`span`,ze);l(ze,Ve),b(Ve,`font-semibold`);let He=S(Ve);l(Ve,He),s(()=>{_(He,a.value)});let Ue=h(`input`,Re);l(Re,Ue),E(Ue,`type`,`range`),E(Ue,`min`,`1`),E(Ue,`max`,`15`),s(()=>{x(Ue,a.value)}),b(Ue,`range range-primary`),u(Ue,`input`,e=>{a.value=Number(e.target.value),V(),B()});let We=h(`div`,W);l(W,We),b(We,`grid gap-3 sm:grid-cols-2`);let X=h(`label`,We);l(We,X),b(X,`label cursor-pointer justify-start gap-3`);let qe=h(`input`,X);l(X,qe),E(qe,`type`,`checkbox`),b(qe,`toggle toggle-primary`),s(()=>{m(qe,!!p.value)}),u(qe,`change`,e=>{p.value=e.target.checked,H()});let Je=h(`span`,X);l(X,Je),b(Je,`label-text`),l(Je,O(`host.props.busy`));let Ye=h(`label`,We);l(We,Ye),b(Ye,`label cursor-pointer justify-start gap-3`);let Xe=h(`input`,Ye);l(Ye,Xe),E(Xe,`type`,`checkbox`),b(Xe,`toggle toggle-secondary`),s(()=>{m(Xe,!!g.value)}),u(Xe,`change`,e=>{g.value=e.target.checked,V(),B()});let Ze=h(`span`,Ye);l(Ye,Ze),b(Ze,`label-text`),l(Ze,O(`host.props.config.compact`));let Z=h(`div`,W);l(W,Z),b(Z,`grid gap-2 sm:grid-cols-2`);let Qe=h(`button`,Z);l(Z,Qe),b(Qe,`btn btn-primary`),u(Qe,`click`,ue),l(Qe,O(`追加 tag`));let $e=h(`button`,Z);l(Z,$e),b($e,`btn btn-outline`),u($e,`click`,G),l($e,O(`删除最后一个 tag`));let et=h(`button`,Z);l(Z,et),b(et,`btn btn-secondary`),u(et,`click`,()=>{a.value+=2,V(),B()}),l(et,O(`count + 2`));let tt=h(`button`,Z);l(Z,tt),b(tt,`btn btn-ghost`),u(tt,`click`,de),l(tt,O(`移除 title attribute`));let Q=h(`div`,z);l(z,Q),b(Q,`space-y-6`);let nt=h(`div`,Q);l(Q,nt),b(nt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let rt=h(`div`,nt);l(nt,rt),b(rt,`card-body gap-5`);let at=h(`div`,rt);l(rt,at),b(at,`flex flex-wrap items-center justify-between gap-4`);let ot=h(`div`,at);l(at,ot);let st=h(`p`,ot);l(ot,st),b(st,`text-xs uppercase tracking-[0.28em] text-base-content/45`),l(st,O(`Live Preview`));let ct=h(`h2`,ot);l(ot,ct),b(ct,`text-2xl font-semibold mt-2`),l(ct,O(`Shadow + Light 双宿主联动`));let lt=h(`div`,at);l(at,lt),b(lt,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let ut=h(`div`,lt);l(lt,ut),b(ut,`stat py-3 px-4`);let dt=h(`div`,ut);l(ut,dt),b(dt,`stat-title`),l(dt,O(`shadow configureApp`));let ft=h(`div`,ut);l(ut,ft),b(ft,`stat-value text-lg`);let pt=S(ft);l(ft,pt),s(()=>{_(pt,Me.value)});let mt=h(`div`,lt);l(lt,mt),b(mt,`stat py-3 px-4`);let ht=h(`div`,mt);l(mt,ht),b(ht,`stat-title`),l(ht,O(`light configureApp`));let gt=h(`div`,mt);l(mt,gt),b(gt,`stat-value text-lg`);let _t=S(gt);l(gt,_t),s(()=>{_(_t,Ne.value)});let vt=h(`div`,lt);l(lt,vt),b(vt,`stat py-3 px-4`);let yt=h(`div`,vt);l(vt,yt),b(yt,`stat-title`),l(yt,O(`mounted instances`));let bt=h(`div`,vt);l(vt,bt),b(bt,`stat-value text-lg`);let xt=S(bt);l(bt,xt),s(()=>{_(xt,Pe.value+Fe.value)});let St=h(`div`,rt);l(rt,St),b(St,`space-y-4`);let Ct=h(`rue-shadow-console`,St);l(St,Ct);let wt=ne(Ct,()=>L);ee(()=>{wt()});let Tt=h(`div`,Ct);l(Ct,Tt),E(Tt,`slot`,`meta`);let Et=h(`span`,Tt);l(Tt,Et),b(Et,`status status-success`);let Dt=h(`span`,Tt);l(Tt,Dt);let Ot=S(Dt);l(Dt,Ot),s(()=>{_(Ot,A.value)});let kt=h(`div`,Ct);l(Ct,kt),b(kt,`space-y-3 text-sm text-base-content/80`);let At=h(`p`,kt);l(kt,At);let jt=S(At);l(At,jt),s(()=>{_(jt,k.value)});let Mt=h(`div`,kt);l(kt,Mt),b(Mt,`flex flex-wrap gap-2`);let Nt=o(`rue:list:start`),Pt=o(`rue:list:end`);l(Mt,Nt),l(Mt,Pt);let Ft=new Map;s(()=>{Ft=te({items:Ke(f.value)||[],getKey:(e,t)=>e,elements:Ft,parent:Mt,before:Pt,singleRoot:!0,trackIndex:!1,start:Nt,renderItem:(t,n,r,i,a)=>{C(y(()=>{let n=e(),r=h(`span`,n);l(n,r),s(()=>{E(r,`key`,String(t))}),b(r,`badge badge-outline`);let i=S(r);return l(r,i),s(()=>{_(i,t)}),n}),n,r)}})});let It=h(`rue-light-signal`,St);l(St,It);let Lt=ne(It,()=>oe);ee(()=>{Lt()});let Rt=h(`div`,Q);l(Q,Rt),b(Rt,`grid gap-6`);let zt=h(`div`,Rt);l(Rt,zt),b(zt,`card bg-base-100 shadow border border-base-300`);let Bt=h(`div`,zt);l(zt,Bt),b(Bt,`card-body gap-4`);let Vt=h(`div`,Bt);l(Bt,Vt),b(Vt,`flex items-center justify-between gap-3`);let Ht=h(`h3`,Vt);l(Vt,Ht),b(Ht,`card-title text-lg`),l(Ht,O(`运行时诊断`));let Ut=h(`span`,Vt);l(Vt,Ut),b(Ut,`badge badge-primary badge-outline`),l(Ut,O(`nonce / styles / mode`));let $=h(`ul`,Bt);l(Bt,$),b($,`list bg-base-100 rounded-box`);let Wt=h(`li`,$);l($,Wt),b(Wt,`list-row`);let Gt=h(`div`,Wt);l(Wt,Gt),b(Gt,`font-medium`),l(Gt,O(`shadow style tags`));let Kt=h(`div`,Wt);l(Wt,Kt),b(Kt,`text-right`);let qt=S(Kt);l(Kt,qt),s(()=>{_(qt,F.value)});let Jt=h(`li`,$);l($,Jt),b(Jt,`list-row`);let Yt=h(`div`,Jt);l(Jt,Yt),b(Yt,`font-medium`),l(Yt,O(`shadow nonce`));let Xt=h(`div`,Jt);l(Jt,Xt),b(Xt,`text-right break-all`);let Zt=S(Xt);l(Xt,Zt),s(()=>{_(Zt,P.value)});let Qt=h(`li`,$);l($,Qt),b(Qt,`list-row`);let $t=h(`div`,Qt);l(Qt,$t),b($t,`font-medium`),l($t,O(`light style tags`));let en=h(`div`,Qt);l(Qt,en),b(en,`text-right`);let tn=S(en);l(en,tn),s(()=>{_(tn,I.value)});let nn=h(`li`,$);l($,nn),b(nn,`list-row`);let rn=h(`div`,nn);l(nn,rn),b(rn,`font-medium`),l(rn,O(`hook 期望`));let an=h(`div`,nn);l(nn,an),b(an,`text-right`),l(an,O(`shadow / light`));let on=h(`div`,Rt);l(Rt,on),b(on,`card bg-base-100 shadow border border-base-300`);let sn=h(`div`,on);l(on,sn),b(sn,`card-body gap-4`);let cn=h(`div`,sn);l(sn,cn),b(cn,`flex items-center justify-between gap-3`);let ln=h(`h3`,cn);l(cn,ln),b(ln,`card-title text-lg`),l(ln,O(`事件桥接日志`));let un=h(`button`,cn);l(cn,un),b(un,`btn btn-sm btn-ghost`),u(un,`click`,fe),l(un,O(`清空`));let dn=h(`div`,sn);l(sn,dn),b(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=o(`rue:slot:anchor`);l(dn,fn),s(()=>{let t=N.value.length?y(()=>{let t=e(),n=o(`rue:list:start`),r=o(`rue:list:end`);l(t,n),l(t,r);let i=new Map;return s(()=>{i=te({items:N.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:i,parent:n.parentNode,before:r,singleRoot:!0,start:n,renderItem:(t,n,r,i,a)=>{C(y(()=>{let n=e(),r=h(`div`,n);l(n,r),s(()=>{E(r,`key`,String(`${t.name}-${t.at}-${a}`))}),b(r,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let i=h(`div`,r);l(r,i),b(i,`flex items-center justify-between gap-3 text-sm`);let u=h(`div`,i);l(i,u),b(u,`flex items-center gap-2`);let d=h(`span`,u);l(u,d),s(()=>{b(d,`badge ${t.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`)});let f=o(`rue:slot:anchor`);l(d,f),s(()=>{let e=t.source;c(()=>C(e,d,f))});let p=h(`span`,u);l(u,p),b(p,`font-medium`);let m=o(`rue:slot:anchor`);l(p,m),s(()=>{let e=t.name;c(()=>C(e,p,m))});let g=h(`span`,i);l(i,g),b(g,`text-base-content/50`);let _=o(`rue:slot:anchor`);l(g,_),s(()=>{let e=t.at;c(()=>C(e,g,_))});let v=h(`pre`,r);l(r,v),b(v,`mt-2 text-xs whitespace-pre-wrap break-words`);let y=o(`rue:slot:anchor`);return l(v,y),s(()=>{let e=t.detail;c(()=>C(e,v,y))}),n}),n,r)}})}),t}):y(()=>{let t=e(),n=h(`div`,t);l(t,n),b(n,`alert alert-soft`);let r=h(`span`,n);return l(n,r),l(r,O(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),t});c(()=>C(t,dn,fn))});let pn=h(`div`,Q);l(Q,pn),b(pn,`grid gap-6`);let mn=h(`div`,pn);l(pn,mn),b(mn,`card bg-base-100 shadow border border-base-300`);let hn=h(`div`,mn);l(mn,hn),b(hn,`card-body gap-3`);let gn=h(`h3`,hn);l(hn,gn),b(gn,`card-title text-lg`),l(gn,O(`shadow host.props 快照`));let _n=h(`pre`,hn);l(hn,_n),b(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=o(`rue:slot:anchor`);l(_n,vn),s(()=>{let e=Ge(se());c(()=>C(e,_n,vn))});let yn=h(`div`,pn);l(pn,yn),b(yn,`card bg-base-100 shadow border border-base-300`);let bn=h(`div`,yn);l(yn,bn),b(bn,`card-body gap-3`);let xn=h(`h3`,bn);l(bn,xn),b(xn,`card-title text-lg`),l(xn,O(`light host.props 快照`));let Sn=h(`pre`,bn);l(bn,Sn),b(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=o(`rue:slot:anchor`);l(Sn,Cn),s(()=>{let e=Ge(R());c(()=>C(e,Sn,Cn))});let wn=h(`div`,i);l(i,wn),s(()=>{b(wn,t.value===`code`?`mt-4`:`hidden`)});let Tn=h(`div`,wn);l(wn,Tn),b(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=h(`div`,Tn);l(Tn,En),b(En,`card-body p-0`);let Dn=o(`rue:component:anchor`);return l(En,Dn),s(()=>{let e=D(ie,{className:`h-full`,lang:`tsx`,code:it});c(()=>C(e,En,Dn))}),i})}),d,v),d})};export{at as default};
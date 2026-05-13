import{D as e,F as t,G as n,I as r,L as i,M as a,P as o,R as s,U as c,W as l,X as u,Y as d,Z as f,_t as p,at as m,bt as h,c as g,et as _,f as v,gt as y,h as b,i as x,j as S,lt as C,m as w,o as T,p as E,pt as D,s as O,t as k,u as A,ut as ee,w as j}from"./vapor-runtime-D3a-68js.js";import{a as M,n as te,t as ne}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as re}from"./useApp-CsPyyzx3.js";import{t as ie}from"./Code-2C2psoH3.js";import{t as N}from"./SidebarPlaygroundExample-DKa0aI1C.js";var P=new Set([`data-rue-app`]),F=new WeakMap,I=new WeakMap,L=new WeakMap,R=new WeakMap,ae=new WeakMap,z=new WeakMap,B=new WeakMap,V=new WeakMap,H=[],U=null,W=()=>H.length>0?H[H.length-1]:U,G=(e,t)=>{U=e,H.push(e);try{return t()}finally{H.pop()}},oe=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e.host;if(e instanceof HTMLElement){if(e.tagName.includes(`-`))return e;let t=e.getRootNode?.();if(typeof ShadowRoot<`u`&&t instanceof ShadowRoot)return t.host}return B.get(e)??null},K=e=>{if(!e||typeof e!=`object`)return null;if(typeof ShadowRoot<`u`&&e instanceof ShadowRoot)return e;if(e instanceof HTMLElement){let t=e.getRootNode?.();return typeof ShadowRoot<`u`&&t instanceof ShadowRoot?t:e.shadowRoot??null}return V.get(e)??null},se=()=>{let e=W();return e?e.host:oe(b())},q=()=>{let e=W();return e?e.shadowRoot:K(b())},ce=e=>{if(typeof queueMicrotask==`function`){queueMicrotask(e);return}Promise.resolve().then(e)},le=e=>e.replace(/-([a-z])/g,(e,t)=>t.toUpperCase()),ue=e=>{let t={};for(let n of e.getAttributeNames())P.has(n)||(t[le(n)]=e.getAttribute(n));return t},de=e=>{let t={},n=e;for(let r of Object.keys(e))t[r]=n[r];return t},J=e=>!e||typeof e!=`object`||Array.isArray(e)?{}:{...e},Y=e=>({...ue(e),...de(e),...L.get(e)}),fe=e=>(t,n)=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0,composed:!0}))},pe=e=>{let t={};return Object.defineProperty(t,_,{configurable:!0,enumerable:!0,value:fe(e)}),ee(t)},me=e=>L.get(e)??{},he=(e,t)=>{L.set(e,J(t))},ge=e=>R.get(e)??null,_e=(e,t)=>{if(t){R.set(e,t);return}R.delete(e)},ve=(e,t)=>{if(t){ae.set(e,t);return}ae.delete(e)},ye=e=>{let t=ae.get(e);t&&(t.value+=1)},be=e=>{let t=R.get(e);if(!t)return;let n=Y(e),r=new Set([...Object.keys(t),...Object.keys(n)]),i=!1;for(let e of r){if(e===`__rue_custom_element_emit__`)continue;let r=e in n?n[e]:void 0;Object.is(t[e],r)||(t[e]=r,i=!0)}i&&ye(e)},xe=e=>F.get(e)??null,Se=(e,t)=>{if(t){F.set(e,t);return}F.delete(e)},Ce=e=>I.get(e)??null,we=(e,t)=>{if(t){I.set(e,t);return}I.delete(e)},Te=(e,t)=>{if(z.set(e,t),B.set(e,e),B.set(t,e),t instanceof ShadowRoot){V.set(e,t),V.set(t,t);return}V.delete(e),V.delete(t)},Ee=e=>{let t=z.get(e);t&&(B.delete(e),B.delete(t),V.delete(e),V.delete(t),z.delete(e))},X=(e,t)=>t?e.shadowRoot??e.attachShadow({mode:`open`}):e,De=e=>{e.querySelectorAll(`style[data-rue-ce-style]`).forEach(e=>e.remove())},Oe=(e,t,n)=>{if(De(e),t?.length)for(let r of t){let t=document.createElement(`style`);t.setAttribute(`data-rue-ce-style`,``),n&&t.setAttribute(`nonce`,n),t.textContent=r,e.appendChild(t)}},ke=e=>e.type===`attributes`&&e.attributeName!=null&&P.has(e.attributeName);function Ae(t,n={}){let{shadowRoot:i=!0,styles:s,configureApp:c,nonce:l}=n,u=typeof t==`function`?t:e=>{let n=typeof t.setup==`function`?p(()=>t.setup(e)):e;return typeof t.render==`function`?t.render(n):[]},d=t=>{let n=X(t,i),d=E(),f={host:t,shadowRoot:n instanceof ShadowRoot?n:null},p=pe(t),m=C(0);_e(t,p),ve(t,m),be(t),Te(t,n);let g=e=>G(f,()=>u(e)),_=re(()=>d.vapor(()=>{let n=r(`span`);n.style.display=`contents`;let i=o(`rue:custom-element:anchor`);return a(n,i),h(()=>{m.value,e(d,()=>{j(v(g,ge(t)??{}),n,i)})}),n}),d);c?.(_),Se(t,_),_.mount(n),ce(()=>{xe(t)&&Oe(n,s,l)})},f=e=>{xe(e)?.unmount(),Se(e,null),_e(e,null),ve(e,null),Ee(e)},m=e=>{if(typeof MutationObserver!=`function`)return;Ce(e)?.disconnect();let t=new MutationObserver(t=>{t.length>0&&t.every(ke)||be(e)});t.observe(e,{attributes:!0}),we(e,t)};return class extends HTMLElement{constructor(){super(),he(this,null)}get props(){return me(this)}set props(e){he(this,e),be(this)}connectedCallback(){xe(this)||(d(this),m(this))}disconnectedCallback(){Ce(this)?.disconnect(),we(this,null),f(this)}}}var je=M(`ref:1:0`,()=>C(0)),Me=M(`ref:1:1`,()=>C(0)),Ne=M(`ref:1:2`,()=>C(0)),Pe=M(`ref:1:3`,()=>C(0)),Fe=0,Ie=0,Le=new WeakMap,Re=new WeakMap,ze=`rue-demo-nonce`,Be=`rue-shadow-console`,Ve=`rue-light-signal`,Z=[`
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
  `],He=[`
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
  `],Ue=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},We=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),Q=e=>e&&typeof e==`object`?e:void 0,Ge=e=>Q(e.config)?.compact===!0,Ke=e=>{let t=Q(e.config)?.preset;return typeof t==`string`?t:`manual`},qe=e=>e?Le.get(e)||(Fe+=1,Ne.value+=1,Le.set(e,Fe),Fe):0,Je=e=>e?Re.get(e)||(Ie+=1,Pe.value+=1,Re.set(e,Ie),Ie):0,Ye=e=>Number(Q(e.metrics)?.events??0),$=e=>Number(Q(e.metrics)?.tags??0),Xe=e=>e,Ze=()=>{let{host:e,shadowRoot:t,mountId:s}=M(`useSetup:0:0`,()=>p(()=>{let e=se();return{host:e,shadowRoot:q(),mountId:Je(e)}}));return A(()=>{let c=r(`p`);n(c,`lightMeta`),a(c,i(`实例 #`));let l=o(`rue:slot:anchor`);a(c,l),h(()=>{let e=s;D(()=>g(e,c,l))}),a(c,i(` · `));let u=o(`rue:slot:anchor`);a(c,u),h(()=>{let t=e?.tagName.toLowerCase()??`unknown-host`;D(()=>g(t,c,u))}),a(c,i(` ·`));let d=o(`rue:slot:anchor`);a(c,d),h(()=>{D(()=>g(` `,c,d))}),a(c,i(` `));let f=o(`rue:slot:anchor`);return a(c,f),h(()=>{let e=t?`shadow-root`:`light-dom`;D(()=>g(e,c,f))}),c})},Qe=e=>{let{host:l,shadowRoot:u,emit:_,mountId:v,count:y,accent:b,panelTitle:x,tags:C,busy:T,meterWidth:E}=M(`useSetup:0:0:dup1`,()=>p(()=>{let t=se(),n=q(),r=M(`computed:1:4`,()=>m(()=>w(e))),i=qe(t),a=M(`computed:1:5`,()=>m(()=>Number(e.count??0))),o=a;return{host:t,shadowRoot:n,emit:r,mountId:i,count:a,accent:M(`computed:1:6`,()=>m(()=>String(e.accent??`teal`))),panelTitle:M(`computed:1:7`,()=>m(()=>String(e.panelTitle??`Shadow console`))),tags:M(`computed:1:8`,()=>m(()=>Array.isArray(e.tags)?e.tags:[])),busy:M(`computed:1:9`,()=>m(()=>e.busy===!0)),meterWidth:M(`computed:1:10`,()=>m(()=>`${Math.max(8,Math.min(o.get()*9,100))}%`))}}));return A(()=>{let p=r(`article`);h(()=>{n(p,String(`frame ${Ge(e)?`compact`:``}`))}),h(()=>{c(p,`data-accent`,String(b.get()))}),h(()=>{c(p,`data-busy`,String(T.get()?`yes`:`no`))});let m=r(`header`);a(p,m),n(m,`hero`);let w=r(`div`);a(m,w);let O=r(`p`);a(w,O),n(O,`eyebrow`),a(O,i(`Shadow Root / Slot / CustomEvent`));let k=r(`h2`);a(w,k),n(k,`title`);let ee=s(k);a(k,ee),h(()=>{f(ee,x.get())});let j=r(`p`);a(w,j),n(j,`subtitle`),a(j,i(`实例 #`));let M=s(j);a(j,M),h(()=>{f(M,v)}),a(j,i(` · `));let ne=s(j);a(j,ne),h(()=>{f(ne,l?.tagName.toLowerCase()??`unknown-host`)}),a(j,i(` ·`));let re=s(j);a(j,re),f(re,` `),a(j,i(` `));let ie=s(j);a(j,ie),h(()=>{f(ie,u?`shadow-root 已开启`:`light-dom`)});let N=r(`div`);a(m,N),n(N,`actions`);let P=r(`button`);a(N,P),c(P,`type`,`button`),n(P,`button primary`),S(P,`click`,()=>{_.get()(`save`,{mountId:v,panelTitle:x.get(),count:y.get(),tags:C.get(),busy:T.get()},{host:l?.tagName.toLowerCase()??`unknown`,rootMode:u?`shadow`:`light`})}),a(P,i(`派发 save`));let F=r(`button`);a(N,F),c(F,`type`,`button`),n(F,`button`),S(F,`click`,()=>{_.get()(`pulse`,y.get()+1,b.get())}),a(F,i(`派发 pulse`));let I=r(`div`);a(p,I),n(I,`grid`);let L=r(`section`);a(I,L),n(L,`panel`);let R=r(`div`);a(L,R),n(R,`metricValue`);let ae=s(R);a(R,ae),h(()=>{f(ae,y.get())});let z=r(`div`);a(L,z),n(z,`metricLabel`),a(z,i(`这个数值来自宿主上的 el.props.count`));let B=r(`div`);a(L,B),n(B,`meter`);let V=r(`div`);a(B,V),n(V,`meterFill`),h(()=>{d(V,{width:E.get()})});let H=r(`div`);a(L,H),n(H,`chips`);let U=o(`rue:slot:anchor`);a(H,U),h(()=>{let e=C.get().length?A(()=>{let e=t(),i=o(`rue:list:start`),l=o(`rue:list:end`);a(e,i),a(e,l);let u=new Map;return h(()=>{u=te({items:C.get()||[],getKey:(e,t)=>e,elements:u,parent:i.parentNode,before:l,singleRoot:!0,trackIndex:!1,start:i,renderItem:(e,i,o,l,u)=>{g(A(()=>{let i=t(),o=r(`span`);a(i,o),h(()=>{c(o,`key`,String(e))}),n(o,`chip`);let l=s(o);return a(o,l),h(()=>{f(l,e)}),i}),i,o)}})}),e}):A(()=>{let e=t(),o=r(`span`);return a(e,o),n(o,`chip muted`),a(o,i(`暂无 tags`)),e});D(()=>g(e,H,U))});let W=r(`section`);a(I,W),n(W,`panel`);let G=r(`p`);a(W,G),n(G,`slotTitle`),a(G,i(`命名 Slot`));let oe=r(`slot`);a(W,oe),c(oe,`name`,`meta`);let K=r(`div`);a(W,K),d(K,{height:`12px`});let se=r(`p`);a(W,se),n(se,`slotTitle`),a(se,i(`默认 Slot`)),a(W,r(`slot`));let q=r(`footer`);a(p,q),n(q,`footer`);let ce=r(`span`);a(q,ce),a(ce,i(`preset: `));let le=o(`rue:slot:anchor`);a(ce,le),h(()=>{let t=Ke(e);D(()=>g(t,ce,le))});let ue=r(`span`);a(q,ue);let de=s(ue);a(ue,de),h(()=>{f(de,T.get()?`后台同步中`:`空闲`)});let J=r(`span`);a(q,J);let Y=s(J);return a(J,Y),h(()=>{f(Y,Ge(e)?`compact on`:`compact off`)}),p})},$e=e=>{let{emit:t,label:l,tone:u}=M(`useSetup:0:0:dup2`,()=>p(()=>({emit:M(`computed:1:11`,()=>m(()=>w(e))),label:M(`computed:1:12`,()=>m(()=>String(e.label??`Light DOM signal`))),tone:M(`computed:1:13`,()=>m(()=>String(e.tone??`teal`)))})));return A(()=>{let d=r(`div`);h(()=>{n(d,String(`lightShell tone-${u.get()}`))});let p=r(`div`);a(d,p);let m=r(`p`);a(p,m),n(m,`lightTitle`);let _=s(m);a(m,_),h(()=>{f(_,l.get())});let v=o(`rue:component:anchor`);a(p,v),g(k(Ze,{}),p,v);let y=r(`div`);a(d,y),n(y,`lightValue`);let b=o(`rue:slot:anchor`);a(y,b),h(()=>{let t=Ye(e);D(()=>g(t,y,b))}),a(y,i(` events / `));let x=o(`rue:slot:anchor`);a(y,x),h(()=>{let t=$(e);D(()=>g(t,y,x))}),a(y,i(` tags`));let C=r(`button`);return a(d,C),c(C,`type`,`button`),n(C,`lightButton`),S(C,`click`,()=>{t.get()(`light-tap`,{label:l.get(),events:Ye(e),tags:$(e)})}),a(C,i(`emit`)),d})},et=Ae(Qe,{styles:Z,nonce:ze,configureApp(){je.value+=1}}),tt=Ae($e,{shadowRoot:!1,styles:He,configureApp(){Me.value+=1}}),nt=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};nt(Be,et),nt(Ve,tt);var rt=[`import { useCustomElement, emitted, useHost, useShadowRoot } from '@rue-js/rue'`,``,`const ShadowConsole = props => {`,`  const host = useHost()`,`  const shadowRoot = useShadowRoot()`,`  const emit = emitted(props)`,``,`  return (`,`    <article>`,`      <h2>{props.panelTitle ?? "Shadow console"}</h2>`,`      <p>{host?.tagName.toLowerCase()} / {shadowRoot ? "shadow" : "light"}</p>`,`      <button onClick={() => emit("save", { count: props.count, tags: props.tags })}>`,`        emit save`,`      </button>`,`      <slot name="meta"></slot>`,`      <slot></slot>`,`    </article>`,`  )`,`}`,``,`const ShadowConsoleElement = useCustomElement(ShadowConsole, {`,`  styles: [':host { display:block }', '.frame { border-radius:24px }'],`,`  nonce: "rue-demo-nonce",`,`  configureApp() {`,`    console.log("configureApp runs once per host instance")`,`  },`,`})`,``,`const LightSignalElement = useCustomElement(LightSignal, {`,`  shadowRoot: false,`,`  styles: ['.lightShell { display:grid }'],`,`})`,``,`customElements.define("rue-shadow-console", ShadowConsoleElement)`,`customElements.define("rue-light-signal", LightSignalElement)`,``,`const shadowHost = document.querySelector("rue-shadow-console")`,`shadowHost.setAttribute("panel-title", "Ops Console")`,`shadowHost.props = {`,`  count: 7,`,`  tags: ["shadow", "events", "slots"],`,`  config: { compact: false, preset: "ops" },`,`  busy: true,`,`}`,``,`shadowHost.addEventListener("save", event => {`,`  console.log((event as CustomEvent).detail)`,`})`].join(`
`),it=()=>{let{activeTab:e,panelTitle:d,accent:m,count:_,tagInput:v,busy:b,compact:w,activePreset:E,slotNote:ee,metaBadge:j,lightLabel:re,eventLog:P,shadowNonce:F,shadowStyleCount:I,lightStyleCount:L,shadowHostRef:R,lightHostRef:ae,shadowPropsPayload:z,lightPropsPayload:B,refreshDiagnostics:V,scheduleDiagnostics:H,syncShadowHost:U,syncLightHost:W,syncHosts:G,pushEvent:oe,bindCustomEvent:K,applyPreset:se,appendTag:q,removeLastTag:ce,clearTitleAttr:le,clearEvents:ue}=M(`useSetup:0:0:dup3`,()=>p(()=>{let e=M(`ref:1:14`,()=>C(`preview`)),t=M(`ref:1:15`,()=>C(`Ops Console / Native CE`)),n=M(`ref:1:16`,()=>C(`teal`)),r=M(`ref:1:17`,()=>C(7)),i=M(`ref:1:18`,()=>C(`shadow, events, slots, props`)),a=M(`ref:1:19`,()=>C(!1)),o=M(`ref:1:20`,()=>C(!1)),s=M(`ref:1:21`,()=>C(`ops`)),c=M(`ref:1:22`,()=>C(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),l=M(`ref:1:23`,()=>C(`SLA 99.99%`)),u=M(`ref:1:24`,()=>C(`Light DOM signal`)),d=M(`ref:1:25`,()=>C([])),f=M(`ref:1:26`,()=>C(`等待挂载`)),p=M(`ref:1:27`,()=>C(0)),m=M(`ref:1:28`,()=>C(0)),h=M(`useRef:1:29`,()=>y()),g=M(`useRef:1:30`,()=>y()),_=()=>({count:r.value,tags:We(i.value),config:{compact:o.value,preset:s.value},busy:a.value}),v=()=>({metrics:{events:d.value.length,tags:We(i.value).length,busy:a.value}}),b=()=>{let e=h.current,t=g.current;p.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,f.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,m.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},x=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{b()})})},S=()=>{let e=h.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=_()},w=()=>{let e=g.current;if(!e)return;let t=u.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,Xe(n.value)),e.props=v()},E=()=>{S(),w(),x()},D=(e,t,n)=>{d.value=[{source:e,name:t,detail:Ue(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...d.value].slice(0,8),w(),x()},k=(e,t,n)=>{if(!e)return()=>{};let r=e=>{D(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return T(()=>{let e=()=>{},t=()=>{},n=()=>{};Promise.resolve().then(()=>{E(),e=k(h.current,`save`,`shadow`),t=k(h.current,`pulse`,`shadow`),n=k(g.current,`light-tap`,`light`),x()}),O(()=>{e(),t(),n()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:i,busy:a,compact:o,activePreset:s,slotNote:c,metaBadge:l,lightLabel:u,eventLog:d,shadowNonce:f,shadowStyleCount:p,lightStyleCount:m,shadowHostRef:h,lightHostRef:g,shadowPropsPayload:_,lightPropsPayload:v,refreshDiagnostics:b,scheduleDiagnostics:x,syncShadowHost:S,syncLightHost:w,syncHosts:E,pushEvent:D,bindCustomEvent:k,applyPreset:e=>{s.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,i.value=`shadow, events, slots, props`,c.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,l.value=`SLA 99.99%`,u.value=`Light DOM signal`,a.value=!1,o.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,i.value=`checkout, fulfillment, analytics, queue`,c.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,l.value=`AOV +18%`,u.value=`Revenue pulse`,a.value=!1,o.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,i.value=`incident, pager, bridge, rollback`,c.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,l.value=`P1 ongoing`,u.value=`War-room heartbeat`,a.value=!0,o.value=!1),E()},appendTag:()=>{let e=We(i.value);e.push(`tag-${e.length+1}`),i.value=e.join(`, `),E()},removeLastTag:()=>{let e=We(i.value);e.pop(),i.value=e.join(`, `),E()},clearTitleAttr:()=>{t.value=``,E()},clearEvents:()=>{d.value=[],w(),x()}}}));return A(()=>{let p=t(),y=o(`rue:component:anchor`);return a(p,y),g(k(N,{children:A(()=>{let p=t(),y=r(`h1`);a(p,y),n(y,`text-5xl font-semibold mb-4 md:mb-4`),a(y,i(`原生 Web Components`));let C=r(`p`);a(p,C),n(C,`text-base-content/70 max-w-4xl leading-7`),a(C,i(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let T=r(`div`);a(p,T),c(T,`role`,`tablist`),n(T,`tabs tabs-box mt-4`);let O=r(`button`);a(T,O),c(O,`role`,`tab`),h(()=>{n(O,String(`tab ${e.value===`preview`?`tab-active`:``}`))}),S(O,`click`,()=>{e.value=`preview`}),a(O,i(`效果`));let M=r(`button`);a(T,M),c(M,`role`,`tab`),h(()=>{n(M,String(`tab ${e.value===`code`?`tab-active`:``}`))}),S(M,`click`,()=>{e.value=`code`}),a(M,i(`代码`));let N=r(`div`);a(p,N),h(()=>{n(N,String(e.value===`preview`?`mt-4 space-y-6`:`hidden`))});let V=r(`div`);a(N,V),n(V,`grid gap-6 items-start`);let oe=r(`div`);a(V,oe),n(oe,`card bg-base-100 shadow-xl border border-base-300`);let K=r(`div`);a(oe,K),n(K,`card-body gap-5`);let de=r(`div`);a(K,de);let J=r(`p`);a(de,J),n(J,`text-xs uppercase tracking-[0.28em] text-base-content/45`),a(J,i(`Preset`));let Y=r(`div`);a(de,Y),n(Y,`mt-3 flex w-full gap-2`);let fe=o(`rue:list:start`),pe=o(`rue:list:end`);a(Y,fe),a(Y,pe);let me=new Map;h(()=>{me=te({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:me,parent:Y,before:pe,singleRoot:!0,trackIndex:!1,start:fe,renderItem:(e,i,o,l,u)=>{g(A(()=>{let i=t(),o=r(`button`);a(i,o),h(()=>{c(o,`key`,String(e))}),h(()=>{n(o,String(`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${E.value===e?`btn-primary`:`btn-outline`}`))}),S(o,`click`,()=>se(e));let l=s(o);return a(o,l),h(()=>{f(l,e)}),i}),i,o)}})});let he=r(`label`);a(K,he),n(he,`floating-label`);let ge=r(`input`);a(he,ge),n(ge,`input input-bordered w-full`),h(()=>{u(ge,d.value)}),S(ge,`input`,e=>{d.value=e.target.value,U(),H()});let _e=r(`span`);a(he,_e),a(_e,i(`panel-title attribute`));let ve=r(`label`);a(K,ve),n(ve,`floating-label`);let ye=r(`input`);a(ve,ye),n(ye,`input input-bordered w-full`),h(()=>{u(ye,v.value)}),S(ye,`input`,e=>{v.value=e.target.value,G()});let be=r(`span`);a(ve,be),a(be,i(`host.props.tags（逗号分隔）`));let xe=r(`label`);a(K,xe),n(xe,`floating-label`);let Se=r(`input`);a(xe,Se),n(Se,`input input-bordered w-full`),h(()=>{u(Se,ee.value)}),S(Se,`input`,e=>{ee.value=e.target.value});let Ce=r(`span`);a(xe,Ce),a(Ce,i(`默认 slot 文案`));let we=r(`div`);a(K,we),n(we,`grid gap-3 sm:grid-cols-2`);let Te=r(`fieldset`);a(we,Te),n(Te,`fieldset`);let Ee=r(`legend`);a(Te,Ee),n(Ee,`fieldset-legend`),a(Ee,i(`accent attribute`));let X=r(`select`);a(Te,X),n(X,`select select-bordered`),h(()=>{u(X,m.value)}),S(X,`change`,e=>{m.value=e.target.value,G()});let De=r(`option`);a(X,De),c(De,`value`,`teal`),a(De,i(`teal`));let Oe=r(`option`);a(X,Oe),c(Oe,`value`,`amber`),a(Oe,i(`amber`));let ke=r(`option`);a(X,ke),c(ke,`value`,`rose`),a(ke,i(`rose`));let Ae=r(`fieldset`);a(we,Ae),n(Ae,`fieldset`);let Fe=r(`legend`);a(Ae,Fe),n(Fe,`fieldset-legend`),a(Fe,i(`light label attribute`));let Ie=r(`input`);a(Ae,Ie),n(Ie,`input input-bordered`),h(()=>{u(Ie,re.value)}),S(Ie,`input`,e=>{re.value=e.target.value,W(),H()});let Le=r(`div`);a(K,Le);let Re=r(`div`);a(Le,Re),n(Re,`flex items-center justify-between text-sm mb-2`);let ze=r(`span`);a(Re,ze),a(ze,i(`host.props.count`));let Be=r(`span`);a(Re,Be),n(Be,`font-semibold`);let Ve=s(Be);a(Be,Ve),h(()=>{f(Ve,_.value)});let Z=r(`input`);a(Le,Z),c(Z,`type`,`range`),c(Z,`min`,`1`),c(Z,`max`,`15`),h(()=>{u(Z,_.value)}),n(Z,`range range-primary`),S(Z,`input`,e=>{_.value=Number(e.target.value),U(),H()});let He=r(`div`);a(K,He),n(He,`grid gap-3 sm:grid-cols-2`);let Q=r(`label`);a(He,Q),n(Q,`label cursor-pointer justify-start gap-3`);let Ge=r(`input`);a(Q,Ge),c(Ge,`type`,`checkbox`),n(Ge,`toggle toggle-primary`),h(()=>{l(Ge,!!b.value)}),S(Ge,`change`,e=>{b.value=e.target.checked,G()});let Ke=r(`span`);a(Q,Ke),n(Ke,`label-text`),a(Ke,i(`host.props.busy`));let qe=r(`label`);a(He,qe),n(qe,`label cursor-pointer justify-start gap-3`);let Je=r(`input`);a(qe,Je),c(Je,`type`,`checkbox`),n(Je,`toggle toggle-secondary`),h(()=>{l(Je,!!w.value)}),S(Je,`change`,e=>{w.value=e.target.checked,U(),H()});let Ye=r(`span`);a(qe,Ye),n(Ye,`label-text`),a(Ye,i(`host.props.config.compact`));let $=r(`div`);a(K,$),n($,`grid gap-2 sm:grid-cols-2`);let Xe=r(`button`);a($,Xe),n(Xe,`btn btn-primary`),S(Xe,`click`,q),a(Xe,i(`追加 tag`));let Ze=r(`button`);a($,Ze),n(Ze,`btn btn-outline`),S(Ze,`click`,ce),a(Ze,i(`删除最后一个 tag`));let Qe=r(`button`);a($,Qe),n(Qe,`btn btn-secondary`),S(Qe,`click`,()=>{_.value+=2,U(),H()}),a(Qe,i(`count + 2`));let $e=r(`button`);a($,$e),n($e,`btn btn-ghost`),S($e,`click`,le),a($e,i(`移除 title attribute`));let et=r(`div`);a(V,et),n(et,`space-y-6`);let tt=r(`div`);a(et,tt),n(tt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let nt=r(`div`);a(tt,nt),n(nt,`card-body gap-5`);let it=r(`div`);a(nt,it),n(it,`flex flex-wrap items-center justify-between gap-4`);let at=r(`div`);a(it,at);let ot=r(`p`);a(at,ot),n(ot,`text-xs uppercase tracking-[0.28em] text-base-content/45`),a(ot,i(`Live Preview`));let st=r(`h2`);a(at,st),n(st,`text-2xl font-semibold mt-2`),a(st,i(`Shadow + Light 双宿主联动`));let ct=r(`div`);a(it,ct),n(ct,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let lt=r(`div`);a(ct,lt),n(lt,`stat py-3 px-4`);let ut=r(`div`);a(lt,ut),n(ut,`stat-title`),a(ut,i(`shadow configureApp`));let dt=r(`div`);a(lt,dt),n(dt,`stat-value text-lg`);let ft=s(dt);a(dt,ft),h(()=>{f(ft,je.value)});let pt=r(`div`);a(ct,pt),n(pt,`stat py-3 px-4`);let mt=r(`div`);a(pt,mt),n(mt,`stat-title`),a(mt,i(`light configureApp`));let ht=r(`div`);a(pt,ht),n(ht,`stat-value text-lg`);let gt=s(ht);a(ht,gt),h(()=>{f(gt,Me.value)});let _t=r(`div`);a(ct,_t),n(_t,`stat py-3 px-4`);let vt=r(`div`);a(_t,vt),n(vt,`stat-title`),a(vt,i(`mounted instances`));let yt=r(`div`);a(_t,yt),n(yt,`stat-value text-lg`);let bt=s(yt);a(yt,bt),h(()=>{f(bt,Ne.value+Pe.value)});let xt=r(`div`);a(nt,xt),n(xt,`space-y-4`);let St=r(`rue-shadow-console`);a(xt,St);let Ct=ne(St,()=>R);x(()=>{Ct()});let wt=r(`div`);a(St,wt),c(wt,`slot`,`meta`);let Tt=r(`span`);a(wt,Tt),n(Tt,`status status-success`);let Et=r(`span`);a(wt,Et);let Dt=s(Et);a(Et,Dt),h(()=>{f(Dt,j.value)});let Ot=r(`div`);a(St,Ot),n(Ot,`space-y-3 text-sm text-base-content/80`);let kt=r(`p`);a(Ot,kt);let At=s(kt);a(kt,At),h(()=>{f(At,ee.value)});let jt=r(`div`);a(Ot,jt),n(jt,`flex flex-wrap gap-2`);let Mt=o(`rue:list:start`),Nt=o(`rue:list:end`);a(jt,Mt),a(jt,Nt);let Pt=new Map;h(()=>{Pt=te({items:We(v.value)||[],getKey:(e,t)=>e,elements:Pt,parent:jt,before:Nt,singleRoot:!0,trackIndex:!1,start:Mt,renderItem:(e,i,o,l,u)=>{g(A(()=>{let i=t(),o=r(`span`);a(i,o),h(()=>{c(o,`key`,String(e))}),n(o,`badge badge-outline`);let l=s(o);return a(o,l),h(()=>{f(l,e)}),i}),i,o)}})});let Ft=r(`rue-light-signal`);a(xt,Ft);let It=ne(Ft,()=>ae);x(()=>{It()});let Lt=r(`div`);a(et,Lt),n(Lt,`grid gap-6`);let Rt=r(`div`);a(Lt,Rt),n(Rt,`card bg-base-100 shadow border border-base-300`);let zt=r(`div`);a(Rt,zt),n(zt,`card-body gap-4`);let Bt=r(`div`);a(zt,Bt),n(Bt,`flex items-center justify-between gap-3`);let Vt=r(`h3`);a(Bt,Vt),n(Vt,`card-title text-lg`),a(Vt,i(`运行时诊断`));let Ht=r(`span`);a(Bt,Ht),n(Ht,`badge badge-primary badge-outline`),a(Ht,i(`nonce / styles / mode`));let Ut=r(`ul`);a(zt,Ut),n(Ut,`list bg-base-100 rounded-box`);let Wt=r(`li`);a(Ut,Wt),n(Wt,`list-row`);let Gt=r(`div`);a(Wt,Gt),n(Gt,`font-medium`),a(Gt,i(`shadow style tags`));let Kt=r(`div`);a(Wt,Kt),n(Kt,`text-right`);let qt=s(Kt);a(Kt,qt),h(()=>{f(qt,I.value)});let Jt=r(`li`);a(Ut,Jt),n(Jt,`list-row`);let Yt=r(`div`);a(Jt,Yt),n(Yt,`font-medium`),a(Yt,i(`shadow nonce`));let Xt=r(`div`);a(Jt,Xt),n(Xt,`text-right break-all`);let Zt=s(Xt);a(Xt,Zt),h(()=>{f(Zt,F.value)});let Qt=r(`li`);a(Ut,Qt),n(Qt,`list-row`);let $t=r(`div`);a(Qt,$t),n($t,`font-medium`),a($t,i(`light style tags`));let en=r(`div`);a(Qt,en),n(en,`text-right`);let tn=s(en);a(en,tn),h(()=>{f(tn,L.value)});let nn=r(`li`);a(Ut,nn),n(nn,`list-row`);let rn=r(`div`);a(nn,rn),n(rn,`font-medium`),a(rn,i(`hook 期望`));let an=r(`div`);a(nn,an),n(an,`text-right`),a(an,i(`shadow / light`));let on=r(`div`);a(Lt,on),n(on,`card bg-base-100 shadow border border-base-300`);let sn=r(`div`);a(on,sn),n(sn,`card-body gap-4`);let cn=r(`div`);a(sn,cn),n(cn,`flex items-center justify-between gap-3`);let ln=r(`h3`);a(cn,ln),n(ln,`card-title text-lg`),a(ln,i(`事件桥接日志`));let un=r(`button`);a(cn,un),n(un,`btn btn-sm btn-ghost`),S(un,`click`,ue),a(un,i(`清空`));let dn=r(`div`);a(sn,dn),n(dn,`space-y-3 max-h-[320px] overflow-auto pr-1`);let fn=o(`rue:slot:anchor`);a(dn,fn),h(()=>{let e=P.value.length?A(()=>{let e=t(),i=o(`rue:list:start`),s=o(`rue:list:end`);a(e,i),a(e,s);let l=new Map;return h(()=>{l=te({items:P.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:l,parent:i.parentNode,before:s,singleRoot:!0,start:i,renderItem:(e,i,s,l,u)=>{g(A(()=>{let i=t(),s=r(`div`);a(i,s),h(()=>{c(s,`key`,String(`${e.name}-${e.at}-${u}`))}),n(s,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let l=r(`div`);a(s,l),n(l,`flex items-center justify-between gap-3 text-sm`);let d=r(`div`);a(l,d),n(d,`flex items-center gap-2`);let f=r(`span`);a(d,f),h(()=>{n(f,String(`badge ${e.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`))});let p=o(`rue:slot:anchor`);a(f,p),h(()=>{let t=e.source;D(()=>g(t,f,p))});let m=r(`span`);a(d,m),n(m,`font-medium`);let _=o(`rue:slot:anchor`);a(m,_),h(()=>{let t=e.name;D(()=>g(t,m,_))});let v=r(`span`);a(l,v),n(v,`text-base-content/50`);let y=o(`rue:slot:anchor`);a(v,y),h(()=>{let t=e.at;D(()=>g(t,v,y))});let b=r(`pre`);a(s,b),n(b,`mt-2 text-xs whitespace-pre-wrap break-words`);let x=o(`rue:slot:anchor`);return a(b,x),h(()=>{let t=e.detail;D(()=>g(t,b,x))}),i}),i,s)}})}),e}):A(()=>{let e=t(),o=r(`div`);a(e,o),n(o,`alert alert-soft`);let s=r(`span`);return a(o,s),a(s,i(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),e});D(()=>g(e,dn,fn))});let pn=r(`div`);a(et,pn),n(pn,`grid gap-6`);let mn=r(`div`);a(pn,mn),n(mn,`card bg-base-100 shadow border border-base-300`);let hn=r(`div`);a(mn,hn),n(hn,`card-body gap-3`);let gn=r(`h3`);a(hn,gn),n(gn,`card-title text-lg`),a(gn,i(`shadow host.props 快照`));let _n=r(`pre`);a(hn,_n),n(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=o(`rue:slot:anchor`);a(_n,vn),h(()=>{let e=Ue(z());D(()=>g(e,_n,vn))});let yn=r(`div`);a(pn,yn),n(yn,`card bg-base-100 shadow border border-base-300`);let bn=r(`div`);a(yn,bn),n(bn,`card-body gap-3`);let xn=r(`h3`);a(bn,xn),n(xn,`card-title text-lg`),a(xn,i(`light host.props 快照`));let Sn=r(`pre`);a(bn,Sn),n(Sn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let Cn=o(`rue:slot:anchor`);a(Sn,Cn),h(()=>{let e=Ue(B());D(()=>g(e,Sn,Cn))});let wn=r(`div`);a(p,wn),h(()=>{n(wn,String(e.value===`code`?`mt-4`:`hidden`))});let Tn=r(`div`);a(wn,Tn),n(Tn,`card bg-base-100 shadow overflow-auto h-[420px] md:h-[720px]`);let En=r(`div`);a(Tn,En),n(En,`card-body p-0`);let Dn=o(`rue:component:anchor`);return a(En,Dn),h(()=>{let e=k(ie,{className:`h-full`,lang:`tsx`,code:rt});D(()=>g(e,En,Dn))}),p})}),p,y),p})};export{it as default};
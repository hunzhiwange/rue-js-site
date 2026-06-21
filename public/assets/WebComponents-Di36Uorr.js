import{$t as e,Jt as t,L as n,Q as r,St as i,Wt as a,Z as o,_t as s,dt as c,et as l,f as u,gt as d,ht as f,i as p,in as m,it as h,l as g,lt as _,n as v,nt as y,o as b,r as x,rn as S,rt as C,t as w,tt as T,u as E,ut as D,vt as O,zt as k}from"./vapor-runtime-DsQWl-IB.js";import{a as A,n as ee,t as j}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as te,o as ne}from"./persistentSidebarPlayground-6jqnvaEa.js";import{n as M,r as re,t as N}from"./custom-elements-CQv15y7e.js";import{t as ie}from"./Code-4SUSUwRg.js";import{r as P}from"./SidebarPlaygroundExample-BEWYUWOl.js";var ae=A(`ref:1:0`,()=>t(0)),oe=A(`ref:1:1`,()=>t(0)),F=A(`ref:1:2`,()=>t(0)),se=A(`ref:1:3`,()=>t(0)),I=0,L=0,R=new WeakMap,ce=new WeakMap,le=`rue-demo-nonce`,ue=`rue-shadow-console`,de=`rue-light-signal`,fe=E(`provider:missing`),pe=[`
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

    .bridgeBox {
      display: grid;
      gap: 10px;
    }

    .bridgeContext {
      border-radius: 14px;
      padding: 10px 12px;
      background: rgba(255, 255, 255, 0.08);
      color: rgba(226, 232, 240, 0.86);
      font-size: 12px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .bridgeSlot {
      border-radius: 14px;
      padding: 10px 12px;
      background: var(--accent-soft);
      color: white;
      font-size: 12px;
      border: 1px solid rgba(255, 255, 255, 0.14);
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
  `],me=[`
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
  `],z=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},B=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),he=e=>e&&typeof e==`object`?e:void 0,V=e=>he(e.config)?.compact===!0,ge=e=>{let t=he(e.config)?.preset;return typeof t==`string`?t:`manual`},_e=e=>e?R.get(e)||(I+=1,F.value+=1,R.set(e,I),I):0,ve=e=>e?ce.get(e)||(L+=1,se.value+=1,ce.set(e,L),L):0,H=e=>Number(he(e.metrics)?.events??0),U=e=>Number(he(e.metrics)?.tags??0),W=e=>e,G=()=>{let{host:t,shadowRoot:n,mountId:i}=A(`useSetup:0:0`,()=>m(()=>{let e=M();return{host:e,shadowRoot:re(),mountId:ve(e)}}));return g(a=>{let o=y(`p`,a);c(o,`lightMeta`),r(o,C(`实例 #`));let s=l(`rue:slot:anchor`);r(o,s),k(()=>{let t=i;e(()=>b(t,o,s))}),r(o,C(` · `));let u=l(`rue:slot:anchor`);r(o,u),k(()=>{let n=t?.tagName.toLowerCase()??`unknown-host`;e(()=>b(n,o,u))}),r(o,C(` ·`));let d=l(`rue:slot:anchor`);r(o,d),k(()=>{e(()=>b(` `,o,d))}),r(o,C(` `));let f=l(`rue:slot:anchor`);return r(o,f),k(()=>{let t=n?`shadow-root`:`light-dom`;e(()=>b(t,o,f))}),o})},ye=t=>{let{host:a,shadowRoot:s,bridgeChannel:f,emit:p,mountId:v,count:x,accent:S,panelTitle:E,tags:D,busy:j,meterWidth:te}=A(`useSetup:0:0:dup1`,()=>m(()=>{let e=M(),r=re(),a=u(fe),o=A(`computed:1:4`,()=>i(()=>n(t))),s=_e(e),c=A(`computed:1:5`,()=>i(()=>Number(t.count??0))),l=c;return{host:e,shadowRoot:r,bridgeChannel:a,emit:o,mountId:s,count:c,accent:A(`computed:1:6`,()=>i(()=>String(t.accent??`teal`))),panelTitle:A(`computed:1:7`,()=>i(()=>String(t.panelTitle??`Shadow console`))),tags:A(`computed:1:8`,()=>i(()=>Array.isArray(t.tags)?t.tags:[])),busy:A(`computed:1:9`,()=>i(()=>t.busy===!0)),meterWidth:A(`computed:1:10`,()=>i(()=>`${Math.max(8,Math.min(l.get()*9,100))}%`))}}));return g(n=>{let i=y(`article`,n);k(()=>{c(i,`frame ${V(t)?`compact`:``}`)}),k(()=>{_(i,`data-accent`,String(S.get()))}),k(()=>{_(i,`data-busy`,String(j.get()?`yes`:`no`))});let u=y(`header`,i);r(i,u),c(u,`hero`);let m=y(`div`,u);r(u,m);let A=y(`p`,m);r(m,A),c(A,`eyebrow`),r(A,C(`Shadow Root / Slot / CustomEvent`));let M=y(`h2`,m);r(m,M),c(M,`title`);let re=l(`rue:slot:anchor`);r(M,re),k(()=>{let t=E.get();e(()=>b(t,M,re))});let N=y(`p`,m);r(m,N),c(N,`subtitle`),r(N,C(`实例 #`));let ie=l(`rue:slot:anchor`);r(N,ie),k(()=>{let t=v;e(()=>b(t,N,ie))}),r(N,C(` · `));let P=h(N);r(N,P),k(()=>{O(P,a?.tagName.toLowerCase()??`unknown-host`)}),r(N,C(` ·`));let ae=h(N);r(N,ae),O(ae,` `),r(N,C(` `));let oe=h(N);r(N,oe),k(()=>{O(oe,s?`shadow-root 已开启`:`light-dom`)});let F=y(`div`,u);r(u,F),c(F,`actions`);let se=y(`button`,F);r(F,se),_(se,`type`,`button`),c(se,`button primary`),o(se,`click`,()=>{p.get()(`save`,{mountId:v,panelTitle:E.get(),count:x.get(),tags:D.get(),busy:j.get()},{host:a?.tagName.toLowerCase()??`unknown`,rootMode:s?`shadow`:`light`})}),r(se,C(`派发 save`));let I=y(`button`,F);r(F,I),_(I,`type`,`button`),c(I,`button`),o(I,`click`,()=>{p.get()(`pulse`,x.get()+1,S.get())}),r(I,C(`派发 pulse`));let L=y(`div`,i);r(i,L),c(L,`grid`);let R=y(`section`,L);r(L,R),c(R,`panel`);let ce=y(`div`,R);r(R,ce),c(ce,`metricValue`);let le=l(`rue:slot:anchor`);r(ce,le),k(()=>{let t=x.get();e(()=>b(t,ce,le))});let ue=y(`div`,R);r(R,ue),c(ue,`metricLabel`),r(ue,C(`这个数值来自宿主上的 el.props.count`));let de=y(`div`,R);r(R,de),c(de,`meter`);let fe=y(`div`,de);r(de,fe),c(fe,`meterFill`),k(()=>{d(fe,{width:te.get()})});let pe=y(`div`,R);r(R,pe),c(pe,`chips`);let me=l(`rue:slot:anchor`);r(pe,me),k(()=>{let t=D.get().length?g(()=>{let e=T(),t=l(`rue:list:start`),n=l(`rue:list:end`);r(e,t),r(e,n);let i=new Map;return k(()=>{i=ee({items:D.get()||[],getKey:(e,t)=>e,elements:i,parent:t.parentNode,before:n,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,n,i,a)=>{b(g(()=>{let t=T(),n=y(`span`,t);r(t,n),k(()=>{_(n,`key`,String(e))}),c(n,`chip`);let i=h(n);return r(n,i),k(()=>{O(i,e)}),t}),t,n)}})}),e}):g(()=>{let e=T(),t=y(`span`,e);return r(e,t),c(t,`chip muted`),r(t,C(`暂无 tags`)),e});e(()=>b(t,pe,me))});let z=y(`section`,L);r(L,z),c(z,`panel`);let B=y(`p`,z);r(z,B),c(B,`slotTitle`),r(B,C(`命名 Slot`));let he=y(`slot`,z);r(z,he),_(he,`name`,`meta`);let _e=y(`div`,z);r(z,_e),d(_e,{height:`12px`});let ve=y(`p`,z);r(z,ve),c(ve,`slotTitle`),r(ve,C(`默认 Slot`)),r(z,y(`slot`,z));let H=y(`section`,L);r(L,H),c(H,`panel`);let U=y(`p`,H);r(H,U),c(U,`slotTitle`),r(U,C(`Rue scoped slot / Context`));let W=y(`div`,H);r(H,W),c(W,`bridgeBox`);let G=y(`div`,W);r(W,G),c(G,`bridgeContext`),_(G,`data-testid`,`ce-context`),r(G,C(`Context: `));let ye=l(`rue:slot:anchor`);r(G,ye),k(()=>{let t=f;e(()=>b(t,G,ye))});let K=l(`rue:component:anchor`);r(W,K);let be=g(()=>{let e=T(),t=y(`span`,e);return r(e,t),_(t,`data-testid`,`ce-scoped-fallback`),r(t,C(`等待外层 scoped slot`)),e});k(()=>{let n=w(ne,{source:t,name:`badge`,props:{channel:f,count:x.get(),accent:S.get()},children:be});e(()=>b(n,W,K))});let q=y(`footer`,i);r(i,q),c(q,`footer`);let xe=y(`span`,q);r(q,xe),r(xe,C(`preset: `));let Se=l(`rue:slot:anchor`);r(xe,Se),k(()=>{let n=ge(t);e(()=>b(n,xe,Se))});let Ce=y(`span`,q);r(q,Ce);let we=h(Ce);r(Ce,we),k(()=>{O(we,j.get()?`后台同步中`:`空闲`)});let Te=y(`span`,q);r(q,Te);let Ee=h(Te);return r(Te,Ee),k(()=>{O(Ee,V(t)?`compact on`:`compact off`)}),i})},K=t=>{let{emit:a,label:s,tone:u}=A(`useSetup:0:0:dup2`,()=>m(()=>({emit:A(`computed:1:11`,()=>i(()=>n(t))),label:A(`computed:1:12`,()=>i(()=>String(t.label??`Light DOM signal`))),tone:A(`computed:1:13`,()=>i(()=>String(t.tone??`teal`)))})));return g(n=>{let i=y(`div`,n);k(()=>{c(i,`lightShell tone-${u.get()}`)});let d=y(`div`,i);r(i,d);let f=y(`p`,d);r(d,f),c(f,`lightTitle`);let p=l(`rue:slot:anchor`);r(f,p),k(()=>{let t=s.get();e(()=>b(t,f,p))});let m=l(`rue:component:anchor`);r(d,m),b(w(G,{}),d,m);let h=y(`div`,i);r(i,h),c(h,`lightValue`);let g=l(`rue:slot:anchor`);r(h,g),k(()=>{let n=H(t);e(()=>b(n,h,g))}),r(h,C(` events / `));let v=l(`rue:slot:anchor`);r(h,v),k(()=>{let n=U(t);e(()=>b(n,h,v))}),r(h,C(` tags`));let x=y(`button`,i);return r(i,x),_(x,`type`,`button`),c(x,`lightButton`),o(x,`click`,()=>{a.get()(`light-tap`,{label:s.get(),events:H(t),tags:U(t)})}),r(x,C(`emit`)),i})},be=N(ye,{styles:pe,nonce:le,configureApp(){ae.value+=1}}),q=N(K,{shadowRoot:!1,styles:me,configureApp(){oe.value+=1}}),xe=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};xe(ue,be),xe(de,q);var Se=String.raw`import {
  createContext,
  Slot,
  Template,
  type FC,
  onMounted,
  onUnmounted,
  ref,
  useContext,
  useCustomElement,
  useEmit,
  useHost,
  useRef,
  useShadowRoot,
} from '@rue-js/rue'

type AccentTone = 'teal' | 'amber' | 'rose'
type DemoHostElement = HTMLElement & { props?: Record<string, unknown> }
type BridgeSlotProps = {
  channel: string
  count: number
  accent: string
}

const SHADOW_NONCE = 'rue-demo-nonce'
const SHADOW_TAG = 'rue-shadow-console'
const LIGHT_TAG = 'rue-light-signal'
const BridgeContext = createContext('provider:missing')

const shadowStyles = [
  [
    ':host { display: block; color: #e5eef3; font-family: ui-sans-serif, system-ui, sans-serif; }',
    '.frame { background: linear-gradient(135deg, #0f172a, #111827 60%, #1f2937); border: 1px solid rgba(148, 163, 184, 0.22); border-radius: 24px; padding: 20px; box-shadow: 0 20px 45px rgba(15, 23, 42, 0.24); overflow: hidden; }',
    ".frame[data-busy='yes'] { box-shadow: 0 24px 52px rgba(225, 29, 72, 0.26); }",
    ".frame[data-accent='teal'] { --accent: #2dd4bf; --accent-soft: rgba(45, 212, 191, 0.16); }",
    ".frame[data-accent='amber'] { --accent: #f59e0b; --accent-soft: rgba(245, 158, 11, 0.16); }",
    ".frame[data-accent='rose'] { --accent: #fb7185; --accent-soft: rgba(251, 113, 133, 0.16); }",
    '.hero { display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-start; justify-content: space-between; }',
    '.eyebrow { margin: 0 0 6px; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(226, 232, 240, 0.72); }',
    '.title { margin: 0; font-size: 28px; line-height: 1.1; color: white; }',
    '.subtitle { margin: 8px 0 0; color: rgba(226, 232, 240, 0.84); font-size: 13px; }',
    '.actions { display: flex; flex-wrap: wrap; gap: 10px; }',
    '.button { appearance: none; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 999px; background: rgba(255, 255, 255, 0.06); color: white; padding: 10px 14px; font-size: 13px; cursor: pointer; }',
    '.button.primary { background: var(--accent); color: #04111b; border-color: transparent; font-weight: 700; }',
    '.grid { margin-top: 18px; display: grid; gap: 14px; grid-template-columns: repeat(2, minmax(0, 1fr)); }',
    '.frame.compact .grid { grid-template-columns: 1fr; }',
    '.panel { border: 1px solid rgba(148, 163, 184, 0.16); background: rgba(15, 23, 42, 0.48); border-radius: 18px; padding: 14px; }',
    '.metricValue { font-size: 44px; font-weight: 800; color: white; line-height: 1; }',
    '.metricLabel { margin-top: 4px; font-size: 12px; color: rgba(226, 232, 240, 0.76); }',
    '.meter { margin-top: 14px; height: 10px; border-radius: 999px; background: rgba(148, 163, 184, 0.18); overflow: hidden; }',
    '.meterFill { height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--accent), white); }',
    '.chips { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }',
    '.chip { display: inline-flex; align-items: center; border-radius: 999px; padding: 6px 10px; font-size: 12px; background: var(--accent-soft); color: white; border: 1px solid rgba(255, 255, 255, 0.12); }',
    '.chip.muted { background: rgba(148, 163, 184, 0.18); color: rgba(226, 232, 240, 0.76); }',
    '.slotTitle { margin: 0 0 10px; font-size: 12px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(226, 232, 240, 0.6); }',
    '.bridgeBox { display: grid; gap: 10px; }',
    '.bridgeContext, .bridgeSlot { border-radius: 14px; padding: 10px 12px; color: white; font-size: 12px; border: 1px solid rgba(255, 255, 255, 0.14); }',
    '.bridgeContext { background: rgba(255, 255, 255, 0.08); }',
    '.bridgeSlot { background: var(--accent-soft); }',
    '.footer { margin-top: 16px; display: flex; flex-wrap: wrap; gap: 10px; font-size: 12px; color: rgba(226, 232, 240, 0.7); }',
  ].join('\n'),
  [
    "::slotted([slot='meta']) { display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 6px 12px; border: 1px solid rgba(255, 255, 255, 0.16); background: rgba(255, 255, 255, 0.08); font-size: 12px; color: white; }",
    '::slotted(*) { color: inherit; }',
  ].join('\n'),
]

const lightStyles = [
  [
    ':host { display: block; }',
    '.lightShell { display: grid; grid-template-columns: minmax(0, 1fr) auto auto; align-items: center; gap: 12px; border-radius: 20px; padding: 14px 16px; border: 1px solid rgba(15, 23, 42, 0.08); background: white; box-shadow: 0 14px 30px rgba(15, 23, 42, 0.08); }',
    '.lightShell.tone-teal { border-color: rgba(13, 148, 136, 0.2); background: linear-gradient(135deg, rgba(240, 253, 250, 0.96), white); }',
    '.lightShell.tone-amber { border-color: rgba(217, 119, 6, 0.2); background: linear-gradient(135deg, rgba(255, 251, 235, 0.96), white); }',
    '.lightShell.tone-rose { border-color: rgba(225, 29, 72, 0.18); background: linear-gradient(135deg, rgba(255, 241, 242, 0.98), white); }',
    '.lightTitle { margin: 0; font-size: 16px; font-weight: 700; color: #0f172a; }',
    '.lightMeta { margin-top: 4px; font-size: 12px; color: rgba(15, 23, 42, 0.64); }',
    '.lightValue { font-size: 13px; font-weight: 700; color: #334155; }',
    '.lightButton { appearance: none; border: 0; border-radius: 999px; background: #0f172a; color: white; padding: 8px 12px; cursor: pointer; font-size: 12px; }',
  ].join('\n'),
]

const parseTagInput = (value: string) =>
  value
    .split(',')
    .map(item => item.trim())
    .filter(Boolean)

const readRecordProp = (value: unknown) =>
  value && typeof value === 'object' ? (value as Record<string, unknown>) : undefined

const readLightMetric = (props: Record<string, unknown>, key: string) =>
  Number(readRecordProp(props.metrics)?.[key] ?? 0)

const toneToLight = (accent: AccentTone) => accent

const ShadowConsole: FC<Record<string, unknown>> = props => {
  const host = useHost()
  const shadowRoot = useShadowRoot()
  const bridgeChannel = useContext(BridgeContext)
  const emit = useEmit(props as any)

  const count = Number(props.count ?? 0)
  const accent = String(props.accent ?? 'teal')
  const panelTitle = String(props.panelTitle ?? 'Shadow console')
  const tags = Array.isArray(props.tags) ? (props.tags as string[]) : []
  const busy = props.busy === true
  const compact = readRecordProp(props.config)?.compact === true
  const preset = String(readRecordProp(props.config)?.preset ?? 'manual')
  const meterWidth = Math.max(8, Math.min(count * 9, 100)) + '%'

  return (
    <article
      className={'frame' + (compact ? ' compact' : '')}
      data-accent={accent}
      data-busy={busy ? 'yes' : 'no'}
    >
      <header className="hero">
        <div>
          <p className="eyebrow">Shadow Root / Slot / CustomEvent</p>
          <h2 className="title">{panelTitle}</h2>
          <p className="subtitle">
            {host?.tagName.toLowerCase() ?? 'unknown-host'} /{' '}
            {shadowRoot ? 'shadow-root 已开启' : 'light-dom'}
          </p>
        </div>
        <div className="actions">
          <button
            type="button"
            className="button primary"
            onClick={() => {
              emit(
                'save',
                { panelTitle, count, tags, busy },
                { rootMode: shadowRoot ? 'shadow' : 'light' },
              )
            }}
          >
            派发 save
          </button>
          <button
            type="button"
            className="button"
            onClick={() => {
              emit('pulse', count + 1, accent)
            }}
          >
            派发 pulse
          </button>
        </div>
      </header>

      <div className="grid">
        <section className="panel">
          <div className="metricValue">{count}</div>
          <div className="metricLabel">来自宿主 el.props.count</div>
          <div className="meter">
            <div className="meterFill" style={{ width: meterWidth }}></div>
          </div>
          <div className="chips">
            {tags.length ? (
              tags.map(tag => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))
            ) : (
              <span className="chip muted">暂无 tags</span>
            )}
          </div>
        </section>

        <section className="panel">
          <p className="slotTitle">命名 Slot</p>
          <slot name="meta"></slot>
          <div style={{ height: '12px' }}></div>
          <p className="slotTitle">默认 Slot</p>
          <slot></slot>
        </section>

        <section className="panel">
          <p className="slotTitle">Rue scoped slot / Context</p>
          <div className="bridgeBox">
            <div className="bridgeContext">Context: {bridgeChannel}</div>
            <Slot
              source={props}
              name="badge"
              props={{ channel: bridgeChannel, count, accent } satisfies BridgeSlotProps}
            >
              <span>等待外层 scoped slot</span>
            </Slot>
          </div>
        </section>
      </div>

      <footer className="footer">
        <span>preset: {preset}</span>
        <span>{busy ? '后台同步中' : '空闲'}</span>
        <span>{compact ? 'compact on' : 'compact off'}</span>
      </footer>
    </article>
  )
}

const LightSignalMeta: FC = () => {
  const host = useHost()
  const shadowRoot = useShadowRoot()

  return (
    <p className="lightMeta">
      {host?.tagName.toLowerCase() ?? 'unknown-host'} / {shadowRoot ? 'shadow-root' : 'light-dom'}
    </p>
  )
}

const LightSignal: FC<Record<string, unknown>> = props => {
  const emit = useEmit(props as any)
  const label = String(props.label ?? 'Light DOM signal')
  const tone = String(props.tone ?? 'teal')

  return (
    <div className={'lightShell tone-' + tone}>
      <div>
        <p className="lightTitle">{label}</p>
        <LightSignalMeta />
      </div>
      <div className="lightValue">
        {readLightMetric(props, 'events')} events / {readLightMetric(props, 'tags')} tags
      </div>
      <button
        type="button"
        className="lightButton"
        onClick={() => {
          emit('light-tap', {
            label,
            events: readLightMetric(props, 'events'),
            tags: readLightMetric(props, 'tags'),
          })
        }}
      >
        emit
      </button>
    </div>
  )
}

const ShadowConsoleElement = useCustomElement(ShadowConsole, {
  styles: shadowStyles,
  nonce: SHADOW_NONCE,
  configureApp() {
    console.log('shadow custom element app configured')
  },
})

const LightSignalElement = useCustomElement(LightSignal, {
  shadowRoot: false,
  styles: lightStyles,
  configureApp() {
    console.log('light custom element app configured')
  },
})

const registerCustomElement = (tag: string, ctor: CustomElementConstructor) => {
  if (typeof customElements !== 'undefined' && !customElements.get(tag)) {
    customElements.define(tag, ctor)
  }
}

registerCustomElement(SHADOW_TAG, ShadowConsoleElement)
registerCustomElement(LIGHT_TAG, LightSignalElement)

const WebComponentsCopyableDemo: FC = () => {
  const panelTitle = ref('Ops Console / Native CE')
  const accent = ref<AccentTone>('teal')
  const count = ref(7)
  const tagInput = ref('shadow, events, slots, props')
  const busy = ref(false)
  const compact = ref(false)
  const eventLog = ref('等待 CustomEvent')

  const shadowHostRef = useRef<DemoHostElement>()
  const lightHostRef = useRef<DemoHostElement>()

  const shadowPropsPayload = () => ({
    count: count.value,
    tags: parseTagInput(tagInput.value),
    config: { compact: compact.value, preset: 'ops' },
    busy: busy.value,
  })

  const lightPropsPayload = () => ({
    metrics: {
      events: eventLog.value === '等待 CustomEvent' ? 0 : 1,
      tags: parseTagInput(tagInput.value).length,
      busy: busy.value,
    },
  })

  const syncHosts = () => {
    const shadowHost = shadowHostRef.current
    if (shadowHost) {
      shadowHost.setAttribute('panel-title', panelTitle.value)
      shadowHost.setAttribute('accent', accent.value)
      shadowHost.props = shadowPropsPayload()
    }

    const lightHost = lightHostRef.current
    if (lightHost) {
      lightHost.setAttribute('label', 'Light DOM signal')
      lightHost.setAttribute('tone', toneToLight(accent.value))
      lightHost.props = lightPropsPayload()
    }
  }

  const handleShadowSave = (event: Event) => {
    eventLog.value = JSON.stringify((event as CustomEvent).detail, null, 2)
    syncHosts()
  }

  const handleShadowPulse = (event: Event) => {
    eventLog.value = JSON.stringify((event as CustomEvent).detail, null, 2)
    syncHosts()
  }

  const bindCustomEvent = (el: DemoHostElement | undefined, name: string) => {
    if (!el) {
      return () => {}
    }

    const handler = (event: Event) => {
      eventLog.value = JSON.stringify((event as CustomEvent).detail, null, 2)
      syncHosts()
    }

    el.addEventListener(name, handler as EventListener)
    return () => {
      el.removeEventListener(name, handler as EventListener)
    }
  }

  onMounted(() => {
    let offLightTap = () => {}

    Promise.resolve().then(() => {
      syncHosts()
      offLightTap = bindCustomEvent(lightHostRef.current, 'light-tap')
    })

    onUnmounted(() => {
      offLightTap()
    })
  })

  return (
    <BridgeContext.Provider value={'ops:' + accent.value}>
      <div className="space-y-4">
        <label>
          panel-title
          <input
            value={panelTitle.value}
            onInput={(event: Event) => {
              panelTitle.value = (event.target as HTMLInputElement).value
              syncHosts()
            }}
          />
        </label>

        <label>
          tags
          <input
            value={tagInput.value}
            onInput={(event: Event) => {
              tagInput.value = (event.target as HTMLInputElement).value
              syncHosts()
            }}
          />
        </label>

        <label>
          count
          <input
            type="range"
            min="1"
            max="15"
            value={count.value}
            onInput={(event: Event) => {
              count.value = Number((event.target as HTMLInputElement).value)
              syncHosts()
            }}
          />
        </label>

        <label>
          busy
          <input
            type="checkbox"
            checked={busy.value}
            onChange={(event: Event) => {
              busy.value = (event.target as HTMLInputElement).checked
              syncHosts()
            }}
          />
        </label>

        <label>
          compact
          <input
            type="checkbox"
            checked={compact.value}
            onChange={(event: Event) => {
              compact.value = (event.target as HTMLInputElement).checked
              syncHosts()
            }}
          />
        </label>

        <select
          value={accent.value}
          onChange={(event: Event) => {
            accent.value = (event.target as HTMLSelectElement).value as AccentTone
            syncHosts()
          }}
        >
          <option value="teal">teal</option>
          <option value="amber">amber</option>
          <option value="rose">rose</option>
        </select>

        <rue-shadow-console
          ref={shadowHostRef}
          onSave={handleShadowSave}
          onPulse={handleShadowPulse}
        >
          <div slot="meta">SLA 99.99%</div>

          <p>
            默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。
          </p>

          <Template slot="badge">
            {(({ channel, count, accent }: BridgeSlotProps) => (
              <strong>
                {channel} / {count} / {accent}
              </strong>
            )) as any}
          </Template>
        </rue-shadow-console>

        <rue-light-signal ref={lightHostRef}></rue-light-signal>

        <pre>{eventLog.value}</pre>
      </div>
    </BridgeContext.Provider>
  )
}

export default WebComponentsCopyableDemo`,Ce=()=>{let{activeTab:n,panelTitle:i,accent:u,count:d,tagInput:E,busy:ne,compact:M,activePreset:re,slotNote:N,metaBadge:I,lightLabel:L,eventLog:R,shadowNonce:ce,shadowStyleCount:le,lightStyleCount:ue,shadowHostRef:de,lightHostRef:pe,shadowPropsPayload:me,lightPropsPayload:he,refreshDiagnostics:V,scheduleDiagnostics:ge,syncShadowHost:_e,syncLightHost:ve,syncHosts:H,pushEvent:U,handleShadowSave:G,handleShadowPulse:ye,bindCustomEvent:K,applyPreset:be,appendTag:q,removeLastTag:xe,clearTitleAttr:Ce,clearEvents:we}=A(`useSetup:0:0:dup3`,()=>m(()=>{let e=A(`ref:1:14`,()=>t(`preview`)),n=A(`ref:1:15`,()=>t(`Ops Console / Native CE`)),r=A(`ref:1:16`,()=>t(`teal`)),i=A(`ref:1:17`,()=>t(7)),a=A(`ref:1:18`,()=>t(`shadow, events, slots, props`)),o=A(`ref:1:19`,()=>t(!1)),s=A(`ref:1:20`,()=>t(!1)),c=A(`ref:1:21`,()=>t(`ops`)),l=A(`ref:1:22`,()=>t(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),u=A(`ref:1:23`,()=>t(`SLA 99.99%`)),d=A(`ref:1:24`,()=>t(`Light DOM signal`)),f=A(`ref:1:25`,()=>t([])),m=A(`ref:1:26`,()=>t(`等待挂载`)),h=A(`ref:1:27`,()=>t(0)),g=A(`ref:1:28`,()=>t(0)),_=A(`useRef:1:29`,()=>S()),v=A(`useRef:1:30`,()=>S()),y=()=>({count:i.value,tags:B(a.value),config:{compact:s.value,preset:c.value},busy:o.value}),b=()=>({metrics:{events:f.value.length,tags:B(a.value).length,busy:o.value}}),C=()=>{let e=_.current,t=v.current;h.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,m.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,g.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},w=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{C()})})},T=()=>{let e=_.current;if(!e)return;let t=n.value.trim();t?e.setAttribute(`panel-title`,t):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,r.value),e.props=y()},E=()=>{let e=v.current;if(!e)return;let t=d.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,W(r.value)),e.props=b()},D=()=>{T(),E(),w()},O=(e,t,n)=>{f.value=[{source:e,name:t,detail:z(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...f.value].slice(0,8),E(),w()},k=e=>{O(`shadow`,`save`,e.detail)},ee=e=>{O(`shadow`,`pulse`,e.detail)},j=(e,t,n)=>{if(!e)return()=>{};let r=e=>{O(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return x(()=>{let e=()=>{};Promise.resolve().then(()=>{D(),e=j(v.current,`light-tap`,`light`),w()}),p(()=>{e()})}),{activeTab:e,panelTitle:n,accent:r,count:i,tagInput:a,busy:o,compact:s,activePreset:c,slotNote:l,metaBadge:u,lightLabel:d,eventLog:f,shadowNonce:m,shadowStyleCount:h,lightStyleCount:g,shadowHostRef:_,lightHostRef:v,shadowPropsPayload:y,lightPropsPayload:b,refreshDiagnostics:C,scheduleDiagnostics:w,syncShadowHost:T,syncLightHost:E,syncHosts:D,pushEvent:O,handleShadowSave:k,handleShadowPulse:ee,bindCustomEvent:j,applyPreset:e=>{c.value=e,e===`ops`?(n.value=`Ops Console / Native CE`,r.value=`teal`,i.value=7,a.value=`shadow, events, slots, props`,l.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,u.value=`SLA 99.99%`,d.value=`Light DOM signal`,o.value=!1,s.value=!1):e===`commerce`?(n.value=`Commerce Fulfillment Board`,r.value=`amber`,i.value=11,a.value=`checkout, fulfillment, analytics, queue`,l.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,u.value=`AOV +18%`,d.value=`Revenue pulse`,o.value=!1,s.value=!0):(n.value=`Incident Bridge / P1`,r.value=`rose`,i.value=13,a.value=`incident, pager, bridge, rollback`,l.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,u.value=`P1 ongoing`,d.value=`War-room heartbeat`,o.value=!0,s.value=!1),D()},appendTag:()=>{let e=B(a.value);e.push(`tag-${e.length+1}`),a.value=e.join(`, `),D()},removeLastTag:()=>{let e=B(a.value);e.pop(),a.value=e.join(`, `),D()},clearTitleAttr:()=>{n.value=``,D()},clearEvents:()=>{f.value=[],E(),w()}}}));return g(t=>{let p=T(),m=l(`rue:component:anchor`);return r(p,m),b(w(P,{children:g(()=>{let t=T(),p=y(`h1`,t);r(t,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),r(p,C(`原生 Web Components`));let m=y(`p`,t);r(t,m),c(m,`text-base-content/70 max-w-4xl leading-7`),r(m,C(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let x=y(`div`,t);r(t,x),_(x,`role`,`tablist`),c(x,`tabs tabs-box mt-4`);let S=y(`button`,x);r(x,S),_(S,`role`,`tab`),k(()=>{c(S,`tab ${n.value===`preview`?`tab-active`:``}`)}),o(S,`click`,()=>{n.value=`preview`}),r(S,C(`效果`));let A=y(`button`,x);r(x,A),_(A,`role`,`tab`),k(()=>{c(A,`tab ${n.value===`code`?`tab-active`:``}`)}),o(A,`click`,()=>{n.value=`code`}),r(A,C(`代码`));let P=y(`div`,t);r(t,P),k(()=>{c(P,n.value===`preview`?`mt-4 space-y-6`:`hidden`)});let V=y(`div`,P);r(P,V),c(V,`grid gap-6 items-start`);let U=y(`div`,V);r(V,U),c(U,`card bg-base-100 shadow-xl border border-base-300`);let W=y(`div`,U);r(U,W),c(W,`card-body gap-5`);let K=y(`div`,W);r(W,K);let Te=y(`p`,K);r(K,Te),c(Te,`text-xs uppercase tracking-[0.28em] text-base-content/45`),r(Te,C(`Preset`));let Ee=y(`div`,K);r(K,Ee),c(Ee,`mt-3 flex w-full gap-2`);let De=l(`rue:list:start`),Oe=l(`rue:list:end`);r(Ee,De),r(Ee,Oe);let ke=new Map;k(()=>{ke=ee({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ke,parent:Ee,before:Oe,singleRoot:!0,trackIndex:!1,start:De,renderItem:(e,t,n,i,a)=>{b(g(()=>{let t=T(),n=y(`button`,t);r(t,n),k(()=>{_(n,`key`,String(e))}),k(()=>{c(n,`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${re.value===e?`btn-primary`:`btn-outline`}`)}),o(n,`click`,()=>be(e));let i=h(n);return r(n,i),k(()=>{O(i,e)}),t}),t,n)}})});let Ae=y(`label`,W);r(W,Ae),c(Ae,`floating-label`);let je=y(`input`,Ae);r(Ae,je),c(je,`input input-bordered w-full`),k(()=>{s(je,i.value)}),o(je,`input`,e=>{i.value=e.target.value,_e(),ge()});let Me=y(`span`,Ae);r(Ae,Me),r(Me,C(`panel-title attribute`));let Ne=y(`label`,W);r(W,Ne),c(Ne,`floating-label`);let Pe=y(`input`,Ne);r(Ne,Pe),c(Pe,`input input-bordered w-full`),k(()=>{s(Pe,E.value)}),o(Pe,`input`,e=>{E.value=e.target.value,H()});let Fe=y(`span`,Ne);r(Ne,Fe),r(Fe,C(`host.props.tags（逗号分隔）`));let Ie=y(`label`,W);r(W,Ie),c(Ie,`floating-label`);let Le=y(`input`,Ie);r(Ie,Le),c(Le,`input input-bordered w-full`),k(()=>{s(Le,N.value)}),o(Le,`input`,e=>{N.value=e.target.value});let Re=y(`span`,Ie);r(Ie,Re),r(Re,C(`默认 slot 文案`));let ze=y(`div`,W);r(W,ze),c(ze,`grid gap-3 sm:grid-cols-2`);let Be=y(`fieldset`,ze);r(ze,Be),c(Be,`fieldset`);let Ve=y(`legend`,Be);r(Be,Ve),c(Ve,`fieldset-legend`),r(Ve,C(`accent attribute`));let J=y(`select`,Be);r(Be,J),c(J,`select select-bordered`),k(()=>{s(J,u.value)}),o(J,`change`,e=>{u.value=e.target.value,H()});let He=y(`option`,J);r(J,He),_(He,`value`,`teal`),r(He,C(`teal`));let Ue=y(`option`,J);r(J,Ue),_(Ue,`value`,`amber`),r(Ue,C(`amber`));let We=y(`option`,J);r(J,We),_(We,`value`,`rose`),r(We,C(`rose`));let Ge=y(`fieldset`,ze);r(ze,Ge),c(Ge,`fieldset`);let Ke=y(`legend`,Ge);r(Ge,Ke),c(Ke,`fieldset-legend`),r(Ke,C(`light label attribute`));let qe=y(`input`,Ge);r(Ge,qe),c(qe,`input input-bordered`),k(()=>{s(qe,L.value)}),o(qe,`input`,e=>{L.value=e.target.value,ve(),ge()});let Je=y(`div`,W);r(W,Je);let Ye=y(`div`,Je);r(Je,Ye),c(Ye,`flex items-center justify-between text-sm mb-2`);let Xe=y(`span`,Ye);r(Ye,Xe),r(Xe,C(`host.props.count`));let Ze=y(`span`,Ye);r(Ye,Ze),c(Ze,`font-semibold`);let Qe=h(Ze);r(Ze,Qe),k(()=>{O(Qe,d.value)});let $e=y(`input`,Je);r(Je,$e),_($e,`type`,`range`),_($e,`min`,`1`),_($e,`max`,`15`),k(()=>{s($e,d.value)}),c($e,`range range-primary`),o($e,`input`,e=>{d.value=Number(e.target.value),_e(),ge()});let et=y(`div`,W);r(W,et),c(et,`grid gap-3 sm:grid-cols-2`);let tt=y(`label`,et);r(et,tt),c(tt,`label cursor-pointer justify-start gap-3`);let nt=y(`input`,tt);r(tt,nt),_(nt,`type`,`checkbox`),c(nt,`toggle toggle-primary`),k(()=>{D(nt,!!ne.value)}),o(nt,`change`,e=>{ne.value=e.target.checked,H()});let rt=y(`span`,tt);r(tt,rt),c(rt,`label-text`),r(rt,C(`host.props.busy`));let it=y(`label`,et);r(et,it),c(it,`label cursor-pointer justify-start gap-3`);let at=y(`input`,it);r(it,at),_(at,`type`,`checkbox`),c(at,`toggle toggle-secondary`),k(()=>{D(at,!!M.value)}),o(at,`change`,e=>{M.value=e.target.checked,_e(),ge()});let ot=y(`span`,it);r(it,ot),c(ot,`label-text`),r(ot,C(`host.props.config.compact`));let Y=y(`div`,W);r(W,Y),c(Y,`grid gap-2 sm:grid-cols-2`);let st=y(`button`,Y);r(Y,st),c(st,`btn btn-primary`),o(st,`click`,q),r(st,C(`追加 tag`));let ct=y(`button`,Y);r(Y,ct),c(ct,`btn btn-outline`),o(ct,`click`,xe),r(ct,C(`删除最后一个 tag`));let lt=y(`button`,Y);r(Y,lt),c(lt,`btn btn-secondary`),o(lt,`click`,()=>{d.value+=2,_e(),ge()}),r(lt,C(`count + 2`));let ut=y(`button`,Y);r(Y,ut),c(ut,`btn btn-ghost`),o(ut,`click`,Ce),r(ut,C(`移除 title attribute`));let X=y(`div`,V);r(V,X),c(X,`space-y-6`);let dt=y(`div`,X);r(X,dt),c(dt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let Z=y(`div`,dt);r(dt,Z),c(Z,`card-body gap-5`);let ft=y(`div`,Z);r(Z,ft),c(ft,`flex flex-wrap items-center justify-between gap-4`);let pt=y(`div`,ft);r(ft,pt);let mt=y(`p`,pt);r(pt,mt),c(mt,`text-xs uppercase tracking-[0.28em] text-base-content/45`),r(mt,C(`Live Preview`));let ht=y(`h2`,pt);r(pt,ht),c(ht,`text-2xl font-semibold mt-2`),r(ht,C(`Shadow + Light 双宿主联动`));let Q=y(`div`,ft);r(ft,Q),c(Q,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let gt=y(`div`,Q);r(Q,gt),c(gt,`stat py-3 px-4`);let _t=y(`div`,gt);r(gt,_t),c(_t,`stat-title`),r(_t,C(`shadow configureApp`));let vt=y(`div`,gt);r(gt,vt),c(vt,`stat-value text-lg`);let yt=h(vt);r(vt,yt),k(()=>{O(yt,ae.value)});let bt=y(`div`,Q);r(Q,bt),c(bt,`stat py-3 px-4`);let xt=y(`div`,bt);r(bt,xt),c(xt,`stat-title`),r(xt,C(`light configureApp`));let St=y(`div`,bt);r(bt,St),c(St,`stat-value text-lg`);let Ct=h(St);r(St,Ct),k(()=>{O(Ct,oe.value)});let wt=y(`div`,Q);r(Q,wt),c(wt,`stat py-3 px-4`);let Tt=y(`div`,wt);r(wt,Tt),c(Tt,`stat-title`),r(Tt,C(`mounted instances`));let Et=y(`div`,wt);r(wt,Et),c(Et,`stat-value text-lg`);let Dt=h(Et);r(Et,Dt),k(()=>{O(Dt,F.value+se.value)});let Ot=y(`div`,Z);r(Z,Ot),k(()=>{c(Ot,`alert ${R.value.length?`alert-success`:`alert-soft`} py-3`)}),_(Ot,`data-testid`,`ce-latest-event`);let kt=y(`span`,Ot);r(Ot,kt);let At=h(kt);r(kt,At),k(()=>{O(At,R.value.length?`最近事件：${R.value[0].source}.${R.value[0].name} \xb7 ${R.value[0].at}`:`等待自定义元素事件`)});let jt=l(`rue:component:anchor`);r(Z,jt);let Mt=g(()=>{let e=T(),t=y(`div`,e);r(e,t),c(t,`space-y-4`);let n=y(`rue-shadow-console`,t);f(n,`__rue_context_parent_instance__`,a()),r(t,n);let i=j(n,()=>de);v(()=>{i()}),o(n,`save`,G),o(n,`pulse`,ye),f(n,`__rue_slots`,{badge:({channel:e,count:t,accent:n})=>te(`div`,{className:`bridgeSlot`,"data-testid":`ce-scoped-slot`,children:[e,` / `,t,` / `,n]})});let s=y(`div`,n);r(n,s),_(s,`slot`,`meta`);let u=y(`span`,s);r(s,u),c(u,`status status-success`);let d=y(`span`,s);r(s,d);let p=h(d);r(d,p),k(()=>{O(p,I.value)});let m=y(`div`,n);r(n,m),c(m,`space-y-3 text-sm text-base-content/80`);let x=y(`p`,m);r(m,x);let S=h(x);r(x,S),k(()=>{O(S,N.value)});let C=y(`div`,m);r(m,C),c(C,`flex flex-wrap gap-2`);let w=l(`rue:list:start`),D=l(`rue:list:end`);r(C,w),r(C,D);let A=new Map;k(()=>{A=ee({items:B(E.value)||[],getKey:(e,t)=>e,elements:A,parent:C,before:D,singleRoot:!0,trackIndex:!1,start:w,renderItem:(e,t,n,i,a)=>{b(g(()=>{let t=T(),n=y(`span`,t);r(t,n),k(()=>{_(n,`key`,String(e))}),c(n,`badge badge-outline`);let i=h(n);return r(n,i),k(()=>{O(i,e)}),t}),t,n)}})});let ne=y(`rue-light-signal`,t);f(ne,`__rue_context_parent_instance__`,a()),r(t,ne);let M=j(ne,()=>pe);return v(()=>{M()}),e});k(()=>{let t=w(fe.Provider,{value:`${re.value}:${u.value}`,children:Mt});e(()=>b(t,Z,jt))});let Nt=y(`div`,X);r(X,Nt),c(Nt,`grid gap-6`);let Pt=y(`div`,Nt);r(Nt,Pt),c(Pt,`card bg-base-100 shadow border border-base-300`);let Ft=y(`div`,Pt);r(Pt,Ft),c(Ft,`card-body gap-4`);let It=y(`div`,Ft);r(Ft,It),c(It,`flex items-center justify-between gap-3`);let Lt=y(`h3`,It);r(It,Lt),c(Lt,`card-title text-lg`),r(Lt,C(`运行时诊断`));let Rt=y(`span`,It);r(It,Rt),c(Rt,`badge badge-primary badge-outline`),r(Rt,C(`nonce / styles / mode`));let $=y(`ul`,Ft);r(Ft,$),c($,`list bg-base-100 rounded-box`);let zt=y(`li`,$);r($,zt),c(zt,`list-row`);let Bt=y(`div`,zt);r(zt,Bt),c(Bt,`font-medium`),r(Bt,C(`shadow style tags`));let Vt=y(`div`,zt);r(zt,Vt),c(Vt,`text-right`);let Ht=h(Vt);r(Vt,Ht),k(()=>{O(Ht,le.value)});let Ut=y(`li`,$);r($,Ut),c(Ut,`list-row`);let Wt=y(`div`,Ut);r(Ut,Wt),c(Wt,`font-medium`),r(Wt,C(`shadow nonce`));let Gt=y(`div`,Ut);r(Ut,Gt),c(Gt,`text-right break-all`);let Kt=h(Gt);r(Gt,Kt),k(()=>{O(Kt,ce.value)});let qt=y(`li`,$);r($,qt),c(qt,`list-row`);let Jt=y(`div`,qt);r(qt,Jt),c(Jt,`font-medium`),r(Jt,C(`light style tags`));let Yt=y(`div`,qt);r(qt,Yt),c(Yt,`text-right`);let Xt=h(Yt);r(Yt,Xt),k(()=>{O(Xt,ue.value)});let Zt=y(`li`,$);r($,Zt),c(Zt,`list-row`);let Qt=y(`div`,Zt);r(Zt,Qt),c(Qt,`font-medium`),r(Qt,C(`hook 期望`));let $t=y(`div`,Zt);r(Zt,$t),c($t,`text-right`),r($t,C(`shadow / light`));let en=y(`div`,Nt);r(Nt,en),c(en,`card bg-base-100 shadow border border-base-300`);let tn=y(`div`,en);r(en,tn),c(tn,`card-body gap-4`);let nn=y(`div`,tn);r(tn,nn),c(nn,`flex items-center justify-between gap-3`);let rn=y(`h3`,nn);r(nn,rn),c(rn,`card-title text-lg`),r(rn,C(`事件桥接日志`));let an=y(`button`,nn);r(nn,an),c(an,`btn btn-sm btn-ghost`),o(an,`click`,we),r(an,C(`清空`));let on=y(`div`,tn);r(tn,on),c(on,`space-y-3 max-h-[320px] overflow-auto pr-1`);let sn=l(`rue:slot:anchor`);r(on,sn),k(()=>{let t=R.value.length?g(()=>{let t=T(),n=l(`rue:list:start`),i=l(`rue:list:end`);r(t,n),r(t,i);let a=new Map;return k(()=>{a=ee({items:R.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:a,parent:n.parentNode,before:i,singleRoot:!0,start:n,renderItem:(t,n,i,a,o)=>{b(g(()=>{let n=T(),i=y(`div`,n);r(n,i),k(()=>{_(i,`key`,String(`${t.name}-${t.at}-${o}`))}),c(i,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let a=y(`div`,i);r(i,a),c(a,`flex items-center justify-between gap-3 text-sm`);let s=y(`div`,a);r(a,s),c(s,`flex items-center gap-2`);let u=y(`span`,s);r(s,u),k(()=>{c(u,`badge ${t.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`)});let d=l(`rue:slot:anchor`);r(u,d),k(()=>{let n=t.source;e(()=>b(n,u,d))});let f=y(`span`,s);r(s,f),c(f,`font-medium`);let p=l(`rue:slot:anchor`);r(f,p),k(()=>{let n=t.name;e(()=>b(n,f,p))});let m=y(`span`,a);r(a,m),c(m,`text-base-content/50`);let h=l(`rue:slot:anchor`);r(m,h),k(()=>{let n=t.at;e(()=>b(n,m,h))});let g=y(`pre`,i);r(i,g),c(g,`mt-2 text-xs whitespace-pre-wrap break-words`);let v=l(`rue:slot:anchor`);return r(g,v),k(()=>{let n=t.detail;e(()=>b(n,g,v))}),n}),n,i)}})}),t}):g(()=>{let e=T(),t=y(`div`,e);r(e,t),c(t,`alert alert-soft`);let n=y(`span`,t);return r(t,n),r(n,C(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),e});e(()=>b(t,on,sn))});let cn=y(`div`,X);r(X,cn),c(cn,`grid gap-6`);let ln=y(`div`,cn);r(cn,ln),c(ln,`card bg-base-100 shadow border border-base-300`);let un=y(`div`,ln);r(ln,un),c(un,`card-body gap-3`);let dn=y(`h3`,un);r(un,dn),c(dn,`card-title text-lg`),r(dn,C(`shadow host.props 快照`));let fn=y(`pre`,un);r(un,fn),c(fn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let pn=l(`rue:slot:anchor`);r(fn,pn),k(()=>{let t=z(me());e(()=>b(t,fn,pn))});let mn=y(`div`,cn);r(cn,mn),c(mn,`card bg-base-100 shadow border border-base-300`);let hn=y(`div`,mn);r(mn,hn),c(hn,`card-body gap-3`);let gn=y(`h3`,hn);r(hn,gn),c(gn,`card-title text-lg`),r(gn,C(`light host.props 快照`));let _n=y(`pre`,hn);r(hn,_n),c(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=l(`rue:slot:anchor`);r(_n,vn),k(()=>{let t=z(he());e(()=>b(t,_n,vn))});let yn=y(`div`,t);r(t,yn),k(()=>{c(yn,n.value===`code`?`mt-4`:`hidden`)});let bn=y(`div`,yn);r(yn,bn),c(bn,`card bg-base-100 shadow overflow-auto`);let xn=y(`div`,bn);r(bn,xn),c(xn,`card-body p-0`);let Sn=l(`rue:component:anchor`);return r(xn,Sn),k(()=>{let t=w(ie,{lang:`tsx`,code:Se});e(()=>b(t,xn,Sn))}),t})}),p,m),p})};export{Ce as default};
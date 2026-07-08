import{Kt as e,L as t,Q as n,Vt as r,Xt as i,Z as a,_t as o,an as s,at as c,bt as l,dt as u,f as d,ft as f,i as p,it as m,l as h,n as g,nt as _,o as v,on as y,pt as b,r as x,rt as S,t as C,tn as w,tt as T,u as E,vt as D,wt as O,yt as k}from"./vapor-runtime-x7F5M-49.js";import{a as A,n as ee,t as te}from"./vapor-helpers-vapor-D1LP4JjK.js";import{i as ne}from"./persistentSidebarPlayground-BeUAutTV.js";import{n as j,r as re,t as ie}from"./custom-elements-DPWAZOXg.js";import{t as M}from"./Code-BoXKy3gJ.js";import{n as ae}from"./src-Dlanwp1X.js";import{r as oe}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var se=A(`ref:1:0`,()=>i(0)),ce=A(`ref:1:1`,()=>i(0)),N=A(`ref:1:2`,()=>i(0)),le=A(`ref:1:3`,()=>i(0)),P=0,F=0,I=new WeakMap,L=new WeakMap,ue=`rue-demo-nonce`,de=`rue-shadow-console`,fe=`rue-light-signal`,pe=E(`provider:missing`),me=[`
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
  `],he=[`
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
  `],R=e=>{try{return JSON.stringify(e,null,2)}catch{return String(e)}},z=e=>e.split(`,`).map(e=>e.trim()).filter(Boolean),B=e=>e&&typeof e==`object`?e:void 0,V=e=>B(e.config)?.compact===!0,ge=e=>{let t=B(e.config)?.preset;return typeof t==`string`?t:`manual`},_e=e=>e?I.get(e)||(P+=1,N.value+=1,I.set(e,P),P):0,ve=e=>e?L.get(e)||(F+=1,le.value+=1,L.set(e,F),F):0,H=e=>Number(B(e.metrics)?.events??0),U=e=>Number(B(e.metrics)?.tags??0),W=e=>e,G=()=>{let{host:e,shadowRoot:t,mountId:i}=A(`useSetup:0:0`,()=>y(()=>{let e=j();return{host:e,shadowRoot:re(),mountId:ve(e)}}));return h(a=>{let o=S(`p`,a);b(o,`lightMeta`),n(o,m(`实例 #`));let s=T(`rue:slot:anchor`);n(o,s),r(()=>{let e=i;w(()=>v(e,o,s))}),n(o,m(` · `));let c=T(`rue:slot:anchor`);n(o,c),r(()=>{let t=e?.tagName.toLowerCase()??`unknown-host`;w(()=>v(t,o,c))}),n(o,m(` ·`));let l=T(`rue:slot:anchor`);n(o,l),r(()=>{w(()=>v(` `,o,l))}),n(o,m(` `));let u=T(`rue:slot:anchor`);return n(o,u),r(()=>{let e=t?`shadow-root`:`light-dom`;w(()=>v(e,o,u))}),o})},ye=e=>{let{host:i,shadowRoot:o,bridgeChannel:s,emit:f,mountId:p,count:g,accent:x,panelTitle:E,tags:k,busy:te,meterWidth:ie}=A(`useSetup:0:0:dup1`,()=>y(()=>{let n=j(),r=re(),i=d(pe),a=A(`computed:1:4`,()=>O(()=>t(e))),o=_e(n),s=A(`computed:1:5`,()=>O(()=>Number(e.count??0))),c=s;return{host:n,shadowRoot:r,bridgeChannel:i,emit:a,mountId:o,count:s,accent:A(`computed:1:6`,()=>O(()=>String(e.accent??`teal`))),panelTitle:A(`computed:1:7`,()=>O(()=>String(e.panelTitle??`Shadow console`))),tags:A(`computed:1:8`,()=>O(()=>Array.isArray(e.tags)?e.tags:[])),busy:A(`computed:1:9`,()=>O(()=>e.busy===!0)),meterWidth:A(`computed:1:10`,()=>O(()=>`${Math.max(8,Math.min(c.get()*9,100))}%`))}}));return h(t=>{let d=S(`article`,t);r(()=>{b(d,`frame ${V(e)?`compact`:``}`)}),r(()=>{u(d,`data-accent`,String(x.get()))}),r(()=>{u(d,`data-busy`,String(te.get()?`yes`:`no`))});let y=S(`header`,d);n(d,y),b(y,`hero`);let O=S(`div`,y);n(y,O);let A=S(`p`,O);n(O,A),b(A,`eyebrow`),n(A,m(`Shadow Root / Slot / CustomEvent`));let j=S(`h2`,O);n(O,j),b(j,`title`);let re=T(`rue:slot:anchor`);n(j,re),r(()=>{let e=E.get();w(()=>v(e,j,re))});let M=S(`p`,O);n(O,M),b(M,`subtitle`),n(M,m(`实例 #`));let ae=T(`rue:slot:anchor`);n(M,ae),r(()=>{let e=p;w(()=>v(e,M,ae))}),n(M,m(` · `));let oe=c(M);n(M,oe),r(()=>{l(oe,i?.tagName.toLowerCase()??`unknown-host`)}),n(M,m(` ·`));let se=c(M);n(M,se),l(se,` `),n(M,m(` `));let ce=c(M);n(M,ce),r(()=>{l(ce,o?`shadow-root 已开启`:`light-dom`)});let N=S(`div`,y);n(y,N),b(N,`actions`);let le=S(`button`,N);n(N,le),u(le,`type`,`button`),b(le,`button primary`),a(le,`click`,()=>{f.get()(`save`,{mountId:p,panelTitle:E.get(),count:g.get(),tags:k.get(),busy:te.get()},{host:i?.tagName.toLowerCase()??`unknown`,rootMode:o?`shadow`:`light`})}),n(le,m(`派发 save`));let P=S(`button`,N);n(N,P),u(P,`type`,`button`),b(P,`button`),a(P,`click`,()=>{f.get()(`pulse`,g.get()+1,x.get())}),n(P,m(`派发 pulse`));let F=S(`div`,d);n(d,F),b(F,`grid`);let I=S(`section`,F);n(F,I),b(I,`panel`);let L=S(`div`,I);n(I,L),b(L,`metricValue`);let ue=T(`rue:slot:anchor`);n(L,ue),r(()=>{let e=g.get();w(()=>v(e,L,ue))});let de=S(`div`,I);n(I,de),b(de,`metricLabel`),n(de,m(`这个数值来自宿主上的 el.props.count`));let fe=S(`div`,I);n(I,fe),b(fe,`meter`);let pe=S(`div`,fe);n(fe,pe),b(pe,`meterFill`),r(()=>{D(pe,{width:ie.get()})});let me=S(`div`,I);n(I,me),b(me,`chips`);let he=T(`rue:slot:anchor`);n(me,he),r(()=>{let e=k.get().length?h(()=>{let e=_(),t=T(`rue:list:start`),i=T(`rue:list:end`);n(e,t),n(e,i);let a=new Map;return r(()=>{a=ee({items:k.get()||[],getKey:(e,t)=>e,elements:a,parent:t.parentNode,before:i,singleRoot:!0,trackIndex:!1,start:t,renderItem:(e,t,i,a,o)=>{v(h(()=>{let t=_(),i=S(`span`,t);n(t,i),r(()=>{u(i,`key`,String(e))}),b(i,`chip`);let a=c(i);return n(i,a),r(()=>{l(a,e)}),t}),t,i)}})}),e}):h(()=>{let e=_(),t=S(`span`,e);return n(e,t),b(t,`chip muted`),n(t,m(`暂无 tags`)),e});w(()=>v(e,me,he))});let R=S(`section`,F);n(F,R),b(R,`panel`);let z=S(`p`,R);n(R,z),b(z,`slotTitle`),n(z,m(`命名 Slot`));let B=S(`slot`,R);n(R,B),u(B,`name`,`meta`);let _e=S(`div`,R);n(R,_e),D(_e,{height:`12px`});let ve=S(`p`,R);n(R,ve),b(ve,`slotTitle`),n(ve,m(`默认 Slot`)),n(R,S(`slot`,R));let H=S(`section`,F);n(F,H),b(H,`panel`);let U=S(`p`,H);n(H,U),b(U,`slotTitle`),n(U,m(`Rue scoped slot / Context`));let W=S(`div`,H);n(H,W),b(W,`bridgeBox`);let G=S(`div`,W);n(W,G),b(G,`bridgeContext`),u(G,`data-testid`,`ce-context`),n(G,m(`Context: `));let ye=T(`rue:slot:anchor`);n(G,ye),r(()=>{let e=s;w(()=>v(e,G,ye))});let K=T(`rue:component:anchor`);n(W,K);let be=h(()=>{let e=_(),t=S(`span`,e);return n(e,t),u(t,`data-testid`,`ce-scoped-fallback`),n(t,m(`等待外层 scoped slot`)),e});r(()=>{let t=C(ne,{source:e,name:`badge`,props:{channel:s,count:g.get(),accent:x.get()},children:be});w(()=>v(t,W,K))});let q=S(`footer`,d);n(d,q),b(q,`footer`);let xe=S(`span`,q);n(q,xe),n(xe,m(`preset: `));let Se=T(`rue:slot:anchor`);n(xe,Se),r(()=>{let t=ge(e);w(()=>v(t,xe,Se))});let Ce=S(`span`,q);n(q,Ce);let we=c(Ce);n(Ce,we),r(()=>{l(we,te.get()?`后台同步中`:`空闲`)});let Te=S(`span`,q);n(q,Te);let Ee=c(Te);return n(Te,Ee),r(()=>{l(Ee,V(e)?`compact on`:`compact off`)}),d})},K=e=>{let{emit:i,label:o,tone:s}=A(`useSetup:0:0:dup2`,()=>y(()=>({emit:A(`computed:1:11`,()=>O(()=>t(e))),label:A(`computed:1:12`,()=>O(()=>String(e.label??`Light DOM signal`))),tone:A(`computed:1:13`,()=>O(()=>String(e.tone??`teal`)))})));return h(t=>{let c=S(`div`,t);r(()=>{b(c,`lightShell tone-${s.get()}`)});let l=S(`div`,c);n(c,l);let d=S(`p`,l);n(l,d),b(d,`lightTitle`);let f=T(`rue:slot:anchor`);n(d,f),r(()=>{let e=o.get();w(()=>v(e,d,f))});let p=T(`rue:component:anchor`);n(l,p),v(C(G,{}),l,p);let h=S(`div`,c);n(c,h),b(h,`lightValue`);let g=T(`rue:slot:anchor`);n(h,g),r(()=>{let t=H(e);w(()=>v(t,h,g))}),n(h,m(` events / `));let _=T(`rue:slot:anchor`);n(h,_),r(()=>{let t=U(e);w(()=>v(t,h,_))}),n(h,m(` tags`));let y=S(`button`,c);return n(c,y),u(y,`type`,`button`),b(y,`lightButton`),a(y,`click`,()=>{i.get()(`light-tap`,{label:o.get(),events:H(e),tags:U(e)})}),n(y,m(`emit`)),c})},be=ie(ye,{styles:me,nonce:ue,configureApp(){se.value+=1}}),q=ie(K,{shadowRoot:!1,styles:he,configureApp(){ce.value+=1}}),xe=(e,t)=>{typeof customElements>`u`||customElements.get(e)||customElements.define(e,t)};xe(de,be),xe(fe,q);var Se=String.raw`import {
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

export default WebComponentsCopyableDemo`,Ce=()=>{let{activeTab:t,panelTitle:d,accent:E,count:D,tagInput:O,busy:ne,compact:j,activePreset:re,slotNote:ie,metaBadge:P,lightLabel:F,eventLog:I,shadowNonce:L,shadowStyleCount:ue,lightStyleCount:de,shadowHostRef:fe,lightHostRef:me,shadowPropsPayload:he,lightPropsPayload:B,refreshDiagnostics:V,scheduleDiagnostics:ge,syncShadowHost:_e,syncLightHost:ve,syncHosts:H,pushEvent:U,handleShadowSave:G,handleShadowPulse:ye,bindCustomEvent:K,applyPreset:be,appendTag:q,removeLastTag:xe,clearTitleAttr:Ce,clearEvents:we}=A(`useSetup:0:0:dup3`,()=>y(()=>{let e=A(`ref:1:14`,()=>i(`preview`)),t=A(`ref:1:15`,()=>i(`Ops Console / Native CE`)),n=A(`ref:1:16`,()=>i(`teal`)),r=A(`ref:1:17`,()=>i(7)),a=A(`ref:1:18`,()=>i(`shadow, events, slots, props`)),o=A(`ref:1:19`,()=>i(!1)),c=A(`ref:1:20`,()=>i(!1)),l=A(`ref:1:21`,()=>i(`ops`)),u=A(`ref:1:22`,()=>i(`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`)),d=A(`ref:1:23`,()=>i(`SLA 99.99%`)),f=A(`ref:1:24`,()=>i(`Light DOM signal`)),m=A(`ref:1:25`,()=>i([])),h=A(`ref:1:26`,()=>i(`等待挂载`)),g=A(`ref:1:27`,()=>i(0)),_=A(`ref:1:28`,()=>i(0)),v=A(`useRef:1:29`,()=>s()),y=A(`useRef:1:30`,()=>s()),b=()=>({count:r.value,tags:z(a.value),config:{compact:c.value,preset:l.value},busy:o.value}),S=()=>({metrics:{events:m.value.length,tags:z(a.value).length,busy:o.value}}),C=()=>{let e=v.current,t=y.current;g.value=e?.shadowRoot?.querySelectorAll(`style[data-rue-ce-style]`).length??0,h.value=e?.shadowRoot?.querySelector(`style[data-rue-ce-style]`)?.getAttribute(`nonce`)??`未找到 nonce`,_.value=t?.querySelectorAll(`style[data-rue-ce-style]`).length??0},w=()=>{Promise.resolve().then(()=>{Promise.resolve().then(()=>{C()})})},T=()=>{let e=v.current;if(!e)return;let r=t.value.trim();r?e.setAttribute(`panel-title`,r):e.removeAttribute(`panel-title`),e.setAttribute(`accent`,n.value),e.props=b()},E=()=>{let e=y.current;if(!e)return;let t=f.value.trim();t?e.setAttribute(`label`,t):e.removeAttribute(`label`),e.setAttribute(`tone`,W(n.value)),e.props=S()},D=()=>{T(),E(),w()},O=(e,t,n)=>{m.value=[{source:e,name:t,detail:R(n),at:new Date().toLocaleTimeString(`zh-CN`,{hour12:!1})},...m.value].slice(0,8),E(),w()},k=e=>{O(`shadow`,`save`,e.detail)},ee=e=>{O(`shadow`,`pulse`,e.detail)},te=(e,t,n)=>{if(!e)return()=>{};let r=e=>{O(n,t,e.detail)};return e.addEventListener(t,r),()=>{e.removeEventListener(t,r)}};return x(()=>{let e=()=>{};Promise.resolve().then(()=>{D(),e=te(y.current,`light-tap`,`light`),w()}),p(()=>{e()})}),{activeTab:e,panelTitle:t,accent:n,count:r,tagInput:a,busy:o,compact:c,activePreset:l,slotNote:u,metaBadge:d,lightLabel:f,eventLog:m,shadowNonce:h,shadowStyleCount:g,lightStyleCount:_,shadowHostRef:v,lightHostRef:y,shadowPropsPayload:b,lightPropsPayload:S,refreshDiagnostics:C,scheduleDiagnostics:w,syncShadowHost:T,syncLightHost:E,syncHosts:D,pushEvent:O,handleShadowSave:k,handleShadowPulse:ee,bindCustomEvent:te,applyPreset:e=>{l.value=e,e===`ops`?(t.value=`Ops Console / Native CE`,n.value=`teal`,r.value=7,a.value=`shadow, events, slots, props`,u.value=`默认 slot 里的内容仍由外层 Rue 页面控制，并由浏览器完成原生 slot 分发。`,d.value=`SLA 99.99%`,f.value=`Light DOM signal`,o.value=!1,c.value=!1):e===`commerce`?(t.value=`Commerce Fulfillment Board`,n.value=`amber`,r.value=11,a.value=`checkout, fulfillment, analytics, queue`,u.value=`这里可以放来自宿主页面的营销文案、富文本说明，或任意 DOM 结构。`,d.value=`AOV +18%`,f.value=`Revenue pulse`,o.value=!1,c.value=!0):(t.value=`Incident Bridge / P1`,n.value=`rose`,r.value=13,a.value=`incident, pager, bridge, rollback`,u.value=`slot 内容也可以随着宿主页面状态变化，这里模拟外层应用实时改写公告。`,d.value=`P1 ongoing`,f.value=`War-room heartbeat`,o.value=!0,c.value=!1),D()},appendTag:()=>{let e=z(a.value);e.push(`tag-${e.length+1}`),a.value=e.join(`, `),D()},removeLastTag:()=>{let e=z(a.value);e.pop(),a.value=e.join(`, `),D()},clearTitleAttr:()=>{t.value=``,D()},clearEvents:()=>{m.value=[],E(),w()}}}));return h(i=>{let s=_(),p=T(`rue:component:anchor`);return n(s,p),v(C(oe,{children:h(()=>{let i=_(),s=S(`h1`,i);n(i,s),b(s,`text-5xl font-semibold mb-4 md:mb-4`),n(s,m(`原生 Web Components`));let p=S(`p`,i);n(i,p),b(p,`text-base-content/70 max-w-4xl leading-7`),n(p,m(`这个示例把 Rue 的 useCustomElement、host.props 非字符串传参、宿主属性同步、CustomEvent 桥接、useHost/useShadowRoot、shadowRoot 与 light DOM、styles + nonce，以及原生 slot 投影全部揉进一个页面里。`));let y=S(`div`,i);n(i,y),u(y,`role`,`tablist`),b(y,`tabs tabs-box mt-4`);let x=S(`button`,y);n(y,x),u(x,`role`,`tab`),r(()=>{b(x,`tab ${t.value===`preview`?`tab-active`:``}`)}),a(x,`click`,()=>{t.value=`preview`}),n(x,m(`效果`));let A=S(`button`,y);n(y,A),u(A,`role`,`tab`),r(()=>{b(A,`tab ${t.value===`code`?`tab-active`:``}`)}),a(A,`click`,()=>{t.value=`code`}),n(A,m(`代码`));let oe=S(`div`,i);n(i,oe),r(()=>{b(oe,t.value===`preview`?`mt-4 space-y-6`:`hidden`)});let V=S(`div`,oe);n(oe,V),b(V,`grid gap-6 items-start`);let U=S(`div`,V);n(V,U),b(U,`card bg-base-100 shadow-xl border border-base-300`);let W=S(`div`,U);n(U,W),b(W,`card-body gap-5`);let K=S(`div`,W);n(W,K);let Te=S(`p`,K);n(K,Te),b(Te,`text-xs uppercase tracking-[0.28em] text-base-content/45`),n(Te,m(`Preset`));let Ee=S(`div`,K);n(K,Ee),b(Ee,`mt-3 flex w-full gap-2`);let De=T(`rue:list:start`),Oe=T(`rue:list:end`);n(Ee,De),n(Ee,Oe);let ke=new Map;r(()=>{ke=ee({items:[`ops`,`commerce`,`incident`],getKey:(e,t)=>e,elements:ke,parent:Ee,before:Oe,singleRoot:!0,trackIndex:!1,start:De,renderItem:(e,t,i,o,s)=>{v(h(()=>{let t=_(),i=S(`button`,t);n(t,i),r(()=>{u(i,`key`,String(e))}),r(()=>{b(i,`btn btn-sm h-9 min-h-9 min-w-0 flex-1 px-1 text-[11px] tracking-tight ${re.value===e?`btn-primary`:`btn-outline`}`)}),a(i,`click`,()=>be(e));let o=c(i);return n(i,o),r(()=>{l(o,e)}),t}),t,i)}})});let Ae=S(`label`,W);n(W,Ae),b(Ae,`floating-label`);let je=S(`input`,Ae);n(Ae,je),b(je,`input input-bordered w-full`),r(()=>{k(je,d.value)}),a(je,`input`,e=>{d.value=e.target.value,_e(),ge()});let Me=S(`span`,Ae);n(Ae,Me),n(Me,m(`panel-title attribute`));let Ne=S(`label`,W);n(W,Ne),b(Ne,`floating-label`);let Pe=S(`input`,Ne);n(Ne,Pe),b(Pe,`input input-bordered w-full`),r(()=>{k(Pe,O.value)}),a(Pe,`input`,e=>{O.value=e.target.value,H()});let Fe=S(`span`,Ne);n(Ne,Fe),n(Fe,m(`host.props.tags（逗号分隔）`));let Ie=S(`label`,W);n(W,Ie),b(Ie,`floating-label`);let Le=S(`input`,Ie);n(Ie,Le),b(Le,`input input-bordered w-full`),r(()=>{k(Le,ie.value)}),a(Le,`input`,e=>{ie.value=e.target.value});let Re=S(`span`,Ie);n(Ie,Re),n(Re,m(`默认 slot 文案`));let ze=S(`div`,W);n(W,ze),b(ze,`grid gap-3 sm:grid-cols-2`);let Be=S(`fieldset`,ze);n(ze,Be),b(Be,`fieldset`);let Ve=S(`legend`,Be);n(Be,Ve),b(Ve,`fieldset-legend`),n(Ve,m(`accent attribute`));let J=S(`select`,Be);n(Be,J),b(J,`select select-bordered`),r(()=>{k(J,E.value)}),a(J,`change`,e=>{E.value=e.target.value,H()});let He=S(`option`,J);n(J,He),u(He,`value`,`teal`),n(He,m(`teal`));let Ue=S(`option`,J);n(J,Ue),u(Ue,`value`,`amber`),n(Ue,m(`amber`));let We=S(`option`,J);n(J,We),u(We,`value`,`rose`),n(We,m(`rose`));let Ge=S(`fieldset`,ze);n(ze,Ge),b(Ge,`fieldset`);let Ke=S(`legend`,Ge);n(Ge,Ke),b(Ke,`fieldset-legend`),n(Ke,m(`light label attribute`));let qe=S(`input`,Ge);n(Ge,qe),b(qe,`input input-bordered`),r(()=>{k(qe,F.value)}),a(qe,`input`,e=>{F.value=e.target.value,ve(),ge()});let Je=S(`div`,W);n(W,Je);let Ye=S(`div`,Je);n(Je,Ye),b(Ye,`flex items-center justify-between text-sm mb-2`);let Xe=S(`span`,Ye);n(Ye,Xe),n(Xe,m(`host.props.count`));let Ze=S(`span`,Ye);n(Ye,Ze),b(Ze,`font-semibold`);let Qe=c(Ze);n(Ze,Qe),r(()=>{l(Qe,D.value)});let $e=S(`input`,Je);n(Je,$e),u($e,`type`,`range`),u($e,`min`,`1`),u($e,`max`,`15`),r(()=>{k($e,D.value)}),b($e,`range range-primary`),a($e,`input`,e=>{D.value=Number(e.target.value),_e(),ge()});let et=S(`div`,W);n(W,et),b(et,`grid gap-3 sm:grid-cols-2`);let tt=S(`label`,et);n(et,tt),b(tt,`label cursor-pointer justify-start gap-3`);let nt=S(`input`,tt);n(tt,nt),u(nt,`type`,`checkbox`),b(nt,`toggle toggle-primary`),r(()=>{f(nt,!!ne.value)}),a(nt,`change`,e=>{ne.value=e.target.checked,H()});let rt=S(`span`,tt);n(tt,rt),b(rt,`label-text`),n(rt,m(`host.props.busy`));let it=S(`label`,et);n(et,it),b(it,`label cursor-pointer justify-start gap-3`);let at=S(`input`,it);n(it,at),u(at,`type`,`checkbox`),b(at,`toggle toggle-secondary`),r(()=>{f(at,!!j.value)}),a(at,`change`,e=>{j.value=e.target.checked,_e(),ge()});let ot=S(`span`,it);n(it,ot),b(ot,`label-text`),n(ot,m(`host.props.config.compact`));let Y=S(`div`,W);n(W,Y),b(Y,`grid gap-2 sm:grid-cols-2`);let st=S(`button`,Y);n(Y,st),b(st,`btn btn-primary`),a(st,`click`,q),n(st,m(`追加 tag`));let ct=S(`button`,Y);n(Y,ct),b(ct,`btn btn-outline`),a(ct,`click`,xe),n(ct,m(`删除最后一个 tag`));let lt=S(`button`,Y);n(Y,lt),b(lt,`btn btn-secondary`),a(lt,`click`,()=>{D.value+=2,_e(),ge()}),n(lt,m(`count + 2`));let ut=S(`button`,Y);n(Y,ut),b(ut,`btn btn-ghost`),a(ut,`click`,Ce),n(ut,m(`移除 title attribute`));let X=S(`div`,V);n(V,X),b(X,`space-y-6`);let dt=S(`div`,X);n(X,dt),b(dt,`card bg-gradient-to-br from-slate-50 via-white to-base-200 shadow-xl border border-base-300 overflow-hidden`);let Z=S(`div`,dt);n(dt,Z),b(Z,`card-body gap-5`);let ft=S(`div`,Z);n(Z,ft),b(ft,`flex flex-wrap items-center justify-between gap-4`);let pt=S(`div`,ft);n(ft,pt);let mt=S(`p`,pt);n(pt,mt),b(mt,`text-xs uppercase tracking-[0.28em] text-base-content/45`),n(mt,m(`Live Preview`));let ht=S(`h2`,pt);n(pt,ht),b(ht,`text-2xl font-semibold mt-2`),n(ht,m(`Shadow + Light 双宿主联动`));let Q=S(`div`,ft);n(ft,Q),b(Q,`stats stats-vertical lg:stats-horizontal shadow bg-base-100`);let gt=S(`div`,Q);n(Q,gt),b(gt,`stat py-3 px-4`);let _t=S(`div`,gt);n(gt,_t),b(_t,`stat-title`),n(_t,m(`shadow configureApp`));let vt=S(`div`,gt);n(gt,vt),b(vt,`stat-value text-lg`);let yt=c(vt);n(vt,yt),r(()=>{l(yt,se.value)});let bt=S(`div`,Q);n(Q,bt),b(bt,`stat py-3 px-4`);let xt=S(`div`,bt);n(bt,xt),b(xt,`stat-title`),n(xt,m(`light configureApp`));let St=S(`div`,bt);n(bt,St),b(St,`stat-value text-lg`);let Ct=c(St);n(St,Ct),r(()=>{l(Ct,ce.value)});let wt=S(`div`,Q);n(Q,wt),b(wt,`stat py-3 px-4`);let Tt=S(`div`,wt);n(wt,Tt),b(Tt,`stat-title`),n(Tt,m(`mounted instances`));let Et=S(`div`,wt);n(wt,Et),b(Et,`stat-value text-lg`);let Dt=c(Et);n(Et,Dt),r(()=>{l(Dt,N.value+le.value)});let Ot=S(`div`,Z);n(Z,Ot),r(()=>{b(Ot,`alert ${I.value.length?`alert-success`:`alert-soft`} py-3`)}),u(Ot,`data-testid`,`ce-latest-event`);let kt=S(`span`,Ot);n(Ot,kt);let At=c(kt);n(kt,At),r(()=>{l(At,I.value.length?`最近事件：${I.value[0].source}.${I.value[0].name} \xb7 ${I.value[0].at}`:`等待自定义元素事件`)});let jt=T(`rue:component:anchor`);n(Z,jt);let Mt=h(()=>{let t=_(),i=S(`div`,t);n(t,i),b(i,`space-y-4`);let s=S(`rue-shadow-console`,i);o(s,`__rue_context_parent_instance__`,e()),n(i,s);let d=te(s,()=>fe);g(()=>{d()}),a(s,`save`,G),a(s,`pulse`,ye),o(s,`__rue_slots`,{badge:({channel:e,count:t,accent:n})=>ae(`div`,{className:`bridgeSlot`,"data-testid":`ce-scoped-slot`,children:[e,` / `,t,` / `,n]})});let f=S(`div`,s);n(s,f),u(f,`slot`,`meta`);let p=S(`span`,f);n(f,p),b(p,`status status-success`);let m=S(`span`,f);n(f,m);let y=c(m);n(m,y),r(()=>{l(y,P.value)});let x=S(`div`,s);n(s,x),b(x,`space-y-3 text-sm text-base-content/80`);let C=S(`p`,x);n(x,C);let w=c(C);n(C,w),r(()=>{l(w,ie.value)});let E=S(`div`,x);n(x,E),b(E,`flex flex-wrap gap-2`);let D=T(`rue:list:start`),k=T(`rue:list:end`);n(E,D),n(E,k);let A=new Map;r(()=>{A=ee({items:z(O.value)||[],getKey:(e,t)=>e,elements:A,parent:E,before:k,singleRoot:!0,trackIndex:!1,start:D,renderItem:(e,t,i,a,o)=>{v(h(()=>{let t=_(),i=S(`span`,t);n(t,i),r(()=>{u(i,`key`,String(e))}),b(i,`badge badge-outline`);let a=c(i);return n(i,a),r(()=>{l(a,e)}),t}),t,i)}})});let ne=S(`rue-light-signal`,i);o(ne,`__rue_context_parent_instance__`,e()),n(i,ne);let j=te(ne,()=>me);return g(()=>{j()}),t});r(()=>{let e=C(pe.Provider,{value:`${re.value}:${E.value}`,children:Mt});w(()=>v(e,Z,jt))});let Nt=S(`div`,X);n(X,Nt),b(Nt,`grid gap-6`);let Pt=S(`div`,Nt);n(Nt,Pt),b(Pt,`card bg-base-100 shadow border border-base-300`);let Ft=S(`div`,Pt);n(Pt,Ft),b(Ft,`card-body gap-4`);let It=S(`div`,Ft);n(Ft,It),b(It,`flex items-center justify-between gap-3`);let Lt=S(`h3`,It);n(It,Lt),b(Lt,`card-title text-lg`),n(Lt,m(`运行时诊断`));let Rt=S(`span`,It);n(It,Rt),b(Rt,`badge badge-primary badge-outline`),n(Rt,m(`nonce / styles / mode`));let $=S(`ul`,Ft);n(Ft,$),b($,`list bg-base-100 rounded-box`);let zt=S(`li`,$);n($,zt),b(zt,`list-row`);let Bt=S(`div`,zt);n(zt,Bt),b(Bt,`font-medium`),n(Bt,m(`shadow style tags`));let Vt=S(`div`,zt);n(zt,Vt),b(Vt,`text-right`);let Ht=c(Vt);n(Vt,Ht),r(()=>{l(Ht,ue.value)});let Ut=S(`li`,$);n($,Ut),b(Ut,`list-row`);let Wt=S(`div`,Ut);n(Ut,Wt),b(Wt,`font-medium`),n(Wt,m(`shadow nonce`));let Gt=S(`div`,Ut);n(Ut,Gt),b(Gt,`text-right break-all`);let Kt=c(Gt);n(Gt,Kt),r(()=>{l(Kt,L.value)});let qt=S(`li`,$);n($,qt),b(qt,`list-row`);let Jt=S(`div`,qt);n(qt,Jt),b(Jt,`font-medium`),n(Jt,m(`light style tags`));let Yt=S(`div`,qt);n(qt,Yt),b(Yt,`text-right`);let Xt=c(Yt);n(Yt,Xt),r(()=>{l(Xt,de.value)});let Zt=S(`li`,$);n($,Zt),b(Zt,`list-row`);let Qt=S(`div`,Zt);n(Zt,Qt),b(Qt,`font-medium`),n(Qt,m(`hook 期望`));let $t=S(`div`,Zt);n(Zt,$t),b($t,`text-right`),n($t,m(`shadow / light`));let en=S(`div`,Nt);n(Nt,en),b(en,`card bg-base-100 shadow border border-base-300`);let tn=S(`div`,en);n(en,tn),b(tn,`card-body gap-4`);let nn=S(`div`,tn);n(tn,nn),b(nn,`flex items-center justify-between gap-3`);let rn=S(`h3`,nn);n(nn,rn),b(rn,`card-title text-lg`),n(rn,m(`事件桥接日志`));let an=S(`button`,nn);n(nn,an),b(an,`btn btn-sm btn-ghost`),a(an,`click`,we),n(an,m(`清空`));let on=S(`div`,tn);n(tn,on),b(on,`space-y-3 max-h-[320px] overflow-auto pr-1`);let sn=T(`rue:slot:anchor`);n(on,sn),r(()=>{let e=I.value.length?h(()=>{let e=_(),t=T(`rue:list:start`),i=T(`rue:list:end`);n(e,t),n(e,i);let a=new Map;return r(()=>{a=ee({items:I.value||[],getKey:(e,t)=>`${e.name}-${e.at}-${t}`,elements:a,parent:t.parentNode,before:i,singleRoot:!0,start:t,renderItem:(e,t,i,a,o)=>{v(h(()=>{let t=_(),i=S(`div`,t);n(t,i),r(()=>{u(i,`key`,String(`${e.name}-${e.at}-${o}`))}),b(i,`rounded-2xl border border-base-300 bg-base-200/60 p-3`);let a=S(`div`,i);n(i,a),b(a,`flex items-center justify-between gap-3 text-sm`);let s=S(`div`,a);n(a,s),b(s,`flex items-center gap-2`);let c=S(`span`,s);n(s,c),r(()=>{b(c,`badge ${e.source===`shadow`?`badge-primary`:`badge-secondary`} badge-outline`)});let l=T(`rue:slot:anchor`);n(c,l),r(()=>{let t=e.source;w(()=>v(t,c,l))});let d=S(`span`,s);n(s,d),b(d,`font-medium`);let f=T(`rue:slot:anchor`);n(d,f),r(()=>{let t=e.name;w(()=>v(t,d,f))});let p=S(`span`,a);n(a,p),b(p,`text-base-content/50`);let m=T(`rue:slot:anchor`);n(p,m),r(()=>{let t=e.at;w(()=>v(t,p,m))});let h=S(`pre`,i);n(i,h),b(h,`mt-2 text-xs whitespace-pre-wrap break-words`);let g=T(`rue:slot:anchor`);return n(h,g),r(()=>{let t=e.detail;w(()=>v(t,h,g))}),t}),t,i)}})}),e}):h(()=>{let e=_(),t=S(`div`,e);n(e,t),b(t,`alert alert-soft`);let r=S(`span`,t);return n(t,r),n(r,m(`点击自定义元素内部按钮后，这里会收到桥接出来的宿主 CustomEvent。`)),e});w(()=>v(e,on,sn))});let cn=S(`div`,X);n(X,cn),b(cn,`grid gap-6`);let ln=S(`div`,cn);n(cn,ln),b(ln,`card bg-base-100 shadow border border-base-300`);let un=S(`div`,ln);n(ln,un),b(un,`card-body gap-3`);let dn=S(`h3`,un);n(un,dn),b(dn,`card-title text-lg`),n(dn,m(`shadow host.props 快照`));let fn=S(`pre`,un);n(un,fn),b(fn,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let pn=T(`rue:slot:anchor`);n(fn,pn),r(()=>{let e=R(he());w(()=>v(e,fn,pn))});let mn=S(`div`,cn);n(cn,mn),b(mn,`card bg-base-100 shadow border border-base-300`);let hn=S(`div`,mn);n(mn,hn),b(hn,`card-body gap-3`);let gn=S(`h3`,hn);n(hn,gn),b(gn,`card-title text-lg`),n(gn,m(`light host.props 快照`));let _n=S(`pre`,hn);n(hn,_n),b(_n,`text-xs whitespace-pre-wrap break-words overflow-auto max-h-[260px] rounded-box bg-base-200 p-4`);let vn=T(`rue:slot:anchor`);n(_n,vn),r(()=>{let e=R(B());w(()=>v(e,_n,vn))});let yn=S(`div`,i);n(i,yn),r(()=>{b(yn,t.value===`code`?`mt-4`:`hidden`)});let bn=S(`div`,yn);n(yn,bn),b(bn,`card bg-base-100 shadow overflow-auto`);let xn=S(`div`,bn);n(bn,xn),b(xn,`card-body p-0`);let Sn=T(`rue:component:anchor`);return n(xn,Sn),r(()=>{let e=C(M,{lang:`tsx`,code:Se});w(()=>v(e,xn,Sn))}),i})}),s,p),s})};export{Ce as default};
import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,q as p,rt as m,t as h,tt as g,ut as _}from"./vapor-runtime-CKrmRMZX.js";import{a as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{t as y}from"./useApp-BxmWHMth.js";import{t as ee}from"./Code-D5UqTwV6.js";import{r as b}from"./SidebarPlaygroundExample-D2vGHFCu.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=n=>u(i=>{let a=g(`article`,i);t(()=>{_(a,`rounded-box border p-4 shadow-sm ${x[n.tone??`primary`]}`)});let s=g(`div`,a);o(a,s),_(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let c=e(`rue:slot:anchor`);o(s,c),t(()=>{let e=n.title;r(()=>f(e,s,c))});let u=g(`div`,a);o(a,u),_(u,`mt-2 text-3xl font-semibold`);let d=m(u);o(u,d),t(()=>{l(d,n.value)});let p=g(`div`,a);o(a,p),_(p,`mt-1 text-sm opacity-75`);let h=e(`rue:slot:anchor`);o(p,h),t(()=>{let e=n.detail;r(()=>f(e,p,h))});let v=g(`div`,a);o(a,v),_(v,`mt-4`);let y=e(`rue:children:anchor`);return o(v,y),t(()=>{let e=n.children;r(()=>f(e,v,y))}),a}),C=n=>u(i=>{let a=g(`section`,i);_(a,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let s=g(`div`,a);o(a,s),_(s,`flex items-center justify-between gap-3`);let c=g(`div`,s);o(s,c);let l=g(`div`,c);o(c,l),_(l,`font-semibold`);let u=e(`rue:slot:anchor`);o(l,u),t(()=>{let e=n.title;r(()=>f(e,l,u))});let d=g(`div`,c);o(c,d),_(d,`text-sm opacity-75`);let p=e(`rue:slot:anchor`);o(d,p),t(()=>{let e=n.detail;r(()=>f(e,d,p))});let m=g(`span`,s);o(s,m),_(m,`status status-info status-lg`);let h=g(`div`,a);o(a,h),_(h,`mt-4`);let v=e(`rue:children:anchor`);return o(h,v),t(()=>{let e=n.children;r(()=>f(e,h,v))}),a}),w=n=>u(i=>{let a=g(`article`,i);_(a,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let s=g(`div`,a);o(a,s),_(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let c=e(`rue:slot:anchor`);o(s,c),t(()=>{let e=n.title;r(()=>f(e,s,c))});let u=g(`div`,a);o(a,u),_(u,`mt-2 text-2xl font-semibold`);let d=m(u);o(u,d),t(()=>{l(d,n.value??`Registered`)});let p=g(`div`,a);o(a,p),_(p,`mt-1 text-sm opacity-75`);let h=e(`rue:slot:anchor`);o(p,h),t(()=>{let e=n.detail;r(()=>f(e,p,h))});let v=g(`div`,a);o(a,v),_(v,`mt-4`);let y=e(`rue:children:anchor`);return o(v,y),t(()=>{let e=n.children;r(()=>f(e,v,y))}),a}),T=n=>u(i=>{let a=g(`section`,i);_(a,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let s=g(`div`,a);o(a,s),_(s,`font-semibold`);let c=e(`rue:slot:anchor`);o(s,c),t(()=>{let e=n.title;r(()=>f(e,s,c))});let l=g(`div`,a);o(a,l),_(l,`mt-1 text-sm opacity-75`);let u=e(`rue:slot:anchor`);o(l,u),t(()=>{let e=n.detail;r(()=>f(e,l,u))});let d=g(`div`,a);o(a,d),_(d,`mt-4`);let p=e(`rue:children:anchor`);return o(d,p),t(()=>{let e=n.children;r(()=>f(e,d,p))}),a}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
  Component,
  type FC,
  ref,
  useApp,
} from '@rue-js/rue';

const SalesCard: FC<{ title: string; value: string; detail: string }> = (props) => (
  <article className="rounded-box border border-primary/25 bg-primary/10 p-4">
    <div className="text-xs uppercase tracking-[0.22em] opacity-60">{props.title}</div>
    <div className="mt-2 text-3xl font-semibold">{props.value}</div>
    <div className="mt-1 text-sm opacity-75">{props.detail}</div>
    <div className="mt-4">{props.children}</div>
  </article>
);

const StatusStrip: FC<{ title: string; detail: string }> = (props) => (
  <section className="rounded-box border border-info/25 bg-info/10 p-4">
    <div className="font-semibold">{props.title}</div>
    <div className="text-sm opacity-75">{props.detail}</div>
    <div className="mt-4">{props.children}</div>
  </section>
);

const RegisteredMetric: FC<{ title: string; value?: string; detail: string }> = (props) => (
  <article className="rounded-box border border-secondary/25 bg-secondary/10 p-4">
    <div className="text-xs uppercase tracking-[0.22em] opacity-60">{props.title}</div>
    <div className="mt-2 text-2xl font-semibold">{props.value ?? 'Registered'}</div>
    <div className="mt-1 text-sm opacity-75">{props.detail}</div>
    <div className="mt-4">{props.children}</div>
  </article>
);

const RegisteredNotice: FC<{ title: string; detail: string }> = (props) => (
  <section className="rounded-box border border-warning/35 bg-warning/15 p-4">
    <div className="font-semibold">{props.title}</div>
    <div className="mt-1 text-sm opacity-75">{props.detail}</div>
    <div className="mt-4">{props.children}</div>
  </section>
);

const Demo: FC = () => {
  const shell = ref<'native' | 'card' | 'notice'>('native');
  const registryMode = ref<'metric' | 'notice'>('metric');

  useApp(() => null)
    .component('RegisteredMetric', RegisteredMetric as FC<any>)
    .component('RegisteredNotice', RegisteredNotice as FC<any>);

  const resolveType = () =>
    shell.value === 'native'
      ? 'article'
      : shell.value === 'card'
        ? SalesCard
        : StatusStrip;

  const resolveProps = () =>
    shell.value === 'native'
      ? {
          className: 'rounded-box border border-base-300 bg-base-100 p-4 shadow-sm',
        }
      : shell.value === 'card'
        ? {
            title: '今日成交额',
            value: '¥ 128,400',
            detail: '比昨日 +8.2%',
          }
        : {
            title: '状态切换',
            detail: '当前目标由 is 决定',
          };

  return (
    <div className="grid gap-6">
      <Component is={resolveType()} {...resolveProps()}>
        <span className="badge badge-outline badge-sm">children 已透传</span>
      </Component>

      <Component
        is={registryMode.value === 'metric' ? 'RegisteredMetric' : 'RegisteredNotice'}
        title="运行时注册"
        value="CardView"
        detail="通过字符串名解析到已注册组件"
      >
        <span className="badge badge-outline badge-sm">children 一样会透传</span>
      </Component>
    </div>
  );
};

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>a(()=>{E();let e=v(`ref:1:0`,()=>n(`preview`)),t=v(`ref:1:1`,()=>n(`native`)),r=v(`ref:1:2`,()=>n(`primary`));return{activeTab:e,renderTarget:t,tone:r,registryTarget:v(`ref:1:3`,()=>n(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:r.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return u(n=>{let a=c(),v=e(`rue:component:anchor`);return o(a,v),f(h(b,{children:u(()=>{let n=c(),a=g(`h1`,n);o(n,a),_(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`动态组件（Component）`));let v=g(`div`,n);o(n,v),s(v,`role`,`tablist`),_(v,`tabs tabs-box`);let b=g(`button`,v);o(v,b),s(b,`role`,`tab`),t(()=>{_(b,`tab ${y.value===`preview`?`tab-active`:``}`)}),i(b,`click`,()=>{y.value=`preview`}),o(b,d(`效果`));let S=g(`button`,v);o(v,S),s(S,`role`,`tab`),t(()=>{_(S,`tab ${y.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{y.value=`code`}),o(S,d(`代码`));let C=g(`div`,n);o(n,C),t(()=>{_(C,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`)});let E=g(`div`,C);o(C,E),_(E,`card bg-base-100 shadow`);let D=g(`div`,E);o(E,D),_(D,`card-body gap-6`);let O=g(`section`,D);o(D,O),_(O,`space-y-3`);let k=g(`div`,O);o(O,k),_(k,`flex flex-wrap items-center justify-between gap-3`);let A=g(`div`,k);o(k,A);let ie=g(`h2`,A);o(A,ie),_(ie,`text-xl font-semibold`),o(ie,d(`1. 直接切换原生标签和组件定义`));let j=g(`p`,A);o(A,j),_(j,`text-sm opacity-75`),o(j,d(`这里显式导入并使用 `));let ae=m(j);o(j,ae),l(ae,`<Component>`),o(j,d(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=g(`div`,k);o(k,M),_(M,`flex flex-wrap gap-3`);let N=g(`div`,M);o(M,N),_(N,`join`);let P=g(`button`,N);o(N,P),t(()=>{_(P,`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`)}),i(P,`click`,()=>{x.value=`native`}),o(P,d(`原生 article`));let F=g(`button`,N);o(N,F),t(()=>{_(F,`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`)}),i(F,`click`,()=>{x.value=`card`}),o(F,d(`SalesCard`));let oe=g(`button`,N);o(N,oe),t(()=>{_(oe,`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`)}),i(oe,`click`,()=>{x.value=`notice`}),o(oe,d(`StatusStrip`));let I=g(`div`,M);o(M,I),_(I,`join`);let L=g(`button`,I);o(I,L),t(()=>{_(L,`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`)}),i(L,`click`,()=>{w.value=`primary`}),o(L,d(`primary`));let se=g(`button`,I);o(I,se),t(()=>{_(se,`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`)}),i(se,`click`,()=>{w.value=`accent`}),o(se,d(`accent`));let R=g(`div`,O);o(O,R),_(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=g(`div`,R);o(R,ce),_(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=e(`rue:component:anchor`);o(ce,le);let ue=u(()=>{let e=c(),t=g(`span`,e);return o(e,t),_(t,`badge badge-outline badge-sm`),o(t,d(`children 已透传`)),e});t(()=>{let e=h(p,{is:te(),...re(),children:ue});r(()=>f(e,ce,le))});let z=g(`div`,R);o(R,z),_(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=g(`div`,z);o(z,B);let de=g(`strong`,B);o(B,de),o(de,d(`当前 is`)),o(B,d(`： `));let fe=m(B);o(B,fe),t(()=>{l(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=g(`div`,z);o(z,V);let pe=g(`strong`,V);o(V,pe),o(pe,d(`验证点`)),o(V,d(`：native element、直接组件定义、children 透传。`));let H=g(`div`,z);o(z,H);let me=g(`strong`,H);o(H,me),o(me,d(`说明`)),o(H,d(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=g(`section`,D);o(D,U),_(U,`space-y-3`);let W=g(`div`,U);o(U,W),_(W,`flex flex-wrap items-center justify-between gap-3`);let G=g(`div`,W);o(W,G);let he=g(`h2`,G);o(G,he),_(he,`text-xl font-semibold`),o(he,d(`2. 运行时注册字符串组件名`));let K=g(`p`,G);o(G,K),_(K,`text-sm opacity-75`),o(K,d(`下面这个小区域直接在当前页面里使用导出的 `));let ge=m(K);o(K,ge),l(ge,`<Component>`),o(K,d(`，并通过 useApp().component('RegisteredMetric', RegisteredMetric) 把字符串名注册到当前 runtime。`));let q=g(`div`,W);o(W,q),_(q,`join`);let _e=g(`button`,q);o(q,_e),t(()=>{_(_e,`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`)}),i(_e,`click`,()=>{T.value=`metric`}),o(_e,d(`RegisteredMetric`));let ve=g(`button`,q);o(q,ve),t(()=>{_(ve,`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`)}),i(ve,`click`,()=>{T.value=`notice`}),o(ve,d(`RegisteredNotice`));let J=g(`div`,U);o(U,J),_(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=g(`div`,J);o(J,ye),_(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=e(`rue:component:anchor`);o(ye,be);let xe=u(()=>{let e=c(),t=g(`span`,e);return o(e,t),_(t,`badge badge-outline badge-sm`),o(t,d(`children 一样会透传`)),e});t(()=>{let e=h(p,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component('RegisteredMetric', RegisteredMetric) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});r(()=>f(e,ye,be))});let Y=g(`div`,J);o(J,Y),_(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=g(`div`,Y);o(Y,X),o(X,d(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=m(X);o(X,Se),l(Se,` `),o(X,d(` `));let Ce=m(X);o(X,Ce),l(Ce,`<Component>`),o(X,d(`。`));let we=g(`div`,Y);o(Y,we),o(we,d(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=g(`div`,Y);o(Y,Te),o(Te,d(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=g(`div`,D);o(D,Z),s(Z,`role`,`alert`),_(Z,`alert alert-warning alert-soft`);let Q=g(`span`,Z);o(Z,Q),o(Q,d(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=m(Q);o(Q,Ee),l(Ee,` `),o(Q,d(` `));let De=m(Q);o(Q,De),l(De,`<Component>`),o(Q,d(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=g(`div`,n);o(n,Oe),t(()=>{_(Oe,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`)});let ke=g(`div`,Oe);o(Oe,ke),_(ke,`card bg-base-100 shadow overflow-auto`);let $=g(`div`,ke);o(ke,$),_($,`card-body p-0`);let Ae=e(`rue:component:anchor`);return o($,Ae),t(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:ne});r(()=>f(e,$,Ae))}),n})}),a,v),a})};export{re as default};
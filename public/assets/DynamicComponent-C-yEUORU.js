import{$ as e,Ht as t,J as n,Lt as r,Q as i,W as a,X as o,Xt as s,Z as c,at as l,et as u,l as d,pt as f,q as p,qt as m,s as h,st as g,t as _}from"./vapor-runtime-iQZthBPQ.js";import{a as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{t as y}from"./useApp-B-SjjQlV.js";import{t as ee}from"./Code-CZqShVUj.js";import{r as b}from"./SidebarPlaygroundExample-5H7RL-T7.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=e=>d(r=>{let a=i(`article`,r);s(()=>{g(a,`rounded-box border p-4 shadow-sm ${x[e.tone??`primary`]}`)});let c=i(`div`,a);n(a,c),g(c,`text-xs uppercase tracking-[0.22em] opacity-60`);let l=o(`rue:slot:anchor`);n(c,l),s(()=>{let n=e.title;t(()=>h(n,c,l))});let d=i(`div`,a);n(a,d),g(d,`mt-2 text-3xl font-semibold`);let p=u(d);n(d,p),s(()=>{f(p,e.value)});let m=i(`div`,a);n(a,m),g(m,`mt-1 text-sm opacity-75`);let _=o(`rue:slot:anchor`);n(m,_),s(()=>{let n=e.detail;t(()=>h(n,m,_))});let v=i(`div`,a);n(a,v),g(v,`mt-4`);let y=o(`rue:children:anchor`);return n(v,y),s(()=>{let n=e.children;t(()=>h(n,v,y))}),a}),C=e=>d(r=>{let a=i(`section`,r);g(a,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let c=i(`div`,a);n(a,c),g(c,`flex items-center justify-between gap-3`);let l=i(`div`,c);n(c,l);let u=i(`div`,l);n(l,u),g(u,`font-semibold`);let d=o(`rue:slot:anchor`);n(u,d),s(()=>{let n=e.title;t(()=>h(n,u,d))});let f=i(`div`,l);n(l,f),g(f,`text-sm opacity-75`);let p=o(`rue:slot:anchor`);n(f,p),s(()=>{let n=e.detail;t(()=>h(n,f,p))});let m=i(`span`,c);n(c,m),g(m,`status status-info status-lg`);let _=i(`div`,a);n(a,_),g(_,`mt-4`);let v=o(`rue:children:anchor`);return n(_,v),s(()=>{let n=e.children;t(()=>h(n,_,v))}),a}),w=e=>d(r=>{let a=i(`article`,r);g(a,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let c=i(`div`,a);n(a,c),g(c,`text-xs uppercase tracking-[0.22em] opacity-60`);let l=o(`rue:slot:anchor`);n(c,l),s(()=>{let n=e.title;t(()=>h(n,c,l))});let d=i(`div`,a);n(a,d),g(d,`mt-2 text-2xl font-semibold`);let p=u(d);n(d,p),s(()=>{f(p,e.value??`Registered`)});let m=i(`div`,a);n(a,m),g(m,`mt-1 text-sm opacity-75`);let _=o(`rue:slot:anchor`);n(m,_),s(()=>{let n=e.detail;t(()=>h(n,m,_))});let v=i(`div`,a);n(a,v),g(v,`mt-4`);let y=o(`rue:children:anchor`);return n(v,y),s(()=>{let n=e.children;t(()=>h(n,v,y))}),a}),T=e=>d(r=>{let a=i(`section`,r);g(a,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let c=i(`div`,a);n(a,c),g(c,`font-semibold`);let l=o(`rue:slot:anchor`);n(c,l),s(()=>{let n=e.title;t(()=>h(n,c,l))});let u=i(`div`,a);n(a,u),g(u,`mt-1 text-sm opacity-75`);let d=o(`rue:slot:anchor`);n(u,d),s(()=>{let n=e.detail;t(()=>h(n,u,d))});let f=i(`div`,a);n(a,f),g(f,`mt-4`);let p=o(`rue:children:anchor`);return n(f,p),s(()=>{let n=e.children;t(()=>h(n,f,p))}),a}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>m(()=>{E();let e=v(`ref:1:0`,()=>r(`preview`)),t=v(`ref:1:1`,()=>r(`native`)),n=v(`ref:1:2`,()=>r(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:v(`ref:1:3`,()=>r(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return d(r=>{let m=c(),v=o(`rue:component:anchor`);return n(m,v),h(_(b,{children:d(()=>{let r=c(),m=i(`h1`,r);n(r,m),g(m,`text-5xl font-semibold mb-4 md:mb-4`),n(m,e(`动态组件（Component）`));let v=i(`div`,r);n(r,v),l(v,`role`,`tablist`),g(v,`tabs tabs-box`);let b=i(`button`,v);n(v,b),l(b,`role`,`tab`),s(()=>{g(b,`tab ${y.value===`preview`?`tab-active`:``}`)}),p(b,`click`,()=>{y.value=`preview`}),n(b,e(`效果`));let S=i(`button`,v);n(v,S),l(S,`role`,`tab`),s(()=>{g(S,`tab ${y.value===`code`?`tab-active`:``}`)}),p(S,`click`,()=>{y.value=`code`}),n(S,e(`代码`));let C=i(`div`,r);n(r,C),s(()=>{g(C,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`)});let E=i(`div`,C);n(C,E),g(E,`card bg-base-100 shadow`);let D=i(`div`,E);n(E,D),g(D,`card-body gap-6`);let O=i(`section`,D);n(D,O),g(O,`space-y-3`);let k=i(`div`,O);n(O,k),g(k,`flex flex-wrap items-center justify-between gap-3`);let A=i(`div`,k);n(k,A);let ie=i(`h2`,A);n(A,ie),g(ie,`text-xl font-semibold`),n(ie,e(`1. 直接切换原生标签和组件定义`));let j=i(`p`,A);n(A,j),g(j,`text-sm opacity-75`),n(j,e(`这里显式导入并使用 `));let ae=u(j);n(j,ae),f(ae,`<Component>`),n(j,e(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=i(`div`,k);n(k,M),g(M,`flex flex-wrap gap-3`);let N=i(`div`,M);n(M,N),g(N,`join`);let P=i(`button`,N);n(N,P),s(()=>{g(P,`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`)}),p(P,`click`,()=>{x.value=`native`}),n(P,e(`原生 article`));let F=i(`button`,N);n(N,F),s(()=>{g(F,`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`)}),p(F,`click`,()=>{x.value=`card`}),n(F,e(`SalesCard`));let oe=i(`button`,N);n(N,oe),s(()=>{g(oe,`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`)}),p(oe,`click`,()=>{x.value=`notice`}),n(oe,e(`StatusStrip`));let I=i(`div`,M);n(M,I),g(I,`join`);let L=i(`button`,I);n(I,L),s(()=>{g(L,`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`)}),p(L,`click`,()=>{w.value=`primary`}),n(L,e(`primary`));let se=i(`button`,I);n(I,se),s(()=>{g(se,`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`)}),p(se,`click`,()=>{w.value=`accent`}),n(se,e(`accent`));let R=i(`div`,O);n(O,R),g(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=i(`div`,R);n(R,ce),g(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=o(`rue:component:anchor`);n(ce,le);let ue=d(()=>{let t=c(),r=i(`span`,t);return n(t,r),g(r,`badge badge-outline badge-sm`),n(r,e(`children 已透传`)),t});s(()=>{let e=_(a,{is:te(),...re(),children:ue});t(()=>h(e,ce,le))});let z=i(`div`,R);n(R,z),g(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=i(`div`,z);n(z,B);let de=i(`strong`,B);n(B,de),n(de,e(`当前 is`)),n(B,e(`： `));let fe=u(B);n(B,fe),s(()=>{f(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=i(`div`,z);n(z,V);let pe=i(`strong`,V);n(V,pe),n(pe,e(`验证点`)),n(V,e(`：native element、直接组件定义、children 透传。`));let H=i(`div`,z);n(z,H);let me=i(`strong`,H);n(H,me),n(me,e(`说明`)),n(H,e(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=i(`section`,D);n(D,U),g(U,`space-y-3`);let W=i(`div`,U);n(U,W),g(W,`flex flex-wrap items-center justify-between gap-3`);let G=i(`div`,W);n(W,G);let he=i(`h2`,G);n(G,he),g(he,`text-xl font-semibold`),n(he,e(`2. 运行时注册字符串组件名`));let K=i(`p`,G);n(G,K),g(K,`text-sm opacity-75`),n(K,e(`下面这个小区域直接在当前页面里使用导出的 `));let ge=u(K);n(K,ge),f(ge,`<Component>`),n(K,e(`，并通过 useApp().component('RegisteredMetric', RegisteredMetric) 把字符串名注册到当前 runtime。`));let q=i(`div`,W);n(W,q),g(q,`join`);let _e=i(`button`,q);n(q,_e),s(()=>{g(_e,`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`)}),p(_e,`click`,()=>{T.value=`metric`}),n(_e,e(`RegisteredMetric`));let ve=i(`button`,q);n(q,ve),s(()=>{g(ve,`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`)}),p(ve,`click`,()=>{T.value=`notice`}),n(ve,e(`RegisteredNotice`));let J=i(`div`,U);n(U,J),g(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=i(`div`,J);n(J,ye),g(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=o(`rue:component:anchor`);n(ye,be);let xe=d(()=>{let t=c(),r=i(`span`,t);return n(t,r),g(r,`badge badge-outline badge-sm`),n(r,e(`children 一样会透传`)),t});s(()=>{let e=_(a,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component('RegisteredMetric', RegisteredMetric) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});t(()=>h(e,ye,be))});let Y=i(`div`,J);n(J,Y),g(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=i(`div`,Y);n(Y,X),n(X,e(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=u(X);n(X,Se),f(Se,` `),n(X,e(` `));let Ce=u(X);n(X,Ce),f(Ce,`<Component>`),n(X,e(`。`));let we=i(`div`,Y);n(Y,we),n(we,e(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=i(`div`,Y);n(Y,Te),n(Te,e(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=i(`div`,D);n(D,Z),l(Z,`role`,`alert`),g(Z,`alert alert-warning alert-soft`);let Q=i(`span`,Z);n(Z,Q),n(Q,e(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=u(Q);n(Q,Ee),f(Ee,` `),n(Q,e(` `));let De=u(Q);n(Q,De),f(De,`<Component>`),n(Q,e(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=i(`div`,r);n(r,Oe),s(()=>{g(Oe,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`)});let ke=i(`div`,Oe);n(Oe,ke),g(ke,`card bg-base-100 shadow overflow-auto`);let $=i(`div`,ke);n(ke,$),g($,`card-body p-0`);let Ae=o(`rue:component:anchor`);return n($,Ae),s(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:ne});t(()=>h(e,$,Ae))}),r})}),m,v),m})};export{re as default};
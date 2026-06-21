import{$t as e,J as t,Jt as n,Q as r,Z as i,dt as a,et as o,in as s,it as c,l,lt as u,nt as d,o as f,rt as p,t as m,tt as h,vt as g,zt as _}from"./vapor-runtime-DsQWl-IB.js";import{a as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{t as y}from"./useApp-CESRmTJr.js";import{t as ee}from"./Code-4SUSUwRg.js";import{r as b}from"./SidebarPlaygroundExample-BEWYUWOl.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=t=>l(n=>{let i=d(`article`,n);_(()=>{a(i,`rounded-box border p-4 shadow-sm ${x[t.tone??`primary`]}`)});let s=d(`div`,i);r(i,s),a(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let l=o(`rue:slot:anchor`);r(s,l),_(()=>{let n=t.title;e(()=>f(n,s,l))});let u=d(`div`,i);r(i,u),a(u,`mt-2 text-3xl font-semibold`);let p=c(u);r(u,p),_(()=>{g(p,t.value)});let m=d(`div`,i);r(i,m),a(m,`mt-1 text-sm opacity-75`);let h=o(`rue:slot:anchor`);r(m,h),_(()=>{let n=t.detail;e(()=>f(n,m,h))});let v=d(`div`,i);r(i,v),a(v,`mt-4`);let y=o(`rue:children:anchor`);return r(v,y),_(()=>{let n=t.children;e(()=>f(n,v,y))}),i}),C=t=>l(n=>{let i=d(`section`,n);a(i,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let s=d(`div`,i);r(i,s),a(s,`flex items-center justify-between gap-3`);let c=d(`div`,s);r(s,c);let l=d(`div`,c);r(c,l),a(l,`font-semibold`);let u=o(`rue:slot:anchor`);r(l,u),_(()=>{let n=t.title;e(()=>f(n,l,u))});let p=d(`div`,c);r(c,p),a(p,`text-sm opacity-75`);let m=o(`rue:slot:anchor`);r(p,m),_(()=>{let n=t.detail;e(()=>f(n,p,m))});let h=d(`span`,s);r(s,h),a(h,`status status-info status-lg`);let g=d(`div`,i);r(i,g),a(g,`mt-4`);let v=o(`rue:children:anchor`);return r(g,v),_(()=>{let n=t.children;e(()=>f(n,g,v))}),i}),w=t=>l(n=>{let i=d(`article`,n);a(i,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let s=d(`div`,i);r(i,s),a(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let l=o(`rue:slot:anchor`);r(s,l),_(()=>{let n=t.title;e(()=>f(n,s,l))});let u=d(`div`,i);r(i,u),a(u,`mt-2 text-2xl font-semibold`);let p=c(u);r(u,p),_(()=>{g(p,t.value??`Registered`)});let m=d(`div`,i);r(i,m),a(m,`mt-1 text-sm opacity-75`);let h=o(`rue:slot:anchor`);r(m,h),_(()=>{let n=t.detail;e(()=>f(n,m,h))});let v=d(`div`,i);r(i,v),a(v,`mt-4`);let y=o(`rue:children:anchor`);return r(v,y),_(()=>{let n=t.children;e(()=>f(n,v,y))}),i}),T=t=>l(n=>{let i=d(`section`,n);a(i,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let s=d(`div`,i);r(i,s),a(s,`font-semibold`);let c=o(`rue:slot:anchor`);r(s,c),_(()=>{let n=t.title;e(()=>f(n,s,c))});let l=d(`div`,i);r(i,l),a(l,`mt-1 text-sm opacity-75`);let u=o(`rue:slot:anchor`);r(l,u),_(()=>{let n=t.detail;e(()=>f(n,l,u))});let p=d(`div`,i);r(i,p),a(p,`mt-4`);let m=o(`rue:children:anchor`);return r(p,m),_(()=>{let n=t.children;e(()=>f(n,p,m))}),i}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>s(()=>{E();let e=v(`ref:1:0`,()=>n(`preview`)),t=v(`ref:1:1`,()=>n(`native`)),r=v(`ref:1:2`,()=>n(`primary`));return{activeTab:e,renderTarget:t,tone:r,registryTarget:v(`ref:1:3`,()=>n(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:r.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return l(n=>{let s=h(),v=o(`rue:component:anchor`);return r(s,v),f(m(b,{children:l(()=>{let n=h(),s=d(`h1`,n);r(n,s),a(s,`text-5xl font-semibold mb-4 md:mb-4`),r(s,p(`动态组件（Component）`));let v=d(`div`,n);r(n,v),u(v,`role`,`tablist`),a(v,`tabs tabs-box`);let b=d(`button`,v);r(v,b),u(b,`role`,`tab`),_(()=>{a(b,`tab ${y.value===`preview`?`tab-active`:``}`)}),i(b,`click`,()=>{y.value=`preview`}),r(b,p(`效果`));let S=d(`button`,v);r(v,S),u(S,`role`,`tab`),_(()=>{a(S,`tab ${y.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{y.value=`code`}),r(S,p(`代码`));let C=d(`div`,n);r(n,C),_(()=>{a(C,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`)});let E=d(`div`,C);r(C,E),a(E,`card bg-base-100 shadow`);let D=d(`div`,E);r(E,D),a(D,`card-body gap-6`);let O=d(`section`,D);r(D,O),a(O,`space-y-3`);let k=d(`div`,O);r(O,k),a(k,`flex flex-wrap items-center justify-between gap-3`);let A=d(`div`,k);r(k,A);let ie=d(`h2`,A);r(A,ie),a(ie,`text-xl font-semibold`),r(ie,p(`1. 直接切换原生标签和组件定义`));let j=d(`p`,A);r(A,j),a(j,`text-sm opacity-75`),r(j,p(`这里显式导入并使用 `));let ae=c(j);r(j,ae),g(ae,`<Component>`),r(j,p(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=d(`div`,k);r(k,M),a(M,`flex flex-wrap gap-3`);let N=d(`div`,M);r(M,N),a(N,`join`);let P=d(`button`,N);r(N,P),_(()=>{a(P,`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`)}),i(P,`click`,()=>{x.value=`native`}),r(P,p(`原生 article`));let F=d(`button`,N);r(N,F),_(()=>{a(F,`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`)}),i(F,`click`,()=>{x.value=`card`}),r(F,p(`SalesCard`));let oe=d(`button`,N);r(N,oe),_(()=>{a(oe,`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`)}),i(oe,`click`,()=>{x.value=`notice`}),r(oe,p(`StatusStrip`));let I=d(`div`,M);r(M,I),a(I,`join`);let L=d(`button`,I);r(I,L),_(()=>{a(L,`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`)}),i(L,`click`,()=>{w.value=`primary`}),r(L,p(`primary`));let se=d(`button`,I);r(I,se),_(()=>{a(se,`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`)}),i(se,`click`,()=>{w.value=`accent`}),r(se,p(`accent`));let R=d(`div`,O);r(O,R),a(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=d(`div`,R);r(R,ce),a(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=o(`rue:component:anchor`);r(ce,le);let ue=l(()=>{let e=h(),t=d(`span`,e);return r(e,t),a(t,`badge badge-outline badge-sm`),r(t,p(`children 已透传`)),e});_(()=>{let n=m(t,{is:te(),...re(),children:ue});e(()=>f(n,ce,le))});let z=d(`div`,R);r(R,z),a(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=d(`div`,z);r(z,B);let de=d(`strong`,B);r(B,de),r(de,p(`当前 is`)),r(B,p(`： `));let fe=c(B);r(B,fe),_(()=>{g(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=d(`div`,z);r(z,V);let pe=d(`strong`,V);r(V,pe),r(pe,p(`验证点`)),r(V,p(`：native element、直接组件定义、children 透传。`));let H=d(`div`,z);r(z,H);let me=d(`strong`,H);r(H,me),r(me,p(`说明`)),r(H,p(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=d(`section`,D);r(D,U),a(U,`space-y-3`);let W=d(`div`,U);r(U,W),a(W,`flex flex-wrap items-center justify-between gap-3`);let G=d(`div`,W);r(W,G);let he=d(`h2`,G);r(G,he),a(he,`text-xl font-semibold`),r(he,p(`2. 运行时注册字符串组件名`));let K=d(`p`,G);r(G,K),a(K,`text-sm opacity-75`),r(K,p(`下面这个小区域直接在当前页面里使用导出的 `));let ge=c(K);r(K,ge),g(ge,`<Component>`),r(K,p(`，并通过 useApp().component('RegisteredMetric', RegisteredMetric) 把字符串名注册到当前 runtime。`));let q=d(`div`,W);r(W,q),a(q,`join`);let _e=d(`button`,q);r(q,_e),_(()=>{a(_e,`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`)}),i(_e,`click`,()=>{T.value=`metric`}),r(_e,p(`RegisteredMetric`));let ve=d(`button`,q);r(q,ve),_(()=>{a(ve,`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`)}),i(ve,`click`,()=>{T.value=`notice`}),r(ve,p(`RegisteredNotice`));let J=d(`div`,U);r(U,J),a(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=d(`div`,J);r(J,ye),a(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=o(`rue:component:anchor`);r(ye,be);let xe=l(()=>{let e=h(),t=d(`span`,e);return r(e,t),a(t,`badge badge-outline badge-sm`),r(t,p(`children 一样会透传`)),e});_(()=>{let n=m(t,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component('RegisteredMetric', RegisteredMetric) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});e(()=>f(n,ye,be))});let Y=d(`div`,J);r(J,Y),a(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=d(`div`,Y);r(Y,X),r(X,p(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=c(X);r(X,Se),g(Se,` `),r(X,p(` `));let Ce=c(X);r(X,Ce),g(Ce,`<Component>`),r(X,p(`。`));let we=d(`div`,Y);r(Y,we),r(we,p(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=d(`div`,Y);r(Y,Te),r(Te,p(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=d(`div`,D);r(D,Z),u(Z,`role`,`alert`),a(Z,`alert alert-warning alert-soft`);let Q=d(`span`,Z);r(Z,Q),r(Q,p(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=c(Q);r(Q,Ee),g(Ee,` `),r(Q,p(` `));let De=c(Q);r(Q,De),g(De,`<Component>`),r(Q,p(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=d(`div`,n);r(n,Oe),_(()=>{a(Oe,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`)});let ke=d(`div`,Oe);r(Oe,ke),a(ke,`card bg-base-100 shadow overflow-auto`);let $=d(`div`,ke);r(ke,$),a($,`card-body p-0`);let Ae=o(`rue:component:anchor`);return r($,Ae),_(()=>{let t=m(ee,{className:`h-full`,lang:`tsx`,code:ne});e(()=>f(t,$,Ae))}),n})}),s,v),s})};export{re as default};
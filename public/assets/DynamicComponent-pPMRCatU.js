import{$ as e,K as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,et as c,ht as l,l as u,lt as d,nt as f,o as p,st as m,t as h,tt as g,zt as _}from"./vapor-runtime-CXIalONM.js";import{a as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{t as y}from"./useApp-DcZ6w5oj.js";import{t as ee}from"./Code-BIscIyEp.js";import{r as b}from"./SidebarPlaygroundExample-CEz1fABX.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=e=>u(t=>{let o=c(`article`,t);r(()=>{d(o,`rounded-box border p-4 shadow-sm ${x[e.tone??`primary`]}`)});let s=c(`div`,o);a(o,s),d(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let u=n(`rue:slot:anchor`);a(s,u),r(()=>{let t=e.title;i(()=>p(t,s,u))});let m=c(`div`,o);a(o,m),d(m,`mt-2 text-3xl font-semibold`);let h=f(m);a(m,h),r(()=>{l(h,e.value)});let g=c(`div`,o);a(o,g),d(g,`mt-1 text-sm opacity-75`);let _=n(`rue:slot:anchor`);a(g,_),r(()=>{let t=e.detail;i(()=>p(t,g,_))});let v=c(`div`,o);a(o,v),d(v,`mt-4`);let y=n(`rue:children:anchor`);return a(v,y),r(()=>{let t=e.children;i(()=>p(t,v,y))}),o}),C=e=>u(t=>{let o=c(`section`,t);d(o,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let s=c(`div`,o);a(o,s),d(s,`flex items-center justify-between gap-3`);let l=c(`div`,s);a(s,l);let u=c(`div`,l);a(l,u),d(u,`font-semibold`);let f=n(`rue:slot:anchor`);a(u,f),r(()=>{let t=e.title;i(()=>p(t,u,f))});let m=c(`div`,l);a(l,m),d(m,`text-sm opacity-75`);let h=n(`rue:slot:anchor`);a(m,h),r(()=>{let t=e.detail;i(()=>p(t,m,h))});let g=c(`span`,s);a(s,g),d(g,`status status-info status-lg`);let _=c(`div`,o);a(o,_),d(_,`mt-4`);let v=n(`rue:children:anchor`);return a(_,v),r(()=>{let t=e.children;i(()=>p(t,_,v))}),o}),w=e=>u(t=>{let o=c(`article`,t);d(o,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let s=c(`div`,o);a(o,s),d(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let u=n(`rue:slot:anchor`);a(s,u),r(()=>{let t=e.title;i(()=>p(t,s,u))});let m=c(`div`,o);a(o,m),d(m,`mt-2 text-2xl font-semibold`);let h=f(m);a(m,h),r(()=>{l(h,e.value??`Registered`)});let g=c(`div`,o);a(o,g),d(g,`mt-1 text-sm opacity-75`);let _=n(`rue:slot:anchor`);a(g,_),r(()=>{let t=e.detail;i(()=>p(t,g,_))});let v=c(`div`,o);a(o,v),d(v,`mt-4`);let y=n(`rue:children:anchor`);return a(v,y),r(()=>{let t=e.children;i(()=>p(t,v,y))}),o}),T=e=>u(t=>{let o=c(`section`,t);d(o,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let s=c(`div`,o);a(o,s),d(s,`font-semibold`);let l=n(`rue:slot:anchor`);a(s,l),r(()=>{let t=e.title;i(()=>p(t,s,l))});let u=c(`div`,o);a(o,u),d(u,`mt-1 text-sm opacity-75`);let f=n(`rue:slot:anchor`);a(u,f),r(()=>{let t=e.detail;i(()=>p(t,u,f))});let m=c(`div`,o);a(o,m),d(m,`mt-4`);let h=n(`rue:children:anchor`);return a(m,h),r(()=>{let t=e.children;i(()=>p(t,m,h))}),o}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>s(()=>{E();let e=v(`ref:1:0`,()=>_(`preview`)),t=v(`ref:1:1`,()=>_(`native`)),n=v(`ref:1:2`,()=>_(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:v(`ref:1:3`,()=>_(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return u(s=>{let _=e(),v=n(`rue:component:anchor`);return a(_,v),p(h(b,{children:u(()=>{let s=e(),_=c(`h1`,s);a(s,_),d(_,`text-5xl font-semibold mb-4 md:mb-4`),a(_,g(`动态组件（Component）`));let v=c(`div`,s);a(s,v),m(v,`role`,`tablist`),d(v,`tabs tabs-box`);let b=c(`button`,v);a(v,b),m(b,`role`,`tab`),r(()=>{d(b,`tab ${y.value===`preview`?`tab-active`:``}`)}),o(b,`click`,()=>{y.value=`preview`}),a(b,g(`效果`));let S=c(`button`,v);a(v,S),m(S,`role`,`tab`),r(()=>{d(S,`tab ${y.value===`code`?`tab-active`:``}`)}),o(S,`click`,()=>{y.value=`code`}),a(S,g(`代码`));let C=c(`div`,s);a(s,C),r(()=>{d(C,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`)});let E=c(`div`,C);a(C,E),d(E,`card bg-base-100 shadow`);let D=c(`div`,E);a(E,D),d(D,`card-body gap-6`);let O=c(`section`,D);a(D,O),d(O,`space-y-3`);let k=c(`div`,O);a(O,k),d(k,`flex flex-wrap items-center justify-between gap-3`);let A=c(`div`,k);a(k,A);let ie=c(`h2`,A);a(A,ie),d(ie,`text-xl font-semibold`),a(ie,g(`1. 直接切换原生标签和组件定义`));let j=c(`p`,A);a(A,j),d(j,`text-sm opacity-75`),a(j,g(`这里显式导入并使用 `));let ae=f(j);a(j,ae),l(ae,`<Component>`),a(j,g(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=c(`div`,k);a(k,M),d(M,`flex flex-wrap gap-3`);let N=c(`div`,M);a(M,N),d(N,`join`);let P=c(`button`,N);a(N,P),r(()=>{d(P,`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`)}),o(P,`click`,()=>{x.value=`native`}),a(P,g(`原生 article`));let F=c(`button`,N);a(N,F),r(()=>{d(F,`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`)}),o(F,`click`,()=>{x.value=`card`}),a(F,g(`SalesCard`));let oe=c(`button`,N);a(N,oe),r(()=>{d(oe,`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`)}),o(oe,`click`,()=>{x.value=`notice`}),a(oe,g(`StatusStrip`));let I=c(`div`,M);a(M,I),d(I,`join`);let L=c(`button`,I);a(I,L),r(()=>{d(L,`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`)}),o(L,`click`,()=>{w.value=`primary`}),a(L,g(`primary`));let se=c(`button`,I);a(I,se),r(()=>{d(se,`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`)}),o(se,`click`,()=>{w.value=`accent`}),a(se,g(`accent`));let R=c(`div`,O);a(O,R),d(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=c(`div`,R);a(R,ce),d(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=n(`rue:component:anchor`);a(ce,le);let ue=u(()=>{let t=e(),n=c(`span`,t);return a(t,n),d(n,`badge badge-outline badge-sm`),a(n,g(`children 已透传`)),t});r(()=>{let e=h(t,{is:te(),...re(),children:ue});i(()=>p(e,ce,le))});let z=c(`div`,R);a(R,z),d(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=c(`div`,z);a(z,B);let de=c(`strong`,B);a(B,de),a(de,g(`当前 is`)),a(B,g(`： `));let fe=f(B);a(B,fe),r(()=>{l(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=c(`div`,z);a(z,V);let pe=c(`strong`,V);a(V,pe),a(pe,g(`验证点`)),a(V,g(`：native element、直接组件定义、children 透传。`));let H=c(`div`,z);a(z,H);let me=c(`strong`,H);a(H,me),a(me,g(`说明`)),a(H,g(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=c(`section`,D);a(D,U),d(U,`space-y-3`);let W=c(`div`,U);a(U,W),d(W,`flex flex-wrap items-center justify-between gap-3`);let G=c(`div`,W);a(W,G);let he=c(`h2`,G);a(G,he),d(he,`text-xl font-semibold`),a(he,g(`2. 运行时注册字符串组件名`));let K=c(`p`,G);a(G,K),d(K,`text-sm opacity-75`),a(K,g(`下面这个小区域直接在当前页面里使用导出的 `));let ge=f(K);a(K,ge),l(ge,`<Component>`),a(K,g(`，并通过 useApp().component('RegisteredMetric', RegisteredMetric) 把字符串名注册到当前 runtime。`));let q=c(`div`,W);a(W,q),d(q,`join`);let _e=c(`button`,q);a(q,_e),r(()=>{d(_e,`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`)}),o(_e,`click`,()=>{T.value=`metric`}),a(_e,g(`RegisteredMetric`));let ve=c(`button`,q);a(q,ve),r(()=>{d(ve,`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`)}),o(ve,`click`,()=>{T.value=`notice`}),a(ve,g(`RegisteredNotice`));let J=c(`div`,U);a(U,J),d(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=c(`div`,J);a(J,ye),d(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=n(`rue:component:anchor`);a(ye,be);let xe=u(()=>{let t=e(),n=c(`span`,t);return a(t,n),d(n,`badge badge-outline badge-sm`),a(n,g(`children 一样会透传`)),t});r(()=>{let e=h(t,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component('RegisteredMetric', RegisteredMetric) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});i(()=>p(e,ye,be))});let Y=c(`div`,J);a(J,Y),d(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=c(`div`,Y);a(Y,X),a(X,g(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=f(X);a(X,Se),l(Se,` `),a(X,g(` `));let Ce=f(X);a(X,Ce),l(Ce,`<Component>`),a(X,g(`。`));let we=c(`div`,Y);a(Y,we),a(we,g(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=c(`div`,Y);a(Y,Te),a(Te,g(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=c(`div`,D);a(D,Z),m(Z,`role`,`alert`),d(Z,`alert alert-warning alert-soft`);let Q=c(`span`,Z);a(Z,Q),a(Q,g(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=f(Q);a(Q,Ee),l(Ee,` `),a(Q,g(` `));let De=f(Q);a(Q,De),l(De,`<Component>`),a(Q,g(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=c(`div`,s);a(s,Oe),r(()=>{d(Oe,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`)});let ke=c(`div`,Oe);a(Oe,ke),d(ke,`card bg-base-100 shadow overflow-auto`);let $=c(`div`,ke);a(ke,$),d($,`card-body p-0`);let Ae=n(`rue:component:anchor`);return a($,Ae),r(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:ne});i(()=>p(e,$,Ae))}),s})}),_,v),_})};export{re as default};
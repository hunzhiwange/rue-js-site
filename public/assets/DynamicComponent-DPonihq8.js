import{$ as e,Et as t,G as n,H as r,J as i,K as a,R as o,V as s,W as c,_t as l,d as u,kt as d,l as f,q as p,st as m,t as h,tt as g,xt as _}from"./vapor-runtime-EUvELKQT.js";import{a as v}from"./vapor-helpers-vapor-C_FztvJU.js";import{t as y}from"./useApp-C05p-kP-.js";import{t as ee}from"./Code-BdVklNCb.js";import{t as b}from"./SidebarPlaygroundExample-1AA0CIwm.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=e=>u(t=>{let n=a(`article`,t);d(()=>{g(n,String(`rounded-box border p-4 shadow-sm ${x[e.tone??`primary`]}`))});let o=a(`div`,n);r(n,o),g(o,`text-xs uppercase tracking-[0.22em] opacity-60`);let s=c(`rue:slot:anchor`);r(o,s),d(()=>{let t=e.title;_(()=>f(t,o,s))});let l=a(`div`,n);r(n,l),g(l,`mt-2 text-3xl font-semibold`);let u=i(l);r(l,u),d(()=>{m(u,e.value)});let p=a(`div`,n);r(n,p),g(p,`mt-1 text-sm opacity-75`);let h=c(`rue:slot:anchor`);r(p,h),d(()=>{let t=e.detail;_(()=>f(t,p,h))});let v=a(`div`,n);r(n,v),g(v,`mt-4`);let y=c(`rue:children:anchor`);return r(v,y),d(()=>{let t=e.children;_(()=>f(t,v,y))}),n}),C=e=>u(t=>{let n=a(`section`,t);g(n,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let i=a(`div`,n);r(n,i),g(i,`flex items-center justify-between gap-3`);let o=a(`div`,i);r(i,o);let s=a(`div`,o);r(o,s),g(s,`font-semibold`);let l=c(`rue:slot:anchor`);r(s,l),d(()=>{let t=e.title;_(()=>f(t,s,l))});let u=a(`div`,o);r(o,u),g(u,`text-sm opacity-75`);let p=c(`rue:slot:anchor`);r(u,p),d(()=>{let t=e.detail;_(()=>f(t,u,p))});let m=a(`span`,i);r(i,m),g(m,`status status-info status-lg`);let h=a(`div`,n);r(n,h),g(h,`mt-4`);let v=c(`rue:children:anchor`);return r(h,v),d(()=>{let t=e.children;_(()=>f(t,h,v))}),n}),w=e=>u(t=>{let n=a(`article`,t);g(n,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let o=a(`div`,n);r(n,o),g(o,`text-xs uppercase tracking-[0.22em] opacity-60`);let s=c(`rue:slot:anchor`);r(o,s),d(()=>{let t=e.title;_(()=>f(t,o,s))});let l=a(`div`,n);r(n,l),g(l,`mt-2 text-2xl font-semibold`);let u=i(l);r(l,u),d(()=>{m(u,e.value??`Registered`)});let p=a(`div`,n);r(n,p),g(p,`mt-1 text-sm opacity-75`);let h=c(`rue:slot:anchor`);r(p,h),d(()=>{let t=e.detail;_(()=>f(t,p,h))});let v=a(`div`,n);r(n,v),g(v,`mt-4`);let y=c(`rue:children:anchor`);return r(v,y),d(()=>{let t=e.children;_(()=>f(t,v,y))}),n}),T=e=>u(t=>{let n=a(`section`,t);g(n,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let i=a(`div`,n);r(n,i),g(i,`font-semibold`);let o=c(`rue:slot:anchor`);r(i,o),d(()=>{let t=e.title;_(()=>f(t,i,o))});let s=a(`div`,n);r(n,s),g(s,`mt-1 text-sm opacity-75`);let l=c(`rue:slot:anchor`);r(s,l),d(()=>{let t=e.detail;_(()=>f(t,s,l))});let u=a(`div`,n);r(n,u),g(u,`mt-4`);let p=c(`rue:children:anchor`);return r(u,p),d(()=>{let t=e.children;_(()=>f(t,u,p))}),n}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>t(()=>{E();let e=v(`ref:1:0`,()=>l(`preview`)),t=v(`ref:1:1`,()=>l(`native`)),n=v(`ref:1:2`,()=>l(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:v(`ref:1:3`,()=>l(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return u(t=>{let l=n(),v=c(`rue:component:anchor`);return r(l,v),f(h(b,{children:u(()=>{let t=n(),l=a(`h1`,t);r(t,l),g(l,`text-5xl font-semibold mb-4 md:mb-4`),r(l,p(`动态组件（Component）`));let v=a(`div`,t);r(t,v),e(v,`role`,`tablist`),g(v,`tabs tabs-box`);let b=a(`button`,v);r(v,b),e(b,`role`,`tab`),d(()=>{g(b,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),s(b,`click`,()=>{y.value=`preview`}),r(b,p(`效果`));let S=a(`button`,v);r(v,S),e(S,`role`,`tab`),d(()=>{g(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),s(S,`click`,()=>{y.value=`code`}),r(S,p(`代码`));let C=a(`div`,t);r(t,C),d(()=>{g(C,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`))});let E=a(`div`,C);r(C,E),g(E,`card bg-base-100 shadow`);let D=a(`div`,E);r(E,D),g(D,`card-body gap-6`);let O=a(`section`,D);r(D,O),g(O,`space-y-3`);let k=a(`div`,O);r(O,k),g(k,`flex flex-wrap items-center justify-between gap-3`);let A=a(`div`,k);r(k,A);let ie=a(`h2`,A);r(A,ie),g(ie,`text-xl font-semibold`),r(ie,p(`1. 直接切换原生标签和组件定义`));let j=a(`p`,A);r(A,j),g(j,`text-sm opacity-75`),r(j,p(`这里显式导入并使用 `));let ae=i(j);r(j,ae),m(ae,`<Component>`),r(j,p(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=a(`div`,k);r(k,M),g(M,`flex flex-wrap gap-3`);let N=a(`div`,M);r(M,N),g(N,`join`);let P=a(`button`,N);r(N,P),d(()=>{g(P,String(`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`))}),s(P,`click`,()=>{x.value=`native`}),r(P,p(`原生 article`));let F=a(`button`,N);r(N,F),d(()=>{g(F,String(`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`))}),s(F,`click`,()=>{x.value=`card`}),r(F,p(`SalesCard`));let oe=a(`button`,N);r(N,oe),d(()=>{g(oe,String(`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`))}),s(oe,`click`,()=>{x.value=`notice`}),r(oe,p(`StatusStrip`));let I=a(`div`,M);r(M,I),g(I,`join`);let L=a(`button`,I);r(I,L),d(()=>{g(L,String(`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`))}),s(L,`click`,()=>{w.value=`primary`}),r(L,p(`primary`));let se=a(`button`,I);r(I,se),d(()=>{g(se,String(`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`))}),s(se,`click`,()=>{w.value=`accent`}),r(se,p(`accent`));let R=a(`div`,O);r(O,R),g(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=a(`div`,R);r(R,ce),g(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=c(`rue:component:anchor`);r(ce,le);let ue=u(()=>{let e=n(),t=a(`span`,e);return r(e,t),g(t,`badge badge-outline badge-sm`),r(t,p(`children 已透传`)),e});d(()=>{let e=h(o,{is:te(),...re(),children:ue});_(()=>f(e,ce,le))});let z=a(`div`,R);r(R,z),g(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=a(`div`,z);r(z,B);let de=a(`strong`,B);r(B,de),r(de,p(`当前 is`)),r(B,p(`： `));let fe=i(B);r(B,fe),d(()=>{m(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=a(`div`,z);r(z,V);let pe=a(`strong`,V);r(V,pe),r(pe,p(`验证点`)),r(V,p(`：native element、直接组件定义、children 透传。`));let H=a(`div`,z);r(z,H);let me=a(`strong`,H);r(H,me),r(me,p(`说明`)),r(H,p(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=a(`section`,D);r(D,U),g(U,`space-y-3`);let W=a(`div`,U);r(U,W),g(W,`flex flex-wrap items-center justify-between gap-3`);let G=a(`div`,W);r(W,G);let he=a(`h2`,G);r(G,he),g(he,`text-xl font-semibold`),r(he,p(`2. 运行时注册字符串组件名`));let K=a(`p`,G);r(G,K),g(K,`text-sm opacity-75`),r(K,p(`下面这个小区域直接在当前页面里使用导出的 `));let ge=i(K);r(K,ge),m(ge,`<Component>`),r(K,p(`，并通过 useApp().component(...) 把字符串名注册到当前 runtime。`));let q=a(`div`,W);r(W,q),g(q,`join`);let _e=a(`button`,q);r(q,_e),d(()=>{g(_e,String(`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`))}),s(_e,`click`,()=>{T.value=`metric`}),r(_e,p(`RegisteredMetric`));let ve=a(`button`,q);r(q,ve),d(()=>{g(ve,String(`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`))}),s(ve,`click`,()=>{T.value=`notice`}),r(ve,p(`RegisteredNotice`));let J=a(`div`,U);r(U,J),g(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=a(`div`,J);r(J,ye),g(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=c(`rue:component:anchor`);r(ye,be);let xe=u(()=>{let e=n(),t=a(`span`,e);return r(e,t),g(t,`badge badge-outline badge-sm`),r(t,p(`children 一样会透传`)),e});d(()=>{let e=h(o,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component(...) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});_(()=>f(e,ye,be))});let Y=a(`div`,J);r(J,Y),g(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=a(`div`,Y);r(Y,X),r(X,p(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=i(X);r(X,Se),m(Se,` `),r(X,p(` `));let Ce=i(X);r(X,Ce),m(Ce,`<Component>`),r(X,p(`。`));let we=a(`div`,Y);r(Y,we),r(we,p(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=a(`div`,Y);r(Y,Te),r(Te,p(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=a(`div`,D);r(D,Z),e(Z,`role`,`alert`),g(Z,`alert alert-warning alert-soft`);let Q=a(`span`,Z);r(Z,Q),r(Q,p(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=i(Q);r(Q,Ee),m(Ee,` `),r(Q,p(` `));let De=i(Q);r(Q,De),m(De,`<Component>`),r(Q,p(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=a(`div`,t);r(t,Oe),d(()=>{g(Oe,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`))});let ke=a(`div`,Oe);r(Oe,ke),g(ke,`card bg-base-100 shadow overflow-auto`);let $=a(`div`,ke);r(ke,$),g($,`card-body p-0`);let Ae=c(`rue:component:anchor`);return r($,Ae),d(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:ne});_(()=>f(e,$,Ae))}),t})}),l,v),l})};export{re as default};
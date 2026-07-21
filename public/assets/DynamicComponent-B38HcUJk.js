import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,rt as d,st as f,tn as p,vn as m}from"./context-8lXZvIn-.js";import{l as h,o as g,t as _}from"./vapor-runtime-ygJWVcNn.js";import{a as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./useApp-M23tfvVD.js";import{t as ee}from"./Code-DhoWkRkB.js";import{r as b}from"./SidebarPlaygroundExample-B78jsvoF.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=e=>h(t=>{let a=u(`article`,t);p(()=>{r(a,`rounded-box border p-4 shadow-sm ${x[e.tone??`primary`]}`)});let s=u(`div`,a);f(a,s),r(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let c=i(`rue:slot:anchor`);f(s,c),p(()=>{let t=e.title;m(()=>g(t,s,c))});let l=u(`div`,a);f(a,l),r(l,`mt-2 text-3xl font-semibold`);let d=o(l);f(l,d),p(()=>{n(d,e.value)});let h=u(`div`,a);f(a,h),r(h,`mt-1 text-sm opacity-75`);let _=i(`rue:slot:anchor`);f(h,_),p(()=>{let t=e.detail;m(()=>g(t,h,_))});let v=u(`div`,a);f(a,v),r(v,`mt-4`);let y=i(`rue:children:anchor`);return f(v,y),p(()=>{let t=e.children;m(()=>g(t,v,y))}),a}),C=e=>h(t=>{let n=u(`section`,t);r(n,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let a=u(`div`,n);f(n,a),r(a,`flex items-center justify-between gap-3`);let o=u(`div`,a);f(a,o);let s=u(`div`,o);f(o,s),r(s,`font-semibold`);let c=i(`rue:slot:anchor`);f(s,c),p(()=>{let t=e.title;m(()=>g(t,s,c))});let l=u(`div`,o);f(o,l),r(l,`text-sm opacity-75`);let d=i(`rue:slot:anchor`);f(l,d),p(()=>{let t=e.detail;m(()=>g(t,l,d))});let h=u(`span`,a);f(a,h),r(h,`status status-info status-lg`);let _=u(`div`,n);f(n,_),r(_,`mt-4`);let v=i(`rue:children:anchor`);return f(_,v),p(()=>{let t=e.children;m(()=>g(t,_,v))}),n}),w=e=>h(t=>{let a=u(`article`,t);r(a,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let s=u(`div`,a);f(a,s),r(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let c=i(`rue:slot:anchor`);f(s,c),p(()=>{let t=e.title;m(()=>g(t,s,c))});let l=u(`div`,a);f(a,l),r(l,`mt-2 text-2xl font-semibold`);let d=o(l);f(l,d),p(()=>{n(d,e.value??`Registered`)});let h=u(`div`,a);f(a,h),r(h,`mt-1 text-sm opacity-75`);let _=i(`rue:slot:anchor`);f(h,_),p(()=>{let t=e.detail;m(()=>g(t,h,_))});let v=u(`div`,a);f(a,v),r(v,`mt-4`);let y=i(`rue:children:anchor`);return f(v,y),p(()=>{let t=e.children;m(()=>g(t,v,y))}),a}),T=e=>h(t=>{let n=u(`section`,t);r(n,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let a=u(`div`,n);f(n,a),r(a,`font-semibold`);let o=i(`rue:slot:anchor`);f(a,o),p(()=>{let t=e.title;m(()=>g(t,a,o))});let s=u(`div`,n);f(n,s),r(s,`mt-1 text-sm opacity-75`);let c=i(`rue:slot:anchor`);f(s,c),p(()=>{let t=e.detail;m(()=>g(t,s,c))});let l=u(`div`,n);f(n,l),r(l,`mt-4`);let d=i(`rue:children:anchor`);return f(l,d),p(()=>{let t=e.children;m(()=>g(t,l,d))}),n}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re,resolveRegistryType:ie}=v(`useSetup:0:0`,()=>e(()=>{E();let e=v(`ref:1:0`,()=>l(`preview`)),t=v(`ref:1:1`,()=>l(`native`)),n=v(`ref:1:2`,()=>l(`primary`)),r=v(`ref:1:3`,()=>l(`metric`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:r,resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`},resolveRegistryType:()=>r.value===`metric`?`RegisteredMetric`:`RegisteredNotice`}}));return h(e=>{let l=a(),v=i(`rue:component:anchor`);return f(l,v),g(_(b,{children:h(()=>{let e=a(),l=u(`h1`,e);f(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),f(l,s(`动态组件（Component）`));let v=u(`div`,e);f(e,v),t(v,`role`,`tablist`),r(v,`tabs tabs-box`);let b=u(`button`,v);f(v,b),t(b,`role`,`tab`),p(()=>{r(b,`tab ${y.value===`preview`?`tab-active`:``}`)}),c(b,`click`,()=>{y.value=`preview`}),f(b,s(`效果`));let S=u(`button`,v);f(v,S),t(S,`role`,`tab`),p(()=>{r(S,`tab ${y.value===`code`?`tab-active`:``}`)}),c(S,`click`,()=>{y.value=`code`}),f(S,s(`代码`));let C=u(`div`,e);f(e,C),p(()=>{r(C,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`)});let E=u(`div`,C);f(C,E),r(E,`card bg-base-100 shadow`);let D=u(`div`,E);f(E,D),r(D,`card-body gap-6`);let O=u(`section`,D);f(D,O),r(O,`space-y-3`);let k=u(`div`,O);f(O,k),r(k,`flex flex-wrap items-center justify-between gap-3`);let A=u(`div`,k);f(k,A);let ae=u(`h2`,A);f(A,ae),r(ae,`text-xl font-semibold`),f(ae,s(`1. 直接切换原生标签和组件定义`));let j=u(`p`,A);f(A,j),r(j,`text-sm opacity-75`),f(j,s(`这里显式导入并使用 `));let oe=o(j);f(j,oe),n(oe,`<Component>`),f(j,s(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=u(`div`,k);f(k,M),r(M,`flex flex-wrap gap-3`);let N=u(`div`,M);f(M,N),r(N,`join`);let P=u(`button`,N);f(N,P),p(()=>{r(P,`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`)}),c(P,`click`,()=>{x.value=`native`}),f(P,s(`原生 article`));let F=u(`button`,N);f(N,F),p(()=>{r(F,`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`)}),c(F,`click`,()=>{x.value=`card`}),f(F,s(`SalesCard`));let se=u(`button`,N);f(N,se),p(()=>{r(se,`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`)}),c(se,`click`,()=>{x.value=`notice`}),f(se,s(`StatusStrip`));let I=u(`div`,M);f(M,I),r(I,`join`);let ce=u(`button`,I);f(I,ce),p(()=>{r(ce,`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`)}),c(ce,`click`,()=>{w.value=`primary`}),f(ce,s(`primary`));let le=u(`button`,I);f(I,le),p(()=>{r(le,`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`)}),c(le,`click`,()=>{w.value=`accent`}),f(le,s(`accent`));let L=u(`div`,O);f(O,L),r(L,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let R=u(`div`,L);f(L,R),r(R,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let ue=i(`rue:component:anchor`);f(R,ue);let de=h(()=>{let e=a(),t=u(`span`,e);return f(e,t),r(t,`badge badge-outline badge-sm`),f(t,s(`children 已透传`)),e});p(()=>{let e=_(d,{is:te(),...re(),children:de});m(()=>g(e,R,ue))});let z=u(`div`,L);f(L,z),r(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=u(`div`,z);f(z,B);let fe=u(`strong`,B);f(B,fe),f(fe,s(`当前 is`)),f(B,s(`： `));let pe=o(B);f(B,pe),p(()=>{n(pe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=u(`div`,z);f(z,V);let me=u(`strong`,V);f(V,me),f(me,s(`验证点`)),f(V,s(`：native element、直接组件定义、children 透传。`));let H=u(`div`,z);f(z,H);let he=u(`strong`,H);f(H,he),f(he,s(`说明`)),f(H,s(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=u(`section`,D);f(D,U),r(U,`space-y-3`);let W=u(`div`,U);f(U,W),r(W,`flex flex-wrap items-center justify-between gap-3`);let G=u(`div`,W);f(W,G);let ge=u(`h2`,G);f(G,ge),r(ge,`text-xl font-semibold`),f(ge,s(`2. 运行时注册字符串组件名`));let K=u(`p`,G);f(G,K),r(K,`text-sm opacity-75`),f(K,s(`下面这个小区域直接在当前页面里使用导出的 `));let _e=o(K);f(K,_e),n(_e,`<Component>`),f(K,s(`，并通过 useApp().component('RegisteredMetric', RegisteredMetric) 把字符串名注册到当前 runtime。`));let q=u(`div`,W);f(W,q),r(q,`join`);let ve=u(`button`,q);f(q,ve),p(()=>{r(ve,`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`)}),c(ve,`click`,()=>{T.value=`metric`}),f(ve,s(`RegisteredMetric`));let ye=u(`button`,q);f(q,ye),p(()=>{r(ye,`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`)}),c(ye,`click`,()=>{T.value=`notice`}),f(ye,s(`RegisteredNotice`));let J=u(`div`,U);f(U,J),r(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let be=u(`div`,J);f(J,be),r(be,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let xe=i(`rue:component:anchor`);f(be,xe);let Se=h(()=>{let e=a(),t=u(`span`,e);return f(e,t),r(t,`badge badge-outline badge-sm`),f(t,s(`children 一样会透传`)),e});p(()=>{let e=_(d,{is:ie(),title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component('RegisteredMetric', RegisteredMetric) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:Se});m(()=>g(e,be,xe))});let Y=u(`div`,J);f(J,Y),r(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=u(`div`,Y);f(Y,X),f(X,s(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Ce=o(X);f(X,Ce),n(Ce,` `),f(X,s(` `));let we=o(X);f(X,we),n(we,`<Component>`),f(X,s(`。`));let Te=u(`div`,Y);f(Y,Te),f(Te,s(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Ee=u(`div`,Y);f(Y,Ee),f(Ee,s(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=u(`div`,D);f(D,Z),t(Z,`role`,`alert`),r(Z,`alert alert-warning alert-soft`);let Q=u(`span`,Z);f(Z,Q),f(Q,s(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let De=o(Q);f(Q,De),n(De,` `),f(Q,s(` `));let Oe=o(Q);f(Q,Oe),n(Oe,`<Component>`),f(Q,s(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let ke=u(`div`,e);f(e,ke),p(()=>{r(ke,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`)});let Ae=u(`div`,ke);f(ke,Ae),r(Ae,`card bg-base-100 shadow overflow-auto`);let $=u(`div`,Ae);f(Ae,$),r($,`card-body p-0`);let je=i(`rue:component:anchor`);return f($,je),p(()=>{let e=_(ee,{className:`h-full`,lang:`tsx`,code:ne});m(()=>g(e,$,je))}),e})}),l,v),l})};export{re as default};
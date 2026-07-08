import{J as e,Q as t,Vt as n,Xt as r,Z as i,at as a,bt as o,dt as s,it as c,l,nt as u,o as d,on as f,pt as p,rt as m,t as h,tn as g,tt as _}from"./vapor-runtime-x7F5M-49.js";import{a as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as y}from"./useApp-l3GbGuGa.js";import{t as ee}from"./Code-BoXKy3gJ.js";import{r as b}from"./SidebarPlaygroundExample-BmbQ-Y7_.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=e=>l(r=>{let i=m(`article`,r);n(()=>{p(i,`rounded-box border p-4 shadow-sm ${x[e.tone??`primary`]}`)});let s=m(`div`,i);t(i,s),p(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let c=_(`rue:slot:anchor`);t(s,c),n(()=>{let t=e.title;g(()=>d(t,s,c))});let l=m(`div`,i);t(i,l),p(l,`mt-2 text-3xl font-semibold`);let u=a(l);t(l,u),n(()=>{o(u,e.value)});let f=m(`div`,i);t(i,f),p(f,`mt-1 text-sm opacity-75`);let h=_(`rue:slot:anchor`);t(f,h),n(()=>{let t=e.detail;g(()=>d(t,f,h))});let v=m(`div`,i);t(i,v),p(v,`mt-4`);let y=_(`rue:children:anchor`);return t(v,y),n(()=>{let t=e.children;g(()=>d(t,v,y))}),i}),C=e=>l(r=>{let i=m(`section`,r);p(i,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let a=m(`div`,i);t(i,a),p(a,`flex items-center justify-between gap-3`);let o=m(`div`,a);t(a,o);let s=m(`div`,o);t(o,s),p(s,`font-semibold`);let c=_(`rue:slot:anchor`);t(s,c),n(()=>{let t=e.title;g(()=>d(t,s,c))});let l=m(`div`,o);t(o,l),p(l,`text-sm opacity-75`);let u=_(`rue:slot:anchor`);t(l,u),n(()=>{let t=e.detail;g(()=>d(t,l,u))});let f=m(`span`,a);t(a,f),p(f,`status status-info status-lg`);let h=m(`div`,i);t(i,h),p(h,`mt-4`);let v=_(`rue:children:anchor`);return t(h,v),n(()=>{let t=e.children;g(()=>d(t,h,v))}),i}),w=e=>l(r=>{let i=m(`article`,r);p(i,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let s=m(`div`,i);t(i,s),p(s,`text-xs uppercase tracking-[0.22em] opacity-60`);let c=_(`rue:slot:anchor`);t(s,c),n(()=>{let t=e.title;g(()=>d(t,s,c))});let l=m(`div`,i);t(i,l),p(l,`mt-2 text-2xl font-semibold`);let u=a(l);t(l,u),n(()=>{o(u,e.value??`Registered`)});let f=m(`div`,i);t(i,f),p(f,`mt-1 text-sm opacity-75`);let h=_(`rue:slot:anchor`);t(f,h),n(()=>{let t=e.detail;g(()=>d(t,f,h))});let v=m(`div`,i);t(i,v),p(v,`mt-4`);let y=_(`rue:children:anchor`);return t(v,y),n(()=>{let t=e.children;g(()=>d(t,v,y))}),i}),T=e=>l(r=>{let i=m(`section`,r);p(i,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let a=m(`div`,i);t(i,a),p(a,`font-semibold`);let o=_(`rue:slot:anchor`);t(a,o),n(()=>{let t=e.title;g(()=>d(t,a,o))});let s=m(`div`,i);t(i,s),p(s,`mt-1 text-sm opacity-75`);let c=_(`rue:slot:anchor`);t(s,c),n(()=>{let t=e.detail;g(()=>d(t,s,c))});let l=m(`div`,i);t(i,l),p(l,`mt-4`);let u=_(`rue:children:anchor`);return t(l,u),n(()=>{let t=e.children;g(()=>d(t,l,u))}),i}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re,resolveRegistryType:ie}=v(`useSetup:0:0`,()=>f(()=>{E();let e=v(`ref:1:0`,()=>r(`preview`)),t=v(`ref:1:1`,()=>r(`native`)),n=v(`ref:1:2`,()=>r(`primary`)),i=v(`ref:1:3`,()=>r(`metric`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:i,resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`},resolveRegistryType:()=>i.value===`metric`?`RegisteredMetric`:`RegisteredNotice`}}));return l(r=>{let f=u(),v=_(`rue:component:anchor`);return t(f,v),d(h(b,{children:l(()=>{let r=u(),f=m(`h1`,r);t(r,f),p(f,`text-5xl font-semibold mb-4 md:mb-4`),t(f,c(`动态组件（Component）`));let v=m(`div`,r);t(r,v),s(v,`role`,`tablist`),p(v,`tabs tabs-box`);let b=m(`button`,v);t(v,b),s(b,`role`,`tab`),n(()=>{p(b,`tab ${y.value===`preview`?`tab-active`:``}`)}),i(b,`click`,()=>{y.value=`preview`}),t(b,c(`效果`));let S=m(`button`,v);t(v,S),s(S,`role`,`tab`),n(()=>{p(S,`tab ${y.value===`code`?`tab-active`:``}`)}),i(S,`click`,()=>{y.value=`code`}),t(S,c(`代码`));let C=m(`div`,r);t(r,C),n(()=>{p(C,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`)});let E=m(`div`,C);t(C,E),p(E,`card bg-base-100 shadow`);let D=m(`div`,E);t(E,D),p(D,`card-body gap-6`);let O=m(`section`,D);t(D,O),p(O,`space-y-3`);let k=m(`div`,O);t(O,k),p(k,`flex flex-wrap items-center justify-between gap-3`);let A=m(`div`,k);t(k,A);let ae=m(`h2`,A);t(A,ae),p(ae,`text-xl font-semibold`),t(ae,c(`1. 直接切换原生标签和组件定义`));let j=m(`p`,A);t(A,j),p(j,`text-sm opacity-75`),t(j,c(`这里显式导入并使用 `));let oe=a(j);t(j,oe),o(oe,`<Component>`),t(j,c(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=m(`div`,k);t(k,M),p(M,`flex flex-wrap gap-3`);let N=m(`div`,M);t(M,N),p(N,`join`);let P=m(`button`,N);t(N,P),n(()=>{p(P,`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`)}),i(P,`click`,()=>{x.value=`native`}),t(P,c(`原生 article`));let F=m(`button`,N);t(N,F),n(()=>{p(F,`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`)}),i(F,`click`,()=>{x.value=`card`}),t(F,c(`SalesCard`));let se=m(`button`,N);t(N,se),n(()=>{p(se,`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`)}),i(se,`click`,()=>{x.value=`notice`}),t(se,c(`StatusStrip`));let I=m(`div`,M);t(M,I),p(I,`join`);let ce=m(`button`,I);t(I,ce),n(()=>{p(ce,`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`)}),i(ce,`click`,()=>{w.value=`primary`}),t(ce,c(`primary`));let le=m(`button`,I);t(I,le),n(()=>{p(le,`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`)}),i(le,`click`,()=>{w.value=`accent`}),t(le,c(`accent`));let L=m(`div`,O);t(O,L),p(L,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let R=m(`div`,L);t(L,R),p(R,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let ue=_(`rue:component:anchor`);t(R,ue);let de=l(()=>{let e=u(),n=m(`span`,e);return t(e,n),p(n,`badge badge-outline badge-sm`),t(n,c(`children 已透传`)),e});n(()=>{let t=h(e,{is:te(),...re(),children:de});g(()=>d(t,R,ue))});let z=m(`div`,L);t(L,z),p(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=m(`div`,z);t(z,B);let fe=m(`strong`,B);t(B,fe),t(fe,c(`当前 is`)),t(B,c(`： `));let pe=a(B);t(B,pe),n(()=>{o(pe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=m(`div`,z);t(z,V);let me=m(`strong`,V);t(V,me),t(me,c(`验证点`)),t(V,c(`：native element、直接组件定义、children 透传。`));let H=m(`div`,z);t(z,H);let he=m(`strong`,H);t(H,he),t(he,c(`说明`)),t(H,c(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=m(`section`,D);t(D,U),p(U,`space-y-3`);let W=m(`div`,U);t(U,W),p(W,`flex flex-wrap items-center justify-between gap-3`);let G=m(`div`,W);t(W,G);let ge=m(`h2`,G);t(G,ge),p(ge,`text-xl font-semibold`),t(ge,c(`2. 运行时注册字符串组件名`));let K=m(`p`,G);t(G,K),p(K,`text-sm opacity-75`),t(K,c(`下面这个小区域直接在当前页面里使用导出的 `));let _e=a(K);t(K,_e),o(_e,`<Component>`),t(K,c(`，并通过 useApp().component('RegisteredMetric', RegisteredMetric) 把字符串名注册到当前 runtime。`));let q=m(`div`,W);t(W,q),p(q,`join`);let ve=m(`button`,q);t(q,ve),n(()=>{p(ve,`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`)}),i(ve,`click`,()=>{T.value=`metric`}),t(ve,c(`RegisteredMetric`));let ye=m(`button`,q);t(q,ye),n(()=>{p(ye,`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`)}),i(ye,`click`,()=>{T.value=`notice`}),t(ye,c(`RegisteredNotice`));let J=m(`div`,U);t(U,J),p(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let be=m(`div`,J);t(J,be),p(be,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let xe=_(`rue:component:anchor`);t(be,xe);let Se=l(()=>{let e=u(),n=m(`span`,e);return t(e,n),p(n,`badge badge-outline badge-sm`),t(n,c(`children 一样会透传`)),e});n(()=>{let t=h(e,{is:ie(),title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component('RegisteredMetric', RegisteredMetric) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:Se});g(()=>d(t,be,xe))});let Y=m(`div`,J);t(J,Y),p(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=m(`div`,Y);t(Y,X),t(X,c(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Ce=a(X);t(X,Ce),o(Ce,` `),t(X,c(` `));let we=a(X);t(X,we),o(we,`<Component>`),t(X,c(`。`));let Te=m(`div`,Y);t(Y,Te),t(Te,c(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Ee=m(`div`,Y);t(Y,Ee),t(Ee,c(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=m(`div`,D);t(D,Z),s(Z,`role`,`alert`),p(Z,`alert alert-warning alert-soft`);let Q=m(`span`,Z);t(Z,Q),t(Q,c(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let De=a(Q);t(Q,De),o(De,` `),t(Q,c(` `));let Oe=a(Q);t(Q,Oe),o(Oe,`<Component>`),t(Q,c(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let ke=m(`div`,r);t(r,ke),n(()=>{p(ke,`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`)});let Ae=m(`div`,ke);t(ke,Ae),p(Ae,`card bg-base-100 shadow overflow-auto`);let $=m(`div`,Ae);t(Ae,$),p($,`card-body p-0`);let je=_(`rue:component:anchor`);return t($,je),n(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:ne});g(()=>d(e,$,je))}),r})}),f,v),f})};export{re as default};
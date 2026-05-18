import{$ as e,F as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,d as u,dt as d,ht as f,l as p,st as m,t as h,vt as g,z as _}from"./vapor-runtime-BuwLbCGk.js";import{a as v}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as y}from"./useApp-CW-ygs8x.js";import{t as ee}from"./Code-DQxnq0in.js";import{t as b}from"./SidebarPlaygroundExample-BwOo72z2.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=e=>u(n=>{let a=i(`article`,n);g(()=>{r(a,String(`rounded-box border p-4 shadow-sm ${x[e.tone??`primary`]}`))});let c=i(`div`,a);o(a,c),r(c,`text-xs uppercase tracking-[0.22em] opacity-60`);let l=t(`rue:slot:anchor`);o(c,l),g(()=>{let t=e.title;d(()=>p(t,c,l))});let u=i(`div`,a);o(a,u),r(u,`mt-2 text-3xl font-semibold`);let f=_(u);o(u,f),g(()=>{s(f,e.value)});let m=i(`div`,a);o(a,m),r(m,`mt-1 text-sm opacity-75`);let h=t(`rue:slot:anchor`);o(m,h),g(()=>{let t=e.detail;d(()=>p(t,m,h))});let v=i(`div`,a);o(a,v),r(v,`mt-4`);let y=t(`rue:children:anchor`);return o(v,y),g(()=>{let t=e.children;d(()=>p(t,v,y))}),a}),C=e=>u(n=>{let a=i(`section`,n);r(a,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let s=i(`div`,a);o(a,s),r(s,`flex items-center justify-between gap-3`);let c=i(`div`,s);o(s,c);let l=i(`div`,c);o(c,l),r(l,`font-semibold`);let u=t(`rue:slot:anchor`);o(l,u),g(()=>{let t=e.title;d(()=>p(t,l,u))});let f=i(`div`,c);o(c,f),r(f,`text-sm opacity-75`);let m=t(`rue:slot:anchor`);o(f,m),g(()=>{let t=e.detail;d(()=>p(t,f,m))});let h=i(`span`,s);o(s,h),r(h,`status status-info status-lg`);let _=i(`div`,a);o(a,_),r(_,`mt-4`);let v=t(`rue:children:anchor`);return o(_,v),g(()=>{let t=e.children;d(()=>p(t,_,v))}),a}),w=e=>u(n=>{let a=i(`article`,n);r(a,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let c=i(`div`,a);o(a,c),r(c,`text-xs uppercase tracking-[0.22em] opacity-60`);let l=t(`rue:slot:anchor`);o(c,l),g(()=>{let t=e.title;d(()=>p(t,c,l))});let u=i(`div`,a);o(a,u),r(u,`mt-2 text-2xl font-semibold`);let f=_(u);o(u,f),g(()=>{s(f,e.value??`Registered`)});let m=i(`div`,a);o(a,m),r(m,`mt-1 text-sm opacity-75`);let h=t(`rue:slot:anchor`);o(m,h),g(()=>{let t=e.detail;d(()=>p(t,m,h))});let v=i(`div`,a);o(a,v),r(v,`mt-4`);let y=t(`rue:children:anchor`);return o(v,y),g(()=>{let t=e.children;d(()=>p(t,v,y))}),a}),T=e=>u(n=>{let a=i(`section`,n);r(a,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let s=i(`div`,a);o(a,s),r(s,`font-semibold`);let c=t(`rue:slot:anchor`);o(s,c),g(()=>{let t=e.title;d(()=>p(t,s,c))});let l=i(`div`,a);o(a,l),r(l,`mt-1 text-sm opacity-75`);let u=t(`rue:slot:anchor`);o(l,u),g(()=>{let t=e.detail;d(()=>p(t,l,u))});let f=i(`div`,a);o(a,f),r(f,`mt-4`);let m=t(`rue:children:anchor`);return o(f,m),g(()=>{let t=e.children;d(()=>p(t,f,m))}),a}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>f(()=>{E();let e=v(`ref:1:0`,()=>m(`preview`)),t=v(`ref:1:1`,()=>m(`native`)),n=v(`ref:1:2`,()=>m(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:v(`ref:1:3`,()=>m(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return u(f=>{let m=n(),v=t(`rue:component:anchor`);return o(m,v),p(h(b,{children:u(()=>{let f=n(),m=i(`h1`,f);o(f,m),r(m,`text-5xl font-semibold mb-4 md:mb-4`),o(m,c(`动态组件（Component）`));let v=i(`div`,f);o(f,v),l(v,`role`,`tablist`),r(v,`tabs tabs-box`);let b=i(`button`,v);o(v,b),l(b,`role`,`tab`),g(()=>{r(b,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),a(b,`click`,()=>{y.value=`preview`}),o(b,c(`效果`));let S=i(`button`,v);o(v,S),l(S,`role`,`tab`),g(()=>{r(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),a(S,`click`,()=>{y.value=`code`}),o(S,c(`代码`));let C=i(`div`,f);o(f,C),g(()=>{r(C,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`))});let E=i(`div`,C);o(C,E),r(E,`card bg-base-100 shadow`);let D=i(`div`,E);o(E,D),r(D,`card-body gap-6`);let O=i(`section`,D);o(D,O),r(O,`space-y-3`);let k=i(`div`,O);o(O,k),r(k,`flex flex-wrap items-center justify-between gap-3`);let A=i(`div`,k);o(k,A);let ie=i(`h2`,A);o(A,ie),r(ie,`text-xl font-semibold`),o(ie,c(`1. 直接切换原生标签和组件定义`));let j=i(`p`,A);o(A,j),r(j,`text-sm opacity-75`),o(j,c(`这里显式导入并使用 `));let ae=_(j);o(j,ae),s(ae,`<Component>`),o(j,c(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=i(`div`,k);o(k,M),r(M,`flex flex-wrap gap-3`);let N=i(`div`,M);o(M,N),r(N,`join`);let P=i(`button`,N);o(N,P),g(()=>{r(P,String(`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`))}),a(P,`click`,()=>{x.value=`native`}),o(P,c(`原生 article`));let F=i(`button`,N);o(N,F),g(()=>{r(F,String(`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`))}),a(F,`click`,()=>{x.value=`card`}),o(F,c(`SalesCard`));let oe=i(`button`,N);o(N,oe),g(()=>{r(oe,String(`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`))}),a(oe,`click`,()=>{x.value=`notice`}),o(oe,c(`StatusStrip`));let I=i(`div`,M);o(M,I),r(I,`join`);let L=i(`button`,I);o(I,L),g(()=>{r(L,String(`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`))}),a(L,`click`,()=>{w.value=`primary`}),o(L,c(`primary`));let se=i(`button`,I);o(I,se),g(()=>{r(se,String(`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`))}),a(se,`click`,()=>{w.value=`accent`}),o(se,c(`accent`));let R=i(`div`,O);o(O,R),r(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=i(`div`,R);o(R,ce),r(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=t(`rue:component:anchor`);o(ce,le);let ue=u(()=>{let e=n(),t=i(`span`,e);return o(e,t),r(t,`badge badge-outline badge-sm`),o(t,c(`children 已透传`)),e});g(()=>{let t=h(e,{is:te(),...re(),children:ue});d(()=>p(t,ce,le))});let z=i(`div`,R);o(R,z),r(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=i(`div`,z);o(z,B);let de=i(`strong`,B);o(B,de),o(de,c(`当前 is`)),o(B,c(`： `));let fe=_(B);o(B,fe),g(()=>{s(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=i(`div`,z);o(z,V);let pe=i(`strong`,V);o(V,pe),o(pe,c(`验证点`)),o(V,c(`：native element、直接组件定义、children 透传。`));let H=i(`div`,z);o(z,H);let me=i(`strong`,H);o(H,me),o(me,c(`说明`)),o(H,c(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=i(`section`,D);o(D,U),r(U,`space-y-3`);let W=i(`div`,U);o(U,W),r(W,`flex flex-wrap items-center justify-between gap-3`);let G=i(`div`,W);o(W,G);let he=i(`h2`,G);o(G,he),r(he,`text-xl font-semibold`),o(he,c(`2. 运行时注册字符串组件名`));let K=i(`p`,G);o(G,K),r(K,`text-sm opacity-75`),o(K,c(`下面这个小区域直接在当前页面里使用导出的 `));let ge=_(K);o(K,ge),s(ge,`<Component>`),o(K,c(`，并通过 useApp().component(...) 把字符串名注册到当前 runtime。`));let q=i(`div`,W);o(W,q),r(q,`join`);let _e=i(`button`,q);o(q,_e),g(()=>{r(_e,String(`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`))}),a(_e,`click`,()=>{T.value=`metric`}),o(_e,c(`RegisteredMetric`));let ve=i(`button`,q);o(q,ve),g(()=>{r(ve,String(`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`))}),a(ve,`click`,()=>{T.value=`notice`}),o(ve,c(`RegisteredNotice`));let J=i(`div`,U);o(U,J),r(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=i(`div`,J);o(J,ye),r(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=t(`rue:component:anchor`);o(ye,be);let xe=u(()=>{let e=n(),t=i(`span`,e);return o(e,t),r(t,`badge badge-outline badge-sm`),o(t,c(`children 一样会透传`)),e});g(()=>{let t=h(e,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component(...) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});d(()=>p(t,ye,be))});let Y=i(`div`,J);o(J,Y),r(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=i(`div`,Y);o(Y,X),o(X,c(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=_(X);o(X,Se),s(Se,` `),o(X,c(` `));let Ce=_(X);o(X,Ce),s(Ce,`<Component>`),o(X,c(`。`));let we=i(`div`,Y);o(Y,we),o(we,c(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=i(`div`,Y);o(Y,Te),o(Te,c(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=i(`div`,D);o(D,Z),l(Z,`role`,`alert`),r(Z,`alert alert-warning alert-soft`);let Q=i(`span`,Z);o(Z,Q),o(Q,c(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=_(Q);o(Q,Ee),s(Ee,` `),o(Q,c(` `));let De=_(Q);o(Q,De),s(De,`<Component>`),o(Q,c(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=i(`div`,f);o(f,Oe),g(()=>{r(Oe,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`))});let ke=i(`div`,Oe);o(Oe,ke),r(ke,`card bg-base-100 shadow overflow-auto`);let $=i(`div`,ke);o(ke,$),r($,`card-body p-0`);let Ae=t(`rue:component:anchor`);return o($,Ae),g(()=>{let e=h(ee,{className:`h-full`,lang:`tsx`,code:ne});d(()=>p(e,$,Ae))}),f})}),m,v),m})};export{re as default};
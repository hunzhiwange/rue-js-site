import{$ as e,G as t,J as n,Kt as r,Lt as i,Q as a,Vt as o,Y as s,Yt as c,Z as l,ct as u,et as d,l as f,mt as p,ot as m,s as h,t as g,tt as _}from"./vapor-runtime-DHPuOjqh.js";import{a as v}from"./vapor-helpers-vapor-CJFAWine.js";import{t as y}from"./useApp-BLya-Jm6.js";import{t as ee}from"./Code-Ds9lKLk6.js";import{t as b}from"./SidebarPlaygroundExample-KML-rOvA.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=t=>f(n=>{let r=e(`article`,n);c(()=>{u(r,String(`rounded-box border p-4 shadow-sm ${x[t.tone??`primary`]}`))});let i=e(`div`,r);s(r,i),u(i,`text-xs uppercase tracking-[0.22em] opacity-60`);let a=l(`rue:slot:anchor`);s(i,a),c(()=>{let e=t.title;o(()=>h(e,i,a))});let d=e(`div`,r);s(r,d),u(d,`mt-2 text-3xl font-semibold`);let f=_(d);s(d,f),c(()=>{p(f,t.value)});let m=e(`div`,r);s(r,m),u(m,`mt-1 text-sm opacity-75`);let g=l(`rue:slot:anchor`);s(m,g),c(()=>{let e=t.detail;o(()=>h(e,m,g))});let v=e(`div`,r);s(r,v),u(v,`mt-4`);let y=l(`rue:children:anchor`);return s(v,y),c(()=>{let e=t.children;o(()=>h(e,v,y))}),r}),C=t=>f(n=>{let r=e(`section`,n);u(r,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let i=e(`div`,r);s(r,i),u(i,`flex items-center justify-between gap-3`);let a=e(`div`,i);s(i,a);let d=e(`div`,a);s(a,d),u(d,`font-semibold`);let f=l(`rue:slot:anchor`);s(d,f),c(()=>{let e=t.title;o(()=>h(e,d,f))});let p=e(`div`,a);s(a,p),u(p,`text-sm opacity-75`);let m=l(`rue:slot:anchor`);s(p,m),c(()=>{let e=t.detail;o(()=>h(e,p,m))});let g=e(`span`,i);s(i,g),u(g,`status status-info status-lg`);let _=e(`div`,r);s(r,_),u(_,`mt-4`);let v=l(`rue:children:anchor`);return s(_,v),c(()=>{let e=t.children;o(()=>h(e,_,v))}),r}),w=t=>f(n=>{let r=e(`article`,n);u(r,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let i=e(`div`,r);s(r,i),u(i,`text-xs uppercase tracking-[0.22em] opacity-60`);let a=l(`rue:slot:anchor`);s(i,a),c(()=>{let e=t.title;o(()=>h(e,i,a))});let d=e(`div`,r);s(r,d),u(d,`mt-2 text-2xl font-semibold`);let f=_(d);s(d,f),c(()=>{p(f,t.value??`Registered`)});let m=e(`div`,r);s(r,m),u(m,`mt-1 text-sm opacity-75`);let g=l(`rue:slot:anchor`);s(m,g),c(()=>{let e=t.detail;o(()=>h(e,m,g))});let v=e(`div`,r);s(r,v),u(v,`mt-4`);let y=l(`rue:children:anchor`);return s(v,y),c(()=>{let e=t.children;o(()=>h(e,v,y))}),r}),T=t=>f(n=>{let r=e(`section`,n);u(r,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let i=e(`div`,r);s(r,i),u(i,`font-semibold`);let a=l(`rue:slot:anchor`);s(i,a),c(()=>{let e=t.title;o(()=>h(e,i,a))});let d=e(`div`,r);s(r,d),u(d,`mt-1 text-sm opacity-75`);let f=l(`rue:slot:anchor`);s(d,f),c(()=>{let e=t.detail;o(()=>h(e,d,f))});let p=e(`div`,r);s(r,p),u(p,`mt-4`);let m=l(`rue:children:anchor`);return s(p,m),c(()=>{let e=t.children;o(()=>h(e,p,m))}),r}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>r(()=>{E();let e=v(`ref:1:0`,()=>i(`preview`)),t=v(`ref:1:1`,()=>i(`native`)),n=v(`ref:1:2`,()=>i(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:v(`ref:1:3`,()=>i(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return f(r=>{let i=a(),v=l(`rue:component:anchor`);return s(i,v),h(g(b,{children:f(()=>{let r=a(),i=e(`h1`,r);s(r,i),u(i,`text-5xl font-semibold mb-4 md:mb-4`),s(i,d(`动态组件（Component）`));let v=e(`div`,r);s(r,v),m(v,`role`,`tablist`),u(v,`tabs tabs-box`);let b=e(`button`,v);s(v,b),m(b,`role`,`tab`),c(()=>{u(b,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),n(b,`click`,()=>{y.value=`preview`}),s(b,d(`效果`));let S=e(`button`,v);s(v,S),m(S,`role`,`tab`),c(()=>{u(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),n(S,`click`,()=>{y.value=`code`}),s(S,d(`代码`));let C=e(`div`,r);s(r,C),c(()=>{u(C,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`))});let E=e(`div`,C);s(C,E),u(E,`card bg-base-100 shadow`);let D=e(`div`,E);s(E,D),u(D,`card-body gap-6`);let O=e(`section`,D);s(D,O),u(O,`space-y-3`);let k=e(`div`,O);s(O,k),u(k,`flex flex-wrap items-center justify-between gap-3`);let A=e(`div`,k);s(k,A);let ie=e(`h2`,A);s(A,ie),u(ie,`text-xl font-semibold`),s(ie,d(`1. 直接切换原生标签和组件定义`));let j=e(`p`,A);s(A,j),u(j,`text-sm opacity-75`),s(j,d(`这里显式导入并使用 `));let ae=_(j);s(j,ae),p(ae,`<Component>`),s(j,d(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=e(`div`,k);s(k,M),u(M,`flex flex-wrap gap-3`);let N=e(`div`,M);s(M,N),u(N,`join`);let P=e(`button`,N);s(N,P),c(()=>{u(P,String(`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`))}),n(P,`click`,()=>{x.value=`native`}),s(P,d(`原生 article`));let F=e(`button`,N);s(N,F),c(()=>{u(F,String(`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`))}),n(F,`click`,()=>{x.value=`card`}),s(F,d(`SalesCard`));let oe=e(`button`,N);s(N,oe),c(()=>{u(oe,String(`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`))}),n(oe,`click`,()=>{x.value=`notice`}),s(oe,d(`StatusStrip`));let I=e(`div`,M);s(M,I),u(I,`join`);let L=e(`button`,I);s(I,L),c(()=>{u(L,String(`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`))}),n(L,`click`,()=>{w.value=`primary`}),s(L,d(`primary`));let se=e(`button`,I);s(I,se),c(()=>{u(se,String(`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`))}),n(se,`click`,()=>{w.value=`accent`}),s(se,d(`accent`));let R=e(`div`,O);s(O,R),u(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=e(`div`,R);s(R,ce),u(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=l(`rue:component:anchor`);s(ce,le);let ue=f(()=>{let t=a(),n=e(`span`,t);return s(t,n),u(n,`badge badge-outline badge-sm`),s(n,d(`children 已透传`)),t});c(()=>{let e=g(t,{is:te(),...re(),children:ue});o(()=>h(e,ce,le))});let z=e(`div`,R);s(R,z),u(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=e(`div`,z);s(z,B);let de=e(`strong`,B);s(B,de),s(de,d(`当前 is`)),s(B,d(`： `));let fe=_(B);s(B,fe),c(()=>{p(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=e(`div`,z);s(z,V);let pe=e(`strong`,V);s(V,pe),s(pe,d(`验证点`)),s(V,d(`：native element、直接组件定义、children 透传。`));let H=e(`div`,z);s(z,H);let me=e(`strong`,H);s(H,me),s(me,d(`说明`)),s(H,d(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=e(`section`,D);s(D,U),u(U,`space-y-3`);let W=e(`div`,U);s(U,W),u(W,`flex flex-wrap items-center justify-between gap-3`);let G=e(`div`,W);s(W,G);let he=e(`h2`,G);s(G,he),u(he,`text-xl font-semibold`),s(he,d(`2. 运行时注册字符串组件名`));let K=e(`p`,G);s(G,K),u(K,`text-sm opacity-75`),s(K,d(`下面这个小区域直接在当前页面里使用导出的 `));let ge=_(K);s(K,ge),p(ge,`<Component>`),s(K,d(`，并通过 useApp().component(...) 把字符串名注册到当前 runtime。`));let q=e(`div`,W);s(W,q),u(q,`join`);let _e=e(`button`,q);s(q,_e),c(()=>{u(_e,String(`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`))}),n(_e,`click`,()=>{T.value=`metric`}),s(_e,d(`RegisteredMetric`));let ve=e(`button`,q);s(q,ve),c(()=>{u(ve,String(`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`))}),n(ve,`click`,()=>{T.value=`notice`}),s(ve,d(`RegisteredNotice`));let J=e(`div`,U);s(U,J),u(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=e(`div`,J);s(J,ye),u(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=l(`rue:component:anchor`);s(ye,be);let xe=f(()=>{let t=a(),n=e(`span`,t);return s(t,n),u(n,`badge badge-outline badge-sm`),s(n,d(`children 一样会透传`)),t});c(()=>{let e=g(t,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component(...) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});o(()=>h(e,ye,be))});let Y=e(`div`,J);s(J,Y),u(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=e(`div`,Y);s(Y,X),s(X,d(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=_(X);s(X,Se),p(Se,` `),s(X,d(` `));let Ce=_(X);s(X,Ce),p(Ce,`<Component>`),s(X,d(`。`));let we=e(`div`,Y);s(Y,we),s(we,d(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=e(`div`,Y);s(Y,Te),s(Te,d(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=e(`div`,D);s(D,Z),m(Z,`role`,`alert`),u(Z,`alert alert-warning alert-soft`);let Q=e(`span`,Z);s(Z,Q),s(Q,d(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=_(Q);s(Q,Ee),p(Ee,` `),s(Q,d(` `));let De=_(Q);s(Q,De),p(De,`<Component>`),s(Q,d(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=e(`div`,r);s(r,Oe),c(()=>{u(Oe,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`))});let ke=e(`div`,Oe);s(Oe,ke),u(ke,`card bg-base-100 shadow overflow-auto`);let $=e(`div`,ke);s(ke,$),u($,`card-body p-0`);let Ae=l(`rue:component:anchor`);return s($,Ae),c(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:ne});o(()=>h(e,$,Ae))}),r})}),i,v),i})};export{re as default};
import{$ as e,G as t,Ht as n,J as r,Q as i,Rt as a,Xt as o,Y as s,Z as c,ct as l,et as u,l as d,mt as f,ot as p,qt as m,s as h,t as g,tt as _}from"./vapor-runtime-aZAg0Qkw.js";import{a as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{t as y}from"./useApp-CekQX5Ln.js";import{t as ee}from"./Code-5DOEyGxf.js";import{r as b}from"./SidebarPlaygroundExample-cASgDpH3.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=t=>d(r=>{let i=e(`article`,r);o(()=>{l(i,String(`rounded-box border p-4 shadow-sm ${x[t.tone??`primary`]}`))});let a=e(`div`,i);s(i,a),l(a,`text-xs uppercase tracking-[0.22em] opacity-60`);let u=c(`rue:slot:anchor`);s(a,u),o(()=>{let e=t.title;n(()=>h(e,a,u))});let d=e(`div`,i);s(i,d),l(d,`mt-2 text-3xl font-semibold`);let p=_(d);s(d,p),o(()=>{f(p,t.value)});let m=e(`div`,i);s(i,m),l(m,`mt-1 text-sm opacity-75`);let g=c(`rue:slot:anchor`);s(m,g),o(()=>{let e=t.detail;n(()=>h(e,m,g))});let v=e(`div`,i);s(i,v),l(v,`mt-4`);let y=c(`rue:children:anchor`);return s(v,y),o(()=>{let e=t.children;n(()=>h(e,v,y))}),i}),C=t=>d(r=>{let i=e(`section`,r);l(i,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let a=e(`div`,i);s(i,a),l(a,`flex items-center justify-between gap-3`);let u=e(`div`,a);s(a,u);let d=e(`div`,u);s(u,d),l(d,`font-semibold`);let f=c(`rue:slot:anchor`);s(d,f),o(()=>{let e=t.title;n(()=>h(e,d,f))});let p=e(`div`,u);s(u,p),l(p,`text-sm opacity-75`);let m=c(`rue:slot:anchor`);s(p,m),o(()=>{let e=t.detail;n(()=>h(e,p,m))});let g=e(`span`,a);s(a,g),l(g,`status status-info status-lg`);let _=e(`div`,i);s(i,_),l(_,`mt-4`);let v=c(`rue:children:anchor`);return s(_,v),o(()=>{let e=t.children;n(()=>h(e,_,v))}),i}),w=t=>d(r=>{let i=e(`article`,r);l(i,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let a=e(`div`,i);s(i,a),l(a,`text-xs uppercase tracking-[0.22em] opacity-60`);let u=c(`rue:slot:anchor`);s(a,u),o(()=>{let e=t.title;n(()=>h(e,a,u))});let d=e(`div`,i);s(i,d),l(d,`mt-2 text-2xl font-semibold`);let p=_(d);s(d,p),o(()=>{f(p,t.value??`Registered`)});let m=e(`div`,i);s(i,m),l(m,`mt-1 text-sm opacity-75`);let g=c(`rue:slot:anchor`);s(m,g),o(()=>{let e=t.detail;n(()=>h(e,m,g))});let v=e(`div`,i);s(i,v),l(v,`mt-4`);let y=c(`rue:children:anchor`);return s(v,y),o(()=>{let e=t.children;n(()=>h(e,v,y))}),i}),T=t=>d(r=>{let i=e(`section`,r);l(i,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let a=e(`div`,i);s(i,a),l(a,`font-semibold`);let u=c(`rue:slot:anchor`);s(a,u),o(()=>{let e=t.title;n(()=>h(e,a,u))});let d=e(`div`,i);s(i,d),l(d,`mt-1 text-sm opacity-75`);let f=c(`rue:slot:anchor`);s(d,f),o(()=>{let e=t.detail;n(()=>h(e,d,f))});let p=e(`div`,i);s(i,p),l(p,`mt-4`);let m=c(`rue:children:anchor`);return s(p,m),o(()=>{let e=t.children;n(()=>h(e,p,m))}),i}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>m(()=>{E();let e=v(`ref:1:0`,()=>a(`preview`)),t=v(`ref:1:1`,()=>a(`native`)),n=v(`ref:1:2`,()=>a(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:v(`ref:1:3`,()=>a(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return d(a=>{let m=i(),v=c(`rue:component:anchor`);return s(m,v),h(g(b,{children:d(()=>{let a=i(),m=e(`h1`,a);s(a,m),l(m,`text-5xl font-semibold mb-4 md:mb-4`),s(m,u(`动态组件（Component）`));let v=e(`div`,a);s(a,v),p(v,`role`,`tablist`),l(v,`tabs tabs-box`);let b=e(`button`,v);s(v,b),p(b,`role`,`tab`),o(()=>{l(b,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),r(b,`click`,()=>{y.value=`preview`}),s(b,u(`效果`));let S=e(`button`,v);s(v,S),p(S,`role`,`tab`),o(()=>{l(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),r(S,`click`,()=>{y.value=`code`}),s(S,u(`代码`));let C=e(`div`,a);s(a,C),o(()=>{l(C,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`))});let E=e(`div`,C);s(C,E),l(E,`card bg-base-100 shadow`);let D=e(`div`,E);s(E,D),l(D,`card-body gap-6`);let O=e(`section`,D);s(D,O),l(O,`space-y-3`);let k=e(`div`,O);s(O,k),l(k,`flex flex-wrap items-center justify-between gap-3`);let A=e(`div`,k);s(k,A);let ie=e(`h2`,A);s(A,ie),l(ie,`text-xl font-semibold`),s(ie,u(`1. 直接切换原生标签和组件定义`));let j=e(`p`,A);s(A,j),l(j,`text-sm opacity-75`),s(j,u(`这里显式导入并使用 `));let ae=_(j);s(j,ae),f(ae,`<Component>`),s(j,u(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=e(`div`,k);s(k,M),l(M,`flex flex-wrap gap-3`);let N=e(`div`,M);s(M,N),l(N,`join`);let P=e(`button`,N);s(N,P),o(()=>{l(P,String(`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`))}),r(P,`click`,()=>{x.value=`native`}),s(P,u(`原生 article`));let F=e(`button`,N);s(N,F),o(()=>{l(F,String(`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`))}),r(F,`click`,()=>{x.value=`card`}),s(F,u(`SalesCard`));let oe=e(`button`,N);s(N,oe),o(()=>{l(oe,String(`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`))}),r(oe,`click`,()=>{x.value=`notice`}),s(oe,u(`StatusStrip`));let I=e(`div`,M);s(M,I),l(I,`join`);let L=e(`button`,I);s(I,L),o(()=>{l(L,String(`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`))}),r(L,`click`,()=>{w.value=`primary`}),s(L,u(`primary`));let se=e(`button`,I);s(I,se),o(()=>{l(se,String(`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`))}),r(se,`click`,()=>{w.value=`accent`}),s(se,u(`accent`));let R=e(`div`,O);s(O,R),l(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=e(`div`,R);s(R,ce),l(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=c(`rue:component:anchor`);s(ce,le);let ue=d(()=>{let t=i(),n=e(`span`,t);return s(t,n),l(n,`badge badge-outline badge-sm`),s(n,u(`children 已透传`)),t});o(()=>{let e=g(t,{is:te(),...re(),children:ue});n(()=>h(e,ce,le))});let z=e(`div`,R);s(R,z),l(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=e(`div`,z);s(z,B);let de=e(`strong`,B);s(B,de),s(de,u(`当前 is`)),s(B,u(`： `));let fe=_(B);s(B,fe),o(()=>{f(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=e(`div`,z);s(z,V);let pe=e(`strong`,V);s(V,pe),s(pe,u(`验证点`)),s(V,u(`：native element、直接组件定义、children 透传。`));let H=e(`div`,z);s(z,H);let me=e(`strong`,H);s(H,me),s(me,u(`说明`)),s(H,u(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=e(`section`,D);s(D,U),l(U,`space-y-3`);let W=e(`div`,U);s(U,W),l(W,`flex flex-wrap items-center justify-between gap-3`);let G=e(`div`,W);s(W,G);let he=e(`h2`,G);s(G,he),l(he,`text-xl font-semibold`),s(he,u(`2. 运行时注册字符串组件名`));let K=e(`p`,G);s(G,K),l(K,`text-sm opacity-75`),s(K,u(`下面这个小区域直接在当前页面里使用导出的 `));let ge=_(K);s(K,ge),f(ge,`<Component>`),s(K,u(`，并通过 useApp().component(...) 把字符串名注册到当前 runtime。`));let q=e(`div`,W);s(W,q),l(q,`join`);let _e=e(`button`,q);s(q,_e),o(()=>{l(_e,String(`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`))}),r(_e,`click`,()=>{T.value=`metric`}),s(_e,u(`RegisteredMetric`));let ve=e(`button`,q);s(q,ve),o(()=>{l(ve,String(`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`))}),r(ve,`click`,()=>{T.value=`notice`}),s(ve,u(`RegisteredNotice`));let J=e(`div`,U);s(U,J),l(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=e(`div`,J);s(J,ye),l(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=c(`rue:component:anchor`);s(ye,be);let xe=d(()=>{let t=i(),n=e(`span`,t);return s(t,n),l(n,`badge badge-outline badge-sm`),s(n,u(`children 一样会透传`)),t});o(()=>{let e=g(t,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component(...) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});n(()=>h(e,ye,be))});let Y=e(`div`,J);s(J,Y),l(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=e(`div`,Y);s(Y,X),s(X,u(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=_(X);s(X,Se),f(Se,` `),s(X,u(` `));let Ce=_(X);s(X,Ce),f(Ce,`<Component>`),s(X,u(`。`));let we=e(`div`,Y);s(Y,we),s(we,u(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=e(`div`,Y);s(Y,Te),s(Te,u(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=e(`div`,D);s(D,Z),p(Z,`role`,`alert`),l(Z,`alert alert-warning alert-soft`);let Q=e(`span`,Z);s(Z,Q),s(Q,u(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=_(Q);s(Q,Ee),f(Ee,` `),s(Q,u(` `));let De=_(Q);s(Q,De),f(De,`<Component>`),s(Q,u(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=e(`div`,a);s(a,Oe),o(()=>{l(Oe,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`))});let ke=e(`div`,Oe);s(Oe,ke),l(ke,`card bg-base-100 shadow overflow-auto`);let $=e(`div`,ke);s(ke,$),l($,`card-body p-0`);let Ae=c(`rue:component:anchor`);return s($,Ae),o(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:ne});n(()=>h(e,$,Ae))}),a})}),m,v),m})};export{re as default};
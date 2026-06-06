import{$ as e,B as t,Dt as n,G as r,H as i,I as a,K as o,U as s,W as c,Z as l,at as u,ht as d,l as f,s as p,t as m,wt as h,yt as g,z as _}from"./vapor-runtime-C1rlwc61.js";import{a as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./useApp-BWfkBIU9.js";import{t as ee}from"./Code-BCLFq1E3.js";import{t as b}from"./SidebarPlaygroundExample-CdMvdgT7.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=r=>f(a=>{let s=c(`article`,a);n(()=>{e(s,String(`rounded-box border p-4 shadow-sm ${x[r.tone??`primary`]}`))});let l=c(`div`,s);t(s,l),e(l,`text-xs uppercase tracking-[0.22em] opacity-60`);let d=i(`rue:slot:anchor`);t(l,d),n(()=>{let e=r.title;g(()=>p(e,l,d))});let f=c(`div`,s);t(s,f),e(f,`mt-2 text-3xl font-semibold`);let m=o(f);t(f,m),n(()=>{u(m,r.value)});let h=c(`div`,s);t(s,h),e(h,`mt-1 text-sm opacity-75`);let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=r.detail;g(()=>p(e,h,_))});let v=c(`div`,s);t(s,v),e(v,`mt-4`);let y=i(`rue:children:anchor`);return t(v,y),n(()=>{let e=r.children;g(()=>p(e,v,y))}),s}),C=r=>f(a=>{let o=c(`section`,a);e(o,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let s=c(`div`,o);t(o,s),e(s,`flex items-center justify-between gap-3`);let l=c(`div`,s);t(s,l);let u=c(`div`,l);t(l,u),e(u,`font-semibold`);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let e=r.title;g(()=>p(e,u,d))});let f=c(`div`,l);t(l,f),e(f,`text-sm opacity-75`);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let e=r.detail;g(()=>p(e,f,m))});let h=c(`span`,s);t(s,h),e(h,`status status-info status-lg`);let _=c(`div`,o);t(o,_),e(_,`mt-4`);let v=i(`rue:children:anchor`);return t(_,v),n(()=>{let e=r.children;g(()=>p(e,_,v))}),o}),w=r=>f(a=>{let s=c(`article`,a);e(s,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let l=c(`div`,s);t(s,l),e(l,`text-xs uppercase tracking-[0.22em] opacity-60`);let d=i(`rue:slot:anchor`);t(l,d),n(()=>{let e=r.title;g(()=>p(e,l,d))});let f=c(`div`,s);t(s,f),e(f,`mt-2 text-2xl font-semibold`);let m=o(f);t(f,m),n(()=>{u(m,r.value??`Registered`)});let h=c(`div`,s);t(s,h),e(h,`mt-1 text-sm opacity-75`);let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=r.detail;g(()=>p(e,h,_))});let v=c(`div`,s);t(s,v),e(v,`mt-4`);let y=i(`rue:children:anchor`);return t(v,y),n(()=>{let e=r.children;g(()=>p(e,v,y))}),s}),T=r=>f(a=>{let o=c(`section`,a);e(o,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let s=c(`div`,o);t(o,s),e(s,`font-semibold`);let l=i(`rue:slot:anchor`);t(s,l),n(()=>{let e=r.title;g(()=>p(e,s,l))});let u=c(`div`,o);t(o,u),e(u,`mt-1 text-sm opacity-75`);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let e=r.detail;g(()=>p(e,u,d))});let f=c(`div`,o);t(o,f),e(f,`mt-4`);let m=i(`rue:children:anchor`);return t(f,m),n(()=>{let e=r.children;g(()=>p(e,f,m))}),o}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>h(()=>{E();let e=v(`ref:1:0`,()=>d(`preview`)),t=v(`ref:1:1`,()=>d(`native`)),n=v(`ref:1:2`,()=>d(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:v(`ref:1:3`,()=>d(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return f(d=>{let h=s(),v=i(`rue:component:anchor`);return t(h,v),p(m(b,{children:f(()=>{let d=s(),h=c(`h1`,d);t(d,h),e(h,`text-5xl font-semibold mb-4 md:mb-4`),t(h,r(`动态组件（Component）`));let v=c(`div`,d);t(d,v),l(v,`role`,`tablist`),e(v,`tabs tabs-box`);let b=c(`button`,v);t(v,b),l(b,`role`,`tab`),n(()=>{e(b,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),_(b,`click`,()=>{y.value=`preview`}),t(b,r(`效果`));let S=c(`button`,v);t(v,S),l(S,`role`,`tab`),n(()=>{e(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),_(S,`click`,()=>{y.value=`code`}),t(S,r(`代码`));let C=c(`div`,d);t(d,C),n(()=>{e(C,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`))});let E=c(`div`,C);t(C,E),e(E,`card bg-base-100 shadow`);let D=c(`div`,E);t(E,D),e(D,`card-body gap-6`);let O=c(`section`,D);t(D,O),e(O,`space-y-3`);let k=c(`div`,O);t(O,k),e(k,`flex flex-wrap items-center justify-between gap-3`);let A=c(`div`,k);t(k,A);let ie=c(`h2`,A);t(A,ie),e(ie,`text-xl font-semibold`),t(ie,r(`1. 直接切换原生标签和组件定义`));let j=c(`p`,A);t(A,j),e(j,`text-sm opacity-75`),t(j,r(`这里显式导入并使用 `));let ae=o(j);t(j,ae),u(ae,`<Component>`),t(j,r(`，is 可以在字符串标签名和函数组件之间来回切换。`));let M=c(`div`,k);t(k,M),e(M,`flex flex-wrap gap-3`);let N=c(`div`,M);t(M,N),e(N,`join`);let P=c(`button`,N);t(N,P),n(()=>{e(P,String(`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`))}),_(P,`click`,()=>{x.value=`native`}),t(P,r(`原生 article`));let F=c(`button`,N);t(N,F),n(()=>{e(F,String(`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`))}),_(F,`click`,()=>{x.value=`card`}),t(F,r(`SalesCard`));let oe=c(`button`,N);t(N,oe),n(()=>{e(oe,String(`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`))}),_(oe,`click`,()=>{x.value=`notice`}),t(oe,r(`StatusStrip`));let I=c(`div`,M);t(M,I),e(I,`join`);let L=c(`button`,I);t(I,L),n(()=>{e(L,String(`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`))}),_(L,`click`,()=>{w.value=`primary`}),t(L,r(`primary`));let se=c(`button`,I);t(I,se),n(()=>{e(se,String(`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`))}),_(se,`click`,()=>{w.value=`accent`}),t(se,r(`accent`));let R=c(`div`,O);t(O,R),e(R,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let ce=c(`div`,R);t(R,ce),e(ce,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let le=i(`rue:component:anchor`);t(ce,le);let ue=f(()=>{let n=s(),i=c(`span`,n);return t(n,i),e(i,`badge badge-outline badge-sm`),t(i,r(`children 已透传`)),n});n(()=>{let e=m(a,{is:te(),...re(),children:ue});g(()=>p(e,ce,le))});let z=c(`div`,R);t(R,z),e(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=c(`div`,z);t(z,B);let de=c(`strong`,B);t(B,de),t(de,r(`当前 is`)),t(B,r(`： `));let fe=o(B);t(B,fe),n(()=>{u(fe,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let V=c(`div`,z);t(z,V);let pe=c(`strong`,V);t(V,pe),t(pe,r(`验证点`)),t(V,r(`：native element、直接组件定义、children 透传。`));let H=c(`div`,z);t(z,H);let me=c(`strong`,H);t(H,me),t(me,r(`说明`)),t(H,r(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=c(`section`,D);t(D,U),e(U,`space-y-3`);let W=c(`div`,U);t(U,W),e(W,`flex flex-wrap items-center justify-between gap-3`);let G=c(`div`,W);t(W,G);let he=c(`h2`,G);t(G,he),e(he,`text-xl font-semibold`),t(he,r(`2. 运行时注册字符串组件名`));let K=c(`p`,G);t(G,K),e(K,`text-sm opacity-75`),t(K,r(`下面这个小区域直接在当前页面里使用导出的 `));let ge=o(K);t(K,ge),u(ge,`<Component>`),t(K,r(`，并通过 useApp().component(...) 把字符串名注册到当前 runtime。`));let q=c(`div`,W);t(W,q),e(q,`join`);let _e=c(`button`,q);t(q,_e),n(()=>{e(_e,String(`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`))}),_(_e,`click`,()=>{T.value=`metric`}),t(_e,r(`RegisteredMetric`));let ve=c(`button`,q);t(q,ve),n(()=>{e(ve,String(`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`))}),_(ve,`click`,()=>{T.value=`notice`}),t(ve,r(`RegisteredNotice`));let J=c(`div`,U);t(U,J),e(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let ye=c(`div`,J);t(J,ye),e(ye,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let be=i(`rue:component:anchor`);t(ye,be);let xe=f(()=>{let n=s(),i=c(`span`,n);return t(n,i),e(i,`badge badge-outline badge-sm`),t(i,r(`children 一样会透传`)),n});n(()=>{let e=m(a,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component(...) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:xe});g(()=>p(e,ye,be))});let Y=c(`div`,J);t(J,Y),e(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=c(`div`,Y);t(Y,X),t(X,r(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let Se=o(X);t(X,Se),u(Se,` `),t(X,r(` `));let Ce=o(X);t(X,Ce),u(Ce,`<Component>`),t(X,r(`。`));let we=c(`div`,Y);t(Y,we),t(we,r(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let Te=c(`div`,Y);t(Y,Te),t(Te,r(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=c(`div`,D);t(D,Z),l(Z,`role`,`alert`),e(Z,`alert alert-warning alert-soft`);let Q=c(`span`,Z);t(Z,Q),t(Q,r(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Ee=o(Q);t(Q,Ee),u(Ee,` `),t(Q,r(` `));let De=o(Q);t(Q,De),u(De,`<Component>`),t(Q,r(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let Oe=c(`div`,d);t(d,Oe),n(()=>{e(Oe,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`))});let ke=c(`div`,Oe);t(Oe,ke),e(ke,`card bg-base-100 shadow overflow-auto`);let $=c(`div`,ke);t(ke,$),e($,`card-body p-0`);let Ae=i(`rue:component:anchor`);return t($,Ae),n(()=>{let e=m(ee,{className:`h-full`,lang:`tsx`,code:ne});g(()=>p(e,$,Ae))}),d})}),h,v),h})};export{re as default};
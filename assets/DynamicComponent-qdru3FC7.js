import{F as e,G as t,I as n,L as r,M as i,P as a,Q as o,R as s,U as c,Z as l,_t as u,bt as d,c as f,j as p,lt as m,pt as h,t as g,u as _}from"./vapor-runtime-D3a-68js.js";import{a as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./useApp-CsPyyzx3.js";import{t as ee}from"./Code-2C2psoH3.js";import{t as b}from"./SidebarPlaygroundExample-DKa0aI1C.js";var x={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},S=e=>_(()=>{let r=n(`article`);d(()=>{t(r,String(`rounded-box border p-4 shadow-sm ${x[e.tone??`primary`]}`))});let o=n(`div`);i(r,o),t(o,`text-xs uppercase tracking-[0.22em] opacity-60`);let c=a(`rue:slot:anchor`);i(o,c),d(()=>{let t=e.title;h(()=>f(t,o,c))});let u=n(`div`);i(r,u),t(u,`mt-2 text-3xl font-semibold`);let p=s(u);i(u,p),d(()=>{l(p,e.value)});let m=n(`div`);i(r,m),t(m,`mt-1 text-sm opacity-75`);let g=a(`rue:slot:anchor`);i(m,g),d(()=>{let t=e.detail;h(()=>f(t,m,g))});let _=n(`div`);i(r,_),t(_,`mt-4`);let v=a(`rue:children:anchor`);return i(_,v),d(()=>{let t=e.children;h(()=>f(t,_,v))}),r}),C=e=>_(()=>{let r=n(`section`);t(r,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let o=n(`div`);i(r,o),t(o,`flex items-center justify-between gap-3`);let s=n(`div`);i(o,s);let c=n(`div`);i(s,c),t(c,`font-semibold`);let l=a(`rue:slot:anchor`);i(c,l),d(()=>{let t=e.title;h(()=>f(t,c,l))});let u=n(`div`);i(s,u),t(u,`text-sm opacity-75`);let p=a(`rue:slot:anchor`);i(u,p),d(()=>{let t=e.detail;h(()=>f(t,u,p))});let m=n(`span`);i(o,m),t(m,`status status-info status-lg`);let g=n(`div`);i(r,g),t(g,`mt-4`);let _=a(`rue:children:anchor`);return i(g,_),d(()=>{let t=e.children;h(()=>f(t,g,_))}),r}),w=e=>_(()=>{let r=n(`article`);t(r,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let o=n(`div`);i(r,o),t(o,`text-xs uppercase tracking-[0.22em] opacity-60`);let c=a(`rue:slot:anchor`);i(o,c),d(()=>{let t=e.title;h(()=>f(t,o,c))});let u=n(`div`);i(r,u),t(u,`mt-2 text-2xl font-semibold`);let p=s(u);i(u,p),d(()=>{l(p,e.value??`Registered`)});let m=n(`div`);i(r,m),t(m,`mt-1 text-sm opacity-75`);let g=a(`rue:slot:anchor`);i(m,g),d(()=>{let t=e.detail;h(()=>f(t,m,g))});let _=n(`div`);i(r,_),t(_,`mt-4`);let v=a(`rue:children:anchor`);return i(_,v),d(()=>{let t=e.children;h(()=>f(t,_,v))}),r}),T=e=>_(()=>{let r=n(`section`);t(r,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let o=n(`div`);i(r,o),t(o,`font-semibold`);let s=a(`rue:slot:anchor`);i(o,s),d(()=>{let t=e.title;h(()=>f(t,o,s))});let c=n(`div`);i(r,c),t(c,`mt-1 text-sm opacity-75`);let l=a(`rue:slot:anchor`);i(c,l),d(()=>{let t=e.detail;h(()=>f(t,c,l))});let u=n(`div`);i(r,u),t(u,`mt-4`);let p=a(`rue:children:anchor`);return i(u,p),d(()=>{let t=e.children;h(()=>f(t,u,p))}),r}),te=!1,E=()=>{te||=(y(()=>null).component(`RegisteredMetric`,w).component(`RegisteredNotice`,T),!0)},ne=`import {
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

export default Demo;`,re=()=>{let{activeTab:y,renderTarget:x,tone:w,registryTarget:T,resolveDynamicType:te,resolveDynamicProps:re}=v(`useSetup:0:0`,()=>u(()=>{E();let e=v(`ref:1:0`,()=>m(`preview`)),t=v(`ref:1:1`,()=>m(`native`)),n=v(`ref:1:2`,()=>m(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:v(`ref:1:3`,()=>m(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?S:C,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return _(()=>{let u=e(),m=a(`rue:component:anchor`);return i(u,m),f(g(b,{children:_(()=>{let u=e(),m=n(`h1`);i(u,m),t(m,`text-5xl font-semibold mb-4 md:mb-4`),i(m,r(`动态组件（Component）`));let v=n(`div`);i(u,v),c(v,`role`,`tablist`),t(v,`tabs tabs-box`);let b=n(`button`);i(v,b),c(b,`role`,`tab`),d(()=>{t(b,String(`tab ${y.value===`preview`?`tab-active`:``}`))}),p(b,`click`,()=>{y.value=`preview`}),i(b,r(`效果`));let S=n(`button`);i(v,S),c(S,`role`,`tab`),d(()=>{t(S,String(`tab ${y.value===`code`?`tab-active`:``}`))}),p(S,`click`,()=>{y.value=`code`}),i(S,r(`代码`));let C=n(`div`);i(u,C),d(()=>{t(C,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`preview`?``:`hidden`}`))});let E=n(`div`);i(C,E),t(E,`card bg-base-100 shadow`);let D=n(`div`);i(E,D),t(D,`card-body gap-6`);let O=n(`section`);i(D,O),t(O,`space-y-3`);let k=n(`div`);i(O,k),t(k,`flex flex-wrap items-center justify-between gap-3`);let ie=n(`div`);i(k,ie);let ae=n(`h2`);i(ie,ae),t(ae,`text-xl font-semibold`),i(ae,r(`1. 直接切换原生标签和组件定义`));let A=n(`p`);i(ie,A),t(A,`text-sm opacity-75`),i(A,r(`这里显式导入并使用 `));let oe=s(A);i(A,oe),l(oe,`<Component>`),i(A,r(`，is 可以在字符串标签名和函数组件之间来回切换。`));let j=n(`div`);i(k,j),t(j,`flex flex-wrap gap-3`);let M=n(`div`);i(j,M),t(M,`join`);let N=n(`button`);i(M,N),d(()=>{t(N,String(`btn btn-sm join-item ${x.value===`native`?`btn-primary`:``}`))}),p(N,`click`,()=>{x.value=`native`}),i(N,r(`原生 article`));let P=n(`button`);i(M,P),d(()=>{t(P,String(`btn btn-sm join-item ${x.value===`card`?`btn-primary`:``}`))}),p(P,`click`,()=>{x.value=`card`}),i(P,r(`SalesCard`));let F=n(`button`);i(M,F),d(()=>{t(F,String(`btn btn-sm join-item ${x.value===`notice`?`btn-primary`:``}`))}),p(F,`click`,()=>{x.value=`notice`}),i(F,r(`StatusStrip`));let I=n(`div`);i(j,I),t(I,`join`);let L=n(`button`);i(I,L),d(()=>{t(L,String(`btn btn-sm join-item ${w.value===`primary`?`btn-secondary`:``}`))}),p(L,`click`,()=>{w.value=`primary`}),i(L,r(`primary`));let R=n(`button`);i(I,R),d(()=>{t(R,String(`btn btn-sm join-item ${w.value===`accent`?`btn-secondary`:``}`))}),p(R,`click`,()=>{w.value=`accent`}),i(R,r(`accent`));let z=n(`div`);i(O,z),t(z,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let B=n(`div`);i(z,B),t(B,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let se=a(`rue:component:anchor`);i(B,se);let ce=_(()=>{let a=e(),o=n(`span`);return i(a,o),t(o,`badge badge-outline badge-sm`),i(o,r(`children 已透传`)),a});d(()=>{let e=g(o,{is:te(),...re(),children:ce});h(()=>f(e,B,se))});let V=n(`div`);i(z,V),t(V,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let H=n(`div`);i(V,H);let le=n(`strong`);i(H,le),i(le,r(`当前 is`)),i(H,r(`： `));let ue=s(H);i(H,ue),d(()=>{l(ue,x.value===`native`?`article`:x.value===`card`?`SalesCard`:`StatusStrip`)});let de=n(`div`);i(V,de);let fe=n(`strong`);i(de,fe),i(fe,r(`验证点`)),i(de,r(`：native element、直接组件定义、children 透传。`));let pe=n(`div`);i(V,pe);let me=n(`strong`);i(pe,me),i(me,r(`说明`)),i(pe,r(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let U=n(`section`);i(D,U),t(U,`space-y-3`);let he=n(`div`);i(U,he),t(he,`flex flex-wrap items-center justify-between gap-3`);let ge=n(`div`);i(he,ge);let _e=n(`h2`);i(ge,_e),t(_e,`text-xl font-semibold`),i(_e,r(`2. 运行时注册字符串组件名`));let W=n(`p`);i(ge,W),t(W,`text-sm opacity-75`),i(W,r(`下面这个小区域直接在当前页面里使用导出的 `));let ve=s(W);i(W,ve),l(ve,`<Component>`),i(W,r(`，并通过 useApp().component(...) 把字符串名注册到当前 runtime。`));let G=n(`div`);i(he,G),t(G,`join`);let K=n(`button`);i(G,K),d(()=>{t(K,String(`btn btn-sm join-item ${T.value===`metric`?`btn-primary`:``}`))}),p(K,`click`,()=>{T.value=`metric`}),i(K,r(`RegisteredMetric`));let q=n(`button`);i(G,q),d(()=>{t(q,String(`btn btn-sm join-item ${T.value===`notice`?`btn-primary`:``}`))}),p(q,`click`,()=>{T.value=`notice`}),i(q,r(`RegisteredNotice`));let J=n(`div`);i(U,J),t(J,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let Y=n(`div`);i(J,Y),t(Y,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let ye=a(`rue:component:anchor`);i(Y,ye);let be=_(()=>{let a=e(),o=n(`span`);return i(a,o),t(o,`badge badge-outline badge-sm`),i(o,r(`children 一样会透传`)),a});d(()=>{let e=g(o,{is:T.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:T.value===`metric`?`通过 useApp().component(...) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:be});h(()=>f(e,Y,ye))});let X=n(`div`);i(J,X),t(X,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let Z=n(`div`);i(X,Z),i(Z,r(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let xe=s(Z);i(Z,xe),l(xe,` `),i(Z,r(` `));let Se=s(Z);i(Z,Se),l(Se,`<Component>`),i(Z,r(`。`));let Ce=n(`div`);i(X,Ce),i(Ce,r(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let we=n(`div`);i(X,we),i(we,r(`这也顺带验证了字符串名路径下的 children 透传。`));let Q=n(`div`);i(D,Q),c(Q,`role`,`alert`),t(Q,`alert alert-warning alert-soft`);let $=n(`span`);i(Q,$),i($,r(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Te=s($);i($,Te),l(Te,` `),i($,r(` `));let Ee=s($);i($,Ee),l(Ee,`<Component>`),i($,r(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let De=n(`div`);i(u,De),d(()=>{t(De,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${y.value===`code`?``:`hidden`}`))});let Oe=n(`div`);i(De,Oe),t(Oe,`card bg-base-100 shadow overflow-auto`);let ke=n(`div`);i(Oe,ke),t(ke,`card-body p-0`);let Ae=a(`rue:component:anchor`);return i(ke,Ae),d(()=>{let e=g(ee,{className:`h-full`,lang:`tsx`,code:ne});h(()=>f(e,ke,Ae))}),u})}),u,m),u})};export{re as default};
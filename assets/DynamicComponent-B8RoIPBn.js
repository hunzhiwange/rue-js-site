import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,X as c,Y as l,c as u,j as d,pt as f,rt as p,t as m,u as h,ut as g}from"./vapor-runtime-BZZbPG7x.js";import{a as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as v}from"./useApp-DxckY8g0.js";import{t as ee}from"./Code-C8wy38VS.js";import{t as y}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var b={primary:`border-primary/25 bg-primary/10`,accent:`border-accent/25 bg-accent/10`},x=e=>h(()=>{let n=t(`article`);f(()=>{s(n,String(`rounded-box border p-4 shadow-sm ${b[e.tone??`primary`]}`))});let r=t(`div`);d(n,r),s(r,`text-xs uppercase tracking-[0.22em] opacity-60`);let o=a(`rue:slot:anchor`);d(r,o),f(()=>{let t=e.title;u(t,r,o)});let c=t(`div`);d(n,c),s(c,`mt-2 text-3xl font-semibold`);let p=i(c);d(c,p),f(()=>{l(p,e.value)});let m=t(`div`);d(n,m),s(m,`mt-1 text-sm opacity-75`);let h=a(`rue:slot:anchor`);d(m,h),f(()=>{let t=e.detail;u(t,m,h)});let g=t(`div`);d(n,g),s(g,`mt-4`);let _=a(`rue:children:anchor`);return d(g,_),f(()=>{let t=e.children;u(t,g,_)}),n}),S=e=>h(()=>{let n=t(`section`);s(n,`rounded-box border border-info/25 bg-info/10 p-4 shadow-sm`);let r=t(`div`);d(n,r),s(r,`flex items-center justify-between gap-3`);let i=t(`div`);d(r,i);let o=t(`div`);d(i,o),s(o,`font-semibold`);let c=a(`rue:slot:anchor`);d(o,c),f(()=>{let t=e.title;u(t,o,c)});let l=t(`div`);d(i,l),s(l,`text-sm opacity-75`);let p=a(`rue:slot:anchor`);d(l,p),f(()=>{let t=e.detail;u(t,l,p)});let m=t(`span`);d(r,m),s(m,`status status-info status-lg`);let h=t(`div`);d(n,h),s(h,`mt-4`);let g=a(`rue:children:anchor`);return d(h,g),f(()=>{let t=e.children;u(t,h,g)}),n}),C=e=>h(()=>{let n=t(`article`);s(n,`rounded-box border border-secondary/25 bg-secondary/10 p-4 shadow-sm`);let r=t(`div`);d(n,r),s(r,`text-xs uppercase tracking-[0.22em] opacity-60`);let o=a(`rue:slot:anchor`);d(r,o),f(()=>{let t=e.title;u(t,r,o)});let c=t(`div`);d(n,c),s(c,`mt-2 text-2xl font-semibold`);let p=i(c);d(c,p),f(()=>{l(p,e.value??`Registered`)});let m=t(`div`);d(n,m),s(m,`mt-1 text-sm opacity-75`);let h=a(`rue:slot:anchor`);d(m,h),f(()=>{let t=e.detail;u(t,m,h)});let g=t(`div`);d(n,g),s(g,`mt-4`);let _=a(`rue:children:anchor`);return d(g,_),f(()=>{let t=e.children;u(t,g,_)}),n}),w=e=>h(()=>{let n=t(`section`);s(n,`rounded-box border border-warning/35 bg-warning/15 p-4 shadow-sm`);let r=t(`div`);d(n,r),s(r,`font-semibold`);let i=a(`rue:slot:anchor`);d(r,i),f(()=>{let t=e.title;u(t,r,i)});let o=t(`div`);d(n,o),s(o,`mt-1 text-sm opacity-75`);let c=a(`rue:slot:anchor`);d(o,c),f(()=>{let t=e.detail;u(t,o,c)});let l=t(`div`);d(n,l),s(l,`mt-4`);let p=a(`rue:children:anchor`);return d(l,p),f(()=>{let t=e.children;u(t,l,p)}),n}),te=!1,ne=()=>{te||=(v(()=>null).component(`RegisteredMetric`,C).component(`RegisteredNotice`,w),!0)},re=`import {
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

export default Demo;`,ie=()=>{let{activeTab:v,renderTarget:b,tone:C,registryTarget:w,resolveDynamicType:te,resolveDynamicProps:ie}=_(`useSetup:0:0`,()=>g(()=>{ne();let e=_(`ref:1:0`,()=>p(`preview`)),t=_(`ref:1:1`,()=>p(`native`)),n=_(`ref:1:2`,()=>p(`primary`));return{activeTab:e,renderTarget:t,tone:n,registryTarget:_(`ref:1:3`,()=>p(`metric`)),resolveDynamicType:()=>t.value===`native`?`article`:t.value===`card`?x:S,resolveDynamicProps:()=>t.value===`native`?{className:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`}:t.value===`card`?{title:`今日成交额`,value:`¥ 128,400`,detail:`比昨日 +8.2%，这里直接把函数组件塞进 is`,tone:n.value}:{title:`状态切换`,detail:`这里的 is 已从原生标签切到另一个组件定义`}}}));return h(()=>{let p=o(),g=a(`rue:component:anchor`);return d(p,g),u(m(y,{children:h(()=>{let p=o(),g=t(`h1`);d(p,g),s(g,`text-5xl font-semibold mb-4 md:mb-4`),d(g,r(`动态组件（Component）`));let _=t(`div`);d(p,_),n(_,`role`,`tablist`),s(_,`tabs tabs-box`);let y=t(`button`);d(_,y),n(y,`role`,`tab`),f(()=>{s(y,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),e(y,`click`,()=>{v.value=`preview`}),d(y,r(`效果`));let x=t(`button`);d(_,x),n(x,`role`,`tab`),f(()=>{s(x,String(`tab ${v.value===`code`?`tab-active`:``}`))}),e(x,`click`,()=>{v.value=`code`}),d(x,r(`代码`));let S=t(`div`);d(p,S),f(()=>{s(S,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${v.value===`preview`?``:`hidden`}`))});let ne=t(`div`);d(S,ne),s(ne,`card bg-base-100 shadow`);let T=t(`div`);d(ne,T),s(T,`card-body gap-6`);let E=t(`section`);d(T,E),s(E,`space-y-3`);let D=t(`div`);d(E,D),s(D,`flex flex-wrap items-center justify-between gap-3`);let ae=t(`div`);d(D,ae);let oe=t(`h2`);d(ae,oe),s(oe,`text-xl font-semibold`),d(oe,r(`1. 直接切换原生标签和组件定义`));let O=t(`p`);d(ae,O),s(O,`text-sm opacity-75`),d(O,r(`这里显式导入并使用 `));let se=i(O);d(O,se),l(se,`<Component>`),d(O,r(`，is 可以在字符串标签名和函数组件之间来回切换。`));let k=t(`div`);d(D,k),s(k,`flex flex-wrap gap-3`);let A=t(`div`);d(k,A),s(A,`join`);let j=t(`button`);d(A,j),f(()=>{s(j,String(`btn btn-sm join-item ${b.value===`native`?`btn-primary`:``}`))}),e(j,`click`,()=>{b.value=`native`}),d(j,r(`原生 article`));let M=t(`button`);d(A,M),f(()=>{s(M,String(`btn btn-sm join-item ${b.value===`card`?`btn-primary`:``}`))}),e(M,`click`,()=>{b.value=`card`}),d(M,r(`SalesCard`));let N=t(`button`);d(A,N),f(()=>{s(N,String(`btn btn-sm join-item ${b.value===`notice`?`btn-primary`:``}`))}),e(N,`click`,()=>{b.value=`notice`}),d(N,r(`StatusStrip`));let P=t(`div`);d(k,P),s(P,`join`);let F=t(`button`);d(P,F),f(()=>{s(F,String(`btn btn-sm join-item ${C.value===`primary`?`btn-secondary`:``}`))}),e(F,`click`,()=>{C.value=`primary`}),d(F,r(`primary`));let I=t(`button`);d(P,I),f(()=>{s(I,String(`btn btn-sm join-item ${C.value===`accent`?`btn-secondary`:``}`))}),e(I,`click`,()=>{C.value=`accent`}),d(I,r(`accent`));let L=t(`div`);d(E,L),s(L,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]`);let R=t(`div`);d(L,R),s(R,`rounded-box border border-dashed border-base-300 p-4 min-h-44`);let ce=a(`rue:component:anchor`);d(R,ce);let le=h(()=>{let e=o(),n=t(`span`);return d(e,n),s(n,`badge badge-outline badge-sm`),d(n,r(`children 已透传`)),e});f(()=>{u(m(c,{is:te(),...ie(),children:le}),R,ce)});let z=t(`div`);d(L,z),s(z,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let B=t(`div`);d(z,B);let ue=t(`strong`);d(B,ue),d(ue,r(`当前 is`)),d(B,r(`： `));let de=i(B);d(B,de),f(()=>{l(de,b.value===`native`?`article`:b.value===`card`?`SalesCard`:`StatusStrip`)});let fe=t(`div`);d(z,fe);let pe=t(`strong`);d(fe,pe),d(pe,r(`验证点`)),d(fe,r(`：native element、直接组件定义、children 透传。`));let me=t(`div`);d(z,me);let he=t(`strong`);d(me,he),d(he,r(`说明`)),d(me,r(`：切到 SalesCard 时，tone 也会跟着透传给目标组件。`));let V=t(`section`);d(T,V),s(V,`space-y-3`);let H=t(`div`);d(V,H),s(H,`flex flex-wrap items-center justify-between gap-3`);let ge=t(`div`);d(H,ge);let _e=t(`h2`);d(ge,_e),s(_e,`text-xl font-semibold`),d(_e,r(`2. 运行时注册字符串组件名`));let U=t(`p`);d(ge,U),s(U,`text-sm opacity-75`),d(U,r(`下面这个小区域直接在当前页面里使用导出的 `));let ve=i(U);d(U,ve),l(ve,`<Component>`),d(U,r(`，并通过 useApp().component(...) 把字符串名注册到当前 runtime。`));let W=t(`div`);d(H,W),s(W,`join`);let G=t(`button`);d(W,G),f(()=>{s(G,String(`btn btn-sm join-item ${w.value===`metric`?`btn-primary`:``}`))}),e(G,`click`,()=>{w.value=`metric`}),d(G,r(`RegisteredMetric`));let K=t(`button`);d(W,K),f(()=>{s(K,String(`btn btn-sm join-item ${w.value===`notice`?`btn-primary`:``}`))}),e(K,`click`,()=>{w.value=`notice`}),d(K,r(`RegisteredNotice`));let q=t(`div`);d(V,q),s(q,`grid gap-4 xl:grid-cols-[minmax(0,1fr)_20rem]`);let J=t(`div`);d(q,J),s(J,`rounded-box border border-dashed border-base-300 p-4 min-h-40`);let ye=a(`rue:component:anchor`);d(J,ye);let be=h(()=>{let e=o(),n=t(`span`);return d(e,n),s(n,`badge badge-outline badge-sm`),d(n,r(`children 一样会透传`)),e});f(()=>{u(m(c,{is:w.value===`metric`?`RegisteredMetric`:`RegisteredNotice`,title:`运行时注册`,value:`CardView`,detail:w.value===`metric`?`通过 useApp().component(...) 注册后，字符串名会被解析成组件定义`:`切到另一个已注册组件名，仍然走同一个动态入口`,children:be}),J,ye)});let Y=t(`div`);d(q,Y),s(Y,`rounded-box border border-base-300 bg-base-200 p-4 text-sm space-y-2`);let X=t(`div`);d(Y,X),d(X,r(`这里不再额外挂一个子应用，只把字符串组件名注册到当前 runtime，再直接渲染`));let xe=i(X);d(X,xe),l(xe,` `),d(X,r(` `));let Se=i(X);d(X,Se),l(Se,`<Component>`),d(X,r(`。`));let Ce=t(`div`);d(Y,Ce),d(Ce,r(`因为已经注册了字符串名，所以 Component 会先查注册表，再决定最终渲染哪个组件。`));let we=t(`div`);d(Y,we),d(we,r(`这也顺带验证了字符串名路径下的 children 透传。`));let Z=t(`div`);d(T,Z),n(Z,`role`,`alert`),s(Z,`alert alert-warning alert-soft`);let Q=t(`span`);d(Z,Q),d(Q,r(`注意：如果 is 最终解析成原生 input、select、textarea 之类的节点，写在`));let Te=i(Q);d(Q,Te),l(Te,` `),d(Q,r(` `));let Ee=i(Q);d(Q,Ee),l(Ee,`<Component>`),d(Q,r(` 上的 v-model / r-model 不能像静态原生标签那样在编译期展开，应该在最终原生节点处处理。`));let De=t(`div`);d(p,De),f(()=>{s(De,String(`mt-4 grid md:grid-cols-1 gap-6 items-start ${v.value===`code`?``:`hidden`}`))});let Oe=t(`div`);d(De,Oe),s(Oe,`card bg-base-100 shadow overflow-auto`);let $=t(`div`);d(Oe,$),s($,`card-body p-0`);let ke=a(`rue:component:anchor`);return d($,ke),f(()=>{u(m(ee,{className:`h-full`,lang:`tsx`,code:re}),$,ke)}),p})}),p,g),p})};export{ie as default};
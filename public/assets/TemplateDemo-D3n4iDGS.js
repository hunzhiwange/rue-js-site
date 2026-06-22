import{N as e,Q as t,R as n,Vt as r,Xt as i,Z as a,at as o,bt as s,dt as c,it as l,l as u,nt as d,o as f,on as p,pt as m,rt as h,s as ee,t as g,tn as _,tt as v,z as y}from"./vapor-runtime-x7F5M-49.js";import{a as b,n as te}from"./vapor-helpers-vapor-D1LP4JjK.js";import{s as x}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as S}from"./Code-C5NjdoiC.js";import{r as C}from"./SidebarPlaygroundExample-DpItFif-.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=r=>n(()=>{let n=d(),i=v(`rue-template-anchor`);return t(n,i),e(w(r.children),n,i),n});y(T,`Template`);var ne={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},E=e=>u(n=>{let i=h(`article`,n);r(()=>{m(i,ne[e.tone??`base`])});let a=h(`h3`,i);t(i,a),m(a,`font-semibold`);let o=v(`rue:slot:anchor`);t(a,o),r(()=>{let t=e.title;_(()=>f(t,a,o))});let s=h(`p`,i);t(i,s),m(s,`mt-2 text-sm opacity-70`);let c=v(`rue:slot:anchor`);return t(s,c),r(()=>{let t=e.meta;_(()=>f(t,s,c))}),i}),re=e=>u(n=>{let i=h(`section`,n);m(i,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let a=h(`div`,i);t(i,a),m(a,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let o=h(`div`,a);t(a,o),m(o,`min-w-0 space-y-2`);let s=h(`div`,o);t(o,s),m(s,`text-xs uppercase tracking-[0.22em] opacity-55`),t(s,l(`named slot`));let c=v(`rue:component:anchor`);t(o,c),r(()=>{let t=g(x,{source:e,name:`header`,children:`未提供 header`});_(()=>f(t,o,c))});let u=h(`div`,a);t(a,u),m(u,`flex flex-wrap items-center gap-2`);let d=v(`rue:component:anchor`);t(u,d),r(()=>{let t=g(x,{source:e,name:`actions`});_(()=>f(t,u,d))});let p=h(`div`,i);t(i,p),m(p,`p-4`);let ee=v(`rue:component:anchor`);return t(p,ee),r(()=>{let t=g(x,{source:e,children:`未提供默认内容`});_(()=>f(t,p,ee))}),i}),D={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},O={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},k=()=>{let{activeTab:e,showBurst:n,showSummary:y,mode:x,branchState:w,code:ne,cards:k,feed:ie}=b(`useSetup:0:0`,()=>p(()=>{let e=b(`ref:1:0`,()=>i(`preview`)),t=b(`ref:1:1`,()=>i(!0)),n=b(`ref:1:2`,()=>i(!0)),r=b(`ref:1:3`,()=>i(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>i(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

type ShellProps = {
  header?: any;
  actions?: any;
};

const Shell: FC<ShellProps> = props => (
  <section className="rounded-box border p-4">
    <header className="flex items-start justify-between gap-3 border-b pb-4">
      <Slot source={props} name="header">Fallback</Slot>
      <Slot source={props} name="actions" />
    </header>
    <div className="pt-4">
      <Slot source={props} />
    </div>
  </section>
);

const Tile: FC<{ title: string; meta: string; tone?: 'base' | 'primary' | 'accent' }> = props => (
  <article className="rounded-box border p-4 shadow-sm">
    <h3 className="font-semibold">{props.title}</h3>
    <p className="mt-2 text-sm opacity-70">{props.meta}</p>
  </article>
);

const Demo: FC = () => {
  const showBurst = ref(true);
  const branchState = ref<'healthy' | 'warning' | 'critical'>('healthy');
  const items = ref([
    { id: 1, title: '主库切换完成', meta: '华东集群已接管写流量', status: 'done' },
    { id: 2, title: '错误率回落', meta: '5 分钟窗口内恢复到 0.2%', status: 'stable' },
  ]);
  return (
    <Shell>
      <Template slot="header">
        <div>
          <h3 className="font-semibold">显式 Template 组件</h3>
          <p className="mt-1 text-sm opacity-70">header 通过命名 slot 注入</p>
        </div>
      </Template>

      <Template slot="actions">
        <button
          className="btn btn-sm"
          onClick={() => {
            showBurst.value = !showBurst.value;
          }}
        >
          Toggle
        </button>
      </Template>

      <div className="grid gap-3 md:grid-cols-2">
        <Tile title="固定卡片 A" meta="Always visible" />
        <Template v-if={showBurst.value}>
          <Tile title="额外卡片 B" meta="No wrapper grid item" tone="primary" />
          <Tile title="额外卡片 C" meta="No wrapper grid item" tone="accent" />
        </Template>
        <Tile title="固定卡片 D" meta="Always visible" />
      </div>

      <div className="space-y-3">
        <div className="join">
          <button className="btn btn-sm join-item" onClick={() => { branchState.value = 'healthy'; }}>
            healthy
          </button>
          <button className="btn btn-sm join-item" onClick={() => { branchState.value = 'warning'; }}>
            warning
          </button>
          <button className="btn btn-sm join-item" onClick={() => { branchState.value = 'critical'; }}>
            critical
          </button>
        </div>

        <Template v-if={branchState.value === 'healthy'}>
          <Tile title="服务健康" meta="命中 <Template v-if> 分支" tone="primary" />
          <Tile title="延迟稳定" meta="P95 维持在 120ms" />
        </Template>
        <Template v-else-if={branchState.value === 'warning'}>
          <Tile title="降级模式" meta="命中 <Template v-else-if> 分支" tone="accent" />
          <Tile title="队列上涨" meta="等待中的任务数正在攀升" />
        </Template>
        <Template v-else>
          <Tile title="故障切流" meta="命中 <Template v-else> 分支" tone="primary" />
          <Tile title="人工接管" meta="值班同学已经介入处置" tone="accent" />
        </Template>
      </div>

      <ul className="list rounded-box bg-base-100 shadow-sm">
        {items.value.map(row => (
          <Template key={row.id}>
            <li className="list-row items-start gap-3">
              <div className="list-col-grow">
                <div className="font-medium">{row.title}</div>
                <div className="text-sm opacity-70">{row.meta}</div>
              </div>
              <span className="badge badge-outline whitespace-nowrap">{row.status}</span>
            </li>
            <li className="px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45">
              同一条数据额外展开的第二个兄弟节点
            </li>
          </Template>
        ))}
      </ul>
    </Shell>
  );
};

export default Demo;`,cards:D[r.value],feed:O[r.value]}}));return u(i=>{let p=d(),b=v(`rue:component:anchor`);return t(p,b),f(g(C,{children:u(()=>{let i=d(),p=h(`h1`,i);t(i,p),m(p,`mb-4 text-5xl font-semibold md:mb-4`),t(p,l(`Template 内置组件`));let b=h(`div`,i);t(i,b),c(b,`role`,`tablist`),m(b,`tabs tabs-box`);let C=h(`button`,b);t(b,C),c(C,`role`,`tab`),r(()=>{m(C,`tab ${e.value===`preview`?`tab-active`:``}`)}),a(C,`click`,()=>{e.value=`preview`}),t(C,l(`效果`));let D=h(`button`,b);t(b,D),c(D,`role`,`tab`),r(()=>{m(D,`tab ${e.value===`code`?`tab-active`:``}`)}),a(D,`click`,()=>{e.value=`code`}),t(D,l(`代码`));let O=h(`div`,i);t(i,O),m(O,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ae=v(`rue:slot:anchor`);t(O,ae),r(()=>{let n=e.value===`code`?u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`card overflow-auto bg-base-100 shadow`);let i=h(`div`,n);t(n,i),m(i,`card-body p-0`);let a=v(`rue:component:anchor`);return t(i,a),r(()=>{let e=g(S,{className:`h-full`,lang:`tsx`,code:ne});_(()=>f(e,i,a))}),e}):``;_(()=>f(n,O,ae))}),t(O,l(` `));let oe=v(`rue:slot:anchor`);return t(O,oe),r(()=>{let i=e.value===`preview`?u(()=>{let e=d(),i=h(`div`,e);t(e,i),m(i,`grid gap-6`);let p=h(`div`,i);t(i,p),c(p,`role`,`alert`),m(p,`alert alert-success`);let b=h(`div`,p);t(p,b),m(b,`space-y-2`);let S=h(`div`,b);t(b,S),t(S,l(`这个页面改成了显式导入`));let C=h(`strong`,S);t(S,C);let ne=o(C);t(C,ne),s(ne,`<Template>`),t(S,l(`组件的写法，不再依赖小写 template lowering。`));let D=h(`div`,b);t(b,D),m(D,`text-sm opacity-80`),t(D,l(`当前示例覆盖命名 slot、`));let O=o(D);t(D,O),s(O,`<Template v-if>`),t(D,l(`、 `));let ae=o(D);t(D,ae),s(ae,`<Template v-if / v-else-if / v-else>`);let oe=o(D);t(D,oe),s(oe,` `),t(D,l(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let se=h(`div`,i);t(i,se),m(se,`card bg-base-100 shadow`);let A=h(`div`,se);t(se,A),m(A,`card-body gap-4`);let j=h(`div`,A);t(A,j),m(j,`flex flex-wrap items-center justify-between gap-3`);let ce=h(`div`,j);t(j,ce);let le=h(`h2`,ce);t(ce,le),m(le,`card-title`),t(le,l(`切换场景`));let ue=h(`p`,ce);t(ce,ue),m(ue,`text-sm opacity-70`),t(ue,l(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let M=h(`div`,j);t(j,M),m(M,`flex flex-wrap gap-3`);let N=h(`div`,M);t(M,N),m(N,`join`);let de=h(`button`,N);t(N,de),r(()=>{m(de,`btn btn-sm join-item ${x.value===`ops`?`btn-primary`:``}`)}),a(de,`click`,()=>{x.value=`ops`}),t(de,l(`运维`));let fe=h(`button`,N);t(N,fe),r(()=>{m(fe,`btn btn-sm join-item ${x.value===`growth`?`btn-primary`:``}`)}),a(fe,`click`,()=>{x.value=`growth`}),t(fe,l(`增长`));let P=h(`button`,M);t(M,P),r(()=>{m(P,`btn btn-sm ${n.value?`btn-secondary`:`btn-outline`}`)}),a(P,`click`,()=>{n.value=!n.value});let pe=o(P);t(P,pe),r(()=>{s(pe,n.value?`隐藏中间卡片`:`显示中间卡片`)});let F=h(`div`,A);t(A,F),m(F,`grid gap-4 xl:grid-cols-2`);let I=h(`section`,F);t(F,I),m(I,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let L=h(`div`,I);t(I,L),m(L,`flex flex-wrap items-center justify-between gap-2`);let me=h(`div`,L);t(L,me);let he=h(`h3`,me);t(me,he),m(he,`font-semibold`),t(he,l(`普通 div 包裹`));let ge=h(`p`,me);t(me,ge),m(ge,`text-sm opacity-70`),t(ge,l(`中间两张卡片会先进入一个额外 grid item。`));let _e=h(`span`,L);t(L,_e),m(_e,`badge badge-warning badge-outline`),t(_e,l(`直接网格项: `));let ve=o(_e);t(_e,ve),r(()=>{s(ve,n.value?3:2)});let R=h(`div`,I);t(I,R),m(R,`grid gap-3 md:grid-cols-2`);let ye=v(`rue:component:anchor`);t(R,ye),r(()=>{let e=g(E,{title:k.head.title,meta:k.head.meta,tone:`base`});_(()=>f(e,R,ye))});let be=v(`rue:slot:anchor`);t(R,be),r(()=>{let e=n.value?u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let i=v(`rue:component:anchor`);t(n,i),r(()=>{let e=g(E,{title:k.burst[0].title,meta:k.burst[0].meta,tone:`primary`});_(()=>f(e,n,i))});let a=v(`rue:component:anchor`);return t(n,a),r(()=>{let e=g(E,{title:k.burst[1].title,meta:k.burst[1].meta,tone:`accent`});_(()=>f(e,n,a))}),e}):``;_(()=>f(e,R,be))});let xe=v(`rue:component:anchor`);t(R,xe),r(()=>{let e=g(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});_(()=>f(e,R,xe))});let z=h(`section`,F);t(F,z),m(z,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let B=h(`div`,z);t(z,B),m(B,`flex flex-wrap items-center justify-between gap-2`);let Se=h(`div`,B);t(B,Se);let V=h(`h3`,Se);t(Se,V),m(V,`font-semibold`),t(V,l(`显式 `));let Ce=o(V);t(V,Ce),s(Ce,`<Template v-if>`),t(V,l(` 条件片段`));let we=h(`p`,Se);t(Se,we),m(we,`text-sm opacity-70`),t(we,l(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let H=h(`span`,B);t(B,H),m(H,`badge badge-success badge-outline`),t(H,l(`直接网格项: `));let Te=o(H);t(H,Te),r(()=>{s(Te,n.value?4:2)});let U=h(`div`,z);t(z,U),m(U,`grid gap-3 md:grid-cols-2`);let Ee=v(`rue:component:anchor`);t(U,Ee),r(()=>{let e=g(E,{title:k.head.title,meta:k.head.meta,tone:`base`});_(()=>f(e,U,Ee))});let De=v(`rue:slot:anchor`);t(U,De),r(()=>{let e=n.value?u(()=>{let e=d(),n=v(`rue:component:anchor`);return t(e,n),f(g(T,{children:u(()=>{let e=d(),n=v(`rue:component:anchor`);t(e,n),r(()=>{let t=g(E,{title:k.burst[0].title,meta:k.burst[0].meta,tone:`primary`});_(()=>f(t,e,n))});let i=v(`rue:component:anchor`);return t(e,i),r(()=>{let t=g(E,{title:k.burst[1].title,meta:k.burst[1].meta,tone:`accent`});_(()=>f(t,e,i))}),e})}),e,n),e}):``;_(()=>f(e,U,De))});let Oe=v(`rue:component:anchor`);t(U,Oe),r(()=>{let e=g(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});_(()=>f(e,U,Oe))});let W=h(`section`,A);t(A,W),m(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=h(`div`,W);t(W,G),m(G,`flex flex-wrap items-center justify-between gap-3`);let ke=h(`div`,G);t(G,ke);let K=h(`h3`,ke);t(ke,K),m(K,`font-semibold`),t(K,l(`显式 `));let Ae=o(K);t(K,Ae),s(Ae,`<Template v-if>`),t(K,l(` / `));let je=o(K);t(K,je),s(je,`<Template v-else-if>`),t(K,l(` / `));let Me=o(K);t(K,Me),s(Me,`<Template v-else>`);let Ne=o(K);t(K,Ne),s(Ne,` `),t(K,l(`分支链`));let Pe=h(`p`,ke);t(ke,Pe),m(Pe,`text-sm opacity-70`),t(Pe,l(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=h(`div`,G);t(G,q),m(q,`join`);let Fe=h(`button`,q);t(q,Fe),r(()=>{m(Fe,`btn btn-sm join-item ${w.value===`healthy`?`btn-info`:`btn-outline`}`)}),a(Fe,`click`,()=>{w.value=`healthy`}),t(Fe,l(`健康`));let Ie=h(`button`,q);t(q,Ie),r(()=>{m(Ie,`btn btn-sm join-item ${w.value===`warning`?`btn-info`:`btn-outline`}`)}),a(Ie,`click`,()=>{w.value=`warning`}),t(Ie,l(`预警`));let Le=h(`button`,q);t(q,Le),r(()=>{m(Le,`btn btn-sm join-item ${w.value===`critical`?`btn-info`:`btn-outline`}`)}),a(Le,`click`,()=>{w.value=`critical`}),t(Le,l(`故障`));let Re=h(`div`,W);t(W,Re),m(Re,`badge badge-info badge-outline`),t(Re,l(`当前分支: `));let ze=o(Re);t(Re,ze),r(()=>{s(ze,w.value)});let Be=h(`div`,W);t(W,Be),m(Be,`grid gap-3 md:grid-cols-2`);let Ve=v(`rue:slot:anchor`);t(Be,Ve),r(()=>{let e=w.value===`healthy`?u(()=>{let e=d(),n=v(`rue:component:anchor`);return t(e,n),f(g(T,{children:u(()=>{let e=d(),n=v(`rue:component:anchor`);t(e,n),f(g(E,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,n);let r=v(`rue:component:anchor`);return t(e,r),f(g(E,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,r),e})}),e,n),e}):w.value===`warning`?u(()=>{let e=d(),n=v(`rue:component:anchor`);return t(e,n),f(g(T,{children:u(()=>{let e=d(),n=v(`rue:component:anchor`);t(e,n),f(g(E,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,n);let r=v(`rue:component:anchor`);return t(e,r),f(g(E,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,r),e})}),e,n),e}):u(()=>{let e=d(),n=v(`rue:component:anchor`);return t(e,n),f(g(T,{children:u(()=>{let e=d(),n=v(`rue:component:anchor`);t(e,n),f(g(E,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,n);let r=v(`rue:component:anchor`);return t(e,r),f(g(E,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,r),e})}),e,n),e});_(()=>f(e,Be,Ve))});let J=h(`div`,A);t(A,J),m(J,`grid gap-4 xl:grid-cols-2`);let Y=h(`section`,J);t(J,Y),m(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=h(`div`,Y);t(Y,He);let X=h(`h3`,He);t(He,X),m(X,`font-semibold`),t(X,l(`显式 `));let Ue=o(X);t(X,Ue),s(Ue,`<Template slot="header">`),t(X,l(` 命名片段`));let We=h(`p`,He);t(He,We),m(We,`text-sm opacity-70`),t(We,l(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=v(`rue:component:anchor`);t(Y,Ge);let Ke=u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`grid gap-3 md:grid-cols-2`);let i=v(`rue:component:anchor`);t(n,i),r(()=>{let e=g(E,{title:k.head.title,meta:k.head.meta,tone:`base`});_(()=>f(e,n,i))});let a=v(`rue:slot:anchor`);t(n,a),r(()=>{let e=y.value?u(()=>{let e=d(),n=v(`rue:component:anchor`);return t(e,n),f(g(T,{children:u(()=>{let e=d(),n=v(`rue:component:anchor`);t(e,n),f(g(E,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,n);let r=v(`rue:component:anchor`);return t(e,r),f(g(E,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,r),e})}),e,n),e}):``;_(()=>f(e,n,a))});let o=v(`rue:component:anchor`);return t(n,o),r(()=>{let e=g(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});_(()=>f(e,n,o))}),e}),qe=u(()=>{let e=d(),n=h(`div`,e);t(e,n);let i=h(`div`,n);t(n,i),m(i,`badge badge-secondary badge-outline`),t(i,l(`named slot`));let a=h(`h4`,n);t(n,a),m(a,`mt-2 text-lg font-semibold`);let c=o(a);t(a,c),r(()=>{s(c,x.value===`ops`?`运维场景面板`:`增长场景面板`)});let u=h(`p`,n);return t(n,u),m(u,`text-sm opacity-70`),t(u,l(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),e}),Je=u(()=>{let e=d(),n=h(`div`,e);t(e,n),m(n,`join`);let i=h(`button`,n);t(n,i),r(()=>{m(i,`btn btn-sm join-item ${x.value===`ops`?`btn-primary`:``}`)}),a(i,`click`,()=>{x.value=`ops`}),t(i,l(`运维`));let c=h(`button`,n);t(n,c),r(()=>{m(c,`btn btn-sm join-item ${x.value===`growth`?`btn-primary`:``}`)}),a(c,`click`,()=>{x.value=`growth`}),t(c,l(`增长`));let u=h(`button`,e);t(e,u),r(()=>{m(u,`btn btn-sm ${y.value?`btn-secondary`:`btn-outline`}`)}),a(u,`click`,()=>{y.value=!y.value});let f=o(u);return t(u,f),r(()=>{s(f,y.value?`隐藏摘要`:`显示摘要`)}),e});r(()=>{let e=g(re,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});_(()=>f(e,Y,Ge))});let Z=h(`section`,J);t(J,Z),m(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=h(`div`,Z);t(Z,Q);let $=h(`h3`,Q);t(Q,$),m($,`font-semibold`),t($,l(`显式 `));let Ye=o($);t($,Ye),s(Ye,`<Template>`),t($,l(` 列表片段`));let Xe=h(`p`,Q);t(Q,Xe),m(Xe,`text-sm opacity-70`),t(Xe,l(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=h(`ul`,Z);t(Z,Ze),m(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=v(`rue:list:start`),$e=v(`rue:list:end`);t(Ze,Qe),t(Ze,$e);let et=new Map;return r(()=>{et=te({items:ie||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(e,n,i,a,o)=>{let s=u(()=>{let n=d(),i=h(`li`,n);t(n,i),m(i,`list-row items-start gap-3`);let a=h(`div`,i);t(i,a),m(a,`list-col-grow`);let o=h(`div`,a);t(a,o),m(o,`font-medium`);let s=v(`rue:slot:anchor`);t(o,s),r(()=>{let t=e.title;_(()=>f(t,o,s))});let c=h(`div`,a);t(a,c),m(c,`text-sm opacity-70`);let u=v(`rue:slot:anchor`);t(c,u),r(()=>{let t=e.meta;_(()=>f(t,c,u))});let p=h(`span`,i);t(i,p),m(p,`badge badge-outline whitespace-nowrap`);let ee=v(`rue:slot:anchor`);t(p,ee),r(()=>{let t=e.status;_(()=>f(t,p,ee))});let g=h(`li`,n);return t(n,g),m(g,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),t(g,l(`同一条数据额外展开的第二个兄弟节点`)),n});ee(g(T,{key:e.id,children:s}),n,i,a)}})}),e}):``;_(()=>f(i,O,oe))}),i})}),p,b),p})};export{k as default};
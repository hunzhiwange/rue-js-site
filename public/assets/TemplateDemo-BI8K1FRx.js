import{$ as e,Ht as t,I as n,J as r,Lt as i,M as a,Q as o,X as s,Xt as c,Z as l,at as u,c as d,et as f,l as p,pt as m,q as h,qt as g,s as _,st as v,t as y}from"./vapor-runtime-iQZthBPQ.js";import{a as b,n as ee}from"./vapor-helpers-vapor-BjKHCvOa.js";import{o as x}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as S}from"./Code-CZqShVUj.js";import{r as C}from"./SidebarPlaygroundExample-5H7RL-T7.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=e=>n(()=>{let t=l(),n=s(`rue-template-anchor`);return r(t,n),a(w(e.children),t,n),t}),E={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=e=>p(n=>{let i=o(`article`,n);c(()=>{v(i,E[e.tone??`base`])});let a=o(`h3`,i);r(i,a),v(a,`font-semibold`);let l=s(`rue:slot:anchor`);r(a,l),c(()=>{let n=e.title;t(()=>_(n,a,l))});let u=o(`p`,i);r(i,u),v(u,`mt-2 text-sm opacity-70`);let d=s(`rue:slot:anchor`);return r(u,d),c(()=>{let n=e.meta;t(()=>_(n,u,d))}),i}),te=n=>p(i=>{let a=o(`section`,i);v(a,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let l=o(`div`,a);r(a,l),v(l,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let u=o(`div`,l);r(l,u),v(u,`min-w-0 space-y-2`);let d=o(`div`,u);r(u,d),v(d,`text-xs uppercase tracking-[0.22em] opacity-55`),r(d,e(`named slot`));let f=s(`rue:component:anchor`);r(u,f),c(()=>{let e=y(x,{source:n,name:`header`,children:`未提供 header`});t(()=>_(e,u,f))});let p=o(`div`,l);r(l,p),v(p,`flex flex-wrap items-center gap-2`);let m=s(`rue:component:anchor`);r(p,m),c(()=>{let e=y(x,{source:n,name:`actions`});t(()=>_(e,p,m))});let h=o(`div`,a);r(a,h),v(h,`p-4`);let g=s(`rue:component:anchor`);return r(h,g),c(()=>{let e=y(x,{source:n,children:`未提供默认内容`});t(()=>_(e,h,g))}),a}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},ne=()=>{let{activeTab:n,showBurst:a,showSummary:x,mode:w,branchState:E,code:ne,cards:A,feed:re}=b(`useSetup:0:0`,()=>g(()=>{let e=b(`ref:1:0`,()=>i(`preview`)),t=b(`ref:1:1`,()=>i(!0)),n=b(`ref:1:2`,()=>i(!0)),r=b(`ref:1:3`,()=>i(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>i(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[r.value],feed:k[r.value]}}));return p(i=>{let g=l(),b=s(`rue:component:anchor`);return r(g,b),_(y(C,{children:p(()=>{let i=l(),g=o(`h1`,i);r(i,g),v(g,`mb-4 text-5xl font-semibold md:mb-4`),r(g,e(`Template 内置组件`));let b=o(`div`,i);r(i,b),u(b,`role`,`tablist`),v(b,`tabs tabs-box`);let C=o(`button`,b);r(b,C),u(C,`role`,`tab`),c(()=>{v(C,`tab ${n.value===`preview`?`tab-active`:``}`)}),h(C,`click`,()=>{n.value=`preview`}),r(C,e(`效果`));let O=o(`button`,b);r(b,O),u(O,`role`,`tab`),c(()=>{v(O,`tab ${n.value===`code`?`tab-active`:``}`)}),h(O,`click`,()=>{n.value=`code`}),r(O,e(`代码`));let k=o(`div`,i);r(i,k),v(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ie=s(`rue:slot:anchor`);r(k,ie),c(()=>{let e=n.value===`code`?p(()=>{let e=l(),n=o(`div`,e);r(e,n),v(n,`card overflow-auto bg-base-100 shadow`);let i=o(`div`,n);r(n,i),v(i,`card-body p-0`);let a=s(`rue:component:anchor`);return r(i,a),c(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:ne});t(()=>_(e,i,a))}),e}):``;t(()=>_(e,k,ie))}),r(k,e(` `));let ae=s(`rue:slot:anchor`);return r(k,ae),c(()=>{let i=n.value===`preview`?p(()=>{let n=l(),i=o(`div`,n);r(n,i),v(i,`grid gap-6`);let g=o(`div`,i);r(i,g),u(g,`role`,`alert`),v(g,`alert alert-success`);let b=o(`div`,g);r(g,b),v(b,`space-y-2`);let S=o(`div`,b);r(b,S),r(S,e(`这个页面改成了显式导入`));let C=o(`strong`,S);r(S,C);let O=f(C);r(C,O),m(O,`<Template>`),r(S,e(`组件的写法，不再依赖小写 template lowering。`));let k=o(`div`,b);r(b,k),v(k,`text-sm opacity-80`),r(k,e(`当前示例覆盖命名 slot、`));let ne=f(k);r(k,ne),m(ne,`<Template v-if>`),r(k,e(`、 `));let ie=f(k);r(k,ie),m(ie,`<Template v-if / v-else-if / v-else>`);let ae=f(k);r(k,ae),m(ae,` `),r(k,e(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let oe=o(`div`,i);r(i,oe),v(oe,`card bg-base-100 shadow`);let j=o(`div`,oe);r(oe,j),v(j,`card-body gap-4`);let M=o(`div`,j);r(j,M),v(M,`flex flex-wrap items-center justify-between gap-3`);let se=o(`div`,M);r(M,se);let ce=o(`h2`,se);r(se,ce),v(ce,`card-title`),r(ce,e(`切换场景`));let le=o(`p`,se);r(se,le),v(le,`text-sm opacity-70`),r(le,e(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=o(`div`,M);r(M,N),v(N,`flex flex-wrap gap-3`);let P=o(`div`,N);r(N,P),v(P,`join`);let ue=o(`button`,P);r(P,ue),c(()=>{v(ue,`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`)}),h(ue,`click`,()=>{w.value=`ops`}),r(ue,e(`运维`));let de=o(`button`,P);r(P,de),c(()=>{v(de,`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`)}),h(de,`click`,()=>{w.value=`growth`}),r(de,e(`增长`));let F=o(`button`,N);r(N,F),c(()=>{v(F,`btn btn-sm ${a.value?`btn-secondary`:`btn-outline`}`)}),h(F,`click`,()=>{a.value=!a.value});let fe=f(F);r(F,fe),c(()=>{m(fe,a.value?`隐藏中间卡片`:`显示中间卡片`)});let I=o(`div`,j);r(j,I),v(I,`grid gap-4 xl:grid-cols-2`);let L=o(`section`,I);r(I,L),v(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=o(`div`,L);r(L,R),v(R,`flex flex-wrap items-center justify-between gap-2`);let pe=o(`div`,R);r(R,pe);let me=o(`h3`,pe);r(pe,me),v(me,`font-semibold`),r(me,e(`普通 div 包裹`));let he=o(`p`,pe);r(pe,he),v(he,`text-sm opacity-70`),r(he,e(`中间两张卡片会先进入一个额外 grid item。`));let ge=o(`span`,R);r(R,ge),v(ge,`badge badge-warning badge-outline`),r(ge,e(`直接网格项: `));let _e=f(ge);r(ge,_e),c(()=>{m(_e,a.value?3:2)});let z=o(`div`,L);r(L,z),v(z,`grid gap-3 md:grid-cols-2`);let ve=s(`rue:component:anchor`);r(z,ve),c(()=>{let e=y(D,{title:A.head.title,meta:A.head.meta,tone:`base`});t(()=>_(e,z,ve))});let ye=s(`rue:slot:anchor`);r(z,ye),c(()=>{let e=a.value?p(()=>{let e=l(),n=o(`div`,e);r(e,n),v(n,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let i=s(`rue:component:anchor`);r(n,i),c(()=>{let e=y(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});t(()=>_(e,n,i))});let a=s(`rue:component:anchor`);return r(n,a),c(()=>{let e=y(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});t(()=>_(e,n,a))}),e}):``;t(()=>_(e,z,ye))});let be=s(`rue:component:anchor`);r(z,be),c(()=>{let e=y(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});t(()=>_(e,z,be))});let B=o(`section`,I);r(I,B),v(B,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let V=o(`div`,B);r(B,V),v(V,`flex flex-wrap items-center justify-between gap-2`);let xe=o(`div`,V);r(V,xe);let H=o(`h3`,xe);r(xe,H),v(H,`font-semibold`),r(H,e(`显式 `));let Se=f(H);r(H,Se),m(Se,`<Template v-if>`),r(H,e(` 条件片段`));let Ce=o(`p`,xe);r(xe,Ce),v(Ce,`text-sm opacity-70`),r(Ce,e(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let we=o(`span`,V);r(V,we),v(we,`badge badge-success badge-outline`),r(we,e(`直接网格项: `));let Te=f(we);r(we,Te),c(()=>{m(Te,a.value?4:2)});let U=o(`div`,B);r(B,U),v(U,`grid gap-3 md:grid-cols-2`);let Ee=s(`rue:component:anchor`);r(U,Ee),c(()=>{let e=y(D,{title:A.head.title,meta:A.head.meta,tone:`base`});t(()=>_(e,U,Ee))});let De=s(`rue:slot:anchor`);r(U,De),c(()=>{let e=a.value?p(()=>{let e=l(),n=s(`rue:component:anchor`);return r(e,n),_(y(T,{children:p(()=>{let e=l(),n=s(`rue:component:anchor`);r(e,n),c(()=>{let r=y(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});t(()=>_(r,e,n))});let i=s(`rue:component:anchor`);return r(e,i),c(()=>{let n=y(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});t(()=>_(n,e,i))}),e})}),e,n),e}):``;t(()=>_(e,U,De))});let Oe=s(`rue:component:anchor`);r(U,Oe),c(()=>{let e=y(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});t(()=>_(e,U,Oe))});let W=o(`section`,j);r(j,W),v(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=o(`div`,W);r(W,G),v(G,`flex flex-wrap items-center justify-between gap-3`);let ke=o(`div`,G);r(G,ke);let K=o(`h3`,ke);r(ke,K),v(K,`font-semibold`),r(K,e(`显式 `));let Ae=f(K);r(K,Ae),m(Ae,`<Template v-if>`),r(K,e(` / `));let je=f(K);r(K,je),m(je,`<Template v-else-if>`),r(K,e(` / `));let Me=f(K);r(K,Me),m(Me,`<Template v-else>`);let Ne=f(K);r(K,Ne),m(Ne,` `),r(K,e(`分支链`));let Pe=o(`p`,ke);r(ke,Pe),v(Pe,`text-sm opacity-70`),r(Pe,e(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=o(`div`,G);r(G,q),v(q,`join`);let Fe=o(`button`,q);r(q,Fe),c(()=>{v(Fe,`btn btn-sm join-item ${E.value===`healthy`?`btn-info`:`btn-outline`}`)}),h(Fe,`click`,()=>{E.value=`healthy`}),r(Fe,e(`健康`));let Ie=o(`button`,q);r(q,Ie),c(()=>{v(Ie,`btn btn-sm join-item ${E.value===`warning`?`btn-info`:`btn-outline`}`)}),h(Ie,`click`,()=>{E.value=`warning`}),r(Ie,e(`预警`));let Le=o(`button`,q);r(q,Le),c(()=>{v(Le,`btn btn-sm join-item ${E.value===`critical`?`btn-info`:`btn-outline`}`)}),h(Le,`click`,()=>{E.value=`critical`}),r(Le,e(`故障`));let Re=o(`div`,W);r(W,Re),v(Re,`badge badge-info badge-outline`),r(Re,e(`当前分支: `));let ze=f(Re);r(Re,ze),c(()=>{m(ze,E.value)});let Be=o(`div`,W);r(W,Be),v(Be,`grid gap-3 md:grid-cols-2`);let Ve=s(`rue:slot:anchor`);r(Be,Ve),c(()=>{let e=E.value===`healthy`?p(()=>{let e=l(),t=s(`rue:component:anchor`);return r(e,t),_(y(T,{children:p(()=>{let e=l(),t=s(`rue:component:anchor`);r(e,t),_(y(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let n=s(`rue:component:anchor`);return r(e,n),_(y(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,n),e})}),e,t),e}):E.value===`warning`?p(()=>{let e=l(),t=s(`rue:component:anchor`);return r(e,t),_(y(T,{children:p(()=>{let e=l(),t=s(`rue:component:anchor`);r(e,t),_(y(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let n=s(`rue:component:anchor`);return r(e,n),_(y(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,n),e})}),e,t),e}):p(()=>{let e=l(),t=s(`rue:component:anchor`);return r(e,t),_(y(T,{children:p(()=>{let e=l(),t=s(`rue:component:anchor`);r(e,t),_(y(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let n=s(`rue:component:anchor`);return r(e,n),_(y(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,n),e})}),e,t),e});t(()=>_(e,Be,Ve))});let J=o(`div`,j);r(j,J),v(J,`grid gap-4 xl:grid-cols-2`);let Y=o(`section`,J);r(J,Y),v(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=o(`div`,Y);r(Y,He);let X=o(`h3`,He);r(He,X),v(X,`font-semibold`),r(X,e(`显式 `));let Ue=f(X);r(X,Ue),m(Ue,`<Template slot="header">`),r(X,e(` 命名片段`));let We=o(`p`,He);r(He,We),v(We,`text-sm opacity-70`),r(We,e(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=s(`rue:component:anchor`);r(Y,Ge);let Ke=p(()=>{let e=l(),n=o(`div`,e);r(e,n),v(n,`grid gap-3 md:grid-cols-2`);let i=s(`rue:component:anchor`);r(n,i),c(()=>{let e=y(D,{title:A.head.title,meta:A.head.meta,tone:`base`});t(()=>_(e,n,i))});let a=s(`rue:slot:anchor`);r(n,a),c(()=>{let e=x.value?p(()=>{let e=l(),t=s(`rue:component:anchor`);return r(e,t),_(y(T,{children:p(()=>{let e=l(),t=s(`rue:component:anchor`);r(e,t),_(y(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let n=s(`rue:component:anchor`);return r(e,n),_(y(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,n),e})}),e,t),e}):``;t(()=>_(e,n,a))});let u=s(`rue:component:anchor`);return r(n,u),c(()=>{let e=y(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});t(()=>_(e,n,u))}),e}),qe=p(()=>{let t=l(),n=o(`div`,t);r(t,n);let i=o(`div`,n);r(n,i),v(i,`badge badge-secondary badge-outline`),r(i,e(`named slot`));let a=o(`h4`,n);r(n,a),v(a,`mt-2 text-lg font-semibold`);let s=f(a);r(a,s),c(()=>{m(s,w.value===`ops`?`运维场景面板`:`增长场景面板`)});let u=o(`p`,n);return r(n,u),v(u,`text-sm opacity-70`),r(u,e(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),t}),Je=p(()=>{let t=l(),n=o(`div`,t);r(t,n),v(n,`join`);let i=o(`button`,n);r(n,i),c(()=>{v(i,`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`)}),h(i,`click`,()=>{w.value=`ops`}),r(i,e(`运维`));let a=o(`button`,n);r(n,a),c(()=>{v(a,`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`)}),h(a,`click`,()=>{w.value=`growth`}),r(a,e(`增长`));let s=o(`button`,t);r(t,s),c(()=>{v(s,`btn btn-sm ${x.value?`btn-secondary`:`btn-outline`}`)}),h(s,`click`,()=>{x.value=!x.value});let u=f(s);return r(s,u),c(()=>{m(u,x.value?`隐藏摘要`:`显示摘要`)}),t});c(()=>{let e=y(te,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});t(()=>_(e,Y,Ge))});let Z=o(`section`,J);r(J,Z),v(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=o(`div`,Z);r(Z,Q);let $=o(`h3`,Q);r(Q,$),v($,`font-semibold`),r($,e(`显式 `));let Ye=f($);r($,Ye),m(Ye,`<Template>`),r($,e(` 列表片段`));let Xe=o(`p`,Q);r(Q,Xe),v(Xe,`text-sm opacity-70`),r(Xe,e(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=o(`ul`,Z);r(Z,Ze),v(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=s(`rue:list:start`),$e=s(`rue:list:end`);r(Ze,Qe),r(Ze,$e);let et=new Map;return c(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(n,i,a,u,f)=>{let m=p(()=>{let i=l(),a=o(`li`,i);r(i,a),v(a,`list-row items-start gap-3`);let u=o(`div`,a);r(a,u),v(u,`list-col-grow`);let d=o(`div`,u);r(u,d),v(d,`font-medium`);let f=s(`rue:slot:anchor`);r(d,f),c(()=>{let e=n.title;t(()=>_(e,d,f))});let p=o(`div`,u);r(u,p),v(p,`text-sm opacity-70`);let m=s(`rue:slot:anchor`);r(p,m),c(()=>{let e=n.meta;t(()=>_(e,p,m))});let h=o(`span`,a);r(a,h),v(h,`badge badge-outline whitespace-nowrap`);let g=s(`rue:slot:anchor`);r(h,g),c(()=>{let e=n.status;t(()=>_(e,h,g))});let y=o(`li`,i);return r(i,y),v(y,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),r(y,e(`同一条数据额外展开的第二个兄弟节点`)),i});d(y(T,{key:n.id,children:m}),i,a,u)}})}),n}):``;t(()=>_(i,k,ae))}),i})}),g,b),g})};export{ne as default};
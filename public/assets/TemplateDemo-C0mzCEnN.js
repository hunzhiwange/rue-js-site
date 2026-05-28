import{$ as e,H as t,J as n,Kt as r,Lt as i,Q as a,R as o,Vt as s,Y as c,Yt as l,Z as u,ct as d,d as f,et as p,l as m,mt as h,ot as g,t as _,tt as v,u as y}from"./vapor-runtime-BR_2rwNk.js";import{a as b,n as ee}from"./vapor-helpers-vapor-DkadWylb.js";import{a as x}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as S}from"./Code-B_4lzH85.js";import{t as C}from"./SidebarPlaygroundExample-CtM-WHq_.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=e=>t(()=>{let t=a(),n=u(`rue-template-anchor`);return c(t,n),o(w(e.children),t,n),t}),E={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=t=>f(n=>{let r=e(`article`,n);l(()=>{d(r,String(E[t.tone??`base`]))});let i=e(`h3`,r);c(r,i),d(i,`font-semibold`);let a=u(`rue:slot:anchor`);c(i,a),l(()=>{let e=t.title;s(()=>m(e,i,a))});let o=e(`p`,r);c(r,o),d(o,`mt-2 text-sm opacity-70`);let f=u(`rue:slot:anchor`);return c(o,f),l(()=>{let e=t.meta;s(()=>m(e,o,f))}),r}),te=t=>f(n=>{let r=e(`section`,n);d(r,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let i=e(`div`,r);c(r,i),d(i,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let a=e(`div`,i);c(i,a),d(a,`min-w-0 space-y-2`);let o=e(`div`,a);c(a,o),d(o,`text-xs uppercase tracking-[0.22em] opacity-55`),c(o,p(`named slot`));let f=u(`rue:component:anchor`);c(a,f),l(()=>{let e=_(x,{source:t,name:`header`,children:`未提供 header`});s(()=>m(e,a,f))});let h=e(`div`,i);c(i,h),d(h,`flex flex-wrap items-center gap-2`);let g=u(`rue:component:anchor`);c(h,g),l(()=>{let e=_(x,{source:t,name:`actions`});s(()=>m(e,h,g))});let v=e(`div`,r);c(r,v),d(v,`p-4`);let y=u(`rue:component:anchor`);return c(v,y),l(()=>{let e=_(x,{source:t,children:`未提供默认内容`});s(()=>m(e,v,y))}),r}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},ne=()=>{let{activeTab:t,showBurst:o,showSummary:x,mode:w,branchState:E,code:ne,cards:A,feed:re}=b(`useSetup:0:0`,()=>r(()=>{let e=b(`ref:1:0`,()=>i(`preview`)),t=b(`ref:1:1`,()=>i(!0)),n=b(`ref:1:2`,()=>i(!0)),r=b(`ref:1:3`,()=>i(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>i(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[r.value],feed:k[r.value]}}));return f(r=>{let i=a(),b=u(`rue:component:anchor`);return c(i,b),m(_(C,{children:f(()=>{let r=a(),i=e(`h1`,r);c(r,i),d(i,`mb-4 text-5xl font-semibold md:mb-4`),c(i,p(`Template 内置组件`));let b=e(`div`,r);c(r,b),g(b,`role`,`tablist`),d(b,`tabs tabs-box`);let C=e(`button`,b);c(b,C),g(C,`role`,`tab`),l(()=>{d(C,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),n(C,`click`,()=>{t.value=`preview`}),c(C,p(`效果`));let O=e(`button`,b);c(b,O),g(O,`role`,`tab`),l(()=>{d(O,String(`tab ${t.value===`code`?`tab-active`:``}`))}),n(O,`click`,()=>{t.value=`code`}),c(O,p(`代码`));let k=e(`div`,r);c(r,k),d(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ie=u(`rue:slot:anchor`);c(k,ie),l(()=>{let n=t.value===`code`?f(()=>{let t=a(),n=e(`div`,t);c(t,n),d(n,`card overflow-auto bg-base-100 shadow`);let r=e(`div`,n);c(n,r),d(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=_(S,{className:`h-full`,lang:`tsx`,code:ne});s(()=>m(e,r,i))}),t}):``;s(()=>m(n,k,ie))}),c(k,p(` `));let ae=u(`rue:slot:anchor`);return c(k,ae),l(()=>{let r=t.value===`preview`?f(()=>{let t=a(),r=e(`div`,t);c(t,r),d(r,`grid gap-6`);let i=e(`div`,r);c(r,i),g(i,`role`,`alert`),d(i,`alert alert-success`);let b=e(`div`,i);c(i,b),d(b,`space-y-2`);let S=e(`div`,b);c(b,S),c(S,p(`这个页面改成了显式导入`));let C=e(`strong`,S);c(S,C);let O=v(C);c(C,O),h(O,`<Template>`),c(S,p(`组件的写法，不再依赖小写 template lowering。`));let k=e(`div`,b);c(b,k),d(k,`text-sm opacity-80`),c(k,p(`当前示例覆盖命名 slot、`));let ne=v(k);c(k,ne),h(ne,`<Template v-if>`),c(k,p(`、 `));let ie=v(k);c(k,ie),h(ie,`<Template v-if / v-else-if / v-else>`);let ae=v(k);c(k,ae),h(ae,` `),c(k,p(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let oe=e(`div`,r);c(r,oe),d(oe,`card bg-base-100 shadow`);let j=e(`div`,oe);c(oe,j),d(j,`card-body gap-4`);let M=e(`div`,j);c(j,M),d(M,`flex flex-wrap items-center justify-between gap-3`);let se=e(`div`,M);c(M,se);let ce=e(`h2`,se);c(se,ce),d(ce,`card-title`),c(ce,p(`切换场景`));let le=e(`p`,se);c(se,le),d(le,`text-sm opacity-70`),c(le,p(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=e(`div`,M);c(M,N),d(N,`flex flex-wrap gap-3`);let P=e(`div`,N);c(N,P),d(P,`join`);let ue=e(`button`,P);c(P,ue),l(()=>{d(ue,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),n(ue,`click`,()=>{w.value=`ops`}),c(ue,p(`运维`));let de=e(`button`,P);c(P,de),l(()=>{d(de,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),n(de,`click`,()=>{w.value=`growth`}),c(de,p(`增长`));let F=e(`button`,N);c(N,F),l(()=>{d(F,String(`btn btn-sm ${o.value?`btn-secondary`:`btn-outline`}`))}),n(F,`click`,()=>{o.value=!o.value});let fe=v(F);c(F,fe),l(()=>{h(fe,o.value?`隐藏中间卡片`:`显示中间卡片`)});let I=e(`div`,j);c(j,I),d(I,`grid gap-4 xl:grid-cols-2`);let L=e(`section`,I);c(I,L),d(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=e(`div`,L);c(L,R),d(R,`flex flex-wrap items-center justify-between gap-2`);let pe=e(`div`,R);c(R,pe);let me=e(`h3`,pe);c(pe,me),d(me,`font-semibold`),c(me,p(`普通 div 包裹`));let he=e(`p`,pe);c(pe,he),d(he,`text-sm opacity-70`),c(he,p(`中间两张卡片会先进入一个额外 grid item。`));let ge=e(`span`,R);c(R,ge),d(ge,`badge badge-warning badge-outline`),c(ge,p(`直接网格项: `));let _e=v(ge);c(ge,_e),l(()=>{h(_e,o.value?3:2)});let z=e(`div`,L);c(L,z),d(z,`grid gap-3 md:grid-cols-2`);let ve=u(`rue:component:anchor`);c(z,ve),l(()=>{let e=_(D,{title:A.head.title,meta:A.head.meta,tone:`base`});s(()=>m(e,z,ve))});let ye=u(`rue:slot:anchor`);c(z,ye),l(()=>{let t=o.value?f(()=>{let t=a(),n=e(`div`,t);c(t,n),d(n,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let r=u(`rue:component:anchor`);c(n,r),l(()=>{let e=_(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});s(()=>m(e,n,r))});let i=u(`rue:component:anchor`);return c(n,i),l(()=>{let e=_(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});s(()=>m(e,n,i))}),t}):``;s(()=>m(t,z,ye))});let be=u(`rue:component:anchor`);c(z,be),l(()=>{let e=_(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});s(()=>m(e,z,be))});let B=e(`section`,I);c(I,B),d(B,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let V=e(`div`,B);c(B,V),d(V,`flex flex-wrap items-center justify-between gap-2`);let xe=e(`div`,V);c(V,xe);let H=e(`h3`,xe);c(xe,H),d(H,`font-semibold`),c(H,p(`显式 `));let Se=v(H);c(H,Se),h(Se,`<Template v-if>`),c(H,p(` 条件片段`));let Ce=e(`p`,xe);c(xe,Ce),d(Ce,`text-sm opacity-70`),c(Ce,p(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let we=e(`span`,V);c(V,we),d(we,`badge badge-success badge-outline`),c(we,p(`直接网格项: `));let Te=v(we);c(we,Te),l(()=>{h(Te,o.value?4:2)});let U=e(`div`,B);c(B,U),d(U,`grid gap-3 md:grid-cols-2`);let Ee=u(`rue:component:anchor`);c(U,Ee),l(()=>{let e=_(D,{title:A.head.title,meta:A.head.meta,tone:`base`});s(()=>m(e,U,Ee))});let De=u(`rue:slot:anchor`);c(U,De),l(()=>{let e=o.value?f(()=>{let e=a(),t=u(`rue:component:anchor`);return c(e,t),m(_(T,{children:f(()=>{let e=a(),t=u(`rue:component:anchor`);c(e,t),l(()=>{let n=_(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});s(()=>m(n,e,t))});let n=u(`rue:component:anchor`);return c(e,n),l(()=>{let t=_(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});s(()=>m(t,e,n))}),e})}),e,t),e}):``;s(()=>m(e,U,De))});let Oe=u(`rue:component:anchor`);c(U,Oe),l(()=>{let e=_(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});s(()=>m(e,U,Oe))});let W=e(`section`,j);c(j,W),d(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=e(`div`,W);c(W,G),d(G,`flex flex-wrap items-center justify-between gap-3`);let ke=e(`div`,G);c(G,ke);let K=e(`h3`,ke);c(ke,K),d(K,`font-semibold`),c(K,p(`显式 `));let Ae=v(K);c(K,Ae),h(Ae,`<Template v-if>`),c(K,p(` / `));let je=v(K);c(K,je),h(je,`<Template v-else-if>`),c(K,p(` / `));let Me=v(K);c(K,Me),h(Me,`<Template v-else>`);let Ne=v(K);c(K,Ne),h(Ne,` `),c(K,p(`分支链`));let Pe=e(`p`,ke);c(ke,Pe),d(Pe,`text-sm opacity-70`),c(Pe,p(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=e(`div`,G);c(G,q),d(q,`join`);let Fe=e(`button`,q);c(q,Fe),l(()=>{d(Fe,String(`btn btn-sm join-item ${E.value===`healthy`?`btn-info`:`btn-outline`}`))}),n(Fe,`click`,()=>{E.value=`healthy`}),c(Fe,p(`健康`));let Ie=e(`button`,q);c(q,Ie),l(()=>{d(Ie,String(`btn btn-sm join-item ${E.value===`warning`?`btn-info`:`btn-outline`}`))}),n(Ie,`click`,()=>{E.value=`warning`}),c(Ie,p(`预警`));let Le=e(`button`,q);c(q,Le),l(()=>{d(Le,String(`btn btn-sm join-item ${E.value===`critical`?`btn-info`:`btn-outline`}`))}),n(Le,`click`,()=>{E.value=`critical`}),c(Le,p(`故障`));let Re=e(`div`,W);c(W,Re),d(Re,`badge badge-info badge-outline`),c(Re,p(`当前分支: `));let ze=v(Re);c(Re,ze),l(()=>{h(ze,E.value)});let Be=e(`div`,W);c(W,Be),d(Be,`grid gap-3 md:grid-cols-2`);let Ve=u(`rue:slot:anchor`);c(Be,Ve),l(()=>{let e=E.value===`healthy`?f(()=>{let e=a(),t=u(`rue:component:anchor`);return c(e,t),m(_(T,{children:f(()=>{let e=a(),t=u(`rue:component:anchor`);c(e,t),m(_(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let n=u(`rue:component:anchor`);return c(e,n),m(_(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,n),e})}),e,t),e}):E.value===`warning`?f(()=>{let e=a(),t=u(`rue:component:anchor`);return c(e,t),m(_(T,{children:f(()=>{let e=a(),t=u(`rue:component:anchor`);c(e,t),m(_(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let n=u(`rue:component:anchor`);return c(e,n),m(_(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,n),e})}),e,t),e}):f(()=>{let e=a(),t=u(`rue:component:anchor`);return c(e,t),m(_(T,{children:f(()=>{let e=a(),t=u(`rue:component:anchor`);c(e,t),m(_(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let n=u(`rue:component:anchor`);return c(e,n),m(_(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,n),e})}),e,t),e});s(()=>m(e,Be,Ve))});let J=e(`div`,j);c(j,J),d(J,`grid gap-4 xl:grid-cols-2`);let Y=e(`section`,J);c(J,Y),d(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=e(`div`,Y);c(Y,He);let X=e(`h3`,He);c(He,X),d(X,`font-semibold`),c(X,p(`显式 `));let Ue=v(X);c(X,Ue),h(Ue,`<Template slot="...">`),c(X,p(` 命名片段`));let We=e(`p`,He);c(He,We),d(We,`text-sm opacity-70`),c(We,p(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=u(`rue:component:anchor`);c(Y,Ge);let Ke=f(()=>{let t=a(),n=e(`div`,t);c(t,n),d(n,`grid gap-3 md:grid-cols-2`);let r=u(`rue:component:anchor`);c(n,r),l(()=>{let e=_(D,{title:A.head.title,meta:A.head.meta,tone:`base`});s(()=>m(e,n,r))});let i=u(`rue:slot:anchor`);c(n,i),l(()=>{let e=x.value?f(()=>{let e=a(),t=u(`rue:component:anchor`);return c(e,t),m(_(T,{children:f(()=>{let e=a(),t=u(`rue:component:anchor`);c(e,t),m(_(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let n=u(`rue:component:anchor`);return c(e,n),m(_(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,n),e})}),e,t),e}):``;s(()=>m(e,n,i))});let o=u(`rue:component:anchor`);return c(n,o),l(()=>{let e=_(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});s(()=>m(e,n,o))}),t}),qe=f(()=>{let t=a(),n=e(`div`,t);c(t,n);let r=e(`div`,n);c(n,r),d(r,`badge badge-secondary badge-outline`),c(r,p(`named slot`));let i=e(`h4`,n);c(n,i),d(i,`mt-2 text-lg font-semibold`);let o=v(i);c(i,o),l(()=>{h(o,w.value===`ops`?`运维场景面板`:`增长场景面板`)});let s=e(`p`,n);return c(n,s),d(s,`text-sm opacity-70`),c(s,p(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),t}),Je=f(()=>{let t=a(),r=e(`div`,t);c(t,r),d(r,`join`);let i=e(`button`,r);c(r,i),l(()=>{d(i,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),n(i,`click`,()=>{w.value=`ops`}),c(i,p(`运维`));let o=e(`button`,r);c(r,o),l(()=>{d(o,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),n(o,`click`,()=>{w.value=`growth`}),c(o,p(`增长`));let s=e(`button`,t);c(t,s),l(()=>{d(s,String(`btn btn-sm ${x.value?`btn-secondary`:`btn-outline`}`))}),n(s,`click`,()=>{x.value=!x.value});let u=v(s);return c(s,u),l(()=>{h(u,x.value?`隐藏摘要`:`显示摘要`)}),t});l(()=>{let e=_(te,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});s(()=>m(e,Y,Ge))});let Z=e(`section`,J);c(J,Z),d(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=e(`div`,Z);c(Z,Q);let $=e(`h3`,Q);c(Q,$),d($,`font-semibold`),c($,p(`显式 `));let Ye=v($);c($,Ye),h(Ye,`<Template>`),c($,p(` 列表片段`));let Xe=e(`p`,Q);c(Q,Xe),d(Xe,`text-sm opacity-70`),c(Xe,p(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=e(`ul`,Z);c(Z,Ze),d(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=u(`rue:list:start`),$e=u(`rue:list:end`);c(Ze,Qe),c(Ze,$e);let et=new Map;return l(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(t,n,r,i,o)=>{let h=f(()=>{let n=a(),r=e(`li`,n);c(n,r),d(r,`list-row items-start gap-3`);let i=e(`div`,r);c(r,i),d(i,`list-col-grow`);let o=e(`div`,i);c(i,o),d(o,`font-medium`);let f=u(`rue:slot:anchor`);c(o,f),l(()=>{let e=t.title;s(()=>m(e,o,f))});let h=e(`div`,i);c(i,h),d(h,`text-sm opacity-70`);let g=u(`rue:slot:anchor`);c(h,g),l(()=>{let e=t.meta;s(()=>m(e,h,g))});let _=e(`span`,r);c(r,_),d(_,`badge badge-outline whitespace-nowrap`);let v=u(`rue:slot:anchor`);c(_,v),l(()=>{let e=t.status;s(()=>m(e,_,v))});let y=e(`li`,n);return c(n,y),d(y,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),c(y,p(`同一条数据额外展开的第二个兄弟节点`)),n});y(_(T,{key:t.id,children:h}),n,r,i)}})}),t}):``;s(()=>m(r,k,ae))}),r})}),i,b),i})};export{ne as default};
import{$ as e,J as t,Kt as n,L as r,Lt as i,N as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,c as d,ct as f,et as p,l as m,mt as h,ot as g,s as _,t as v,tt as y}from"./vapor-runtime-DHPuOjqh.js";import{a as b,n as ee}from"./vapor-helpers-vapor-CJFAWine.js";import{o as x}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as S}from"./Code-Ds9lKLk6.js";import{t as C}from"./SidebarPlaygroundExample-KML-rOvA.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=e=>r(()=>{let t=o(),n=u(`rue-template-anchor`);return c(t,n),a(w(e.children),t,n),t}),E={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=t=>m(n=>{let r=e(`article`,n);l(()=>{f(r,String(E[t.tone??`base`]))});let i=e(`h3`,r);c(r,i),f(i,`font-semibold`);let a=u(`rue:slot:anchor`);c(i,a),l(()=>{let e=t.title;s(()=>_(e,i,a))});let o=e(`p`,r);c(r,o),f(o,`mt-2 text-sm opacity-70`);let d=u(`rue:slot:anchor`);return c(o,d),l(()=>{let e=t.meta;s(()=>_(e,o,d))}),r}),te=t=>m(n=>{let r=e(`section`,n);f(r,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let i=e(`div`,r);c(r,i),f(i,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let a=e(`div`,i);c(i,a),f(a,`min-w-0 space-y-2`);let o=e(`div`,a);c(a,o),f(o,`text-xs uppercase tracking-[0.22em] opacity-55`),c(o,p(`named slot`));let d=u(`rue:component:anchor`);c(a,d),l(()=>{let e=v(x,{source:t,name:`header`,children:`未提供 header`});s(()=>_(e,a,d))});let m=e(`div`,i);c(i,m),f(m,`flex flex-wrap items-center gap-2`);let h=u(`rue:component:anchor`);c(m,h),l(()=>{let e=v(x,{source:t,name:`actions`});s(()=>_(e,m,h))});let g=e(`div`,r);c(r,g),f(g,`p-4`);let y=u(`rue:component:anchor`);return c(g,y),l(()=>{let e=v(x,{source:t,children:`未提供默认内容`});s(()=>_(e,g,y))}),r}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},ne=()=>{let{activeTab:r,showBurst:a,showSummary:x,mode:w,branchState:E,code:ne,cards:A,feed:re}=b(`useSetup:0:0`,()=>n(()=>{let e=b(`ref:1:0`,()=>i(`preview`)),t=b(`ref:1:1`,()=>i(!0)),n=b(`ref:1:2`,()=>i(!0)),r=b(`ref:1:3`,()=>i(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>i(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[r.value],feed:k[r.value]}}));return m(n=>{let i=o(),b=u(`rue:component:anchor`);return c(i,b),_(v(C,{children:m(()=>{let n=o(),i=e(`h1`,n);c(n,i),f(i,`mb-4 text-5xl font-semibold md:mb-4`),c(i,p(`Template 内置组件`));let b=e(`div`,n);c(n,b),g(b,`role`,`tablist`),f(b,`tabs tabs-box`);let C=e(`button`,b);c(b,C),g(C,`role`,`tab`),l(()=>{f(C,String(`tab ${r.value===`preview`?`tab-active`:``}`))}),t(C,`click`,()=>{r.value=`preview`}),c(C,p(`效果`));let O=e(`button`,b);c(b,O),g(O,`role`,`tab`),l(()=>{f(O,String(`tab ${r.value===`code`?`tab-active`:``}`))}),t(O,`click`,()=>{r.value=`code`}),c(O,p(`代码`));let k=e(`div`,n);c(n,k),f(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ie=u(`rue:slot:anchor`);c(k,ie),l(()=>{let t=r.value===`code`?m(()=>{let t=o(),n=e(`div`,t);c(t,n),f(n,`card overflow-auto bg-base-100 shadow`);let r=e(`div`,n);c(n,r),f(r,`card-body p-0`);let i=u(`rue:component:anchor`);return c(r,i),l(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:ne});s(()=>_(e,r,i))}),t}):``;s(()=>_(t,k,ie))}),c(k,p(` `));let ae=u(`rue:slot:anchor`);return c(k,ae),l(()=>{let n=r.value===`preview`?m(()=>{let n=o(),r=e(`div`,n);c(n,r),f(r,`grid gap-6`);let i=e(`div`,r);c(r,i),g(i,`role`,`alert`),f(i,`alert alert-success`);let b=e(`div`,i);c(i,b),f(b,`space-y-2`);let S=e(`div`,b);c(b,S),c(S,p(`这个页面改成了显式导入`));let C=e(`strong`,S);c(S,C);let O=y(C);c(C,O),h(O,`<Template>`),c(S,p(`组件的写法，不再依赖小写 template lowering。`));let k=e(`div`,b);c(b,k),f(k,`text-sm opacity-80`),c(k,p(`当前示例覆盖命名 slot、`));let ne=y(k);c(k,ne),h(ne,`<Template v-if>`),c(k,p(`、 `));let ie=y(k);c(k,ie),h(ie,`<Template v-if / v-else-if / v-else>`);let ae=y(k);c(k,ae),h(ae,` `),c(k,p(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let oe=e(`div`,r);c(r,oe),f(oe,`card bg-base-100 shadow`);let j=e(`div`,oe);c(oe,j),f(j,`card-body gap-4`);let M=e(`div`,j);c(j,M),f(M,`flex flex-wrap items-center justify-between gap-3`);let se=e(`div`,M);c(M,se);let ce=e(`h2`,se);c(se,ce),f(ce,`card-title`),c(ce,p(`切换场景`));let le=e(`p`,se);c(se,le),f(le,`text-sm opacity-70`),c(le,p(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=e(`div`,M);c(M,N),f(N,`flex flex-wrap gap-3`);let P=e(`div`,N);c(N,P),f(P,`join`);let ue=e(`button`,P);c(P,ue),l(()=>{f(ue,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),t(ue,`click`,()=>{w.value=`ops`}),c(ue,p(`运维`));let de=e(`button`,P);c(P,de),l(()=>{f(de,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),t(de,`click`,()=>{w.value=`growth`}),c(de,p(`增长`));let F=e(`button`,N);c(N,F),l(()=>{f(F,String(`btn btn-sm ${a.value?`btn-secondary`:`btn-outline`}`))}),t(F,`click`,()=>{a.value=!a.value});let fe=y(F);c(F,fe),l(()=>{h(fe,a.value?`隐藏中间卡片`:`显示中间卡片`)});let I=e(`div`,j);c(j,I),f(I,`grid gap-4 xl:grid-cols-2`);let L=e(`section`,I);c(I,L),f(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=e(`div`,L);c(L,R),f(R,`flex flex-wrap items-center justify-between gap-2`);let pe=e(`div`,R);c(R,pe);let me=e(`h3`,pe);c(pe,me),f(me,`font-semibold`),c(me,p(`普通 div 包裹`));let he=e(`p`,pe);c(pe,he),f(he,`text-sm opacity-70`),c(he,p(`中间两张卡片会先进入一个额外 grid item。`));let ge=e(`span`,R);c(R,ge),f(ge,`badge badge-warning badge-outline`),c(ge,p(`直接网格项: `));let _e=y(ge);c(ge,_e),l(()=>{h(_e,a.value?3:2)});let z=e(`div`,L);c(L,z),f(z,`grid gap-3 md:grid-cols-2`);let ve=u(`rue:component:anchor`);c(z,ve),l(()=>{let e=v(D,{title:A.head.title,meta:A.head.meta,tone:`base`});s(()=>_(e,z,ve))});let ye=u(`rue:slot:anchor`);c(z,ye),l(()=>{let t=a.value?m(()=>{let t=o(),n=e(`div`,t);c(t,n),f(n,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let r=u(`rue:component:anchor`);c(n,r),l(()=>{let e=v(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});s(()=>_(e,n,r))});let i=u(`rue:component:anchor`);return c(n,i),l(()=>{let e=v(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});s(()=>_(e,n,i))}),t}):``;s(()=>_(t,z,ye))});let be=u(`rue:component:anchor`);c(z,be),l(()=>{let e=v(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});s(()=>_(e,z,be))});let B=e(`section`,I);c(I,B),f(B,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let V=e(`div`,B);c(B,V),f(V,`flex flex-wrap items-center justify-between gap-2`);let xe=e(`div`,V);c(V,xe);let H=e(`h3`,xe);c(xe,H),f(H,`font-semibold`),c(H,p(`显式 `));let Se=y(H);c(H,Se),h(Se,`<Template v-if>`),c(H,p(` 条件片段`));let Ce=e(`p`,xe);c(xe,Ce),f(Ce,`text-sm opacity-70`),c(Ce,p(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let we=e(`span`,V);c(V,we),f(we,`badge badge-success badge-outline`),c(we,p(`直接网格项: `));let Te=y(we);c(we,Te),l(()=>{h(Te,a.value?4:2)});let U=e(`div`,B);c(B,U),f(U,`grid gap-3 md:grid-cols-2`);let Ee=u(`rue:component:anchor`);c(U,Ee),l(()=>{let e=v(D,{title:A.head.title,meta:A.head.meta,tone:`base`});s(()=>_(e,U,Ee))});let De=u(`rue:slot:anchor`);c(U,De),l(()=>{let e=a.value?m(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),_(v(T,{children:m(()=>{let e=o(),t=u(`rue:component:anchor`);c(e,t),l(()=>{let n=v(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});s(()=>_(n,e,t))});let n=u(`rue:component:anchor`);return c(e,n),l(()=>{let t=v(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});s(()=>_(t,e,n))}),e})}),e,t),e}):``;s(()=>_(e,U,De))});let Oe=u(`rue:component:anchor`);c(U,Oe),l(()=>{let e=v(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});s(()=>_(e,U,Oe))});let W=e(`section`,j);c(j,W),f(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=e(`div`,W);c(W,G),f(G,`flex flex-wrap items-center justify-between gap-3`);let ke=e(`div`,G);c(G,ke);let K=e(`h3`,ke);c(ke,K),f(K,`font-semibold`),c(K,p(`显式 `));let Ae=y(K);c(K,Ae),h(Ae,`<Template v-if>`),c(K,p(` / `));let je=y(K);c(K,je),h(je,`<Template v-else-if>`),c(K,p(` / `));let Me=y(K);c(K,Me),h(Me,`<Template v-else>`);let Ne=y(K);c(K,Ne),h(Ne,` `),c(K,p(`分支链`));let Pe=e(`p`,ke);c(ke,Pe),f(Pe,`text-sm opacity-70`),c(Pe,p(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=e(`div`,G);c(G,q),f(q,`join`);let Fe=e(`button`,q);c(q,Fe),l(()=>{f(Fe,String(`btn btn-sm join-item ${E.value===`healthy`?`btn-info`:`btn-outline`}`))}),t(Fe,`click`,()=>{E.value=`healthy`}),c(Fe,p(`健康`));let Ie=e(`button`,q);c(q,Ie),l(()=>{f(Ie,String(`btn btn-sm join-item ${E.value===`warning`?`btn-info`:`btn-outline`}`))}),t(Ie,`click`,()=>{E.value=`warning`}),c(Ie,p(`预警`));let Le=e(`button`,q);c(q,Le),l(()=>{f(Le,String(`btn btn-sm join-item ${E.value===`critical`?`btn-info`:`btn-outline`}`))}),t(Le,`click`,()=>{E.value=`critical`}),c(Le,p(`故障`));let Re=e(`div`,W);c(W,Re),f(Re,`badge badge-info badge-outline`),c(Re,p(`当前分支: `));let ze=y(Re);c(Re,ze),l(()=>{h(ze,E.value)});let Be=e(`div`,W);c(W,Be),f(Be,`grid gap-3 md:grid-cols-2`);let Ve=u(`rue:slot:anchor`);c(Be,Ve),l(()=>{let e=E.value===`healthy`?m(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),_(v(T,{children:m(()=>{let e=o(),t=u(`rue:component:anchor`);c(e,t),_(v(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let n=u(`rue:component:anchor`);return c(e,n),_(v(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,n),e})}),e,t),e}):E.value===`warning`?m(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),_(v(T,{children:m(()=>{let e=o(),t=u(`rue:component:anchor`);c(e,t),_(v(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let n=u(`rue:component:anchor`);return c(e,n),_(v(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,n),e})}),e,t),e}):m(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),_(v(T,{children:m(()=>{let e=o(),t=u(`rue:component:anchor`);c(e,t),_(v(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let n=u(`rue:component:anchor`);return c(e,n),_(v(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,n),e})}),e,t),e});s(()=>_(e,Be,Ve))});let J=e(`div`,j);c(j,J),f(J,`grid gap-4 xl:grid-cols-2`);let Y=e(`section`,J);c(J,Y),f(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=e(`div`,Y);c(Y,He);let X=e(`h3`,He);c(He,X),f(X,`font-semibold`),c(X,p(`显式 `));let Ue=y(X);c(X,Ue),h(Ue,`<Template slot="...">`),c(X,p(` 命名片段`));let We=e(`p`,He);c(He,We),f(We,`text-sm opacity-70`),c(We,p(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=u(`rue:component:anchor`);c(Y,Ge);let Ke=m(()=>{let t=o(),n=e(`div`,t);c(t,n),f(n,`grid gap-3 md:grid-cols-2`);let r=u(`rue:component:anchor`);c(n,r),l(()=>{let e=v(D,{title:A.head.title,meta:A.head.meta,tone:`base`});s(()=>_(e,n,r))});let i=u(`rue:slot:anchor`);c(n,i),l(()=>{let e=x.value?m(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),_(v(T,{children:m(()=>{let e=o(),t=u(`rue:component:anchor`);c(e,t),_(v(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let n=u(`rue:component:anchor`);return c(e,n),_(v(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,n),e})}),e,t),e}):``;s(()=>_(e,n,i))});let a=u(`rue:component:anchor`);return c(n,a),l(()=>{let e=v(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});s(()=>_(e,n,a))}),t}),qe=m(()=>{let t=o(),n=e(`div`,t);c(t,n);let r=e(`div`,n);c(n,r),f(r,`badge badge-secondary badge-outline`),c(r,p(`named slot`));let i=e(`h4`,n);c(n,i),f(i,`mt-2 text-lg font-semibold`);let a=y(i);c(i,a),l(()=>{h(a,w.value===`ops`?`运维场景面板`:`增长场景面板`)});let s=e(`p`,n);return c(n,s),f(s,`text-sm opacity-70`),c(s,p(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),t}),Je=m(()=>{let n=o(),r=e(`div`,n);c(n,r),f(r,`join`);let i=e(`button`,r);c(r,i),l(()=>{f(i,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),t(i,`click`,()=>{w.value=`ops`}),c(i,p(`运维`));let a=e(`button`,r);c(r,a),l(()=>{f(a,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),t(a,`click`,()=>{w.value=`growth`}),c(a,p(`增长`));let s=e(`button`,n);c(n,s),l(()=>{f(s,String(`btn btn-sm ${x.value?`btn-secondary`:`btn-outline`}`))}),t(s,`click`,()=>{x.value=!x.value});let u=y(s);return c(s,u),l(()=>{h(u,x.value?`隐藏摘要`:`显示摘要`)}),n});l(()=>{let e=v(te,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});s(()=>_(e,Y,Ge))});let Z=e(`section`,J);c(J,Z),f(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=e(`div`,Z);c(Z,Q);let $=e(`h3`,Q);c(Q,$),f($,`font-semibold`),c($,p(`显式 `));let Ye=y($);c($,Ye),h(Ye,`<Template>`),c($,p(` 列表片段`));let Xe=e(`p`,Q);c(Q,Xe),f(Xe,`text-sm opacity-70`),c(Xe,p(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=e(`ul`,Z);c(Z,Ze),f(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=u(`rue:list:start`),$e=u(`rue:list:end`);c(Ze,Qe),c(Ze,$e);let et=new Map;return l(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(t,n,r,i,a)=>{let h=m(()=>{let n=o(),r=e(`li`,n);c(n,r),f(r,`list-row items-start gap-3`);let i=e(`div`,r);c(r,i),f(i,`list-col-grow`);let a=e(`div`,i);c(i,a),f(a,`font-medium`);let d=u(`rue:slot:anchor`);c(a,d),l(()=>{let e=t.title;s(()=>_(e,a,d))});let m=e(`div`,i);c(i,m),f(m,`text-sm opacity-70`);let h=u(`rue:slot:anchor`);c(m,h),l(()=>{let e=t.meta;s(()=>_(e,m,h))});let g=e(`span`,r);c(r,g),f(g,`badge badge-outline whitespace-nowrap`);let v=u(`rue:slot:anchor`);c(g,v),l(()=>{let e=t.status;s(()=>_(e,g,v))});let y=e(`li`,n);return c(n,y),f(y,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),c(y,p(`同一条数据额外展开的第二个兄弟节点`)),n});d(v(T,{key:t.id,children:h}),n,r,i)}})}),n}):``;s(()=>_(n,k,ae))}),n})}),i,b),i})};export{ne as default};
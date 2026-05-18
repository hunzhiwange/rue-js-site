import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,T as c,W as l,d as u,dt as d,ht as f,k as p,l as m,st as h,t as g,u as _,vt as v,z as y}from"./vapor-runtime-BuwLbCGk.js";import{a as b,n as ee}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as x}from"./Slot-Yy9kvc97.js";import{t as S}from"./Code-DQxnq0in.js";import{t as C}from"./SidebarPlaygroundExample-BwOo72z2.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=n=>p(()=>{let r=t(),i=e(`rue-template-anchor`);return a(r,i),c(w(n.children),r,i),r}),E={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=t=>u(i=>{let o=r(`article`,i);v(()=>{n(o,String(E[t.tone??`base`]))});let s=r(`h3`,o);a(o,s),n(s,`font-semibold`);let c=e(`rue:slot:anchor`);a(s,c),v(()=>{let e=t.title;d(()=>m(e,s,c))});let l=r(`p`,o);a(o,l),n(l,`mt-2 text-sm opacity-70`);let u=e(`rue:slot:anchor`);return a(l,u),v(()=>{let e=t.meta;d(()=>m(e,l,u))}),o}),te=t=>u(i=>{let o=r(`section`,i);n(o,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let c=r(`div`,o);a(o,c),n(c,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let l=r(`div`,c);a(c,l),n(l,`min-w-0 space-y-2`);let u=r(`div`,l);a(l,u),n(u,`text-xs uppercase tracking-[0.22em] opacity-55`),a(u,s(`named slot`));let f=e(`rue:component:anchor`);a(l,f),v(()=>{let e=g(x,{source:t,name:`header`,children:`未提供 header`});d(()=>m(e,l,f))});let p=r(`div`,c);a(c,p),n(p,`flex flex-wrap items-center gap-2`);let h=e(`rue:component:anchor`);a(p,h),v(()=>{let e=g(x,{source:t,name:`actions`});d(()=>m(e,p,h))});let _=r(`div`,o);a(o,_),n(_,`p-4`);let y=e(`rue:component:anchor`);return a(_,y),v(()=>{let e=g(x,{source:t,children:`未提供默认内容`});d(()=>m(e,_,y))}),o}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},ne=()=>{let{activeTab:c,showBurst:p,showSummary:x,mode:w,branchState:E,code:ne,cards:A,feed:re}=b(`useSetup:0:0`,()=>f(()=>{let e=b(`ref:1:0`,()=>h(`preview`)),t=b(`ref:1:1`,()=>h(!0)),n=b(`ref:1:2`,()=>h(!0)),r=b(`ref:1:3`,()=>h(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>h(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[r.value],feed:k[r.value]}}));return u(f=>{let h=t(),b=e(`rue:component:anchor`);return a(h,b),m(g(C,{children:u(()=>{let f=t(),h=r(`h1`,f);a(f,h),n(h,`mb-4 text-5xl font-semibold md:mb-4`),a(h,s(`Template 内置组件`));let b=r(`div`,f);a(f,b),l(b,`role`,`tablist`),n(b,`tabs tabs-box`);let C=r(`button`,b);a(b,C),l(C,`role`,`tab`),v(()=>{n(C,String(`tab ${c.value===`preview`?`tab-active`:``}`))}),i(C,`click`,()=>{c.value=`preview`}),a(C,s(`效果`));let O=r(`button`,b);a(b,O),l(O,`role`,`tab`),v(()=>{n(O,String(`tab ${c.value===`code`?`tab-active`:``}`))}),i(O,`click`,()=>{c.value=`code`}),a(O,s(`代码`));let k=r(`div`,f);a(f,k),n(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ie=e(`rue:slot:anchor`);a(k,ie),v(()=>{let i=c.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`card overflow-auto bg-base-100 shadow`);let s=r(`div`,o);a(o,s),n(s,`card-body p-0`);let c=e(`rue:component:anchor`);return a(s,c),v(()=>{let e=g(S,{className:`h-full`,lang:`tsx`,code:ne});d(()=>m(e,s,c))}),i}):``;d(()=>m(i,k,ie))}),a(k,s(` `));let ae=e(`rue:slot:anchor`);return a(k,ae),v(()=>{let f=c.value===`preview`?u(()=>{let c=t(),f=r(`div`,c);a(c,f),n(f,`grid gap-6`);let h=r(`div`,f);a(f,h),l(h,`role`,`alert`),n(h,`alert alert-success`);let b=r(`div`,h);a(h,b),n(b,`space-y-2`);let S=r(`div`,b);a(b,S),a(S,s(`这个页面改成了显式导入`));let C=r(`strong`,S);a(S,C);let O=y(C);a(C,O),o(O,`<Template>`),a(S,s(`组件的写法，不再依赖小写 template lowering。`));let k=r(`div`,b);a(b,k),n(k,`text-sm opacity-80`),a(k,s(`当前示例覆盖命名 slot、`));let ne=y(k);a(k,ne),o(ne,`<Template v-if>`),a(k,s(`、 `));let ie=y(k);a(k,ie),o(ie,`<Template v-if / v-else-if / v-else>`);let ae=y(k);a(k,ae),o(ae,` `),a(k,s(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let oe=r(`div`,f);a(f,oe),n(oe,`card bg-base-100 shadow`);let j=r(`div`,oe);a(oe,j),n(j,`card-body gap-4`);let M=r(`div`,j);a(j,M),n(M,`flex flex-wrap items-center justify-between gap-3`);let se=r(`div`,M);a(M,se);let ce=r(`h2`,se);a(se,ce),n(ce,`card-title`),a(ce,s(`切换场景`));let le=r(`p`,se);a(se,le),n(le,`text-sm opacity-70`),a(le,s(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=r(`div`,M);a(M,N),n(N,`flex flex-wrap gap-3`);let P=r(`div`,N);a(N,P),n(P,`join`);let ue=r(`button`,P);a(P,ue),v(()=>{n(ue,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),i(ue,`click`,()=>{w.value=`ops`}),a(ue,s(`运维`));let de=r(`button`,P);a(P,de),v(()=>{n(de,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),i(de,`click`,()=>{w.value=`growth`}),a(de,s(`增长`));let F=r(`button`,N);a(N,F),v(()=>{n(F,String(`btn btn-sm ${p.value?`btn-secondary`:`btn-outline`}`))}),i(F,`click`,()=>{p.value=!p.value});let fe=y(F);a(F,fe),v(()=>{o(fe,p.value?`隐藏中间卡片`:`显示中间卡片`)});let I=r(`div`,j);a(j,I),n(I,`grid gap-4 xl:grid-cols-2`);let L=r(`section`,I);a(I,L),n(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=r(`div`,L);a(L,R),n(R,`flex flex-wrap items-center justify-between gap-2`);let pe=r(`div`,R);a(R,pe);let me=r(`h3`,pe);a(pe,me),n(me,`font-semibold`),a(me,s(`普通 div 包裹`));let he=r(`p`,pe);a(pe,he),n(he,`text-sm opacity-70`),a(he,s(`中间两张卡片会先进入一个额外 grid item。`));let ge=r(`span`,R);a(R,ge),n(ge,`badge badge-warning badge-outline`),a(ge,s(`直接网格项: `));let _e=y(ge);a(ge,_e),v(()=>{o(_e,p.value?3:2)});let z=r(`div`,L);a(L,z),n(z,`grid gap-3 md:grid-cols-2`);let ve=e(`rue:component:anchor`);a(z,ve),v(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});d(()=>m(e,z,ve))});let ye=e(`rue:slot:anchor`);a(z,ye),v(()=>{let i=p.value?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let s=e(`rue:component:anchor`);a(o,s),v(()=>{let e=g(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});d(()=>m(e,o,s))});let c=e(`rue:component:anchor`);return a(o,c),v(()=>{let e=g(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});d(()=>m(e,o,c))}),i}):``;d(()=>m(i,z,ye))});let be=e(`rue:component:anchor`);a(z,be),v(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});d(()=>m(e,z,be))});let B=r(`section`,I);a(I,B),n(B,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let V=r(`div`,B);a(B,V),n(V,`flex flex-wrap items-center justify-between gap-2`);let xe=r(`div`,V);a(V,xe);let H=r(`h3`,xe);a(xe,H),n(H,`font-semibold`),a(H,s(`显式 `));let Se=y(H);a(H,Se),o(Se,`<Template v-if>`),a(H,s(` 条件片段`));let Ce=r(`p`,xe);a(xe,Ce),n(Ce,`text-sm opacity-70`),a(Ce,s(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let we=r(`span`,V);a(V,we),n(we,`badge badge-success badge-outline`),a(we,s(`直接网格项: `));let Te=y(we);a(we,Te),v(()=>{o(Te,p.value?4:2)});let U=r(`div`,B);a(B,U),n(U,`grid gap-3 md:grid-cols-2`);let Ee=e(`rue:component:anchor`);a(U,Ee),v(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});d(()=>m(e,U,Ee))});let De=e(`rue:slot:anchor`);a(U,De),v(()=>{let n=p.value?u(()=>{let n=t(),r=e(`rue:component:anchor`);return a(n,r),m(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);a(n,r),v(()=>{let e=g(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});d(()=>m(e,n,r))});let i=e(`rue:component:anchor`);return a(n,i),v(()=>{let e=g(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});d(()=>m(e,n,i))}),n})}),n,r),n}):``;d(()=>m(n,U,De))});let Oe=e(`rue:component:anchor`);a(U,Oe),v(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});d(()=>m(e,U,Oe))});let W=r(`section`,j);a(j,W),n(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=r(`div`,W);a(W,G),n(G,`flex flex-wrap items-center justify-between gap-3`);let ke=r(`div`,G);a(G,ke);let K=r(`h3`,ke);a(ke,K),n(K,`font-semibold`),a(K,s(`显式 `));let Ae=y(K);a(K,Ae),o(Ae,`<Template v-if>`),a(K,s(` / `));let je=y(K);a(K,je),o(je,`<Template v-else-if>`),a(K,s(` / `));let Me=y(K);a(K,Me),o(Me,`<Template v-else>`);let Ne=y(K);a(K,Ne),o(Ne,` `),a(K,s(`分支链`));let Pe=r(`p`,ke);a(ke,Pe),n(Pe,`text-sm opacity-70`),a(Pe,s(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=r(`div`,G);a(G,q),n(q,`join`);let Fe=r(`button`,q);a(q,Fe),v(()=>{n(Fe,String(`btn btn-sm join-item ${E.value===`healthy`?`btn-info`:`btn-outline`}`))}),i(Fe,`click`,()=>{E.value=`healthy`}),a(Fe,s(`健康`));let Ie=r(`button`,q);a(q,Ie),v(()=>{n(Ie,String(`btn btn-sm join-item ${E.value===`warning`?`btn-info`:`btn-outline`}`))}),i(Ie,`click`,()=>{E.value=`warning`}),a(Ie,s(`预警`));let Le=r(`button`,q);a(q,Le),v(()=>{n(Le,String(`btn btn-sm join-item ${E.value===`critical`?`btn-info`:`btn-outline`}`))}),i(Le,`click`,()=>{E.value=`critical`}),a(Le,s(`故障`));let Re=r(`div`,W);a(W,Re),n(Re,`badge badge-info badge-outline`),a(Re,s(`当前分支: `));let ze=y(Re);a(Re,ze),v(()=>{o(ze,E.value)});let Be=r(`div`,W);a(W,Be),n(Be,`grid gap-3 md:grid-cols-2`);let Ve=e(`rue:slot:anchor`);a(Be,Ve),v(()=>{let n=E.value===`healthy`?u(()=>{let n=t(),r=e(`rue:component:anchor`);return a(n,r),m(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);a(n,r),m(g(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),n,r);let i=e(`rue:component:anchor`);return a(n,i),m(g(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),n,i),n})}),n,r),n}):E.value===`warning`?u(()=>{let n=t(),r=e(`rue:component:anchor`);return a(n,r),m(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);a(n,r),m(g(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),n,r);let i=e(`rue:component:anchor`);return a(n,i),m(g(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),n,i),n})}),n,r),n}):u(()=>{let n=t(),r=e(`rue:component:anchor`);return a(n,r),m(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);a(n,r),m(g(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),n,r);let i=e(`rue:component:anchor`);return a(n,i),m(g(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),n,i),n})}),n,r),n});d(()=>m(n,Be,Ve))});let J=r(`div`,j);a(j,J),n(J,`grid gap-4 xl:grid-cols-2`);let Y=r(`section`,J);a(J,Y),n(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=r(`div`,Y);a(Y,He);let X=r(`h3`,He);a(He,X),n(X,`font-semibold`),a(X,s(`显式 `));let Ue=y(X);a(X,Ue),o(Ue,`<Template slot="...">`),a(X,s(` 命名片段`));let We=r(`p`,He);a(He,We),n(We,`text-sm opacity-70`),a(We,s(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=e(`rue:component:anchor`);a(Y,Ge);let Ke=u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`grid gap-3 md:grid-cols-2`);let s=e(`rue:component:anchor`);a(o,s),v(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});d(()=>m(e,o,s))});let c=e(`rue:slot:anchor`);a(o,c),v(()=>{let n=x.value?u(()=>{let n=t(),r=e(`rue:component:anchor`);return a(n,r),m(g(T,{children:u(()=>{let n=t(),r=e(`rue:component:anchor`);a(n,r),m(g(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),n,r);let i=e(`rue:component:anchor`);return a(n,i),m(g(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),n,i),n})}),n,r),n}):``;d(()=>m(n,o,c))});let l=e(`rue:component:anchor`);return a(o,l),v(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});d(()=>m(e,o,l))}),i}),qe=u(()=>{let e=t(),i=r(`div`,e);a(e,i);let c=r(`div`,i);a(i,c),n(c,`badge badge-secondary badge-outline`),a(c,s(`named slot`));let l=r(`h4`,i);a(i,l),n(l,`mt-2 text-lg font-semibold`);let u=y(l);a(l,u),v(()=>{o(u,w.value===`ops`?`运维场景面板`:`增长场景面板`)});let d=r(`p`,i);return a(i,d),n(d,`text-sm opacity-70`),a(d,s(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),e}),Je=u(()=>{let e=t(),c=r(`div`,e);a(e,c),n(c,`join`);let l=r(`button`,c);a(c,l),v(()=>{n(l,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),i(l,`click`,()=>{w.value=`ops`}),a(l,s(`运维`));let u=r(`button`,c);a(c,u),v(()=>{n(u,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),i(u,`click`,()=>{w.value=`growth`}),a(u,s(`增长`));let d=r(`button`,e);a(e,d),v(()=>{n(d,String(`btn btn-sm ${x.value?`btn-secondary`:`btn-outline`}`))}),i(d,`click`,()=>{x.value=!x.value});let f=y(d);return a(d,f),v(()=>{o(f,x.value?`隐藏摘要`:`显示摘要`)}),e});v(()=>{let e=g(te,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});d(()=>m(e,Y,Ge))});let Z=r(`section`,J);a(J,Z),n(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=r(`div`,Z);a(Z,Q);let $=r(`h3`,Q);a(Q,$),n($,`font-semibold`),a($,s(`显式 `));let Ye=y($);a($,Ye),o(Ye,`<Template>`),a($,s(` 列表片段`));let Xe=r(`p`,Q);a(Q,Xe),n(Xe,`text-sm opacity-70`),a(Xe,s(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=r(`ul`,Z);a(Z,Ze),n(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=e(`rue:list:start`),$e=e(`rue:list:end`);a(Ze,Qe),a(Ze,$e);let et=new Map;return v(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(i,o,c,l,f)=>{let p=u(()=>{let o=t(),c=r(`li`,o);a(o,c),n(c,`list-row items-start gap-3`);let l=r(`div`,c);a(c,l),n(l,`list-col-grow`);let u=r(`div`,l);a(l,u),n(u,`font-medium`);let f=e(`rue:slot:anchor`);a(u,f),v(()=>{let e=i.title;d(()=>m(e,u,f))});let p=r(`div`,l);a(l,p),n(p,`text-sm opacity-70`);let h=e(`rue:slot:anchor`);a(p,h),v(()=>{let e=i.meta;d(()=>m(e,p,h))});let g=r(`span`,c);a(c,g),n(g,`badge badge-outline whitespace-nowrap`);let _=e(`rue:slot:anchor`);a(g,_),v(()=>{let e=i.status;d(()=>m(e,g,_))});let y=r(`li`,o);return a(o,y),n(y,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),a(y,s(`同一条数据额外展开的第二个兄弟节点`)),o});_(g(T,{key:i.id,children:p}),o,c,l)}})}),c}):``;d(()=>m(f,k,ae))}),f})}),h,b),h})};export{ne as default};
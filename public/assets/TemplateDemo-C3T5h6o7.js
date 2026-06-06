import{$ as e,Et as t,G as n,H as r,I as i,J as a,K as o,M as s,V as c,W as l,_t as u,d,kt as f,l as p,q as m,st as h,t as g,tt as _,u as v,xt as y}from"./vapor-runtime-ACs_OvwU.js";import{a as b,n as ee}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as x}from"./Slot-DJJu3bW-.js";import{t as S}from"./Code-CliOXHNE.js";import{t as C}from"./SidebarPlaygroundExample-DXnPmR3z.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=e=>i(()=>{let t=n(),i=l(`rue-template-anchor`);return r(t,i),s(w(e.children),t,i),t}),E={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=e=>d(t=>{let n=o(`article`,t);f(()=>{_(n,String(E[e.tone??`base`]))});let i=o(`h3`,n);r(n,i),_(i,`font-semibold`);let a=l(`rue:slot:anchor`);r(i,a),f(()=>{let t=e.title;y(()=>p(t,i,a))});let s=o(`p`,n);r(n,s),_(s,`mt-2 text-sm opacity-70`);let c=l(`rue:slot:anchor`);return r(s,c),f(()=>{let t=e.meta;y(()=>p(t,s,c))}),n}),te=e=>d(t=>{let n=o(`section`,t);_(n,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let i=o(`div`,n);r(n,i),_(i,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let a=o(`div`,i);r(i,a),_(a,`min-w-0 space-y-2`);let s=o(`div`,a);r(a,s),_(s,`text-xs uppercase tracking-[0.22em] opacity-55`),r(s,m(`named slot`));let c=l(`rue:component:anchor`);r(a,c),f(()=>{let t=g(x,{source:e,name:`header`,children:`未提供 header`});y(()=>p(t,a,c))});let u=o(`div`,i);r(i,u),_(u,`flex flex-wrap items-center gap-2`);let d=l(`rue:component:anchor`);r(u,d),f(()=>{let t=g(x,{source:e,name:`actions`});y(()=>p(t,u,d))});let h=o(`div`,n);r(n,h),_(h,`p-4`);let v=l(`rue:component:anchor`);return r(h,v),f(()=>{let t=g(x,{source:e,children:`未提供默认内容`});y(()=>p(t,h,v))}),n}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},ne=()=>{let{activeTab:i,showBurst:s,showSummary:x,mode:w,branchState:E,code:ne,cards:A,feed:re}=b(`useSetup:0:0`,()=>t(()=>{let e=b(`ref:1:0`,()=>u(`preview`)),t=b(`ref:1:1`,()=>u(!0)),n=b(`ref:1:2`,()=>u(!0)),r=b(`ref:1:3`,()=>u(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>u(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[r.value],feed:k[r.value]}}));return d(t=>{let u=n(),b=l(`rue:component:anchor`);return r(u,b),p(g(C,{children:d(()=>{let t=n(),u=o(`h1`,t);r(t,u),_(u,`mb-4 text-5xl font-semibold md:mb-4`),r(u,m(`Template 内置组件`));let b=o(`div`,t);r(t,b),e(b,`role`,`tablist`),_(b,`tabs tabs-box`);let C=o(`button`,b);r(b,C),e(C,`role`,`tab`),f(()=>{_(C,String(`tab ${i.value===`preview`?`tab-active`:``}`))}),c(C,`click`,()=>{i.value=`preview`}),r(C,m(`效果`));let O=o(`button`,b);r(b,O),e(O,`role`,`tab`),f(()=>{_(O,String(`tab ${i.value===`code`?`tab-active`:``}`))}),c(O,`click`,()=>{i.value=`code`}),r(O,m(`代码`));let k=o(`div`,t);r(t,k),_(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ie=l(`rue:slot:anchor`);r(k,ie),f(()=>{let e=i.value===`code`?d(()=>{let e=n(),t=o(`div`,e);r(e,t),_(t,`card overflow-auto bg-base-100 shadow`);let i=o(`div`,t);r(t,i),_(i,`card-body p-0`);let a=l(`rue:component:anchor`);return r(i,a),f(()=>{let e=g(S,{className:`h-full`,lang:`tsx`,code:ne});y(()=>p(e,i,a))}),e}):``;y(()=>p(e,k,ie))}),r(k,m(` `));let ae=l(`rue:slot:anchor`);return r(k,ae),f(()=>{let t=i.value===`preview`?d(()=>{let t=n(),i=o(`div`,t);r(t,i),_(i,`grid gap-6`);let u=o(`div`,i);r(i,u),e(u,`role`,`alert`),_(u,`alert alert-success`);let b=o(`div`,u);r(u,b),_(b,`space-y-2`);let S=o(`div`,b);r(b,S),r(S,m(`这个页面改成了显式导入`));let C=o(`strong`,S);r(S,C);let O=a(C);r(C,O),h(O,`<Template>`),r(S,m(`组件的写法，不再依赖小写 template lowering。`));let k=o(`div`,b);r(b,k),_(k,`text-sm opacity-80`),r(k,m(`当前示例覆盖命名 slot、`));let ne=a(k);r(k,ne),h(ne,`<Template v-if>`),r(k,m(`、 `));let ie=a(k);r(k,ie),h(ie,`<Template v-if / v-else-if / v-else>`);let ae=a(k);r(k,ae),h(ae,` `),r(k,m(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let oe=o(`div`,i);r(i,oe),_(oe,`card bg-base-100 shadow`);let j=o(`div`,oe);r(oe,j),_(j,`card-body gap-4`);let M=o(`div`,j);r(j,M),_(M,`flex flex-wrap items-center justify-between gap-3`);let se=o(`div`,M);r(M,se);let ce=o(`h2`,se);r(se,ce),_(ce,`card-title`),r(ce,m(`切换场景`));let le=o(`p`,se);r(se,le),_(le,`text-sm opacity-70`),r(le,m(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=o(`div`,M);r(M,N),_(N,`flex flex-wrap gap-3`);let P=o(`div`,N);r(N,P),_(P,`join`);let ue=o(`button`,P);r(P,ue),f(()=>{_(ue,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),c(ue,`click`,()=>{w.value=`ops`}),r(ue,m(`运维`));let de=o(`button`,P);r(P,de),f(()=>{_(de,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),c(de,`click`,()=>{w.value=`growth`}),r(de,m(`增长`));let F=o(`button`,N);r(N,F),f(()=>{_(F,String(`btn btn-sm ${s.value?`btn-secondary`:`btn-outline`}`))}),c(F,`click`,()=>{s.value=!s.value});let fe=a(F);r(F,fe),f(()=>{h(fe,s.value?`隐藏中间卡片`:`显示中间卡片`)});let I=o(`div`,j);r(j,I),_(I,`grid gap-4 xl:grid-cols-2`);let L=o(`section`,I);r(I,L),_(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=o(`div`,L);r(L,R),_(R,`flex flex-wrap items-center justify-between gap-2`);let pe=o(`div`,R);r(R,pe);let me=o(`h3`,pe);r(pe,me),_(me,`font-semibold`),r(me,m(`普通 div 包裹`));let he=o(`p`,pe);r(pe,he),_(he,`text-sm opacity-70`),r(he,m(`中间两张卡片会先进入一个额外 grid item。`));let ge=o(`span`,R);r(R,ge),_(ge,`badge badge-warning badge-outline`),r(ge,m(`直接网格项: `));let _e=a(ge);r(ge,_e),f(()=>{h(_e,s.value?3:2)});let z=o(`div`,L);r(L,z),_(z,`grid gap-3 md:grid-cols-2`);let ve=l(`rue:component:anchor`);r(z,ve),f(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});y(()=>p(e,z,ve))});let ye=l(`rue:slot:anchor`);r(z,ye),f(()=>{let e=s.value?d(()=>{let e=n(),t=o(`div`,e);r(e,t),_(t,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let i=l(`rue:component:anchor`);r(t,i),f(()=>{let e=g(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});y(()=>p(e,t,i))});let a=l(`rue:component:anchor`);return r(t,a),f(()=>{let e=g(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});y(()=>p(e,t,a))}),e}):``;y(()=>p(e,z,ye))});let be=l(`rue:component:anchor`);r(z,be),f(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});y(()=>p(e,z,be))});let B=o(`section`,I);r(I,B),_(B,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let V=o(`div`,B);r(B,V),_(V,`flex flex-wrap items-center justify-between gap-2`);let xe=o(`div`,V);r(V,xe);let H=o(`h3`,xe);r(xe,H),_(H,`font-semibold`),r(H,m(`显式 `));let Se=a(H);r(H,Se),h(Se,`<Template v-if>`),r(H,m(` 条件片段`));let Ce=o(`p`,xe);r(xe,Ce),_(Ce,`text-sm opacity-70`),r(Ce,m(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let we=o(`span`,V);r(V,we),_(we,`badge badge-success badge-outline`),r(we,m(`直接网格项: `));let Te=a(we);r(we,Te),f(()=>{h(Te,s.value?4:2)});let U=o(`div`,B);r(B,U),_(U,`grid gap-3 md:grid-cols-2`);let Ee=l(`rue:component:anchor`);r(U,Ee),f(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});y(()=>p(e,U,Ee))});let De=l(`rue:slot:anchor`);r(U,De),f(()=>{let e=s.value?d(()=>{let e=n(),t=l(`rue:component:anchor`);return r(e,t),p(g(T,{children:d(()=>{let e=n(),t=l(`rue:component:anchor`);r(e,t),f(()=>{let n=g(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});y(()=>p(n,e,t))});let i=l(`rue:component:anchor`);return r(e,i),f(()=>{let t=g(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});y(()=>p(t,e,i))}),e})}),e,t),e}):``;y(()=>p(e,U,De))});let Oe=l(`rue:component:anchor`);r(U,Oe),f(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});y(()=>p(e,U,Oe))});let W=o(`section`,j);r(j,W),_(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=o(`div`,W);r(W,G),_(G,`flex flex-wrap items-center justify-between gap-3`);let ke=o(`div`,G);r(G,ke);let K=o(`h3`,ke);r(ke,K),_(K,`font-semibold`),r(K,m(`显式 `));let Ae=a(K);r(K,Ae),h(Ae,`<Template v-if>`),r(K,m(` / `));let je=a(K);r(K,je),h(je,`<Template v-else-if>`),r(K,m(` / `));let Me=a(K);r(K,Me),h(Me,`<Template v-else>`);let Ne=a(K);r(K,Ne),h(Ne,` `),r(K,m(`分支链`));let Pe=o(`p`,ke);r(ke,Pe),_(Pe,`text-sm opacity-70`),r(Pe,m(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=o(`div`,G);r(G,q),_(q,`join`);let Fe=o(`button`,q);r(q,Fe),f(()=>{_(Fe,String(`btn btn-sm join-item ${E.value===`healthy`?`btn-info`:`btn-outline`}`))}),c(Fe,`click`,()=>{E.value=`healthy`}),r(Fe,m(`健康`));let Ie=o(`button`,q);r(q,Ie),f(()=>{_(Ie,String(`btn btn-sm join-item ${E.value===`warning`?`btn-info`:`btn-outline`}`))}),c(Ie,`click`,()=>{E.value=`warning`}),r(Ie,m(`预警`));let Le=o(`button`,q);r(q,Le),f(()=>{_(Le,String(`btn btn-sm join-item ${E.value===`critical`?`btn-info`:`btn-outline`}`))}),c(Le,`click`,()=>{E.value=`critical`}),r(Le,m(`故障`));let Re=o(`div`,W);r(W,Re),_(Re,`badge badge-info badge-outline`),r(Re,m(`当前分支: `));let ze=a(Re);r(Re,ze),f(()=>{h(ze,E.value)});let Be=o(`div`,W);r(W,Be),_(Be,`grid gap-3 md:grid-cols-2`);let Ve=l(`rue:slot:anchor`);r(Be,Ve),f(()=>{let e=E.value===`healthy`?d(()=>{let e=n(),t=l(`rue:component:anchor`);return r(e,t),p(g(T,{children:d(()=>{let e=n(),t=l(`rue:component:anchor`);r(e,t),p(g(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let i=l(`rue:component:anchor`);return r(e,i),p(g(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,i),e})}),e,t),e}):E.value===`warning`?d(()=>{let e=n(),t=l(`rue:component:anchor`);return r(e,t),p(g(T,{children:d(()=>{let e=n(),t=l(`rue:component:anchor`);r(e,t),p(g(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let i=l(`rue:component:anchor`);return r(e,i),p(g(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,i),e})}),e,t),e}):d(()=>{let e=n(),t=l(`rue:component:anchor`);return r(e,t),p(g(T,{children:d(()=>{let e=n(),t=l(`rue:component:anchor`);r(e,t),p(g(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let i=l(`rue:component:anchor`);return r(e,i),p(g(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,i),e})}),e,t),e});y(()=>p(e,Be,Ve))});let J=o(`div`,j);r(j,J),_(J,`grid gap-4 xl:grid-cols-2`);let Y=o(`section`,J);r(J,Y),_(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=o(`div`,Y);r(Y,He);let X=o(`h3`,He);r(He,X),_(X,`font-semibold`),r(X,m(`显式 `));let Ue=a(X);r(X,Ue),h(Ue,`<Template slot="...">`),r(X,m(` 命名片段`));let We=o(`p`,He);r(He,We),_(We,`text-sm opacity-70`),r(We,m(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=l(`rue:component:anchor`);r(Y,Ge);let Ke=d(()=>{let e=n(),t=o(`div`,e);r(e,t),_(t,`grid gap-3 md:grid-cols-2`);let i=l(`rue:component:anchor`);r(t,i),f(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});y(()=>p(e,t,i))});let a=l(`rue:slot:anchor`);r(t,a),f(()=>{let e=x.value?d(()=>{let e=n(),t=l(`rue:component:anchor`);return r(e,t),p(g(T,{children:d(()=>{let e=n(),t=l(`rue:component:anchor`);r(e,t),p(g(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let i=l(`rue:component:anchor`);return r(e,i),p(g(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,i),e})}),e,t),e}):``;y(()=>p(e,t,a))});let s=l(`rue:component:anchor`);return r(t,s),f(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});y(()=>p(e,t,s))}),e}),qe=d(()=>{let e=n(),t=o(`div`,e);r(e,t);let i=o(`div`,t);r(t,i),_(i,`badge badge-secondary badge-outline`),r(i,m(`named slot`));let s=o(`h4`,t);r(t,s),_(s,`mt-2 text-lg font-semibold`);let c=a(s);r(s,c),f(()=>{h(c,w.value===`ops`?`运维场景面板`:`增长场景面板`)});let l=o(`p`,t);return r(t,l),_(l,`text-sm opacity-70`),r(l,m(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),e}),Je=d(()=>{let e=n(),t=o(`div`,e);r(e,t),_(t,`join`);let i=o(`button`,t);r(t,i),f(()=>{_(i,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),c(i,`click`,()=>{w.value=`ops`}),r(i,m(`运维`));let s=o(`button`,t);r(t,s),f(()=>{_(s,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),c(s,`click`,()=>{w.value=`growth`}),r(s,m(`增长`));let l=o(`button`,e);r(e,l),f(()=>{_(l,String(`btn btn-sm ${x.value?`btn-secondary`:`btn-outline`}`))}),c(l,`click`,()=>{x.value=!x.value});let u=a(l);return r(l,u),f(()=>{h(u,x.value?`隐藏摘要`:`显示摘要`)}),e});f(()=>{let e=g(te,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});y(()=>p(e,Y,Ge))});let Z=o(`section`,J);r(J,Z),_(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=o(`div`,Z);r(Z,Q);let $=o(`h3`,Q);r(Q,$),_($,`font-semibold`),r($,m(`显式 `));let Ye=a($);r($,Ye),h(Ye,`<Template>`),r($,m(` 列表片段`));let Xe=o(`p`,Q);r(Q,Xe),_(Xe,`text-sm opacity-70`),r(Xe,m(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=o(`ul`,Z);r(Z,Ze),_(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=l(`rue:list:start`),$e=l(`rue:list:end`);r(Ze,Qe),r(Ze,$e);let et=new Map;return f(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(e,t,i,a,s)=>{let c=d(()=>{let t=n(),i=o(`li`,t);r(t,i),_(i,`list-row items-start gap-3`);let a=o(`div`,i);r(i,a),_(a,`list-col-grow`);let s=o(`div`,a);r(a,s),_(s,`font-medium`);let c=l(`rue:slot:anchor`);r(s,c),f(()=>{let t=e.title;y(()=>p(t,s,c))});let u=o(`div`,a);r(a,u),_(u,`text-sm opacity-70`);let d=l(`rue:slot:anchor`);r(u,d),f(()=>{let t=e.meta;y(()=>p(t,u,d))});let h=o(`span`,i);r(i,h),_(h,`badge badge-outline whitespace-nowrap`);let g=l(`rue:slot:anchor`);r(h,g),f(()=>{let t=e.status;y(()=>p(t,h,g))});let v=o(`li`,t);return r(t,v),_(v,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),r(v,m(`同一条数据额外展开的第二个兄弟节点`)),t});v(g(T,{key:e.id,children:c}),t,i,a)}})}),t}):``;y(()=>p(t,k,ae))}),t})}),u,b),u})};export{ne as default};
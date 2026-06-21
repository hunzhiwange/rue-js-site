import{$t as e,Jt as t,N as n,Q as r,R as i,Z as a,dt as o,et as s,in as c,it as l,l as u,lt as d,nt as f,o as p,rt as m,s as h,t as g,tt as _,vt as v,z as y,zt as b}from"./vapor-runtime-DsQWl-IB.js";import{a as x,n as ee}from"./vapor-helpers-vapor-Dg64FcpK.js";import{o as S}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as C}from"./Code-4SUSUwRg.js";import{r as w}from"./SidebarPlaygroundExample-BEWYUWOl.js";var T=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],E=e=>i(()=>{let t=_(),i=s(`rue-template-anchor`);return r(t,i),n(T(e.children),t,i),t});y(E,`Template`);var te={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=t=>u(n=>{let i=f(`article`,n);b(()=>{o(i,te[t.tone??`base`])});let a=f(`h3`,i);r(i,a),o(a,`font-semibold`);let c=s(`rue:slot:anchor`);r(a,c),b(()=>{let n=t.title;e(()=>p(n,a,c))});let l=f(`p`,i);r(i,l),o(l,`mt-2 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return r(l,u),b(()=>{let n=t.meta;e(()=>p(n,l,u))}),i}),ne=t=>u(n=>{let i=f(`section`,n);o(i,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let a=f(`div`,i);r(i,a),o(a,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let c=f(`div`,a);r(a,c),o(c,`min-w-0 space-y-2`);let l=f(`div`,c);r(c,l),o(l,`text-xs uppercase tracking-[0.22em] opacity-55`),r(l,m(`named slot`));let u=s(`rue:component:anchor`);r(c,u),b(()=>{let n=g(S,{source:t,name:`header`,children:`未提供 header`});e(()=>p(n,c,u))});let d=f(`div`,a);r(a,d),o(d,`flex flex-wrap items-center gap-2`);let h=s(`rue:component:anchor`);r(d,h),b(()=>{let n=g(S,{source:t,name:`actions`});e(()=>p(n,d,h))});let _=f(`div`,i);r(i,_),o(_,`p-4`);let v=s(`rue:component:anchor`);return r(_,v),b(()=>{let n=g(S,{source:t,children:`未提供默认内容`});e(()=>p(n,_,v))}),i}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},A=()=>{let{activeTab:n,showBurst:i,showSummary:y,mode:S,branchState:T,code:te,cards:A,feed:re}=x(`useSetup:0:0`,()=>c(()=>{let e=x(`ref:1:0`,()=>t(`preview`)),n=x(`ref:1:1`,()=>t(!0)),r=x(`ref:1:2`,()=>t(!0)),i=x(`ref:1:3`,()=>t(`ops`));return{activeTab:e,showBurst:n,showSummary:r,mode:i,branchState:x(`ref:1:4`,()=>t(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[i.value],feed:k[i.value]}}));return u(t=>{let c=_(),x=s(`rue:component:anchor`);return r(c,x),p(g(w,{children:u(()=>{let t=_(),c=f(`h1`,t);r(t,c),o(c,`mb-4 text-5xl font-semibold md:mb-4`),r(c,m(`Template 内置组件`));let x=f(`div`,t);r(t,x),d(x,`role`,`tablist`),o(x,`tabs tabs-box`);let w=f(`button`,x);r(x,w),d(w,`role`,`tab`),b(()=>{o(w,`tab ${n.value===`preview`?`tab-active`:``}`)}),a(w,`click`,()=>{n.value=`preview`}),r(w,m(`效果`));let O=f(`button`,x);r(x,O),d(O,`role`,`tab`),b(()=>{o(O,`tab ${n.value===`code`?`tab-active`:``}`)}),a(O,`click`,()=>{n.value=`code`}),r(O,m(`代码`));let k=f(`div`,t);r(t,k),o(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ie=s(`rue:slot:anchor`);r(k,ie),b(()=>{let t=n.value===`code`?u(()=>{let t=_(),n=f(`div`,t);r(t,n),o(n,`card overflow-auto bg-base-100 shadow`);let i=f(`div`,n);r(n,i),o(i,`card-body p-0`);let a=s(`rue:component:anchor`);return r(i,a),b(()=>{let t=g(C,{className:`h-full`,lang:`tsx`,code:te});e(()=>p(t,i,a))}),t}):``;e(()=>p(t,k,ie))}),r(k,m(` `));let ae=s(`rue:slot:anchor`);return r(k,ae),b(()=>{let t=n.value===`preview`?u(()=>{let t=_(),n=f(`div`,t);r(t,n),o(n,`grid gap-6`);let c=f(`div`,n);r(n,c),d(c,`role`,`alert`),o(c,`alert alert-success`);let x=f(`div`,c);r(c,x),o(x,`space-y-2`);let C=f(`div`,x);r(x,C),r(C,m(`这个页面改成了显式导入`));let w=f(`strong`,C);r(C,w);let te=l(w);r(w,te),v(te,`<Template>`),r(C,m(`组件的写法，不再依赖小写 template lowering。`));let O=f(`div`,x);r(x,O),o(O,`text-sm opacity-80`),r(O,m(`当前示例覆盖命名 slot、`));let k=l(O);r(O,k),v(k,`<Template v-if>`),r(O,m(`、 `));let ie=l(O);r(O,ie),v(ie,`<Template v-if / v-else-if / v-else>`);let ae=l(O);r(O,ae),v(ae,` `),r(O,m(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let oe=f(`div`,n);r(n,oe),o(oe,`card bg-base-100 shadow`);let j=f(`div`,oe);r(oe,j),o(j,`card-body gap-4`);let M=f(`div`,j);r(j,M),o(M,`flex flex-wrap items-center justify-between gap-3`);let se=f(`div`,M);r(M,se);let ce=f(`h2`,se);r(se,ce),o(ce,`card-title`),r(ce,m(`切换场景`));let le=f(`p`,se);r(se,le),o(le,`text-sm opacity-70`),r(le,m(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=f(`div`,M);r(M,N),o(N,`flex flex-wrap gap-3`);let P=f(`div`,N);r(N,P),o(P,`join`);let ue=f(`button`,P);r(P,ue),b(()=>{o(ue,`btn btn-sm join-item ${S.value===`ops`?`btn-primary`:``}`)}),a(ue,`click`,()=>{S.value=`ops`}),r(ue,m(`运维`));let de=f(`button`,P);r(P,de),b(()=>{o(de,`btn btn-sm join-item ${S.value===`growth`?`btn-primary`:``}`)}),a(de,`click`,()=>{S.value=`growth`}),r(de,m(`增长`));let F=f(`button`,N);r(N,F),b(()=>{o(F,`btn btn-sm ${i.value?`btn-secondary`:`btn-outline`}`)}),a(F,`click`,()=>{i.value=!i.value});let fe=l(F);r(F,fe),b(()=>{v(fe,i.value?`隐藏中间卡片`:`显示中间卡片`)});let I=f(`div`,j);r(j,I),o(I,`grid gap-4 xl:grid-cols-2`);let L=f(`section`,I);r(I,L),o(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=f(`div`,L);r(L,R),o(R,`flex flex-wrap items-center justify-between gap-2`);let pe=f(`div`,R);r(R,pe);let me=f(`h3`,pe);r(pe,me),o(me,`font-semibold`),r(me,m(`普通 div 包裹`));let he=f(`p`,pe);r(pe,he),o(he,`text-sm opacity-70`),r(he,m(`中间两张卡片会先进入一个额外 grid item。`));let ge=f(`span`,R);r(R,ge),o(ge,`badge badge-warning badge-outline`),r(ge,m(`直接网格项: `));let _e=l(ge);r(ge,_e),b(()=>{v(_e,i.value?3:2)});let z=f(`div`,L);r(L,z),o(z,`grid gap-3 md:grid-cols-2`);let ve=s(`rue:component:anchor`);r(z,ve),b(()=>{let t=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});e(()=>p(t,z,ve))});let ye=s(`rue:slot:anchor`);r(z,ye),b(()=>{let t=i.value?u(()=>{let t=_(),n=f(`div`,t);r(t,n),o(n,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let i=s(`rue:component:anchor`);r(n,i),b(()=>{let t=g(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});e(()=>p(t,n,i))});let a=s(`rue:component:anchor`);return r(n,a),b(()=>{let t=g(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});e(()=>p(t,n,a))}),t}):``;e(()=>p(t,z,ye))});let be=s(`rue:component:anchor`);r(z,be),b(()=>{let t=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});e(()=>p(t,z,be))});let B=f(`section`,I);r(I,B),o(B,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let V=f(`div`,B);r(B,V),o(V,`flex flex-wrap items-center justify-between gap-2`);let xe=f(`div`,V);r(V,xe);let H=f(`h3`,xe);r(xe,H),o(H,`font-semibold`),r(H,m(`显式 `));let Se=l(H);r(H,Se),v(Se,`<Template v-if>`),r(H,m(` 条件片段`));let Ce=f(`p`,xe);r(xe,Ce),o(Ce,`text-sm opacity-70`),r(Ce,m(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let we=f(`span`,V);r(V,we),o(we,`badge badge-success badge-outline`),r(we,m(`直接网格项: `));let Te=l(we);r(we,Te),b(()=>{v(Te,i.value?4:2)});let U=f(`div`,B);r(B,U),o(U,`grid gap-3 md:grid-cols-2`);let Ee=s(`rue:component:anchor`);r(U,Ee),b(()=>{let t=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});e(()=>p(t,U,Ee))});let De=s(`rue:slot:anchor`);r(U,De),b(()=>{let t=i.value?u(()=>{let t=_(),n=s(`rue:component:anchor`);return r(t,n),p(g(E,{children:u(()=>{let t=_(),n=s(`rue:component:anchor`);r(t,n),b(()=>{let r=g(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});e(()=>p(r,t,n))});let i=s(`rue:component:anchor`);return r(t,i),b(()=>{let n=g(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});e(()=>p(n,t,i))}),t})}),t,n),t}):``;e(()=>p(t,U,De))});let Oe=s(`rue:component:anchor`);r(U,Oe),b(()=>{let t=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});e(()=>p(t,U,Oe))});let W=f(`section`,j);r(j,W),o(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=f(`div`,W);r(W,G),o(G,`flex flex-wrap items-center justify-between gap-3`);let ke=f(`div`,G);r(G,ke);let K=f(`h3`,ke);r(ke,K),o(K,`font-semibold`),r(K,m(`显式 `));let Ae=l(K);r(K,Ae),v(Ae,`<Template v-if>`),r(K,m(` / `));let je=l(K);r(K,je),v(je,`<Template v-else-if>`),r(K,m(` / `));let Me=l(K);r(K,Me),v(Me,`<Template v-else>`);let Ne=l(K);r(K,Ne),v(Ne,` `),r(K,m(`分支链`));let Pe=f(`p`,ke);r(ke,Pe),o(Pe,`text-sm opacity-70`),r(Pe,m(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=f(`div`,G);r(G,q),o(q,`join`);let Fe=f(`button`,q);r(q,Fe),b(()=>{o(Fe,`btn btn-sm join-item ${T.value===`healthy`?`btn-info`:`btn-outline`}`)}),a(Fe,`click`,()=>{T.value=`healthy`}),r(Fe,m(`健康`));let Ie=f(`button`,q);r(q,Ie),b(()=>{o(Ie,`btn btn-sm join-item ${T.value===`warning`?`btn-info`:`btn-outline`}`)}),a(Ie,`click`,()=>{T.value=`warning`}),r(Ie,m(`预警`));let Le=f(`button`,q);r(q,Le),b(()=>{o(Le,`btn btn-sm join-item ${T.value===`critical`?`btn-info`:`btn-outline`}`)}),a(Le,`click`,()=>{T.value=`critical`}),r(Le,m(`故障`));let Re=f(`div`,W);r(W,Re),o(Re,`badge badge-info badge-outline`),r(Re,m(`当前分支: `));let ze=l(Re);r(Re,ze),b(()=>{v(ze,T.value)});let Be=f(`div`,W);r(W,Be),o(Be,`grid gap-3 md:grid-cols-2`);let Ve=s(`rue:slot:anchor`);r(Be,Ve),b(()=>{let t=T.value===`healthy`?u(()=>{let e=_(),t=s(`rue:component:anchor`);return r(e,t),p(g(E,{children:u(()=>{let e=_(),t=s(`rue:component:anchor`);r(e,t),p(g(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let n=s(`rue:component:anchor`);return r(e,n),p(g(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,n),e})}),e,t),e}):T.value===`warning`?u(()=>{let e=_(),t=s(`rue:component:anchor`);return r(e,t),p(g(E,{children:u(()=>{let e=_(),t=s(`rue:component:anchor`);r(e,t),p(g(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let n=s(`rue:component:anchor`);return r(e,n),p(g(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,n),e})}),e,t),e}):u(()=>{let e=_(),t=s(`rue:component:anchor`);return r(e,t),p(g(E,{children:u(()=>{let e=_(),t=s(`rue:component:anchor`);r(e,t),p(g(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let n=s(`rue:component:anchor`);return r(e,n),p(g(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,n),e})}),e,t),e});e(()=>p(t,Be,Ve))});let J=f(`div`,j);r(j,J),o(J,`grid gap-4 xl:grid-cols-2`);let Y=f(`section`,J);r(J,Y),o(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=f(`div`,Y);r(Y,He);let X=f(`h3`,He);r(He,X),o(X,`font-semibold`),r(X,m(`显式 `));let Ue=l(X);r(X,Ue),v(Ue,`<Template slot="header">`),r(X,m(` 命名片段`));let We=f(`p`,He);r(He,We),o(We,`text-sm opacity-70`),r(We,m(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=s(`rue:component:anchor`);r(Y,Ge);let Ke=u(()=>{let t=_(),n=f(`div`,t);r(t,n),o(n,`grid gap-3 md:grid-cols-2`);let i=s(`rue:component:anchor`);r(n,i),b(()=>{let t=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});e(()=>p(t,n,i))});let a=s(`rue:slot:anchor`);r(n,a),b(()=>{let t=y.value?u(()=>{let e=_(),t=s(`rue:component:anchor`);return r(e,t),p(g(E,{children:u(()=>{let e=_(),t=s(`rue:component:anchor`);r(e,t),p(g(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let n=s(`rue:component:anchor`);return r(e,n),p(g(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,n),e})}),e,t),e}):``;e(()=>p(t,n,a))});let c=s(`rue:component:anchor`);return r(n,c),b(()=>{let t=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});e(()=>p(t,n,c))}),t}),qe=u(()=>{let e=_(),t=f(`div`,e);r(e,t);let n=f(`div`,t);r(t,n),o(n,`badge badge-secondary badge-outline`),r(n,m(`named slot`));let i=f(`h4`,t);r(t,i),o(i,`mt-2 text-lg font-semibold`);let a=l(i);r(i,a),b(()=>{v(a,S.value===`ops`?`运维场景面板`:`增长场景面板`)});let s=f(`p`,t);return r(t,s),o(s,`text-sm opacity-70`),r(s,m(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),e}),Je=u(()=>{let e=_(),t=f(`div`,e);r(e,t),o(t,`join`);let n=f(`button`,t);r(t,n),b(()=>{o(n,`btn btn-sm join-item ${S.value===`ops`?`btn-primary`:``}`)}),a(n,`click`,()=>{S.value=`ops`}),r(n,m(`运维`));let i=f(`button`,t);r(t,i),b(()=>{o(i,`btn btn-sm join-item ${S.value===`growth`?`btn-primary`:``}`)}),a(i,`click`,()=>{S.value=`growth`}),r(i,m(`增长`));let s=f(`button`,e);r(e,s),b(()=>{o(s,`btn btn-sm ${y.value?`btn-secondary`:`btn-outline`}`)}),a(s,`click`,()=>{y.value=!y.value});let c=l(s);return r(s,c),b(()=>{v(c,y.value?`隐藏摘要`:`显示摘要`)}),e});b(()=>{let t=g(ne,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});e(()=>p(t,Y,Ge))});let Z=f(`section`,J);r(J,Z),o(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=f(`div`,Z);r(Z,Q);let $=f(`h3`,Q);r(Q,$),o($,`font-semibold`),r($,m(`显式 `));let Ye=l($);r($,Ye),v(Ye,`<Template>`),r($,m(` 列表片段`));let Xe=f(`p`,Q);r(Q,Xe),o(Xe,`text-sm opacity-70`),r(Xe,m(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=f(`ul`,Z);r(Z,Ze),o(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=s(`rue:list:start`),$e=s(`rue:list:end`);r(Ze,Qe),r(Ze,$e);let et=new Map;return b(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(t,n,i,a,c)=>{let l=u(()=>{let n=_(),i=f(`li`,n);r(n,i),o(i,`list-row items-start gap-3`);let a=f(`div`,i);r(i,a),o(a,`list-col-grow`);let c=f(`div`,a);r(a,c),o(c,`font-medium`);let l=s(`rue:slot:anchor`);r(c,l),b(()=>{let n=t.title;e(()=>p(n,c,l))});let u=f(`div`,a);r(a,u),o(u,`text-sm opacity-70`);let d=s(`rue:slot:anchor`);r(u,d),b(()=>{let n=t.meta;e(()=>p(n,u,d))});let h=f(`span`,i);r(i,h),o(h,`badge badge-outline whitespace-nowrap`);let g=s(`rue:slot:anchor`);r(h,g),b(()=>{let n=t.status;e(()=>p(n,h,g))});let v=f(`li`,n);return r(n,v),o(v,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),r(v,m(`同一条数据额外展开的第二个兄弟节点`)),n});h(g(E,{key:t.id,children:l}),n,i,a)}})}),t}):``;e(()=>p(t,k,ae))}),t})}),c,x),c})};export{A as default};
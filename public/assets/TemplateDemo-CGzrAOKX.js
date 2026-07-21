import{Cn as e,Ct as t,E as n,H as r,Mt as i,Tt as a,dt as o,ft as s,ht as c,j as l,mt as u,ot as d,pn as f,pt as p,st as m,tn as h,vn as g}from"./context-8lXZvIn-.js";import{l as _,o as v,s as ee,t as y}from"./vapor-runtime-ygJWVcNn.js";import{a as b,n as te}from"./vapor-helpers-vapor-CMwHgsXf.js";import{i as x}from"./persistentSidebarPlayground-B3vwD8_y.js";import{t as S}from"./Code-DhoWkRkB.js";import{r as C}from"./SidebarPlaygroundExample-B78jsvoF.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=e=>l(()=>{let t=s(),r=o(`rue-template-anchor`);return m(t,r),n(w(e.children),t,r),t});r(T,`Template`);var ne={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},E=e=>_(t=>{let n=p(`article`,t);h(()=>{a(n,ne[e.tone??`base`])});let r=p(`h3`,n);m(n,r),a(r,`font-semibold`);let i=o(`rue:slot:anchor`);m(r,i),h(()=>{let t=e.title;g(()=>v(t,r,i))});let s=p(`p`,n);m(n,s),a(s,`mt-2 text-sm opacity-70`);let c=o(`rue:slot:anchor`);return m(s,c),h(()=>{let t=e.meta;g(()=>v(t,s,c))}),n}),re=e=>_(t=>{let n=p(`section`,t);a(n,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let r=p(`div`,n);m(n,r),a(r,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let i=p(`div`,r);m(r,i),a(i,`min-w-0 space-y-2`);let s=p(`div`,i);m(i,s),a(s,`text-xs uppercase tracking-[0.22em] opacity-55`),m(s,u(`named slot`));let c=o(`rue:component:anchor`);m(i,c),h(()=>{let t=y(x,{source:e,name:`header`,children:`未提供 header`});g(()=>v(t,i,c))});let l=p(`div`,r);m(r,l),a(l,`flex flex-wrap items-center gap-2`);let d=o(`rue:component:anchor`);m(l,d),h(()=>{let t=y(x,{source:e,name:`actions`});g(()=>v(t,l,d))});let f=p(`div`,n);m(n,f),a(f,`p-4`);let _=o(`rue:component:anchor`);return m(f,_),h(()=>{let t=y(x,{source:e,children:`未提供默认内容`});g(()=>v(t,f,_))}),n}),D={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},O={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},k=()=>{let{activeTab:n,showBurst:r,showSummary:l,mode:x,branchState:w,code:ne,cards:k,feed:ie}=b(`useSetup:0:0`,()=>e(()=>{let e=b(`ref:1:0`,()=>f(`preview`)),t=b(`ref:1:1`,()=>f(!0)),n=b(`ref:1:2`,()=>f(!0)),r=b(`ref:1:3`,()=>f(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>f(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:D[r.value],feed:O[r.value]}}));return _(e=>{let f=s(),b=o(`rue:component:anchor`);return m(f,b),v(y(C,{children:_(()=>{let e=s(),f=p(`h1`,e);m(e,f),a(f,`mb-4 text-5xl font-semibold md:mb-4`),m(f,u(`Template 内置组件`));let b=p(`div`,e);m(e,b),t(b,`role`,`tablist`),a(b,`tabs tabs-box`);let C=p(`button`,b);m(b,C),t(C,`role`,`tab`),h(()=>{a(C,`tab ${n.value===`preview`?`tab-active`:``}`)}),d(C,`click`,()=>{n.value=`preview`}),m(C,u(`效果`));let D=p(`button`,b);m(b,D),t(D,`role`,`tab`),h(()=>{a(D,`tab ${n.value===`code`?`tab-active`:``}`)}),d(D,`click`,()=>{n.value=`code`}),m(D,u(`代码`));let O=p(`div`,e);m(e,O),a(O,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ae=o(`rue:slot:anchor`);m(O,ae),h(()=>{let e=n.value===`code`?_(()=>{let e=s(),t=p(`div`,e);m(e,t),a(t,`card overflow-auto bg-base-100 shadow`);let n=p(`div`,t);m(t,n),a(n,`card-body p-0`);let r=o(`rue:component:anchor`);return m(n,r),h(()=>{let e=y(S,{className:`h-full`,lang:`tsx`,code:ne});g(()=>v(e,n,r))}),e}):``;g(()=>v(e,O,ae))}),m(O,u(` `));let oe=o(`rue:slot:anchor`);return m(O,oe),h(()=>{let e=n.value===`preview`?_(()=>{let e=s(),n=p(`div`,e);m(e,n),a(n,`grid gap-6`);let f=p(`div`,n);m(n,f),t(f,`role`,`alert`),a(f,`alert alert-success`);let b=p(`div`,f);m(f,b),a(b,`space-y-2`);let S=p(`div`,b);m(b,S),m(S,u(`这个页面改成了显式导入`));let C=p(`strong`,S);m(S,C);let ne=c(C);m(C,ne),i(ne,`<Template>`),m(S,u(`组件的写法，不再依赖小写 template lowering。`));let D=p(`div`,b);m(b,D),a(D,`text-sm opacity-80`),m(D,u(`当前示例覆盖命名 slot、`));let O=c(D);m(D,O),i(O,`<Template v-if>`),m(D,u(`、 `));let ae=c(D);m(D,ae),i(ae,`<Template v-if / v-else-if / v-else>`);let oe=c(D);m(D,oe),i(oe,` `),m(D,u(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let se=p(`div`,n);m(n,se),a(se,`card bg-base-100 shadow`);let A=p(`div`,se);m(se,A),a(A,`card-body gap-4`);let j=p(`div`,A);m(A,j),a(j,`flex flex-wrap items-center justify-between gap-3`);let ce=p(`div`,j);m(j,ce);let le=p(`h2`,ce);m(ce,le),a(le,`card-title`),m(le,u(`切换场景`));let ue=p(`p`,ce);m(ce,ue),a(ue,`text-sm opacity-70`),m(ue,u(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let M=p(`div`,j);m(j,M),a(M,`flex flex-wrap gap-3`);let N=p(`div`,M);m(M,N),a(N,`join`);let de=p(`button`,N);m(N,de),h(()=>{a(de,`btn btn-sm join-item ${x.value===`ops`?`btn-primary`:``}`)}),d(de,`click`,()=>{x.value=`ops`}),m(de,u(`运维`));let fe=p(`button`,N);m(N,fe),h(()=>{a(fe,`btn btn-sm join-item ${x.value===`growth`?`btn-primary`:``}`)}),d(fe,`click`,()=>{x.value=`growth`}),m(fe,u(`增长`));let P=p(`button`,M);m(M,P),h(()=>{a(P,`btn btn-sm ${r.value?`btn-secondary`:`btn-outline`}`)}),d(P,`click`,()=>{r.value=!r.value});let pe=c(P);m(P,pe),h(()=>{i(pe,r.value?`隐藏中间卡片`:`显示中间卡片`)});let F=p(`div`,A);m(A,F),a(F,`grid gap-4 xl:grid-cols-2`);let I=p(`section`,F);m(F,I),a(I,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let L=p(`div`,I);m(I,L),a(L,`flex flex-wrap items-center justify-between gap-2`);let me=p(`div`,L);m(L,me);let he=p(`h3`,me);m(me,he),a(he,`font-semibold`),m(he,u(`普通 div 包裹`));let ge=p(`p`,me);m(me,ge),a(ge,`text-sm opacity-70`),m(ge,u(`中间两张卡片会先进入一个额外 grid item。`));let _e=p(`span`,L);m(L,_e),a(_e,`badge badge-warning badge-outline`),m(_e,u(`直接网格项: `));let ve=c(_e);m(_e,ve),h(()=>{i(ve,r.value?3:2)});let R=p(`div`,I);m(I,R),a(R,`grid gap-3 md:grid-cols-2`);let ye=o(`rue:component:anchor`);m(R,ye),h(()=>{let e=y(E,{title:k.head.title,meta:k.head.meta,tone:`base`});g(()=>v(e,R,ye))});let be=o(`rue:slot:anchor`);m(R,be),h(()=>{let e=r.value?_(()=>{let e=s(),t=p(`div`,e);m(e,t),a(t,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let n=o(`rue:component:anchor`);m(t,n),h(()=>{let e=y(E,{title:k.burst[0].title,meta:k.burst[0].meta,tone:`primary`});g(()=>v(e,t,n))});let r=o(`rue:component:anchor`);return m(t,r),h(()=>{let e=y(E,{title:k.burst[1].title,meta:k.burst[1].meta,tone:`accent`});g(()=>v(e,t,r))}),e}):``;g(()=>v(e,R,be))});let xe=o(`rue:component:anchor`);m(R,xe),h(()=>{let e=y(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});g(()=>v(e,R,xe))});let z=p(`section`,F);m(F,z),a(z,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let B=p(`div`,z);m(z,B),a(B,`flex flex-wrap items-center justify-between gap-2`);let Se=p(`div`,B);m(B,Se);let V=p(`h3`,Se);m(Se,V),a(V,`font-semibold`),m(V,u(`显式 `));let Ce=c(V);m(V,Ce),i(Ce,`<Template v-if>`),m(V,u(` 条件片段`));let we=p(`p`,Se);m(Se,we),a(we,`text-sm opacity-70`),m(we,u(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let H=p(`span`,B);m(B,H),a(H,`badge badge-success badge-outline`),m(H,u(`直接网格项: `));let Te=c(H);m(H,Te),h(()=>{i(Te,r.value?4:2)});let U=p(`div`,z);m(z,U),a(U,`grid gap-3 md:grid-cols-2`);let Ee=o(`rue:component:anchor`);m(U,Ee),h(()=>{let e=y(E,{title:k.head.title,meta:k.head.meta,tone:`base`});g(()=>v(e,U,Ee))});let De=o(`rue:slot:anchor`);m(U,De),h(()=>{let e=r.value?_(()=>{let e=s(),t=o(`rue:component:anchor`);return m(e,t),v(y(T,{children:_(()=>{let e=s(),t=o(`rue:component:anchor`);m(e,t),h(()=>{let n=y(E,{title:k.burst[0].title,meta:k.burst[0].meta,tone:`primary`});g(()=>v(n,e,t))});let n=o(`rue:component:anchor`);return m(e,n),h(()=>{let t=y(E,{title:k.burst[1].title,meta:k.burst[1].meta,tone:`accent`});g(()=>v(t,e,n))}),e})}),e,t),e}):``;g(()=>v(e,U,De))});let Oe=o(`rue:component:anchor`);m(U,Oe),h(()=>{let e=y(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});g(()=>v(e,U,Oe))});let W=p(`section`,A);m(A,W),a(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=p(`div`,W);m(W,G),a(G,`flex flex-wrap items-center justify-between gap-3`);let ke=p(`div`,G);m(G,ke);let K=p(`h3`,ke);m(ke,K),a(K,`font-semibold`),m(K,u(`显式 `));let Ae=c(K);m(K,Ae),i(Ae,`<Template v-if>`),m(K,u(` / `));let je=c(K);m(K,je),i(je,`<Template v-else-if>`),m(K,u(` / `));let Me=c(K);m(K,Me),i(Me,`<Template v-else>`);let Ne=c(K);m(K,Ne),i(Ne,` `),m(K,u(`分支链`));let Pe=p(`p`,ke);m(ke,Pe),a(Pe,`text-sm opacity-70`),m(Pe,u(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=p(`div`,G);m(G,q),a(q,`join`);let Fe=p(`button`,q);m(q,Fe),h(()=>{a(Fe,`btn btn-sm join-item ${w.value===`healthy`?`btn-info`:`btn-outline`}`)}),d(Fe,`click`,()=>{w.value=`healthy`}),m(Fe,u(`健康`));let Ie=p(`button`,q);m(q,Ie),h(()=>{a(Ie,`btn btn-sm join-item ${w.value===`warning`?`btn-info`:`btn-outline`}`)}),d(Ie,`click`,()=>{w.value=`warning`}),m(Ie,u(`预警`));let Le=p(`button`,q);m(q,Le),h(()=>{a(Le,`btn btn-sm join-item ${w.value===`critical`?`btn-info`:`btn-outline`}`)}),d(Le,`click`,()=>{w.value=`critical`}),m(Le,u(`故障`));let Re=p(`div`,W);m(W,Re),a(Re,`badge badge-info badge-outline`),m(Re,u(`当前分支: `));let ze=c(Re);m(Re,ze),h(()=>{i(ze,w.value)});let Be=p(`div`,W);m(W,Be),a(Be,`grid gap-3 md:grid-cols-2`);let Ve=o(`rue:slot:anchor`);m(Be,Ve),h(()=>{let e=w.value===`healthy`?_(()=>{let e=s(),t=o(`rue:component:anchor`);return m(e,t),v(y(T,{children:_(()=>{let e=s(),t=o(`rue:component:anchor`);m(e,t),v(y(E,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let n=o(`rue:component:anchor`);return m(e,n),v(y(E,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,n),e})}),e,t),e}):w.value===`warning`?_(()=>{let e=s(),t=o(`rue:component:anchor`);return m(e,t),v(y(T,{children:_(()=>{let e=s(),t=o(`rue:component:anchor`);m(e,t),v(y(E,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let n=o(`rue:component:anchor`);return m(e,n),v(y(E,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,n),e})}),e,t),e}):_(()=>{let e=s(),t=o(`rue:component:anchor`);return m(e,t),v(y(T,{children:_(()=>{let e=s(),t=o(`rue:component:anchor`);m(e,t),v(y(E,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let n=o(`rue:component:anchor`);return m(e,n),v(y(E,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,n),e})}),e,t),e});g(()=>v(e,Be,Ve))});let J=p(`div`,A);m(A,J),a(J,`grid gap-4 xl:grid-cols-2`);let Y=p(`section`,J);m(J,Y),a(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=p(`div`,Y);m(Y,He);let X=p(`h3`,He);m(He,X),a(X,`font-semibold`),m(X,u(`显式 `));let Ue=c(X);m(X,Ue),i(Ue,`<Template slot="header">`),m(X,u(` 命名片段`));let We=p(`p`,He);m(He,We),a(We,`text-sm opacity-70`),m(We,u(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=o(`rue:component:anchor`);m(Y,Ge);let Ke=_(()=>{let e=s(),t=p(`div`,e);m(e,t),a(t,`grid gap-3 md:grid-cols-2`);let n=o(`rue:component:anchor`);m(t,n),h(()=>{let e=y(E,{title:k.head.title,meta:k.head.meta,tone:`base`});g(()=>v(e,t,n))});let r=o(`rue:slot:anchor`);m(t,r),h(()=>{let e=l.value?_(()=>{let e=s(),t=o(`rue:component:anchor`);return m(e,t),v(y(T,{children:_(()=>{let e=s(),t=o(`rue:component:anchor`);m(e,t),v(y(E,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let n=o(`rue:component:anchor`);return m(e,n),v(y(E,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,n),e})}),e,t),e}):``;g(()=>v(e,t,r))});let i=o(`rue:component:anchor`);return m(t,i),h(()=>{let e=y(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});g(()=>v(e,t,i))}),e}),qe=_(()=>{let e=s(),t=p(`div`,e);m(e,t);let n=p(`div`,t);m(t,n),a(n,`badge badge-secondary badge-outline`),m(n,u(`named slot`));let r=p(`h4`,t);m(t,r),a(r,`mt-2 text-lg font-semibold`);let o=c(r);m(r,o),h(()=>{i(o,x.value===`ops`?`运维场景面板`:`增长场景面板`)});let l=p(`p`,t);return m(t,l),a(l,`text-sm opacity-70`),m(l,u(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),e}),Je=_(()=>{let e=s(),t=p(`div`,e);m(e,t),a(t,`join`);let n=p(`button`,t);m(t,n),h(()=>{a(n,`btn btn-sm join-item ${x.value===`ops`?`btn-primary`:``}`)}),d(n,`click`,()=>{x.value=`ops`}),m(n,u(`运维`));let r=p(`button`,t);m(t,r),h(()=>{a(r,`btn btn-sm join-item ${x.value===`growth`?`btn-primary`:``}`)}),d(r,`click`,()=>{x.value=`growth`}),m(r,u(`增长`));let o=p(`button`,e);m(e,o),h(()=>{a(o,`btn btn-sm ${l.value?`btn-secondary`:`btn-outline`}`)}),d(o,`click`,()=>{l.value=!l.value});let f=c(o);return m(o,f),h(()=>{i(f,l.value?`隐藏摘要`:`显示摘要`)}),e});h(()=>{let e=y(re,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});g(()=>v(e,Y,Ge))});let Z=p(`section`,J);m(J,Z),a(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=p(`div`,Z);m(Z,Q);let $=p(`h3`,Q);m(Q,$),a($,`font-semibold`),m($,u(`显式 `));let Ye=c($);m($,Ye),i(Ye,`<Template>`),m($,u(` 列表片段`));let Xe=p(`p`,Q);m(Q,Xe),a(Xe,`text-sm opacity-70`),m(Xe,u(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=p(`ul`,Z);m(Z,Ze),a(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=o(`rue:list:start`),$e=o(`rue:list:end`);m(Ze,Qe),m(Ze,$e);let et=new Map;return h(()=>{et=te({items:ie||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(e,t,n,r,i)=>{let c=_(()=>{let t=s(),n=p(`li`,t);m(t,n),a(n,`list-row items-start gap-3`);let r=p(`div`,n);m(n,r),a(r,`list-col-grow`);let i=p(`div`,r);m(r,i),a(i,`font-medium`);let c=o(`rue:slot:anchor`);m(i,c),h(()=>{let t=e.title;g(()=>v(t,i,c))});let l=p(`div`,r);m(r,l),a(l,`text-sm opacity-70`);let d=o(`rue:slot:anchor`);m(l,d),h(()=>{let t=e.meta;g(()=>v(t,l,d))});let f=p(`span`,n);m(n,f),a(f,`badge badge-outline whitespace-nowrap`);let _=o(`rue:slot:anchor`);m(f,_),h(()=>{let t=e.status;g(()=>v(t,f,_))});let ee=p(`li`,t);return m(t,ee),a(ee,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),m(ee,u(`同一条数据额外展开的第二个兄弟节点`)),t});ee(y(T,{key:e.id,children:c}),t,n,r)}})}),e}):``;g(()=>v(e,O,oe))}),e})}),f,b),f})};export{k as default};
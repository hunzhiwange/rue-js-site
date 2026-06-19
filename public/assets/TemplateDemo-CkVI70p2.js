import{$ as e,$t as t,Bt as n,Gt as r,L as i,M as a,R as o,X as s,Xt as c,Z as l,ct as u,et as d,gt as f,l as p,nt as m,o as h,rt as g,s as ee,t as _,tt as v,ut as y}from"./vapor-runtime-CKrmRMZX.js";import{a as b,n as te}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{o as x}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as S}from"./Code-D5UqTwV6.js";import{r as C}from"./SidebarPlaygroundExample-D2vGHFCu.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=t=>i(()=>{let n=d(),r=e(`rue-template-anchor`);return l(n,r),a(w(t.children),n,r),n});o(T,`Template`);var ne={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},E=n=>p(i=>{let a=v(`article`,i);t(()=>{y(a,ne[n.tone??`base`])});let o=v(`h3`,a);l(a,o),y(o,`font-semibold`);let s=e(`rue:slot:anchor`);l(o,s),t(()=>{let e=n.title;r(()=>h(e,o,s))});let c=v(`p`,a);l(a,c),y(c,`mt-2 text-sm opacity-70`);let u=e(`rue:slot:anchor`);return l(c,u),t(()=>{let e=n.meta;r(()=>h(e,c,u))}),a}),re=n=>p(i=>{let a=v(`section`,i);y(a,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let o=v(`div`,a);l(a,o),y(o,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let s=v(`div`,o);l(o,s),y(s,`min-w-0 space-y-2`);let c=v(`div`,s);l(s,c),y(c,`text-xs uppercase tracking-[0.22em] opacity-55`),l(c,m(`named slot`));let u=e(`rue:component:anchor`);l(s,u),t(()=>{let e=_(x,{source:n,name:`header`,children:`未提供 header`});r(()=>h(e,s,u))});let d=v(`div`,o);l(o,d),y(d,`flex flex-wrap items-center gap-2`);let f=e(`rue:component:anchor`);l(d,f),t(()=>{let e=_(x,{source:n,name:`actions`});r(()=>h(e,d,f))});let p=v(`div`,a);l(a,p),y(p,`p-4`);let g=e(`rue:component:anchor`);return l(p,g),t(()=>{let e=_(x,{source:n,children:`未提供默认内容`});r(()=>h(e,p,g))}),a}),D={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},O={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},k=()=>{let{activeTab:i,showBurst:a,showSummary:o,mode:x,branchState:w,code:ne,cards:k,feed:ie}=b(`useSetup:0:0`,()=>c(()=>{let e=b(`ref:1:0`,()=>n(`preview`)),t=b(`ref:1:1`,()=>n(!0)),r=b(`ref:1:2`,()=>n(!0)),i=b(`ref:1:3`,()=>n(`ops`));return{activeTab:e,showBurst:t,showSummary:r,mode:i,branchState:b(`ref:1:4`,()=>n(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:D[i.value],feed:O[i.value]}}));return p(n=>{let c=d(),b=e(`rue:component:anchor`);return l(c,b),h(_(C,{children:p(()=>{let n=d(),c=v(`h1`,n);l(n,c),y(c,`mb-4 text-5xl font-semibold md:mb-4`),l(c,m(`Template 内置组件`));let b=v(`div`,n);l(n,b),u(b,`role`,`tablist`),y(b,`tabs tabs-box`);let C=v(`button`,b);l(b,C),u(C,`role`,`tab`),t(()=>{y(C,`tab ${i.value===`preview`?`tab-active`:``}`)}),s(C,`click`,()=>{i.value=`preview`}),l(C,m(`效果`));let D=v(`button`,b);l(b,D),u(D,`role`,`tab`),t(()=>{y(D,`tab ${i.value===`code`?`tab-active`:``}`)}),s(D,`click`,()=>{i.value=`code`}),l(D,m(`代码`));let O=v(`div`,n);l(n,O),y(O,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ae=e(`rue:slot:anchor`);l(O,ae),t(()=>{let n=i.value===`code`?p(()=>{let n=d(),i=v(`div`,n);l(n,i),y(i,`card overflow-auto bg-base-100 shadow`);let a=v(`div`,i);l(i,a),y(a,`card-body p-0`);let o=e(`rue:component:anchor`);return l(a,o),t(()=>{let e=_(S,{className:`h-full`,lang:`tsx`,code:ne});r(()=>h(e,a,o))}),n}):``;r(()=>h(n,O,ae))}),l(O,m(` `));let oe=e(`rue:slot:anchor`);return l(O,oe),t(()=>{let n=i.value===`preview`?p(()=>{let n=d(),i=v(`div`,n);l(n,i),y(i,`grid gap-6`);let c=v(`div`,i);l(i,c),u(c,`role`,`alert`),y(c,`alert alert-success`);let b=v(`div`,c);l(c,b),y(b,`space-y-2`);let S=v(`div`,b);l(b,S),l(S,m(`这个页面改成了显式导入`));let C=v(`strong`,S);l(S,C);let ne=g(C);l(C,ne),f(ne,`<Template>`),l(S,m(`组件的写法，不再依赖小写 template lowering。`));let D=v(`div`,b);l(b,D),y(D,`text-sm opacity-80`),l(D,m(`当前示例覆盖命名 slot、`));let O=g(D);l(D,O),f(O,`<Template v-if>`),l(D,m(`、 `));let ae=g(D);l(D,ae),f(ae,`<Template v-if / v-else-if / v-else>`);let oe=g(D);l(D,oe),f(oe,` `),l(D,m(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let se=v(`div`,i);l(i,se),y(se,`card bg-base-100 shadow`);let A=v(`div`,se);l(se,A),y(A,`card-body gap-4`);let j=v(`div`,A);l(A,j),y(j,`flex flex-wrap items-center justify-between gap-3`);let ce=v(`div`,j);l(j,ce);let le=v(`h2`,ce);l(ce,le),y(le,`card-title`),l(le,m(`切换场景`));let ue=v(`p`,ce);l(ce,ue),y(ue,`text-sm opacity-70`),l(ue,m(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let M=v(`div`,j);l(j,M),y(M,`flex flex-wrap gap-3`);let N=v(`div`,M);l(M,N),y(N,`join`);let de=v(`button`,N);l(N,de),t(()=>{y(de,`btn btn-sm join-item ${x.value===`ops`?`btn-primary`:``}`)}),s(de,`click`,()=>{x.value=`ops`}),l(de,m(`运维`));let fe=v(`button`,N);l(N,fe),t(()=>{y(fe,`btn btn-sm join-item ${x.value===`growth`?`btn-primary`:``}`)}),s(fe,`click`,()=>{x.value=`growth`}),l(fe,m(`增长`));let P=v(`button`,M);l(M,P),t(()=>{y(P,`btn btn-sm ${a.value?`btn-secondary`:`btn-outline`}`)}),s(P,`click`,()=>{a.value=!a.value});let pe=g(P);l(P,pe),t(()=>{f(pe,a.value?`隐藏中间卡片`:`显示中间卡片`)});let F=v(`div`,A);l(A,F),y(F,`grid gap-4 xl:grid-cols-2`);let I=v(`section`,F);l(F,I),y(I,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let L=v(`div`,I);l(I,L),y(L,`flex flex-wrap items-center justify-between gap-2`);let me=v(`div`,L);l(L,me);let he=v(`h3`,me);l(me,he),y(he,`font-semibold`),l(he,m(`普通 div 包裹`));let ge=v(`p`,me);l(me,ge),y(ge,`text-sm opacity-70`),l(ge,m(`中间两张卡片会先进入一个额外 grid item。`));let _e=v(`span`,L);l(L,_e),y(_e,`badge badge-warning badge-outline`),l(_e,m(`直接网格项: `));let ve=g(_e);l(_e,ve),t(()=>{f(ve,a.value?3:2)});let R=v(`div`,I);l(I,R),y(R,`grid gap-3 md:grid-cols-2`);let ye=e(`rue:component:anchor`);l(R,ye),t(()=>{let e=_(E,{title:k.head.title,meta:k.head.meta,tone:`base`});r(()=>h(e,R,ye))});let be=e(`rue:slot:anchor`);l(R,be),t(()=>{let n=a.value?p(()=>{let n=d(),i=v(`div`,n);l(n,i),y(i,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let a=e(`rue:component:anchor`);l(i,a),t(()=>{let e=_(E,{title:k.burst[0].title,meta:k.burst[0].meta,tone:`primary`});r(()=>h(e,i,a))});let o=e(`rue:component:anchor`);return l(i,o),t(()=>{let e=_(E,{title:k.burst[1].title,meta:k.burst[1].meta,tone:`accent`});r(()=>h(e,i,o))}),n}):``;r(()=>h(n,R,be))});let xe=e(`rue:component:anchor`);l(R,xe),t(()=>{let e=_(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});r(()=>h(e,R,xe))});let z=v(`section`,F);l(F,z),y(z,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let B=v(`div`,z);l(z,B),y(B,`flex flex-wrap items-center justify-between gap-2`);let Se=v(`div`,B);l(B,Se);let V=v(`h3`,Se);l(Se,V),y(V,`font-semibold`),l(V,m(`显式 `));let Ce=g(V);l(V,Ce),f(Ce,`<Template v-if>`),l(V,m(` 条件片段`));let we=v(`p`,Se);l(Se,we),y(we,`text-sm opacity-70`),l(we,m(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let H=v(`span`,B);l(B,H),y(H,`badge badge-success badge-outline`),l(H,m(`直接网格项: `));let Te=g(H);l(H,Te),t(()=>{f(Te,a.value?4:2)});let U=v(`div`,z);l(z,U),y(U,`grid gap-3 md:grid-cols-2`);let Ee=e(`rue:component:anchor`);l(U,Ee),t(()=>{let e=_(E,{title:k.head.title,meta:k.head.meta,tone:`base`});r(()=>h(e,U,Ee))});let De=e(`rue:slot:anchor`);l(U,De),t(()=>{let n=a.value?p(()=>{let n=d(),i=e(`rue:component:anchor`);return l(n,i),h(_(T,{children:p(()=>{let n=d(),i=e(`rue:component:anchor`);l(n,i),t(()=>{let e=_(E,{title:k.burst[0].title,meta:k.burst[0].meta,tone:`primary`});r(()=>h(e,n,i))});let a=e(`rue:component:anchor`);return l(n,a),t(()=>{let e=_(E,{title:k.burst[1].title,meta:k.burst[1].meta,tone:`accent`});r(()=>h(e,n,a))}),n})}),n,i),n}):``;r(()=>h(n,U,De))});let Oe=e(`rue:component:anchor`);l(U,Oe),t(()=>{let e=_(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});r(()=>h(e,U,Oe))});let W=v(`section`,A);l(A,W),y(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=v(`div`,W);l(W,G),y(G,`flex flex-wrap items-center justify-between gap-3`);let ke=v(`div`,G);l(G,ke);let K=v(`h3`,ke);l(ke,K),y(K,`font-semibold`),l(K,m(`显式 `));let Ae=g(K);l(K,Ae),f(Ae,`<Template v-if>`),l(K,m(` / `));let je=g(K);l(K,je),f(je,`<Template v-else-if>`),l(K,m(` / `));let Me=g(K);l(K,Me),f(Me,`<Template v-else>`);let Ne=g(K);l(K,Ne),f(Ne,` `),l(K,m(`分支链`));let Pe=v(`p`,ke);l(ke,Pe),y(Pe,`text-sm opacity-70`),l(Pe,m(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=v(`div`,G);l(G,q),y(q,`join`);let Fe=v(`button`,q);l(q,Fe),t(()=>{y(Fe,`btn btn-sm join-item ${w.value===`healthy`?`btn-info`:`btn-outline`}`)}),s(Fe,`click`,()=>{w.value=`healthy`}),l(Fe,m(`健康`));let Ie=v(`button`,q);l(q,Ie),t(()=>{y(Ie,`btn btn-sm join-item ${w.value===`warning`?`btn-info`:`btn-outline`}`)}),s(Ie,`click`,()=>{w.value=`warning`}),l(Ie,m(`预警`));let Le=v(`button`,q);l(q,Le),t(()=>{y(Le,`btn btn-sm join-item ${w.value===`critical`?`btn-info`:`btn-outline`}`)}),s(Le,`click`,()=>{w.value=`critical`}),l(Le,m(`故障`));let Re=v(`div`,W);l(W,Re),y(Re,`badge badge-info badge-outline`),l(Re,m(`当前分支: `));let ze=g(Re);l(Re,ze),t(()=>{f(ze,w.value)});let Be=v(`div`,W);l(W,Be),y(Be,`grid gap-3 md:grid-cols-2`);let Ve=e(`rue:slot:anchor`);l(Be,Ve),t(()=>{let t=w.value===`healthy`?p(()=>{let t=d(),n=e(`rue:component:anchor`);return l(t,n),h(_(T,{children:p(()=>{let t=d(),n=e(`rue:component:anchor`);l(t,n),h(_(E,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),t,n);let r=e(`rue:component:anchor`);return l(t,r),h(_(E,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),t,r),t})}),t,n),t}):w.value===`warning`?p(()=>{let t=d(),n=e(`rue:component:anchor`);return l(t,n),h(_(T,{children:p(()=>{let t=d(),n=e(`rue:component:anchor`);l(t,n),h(_(E,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),t,n);let r=e(`rue:component:anchor`);return l(t,r),h(_(E,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),t,r),t})}),t,n),t}):p(()=>{let t=d(),n=e(`rue:component:anchor`);return l(t,n),h(_(T,{children:p(()=>{let t=d(),n=e(`rue:component:anchor`);l(t,n),h(_(E,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),t,n);let r=e(`rue:component:anchor`);return l(t,r),h(_(E,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),t,r),t})}),t,n),t});r(()=>h(t,Be,Ve))});let J=v(`div`,A);l(A,J),y(J,`grid gap-4 xl:grid-cols-2`);let Y=v(`section`,J);l(J,Y),y(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=v(`div`,Y);l(Y,He);let X=v(`h3`,He);l(He,X),y(X,`font-semibold`),l(X,m(`显式 `));let Ue=g(X);l(X,Ue),f(Ue,`<Template slot="header">`),l(X,m(` 命名片段`));let We=v(`p`,He);l(He,We),y(We,`text-sm opacity-70`),l(We,m(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=e(`rue:component:anchor`);l(Y,Ge);let Ke=p(()=>{let n=d(),i=v(`div`,n);l(n,i),y(i,`grid gap-3 md:grid-cols-2`);let a=e(`rue:component:anchor`);l(i,a),t(()=>{let e=_(E,{title:k.head.title,meta:k.head.meta,tone:`base`});r(()=>h(e,i,a))});let s=e(`rue:slot:anchor`);l(i,s),t(()=>{let t=o.value?p(()=>{let t=d(),n=e(`rue:component:anchor`);return l(t,n),h(_(T,{children:p(()=>{let t=d(),n=e(`rue:component:anchor`);l(t,n),h(_(E,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),t,n);let r=e(`rue:component:anchor`);return l(t,r),h(_(E,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),t,r),t})}),t,n),t}):``;r(()=>h(t,i,s))});let c=e(`rue:component:anchor`);return l(i,c),t(()=>{let e=_(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});r(()=>h(e,i,c))}),n}),qe=p(()=>{let e=d(),n=v(`div`,e);l(e,n);let r=v(`div`,n);l(n,r),y(r,`badge badge-secondary badge-outline`),l(r,m(`named slot`));let i=v(`h4`,n);l(n,i),y(i,`mt-2 text-lg font-semibold`);let a=g(i);l(i,a),t(()=>{f(a,x.value===`ops`?`运维场景面板`:`增长场景面板`)});let o=v(`p`,n);return l(n,o),y(o,`text-sm opacity-70`),l(o,m(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),e}),Je=p(()=>{let e=d(),n=v(`div`,e);l(e,n),y(n,`join`);let r=v(`button`,n);l(n,r),t(()=>{y(r,`btn btn-sm join-item ${x.value===`ops`?`btn-primary`:``}`)}),s(r,`click`,()=>{x.value=`ops`}),l(r,m(`运维`));let i=v(`button`,n);l(n,i),t(()=>{y(i,`btn btn-sm join-item ${x.value===`growth`?`btn-primary`:``}`)}),s(i,`click`,()=>{x.value=`growth`}),l(i,m(`增长`));let a=v(`button`,e);l(e,a),t(()=>{y(a,`btn btn-sm ${o.value?`btn-secondary`:`btn-outline`}`)}),s(a,`click`,()=>{o.value=!o.value});let c=g(a);return l(a,c),t(()=>{f(c,o.value?`隐藏摘要`:`显示摘要`)}),e});t(()=>{let e=_(re,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});r(()=>h(e,Y,Ge))});let Z=v(`section`,J);l(J,Z),y(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=v(`div`,Z);l(Z,Q);let $=v(`h3`,Q);l(Q,$),y($,`font-semibold`),l($,m(`显式 `));let Ye=g($);l($,Ye),f(Ye,`<Template>`),l($,m(` 列表片段`));let Xe=v(`p`,Q);l(Q,Xe),y(Xe,`text-sm opacity-70`),l(Xe,m(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=v(`ul`,Z);l(Z,Ze),y(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=e(`rue:list:start`),$e=e(`rue:list:end`);l(Ze,Qe),l(Ze,$e);let et=new Map;return t(()=>{et=te({items:ie||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(n,i,a,o,s)=>{let c=p(()=>{let i=d(),a=v(`li`,i);l(i,a),y(a,`list-row items-start gap-3`);let o=v(`div`,a);l(a,o),y(o,`list-col-grow`);let s=v(`div`,o);l(o,s),y(s,`font-medium`);let c=e(`rue:slot:anchor`);l(s,c),t(()=>{let e=n.title;r(()=>h(e,s,c))});let u=v(`div`,o);l(o,u),y(u,`text-sm opacity-70`);let f=e(`rue:slot:anchor`);l(u,f),t(()=>{let e=n.meta;r(()=>h(e,u,f))});let p=v(`span`,a);l(a,p),y(p,`badge badge-outline whitespace-nowrap`);let g=e(`rue:slot:anchor`);l(p,g),t(()=>{let e=n.status;r(()=>h(e,p,g))});let ee=v(`li`,i);return l(i,ee),y(ee,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),l(ee,m(`同一条数据额外展开的第二个兄弟节点`)),i});ee(_(T,{key:n.id,children:c}),i,a,o)}})}),n}):``;r(()=>h(n,O,oe))}),n})}),c,b),c})};export{k as default};
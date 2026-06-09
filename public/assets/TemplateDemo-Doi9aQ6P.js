import{$ as e,Ht as t,J as n,L as r,N as i,Q as a,Rt as o,Xt as s,Y as c,Z as l,c as u,ct as d,et as f,l as p,mt as m,ot as h,qt as g,s as _,t as v,tt as y}from"./vapor-runtime-aZAg0Qkw.js";import{a as b,n as ee}from"./vapor-helpers-vapor-gtGwiIv0.js";import{o as x}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as S}from"./Code-5DOEyGxf.js";import{r as C}from"./SidebarPlaygroundExample-cASgDpH3.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=e=>r(()=>{let t=a(),n=l(`rue-template-anchor`);return c(t,n),i(w(e.children),t,n),t}),E={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=n=>p(r=>{let i=e(`article`,r);s(()=>{d(i,String(E[n.tone??`base`]))});let a=e(`h3`,i);c(i,a),d(a,`font-semibold`);let o=l(`rue:slot:anchor`);c(a,o),s(()=>{let e=n.title;t(()=>_(e,a,o))});let u=e(`p`,i);c(i,u),d(u,`mt-2 text-sm opacity-70`);let f=l(`rue:slot:anchor`);return c(u,f),s(()=>{let e=n.meta;t(()=>_(e,u,f))}),i}),te=n=>p(r=>{let i=e(`section`,r);d(i,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let a=e(`div`,i);c(i,a),d(a,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let o=e(`div`,a);c(a,o),d(o,`min-w-0 space-y-2`);let u=e(`div`,o);c(o,u),d(u,`text-xs uppercase tracking-[0.22em] opacity-55`),c(u,f(`named slot`));let p=l(`rue:component:anchor`);c(o,p),s(()=>{let e=v(x,{source:n,name:`header`,children:`未提供 header`});t(()=>_(e,o,p))});let m=e(`div`,a);c(a,m),d(m,`flex flex-wrap items-center gap-2`);let h=l(`rue:component:anchor`);c(m,h),s(()=>{let e=v(x,{source:n,name:`actions`});t(()=>_(e,m,h))});let g=e(`div`,i);c(i,g),d(g,`p-4`);let y=l(`rue:component:anchor`);return c(g,y),s(()=>{let e=v(x,{source:n,children:`未提供默认内容`});t(()=>_(e,g,y))}),i}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},ne=()=>{let{activeTab:r,showBurst:i,showSummary:x,mode:w,branchState:E,code:ne,cards:A,feed:re}=b(`useSetup:0:0`,()=>g(()=>{let e=b(`ref:1:0`,()=>o(`preview`)),t=b(`ref:1:1`,()=>o(!0)),n=b(`ref:1:2`,()=>o(!0)),r=b(`ref:1:3`,()=>o(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>o(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[r.value],feed:k[r.value]}}));return p(o=>{let g=a(),b=l(`rue:component:anchor`);return c(g,b),_(v(C,{children:p(()=>{let o=a(),g=e(`h1`,o);c(o,g),d(g,`mb-4 text-5xl font-semibold md:mb-4`),c(g,f(`Template 内置组件`));let b=e(`div`,o);c(o,b),h(b,`role`,`tablist`),d(b,`tabs tabs-box`);let C=e(`button`,b);c(b,C),h(C,`role`,`tab`),s(()=>{d(C,String(`tab ${r.value===`preview`?`tab-active`:``}`))}),n(C,`click`,()=>{r.value=`preview`}),c(C,f(`效果`));let O=e(`button`,b);c(b,O),h(O,`role`,`tab`),s(()=>{d(O,String(`tab ${r.value===`code`?`tab-active`:``}`))}),n(O,`click`,()=>{r.value=`code`}),c(O,f(`代码`));let k=e(`div`,o);c(o,k),d(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ie=l(`rue:slot:anchor`);c(k,ie),s(()=>{let n=r.value===`code`?p(()=>{let n=a(),r=e(`div`,n);c(n,r),d(r,`card overflow-auto bg-base-100 shadow`);let i=e(`div`,r);c(r,i),d(i,`card-body p-0`);let o=l(`rue:component:anchor`);return c(i,o),s(()=>{let e=v(S,{className:`h-full`,lang:`tsx`,code:ne});t(()=>_(e,i,o))}),n}):``;t(()=>_(n,k,ie))}),c(k,f(` `));let ae=l(`rue:slot:anchor`);return c(k,ae),s(()=>{let o=r.value===`preview`?p(()=>{let r=a(),o=e(`div`,r);c(r,o),d(o,`grid gap-6`);let g=e(`div`,o);c(o,g),h(g,`role`,`alert`),d(g,`alert alert-success`);let b=e(`div`,g);c(g,b),d(b,`space-y-2`);let S=e(`div`,b);c(b,S),c(S,f(`这个页面改成了显式导入`));let C=e(`strong`,S);c(S,C);let O=y(C);c(C,O),m(O,`<Template>`),c(S,f(`组件的写法，不再依赖小写 template lowering。`));let k=e(`div`,b);c(b,k),d(k,`text-sm opacity-80`),c(k,f(`当前示例覆盖命名 slot、`));let ne=y(k);c(k,ne),m(ne,`<Template v-if>`),c(k,f(`、 `));let ie=y(k);c(k,ie),m(ie,`<Template v-if / v-else-if / v-else>`);let ae=y(k);c(k,ae),m(ae,` `),c(k,f(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let oe=e(`div`,o);c(o,oe),d(oe,`card bg-base-100 shadow`);let j=e(`div`,oe);c(oe,j),d(j,`card-body gap-4`);let M=e(`div`,j);c(j,M),d(M,`flex flex-wrap items-center justify-between gap-3`);let se=e(`div`,M);c(M,se);let ce=e(`h2`,se);c(se,ce),d(ce,`card-title`),c(ce,f(`切换场景`));let le=e(`p`,se);c(se,le),d(le,`text-sm opacity-70`),c(le,f(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=e(`div`,M);c(M,N),d(N,`flex flex-wrap gap-3`);let P=e(`div`,N);c(N,P),d(P,`join`);let ue=e(`button`,P);c(P,ue),s(()=>{d(ue,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),n(ue,`click`,()=>{w.value=`ops`}),c(ue,f(`运维`));let de=e(`button`,P);c(P,de),s(()=>{d(de,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),n(de,`click`,()=>{w.value=`growth`}),c(de,f(`增长`));let F=e(`button`,N);c(N,F),s(()=>{d(F,String(`btn btn-sm ${i.value?`btn-secondary`:`btn-outline`}`))}),n(F,`click`,()=>{i.value=!i.value});let fe=y(F);c(F,fe),s(()=>{m(fe,i.value?`隐藏中间卡片`:`显示中间卡片`)});let I=e(`div`,j);c(j,I),d(I,`grid gap-4 xl:grid-cols-2`);let L=e(`section`,I);c(I,L),d(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=e(`div`,L);c(L,R),d(R,`flex flex-wrap items-center justify-between gap-2`);let pe=e(`div`,R);c(R,pe);let me=e(`h3`,pe);c(pe,me),d(me,`font-semibold`),c(me,f(`普通 div 包裹`));let he=e(`p`,pe);c(pe,he),d(he,`text-sm opacity-70`),c(he,f(`中间两张卡片会先进入一个额外 grid item。`));let ge=e(`span`,R);c(R,ge),d(ge,`badge badge-warning badge-outline`),c(ge,f(`直接网格项: `));let _e=y(ge);c(ge,_e),s(()=>{m(_e,i.value?3:2)});let z=e(`div`,L);c(L,z),d(z,`grid gap-3 md:grid-cols-2`);let ve=l(`rue:component:anchor`);c(z,ve),s(()=>{let e=v(D,{title:A.head.title,meta:A.head.meta,tone:`base`});t(()=>_(e,z,ve))});let ye=l(`rue:slot:anchor`);c(z,ye),s(()=>{let n=i.value?p(()=>{let n=a(),r=e(`div`,n);c(n,r),d(r,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let i=l(`rue:component:anchor`);c(r,i),s(()=>{let e=v(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});t(()=>_(e,r,i))});let o=l(`rue:component:anchor`);return c(r,o),s(()=>{let e=v(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});t(()=>_(e,r,o))}),n}):``;t(()=>_(n,z,ye))});let be=l(`rue:component:anchor`);c(z,be),s(()=>{let e=v(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});t(()=>_(e,z,be))});let B=e(`section`,I);c(I,B),d(B,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let V=e(`div`,B);c(B,V),d(V,`flex flex-wrap items-center justify-between gap-2`);let xe=e(`div`,V);c(V,xe);let H=e(`h3`,xe);c(xe,H),d(H,`font-semibold`),c(H,f(`显式 `));let Se=y(H);c(H,Se),m(Se,`<Template v-if>`),c(H,f(` 条件片段`));let Ce=e(`p`,xe);c(xe,Ce),d(Ce,`text-sm opacity-70`),c(Ce,f(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let we=e(`span`,V);c(V,we),d(we,`badge badge-success badge-outline`),c(we,f(`直接网格项: `));let Te=y(we);c(we,Te),s(()=>{m(Te,i.value?4:2)});let U=e(`div`,B);c(B,U),d(U,`grid gap-3 md:grid-cols-2`);let Ee=l(`rue:component:anchor`);c(U,Ee),s(()=>{let e=v(D,{title:A.head.title,meta:A.head.meta,tone:`base`});t(()=>_(e,U,Ee))});let De=l(`rue:slot:anchor`);c(U,De),s(()=>{let e=i.value?p(()=>{let e=a(),n=l(`rue:component:anchor`);return c(e,n),_(v(T,{children:p(()=>{let e=a(),n=l(`rue:component:anchor`);c(e,n),s(()=>{let r=v(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});t(()=>_(r,e,n))});let r=l(`rue:component:anchor`);return c(e,r),s(()=>{let n=v(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});t(()=>_(n,e,r))}),e})}),e,n),e}):``;t(()=>_(e,U,De))});let Oe=l(`rue:component:anchor`);c(U,Oe),s(()=>{let e=v(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});t(()=>_(e,U,Oe))});let W=e(`section`,j);c(j,W),d(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=e(`div`,W);c(W,G),d(G,`flex flex-wrap items-center justify-between gap-3`);let ke=e(`div`,G);c(G,ke);let K=e(`h3`,ke);c(ke,K),d(K,`font-semibold`),c(K,f(`显式 `));let Ae=y(K);c(K,Ae),m(Ae,`<Template v-if>`),c(K,f(` / `));let je=y(K);c(K,je),m(je,`<Template v-else-if>`),c(K,f(` / `));let Me=y(K);c(K,Me),m(Me,`<Template v-else>`);let Ne=y(K);c(K,Ne),m(Ne,` `),c(K,f(`分支链`));let Pe=e(`p`,ke);c(ke,Pe),d(Pe,`text-sm opacity-70`),c(Pe,f(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=e(`div`,G);c(G,q),d(q,`join`);let Fe=e(`button`,q);c(q,Fe),s(()=>{d(Fe,String(`btn btn-sm join-item ${E.value===`healthy`?`btn-info`:`btn-outline`}`))}),n(Fe,`click`,()=>{E.value=`healthy`}),c(Fe,f(`健康`));let Ie=e(`button`,q);c(q,Ie),s(()=>{d(Ie,String(`btn btn-sm join-item ${E.value===`warning`?`btn-info`:`btn-outline`}`))}),n(Ie,`click`,()=>{E.value=`warning`}),c(Ie,f(`预警`));let Le=e(`button`,q);c(q,Le),s(()=>{d(Le,String(`btn btn-sm join-item ${E.value===`critical`?`btn-info`:`btn-outline`}`))}),n(Le,`click`,()=>{E.value=`critical`}),c(Le,f(`故障`));let Re=e(`div`,W);c(W,Re),d(Re,`badge badge-info badge-outline`),c(Re,f(`当前分支: `));let ze=y(Re);c(Re,ze),s(()=>{m(ze,E.value)});let Be=e(`div`,W);c(W,Be),d(Be,`grid gap-3 md:grid-cols-2`);let Ve=l(`rue:slot:anchor`);c(Be,Ve),s(()=>{let e=E.value===`healthy`?p(()=>{let e=a(),t=l(`rue:component:anchor`);return c(e,t),_(v(T,{children:p(()=>{let e=a(),t=l(`rue:component:anchor`);c(e,t),_(v(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let n=l(`rue:component:anchor`);return c(e,n),_(v(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,n),e})}),e,t),e}):E.value===`warning`?p(()=>{let e=a(),t=l(`rue:component:anchor`);return c(e,t),_(v(T,{children:p(()=>{let e=a(),t=l(`rue:component:anchor`);c(e,t),_(v(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let n=l(`rue:component:anchor`);return c(e,n),_(v(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,n),e})}),e,t),e}):p(()=>{let e=a(),t=l(`rue:component:anchor`);return c(e,t),_(v(T,{children:p(()=>{let e=a(),t=l(`rue:component:anchor`);c(e,t),_(v(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let n=l(`rue:component:anchor`);return c(e,n),_(v(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,n),e})}),e,t),e});t(()=>_(e,Be,Ve))});let J=e(`div`,j);c(j,J),d(J,`grid gap-4 xl:grid-cols-2`);let Y=e(`section`,J);c(J,Y),d(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=e(`div`,Y);c(Y,He);let X=e(`h3`,He);c(He,X),d(X,`font-semibold`),c(X,f(`显式 `));let Ue=y(X);c(X,Ue),m(Ue,`<Template slot="...">`),c(X,f(` 命名片段`));let We=e(`p`,He);c(He,We),d(We,`text-sm opacity-70`),c(We,f(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=l(`rue:component:anchor`);c(Y,Ge);let Ke=p(()=>{let n=a(),r=e(`div`,n);c(n,r),d(r,`grid gap-3 md:grid-cols-2`);let i=l(`rue:component:anchor`);c(r,i),s(()=>{let e=v(D,{title:A.head.title,meta:A.head.meta,tone:`base`});t(()=>_(e,r,i))});let o=l(`rue:slot:anchor`);c(r,o),s(()=>{let e=x.value?p(()=>{let e=a(),t=l(`rue:component:anchor`);return c(e,t),_(v(T,{children:p(()=>{let e=a(),t=l(`rue:component:anchor`);c(e,t),_(v(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let n=l(`rue:component:anchor`);return c(e,n),_(v(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,n),e})}),e,t),e}):``;t(()=>_(e,r,o))});let u=l(`rue:component:anchor`);return c(r,u),s(()=>{let e=v(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});t(()=>_(e,r,u))}),n}),qe=p(()=>{let t=a(),n=e(`div`,t);c(t,n);let r=e(`div`,n);c(n,r),d(r,`badge badge-secondary badge-outline`),c(r,f(`named slot`));let i=e(`h4`,n);c(n,i),d(i,`mt-2 text-lg font-semibold`);let o=y(i);c(i,o),s(()=>{m(o,w.value===`ops`?`运维场景面板`:`增长场景面板`)});let l=e(`p`,n);return c(n,l),d(l,`text-sm opacity-70`),c(l,f(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),t}),Je=p(()=>{let t=a(),r=e(`div`,t);c(t,r),d(r,`join`);let i=e(`button`,r);c(r,i),s(()=>{d(i,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),n(i,`click`,()=>{w.value=`ops`}),c(i,f(`运维`));let o=e(`button`,r);c(r,o),s(()=>{d(o,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),n(o,`click`,()=>{w.value=`growth`}),c(o,f(`增长`));let l=e(`button`,t);c(t,l),s(()=>{d(l,String(`btn btn-sm ${x.value?`btn-secondary`:`btn-outline`}`))}),n(l,`click`,()=>{x.value=!x.value});let u=y(l);return c(l,u),s(()=>{m(u,x.value?`隐藏摘要`:`显示摘要`)}),t});s(()=>{let e=v(te,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});t(()=>_(e,Y,Ge))});let Z=e(`section`,J);c(J,Z),d(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=e(`div`,Z);c(Z,Q);let $=e(`h3`,Q);c(Q,$),d($,`font-semibold`),c($,f(`显式 `));let Ye=y($);c($,Ye),m(Ye,`<Template>`),c($,f(` 列表片段`));let Xe=e(`p`,Q);c(Q,Xe),d(Xe,`text-sm opacity-70`),c(Xe,f(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=e(`ul`,Z);c(Z,Ze),d(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=l(`rue:list:start`),$e=l(`rue:list:end`);c(Ze,Qe),c(Ze,$e);let et=new Map;return s(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(n,r,i,o,m)=>{let h=p(()=>{let r=a(),i=e(`li`,r);c(r,i),d(i,`list-row items-start gap-3`);let o=e(`div`,i);c(i,o),d(o,`list-col-grow`);let u=e(`div`,o);c(o,u),d(u,`font-medium`);let p=l(`rue:slot:anchor`);c(u,p),s(()=>{let e=n.title;t(()=>_(e,u,p))});let m=e(`div`,o);c(o,m),d(m,`text-sm opacity-70`);let h=l(`rue:slot:anchor`);c(m,h),s(()=>{let e=n.meta;t(()=>_(e,m,h))});let g=e(`span`,i);c(i,g),d(g,`badge badge-outline whitespace-nowrap`);let v=l(`rue:slot:anchor`);c(g,v),s(()=>{let e=n.status;t(()=>_(e,g,v))});let y=e(`li`,r);return c(r,y),d(y,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),c(y,f(`同一条数据额外展开的第二个兄弟节点`)),r});u(v(T,{key:n.id,children:h}),r,i,o)}})}),r}):``;t(()=>_(o,k,ae))}),o})}),g,b),g})};export{ne as default};
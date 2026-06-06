import{$ as e,A as t,B as n,Dt as r,G as i,H as a,K as o,P as s,U as c,W as l,Z as u,at as d,c as f,ht as p,l as m,s as h,t as g,wt as _,yt as v,z as y}from"./vapor-runtime-C1rlwc61.js";import{a as b,n as ee}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as x}from"./Slot-DUv3MG53.js";import{t as S}from"./Code-BCLFq1E3.js";import{t as C}from"./SidebarPlaygroundExample-CdMvdgT7.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=e=>s(()=>{let r=c(),i=a(`rue-template-anchor`);return n(r,i),t(w(e.children),r,i),r}),E={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=t=>m(i=>{let o=l(`article`,i);r(()=>{e(o,String(E[t.tone??`base`]))});let s=l(`h3`,o);n(o,s),e(s,`font-semibold`);let c=a(`rue:slot:anchor`);n(s,c),r(()=>{let e=t.title;v(()=>h(e,s,c))});let u=l(`p`,o);n(o,u),e(u,`mt-2 text-sm opacity-70`);let d=a(`rue:slot:anchor`);return n(u,d),r(()=>{let e=t.meta;v(()=>h(e,u,d))}),o}),te=t=>m(o=>{let s=l(`section`,o);e(s,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let c=l(`div`,s);n(s,c),e(c,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let u=l(`div`,c);n(c,u),e(u,`min-w-0 space-y-2`);let d=l(`div`,u);n(u,d),e(d,`text-xs uppercase tracking-[0.22em] opacity-55`),n(d,i(`named slot`));let f=a(`rue:component:anchor`);n(u,f),r(()=>{let e=g(x,{source:t,name:`header`,children:`未提供 header`});v(()=>h(e,u,f))});let p=l(`div`,c);n(c,p),e(p,`flex flex-wrap items-center gap-2`);let m=a(`rue:component:anchor`);n(p,m),r(()=>{let e=g(x,{source:t,name:`actions`});v(()=>h(e,p,m))});let _=l(`div`,s);n(s,_),e(_,`p-4`);let y=a(`rue:component:anchor`);return n(_,y),r(()=>{let e=g(x,{source:t,children:`未提供默认内容`});v(()=>h(e,_,y))}),s}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},ne=()=>{let{activeTab:t,showBurst:s,showSummary:x,mode:w,branchState:E,code:ne,cards:A,feed:re}=b(`useSetup:0:0`,()=>_(()=>{let e=b(`ref:1:0`,()=>p(`preview`)),t=b(`ref:1:1`,()=>p(!0)),n=b(`ref:1:2`,()=>p(!0)),r=b(`ref:1:3`,()=>p(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>p(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[r.value],feed:k[r.value]}}));return m(p=>{let _=c(),b=a(`rue:component:anchor`);return n(_,b),h(g(C,{children:m(()=>{let p=c(),_=l(`h1`,p);n(p,_),e(_,`mb-4 text-5xl font-semibold md:mb-4`),n(_,i(`Template 内置组件`));let b=l(`div`,p);n(p,b),u(b,`role`,`tablist`),e(b,`tabs tabs-box`);let C=l(`button`,b);n(b,C),u(C,`role`,`tab`),r(()=>{e(C,String(`tab ${t.value===`preview`?`tab-active`:``}`))}),y(C,`click`,()=>{t.value=`preview`}),n(C,i(`效果`));let O=l(`button`,b);n(b,O),u(O,`role`,`tab`),r(()=>{e(O,String(`tab ${t.value===`code`?`tab-active`:``}`))}),y(O,`click`,()=>{t.value=`code`}),n(O,i(`代码`));let k=l(`div`,p);n(p,k),e(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ie=a(`rue:slot:anchor`);n(k,ie),r(()=>{let i=t.value===`code`?m(()=>{let t=c(),i=l(`div`,t);n(t,i),e(i,`card overflow-auto bg-base-100 shadow`);let o=l(`div`,i);n(i,o),e(o,`card-body p-0`);let s=a(`rue:component:anchor`);return n(o,s),r(()=>{let e=g(S,{className:`h-full`,lang:`tsx`,code:ne});v(()=>h(e,o,s))}),t}):``;v(()=>h(i,k,ie))}),n(k,i(` `));let ae=a(`rue:slot:anchor`);return n(k,ae),r(()=>{let p=t.value===`preview`?m(()=>{let t=c(),p=l(`div`,t);n(t,p),e(p,`grid gap-6`);let _=l(`div`,p);n(p,_),u(_,`role`,`alert`),e(_,`alert alert-success`);let b=l(`div`,_);n(_,b),e(b,`space-y-2`);let S=l(`div`,b);n(b,S),n(S,i(`这个页面改成了显式导入`));let C=l(`strong`,S);n(S,C);let O=o(C);n(C,O),d(O,`<Template>`),n(S,i(`组件的写法，不再依赖小写 template lowering。`));let k=l(`div`,b);n(b,k),e(k,`text-sm opacity-80`),n(k,i(`当前示例覆盖命名 slot、`));let ne=o(k);n(k,ne),d(ne,`<Template v-if>`),n(k,i(`、 `));let ie=o(k);n(k,ie),d(ie,`<Template v-if / v-else-if / v-else>`);let ae=o(k);n(k,ae),d(ae,` `),n(k,i(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let oe=l(`div`,p);n(p,oe),e(oe,`card bg-base-100 shadow`);let j=l(`div`,oe);n(oe,j),e(j,`card-body gap-4`);let M=l(`div`,j);n(j,M),e(M,`flex flex-wrap items-center justify-between gap-3`);let se=l(`div`,M);n(M,se);let ce=l(`h2`,se);n(se,ce),e(ce,`card-title`),n(ce,i(`切换场景`));let le=l(`p`,se);n(se,le),e(le,`text-sm opacity-70`),n(le,i(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=l(`div`,M);n(M,N),e(N,`flex flex-wrap gap-3`);let P=l(`div`,N);n(N,P),e(P,`join`);let ue=l(`button`,P);n(P,ue),r(()=>{e(ue,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),y(ue,`click`,()=>{w.value=`ops`}),n(ue,i(`运维`));let de=l(`button`,P);n(P,de),r(()=>{e(de,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),y(de,`click`,()=>{w.value=`growth`}),n(de,i(`增长`));let F=l(`button`,N);n(N,F),r(()=>{e(F,String(`btn btn-sm ${s.value?`btn-secondary`:`btn-outline`}`))}),y(F,`click`,()=>{s.value=!s.value});let fe=o(F);n(F,fe),r(()=>{d(fe,s.value?`隐藏中间卡片`:`显示中间卡片`)});let I=l(`div`,j);n(j,I),e(I,`grid gap-4 xl:grid-cols-2`);let L=l(`section`,I);n(I,L),e(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=l(`div`,L);n(L,R),e(R,`flex flex-wrap items-center justify-between gap-2`);let pe=l(`div`,R);n(R,pe);let me=l(`h3`,pe);n(pe,me),e(me,`font-semibold`),n(me,i(`普通 div 包裹`));let he=l(`p`,pe);n(pe,he),e(he,`text-sm opacity-70`),n(he,i(`中间两张卡片会先进入一个额外 grid item。`));let ge=l(`span`,R);n(R,ge),e(ge,`badge badge-warning badge-outline`),n(ge,i(`直接网格项: `));let _e=o(ge);n(ge,_e),r(()=>{d(_e,s.value?3:2)});let z=l(`div`,L);n(L,z),e(z,`grid gap-3 md:grid-cols-2`);let ve=a(`rue:component:anchor`);n(z,ve),r(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});v(()=>h(e,z,ve))});let ye=a(`rue:slot:anchor`);n(z,ye),r(()=>{let t=s.value?m(()=>{let t=c(),i=l(`div`,t);n(t,i),e(i,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let o=a(`rue:component:anchor`);n(i,o),r(()=>{let e=g(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});v(()=>h(e,i,o))});let s=a(`rue:component:anchor`);return n(i,s),r(()=>{let e=g(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});v(()=>h(e,i,s))}),t}):``;v(()=>h(t,z,ye))});let be=a(`rue:component:anchor`);n(z,be),r(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});v(()=>h(e,z,be))});let B=l(`section`,I);n(I,B),e(B,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let V=l(`div`,B);n(B,V),e(V,`flex flex-wrap items-center justify-between gap-2`);let xe=l(`div`,V);n(V,xe);let H=l(`h3`,xe);n(xe,H),e(H,`font-semibold`),n(H,i(`显式 `));let Se=o(H);n(H,Se),d(Se,`<Template v-if>`),n(H,i(` 条件片段`));let Ce=l(`p`,xe);n(xe,Ce),e(Ce,`text-sm opacity-70`),n(Ce,i(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let we=l(`span`,V);n(V,we),e(we,`badge badge-success badge-outline`),n(we,i(`直接网格项: `));let Te=o(we);n(we,Te),r(()=>{d(Te,s.value?4:2)});let U=l(`div`,B);n(B,U),e(U,`grid gap-3 md:grid-cols-2`);let Ee=a(`rue:component:anchor`);n(U,Ee),r(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});v(()=>h(e,U,Ee))});let De=a(`rue:slot:anchor`);n(U,De),r(()=>{let e=s.value?m(()=>{let e=c(),t=a(`rue:component:anchor`);return n(e,t),h(g(T,{children:m(()=>{let e=c(),t=a(`rue:component:anchor`);n(e,t),r(()=>{let n=g(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});v(()=>h(n,e,t))});let i=a(`rue:component:anchor`);return n(e,i),r(()=>{let t=g(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});v(()=>h(t,e,i))}),e})}),e,t),e}):``;v(()=>h(e,U,De))});let Oe=a(`rue:component:anchor`);n(U,Oe),r(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});v(()=>h(e,U,Oe))});let W=l(`section`,j);n(j,W),e(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=l(`div`,W);n(W,G),e(G,`flex flex-wrap items-center justify-between gap-3`);let ke=l(`div`,G);n(G,ke);let K=l(`h3`,ke);n(ke,K),e(K,`font-semibold`),n(K,i(`显式 `));let Ae=o(K);n(K,Ae),d(Ae,`<Template v-if>`),n(K,i(` / `));let je=o(K);n(K,je),d(je,`<Template v-else-if>`),n(K,i(` / `));let Me=o(K);n(K,Me),d(Me,`<Template v-else>`);let Ne=o(K);n(K,Ne),d(Ne,` `),n(K,i(`分支链`));let Pe=l(`p`,ke);n(ke,Pe),e(Pe,`text-sm opacity-70`),n(Pe,i(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=l(`div`,G);n(G,q),e(q,`join`);let Fe=l(`button`,q);n(q,Fe),r(()=>{e(Fe,String(`btn btn-sm join-item ${E.value===`healthy`?`btn-info`:`btn-outline`}`))}),y(Fe,`click`,()=>{E.value=`healthy`}),n(Fe,i(`健康`));let Ie=l(`button`,q);n(q,Ie),r(()=>{e(Ie,String(`btn btn-sm join-item ${E.value===`warning`?`btn-info`:`btn-outline`}`))}),y(Ie,`click`,()=>{E.value=`warning`}),n(Ie,i(`预警`));let Le=l(`button`,q);n(q,Le),r(()=>{e(Le,String(`btn btn-sm join-item ${E.value===`critical`?`btn-info`:`btn-outline`}`))}),y(Le,`click`,()=>{E.value=`critical`}),n(Le,i(`故障`));let Re=l(`div`,W);n(W,Re),e(Re,`badge badge-info badge-outline`),n(Re,i(`当前分支: `));let ze=o(Re);n(Re,ze),r(()=>{d(ze,E.value)});let Be=l(`div`,W);n(W,Be),e(Be,`grid gap-3 md:grid-cols-2`);let Ve=a(`rue:slot:anchor`);n(Be,Ve),r(()=>{let e=E.value===`healthy`?m(()=>{let e=c(),t=a(`rue:component:anchor`);return n(e,t),h(g(T,{children:m(()=>{let e=c(),t=a(`rue:component:anchor`);n(e,t),h(g(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),h(g(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,r),e})}),e,t),e}):E.value===`warning`?m(()=>{let e=c(),t=a(`rue:component:anchor`);return n(e,t),h(g(T,{children:m(()=>{let e=c(),t=a(`rue:component:anchor`);n(e,t),h(g(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),h(g(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,r),e})}),e,t),e}):m(()=>{let e=c(),t=a(`rue:component:anchor`);return n(e,t),h(g(T,{children:m(()=>{let e=c(),t=a(`rue:component:anchor`);n(e,t),h(g(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),h(g(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,r),e})}),e,t),e});v(()=>h(e,Be,Ve))});let J=l(`div`,j);n(j,J),e(J,`grid gap-4 xl:grid-cols-2`);let Y=l(`section`,J);n(J,Y),e(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=l(`div`,Y);n(Y,He);let X=l(`h3`,He);n(He,X),e(X,`font-semibold`),n(X,i(`显式 `));let Ue=o(X);n(X,Ue),d(Ue,`<Template slot="...">`),n(X,i(` 命名片段`));let We=l(`p`,He);n(He,We),e(We,`text-sm opacity-70`),n(We,i(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=a(`rue:component:anchor`);n(Y,Ge);let Ke=m(()=>{let t=c(),i=l(`div`,t);n(t,i),e(i,`grid gap-3 md:grid-cols-2`);let o=a(`rue:component:anchor`);n(i,o),r(()=>{let e=g(D,{title:A.head.title,meta:A.head.meta,tone:`base`});v(()=>h(e,i,o))});let s=a(`rue:slot:anchor`);n(i,s),r(()=>{let e=x.value?m(()=>{let e=c(),t=a(`rue:component:anchor`);return n(e,t),h(g(T,{children:m(()=>{let e=c(),t=a(`rue:component:anchor`);n(e,t),h(g(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),h(g(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,r),e})}),e,t),e}):``;v(()=>h(e,i,s))});let u=a(`rue:component:anchor`);return n(i,u),r(()=>{let e=g(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});v(()=>h(e,i,u))}),t}),qe=m(()=>{let t=c(),a=l(`div`,t);n(t,a);let s=l(`div`,a);n(a,s),e(s,`badge badge-secondary badge-outline`),n(s,i(`named slot`));let u=l(`h4`,a);n(a,u),e(u,`mt-2 text-lg font-semibold`);let f=o(u);n(u,f),r(()=>{d(f,w.value===`ops`?`运维场景面板`:`增长场景面板`)});let p=l(`p`,a);return n(a,p),e(p,`text-sm opacity-70`),n(p,i(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),t}),Je=m(()=>{let t=c(),a=l(`div`,t);n(t,a),e(a,`join`);let s=l(`button`,a);n(a,s),r(()=>{e(s,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),y(s,`click`,()=>{w.value=`ops`}),n(s,i(`运维`));let u=l(`button`,a);n(a,u),r(()=>{e(u,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),y(u,`click`,()=>{w.value=`growth`}),n(u,i(`增长`));let f=l(`button`,t);n(t,f),r(()=>{e(f,String(`btn btn-sm ${x.value?`btn-secondary`:`btn-outline`}`))}),y(f,`click`,()=>{x.value=!x.value});let p=o(f);return n(f,p),r(()=>{d(p,x.value?`隐藏摘要`:`显示摘要`)}),t});r(()=>{let e=g(te,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});v(()=>h(e,Y,Ge))});let Z=l(`section`,J);n(J,Z),e(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=l(`div`,Z);n(Z,Q);let $=l(`h3`,Q);n(Q,$),e($,`font-semibold`),n($,i(`显式 `));let Ye=o($);n($,Ye),d(Ye,`<Template>`),n($,i(` 列表片段`));let Xe=l(`p`,Q);n(Q,Xe),e(Xe,`text-sm opacity-70`),n(Xe,i(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=l(`ul`,Z);n(Z,Ze),e(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=a(`rue:list:start`),$e=a(`rue:list:end`);n(Ze,Qe),n(Ze,$e);let et=new Map;return r(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(t,o,s,u,d)=>{let p=m(()=>{let o=c(),s=l(`li`,o);n(o,s),e(s,`list-row items-start gap-3`);let u=l(`div`,s);n(s,u),e(u,`list-col-grow`);let d=l(`div`,u);n(u,d),e(d,`font-medium`);let f=a(`rue:slot:anchor`);n(d,f),r(()=>{let e=t.title;v(()=>h(e,d,f))});let p=l(`div`,u);n(u,p),e(p,`text-sm opacity-70`);let m=a(`rue:slot:anchor`);n(p,m),r(()=>{let e=t.meta;v(()=>h(e,p,m))});let g=l(`span`,s);n(s,g),e(g,`badge badge-outline whitespace-nowrap`);let _=a(`rue:slot:anchor`);n(g,_),r(()=>{let e=t.status;v(()=>h(e,g,_))});let y=l(`li`,o);return n(o,y),e(y,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),n(y,i(`同一条数据额外展开的第二个兄弟节点`)),o});f(g(T,{key:t.id,children:p}),o,s,u)}})}),t}):``;v(()=>h(p,k,ae))}),p})}),_,b),_})};export{ne as default};
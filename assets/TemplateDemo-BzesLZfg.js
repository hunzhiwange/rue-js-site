import{F as e,G as t,I as n,L as r,M as i,O as a,P as o,R as s,U as c,Z as l,_t as u,bt as d,c as f,j as p,l as m,lt as h,pt as g,t as _,u as v,w as y}from"./vapor-runtime-D3a-68js.js";import{a as b,n as ee}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as x}from"./Slot-DP68Sl89.js";import{t as S}from"./Code-2C2psoH3.js";import{t as C}from"./SidebarPlaygroundExample-DKa0aI1C.js";var w=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],T=t=>a(()=>{let n=e(),r=o(`rue-template-anchor`);return i(n,r),y(w(t.children),n,r),n}),E={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},D=e=>v(()=>{let r=n(`article`);d(()=>{t(r,String(E[e.tone??`base`]))});let a=n(`h3`);i(r,a),t(a,`font-semibold`);let s=o(`rue:slot:anchor`);i(a,s),d(()=>{let t=e.title;g(()=>f(t,a,s))});let c=n(`p`);i(r,c),t(c,`mt-2 text-sm opacity-70`);let l=o(`rue:slot:anchor`);return i(c,l),d(()=>{let t=e.meta;g(()=>f(t,c,l))}),r}),te=e=>v(()=>{let a=n(`section`);t(a,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let s=n(`div`);i(a,s),t(s,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let c=n(`div`);i(s,c),t(c,`min-w-0 space-y-2`);let l=n(`div`);i(c,l),t(l,`text-xs uppercase tracking-[0.22em] opacity-55`),i(l,r(`named slot`));let u=o(`rue:component:anchor`);i(c,u),d(()=>{let t=_(x,{source:e,name:`header`,children:`未提供 header`});g(()=>f(t,c,u))});let p=n(`div`);i(s,p),t(p,`flex flex-wrap items-center gap-2`);let m=o(`rue:component:anchor`);i(p,m),d(()=>{let t=_(x,{source:e,name:`actions`});g(()=>f(t,p,m))});let h=n(`div`);i(a,h),t(h,`p-4`);let v=o(`rue:component:anchor`);return i(h,v),d(()=>{let t=_(x,{source:e,children:`未提供默认内容`});g(()=>f(t,h,v))}),a}),O={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},k={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},ne=()=>{let{activeTab:a,showBurst:y,showSummary:x,mode:w,branchState:E,code:ne,cards:A,feed:re}=b(`useSetup:0:0`,()=>u(()=>{let e=b(`ref:1:0`,()=>h(`preview`)),t=b(`ref:1:1`,()=>h(!0)),n=b(`ref:1:2`,()=>h(!0)),r=b(`ref:1:3`,()=>h(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:b(`ref:1:4`,()=>h(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:O[r.value],feed:k[r.value]}}));return v(()=>{let u=e(),h=o(`rue:component:anchor`);return i(u,h),f(_(C,{children:v(()=>{let u=e(),h=n(`h1`);i(u,h),t(h,`mb-4 text-5xl font-semibold md:mb-4`),i(h,r(`Template 内置组件`));let b=n(`div`);i(u,b),c(b,`role`,`tablist`),t(b,`tabs tabs-box`);let C=n(`button`);i(b,C),c(C,`role`,`tab`),d(()=>{t(C,String(`tab ${a.value===`preview`?`tab-active`:``}`))}),p(C,`click`,()=>{a.value=`preview`}),i(C,r(`效果`));let O=n(`button`);i(b,O),c(O,`role`,`tab`),d(()=>{t(O,String(`tab ${a.value===`code`?`tab-active`:``}`))}),p(O,`click`,()=>{a.value=`code`}),i(O,r(`代码`));let k=n(`div`);i(u,k),t(k,`mt-4 grid items-start gap-6 md:grid-cols-1`);let j=o(`rue:slot:anchor`);i(k,j),d(()=>{let r=a.value===`code`?v(()=>{let r=e(),a=n(`div`);i(r,a),t(a,`card overflow-auto bg-base-100 shadow`);let s=n(`div`);i(a,s),t(s,`card-body p-0`);let c=o(`rue:component:anchor`);return i(s,c),d(()=>{let e=_(S,{className:`h-full`,lang:`tsx`,code:ne});g(()=>f(e,s,c))}),r}):``;g(()=>f(r,k,j))}),i(k,r(` `));let ie=o(`rue:slot:anchor`);return i(k,ie),d(()=>{let u=a.value===`preview`?v(()=>{let a=e(),u=n(`div`);i(a,u),t(u,`grid gap-6`);let h=n(`div`);i(u,h),c(h,`role`,`alert`),t(h,`alert alert-success`);let b=n(`div`);i(h,b),t(b,`space-y-2`);let S=n(`div`);i(b,S),i(S,r(`这个页面改成了显式导入`));let C=n(`strong`);i(S,C);let O=s(C);i(C,O),l(O,`<Template>`),i(S,r(`组件的写法，不再依赖小写 template lowering。`));let k=n(`div`);i(b,k),t(k,`text-sm opacity-80`),i(k,r(`当前示例覆盖命名 slot、`));let ne=s(k);i(k,ne),l(ne,`<Template v-if>`),i(k,r(`、 `));let j=s(k);i(k,j),l(j,`<Template v-if / v-else-if / v-else>`);let ie=s(k);i(k,ie),l(ie,` `),i(k,r(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let ae=n(`div`);i(u,ae),t(ae,`card bg-base-100 shadow`);let M=n(`div`);i(ae,M),t(M,`card-body gap-4`);let N=n(`div`);i(M,N),t(N,`flex flex-wrap items-center justify-between gap-3`);let oe=n(`div`);i(N,oe);let se=n(`h2`);i(oe,se),t(se,`card-title`),i(se,r(`切换场景`));let ce=n(`p`);i(oe,ce),t(ce,`text-sm opacity-70`),i(ce,r(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let P=n(`div`);i(N,P),t(P,`flex flex-wrap gap-3`);let F=n(`div`);i(P,F),t(F,`join`);let I=n(`button`);i(F,I),d(()=>{t(I,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),p(I,`click`,()=>{w.value=`ops`}),i(I,r(`运维`));let L=n(`button`);i(F,L),d(()=>{t(L,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),p(L,`click`,()=>{w.value=`growth`}),i(L,r(`增长`));let R=n(`button`);i(P,R),d(()=>{t(R,String(`btn btn-sm ${y.value?`btn-secondary`:`btn-outline`}`))}),p(R,`click`,()=>{y.value=!y.value});let le=s(R);i(R,le),d(()=>{l(le,y.value?`隐藏中间卡片`:`显示中间卡片`)});let ue=n(`div`);i(M,ue),t(ue,`grid gap-4 xl:grid-cols-2`);let de=n(`section`);i(ue,de),t(de,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let fe=n(`div`);i(de,fe),t(fe,`flex flex-wrap items-center justify-between gap-2`);let pe=n(`div`);i(fe,pe);let me=n(`h3`);i(pe,me),t(me,`font-semibold`),i(me,r(`普通 div 包裹`));let he=n(`p`);i(pe,he),t(he,`text-sm opacity-70`),i(he,r(`中间两张卡片会先进入一个额外 grid item。`));let z=n(`span`);i(fe,z),t(z,`badge badge-warning badge-outline`),i(z,r(`直接网格项: `));let ge=s(z);i(z,ge),d(()=>{l(ge,y.value?3:2)});let B=n(`div`);i(de,B),t(B,`grid gap-3 md:grid-cols-2`);let _e=o(`rue:component:anchor`);i(B,_e),d(()=>{let e=_(D,{title:A.head.title,meta:A.head.meta,tone:`base`});g(()=>f(e,B,_e))});let ve=o(`rue:slot:anchor`);i(B,ve),d(()=>{let r=y.value?v(()=>{let r=e(),a=n(`div`);i(r,a),t(a,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let s=o(`rue:component:anchor`);i(a,s),d(()=>{let e=_(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});g(()=>f(e,a,s))});let c=o(`rue:component:anchor`);return i(a,c),d(()=>{let e=_(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});g(()=>f(e,a,c))}),r}):``;g(()=>f(r,B,ve))});let ye=o(`rue:component:anchor`);i(B,ye),d(()=>{let e=_(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});g(()=>f(e,B,ye))});let be=n(`section`);i(ue,be),t(be,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let xe=n(`div`);i(be,xe),t(xe,`flex flex-wrap items-center justify-between gap-2`);let Se=n(`div`);i(xe,Se);let V=n(`h3`);i(Se,V),t(V,`font-semibold`),i(V,r(`显式 `));let Ce=s(V);i(V,Ce),l(Ce,`<Template v-if>`),i(V,r(` 条件片段`));let we=n(`p`);i(Se,we),t(we,`text-sm opacity-70`),i(we,r(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let H=n(`span`);i(xe,H),t(H,`badge badge-success badge-outline`),i(H,r(`直接网格项: `));let Te=s(H);i(H,Te),d(()=>{l(Te,y.value?4:2)});let U=n(`div`);i(be,U),t(U,`grid gap-3 md:grid-cols-2`);let Ee=o(`rue:component:anchor`);i(U,Ee),d(()=>{let e=_(D,{title:A.head.title,meta:A.head.meta,tone:`base`});g(()=>f(e,U,Ee))});let De=o(`rue:slot:anchor`);i(U,De),d(()=>{let t=y.value?v(()=>{let t=e(),n=o(`rue:component:anchor`);return i(t,n),f(_(T,{children:v(()=>{let t=e(),n=o(`rue:component:anchor`);i(t,n),d(()=>{let e=_(D,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`});g(()=>f(e,t,n))});let r=o(`rue:component:anchor`);return i(t,r),d(()=>{let e=_(D,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`});g(()=>f(e,t,r))}),t})}),t,n),t}):``;g(()=>f(t,U,De))});let Oe=o(`rue:component:anchor`);i(U,Oe),d(()=>{let e=_(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});g(()=>f(e,U,Oe))});let W=n(`section`);i(M,W),t(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=n(`div`);i(W,G),t(G,`flex flex-wrap items-center justify-between gap-3`);let ke=n(`div`);i(G,ke);let K=n(`h3`);i(ke,K),t(K,`font-semibold`),i(K,r(`显式 `));let Ae=s(K);i(K,Ae),l(Ae,`<Template v-if>`),i(K,r(` / `));let je=s(K);i(K,je),l(je,`<Template v-else-if>`),i(K,r(` / `));let Me=s(K);i(K,Me),l(Me,`<Template v-else>`);let Ne=s(K);i(K,Ne),l(Ne,` `),i(K,r(`分支链`));let Pe=n(`p`);i(ke,Pe),t(Pe,`text-sm opacity-70`),i(Pe,r(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=n(`div`);i(G,q),t(q,`join`);let Fe=n(`button`);i(q,Fe),d(()=>{t(Fe,String(`btn btn-sm join-item ${E.value===`healthy`?`btn-info`:`btn-outline`}`))}),p(Fe,`click`,()=>{E.value=`healthy`}),i(Fe,r(`健康`));let Ie=n(`button`);i(q,Ie),d(()=>{t(Ie,String(`btn btn-sm join-item ${E.value===`warning`?`btn-info`:`btn-outline`}`))}),p(Ie,`click`,()=>{E.value=`warning`}),i(Ie,r(`预警`));let Le=n(`button`);i(q,Le),d(()=>{t(Le,String(`btn btn-sm join-item ${E.value===`critical`?`btn-info`:`btn-outline`}`))}),p(Le,`click`,()=>{E.value=`critical`}),i(Le,r(`故障`));let J=n(`div`);i(W,J),t(J,`badge badge-info badge-outline`),i(J,r(`当前分支: `));let Re=s(J);i(J,Re),d(()=>{l(Re,E.value)});let ze=n(`div`);i(W,ze),t(ze,`grid gap-3 md:grid-cols-2`);let Be=o(`rue:slot:anchor`);i(ze,Be),d(()=>{let t=E.value===`healthy`?v(()=>{let t=e(),n=o(`rue:component:anchor`);return i(t,n),f(_(T,{children:v(()=>{let t=e(),n=o(`rue:component:anchor`);i(t,n),f(_(D,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),t,n);let r=o(`rue:component:anchor`);return i(t,r),f(_(D,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),t,r),t})}),t,n),t}):E.value===`warning`?v(()=>{let t=e(),n=o(`rue:component:anchor`);return i(t,n),f(_(T,{children:v(()=>{let t=e(),n=o(`rue:component:anchor`);i(t,n),f(_(D,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),t,n);let r=o(`rue:component:anchor`);return i(t,r),f(_(D,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),t,r),t})}),t,n),t}):v(()=>{let t=e(),n=o(`rue:component:anchor`);return i(t,n),f(_(T,{children:v(()=>{let t=e(),n=o(`rue:component:anchor`);i(t,n),f(_(D,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),t,n);let r=o(`rue:component:anchor`);return i(t,r),f(_(D,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),t,r),t})}),t,n),t});g(()=>f(t,ze,Be))});let Ve=n(`div`);i(M,Ve),t(Ve,`grid gap-4 xl:grid-cols-2`);let Y=n(`section`);i(Ve,Y),t(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=n(`div`);i(Y,He);let X=n(`h3`);i(He,X),t(X,`font-semibold`),i(X,r(`显式 `));let Ue=s(X);i(X,Ue),l(Ue,`<Template slot="...">`),i(X,r(` 命名片段`));let We=n(`p`);i(He,We),t(We,`text-sm opacity-70`),i(We,r(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=o(`rue:component:anchor`);i(Y,Ge);let Ke=v(()=>{let r=e(),a=n(`div`);i(r,a),t(a,`grid gap-3 md:grid-cols-2`);let s=o(`rue:component:anchor`);i(a,s),d(()=>{let e=_(D,{title:A.head.title,meta:A.head.meta,tone:`base`});g(()=>f(e,a,s))});let c=o(`rue:slot:anchor`);i(a,c),d(()=>{let t=x.value?v(()=>{let t=e(),n=o(`rue:component:anchor`);return i(t,n),f(_(T,{children:v(()=>{let t=e(),n=o(`rue:component:anchor`);i(t,n),f(_(D,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),t,n);let r=o(`rue:component:anchor`);return i(t,r),f(_(D,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),t,r),t})}),t,n),t}):``;g(()=>f(t,a,c))});let l=o(`rue:component:anchor`);return i(a,l),d(()=>{let e=_(D,{title:A.tail.title,meta:A.tail.meta,tone:`base`});g(()=>f(e,a,l))}),r}),qe=v(()=>{let a=e(),o=n(`div`);i(a,o);let c=n(`div`);i(o,c),t(c,`badge badge-secondary badge-outline`),i(c,r(`named slot`));let u=n(`h4`);i(o,u),t(u,`mt-2 text-lg font-semibold`);let f=s(u);i(u,f),d(()=>{l(f,w.value===`ops`?`运维场景面板`:`增长场景面板`)});let p=n(`p`);return i(o,p),t(p,`text-sm opacity-70`),i(p,r(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),a}),Je=v(()=>{let a=e(),o=n(`div`);i(a,o),t(o,`join`);let c=n(`button`);i(o,c),d(()=>{t(c,String(`btn btn-sm join-item ${w.value===`ops`?`btn-primary`:``}`))}),p(c,`click`,()=>{w.value=`ops`}),i(c,r(`运维`));let u=n(`button`);i(o,u),d(()=>{t(u,String(`btn btn-sm join-item ${w.value===`growth`?`btn-primary`:``}`))}),p(u,`click`,()=>{w.value=`growth`}),i(u,r(`增长`));let f=n(`button`);i(a,f),d(()=>{t(f,String(`btn btn-sm ${x.value?`btn-secondary`:`btn-outline`}`))}),p(f,`click`,()=>{x.value=!x.value});let m=s(f);return i(f,m),d(()=>{l(m,x.value?`隐藏摘要`:`显示摘要`)}),a});d(()=>{let e=_(te,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});g(()=>f(e,Y,Ge))});let Z=n(`section`);i(Ve,Z),t(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Ye=n(`div`);i(Z,Ye);let Q=n(`h3`);i(Ye,Q),t(Q,`font-semibold`),i(Q,r(`显式 `));let Xe=s(Q);i(Q,Xe),l(Xe,`<Template>`),i(Q,r(` 列表片段`));let Ze=n(`p`);i(Ye,Ze),t(Ze,`text-sm opacity-70`),i(Ze,r(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let $=n(`ul`);i(Z,$),t($,`list rounded-box bg-base-100 shadow-sm`);let Qe=o(`rue:list:start`),$e=o(`rue:list:end`);i($,Qe),i($,$e);let et=new Map;return d(()=>{et=ee({items:re||[],getKey:(e,t)=>e.id,elements:et,parent:$,before:$e,start:Qe,renderItem:(a,s,c,l,u)=>{let p=v(()=>{let s=e(),c=n(`li`);i(s,c),t(c,`list-row items-start gap-3`);let l=n(`div`);i(c,l),t(l,`list-col-grow`);let u=n(`div`);i(l,u),t(u,`font-medium`);let p=o(`rue:slot:anchor`);i(u,p),d(()=>{let e=a.title;g(()=>f(e,u,p))});let m=n(`div`);i(l,m),t(m,`text-sm opacity-70`);let h=o(`rue:slot:anchor`);i(m,h),d(()=>{let e=a.meta;g(()=>f(e,m,h))});let _=n(`span`);i(c,_),t(_,`badge badge-outline whitespace-nowrap`);let v=o(`rue:slot:anchor`);i(_,v),d(()=>{let e=a.status;g(()=>f(e,_,v))});let y=n(`li`);return i(s,y),t(y,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),i(y,r(`同一条数据额外展开的第二个兄弟节点`)),s});m(_(T,{key:a.id,children:p}),s,c,l)}})}),a}):``;g(()=>f(u,k,ie))}),u})}),u,h),u})};export{ne as default};
import{A as e,F as t,H as n,I as r,L as i,N as a,O as o,P as s,W as c,Y as l,c as u,j as d,l as f,pt as p,rt as m,t as h,u as g,ut as _,w as v}from"./vapor-runtime-BZZbPG7x.js";import{a as y,n as ee}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as b}from"./Slot-Buzginw7.js";import{t as x}from"./Code-C8wy38VS.js";import{t as S}from"./SidebarPlaygroundExample-Dv_xU0wR.js";var C=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],w=e=>o(()=>{let t=s(),n=a(`rue-template-anchor`);return d(t,n),v(C(e.children),t,n),t}),T={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},E=e=>g(()=>{let n=t(`article`);p(()=>{c(n,String(T[e.tone??`base`]))});let r=t(`h3`);d(n,r),c(r,`font-semibold`);let i=a(`rue:slot:anchor`);d(r,i),p(()=>{let t=e.title;u(t,r,i)});let o=t(`p`);d(n,o),c(o,`mt-2 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return d(o,s),p(()=>{let t=e.meta;u(t,o,s)}),n}),te=e=>g(()=>{let n=t(`section`);c(n,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let i=t(`div`);d(n,i),c(i,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let o=t(`div`);d(i,o),c(o,`min-w-0 space-y-2`);let s=t(`div`);d(o,s),c(s,`text-xs uppercase tracking-[0.22em] opacity-55`),d(s,r(`named slot`));let l=a(`rue:component:anchor`);d(o,l),p(()=>{u(h(b,{source:e,name:`header`,children:`未提供 header`}),o,l)});let f=t(`div`);d(i,f),c(f,`flex flex-wrap items-center gap-2`);let m=a(`rue:component:anchor`);d(f,m),p(()=>{u(h(b,{source:e,name:`actions`}),f,m)});let g=t(`div`);d(n,g),c(g,`p-4`);let _=a(`rue:component:anchor`);return d(g,_),p(()=>{u(h(b,{source:e,children:`未提供默认内容`}),g,_)}),n}),D={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},O={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},k=()=>{let{activeTab:o,showBurst:v,showSummary:b,mode:C,branchState:T,code:k,cards:A,feed:ne}=y(`useSetup:0:0`,()=>_(()=>{let e=y(`ref:1:0`,()=>m(`preview`)),t=y(`ref:1:1`,()=>m(!0)),n=y(`ref:1:2`,()=>m(!0)),r=y(`ref:1:3`,()=>m(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:y(`ref:1:4`,()=>m(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:D[r.value],feed:O[r.value]}}));return g(()=>{let m=s(),_=a(`rue:component:anchor`);return d(m,_),u(h(S,{children:g(()=>{let m=s(),_=t(`h1`);d(m,_),c(_,`mb-4 text-5xl font-semibold md:mb-4`),d(_,r(`Template 内置组件`));let y=t(`div`);d(m,y),n(y,`role`,`tablist`),c(y,`tabs tabs-box`);let S=t(`button`);d(y,S),n(S,`role`,`tab`),p(()=>{c(S,String(`tab ${o.value===`preview`?`tab-active`:``}`))}),e(S,`click`,()=>{o.value=`preview`}),d(S,r(`效果`));let D=t(`button`);d(y,D),n(D,`role`,`tab`),p(()=>{c(D,String(`tab ${o.value===`code`?`tab-active`:``}`))}),e(D,`click`,()=>{o.value=`code`}),d(D,r(`代码`));let O=t(`div`);d(m,O),c(O,`mt-4 grid items-start gap-6 md:grid-cols-1`);let j=a(`rue:slot:anchor`);d(O,j),p(()=>{u(o.value===`code`?g(()=>{let e=s(),n=t(`div`);d(e,n),c(n,`card overflow-auto bg-base-100 shadow`);let r=t(`div`);d(n,r),c(r,`card-body p-0`);let i=a(`rue:component:anchor`);return d(r,i),p(()=>{u(h(x,{className:`h-full`,lang:`tsx`,code:k}),r,i)}),e}):``,O,j)}),d(O,r(` `));let M=a(`rue:slot:anchor`);return d(O,M),p(()=>{u(o.value===`preview`?g(()=>{let o=s(),m=t(`div`);d(o,m),c(m,`grid gap-6`);let _=t(`div`);d(m,_),n(_,`role`,`alert`),c(_,`alert alert-success`);let y=t(`div`);d(_,y),c(y,`space-y-2`);let x=t(`div`);d(y,x),d(x,r(`这个页面改成了显式导入`));let S=t(`strong`);d(x,S);let D=i(S);d(S,D),l(D,`<Template>`),d(x,r(`组件的写法，不再依赖小写 template lowering。`));let O=t(`div`);d(y,O),c(O,`text-sm opacity-80`),d(O,r(`当前示例覆盖命名 slot、`));let k=i(O);d(O,k),l(k,`<Template v-if>`),d(O,r(`、 `));let j=i(O);d(O,j),l(j,`<Template v-if / v-else-if / v-else>`);let M=i(O);d(O,M),l(M,` `),d(O,r(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let re=t(`div`);d(m,re),c(re,`card bg-base-100 shadow`);let N=t(`div`);d(re,N),c(N,`card-body gap-4`);let ie=t(`div`);d(N,ie),c(ie,`flex flex-wrap items-center justify-between gap-3`);let ae=t(`div`);d(ie,ae);let oe=t(`h2`);d(ae,oe),c(oe,`card-title`),d(oe,r(`切换场景`));let se=t(`p`);d(ae,se),c(se,`text-sm opacity-70`),d(se,r(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let ce=t(`div`);d(ie,ce),c(ce,`flex flex-wrap gap-3`);let le=t(`div`);d(ce,le),c(le,`join`);let ue=t(`button`);d(le,ue),p(()=>{c(ue,String(`btn btn-sm join-item ${C.value===`ops`?`btn-primary`:``}`))}),e(ue,`click`,()=>{C.value=`ops`}),d(ue,r(`运维`));let P=t(`button`);d(le,P),p(()=>{c(P,String(`btn btn-sm join-item ${C.value===`growth`?`btn-primary`:``}`))}),e(P,`click`,()=>{C.value=`growth`}),d(P,r(`增长`));let F=t(`button`);d(ce,F),p(()=>{c(F,String(`btn btn-sm ${v.value?`btn-secondary`:`btn-outline`}`))}),e(F,`click`,()=>{v.value=!v.value});let de=i(F);d(F,de),p(()=>{l(de,v.value?`隐藏中间卡片`:`显示中间卡片`)});let I=t(`div`);d(N,I),c(I,`grid gap-4 xl:grid-cols-2`);let L=t(`section`);d(I,L),c(L,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let R=t(`div`);d(L,R),c(R,`flex flex-wrap items-center justify-between gap-2`);let fe=t(`div`);d(R,fe);let pe=t(`h3`);d(fe,pe),c(pe,`font-semibold`),d(pe,r(`普通 div 包裹`));let me=t(`p`);d(fe,me),c(me,`text-sm opacity-70`),d(me,r(`中间两张卡片会先进入一个额外 grid item。`));let z=t(`span`);d(R,z),c(z,`badge badge-warning badge-outline`),d(z,r(`直接网格项: `));let he=i(z);d(z,he),p(()=>{l(he,v.value?3:2)});let B=t(`div`);d(L,B),c(B,`grid gap-3 md:grid-cols-2`);let ge=a(`rue:component:anchor`);d(B,ge),p(()=>{u(h(E,{title:A.head.title,meta:A.head.meta,tone:`base`}),B,ge)});let _e=a(`rue:slot:anchor`);d(B,_e),p(()=>{u(v.value?g(()=>{let e=s(),n=t(`div`);d(e,n),c(n,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let r=a(`rue:component:anchor`);d(n,r),p(()=>{u(h(E,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`}),n,r)});let i=a(`rue:component:anchor`);return d(n,i),p(()=>{u(h(E,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`}),n,i)}),e}):``,B,_e)});let ve=a(`rue:component:anchor`);d(B,ve),p(()=>{u(h(E,{title:A.tail.title,meta:A.tail.meta,tone:`base`}),B,ve)});let V=t(`section`);d(I,V),c(V,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let H=t(`div`);d(V,H),c(H,`flex flex-wrap items-center justify-between gap-2`);let ye=t(`div`);d(H,ye);let U=t(`h3`);d(ye,U),c(U,`font-semibold`),d(U,r(`显式 `));let be=i(U);d(U,be),l(be,`<Template v-if>`),d(U,r(` 条件片段`));let xe=t(`p`);d(ye,xe),c(xe,`text-sm opacity-70`),d(xe,r(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let W=t(`span`);d(H,W),c(W,`badge badge-success badge-outline`),d(W,r(`直接网格项: `));let Se=i(W);d(W,Se),p(()=>{l(Se,v.value?4:2)});let G=t(`div`);d(V,G),c(G,`grid gap-3 md:grid-cols-2`);let Ce=a(`rue:component:anchor`);d(G,Ce),p(()=>{u(h(E,{title:A.head.title,meta:A.head.meta,tone:`base`}),G,Ce)});let we=a(`rue:slot:anchor`);d(G,we),p(()=>{u(v.value?g(()=>{let e=s(),t=a(`rue:component:anchor`);return d(e,t),u(h(w,{children:g(()=>{let e=s(),t=a(`rue:component:anchor`);d(e,t),p(()=>{u(h(E,{title:A.burst[0].title,meta:A.burst[0].meta,tone:`primary`}),e,t)});let n=a(`rue:component:anchor`);return d(e,n),p(()=>{u(h(E,{title:A.burst[1].title,meta:A.burst[1].meta,tone:`accent`}),e,n)}),e})}),e,t),e}):``,G,we)});let Te=a(`rue:component:anchor`);d(G,Te),p(()=>{u(h(E,{title:A.tail.title,meta:A.tail.meta,tone:`base`}),G,Te)});let K=t(`section`);d(N,K),c(K,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let Ee=t(`div`);d(K,Ee),c(Ee,`flex flex-wrap items-center justify-between gap-3`);let De=t(`div`);d(Ee,De);let q=t(`h3`);d(De,q),c(q,`font-semibold`),d(q,r(`显式 `));let Oe=i(q);d(q,Oe),l(Oe,`<Template v-if>`),d(q,r(` / `));let ke=i(q);d(q,ke),l(ke,`<Template v-else-if>`),d(q,r(` / `));let Ae=i(q);d(q,Ae),l(Ae,`<Template v-else>`);let je=i(q);d(q,je),l(je,` `),d(q,r(`分支链`));let Me=t(`p`);d(De,Me),c(Me,`text-sm opacity-70`),d(Me,r(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let J=t(`div`);d(Ee,J),c(J,`join`);let Ne=t(`button`);d(J,Ne),p(()=>{c(Ne,String(`btn btn-sm join-item ${T.value===`healthy`?`btn-info`:`btn-outline`}`))}),e(Ne,`click`,()=>{T.value=`healthy`}),d(Ne,r(`健康`));let Pe=t(`button`);d(J,Pe),p(()=>{c(Pe,String(`btn btn-sm join-item ${T.value===`warning`?`btn-info`:`btn-outline`}`))}),e(Pe,`click`,()=>{T.value=`warning`}),d(Pe,r(`预警`));let Fe=t(`button`);d(J,Fe),p(()=>{c(Fe,String(`btn btn-sm join-item ${T.value===`critical`?`btn-info`:`btn-outline`}`))}),e(Fe,`click`,()=>{T.value=`critical`}),d(Fe,r(`故障`));let Y=t(`div`);d(K,Y),c(Y,`badge badge-info badge-outline`),d(Y,r(`当前分支: `));let Ie=i(Y);d(Y,Ie),p(()=>{l(Ie,T.value)});let Le=t(`div`);d(K,Le),c(Le,`grid gap-3 md:grid-cols-2`);let Re=a(`rue:slot:anchor`);d(Le,Re),p(()=>{u(T.value===`healthy`?g(()=>{let e=s(),t=a(`rue:component:anchor`);return d(e,t),u(h(w,{children:g(()=>{let e=s(),t=a(`rue:component:anchor`);d(e,t),u(h(E,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),e,t);let n=a(`rue:component:anchor`);return d(e,n),u(h(E,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),e,n),e})}),e,t),e}):T.value===`warning`?g(()=>{let e=s(),t=a(`rue:component:anchor`);return d(e,t),u(h(w,{children:g(()=>{let e=s(),t=a(`rue:component:anchor`);d(e,t),u(h(E,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),e,t);let n=a(`rue:component:anchor`);return d(e,n),u(h(E,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),e,n),e})}),e,t),e}):g(()=>{let e=s(),t=a(`rue:component:anchor`);return d(e,t),u(h(w,{children:g(()=>{let e=s(),t=a(`rue:component:anchor`);d(e,t),u(h(E,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),e,t);let n=a(`rue:component:anchor`);return d(e,n),u(h(E,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),e,n),e})}),e,t),e}),Le,Re)});let ze=t(`div`);d(N,ze),c(ze,`grid gap-4 xl:grid-cols-2`);let X=t(`section`);d(ze,X),c(X,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let Be=t(`div`);d(X,Be);let Z=t(`h3`);d(Be,Z),c(Z,`font-semibold`),d(Z,r(`显式 `));let Ve=i(Z);d(Z,Ve),l(Ve,`<Template slot="...">`),d(Z,r(` 命名片段`));let He=t(`p`);d(Be,He),c(He,`text-sm opacity-70`),d(He,r(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ue=a(`rue:component:anchor`);d(X,Ue);let We=g(()=>{let e=s(),n=t(`div`);d(e,n),c(n,`grid gap-3 md:grid-cols-2`);let r=a(`rue:component:anchor`);d(n,r),p(()=>{u(h(E,{title:A.head.title,meta:A.head.meta,tone:`base`}),n,r)});let i=a(`rue:slot:anchor`);d(n,i),p(()=>{u(b.value?g(()=>{let e=s(),t=a(`rue:component:anchor`);return d(e,t),u(h(w,{children:g(()=>{let e=s(),t=a(`rue:component:anchor`);d(e,t),u(h(E,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),e,t);let n=a(`rue:component:anchor`);return d(e,n),u(h(E,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),e,n),e})}),e,t),e}):``,n,i)});let o=a(`rue:component:anchor`);return d(n,o),p(()=>{u(h(E,{title:A.tail.title,meta:A.tail.meta,tone:`base`}),n,o)}),e}),Ge=g(()=>{let e=s(),n=t(`div`);d(e,n);let a=t(`div`);d(n,a),c(a,`badge badge-secondary badge-outline`),d(a,r(`named slot`));let o=t(`h4`);d(n,o),c(o,`mt-2 text-lg font-semibold`);let u=i(o);d(o,u),p(()=>{l(u,C.value===`ops`?`运维场景面板`:`增长场景面板`)});let f=t(`p`);return d(n,f),c(f,`text-sm opacity-70`),d(f,r(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),e}),Ke=g(()=>{let n=s(),a=t(`div`);d(n,a),c(a,`join`);let o=t(`button`);d(a,o),p(()=>{c(o,String(`btn btn-sm join-item ${C.value===`ops`?`btn-primary`:``}`))}),e(o,`click`,()=>{C.value=`ops`}),d(o,r(`运维`));let u=t(`button`);d(a,u),p(()=>{c(u,String(`btn btn-sm join-item ${C.value===`growth`?`btn-primary`:``}`))}),e(u,`click`,()=>{C.value=`growth`}),d(u,r(`增长`));let f=t(`button`);d(n,f),p(()=>{c(f,String(`btn btn-sm ${b.value?`btn-secondary`:`btn-outline`}`))}),e(f,`click`,()=>{b.value=!b.value});let m=i(f);return d(f,m),p(()=>{l(m,b.value?`隐藏摘要`:`显示摘要`)}),n});p(()=>{u(h(te,{__rue_slots:{default:We,header:Ge,actions:Ke},children:We}),X,Ue)});let qe=t(`section`);d(ze,qe),c(qe,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Je=t(`div`);d(qe,Je);let Q=t(`h3`);d(Je,Q),c(Q,`font-semibold`),d(Q,r(`显式 `));let Ye=i(Q);d(Q,Ye),l(Ye,`<Template>`),d(Q,r(` 列表片段`));let Xe=t(`p`);d(Je,Xe),c(Xe,`text-sm opacity-70`),d(Xe,r(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let $=t(`ul`);d(qe,$),c($,`list rounded-box bg-base-100 shadow-sm`);let Ze=a(`rue:list:start`),Qe=a(`rue:list:end`);d($,Ze),d($,Qe);let $e=new Map;return p(()=>{$e=ee({items:ne||[],getKey:(e,t)=>e.id,elements:$e,parent:$,before:Qe,start:Ze,renderItem:(e,n,i,o,l)=>{let m=g(()=>{let n=s(),i=t(`li`);d(n,i),c(i,`list-row items-start gap-3`);let o=t(`div`);d(i,o),c(o,`list-col-grow`);let l=t(`div`);d(o,l),c(l,`font-medium`);let f=a(`rue:slot:anchor`);d(l,f),p(()=>{let t=e.title;u(t,l,f)});let m=t(`div`);d(o,m),c(m,`text-sm opacity-70`);let h=a(`rue:slot:anchor`);d(m,h),p(()=>{let t=e.meta;u(t,m,h)});let g=t(`span`);d(i,g),c(g,`badge badge-outline whitespace-nowrap`);let _=a(`rue:slot:anchor`);d(g,_),p(()=>{let t=e.status;u(t,g,_)});let v=t(`li`);return d(n,v),c(v,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),d(v,r(`同一条数据额外展开的第二个兄弟节点`)),n});f(h(w,{key:e.id,children:m}),n,i,o)}})}),o}):``,O,M)}),m})}),m,_),m})};export{k as default};
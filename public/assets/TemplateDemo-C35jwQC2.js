import{$ as e,L as t,M as n,Q as r,Qt as i,Wt as a,X as o,Y as s,Yt as c,et as l,ht as u,l as d,lt as f,nt as p,o as m,s as ee,st as h,t as g,tt as _,zt as v}from"./vapor-runtime-CXIalONM.js";import{a as y,n as te}from"./vapor-helpers-vapor-CoXKrGmY.js";import{o as b}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as x}from"./Code-BIscIyEp.js";import{r as S}from"./SidebarPlaygroundExample-CEz1fABX.js";var C=e=>Array.isArray(e)?e.filter(e=>e!=null):e??[],w=i=>t(()=>{let t=e(),a=r(`rue-template-anchor`);return o(t,a),n(C(i.children),t,a),t}),T={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},E=e=>d(t=>{let n=l(`article`,t);i(()=>{f(n,T[e.tone??`base`])});let s=l(`h3`,n);o(n,s),f(s,`font-semibold`);let c=r(`rue:slot:anchor`);o(s,c),i(()=>{let t=e.title;a(()=>m(t,s,c))});let u=l(`p`,n);o(n,u),f(u,`mt-2 text-sm opacity-70`);let d=r(`rue:slot:anchor`);return o(u,d),i(()=>{let t=e.meta;a(()=>m(t,u,d))}),n}),ne=e=>d(t=>{let n=l(`section`,t);f(n,`rounded-box border border-base-300 bg-base-100 shadow-sm`);let s=l(`div`,n);o(n,s),f(s,`flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4`);let c=l(`div`,s);o(s,c),f(c,`min-w-0 space-y-2`);let u=l(`div`,c);o(c,u),f(u,`text-xs uppercase tracking-[0.22em] opacity-55`),o(u,_(`named slot`));let d=r(`rue:component:anchor`);o(c,d),i(()=>{let t=g(b,{source:e,name:`header`,children:`未提供 header`});a(()=>m(t,c,d))});let p=l(`div`,s);o(s,p),f(p,`flex flex-wrap items-center gap-2`);let ee=r(`rue:component:anchor`);o(p,ee),i(()=>{let t=g(b,{source:e,name:`actions`});a(()=>m(t,p,ee))});let h=l(`div`,n);o(n,h),f(h,`p-4`);let v=r(`rue:component:anchor`);return o(h,v),i(()=>{let t=g(b,{source:e,children:`未提供默认内容`});a(()=>m(t,h,v))}),n}),D={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},O={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},re=()=>{let{activeTab:t,showBurst:n,showSummary:b,mode:C,branchState:T,code:re,cards:k,feed:ie}=y(`useSetup:0:0`,()=>c(()=>{let e=y(`ref:1:0`,()=>v(`preview`)),t=y(`ref:1:1`,()=>v(!0)),n=y(`ref:1:2`,()=>v(!0)),r=y(`ref:1:3`,()=>v(`ops`));return{activeTab:e,showBurst:t,showSummary:n,mode:r,branchState:y(`ref:1:4`,()=>v(`healthy`)),code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`,cards:D[r.value],feed:O[r.value]}}));return d(c=>{let v=e(),y=r(`rue:component:anchor`);return o(v,y),m(g(S,{children:d(()=>{let c=e(),v=l(`h1`,c);o(c,v),f(v,`mb-4 text-5xl font-semibold md:mb-4`),o(v,_(`Template 内置组件`));let y=l(`div`,c);o(c,y),h(y,`role`,`tablist`),f(y,`tabs tabs-box`);let S=l(`button`,y);o(y,S),h(S,`role`,`tab`),i(()=>{f(S,`tab ${t.value===`preview`?`tab-active`:``}`)}),s(S,`click`,()=>{t.value=`preview`}),o(S,_(`效果`));let D=l(`button`,y);o(y,D),h(D,`role`,`tab`),i(()=>{f(D,`tab ${t.value===`code`?`tab-active`:``}`)}),s(D,`click`,()=>{t.value=`code`}),o(D,_(`代码`));let O=l(`div`,c);o(c,O),f(O,`mt-4 grid items-start gap-6 md:grid-cols-1`);let ae=r(`rue:slot:anchor`);o(O,ae),i(()=>{let n=t.value===`code`?d(()=>{let t=e(),n=l(`div`,t);o(t,n),f(n,`card overflow-auto bg-base-100 shadow`);let s=l(`div`,n);o(n,s),f(s,`card-body p-0`);let c=r(`rue:component:anchor`);return o(s,c),i(()=>{let e=g(x,{className:`h-full`,lang:`tsx`,code:re});a(()=>m(e,s,c))}),t}):``;a(()=>m(n,O,ae))}),o(O,_(` `));let oe=r(`rue:slot:anchor`);return o(O,oe),i(()=>{let c=t.value===`preview`?d(()=>{let t=e(),c=l(`div`,t);o(t,c),f(c,`grid gap-6`);let v=l(`div`,c);o(c,v),h(v,`role`,`alert`),f(v,`alert alert-success`);let y=l(`div`,v);o(v,y),f(y,`space-y-2`);let x=l(`div`,y);o(y,x),o(x,_(`这个页面改成了显式导入`));let S=l(`strong`,x);o(x,S);let D=p(S);o(S,D),u(D,`<Template>`),o(x,_(`组件的写法，不再依赖小写 template lowering。`));let O=l(`div`,y);o(y,O),f(O,`text-sm opacity-80`),o(O,_(`当前示例覆盖命名 slot、`));let re=p(O);o(O,re),u(re,`<Template v-if>`),o(O,_(`、 `));let ae=p(O);o(O,ae),u(ae,`<Template v-if / v-else-if / v-else>`);let oe=p(O);o(O,oe),u(oe,` `),o(O,_(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let se=l(`div`,c);o(c,se),f(se,`card bg-base-100 shadow`);let A=l(`div`,se);o(se,A),f(A,`card-body gap-4`);let j=l(`div`,A);o(A,j),f(j,`flex flex-wrap items-center justify-between gap-3`);let ce=l(`div`,j);o(j,ce);let le=l(`h2`,ce);o(ce,le),f(le,`card-title`),o(le,_(`切换场景`));let ue=l(`p`,ce);o(ce,ue),f(ue,`text-sm opacity-70`),o(ue,_(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let M=l(`div`,j);o(j,M),f(M,`flex flex-wrap gap-3`);let N=l(`div`,M);o(M,N),f(N,`join`);let de=l(`button`,N);o(N,de),i(()=>{f(de,`btn btn-sm join-item ${C.value===`ops`?`btn-primary`:``}`)}),s(de,`click`,()=>{C.value=`ops`}),o(de,_(`运维`));let fe=l(`button`,N);o(N,fe),i(()=>{f(fe,`btn btn-sm join-item ${C.value===`growth`?`btn-primary`:``}`)}),s(fe,`click`,()=>{C.value=`growth`}),o(fe,_(`增长`));let P=l(`button`,M);o(M,P),i(()=>{f(P,`btn btn-sm ${n.value?`btn-secondary`:`btn-outline`}`)}),s(P,`click`,()=>{n.value=!n.value});let pe=p(P);o(P,pe),i(()=>{u(pe,n.value?`隐藏中间卡片`:`显示中间卡片`)});let F=l(`div`,A);o(A,F),f(F,`grid gap-4 xl:grid-cols-2`);let I=l(`section`,F);o(F,I),f(I,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let L=l(`div`,I);o(I,L),f(L,`flex flex-wrap items-center justify-between gap-2`);let me=l(`div`,L);o(L,me);let he=l(`h3`,me);o(me,he),f(he,`font-semibold`),o(he,_(`普通 div 包裹`));let ge=l(`p`,me);o(me,ge),f(ge,`text-sm opacity-70`),o(ge,_(`中间两张卡片会先进入一个额外 grid item。`));let _e=l(`span`,L);o(L,_e),f(_e,`badge badge-warning badge-outline`),o(_e,_(`直接网格项: `));let ve=p(_e);o(_e,ve),i(()=>{u(ve,n.value?3:2)});let R=l(`div`,I);o(I,R),f(R,`grid gap-3 md:grid-cols-2`);let ye=r(`rue:component:anchor`);o(R,ye),i(()=>{let e=g(E,{title:k.head.title,meta:k.head.meta,tone:`base`});a(()=>m(e,R,ye))});let be=r(`rue:slot:anchor`);o(R,be),i(()=>{let t=n.value?d(()=>{let t=e(),n=l(`div`,t);o(t,n),f(n,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`);let s=r(`rue:component:anchor`);o(n,s),i(()=>{let e=g(E,{title:k.burst[0].title,meta:k.burst[0].meta,tone:`primary`});a(()=>m(e,n,s))});let c=r(`rue:component:anchor`);return o(n,c),i(()=>{let e=g(E,{title:k.burst[1].title,meta:k.burst[1].meta,tone:`accent`});a(()=>m(e,n,c))}),t}):``;a(()=>m(t,R,be))});let xe=r(`rue:component:anchor`);o(R,xe),i(()=>{let e=g(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});a(()=>m(e,R,xe))});let z=l(`section`,F);o(F,z),f(z,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let B=l(`div`,z);o(z,B),f(B,`flex flex-wrap items-center justify-between gap-2`);let Se=l(`div`,B);o(B,Se);let V=l(`h3`,Se);o(Se,V),f(V,`font-semibold`),o(V,_(`显式 `));let Ce=p(V);o(V,Ce),u(Ce,`<Template v-if>`),o(V,_(` 条件片段`));let we=l(`p`,Se);o(Se,we),f(we,`text-sm opacity-70`),o(we,_(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let H=l(`span`,B);o(B,H),f(H,`badge badge-success badge-outline`),o(H,_(`直接网格项: `));let Te=p(H);o(H,Te),i(()=>{u(Te,n.value?4:2)});let U=l(`div`,z);o(z,U),f(U,`grid gap-3 md:grid-cols-2`);let Ee=r(`rue:component:anchor`);o(U,Ee),i(()=>{let e=g(E,{title:k.head.title,meta:k.head.meta,tone:`base`});a(()=>m(e,U,Ee))});let De=r(`rue:slot:anchor`);o(U,De),i(()=>{let t=n.value?d(()=>{let t=e(),n=r(`rue:component:anchor`);return o(t,n),m(g(w,{children:d(()=>{let t=e(),n=r(`rue:component:anchor`);o(t,n),i(()=>{let e=g(E,{title:k.burst[0].title,meta:k.burst[0].meta,tone:`primary`});a(()=>m(e,t,n))});let s=r(`rue:component:anchor`);return o(t,s),i(()=>{let e=g(E,{title:k.burst[1].title,meta:k.burst[1].meta,tone:`accent`});a(()=>m(e,t,s))}),t})}),t,n),t}):``;a(()=>m(t,U,De))});let Oe=r(`rue:component:anchor`);o(U,Oe),i(()=>{let e=g(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});a(()=>m(e,U,Oe))});let W=l(`section`,A);o(A,W),f(W,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let G=l(`div`,W);o(W,G),f(G,`flex flex-wrap items-center justify-between gap-3`);let ke=l(`div`,G);o(G,ke);let K=l(`h3`,ke);o(ke,K),f(K,`font-semibold`),o(K,_(`显式 `));let Ae=p(K);o(K,Ae),u(Ae,`<Template v-if>`),o(K,_(` / `));let je=p(K);o(K,je),u(je,`<Template v-else-if>`),o(K,_(` / `));let Me=p(K);o(K,Me),u(Me,`<Template v-else>`);let Ne=p(K);o(K,Ne),u(Ne,` `),o(K,_(`分支链`));let Pe=l(`p`,ke);o(ke,Pe),f(Pe,`text-sm opacity-70`),o(Pe,_(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let q=l(`div`,G);o(G,q),f(q,`join`);let Fe=l(`button`,q);o(q,Fe),i(()=>{f(Fe,`btn btn-sm join-item ${T.value===`healthy`?`btn-info`:`btn-outline`}`)}),s(Fe,`click`,()=>{T.value=`healthy`}),o(Fe,_(`健康`));let Ie=l(`button`,q);o(q,Ie),i(()=>{f(Ie,`btn btn-sm join-item ${T.value===`warning`?`btn-info`:`btn-outline`}`)}),s(Ie,`click`,()=>{T.value=`warning`}),o(Ie,_(`预警`));let Le=l(`button`,q);o(q,Le),i(()=>{f(Le,`btn btn-sm join-item ${T.value===`critical`?`btn-info`:`btn-outline`}`)}),s(Le,`click`,()=>{T.value=`critical`}),o(Le,_(`故障`));let Re=l(`div`,W);o(W,Re),f(Re,`badge badge-info badge-outline`),o(Re,_(`当前分支: `));let ze=p(Re);o(Re,ze),i(()=>{u(ze,T.value)});let Be=l(`div`,W);o(W,Be),f(Be,`grid gap-3 md:grid-cols-2`);let Ve=r(`rue:slot:anchor`);o(Be,Ve),i(()=>{let t=T.value===`healthy`?d(()=>{let t=e(),n=r(`rue:component:anchor`);return o(t,n),m(g(w,{children:d(()=>{let t=e(),n=r(`rue:component:anchor`);o(t,n),m(g(E,{title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`}),t,n);let i=r(`rue:component:anchor`);return o(t,i),m(g(E,{title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}),t,i),t})}),t,n),t}):T.value===`warning`?d(()=>{let t=e(),n=r(`rue:component:anchor`);return o(t,n),m(g(w,{children:d(()=>{let t=e(),n=r(`rue:component:anchor`);o(t,n),m(g(E,{title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`}),t,n);let i=r(`rue:component:anchor`);return o(t,i),m(g(E,{title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}),t,i),t})}),t,n),t}):d(()=>{let t=e(),n=r(`rue:component:anchor`);return o(t,n),m(g(w,{children:d(()=>{let t=e(),n=r(`rue:component:anchor`);o(t,n),m(g(E,{title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`}),t,n);let i=r(`rue:component:anchor`);return o(t,i),m(g(E,{title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}),t,i),t})}),t,n),t});a(()=>m(t,Be,Ve))});let J=l(`div`,A);o(A,J),f(J,`grid gap-4 xl:grid-cols-2`);let Y=l(`section`,J);o(J,Y),f(Y,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let He=l(`div`,Y);o(Y,He);let X=l(`h3`,He);o(He,X),f(X,`font-semibold`),o(X,_(`显式 `));let Ue=p(X);o(X,Ue),u(Ue,`<Template slot="header">`),o(X,_(` 命名片段`));let We=l(`p`,He);o(He,We),f(We,`text-sm opacity-70`),o(We,_(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`));let Ge=r(`rue:component:anchor`);o(Y,Ge);let Ke=d(()=>{let t=e(),n=l(`div`,t);o(t,n),f(n,`grid gap-3 md:grid-cols-2`);let s=r(`rue:component:anchor`);o(n,s),i(()=>{let e=g(E,{title:k.head.title,meta:k.head.meta,tone:`base`});a(()=>m(e,n,s))});let c=r(`rue:slot:anchor`);o(n,c),i(()=>{let t=b.value?d(()=>{let t=e(),n=r(`rue:component:anchor`);return o(t,n),m(g(w,{children:d(()=>{let t=e(),n=r(`rue:component:anchor`);o(t,n),m(g(E,{title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`}),t,n);let i=r(`rue:component:anchor`);return o(t,i),m(g(E,{title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}),t,i),t})}),t,n),t}):``;a(()=>m(t,n,c))});let u=r(`rue:component:anchor`);return o(n,u),i(()=>{let e=g(E,{title:k.tail.title,meta:k.tail.meta,tone:`base`});a(()=>m(e,n,u))}),t}),qe=d(()=>{let t=e(),n=l(`div`,t);o(t,n);let r=l(`div`,n);o(n,r),f(r,`badge badge-secondary badge-outline`),o(r,_(`named slot`));let a=l(`h4`,n);o(n,a),f(a,`mt-2 text-lg font-semibold`);let s=p(a);o(a,s),i(()=>{u(s,C.value===`ops`?`运维场景面板`:`增长场景面板`)});let c=l(`p`,n);return o(n,c),f(c,`text-sm opacity-70`),o(c,_(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`)),t}),Je=d(()=>{let t=e(),n=l(`div`,t);o(t,n),f(n,`join`);let r=l(`button`,n);o(n,r),i(()=>{f(r,`btn btn-sm join-item ${C.value===`ops`?`btn-primary`:``}`)}),s(r,`click`,()=>{C.value=`ops`}),o(r,_(`运维`));let a=l(`button`,n);o(n,a),i(()=>{f(a,`btn btn-sm join-item ${C.value===`growth`?`btn-primary`:``}`)}),s(a,`click`,()=>{C.value=`growth`}),o(a,_(`增长`));let c=l(`button`,t);o(t,c),i(()=>{f(c,`btn btn-sm ${b.value?`btn-secondary`:`btn-outline`}`)}),s(c,`click`,()=>{b.value=!b.value});let d=p(c);return o(c,d),i(()=>{u(d,b.value?`隐藏摘要`:`显示摘要`)}),t});i(()=>{let e=g(ne,{__rue_slots:{default:Ke,header:qe,actions:Je},children:Ke});a(()=>m(e,Y,Ge))});let Z=l(`section`,J);o(J,Z),f(Z,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Q=l(`div`,Z);o(Z,Q);let $=l(`h3`,Q);o(Q,$),f($,`font-semibold`),o($,_(`显式 `));let Ye=p($);o($,Ye),u(Ye,`<Template>`),o($,_(` 列表片段`));let Xe=l(`p`,Q);o(Q,Xe),f(Xe,`text-sm opacity-70`),o(Xe,_(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Ze=l(`ul`,Z);o(Z,Ze),f(Ze,`list rounded-box bg-base-100 shadow-sm`);let Qe=r(`rue:list:start`),$e=r(`rue:list:end`);o(Ze,Qe),o(Ze,$e);let et=new Map;return i(()=>{et=te({items:ie||[],getKey:(e,t)=>e.id,elements:et,parent:Ze,before:$e,start:Qe,renderItem:(t,n,s,c,u)=>{let p=d(()=>{let n=e(),s=l(`li`,n);o(n,s),f(s,`list-row items-start gap-3`);let c=l(`div`,s);o(s,c),f(c,`list-col-grow`);let u=l(`div`,c);o(c,u),f(u,`font-medium`);let d=r(`rue:slot:anchor`);o(u,d),i(()=>{let e=t.title;a(()=>m(e,u,d))});let p=l(`div`,c);o(c,p),f(p,`text-sm opacity-70`);let ee=r(`rue:slot:anchor`);o(p,ee),i(()=>{let e=t.meta;a(()=>m(e,p,ee))});let h=l(`span`,s);o(s,h),f(h,`badge badge-outline whitespace-nowrap`);let g=r(`rue:slot:anchor`);o(h,g),i(()=>{let e=t.status;a(()=>m(e,h,g))});let v=l(`li`,n);return o(n,v),f(v,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),o(v,_(`同一条数据额外展开的第二个兄弟节点`)),n});ee(g(w,{key:t.id,children:p}),n,s,c)}})}),t}):``;a(()=>m(c,O,oe))}),c})}),v,y),v})};export{re as default};
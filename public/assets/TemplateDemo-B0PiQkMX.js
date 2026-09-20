import{B as e,Bt as t,E as n,F as r,Ht as i,I as a,P as o,Qt as s,Ut as c,V as l,Vt as u,W as d,Wt as f,en as p,f as ee,fn as m,gn as h,h as te,hn as g,in as _,mn as v,mt as y,nt as b,p as ne,pn as x,qt as re,sn as S,u as C,yn as w,z as T,zt as E}from"./rue-runtime-BWbIfNT8.js";import{t as D}from"./Code-C5ZhIIr9.js";import{r as O}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var k=w(`<section class="rounded-box border border-base-300 bg-base-100 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4"><div class="min-w-0 space-y-2"><div class="text-xs uppercase tracking-[0.22em] opacity-55">named slot</div><!--rue:opaque-hole:0--></div><div class="flex flex-wrap items-center gap-2"><!--rue:opaque-hole:1--></div></div><div class="p-4"><!--rue:opaque-hole:2--></div></section>`),A=w(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">Template 内置组件</h1>`),ie=w(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),ae=w(`<div class="mt-4 grid items-start gap-6 md:grid-cols-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),j={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},M=(n,r,i)=>{let o=d(T(n,`meta`)),s=d(T(n,`title`)),c=d(T(n,`tone`));return a(f(e=>{let n=g(`article`,e),r;_(()=>{let e=j[c.get()??`base`],t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i=g(`h3`,n);m(n,i),i.setAttribute(`class`,`font-semibold`);let a=x(`rue:compiled-slot`);m(i,a),t({parent:i,before:a},()=>E(s.get()),()=>({}));let l=g(`p`,n);m(n,l),l.setAttribute(`class`,`mt-2 text-sm opacity-70`);let u=x(`rue:compiled-slot`);return m(l,u),t({parent:l,before:u},()=>E(o.get()),()=>({})),[n,n]}),e=>p(()=>{o.set(e.meta),s.set(e.title),c.set(e.tone)}),()=>e(n))},oe=(r,i,a)=>f(i=>{let a=k().content.cloneNode(!0).firstChild,s=a.childNodes[0].childNodes[0].childNodes[1],c=s.parentNode,d=a.childNodes[0].childNodes[1].childNodes[0],f=d.parentNode,p=a.childNodes[1].childNodes[0],ee=p.parentNode,te=(t,i,a)=>{let s=()=>o(n,()=>({source:e(r),name:`header`,children:(e,t,n)=>{let r=()=>l(e=>{let t=v();m(t,h(`未提供 header`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():u(e,n,r)}}));return t==null?s():u(t,a,s)},g=s.nextSibling;c.removeChild(s),t({parent:c,before:g},()=>te,()=>({}));let _=(t,i,a)=>{let s=()=>o(n,()=>({source:e(r),name:`actions`}));return t==null?s():u(t,a,s)},y=d.nextSibling;f.removeChild(d),t({parent:f,before:y},()=>_,()=>({}));let b=(t,i,a)=>{let s=()=>o(n,()=>({source:e(r),children:(e,t,n)=>{let r=()=>l(e=>{let t=v();m(t,h(`未提供默认内容`));let n=h(``),r=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():u(e,n,r)}}));return t==null?s():u(t,a,s)},ne=p.nextSibling;return ee.removeChild(p),t({parent:ee,before:ne},()=>b,()=>({})),[a,a]}),N={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},P={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},F=(e,n,a)=>{let p=y(`preview`),w=y(!0),T=y(!0),k=y(`ops`),j=y(`healthy`),F=N[k.value],se=P[k.value];return b(()=>o(O,()=>({children:(e,n,a)=>{let o=()=>f(e=>{let n=v();n.appendChild(A().content.cloneNode(!0));let a=ie().content.cloneNode(!0),o=a.firstChild,y=o.childNodes[0],b=o.childNodes[1];n.appendChild(a),y.setAttribute(`role`,`tab`);let O;_(()=>{let e=`tab ${p.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,y.setAttribute(`class`,t))}),S(C(e,y,`click`,()=>()=>{p.value=`preview`})),b.setAttribute(`role`,`tab`);let N;_(()=>{let e=`tab ${p.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(N,t)||(N=t,b.setAttribute(`class`,t))}),S(C(e,b,`click`,()=>()=>{p.value=`code`}));let P=ae().content.cloneNode(!0),I=P.firstChild,ce=I.childNodes[0],L=ce.parentNode,le=I.childNodes[1],R=le.parentNode;n.appendChild(P),c(L,ce,()=>{let e=p.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=g(`div`,e);t.setAttribute(`class`,`card overflow-auto bg-base-100 shadow`);let n=g(`div`,t);return m(t,n),n.setAttribute(`class`,`card-body p-0`),r(n,D,()=>({className:`h-full`,lang:`tsx`,code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v();return[t.firstChild,t.lastChild]})}}),c(R,le,()=>{let e=p.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let n=g(`div`,e);n.setAttribute(`class`,`grid gap-6`);let a=g(`div`,n);m(n,a),a.setAttribute(`role`,`alert`),a.setAttribute(`class`,`alert alert-success`);let o=g(`div`,a);m(a,o),o.setAttribute(`class`,`space-y-2`);let c=g(`div`,o);m(o,c),m(c,h(`这个页面改成了显式导入 `));let p=g(`strong`,c);m(c,p),m(p,h(`<Template>`)),m(c,h(` 组件的写法，不再依赖小写 template lowering。`));let y=g(`div`,o);m(o,y),y.setAttribute(`class`,`text-sm opacity-80`),m(y,h(`当前示例覆盖命名 slot、`)),m(y,h(`<Template v-if>`)),m(y,h(`、 `)),m(y,h(`<Template v-if / v-else-if / v-else>`)),m(y,h(` `)),m(y,h(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let b=g(`div`,n);m(n,b),b.setAttribute(`class`,`card bg-base-100 shadow`);let D=g(`div`,b);m(b,D),D.setAttribute(`class`,`card-body gap-4`);let O=g(`div`,D);m(D,O),O.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let A=g(`div`,O);m(O,A);let ie=g(`h2`,A);m(A,ie),ie.setAttribute(`class`,`card-title`),m(ie,h(`切换场景`));let ae=g(`p`,A);m(A,ae),ae.setAttribute(`class`,`text-sm opacity-70`),m(ae,h(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let N=g(`div`,O);m(O,N),N.setAttribute(`class`,`flex flex-wrap gap-3`);let P=g(`div`,N);m(N,P),P.setAttribute(`class`,`join`);let I=g(`button`,P);m(P,I);let ce;_(()=>{let e=`btn btn-sm join-item ${k.value===`ops`?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(ce,t)||(ce=t,I.setAttribute(`class`,t))}),S(C(e,I,`click`,()=>()=>{k.value=`ops`})),m(I,h(`运维`));let L=g(`button`,P);m(P,L);let le;_(()=>{let e=`btn btn-sm join-item ${k.value===`growth`?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(le,t)||(le=t,L.setAttribute(`class`,t))}),S(C(e,L,`click`,()=>()=>{k.value=`growth`})),m(L,h(`增长`));let R=g(`button`,N);m(N,R);let ue;_(()=>{let e=`btn btn-sm ${w.value?`btn-secondary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(ue,t)||(ue=t,R.setAttribute(`class`,t))}),S(C(e,R,`click`,()=>()=>{w.value=!w.value}));let de=h(``);m(R,de),s(de,()=>w.value?`隐藏中间卡片`:`显示中间卡片`);let z=g(`div`,D);m(D,z),z.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`);let B=g(`section`,z);m(z,B),B.setAttribute(`class`,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let V=g(`div`,B);m(B,V),V.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-2`);let H=g(`div`,V);m(V,H);let fe=g(`h3`,H);m(H,fe),fe.setAttribute(`class`,`font-semibold`),m(fe,h(`普通 div 包裹`));let pe=g(`p`,H);m(H,pe),pe.setAttribute(`class`,`text-sm opacity-70`),m(pe,h(`中间两张卡片会先进入一个额外 grid item。`));let me=g(`span`,V);m(V,me),me.setAttribute(`class`,`badge badge-warning badge-outline`),m(me,h(`直接网格项: `));let he=h(``);m(me,he),s(he,()=>w.value?3:2);let U=g(`div`,B);m(B,U),U.setAttribute(`class`,`grid gap-3 md:grid-cols-2`),r(U,M,()=>({title:F.head.title,meta:F.head.meta,tone:`base`})),i(()=>{let e=w.value;return e?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=g(`div`,e);return t.setAttribute(`class`,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`),r(t,M,()=>({title:F.burst[0].title,meta:F.burst[0].meta,tone:`primary`})),r(t,M,()=>({title:F.burst[1].title,meta:F.burst[1].meta,tone:`accent`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(U),r(U,M,()=>({title:F.tail.title,meta:F.tail.meta,tone:`base`}));let W=g(`section`,z);m(z,W),W.setAttribute(`class`,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let G=g(`div`,W);m(W,G),G.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-2`);let K=g(`div`,G);m(G,K);let q=g(`h3`,K);m(K,q),q.setAttribute(`class`,`font-semibold`),m(q,h(`显式 `)),m(q,h(`<Template v-if>`)),m(q,h(` 条件片段`));let ge=g(`p`,K);m(K,ge),ge.setAttribute(`class`,`text-sm opacity-70`),m(ge,h(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let _e=g(`span`,G);m(G,_e),_e.setAttribute(`class`,`badge badge-success badge-outline`),m(_e,h(`直接网格项: `));let ve=h(``);m(_e,ve),s(ve,()=>w.value?4:2);let ye=g(`div`,W);m(W,ye),ye.setAttribute(`class`,`grid gap-3 md:grid-cols-2`),r(ye,M,()=>({title:F.head.title,meta:F.head.meta,tone:`base`})),i(()=>w.value?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=v();r(t,M,()=>({title:F.burst[0].title,meta:F.burst[0].meta,tone:`primary`})),r(t,M,()=>({title:F.burst[1].title,meta:F.burst[1].meta,tone:`accent`}));let n=h(``),i=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(ye),r(ye,M,()=>({title:F.tail.title,meta:F.tail.meta,tone:`base`}));let J=g(`section`,D);m(D,J),J.setAttribute(`class`,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let Y=g(`div`,J);m(J,Y),Y.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let be=g(`div`,Y);m(Y,be);let X=g(`h3`,be);m(be,X),X.setAttribute(`class`,`font-semibold`),m(X,h(`显式 `)),m(X,h(`<Template v-if>`)),m(X,h(` / `)),m(X,h(`<Template v-else-if>`)),m(X,h(` / `)),m(X,h(`<Template v-else>`)),m(X,h(` `)),m(X,h(`分支链`));let xe=g(`p`,be);m(be,xe),xe.setAttribute(`class`,`text-sm opacity-70`),m(xe,h(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let Z=g(`div`,Y);m(Y,Z),Z.setAttribute(`class`,`join`);let Se=g(`button`,Z);m(Z,Se);let Ce;_(()=>{let e=`btn btn-sm join-item ${j.value===`healthy`?`btn-info`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(Ce,t)||(Ce=t,Se.setAttribute(`class`,t))}),S(C(e,Se,`click`,()=>()=>{j.value=`healthy`})),m(Se,h(`健康`));let we=g(`button`,Z);m(Z,we);let Te;_(()=>{let e=`btn btn-sm join-item ${j.value===`warning`?`btn-info`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(Te,t)||(Te=t,we.setAttribute(`class`,t))}),S(C(e,we,`click`,()=>()=>{j.value=`warning`})),m(we,h(`预警`));let Ee=g(`button`,Z);m(Z,Ee);let De;_(()=>{let e=`btn btn-sm join-item ${j.value===`critical`?`btn-info`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(De,t)||(De=t,Ee.setAttribute(`class`,t))}),S(C(e,Ee,`click`,()=>()=>{j.value=`critical`})),m(Ee,h(`故障`));let Oe=g(`div`,J);m(J,Oe),Oe.setAttribute(`class`,`badge badge-info badge-outline`),m(Oe,h(`当前分支: `));let ke=h(``);m(Oe,ke),s(ke,()=>j.value);let Ae=g(`div`,J);m(J,Ae),Ae.setAttribute(`class`,`grid gap-3 md:grid-cols-2`),i(()=>j.value===`healthy`?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=v();r(t,M,()=>({title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`})),r(t,M,()=>({title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}));let n=h(``),i=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>i(()=>j.value===`warning`?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=v();r(t,M,()=>({title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`})),r(t,M,()=>({title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}));let n=h(``),i=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>f(e=>{let t=v();r(t,M,()=>({title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`})),r(t,M,()=>({title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}));let n=h(``),i=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})})}).__rue_compiled_mount(Ae);let Q=g(`div`,D);m(D,Q),Q.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`);let je=g(`section`,Q);m(Q,je),je.setAttribute(`class`,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let Me=g(`div`,je);m(je,Me);let Ne=g(`h3`,Me);m(Me,Ne),Ne.setAttribute(`class`,`font-semibold`),m(Ne,h(`显式 `)),m(Ne,h(`<Template slot="header">`)),m(Ne,h(` 命名片段`));let Pe=g(`p`,Me);m(Me,Pe),Pe.setAttribute(`class`,`text-sm opacity-70`),m(Pe,h(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`)),r(je,oe,()=>({__rue_slots:{header:(e,t,n)=>{let r=()=>f(e=>{let t=v(),n=g(`div`,t);m(t,n);let r=g(`div`,n);m(n,r),r.setAttribute(`class`,`badge badge-secondary badge-outline`),m(r,h(`named slot`));let i=g(`h4`,n);m(n,i),i.setAttribute(`class`,`mt-2 text-lg font-semibold`);let a=h(``);m(i,a),s(a,()=>k.value===`ops`?`运维场景面板`:`增长场景面板`);let o=g(`p`,n);m(n,o),o.setAttribute(`class`,`text-sm opacity-70`),m(o,h(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`));let c=h(``),l=h(``);return t.insertBefore(c,t.firstChild),t.appendChild(l),[t.firstChild,t.lastChild]});return e==null?r():u(e,n,r)},actions:(e,t,n)=>{let r=()=>f(e=>{let t=v(),n=g(`div`,t);m(t,n),n.setAttribute(`class`,`join`);let r=g(`button`,n);m(n,r);let i;_(()=>{let e=`btn btn-sm join-item ${k.value===`ops`?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,r.setAttribute(`class`,t))}),S(C(e,r,`click`,()=>()=>{k.value=`ops`})),m(r,h(`运维`));let a=g(`button`,n);m(n,a);let o;_(()=>{let e=`btn btn-sm join-item ${k.value===`growth`?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(o,t)||(o=t,a.setAttribute(`class`,t))}),S(C(e,a,`click`,()=>()=>{k.value=`growth`})),m(a,h(`增长`));let c=g(`button`,t);m(t,c);let l;_(()=>{let e=`btn btn-sm ${T.value?`btn-secondary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,c.setAttribute(`class`,t))}),S(C(e,c,`click`,()=>()=>{T.value=!T.value}));let u=h(``);m(c,u),s(u,()=>T.value?`隐藏摘要`:`显示摘要`);let d=h(``),f=h(``);return t.insertBefore(d,t.firstChild),t.appendChild(f),[t.firstChild,t.lastChild]});return e==null?r():u(e,n,r)}},children:(e,t,n)=>{let a=()=>f(e=>{let t=v(),n=g(`div`,t);m(t,n),n.setAttribute(`class`,`grid gap-3 md:grid-cols-2`),r(n,M,()=>({title:F.head.title,meta:F.head.meta,tone:`base`})),i(()=>{let e=T.value;return e?{__rue_compiled_branch_key:!0,create:()=>f(e=>{let t=v();r(t,M,()=>({title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`})),r(t,M,()=>({title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}));let n=h(``),i=h(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(n),r(n,M,()=>({title:F.tail.title,meta:F.tail.meta,tone:`base`}));let a=h(``),o=h(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?a():u(e,n,a)}}));let $=g(`section`,Q);m(Q,$),$.setAttribute(`class`,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Fe=g(`div`,$);m($,Fe);let Ie=g(`h3`,Fe);m(Fe,Ie),Ie.setAttribute(`class`,`font-semibold`),m(Ie,h(`显式 `)),m(Ie,h(`<Template>`)),m(Ie,h(` 列表片段`));let Le=g(`p`,Fe);m(Fe,Le),Le.setAttribute(`class`,`text-sm opacity-70`),m(Le,h(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Re=g(`ul`,$);m($,Re),Re.setAttribute(`class`,`list rounded-box bg-base-100 shadow-sm`);let ze=x(`rue:list:end`);m(Re,ze);let Be=[];return re(()=>{Be=te(Re,ze,Be,se||[],(e,t)=>e.id,(e,n)=>{let r=d(e);return ne((e,n,i)=>{let a=()=>f(e=>{let n=v(),i=g(`li`,n);m(n,i),i.setAttribute(`class`,`list-row items-start gap-3`);let a=g(`div`,i);m(i,a),a.setAttribute(`class`,`list-col-grow`);let o=g(`div`,a);m(a,o),o.setAttribute(`class`,`font-medium`);let s=x(`rue:compiled-slot`);m(o,s),t({parent:o,before:s},()=>E(r.get().title),()=>({}));let c=g(`div`,a);m(a,c),c.setAttribute(`class`,`text-sm opacity-70`);let l=x(`rue:compiled-slot`);m(c,l),t({parent:c,before:l},()=>E(r.get().meta),()=>({}));let u=g(`span`,i);m(i,u),u.setAttribute(`class`,`badge badge-outline whitespace-nowrap`);let d=x(`rue:compiled-slot`);m(u,d),t({parent:u,before:d},()=>E(r.get().status),()=>({}));let f=g(`li`,n);m(n,f),f.setAttribute(`class`,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),m(f,h(`同一条数据额外展开的第二个兄弟节点`));let p=h(``),ee=h(``);return n.insertBefore(p,n.firstChild),n.appendChild(ee),[n.firstChild,n.lastChild]});return e==null?a():u(e,i,a)},(t,i)=>{e=t,n=i,r.set(t)},void 0)},!1,!1)}),S(()=>ee(Be)),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>l(t=>{let n=h(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v();return[t.firstChild,t.lastChild]})}});let ue=h(``),de=h(``);return n.insertBefore(ue,n.firstChild),n.appendChild(de),[n.firstChild,n.lastChild]});return e==null?o():u(e,a,o)}})))};export{F as default};
import{Bt as e,E as t,H as n,Ht as r,Qt as i,U as a,Ut as o,V as s,Vt as c,Wt as l,Y as u,_t as d,en as f,f as ee,fn as p,gn as m,gt as h,h as te,hn as g,in as _,mn as v,p as ne,pn as y,qt as re,sn as b,st as x,u as S,vt as ie,yn as C,yt as w,zt as T}from"./rue-runtime-Cv6BZekS.js";import{t as E}from"./Code-BzFVdc3U.js";import{r as D}from"./SidebarPlaygroundExample-rFyhXfC_.js";var O=C(`<section class="rounded-box border border-base-300 bg-base-100 shadow-sm"><div class="flex flex-wrap items-start justify-between gap-3 border-b border-base-200 px-4 py-4"><div class="min-w-0 space-y-2"><div class="text-xs uppercase tracking-[0.22em] opacity-55">named slot</div><!--rue:opaque-hole:0--></div><div class="flex flex-wrap items-center gap-2"><!--rue:opaque-hole:1--></div></div><div class="p-4"><!--rue:opaque-hole:2--></div></section>`),k=C(`<h1 class="mb-4 text-5xl font-semibold md:mb-4">Template 内置组件</h1>`),ae=C(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),oe=C(`<div class="mt-4 grid items-start gap-6 md:grid-cols-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),A={base:`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`,primary:`rounded-box border border-primary/25 bg-primary/10 p-4 shadow-sm`,accent:`rounded-box border border-accent/25 bg-accent/10 p-4 shadow-sm`},j=(t,n,r)=>{let i=ie(h(t,`meta`)),o=ie(h(t,`title`)),s=ie(h(t,`tone`));return a(l(t=>{let n=g(`article`,t),r;_(()=>{let e=A[s.get()??`base`],t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let a=g(`h3`,n);p(n,a),a.setAttribute(`class`,`font-semibold`);let c=y(`rue:compiled-slot`);p(a,c),e({parent:a,before:c},()=>T(o.get()),()=>({}));let l=g(`p`,n);p(n,l),l.setAttribute(`class`,`mt-2 text-sm opacity-70`);let u=y(`rue:compiled-slot`);return p(l,u),e({parent:l,before:u},()=>T(i.get()),()=>({})),[n,n]}),e=>f(()=>{i.set(e.meta),o.set(e.title),s.set(e.tone)}),()=>d(t))},se=(n,r,i)=>l(r=>{let i=O().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[1],o=a.parentNode,l=i.childNodes[0].childNodes[1].childNodes[0],u=l.parentNode,f=i.childNodes[1].childNodes[0],ee=f.parentNode,h=(e,r,i)=>{let a=()=>s(t,()=>({source:d(n),name:`header`,children:(e,t,n)=>{let r=()=>w(e=>{let t=v();p(t,m(`未提供 header`));let n=m(``),r=m(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));return e==null?a():c(e,i,a)},te=a.nextSibling;o.removeChild(a),e({parent:o,before:te},()=>h,()=>({}));let g=(e,r,i)=>{let a=()=>s(t,()=>({source:d(n),name:`actions`}));return e==null?a():c(e,i,a)},_=l.nextSibling;u.removeChild(l),e({parent:u,before:_},()=>g,()=>({}));let ne=(e,r,i)=>{let a=()=>s(t,()=>({source:d(n),children:(e,t,n)=>{let r=()=>w(e=>{let t=v();p(t,m(`未提供默认内容`));let n=m(``),r=m(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));return e==null?a():c(e,i,a)},y=f.nextSibling;return ee.removeChild(f),e({parent:ee,before:y},()=>ne,()=>({})),[i,i]}),M={ops:{head:{title:`主看板`,meta:`Always visible`},burst:[{title:`告警`,meta:`2 critical`},{title:`值班`,meta:`On-call: Mina`}],tail:{title:`审计流`,meta:`14 events/min`}},growth:{head:{title:`首页流量`,meta:`+12.4%`},burst:[{title:`转化率`,meta:`3.8%`},{title:`留存`,meta:`D7 41%`}],tail:{title:`活动排期`,meta:`2 campaigns ready`}}},N={ops:[{id:1,title:`主库切换完成`,meta:`华东集群已接管写流量`,status:`done`},{id:2,title:`错误率回落`,meta:`5 分钟窗口内恢复到 0.2%`,status:`stable`}],growth:[{id:1,title:`首页 AB 发布`,meta:`新落地页已切到 40% 流量`,status:`live`},{id:2,title:`召回链路刷新`,meta:`推荐池新增 12 个候选特征`,status:`warm`}]},P=(t,a,d)=>{let f=x(`preview`),h=x(!0),C=x(!0),O=x(`ops`),A=x(`healthy`),P=M[O.value],ce=N[O.value];return u(()=>s(D,()=>({children:(t,a,s)=>{let u=()=>l(t=>{let a=v();a.appendChild(k().content.cloneNode(!0));let s=ae().content.cloneNode(!0),u=s.firstChild,d=u.childNodes[0],x=u.childNodes[1];a.appendChild(s),d.setAttribute(`role`,`tab`);let D;_(()=>{let e=`tab ${f.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(D,t)||(D=t,d.setAttribute(`class`,t))}),b(S(t,d,`click`,()=>()=>{f.value=`preview`})),x.setAttribute(`role`,`tab`);let M;_(()=>{let e=`tab ${f.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(M,t)||(M=t,x.setAttribute(`class`,t))}),b(S(t,x,`click`,()=>()=>{f.value=`code`}));let N=oe().content.cloneNode(!0),F=N.firstChild,le=F.childNodes[0],I=le.parentNode,ue=F.childNodes[1],L=ue.parentNode;a.appendChild(N),o(I,le,()=>{let e=f.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=g(`div`,e);t.setAttribute(`class`,`card overflow-auto bg-base-100 shadow`);let r=g(`div`,t);return p(t,r),r.setAttribute(`class`,`card-body p-0`),n(r,E,()=>({className:`h-full`,lang:`tsx`,code:`import { Slot, Template, type FC, ref } from '@rue-js/rue';

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

export default Demo;`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>w(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=v();return[t.firstChild,t.lastChild]})}}),o(L,ue,()=>{let t=f.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>l(t=>{let a=g(`div`,t);a.setAttribute(`class`,`grid gap-6`);let o=g(`div`,a);p(a,o),o.setAttribute(`role`,`alert`),o.setAttribute(`class`,`alert alert-success`);let s=g(`div`,o);p(o,s),s.setAttribute(`class`,`space-y-2`);let u=g(`div`,s);p(s,u),p(u,m(`这个页面改成了显式导入 `));let d=g(`strong`,u);p(u,d),p(d,m(`<Template>`)),p(u,m(` 组件的写法，不再依赖小写 template lowering。`));let f=g(`div`,s);p(s,f),f.setAttribute(`class`,`text-sm opacity-80`),p(f,m(`当前示例覆盖命名 slot、`)),p(f,m(`<Template v-if>`)),p(f,m(`、 `)),p(f,m(`<Template v-if / v-else-if / v-else>`)),p(f,m(` `)),p(f,m(`和列表片段四种写法，运行时同样不会额外生成包装节点。`));let x=g(`div`,a);p(a,x),x.setAttribute(`class`,`card bg-base-100 shadow`);let E=g(`div`,x);p(x,E),E.setAttribute(`class`,`card-body gap-4`);let D=g(`div`,E);p(E,D),D.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let k=g(`div`,D);p(D,k);let ae=g(`h2`,k);p(k,ae),ae.setAttribute(`class`,`card-title`),p(ae,m(`切换场景`));let oe=g(`p`,k);p(k,oe),oe.setAttribute(`class`,`text-sm opacity-70`),p(oe,m(`观察中间两张卡片出现时，网格项数量是否被额外包裹影响。`));let M=g(`div`,D);p(D,M),M.setAttribute(`class`,`flex flex-wrap gap-3`);let N=g(`div`,M);p(M,N),N.setAttribute(`class`,`join`);let F=g(`button`,N);p(N,F);let le;_(()=>{let e=`btn btn-sm join-item ${O.value===`ops`?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(le,t)||(le=t,F.setAttribute(`class`,t))}),b(S(t,F,`click`,()=>()=>{O.value=`ops`})),p(F,m(`运维`));let I=g(`button`,N);p(N,I);let ue;_(()=>{let e=`btn btn-sm join-item ${O.value===`growth`?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(ue,t)||(ue=t,I.setAttribute(`class`,t))}),b(S(t,I,`click`,()=>()=>{O.value=`growth`})),p(I,m(`增长`));let L=g(`button`,M);p(M,L);let de;_(()=>{let e=`btn btn-sm ${h.value?`btn-secondary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(de,t)||(de=t,L.setAttribute(`class`,t))}),b(S(t,L,`click`,()=>()=>{h.value=!h.value}));let fe=m(``);p(L,fe),i(fe,()=>h.value?`隐藏中间卡片`:`显示中间卡片`);let R=g(`div`,E);p(E,R),R.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`);let z=g(`section`,R);p(R,z),z.setAttribute(`class`,`space-y-4 rounded-box border border-warning/40 bg-warning/10 p-4`);let B=g(`div`,z);p(z,B),B.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-2`);let V=g(`div`,B);p(B,V);let pe=g(`h3`,V);p(V,pe),pe.setAttribute(`class`,`font-semibold`),p(pe,m(`普通 div 包裹`));let me=g(`p`,V);p(V,me),me.setAttribute(`class`,`text-sm opacity-70`),p(me,m(`中间两张卡片会先进入一个额外 grid item。`));let he=g(`span`,B);p(B,he),he.setAttribute(`class`,`badge badge-warning badge-outline`),p(he,m(`直接网格项: `));let ge=m(``);p(he,ge),i(ge,()=>h.value?3:2);let H=g(`div`,z);p(z,H),H.setAttribute(`class`,`grid gap-3 md:grid-cols-2`),n(H,j,()=>({title:P.head.title,meta:P.head.meta,tone:`base`})),r(()=>{let e=h.value;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=g(`div`,e);return t.setAttribute(`class`,`grid gap-3 rounded-box border border-warning/50 bg-base-100 p-3`),n(t,j,()=>({title:P.burst[0].title,meta:P.burst[0].meta,tone:`primary`})),n(t,j,()=>({title:P.burst[1].title,meta:P.burst[1].meta,tone:`accent`})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>w(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=v();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(H),n(H,j,()=>({title:P.tail.title,meta:P.tail.meta,tone:`base`}));let U=g(`section`,R);p(R,U),U.setAttribute(`class`,`space-y-4 rounded-box border border-success/40 bg-success/10 p-4`);let W=g(`div`,U);p(U,W),W.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-2`);let G=g(`div`,W);p(W,G);let K=g(`h3`,G);p(G,K),K.setAttribute(`class`,`font-semibold`),p(K,m(`显式 `)),p(K,m(`<Template v-if>`)),p(K,m(` 条件片段`));let _e=g(`p`,G);p(G,_e),_e.setAttribute(`class`,`text-sm opacity-70`),p(_e,m(`中间两张卡片通过 Template 指令直接成为兄弟 grid item，不多套一层 DOM。`));let ve=g(`span`,W);p(W,ve),ve.setAttribute(`class`,`badge badge-success badge-outline`),p(ve,m(`直接网格项: `));let ye=m(``);p(ve,ye),i(ye,()=>h.value?4:2);let be=g(`div`,U);p(U,be),be.setAttribute(`class`,`grid gap-3 md:grid-cols-2`),n(be,j,()=>({title:P.head.title,meta:P.head.meta,tone:`base`})),r(()=>h.value?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=v();n(t,j,()=>({title:P.burst[0].title,meta:P.burst[0].meta,tone:`primary`})),n(t,j,()=>({title:P.burst[1].title,meta:P.burst[1].meta,tone:`accent`}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=v();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(be),n(be,j,()=>({title:P.tail.title,meta:P.tail.meta,tone:`base`}));let q=g(`section`,E);p(E,q),q.setAttribute(`class`,`space-y-4 rounded-box border border-info/30 bg-info/10 p-4`);let J=g(`div`,q);p(q,J),J.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let xe=g(`div`,J);p(J,xe);let Y=g(`h3`,xe);p(xe,Y),Y.setAttribute(`class`,`font-semibold`),p(Y,m(`显式 `)),p(Y,m(`<Template v-if>`)),p(Y,m(` / `)),p(Y,m(`<Template v-else-if>`)),p(Y,m(` / `)),p(Y,m(`<Template v-else>`)),p(Y,m(` `)),p(Y,m(`分支链`));let Se=g(`p`,xe);p(xe,Se),Se.setAttribute(`class`,`text-sm opacity-70`),p(Se,m(`这组三个连续兄弟 Template 节点直接组成条件链，而不是手写三元表达式。`));let X=g(`div`,J);p(J,X),X.setAttribute(`class`,`join`);let Ce=g(`button`,X);p(X,Ce);let we;_(()=>{let e=`btn btn-sm join-item ${A.value===`healthy`?`btn-info`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(we,t)||(we=t,Ce.setAttribute(`class`,t))}),b(S(t,Ce,`click`,()=>()=>{A.value=`healthy`})),p(Ce,m(`健康`));let Te=g(`button`,X);p(X,Te);let Ee;_(()=>{let e=`btn btn-sm join-item ${A.value===`warning`?`btn-info`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(Ee,t)||(Ee=t,Te.setAttribute(`class`,t))}),b(S(t,Te,`click`,()=>()=>{A.value=`warning`})),p(Te,m(`预警`));let De=g(`button`,X);p(X,De);let Oe;_(()=>{let e=`btn btn-sm join-item ${A.value===`critical`?`btn-info`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(Oe,t)||(Oe=t,De.setAttribute(`class`,t))}),b(S(t,De,`click`,()=>()=>{A.value=`critical`})),p(De,m(`故障`));let ke=g(`div`,q);p(q,ke),ke.setAttribute(`class`,`badge badge-info badge-outline`),p(ke,m(`当前分支: `));let Ae=m(``);p(ke,Ae),i(Ae,()=>A.value);let je=g(`div`,q);p(q,je),je.setAttribute(`class`,`grid gap-3 md:grid-cols-2`),r(()=>A.value===`healthy`?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=v();n(t,j,()=>({title:`服务健康`,meta:`命中 <Template v-if> 分支`,tone:`primary`})),n(t,j,()=>({title:`延迟稳定`,meta:`P95 维持在 120ms`,tone:`base`}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>r(()=>A.value===`warning`?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=v();n(t,j,()=>({title:`降级模式`,meta:`命中 <Template v-else-if> 分支`,tone:`accent`})),n(t,j,()=>({title:`队列上涨`,meta:`等待中的任务数正在攀升`,tone:`base`}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})}:{__rue_compiled_branch_key:!1,create:()=>l(e=>{let t=v();n(t,j,()=>({title:`故障切流`,meta:`命中 <Template v-else> 分支`,tone:`primary`})),n(t,j,()=>({title:`人工接管`,meta:`值班同学已经介入处置`,tone:`accent`}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})})}).__rue_compiled_mount(je);let Z=g(`div`,E);p(E,Z),Z.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`);let Me=g(`section`,Z);p(Z,Me),Me.setAttribute(`class`,`space-y-4 rounded-box border border-secondary/30 bg-secondary/10 p-4`);let Ne=g(`div`,Me);p(Me,Ne);let Pe=g(`h3`,Ne);p(Ne,Pe),Pe.setAttribute(`class`,`font-semibold`),p(Pe,m(`显式 `)),p(Pe,m(`<Template slot="header">`)),p(Pe,m(` 命名片段`));let Fe=g(`p`,Ne);p(Ne,Fe),Fe.setAttribute(`class`,`text-sm opacity-70`),p(Fe,m(`header 和 actions 都通过 Template slot 注入，actions slot 里放了两个兄弟节点。`)),n(Me,se,()=>({__rue_slots:{header:(e,t,n)=>{let r=()=>l(e=>{let t=v(),n=g(`div`,t);p(t,n);let r=g(`div`,n);p(n,r),r.setAttribute(`class`,`badge badge-secondary badge-outline`),p(r,m(`named slot`));let a=g(`h4`,n);p(n,a),a.setAttribute(`class`,`mt-2 text-lg font-semibold`);let o=m(``);p(a,o),i(o,()=>O.value===`ops`?`运维场景面板`:`增长场景面板`);let s=g(`p`,n);p(n,s),s.setAttribute(`class`,`text-sm opacity-70`),p(s,m(`这个 header 本身来自 template 命名插槽，不会生成额外包装节点。`));let c=m(``),l=m(``);return t.insertBefore(c,t.firstChild),t.appendChild(l),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)},actions:(e,t,n)=>{let r=()=>l(e=>{let t=v(),n=g(`div`,t);p(t,n),n.setAttribute(`class`,`join`);let r=g(`button`,n);p(n,r);let a;_(()=>{let e=`btn btn-sm join-item ${O.value===`ops`?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(a,t)||(a=t,r.setAttribute(`class`,t))}),b(S(e,r,`click`,()=>()=>{O.value=`ops`})),p(r,m(`运维`));let o=g(`button`,n);p(n,o);let s;_(()=>{let e=`btn btn-sm join-item ${O.value===`growth`?`btn-primary`:``}`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,o.setAttribute(`class`,t))}),b(S(e,o,`click`,()=>()=>{O.value=`growth`})),p(o,m(`增长`));let c=g(`button`,t);p(t,c);let l;_(()=>{let e=`btn btn-sm ${C.value?`btn-secondary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,c.setAttribute(`class`,t))}),b(S(e,c,`click`,()=>()=>{C.value=!C.value}));let u=m(``);p(c,u),i(u,()=>C.value?`隐藏摘要`:`显示摘要`);let d=m(``),f=m(``);return t.insertBefore(d,t.firstChild),t.appendChild(f),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}},children:(e,t,i)=>{let a=()=>l(e=>{let t=v(),i=g(`div`,t);p(t,i),i.setAttribute(`class`,`grid gap-3 md:grid-cols-2`),n(i,j,()=>({title:P.head.title,meta:P.head.meta,tone:`base`})),r(()=>{let e=C.value;return e?{__rue_compiled_branch_key:!0,create:()=>l(e=>{let t=v();n(t,j,()=>({title:`命名插槽内摘要 A`,meta:`header / actions 都来自 slot prop`,tone:`primary`})),n(t,j,()=>({title:`命名插槽内摘要 B`,meta:`body 仍然是默认 slot 内容`,tone:`accent`}));let r=m(``),i=m(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>w(t=>{let n=m(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=v();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(i),n(i,j,()=>({title:P.tail.title,meta:P.tail.meta,tone:`base`}));let a=m(``),o=m(``);return t.insertBefore(a,t.firstChild),t.appendChild(o),[t.firstChild,t.lastChild]});return e==null?a():c(e,i,a)}}));let Q=g(`section`,Z);p(Z,Q),Q.setAttribute(`class`,`space-y-4 rounded-box border border-primary/30 bg-primary/10 p-4`);let Ie=g(`div`,Q);p(Q,Ie);let $=g(`h3`,Ie);p(Ie,$),$.setAttribute(`class`,`font-semibold`),p($,m(`显式 `)),p($,m(`<Template>`)),p($,m(` 列表片段`));let Le=g(`p`,Ie);p(Ie,Le),Le.setAttribute(`class`,`text-sm opacity-70`),p(Le,m(`每条数据都会展开成两条兄弟节点，来源是手工导入的 Template 列表项。`));let Re=g(`ul`,Q);p(Q,Re),Re.setAttribute(`class`,`list rounded-box bg-base-100 shadow-sm`);let ze=y(`rue:list:end`);p(Re,ze);let Be=[];return re(()=>{Be=te(Re,ze,Be,ce||[],(e,t)=>e.id,(t,n)=>{let r=ie(t);return ne((t,n,i)=>{let a=()=>l(t=>{let n=v(),i=g(`li`,n);p(n,i),i.setAttribute(`class`,`list-row items-start gap-3`);let a=g(`div`,i);p(i,a),a.setAttribute(`class`,`list-col-grow`);let o=g(`div`,a);p(a,o),o.setAttribute(`class`,`font-medium`);let s=y(`rue:compiled-slot`);p(o,s),e({parent:o,before:s},()=>T(r.get().title),()=>({}));let c=g(`div`,a);p(a,c),c.setAttribute(`class`,`text-sm opacity-70`);let l=y(`rue:compiled-slot`);p(c,l),e({parent:c,before:l},()=>T(r.get().meta),()=>({}));let u=g(`span`,i);p(i,u),u.setAttribute(`class`,`badge badge-outline whitespace-nowrap`);let d=y(`rue:compiled-slot`);p(u,d),e({parent:u,before:d},()=>T(r.get().status),()=>({}));let f=g(`li`,n);p(n,f),f.setAttribute(`class`,`px-4 pb-3 text-[11px] uppercase tracking-[0.22em] opacity-45`),p(f,m(`同一条数据额外展开的第二个兄弟节点`));let ee=m(``),h=m(``);return n.insertBefore(ee,n.firstChild),n.appendChild(h),[n.firstChild,n.lastChild]});return t==null?a():c(t,i,a)},(e,i)=>{t=e,n=i,r.set(e)},void 0)},!1,!1)}),b(()=>ee(Be)),[a,a]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>w(e=>{let n=m(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>w(e=>{let t=v();return[t.firstChild,t.lastChild]})}});let de=m(``),fe=m(``);return a.insertBefore(de,a.firstChild),a.appendChild(fe),[a.firstChild,a.lastChild]});return t==null?u():c(t,s,u)}})))};export{P as default};
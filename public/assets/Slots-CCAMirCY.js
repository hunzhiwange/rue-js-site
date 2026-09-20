import{B as e,Bt as t,E as n,F as r,Ht as i,P as a,Ut as o,V as s,Vt as c,W as l,Wt as u,f as d,fn as f,gn as p,h as m,hn as h,in as g,mn as _,mt as v,nt as y,p as b,pn as x,qt as S,sn as C,u as w,yn as T,zt as E}from"./rue-runtime-BWbIfNT8.js";import{t as D}from"./Code-C5ZhIIr9.js";import{r as O}from"./SidebarPlaygroundExample-DUmYtIFQ.js";var ee=T(`<div class="flex w-full items-center justify-between gap-3"><div><div class="font-medium">rue:direct-text</div><div class="text-xs opacity-60">来自 scoped slot props</div></div><span class="badge badge-primary">rue:direct-text</span></div>`),te=T(`<div class="flex w-full items-center justify-between gap-3"><div><div class="font-medium">rue:direct-text</div><div class="text-xs opacity-60">来自 scoped slot props</div></div><span><!--rue:text-hole:1--></span></div>`),k=T(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-3"><div class="space-y-1 border-b border-base-300 pb-3"><!--rue:opaque-hole:0--></div><div class="rounded-box bg-base-200 p-3 text-sm leading-6"><!--rue:opaque-hole:1--></div><div class="text-sm opacity-70"><!--rue:opaque-hole:2--></div></div></section>`),A=T(`<ul class="list rounded-box border border-base-300 bg-base-100"><!--rue:text-hole:0--></ul>`),j=T(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3"><div class="space-y-1"><!--rue:opaque-hole:0--></div><div class="flex items-center gap-2"><!--rue:opaque-hole:1--></div></div><div class="rounded-box bg-base-200 p-4"><!--rue:opaque-hole:2--></div><ul class="list rounded-box border border-base-300 bg-base-100"><!--rue:text-hole:3--></ul></div></section>`),ne=T(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">插槽 Slots（default / named / scoped）</h1>`),M=T(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=T(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),re={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},P=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],F=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],I=`import { Slot, type FC } from '@rue-js/rue';

const SimpleSlotBox: FC<{ title?: any; footer?: any }> = (props) => (
  <section className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body gap-3">
      <Slot source={props} name="title">
        <h3 className="font-semibold">默认标题</h3>
      </Slot>

      <div className="rounded-box bg-base-200 p-3">
        <Slot source={props}>
          <p>没有传 default slot，所以这里显示 fallback。</p>
        </Slot>
      </div>

      <Slot source={props} name="footer">
        默认底部
      </Slot>
    </div>
  </section>
);

<SimpleSlotBox>
  <p>这段内容就是 default slot。</p>
</SimpleSlotBox>

<SimpleSlotBox>
  <span slot="title">自定义标题</span>
  <p>中间这段还是 default slot。</p>
  <span slot="footer">自定义底部</span>
</SimpleSlotBox>

type SimpleScopeItem = {
  label: string;
  value: string;
};

const rows: SimpleScopeItem[] = [
  { label: 'CPU', value: '37%' },
  { label: '内存', value: '1.2GB' },
];

const SimpleScopeList: FC<{
  item?: (props: SimpleScopeItem) => any;
}> = (props) => (
  <ul>
    {rows.map((row) => (
      <li key={row.label}>
        <Slot source={props} name="item" props={row}>
          <span>{row.label}: {row.value}</span>
        </Slot>
      </li>
    ))}
  </ul>
);

<SimpleScopeList
  item={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}
/>;`,L=`import { Slot, Template, type FC } from '@rue-js/rue';

type MetricRow = {
  label: string;
  value: string;
  tone: 'success' | 'warning' | 'info';
};

const toneBadgeClass = {
  success: 'badge-success',
  warning: 'badge-warning',
  info: 'badge-info',
};

const slotRows: MetricRow[] = [
  { label: 'P95 延迟', value: '128ms', tone: 'success' },
  { label: '错误率', value: '0.18%', tone: 'info' },
  { label: '待处理告警', value: '3', tone: 'warning' },
];

const SlotPanel: FC<{
  title?: any;
  actions?: any;
  row?: (props: MetricRow) => any;
}> = (props) => (
  <section className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3">
        <div className="space-y-1">
          <Slot source={props} name="title">
            <h2 className="card-title">默认标题</h2>
            <p className="text-sm opacity-70">没有提供 title slot 时，显示 fallback。</p>
          </Slot>
        </div>

        <div className="flex items-center gap-2">
          <Slot source={props} name="actions">
            <span className="badge badge-outline">fallback action</span>
          </Slot>
        </div>
      </div>

      <div className="rounded-box bg-base-200 p-4">
        <Slot source={props}>
          <p>默认插槽为空时，这里显示主体内容 fallback。</p>
        </Slot>
      </div>

      <ul className="list rounded-box border border-base-300 bg-base-100">
        {slotRows.map((slotRow) => (
          <li key={slotRow.label} className="list-row items-center gap-3">
            <Slot source={props} name="row" props={slotRow}>
              <div className="flex w-full items-center justify-between gap-3">
                <div className="font-medium">{slotRow.label}</div>
                <span className={'badge ' + toneBadgeClass[slotRow.tone]}>{slotRow.value}</span>
              </div>
            </Slot>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const Demo: FC = () => (
  <SlotPanel
    row={(slotRow: MetricRow) => (
      <div className="flex w-full items-center justify-between gap-3">
        <div>
          <div className="font-medium">{slotRow.label}</div>
          <div className="text-xs opacity-60">来自 scoped slot props</div>
        </div>
        <span className={'badge ' + toneBadgeClass[slotRow.tone]}>{slotRow.value}</span>
      </div>
    )}
  >
    <Template slot="title">
      <h2 className="card-title">支付面板</h2>
      <p className="text-sm opacity-70">Template slot="title" 可以传多个兄弟节点。</p>
    </Template>

    <button slot="actions" className="btn btn-sm btn-primary">
      刷新
    </button>

    <div className="space-y-3">
      <p className="text-sm leading-6">default slot 负责主体内容。</p>
      <div className="stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none">
        <div className="stat py-3">
          <div className="stat-title">可用率</div>
          <div className="stat-value text-2xl">99.98%</div>
        </div>
        <div className="stat py-3">
          <div className="stat-title">峰值请求</div>
          <div className="stat-value text-2xl">18k</div>
        </div>
      </div>
    </div>
  </SlotPanel>
);

export default Demo;`,ie=(r,i,o)=>u(i=>{let o=k().content.cloneNode(!0).firstChild,l=o.childNodes[0].childNodes[0].childNodes[0],u=l.parentNode,d=o.childNodes[0].childNodes[1].childNodes[0],m=d.parentNode,g=o.childNodes[0].childNodes[2].childNodes[0],v=g.parentNode,y=(t,i,o)=>{let l=()=>a(n,()=>({source:e(r),name:`title`,children:(e,t,n)=>{let r=()=>s(e=>{let t=_(),n=h(`h3`,t);f(t,n),n.setAttribute(`class`,`font-semibold`),f(n,p(`默认标题`));let r=h(`p`,t);f(t,r),r.setAttribute(`class`,`text-sm opacity-70`),f(r,p(`没传 title slot，就显示这里。`));let i=p(``),a=p(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));return t==null?l():c(t,o,l)},b=l.nextSibling;u.removeChild(l),t({parent:u,before:b},()=>y,()=>({}));let x=(t,i,o)=>{let l=()=>a(n,()=>({source:e(r),children:(e,t,n)=>{let r=()=>s(e=>{let t=_(),n=h(`p`,t);f(t,n),n.setAttribute(`class`,`opacity-70`),f(n,p(`没有传 default slot，所以这里显示 fallback。`));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));return t==null?l():c(t,o,l)},S=d.nextSibling;m.removeChild(d),t({parent:m,before:S},()=>x,()=>({}));let C=(t,i,o)=>{let l=()=>a(n,()=>({source:e(r),name:`footer`,children:(e,t,n)=>{let r=()=>s(e=>{let t=_();f(t,p(`默认底部`));let n=p(``),r=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));return t==null?l():c(t,o,l)},w=g.nextSibling;return v.removeChild(g),t({parent:v,before:w},()=>C,()=>({})),[o,o]}),ae=(i,a,o)=>u(a=>{let o=A().content.cloneNode(!0).firstChild,s=o.childNodes[0],g=s.parentNode,v=[];return S(()=>{v=m(g,s,v,F||[],(e,t)=>e.label,(a,o)=>{let s=l(a);return b((a,o,l)=>{let d=()=>u(a=>{let o=h(`li`,a);return o.setAttribute(`class`,`list-row items-center gap-3`),r(o,n,()=>({source:e(i),name:`item`,props:s.get(),children:(e,n,r)=>{let i=()=>u(e=>{let n=_(),r=h(`div`,n);f(n,r),r.setAttribute(`class`,`flex w-full items-center justify-between gap-3`);let i=h(`span`,r);f(r,i),i.setAttribute(`class`,`font-medium`);let a=x(`rue:compiled-slot`);f(i,a),t({parent:i,before:a},()=>E(s.get().label),()=>({}));let o=h(`span`,r);f(r,o),o.setAttribute(`class`,`badge badge-outline`);let c=x(`rue:compiled-slot`);f(o,c),t({parent:o,before:c},()=>E(s.get().value),()=>({}));let l=p(``),u=p(``);return n.insertBefore(l,n.firstChild),n.appendChild(u),[n.firstChild,n.lastChild]});return e==null?i():c(e,r,i)}})),[o,o]});return a==null?d():c(a,l,d)},(e,t)=>{a=e,o=t,s.set(e)},void 0)},!1,!1)}),C(()=>d(v)),[o,o]}),oe=(i,o,v)=>u(o=>{let v=j().content.cloneNode(!0).firstChild,y=v.childNodes[0].childNodes[0].childNodes[0].childNodes[0],w=y.parentNode,T=v.childNodes[0].childNodes[0].childNodes[1].childNodes[0],D=T.parentNode,O=v.childNodes[0].childNodes[1].childNodes[0],ee=O.parentNode,te=v.childNodes[0].childNodes[2].childNodes[0],k=te.parentNode,A=(t,r,o)=>{let l=()=>a(n,()=>({source:e(i),name:`title`,children:(e,t,n)=>{let r=()=>s(e=>{let t=_(),n=h(`h2`,t);f(t,n),n.setAttribute(`class`,`card-title`),f(n,p(`默认标题`));let r=h(`p`,t);f(t,r),r.setAttribute(`class`,`text-sm opacity-70`),f(r,p(`没有提供 title slot 时，会显示这段 fallback。`));let i=p(``),a=p(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));return t==null?l():c(t,o,l)},ne=y.nextSibling;w.removeChild(y),t({parent:w,before:ne},()=>A,()=>({}));let M=(t,r,o)=>{let l=()=>a(n,()=>({source:e(i),name:`actions`,children:(e,t,n)=>{let r=()=>s(e=>{let t=_(),n=h(`span`,t);f(t,n),n.setAttribute(`class`,`badge badge-outline`),f(n,p(`fallback action`));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));return t==null?l():c(t,o,l)},N=T.nextSibling;D.removeChild(T),t({parent:D,before:N},()=>M,()=>({}));let F=(t,r,o)=>{let l=()=>a(n,()=>({source:e(i),children:(e,t,n)=>{let r=()=>s(e=>{let t=_(),n=h(`p`,t);f(t,n),n.setAttribute(`class`,`opacity-70`),f(n,p(`默认插槽为空时，这里显示主体内容的 fallback。`));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));return t==null?l():c(t,o,l)},I=O.nextSibling;ee.removeChild(O),t({parent:ee,before:I},()=>F,()=>({}));let L=[];return S(()=>{L=m(k,te,L,P||[],(e,t)=>e.label,(a,o)=>{let s=l(a);return b((a,o,l)=>{let d=()=>u(a=>{let o=h(`li`,a);return o.setAttribute(`class`,`list-row items-center gap-3`),r(o,n,()=>({source:e(i),name:`row`,props:s.get(),children:(e,n,r)=>{let i=()=>u(e=>{let n=_(),r=h(`div`,n);f(n,r),r.setAttribute(`class`,`flex w-full items-center justify-between gap-3`);let i=h(`div`,r);f(r,i),i.setAttribute(`class`,`font-medium`);let a=x(`rue:compiled-slot`);f(i,a),t({parent:i,before:a},()=>E(s.get().label),()=>({}));let o=h(`span`,r);f(r,o);let c;g(()=>{let e=`badge ${re[s.get().tone]}`,t=e===!1||e==null?``:String(e);Object.is(c,t)||(c=t,o.setAttribute(`class`,t))});let l=x(`rue:compiled-slot`);f(o,l),t({parent:o,before:l},()=>E(s.get().value),()=>({}));let u=p(``),d=p(``);return n.insertBefore(u,n.firstChild),n.appendChild(d),[n.firstChild,n.lastChild]});return e==null?i():c(e,r,i)}})),[o,o]});return a==null?d():c(a,l,d)},(e,t)=>{a=e,o=t,s.set(e)},void 0)},!1,!1)}),C(()=>d(L)),[v,v]}),R=(e,n,l)=>{let d=v(`preview`),m=v(!0),b=v(!0),S=v(!0),T=v(!0);return y(()=>a(O,()=>({children:(e,n,a)=>{let l=()=>u(e=>{let n=_();n.appendChild(ne().content.cloneNode(!0));let a=M().content.cloneNode(!0),l=a.firstChild,v=l.childNodes[0],y=l.childNodes[1];n.appendChild(a),v.setAttribute(`role`,`tab`);let O;g(()=>{let e=`tab ${d.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,v.setAttribute(`class`,t))}),C(w(e,v,`click`,()=>()=>{d.value=`preview`})),y.setAttribute(`role`,`tab`);let k;g(()=>{let e=`tab ${d.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,y.setAttribute(`class`,t))}),C(w(e,y,`click`,()=>()=>{d.value=`code`}));let A=N().content.cloneNode(!0),j=A.firstChild,P=j.childNodes[0],F=P.parentNode,R=j.childNodes[1],se=R.parentNode;n.appendChild(A),o(F,P,()=>{let e=d.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let t=h(`div`,e);t.setAttribute(`class`,`grid gap-6`);let n=h(`div`,t);f(t,n),n.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let i=h(`div`,n);f(n,i),i.setAttribute(`class`,`card-body p-0`);let a=h(`div`,i);f(i,a),a.setAttribute(`class`,`border-b border-base-300 px-4 py-3`);let o=h(`h2`,a);f(a,o),o.setAttribute(`class`,`card-title text-lg`),f(o,p(`先看最小例子`));let s=h(`p`,a);f(a,s),s.setAttribute(`class`,`text-sm opacity-70`),f(s,p(`先只看 default、named、scoped 各自最短怎么写。`)),r(i,D,()=>({className:`h-[420px]`,lang:`tsx`,code:I}));let c=h(`div`,t);f(t,c),c.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let l=h(`div`,c);f(c,l),l.setAttribute(`class`,`card-body p-0`);let u=h(`div`,l);f(l,u),u.setAttribute(`class`,`border-b border-base-300 px-4 py-3`);let d=h(`h2`,u);f(u,d),d.setAttribute(`class`,`card-title text-lg`),f(d,p(`再看完整例子`));let m=h(`p`,u);return f(u,m),m.setAttribute(`class`,`text-sm opacity-70`),f(m,p(`这个版本把多个 slot 组合在一个卡片组件里。`)),r(l,D,()=>({className:`h-[760px]`,lang:`tsx`,code:L})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=_();return[t.firstChild,t.lastChild]})}}),o(se,R,()=>{let e=d.value===`preview`;return e?{__rue_compiled_branch_key:!0,create:()=>u(e=>{let n=h(`div`,e);n.setAttribute(`class`,`grid gap-6`);let a=h(`div`,n);f(n,a),a.setAttribute(`role`,`alert`),a.setAttribute(`class`,`alert alert-success`);let o=h(`span`,a);f(a,o),f(o,p(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let l=h(`div`,n);f(n,l),l.setAttribute(`class`,`card bg-base-100 shadow`);let d=h(`div`,l);f(l,d),d.setAttribute(`class`,`card-body gap-5`);let v=h(`div`,d);f(d,v);let y=h(`h2`,v);f(v,y),y.setAttribute(`class`,`card-title`),f(y,p(`先看最小例子`));let D=h(`p`,v);f(v,D),D.setAttribute(`class`,`text-sm opacity-70`),f(D,p(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let O=h(`div`,d);f(d,O),O.setAttribute(`class`,`grid gap-4 xl:grid-cols-3`);let k=h(`div`,O);f(O,k),k.setAttribute(`class`,`space-y-3`);let A=h(`div`,k);f(k,A);let j=h(`h3`,A);f(A,j),j.setAttribute(`class`,`text-lg font-semibold`),f(j,p(`1. default slot`));let ne=h(`p`,A);f(A,ne),ne.setAttribute(`class`,`text-sm opacity-70`),f(ne,p(`直接写在组件标签内部的内容，会落到默认插槽。`)),r(k,ie,()=>({children:(e,t,n)=>{let r=()=>s(e=>{let t=_(),n=h(`p`,t);f(t,n),f(n,p(`这段内容就是 default slot。`));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));let M=h(`div`,O);f(O,M),M.setAttribute(`class`,`space-y-3`);let N=h(`div`,M);f(M,N);let P=h(`h3`,N);f(N,P),P.setAttribute(`class`,`text-lg font-semibold`),f(P,p(`2. named slot`));let F=h(`p`,N);f(N,F),F.setAttribute(`class`,`text-sm opacity-70`),f(F,p(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`)),r(M,ie,()=>({__rue_slots:{title:(e,t,n)=>{let r=()=>s(e=>{let t=h(`span`,e);return t.setAttribute(`class`,`font-semibold text-base-content`),f(t,p(`自定义标题`)),[t,t]});return e==null?r():c(e,n,r)},footer:(e,t,n)=>{let r=()=>s(e=>{let t=h(`span`,e);return f(t,p(`自定义底部`)),[t,t]});return e==null?r():c(e,n,r)}},children:(e,t,n)=>{let r=()=>s(e=>{let t=_(),n=h(`p`,t);f(t,n),f(n,p(`中间这段还是 default slot。`));let r=p(``),i=p(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));let I=h(`div`,O);f(O,I),I.setAttribute(`class`,`space-y-3`);let L=h(`div`,I);f(I,L);let R=h(`h3`,L);f(L,R),R.setAttribute(`class`,`text-lg font-semibold`),f(R,p(`3. scoped slot`));let se=h(`p`,L);f(L,se),se.setAttribute(`class`,`text-sm opacity-70`),f(se,p(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`)),r(I,ae,()=>({item:e=>u(n=>{let r=ee().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0],s=o.parentNode,c=x(`rue:text-hole:0`);a.replaceChild(c,i);let l=x(`rue:text-hole:1`);return s.replaceChild(l,o),t({parent:a,before:c},()=>E(e.label),()=>({})),t({parent:s,before:l},()=>E(e.value),()=>({})),[r,r]})}));let z=h(`div`,d);f(d,z),z.setAttribute(`role`,`alert`),z.setAttribute(`class`,`alert alert-soft`);let ce=h(`span`,z);f(z,ce),f(ce,p(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let le=h(`div`,n);f(n,le),le.setAttribute(`class`,`card bg-base-100 shadow`);let B=h(`div`,le);f(le,B),B.setAttribute(`class`,`card-body gap-5`);let V=h(`div`,B);f(B,V),V.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let ue=h(`div`,V);f(V,ue);let de=h(`h2`,ue);f(ue,de),de.setAttribute(`class`,`card-title`),f(de,p(`再看完整例子`));let fe=h(`p`,ue);f(ue,fe),fe.setAttribute(`class`,`text-sm opacity-70`),f(fe,p(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let H=h(`div`,V);f(V,H),H.setAttribute(`class`,`flex flex-wrap gap-2`);let pe=h(`button`,H);f(H,pe);let me;g(()=>{let e=`btn btn-sm ${m.value?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(me,t)||(me=t,pe.setAttribute(`class`,t))}),C(w(e,pe,`click`,()=>()=>{m.value=!m.value})),f(pe,p(`title slot`));let he=h(`button`,H);f(H,he);let ge;g(()=>{let e=`btn btn-sm ${b.value?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(ge,t)||(ge=t,he.setAttribute(`class`,t))}),C(w(e,he,`click`,()=>()=>{b.value=!b.value})),f(he,p(`actions slot`));let _e=h(`button`,H);f(H,_e);let ve;g(()=>{let e=`btn btn-sm ${S.value?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(ve,t)||(ve=t,_e.setAttribute(`class`,t))}),C(w(e,_e,`click`,()=>()=>{S.value=!S.value})),f(_e,p(`default slot`));let ye=h(`button`,H);f(H,ye);let be;g(()=>{let e=`btn btn-sm ${T.value?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(be,t)||(be=t,ye.setAttribute(`class`,t))}),C(w(e,ye,`click`,()=>()=>{T.value=!T.value})),f(ye,p(`scoped row`));let U=h(`div`,B);f(B,U),U.setAttribute(`class`,`grid gap-5 xl:grid-cols-2`);let xe=h(`div`,U);f(U,xe),xe.setAttribute(`class`,`space-y-3`);let W=h(`div`,xe);f(xe,W),W.setAttribute(`class`,`flex items-center justify-between gap-3`);let Se=h(`h3`,W);f(W,Se),Se.setAttribute(`class`,`text-lg font-semibold`),f(Se,p(`传入 slot 之后`));let Ce=h(`span`,W);f(W,Ce),Ce.setAttribute(`class`,`badge badge-success badge-outline`),f(Ce,p(`自定义内容生效`)),r(xe,oe,()=>({row:T.value?e=>u(n=>{let r=te().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=r.childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=r.childNodes[1].childNodes[0],c=s.parentNode,l=x(`rue:text-hole:0`);o.replaceChild(l,a);let u;return g(()=>{let t=`badge ${re[e.tone]}`,n=t===!1||t==null?``:String(t);Object.is(u,n)||(u=n,i.setAttribute(`class`,n))}),t({parent:o,before:l},()=>E(e.label),()=>({})),t({parent:c,before:s},()=>E(e.value),()=>({})),[r,r]}):void 0,children:(e,t,n)=>{let r=()=>u(e=>{let t=_();i(()=>{let e=m.value;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=_(),n=h(`h2`,t);f(t,n),n.setAttribute(`class`,`card-title`),f(n,p(`支付面板`));let r=h(`p`,t);f(t,r),r.setAttribute(`class`,`text-sm opacity-70`),f(r,p(`Template slot="title" 可以一次传多个兄弟节点。`));let i=p(``),a=p(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=_();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(t),i(()=>{let e=b.value;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=h(`button`,e);return t.setAttribute(`slot`,`actions`),t.setAttribute(`class`,`btn btn-sm btn-primary`),f(t,p(`刷新`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=_();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(t),i(()=>{let e=S.value;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=h(`div`,e);t.setAttribute(`class`,`space-y-3`);let n=h(`p`,t);f(t,n),n.setAttribute(`class`,`text-sm leading-6`),f(n,p(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let r=h(`div`,t);f(t,r),r.setAttribute(`class`,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let i=h(`div`,r);f(r,i),i.setAttribute(`class`,`stat py-3`);let a=h(`div`,i);f(i,a),a.setAttribute(`class`,`stat-title`),f(a,p(`可用率`));let o=h(`div`,i);f(i,o),o.setAttribute(`class`,`stat-value text-2xl`),f(o,p(`99.98%`));let s=h(`div`,i);f(i,s),s.setAttribute(`class`,`stat-desc`),f(s,p(`过去 24 小时`));let c=h(`div`,r);f(r,c),c.setAttribute(`class`,`stat py-3`);let l=h(`div`,c);f(c,l),l.setAttribute(`class`,`stat-title`),f(l,p(`峰值请求`));let u=h(`div`,c);f(c,u),u.setAttribute(`class`,`stat-value text-2xl`),f(u,p(`18k`));let d=h(`div`,c);return f(c,d),d.setAttribute(`class`,`stat-desc`),f(d,p(`每分钟`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=_();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(t);let n=p(``),r=p(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():c(e,n,r)}}));let we=h(`div`,U);f(U,we),we.setAttribute(`class`,`space-y-3`);let G=h(`div`,we);f(we,G),G.setAttribute(`class`,`flex items-center justify-between gap-3`);let Te=h(`h3`,G);f(G,Te),Te.setAttribute(`class`,`text-lg font-semibold`),f(Te,p(`未传 slot 时`));let Ee=h(`span`,G);f(G,Ee),Ee.setAttribute(`class`,`badge badge-warning badge-outline`),f(Ee,p(`fallback 接管`)),r(we,oe,()=>({}));let K=h(`div`,n);f(n,K),K.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`);let De=h(`div`,K);f(K,De),De.setAttribute(`class`,`card bg-base-100 shadow`);let q=h(`div`,De);f(De,q),q.setAttribute(`class`,`card-body gap-3`);let Oe=h(`h2`,q);f(q,Oe),Oe.setAttribute(`class`,`card-title`),f(Oe,p(`当前推荐写法`));let J=h(`ul`,q);f(q,J),J.setAttribute(`class`,`list rounded-box border border-base-300 bg-base-100`);let Y=h(`li`,J);f(J,Y),Y.setAttribute(`class`,`list-row`);let ke=h(`div`,Y);f(Y,ke),ke.setAttribute(`class`,`font-medium`),f(ke,p(`default slot`));let Ae=h(`div`,Y);f(Y,Ae),Ae.setAttribute(`class`,`opacity-70`),f(Ae,p(`直接写在组件标签内部，最终会落到 props.children。`));let X=h(`li`,J);f(J,X),X.setAttribute(`class`,`list-row`);let je=h(`div`,X);f(X,je),je.setAttribute(`class`,`font-medium`),f(je,p(`named slot`));let Me=h(`div`,X);f(X,Me),Me.setAttribute(`class`,`opacity-70`),f(Me,p(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let Z=h(`li`,J);f(J,Z),Z.setAttribute(`class`,`list-row`);let Ne=h(`div`,Z);f(Z,Ne),Ne.setAttribute(`class`,`font-medium`),f(Ne,p(`scoped slot`));let Pe=h(`div`,Z);f(Z,Pe),Pe.setAttribute(`class`,`opacity-70`),f(Pe,p(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Fe=h(`li`,J);f(J,Fe),Fe.setAttribute(`class`,`list-row`);let Ie=h(`div`,Fe);f(Fe,Ie),Ie.setAttribute(`class`,`font-medium`),f(Ie,p(`fallback`));let Le=h(`div`,Fe);f(Fe,Le),Le.setAttribute(`class`,`opacity-70`),f(Le,p(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Re=h(`div`,K);f(K,Re),Re.setAttribute(`class`,`card bg-base-100 shadow`);let Q=h(`div`,Re);f(Re,Q),Q.setAttribute(`class`,`card-body gap-3`);let ze=h(`h2`,Q);f(Q,ze),ze.setAttribute(`class`,`card-title`),f(ze,p(`这页实际演示的协议`));let Be=h(`div`,Q);f(Q,Be),Be.setAttribute(`role`,`alert`),Be.setAttribute(`class`,`alert alert-soft`);let Ve=h(`span`,Be);f(Be,Ve),f(Ve,p(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=h(`div`,Q);f(Q,$),$.setAttribute(`class`,`mockup-code text-sm`);let He=h(`pre`,$);f($,He),He.setAttribute(`data-prefix`,`1`);let Ue=h(`code`,He);f(He,Ue),f(Ue,p(`<Slot source={props} name="title">fallback</Slot>`));let We=h(`pre`,$);f($,We),We.setAttribute(`data-prefix`,`2`);let Ge=h(`code`,We);f(We,Ge),f(Ge,p(`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`));let Ke=h(`pre`,$);f($,Ke),Ke.setAttribute(`data-prefix`,`3`);let qe=h(`code`,Ke);f(Ke,qe),f(qe,p(`<button slot="actions">刷新</button>`));let Je=h(`pre`,$);f($,Je),Je.setAttribute(`data-prefix`,`4`);let Ye=h(`code`,Je);f(Je,Ye),f(Ye,p(`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`));let Xe=h(`p`,Q);return f(Q,Xe),Xe.setAttribute(`class`,`text-sm opacity-70 leading-6`),f(Xe,p(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),[n,n]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>s(t=>{let n=p(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>s(e=>{let t=_();return[t.firstChild,t.lastChild]})}});let z=p(``),ce=p(``);return n.insertBefore(z,n.firstChild),n.appendChild(ce),[n.firstChild,n.lastChild]});return e==null?l():c(e,a,l)}})))};export{R as default};
import{Bt as e,E as t,H as n,Ht as r,Ut as i,V as a,Vt as o,Wt as s,Y as c,_t as l,f as u,fn as d,gn as f,h as p,hn as m,in as h,mn as g,p as _,pn as v,qt as y,sn as b,st as x,u as S,vt as C,yn as w,yt as T,zt as E}from"./rue-runtime-Cv6BZekS.js";import{t as D}from"./Code-BzFVdc3U.js";import{r as O}from"./SidebarPlaygroundExample-rFyhXfC_.js";var ee=w(`<div class="flex w-full items-center justify-between gap-3"><div><div class="font-medium">rue:direct-text</div><div class="text-xs opacity-60">来自 scoped slot props</div></div><span class="badge badge-primary">rue:direct-text</span></div>`),te=w(`<div class="flex w-full items-center justify-between gap-3"><div><div class="font-medium">rue:direct-text</div><div class="text-xs opacity-60">来自 scoped slot props</div></div><span><!--rue:text-hole:1--></span></div>`),k=w(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-3"><div class="space-y-1 border-b border-base-300 pb-3"><!--rue:opaque-hole:0--></div><div class="rounded-box bg-base-200 p-3 text-sm leading-6"><!--rue:opaque-hole:1--></div><div class="text-sm opacity-70"><!--rue:opaque-hole:2--></div></div></section>`),A=w(`<ul class="list rounded-box border border-base-300 bg-base-100"><!--rue:text-hole:0--></ul>`),j=w(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3"><div class="space-y-1"><!--rue:opaque-hole:0--></div><div class="flex items-center gap-2"><!--rue:opaque-hole:1--></div></div><div class="rounded-box bg-base-200 p-4"><!--rue:opaque-hole:2--></div><ul class="list rounded-box border border-base-300 bg-base-100"><!--rue:text-hole:3--></ul></div></section>`),ne=w(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">插槽 Slots（default / named / scoped）</h1>`),M=w(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),N=w(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),re={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},P=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],F=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],I=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,ie=(n,r,i)=>s(r=>{let i=k().content.cloneNode(!0).firstChild,s=i.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode,u=i.childNodes[0].childNodes[1].childNodes[0],p=u.parentNode,h=i.childNodes[0].childNodes[2].childNodes[0],_=h.parentNode,v=(e,r,i)=>{let s=()=>a(t,()=>({source:l(n),name:`title`,children:(e,t,n)=>{let r=()=>T(e=>{let t=g(),n=m(`h3`,t);d(t,n),n.setAttribute(`class`,`font-semibold`),d(n,f(`默认标题`));let r=m(`p`,t);d(t,r),r.setAttribute(`class`,`text-sm opacity-70`),d(r,f(`没传 title slot，就显示这里。`));let i=f(``),a=f(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?s():o(e,i,s)},y=s.nextSibling;c.removeChild(s),e({parent:c,before:y},()=>v,()=>({}));let b=(e,r,i)=>{let s=()=>a(t,()=>({source:l(n),children:(e,t,n)=>{let r=()=>T(e=>{let t=g(),n=m(`p`,t);d(t,n),n.setAttribute(`class`,`opacity-70`),d(n,f(`没有传 default slot，所以这里显示 fallback。`));let r=f(``),i=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?s():o(e,i,s)},x=u.nextSibling;p.removeChild(u),e({parent:p,before:x},()=>b,()=>({}));let S=(e,r,i)=>{let s=()=>a(t,()=>({source:l(n),name:`footer`,children:(e,t,n)=>{let r=()=>T(e=>{let t=g();d(t,f(`默认底部`));let n=f(``),r=f(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?s():o(e,i,s)},C=h.nextSibling;return _.removeChild(h),e({parent:_,before:C},()=>S,()=>({})),[i,i]}),ae=(r,i,a)=>s(i=>{let a=A().content.cloneNode(!0).firstChild,c=a.childNodes[0],h=c.parentNode,x=[];return y(()=>{x=p(h,c,x,F||[],(e,t)=>e.label,(i,a)=>{let c=C(i);return _((i,a,u)=>{let p=()=>s(i=>{let a=m(`li`,i);return a.setAttribute(`class`,`list-row items-center gap-3`),n(a,t,()=>({source:l(r),name:`item`,props:c.get(),children:(t,n,r)=>{let i=()=>s(t=>{let n=g(),r=m(`div`,n);d(n,r),r.setAttribute(`class`,`flex w-full items-center justify-between gap-3`);let i=m(`span`,r);d(r,i),i.setAttribute(`class`,`font-medium`);let a=v(`rue:compiled-slot`);d(i,a),e({parent:i,before:a},()=>E(c.get().label),()=>({}));let o=m(`span`,r);d(r,o),o.setAttribute(`class`,`badge badge-outline`);let s=v(`rue:compiled-slot`);d(o,s),e({parent:o,before:s},()=>E(c.get().value),()=>({}));let l=f(``),u=f(``);return n.insertBefore(l,n.firstChild),n.appendChild(u),[n.firstChild,n.lastChild]});return t==null?i():o(t,r,i)}})),[a,a]});return i==null?p():o(i,u,p)},(e,t)=>{i=e,a=t,c.set(e)},void 0)},!1,!1)}),b(()=>u(x)),[a,a]}),oe=(r,i,c)=>s(i=>{let c=j().content.cloneNode(!0).firstChild,x=c.childNodes[0].childNodes[0].childNodes[0].childNodes[0],S=x.parentNode,w=c.childNodes[0].childNodes[0].childNodes[1].childNodes[0],D=w.parentNode,O=c.childNodes[0].childNodes[1].childNodes[0],ee=O.parentNode,te=c.childNodes[0].childNodes[2].childNodes[0],k=te.parentNode,A=(e,n,i)=>{let s=()=>a(t,()=>({source:l(r),name:`title`,children:(e,t,n)=>{let r=()=>T(e=>{let t=g(),n=m(`h2`,t);d(t,n),n.setAttribute(`class`,`card-title`),d(n,f(`默认标题`));let r=m(`p`,t);d(t,r),r.setAttribute(`class`,`text-sm opacity-70`),d(r,f(`没有提供 title slot 时，会显示这段 fallback。`));let i=f(``),a=f(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?s():o(e,i,s)},ne=x.nextSibling;S.removeChild(x),e({parent:S,before:ne},()=>A,()=>({}));let M=(e,n,i)=>{let s=()=>a(t,()=>({source:l(r),name:`actions`,children:(e,t,n)=>{let r=()=>T(e=>{let t=g(),n=m(`span`,t);d(t,n),n.setAttribute(`class`,`badge badge-outline`),d(n,f(`fallback action`));let r=f(``),i=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?s():o(e,i,s)},N=w.nextSibling;D.removeChild(w),e({parent:D,before:N},()=>M,()=>({}));let F=(e,n,i)=>{let s=()=>a(t,()=>({source:l(r),children:(e,t,n)=>{let r=()=>T(e=>{let t=g(),n=m(`p`,t);d(t,n),n.setAttribute(`class`,`opacity-70`),d(n,f(`默认插槽为空时，这里显示主体内容的 fallback。`));let r=f(``),i=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));return e==null?s():o(e,i,s)},I=O.nextSibling;ee.removeChild(O),e({parent:ee,before:I},()=>F,()=>({}));let L=[];return y(()=>{L=p(k,te,L,P||[],(e,t)=>e.label,(i,a)=>{let c=C(i);return _((i,a,u)=>{let p=()=>s(i=>{let a=m(`li`,i);return a.setAttribute(`class`,`list-row items-center gap-3`),n(a,t,()=>({source:l(r),name:`row`,props:c.get(),children:(t,n,r)=>{let i=()=>s(t=>{let n=g(),r=m(`div`,n);d(n,r),r.setAttribute(`class`,`flex w-full items-center justify-between gap-3`);let i=m(`div`,r);d(r,i),i.setAttribute(`class`,`font-medium`);let a=v(`rue:compiled-slot`);d(i,a),e({parent:i,before:a},()=>E(c.get().label),()=>({}));let o=m(`span`,r);d(r,o);let s;h(()=>{let e=`badge ${re[c.get().tone]}`,t=e===!1||e==null?``:String(e);Object.is(s,t)||(s=t,o.setAttribute(`class`,t))});let l=v(`rue:compiled-slot`);d(o,l),e({parent:o,before:l},()=>E(c.get().value),()=>({}));let u=f(``),p=f(``);return n.insertBefore(u,n.firstChild),n.appendChild(p),[n.firstChild,n.lastChild]});return t==null?i():o(t,r,i)}})),[a,a]});return i==null?p():o(i,u,p)},(e,t)=>{i=e,a=t,c.set(e)},void 0)},!1,!1)}),b(()=>u(L)),[c,c]}),R=(t,l,u)=>{let p=x(`preview`),_=x(!0),y=x(!0),C=x(!0),w=x(!0);return c(()=>a(O,()=>({children:(t,a,c)=>{let l=()=>s(t=>{let a=g();a.appendChild(ne().content.cloneNode(!0));let c=M().content.cloneNode(!0),l=c.firstChild,u=l.childNodes[0],x=l.childNodes[1];a.appendChild(c),u.setAttribute(`role`,`tab`);let O;h(()=>{let e=`tab ${p.value===`preview`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(O,t)||(O=t,u.setAttribute(`class`,t))}),b(S(t,u,`click`,()=>()=>{p.value=`preview`})),x.setAttribute(`role`,`tab`);let k;h(()=>{let e=`tab ${p.value===`code`?`tab-active`:``}`,t=e===!1||e==null?``:String(e);Object.is(k,t)||(k=t,x.setAttribute(`class`,t))}),b(S(t,x,`click`,()=>()=>{p.value=`code`}));let A=N().content.cloneNode(!0),j=A.firstChild,P=j.childNodes[0],F=P.parentNode,R=j.childNodes[1],se=R.parentNode;a.appendChild(A),i(F,P,()=>{let e=p.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>s(e=>{let t=m(`div`,e);t.setAttribute(`class`,`grid gap-6`);let r=m(`div`,t);d(t,r),r.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let i=m(`div`,r);d(r,i),i.setAttribute(`class`,`card-body p-0`);let a=m(`div`,i);d(i,a),a.setAttribute(`class`,`border-b border-base-300 px-4 py-3`);let o=m(`h2`,a);d(a,o),o.setAttribute(`class`,`card-title text-lg`),d(o,f(`先看最小例子`));let s=m(`p`,a);d(a,s),s.setAttribute(`class`,`text-sm opacity-70`),d(s,f(`先只看 default、named、scoped 各自最短怎么写。`)),n(i,D,()=>({className:`h-[420px]`,lang:`tsx`,code:I}));let c=m(`div`,t);d(t,c),c.setAttribute(`class`,`card bg-base-100 shadow overflow-auto`);let l=m(`div`,c);d(c,l),l.setAttribute(`class`,`card-body p-0`);let u=m(`div`,l);d(l,u),u.setAttribute(`class`,`border-b border-base-300 px-4 py-3`);let p=m(`h2`,u);d(u,p),p.setAttribute(`class`,`card-title text-lg`),d(p,f(`再看完整例子`));let h=m(`p`,u);return d(u,h),h.setAttribute(`class`,`text-sm opacity-70`),d(h,f(`这个版本把多个 slot 组合在一个卡片组件里。`)),n(l,D,()=>({className:`h-[760px]`,lang:`tsx`,code:L})),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>T(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=g();return[t.firstChild,t.lastChild]})}}),i(se,R,()=>{let t=p.value===`preview`;return t?{__rue_compiled_branch_key:!0,create:()=>s(t=>{let i=m(`div`,t);i.setAttribute(`class`,`grid gap-6`);let a=m(`div`,i);d(i,a),a.setAttribute(`role`,`alert`),a.setAttribute(`class`,`alert alert-success`);let c=m(`span`,a);d(a,c),d(c,f(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let l=m(`div`,i);d(i,l),l.setAttribute(`class`,`card bg-base-100 shadow`);let u=m(`div`,l);d(l,u),u.setAttribute(`class`,`card-body gap-5`);let p=m(`div`,u);d(u,p);let x=m(`h2`,p);d(p,x),x.setAttribute(`class`,`card-title`),d(x,f(`先看最小例子`));let D=m(`p`,p);d(p,D),D.setAttribute(`class`,`text-sm opacity-70`),d(D,f(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let O=m(`div`,u);d(u,O),O.setAttribute(`class`,`grid gap-4 xl:grid-cols-3`);let k=m(`div`,O);d(O,k),k.setAttribute(`class`,`space-y-3`);let A=m(`div`,k);d(k,A);let j=m(`h3`,A);d(A,j),j.setAttribute(`class`,`text-lg font-semibold`),d(j,f(`1. default slot`));let ne=m(`p`,A);d(A,ne),ne.setAttribute(`class`,`text-sm opacity-70`),d(ne,f(`直接写在组件标签内部的内容，会落到默认插槽。`)),n(k,ie,()=>({children:(e,t,n)=>{let r=()=>T(e=>{let t=g(),n=m(`p`,t);d(t,n),d(n,f(`这段内容就是 default slot。`));let r=f(``),i=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));let M=m(`div`,O);d(O,M),M.setAttribute(`class`,`space-y-3`);let N=m(`div`,M);d(M,N);let P=m(`h3`,N);d(N,P),P.setAttribute(`class`,`text-lg font-semibold`),d(P,f(`2. named slot`));let F=m(`p`,N);d(N,F),F.setAttribute(`class`,`text-sm opacity-70`),d(F,f(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`)),n(M,ie,()=>({__rue_slots:{title:(e,t,n)=>{let r=()=>T(e=>{let t=m(`span`,e);return t.setAttribute(`class`,`font-semibold text-base-content`),d(t,f(`自定义标题`)),[t,t]});return e==null?r():o(e,n,r)},footer:(e,t,n)=>{let r=()=>T(e=>{let t=m(`span`,e);return d(t,f(`自定义底部`)),[t,t]});return e==null?r():o(e,n,r)}},children:(e,t,n)=>{let r=()=>T(e=>{let t=g(),n=m(`p`,t);d(t,n),d(n,f(`中间这段还是 default slot。`));let r=f(``),i=f(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():o(e,n,r)}}));let I=m(`div`,O);d(O,I),I.setAttribute(`class`,`space-y-3`);let L=m(`div`,I);d(I,L);let R=m(`h3`,L);d(L,R),R.setAttribute(`class`,`text-lg font-semibold`),d(R,f(`3. scoped slot`));let se=m(`p`,L);d(L,se),se.setAttribute(`class`,`text-sm opacity-70`),d(se,f(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`)),n(I,ae,()=>({item:t=>s(n=>{let r=ee().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0],s=o.parentNode,c=v(`rue:text-hole:0`);a.replaceChild(c,i);let l=v(`rue:text-hole:1`);return s.replaceChild(l,o),e({parent:a,before:c},()=>E(t.label),()=>({})),e({parent:s,before:l},()=>E(t.value),()=>({})),[r,r]})}));let z=m(`div`,u);d(u,z),z.setAttribute(`role`,`alert`),z.setAttribute(`class`,`alert alert-soft`);let ce=m(`span`,z);d(z,ce),d(ce,f(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let le=m(`div`,i);d(i,le),le.setAttribute(`class`,`card bg-base-100 shadow`);let ue=m(`div`,le);d(le,ue),ue.setAttribute(`class`,`card-body gap-5`);let B=m(`div`,ue);d(ue,B),B.setAttribute(`class`,`flex flex-wrap items-center justify-between gap-3`);let de=m(`div`,B);d(B,de);let fe=m(`h2`,de);d(de,fe),fe.setAttribute(`class`,`card-title`),d(fe,f(`再看完整例子`));let pe=m(`p`,de);d(de,pe),pe.setAttribute(`class`,`text-sm opacity-70`),d(pe,f(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let V=m(`div`,B);d(B,V),V.setAttribute(`class`,`flex flex-wrap gap-2`);let me=m(`button`,V);d(V,me);let he;h(()=>{let e=`btn btn-sm ${_.value?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(he,t)||(he=t,me.setAttribute(`class`,t))}),b(S(t,me,`click`,()=>()=>{_.value=!_.value})),d(me,f(`title slot`));let ge=m(`button`,V);d(V,ge);let _e;h(()=>{let e=`btn btn-sm ${y.value?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(_e,t)||(_e=t,ge.setAttribute(`class`,t))}),b(S(t,ge,`click`,()=>()=>{y.value=!y.value})),d(ge,f(`actions slot`));let ve=m(`button`,V);d(V,ve);let ye;h(()=>{let e=`btn btn-sm ${C.value?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(ye,t)||(ye=t,ve.setAttribute(`class`,t))}),b(S(t,ve,`click`,()=>()=>{C.value=!C.value})),d(ve,f(`default slot`));let be=m(`button`,V);d(V,be);let xe;h(()=>{let e=`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`,t=e===!1||e==null?``:String(e);Object.is(xe,t)||(xe=t,be.setAttribute(`class`,t))}),b(S(t,be,`click`,()=>()=>{w.value=!w.value})),d(be,f(`scoped row`));let H=m(`div`,ue);d(ue,H),H.setAttribute(`class`,`grid gap-5 xl:grid-cols-2`);let Se=m(`div`,H);d(H,Se),Se.setAttribute(`class`,`space-y-3`);let U=m(`div`,Se);d(Se,U),U.setAttribute(`class`,`flex items-center justify-between gap-3`);let Ce=m(`h3`,U);d(U,Ce),Ce.setAttribute(`class`,`text-lg font-semibold`),d(Ce,f(`传入 slot 之后`));let we=m(`span`,U);d(U,we),we.setAttribute(`class`,`badge badge-success badge-outline`),d(we,f(`自定义内容生效`)),n(Se,oe,()=>({row:w.value?t=>s(n=>{let r=te().content.cloneNode(!0).firstChild,i=r.childNodes[1],a=r.childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=r.childNodes[1].childNodes[0],c=s.parentNode,l=v(`rue:text-hole:0`);o.replaceChild(l,a);let u;return h(()=>{let e=`badge ${re[t.tone]}`,n=e===!1||e==null?``:String(e);Object.is(u,n)||(u=n,i.setAttribute(`class`,n))}),e({parent:o,before:l},()=>E(t.label),()=>({})),e({parent:c,before:s},()=>E(t.value),()=>({})),[r,r]}):void 0,children:(e,t,n)=>{let i=()=>s(e=>{let t=g();r(()=>{let e=_.value;return e?{__rue_compiled_branch_key:!0,create:()=>T(e=>{let t=g(),n=m(`h2`,t);d(t,n),n.setAttribute(`class`,`card-title`),d(n,f(`支付面板`));let r=m(`p`,t);d(t,r),r.setAttribute(`class`,`text-sm opacity-70`),d(r,f(`Template slot="title" 可以一次传多个兄弟节点。`));let i=f(``),a=f(``);return t.insertBefore(i,t.firstChild),t.appendChild(a),[t.firstChild,t.lastChild]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>T(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=g();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(t),r(()=>{let e=y.value;return e?{__rue_compiled_branch_key:!0,create:()=>T(e=>{let t=m(`button`,e);return t.setAttribute(`slot`,`actions`),t.setAttribute(`class`,`btn btn-sm btn-primary`),d(t,f(`刷新`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>T(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=g();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(t),r(()=>{let e=C.value;return e?{__rue_compiled_branch_key:!0,create:()=>T(e=>{let t=m(`div`,e);t.setAttribute(`class`,`space-y-3`);let n=m(`p`,t);d(t,n),n.setAttribute(`class`,`text-sm leading-6`),d(n,f(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let r=m(`div`,t);d(t,r),r.setAttribute(`class`,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let i=m(`div`,r);d(r,i),i.setAttribute(`class`,`stat py-3`);let a=m(`div`,i);d(i,a),a.setAttribute(`class`,`stat-title`),d(a,f(`可用率`));let o=m(`div`,i);d(i,o),o.setAttribute(`class`,`stat-value text-2xl`),d(o,f(`99.98%`));let s=m(`div`,i);d(i,s),s.setAttribute(`class`,`stat-desc`),d(s,f(`过去 24 小时`));let c=m(`div`,r);d(r,c),c.setAttribute(`class`,`stat py-3`);let l=m(`div`,c);d(c,l),l.setAttribute(`class`,`stat-title`),d(l,f(`峰值请求`));let u=m(`div`,c);d(c,u),u.setAttribute(`class`,`stat-value text-2xl`),d(u,f(`18k`));let p=m(`div`,c);return d(c,p),p.setAttribute(`class`,`stat-desc`),d(p,f(`每分钟`)),[t,t]})}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>T(t=>{let n=f(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=g();return[t.firstChild,t.lastChild]})}}).__rue_compiled_mount(t);let n=f(``),i=f(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():o(e,n,i)}}));let Te=m(`div`,H);d(H,Te),Te.setAttribute(`class`,`space-y-3`);let W=m(`div`,Te);d(Te,W),W.setAttribute(`class`,`flex items-center justify-between gap-3`);let Ee=m(`h3`,W);d(W,Ee),Ee.setAttribute(`class`,`text-lg font-semibold`),d(Ee,f(`未传 slot 时`));let De=m(`span`,W);d(W,De),De.setAttribute(`class`,`badge badge-warning badge-outline`),d(De,f(`fallback 接管`)),n(Te,oe,()=>({}));let G=m(`div`,i);d(i,G),G.setAttribute(`class`,`grid gap-4 xl:grid-cols-2`);let Oe=m(`div`,G);d(G,Oe),Oe.setAttribute(`class`,`card bg-base-100 shadow`);let K=m(`div`,Oe);d(Oe,K),K.setAttribute(`class`,`card-body gap-3`);let ke=m(`h2`,K);d(K,ke),ke.setAttribute(`class`,`card-title`),d(ke,f(`当前推荐写法`));let q=m(`ul`,K);d(K,q),q.setAttribute(`class`,`list rounded-box border border-base-300 bg-base-100`);let J=m(`li`,q);d(q,J),J.setAttribute(`class`,`list-row`);let Ae=m(`div`,J);d(J,Ae),Ae.setAttribute(`class`,`font-medium`),d(Ae,f(`default slot`));let je=m(`div`,J);d(J,je),je.setAttribute(`class`,`opacity-70`),d(je,f(`直接写在组件标签内部，最终会落到 props.children。`));let Y=m(`li`,q);d(q,Y),Y.setAttribute(`class`,`list-row`);let Me=m(`div`,Y);d(Y,Me),Me.setAttribute(`class`,`font-medium`),d(Me,f(`named slot`));let Ne=m(`div`,Y);d(Y,Ne),Ne.setAttribute(`class`,`opacity-70`),d(Ne,f(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=m(`li`,q);d(q,X),X.setAttribute(`class`,`list-row`);let Pe=m(`div`,X);d(X,Pe),Pe.setAttribute(`class`,`font-medium`),d(Pe,f(`scoped slot`));let Fe=m(`div`,X);d(X,Fe),Fe.setAttribute(`class`,`opacity-70`),d(Fe,f(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=m(`li`,q);d(q,Z),Z.setAttribute(`class`,`list-row`);let Ie=m(`div`,Z);d(Z,Ie),Ie.setAttribute(`class`,`font-medium`),d(Ie,f(`fallback`));let Le=m(`div`,Z);d(Z,Le),Le.setAttribute(`class`,`opacity-70`),d(Le,f(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Re=m(`div`,G);d(G,Re),Re.setAttribute(`class`,`card bg-base-100 shadow`);let Q=m(`div`,Re);d(Re,Q),Q.setAttribute(`class`,`card-body gap-3`);let ze=m(`h2`,Q);d(Q,ze),ze.setAttribute(`class`,`card-title`),d(ze,f(`这页实际演示的协议`));let Be=m(`div`,Q);d(Q,Be),Be.setAttribute(`role`,`alert`),Be.setAttribute(`class`,`alert alert-soft`);let Ve=m(`span`,Be);d(Be,Ve),d(Ve,f(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=m(`div`,Q);d(Q,$),$.setAttribute(`class`,`mockup-code text-sm`);let He=m(`pre`,$);d($,He),He.setAttribute(`data-prefix`,`1`);let Ue=m(`code`,He);d(He,Ue),d(Ue,f(`<Slot source={props} name="title">fallback</Slot>`));let We=m(`pre`,$);d($,We),We.setAttribute(`data-prefix`,`2`);let Ge=m(`code`,We);d(We,Ge),d(Ge,f(`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`));let Ke=m(`pre`,$);d($,Ke),Ke.setAttribute(`data-prefix`,`3`);let qe=m(`code`,Ke);d(Ke,qe),d(qe,f(`<button slot="actions">刷新</button>`));let Je=m(`pre`,$);d($,Je),Je.setAttribute(`data-prefix`,`4`);let Ye=m(`code`,Je);d(Je,Ye),d(Ye,f(`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`));let Xe=m(`p`,Q);return d(Q,Xe),Xe.setAttribute(`class`,`text-sm opacity-70 leading-6`),d(Xe,f(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),[i,i]})}:typeof t==`number`||typeof t==`bigint`?{__rue_compiled_branch_key:t,create:()=>T(e=>{let n=f(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return[n,n]})}:{__rue_compiled_branch_key:!1,create:()=>T(e=>{let t=g();return[t.firstChild,t.lastChild]})}});let z=f(``),ce=f(``);return a.insertBefore(z,a.firstChild),a.appendChild(ce),[a.firstChild,a.lastChild]});return t==null?l():o(t,c,l)}})))};export{R as default};
import{Bt as e,C as t,Dn as n,Et as r,K as i,Kt as a,L as o,Lt as s,Mt as c,S as l,V as u,W as d,X as f,Y as p,_n as m,_t as h,at as g,bn as _,fn as v,gn as y,hn as b,ht as x,it as S,kn as C,mn as w,nt as T,ot as E,pt as ee,q as te,rt as D,tt as ne,u as O,wn as k,x as A,z as j}from"./rue-runtime-CwEGJ854.js";import{t as M}from"./Code-B3jCYMAr.js";import{r as re}from"./SidebarPlaygroundExample-EGR0CyDT.js";var ie=m(`<div class="flex w-full items-center justify-between gap-3"><div><div class="font-medium"><!--rue:text-hole:0--></div><div class="text-xs opacity-60">来自 scoped slot props</div></div><span class="badge badge-primary"><!--rue:text-hole:1--></span></div>`),ae=m(`<div class="flex w-full items-center justify-between gap-3"><div><div class="font-medium"><!--rue:text-hole:0--></div><div class="text-xs opacity-60">来自 scoped slot props</div></div><span><!--rue:text-hole:1--></span></div>`),oe=m(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-3"><div class="space-y-1 border-b border-base-300 pb-3"><!--rue:opaque-hole:0--></div><div class="rounded-box bg-base-200 p-3 text-sm leading-6"><!--rue:opaque-hole:1--></div><div class="text-sm opacity-70"><!--rue:opaque-hole:2--></div></div></section>`),se=m(`<ul class="list rounded-box border border-base-300 bg-base-100"><!--rue:text-hole:0--></ul>`),N=m(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3"><div class="space-y-1"><!--rue:opaque-hole:0--></div><div class="flex items-center gap-2"><!--rue:opaque-hole:1--></div></div><div class="rounded-box bg-base-200 p-4"><!--rue:opaque-hole:2--></div><ul class="list rounded-box border border-base-300 bg-base-100"><!--rue:text-hole:3--></ul></div></section>`),P=m(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">插槽 Slots（default / named / scoped）</h1>`),ce=m(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),le=m(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ue={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},de=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],F=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],I=`import { Slot, type FC } from '@rue-js/rue';

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
/>;`,fe=`import { Slot, Template, type FC } from '@rue-js/rue';

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

export default Demo;`,pe=e=>r(Object.assign(t=>{let n=oe().content.cloneNode(!0).firstChild,a=n.childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=n.childNodes[0].childNodes[1].childNodes[0],c=s.parentNode,l=n.childNodes[0].childNodes[2].childNodes[0],u=l.parentNode,d=w(o);i(d,O,()=>({source:e,name:`title`,children:[(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`h3`,t);return v(t,n),n.className=`font-semibold`,v(n,y(`默认标题`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`p`,t);return v(t,n),n.className=`text-sm opacity-70`,v(n,y(`没传 title slot，就显示这里。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),o.insertBefore(d,a);let f=w(c);i(f,O,()=>({source:e,children:(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`p`,t);return v(t,n),n.className=`opacity-70`,v(n,y(`没有传 default slot，所以这里显示 fallback。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),c.insertBefore(f,s);let p=w(u);return i(p,O,()=>({source:e,name:`footer`,children:(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T();return v(t,y(`默认底部`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(p,l),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),me=e=>r(Object.assign(n=>{let a=se().content.cloneNode(!0).firstChild,o=a.childNodes[0],s=o.parentNode,c=[];return k(()=>{c=t(s,o,c,F||[],(e,t)=>e.label,(t,n)=>{let a=d(t),o=d(n);return l((t,n,o)=>A(t,o,()=>r(Object.assign(t=>{let n=b(`li`,t);return n.className=`list-row items-center gap-3`,i(n,O,()=>({source:e,name:`item`,props:a.get(),children:(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`div`,t);v(t,n),n.className=`flex w-full items-center justify-between gap-3`;let r=b(`span`,n);v(n,r),r.className=`font-medium`;let i=y(``);v(r,i),_(i,()=>a.get().label);let o=b(`span`,n);v(n,o),o.className=`badge badge-outline`;let s=y(``);return v(o,s),_(s,()=>a.get().value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,r)=>{t=e,n=r,a.set(e),o.set(r)})})}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),he=e=>r(Object.assign(n=>{let a=N().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0].childNodes[0].childNodes[0],s=o.parentNode,c=a.childNodes[0].childNodes[0].childNodes[1].childNodes[0],u=c.parentNode,f=a.childNodes[0].childNodes[1].childNodes[0],p=f.parentNode,m=a.childNodes[0].childNodes[2].childNodes[0],h=m.parentNode,g=w(s);i(g,O,()=>({source:e,name:`title`,children:[(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`h2`,t);return v(t,n),n.className=`card-title`,v(n,y(`默认标题`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`p`,t);return v(t,n),n.className=`text-sm opacity-70`,v(n,y(`没有提供 title slot 时，会显示这段 fallback。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),s.insertBefore(g,o);let x=w(u);i(x,O,()=>({source:e,name:`actions`,children:(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`span`,t);return v(t,n),n.className=`badge badge-outline`,v(n,y(`fallback action`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),u.insertBefore(x,c);let S=w(p);i(S,O,()=>({source:e,children:(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`p`,t);return v(t,n),n.className=`opacity-70`,v(n,y(`默认插槽为空时，这里显示主体内容的 fallback。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),p.insertBefore(S,f);let C=[];return k(()=>{C=t(h,m,C,de||[],(e,t)=>e.label,(t,n)=>{let a=d(t),o=d(n);return l((t,n,o)=>A(t,o,()=>r(Object.assign(t=>{let n=b(`li`,t);return n.className=`list-row items-center gap-3`,i(n,O,()=>({source:e,name:`row`,props:a.get(),children:(e,t,n)=>A(e,n,()=>r(Object.assign(e=>{let t=T(),n=b(`div`,t);v(t,n),n.className=`flex w-full items-center justify-between gap-3`;let r=b(`div`,n);v(n,r),r.className=`font-medium`;let i=y(``);v(r,i),_(i,()=>a.get().label);let o=b(`span`,n);v(n,o);let s;k(()=>{let e=`badge ${ue[a.get().tone]}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,o.className=t)});let c=y(``);return v(o,c),_(c,()=>a.get().value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,r)=>{t=e,n=r,a.set(e),o.set(r)})})}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),ge=()=>{let t=e(`preview`),l=e(!0),d=e(!0),m=e(!0),_=e(!0);return c(()=>te((()=>{let e=x(()=>{let e=T(),n=le().content.cloneNode(!0),c=n.firstChild,w=c.childNodes[0],te=w.parentNode,O=c.childNodes[1],A=O.parentNode;return e.appendChild(n),u(te,w,()=>{let e=t.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=b(`div`,e);t.className=`grid gap-6`;let n=b(`div`,t);v(t,n),n.className=`card bg-base-100 shadow overflow-auto`;let r=b(`div`,n);v(n,r),r.className=`card-body p-0`;let a=b(`div`,r);v(r,a),a.className=`border-b border-base-300 px-4 py-3`;let o=b(`h2`,a);v(a,o),o.className=`card-title text-lg`,v(o,y(`先看最小例子`));let s=b(`p`,a);v(a,s),s.className=`text-sm opacity-70`,v(s,y(`先只看 default、named、scoped 各自最短怎么写。`)),i(r,M,()=>({className:`h-[420px]`,lang:`tsx`,code:I}));let c=b(`div`,t);v(t,c),c.className=`card bg-base-100 shadow overflow-auto`;let l=b(`div`,c);v(c,l),l.className=`card-body p-0`;let u=b(`div`,l);v(l,u),u.className=`border-b border-base-300 px-4 py-3`;let d=b(`h2`,u);v(u,d),d.className=`card-title text-lg`,v(d,y(`再看完整例子`));let f=b(`p`,u);return v(u,f),f.className=`text-sm opacity-70`,v(f,y(`这个版本把多个 slot 组合在一个卡片组件里。`)),i(l,M,()=>({className:`h-[760px]`,lang:`tsx`,code:fe})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>r(Object.assign(t=>{let n=y(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),k(()=>{let e=t.value===`preview`?x(()=>{let e=T(),t=D(`div`,e);f(e,t),o(t,`grid gap-6`);let n=D(`div`,t);f(t,n),E(n,`role`,`alert`),o(n,`alert alert-success`);let i=D(`span`,n);f(n,i),f(i,S(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let c=D(`div`,t);f(t,c),o(c,`card bg-base-100 shadow`);let u=D(`div`,c);f(c,u),o(u,`card-body gap-5`);let w=D(`div`,u);f(u,w);let te=D(`h2`,w);f(w,te),o(te,`card-title`),f(te,S(`先看最小例子`));let O=D(`p`,w);f(w,O),o(O,`text-sm opacity-70`),f(O,S(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=D(`div`,u);f(u,A),o(A,`grid gap-4 xl:grid-cols-3`);let j=D(`div`,A);f(A,j),o(j,`space-y-3`);let M=D(`div`,j);f(j,M);let re=D(`h3`,M);f(M,re),o(re,`text-lg font-semibold`),f(re,S(`1. default slot`));let oe=D(`p`,M);f(M,oe),o(oe,`text-sm opacity-70`),f(oe,S(`直接写在组件标签内部的内容，会落到默认插槽。`));let se=ne(`rue:component:anchor`);f(j,se),k(()=>{let e=x(()=>{let e=T(),t=D(`p`,e);return f(e,t),f(t,S(`这段内容就是 default slot。`)),e}),t=h(pe,()=>({children:e}));C(()=>p(t,j,se))});let N=D(`div`,A);f(A,N),o(N,`space-y-3`);let P=D(`div`,N);f(N,P);let ce=D(`h3`,P);f(P,ce),o(ce,`text-lg font-semibold`),f(ce,S(`2. named slot`));let le=D(`p`,P);f(P,le),o(le,`text-sm opacity-70`),f(le,S(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let de=ne(`rue:component:anchor`);f(N,de),k(()=>{let e=x(()=>{let e=T(),t=D(`p`,e);return f(e,t),f(t,S(`中间这段还是 default slot。`)),e}),t=x(()=>{let e=T(),t=D(`span`,e);return f(e,t),o(t,`font-semibold text-base-content`),f(t,S(`自定义标题`)),e}),n=x(()=>{let e=T(),t=D(`span`,e);return f(e,t),f(t,S(`自定义底部`)),e}),r=h(pe,()=>({__rue_slots:{default:e,title:t,footer:n},children:e}));C(()=>p(r,N,de))});let F=D(`div`,A);f(A,F),o(F,`space-y-3`);let I=D(`div`,F);f(F,I);let fe=D(`h3`,I);f(I,fe),o(fe,`text-lg font-semibold`),f(fe,S(`3. scoped slot`));let ge=D(`p`,I);f(I,ge),o(ge,`text-sm opacity-70`),f(ge,S(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let _e=ne(`rue:component:anchor`);f(F,_e),k(()=>{let e=h(me,()=>({item:a(e=>x(t=>{let n=ie().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[0],o=a.parentNode;return k(()=>{let t=e.label;C(()=>p(t,i,r))}),k(()=>{let t=e.value;C(()=>p(t,o,a))}),n}))}));C(()=>p(e,F,_e))});let ve=D(`div`,u);f(u,ve),E(ve,`role`,`alert`),o(ve,`alert alert-soft`);let ye=D(`span`,ve);f(ve,ye),f(ye,S(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let be=D(`div`,t);f(t,be),o(be,`card bg-base-100 shadow`);let L=D(`div`,be);f(be,L),o(L,`card-body gap-5`);let R=D(`div`,L);f(L,R),o(R,`flex flex-wrap items-center justify-between gap-3`);let xe=D(`div`,R);f(R,xe);let Se=D(`h2`,xe);f(xe,Se),o(Se,`card-title`),f(Se,S(`再看完整例子`));let Ce=D(`p`,xe);f(xe,Ce),o(Ce,`text-sm opacity-70`),f(Ce,S(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=D(`div`,R);f(R,z),o(z,`flex flex-wrap gap-2`);let we=D(`button`,z);f(z,we),k(()=>{o(we,`btn btn-sm ${l.value?`btn-primary`:`btn-outline`}`)});let Te=e=>{let t=()=>{l.value=!l.value};typeof t==`function`&&t(e)};we.addEventListener(`click`,Te),s(()=>we.removeEventListener(`click`,Te)),f(we,S(`title slot`));let Ee=D(`button`,z);f(z,Ee),k(()=>{o(Ee,`btn btn-sm ${d.value?`btn-primary`:`btn-outline`}`)});let De=e=>{let t=()=>{d.value=!d.value};typeof t==`function`&&t(e)};Ee.addEventListener(`click`,De),s(()=>Ee.removeEventListener(`click`,De)),f(Ee,S(`actions slot`));let Oe=D(`button`,z);f(z,Oe),k(()=>{o(Oe,`btn btn-sm ${m.value?`btn-primary`:`btn-outline`}`)});let ke=e=>{let t=()=>{m.value=!m.value};typeof t==`function`&&t(e)};Oe.addEventListener(`click`,ke),s(()=>Oe.removeEventListener(`click`,ke)),f(Oe,S(`default slot`));let Ae=D(`button`,z);f(z,Ae),k(()=>{o(Ae,`btn btn-sm ${_.value?`btn-primary`:`btn-outline`}`)});let je=e=>{let t=()=>{_.value=!_.value};typeof t==`function`&&t(e)};Ae.addEventListener(`click`,je),s(()=>Ae.removeEventListener(`click`,je)),f(Ae,S(`scoped row`));let B=D(`div`,L);f(L,B),o(B,`grid gap-5 xl:grid-cols-2`);let V=D(`div`,B);f(B,V),o(V,`space-y-3`);let H=D(`div`,V);f(V,H),o(H,`flex items-center justify-between gap-3`);let Me=D(`h3`,H);f(H,Me),o(Me,`text-lg font-semibold`),f(Me,S(`传入 slot 之后`));let Ne=D(`span`,H);f(H,Ne),o(Ne,`badge badge-success badge-outline`),f(Ne,S(`自定义内容生效`));let Pe=ne(`rue:component:anchor`);f(V,Pe),k(()=>{let e=x(()=>{let e=T(),t=D(`div`,e);f(e,t),o(t,`space-y-3`);let n=D(`p`,t);f(t,n),o(n,`text-sm leading-6`),f(n,S(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let r=D(`div`,t);f(t,r),o(r,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let i=D(`div`,r);f(r,i),o(i,`stat py-3`);let a=D(`div`,i);f(i,a),o(a,`stat-title`),f(a,S(`可用率`));let s=D(`div`,i);f(i,s),o(s,`stat-value text-2xl`),f(s,S(`99.98%`));let c=D(`div`,i);f(i,c),o(c,`stat-desc`),f(c,S(`过去 24 小时`));let l=D(`div`,r);f(r,l),o(l,`stat py-3`);let u=D(`div`,l);f(l,u),o(u,`stat-title`),f(u,S(`峰值请求`));let d=D(`div`,l);f(l,d),o(d,`stat-value text-2xl`),f(d,S(`18k`));let p=D(`div`,l);return f(l,p),o(p,`stat-desc`),f(p,S(`每分钟`)),e}),t=x(()=>{let e=T(),t=D(`button`,e);return f(e,t),o(t,`btn btn-sm btn-primary`),f(t,S(`刷新`)),e}),n=h(he,()=>({row:_.value?e=>x(t=>{let n=ae().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,s=n.childNodes[1].childNodes[0],c=s.parentNode;return k(()=>{o(r,`badge ${ue[e.tone]}`)}),k(()=>{let t=e.label;C(()=>p(t,a,i))}),k(()=>{let t=e.value;C(()=>p(t,c,s))}),n}):void 0,__rue_slots:{default:m.value?e:void 0,title:l.value?[r(Object.assign(e=>{let t=b(`h2`,e);return t.className=`card-title`,v(t,y(`支付面板`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),r(Object.assign(e=>{let t=b(`p`,e);return t.className=`text-sm opacity-70`,v(t,y(`Template slot="title" 可以一次传多个兄弟节点。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]:void 0,actions:d.value?t:void 0},children:m.value?e:void 0}));C(()=>p(n,V,Pe))});let U=D(`div`,B);f(B,U),o(U,`space-y-3`);let W=D(`div`,U);f(U,W),o(W,`flex items-center justify-between gap-3`);let Fe=D(`h3`,W);f(W,Fe),o(Fe,`text-lg font-semibold`),f(Fe,S(`未传 slot 时`));let Ie=D(`span`,W);f(W,Ie),o(Ie,`badge badge-warning badge-outline`),f(Ie,S(`fallback 接管`));let Le=ne(`rue:component:anchor`);f(U,Le);let Re=h(he,()=>({}));p(Re,U,Le);let G=D(`div`,t);f(t,G),o(G,`grid gap-4 xl:grid-cols-2`);let ze=D(`div`,G);f(G,ze),o(ze,`card bg-base-100 shadow`);let K=D(`div`,ze);f(ze,K),o(K,`card-body gap-3`);let Be=D(`h2`,K);f(K,Be),o(Be,`card-title`),f(Be,S(`当前推荐写法`));let q=D(`ul`,K);f(K,q),o(q,`list rounded-box border border-base-300 bg-base-100`);let J=D(`li`,q);f(q,J),o(J,`list-row`);let Ve=D(`div`,J);f(J,Ve),o(Ve,`font-medium`),f(Ve,S(`default slot`));let He=D(`div`,J);f(J,He),o(He,`opacity-70`),f(He,S(`直接写在组件标签内部，最终会落到 props.children。`));let Y=D(`li`,q);f(q,Y),o(Y,`list-row`);let Ue=D(`div`,Y);f(Y,Ue),o(Ue,`font-medium`),f(Ue,S(`named slot`));let We=D(`div`,Y);f(Y,We),o(We,`opacity-70`),f(We,S(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=D(`li`,q);f(q,X),o(X,`list-row`);let Ge=D(`div`,X);f(X,Ge),o(Ge,`font-medium`),f(Ge,S(`scoped slot`));let Ke=D(`div`,X);f(X,Ke),o(Ke,`opacity-70`),f(Ke,S(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=D(`li`,q);f(q,Z),o(Z,`list-row`);let qe=D(`div`,Z);f(Z,qe),o(qe,`font-medium`),f(qe,S(`fallback`));let Je=D(`div`,Z);f(Z,Je),o(Je,`opacity-70`),f(Je,S(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ye=D(`div`,G);f(G,Ye),o(Ye,`card bg-base-100 shadow`);let Q=D(`div`,Ye);f(Ye,Q),o(Q,`card-body gap-3`);let Xe=D(`h2`,Q);f(Q,Xe),o(Xe,`card-title`),f(Xe,S(`这页实际演示的协议`));let Ze=D(`div`,Q);f(Q,Ze),E(Ze,`role`,`alert`),o(Ze,`alert alert-soft`);let Qe=D(`span`,Ze);f(Ze,Qe),f(Qe,S(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=D(`div`,Q);f(Q,$),o($,`mockup-code text-sm`);let $e=D(`pre`,$);f($,$e),E($e,`data-prefix`,`1`);let et=D(`code`,$e);f($e,et);let tt=g(et);f(et,tt),ee(tt,`<Slot source={props} name="title">fallback</Slot>`);let nt=D(`pre`,$);f($,nt),E(nt,`data-prefix`,`2`);let rt=D(`code`,nt);f(nt,rt);let it=g(rt);f(rt,it),ee(it,`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`);let at=D(`pre`,$);f($,at),E(at,`data-prefix`,`3`);let ot=D(`code`,at);f(at,ot);let st=g(ot);f(ot,st),ee(st,`<button slot="actions">刷新</button>`);let ct=D(`pre`,$);f($,ct),E(ct,`data-prefix`,`4`);let lt=D(`code`,ct);f(ct,lt);let ut=g(lt);f(lt,ut),ee(ut,`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`);let dt=D(`p`,Q);return f(Q,dt),o(dt,`text-sm opacity-70 leading-6`),f(dt,S(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),e},!0):``;C(()=>p(e,A,O))}),e});return h(re,()=>({children:[r(e=>P().content.cloneNode(!0).firstChild),r(Object.assign(e=>{let r=ce().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=r.childNodes[1];i.setAttribute(`role`,`tab`);let o;k(()=>{let e=`tab ${t.value===`preview`?`tab-active`:``}`,n=e==null?``:String(e);Object.is(o,n)||(o=n,i.className=n)});let s=e=>{let n=()=>{t.value=`preview`};typeof n==`function`&&n(e)};i.addEventListener(`click`,s),n(()=>i.removeEventListener(`click`,s)),a.setAttribute(`role`,`tab`);let c;k(()=>{let e=`tab ${t.value===`code`?`tab-active`:``}`,n=e==null?``:String(e);Object.is(c,n)||(c=n,a.className=n)});let l=e=>{let n=()=>{t.value=`code`};typeof n==`function`&&n(e)};return a.addEventListener(`click`,l),n(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e]}))})(),e=>j(()=>{})))};export{ge as default};
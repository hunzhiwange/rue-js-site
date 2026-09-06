import{At as e,C as t,Dn as n,E as r,Mt as i,Ot as a,Q as o,Qt as s,Vt as c,_n as l,_t as u,at as d,b as f,bt as p,ct as m,dt as h,et as g,gn as _,gt as v,hn as y,kn as b,nt as x,on as ee,pn as S,qt as C,st as w,tn as T,ut as E,vn as D,vt as O,w as k,wn as A,xn as j,xt as M,y as N,yt as P}from"./rue-runtime-HIMg8Lz8.js";import{t as te}from"./Code-DpH7u0gk.js";import{r as ne}from"./SidebarPlaygroundExample-BCPRe0hA.js";var re=D(`<div class="flex w-full items-center justify-between gap-3"><div><div class="font-medium"><!--rue:text-hole:0--></div><div class="text-xs opacity-60">来自 scoped slot props</div></div><span class="badge badge-primary"><!--rue:text-hole:1--></span></div>`),ie=D(`<div class="flex w-full items-center justify-between gap-3"><div><div class="font-medium"><!--rue:text-hole:0--></div><div class="text-xs opacity-60">来自 scoped slot props</div></div><span><!--rue:text-hole:1--></span></div>`),ae=D(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-3"><div class="space-y-1 border-b border-base-300 pb-3"><!--rue:opaque-hole:0--></div><div class="rounded-box bg-base-200 p-3 text-sm leading-6"><!--rue:opaque-hole:1--></div><div class="text-sm opacity-70"><!--rue:opaque-hole:2--></div></div></section>`),F=D(`<ul class="list rounded-box border border-base-300 bg-base-100"><!--rue:text-hole:0--></ul>`),I=D(`<section class="card border border-base-300 bg-base-100 shadow-sm"><div class="card-body gap-4"><div class="flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3"><div class="space-y-1"><!--rue:opaque-hole:0--></div><div class="flex items-center gap-2"><!--rue:opaque-hole:1--></div></div><div class="rounded-box bg-base-200 p-4"><!--rue:opaque-hole:2--></div><ul class="list rounded-box border border-base-300 bg-base-100"><!--rue:text-hole:3--></ul></div></section>`),oe=D(`<h1 class="text-5xl font-semibold mb-4 md:mb-4">插槽 Slots（default / named / scoped）</h1>`),se=D(`<div role="tablist" class="tabs tabs-box"><button role="tab">效果</button><button role="tab">代码</button></div>`),ce=D(`<div class="mt-4 grid md:grid-cols-1 gap-6 items-start"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),le={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},L=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],R=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],ue=`import { Slot, type FC } from '@rue-js/rue';

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
/>;`,de=`import { Slot, Template, type FC } from '@rue-js/rue';

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

export default Demo;`,fe=e=>c(Object.assign(t=>{let n=ae().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o=n.childNodes[0].childNodes[1].childNodes[0],s=o.parentNode,d=n.childNodes[0].childNodes[2].childNodes[0],f=d.parentNode,p=y(a);w(p,N,()=>({source:e,name:`title`,children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`h3`,t);return S(t,n),n.className=`font-semibold`,S(n,l(`默认标题`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`p`,t);return S(t,n),n.className=`text-sm opacity-70`,S(n,l(`没传 title slot，就显示这里。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),a.insertBefore(p,i);let m=y(s);w(m,N,()=>({source:e,children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`p`,t);return S(t,n),n.className=`opacity-70`,S(n,l(`没有传 default slot，所以这里显示 fallback。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),s.insertBefore(m,o);let h=y(f);return w(h,N,()=>({source:e,name:`footer`,children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u();return S(t,l(`默认底部`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),f.insertBefore(h,d),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),pe=e=>c(Object.assign(i=>{let a=F().content.cloneNode(!0).firstChild,o=a.childNodes[0],s=o.parentNode,p=[];return A(()=>{p=k(s,o,p,R||[],(e,t)=>e.label,(n,i)=>{let a=d(n);return t((t,n,i)=>r(t,i,()=>c(Object.assign(t=>{let n=_(`li`,t);return n.className=`list-row items-center gap-3`,w(n,N,()=>({source:e,name:`item`,props:a.get(),children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`div`,t);S(t,n),n.className=`flex w-full items-center justify-between gap-3`;let r=_(`span`,n);S(n,r),r.className=`font-medium`;let i=l(``);S(r,i),j(i,()=>a.get().label);let o=_(`span`,n);S(n,o),o.className=`badge badge-outline`;let s=l(``);return S(o,s),j(s,()=>a.get().value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{n=e,i=t,a.set(e)})})}),n(()=>f(p)),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),me=e=>c(Object.assign(i=>{let a=I().content.cloneNode(!0).firstChild,o=a.childNodes[0].childNodes[0].childNodes[0].childNodes[0],s=o.parentNode,p=a.childNodes[0].childNodes[0].childNodes[1].childNodes[0],m=p.parentNode,h=a.childNodes[0].childNodes[1].childNodes[0],g=h.parentNode,v=a.childNodes[0].childNodes[2].childNodes[0],b=v.parentNode,x=y(s);w(x,N,()=>({source:e,name:`title`,children:[(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`h2`,t);return S(t,n),n.className=`card-title`,S(n,l(`默认标题`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`p`,t);return S(t,n),n.className=`text-sm opacity-70`,S(n,l(`没有提供 title slot 时，会显示这段 fallback。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))]})),s.insertBefore(x,o);let ee=y(m);w(ee,N,()=>({source:e,name:`actions`,children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`span`,t);return S(t,n),n.className=`badge badge-outline`,S(n,l(`fallback action`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),m.insertBefore(ee,p);let C=y(g);w(C,N,()=>({source:e,children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`p`,t);return S(t,n),n.className=`opacity-70`,S(n,l(`默认插槽为空时，这里显示主体内容的 fallback。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),g.insertBefore(C,h);let T=[];return A(()=>{T=k(b,v,T,L||[],(e,t)=>e.label,(n,i)=>{let a=d(n);return t((t,n,i)=>r(t,i,()=>c(Object.assign(t=>{let n=_(`li`,t);return n.className=`list-row items-center gap-3`,w(n,N,()=>({source:e,name:`row`,props:a.get(),children:(e,t,n)=>r(e,n,()=>c(Object.assign(e=>{let t=u(),n=_(`div`,t);S(t,n),n.className=`flex w-full items-center justify-between gap-3`;let r=_(`div`,n);S(n,r),r.className=`font-medium`;let i=l(``);S(r,i),j(i,()=>a.get().label);let o=_(`span`,n);S(n,o);let s;A(()=>{let e=`badge ${le[a.get().tone]}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,o.className=t)});let c=l(``);return S(o,c),j(c,()=>a.get().value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{n=e,i=t,a.set(e)})})}),n(()=>f(T)),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),he=()=>{let t=T(`preview`),r=T(!0),d=T(!0),f=T(!0),y=T(!0);return C(()=>m((()=>{let m=e(()=>{let n=u(),m=ce().content.cloneNode(!0),g=m.firstChild,C=g.childNodes[0],T=C.parentNode,D=g.childNodes[1],k=D.parentNode;return n.appendChild(m),x(T,C,()=>{let e=t.value===`code`;return e?{__rue_compiled_branch_key:!0,create:()=>c(Object.assign(e=>{let t=_(`div`,e);t.className=`grid gap-6`;let n=_(`div`,t);S(t,n),n.className=`card bg-base-100 shadow overflow-auto`;let r=_(`div`,n);S(n,r),r.className=`card-body p-0`;let i=_(`div`,r);S(r,i),i.className=`border-b border-base-300 px-4 py-3`;let a=_(`h2`,i);S(i,a),a.className=`card-title text-lg`,S(a,l(`先看最小例子`));let o=_(`p`,i);S(i,o),o.className=`text-sm opacity-70`,S(o,l(`先只看 default、named、scoped 各自最短怎么写。`)),w(r,te,()=>({className:`h-[420px]`,lang:`tsx`,code:ue}));let s=_(`div`,t);S(t,s),s.className=`card bg-base-100 shadow overflow-auto`;let c=_(`div`,s);S(s,c),c.className=`card-body p-0`;let u=_(`div`,c);S(c,u),u.className=`border-b border-base-300 px-4 py-3`;let d=_(`h2`,u);S(u,d),d.className=`card-title text-lg`,S(d,l(`再看完整例子`));let f=_(`p`,u);return S(u,f),f.className=`text-sm opacity-70`,S(f,l(`这个版本把多个 slot 组合在一个卡片组件里。`)),w(c,te,()=>({className:`h-[760px]`,lang:`tsx`,code:de})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:typeof e==`number`||typeof e==`bigint`?{__rue_compiled_branch_key:e,create:()=>c(Object.assign(t=>{let n=l(typeof e==`string`||typeof e==`number`||typeof e==`bigint`?e:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>c(Object.assign(e=>{let t=u();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}}),A(()=>{let n=t.value===`preview`?e(()=>{let t=u(),n=O(`div`,t);h(t,n),o(n,`grid gap-6`);let m=O(`div`,n);h(n,m),M(m,`role`,`alert`),o(m,`alert alert-success`);let g=O(`span`,m);h(m,g),h(g,P(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let x=O(`div`,n);h(n,x),o(x,`card bg-base-100 shadow`);let C=O(`div`,x);h(x,C),o(C,`card-body gap-5`);let w=O(`div`,C);h(C,w);let T=O(`h2`,w);h(w,T),o(T,`card-title`),h(T,P(`先看最小例子`));let D=O(`p`,w);h(w,D),o(D,`text-sm opacity-70`),h(D,P(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let k=O(`div`,C);h(C,k),o(k,`grid gap-4 xl:grid-cols-3`);let j=O(`div`,k);h(k,j),o(j,`space-y-3`);let N=O(`div`,j);h(j,N);let te=O(`h3`,N);h(N,te),o(te,`text-lg font-semibold`),h(te,P(`1. default slot`));let ne=O(`p`,N);h(N,ne),o(ne,`text-sm opacity-70`),h(ne,P(`直接写在组件标签内部的内容，会落到默认插槽。`));let ae=v(`rue:component:anchor`);h(j,ae),A(()=>{let t=e(()=>{let e=u(),t=O(`p`,e);return h(e,t),h(t,P(`这段内容就是 default slot。`)),e}),n=i(fe,()=>({children:t}));b(()=>E(n,j,ae))});let F=O(`div`,k);h(k,F),o(F,`space-y-3`);let I=O(`div`,F);h(F,I);let oe=O(`h3`,I);h(I,oe),o(oe,`text-lg font-semibold`),h(oe,P(`2. named slot`));let se=O(`p`,I);h(I,se),o(se,`text-sm opacity-70`),h(se,P(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let ce=v(`rue:component:anchor`);h(F,ce),A(()=>{let t=e(()=>{let e=u(),t=O(`p`,e);return h(e,t),h(t,P(`中间这段还是 default slot。`)),e}),n=e(()=>{let e=u(),t=O(`span`,e);return h(e,t),o(t,`font-semibold text-base-content`),h(t,P(`自定义标题`)),e}),r=e(()=>{let e=u(),t=O(`span`,e);return h(e,t),h(t,P(`自定义底部`)),e}),a=i(fe,()=>({__rue_slots:{default:t,title:n,footer:r},children:t}));b(()=>E(a,F,ce))});let L=O(`div`,k);h(k,L),o(L,`space-y-3`);let R=O(`div`,L);h(L,R);let ue=O(`h3`,R);h(R,ue),o(ue,`text-lg font-semibold`),h(ue,P(`3. scoped slot`));let de=O(`p`,R);h(R,de),o(de,`text-sm opacity-70`),h(de,P(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=v(`rue:component:anchor`);h(L,he),A(()=>{let t=i(pe,()=>({item:ee(t=>e(e=>{let n=re().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0],i=r.parentNode,a=n.childNodes[1].childNodes[0],o=a.parentNode;return A(()=>{let e=t.label;b(()=>E(e,i,r))}),A(()=>{let e=t.value;b(()=>E(e,o,a))}),n}))}));b(()=>E(t,L,he))});let ge=O(`div`,C);h(C,ge),M(ge,`role`,`alert`),o(ge,`alert alert-soft`);let _e=O(`span`,ge);h(ge,_e),h(_e,P(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=O(`div`,n);h(n,ve),o(ve,`card bg-base-100 shadow`);let z=O(`div`,ve);h(ve,z),o(z,`card-body gap-5`);let B=O(`div`,z);h(z,B),o(B,`flex flex-wrap items-center justify-between gap-3`);let ye=O(`div`,B);h(B,ye);let be=O(`h2`,ye);h(ye,be),o(be,`card-title`),h(be,P(`再看完整例子`));let xe=O(`p`,ye);h(ye,xe),o(xe,`text-sm opacity-70`),h(xe,P(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let V=O(`div`,B);h(B,V),o(V,`flex flex-wrap gap-2`);let Se=O(`button`,V);h(V,Se),A(()=>{o(Se,`btn btn-sm ${r.value?`btn-primary`:`btn-outline`}`)});let Ce=e=>{let t=()=>{r.value=!r.value};typeof t==`function`&&t(e)};Se.addEventListener(`click`,Ce),s(()=>Se.removeEventListener(`click`,Ce)),h(Se,P(`title slot`));let we=O(`button`,V);h(V,we),A(()=>{o(we,`btn btn-sm ${d.value?`btn-primary`:`btn-outline`}`)});let Te=e=>{let t=()=>{d.value=!d.value};typeof t==`function`&&t(e)};we.addEventListener(`click`,Te),s(()=>we.removeEventListener(`click`,Te)),h(we,P(`actions slot`));let Ee=O(`button`,V);h(V,Ee),A(()=>{o(Ee,`btn btn-sm ${f.value?`btn-primary`:`btn-outline`}`)});let De=e=>{let t=()=>{f.value=!f.value};typeof t==`function`&&t(e)};Ee.addEventListener(`click`,De),s(()=>Ee.removeEventListener(`click`,De)),h(Ee,P(`default slot`));let Oe=O(`button`,V);h(V,Oe),A(()=>{o(Oe,`btn btn-sm ${y.value?`btn-primary`:`btn-outline`}`)});let ke=e=>{let t=()=>{y.value=!y.value};typeof t==`function`&&t(e)};Oe.addEventListener(`click`,ke),s(()=>Oe.removeEventListener(`click`,ke)),h(Oe,P(`scoped row`));let H=O(`div`,z);h(z,H),o(H,`grid gap-5 xl:grid-cols-2`);let U=O(`div`,H);h(H,U),o(U,`space-y-3`);let W=O(`div`,U);h(U,W),o(W,`flex items-center justify-between gap-3`);let Ae=O(`h3`,W);h(W,Ae),o(Ae,`text-lg font-semibold`),h(Ae,P(`传入 slot 之后`));let je=O(`span`,W);h(W,je),o(je,`badge badge-success badge-outline`),h(je,P(`自定义内容生效`));let Me=v(`rue:component:anchor`);h(U,Me),A(()=>{let t=e(()=>{let e=u(),t=O(`div`,e);h(e,t),o(t,`space-y-3`);let n=O(`p`,t);h(t,n),o(n,`text-sm leading-6`),h(n,P(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let r=O(`div`,t);h(t,r),o(r,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let i=O(`div`,r);h(r,i),o(i,`stat py-3`);let a=O(`div`,i);h(i,a),o(a,`stat-title`),h(a,P(`可用率`));let s=O(`div`,i);h(i,s),o(s,`stat-value text-2xl`),h(s,P(`99.98%`));let c=O(`div`,i);h(i,c),o(c,`stat-desc`),h(c,P(`过去 24 小时`));let l=O(`div`,r);h(r,l),o(l,`stat py-3`);let d=O(`div`,l);h(l,d),o(d,`stat-title`),h(d,P(`峰值请求`));let f=O(`div`,l);h(l,f),o(f,`stat-value text-2xl`),h(f,P(`18k`));let p=O(`div`,l);return h(l,p),o(p,`stat-desc`),h(p,P(`每分钟`)),e}),n=e(()=>{let e=u(),t=O(`button`,e);return h(e,t),o(t,`btn btn-sm btn-primary`),h(t,P(`刷新`)),e}),a=i(me,()=>({row:y.value?t=>e(e=>{let n=ie().content.cloneNode(!0).firstChild,r=n.childNodes[1],i=n.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,s=n.childNodes[1].childNodes[0],c=s.parentNode;return A(()=>{o(r,`badge ${le[t.tone]}`)}),A(()=>{let e=t.label;b(()=>E(e,a,i))}),A(()=>{let e=t.value;b(()=>E(e,c,s))}),n}):void 0,__rue_slots:{default:f.value?t:void 0,title:r.value?[c(Object.assign(e=>{let t=_(`h2`,e);return t.className=`card-title`,S(t,l(`支付面板`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),c(Object.assign(e=>{let t=_(`p`,e);return t.className=`text-sm opacity-70`,S(t,l(`Template slot="title" 可以一次传多个兄弟节点。`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))]:void 0,actions:d.value?n:void 0},children:f.value?t:void 0}));b(()=>E(a,U,Me))});let G=O(`div`,H);h(H,G),o(G,`space-y-3`);let K=O(`div`,G);h(G,K),o(K,`flex items-center justify-between gap-3`);let Ne=O(`h3`,K);h(K,Ne),o(Ne,`text-lg font-semibold`),h(Ne,P(`未传 slot 时`));let Pe=O(`span`,K);h(K,Pe),o(Pe,`badge badge-warning badge-outline`),h(Pe,P(`fallback 接管`));let Fe=v(`rue:component:anchor`);h(G,Fe);let Ie=i(me,()=>({}));E(Ie,G,Fe);let q=O(`div`,n);h(n,q),o(q,`grid gap-4 xl:grid-cols-2`);let Le=O(`div`,q);h(q,Le),o(Le,`card bg-base-100 shadow`);let J=O(`div`,Le);h(Le,J),o(J,`card-body gap-3`);let Re=O(`h2`,J);h(J,Re),o(Re,`card-title`),h(Re,P(`当前推荐写法`));let Y=O(`ul`,J);h(J,Y),o(Y,`list rounded-box border border-base-300 bg-base-100`);let X=O(`li`,Y);h(Y,X),o(X,`list-row`);let ze=O(`div`,X);h(X,ze),o(ze,`font-medium`),h(ze,P(`default slot`));let Be=O(`div`,X);h(X,Be),o(Be,`opacity-70`),h(Be,P(`直接写在组件标签内部，最终会落到 props.children。`));let Z=O(`li`,Y);h(Y,Z),o(Z,`list-row`);let Ve=O(`div`,Z);h(Z,Ve),o(Ve,`font-medium`),h(Ve,P(`named slot`));let He=O(`div`,Z);h(Z,He),o(He,`opacity-70`),h(He,P(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let Ue=O(`li`,Y);h(Y,Ue),o(Ue,`list-row`);let We=O(`div`,Ue);h(Ue,We),o(We,`font-medium`),h(We,P(`scoped slot`));let Ge=O(`div`,Ue);h(Ue,Ge),o(Ge,`opacity-70`),h(Ge,P(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Ke=O(`li`,Y);h(Y,Ke),o(Ke,`list-row`);let qe=O(`div`,Ke);h(Ke,qe),o(qe,`font-medium`),h(qe,P(`fallback`));let Je=O(`div`,Ke);h(Ke,Je),o(Je,`opacity-70`),h(Je,P(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ye=O(`div`,q);h(q,Ye),o(Ye,`card bg-base-100 shadow`);let Q=O(`div`,Ye);h(Ye,Q),o(Q,`card-body gap-3`);let Xe=O(`h2`,Q);h(Q,Xe),o(Xe,`card-title`),h(Xe,P(`这页实际演示的协议`));let Ze=O(`div`,Q);h(Q,Ze),M(Ze,`role`,`alert`),o(Ze,`alert alert-soft`);let Qe=O(`span`,Ze);h(Ze,Qe),h(Qe,P(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=O(`div`,Q);h(Q,$),o($,`mockup-code text-sm`);let $e=O(`pre`,$);h($,$e),M($e,`data-prefix`,`1`);let et=O(`code`,$e);h($e,et);let tt=p(et);h(et,tt),a(tt,`<Slot source={props} name="title">fallback</Slot>`);let nt=O(`pre`,$);h($,nt),M(nt,`data-prefix`,`2`);let rt=O(`code`,nt);h(nt,rt);let it=p(rt);h(rt,it),a(it,`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`);let at=O(`pre`,$);h($,at),M(at,`data-prefix`,`3`);let ot=O(`code`,at);h(at,ot);let st=p(ot);h(ot,st),a(st,`<button slot="actions">刷新</button>`);let ct=O(`pre`,$);h($,ct),M(ct,`data-prefix`,`4`);let lt=O(`code`,ct);h(ct,lt);let ut=p(lt);h(lt,ut),a(ut,`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`);let dt=O(`p`,Q);return h(Q,dt),o(dt,`text-sm opacity-70 leading-6`),h(dt,P(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),t},!0):``;b(()=>E(n,k,D))}),n});return i(ne,()=>({children:[c(e=>oe().content.cloneNode(!0).firstChild),c(Object.assign(e=>{let r=se().content.cloneNode(!0).firstChild,i=r.childNodes[0],a=r.childNodes[1];i.setAttribute(`role`,`tab`);let o;A(()=>{let e=`tab ${t.value===`preview`?`tab-active`:``}`,n=e==null?``:String(e);Object.is(o,n)||(o=n,i.className=n)});let s=e=>{let n=()=>{t.value=`preview`};typeof n==`function`&&n(e)};i.addEventListener(`click`,s),n(()=>i.removeEventListener(`click`,s)),a.setAttribute(`role`,`tab`);let c;A(()=>{let e=`tab ${t.value===`code`?`tab-active`:``}`,n=e==null?``:String(e);Object.is(c,n)||(c=n,a.className=n)});let l=e=>{let n=()=>{t.value=`code`};typeof n==`function`&&n(e)};return a.addEventListener(`click`,l),n(()=>a.removeEventListener(`click`,l)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),m]}))})(),e=>g(()=>{})))};export{he as default};
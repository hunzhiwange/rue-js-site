import{Q as e,Vt as t,Xt as n,Z as r,at as i,bt as a,dt as o,it as s,l as c,nt as l,o as u,on as d,pt as f,rt as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as y,o as b,s as x}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as S}from"./Code-C5NjdoiC.js";import{r as C}from"./SidebarPlaygroundExample-DpItFif-.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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
/>;`,E=`import { Slot, Template, type FC } from '@rue-js/rue';

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

export default Demo;`,D=n=>c(r=>{let i=p(`section`,r);f(i,`card border border-base-300 bg-base-100 shadow-sm`);let a=p(`div`,i);e(i,a),f(a,`card-body gap-3`);let o=p(`div`,a);e(a,o),f(o,`space-y-1 border-b border-base-300 pb-3`);let d=g(`rue:component:anchor`);e(o,d);let _=c(()=>{let t=l(),n=p(`h3`,t);e(t,n),f(n,`font-semibold`),e(n,s(`默认标题`));let r=p(`p`,t);return e(t,r),f(r,`text-sm opacity-70`),e(r,s(`没传 title slot，就显示这里。`)),t});t(()=>{let e=m(x,{source:n,name:`title`,children:_});h(()=>u(e,o,d))});let v=p(`div`,a);e(a,v),f(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let y=g(`rue:component:anchor`);e(v,y);let b=c(()=>{let t=l(),n=p(`p`,t);return e(t,n),f(n,`opacity-70`),e(n,s(`没有传 default slot，所以这里显示 fallback。`)),t});t(()=>{let e=m(x,{source:n,children:b});h(()=>u(e,v,y))});let S=p(`div`,a);e(a,S),f(S,`text-sm opacity-70`);let C=g(`rue:component:anchor`);return e(S,C),t(()=>{let e=m(x,{source:n,name:`footer`,children:`默认底部`});h(()=>u(e,S,C))}),i}),ne=n=>c(r=>{let s=p(`ul`,r);f(s,`list rounded-box border border-base-300 bg-base-100`);let d=g(`rue:list:start`),_=g(`rue:list:end`);e(s,d),e(s,_);let y=new Map;return t(()=>{y=v({items:w||[],getKey:(e,t)=>e.label,elements:y,parent:d.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:d,renderItem:(r,s,d,_,v)=>{u(c(()=>{let s=l(),d=p(`li`,s);e(s,d),t(()=>{o(d,`key`,String(r.label))}),f(d,`list-row items-center gap-3`);let _=g(`rue:component:anchor`);e(d,_);let v=c(()=>{let n=l(),o=p(`div`,n);e(n,o),f(o,`flex w-full items-center justify-between gap-3`);let s=p(`span`,o);e(o,s),f(s,`font-medium`);let c=g(`rue:slot:anchor`);e(s,c),t(()=>{let e=r.label;h(()=>u(e,s,c))});let d=p(`span`,o);e(o,d),f(d,`badge badge-outline`);let m=i(d);return e(d,m),t(()=>{a(m,r.value)}),n});return t(()=>{let e=m(x,{source:n,name:`item`,props:r,children:v});h(()=>u(e,d,_))}),s}),s,d)}})}),s}),re=n=>c(r=>{let d=p(`section`,r);f(d,`card border border-base-300 bg-base-100 shadow-sm`);let _=p(`div`,d);e(d,_),f(_,`card-body gap-4`);let y=p(`div`,_);e(_,y),f(y,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let b=p(`div`,y);e(y,b),f(b,`space-y-1`);let S=g(`rue:component:anchor`);e(b,S);let C=c(()=>{let t=l(),n=p(`h2`,t);e(t,n),f(n,`card-title`),e(n,s(`默认标题`));let r=p(`p`,t);return e(t,r),f(r,`text-sm opacity-70`),e(r,s(`没有提供 title slot 时，会显示这段 fallback。`)),t});t(()=>{let e=m(x,{source:n,name:`title`,children:C});h(()=>u(e,b,S))});let w=p(`div`,y);e(y,w),f(w,`flex items-center gap-2`);let T=g(`rue:component:anchor`);e(w,T);let E=c(()=>{let t=l(),n=p(`span`,t);return e(t,n),f(n,`badge badge-outline`),e(n,s(`fallback action`)),t});t(()=>{let e=m(x,{source:n,name:`actions`,children:E});h(()=>u(e,w,T))});let D=p(`div`,_);e(_,D),f(D,`rounded-box bg-base-200 p-4`);let ne=g(`rue:component:anchor`);e(D,ne);let re=c(()=>{let t=l(),n=p(`p`,t);return e(t,n),f(n,`opacity-70`),e(n,s(`默认插槽为空时，这里显示主体内容的 fallback。`)),t});t(()=>{let e=m(x,{source:n,children:re});h(()=>u(e,D,ne))});let O=p(`ul`,_);e(_,O),f(O,`list rounded-box border border-base-300 bg-base-100`);let k=g(`rue:list:start`),A=g(`rue:list:end`);e(O,k),e(O,A);let j=new Map;return t(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(r,s,d,_,v)=>{u(c(()=>{let s=l(),d=p(`li`,s);e(s,d),t(()=>{o(d,`key`,String(r.label))}),f(d,`list-row items-center gap-3`);let _=g(`rue:component:anchor`);e(d,_);let v=c(()=>{let n=l(),o=p(`div`,n);e(n,o),f(o,`flex w-full items-center justify-between gap-3`);let s=p(`div`,o);e(o,s),f(s,`font-medium`);let c=g(`rue:slot:anchor`);e(s,c),t(()=>{let e=r.label;h(()=>u(e,s,c))});let d=p(`span`,o);e(o,d),t(()=>{f(d,`badge ${ee[r.tone]}`)});let m=i(d);return e(d,m),t(()=>{a(m,r.value)}),n});return t(()=>{let e=m(x,{source:n,name:`row`,props:r,children:v});h(()=>u(e,d,_))}),s}),s,d)}})}),d}),O=()=>{let{activeTab:v,showTitleSlot:x,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>d(()=>({activeTab:_(`ref:1:0`,()=>n(`preview`)),showTitleSlot:_(`ref:1:1`,()=>n(!0)),showActionsSlot:_(`ref:1:2`,()=>n(!0)),showDefaultSlot:_(`ref:1:3`,()=>n(!0)),showScopedRow:_(`ref:1:4`,()=>n(!0))})));return c(n=>{let d=l(),_=g(`rue:component:anchor`);return e(d,_),u(m(C,{children:c(()=>{let n=l(),d=p(`h1`,n);e(n,d),f(d,`text-5xl font-semibold mb-4 md:mb-4`),e(d,s(`插槽 Slots（default / named / scoped）`));let _=p(`div`,n);e(n,_),o(_,`role`,`tablist`),f(_,`tabs tabs-box`);let C=p(`button`,_);e(_,C),o(C,`role`,`tab`),t(()=>{f(C,`tab ${v.value===`preview`?`tab-active`:``}`)}),r(C,`click`,()=>{v.value=`preview`}),e(C,s(`效果`));let k=p(`button`,_);e(_,k),o(k,`role`,`tab`),t(()=>{f(k,`tab ${v.value===`code`?`tab-active`:``}`)}),r(k,`click`,()=>{v.value=`code`}),e(k,s(`代码`));let A=p(`div`,n);e(n,A),f(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=g(`rue:slot:anchor`);e(A,j),t(()=>{let n=v.value===`code`?c(()=>{let n=l(),r=p(`div`,n);e(n,r),f(r,`grid gap-6`);let i=p(`div`,r);e(r,i),f(i,`card bg-base-100 shadow overflow-auto`);let a=p(`div`,i);e(i,a),f(a,`card-body p-0`);let o=p(`div`,a);e(a,o),f(o,`border-b border-base-300 px-4 py-3`);let c=p(`h2`,o);e(o,c),f(c,`card-title text-lg`),e(c,s(`先看最小例子`));let d=p(`p`,o);e(o,d),f(d,`text-sm opacity-70`),e(d,s(`先只看 default、named、scoped 各自最短怎么写。`));let _=g(`rue:component:anchor`);e(a,_),t(()=>{let e=m(S,{className:`h-[420px]`,lang:`tsx`,code:T});h(()=>u(e,a,_))});let v=p(`div`,r);e(r,v),f(v,`card bg-base-100 shadow overflow-auto`);let y=p(`div`,v);e(v,y),f(y,`card-body p-0`);let b=p(`div`,y);e(y,b),f(b,`border-b border-base-300 px-4 py-3`);let x=p(`h2`,b);e(b,x),f(x,`card-title text-lg`),e(x,s(`再看完整例子`));let C=p(`p`,b);e(b,C),f(C,`text-sm opacity-70`),e(C,s(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=g(`rue:component:anchor`);return e(y,ee),t(()=>{let e=m(S,{className:`h-[760px]`,lang:`tsx`,code:E});h(()=>u(e,y,ee))}),n}):``;h(()=>u(n,A,j))}),e(A,s(` `));let M=g(`rue:slot:anchor`);return e(A,M),t(()=>{let n=v.value===`preview`?c(()=>{let n=l(),d=p(`div`,n);e(n,d),f(d,`grid gap-6`);let _=p(`div`,d);e(d,_),o(_,`role`,`alert`),f(_,`alert alert-success`);let v=p(`span`,_);e(_,v),e(v,s(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=p(`div`,d);e(d,S),f(S,`card bg-base-100 shadow`);let C=p(`div`,S);e(S,C),f(C,`card-body gap-5`);let T=p(`div`,C);e(C,T);let E=p(`h2`,T);e(T,E),f(E,`card-title`),e(E,s(`先看最小例子`));let k=p(`p`,T);e(T,k),f(k,`text-sm opacity-70`),e(k,s(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=p(`div`,C);e(C,A),f(A,`grid gap-4 xl:grid-cols-3`);let j=p(`div`,A);e(A,j),f(j,`space-y-3`);let M=p(`div`,j);e(j,M);let ie=p(`h3`,M);e(M,ie),f(ie,`text-lg font-semibold`),e(ie,s(`1. default slot`));let ae=p(`p`,M);e(M,ae),f(ae,`text-sm opacity-70`),e(ae,s(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=g(`rue:component:anchor`);e(j,oe),u(m(D,{children:c(()=>{let t=l(),n=p(`p`,t);return e(t,n),e(n,s(`这段内容就是 default slot。`)),t})}),j,oe);let N=p(`div`,A);e(A,N),f(N,`space-y-3`);let P=p(`div`,N);e(N,P);let se=p(`h3`,P);e(P,se),f(se,`text-lg font-semibold`),e(se,s(`2. named slot`));let ce=p(`p`,P);e(P,ce),f(ce,`text-sm opacity-70`),e(ce,s(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=g(`rue:component:anchor`);e(N,le);let ue=c(()=>{let t=l(),n=p(`p`,t);return e(t,n),e(n,s(`中间这段还是 default slot。`)),t}),de=c(()=>{let t=l(),n=p(`span`,t);return e(t,n),f(n,`font-semibold text-base-content`),e(n,s(`自定义标题`)),t}),fe=c(()=>{let t=l(),n=p(`span`,t);return e(t,n),e(n,s(`自定义底部`)),t});t(()=>{let e=m(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});h(()=>u(e,N,le))});let F=p(`div`,A);e(A,F),f(F,`space-y-3`);let I=p(`div`,F);e(F,I);let pe=p(`h3`,I);e(I,pe),f(pe,`text-lg font-semibold`),e(pe,s(`3. scoped slot`));let me=p(`p`,I);e(I,me),f(me,`text-sm opacity-70`),e(me,s(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=g(`rue:component:anchor`);e(F,he),u(m(ne,{item:e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[y(`div`,{className:`font-medium`,children:e.label}),y(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),y(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=p(`div`,C);e(C,ge),o(ge,`role`,`alert`),f(ge,`alert alert-soft`);let _e=p(`span`,ge);e(ge,_e),e(_e,s(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=p(`div`,d);e(d,ve),f(ve,`card bg-base-100 shadow`);let L=p(`div`,ve);e(ve,L),f(L,`card-body gap-5`);let R=p(`div`,L);e(L,R),f(R,`flex flex-wrap items-center justify-between gap-3`);let ye=p(`div`,R);e(R,ye);let be=p(`h2`,ye);e(ye,be),f(be,`card-title`),e(be,s(`再看完整例子`));let xe=p(`p`,ye);e(ye,xe),f(xe,`text-sm opacity-70`),e(xe,s(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=p(`div`,R);e(R,z),f(z,`flex flex-wrap gap-2`);let Se=p(`button`,z);e(z,Se),t(()=>{f(Se,`btn btn-sm ${x.value?`btn-primary`:`btn-outline`}`)}),r(Se,`click`,()=>{x.value=!x.value}),e(Se,s(`title slot`));let Ce=p(`button`,z);e(z,Ce),t(()=>{f(Ce,`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`)}),r(Ce,`click`,()=>{te.value=!te.value}),e(Ce,s(`actions slot`));let we=p(`button`,z);e(z,we),t(()=>{f(we,`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`)}),r(we,`click`,()=>{w.value=!w.value}),e(we,s(`default slot`));let Te=p(`button`,z);e(z,Te),t(()=>{f(Te,`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`)}),r(Te,`click`,()=>{O.value=!O.value}),e(Te,s(`scoped row`));let B=p(`div`,L);e(L,B),f(B,`grid gap-5 xl:grid-cols-2`);let V=p(`div`,B);e(B,V),f(V,`space-y-3`);let H=p(`div`,V);e(V,H),f(H,`flex items-center justify-between gap-3`);let Ee=p(`h3`,H);e(H,Ee),f(Ee,`text-lg font-semibold`),e(Ee,s(`传入 slot 之后`));let De=p(`span`,H);e(H,De),f(De,`badge badge-success badge-outline`),e(De,s(`自定义内容生效`));let Oe=g(`rue:component:anchor`);e(V,Oe);let ke=c(()=>{let t=l(),n=p(`div`,t);e(t,n),f(n,`space-y-3`);let r=p(`p`,n);e(n,r),f(r,`text-sm leading-6`),e(r,s(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let i=p(`div`,n);e(n,i),f(i,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let a=p(`div`,i);e(i,a),f(a,`stat py-3`);let o=p(`div`,a);e(a,o),f(o,`stat-title`),e(o,s(`可用率`));let c=p(`div`,a);e(a,c),f(c,`stat-value text-2xl`),e(c,s(`99.98%`));let u=p(`div`,a);e(a,u),f(u,`stat-desc`),e(u,s(`过去 24 小时`));let d=p(`div`,i);e(i,d),f(d,`stat py-3`);let m=p(`div`,d);e(d,m),f(m,`stat-title`),e(m,s(`峰值请求`));let h=p(`div`,d);e(d,h),f(h,`stat-value text-2xl`),e(h,s(`18k`));let g=p(`div`,d);return e(d,g),f(g,`stat-desc`),e(g,s(`每分钟`)),t}),Ae=c(()=>{let t=l(),n=p(`h2`,t);e(t,n),f(n,`card-title`),e(n,s(`支付面板`));let r=p(`p`,t);return e(t,r),f(r,`text-sm opacity-70`),e(r,s(`Template slot="title" 可以一次传多个兄弟节点。`)),t}),je=c(()=>{let t=l(),n=p(`button`,t);return e(t,n),f(n,`btn btn-sm btn-primary`),e(n,s(`刷新`)),t});t(()=>{let e=m(re,{row:O.value?e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[y(`div`,{className:`font-medium`,children:e.label}),y(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),y(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:x.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});h(()=>u(e,V,Oe))});let U=p(`div`,B);e(B,U),f(U,`space-y-3`);let W=p(`div`,U);e(U,W),f(W,`flex items-center justify-between gap-3`);let Me=p(`h3`,W);e(W,Me),f(Me,`text-lg font-semibold`),e(Me,s(`未传 slot 时`));let Ne=p(`span`,W);e(W,Ne),f(Ne,`badge badge-warning badge-outline`),e(Ne,s(`fallback 接管`));let Pe=g(`rue:component:anchor`);e(U,Pe),u(m(re,{}),U,Pe);let G=p(`div`,d);e(d,G),f(G,`grid gap-4 xl:grid-cols-2`);let Fe=p(`div`,G);e(G,Fe),f(Fe,`card bg-base-100 shadow`);let K=p(`div`,Fe);e(Fe,K),f(K,`card-body gap-3`);let Ie=p(`h2`,K);e(K,Ie),f(Ie,`card-title`),e(Ie,s(`当前推荐写法`));let q=p(`ul`,K);e(K,q),f(q,`list rounded-box border border-base-300 bg-base-100`);let J=p(`li`,q);e(q,J),f(J,`list-row`);let Le=p(`div`,J);e(J,Le),f(Le,`font-medium`),e(Le,s(`default slot`));let Re=p(`div`,J);e(J,Re),f(Re,`opacity-70`),e(Re,s(`直接写在组件标签内部，最终会落到 props.children。`));let Y=p(`li`,q);e(q,Y),f(Y,`list-row`);let ze=p(`div`,Y);e(Y,ze),f(ze,`font-medium`),e(ze,s(`named slot`));let Be=p(`div`,Y);e(Y,Be),f(Be,`opacity-70`),e(Be,s(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=p(`li`,q);e(q,X),f(X,`list-row`);let Ve=p(`div`,X);e(X,Ve),f(Ve,`font-medium`),e(Ve,s(`scoped slot`));let He=p(`div`,X);e(X,He),f(He,`opacity-70`),e(He,s(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=p(`li`,q);e(q,Z),f(Z,`list-row`);let Ue=p(`div`,Z);e(Z,Ue),f(Ue,`font-medium`),e(Ue,s(`fallback`));let We=p(`div`,Z);e(Z,We),f(We,`opacity-70`),e(We,s(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=p(`div`,G);e(G,Ge),f(Ge,`card bg-base-100 shadow`);let Q=p(`div`,Ge);e(Ge,Q),f(Q,`card-body gap-3`);let Ke=p(`h2`,Q);e(Q,Ke),f(Ke,`card-title`),e(Ke,s(`这页实际演示的协议`));let qe=p(`div`,Q);e(Q,qe),o(qe,`role`,`alert`),f(qe,`alert alert-soft`);let Je=p(`span`,qe);e(qe,Je),e(Je,s(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=p(`div`,Q);e(Q,$),f($,`mockup-code text-sm`);let Ye=p(`pre`,$);e($,Ye),o(Ye,`data-prefix`,`1`);let Xe=p(`code`,Ye);e(Ye,Xe);let Ze=i(Xe);e(Xe,Ze),a(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=p(`pre`,$);e($,Qe),o(Qe,`data-prefix`,`2`);let $e=p(`code`,Qe);e(Qe,$e);let et=i($e);e($e,et),a(et,`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`);let tt=p(`pre`,$);e($,tt),o(tt,`data-prefix`,`3`);let nt=p(`code`,tt);e(tt,nt);let rt=i(nt);e(nt,rt),a(rt,`<button slot="actions">刷新</button>`);let it=p(`pre`,$);e($,it),o(it,`data-prefix`,`4`);let at=p(`code`,it);e(it,at);let ot=i(at);e(at,ot),a(ot,`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`);let st=p(`p`,Q);return e(Q,st),f(st,`text-sm opacity-70 leading-6`),e(st,s(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),n}):``;h(()=>u(n,A,M))}),n})}),d,_),d})};export{O as default};
import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,ht as u,l as d,s as f,t as p,wt as m,yt as h,z as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Slot-DUv3MG53.js";import{t as b}from"./Code-BCLFq1E3.js";import{n as x,t as S}from"./src-BLzF0BqW.js";import{t as C}from"./SidebarPlaygroundExample-CdMvdgT7.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

const SimpleScopeList: FC<{
  item?: (props: { label: string; value: string }) => any;
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

export default Demo;`,D=a=>d(c=>{let l=s(`section`,c);e(l,`card border border-base-300 bg-base-100 shadow-sm`);let u=s(`div`,l);t(l,u),e(u,`card-body gap-3`);let m=s(`div`,u);t(u,m),e(m,`space-y-1 border-b border-base-300 pb-3`);let g=i(`rue:component:anchor`);t(m,g);let _=d(()=>{let n=o(),i=s(`h3`,n);t(n,i),e(i,`font-semibold`),t(i,r(`默认标题`));let a=s(`p`,n);return t(n,a),e(a,`text-sm opacity-70`),t(a,r(`没传 title slot，就显示这里。`)),n});n(()=>{let e=p(y,{source:a,name:`title`,children:_});h(()=>f(e,m,g))});let v=s(`div`,u);t(u,v),e(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let b=i(`rue:component:anchor`);t(v,b);let x=d(()=>{let n=o(),i=s(`p`,n);return t(n,i),e(i,`opacity-70`),t(i,r(`没有传 default slot，所以这里显示 fallback。`)),n});n(()=>{let e=p(y,{source:a,children:x});h(()=>f(e,v,b))});let S=s(`div`,u);t(u,S),e(S,`text-sm opacity-70`);let C=i(`rue:component:anchor`);return t(S,C),n(()=>{let e=p(y,{source:a,name:`footer`,children:`默认底部`});h(()=>f(e,S,C))}),l}),ne=r=>d(u=>{let m=s(`ul`,u);e(m,`list rounded-box border border-base-300 bg-base-100`);let g=i(`rue:list:start`),_=i(`rue:list:end`);t(m,g),t(m,_);let b=new Map;return n(()=>{b=v({items:w||[],getKey:(e,t)=>e.label,elements:b,parent:g.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:g,renderItem:(u,m,g,_,v)=>{f(d(()=>{let m=o(),g=s(`li`,m);t(m,g),n(()=>{c(g,`key`,String(u.label))}),e(g,`list-row items-center gap-3`);let _=i(`rue:component:anchor`);t(g,_);let v=d(()=>{let r=o(),c=s(`div`,r);t(r,c),e(c,`flex w-full items-center justify-between gap-3`);let d=s(`span`,c);t(c,d),e(d,`font-medium`);let p=i(`rue:slot:anchor`);t(d,p),n(()=>{let e=u.label;h(()=>f(e,d,p))});let m=s(`span`,c);t(c,m),e(m,`badge badge-outline`);let g=a(m);return t(m,g),n(()=>{l(g,u.value)}),r});return n(()=>{let e=p(y,{source:r,name:`item`,props:u,children:v});h(()=>f(e,g,_))}),m}),m,g)}})}),m}),re=u=>d(m=>{let g=s(`section`,m);e(g,`card border border-base-300 bg-base-100 shadow-sm`);let _=s(`div`,g);t(g,_),e(_,`card-body gap-4`);let b=s(`div`,_);t(_,b),e(b,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let x=s(`div`,b);t(b,x),e(x,`space-y-1`);let S=i(`rue:component:anchor`);t(x,S);let C=d(()=>{let n=o(),i=s(`h2`,n);t(n,i),e(i,`card-title`),t(i,r(`默认标题`));let a=s(`p`,n);return t(n,a),e(a,`text-sm opacity-70`),t(a,r(`没有提供 title slot 时，会显示这段 fallback。`)),n});n(()=>{let e=p(y,{source:u,name:`title`,children:C});h(()=>f(e,x,S))});let w=s(`div`,b);t(b,w),e(w,`flex items-center gap-2`);let T=i(`rue:component:anchor`);t(w,T);let E=d(()=>{let n=o(),i=s(`span`,n);return t(n,i),e(i,`badge badge-outline`),t(i,r(`fallback action`)),n});n(()=>{let e=p(y,{source:u,name:`actions`,children:E});h(()=>f(e,w,T))});let D=s(`div`,_);t(_,D),e(D,`rounded-box bg-base-200 p-4`);let ne=i(`rue:component:anchor`);t(D,ne);let re=d(()=>{let n=o(),i=s(`p`,n);return t(n,i),e(i,`opacity-70`),t(i,r(`默认插槽为空时，这里显示主体内容的 fallback。`)),n});n(()=>{let e=p(y,{source:u,children:re});h(()=>f(e,D,ne))});let O=s(`ul`,_);t(_,O),e(O,`list rounded-box border border-base-300 bg-base-100`);let k=i(`rue:list:start`),A=i(`rue:list:end`);t(O,k),t(O,A);let j=new Map;return n(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(r,m,g,_,v)=>{f(d(()=>{let m=o(),g=s(`li`,m);t(m,g),n(()=>{c(g,`key`,String(r.label))}),e(g,`list-row items-center gap-3`);let _=i(`rue:component:anchor`);t(g,_);let v=d(()=>{let c=o(),u=s(`div`,c);t(c,u),e(u,`flex w-full items-center justify-between gap-3`);let d=s(`div`,u);t(u,d),e(d,`font-medium`);let p=i(`rue:slot:anchor`);t(d,p),n(()=>{let e=r.label;h(()=>f(e,d,p))});let m=s(`span`,u);t(u,m),n(()=>{e(m,String(`badge ${ee[r.tone]}`))});let g=a(m);return t(m,g),n(()=>{l(g,r.value)}),c});return n(()=>{let e=p(y,{source:u,name:`row`,props:r,children:v});h(()=>f(e,g,_))}),m}),m,g)}})}),g}),O=()=>{let{activeTab:v,showTitleSlot:y,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>m(()=>({activeTab:_(`ref:1:0`,()=>u(`preview`)),showTitleSlot:_(`ref:1:1`,()=>u(!0)),showActionsSlot:_(`ref:1:2`,()=>u(!0)),showDefaultSlot:_(`ref:1:3`,()=>u(!0)),showScopedRow:_(`ref:1:4`,()=>u(!0))})));return d(u=>{let m=o(),_=i(`rue:component:anchor`);return t(m,_),f(p(C,{children:d(()=>{let u=o(),m=s(`h1`,u);t(u,m),e(m,`text-5xl font-semibold mb-4 md:mb-4`),t(m,r(`插槽 Slots（default / named / scoped）`));let _=s(`div`,u);t(u,_),c(_,`role`,`tablist`),e(_,`tabs tabs-box`);let C=s(`button`,_);t(_,C),c(C,`role`,`tab`),n(()=>{e(C,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),g(C,`click`,()=>{v.value=`preview`}),t(C,r(`效果`));let k=s(`button`,_);t(_,k),c(k,`role`,`tab`),n(()=>{e(k,String(`tab ${v.value===`code`?`tab-active`:``}`))}),g(k,`click`,()=>{v.value=`code`}),t(k,r(`代码`));let A=s(`div`,u);t(u,A),e(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=i(`rue:slot:anchor`);t(A,j),n(()=>{let a=v.value===`code`?d(()=>{let a=o(),c=s(`div`,a);t(a,c),e(c,`grid gap-6`);let l=s(`div`,c);t(c,l),e(l,`card bg-base-100 shadow overflow-auto`);let u=s(`div`,l);t(l,u),e(u,`card-body p-0`);let d=s(`div`,u);t(u,d),e(d,`border-b border-base-300 px-4 py-3`);let m=s(`h2`,d);t(d,m),e(m,`card-title text-lg`),t(m,r(`先看最小例子`));let g=s(`p`,d);t(d,g),e(g,`text-sm opacity-70`),t(g,r(`先只看 default、named、scoped 各自最短怎么写。`));let _=i(`rue:component:anchor`);t(u,_),n(()=>{let e=p(b,{className:`h-[420px]`,lang:`tsx`,code:T});h(()=>f(e,u,_))});let v=s(`div`,c);t(c,v),e(v,`card bg-base-100 shadow overflow-auto`);let y=s(`div`,v);t(v,y),e(y,`card-body p-0`);let x=s(`div`,y);t(y,x),e(x,`border-b border-base-300 px-4 py-3`);let S=s(`h2`,x);t(x,S),e(S,`card-title text-lg`),t(S,r(`再看完整例子`));let C=s(`p`,x);t(x,C),e(C,`text-sm opacity-70`),t(C,r(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=i(`rue:component:anchor`);return t(y,ee),n(()=>{let e=p(b,{className:`h-[760px]`,lang:`tsx`,code:E});h(()=>f(e,y,ee))}),a}):``;h(()=>f(a,A,j))}),t(A,r(` `));let M=i(`rue:slot:anchor`);return t(A,M),n(()=>{let u=v.value===`preview`?d(()=>{let u=o(),m=s(`div`,u);t(u,m),e(m,`grid gap-6`);let _=s(`div`,m);t(m,_),c(_,`role`,`alert`),e(_,`alert alert-success`);let v=s(`span`,_);t(_,v),t(v,r(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let b=s(`div`,m);t(m,b),e(b,`card bg-base-100 shadow`);let C=s(`div`,b);t(b,C),e(C,`card-body gap-5`);let T=s(`div`,C);t(C,T);let E=s(`h2`,T);t(T,E),e(E,`card-title`),t(E,r(`先看最小例子`));let k=s(`p`,T);t(T,k),e(k,`text-sm opacity-70`),t(k,r(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=s(`div`,C);t(C,A),e(A,`grid gap-4 xl:grid-cols-3`);let j=s(`div`,A);t(A,j),e(j,`space-y-3`);let M=s(`div`,j);t(j,M);let ie=s(`h3`,M);t(M,ie),e(ie,`text-lg font-semibold`),t(ie,r(`1. default slot`));let ae=s(`p`,M);t(M,ae),e(ae,`text-sm opacity-70`),t(ae,r(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=i(`rue:component:anchor`);t(j,oe),f(p(D,{children:d(()=>{let e=o(),n=s(`p`,e);return t(e,n),t(n,r(`这段内容就是 default slot。`)),e})}),j,oe);let N=s(`div`,A);t(A,N),e(N,`space-y-3`);let P=s(`div`,N);t(N,P);let se=s(`h3`,P);t(P,se),e(se,`text-lg font-semibold`),t(se,r(`2. named slot`));let ce=s(`p`,P);t(P,ce),e(ce,`text-sm opacity-70`),t(ce,r(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=i(`rue:component:anchor`);t(N,le);let ue=d(()=>{let e=o(),n=s(`p`,e);return t(e,n),t(n,r(`中间这段还是 default slot。`)),e}),de=d(()=>{let n=o(),i=s(`span`,n);return t(n,i),e(i,`font-semibold text-base-content`),t(i,r(`自定义标题`)),n}),fe=d(()=>{let e=o(),n=s(`span`,e);return t(e,n),t(n,r(`自定义底部`)),e});n(()=>{let e=p(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});h(()=>f(e,N,le))});let F=s(`div`,A);t(A,F),e(F,`space-y-3`);let I=s(`div`,F);t(F,I);let pe=s(`h3`,I);t(I,pe),e(pe,`text-lg font-semibold`),t(pe,r(`3. scoped slot`));let me=s(`p`,I);t(I,me),e(me,`text-sm opacity-70`),t(me,r(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=i(`rue:component:anchor`);t(F,he),f(p(ne,{item:e=>x(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[x(`div`,{children:[S(`div`,{className:`font-medium`,children:e.label}),S(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),S(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=s(`div`,C);t(C,ge),c(ge,`role`,`alert`),e(ge,`alert alert-soft`);let _e=s(`span`,ge);t(ge,_e),t(_e,r(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=s(`div`,m);t(m,ve),e(ve,`card bg-base-100 shadow`);let L=s(`div`,ve);t(ve,L),e(L,`card-body gap-5`);let R=s(`div`,L);t(L,R),e(R,`flex flex-wrap items-center justify-between gap-3`);let ye=s(`div`,R);t(R,ye);let be=s(`h2`,ye);t(ye,be),e(be,`card-title`),t(be,r(`再看完整例子`));let xe=s(`p`,ye);t(ye,xe),e(xe,`text-sm opacity-70`),t(xe,r(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=s(`div`,R);t(R,z),e(z,`flex flex-wrap gap-2`);let Se=s(`button`,z);t(z,Se),n(()=>{e(Se,String(`btn btn-sm ${y.value?`btn-primary`:`btn-outline`}`))}),g(Se,`click`,()=>{y.value=!y.value}),t(Se,r(`title slot`));let Ce=s(`button`,z);t(z,Ce),n(()=>{e(Ce,String(`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`))}),g(Ce,`click`,()=>{te.value=!te.value}),t(Ce,r(`actions slot`));let we=s(`button`,z);t(z,we),n(()=>{e(we,String(`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`))}),g(we,`click`,()=>{w.value=!w.value}),t(we,r(`default slot`));let Te=s(`button`,z);t(z,Te),n(()=>{e(Te,String(`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`))}),g(Te,`click`,()=>{O.value=!O.value}),t(Te,r(`scoped row`));let B=s(`div`,L);t(L,B),e(B,`grid gap-5 xl:grid-cols-2`);let V=s(`div`,B);t(B,V),e(V,`space-y-3`);let H=s(`div`,V);t(V,H),e(H,`flex items-center justify-between gap-3`);let Ee=s(`h3`,H);t(H,Ee),e(Ee,`text-lg font-semibold`),t(Ee,r(`传入 slot 之后`));let De=s(`span`,H);t(H,De),e(De,`badge badge-success badge-outline`),t(De,r(`自定义内容生效`));let Oe=i(`rue:component:anchor`);t(V,Oe);let ke=d(()=>{let n=o(),i=s(`div`,n);t(n,i),e(i,`space-y-3`);let a=s(`p`,i);t(i,a),e(a,`text-sm leading-6`),t(a,r(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let c=s(`div`,i);t(i,c),e(c,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let l=s(`div`,c);t(c,l),e(l,`stat py-3`);let u=s(`div`,l);t(l,u),e(u,`stat-title`),t(u,r(`可用率`));let d=s(`div`,l);t(l,d),e(d,`stat-value text-2xl`),t(d,r(`99.98%`));let f=s(`div`,l);t(l,f),e(f,`stat-desc`),t(f,r(`过去 24 小时`));let p=s(`div`,c);t(c,p),e(p,`stat py-3`);let m=s(`div`,p);t(p,m),e(m,`stat-title`),t(m,r(`峰值请求`));let h=s(`div`,p);t(p,h),e(h,`stat-value text-2xl`),t(h,r(`18k`));let g=s(`div`,p);return t(p,g),e(g,`stat-desc`),t(g,r(`每分钟`)),n}),Ae=d(()=>{let n=o(),i=s(`h2`,n);t(n,i),e(i,`card-title`),t(i,r(`支付面板`));let a=s(`p`,n);return t(n,a),e(a,`text-sm opacity-70`),t(a,r(`Template slot="title" 可以一次传多个兄弟节点。`)),n}),je=d(()=>{let n=o(),i=s(`button`,n);return t(n,i),e(i,`btn btn-sm btn-primary`),t(i,r(`刷新`)),n});n(()=>{let e=p(re,{row:O.value?e=>x(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[x(`div`,{children:[S(`div`,{className:`font-medium`,children:e.label}),S(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),S(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:y.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});h(()=>f(e,V,Oe))});let U=s(`div`,B);t(B,U),e(U,`space-y-3`);let W=s(`div`,U);t(U,W),e(W,`flex items-center justify-between gap-3`);let Me=s(`h3`,W);t(W,Me),e(Me,`text-lg font-semibold`),t(Me,r(`省略 slot 之后`));let Ne=s(`span`,W);t(W,Ne),e(Ne,`badge badge-warning badge-outline`),t(Ne,r(`fallback 接管`));let Pe=i(`rue:component:anchor`);t(U,Pe),f(p(re,{}),U,Pe);let G=s(`div`,m);t(m,G),e(G,`grid gap-4 xl:grid-cols-2`);let Fe=s(`div`,G);t(G,Fe),e(Fe,`card bg-base-100 shadow`);let K=s(`div`,Fe);t(Fe,K),e(K,`card-body gap-3`);let Ie=s(`h2`,K);t(K,Ie),e(Ie,`card-title`),t(Ie,r(`当前推荐写法`));let q=s(`ul`,K);t(K,q),e(q,`list rounded-box border border-base-300 bg-base-100`);let J=s(`li`,q);t(q,J),e(J,`list-row`);let Le=s(`div`,J);t(J,Le),e(Le,`font-medium`),t(Le,r(`default slot`));let Re=s(`div`,J);t(J,Re),e(Re,`opacity-70`),t(Re,r(`直接写在组件标签内部，最终会落到 props.children。`));let Y=s(`li`,q);t(q,Y),e(Y,`list-row`);let ze=s(`div`,Y);t(Y,ze),e(ze,`font-medium`),t(ze,r(`named slot`));let Be=s(`div`,Y);t(Y,Be),e(Be,`opacity-70`),t(Be,r(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=s(`li`,q);t(q,X),e(X,`list-row`);let Ve=s(`div`,X);t(X,Ve),e(Ve,`font-medium`),t(Ve,r(`scoped slot`));let He=s(`div`,X);t(X,He),e(He,`opacity-70`),t(He,r(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=s(`li`,q);t(q,Z),e(Z,`list-row`);let Ue=s(`div`,Z);t(Z,Ue),e(Ue,`font-medium`),t(Ue,r(`fallback`));let We=s(`div`,Z);t(Z,We),e(We,`opacity-70`),t(We,r(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=s(`div`,G);t(G,Ge),e(Ge,`card bg-base-100 shadow`);let Q=s(`div`,Ge);t(Ge,Q),e(Q,`card-body gap-3`);let Ke=s(`h2`,Q);t(Q,Ke),e(Ke,`card-title`),t(Ke,r(`这页实际演示的协议`));let qe=s(`div`,Q);t(Q,qe),c(qe,`role`,`alert`),e(qe,`alert alert-soft`);let Je=s(`span`,qe);t(qe,Je),t(Je,r(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=s(`div`,Q);t(Q,$),e($,`mockup-code text-sm`);let Ye=s(`pre`,$);t($,Ye),c(Ye,`data-prefix`,`1`);let Xe=s(`code`,Ye);t(Ye,Xe);let Ze=a(Xe);t(Xe,Ze),l(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=s(`pre`,$);t($,Qe),c(Qe,`data-prefix`,`2`);let $e=s(`code`,Qe);t(Qe,$e);let et=a($e);t($e,et),l(et,`<Template slot="title">...</Template>`);let tt=s(`pre`,$);t($,tt),c(tt,`data-prefix`,`3`);let nt=s(`code`,tt);t(tt,nt);let rt=a(nt);t(nt,rt),l(rt,`<button slot="actions">刷新</button>`);let it=s(`pre`,$);t($,it),c(it,`data-prefix`,`4`);let at=s(`code`,it);t(it,at);let ot=a(at);t(at,ot),l(ot,`<SlotPanel row={(slotProps) => ...}>...</SlotPanel>`);let st=s(`p`,Q);return t(Q,st),e(st,`text-sm opacity-70 leading-6`),t(st,r(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),u}):``;h(()=>f(u,A,M))}),u})}),m,_),m})};export{O as default};
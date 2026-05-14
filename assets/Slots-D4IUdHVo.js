import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,_t as l,d as u,l as d,mt as f,ot as p,t as m,ut as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _,n as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as y}from"./Slot-CvLo6inv.js";import{n as b,t as x}from"./src-BaNG2YQR.js";import{t as S}from"./Code-CLTo4rRM.js";import{t as C}from"./SidebarPlaygroundExample-DOFGFBd1.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=i=>u(o=>{let c=r(`section`,o);n(c,`card border border-base-300 bg-base-100 shadow-sm`);let f=r(`div`,c);a(c,f),n(f,`card-body gap-3`);let p=r(`div`,f);a(f,p),n(p,`space-y-1 border-b border-base-300 pb-3`);let g=e(`rue:component:anchor`);a(p,g);let _=u(()=>{let e=t(),i=r(`h3`,e);a(e,i),n(i,`font-semibold`),a(i,s(`默认标题`));let o=r(`p`,e);return a(e,o),n(o,`text-sm opacity-70`),a(o,s(`没传 title slot，就显示这里。`)),e});l(()=>{let e=m(y,{source:i,name:`title`,children:_});h(()=>d(e,p,g))});let v=r(`div`,f);a(f,v),n(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let b=e(`rue:component:anchor`);a(v,b);let x=u(()=>{let e=t(),i=r(`p`,e);return a(e,i),n(i,`opacity-70`),a(i,s(`没有传 default slot，所以这里显示 fallback。`)),e});l(()=>{let e=m(y,{source:i,children:x});h(()=>d(e,v,b))});let S=r(`div`,f);a(f,S),n(S,`text-sm opacity-70`);let C=e(`rue:component:anchor`);return a(S,C),l(()=>{let e=m(y,{source:i,name:`footer`,children:`默认底部`});h(()=>d(e,S,C))}),c}),ne=i=>u(s=>{let f=r(`ul`,s);n(f,`list rounded-box border border-base-300 bg-base-100`);let p=e(`rue:list:start`),_=e(`rue:list:end`);a(f,p),a(f,_);let b=new Map;return l(()=>{b=v({items:w||[],getKey:(e,t)=>e.label,elements:b,parent:p.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:p,renderItem:(s,f,p,_,v)=>{d(u(()=>{let f=t(),p=r(`li`,f);a(f,p),l(()=>{c(p,`key`,String(s.label))}),n(p,`list-row items-center gap-3`);let _=e(`rue:component:anchor`);a(p,_);let v=u(()=>{let i=t(),c=r(`div`,i);a(i,c),n(c,`flex w-full items-center justify-between gap-3`);let u=r(`span`,c);a(c,u),n(u,`font-medium`);let f=e(`rue:slot:anchor`);a(u,f),l(()=>{let e=s.label;h(()=>d(e,u,f))});let p=r(`span`,c);a(c,p),n(p,`badge badge-outline`);let m=g(p);return a(p,m),l(()=>{o(m,s.value)}),i});return l(()=>{let e=m(y,{source:i,name:`item`,props:s,children:v});h(()=>d(e,p,_))}),f}),f,p)}})}),f}),re=i=>u(f=>{let p=r(`section`,f);n(p,`card border border-base-300 bg-base-100 shadow-sm`);let _=r(`div`,p);a(p,_),n(_,`card-body gap-4`);let b=r(`div`,_);a(_,b),n(b,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let x=r(`div`,b);a(b,x),n(x,`space-y-1`);let S=e(`rue:component:anchor`);a(x,S);let C=u(()=>{let e=t(),i=r(`h2`,e);a(e,i),n(i,`card-title`),a(i,s(`默认标题`));let o=r(`p`,e);return a(e,o),n(o,`text-sm opacity-70`),a(o,s(`没有提供 title slot 时，会显示这段 fallback。`)),e});l(()=>{let e=m(y,{source:i,name:`title`,children:C});h(()=>d(e,x,S))});let w=r(`div`,b);a(b,w),n(w,`flex items-center gap-2`);let T=e(`rue:component:anchor`);a(w,T);let E=u(()=>{let e=t(),i=r(`span`,e);return a(e,i),n(i,`badge badge-outline`),a(i,s(`fallback action`)),e});l(()=>{let e=m(y,{source:i,name:`actions`,children:E});h(()=>d(e,w,T))});let D=r(`div`,_);a(_,D),n(D,`rounded-box bg-base-200 p-4`);let ne=e(`rue:component:anchor`);a(D,ne);let re=u(()=>{let e=t(),i=r(`p`,e);return a(e,i),n(i,`opacity-70`),a(i,s(`默认插槽为空时，这里显示主体内容的 fallback。`)),e});l(()=>{let e=m(y,{source:i,children:re});h(()=>d(e,D,ne))});let O=r(`ul`,_);a(_,O),n(O,`list rounded-box border border-base-300 bg-base-100`);let k=e(`rue:list:start`),A=e(`rue:list:end`);a(O,k),a(O,A);let j=new Map;return l(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(s,f,p,_,v)=>{d(u(()=>{let f=t(),p=r(`li`,f);a(f,p),l(()=>{c(p,`key`,String(s.label))}),n(p,`list-row items-center gap-3`);let _=e(`rue:component:anchor`);a(p,_);let v=u(()=>{let i=t(),c=r(`div`,i);a(i,c),n(c,`flex w-full items-center justify-between gap-3`);let u=r(`div`,c);a(c,u),n(u,`font-medium`);let f=e(`rue:slot:anchor`);a(u,f),l(()=>{let e=s.label;h(()=>d(e,u,f))});let p=r(`span`,c);a(c,p),l(()=>{n(p,String(`badge ${ee[s.tone]}`))});let m=g(p);return a(p,m),l(()=>{o(m,s.value)}),i});return l(()=>{let e=m(y,{source:i,name:`row`,props:s,children:v});h(()=>d(e,p,_))}),f}),f,p)}})}),p}),O=()=>{let{activeTab:v,showTitleSlot:y,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>f(()=>({activeTab:_(`ref:1:0`,()=>p(`preview`)),showTitleSlot:_(`ref:1:1`,()=>p(!0)),showActionsSlot:_(`ref:1:2`,()=>p(!0)),showDefaultSlot:_(`ref:1:3`,()=>p(!0)),showScopedRow:_(`ref:1:4`,()=>p(!0))})));return u(f=>{let p=t(),_=e(`rue:component:anchor`);return a(p,_),d(m(C,{children:u(()=>{let f=t(),p=r(`h1`,f);a(f,p),n(p,`text-5xl font-semibold mb-4 md:mb-4`),a(p,s(`插槽 Slots（default / named / scoped）`));let _=r(`div`,f);a(f,_),c(_,`role`,`tablist`),n(_,`tabs tabs-box`);let C=r(`button`,_);a(_,C),c(C,`role`,`tab`),l(()=>{n(C,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),i(C,`click`,()=>{v.value=`preview`}),a(C,s(`效果`));let k=r(`button`,_);a(_,k),c(k,`role`,`tab`),l(()=>{n(k,String(`tab ${v.value===`code`?`tab-active`:``}`))}),i(k,`click`,()=>{v.value=`code`}),a(k,s(`代码`));let A=r(`div`,f);a(f,A),n(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=e(`rue:slot:anchor`);a(A,j),l(()=>{let i=v.value===`code`?u(()=>{let i=t(),o=r(`div`,i);a(i,o),n(o,`grid gap-6`);let c=r(`div`,o);a(o,c),n(c,`card bg-base-100 shadow overflow-auto`);let u=r(`div`,c);a(c,u),n(u,`card-body p-0`);let f=r(`div`,u);a(u,f),n(f,`border-b border-base-300 px-4 py-3`);let p=r(`h2`,f);a(f,p),n(p,`card-title text-lg`),a(p,s(`先看最小例子`));let g=r(`p`,f);a(f,g),n(g,`text-sm opacity-70`),a(g,s(`先只看 default、named、scoped 各自最短怎么写。`));let _=e(`rue:component:anchor`);a(u,_),l(()=>{let e=m(S,{className:`h-[420px]`,lang:`tsx`,code:T});h(()=>d(e,u,_))});let v=r(`div`,o);a(o,v),n(v,`card bg-base-100 shadow overflow-auto`);let y=r(`div`,v);a(v,y),n(y,`card-body p-0`);let b=r(`div`,y);a(y,b),n(b,`border-b border-base-300 px-4 py-3`);let x=r(`h2`,b);a(b,x),n(x,`card-title text-lg`),a(x,s(`再看完整例子`));let C=r(`p`,b);a(b,C),n(C,`text-sm opacity-70`),a(C,s(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=e(`rue:component:anchor`);return a(y,ee),l(()=>{let e=m(S,{className:`h-[760px]`,lang:`tsx`,code:E});h(()=>d(e,y,ee))}),i}):``;h(()=>d(i,A,j))}),a(A,s(` `));let M=e(`rue:slot:anchor`);return a(A,M),l(()=>{let f=v.value===`preview`?u(()=>{let f=t(),p=r(`div`,f);a(f,p),n(p,`grid gap-6`);let _=r(`div`,p);a(p,_),c(_,`role`,`alert`),n(_,`alert alert-success`);let v=r(`span`,_);a(_,v),a(v,s(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=r(`div`,p);a(p,S),n(S,`card bg-base-100 shadow`);let C=r(`div`,S);a(S,C),n(C,`card-body gap-5`);let T=r(`div`,C);a(C,T);let E=r(`h2`,T);a(T,E),n(E,`card-title`),a(E,s(`先看最小例子`));let k=r(`p`,T);a(T,k),n(k,`text-sm opacity-70`),a(k,s(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=r(`div`,C);a(C,A),n(A,`grid gap-4 xl:grid-cols-3`);let j=r(`div`,A);a(A,j),n(j,`space-y-3`);let M=r(`div`,j);a(j,M);let ie=r(`h3`,M);a(M,ie),n(ie,`text-lg font-semibold`),a(ie,s(`1. default slot`));let ae=r(`p`,M);a(M,ae),n(ae,`text-sm opacity-70`),a(ae,s(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=e(`rue:component:anchor`);a(j,oe),d(m(D,{children:u(()=>{let e=t(),n=r(`p`,e);return a(e,n),a(n,s(`这段内容就是 default slot。`)),e})}),j,oe);let N=r(`div`,A);a(A,N),n(N,`space-y-3`);let P=r(`div`,N);a(N,P);let se=r(`h3`,P);a(P,se),n(se,`text-lg font-semibold`),a(se,s(`2. named slot`));let ce=r(`p`,P);a(P,ce),n(ce,`text-sm opacity-70`),a(ce,s(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=e(`rue:component:anchor`);a(N,le);let ue=u(()=>{let e=t(),n=r(`p`,e);return a(e,n),a(n,s(`中间这段还是 default slot。`)),e}),de=u(()=>{let e=t(),i=r(`span`,e);return a(e,i),n(i,`font-semibold text-base-content`),a(i,s(`自定义标题`)),e}),fe=u(()=>{let e=t(),n=r(`span`,e);return a(e,n),a(n,s(`自定义底部`)),e});l(()=>{let e=m(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});h(()=>d(e,N,le))});let F=r(`div`,A);a(A,F),n(F,`space-y-3`);let I=r(`div`,F);a(F,I);let pe=r(`h3`,I);a(I,pe),n(pe,`text-lg font-semibold`),a(pe,s(`3. scoped slot`));let me=r(`p`,I);a(I,me),n(me,`text-sm opacity-70`),a(me,s(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=e(`rue:component:anchor`);a(F,he),d(m(ne,{item:e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`font-medium`,children:e.label}),x(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),x(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=r(`div`,C);a(C,ge),c(ge,`role`,`alert`),n(ge,`alert alert-soft`);let _e=r(`span`,ge);a(ge,_e),a(_e,s(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=r(`div`,p);a(p,ve),n(ve,`card bg-base-100 shadow`);let L=r(`div`,ve);a(ve,L),n(L,`card-body gap-5`);let R=r(`div`,L);a(L,R),n(R,`flex flex-wrap items-center justify-between gap-3`);let ye=r(`div`,R);a(R,ye);let be=r(`h2`,ye);a(ye,be),n(be,`card-title`),a(be,s(`再看完整例子`));let xe=r(`p`,ye);a(ye,xe),n(xe,`text-sm opacity-70`),a(xe,s(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=r(`div`,R);a(R,z),n(z,`flex flex-wrap gap-2`);let Se=r(`button`,z);a(z,Se),l(()=>{n(Se,String(`btn btn-sm ${y.value?`btn-primary`:`btn-outline`}`))}),i(Se,`click`,()=>{y.value=!y.value}),a(Se,s(`title slot`));let Ce=r(`button`,z);a(z,Ce),l(()=>{n(Ce,String(`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`))}),i(Ce,`click`,()=>{te.value=!te.value}),a(Ce,s(`actions slot`));let we=r(`button`,z);a(z,we),l(()=>{n(we,String(`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`))}),i(we,`click`,()=>{w.value=!w.value}),a(we,s(`default slot`));let Te=r(`button`,z);a(z,Te),l(()=>{n(Te,String(`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`))}),i(Te,`click`,()=>{O.value=!O.value}),a(Te,s(`scoped row`));let B=r(`div`,L);a(L,B),n(B,`grid gap-5 xl:grid-cols-2`);let V=r(`div`,B);a(B,V),n(V,`space-y-3`);let H=r(`div`,V);a(V,H),n(H,`flex items-center justify-between gap-3`);let Ee=r(`h3`,H);a(H,Ee),n(Ee,`text-lg font-semibold`),a(Ee,s(`传入 slot 之后`));let De=r(`span`,H);a(H,De),n(De,`badge badge-success badge-outline`),a(De,s(`自定义内容生效`));let Oe=e(`rue:component:anchor`);a(V,Oe);let ke=u(()=>{let e=t(),i=r(`div`,e);a(e,i),n(i,`space-y-3`);let o=r(`p`,i);a(i,o),n(o,`text-sm leading-6`),a(o,s(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let c=r(`div`,i);a(i,c),n(c,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let l=r(`div`,c);a(c,l),n(l,`stat py-3`);let u=r(`div`,l);a(l,u),n(u,`stat-title`),a(u,s(`可用率`));let d=r(`div`,l);a(l,d),n(d,`stat-value text-2xl`),a(d,s(`99.98%`));let f=r(`div`,l);a(l,f),n(f,`stat-desc`),a(f,s(`过去 24 小时`));let p=r(`div`,c);a(c,p),n(p,`stat py-3`);let m=r(`div`,p);a(p,m),n(m,`stat-title`),a(m,s(`峰值请求`));let h=r(`div`,p);a(p,h),n(h,`stat-value text-2xl`),a(h,s(`18k`));let g=r(`div`,p);return a(p,g),n(g,`stat-desc`),a(g,s(`每分钟`)),e}),Ae=u(()=>{let e=t(),i=r(`h2`,e);a(e,i),n(i,`card-title`),a(i,s(`支付面板`));let o=r(`p`,e);return a(e,o),n(o,`text-sm opacity-70`),a(o,s(`Template slot="title" 可以一次传多个兄弟节点。`)),e}),je=u(()=>{let e=t(),i=r(`button`,e);return a(e,i),n(i,`btn btn-sm btn-primary`),a(i,s(`刷新`)),e});l(()=>{let e=m(re,{row:O.value?e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`font-medium`,children:e.label}),x(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),x(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:y.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});h(()=>d(e,V,Oe))});let U=r(`div`,B);a(B,U),n(U,`space-y-3`);let W=r(`div`,U);a(U,W),n(W,`flex items-center justify-between gap-3`);let Me=r(`h3`,W);a(W,Me),n(Me,`text-lg font-semibold`),a(Me,s(`省略 slot 之后`));let Ne=r(`span`,W);a(W,Ne),n(Ne,`badge badge-warning badge-outline`),a(Ne,s(`fallback 接管`));let Pe=e(`rue:component:anchor`);a(U,Pe),d(m(re,{}),U,Pe);let G=r(`div`,p);a(p,G),n(G,`grid gap-4 xl:grid-cols-2`);let Fe=r(`div`,G);a(G,Fe),n(Fe,`card bg-base-100 shadow`);let K=r(`div`,Fe);a(Fe,K),n(K,`card-body gap-3`);let Ie=r(`h2`,K);a(K,Ie),n(Ie,`card-title`),a(Ie,s(`当前推荐写法`));let q=r(`ul`,K);a(K,q),n(q,`list rounded-box border border-base-300 bg-base-100`);let J=r(`li`,q);a(q,J),n(J,`list-row`);let Le=r(`div`,J);a(J,Le),n(Le,`font-medium`),a(Le,s(`default slot`));let Re=r(`div`,J);a(J,Re),n(Re,`opacity-70`),a(Re,s(`直接写在组件标签内部，最终会落到 props.children。`));let Y=r(`li`,q);a(q,Y),n(Y,`list-row`);let ze=r(`div`,Y);a(Y,ze),n(ze,`font-medium`),a(ze,s(`named slot`));let Be=r(`div`,Y);a(Y,Be),n(Be,`opacity-70`),a(Be,s(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=r(`li`,q);a(q,X),n(X,`list-row`);let Ve=r(`div`,X);a(X,Ve),n(Ve,`font-medium`),a(Ve,s(`scoped slot`));let He=r(`div`,X);a(X,He),n(He,`opacity-70`),a(He,s(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=r(`li`,q);a(q,Z),n(Z,`list-row`);let Ue=r(`div`,Z);a(Z,Ue),n(Ue,`font-medium`),a(Ue,s(`fallback`));let We=r(`div`,Z);a(Z,We),n(We,`opacity-70`),a(We,s(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=r(`div`,G);a(G,Ge),n(Ge,`card bg-base-100 shadow`);let Q=r(`div`,Ge);a(Ge,Q),n(Q,`card-body gap-3`);let Ke=r(`h2`,Q);a(Q,Ke),n(Ke,`card-title`),a(Ke,s(`这页实际演示的协议`));let qe=r(`div`,Q);a(Q,qe),c(qe,`role`,`alert`),n(qe,`alert alert-soft`);let Je=r(`span`,qe);a(qe,Je),a(Je,s(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=r(`div`,Q);a(Q,$),n($,`mockup-code text-sm`);let Ye=r(`pre`,$);a($,Ye),c(Ye,`data-prefix`,`1`);let Xe=r(`code`,Ye);a(Ye,Xe);let Ze=g(Xe);a(Xe,Ze),o(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=r(`pre`,$);a($,Qe),c(Qe,`data-prefix`,`2`);let $e=r(`code`,Qe);a(Qe,$e);let et=g($e);a($e,et),o(et,`<Template slot="title">...</Template>`);let tt=r(`pre`,$);a($,tt),c(tt,`data-prefix`,`3`);let nt=r(`code`,tt);a(tt,nt);let rt=g(nt);a(nt,rt),o(rt,`<button slot="actions">刷新</button>`);let it=r(`pre`,$);a($,it),c(it,`data-prefix`,`4`);let at=r(`code`,it);a(it,at);let ot=g(at);a(at,ot),o(ot,`<SlotPanel row={(slotProps) => ...}>...</SlotPanel>`);let st=r(`p`,Q);return a(Q,st),n(st,`text-sm opacity-70 leading-6`),a(st,s(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),f}):``;h(()=>d(f,A,M))}),f})}),p,_),p})};export{O as default};
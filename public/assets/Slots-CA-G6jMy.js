import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,ot as c,pn as l,pt as u,st as d,tn as f,vn as p}from"./context-8lXZvIn-.js";import{l as m,o as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{i as y}from"./persistentSidebarPlayground-B3vwD8_y.js";import{t as b}from"./Code-DhoWkRkB.js";import{n as x,t as S}from"./src-CCTNpCXV.js";import{r as C}from"./SidebarPlaygroundExample-B78jsvoF.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=e=>m(t=>{let n=u(`section`,t);r(n,`card border border-base-300 bg-base-100 shadow-sm`);let o=u(`div`,n);d(n,o),r(o,`card-body gap-3`);let c=u(`div`,o);d(o,c),r(c,`space-y-1 border-b border-base-300 pb-3`);let l=i(`rue:component:anchor`);d(c,l);let _=m(()=>{let e=a(),t=u(`h3`,e);d(e,t),r(t,`font-semibold`),d(t,s(`默认标题`));let n=u(`p`,e);return d(e,n),r(n,`text-sm opacity-70`),d(n,s(`没传 title slot，就显示这里。`)),e});f(()=>{let t=g(y,{source:e,name:`title`,children:_});p(()=>h(t,c,l))});let v=u(`div`,o);d(o,v),r(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let b=i(`rue:component:anchor`);d(v,b);let x=m(()=>{let e=a(),t=u(`p`,e);return d(e,t),r(t,`opacity-70`),d(t,s(`没有传 default slot，所以这里显示 fallback。`)),e});f(()=>{let t=g(y,{source:e,children:x});p(()=>h(t,v,b))});let S=u(`div`,o);d(o,S),r(S,`text-sm opacity-70`);let C=i(`rue:component:anchor`);return d(S,C),f(()=>{let t=g(y,{source:e,name:`footer`,children:`默认底部`});p(()=>h(t,S,C))}),n}),ne=e=>m(s=>{let c=u(`ul`,s);r(c,`list rounded-box border border-base-300 bg-base-100`);let l=i(`rue:list:start`),_=i(`rue:list:end`);d(c,l),d(c,_);let b=new Map;return f(()=>{b=v({items:w||[],getKey:(e,t)=>e.label,elements:b,parent:l.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:l,renderItem:(s,c,l,_,v)=>{h(m(()=>{let c=a(),l=u(`li`,c);d(c,l),f(()=>{t(l,`key`,String(s.label))}),r(l,`list-row items-center gap-3`);let _=i(`rue:component:anchor`);d(l,_);let v=m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`flex w-full items-center justify-between gap-3`);let c=u(`span`,t);d(t,c),r(c,`font-medium`);let l=i(`rue:slot:anchor`);d(c,l),f(()=>{let e=s.label;p(()=>h(e,c,l))});let m=u(`span`,t);d(t,m),r(m,`badge badge-outline`);let g=o(m);return d(m,g),f(()=>{n(g,s.value)}),e});return f(()=>{let t=g(y,{source:e,name:`item`,props:s,children:v});p(()=>h(t,l,_))}),c}),c,l)}})}),c}),re=e=>m(c=>{let l=u(`section`,c);r(l,`card border border-base-300 bg-base-100 shadow-sm`);let _=u(`div`,l);d(l,_),r(_,`card-body gap-4`);let b=u(`div`,_);d(_,b),r(b,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let x=u(`div`,b);d(b,x),r(x,`space-y-1`);let S=i(`rue:component:anchor`);d(x,S);let C=m(()=>{let e=a(),t=u(`h2`,e);d(e,t),r(t,`card-title`),d(t,s(`默认标题`));let n=u(`p`,e);return d(e,n),r(n,`text-sm opacity-70`),d(n,s(`没有提供 title slot 时，会显示这段 fallback。`)),e});f(()=>{let t=g(y,{source:e,name:`title`,children:C});p(()=>h(t,x,S))});let w=u(`div`,b);d(b,w),r(w,`flex items-center gap-2`);let T=i(`rue:component:anchor`);d(w,T);let E=m(()=>{let e=a(),t=u(`span`,e);return d(e,t),r(t,`badge badge-outline`),d(t,s(`fallback action`)),e});f(()=>{let t=g(y,{source:e,name:`actions`,children:E});p(()=>h(t,w,T))});let D=u(`div`,_);d(_,D),r(D,`rounded-box bg-base-200 p-4`);let ne=i(`rue:component:anchor`);d(D,ne);let re=m(()=>{let e=a(),t=u(`p`,e);return d(e,t),r(t,`opacity-70`),d(t,s(`默认插槽为空时，这里显示主体内容的 fallback。`)),e});f(()=>{let t=g(y,{source:e,children:re});p(()=>h(t,D,ne))});let O=u(`ul`,_);d(_,O),r(O,`list rounded-box border border-base-300 bg-base-100`);let k=i(`rue:list:start`),A=i(`rue:list:end`);d(O,k),d(O,A);let j=new Map;return f(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(s,c,l,_,v)=>{h(m(()=>{let c=a(),l=u(`li`,c);d(c,l),f(()=>{t(l,`key`,String(s.label))}),r(l,`list-row items-center gap-3`);let _=i(`rue:component:anchor`);d(l,_);let v=m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`flex w-full items-center justify-between gap-3`);let c=u(`div`,t);d(t,c),r(c,`font-medium`);let l=i(`rue:slot:anchor`);d(c,l),f(()=>{let e=s.label;p(()=>h(e,c,l))});let m=u(`span`,t);d(t,m),f(()=>{r(m,`badge ${ee[s.tone]}`)});let g=o(m);return d(m,g),f(()=>{n(g,s.value)}),e});return f(()=>{let t=g(y,{source:e,name:`row`,props:s,children:v});p(()=>h(t,l,_))}),c}),c,l)}})}),l}),O=()=>{let{activeTab:v,showTitleSlot:y,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>e(()=>({activeTab:_(`ref:1:0`,()=>l(`preview`)),showTitleSlot:_(`ref:1:1`,()=>l(!0)),showActionsSlot:_(`ref:1:2`,()=>l(!0)),showDefaultSlot:_(`ref:1:3`,()=>l(!0)),showScopedRow:_(`ref:1:4`,()=>l(!0))})));return m(e=>{let l=a(),_=i(`rue:component:anchor`);return d(l,_),h(g(C,{children:m(()=>{let e=a(),l=u(`h1`,e);d(e,l),r(l,`text-5xl font-semibold mb-4 md:mb-4`),d(l,s(`插槽 Slots（default / named / scoped）`));let _=u(`div`,e);d(e,_),t(_,`role`,`tablist`),r(_,`tabs tabs-box`);let C=u(`button`,_);d(_,C),t(C,`role`,`tab`),f(()=>{r(C,`tab ${v.value===`preview`?`tab-active`:``}`)}),c(C,`click`,()=>{v.value=`preview`}),d(C,s(`效果`));let k=u(`button`,_);d(_,k),t(k,`role`,`tab`),f(()=>{r(k,`tab ${v.value===`code`?`tab-active`:``}`)}),c(k,`click`,()=>{v.value=`code`}),d(k,s(`代码`));let A=u(`div`,e);d(e,A),r(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=i(`rue:slot:anchor`);d(A,j),f(()=>{let e=v.value===`code`?m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`grid gap-6`);let n=u(`div`,t);d(t,n),r(n,`card bg-base-100 shadow overflow-auto`);let o=u(`div`,n);d(n,o),r(o,`card-body p-0`);let c=u(`div`,o);d(o,c),r(c,`border-b border-base-300 px-4 py-3`);let l=u(`h2`,c);d(c,l),r(l,`card-title text-lg`),d(l,s(`先看最小例子`));let m=u(`p`,c);d(c,m),r(m,`text-sm opacity-70`),d(m,s(`先只看 default、named、scoped 各自最短怎么写。`));let _=i(`rue:component:anchor`);d(o,_),f(()=>{let e=g(b,{className:`h-[420px]`,lang:`tsx`,code:T});p(()=>h(e,o,_))});let v=u(`div`,t);d(t,v),r(v,`card bg-base-100 shadow overflow-auto`);let y=u(`div`,v);d(v,y),r(y,`card-body p-0`);let x=u(`div`,y);d(y,x),r(x,`border-b border-base-300 px-4 py-3`);let S=u(`h2`,x);d(x,S),r(S,`card-title text-lg`),d(S,s(`再看完整例子`));let C=u(`p`,x);d(x,C),r(C,`text-sm opacity-70`),d(C,s(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=i(`rue:component:anchor`);return d(y,ee),f(()=>{let e=g(b,{className:`h-[760px]`,lang:`tsx`,code:E});p(()=>h(e,y,ee))}),e}):``;p(()=>h(e,A,j))}),d(A,s(` `));let M=i(`rue:slot:anchor`);return d(A,M),f(()=>{let e=v.value===`preview`?m(()=>{let e=a(),l=u(`div`,e);d(e,l),r(l,`grid gap-6`);let _=u(`div`,l);d(l,_),t(_,`role`,`alert`),r(_,`alert alert-success`);let v=u(`span`,_);d(_,v),d(v,s(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let b=u(`div`,l);d(l,b),r(b,`card bg-base-100 shadow`);let C=u(`div`,b);d(b,C),r(C,`card-body gap-5`);let T=u(`div`,C);d(C,T);let E=u(`h2`,T);d(T,E),r(E,`card-title`),d(E,s(`先看最小例子`));let k=u(`p`,T);d(T,k),r(k,`text-sm opacity-70`),d(k,s(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=u(`div`,C);d(C,A),r(A,`grid gap-4 xl:grid-cols-3`);let j=u(`div`,A);d(A,j),r(j,`space-y-3`);let M=u(`div`,j);d(j,M);let ie=u(`h3`,M);d(M,ie),r(ie,`text-lg font-semibold`),d(ie,s(`1. default slot`));let ae=u(`p`,M);d(M,ae),r(ae,`text-sm opacity-70`),d(ae,s(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=i(`rue:component:anchor`);d(j,oe),h(g(D,{children:m(()=>{let e=a(),t=u(`p`,e);return d(e,t),d(t,s(`这段内容就是 default slot。`)),e})}),j,oe);let N=u(`div`,A);d(A,N),r(N,`space-y-3`);let P=u(`div`,N);d(N,P);let se=u(`h3`,P);d(P,se),r(se,`text-lg font-semibold`),d(se,s(`2. named slot`));let ce=u(`p`,P);d(P,ce),r(ce,`text-sm opacity-70`),d(ce,s(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=i(`rue:component:anchor`);d(N,le);let ue=m(()=>{let e=a(),t=u(`p`,e);return d(e,t),d(t,s(`中间这段还是 default slot。`)),e}),de=m(()=>{let e=a(),t=u(`span`,e);return d(e,t),r(t,`font-semibold text-base-content`),d(t,s(`自定义标题`)),e}),fe=m(()=>{let e=a(),t=u(`span`,e);return d(e,t),d(t,s(`自定义底部`)),e});f(()=>{let e=g(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});p(()=>h(e,N,le))});let F=u(`div`,A);d(A,F),r(F,`space-y-3`);let I=u(`div`,F);d(F,I);let pe=u(`h3`,I);d(I,pe),r(pe,`text-lg font-semibold`),d(pe,s(`3. scoped slot`));let me=u(`p`,I);d(I,me),r(me,`text-sm opacity-70`),d(me,s(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=i(`rue:component:anchor`);d(F,he),h(g(ne,{item:e=>x(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[x(`div`,{children:[S(`div`,{className:`font-medium`,children:e.label}),S(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),S(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=u(`div`,C);d(C,ge),t(ge,`role`,`alert`),r(ge,`alert alert-soft`);let _e=u(`span`,ge);d(ge,_e),d(_e,s(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=u(`div`,l);d(l,ve),r(ve,`card bg-base-100 shadow`);let L=u(`div`,ve);d(ve,L),r(L,`card-body gap-5`);let R=u(`div`,L);d(L,R),r(R,`flex flex-wrap items-center justify-between gap-3`);let ye=u(`div`,R);d(R,ye);let be=u(`h2`,ye);d(ye,be),r(be,`card-title`),d(be,s(`再看完整例子`));let xe=u(`p`,ye);d(ye,xe),r(xe,`text-sm opacity-70`),d(xe,s(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=u(`div`,R);d(R,z),r(z,`flex flex-wrap gap-2`);let Se=u(`button`,z);d(z,Se),f(()=>{r(Se,`btn btn-sm ${y.value?`btn-primary`:`btn-outline`}`)}),c(Se,`click`,()=>{y.value=!y.value}),d(Se,s(`title slot`));let Ce=u(`button`,z);d(z,Ce),f(()=>{r(Ce,`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`)}),c(Ce,`click`,()=>{te.value=!te.value}),d(Ce,s(`actions slot`));let we=u(`button`,z);d(z,we),f(()=>{r(we,`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`)}),c(we,`click`,()=>{w.value=!w.value}),d(we,s(`default slot`));let Te=u(`button`,z);d(z,Te),f(()=>{r(Te,`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`)}),c(Te,`click`,()=>{O.value=!O.value}),d(Te,s(`scoped row`));let B=u(`div`,L);d(L,B),r(B,`grid gap-5 xl:grid-cols-2`);let V=u(`div`,B);d(B,V),r(V,`space-y-3`);let H=u(`div`,V);d(V,H),r(H,`flex items-center justify-between gap-3`);let Ee=u(`h3`,H);d(H,Ee),r(Ee,`text-lg font-semibold`),d(Ee,s(`传入 slot 之后`));let De=u(`span`,H);d(H,De),r(De,`badge badge-success badge-outline`),d(De,s(`自定义内容生效`));let Oe=i(`rue:component:anchor`);d(V,Oe);let ke=m(()=>{let e=a(),t=u(`div`,e);d(e,t),r(t,`space-y-3`);let n=u(`p`,t);d(t,n),r(n,`text-sm leading-6`),d(n,s(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let i=u(`div`,t);d(t,i),r(i,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let o=u(`div`,i);d(i,o),r(o,`stat py-3`);let c=u(`div`,o);d(o,c),r(c,`stat-title`),d(c,s(`可用率`));let l=u(`div`,o);d(o,l),r(l,`stat-value text-2xl`),d(l,s(`99.98%`));let f=u(`div`,o);d(o,f),r(f,`stat-desc`),d(f,s(`过去 24 小时`));let p=u(`div`,i);d(i,p),r(p,`stat py-3`);let m=u(`div`,p);d(p,m),r(m,`stat-title`),d(m,s(`峰值请求`));let h=u(`div`,p);d(p,h),r(h,`stat-value text-2xl`),d(h,s(`18k`));let g=u(`div`,p);return d(p,g),r(g,`stat-desc`),d(g,s(`每分钟`)),e}),Ae=m(()=>{let e=a(),t=u(`h2`,e);d(e,t),r(t,`card-title`),d(t,s(`支付面板`));let n=u(`p`,e);return d(e,n),r(n,`text-sm opacity-70`),d(n,s(`Template slot="title" 可以一次传多个兄弟节点。`)),e}),je=m(()=>{let e=a(),t=u(`button`,e);return d(e,t),r(t,`btn btn-sm btn-primary`),d(t,s(`刷新`)),e});f(()=>{let e=g(re,{row:O.value?e=>x(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[x(`div`,{children:[S(`div`,{className:`font-medium`,children:e.label}),S(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),S(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:y.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});p(()=>h(e,V,Oe))});let U=u(`div`,B);d(B,U),r(U,`space-y-3`);let W=u(`div`,U);d(U,W),r(W,`flex items-center justify-between gap-3`);let Me=u(`h3`,W);d(W,Me),r(Me,`text-lg font-semibold`),d(Me,s(`未传 slot 时`));let Ne=u(`span`,W);d(W,Ne),r(Ne,`badge badge-warning badge-outline`),d(Ne,s(`fallback 接管`));let Pe=i(`rue:component:anchor`);d(U,Pe),h(g(re,{}),U,Pe);let G=u(`div`,l);d(l,G),r(G,`grid gap-4 xl:grid-cols-2`);let Fe=u(`div`,G);d(G,Fe),r(Fe,`card bg-base-100 shadow`);let K=u(`div`,Fe);d(Fe,K),r(K,`card-body gap-3`);let Ie=u(`h2`,K);d(K,Ie),r(Ie,`card-title`),d(Ie,s(`当前推荐写法`));let q=u(`ul`,K);d(K,q),r(q,`list rounded-box border border-base-300 bg-base-100`);let J=u(`li`,q);d(q,J),r(J,`list-row`);let Le=u(`div`,J);d(J,Le),r(Le,`font-medium`),d(Le,s(`default slot`));let Re=u(`div`,J);d(J,Re),r(Re,`opacity-70`),d(Re,s(`直接写在组件标签内部，最终会落到 props.children。`));let Y=u(`li`,q);d(q,Y),r(Y,`list-row`);let ze=u(`div`,Y);d(Y,ze),r(ze,`font-medium`),d(ze,s(`named slot`));let Be=u(`div`,Y);d(Y,Be),r(Be,`opacity-70`),d(Be,s(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=u(`li`,q);d(q,X),r(X,`list-row`);let Ve=u(`div`,X);d(X,Ve),r(Ve,`font-medium`),d(Ve,s(`scoped slot`));let He=u(`div`,X);d(X,He),r(He,`opacity-70`),d(He,s(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=u(`li`,q);d(q,Z),r(Z,`list-row`);let Ue=u(`div`,Z);d(Z,Ue),r(Ue,`font-medium`),d(Ue,s(`fallback`));let We=u(`div`,Z);d(Z,We),r(We,`opacity-70`),d(We,s(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=u(`div`,G);d(G,Ge),r(Ge,`card bg-base-100 shadow`);let Q=u(`div`,Ge);d(Ge,Q),r(Q,`card-body gap-3`);let Ke=u(`h2`,Q);d(Q,Ke),r(Ke,`card-title`),d(Ke,s(`这页实际演示的协议`));let qe=u(`div`,Q);d(Q,qe),t(qe,`role`,`alert`),r(qe,`alert alert-soft`);let Je=u(`span`,qe);d(qe,Je),d(Je,s(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=u(`div`,Q);d(Q,$),r($,`mockup-code text-sm`);let Ye=u(`pre`,$);d($,Ye),t(Ye,`data-prefix`,`1`);let Xe=u(`code`,Ye);d(Ye,Xe);let Ze=o(Xe);d(Xe,Ze),n(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=u(`pre`,$);d($,Qe),t(Qe,`data-prefix`,`2`);let $e=u(`code`,Qe);d(Qe,$e);let et=o($e);d($e,et),n(et,`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`);let tt=u(`pre`,$);d($,tt),t(tt,`data-prefix`,`3`);let nt=u(`code`,tt);d(tt,nt);let rt=o(nt);d(nt,rt),n(rt,`<button slot="actions">刷新</button>`);let it=u(`pre`,$);d($,it),t(it,`data-prefix`,`4`);let at=u(`code`,it);d(it,at);let ot=o(at);d(at,ot),n(ot,`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`);let st=u(`p`,Q);return d(Q,st),r(st,`text-sm opacity-70 leading-6`),d(st,s(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),e}):``;p(()=>h(e,A,M))}),e})}),l,_),l})};export{O as default};
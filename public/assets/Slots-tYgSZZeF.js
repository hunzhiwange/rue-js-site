import{$ as e,Et as t,G as n,H as r,J as i,K as a,V as o,W as s,_t as c,d as l,kt as u,l as d,q as f,st as p,t as m,tt as h,xt as g}from"./vapor-runtime-BAZOdMd8.js";import{a as _,n as v}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as y}from"./Slot-mc01l3XQ.js";import{n as b,t as x}from"./src-DZJ4J6sD.js";import{t as S}from"./Code-DY4Ua5uc.js";import{t as C}from"./SidebarPlaygroundExample-B8LFNSBu.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=e=>l(t=>{let i=a(`section`,t);h(i,`card border border-base-300 bg-base-100 shadow-sm`);let o=a(`div`,i);r(i,o),h(o,`card-body gap-3`);let c=a(`div`,o);r(o,c),h(c,`space-y-1 border-b border-base-300 pb-3`);let p=s(`rue:component:anchor`);r(c,p);let _=l(()=>{let e=n(),t=a(`h3`,e);r(e,t),h(t,`font-semibold`),r(t,f(`默认标题`));let i=a(`p`,e);return r(e,i),h(i,`text-sm opacity-70`),r(i,f(`没传 title slot，就显示这里。`)),e});u(()=>{let t=m(y,{source:e,name:`title`,children:_});g(()=>d(t,c,p))});let v=a(`div`,o);r(o,v),h(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let b=s(`rue:component:anchor`);r(v,b);let x=l(()=>{let e=n(),t=a(`p`,e);return r(e,t),h(t,`opacity-70`),r(t,f(`没有传 default slot，所以这里显示 fallback。`)),e});u(()=>{let t=m(y,{source:e,children:x});g(()=>d(t,v,b))});let S=a(`div`,o);r(o,S),h(S,`text-sm opacity-70`);let C=s(`rue:component:anchor`);return r(S,C),u(()=>{let t=m(y,{source:e,name:`footer`,children:`默认底部`});g(()=>d(t,S,C))}),i}),ne=t=>l(o=>{let c=a(`ul`,o);h(c,`list rounded-box border border-base-300 bg-base-100`);let f=s(`rue:list:start`),_=s(`rue:list:end`);r(c,f),r(c,_);let b=new Map;return u(()=>{b=v({items:w||[],getKey:(e,t)=>e.label,elements:b,parent:f.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:f,renderItem:(o,c,f,_,v)=>{d(l(()=>{let c=n(),f=a(`li`,c);r(c,f),u(()=>{e(f,`key`,String(o.label))}),h(f,`list-row items-center gap-3`);let _=s(`rue:component:anchor`);r(f,_);let v=l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`flex w-full items-center justify-between gap-3`);let c=a(`span`,t);r(t,c),h(c,`font-medium`);let l=s(`rue:slot:anchor`);r(c,l),u(()=>{let e=o.label;g(()=>d(e,c,l))});let f=a(`span`,t);r(t,f),h(f,`badge badge-outline`);let m=i(f);return r(f,m),u(()=>{p(m,o.value)}),e});return u(()=>{let e=m(y,{source:t,name:`item`,props:o,children:v});g(()=>d(e,f,_))}),c}),c,f)}})}),c}),re=t=>l(o=>{let c=a(`section`,o);h(c,`card border border-base-300 bg-base-100 shadow-sm`);let _=a(`div`,c);r(c,_),h(_,`card-body gap-4`);let b=a(`div`,_);r(_,b),h(b,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let x=a(`div`,b);r(b,x),h(x,`space-y-1`);let S=s(`rue:component:anchor`);r(x,S);let C=l(()=>{let e=n(),t=a(`h2`,e);r(e,t),h(t,`card-title`),r(t,f(`默认标题`));let i=a(`p`,e);return r(e,i),h(i,`text-sm opacity-70`),r(i,f(`没有提供 title slot 时，会显示这段 fallback。`)),e});u(()=>{let e=m(y,{source:t,name:`title`,children:C});g(()=>d(e,x,S))});let w=a(`div`,b);r(b,w),h(w,`flex items-center gap-2`);let T=s(`rue:component:anchor`);r(w,T);let E=l(()=>{let e=n(),t=a(`span`,e);return r(e,t),h(t,`badge badge-outline`),r(t,f(`fallback action`)),e});u(()=>{let e=m(y,{source:t,name:`actions`,children:E});g(()=>d(e,w,T))});let D=a(`div`,_);r(_,D),h(D,`rounded-box bg-base-200 p-4`);let ne=s(`rue:component:anchor`);r(D,ne);let re=l(()=>{let e=n(),t=a(`p`,e);return r(e,t),h(t,`opacity-70`),r(t,f(`默认插槽为空时，这里显示主体内容的 fallback。`)),e});u(()=>{let e=m(y,{source:t,children:re});g(()=>d(e,D,ne))});let O=a(`ul`,_);r(_,O),h(O,`list rounded-box border border-base-300 bg-base-100`);let k=s(`rue:list:start`),A=s(`rue:list:end`);r(O,k),r(O,A);let j=new Map;return u(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(o,c,f,_,v)=>{d(l(()=>{let c=n(),f=a(`li`,c);r(c,f),u(()=>{e(f,`key`,String(o.label))}),h(f,`list-row items-center gap-3`);let _=s(`rue:component:anchor`);r(f,_);let v=l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`flex w-full items-center justify-between gap-3`);let c=a(`div`,t);r(t,c),h(c,`font-medium`);let l=s(`rue:slot:anchor`);r(c,l),u(()=>{let e=o.label;g(()=>d(e,c,l))});let f=a(`span`,t);r(t,f),u(()=>{h(f,String(`badge ${ee[o.tone]}`))});let m=i(f);return r(f,m),u(()=>{p(m,o.value)}),e});return u(()=>{let e=m(y,{source:t,name:`row`,props:o,children:v});g(()=>d(e,f,_))}),c}),c,f)}})}),c}),O=()=>{let{activeTab:v,showTitleSlot:y,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>t(()=>({activeTab:_(`ref:1:0`,()=>c(`preview`)),showTitleSlot:_(`ref:1:1`,()=>c(!0)),showActionsSlot:_(`ref:1:2`,()=>c(!0)),showDefaultSlot:_(`ref:1:3`,()=>c(!0)),showScopedRow:_(`ref:1:4`,()=>c(!0))})));return l(t=>{let c=n(),_=s(`rue:component:anchor`);return r(c,_),d(m(C,{children:l(()=>{let t=n(),c=a(`h1`,t);r(t,c),h(c,`text-5xl font-semibold mb-4 md:mb-4`),r(c,f(`插槽 Slots（default / named / scoped）`));let _=a(`div`,t);r(t,_),e(_,`role`,`tablist`),h(_,`tabs tabs-box`);let C=a(`button`,_);r(_,C),e(C,`role`,`tab`),u(()=>{h(C,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),o(C,`click`,()=>{v.value=`preview`}),r(C,f(`效果`));let k=a(`button`,_);r(_,k),e(k,`role`,`tab`),u(()=>{h(k,String(`tab ${v.value===`code`?`tab-active`:``}`))}),o(k,`click`,()=>{v.value=`code`}),r(k,f(`代码`));let A=a(`div`,t);r(t,A),h(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=s(`rue:slot:anchor`);r(A,j),u(()=>{let e=v.value===`code`?l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`grid gap-6`);let i=a(`div`,t);r(t,i),h(i,`card bg-base-100 shadow overflow-auto`);let o=a(`div`,i);r(i,o),h(o,`card-body p-0`);let c=a(`div`,o);r(o,c),h(c,`border-b border-base-300 px-4 py-3`);let l=a(`h2`,c);r(c,l),h(l,`card-title text-lg`),r(l,f(`先看最小例子`));let p=a(`p`,c);r(c,p),h(p,`text-sm opacity-70`),r(p,f(`先只看 default、named、scoped 各自最短怎么写。`));let _=s(`rue:component:anchor`);r(o,_),u(()=>{let e=m(S,{className:`h-[420px]`,lang:`tsx`,code:T});g(()=>d(e,o,_))});let v=a(`div`,t);r(t,v),h(v,`card bg-base-100 shadow overflow-auto`);let y=a(`div`,v);r(v,y),h(y,`card-body p-0`);let b=a(`div`,y);r(y,b),h(b,`border-b border-base-300 px-4 py-3`);let x=a(`h2`,b);r(b,x),h(x,`card-title text-lg`),r(x,f(`再看完整例子`));let C=a(`p`,b);r(b,C),h(C,`text-sm opacity-70`),r(C,f(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=s(`rue:component:anchor`);return r(y,ee),u(()=>{let e=m(S,{className:`h-[760px]`,lang:`tsx`,code:E});g(()=>d(e,y,ee))}),e}):``;g(()=>d(e,A,j))}),r(A,f(` `));let M=s(`rue:slot:anchor`);return r(A,M),u(()=>{let t=v.value===`preview`?l(()=>{let t=n(),c=a(`div`,t);r(t,c),h(c,`grid gap-6`);let _=a(`div`,c);r(c,_),e(_,`role`,`alert`),h(_,`alert alert-success`);let v=a(`span`,_);r(_,v),r(v,f(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=a(`div`,c);r(c,S),h(S,`card bg-base-100 shadow`);let C=a(`div`,S);r(S,C),h(C,`card-body gap-5`);let T=a(`div`,C);r(C,T);let E=a(`h2`,T);r(T,E),h(E,`card-title`),r(E,f(`先看最小例子`));let k=a(`p`,T);r(T,k),h(k,`text-sm opacity-70`),r(k,f(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=a(`div`,C);r(C,A),h(A,`grid gap-4 xl:grid-cols-3`);let j=a(`div`,A);r(A,j),h(j,`space-y-3`);let M=a(`div`,j);r(j,M);let ie=a(`h3`,M);r(M,ie),h(ie,`text-lg font-semibold`),r(ie,f(`1. default slot`));let ae=a(`p`,M);r(M,ae),h(ae,`text-sm opacity-70`),r(ae,f(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=s(`rue:component:anchor`);r(j,oe),d(m(D,{children:l(()=>{let e=n(),t=a(`p`,e);return r(e,t),r(t,f(`这段内容就是 default slot。`)),e})}),j,oe);let N=a(`div`,A);r(A,N),h(N,`space-y-3`);let P=a(`div`,N);r(N,P);let se=a(`h3`,P);r(P,se),h(se,`text-lg font-semibold`),r(se,f(`2. named slot`));let ce=a(`p`,P);r(P,ce),h(ce,`text-sm opacity-70`),r(ce,f(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=s(`rue:component:anchor`);r(N,le);let ue=l(()=>{let e=n(),t=a(`p`,e);return r(e,t),r(t,f(`中间这段还是 default slot。`)),e}),de=l(()=>{let e=n(),t=a(`span`,e);return r(e,t),h(t,`font-semibold text-base-content`),r(t,f(`自定义标题`)),e}),fe=l(()=>{let e=n(),t=a(`span`,e);return r(e,t),r(t,f(`自定义底部`)),e});u(()=>{let e=m(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});g(()=>d(e,N,le))});let F=a(`div`,A);r(A,F),h(F,`space-y-3`);let I=a(`div`,F);r(F,I);let pe=a(`h3`,I);r(I,pe),h(pe,`text-lg font-semibold`),r(pe,f(`3. scoped slot`));let me=a(`p`,I);r(I,me),h(me,`text-sm opacity-70`),r(me,f(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=s(`rue:component:anchor`);r(F,he),d(m(ne,{item:e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`font-medium`,children:e.label}),x(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),x(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=a(`div`,C);r(C,ge),e(ge,`role`,`alert`),h(ge,`alert alert-soft`);let _e=a(`span`,ge);r(ge,_e),r(_e,f(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=a(`div`,c);r(c,ve),h(ve,`card bg-base-100 shadow`);let L=a(`div`,ve);r(ve,L),h(L,`card-body gap-5`);let R=a(`div`,L);r(L,R),h(R,`flex flex-wrap items-center justify-between gap-3`);let ye=a(`div`,R);r(R,ye);let be=a(`h2`,ye);r(ye,be),h(be,`card-title`),r(be,f(`再看完整例子`));let xe=a(`p`,ye);r(ye,xe),h(xe,`text-sm opacity-70`),r(xe,f(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=a(`div`,R);r(R,z),h(z,`flex flex-wrap gap-2`);let Se=a(`button`,z);r(z,Se),u(()=>{h(Se,String(`btn btn-sm ${y.value?`btn-primary`:`btn-outline`}`))}),o(Se,`click`,()=>{y.value=!y.value}),r(Se,f(`title slot`));let Ce=a(`button`,z);r(z,Ce),u(()=>{h(Ce,String(`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`))}),o(Ce,`click`,()=>{te.value=!te.value}),r(Ce,f(`actions slot`));let we=a(`button`,z);r(z,we),u(()=>{h(we,String(`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`))}),o(we,`click`,()=>{w.value=!w.value}),r(we,f(`default slot`));let Te=a(`button`,z);r(z,Te),u(()=>{h(Te,String(`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`))}),o(Te,`click`,()=>{O.value=!O.value}),r(Te,f(`scoped row`));let B=a(`div`,L);r(L,B),h(B,`grid gap-5 xl:grid-cols-2`);let V=a(`div`,B);r(B,V),h(V,`space-y-3`);let H=a(`div`,V);r(V,H),h(H,`flex items-center justify-between gap-3`);let Ee=a(`h3`,H);r(H,Ee),h(Ee,`text-lg font-semibold`),r(Ee,f(`传入 slot 之后`));let De=a(`span`,H);r(H,De),h(De,`badge badge-success badge-outline`),r(De,f(`自定义内容生效`));let Oe=s(`rue:component:anchor`);r(V,Oe);let ke=l(()=>{let e=n(),t=a(`div`,e);r(e,t),h(t,`space-y-3`);let i=a(`p`,t);r(t,i),h(i,`text-sm leading-6`),r(i,f(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let o=a(`div`,t);r(t,o),h(o,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let s=a(`div`,o);r(o,s),h(s,`stat py-3`);let c=a(`div`,s);r(s,c),h(c,`stat-title`),r(c,f(`可用率`));let l=a(`div`,s);r(s,l),h(l,`stat-value text-2xl`),r(l,f(`99.98%`));let u=a(`div`,s);r(s,u),h(u,`stat-desc`),r(u,f(`过去 24 小时`));let d=a(`div`,o);r(o,d),h(d,`stat py-3`);let p=a(`div`,d);r(d,p),h(p,`stat-title`),r(p,f(`峰值请求`));let m=a(`div`,d);r(d,m),h(m,`stat-value text-2xl`),r(m,f(`18k`));let g=a(`div`,d);return r(d,g),h(g,`stat-desc`),r(g,f(`每分钟`)),e}),Ae=l(()=>{let e=n(),t=a(`h2`,e);r(e,t),h(t,`card-title`),r(t,f(`支付面板`));let i=a(`p`,e);return r(e,i),h(i,`text-sm opacity-70`),r(i,f(`Template slot="title" 可以一次传多个兄弟节点。`)),e}),je=l(()=>{let e=n(),t=a(`button`,e);return r(e,t),h(t,`btn btn-sm btn-primary`),r(t,f(`刷新`)),e});u(()=>{let e=m(re,{row:O.value?e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`font-medium`,children:e.label}),x(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),x(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:y.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});g(()=>d(e,V,Oe))});let U=a(`div`,B);r(B,U),h(U,`space-y-3`);let W=a(`div`,U);r(U,W),h(W,`flex items-center justify-between gap-3`);let Me=a(`h3`,W);r(W,Me),h(Me,`text-lg font-semibold`),r(Me,f(`省略 slot 之后`));let Ne=a(`span`,W);r(W,Ne),h(Ne,`badge badge-warning badge-outline`),r(Ne,f(`fallback 接管`));let Pe=s(`rue:component:anchor`);r(U,Pe),d(m(re,{}),U,Pe);let G=a(`div`,c);r(c,G),h(G,`grid gap-4 xl:grid-cols-2`);let Fe=a(`div`,G);r(G,Fe),h(Fe,`card bg-base-100 shadow`);let K=a(`div`,Fe);r(Fe,K),h(K,`card-body gap-3`);let Ie=a(`h2`,K);r(K,Ie),h(Ie,`card-title`),r(Ie,f(`当前推荐写法`));let q=a(`ul`,K);r(K,q),h(q,`list rounded-box border border-base-300 bg-base-100`);let J=a(`li`,q);r(q,J),h(J,`list-row`);let Le=a(`div`,J);r(J,Le),h(Le,`font-medium`),r(Le,f(`default slot`));let Re=a(`div`,J);r(J,Re),h(Re,`opacity-70`),r(Re,f(`直接写在组件标签内部，最终会落到 props.children。`));let Y=a(`li`,q);r(q,Y),h(Y,`list-row`);let ze=a(`div`,Y);r(Y,ze),h(ze,`font-medium`),r(ze,f(`named slot`));let Be=a(`div`,Y);r(Y,Be),h(Be,`opacity-70`),r(Be,f(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=a(`li`,q);r(q,X),h(X,`list-row`);let Ve=a(`div`,X);r(X,Ve),h(Ve,`font-medium`),r(Ve,f(`scoped slot`));let He=a(`div`,X);r(X,He),h(He,`opacity-70`),r(He,f(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=a(`li`,q);r(q,Z),h(Z,`list-row`);let Ue=a(`div`,Z);r(Z,Ue),h(Ue,`font-medium`),r(Ue,f(`fallback`));let We=a(`div`,Z);r(Z,We),h(We,`opacity-70`),r(We,f(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=a(`div`,G);r(G,Ge),h(Ge,`card bg-base-100 shadow`);let Q=a(`div`,Ge);r(Ge,Q),h(Q,`card-body gap-3`);let Ke=a(`h2`,Q);r(Q,Ke),h(Ke,`card-title`),r(Ke,f(`这页实际演示的协议`));let qe=a(`div`,Q);r(Q,qe),e(qe,`role`,`alert`),h(qe,`alert alert-soft`);let Je=a(`span`,qe);r(qe,Je),r(Je,f(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=a(`div`,Q);r(Q,$),h($,`mockup-code text-sm`);let Ye=a(`pre`,$);r($,Ye),e(Ye,`data-prefix`,`1`);let Xe=a(`code`,Ye);r(Ye,Xe);let Ze=i(Xe);r(Xe,Ze),p(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=a(`pre`,$);r($,Qe),e(Qe,`data-prefix`,`2`);let $e=a(`code`,Qe);r(Qe,$e);let et=i($e);r($e,et),p(et,`<Template slot="title">...</Template>`);let tt=a(`pre`,$);r($,tt),e(tt,`data-prefix`,`3`);let nt=a(`code`,tt);r(tt,nt);let rt=i(nt);r(nt,rt),p(rt,`<button slot="actions">刷新</button>`);let it=a(`pre`,$);r($,it),e(it,`data-prefix`,`4`);let at=a(`code`,it);r(it,at);let ot=i(at);r(at,ot),p(ot,`<SlotPanel row={(slotProps) => ...}>...</SlotPanel>`);let st=a(`p`,Q);return r(Q,st),h(st,`text-sm opacity-70 leading-6`),r(st,f(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),t}):``;g(()=>d(t,A,M))}),t})}),c,_),c})};export{O as default};
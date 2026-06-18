import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,et as l,l as u,pt as d,q as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as y,i as b,o as x}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as S}from"./Code-CZqShVUj.js";import{r as C}from"./SidebarPlaygroundExample-5H7RL-T7.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=r=>u(c=>{let l=i(`section`,c);h(l,`card border border-base-300 bg-base-100 shadow-sm`);let d=i(`div`,l);n(l,d),h(d,`card-body gap-3`);let f=i(`div`,d);n(d,f),h(f,`space-y-1 border-b border-base-300 pb-3`);let p=a(`rue:component:anchor`);n(f,p);let _=u(()=>{let t=s(),r=i(`h3`,t);n(t,r),h(r,`font-semibold`),n(r,e(`默认标题`));let a=i(`p`,t);return n(t,a),h(a,`text-sm opacity-70`),n(a,e(`没传 title slot，就显示这里。`)),t});o(()=>{let e=g(x,{source:r,name:`title`,children:_});t(()=>m(e,f,p))});let v=i(`div`,d);n(d,v),h(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let y=a(`rue:component:anchor`);n(v,y);let b=u(()=>{let t=s(),r=i(`p`,t);return n(t,r),h(r,`opacity-70`),n(r,e(`没有传 default slot，所以这里显示 fallback。`)),t});o(()=>{let e=g(x,{source:r,children:b});t(()=>m(e,v,y))});let S=i(`div`,d);n(d,S),h(S,`text-sm opacity-70`);let C=a(`rue:component:anchor`);return n(S,C),o(()=>{let e=g(x,{source:r,name:`footer`,children:`默认底部`});t(()=>m(e,S,C))}),l}),ne=e=>u(r=>{let f=i(`ul`,r);h(f,`list rounded-box border border-base-300 bg-base-100`);let p=a(`rue:list:start`),_=a(`rue:list:end`);n(f,p),n(f,_);let y=new Map;return o(()=>{y=v({items:w||[],getKey:(e,t)=>e.label,elements:y,parent:p.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:p,renderItem:(r,f,p,_,v)=>{m(u(()=>{let f=s(),p=i(`li`,f);n(f,p),o(()=>{c(p,`key`,String(r.label))}),h(p,`list-row items-center gap-3`);let _=a(`rue:component:anchor`);n(p,_);let v=u(()=>{let e=s(),c=i(`div`,e);n(e,c),h(c,`flex w-full items-center justify-between gap-3`);let u=i(`span`,c);n(c,u),h(u,`font-medium`);let f=a(`rue:slot:anchor`);n(u,f),o(()=>{let e=r.label;t(()=>m(e,u,f))});let p=i(`span`,c);n(c,p),h(p,`badge badge-outline`);let g=l(p);return n(p,g),o(()=>{d(g,r.value)}),e});return o(()=>{let n=g(x,{source:e,name:`item`,props:r,children:v});t(()=>m(n,p,_))}),f}),f,p)}})}),f}),re=r=>u(f=>{let p=i(`section`,f);h(p,`card border border-base-300 bg-base-100 shadow-sm`);let _=i(`div`,p);n(p,_),h(_,`card-body gap-4`);let y=i(`div`,_);n(_,y),h(y,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let b=i(`div`,y);n(y,b),h(b,`space-y-1`);let S=a(`rue:component:anchor`);n(b,S);let C=u(()=>{let t=s(),r=i(`h2`,t);n(t,r),h(r,`card-title`),n(r,e(`默认标题`));let a=i(`p`,t);return n(t,a),h(a,`text-sm opacity-70`),n(a,e(`没有提供 title slot 时，会显示这段 fallback。`)),t});o(()=>{let e=g(x,{source:r,name:`title`,children:C});t(()=>m(e,b,S))});let w=i(`div`,y);n(y,w),h(w,`flex items-center gap-2`);let T=a(`rue:component:anchor`);n(w,T);let E=u(()=>{let t=s(),r=i(`span`,t);return n(t,r),h(r,`badge badge-outline`),n(r,e(`fallback action`)),t});o(()=>{let e=g(x,{source:r,name:`actions`,children:E});t(()=>m(e,w,T))});let D=i(`div`,_);n(_,D),h(D,`rounded-box bg-base-200 p-4`);let ne=a(`rue:component:anchor`);n(D,ne);let re=u(()=>{let t=s(),r=i(`p`,t);return n(t,r),h(r,`opacity-70`),n(r,e(`默认插槽为空时，这里显示主体内容的 fallback。`)),t});o(()=>{let e=g(x,{source:r,children:re});t(()=>m(e,D,ne))});let O=i(`ul`,_);n(_,O),h(O,`list rounded-box border border-base-300 bg-base-100`);let k=a(`rue:list:start`),A=a(`rue:list:end`);n(O,k),n(O,A);let j=new Map;return o(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(e,f,p,_,v)=>{m(u(()=>{let f=s(),p=i(`li`,f);n(f,p),o(()=>{c(p,`key`,String(e.label))}),h(p,`list-row items-center gap-3`);let _=a(`rue:component:anchor`);n(p,_);let v=u(()=>{let r=s(),c=i(`div`,r);n(r,c),h(c,`flex w-full items-center justify-between gap-3`);let u=i(`div`,c);n(c,u),h(u,`font-medium`);let f=a(`rue:slot:anchor`);n(u,f),o(()=>{let n=e.label;t(()=>m(n,u,f))});let p=i(`span`,c);n(c,p),o(()=>{h(p,`badge ${ee[e.tone]}`)});let g=l(p);return n(p,g),o(()=>{d(g,e.value)}),r});return o(()=>{let n=g(x,{source:r,name:`row`,props:e,children:v});t(()=>m(n,p,_))}),f}),f,p)}})}),p}),O=()=>{let{activeTab:v,showTitleSlot:x,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>p(()=>({activeTab:_(`ref:1:0`,()=>r(`preview`)),showTitleSlot:_(`ref:1:1`,()=>r(!0)),showActionsSlot:_(`ref:1:2`,()=>r(!0)),showDefaultSlot:_(`ref:1:3`,()=>r(!0)),showScopedRow:_(`ref:1:4`,()=>r(!0))})));return u(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(C,{children:u(()=>{let r=s(),p=i(`h1`,r);n(r,p),h(p,`text-5xl font-semibold mb-4 md:mb-4`),n(p,e(`插槽 Slots（default / named / scoped）`));let _=i(`div`,r);n(r,_),c(_,`role`,`tablist`),h(_,`tabs tabs-box`);let C=i(`button`,_);n(_,C),c(C,`role`,`tab`),o(()=>{h(C,`tab ${v.value===`preview`?`tab-active`:``}`)}),f(C,`click`,()=>{v.value=`preview`}),n(C,e(`效果`));let k=i(`button`,_);n(_,k),c(k,`role`,`tab`),o(()=>{h(k,`tab ${v.value===`code`?`tab-active`:``}`)}),f(k,`click`,()=>{v.value=`code`}),n(k,e(`代码`));let A=i(`div`,r);n(r,A),h(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=a(`rue:slot:anchor`);n(A,j),o(()=>{let r=v.value===`code`?u(()=>{let r=s(),c=i(`div`,r);n(r,c),h(c,`grid gap-6`);let l=i(`div`,c);n(c,l),h(l,`card bg-base-100 shadow overflow-auto`);let u=i(`div`,l);n(l,u),h(u,`card-body p-0`);let d=i(`div`,u);n(u,d),h(d,`border-b border-base-300 px-4 py-3`);let f=i(`h2`,d);n(d,f),h(f,`card-title text-lg`),n(f,e(`先看最小例子`));let p=i(`p`,d);n(d,p),h(p,`text-sm opacity-70`),n(p,e(`先只看 default、named、scoped 各自最短怎么写。`));let _=a(`rue:component:anchor`);n(u,_),o(()=>{let e=g(S,{className:`h-[420px]`,lang:`tsx`,code:T});t(()=>m(e,u,_))});let v=i(`div`,c);n(c,v),h(v,`card bg-base-100 shadow overflow-auto`);let y=i(`div`,v);n(v,y),h(y,`card-body p-0`);let b=i(`div`,y);n(y,b),h(b,`border-b border-base-300 px-4 py-3`);let x=i(`h2`,b);n(b,x),h(x,`card-title text-lg`),n(x,e(`再看完整例子`));let C=i(`p`,b);n(b,C),h(C,`text-sm opacity-70`),n(C,e(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=a(`rue:component:anchor`);return n(y,ee),o(()=>{let e=g(S,{className:`h-[760px]`,lang:`tsx`,code:E});t(()=>m(e,y,ee))}),r}):``;t(()=>m(r,A,j))}),n(A,e(` `));let M=a(`rue:slot:anchor`);return n(A,M),o(()=>{let r=v.value===`preview`?u(()=>{let r=s(),p=i(`div`,r);n(r,p),h(p,`grid gap-6`);let _=i(`div`,p);n(p,_),c(_,`role`,`alert`),h(_,`alert alert-success`);let v=i(`span`,_);n(_,v),n(v,e(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=i(`div`,p);n(p,S),h(S,`card bg-base-100 shadow`);let C=i(`div`,S);n(S,C),h(C,`card-body gap-5`);let T=i(`div`,C);n(C,T);let E=i(`h2`,T);n(T,E),h(E,`card-title`),n(E,e(`先看最小例子`));let k=i(`p`,T);n(T,k),h(k,`text-sm opacity-70`),n(k,e(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=i(`div`,C);n(C,A),h(A,`grid gap-4 xl:grid-cols-3`);let j=i(`div`,A);n(A,j),h(j,`space-y-3`);let M=i(`div`,j);n(j,M);let ie=i(`h3`,M);n(M,ie),h(ie,`text-lg font-semibold`),n(ie,e(`1. default slot`));let ae=i(`p`,M);n(M,ae),h(ae,`text-sm opacity-70`),n(ae,e(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=a(`rue:component:anchor`);n(j,oe),m(g(D,{children:u(()=>{let t=s(),r=i(`p`,t);return n(t,r),n(r,e(`这段内容就是 default slot。`)),t})}),j,oe);let N=i(`div`,A);n(A,N),h(N,`space-y-3`);let P=i(`div`,N);n(N,P);let se=i(`h3`,P);n(P,se),h(se,`text-lg font-semibold`),n(se,e(`2. named slot`));let ce=i(`p`,P);n(P,ce),h(ce,`text-sm opacity-70`),n(ce,e(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=a(`rue:component:anchor`);n(N,le);let ue=u(()=>{let t=s(),r=i(`p`,t);return n(t,r),n(r,e(`中间这段还是 default slot。`)),t}),de=u(()=>{let t=s(),r=i(`span`,t);return n(t,r),h(r,`font-semibold text-base-content`),n(r,e(`自定义标题`)),t}),fe=u(()=>{let t=s(),r=i(`span`,t);return n(t,r),n(r,e(`自定义底部`)),t});o(()=>{let e=g(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});t(()=>m(e,N,le))});let F=i(`div`,A);n(A,F),h(F,`space-y-3`);let I=i(`div`,F);n(F,I);let pe=i(`h3`,I);n(I,pe),h(pe,`text-lg font-semibold`),n(pe,e(`3. scoped slot`));let me=i(`p`,I);n(I,me),h(me,`text-sm opacity-70`),n(me,e(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=a(`rue:component:anchor`);n(F,he),m(g(ne,{item:e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=i(`div`,C);n(C,ge),c(ge,`role`,`alert`),h(ge,`alert alert-soft`);let _e=i(`span`,ge);n(ge,_e),n(_e,e(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=i(`div`,p);n(p,ve),h(ve,`card bg-base-100 shadow`);let L=i(`div`,ve);n(ve,L),h(L,`card-body gap-5`);let R=i(`div`,L);n(L,R),h(R,`flex flex-wrap items-center justify-between gap-3`);let ye=i(`div`,R);n(R,ye);let be=i(`h2`,ye);n(ye,be),h(be,`card-title`),n(be,e(`再看完整例子`));let xe=i(`p`,ye);n(ye,xe),h(xe,`text-sm opacity-70`),n(xe,e(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=i(`div`,R);n(R,z),h(z,`flex flex-wrap gap-2`);let Se=i(`button`,z);n(z,Se),o(()=>{h(Se,`btn btn-sm ${x.value?`btn-primary`:`btn-outline`}`)}),f(Se,`click`,()=>{x.value=!x.value}),n(Se,e(`title slot`));let Ce=i(`button`,z);n(z,Ce),o(()=>{h(Ce,`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`)}),f(Ce,`click`,()=>{te.value=!te.value}),n(Ce,e(`actions slot`));let we=i(`button`,z);n(z,we),o(()=>{h(we,`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`)}),f(we,`click`,()=>{w.value=!w.value}),n(we,e(`default slot`));let Te=i(`button`,z);n(z,Te),o(()=>{h(Te,`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`)}),f(Te,`click`,()=>{O.value=!O.value}),n(Te,e(`scoped row`));let B=i(`div`,L);n(L,B),h(B,`grid gap-5 xl:grid-cols-2`);let V=i(`div`,B);n(B,V),h(V,`space-y-3`);let H=i(`div`,V);n(V,H),h(H,`flex items-center justify-between gap-3`);let Ee=i(`h3`,H);n(H,Ee),h(Ee,`text-lg font-semibold`),n(Ee,e(`传入 slot 之后`));let De=i(`span`,H);n(H,De),h(De,`badge badge-success badge-outline`),n(De,e(`自定义内容生效`));let Oe=a(`rue:component:anchor`);n(V,Oe);let ke=u(()=>{let t=s(),r=i(`div`,t);n(t,r),h(r,`space-y-3`);let a=i(`p`,r);n(r,a),h(a,`text-sm leading-6`),n(a,e(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let o=i(`div`,r);n(r,o),h(o,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let c=i(`div`,o);n(o,c),h(c,`stat py-3`);let l=i(`div`,c);n(c,l),h(l,`stat-title`),n(l,e(`可用率`));let u=i(`div`,c);n(c,u),h(u,`stat-value text-2xl`),n(u,e(`99.98%`));let d=i(`div`,c);n(c,d),h(d,`stat-desc`),n(d,e(`过去 24 小时`));let f=i(`div`,o);n(o,f),h(f,`stat py-3`);let p=i(`div`,f);n(f,p),h(p,`stat-title`),n(p,e(`峰值请求`));let m=i(`div`,f);n(f,m),h(m,`stat-value text-2xl`),n(m,e(`18k`));let g=i(`div`,f);return n(f,g),h(g,`stat-desc`),n(g,e(`每分钟`)),t}),Ae=u(()=>{let t=s(),r=i(`h2`,t);n(t,r),h(r,`card-title`),n(r,e(`支付面板`));let a=i(`p`,t);return n(t,a),h(a,`text-sm opacity-70`),n(a,e(`Template slot="title" 可以一次传多个兄弟节点。`)),t}),je=u(()=>{let t=s(),r=i(`button`,t);return n(t,r),h(r,`btn btn-sm btn-primary`),n(r,e(`刷新`)),t});o(()=>{let e=g(re,{row:O.value?e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:x.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});t(()=>m(e,V,Oe))});let U=i(`div`,B);n(B,U),h(U,`space-y-3`);let W=i(`div`,U);n(U,W),h(W,`flex items-center justify-between gap-3`);let Me=i(`h3`,W);n(W,Me),h(Me,`text-lg font-semibold`),n(Me,e(`未传 slot 时`));let Ne=i(`span`,W);n(W,Ne),h(Ne,`badge badge-warning badge-outline`),n(Ne,e(`fallback 接管`));let Pe=a(`rue:component:anchor`);n(U,Pe),m(g(re,{}),U,Pe);let G=i(`div`,p);n(p,G),h(G,`grid gap-4 xl:grid-cols-2`);let Fe=i(`div`,G);n(G,Fe),h(Fe,`card bg-base-100 shadow`);let K=i(`div`,Fe);n(Fe,K),h(K,`card-body gap-3`);let Ie=i(`h2`,K);n(K,Ie),h(Ie,`card-title`),n(Ie,e(`当前推荐写法`));let q=i(`ul`,K);n(K,q),h(q,`list rounded-box border border-base-300 bg-base-100`);let J=i(`li`,q);n(q,J),h(J,`list-row`);let Le=i(`div`,J);n(J,Le),h(Le,`font-medium`),n(Le,e(`default slot`));let Re=i(`div`,J);n(J,Re),h(Re,`opacity-70`),n(Re,e(`直接写在组件标签内部，最终会落到 props.children。`));let Y=i(`li`,q);n(q,Y),h(Y,`list-row`);let ze=i(`div`,Y);n(Y,ze),h(ze,`font-medium`),n(ze,e(`named slot`));let Be=i(`div`,Y);n(Y,Be),h(Be,`opacity-70`),n(Be,e(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=i(`li`,q);n(q,X),h(X,`list-row`);let Ve=i(`div`,X);n(X,Ve),h(Ve,`font-medium`),n(Ve,e(`scoped slot`));let He=i(`div`,X);n(X,He),h(He,`opacity-70`),n(He,e(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=i(`li`,q);n(q,Z),h(Z,`list-row`);let Ue=i(`div`,Z);n(Z,Ue),h(Ue,`font-medium`),n(Ue,e(`fallback`));let We=i(`div`,Z);n(Z,We),h(We,`opacity-70`),n(We,e(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=i(`div`,G);n(G,Ge),h(Ge,`card bg-base-100 shadow`);let Q=i(`div`,Ge);n(Ge,Q),h(Q,`card-body gap-3`);let Ke=i(`h2`,Q);n(Q,Ke),h(Ke,`card-title`),n(Ke,e(`这页实际演示的协议`));let qe=i(`div`,Q);n(Q,qe),c(qe,`role`,`alert`),h(qe,`alert alert-soft`);let Je=i(`span`,qe);n(qe,Je),n(Je,e(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=i(`div`,Q);n(Q,$),h($,`mockup-code text-sm`);let Ye=i(`pre`,$);n($,Ye),c(Ye,`data-prefix`,`1`);let Xe=i(`code`,Ye);n(Ye,Xe);let Ze=l(Xe);n(Xe,Ze),d(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=i(`pre`,$);n($,Qe),c(Qe,`data-prefix`,`2`);let $e=i(`code`,Qe);n(Qe,$e);let et=l($e);n($e,et),d(et,`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`);let tt=i(`pre`,$);n($,tt),c(tt,`data-prefix`,`3`);let nt=i(`code`,tt);n(tt,nt);let rt=l(nt);n(nt,rt),d(rt,`<button slot="actions">刷新</button>`);let it=i(`pre`,$);n($,it),c(it,`data-prefix`,`4`);let at=i(`code`,it);n(it,at);let ot=l(at);n(at,ot),d(ot,`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`);let st=i(`p`,Q);return n(Q,st),h(st,`text-sm opacity-70 leading-6`),n(st,e(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),r}):``;t(()=>m(r,A,M))}),r})}),p,_),p})};export{O as default};
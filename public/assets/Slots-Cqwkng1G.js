import{$ as e,J as t,Kt as n,Lt as r,Q as i,Vt as a,Y as o,Yt as s,Z as c,ct as l,d as u,et as d,l as f,mt as p,ot as m,t as h,tt as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _,n as v}from"./vapor-helpers-vapor-DkadWylb.js";import{a as y,i as b,r as x}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as S}from"./Code-B_4lzH85.js";import{t as C}from"./SidebarPlaygroundExample-CtM-WHq_.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=t=>u(n=>{let r=e(`section`,n);l(r,`card border border-base-300 bg-base-100 shadow-sm`);let p=e(`div`,r);o(r,p),l(p,`card-body gap-3`);let m=e(`div`,p);o(p,m),l(m,`space-y-1 border-b border-base-300 pb-3`);let g=c(`rue:component:anchor`);o(m,g);let _=u(()=>{let t=i(),n=e(`h3`,t);o(t,n),l(n,`font-semibold`),o(n,d(`默认标题`));let r=e(`p`,t);return o(t,r),l(r,`text-sm opacity-70`),o(r,d(`没传 title slot，就显示这里。`)),t});s(()=>{let e=h(y,{source:t,name:`title`,children:_});a(()=>f(e,m,g))});let v=e(`div`,p);o(p,v),l(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let b=c(`rue:component:anchor`);o(v,b);let x=u(()=>{let t=i(),n=e(`p`,t);return o(t,n),l(n,`opacity-70`),o(n,d(`没有传 default slot，所以这里显示 fallback。`)),t});s(()=>{let e=h(y,{source:t,children:x});a(()=>f(e,v,b))});let S=e(`div`,p);o(p,S),l(S,`text-sm opacity-70`);let C=c(`rue:component:anchor`);return o(S,C),s(()=>{let e=h(y,{source:t,name:`footer`,children:`默认底部`});a(()=>f(e,S,C))}),r}),ne=t=>u(n=>{let r=e(`ul`,n);l(r,`list rounded-box border border-base-300 bg-base-100`);let d=c(`rue:list:start`),_=c(`rue:list:end`);o(r,d),o(r,_);let b=new Map;return s(()=>{b=v({items:w||[],getKey:(e,t)=>e.label,elements:b,parent:d.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:d,renderItem:(n,r,d,_,v)=>{f(u(()=>{let r=i(),d=e(`li`,r);o(r,d),s(()=>{m(d,`key`,String(n.label))}),l(d,`list-row items-center gap-3`);let _=c(`rue:component:anchor`);o(d,_);let v=u(()=>{let t=i(),r=e(`div`,t);o(t,r),l(r,`flex w-full items-center justify-between gap-3`);let u=e(`span`,r);o(r,u),l(u,`font-medium`);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=n.label;a(()=>f(e,u,d))});let m=e(`span`,r);o(r,m),l(m,`badge badge-outline`);let h=g(m);return o(m,h),s(()=>{p(h,n.value)}),t});return s(()=>{let e=h(y,{source:t,name:`item`,props:n,children:v});a(()=>f(e,d,_))}),r}),r,d)}})}),r}),re=t=>u(n=>{let r=e(`section`,n);l(r,`card border border-base-300 bg-base-100 shadow-sm`);let _=e(`div`,r);o(r,_),l(_,`card-body gap-4`);let b=e(`div`,_);o(_,b),l(b,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let x=e(`div`,b);o(b,x),l(x,`space-y-1`);let S=c(`rue:component:anchor`);o(x,S);let C=u(()=>{let t=i(),n=e(`h2`,t);o(t,n),l(n,`card-title`),o(n,d(`默认标题`));let r=e(`p`,t);return o(t,r),l(r,`text-sm opacity-70`),o(r,d(`没有提供 title slot 时，会显示这段 fallback。`)),t});s(()=>{let e=h(y,{source:t,name:`title`,children:C});a(()=>f(e,x,S))});let w=e(`div`,b);o(b,w),l(w,`flex items-center gap-2`);let T=c(`rue:component:anchor`);o(w,T);let E=u(()=>{let t=i(),n=e(`span`,t);return o(t,n),l(n,`badge badge-outline`),o(n,d(`fallback action`)),t});s(()=>{let e=h(y,{source:t,name:`actions`,children:E});a(()=>f(e,w,T))});let D=e(`div`,_);o(_,D),l(D,`rounded-box bg-base-200 p-4`);let ne=c(`rue:component:anchor`);o(D,ne);let re=u(()=>{let t=i(),n=e(`p`,t);return o(t,n),l(n,`opacity-70`),o(n,d(`默认插槽为空时，这里显示主体内容的 fallback。`)),t});s(()=>{let e=h(y,{source:t,children:re});a(()=>f(e,D,ne))});let O=e(`ul`,_);o(_,O),l(O,`list rounded-box border border-base-300 bg-base-100`);let k=c(`rue:list:start`),A=c(`rue:list:end`);o(O,k),o(O,A);let j=new Map;return s(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(n,r,d,_,v)=>{f(u(()=>{let r=i(),d=e(`li`,r);o(r,d),s(()=>{m(d,`key`,String(n.label))}),l(d,`list-row items-center gap-3`);let _=c(`rue:component:anchor`);o(d,_);let v=u(()=>{let t=i(),r=e(`div`,t);o(t,r),l(r,`flex w-full items-center justify-between gap-3`);let u=e(`div`,r);o(r,u),l(u,`font-medium`);let d=c(`rue:slot:anchor`);o(u,d),s(()=>{let e=n.label;a(()=>f(e,u,d))});let m=e(`span`,r);o(r,m),s(()=>{l(m,String(`badge ${ee[n.tone]}`))});let h=g(m);return o(m,h),s(()=>{p(h,n.value)}),t});return s(()=>{let e=h(y,{source:t,name:`row`,props:n,children:v});a(()=>f(e,d,_))}),r}),r,d)}})}),r}),O=()=>{let{activeTab:v,showTitleSlot:y,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>n(()=>({activeTab:_(`ref:1:0`,()=>r(`preview`)),showTitleSlot:_(`ref:1:1`,()=>r(!0)),showActionsSlot:_(`ref:1:2`,()=>r(!0)),showDefaultSlot:_(`ref:1:3`,()=>r(!0)),showScopedRow:_(`ref:1:4`,()=>r(!0))})));return u(n=>{let r=i(),_=c(`rue:component:anchor`);return o(r,_),f(h(C,{children:u(()=>{let n=i(),r=e(`h1`,n);o(n,r),l(r,`text-5xl font-semibold mb-4 md:mb-4`),o(r,d(`插槽 Slots（default / named / scoped）`));let _=e(`div`,n);o(n,_),m(_,`role`,`tablist`),l(_,`tabs tabs-box`);let C=e(`button`,_);o(_,C),m(C,`role`,`tab`),s(()=>{l(C,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),t(C,`click`,()=>{v.value=`preview`}),o(C,d(`效果`));let k=e(`button`,_);o(_,k),m(k,`role`,`tab`),s(()=>{l(k,String(`tab ${v.value===`code`?`tab-active`:``}`))}),t(k,`click`,()=>{v.value=`code`}),o(k,d(`代码`));let A=e(`div`,n);o(n,A),l(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=c(`rue:slot:anchor`);o(A,j),s(()=>{let t=v.value===`code`?u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`grid gap-6`);let r=e(`div`,n);o(n,r),l(r,`card bg-base-100 shadow overflow-auto`);let u=e(`div`,r);o(r,u),l(u,`card-body p-0`);let p=e(`div`,u);o(u,p),l(p,`border-b border-base-300 px-4 py-3`);let m=e(`h2`,p);o(p,m),l(m,`card-title text-lg`),o(m,d(`先看最小例子`));let g=e(`p`,p);o(p,g),l(g,`text-sm opacity-70`),o(g,d(`先只看 default、named、scoped 各自最短怎么写。`));let _=c(`rue:component:anchor`);o(u,_),s(()=>{let e=h(S,{className:`h-[420px]`,lang:`tsx`,code:T});a(()=>f(e,u,_))});let v=e(`div`,n);o(n,v),l(v,`card bg-base-100 shadow overflow-auto`);let y=e(`div`,v);o(v,y),l(y,`card-body p-0`);let b=e(`div`,y);o(y,b),l(b,`border-b border-base-300 px-4 py-3`);let x=e(`h2`,b);o(b,x),l(x,`card-title text-lg`),o(x,d(`再看完整例子`));let C=e(`p`,b);o(b,C),l(C,`text-sm opacity-70`),o(C,d(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=c(`rue:component:anchor`);return o(y,ee),s(()=>{let e=h(S,{className:`h-[760px]`,lang:`tsx`,code:E});a(()=>f(e,y,ee))}),t}):``;a(()=>f(t,A,j))}),o(A,d(` `));let M=c(`rue:slot:anchor`);return o(A,M),s(()=>{let n=v.value===`preview`?u(()=>{let n=i(),r=e(`div`,n);o(n,r),l(r,`grid gap-6`);let _=e(`div`,r);o(r,_),m(_,`role`,`alert`),l(_,`alert alert-success`);let v=e(`span`,_);o(_,v),o(v,d(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=e(`div`,r);o(r,S),l(S,`card bg-base-100 shadow`);let C=e(`div`,S);o(S,C),l(C,`card-body gap-5`);let T=e(`div`,C);o(C,T);let E=e(`h2`,T);o(T,E),l(E,`card-title`),o(E,d(`先看最小例子`));let k=e(`p`,T);o(T,k),l(k,`text-sm opacity-70`),o(k,d(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=e(`div`,C);o(C,A),l(A,`grid gap-4 xl:grid-cols-3`);let j=e(`div`,A);o(A,j),l(j,`space-y-3`);let M=e(`div`,j);o(j,M);let ie=e(`h3`,M);o(M,ie),l(ie,`text-lg font-semibold`),o(ie,d(`1. default slot`));let ae=e(`p`,M);o(M,ae),l(ae,`text-sm opacity-70`),o(ae,d(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=c(`rue:component:anchor`);o(j,oe),f(h(D,{children:u(()=>{let t=i(),n=e(`p`,t);return o(t,n),o(n,d(`这段内容就是 default slot。`)),t})}),j,oe);let N=e(`div`,A);o(A,N),l(N,`space-y-3`);let P=e(`div`,N);o(N,P);let se=e(`h3`,P);o(P,se),l(se,`text-lg font-semibold`),o(se,d(`2. named slot`));let ce=e(`p`,P);o(P,ce),l(ce,`text-sm opacity-70`),o(ce,d(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=c(`rue:component:anchor`);o(N,le);let ue=u(()=>{let t=i(),n=e(`p`,t);return o(t,n),o(n,d(`中间这段还是 default slot。`)),t}),de=u(()=>{let t=i(),n=e(`span`,t);return o(t,n),l(n,`font-semibold text-base-content`),o(n,d(`自定义标题`)),t}),fe=u(()=>{let t=i(),n=e(`span`,t);return o(t,n),o(n,d(`自定义底部`)),t});s(()=>{let e=h(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});a(()=>f(e,N,le))});let F=e(`div`,A);o(A,F),l(F,`space-y-3`);let I=e(`div`,F);o(F,I);let pe=e(`h3`,I);o(I,pe),l(pe,`text-lg font-semibold`),o(pe,d(`3. scoped slot`));let me=e(`p`,I);o(I,me),l(me,`text-sm opacity-70`),o(me,d(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=c(`rue:component:anchor`);o(F,he),f(h(ne,{item:e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`font-medium`,children:e.label}),x(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),x(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=e(`div`,C);o(C,ge),m(ge,`role`,`alert`),l(ge,`alert alert-soft`);let _e=e(`span`,ge);o(ge,_e),o(_e,d(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=e(`div`,r);o(r,ve),l(ve,`card bg-base-100 shadow`);let L=e(`div`,ve);o(ve,L),l(L,`card-body gap-5`);let R=e(`div`,L);o(L,R),l(R,`flex flex-wrap items-center justify-between gap-3`);let ye=e(`div`,R);o(R,ye);let be=e(`h2`,ye);o(ye,be),l(be,`card-title`),o(be,d(`再看完整例子`));let xe=e(`p`,ye);o(ye,xe),l(xe,`text-sm opacity-70`),o(xe,d(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=e(`div`,R);o(R,z),l(z,`flex flex-wrap gap-2`);let Se=e(`button`,z);o(z,Se),s(()=>{l(Se,String(`btn btn-sm ${y.value?`btn-primary`:`btn-outline`}`))}),t(Se,`click`,()=>{y.value=!y.value}),o(Se,d(`title slot`));let Ce=e(`button`,z);o(z,Ce),s(()=>{l(Ce,String(`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`))}),t(Ce,`click`,()=>{te.value=!te.value}),o(Ce,d(`actions slot`));let we=e(`button`,z);o(z,we),s(()=>{l(we,String(`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`))}),t(we,`click`,()=>{w.value=!w.value}),o(we,d(`default slot`));let Te=e(`button`,z);o(z,Te),s(()=>{l(Te,String(`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`))}),t(Te,`click`,()=>{O.value=!O.value}),o(Te,d(`scoped row`));let B=e(`div`,L);o(L,B),l(B,`grid gap-5 xl:grid-cols-2`);let V=e(`div`,B);o(B,V),l(V,`space-y-3`);let H=e(`div`,V);o(V,H),l(H,`flex items-center justify-between gap-3`);let Ee=e(`h3`,H);o(H,Ee),l(Ee,`text-lg font-semibold`),o(Ee,d(`传入 slot 之后`));let De=e(`span`,H);o(H,De),l(De,`badge badge-success badge-outline`),o(De,d(`自定义内容生效`));let Oe=c(`rue:component:anchor`);o(V,Oe);let ke=u(()=>{let t=i(),n=e(`div`,t);o(t,n),l(n,`space-y-3`);let r=e(`p`,n);o(n,r),l(r,`text-sm leading-6`),o(r,d(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let a=e(`div`,n);o(n,a),l(a,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let s=e(`div`,a);o(a,s),l(s,`stat py-3`);let c=e(`div`,s);o(s,c),l(c,`stat-title`),o(c,d(`可用率`));let u=e(`div`,s);o(s,u),l(u,`stat-value text-2xl`),o(u,d(`99.98%`));let f=e(`div`,s);o(s,f),l(f,`stat-desc`),o(f,d(`过去 24 小时`));let p=e(`div`,a);o(a,p),l(p,`stat py-3`);let m=e(`div`,p);o(p,m),l(m,`stat-title`),o(m,d(`峰值请求`));let h=e(`div`,p);o(p,h),l(h,`stat-value text-2xl`),o(h,d(`18k`));let g=e(`div`,p);return o(p,g),l(g,`stat-desc`),o(g,d(`每分钟`)),t}),Ae=u(()=>{let t=i(),n=e(`h2`,t);o(t,n),l(n,`card-title`),o(n,d(`支付面板`));let r=e(`p`,t);return o(t,r),l(r,`text-sm opacity-70`),o(r,d(`Template slot="title" 可以一次传多个兄弟节点。`)),t}),je=u(()=>{let t=i(),n=e(`button`,t);return o(t,n),l(n,`btn btn-sm btn-primary`),o(n,d(`刷新`)),t});s(()=>{let e=h(re,{row:O.value?e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`font-medium`,children:e.label}),x(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),x(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:y.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});a(()=>f(e,V,Oe))});let U=e(`div`,B);o(B,U),l(U,`space-y-3`);let W=e(`div`,U);o(U,W),l(W,`flex items-center justify-between gap-3`);let Me=e(`h3`,W);o(W,Me),l(Me,`text-lg font-semibold`),o(Me,d(`省略 slot 之后`));let Ne=e(`span`,W);o(W,Ne),l(Ne,`badge badge-warning badge-outline`),o(Ne,d(`fallback 接管`));let Pe=c(`rue:component:anchor`);o(U,Pe),f(h(re,{}),U,Pe);let G=e(`div`,r);o(r,G),l(G,`grid gap-4 xl:grid-cols-2`);let Fe=e(`div`,G);o(G,Fe),l(Fe,`card bg-base-100 shadow`);let K=e(`div`,Fe);o(Fe,K),l(K,`card-body gap-3`);let Ie=e(`h2`,K);o(K,Ie),l(Ie,`card-title`),o(Ie,d(`当前推荐写法`));let q=e(`ul`,K);o(K,q),l(q,`list rounded-box border border-base-300 bg-base-100`);let J=e(`li`,q);o(q,J),l(J,`list-row`);let Le=e(`div`,J);o(J,Le),l(Le,`font-medium`),o(Le,d(`default slot`));let Re=e(`div`,J);o(J,Re),l(Re,`opacity-70`),o(Re,d(`直接写在组件标签内部，最终会落到 props.children。`));let Y=e(`li`,q);o(q,Y),l(Y,`list-row`);let ze=e(`div`,Y);o(Y,ze),l(ze,`font-medium`),o(ze,d(`named slot`));let Be=e(`div`,Y);o(Y,Be),l(Be,`opacity-70`),o(Be,d(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=e(`li`,q);o(q,X),l(X,`list-row`);let Ve=e(`div`,X);o(X,Ve),l(Ve,`font-medium`),o(Ve,d(`scoped slot`));let He=e(`div`,X);o(X,He),l(He,`opacity-70`),o(He,d(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=e(`li`,q);o(q,Z),l(Z,`list-row`);let Ue=e(`div`,Z);o(Z,Ue),l(Ue,`font-medium`),o(Ue,d(`fallback`));let We=e(`div`,Z);o(Z,We),l(We,`opacity-70`),o(We,d(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=e(`div`,G);o(G,Ge),l(Ge,`card bg-base-100 shadow`);let Q=e(`div`,Ge);o(Ge,Q),l(Q,`card-body gap-3`);let Ke=e(`h2`,Q);o(Q,Ke),l(Ke,`card-title`),o(Ke,d(`这页实际演示的协议`));let qe=e(`div`,Q);o(Q,qe),m(qe,`role`,`alert`),l(qe,`alert alert-soft`);let Je=e(`span`,qe);o(qe,Je),o(Je,d(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=e(`div`,Q);o(Q,$),l($,`mockup-code text-sm`);let Ye=e(`pre`,$);o($,Ye),m(Ye,`data-prefix`,`1`);let Xe=e(`code`,Ye);o(Ye,Xe);let Ze=g(Xe);o(Xe,Ze),p(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=e(`pre`,$);o($,Qe),m(Qe,`data-prefix`,`2`);let $e=e(`code`,Qe);o(Qe,$e);let et=g($e);o($e,et),p(et,`<Template slot="title">...</Template>`);let tt=e(`pre`,$);o($,tt),m(tt,`data-prefix`,`3`);let nt=e(`code`,tt);o(tt,nt);let rt=g(nt);o(nt,rt),p(rt,`<button slot="actions">刷新</button>`);let it=e(`pre`,$);o($,it),m(it,`data-prefix`,`4`);let at=e(`code`,it);o(it,at);let ot=g(at);o(at,ot),p(ot,`<SlotPanel row={(slotProps) => ...}>...</SlotPanel>`);let st=e(`p`,Q);return o(Q,st),l(st,`text-sm opacity-70 leading-6`),o(st,d(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),n}):``;a(()=>f(n,A,M))}),n})}),r,_),r})};export{O as default};
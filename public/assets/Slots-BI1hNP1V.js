import{$ as e,Ht as t,J as n,Q as r,Rt as i,Xt as a,Y as o,Z as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as y,i as b,o as x}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as S}from"./Code-5DOEyGxf.js";import{r as C}from"./SidebarPlaygroundExample-cASgDpH3.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=n=>u(i=>{let d=e(`section`,i);c(d,`card border border-base-300 bg-base-100 shadow-sm`);let f=e(`div`,d);o(d,f),c(f,`card-body gap-3`);let p=e(`div`,f);o(f,p),c(p,`space-y-1 border-b border-base-300 pb-3`);let g=s(`rue:component:anchor`);o(p,g);let _=u(()=>{let t=r(),n=e(`h3`,t);o(t,n),c(n,`font-semibold`),o(n,l(`默认标题`));let i=e(`p`,t);return o(t,i),c(i,`text-sm opacity-70`),o(i,l(`没传 title slot，就显示这里。`)),t});a(()=>{let e=h(x,{source:n,name:`title`,children:_});t(()=>m(e,p,g))});let v=e(`div`,f);o(f,v),c(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let y=s(`rue:component:anchor`);o(v,y);let b=u(()=>{let t=r(),n=e(`p`,t);return o(t,n),c(n,`opacity-70`),o(n,l(`没有传 default slot，所以这里显示 fallback。`)),t});a(()=>{let e=h(x,{source:n,children:b});t(()=>m(e,v,y))});let S=e(`div`,f);o(f,S),c(S,`text-sm opacity-70`);let C=s(`rue:component:anchor`);return o(S,C),a(()=>{let e=h(x,{source:n,name:`footer`,children:`默认底部`});t(()=>m(e,S,C))}),d}),ne=n=>u(i=>{let l=e(`ul`,i);c(l,`list rounded-box border border-base-300 bg-base-100`);let p=s(`rue:list:start`),_=s(`rue:list:end`);o(l,p),o(l,_);let y=new Map;return a(()=>{y=v({items:w||[],getKey:(e,t)=>e.label,elements:y,parent:p.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:p,renderItem:(i,l,p,_,v)=>{m(u(()=>{let l=r(),p=e(`li`,l);o(l,p),a(()=>{f(p,`key`,String(i.label))}),c(p,`list-row items-center gap-3`);let _=s(`rue:component:anchor`);o(p,_);let v=u(()=>{let n=r(),l=e(`div`,n);o(n,l),c(l,`flex w-full items-center justify-between gap-3`);let u=e(`span`,l);o(l,u),c(u,`font-medium`);let f=s(`rue:slot:anchor`);o(u,f),a(()=>{let e=i.label;t(()=>m(e,u,f))});let p=e(`span`,l);o(l,p),c(p,`badge badge-outline`);let h=g(p);return o(p,h),a(()=>{d(h,i.value)}),n});return a(()=>{let e=h(x,{source:n,name:`item`,props:i,children:v});t(()=>m(e,p,_))}),l}),l,p)}})}),l}),re=n=>u(i=>{let p=e(`section`,i);c(p,`card border border-base-300 bg-base-100 shadow-sm`);let _=e(`div`,p);o(p,_),c(_,`card-body gap-4`);let y=e(`div`,_);o(_,y),c(y,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let b=e(`div`,y);o(y,b),c(b,`space-y-1`);let S=s(`rue:component:anchor`);o(b,S);let C=u(()=>{let t=r(),n=e(`h2`,t);o(t,n),c(n,`card-title`),o(n,l(`默认标题`));let i=e(`p`,t);return o(t,i),c(i,`text-sm opacity-70`),o(i,l(`没有提供 title slot 时，会显示这段 fallback。`)),t});a(()=>{let e=h(x,{source:n,name:`title`,children:C});t(()=>m(e,b,S))});let w=e(`div`,y);o(y,w),c(w,`flex items-center gap-2`);let T=s(`rue:component:anchor`);o(w,T);let E=u(()=>{let t=r(),n=e(`span`,t);return o(t,n),c(n,`badge badge-outline`),o(n,l(`fallback action`)),t});a(()=>{let e=h(x,{source:n,name:`actions`,children:E});t(()=>m(e,w,T))});let D=e(`div`,_);o(_,D),c(D,`rounded-box bg-base-200 p-4`);let ne=s(`rue:component:anchor`);o(D,ne);let re=u(()=>{let t=r(),n=e(`p`,t);return o(t,n),c(n,`opacity-70`),o(n,l(`默认插槽为空时，这里显示主体内容的 fallback。`)),t});a(()=>{let e=h(x,{source:n,children:re});t(()=>m(e,D,ne))});let O=e(`ul`,_);o(_,O),c(O,`list rounded-box border border-base-300 bg-base-100`);let k=s(`rue:list:start`),A=s(`rue:list:end`);o(O,k),o(O,A);let j=new Map;return a(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(i,l,p,_,v)=>{m(u(()=>{let l=r(),p=e(`li`,l);o(l,p),a(()=>{f(p,`key`,String(i.label))}),c(p,`list-row items-center gap-3`);let _=s(`rue:component:anchor`);o(p,_);let v=u(()=>{let n=r(),l=e(`div`,n);o(n,l),c(l,`flex w-full items-center justify-between gap-3`);let u=e(`div`,l);o(l,u),c(u,`font-medium`);let f=s(`rue:slot:anchor`);o(u,f),a(()=>{let e=i.label;t(()=>m(e,u,f))});let p=e(`span`,l);o(l,p),a(()=>{c(p,String(`badge ${ee[i.tone]}`))});let h=g(p);return o(p,h),a(()=>{d(h,i.value)}),n});return a(()=>{let e=h(x,{source:n,name:`row`,props:i,children:v});t(()=>m(e,p,_))}),l}),l,p)}})}),p}),O=()=>{let{activeTab:v,showTitleSlot:x,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>p(()=>({activeTab:_(`ref:1:0`,()=>i(`preview`)),showTitleSlot:_(`ref:1:1`,()=>i(!0)),showActionsSlot:_(`ref:1:2`,()=>i(!0)),showDefaultSlot:_(`ref:1:3`,()=>i(!0)),showScopedRow:_(`ref:1:4`,()=>i(!0))})));return u(i=>{let p=r(),_=s(`rue:component:anchor`);return o(p,_),m(h(C,{children:u(()=>{let i=r(),p=e(`h1`,i);o(i,p),c(p,`text-5xl font-semibold mb-4 md:mb-4`),o(p,l(`插槽 Slots（default / named / scoped）`));let _=e(`div`,i);o(i,_),f(_,`role`,`tablist`),c(_,`tabs tabs-box`);let C=e(`button`,_);o(_,C),f(C,`role`,`tab`),a(()=>{c(C,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),n(C,`click`,()=>{v.value=`preview`}),o(C,l(`效果`));let k=e(`button`,_);o(_,k),f(k,`role`,`tab`),a(()=>{c(k,String(`tab ${v.value===`code`?`tab-active`:``}`))}),n(k,`click`,()=>{v.value=`code`}),o(k,l(`代码`));let A=e(`div`,i);o(i,A),c(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=s(`rue:slot:anchor`);o(A,j),a(()=>{let n=v.value===`code`?u(()=>{let n=r(),i=e(`div`,n);o(n,i),c(i,`grid gap-6`);let u=e(`div`,i);o(i,u),c(u,`card bg-base-100 shadow overflow-auto`);let d=e(`div`,u);o(u,d),c(d,`card-body p-0`);let f=e(`div`,d);o(d,f),c(f,`border-b border-base-300 px-4 py-3`);let p=e(`h2`,f);o(f,p),c(p,`card-title text-lg`),o(p,l(`先看最小例子`));let g=e(`p`,f);o(f,g),c(g,`text-sm opacity-70`),o(g,l(`先只看 default、named、scoped 各自最短怎么写。`));let _=s(`rue:component:anchor`);o(d,_),a(()=>{let e=h(S,{className:`h-[420px]`,lang:`tsx`,code:T});t(()=>m(e,d,_))});let v=e(`div`,i);o(i,v),c(v,`card bg-base-100 shadow overflow-auto`);let y=e(`div`,v);o(v,y),c(y,`card-body p-0`);let b=e(`div`,y);o(y,b),c(b,`border-b border-base-300 px-4 py-3`);let x=e(`h2`,b);o(b,x),c(x,`card-title text-lg`),o(x,l(`再看完整例子`));let C=e(`p`,b);o(b,C),c(C,`text-sm opacity-70`),o(C,l(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=s(`rue:component:anchor`);return o(y,ee),a(()=>{let e=h(S,{className:`h-[760px]`,lang:`tsx`,code:E});t(()=>m(e,y,ee))}),n}):``;t(()=>m(n,A,j))}),o(A,l(` `));let M=s(`rue:slot:anchor`);return o(A,M),a(()=>{let i=v.value===`preview`?u(()=>{let i=r(),p=e(`div`,i);o(i,p),c(p,`grid gap-6`);let _=e(`div`,p);o(p,_),f(_,`role`,`alert`),c(_,`alert alert-success`);let v=e(`span`,_);o(_,v),o(v,l(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=e(`div`,p);o(p,S),c(S,`card bg-base-100 shadow`);let C=e(`div`,S);o(S,C),c(C,`card-body gap-5`);let T=e(`div`,C);o(C,T);let E=e(`h2`,T);o(T,E),c(E,`card-title`),o(E,l(`先看最小例子`));let k=e(`p`,T);o(T,k),c(k,`text-sm opacity-70`),o(k,l(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=e(`div`,C);o(C,A),c(A,`grid gap-4 xl:grid-cols-3`);let j=e(`div`,A);o(A,j),c(j,`space-y-3`);let M=e(`div`,j);o(j,M);let ie=e(`h3`,M);o(M,ie),c(ie,`text-lg font-semibold`),o(ie,l(`1. default slot`));let ae=e(`p`,M);o(M,ae),c(ae,`text-sm opacity-70`),o(ae,l(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=s(`rue:component:anchor`);o(j,oe),m(h(D,{children:u(()=>{let t=r(),n=e(`p`,t);return o(t,n),o(n,l(`这段内容就是 default slot。`)),t})}),j,oe);let N=e(`div`,A);o(A,N),c(N,`space-y-3`);let P=e(`div`,N);o(N,P);let se=e(`h3`,P);o(P,se),c(se,`text-lg font-semibold`),o(se,l(`2. named slot`));let ce=e(`p`,P);o(P,ce),c(ce,`text-sm opacity-70`),o(ce,l(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=s(`rue:component:anchor`);o(N,le);let ue=u(()=>{let t=r(),n=e(`p`,t);return o(t,n),o(n,l(`中间这段还是 default slot。`)),t}),de=u(()=>{let t=r(),n=e(`span`,t);return o(t,n),c(n,`font-semibold text-base-content`),o(n,l(`自定义标题`)),t}),fe=u(()=>{let t=r(),n=e(`span`,t);return o(t,n),o(n,l(`自定义底部`)),t});a(()=>{let e=h(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});t(()=>m(e,N,le))});let F=e(`div`,A);o(A,F),c(F,`space-y-3`);let I=e(`div`,F);o(F,I);let pe=e(`h3`,I);o(I,pe),c(pe,`text-lg font-semibold`),o(pe,l(`3. scoped slot`));let me=e(`p`,I);o(I,me),c(me,`text-sm opacity-70`),o(me,l(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=s(`rue:component:anchor`);o(F,he),m(h(ne,{item:e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=e(`div`,C);o(C,ge),f(ge,`role`,`alert`),c(ge,`alert alert-soft`);let _e=e(`span`,ge);o(ge,_e),o(_e,l(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=e(`div`,p);o(p,ve),c(ve,`card bg-base-100 shadow`);let L=e(`div`,ve);o(ve,L),c(L,`card-body gap-5`);let R=e(`div`,L);o(L,R),c(R,`flex flex-wrap items-center justify-between gap-3`);let ye=e(`div`,R);o(R,ye);let be=e(`h2`,ye);o(ye,be),c(be,`card-title`),o(be,l(`再看完整例子`));let xe=e(`p`,ye);o(ye,xe),c(xe,`text-sm opacity-70`),o(xe,l(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=e(`div`,R);o(R,z),c(z,`flex flex-wrap gap-2`);let Se=e(`button`,z);o(z,Se),a(()=>{c(Se,String(`btn btn-sm ${x.value?`btn-primary`:`btn-outline`}`))}),n(Se,`click`,()=>{x.value=!x.value}),o(Se,l(`title slot`));let Ce=e(`button`,z);o(z,Ce),a(()=>{c(Ce,String(`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`))}),n(Ce,`click`,()=>{te.value=!te.value}),o(Ce,l(`actions slot`));let we=e(`button`,z);o(z,we),a(()=>{c(we,String(`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`))}),n(we,`click`,()=>{w.value=!w.value}),o(we,l(`default slot`));let Te=e(`button`,z);o(z,Te),a(()=>{c(Te,String(`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`))}),n(Te,`click`,()=>{O.value=!O.value}),o(Te,l(`scoped row`));let B=e(`div`,L);o(L,B),c(B,`grid gap-5 xl:grid-cols-2`);let V=e(`div`,B);o(B,V),c(V,`space-y-3`);let H=e(`div`,V);o(V,H),c(H,`flex items-center justify-between gap-3`);let Ee=e(`h3`,H);o(H,Ee),c(Ee,`text-lg font-semibold`),o(Ee,l(`传入 slot 之后`));let De=e(`span`,H);o(H,De),c(De,`badge badge-success badge-outline`),o(De,l(`自定义内容生效`));let Oe=s(`rue:component:anchor`);o(V,Oe);let ke=u(()=>{let t=r(),n=e(`div`,t);o(t,n),c(n,`space-y-3`);let i=e(`p`,n);o(n,i),c(i,`text-sm leading-6`),o(i,l(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let a=e(`div`,n);o(n,a),c(a,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let s=e(`div`,a);o(a,s),c(s,`stat py-3`);let u=e(`div`,s);o(s,u),c(u,`stat-title`),o(u,l(`可用率`));let d=e(`div`,s);o(s,d),c(d,`stat-value text-2xl`),o(d,l(`99.98%`));let f=e(`div`,s);o(s,f),c(f,`stat-desc`),o(f,l(`过去 24 小时`));let p=e(`div`,a);o(a,p),c(p,`stat py-3`);let m=e(`div`,p);o(p,m),c(m,`stat-title`),o(m,l(`峰值请求`));let h=e(`div`,p);o(p,h),c(h,`stat-value text-2xl`),o(h,l(`18k`));let g=e(`div`,p);return o(p,g),c(g,`stat-desc`),o(g,l(`每分钟`)),t}),Ae=u(()=>{let t=r(),n=e(`h2`,t);o(t,n),c(n,`card-title`),o(n,l(`支付面板`));let i=e(`p`,t);return o(t,i),c(i,`text-sm opacity-70`),o(i,l(`Template slot="title" 可以一次传多个兄弟节点。`)),t}),je=u(()=>{let t=r(),n=e(`button`,t);return o(t,n),c(n,`btn btn-sm btn-primary`),o(n,l(`刷新`)),t});a(()=>{let e=h(re,{row:O.value?e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:x.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});t(()=>m(e,V,Oe))});let U=e(`div`,B);o(B,U),c(U,`space-y-3`);let W=e(`div`,U);o(U,W),c(W,`flex items-center justify-between gap-3`);let Me=e(`h3`,W);o(W,Me),c(Me,`text-lg font-semibold`),o(Me,l(`省略 slot 之后`));let Ne=e(`span`,W);o(W,Ne),c(Ne,`badge badge-warning badge-outline`),o(Ne,l(`fallback 接管`));let Pe=s(`rue:component:anchor`);o(U,Pe),m(h(re,{}),U,Pe);let G=e(`div`,p);o(p,G),c(G,`grid gap-4 xl:grid-cols-2`);let Fe=e(`div`,G);o(G,Fe),c(Fe,`card bg-base-100 shadow`);let K=e(`div`,Fe);o(Fe,K),c(K,`card-body gap-3`);let Ie=e(`h2`,K);o(K,Ie),c(Ie,`card-title`),o(Ie,l(`当前推荐写法`));let q=e(`ul`,K);o(K,q),c(q,`list rounded-box border border-base-300 bg-base-100`);let J=e(`li`,q);o(q,J),c(J,`list-row`);let Le=e(`div`,J);o(J,Le),c(Le,`font-medium`),o(Le,l(`default slot`));let Re=e(`div`,J);o(J,Re),c(Re,`opacity-70`),o(Re,l(`直接写在组件标签内部，最终会落到 props.children。`));let Y=e(`li`,q);o(q,Y),c(Y,`list-row`);let ze=e(`div`,Y);o(Y,ze),c(ze,`font-medium`),o(ze,l(`named slot`));let Be=e(`div`,Y);o(Y,Be),c(Be,`opacity-70`),o(Be,l(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=e(`li`,q);o(q,X),c(X,`list-row`);let Ve=e(`div`,X);o(X,Ve),c(Ve,`font-medium`),o(Ve,l(`scoped slot`));let He=e(`div`,X);o(X,He),c(He,`opacity-70`),o(He,l(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=e(`li`,q);o(q,Z),c(Z,`list-row`);let Ue=e(`div`,Z);o(Z,Ue),c(Ue,`font-medium`),o(Ue,l(`fallback`));let We=e(`div`,Z);o(Z,We),c(We,`opacity-70`),o(We,l(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=e(`div`,G);o(G,Ge),c(Ge,`card bg-base-100 shadow`);let Q=e(`div`,Ge);o(Ge,Q),c(Q,`card-body gap-3`);let Ke=e(`h2`,Q);o(Q,Ke),c(Ke,`card-title`),o(Ke,l(`这页实际演示的协议`));let qe=e(`div`,Q);o(Q,qe),f(qe,`role`,`alert`),c(qe,`alert alert-soft`);let Je=e(`span`,qe);o(qe,Je),o(Je,l(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=e(`div`,Q);o(Q,$),c($,`mockup-code text-sm`);let Ye=e(`pre`,$);o($,Ye),f(Ye,`data-prefix`,`1`);let Xe=e(`code`,Ye);o(Ye,Xe);let Ze=g(Xe);o(Xe,Ze),d(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=e(`pre`,$);o($,Qe),f(Qe,`data-prefix`,`2`);let $e=e(`code`,Qe);o(Qe,$e);let et=g($e);o($e,et),d(et,`<Template slot="title">...</Template>`);let tt=e(`pre`,$);o($,tt),f(tt,`data-prefix`,`3`);let nt=e(`code`,tt);o(tt,nt);let rt=g(nt);o(nt,rt),d(rt,`<button slot="actions">刷新</button>`);let it=e(`pre`,$);o($,it),f(it,`data-prefix`,`4`);let at=e(`code`,it);o(it,at);let ot=g(at);o(at,ot),d(ot,`<SlotPanel row={(slotProps) => ...}>...</SlotPanel>`);let st=e(`p`,Q);return o(Q,st),c(st,`text-sm opacity-70 leading-6`),o(st,l(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),i}):``;t(()=>m(i,A,M))}),i})}),p,_),p})};export{O as default};
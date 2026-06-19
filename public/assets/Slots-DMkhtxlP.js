import{$ as e,$t as t,Bt as n,Gt as r,X as i,Xt as a,Z as o,ct as s,et as c,gt as l,l as u,nt as d,o as f,rt as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as y,i as b,o as x}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as S}from"./Code-D5UqTwV6.js";import{r as C}from"./SidebarPlaygroundExample-D2vGHFCu.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=n=>u(i=>{let a=h(`section`,i);g(a,`card border border-base-300 bg-base-100 shadow-sm`);let s=h(`div`,a);o(a,s),g(s,`card-body gap-3`);let l=h(`div`,s);o(s,l),g(l,`space-y-1 border-b border-base-300 pb-3`);let p=e(`rue:component:anchor`);o(l,p);let _=u(()=>{let e=c(),t=h(`h3`,e);o(e,t),g(t,`font-semibold`),o(t,d(`默认标题`));let n=h(`p`,e);return o(e,n),g(n,`text-sm opacity-70`),o(n,d(`没传 title slot，就显示这里。`)),e});t(()=>{let e=m(x,{source:n,name:`title`,children:_});r(()=>f(e,l,p))});let v=h(`div`,s);o(s,v),g(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let y=e(`rue:component:anchor`);o(v,y);let b=u(()=>{let e=c(),t=h(`p`,e);return o(e,t),g(t,`opacity-70`),o(t,d(`没有传 default slot，所以这里显示 fallback。`)),e});t(()=>{let e=m(x,{source:n,children:b});r(()=>f(e,v,y))});let S=h(`div`,s);o(s,S),g(S,`text-sm opacity-70`);let C=e(`rue:component:anchor`);return o(S,C),t(()=>{let e=m(x,{source:n,name:`footer`,children:`默认底部`});r(()=>f(e,S,C))}),a}),ne=n=>u(i=>{let a=h(`ul`,i);g(a,`list rounded-box border border-base-300 bg-base-100`);let d=e(`rue:list:start`),_=e(`rue:list:end`);o(a,d),o(a,_);let y=new Map;return t(()=>{y=v({items:w||[],getKey:(e,t)=>e.label,elements:y,parent:d.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:d,renderItem:(i,a,d,_,v)=>{f(u(()=>{let a=c(),d=h(`li`,a);o(a,d),t(()=>{s(d,`key`,String(i.label))}),g(d,`list-row items-center gap-3`);let _=e(`rue:component:anchor`);o(d,_);let v=u(()=>{let n=c(),a=h(`div`,n);o(n,a),g(a,`flex w-full items-center justify-between gap-3`);let s=h(`span`,a);o(a,s),g(s,`font-medium`);let u=e(`rue:slot:anchor`);o(s,u),t(()=>{let e=i.label;r(()=>f(e,s,u))});let d=h(`span`,a);o(a,d),g(d,`badge badge-outline`);let m=p(d);return o(d,m),t(()=>{l(m,i.value)}),n});return t(()=>{let e=m(x,{source:n,name:`item`,props:i,children:v});r(()=>f(e,d,_))}),a}),a,d)}})}),a}),re=n=>u(i=>{let a=h(`section`,i);g(a,`card border border-base-300 bg-base-100 shadow-sm`);let _=h(`div`,a);o(a,_),g(_,`card-body gap-4`);let y=h(`div`,_);o(_,y),g(y,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let b=h(`div`,y);o(y,b),g(b,`space-y-1`);let S=e(`rue:component:anchor`);o(b,S);let C=u(()=>{let e=c(),t=h(`h2`,e);o(e,t),g(t,`card-title`),o(t,d(`默认标题`));let n=h(`p`,e);return o(e,n),g(n,`text-sm opacity-70`),o(n,d(`没有提供 title slot 时，会显示这段 fallback。`)),e});t(()=>{let e=m(x,{source:n,name:`title`,children:C});r(()=>f(e,b,S))});let w=h(`div`,y);o(y,w),g(w,`flex items-center gap-2`);let T=e(`rue:component:anchor`);o(w,T);let E=u(()=>{let e=c(),t=h(`span`,e);return o(e,t),g(t,`badge badge-outline`),o(t,d(`fallback action`)),e});t(()=>{let e=m(x,{source:n,name:`actions`,children:E});r(()=>f(e,w,T))});let D=h(`div`,_);o(_,D),g(D,`rounded-box bg-base-200 p-4`);let ne=e(`rue:component:anchor`);o(D,ne);let re=u(()=>{let e=c(),t=h(`p`,e);return o(e,t),g(t,`opacity-70`),o(t,d(`默认插槽为空时，这里显示主体内容的 fallback。`)),e});t(()=>{let e=m(x,{source:n,children:re});r(()=>f(e,D,ne))});let O=h(`ul`,_);o(_,O),g(O,`list rounded-box border border-base-300 bg-base-100`);let k=e(`rue:list:start`),A=e(`rue:list:end`);o(O,k),o(O,A);let j=new Map;return t(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(i,a,d,_,v)=>{f(u(()=>{let a=c(),d=h(`li`,a);o(a,d),t(()=>{s(d,`key`,String(i.label))}),g(d,`list-row items-center gap-3`);let _=e(`rue:component:anchor`);o(d,_);let v=u(()=>{let n=c(),a=h(`div`,n);o(n,a),g(a,`flex w-full items-center justify-between gap-3`);let s=h(`div`,a);o(a,s),g(s,`font-medium`);let u=e(`rue:slot:anchor`);o(s,u),t(()=>{let e=i.label;r(()=>f(e,s,u))});let d=h(`span`,a);o(a,d),t(()=>{g(d,`badge ${ee[i.tone]}`)});let m=p(d);return o(d,m),t(()=>{l(m,i.value)}),n});return t(()=>{let e=m(x,{source:n,name:`row`,props:i,children:v});r(()=>f(e,d,_))}),a}),a,d)}})}),a}),O=()=>{let{activeTab:v,showTitleSlot:x,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>a(()=>({activeTab:_(`ref:1:0`,()=>n(`preview`)),showTitleSlot:_(`ref:1:1`,()=>n(!0)),showActionsSlot:_(`ref:1:2`,()=>n(!0)),showDefaultSlot:_(`ref:1:3`,()=>n(!0)),showScopedRow:_(`ref:1:4`,()=>n(!0))})));return u(n=>{let a=c(),_=e(`rue:component:anchor`);return o(a,_),f(m(C,{children:u(()=>{let n=c(),a=h(`h1`,n);o(n,a),g(a,`text-5xl font-semibold mb-4 md:mb-4`),o(a,d(`插槽 Slots（default / named / scoped）`));let _=h(`div`,n);o(n,_),s(_,`role`,`tablist`),g(_,`tabs tabs-box`);let C=h(`button`,_);o(_,C),s(C,`role`,`tab`),t(()=>{g(C,`tab ${v.value===`preview`?`tab-active`:``}`)}),i(C,`click`,()=>{v.value=`preview`}),o(C,d(`效果`));let k=h(`button`,_);o(_,k),s(k,`role`,`tab`),t(()=>{g(k,`tab ${v.value===`code`?`tab-active`:``}`)}),i(k,`click`,()=>{v.value=`code`}),o(k,d(`代码`));let A=h(`div`,n);o(n,A),g(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=e(`rue:slot:anchor`);o(A,j),t(()=>{let n=v.value===`code`?u(()=>{let n=c(),i=h(`div`,n);o(n,i),g(i,`grid gap-6`);let a=h(`div`,i);o(i,a),g(a,`card bg-base-100 shadow overflow-auto`);let s=h(`div`,a);o(a,s),g(s,`card-body p-0`);let l=h(`div`,s);o(s,l),g(l,`border-b border-base-300 px-4 py-3`);let u=h(`h2`,l);o(l,u),g(u,`card-title text-lg`),o(u,d(`先看最小例子`));let p=h(`p`,l);o(l,p),g(p,`text-sm opacity-70`),o(p,d(`先只看 default、named、scoped 各自最短怎么写。`));let _=e(`rue:component:anchor`);o(s,_),t(()=>{let e=m(S,{className:`h-[420px]`,lang:`tsx`,code:T});r(()=>f(e,s,_))});let v=h(`div`,i);o(i,v),g(v,`card bg-base-100 shadow overflow-auto`);let y=h(`div`,v);o(v,y),g(y,`card-body p-0`);let b=h(`div`,y);o(y,b),g(b,`border-b border-base-300 px-4 py-3`);let x=h(`h2`,b);o(b,x),g(x,`card-title text-lg`),o(x,d(`再看完整例子`));let C=h(`p`,b);o(b,C),g(C,`text-sm opacity-70`),o(C,d(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=e(`rue:component:anchor`);return o(y,ee),t(()=>{let e=m(S,{className:`h-[760px]`,lang:`tsx`,code:E});r(()=>f(e,y,ee))}),n}):``;r(()=>f(n,A,j))}),o(A,d(` `));let M=e(`rue:slot:anchor`);return o(A,M),t(()=>{let n=v.value===`preview`?u(()=>{let n=c(),a=h(`div`,n);o(n,a),g(a,`grid gap-6`);let _=h(`div`,a);o(a,_),s(_,`role`,`alert`),g(_,`alert alert-success`);let v=h(`span`,_);o(_,v),o(v,d(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=h(`div`,a);o(a,S),g(S,`card bg-base-100 shadow`);let C=h(`div`,S);o(S,C),g(C,`card-body gap-5`);let T=h(`div`,C);o(C,T);let E=h(`h2`,T);o(T,E),g(E,`card-title`),o(E,d(`先看最小例子`));let k=h(`p`,T);o(T,k),g(k,`text-sm opacity-70`),o(k,d(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=h(`div`,C);o(C,A),g(A,`grid gap-4 xl:grid-cols-3`);let j=h(`div`,A);o(A,j),g(j,`space-y-3`);let M=h(`div`,j);o(j,M);let ie=h(`h3`,M);o(M,ie),g(ie,`text-lg font-semibold`),o(ie,d(`1. default slot`));let ae=h(`p`,M);o(M,ae),g(ae,`text-sm opacity-70`),o(ae,d(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=e(`rue:component:anchor`);o(j,oe),f(m(D,{children:u(()=>{let e=c(),t=h(`p`,e);return o(e,t),o(t,d(`这段内容就是 default slot。`)),e})}),j,oe);let N=h(`div`,A);o(A,N),g(N,`space-y-3`);let P=h(`div`,N);o(N,P);let se=h(`h3`,P);o(P,se),g(se,`text-lg font-semibold`),o(se,d(`2. named slot`));let ce=h(`p`,P);o(P,ce),g(ce,`text-sm opacity-70`),o(ce,d(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=e(`rue:component:anchor`);o(N,le);let ue=u(()=>{let e=c(),t=h(`p`,e);return o(e,t),o(t,d(`中间这段还是 default slot。`)),e}),de=u(()=>{let e=c(),t=h(`span`,e);return o(e,t),g(t,`font-semibold text-base-content`),o(t,d(`自定义标题`)),e}),fe=u(()=>{let e=c(),t=h(`span`,e);return o(e,t),o(t,d(`自定义底部`)),e});t(()=>{let e=m(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});r(()=>f(e,N,le))});let F=h(`div`,A);o(A,F),g(F,`space-y-3`);let I=h(`div`,F);o(F,I);let pe=h(`h3`,I);o(I,pe),g(pe,`text-lg font-semibold`),o(pe,d(`3. scoped slot`));let me=h(`p`,I);o(I,me),g(me,`text-sm opacity-70`),o(me,d(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=e(`rue:component:anchor`);o(F,he),f(m(ne,{item:e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=h(`div`,C);o(C,ge),s(ge,`role`,`alert`),g(ge,`alert alert-soft`);let _e=h(`span`,ge);o(ge,_e),o(_e,d(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=h(`div`,a);o(a,ve),g(ve,`card bg-base-100 shadow`);let L=h(`div`,ve);o(ve,L),g(L,`card-body gap-5`);let R=h(`div`,L);o(L,R),g(R,`flex flex-wrap items-center justify-between gap-3`);let ye=h(`div`,R);o(R,ye);let be=h(`h2`,ye);o(ye,be),g(be,`card-title`),o(be,d(`再看完整例子`));let xe=h(`p`,ye);o(ye,xe),g(xe,`text-sm opacity-70`),o(xe,d(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=h(`div`,R);o(R,z),g(z,`flex flex-wrap gap-2`);let Se=h(`button`,z);o(z,Se),t(()=>{g(Se,`btn btn-sm ${x.value?`btn-primary`:`btn-outline`}`)}),i(Se,`click`,()=>{x.value=!x.value}),o(Se,d(`title slot`));let Ce=h(`button`,z);o(z,Ce),t(()=>{g(Ce,`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`)}),i(Ce,`click`,()=>{te.value=!te.value}),o(Ce,d(`actions slot`));let we=h(`button`,z);o(z,we),t(()=>{g(we,`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`)}),i(we,`click`,()=>{w.value=!w.value}),o(we,d(`default slot`));let Te=h(`button`,z);o(z,Te),t(()=>{g(Te,`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`)}),i(Te,`click`,()=>{O.value=!O.value}),o(Te,d(`scoped row`));let B=h(`div`,L);o(L,B),g(B,`grid gap-5 xl:grid-cols-2`);let V=h(`div`,B);o(B,V),g(V,`space-y-3`);let H=h(`div`,V);o(V,H),g(H,`flex items-center justify-between gap-3`);let Ee=h(`h3`,H);o(H,Ee),g(Ee,`text-lg font-semibold`),o(Ee,d(`传入 slot 之后`));let De=h(`span`,H);o(H,De),g(De,`badge badge-success badge-outline`),o(De,d(`自定义内容生效`));let Oe=e(`rue:component:anchor`);o(V,Oe);let ke=u(()=>{let e=c(),t=h(`div`,e);o(e,t),g(t,`space-y-3`);let n=h(`p`,t);o(t,n),g(n,`text-sm leading-6`),o(n,d(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let r=h(`div`,t);o(t,r),g(r,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let i=h(`div`,r);o(r,i),g(i,`stat py-3`);let a=h(`div`,i);o(i,a),g(a,`stat-title`),o(a,d(`可用率`));let s=h(`div`,i);o(i,s),g(s,`stat-value text-2xl`),o(s,d(`99.98%`));let l=h(`div`,i);o(i,l),g(l,`stat-desc`),o(l,d(`过去 24 小时`));let u=h(`div`,r);o(r,u),g(u,`stat py-3`);let f=h(`div`,u);o(u,f),g(f,`stat-title`),o(f,d(`峰值请求`));let p=h(`div`,u);o(u,p),g(p,`stat-value text-2xl`),o(p,d(`18k`));let m=h(`div`,u);return o(u,m),g(m,`stat-desc`),o(m,d(`每分钟`)),e}),Ae=u(()=>{let e=c(),t=h(`h2`,e);o(e,t),g(t,`card-title`),o(t,d(`支付面板`));let n=h(`p`,e);return o(e,n),g(n,`text-sm opacity-70`),o(n,d(`Template slot="title" 可以一次传多个兄弟节点。`)),e}),je=u(()=>{let e=c(),t=h(`button`,e);return o(e,t),g(t,`btn btn-sm btn-primary`),o(t,d(`刷新`)),e});t(()=>{let e=m(re,{row:O.value?e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:x.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});r(()=>f(e,V,Oe))});let U=h(`div`,B);o(B,U),g(U,`space-y-3`);let W=h(`div`,U);o(U,W),g(W,`flex items-center justify-between gap-3`);let Me=h(`h3`,W);o(W,Me),g(Me,`text-lg font-semibold`),o(Me,d(`未传 slot 时`));let Ne=h(`span`,W);o(W,Ne),g(Ne,`badge badge-warning badge-outline`),o(Ne,d(`fallback 接管`));let Pe=e(`rue:component:anchor`);o(U,Pe),f(m(re,{}),U,Pe);let G=h(`div`,a);o(a,G),g(G,`grid gap-4 xl:grid-cols-2`);let Fe=h(`div`,G);o(G,Fe),g(Fe,`card bg-base-100 shadow`);let K=h(`div`,Fe);o(Fe,K),g(K,`card-body gap-3`);let Ie=h(`h2`,K);o(K,Ie),g(Ie,`card-title`),o(Ie,d(`当前推荐写法`));let q=h(`ul`,K);o(K,q),g(q,`list rounded-box border border-base-300 bg-base-100`);let J=h(`li`,q);o(q,J),g(J,`list-row`);let Le=h(`div`,J);o(J,Le),g(Le,`font-medium`),o(Le,d(`default slot`));let Re=h(`div`,J);o(J,Re),g(Re,`opacity-70`),o(Re,d(`直接写在组件标签内部，最终会落到 props.children。`));let Y=h(`li`,q);o(q,Y),g(Y,`list-row`);let ze=h(`div`,Y);o(Y,ze),g(ze,`font-medium`),o(ze,d(`named slot`));let Be=h(`div`,Y);o(Y,Be),g(Be,`opacity-70`),o(Be,d(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=h(`li`,q);o(q,X),g(X,`list-row`);let Ve=h(`div`,X);o(X,Ve),g(Ve,`font-medium`),o(Ve,d(`scoped slot`));let He=h(`div`,X);o(X,He),g(He,`opacity-70`),o(He,d(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=h(`li`,q);o(q,Z),g(Z,`list-row`);let Ue=h(`div`,Z);o(Z,Ue),g(Ue,`font-medium`),o(Ue,d(`fallback`));let We=h(`div`,Z);o(Z,We),g(We,`opacity-70`),o(We,d(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=h(`div`,G);o(G,Ge),g(Ge,`card bg-base-100 shadow`);let Q=h(`div`,Ge);o(Ge,Q),g(Q,`card-body gap-3`);let Ke=h(`h2`,Q);o(Q,Ke),g(Ke,`card-title`),o(Ke,d(`这页实际演示的协议`));let qe=h(`div`,Q);o(Q,qe),s(qe,`role`,`alert`),g(qe,`alert alert-soft`);let Je=h(`span`,qe);o(qe,Je),o(Je,d(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=h(`div`,Q);o(Q,$),g($,`mockup-code text-sm`);let Ye=h(`pre`,$);o($,Ye),s(Ye,`data-prefix`,`1`);let Xe=h(`code`,Ye);o(Ye,Xe);let Ze=p(Xe);o(Xe,Ze),l(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=h(`pre`,$);o($,Qe),s(Qe,`data-prefix`,`2`);let $e=h(`code`,Qe);o(Qe,$e);let et=p($e);o($e,et),l(et,`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`);let tt=h(`pre`,$);o($,tt),s(tt,`data-prefix`,`3`);let nt=h(`code`,tt);o(tt,nt);let rt=p(nt);o(nt,rt),l(rt,`<button slot="actions">刷新</button>`);let it=h(`pre`,$);o($,it),s(it,`data-prefix`,`4`);let at=h(`code`,it);o(it,at);let ot=p(at);o(at,ot),l(ot,`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`);let st=h(`p`,Q);return o(Q,st),g(st,`text-sm opacity-70 leading-6`),o(st,d(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),n}):``;r(()=>f(n,A,M))}),n})}),a,_),a})};export{O as default};
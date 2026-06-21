import{$t as e,Jt as t,Q as n,Z as r,dt as i,et as a,in as o,it as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as y,i as b,o as x}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as S}from"./Code-4SUSUwRg.js";import{r as C}from"./SidebarPlaygroundExample-BEWYUWOl.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=t=>c(r=>{let o=u(`section`,r);i(o,`card border border-base-300 bg-base-100 shadow-sm`);let s=u(`div`,o);n(o,s),i(s,`card-body gap-3`);let l=u(`div`,s);n(s,l),i(l,`space-y-1 border-b border-base-300 pb-3`);let h=a(`rue:component:anchor`);n(l,h);let _=c(()=>{let e=m(),t=u(`h3`,e);n(e,t),i(t,`font-semibold`),n(t,f(`默认标题`));let r=u(`p`,e);return n(e,r),i(r,`text-sm opacity-70`),n(r,f(`没传 title slot，就显示这里。`)),e});g(()=>{let n=p(x,{source:t,name:`title`,children:_});e(()=>d(n,l,h))});let v=u(`div`,s);n(s,v),i(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let y=a(`rue:component:anchor`);n(v,y);let b=c(()=>{let e=m(),t=u(`p`,e);return n(e,t),i(t,`opacity-70`),n(t,f(`没有传 default slot，所以这里显示 fallback。`)),e});g(()=>{let n=p(x,{source:t,children:b});e(()=>d(n,v,y))});let S=u(`div`,s);n(s,S),i(S,`text-sm opacity-70`);let C=a(`rue:component:anchor`);return n(S,C),g(()=>{let n=p(x,{source:t,name:`footer`,children:`默认底部`});e(()=>d(n,S,C))}),o}),ne=t=>c(r=>{let o=u(`ul`,r);i(o,`list rounded-box border border-base-300 bg-base-100`);let f=a(`rue:list:start`),_=a(`rue:list:end`);n(o,f),n(o,_);let y=new Map;return g(()=>{y=v({items:w||[],getKey:(e,t)=>e.label,elements:y,parent:f.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:f,renderItem:(r,o,f,_,v)=>{d(c(()=>{let o=m(),f=u(`li`,o);n(o,f),g(()=>{l(f,`key`,String(r.label))}),i(f,`list-row items-center gap-3`);let _=a(`rue:component:anchor`);n(f,_);let v=c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`flex w-full items-center justify-between gap-3`);let c=u(`span`,o);n(o,c),i(c,`font-medium`);let l=a(`rue:slot:anchor`);n(c,l),g(()=>{let t=r.label;e(()=>d(t,c,l))});let f=u(`span`,o);n(o,f),i(f,`badge badge-outline`);let p=s(f);return n(f,p),g(()=>{h(p,r.value)}),t});return g(()=>{let n=p(x,{source:t,name:`item`,props:r,children:v});e(()=>d(n,f,_))}),o}),o,f)}})}),o}),re=t=>c(r=>{let o=u(`section`,r);i(o,`card border border-base-300 bg-base-100 shadow-sm`);let _=u(`div`,o);n(o,_),i(_,`card-body gap-4`);let y=u(`div`,_);n(_,y),i(y,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let b=u(`div`,y);n(y,b),i(b,`space-y-1`);let S=a(`rue:component:anchor`);n(b,S);let C=c(()=>{let e=m(),t=u(`h2`,e);n(e,t),i(t,`card-title`),n(t,f(`默认标题`));let r=u(`p`,e);return n(e,r),i(r,`text-sm opacity-70`),n(r,f(`没有提供 title slot 时，会显示这段 fallback。`)),e});g(()=>{let n=p(x,{source:t,name:`title`,children:C});e(()=>d(n,b,S))});let w=u(`div`,y);n(y,w),i(w,`flex items-center gap-2`);let T=a(`rue:component:anchor`);n(w,T);let E=c(()=>{let e=m(),t=u(`span`,e);return n(e,t),i(t,`badge badge-outline`),n(t,f(`fallback action`)),e});g(()=>{let n=p(x,{source:t,name:`actions`,children:E});e(()=>d(n,w,T))});let D=u(`div`,_);n(_,D),i(D,`rounded-box bg-base-200 p-4`);let ne=a(`rue:component:anchor`);n(D,ne);let re=c(()=>{let e=m(),t=u(`p`,e);return n(e,t),i(t,`opacity-70`),n(t,f(`默认插槽为空时，这里显示主体内容的 fallback。`)),e});g(()=>{let n=p(x,{source:t,children:re});e(()=>d(n,D,ne))});let O=u(`ul`,_);n(_,O),i(O,`list rounded-box border border-base-300 bg-base-100`);let k=a(`rue:list:start`),A=a(`rue:list:end`);n(O,k),n(O,A);let j=new Map;return g(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(r,o,f,_,v)=>{d(c(()=>{let o=m(),f=u(`li`,o);n(o,f),g(()=>{l(f,`key`,String(r.label))}),i(f,`list-row items-center gap-3`);let _=a(`rue:component:anchor`);n(f,_);let v=c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`flex w-full items-center justify-between gap-3`);let c=u(`div`,o);n(o,c),i(c,`font-medium`);let l=a(`rue:slot:anchor`);n(c,l),g(()=>{let t=r.label;e(()=>d(t,c,l))});let f=u(`span`,o);n(o,f),g(()=>{i(f,`badge ${ee[r.tone]}`)});let p=s(f);return n(f,p),g(()=>{h(p,r.value)}),t});return g(()=>{let n=p(x,{source:t,name:`row`,props:r,children:v});e(()=>d(n,f,_))}),o}),o,f)}})}),o}),O=()=>{let{activeTab:v,showTitleSlot:x,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>o(()=>({activeTab:_(`ref:1:0`,()=>t(`preview`)),showTitleSlot:_(`ref:1:1`,()=>t(!0)),showActionsSlot:_(`ref:1:2`,()=>t(!0)),showDefaultSlot:_(`ref:1:3`,()=>t(!0)),showScopedRow:_(`ref:1:4`,()=>t(!0))})));return c(t=>{let o=m(),_=a(`rue:component:anchor`);return n(o,_),d(p(C,{children:c(()=>{let t=m(),o=u(`h1`,t);n(t,o),i(o,`text-5xl font-semibold mb-4 md:mb-4`),n(o,f(`插槽 Slots（default / named / scoped）`));let _=u(`div`,t);n(t,_),l(_,`role`,`tablist`),i(_,`tabs tabs-box`);let C=u(`button`,_);n(_,C),l(C,`role`,`tab`),g(()=>{i(C,`tab ${v.value===`preview`?`tab-active`:``}`)}),r(C,`click`,()=>{v.value=`preview`}),n(C,f(`效果`));let k=u(`button`,_);n(_,k),l(k,`role`,`tab`),g(()=>{i(k,`tab ${v.value===`code`?`tab-active`:``}`)}),r(k,`click`,()=>{v.value=`code`}),n(k,f(`代码`));let A=u(`div`,t);n(t,A),i(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=a(`rue:slot:anchor`);n(A,j),g(()=>{let t=v.value===`code`?c(()=>{let t=m(),r=u(`div`,t);n(t,r),i(r,`grid gap-6`);let o=u(`div`,r);n(r,o),i(o,`card bg-base-100 shadow overflow-auto`);let s=u(`div`,o);n(o,s),i(s,`card-body p-0`);let c=u(`div`,s);n(s,c),i(c,`border-b border-base-300 px-4 py-3`);let l=u(`h2`,c);n(c,l),i(l,`card-title text-lg`),n(l,f(`先看最小例子`));let h=u(`p`,c);n(c,h),i(h,`text-sm opacity-70`),n(h,f(`先只看 default、named、scoped 各自最短怎么写。`));let _=a(`rue:component:anchor`);n(s,_),g(()=>{let t=p(S,{className:`h-[420px]`,lang:`tsx`,code:T});e(()=>d(t,s,_))});let v=u(`div`,r);n(r,v),i(v,`card bg-base-100 shadow overflow-auto`);let y=u(`div`,v);n(v,y),i(y,`card-body p-0`);let b=u(`div`,y);n(y,b),i(b,`border-b border-base-300 px-4 py-3`);let x=u(`h2`,b);n(b,x),i(x,`card-title text-lg`),n(x,f(`再看完整例子`));let C=u(`p`,b);n(b,C),i(C,`text-sm opacity-70`),n(C,f(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=a(`rue:component:anchor`);return n(y,ee),g(()=>{let t=p(S,{className:`h-[760px]`,lang:`tsx`,code:E});e(()=>d(t,y,ee))}),t}):``;e(()=>d(t,A,j))}),n(A,f(` `));let M=a(`rue:slot:anchor`);return n(A,M),g(()=>{let t=v.value===`preview`?c(()=>{let t=m(),o=u(`div`,t);n(t,o),i(o,`grid gap-6`);let _=u(`div`,o);n(o,_),l(_,`role`,`alert`),i(_,`alert alert-success`);let v=u(`span`,_);n(_,v),n(v,f(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=u(`div`,o);n(o,S),i(S,`card bg-base-100 shadow`);let C=u(`div`,S);n(S,C),i(C,`card-body gap-5`);let T=u(`div`,C);n(C,T);let E=u(`h2`,T);n(T,E),i(E,`card-title`),n(E,f(`先看最小例子`));let k=u(`p`,T);n(T,k),i(k,`text-sm opacity-70`),n(k,f(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=u(`div`,C);n(C,A),i(A,`grid gap-4 xl:grid-cols-3`);let j=u(`div`,A);n(A,j),i(j,`space-y-3`);let M=u(`div`,j);n(j,M);let ie=u(`h3`,M);n(M,ie),i(ie,`text-lg font-semibold`),n(ie,f(`1. default slot`));let ae=u(`p`,M);n(M,ae),i(ae,`text-sm opacity-70`),n(ae,f(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=a(`rue:component:anchor`);n(j,oe),d(p(D,{children:c(()=>{let e=m(),t=u(`p`,e);return n(e,t),n(t,f(`这段内容就是 default slot。`)),e})}),j,oe);let N=u(`div`,A);n(A,N),i(N,`space-y-3`);let P=u(`div`,N);n(N,P);let se=u(`h3`,P);n(P,se),i(se,`text-lg font-semibold`),n(se,f(`2. named slot`));let ce=u(`p`,P);n(P,ce),i(ce,`text-sm opacity-70`),n(ce,f(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=a(`rue:component:anchor`);n(N,le);let ue=c(()=>{let e=m(),t=u(`p`,e);return n(e,t),n(t,f(`中间这段还是 default slot。`)),e}),de=c(()=>{let e=m(),t=u(`span`,e);return n(e,t),i(t,`font-semibold text-base-content`),n(t,f(`自定义标题`)),e}),fe=c(()=>{let e=m(),t=u(`span`,e);return n(e,t),n(t,f(`自定义底部`)),e});g(()=>{let t=p(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});e(()=>d(t,N,le))});let F=u(`div`,A);n(A,F),i(F,`space-y-3`);let I=u(`div`,F);n(F,I);let pe=u(`h3`,I);n(I,pe),i(pe,`text-lg font-semibold`),n(pe,f(`3. scoped slot`));let me=u(`p`,I);n(I,me),i(me,`text-sm opacity-70`),n(me,f(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=a(`rue:component:anchor`);n(F,he),d(p(ne,{item:e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=u(`div`,C);n(C,ge),l(ge,`role`,`alert`),i(ge,`alert alert-soft`);let _e=u(`span`,ge);n(ge,_e),n(_e,f(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=u(`div`,o);n(o,ve),i(ve,`card bg-base-100 shadow`);let L=u(`div`,ve);n(ve,L),i(L,`card-body gap-5`);let R=u(`div`,L);n(L,R),i(R,`flex flex-wrap items-center justify-between gap-3`);let ye=u(`div`,R);n(R,ye);let be=u(`h2`,ye);n(ye,be),i(be,`card-title`),n(be,f(`再看完整例子`));let xe=u(`p`,ye);n(ye,xe),i(xe,`text-sm opacity-70`),n(xe,f(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=u(`div`,R);n(R,z),i(z,`flex flex-wrap gap-2`);let Se=u(`button`,z);n(z,Se),g(()=>{i(Se,`btn btn-sm ${x.value?`btn-primary`:`btn-outline`}`)}),r(Se,`click`,()=>{x.value=!x.value}),n(Se,f(`title slot`));let Ce=u(`button`,z);n(z,Ce),g(()=>{i(Ce,`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`)}),r(Ce,`click`,()=>{te.value=!te.value}),n(Ce,f(`actions slot`));let we=u(`button`,z);n(z,we),g(()=>{i(we,`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`)}),r(we,`click`,()=>{w.value=!w.value}),n(we,f(`default slot`));let Te=u(`button`,z);n(z,Te),g(()=>{i(Te,`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`)}),r(Te,`click`,()=>{O.value=!O.value}),n(Te,f(`scoped row`));let B=u(`div`,L);n(L,B),i(B,`grid gap-5 xl:grid-cols-2`);let V=u(`div`,B);n(B,V),i(V,`space-y-3`);let H=u(`div`,V);n(V,H),i(H,`flex items-center justify-between gap-3`);let Ee=u(`h3`,H);n(H,Ee),i(Ee,`text-lg font-semibold`),n(Ee,f(`传入 slot 之后`));let De=u(`span`,H);n(H,De),i(De,`badge badge-success badge-outline`),n(De,f(`自定义内容生效`));let Oe=a(`rue:component:anchor`);n(V,Oe);let ke=c(()=>{let e=m(),t=u(`div`,e);n(e,t),i(t,`space-y-3`);let r=u(`p`,t);n(t,r),i(r,`text-sm leading-6`),n(r,f(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let a=u(`div`,t);n(t,a),i(a,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let o=u(`div`,a);n(a,o),i(o,`stat py-3`);let s=u(`div`,o);n(o,s),i(s,`stat-title`),n(s,f(`可用率`));let c=u(`div`,o);n(o,c),i(c,`stat-value text-2xl`),n(c,f(`99.98%`));let l=u(`div`,o);n(o,l),i(l,`stat-desc`),n(l,f(`过去 24 小时`));let d=u(`div`,a);n(a,d),i(d,`stat py-3`);let p=u(`div`,d);n(d,p),i(p,`stat-title`),n(p,f(`峰值请求`));let h=u(`div`,d);n(d,h),i(h,`stat-value text-2xl`),n(h,f(`18k`));let g=u(`div`,d);return n(d,g),i(g,`stat-desc`),n(g,f(`每分钟`)),e}),Ae=c(()=>{let e=m(),t=u(`h2`,e);n(e,t),i(t,`card-title`),n(t,f(`支付面板`));let r=u(`p`,e);return n(e,r),i(r,`text-sm opacity-70`),n(r,f(`Template slot="title" 可以一次传多个兄弟节点。`)),e}),je=c(()=>{let e=m(),t=u(`button`,e);return n(e,t),i(t,`btn btn-sm btn-primary`),n(t,f(`刷新`)),e});g(()=>{let t=p(re,{row:O.value?e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:x.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});e(()=>d(t,V,Oe))});let U=u(`div`,B);n(B,U),i(U,`space-y-3`);let W=u(`div`,U);n(U,W),i(W,`flex items-center justify-between gap-3`);let Me=u(`h3`,W);n(W,Me),i(Me,`text-lg font-semibold`),n(Me,f(`未传 slot 时`));let Ne=u(`span`,W);n(W,Ne),i(Ne,`badge badge-warning badge-outline`),n(Ne,f(`fallback 接管`));let Pe=a(`rue:component:anchor`);n(U,Pe),d(p(re,{}),U,Pe);let G=u(`div`,o);n(o,G),i(G,`grid gap-4 xl:grid-cols-2`);let Fe=u(`div`,G);n(G,Fe),i(Fe,`card bg-base-100 shadow`);let K=u(`div`,Fe);n(Fe,K),i(K,`card-body gap-3`);let Ie=u(`h2`,K);n(K,Ie),i(Ie,`card-title`),n(Ie,f(`当前推荐写法`));let q=u(`ul`,K);n(K,q),i(q,`list rounded-box border border-base-300 bg-base-100`);let J=u(`li`,q);n(q,J),i(J,`list-row`);let Le=u(`div`,J);n(J,Le),i(Le,`font-medium`),n(Le,f(`default slot`));let Re=u(`div`,J);n(J,Re),i(Re,`opacity-70`),n(Re,f(`直接写在组件标签内部，最终会落到 props.children。`));let Y=u(`li`,q);n(q,Y),i(Y,`list-row`);let ze=u(`div`,Y);n(Y,ze),i(ze,`font-medium`),n(ze,f(`named slot`));let Be=u(`div`,Y);n(Y,Be),i(Be,`opacity-70`),n(Be,f(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=u(`li`,q);n(q,X),i(X,`list-row`);let Ve=u(`div`,X);n(X,Ve),i(Ve,`font-medium`),n(Ve,f(`scoped slot`));let He=u(`div`,X);n(X,He),i(He,`opacity-70`),n(He,f(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=u(`li`,q);n(q,Z),i(Z,`list-row`);let Ue=u(`div`,Z);n(Z,Ue),i(Ue,`font-medium`),n(Ue,f(`fallback`));let We=u(`div`,Z);n(Z,We),i(We,`opacity-70`),n(We,f(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=u(`div`,G);n(G,Ge),i(Ge,`card bg-base-100 shadow`);let Q=u(`div`,Ge);n(Ge,Q),i(Q,`card-body gap-3`);let Ke=u(`h2`,Q);n(Q,Ke),i(Ke,`card-title`),n(Ke,f(`这页实际演示的协议`));let qe=u(`div`,Q);n(Q,qe),l(qe,`role`,`alert`),i(qe,`alert alert-soft`);let Je=u(`span`,qe);n(qe,Je),n(Je,f(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=u(`div`,Q);n(Q,$),i($,`mockup-code text-sm`);let Ye=u(`pre`,$);n($,Ye),l(Ye,`data-prefix`,`1`);let Xe=u(`code`,Ye);n(Ye,Xe);let Ze=s(Xe);n(Xe,Ze),h(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=u(`pre`,$);n($,Qe),l(Qe,`data-prefix`,`2`);let $e=u(`code`,Qe);n(Qe,$e);let et=s($e);n($e,et),h(et,`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`);let tt=u(`pre`,$);n($,tt),l(tt,`data-prefix`,`3`);let nt=u(`code`,tt);n(tt,nt);let rt=s(nt);n(nt,rt),h(rt,`<button slot="actions">刷新</button>`);let it=u(`pre`,$);n($,it),l(it,`data-prefix`,`4`);let at=u(`code`,it);n(it,at);let ot=s(at);n(at,ot),h(ot,`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`);let st=u(`p`,Q);return n(Q,st),i(st,`text-sm opacity-70 leading-6`),n(st,f(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),t}):``;e(()=>d(t,A,M))}),t})}),o,_),o})};export{O as default};
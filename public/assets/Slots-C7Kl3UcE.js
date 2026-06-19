import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,et as s,ht as c,l,lt as u,nt as d,o as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as y,i as b,o as x}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as S}from"./Code-BIscIyEp.js";import{r as C}from"./SidebarPlaygroundExample-CEz1fABX.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},te=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=a=>l(o=>{let c=s(`section`,o);u(c,`card border border-base-300 bg-base-100 shadow-sm`);let d=s(`div`,c);i(c,d),u(d,`card-body gap-3`);let p=s(`div`,d);i(d,p),u(p,`space-y-1 border-b border-base-300 pb-3`);let g=t(`rue:component:anchor`);i(p,g);let _=l(()=>{let t=e(),n=s(`h3`,t);i(t,n),u(n,`font-semibold`),i(n,h(`默认标题`));let r=s(`p`,t);return i(t,r),u(r,`text-sm opacity-70`),i(r,h(`没传 title slot，就显示这里。`)),t});n(()=>{let e=m(x,{source:a,name:`title`,children:_});r(()=>f(e,p,g))});let v=s(`div`,d);i(d,v),u(v,`rounded-box bg-base-200 p-3 text-sm leading-6`);let y=t(`rue:component:anchor`);i(v,y);let b=l(()=>{let t=e(),n=s(`p`,t);return i(t,n),u(n,`opacity-70`),i(n,h(`没有传 default slot，所以这里显示 fallback。`)),t});n(()=>{let e=m(x,{source:a,children:b});r(()=>f(e,v,y))});let S=s(`div`,d);i(d,S),u(S,`text-sm opacity-70`);let C=t(`rue:component:anchor`);return i(S,C),n(()=>{let e=m(x,{source:a,name:`footer`,children:`默认底部`});r(()=>f(e,S,C))}),c}),ne=a=>l(o=>{let h=s(`ul`,o);u(h,`list rounded-box border border-base-300 bg-base-100`);let g=t(`rue:list:start`),_=t(`rue:list:end`);i(h,g),i(h,_);let y=new Map;return n(()=>{y=v({items:w||[],getKey:(e,t)=>e.label,elements:y,parent:g.parentNode,before:_,singleRoot:!0,trackIndex:!1,start:g,renderItem:(o,h,g,_,v)=>{f(l(()=>{let h=e(),g=s(`li`,h);i(h,g),n(()=>{p(g,`key`,String(o.label))}),u(g,`list-row items-center gap-3`);let _=t(`rue:component:anchor`);i(g,_);let v=l(()=>{let a=e(),l=s(`div`,a);i(a,l),u(l,`flex w-full items-center justify-between gap-3`);let p=s(`span`,l);i(l,p),u(p,`font-medium`);let m=t(`rue:slot:anchor`);i(p,m),n(()=>{let e=o.label;r(()=>f(e,p,m))});let h=s(`span`,l);i(l,h),u(h,`badge badge-outline`);let g=d(h);return i(h,g),n(()=>{c(g,o.value)}),a});return n(()=>{let e=m(x,{source:a,name:`item`,props:o,children:v});r(()=>f(e,g,_))}),h}),h,g)}})}),h}),re=a=>l(o=>{let g=s(`section`,o);u(g,`card border border-base-300 bg-base-100 shadow-sm`);let _=s(`div`,g);i(g,_),u(_,`card-body gap-4`);let y=s(`div`,_);i(_,y),u(y,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let b=s(`div`,y);i(y,b),u(b,`space-y-1`);let S=t(`rue:component:anchor`);i(b,S);let C=l(()=>{let t=e(),n=s(`h2`,t);i(t,n),u(n,`card-title`),i(n,h(`默认标题`));let r=s(`p`,t);return i(t,r),u(r,`text-sm opacity-70`),i(r,h(`没有提供 title slot 时，会显示这段 fallback。`)),t});n(()=>{let e=m(x,{source:a,name:`title`,children:C});r(()=>f(e,b,S))});let w=s(`div`,y);i(y,w),u(w,`flex items-center gap-2`);let T=t(`rue:component:anchor`);i(w,T);let E=l(()=>{let t=e(),n=s(`span`,t);return i(t,n),u(n,`badge badge-outline`),i(n,h(`fallback action`)),t});n(()=>{let e=m(x,{source:a,name:`actions`,children:E});r(()=>f(e,w,T))});let D=s(`div`,_);i(_,D),u(D,`rounded-box bg-base-200 p-4`);let ne=t(`rue:component:anchor`);i(D,ne);let re=l(()=>{let t=e(),n=s(`p`,t);return i(t,n),u(n,`opacity-70`),i(n,h(`默认插槽为空时，这里显示主体内容的 fallback。`)),t});n(()=>{let e=m(x,{source:a,children:re});r(()=>f(e,D,ne))});let O=s(`ul`,_);i(_,O),u(O,`list rounded-box border border-base-300 bg-base-100`);let k=t(`rue:list:start`),A=t(`rue:list:end`);i(O,k),i(O,A);let j=new Map;return n(()=>{j=v({items:te||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,trackIndex:!1,start:k,renderItem:(o,h,g,_,v)=>{f(l(()=>{let h=e(),g=s(`li`,h);i(h,g),n(()=>{p(g,`key`,String(o.label))}),u(g,`list-row items-center gap-3`);let _=t(`rue:component:anchor`);i(g,_);let v=l(()=>{let a=e(),l=s(`div`,a);i(a,l),u(l,`flex w-full items-center justify-between gap-3`);let p=s(`div`,l);i(l,p),u(p,`font-medium`);let m=t(`rue:slot:anchor`);i(p,m),n(()=>{let e=o.label;r(()=>f(e,p,m))});let h=s(`span`,l);i(l,h),n(()=>{u(h,`badge ${ee[o.tone]}`)});let g=d(h);return i(h,g),n(()=>{c(g,o.value)}),a});return n(()=>{let e=m(x,{source:a,name:`row`,props:o,children:v});r(()=>f(e,g,_))}),h}),h,g)}})}),g}),O=()=>{let{activeTab:v,showTitleSlot:x,showActionsSlot:te,showDefaultSlot:w,showScopedRow:O}=_(`useSetup:0:0`,()=>o(()=>({activeTab:_(`ref:1:0`,()=>g(`preview`)),showTitleSlot:_(`ref:1:1`,()=>g(!0)),showActionsSlot:_(`ref:1:2`,()=>g(!0)),showDefaultSlot:_(`ref:1:3`,()=>g(!0)),showScopedRow:_(`ref:1:4`,()=>g(!0))})));return l(o=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),f(m(C,{children:l(()=>{let o=e(),g=s(`h1`,o);i(o,g),u(g,`text-5xl font-semibold mb-4 md:mb-4`),i(g,h(`插槽 Slots（default / named / scoped）`));let _=s(`div`,o);i(o,_),p(_,`role`,`tablist`),u(_,`tabs tabs-box`);let C=s(`button`,_);i(_,C),p(C,`role`,`tab`),n(()=>{u(C,`tab ${v.value===`preview`?`tab-active`:``}`)}),a(C,`click`,()=>{v.value=`preview`}),i(C,h(`效果`));let k=s(`button`,_);i(_,k),p(k,`role`,`tab`),n(()=>{u(k,`tab ${v.value===`code`?`tab-active`:``}`)}),a(k,`click`,()=>{v.value=`code`}),i(k,h(`代码`));let A=s(`div`,o);i(o,A),u(A,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let j=t(`rue:slot:anchor`);i(A,j),n(()=>{let a=v.value===`code`?l(()=>{let a=e(),o=s(`div`,a);i(a,o),u(o,`grid gap-6`);let c=s(`div`,o);i(o,c),u(c,`card bg-base-100 shadow overflow-auto`);let l=s(`div`,c);i(c,l),u(l,`card-body p-0`);let d=s(`div`,l);i(l,d),u(d,`border-b border-base-300 px-4 py-3`);let p=s(`h2`,d);i(d,p),u(p,`card-title text-lg`),i(p,h(`先看最小例子`));let g=s(`p`,d);i(d,g),u(g,`text-sm opacity-70`),i(g,h(`先只看 default、named、scoped 各自最短怎么写。`));let _=t(`rue:component:anchor`);i(l,_),n(()=>{let e=m(S,{className:`h-[420px]`,lang:`tsx`,code:T});r(()=>f(e,l,_))});let v=s(`div`,o);i(o,v),u(v,`card bg-base-100 shadow overflow-auto`);let y=s(`div`,v);i(v,y),u(y,`card-body p-0`);let b=s(`div`,y);i(y,b),u(b,`border-b border-base-300 px-4 py-3`);let x=s(`h2`,b);i(b,x),u(x,`card-title text-lg`),i(x,h(`再看完整例子`));let C=s(`p`,b);i(b,C),u(C,`text-sm opacity-70`),i(C,h(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=t(`rue:component:anchor`);return i(y,ee),n(()=>{let e=m(S,{className:`h-[760px]`,lang:`tsx`,code:E});r(()=>f(e,y,ee))}),a}):``;r(()=>f(a,A,j))}),i(A,h(` `));let M=t(`rue:slot:anchor`);return i(A,M),n(()=>{let o=v.value===`preview`?l(()=>{let o=e(),g=s(`div`,o);i(o,g),u(g,`grid gap-6`);let _=s(`div`,g);i(g,_),p(_,`role`,`alert`),u(_,`alert alert-success`);let v=s(`span`,_);i(_,v),i(v,h(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=s(`div`,g);i(g,S),u(S,`card bg-base-100 shadow`);let C=s(`div`,S);i(S,C),u(C,`card-body gap-5`);let T=s(`div`,C);i(C,T);let E=s(`h2`,T);i(T,E),u(E,`card-title`),i(E,h(`先看最小例子`));let k=s(`p`,T);i(T,k),u(k,`text-sm opacity-70`),i(k,h(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let A=s(`div`,C);i(C,A),u(A,`grid gap-4 xl:grid-cols-3`);let j=s(`div`,A);i(A,j),u(j,`space-y-3`);let M=s(`div`,j);i(j,M);let ie=s(`h3`,M);i(M,ie),u(ie,`text-lg font-semibold`),i(ie,h(`1. default slot`));let ae=s(`p`,M);i(M,ae),u(ae,`text-sm opacity-70`),i(ae,h(`直接写在组件标签内部的内容，会落到默认插槽。`));let oe=t(`rue:component:anchor`);i(j,oe),f(m(D,{children:l(()=>{let t=e(),n=s(`p`,t);return i(t,n),i(n,h(`这段内容就是 default slot。`)),t})}),j,oe);let N=s(`div`,A);i(A,N),u(N,`space-y-3`);let P=s(`div`,N);i(N,P);let se=s(`h3`,P);i(P,se),u(se,`text-lg font-semibold`),i(se,h(`2. named slot`));let ce=s(`p`,P);i(P,ce),u(ce,`text-sm opacity-70`),i(ce,h(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let le=t(`rue:component:anchor`);i(N,le);let ue=l(()=>{let t=e(),n=s(`p`,t);return i(t,n),i(n,h(`中间这段还是 default slot。`)),t}),de=l(()=>{let t=e(),n=s(`span`,t);return i(t,n),u(n,`font-semibold text-base-content`),i(n,h(`自定义标题`)),t}),fe=l(()=>{let t=e(),n=s(`span`,t);return i(t,n),i(n,h(`自定义底部`)),t});n(()=>{let e=m(D,{__rue_slots:{default:ue,title:de,footer:fe},children:ue});r(()=>f(e,N,le))});let F=s(`div`,A);i(A,F),u(F,`space-y-3`);let I=s(`div`,F);i(F,I);let pe=s(`h3`,I);i(I,pe),u(pe,`text-lg font-semibold`),i(pe,h(`3. scoped slot`));let me=s(`p`,I);i(I,me),u(me,`text-sm opacity-70`),i(me,h(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=t(`rue:component:anchor`);i(F,he),f(m(ne,{item:e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let ge=s(`div`,C);i(C,ge),p(ge,`role`,`alert`),u(ge,`alert alert-soft`);let _e=s(`span`,ge);i(ge,_e),i(_e,h(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let ve=s(`div`,g);i(g,ve),u(ve,`card bg-base-100 shadow`);let L=s(`div`,ve);i(ve,L),u(L,`card-body gap-5`);let R=s(`div`,L);i(L,R),u(R,`flex flex-wrap items-center justify-between gap-3`);let ye=s(`div`,R);i(R,ye);let be=s(`h2`,ye);i(ye,be),u(be,`card-title`),i(be,h(`再看完整例子`));let xe=s(`p`,ye);i(ye,xe),u(xe,`text-sm opacity-70`),i(xe,h(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=s(`div`,R);i(R,z),u(z,`flex flex-wrap gap-2`);let Se=s(`button`,z);i(z,Se),n(()=>{u(Se,`btn btn-sm ${x.value?`btn-primary`:`btn-outline`}`)}),a(Se,`click`,()=>{x.value=!x.value}),i(Se,h(`title slot`));let Ce=s(`button`,z);i(z,Ce),n(()=>{u(Ce,`btn btn-sm ${te.value?`btn-primary`:`btn-outline`}`)}),a(Ce,`click`,()=>{te.value=!te.value}),i(Ce,h(`actions slot`));let we=s(`button`,z);i(z,we),n(()=>{u(we,`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`)}),a(we,`click`,()=>{w.value=!w.value}),i(we,h(`default slot`));let Te=s(`button`,z);i(z,Te),n(()=>{u(Te,`btn btn-sm ${O.value?`btn-primary`:`btn-outline`}`)}),a(Te,`click`,()=>{O.value=!O.value}),i(Te,h(`scoped row`));let B=s(`div`,L);i(L,B),u(B,`grid gap-5 xl:grid-cols-2`);let V=s(`div`,B);i(B,V),u(V,`space-y-3`);let H=s(`div`,V);i(V,H),u(H,`flex items-center justify-between gap-3`);let Ee=s(`h3`,H);i(H,Ee),u(Ee,`text-lg font-semibold`),i(Ee,h(`传入 slot 之后`));let De=s(`span`,H);i(H,De),u(De,`badge badge-success badge-outline`),i(De,h(`自定义内容生效`));let Oe=t(`rue:component:anchor`);i(V,Oe);let ke=l(()=>{let t=e(),n=s(`div`,t);i(t,n),u(n,`space-y-3`);let r=s(`p`,n);i(n,r),u(r,`text-sm leading-6`),i(r,h(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let a=s(`div`,n);i(n,a),u(a,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let o=s(`div`,a);i(a,o),u(o,`stat py-3`);let c=s(`div`,o);i(o,c),u(c,`stat-title`),i(c,h(`可用率`));let l=s(`div`,o);i(o,l),u(l,`stat-value text-2xl`),i(l,h(`99.98%`));let d=s(`div`,o);i(o,d),u(d,`stat-desc`),i(d,h(`过去 24 小时`));let f=s(`div`,a);i(a,f),u(f,`stat py-3`);let p=s(`div`,f);i(f,p),u(p,`stat-title`),i(p,h(`峰值请求`));let m=s(`div`,f);i(f,m),u(m,`stat-value text-2xl`),i(m,h(`18k`));let g=s(`div`,f);return i(f,g),u(g,`stat-desc`),i(g,h(`每分钟`)),t}),Ae=l(()=>{let t=e(),n=s(`h2`,t);i(t,n),u(n,`card-title`),i(n,h(`支付面板`));let r=s(`p`,t);return i(t,r),u(r,`text-sm opacity-70`),i(r,h(`Template slot="title" 可以一次传多个兄弟节点。`)),t}),je=l(()=>{let t=e(),n=s(`button`,t);return i(t,n),u(n,`btn btn-sm btn-primary`),i(n,h(`刷新`)),t});n(()=>{let e=m(re,{row:O.value?e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?ke:void 0,title:x.value?Ae:void 0,actions:te.value?je:void 0},children:w.value?ke:void 0});r(()=>f(e,V,Oe))});let U=s(`div`,B);i(B,U),u(U,`space-y-3`);let W=s(`div`,U);i(U,W),u(W,`flex items-center justify-between gap-3`);let Me=s(`h3`,W);i(W,Me),u(Me,`text-lg font-semibold`),i(Me,h(`未传 slot 时`));let Ne=s(`span`,W);i(W,Ne),u(Ne,`badge badge-warning badge-outline`),i(Ne,h(`fallback 接管`));let Pe=t(`rue:component:anchor`);i(U,Pe),f(m(re,{}),U,Pe);let G=s(`div`,g);i(g,G),u(G,`grid gap-4 xl:grid-cols-2`);let Fe=s(`div`,G);i(G,Fe),u(Fe,`card bg-base-100 shadow`);let K=s(`div`,Fe);i(Fe,K),u(K,`card-body gap-3`);let Ie=s(`h2`,K);i(K,Ie),u(Ie,`card-title`),i(Ie,h(`当前推荐写法`));let q=s(`ul`,K);i(K,q),u(q,`list rounded-box border border-base-300 bg-base-100`);let J=s(`li`,q);i(q,J),u(J,`list-row`);let Le=s(`div`,J);i(J,Le),u(Le,`font-medium`),i(Le,h(`default slot`));let Re=s(`div`,J);i(J,Re),u(Re,`opacity-70`),i(Re,h(`直接写在组件标签内部，最终会落到 props.children。`));let Y=s(`li`,q);i(q,Y),u(Y,`list-row`);let ze=s(`div`,Y);i(Y,ze),u(ze,`font-medium`),i(ze,h(`named slot`));let Be=s(`div`,Y);i(Y,Be),u(Be,`opacity-70`),i(Be,h(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let X=s(`li`,q);i(q,X),u(X,`list-row`);let Ve=s(`div`,X);i(X,Ve),u(Ve,`font-medium`),i(Ve,h(`scoped slot`));let He=s(`div`,X);i(X,He),u(He,`opacity-70`),i(He,h(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let Z=s(`li`,q);i(q,Z),u(Z,`list-row`);let Ue=s(`div`,Z);i(Z,Ue),u(Ue,`font-medium`),i(Ue,h(`fallback`));let We=s(`div`,Z);i(Z,We),u(We,`opacity-70`),i(We,h(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=s(`div`,G);i(G,Ge),u(Ge,`card bg-base-100 shadow`);let Q=s(`div`,Ge);i(Ge,Q),u(Q,`card-body gap-3`);let Ke=s(`h2`,Q);i(Q,Ke),u(Ke,`card-title`),i(Ke,h(`这页实际演示的协议`));let qe=s(`div`,Q);i(Q,qe),p(qe,`role`,`alert`),u(qe,`alert alert-soft`);let Je=s(`span`,qe);i(qe,Je),i(Je,h(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=s(`div`,Q);i(Q,$),u($,`mockup-code text-sm`);let Ye=s(`pre`,$);i($,Ye),p(Ye,`data-prefix`,`1`);let Xe=s(`code`,Ye);i(Ye,Xe);let Ze=d(Xe);i(Xe,Ze),c(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=s(`pre`,$);i($,Qe),p(Qe,`data-prefix`,`2`);let $e=s(`code`,Qe);i(Qe,$e);let et=d($e);i($e,et),c(et,`<Template slot="title"><h2>支付面板</h2><p>多个兄弟节点</p></Template>`);let tt=s(`pre`,$);i($,tt),p(tt,`data-prefix`,`3`);let nt=s(`code`,tt);i(tt,nt);let rt=d(nt);i(nt,rt),c(rt,`<button slot="actions">刷新</button>`);let it=s(`pre`,$);i($,it),p(it,`data-prefix`,`4`);let at=s(`code`,it);i(it,at);let ot=d(at);i(at,ot),c(ot,`<SlotPanel row={(slotProps) => <strong>{slotProps.label}: {slotProps.value}</strong>}><p>default slot 内容</p></SlotPanel>`);let st=s(`p`,Q);return i(Q,st),u(st,`text-sm opacity-70 leading-6`),i(st,h(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),o}):``;r(()=>f(o,A,M))}),o})}),g,_),g})};export{O as default};
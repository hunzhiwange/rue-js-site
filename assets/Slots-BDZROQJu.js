import{A as e,F as t,H as n,I as r,L as i,N as a,P as o,W as s,Y as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-CKndxKFn.js";import{a as g,n as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{t as v}from"./Slot-DMTwur8l.js";import{n as y,t as b}from"./src-CqIWk1va.js";import{t as x}from"./Code-B1JFTu6m.js";import{t as S}from"./SidebarPlaygroundExample-DlK8mtjC.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},C=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],w=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],T=`import { Slot, type FC } from '@rue-js/rue';

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

export default Demo;`,D=e=>m(()=>{let n=t(`section`);s(n,`card border border-base-300 bg-base-100 shadow-sm`);let i=t(`div`);u(n,i),s(i,`card-body gap-3`);let c=t(`div`);u(i,c),s(c,`space-y-1 border-b border-base-300 pb-3`);let f=a(`rue:component:anchor`);u(c,f);let h=m(()=>{let e=o(),n=t(`h3`);u(e,n),s(n,`font-semibold`),u(n,r(`默认标题`));let i=t(`p`);return u(e,i),s(i,`text-sm opacity-70`),u(i,r(`没传 title slot，就显示这里。`)),e});d(()=>{l(p(v,{source:e,name:`title`,children:h}),c,f)});let g=t(`div`);u(i,g),s(g,`rounded-box bg-base-200 p-3 text-sm leading-6`);let _=a(`rue:component:anchor`);u(g,_);let y=m(()=>{let e=o(),n=t(`p`);return u(e,n),s(n,`opacity-70`),u(n,r(`没有传 default slot，所以这里显示 fallback。`)),e});d(()=>{l(p(v,{source:e,children:y}),g,_)});let b=t(`div`);u(i,b),s(b,`text-sm opacity-70`);let x=a(`rue:component:anchor`);return u(b,x),d(()=>{l(p(v,{source:e,name:`footer`,children:`默认底部`}),b,x)}),n}),te=e=>m(()=>{let r=t(`ul`);s(r,`list rounded-box border border-base-300 bg-base-100`);let f=a(`rue:list:start`),h=a(`rue:list:end`);u(r,f),u(r,h);let g=new Map;return d(()=>{g=_({items:w||[],getKey:(e,t)=>e.label,elements:g,parent:f.parentNode,before:h,singleRoot:!0,start:f,renderItem:(r,f,h,g,_)=>{l(m(()=>{let f=o(),h=t(`li`);u(f,h),d(()=>{n(h,`key`,String(r.label))}),s(h,`list-row items-center gap-3`);let g=a(`rue:component:anchor`);u(h,g);let _=m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`flex w-full items-center justify-between gap-3`);let f=t(`span`);u(n,f),s(f,`font-medium`);let p=a(`rue:slot:anchor`);u(f,p),d(()=>{let e=r.label;l(e,f,p)});let m=t(`span`);u(n,m),s(m,`badge badge-outline`);let h=i(m);return u(m,h),d(()=>{c(h,r.value)}),e});return d(()=>{l(p(v,{source:e,name:`item`,props:r,children:_}),h,g)}),f}),f,h)}})}),r}),O=e=>m(()=>{let f=t(`section`);s(f,`card border border-base-300 bg-base-100 shadow-sm`);let h=t(`div`);u(f,h),s(h,`card-body gap-4`);let g=t(`div`);u(h,g),s(g,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let y=t(`div`);u(g,y),s(y,`space-y-1`);let b=a(`rue:component:anchor`);u(y,b);let x=m(()=>{let e=o(),n=t(`h2`);u(e,n),s(n,`card-title`),u(n,r(`默认标题`));let i=t(`p`);return u(e,i),s(i,`text-sm opacity-70`),u(i,r(`没有提供 title slot 时，会显示这段 fallback。`)),e});d(()=>{l(p(v,{source:e,name:`title`,children:x}),y,b)});let S=t(`div`);u(g,S),s(S,`flex items-center gap-2`);let w=a(`rue:component:anchor`);u(S,w);let T=m(()=>{let e=o(),n=t(`span`);return u(e,n),s(n,`badge badge-outline`),u(n,r(`fallback action`)),e});d(()=>{l(p(v,{source:e,name:`actions`,children:T}),S,w)});let E=t(`div`);u(h,E),s(E,`rounded-box bg-base-200 p-4`);let D=a(`rue:component:anchor`);u(E,D);let te=m(()=>{let e=o(),n=t(`p`);return u(e,n),s(n,`opacity-70`),u(n,r(`默认插槽为空时，这里显示主体内容的 fallback。`)),e});d(()=>{l(p(v,{source:e,children:te}),E,D)});let O=t(`ul`);u(h,O),s(O,`list rounded-box border border-base-300 bg-base-100`);let k=a(`rue:list:start`),A=a(`rue:list:end`);u(O,k),u(O,A);let j=new Map;return d(()=>{j=_({items:C||[],getKey:(e,t)=>e.label,elements:j,parent:O,before:A,singleRoot:!0,start:k,renderItem:(r,f,h,g,_)=>{l(m(()=>{let f=o(),h=t(`li`);u(f,h),d(()=>{n(h,`key`,String(r.label))}),s(h,`list-row items-center gap-3`);let g=a(`rue:component:anchor`);u(h,g);let _=m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`flex w-full items-center justify-between gap-3`);let f=t(`div`);u(n,f),s(f,`font-medium`);let p=a(`rue:slot:anchor`);u(f,p),d(()=>{let e=r.label;l(e,f,p)});let m=t(`span`);u(n,m),d(()=>{s(m,String(`badge ${ee[r.tone]}`))});let h=i(m);return u(m,h),d(()=>{c(h,r.value)}),e});return d(()=>{l(p(v,{source:e,name:`row`,props:r,children:_}),h,g)}),f}),f,h)}})}),f}),k=()=>{let{activeTab:_,showTitleSlot:v,showActionsSlot:C,showDefaultSlot:w,showScopedRow:k}=g(`useSetup:0:0`,()=>h(()=>({activeTab:g(`ref:1:0`,()=>f(`preview`)),showTitleSlot:g(`ref:1:1`,()=>f(!0)),showActionsSlot:g(`ref:1:2`,()=>f(!0)),showDefaultSlot:g(`ref:1:3`,()=>f(!0)),showScopedRow:g(`ref:1:4`,()=>f(!0))})));return m(()=>{let f=o(),h=a(`rue:component:anchor`);return u(f,h),l(p(S,{children:m(()=>{let f=o(),h=t(`h1`);u(f,h),s(h,`text-5xl font-semibold mb-4 md:mb-4`),u(h,r(`插槽 Slots（default / named / scoped）`));let g=t(`div`);u(f,g),n(g,`role`,`tablist`),s(g,`tabs tabs-box`);let S=t(`button`);u(g,S),n(S,`role`,`tab`),d(()=>{s(S,String(`tab ${_.value===`preview`?`tab-active`:``}`))}),e(S,`click`,()=>{_.value=`preview`}),u(S,r(`效果`));let A=t(`button`);u(g,A),n(A,`role`,`tab`),d(()=>{s(A,String(`tab ${_.value===`code`?`tab-active`:``}`))}),e(A,`click`,()=>{_.value=`code`}),u(A,r(`代码`));let j=t(`div`);u(f,j),s(j,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let M=a(`rue:slot:anchor`);u(j,M),d(()=>{l(_.value===`code`?m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`grid gap-6`);let i=t(`div`);u(n,i),s(i,`card bg-base-100 shadow overflow-auto`);let c=t(`div`);u(i,c),s(c,`card-body p-0`);let f=t(`div`);u(c,f),s(f,`border-b border-base-300 px-4 py-3`);let m=t(`h2`);u(f,m),s(m,`card-title text-lg`),u(m,r(`先看最小例子`));let h=t(`p`);u(f,h),s(h,`text-sm opacity-70`),u(h,r(`先只看 default、named、scoped 各自最短怎么写。`));let g=a(`rue:component:anchor`);u(c,g),d(()=>{l(p(x,{className:`h-[420px]`,lang:`tsx`,code:T}),c,g)});let _=t(`div`);u(n,_),s(_,`card bg-base-100 shadow overflow-auto`);let v=t(`div`);u(_,v),s(v,`card-body p-0`);let y=t(`div`);u(v,y),s(y,`border-b border-base-300 px-4 py-3`);let b=t(`h2`);u(y,b),s(b,`card-title text-lg`),u(b,r(`再看完整例子`));let S=t(`p`);u(y,S),s(S,`text-sm opacity-70`),u(S,r(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=a(`rue:component:anchor`);return u(v,ee),d(()=>{l(p(x,{className:`h-[760px]`,lang:`tsx`,code:E}),v,ee)}),e}):``,j,M)}),u(j,r(` `));let N=a(`rue:slot:anchor`);return u(j,N),d(()=>{l(_.value===`preview`?m(()=>{let f=o(),h=t(`div`);u(f,h),s(h,`grid gap-6`);let g=t(`div`);u(h,g),n(g,`role`,`alert`),s(g,`alert alert-success`);let _=t(`span`);u(g,_),u(_,r(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let x=t(`div`);u(h,x),s(x,`card bg-base-100 shadow`);let S=t(`div`);u(x,S),s(S,`card-body gap-5`);let T=t(`div`);u(S,T);let E=t(`h2`);u(T,E),s(E,`card-title`),u(E,r(`先看最小例子`));let A=t(`p`);u(T,A),s(A,`text-sm opacity-70`),u(A,r(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let j=t(`div`);u(S,j),s(j,`grid gap-4 xl:grid-cols-3`);let M=t(`div`);u(j,M),s(M,`space-y-3`);let N=t(`div`);u(M,N);let ne=t(`h3`);u(N,ne),s(ne,`text-lg font-semibold`),u(ne,r(`1. default slot`));let re=t(`p`);u(N,re),s(re,`text-sm opacity-70`),u(re,r(`直接写在组件标签内部的内容，会落到默认插槽。`));let ie=a(`rue:component:anchor`);u(M,ie),l(p(D,{children:m(()=>{let e=o(),n=t(`p`);return u(e,n),u(n,r(`这段内容就是 default slot。`)),e})}),M,ie);let P=t(`div`);u(j,P),s(P,`space-y-3`);let ae=t(`div`);u(P,ae);let oe=t(`h3`);u(ae,oe),s(oe,`text-lg font-semibold`),u(oe,r(`2. named slot`));let se=t(`p`);u(ae,se),s(se,`text-sm opacity-70`),u(se,r(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let ce=a(`rue:component:anchor`);u(P,ce);let le=m(()=>{let e=o(),n=t(`p`);return u(e,n),u(n,r(`中间这段还是 default slot。`)),e}),ue=m(()=>{let e=o(),n=t(`span`);return u(e,n),s(n,`font-semibold text-base-content`),u(n,r(`自定义标题`)),e}),de=m(()=>{let e=o(),n=t(`span`);return u(e,n),u(n,r(`自定义底部`)),e});d(()=>{l(p(D,{__rue_slots:{default:le,title:ue,footer:de},children:le}),P,ce)});let F=t(`div`);u(j,F),s(F,`space-y-3`);let fe=t(`div`);u(F,fe);let pe=t(`h3`);u(fe,pe),s(pe,`text-lg font-semibold`),u(pe,r(`3. scoped slot`));let me=t(`p`);u(fe,me),s(me,`text-sm opacity-70`),u(me,r(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=a(`rue:component:anchor`);u(F,he),l(p(te,{item:e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge badge-primary`,children:e.value})]})}),F,he);let I=t(`div`);u(S,I),n(I,`role`,`alert`),s(I,`alert alert-soft`);let ge=t(`span`);u(I,ge),u(ge,r(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let _e=t(`div`);u(h,_e),s(_e,`card bg-base-100 shadow`);let L=t(`div`);u(_e,L),s(L,`card-body gap-5`);let R=t(`div`);u(L,R),s(R,`flex flex-wrap items-center justify-between gap-3`);let ve=t(`div`);u(R,ve);let ye=t(`h2`);u(ve,ye),s(ye,`card-title`),u(ye,r(`再看完整例子`));let be=t(`p`);u(ve,be),s(be,`text-sm opacity-70`),u(be,r(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let z=t(`div`);u(R,z),s(z,`flex flex-wrap gap-2`);let B=t(`button`);u(z,B),d(()=>{s(B,String(`btn btn-sm ${v.value?`btn-primary`:`btn-outline`}`))}),e(B,`click`,()=>{v.value=!v.value}),u(B,r(`title slot`));let V=t(`button`);u(z,V),d(()=>{s(V,String(`btn btn-sm ${C.value?`btn-primary`:`btn-outline`}`))}),e(V,`click`,()=>{C.value=!C.value}),u(V,r(`actions slot`));let H=t(`button`);u(z,H),d(()=>{s(H,String(`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`))}),e(H,`click`,()=>{w.value=!w.value}),u(H,r(`default slot`));let U=t(`button`);u(z,U),d(()=>{s(U,String(`btn btn-sm ${k.value?`btn-primary`:`btn-outline`}`))}),e(U,`click`,()=>{k.value=!k.value}),u(U,r(`scoped row`));let W=t(`div`);u(L,W),s(W,`grid gap-5 xl:grid-cols-2`);let G=t(`div`);u(W,G),s(G,`space-y-3`);let K=t(`div`);u(G,K),s(K,`flex items-center justify-between gap-3`);let xe=t(`h3`);u(K,xe),s(xe,`text-lg font-semibold`),u(xe,r(`传入 slot 之后`));let Se=t(`span`);u(K,Se),s(Se,`badge badge-success badge-outline`),u(Se,r(`自定义内容生效`));let Ce=a(`rue:component:anchor`);u(G,Ce);let we=m(()=>{let e=o(),n=t(`div`);u(e,n),s(n,`space-y-3`);let i=t(`p`);u(n,i),s(i,`text-sm leading-6`),u(i,r(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let a=t(`div`);u(n,a),s(a,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let c=t(`div`);u(a,c),s(c,`stat py-3`);let l=t(`div`);u(c,l),s(l,`stat-title`),u(l,r(`可用率`));let d=t(`div`);u(c,d),s(d,`stat-value text-2xl`),u(d,r(`99.98%`));let f=t(`div`);u(c,f),s(f,`stat-desc`),u(f,r(`过去 24 小时`));let p=t(`div`);u(a,p),s(p,`stat py-3`);let m=t(`div`);u(p,m),s(m,`stat-title`),u(m,r(`峰值请求`));let h=t(`div`);u(p,h),s(h,`stat-value text-2xl`),u(h,r(`18k`));let g=t(`div`);return u(p,g),s(g,`stat-desc`),u(g,r(`每分钟`)),e}),Te=m(()=>{let e=o(),n=t(`h2`);u(e,n),s(n,`card-title`),u(n,r(`支付面板`));let i=t(`p`);return u(e,i),s(i,`text-sm opacity-70`),u(i,r(`Template slot="title" 可以一次传多个兄弟节点。`)),e}),Ee=m(()=>{let e=o(),n=t(`button`);return u(e,n),s(n,`btn btn-sm btn-primary`),u(n,r(`刷新`)),e});d(()=>{l(p(O,{row:k.value?e=>y(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[y(`div`,{children:[b(`div`,{className:`font-medium`,children:e.label}),b(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),b(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:w.value?we:void 0,title:v.value?Te:void 0,actions:C.value?Ee:void 0},children:w.value?we:void 0}),G,Ce)});let q=t(`div`);u(W,q),s(q,`space-y-3`);let J=t(`div`);u(q,J),s(J,`flex items-center justify-between gap-3`);let De=t(`h3`);u(J,De),s(De,`text-lg font-semibold`),u(De,r(`省略 slot 之后`));let Oe=t(`span`);u(J,Oe),s(Oe,`badge badge-warning badge-outline`),u(Oe,r(`fallback 接管`));let ke=a(`rue:component:anchor`);u(q,ke),l(p(O,{}),q,ke);let Y=t(`div`);u(h,Y),s(Y,`grid gap-4 xl:grid-cols-2`);let Ae=t(`div`);u(Y,Ae),s(Ae,`card bg-base-100 shadow`);let je=t(`div`);u(Ae,je),s(je,`card-body gap-3`);let Me=t(`h2`);u(je,Me),s(Me,`card-title`),u(Me,r(`当前推荐写法`));let X=t(`ul`);u(je,X),s(X,`list rounded-box border border-base-300 bg-base-100`);let Ne=t(`li`);u(X,Ne),s(Ne,`list-row`);let Pe=t(`div`);u(Ne,Pe),s(Pe,`font-medium`),u(Pe,r(`default slot`));let Fe=t(`div`);u(Ne,Fe),s(Fe,`opacity-70`),u(Fe,r(`直接写在组件标签内部，最终会落到 props.children。`));let Ie=t(`li`);u(X,Ie),s(Ie,`list-row`);let Le=t(`div`);u(Ie,Le),s(Le,`font-medium`),u(Le,r(`named slot`));let Re=t(`div`);u(Ie,Re),s(Re,`opacity-70`),u(Re,r(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let ze=t(`li`);u(X,ze),s(ze,`list-row`);let Be=t(`div`);u(ze,Be),s(Be,`font-medium`),u(Be,r(`scoped slot`));let Ve=t(`div`);u(ze,Ve),s(Ve,`opacity-70`),u(Ve,r(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let He=t(`li`);u(X,He),s(He,`list-row`);let Ue=t(`div`);u(He,Ue),s(Ue,`font-medium`),u(Ue,r(`fallback`));let We=t(`div`);u(He,We),s(We,`opacity-70`),u(We,r(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=t(`div`);u(Y,Ge),s(Ge,`card bg-base-100 shadow`);let Z=t(`div`);u(Ge,Z),s(Z,`card-body gap-3`);let Ke=t(`h2`);u(Z,Ke),s(Ke,`card-title`),u(Ke,r(`这页实际演示的协议`));let Q=t(`div`);u(Z,Q),n(Q,`role`,`alert`),s(Q,`alert alert-soft`);let qe=t(`span`);u(Q,qe),u(qe,r(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=t(`div`);u(Z,$),s($,`mockup-code text-sm`);let Je=t(`pre`);u($,Je),n(Je,`data-prefix`,`1`);let Ye=t(`code`);u(Je,Ye);let Xe=i(Ye);u(Ye,Xe),c(Xe,`<Slot source={props} name="title">fallback</Slot>`);let Ze=t(`pre`);u($,Ze),n(Ze,`data-prefix`,`2`);let Qe=t(`code`);u(Ze,Qe);let $e=i(Qe);u(Qe,$e),c($e,`<Template slot="title">...</Template>`);let et=t(`pre`);u($,et),n(et,`data-prefix`,`3`);let tt=t(`code`);u(et,tt);let nt=i(tt);u(tt,nt),c(nt,`<button slot="actions">刷新</button>`);let rt=t(`pre`);u($,rt),n(rt,`data-prefix`,`4`);let it=t(`code`);u(rt,it);let at=i(it);u(it,at),c(at,`<SlotPanel row={(slotProps) => ...}>...</SlotPanel>`);let ot=t(`p`);return u(Z,ot),s(ot,`text-sm opacity-70 leading-6`),u(ot,r(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),f}):``,j,N)}),f})}),f,h),f})};export{k as default};
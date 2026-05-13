import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,j as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./Slot-DP68Sl89.js";import{n as b,t as x}from"./src-BfQKH6_d.js";import{t as S}from"./Code-2C2psoH3.js";import{t as C}from"./SidebarPlaygroundExample-DKa0aI1C.js";var ee={success:`badge-success`,warning:`badge-warning`,info:`badge-info`},w=[{label:`P95 延迟`,value:`128ms`,tone:`success`},{label:`错误率`,value:`0.18%`,tone:`info`},{label:`待处理告警`,value:`3`,tone:`warning`}],T=[{label:`CPU`,value:`37%`},{label:`内存`,value:`1.2GB`}],E=`import { Slot, type FC } from '@rue-js/rue';

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
/>;`,D=`import { Slot, Template, type FC } from '@rue-js/rue';

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

export default Demo;`,O=o=>g(()=>{let s=n(`section`);t(s,`card border border-base-300 bg-base-100 shadow-sm`);let c=n(`div`);i(s,c),t(c,`card-body gap-3`);let l=n(`div`);i(c,l),t(l,`space-y-1 border-b border-base-300 pb-3`);let f=a(`rue:component:anchor`);i(l,f);let p=g(()=>{let a=e(),o=n(`h3`);i(a,o),t(o,`font-semibold`),i(o,r(`默认标题`));let s=n(`p`);return i(a,s),t(s,`text-sm opacity-70`),i(s,r(`没传 title slot，就显示这里。`)),a});u(()=>{let e=h(y,{source:o,name:`title`,children:p});m(()=>d(e,l,f))});let _=n(`div`);i(c,_),t(_,`rounded-box bg-base-200 p-3 text-sm leading-6`);let v=a(`rue:component:anchor`);i(_,v);let b=g(()=>{let a=e(),o=n(`p`);return i(a,o),t(o,`opacity-70`),i(o,r(`没有传 default slot，所以这里显示 fallback。`)),a});u(()=>{let e=h(y,{source:o,children:b});m(()=>d(e,_,v))});let x=n(`div`);i(c,x),t(x,`text-sm opacity-70`);let S=a(`rue:component:anchor`);return i(x,S),u(()=>{let e=h(y,{source:o,name:`footer`,children:`默认底部`});m(()=>d(e,x,S))}),s}),te=r=>g(()=>{let l=n(`ul`);t(l,`list rounded-box border border-base-300 bg-base-100`);let f=a(`rue:list:start`),p=a(`rue:list:end`);i(l,f),i(l,p);let _=new Map;return u(()=>{_=v({items:T||[],getKey:(e,t)=>e.label,elements:_,parent:f.parentNode,before:p,singleRoot:!0,trackIndex:!1,start:f,renderItem:(l,f,p,_,v)=>{d(g(()=>{let f=e(),p=n(`li`);i(f,p),u(()=>{s(p,`key`,String(l.label))}),t(p,`list-row items-center gap-3`);let _=a(`rue:component:anchor`);i(p,_);let v=g(()=>{let r=e(),s=n(`div`);i(r,s),t(s,`flex w-full items-center justify-between gap-3`);let f=n(`span`);i(s,f),t(f,`font-medium`);let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=l.label;m(()=>d(e,f,p))});let h=n(`span`);i(s,h),t(h,`badge badge-outline`);let g=o(h);return i(h,g),u(()=>{c(g,l.value)}),r});return u(()=>{let e=h(y,{source:r,name:`item`,props:l,children:v});m(()=>d(e,p,_))}),f}),f,p)}})}),l}),k=l=>g(()=>{let f=n(`section`);t(f,`card border border-base-300 bg-base-100 shadow-sm`);let p=n(`div`);i(f,p),t(p,`card-body gap-4`);let _=n(`div`);i(p,_),t(_,`flex flex-wrap items-start justify-between gap-3 border-b border-base-300 pb-3`);let b=n(`div`);i(_,b),t(b,`space-y-1`);let x=a(`rue:component:anchor`);i(b,x);let S=g(()=>{let a=e(),o=n(`h2`);i(a,o),t(o,`card-title`),i(o,r(`默认标题`));let s=n(`p`);return i(a,s),t(s,`text-sm opacity-70`),i(s,r(`没有提供 title slot 时，会显示这段 fallback。`)),a});u(()=>{let e=h(y,{source:l,name:`title`,children:S});m(()=>d(e,b,x))});let C=n(`div`);i(_,C),t(C,`flex items-center gap-2`);let T=a(`rue:component:anchor`);i(C,T);let E=g(()=>{let a=e(),o=n(`span`);return i(a,o),t(o,`badge badge-outline`),i(o,r(`fallback action`)),a});u(()=>{let e=h(y,{source:l,name:`actions`,children:E});m(()=>d(e,C,T))});let D=n(`div`);i(p,D),t(D,`rounded-box bg-base-200 p-4`);let O=a(`rue:component:anchor`);i(D,O);let te=g(()=>{let a=e(),o=n(`p`);return i(a,o),t(o,`opacity-70`),i(o,r(`默认插槽为空时，这里显示主体内容的 fallback。`)),a});u(()=>{let e=h(y,{source:l,children:te});m(()=>d(e,D,O))});let k=n(`ul`);i(p,k),t(k,`list rounded-box border border-base-300 bg-base-100`);let A=a(`rue:list:start`),j=a(`rue:list:end`);i(k,A),i(k,j);let M=new Map;return u(()=>{M=v({items:w||[],getKey:(e,t)=>e.label,elements:M,parent:k,before:j,singleRoot:!0,trackIndex:!1,start:A,renderItem:(r,f,p,_,v)=>{d(g(()=>{let f=e(),p=n(`li`);i(f,p),u(()=>{s(p,`key`,String(r.label))}),t(p,`list-row items-center gap-3`);let _=a(`rue:component:anchor`);i(p,_);let v=g(()=>{let s=e(),l=n(`div`);i(s,l),t(l,`flex w-full items-center justify-between gap-3`);let f=n(`div`);i(l,f),t(f,`font-medium`);let p=a(`rue:slot:anchor`);i(f,p),u(()=>{let e=r.label;m(()=>d(e,f,p))});let h=n(`span`);i(l,h),u(()=>{t(h,String(`badge ${ee[r.tone]}`))});let g=o(h);return i(h,g),u(()=>{c(g,r.value)}),s});return u(()=>{let e=h(y,{source:l,name:`row`,props:r,children:v});m(()=>d(e,p,_))}),f}),f,p)}})}),f}),A=()=>{let{activeTab:v,showTitleSlot:y,showActionsSlot:w,showDefaultSlot:T,showScopedRow:A}=_(`useSetup:0:0`,()=>l(()=>({activeTab:_(`ref:1:0`,()=>p(`preview`)),showTitleSlot:_(`ref:1:1`,()=>p(!0)),showActionsSlot:_(`ref:1:2`,()=>p(!0)),showDefaultSlot:_(`ref:1:3`,()=>p(!0)),showScopedRow:_(`ref:1:4`,()=>p(!0))})));return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(C,{children:g(()=>{let l=e(),p=n(`h1`);i(l,p),t(p,`text-5xl font-semibold mb-4 md:mb-4`),i(p,r(`插槽 Slots（default / named / scoped）`));let _=n(`div`);i(l,_),s(_,`role`,`tablist`),t(_,`tabs tabs-box`);let C=n(`button`);i(_,C),s(C,`role`,`tab`),u(()=>{t(C,String(`tab ${v.value===`preview`?`tab-active`:``}`))}),f(C,`click`,()=>{v.value=`preview`}),i(C,r(`效果`));let j=n(`button`);i(_,j),s(j,`role`,`tab`),u(()=>{t(j,String(`tab ${v.value===`code`?`tab-active`:``}`))}),f(j,`click`,()=>{v.value=`code`}),i(j,r(`代码`));let M=n(`div`);i(l,M),t(M,`mt-4 grid md:grid-cols-1 gap-6 items-start`);let N=a(`rue:slot:anchor`);i(M,N),u(()=>{let o=v.value===`code`?g(()=>{let o=e(),s=n(`div`);i(o,s),t(s,`grid gap-6`);let c=n(`div`);i(s,c),t(c,`card bg-base-100 shadow overflow-auto`);let l=n(`div`);i(c,l),t(l,`card-body p-0`);let f=n(`div`);i(l,f),t(f,`border-b border-base-300 px-4 py-3`);let p=n(`h2`);i(f,p),t(p,`card-title text-lg`),i(p,r(`先看最小例子`));let g=n(`p`);i(f,g),t(g,`text-sm opacity-70`),i(g,r(`先只看 default、named、scoped 各自最短怎么写。`));let _=a(`rue:component:anchor`);i(l,_),u(()=>{let e=h(S,{className:`h-[420px]`,lang:`tsx`,code:E});m(()=>d(e,l,_))});let v=n(`div`);i(s,v),t(v,`card bg-base-100 shadow overflow-auto`);let y=n(`div`);i(v,y),t(y,`card-body p-0`);let b=n(`div`);i(y,b),t(b,`border-b border-base-300 px-4 py-3`);let x=n(`h2`);i(b,x),t(x,`card-title text-lg`),i(x,r(`再看完整例子`));let C=n(`p`);i(b,C),t(C,`text-sm opacity-70`),i(C,r(`这个版本把多个 slot 组合在一个卡片组件里。`));let ee=a(`rue:component:anchor`);return i(y,ee),u(()=>{let e=h(S,{className:`h-[760px]`,lang:`tsx`,code:D});m(()=>d(e,y,ee))}),o}):``;m(()=>d(o,M,N))}),i(M,r(` `));let P=a(`rue:slot:anchor`);return i(M,P),u(()=>{let l=v.value===`preview`?g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`grid gap-6`);let _=n(`div`);i(p,_),s(_,`role`,`alert`),t(_,`alert alert-success`);let v=n(`span`);i(_,v),i(v,r(`是，当前这里的 slot 是真实渲染。父组件传进来的不是字符串模板，而是实际的 JSX / renderable；宿主组件内部的 Slot 会在运行时把它取出来并直接渲染。`));let S=n(`div`);i(p,S),t(S,`card bg-base-100 shadow`);let C=n(`div`);i(S,C),t(C,`card-body gap-5`);let E=n(`div`);i(C,E);let D=n(`h2`);i(E,D),t(D,`card-title`),i(D,r(`先看最小例子`));let j=n(`p`);i(E,j),t(j,`text-sm opacity-70`),i(j,r(`把 slot 理解成“组件内部预留的洞口”。父组件传什么，洞口里就显示什么；没传就显示 fallback。`));let M=n(`div`);i(C,M),t(M,`grid gap-4 xl:grid-cols-3`);let N=n(`div`);i(M,N),t(N,`space-y-3`);let P=n(`div`);i(N,P);let ne=n(`h3`);i(P,ne),t(ne,`text-lg font-semibold`),i(ne,r(`1. default slot`));let re=n(`p`);i(P,re),t(re,`text-sm opacity-70`),i(re,r(`直接写在组件标签内部的内容，会落到默认插槽。`));let ie=a(`rue:component:anchor`);i(N,ie),d(h(O,{children:g(()=>{let t=e(),a=n(`p`);return i(t,a),i(a,r(`这段内容就是 default slot。`)),t})}),N,ie);let F=n(`div`);i(M,F),t(F,`space-y-3`);let ae=n(`div`);i(F,ae);let oe=n(`h3`);i(ae,oe),t(oe,`text-lg font-semibold`),i(oe,r(`2. named slot`));let se=n(`p`);i(ae,se),t(se,`text-sm opacity-70`),i(se,r(`给某个直接子节点写 slot="name"，它就会去对应的命名插槽。`));let ce=a(`rue:component:anchor`);i(F,ce);let le=g(()=>{let t=e(),a=n(`p`);return i(t,a),i(a,r(`中间这段还是 default slot。`)),t}),ue=g(()=>{let a=e(),o=n(`span`);return i(a,o),t(o,`font-semibold text-base-content`),i(o,r(`自定义标题`)),a}),de=g(()=>{let t=e(),a=n(`span`);return i(t,a),i(a,r(`自定义底部`)),t});u(()=>{let e=h(O,{__rue_slots:{default:le,title:ue,footer:de},children:le});m(()=>d(e,F,ce))});let I=n(`div`);i(M,I),t(I,`space-y-3`);let fe=n(`div`);i(I,fe);let pe=n(`h3`);i(fe,pe),t(pe,`text-lg font-semibold`),i(pe,r(`3. scoped slot`));let me=n(`p`);i(fe,me),t(me,`text-sm opacity-70`),i(me,r(`宿主组件把数据通过 props 传给 Slot；父组件用同名函数 prop 接住它。`));let he=a(`rue:component:anchor`);i(I,he),d(h(te,{item:e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`font-medium`,children:e.label}),x(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),x(`span`,{className:`badge badge-primary`,children:e.value})]})}),I,he);let L=n(`div`);i(C,L),s(L,`role`,`alert`),t(L,`alert alert-soft`);let ge=n(`span`);i(L,ge),i(ge,r(`如果只想先会用，记住这三条就够了：标签里的普通内容是 default slot，slot="name" 是 named slot，同名函数 prop 是 scoped slot。`));let _e=n(`div`);i(p,_e),t(_e,`card bg-base-100 shadow`);let R=n(`div`);i(_e,R),t(R,`card-body gap-5`);let z=n(`div`);i(R,z),t(z,`flex flex-wrap items-center justify-between gap-3`);let ve=n(`div`);i(z,ve);let ye=n(`h2`);i(ve,ye),t(ye,`card-title`),i(ye,r(`再看完整例子`));let be=n(`p`);i(ve,be),t(be,`text-sm opacity-70`),i(be,r(`下面把 default、named、scoped、fallback 都放在一个组件里，看完整交互会更直观。`));let B=n(`div`);i(z,B),t(B,`flex flex-wrap gap-2`);let V=n(`button`);i(B,V),u(()=>{t(V,String(`btn btn-sm ${y.value?`btn-primary`:`btn-outline`}`))}),f(V,`click`,()=>{y.value=!y.value}),i(V,r(`title slot`));let H=n(`button`);i(B,H),u(()=>{t(H,String(`btn btn-sm ${w.value?`btn-primary`:`btn-outline`}`))}),f(H,`click`,()=>{w.value=!w.value}),i(H,r(`actions slot`));let U=n(`button`);i(B,U),u(()=>{t(U,String(`btn btn-sm ${T.value?`btn-primary`:`btn-outline`}`))}),f(U,`click`,()=>{T.value=!T.value}),i(U,r(`default slot`));let W=n(`button`);i(B,W),u(()=>{t(W,String(`btn btn-sm ${A.value?`btn-primary`:`btn-outline`}`))}),f(W,`click`,()=>{A.value=!A.value}),i(W,r(`scoped row`));let G=n(`div`);i(R,G),t(G,`grid gap-5 xl:grid-cols-2`);let K=n(`div`);i(G,K),t(K,`space-y-3`);let q=n(`div`);i(K,q),t(q,`flex items-center justify-between gap-3`);let xe=n(`h3`);i(q,xe),t(xe,`text-lg font-semibold`),i(xe,r(`传入 slot 之后`));let Se=n(`span`);i(q,Se),t(Se,`badge badge-success badge-outline`),i(Se,r(`自定义内容生效`));let Ce=a(`rue:component:anchor`);i(K,Ce);let we=g(()=>{let a=e(),o=n(`div`);i(a,o),t(o,`space-y-3`);let s=n(`p`);i(o,s),t(s,`text-sm leading-6`),i(s,r(`default slot 负责主体内容；这里放的是正文、统计块和说明文本。`));let c=n(`div`);i(o,c),t(c,`stats stats-vertical sm:stats-horizontal border border-base-300 bg-base-100 shadow-none`);let l=n(`div`);i(c,l),t(l,`stat py-3`);let u=n(`div`);i(l,u),t(u,`stat-title`),i(u,r(`可用率`));let d=n(`div`);i(l,d),t(d,`stat-value text-2xl`),i(d,r(`99.98%`));let f=n(`div`);i(l,f),t(f,`stat-desc`),i(f,r(`过去 24 小时`));let p=n(`div`);i(c,p),t(p,`stat py-3`);let m=n(`div`);i(p,m),t(m,`stat-title`),i(m,r(`峰值请求`));let h=n(`div`);i(p,h),t(h,`stat-value text-2xl`),i(h,r(`18k`));let g=n(`div`);return i(p,g),t(g,`stat-desc`),i(g,r(`每分钟`)),a}),Te=g(()=>{let a=e(),o=n(`h2`);i(a,o),t(o,`card-title`),i(o,r(`支付面板`));let s=n(`p`);return i(a,s),t(s,`text-sm opacity-70`),i(s,r(`Template slot="title" 可以一次传多个兄弟节点。`)),a}),Ee=g(()=>{let a=e(),o=n(`button`);return i(a,o),t(o,`btn btn-sm btn-primary`),i(o,r(`刷新`)),a});u(()=>{let e=h(k,{row:A.value?e=>b(`div`,{className:`flex w-full items-center justify-between gap-3`,children:[b(`div`,{children:[x(`div`,{className:`font-medium`,children:e.label}),x(`div`,{className:`text-xs opacity-60`,children:`来自 scoped slot props`})]}),x(`span`,{className:`badge ${ee[e.tone]}`,children:e.value})]}):void 0,__rue_slots:{default:T.value?we:void 0,title:y.value?Te:void 0,actions:w.value?Ee:void 0},children:T.value?we:void 0});m(()=>d(e,K,Ce))});let J=n(`div`);i(G,J),t(J,`space-y-3`);let Y=n(`div`);i(J,Y),t(Y,`flex items-center justify-between gap-3`);let De=n(`h3`);i(Y,De),t(De,`text-lg font-semibold`),i(De,r(`省略 slot 之后`));let Oe=n(`span`);i(Y,Oe),t(Oe,`badge badge-warning badge-outline`),i(Oe,r(`fallback 接管`));let ke=a(`rue:component:anchor`);i(J,ke),d(h(k,{}),J,ke);let X=n(`div`);i(p,X),t(X,`grid gap-4 xl:grid-cols-2`);let Ae=n(`div`);i(X,Ae),t(Ae,`card bg-base-100 shadow`);let je=n(`div`);i(Ae,je),t(je,`card-body gap-3`);let Me=n(`h2`);i(je,Me),t(Me,`card-title`),i(Me,r(`当前推荐写法`));let Z=n(`ul`);i(je,Z),t(Z,`list rounded-box border border-base-300 bg-base-100`);let Ne=n(`li`);i(Z,Ne),t(Ne,`list-row`);let Pe=n(`div`);i(Ne,Pe),t(Pe,`font-medium`),i(Pe,r(`default slot`));let Fe=n(`div`);i(Ne,Fe),t(Fe,`opacity-70`),i(Fe,r(`直接写在组件标签内部，最终会落到 props.children。`));let Ie=n(`li`);i(Z,Ie),t(Ie,`list-row`);let Le=n(`div`);i(Ie,Le),t(Le,`font-medium`),i(Le,r(`named slot`));let Re=n(`div`);i(Ie,Re),t(Re,`opacity-70`),i(Re,r(`单个节点可以直接写 slot="name"，多个兄弟节点建议用 Template slot="name" 包起来。`));let ze=n(`li`);i(Z,ze),t(ze,`list-row`);let Be=n(`div`);i(ze,Be),t(Be,`font-medium`),i(Be,r(`scoped slot`));let Ve=n(`div`);i(ze,Ve),t(Ve,`opacity-70`),i(Ve,r(`当前最稳妥的是传同名函数 prop，例如把 row 作为函数属性传给宿主组件。`));let He=n(`li`);i(Z,He),t(He,`list-row`);let Ue=n(`div`);i(He,Ue),t(Ue,`font-medium`),i(Ue,r(`fallback`));let We=n(`div`);i(He,We),t(We,`opacity-70`),i(We,r(`宿主组件内部在 Slot 标签里写的 children，就是 slot 缺失时的回退内容。`));let Ge=n(`div`);i(X,Ge),t(Ge,`card bg-base-100 shadow`);let Q=n(`div`);i(Ge,Q),t(Q,`card-body gap-3`);let Ke=n(`h2`);i(Q,Ke),t(Ke,`card-title`),i(Ke,r(`这页实际演示的协议`));let qe=n(`div`);i(Q,qe),s(qe,`role`,`alert`),t(qe,`alert alert-soft`);let Je=n(`span`);i(qe,Je),i(Je,r(`静态命名内容走 slot="name" 和 Template slot="name"，作用域行模板走 row 函数 prop。`));let $=n(`div`);i(Q,$),t($,`mockup-code text-sm`);let Ye=n(`pre`);i($,Ye),s(Ye,`data-prefix`,`1`);let Xe=n(`code`);i(Ye,Xe);let Ze=o(Xe);i(Xe,Ze),c(Ze,`<Slot source={props} name="title">fallback</Slot>`);let Qe=n(`pre`);i($,Qe),s(Qe,`data-prefix`,`2`);let $e=n(`code`);i(Qe,$e);let et=o($e);i($e,et),c(et,`<Template slot="title">...</Template>`);let tt=n(`pre`);i($,tt),s(tt,`data-prefix`,`3`);let nt=n(`code`);i(tt,nt);let rt=o(nt);i(nt,rt),c(rt,`<button slot="actions">刷新</button>`);let it=n(`pre`);i($,it),s(it,`data-prefix`,`4`);let at=n(`code`);i(it,at);let ot=o(at);i(at,ot),c(ot,`<SlotPanel row={(slotProps) => ...}>...</SlotPanel>`);let st=n(`p`);return i(Q,st),t(st,`text-sm opacity-70 leading-6`),i(st,r(`这也解释了为什么当前 demo 会同时出现 slot 属性和函数 prop 两种形式：前者覆盖命名静态内容，后者负责 scoped slot。`)),l}):``;m(()=>d(l,M,P))}),l})}),l,p),l})};export{A as default};
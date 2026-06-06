import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,et as l,l as u,ot as d,s as f,t as p}from"./vapor-runtime-DHPuOjqh.js";import{a as m,n as h}from"./vapor-helpers-vapor-CJFAWine.js";import{a as g,i as _}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as v}from"./Code-Ds9lKLk6.js";import{t as y}from"./tabs-DSy0eY-V.js";import{t as b}from"./badge-D84isAR2.js";import{t as x}from"./status-Cz0cTJBM.js";import{t as S}from"./input-DnJRs2ot.js";import{n as C}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as w}from"./preview-test-gate-CxeqnU1g.js";var T={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},E=(e,t)=>t?`${e} ${t}`:e,ee=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),D=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),O=(e,t,n=!1)=>`calc(${e} ${(n?!D(t):D(t))?`-`:`+`} ${ee(t)})`,k=e=>e?T[e]:{},A=(e,t,n,r)=>{if(!e)return;let i={"--indicator-s":void 0,"--indicator-e":void 0,"--indicator-t":void 0,"--indicator-b":void 0};if(r){let[e,a]=r;t===`start`?(i[`--indicator-s`]=O(`0px`,e),i[`--indicator-e`]=`auto`):t===`center`?(i[`--indicator-s`]=O(`50%`,e),i[`--indicator-e`]=O(`50%`,e,!0)):t===`end`&&(i[`--indicator-s`]=`auto`,i[`--indicator-e`]=O(`0px`,e,!0)),n===`top`?(i[`--indicator-t`]=O(`0px`,a),i[`--indicator-b`]=`auto`):n===`middle`?(i[`--indicator-t`]=O(`50%`,a),i[`--indicator-b`]=O(`50%`,a,!0)):n===`bottom`&&(i[`--indicator-t`]=`auto`,i[`--indicator-b`]=O(`0px`,a,!0))}Object.entries(i).forEach(([t,n])=>{if(n===void 0){e.style.removeProperty(t);return}e.style.setProperty(t,n)})},j=({as:e=`div`,className:t,style:n,item:r,itemProps:i,items:a,children:o,...s})=>{let c=e,l=Array.isArray(a)&&a.length>0?a.map((e,t)=>_(M,{...e,children:e.children},e.key??t)):r==null?[]:[_(M,{...i,children:r},`__indicator_item__`)];return g(c,{...s,className:E(`indicator`,t),style:n,children:[l,o]})},M=({as:e=`span`,placement:t,horizontal:n,vertical:r,offset:i,className:a,style:o,children:s,...c})=>{let l=e,u=k(t),d=n??u.horizontal,f=r??u.vertical,p=c.ref;`ref`in c&&delete c.ref;let m=`indicator-item`;return d&&(m+=` indicator-${d}`),f&&(m+=` indicator-${f}`),a&&(m+=` ${a}`),_(l,{...c,ref:e=>{typeof p==`function`?p(e):p&&typeof p==`object`&&(p.current=e??void 0),A(e,d,f,i)},className:m,style:o,children:s})},N=Object.assign(j,{Item:M}),te=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,ne=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,P=t=>u(n=>{let d=e(`div`,n);c(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=e(`div`,d);a(d,m),c(m,`flex flex-wrap items-start justify-between gap-3`);let h=e(`div`,m);a(m,h);let g=e(`h2`,h);a(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,l(`# `));let _=s(`rue:slot:anchor`);a(g,_),o(()=>{let e=t.title;i(()=>f(e,g,_))});let b=s(`rue:slot:anchor`);a(h,b),o(()=>{let n=t.summary?u(()=>{let n=r(),l=e(`p`,n);a(n,l),c(l,`m-0 text-sm opacity-70`);let u=s(`rue:slot:anchor`);return a(l,u),o(()=>{let e=t.summary;i(()=>f(e,l,u))}),n}):``;i(()=>f(n,h,b))});let x=s(`rue:component:anchor`);a(d,x),o(()=>{let e=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});i(()=>f(e,d,x))});let S=s(`rue:slot:anchor`);return a(d,S),o(()=>{let e=t.tab.value===`preview`?w(t.title,t.preview):u(()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=p(v,{className:`mt-2`,lang:`tsx`,code:t.code});i(()=>f(r,e,n))}),e});i(()=>f(e,d,S))}),d}),re=t=>u(n=>{let p=e(`div`,n);c(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),c(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,l(`属性`));let y=e(`th`,_);a(_,y),a(y,l(`说明`));let b=e(`th`,_);a(_,b),a(b,l(`类型`));let x=e(`th`,_);a(_,x),a(x,l(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,l,p)=>{f(u(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{d(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let p=s(`rue:slot:anchor`);a(u,p),o(()=>{let e=t.prop;i(()=>f(e,u,p))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>f(e,b,x))}),n}),n,c)}})}),p}),ie=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],ae=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],F=()=>{let{tabStatus:d,tabBadge:h,tabButton:v,tabInput:y,tabCard:w,tabCenter:T,tabAvatar:E,tabTab:ee,tabPlacement:D,tabShortcut:O,tabMultiple:k}=m(`useSetup:0:0`,()=>t(()=>({tabStatus:m(`ref:1:0`,()=>n(`preview`)),tabBadge:m(`ref:1:1`,()=>n(`preview`)),tabButton:m(`ref:1:2`,()=>n(`preview`)),tabInput:m(`ref:1:3`,()=>n(`preview`)),tabCard:m(`ref:1:4`,()=>n(`preview`)),tabCenter:m(`ref:1:5`,()=>n(`preview`)),tabAvatar:m(`ref:1:6`,()=>n(`preview`)),tabTab:m(`ref:1:7`,()=>n(`preview`)),tabPlacement:m(`ref:1:8`,()=>n(`preview`)),tabShortcut:m(`ref:1:9`,()=>n(`preview`)),tabMultiple:m(`ref:1:10`,()=>n(`preview`))})));return u(t=>{let n=r(),m=s(`rue:component:anchor`);return a(n,m),f(p(C,{children:u(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let u=e(`h1`,n);a(n,u),a(u,l(`Indicator 指示器`));let m=e(`p`,n);a(n,m),c(m,`text-sm mt-3 mb-3`),a(m,l(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let C=e(`code`,m);a(m,C),a(C,l(`placement`)),a(m,l(`、`));let A=e(`code`,m);a(m,A),a(A,l(`offset`)),a(m,l(`，以及`));let j=e(`code`,m);a(m,j),a(j,l(`item / items`)),a(m,l(`这组三件套，方便快速搭角标而不必每次都手写一个`));let M=e(`code`,m);a(m,M),a(M,l(`Indicator.Item`)),a(m,l(`。`));let F=e(`div`,n);a(n,F),c(F,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let I=e(`div`,F);a(F,I),c(I,`rounded-box bg-base-200/70 p-4`);let L=e(`div`,I);a(I,L),c(L,`text-sm font-medium`),a(L,l(`兼容旧用法`));let R=e(`p`,I);a(I,R),c(R,`m-0 mt-2 text-sm text-base-content/70`),a(R,l(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let z=e(`div`,F);a(F,z),c(z,`rounded-box bg-base-200/70 p-4`);let B=e(`div`,z);a(z,B),c(B,`text-sm font-medium`),a(B,l(`新增快捷模式`));let V=e(`p`,z);a(z,V),c(V,`m-0 mt-2 text-sm text-base-content/70`),a(V,l(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let H=e(`div`,F);a(F,H),c(H,`rounded-box bg-base-200/70 p-4`);let U=e(`div`,H);a(H,U),c(U,`text-sm font-medium`),a(U,l(`定位更顺手`));let W=e(`p`,H);a(H,W),c(W,`m-0 mt-2 text-sm text-base-content/70`),a(W,l(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let G=s(`rue:component:anchor`);a(n,G),o(()=>{let e=p(P,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:d,preview:()=>g(N,{children:[_(N.Item,{children:_(x,{status:`success`})}),_(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});i(()=>f(e,n,G))});let K=s(`rue:component:anchor`);a(n,K),o(()=>{let e=p(P,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:h,preview:()=>g(N,{children:[_(N.Item,{children:_(b,{variant:`primary`,children:`New`})}),_(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});i(()=>f(e,n,K))});let q=s(`rue:component:anchor`);a(n,q),o(()=>{let e=p(P,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:v,preview:()=>_(N,{item:_(b,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:_(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});i(()=>f(e,n,q))});let J=s(`rue:component:anchor`);a(n,J),o(()=>{let e=p(P,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:y,preview:()=>g(N,{children:[_(N.Item,{children:_(b,{children:`Required`})}),_(S,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});i(()=>f(e,n,J))});let Y=s(`rue:component:anchor`);a(n,Y),o(()=>{let e=p(P,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:w,preview:()=>g(N,{className:`mx-10 my-6`,children:[_(N.Item,{vertical:`bottom`,children:_(`button`,{className:`btn btn-primary`,children:`Apply`})}),_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body`,children:[_(`h2`,{className:`card-title`,children:`Job Title`}),_(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});i(()=>f(e,n,Y))});let oe=s(`rue:component:anchor`);a(n,oe),o(()=>{let e=p(P,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:T,preview:()=>g(N,{className:`max-w-xs`,children:[_(N.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),_(`img`,{className:`rounded`,src:te,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${te}" alt="Indicator centered message" />
</Indicator>`});i(()=>f(e,n,oe))});let se=s(`rue:component:anchor`);a(n,se),o(()=>{let e=p(P,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>g(N,{className:`avatar`,children:[_(N.Item,{className:`badge badge-secondary`,children:`Justice`}),_(`div`,{className:`w-20 rounded-lg`,children:_(`img`,{src:ne,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${ne}" alt="Avatar with indicator" />
  </div>
</Indicator>`});i(()=>f(e,n,se))});let ce=s(`rue:component:anchor`);a(n,ce),o(()=>{let e=p(P,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:ee,preview:()=>g(`div`,{className:`tabs tabs-lift`,children:[_(`button`,{className:`tab`,children:`Messages`}),g(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,_(`span`,{className:`indicator-item badge`,children:`8`})]}),_(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});i(()=>f(e,n,ce))});let le=s(`rue:component:anchor`);a(n,le),o(()=>{let e=p(P,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:D,preview:()=>g(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[_(N,{item:_(b,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),_(N,{item:_(b,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),_(N,{item:_(b,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
  <Indicator
    item={<Badge variant="secondary">Start</Badge>}
    itemProps={{ placement: 'top-start', offset: [8, -4] }}
  >
    <div className="grid h-24 rounded-xl bg-base-200 place-items-center text-sm">top-start</div>
  </Indicator>
  <Indicator
    item={<Badge variant="accent">Center</Badge>}
    itemProps={{ placement: 'middle-center', offset: [0, 4] }}
  >
    <div className="grid h-24 rounded-xl bg-base-200 place-items-center text-sm">middle-center</div>
  </Indicator>
  <Indicator
    item={<Badge variant="warning">End</Badge>}
    itemProps={{ placement: 'bottom-end', offset: [10, 6] }}
  >
    <div className="grid h-24 rounded-xl bg-base-200 place-items-center text-sm">bottom-end</div>
  </Indicator>
</div>`});i(()=>f(e,n,le))});let X=s(`rue:component:anchor`);a(n,X),o(()=>{let e=p(P,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:O,preview:()=>_(N,{className:`w-full max-w-sm`,item:_(b,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-3`,children:[g(`div`,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),_(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
  className="w-full max-w-sm"
  item={<Badge variant="primary">8 pending</Badge>}
  itemProps={{ placement: 'top-end', offset: [12, -6] }}
>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body gap-3">
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-base-content/55">Queue</div>
        <div className="mt-2 text-lg font-semibold">Build pipeline</div>
      </div>
      <p className="m-0 text-sm text-base-content/70">
        Web hooks, release notes and QA approvals are waiting for merge.
      </p>
    </div>
  </div>
</Indicator>`});i(()=>f(e,n,X))});let ue=s(`rue:component:anchor`);a(n,ue),o(()=>{let e=p(P,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:k,preview:()=>_(N,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:_(x,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:_(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-2`,children:[_(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
  className="w-full max-w-sm"
  items={[
    {
      key: 'presence',
      placement: 'top-start',
      offset: [6, -4],
      children: <Status status="success" />,
    },
    {
      key: 'cta',
      as: 'div',
      placement: 'bottom-center',
      children: <button className="btn btn-primary btn-sm">Apply</button>,
    },
  ]}
>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body gap-2">
      <h3 className="m-0 text-lg font-semibold">Design review board</h3>
      <p className="m-0 text-sm text-base-content/70">
        This board keeps the latest reviewer presence and the primary action in one place.
      </p>
    </div>
  </div>
</Indicator>`});i(()=>f(e,n,ue))});let Z=e(`h2`,n);a(n,Z),c(Z,`mt-10`),a(Z,l(`API`));let Q=e(`p`,n);a(n,Q),c(Q,`text-sm text-base-content/70`),a(Q,l(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=e(`h3`,n);a(n,de),a(de,l(`Indicator`));let fe=s(`rue:component:anchor`);a(n,fe),o(()=>{let e=p(re,{rows:ie});i(()=>f(e,n,fe))});let $=e(`h3`,n);a(n,$),c($,`mt-8`),a($,l(`Indicator.Item`));let pe=s(`rue:component:anchor`);return a(n,pe),o(()=>{let e=p(re,{rows:ae});i(()=>f(e,n,pe))}),t})}),n,m),n})};export{F as default};
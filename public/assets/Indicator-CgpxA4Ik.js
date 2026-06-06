import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{a as m,n as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{n as _,t as v}from"./src-BLzF0BqW.js";import{n as y}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as b}from"./tabs-BOxm6iIN.js";import{t as x}from"./badge-brlKCV7x.js";import{t as S}from"./status-C1wHFT4N.js";import{t as C}from"./input-B3nHDIiJ.js";import{t as w}from"./preview-test-gate-DtKtoe96.js";var T={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},E=(e,t)=>t?`${e} ${t}`:e,ee=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),D=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),O=(e,t,n=!1)=>`calc(${e} ${(n?!D(t):D(t))?`-`:`+`} ${ee(t)})`,k=e=>e?T[e]:{},A=(e,t,n,r)=>{if(!e)return;let i={"--indicator-s":void 0,"--indicator-e":void 0,"--indicator-t":void 0,"--indicator-b":void 0};if(r){let[e,a]=r;t===`start`?(i[`--indicator-s`]=O(`0px`,e),i[`--indicator-e`]=`auto`):t===`center`?(i[`--indicator-s`]=O(`50%`,e),i[`--indicator-e`]=O(`50%`,e,!0)):t===`end`&&(i[`--indicator-s`]=`auto`,i[`--indicator-e`]=O(`0px`,e,!0)),n===`top`?(i[`--indicator-t`]=O(`0px`,a),i[`--indicator-b`]=`auto`):n===`middle`?(i[`--indicator-t`]=O(`50%`,a),i[`--indicator-b`]=O(`50%`,a,!0)):n===`bottom`&&(i[`--indicator-t`]=`auto`,i[`--indicator-b`]=O(`0px`,a,!0))}Object.entries(i).forEach(([t,n])=>{if(n===void 0){e.style.removeProperty(t);return}e.style.setProperty(t,n)})},j=({as:e=`div`,className:t,style:n,item:r,itemProps:i,items:a,children:o,...s})=>{let c=e,l=Array.isArray(a)&&a.length>0?a.map((e,t)=>v(M,{...e,children:e.children},e.key??t)):r==null?[]:[v(M,{...i,children:r},`__indicator_item__`)];return _(c,{...s,className:E(`indicator`,t),style:n,children:[l,o]})},M=({as:e=`span`,placement:t,horizontal:n,vertical:r,offset:i,className:a,style:o,children:s,...c})=>{let l=e,u=k(t),d=n??u.horizontal,f=r??u.vertical,p=c.ref;`ref`in c&&delete c.ref;let m=`indicator-item`;return d&&(m+=` indicator-${d}`),f&&(m+=` indicator-${f}`),a&&(m+=` ${a}`),v(l,{...c,ref:e=>{typeof p==`function`?p(e):p&&typeof p==`object`&&(p.current=e??void 0),A(e,d,f,i)},className:m,style:o,children:s})},N=Object.assign(j,{Item:M}),te=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,ne=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,P=s=>l(c=>{let f=o(`div`,c);e(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,f);t(f,m),e(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);t(m,h);let _=o(`h2`,h);t(h,_),e(_,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(_,r(`# `));let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let e=s.title;p(()=>u(e,_,v))});let y=i(`rue:slot:anchor`);t(h,y),n(()=>{let r=s.summary?l(()=>{let r=a(),c=o(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=s.summary;p(()=>u(e,c,l))}),r}):``;p(()=>u(r,h,y))});let x=i(`rue:component:anchor`);t(f,x),n(()=>{let e=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:s.tab.value,onChange:e=>s.tab.value=e,className:`mb-3 mt-4`});p(()=>u(e,f,x))});let S=i(`rue:slot:anchor`);return t(f,S),n(()=>{let e=s.tab.value===`preview`?w(s.title,s.preview):l(()=>{let e=a(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=d(g,{className:`mt-2`,lang:`tsx`,code:s.code});p(()=>u(t,e,r))}),e});p(()=>u(e,f,S))}),f}),re=c=>l(d=>{let f=o(`div`,d);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);t(f,m),e(m,`table table-zebra`);let g=o(`thead`,m);t(m,g);let _=o(`tr`,g);t(g,_);let v=o(`th`,_);t(_,v),t(v,r(`属性`));let y=o(`th`,_);t(_,y),t(y,r(`说明`));let b=o(`th`,_);t(_,b),t(b,r(`类型`));let x=o(`th`,_);t(_,x),t(x,r(`默认值`));let S=o(`tbody`,m);t(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=h({items:c.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),f}),ie=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],ae=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],F=()=>{let{tabStatus:s,tabBadge:h,tabButton:g,tabInput:b,tabCard:w,tabCenter:T,tabAvatar:E,tabTab:ee,tabPlacement:D,tabShortcut:O,tabMultiple:k}=m(`useSetup:0:0`,()=>f(()=>({tabStatus:m(`ref:1:0`,()=>c(`preview`)),tabBadge:m(`ref:1:1`,()=>c(`preview`)),tabButton:m(`ref:1:2`,()=>c(`preview`)),tabInput:m(`ref:1:3`,()=>c(`preview`)),tabCard:m(`ref:1:4`,()=>c(`preview`)),tabCenter:m(`ref:1:5`,()=>c(`preview`)),tabAvatar:m(`ref:1:6`,()=>c(`preview`)),tabTab:m(`ref:1:7`,()=>c(`preview`)),tabPlacement:m(`ref:1:8`,()=>c(`preview`)),tabShortcut:m(`ref:1:9`,()=>c(`preview`)),tabMultiple:m(`ref:1:10`,()=>c(`preview`))})));return l(c=>{let f=a(),m=i(`rue:component:anchor`);return t(f,m),u(d(y,{children:l(()=>{let c=a(),l=o(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,l);t(l,f),t(f,r(`Indicator 指示器`));let m=o(`p`,l);t(l,m),e(m,`text-sm mt-3 mb-3`),t(m,r(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let y=o(`code`,m);t(m,y),t(y,r(`placement`)),t(m,r(`、`));let A=o(`code`,m);t(m,A),t(A,r(`offset`)),t(m,r(`，以及`));let j=o(`code`,m);t(m,j),t(j,r(`item / items`)),t(m,r(`这组三件套，方便快速搭角标而不必每次都手写一个`));let M=o(`code`,m);t(m,M),t(M,r(`Indicator.Item`)),t(m,r(`。`));let F=o(`div`,l);t(l,F),e(F,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let I=o(`div`,F);t(F,I),e(I,`rounded-box bg-base-200/70 p-4`);let L=o(`div`,I);t(I,L),e(L,`text-sm font-medium`),t(L,r(`兼容旧用法`));let R=o(`p`,I);t(I,R),e(R,`m-0 mt-2 text-sm text-base-content/70`),t(R,r(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let z=o(`div`,F);t(F,z),e(z,`rounded-box bg-base-200/70 p-4`);let B=o(`div`,z);t(z,B),e(B,`text-sm font-medium`),t(B,r(`新增快捷模式`));let V=o(`p`,z);t(z,V),e(V,`m-0 mt-2 text-sm text-base-content/70`),t(V,r(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let H=o(`div`,F);t(F,H),e(H,`rounded-box bg-base-200/70 p-4`);let U=o(`div`,H);t(H,U),e(U,`text-sm font-medium`),t(U,r(`定位更顺手`));let W=o(`p`,H);t(H,W),e(W,`m-0 mt-2 text-sm text-base-content/70`),t(W,r(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let G=i(`rue:component:anchor`);t(l,G),n(()=>{let e=d(P,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:s,preview:()=>_(N,{children:[v(N.Item,{children:v(S,{status:`success`})}),v(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});p(()=>u(e,l,G))});let K=i(`rue:component:anchor`);t(l,K),n(()=>{let e=d(P,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:h,preview:()=>_(N,{children:[v(N.Item,{children:v(x,{variant:`primary`,children:`New`})}),v(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});p(()=>u(e,l,K))});let q=i(`rue:component:anchor`);t(l,q),n(()=>{let e=d(P,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:g,preview:()=>v(N,{item:v(x,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:v(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});p(()=>u(e,l,q))});let J=i(`rue:component:anchor`);t(l,J),n(()=>{let e=d(P,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:b,preview:()=>_(N,{children:[v(N.Item,{children:v(x,{children:`Required`})}),v(C,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});p(()=>u(e,l,J))});let Y=i(`rue:component:anchor`);t(l,Y),n(()=>{let e=d(P,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:w,preview:()=>_(N,{className:`mx-10 my-6`,children:[v(N.Item,{vertical:`bottom`,children:v(`button`,{className:`btn btn-primary`,children:`Apply`})}),v(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body`,children:[v(`h2`,{className:`card-title`,children:`Job Title`}),v(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});p(()=>u(e,l,Y))});let oe=i(`rue:component:anchor`);t(l,oe),n(()=>{let e=d(P,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:T,preview:()=>_(N,{className:`max-w-xs`,children:[v(N.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),v(`img`,{className:`rounded`,src:te,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${te}" alt="Indicator centered message" />
</Indicator>`});p(()=>u(e,l,oe))});let se=i(`rue:component:anchor`);t(l,se),n(()=>{let e=d(P,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>_(N,{className:`avatar`,children:[v(N.Item,{className:`badge badge-secondary`,children:`Justice`}),v(`div`,{className:`w-20 rounded-lg`,children:v(`img`,{src:ne,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${ne}" alt="Avatar with indicator" />
  </div>
</Indicator>`});p(()=>u(e,l,se))});let ce=i(`rue:component:anchor`);t(l,ce),n(()=>{let e=d(P,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:ee,preview:()=>_(`div`,{className:`tabs tabs-lift`,children:[v(`button`,{className:`tab`,children:`Messages`}),_(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,v(`span`,{className:`indicator-item badge`,children:`8`})]}),v(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});p(()=>u(e,l,ce))});let le=i(`rue:component:anchor`);t(l,le),n(()=>{let e=d(P,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:D,preview:()=>_(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[v(N,{item:v(x,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:v(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),v(N,{item:v(x,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:v(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),v(N,{item:v(x,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:v(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});p(()=>u(e,l,le))});let X=i(`rue:component:anchor`);t(l,X),n(()=>{let e=d(P,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:O,preview:()=>v(N,{className:`w-full max-w-sm`,item:v(x,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:v(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-3`,children:[_(`div`,{children:[v(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),v(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),v(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});p(()=>u(e,l,X))});let ue=i(`rue:component:anchor`);t(l,ue),n(()=>{let e=d(P,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:k,preview:()=>v(N,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:v(S,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:v(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:v(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-2`,children:[v(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),v(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});p(()=>u(e,l,ue))});let Z=o(`h2`,l);t(l,Z),e(Z,`mt-10`),t(Z,r(`API`));let Q=o(`p`,l);t(l,Q),e(Q,`text-sm text-base-content/70`),t(Q,r(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=o(`h3`,l);t(l,de),t(de,r(`Indicator`));let fe=i(`rue:component:anchor`);t(l,fe),n(()=>{let e=d(re,{rows:ie});p(()=>u(e,l,fe))});let $=o(`h3`,l);t(l,$),e($,`mt-8`),t($,r(`Indicator.Item`));let pe=i(`rue:component:anchor`);return t(l,pe),n(()=>{let e=d(re,{rows:ae});p(()=>u(e,l,pe))}),c})}),f,m),f})};export{F as default};
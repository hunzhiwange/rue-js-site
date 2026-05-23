import{$ as e,Et as t,G as n,H as r,K as i,W as a,_t as o,d as s,kt as c,l,q as u,t as d,tt as f,xt as p}from"./vapor-runtime-EUvELKQT.js";import{a as m,n as h}from"./vapor-helpers-vapor-C_FztvJU.js";import{n as g,t as _}from"./src-BI4ToZNE.js";import{n as v}from"./SidebarPlaygroundDesign-BhpZ4x80.js";import{t as y}from"./Code-BdVklNCb.js";import{t as b}from"./tabs-Brdd3EMz.js";import{t as x}from"./badge-IDvkfy7h.js";import{t as S}from"./status-BPxrmZqA.js";import{t as C}from"./input-Bzhj1mgb.js";var w={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},T=(e,t)=>t?`${e} ${t}`:e,ee=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),E=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),D=(e,t,n=!1)=>`calc(${e} ${(n?!E(t):E(t))?`-`:`+`} ${ee(t)})`,te=e=>e?w[e]:{},O=(e,t,n,r)=>{if(!e)return;let i={"--indicator-s":void 0,"--indicator-e":void 0,"--indicator-t":void 0,"--indicator-b":void 0};if(r){let[e,a]=r;t===`start`?(i[`--indicator-s`]=D(`0px`,e),i[`--indicator-e`]=`auto`):t===`center`?(i[`--indicator-s`]=D(`50%`,e),i[`--indicator-e`]=D(`50%`,e,!0)):t===`end`&&(i[`--indicator-s`]=`auto`,i[`--indicator-e`]=D(`0px`,e,!0)),n===`top`?(i[`--indicator-t`]=D(`0px`,a),i[`--indicator-b`]=`auto`):n===`middle`?(i[`--indicator-t`]=D(`50%`,a),i[`--indicator-b`]=D(`50%`,a,!0)):n===`bottom`&&(i[`--indicator-t`]=`auto`,i[`--indicator-b`]=D(`0px`,a,!0))}Object.entries(i).forEach(([t,n])=>{if(n===void 0){e.style.removeProperty(t);return}e.style.setProperty(t,n)})},k=({as:e=`div`,className:t,style:n,item:r,itemProps:i,items:a,children:o,...s})=>{let c=e,l=Array.isArray(a)&&a.length>0?a.map((e,t)=>_(A,{...e,children:e.children},e.key??t)):r==null?[]:[_(A,{...i,children:r},`__indicator_item__`)];return g(c,{...s,className:T(`indicator`,t),style:n,children:[l,o]})},A=({as:e=`span`,placement:t,horizontal:n,vertical:r,offset:i,className:a,style:o,children:s,...c})=>{let l=e,u=te(t),d=n??u.horizontal,f=r??u.vertical,p=c.ref;`ref`in c&&delete c.ref;let m=`indicator-item`;return d&&(m+=` indicator-${d}`),f&&(m+=` indicator-${f}`),a&&(m+=` ${a}`),_(l,{...c,ref:e=>{typeof p==`function`?p(e):p&&typeof p==`object`&&(p.current=e??void 0),O(e,d,f,i)},className:m,style:o,children:s})},j=Object.assign(k,{Item:A}),M=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,N=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,P=e=>s(t=>{let o=i(`div`,t);f(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=i(`div`,o);r(o,m),f(m,`flex flex-wrap items-start justify-between gap-3`);let h=i(`div`,m);r(m,h);let g=i(`h2`,h);r(h,g),f(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,u(`# `));let _=a(`rue:slot:anchor`);r(g,_),c(()=>{let t=e.title;p(()=>l(t,g,_))});let v=a(`rue:slot:anchor`);r(h,v),c(()=>{let t=e.summary?s(()=>{let t=n(),o=i(`p`,t);r(t,o),f(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return r(o,s),c(()=>{let t=e.summary;p(()=>l(t,o,s))}),t}):``;p(()=>l(t,h,v))});let x=a(`rue:component:anchor`);r(o,x),c(()=>{let t=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>l(t,o,x))});let S=a(`rue:slot:anchor`);return r(o,S),c(()=>{let t=e.tab.value===`preview`?e.preview():s(()=>{let t=n(),i=a(`rue:component:anchor`);return r(t,i),c(()=>{let n=d(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>l(n,t,i))}),t});p(()=>l(t,o,S))}),o}),ne=t=>s(o=>{let d=i(`div`,o);f(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,d);r(d,m),f(m,`table table-zebra`);let g=i(`thead`,m);r(m,g);let _=i(`tr`,g);r(g,_);let v=i(`th`,_);r(_,v),r(v,u(`属性`));let y=i(`th`,_);r(_,y),r(y,u(`说明`));let b=i(`th`,_);r(_,b),r(b,u(`类型`));let x=i(`th`,_);r(_,x),r(x,u(`默认值`));let S=i(`tbody`,m);r(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return c(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,o,u,d,f)=>{l(s(()=>{let o=n(),s=i(`tr`,o);r(o,s),c(()=>{e(s,`key`,String(t.prop))});let u=i(`td`,s);r(s,u);let d=i(`code`,u);r(u,d);let f=a(`rue:slot:anchor`);r(d,f),c(()=>{let e=t.prop;p(()=>l(e,d,f))});let m=i(`td`,s);r(s,m);let h=a(`rue:slot:anchor`);r(m,h),c(()=>{let e=t.description;p(()=>l(e,m,h))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=a(`rue:slot:anchor`);r(_,v),c(()=>{let e=t.type;p(()=>l(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=a(`rue:slot:anchor`);return r(b,x),c(()=>{let e=t.defaultValue;p(()=>l(e,b,x))}),o}),o,u)}})}),d}),re=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],ie=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],F=()=>{let{tabStatus:e,tabBadge:h,tabButton:y,tabInput:b,tabCard:w,tabCenter:T,tabAvatar:ee,tabTab:E,tabPlacement:D,tabShortcut:te,tabMultiple:O}=m(`useSetup:0:0`,()=>t(()=>({tabStatus:m(`ref:1:0`,()=>o(`preview`)),tabBadge:m(`ref:1:1`,()=>o(`preview`)),tabButton:m(`ref:1:2`,()=>o(`preview`)),tabInput:m(`ref:1:3`,()=>o(`preview`)),tabCard:m(`ref:1:4`,()=>o(`preview`)),tabCenter:m(`ref:1:5`,()=>o(`preview`)),tabAvatar:m(`ref:1:6`,()=>o(`preview`)),tabTab:m(`ref:1:7`,()=>o(`preview`)),tabPlacement:m(`ref:1:8`,()=>o(`preview`)),tabShortcut:m(`ref:1:9`,()=>o(`preview`)),tabMultiple:m(`ref:1:10`,()=>o(`preview`))})));return s(t=>{let o=n(),m=a(`rue:component:anchor`);return r(o,m),l(d(v,{children:s(()=>{let t=n(),o=i(`div`,t);r(t,o),f(o,`max-w-none prose prose-sm md:prose-base`);let s=i(`h1`,o);r(o,s),r(s,u(`Indicator 指示器`));let m=i(`p`,o);r(o,m),f(m,`text-sm mt-3 mb-3`),r(m,u(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let v=i(`code`,m);r(m,v),r(v,u(`placement`)),r(m,u(`、`));let k=i(`code`,m);r(m,k),r(k,u(`offset`)),r(m,u(`，以及`));let A=i(`code`,m);r(m,A),r(A,u(`item / items`)),r(m,u(`这组三件套，方便快速搭角标而不必每次都手写一个`));let F=i(`code`,m);r(m,F),r(F,u(`Indicator.Item`)),r(m,u(`。`));let I=i(`div`,o);r(o,I),f(I,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let L=i(`div`,I);r(I,L),f(L,`rounded-box bg-base-200/70 p-4`);let R=i(`div`,L);r(L,R),f(R,`text-sm font-medium`),r(R,u(`兼容旧用法`));let z=i(`p`,L);r(L,z),f(z,`m-0 mt-2 text-sm text-base-content/70`),r(z,u(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let B=i(`div`,I);r(I,B),f(B,`rounded-box bg-base-200/70 p-4`);let V=i(`div`,B);r(B,V),f(V,`text-sm font-medium`),r(V,u(`新增快捷模式`));let H=i(`p`,B);r(B,H),f(H,`m-0 mt-2 text-sm text-base-content/70`),r(H,u(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let U=i(`div`,I);r(I,U),f(U,`rounded-box bg-base-200/70 p-4`);let W=i(`div`,U);r(U,W),f(W,`text-sm font-medium`),r(W,u(`定位更顺手`));let G=i(`p`,U);r(U,G),f(G,`m-0 mt-2 text-sm text-base-content/70`),r(G,u(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let K=a(`rue:component:anchor`);r(o,K),c(()=>{let t=d(P,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:e,preview:()=>g(j,{children:[_(j.Item,{children:_(S,{status:`success`})}),_(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});p(()=>l(t,o,K))});let q=a(`rue:component:anchor`);r(o,q),c(()=>{let e=d(P,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:h,preview:()=>g(j,{children:[_(j.Item,{children:_(x,{variant:`primary`,children:`New`})}),_(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});p(()=>l(e,o,q))});let J=a(`rue:component:anchor`);r(o,J),c(()=>{let e=d(P,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:y,preview:()=>_(j,{item:_(x,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:_(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});p(()=>l(e,o,J))});let Y=a(`rue:component:anchor`);r(o,Y),c(()=>{let e=d(P,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:b,preview:()=>g(j,{children:[_(j.Item,{children:_(x,{children:`Required`})}),_(C,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});p(()=>l(e,o,Y))});let X=a(`rue:component:anchor`);r(o,X),c(()=>{let e=d(P,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:w,preview:()=>g(j,{className:`mx-10 my-6`,children:[_(j.Item,{vertical:`bottom`,children:_(`button`,{className:`btn btn-primary`,children:`Apply`})}),_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body`,children:[_(`h2`,{className:`card-title`,children:`Job Title`}),_(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});p(()=>l(e,o,X))});let ae=a(`rue:component:anchor`);r(o,ae),c(()=>{let e=d(P,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:T,preview:()=>g(j,{className:`max-w-xs`,children:[_(j.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),_(`img`,{className:`rounded`,src:M,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${M}" alt="Indicator centered message" />
</Indicator>`});p(()=>l(e,o,ae))});let oe=a(`rue:component:anchor`);r(o,oe),c(()=>{let e=d(P,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:ee,preview:()=>g(j,{className:`avatar`,children:[_(j.Item,{className:`badge badge-secondary`,children:`Justice`}),_(`div`,{className:`w-20 rounded-lg`,children:_(`img`,{src:N,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${N}" alt="Avatar with indicator" />
  </div>
</Indicator>`});p(()=>l(e,o,oe))});let se=a(`rue:component:anchor`);r(o,se),c(()=>{let e=d(P,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:E,preview:()=>g(`div`,{className:`tabs tabs-lift`,children:[_(`button`,{className:`tab`,children:`Messages`}),g(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,_(`span`,{className:`indicator-item badge`,children:`8`})]}),_(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});p(()=>l(e,o,se))});let ce=a(`rue:component:anchor`);r(o,ce),c(()=>{let e=d(P,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:D,preview:()=>g(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[_(j,{item:_(x,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),_(j,{item:_(x,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),_(j,{item:_(x,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});p(()=>l(e,o,ce))});let le=a(`rue:component:anchor`);r(o,le),c(()=>{let e=d(P,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:te,preview:()=>_(j,{className:`w-full max-w-sm`,item:_(x,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-3`,children:[g(`div`,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),_(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});p(()=>l(e,o,le))});let ue=a(`rue:component:anchor`);r(o,ue),c(()=>{let e=d(P,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:O,preview:()=>_(j,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:_(S,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:_(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-2`,children:[_(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});p(()=>l(e,o,ue))});let Z=i(`h2`,o);r(o,Z),f(Z,`mt-10`),r(Z,u(`API`));let Q=i(`p`,o);r(o,Q),f(Q,`text-sm text-base-content/70`),r(Q,u(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=i(`h3`,o);r(o,de),r(de,u(`Indicator`));let fe=a(`rue:component:anchor`);r(o,fe),c(()=>{let e=d(ne,{rows:re});p(()=>l(e,o,fe))});let $=i(`h3`,o);r(o,$),f($,`mt-8`),r($,u(`Indicator.Item`));let pe=a(`rue:component:anchor`);return r(o,pe),c(()=>{let e=d(ne,{rows:ie});p(()=>l(e,o,pe))}),t})}),o,m),o})};export{F as default};
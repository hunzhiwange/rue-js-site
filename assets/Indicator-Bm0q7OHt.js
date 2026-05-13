import{F as e,G as t,I as n,L as r,M as i,P as a,U as o,_t as s,bt as c,c as l,lt as u,pt as d,t as f,u as p}from"./vapor-runtime-D3a-68js.js";import{a as m,n as h}from"./vapor-helpers-vapor-DGjYaAZX.js";import{n as g,t as _}from"./src-BfQKH6_d.js";import{n as v}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as y}from"./Code-2C2psoH3.js";import{t as b}from"./tabs-BgQmsOey.js";import{t as x}from"./badge-60HGICjs.js";import{t as S}from"./status-BBBMnEaD.js";import{t as C}from"./input-D_T0Xhpz.js";var w={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},ee=(e,t)=>t?`${e} ${t}`:e,te=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),T=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),E=(e,t,n=!1)=>`calc(${e} ${(n?!T(t):T(t))?`-`:`+`} ${te(t)})`,D=e=>e?w[e]:{},O=(e,t,n,r)=>{if(!e)return;let i={"--indicator-s":void 0,"--indicator-e":void 0,"--indicator-t":void 0,"--indicator-b":void 0};if(r){let[e,a]=r;t===`start`?(i[`--indicator-s`]=E(`0px`,e),i[`--indicator-e`]=`auto`):t===`center`?(i[`--indicator-s`]=E(`50%`,e),i[`--indicator-e`]=E(`50%`,e,!0)):t===`end`&&(i[`--indicator-s`]=`auto`,i[`--indicator-e`]=E(`0px`,e,!0)),n===`top`?(i[`--indicator-t`]=E(`0px`,a),i[`--indicator-b`]=`auto`):n===`middle`?(i[`--indicator-t`]=E(`50%`,a),i[`--indicator-b`]=E(`50%`,a,!0)):n===`bottom`&&(i[`--indicator-t`]=`auto`,i[`--indicator-b`]=E(`0px`,a,!0))}Object.entries(i).forEach(([t,n])=>{if(n===void 0){e.style.removeProperty(t);return}e.style.setProperty(t,n)})},k=({as:e=`div`,className:t,style:n,item:r,itemProps:i,items:a,children:o,...s})=>{let c=e,l=Array.isArray(a)&&a.length>0?a.map((e,t)=>_(A,{...e,children:e.children},e.key??t)):r==null?[]:[_(A,{...i,children:r},`__indicator_item__`)];return g(c,{...s,className:ee(`indicator`,t),style:n,children:[l,o]})},A=({as:e=`span`,placement:t,horizontal:n,vertical:r,offset:i,className:a,style:o,children:s,...c})=>{let l=e,u=D(t),d=n??u.horizontal,f=r??u.vertical,p=c.ref;`ref`in c&&delete c.ref;let m=`indicator-item`;return d&&(m+=` indicator-${d}`),f&&(m+=` indicator-${f}`),a&&(m+=` ${a}`),_(l,{...c,ref:e=>{typeof p==`function`?p(e):p&&typeof p==`object`&&(p.current=e??void 0),O(e,d,f,i)},className:m,style:o,children:s})},j=Object.assign(k,{Item:A}),ne=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,re=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,M=o=>p(()=>{let s=n(`div`);t(s,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=n(`div`);i(s,u),t(u,`flex flex-wrap items-start justify-between gap-3`);let m=n(`div`);i(u,m);let h=n(`h2`);i(m,h),t(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(h,r(`# `));let g=a(`rue:slot:anchor`);i(h,g),c(()=>{let e=o.title;d(()=>l(e,h,g))});let _=a(`rue:slot:anchor`);i(m,_),c(()=>{let r=o.summary?p(()=>{let r=e(),s=n(`p`);i(r,s),t(s,`m-0 text-sm opacity-70`);let u=a(`rue:slot:anchor`);return i(s,u),c(()=>{let e=o.summary;d(()=>l(e,s,u))}),r}):``;d(()=>l(r,m,_))});let v=a(`rue:component:anchor`);i(s,v),c(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});d(()=>l(e,s,v))});let x=a(`rue:slot:anchor`);return i(s,x),c(()=>{let t=o.tab.value===`preview`?o.preview():p(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),c(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:o.code});d(()=>l(e,t,n))}),t});d(()=>l(t,s,x))}),s}),N=s=>p(()=>{let u=n(`div`);t(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=n(`table`);i(u,f),t(f,`table table-zebra`);let m=n(`thead`);i(f,m);let g=n(`tr`);i(m,g);let _=n(`th`);i(g,_),i(_,r(`属性`));let v=n(`th`);i(g,v),i(v,r(`说明`));let y=n(`th`);i(g,y),i(y,r(`类型`));let b=n(`th`);i(g,b),i(b,r(`默认值`));let x=n(`tbody`);i(f,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return c(()=>{w=h({items:s.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,s,u,f)=>{l(p(()=>{let r=e(),s=n(`tr`);i(r,s),c(()=>{o(s,`key`,String(t.prop))});let u=n(`td`);i(s,u);let f=n(`code`);i(u,f);let p=a(`rue:slot:anchor`);i(f,p),c(()=>{let e=t.prop;d(()=>l(e,f,p))});let m=n(`td`);i(s,m);let h=a(`rue:slot:anchor`);i(m,h),c(()=>{let e=t.description;d(()=>l(e,m,h))});let g=n(`td`);i(s,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),c(()=>{let e=t.type;d(()=>l(e,_,v))});let y=n(`td`);i(s,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),c(()=>{let e=t.defaultValue;d(()=>l(e,b,x))}),r}),r,s)}})}),u}),ie=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],ae=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],P=()=>{let{tabStatus:h,tabBadge:y,tabButton:b,tabInput:w,tabCard:ee,tabCenter:te,tabAvatar:T,tabTab:E,tabPlacement:D,tabShortcut:O,tabMultiple:k}=m(`useSetup:0:0`,()=>s(()=>({tabStatus:m(`ref:1:0`,()=>u(`preview`)),tabBadge:m(`ref:1:1`,()=>u(`preview`)),tabButton:m(`ref:1:2`,()=>u(`preview`)),tabInput:m(`ref:1:3`,()=>u(`preview`)),tabCard:m(`ref:1:4`,()=>u(`preview`)),tabCenter:m(`ref:1:5`,()=>u(`preview`)),tabAvatar:m(`ref:1:6`,()=>u(`preview`)),tabTab:m(`ref:1:7`,()=>u(`preview`)),tabPlacement:m(`ref:1:8`,()=>u(`preview`)),tabShortcut:m(`ref:1:9`,()=>u(`preview`)),tabMultiple:m(`ref:1:10`,()=>u(`preview`))})));return p(()=>{let s=e(),u=a(`rue:component:anchor`);return i(s,u),l(f(v,{children:p(()=>{let s=e(),u=n(`div`);i(s,u),t(u,`max-w-none prose prose-sm md:prose-base`);let p=n(`h1`);i(u,p),i(p,r(`Indicator 指示器`));let m=n(`p`);i(u,m),t(m,`text-sm mt-3 mb-3`),i(m,r(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let v=n(`code`);i(m,v),i(v,r(`placement`)),i(m,r(`、`));let A=n(`code`);i(m,A),i(A,r(`offset`)),i(m,r(`，以及`));let P=n(`code`);i(m,P),i(P,r(`item / items`)),i(m,r(`这组三件套，方便快速搭角标而不必每次都手写一个`));let F=n(`code`);i(m,F),i(F,r(`Indicator.Item`)),i(m,r(`。`));let I=n(`div`);i(u,I),t(I,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let L=n(`div`);i(I,L),t(L,`rounded-box bg-base-200/70 p-4`);let R=n(`div`);i(L,R),t(R,`text-sm font-medium`),i(R,r(`兼容旧用法`));let z=n(`p`);i(L,z),t(z,`m-0 mt-2 text-sm text-base-content/70`),i(z,r(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let B=n(`div`);i(I,B),t(B,`rounded-box bg-base-200/70 p-4`);let V=n(`div`);i(B,V),t(V,`text-sm font-medium`),i(V,r(`新增快捷模式`));let H=n(`p`);i(B,H),t(H,`m-0 mt-2 text-sm text-base-content/70`),i(H,r(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let U=n(`div`);i(I,U),t(U,`rounded-box bg-base-200/70 p-4`);let W=n(`div`);i(U,W),t(W,`text-sm font-medium`),i(W,r(`定位更顺手`));let G=n(`p`);i(U,G),t(G,`m-0 mt-2 text-sm text-base-content/70`),i(G,r(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let K=n(`div`);i(u,K),t(K,`mt-3 text-sm`);let q=n(`a`);i(K,q),o(q,`href`,`https://daisyui.com/components/indicator/`),o(q,`target`,`_blank`),i(q,r(`查看 Indicator 静态样式`));let J=a(`rue:component:anchor`);i(u,J),c(()=>{let e=f(M,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:h,preview:()=>g(j,{children:[_(j.Item,{children:_(S,{status:`success`})}),_(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});d(()=>l(e,u,J))});let Y=a(`rue:component:anchor`);i(u,Y),c(()=>{let e=f(M,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:y,preview:()=>g(j,{children:[_(j.Item,{children:_(x,{variant:`primary`,children:`New`})}),_(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});d(()=>l(e,u,Y))});let oe=a(`rue:component:anchor`);i(u,oe),c(()=>{let e=f(M,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:b,preview:()=>_(j,{item:_(x,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:_(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});d(()=>l(e,u,oe))});let se=a(`rue:component:anchor`);i(u,se),c(()=>{let e=f(M,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:w,preview:()=>g(j,{children:[_(j.Item,{children:_(x,{children:`Required`})}),_(C,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});d(()=>l(e,u,se))});let ce=a(`rue:component:anchor`);i(u,ce),c(()=>{let e=f(M,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:ee,preview:()=>g(j,{className:`mx-10 my-6`,children:[_(j.Item,{vertical:`bottom`,children:_(`button`,{className:`btn btn-primary`,children:`Apply`})}),_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body`,children:[_(`h2`,{className:`card-title`,children:`Job Title`}),_(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});d(()=>l(e,u,ce))});let le=a(`rue:component:anchor`);i(u,le),c(()=>{let e=f(M,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:te,preview:()=>g(j,{className:`max-w-xs`,children:[_(j.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),_(`img`,{className:`rounded`,src:ne,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${ne}" alt="Indicator centered message" />
</Indicator>`});d(()=>l(e,u,le))});let ue=a(`rue:component:anchor`);i(u,ue),c(()=>{let e=f(M,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:T,preview:()=>g(j,{className:`avatar`,children:[_(j.Item,{className:`badge badge-secondary`,children:`Justice`}),_(`div`,{className:`w-20 rounded-lg`,children:_(`img`,{src:re,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${re}" alt="Avatar with indicator" />
  </div>
</Indicator>`});d(()=>l(e,u,ue))});let X=a(`rue:component:anchor`);i(u,X),c(()=>{let e=f(M,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:E,preview:()=>g(`div`,{className:`tabs tabs-lift`,children:[_(`button`,{className:`tab`,children:`Messages`}),g(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,_(`span`,{className:`indicator-item badge`,children:`8`})]}),_(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});d(()=>l(e,u,X))});let de=a(`rue:component:anchor`);i(u,de),c(()=>{let e=f(M,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:D,preview:()=>g(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[_(j,{item:_(x,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),_(j,{item:_(x,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),_(j,{item:_(x,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});d(()=>l(e,u,de))});let fe=a(`rue:component:anchor`);i(u,fe),c(()=>{let e=f(M,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:O,preview:()=>_(j,{className:`w-full max-w-sm`,item:_(x,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-3`,children:[g(`div`,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),_(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});d(()=>l(e,u,fe))});let pe=a(`rue:component:anchor`);i(u,pe),c(()=>{let e=f(M,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:k,preview:()=>_(j,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:_(S,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:_(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-2`,children:[_(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});d(()=>l(e,u,pe))});let Z=n(`h2`);i(u,Z),t(Z,`mt-10`),i(Z,r(`API`));let Q=n(`p`);i(u,Q),t(Q,`text-sm text-base-content/70`),i(Q,r(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let me=n(`h3`);i(u,me),i(me,r(`Indicator`));let he=a(`rue:component:anchor`);i(u,he),c(()=>{let e=f(N,{rows:ie});d(()=>l(e,u,he))});let $=n(`h3`);i(u,$),t($,`mt-8`),i($,r(`Indicator.Item`));let ge=a(`rue:component:anchor`);return i(u,ge),c(()=>{let e=f(N,{rows:ae});d(()=>l(e,u,ge))}),s})}),s,u),s})};export{P as default};
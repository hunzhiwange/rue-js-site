import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,l as c,nt as l,o as u,s as d,t as f,tt as p,ut as m,yt as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g,n as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as v,i as y}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as b}from"./Code-D5UqTwV6.js";import{t as x}from"./tabs-DRfs918f.js";import{t as S}from"./badge-DhL0-cBn.js";import{t as C}from"./status-BMUyM95G.js";import{t as w}from"./input-CRYoS0G3.js";import{r as T}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as E}from"./preview-test-gate-DuGL5287.js";var D={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},O=(e,t)=>t?`${e} ${t}`:e,k=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),A=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),j=(e,t,n=!1)=>`calc(${e} ${(n?!A(t):A(t))?`-`:`+`} ${k(t)})`,M=e=>e?D[e]:{},N=(e,t,n)=>{let r=`indicator-item`;return e&&(r+=` indicator-${e}`),t&&(r+=` indicator-${t}`),n&&(r+=` ${n}`),r},P=(e,t,n)=>{if(!n)return;let[r,i]=n,a={};return e===`start`?(a[`--indicator-s`]=j(`0px`,r),a[`--indicator-e`]=`auto`):e===`center`?(a[`--indicator-s`]=j(`50%`,r),a[`--indicator-e`]=j(`50%`,r,!0)):e===`end`&&(a[`--indicator-s`]=`auto`,a[`--indicator-e`]=j(`0px`,r,!0)),t===`top`?(a[`--indicator-t`]=j(`0px`,i),a[`--indicator-b`]=`auto`):t===`middle`?(a[`--indicator-t`]=j(`50%`,i),a[`--indicator-b`]=j(`50%`,i,!0)):t===`bottom`&&(a[`--indicator-t`]=`auto`,a[`--indicator-b`]=j(`0px`,i,!0)),Object.keys(a).length>0?a:void 0},F=(e,t)=>{if(!t)return e;if(typeof e==`string`){let n=Object.entries(t).map(([e,t])=>`${e}: ${t}`).join(`; `);return e.trim()?`${e}; ${n}`:n}return{...e,...t}},I=n=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:p,__rue_rest_omit_2:m,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,Component:C,hasItems:w}=g(`useSetup:0:0`,()=>i(()=>{let{as:e,className:t,style:r,item:i,itemProps:a,items:o,children:s,...c}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:n.as===void 0?`div`:n.as,hasItems:g(`computed:1:0`,()=>h(()=>Array.isArray(n.items)&&n.items.length>0))}}));return c(i=>{let o=s(),p=e(`rue:component:anchor`);a(o,p);let m=c(()=>{let i=s(),o=e(`rue:slot:anchor`);a(i,o),t(()=>{let l=w.get()?c(()=>{let r=s(),i=e(`rue:list:start`),o=e(`rue:list:end`);a(r,i),a(r,o);let c=new Map;return t(()=>{c=_({items:n.items||[],getKey:(e,t)=>e.key??t,elements:c,parent:i.parentNode,before:o,start:i,renderItem:(e,t,n,r,i)=>{d(f(L,{key:e.key??i,...e,children:e.children}),t,n,r)}})}),r}):n.item==null?``:c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=f(L,{key:`__indicator_item__`,...n.itemProps,children:n.item});r(()=>u(e,i,o))}),i});r(()=>u(l,i,o))}),a(i,l(` `));let p=e(`rue:children:anchor`);return a(i,p),t(()=>{let e=n.children;r(()=>u(e,i,p))}),i});return t(()=>{let e=f(C,{...S,className:O(`indicator`,n.className),style:n.style,children:m});r(()=>u(e,o,p))}),o})},L=n=>{let{__rue_rest_omit_0:o,__rue_rest_omit_1:l,__rue_rest_omit_2:d,__rue_rest_omit_3:p,__rue_rest_omit_4:m,__rue_rest_omit_5:_,__rue_rest_omit_6:v,__rue_rest_omit_7:y,rest:b,Component:x,placementPreset:S,resolvedHorizontal:C,resolvedVertical:w,offsetStyle:T}=g(`useSetup:0:0:dup1`,()=>i(()=>{let{as:e,placement:t,horizontal:r,vertical:i,offset:a,className:o,style:s,children:c,...l}=n,u=n.as===void 0?`span`:n.as,d=g(`computed:1:1`,()=>h(()=>M(n.placement))),f=d,p=g(`computed:1:2`,()=>h(()=>n.horizontal??f.get().horizontal)),m=p,_=g(`computed:1:3`,()=>h(()=>n.vertical??f.get().vertical)),v=_;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:u,placementPreset:d,resolvedHorizontal:p,resolvedVertical:_,offsetStyle:g(`computed:1:4`,()=>h(()=>P(m.get(),v.get(),n.offset)))}}));return c(i=>{let o=s(),c=e(`rue:component:anchor`);return a(o,c),t(()=>{let e=f(x,{...b,className:N(C.get(),w.get(),n.className),style:F(n.style,T.get()),children:n.children});r(()=>u(e,o,c))}),o})},R=Object.assign(I,{Item:L}),z=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,B=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,V=n=>c(i=>{let o=p(`div`,i);m(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=p(`div`,o);a(o,d),m(d,`flex flex-wrap items-start justify-between gap-3`);let h=p(`div`,d);a(d,h);let g=p(`h2`,h);a(h,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,l(`# `));let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=n.title;r(()=>u(e,g,_))});let v=e(`rue:slot:anchor`);a(h,v),t(()=>{let i=n.summary?c(()=>{let i=s(),o=p(`p`,i);a(i,o),m(o,`m-0 text-sm opacity-70`);let c=e(`rue:slot:anchor`);return a(o,c),t(()=>{let e=n.summary;r(()=>u(e,o,c))}),i}):``;r(()=>u(i,h,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>u(e,o,y))});let S=e(`rue:slot:anchor`);return a(o,S),t(()=>{let i=n.tab.value===`preview`?E(n.title,n.preview):c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=f(b,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>u(e,i,o))}),i});r(()=>u(i,o,S))}),o}),H=n=>c(i=>{let d=p(`div`,i);m(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=p(`table`,d);a(d,f),m(f,`table table-zebra`);let h=p(`thead`,f);a(f,h);let g=p(`tr`,h);a(h,g);let v=p(`th`,g);a(g,v),a(v,l(`属性`));let y=p(`th`,g);a(g,y),a(y,l(`说明`));let b=p(`th`,g);a(g,b),a(b,l(`类型`));let x=p(`th`,g);a(g,x),a(x,l(`默认值`));let S=p(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,l,d,f)=>{u(c(()=>{let i=s(),c=p(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=p(`td`,c);a(c,l);let d=p(`code`,l);a(l,d);let f=e(`rue:slot:anchor`);a(d,f),t(()=>{let e=n.prop;r(()=>u(e,d,f))});let m=p(`td`,c);a(c,m);let h=e(`rue:slot:anchor`);a(m,h),t(()=>{let e=n.description;r(()=>u(e,m,h))});let g=p(`td`,c);a(c,g);let _=p(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>u(e,_,v))});let y=p(`td`,c);a(c,y);let b=p(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>u(e,b,x))}),i}),i,l)}})}),d}),ee=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],te=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],U=()=>{let{tabStatus:o,tabBadge:d,tabButton:h,tabInput:_,tabCard:b,tabCenter:x,tabAvatar:E,tabTab:D,tabPlacement:O,tabShortcut:k,tabMultiple:A}=g(`useSetup:0:0`,()=>i(()=>({tabStatus:g(`ref:1:0`,()=>n(`preview`)),tabBadge:g(`ref:1:1`,()=>n(`preview`)),tabButton:g(`ref:1:2`,()=>n(`preview`)),tabInput:g(`ref:1:3`,()=>n(`preview`)),tabCard:g(`ref:1:4`,()=>n(`preview`)),tabCenter:g(`ref:1:5`,()=>n(`preview`)),tabAvatar:g(`ref:1:6`,()=>n(`preview`)),tabTab:g(`ref:1:7`,()=>n(`preview`)),tabPlacement:g(`ref:1:8`,()=>n(`preview`)),tabShortcut:g(`ref:1:9`,()=>n(`preview`)),tabMultiple:g(`ref:1:10`,()=>n(`preview`))})));return c(n=>{let i=s(),g=e(`rue:component:anchor`);return a(i,g),u(f(T,{children:c(()=>{let n=s(),i=p(`div`,n);a(n,i),m(i,`max-w-none prose prose-sm md:prose-base`);let c=p(`h1`,i);a(i,c),a(c,l(`Indicator 指示器`));let g=p(`p`,i);a(i,g),m(g,`text-sm mt-3 mb-3`),a(g,l(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let T=p(`code`,g);a(g,T),a(T,l(`placement`)),a(g,l(`、`));let j=p(`code`,g);a(g,j),a(j,l(`offset`)),a(g,l(`，以及`));let M=p(`code`,g);a(g,M),a(M,l(`item / items`)),a(g,l(`这组三件套，方便快速搭角标而不必每次都手写一个`));let N=p(`code`,g);a(g,N),a(N,l(`Indicator.Item`)),a(g,l(`。`));let P=p(`div`,i);a(i,P),m(P,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let F=p(`div`,P);a(P,F),m(F,`rounded-box bg-base-200/70 p-4`);let I=p(`div`,F);a(F,I),m(I,`text-sm font-medium`),a(I,l(`兼容旧用法`));let L=p(`p`,F);a(F,L),m(L,`m-0 mt-2 text-sm text-base-content/70`),a(L,l(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let U=p(`div`,P);a(P,U),m(U,`rounded-box bg-base-200/70 p-4`);let W=p(`div`,U);a(U,W),m(W,`text-sm font-medium`),a(W,l(`新增快捷模式`));let G=p(`p`,U);a(U,G),m(G,`m-0 mt-2 text-sm text-base-content/70`),a(G,l(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let K=p(`div`,P);a(P,K),m(K,`rounded-box bg-base-200/70 p-4`);let q=p(`div`,K);a(K,q),m(q,`text-sm font-medium`),a(q,l(`定位更顺手`));let J=p(`p`,K);a(K,J),m(J,`m-0 mt-2 text-sm text-base-content/70`),a(J,l(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let Y=e(`rue:component:anchor`);a(i,Y),t(()=>{let e=f(V,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:o,preview:()=>v(R,{children:[y(R.Item,{children:y(C,{status:`success`})}),y(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});r(()=>u(e,i,Y))});let X=e(`rue:component:anchor`);a(i,X),t(()=>{let e=f(V,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:d,preview:()=>v(R,{children:[y(R.Item,{children:y(S,{variant:`primary`,children:`New`})}),y(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});r(()=>u(e,i,X))});let ne=e(`rue:component:anchor`);a(i,ne),t(()=>{let e=f(V,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:h,preview:()=>y(R,{item:y(S,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:y(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});r(()=>u(e,i,ne))});let re=e(`rue:component:anchor`);a(i,re),t(()=>{let e=f(V,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:_,preview:()=>v(R,{children:[y(R.Item,{children:y(S,{children:`Required`})}),y(w,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});r(()=>u(e,i,re))});let ie=e(`rue:component:anchor`);a(i,ie),t(()=>{let e=f(V,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:b,preview:()=>v(R,{className:`mx-10 my-6`,children:[y(R.Item,{vertical:`bottom`,children:y(`button`,{className:`btn btn-primary`,children:`Apply`})}),y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Job Title`}),y(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});r(()=>u(e,i,ie))});let ae=e(`rue:component:anchor`);a(i,ae),t(()=>{let e=f(V,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:x,preview:()=>v(R,{className:`max-w-xs`,children:[y(R.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),y(`img`,{className:`rounded`,src:z,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${z}" alt="Indicator centered message" />
</Indicator>`});r(()=>u(e,i,ae))});let oe=e(`rue:component:anchor`);a(i,oe),t(()=>{let e=f(V,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>v(R,{className:`avatar`,children:[y(R.Item,{className:`badge badge-secondary`,children:`Justice`}),y(`div`,{className:`w-20 rounded-lg`,children:y(`img`,{src:B,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${B}" alt="Avatar with indicator" />
  </div>
</Indicator>`});r(()=>u(e,i,oe))});let se=e(`rue:component:anchor`);a(i,se),t(()=>{let e=f(V,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:D,preview:()=>v(`div`,{className:`tabs tabs-lift`,children:[y(`button`,{className:`tab`,children:`Messages`}),v(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,y(`span`,{className:`indicator-item badge`,children:`8`})]}),y(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});r(()=>u(e,i,se))});let ce=e(`rue:component:anchor`);a(i,ce),t(()=>{let e=f(V,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:O,preview:()=>v(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(R,{item:y(S,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),y(R,{item:y(S,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),y(R,{item:y(S,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});r(()=>u(e,i,ce))});let le=e(`rue:component:anchor`);a(i,le),t(()=>{let e=f(V,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:k,preview:()=>y(R,{className:`w-full max-w-sm`,item:y(S,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-3`,children:[v(`div`,{children:[y(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),y(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),y(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});r(()=>u(e,i,le))});let ue=e(`rue:component:anchor`);a(i,ue),t(()=>{let e=f(V,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:A,preview:()=>y(R,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:y(C,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:y(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-2`,children:[y(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),y(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});r(()=>u(e,i,ue))});let Z=p(`h2`,i);a(i,Z),m(Z,`mt-10`),a(Z,l(`API`));let Q=p(`p`,i);a(i,Q),m(Q,`text-sm text-base-content/70`),a(Q,l(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=p(`h3`,i);a(i,de),a(de,l(`Indicator`));let fe=e(`rue:component:anchor`);a(i,fe),t(()=>{let e=f(H,{rows:ee});r(()=>u(e,i,fe))});let $=p(`h3`,i);a(i,$),m($,`mt-8`),a($,l(`Indicator.Item`));let pe=e(`rue:component:anchor`);return a(i,pe),t(()=>{let e=f(H,{rows:te});r(()=>u(e,i,pe))}),n})}),i,g),i})};export{U as default};
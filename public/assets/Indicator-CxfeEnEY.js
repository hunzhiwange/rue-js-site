import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,s as d,t as f,tn as p,tt as m,wt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g,n as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as v}from"./Code-BoXKy3gJ.js";import{n as y,t as b}from"./src-Dlanwp1X.js";import{t as x}from"./tabs-C7cPs47_.js";import{t as S}from"./badge-B5AIOSH2.js";import{t as C}from"./status-DB8YxeRi.js";import{t as w}from"./input-D7_ql2o3.js";import{r as T}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as E}from"./preview-test-gate-CiW-xKNr.js";var D={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},O=(e,t)=>t?`${e} ${t}`:e,k=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),A=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),j=(e,t,n=!1)=>`calc(${e} ${(n?!A(t):A(t))?`-`:`+`} ${k(t)})`,M=e=>e?D[e]:{},N=(e,t,n)=>{let r=`indicator-item`;return e&&(r+=` indicator-${e}`),t&&(r+=` indicator-${t}`),n&&(r+=` ${n}`),r},P=(e,t,n)=>{if(!n)return;let[r,i]=n,a={};return e===`start`?(a[`--indicator-s`]=j(`0px`,r),a[`--indicator-e`]=`auto`):e===`center`?(a[`--indicator-s`]=j(`50%`,r),a[`--indicator-e`]=j(`50%`,r,!0)):e===`end`&&(a[`--indicator-s`]=`auto`,a[`--indicator-e`]=j(`0px`,r,!0)),t===`top`?(a[`--indicator-t`]=j(`0px`,i),a[`--indicator-b`]=`auto`):t===`middle`?(a[`--indicator-t`]=j(`50%`,i),a[`--indicator-b`]=j(`50%`,i,!0)):t===`bottom`&&(a[`--indicator-t`]=`auto`,a[`--indicator-b`]=j(`0px`,i,!0)),Object.keys(a).length>0?a:void 0},F=(e,t)=>{if(!t)return e;if(typeof e==`string`){let n=Object.entries(t).map(([e,t])=>`${e}: ${t}`).join(`; `);return e.trim()?`${e}; ${n}`:n}return{...e,...t}},I=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:l,__rue_rest_omit_2:u,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,Component:C,hasItems:w}=g(`useSetup:0:0`,()=>c(()=>{let{as:e,className:t,style:r,item:i,itemProps:a,items:o,children:s,...c}=n;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:n.as===void 0?`div`:n.as,hasItems:g(`computed:1:0`,()=>h(()=>Array.isArray(n.items)&&n.items.length>0))}}));return a(r=>{let c=o(),l=m(`rue:component:anchor`);e(c,l);let u=a(()=>{let r=o(),c=m(`rue:slot:anchor`);e(r,c),t(()=>{let i=w.get()?a(()=>{let r=o(),i=m(`rue:list:start`),a=m(`rue:list:end`);e(r,i),e(r,a);let s=new Map;return t(()=>{s=_({items:n.items||[],getKey:(e,t)=>e.key??t,elements:s,parent:i.parentNode,before:a,start:i,renderItem:(e,t,n,r,i)=>{d(f(L,{key:e.key??i,...e,children:e.children}),t,n,r)}})}),r}):n.item==null?``:a(()=>{let r=o(),i=m(`rue:component:anchor`);return e(r,i),t(()=>{let e=f(L,{key:`__indicator_item__`,...n.itemProps,children:n.item});p(()=>s(e,r,i))}),r});p(()=>s(i,r,c))}),e(r,i(` `));let l=m(`rue:children:anchor`);return e(r,l),t(()=>{let e=n.children;p(()=>s(e,r,l))}),r});return t(()=>{let e=f(C,{...S,className:O(`indicator`,n.className),style:n.style,children:u});p(()=>s(e,c,l))}),c})},L=n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:d,__rue_rest_omit_5:_,__rue_rest_omit_6:v,__rue_rest_omit_7:y,rest:b,Component:x,placementPreset:S,resolvedHorizontal:C,resolvedVertical:w,offsetStyle:T}=g(`useSetup:0:0:dup1`,()=>c(()=>{let{as:e,placement:t,horizontal:r,vertical:i,offset:a,className:o,style:s,children:c,...l}=n,u=n.as===void 0?`span`:n.as,d=g(`computed:1:1`,()=>h(()=>M(n.placement))),f=d,p=g(`computed:1:2`,()=>h(()=>n.horizontal??f.get().horizontal)),m=p,_=g(`computed:1:3`,()=>h(()=>n.vertical??f.get().vertical)),v=_;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:u,placementPreset:d,resolvedHorizontal:p,resolvedVertical:_,offsetStyle:g(`computed:1:4`,()=>h(()=>P(m.get(),v.get(),n.offset)))}}));return a(r=>{let i=o(),a=m(`rue:component:anchor`);return e(i,a),t(()=>{let e=f(x,{...b,className:N(C.get(),w.get(),n.className),style:F(n.style,T.get()),children:n.children});p(()=>s(e,i,a))}),i})},R=Object.assign(I,{Item:L}),z=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,B=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,V=n=>a(r=>{let c=u(`div`,r);l(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=u(`div`,c);e(c,d),l(d,`flex flex-wrap items-start justify-between gap-3`);let h=u(`div`,d);e(d,h);let g=u(`h2`,h);e(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(g,i(`# `));let _=m(`rue:slot:anchor`);e(g,_),t(()=>{let e=n.title;p(()=>s(e,g,_))});let y=m(`rue:slot:anchor`);e(h,y),t(()=>{let r=n.summary?a(()=>{let r=o(),i=u(`p`,r);e(r,i),l(i,`m-0 text-sm opacity-70`);let a=m(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;p(()=>s(e,i,a))}),r}):``;p(()=>s(r,h,y))});let b=m(`rue:component:anchor`);e(c,b),t(()=>{let e=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});p(()=>s(e,c,b))});let S=m(`rue:slot:anchor`);return e(c,S),t(()=>{let r=n.tab.value===`preview`?E(n.title,n.preview):a(()=>{let r=o(),i=m(`rue:component:anchor`);return e(r,i),t(()=>{let e=f(v,{className:`mt-2`,lang:`tsx`,code:n.code});p(()=>s(e,r,i))}),r});p(()=>s(r,c,S))}),c}),H=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=u(`table`,d);e(d,f),l(f,`table table-zebra`);let h=u(`thead`,f);e(f,h);let g=u(`tr`,h);e(h,g);let v=u(`th`,g);e(g,v),e(v,i(`属性`));let y=u(`th`,g);e(g,y),e(y,i(`说明`));let b=u(`th`,g);e(g,b),e(b,i(`类型`));let x=u(`th`,g);e(g,x),e(x,i(`默认值`));let S=u(`tbody`,f);e(f,S);let C=m(`rue:list:start`),w=m(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=m(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;p(()=>s(e,l,d))});let f=u(`td`,a);e(a,f);let h=m(`rue:slot:anchor`);e(f,h),t(()=>{let e=n.description;p(()=>s(e,f,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=m(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;p(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=m(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;p(()=>s(e,b,x))}),i}),i,c)}})}),d}),ee=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保持原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],te=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在基础 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],U=()=>{let{tabStatus:r,tabBadge:d,tabButton:h,tabInput:_,tabCard:v,tabCenter:x,tabAvatar:E,tabTab:D,tabPlacement:O,tabShortcut:k,tabMultiple:A}=g(`useSetup:0:0`,()=>c(()=>({tabStatus:g(`ref:1:0`,()=>n(`preview`)),tabBadge:g(`ref:1:1`,()=>n(`preview`)),tabButton:g(`ref:1:2`,()=>n(`preview`)),tabInput:g(`ref:1:3`,()=>n(`preview`)),tabCard:g(`ref:1:4`,()=>n(`preview`)),tabCenter:g(`ref:1:5`,()=>n(`preview`)),tabAvatar:g(`ref:1:6`,()=>n(`preview`)),tabTab:g(`ref:1:7`,()=>n(`preview`)),tabPlacement:g(`ref:1:8`,()=>n(`preview`)),tabShortcut:g(`ref:1:9`,()=>n(`preview`)),tabMultiple:g(`ref:1:10`,()=>n(`preview`))})));return a(n=>{let c=o(),g=m(`rue:component:anchor`);return e(c,g),s(f(T,{children:a(()=>{let n=o(),a=u(`div`,n);e(n,a),l(a,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,a);e(a,c),e(c,i(`Indicator 指示器`));let g=u(`p`,a);e(a,g),l(g,`text-sm mt-3 mb-3`),e(g,i(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。组件展示基础复合写法， 并提供`));let T=u(`code`,g);e(g,T),e(T,i(`placement`)),e(g,i(`、`));let j=u(`code`,g);e(g,j),e(j,i(`offset`)),e(g,i(`，以及`));let M=u(`code`,g);e(g,M),e(M,i(`item / items`)),e(g,i(`这组三件套，方便快速搭角标而不必每次都手写一个`));let N=u(`code`,g);e(g,N),e(N,i(`Indicator.Item`)),e(g,i(`。`));let P=u(`div`,a);e(a,P),l(P,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let F=u(`div`,P);e(P,F),l(F,`rounded-box bg-base-200/70 p-4`);let I=u(`div`,F);e(F,I),l(I,`text-sm font-medium`),e(I,i(`支持基础用法`));let L=u(`p`,F);e(F,L),l(L,`m-0 mt-2 text-sm text-base-content/70`),e(L,i(`horizontal 和 vertical 仍然可直接使用，基础示例 不需要回退。`));let U=u(`div`,P);e(P,U),l(U,`rounded-box bg-base-200/70 p-4`);let W=u(`div`,U);e(U,W),l(W,`text-sm font-medium`),e(W,i(`快捷模式`));let G=u(`p`,U);e(U,G),l(G,`m-0 mt-2 text-sm text-base-content/70`),e(G,i(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let K=u(`div`,P);e(P,K),l(K,`rounded-box bg-base-200/70 p-4`);let q=u(`div`,K);e(K,q),l(q,`text-sm font-medium`),e(q,i(`定位更顺手`));let J=u(`p`,K);e(K,J),l(J,`m-0 mt-2 text-sm text-base-content/70`),e(J,i(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let Y=m(`rue:component:anchor`);e(a,Y),t(()=>{let e=f(V,{title:`Status indicator`,summary:`最轻量的状态提醒，展示基础复合写法。`,tab:r,preview:()=>y(R,{children:[b(R.Item,{children:b(C,{status:`success`})}),b(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});p(()=>s(e,a,Y))});let X=m(`rue:component:anchor`);e(a,X),t(()=>{let e=f(V,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:d,preview:()=>y(R,{children:[b(R.Item,{children:b(S,{variant:`primary`,children:`New`})}),b(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});p(()=>s(e,a,X))});let ne=m(`rue:component:anchor`);e(a,ne),t(()=>{let e=f(V,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:h,preview:()=>b(R,{item:b(S,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:b(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});p(()=>s(e,a,ne))});let re=m(`rue:component:anchor`);e(a,re),t(()=>{let e=f(V,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:_,preview:()=>y(R,{children:[b(R.Item,{children:b(S,{children:`Required`})}),b(w,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});p(()=>s(e,a,re))});let ie=m(`rue:component:anchor`);e(a,ie),t(()=>{let e=f(V,{title:`A button as an indicator for a card`,summary:`支持基础的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:v,preview:()=>y(R,{className:`mx-10 my-6`,children:[b(R.Item,{vertical:`bottom`,children:b(`button`,{className:`btn btn-primary`,children:`Apply`})}),b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title`,children:`Job Title`}),b(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});p(()=>s(e,a,ie))});let ae=m(`rue:component:anchor`);e(a,ae),t(()=>{let e=f(V,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:x,preview:()=>y(R,{className:`max-w-xs`,children:[b(R.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),b(`img`,{className:`rounded`,src:z,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${z}" alt="Indicator centered message" />
</Indicator>`});p(()=>s(e,a,ae))});let oe=m(`rue:component:anchor`);e(a,oe),t(()=>{let e=f(V,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>y(R,{className:`avatar`,children:[b(R.Item,{className:`badge badge-secondary`,children:`Justice`}),b(`div`,{className:`w-20 rounded-lg`,children:b(`img`,{src:B,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${B}" alt="Avatar with indicator" />
  </div>
</Indicator>`});p(()=>s(e,a,oe))});let se=m(`rue:component:anchor`);e(a,se),t(()=>{let e=f(V,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:D,preview:()=>y(`div`,{className:`tabs tabs-lift`,children:[b(`button`,{className:`tab`,children:`Messages`}),y(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,b(`span`,{className:`indicator-item badge`,children:`8`})]}),b(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});p(()=>s(e,a,se))});let ce=m(`rue:component:anchor`);e(a,ce),t(()=>{let e=f(V,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:O,preview:()=>y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(R,{item:b(S,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:b(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),b(R,{item:b(S,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:b(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),b(R,{item:b(S,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:b(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});p(()=>s(e,a,ce))});let le=m(`rue:component:anchor`);e(a,le),t(()=>{let e=f(V,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:k,preview:()=>b(R,{className:`w-full max-w-sm`,item:b(S,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),b(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});p(()=>s(e,a,le))});let ue=m(`rue:component:anchor`);e(a,ue),t(()=>{let e=f(V,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:A,preview:()=>b(R,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:b(C,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:b(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-2`,children:[b(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),b(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});p(()=>s(e,a,ue))});let Z=u(`h2`,a);e(a,Z),l(Z,`mt-10`),e(Z,i(`API`));let Q=u(`p`,a);e(a,Q),l(Q,`text-sm text-base-content/70`),e(Q,i(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=u(`h3`,a);e(a,de),e(de,i(`Indicator`));let fe=m(`rue:component:anchor`);e(a,fe),t(()=>{let e=f(H,{rows:ee});p(()=>s(e,a,fe))});let $=u(`h3`,a);e(a,$),l($,`mt-8`),e($,i(`Indicator.Item`));let pe=m(`rue:component:anchor`);return e(a,pe),t(()=>{let e=f(H,{rows:te});p(()=>s(e,a,pe))}),n})}),c,g),c})};export{U as default};
import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,c as l,gt as u,l as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g,n as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as v,i as y}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as b}from"./Code-CZqShVUj.js";import{t as x}from"./tabs-BBuGEPV7.js";import{t as S}from"./badge-BBo7V0Er.js";import{t as C}from"./status-Cr-LXjqi.js";import{t as w}from"./input-2bBycoUP.js";import{r as T}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as E}from"./preview-test-gate-PvTX1w6L.js";var D={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},O=(e,t)=>t?`${e} ${t}`:e,k=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),A=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),j=(e,t,n=!1)=>`calc(${e} ${(n?!A(t):A(t))?`-`:`+`} ${k(t)})`,M=e=>e?D[e]:{},N=(e,t,n)=>{let r=`indicator-item`;return e&&(r+=` indicator-${e}`),t&&(r+=` indicator-${t}`),n&&(r+=` ${n}`),r},P=(e,t,n)=>{if(!n)return;let[r,i]=n,a={};return e===`start`?(a[`--indicator-s`]=j(`0px`,r),a[`--indicator-e`]=`auto`):e===`center`?(a[`--indicator-s`]=j(`50%`,r),a[`--indicator-e`]=j(`50%`,r,!0)):e===`end`&&(a[`--indicator-s`]=`auto`,a[`--indicator-e`]=j(`0px`,r,!0)),t===`top`?(a[`--indicator-t`]=j(`0px`,i),a[`--indicator-b`]=`auto`):t===`middle`?(a[`--indicator-t`]=j(`50%`,i),a[`--indicator-b`]=j(`50%`,i,!0)):t===`bottom`&&(a[`--indicator-t`]=`auto`,a[`--indicator-b`]=j(`0px`,i,!0)),Object.keys(a).length>0?a:void 0},F=(e,t)=>{if(!t)return e;if(typeof e==`string`){let n=Object.entries(t).map(([e,t])=>`${e}: ${t}`).join(`; `);return e.trim()?`${e}; ${n}`:n}return{...e,...t}},I=r=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:m,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,Component:C,hasItems:w}=g(`useSetup:0:0`,()=>f(()=>{let{as:e,className:t,style:n,item:i,itemProps:a,items:o,children:s,...c}=r;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,rest:c,Component:r.as===void 0?`div`:r.as,hasItems:g(`computed:1:0`,()=>u(()=>Array.isArray(r.items)&&r.items.length>0))}}));return d(i=>{let c=s(),u=a(`rue:component:anchor`);n(c,u);let f=d(()=>{let i=s(),c=a(`rue:slot:anchor`);n(i,c),o(()=>{let e=w.get()?d(()=>{let e=s(),t=a(`rue:list:start`),i=a(`rue:list:end`);n(e,t),n(e,i);let c=new Map;return o(()=>{c=_({items:r.items||[],getKey:(e,t)=>e.key??t,elements:c,parent:t.parentNode,before:i,start:t,renderItem:(e,t,n,r,i)=>{l(h(L,{key:e.key??i,...e,children:e.children}),t,n,r)}})}),e}):r.item==null?``:d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=h(L,{key:`__indicator_item__`,...r.itemProps,children:r.item});t(()=>p(n,e,i))}),e});t(()=>p(e,i,c))}),n(i,e(` `));let u=a(`rue:children:anchor`);return n(i,u),o(()=>{let e=r.children;t(()=>p(e,i,u))}),i});return o(()=>{let e=h(C,{...S,className:O(`indicator`,r.className),style:r.style,children:f});t(()=>p(e,c,u))}),c})},L=e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:c,__rue_rest_omit_3:l,__rue_rest_omit_4:m,__rue_rest_omit_5:_,__rue_rest_omit_6:v,__rue_rest_omit_7:y,rest:b,Component:x,placementPreset:S,resolvedHorizontal:C,resolvedVertical:w,offsetStyle:T}=g(`useSetup:0:0:dup1`,()=>f(()=>{let{as:t,placement:n,horizontal:r,vertical:i,offset:a,className:o,style:s,children:c,...l}=e,d=e.as===void 0?`span`:e.as,f=g(`computed:1:1`,()=>u(()=>M(e.placement))),p=f,m=g(`computed:1:2`,()=>u(()=>e.horizontal??p.get().horizontal)),h=m,_=g(`computed:1:3`,()=>u(()=>e.vertical??p.get().vertical)),v=_;return{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:d,placementPreset:f,resolvedHorizontal:m,resolvedVertical:_,offsetStyle:g(`computed:1:4`,()=>u(()=>P(h.get(),v.get(),e.offset)))}}));return d(r=>{let i=s(),c=a(`rue:component:anchor`);return n(i,c),o(()=>{let n=h(x,{...b,className:N(C.get(),w.get(),e.className),style:F(e.style,T.get()),children:e.children});t(()=>p(n,i,c))}),i})},R=Object.assign(I,{Item:L}),z=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,B=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,V=r=>d(c=>{let l=i(`div`,c);m(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),m(u,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,u);n(u,f);let g=i(`h2`,f);n(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,e(`# `));let _=a(`rue:slot:anchor`);n(g,_),o(()=>{let e=r.title;t(()=>p(e,g,_))});let v=a(`rue:slot:anchor`);n(f,v),o(()=>{let e=r.summary?d(()=>{let e=s(),c=i(`p`,e);n(e,c),m(c,`m-0 text-sm opacity-70`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>p(e,c,l))}),e}):``;t(()=>p(e,f,v))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>p(e,l,y))});let S=a(`rue:slot:anchor`);return n(l,S),o(()=>{let e=r.tab.value===`preview`?E(r.title,r.preview):d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>p(n,e,i))}),e});t(()=>p(e,l,S))}),l}),H=r=>d(l=>{let u=i(`div`,l);m(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),m(f,`table table-zebra`);let h=i(`thead`,f);n(f,h);let g=i(`tr`,h);n(h,g);let v=i(`th`,g);n(g,v),n(v,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=_({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{p(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>p(n,d,f))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>p(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>p(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>p(n,b,x))}),r}),r,l)}})}),u}),ee=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],te=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],U=()=>{let{tabStatus:c,tabBadge:l,tabButton:u,tabInput:_,tabCard:b,tabCenter:x,tabAvatar:E,tabTab:D,tabPlacement:O,tabShortcut:k,tabMultiple:A}=g(`useSetup:0:0`,()=>f(()=>({tabStatus:g(`ref:1:0`,()=>r(`preview`)),tabBadge:g(`ref:1:1`,()=>r(`preview`)),tabButton:g(`ref:1:2`,()=>r(`preview`)),tabInput:g(`ref:1:3`,()=>r(`preview`)),tabCard:g(`ref:1:4`,()=>r(`preview`)),tabCenter:g(`ref:1:5`,()=>r(`preview`)),tabAvatar:g(`ref:1:6`,()=>r(`preview`)),tabTab:g(`ref:1:7`,()=>r(`preview`)),tabPlacement:g(`ref:1:8`,()=>r(`preview`)),tabShortcut:g(`ref:1:9`,()=>r(`preview`)),tabMultiple:g(`ref:1:10`,()=>r(`preview`))})));return d(r=>{let f=s(),g=a(`rue:component:anchor`);return n(f,g),p(h(T,{children:d(()=>{let r=s(),d=i(`div`,r);n(r,d),m(d,`max-w-none prose prose-sm md:prose-base`);let f=i(`h1`,d);n(d,f),n(f,e(`Indicator 指示器`));let g=i(`p`,d);n(d,g),m(g,`text-sm mt-3 mb-3`),n(g,e(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let T=i(`code`,g);n(g,T),n(T,e(`placement`)),n(g,e(`、`));let j=i(`code`,g);n(g,j),n(j,e(`offset`)),n(g,e(`，以及`));let M=i(`code`,g);n(g,M),n(M,e(`item / items`)),n(g,e(`这组三件套，方便快速搭角标而不必每次都手写一个`));let N=i(`code`,g);n(g,N),n(N,e(`Indicator.Item`)),n(g,e(`。`));let P=i(`div`,d);n(d,P),m(P,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let F=i(`div`,P);n(P,F),m(F,`rounded-box bg-base-200/70 p-4`);let I=i(`div`,F);n(F,I),m(I,`text-sm font-medium`),n(I,e(`兼容旧用法`));let L=i(`p`,F);n(F,L),m(L,`m-0 mt-2 text-sm text-base-content/70`),n(L,e(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let U=i(`div`,P);n(P,U),m(U,`rounded-box bg-base-200/70 p-4`);let W=i(`div`,U);n(U,W),m(W,`text-sm font-medium`),n(W,e(`新增快捷模式`));let G=i(`p`,U);n(U,G),m(G,`m-0 mt-2 text-sm text-base-content/70`),n(G,e(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let K=i(`div`,P);n(P,K),m(K,`rounded-box bg-base-200/70 p-4`);let q=i(`div`,K);n(K,q),m(q,`text-sm font-medium`),n(q,e(`定位更顺手`));let J=i(`p`,K);n(K,J),m(J,`m-0 mt-2 text-sm text-base-content/70`),n(J,e(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let Y=a(`rue:component:anchor`);n(d,Y),o(()=>{let e=h(V,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:c,preview:()=>v(R,{children:[y(R.Item,{children:y(C,{status:`success`})}),y(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});t(()=>p(e,d,Y))});let X=a(`rue:component:anchor`);n(d,X),o(()=>{let e=h(V,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:l,preview:()=>v(R,{children:[y(R.Item,{children:y(S,{variant:`primary`,children:`New`})}),y(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});t(()=>p(e,d,X))});let ne=a(`rue:component:anchor`);n(d,ne),o(()=>{let e=h(V,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:u,preview:()=>y(R,{item:y(S,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:y(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});t(()=>p(e,d,ne))});let re=a(`rue:component:anchor`);n(d,re),o(()=>{let e=h(V,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:_,preview:()=>v(R,{children:[y(R.Item,{children:y(S,{children:`Required`})}),y(w,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});t(()=>p(e,d,re))});let ie=a(`rue:component:anchor`);n(d,ie),o(()=>{let e=h(V,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:b,preview:()=>v(R,{className:`mx-10 my-6`,children:[y(R.Item,{vertical:`bottom`,children:y(`button`,{className:`btn btn-primary`,children:`Apply`})}),y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Job Title`}),y(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});t(()=>p(e,d,ie))});let ae=a(`rue:component:anchor`);n(d,ae),o(()=>{let e=h(V,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:x,preview:()=>v(R,{className:`max-w-xs`,children:[y(R.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),y(`img`,{className:`rounded`,src:z,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${z}" alt="Indicator centered message" />
</Indicator>`});t(()=>p(e,d,ae))});let oe=a(`rue:component:anchor`);n(d,oe),o(()=>{let e=h(V,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>v(R,{className:`avatar`,children:[y(R.Item,{className:`badge badge-secondary`,children:`Justice`}),y(`div`,{className:`w-20 rounded-lg`,children:y(`img`,{src:B,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${B}" alt="Avatar with indicator" />
  </div>
</Indicator>`});t(()=>p(e,d,oe))});let se=a(`rue:component:anchor`);n(d,se),o(()=>{let e=h(V,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:D,preview:()=>v(`div`,{className:`tabs tabs-lift`,children:[y(`button`,{className:`tab`,children:`Messages`}),v(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,y(`span`,{className:`indicator-item badge`,children:`8`})]}),y(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});t(()=>p(e,d,se))});let ce=a(`rue:component:anchor`);n(d,ce),o(()=>{let e=h(V,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:O,preview:()=>v(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(R,{item:y(S,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),y(R,{item:y(S,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),y(R,{item:y(S,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});t(()=>p(e,d,ce))});let le=a(`rue:component:anchor`);n(d,le),o(()=>{let e=h(V,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:k,preview:()=>y(R,{className:`w-full max-w-sm`,item:y(S,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-3`,children:[v(`div`,{children:[y(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),y(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),y(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});t(()=>p(e,d,le))});let ue=a(`rue:component:anchor`);n(d,ue),o(()=>{let e=h(V,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:A,preview:()=>y(R,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:y(C,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:y(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-2`,children:[y(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),y(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});t(()=>p(e,d,ue))});let Z=i(`h2`,d);n(d,Z),m(Z,`mt-10`),n(Z,e(`API`));let Q=i(`p`,d);n(d,Q),m(Q,`text-sm text-base-content/70`),n(Q,e(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=i(`h3`,d);n(d,de),n(de,e(`Indicator`));let fe=a(`rue:component:anchor`);n(d,fe),o(()=>{let e=h(H,{rows:ee});t(()=>p(e,d,fe))});let $=i(`h3`,d);n(d,$),m($,`mt-8`),n($,e(`Indicator.Item`));let pe=a(`rue:component:anchor`);return n(d,pe),o(()=>{let e=h(H,{rows:te});t(()=>p(e,d,pe))}),r})}),f,g),f})};export{U as default};
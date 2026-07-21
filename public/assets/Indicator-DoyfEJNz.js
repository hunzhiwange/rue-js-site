import{Cn as e,Ct as t,Lt as n,Tt as r,dt as i,ft as a,mt as o,pn as s,pt as c,st as l,tn as u,vn as d}from"./context-8lXZvIn-.js";import{l as f,o as p,s as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g,n as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{n as y,t as b}from"./src-CCTNpCXV.js";import{t as x}from"./tabs-B1XdBEJF.js";import{t as S}from"./badge-B-YHGclR.js";import{t as C}from"./status-CeyCdWuF.js";import{t as w}from"./input-X8WmXKJB.js";import{r as T}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as E}from"./preview-test-gate-DVT0twjZ.js";var D={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},O=(e,t)=>t?`${e} ${t}`:e,k=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),A=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),j=(e,t,n=!1)=>`calc(${e} ${(n?!A(t):A(t))?`-`:`+`} ${k(t)})`,M=e=>e?D[e]:{},N=(e,t,n)=>{let r=`indicator-item`;return e&&(r+=` indicator-${e}`),t&&(r+=` indicator-${t}`),n&&(r+=` ${n}`),r},P=(e,t,n)=>{if(!n)return;let[r,i]=n,a={};return e===`start`?(a[`--indicator-s`]=j(`0px`,r),a[`--indicator-e`]=`auto`):e===`center`?(a[`--indicator-s`]=j(`50%`,r),a[`--indicator-e`]=j(`50%`,r,!0)):e===`end`&&(a[`--indicator-s`]=`auto`,a[`--indicator-e`]=j(`0px`,r,!0)),t===`top`?(a[`--indicator-t`]=j(`0px`,i),a[`--indicator-b`]=`auto`):t===`middle`?(a[`--indicator-t`]=j(`50%`,i),a[`--indicator-b`]=j(`50%`,i,!0)):t===`bottom`&&(a[`--indicator-t`]=`auto`,a[`--indicator-b`]=j(`0px`,i,!0)),Object.keys(a).length>0?a:void 0},F=(e,t)=>{if(!t)return e;if(typeof e==`string`){let n=Object.entries(t).map(([e,t])=>`${e}: ${t}`).join(`; `);return e.trim()?`${e}; ${n}`:n}return{...e,...t}},I=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:c,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,Component:C,hasItems:w}=g(`useSetup:0:0`,()=>e(()=>{let{as:e,className:r,style:i,item:a,itemProps:o,items:s,children:c,...l}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,rest:l,Component:t.as===void 0?`div`:t.as,hasItems:g(`computed:1:0`,()=>n(()=>Array.isArray(t.items)&&t.items.length>0))}}));return f(e=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=f(()=>{let e=a(),n=i(`rue:slot:anchor`);l(e,n),u(()=>{let r=w.get()?f(()=>{let e=a(),n=i(`rue:list:start`),r=i(`rue:list:end`);l(e,n),l(e,r);let o=new Map;return u(()=>{o=_({items:t.items||[],getKey:(e,t)=>e.key??t,elements:o,parent:n.parentNode,before:r,start:n,renderItem:(e,t,n,r,i)=>{m(h(L,{key:e.key??i,...e,children:e.children}),t,n,r)}})}),e}):t.item==null?``:f(()=>{let e=a(),n=i(`rue:component:anchor`);return l(e,n),u(()=>{let r=h(L,{key:`__indicator_item__`,...t.itemProps,children:t.item});d(()=>p(r,e,n))}),e});d(()=>p(r,e,n))}),l(e,o(` `));let r=i(`rue:children:anchor`);return l(e,r),u(()=>{let n=t.children;d(()=>p(n,e,r))}),e});return u(()=>{let e=h(C,{...S,className:O(`indicator`,t.className),style:t.style,children:s});d(()=>p(e,n,r))}),n})},L=t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:o,__rue_rest_omit_2:s,__rue_rest_omit_3:c,__rue_rest_omit_4:m,__rue_rest_omit_5:_,__rue_rest_omit_6:v,__rue_rest_omit_7:y,rest:b,Component:x,placementPreset:S,resolvedHorizontal:C,resolvedVertical:w,offsetStyle:T}=g(`useSetup:0:0:dup1`,()=>e(()=>{let{as:e,placement:r,horizontal:i,vertical:a,offset:o,className:s,style:c,children:l,...u}=t,d=t.as===void 0?`span`:t.as,f=g(`computed:1:1`,()=>n(()=>M(t.placement))),p=f,m=g(`computed:1:2`,()=>n(()=>t.horizontal??p.get().horizontal)),h=m,_=g(`computed:1:3`,()=>n(()=>t.vertical??p.get().vertical)),v=_;return{__rue_rest_omit_0:e,__rue_rest_omit_1:r,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:u,Component:d,placementPreset:f,resolvedHorizontal:m,resolvedVertical:_,offsetStyle:g(`computed:1:4`,()=>n(()=>P(h.get(),v.get(),t.offset)))}}));return f(e=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),u(()=>{let e=h(x,{...b,className:N(C.get(),w.get(),t.className),style:F(t.style,T.get()),children:t.children});d(()=>p(e,n,r))}),n})},R=Object.assign(I,{Item:L}),z=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,B=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,V=e=>f(t=>{let n=c(`div`,t);r(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=c(`div`,n);l(n,s),r(s,`flex flex-wrap items-start justify-between gap-3`);let m=c(`div`,s);l(s,m);let g=c(`h2`,m);l(m,g),r(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(g,o(`# `));let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let t=e.title;d(()=>p(t,g,_))});let y=i(`rue:slot:anchor`);l(m,y),u(()=>{let t=e.summary?f(()=>{let t=a(),n=c(`p`,t);l(t,n),r(n,`m-0 text-sm opacity-70`);let o=i(`rue:slot:anchor`);return l(n,o),u(()=>{let t=e.summary;d(()=>p(t,n,o))}),t}):``;d(()=>p(t,m,y))});let b=i(`rue:component:anchor`);l(n,b),u(()=>{let t=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});d(()=>p(t,n,b))});let S=i(`rue:slot:anchor`);return l(n,S),u(()=>{let t=e.tab.value===`preview`?E(e.title,e.preview):f(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),u(()=>{let r=h(v,{className:`mt-2`,lang:`tsx`,code:e.code});d(()=>p(r,t,n))}),t});d(()=>p(t,n,S))}),n}),H=e=>f(n=>{let s=c(`div`,n);r(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=c(`table`,s);l(s,m),r(m,`table table-zebra`);let h=c(`thead`,m);l(m,h);let g=c(`tr`,h);l(h,g);let v=c(`th`,g);l(g,v),l(v,o(`属性`));let y=c(`th`,g);l(g,y),l(y,o(`说明`));let b=c(`th`,g);l(g,b),l(b,o(`类型`));let x=c(`th`,g);l(g,x),l(x,o(`默认值`));let S=c(`tbody`,m);l(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);l(S,C),l(S,w);let T=new Map;return u(()=>{T=_({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{p(f(()=>{let n=a(),r=c(`tr`,n);l(n,r),u(()=>{t(r,`key`,String(e.prop))});let o=c(`td`,r);l(r,o);let s=c(`code`,o);l(o,s);let f=i(`rue:slot:anchor`);l(s,f),u(()=>{let t=e.prop;d(()=>p(t,s,f))});let m=c(`td`,r);l(r,m);let h=i(`rue:slot:anchor`);l(m,h),u(()=>{let t=e.description;d(()=>p(t,m,h))});let g=c(`td`,r);l(r,g);let _=c(`code`,g);l(g,_);let v=i(`rue:slot:anchor`);l(_,v),u(()=>{let t=e.type;d(()=>p(t,_,v))});let y=c(`td`,r);l(r,y);let b=c(`code`,y);l(y,b);let x=i(`rue:slot:anchor`);return l(b,x),u(()=>{let t=e.defaultValue;d(()=>p(t,b,x))}),n}),n,r)}})}),s}),ee=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保持原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],te=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在基础 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],U=()=>{let{tabStatus:t,tabBadge:n,tabButton:m,tabInput:_,tabCard:v,tabCenter:x,tabAvatar:E,tabTab:D,tabPlacement:O,tabShortcut:k,tabMultiple:A}=g(`useSetup:0:0`,()=>e(()=>({tabStatus:g(`ref:1:0`,()=>s(`preview`)),tabBadge:g(`ref:1:1`,()=>s(`preview`)),tabButton:g(`ref:1:2`,()=>s(`preview`)),tabInput:g(`ref:1:3`,()=>s(`preview`)),tabCard:g(`ref:1:4`,()=>s(`preview`)),tabCenter:g(`ref:1:5`,()=>s(`preview`)),tabAvatar:g(`ref:1:6`,()=>s(`preview`)),tabTab:g(`ref:1:7`,()=>s(`preview`)),tabPlacement:g(`ref:1:8`,()=>s(`preview`)),tabShortcut:g(`ref:1:9`,()=>s(`preview`)),tabMultiple:g(`ref:1:10`,()=>s(`preview`))})));return f(e=>{let s=a(),g=i(`rue:component:anchor`);return l(s,g),p(h(T,{children:f(()=>{let e=a(),s=c(`div`,e);l(e,s),r(s,`max-w-none prose prose-sm md:prose-base`);let f=c(`h1`,s);l(s,f),l(f,o(`Indicator 指示器`));let g=c(`p`,s);l(s,g),r(g,`text-sm mt-3 mb-3`),l(g,o(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。组件展示基础复合写法， 并提供`));let T=c(`code`,g);l(g,T),l(T,o(`placement`)),l(g,o(`、`));let j=c(`code`,g);l(g,j),l(j,o(`offset`)),l(g,o(`，以及`));let M=c(`code`,g);l(g,M),l(M,o(`item / items`)),l(g,o(`这组三件套，方便快速搭角标而不必每次都手写一个`));let N=c(`code`,g);l(g,N),l(N,o(`Indicator.Item`)),l(g,o(`。`));let P=c(`div`,s);l(s,P),r(P,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let F=c(`div`,P);l(P,F),r(F,`rounded-box bg-base-200/70 p-4`);let I=c(`div`,F);l(F,I),r(I,`text-sm font-medium`),l(I,o(`支持基础用法`));let L=c(`p`,F);l(F,L),r(L,`m-0 mt-2 text-sm text-base-content/70`),l(L,o(`horizontal 和 vertical 仍然可直接使用，基础示例 不需要回退。`));let U=c(`div`,P);l(P,U),r(U,`rounded-box bg-base-200/70 p-4`);let W=c(`div`,U);l(U,W),r(W,`text-sm font-medium`),l(W,o(`快捷模式`));let G=c(`p`,U);l(U,G),r(G,`m-0 mt-2 text-sm text-base-content/70`),l(G,o(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let K=c(`div`,P);l(P,K),r(K,`rounded-box bg-base-200/70 p-4`);let q=c(`div`,K);l(K,q),r(q,`text-sm font-medium`),l(q,o(`定位更顺手`));let J=c(`p`,K);l(K,J),r(J,`m-0 mt-2 text-sm text-base-content/70`),l(J,o(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let Y=i(`rue:component:anchor`);l(s,Y),u(()=>{let e=h(V,{title:`Status indicator`,summary:`最轻量的状态提醒，展示基础复合写法。`,tab:t,preview:()=>y(R,{children:[b(R.Item,{children:b(C,{status:`success`})}),b(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});d(()=>p(e,s,Y))});let X=i(`rue:component:anchor`);l(s,X),u(()=>{let e=h(V,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:n,preview:()=>y(R,{children:[b(R.Item,{children:b(S,{variant:`primary`,children:`New`})}),b(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});d(()=>p(e,s,X))});let ne=i(`rue:component:anchor`);l(s,ne),u(()=>{let e=h(V,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:m,preview:()=>b(R,{item:b(S,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:b(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});d(()=>p(e,s,ne))});let re=i(`rue:component:anchor`);l(s,re),u(()=>{let e=h(V,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:_,preview:()=>y(R,{children:[b(R.Item,{children:b(S,{children:`Required`})}),b(w,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});d(()=>p(e,s,re))});let ie=i(`rue:component:anchor`);l(s,ie),u(()=>{let e=h(V,{title:`A button as an indicator for a card`,summary:`支持基础的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:v,preview:()=>y(R,{className:`mx-10 my-6`,children:[b(R.Item,{vertical:`bottom`,children:b(`button`,{className:`btn btn-primary`,children:`Apply`})}),b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body`,children:[b(`h2`,{className:`card-title`,children:`Job Title`}),b(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});d(()=>p(e,s,ie))});let ae=i(`rue:component:anchor`);l(s,ae),u(()=>{let e=h(V,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:x,preview:()=>y(R,{className:`max-w-xs`,children:[b(R.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),b(`img`,{className:`rounded`,src:z,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${z}" alt="Indicator centered message" />
</Indicator>`});d(()=>p(e,s,ae))});let oe=i(`rue:component:anchor`);l(s,oe),u(()=>{let e=h(V,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>y(R,{className:`avatar`,children:[b(R.Item,{className:`badge badge-secondary`,children:`Justice`}),b(`div`,{className:`w-20 rounded-lg`,children:b(`img`,{src:B,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${B}" alt="Avatar with indicator" />
  </div>
</Indicator>`});d(()=>p(e,s,oe))});let se=i(`rue:component:anchor`);l(s,se),u(()=>{let e=h(V,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:D,preview:()=>y(`div`,{className:`tabs tabs-lift`,children:[b(`button`,{className:`tab`,children:`Messages`}),y(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,b(`span`,{className:`indicator-item badge`,children:`8`})]}),b(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});d(()=>p(e,s,se))});let ce=i(`rue:component:anchor`);l(s,ce),u(()=>{let e=h(V,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:O,preview:()=>y(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[b(R,{item:b(S,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:b(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),b(R,{item:b(S,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:b(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),b(R,{item:b(S,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:b(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});d(()=>p(e,s,ce))});let le=i(`rue:component:anchor`);l(s,le),u(()=>{let e=h(V,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:k,preview:()=>b(R,{className:`w-full max-w-sm`,item:b(S,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-3`,children:[y(`div`,{children:[b(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),b(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),b(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});d(()=>p(e,s,le))});let ue=i(`rue:component:anchor`);l(s,ue),u(()=>{let e=h(V,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:A,preview:()=>b(R,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:b(C,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:b(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:b(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:y(`div`,{className:`card-body gap-2`,children:[b(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),b(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});d(()=>p(e,s,ue))});let Z=c(`h2`,s);l(s,Z),r(Z,`mt-10`),l(Z,o(`API`));let Q=c(`p`,s);l(s,Q),r(Q,`text-sm text-base-content/70`),l(Q,o(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=c(`h3`,s);l(s,de),l(de,o(`Indicator`));let fe=i(`rue:component:anchor`);l(s,fe),u(()=>{let e=h(H,{rows:ee});d(()=>p(e,s,fe))});let $=c(`h3`,s);l(s,$),r($,`mt-8`),l($,o(`Indicator.Item`));let pe=i(`rue:component:anchor`);return l(s,pe),u(()=>{let e=h(H,{rows:te});d(()=>p(e,s,pe))}),e})}),s,g),s})};export{U as default};
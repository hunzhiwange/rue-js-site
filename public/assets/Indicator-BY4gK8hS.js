import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,l as s,lt as c,o as l,s as u,st as d,t as f,tt as p,vt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g,n as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as v,i as y}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as b}from"./Code-BIscIyEp.js";import{t as x}from"./tabs-CZWMQq5i.js";import{t as S}from"./badge-yUyMWmRO.js";import{t as C}from"./status-BfCiotxA.js";import{t as w}from"./input-DiGoZI6O.js";import{r as T}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as E}from"./preview-test-gate-DumhDfV7.js";var D={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},O=(e,t)=>t?`${e} ${t}`:e,k=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),A=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),j=(e,t,n=!1)=>`calc(${e} ${(n?!A(t):A(t))?`-`:`+`} ${k(t)})`,M=e=>e?D[e]:{},N=(e,t,n)=>{let r=`indicator-item`;return e&&(r+=` indicator-${e}`),t&&(r+=` indicator-${t}`),n&&(r+=` ${n}`),r},P=(e,t,n)=>{if(!n)return;let[r,i]=n,a={};return e===`start`?(a[`--indicator-s`]=j(`0px`,r),a[`--indicator-e`]=`auto`):e===`center`?(a[`--indicator-s`]=j(`50%`,r),a[`--indicator-e`]=j(`50%`,r,!0)):e===`end`&&(a[`--indicator-s`]=`auto`,a[`--indicator-e`]=j(`0px`,r,!0)),t===`top`?(a[`--indicator-t`]=j(`0px`,i),a[`--indicator-b`]=`auto`):t===`middle`?(a[`--indicator-t`]=j(`50%`,i),a[`--indicator-b`]=j(`50%`,i,!0)):t===`bottom`&&(a[`--indicator-t`]=`auto`,a[`--indicator-b`]=j(`0px`,i,!0)),Object.keys(a).length>0?a:void 0},F=(e,t)=>{if(!t)return e;if(typeof e==`string`){let n=Object.entries(t).map(([e,t])=>`${e}: ${t}`).join(`; `);return e.trim()?`${e}; ${n}`:n}return{...e,...t}},I=o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:d,__rue_rest_omit_2:h,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,Component:C,hasItems:w}=g(`useSetup:0:0`,()=>a(()=>{let{as:e,className:t,style:n,item:r,itemProps:i,items:a,children:s,...c}=o;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:s,rest:c,Component:o.as===void 0?`div`:o.as,hasItems:g(`computed:1:0`,()=>m(()=>Array.isArray(o.items)&&o.items.length>0))}}));return s(a=>{let c=e(),d=t(`rue:component:anchor`);i(c,d);let m=s(()=>{let a=e(),c=t(`rue:slot:anchor`);i(a,c),n(()=>{let d=w.get()?s(()=>{let r=e(),a=t(`rue:list:start`),s=t(`rue:list:end`);i(r,a),i(r,s);let c=new Map;return n(()=>{c=_({items:o.items||[],getKey:(e,t)=>e.key??t,elements:c,parent:a.parentNode,before:s,start:a,renderItem:(e,t,n,r,i)=>{u(f(L,{key:e.key??i,...e,children:e.children}),t,n,r)}})}),r}):o.item==null?``:s(()=>{let a=e(),s=t(`rue:component:anchor`);return i(a,s),n(()=>{let e=f(L,{key:`__indicator_item__`,...o.itemProps,children:o.item});r(()=>l(e,a,s))}),a});r(()=>l(d,a,c))}),i(a,p(` `));let d=t(`rue:children:anchor`);return i(a,d),n(()=>{let e=o.children;r(()=>l(e,a,d))}),a});return n(()=>{let e=f(C,{...S,className:O(`indicator`,o.className),style:o.style,children:m});r(()=>l(e,c,d))}),c})},L=o=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:u,__rue_rest_omit_2:d,__rue_rest_omit_3:p,__rue_rest_omit_4:h,__rue_rest_omit_5:_,__rue_rest_omit_6:v,__rue_rest_omit_7:y,rest:b,Component:x,placementPreset:S,resolvedHorizontal:C,resolvedVertical:w,offsetStyle:T}=g(`useSetup:0:0:dup1`,()=>a(()=>{let{as:e,placement:t,horizontal:n,vertical:r,offset:i,className:a,style:s,children:c,...l}=o,u=o.as===void 0?`span`:o.as,d=g(`computed:1:1`,()=>m(()=>M(o.placement))),f=d,p=g(`computed:1:2`,()=>m(()=>o.horizontal??f.get().horizontal)),h=p,_=g(`computed:1:3`,()=>m(()=>o.vertical??f.get().vertical)),v=_;return{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:n,__rue_rest_omit_3:r,__rue_rest_omit_4:i,__rue_rest_omit_5:a,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,Component:u,placementPreset:d,resolvedHorizontal:p,resolvedVertical:_,offsetStyle:g(`computed:1:4`,()=>m(()=>P(h.get(),v.get(),o.offset)))}}));return s(a=>{let s=e(),c=t(`rue:component:anchor`);return i(s,c),n(()=>{let e=f(x,{...b,className:N(C.get(),w.get(),o.className),style:F(o.style,T.get()),children:o.children});r(()=>l(e,s,c))}),s})},R=Object.assign(I,{Item:L}),z=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,B=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,V=a=>s(u=>{let d=o(`div`,u);c(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,d);i(d,m),c(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);i(m,h);let g=o(`h2`,h);i(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,p(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>l(e,g,_))});let v=t(`rue:slot:anchor`);i(h,v),n(()=>{let u=a.summary?s(()=>{let s=e(),u=o(`p`,s);i(s,u),c(u,`m-0 text-sm opacity-70`);let d=t(`rue:slot:anchor`);return i(u,d),n(()=>{let e=a.summary;r(()=>l(e,u,d))}),s}):``;r(()=>l(u,h,v))});let y=t(`rue:component:anchor`);i(d,y),n(()=>{let e=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>l(e,d,y))});let S=t(`rue:slot:anchor`);return i(d,S),n(()=>{let o=a.tab.value===`preview`?E(a.title,a.preview):s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=f(b,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>l(e,o,s))}),o});r(()=>l(o,d,S))}),d}),H=a=>s(u=>{let f=o(`div`,u);c(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);i(f,m),c(m,`table table-zebra`);let h=o(`thead`,m);i(m,h);let g=o(`tr`,h);i(h,g);let v=o(`th`,g);i(g,v),i(v,p(`属性`));let y=o(`th`,g);i(g,y),i(y,p(`说明`));let b=o(`th`,g);i(g,b),i(b,p(`类型`));let x=o(`th`,g);i(g,x),i(x,p(`默认值`));let S=o(`tbody`,m);i(m,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,c,u,f,p)=>{l(s(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{d(c,`key`,String(a.prop))});let u=o(`td`,c);i(c,u);let f=o(`code`,u);i(u,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.prop;r(()=>l(e,f,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>l(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>l(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>l(e,b,x))}),s}),c,u)}})}),f}),ee=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],te=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],U=()=>{let{tabStatus:u,tabBadge:d,tabButton:m,tabInput:_,tabCard:b,tabCenter:x,tabAvatar:E,tabTab:D,tabPlacement:O,tabShortcut:k,tabMultiple:A}=g(`useSetup:0:0`,()=>a(()=>({tabStatus:g(`ref:1:0`,()=>h(`preview`)),tabBadge:g(`ref:1:1`,()=>h(`preview`)),tabButton:g(`ref:1:2`,()=>h(`preview`)),tabInput:g(`ref:1:3`,()=>h(`preview`)),tabCard:g(`ref:1:4`,()=>h(`preview`)),tabCenter:g(`ref:1:5`,()=>h(`preview`)),tabAvatar:g(`ref:1:6`,()=>h(`preview`)),tabTab:g(`ref:1:7`,()=>h(`preview`)),tabPlacement:g(`ref:1:8`,()=>h(`preview`)),tabShortcut:g(`ref:1:9`,()=>h(`preview`)),tabMultiple:g(`ref:1:10`,()=>h(`preview`))})));return s(a=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),l(f(T,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`max-w-none prose prose-sm md:prose-base`);let h=o(`h1`,s);i(s,h),i(h,p(`Indicator 指示器`));let g=o(`p`,s);i(s,g),c(g,`text-sm mt-3 mb-3`),i(g,p(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let T=o(`code`,g);i(g,T),i(T,p(`placement`)),i(g,p(`、`));let j=o(`code`,g);i(g,j),i(j,p(`offset`)),i(g,p(`，以及`));let M=o(`code`,g);i(g,M),i(M,p(`item / items`)),i(g,p(`这组三件套，方便快速搭角标而不必每次都手写一个`));let N=o(`code`,g);i(g,N),i(N,p(`Indicator.Item`)),i(g,p(`。`));let P=o(`div`,s);i(s,P),c(P,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let F=o(`div`,P);i(P,F),c(F,`rounded-box bg-base-200/70 p-4`);let I=o(`div`,F);i(F,I),c(I,`text-sm font-medium`),i(I,p(`兼容旧用法`));let L=o(`p`,F);i(F,L),c(L,`m-0 mt-2 text-sm text-base-content/70`),i(L,p(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let U=o(`div`,P);i(P,U),c(U,`rounded-box bg-base-200/70 p-4`);let W=o(`div`,U);i(U,W),c(W,`text-sm font-medium`),i(W,p(`新增快捷模式`));let G=o(`p`,U);i(U,G),c(G,`m-0 mt-2 text-sm text-base-content/70`),i(G,p(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let K=o(`div`,P);i(P,K),c(K,`rounded-box bg-base-200/70 p-4`);let q=o(`div`,K);i(K,q),c(q,`text-sm font-medium`),i(q,p(`定位更顺手`));let J=o(`p`,K);i(K,J),c(J,`m-0 mt-2 text-sm text-base-content/70`),i(J,p(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let Y=t(`rue:component:anchor`);i(s,Y),n(()=>{let e=f(V,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:u,preview:()=>v(R,{children:[y(R.Item,{children:y(C,{status:`success`})}),y(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});r(()=>l(e,s,Y))});let X=t(`rue:component:anchor`);i(s,X),n(()=>{let e=f(V,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:d,preview:()=>v(R,{children:[y(R.Item,{children:y(S,{variant:`primary`,children:`New`})}),y(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});r(()=>l(e,s,X))});let ne=t(`rue:component:anchor`);i(s,ne),n(()=>{let e=f(V,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:m,preview:()=>y(R,{item:y(S,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:y(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});r(()=>l(e,s,ne))});let re=t(`rue:component:anchor`);i(s,re),n(()=>{let e=f(V,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:_,preview:()=>v(R,{children:[y(R.Item,{children:y(S,{children:`Required`})}),y(w,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});r(()=>l(e,s,re))});let ie=t(`rue:component:anchor`);i(s,ie),n(()=>{let e=f(V,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:b,preview:()=>v(R,{className:`mx-10 my-6`,children:[y(R.Item,{vertical:`bottom`,children:y(`button`,{className:`btn btn-primary`,children:`Apply`})}),y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Job Title`}),y(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});r(()=>l(e,s,ie))});let ae=t(`rue:component:anchor`);i(s,ae),n(()=>{let e=f(V,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:x,preview:()=>v(R,{className:`max-w-xs`,children:[y(R.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),y(`img`,{className:`rounded`,src:z,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${z}" alt="Indicator centered message" />
</Indicator>`});r(()=>l(e,s,ae))});let oe=t(`rue:component:anchor`);i(s,oe),n(()=>{let e=f(V,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>v(R,{className:`avatar`,children:[y(R.Item,{className:`badge badge-secondary`,children:`Justice`}),y(`div`,{className:`w-20 rounded-lg`,children:y(`img`,{src:B,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${B}" alt="Avatar with indicator" />
  </div>
</Indicator>`});r(()=>l(e,s,oe))});let se=t(`rue:component:anchor`);i(s,se),n(()=>{let e=f(V,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:D,preview:()=>v(`div`,{className:`tabs tabs-lift`,children:[y(`button`,{className:`tab`,children:`Messages`}),v(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,y(`span`,{className:`indicator-item badge`,children:`8`})]}),y(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});r(()=>l(e,s,se))});let ce=t(`rue:component:anchor`);i(s,ce),n(()=>{let e=f(V,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:O,preview:()=>v(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(R,{item:y(S,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),y(R,{item:y(S,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),y(R,{item:y(S,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});r(()=>l(e,s,ce))});let le=t(`rue:component:anchor`);i(s,le),n(()=>{let e=f(V,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:k,preview:()=>y(R,{className:`w-full max-w-sm`,item:y(S,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-3`,children:[v(`div`,{children:[y(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),y(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),y(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});r(()=>l(e,s,le))});let ue=t(`rue:component:anchor`);i(s,ue),n(()=>{let e=f(V,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:A,preview:()=>y(R,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:y(C,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:y(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-2`,children:[y(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),y(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});r(()=>l(e,s,ue))});let Z=o(`h2`,s);i(s,Z),c(Z,`mt-10`),i(Z,p(`API`));let Q=o(`p`,s);i(s,Q),c(Q,`text-sm text-base-content/70`),i(Q,p(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=o(`h3`,s);i(s,de),i(de,p(`Indicator`));let fe=t(`rue:component:anchor`);i(s,fe),n(()=>{let e=f(H,{rows:ee});r(()=>l(e,s,fe))});let $=o(`h3`,s);i(s,$),c($,`mt-8`),i($,p(`Indicator.Item`));let pe=t(`rue:component:anchor`);return i(s,pe),n(()=>{let e=f(H,{rows:te});r(()=>l(e,s,pe))}),a})}),h,g),h})};export{U as default};
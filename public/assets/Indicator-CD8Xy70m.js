import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,in as o,l as s,lt as c,nt as l,o as u,rt as d,s as f,t as p,tt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g,n as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as v,i as y}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as b}from"./Code-4SUSUwRg.js";import{t as x}from"./tabs-Duzh3URW.js";import{t as S}from"./badge-rO8-umnf.js";import{t as C}from"./status-jPYJNxqR.js";import{t as w}from"./input-ey-wzC3N.js";import{r as T}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as E}from"./preview-test-gate-nDDBbirJ.js";var D={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},O=(e,t)=>t?`${e} ${t}`:e,k=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),A=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),j=(e,t,n=!1)=>`calc(${e} ${(n?!A(t):A(t))?`-`:`+`} ${k(t)})`,M=e=>e?D[e]:{},N=(e,t,n)=>{let r=`indicator-item`;return e&&(r+=` indicator-${e}`),t&&(r+=` indicator-${t}`),n&&(r+=` ${n}`),r},P=(e,t,n)=>{if(!n)return;let[r,i]=n,a={};return e===`start`?(a[`--indicator-s`]=j(`0px`,r),a[`--indicator-e`]=`auto`):e===`center`?(a[`--indicator-s`]=j(`50%`,r),a[`--indicator-e`]=j(`50%`,r,!0)):e===`end`&&(a[`--indicator-s`]=`auto`,a[`--indicator-e`]=j(`0px`,r,!0)),t===`top`?(a[`--indicator-t`]=j(`0px`,i),a[`--indicator-b`]=`auto`):t===`middle`?(a[`--indicator-t`]=j(`50%`,i),a[`--indicator-b`]=j(`50%`,i,!0)):t===`bottom`&&(a[`--indicator-t`]=`auto`,a[`--indicator-b`]=j(`0px`,i,!0)),Object.keys(a).length>0?a:void 0},F=(e,t)=>{if(!t)return e;if(typeof e==`string`){let n=Object.entries(t).map(([e,t])=>`${e}: ${t}`).join(`; `);return e.trim()?`${e}; ${n}`:n}return{...e,...t}},I=t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:l,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,rest:S,Component:C,hasItems:w}=g(`useSetup:0:0`,()=>o(()=>{let{as:e,className:n,style:i,item:a,itemProps:o,items:s,children:c,...l}=t;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,rest:l,Component:t.as===void 0?`div`:t.as,hasItems:g(`computed:1:0`,()=>r(()=>Array.isArray(t.items)&&t.items.length>0))}}));return s(r=>{let i=m(),o=a(`rue:component:anchor`);n(i,o);let c=s(()=>{let r=m(),i=a(`rue:slot:anchor`);n(r,i),h(()=>{let o=w.get()?s(()=>{let e=m(),r=a(`rue:list:start`),i=a(`rue:list:end`);n(e,r),n(e,i);let o=new Map;return h(()=>{o=_({items:t.items||[],getKey:(e,t)=>e.key??t,elements:o,parent:r.parentNode,before:i,start:r,renderItem:(e,t,n,r,i)=>{f(p(L,{key:e.key??i,...e,children:e.children}),t,n,r)}})}),e}):t.item==null?``:s(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),h(()=>{let n=p(L,{key:`__indicator_item__`,...t.itemProps,children:t.item});e(()=>u(n,r,i))}),r});e(()=>u(o,r,i))}),n(r,d(` `));let o=a(`rue:children:anchor`);return n(r,o),h(()=>{let n=t.children;e(()=>u(n,r,o))}),r});return h(()=>{let n=p(C,{...S,className:O(`indicator`,t.className),style:t.style,children:c});e(()=>u(n,i,o))}),i})},L=t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:l,__rue_rest_omit_3:d,__rue_rest_omit_4:f,__rue_rest_omit_5:_,__rue_rest_omit_6:v,__rue_rest_omit_7:y,rest:b,Component:x,placementPreset:S,resolvedHorizontal:C,resolvedVertical:w,offsetStyle:T}=g(`useSetup:0:0:dup1`,()=>o(()=>{let{as:e,placement:n,horizontal:i,vertical:a,offset:o,className:s,style:c,children:l,...u}=t,d=t.as===void 0?`span`:t.as,f=g(`computed:1:1`,()=>r(()=>M(t.placement))),p=f,m=g(`computed:1:2`,()=>r(()=>t.horizontal??p.get().horizontal)),h=m,_=g(`computed:1:3`,()=>r(()=>t.vertical??p.get().vertical)),v=_;return{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:u,Component:d,placementPreset:f,resolvedHorizontal:m,resolvedVertical:_,offsetStyle:g(`computed:1:4`,()=>r(()=>P(h.get(),v.get(),t.offset)))}}));return s(r=>{let i=m(),o=a(`rue:component:anchor`);return n(i,o),h(()=>{let n=p(x,{...b,className:N(C.get(),w.get(),t.className),style:F(t.style,T.get()),children:t.children});e(()=>u(n,i,o))}),i})},R=Object.assign(I,{Item:L}),z=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,B=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,V=t=>s(r=>{let o=l(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let c=l(`div`,o);n(o,c),i(c,`flex flex-wrap items-start justify-between gap-3`);let f=l(`div`,c);n(c,f);let g=l(`h2`,f);n(f,g),i(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,d(`# `));let _=a(`rue:slot:anchor`);n(g,_),h(()=>{let n=t.title;e(()=>u(n,g,_))});let v=a(`rue:slot:anchor`);n(f,v),h(()=>{let r=t.summary?s(()=>{let r=m(),o=l(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let n=t.summary;e(()=>u(n,o,s))}),r}):``;e(()=>u(r,f,v))});let y=a(`rue:component:anchor`);n(o,y),h(()=>{let n=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>u(n,o,y))});let S=a(`rue:slot:anchor`);return n(o,S),h(()=>{let r=t.tab.value===`preview`?E(t.title,t.preview):s(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),h(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>u(n,r,i))}),r});e(()=>u(r,o,S))}),o}),H=t=>s(r=>{let o=l(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=l(`table`,o);n(o,f),i(f,`table table-zebra`);let p=l(`thead`,f);n(f,p);let g=l(`tr`,p);n(p,g);let v=l(`th`,g);n(g,v),n(v,d(`属性`));let y=l(`th`,g);n(g,y),n(y,d(`说明`));let b=l(`th`,g);n(g,b),n(b,d(`类型`));let x=l(`th`,g);n(g,x),n(x,d(`默认值`));let S=l(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return h(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,d)=>{u(s(()=>{let r=m(),i=l(`tr`,r);n(r,i),h(()=>{c(i,`key`,String(t.prop))});let o=l(`td`,i);n(i,o);let s=l(`code`,o);n(o,s);let d=a(`rue:slot:anchor`);n(s,d),h(()=>{let n=t.prop;e(()=>u(n,s,d))});let f=l(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),h(()=>{let n=t.description;e(()=>u(n,f,p))});let g=l(`td`,i);n(i,g);let _=l(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),h(()=>{let n=t.type;e(()=>u(n,_,v))});let y=l(`td`,i);n(i,y);let b=l(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),h(()=>{let n=t.defaultValue;e(()=>u(n,b,x))}),r}),r,i)}})}),o}),ee=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保持原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],te=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在基础 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],U=()=>{let{tabStatus:r,tabBadge:c,tabButton:f,tabInput:_,tabCard:b,tabCenter:x,tabAvatar:E,tabTab:D,tabPlacement:O,tabShortcut:k,tabMultiple:A}=g(`useSetup:0:0`,()=>o(()=>({tabStatus:g(`ref:1:0`,()=>t(`preview`)),tabBadge:g(`ref:1:1`,()=>t(`preview`)),tabButton:g(`ref:1:2`,()=>t(`preview`)),tabInput:g(`ref:1:3`,()=>t(`preview`)),tabCard:g(`ref:1:4`,()=>t(`preview`)),tabCenter:g(`ref:1:5`,()=>t(`preview`)),tabAvatar:g(`ref:1:6`,()=>t(`preview`)),tabTab:g(`ref:1:7`,()=>t(`preview`)),tabPlacement:g(`ref:1:8`,()=>t(`preview`)),tabShortcut:g(`ref:1:9`,()=>t(`preview`)),tabMultiple:g(`ref:1:10`,()=>t(`preview`))})));return s(t=>{let o=m(),g=a(`rue:component:anchor`);return n(o,g),u(p(T,{children:s(()=>{let t=m(),o=l(`div`,t);n(t,o),i(o,`max-w-none prose prose-sm md:prose-base`);let s=l(`h1`,o);n(o,s),n(s,d(`Indicator 指示器`));let g=l(`p`,o);n(o,g),i(g,`text-sm mt-3 mb-3`),n(g,d(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。组件展示基础复合写法， 并提供`));let T=l(`code`,g);n(g,T),n(T,d(`placement`)),n(g,d(`、`));let j=l(`code`,g);n(g,j),n(j,d(`offset`)),n(g,d(`，以及`));let M=l(`code`,g);n(g,M),n(M,d(`item / items`)),n(g,d(`这组三件套，方便快速搭角标而不必每次都手写一个`));let N=l(`code`,g);n(g,N),n(N,d(`Indicator.Item`)),n(g,d(`。`));let P=l(`div`,o);n(o,P),i(P,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let F=l(`div`,P);n(P,F),i(F,`rounded-box bg-base-200/70 p-4`);let I=l(`div`,F);n(F,I),i(I,`text-sm font-medium`),n(I,d(`支持基础用法`));let L=l(`p`,F);n(F,L),i(L,`m-0 mt-2 text-sm text-base-content/70`),n(L,d(`horizontal 和 vertical 仍然可直接使用，基础示例 不需要回退。`));let U=l(`div`,P);n(P,U),i(U,`rounded-box bg-base-200/70 p-4`);let W=l(`div`,U);n(U,W),i(W,`text-sm font-medium`),n(W,d(`快捷模式`));let G=l(`p`,U);n(U,G),i(G,`m-0 mt-2 text-sm text-base-content/70`),n(G,d(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let K=l(`div`,P);n(P,K),i(K,`rounded-box bg-base-200/70 p-4`);let q=l(`div`,K);n(K,q),i(q,`text-sm font-medium`),n(q,d(`定位更顺手`));let J=l(`p`,K);n(K,J),i(J,`m-0 mt-2 text-sm text-base-content/70`),n(J,d(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let Y=a(`rue:component:anchor`);n(o,Y),h(()=>{let t=p(V,{title:`Status indicator`,summary:`最轻量的状态提醒，展示基础复合写法。`,tab:r,preview:()=>v(R,{children:[y(R.Item,{children:y(C,{status:`success`})}),y(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});e(()=>u(t,o,Y))});let X=a(`rue:component:anchor`);n(o,X),h(()=>{let t=p(V,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:c,preview:()=>v(R,{children:[y(R.Item,{children:y(S,{variant:`primary`,children:`New`})}),y(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});e(()=>u(t,o,X))});let ne=a(`rue:component:anchor`);n(o,ne),h(()=>{let t=p(V,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:f,preview:()=>y(R,{item:y(S,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:y(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});e(()=>u(t,o,ne))});let re=a(`rue:component:anchor`);n(o,re),h(()=>{let t=p(V,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:_,preview:()=>v(R,{children:[y(R.Item,{children:y(S,{children:`Required`})}),y(w,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});e(()=>u(t,o,re))});let ie=a(`rue:component:anchor`);n(o,ie),h(()=>{let t=p(V,{title:`A button as an indicator for a card`,summary:`支持基础的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:b,preview:()=>v(R,{className:`mx-10 my-6`,children:[y(R.Item,{vertical:`bottom`,children:y(`button`,{className:`btn btn-primary`,children:`Apply`})}),y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body`,children:[y(`h2`,{className:`card-title`,children:`Job Title`}),y(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});e(()=>u(t,o,ie))});let ae=a(`rue:component:anchor`);n(o,ae),h(()=>{let t=p(V,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:x,preview:()=>v(R,{className:`max-w-xs`,children:[y(R.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),y(`img`,{className:`rounded`,src:z,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${z}" alt="Indicator centered message" />
</Indicator>`});e(()=>u(t,o,ae))});let oe=a(`rue:component:anchor`);n(o,oe),h(()=>{let t=p(V,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>v(R,{className:`avatar`,children:[y(R.Item,{className:`badge badge-secondary`,children:`Justice`}),y(`div`,{className:`w-20 rounded-lg`,children:y(`img`,{src:B,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${B}" alt="Avatar with indicator" />
  </div>
</Indicator>`});e(()=>u(t,o,oe))});let se=a(`rue:component:anchor`);n(o,se),h(()=>{let t=p(V,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:D,preview:()=>v(`div`,{className:`tabs tabs-lift`,children:[y(`button`,{className:`tab`,children:`Messages`}),v(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,y(`span`,{className:`indicator-item badge`,children:`8`})]}),y(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});e(()=>u(t,o,se))});let ce=a(`rue:component:anchor`);n(o,ce),h(()=>{let t=p(V,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:O,preview:()=>v(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[y(R,{item:y(S,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),y(R,{item:y(S,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),y(R,{item:y(S,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:y(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});e(()=>u(t,o,ce))});let le=a(`rue:component:anchor`);n(o,le),h(()=>{let t=p(V,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:k,preview:()=>y(R,{className:`w-full max-w-sm`,item:y(S,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-3`,children:[v(`div`,{children:[y(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),y(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),y(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});e(()=>u(t,o,le))});let ue=a(`rue:component:anchor`);n(o,ue),h(()=>{let t=p(V,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:A,preview:()=>y(R,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:y(C,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:y(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:y(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:v(`div`,{className:`card-body gap-2`,children:[y(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),y(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});e(()=>u(t,o,ue))});let Z=l(`h2`,o);n(o,Z),i(Z,`mt-10`),n(Z,d(`API`));let Q=l(`p`,o);n(o,Q),i(Q,`text-sm text-base-content/70`),n(Q,d(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let de=l(`h3`,o);n(o,de),n(de,d(`Indicator`));let fe=a(`rue:component:anchor`);n(o,fe),h(()=>{let t=p(H,{rows:ee});e(()=>u(t,o,fe))});let $=l(`h3`,o);n(o,$),i($,`mt-8`),n($,d(`Indicator.Item`));let pe=a(`rue:component:anchor`);return n(o,pe),h(()=>{let t=p(H,{rows:te});e(()=>u(t,o,pe))}),t})}),o,g),o})};export{U as default};
import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-BZZbPG7x.js";import{a as h,n as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as _,t as v}from"./src-DP0sEeZS.js";import{n as y}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as b}from"./Code-C8wy38VS.js";import{t as x}from"./tabs-B-QPmbH8.js";import{t as S}from"./badge-C9jCgbat.js";import{t as C}from"./status-CFtuuMfe.js";import{t as w}from"./input-BprVLhu7.js";var T={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},E=(e,t)=>t?`${e} ${t}`:e,D=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),O=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),k=(e,t,n=!1)=>`calc(${e} ${(n?!O(t):O(t))?`-`:`+`} ${D(t)})`,ee=e=>e?T[e]:{},A=(e,t,n,r)=>{if(!e)return;let i={"--indicator-s":void 0,"--indicator-e":void 0,"--indicator-t":void 0,"--indicator-b":void 0};if(r){let[e,a]=r;t===`start`?(i[`--indicator-s`]=k(`0px`,e),i[`--indicator-e`]=`auto`):t===`center`?(i[`--indicator-s`]=k(`50%`,e),i[`--indicator-e`]=k(`50%`,e,!0)):t===`end`&&(i[`--indicator-s`]=`auto`,i[`--indicator-e`]=k(`0px`,e,!0)),n===`top`?(i[`--indicator-t`]=k(`0px`,a),i[`--indicator-b`]=`auto`):n===`middle`?(i[`--indicator-t`]=k(`50%`,a),i[`--indicator-b`]=k(`50%`,a,!0)):n===`bottom`&&(i[`--indicator-t`]=`auto`,i[`--indicator-b`]=k(`0px`,a,!0))}Object.entries(i).forEach(([t,n])=>{if(n===void 0){e.style.removeProperty(t);return}e.style.setProperty(t,n)})},j=({as:e=`div`,className:t,style:n,item:r,itemProps:i,items:a,children:o,...s})=>{let c=e,l=Array.isArray(a)&&a.length>0?a.map((e,t)=>v(M,{...e,children:e.children},e.key??t)):r==null?[]:[v(M,{...i,children:r},`__indicator_item__`)];return _(c,{...s,className:E(`indicator`,t),style:n,children:[l,o]})},M=({as:e=`span`,placement:t,horizontal:n,vertical:r,offset:i,className:a,style:o,children:s,...c})=>{let l=e,u=ee(t),d=n??u.horizontal,f=r??u.vertical,p=c.ref;`ref`in c&&delete c.ref;let m=`indicator-item`;return d&&(m+=` indicator-${d}`),f&&(m+=` indicator-${f}`),a&&(m+=` ${a}`),v(l,{...c,ref:e=>{typeof p==`function`?p(e):p&&typeof p==`object`&&(p.current=e??void 0),A(e,d,f,i)},className:m,style:o,children:s})},N=Object.assign(j,{Item:M}),te=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,P=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,F=({title:t,summary:d,tab:m,preview:h,code:g})=>p(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);l(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);l(v,y);let S=e(`h2`);l(y,S),o(S,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(S,n(`# `));let C=r(S);l(S,C),u(()=>{s(C,t)});let w=i(`rue:slot:anchor`);l(y,w),u(()=>{c(d?p(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),u(()=>{s(i,d)}),t}):``,y,w)});let T=i(`rue:component:anchor`);l(_,T),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return l(_,E),u(()=>{c(m.value===`preview`?h():p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),I=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),ne=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],re=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],L=()=>{let{tabStatus:r,tabBadge:s,tabButton:g,tabInput:b,tabCard:x,tabCenter:T,tabAvatar:E,tabTab:D,tabPlacement:O,tabShortcut:k,tabMultiple:ee}=h(`useSetup:0:0`,()=>m(()=>({tabStatus:h(`ref:1:0`,()=>d(`preview`)),tabBadge:h(`ref:1:1`,()=>d(`preview`)),tabButton:h(`ref:1:2`,()=>d(`preview`)),tabInput:h(`ref:1:3`,()=>d(`preview`)),tabCard:h(`ref:1:4`,()=>d(`preview`)),tabCenter:h(`ref:1:5`,()=>d(`preview`)),tabAvatar:h(`ref:1:6`,()=>d(`preview`)),tabTab:h(`ref:1:7`,()=>d(`preview`)),tabPlacement:h(`ref:1:8`,()=>d(`preview`)),tabShortcut:h(`ref:1:9`,()=>d(`preview`)),tabMultiple:h(`ref:1:10`,()=>d(`preview`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Indicator 指示器`));let h=e(`p`);l(p,h),o(h,`text-sm mt-3 mb-3`),l(h,n(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let y=e(`code`);l(h,y),l(y,n(`placement`)),l(h,n(`、`));let A=e(`code`);l(h,A),l(A,n(`offset`)),l(h,n(`，以及`));let j=e(`code`);l(h,j),l(j,n(`item / items`)),l(h,n(`这组三件套，方便快速搭角标而不必每次都手写一个`));let M=e(`code`);l(h,M),l(M,n(`Indicator.Item`)),l(h,n(`。`));let L=e(`div`);l(p,L),o(L,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let R=e(`div`);l(L,R),o(R,`rounded-box bg-base-200/70 p-4`);let z=e(`div`);l(R,z),o(z,`text-sm font-medium`),l(z,n(`兼容旧用法`));let B=e(`p`);l(R,B),o(B,`m-0 mt-2 text-sm text-base-content/70`),l(B,n(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let V=e(`div`);l(L,V),o(V,`rounded-box bg-base-200/70 p-4`);let H=e(`div`);l(V,H),o(H,`text-sm font-medium`),l(H,n(`新增快捷模式`));let U=e(`p`);l(V,U),o(U,`m-0 mt-2 text-sm text-base-content/70`),l(U,n(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let W=e(`div`);l(L,W),o(W,`rounded-box bg-base-200/70 p-4`);let G=e(`div`);l(W,G),o(G,`text-sm font-medium`),l(G,n(`定位更顺手`));let K=e(`p`);l(W,K),o(K,`m-0 mt-2 text-sm text-base-content/70`),l(K,n(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let q=e(`div`);l(p,q),o(q,`mt-3 text-sm`);let J=e(`a`);l(q,J),t(J,`href`,`https://daisyui.com/components/indicator/`),t(J,`target`,`_blank`),l(J,n(`查看 Indicator 静态样式`));let Y=i(`rue:component:anchor`);l(p,Y),u(()=>{c(f(F,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:r,preview:()=>_(N,{children:[v(N.Item,{children:v(C,{status:`success`})}),v(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`}),p,Y)});let ie=i(`rue:component:anchor`);l(p,ie),u(()=>{c(f(F,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:s,preview:()=>_(N,{children:[v(N.Item,{children:v(S,{variant:`primary`,children:`New`})}),v(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`}),p,ie)});let ae=i(`rue:component:anchor`);l(p,ae),u(()=>{c(f(F,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:g,preview:()=>v(N,{item:v(S,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:v(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`}),p,ae)});let oe=i(`rue:component:anchor`);l(p,oe),u(()=>{c(f(F,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:b,preview:()=>_(N,{children:[v(N.Item,{children:v(S,{children:`Required`})}),v(w,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`}),p,oe)});let se=i(`rue:component:anchor`);l(p,se),u(()=>{c(f(F,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:x,preview:()=>_(N,{className:`mx-10 my-6`,children:[v(N.Item,{vertical:`bottom`,children:v(`button`,{className:`btn btn-primary`,children:`Apply`})}),v(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body`,children:[v(`h2`,{className:`card-title`,children:`Job Title`}),v(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`}),p,se)});let ce=i(`rue:component:anchor`);l(p,ce),u(()=>{c(f(F,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:T,preview:()=>_(N,{className:`max-w-xs`,children:[v(N.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),v(`img`,{className:`rounded`,src:te,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${te}" alt="Indicator centered message" />
</Indicator>`}),p,ce)});let le=i(`rue:component:anchor`);l(p,le),u(()=>{c(f(F,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:E,preview:()=>_(N,{className:`avatar`,children:[v(N.Item,{className:`badge badge-secondary`,children:`Justice`}),v(`div`,{className:`w-20 rounded-lg`,children:v(`img`,{src:P,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${P}" alt="Avatar with indicator" />
  </div>
</Indicator>`}),p,le)});let X=i(`rue:component:anchor`);l(p,X),u(()=>{c(f(F,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:D,preview:()=>_(`div`,{className:`tabs tabs-lift`,children:[v(`button`,{className:`tab`,children:`Messages`}),_(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,v(`span`,{className:`indicator-item badge`,children:`8`})]}),v(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`}),p,X)});let ue=i(`rue:component:anchor`);l(p,ue),u(()=>{c(f(F,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:O,preview:()=>_(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[v(N,{item:v(S,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:v(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),v(N,{item:v(S,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:v(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),v(N,{item:v(S,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:v(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`}),p,ue)});let de=i(`rue:component:anchor`);l(p,de),u(()=>{c(f(F,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:k,preview:()=>v(N,{className:`w-full max-w-sm`,item:v(S,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:v(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-3`,children:[_(`div`,{children:[v(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),v(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),v(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`}),p,de)});let fe=i(`rue:component:anchor`);l(p,fe),u(()=>{c(f(F,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:ee,preview:()=>v(N,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:v(C,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:v(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:v(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:_(`div`,{className:`card-body gap-2`,children:[v(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),v(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`}),p,fe)});let Z=e(`h2`);l(p,Z),o(Z,`mt-10`),l(Z,n(`API`));let Q=e(`p`);l(p,Q),o(Q,`text-sm text-base-content/70`),l(Q,n(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let pe=e(`h3`);l(p,pe),l(pe,n(`Indicator`));let me=i(`rue:component:anchor`);l(p,me),u(()=>{c(f(I,{rows:ne}),p,me)});let $=e(`h3`);l(p,$),o($,`mt-8`),l($,n(`Indicator.Item`));let he=i(`rue:component:anchor`);return l(p,he),u(()=>{c(f(I,{rows:re}),p,he)}),d})}),d,m),d})};export{L as default};
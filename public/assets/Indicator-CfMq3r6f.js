import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,d as s,dt as c,ht as l,l as u,st as d,t as f,vt as p}from"./vapor-runtime-BuwLbCGk.js";import{a as m,n as h}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as g,t as _}from"./src-BQwLQD8R.js";import{n as v}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as y}from"./Code-DQxnq0in.js";import{t as b}from"./tabs-DqfJzZfa.js";import{t as x}from"./badge-lRk49Pw8.js";import{t as S}from"./status-Co1_QGCd.js";import{t as C}from"./input-BU-TVJFw.js";var w={start:{horizontal:`start`},center:{horizontal:`center`},end:{horizontal:`end`},top:{vertical:`top`},middle:{vertical:`middle`},bottom:{vertical:`bottom`},"top-start":{horizontal:`start`,vertical:`top`},"top-center":{horizontal:`center`,vertical:`top`},"top-end":{horizontal:`end`,vertical:`top`},"middle-start":{horizontal:`start`,vertical:`middle`},"middle-center":{horizontal:`center`,vertical:`middle`},"middle-end":{horizontal:`end`,vertical:`middle`},"bottom-start":{horizontal:`start`,vertical:`bottom`},"bottom-center":{horizontal:`center`,vertical:`bottom`},"bottom-end":{horizontal:`end`,vertical:`bottom`}},T=(e,t)=>t?`${e} ${t}`:e,E=e=>typeof e==`number`?`${Math.abs(e)}px`:String(e).trim().replace(/^-/,``),D=e=>typeof e==`number`?e<0:String(e).trim().startsWith(`-`),O=(e,t,n=!1)=>`calc(${e} ${(n?!D(t):D(t))?`-`:`+`} ${E(t)})`,ee=e=>e?w[e]:{},k=(e,t,n,r)=>{if(!e)return;let i={"--indicator-s":void 0,"--indicator-e":void 0,"--indicator-t":void 0,"--indicator-b":void 0};if(r){let[e,a]=r;t===`start`?(i[`--indicator-s`]=O(`0px`,e),i[`--indicator-e`]=`auto`):t===`center`?(i[`--indicator-s`]=O(`50%`,e),i[`--indicator-e`]=O(`50%`,e,!0)):t===`end`&&(i[`--indicator-s`]=`auto`,i[`--indicator-e`]=O(`0px`,e,!0)),n===`top`?(i[`--indicator-t`]=O(`0px`,a),i[`--indicator-b`]=`auto`):n===`middle`?(i[`--indicator-t`]=O(`50%`,a),i[`--indicator-b`]=O(`50%`,a,!0)):n===`bottom`&&(i[`--indicator-t`]=`auto`,i[`--indicator-b`]=O(`0px`,a,!0))}Object.entries(i).forEach(([t,n])=>{if(n===void 0){e.style.removeProperty(t);return}e.style.setProperty(t,n)})},A=({as:e=`div`,className:t,style:n,item:r,itemProps:i,items:a,children:o,...s})=>{let c=e,l=Array.isArray(a)&&a.length>0?a.map((e,t)=>_(j,{...e,children:e.children},e.key??t)):r==null?[]:[_(j,{...i,children:r},`__indicator_item__`)];return g(c,{...s,className:T(`indicator`,t),style:n,children:[l,o]})},j=({as:e=`span`,placement:t,horizontal:n,vertical:r,offset:i,className:a,style:o,children:s,...c})=>{let l=e,u=ee(t),d=n??u.horizontal,f=r??u.vertical,p=c.ref;`ref`in c&&delete c.ref;let m=`indicator-item`;return d&&(m+=` indicator-${d}`),f&&(m+=` indicator-${f}`),a&&(m+=` ${a}`),_(l,{...c,ref:e=>{typeof p==`function`?p(e):p&&typeof p==`object`&&(p.current=e??void 0),k(e,d,f,i)},className:m,style:o,children:s})},M=Object.assign(A,{Item:j}),N=`https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp`,P=`https://img.daisyui.com/images/profile/demo/batperson@192.webp`,F=o=>s(l=>{let d=r(`div`,l);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=r(`div`,d);i(d,m),n(m,`flex flex-wrap items-start justify-between gap-3`);let h=r(`div`,m);i(m,h);let g=r(`h2`,h);i(h,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,a(`# `));let _=e(`rue:slot:anchor`);i(g,_),p(()=>{let e=o.title;c(()=>u(e,g,_))});let v=e(`rue:slot:anchor`);i(h,v),p(()=>{let a=o.summary?s(()=>{let a=t(),s=r(`p`,a);i(a,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),p(()=>{let e=o.summary;c(()=>u(e,s,l))}),a}):``;c(()=>u(a,h,v))});let x=e(`rue:component:anchor`);i(d,x),p(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});c(()=>u(e,d,x))});let S=e(`rue:slot:anchor`);return i(d,S),p(()=>{let n=o.tab.value===`preview`?o.preview():s(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),p(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:o.code});c(()=>u(e,n,r))}),n});c(()=>u(n,d,S))}),d}),I=l=>s(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=r(`table`,f);i(f,m),n(m,`table table-zebra`);let g=r(`thead`,m);i(m,g);let _=r(`tr`,g);i(g,_);let v=r(`th`,_);i(_,v),i(v,a(`属性`));let y=r(`th`,_);i(_,y),i(y,a(`说明`));let b=r(`th`,_);i(_,b),i(b,a(`类型`));let x=r(`th`,_);i(_,x),i(x,a(`默认值`));let S=r(`tbody`,m);i(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return p(()=>{T=h({items:l.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,l,d,f)=>{u(s(()=>{let a=t(),s=r(`tr`,a);i(a,s),p(()=>{o(s,`key`,String(n.prop))});let l=r(`td`,s);i(s,l);let d=r(`code`,l);i(l,d);let f=e(`rue:slot:anchor`);i(d,f),p(()=>{let e=n.prop;c(()=>u(e,d,f))});let m=r(`td`,s);i(s,m);let h=e(`rue:slot:anchor`);i(m,h),p(()=>{let e=n.description;c(()=>u(e,m,h))});let g=r(`td`,s);i(s,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),p(()=>{let e=n.type;c(()=>u(e,_,v))});let y=r(`td`,s);i(s,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),p(()=>{let e=n.defaultValue;c(()=>u(e,b,x))}),a}),a,l)}})}),f}),te=[{prop:`as`,description:`指定容器标签，默认输出 div`,type:`any`,defaultValue:`'div'`},{prop:`item`,description:`单个快捷角标内容，适合最常见的一个 overlay 场景`,type:`any`,defaultValue:`-`},{prop:`itemProps`,description:`配合 item 使用的 Indicator.Item 属性透传`,type:`Omit<IndicatorItemProps, children>`,defaultValue:`-`},{prop:`items`,description:`多角标数据驱动写法，内部会自动展开为多个 Indicator.Item`,type:`IndicatorItemConfig[]`,defaultValue:`-`},{prop:`style`,description:`容器样式，保留原生 style 透传`,type:`Record<string, any> | string`,defaultValue:`-`}],ne=[{prop:`as`,description:`指定角标根节点标签，默认输出 span`,type:`any`,defaultValue:`'span'`},{prop:`className`,description:`追加到 indicator-item 上的视觉类名`,type:`string`,defaultValue:`-`},{prop:`horizontal`,description:`水平定位，显式传入时优先级高于 placement`,type:`'start' | 'center' | 'end'`,defaultValue:`-`},{prop:`offset`,description:`在既有 anchor 基础上微调角标位置，格式为 [x, y]`,type:`[number | string, number | string]`,defaultValue:`-`},{prop:`placement`,description:`组合式定位写法，例如 top-start、middle-center、bottom-end`,type:`IndicatorPlacement`,defaultValue:`-`},{prop:`style`,description:`原生 style 透传；offset 会通过 CSS 变量补充到最终节点`,type:`Record<string, any> | string`,defaultValue:`-`},{prop:`vertical`,description:`垂直定位，显式传入时优先级高于 placement`,type:`'top' | 'middle' | 'bottom'`,defaultValue:`-`}],L=()=>{let{tabStatus:h,tabBadge:y,tabButton:b,tabInput:w,tabCard:T,tabCenter:E,tabAvatar:D,tabTab:O,tabPlacement:ee,tabShortcut:k,tabMultiple:A}=m(`useSetup:0:0`,()=>l(()=>({tabStatus:m(`ref:1:0`,()=>d(`preview`)),tabBadge:m(`ref:1:1`,()=>d(`preview`)),tabButton:m(`ref:1:2`,()=>d(`preview`)),tabInput:m(`ref:1:3`,()=>d(`preview`)),tabCard:m(`ref:1:4`,()=>d(`preview`)),tabCenter:m(`ref:1:5`,()=>d(`preview`)),tabAvatar:m(`ref:1:6`,()=>d(`preview`)),tabTab:m(`ref:1:7`,()=>d(`preview`)),tabPlacement:m(`ref:1:8`,()=>d(`preview`)),tabShortcut:m(`ref:1:9`,()=>d(`preview`)),tabMultiple:m(`ref:1:10`,()=>d(`preview`))})));return s(l=>{let d=t(),m=e(`rue:component:anchor`);return i(d,m),u(f(v,{children:s(()=>{let s=t(),l=r(`div`,s);i(s,l),n(l,`max-w-none prose prose-sm md:prose-base`);let d=r(`h1`,l);i(l,d),i(d,a(`Indicator 指示器`));let m=r(`p`,l);i(l,m),n(m,`text-sm mt-3 mb-3`),i(m,a(`Indicator 负责把状态点、徽标、按钮或任意轻量信息悬挂到内容边缘。Rue 这一版在保留原有复合写法的同时，补齐了`));let v=r(`code`,m);i(m,v),i(v,a(`placement`)),i(m,a(`、`));let j=r(`code`,m);i(m,j),i(j,a(`offset`)),i(m,a(`，以及`));let L=r(`code`,m);i(m,L),i(L,a(`item / items`)),i(m,a(`这组三件套，方便快速搭角标而不必每次都手写一个`));let re=r(`code`,m);i(m,re),i(re,a(`Indicator.Item`)),i(m,a(`。`));let R=r(`div`,l);i(l,R),n(R,`not-prose grid gap-3 rounded-box border border-base-300 bg-base-100 p-4 md:grid-cols-3`);let z=r(`div`,R);i(R,z),n(z,`rounded-box bg-base-200/70 p-4`);let B=r(`div`,z);i(z,B),n(B,`text-sm font-medium`),i(B,a(`兼容旧用法`));let V=r(`p`,z);i(z,V),n(V,`m-0 mt-2 text-sm text-base-content/70`),i(V,a(`horizontal 和 vertical 仍然可直接使用，旧 demo 不需要回退。`));let H=r(`div`,R);i(R,H),n(H,`rounded-box bg-base-200/70 p-4`);let U=r(`div`,H);i(H,U),n(U,`text-sm font-medium`),i(U,a(`新增快捷模式`));let W=r(`p`,H);i(H,W),n(W,`m-0 mt-2 text-sm text-base-content/70`),i(W,a(`一个角标用 item，多角标用 items，页面模板代码可以明显收缩。`));let G=r(`div`,R);i(R,G),n(G,`rounded-box bg-base-200/70 p-4`);let K=r(`div`,G);i(G,K),n(K,`text-sm font-medium`),i(K,a(`定位更顺手`));let q=r(`p`,G);i(G,q),n(q,`m-0 mt-2 text-sm text-base-content/70`),i(q,a(`placement 负责主定位，offset 负责微调，适合图片、卡片、操作按钮等场景。`));let J=r(`div`,l);i(l,J),n(J,`mt-3 text-sm`);let Y=r(`a`,J);i(J,Y),o(Y,`href`,`https://daisyui.com/components/indicator/`),o(Y,`target`,`_blank`),i(Y,a(`查看 Indicator 静态样式`));let X=e(`rue:component:anchor`);i(l,X),p(()=>{let e=f(F,{title:`Status indicator`,summary:`最轻量的状态提醒，保留原始复合写法。`,tab:h,preview:()=>g(M,{children:[_(M.Item,{children:_(S,{status:`success`})}),_(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Status status="success" />
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});c(()=>u(e,l,X))});let ie=e(`rue:component:anchor`);i(l,ie),p(()=>{let e=f(F,{title:`Badge as indicator`,summary:`把 Badge 挂到内容右上角，是最常见的信息提醒写法。`,tab:y,preview:()=>g(M,{children:[_(M.Item,{children:_(x,{variant:`primary`,children:`New`})}),_(`div`,{className:`grid h-32 w-32 place-items-center rounded bg-base-300`,children:`content`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge variant="primary">New</Badge>
  </Indicator.Item>
  <div className="grid h-32 w-32 place-items-center rounded bg-base-300">content</div>
</Indicator>`});c(()=>u(e,l,ie))});let ae=e(`rue:component:anchor`);i(l,ae),p(()=>{let e=f(F,{title:`For button`,summary:`一个角标时可以直接改用 item 快捷模式，不再手写 Indicator.Item。`,tab:b,preview:()=>_(M,{item:_(x,{variant:`secondary`,children:`12`}),itemProps:{placement:`top-end`},children:_(`button`,{className:`btn`,children:`Inbox`})}),code:`<Indicator
  item={<Badge variant="secondary">12</Badge>}
  itemProps={{ placement: 'top-end' }}
>
  <button className="btn">Inbox</button>
</Indicator>`});c(()=>u(e,l,ae))});let oe=e(`rue:component:anchor`);i(l,oe),p(()=>{let e=f(F,{title:`For an input`,summary:`表单必填、实验开关等轻提示适合放在输入框边缘。`,tab:w,preview:()=>g(M,{children:[_(M.Item,{children:_(x,{children:`Required`})}),_(C,{placeholder:`Your email address`,className:`input-bordered`})]}),code:`<Indicator>
  <Indicator.Item>
    <Badge>Required</Badge>
  </Indicator.Item>
  <Input placeholder="Your email address" className="input-bordered" />
</Indicator>`});c(()=>u(e,l,oe))});let se=e(`rue:component:anchor`);i(l,se),p(()=>{let e=f(F,{title:`A button as an indicator for a card`,summary:`兼容旧的 vertical 写法，适合把操作按钮悬挂在卡片边缘。`,tab:T,preview:()=>g(M,{className:`mx-10 my-6`,children:[_(M.Item,{vertical:`bottom`,children:_(`button`,{className:`btn btn-primary`,children:`Apply`})}),_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body`,children:[_(`h2`,{className:`card-title`,children:`Job Title`}),_(`p`,{children:`Rerum reiciendis beatae tenetur excepturi`})]})})]}),code:`<Indicator className="mx-10 my-6">
  <Indicator.Item vertical="bottom">
    <button className="btn btn-primary">Apply</button>
  </Indicator.Item>
  <div className="card border border-base-300 bg-base-100 shadow-sm">
    <div className="card-body">
      <h2 className="card-title">Job Title</h2>
      <p>Rerum reiciendis beatae tenetur excepturi</p>
    </div>
  </div>
</Indicator>`});c(()=>u(e,l,se))});let ce=e(`rue:component:anchor`);i(l,ce),p(()=>{let e=f(F,{title:`In center of an image`,summary:`同一条提示覆盖在图片中心时，组合 horizontal 和 vertical 依然最直观。`,tab:E,preview:()=>g(M,{className:`max-w-xs`,children:[_(M.Item,{horizontal:`center`,vertical:`middle`,className:`badge`,children:`Only available for Pro users`}),_(`img`,{className:`rounded`,src:N,alt:`Indicator centered message`})]}),code:`<Indicator className="max-w-xs">
  <Indicator.Item horizontal="center" vertical="middle" className="badge">
    Only available for Pro users
  </Indicator.Item>
  <img className="rounded" src="${N}" alt="Indicator centered message" />
</Indicator>`});c(()=>u(e,l,ce))});let le=e(`rue:component:anchor`);i(l,le),p(()=>{let e=f(F,{title:`For avatar`,summary:`头像、封面等媒体元素通常更适合搭配短文本或身份标签。`,tab:D,preview:()=>g(M,{className:`avatar`,children:[_(M.Item,{className:`badge badge-secondary`,children:`Justice`}),_(`div`,{className:`w-20 rounded-lg`,children:_(`img`,{src:P,alt:`Avatar with indicator`})})]}),code:`<Indicator className="avatar">
  <Indicator.Item className="badge badge-secondary">Justice</Indicator.Item>
  <div className="w-20 rounded-lg">
    <img src="${P}" alt="Avatar with indicator" />
  </div>
</Indicator>`});c(()=>u(e,l,le))});let ue=e(`rue:component:anchor`);i(l,ue),p(()=>{let e=f(F,{title:`For tab`,summary:`在 tab 标题上挂未读数，适合消息、审批和工单等场景。`,tab:O,preview:()=>g(`div`,{className:`tabs tabs-lift`,children:[_(`button`,{className:`tab`,children:`Messages`}),g(`button`,{className:`indicator tab tab-active`,children:[`Notifications`,_(`span`,{className:`indicator-item badge`,children:`8`})]}),_(`button`,{className:`tab`,children:`Requests`})]}),code:`<div className="tabs tabs-lift">
  <button className="tab">Messages</button>
  <button className="indicator tab tab-active">
    Notifications
    <span className="indicator-item badge">8</span>
  </button>
  <button className="tab">Requests</button>
</div>`});c(()=>u(e,l,ue))});let de=e(`rue:component:anchor`);i(l,de),p(()=>{let e=f(F,{title:`Placement shorthand and offset`,summary:`placement 先给出主定位，再用 offset 做细调，适合视觉需要避让边框或圆角的场景。`,tab:ee,preview:()=>g(`div`,{className:`grid gap-4 md:grid-cols-3`,children:[_(M,{item:_(x,{variant:`secondary`,children:`Start`}),itemProps:{placement:`top-start`,offset:[8,-4]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`top-start`})}),_(M,{item:_(x,{variant:`accent`,children:`Center`}),itemProps:{placement:`middle-center`,offset:[0,4]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`middle-center`})}),_(M,{item:_(x,{variant:`warning`,children:`End`}),itemProps:{placement:`bottom-end`,offset:[10,6]},children:_(`div`,{className:`grid h-24 rounded-xl bg-base-200 place-items-center text-sm`,children:`bottom-end`})})]}),code:`<div className="grid gap-4 md:grid-cols-3">
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
</div>`});c(()=>u(e,l,de))});let fe=e(`rue:component:anchor`);i(l,fe),p(()=>{let e=f(F,{title:`Props-driven shorthand`,summary:`常见的一主一辅场景可以完全通过 item 和 itemProps 表达，代码更短，也更适合数据驱动。`,tab:k,preview:()=>_(M,{className:`w-full max-w-sm`,item:_(x,{variant:`primary`,children:`8 pending`}),itemProps:{placement:`top-end`,offset:[12,-6]},children:_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-3`,children:[g(`div`,{children:[_(`div`,{className:`text-xs uppercase tracking-[0.18em] text-base-content/55`,children:`Queue`}),_(`div`,{className:`mt-2 text-lg font-semibold`,children:`Build pipeline`})]}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`Web hooks, release notes and QA approvals are waiting for merge.`})]})})}),code:`<Indicator
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
</Indicator>`});c(()=>u(e,l,fe))});let pe=e(`rue:component:anchor`);i(l,pe),p(()=>{let e=f(F,{title:`Multiple indicators`,summary:`items 适合一个主体上同时悬挂多个提示，比如在线状态和悬挂操作。`,tab:A,preview:()=>_(M,{className:`w-full max-w-sm`,items:[{key:`presence`,placement:`top-start`,offset:[6,-4],children:_(S,{status:`success`})},{key:`cta`,as:`div`,placement:`bottom-center`,children:_(`button`,{className:`btn btn-primary btn-sm`,children:`Apply`})}],children:_(`div`,{className:`card border border-base-300 bg-base-100 shadow-sm`,children:g(`div`,{className:`card-body gap-2`,children:[_(`h3`,{className:`m-0 text-lg font-semibold`,children:`Design review board`}),_(`p`,{className:`m-0 text-sm text-base-content/70`,children:`This board keeps the latest reviewer presence and the primary action in one place.`})]})})}),code:`<Indicator
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
</Indicator>`});c(()=>u(e,l,pe))});let Z=r(`h2`,l);i(l,Z),n(Z,`mt-10`),i(Z,a(`API`));let Q=r(`p`,l);i(l,Q),n(Q,`text-sm text-base-content/70`),i(Q,a(`Indicator 仍然是一个纯布局组件，不接管 Badge、Status 或 Button 的视觉，只负责悬挂与定位。`));let me=r(`h3`,l);i(l,me),i(me,a(`Indicator`));let he=e(`rue:component:anchor`);i(l,he),p(()=>{let e=f(I,{rows:te});c(()=>u(e,l,he))});let $=r(`h3`,l);i(l,$),n($,`mt-8`),i($,a(`Indicator.Item`));let ge=e(`rue:component:anchor`);return i(l,ge),p(()=>{let e=f(I,{rows:ne});c(()=>u(e,l,ge))}),s})}),d,m),d})};export{L as default};
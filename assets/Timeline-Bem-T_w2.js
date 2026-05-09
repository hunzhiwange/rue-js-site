import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,_ as c,c as l,j as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-CKndxKFn.js";import{a as g,n as _}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as v,t as y}from"./src-CqIWk1va.js";import{n as b}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as x}from"./Code-B1JFTu6m.js";import{t as S}from"./tabs-BbiCzXqJ.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):D(e)?[e]:[],D=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},O=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),k=({className:e})=>y(`span`,{className:T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e)}),A=({className:e})=>y(`span`,{className:T(`loading loading-spinner loading-xs`,e)}),j=e=>T(e.lineClassName,e.color?w[e.color]:void 0),M=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},N=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(D(e.icon))return{className:r,content:e.icon};if(D(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:y(A,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:y(`span`,{style:{color:e.color},children:y(k,{})})};if(t)return{className:r,content:y(k,{})}},P=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=D(n)&&r!==n;if(!D(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},F=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!D(t),contentBox:!0,liClassName:`opacity-80`}:null,I=(e,t,n,r,i)=>{let a=e.slice(),o=F(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=O(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:P(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:N(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:j(e),lineStyle:M(e)}})},L=({box:e,className:t,children:n})=>y(`div`,{className:T(`timeline-start`,e&&`timeline-box`,t),children:n}),R=({className:e,children:t})=>y(`div`,{className:T(`timeline-middle`,e),children:t}),z=({box:e,className:t,children:n})=>y(`div`,{className:T(`timeline-end`,e&&`timeline-box`,t),children:n}),B=(e,t)=>v(`li`,{className:e.liClassName,children:[e.beforeLine?y(`hr`,{className:e.lineClassName,style:e.lineStyle}):null,e.start?y(L,{box:e.start.box,className:e.start.className,children:e.start.content}):null,e.middle?y(R,{className:e.middle.className,children:e.middle.content}):null,e.end?y(z,{box:e.end.box,className:e.end.className,children:e.end.content}):null,e.afterLine?y(`hr`,{className:e.lineClassName,style:e.lineStyle}):null]},e.key??t),V=Object.assign(({direction:e,orientation:t,mode:n,snapIcon:r,compact:i,reverse:a,pending:o,pendingDot:s,className:l,children:u,items:d})=>{let f=ee(e,t),p=T(`timeline`,f&&`timeline-${f}`,r&&`timeline-snap-icon`,i&&`timeline-compact`,l);if(d&&d.length){let e=I(d,n,a,o,s);return c(`ul`,{className:p},...e.map(B))}if(o){let e=I([],n,a,o,s);return c(`ul`,{className:p},...e.map(B))}return c(`ul`,{className:p},...E(u))},{Start:L,Middle:R,End:z}),H=(...e)=>e.filter(Boolean).join(` `),U={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},W={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},G={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},K=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,q=({title:t,summary:c,tab:f,preview:h,code:g})=>m(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let C=r(b);u(b,C),d(()=>{s(C,t)});let w=i(`rue:slot:anchor`);u(y,w),d(()=>{l(c?m(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let i=r(n);return u(n,i),d(()=>{s(i,c)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),d(()=>{l(p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),d(()=>{l(f.value===`preview`?h():m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(x,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),ne=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=e(`table`);u(s,c),o(c,`table table-zebra`);let f=e(`thead`);u(c,f);let p=e(`tr`);u(f,p);let h=e(`th`);u(p,h),u(h,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let v=e(`th`);u(p,v),u(v,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(c,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,c)=>{l(m(()=>{let r=a(),o=e(`tr`);u(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let c=e(`code`);u(s,c);let f=i(`rue:slot:anchor`);u(c,f),d(()=>{let e=n.prop;l(e,c,f)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),d(()=>{let e=n.description;l(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),d(()=>{let e=n.type;l(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),d(()=>{let e=n.defaultValue;l(e,y,b)}),r}),r,o)}})}),s}),J=({tone:t=`primary`,label:n=`•`})=>m(()=>{let r=e(`span`);d(()=>{o(r,String(H(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,U[t])))});let a=i(`rue:slot:anchor`);return u(r,a),d(()=>{l(n,r,a)}),r}),Y=({title:t,summary:n,badge:i,tone:a=`primary`})=>m(()=>{let c=e(`div`);o(c,`space-y-2 text-left`);let l=e(`div`);u(c,l),d(()=>{o(l,String(H(`badge badge-sm`,W[a])))});let f=r(l);u(l,f),d(()=>{s(f,i)});let p=e(`div`);u(c,p),o(p,`font-medium leading-5`);let m=r(p);u(p,m),d(()=>{s(m,t)});let h=e(`div`);u(c,h),o(h,`text-xs leading-5 opacity-70`);let g=r(h);return u(h,g),d(()=>{s(g,n)}),c}),X=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],re=X.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ie=X.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:K,content:e.year},middle:{content:y(J,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:y(Y,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),ae=()=>[{key:`discover`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:y(Y,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:y(Y,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:y(Y,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],oe=()=>[{key:`brief`,title:`Brief`,content:y(Y,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:y(Y,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>X.slice(0,4).map(e=>({key:`${e.year}-color`,title:y(`span`,{className:H(`badge badge-sm`,W[e.tone]),children:e.badge}),content:y(Y,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),ce=[{key:`plan`,title:`Plan`,content:y(Y,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:y(J,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:y(Y,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:y(J,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:y(Y,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:y(J,{tone:`success`,label:`3`})}],Z=({orientation:r=`horizontal`,bottomOnly:s,alternate:c,colored:f,noIcons:h,snapIcon:g,compact:_})=>{let v=r===`vertical`;return m(()=>{let y=e(`div`);d(()=>{o(y,String(v?``:`overflow-x-auto pb-2`))});let b=i(`rue:component:anchor`);return u(y,b),d(()=>{l(p(V,{orientation:v?`vertical`:void 0,snapIcon:g,compact:_,className:v?`max-w-3xl`:`min-w-[860px]`,children:X.map((g,_)=>{let v=_>0,y=_<X.length-1,b=f?G[g.tone]:void 0,x=!!c&&_%2==0;return m(()=>{let c=e(`li`);d(()=>{t(c,`key`,String(`${r}-${g.year}-${s?`end`:`full`}`))});let f=i(`rue:slot:anchor`);u(c,f),d(()=>{l(v?m(()=>{let t=a(),n=e(`hr`);return u(t,n),d(()=>{o(n,String(b))}),t}):``,c,f)}),u(c,n(` `));let S=i(`rue:slot:anchor`);u(c,S),d(()=>{l(s?``:m(x?()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(Y,{title:g.title,summary:g.summary,badge:g.badge,tone:g.tone}),e,t)}),e});return d(()=>{l(p(V.Start,{box:!0,children:n}),e,t)}),e}:()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(V.Start,{className:K,children:g.year}),e,t)}),e}),c,S)}),u(c,n(` `));let C=i(`rue:slot:anchor`);u(c,C),d(()=>{l(h?``:m(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(J,{tone:g.tone,label:String(_+1)}),e,t)}),e});return l(p(V.Middle,{children:n}),e,t),e}),c,C)}),u(c,n(` `));let w=i(`rue:slot:anchor`);u(c,w),d(()=>{l(m(s?()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(Y,{title:g.title,summary:g.summary,badge:g.badge,tone:g.tone}),e,t)}),e});return d(()=>{l(p(V.End,{box:!0,children:n}),e,t)}),e}:x?()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(V.End,{className:K,children:g.year}),e,t)}),e}:()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=m(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{l(p(Y,{title:g.title,summary:g.summary,badge:g.badge,tone:g.tone}),e,t)}),e});return d(()=>{l(p(V.End,{box:!0,children:n}),e,t)}),e}),c,w)}),u(c,n(` `));let T=i(`rue:slot:anchor`);return u(c,T),d(()=>{l(y?m(()=>{let t=a(),n=e(`hr`);return u(t,n),d(()=>{o(n,String(b))}),t}):``,c,T)}),c})})}),y,b)}),y})},le=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按 ant-design 的心智迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],ue=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],de=`import { Timeline } from '@rue-js/design'

const phases = [
  { year: '1984', title: 'Macintosh 发布' },
  { year: '1998', title: 'iMac 回归' },
  { year: '2001', title: 'iPod 上线' },
]

<Timeline>
  {phases.map((phase, index) => (
    <li key={phase.year}>
      {index > 0 ? <hr /> : null}
      <Timeline.Start className="text-xs font-semibold uppercase tracking-[0.26em] opacity-60">
        {phase.year}
      </Timeline.Start>
      <Timeline.Middle>
        <span className="inline-flex size-5 items-center justify-center rounded-full border border-primary text-primary bg-primary/10">
          ✓
        </span>
      </Timeline.Middle>
      <Timeline.End box>{phase.title}</Timeline.End>
      {index < phases.length - 1 ? <hr /> : null}
    </li>
  ))}
</Timeline>`,fe=`import { Timeline } from '@rue-js/design'

const items = [
  {
    start: { className: 'text-xs font-semibold uppercase tracking-[0.26em] opacity-60', content: '1984' },
    middle: {
      content: <span className="inline-flex size-5 items-center justify-center rounded-full border border-primary text-primary bg-primary/10">1</span>,
    },
    end: { box: true, content: 'Macintosh 发布' },
    afterLine: true,
  },
  {
    beforeLine: true,
    middle: {
      content: <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>,
    },
    end: { box: true, content: 'iMac 回归' },
  },
]

<Timeline items={items} />`,pe=`import { Timeline } from '@rue-js/design'

const items = [
  {
    title: 'Brief',
    content: '需求冻结',
    contentBox: true,
    color: 'primary',
  },
  {
    title: 'Build',
    content: '联调完成',
    contentBox: true,
    color: 'success',
  },
]

<Timeline mode="alternate" reverse pending="质量复核中" items={items} />`,me=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Start className="text-xs font-semibold uppercase tracking-[0.26em] opacity-60">
      1984
    </Timeline.Start>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-primary text-primary bg-primary/10">1</span>
    </Timeline.Middle>
    <Timeline.End box>Macintosh 发布</Timeline.End>
    <hr />
  </li>
</Timeline>`,he=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>
    </Timeline.Middle>
    <Timeline.End box>iMac 回归</Timeline.End>
    <hr />
  </li>
</Timeline>`,ge=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Discovery', content: '梳理场景', contentBox: true },
  { title: 'Design', content: '交互定稿', contentBox: true },
  { title: 'Ship', content: '上线校验', contentBox: true },
]

<Timeline mode="alternate" items={items} />`,_e=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Launch', content: 'Macintosh 发布', color: 'primary', contentBox: true },
  { title: 'Touch', content: 'iPhone 亮相', color: 'info', contentBox: true },
  { title: 'Wear', content: 'Apple Watch 成型', color: 'success', contentBox: true },
]

<Timeline items={items} />`,ve=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Start className="text-xs font-semibold uppercase tracking-[0.26em] opacity-60">
      1984
    </Timeline.Start>
    <Timeline.End box>Macintosh 发布</Timeline.End>
    <hr />
  </li>
</Timeline>`,ye=`import { Timeline } from '@rue-js/design'

<Timeline orientation="vertical">
  <li>
    <Timeline.Start className="text-xs font-semibold uppercase tracking-[0.26em] opacity-60">
      1984
    </Timeline.Start>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-primary text-primary bg-primary/10">1</span>
    </Timeline.Middle>
    <Timeline.End box>Macintosh 发布</Timeline.End>
    <hr />
  </li>
</Timeline>`,be=`import { Timeline } from '@rue-js/design'

<Timeline orientation="vertical">
  <li>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>
    </Timeline.Middle>
    <Timeline.End box>iMac 回归</Timeline.End>
    <hr />
  </li>
</Timeline>`,xe=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Discovery', content: '梳理场景', contentBox: true },
  { title: 'Design', content: '交互定稿', contentBox: true },
  { title: 'Ship', content: '上线校验', contentBox: true },
]

<Timeline orientation="vertical" mode="alternate" items={items} />`,Se=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Launch', content: 'Macintosh 发布', color: 'primary', contentBox: true },
  { title: 'Touch', content: 'iPhone 亮相', color: 'info', contentBox: true },
  { title: 'Wear', content: 'Apple Watch 成型', color: 'success', contentBox: true },
]

<Timeline orientation="vertical" items={items} />`,Ce=`import { Timeline } from '@rue-js/design'

const items = [
  {
    title: 'Plan',
    content: (
      <div className="space-y-2 text-left">
        <div className="badge badge-primary badge-soft badge-sm">01</div>
        <div className="font-medium leading-5">项目拆解</div>
        <div className="text-xs leading-5 opacity-70">
          先把节奏拆成清晰节点，再把每个节点的所有者钉下来。
        </div>
      </div>
    ),
    contentBox: true,
    icon: (
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-primary text-primary bg-primary/10">
        1
      </span>
    ),
  },
  {
    title: 'Review',
    content: (
      <div className="space-y-2 text-left">
        <div className="badge badge-warning badge-soft badge-sm">02</div>
        <div className="font-medium leading-5">体验走查</div>
        <div className="text-xs leading-5 opacity-70">
          在联调前做一次完整路径走查，尽量把细碎问题前置。
        </div>
      </div>
    ),
    contentBox: true,
    icon: (
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-warning text-warning bg-warning/10">
        2
      </span>
    ),
  },
  {
    title: 'Ship',
    content: (
      <div className="space-y-2 text-left">
        <div className="badge badge-success badge-soft badge-sm">03</div>
        <div className="font-medium leading-5">灰度上线</div>
        <div className="text-xs leading-5 opacity-70">
          保留观察窗口和回滚钩子，让上线是一个可管理过程。
        </div>
      </div>
    ),
    contentBox: true,
    icon: (
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-success text-success bg-success/10">
        3
      </span>
    ),
  },
]

<Timeline orientation="vertical" compact snapIcon items={items} />`,we=()=>{let{tabArray:r,tabArrayInternal:s,tabDataApi:c,tabBothSides:_,tabBottomOnly:x,tabDifferentSides:S,tabColorfulLines:C,tabNoIcons:w,tabVBothSides:T,tabVRightOnly:E,tabVDifferentSides:D,tabVColorfulLines:ee,tabSnapStart:te}=g(`useSetup:0:0`,()=>h(()=>({tabArray:g(`ref:1:0`,()=>f(`preview`)),tabArrayInternal:g(`ref:1:1`,()=>f(`preview`)),tabDataApi:g(`ref:1:2`,()=>f(`preview`)),tabBothSides:g(`ref:1:3`,()=>f(`preview`)),tabBottomOnly:g(`ref:1:4`,()=>f(`preview`)),tabDifferentSides:g(`ref:1:5`,()=>f(`preview`)),tabColorfulLines:g(`ref:1:6`,()=>f(`preview`)),tabNoIcons:g(`ref:1:7`,()=>f(`preview`)),tabVBothSides:g(`ref:1:8`,()=>f(`preview`)),tabVRightOnly:g(`ref:1:9`,()=>f(`preview`)),tabVDifferentSides:g(`ref:1:10`,()=>f(`preview`)),tabVColorfulLines:g(`ref:1:11`,()=>f(`preview`)),tabSnapStart:g(`ref:1:12`,()=>f(`preview`))})));return m(()=>{let f=a(),h=i(`rue:component:anchor`);return u(f,h),l(p(b,{children:m(()=>{let f=a(),m=e(`div`);u(f,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);u(m,h),u(h,n(`Timeline 时间线`));let g=e(`p`);u(m,g),o(g,`text-sm mt-3 mb-3`),u(g,n(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更接近 ant-design 心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let b=e(`div`);u(m,b),o(b,`text-sm`);let O=e(`a`);u(b,O),t(O,`href`,`https://daisyui.com/components/timeline/`),t(O,`target`,`_blank`),t(O,`rel`,`noreferrer`),u(O,n(`查看 Timeline 静态样式`));let k=e(`div`);u(m,k),o(k,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let A=e(`div`);u(k,A),o(A,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let j=e(`div`);u(A,j),o(j,`badge badge-info badge-soft badge-sm`),u(j,n(`数据驱动`));let M=e(`div`);u(A,M),o(M,`mt-3 font-medium`),u(M,n(`items、mode、reverse`));let N=e(`p`);u(A,N),o(N,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(N,n(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let P=e(`div`);u(k,P),o(P,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let F=e(`div`);u(P,F),o(F,`badge badge-secondary badge-soft badge-sm`),u(F,n(`精细布局`));let I=e(`div`);u(P,I),o(I,`mt-3 font-medium`),u(I,n(`Start / Middle / End`));let L=e(`p`);u(P,L),o(L,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(L,n(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let R=e(`div`);u(k,R),o(R,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let z=e(`div`);u(R,z),o(z,`badge badge-warning badge-soft badge-sm`),u(z,n(`视觉控制`));let B=e(`div`);u(R,B),o(B,`mt-3 font-medium`),u(B,n(`color、snapIcon、compact`));let H=e(`p`);u(R,H),o(H,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(H,n(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let U=e(`div`);u(m,U),t(U,`role`,`alert`),o(U,`alert alert-soft alert-info not-prose my-6`);let W=e(`span`);u(U,W),o(W,`text-sm leading-6`),u(W,n(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let G=i(`rue:component:anchor`);u(m,G),d(()=>{l(p(q,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:r,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(V,{className:`min-w-[860px]`,children:re.map(e=>v(`li`,{children:[e.beforeLine?y(`hr`,{}):null,y(V.Start,{className:K,children:e.year}),y(V.Middle,{children:y(J,{tone:e.tone,label:`✓`})}),y(V.End,{box:!0,children:y(Y,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?y(`hr`,{}):null]},e.key))})}),code:de}),m,G)});let X=i(`rue:component:anchor`);u(m,X),d(()=>{l(p(q,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:s,preview:()=>y(V,{items:ie}),code:fe}),m,X)});let we=i(`rue:component:anchor`);u(m,we),d(()=>{l(p(q,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:c,preview:()=>y(V,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:oe()}),code:pe}),m,we)});let Te=i(`rue:component:anchor`);u(m,Te),d(()=>{l(p(q,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:_,preview:()=>Z({orientation:`horizontal`}),code:me}),m,Te)});let Ee=i(`rue:component:anchor`);u(m,Ee),d(()=>{l(p(q,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:x,preview:()=>Z({orientation:`horizontal`,bottomOnly:!0}),code:he}),m,Ee)});let De=i(`rue:component:anchor`);u(m,De),d(()=>{l(p(q,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:S,preview:()=>y(V,{mode:`alternate`,items:ae()}),code:ge}),m,De)});let Oe=i(`rue:component:anchor`);u(m,Oe),d(()=>{l(p(q,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:C,preview:()=>y(V,{items:se()}),code:_e}),m,Oe)});let ke=i(`rue:component:anchor`);u(m,ke),d(()=>{l(p(q,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:w,preview:()=>Z({orientation:`horizontal`,noIcons:!0}),code:ve}),m,ke)});let Ae=i(`rue:component:anchor`);u(m,Ae),d(()=>{l(p(q,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:T,preview:()=>Z({orientation:`vertical`}),code:ye}),m,Ae)});let je=i(`rue:component:anchor`);u(m,je),d(()=>{l(p(q,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:E,preview:()=>Z({orientation:`vertical`,bottomOnly:!0}),code:be}),m,je)});let Me=i(`rue:component:anchor`);u(m,Me),d(()=>{l(p(q,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:D,preview:()=>y(V,{orientation:`vertical`,mode:`alternate`,items:ae()}),code:xe}),m,Me)});let Ne=i(`rue:component:anchor`);u(m,Ne),d(()=>{l(p(q,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:ee,preview:()=>y(V,{orientation:`vertical`,items:se()}),code:Se}),m,Ne)});let Pe=i(`rue:component:anchor`);u(m,Pe),d(()=>{l(p(q,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:te,preview:()=>y(V,{orientation:`vertical`,compact:!0,snapIcon:!0,items:ce,className:`max-w-2xl`}),code:Ce}),m,Pe)});let Fe=e(`h2`);u(m,Fe),u(Fe,n(`增强能力`));let Ie=e(`p`);u(m,Ie),o(Ie,`text-sm opacity-80`),u(Ie,n("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Le=i(`rue:component:anchor`);u(m,Le),d(()=>{l(p(q,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:c,preview:()=>y(V,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:oe()}),code:pe}),m,Le)});let Q=e(`div`);u(m,Q),o(Q,`my-10 lg:my-14`);let Re=e(`h2`);u(Q,Re),u(Re,n(`API`));let ze=e(`p`);u(Q,ze),o(ze,`text-sm leading-6 opacity-70`),u(ze,n(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let Be=e(`h3`);u(Q,Be),o(Be,`mt-6`),u(Be,n(`Timeline`));let Ve=i(`rue:component:anchor`);u(Q,Ve),d(()=>{l(p(ne,{rows:le}),Q,Ve)});let $=e(`h3`);u(Q,$),o($,`mt-8`),u($,n(`TimelineItemProps`));let He=i(`rue:component:anchor`);return u(Q,He),d(()=>{l(p(ne,{rows:ue}),Q,He)}),f})}),f,h),f})};export{we as default};
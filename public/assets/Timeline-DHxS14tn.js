import{$ as e,Ht as t,Q as n,Rt as r,S as i,Xt as a,Y as o,Z as s,_t as c,ct as l,et as u,l as d,ot as f,qt as p,s as m,t as h}from"./vapor-runtime-aZAg0Qkw.js";import{a as g,n as _}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as v,i as y}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as b}from"./Code-5DOEyGxf.js";import{t as x}from"./tabs-CWmjyn0I.js";import{r as S}from"./SidebarPlaygroundDesign-CS11MI8e.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):D(e)?[e]:[],D=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),O=({className:e})=>y(`span`,{className:T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e)}),k=({className:e})=>y(`span`,{className:T(`loading loading-spinner loading-xs`,e)}),A=e=>T(e.lineClassName,e.color?w[e.color]:void 0),j=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},M=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(D(e.icon))return{className:r,content:e.icon};if(D(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:y(k,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:y(`span`,{style:{color:e.color},children:y(O,{})})};if(t)return{className:r,content:y(O,{})}},N=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=D(n)&&r!==n;if(!D(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},P=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!D(t),contentBox:!0,liClassName:`opacity-80`}:null,F=(e,t,n,r,i)=>{let a=e.slice(),o=P(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:N(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:M(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:A(e),lineStyle:j(e)}})},I=({box:e,className:t,children:n})=>y(`div`,{className:T(`timeline-start`,e&&`timeline-box`,t),children:n}),L=({className:e,children:t})=>y(`div`,{className:T(`timeline-middle`,e),children:t}),R=({box:e,className:t,children:n})=>y(`div`,{className:T(`timeline-end`,e&&`timeline-box`,t),children:n}),z=(e,t)=>v(`li`,{className:e.liClassName,children:[e.beforeLine?y(`hr`,{className:e.lineClassName,style:e.lineStyle}):null,e.start?y(I,{box:e.start.box,className:e.start.className,children:e.start.content}):null,e.middle?y(L,{className:e.middle.className,children:e.middle.content}):null,e.end?y(R,{box:e.end.box,className:e.end.className,children:e.end.content}):null,e.afterLine?y(`hr`,{className:e.lineClassName,style:e.lineStyle}):null]},e.key??t),B=Object.assign(({direction:e,orientation:t,mode:n,snapIcon:r,compact:a,reverse:o,pending:s,pendingDot:c,className:l,children:u,items:d})=>{let f=ee(e,t),p=T(`timeline`,f&&`timeline-${f}`,r&&`timeline-snap-icon`,a&&`timeline-compact`,l);if(d&&d.length){let e=F(d,n,o,s,c);return i(`ul`,{className:p},...e.map(z))}if(s){let e=F([],n,o,s,c);return i(`ul`,{className:p},...e.map(z))}return i(`ul`,{className:p},...E(u))},{Start:I,Middle:L,End:R}),V=(...e)=>e.filter(Boolean).join(` `),H={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},U={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},W={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},G=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,K=r=>d(i=>{let c=e(`div`,i);l(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=e(`div`,c);o(c,f),l(f,`flex flex-wrap items-start justify-between gap-3`);let p=e(`div`,f);o(f,p);let g=e(`h2`,p);o(p,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(g,u(`# `));let _=s(`rue:slot:anchor`);o(g,_),a(()=>{let e=r.title;t(()=>m(e,g,_))});let v=s(`rue:slot:anchor`);o(p,v),a(()=>{let i=r.summary?d(()=>{let i=n(),c=e(`p`,i);o(i,c),l(c,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let u=s(`rue:slot:anchor`);return o(c,u),a(()=>{let e=r.summary;t(()=>m(e,c,u))}),i}):``;t(()=>m(i,p,v))});let y=s(`rue:component:anchor`);o(c,y),a(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>m(e,c,y))});let S=s(`rue:slot:anchor`);return o(c,S),a(()=>{let e=r.tab.value===`preview`?r.preview():d(()=>{let e=n(),i=s(`rue:component:anchor`);return o(e,i),a(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>m(n,e,i))}),e});t(()=>m(e,c,S))}),c}),re=r=>d(i=>{let c=e(`div`,i);l(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,c);o(c,p),l(p,`table table-zebra`);let h=e(`thead`,p);o(p,h);let g=e(`tr`,h);o(h,g);let v=e(`th`,g);o(g,v),o(v,u(`属性`));let y=e(`th`,g);o(g,y),o(y,u(`说明`));let b=e(`th`,g);o(g,b),o(b,u(`类型`));let x=e(`th`,g);o(g,x),o(x,u(`默认值`));let S=e(`tbody`,p);o(p,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);o(S,C),o(S,w);let T=new Map;return a(()=>{T=_({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,i,c,l,u)=>{m(d(()=>{let i=n(),c=e(`tr`,i);o(i,c),a(()=>{f(c,`key`,String(r.prop))});let l=e(`td`,c);o(c,l);let u=e(`code`,l);o(l,u);let d=s(`rue:slot:anchor`);o(u,d),a(()=>{let e=r.prop;t(()=>m(e,u,d))});let p=e(`td`,c);o(c,p);let h=s(`rue:slot:anchor`);o(p,h),a(()=>{let e=r.description;t(()=>m(e,p,h))});let g=e(`td`,c);o(c,g);let _=e(`code`,g);o(g,_);let v=s(`rue:slot:anchor`);o(_,v),a(()=>{let e=r.type;t(()=>m(e,_,v))});let y=e(`td`,c);o(c,y);let b=e(`code`,y);o(y,b);let x=s(`rue:slot:anchor`);return o(b,x),a(()=>{let e=r.defaultValue;t(()=>m(e,b,x))}),i}),i,c)}})}),c}),q=n=>d(r=>{let i=e(`span`,r);a(()=>{l(i,String(V(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,H[n.tone===void 0?`primary`:n.tone])))});let c=s(`rue:slot:anchor`);return o(i,c),a(()=>{let e=n.label===void 0?`•`:n.label;t(()=>m(e,i,c))}),i}),J=n=>d(r=>{let i=e(`div`,r);l(i,`space-y-2 text-left`);let c=e(`div`,i);o(i,c),a(()=>{l(c,String(V(`badge badge-sm`,U[n.tone===void 0?`primary`:n.tone])))});let u=s(`rue:slot:anchor`);o(c,u),a(()=>{let e=n.badge;t(()=>m(e,c,u))});let d=e(`div`,i);o(i,d),l(d,`font-medium leading-5`);let f=s(`rue:slot:anchor`);o(d,f),a(()=>{let e=n.title;t(()=>m(e,d,f))});let p=e(`div`,i);o(i,p),l(p,`text-xs leading-5 opacity-70`);let h=s(`rue:slot:anchor`);return o(p,h),a(()=>{let e=n.summary;t(()=>m(e,p,h))}),i}),Y=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=Y.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=Y.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:G,content:e.year},middle:{content:y(q,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:y(J,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:y(J,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:y(J,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:y(J,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:y(J,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:y(J,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>Y.slice(0,4).map(e=>({key:`${e.year}-color`,title:y(`span`,{className:V(`badge badge-sm`,U[e.tone]),children:e.badge}),content:y(J,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:y(J,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:y(q,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:y(J,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:y(q,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:y(J,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:y(q,{tone:`success`,label:`3`})}],X=r=>{let{isVertical:i}=g(`useSetup:0:0`,()=>p(()=>({isVertical:g(`computed:1:0`,()=>c(()=>(r.orientation===void 0?`horizontal`:r.orientation)===`vertical`))})));return d(c=>{let p=e(`div`,c);a(()=>{l(p,String(i.get()?``:`overflow-x-auto pb-2`))});let g=s(`rue:component:anchor`);return o(p,g),a(()=>{let c=h(B,{orientation:i.get()?`vertical`:void 0,snapIcon:r.snapIcon,compact:r.compact,className:i.get()?`max-w-3xl`:`min-w-[860px]`,children:d(()=>{let i=n(),c=s(`rue:list:start`),p=s(`rue:list:end`);o(i,c),o(i,p);let g=new Map;return a(()=>{g=_({items:Y||[],getKey:(e,t)=>`${r.orientation===void 0?`horizontal`:r.orientation}-${e.year}-${r.bottomOnly?`end`:`full`}`,elements:g,parent:c.parentNode,before:p,singleRoot:!0,start:c,renderItem:(i,c,p,g,_)=>{m(d(()=>{let c=n(),p=_>0,g=_<Y.length-1,v=r.colored?W[i.tone]:void 0,y=!!r.alternate&&_%2==0,b=e(`li`,c);o(c,b),a(()=>{f(b,`key`,String(`${r.orientation===void 0?`horizontal`:r.orientation}-${i.year}-${r.bottomOnly?`end`:`full`}`))});let x=s(`rue:slot:anchor`);o(b,x),a(()=>{let r=p?d(()=>{let t=n(),r=e(`hr`,t);return o(t,r),a(()=>{l(r,String(v))}),t}):``;t(()=>m(r,b,x))}),o(b,u(` `));let S=s(`rue:slot:anchor`);o(b,S),a(()=>{let e=r.bottomOnly?``:d(y?()=>{let e=n(),r=s(`rue:component:anchor`);o(e,r);let c=h(J,{title:i.title,summary:i.summary,badge:i.badge,tone:i.tone});return a(()=>{let n=h(B.Start,{box:!0,children:c});t(()=>m(n,e,r))}),e}:()=>{let e=n(),r=s(`rue:component:anchor`);return o(e,r),a(()=>{let n=h(B.Start,{className:G,children:i.year});t(()=>m(n,e,r))}),e});t(()=>m(e,b,S))}),o(b,u(` `));let C=s(`rue:slot:anchor`);o(b,C),a(()=>{let e=r.noIcons?``:d(()=>{let e=n(),t=s(`rue:component:anchor`);o(e,t);let r=h(q,{tone:i.tone,label:String(_+1)});return m(h(B.Middle,{children:r}),e,t),e});t(()=>m(e,b,C))}),o(b,u(` `));let w=s(`rue:slot:anchor`);o(b,w),a(()=>{let e=r.bottomOnly?d(()=>{let e=n(),r=s(`rue:component:anchor`);o(e,r);let c=h(J,{title:i.title,summary:i.summary,badge:i.badge,tone:i.tone});return a(()=>{let n=h(B.End,{box:!0,children:c});t(()=>m(n,e,r))}),e}):d(y?()=>{let e=n(),r=s(`rue:component:anchor`);return o(e,r),a(()=>{let n=h(B.End,{className:G,children:i.year});t(()=>m(n,e,r))}),e}:()=>{let e=n(),r=s(`rue:component:anchor`);o(e,r);let c=h(J,{title:i.title,summary:i.summary,badge:i.badge,tone:i.tone});return a(()=>{let n=h(B.End,{box:!0,children:c});t(()=>m(n,e,r))}),e});t(()=>m(e,b,w))}),o(b,u(` `));let T=s(`rue:slot:anchor`);return o(b,T),a(()=>{let r=g?d(()=>{let t=n(),r=e(`hr`,t);return o(t,r),a(()=>{l(r,String(v))}),t}):``;t(()=>m(r,b,T))}),c}),c,p)}})}),i})});t(()=>m(c,p,g))}),p})},ue=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,pe=`import { Timeline } from '@rue-js/design'

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

<Timeline items={items} />`,me=`import { Timeline } from '@rue-js/design'

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

<Timeline mode="alternate" reverse pending="质量复核中" items={items} />`,he=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,ge=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>
    </Timeline.Middle>
    <Timeline.End box>iMac 回归</Timeline.End>
    <hr />
  </li>
</Timeline>`,_e=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Discovery', content: '梳理场景', contentBox: true },
  { title: 'Design', content: '交互定稿', contentBox: true },
  { title: 'Ship', content: '上线校验', contentBox: true },
]

<Timeline mode="alternate" items={items} />`,ve=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Launch', content: 'Macintosh 发布', color: 'primary', contentBox: true },
  { title: 'Touch', content: 'iPhone 亮相', color: 'info', contentBox: true },
  { title: 'Wear', content: 'Apple Watch 成型', color: 'success', contentBox: true },
]

<Timeline items={items} />`,ye=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Start className="text-xs font-semibold uppercase tracking-[0.26em] opacity-60">
      1984
    </Timeline.Start>
    <Timeline.End box>Macintosh 发布</Timeline.End>
    <hr />
  </li>
</Timeline>`,be=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,xe=`import { Timeline } from '@rue-js/design'

<Timeline orientation="vertical">
  <li>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>
    </Timeline.Middle>
    <Timeline.End box>iMac 回归</Timeline.End>
    <hr />
  </li>
</Timeline>`,Se=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Discovery', content: '梳理场景', contentBox: true },
  { title: 'Design', content: '交互定稿', contentBox: true },
  { title: 'Ship', content: '上线校验', contentBox: true },
]

<Timeline orientation="vertical" mode="alternate" items={items} />`,Ce=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Launch', content: 'Macintosh 发布', color: 'primary', contentBox: true },
  { title: 'Touch', content: 'iPhone 亮相', color: 'info', contentBox: true },
  { title: 'Wear', content: 'Apple Watch 成型', color: 'success', contentBox: true },
]

<Timeline orientation="vertical" items={items} />`,we=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,Z=()=>{let{tabArray:i,tabArrayInternal:c,tabDataApi:_,tabBothSides:b,tabBottomOnly:x,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:D,tabVDifferentSides:ee,tabVColorfulLines:te,tabSnapStart:ne}=g(`useSetup:0:0:dup1`,()=>p(()=>({tabArray:g(`ref:1:1`,()=>r(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>r(`preview`)),tabDataApi:g(`ref:1:3`,()=>r(`preview`)),tabBothSides:g(`ref:1:4`,()=>r(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>r(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>r(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>r(`preview`)),tabNoIcons:g(`ref:1:8`,()=>r(`preview`)),tabVBothSides:g(`ref:1:9`,()=>r(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>r(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>r(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>r(`preview`)),tabSnapStart:g(`ref:1:13`,()=>r(`preview`))})));return d(r=>{let p=n(),g=s(`rue:component:anchor`);return o(p,g),m(h(S,{children:d(()=>{let r=n(),d=e(`div`,r);o(r,d),l(d,`max-w-none prose prose-sm md:prose-base`);let p=e(`h1`,d);o(d,p),o(p,u(`Timeline 时间线`));let g=e(`p`,d);o(d,g),l(g,`text-sm mt-3 mb-3`),o(g,u(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let S=e(`div`,d);o(d,S),l(S,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=e(`div`,S);o(S,O),l(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=e(`div`,O);o(O,k),l(k,`badge badge-info badge-soft badge-sm`),o(k,u(`数据驱动`));let A=e(`div`,O);o(O,A),l(A,`mt-3 font-medium`),o(A,u(`items、mode、reverse`));let j=e(`p`,O);o(O,j),l(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),o(j,u(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=e(`div`,S);o(S,M),l(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=e(`div`,M);o(M,N),l(N,`badge badge-secondary badge-soft badge-sm`),o(N,u(`精细布局`));let P=e(`div`,M);o(M,P),l(P,`mt-3 font-medium`),o(P,u(`Start / Middle / End`));let F=e(`p`,M);o(M,F),l(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),o(F,u(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=e(`div`,S);o(S,I),l(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=e(`div`,I);o(I,L),l(L,`badge badge-warning badge-soft badge-sm`),o(L,u(`视觉控制`));let R=e(`div`,I);o(I,R),l(R,`mt-3 font-medium`),o(R,u(`color、snapIcon、compact`));let z=e(`p`,I);o(I,z),l(z,`mt-2 mb-0 text-sm leading-6 opacity-70`),o(z,u(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let V=e(`div`,d);o(d,V),f(V,`role`,`alert`),l(V,`alert alert-soft alert-info not-prose my-6`);let H=e(`span`,V);o(V,H),l(H,`text-sm leading-6`),o(H,u(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let U=s(`rue:component:anchor`);o(d,U),a(()=>{let e=h(K,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:i,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(B,{className:`min-w-[860px]`,children:ie.map(e=>v(`li`,{children:[e.beforeLine?y(`hr`,{}):null,y(B.Start,{className:G,children:e.year}),y(B.Middle,{children:y(q,{tone:e.tone,label:`✓`})}),y(B.End,{box:!0,children:y(J,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?y(`hr`,{}):null]},e.key))})}),code:fe});t(()=>m(e,d,U))});let W=s(`rue:component:anchor`);o(d,W),a(()=>{let e=h(K,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:c,preview:()=>y(B,{items:ae}),code:pe});t(()=>m(e,d,W))});let Y=s(`rue:component:anchor`);o(d,Y),a(()=>{let e=h(K,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(B,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});t(()=>m(e,d,Y))});let Z=s(`rue:component:anchor`);o(d,Z),a(()=>{let e=h(K,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:b,preview:()=>X({orientation:`horizontal`}),code:he});t(()=>m(e,d,Z))});let Te=s(`rue:component:anchor`);o(d,Te),a(()=>{let e=h(K,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:x,preview:()=>X({orientation:`horizontal`,bottomOnly:!0}),code:ge});t(()=>m(e,d,Te))});let Ee=s(`rue:component:anchor`);o(d,Ee),a(()=>{let e=h(K,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>y(B,{mode:`alternate`,items:oe()}),code:_e});t(()=>m(e,d,Ee))});let De=s(`rue:component:anchor`);o(d,De),a(()=>{let e=h(K,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>y(B,{items:ce()}),code:ve});t(()=>m(e,d,De))});let Oe=s(`rue:component:anchor`);o(d,Oe),a(()=>{let e=h(K,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>X({orientation:`horizontal`,noIcons:!0}),code:ye});t(()=>m(e,d,Oe))});let ke=s(`rue:component:anchor`);o(d,ke),a(()=>{let e=h(K,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>X({orientation:`vertical`}),code:be});t(()=>m(e,d,ke))});let Ae=s(`rue:component:anchor`);o(d,Ae),a(()=>{let e=h(K,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:D,preview:()=>X({orientation:`vertical`,bottomOnly:!0}),code:xe});t(()=>m(e,d,Ae))});let je=s(`rue:component:anchor`);o(d,je),a(()=>{let e=h(K,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:ee,preview:()=>y(B,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});t(()=>m(e,d,je))});let Me=s(`rue:component:anchor`);o(d,Me),a(()=>{let e=h(K,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:te,preview:()=>y(B,{orientation:`vertical`,items:ce()}),code:Ce});t(()=>m(e,d,Me))});let Ne=s(`rue:component:anchor`);o(d,Ne),a(()=>{let e=h(K,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:ne,preview:()=>y(B,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});t(()=>m(e,d,Ne))});let Pe=e(`h2`,d);o(d,Pe),o(Pe,u(`增强能力`));let Fe=e(`p`,d);o(d,Fe),l(Fe,`text-sm opacity-80`),o(Fe,u("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=s(`rue:component:anchor`);o(d,Ie),a(()=>{let e=h(K,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(B,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});t(()=>m(e,d,Ie))});let Q=e(`div`,d);o(d,Q),l(Q,`my-10 lg:my-14`);let Le=e(`h2`,Q);o(Q,Le),o(Le,u(`API`));let Re=e(`p`,Q);o(Q,Re),l(Re,`text-sm leading-6 opacity-70`),o(Re,u(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let ze=e(`h3`,Q);o(Q,ze),l(ze,`mt-6`),o(ze,u(`Timeline`));let Be=s(`rue:component:anchor`);o(Q,Be),a(()=>{let e=h(re,{rows:ue});t(()=>m(e,Q,Be))});let $=e(`h3`,Q);o(Q,$),l($,`mt-8`),o($,u(`TimelineItemProps`));let Ve=s(`rue:component:anchor`);return o(Q,Ve),a(()=>{let e=h(re,{rows:de});t(()=>m(e,Q,Ve))}),r})}),p,g),p})};export{Z as default};
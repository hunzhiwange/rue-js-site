import{$ as e,B as t,C as n,Dt as r,G as i,H as a,U as o,W as s,Z as c,ht as l,l as u,lt as d,s as f,t as p,wt as m,yt as h}from"./vapor-runtime-C1rlwc61.js";import{a as g,n as _}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as v}from"./Code-BCLFq1E3.js";import{n as y,t as b}from"./src-BLzF0BqW.js";import{n as x}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as S}from"./tabs-BOxm6iIN.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):D(e)?[e]:[],D=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),O=({className:e})=>b(`span`,{className:T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e)}),k=({className:e})=>b(`span`,{className:T(`loading loading-spinner loading-xs`,e)}),A=e=>T(e.lineClassName,e.color?w[e.color]:void 0),j=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},M=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(D(e.icon))return{className:r,content:e.icon};if(D(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:b(k,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:b(`span`,{style:{color:e.color},children:b(O,{})})};if(t)return{className:r,content:b(O,{})}},N=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=D(n)&&r!==n;if(!D(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},P=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!D(t),contentBox:!0,liClassName:`opacity-80`}:null,F=(e,t,n,r,i)=>{let a=e.slice(),o=P(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:N(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:M(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:A(e),lineStyle:j(e)}})},I=({box:e,className:t,children:n})=>b(`div`,{className:T(`timeline-start`,e&&`timeline-box`,t),children:n}),L=({className:e,children:t})=>b(`div`,{className:T(`timeline-middle`,e),children:t}),R=({box:e,className:t,children:n})=>b(`div`,{className:T(`timeline-end`,e&&`timeline-box`,t),children:n}),z=(e,t)=>y(`li`,{className:e.liClassName,children:[e.beforeLine?b(`hr`,{className:e.lineClassName,style:e.lineStyle}):null,e.start?b(I,{box:e.start.box,className:e.start.className,children:e.start.content}):null,e.middle?b(L,{className:e.middle.className,children:e.middle.content}):null,e.end?b(R,{box:e.end.box,className:e.end.className,children:e.end.content}):null,e.afterLine?b(`hr`,{className:e.lineClassName,style:e.lineStyle}):null]},e.key??t),B=Object.assign(({direction:e,orientation:t,mode:r,snapIcon:i,compact:a,reverse:o,pending:s,pendingDot:c,className:l,children:u,items:d})=>{let f=ee(e,t),p=T(`timeline`,f&&`timeline-${f}`,i&&`timeline-snap-icon`,a&&`timeline-compact`,l);if(d&&d.length){let e=F(d,r,o,s,c);return n(`ul`,{className:p},...e.map(z))}if(s){let e=F([],r,o,s,c);return n(`ul`,{className:p},...e.map(z))}return n(`ul`,{className:p},...E(u))},{Start:I,Middle:L,End:R}),V=(...e)=>e.filter(Boolean).join(` `),H={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},U={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},W={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},G=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,K=n=>u(c=>{let l=s(`div`,c);e(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let d=s(`div`,l);t(l,d),e(d,`flex flex-wrap items-start justify-between gap-3`);let m=s(`div`,d);t(d,m);let g=s(`h2`,m);t(m,g),e(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(g,i(`# `));let _=a(`rue:slot:anchor`);t(g,_),r(()=>{let e=n.title;h(()=>f(e,g,_))});let y=a(`rue:slot:anchor`);t(m,y),r(()=>{let i=n.summary?u(()=>{let i=o(),c=s(`p`,i);t(i,c),e(c,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let l=a(`rue:slot:anchor`);return t(c,l),r(()=>{let e=n.summary;h(()=>f(e,c,l))}),i}):``;h(()=>f(i,m,y))});let b=a(`rue:component:anchor`);t(l,b),r(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});h(()=>f(e,l,b))});let x=a(`rue:slot:anchor`);return t(l,x),r(()=>{let e=n.tab.value===`preview`?n.preview():u(()=>{let e=o(),i=a(`rue:component:anchor`);return t(e,i),r(()=>{let t=p(v,{className:`mt-2`,lang:`tsx`,code:n.code});h(()=>f(t,e,i))}),e});h(()=>f(e,l,x))}),l}),re=n=>u(l=>{let d=s(`div`,l);e(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=s(`table`,d);t(d,p),e(p,`table table-zebra`);let m=s(`thead`,p);t(p,m);let g=s(`tr`,m);t(m,g);let v=s(`th`,g);t(g,v),t(v,i(`属性`));let y=s(`th`,g);t(g,y),t(y,i(`说明`));let b=s(`th`,g);t(g,b),t(b,i(`类型`));let x=s(`th`,g);t(g,x),t(x,i(`默认值`));let S=s(`tbody`,p);t(p,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return r(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,i,l,d)=>{f(u(()=>{let n=o(),i=s(`tr`,n);t(n,i),r(()=>{c(i,`key`,String(e.prop))});let l=s(`td`,i);t(i,l);let u=s(`code`,l);t(l,u);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let t=e.prop;h(()=>f(t,u,d))});let p=s(`td`,i);t(i,p);let m=a(`rue:slot:anchor`);t(p,m),r(()=>{let t=e.description;h(()=>f(t,p,m))});let g=s(`td`,i);t(i,g);let _=s(`code`,g);t(g,_);let v=a(`rue:slot:anchor`);t(_,v),r(()=>{let t=e.type;h(()=>f(t,_,v))});let y=s(`td`,i);t(i,y);let b=s(`code`,y);t(y,b);let x=a(`rue:slot:anchor`);return t(b,x),r(()=>{let t=e.defaultValue;h(()=>f(t,b,x))}),n}),n,i)}})}),d}),q=n=>u(i=>{let o=s(`span`,i);r(()=>{e(o,String(V(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,H[n.tone===void 0?`primary`:n.tone])))});let c=a(`rue:slot:anchor`);return t(o,c),r(()=>{let e=n.label===void 0?`•`:n.label;h(()=>f(e,o,c))}),o}),J=n=>u(i=>{let o=s(`div`,i);e(o,`space-y-2 text-left`);let c=s(`div`,o);t(o,c),r(()=>{e(c,String(V(`badge badge-sm`,U[n.tone===void 0?`primary`:n.tone])))});let l=a(`rue:slot:anchor`);t(c,l),r(()=>{let e=n.badge;h(()=>f(e,c,l))});let u=s(`div`,o);t(o,u),e(u,`font-medium leading-5`);let d=a(`rue:slot:anchor`);t(u,d),r(()=>{let e=n.title;h(()=>f(e,u,d))});let p=s(`div`,o);t(o,p),e(p,`text-xs leading-5 opacity-70`);let m=a(`rue:slot:anchor`);return t(p,m),r(()=>{let e=n.summary;h(()=>f(e,p,m))}),o}),Y=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=Y.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=Y.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:G,content:e.year},middle:{content:b(q,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:b(J,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:b(J,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:b(J,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:b(J,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:b(J,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:b(J,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>Y.slice(0,4).map(e=>({key:`${e.year}-color`,title:b(`span`,{className:V(`badge badge-sm`,U[e.tone]),children:e.badge}),content:b(J,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:b(J,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:b(q,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:b(J,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:b(q,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:b(J,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:b(q,{tone:`success`,label:`3`})}],X=n=>{let{isVertical:l}=g(`useSetup:0:0`,()=>m(()=>({isVertical:g(`computed:1:0`,()=>d(()=>(n.orientation===void 0?`horizontal`:n.orientation)===`vertical`))})));return u(d=>{let m=s(`div`,d);r(()=>{e(m,String(l.get()?``:`overflow-x-auto pb-2`))});let g=a(`rue:component:anchor`);return t(m,g),r(()=>{let d=p(B,{orientation:l.get()?`vertical`:void 0,snapIcon:n.snapIcon,compact:n.compact,className:l.get()?`max-w-3xl`:`min-w-[860px]`,children:u(()=>{let l=o(),d=a(`rue:list:start`),m=a(`rue:list:end`);t(l,d),t(l,m);let g=new Map;return r(()=>{g=_({items:Y||[],getKey:(e,t)=>`${n.orientation===void 0?`horizontal`:n.orientation}-${e.year}-${n.bottomOnly?`end`:`full`}`,elements:g,parent:d.parentNode,before:m,singleRoot:!0,start:d,renderItem:(l,d,m,g,_)=>{f(u(()=>{let d=o(),m=_>0,g=_<Y.length-1,v=n.colored?W[l.tone]:void 0,y=!!n.alternate&&_%2==0,b=s(`li`,d);t(d,b),r(()=>{c(b,`key`,String(`${n.orientation===void 0?`horizontal`:n.orientation}-${l.year}-${n.bottomOnly?`end`:`full`}`))});let x=a(`rue:slot:anchor`);t(b,x),r(()=>{let n=m?u(()=>{let n=o(),i=s(`hr`,n);return t(n,i),r(()=>{e(i,String(v))}),n}):``;h(()=>f(n,b,x))}),t(b,i(` `));let S=a(`rue:slot:anchor`);t(b,S),r(()=>{let e=n.bottomOnly?``:u(y?()=>{let e=o(),n=a(`rue:component:anchor`);t(e,n);let i=p(J,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return r(()=>{let t=p(B.Start,{box:!0,children:i});h(()=>f(t,e,n))}),e}:()=>{let e=o(),n=a(`rue:component:anchor`);return t(e,n),r(()=>{let t=p(B.Start,{className:G,children:l.year});h(()=>f(t,e,n))}),e});h(()=>f(e,b,S))}),t(b,i(` `));let C=a(`rue:slot:anchor`);t(b,C),r(()=>{let e=n.noIcons?``:u(()=>{let e=o(),n=a(`rue:component:anchor`);t(e,n);let r=p(q,{tone:l.tone,label:String(_+1)});return f(p(B.Middle,{children:r}),e,n),e});h(()=>f(e,b,C))}),t(b,i(` `));let w=a(`rue:slot:anchor`);t(b,w),r(()=>{let e=n.bottomOnly?u(()=>{let e=o(),n=a(`rue:component:anchor`);t(e,n);let i=p(J,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return r(()=>{let t=p(B.End,{box:!0,children:i});h(()=>f(t,e,n))}),e}):u(y?()=>{let e=o(),n=a(`rue:component:anchor`);return t(e,n),r(()=>{let t=p(B.End,{className:G,children:l.year});h(()=>f(t,e,n))}),e}:()=>{let e=o(),n=a(`rue:component:anchor`);t(e,n);let i=p(J,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return r(()=>{let t=p(B.End,{box:!0,children:i});h(()=>f(t,e,n))}),e});h(()=>f(e,b,w))}),t(b,i(` `));let T=a(`rue:slot:anchor`);return t(b,T),r(()=>{let n=g?u(()=>{let n=o(),i=s(`hr`,n);return t(n,i),r(()=>{e(i,String(v))}),n}):``;h(()=>f(n,b,T))}),d}),d,m)}})}),l})});h(()=>f(d,m,g))}),m})},ue=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,Z=()=>{let{tabArray:n,tabArrayInternal:d,tabDataApi:_,tabBothSides:v,tabBottomOnly:S,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:D,tabVDifferentSides:ee,tabVColorfulLines:te,tabSnapStart:ne}=g(`useSetup:0:0:dup1`,()=>m(()=>({tabArray:g(`ref:1:1`,()=>l(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>l(`preview`)),tabDataApi:g(`ref:1:3`,()=>l(`preview`)),tabBothSides:g(`ref:1:4`,()=>l(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>l(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>l(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>l(`preview`)),tabNoIcons:g(`ref:1:8`,()=>l(`preview`)),tabVBothSides:g(`ref:1:9`,()=>l(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>l(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>l(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>l(`preview`)),tabSnapStart:g(`ref:1:13`,()=>l(`preview`))})));return u(l=>{let m=o(),g=a(`rue:component:anchor`);return t(m,g),f(p(x,{children:u(()=>{let l=o(),u=s(`div`,l);t(l,u),e(u,`max-w-none prose prose-sm md:prose-base`);let m=s(`h1`,u);t(u,m),t(m,i(`Timeline 时间线`));let g=s(`p`,u);t(u,g),e(g,`text-sm mt-3 mb-3`),t(g,i(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let x=s(`div`,u);t(u,x),e(x,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=s(`div`,x);t(x,O),e(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=s(`div`,O);t(O,k),e(k,`badge badge-info badge-soft badge-sm`),t(k,i(`数据驱动`));let A=s(`div`,O);t(O,A),e(A,`mt-3 font-medium`),t(A,i(`items、mode、reverse`));let j=s(`p`,O);t(O,j),e(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),t(j,i(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=s(`div`,x);t(x,M),e(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=s(`div`,M);t(M,N),e(N,`badge badge-secondary badge-soft badge-sm`),t(N,i(`精细布局`));let P=s(`div`,M);t(M,P),e(P,`mt-3 font-medium`),t(P,i(`Start / Middle / End`));let F=s(`p`,M);t(M,F),e(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),t(F,i(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=s(`div`,x);t(x,I),e(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=s(`div`,I);t(I,L),e(L,`badge badge-warning badge-soft badge-sm`),t(L,i(`视觉控制`));let R=s(`div`,I);t(I,R),e(R,`mt-3 font-medium`),t(R,i(`color、snapIcon、compact`));let z=s(`p`,I);t(I,z),e(z,`mt-2 mb-0 text-sm leading-6 opacity-70`),t(z,i(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let V=s(`div`,u);t(u,V),c(V,`role`,`alert`),e(V,`alert alert-soft alert-info not-prose my-6`);let H=s(`span`,V);t(V,H),e(H,`text-sm leading-6`),t(H,i(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let U=a(`rue:component:anchor`);t(u,U),r(()=>{let e=p(K,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:n,preview:()=>b(`div`,{className:`overflow-x-auto pb-2`,children:b(B,{className:`min-w-[860px]`,children:ie.map(e=>y(`li`,{children:[e.beforeLine?b(`hr`,{}):null,b(B.Start,{className:G,children:e.year}),b(B.Middle,{children:b(q,{tone:e.tone,label:`✓`})}),b(B.End,{box:!0,children:b(J,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?b(`hr`,{}):null]},e.key))})}),code:fe});h(()=>f(e,u,U))});let W=a(`rue:component:anchor`);t(u,W),r(()=>{let e=p(K,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:d,preview:()=>b(B,{items:ae}),code:pe});h(()=>f(e,u,W))});let Y=a(`rue:component:anchor`);t(u,Y),r(()=>{let e=p(K,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>b(B,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});h(()=>f(e,u,Y))});let Z=a(`rue:component:anchor`);t(u,Z),r(()=>{let e=p(K,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:v,preview:()=>X({orientation:`horizontal`}),code:he});h(()=>f(e,u,Z))});let Te=a(`rue:component:anchor`);t(u,Te),r(()=>{let e=p(K,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:S,preview:()=>X({orientation:`horizontal`,bottomOnly:!0}),code:ge});h(()=>f(e,u,Te))});let Ee=a(`rue:component:anchor`);t(u,Ee),r(()=>{let e=p(K,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>b(B,{mode:`alternate`,items:oe()}),code:_e});h(()=>f(e,u,Ee))});let De=a(`rue:component:anchor`);t(u,De),r(()=>{let e=p(K,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>b(B,{items:ce()}),code:ve});h(()=>f(e,u,De))});let Oe=a(`rue:component:anchor`);t(u,Oe),r(()=>{let e=p(K,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>X({orientation:`horizontal`,noIcons:!0}),code:ye});h(()=>f(e,u,Oe))});let ke=a(`rue:component:anchor`);t(u,ke),r(()=>{let e=p(K,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>X({orientation:`vertical`}),code:be});h(()=>f(e,u,ke))});let Ae=a(`rue:component:anchor`);t(u,Ae),r(()=>{let e=p(K,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:D,preview:()=>X({orientation:`vertical`,bottomOnly:!0}),code:xe});h(()=>f(e,u,Ae))});let je=a(`rue:component:anchor`);t(u,je),r(()=>{let e=p(K,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:ee,preview:()=>b(B,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});h(()=>f(e,u,je))});let Me=a(`rue:component:anchor`);t(u,Me),r(()=>{let e=p(K,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:te,preview:()=>b(B,{orientation:`vertical`,items:ce()}),code:Ce});h(()=>f(e,u,Me))});let Ne=a(`rue:component:anchor`);t(u,Ne),r(()=>{let e=p(K,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:ne,preview:()=>b(B,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});h(()=>f(e,u,Ne))});let Pe=s(`h2`,u);t(u,Pe),t(Pe,i(`增强能力`));let Fe=s(`p`,u);t(u,Fe),e(Fe,`text-sm opacity-80`),t(Fe,i("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=a(`rue:component:anchor`);t(u,Ie),r(()=>{let e=p(K,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>b(B,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});h(()=>f(e,u,Ie))});let Q=s(`div`,u);t(u,Q),e(Q,`my-10 lg:my-14`);let Le=s(`h2`,Q);t(Q,Le),t(Le,i(`API`));let Re=s(`p`,Q);t(Q,Re),e(Re,`text-sm leading-6 opacity-70`),t(Re,i(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let ze=s(`h3`,Q);t(Q,ze),e(ze,`mt-6`),t(ze,i(`Timeline`));let Be=a(`rue:component:anchor`);t(Q,Be),r(()=>{let e=p(re,{rows:ue});h(()=>f(e,Q,Be))});let $=s(`h3`,Q);t(Q,$),e($,`mt-8`),t($,i(`TimelineItemProps`));let Ve=a(`rue:component:anchor`);return t(Q,Ve),r(()=>{let e=p(re,{rows:de});h(()=>f(e,Q,Ve))}),l})}),m,g),m})};export{Z as default};
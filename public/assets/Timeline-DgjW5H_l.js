import{$ as e,Et as t,G as n,H as r,K as i,T as a,W as o,_t as s,d as c,dt as l,kt as u,l as d,q as f,t as p,tt as m,xt as h}from"./vapor-runtime-ACs_OvwU.js";import{a as g,n as _}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as v,t as y}from"./src-B0RvnZVV.js";import{n as b}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as x}from"./Code-CliOXHNE.js";import{t as S}from"./tabs-CPymQe79.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):D(e)?[e]:[],D=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),O=({className:e})=>y(`span`,{className:T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e)}),k=({className:e})=>y(`span`,{className:T(`loading loading-spinner loading-xs`,e)}),A=e=>T(e.lineClassName,e.color?w[e.color]:void 0),j=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},M=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(D(e.icon))return{className:r,content:e.icon};if(D(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:y(k,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:y(`span`,{style:{color:e.color},children:y(O,{})})};if(t)return{className:r,content:y(O,{})}},N=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=D(n)&&r!==n;if(!D(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},P=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!D(t),contentBox:!0,liClassName:`opacity-80`}:null,F=(e,t,n,r,i)=>{let a=e.slice(),o=P(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:N(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:M(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:A(e),lineStyle:j(e)}})},I=({box:e,className:t,children:n})=>y(`div`,{className:T(`timeline-start`,e&&`timeline-box`,t),children:n}),L=({className:e,children:t})=>y(`div`,{className:T(`timeline-middle`,e),children:t}),R=({box:e,className:t,children:n})=>y(`div`,{className:T(`timeline-end`,e&&`timeline-box`,t),children:n}),z=(e,t)=>v(`li`,{className:e.liClassName,children:[e.beforeLine?y(`hr`,{className:e.lineClassName,style:e.lineStyle}):null,e.start?y(I,{box:e.start.box,className:e.start.className,children:e.start.content}):null,e.middle?y(L,{className:e.middle.className,children:e.middle.content}):null,e.end?y(R,{box:e.end.box,className:e.end.className,children:e.end.content}):null,e.afterLine?y(`hr`,{className:e.lineClassName,style:e.lineStyle}):null]},e.key??t),B=Object.assign(({direction:e,orientation:t,mode:n,snapIcon:r,compact:i,reverse:o,pending:s,pendingDot:c,className:l,children:u,items:d})=>{let f=ee(e,t),p=T(`timeline`,f&&`timeline-${f}`,r&&`timeline-snap-icon`,i&&`timeline-compact`,l);if(d&&d.length){let e=F(d,n,o,s,c);return a(`ul`,{className:p},...e.map(z))}if(s){let e=F([],n,o,s,c);return a(`ul`,{className:p},...e.map(z))}return a(`ul`,{className:p},...E(u))},{Start:I,Middle:L,End:R}),V=(...e)=>e.filter(Boolean).join(` `),H={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},U={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},W={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},G=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,K=e=>c(t=>{let a=i(`div`,t);m(a,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=i(`div`,a);r(a,s),m(s,`flex flex-wrap items-start justify-between gap-3`);let l=i(`div`,s);r(s,l);let g=i(`h2`,l);r(l,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(g,f(`# `));let _=o(`rue:slot:anchor`);r(g,_),u(()=>{let t=e.title;h(()=>d(t,g,_))});let v=o(`rue:slot:anchor`);r(l,v),u(()=>{let t=e.summary?c(()=>{let t=n(),a=i(`p`,t);r(t,a),m(a,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let s=o(`rue:slot:anchor`);return r(a,s),u(()=>{let t=e.summary;h(()=>d(t,a,s))}),t}):``;h(()=>d(t,l,v))});let y=o(`rue:component:anchor`);r(a,y),u(()=>{let t=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});h(()=>d(t,a,y))});let b=o(`rue:slot:anchor`);return r(a,b),u(()=>{let t=e.tab.value===`preview`?e.preview():c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),u(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:e.code});h(()=>d(n,t,i))}),t});h(()=>d(t,a,b))}),a}),re=t=>c(a=>{let s=i(`div`,a);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=i(`table`,s);r(s,l),m(l,`table table-zebra`);let p=i(`thead`,l);r(l,p);let g=i(`tr`,p);r(p,g);let v=i(`th`,g);r(g,v),r(v,f(`属性`));let y=i(`th`,g);r(g,y),r(y,f(`说明`));let b=i(`th`,g);r(g,b),r(b,f(`类型`));let x=i(`th`,g);r(g,x),r(x,f(`默认值`));let S=i(`tbody`,l);r(l,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return u(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,a,s,l,f)=>{d(c(()=>{let a=n(),s=i(`tr`,a);r(a,s),u(()=>{e(s,`key`,String(t.prop))});let c=i(`td`,s);r(s,c);let l=i(`code`,c);r(c,l);let f=o(`rue:slot:anchor`);r(l,f),u(()=>{let e=t.prop;h(()=>d(e,l,f))});let p=i(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),u(()=>{let e=t.description;h(()=>d(e,p,m))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=o(`rue:slot:anchor`);r(_,v),u(()=>{let e=t.type;h(()=>d(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),u(()=>{let e=t.defaultValue;h(()=>d(e,b,x))}),a}),a,s)}})}),s}),q=e=>c(t=>{let n=i(`span`,t);u(()=>{m(n,String(V(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,H[e.tone===void 0?`primary`:e.tone])))});let a=o(`rue:slot:anchor`);return r(n,a),u(()=>{let t=e.label===void 0?`•`:e.label;h(()=>d(t,n,a))}),n}),J=e=>c(t=>{let n=i(`div`,t);m(n,`space-y-2 text-left`);let a=i(`div`,n);r(n,a),u(()=>{m(a,String(V(`badge badge-sm`,U[e.tone===void 0?`primary`:e.tone])))});let s=o(`rue:slot:anchor`);r(a,s),u(()=>{let t=e.badge;h(()=>d(t,a,s))});let c=i(`div`,n);r(n,c),m(c,`font-medium leading-5`);let l=o(`rue:slot:anchor`);r(c,l),u(()=>{let t=e.title;h(()=>d(t,c,l))});let f=i(`div`,n);r(n,f),m(f,`text-xs leading-5 opacity-70`);let p=o(`rue:slot:anchor`);return r(f,p),u(()=>{let t=e.summary;h(()=>d(t,f,p))}),n}),Y=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=Y.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=Y.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:G,content:e.year},middle:{content:y(q,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:y(J,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:y(J,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:y(J,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:y(J,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:y(J,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:y(J,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>Y.slice(0,4).map(e=>({key:`${e.year}-color`,title:y(`span`,{className:V(`badge badge-sm`,U[e.tone]),children:e.badge}),content:y(J,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:y(J,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:y(q,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:y(J,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:y(q,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:y(J,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:y(q,{tone:`success`,label:`3`})}],X=a=>{let{isVertical:s}=g(`useSetup:0:0`,()=>t(()=>({isVertical:g(`computed:1:0`,()=>l(()=>(a.orientation===void 0?`horizontal`:a.orientation)===`vertical`))})));return c(t=>{let l=i(`div`,t);u(()=>{m(l,String(s.get()?``:`overflow-x-auto pb-2`))});let g=o(`rue:component:anchor`);return r(l,g),u(()=>{let t=p(B,{orientation:s.get()?`vertical`:void 0,snapIcon:a.snapIcon,compact:a.compact,className:s.get()?`max-w-3xl`:`min-w-[860px]`,children:c(()=>{let t=n(),s=o(`rue:list:start`),l=o(`rue:list:end`);r(t,s),r(t,l);let g=new Map;return u(()=>{g=_({items:Y||[],getKey:(e,t)=>`${a.orientation===void 0?`horizontal`:a.orientation}-${e.year}-${a.bottomOnly?`end`:`full`}`,elements:g,parent:s.parentNode,before:l,singleRoot:!0,start:s,renderItem:(t,s,l,g,_)=>{d(c(()=>{let s=n(),l=_>0,g=_<Y.length-1,v=a.colored?W[t.tone]:void 0,y=!!a.alternate&&_%2==0,b=i(`li`,s);r(s,b),u(()=>{e(b,`key`,String(`${a.orientation===void 0?`horizontal`:a.orientation}-${t.year}-${a.bottomOnly?`end`:`full`}`))});let x=o(`rue:slot:anchor`);r(b,x),u(()=>{let e=l?c(()=>{let e=n(),t=i(`hr`,e);return r(e,t),u(()=>{m(t,String(v))}),e}):``;h(()=>d(e,b,x))}),r(b,f(` `));let S=o(`rue:slot:anchor`);r(b,S),u(()=>{let e=a.bottomOnly?``:c(y?()=>{let e=n(),i=o(`rue:component:anchor`);r(e,i);let a=p(J,{title:t.title,summary:t.summary,badge:t.badge,tone:t.tone});return u(()=>{let t=p(B.Start,{box:!0,children:a});h(()=>d(t,e,i))}),e}:()=>{let e=n(),i=o(`rue:component:anchor`);return r(e,i),u(()=>{let n=p(B.Start,{className:G,children:t.year});h(()=>d(n,e,i))}),e});h(()=>d(e,b,S))}),r(b,f(` `));let C=o(`rue:slot:anchor`);r(b,C),u(()=>{let e=a.noIcons?``:c(()=>{let e=n(),i=o(`rue:component:anchor`);r(e,i);let a=p(q,{tone:t.tone,label:String(_+1)});return d(p(B.Middle,{children:a}),e,i),e});h(()=>d(e,b,C))}),r(b,f(` `));let w=o(`rue:slot:anchor`);r(b,w),u(()=>{let e=a.bottomOnly?c(()=>{let e=n(),i=o(`rue:component:anchor`);r(e,i);let a=p(J,{title:t.title,summary:t.summary,badge:t.badge,tone:t.tone});return u(()=>{let t=p(B.End,{box:!0,children:a});h(()=>d(t,e,i))}),e}):c(y?()=>{let e=n(),i=o(`rue:component:anchor`);return r(e,i),u(()=>{let n=p(B.End,{className:G,children:t.year});h(()=>d(n,e,i))}),e}:()=>{let e=n(),i=o(`rue:component:anchor`);r(e,i);let a=p(J,{title:t.title,summary:t.summary,badge:t.badge,tone:t.tone});return u(()=>{let t=p(B.End,{box:!0,children:a});h(()=>d(t,e,i))}),e});h(()=>d(e,b,w))}),r(b,f(` `));let T=o(`rue:slot:anchor`);return r(b,T),u(()=>{let e=g?c(()=>{let e=n(),t=i(`hr`,e);return r(e,t),u(()=>{m(t,String(v))}),e}):``;h(()=>d(e,b,T))}),s}),s,l)}})}),t})});h(()=>d(t,l,g))}),l})},ue=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,Z=()=>{let{tabArray:a,tabArrayInternal:l,tabDataApi:_,tabBothSides:x,tabBottomOnly:S,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:D,tabVDifferentSides:ee,tabVColorfulLines:te,tabSnapStart:ne}=g(`useSetup:0:0:dup1`,()=>t(()=>({tabArray:g(`ref:1:1`,()=>s(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>s(`preview`)),tabDataApi:g(`ref:1:3`,()=>s(`preview`)),tabBothSides:g(`ref:1:4`,()=>s(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>s(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>s(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>s(`preview`)),tabNoIcons:g(`ref:1:8`,()=>s(`preview`)),tabVBothSides:g(`ref:1:9`,()=>s(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>s(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>s(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>s(`preview`)),tabSnapStart:g(`ref:1:13`,()=>s(`preview`))})));return c(t=>{let s=n(),g=o(`rue:component:anchor`);return r(s,g),d(p(b,{children:c(()=>{let t=n(),s=i(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let c=i(`h1`,s);r(s,c),r(c,f(`Timeline 时间线`));let g=i(`p`,s);r(s,g),m(g,`text-sm mt-3 mb-3`),r(g,f(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let b=i(`div`,s);r(s,b),m(b,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=i(`div`,b);r(b,O),m(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=i(`div`,O);r(O,k),m(k,`badge badge-info badge-soft badge-sm`),r(k,f(`数据驱动`));let A=i(`div`,O);r(O,A),m(A,`mt-3 font-medium`),r(A,f(`items、mode、reverse`));let j=i(`p`,O);r(O,j),m(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),r(j,f(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=i(`div`,b);r(b,M),m(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=i(`div`,M);r(M,N),m(N,`badge badge-secondary badge-soft badge-sm`),r(N,f(`精细布局`));let P=i(`div`,M);r(M,P),m(P,`mt-3 font-medium`),r(P,f(`Start / Middle / End`));let F=i(`p`,M);r(M,F),m(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),r(F,f(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=i(`div`,b);r(b,I),m(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=i(`div`,I);r(I,L),m(L,`badge badge-warning badge-soft badge-sm`),r(L,f(`视觉控制`));let R=i(`div`,I);r(I,R),m(R,`mt-3 font-medium`),r(R,f(`color、snapIcon、compact`));let z=i(`p`,I);r(I,z),m(z,`mt-2 mb-0 text-sm leading-6 opacity-70`),r(z,f(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let V=i(`div`,s);r(s,V),e(V,`role`,`alert`),m(V,`alert alert-soft alert-info not-prose my-6`);let H=i(`span`,V);r(V,H),m(H,`text-sm leading-6`),r(H,f(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let U=o(`rue:component:anchor`);r(s,U),u(()=>{let e=p(K,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:a,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(B,{className:`min-w-[860px]`,children:ie.map(e=>v(`li`,{children:[e.beforeLine?y(`hr`,{}):null,y(B.Start,{className:G,children:e.year}),y(B.Middle,{children:y(q,{tone:e.tone,label:`✓`})}),y(B.End,{box:!0,children:y(J,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?y(`hr`,{}):null]},e.key))})}),code:fe});h(()=>d(e,s,U))});let W=o(`rue:component:anchor`);r(s,W),u(()=>{let e=p(K,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:l,preview:()=>y(B,{items:ae}),code:pe});h(()=>d(e,s,W))});let Y=o(`rue:component:anchor`);r(s,Y),u(()=>{let e=p(K,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(B,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});h(()=>d(e,s,Y))});let Z=o(`rue:component:anchor`);r(s,Z),u(()=>{let e=p(K,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:x,preview:()=>X({orientation:`horizontal`}),code:he});h(()=>d(e,s,Z))});let Te=o(`rue:component:anchor`);r(s,Te),u(()=>{let e=p(K,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:S,preview:()=>X({orientation:`horizontal`,bottomOnly:!0}),code:ge});h(()=>d(e,s,Te))});let Ee=o(`rue:component:anchor`);r(s,Ee),u(()=>{let e=p(K,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>y(B,{mode:`alternate`,items:oe()}),code:_e});h(()=>d(e,s,Ee))});let De=o(`rue:component:anchor`);r(s,De),u(()=>{let e=p(K,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>y(B,{items:ce()}),code:ve});h(()=>d(e,s,De))});let Oe=o(`rue:component:anchor`);r(s,Oe),u(()=>{let e=p(K,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>X({orientation:`horizontal`,noIcons:!0}),code:ye});h(()=>d(e,s,Oe))});let ke=o(`rue:component:anchor`);r(s,ke),u(()=>{let e=p(K,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>X({orientation:`vertical`}),code:be});h(()=>d(e,s,ke))});let Ae=o(`rue:component:anchor`);r(s,Ae),u(()=>{let e=p(K,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:D,preview:()=>X({orientation:`vertical`,bottomOnly:!0}),code:xe});h(()=>d(e,s,Ae))});let je=o(`rue:component:anchor`);r(s,je),u(()=>{let e=p(K,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:ee,preview:()=>y(B,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});h(()=>d(e,s,je))});let Me=o(`rue:component:anchor`);r(s,Me),u(()=>{let e=p(K,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:te,preview:()=>y(B,{orientation:`vertical`,items:ce()}),code:Ce});h(()=>d(e,s,Me))});let Ne=o(`rue:component:anchor`);r(s,Ne),u(()=>{let e=p(K,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:ne,preview:()=>y(B,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});h(()=>d(e,s,Ne))});let Pe=i(`h2`,s);r(s,Pe),r(Pe,f(`增强能力`));let Fe=i(`p`,s);r(s,Fe),m(Fe,`text-sm opacity-80`),r(Fe,f("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=o(`rue:component:anchor`);r(s,Ie),u(()=>{let e=p(K,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(B,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});h(()=>d(e,s,Ie))});let Q=i(`div`,s);r(s,Q),m(Q,`my-10 lg:my-14`);let Le=i(`h2`,Q);r(Q,Le),r(Le,f(`API`));let Re=i(`p`,Q);r(Q,Re),m(Re,`text-sm leading-6 opacity-70`),r(Re,f(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let ze=i(`h3`,Q);r(Q,ze),m(ze,`mt-6`),r(ze,f(`Timeline`));let Be=o(`rue:component:anchor`);r(Q,Be),u(()=>{let e=p(re,{rows:ue});h(()=>d(e,Q,Be))});let $=i(`h3`,Q);r(Q,$),m($,`mt-8`),r($,f(`TimelineItemProps`));let Ve=o(`rue:component:anchor`);return r(Q,Ve),u(()=>{let e=p(re,{rows:de});h(()=>d(e,Q,Ve))}),t})}),s,g),s})};export{Z as default};
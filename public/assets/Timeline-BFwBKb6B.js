import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,d as s,dt as c,ht as l,l as u,rt as d,st as f,t as p,v as m,vt as h}from"./vapor-runtime-BuwLbCGk.js";import{a as g,n as _}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as v,t as y}from"./src-BQwLQD8R.js";import{n as b}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as x}from"./Code-DQxnq0in.js";import{t as S}from"./tabs-DqfJzZfa.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>Array.isArray(e)?e.flatMap(e=>E(e)):D(e)?[e]:[],D=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),O=({className:e})=>y(`span`,{className:T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e)}),k=({className:e})=>y(`span`,{className:T(`loading loading-spinner loading-xs`,e)}),A=e=>T(e.lineClassName,e.color?w[e.color]:void 0),j=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},M=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(D(e.icon))return{className:r,content:e.icon};if(D(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:y(k,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:y(`span`,{style:{color:e.color},children:y(O,{})})};if(t)return{className:r,content:y(O,{})}},N=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=D(n)&&r!==n;if(!D(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},P=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!D(t),contentBox:!0,liClassName:`opacity-80`}:null,F=(e,t,n,r,i)=>{let a=e.slice(),o=P(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:N(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:M(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:A(e),lineStyle:j(e)}})},I=({box:e,className:t,children:n})=>y(`div`,{className:T(`timeline-start`,e&&`timeline-box`,t),children:n}),L=({className:e,children:t})=>y(`div`,{className:T(`timeline-middle`,e),children:t}),R=({box:e,className:t,children:n})=>y(`div`,{className:T(`timeline-end`,e&&`timeline-box`,t),children:n}),z=(e,t)=>v(`li`,{className:e.liClassName,children:[e.beforeLine?y(`hr`,{className:e.lineClassName,style:e.lineStyle}):null,e.start?y(I,{box:e.start.box,className:e.start.className,children:e.start.content}):null,e.middle?y(L,{className:e.middle.className,children:e.middle.content}):null,e.end?y(R,{box:e.end.box,className:e.end.className,children:e.end.content}):null,e.afterLine?y(`hr`,{className:e.lineClassName,style:e.lineStyle}):null]},e.key??t),B=Object.assign(({direction:e,orientation:t,mode:n,snapIcon:r,compact:i,reverse:a,pending:o,pendingDot:s,className:c,children:l,items:u})=>{let d=ee(e,t),f=T(`timeline`,d&&`timeline-${d}`,r&&`timeline-snap-icon`,i&&`timeline-compact`,c);if(u&&u.length){let e=F(u,n,a,o,s);return m(`ul`,{className:f},...e.map(z))}if(o){let e=F([],n,a,o,s);return m(`ul`,{className:f},...e.map(z))}return m(`ul`,{className:f},...E(l))},{Start:I,Middle:L,End:R}),V=(...e)=>e.filter(Boolean).join(` `),H={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},U={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},W={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},G=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,K=o=>s(l=>{let d=r(`div`,l);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let f=r(`div`,d);i(d,f),n(f,`flex flex-wrap items-start justify-between gap-3`);let m=r(`div`,f);i(f,m);let g=r(`h2`,m);i(m,g),n(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,a(`# `));let _=e(`rue:slot:anchor`);i(g,_),h(()=>{let e=o.title;c(()=>u(e,g,_))});let v=e(`rue:slot:anchor`);i(m,v),h(()=>{let a=o.summary?s(()=>{let a=t(),s=r(`p`,a);i(a,s),n(s,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let l=e(`rue:slot:anchor`);return i(s,l),h(()=>{let e=o.summary;c(()=>u(e,s,l))}),a}):``;c(()=>u(a,m,v))});let y=e(`rue:component:anchor`);i(d,y),h(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});c(()=>u(e,d,y))});let b=e(`rue:slot:anchor`);return i(d,b),h(()=>{let n=o.tab.value===`preview`?o.preview():s(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),h(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:o.code});c(()=>u(e,n,r))}),n});c(()=>u(n,d,b))}),d}),re=l=>s(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let v=r(`th`,g);i(g,v),i(v,a(`属性`));let y=r(`th`,g);i(g,y),i(y,a(`说明`));let b=r(`th`,g);i(g,b),i(b,a(`类型`));let x=r(`th`,g);i(g,x),i(x,a(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return h(()=>{T=_({items:l.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,l,d,f)=>{u(s(()=>{let a=t(),s=r(`tr`,a);i(a,s),h(()=>{o(s,`key`,String(n.prop))});let l=r(`td`,s);i(s,l);let d=r(`code`,l);i(l,d);let f=e(`rue:slot:anchor`);i(d,f),h(()=>{let e=n.prop;c(()=>u(e,d,f))});let p=r(`td`,s);i(s,p);let m=e(`rue:slot:anchor`);i(p,m),h(()=>{let e=n.description;c(()=>u(e,p,m))});let g=r(`td`,s);i(s,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),h(()=>{let e=n.type;c(()=>u(e,_,v))});let y=r(`td`,s);i(s,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),h(()=>{let e=n.defaultValue;c(()=>u(e,b,x))}),a}),a,l)}})}),f}),q=t=>s(a=>{let o=r(`span`,a);h(()=>{n(o,String(V(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,H[t.tone===void 0?`primary`:t.tone])))});let s=e(`rue:slot:anchor`);return i(o,s),h(()=>{let e=t.label===void 0?`•`:t.label;c(()=>u(e,o,s))}),o}),J=t=>s(a=>{let o=r(`div`,a);n(o,`space-y-2 text-left`);let s=r(`div`,o);i(o,s),h(()=>{n(s,String(V(`badge badge-sm`,U[t.tone===void 0?`primary`:t.tone])))});let l=e(`rue:slot:anchor`);i(s,l),h(()=>{let e=t.badge;c(()=>u(e,s,l))});let d=r(`div`,o);i(o,d),n(d,`font-medium leading-5`);let f=e(`rue:slot:anchor`);i(d,f),h(()=>{let e=t.title;c(()=>u(e,d,f))});let p=r(`div`,o);i(o,p),n(p,`text-xs leading-5 opacity-70`);let m=e(`rue:slot:anchor`);return i(p,m),h(()=>{let e=t.summary;c(()=>u(e,p,m))}),o}),Y=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=Y.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=Y.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:G,content:e.year},middle:{content:y(q,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:y(J,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:y(J,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:y(J,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:y(J,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:y(J,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:y(J,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>Y.slice(0,4).map(e=>({key:`${e.year}-color`,title:y(`span`,{className:V(`badge badge-sm`,U[e.tone]),children:e.badge}),content:y(J,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:y(J,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:y(q,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:y(J,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:y(q,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:y(J,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:y(q,{tone:`success`,label:`3`})}],X=f=>{let{isVertical:m}=g(`useSetup:0:0`,()=>l(()=>({isVertical:g(`computed:1:0`,()=>d(()=>(f.orientation===void 0?`horizontal`:f.orientation)===`vertical`))})));return s(l=>{let d=r(`div`,l);h(()=>{n(d,String(m.get()?``:`overflow-x-auto pb-2`))});let g=e(`rue:component:anchor`);return i(d,g),h(()=>{let l=p(B,{orientation:m.get()?`vertical`:void 0,snapIcon:f.snapIcon,compact:f.compact,className:m.get()?`max-w-3xl`:`min-w-[860px]`,children:s(()=>{let l=t(),d=e(`rue:list:start`),m=e(`rue:list:end`);i(l,d),i(l,m);let g=new Map;return h(()=>{g=_({items:Y||[],getKey:(e,t)=>`${f.orientation===void 0?`horizontal`:f.orientation}-${e.year}-${f.bottomOnly?`end`:`full`}`,elements:g,parent:d.parentNode,before:m,singleRoot:!0,start:d,renderItem:(l,d,m,g,_)=>{u(s(()=>{let d=t(),m=_>0,g=_<Y.length-1,v=f.colored?W[l.tone]:void 0,y=!!f.alternate&&_%2==0,b=r(`li`,d);i(d,b),h(()=>{o(b,`key`,String(`${f.orientation===void 0?`horizontal`:f.orientation}-${l.year}-${f.bottomOnly?`end`:`full`}`))});let x=e(`rue:slot:anchor`);i(b,x),h(()=>{let e=m?s(()=>{let e=t(),a=r(`hr`,e);return i(e,a),h(()=>{n(a,String(v))}),e}):``;c(()=>u(e,b,x))}),i(b,a(` `));let S=e(`rue:slot:anchor`);i(b,S),h(()=>{let n=f.bottomOnly?``:s(y?()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r);let a=p(J,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return h(()=>{let e=p(B.Start,{box:!0,children:a});c(()=>u(e,n,r))}),n}:()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),h(()=>{let e=p(B.Start,{className:G,children:l.year});c(()=>u(e,n,r))}),n});c(()=>u(n,b,S))}),i(b,a(` `));let C=e(`rue:slot:anchor`);i(b,C),h(()=>{let n=f.noIcons?``:s(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r);let a=p(q,{tone:l.tone,label:String(_+1)});return u(p(B.Middle,{children:a}),n,r),n});c(()=>u(n,b,C))}),i(b,a(` `));let w=e(`rue:slot:anchor`);i(b,w),h(()=>{let n=f.bottomOnly?s(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r);let a=p(J,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return h(()=>{let e=p(B.End,{box:!0,children:a});c(()=>u(e,n,r))}),n}):s(y?()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),h(()=>{let e=p(B.End,{className:G,children:l.year});c(()=>u(e,n,r))}),n}:()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r);let a=p(J,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return h(()=>{let e=p(B.End,{box:!0,children:a});c(()=>u(e,n,r))}),n});c(()=>u(n,b,w))}),i(b,a(` `));let T=e(`rue:slot:anchor`);return i(b,T),h(()=>{let e=g?s(()=>{let e=t(),a=r(`hr`,e);return i(e,a),h(()=>{n(a,String(v))}),e}):``;c(()=>u(e,b,T))}),d}),d,m)}})}),l})});c(()=>u(l,d,g))}),d})},ue=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,Z=()=>{let{tabArray:d,tabArrayInternal:m,tabDataApi:_,tabBothSides:x,tabBottomOnly:S,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:D,tabVDifferentSides:ee,tabVColorfulLines:te,tabSnapStart:ne}=g(`useSetup:0:0:dup1`,()=>l(()=>({tabArray:g(`ref:1:1`,()=>f(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>f(`preview`)),tabDataApi:g(`ref:1:3`,()=>f(`preview`)),tabBothSides:g(`ref:1:4`,()=>f(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>f(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>f(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>f(`preview`)),tabNoIcons:g(`ref:1:8`,()=>f(`preview`)),tabVBothSides:g(`ref:1:9`,()=>f(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>f(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>f(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>f(`preview`)),tabSnapStart:g(`ref:1:13`,()=>f(`preview`))})));return s(l=>{let f=t(),g=e(`rue:component:anchor`);return i(f,g),u(p(b,{children:s(()=>{let s=t(),l=r(`div`,s);i(s,l),n(l,`max-w-none prose prose-sm md:prose-base`);let f=r(`h1`,l);i(l,f),i(f,a(`Timeline 时间线`));let g=r(`p`,l);i(l,g),n(g,`text-sm mt-3 mb-3`),i(g,a(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let b=r(`div`,l);i(l,b),n(b,`text-sm`);let O=r(`a`,b);i(b,O),o(O,`href`,`https://daisyui.com/components/timeline/`),o(O,`target`,`_blank`),o(O,`rel`,`noreferrer`),i(O,a(`查看 Timeline 静态样式`));let k=r(`div`,l);i(l,k),n(k,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let A=r(`div`,k);i(k,A),n(A,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let j=r(`div`,A);i(A,j),n(j,`badge badge-info badge-soft badge-sm`),i(j,a(`数据驱动`));let M=r(`div`,A);i(A,M),n(M,`mt-3 font-medium`),i(M,a(`items、mode、reverse`));let N=r(`p`,A);i(A,N),n(N,`mt-2 mb-0 text-sm leading-6 opacity-70`),i(N,a(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let P=r(`div`,k);i(k,P),n(P,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let F=r(`div`,P);i(P,F),n(F,`badge badge-secondary badge-soft badge-sm`),i(F,a(`精细布局`));let I=r(`div`,P);i(P,I),n(I,`mt-3 font-medium`),i(I,a(`Start / Middle / End`));let L=r(`p`,P);i(P,L),n(L,`mt-2 mb-0 text-sm leading-6 opacity-70`),i(L,a(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let R=r(`div`,k);i(k,R),n(R,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let z=r(`div`,R);i(R,z),n(z,`badge badge-warning badge-soft badge-sm`),i(z,a(`视觉控制`));let V=r(`div`,R);i(R,V),n(V,`mt-3 font-medium`),i(V,a(`color、snapIcon、compact`));let H=r(`p`,R);i(R,H),n(H,`mt-2 mb-0 text-sm leading-6 opacity-70`),i(H,a(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let U=r(`div`,l);i(l,U),o(U,`role`,`alert`),n(U,`alert alert-soft alert-info not-prose my-6`);let W=r(`span`,U);i(U,W),n(W,`text-sm leading-6`),i(W,a(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let Y=e(`rue:component:anchor`);i(l,Y),h(()=>{let e=p(K,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:d,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(B,{className:`min-w-[860px]`,children:ie.map(e=>v(`li`,{children:[e.beforeLine?y(`hr`,{}):null,y(B.Start,{className:G,children:e.year}),y(B.Middle,{children:y(q,{tone:e.tone,label:`✓`})}),y(B.End,{box:!0,children:y(J,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?y(`hr`,{}):null]},e.key))})}),code:fe});c(()=>u(e,l,Y))});let Z=e(`rue:component:anchor`);i(l,Z),h(()=>{let e=p(K,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:m,preview:()=>y(B,{items:ae}),code:pe});c(()=>u(e,l,Z))});let Te=e(`rue:component:anchor`);i(l,Te),h(()=>{let e=p(K,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(B,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});c(()=>u(e,l,Te))});let Ee=e(`rue:component:anchor`);i(l,Ee),h(()=>{let e=p(K,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:x,preview:()=>X({orientation:`horizontal`}),code:he});c(()=>u(e,l,Ee))});let De=e(`rue:component:anchor`);i(l,De),h(()=>{let e=p(K,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:S,preview:()=>X({orientation:`horizontal`,bottomOnly:!0}),code:ge});c(()=>u(e,l,De))});let Oe=e(`rue:component:anchor`);i(l,Oe),h(()=>{let e=p(K,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>y(B,{mode:`alternate`,items:oe()}),code:_e});c(()=>u(e,l,Oe))});let ke=e(`rue:component:anchor`);i(l,ke),h(()=>{let e=p(K,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>y(B,{items:ce()}),code:ve});c(()=>u(e,l,ke))});let Ae=e(`rue:component:anchor`);i(l,Ae),h(()=>{let e=p(K,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>X({orientation:`horizontal`,noIcons:!0}),code:ye});c(()=>u(e,l,Ae))});let je=e(`rue:component:anchor`);i(l,je),h(()=>{let e=p(K,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>X({orientation:`vertical`}),code:be});c(()=>u(e,l,je))});let Me=e(`rue:component:anchor`);i(l,Me),h(()=>{let e=p(K,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:D,preview:()=>X({orientation:`vertical`,bottomOnly:!0}),code:xe});c(()=>u(e,l,Me))});let Ne=e(`rue:component:anchor`);i(l,Ne),h(()=>{let e=p(K,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:ee,preview:()=>y(B,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});c(()=>u(e,l,Ne))});let Pe=e(`rue:component:anchor`);i(l,Pe),h(()=>{let e=p(K,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:te,preview:()=>y(B,{orientation:`vertical`,items:ce()}),code:Ce});c(()=>u(e,l,Pe))});let Fe=e(`rue:component:anchor`);i(l,Fe),h(()=>{let e=p(K,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:ne,preview:()=>y(B,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});c(()=>u(e,l,Fe))});let Ie=r(`h2`,l);i(l,Ie),i(Ie,a(`增强能力`));let Q=r(`p`,l);i(l,Q),n(Q,`text-sm opacity-80`),i(Q,a("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Le=e(`rue:component:anchor`);i(l,Le),h(()=>{let e=p(K,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(B,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});c(()=>u(e,l,Le))});let $=r(`div`,l);i(l,$),n($,`my-10 lg:my-14`);let Re=r(`h2`,$);i($,Re),i(Re,a(`API`));let ze=r(`p`,$);i($,ze),n(ze,`text-sm leading-6 opacity-70`),i(ze,a(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let Be=r(`h3`,$);i($,Be),n(Be,`mt-6`),i(Be,a(`Timeline`));let Ve=e(`rue:component:anchor`);i($,Ve),h(()=>{let e=p(re,{rows:ue});c(()=>u(e,$,Ve))});let He=r(`h3`,$);i($,He),n(He,`mt-8`),i(He,a(`TimelineItemProps`));let Ue=e(`rue:component:anchor`);return i($,Ue),h(()=>{let e=p(re,{rows:de});c(()=>u(e,$,Ue))}),s})}),f,g),f})};export{Z as default};
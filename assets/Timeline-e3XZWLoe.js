import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,_ as c,c as l,j as u,l as d,pt as f,rt as p,t as m,u as h,ut as g}from"./vapor-runtime-BZZbPG7x.js";import{a as _,n as v}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as y,t as b}from"./src-DP0sEeZS.js";import{n as x}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as S}from"./Code-C8wy38VS.js";import{t as C}from"./tabs-B-QPmbH8.js";var w={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},T={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},E=(...e)=>e.filter(Boolean).join(` `),ee=e=>Array.isArray(e)?e.flatMap(e=>ee(e)):D(e)?[e]:[],D=e=>e!=null,te=(e,t)=>e??t,O=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},k=(e,t,n)=>(e.placement??O(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),A=({className:e})=>b(`span`,{className:E(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e)}),j=({className:e})=>b(`span`,{className:E(`loading loading-spinner loading-xs`,e)}),M=e=>E(e.lineClassName,e.color?T[e.color]:void 0),N=e=>{if(!(!e.color||T[e.color]))return{backgroundColor:e.color,borderColor:e.color}},P=(e,t)=>{let n=e.color?w[e.color]:void 0,r=E(e.iconClassName,n);if(e.middle)return{className:E(e.middle.className,n),content:e.middle.content};if(D(e.icon))return{className:r,content:e.icon};if(D(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:b(j,{})};if(e.color&&!w[e.color])return{className:e.iconClassName,content:b(`span`,{style:{color:e.color},children:b(A,{})})};if(t)return{className:r,content:b(A,{})}},F=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=D(n)&&r!==n;if(!D(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},I=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!D(t),contentBox:!0,liClassName:`opacity-80`}:null,L=(e,t,n,r,i)=>{let a=e.slice(),o=I(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=k(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:F(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:P(e,s),end:o,liClassName:E(e.liClassName,e.className),lineClassName:M(e),lineStyle:N(e)}})},R=({box:e,className:t,children:n})=>b(`div`,{className:E(`timeline-start`,e&&`timeline-box`,t),children:n}),z=({className:e,children:t})=>b(`div`,{className:E(`timeline-middle`,e),children:t}),B=({box:e,className:t,children:n})=>b(`div`,{className:E(`timeline-end`,e&&`timeline-box`,t),children:n}),V=(e,t)=>y(`li`,{className:e.liClassName,children:[e.beforeLine?b(`hr`,{className:e.lineClassName,style:e.lineStyle}):null,e.start?b(R,{box:e.start.box,className:e.start.className,children:e.start.content}):null,e.middle?b(z,{className:e.middle.className,children:e.middle.content}):null,e.end?b(B,{box:e.end.box,className:e.end.className,children:e.end.content}):null,e.afterLine?b(`hr`,{className:e.lineClassName,style:e.lineStyle}):null]},e.key??t),H=Object.assign(({direction:e,orientation:t,mode:n,snapIcon:r,compact:i,reverse:a,pending:o,pendingDot:s,className:l,children:u,items:d})=>{let f=te(e,t),p=E(`timeline`,f&&`timeline-${f}`,r&&`timeline-snap-icon`,i&&`timeline-compact`,l);if(d&&d.length){let e=L(d,n,a,o,s);return c(`ul`,{className:p},...e.map(V))}if(o){let e=L([],n,a,o,s);return c(`ul`,{className:p},...e.map(V))}return c(`ul`,{className:p},...ee(u))},{Start:R,Middle:z,End:B}),U=(...e)=>e.filter(Boolean).join(` `),W={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},G={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},K={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},q=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,J=({title:t,summary:c,tab:d,preview:p,code:g})=>h(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);u(_,v),o(v,`flex flex-wrap items-start justify-between gap-3`);let y=e(`div`);u(v,y);let b=e(`h2`);u(y,b),o(b,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(b,n(`# `));let x=r(b);u(b,x),f(()=>{s(x,t)});let w=i(`rue:slot:anchor`);u(y,w),f(()=>{l(c?h(()=>{let t=a(),n=e(`p`);u(t,n),o(n,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let i=r(n);return u(n,i),f(()=>{s(i,c)}),t}):``,y,w)});let T=i(`rue:component:anchor`);u(_,T),f(()=>{l(m(C,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:d.value,onChange:e=>d.value=e,className:`mb-3 mt-4`}),_,T)});let E=i(`rue:slot:anchor`);return u(_,E),f(()=>{l(d.value===`preview`?p():h(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{l(m(S,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,E)}),_}),ne=({rows:r})=>h(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=e(`table`);u(s,c),o(c,`table table-zebra`);let d=e(`thead`);u(c,d);let p=e(`tr`);u(d,p);let m=e(`th`);u(p,m),u(m,n(`属性`));let g=e(`th`);u(p,g),u(g,n(`说明`));let _=e(`th`);u(p,_),u(_,n(`类型`));let y=e(`th`);u(p,y),u(y,n(`默认值`));let b=e(`tbody`);u(c,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);u(b,x),u(b,S);let C=new Map;return f(()=>{C=v({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,c)=>{l(h(()=>{let r=a(),o=e(`tr`);u(r,o),f(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);u(o,s);let c=e(`code`);u(s,c);let d=i(`rue:slot:anchor`);u(c,d),f(()=>{let e=n.prop;l(e,c,d)});let p=e(`td`);u(o,p);let m=i(`rue:slot:anchor`);u(p,m),f(()=>{let e=n.description;l(e,p,m)});let h=e(`td`);u(o,h);let g=e(`code`);u(h,g);let _=i(`rue:slot:anchor`);u(g,_),f(()=>{let e=n.type;l(e,g,_)});let v=e(`td`);u(o,v);let y=e(`code`);u(v,y);let b=i(`rue:slot:anchor`);return u(y,b),f(()=>{let e=n.defaultValue;l(e,y,b)}),r}),r,o)}})}),s}),Y=({tone:t=`primary`,label:n=`•`})=>h(()=>{let r=e(`span`);f(()=>{o(r,String(U(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,W[t])))});let a=i(`rue:slot:anchor`);return u(r,a),f(()=>{l(n,r,a)}),r}),X=({title:t,summary:n,badge:i,tone:a=`primary`})=>h(()=>{let c=e(`div`);o(c,`space-y-2 text-left`);let l=e(`div`);u(c,l),f(()=>{o(l,String(U(`badge badge-sm`,G[a])))});let d=r(l);u(l,d),f(()=>{s(d,i)});let p=e(`div`);u(c,p),o(p,`font-medium leading-5`);let m=r(p);u(p,m),f(()=>{s(m,t)});let h=e(`div`);u(c,h),o(h,`text-xs leading-5 opacity-70`);let g=r(h);return u(h,g),f(()=>{s(g,n)}),c}),Z=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],re=Z.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ie=Z.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:q,content:e.year},middle:{content:b(Y,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:b(X,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),ae=()=>[{key:`discover`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:b(X,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:b(X,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:b(X,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],oe=()=>[{key:`brief`,title:`Brief`,content:b(X,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:b(X,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>Z.slice(0,4).map(e=>({key:`${e.year}-color`,title:b(`span`,{className:U(`badge badge-sm`,G[e.tone]),children:e.badge}),content:b(X,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),ce=[{key:`plan`,title:`Plan`,content:b(X,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:b(Y,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:b(X,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:b(Y,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:b(X,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:b(Y,{tone:`success`,label:`3`})}],Q=({orientation:r=`horizontal`,bottomOnly:s,alternate:c,colored:p,noIcons:g,snapIcon:_,compact:y})=>{let b=r===`vertical`;return h(()=>{let x=e(`div`);f(()=>{o(x,String(b?``:`overflow-x-auto pb-2`))});let S=i(`rue:component:anchor`);return u(x,S),f(()=>{l(m(H,{orientation:b?`vertical`:void 0,snapIcon:_,compact:y,className:b?`max-w-3xl`:`min-w-[860px]`,children:h(()=>{let _=a(),y=i(`rue:list:start`),b=i(`rue:list:end`);u(_,y),u(_,b);let x=new Map;return f(()=>{x=v({items:Z||[],getKey:(e,t)=>`${r}-${e.year}-${s?`end`:`full`}`,elements:x,parent:y.parentNode,before:b,start:y,renderItem:(_,v,y,b,x)=>{let S=x>0,C=x<Z.length-1,w=p?K[_.tone]:void 0,T=!!c&&x%2==0;d(h(()=>{let c=e(`li`);f(()=>{t(c,`key`,String(`${r}-${_.year}-${s?`end`:`full`}`))});let d=i(`rue:slot:anchor`);u(c,d),f(()=>{l(S?h(()=>{let t=a(),n=e(`hr`);return u(t,n),f(()=>{o(n,String(w))}),t}):``,c,d)}),u(c,n(` `));let p=i(`rue:slot:anchor`);u(c,p),f(()=>{l(s?``:h(T?()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=h(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{l(m(X,{title:_.title,summary:_.summary,badge:_.badge,tone:_.tone}),e,t)}),e});return f(()=>{l(m(H.Start,{box:!0,children:n}),e,t)}),e}:()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{l(m(H.Start,{className:q,children:_.year}),e,t)}),e}),c,p)}),u(c,n(` `));let v=i(`rue:slot:anchor`);u(c,v),f(()=>{l(g?``:h(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=h(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{l(m(Y,{tone:_.tone,label:String(x+1)}),e,t)}),e});return l(m(H.Middle,{children:n}),e,t),e}),c,v)}),u(c,n(` `));let y=i(`rue:slot:anchor`);u(c,y),f(()=>{l(h(s?()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=h(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{l(m(X,{title:_.title,summary:_.summary,badge:_.badge,tone:_.tone}),e,t)}),e});return f(()=>{l(m(H.End,{box:!0,children:n}),e,t)}),e}:T?()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{l(m(H.End,{className:q,children:_.year}),e,t)}),e}:()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=h(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),f(()=>{l(m(X,{title:_.title,summary:_.summary,badge:_.badge,tone:_.tone}),e,t)}),e});return f(()=>{l(m(H.End,{box:!0,children:n}),e,t)}),e}),c,y)}),u(c,n(` `));let b=i(`rue:slot:anchor`);return u(c,b),f(()=>{l(C?h(()=>{let t=a(),n=e(`hr`);return u(t,n),f(()=>{o(n,String(w))}),t}):``,c,b)}),c}),v,y,b)}})}),_})}),x,S)}),x})},le=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],ue=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],de=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,we=()=>{let{tabArray:r,tabArrayInternal:s,tabDataApi:c,tabBothSides:d,tabBottomOnly:v,tabDifferentSides:S,tabColorfulLines:C,tabNoIcons:w,tabVBothSides:T,tabVRightOnly:E,tabVDifferentSides:ee,tabVColorfulLines:D,tabSnapStart:te}=_(`useSetup:0:0`,()=>g(()=>({tabArray:_(`ref:1:0`,()=>p(`preview`)),tabArrayInternal:_(`ref:1:1`,()=>p(`preview`)),tabDataApi:_(`ref:1:2`,()=>p(`preview`)),tabBothSides:_(`ref:1:3`,()=>p(`preview`)),tabBottomOnly:_(`ref:1:4`,()=>p(`preview`)),tabDifferentSides:_(`ref:1:5`,()=>p(`preview`)),tabColorfulLines:_(`ref:1:6`,()=>p(`preview`)),tabNoIcons:_(`ref:1:7`,()=>p(`preview`)),tabVBothSides:_(`ref:1:8`,()=>p(`preview`)),tabVRightOnly:_(`ref:1:9`,()=>p(`preview`)),tabVDifferentSides:_(`ref:1:10`,()=>p(`preview`)),tabVColorfulLines:_(`ref:1:11`,()=>p(`preview`)),tabSnapStart:_(`ref:1:12`,()=>p(`preview`))})));return h(()=>{let p=a(),g=i(`rue:component:anchor`);return u(p,g),l(m(x,{children:h(()=>{let p=a(),h=e(`div`);u(p,h),o(h,`max-w-none prose prose-sm md:prose-base`);let g=e(`h1`);u(h,g),u(g,n(`Timeline 时间线`));let _=e(`p`);u(h,_),o(_,`text-sm mt-3 mb-3`),u(_,n(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let x=e(`div`);u(h,x),o(x,`text-sm`);let O=e(`a`);u(x,O),t(O,`href`,`https://daisyui.com/components/timeline/`),t(O,`target`,`_blank`),t(O,`rel`,`noreferrer`),u(O,n(`查看 Timeline 静态样式`));let k=e(`div`);u(h,k),o(k,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let A=e(`div`);u(k,A),o(A,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let j=e(`div`);u(A,j),o(j,`badge badge-info badge-soft badge-sm`),u(j,n(`数据驱动`));let M=e(`div`);u(A,M),o(M,`mt-3 font-medium`),u(M,n(`items、mode、reverse`));let N=e(`p`);u(A,N),o(N,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(N,n(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let P=e(`div`);u(k,P),o(P,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let F=e(`div`);u(P,F),o(F,`badge badge-secondary badge-soft badge-sm`),u(F,n(`精细布局`));let I=e(`div`);u(P,I),o(I,`mt-3 font-medium`),u(I,n(`Start / Middle / End`));let L=e(`p`);u(P,L),o(L,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(L,n(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let R=e(`div`);u(k,R),o(R,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let z=e(`div`);u(R,z),o(z,`badge badge-warning badge-soft badge-sm`),u(z,n(`视觉控制`));let B=e(`div`);u(R,B),o(B,`mt-3 font-medium`),u(B,n(`color、snapIcon、compact`));let V=e(`p`);u(R,V),o(V,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(V,n(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let U=e(`div`);u(h,U),t(U,`role`,`alert`),o(U,`alert alert-soft alert-info not-prose my-6`);let W=e(`span`);u(U,W),o(W,`text-sm leading-6`),u(W,n(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let G=i(`rue:component:anchor`);u(h,G),f(()=>{l(m(J,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:r,preview:()=>b(`div`,{className:`overflow-x-auto pb-2`,children:b(H,{className:`min-w-[860px]`,children:re.map(e=>y(`li`,{children:[e.beforeLine?b(`hr`,{}):null,b(H.Start,{className:q,children:e.year}),b(H.Middle,{children:b(Y,{tone:e.tone,label:`✓`})}),b(H.End,{box:!0,children:b(X,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?b(`hr`,{}):null]},e.key))})}),code:de}),h,G)});let K=i(`rue:component:anchor`);u(h,K),f(()=>{l(m(J,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:s,preview:()=>b(H,{items:ie}),code:fe}),h,K)});let Z=i(`rue:component:anchor`);u(h,Z),f(()=>{l(m(J,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:c,preview:()=>b(H,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:oe()}),code:pe}),h,Z)});let we=i(`rue:component:anchor`);u(h,we),f(()=>{l(m(J,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:d,preview:()=>Q({orientation:`horizontal`}),code:me}),h,we)});let Te=i(`rue:component:anchor`);u(h,Te),f(()=>{l(m(J,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:v,preview:()=>Q({orientation:`horizontal`,bottomOnly:!0}),code:he}),h,Te)});let Ee=i(`rue:component:anchor`);u(h,Ee),f(()=>{l(m(J,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:S,preview:()=>b(H,{mode:`alternate`,items:ae()}),code:ge}),h,Ee)});let De=i(`rue:component:anchor`);u(h,De),f(()=>{l(m(J,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:C,preview:()=>b(H,{items:se()}),code:_e}),h,De)});let Oe=i(`rue:component:anchor`);u(h,Oe),f(()=>{l(m(J,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:w,preview:()=>Q({orientation:`horizontal`,noIcons:!0}),code:ve}),h,Oe)});let ke=i(`rue:component:anchor`);u(h,ke),f(()=>{l(m(J,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:T,preview:()=>Q({orientation:`vertical`}),code:ye}),h,ke)});let Ae=i(`rue:component:anchor`);u(h,Ae),f(()=>{l(m(J,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:E,preview:()=>Q({orientation:`vertical`,bottomOnly:!0}),code:be}),h,Ae)});let je=i(`rue:component:anchor`);u(h,je),f(()=>{l(m(J,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:ee,preview:()=>b(H,{orientation:`vertical`,mode:`alternate`,items:ae()}),code:xe}),h,je)});let Me=i(`rue:component:anchor`);u(h,Me),f(()=>{l(m(J,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:D,preview:()=>b(H,{orientation:`vertical`,items:se()}),code:Se}),h,Me)});let Ne=i(`rue:component:anchor`);u(h,Ne),f(()=>{l(m(J,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:te,preview:()=>b(H,{orientation:`vertical`,compact:!0,snapIcon:!0,items:ce,className:`max-w-2xl`}),code:Ce}),h,Ne)});let Pe=e(`h2`);u(h,Pe),u(Pe,n(`增强能力`));let Fe=e(`p`);u(h,Fe),o(Fe,`text-sm opacity-80`),u(Fe,n("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=i(`rue:component:anchor`);u(h,Ie),f(()=>{l(m(J,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:c,preview:()=>b(H,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:oe()}),code:pe}),h,Ie)});let $=e(`div`);u(h,$),o($,`my-10 lg:my-14`);let Le=e(`h2`);u($,Le),u(Le,n(`API`));let Re=e(`p`);u($,Re),o(Re,`text-sm leading-6 opacity-70`),u(Re,n(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let ze=e(`h3`);u($,ze),o(ze,`mt-6`),u(ze,n(`Timeline`));let Be=i(`rue:component:anchor`);u($,Be),f(()=>{l(m(ne,{rows:le}),$,Be)});let Ve=e(`h3`);u($,Ve),o(Ve,`mt-8`),u(Ve,n(`TimelineItemProps`));let He=i(`rue:component:anchor`);return u($,He),f(()=>{l(m(ne,{rows:ue}),$,He)}),p})}),p,g),p})};export{we as default};
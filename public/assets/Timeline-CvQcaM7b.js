import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,l as c,mt as l,nt as u,o as d,t as f,tt as p,ut as m,yt as h}from"./vapor-runtime-CKrmRMZX.js";import{a as g,n as _}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as v,i as y}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as b}from"./Code-D5UqTwV6.js";import{t as x}from"./tabs-DRfs918f.js";import{r as S}from"./SidebarPlaygroundDesign-CWudvLqE.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),D=e=>c(n=>{let r=p(`span`,n);return t(()=>{m(r,T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e.className))}),r}),O=e=>c(n=>{let r=p(`span`,n);return t(()=>{m(r,T(`loading loading-spinner loading-xs`,e.className))}),r}),k=e=>T(e.lineClassName,e.color?w[e.color]:void 0),A=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},j=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(E(e.icon))return{className:r,content:e.icon};if(E(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:y(O,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:y(`span`,{style:{color:e.color},children:y(D,{})})};if(t)return{className:r,content:y(D,{})}},M=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=E(n)&&r!==n;if(!E(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},N=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!E(t),contentBox:!0,liClassName:`opacity-80`}:null,P=(e,t,n,r,i)=>{let a=e.slice(),o=N(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:M(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:j(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:k(e),lineStyle:A(e)}})},F=n=>{let{cls:o}=g(`useSetup:0:0`,()=>i(()=>({cls:g(`computed:1:0`,()=>h(()=>T(`timeline-start`,n.box&&`timeline-box`,n.className)))})));return c(i=>{let s=p(`div`,i);t(()=>{m(s,o.get())});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s})},I=n=>{let{cls:o}=g(`useSetup:0:0:dup1`,()=>i(()=>({cls:g(`computed:1:1`,()=>h(()=>T(`timeline-middle`,n.className)))})));return c(i=>{let s=p(`div`,i);t(()=>{m(s,o.get())});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s})},L=n=>{let{cls:o}=g(`useSetup:0:0:dup2`,()=>i(()=>({cls:g(`computed:1:2`,()=>h(()=>T(`timeline-end`,n.box&&`timeline-box`,n.className)))})));return c(i=>{let s=p(`div`,i);t(()=>{m(s,o.get())});let c=e(`rue:children:anchor`);return a(s,c),t(()=>{let e=n.children;r(()=>d(e,s,c))}),s})},R=(n,i)=>c(h=>{let g=p(`li`,h);t(()=>{m(g,n.liClassName)}),t(()=>{o(g,`key`,String(n.key??i))});let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=n.beforeLine?c(()=>{let e=s(),r=p(`hr`,e);return a(e,r),t(()=>{m(r,n.lineClassName)}),t(()=>{let e=n.lineStyle;l(r,e)}),e}):``;r(()=>d(e,g,_))}),a(g,u(` `));let v=e(`rue:slot:anchor`);a(g,v),t(()=>{let i=n.start?c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=f(F,{box:n.start.box,className:n.start.className,children:n.start.content});r(()=>d(e,i,o))}),i}):``;r(()=>d(i,g,v))}),a(g,u(` `));let y=e(`rue:slot:anchor`);a(g,y),t(()=>{let i=n.middle?c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=f(I,{className:n.middle.className,children:n.middle.content});r(()=>d(e,i,o))}),i}):``;r(()=>d(i,g,y))}),a(g,u(` `));let b=e(`rue:slot:anchor`);a(g,b),t(()=>{let i=n.end?c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=f(L,{box:n.end.box,className:n.end.className,children:n.end.content});r(()=>d(e,i,o))}),i}):``;r(()=>d(i,g,b))}),a(g,u(` `));let x=e(`rue:slot:anchor`);return a(g,x),t(()=>{let e=n.afterLine?c(()=>{let e=s(),r=p(`hr`,e);return a(e,r),t(()=>{m(r,n.lineClassName)}),t(()=>{let e=n.lineStyle;l(r,e)}),e}):``;r(()=>d(e,g,x))}),g}),z=Object.assign(n=>{let{resolvedDirection:o,cls:s,renderedItems:l}=g(`useSetup:0:0:dup3`,()=>i(()=>{let e=g(`computed:1:3`,()=>h(()=>ee(n.direction,n.orientation))),t=e;return{resolvedDirection:e,cls:g(`computed:1:4`,()=>h(()=>T(`timeline`,t.get()&&`timeline-${t.get()}`,n.snapIcon&&`timeline-snap-icon`,n.compact&&`timeline-compact`,n.className))),renderedItems:g(`computed:1:5`,()=>h(()=>n.items&&n.items.length?P(n.items,n.mode,n.reverse,n.pending,n.pendingDot):n.pending?P([],n.mode,n.reverse,n.pending,n.pendingDot):null))}}));return c(i=>{let o=p(`ul`,i);t(()=>{m(o,s.get())});let c=e(`rue:slot:anchor`);return a(o,c),t(()=>{let e=l.get()?l.get().map(R):n.children;r(()=>d(e,o,c))}),o})},{Start:F,Middle:I,End:L}),B=(...e)=>e.filter(Boolean).join(` `),V={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},H={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},U={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},W=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,G=n=>c(i=>{let o=p(`div`,i);m(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let l=p(`div`,o);a(o,l),m(l,`flex flex-wrap items-start justify-between gap-3`);let h=p(`div`,l);a(l,h);let g=p(`h2`,h);a(h,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(g,u(`# `));let _=e(`rue:slot:anchor`);a(g,_),t(()=>{let e=n.title;r(()=>d(e,g,_))});let v=e(`rue:slot:anchor`);a(h,v),t(()=>{let i=n.summary?c(()=>{let i=s(),o=p(`p`,i);a(i,o),m(o,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let c=e(`rue:slot:anchor`);return a(o,c),t(()=>{let e=n.summary;r(()=>d(e,o,c))}),i}):``;r(()=>d(i,h,v))});let y=e(`rue:component:anchor`);a(o,y),t(()=>{let e=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});r(()=>d(e,o,y))});let S=e(`rue:slot:anchor`);return a(o,S),t(()=>{let i=n.tab.value===`preview`?n.preview():c(()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=f(b,{className:`mt-2`,lang:`tsx`,code:n.code});r(()=>d(e,i,o))}),i});r(()=>d(i,o,S))}),o}),re=n=>c(i=>{let l=p(`div`,i);m(l,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=p(`table`,l);a(l,f),m(f,`table table-zebra`);let h=p(`thead`,f);a(f,h);let g=p(`tr`,h);a(h,g);let v=p(`th`,g);a(g,v),a(v,u(`属性`));let y=p(`th`,g);a(g,y),a(y,u(`说明`));let b=p(`th`,g);a(g,b),a(b,u(`类型`));let x=p(`th`,g);a(g,x),a(x,u(`默认值`));let S=p(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,l,u,f)=>{d(c(()=>{let i=s(),c=p(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=p(`td`,c);a(c,l);let u=p(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let m=p(`td`,c);a(c,m);let h=e(`rue:slot:anchor`);a(m,h),t(()=>{let e=n.description;r(()=>d(e,m,h))});let g=p(`td`,c);a(c,g);let _=p(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=p(`td`,c);a(c,y);let b=p(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,l)}})}),l}),K=n=>c(i=>{let o=p(`span`,i);t(()=>{m(o,B(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,V[n.tone===void 0?`primary`:n.tone]))});let s=e(`rue:slot:anchor`);return a(o,s),t(()=>{let e=n.label===void 0?`•`:n.label;r(()=>d(e,o,s))}),o}),q=n=>c(i=>{let o=p(`div`,i);m(o,`space-y-2 text-left`);let s=p(`div`,o);a(o,s),t(()=>{m(s,B(`badge badge-sm`,H[n.tone===void 0?`primary`:n.tone]))});let c=e(`rue:slot:anchor`);a(s,c),t(()=>{let e=n.badge;r(()=>d(e,s,c))});let l=p(`div`,o);a(o,l),m(l,`font-medium leading-5`);let u=e(`rue:slot:anchor`);a(l,u),t(()=>{let e=n.title;r(()=>d(e,l,u))});let f=p(`div`,o);a(o,f),m(f,`text-xs leading-5 opacity-70`);let h=e(`rue:slot:anchor`);return a(f,h),t(()=>{let e=n.summary;r(()=>d(e,f,h))}),o}),J=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=J.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=J.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:W,content:e.year},middle:{content:y(K,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:y(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:y(q,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:y(q,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:y(q,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:y(q,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:y(q,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>J.slice(0,4).map(e=>({key:`${e.year}-color`,title:y(`span`,{className:B(`badge badge-sm`,H[e.tone]),children:e.badge}),content:y(q,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:y(q,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:y(K,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:y(q,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:y(K,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:y(q,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:y(K,{tone:`success`,label:`3`})}],Y=n=>{let{isVertical:l}=g(`useSetup:0:0`,()=>i(()=>({isVertical:g(`computed:1:0`,()=>h(()=>(n.orientation===void 0?`horizontal`:n.orientation)===`vertical`))})));return c(i=>{let h=p(`div`,i);t(()=>{m(h,l.get()?``:`overflow-x-auto pb-2`)});let g=e(`rue:component:anchor`);return a(h,g),t(()=>{let i=f(z,{orientation:l.get()?`vertical`:void 0,snapIcon:n.snapIcon,compact:n.compact,className:l.get()?`max-w-3xl`:`min-w-[860px]`,children:c(()=>{let i=s(),l=e(`rue:list:start`),h=e(`rue:list:end`);a(i,l),a(i,h);let g=new Map;return t(()=>{g=_({items:J||[],getKey:(e,t)=>`${n.orientation===void 0?`horizontal`:n.orientation}-${e.year}-${n.bottomOnly?`end`:`full`}`,elements:g,parent:l.parentNode,before:h,singleRoot:!0,start:l,renderItem:(i,l,h,g,_)=>{d(c(()=>{let l=s(),h=_>0,g=_<J.length-1,v=n.colored?U[i.tone]:void 0,y=!!n.alternate&&_%2==0,b=p(`li`,l);a(l,b),t(()=>{o(b,`key`,String(`${n.orientation===void 0?`horizontal`:n.orientation}-${i.year}-${n.bottomOnly?`end`:`full`}`))});let x=e(`rue:slot:anchor`);a(b,x),t(()=>{let e=h?c(()=>{let e=s(),n=p(`hr`,e);return a(e,n),t(()=>{m(n,v)}),e}):``;r(()=>d(e,b,x))}),a(b,u(` `));let S=e(`rue:slot:anchor`);a(b,S),t(()=>{let o=n.bottomOnly?``:c(y?()=>{let n=s(),o=e(`rue:component:anchor`);a(n,o);let c=f(q,{title:i.title,summary:i.summary,badge:i.badge,tone:i.tone});return t(()=>{let e=f(z.Start,{box:!0,children:c});r(()=>d(e,n,o))}),n}:()=>{let n=s(),o=e(`rue:component:anchor`);return a(n,o),t(()=>{let e=f(z.Start,{className:W,children:i.year});r(()=>d(e,n,o))}),n});r(()=>d(o,b,S))}),a(b,u(` `));let C=e(`rue:slot:anchor`);a(b,C),t(()=>{let t=n.noIcons?``:c(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n);let r=f(K,{tone:i.tone,label:String(_+1)});return d(f(z.Middle,{children:r}),t,n),t});r(()=>d(t,b,C))}),a(b,u(` `));let w=e(`rue:slot:anchor`);a(b,w),t(()=>{let o=n.bottomOnly?c(()=>{let n=s(),o=e(`rue:component:anchor`);a(n,o);let c=f(q,{title:i.title,summary:i.summary,badge:i.badge,tone:i.tone});return t(()=>{let e=f(z.End,{box:!0,children:c});r(()=>d(e,n,o))}),n}):c(y?()=>{let n=s(),o=e(`rue:component:anchor`);return a(n,o),t(()=>{let e=f(z.End,{className:W,children:i.year});r(()=>d(e,n,o))}),n}:()=>{let n=s(),o=e(`rue:component:anchor`);a(n,o);let c=f(q,{title:i.title,summary:i.summary,badge:i.badge,tone:i.tone});return t(()=>{let e=f(z.End,{box:!0,children:c});r(()=>d(e,n,o))}),n});r(()=>d(o,b,w))}),a(b,u(` `));let T=e(`rue:slot:anchor`);return a(b,T),t(()=>{let e=g?c(()=>{let e=s(),n=p(`hr`,e);return a(e,n),t(()=>{m(n,v)}),e}):``;r(()=>d(e,b,T))}),l}),l,h)}})}),i})});r(()=>d(i,h,g))}),h})},ue=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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

<div className="overflow-x-auto pb-2">
  <Timeline items={items} className="min-w-[860px]" />
</div>`,me=`import { Timeline } from '@rue-js/design'

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

<div className="overflow-x-auto pb-2">
  <Timeline items={items} className="min-w-[860px]" />
</div>`,ye=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,X=()=>{let{tabArray:l,tabArrayInternal:h,tabDataApi:_,tabBothSides:b,tabBottomOnly:x,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:ee,tabVDifferentSides:te,tabVColorfulLines:ne,tabSnapStart:D}=g(`useSetup:0:0:dup1`,()=>i(()=>({tabArray:g(`ref:1:1`,()=>n(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>n(`preview`)),tabDataApi:g(`ref:1:3`,()=>n(`preview`)),tabBothSides:g(`ref:1:4`,()=>n(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>n(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>n(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>n(`preview`)),tabNoIcons:g(`ref:1:8`,()=>n(`preview`)),tabVBothSides:g(`ref:1:9`,()=>n(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>n(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>n(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>n(`preview`)),tabSnapStart:g(`ref:1:13`,()=>n(`preview`))})));return c(n=>{let i=s(),g=e(`rue:component:anchor`);return a(i,g),d(f(S,{children:c(()=>{let n=s(),i=p(`div`,n);a(n,i),m(i,`max-w-none prose prose-sm md:prose-base`);let c=p(`h1`,i);a(i,c),a(c,u(`Timeline 时间线`));let g=p(`p`,i);a(i,g),m(g,`text-sm mt-3 mb-3`),a(g,u(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let S=p(`div`,i);a(i,S),m(S,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=p(`div`,S);a(S,O),m(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=p(`div`,O);a(O,k),m(k,`badge badge-info badge-soft badge-sm`),a(k,u(`数据驱动`));let A=p(`div`,O);a(O,A),m(A,`mt-3 font-medium`),a(A,u(`items、mode、reverse`));let j=p(`p`,O);a(O,j),m(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),a(j,u(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=p(`div`,S);a(S,M),m(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=p(`div`,M);a(M,N),m(N,`badge badge-secondary badge-soft badge-sm`),a(N,u(`精细布局`));let P=p(`div`,M);a(M,P),m(P,`mt-3 font-medium`),a(P,u(`Start / Middle / End`));let F=p(`p`,M);a(M,F),m(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),a(F,u(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=p(`div`,S);a(S,I),m(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=p(`div`,I);a(I,L),m(L,`badge badge-warning badge-soft badge-sm`),a(L,u(`视觉控制`));let R=p(`div`,I);a(I,R),m(R,`mt-3 font-medium`),a(R,u(`color、snapIcon、compact`));let B=p(`p`,I);a(I,B),m(B,`mt-2 mb-0 text-sm leading-6 opacity-70`),a(B,u(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let V=p(`div`,i);a(i,V),o(V,`role`,`alert`),m(V,`alert alert-soft alert-info not-prose my-6`);let H=p(`span`,V);a(V,H),m(H,`text-sm leading-6`),a(H,u(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let U=e(`rue:component:anchor`);a(i,U),t(()=>{let e=f(G,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:l,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{className:`min-w-[860px]`,children:ie.map(e=>v(`li`,{children:[e.beforeLine?y(`hr`,{}):null,y(z.Start,{className:W,children:e.year}),y(z.Middle,{children:y(K,{tone:e.tone,label:`✓`})}),y(z.End,{box:!0,children:y(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?y(`hr`,{}):null]},e.key))})}),code:fe});r(()=>d(e,i,U))});let J=e(`rue:component:anchor`);a(i,J),t(()=>{let e=f(G,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:h,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{items:ae,className:`min-w-[860px]`})}),code:pe});r(()=>d(e,i,J))});let X=e(`rue:component:anchor`);a(i,X),t(()=>{let e=f(G,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});r(()=>d(e,i,X))});let Te=e(`rue:component:anchor`);a(i,Te),t(()=>{let e=f(G,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:b,preview:()=>Y({orientation:`horizontal`}),code:he});r(()=>d(e,i,Te))});let Ee=e(`rue:component:anchor`);a(i,Ee),t(()=>{let e=f(G,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:x,preview:()=>Y({orientation:`horizontal`,bottomOnly:!0}),code:ge});r(()=>d(e,i,Ee))});let De=e(`rue:component:anchor`);a(i,De),t(()=>{let e=f(G,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>y(z,{mode:`alternate`,items:oe()}),code:_e});r(()=>d(e,i,De))});let Oe=e(`rue:component:anchor`);a(i,Oe),t(()=>{let e=f(G,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{items:ce(),className:`min-w-[860px]`})}),code:ve});r(()=>d(e,i,Oe))});let ke=e(`rue:component:anchor`);a(i,ke),t(()=>{let e=f(G,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>Y({orientation:`horizontal`,noIcons:!0}),code:ye});r(()=>d(e,i,ke))});let Ae=e(`rue:component:anchor`);a(i,Ae),t(()=>{let e=f(G,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>Y({orientation:`vertical`}),code:be});r(()=>d(e,i,Ae))});let je=e(`rue:component:anchor`);a(i,je),t(()=>{let e=f(G,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:ee,preview:()=>Y({orientation:`vertical`,bottomOnly:!0}),code:xe});r(()=>d(e,i,je))});let Me=e(`rue:component:anchor`);a(i,Me),t(()=>{let e=f(G,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:te,preview:()=>y(z,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});r(()=>d(e,i,Me))});let Ne=e(`rue:component:anchor`);a(i,Ne),t(()=>{let e=f(G,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:ne,preview:()=>y(z,{orientation:`vertical`,items:ce()}),code:Ce});r(()=>d(e,i,Ne))});let Pe=e(`rue:component:anchor`);a(i,Pe),t(()=>{let e=f(G,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:D,preview:()=>y(z,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});r(()=>d(e,i,Pe))});let Fe=p(`h2`,i);a(i,Fe),a(Fe,u(`增强能力`));let Z=p(`p`,i);a(i,Z),m(Z,`text-sm opacity-80`),a(Z,u("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=e(`rue:component:anchor`);a(i,Ie),t(()=>{let e=f(G,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});r(()=>d(e,i,Ie))});let Q=p(`div`,i);a(i,Q),m(Q,`my-10 lg:my-14`);let Le=p(`h2`,Q);a(Q,Le),a(Le,u(`API`));let $=p(`p`,Q);a(Q,$),m($,`text-sm leading-6 opacity-70`),a($,u(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let Re=p(`h3`,Q);a(Q,Re),m(Re,`mt-6`),a(Re,u(`Timeline`));let ze=e(`rue:component:anchor`);a(Q,ze),t(()=>{let e=f(re,{rows:ue});r(()=>d(e,Q,ze))});let Be=p(`h3`,Q);a(Q,Be),m(Be,`mt-8`),a(Be,u(`TimelineItemProps`));let Ve=e(`rue:component:anchor`);return a(Q,Ve),t(()=>{let e=f(re,{rows:de});r(()=>d(e,Q,Ve))}),n})}),i,g),i})};export{X as default};
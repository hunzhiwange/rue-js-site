import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,dt as l,gt as u,l as d,qt as f,s as p,st as m,t as h}from"./vapor-runtime-iQZthBPQ.js";import{a as g,n as _}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as v,i as y}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as b}from"./Code-CZqShVUj.js";import{t as x}from"./tabs-BBuGEPV7.js";import{r as S}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),D=e=>d(t=>{let n=i(`span`,t);return o(()=>{m(n,T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e.className))}),n}),O=e=>d(t=>{let n=i(`span`,t);return o(()=>{m(n,T(`loading loading-spinner loading-xs`,e.className))}),n}),k=e=>T(e.lineClassName,e.color?w[e.color]:void 0),A=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},j=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(E(e.icon))return{className:r,content:e.icon};if(E(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:y(O,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:y(`span`,{style:{color:e.color},children:y(D,{})})};if(t)return{className:r,content:y(D,{})}},M=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=E(n)&&r!==n;if(!E(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},N=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!E(t),contentBox:!0,liClassName:`opacity-80`}:null,P=(e,t,n,r,i)=>{let a=e.slice(),o=N(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:M(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:j(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:k(e),lineStyle:A(e)}})},F=e=>{let{cls:r}=g(`useSetup:0:0`,()=>f(()=>({cls:g(`computed:1:0`,()=>u(()=>T(`timeline-start`,e.box&&`timeline-box`,e.className)))})));return d(s=>{let c=i(`div`,s);o(()=>{m(c,r.get())});let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let n=e.children;t(()=>p(n,c,l))}),c})},I=e=>{let{cls:r}=g(`useSetup:0:0:dup1`,()=>f(()=>({cls:g(`computed:1:1`,()=>u(()=>T(`timeline-middle`,e.className)))})));return d(s=>{let c=i(`div`,s);o(()=>{m(c,r.get())});let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let n=e.children;t(()=>p(n,c,l))}),c})},L=e=>{let{cls:r}=g(`useSetup:0:0:dup2`,()=>f(()=>({cls:g(`computed:1:2`,()=>u(()=>T(`timeline-end`,e.box&&`timeline-box`,e.className)))})));return d(s=>{let c=i(`div`,s);o(()=>{m(c,r.get())});let l=a(`rue:children:anchor`);return n(c,l),o(()=>{let n=e.children;t(()=>p(n,c,l))}),c})},R=(r,u)=>d(f=>{let g=i(`li`,f);o(()=>{m(g,r.liClassName)}),o(()=>{c(g,`key`,String(r.key??u))});let _=a(`rue:slot:anchor`);n(g,_),o(()=>{let e=r.beforeLine?d(()=>{let e=s(),t=i(`hr`,e);return n(e,t),o(()=>{m(t,r.lineClassName)}),o(()=>{let e=r.lineStyle;l(t,e)}),e}):``;t(()=>p(e,g,_))}),n(g,e(` `));let v=a(`rue:slot:anchor`);n(g,v),o(()=>{let e=r.start?d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=h(F,{box:r.start.box,className:r.start.className,children:r.start.content});t(()=>p(n,e,i))}),e}):``;t(()=>p(e,g,v))}),n(g,e(` `));let y=a(`rue:slot:anchor`);n(g,y),o(()=>{let e=r.middle?d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=h(I,{className:r.middle.className,children:r.middle.content});t(()=>p(n,e,i))}),e}):``;t(()=>p(e,g,y))}),n(g,e(` `));let b=a(`rue:slot:anchor`);n(g,b),o(()=>{let e=r.end?d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=h(L,{box:r.end.box,className:r.end.className,children:r.end.content});t(()=>p(n,e,i))}),e}):``;t(()=>p(e,g,b))}),n(g,e(` `));let x=a(`rue:slot:anchor`);return n(g,x),o(()=>{let e=r.afterLine?d(()=>{let e=s(),t=i(`hr`,e);return n(e,t),o(()=>{m(t,r.lineClassName)}),o(()=>{let e=r.lineStyle;l(t,e)}),e}):``;t(()=>p(e,g,x))}),g}),z=Object.assign(e=>{let{resolvedDirection:r,cls:s,renderedItems:c}=g(`useSetup:0:0:dup3`,()=>f(()=>{let t=g(`computed:1:3`,()=>u(()=>ee(e.direction,e.orientation))),n=t;return{resolvedDirection:t,cls:g(`computed:1:4`,()=>u(()=>T(`timeline`,n.get()&&`timeline-${n.get()}`,e.snapIcon&&`timeline-snap-icon`,e.compact&&`timeline-compact`,e.className))),renderedItems:g(`computed:1:5`,()=>u(()=>e.items&&e.items.length?P(e.items,e.mode,e.reverse,e.pending,e.pendingDot):e.pending?P([],e.mode,e.reverse,e.pending,e.pendingDot):null))}}));return d(r=>{let l=i(`ul`,r);o(()=>{m(l,s.get())});let u=a(`rue:slot:anchor`);return n(l,u),o(()=>{let n=c.get()?c.get().map(R):e.children;t(()=>p(n,l,u))}),l})},{Start:F,Middle:I,End:L}),B=(...e)=>e.filter(Boolean).join(` `),V={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},H={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},U={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},W=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,G=r=>d(c=>{let l=i(`div`,c);m(l,`component-preview not-prose text-base-content my-6 lg:my-12`);let u=i(`div`,l);n(l,u),m(u,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,u);n(u,f);let g=i(`h2`,f);n(f,g),m(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,e(`# `));let _=a(`rue:slot:anchor`);n(g,_),o(()=>{let e=r.title;t(()=>p(e,g,_))});let v=a(`rue:slot:anchor`);n(f,v),o(()=>{let e=r.summary?d(()=>{let e=s(),c=i(`p`,e);n(e,c),m(c,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let l=a(`rue:slot:anchor`);return n(c,l),o(()=>{let e=r.summary;t(()=>p(e,c,l))}),e}):``;t(()=>p(e,f,v))});let y=a(`rue:component:anchor`);n(l,y),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>p(e,l,y))});let S=a(`rue:slot:anchor`);return n(l,S),o(()=>{let e=r.tab.value===`preview`?r.preview():d(()=>{let e=s(),i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>p(n,e,i))}),e});t(()=>p(e,l,S))}),l}),re=r=>d(l=>{let u=i(`div`,l);m(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),m(f,`table table-zebra`);let h=i(`thead`,f);n(f,h);let g=i(`tr`,h);n(h,g);let v=i(`th`,g);n(g,v),n(v,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=_({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{p(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>p(n,d,f))});let m=i(`td`,l);n(l,m);let h=a(`rue:slot:anchor`);n(m,h),o(()=>{let n=e.description;t(()=>p(n,m,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>p(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>p(n,b,x))}),r}),r,l)}})}),u}),K=e=>d(r=>{let s=i(`span`,r);o(()=>{m(s,B(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,V[e.tone===void 0?`primary`:e.tone]))});let c=a(`rue:slot:anchor`);return n(s,c),o(()=>{let n=e.label===void 0?`•`:e.label;t(()=>p(n,s,c))}),s}),q=e=>d(r=>{let s=i(`div`,r);m(s,`space-y-2 text-left`);let c=i(`div`,s);n(s,c),o(()=>{m(c,B(`badge badge-sm`,H[e.tone===void 0?`primary`:e.tone]))});let l=a(`rue:slot:anchor`);n(c,l),o(()=>{let n=e.badge;t(()=>p(n,c,l))});let u=i(`div`,s);n(s,u),m(u,`font-medium leading-5`);let d=a(`rue:slot:anchor`);n(u,d),o(()=>{let n=e.title;t(()=>p(n,u,d))});let f=i(`div`,s);n(s,f),m(f,`text-xs leading-5 opacity-70`);let h=a(`rue:slot:anchor`);return n(f,h),o(()=>{let n=e.summary;t(()=>p(n,f,h))}),s}),J=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=J.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=J.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:W,content:e.year},middle:{content:y(K,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:y(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:y(q,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:y(q,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:y(q,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:y(q,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:y(q,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>J.slice(0,4).map(e=>({key:`${e.year}-color`,title:y(`span`,{className:B(`badge badge-sm`,H[e.tone]),children:e.badge}),content:y(q,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:y(q,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:y(K,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:y(q,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:y(K,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:y(q,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:y(K,{tone:`success`,label:`3`})}],Y=r=>{let{isVertical:l}=g(`useSetup:0:0`,()=>f(()=>({isVertical:g(`computed:1:0`,()=>u(()=>(r.orientation===void 0?`horizontal`:r.orientation)===`vertical`))})));return d(u=>{let f=i(`div`,u);o(()=>{m(f,l.get()?``:`overflow-x-auto pb-2`)});let g=a(`rue:component:anchor`);return n(f,g),o(()=>{let u=h(z,{orientation:l.get()?`vertical`:void 0,snapIcon:r.snapIcon,compact:r.compact,className:l.get()?`max-w-3xl`:`min-w-[860px]`,children:d(()=>{let l=s(),u=a(`rue:list:start`),f=a(`rue:list:end`);n(l,u),n(l,f);let g=new Map;return o(()=>{g=_({items:J||[],getKey:(e,t)=>`${r.orientation===void 0?`horizontal`:r.orientation}-${e.year}-${r.bottomOnly?`end`:`full`}`,elements:g,parent:u.parentNode,before:f,singleRoot:!0,start:u,renderItem:(l,u,f,g,_)=>{p(d(()=>{let u=s(),f=_>0,g=_<J.length-1,v=r.colored?U[l.tone]:void 0,y=!!r.alternate&&_%2==0,b=i(`li`,u);n(u,b),o(()=>{c(b,`key`,String(`${r.orientation===void 0?`horizontal`:r.orientation}-${l.year}-${r.bottomOnly?`end`:`full`}`))});let x=a(`rue:slot:anchor`);n(b,x),o(()=>{let e=f?d(()=>{let e=s(),t=i(`hr`,e);return n(e,t),o(()=>{m(t,v)}),e}):``;t(()=>p(e,b,x))}),n(b,e(` `));let S=a(`rue:slot:anchor`);n(b,S),o(()=>{let e=r.bottomOnly?``:d(y?()=>{let e=s(),r=a(`rue:component:anchor`);n(e,r);let i=h(q,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return o(()=>{let n=h(z.Start,{box:!0,children:i});t(()=>p(n,e,r))}),e}:()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=h(z.Start,{className:W,children:l.year});t(()=>p(n,e,r))}),e});t(()=>p(e,b,S))}),n(b,e(` `));let C=a(`rue:slot:anchor`);n(b,C),o(()=>{let e=r.noIcons?``:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t);let r=h(K,{tone:l.tone,label:String(_+1)});return p(h(z.Middle,{children:r}),e,t),e});t(()=>p(e,b,C))}),n(b,e(` `));let w=a(`rue:slot:anchor`);n(b,w),o(()=>{let e=r.bottomOnly?d(()=>{let e=s(),r=a(`rue:component:anchor`);n(e,r);let i=h(q,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return o(()=>{let n=h(z.End,{box:!0,children:i});t(()=>p(n,e,r))}),e}):d(y?()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=h(z.End,{className:W,children:l.year});t(()=>p(n,e,r))}),e}:()=>{let e=s(),r=a(`rue:component:anchor`);n(e,r);let i=h(q,{title:l.title,summary:l.summary,badge:l.badge,tone:l.tone});return o(()=>{let n=h(z.End,{box:!0,children:i});t(()=>p(n,e,r))}),e});t(()=>p(e,b,w))}),n(b,e(` `));let T=a(`rue:slot:anchor`);return n(b,T),o(()=>{let e=g?d(()=>{let e=s(),t=i(`hr`,e);return n(e,t),o(()=>{m(t,v)}),e}):``;t(()=>p(e,b,T))}),u}),u,f)}})}),l})});t(()=>p(u,f,g))}),f})},ue=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,X=()=>{let{tabArray:l,tabArrayInternal:u,tabDataApi:_,tabBothSides:b,tabBottomOnly:x,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:ee,tabVDifferentSides:te,tabVColorfulLines:ne,tabSnapStart:D}=g(`useSetup:0:0:dup1`,()=>f(()=>({tabArray:g(`ref:1:1`,()=>r(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>r(`preview`)),tabDataApi:g(`ref:1:3`,()=>r(`preview`)),tabBothSides:g(`ref:1:4`,()=>r(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>r(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>r(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>r(`preview`)),tabNoIcons:g(`ref:1:8`,()=>r(`preview`)),tabVBothSides:g(`ref:1:9`,()=>r(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>r(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>r(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>r(`preview`)),tabSnapStart:g(`ref:1:13`,()=>r(`preview`))})));return d(r=>{let f=s(),g=a(`rue:component:anchor`);return n(f,g),p(h(S,{children:d(()=>{let r=s(),d=i(`div`,r);n(r,d),m(d,`max-w-none prose prose-sm md:prose-base`);let f=i(`h1`,d);n(d,f),n(f,e(`Timeline 时间线`));let g=i(`p`,d);n(d,g),m(g,`text-sm mt-3 mb-3`),n(g,e(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let S=i(`div`,d);n(d,S),m(S,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=i(`div`,S);n(S,O),m(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=i(`div`,O);n(O,k),m(k,`badge badge-info badge-soft badge-sm`),n(k,e(`数据驱动`));let A=i(`div`,O);n(O,A),m(A,`mt-3 font-medium`),n(A,e(`items、mode、reverse`));let j=i(`p`,O);n(O,j),m(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),n(j,e(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=i(`div`,S);n(S,M),m(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=i(`div`,M);n(M,N),m(N,`badge badge-secondary badge-soft badge-sm`),n(N,e(`精细布局`));let P=i(`div`,M);n(M,P),m(P,`mt-3 font-medium`),n(P,e(`Start / Middle / End`));let F=i(`p`,M);n(M,F),m(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),n(F,e(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=i(`div`,S);n(S,I),m(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=i(`div`,I);n(I,L),m(L,`badge badge-warning badge-soft badge-sm`),n(L,e(`视觉控制`));let R=i(`div`,I);n(I,R),m(R,`mt-3 font-medium`),n(R,e(`color、snapIcon、compact`));let B=i(`p`,I);n(I,B),m(B,`mt-2 mb-0 text-sm leading-6 opacity-70`),n(B,e(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let V=i(`div`,d);n(d,V),c(V,`role`,`alert`),m(V,`alert alert-soft alert-info not-prose my-6`);let H=i(`span`,V);n(V,H),m(H,`text-sm leading-6`),n(H,e(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let U=a(`rue:component:anchor`);n(d,U),o(()=>{let e=h(G,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:l,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{className:`min-w-[860px]`,children:ie.map(e=>v(`li`,{children:[e.beforeLine?y(`hr`,{}):null,y(z.Start,{className:W,children:e.year}),y(z.Middle,{children:y(K,{tone:e.tone,label:`✓`})}),y(z.End,{box:!0,children:y(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?y(`hr`,{}):null]},e.key))})}),code:fe});t(()=>p(e,d,U))});let J=a(`rue:component:anchor`);n(d,J),o(()=>{let e=h(G,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:u,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{items:ae,className:`min-w-[860px]`})}),code:pe});t(()=>p(e,d,J))});let X=a(`rue:component:anchor`);n(d,X),o(()=>{let e=h(G,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});t(()=>p(e,d,X))});let Te=a(`rue:component:anchor`);n(d,Te),o(()=>{let e=h(G,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:b,preview:()=>Y({orientation:`horizontal`}),code:he});t(()=>p(e,d,Te))});let Ee=a(`rue:component:anchor`);n(d,Ee),o(()=>{let e=h(G,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:x,preview:()=>Y({orientation:`horizontal`,bottomOnly:!0}),code:ge});t(()=>p(e,d,Ee))});let De=a(`rue:component:anchor`);n(d,De),o(()=>{let e=h(G,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>y(z,{mode:`alternate`,items:oe()}),code:_e});t(()=>p(e,d,De))});let Oe=a(`rue:component:anchor`);n(d,Oe),o(()=>{let e=h(G,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{items:ce(),className:`min-w-[860px]`})}),code:ve});t(()=>p(e,d,Oe))});let ke=a(`rue:component:anchor`);n(d,ke),o(()=>{let e=h(G,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>Y({orientation:`horizontal`,noIcons:!0}),code:ye});t(()=>p(e,d,ke))});let Ae=a(`rue:component:anchor`);n(d,Ae),o(()=>{let e=h(G,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>Y({orientation:`vertical`}),code:be});t(()=>p(e,d,Ae))});let je=a(`rue:component:anchor`);n(d,je),o(()=>{let e=h(G,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:ee,preview:()=>Y({orientation:`vertical`,bottomOnly:!0}),code:xe});t(()=>p(e,d,je))});let Me=a(`rue:component:anchor`);n(d,Me),o(()=>{let e=h(G,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:te,preview:()=>y(z,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});t(()=>p(e,d,Me))});let Ne=a(`rue:component:anchor`);n(d,Ne),o(()=>{let e=h(G,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:ne,preview:()=>y(z,{orientation:`vertical`,items:ce()}),code:Ce});t(()=>p(e,d,Ne))});let Pe=a(`rue:component:anchor`);n(d,Pe),o(()=>{let e=h(G,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:D,preview:()=>y(z,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});t(()=>p(e,d,Pe))});let Fe=i(`h2`,d);n(d,Fe),n(Fe,e(`增强能力`));let Z=i(`p`,d);n(d,Z),m(Z,`text-sm opacity-80`),n(Z,e("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=a(`rue:component:anchor`);n(d,Ie),o(()=>{let e=h(G,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});t(()=>p(e,d,Ie))});let Q=i(`div`,d);n(d,Q),m(Q,`my-10 lg:my-14`);let Le=i(`h2`,Q);n(Q,Le),n(Le,e(`API`));let $=i(`p`,Q);n(Q,$),m($,`text-sm leading-6 opacity-70`),n($,e(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let Re=i(`h3`,Q);n(Q,Re),m(Re,`mt-6`),n(Re,e(`Timeline`));let ze=a(`rue:component:anchor`);n(Q,ze),o(()=>{let e=h(re,{rows:ue});t(()=>p(e,Q,ze))});let Be=i(`h3`,Q);n(Q,Be),m(Be,`mt-8`),n(Be,e(`TimelineItemProps`));let Ve=a(`rue:component:anchor`);return n(Q,Ve),o(()=>{let e=h(re,{rows:de});t(()=>p(e,Q,Ve))}),r})}),f,g),f})};export{X as default};
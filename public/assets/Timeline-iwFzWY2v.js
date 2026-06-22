import{Q as e,Vt as t,Xt as n,dt as r,it as i,l as a,nt as o,o as s,on as c,pt as l,rt as u,t as d,tn as f,tt as p,vt as m,wt as h}from"./vapor-runtime-x7F5M-49.js";import{a as g,n as _}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as v,o as y}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as b}from"./Code-C5NjdoiC.js";import{t as x}from"./tabs-C4UF43sZ.js";import{r as S}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),D=e=>a(n=>{let r=u(`span`,n);return t(()=>{l(r,T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e.className))}),r}),O=e=>a(n=>{let r=u(`span`,n);return t(()=>{l(r,T(`loading loading-spinner loading-xs`,e.className))}),r}),k=e=>T(e.lineClassName,e.color?w[e.color]:void 0),A=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},j=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(E(e.icon))return{className:r,content:e.icon};if(E(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:v(O,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:v(`span`,{style:{color:e.color},children:v(D,{})})};if(t)return{className:r,content:v(D,{})}},M=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=E(n)&&r!==n;if(!E(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},N=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!E(t),contentBox:!0,liClassName:`opacity-80`}:null,P=(e,t,n,r,i)=>{let a=e.slice(),o=N(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:M(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:j(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:k(e),lineStyle:A(e)}})},F=n=>{let{cls:r}=g(`useSetup:0:0`,()=>c(()=>({cls:g(`computed:1:0`,()=>h(()=>T(`timeline-start`,n.box&&`timeline-box`,n.className)))})));return a(i=>{let a=u(`div`,i);t(()=>{l(a,r.get())});let o=p(`rue:children:anchor`);return e(a,o),t(()=>{let e=n.children;f(()=>s(e,a,o))}),a})},I=n=>{let{cls:r}=g(`useSetup:0:0:dup1`,()=>c(()=>({cls:g(`computed:1:1`,()=>h(()=>T(`timeline-middle`,n.className)))})));return a(i=>{let a=u(`div`,i);t(()=>{l(a,r.get())});let o=p(`rue:children:anchor`);return e(a,o),t(()=>{let e=n.children;f(()=>s(e,a,o))}),a})},L=n=>{let{cls:r}=g(`useSetup:0:0:dup2`,()=>c(()=>({cls:g(`computed:1:2`,()=>h(()=>T(`timeline-end`,n.box&&`timeline-box`,n.className)))})));return a(i=>{let a=u(`div`,i);t(()=>{l(a,r.get())});let o=p(`rue:children:anchor`);return e(a,o),t(()=>{let e=n.children;f(()=>s(e,a,o))}),a})},R=(n,c)=>a(h=>{let g=u(`li`,h);t(()=>{l(g,n.liClassName)}),t(()=>{r(g,`key`,String(n.key??c))});let _=p(`rue:slot:anchor`);e(g,_),t(()=>{let r=n.beforeLine?a(()=>{let r=o(),i=u(`hr`,r);return e(r,i),t(()=>{l(i,n.lineClassName)}),t(()=>{let e=n.lineStyle;m(i,e)}),r}):``;f(()=>s(r,g,_))}),e(g,i(` `));let v=p(`rue:slot:anchor`);e(g,v),t(()=>{let r=n.start?a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(F,{box:n.start.box,className:n.start.className,children:n.start.content});f(()=>s(e,r,i))}),r}):``;f(()=>s(r,g,v))}),e(g,i(` `));let y=p(`rue:slot:anchor`);e(g,y),t(()=>{let r=n.middle?a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(I,{className:n.middle.className,children:n.middle.content});f(()=>s(e,r,i))}),r}):``;f(()=>s(r,g,y))}),e(g,i(` `));let b=p(`rue:slot:anchor`);e(g,b),t(()=>{let r=n.end?a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(L,{box:n.end.box,className:n.end.className,children:n.end.content});f(()=>s(e,r,i))}),r}):``;f(()=>s(r,g,b))}),e(g,i(` `));let x=p(`rue:slot:anchor`);return e(g,x),t(()=>{let r=n.afterLine?a(()=>{let r=o(),i=u(`hr`,r);return e(r,i),t(()=>{l(i,n.lineClassName)}),t(()=>{let e=n.lineStyle;m(i,e)}),r}):``;f(()=>s(r,g,x))}),g}),z=Object.assign(n=>{let{resolvedDirection:r,cls:i,renderedItems:o}=g(`useSetup:0:0:dup3`,()=>c(()=>{let e=g(`computed:1:3`,()=>h(()=>ee(n.direction,n.orientation))),t=e;return{resolvedDirection:e,cls:g(`computed:1:4`,()=>h(()=>T(`timeline`,t.get()&&`timeline-${t.get()}`,n.snapIcon&&`timeline-snap-icon`,n.compact&&`timeline-compact`,n.className))),renderedItems:g(`computed:1:5`,()=>h(()=>n.items&&n.items.length?P(n.items,n.mode,n.reverse,n.pending,n.pendingDot):n.pending?P([],n.mode,n.reverse,n.pending,n.pendingDot):null))}}));return a(r=>{let a=u(`ul`,r);t(()=>{l(a,i.get())});let c=p(`rue:slot:anchor`);return e(a,c),t(()=>{let e=o.get()?o.get().map(R):n.children;f(()=>s(e,a,c))}),a})},{Start:F,Middle:I,End:L}),B=(...e)=>e.filter(Boolean).join(` `),V={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},H={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},U={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},W=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,G=n=>a(r=>{let c=u(`div`,r);l(c,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=u(`div`,c);e(c,m),l(m,`flex flex-wrap items-start justify-between gap-3`);let h=u(`div`,m);e(m,h);let g=u(`h2`,h);e(h,g),l(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(g,i(`# `));let _=p(`rue:slot:anchor`);e(g,_),t(()=>{let e=n.title;f(()=>s(e,g,_))});let v=p(`rue:slot:anchor`);e(h,v),t(()=>{let r=n.summary?a(()=>{let r=o(),i=u(`p`,r);e(r,i),l(i,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.summary;f(()=>s(e,i,a))}),r}):``;f(()=>s(r,h,v))});let y=p(`rue:component:anchor`);e(c,y),t(()=>{let e=d(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:n.tab.value,onChange:e=>n.tab.value=e,className:`mb-3 mt-4`});f(()=>s(e,c,y))});let S=p(`rue:slot:anchor`);return e(c,S),t(()=>{let r=n.tab.value===`preview`?n.preview():a(()=>{let r=o(),i=p(`rue:component:anchor`);return e(r,i),t(()=>{let e=d(b,{className:`mt-2`,lang:`tsx`,code:n.code});f(()=>s(e,r,i))}),r});f(()=>s(r,c,S))}),c}),re=n=>a(c=>{let d=u(`div`,c);l(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=u(`table`,d);e(d,m),l(m,`table table-zebra`);let h=u(`thead`,m);e(m,h);let g=u(`tr`,h);e(h,g);let v=u(`th`,g);e(g,v),e(v,i(`属性`));let y=u(`th`,g);e(g,y),e(y,i(`说明`));let b=u(`th`,g);e(g,b),e(b,i(`类型`));let x=u(`th`,g);e(g,x),e(x,i(`默认值`));let S=u(`tbody`,m);e(m,S);let C=p(`rue:list:start`),w=p(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=_({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,l,d)=>{s(a(()=>{let i=o(),a=u(`tr`,i);e(i,a),t(()=>{r(a,`key`,String(n.prop))});let c=u(`td`,a);e(a,c);let l=u(`code`,c);e(c,l);let d=p(`rue:slot:anchor`);e(l,d),t(()=>{let e=n.prop;f(()=>s(e,l,d))});let m=u(`td`,a);e(a,m);let h=p(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.description;f(()=>s(e,m,h))});let g=u(`td`,a);e(a,g);let _=u(`code`,g);e(g,_);let v=p(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;f(()=>s(e,_,v))});let y=u(`td`,a);e(a,y);let b=u(`code`,y);e(y,b);let x=p(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;f(()=>s(e,b,x))}),i}),i,c)}})}),d}),K=n=>a(r=>{let i=u(`span`,r);t(()=>{l(i,B(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,V[n.tone===void 0?`primary`:n.tone]))});let a=p(`rue:slot:anchor`);return e(i,a),t(()=>{let e=n.label===void 0?`•`:n.label;f(()=>s(e,i,a))}),i}),q=n=>a(r=>{let i=u(`div`,r);l(i,`space-y-2 text-left`);let a=u(`div`,i);e(i,a),t(()=>{l(a,B(`badge badge-sm`,H[n.tone===void 0?`primary`:n.tone]))});let o=p(`rue:slot:anchor`);e(a,o),t(()=>{let e=n.badge;f(()=>s(e,a,o))});let c=u(`div`,i);e(i,c),l(c,`font-medium leading-5`);let d=p(`rue:slot:anchor`);e(c,d),t(()=>{let e=n.title;f(()=>s(e,c,d))});let m=u(`div`,i);e(i,m),l(m,`text-xs leading-5 opacity-70`);let h=p(`rue:slot:anchor`);return e(m,h),t(()=>{let e=n.summary;f(()=>s(e,m,h))}),i}),J=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=J.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=J.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:W,content:e.year},middle:{content:v(K,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:v(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:v(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:v(q,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:v(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:v(q,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:v(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:v(q,{title:`上线校验`,summary:`在真实流量前补充埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:v(q,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:v(q,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>J.slice(0,4).map(e=>({key:`${e.year}-color`,title:v(`span`,{className:B(`badge badge-sm`,H[e.tone]),children:e.badge}),content:v(q,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:v(q,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:v(K,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:v(q,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:v(K,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:v(q,{title:`灰度上线`,summary:`展示观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:v(K,{tone:`success`,label:`3`})}],Y=n=>{let{isVertical:m}=g(`useSetup:0:0`,()=>c(()=>({isVertical:g(`computed:1:0`,()=>h(()=>(n.orientation===void 0?`horizontal`:n.orientation)===`vertical`))})));return a(c=>{let h=u(`div`,c);t(()=>{l(h,m.get()?``:`overflow-x-auto pb-2`)});let g=p(`rue:component:anchor`);return e(h,g),t(()=>{let c=d(z,{orientation:m.get()?`vertical`:void 0,snapIcon:n.snapIcon,compact:n.compact,className:m.get()?`max-w-3xl`:`min-w-[860px]`,children:a(()=>{let c=o(),m=p(`rue:list:start`),h=p(`rue:list:end`);e(c,m),e(c,h);let g=new Map;return t(()=>{g=_({items:J||[],getKey:(e,t)=>`${n.orientation===void 0?`horizontal`:n.orientation}-${e.year}-${n.bottomOnly?`end`:`full`}`,elements:g,parent:m.parentNode,before:h,singleRoot:!0,start:m,renderItem:(c,m,h,g,_)=>{s(a(()=>{let m=o(),h=_>0,g=_<J.length-1,v=n.colored?U[c.tone]:void 0,y=!!n.alternate&&_%2==0,b=u(`li`,m);e(m,b),t(()=>{r(b,`key`,String(`${n.orientation===void 0?`horizontal`:n.orientation}-${c.year}-${n.bottomOnly?`end`:`full`}`))});let x=p(`rue:slot:anchor`);e(b,x),t(()=>{let n=h?a(()=>{let n=o(),r=u(`hr`,n);return e(n,r),t(()=>{l(r,v)}),n}):``;f(()=>s(n,b,x))}),e(b,i(` `));let S=p(`rue:slot:anchor`);e(b,S),t(()=>{let r=n.bottomOnly?``:a(y?()=>{let n=o(),r=p(`rue:component:anchor`);e(n,r);let i=d(q,{title:c.title,summary:c.summary,badge:c.badge,tone:c.tone});return t(()=>{let e=d(z.Start,{box:!0,children:i});f(()=>s(e,n,r))}),n}:()=>{let n=o(),r=p(`rue:component:anchor`);return e(n,r),t(()=>{let e=d(z.Start,{className:W,children:c.year});f(()=>s(e,n,r))}),n});f(()=>s(r,b,S))}),e(b,i(` `));let C=p(`rue:slot:anchor`);e(b,C),t(()=>{let t=n.noIcons?``:a(()=>{let t=o(),n=p(`rue:component:anchor`);e(t,n);let r=d(K,{tone:c.tone,label:String(_+1)});return s(d(z.Middle,{children:r}),t,n),t});f(()=>s(t,b,C))}),e(b,i(` `));let w=p(`rue:slot:anchor`);e(b,w),t(()=>{let r=n.bottomOnly?a(()=>{let n=o(),r=p(`rue:component:anchor`);e(n,r);let i=d(q,{title:c.title,summary:c.summary,badge:c.badge,tone:c.tone});return t(()=>{let e=d(z.End,{box:!0,children:i});f(()=>s(e,n,r))}),n}):a(y?()=>{let n=o(),r=p(`rue:component:anchor`);return e(n,r),t(()=>{let e=d(z.End,{className:W,children:c.year});f(()=>s(e,n,r))}),n}:()=>{let n=o(),r=p(`rue:component:anchor`);e(n,r);let i=d(q,{title:c.title,summary:c.summary,badge:c.badge,tone:c.tone});return t(()=>{let e=d(z.End,{box:!0,children:i});f(()=>s(e,n,r))}),n});f(()=>s(r,b,w))}),e(b,i(` `));let T=p(`rue:slot:anchor`);return e(b,T),t(()=>{let n=g?a(()=>{let n=o(),r=u(`hr`,n);return e(n,r),t(()=>{l(r,v)}),n}):``;f(()=>s(n,b,T))}),m}),m,h)}})}),c})});f(()=>s(c,h,g))}),h})},ue=[{prop:`children`,description:`展示基础手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，使用 Rue 当前命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的接入写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合使用 Rue 基础的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的别名，可用于衔接基础心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合整合基础示例 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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
          保持观察窗口和回滚钩子，让上线是一个可管理过程。
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

<Timeline orientation="vertical" compact snapIcon items={items} />`,X=()=>{let{tabArray:m,tabArrayInternal:h,tabDataApi:_,tabBothSides:b,tabBottomOnly:x,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:ee,tabVDifferentSides:te,tabVColorfulLines:ne,tabSnapStart:D}=g(`useSetup:0:0:dup1`,()=>c(()=>({tabArray:g(`ref:1:1`,()=>n(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>n(`preview`)),tabDataApi:g(`ref:1:3`,()=>n(`preview`)),tabBothSides:g(`ref:1:4`,()=>n(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>n(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>n(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>n(`preview`)),tabNoIcons:g(`ref:1:8`,()=>n(`preview`)),tabVBothSides:g(`ref:1:9`,()=>n(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>n(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>n(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>n(`preview`)),tabSnapStart:g(`ref:1:13`,()=>n(`preview`))})));return a(n=>{let c=o(),g=p(`rue:component:anchor`);return e(c,g),s(d(S,{children:a(()=>{let n=o(),a=u(`div`,n);e(n,a),l(a,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,a);e(a,c),e(c,i(`Timeline 时间线`));let g=u(`p`,a);e(a,g),l(g,`text-sm mt-3 mb-3`),e(g,i(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；项目页面里的示例 标题与排列也展示，避免增强时把基础示例吞掉。`));let S=u(`div`,a);e(a,S),l(S,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=u(`div`,S);e(S,O),l(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=u(`div`,O);e(O,k),l(k,`badge badge-info badge-soft badge-sm`),e(k,i(`数据驱动`));let A=u(`div`,O);e(O,A),l(A,`mt-3 font-medium`),e(A,i(`items、mode、reverse`));let j=u(`p`,O);e(O,j),l(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),e(j,i(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=u(`div`,S);e(S,M),l(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=u(`div`,M);e(M,N),l(N,`badge badge-secondary badge-soft badge-sm`),e(N,i(`精细布局`));let P=u(`div`,M);e(M,P),l(P,`mt-3 font-medium`),e(P,i(`Start / Middle / End`));let F=u(`p`,M);e(M,F),l(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),e(F,i(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=u(`div`,S);e(S,I),l(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=u(`div`,I);e(I,L),l(L,`badge badge-warning badge-soft badge-sm`),e(L,i(`视觉控制`));let R=u(`div`,I);e(I,R),l(R,`mt-3 font-medium`),e(R,i(`color、snapIcon、compact`));let B=u(`p`,I);e(I,B),l(B,`mt-2 mb-0 text-sm leading-6 opacity-70`),e(B,i(`在不改 Rue 当前视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补充。`));let V=u(`div`,a);e(a,V),r(V,`role`,`alert`),l(V,`alert alert-soft alert-info not-prose my-6`);let H=u(`span`,V);e(V,H),l(H,`text-sm leading-6`),e(H,i(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保持 hr 以获得最稳定的布局。`));let U=p(`rue:component:anchor`);e(a,U),t(()=>{let e=d(G,{title:`Timeline 通过数据渲染（数组）`,summary:`展示基础“外部数组 map 成 li”的用法，但示例内容更完整，适合从现成业务数据直接渲染。`,tab:m,preview:()=>v(`div`,{className:`overflow-x-auto pb-2`,children:v(z,{className:`min-w-[860px]`,children:ie.map(e=>y(`li`,{children:[e.beforeLine?v(`hr`,{}):null,v(z.Start,{className:W,children:e.year}),v(z.Middle,{children:v(K,{tone:e.tone,label:`✓`})}),v(z.End,{box:!0,children:v(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?v(`hr`,{}):null]},e.key))})}),code:fe});f(()=>s(e,a,U))});let J=p(`rue:component:anchor`);e(a,J),t(()=>{let e=d(G,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 基础的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:h,preview:()=>v(`div`,{className:`overflow-x-auto pb-2`,children:v(z,{items:ae,className:`min-w-[860px]`})}),code:pe});f(()=>s(e,a,J))});let X=p(`rue:component:anchor`);e(a,X),t(()=>{let e=d(G,{title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:_,preview:()=>v(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});f(()=>s(e,a,X))});let Te=p(`rue:component:anchor`);e(a,Te),t(()=>{let e=d(G,{title:`两侧文字与图标`,summary:`展示基础复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:b,preview:()=>Y({orientation:`horizontal`}),code:he});f(()=>s(e,a,Te))});let Ee=p(`rue:component:anchor`);e(a,Ee),t(()=>{let e=d(G,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:x,preview:()=>Y({orientation:`horizontal`,bottomOnly:!0}),code:ge});f(()=>s(e,a,Ee))});let De=p(`rue:component:anchor`);e(a,De),t(()=>{let e=d(G,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>v(z,{mode:`alternate`,items:oe()}),code:_e});f(()=>s(e,a,De))});let Oe=p(`rue:component:anchor`);e(a,Oe),t(()=>{let e=d(G,{title:`彩色线条`,summary:`color 会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>v(`div`,{className:`overflow-x-auto pb-2`,children:v(z,{items:ce(),className:`min-w-[860px]`})}),code:ve});f(()=>s(e,a,Oe))});let ke=p(`rue:component:anchor`);e(a,ke),t(()=>{let e=d(G,{title:`无图标`,summary:`如果只想保持轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>Y({orientation:`horizontal`,noIcons:!0}),code:ye});f(()=>s(e,a,ke))});let Ae=p(`rue:component:anchor`);e(a,Ae),t(()=>{let e=d(G,{title:`纵向：两侧文字与图标`,summary:`纵向布局仍然适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>Y({orientation:`vertical`}),code:be});f(()=>s(e,a,Ae))});let je=p(`rue:component:anchor`);e(a,je),t(()=>{let e=d(G,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保持内容一侧，把主信息集中在右侧阅读。`,tab:ee,preview:()=>Y({orientation:`vertical`,bottomOnly:!0}),code:xe});f(()=>s(e,a,je))});let Me=p(`rue:component:anchor`);e(a,Me),t(()=>{let e=d(G,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:te,preview:()=>v(z,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});f(()=>s(e,a,Me))});let Ne=p(`rue:component:anchor`);e(a,Ne),t(()=>{let e=d(G,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:ne,preview:()=>v(z,{orientation:`vertical`,items:ce()}),code:Ce});f(()=>s(e,a,Ne))});let Pe=p(`rue:component:anchor`);e(a,Pe),t(()=>{let e=d(G,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:D,preview:()=>v(z,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});f(()=>s(e,a,Pe))});let Fe=u(`h2`,a);e(a,Fe),e(Fe,i(`增强能力`));let Z=u(`p`,a);e(a,Z),l(Z,`text-sm opacity-80`),e(Z,i("本节集中展示数据 API 的组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=p(`rue:component:anchor`);e(a,Ie),t(()=>{let e=d(G,{title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:_,preview:()=>v(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});f(()=>s(e,a,Ie))});let Q=u(`div`,a);e(a,Q),l(Q,`my-10 lg:my-14`);let Le=u(`h2`,Q);e(Q,Le),e(Le,i(`API`));let $=u(`p`,Q);e(Q,$),l($,`text-sm leading-6 opacity-70`),e($,i(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let Re=u(`h3`,Q);e(Q,Re),l(Re,`mt-6`),e(Re,i(`Timeline`));let ze=p(`rue:component:anchor`);e(Q,ze),t(()=>{let e=d(re,{rows:ue});f(()=>s(e,Q,ze))});let Be=u(`h3`,Q);e(Q,Be),l(Be,`mt-8`),e(Be,i(`TimelineItemProps`));let Ve=p(`rue:component:anchor`);return e(Q,Ve),t(()=>{let e=d(re,{rows:de});f(()=>s(e,Q,Ve))}),n})}),c,g),c})};export{X as default};
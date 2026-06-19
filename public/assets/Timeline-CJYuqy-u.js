import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,l as s,lt as c,o as l,pt as u,st as d,t as f,tt as p,vt as m,zt as h}from"./vapor-runtime-CXIalONM.js";import{a as g,n as _}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as v,i as y}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as b}from"./Code-BIscIyEp.js";import{t as x}from"./tabs-CZWMQq5i.js";import{r as S}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),D=e=>s(t=>{let r=o(`span`,t);return n(()=>{c(r,T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e.className))}),r}),O=e=>s(t=>{let r=o(`span`,t);return n(()=>{c(r,T(`loading loading-spinner loading-xs`,e.className))}),r}),k=e=>T(e.lineClassName,e.color?w[e.color]:void 0),A=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},j=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(E(e.icon))return{className:r,content:e.icon};if(E(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:y(O,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:y(`span`,{style:{color:e.color},children:y(D,{})})};if(t)return{className:r,content:y(D,{})}},M=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=E(n)&&r!==n;if(!E(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},N=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!E(t),contentBox:!0,liClassName:`opacity-80`}:null,P=(e,t,n,r,i)=>{let a=e.slice(),o=N(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:M(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:j(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:k(e),lineStyle:A(e)}})},F=e=>{let{cls:u}=g(`useSetup:0:0`,()=>a(()=>({cls:g(`computed:1:0`,()=>m(()=>T(`timeline-start`,e.box&&`timeline-box`,e.className)))})));return s(a=>{let s=o(`div`,a);n(()=>{c(s,u.get())});let d=t(`rue:children:anchor`);return i(s,d),n(()=>{let t=e.children;r(()=>l(t,s,d))}),s})},I=e=>{let{cls:u}=g(`useSetup:0:0:dup1`,()=>a(()=>({cls:g(`computed:1:1`,()=>m(()=>T(`timeline-middle`,e.className)))})));return s(a=>{let s=o(`div`,a);n(()=>{c(s,u.get())});let d=t(`rue:children:anchor`);return i(s,d),n(()=>{let t=e.children;r(()=>l(t,s,d))}),s})},L=e=>{let{cls:u}=g(`useSetup:0:0:dup2`,()=>a(()=>({cls:g(`computed:1:2`,()=>m(()=>T(`timeline-end`,e.box&&`timeline-box`,e.className)))})));return s(a=>{let s=o(`div`,a);n(()=>{c(s,u.get())});let d=t(`rue:children:anchor`);return i(s,d),n(()=>{let t=e.children;r(()=>l(t,s,d))}),s})},R=(a,m)=>s(h=>{let g=o(`li`,h);n(()=>{c(g,a.liClassName)}),n(()=>{d(g,`key`,String(a.key??m))});let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let t=a.beforeLine?s(()=>{let t=e(),r=o(`hr`,t);return i(t,r),n(()=>{c(r,a.lineClassName)}),n(()=>{let e=a.lineStyle;u(r,e)}),t}):``;r(()=>l(t,g,_))}),i(g,p(` `));let v=t(`rue:slot:anchor`);i(g,v),n(()=>{let o=a.start?s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=f(F,{box:a.start.box,className:a.start.className,children:a.start.content});r(()=>l(e,o,s))}),o}):``;r(()=>l(o,g,v))}),i(g,p(` `));let y=t(`rue:slot:anchor`);i(g,y),n(()=>{let o=a.middle?s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=f(I,{className:a.middle.className,children:a.middle.content});r(()=>l(e,o,s))}),o}):``;r(()=>l(o,g,y))}),i(g,p(` `));let b=t(`rue:slot:anchor`);i(g,b),n(()=>{let o=a.end?s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=f(L,{box:a.end.box,className:a.end.className,children:a.end.content});r(()=>l(e,o,s))}),o}):``;r(()=>l(o,g,b))}),i(g,p(` `));let x=t(`rue:slot:anchor`);return i(g,x),n(()=>{let t=a.afterLine?s(()=>{let t=e(),r=o(`hr`,t);return i(t,r),n(()=>{c(r,a.lineClassName)}),n(()=>{let e=a.lineStyle;u(r,e)}),t}):``;r(()=>l(t,g,x))}),g}),z=Object.assign(e=>{let{resolvedDirection:u,cls:d,renderedItems:f}=g(`useSetup:0:0:dup3`,()=>a(()=>{let t=g(`computed:1:3`,()=>m(()=>ee(e.direction,e.orientation))),n=t;return{resolvedDirection:t,cls:g(`computed:1:4`,()=>m(()=>T(`timeline`,n.get()&&`timeline-${n.get()}`,e.snapIcon&&`timeline-snap-icon`,e.compact&&`timeline-compact`,e.className))),renderedItems:g(`computed:1:5`,()=>m(()=>e.items&&e.items.length?P(e.items,e.mode,e.reverse,e.pending,e.pendingDot):e.pending?P([],e.mode,e.reverse,e.pending,e.pendingDot):null))}}));return s(a=>{let s=o(`ul`,a);n(()=>{c(s,d.get())});let u=t(`rue:slot:anchor`);return i(s,u),n(()=>{let t=f.get()?f.get().map(R):e.children;r(()=>l(t,s,u))}),s})},{Start:F,Middle:I,End:L}),B=(...e)=>e.filter(Boolean).join(` `),V={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},H={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},U={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},W=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,G=a=>s(u=>{let d=o(`div`,u);c(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,d);i(d,m),c(m,`flex flex-wrap items-start justify-between gap-3`);let h=o(`div`,m);i(m,h);let g=o(`h2`,h);i(h,g),c(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(g,p(`# `));let _=t(`rue:slot:anchor`);i(g,_),n(()=>{let e=a.title;r(()=>l(e,g,_))});let v=t(`rue:slot:anchor`);i(h,v),n(()=>{let u=a.summary?s(()=>{let s=e(),u=o(`p`,s);i(s,u),c(u,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let d=t(`rue:slot:anchor`);return i(u,d),n(()=>{let e=a.summary;r(()=>l(e,u,d))}),s}):``;r(()=>l(u,h,v))});let y=t(`rue:component:anchor`);i(d,y),n(()=>{let e=f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:a.tab.value,onChange:e=>a.tab.value=e,className:`mb-3 mt-4`});r(()=>l(e,d,y))});let S=t(`rue:slot:anchor`);return i(d,S),n(()=>{let o=a.tab.value===`preview`?a.preview():s(()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=f(b,{className:`mt-2`,lang:`tsx`,code:a.code});r(()=>l(e,o,s))}),o});r(()=>l(o,d,S))}),d}),re=a=>s(u=>{let f=o(`div`,u);c(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);i(f,m),c(m,`table table-zebra`);let h=o(`thead`,m);i(m,h);let g=o(`tr`,h);i(h,g);let v=o(`th`,g);i(g,v),i(v,p(`属性`));let y=o(`th`,g);i(g,y),i(y,p(`说明`));let b=o(`th`,g);i(g,b),i(b,p(`类型`));let x=o(`th`,g);i(g,x),i(x,p(`默认值`));let S=o(`tbody`,m);i(m,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=_({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,c,u,f,p)=>{l(s(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{d(c,`key`,String(a.prop))});let u=o(`td`,c);i(c,u);let f=o(`code`,u);i(u,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.prop;r(()=>l(e,f,p))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>l(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>l(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>l(e,b,x))}),s}),c,u)}})}),f}),K=e=>s(a=>{let s=o(`span`,a);n(()=>{c(s,B(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,V[e.tone===void 0?`primary`:e.tone]))});let u=t(`rue:slot:anchor`);return i(s,u),n(()=>{let t=e.label===void 0?`•`:e.label;r(()=>l(t,s,u))}),s}),q=e=>s(a=>{let s=o(`div`,a);c(s,`space-y-2 text-left`);let u=o(`div`,s);i(s,u),n(()=>{c(u,B(`badge badge-sm`,H[e.tone===void 0?`primary`:e.tone]))});let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let t=e.badge;r(()=>l(t,u,d))});let f=o(`div`,s);i(s,f),c(f,`font-medium leading-5`);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let t=e.title;r(()=>l(t,f,p))});let m=o(`div`,s);i(s,m),c(m,`text-xs leading-5 opacity-70`);let h=t(`rue:slot:anchor`);return i(m,h),n(()=>{let t=e.summary;r(()=>l(t,m,h))}),s}),J=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=J.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=J.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:W,content:e.year},middle:{content:y(K,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:y(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:y(q,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:y(q,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:y(q,{title:`上线校验`,summary:`在真实流量前补齐埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:y(q,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:y(q,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>J.slice(0,4).map(e=>({key:`${e.year}-color`,title:y(`span`,{className:B(`badge badge-sm`,H[e.tone]),children:e.badge}),content:y(q,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:y(q,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:y(K,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:y(q,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:y(K,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:y(q,{title:`灰度上线`,summary:`保留观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:y(K,{tone:`success`,label:`3`})}],Y=u=>{let{isVertical:h}=g(`useSetup:0:0`,()=>a(()=>({isVertical:g(`computed:1:0`,()=>m(()=>(u.orientation===void 0?`horizontal`:u.orientation)===`vertical`))})));return s(a=>{let m=o(`div`,a);n(()=>{c(m,h.get()?``:`overflow-x-auto pb-2`)});let g=t(`rue:component:anchor`);return i(m,g),n(()=>{let a=f(z,{orientation:h.get()?`vertical`:void 0,snapIcon:u.snapIcon,compact:u.compact,className:h.get()?`max-w-3xl`:`min-w-[860px]`,children:s(()=>{let a=e(),m=t(`rue:list:start`),h=t(`rue:list:end`);i(a,m),i(a,h);let g=new Map;return n(()=>{g=_({items:J||[],getKey:(e,t)=>`${u.orientation===void 0?`horizontal`:u.orientation}-${e.year}-${u.bottomOnly?`end`:`full`}`,elements:g,parent:m.parentNode,before:h,singleRoot:!0,start:m,renderItem:(a,m,h,g,_)=>{l(s(()=>{let m=e(),h=_>0,g=_<J.length-1,v=u.colored?U[a.tone]:void 0,y=!!u.alternate&&_%2==0,b=o(`li`,m);i(m,b),n(()=>{d(b,`key`,String(`${u.orientation===void 0?`horizontal`:u.orientation}-${a.year}-${u.bottomOnly?`end`:`full`}`))});let x=t(`rue:slot:anchor`);i(b,x),n(()=>{let t=h?s(()=>{let t=e(),r=o(`hr`,t);return i(t,r),n(()=>{c(r,v)}),t}):``;r(()=>l(t,b,x))}),i(b,p(` `));let S=t(`rue:slot:anchor`);i(b,S),n(()=>{let o=u.bottomOnly?``:s(y?()=>{let o=e(),s=t(`rue:component:anchor`);i(o,s);let c=f(q,{title:a.title,summary:a.summary,badge:a.badge,tone:a.tone});return n(()=>{let e=f(z.Start,{box:!0,children:c});r(()=>l(e,o,s))}),o}:()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=f(z.Start,{className:W,children:a.year});r(()=>l(e,o,s))}),o});r(()=>l(o,b,S))}),i(b,p(` `));let C=t(`rue:slot:anchor`);i(b,C),n(()=>{let n=u.noIcons?``:s(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let o=f(K,{tone:a.tone,label:String(_+1)});return l(f(z.Middle,{children:o}),n,r),n});r(()=>l(n,b,C))}),i(b,p(` `));let w=t(`rue:slot:anchor`);i(b,w),n(()=>{let o=u.bottomOnly?s(()=>{let o=e(),s=t(`rue:component:anchor`);i(o,s);let c=f(q,{title:a.title,summary:a.summary,badge:a.badge,tone:a.tone});return n(()=>{let e=f(z.End,{box:!0,children:c});r(()=>l(e,o,s))}),o}):s(y?()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=f(z.End,{className:W,children:a.year});r(()=>l(e,o,s))}),o}:()=>{let o=e(),s=t(`rue:component:anchor`);i(o,s);let c=f(q,{title:a.title,summary:a.summary,badge:a.badge,tone:a.tone});return n(()=>{let e=f(z.End,{box:!0,children:c});r(()=>l(e,o,s))}),o});r(()=>l(o,b,w))}),i(b,p(` `));let T=t(`rue:slot:anchor`);return i(b,T),n(()=>{let t=g?s(()=>{let t=e(),r=o(`hr`,t);return i(t,r),n(()=>{c(r,v)}),t}):``;r(()=>l(t,b,T))}),m}),m,h)}})}),a})});r(()=>l(a,m,g))}),m})},ue=[{prop:`children`,description:`保留原有手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，保留 Rue 现有命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的迁移写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合沿用 Rue 原有的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的兼容别名，可用于迁移旧心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的兼容别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合保留旧 demo 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,X=()=>{let{tabArray:u,tabArrayInternal:m,tabDataApi:_,tabBothSides:b,tabBottomOnly:x,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:ee,tabVDifferentSides:te,tabVColorfulLines:ne,tabSnapStart:D}=g(`useSetup:0:0:dup1`,()=>a(()=>({tabArray:g(`ref:1:1`,()=>h(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>h(`preview`)),tabDataApi:g(`ref:1:3`,()=>h(`preview`)),tabBothSides:g(`ref:1:4`,()=>h(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>h(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>h(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>h(`preview`)),tabNoIcons:g(`ref:1:8`,()=>h(`preview`)),tabVBothSides:g(`ref:1:9`,()=>h(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>h(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>h(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>h(`preview`)),tabSnapStart:g(`ref:1:13`,()=>h(`preview`))})));return s(a=>{let h=e(),g=t(`rue:component:anchor`);return i(h,g),l(f(S,{children:s(()=>{let a=e(),s=o(`div`,a);i(a,s),c(s,`max-w-none prose prose-sm md:prose-base`);let h=o(`h1`,s);i(s,h),i(h,p(`Timeline 时间线`));let g=o(`p`,s);i(s,g),c(g,`text-sm mt-3 mb-3`),i(g,p(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；旧页里的 demo 标题与排列也继续保留，避免增强时把历史示例吞掉。`));let S=o(`div`,s);i(s,S),c(S,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=o(`div`,S);i(S,O),c(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=o(`div`,O);i(O,k),c(k,`badge badge-info badge-soft badge-sm`),i(k,p(`数据驱动`));let A=o(`div`,O);i(O,A),c(A,`mt-3 font-medium`),i(A,p(`items、mode、reverse`));let j=o(`p`,O);i(O,j),c(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),i(j,p(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=o(`div`,S);i(S,M),c(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=o(`div`,M);i(M,N),c(N,`badge badge-secondary badge-soft badge-sm`),i(N,p(`精细布局`));let P=o(`div`,M);i(M,P),c(P,`mt-3 font-medium`),i(P,p(`Start / Middle / End`));let F=o(`p`,M);i(M,F),c(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),i(F,p(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=o(`div`,S);i(S,I),c(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=o(`div`,I);i(I,L),c(L,`badge badge-warning badge-soft badge-sm`),i(L,p(`视觉控制`));let R=o(`div`,I);i(I,R),c(R,`mt-3 font-medium`),i(R,p(`color、snapIcon、compact`));let B=o(`p`,I);i(I,B),c(B,`mt-2 mb-0 text-sm leading-6 opacity-70`),i(B,p(`在不改 Rue 现有视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补齐。`));let V=o(`div`,s);i(s,V),d(V,`role`,`alert`),c(V,`alert alert-soft alert-info not-prose my-6`);let H=o(`span`,V);i(V,H),c(H,`text-sm leading-6`),i(H,p(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保留 hr 以获得最稳定的布局。`));let U=t(`rue:component:anchor`);i(s,U),n(()=>{let e=f(G,{title:`Timeline 通过数据渲染（数组）`,summary:`保留原有“外部数组 map 成 li”的用法，但示例内容更完整，适合从已有业务数据直接渲染。`,tab:u,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{className:`min-w-[860px]`,children:ie.map(e=>v(`li`,{children:[e.beforeLine?y(`hr`,{}):null,y(z.Start,{className:W,children:e.year}),y(z.Middle,{children:y(K,{tone:e.tone,label:`✓`})}),y(z.End,{box:!0,children:y(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?y(`hr`,{}):null]},e.key))})}),code:fe});r(()=>l(e,s,U))});let J=t(`rue:component:anchor`);i(s,J),n(()=>{let e=f(G,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 旧版的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:m,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{items:ae,className:`min-w-[860px]`})}),code:pe});r(()=>l(e,s,J))});let X=t(`rue:component:anchor`);i(s,X),n(()=>{let e=f(G,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});r(()=>l(e,s,X))});let Te=t(`rue:component:anchor`);i(s,Te),n(()=>{let e=f(G,{title:`两侧文字与图标`,summary:`保留原始复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:b,preview:()=>Y({orientation:`horizontal`}),code:he});r(()=>l(e,s,Te))});let Ee=t(`rue:component:anchor`);i(s,Ee),n(()=>{let e=f(G,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:x,preview:()=>Y({orientation:`horizontal`,bottomOnly:!0}),code:ge});r(()=>l(e,s,Ee))});let De=t(`rue:component:anchor`);i(s,De),n(()=>{let e=f(G,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>y(z,{mode:`alternate`,items:oe()}),code:_e});r(()=>l(e,s,De))});let Oe=t(`rue:component:anchor`);i(s,Oe),n(()=>{let e=f(G,{title:`彩色线条`,summary:`新增 color 支持会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{items:ce(),className:`min-w-[860px]`})}),code:ve});r(()=>l(e,s,Oe))});let ke=t(`rue:component:anchor`);i(s,ke),n(()=>{let e=f(G,{title:`无图标`,summary:`如果只想保留轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>Y({orientation:`horizontal`,noIcons:!0}),code:ye});r(()=>l(e,s,ke))});let Ae=t(`rue:component:anchor`);i(s,Ae),n(()=>{let e=f(G,{title:`纵向：两侧文字与图标`,summary:`纵向布局依旧适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>Y({orientation:`vertical`}),code:be});r(()=>l(e,s,Ae))});let je=t(`rue:component:anchor`);i(s,je),n(()=>{let e=f(G,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保留内容一侧，把主信息集中在右侧阅读。`,tab:ee,preview:()=>Y({orientation:`vertical`,bottomOnly:!0}),code:xe});r(()=>l(e,s,je))});let Me=t(`rue:component:anchor`);i(s,Me),n(()=>{let e=f(G,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:te,preview:()=>y(z,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});r(()=>l(e,s,Me))});let Ne=t(`rue:component:anchor`);i(s,Ne),n(()=>{let e=f(G,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:ne,preview:()=>y(z,{orientation:`vertical`,items:ce()}),code:Ce});r(()=>l(e,s,Ne))});let Pe=t(`rue:component:anchor`);i(s,Pe),n(()=>{let e=f(G,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:D,preview:()=>y(z,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});r(()=>l(e,s,Pe))});let Fe=o(`h2`,s);i(s,Fe),i(Fe,p(`增强能力`));let Z=o(`p`,s);i(s,Z),c(Z,`text-sm opacity-80`),i(Z,p("这一组集中放数据 API 的新增组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=t(`rue:component:anchor`);i(s,Ie),n(()=>{let e=f(G,{title:`reverse 与 pending`,summary:`这是新增的数据 API 组合场景：mode 控制主内容侧，reverse 反转顺序，pending 追加等待节点。`,tab:_,preview:()=>y(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});r(()=>l(e,s,Ie))});let Q=o(`div`,s);i(s,Q),c(Q,`my-10 lg:my-14`);let Le=o(`h2`,Q);i(Q,Le),i(Le,p(`API`));let $=o(`p`,Q);i(Q,$),c($,`text-sm leading-6 opacity-70`),i($,p(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let Re=o(`h3`,Q);i(Q,Re),c(Re,`mt-6`),i(Re,p(`Timeline`));let ze=t(`rue:component:anchor`);i(Q,ze),n(()=>{let e=f(re,{rows:ue});r(()=>l(e,Q,ze))});let Be=o(`h3`,Q);i(Q,Be),c(Be,`mt-8`),i(Be,p(`TimelineItemProps`));let Ve=t(`rue:component:anchor`);return i(Q,Ve),n(()=>{let e=f(re,{rows:de});r(()=>l(e,Q,Ve))}),a})}),h,g),h})};export{X as default};
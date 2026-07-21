import{At as e,Cn as t,Ct as n,Lt as r,Tt as i,dt as a,ft as o,mt as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,t as h}from"./vapor-runtime-ygJWVcNn.js";import{a as g,n as _}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as v}from"./Code-DhoWkRkB.js";import{n as y,t as b}from"./src-CCTNpCXV.js";import{t as x}from"./tabs-B1XdBEJF.js";import{r as S}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),D=e=>p(t=>{let n=l(`span`,t);return d(()=>{i(n,T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e.className))}),n}),O=e=>p(t=>{let n=l(`span`,t);return d(()=>{i(n,T(`loading loading-spinner loading-xs`,e.className))}),n}),k=e=>T(e.lineClassName,e.color?w[e.color]:void 0),A=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},j=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(E(e.icon))return{className:r,content:e.icon};if(E(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:b(O,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:b(`span`,{style:{color:e.color},children:b(D,{})})};if(t)return{className:r,content:b(D,{})}},M=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=E(n)&&r!==n;if(!E(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},N=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!E(t),contentBox:!0,liClassName:`opacity-80`}:null,P=(e,t,n,r,i)=>{let a=e.slice(),o=N(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:M(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:j(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:k(e),lineStyle:A(e)}})},F=e=>{let{cls:n}=g(`useSetup:0:0`,()=>t(()=>({cls:g(`computed:1:0`,()=>r(()=>T(`timeline-start`,e.box&&`timeline-box`,e.className)))})));return p(t=>{let r=l(`div`,t);d(()=>{i(r,n.get())});let o=a(`rue:children:anchor`);return u(r,o),d(()=>{let t=e.children;f(()=>m(t,r,o))}),r})},I=e=>{let{cls:n}=g(`useSetup:0:0:dup1`,()=>t(()=>({cls:g(`computed:1:1`,()=>r(()=>T(`timeline-middle`,e.className)))})));return p(t=>{let r=l(`div`,t);d(()=>{i(r,n.get())});let o=a(`rue:children:anchor`);return u(r,o),d(()=>{let t=e.children;f(()=>m(t,r,o))}),r})},L=e=>{let{cls:n}=g(`useSetup:0:0:dup2`,()=>t(()=>({cls:g(`computed:1:2`,()=>r(()=>T(`timeline-end`,e.box&&`timeline-box`,e.className)))})));return p(t=>{let r=l(`div`,t);d(()=>{i(r,n.get())});let o=a(`rue:children:anchor`);return u(r,o),d(()=>{let t=e.children;f(()=>m(t,r,o))}),r})},R=(t,r)=>p(c=>{let g=l(`li`,c);d(()=>{i(g,t.liClassName)}),d(()=>{n(g,`key`,String(t.key??r))});let _=a(`rue:slot:anchor`);u(g,_),d(()=>{let n=t.beforeLine?p(()=>{let n=o(),r=l(`hr`,n);return u(n,r),d(()=>{i(r,t.lineClassName)}),d(()=>{let n=t.lineStyle;e(r,n)}),n}):``;f(()=>m(n,g,_))}),u(g,s(` `));let v=a(`rue:slot:anchor`);u(g,v),d(()=>{let e=t.start?p(()=>{let e=o(),n=a(`rue:component:anchor`);return u(e,n),d(()=>{let r=h(F,{box:t.start.box,className:t.start.className,children:t.start.content});f(()=>m(r,e,n))}),e}):``;f(()=>m(e,g,v))}),u(g,s(` `));let y=a(`rue:slot:anchor`);u(g,y),d(()=>{let e=t.middle?p(()=>{let e=o(),n=a(`rue:component:anchor`);return u(e,n),d(()=>{let r=h(I,{className:t.middle.className,children:t.middle.content});f(()=>m(r,e,n))}),e}):``;f(()=>m(e,g,y))}),u(g,s(` `));let b=a(`rue:slot:anchor`);u(g,b),d(()=>{let e=t.end?p(()=>{let e=o(),n=a(`rue:component:anchor`);return u(e,n),d(()=>{let r=h(L,{box:t.end.box,className:t.end.className,children:t.end.content});f(()=>m(r,e,n))}),e}):``;f(()=>m(e,g,b))}),u(g,s(` `));let x=a(`rue:slot:anchor`);return u(g,x),d(()=>{let n=t.afterLine?p(()=>{let n=o(),r=l(`hr`,n);return u(n,r),d(()=>{i(r,t.lineClassName)}),d(()=>{let n=t.lineStyle;e(r,n)}),n}):``;f(()=>m(n,g,x))}),g}),z=Object.assign(e=>{let{resolvedDirection:n,cls:o,renderedItems:s}=g(`useSetup:0:0:dup3`,()=>t(()=>{let t=g(`computed:1:3`,()=>r(()=>ee(e.direction,e.orientation))),n=t;return{resolvedDirection:t,cls:g(`computed:1:4`,()=>r(()=>T(`timeline`,n.get()&&`timeline-${n.get()}`,e.snapIcon&&`timeline-snap-icon`,e.compact&&`timeline-compact`,e.className))),renderedItems:g(`computed:1:5`,()=>r(()=>e.items&&e.items.length?P(e.items,e.mode,e.reverse,e.pending,e.pendingDot):e.pending?P([],e.mode,e.reverse,e.pending,e.pendingDot):null))}}));return p(t=>{let n=l(`ul`,t);d(()=>{i(n,o.get())});let r=a(`rue:slot:anchor`);return u(n,r),d(()=>{let t=s.get()?s.get().map(R):e.children;f(()=>m(t,n,r))}),n})},{Start:F,Middle:I,End:L}),B=(...e)=>e.filter(Boolean).join(` `),V={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},H={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},U={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},W=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,G=e=>p(t=>{let n=l(`div`,t);i(n,`component-preview not-prose text-base-content my-6 lg:my-12`);let r=l(`div`,n);u(n,r),i(r,`flex flex-wrap items-start justify-between gap-3`);let c=l(`div`,r);u(r,c);let g=l(`h2`,c);u(c,g),i(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(g,s(`# `));let _=a(`rue:slot:anchor`);u(g,_),d(()=>{let t=e.title;f(()=>m(t,g,_))});let y=a(`rue:slot:anchor`);u(c,y),d(()=>{let t=e.summary?p(()=>{let t=o(),n=l(`p`,t);u(t,n),i(n,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let r=a(`rue:slot:anchor`);return u(n,r),d(()=>{let t=e.summary;f(()=>m(t,n,r))}),t}):``;f(()=>m(t,c,y))});let b=a(`rue:component:anchor`);u(n,b),d(()=>{let t=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});f(()=>m(t,n,b))});let S=a(`rue:slot:anchor`);return u(n,S),d(()=>{let t=e.tab.value===`preview`?e.preview():p(()=>{let t=o(),n=a(`rue:component:anchor`);return u(t,n),d(()=>{let r=h(v,{className:`mt-2`,lang:`tsx`,code:e.code});f(()=>m(r,t,n))}),t});f(()=>m(t,n,S))}),n}),re=e=>p(t=>{let r=l(`div`,t);i(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,r);u(r,c),i(c,`table table-zebra`);let h=l(`thead`,c);u(c,h);let g=l(`tr`,h);u(h,g);let v=l(`th`,g);u(g,v),u(v,s(`属性`));let y=l(`th`,g);u(g,y),u(y,s(`说明`));let b=l(`th`,g);u(g,b),u(b,s(`类型`));let x=l(`th`,g);u(g,x),u(x,s(`默认值`));let S=l(`tbody`,c);u(c,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);u(S,C),u(S,w);let T=new Map;return d(()=>{T=_({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,t,r,i,s)=>{m(p(()=>{let t=o(),r=l(`tr`,t);u(t,r),d(()=>{n(r,`key`,String(e.prop))});let i=l(`td`,r);u(r,i);let s=l(`code`,i);u(i,s);let c=a(`rue:slot:anchor`);u(s,c),d(()=>{let t=e.prop;f(()=>m(t,s,c))});let p=l(`td`,r);u(r,p);let h=a(`rue:slot:anchor`);u(p,h),d(()=>{let t=e.description;f(()=>m(t,p,h))});let g=l(`td`,r);u(r,g);let _=l(`code`,g);u(g,_);let v=a(`rue:slot:anchor`);u(_,v),d(()=>{let t=e.type;f(()=>m(t,_,v))});let y=l(`td`,r);u(r,y);let b=l(`code`,y);u(y,b);let x=a(`rue:slot:anchor`);return u(b,x),d(()=>{let t=e.defaultValue;f(()=>m(t,b,x))}),t}),t,r)}})}),r}),K=e=>p(t=>{let n=l(`span`,t);d(()=>{i(n,B(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,V[e.tone===void 0?`primary`:e.tone]))});let r=a(`rue:slot:anchor`);return u(n,r),d(()=>{let t=e.label===void 0?`•`:e.label;f(()=>m(t,n,r))}),n}),q=e=>p(t=>{let n=l(`div`,t);i(n,`space-y-2 text-left`);let r=l(`div`,n);u(n,r),d(()=>{i(r,B(`badge badge-sm`,H[e.tone===void 0?`primary`:e.tone]))});let o=a(`rue:slot:anchor`);u(r,o),d(()=>{let t=e.badge;f(()=>m(t,r,o))});let s=l(`div`,n);u(n,s),i(s,`font-medium leading-5`);let c=a(`rue:slot:anchor`);u(s,c),d(()=>{let t=e.title;f(()=>m(t,s,c))});let p=l(`div`,n);u(n,p),i(p,`text-xs leading-5 opacity-70`);let h=a(`rue:slot:anchor`);return u(p,h),d(()=>{let t=e.summary;f(()=>m(t,p,h))}),n}),J=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=J.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=J.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:W,content:e.year},middle:{content:b(K,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:b(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:b(q,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:b(q,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:b(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:b(q,{title:`上线校验`,summary:`在真实流量前补充埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:b(q,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:b(q,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>J.slice(0,4).map(e=>({key:`${e.year}-color`,title:b(`span`,{className:B(`badge badge-sm`,H[e.tone]),children:e.badge}),content:b(q,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:b(q,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:b(K,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:b(q,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:b(K,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:b(q,{title:`灰度上线`,summary:`展示观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:b(K,{tone:`success`,label:`3`})}],Y=e=>{let{isVertical:c}=g(`useSetup:0:0`,()=>t(()=>({isVertical:g(`computed:1:0`,()=>r(()=>(e.orientation===void 0?`horizontal`:e.orientation)===`vertical`))})));return p(t=>{let r=l(`div`,t);d(()=>{i(r,c.get()?``:`overflow-x-auto pb-2`)});let g=a(`rue:component:anchor`);return u(r,g),d(()=>{let t=h(z,{orientation:c.get()?`vertical`:void 0,snapIcon:e.snapIcon,compact:e.compact,className:c.get()?`max-w-3xl`:`min-w-[860px]`,children:p(()=>{let t=o(),r=a(`rue:list:start`),c=a(`rue:list:end`);u(t,r),u(t,c);let g=new Map;return d(()=>{g=_({items:J||[],getKey:(t,n)=>`${e.orientation===void 0?`horizontal`:e.orientation}-${t.year}-${e.bottomOnly?`end`:`full`}`,elements:g,parent:r.parentNode,before:c,singleRoot:!0,start:r,renderItem:(t,r,c,g,_)=>{m(p(()=>{let r=o(),c=_>0,g=_<J.length-1,v=e.colored?U[t.tone]:void 0,y=!!e.alternate&&_%2==0,b=l(`li`,r);u(r,b),d(()=>{n(b,`key`,String(`${e.orientation===void 0?`horizontal`:e.orientation}-${t.year}-${e.bottomOnly?`end`:`full`}`))});let x=a(`rue:slot:anchor`);u(b,x),d(()=>{let e=c?p(()=>{let e=o(),t=l(`hr`,e);return u(e,t),d(()=>{i(t,v)}),e}):``;f(()=>m(e,b,x))}),u(b,s(` `));let S=a(`rue:slot:anchor`);u(b,S),d(()=>{let n=e.bottomOnly?``:p(y?()=>{let e=o(),n=a(`rue:component:anchor`);u(e,n);let r=h(q,{title:t.title,summary:t.summary,badge:t.badge,tone:t.tone});return d(()=>{let t=h(z.Start,{box:!0,children:r});f(()=>m(t,e,n))}),e}:()=>{let e=o(),n=a(`rue:component:anchor`);return u(e,n),d(()=>{let r=h(z.Start,{className:W,children:t.year});f(()=>m(r,e,n))}),e});f(()=>m(n,b,S))}),u(b,s(` `));let C=a(`rue:slot:anchor`);u(b,C),d(()=>{let n=e.noIcons?``:p(()=>{let e=o(),n=a(`rue:component:anchor`);u(e,n);let r=h(K,{tone:t.tone,label:String(_+1)});return m(h(z.Middle,{children:r}),e,n),e});f(()=>m(n,b,C))}),u(b,s(` `));let w=a(`rue:slot:anchor`);u(b,w),d(()=>{let n=e.bottomOnly?p(()=>{let e=o(),n=a(`rue:component:anchor`);u(e,n);let r=h(q,{title:t.title,summary:t.summary,badge:t.badge,tone:t.tone});return d(()=>{let t=h(z.End,{box:!0,children:r});f(()=>m(t,e,n))}),e}):p(y?()=>{let e=o(),n=a(`rue:component:anchor`);return u(e,n),d(()=>{let r=h(z.End,{className:W,children:t.year});f(()=>m(r,e,n))}),e}:()=>{let e=o(),n=a(`rue:component:anchor`);u(e,n);let r=h(q,{title:t.title,summary:t.summary,badge:t.badge,tone:t.tone});return d(()=>{let t=h(z.End,{box:!0,children:r});f(()=>m(t,e,n))}),e});f(()=>m(n,b,w))}),u(b,s(` `));let T=a(`rue:slot:anchor`);return u(b,T),d(()=>{let e=g?p(()=>{let e=o(),t=l(`hr`,e);return u(e,t),d(()=>{i(t,v)}),e}):``;f(()=>m(e,b,T))}),r}),r,c)}})}),t})});f(()=>m(t,r,g))}),r})},ue=[{prop:`children`,description:`展示基础手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，使用 Rue 当前命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的接入写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合使用 Rue 基础的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的别名，可用于衔接基础心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合整合基础示例 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,X=()=>{let{tabArray:e,tabArrayInternal:r,tabDataApi:_,tabBothSides:v,tabBottomOnly:x,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:ee,tabVDifferentSides:te,tabVColorfulLines:ne,tabSnapStart:D}=g(`useSetup:0:0:dup1`,()=>t(()=>({tabArray:g(`ref:1:1`,()=>c(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>c(`preview`)),tabDataApi:g(`ref:1:3`,()=>c(`preview`)),tabBothSides:g(`ref:1:4`,()=>c(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>c(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>c(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>c(`preview`)),tabNoIcons:g(`ref:1:8`,()=>c(`preview`)),tabVBothSides:g(`ref:1:9`,()=>c(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>c(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>c(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>c(`preview`)),tabSnapStart:g(`ref:1:13`,()=>c(`preview`))})));return p(t=>{let c=o(),g=a(`rue:component:anchor`);return u(c,g),m(h(S,{children:p(()=>{let t=o(),c=l(`div`,t);u(t,c),i(c,`max-w-none prose prose-sm md:prose-base`);let p=l(`h1`,c);u(c,p),u(p,s(`Timeline 时间线`));let g=l(`p`,c);u(c,g),i(g,`text-sm mt-3 mb-3`),u(g,s(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；项目页面里的示例 标题与排列也展示，避免增强时把基础示例吞掉。`));let S=l(`div`,c);u(c,S),i(S,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=l(`div`,S);u(S,O),i(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=l(`div`,O);u(O,k),i(k,`badge badge-info badge-soft badge-sm`),u(k,s(`数据驱动`));let A=l(`div`,O);u(O,A),i(A,`mt-3 font-medium`),u(A,s(`items、mode、reverse`));let j=l(`p`,O);u(O,j),i(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(j,s(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=l(`div`,S);u(S,M),i(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=l(`div`,M);u(M,N),i(N,`badge badge-secondary badge-soft badge-sm`),u(N,s(`精细布局`));let P=l(`div`,M);u(M,P),i(P,`mt-3 font-medium`),u(P,s(`Start / Middle / End`));let F=l(`p`,M);u(M,F),i(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(F,s(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=l(`div`,S);u(S,I),i(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=l(`div`,I);u(I,L),i(L,`badge badge-warning badge-soft badge-sm`),u(L,s(`视觉控制`));let R=l(`div`,I);u(I,R),i(R,`mt-3 font-medium`),u(R,s(`color、snapIcon、compact`));let B=l(`p`,I);u(I,B),i(B,`mt-2 mb-0 text-sm leading-6 opacity-70`),u(B,s(`在不改 Rue 当前视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补充。`));let V=l(`div`,c);u(c,V),n(V,`role`,`alert`),i(V,`alert alert-soft alert-info not-prose my-6`);let H=l(`span`,V);u(V,H),i(H,`text-sm leading-6`),u(H,s(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保持 hr 以获得最稳定的布局。`));let U=a(`rue:component:anchor`);u(c,U),d(()=>{let t=h(G,{title:`Timeline 通过数据渲染（数组）`,summary:`展示基础“外部数组 map 成 li”的用法，但示例内容更完整，适合从现成业务数据直接渲染。`,tab:e,preview:()=>b(`div`,{className:`overflow-x-auto pb-2`,children:b(z,{className:`min-w-[860px]`,children:ie.map(e=>y(`li`,{children:[e.beforeLine?b(`hr`,{}):null,b(z.Start,{className:W,children:e.year}),b(z.Middle,{children:b(K,{tone:e.tone,label:`✓`})}),b(z.End,{box:!0,children:b(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?b(`hr`,{}):null]},e.key))})}),code:fe});f(()=>m(t,c,U))});let J=a(`rue:component:anchor`);u(c,J),d(()=>{let e=h(G,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 基础的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:r,preview:()=>b(`div`,{className:`overflow-x-auto pb-2`,children:b(z,{items:ae,className:`min-w-[860px]`})}),code:pe});f(()=>m(e,c,J))});let X=a(`rue:component:anchor`);u(c,X),d(()=>{let e=h(G,{title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:_,preview:()=>b(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});f(()=>m(e,c,X))});let Te=a(`rue:component:anchor`);u(c,Te),d(()=>{let e=h(G,{title:`两侧文字与图标`,summary:`展示基础复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:v,preview:()=>Y({orientation:`horizontal`}),code:he});f(()=>m(e,c,Te))});let Ee=a(`rue:component:anchor`);u(c,Ee),d(()=>{let e=h(G,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:x,preview:()=>Y({orientation:`horizontal`,bottomOnly:!0}),code:ge});f(()=>m(e,c,Ee))});let De=a(`rue:component:anchor`);u(c,De),d(()=>{let e=h(G,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>b(z,{mode:`alternate`,items:oe()}),code:_e});f(()=>m(e,c,De))});let Oe=a(`rue:component:anchor`);u(c,Oe),d(()=>{let e=h(G,{title:`彩色线条`,summary:`color 会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>b(`div`,{className:`overflow-x-auto pb-2`,children:b(z,{items:ce(),className:`min-w-[860px]`})}),code:ve});f(()=>m(e,c,Oe))});let ke=a(`rue:component:anchor`);u(c,ke),d(()=>{let e=h(G,{title:`无图标`,summary:`如果只想保持轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>Y({orientation:`horizontal`,noIcons:!0}),code:ye});f(()=>m(e,c,ke))});let Ae=a(`rue:component:anchor`);u(c,Ae),d(()=>{let e=h(G,{title:`纵向：两侧文字与图标`,summary:`纵向布局仍然适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>Y({orientation:`vertical`}),code:be});f(()=>m(e,c,Ae))});let je=a(`rue:component:anchor`);u(c,je),d(()=>{let e=h(G,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保持内容一侧，把主信息集中在右侧阅读。`,tab:ee,preview:()=>Y({orientation:`vertical`,bottomOnly:!0}),code:xe});f(()=>m(e,c,je))});let Me=a(`rue:component:anchor`);u(c,Me),d(()=>{let e=h(G,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:te,preview:()=>b(z,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});f(()=>m(e,c,Me))});let Ne=a(`rue:component:anchor`);u(c,Ne),d(()=>{let e=h(G,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:ne,preview:()=>b(z,{orientation:`vertical`,items:ce()}),code:Ce});f(()=>m(e,c,Ne))});let Pe=a(`rue:component:anchor`);u(c,Pe),d(()=>{let e=h(G,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:D,preview:()=>b(z,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});f(()=>m(e,c,Pe))});let Fe=l(`h2`,c);u(c,Fe),u(Fe,s(`增强能力`));let Z=l(`p`,c);u(c,Z),i(Z,`text-sm opacity-80`),u(Z,s("本节集中展示数据 API 的组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=a(`rue:component:anchor`);u(c,Ie),d(()=>{let e=h(G,{title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:_,preview:()=>b(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});f(()=>m(e,c,Ie))});let Q=l(`div`,c);u(c,Q),i(Q,`my-10 lg:my-14`);let Le=l(`h2`,Q);u(Q,Le),u(Le,s(`API`));let $=l(`p`,Q);u(Q,$),i($,`text-sm leading-6 opacity-70`),u($,s(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let Re=l(`h3`,Q);u(Q,Re),i(Re,`mt-6`),u(Re,s(`Timeline`));let ze=a(`rue:component:anchor`);u(Q,ze),d(()=>{let e=h(re,{rows:ue});f(()=>m(e,Q,ze))});let Be=l(`h3`,Q);u(Q,Be),i(Be,`mt-8`),u(Be,s(`TimelineItemProps`));let Ve=a(`rue:component:anchor`);return u(Q,Ve),d(()=>{let e=h(re,{rows:de});f(()=>m(e,Q,Ve))}),t})}),c,g),c})};export{X as default};
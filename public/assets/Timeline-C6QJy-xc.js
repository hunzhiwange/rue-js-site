import{$t as e,Jt as t,Q as n,St as r,dt as i,et as a,gt as o,in as s,l as c,lt as l,nt as u,o as d,rt as f,t as p,tt as m,zt as h}from"./vapor-runtime-DsQWl-IB.js";import{a as g,n as _}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as v,i as y}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as b}from"./Code-4SUSUwRg.js";import{t as x}from"./tabs-Duzh3URW.js";import{r as S}from"./SidebarPlaygroundDesign-EU389JDE.js";var C={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},w={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},T=(...e)=>e.filter(Boolean).join(` `),E=e=>e!=null,ee=(e,t)=>e??t,te=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ne=(e,t,n)=>(e.placement??te(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),D=e=>c(t=>{let n=u(`span`,t);return h(()=>{i(n,T(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,e.className))}),n}),O=e=>c(t=>{let n=u(`span`,t);return h(()=>{i(n,T(`loading loading-spinner loading-xs`,e.className))}),n}),k=e=>T(e.lineClassName,e.color?w[e.color]:void 0),A=e=>{if(!(!e.color||w[e.color]))return{backgroundColor:e.color,borderColor:e.color}},j=(e,t)=>{let n=e.color?C[e.color]:void 0,r=T(e.iconClassName,n);if(e.middle)return{className:T(e.middle.className,n),content:e.middle.content};if(E(e.icon))return{className:r,content:e.icon};if(E(e.dot))return{className:r,content:e.dot};if(e.loading)return{className:r,content:y(O,{})};if(e.color&&!C[e.color])return{className:e.iconClassName,content:y(`span`,{style:{color:e.color},children:y(D,{})})};if(t)return{className:r,content:y(D,{})}},M=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=E(n)&&r!==n;if(!E(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},N=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!E(t),contentBox:!0,liClassName:`opacity-80`}:null,P=(e,t,n,r,i)=>{let a=e.slice(),o=N(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ne(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:M(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:j(e,s),end:o,liClassName:T(e.liClassName,e.className),lineClassName:k(e),lineStyle:A(e)}})},F=t=>{let{cls:o}=g(`useSetup:0:0`,()=>s(()=>({cls:g(`computed:1:0`,()=>r(()=>T(`timeline-start`,t.box&&`timeline-box`,t.className)))})));return c(r=>{let s=u(`div`,r);h(()=>{i(s,o.get())});let c=a(`rue:children:anchor`);return n(s,c),h(()=>{let n=t.children;e(()=>d(n,s,c))}),s})},I=t=>{let{cls:o}=g(`useSetup:0:0:dup1`,()=>s(()=>({cls:g(`computed:1:1`,()=>r(()=>T(`timeline-middle`,t.className)))})));return c(r=>{let s=u(`div`,r);h(()=>{i(s,o.get())});let c=a(`rue:children:anchor`);return n(s,c),h(()=>{let n=t.children;e(()=>d(n,s,c))}),s})},L=t=>{let{cls:o}=g(`useSetup:0:0:dup2`,()=>s(()=>({cls:g(`computed:1:2`,()=>r(()=>T(`timeline-end`,t.box&&`timeline-box`,t.className)))})));return c(r=>{let s=u(`div`,r);h(()=>{i(s,o.get())});let c=a(`rue:children:anchor`);return n(s,c),h(()=>{let n=t.children;e(()=>d(n,s,c))}),s})},R=(t,r)=>c(s=>{let g=u(`li`,s);h(()=>{i(g,t.liClassName)}),h(()=>{l(g,`key`,String(t.key??r))});let _=a(`rue:slot:anchor`);n(g,_),h(()=>{let r=t.beforeLine?c(()=>{let e=m(),r=u(`hr`,e);return n(e,r),h(()=>{i(r,t.lineClassName)}),h(()=>{let e=t.lineStyle;o(r,e)}),e}):``;e(()=>d(r,g,_))}),n(g,f(` `));let v=a(`rue:slot:anchor`);n(g,v),h(()=>{let r=t.start?c(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),h(()=>{let n=p(F,{box:t.start.box,className:t.start.className,children:t.start.content});e(()=>d(n,r,i))}),r}):``;e(()=>d(r,g,v))}),n(g,f(` `));let y=a(`rue:slot:anchor`);n(g,y),h(()=>{let r=t.middle?c(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),h(()=>{let n=p(I,{className:t.middle.className,children:t.middle.content});e(()=>d(n,r,i))}),r}):``;e(()=>d(r,g,y))}),n(g,f(` `));let b=a(`rue:slot:anchor`);n(g,b),h(()=>{let r=t.end?c(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),h(()=>{let n=p(L,{box:t.end.box,className:t.end.className,children:t.end.content});e(()=>d(n,r,i))}),r}):``;e(()=>d(r,g,b))}),n(g,f(` `));let x=a(`rue:slot:anchor`);return n(g,x),h(()=>{let r=t.afterLine?c(()=>{let e=m(),r=u(`hr`,e);return n(e,r),h(()=>{i(r,t.lineClassName)}),h(()=>{let e=t.lineStyle;o(r,e)}),e}):``;e(()=>d(r,g,x))}),g}),z=Object.assign(t=>{let{resolvedDirection:o,cls:l,renderedItems:f}=g(`useSetup:0:0:dup3`,()=>s(()=>{let e=g(`computed:1:3`,()=>r(()=>ee(t.direction,t.orientation))),n=e;return{resolvedDirection:e,cls:g(`computed:1:4`,()=>r(()=>T(`timeline`,n.get()&&`timeline-${n.get()}`,t.snapIcon&&`timeline-snap-icon`,t.compact&&`timeline-compact`,t.className))),renderedItems:g(`computed:1:5`,()=>r(()=>t.items&&t.items.length?P(t.items,t.mode,t.reverse,t.pending,t.pendingDot):t.pending?P([],t.mode,t.reverse,t.pending,t.pendingDot):null))}}));return c(r=>{let o=u(`ul`,r);h(()=>{i(o,l.get())});let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let n=f.get()?f.get().map(R):t.children;e(()=>d(n,o,s))}),o})},{Start:F,Middle:I,End:L}),B=(...e)=>e.filter(Boolean).join(` `),V={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},H={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},U={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},W=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,G=t=>c(r=>{let o=u(`div`,r);i(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let s=u(`div`,o);n(o,s),i(s,`flex flex-wrap items-start justify-between gap-3`);let l=u(`div`,s);n(s,l);let g=u(`h2`,l);n(l,g),i(g,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(g,f(`# `));let _=a(`rue:slot:anchor`);n(g,_),h(()=>{let n=t.title;e(()=>d(n,g,_))});let v=a(`rue:slot:anchor`);n(l,v),h(()=>{let r=t.summary?c(()=>{let r=m(),o=u(`p`,r);n(r,o),i(o,`m-0 text-sm opacity-70 max-w-3xl leading-6`);let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let n=t.summary;e(()=>d(n,o,s))}),r}):``;e(()=>d(r,l,v))});let y=a(`rue:component:anchor`);n(o,y),h(()=>{let n=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`});e(()=>d(n,o,y))});let S=a(`rue:slot:anchor`);return n(o,S),h(()=>{let r=t.tab.value===`preview`?t.preview():c(()=>{let r=m(),i=a(`rue:component:anchor`);return n(r,i),h(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:t.code});e(()=>d(n,r,i))}),r});e(()=>d(r,o,S))}),o}),re=t=>c(r=>{let o=u(`div`,r);i(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=u(`table`,o);n(o,s),i(s,`table table-zebra`);let p=u(`thead`,s);n(s,p);let g=u(`tr`,p);n(p,g);let v=u(`th`,g);n(g,v),n(v,f(`属性`));let y=u(`th`,g);n(g,y),n(y,f(`说明`));let b=u(`th`,g);n(g,b),n(b,f(`类型`));let x=u(`th`,g);n(g,x),n(x,f(`默认值`));let S=u(`tbody`,s);n(s,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return h(()=>{T=_({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,i,o,s)=>{d(c(()=>{let r=m(),i=u(`tr`,r);n(r,i),h(()=>{l(i,`key`,String(t.prop))});let o=u(`td`,i);n(i,o);let s=u(`code`,o);n(o,s);let c=a(`rue:slot:anchor`);n(s,c),h(()=>{let n=t.prop;e(()=>d(n,s,c))});let f=u(`td`,i);n(i,f);let p=a(`rue:slot:anchor`);n(f,p),h(()=>{let n=t.description;e(()=>d(n,f,p))});let g=u(`td`,i);n(i,g);let _=u(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),h(()=>{let n=t.type;e(()=>d(n,_,v))});let y=u(`td`,i);n(i,y);let b=u(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),h(()=>{let n=t.defaultValue;e(()=>d(n,b,x))}),r}),r,i)}})}),o}),K=t=>c(r=>{let o=u(`span`,r);h(()=>{i(o,B(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,V[t.tone===void 0?`primary`:t.tone]))});let s=a(`rue:slot:anchor`);return n(o,s),h(()=>{let n=t.label===void 0?`•`:t.label;e(()=>d(n,o,s))}),o}),q=t=>c(r=>{let o=u(`div`,r);i(o,`space-y-2 text-left`);let s=u(`div`,o);n(o,s),h(()=>{i(s,B(`badge badge-sm`,H[t.tone===void 0?`primary`:t.tone]))});let c=a(`rue:slot:anchor`);n(s,c),h(()=>{let n=t.badge;e(()=>d(n,s,c))});let l=u(`div`,o);n(o,l),i(l,`font-medium leading-5`);let f=a(`rue:slot:anchor`);n(l,f),h(()=>{let n=t.title;e(()=>d(n,l,f))});let p=u(`div`,o);n(o,p),i(p,`text-xs leading-5 opacity-70`);let m=a(`rue:slot:anchor`);return n(p,m),h(()=>{let n=t.summary;e(()=>d(n,p,m))}),o}),J=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],ie=J.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),ae=J.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:W,content:e.year},middle:{content:y(K,{tone:e.tone,label:String(t+1)})},end:{box:!0,content:y(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}})),oe=()=>[{key:`discover`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Discovery`}),content:y(q,{title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`}),contentBox:!0,color:`info`},{key:`design`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Design`}),content:y(q,{title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`}),contentBox:!0,color:`secondary`},{key:`ship`,title:y(`span`,{className:`badge badge-outline badge-sm`,children:`Ship`}),content:y(q,{title:`上线校验`,summary:`在真实流量前补充埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`}),contentBox:!0,color:`success`}],se=()=>[{key:`brief`,title:`Brief`,content:y(q,{title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`}),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:y(q,{title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`}),contentBox:!0,color:`success`}],ce=()=>J.slice(0,4).map(e=>({key:`${e.year}-color`,title:y(`span`,{className:B(`badge badge-sm`,H[e.tone]),children:e.badge}),content:y(q,{title:e.title,summary:e.summary,badge:e.year,tone:e.tone}),contentBox:!0,color:e.tone})),le=[{key:`plan`,title:`Plan`,content:y(q,{title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`}),contentBox:!0,icon:y(K,{tone:`primary`,label:`1`})},{key:`review`,title:`Review`,content:y(q,{title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`}),contentBox:!0,icon:y(K,{tone:`warning`,label:`2`})},{key:`ship`,title:`Ship`,content:y(q,{title:`灰度上线`,summary:`展示观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`}),contentBox:!0,icon:y(K,{tone:`success`,label:`3`})}],Y=t=>{let{isVertical:o}=g(`useSetup:0:0`,()=>s(()=>({isVertical:g(`computed:1:0`,()=>r(()=>(t.orientation===void 0?`horizontal`:t.orientation)===`vertical`))})));return c(r=>{let s=u(`div`,r);h(()=>{i(s,o.get()?``:`overflow-x-auto pb-2`)});let g=a(`rue:component:anchor`);return n(s,g),h(()=>{let r=p(z,{orientation:o.get()?`vertical`:void 0,snapIcon:t.snapIcon,compact:t.compact,className:o.get()?`max-w-3xl`:`min-w-[860px]`,children:c(()=>{let r=m(),o=a(`rue:list:start`),s=a(`rue:list:end`);n(r,o),n(r,s);let g=new Map;return h(()=>{g=_({items:J||[],getKey:(e,n)=>`${t.orientation===void 0?`horizontal`:t.orientation}-${e.year}-${t.bottomOnly?`end`:`full`}`,elements:g,parent:o.parentNode,before:s,singleRoot:!0,start:o,renderItem:(r,o,s,g,_)=>{d(c(()=>{let o=m(),s=_>0,g=_<J.length-1,v=t.colored?U[r.tone]:void 0,y=!!t.alternate&&_%2==0,b=u(`li`,o);n(o,b),h(()=>{l(b,`key`,String(`${t.orientation===void 0?`horizontal`:t.orientation}-${r.year}-${t.bottomOnly?`end`:`full`}`))});let x=a(`rue:slot:anchor`);n(b,x),h(()=>{let t=s?c(()=>{let e=m(),t=u(`hr`,e);return n(e,t),h(()=>{i(t,v)}),e}):``;e(()=>d(t,b,x))}),n(b,f(` `));let S=a(`rue:slot:anchor`);n(b,S),h(()=>{let i=t.bottomOnly?``:c(y?()=>{let t=m(),i=a(`rue:component:anchor`);n(t,i);let o=p(q,{title:r.title,summary:r.summary,badge:r.badge,tone:r.tone});return h(()=>{let n=p(z.Start,{box:!0,children:o});e(()=>d(n,t,i))}),t}:()=>{let t=m(),i=a(`rue:component:anchor`);return n(t,i),h(()=>{let n=p(z.Start,{className:W,children:r.year});e(()=>d(n,t,i))}),t});e(()=>d(i,b,S))}),n(b,f(` `));let C=a(`rue:slot:anchor`);n(b,C),h(()=>{let i=t.noIcons?``:c(()=>{let e=m(),t=a(`rue:component:anchor`);n(e,t);let i=p(K,{tone:r.tone,label:String(_+1)});return d(p(z.Middle,{children:i}),e,t),e});e(()=>d(i,b,C))}),n(b,f(` `));let w=a(`rue:slot:anchor`);n(b,w),h(()=>{let i=t.bottomOnly?c(()=>{let t=m(),i=a(`rue:component:anchor`);n(t,i);let o=p(q,{title:r.title,summary:r.summary,badge:r.badge,tone:r.tone});return h(()=>{let n=p(z.End,{box:!0,children:o});e(()=>d(n,t,i))}),t}):c(y?()=>{let t=m(),i=a(`rue:component:anchor`);return n(t,i),h(()=>{let n=p(z.End,{className:W,children:r.year});e(()=>d(n,t,i))}),t}:()=>{let t=m(),i=a(`rue:component:anchor`);n(t,i);let o=p(q,{title:r.title,summary:r.summary,badge:r.badge,tone:r.tone});return h(()=>{let n=p(z.End,{box:!0,children:o});e(()=>d(n,t,i))}),t});e(()=>d(i,b,w))}),n(b,f(` `));let T=a(`rue:slot:anchor`);return n(b,T),h(()=>{let t=g?c(()=>{let e=m(),t=u(`hr`,e);return n(e,t),h(()=>{i(t,v)}),e}):``;e(()=>d(t,b,T))}),o}),o,s)}})}),r})});e(()=>d(r,s,g))}),s})},ue=[{prop:`children`,description:`展示基础手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，使用 Rue 当前命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的接入写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],de=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合使用 Rue 基础的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的别名，可用于衔接基础心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合整合基础示例 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],fe=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,X=()=>{let{tabArray:r,tabArrayInternal:o,tabDataApi:_,tabBothSides:b,tabBottomOnly:x,tabDifferentSides:C,tabColorfulLines:w,tabNoIcons:T,tabVBothSides:E,tabVRightOnly:ee,tabVDifferentSides:te,tabVColorfulLines:ne,tabSnapStart:D}=g(`useSetup:0:0:dup1`,()=>s(()=>({tabArray:g(`ref:1:1`,()=>t(`preview`)),tabArrayInternal:g(`ref:1:2`,()=>t(`preview`)),tabDataApi:g(`ref:1:3`,()=>t(`preview`)),tabBothSides:g(`ref:1:4`,()=>t(`preview`)),tabBottomOnly:g(`ref:1:5`,()=>t(`preview`)),tabDifferentSides:g(`ref:1:6`,()=>t(`preview`)),tabColorfulLines:g(`ref:1:7`,()=>t(`preview`)),tabNoIcons:g(`ref:1:8`,()=>t(`preview`)),tabVBothSides:g(`ref:1:9`,()=>t(`preview`)),tabVRightOnly:g(`ref:1:10`,()=>t(`preview`)),tabVDifferentSides:g(`ref:1:11`,()=>t(`preview`)),tabVColorfulLines:g(`ref:1:12`,()=>t(`preview`)),tabSnapStart:g(`ref:1:13`,()=>t(`preview`))})));return c(t=>{let s=m(),g=a(`rue:component:anchor`);return n(s,g),d(p(S,{children:c(()=>{let t=m(),s=u(`div`,t);n(t,s),i(s,`max-w-none prose prose-sm md:prose-base`);let c=u(`h1`,s);n(s,c),n(c,f(`Timeline 时间线`));let g=u(`p`,s);n(s,g),i(g,`text-sm mt-3 mb-3`),n(g,f(`Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；项目页面里的示例 标题与排列也展示，避免增强时把基础示例吞掉。`));let S=u(`div`,s);n(s,S),i(S,`not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8`);let O=u(`div`,S);n(S,O),i(O,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let k=u(`div`,O);n(O,k),i(k,`badge badge-info badge-soft badge-sm`),n(k,f(`数据驱动`));let A=u(`div`,O);n(O,A),i(A,`mt-3 font-medium`),n(A,f(`items、mode、reverse`));let j=u(`p`,O);n(O,j),i(j,`mt-2 mb-0 text-sm leading-6 opacity-70`),n(j,f(`直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。`));let M=u(`div`,S);n(S,M),i(M,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let N=u(`div`,M);n(M,N),i(N,`badge badge-secondary badge-soft badge-sm`),n(N,f(`精细布局`));let P=u(`div`,M);n(M,P),i(P,`mt-3 font-medium`),n(P,f(`Start / Middle / End`));let F=u(`p`,M);n(M,F),i(F,`mt-2 mb-0 text-sm leading-6 opacity-70`),n(F,f(`适合需要把时间、图标和内容排成更强定制结构的场景。`));let I=u(`div`,S);n(S,I),i(I,`rounded-box border border-base-300 bg-base-100 p-4 shadow-sm`);let L=u(`div`,I);n(I,L),i(L,`badge badge-warning badge-soft badge-sm`),n(L,f(`视觉控制`));let R=u(`div`,I);n(I,R),i(R,`mt-3 font-medium`),n(R,f(`color、snapIcon、compact`));let B=u(`p`,I);n(I,B),i(B,`mt-2 mb-0 text-sm leading-6 opacity-70`),n(B,f(`在不改 Rue 当前视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补充。`));let V=u(`div`,s);n(s,V),l(V,`role`,`alert`),i(V,`alert alert-soft alert-info not-prose my-6`);let H=u(`span`,V);n(V,H),i(H,`text-sm leading-6`),n(H,f(`连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保持 hr 以获得最稳定的布局。`));let U=a(`rue:component:anchor`);n(s,U),h(()=>{let t=p(G,{title:`Timeline 通过数据渲染（数组）`,summary:`展示基础“外部数组 map 成 li”的用法，但示例内容更完整，适合从现成业务数据直接渲染。`,tab:r,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{className:`min-w-[860px]`,children:ie.map(e=>v(`li`,{children:[e.beforeLine?y(`hr`,{}):null,y(z.Start,{className:W,children:e.year}),y(z.Middle,{children:y(K,{tone:e.tone,label:`✓`})}),y(z.End,{box:!0,children:y(q,{title:e.title,summary:e.summary,badge:e.badge,tone:e.tone})}),e.afterLine?y(`hr`,{}):null]},e.key))})}),code:fe});e(()=>d(t,s,U))});let J=a(`rue:component:anchor`);n(s,J),h(()=>{let t=p(G,{title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 基础的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:o,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{items:ae,className:`min-w-[860px]`})}),code:pe});e(()=>d(t,s,J))});let X=a(`rue:component:anchor`);n(s,X),h(()=>{let t=p(G,{title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:_,preview:()=>y(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});e(()=>d(t,s,X))});let Te=a(`rue:component:anchor`);n(s,Te),h(()=>{let t=p(G,{title:`两侧文字与图标`,summary:`展示基础复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:b,preview:()=>Y({orientation:`horizontal`}),code:he});e(()=>d(t,s,Te))});let Ee=a(`rue:component:anchor`);n(s,Ee),h(()=>{let t=p(G,{title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:x,preview:()=>Y({orientation:`horizontal`,bottomOnly:!0}),code:ge});e(()=>d(t,s,Ee))});let De=a(`rue:component:anchor`);n(s,De),h(()=>{let t=p(G,{title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:C,preview:()=>y(z,{mode:`alternate`,items:oe()}),code:_e});e(()=>d(t,s,De))});let Oe=a(`rue:component:anchor`);n(s,Oe),h(()=>{let t=p(G,{title:`彩色线条`,summary:`color 会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:w,preview:()=>y(`div`,{className:`overflow-x-auto pb-2`,children:y(z,{items:ce(),className:`min-w-[860px]`})}),code:ve});e(()=>d(t,s,Oe))});let ke=a(`rue:component:anchor`);n(s,ke),h(()=>{let t=p(G,{title:`无图标`,summary:`如果只想保持轨道和信息块，可以完全省略 middle 区域。`,tab:T,preview:()=>Y({orientation:`horizontal`,noIcons:!0}),code:ye});e(()=>d(t,s,ke))});let Ae=a(`rue:component:anchor`);n(s,Ae),h(()=>{let t=p(G,{title:`纵向：两侧文字与图标`,summary:`纵向布局仍然适合记录里程碑、工单流转或调试过程。`,tab:E,preview:()=>Y({orientation:`vertical`}),code:be});e(()=>d(t,s,Ae))});let je=a(`rue:component:anchor`);n(s,je),h(()=>{let t=p(G,{title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保持内容一侧，把主信息集中在右侧阅读。`,tab:ee,preview:()=>Y({orientation:`vertical`,bottomOnly:!0}),code:xe});e(()=>d(t,s,je))});let Me=a(`rue:component:anchor`);n(s,Me),h(()=>{let t=p(G,{title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:te,preview:()=>y(z,{orientation:`vertical`,mode:`alternate`,items:oe()}),code:Se});e(()=>d(t,s,Me))});let Ne=a(`rue:component:anchor`);n(s,Ne),h(()=>{let t=p(G,{title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:ne,preview:()=>y(z,{orientation:`vertical`,items:ce()}),code:Ce});e(()=>d(t,s,Ne))});let Pe=a(`rue:component:anchor`);n(s,Pe),h(()=>{let t=p(G,{title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:D,preview:()=>y(z,{orientation:`vertical`,compact:!0,snapIcon:!0,items:le,className:`max-w-2xl`}),code:we});e(()=>d(t,s,Pe))});let Fe=u(`h2`,s);n(s,Fe),n(Fe,f(`增强能力`));let Z=u(`p`,s);n(s,Z),i(Z,`text-sm opacity-80`),n(Z,f("本节集中展示数据 API 的组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。"));let Ie=a(`rue:component:anchor`);n(s,Ie),h(()=>{let t=p(G,{title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:_,preview:()=>y(z,{mode:`alternate`,reverse:!0,pending:`质量复核中`,items:se()}),code:me});e(()=>d(t,s,Ie))});let Q=u(`div`,s);n(s,Q),i(Q,`my-10 lg:my-14`);let Le=u(`h2`,Q);n(Q,Le),n(Le,f(`API`));let $=u(`p`,Q);n(Q,$),i($,`text-sm leading-6 opacity-70`),n($,f(`推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。`));let Re=u(`h3`,Q);n(Q,Re),i(Re,`mt-6`),n(Re,f(`Timeline`));let ze=a(`rue:component:anchor`);n(Q,ze),h(()=>{let t=p(re,{rows:ue});e(()=>d(t,Q,ze))});let Be=u(`h3`,Q);n(Q,Be),i(Be,`mt-8`),n(Be,f(`TimelineItemProps`));let Ve=a(`rue:component:anchor`);return n(Q,Ve),h(()=>{let t=p(re,{rows:de});e(()=>d(t,Q,Ve))}),t})}),s,g),s})};export{X as default};
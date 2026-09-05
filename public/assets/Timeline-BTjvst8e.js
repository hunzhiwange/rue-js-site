import{B as e,Bt as t,C as n,Et as r,H as i,K as a,Kt as o,L as s,Mt as c,S as l,V as u,W as d,X as f,Y as p,_n as m,_t as h,b as g,bn as _,dt as v,fn as y,gn as b,hn as x,ht as S,kn as C,mn as w,nt as T,pn as ee,q as E,rt as te,tt as D,wn as O,x as k,z as A}from"./rue-runtime-CwEGJ854.js";import{t as ne}from"./Code-B3jCYMAr.js";import{t as re}from"./tabs-DUviBzjL.js";import{r as ie}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var j=m(`<span></span>`),ae=m(`<span><!--rue:opaque-hole:0--></span>`),M=m(`<div><!--rue:text-hole:0--></div>`),oe=m(`<li><!--rue:text-hole:0--><!--rue:text-hole:1--><!--rue:text-hole:2--><!--rue:text-hole:3--><!--rue:text-hole:4--></li>`),N=m(`<ul><!--rue:text-hole:0--></ul>`),se={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},P={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},F=(...e)=>e.filter(Boolean).join(` `),I=e=>e!=null,ce=(e,t)=>e??t,le=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},ue=(e,t,n)=>(e.placement??le(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),L=e=>{let t=d(e.className);return E(r(Object.assign(e=>{let n=j().content.cloneNode(!0).firstChild,r=n,i;return O(()=>{let e=F(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,t.get()),n=e==null?``:String(e);Object.is(i,n)||(i=n,r.className=n)}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{t.set(e.className)}),()=>e)},de=e=>{let t=d(e.className);return E(r(Object.assign(e=>{let n=j().content.cloneNode(!0).firstChild,r=n,i;return O(()=>{let e=F(`loading loading-spinner loading-xs`,t.get()),n=e==null?``:String(e);Object.is(i,n)||(i=n,r.className=n)}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{t.set(e.className)}),()=>e)},R=e=>F(e.lineClassName,e.color?P[e.color]:void 0),fe=e=>{if(!(!e.color||P[e.color]))return{backgroundColor:e.color,borderColor:e.color}},z=(e,t)=>{let n=e.color?se[e.color]:void 0,o=F(e.iconClassName,n);if(e.middle)return{className:F(e.middle.className,n),content:e.middle.content};if(I(e.icon))return{className:o,content:e.icon};if(I(e.dot))return{className:o,content:e.dot};if(e.loading)return{className:o,content:i(de,()=>({}))};if(e.color&&!se[e.color])return{className:e.iconClassName,content:r(Object.assign(t=>{let n=ae().content.cloneNode(!0).firstChild,r=n,i=n.childNodes[0],o=i.parentNode,s;O(()=>{let t={color:e.color};Object.is(s,t)||(s=t,v(r,t))});let c=w(o);return a(c,L,()=>({})),o.insertBefore(c,i),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))};if(t)return{className:o,content:i(L,()=>({}))}},pe=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=I(n)&&r!==n;if(!I(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},B=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!I(t),contentBox:!0,liClassName:`opacity-80`}:null,V=(e,t,n,r,i)=>{let a=e.slice(),o=B(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=ue(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:pe(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:z(e,s),end:o,liClassName:F(e.liClassName,e.className),lineClassName:R(e),lineStyle:fe(e)}})},H=e=>{let t=d(e.box),n=d(e.children),i=d(e.className),a=F(`timeline-start`,t.get()&&`timeline-box`,i.get());return E(r(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,r=t,i=t.childNodes[0],o=i.parentNode,s;return O(()=>{let e=a,t=e==null?``:String(e);Object.is(s,t)||(s=t,r.className=t)}),g({parent:o,before:i},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{t.set(e.box),n.set(e.children),i.set(e.className)}),()=>e)},U=e=>{let t=d(e.children),n=d(e.className),i=F(`timeline-middle`,n.get());return E(r(Object.assign(e=>{let n=M().content.cloneNode(!0).firstChild,r=n,a=n.childNodes[0],o=a.parentNode,s;return O(()=>{let e=i,t=e==null?``:String(e);Object.is(s,t)||(s=t,r.className=t)}),g({parent:o,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{t.set(e.children),n.set(e.className)}),()=>e)},W=e=>{let t=d(e.box),n=d(e.children),i=d(e.className),a=F(`timeline-end`,t.get()&&`timeline-box`,i.get());return E(r(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,r=t,i=t.childNodes[0],o=i.parentNode,s;return O(()=>{let e=a,t=e==null?``:String(e);Object.is(s,t)||(s=t,r.className=t)}),g({parent:o,before:i},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{t.set(e.box),n.set(e.children),i.set(e.className)}),()=>e)},me=(e,t)=>r(Object.assign(t=>{let n=oe().content.cloneNode(!0).firstChild,a=n,o=n.childNodes[0],s=o.parentNode,c=n.childNodes[1],l=c.parentNode,d=n.childNodes[2],f=d.parentNode,p=n.childNodes[3],m=p.parentNode,h=n.childNodes[4],g=h.parentNode,S;return O(()=>{let t=e.liClassName,n=t==null?``:String(t);Object.is(S,n)||(S=n,a.className=n)}),u(s,o,()=>e.beforeLine?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(t=>{let n=x(`hr`,t),r;O(()=>{let t=e.lineClassName,i=t==null?``:String(t);Object.is(r,i)||(r=i,n.className=i)});let i;return O(()=>{let t=e.lineStyle;Object.is(i,t)||(i=t,v(n,t))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),u(l,c,()=>e.start?{__rue_compiled_branch_key:!0,create:()=>i(H,()=>({box:e.start.box,className:e.start.className,children:(t,n,i)=>k(t,i,()=>r(Object.assign(t=>{let n=T(),r=b(``);return y(n,r),_(r,()=>e.start.content),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),u(f,d,()=>e.middle?{__rue_compiled_branch_key:!0,create:()=>i(U,()=>({className:e.middle.className,children:(t,n,i)=>k(t,i,()=>r(Object.assign(t=>{let n=T(),r=b(``);return y(n,r),_(r,()=>e.middle.content),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),u(m,p,()=>e.end?{__rue_compiled_branch_key:!0,create:()=>i(W,()=>({box:e.end.box,className:e.end.className,children:(t,n,i)=>k(t,i,()=>r(Object.assign(t=>{let n=T(),r=b(``);return y(n,r),_(r,()=>e.end.content),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),u(g,h,()=>e.afterLine?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(t=>{let n=x(`hr`,t),r;O(()=>{let t=e.lineClassName,i=t==null?``:String(t);Object.is(r,i)||(r=i,n.className=i)});let i;return O(()=>{let t=e.lineStyle;Object.is(i,t)||(i=t,v(n,t))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),G=Object.assign(e=>{let t=d(e.children),n=d(e.className),r=d(e.compact),i=d(e.direction),a=d(e.items),o=d(e.mode),c=d(e.orientation),l=d(e.pending),u=d(e.pendingDot),f=d(e.reverse),m=d(e.snapIcon),h=ce(i.get(),c.get()),g=F(`timeline`,h&&`timeline-${h}`,m.get()&&`timeline-snap-icon`,r.get()&&`timeline-compact`,n.get()),_=a.get()&&a.get().length?V(a.get(),o.get(),f.get(),l.get(),u.get()):l.get()?V([],o.get(),f.get(),l.get(),u.get()):null;return E(S(()=>{let e=T(),n=N().content.cloneNode(!0),r=n.firstChild,i=r,a=r.childNodes[0],o=a.parentNode;return e.appendChild(n),O(()=>{s(i,g)}),O(()=>{let e=_?_.map(me):t.get();C(()=>p(e,o,a))}),e},!0),e=>A(()=>{t.set(e.children),n.set(e.className),r.set(e.compact),i.set(e.direction),a.set(e.items),o.set(e.mode),c.set(e.orientation),l.set(e.pending),u.set(e.pendingDot),f.set(e.reverse),m.set(e.snapIcon)}),()=>e)},{Start:H,Middle:U,End:W}),he=m(`<div class="overflow-x-auto pb-2"><!--rue:opaque-hole:0--></div>`),ge=m(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),_e=m(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),K=m(`<span><!--rue:text-hole:0--></span>`),ve=m(`<div class="space-y-2 text-left"><div><!--rue:text-hole:0--></div><div class="font-medium leading-5"><!--rue:text-hole:1--></div><div class="text-xs leading-5 opacity-70"><!--rue:text-hole:2--></div></div>`),ye=m(`<div><!--rue:opaque-hole:0--></div>`),be=m('<div class="max-w-none prose prose-sm md:prose-base"><h1>Timeline 时间线</h1><p class="text-sm mt-3 mb-3">Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；项目页面里的示例 标题与排列也展示，避免增强时把基础示例吞掉。</p><div class="not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="badge badge-info badge-soft badge-sm">数据驱动</div><div class="mt-3 font-medium">items、mode、reverse</div><p class="mt-2 mb-0 text-sm leading-6 opacity-70">直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="badge badge-secondary badge-soft badge-sm">精细布局</div><div class="mt-3 font-medium">Start / Middle / End</div><p class="mt-2 mb-0 text-sm leading-6 opacity-70">适合需要把时间、图标和内容排成更强定制结构的场景。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="badge badge-warning badge-soft badge-sm">视觉控制</div><div class="mt-3 font-medium">color、snapIcon、compact</div><p class="mt-2 mb-0 text-sm leading-6 opacity-70">在不改 Rue 当前视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补充。</p></div></div><div role="alert" class="alert alert-soft alert-info not-prose my-6"><span class="text-sm leading-6">连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保持 hr 以获得最稳定的布局。</span></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><!--rue:opaque-hole:11--><!--rue:opaque-hole:12--><h2>增强能力</h2><p class="text-sm opacity-80">本节集中展示数据 API 的组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。</p><!--rue:opaque-hole:13--><div class="my-10 lg:my-14"><h2>API</h2><p class="text-sm leading-6 opacity-70">推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。</p><h3 class="mt-6">Timeline</h3><!--rue:opaque-hole:14--><h3 class="mt-8">TimelineItemProps</h3><!--rue:opaque-hole:15--></div></div>'),q=(...e)=>e.filter(Boolean).join(` `),xe={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},Se={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},Ce={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},J=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,Y=e=>S(t=>{let n=ge().content.cloneNode(!0).firstChild,o=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,d=n.childNodes[1],f=d.parentNode,m=n.childNodes[2],h=m.parentNode;g({parent:s,before:o},()=>e.title,()=>({})),u(l,c,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(t=>{let n=x(`p`,t);n.className=`m-0 text-sm opacity-70 max-w-3xl leading-6`;let r=ee(`rue:compiled-slot`);return y(n,r),g({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let _=w(f);return a(_,re,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),f.insertBefore(_,d),O(()=>{let t=e.tab.value===`preview`?e.preview():i(ne,()=>({className:`mt-2`,lang:`tsx`,code:e.code}));C(()=>p(t,h,m))}),n}),we=e=>{let t=d(e.rows);return E(r(Object.assign(e=>{let i=_e().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return O(()=>{let e=t.get()||[];s=n(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=d(e),i=d(t);return l((e,t,i)=>k(e,i,()=>r(Object.assign(e=>{let t=x(`tr`,e),r=x(`td`,t);y(t,r);let i=x(`code`,r);y(r,i);let a=b(``);y(i,a),_(a,()=>n.get().prop);let o=x(`td`,t);y(t,o);let s=b(``);y(o,s),_(s,()=>n.get().description);let c=x(`td`,t);y(t,c);let l=x(`code`,c);y(c,l);let u=b(``);y(l,u),_(u,()=>n.get().type);let d=x(`td`,t);y(t,d);let f=x(`code`,d);y(d,f);let p=b(``);return y(f,p),_(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,a)=>{e=r,t=a,n.set(r),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{t.set(e.rows)}),()=>e)},X=e=>{let t=d(e.label),n=d(e.tone);return E(r(Object.assign(e=>{let r=K().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;O(()=>{let e=q(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,xe[n.get()===void 0?`primary`:n.get()]),t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let c=b(``);return o.insertBefore(c,a),o.removeChild(a),_(c,()=>t.get()===void 0?`•`:t.get()),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{t.set(e.label),n.set(e.tone)}),()=>e)},Z=e=>{let t=d(e.badge),n=d(e.summary),i=d(e.title),a=d(e.tone);return E(r(Object.assign(e=>{let r=ve().content.cloneNode(!0).firstChild,o=r.childNodes[0],s=r.childNodes[0].childNodes[0],c=s.parentNode,l=r.childNodes[1].childNodes[0],u=l.parentNode,d=r.childNodes[2].childNodes[0],f=d.parentNode,p;O(()=>{let e=q(`badge badge-sm`,Se[a.get()===void 0?`primary`:a.get()]),t=e==null?``:String(e);Object.is(p,t)||(p=t,o.className=t)});let m=b(``);c.insertBefore(m,s),c.removeChild(s),_(m,()=>t.get());let h=b(``);u.insertBefore(h,l),u.removeChild(l),_(h,()=>i.get());let g=b(``);return f.insertBefore(g,d),f.removeChild(d),_(g,()=>n.get()),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>A(()=>{t.set(e.badge),n.set(e.summary),i.set(e.title),a.set(e.tone)}),()=>e)},Q=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],Te=Q.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),Ee=Q.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:J,content:e.year},middle:{content:i(X,()=>({tone:e.tone,label:String(t+1)}))},end:{box:!0,content:i(Z,()=>({title:e.title,summary:e.summary,badge:e.badge,tone:e.tone}))}})),De=()=>[{key:`discover`,title:r(Object.assign(e=>{let t=x(`span`,e);return t.className=`badge badge-outline badge-sm`,y(t,b(`Discovery`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),content:i(Z,()=>({title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`})),contentBox:!0,color:`info`},{key:`design`,title:r(Object.assign(e=>{let t=x(`span`,e);return t.className=`badge badge-outline badge-sm`,y(t,b(`Design`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),content:i(Z,()=>({title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`})),contentBox:!0,color:`secondary`},{key:`ship`,title:r(Object.assign(e=>{let t=x(`span`,e);return t.className=`badge badge-outline badge-sm`,y(t,b(`Ship`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),content:i(Z,()=>({title:`上线校验`,summary:`在真实流量前补充埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`})),contentBox:!0,color:`success`}],Oe=()=>[{key:`brief`,title:`Brief`,content:i(Z,()=>({title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`})),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:i(Z,()=>({title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`})),contentBox:!0,color:`success`}],ke=()=>Q.slice(0,4).map(e=>({key:`${e.year}-color`,title:S(()=>{let t=T(),n=K().content.cloneNode(!0),r=n.firstChild,i=r,a=r.childNodes[0],o=a.parentNode;return t.appendChild(n),O(()=>{s(i,q(`badge badge-sm`,Se[e.tone]))}),O(()=>{let t=e.badge;C(()=>p(t,o,a))}),t},!0),content:i(Z,()=>({title:e.title,summary:e.summary,badge:e.year,tone:e.tone})),contentBox:!0,color:e.tone})),Ae=[{key:`plan`,title:`Plan`,content:i(Z,()=>({title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`})),contentBox:!0,icon:i(X,()=>({tone:`primary`,label:`1`}))},{key:`review`,title:`Review`,content:i(Z,()=>({title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`})),contentBox:!0,icon:i(X,()=>({tone:`warning`,label:`2`}))},{key:`ship`,title:`Ship`,content:i(Z,()=>({title:`灰度上线`,summary:`展示观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`})),contentBox:!0,icon:i(X,()=>({tone:`success`,label:`3`}))}],$=e=>{let t=d(e.alternate),n=d(e.bottomOnly),i=d(e.colored),a=d(e.compact),o=d(e.noIcons),c=d(e.orientation),l=d(e.snapIcon),u=(c.get()===void 0?`horizontal`:c.get())===`vertical`;return E(S(()=>{let e=T(),c=ye().content.cloneNode(!0),d=c.firstChild,m=d,g=d.childNodes[0],_=g.parentNode;return e.appendChild(c),O(()=>{s(m,u?``:`overflow-x-auto pb-2`)}),O(()=>{let e=h(G,()=>({orientation:u?`vertical`:void 0,snapIcon:l.get(),compact:a.get(),className:u?`max-w-3xl`:`min-w-[860px]`,children:Q.map((e,a)=>{let s=a>0,c=a<Q.length-1,l=i.get()?Ce[e.tone]:void 0,u=!!t.get()&&a%2==0;return S(t=>{let i=te(`li`,t),d=D(`rue:slot:anchor`);f(i,d),O(()=>{let e=s?r(Object.assign(e=>{let t=x(`hr`,e),n;return O(()=>{let e=l,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):``;C(()=>p(e,i,d))});let m=D(`rue:slot:anchor`);f(i,m),O(()=>{let t=n.get()?``:u?(()=>{let t=h(Z,()=>({title:e.title,summary:e.summary,badge:e.badge,tone:e.tone}));return h(G.Start,()=>({box:!0,children:t}))})():h(G.Start,()=>({className:J,children:e.year}));C(()=>p(t,i,m))});let g=D(`rue:slot:anchor`);f(i,g),O(()=>{let t=o.get()?``:(()=>{let t=h(X,()=>({tone:e.tone,label:String(a+1)}));return h(G.Middle,()=>({children:t}))})();C(()=>p(t,i,g))});let _=D(`rue:slot:anchor`);f(i,_),O(()=>{let t=n.get()?(()=>{let t=h(Z,()=>({title:e.title,summary:e.summary,badge:e.badge,tone:e.tone}));return h(G.End,()=>({box:!0,children:t}))})():u?h(G.End,()=>({className:J,children:e.year})):(()=>{let t=h(Z,()=>({title:e.title,summary:e.summary,badge:e.badge,tone:e.tone}));return h(G.End,()=>({box:!0,children:t}))})();C(()=>p(t,i,_))});let v=D(`rue:slot:anchor`);return f(i,v),O(()=>{let e=c?r(Object.assign(e=>{let t=x(`hr`,e),n;return O(()=>{let e=l,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):``;C(()=>p(e,i,v))}),i})})}));C(()=>p(e,_,g))}),e},!0),e=>A(()=>{t.set(e.alternate),n.set(e.bottomOnly),i.set(e.colored),a.set(e.compact),o.set(e.noIcons),c.set(e.orientation),l.set(e.snapIcon)}),()=>e)},je=[{prop:`children`,description:`展示基础手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，使用 Rue 当前命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的接入写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],Me=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合使用 Rue 基础的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的别名，可用于衔接基础心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合整合基础示例 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],Ne=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,Pe=`import { Timeline } from '@rue-js/design'

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
</div>`,Fe=`import { Timeline } from '@rue-js/design'

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

<Timeline mode="alternate" reverse pending="质量复核中" items={items} />`,Ie=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,Le=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>
    </Timeline.Middle>
    <Timeline.End box>iMac 回归</Timeline.End>
    <hr />
  </li>
</Timeline>`,Re=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Discovery', content: '梳理场景', contentBox: true },
  { title: 'Design', content: '交互定稿', contentBox: true },
  { title: 'Ship', content: '上线校验', contentBox: true },
]

<Timeline mode="alternate" items={items} />`,ze=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Launch', content: 'Macintosh 发布', color: 'primary', contentBox: true },
  { title: 'Touch', content: 'iPhone 亮相', color: 'info', contentBox: true },
  { title: 'Wear', content: 'Apple Watch 成型', color: 'success', contentBox: true },
]

<div className="overflow-x-auto pb-2">
  <Timeline items={items} className="min-w-[860px]" />
</div>`,Be=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Start className="text-xs font-semibold uppercase tracking-[0.26em] opacity-60">
      1984
    </Timeline.Start>
    <Timeline.End box>Macintosh 发布</Timeline.End>
    <hr />
  </li>
</Timeline>`,Ve=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,He=`import { Timeline } from '@rue-js/design'

<Timeline orientation="vertical">
  <li>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>
    </Timeline.Middle>
    <Timeline.End box>iMac 回归</Timeline.End>
    <hr />
  </li>
</Timeline>`,Ue=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Discovery', content: '梳理场景', contentBox: true },
  { title: 'Design', content: '交互定稿', contentBox: true },
  { title: 'Ship', content: '上线校验', contentBox: true },
]

<Timeline orientation="vertical" mode="alternate" items={items} />`,We=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Launch', content: 'Macintosh 发布', color: 'primary', contentBox: true },
  { title: 'Touch', content: 'iPhone 亮相', color: 'info', contentBox: true },
  { title: 'Wear', content: 'Apple Watch 成型', color: 'success', contentBox: true },
]

<Timeline orientation="vertical" items={items} />`,Ge=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,Ke=()=>{let n=t(`preview`),s=t(`preview`),l=t(`preview`),u=t(`preview`),d=t(`preview`),m=t(`preview`),g=t(`preview`),_=t(`preview`),v=t(`preview`),y=t(`preview`),b=t(`preview`),ee=t(`preview`),k=t(`preview`);return c(()=>E((()=>{let t=S(()=>{let t=T(),c=be().content.cloneNode(!0),E=c.firstChild,A=E.childNodes[4],ne=A.parentNode,re=E.childNodes[5],ie=re.parentNode,j=E.childNodes[6],ae=j.parentNode,M=E.childNodes[7],oe=M.parentNode,N=E.childNodes[8],se=N.parentNode,P=E.childNodes[9],F=P.parentNode,I=E.childNodes[10],ce=I.parentNode,le=E.childNodes[11],ue=le.parentNode,L=E.childNodes[12],de=L.parentNode,R=E.childNodes[13],fe=R.parentNode,z=E.childNodes[14],pe=z.parentNode,B=E.childNodes[15],V=B.parentNode,H=E.childNodes[16],U=H.parentNode,W=E.childNodes[19],me=W.parentNode,ge=E.childNodes[20].childNodes[3],_e=ge.parentNode,K=E.childNodes[20].childNodes[5],ve=K.parentNode;t.appendChild(c),O(()=>{let t=h(Y,()=>({title:`Timeline 通过数据渲染（数组）`,summary:`展示基础“外部数组 map 成 li”的用法，但示例内容更完整，适合从现成业务数据直接渲染。`,tab:n,preview:o(()=>S(t=>{let n=he().content.cloneNode(!0).firstChild,i=n.childNodes[0],a=i.parentNode,o=h(G,()=>({className:`min-w-[860px]`,children:Te.map(t=>S(()=>{let n=T(),i=te(`li`,n);f(n,i),e(()=>t.beforeLine?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=x(`hr`,e);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(i);let a=D(`rue:component:anchor`);f(i,a),O(()=>{let e=h(G.Start,()=>({className:J,children:t.year}));C(()=>p(e,i,a))});let o=D(`rue:component:anchor`);f(i,o),O(()=>{let e=h(X,()=>({tone:t.tone,label:`✓`})),n=h(G.Middle,()=>({children:e}));C(()=>p(n,i,o))});let s=D(`rue:component:anchor`);return f(i,s),O(()=>{let e=h(Z,()=>({title:t.title,summary:t.summary,badge:t.badge,tone:t.tone})),n=h(G.End,()=>({box:!0,children:e}));C(()=>p(n,i,s))}),e(()=>t.afterLine?{__rue_compiled_branch_key:!0,create:()=>r(Object.assign(e=>{let t=x(`hr`,e);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>r(Object.assign(e=>{let t=T();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(i),n},!0))}));return p(o,a,i),n})),code:Ne}));C(()=>p(t,ne,A))}),O(()=>{let e=h(Y,()=>({title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 基础的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:s,preview:o(()=>r(Object.assign(e=>{let t=he().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=w(r);return a(i,G,()=>({items:Ee,className:`min-w-[860px]`})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Pe}));C(()=>p(e,ie,re))}),O(()=>{let e=h(Y,()=>({title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:l,preview:o(()=>i(G,()=>({mode:`alternate`,reverse:!0,pending:`质量复核中`,items:Oe()}))),code:Fe}));C(()=>p(e,ae,j))}),O(()=>{let e=h(Y,()=>({title:`两侧文字与图标`,summary:`展示基础复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:u,preview:()=>$({orientation:`horizontal`}),code:Ie}));C(()=>p(e,oe,M))}),O(()=>{let e=h(Y,()=>({title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:d,preview:()=>$({orientation:`horizontal`,bottomOnly:!0}),code:Le}));C(()=>p(e,se,N))}),O(()=>{let e=h(Y,()=>({title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:m,preview:o(()=>i(G,()=>({mode:`alternate`,items:De()}))),code:Re}));C(()=>p(e,F,P))}),O(()=>{let e=h(Y,()=>({title:`彩色线条`,summary:`color 会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:g,preview:o(()=>r(Object.assign(e=>{let t=he().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=w(r);return a(i,G,()=>({items:ke(),className:`min-w-[860px]`})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:ze}));C(()=>p(e,ce,I))}),O(()=>{let e=h(Y,()=>({title:`无图标`,summary:`如果只想保持轨道和信息块，可以完全省略 middle 区域。`,tab:_,preview:()=>$({orientation:`horizontal`,noIcons:!0}),code:Be}));C(()=>p(e,ue,le))}),O(()=>{let e=h(Y,()=>({title:`纵向：两侧文字与图标`,summary:`纵向布局仍然适合记录里程碑、工单流转或调试过程。`,tab:v,preview:()=>$({orientation:`vertical`}),code:Ve}));C(()=>p(e,de,L))}),O(()=>{let e=h(Y,()=>({title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保持内容一侧，把主信息集中在右侧阅读。`,tab:y,preview:()=>$({orientation:`vertical`,bottomOnly:!0}),code:He}));C(()=>p(e,fe,R))}),O(()=>{let e=h(Y,()=>({title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:b,preview:o(()=>i(G,()=>({orientation:`vertical`,mode:`alternate`,items:De()}))),code:Ue}));C(()=>p(e,pe,z))}),O(()=>{let e=h(Y,()=>({title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:ee,preview:o(()=>i(G,()=>({orientation:`vertical`,items:ke()}))),code:We}));C(()=>p(e,V,B))}),O(()=>{let e=h(Y,()=>({title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:k,preview:o(()=>i(G,()=>({orientation:`vertical`,compact:!0,snapIcon:!0,items:Ae,className:`max-w-2xl`}))),code:Ge}));C(()=>p(e,U,H))}),O(()=>{let e=h(Y,()=>({title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:l,preview:o(()=>i(G,()=>({mode:`alternate`,reverse:!0,pending:`质量复核中`,items:Oe()}))),code:Fe}));C(()=>p(e,me,W))});let ye=w(_e);a(ye,we,()=>({rows:je})),_e.insertBefore(ye,ge);let q=w(ve);return a(q,we,()=>({rows:Me})),ve.insertBefore(q,K),t});return h(ie,()=>({children:t}))})(),e=>A(()=>{})))};export{Ke as default};
import{At as e,Dn as t,E as n,Et as r,Mt as i,Q as a,T as o,Vt as s,_n as c,_t as l,at as u,b as d,ct as f,dt as p,et as m,gn as h,gt as g,hn as _,kn as v,mn as y,nt as b,on as x,pn as S,qt as C,rt as w,st as T,tn as E,tt as ee,ut as D,vn as O,vt as te,w as ne,wn as k,x as re,xn as A}from"./rue-runtime-HIMg8Lz8.js";import{t as ie}from"./Code-DpH7u0gk.js";import{t as ae}from"./tabs-C020zIXs.js";import{r as oe}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";var j=O(`<span></span>`),se=O(`<span><!--rue:opaque-hole:0--></span>`),M=O(`<div><!--rue:text-hole:0--></div>`),ce=O(`<li><!--rue:text-hole:0--><!--rue:text-hole:1--><!--rue:text-hole:2--><!--rue:text-hole:3--><!--rue:text-hole:4--></li>`),le=O(`<ul><!--rue:text-hole:0--></ul>`),N={neutral:`text-neutral`,primary:`text-primary`,secondary:`text-secondary`,accent:`text-accent`,info:`text-info`,success:`text-success`,warning:`text-warning`,error:`text-error`},P={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},F=(...e)=>e.filter(Boolean).join(` `),I=e=>e!=null,ue=(e,t)=>e??t,L=e=>{if(e)return e===`left`?`start`:e===`right`?`end`:e},de=(e,t,n)=>(e.placement??L(e.position))||(n===`alternate`?t%2==0?`start`:`end`:n===`start`?`start`:`end`),R=e=>{let t=u(e.className);return f(s(Object.assign(e=>{let n=j().content.cloneNode(!0).firstChild,r=n,i;return k(()=>{let e=F(`inline-block size-3 rounded-full border-2 border-current bg-base-100 align-middle`,t.get()),n=e==null?``:String(e);Object.is(i,n)||(i=n,r.className=n)}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.className)}),()=>e)},fe=e=>{let t=u(e.className);return f(s(Object.assign(e=>{let n=j().content.cloneNode(!0).firstChild,r=n,i;return k(()=>{let e=F(`loading loading-spinner loading-xs`,t.get()),n=e==null?``:String(e);Object.is(i,n)||(i=n,r.className=n)}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.className)}),()=>e)},z=e=>F(e.lineClassName,e.color?P[e.color]:void 0),pe=e=>{if(!(!e.color||P[e.color]))return{backgroundColor:e.color,borderColor:e.color}},B=(e,t)=>{let n=e.color?N[e.color]:void 0,i=F(e.iconClassName,n);if(e.middle)return{className:F(e.middle.className,n),content:e.middle.content};if(I(e.icon))return{className:i,content:e.icon};if(I(e.dot))return{className:i,content:e.dot};if(e.loading)return{className:i,content:w(fe,()=>({}))};if(e.color&&!N[e.color])return{className:e.iconClassName,content:s(Object.assign(t=>{let n=se().content.cloneNode(!0).firstChild,i=n,a=n.childNodes[0],o=a.parentNode,s;k(()=>{let t={color:e.color};Object.is(s,t)||(s=t,r(i,t))});let c=_(o);return T(c,R,()=>({})),o.insertBefore(c,a),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))};if(t)return{className:i,content:w(R,()=>({}))}},me=(e,t)=>{let n=e.title??e.label,r=e.content??e.children??e.title??e.label,i=I(n)&&r!==n;if(!I(r))return{start:e.start,end:e.end,autoMode:!1};let a={box:e.contentBox??e.box,className:e.contentClassName,content:r},o=i?{box:e.titleBox,className:e.titleClassName,content:n}:void 0;return t===`start`?{start:e.start??a,end:e.end??o,autoMode:!0}:{start:e.start??o,end:e.end??a,autoMode:!0}},V=(e,t)=>e?{key:`__timeline_pending__`,content:e===!0?`Pending`:e,dot:t,loading:!I(t),contentBox:!0,liClassName:`opacity-80`}:null,H=(e,t,n,r,i)=>{let a=e.slice(),o=V(r,i);return o&&a.push(o),n&&a.reverse(),a.map((e,n)=>{let r=de(e,n,t),{start:i,end:o,autoMode:s}=e.start||e.end?{start:e.start,end:e.end,autoMode:!1}:me(e,r);return{key:e.key,beforeLine:e.beforeLine??n>0,afterLine:e.afterLine??n<a.length-1,start:i,middle:B(e,s),end:o,liClassName:F(e.liClassName,e.className),lineClassName:z(e),lineStyle:pe(e)}})},U=e=>{let t=u(e.box),n=u(e.children),r=u(e.className),i=F(`timeline-start`,t.get()&&`timeline-box`,r.get());return f(s(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,r=t,a=t.childNodes[0],s=a.parentNode,c;return k(()=>{let e=i,t=e==null?``:String(e);Object.is(c,t)||(c=t,r.className=t)}),o({parent:s,before:a},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.box),n.set(e.children),r.set(e.className)}),()=>e)},W=e=>{let t=u(e.children),n=u(e.className),r=F(`timeline-middle`,n.get());return f(s(Object.assign(e=>{let n=M().content.cloneNode(!0).firstChild,i=n,a=n.childNodes[0],s=a.parentNode,c;return k(()=>{let e=r,t=e==null?``:String(e);Object.is(c,t)||(c=t,i.className=t)}),o({parent:s,before:a},()=>t.get(),()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.children),n.set(e.className)}),()=>e)},G=e=>{let t=u(e.box),n=u(e.children),r=u(e.className),i=F(`timeline-end`,t.get()&&`timeline-box`,r.get());return f(s(Object.assign(e=>{let t=M().content.cloneNode(!0).firstChild,r=t,a=t.childNodes[0],s=a.parentNode,c;return k(()=>{let e=i,t=e==null?``:String(e);Object.is(c,t)||(c=t,r.className=t)}),o({parent:s,before:a},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.box),n.set(e.children),r.set(e.className)}),()=>e)},he=(e,t)=>s(Object.assign(t=>{let i=ce().content.cloneNode(!0).firstChild,a=i,o=i.childNodes[0],u=o.parentNode,d=i.childNodes[1],f=d.parentNode,p=i.childNodes[2],m=p.parentNode,g=i.childNodes[3],_=g.parentNode,v=i.childNodes[4],y=v.parentNode,x;return k(()=>{let t=e.liClassName,n=t==null?``:String(t);Object.is(x,n)||(x=n,a.className=n)}),b(u,o,()=>e.beforeLine?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(t=>{let n=h(`hr`,t),i;k(()=>{let t=e.lineClassName,r=t==null?``:String(t);Object.is(i,r)||(i=r,n.className=r)});let a;return k(()=>{let t=e.lineStyle;Object.is(a,t)||(a=t,r(n,t))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),b(f,d,()=>e.start?{__rue_compiled_branch_key:!0,create:()=>w(U,()=>({box:e.start.box,className:e.start.className,children:(t,r,i)=>n(t,i,()=>s(Object.assign(t=>{let n=l(),r=c(``);return S(n,r),A(r,()=>e.start.content),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),b(m,p,()=>e.middle?{__rue_compiled_branch_key:!0,create:()=>w(W,()=>({className:e.middle.className,children:(t,r,i)=>n(t,i,()=>s(Object.assign(t=>{let n=l(),r=c(``);return S(n,r),A(r,()=>e.middle.content),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),b(_,g,()=>e.end?{__rue_compiled_branch_key:!0,create:()=>w(G,()=>({box:e.end.box,className:e.end.className,children:(t,r,i)=>n(t,i,()=>s(Object.assign(t=>{let n=l(),r=c(``);return S(n,r),A(r,()=>e.end.content),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),b(y,v,()=>e.afterLine?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(t=>{let n=h(`hr`,t),i;k(()=>{let t=e.lineClassName,r=t==null?``:String(t);Object.is(i,r)||(i=r,n.className=r)});let a;return k(()=>{let t=e.lineStyle;Object.is(a,t)||(a=t,r(n,t))}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),K=Object.assign(t=>{let n=u(t.children),r=u(t.className),i=u(t.compact),o=u(t.direction),s=u(t.items),c=u(t.mode),d=u(t.orientation),p=u(t.pending),h=u(t.pendingDot),g=u(t.reverse),_=u(t.snapIcon),y=ue(o.get(),d.get()),b=F(`timeline`,y&&`timeline-${y}`,_.get()&&`timeline-snap-icon`,i.get()&&`timeline-compact`,r.get()),x=s.get()&&s.get().length?H(s.get(),c.get(),g.get(),p.get(),h.get()):p.get()?H([],c.get(),g.get(),p.get(),h.get()):null;return f(e(()=>{let e=l(),t=le().content.cloneNode(!0),r=t.firstChild,i=r,o=r.childNodes[0],s=o.parentNode;return e.appendChild(t),k(()=>{a(i,b)}),k(()=>{let e=x?x.map(he):n.get();v(()=>D(e,s,o))}),e},!0),e=>m(()=>{n.set(e.children),r.set(e.className),i.set(e.compact),o.set(e.direction),s.set(e.items),c.set(e.mode),d.set(e.orientation),p.set(e.pending),h.set(e.pendingDot),g.set(e.reverse),_.set(e.snapIcon)}),()=>t)},{Start:U,Middle:W,End:G}),ge=O(`<div class="overflow-x-auto pb-2"><!--rue:opaque-hole:0--></div>`),_e=O(`<div class="component-preview not-prose text-base-content my-6 lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),ve=O(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),q=O(`<span><!--rue:text-hole:0--></span>`),ye=O(`<div class="space-y-2 text-left"><div><!--rue:text-hole:0--></div><div class="font-medium leading-5"><!--rue:text-hole:1--></div><div class="text-xs leading-5 opacity-70"><!--rue:text-hole:2--></div></div>`),be=O(`<div><!--rue:opaque-hole:0--></div>`),xe=O('<div class="max-w-none prose prose-sm md:prose-base"><h1>Timeline 时间线</h1><p class="text-sm mt-3 mb-3">Timeline 用于按时间顺序串起一组事件、阶段或发布动作。Rue 现在同时支持手写 children 布局和更贴近业务组件心智的 items 数据 API；项目页面里的示例 标题与排列也展示，避免增强时把基础示例吞掉。</p><div class="not-prose grid gap-4 md:grid-cols-3 my-6 lg:my-8"><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="badge badge-info badge-soft badge-sm">数据驱动</div><div class="mt-3 font-medium">items、mode、reverse</div><p class="mt-2 mb-0 text-sm leading-6 opacity-70">直接传入 title、content、color、pending 等字段，不用再手写每个 li 的骨架。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="badge badge-secondary badge-soft badge-sm">精细布局</div><div class="mt-3 font-medium">Start / Middle / End</div><p class="mt-2 mb-0 text-sm leading-6 opacity-70">适合需要把时间、图标和内容排成更强定制结构的场景。</p></div><div class="rounded-box border border-base-300 bg-base-100 p-4 shadow-sm"><div class="badge badge-warning badge-soft badge-sm">视觉控制</div><div class="mt-3 font-medium">color、snapIcon、compact</div><p class="mt-2 mb-0 text-sm leading-6 opacity-70">在不改 Rue 当前视觉基调的前提下，把状态色、图标吸附和紧凑排布一起补充。</p></div></div><div role="alert" class="alert alert-soft alert-info not-prose my-6"><span class="text-sm leading-6">连接线仍然由每个节点前后的 hr 负责；当你使用 items 时，组件会自动推断这些线条。手写 children 时，仍然建议显式保持 hr 以获得最稳定的布局。</span></div><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><!--rue:opaque-hole:10--><!--rue:opaque-hole:11--><!--rue:opaque-hole:12--><h2>增强能力</h2><p class="text-sm opacity-80">本节集中展示数据 API 的组合场景，例如 `reverse`、`pending`、`mode` 等，更适合业务数据直接驱动。</p><!--rue:opaque-hole:13--><div class="my-10 lg:my-14"><h2>API</h2><p class="text-sm leading-6 opacity-70">推荐优先使用 items 进行数据驱动渲染；当你需要极细粒度地控制每个节点结构时，再回到 Start / Middle / End 组合方式。</p><h3 class="mt-6">Timeline</h3><!--rue:opaque-hole:14--><h3 class="mt-8">TimelineItemProps</h3><!--rue:opaque-hole:15--></div></div>'),Se=(...e)=>e.filter(Boolean).join(` `),Ce={neutral:`border-neutral text-neutral bg-neutral/10`,primary:`border-primary text-primary bg-primary/10`,secondary:`border-secondary text-secondary bg-secondary/10`,accent:`border-accent text-accent bg-accent/10`,info:`border-info text-info bg-info/10`,success:`border-success text-success bg-success/10`,warning:`border-warning text-warning bg-warning/10`,error:`border-error text-error bg-error/10`},we={neutral:`badge-neutral badge-soft`,primary:`badge-primary badge-soft`,secondary:`badge-secondary badge-soft`,accent:`badge-accent badge-soft`,info:`badge-info badge-soft`,success:`badge-success badge-soft`,warning:`badge-warning badge-soft`,error:`badge-error badge-soft`},Te={neutral:`bg-neutral border-neutral`,primary:`bg-primary border-primary`,secondary:`bg-secondary border-secondary`,accent:`bg-accent border-accent`,info:`bg-info border-info`,success:`bg-success border-success`,warning:`bg-warning border-warning`,error:`bg-error border-error`},J=`text-xs font-semibold uppercase tracking-[0.26em] opacity-60`,Y=t=>e(e=>{let n=_e().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],i=r.parentNode,a=n.childNodes[0].childNodes[0].childNodes[1],c=a.parentNode,u=n.childNodes[1],d=u.parentNode,f=n.childNodes[2],p=f.parentNode;o({parent:i,before:r},()=>t.title,()=>({})),b(c,a,()=>t.summary?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let n=h(`p`,e);n.className=`m-0 text-sm opacity-70 max-w-3xl leading-6`;let r=y(`rue:compiled-slot`);return S(n,r),o({parent:n,before:r},()=>t.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let m=_(d);return T(m,ae,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.tab.value,onChange:e=>t.tab.value=e,className:`mb-3 mt-4`})),d.insertBefore(m,u),k(()=>{let e=t.tab.value===`preview`?t.preview():w(ie,()=>({className:`mt-2`,lang:`tsx`,code:t.code}));v(()=>D(e,p,f))}),n}),Ee=e=>{let n=u(e.rows);return f(s(Object.assign(e=>{let r=ve().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=O(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return k(()=>{let e=n.get()||[];s=ne(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return re(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let l=t.childNodes[2].childNodes[0].childNodes[0],u=l.parentNode,d=t.childNodes[3].childNodes[0].childNodes[0],f=d.parentNode,p=c(``);a.insertBefore(p,n),a.removeChild(n);let m;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}let g=c(``);u.insertBefore(g,l),u.removeChild(l);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=c(``);f.insertBefore(v,d),f.removeChild(d);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(m,e)||(p.textContent=e,m=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),t(()=>d(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{n.set(e.rows)}),()=>e)},X=e=>{let t=u(e.label),n=u(e.tone);return f(s(Object.assign(e=>{let r=q().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=a.parentNode,s;k(()=>{let e=Se(`inline-flex size-5 items-center justify-center rounded-full border text-[11px] font-semibold`,Ce[n.get()===void 0?`primary`:n.get()]),t=e==null?``:String(e);Object.is(s,t)||(s=t,i.className=t)});let l=c(``);return o.insertBefore(l,a),o.removeChild(a),A(l,()=>t.get()===void 0?`•`:t.get()),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.label),n.set(e.tone)}),()=>e)},Z=e=>{let t=u(e.badge),n=u(e.summary),r=u(e.title),i=u(e.tone);return f(s(Object.assign(e=>{let a=ye().content.cloneNode(!0).firstChild,o=a.childNodes[0],s=a.childNodes[0].childNodes[0],l=s.parentNode,u=a.childNodes[1].childNodes[0],d=u.parentNode,f=a.childNodes[2].childNodes[0],p=f.parentNode,m;k(()=>{let e=Se(`badge badge-sm`,we[i.get()===void 0?`primary`:i.get()]),t=e==null?``:String(e);Object.is(m,t)||(m=t,o.className=t)});let h=c(``);l.insertBefore(h,s),l.removeChild(s),A(h,()=>t.get());let g=c(``);d.insertBefore(g,u),d.removeChild(u),A(g,()=>r.get());let _=c(``);return p.insertBefore(_,f),p.removeChild(f),A(_,()=>n.get()),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>m(()=>{t.set(e.badge),n.set(e.summary),r.set(e.title),i.set(e.tone)}),()=>e)},Q=[{year:`1984`,badge:`Launch`,title:`Macintosh 发布`,summary:`用图形界面和桌面工作流把个人计算体验拉到一个新门槛。`,tone:`primary`},{year:`1998`,badge:`Reboot`,title:`iMac 回归`,summary:`让产品语言、品牌和硬件方向重新对齐，快速恢复增长。`,tone:`secondary`},{year:`2001`,badge:`Pocket`,title:`iPod 上线`,summary:`把设备、内容和同步体验打通，首次形成轻量生态闭环。`,tone:`accent`},{year:`2007`,badge:`Touch`,title:`iPhone 亮相`,summary:`用多点触控把移动设备从输入工具转成完整的交互平台。`,tone:`info`},{year:`2015`,badge:`Wear`,title:`Apple Watch 成型`,summary:`把通知、健康和轻交互收束到一条更贴身的设备线。`,tone:`success`}],De=Q.map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,year:e.year,tone:e.tone,badge:e.badge,title:e.title,summary:e.summary})),Oe=Q.slice(0,4).map((e,t,n)=>({key:e.year,beforeLine:t>0,afterLine:t<n.length-1,start:{className:J,content:e.year},middle:{content:w(X,()=>({tone:e.tone,label:String(t+1)}))},end:{box:!0,content:w(Z,()=>({title:e.title,summary:e.summary,badge:e.badge,tone:e.tone}))}})),ke=()=>[{key:`discover`,title:s(Object.assign(e=>{let t=h(`span`,e);return t.className=`badge badge-outline badge-sm`,S(t,c(`Discovery`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),content:w(Z,()=>({title:`梳理场景`,summary:`把用户角色、目标和约束收敛成可以执行的启动清单。`,badge:`Week 1`,tone:`info`})),contentBox:!0,color:`info`},{key:`design`,title:s(Object.assign(e=>{let t=h(`span`,e);return t.className=`badge badge-outline badge-sm`,S(t,c(`Design`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),content:w(Z,()=>({title:`交互定稿`,summary:`把关键流转拆到组件、状态和异常提示三个层次。`,badge:`Week 2`,tone:`secondary`})),contentBox:!0,color:`secondary`},{key:`ship`,title:s(Object.assign(e=>{let t=h(`span`,e);return t.className=`badge badge-outline badge-sm`,S(t,c(`Ship`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),content:w(Z,()=>({title:`上线校验`,summary:`在真实流量前补充埋点、回滚预案和发布检查单。`,badge:`Week 3`,tone:`success`})),contentBox:!0,color:`success`}],Ae=()=>[{key:`brief`,title:`Brief`,content:w(Z,()=>({title:`需求冻结`,summary:`确定业务范围和验收标准，避免后续迭代反复打断主线。`,badge:`Stage 1`,tone:`primary`})),contentBox:!0,color:`primary`},{key:`build`,title:`Build`,content:w(Z,()=>({title:`联调完成`,summary:`把视觉稿、交互状态和数据请求在一个里程碑上对齐。`,badge:`Stage 2`,tone:`success`})),contentBox:!0,color:`success`}],je=()=>Q.slice(0,4).map(t=>({key:`${t.year}-color`,title:e(()=>{let e=l(),n=q().content.cloneNode(!0),r=n.firstChild,i=r,o=r.childNodes[0],s=o.parentNode;return e.appendChild(n),k(()=>{a(i,Se(`badge badge-sm`,we[t.tone]))}),k(()=>{let e=t.badge;v(()=>D(e,s,o))}),e},!0),content:w(Z,()=>({title:t.title,summary:t.summary,badge:t.year,tone:t.tone})),contentBox:!0,color:t.tone})),Me=[{key:`plan`,title:`Plan`,content:w(Z,()=>({title:`项目拆解`,summary:`先把节奏拆成清晰节点，再把每个节点的所有者钉下来。`,badge:`01`,tone:`primary`})),contentBox:!0,icon:w(X,()=>({tone:`primary`,label:`1`}))},{key:`review`,title:`Review`,content:w(Z,()=>({title:`体验走查`,summary:`在联调前做一次完整路径走查，尽量把细碎问题前置。`,badge:`02`,tone:`warning`})),contentBox:!0,icon:w(X,()=>({tone:`warning`,label:`2`}))},{key:`ship`,title:`Ship`,content:w(Z,()=>({title:`灰度上线`,summary:`展示观察窗口和回滚钩子，让上线是一个可管理过程。`,badge:`03`,tone:`success`})),contentBox:!0,icon:w(X,()=>({tone:`success`,label:`3`}))}],$=t=>{let n=u(t.alternate),r=u(t.bottomOnly),o=u(t.colored),c=u(t.compact),d=u(t.noIcons),_=u(t.orientation),y=u(t.snapIcon),b=(_.get()===void 0?`horizontal`:_.get())===`vertical`;return f(e(()=>{let t=l(),u=be().content.cloneNode(!0),f=u.firstChild,m=f,_=f.childNodes[0],x=_.parentNode;return t.appendChild(u),k(()=>{a(m,b?``:`overflow-x-auto pb-2`)}),k(()=>{let t=i(K,()=>({orientation:b?`vertical`:void 0,snapIcon:y.get(),compact:c.get(),className:b?`max-w-3xl`:`min-w-[860px]`,children:Q.map((t,a)=>{let c=a>0,l=a<Q.length-1,u=o.get()?Te[t.tone]:void 0,f=!!n.get()&&a%2==0;return e(e=>{let n=te(`li`,e),o=g(`rue:slot:anchor`);p(n,o),k(()=>{let e=c?s(Object.assign(e=>{let t=h(`hr`,e),n;return k(()=>{let e=u,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):``;v(()=>D(e,n,o))});let m=g(`rue:slot:anchor`);p(n,m),k(()=>{let e=r.get()?``:f?(()=>{let e=i(Z,()=>({title:t.title,summary:t.summary,badge:t.badge,tone:t.tone}));return i(K.Start,()=>({box:!0,children:e}))})():i(K.Start,()=>({className:J,children:t.year}));v(()=>D(e,n,m))});let _=g(`rue:slot:anchor`);p(n,_),k(()=>{let e=d.get()?``:(()=>{let e=i(X,()=>({tone:t.tone,label:String(a+1)}));return i(K.Middle,()=>({children:e}))})();v(()=>D(e,n,_))});let y=g(`rue:slot:anchor`);p(n,y),k(()=>{let e=r.get()?(()=>{let e=i(Z,()=>({title:t.title,summary:t.summary,badge:t.badge,tone:t.tone}));return i(K.End,()=>({box:!0,children:e}))})():f?i(K.End,()=>({className:J,children:t.year})):(()=>{let e=i(Z,()=>({title:t.title,summary:t.summary,badge:t.badge,tone:t.tone}));return i(K.End,()=>({box:!0,children:e}))})();v(()=>D(e,n,y))});let b=g(`rue:slot:anchor`);return p(n,b),k(()=>{let e=l?s(Object.assign(e=>{let t=h(`hr`,e),n;return k(()=>{let e=u,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)}),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})):``;v(()=>D(e,n,b))}),n})})}));v(()=>D(t,x,_))}),t},!0),e=>m(()=>{n.set(e.alternate),r.set(e.bottomOnly),o.set(e.colored),c.set(e.compact),d.set(e.noIcons),_.set(e.orientation),y.set(e.snapIcon)}),()=>t)},Ne=[{prop:`children`,description:`展示基础手写布局能力，适合完全自定义每个 li 的内容结构`,type:`any`,defaultValue:`-`},{prop:`className`,description:`附加到根节点 ul.timeline 的类名`,type:`string`,defaultValue:`-`},{prop:`compact`,description:`启用 daisyUI 的 timeline-compact，让节点更集中地落在单侧`,type:`boolean`,defaultValue:`false`},{prop:`direction`,description:`时间线方向，使用 Rue 当前命名`,type:`horizontal | vertical`,defaultValue:`horizontal`},{prop:`items`,description:`数据驱动节点列表，支持 title、content、color、icon、loading 等增强能力`,type:`TimelineItemProps[]`,defaultValue:`-`},{prop:`mode`,description:`自动决定主内容所在侧，alternate 会按索引在两侧交替`,type:`start | end | alternate`,defaultValue:`end`},{prop:`orientation`,description:`direction 的别名，方便按常见业务组件的接入写法`,type:`horizontal | vertical`,defaultValue:`-`},{prop:`pending`,description:`在尾部追加等待中的节点，可传 true、文本或 JSX`,type:`boolean | any`,defaultValue:`false`},{prop:`pendingDot`,description:`自定义 pending 节点的图标或圆点`,type:`any`,defaultValue:`-`},{prop:`reverse`,description:`反转 items 顺序，适合从最近事件向过去回溯`,type:`boolean`,defaultValue:`false`},{prop:`snapIcon`,description:`启用 timeline-snap-icon，让中间图标更贴近起始侧`,type:`boolean`,defaultValue:`false`}],Pe=[{prop:`afterLine`,description:`显式控制当前项后方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`beforeLine`,description:`显式控制当前项前方是否渲染连接线；未传时自动推断`,type:`boolean`,defaultValue:`auto`},{prop:`box`,description:`自动布局下让主内容一侧带上 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`color`,description:`为默认圆点和连接线设置语义色，支持 primary、success 或自定义颜色值`,type:`string`,defaultValue:`-`},{prop:`content`,description:`自动布局时的主内容，通常映射到时间线的主侧`,type:`any`,defaultValue:`-`},{prop:`contentBox`,description:`自动布局时仅让 content 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`},{prop:`end`,description:`直接传入 end 段结构，适合使用 Rue 基础的精细布局模式`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`icon`,description:`替换默认圆点的图标节点`,type:`any`,defaultValue:`-`},{prop:`iconClassName`,description:`附加到自动生成 middle 节点上的类名`,type:`string`,defaultValue:`-`},{prop:`label`,description:`title 的别名，可用于衔接基础心智`,type:`any`,defaultValue:`-`},{prop:`lineClassName`,description:`附加到前后 hr 连接线的类名`,type:`string`,defaultValue:`-`},{prop:`loading`,description:`用 loading 圆点渲染当前节点，适合 pending 之前的进行中状态`,type:`boolean`,defaultValue:`false`},{prop:`middle`,description:`直接覆盖中间图标区，优先级高于 icon、dot 和 loading`,type:`TimelineMiddlePart`,defaultValue:`-`},{prop:`placement`,description:`指定主内容落在 start 还是 end 一侧`,type:`start | end`,defaultValue:`-`},{prop:`position`,description:`placement 的别名，支持 left、right、start、end`,type:`left | right | start | end`,defaultValue:`-`},{prop:`start`,description:`直接传入 start 段结构，适合整合基础示例 的写法`,type:`TimelineItemPart`,defaultValue:`-`},{prop:`title`,description:`自动布局时的辅助信息，通常映射到主内容的对侧`,type:`any`,defaultValue:`-`},{prop:`titleBox`,description:`自动布局时仅让 title 一侧启用 timeline-box`,type:`boolean`,defaultValue:`false`}],Fe=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,Ie=`import { Timeline } from '@rue-js/design'

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
</div>`,Le=`import { Timeline } from '@rue-js/design'

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

<Timeline mode="alternate" reverse pending="质量复核中" items={items} />`,Re=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,ze=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>
    </Timeline.Middle>
    <Timeline.End box>iMac 回归</Timeline.End>
    <hr />
  </li>
</Timeline>`,Be=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Discovery', content: '梳理场景', contentBox: true },
  { title: 'Design', content: '交互定稿', contentBox: true },
  { title: 'Ship', content: '上线校验', contentBox: true },
]

<Timeline mode="alternate" items={items} />`,Ve=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Launch', content: 'Macintosh 发布', color: 'primary', contentBox: true },
  { title: 'Touch', content: 'iPhone 亮相', color: 'info', contentBox: true },
  { title: 'Wear', content: 'Apple Watch 成型', color: 'success', contentBox: true },
]

<div className="overflow-x-auto pb-2">
  <Timeline items={items} className="min-w-[860px]" />
</div>`,He=`import { Timeline } from '@rue-js/design'

<Timeline>
  <li>
    <Timeline.Start className="text-xs font-semibold uppercase tracking-[0.26em] opacity-60">
      1984
    </Timeline.Start>
    <Timeline.End box>Macintosh 发布</Timeline.End>
    <hr />
  </li>
</Timeline>`,Ue=`import { Timeline } from '@rue-js/design'

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
</Timeline>`,We=`import { Timeline } from '@rue-js/design'

<Timeline orientation="vertical">
  <li>
    <Timeline.Middle>
      <span className="inline-flex size-5 items-center justify-center rounded-full border border-secondary text-secondary bg-secondary/10">2</span>
    </Timeline.Middle>
    <Timeline.End box>iMac 回归</Timeline.End>
    <hr />
  </li>
</Timeline>`,Ge=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Discovery', content: '梳理场景', contentBox: true },
  { title: 'Design', content: '交互定稿', contentBox: true },
  { title: 'Ship', content: '上线校验', contentBox: true },
]

<Timeline orientation="vertical" mode="alternate" items={items} />`,Ke=`import { Timeline } from '@rue-js/design'

const items = [
  { title: 'Launch', content: 'Macintosh 发布', color: 'primary', contentBox: true },
  { title: 'Touch', content: 'iPhone 亮相', color: 'info', contentBox: true },
  { title: 'Wear', content: 'Apple Watch 成型', color: 'success', contentBox: true },
]

<Timeline orientation="vertical" items={items} />`,qe=`import { Timeline } from '@rue-js/design'

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

<Timeline orientation="vertical" compact snapIcon items={items} />`,Je=()=>{let t=E(`preview`),n=E(`preview`),r=E(`preview`),a=E(`preview`),o=E(`preview`),c=E(`preview`),u=E(`preview`),d=E(`preview`),y=E(`preview`),b=E(`preview`),S=E(`preview`),O=E(`preview`),ne=E(`preview`);return C(()=>f((()=>{let f=e(()=>{let f=l(),m=xe().content.cloneNode(!0),C=m.firstChild,E=C.childNodes[4],re=E.parentNode,A=C.childNodes[5],ie=A.parentNode,ae=C.childNodes[6],oe=ae.parentNode,j=C.childNodes[7],se=j.parentNode,M=C.childNodes[8],ce=M.parentNode,le=C.childNodes[9],N=le.parentNode,P=C.childNodes[10],F=P.parentNode,I=C.childNodes[11],ue=I.parentNode,L=C.childNodes[12],de=L.parentNode,R=C.childNodes[13],fe=R.parentNode,z=C.childNodes[14],pe=z.parentNode,B=C.childNodes[15],me=B.parentNode,V=C.childNodes[16],H=V.parentNode,U=C.childNodes[19],W=U.parentNode,G=C.childNodes[20].childNodes[3],he=G.parentNode,_e=C.childNodes[20].childNodes[5],ve=_e.parentNode;f.appendChild(m),k(()=>{let n=i(Y,()=>({title:`Timeline 通过数据渲染（数组）`,summary:`展示基础“外部数组 map 成 li”的用法，但示例内容更完整，适合从现成业务数据直接渲染。`,tab:t,preview:x(()=>e(t=>{let n=ge().content.cloneNode(!0).firstChild,r=n.childNodes[0],a=r.parentNode,o=i(K,()=>({className:`min-w-[860px]`,children:De.map(t=>e(()=>{let e=l(),n=te(`li`,e);p(e,n),ee(()=>t.beforeLine?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=h(`hr`,e);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(n);let r=g(`rue:component:anchor`);p(n,r),k(()=>{let e=i(K.Start,()=>({className:J,children:t.year}));v(()=>D(e,n,r))});let a=g(`rue:component:anchor`);p(n,a),k(()=>{let e=i(X,()=>({tone:t.tone,label:`✓`})),r=i(K.Middle,()=>({children:e}));v(()=>D(r,n,a))});let o=g(`rue:component:anchor`);return p(n,o),k(()=>{let e=i(Z,()=>({title:t.title,summary:t.summary,badge:t.badge,tone:t.tone})),r=i(K.End,()=>({box:!0,children:e}));v(()=>D(r,n,o))}),ee(()=>t.afterLine?{__rue_compiled_branch_key:!0,create:()=>s(Object.assign(e=>{let t=h(`hr`,e);return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>s(Object.assign(e=>{let t=l();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(n),e},!0))}));return D(o,a,r),n})),code:Fe}));v(()=>D(n,re,E))}),k(()=>{let e=i(Y,()=>({title:`Timeline 通过数据渲染（数组，组件内部）`,summary:`如果你已经习惯 Rue 基础的 start / middle / end 结构，现在仍然可以通过 items 直接交给组件内部渲染。`,tab:n,preview:x(()=>s(Object.assign(e=>{let t=ge().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=_(r);return T(i,K,()=>({items:Oe,className:`min-w-[860px]`})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Ie}));v(()=>D(e,ie,A))}),k(()=>{let e=i(Y,()=>({title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:r,preview:x(()=>w(K,()=>({mode:`alternate`,reverse:!0,pending:`质量复核中`,items:Ae()}))),code:Le}));v(()=>D(e,oe,ae))}),k(()=>{let e=i(Y,()=>({title:`两侧文字与图标`,summary:`展示基础复合组件写法，适合时间标签与主内容天然分居两侧的场景。`,tab:a,preview:()=>$({orientation:`horizontal`}),code:Re}));v(()=>D(e,se,j))}),k(()=>{let e=i(Y,()=>({title:`仅底部一侧`,summary:`当上侧只需要留出轨道和节点，不需要额外元信息时，可以只渲染 end 一侧。`,tab:o,preview:()=>$({orientation:`horizontal`,bottomOnly:!0}),code:ze}));v(()=>D(e,ce,M))}),k(()=>{let e=i(Y,()=>({title:`不同侧交替`,summary:`使用 mode=alternate 后，主内容会在两侧自动切换，不再需要手写交替布局。`,tab:c,preview:x(()=>w(K,()=>({mode:`alternate`,items:ke()}))),code:Be}));v(()=>D(e,N,le))}),k(()=>{let e=i(Y,()=>({title:`彩色线条`,summary:`color 会同步作用于默认圆点和连接线，让状态型时间线更清晰。`,tab:u,preview:x(()=>s(Object.assign(e=>{let t=ge().content.cloneNode(!0).firstChild,n=t.childNodes[0],r=n.parentNode,i=_(r);return T(i,K,()=>({items:je(),className:`min-w-[860px]`})),r.insertBefore(i,n),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),code:Ve}));v(()=>D(e,F,P))}),k(()=>{let e=i(Y,()=>({title:`无图标`,summary:`如果只想保持轨道和信息块，可以完全省略 middle 区域。`,tab:d,preview:()=>$({orientation:`horizontal`,noIcons:!0}),code:He}));v(()=>D(e,ue,I))}),k(()=>{let e=i(Y,()=>({title:`纵向：两侧文字与图标`,summary:`纵向布局仍然适合记录里程碑、工单流转或调试过程。`,tab:y,preview:()=>$({orientation:`vertical`}),code:Ue}));v(()=>D(e,de,L))}),k(()=>{let e=i(Y,()=>({title:`纵向：仅右侧`,summary:`纵向时间线最常见的业务形态是只保持内容一侧，把主信息集中在右侧阅读。`,tab:b,preview:()=>$({orientation:`vertical`,bottomOnly:!0}),code:We}));v(()=>D(e,fe,R))}),k(()=>{let e=i(Y,()=>({title:`纵向：不同侧交替`,summary:`在纵向模式下配合 mode=alternate，可以做更有节奏感的发布轨迹或品牌时间线。`,tab:S,preview:x(()=>w(K,()=>({orientation:`vertical`,mode:`alternate`,items:ke()}))),code:Ge}));v(()=>D(e,pe,z))}),k(()=>{let e=i(Y,()=>({title:`纵向：彩色线条`,summary:`color 在纵向布局下更适合表达节点状态，例如成功、风险、待处理等。`,tab:O,preview:x(()=>w(K,()=>({orientation:`vertical`,items:je()}))),code:Ke}));v(()=>D(e,me,B))}),k(()=>{let e=i(Y,()=>({title:`图标吸附到起始侧（snap to start）`,summary:`snapIcon 和 compact 组合后，更适合侧栏式或审计日志式的紧凑纵向布局。`,tab:ne,preview:x(()=>w(K,()=>({orientation:`vertical`,compact:!0,snapIcon:!0,items:Me,className:`max-w-2xl`}))),code:qe}));v(()=>D(e,H,V))}),k(()=>{let e=i(Y,()=>({title:`reverse 与 pending`,summary:`通过数据 API 组合 mode、reverse 和 pending，控制内容侧、顺序和等待节点。`,tab:r,preview:x(()=>w(K,()=>({mode:`alternate`,reverse:!0,pending:`质量复核中`,items:Ae()}))),code:Le}));v(()=>D(e,W,U))});let q=_(he);T(q,Ee,()=>({rows:Ne})),he.insertBefore(q,G);let ye=_(ve);return T(ye,Ee,()=>({rows:Pe})),ve.insertBefore(ye,_e),f});return i(oe,()=>({children:f}))})(),e=>m(()=>{})))};export{Je as default};
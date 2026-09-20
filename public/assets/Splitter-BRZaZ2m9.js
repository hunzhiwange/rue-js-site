import{B as e,Bt as t,Ct as n,Dt as r,F as i,G as a,I as o,J as s,L as c,M as l,P as u,Qt as d,St as f,V as p,Vt as m,W as h,Wt as g,_n as _,ct as v,dt as y,en as b,f as x,fn as S,ft as C,g as w,gn as T,hn as E,in as D,m as O,mn as k,mt as A,nt as j,pn as M,pt as N,q as P,sn as F,tt as ee,u as I,vn as L,yn as R,z,zt as B}from"./rue-runtime-BWbIfNT8.js";import{r as V}from"./SidebarPlaygroundDesign-DS4naa5t.js";import{t as H}from"./PreviewBlock-CEz3T383.js";var U=R(`<div data-rue-splitter-panel="true"><div class="h-full w-full"><!--rue:text-hole:0--></div></div>`),te=R(`<div data-rue-splitter-root="true"><div class="pointer-events-none absolute inset-0" aria-hidden="true"></div></div>`),W=.5,G=3,ne=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),re=new WeakMap,ie=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},K=(e,t,n)=>Math.min(n,Math.max(t,e)),q=(e,t)=>t?`${e} ${t}`:e,J=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,ae=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:J(e.width),minWidth:J(e.minWidth),maxWidth:J(e.maxWidth),height:J(e.height),minHeight:J(e.minHeight),maxHeight:J(e.maxHeight)}},oe=e=>e.map(e=>Math.max(0,Math.round(e))),Y=e=>e.reduce((e,t)=>e+t,0),X=(e,t)=>{let n=Y(e);if(t<=0||n<=W)return e.slice();let r=t/n;return e.map(e=>e*r)},se=(e,t)=>e.length===t.length&&e.every((e,n)=>Math.abs(e-t[n])<=W),ce=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),Z=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},le=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:K(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=K(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-Y(r);if(Math.abs(e)<=W)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>W?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>W?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=W?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},ue=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},de=(e,t)=>t===`vertical`?e.clientY:e.clientX,fe=(e,t)=>e.map(e=>{let n=Z(e.min,t)??0,r=Z(e.max,t)??t;return{min:K(n,0,t),max:K(Math.max(r,n),n,t)}}),pe=(e,t,n)=>{let r=fe(e,t),i=n&&n.length===e.length&&Y(n)>W?X(n,t):void 0;return le(e.map((e,n)=>{let r=Z(e.size,t);if(typeof r==`number`)return r;let a=Z(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},me=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=K(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},he=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},Q=Object.assign((r,i,a)=>{let s=h(z(r,`children`)),l=h(z(r,`className`)),u=h(z(r,`layout`)),d=h(z(r,`lazy`)),p=h(z(r,`onDraggerDoubleClick`)),m=h(z(r,`onResize`)),_=h(z(r,`onResizeEnd`)),x=h(z(r,`onResizeStart`)),S=h(z(r,`orientation`)),w=h(z(r,`style`)),T=h(z(r,`vertical`)),E=h(c(e(r),[`children`,`className`,`layout`,`lazy`,`onDraggerDoubleClick`,`onResize`,`onResizeEnd`,`onResizeStart`,`orientation`,`style`,`vertical`])),O=ee(`SplitterRoot:hook:0`,()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0,lastAvailableSize:0})),k=v(()=>ce(S.get(),u.get(),T.get()));k.get();let A=k,M=v(()=>ae(w.get()));M.get();let N=M,P=v(()=>A.get()===`vertical`&&N.get()?.height==null?{height:N.get()?.minHeight??`320px`}:void 0);P.get();let I=()=>{let e=O.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},L=()=>{let e=O.rootElement,t=ue(e??void 0,A.get()),n=e?.parentElement;return t>0&&(O.lastAvailableSize=t,n&&re.set(n,t)),(t>0?t:0)||O.lastAvailableSize||(n?re.get(n):0)||0},R=e=>{m.get()&&m.get()(oe(e)),Q()},B=e=>{O.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),A.get()===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},V=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?A.get()===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},H=()=>{let e=O.handleRecords,t=O.panelConfigs,n=O.sizeState,r=L();e.forEach((e,i)=>{let a=t[i],o=t[i+1],s=Y(n.slice(0,i+1)),c=O.activeHandleIndex===i,l=K((d.get()!==void 0&&d.get()&&c?s+O.previewOffset:s)-G/2,0,Math.max(r-G,0));e.root.dataset.rueSplitterHandleActive=c?`true`:`false`,e.root.style.transform=``,A.get()===`vertical`?(e.root.style.top=`${l}px`,e.root.style.left=`0`,e.root.style.height=`${G}px`,e.root.style.width=`100%`):(e.root.style.left=`${l}px`,e.root.style.top=`0`,e.root.style.width=`${G}px`,e.root.style.height=`100%`);let u=!a.resizable||!o?.resizable;e.root.dataset.rueSplitterHandleDisabled=u?`true`:`false`,u&&(e.root.style.cursor=`default`)})},U=()=>{let e=O.overlayElement;e&&(e.innerHTML=``),O.handleRecords=[]},W=(e,t=!1)=>{let n=L(),r=le(e,fe(O.panelConfigs,n),n);O.sizeState=r,B(r),H(),t&&R(r)},J=()=>{U();let e=O.overlayElement,t=O.panelConfigs;if(!e||t.length<=1)return;let n=[];t.slice(0,-1).forEach((r,i)=>{let a=t[i+1],o=document.createElement(`div`);o.setAttribute(`role`,`separator`),o.setAttribute(`aria-orientation`,A.get()),o.setAttribute(`aria-label`,`调整面板 ${i+1} 与 ${i+2}`),o.setAttribute(`data-rue-splitter-handle`,String(i)),o.className=A.get()===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,o.addEventListener(`mousedown`,e=>{Se(e,i)}),o.addEventListener(`dblclick`,()=>{p.get()&&p.get()(i)}),(!r.resizable||!a?.resizable)&&(o.dataset.rueSplitterHandleDisabled=`true`,o.style.cursor=`default`),e.appendChild(o),n.push({root:o})}),O.handleRecords=n,H()},X=(e=!0)=>{O.panelElements=I(),O.panelConfigs=O.panelElements.map(he);let t=O.panelConfigs;if(!t.length){O.sizeState=[],U();return}let n=pe(t,L(),e&&O.sizeState.length===t.length?O.sizeState:void 0);se(O.sizeState,n)||(O.sizeState=n),B(n),J()},Z=()=>{let e=I();!e.length||e.length!==O.sizeState.length||e.every((e,t)=>V(e,O.sizeState[t]??0))||(O.panelElements=e,B(O.sizeState),H())},Q=()=>{let e=I();e.length===O.sizeState.length&&e.every((e,t)=>V(e,O.sizeState[t]??0))||O.layoutRestorePending||(O.layoutRestorePending=!0,queueMicrotask(()=>{O.layoutRestorePending=!1,O.rootElement&&Z()}))},ge=e=>{O.mutationSyncPreferCurrent=O.mutationSyncPending?O.mutationSyncPreferCurrent&&e:e,!O.mutationSyncPending&&(O.mutationSyncPending=!0,queueMicrotask(()=>{let e=O.mutationSyncPreferCurrent;if(O.mutationSyncPending=!1,O.mutationSyncPreferCurrent=!0,O.rootElement){if(O.dragState){Q();return}X(e)}}))},_e=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==O.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&ne.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&ge(!n)},ve=()=>{ie()||O.pendingSync||(O.pendingSync=!0,queueMicrotask(()=>{O.pendingSync=!1,!(!O.rootElement||O.dragState)&&X(!1)}))},ye=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,be),window.removeEventListener(`mouseup`,xe))};function be(e){let t=O.dragState;if(!t)return;let n=fe(O.panelConfigs,t.availableSize),r=de(e,A.get())-t.startPoint,i=me(t.startSizes,n,t.index,r),a=i[t.index]-t.startSizes[t.index];if(O.pendingSizes=i,O.previewOffset=d.get()!==void 0&&d.get()?a:0,d.get()!==void 0&&d.get()){H();return}W(i,!0)}function xe(){let e=O.dragState;if(!e)return;let t=O.sizeState,n=O.panelConfigs,r=d.get()!==void 0&&d.get()?O.pendingSizes??e.startSizes:t.length===n.length?t.slice():e.startSizes;d.get()!==void 0&&d.get()&&W(r,!0),O.dragState=null,O.pendingSizes=null,O.activeHandleIndex=null,O.previewOffset=0,H(),ye(),_.get()&&_.get()(oe(r))}let Se=(e,t)=>{if(e.button!==0)return;O.panelElements=I(),O.panelConfigs=O.panelElements.map(he);let n=O.panelConfigs;if(!n[t]||!n[t+1]||!n[t].resizable||!n[t+1].resizable)return;e.preventDefault();let r=L(),i=O.sizeState.length===n.length?O.sizeState.slice():pe(n,r);O.dragState={index:t,startPoint:de(e,A.get()),startSizes:i,availableSize:r},O.pendingSizes=null,O.activeHandleIndex=t,O.previewOffset=0,H(),typeof window<`u`&&(window.addEventListener(`mousemove`,be),window.addEventListener(`mouseup`,xe)),x.get()&&x.get()(oe(i))},Ce=e=>{O.rootElement=e},we=e=>{O.overlayElement=e};return y(()=>{ie()||(O.mountedRootElement=O.rootElement,X(!1),O.handlePanelConfigChange=()=>{O.dragState||X(!0)},O.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,O.handlePanelConfigChange),typeof MutationObserver<`u`&&O.mountedRootElement&&(O.panelMutationObserver=new MutationObserver(_e),O.panelMutationObserver.observe(O.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(ne)})),O.handleWindowResize=()=>{O.dragState||X(!0)},typeof window<`u`&&window.addEventListener(`resize`,O.handleWindowResize))}),C(()=>{ye(),O.panelMutationObserver?.disconnect(),O.panelMutationObserver=null,O.handlePanelConfigChange&&O.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,O.handlePanelConfigChange),typeof window<`u`&&O.handleWindowResize&&window.removeEventListener(`resize`,O.handleWindowResize),U()}),ve(),j(()=>o(g(e=>{let r=te().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],o=r;n(i,()=>E.get(),[`ref`,`className`,`style`,`data-rue-splitter-root`,`data-rue-splitter-orientation`,`data-rue-splitter-lazy`,`__rue_static_template_id__`]);let c=Ce;typeof c==`function`?c(i):c&&typeof c==`object`&&`current`in c&&(c.current=i),F(()=>{typeof c==`function`?c(null):c&&typeof c==`object`&&`current`in c&&(c.current=null)});let u;D(()=>{let e=q(q(q(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,k.get()===`vertical`?`flex-col`:void 0),`items-stretch`),l.get()),t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,i.setAttribute(`class`,t))});let p;D(()=>{let e={...P.get(),...M.get(),flexDirection:k.get()===`vertical`?`column`:`row`},t=f(e);Object.is(p,t)||(p=t,i.style.cssText=t)}),i.setAttribute(`data-rue-splitter-root`,`true`);let m;D(()=>{let e=k.get();Object.is(m,e)||(m=e,e==null?i.removeAttribute(`data-rue-splitter-orientation`):i.setAttribute(`data-rue-splitter-orientation`,String(e)))});let h;D(()=>{let e=d.get()!==void 0&&d.get()?`true`:`false`;Object.is(h,e)||(h=e,e==null?i.removeAttribute(`data-rue-splitter-lazy`):i.setAttribute(`data-rue-splitter-lazy`,String(e)))});let g=we;return typeof g==`function`?g(a):g&&typeof g==`object`&&`current`in g&&(g.current=a),F(()=>{typeof g==`function`?g(null):g&&typeof g==`object`&&`current`in g&&(g.current=null)}),a.setAttribute(`class`,`pointer-events-none absolute inset-0`),a.setAttribute(`aria-hidden`,`true`),t({parent:o,before:r.childNodes[0]},()=>s.get(),()=>({})),[r,r]}),e=>b(()=>{s.set(e.children),l.set(e.className),u.set(e.layout),d.set(e.lazy),p.set(e.onDraggerDoubleClick),m.set(e.onResize),_.set(e.onResizeEnd),x.set(e.onResizeStart),S.set(e.orientation),w.set(e.style),T.set(e.vertical),E.set(c(e,[`children`,`className`,`layout`,`lazy`,`onDraggerDoubleClick`,`onResize`,`onResizeEnd`,`onResizeStart`,`orientation`,`style`,`vertical`]))}),()=>e(r)))},{Panel:(r,i,a)=>{let s=h(z(r,`children`)),l=h(z(r,`className`)),u=h(z(r,`defaultSize`)),d=h(z(r,`max`)),p=h(z(r,`min`)),m=h(z(r,`resizable`)),_=h(z(r,`size`)),v=h(z(r,`style`)),x=h(c(e(r),[`children`,`className`,`defaultSize`,`max`,`min`,`resizable`,`size`,`style`])),S=ee(`SplitterPanelRoot:hook:0`,()=>({element:null})),C=()=>{let e=S.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)},w=e=>{S.element=e,e&&C()};return y(C),N(C),j(()=>o(g(e=>{let r=U().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0].childNodes[0],o=a.parentNode;n(i,()=>x.get(),[`ref`,`className`,`style`,`data-rue-splitter-panel`,`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`,`__rue_static_template_id__`]);let c=w;typeof c==`function`?c(i):c&&typeof c==`object`&&`current`in c&&(c.current=i),F(()=>{typeof c==`function`?c(null):c&&typeof c==`object`&&`current`in c&&(c.current=null)});let h;D(()=>{let e=q(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,l.get()),t=e===!1||e==null?``:String(e);Object.is(h,t)||(h=t,i.setAttribute(`class`,t))});let g;D(()=>{let e=v.get(),t=f(e);Object.is(g,t)||(g=t,i.style.cssText=t)}),i.setAttribute(`data-rue-splitter-panel`,`true`);let y;D(()=>{let e=p.get()==null?void 0:String(p.get());Object.is(y,e)||(y=e,e==null?i.removeAttribute(`data-rue-splitter-min`):i.setAttribute(`data-rue-splitter-min`,String(e)))});let b;D(()=>{let e=d.get()==null?void 0:String(d.get());Object.is(b,e)||(b=e,e==null?i.removeAttribute(`data-rue-splitter-max`):i.setAttribute(`data-rue-splitter-max`,String(e)))});let S;D(()=>{let e=_.get()==null?void 0:String(_.get());Object.is(S,e)||(S=e,e==null?i.removeAttribute(`data-rue-splitter-size`):i.setAttribute(`data-rue-splitter-size`,String(e)))});let C;D(()=>{let e=u.get()==null?void 0:String(u.get());Object.is(C,e)||(C=e,e==null?i.removeAttribute(`data-rue-splitter-default-size`):i.setAttribute(`data-rue-splitter-default-size`,String(e)))});let T;return D(()=>{let e=m.get()===void 0||m.get()?`true`:`false`;Object.is(T,e)||(T=e,e==null?i.removeAttribute(`data-rue-splitter-resizable`):i.setAttribute(`data-rue-splitter-resizable`,String(e)))}),t({parent:o,before:a},()=>s.get(),()=>({})),[r,r]}),e=>b(()=>{s.set(e.children),l.set(e.className),u.set(e.defaultSize),d.set(e.max),p.set(e.min),m.set(e.resizable),_.set(e.size),v.set(e.style),x.set(c(e,[`children`,`className`,`defaultSize`,`max`,`min`,`resizable`,`size`,`style`]))}),()=>e(r)))}}),ge=R(`<div class="space-y-2 text-sm text-base-content/70"><div class="rounded-box bg-base-200/70 px-3 py-2">Overview</div><div class="rounded-box bg-base-200/70 px-3 py-2">Metrics</div><div class="rounded-box bg-base-200/70 px-3 py-2">Deployments</div></div>`),_e=R(`<div class="rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70">这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。</div>`),ve=R(`<div class="grid gap-3 sm:grid-cols-3"><div class="rounded-box bg-success/12 p-3 text-sm">Success 18</div><div class="rounded-box bg-warning/12 p-3 text-sm">Queued 4</div><div class="rounded-box bg-info/12 p-3 text-sm">Running 2</div></div>`),ye=R(`<div class="rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70">这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。</div>`),be=R(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),xe=R(`<div class="space-y-4"><div class="flex flex-wrap gap-2"><button type="button" class="btn btn-sm">30 / 70</button><button type="button" class="btn btn-sm btn-outline">平分</button><button type="button"><!--rue:text-hole:0--></button></div><!--rue:opaque-hole:1--></div>`),Se=R(`<div class="space-y-4"><div class="text-sm text-base-content/65">rue:direct-text</div><!--rue:opaque-hole:1--></div>`),Ce=R(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Splitter 分割面板</h1><p class="text-sm mt-3 mb-3">Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它使用 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。</p><h2>何时使用</h2><ul><li>需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。</li><li>需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。</li><li>需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。</li></ul><h2>推荐用法</h2><p class="text-sm mt-3 mb-4">下面每个 JSX 示例都保持了完整结构，方便直接复制到页面组件里使用。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2 id="splitter-api">API</h2><p class="text-sm mt-3 mb-4">Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是 <code>Splitter.Panel</code>。 如果你在业务里需要把布局状态持久化，优先使用 <code>size</code> + <code>onResize</code> 的受控写法；如果只需要默认占比，用 <code>defaultSize</code> 即可。</p><!--rue:opaque-hole:5--></div>`),we=[180,260,160],Te=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为别名保持。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保持布局结构。`,type:`boolean`,defaultValue:`true`}],Ee=`import type { FC } from '@rue-js/rue'
import { Splitter } from '@rue-js/design'
const BasicSplitterDemo: FC = () => {
  return (
    <Splitter style={{ height: 280 }}>
      <Splitter.Panel defaultSize="40%" min="24%" max="70%">
        <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
            Navigation
          </div>
          <div className="space-y-2 text-sm text-base-content/70">
            <div className="rounded-box bg-base-200/70 px-3 py-2">Overview</div>
            <div className="rounded-box bg-base-200/70 px-3 py-2">Metrics</div>
            <div className="rounded-box bg-base-200/70 px-3 py-2">Deployments</div>
          </div>
        </div>
      </Splitter.Panel>

      <Splitter.Panel>
        <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
            Editor
          </div>
          <div className="rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70">
            这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。
          </div>
        </div>
      </Splitter.Panel>
    </Splitter>
  )
}

export default BasicSplitterDemo`,De=`import type { FC } from '@rue-js/rue'
import { ref } from '@rue-js/rue'
import { Splitter } from '@rue-js/design'
const ControlledSplitterDemo: FC = () => {
  const sizes = ref<Array<number | string>>(['38%', '62%'])
  const enabled = ref(true)
  const status = ref('等待拖拽')

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="btn btn-sm"
          onClick={() => {
            sizes.value = ['30%', '70%']
          }}
        >
          30 / 70
        </button>

        <button
          type="button"
          className="btn btn-sm btn-outline"
          onClick={() => {
            sizes.value = ['50%', '50%']
            status.value = '已重置为 50 / 50'
          }}
        >
          平分
        </button>

        <button
          type="button"
          className={('btn btn-sm btn-ghost ' + (enabled.value ? '' : 'btn-active')).trim()}
          onClick={() => {
            enabled.value = !enabled.value
            status.value = enabled.value ? '已恢复左栏拖拽' : '已锁定左栏拖拽'
          }}
        >
          {enabled.value ? '锁定左栏' : '恢复拖拽'}
        </button>
      </div>

      <Splitter
        style={{ height: 300 }}
        onResize={next => {
          sizes.value = next
          status.value = '当前尺寸：' + next.join(' / ')
        }}
      >
        <Splitter.Panel size={sizes.value[0]} resizable={enabled.value}>
          <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
              Filters
            </div>
            <div className="text-sm text-base-content/70">{status.value}</div>
          </div>
        </Splitter.Panel>

        <Splitter.Panel size={sizes.value[1]}>
          <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
              Results
            </div>
            <div className="text-sm text-base-content/70">右栏会跟随受控尺寸同步更新。</div>
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  )
}

export default ControlledSplitterDemo`,Oe=`import type { FC } from '@rue-js/rue'
import { Splitter } from '@rue-js/design'
const VerticalSplitterDemo: FC = () => {
  return (
    <Splitter orientation="vertical" style={{ height: 320 }}>
      <Splitter.Panel defaultSize="32%" min="20%">
        <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
            Summary
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-box bg-success/12 p-3 text-sm">Success 18</div>
            <div className="rounded-box bg-warning/12 p-3 text-sm">Queued 4</div>
            <div className="rounded-box bg-info/12 p-3 text-sm">Running 2</div>
          </div>
        </div>
      </Splitter.Panel>

      <Splitter.Panel>
        <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
            Details
          </div>
          <div className="rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70">
            这里可以放明细列表、数据表格、执行日志，或者任何比顶部更长的内容。
          </div>
        </div>
      </Splitter.Panel>
    </Splitter>
  )
}

export default VerticalSplitterDemo`,ke=`import type { FC } from '@rue-js/rue'
import { ref } from '@rue-js/rue'
import { Splitter } from '@rue-js/design'
const defaultSizes: Array<number | string> = [180, 260, 160]

const ResettableSplitterDemo: FC = () => {
  const sizes = ref<Array<number | string>>(defaultSizes.slice())

  return (
    <div className="space-y-4">
      <div className="text-sm text-base-content/65">双击任意分隔柄可恢复默认布局</div>

      <Splitter
        style={{ height: 260 }}
        onResize={next => {
          sizes.value = next
        }}
        onDraggerDoubleClick={() => {
          sizes.value = defaultSizes.slice()
        }}
      >
        <Splitter.Panel size={sizes.value[0]} min={120}>
          <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
              Sources
            </div>
            <div className="text-sm text-base-content/70">左侧资源树或文档大纲。</div>
          </div>
        </Splitter.Panel>

        <Splitter.Panel size={sizes.value[1]} min={180}>
          <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
              Editor
            </div>
            <div className="text-sm text-base-content/70">中间主编辑区通常需要最大的宽度。</div>
          </div>
        </Splitter.Panel>

        <Splitter.Panel size={sizes.value[2]} min={120}>
          <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
              Preview
            </div>
            <div className="text-sm text-base-content/70">右侧实时预览或审阅信息。</div>
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  )
}

export default ResettableSplitterDemo`,Ae=`import type { FC } from '@rue-js/rue'
import { ref } from '@rue-js/rue'
import { Splitter } from '@rue-js/design'
const LazySplitterDemo: FC = () => {
  const status = ref('拖拽时只移动 handle，释放后才提交尺寸')

  return (
    <div className="space-y-4">
      <div className="text-sm text-base-content/65">{status.value}</div>

      <Splitter
        lazy
        style={{ height: 280 }}
        onResizeStart={() => {
          status.value = '开始拖拽，当前只移动 handle 预览位移'
        }}
        onResize={sizes => {
          status.value = '释放后已提交尺寸：' + sizes.join(' / ')
        }}
      >
        <Splitter.Panel defaultSize="44%" min="30%">
          <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
              Analysis
            </div>
            <div className="rounded-box bg-primary/10 p-4 text-sm text-base-content/70">
              Strategy setup
            </div>
          </div>
        </Splitter.Panel>

        <Splitter.Panel>
          <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
            <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
              Output
            </div>
            <div className="space-y-2 text-sm text-base-content/70">
              <div className="rounded-box bg-base-200/70 px-3 py-2">Insight A</div>
              <div className="rounded-box bg-base-200/70 px-3 py-2">Insight B</div>
              <div className="rounded-box bg-base-200/70 px-3 py-2">Insight C</div>
            </div>
          </div>
        </Splitter.Panel>
      </Splitter>
    </div>
  )
}

export default LazySplitterDemo`,je=(t,n,r)=>{let i=h(z(t,`rows`));return o(a(e=>{let t=be().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,a=R(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return s(()=>{let e=i.get()||[];o=w(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return O(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=T(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=T(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=T(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),P(()=>x(o)),[t,t]}),e=>b(()=>{i.set(e.rows)}),()=>e(t))},$=(n,r,i)=>{let s=h(z(n,`children`)),c=h(z(n,`className`)),l=h(z(n,`subtitle`)),u=h(z(n,`title`));return o(a(e=>{let n=E(`div`,e),r;D(()=>{let e=`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${c.get()??``}`.trim(),t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let i=E(`div`,n);S(n,i),i.setAttribute(`class`,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`);let a=M(`rue:compiled-slot`);S(i,a),t({parent:i,before:a},()=>B(u.get()),()=>({}));let o=E(`div`,n);S(n,o),o.setAttribute(`class`,`mb-4 text-sm leading-6 text-base-content/70`);let d=M(`rue:compiled-slot`);S(o,d),t({parent:o,before:d},()=>B(l.get()),()=>({}));let f=E(`div`,n);S(n,f),f.setAttribute(`class`,`min-h-0`);let p=M(`rue:compiled-slot`);return S(f,p),t({parent:f,before:p},()=>s.get(),()=>({})),[n,n]}),e=>b(()=>{s.set(e.children),c.set(e.className),l.set(e.subtitle),u.set(e.title)}),()=>e(n))},Me=(e,n,i)=>{let o=A([`38%`,`62%`]),s=A(!0),c=A(`等待拖拽`);return j(()=>a(e=>{let n=xe().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0],a=n.childNodes[0].childNodes[1],u=n.childNodes[0].childNodes[2],d=n.childNodes[0].childNodes[2].childNodes[0],f=d.parentNode,h=n.childNodes[1],v=h.parentNode;i.setAttribute(`type`,`button`),i.setAttribute(`class`,`btn btn-sm`),P(I(e,i,`click`,()=>()=>{o.value=[`30%`,`70%`],c.value=`已切到 30 / 70 预设`})),a.setAttribute(`type`,`button`),a.setAttribute(`class`,`btn btn-sm btn-outline`),P(I(e,a,`click`,()=>()=>{o.value=[`50%`,`50%`],c.value=`已重置为 50 / 50`})),u.setAttribute(`type`,`button`);let y;D(()=>{let e=`btn btn-sm btn-ghost ${s.value?``:`btn-active`}`.trim(),t=e===!1||e==null?``:String(e);Object.is(y,t)||(y=t,u.setAttribute(`class`,t))}),P(I(e,u,`click`,()=>()=>{s.value=!s.value,c.value=s.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`})),t({parent:f,before:d},()=>s.value?(e,t,n)=>{let r=()=>p(e=>{let t=T(`锁定左栏`);return[t,t]});return e==null?r():m(e,n,r)}:(e,t,n)=>{let r=()=>p(e=>{let t=T(`恢复拖拽`);return[t,t]});return e==null?r():m(e,n,r)},()=>({}));let b=g(()=>{let e=k(),t=E(`div`,e);S(e,t),r(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let n=E(`div`,t);S(t,n),r(n,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),S(n,T(`Filters`));let i=E(`div`,t);S(t,i),r(i,`mb-4 text-sm leading-6 text-base-content/70`),S(i,T(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let a=E(`div`,t);S(t,a),r(a,`text-xs text-base-content/60`);let o=_(a);S(a,o),D(()=>{L(o,c.value)});let s=T(``),l=T(``);return e.insertBefore(s,e.firstChild),e.appendChild(l),[e.firstChild,e.lastChild]}),x=l(Q.Panel,()=>({size:o.value[0],resizable:s.value,children:b})),C=g(()=>{let e=k(),t=E(`div`,e);S(e,t),r(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let n=E(`div`,t);S(t,n),r(n,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),S(n,T(`Results`));let i=E(`div`,t);S(t,i),r(i,`mb-4 text-sm leading-6 text-base-content/70`),S(i,T(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let a=E(`div`,t);S(t,a),r(a,`text-sm text-base-content/70`),S(a,T(`受控尺寸：`));let s=_(a);S(a,s),D(()=>{L(s,o.value.join(` / `))});let c=T(``),l=T(``);return e.insertBefore(c,e.firstChild),e.appendChild(l),[e.firstChild,e.lastChild]}),w=l(Q.Panel,()=>({size:o.value[1],children:C}));return t({parent:v,before:h},()=>(e,t,n)=>m(e,n,()=>l(Q,()=>({style:{height:300},onResize:e=>{queueMicrotask(()=>{o.value=e}),c.value=`当前尺寸：${e.join(` / `)}`},children:[x,w]}))),()=>({})),[n,n]}))},Ne=(e,n,r)=>{let o=A(we.slice()),s=A(`双击任意分隔柄可重置`);return j(()=>a(e=>{let n=Se().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,c=M(`rue:text-hole:0`);a.replaceChild(c,r);let l=n.childNodes[1],f=l.parentNode,p=T(``);a.insertBefore(p,c),a.removeChild(c),d(p,()=>s.value);let h=(e,t,n)=>{let r=()=>u(Q,()=>({style:{height:260},onResize:e=>{o.value=e,s.value=`当前布局：${e.join(` / `)}`},onDraggerDoubleClick:()=>{o.value=we.slice(),s.value=`已恢复 Sources / Editor / Preview 默认布局`},children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,Q.Panel,()=>({size:o.value[0],min:120,children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Sources`,subtitle:`左侧资源树或文档大纲。`}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),i(t,Q.Panel,()=>({size:o.value[1],min:180,children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),i(t,Q.Panel,()=>({size:o.value[2],min:120,children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Preview`,subtitle:`右侧实时预览或审阅信息。`}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));return e==null?r():m(e,n,r)},_=l.nextSibling;return f.removeChild(l),t({parent:f,before:_},()=>h,()=>({})),[n,n]}))},Pe=(e,n,r)=>{let o=A(`拖拽时只移动 handle，释放后才提交尺寸`);return j(()=>a(e=>{let n=Se().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],a=r.parentNode,s=M(`rue:text-hole:0`);a.replaceChild(s,r);let c=n.childNodes[1],l=c.parentNode,f=T(``);a.insertBefore(f,s),a.removeChild(s),d(f,()=>o.value);let h=(e,t,n)=>{let r=()=>u(Q,()=>({lazy:!0,style:{height:280},onResizeStart:()=>{o.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{o.value=`释放后已提交尺寸：${e.join(` / `)}`},children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,Q.Panel,()=>({defaultSize:`44%`,min:`30%`,children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:(e,t,n)=>{let r=()=>p(e=>{let t=k(),n=E(`div`,t);S(t,n),n.setAttribute(`class`,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),S(n,T(`Strategy setup`));let r=T(``),i=T(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),i(t,Q.Panel,()=>({children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:(e,t,n)=>{let r=()=>p(e=>{let t=k(),n=E(`div`,t);S(t,n),n.setAttribute(`class`,`space-y-2 text-sm text-base-content/70`);let r=E(`div`,n);S(n,r),r.setAttribute(`class`,`rounded-box bg-base-200/70 px-3 py-2`),S(r,T(`Insight A`));let i=E(`div`,n);S(n,i),i.setAttribute(`class`,`rounded-box bg-base-200/70 px-3 py-2`),S(i,T(`Insight B`));let a=E(`div`,n);S(n,a),a.setAttribute(`class`,`rounded-box bg-base-200/70 px-3 py-2`),S(a,T(`Insight C`));let o=T(``),s=T(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));return e==null?r():m(e,n,r)},_=c.nextSibling;return l.removeChild(c),t({parent:l,before:_},()=>h,()=>({})),[n,n]}))},Fe=(e,n,r)=>{let a={basic:A(`preview`),controlled:A(`preview`),vertical:A(`preview`),reset:A(`preview`),lazy:A(`preview`)};return j(()=>u(V,()=>({children:(e,n,r)=>{let o=()=>g(e=>{let n=k(),r=Ce().content.cloneNode(!0),o=r.firstChild,s=o.childNodes[6],c=s.parentNode,l=o.childNodes[7],d=l.parentNode,f=o.childNodes[8],h=f.parentNode,_=o.childNodes[9],v=_.parentNode,y=o.childNodes[10],b=y.parentNode,x=o.childNodes[13],S=x.parentNode;n.appendChild(r);let C=(e,t,n)=>{let r=()=>u(H,()=>({title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:a.basic,preview:()=>u(Q,()=>({style:{height:280},children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,Q.Panel,()=>({defaultSize:`40%`,min:`24%`,max:`70%`,children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:(e,t,n)=>{let r=()=>p(e=>{let t=k();t.appendChild(ge().content.cloneNode(!0));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),i(t,Q.Panel,()=>({children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Editor`,subtitle:`右侧保持完整内容区，适合表单、文档或分析结果。`,children:(e,t,n)=>{let r=()=>p(e=>{let t=k();t.appendChild(_e().content.cloneNode(!0));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),code:Ee}));return e==null?r():m(e,n,r)},w=s.nextSibling;c.removeChild(s),t({parent:c,before:w},()=>C,()=>({}));let E=(e,t,n)=>{let r=()=>u(H,()=>({title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:a.controlled,preview:Me,code:De}));return e==null?r():m(e,n,r)},D=l.nextSibling;d.removeChild(l),t({parent:d,before:D},()=>E,()=>({}));let O=(e,t,n)=>{let r=()=>u(H,()=>({title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:a.vertical,preview:()=>u(Q,()=>({orientation:`vertical`,style:{height:520},children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,Q.Panel,()=>({defaultSize:`32%`,min:`10%`,children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Summary`,subtitle:`顶部保持关键指标和状态总览。`,children:(e,t,n)=>{let r=()=>p(e=>{let t=k();t.appendChild(ve().content.cloneNode(!0));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),i(t,Q.Panel,()=>({children:(e,t,n)=>{let r=()=>g(e=>{let t=k();i(t,$,()=>({title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:(e,t,n)=>{let r=()=>p(e=>{let t=k();t.appendChild(ye().content.cloneNode(!0));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}}));let n=T(``),r=T(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():m(e,n,r)}})),code:Oe}));return e==null?r():m(e,n,r)},A=f.nextSibling;h.removeChild(f),t({parent:h,before:A},()=>O,()=>({}));let j=(e,t,n)=>{let r=()=>u(H,()=>({title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:a.reset,preview:Ne,code:ke}));return e==null?r():m(e,n,r)},M=_.nextSibling;v.removeChild(_),t({parent:v,before:M},()=>j,()=>({}));let N=(e,t,n)=>{let r=()=>u(H,()=>({title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:a.lazy,preview:Pe,code:Ae}));return e==null?r():m(e,n,r)},P=y.nextSibling;b.removeChild(y),t({parent:b,before:P},()=>N,()=>({}));let F=(e,t,n)=>{let r=()=>u(je,()=>({rows:Te}));return e==null?r():m(e,n,r)},ee=x.nextSibling;S.removeChild(x),t({parent:S,before:ee},()=>F,()=>({}));let I=T(``),L=T(``);return n.insertBefore(I,n.firstChild),n.appendChild(L),[n.firstChild,n.lastChild]});return e==null?o():m(e,r,o)}})))};export{Fe as default};
import{Bt as e,Ct as t,Dt as n,H as r,J as i,N as a,P as o,Qt as s,St as c,U as l,V as u,Vt as d,Wt as f,Y as p,_n as m,_t as h,at as g,en as _,f as v,fn as y,g as b,gn as x,gt as S,hn as C,in as w,it as T,j as E,m as D,mn as O,mt as k,ot as A,pn as j,sn as M,st as N,tt as P,u as F,vn as I,vt as L,yn as R,yt as z,z as B,zt as V}from"./rue-runtime-Cv6BZekS.js";import{r as ee}from"./SidebarPlaygroundDesign-CoDFHXQl.js";import{t as H}from"./PreviewBlock-CeK_jzYH.js";var U=R(`<div data-rue-splitter-panel="true"><div class="h-full w-full"><!--rue:text-hole:0--></div></div>`),te=R(`<div data-rue-splitter-root="true"><div class="pointer-events-none absolute inset-0" aria-hidden="true"></div></div>`),W=.5,G=3,ne=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),re=new WeakMap,ie=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},K=(e,t,n)=>Math.min(n,Math.max(t,e)),q=(e,t)=>t?`${e} ${t}`:e,J=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,ae=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:J(e.width),minWidth:J(e.minWidth),maxWidth:J(e.maxWidth),height:J(e.height),minHeight:J(e.minHeight),maxHeight:J(e.maxHeight)}},oe=e=>e.map(e=>Math.max(0,Math.round(e))),Y=e=>e.reduce((e,t)=>e+t,0),X=(e,t)=>{let n=Y(e);if(t<=0||n<=W)return e.slice();let r=t/n;return e.map(e=>e*r)},se=(e,t)=>e.length===t.length&&e.every((e,n)=>Math.abs(e-t[n])<=W),ce=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),Z=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},le=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:K(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=K(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-Y(r);if(Math.abs(e)<=W)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>W?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>W?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=W?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},ue=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},de=(e,t)=>t===`vertical`?e.clientY:e.clientX,fe=(e,t)=>e.map(e=>{let n=Z(e.min,t)??0,r=Z(e.max,t)??t;return{min:K(n,0,t),max:K(Math.max(r,n),n,t)}}),pe=(e,t,n)=>{let r=fe(e,t),i=n&&n.length===e.length&&Y(n)>W?X(n,t):void 0;return le(e.map((e,n)=>{let r=Z(e.size,t);if(typeof r==`number`)return r;let a=Z(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},me=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=K(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},he=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},Q=Object.assign((n,r,a)=>{let o=L(S(n,`children`)),s=L(S(n,`className`)),u=L(S(n,`layout`)),d=L(S(n,`lazy`)),m=L(S(n,`onDraggerDoubleClick`)),v=L(S(n,`onResize`)),y=L(S(n,`onResizeEnd`)),b=L(S(n,`onResizeStart`)),x=L(S(n,`orientation`)),C=L(S(n,`style`)),E=L(S(n,`vertical`)),D=L(k(h(n),[`children`,`className`,`layout`,`lazy`,`onDraggerDoubleClick`,`onResize`,`onResizeEnd`,`onResizeStart`,`orientation`,`style`,`vertical`])),O=i(`SplitterRoot:hook:0`,()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0,lastAvailableSize:0})),A=P(()=>ce(x.get(),u.get(),E.get()));A.get();let j=A,N=P(()=>ae(C.get()));N.get();let F=N,I=P(()=>j.get()===`vertical`&&F.get()?.height==null?{height:F.get()?.minHeight??`320px`}:void 0);I.get();let R=()=>{let e=O.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},z=()=>{let e=O.rootElement,t=ue(e??void 0,j.get()),n=e?.parentElement;return t>0&&(O.lastAvailableSize=t,n&&re.set(n,t)),(t>0?t:0)||O.lastAvailableSize||(n?re.get(n):0)||0},B=e=>{v.get()&&v.get()(oe(e)),Q()},V=e=>{O.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),j.get()===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},ee=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?j.get()===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},H=()=>{let e=O.handleRecords,t=O.panelConfigs,n=O.sizeState,r=z();e.forEach((e,i)=>{let a=t[i],o=t[i+1],s=Y(n.slice(0,i+1)),c=O.activeHandleIndex===i,l=K((d.get()!==void 0&&d.get()&&c?s+O.previewOffset:s)-G/2,0,Math.max(r-G,0));e.root.dataset.rueSplitterHandleActive=c?`true`:`false`,e.root.style.transform=``,j.get()===`vertical`?(e.root.style.top=`${l}px`,e.root.style.left=`0`,e.root.style.height=`${G}px`,e.root.style.width=`100%`):(e.root.style.left=`${l}px`,e.root.style.top=`0`,e.root.style.width=`${G}px`,e.root.style.height=`100%`);let u=!a.resizable||!o?.resizable;e.root.dataset.rueSplitterHandleDisabled=u?`true`:`false`,u&&(e.root.style.cursor=`default`)})},U=()=>{let e=O.overlayElement;e&&(e.innerHTML=``),O.handleRecords=[]},W=(e,t=!1)=>{let n=z(),r=le(e,fe(O.panelConfigs,n),n);O.sizeState=r,V(r),H(),t&&B(r)},J=()=>{U();let e=O.overlayElement,t=O.panelConfigs;if(!e||t.length<=1)return;let n=[];t.slice(0,-1).forEach((r,i)=>{let a=t[i+1],o=document.createElement(`div`);o.setAttribute(`role`,`separator`),o.setAttribute(`aria-orientation`,j.get()),o.setAttribute(`aria-label`,`调整面板 ${i+1} 与 ${i+2}`),o.setAttribute(`data-rue-splitter-handle`,String(i)),o.className=j.get()===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,o.addEventListener(`mousedown`,e=>{Se(e,i)}),o.addEventListener(`dblclick`,()=>{m.get()&&m.get()(i)}),(!r.resizable||!a?.resizable)&&(o.dataset.rueSplitterHandleDisabled=`true`,o.style.cursor=`default`),e.appendChild(o),n.push({root:o})}),O.handleRecords=n,H()},X=(e=!0)=>{O.panelElements=R(),O.panelConfigs=O.panelElements.map(he);let t=O.panelConfigs;if(!t.length){O.sizeState=[],U();return}let n=pe(t,z(),e&&O.sizeState.length===t.length?O.sizeState:void 0);se(O.sizeState,n)||(O.sizeState=n),V(n),J()},Z=()=>{let e=R();!e.length||e.length!==O.sizeState.length||e.every((e,t)=>ee(e,O.sizeState[t]??0))||(O.panelElements=e,V(O.sizeState),H())},Q=()=>{let e=R();e.length===O.sizeState.length&&e.every((e,t)=>ee(e,O.sizeState[t]??0))||O.layoutRestorePending||(O.layoutRestorePending=!0,queueMicrotask(()=>{O.layoutRestorePending=!1,O.rootElement&&Z()}))},ge=e=>{O.mutationSyncPreferCurrent=O.mutationSyncPending?O.mutationSyncPreferCurrent&&e:e,!O.mutationSyncPending&&(O.mutationSyncPending=!0,queueMicrotask(()=>{let e=O.mutationSyncPreferCurrent;if(O.mutationSyncPending=!1,O.mutationSyncPreferCurrent=!0,O.rootElement){if(O.dragState){Q();return}X(e)}}))},_e=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==O.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&ne.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&ge(!n)},ve=()=>{ie()||O.pendingSync||(O.pendingSync=!0,queueMicrotask(()=>{O.pendingSync=!1,!(!O.rootElement||O.dragState)&&X(!1)}))},ye=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,be),window.removeEventListener(`mouseup`,xe))};function be(e){let t=O.dragState;if(!t)return;let n=fe(O.panelConfigs,t.availableSize),r=de(e,j.get())-t.startPoint,i=me(t.startSizes,n,t.index,r),a=i[t.index]-t.startSizes[t.index];if(O.pendingSizes=i,O.previewOffset=d.get()!==void 0&&d.get()?a:0,d.get()!==void 0&&d.get()){H();return}W(i,!0)}function xe(){let e=O.dragState;if(!e)return;let t=O.sizeState,n=O.panelConfigs,r=d.get()!==void 0&&d.get()?O.pendingSizes??e.startSizes:t.length===n.length?t.slice():e.startSizes;d.get()!==void 0&&d.get()&&W(r,!0),O.dragState=null,O.pendingSizes=null,O.activeHandleIndex=null,O.previewOffset=0,H(),ye(),y.get()&&y.get()(oe(r))}let Se=(e,t)=>{if(e.button!==0)return;O.panelElements=R(),O.panelConfigs=O.panelElements.map(he);let n=O.panelConfigs;if(!n[t]||!n[t+1]||!n[t].resizable||!n[t+1].resizable)return;e.preventDefault();let r=z(),i=O.sizeState.length===n.length?O.sizeState.slice():pe(n,r);O.dragState={index:t,startPoint:de(e,j.get()),startSizes:i,availableSize:r},O.pendingSizes=null,O.activeHandleIndex=t,O.previewOffset=0,H(),typeof window<`u`&&(window.addEventListener(`mousemove`,be),window.addEventListener(`mouseup`,xe)),b.get()&&b.get()(oe(i))},Ce=e=>{O.rootElement=e},we=e=>{O.overlayElement=e};return T(()=>{ie()||(O.mountedRootElement=O.rootElement,X(!1),O.handlePanelConfigChange=()=>{O.dragState||X(!0)},O.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,O.handlePanelConfigChange),typeof MutationObserver<`u`&&O.mountedRootElement&&(O.panelMutationObserver=new MutationObserver(_e),O.panelMutationObserver.observe(O.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(ne)})),O.handleWindowResize=()=>{O.dragState||X(!0)},typeof window<`u`&&window.addEventListener(`resize`,O.handleWindowResize))}),g(()=>{ye(),O.panelMutationObserver?.disconnect(),O.panelMutationObserver=null,O.handlePanelConfigChange&&O.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,O.handlePanelConfigChange),typeof window<`u`&&O.handleWindowResize&&window.removeEventListener(`resize`,O.handleWindowResize),U()}),ve(),p(()=>l(f(n=>{let r=te().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0],l=r;t(i,()=>D.get(),[`ref`,`className`,`style`,`data-rue-splitter-root`,`data-rue-splitter-orientation`,`data-rue-splitter-lazy`,`__rue_static_template_id__`]);let u=Ce;typeof u==`function`?u(i):u&&typeof u==`object`&&`current`in u&&(u.current=i),M(()=>{typeof u==`function`?u(null):u&&typeof u==`object`&&`current`in u&&(u.current=null)});let f;w(()=>{let e=q(q(q(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,A.get()===`vertical`?`flex-col`:void 0),`items-stretch`),s.get()),t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,i.setAttribute(`class`,t))});let p;w(()=>{let e={...I.get(),...N.get(),flexDirection:A.get()===`vertical`?`column`:`row`},t=c(e);Object.is(p,t)||(p=t,i.style.cssText=t)}),i.setAttribute(`data-rue-splitter-root`,`true`);let m;w(()=>{let e=A.get();Object.is(m,e)||(m=e,e==null?i.removeAttribute(`data-rue-splitter-orientation`):i.setAttribute(`data-rue-splitter-orientation`,String(e)))});let h;w(()=>{let e=d.get()!==void 0&&d.get()?`true`:`false`;Object.is(h,e)||(h=e,e==null?i.removeAttribute(`data-rue-splitter-lazy`):i.setAttribute(`data-rue-splitter-lazy`,String(e)))});let g=we;return typeof g==`function`?g(a):g&&typeof g==`object`&&`current`in g&&(g.current=a),M(()=>{typeof g==`function`?g(null):g&&typeof g==`object`&&`current`in g&&(g.current=null)}),a.setAttribute(`class`,`pointer-events-none absolute inset-0`),a.setAttribute(`aria-hidden`,`true`),e({parent:l,before:r.childNodes[0]},()=>o.get(),()=>({})),[r,r]}),e=>_(()=>{o.set(e.children),s.set(e.className),u.set(e.layout),d.set(e.lazy),m.set(e.onDraggerDoubleClick),v.set(e.onResize),y.set(e.onResizeEnd),b.set(e.onResizeStart),x.set(e.orientation),C.set(e.style),E.set(e.vertical),D.set(k(e,[`children`,`className`,`layout`,`lazy`,`onDraggerDoubleClick`,`onResize`,`onResizeEnd`,`onResizeStart`,`orientation`,`style`,`vertical`]))}),()=>h(n)))},{Panel:(n,r,a)=>{let o=L(S(n,`children`)),s=L(S(n,`className`)),u=L(S(n,`defaultSize`)),d=L(S(n,`max`)),m=L(S(n,`min`)),g=L(S(n,`resizable`)),v=L(S(n,`size`)),y=L(S(n,`style`)),b=L(k(h(n),[`children`,`className`,`defaultSize`,`max`,`min`,`resizable`,`size`,`style`])),x=i(`SplitterPanelRoot:hook:0`,()=>({element:null})),C=()=>{let e=x.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)},E=e=>{x.element=e,e&&C()};return T(C),A(C),p(()=>l(f(n=>{let r=U().content.cloneNode(!0).firstChild,i=r,a=r.childNodes[0].childNodes[0],l=a.parentNode;t(i,()=>b.get(),[`ref`,`className`,`style`,`data-rue-splitter-panel`,`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`,`__rue_static_template_id__`]);let f=E;typeof f==`function`?f(i):f&&typeof f==`object`&&`current`in f&&(f.current=i),M(()=>{typeof f==`function`?f(null):f&&typeof f==`object`&&`current`in f&&(f.current=null)});let p;w(()=>{let e=q(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,s.get()),t=e===!1||e==null?``:String(e);Object.is(p,t)||(p=t,i.setAttribute(`class`,t))});let h;w(()=>{let e=y.get(),t=c(e);Object.is(h,t)||(h=t,i.style.cssText=t)}),i.setAttribute(`data-rue-splitter-panel`,`true`);let _;w(()=>{let e=m.get()==null?void 0:String(m.get());Object.is(_,e)||(_=e,e==null?i.removeAttribute(`data-rue-splitter-min`):i.setAttribute(`data-rue-splitter-min`,String(e)))});let x;w(()=>{let e=d.get()==null?void 0:String(d.get());Object.is(x,e)||(x=e,e==null?i.removeAttribute(`data-rue-splitter-max`):i.setAttribute(`data-rue-splitter-max`,String(e)))});let S;w(()=>{let e=v.get()==null?void 0:String(v.get());Object.is(S,e)||(S=e,e==null?i.removeAttribute(`data-rue-splitter-size`):i.setAttribute(`data-rue-splitter-size`,String(e)))});let C;w(()=>{let e=u.get()==null?void 0:String(u.get());Object.is(C,e)||(C=e,e==null?i.removeAttribute(`data-rue-splitter-default-size`):i.setAttribute(`data-rue-splitter-default-size`,String(e)))});let T;return w(()=>{let e=g.get()===void 0||g.get()?`true`:`false`;Object.is(T,e)||(T=e,e==null?i.removeAttribute(`data-rue-splitter-resizable`):i.setAttribute(`data-rue-splitter-resizable`,String(e)))}),e({parent:l,before:a},()=>o.get(),()=>({})),[r,r]}),e=>_(()=>{o.set(e.children),s.set(e.className),u.set(e.defaultSize),d.set(e.max),m.set(e.min),g.set(e.resizable),v.set(e.size),y.set(e.style),b.set(k(e,[`children`,`className`,`defaultSize`,`max`,`min`,`resizable`,`size`,`style`]))}),()=>h(n)))}}),ge=R(`<div class="space-y-2 text-sm text-base-content/70"><div class="rounded-box bg-base-200/70 px-3 py-2">Overview</div><div class="rounded-box bg-base-200/70 px-3 py-2">Metrics</div><div class="rounded-box bg-base-200/70 px-3 py-2">Deployments</div></div>`),_e=R(`<div class="rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70">这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。</div>`),ve=R(`<div class="grid gap-3 sm:grid-cols-3"><div class="rounded-box bg-success/12 p-3 text-sm">Success 18</div><div class="rounded-box bg-warning/12 p-3 text-sm">Queued 4</div><div class="rounded-box bg-info/12 p-3 text-sm">Running 2</div></div>`),ye=R(`<div class="rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70">这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。</div>`),be=R(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),xe=R(`<div class="space-y-4"><div class="flex flex-wrap gap-2"><button type="button" class="btn btn-sm">30 / 70</button><button type="button" class="btn btn-sm btn-outline">平分</button><button type="button"><!--rue:text-hole:0--></button></div><!--rue:opaque-hole:1--></div>`),Se=R(`<div class="space-y-4"><div class="text-sm text-base-content/65">rue:direct-text</div><!--rue:opaque-hole:1--></div>`),Ce=R(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Splitter 分割面板</h1><p class="text-sm mt-3 mb-3">Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它使用 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。</p><h2>何时使用</h2><ul><li>需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。</li><li>需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。</li><li>需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。</li></ul><h2>推荐用法</h2><p class="text-sm mt-3 mb-4">下面每个 JSX 示例都保持了完整结构，方便直接复制到页面组件里使用。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2 id="splitter-api">API</h2><p class="text-sm mt-3 mb-4">Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是 <code>Splitter.Panel</code>。 如果你在业务里需要把布局状态持久化，优先使用 <code>size</code> + <code>onResize</code> 的受控写法；如果只需要默认占比，用 <code>defaultSize</code> 即可。</p><!--rue:opaque-hole:5--></div>`),we=[180,260,160],Te=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为别名保持。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保持布局结构。`,type:`boolean`,defaultValue:`true`}],Ee=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,je=(e,t,n)=>{let r=L(S(e,`rows`));return l(E(e=>{let t=be().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],i=n.parentNode,s=R(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),c=[];return o(()=>{let e=r.get()||[];c=b(i,n,c,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return D(e=>{let t=s().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,o=t.childNodes[1].childNodes[0];o.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=x(``);a.insertBefore(f,n),a.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);o.textContent=m;let h=x(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=x(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(o.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),a(()=>v(c)),[t,t]}),e=>_(()=>{r.set(e.rows)}),()=>h(e))},$=(t,n,r)=>{let i=L(S(t,`children`)),a=L(S(t,`className`)),o=L(S(t,`subtitle`)),s=L(S(t,`title`));return l(E(t=>{let n=C(`div`,t),r;w(()=>{let e=`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${a.get()??``}`.trim(),t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))});let c=C(`div`,n);y(n,c),c.setAttribute(`class`,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`);let l=j(`rue:compiled-slot`);y(c,l),e({parent:c,before:l},()=>V(s.get()),()=>({}));let u=C(`div`,n);y(n,u),u.setAttribute(`class`,`mb-4 text-sm leading-6 text-base-content/70`);let d=j(`rue:compiled-slot`);y(u,d),e({parent:u,before:d},()=>V(o.get()),()=>({}));let f=C(`div`,n);y(n,f),f.setAttribute(`class`,`min-h-0`);let p=j(`rue:compiled-slot`);return y(f,p),e({parent:f,before:p},()=>i.get(),()=>({})),[n,n]}),e=>_(()=>{i.set(e.children),a.set(e.className),o.set(e.subtitle),s.set(e.title)}),()=>h(t))},Me=(t,r,i)=>{let o=N([`38%`,`62%`]),s=N(!0),c=N(`等待拖拽`);return p(()=>E(t=>{let r=xe().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],l=r.childNodes[0].childNodes[1],u=r.childNodes[0].childNodes[2],p=r.childNodes[0].childNodes[2].childNodes[0],h=p.parentNode,g=r.childNodes[1],_=g.parentNode;i.setAttribute(`type`,`button`),i.setAttribute(`class`,`btn btn-sm`),a(F(t,i,`click`,()=>()=>{o.value=[`30%`,`70%`],c.value=`已切到 30 / 70 预设`})),l.setAttribute(`type`,`button`),l.setAttribute(`class`,`btn btn-sm btn-outline`),a(F(t,l,`click`,()=>()=>{o.value=[`50%`,`50%`],c.value=`已重置为 50 / 50`})),u.setAttribute(`type`,`button`);let v;w(()=>{let e=`btn btn-sm btn-ghost ${s.value?``:`btn-active`}`.trim(),t=e===!1||e==null?``:String(e);Object.is(v,t)||(v=t,u.setAttribute(`class`,t))}),a(F(t,u,`click`,()=>()=>{s.value=!s.value,c.value=s.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`})),e({parent:h,before:p},()=>s.value?(e,t,n)=>{let r=()=>z(e=>{let t=x(`锁定左栏`);return[t,t]});return e==null?r():d(e,n,r)}:(e,t,n)=>{let r=()=>z(e=>{let t=x(`恢复拖拽`);return[t,t]});return e==null?r():d(e,n,r)},()=>({}));let b=f(()=>{let e=O(),t=C(`div`,e);y(e,t),n(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let r=C(`div`,t);y(t,r),n(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),y(r,x(`Filters`));let i=C(`div`,t);y(t,i),n(i,`mb-4 text-sm leading-6 text-base-content/70`),y(i,x(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let a=C(`div`,t);y(t,a),n(a,`text-xs text-base-content/60`);let o=m(a);y(a,o),w(()=>{I(o,c.value)});let s=x(``),l=x(``);return e.insertBefore(s,e.firstChild),e.appendChild(l),[e.firstChild,e.lastChild]}),S=B(Q.Panel,()=>({size:o.value[0],resizable:s.value,children:b})),T=f(()=>{let e=O(),t=C(`div`,e);y(e,t),n(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let r=C(`div`,t);y(t,r),n(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),y(r,x(`Results`));let i=C(`div`,t);y(t,i),n(i,`mb-4 text-sm leading-6 text-base-content/70`),y(i,x(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let a=C(`div`,t);y(t,a),n(a,`text-sm text-base-content/70`),y(a,x(`受控尺寸：`));let s=m(a);y(a,s),w(()=>{I(s,o.value.join(` / `))});let c=x(``),l=x(``);return e.insertBefore(c,e.firstChild),e.appendChild(l),[e.firstChild,e.lastChild]}),E=B(Q.Panel,()=>({size:o.value[1],children:T}));return e({parent:_,before:g},()=>(e,t,n)=>d(e,n,()=>B(Q,()=>({style:{height:300},onResize:e=>{queueMicrotask(()=>{o.value=e}),c.value=`当前尺寸：${e.join(` / `)}`},children:[S,E]}))),()=>({})),[r,r]}))},Ne=(t,n,i)=>{let a=N(we.slice()),o=N(`双击任意分隔柄可重置`);return p(()=>E(t=>{let n=Se().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0],c=i.parentNode,l=j(`rue:text-hole:0`);c.replaceChild(l,i);let p=n.childNodes[1],m=p.parentNode,h=x(``);c.insertBefore(h,l),c.removeChild(l),s(h,()=>o.value);let g=(e,t,n)=>{let i=()=>u(Q,()=>({style:{height:260},onResize:e=>{a.value=e,o.value=`当前布局：${e.join(` / `)}`},onDraggerDoubleClick:()=>{a.value=we.slice(),o.value=`已恢复 Sources / Editor / Preview 默认布局`},children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,Q.Panel,()=>({size:a.value[0],min:120,children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Sources`,subtitle:`左侧资源树或文档大纲。`}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})),r(t,Q.Panel,()=>({size:a.value[1],min:180,children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})),r(t,Q.Panel,()=>({size:a.value[2],min:120,children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Preview`,subtitle:`右侧实时预览或审阅信息。`}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));return e==null?i():d(e,n,i)},_=p.nextSibling;return m.removeChild(p),e({parent:m,before:_},()=>g,()=>({})),[n,n]}))},Pe=(t,n,i)=>{let a=N(`拖拽时只移动 handle，释放后才提交尺寸`);return p(()=>E(t=>{let n=Se().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0],o=i.parentNode,c=j(`rue:text-hole:0`);o.replaceChild(c,i);let l=n.childNodes[1],p=l.parentNode,m=x(``);o.insertBefore(m,c),o.removeChild(c),s(m,()=>a.value);let h=(e,t,n)=>{let i=()=>u(Q,()=>({lazy:!0,style:{height:280},onResizeStart:()=>{a.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{a.value=`释放后已提交尺寸：${e.join(` / `)}`},children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,Q.Panel,()=>({defaultSize:`44%`,min:`30%`,children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:(e,t,n)=>{let r=()=>z(e=>{let t=O(),n=C(`div`,t);y(t,n),n.setAttribute(`class`,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),y(n,x(`Strategy setup`));let r=x(``),i=x(``);return t.insertBefore(r,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})),r(t,Q.Panel,()=>({children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:(e,t,n)=>{let r=()=>z(e=>{let t=O(),n=C(`div`,t);y(t,n),n.setAttribute(`class`,`space-y-2 text-sm text-base-content/70`);let r=C(`div`,n);y(n,r),r.setAttribute(`class`,`rounded-box bg-base-200/70 px-3 py-2`),y(r,x(`Insight A`));let i=C(`div`,n);y(n,i),i.setAttribute(`class`,`rounded-box bg-base-200/70 px-3 py-2`),y(i,x(`Insight B`));let a=C(`div`,n);y(n,a),a.setAttribute(`class`,`rounded-box bg-base-200/70 px-3 py-2`),y(a,x(`Insight C`));let o=x(``),s=x(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));return e==null?i():d(e,n,i)},g=l.nextSibling;return p.removeChild(l),e({parent:p,before:g},()=>h,()=>({})),[n,n]}))},Fe=(t,n,i)=>{let a={basic:N(`preview`),controlled:N(`preview`),vertical:N(`preview`),reset:N(`preview`),lazy:N(`preview`)};return p(()=>u(ee,()=>({children:(t,n,i)=>{let o=()=>f(t=>{let n=O(),i=Ce().content.cloneNode(!0),o=i.firstChild,s=o.childNodes[6],c=s.parentNode,l=o.childNodes[7],p=l.parentNode,m=o.childNodes[8],h=m.parentNode,g=o.childNodes[9],_=g.parentNode,v=o.childNodes[10],y=v.parentNode,b=o.childNodes[13],S=b.parentNode;n.appendChild(i);let C=(e,t,n)=>{let i=()=>u(H,()=>({title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:a.basic,preview:()=>u(Q,()=>({style:{height:280},children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,Q.Panel,()=>({defaultSize:`40%`,min:`24%`,max:`70%`,children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:(e,t,n)=>{let r=()=>z(e=>{let t=O();t.appendChild(ge().content.cloneNode(!0));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})),r(t,Q.Panel,()=>({children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Editor`,subtitle:`右侧保持完整内容区，适合表单、文档或分析结果。`,children:(e,t,n)=>{let r=()=>z(e=>{let t=O();t.appendChild(_e().content.cloneNode(!0));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})),code:Ee}));return e==null?i():d(e,n,i)},w=s.nextSibling;c.removeChild(s),e({parent:c,before:w},()=>C,()=>({}));let T=(e,t,n)=>{let r=()=>u(H,()=>({title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:a.controlled,preview:Me,code:De}));return e==null?r():d(e,n,r)},E=l.nextSibling;p.removeChild(l),e({parent:p,before:E},()=>T,()=>({}));let D=(e,t,n)=>{let i=()=>u(H,()=>({title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:a.vertical,preview:()=>u(Q,()=>({orientation:`vertical`,style:{height:520},children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,Q.Panel,()=>({defaultSize:`32%`,min:`10%`,children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Summary`,subtitle:`顶部保持关键指标和状态总览。`,children:(e,t,n)=>{let r=()=>z(e=>{let t=O();t.appendChild(ve().content.cloneNode(!0));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})),r(t,Q.Panel,()=>({children:(e,t,n)=>{let i=()=>f(e=>{let t=O();r(t,$,()=>({title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:(e,t,n)=>{let r=()=>z(e=>{let t=O();t.appendChild(ye().content.cloneNode(!0));let n=x(``),r=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(r),[t.firstChild,t.lastChild]});return e==null?r():d(e,n,r)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}}));let n=x(``),i=x(``);return t.insertBefore(n,t.firstChild),t.appendChild(i),[t.firstChild,t.lastChild]});return e==null?i():d(e,n,i)}})),code:Oe}));return e==null?i():d(e,n,i)},k=m.nextSibling;h.removeChild(m),e({parent:h,before:k},()=>D,()=>({}));let A=(e,t,n)=>{let r=()=>u(H,()=>({title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:a.reset,preview:Ne,code:ke}));return e==null?r():d(e,n,r)},j=g.nextSibling;_.removeChild(g),e({parent:_,before:j},()=>A,()=>({}));let M=(e,t,n)=>{let r=()=>u(H,()=>({title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:a.lazy,preview:Pe,code:Ae}));return e==null?r():d(e,n,r)},N=v.nextSibling;y.removeChild(v),e({parent:y,before:N},()=>M,()=>({}));let P=(e,t,n)=>{let r=()=>u(je,()=>({rows:Te}));return e==null?r():d(e,n,r)},F=b.nextSibling;S.removeChild(b),e({parent:S,before:F},()=>P,()=>({}));let I=x(``),L=x(``);return n.insertBefore(I,n.firstChild),n.appendChild(L),[n.firstChild,n.lastChild]});return t==null?o():d(t,i,o)}})))};export{Fe as default};
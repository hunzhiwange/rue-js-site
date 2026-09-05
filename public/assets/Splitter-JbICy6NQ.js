import{At as e,Bt as t,C as n,Dn as r,Et as i,H as a,It as o,K as s,Kt as c,L as l,Lt as u,Mt as d,Rt as f,S as p,W as m,X as h,Y as g,_n as _,_t as v,at as y,b,bn as x,dt as S,fn as C,gn as w,hn as T,ht as E,it as D,kn as O,mn as k,nt as A,ot as j,pt as M,q as N,rt as P,vn as F,wn as I,x as L,yt as ee,z as R,zt as z}from"./rue-runtime-CwEGJ854.js";import{r as te}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as B}from"./PreviewBlock-B_EIWpIk.js";var ne=_(`<div data-rue-splitter-panel="true"><div class="h-full w-full"><!--rue:text-hole:0--></div></div>`),re=_(`<div data-rue-splitter-root="true"><!--rue:text-hole:0--><div class="pointer-events-none absolute inset-0" aria-hidden="true"></div></div>`),V=.5,H=3,ie=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),U=new WeakMap,ae=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},W=(e,t,n)=>Math.min(n,Math.max(t,e)),G=(e,t)=>t?`${e} ${t}`:e,K=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,oe=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:K(e.width),minWidth:K(e.minWidth),maxWidth:K(e.maxWidth),height:K(e.height),minHeight:K(e.minHeight),maxHeight:K(e.maxHeight)}},q=e=>e.map(e=>Math.max(0,Math.round(e))),J=e=>e.reduce((e,t)=>e+t,0),Y=(e,t)=>{let n=J(e);if(t<=0||n<=V)return e.slice();let r=t/n;return e.map(e=>e*r)},se=(e,t)=>e.length===t.length&&e.every((e,n)=>Math.abs(e-t[n])<=V),ce=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),X=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},le=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:W(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=W(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-J(r);if(Math.abs(e)<=V)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>V?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>V?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=V?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},ue=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},de=(e,t)=>t===`vertical`?e.clientY:e.clientX,Z=(e,t)=>e.map(e=>{let n=X(e.min,t)??0,r=X(e.max,t)??t;return{min:W(n,0,t),max:W(Math.max(r,n),n,t)}}),fe=(e,t,n)=>{let r=Z(e,t),i=n&&n.length===e.length&&J(n)>V?Y(n,t):void 0;return le(e.map((e,n)=>{let r=X(e.size,t);if(typeof r==`number`)return r;let a=X(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},pe=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=W(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},me=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},Q=Object.assign(t=>{let n=m(t.children),a=m(t.className),s=m(t.layout),c=m(t.lazy),l=m(t.onDraggerDoubleClick),u=m(t.onResize),p=m(t.onResizeEnd),h=m(t.onResizeStart),g=m(t.orientation),_=m(t.style),v=m(t.vertical),y=m(F(t,[`children`,`className`,`layout`,`lazy`,`onDraggerDoubleClick`,`onResize`,`onResizeEnd`,`onResizeStart`,`orientation`,`style`,`vertical`])),x=e(`SplitterRoot:hook:0`,()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0,lastAvailableSize:0})),C=ce(g.get(),s.get(),v.get()),w=oe(_.get()),T=C===`vertical`&&w?.height==null?{height:w?.minHeight??`320px`}:void 0,E=()=>{let e=x.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},D=()=>{let e=x.rootElement,t=ue(e??void 0,C),n=e?.parentElement;return t>0&&(x.lastAvailableSize=t,n&&U.set(n,t)),(t>0?t:0)||x.lastAvailableSize||(n?U.get(n):0)||0},O=e=>{u.get()&&u.get()(q(e)),B()},k=e=>{x.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),C===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},A=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?C===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},j=()=>{let e=x.handleRecords,t=x.panelConfigs,n=x.sizeState,r=D();e.forEach((e,i)=>{let a=t[i],o=t[i+1],s=J(n.slice(0,i+1)),l=x.activeHandleIndex===i,u=W((c.get()!==void 0&&c.get()&&l?s+x.previewOffset:s)-H/2,0,Math.max(r-H,0));e.root.dataset.rueSplitterHandleActive=l?`true`:`false`,e.root.style.transform=``,C===`vertical`?(e.root.style.top=`${u}px`,e.root.style.left=`0`,e.root.style.height=`${H}px`,e.root.style.width=`100%`):(e.root.style.left=`${u}px`,e.root.style.top=`0`,e.root.style.width=`${H}px`,e.root.style.height=`100%`);let d=!a.resizable||!o?.resizable;e.root.dataset.rueSplitterHandleDisabled=d?`true`:`false`,d&&(e.root.style.cursor=`default`)})},M=()=>{let e=x.overlayElement;e&&(e.innerHTML=``),x.handleRecords=[]},P=(e,t=!1)=>{let n=D(),r=le(e,Z(x.panelConfigs,n),n);x.sizeState=r,k(r),j(),t&&O(r)},L=()=>{M();let e=x.overlayElement,t=x.panelConfigs;if(!e||t.length<=1)return;let n=[];t.slice(0,-1).forEach((r,i)=>{let a=t[i+1],o=document.createElement(`div`);o.setAttribute(`role`,`separator`),o.setAttribute(`aria-orientation`,C),o.setAttribute(`aria-label`,`调整面板 ${i+1} 与 ${i+2}`),o.setAttribute(`data-rue-splitter-handle`,String(i)),o.className=C===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,o.addEventListener(`mousedown`,e=>{he(e,i)}),o.addEventListener(`dblclick`,()=>{l.get()&&l.get()(i)}),(!r.resizable||!a?.resizable)&&(o.dataset.rueSplitterHandleDisabled=`true`,o.style.cursor=`default`),e.appendChild(o),n.push({root:o})}),x.handleRecords=n,j()},z=(e=!0)=>{x.panelElements=E(),x.panelConfigs=x.panelElements.map(me);let t=x.panelConfigs;if(!t.length){x.sizeState=[],M();return}let n=fe(t,D(),e&&x.sizeState.length===t.length?x.sizeState:void 0);se(x.sizeState,n)||(x.sizeState=n),k(n),L()},te=()=>{let e=E();!e.length||e.length!==x.sizeState.length||e.every((e,t)=>A(e,x.sizeState[t]??0))||(x.panelElements=e,k(x.sizeState),j())},B=()=>{let e=E();e.length===x.sizeState.length&&e.every((e,t)=>A(e,x.sizeState[t]??0))||x.layoutRestorePending||(x.layoutRestorePending=!0,queueMicrotask(()=>{x.layoutRestorePending=!1,x.rootElement&&te()}))},ne=e=>{x.mutationSyncPreferCurrent=x.mutationSyncPending?x.mutationSyncPreferCurrent&&e:e,!x.mutationSyncPending&&(x.mutationSyncPending=!0,queueMicrotask(()=>{let e=x.mutationSyncPreferCurrent;if(x.mutationSyncPending=!1,x.mutationSyncPreferCurrent=!0,x.rootElement){if(x.dragState){B();return}z(e)}}))},V=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==x.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&ie.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&ne(!n)},K=()=>{ae()||x.pendingSync||(x.pendingSync=!0,queueMicrotask(()=>{x.pendingSync=!1,!(!x.rootElement||x.dragState)&&z(!1)}))},Y=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,X),window.removeEventListener(`mouseup`,Q))};function X(e){let t=x.dragState;if(!t)return;let n=Z(x.panelConfigs,t.availableSize),r=de(e,C)-t.startPoint,i=pe(t.startSizes,n,t.index,r),a=i[t.index]-t.startSizes[t.index];if(x.pendingSizes=i,x.previewOffset=c.get()!==void 0&&c.get()?a:0,c.get()!==void 0&&c.get()){j();return}P(i,!0)}function Q(){let e=x.dragState;if(!e)return;let t=x.sizeState,n=x.panelConfigs,r=c.get()!==void 0&&c.get()?x.pendingSizes??e.startSizes:t.length===n.length?t.slice():e.startSizes;c.get()!==void 0&&c.get()&&P(r,!0),x.dragState=null,x.pendingSizes=null,x.activeHandleIndex=null,x.previewOffset=0,j(),Y(),p.get()&&p.get()(q(r))}let he=(e,t)=>{if(e.button!==0)return;x.panelElements=E(),x.panelConfigs=x.panelElements.map(me);let n=x.panelConfigs;if(!n[t]||!n[t+1]||!n[t].resizable||!n[t+1].resizable)return;e.preventDefault();let r=D(),i=x.sizeState.length===n.length?x.sizeState.slice():fe(n,r);x.dragState={index:t,startPoint:de(e,C),startSizes:i,availableSize:r},x.pendingSizes=null,x.activeHandleIndex=t,x.previewOffset=0,j(),typeof window<`u`&&(window.addEventListener(`mousemove`,X),window.addEventListener(`mouseup`,Q)),h.get()&&h.get()(q(i))},ge=e=>{x.rootElement=e},_e=e=>{x.overlayElement=e};return o(()=>{ae()||(x.mountedRootElement=x.rootElement,z(!1),x.handlePanelConfigChange=()=>{x.dragState||z(!0)},x.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,x.handlePanelConfigChange),typeof MutationObserver<`u`&&x.mountedRootElement&&(x.panelMutationObserver=new MutationObserver(V),x.panelMutationObserver.observe(x.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(ie)})),x.handleWindowResize=()=>{x.dragState||z(!0)},typeof window<`u`&&window.addEventListener(`resize`,x.handleWindowResize))}),f(()=>{Y(),x.panelMutationObserver?.disconnect(),x.panelMutationObserver=null,x.handlePanelConfigChange&&x.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,x.handlePanelConfigChange),typeof window<`u`&&x.handleWindowResize&&window.removeEventListener(`resize`,x.handleWindowResize),M()}),K(),d(()=>N(i(Object.assign(e=>{let t=re().content.cloneNode(!0).firstChild,i=t,o=t.childNodes[1],s=t.childNodes[0],l=s.parentNode;ee(i,()=>y.get(),[`ref`,`className`,`style`,`data-rue-splitter-root`,`data-rue-splitter-orientation`,`data-rue-splitter-lazy`,`__rue_static_template_id__`]);let u=ge;typeof u==`function`?u(i):u&&typeof u==`object`&&`current`in u&&(u.current=i),r(()=>{typeof u==`function`?u(null):u&&typeof u==`object`&&`current`in u&&(u.current=null)});let d;I(()=>{let e=G(G(G(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,C===`vertical`?`flex-col`:void 0),`items-stretch`),a.get()),t=e==null?``:String(e);Object.is(d,t)||(d=t,i.className=t)});let f;I(()=>{let e={...T,...w,flexDirection:C===`vertical`?`column`:`row`};Object.is(f,e)||(f=e,S(i,e))}),i.setAttribute(`data-rue-splitter-root`,`true`);let p;I(()=>{let e=C;Object.is(p,e)||(p=e,e==null||e===!1?i.removeAttribute(`data-rue-splitter-orientation`):i.setAttribute(`data-rue-splitter-orientation`,String(e)))});let m;I(()=>{let e=c.get()!==void 0&&c.get()?`true`:`false`;Object.is(m,e)||(m=e,e==null||e===!1?i.removeAttribute(`data-rue-splitter-lazy`):i.setAttribute(`data-rue-splitter-lazy`,String(e)))});let h=_e;return typeof h==`function`?h(o):h&&typeof h==`object`&&`current`in h&&(h.current=o),r(()=>{typeof h==`function`?h(null):h&&typeof h==`object`&&`current`in h&&(h.current=null)}),o.className=`pointer-events-none absolute inset-0`,o.setAttribute(`aria-hidden`,`true`),b({parent:l,before:s},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>R(()=>{n.set(e.children),a.set(e.className),s.set(e.layout),c.set(e.lazy),l.set(e.onDraggerDoubleClick),u.set(e.onResize),p.set(e.onResizeEnd),h.set(e.onResizeStart),g.set(e.orientation),_.set(e.style),v.set(e.vertical),y.set(F(e,[`children`,`className`,`layout`,`lazy`,`onDraggerDoubleClick`,`onResize`,`onResizeEnd`,`onResizeStart`,`orientation`,`style`,`vertical`]))}),()=>t))},{Panel:t=>{let n=m(t.children),a=m(t.className),s=m(t.defaultSize),c=m(t.max),l=m(t.min),u=m(t.resizable),f=m(t.size),p=m(t.style),h=m(F(t,[`children`,`className`,`defaultSize`,`max`,`min`,`resizable`,`size`,`style`])),g=e(`SplitterPanelRoot:hook:0`,()=>({element:null})),_=()=>{let e=g.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)},v=e=>{g.element=e,e&&_()};return o(_),z(_),d(()=>N(i(Object.assign(e=>{let t=ne().content.cloneNode(!0).firstChild,i=t,o=t.childNodes[0].childNodes[0],d=o.parentNode;ee(i,()=>h.get(),[`ref`,`className`,`style`,`data-rue-splitter-panel`,`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`,`__rue_static_template_id__`]);let m=v;typeof m==`function`?m(i):m&&typeof m==`object`&&`current`in m&&(m.current=i),r(()=>{typeof m==`function`?m(null):m&&typeof m==`object`&&`current`in m&&(m.current=null)});let g;I(()=>{let e=G(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,a.get()),t=e==null?``:String(e);Object.is(g,t)||(g=t,i.className=t)});let _;I(()=>{let e=p.get();Object.is(_,e)||(_=e,S(i,e))}),i.setAttribute(`data-rue-splitter-panel`,`true`);let y;I(()=>{let e=l.get()==null?void 0:String(l.get());Object.is(y,e)||(y=e,e==null||e===!1?i.removeAttribute(`data-rue-splitter-min`):i.setAttribute(`data-rue-splitter-min`,String(e)))});let x;I(()=>{let e=c.get()==null?void 0:String(c.get());Object.is(x,e)||(x=e,e==null||e===!1?i.removeAttribute(`data-rue-splitter-max`):i.setAttribute(`data-rue-splitter-max`,String(e)))});let C;I(()=>{let e=f.get()==null?void 0:String(f.get());Object.is(C,e)||(C=e,e==null||e===!1?i.removeAttribute(`data-rue-splitter-size`):i.setAttribute(`data-rue-splitter-size`,String(e)))});let w;I(()=>{let e=s.get()==null?void 0:String(s.get());Object.is(w,e)||(w=e,e==null||e===!1?i.removeAttribute(`data-rue-splitter-default-size`):i.setAttribute(`data-rue-splitter-default-size`,String(e)))});let T;return I(()=>{let e=u.get()===void 0||u.get()?`true`:`false`;Object.is(T,e)||(T=e,e==null||e===!1?i.removeAttribute(`data-rue-splitter-resizable`):i.setAttribute(`data-rue-splitter-resizable`,String(e)))}),b({parent:d,before:o},()=>n.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>R(()=>{n.set(e.children),a.set(e.className),s.set(e.defaultSize),c.set(e.max),l.set(e.min),u.set(e.resizable),f.set(e.size),p.set(e.style),h.set(F(e,[`children`,`className`,`defaultSize`,`max`,`min`,`resizable`,`size`,`style`]))}),()=>t))}}),he=_(`<div class="space-y-2 text-sm text-base-content/70"><div class="rounded-box bg-base-200/70 px-3 py-2">Overview</div><div class="rounded-box bg-base-200/70 px-3 py-2">Metrics</div><div class="rounded-box bg-base-200/70 px-3 py-2">Deployments</div></div>`),ge=_(`<div class="rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70">这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。</div>`),_e=_(`<div class="grid gap-3 sm:grid-cols-3"><div class="rounded-box bg-success/12 p-3 text-sm">Success 18</div><div class="rounded-box bg-warning/12 p-3 text-sm">Queued 4</div><div class="rounded-box bg-info/12 p-3 text-sm">Running 2</div></div>`),ve=_(`<div class="rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70">这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。</div>`),ye=_(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),be=_(`<div><div class="mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45"><!--rue:text-hole:0--></div><div class="mb-4 text-sm leading-6 text-base-content/70"><!--rue:text-hole:1--></div><div class="min-h-0"><!--rue:text-hole:2--></div></div>`),xe=_(`<div class="space-y-4"><div class="flex flex-wrap gap-2"><button type="button" class="btn btn-sm">30 / 70</button><button type="button" class="btn btn-sm btn-outline">平分</button><button type="button"><!--rue:text-hole:0--></button></div><!--rue:opaque-hole:1--></div>`),Se=_(`<div class="space-y-4"><div class="text-sm text-base-content/65"><!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div>`),Ce=_(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Splitter 分割面板</h1><p class="text-sm mt-3 mb-3">Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它使用 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。</p><h2>何时使用</h2><ul><li>需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。</li><li>需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。</li><li>需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。</li></ul><h2>推荐用法</h2><p class="text-sm mt-3 mb-4">下面每个 JSX 示例都保持了完整结构，方便直接复制到页面组件里使用。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2 id="splitter-api">API</h2><p class="text-sm mt-3 mb-4">Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是 <code>Splitter.Panel</code>。 如果你在业务里需要把布局状态持久化，优先使用 <code>size</code> + <code>onResize</code> 的受控写法；如果只需要默认占比，用 <code>defaultSize</code> 即可。</p><!--rue:opaque-hole:5--></div>`),we=[180,260,160],Te=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为别名保持。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保持布局结构。`,type:`boolean`,defaultValue:`true`}],Ee=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,je=e=>{let t=m(e.rows);return N(i(Object.assign(e=>{let r=ye().content.cloneNode(!0).firstChild,a=r.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,s=[];return I(()=>{let e=t.get()||[];s=n(o,a,s,e,(e,t)=>e.prop,(e,t)=>{let n=m(e),r=m(t);return p((e,t,r)=>L(e,r,()=>i(Object.assign(e=>{let t=T(`tr`,e),r=T(`td`,t);C(t,r);let i=T(`code`,r);C(r,i);let a=w(``);C(i,a),x(a,()=>n.get().prop);let o=T(`td`,t);C(t,o);let s=w(``);C(o,s),x(s,()=>n.get().description);let c=T(`td`,t);C(t,c);let l=T(`code`,c);C(c,l);let u=w(``);C(l,u),x(u,()=>n.get().type);let d=T(`td`,t);C(t,d);let f=T(`code`,d);C(d,f);let p=w(``);return C(f,p),x(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>R(()=>{t.set(e.rows)}),()=>e)},$=e=>{let t=m(e.children),n=m(e.className),r=m(e.subtitle),a=m(e.title);return N(i(Object.assign(e=>{let i=be().content.cloneNode(!0).firstChild,o=i,s=i.childNodes[0].childNodes[0],c=s.parentNode,l=i.childNodes[1].childNodes[0],u=l.parentNode,d=i.childNodes[2].childNodes[0],f=d.parentNode,p;I(()=>{let e=`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${n.get()??``}`.trim(),t=e==null?``:String(e);Object.is(p,t)||(p=t,o.className=t)});let m=w(``);c.insertBefore(m,s),c.removeChild(s),x(m,()=>a.get());let h=w(``);return u.insertBefore(h,l),u.removeChild(l),x(h,()=>r.get()),b({parent:f,before:d},()=>t.get(),()=>({})),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>R(()=>{t.set(e.children),n.set(e.className),r.set(e.subtitle),a.set(e.title)}),()=>e)},Me=()=>{let e=t([`38%`,`62%`]),n=t(!0),r=t(`等待拖拽`);return d(()=>N(E(()=>{let t=A(),i=xe().content.cloneNode(!0),a=i.firstChild,o=a.childNodes[0].childNodes[0],s=a.childNodes[0].childNodes[1],c=a.childNodes[0].childNodes[2],d=a.childNodes[0].childNodes[2].childNodes[0],f=d.parentNode,p=a.childNodes[1],m=p.parentNode;t.appendChild(i),j(o,`type`,`button`),l(o,`btn btn-sm`);let _=t=>{let n=()=>{e.value=[`30%`,`70%`],r.value=`已切到 30 / 70 预设`};typeof n==`function`&&n(t)};o.addEventListener(`click`,_),u(()=>o.removeEventListener(`click`,_)),j(s,`type`,`button`),l(s,`btn btn-sm btn-outline`);let b=t=>{let n=()=>{e.value=[`50%`,`50%`],r.value=`已重置为 50 / 50`};typeof n==`function`&&n(t)};s.addEventListener(`click`,b),u(()=>s.removeEventListener(`click`,b)),j(c,`type`,`button`),I(()=>{l(c,`btn btn-sm btn-ghost ${n.value?``:`btn-active`}`.trim())});let x=e=>{let t=()=>{n.value=!n.value,r.value=n.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`};typeof t==`function`&&t(e)};return c.addEventListener(`click`,x),u(()=>c.removeEventListener(`click`,x)),I(()=>{let e=n.value?`锁定左栏`:`恢复拖拽`;O(()=>g(e,f,d))}),I(()=>{let t=E(()=>{let e=A(),t=P(`div`,e);h(e,t),l(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let n=P(`div`,t);h(t,n),l(n,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),h(n,D(`Filters`));let i=P(`div`,t);h(t,i),l(i,`mb-4 text-sm leading-6 text-base-content/70`),h(i,D(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let a=P(`div`,t);h(t,a),l(a,`text-xs text-base-content/60`);let o=y(a);return h(a,o),I(()=>{M(o,r.value)}),e}),i=v(Q.Panel,()=>({size:e.value[0],resizable:n.value,children:t})),a=E(()=>{let t=A(),n=P(`div`,t);h(t,n),l(n,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let r=P(`div`,n);h(n,r),l(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),h(r,D(`Results`));let i=P(`div`,n);h(n,i),l(i,`mb-4 text-sm leading-6 text-base-content/70`),h(i,D(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let a=P(`div`,n);h(n,a),l(a,`text-sm text-base-content/70`),h(a,D(`受控尺寸：`));let o=y(a);return h(a,o),I(()=>{M(o,e.value.join(` / `))}),t}),o=v(Q.Panel,()=>({size:e.value[1],children:a})),s=v(Q,()=>({style:{height:300},onResize:t=>{queueMicrotask(()=>{e.value=t}),r.value=`当前尺寸：${t.join(` / `)}`},children:[i,o]}));O(()=>g(s,m,p))}),t},!0),e=>R(()=>{})))},Ne=()=>{let e=t(we.slice()),n=t(`双击任意分隔柄可重置`);return d(()=>N(E(()=>{let t=A(),r=Se().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0].childNodes[0],o=a.parentNode,s=i.childNodes[1],c=s.parentNode;return t.appendChild(r),I(()=>{let e=n.value;O(()=>g(e,o,a))}),I(()=>{let t=v($,()=>({title:`Sources`,subtitle:`左侧资源树或文档大纲。`})),r=v(Q.Panel,()=>({size:e.value[0],min:120,children:t})),i=v($,()=>({title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`})),a=v(Q.Panel,()=>({size:e.value[1],min:180,children:i})),o=v($,()=>({title:`Preview`,subtitle:`右侧实时预览或审阅信息。`})),l=v(Q.Panel,()=>({size:e.value[2],min:120,children:o})),u=v(Q,()=>({style:{height:260},onResize:t=>{e.value=t,n.value=`当前布局：${t.join(` / `)}`},onDraggerDoubleClick:()=>{e.value=we.slice(),n.value=`已恢复 Sources / Editor / Preview 默认布局`},children:[r,a,l]}));O(()=>g(u,c,s))}),t},!0),e=>R(()=>{})))},Pe=()=>{let e=t(`拖拽时只移动 handle，释放后才提交尺寸`);return d(()=>N(E(()=>{let t=A(),n=Se().content.cloneNode(!0),r=n.firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1],s=o.parentNode;return t.appendChild(n),I(()=>{let t=e.value;O(()=>g(t,a,i))}),I(()=>{let t=E(()=>{let e=A(),t=P(`div`,e);return h(e,t),l(t,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),h(t,D(`Strategy setup`)),e}),n=v($,()=>({title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:t})),r=v(Q.Panel,()=>({defaultSize:`44%`,min:`30%`,children:n})),i=E(()=>{let e=A(),t=P(`div`,e);h(e,t),l(t,`space-y-2 text-sm text-base-content/70`);let n=P(`div`,t);h(t,n),l(n,`rounded-box bg-base-200/70 px-3 py-2`),h(n,D(`Insight A`));let r=P(`div`,t);h(t,r),l(r,`rounded-box bg-base-200/70 px-3 py-2`),h(r,D(`Insight B`));let i=P(`div`,t);return h(t,i),l(i,`rounded-box bg-base-200/70 px-3 py-2`),h(i,D(`Insight C`)),e}),a=v($,()=>({title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:i})),c=v(Q.Panel,()=>({children:a})),u=v(Q,()=>({lazy:!0,style:{height:280},onResizeStart:()=>{e.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:t=>{e.value=`释放后已提交尺寸：${t.join(` / `)}`},children:[r,c]}));O(()=>g(u,s,o))}),t},!0),e=>R(()=>{})))},Fe=()=>{let e={basic:t(`preview`),controlled:t(`preview`),vertical:t(`preview`),reset:t(`preview`),lazy:t(`preview`)};return d(()=>N(a(te,()=>({children:(t,n,r)=>L(t,r,()=>i(Object.assign(t=>{let n=A(),r=Ce().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[6],o=a.parentNode,l=i.childNodes[7],u=l.parentNode,d=i.childNodes[8],f=d.parentNode,p=i.childNodes[9],m=p.parentNode,h=i.childNodes[10],g=h.parentNode,_=i.childNodes[13],y=_.parentNode;n.appendChild(r);let b=k(o);s(b,B,()=>({title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:e.basic,preview:c(()=>(()=>{let e=E(()=>{let e=A();return e.appendChild(he().content.cloneNode(!0)),e}),t=v($,()=>({title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:e})),n=v(Q.Panel,()=>({defaultSize:`40%`,min:`24%`,max:`70%`,children:t})),r=E(()=>{let e=A();return e.appendChild(ge().content.cloneNode(!0)),e}),i=v($,()=>({title:`Editor`,subtitle:`右侧保持完整内容区，适合表单、文档或分析结果。`,children:r})),a=v(Q.Panel,()=>({children:i}));return v(Q,()=>({style:{height:280},children:[n,a]}))})()),code:Ee})),o.insertBefore(b,a);let x=k(u);s(x,B,()=>({title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:e.controlled,preview:Me,code:De})),u.insertBefore(x,l);let S=k(f);s(S,B,()=>({title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:e.vertical,preview:c(()=>(()=>{let e=E(()=>{let e=A();return e.appendChild(_e().content.cloneNode(!0)),e}),t=v($,()=>({title:`Summary`,subtitle:`顶部保持关键指标和状态总览。`,children:e})),n=v(Q.Panel,()=>({defaultSize:`32%`,min:`10%`,children:t})),r=E(()=>{let e=A();return e.appendChild(ve().content.cloneNode(!0)),e}),i=v($,()=>({title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:r})),a=v(Q.Panel,()=>({children:i}));return v(Q,()=>({orientation:`vertical`,style:{height:520},children:[n,a]}))})()),code:Oe})),f.insertBefore(S,d);let C=k(m);s(C,B,()=>({title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:e.reset,preview:Ne,code:ke})),m.insertBefore(C,p);let w=k(g);s(w,B,()=>({title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:e.lazy,preview:Pe,code:Ae})),g.insertBefore(w,h);let T=k(y);return s(T,je,()=>({rows:Te})),y.insertBefore(T,_),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})))})),e=>R(()=>{})))};export{Fe as default};
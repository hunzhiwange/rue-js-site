import{$t as e,At as t,Dn as n,E as r,Et as i,Gt as a,Mt as o,Ot as s,Pt as c,Q as l,Qt as u,T as d,Vt as f,Zt as p,_n as m,_t as h,at as g,b as _,bt as v,ct as y,dt as b,en as x,et as S,hn as C,kn as w,on as T,qt as E,rt as D,st as O,tn as k,ut as A,vn as j,vt as M,w as N,wn as P,x as F,xn as I,xt as L,yn as R,yt as z}from"./rue-runtime-HIMg8Lz8.js";import{r as B}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as V}from"./PreviewBlock-Dc0KnPUP.js";var H=j(`<div data-rue-splitter-panel="true"><div class="h-full w-full"><!--rue:text-hole:0--></div></div>`),ee=j(`<div data-rue-splitter-root="true"><!--rue:text-hole:0--><div class="pointer-events-none absolute inset-0" aria-hidden="true"></div></div>`),U=.5,W=3,te=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),ne=new WeakMap,re=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},G=(e,t,n)=>Math.min(n,Math.max(t,e)),K=(e,t)=>t?`${e} ${t}`:e,q=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,ie=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:q(e.width),minWidth:q(e.minWidth),maxWidth:q(e.maxWidth),height:q(e.height),minHeight:q(e.minHeight),maxHeight:q(e.maxHeight)}},J=e=>e.map(e=>Math.max(0,Math.round(e))),Y=e=>e.reduce((e,t)=>e+t,0),ae=(e,t)=>{let n=Y(e);if(t<=0||n<=U)return e.slice();let r=t/n;return e.map(e=>e*r)},oe=(e,t)=>e.length===t.length&&e.every((e,n)=>Math.abs(e-t[n])<=U),se=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),X=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},ce=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:G(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=G(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-Y(r);if(Math.abs(e)<=U)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>U?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>U?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=U?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},le=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},ue=(e,t)=>t===`vertical`?e.clientY:e.clientX,Z=(e,t)=>e.map(e=>{let n=X(e.min,t)??0,r=X(e.max,t)??t;return{min:G(n,0,t),max:G(Math.max(r,n),n,t)}}),de=(e,t,n)=>{let r=Z(e,t),i=n&&n.length===e.length&&Y(n)>U?ae(n,t):void 0;return ce(e.map((e,n)=>{let r=X(e.size,t);if(typeof r==`number`)return r;let a=X(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},fe=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=G(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},pe=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},Q=Object.assign(t=>{let r=g(t.children),o=g(t.className),s=g(t.layout),l=g(t.lazy),u=g(t.onDraggerDoubleClick),m=g(t.onResize),h=g(t.onResizeEnd),_=g(t.onResizeStart),v=g(t.orientation),b=g(t.style),x=g(t.vertical),C=g(R(t,[`children`,`className`,`layout`,`lazy`,`onDraggerDoubleClick`,`onResize`,`onResizeEnd`,`onResizeStart`,`orientation`,`style`,`vertical`])),w=a(`SplitterRoot:hook:0`,()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0,lastAvailableSize:0})),T=se(v.get(),s.get(),x.get()),D=ie(b.get()),O=T===`vertical`&&D?.height==null?{height:D?.minHeight??`320px`}:void 0,k=()=>{let e=w.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},A=()=>{let e=w.rootElement,t=le(e??void 0,T),n=e?.parentElement;return t>0&&(w.lastAvailableSize=t,n&&ne.set(n,t)),(t>0?t:0)||w.lastAvailableSize||(n?ne.get(n):0)||0},j=e=>{m.get()&&m.get()(J(e)),H()},M=e=>{w.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),T===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},N=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?T===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},F=()=>{let e=w.handleRecords,t=w.panelConfigs,n=w.sizeState,r=A();e.forEach((e,i)=>{let a=t[i],o=t[i+1],s=Y(n.slice(0,i+1)),c=w.activeHandleIndex===i,u=G((l.get()!==void 0&&l.get()&&c?s+w.previewOffset:s)-W/2,0,Math.max(r-W,0));e.root.dataset.rueSplitterHandleActive=c?`true`:`false`,e.root.style.transform=``,T===`vertical`?(e.root.style.top=`${u}px`,e.root.style.left=`0`,e.root.style.height=`${W}px`,e.root.style.width=`100%`):(e.root.style.left=`${u}px`,e.root.style.top=`0`,e.root.style.width=`${W}px`,e.root.style.height=`100%`);let d=!a.resizable||!o?.resizable;e.root.dataset.rueSplitterHandleDisabled=d?`true`:`false`,d&&(e.root.style.cursor=`default`)})},I=()=>{let e=w.overlayElement;e&&(e.innerHTML=``),w.handleRecords=[]},L=(e,t=!1)=>{let n=A(),r=ce(e,Z(w.panelConfigs,n),n);w.sizeState=r,M(r),F(),t&&j(r)},z=()=>{I();let e=w.overlayElement,t=w.panelConfigs;if(!e||t.length<=1)return;let n=[];t.slice(0,-1).forEach((r,i)=>{let a=t[i+1],o=document.createElement(`div`);o.setAttribute(`role`,`separator`),o.setAttribute(`aria-orientation`,T),o.setAttribute(`aria-label`,`调整面板 ${i+1} 与 ${i+2}`),o.setAttribute(`data-rue-splitter-handle`,String(i)),o.className=T===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,o.addEventListener(`mousedown`,e=>{he(e,i)}),o.addEventListener(`dblclick`,()=>{u.get()&&u.get()(i)}),(!r.resizable||!a?.resizable)&&(o.dataset.rueSplitterHandleDisabled=`true`,o.style.cursor=`default`),e.appendChild(o),n.push({root:o})}),w.handleRecords=n,F()},B=(e=!0)=>{w.panelElements=k(),w.panelConfigs=w.panelElements.map(pe);let t=w.panelConfigs;if(!t.length){w.sizeState=[],I();return}let n=de(t,A(),e&&w.sizeState.length===t.length?w.sizeState:void 0);oe(w.sizeState,n)||(w.sizeState=n),M(n),z()},V=()=>{let e=k();!e.length||e.length!==w.sizeState.length||e.every((e,t)=>N(e,w.sizeState[t]??0))||(w.panelElements=e,M(w.sizeState),F())},H=()=>{let e=k();e.length===w.sizeState.length&&e.every((e,t)=>N(e,w.sizeState[t]??0))||w.layoutRestorePending||(w.layoutRestorePending=!0,queueMicrotask(()=>{w.layoutRestorePending=!1,w.rootElement&&V()}))},U=e=>{w.mutationSyncPreferCurrent=w.mutationSyncPending?w.mutationSyncPreferCurrent&&e:e,!w.mutationSyncPending&&(w.mutationSyncPending=!0,queueMicrotask(()=>{let e=w.mutationSyncPreferCurrent;if(w.mutationSyncPending=!1,w.mutationSyncPreferCurrent=!0,w.rootElement){if(w.dragState){H();return}B(e)}}))},q=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==w.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&te.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&U(!n)},ae=()=>{re()||w.pendingSync||(w.pendingSync=!0,queueMicrotask(()=>{w.pendingSync=!1,!(!w.rootElement||w.dragState)&&B(!1)}))},X=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,Q),window.removeEventListener(`mouseup`,me))};function Q(e){let t=w.dragState;if(!t)return;let n=Z(w.panelConfigs,t.availableSize),r=ue(e,T)-t.startPoint,i=fe(t.startSizes,n,t.index,r),a=i[t.index]-t.startSizes[t.index];if(w.pendingSizes=i,w.previewOffset=l.get()!==void 0&&l.get()?a:0,l.get()!==void 0&&l.get()){F();return}L(i,!0)}function me(){let e=w.dragState;if(!e)return;let t=w.sizeState,n=w.panelConfigs,r=l.get()!==void 0&&l.get()?w.pendingSizes??e.startSizes:t.length===n.length?t.slice():e.startSizes;l.get()!==void 0&&l.get()&&L(r,!0),w.dragState=null,w.pendingSizes=null,w.activeHandleIndex=null,w.previewOffset=0,F(),X(),h.get()&&h.get()(J(r))}let he=(e,t)=>{if(e.button!==0)return;w.panelElements=k(),w.panelConfigs=w.panelElements.map(pe);let n=w.panelConfigs;if(!n[t]||!n[t+1]||!n[t].resizable||!n[t+1].resizable)return;e.preventDefault();let r=A(),i=w.sizeState.length===n.length?w.sizeState.slice():de(n,r);w.dragState={index:t,startPoint:ue(e,T),startSizes:i,availableSize:r},w.pendingSizes=null,w.activeHandleIndex=t,w.previewOffset=0,F(),typeof window<`u`&&(window.addEventListener(`mousemove`,Q),window.addEventListener(`mouseup`,me)),_.get()&&_.get()(J(i))},ge=e=>{w.rootElement=e},_e=e=>{w.overlayElement=e};return p(()=>{re()||(w.mountedRootElement=w.rootElement,B(!1),w.handlePanelConfigChange=()=>{w.dragState||B(!0)},w.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,w.handlePanelConfigChange),typeof MutationObserver<`u`&&w.mountedRootElement&&(w.panelMutationObserver=new MutationObserver(q),w.panelMutationObserver.observe(w.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(te)})),w.handleWindowResize=()=>{w.dragState||B(!0)},typeof window<`u`&&window.addEventListener(`resize`,w.handleWindowResize))}),e(()=>{X(),w.panelMutationObserver?.disconnect(),w.panelMutationObserver=null,w.handlePanelConfigChange&&w.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,w.handlePanelConfigChange),typeof window<`u`&&w.handleWindowResize&&window.removeEventListener(`resize`,w.handleWindowResize),I()}),ae(),E(()=>y(f(Object.assign(e=>{let t=ee().content.cloneNode(!0).firstChild,a=t,s=t.childNodes[1],u=t.childNodes[0],f=u.parentNode;c(a,()=>C.get(),[`ref`,`className`,`style`,`data-rue-splitter-root`,`data-rue-splitter-orientation`,`data-rue-splitter-lazy`,`__rue_static_template_id__`]);let p=ge;typeof p==`function`?p(a):p&&typeof p==`object`&&`current`in p&&(p.current=a),n(()=>{typeof p==`function`?p(null):p&&typeof p==`object`&&`current`in p&&(p.current=null)});let m;P(()=>{let e=K(K(K(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,T===`vertical`?`flex-col`:void 0),`items-stretch`),o.get()),t=e==null?``:String(e);Object.is(m,t)||(m=t,a.className=t)});let h;P(()=>{let e={...O,...D,flexDirection:T===`vertical`?`column`:`row`};Object.is(h,e)||(h=e,i(a,e))}),a.setAttribute(`data-rue-splitter-root`,`true`);let g;P(()=>{let e=T;Object.is(g,e)||(g=e,e==null||e===!1?a.removeAttribute(`data-rue-splitter-orientation`):a.setAttribute(`data-rue-splitter-orientation`,String(e)))});let _;P(()=>{let e=l.get()!==void 0&&l.get()?`true`:`false`;Object.is(_,e)||(_=e,e==null||e===!1?a.removeAttribute(`data-rue-splitter-lazy`):a.setAttribute(`data-rue-splitter-lazy`,String(e)))});let v=_e;return typeof v==`function`?v(s):v&&typeof v==`object`&&`current`in v&&(v.current=s),n(()=>{typeof v==`function`?v(null):v&&typeof v==`object`&&`current`in v&&(v.current=null)}),s.className=`pointer-events-none absolute inset-0`,s.setAttribute(`aria-hidden`,`true`),d({parent:f,before:u},()=>r.get(),()=>({})),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),e=>S(()=>{r.set(e.children),o.set(e.className),s.set(e.layout),l.set(e.lazy),u.set(e.onDraggerDoubleClick),m.set(e.onResize),h.set(e.onResizeEnd),_.set(e.onResizeStart),v.set(e.orientation),b.set(e.style),x.set(e.vertical),C.set(R(e,[`children`,`className`,`layout`,`lazy`,`onDraggerDoubleClick`,`onResize`,`onResizeEnd`,`onResizeStart`,`orientation`,`style`,`vertical`]))}),()=>t))},{Panel:e=>{let t=g(e.children),r=g(e.className),o=g(e.defaultSize),s=g(e.max),l=g(e.min),u=g(e.resizable),m=g(e.size),h=g(e.style),_=g(R(e,[`children`,`className`,`defaultSize`,`max`,`min`,`resizable`,`size`,`style`])),v=a(`SplitterPanelRoot:hook:0`,()=>({element:null})),b=()=>{let e=v.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)},C=e=>{v.element=e,e&&b()};return p(b),x(b),E(()=>y(f(Object.assign(e=>{let a=H().content.cloneNode(!0).firstChild,f=a,p=a.childNodes[0].childNodes[0],g=p.parentNode;c(f,()=>_.get(),[`ref`,`className`,`style`,`data-rue-splitter-panel`,`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`,`__rue_static_template_id__`]);let v=C;typeof v==`function`?v(f):v&&typeof v==`object`&&`current`in v&&(v.current=f),n(()=>{typeof v==`function`?v(null):v&&typeof v==`object`&&`current`in v&&(v.current=null)});let y;P(()=>{let e=K(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,r.get()),t=e==null?``:String(e);Object.is(y,t)||(y=t,f.className=t)});let b;P(()=>{let e=h.get();Object.is(b,e)||(b=e,i(f,e))}),f.setAttribute(`data-rue-splitter-panel`,`true`);let x;P(()=>{let e=l.get()==null?void 0:String(l.get());Object.is(x,e)||(x=e,e==null||e===!1?f.removeAttribute(`data-rue-splitter-min`):f.setAttribute(`data-rue-splitter-min`,String(e)))});let S;P(()=>{let e=s.get()==null?void 0:String(s.get());Object.is(S,e)||(S=e,e==null||e===!1?f.removeAttribute(`data-rue-splitter-max`):f.setAttribute(`data-rue-splitter-max`,String(e)))});let w;P(()=>{let e=m.get()==null?void 0:String(m.get());Object.is(w,e)||(w=e,e==null||e===!1?f.removeAttribute(`data-rue-splitter-size`):f.setAttribute(`data-rue-splitter-size`,String(e)))});let T;P(()=>{let e=o.get()==null?void 0:String(o.get());Object.is(T,e)||(T=e,e==null||e===!1?f.removeAttribute(`data-rue-splitter-default-size`):f.setAttribute(`data-rue-splitter-default-size`,String(e)))});let E;return P(()=>{let e=u.get()===void 0||u.get()?`true`:`false`;Object.is(E,e)||(E=e,e==null||e===!1?f.removeAttribute(`data-rue-splitter-resizable`):f.setAttribute(`data-rue-splitter-resizable`,String(e)))}),d({parent:g,before:p},()=>t.get(),()=>({})),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>S(()=>{t.set(e.children),r.set(e.className),o.set(e.defaultSize),s.set(e.max),l.set(e.min),u.set(e.resizable),m.set(e.size),h.set(e.style),_.set(R(e,[`children`,`className`,`defaultSize`,`max`,`min`,`resizable`,`size`,`style`]))}),()=>e))}}),me=j(`<div class="space-y-2 text-sm text-base-content/70"><div class="rounded-box bg-base-200/70 px-3 py-2">Overview</div><div class="rounded-box bg-base-200/70 px-3 py-2">Metrics</div><div class="rounded-box bg-base-200/70 px-3 py-2">Deployments</div></div>`),he=j(`<div class="rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70">这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。</div>`),ge=j(`<div class="grid gap-3 sm:grid-cols-3"><div class="rounded-box bg-success/12 p-3 text-sm">Success 18</div><div class="rounded-box bg-warning/12 p-3 text-sm">Queued 4</div><div class="rounded-box bg-info/12 p-3 text-sm">Running 2</div></div>`),_e=j(`<div class="rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70">这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。</div>`),ve=j(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),ye=j(`<div><div class="mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45"><!--rue:text-hole:0--></div><div class="mb-4 text-sm leading-6 text-base-content/70"><!--rue:text-hole:1--></div><div class="min-h-0"><!--rue:text-hole:2--></div></div>`),be=j(`<div class="space-y-4"><div class="flex flex-wrap gap-2"><button type="button" class="btn btn-sm">30 / 70</button><button type="button" class="btn btn-sm btn-outline">平分</button><button type="button"><!--rue:text-hole:0--></button></div><!--rue:opaque-hole:1--></div>`),xe=j(`<div class="space-y-4"><div class="text-sm text-base-content/65"><!--rue:text-hole:0--></div><!--rue:opaque-hole:1--></div>`),Se=j(`<div class="max-w-none prose prose-sm md:prose-base"><h1>Splitter 分割面板</h1><p class="text-sm mt-3 mb-3">Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它使用 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。</p><h2>何时使用</h2><ul><li>需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。</li><li>需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。</li><li>需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。</li></ul><h2>推荐用法</h2><p class="text-sm mt-3 mb-4">下面每个 JSX 示例都保持了完整结构，方便直接复制到页面组件里使用。</p><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><h2 id="splitter-api">API</h2><p class="text-sm mt-3 mb-4">Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是 <code>Splitter.Panel</code>。 如果你在业务里需要把布局状态持久化，优先使用 <code>size</code> + <code>onResize</code> 的受控写法；如果只需要默认占比，用 <code>defaultSize</code> 即可。</p><!--rue:opaque-hole:5--></div>`),Ce=[180,260,160],we=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为别名保持。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保持布局结构。`,type:`boolean`,defaultValue:`true`}],Te=`import type { FC } from '@rue-js/rue'
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

export default BasicSplitterDemo`,Ee=`import type { FC } from '@rue-js/rue'
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

export default ControlledSplitterDemo`,De=`import type { FC } from '@rue-js/rue'
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

export default VerticalSplitterDemo`,Oe=`import type { FC } from '@rue-js/rue'
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

export default ResettableSplitterDemo`,ke=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,Ae=e=>{let t=g(e.rows);return y(f(Object.assign(e=>{let r=ve().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,o=j(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return P(()=>{let e=t.get()||[];s=N(a,i,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return F(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=m(``);a.insertBefore(f,n),a.removeChild(n);let p;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}let h;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}let g=m(``);l.insertBefore(g,c),l.removeChild(c);let _;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}let v=m(``);d.insertBefore(v,u),d.removeChild(u);let y;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(h,e)||(s.textContent=e,h=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(_,e)||(g.textContent=e,_=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(y,e)||(v.textContent=e,y=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),n(()=>_(s)),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>S(()=>{t.set(e.rows)}),()=>e)},$=e=>{let t=g(e.children),n=g(e.className),r=g(e.subtitle),i=g(e.title);return y(f(Object.assign(e=>{let a=ye().content.cloneNode(!0).firstChild,o=a,s=a.childNodes[0].childNodes[0],c=s.parentNode,l=a.childNodes[1].childNodes[0],u=l.parentNode,f=a.childNodes[2].childNodes[0],p=f.parentNode,h;P(()=>{let e=`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${n.get()??``}`.trim(),t=e==null?``:String(e);Object.is(h,t)||(h=t,o.className=t)});let g=m(``);c.insertBefore(g,s),c.removeChild(s),I(g,()=>i.get());let _=m(``);return u.insertBefore(_,l),u.removeChild(l),I(_,()=>r.get()),d({parent:p,before:f},()=>t.get(),()=>({})),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>S(()=>{t.set(e.children),n.set(e.className),r.set(e.subtitle),i.set(e.title)}),()=>e)},je=()=>{let e=k([`38%`,`62%`]),n=k(!0),r=k(`等待拖拽`);return E(()=>y(t(()=>{let i=h(),a=be().content.cloneNode(!0),c=a.firstChild,d=c.childNodes[0].childNodes[0],f=c.childNodes[0].childNodes[1],p=c.childNodes[0].childNodes[2],m=c.childNodes[0].childNodes[2].childNodes[0],g=m.parentNode,_=c.childNodes[1],y=_.parentNode;i.appendChild(a),L(d,`type`,`button`),l(d,`btn btn-sm`);let x=t=>{let n=()=>{e.value=[`30%`,`70%`],r.value=`已切到 30 / 70 预设`};typeof n==`function`&&n(t)};d.addEventListener(`click`,x),u(()=>d.removeEventListener(`click`,x)),L(f,`type`,`button`),l(f,`btn btn-sm btn-outline`);let S=t=>{let n=()=>{e.value=[`50%`,`50%`],r.value=`已重置为 50 / 50`};typeof n==`function`&&n(t)};f.addEventListener(`click`,S),u(()=>f.removeEventListener(`click`,S)),L(p,`type`,`button`),P(()=>{l(p,`btn btn-sm btn-ghost ${n.value?``:`btn-active`}`.trim())});let C=e=>{let t=()=>{n.value=!n.value,r.value=n.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`};typeof t==`function`&&t(e)};return p.addEventListener(`click`,C),u(()=>p.removeEventListener(`click`,C)),P(()=>{let e=n.value?`锁定左栏`:`恢复拖拽`;w(()=>A(e,g,m))}),P(()=>{let i=t(()=>{let e=h(),t=M(`div`,e);b(e,t),l(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let n=M(`div`,t);b(t,n),l(n,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),b(n,z(`Filters`));let i=M(`div`,t);b(t,i),l(i,`mb-4 text-sm leading-6 text-base-content/70`),b(i,z(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let a=M(`div`,t);b(t,a),l(a,`text-xs text-base-content/60`);let o=v(a);return b(a,o),P(()=>{s(o,r.value)}),e}),a=o(Q.Panel,()=>({size:e.value[0],resizable:n.value,children:i})),c=t(()=>{let t=h(),n=M(`div`,t);b(t,n),l(n,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let r=M(`div`,n);b(n,r),l(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),b(r,z(`Results`));let i=M(`div`,n);b(n,i),l(i,`mb-4 text-sm leading-6 text-base-content/70`),b(i,z(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let a=M(`div`,n);b(n,a),l(a,`text-sm text-base-content/70`),b(a,z(`受控尺寸：`));let o=v(a);return b(a,o),P(()=>{s(o,e.value.join(` / `))}),t}),u=o(Q.Panel,()=>({size:e.value[1],children:c})),d=o(Q,()=>({style:{height:300},onResize:t=>{queueMicrotask(()=>{e.value=t}),r.value=`当前尺寸：${t.join(` / `)}`},children:[a,u]}));w(()=>A(d,y,_))}),i},!0),e=>S(()=>{})))},Me=()=>{let e=k(Ce.slice()),n=k(`双击任意分隔柄可重置`);return E(()=>y(t(()=>{let t=h(),r=xe().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0].childNodes[0],s=a.parentNode,c=i.childNodes[1],l=c.parentNode;return t.appendChild(r),P(()=>{let e=n.value;w(()=>A(e,s,a))}),P(()=>{let t=o($,()=>({title:`Sources`,subtitle:`左侧资源树或文档大纲。`})),r=o(Q.Panel,()=>({size:e.value[0],min:120,children:t})),i=o($,()=>({title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`})),a=o(Q.Panel,()=>({size:e.value[1],min:180,children:i})),s=o($,()=>({title:`Preview`,subtitle:`右侧实时预览或审阅信息。`})),u=o(Q.Panel,()=>({size:e.value[2],min:120,children:s})),d=o(Q,()=>({style:{height:260},onResize:t=>{e.value=t,n.value=`当前布局：${t.join(` / `)}`},onDraggerDoubleClick:()=>{e.value=Ce.slice(),n.value=`已恢复 Sources / Editor / Preview 默认布局`},children:[r,a,u]}));w(()=>A(d,l,c))}),t},!0),e=>S(()=>{})))},Ne=()=>{let e=k(`拖拽时只移动 handle，释放后才提交尺寸`);return E(()=>y(t(()=>{let n=h(),r=xe().content.cloneNode(!0),i=r.firstChild,a=i.childNodes[0].childNodes[0],s=a.parentNode,c=i.childNodes[1],u=c.parentNode;return n.appendChild(r),P(()=>{let t=e.value;w(()=>A(t,s,a))}),P(()=>{let n=t(()=>{let e=h(),t=M(`div`,e);return b(e,t),l(t,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),b(t,z(`Strategy setup`)),e}),r=o($,()=>({title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:n})),i=o(Q.Panel,()=>({defaultSize:`44%`,min:`30%`,children:r})),a=t(()=>{let e=h(),t=M(`div`,e);b(e,t),l(t,`space-y-2 text-sm text-base-content/70`);let n=M(`div`,t);b(t,n),l(n,`rounded-box bg-base-200/70 px-3 py-2`),b(n,z(`Insight A`));let r=M(`div`,t);b(t,r),l(r,`rounded-box bg-base-200/70 px-3 py-2`),b(r,z(`Insight B`));let i=M(`div`,t);return b(t,i),l(i,`rounded-box bg-base-200/70 px-3 py-2`),b(i,z(`Insight C`)),e}),s=o($,()=>({title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:a})),d=o(Q.Panel,()=>({children:s})),f=o(Q,()=>({lazy:!0,style:{height:280},onResizeStart:()=>{e.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:t=>{e.value=`释放后已提交尺寸：${t.join(` / `)}`},children:[i,d]}));w(()=>A(f,u,c))}),n},!0),e=>S(()=>{})))},Pe=()=>{let e={basic:k(`preview`),controlled:k(`preview`),vertical:k(`preview`),reset:k(`preview`),lazy:k(`preview`)};return E(()=>y(D(B,()=>({children:(n,i,a)=>r(n,a,()=>f(Object.assign(n=>{let r=h(),i=Se().content.cloneNode(!0),a=i.firstChild,s=a.childNodes[6],c=s.parentNode,l=a.childNodes[7],u=l.parentNode,d=a.childNodes[8],f=d.parentNode,p=a.childNodes[9],m=p.parentNode,g=a.childNodes[10],_=g.parentNode,v=a.childNodes[13],y=v.parentNode;r.appendChild(i);let b=C(c);O(b,V,()=>({title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:e.basic,preview:T(()=>(()=>{let e=t(()=>{let e=h();return e.appendChild(me().content.cloneNode(!0)),e}),n=o($,()=>({title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:e})),r=o(Q.Panel,()=>({defaultSize:`40%`,min:`24%`,max:`70%`,children:n})),i=t(()=>{let e=h();return e.appendChild(he().content.cloneNode(!0)),e}),a=o($,()=>({title:`Editor`,subtitle:`右侧保持完整内容区，适合表单、文档或分析结果。`,children:i})),s=o(Q.Panel,()=>({children:a}));return o(Q,()=>({style:{height:280},children:[r,s]}))})()),code:Te})),c.insertBefore(b,s);let x=C(u);O(x,V,()=>({title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:e.controlled,preview:je,code:Ee})),u.insertBefore(x,l);let S=C(f);O(S,V,()=>({title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:e.vertical,preview:T(()=>(()=>{let e=t(()=>{let e=h();return e.appendChild(ge().content.cloneNode(!0)),e}),n=o($,()=>({title:`Summary`,subtitle:`顶部保持关键指标和状态总览。`,children:e})),r=o(Q.Panel,()=>({defaultSize:`32%`,min:`10%`,children:n})),i=t(()=>{let e=h();return e.appendChild(_e().content.cloneNode(!0)),e}),a=o($,()=>({title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:i})),s=o(Q.Panel,()=>({children:a}));return o(Q,()=>({orientation:`vertical`,style:{height:520},children:[r,s]}))})()),code:De})),f.insertBefore(S,d);let w=C(m);O(w,V,()=>({title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:e.reset,preview:Me,code:Oe})),m.insertBefore(w,p);let E=C(_);O(E,V,()=>({title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:e.lazy,preview:Ne,code:ke})),_.insertBefore(E,g);let D=C(y);return O(D,Ae,()=>({rows:we})),y.insertBefore(D,v),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})))})),e=>S(()=>{})))};export{Pe as default};
import{$t as e,Jt as t,Q as n,St as r,Z as i,a,dt as o,et as s,gt as c,i as l,in as u,it as d,l as f,lt as p,n as m,nt as h,o as g,r as _,rt as v,t as y,tt as b,vt as x,yt as S,zt as C}from"./vapor-runtime-DsQWl-IB.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as D,i as O}from"./persistentSidebarPlayground-6jqnvaEa.js";import{r as k}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as A}from"./PreviewBlock-wHSyDiek.js";var j=.5,M=3,N=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),P=(e,t,n)=>Math.min(n,Math.max(t,e)),F=(e,t)=>t?`${e} ${t}`:e,I=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,L=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:I(e.width),minWidth:I(e.minWidth),maxWidth:I(e.maxWidth),height:I(e.height),minHeight:I(e.minHeight),maxHeight:I(e.maxHeight)}},R=e=>e.map(e=>Math.max(0,Math.round(e))),z=e=>e.reduce((e,t)=>e+t,0),B=(e,t)=>{let n=z(e);if(t<=0||n<=j)return e.slice();let r=t/n;return e.map(e=>e*r)},V=(e,t)=>e.length===t.length?e.every((e,n)=>Math.abs(e-t[n])<=j):!1,ee=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),H=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},U=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:P(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=P(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-z(r);if(Math.abs(e)<=j)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>j?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>j?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=j?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},te=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},W=(e,t)=>t===`vertical`?e.clientY:e.clientX,G=(e,t)=>e.map(e=>{let n=H(e.min,t)??0,r=H(e.max,t)??t;return{min:P(n,0,t),max:P(Math.max(r,n),n,t)}}),ne=(e,t,n)=>{let r=G(e,t),i=n&&n.length===e.length&&z(n)>j?B(n,t):void 0;return U(e.map((e,n)=>{let r=H(e.size,t);if(typeof r==`number`)return r;let a=H(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},re=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=P(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},ie=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},K=Object.assign(t=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:a,__rue_rest_omit_2:d,__rue_rest_omit_3:v,__rue_rest_omit_4:y,__rue_rest_omit_5:b,__rue_rest_omit_6:x,__rue_rest_omit_7:T,__rue_rest_omit_8:D,__rue_rest_omit_9:O,__rue_rest_omit_10:k,rest:A,state:j,resolvedOrientation:I,resolvedStyle:B,verticalDefaultStyle:H,getPanelElements:K,getAvailableSize:q,emitResize:J,applyPanelSizes:Y,panelLayoutMatches:X,updateHandleVisuals:Z,clearHandles:Q,commitSizes:ae,rebuildHandles:oe,syncPanelsFromDom:$,restoreAppliedLayout:se,scheduleLayoutRestore:ce,scheduleMutationSync:le,handlePanelMutations:ue,scheduleSyncFromRender:de,teardownDragListeners:fe,handleWindowMouseMove:pe,handleWindowMouseUp:me,startDrag:he,assignRootElement:ge,assignOverlayElement:_e}=w(`useSetup:0:0:dup1`,()=>u(()=>{let{orientation:e,layout:n,vertical:i,lazy:a,className:o,style:s,onDraggerDoubleClick:c,onResizeStart:d,onResize:f,onResizeEnd:p,children:m,...h}=t,g=w(`useSetup:1:1`,()=>u(()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0}))),v=w(`computed:1:2`,()=>r(()=>ee(t.orientation,t.layout,t.vertical))),y=v,b=w(`computed:1:3`,()=>r(()=>L(t.style))),x=b,S=w(`computed:1:4`,()=>r(()=>y.get()===`vertical`&&x.get()?.height==null?{height:x.get()?.minHeight??`320px`}:void 0)),C=()=>{let e=g.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},T=()=>te(g.rootElement??void 0,y.get()),E=e=>{t.onResize&&t.onResize(R(e)),H()},D=e=>{g.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),y.get()===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},O=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?y.get()===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},k=()=>{let e=g.handleRecords,n=g.panelConfigs,r=g.sizeState,i=T();e.forEach((e,a)=>{let o=n[a],s=n[a+1],c=z(r.slice(0,a+1)),l=g.activeHandleIndex===a,u=P((t.lazy!==void 0&&t.lazy&&l?c+g.previewOffset:c)-M/2,0,Math.max(i-M,0));e.root.dataset.rueSplitterHandleActive=l?`true`:`false`,e.root.style.transform=``,y.get()===`vertical`?(e.root.style.top=`${u}px`,e.root.style.left=`0`,e.root.style.height=`${M}px`,e.root.style.width=`100%`):(e.root.style.left=`${u}px`,e.root.style.top=`0`,e.root.style.width=`${M}px`,e.root.style.height=`100%`);let d=!o.resizable||!s?.resizable;e.root.dataset.rueSplitterHandleDisabled=d?`true`:`false`,d&&(e.root.style.cursor=`default`)})},A=()=>{let e=g.overlayElement;e&&(e.innerHTML=``),g.handleRecords=[]},j=(e,t=!1)=>{let n=T(),r=U(e,G(g.panelConfigs,n),n);g.sizeState=r,D(r),k(),t&&E(r)},F=()=>{A();let e=g.overlayElement,n=g.panelConfigs;if(!e||n.length<=1)return;let r=[];n.slice(0,-1).forEach((i,a)=>{let o=n[a+1],s=document.createElement(`div`);s.setAttribute(`role`,`separator`),s.setAttribute(`aria-orientation`,y.get()),s.setAttribute(`aria-label`,`调整面板 ${a+1} 与 ${a+2}`),s.setAttribute(`data-rue-splitter-handle`,String(a)),s.className=y.get()===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,s.addEventListener(`mousedown`,e=>{Q(e,a)}),s.addEventListener(`dblclick`,()=>{t.onDraggerDoubleClick&&t.onDraggerDoubleClick(a)}),(!i.resizable||!o?.resizable)&&(s.dataset.rueSplitterHandleDisabled=`true`,s.style.cursor=`default`),e.appendChild(s),r.push({root:s})}),g.handleRecords=r,k()},I=(e=!0)=>{g.panelElements=C(),g.panelConfigs=g.panelElements.map(ie);let t=g.panelConfigs;if(!t.length){g.sizeState=[],A();return}let n=ne(t,T(),e&&g.sizeState.length===t.length?g.sizeState:void 0);V(g.sizeState,n)||(g.sizeState=n),D(n),F()},B=()=>{let e=C();!e.length||e.length!==g.sizeState.length||e.every((e,t)=>O(e,g.sizeState[t]??0))||(g.panelElements=e,D(g.sizeState),k())},H=()=>{let e=C();e.length===g.sizeState.length&&e.every((e,t)=>O(e,g.sizeState[t]??0))||g.layoutRestorePending||(g.layoutRestorePending=!0,queueMicrotask(()=>{g.layoutRestorePending=!1,g.rootElement&&B()}))},K=e=>{g.mutationSyncPreferCurrent=g.mutationSyncPending?g.mutationSyncPreferCurrent&&e:e,!g.mutationSyncPending&&(g.mutationSyncPending=!0,queueMicrotask(()=>{let e=g.mutationSyncPreferCurrent;if(g.mutationSyncPending=!1,g.mutationSyncPreferCurrent=!0,g.rootElement){if(g.dragState){H();return}I(e)}}))},q=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==g.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&N.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&K(!n)},J=()=>{g.pendingSync||(g.pendingSync=!0,queueMicrotask(()=>{g.pendingSync=!1,!(!g.rootElement||g.dragState)&&I(!1)}))},Y=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,X),window.removeEventListener(`mouseup`,Z))};function X(e){let n=g.dragState;if(!n)return;let r=G(g.panelConfigs,n.availableSize),i=W(e,y.get())-n.startPoint,a=re(n.startSizes,r,n.index,i),o=a[n.index]-n.startSizes[n.index];if(g.pendingSizes=a,g.previewOffset=t.lazy!==void 0&&t.lazy?o:0,t.lazy!==void 0&&t.lazy){k();return}j(a,!0)}function Z(){let e=g.dragState;if(!e)return;let n=g.sizeState,r=g.panelConfigs,i=t.lazy!==void 0&&t.lazy?g.pendingSizes??e.startSizes:n.length===r.length?n.slice():e.startSizes;t.lazy!==void 0&&t.lazy&&j(i,!0),g.dragState=null,g.pendingSizes=null,g.activeHandleIndex=null,g.previewOffset=0,k(),Y(),t.onResizeEnd&&t.onResizeEnd(R(i))}let Q=(e,n)=>{if(e.button!==0)return;g.panelElements=C(),g.panelConfigs=g.panelElements.map(ie);let r=g.panelConfigs;if(!r[n]||!r[n+1]||!r[n].resizable||!r[n+1].resizable)return;e.preventDefault();let i=T(),a=g.sizeState.length===r.length?g.sizeState.slice():ne(r,i);g.dragState={index:n,startPoint:W(e,y.get()),startSizes:a,availableSize:i},g.pendingSizes=null,g.activeHandleIndex=n,g.previewOffset=0,k(),typeof window<`u`&&(window.addEventListener(`mousemove`,X),window.addEventListener(`mouseup`,Z)),t.onResizeStart&&t.onResizeStart(R(a))};return _(()=>{g.mountedRootElement=g.rootElement,I(!1),g.handlePanelConfigChange=()=>{g.dragState||I(!0)},g.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,g.handlePanelConfigChange),typeof MutationObserver<`u`&&g.mountedRootElement&&(g.panelMutationObserver=new MutationObserver(q),g.panelMutationObserver.observe(g.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(N)})),g.handleWindowResize=()=>{g.dragState||I(!0)},typeof window<`u`&&window.addEventListener(`resize`,g.handleWindowResize)}),l(()=>{Y(),g.panelMutationObserver?.disconnect(),g.panelMutationObserver=null,g.handlePanelConfigChange&&g.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,g.handlePanelConfigChange),typeof window<`u`&&g.handleWindowResize&&window.removeEventListener(`resize`,g.handleWindowResize),A()}),J(),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:d,__rue_rest_omit_8:f,__rue_rest_omit_9:p,__rue_rest_omit_10:m,rest:h,state:g,resolvedOrientation:v,resolvedStyle:b,verticalDefaultStyle:S,getPanelElements:C,getAvailableSize:T,emitResize:E,applyPanelSizes:D,panelLayoutMatches:O,updateHandleVisuals:k,clearHandles:A,commitSizes:j,rebuildHandles:F,syncPanelsFromDom:I,restoreAppliedLayout:B,scheduleLayoutRestore:H,scheduleMutationSync:K,handlePanelMutations:q,scheduleSyncFromRender:J,teardownDragListeners:Y,handleWindowMouseMove:X,handleWindowMouseUp:Z,startDrag:Q,assignRootElement:e=>{g.rootElement=e},assignOverlayElement:e=>{g.overlayElement=e}}}));return f(r=>{let i=h(`div`,r);C(()=>{S(i,A)});let a=E(i,()=>ge);m(()=>{a()}),C(()=>{o(i,F(F(F(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,I.get()===`vertical`?`flex-col`:void 0),`items-stretch`),t.className))}),C(()=>{c(i,{...H.get(),...B.get(),flexDirection:I.get()===`vertical`?`column`:`row`})}),p(i,`data-rue-splitter-root`,`true`),C(()=>{p(i,`data-rue-splitter-orientation`,String(I.get()))}),C(()=>{p(i,`data-rue-splitter-lazy`,String(t.lazy!==void 0&&t.lazy?`true`:`false`))});let l=s(`rue:children:anchor`);n(i,l),C(()=>{let n=t.children;e(()=>g(n,i,l))});let u=h(`div`,i);n(i,u);let d=E(u,()=>_e);return m(()=>{d()}),o(u,`pointer-events-none absolute inset-0`),p(u,`aria-hidden`,`true`),i})},{Panel:t=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:l,__rue_rest_omit_3:d,__rue_rest_omit_4:v,__rue_rest_omit_5:y,__rue_rest_omit_6:b,__rue_rest_omit_7:x,rest:T,panelState:D,dispatchConfigChange:O,assignPanelElement:k}=w(`useSetup:0:0`,()=>u(()=>{let{className:e,style:n,min:r,max:i,size:o,defaultSize:s,resizable:c,children:l,...d}=t,f=w(`useSetup:1:0`,()=>u(()=>({element:null}))),p=()=>{let e=f.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)};return _(p),a(p),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:d,panelState:f,dispatchConfigChange:p,assignPanelElement:e=>{f.element=e,e&&p()}}}));return f(r=>{let i=h(`div`,r);C(()=>{S(i,T)});let a=E(i,()=>k);m(()=>{a()}),C(()=>{o(i,F(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,t.className))}),C(()=>{let e=t.style;c(i,e)}),p(i,`data-rue-splitter-panel`,`true`),C(()=>{p(i,`data-rue-splitter-min`,String(t.min==null?void 0:String(t.min)))}),C(()=>{p(i,`data-rue-splitter-max`,String(t.max==null?void 0:String(t.max)))}),C(()=>{p(i,`data-rue-splitter-size`,String(t.size==null?void 0:String(t.size)))}),C(()=>{p(i,`data-rue-splitter-default-size`,String(t.defaultSize==null?void 0:String(t.defaultSize)))}),C(()=>{p(i,`data-rue-splitter-resizable`,String(t.resizable===void 0||t.resizable?`true`:`false`))});let l=h(`div`,i);n(i,l),o(l,`h-full w-full`);let u=s(`rue:children:anchor`);return n(l,u),C(()=>{let n=t.children;e(()=>g(n,l,u))}),i})}}),q=[180,260,160],J=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为别名保持。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保持布局结构。`,type:`boolean`,defaultValue:`true`}],Y=`import type { FC } from '@rue-js/rue'
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

export default BasicSplitterDemo`,X=`import type { FC } from '@rue-js/rue'
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

export default ControlledSplitterDemo`,Z=`import type { FC } from '@rue-js/rue'
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

export default VerticalSplitterDemo`,Q=`import type { FC } from '@rue-js/rue'
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

export default ResettableSplitterDemo`,ae=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,oe=t=>f(r=>{let i=h(`div`,r);o(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=h(`table`,i);n(i,a),o(a,`table table-zebra`);let c=h(`thead`,a);n(a,c);let l=h(`tr`,c);n(c,l);let u=h(`th`,l);n(l,u),n(u,v(`属性`));let d=h(`th`,l);n(l,d),n(d,v(`说明`));let m=h(`th`,l);n(l,m),n(m,v(`类型`));let _=h(`th`,l);n(l,_),n(_,v(`默认值`));let y=h(`tbody`,a);n(a,y);let x=s(`rue:list:start`),S=s(`rue:list:end`);n(y,x),n(y,S);let w=new Map;return C(()=>{w=T({items:t.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(t,r,i,a,o)=>{g(f(()=>{let r=b(),i=h(`tr`,r);n(r,i),C(()=>{p(i,`key`,String(t.prop))});let a=h(`td`,i);n(i,a);let o=h(`code`,a);n(a,o);let c=s(`rue:slot:anchor`);n(o,c),C(()=>{let n=t.prop;e(()=>g(n,o,c))});let l=h(`td`,i);n(i,l);let u=s(`rue:slot:anchor`);n(l,u),C(()=>{let n=t.description;e(()=>g(n,l,u))});let d=h(`td`,i);n(i,d);let f=h(`code`,d);n(d,f);let m=s(`rue:slot:anchor`);n(f,m),C(()=>{let n=t.type;e(()=>g(n,f,m))});let _=h(`td`,i);n(i,_);let v=h(`code`,_);n(_,v);let y=s(`rue:slot:anchor`);return n(v,y),C(()=>{let n=t.defaultValue;e(()=>g(n,v,y))}),r}),r,i)}})}),i}),$=t=>f(r=>{let i=h(`div`,r);C(()=>{o(i,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${t.className??``}`.trim())});let a=h(`div`,i);n(i,a),o(a,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`);let c=s(`rue:slot:anchor`);n(a,c),C(()=>{let n=t.title;e(()=>g(n,a,c))});let l=h(`div`,i);n(i,l),o(l,`mb-4 text-sm leading-6 text-base-content/70`);let u=s(`rue:slot:anchor`);n(l,u),C(()=>{let n=t.subtitle;e(()=>g(n,l,u))});let d=h(`div`,i);n(i,d),o(d,`min-h-0`);let f=s(`rue:children:anchor`);return n(d,f),C(()=>{let n=t.children;e(()=>g(n,d,f))}),i}),se=()=>{let{controlledSizes:r,controlledResizable:a,controlledStatus:c}=w(`useSetup:0:0`,()=>u(()=>({controlledSizes:w(`ref:1:0`,()=>t([`38%`,`62%`])),controlledResizable:w(`ref:1:1`,()=>t(!0)),controlledStatus:w(`ref:1:2`,()=>t(`等待拖拽`))})));return f(t=>{let l=h(`div`,t);o(l,`space-y-4`);let u=h(`div`,l);n(l,u),o(u,`flex flex-wrap gap-2`);let m=h(`button`,u);n(u,m),p(m,`type`,`button`),o(m,`btn btn-sm`),i(m,`click`,()=>{r.value=[`30%`,`70%`],c.value=`已切到 30 / 70 预设`}),n(m,v(`30 / 70`));let _=h(`button`,u);n(u,_),p(_,`type`,`button`),o(_,`btn btn-sm btn-outline`),i(_,`click`,()=>{r.value=[`50%`,`50%`],c.value=`已重置为 50 / 50`}),n(_,v(`平分`));let S=h(`button`,u);n(u,S),p(S,`type`,`button`),C(()=>{o(S,`btn btn-sm btn-ghost ${a.value?``:`btn-active`}`.trim())}),i(S,`click`,()=>{a.value=!a.value,c.value=a.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`});let w=d(S);n(S,w),C(()=>{x(w,a.value?`锁定左栏`:`恢复拖拽`)});let T=s(`rue:component:anchor`);n(l,T);let E=f(()=>{let t=b(),i=s(`rue:component:anchor`);n(t,i);let l=f(()=>{let e=b(),t=h(`div`,e);n(e,t),o(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let r=h(`div`,t);n(t,r),o(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),n(r,v(`Filters`));let i=h(`div`,t);n(t,i),o(i,`mb-4 text-sm leading-6 text-base-content/70`),n(i,v(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let a=h(`div`,t);n(t,a),o(a,`text-xs text-base-content/60`);let s=d(a);return n(a,s),C(()=>{x(s,c.value)}),e});C(()=>{let n=y(K.Panel,{size:r.value[0],resizable:a.value,children:l});e(()=>g(n,t,i))});let u=s(`rue:component:anchor`);n(t,u);let p=f(()=>{let e=b(),t=h(`div`,e);n(e,t),o(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let i=h(`div`,t);n(t,i),o(i,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),n(i,v(`Results`));let a=h(`div`,t);n(t,a),o(a,`mb-4 text-sm leading-6 text-base-content/70`),n(a,v(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let s=h(`div`,t);n(t,s),o(s,`text-sm text-base-content/70`),n(s,v(`受控尺寸：`));let c=d(s);return n(s,c),C(()=>{x(c,r.value.join(` / `))}),e});return C(()=>{let n=y(K.Panel,{size:r.value[1],children:p});e(()=>g(n,t,u))}),t});return C(()=>{let t=y(K,{style:{height:300},onResize:e=>{r.value=e,c.value=`当前尺寸：${e.join(` / `)}`},children:E});e(()=>g(t,l,T))}),l})},ce=()=>{let{triptychSizes:r,triptychStatus:i}=w(`useSetup:0:0:dup1`,()=>u(()=>({triptychSizes:w(`ref:1:3`,()=>t(q.slice())),triptychStatus:w(`ref:1:4`,()=>t(`双击任意分隔柄可重置`))})));return f(t=>{let a=h(`div`,t);o(a,`space-y-4`);let c=h(`div`,a);n(a,c),o(c,`text-sm text-base-content/65`);let l=d(c);n(c,l),C(()=>{x(l,i.value)});let u=s(`rue:component:anchor`);n(a,u);let p=f(()=>{let t=b(),i=s(`rue:component:anchor`);n(t,i);let a=y($,{title:`Sources`,subtitle:`左侧资源树或文档大纲。`});C(()=>{let n=y(K.Panel,{size:r.value[0],min:120,children:a});e(()=>g(n,t,i))});let o=s(`rue:component:anchor`);n(t,o);let c=y($,{title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`});C(()=>{let n=y(K.Panel,{size:r.value[1],min:180,children:c});e(()=>g(n,t,o))});let l=s(`rue:component:anchor`);n(t,l);let u=y($,{title:`Preview`,subtitle:`右侧实时预览或审阅信息。`});return C(()=>{let n=y(K.Panel,{size:r.value[2],min:120,children:u});e(()=>g(n,t,l))}),t});return C(()=>{let t=y(K,{style:{height:260},onResize:e=>{r.value=e,i.value=`当前布局：${e.join(` / `)}`},onDraggerDoubleClick:()=>{r.value=q.slice(),i.value=`已恢复 Sources / Editor / Preview 默认布局`},children:p});e(()=>g(t,a,u))}),a})},le=()=>{let{lazyStatus:r}=w(`useSetup:0:0:dup2`,()=>u(()=>({lazyStatus:w(`ref:1:5`,()=>t(`拖拽时只移动 handle，释放后才提交尺寸`))})));return f(t=>{let i=h(`div`,t);o(i,`space-y-4`);let a=h(`div`,i);n(i,a),o(a,`text-sm text-base-content/65`);let c=d(a);n(a,c),C(()=>{x(c,r.value)});let l=s(`rue:component:anchor`);n(i,l);let u=f(()=>{let e=b(),t=s(`rue:component:anchor`);n(e,t);let r=y($,{title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:f(()=>{let e=b(),t=h(`div`,e);return n(e,t),o(t,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),n(t,v(`Strategy setup`)),e})});g(y(K.Panel,{defaultSize:`44%`,min:`30%`,children:r}),e,t);let i=s(`rue:component:anchor`);n(e,i);let a=y($,{title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:f(()=>{let e=b(),t=h(`div`,e);n(e,t),o(t,`space-y-2 text-sm text-base-content/70`);let r=h(`div`,t);n(t,r),o(r,`rounded-box bg-base-200/70 px-3 py-2`),n(r,v(`Insight A`));let i=h(`div`,t);n(t,i),o(i,`rounded-box bg-base-200/70 px-3 py-2`),n(i,v(`Insight B`));let a=h(`div`,t);return n(t,a),o(a,`rounded-box bg-base-200/70 px-3 py-2`),n(a,v(`Insight C`)),e})});return g(y(K.Panel,{children:a}),e,i),e});return C(()=>{let t=y(K,{lazy:!0,style:{height:280},onResizeStart:()=>{r.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{r.value=`释放后已提交尺寸：${e.join(` / `)}`},children:u});e(()=>g(t,i,l))}),i})},ue=()=>{let{tabs:r}=w(`useSetup:0:0:dup3`,()=>u(()=>({tabs:{basic:w(`ref:1:6`,()=>t(`preview`)),controlled:w(`ref:1:7`,()=>t(`preview`)),vertical:w(`ref:1:8`,()=>t(`preview`)),reset:w(`ref:1:9`,()=>t(`preview`)),lazy:w(`ref:1:10`,()=>t(`preview`))}})));return f(t=>{let i=b(),a=s(`rue:component:anchor`);return n(i,a),g(y(k,{children:f(()=>{let t=b(),i=h(`div`,t);n(t,i),o(i,`max-w-none prose prose-sm md:prose-base`);let a=h(`h1`,i);n(i,a),n(a,v(`Splitter 分割面板`));let c=h(`p`,i);n(i,c),o(c,`text-sm mt-3 mb-3`),n(c,v(`Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它使用 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。`));let l=h(`h2`,i);n(i,l),n(l,v(`何时使用`));let u=h(`ul`,i);n(i,u);let f=h(`li`,u);n(u,f),n(f,v(`需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。`));let m=h(`li`,u);n(u,m),n(m,v(`需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。`));let _=h(`li`,u);n(u,_),n(_,v(`需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。`));let S=h(`h2`,i);n(i,S),n(S,v(`推荐用法`));let w=h(`p`,i);n(i,w),o(w,`text-sm mt-3 mb-4`),n(w,v(`下面每个 JSX 示例都保持了完整结构，方便直接复制到页面组件里使用。`));let T=s(`rue:component:anchor`);n(i,T),C(()=>{let t=y(A,{title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:r.basic,preview:()=>D(K,{style:{height:280},children:[O(K.Panel,{defaultSize:`40%`,min:`24%`,max:`70%`,children:O($,{title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:D(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Overview`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Metrics`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Deployments`})]})})}),O(K.Panel,{children:O($,{title:`Editor`,subtitle:`右侧保持完整内容区，适合表单、文档或分析结果。`,children:O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70`,children:`这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。`})})})]}),code:Y});e(()=>g(t,i,T))});let E=s(`rue:component:anchor`);n(i,E),C(()=>{let t=y(A,{title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:r.controlled,preview:se,code:X});e(()=>g(t,i,E))});let k=s(`rue:component:anchor`);n(i,k),C(()=>{let t=y(A,{title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:r.vertical,preview:()=>D(K,{orientation:`vertical`,style:{height:520},children:[O(K.Panel,{defaultSize:`32%`,min:`10%`,children:O($,{title:`Summary`,subtitle:`顶部保持关键指标和状态总览。`,children:D(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[O(`div`,{className:`rounded-box bg-success/12 p-3 text-sm`,children:`Success 18`}),O(`div`,{className:`rounded-box bg-warning/12 p-3 text-sm`,children:`Queued 4`}),O(`div`,{className:`rounded-box bg-info/12 p-3 text-sm`,children:`Running 2`})]})})}),O(K.Panel,{children:O($,{title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:O(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70`,children:`这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。`})})})]}),code:Z});e(()=>g(t,i,k))});let j=s(`rue:component:anchor`);n(i,j),C(()=>{let t=y(A,{title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:r.reset,preview:ce,code:Q});e(()=>g(t,i,j))});let M=s(`rue:component:anchor`);n(i,M),C(()=>{let t=y(A,{title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:r.lazy,preview:le,code:ae});e(()=>g(t,i,M))});let N=h(`h2`,i);n(i,N),p(N,`id`,`splitter-api`),n(N,v(`API`));let P=h(`p`,i);n(i,P),o(P,`text-sm mt-3 mb-4`),n(P,v(`Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是`));let F=d(P);n(P,F),x(F,` `);let I=h(`code`,P);n(P,I),n(I,v(`Splitter.Panel`)),n(P,v(`。 如果你在业务里需要把布局状态持久化，优先使用`));let L=d(P);n(P,L),x(L,` `);let R=h(`code`,P);n(P,R),n(R,v(`size`)),n(P,v(`+`));let z=h(`code`,P);n(P,z),n(z,v(`onResize`)),n(P,v(`的受控写法；如果只需要默认占比，用`));let B=h(`code`,P);n(P,B),n(B,v(`defaultSize`)),n(P,v(`即可。`));let V=s(`rue:component:anchor`);return n(i,V),C(()=>{let t=y(oe,{rows:J});e(()=>g(t,i,V))}),t})}),i,a),i})};export{ue as default};
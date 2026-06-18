import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,a as c,at as l,dt as u,et as d,gt as f,i as p,l as m,mt as h,o as g,pt as _,q as v,qt as y,r as b,s as x,st as S,t as C}from"./vapor-runtime-iQZthBPQ.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as D,i as O}from"./persistentSidebarPlayground-BfF7yM0K.js";import{r as k}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as A}from"./PreviewBlock-DJFn4Hia.js";var j=.5,M=3,N=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),P=(e,t,n)=>Math.min(n,Math.max(t,e)),F=(e,t)=>t?`${e} ${t}`:e,I=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,L=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:I(e.width),minWidth:I(e.minWidth),maxWidth:I(e.maxWidth),height:I(e.height),minHeight:I(e.minHeight),maxHeight:I(e.maxHeight)}},R=e=>e.map(e=>Math.max(0,Math.round(e))),z=e=>e.reduce((e,t)=>e+t,0),B=(e,t)=>{let n=z(e);if(t<=0||n<=j)return e.slice();let r=t/n;return e.map(e=>e*r)},V=(e,t)=>e.length===t.length?e.every((e,n)=>Math.abs(e-t[n])<=j):!1,ee=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),H=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},U=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:P(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=P(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-z(r);if(Math.abs(e)<=j)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>j?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>j?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=j?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},te=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},W=(e,t)=>t===`vertical`?e.clientY:e.clientX,G=(e,t)=>e.map(e=>{let n=H(e.min,t)??0,r=H(e.max,t)??t;return{min:P(n,0,t),max:P(Math.max(r,n),n,t)}}),ne=(e,t,n)=>{let r=G(e,t),i=n&&n.length===e.length&&z(n)>j?B(n,t):void 0;return U(e.map((e,n)=>{let r=H(e.size,t);if(typeof r==`number`)return r;let a=H(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},re=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=P(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},ie=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},K=Object.assign(e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:d,__rue_rest_omit_3:g,__rue_rest_omit_4:_,__rue_rest_omit_5:v,__rue_rest_omit_6:C,__rue_rest_omit_7:T,__rue_rest_omit_8:D,__rue_rest_omit_9:O,__rue_rest_omit_10:k,rest:A,state:j,resolvedOrientation:I,resolvedStyle:B,verticalDefaultStyle:H,getPanelElements:K,getAvailableSize:q,emitResize:J,applyPanelSizes:Y,panelLayoutMatches:X,updateHandleVisuals:Z,clearHandles:Q,commitSizes:ae,rebuildHandles:oe,syncPanelsFromDom:$,restoreAppliedLayout:se,scheduleLayoutRestore:ce,scheduleMutationSync:le,handlePanelMutations:ue,scheduleSyncFromRender:de,teardownDragListeners:fe,handleWindowMouseMove:pe,handleWindowMouseUp:me,startDrag:he,assignRootElement:ge,assignOverlayElement:_e}=w(`useSetup:0:0:dup1`,()=>y(()=>{let{orientation:t,layout:n,vertical:r,lazy:i,className:a,style:o,onDraggerDoubleClick:s,onResizeStart:l,onResize:u,onResizeEnd:d,children:m,...h}=e,g=w(`useSetup:1:1`,()=>y(()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0}))),_=w(`computed:1:2`,()=>f(()=>ee(e.orientation,e.layout,e.vertical))),v=_,b=w(`computed:1:3`,()=>f(()=>L(e.style))),x=b,S=w(`computed:1:4`,()=>f(()=>v.get()===`vertical`&&x.get()?.height==null?{height:x.get()?.minHeight??`320px`}:void 0)),C=()=>{let e=g.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},T=()=>te(g.rootElement??void 0,v.get()),E=t=>{e.onResize&&e.onResize(R(t)),H()},D=e=>{g.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),v.get()===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},O=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?v.get()===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},k=()=>{let t=g.handleRecords,n=g.panelConfigs,r=g.sizeState,i=T();t.forEach((t,a)=>{let o=n[a],s=n[a+1],c=z(r.slice(0,a+1)),l=g.activeHandleIndex===a,u=P((e.lazy!==void 0&&e.lazy&&l?c+g.previewOffset:c)-M/2,0,Math.max(i-M,0));t.root.dataset.rueSplitterHandleActive=l?`true`:`false`,t.root.style.transform=``,v.get()===`vertical`?(t.root.style.top=`${u}px`,t.root.style.left=`0`,t.root.style.height=`${M}px`,t.root.style.width=`100%`):(t.root.style.left=`${u}px`,t.root.style.top=`0`,t.root.style.width=`${M}px`,t.root.style.height=`100%`);let d=!o.resizable||!s?.resizable;t.root.dataset.rueSplitterHandleDisabled=d?`true`:`false`,d&&(t.root.style.cursor=`default`)})},A=()=>{let e=g.overlayElement;e&&(e.innerHTML=``),g.handleRecords=[]},j=(e,t=!1)=>{let n=T(),r=U(e,G(g.panelConfigs,n),n);g.sizeState=r,D(r),k(),t&&E(r)},F=()=>{A();let t=g.overlayElement,n=g.panelConfigs;if(!t||n.length<=1)return;let r=[];n.slice(0,-1).forEach((i,a)=>{let o=n[a+1],s=document.createElement(`div`);s.setAttribute(`role`,`separator`),s.setAttribute(`aria-orientation`,v.get()),s.setAttribute(`aria-label`,`调整面板 ${a+1} 与 ${a+2}`),s.setAttribute(`data-rue-splitter-handle`,String(a)),s.className=v.get()===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,s.addEventListener(`mousedown`,e=>{Q(e,a)}),s.addEventListener(`dblclick`,()=>{e.onDraggerDoubleClick&&e.onDraggerDoubleClick(a)}),(!i.resizable||!o?.resizable)&&(s.dataset.rueSplitterHandleDisabled=`true`,s.style.cursor=`default`),t.appendChild(s),r.push({root:s})}),g.handleRecords=r,k()},I=(e=!0)=>{g.panelElements=C(),g.panelConfigs=g.panelElements.map(ie);let t=g.panelConfigs;if(!t.length){g.sizeState=[],A();return}let n=ne(t,T(),e&&g.sizeState.length===t.length?g.sizeState:void 0);V(g.sizeState,n)||(g.sizeState=n),D(n),F()},B=()=>{let e=C();!e.length||e.length!==g.sizeState.length||e.every((e,t)=>O(e,g.sizeState[t]??0))||(g.panelElements=e,D(g.sizeState),k())},H=()=>{let e=C();e.length===g.sizeState.length&&e.every((e,t)=>O(e,g.sizeState[t]??0))||g.layoutRestorePending||(g.layoutRestorePending=!0,queueMicrotask(()=>{g.layoutRestorePending=!1,g.rootElement&&B()}))},K=e=>{g.mutationSyncPreferCurrent=g.mutationSyncPending?g.mutationSyncPreferCurrent&&e:e,!g.mutationSyncPending&&(g.mutationSyncPending=!0,queueMicrotask(()=>{let e=g.mutationSyncPreferCurrent;if(g.mutationSyncPending=!1,g.mutationSyncPreferCurrent=!0,g.rootElement){if(g.dragState){H();return}I(e)}}))},q=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==g.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&N.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&K(!n)},J=()=>{g.pendingSync||(g.pendingSync=!0,queueMicrotask(()=>{g.pendingSync=!1,!(!g.rootElement||g.dragState)&&I(!1)}))},Y=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,X),window.removeEventListener(`mouseup`,Z))};function X(t){let n=g.dragState;if(!n)return;let r=G(g.panelConfigs,n.availableSize),i=W(t,v.get())-n.startPoint,a=re(n.startSizes,r,n.index,i),o=a[n.index]-n.startSizes[n.index];if(g.pendingSizes=a,g.previewOffset=e.lazy!==void 0&&e.lazy?o:0,e.lazy!==void 0&&e.lazy){k();return}j(a,!0)}function Z(){let t=g.dragState;if(!t)return;let n=g.sizeState,r=g.panelConfigs,i=e.lazy!==void 0&&e.lazy?g.pendingSizes??t.startSizes:n.length===r.length?n.slice():t.startSizes;e.lazy!==void 0&&e.lazy&&j(i,!0),g.dragState=null,g.pendingSizes=null,g.activeHandleIndex=null,g.previewOffset=0,k(),Y(),e.onResizeEnd&&e.onResizeEnd(R(i))}let Q=(t,n)=>{if(t.button!==0)return;g.panelElements=C(),g.panelConfigs=g.panelElements.map(ie);let r=g.panelConfigs;if(!r[n]||!r[n+1]||!r[n].resizable||!r[n+1].resizable)return;t.preventDefault();let i=T(),a=g.sizeState.length===r.length?g.sizeState.slice():ne(r,i);g.dragState={index:n,startPoint:W(t,v.get()),startSizes:a,availableSize:i},g.pendingSizes=null,g.activeHandleIndex=n,g.previewOffset=0,k(),typeof window<`u`&&(window.addEventListener(`mousemove`,X),window.addEventListener(`mouseup`,Z)),e.onResizeStart&&e.onResizeStart(R(a))};return p(()=>{g.mountedRootElement=g.rootElement,I(!1),g.handlePanelConfigChange=()=>{g.dragState||I(!0)},g.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,g.handlePanelConfigChange),typeof MutationObserver<`u`&&g.mountedRootElement&&(g.panelMutationObserver=new MutationObserver(q),g.panelMutationObserver.observe(g.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(N)})),g.handleWindowResize=()=>{g.dragState||I(!0)},typeof window<`u`&&window.addEventListener(`resize`,g.handleWindowResize)}),c(()=>{Y(),g.panelMutationObserver?.disconnect(),g.panelMutationObserver=null,g.handlePanelConfigChange&&g.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,g.handlePanelConfigChange),typeof window<`u`&&g.handleWindowResize&&window.removeEventListener(`resize`,g.handleWindowResize),A()}),J(),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:m,rest:h,state:g,resolvedOrientation:_,resolvedStyle:b,verticalDefaultStyle:S,getPanelElements:C,getAvailableSize:T,emitResize:E,applyPanelSizes:D,panelLayoutMatches:O,updateHandleVisuals:k,clearHandles:A,commitSizes:j,rebuildHandles:F,syncPanelsFromDom:I,restoreAppliedLayout:B,scheduleLayoutRestore:H,scheduleMutationSync:K,handlePanelMutations:q,scheduleSyncFromRender:J,teardownDragListeners:Y,handleWindowMouseMove:X,handleWindowMouseUp:Z,startDrag:Q,assignRootElement:e=>{g.rootElement=e},assignOverlayElement:e=>{g.overlayElement=e}}}));return m(r=>{let s=i(`div`,r);o(()=>{h(s,A)});let c=E(s,()=>ge);b(()=>{c()}),o(()=>{S(s,F(F(F(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,I.get()===`vertical`?`flex-col`:void 0),`items-stretch`),e.className))}),o(()=>{u(s,{...H.get(),...B.get(),flexDirection:I.get()===`vertical`?`column`:`row`})}),l(s,`data-rue-splitter-root`,`true`),o(()=>{l(s,`data-rue-splitter-orientation`,String(I.get()))}),o(()=>{l(s,`data-rue-splitter-lazy`,String(e.lazy!==void 0&&e.lazy?`true`:`false`))});let d=a(`rue:children:anchor`);n(s,d),o(()=>{let n=e.children;t(()=>x(n,s,d))});let f=i(`div`,s);n(s,f);let p=E(f,()=>_e);return b(()=>{p()}),S(f,`pointer-events-none absolute inset-0`),l(f,`aria-hidden`,`true`),s})},{Panel:e=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:s,__rue_rest_omit_2:c,__rue_rest_omit_3:d,__rue_rest_omit_4:f,__rue_rest_omit_5:_,__rue_rest_omit_6:v,__rue_rest_omit_7:C,rest:T,panelState:D,dispatchConfigChange:O,assignPanelElement:k}=w(`useSetup:0:0`,()=>y(()=>{let{className:t,style:n,min:r,max:i,size:a,defaultSize:o,resizable:s,children:c,...l}=e,u=w(`useSetup:1:0`,()=>y(()=>({element:null}))),d=()=>{let e=u.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)};return p(d),g(d),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:c,rest:l,panelState:u,dispatchConfigChange:d,assignPanelElement:e=>{u.element=e,e&&d()}}}));return m(r=>{let s=i(`div`,r);o(()=>{h(s,T)});let c=E(s,()=>k);b(()=>{c()}),o(()=>{S(s,F(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,e.className))}),o(()=>{let t=e.style;u(s,t)}),l(s,`data-rue-splitter-panel`,`true`),o(()=>{l(s,`data-rue-splitter-min`,String(e.min==null?void 0:String(e.min)))}),o(()=>{l(s,`data-rue-splitter-max`,String(e.max==null?void 0:String(e.max)))}),o(()=>{l(s,`data-rue-splitter-size`,String(e.size==null?void 0:String(e.size)))}),o(()=>{l(s,`data-rue-splitter-default-size`,String(e.defaultSize==null?void 0:String(e.defaultSize)))}),o(()=>{l(s,`data-rue-splitter-resizable`,String(e.resizable===void 0||e.resizable?`true`:`false`))});let d=i(`div`,s);n(s,d),S(d,`h-full w-full`);let f=a(`rue:children:anchor`);return n(d,f),o(()=>{let n=e.children;t(()=>x(n,d,f))}),s})}}),q=[180,260,160],J=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为兼容别名保留。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保留布局结构。`,type:`boolean`,defaultValue:`true`}],Y=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,oe=r=>m(c=>{let u=i(`div`,c);S(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=i(`table`,u);n(u,d),S(d,`table table-zebra`);let f=i(`thead`,d);n(d,f);let p=i(`tr`,f);n(f,p);let h=i(`th`,p);n(p,h),n(h,e(`属性`));let g=i(`th`,p);n(p,g),n(g,e(`说明`));let _=i(`th`,p);n(p,_),n(_,e(`类型`));let v=i(`th`,p);n(p,v),n(v,e(`默认值`));let y=i(`tbody`,d);n(d,y);let b=a(`rue:list:start`),C=a(`rue:list:end`);n(y,b),n(y,C);let w=new Map;return o(()=>{w=T({items:r.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,r,c,u,d)=>{x(m(()=>{let r=s(),c=i(`tr`,r);n(r,c),o(()=>{l(c,`key`,String(e.prop))});let u=i(`td`,c);n(c,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>x(n,d,f))});let p=i(`td`,c);n(c,p);let m=a(`rue:slot:anchor`);n(p,m),o(()=>{let n=e.description;t(()=>x(n,p,m))});let h=i(`td`,c);n(c,h);let g=i(`code`,h);n(h,g);let _=a(`rue:slot:anchor`);n(g,_),o(()=>{let n=e.type;t(()=>x(n,g,_))});let v=i(`td`,c);n(c,v);let y=i(`code`,v);n(v,y);let b=a(`rue:slot:anchor`);return n(y,b),o(()=>{let n=e.defaultValue;t(()=>x(n,y,b))}),r}),r,c)}})}),u}),$=e=>m(r=>{let s=i(`div`,r);o(()=>{S(s,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${e.className??``}`.trim())});let c=i(`div`,s);n(s,c),S(c,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`);let l=a(`rue:slot:anchor`);n(c,l),o(()=>{let n=e.title;t(()=>x(n,c,l))});let u=i(`div`,s);n(s,u),S(u,`mb-4 text-sm leading-6 text-base-content/70`);let d=a(`rue:slot:anchor`);n(u,d),o(()=>{let n=e.subtitle;t(()=>x(n,u,d))});let f=i(`div`,s);n(s,f),S(f,`min-h-0`);let p=a(`rue:children:anchor`);return n(f,p),o(()=>{let n=e.children;t(()=>x(n,f,p))}),s}),se=()=>{let{controlledSizes:c,controlledResizable:u,controlledStatus:f}=w(`useSetup:0:0`,()=>y(()=>({controlledSizes:w(`ref:1:0`,()=>r([`38%`,`62%`])),controlledResizable:w(`ref:1:1`,()=>r(!0)),controlledStatus:w(`ref:1:2`,()=>r(`等待拖拽`))})));return m(r=>{let p=i(`div`,r);S(p,`space-y-4`);let h=i(`div`,p);n(p,h),S(h,`flex flex-wrap gap-2`);let g=i(`button`,h);n(h,g),l(g,`type`,`button`),S(g,`btn btn-sm`),v(g,`click`,()=>{c.value=[`30%`,`70%`],f.value=`已切到 30 / 70 预设`}),n(g,e(`30 / 70`));let y=i(`button`,h);n(h,y),l(y,`type`,`button`),S(y,`btn btn-sm btn-outline`),v(y,`click`,()=>{c.value=[`50%`,`50%`],f.value=`已重置为 50 / 50`}),n(y,e(`平分`));let b=i(`button`,h);n(h,b),l(b,`type`,`button`),o(()=>{S(b,`btn btn-sm btn-ghost ${u.value?``:`btn-active`}`.trim())}),v(b,`click`,()=>{u.value=!u.value,f.value=u.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`});let w=d(b);n(b,w),o(()=>{_(w,u.value?`锁定左栏`:`恢复拖拽`)});let T=a(`rue:component:anchor`);n(p,T);let E=m(()=>{let r=s(),l=a(`rue:component:anchor`);n(r,l);let p=m(()=>{let t=s(),r=i(`div`,t);n(t,r),S(r,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let a=i(`div`,r);n(r,a),S(a,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),n(a,e(`Filters`));let c=i(`div`,r);n(r,c),S(c,`mb-4 text-sm leading-6 text-base-content/70`),n(c,e(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let l=i(`div`,r);n(r,l),S(l,`text-xs text-base-content/60`);let u=d(l);return n(l,u),o(()=>{_(u,f.value)}),t});o(()=>{let e=C(K.Panel,{size:c.value[0],resizable:u.value,children:p});t(()=>x(e,r,l))});let h=a(`rue:component:anchor`);n(r,h);let g=m(()=>{let t=s(),r=i(`div`,t);n(t,r),S(r,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let a=i(`div`,r);n(r,a),S(a,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),n(a,e(`Results`));let l=i(`div`,r);n(r,l),S(l,`mb-4 text-sm leading-6 text-base-content/70`),n(l,e(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let u=i(`div`,r);n(r,u),S(u,`text-sm text-base-content/70`),n(u,e(`受控尺寸：`));let f=d(u);return n(u,f),o(()=>{_(f,c.value.join(` / `))}),t});return o(()=>{let e=C(K.Panel,{size:c.value[1],children:g});t(()=>x(e,r,h))}),r});return o(()=>{let e=C(K,{style:{height:300},onResize:e=>{c.value=e,f.value=`当前尺寸：${e.join(` / `)}`},children:E});t(()=>x(e,p,T))}),p})},ce=()=>{let{triptychSizes:e,triptychStatus:c}=w(`useSetup:0:0:dup1`,()=>y(()=>({triptychSizes:w(`ref:1:3`,()=>r(q.slice())),triptychStatus:w(`ref:1:4`,()=>r(`双击任意分隔柄可重置`))})));return m(r=>{let l=i(`div`,r);S(l,`space-y-4`);let u=i(`div`,l);n(l,u),S(u,`text-sm text-base-content/65`);let f=d(u);n(u,f),o(()=>{_(f,c.value)});let p=a(`rue:component:anchor`);n(l,p);let h=m(()=>{let r=s(),i=a(`rue:component:anchor`);n(r,i);let c=C($,{title:`Sources`,subtitle:`左侧资源树或文档大纲。`});o(()=>{let n=C(K.Panel,{size:e.value[0],min:120,children:c});t(()=>x(n,r,i))});let l=a(`rue:component:anchor`);n(r,l);let u=C($,{title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`});o(()=>{let n=C(K.Panel,{size:e.value[1],min:180,children:u});t(()=>x(n,r,l))});let d=a(`rue:component:anchor`);n(r,d);let f=C($,{title:`Preview`,subtitle:`右侧实时预览或审阅信息。`});return o(()=>{let n=C(K.Panel,{size:e.value[2],min:120,children:f});t(()=>x(n,r,d))}),r});return o(()=>{let n=C(K,{style:{height:260},onResize:t=>{e.value=t,c.value=`当前布局：${t.join(` / `)}`},onDraggerDoubleClick:()=>{e.value=q.slice(),c.value=`已恢复 Sources / Editor / Preview 默认布局`},children:h});t(()=>x(n,l,p))}),l})},le=()=>{let{lazyStatus:c}=w(`useSetup:0:0:dup2`,()=>y(()=>({lazyStatus:w(`ref:1:5`,()=>r(`拖拽时只移动 handle，释放后才提交尺寸`))})));return m(r=>{let l=i(`div`,r);S(l,`space-y-4`);let u=i(`div`,l);n(l,u),S(u,`text-sm text-base-content/65`);let f=d(u);n(u,f),o(()=>{_(f,c.value)});let p=a(`rue:component:anchor`);n(l,p);let h=m(()=>{let t=s(),r=a(`rue:component:anchor`);n(t,r);let o=C($,{title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:m(()=>{let t=s(),r=i(`div`,t);return n(t,r),S(r,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),n(r,e(`Strategy setup`)),t})});x(C(K.Panel,{defaultSize:`44%`,min:`30%`,children:o}),t,r);let c=a(`rue:component:anchor`);n(t,c);let l=C($,{title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:m(()=>{let t=s(),r=i(`div`,t);n(t,r),S(r,`space-y-2 text-sm text-base-content/70`);let a=i(`div`,r);n(r,a),S(a,`rounded-box bg-base-200/70 px-3 py-2`),n(a,e(`Insight A`));let o=i(`div`,r);n(r,o),S(o,`rounded-box bg-base-200/70 px-3 py-2`),n(o,e(`Insight B`));let c=i(`div`,r);return n(r,c),S(c,`rounded-box bg-base-200/70 px-3 py-2`),n(c,e(`Insight C`)),t})});return x(C(K.Panel,{children:l}),t,c),t});return o(()=>{let e=C(K,{lazy:!0,style:{height:280},onResizeStart:()=>{c.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{c.value=`释放后已提交尺寸：${e.join(` / `)}`},children:h});t(()=>x(e,l,p))}),l})},ue=()=>{let{tabs:c}=w(`useSetup:0:0:dup3`,()=>y(()=>({tabs:{basic:w(`ref:1:6`,()=>r(`preview`)),controlled:w(`ref:1:7`,()=>r(`preview`)),vertical:w(`ref:1:8`,()=>r(`preview`)),reset:w(`ref:1:9`,()=>r(`preview`)),lazy:w(`ref:1:10`,()=>r(`preview`))}})));return m(r=>{let u=s(),f=a(`rue:component:anchor`);return n(u,f),x(C(k,{children:m(()=>{let r=s(),u=i(`div`,r);n(r,u),S(u,`max-w-none prose prose-sm md:prose-base`);let f=i(`h1`,u);n(u,f),n(f,e(`Splitter 分割面板`));let p=i(`p`,u);n(u,p),S(p,`text-sm mt-3 mb-3`),n(p,e(`Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它保留 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。`));let m=i(`h2`,u);n(u,m),n(m,e(`何时使用`));let h=i(`ul`,u);n(u,h);let g=i(`li`,h);n(h,g),n(g,e(`需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。`));let v=i(`li`,h);n(h,v),n(v,e(`需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。`));let y=i(`li`,h);n(h,y),n(y,e(`需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。`));let b=i(`h2`,u);n(u,b),n(b,e(`推荐用法`));let w=i(`p`,u);n(u,w),S(w,`text-sm mt-3 mb-4`),n(w,e(`下面每个 JSX 示例都保留了完整结构，方便直接复制到页面组件里使用。`));let T=a(`rue:component:anchor`);n(u,T),o(()=>{let e=C(A,{title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:c.basic,preview:()=>D(K,{style:{height:280},children:[O(K.Panel,{defaultSize:`40%`,min:`24%`,max:`70%`,children:O($,{title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:D(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Overview`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Metrics`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Deployments`})]})})}),O(K.Panel,{children:O($,{title:`Editor`,subtitle:`右侧保留完整内容区，适合表单、文档或分析结果。`,children:O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70`,children:`这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。`})})})]}),code:Y});t(()=>x(e,u,T))});let E=a(`rue:component:anchor`);n(u,E),o(()=>{let e=C(A,{title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:c.controlled,preview:se,code:X});t(()=>x(e,u,E))});let k=a(`rue:component:anchor`);n(u,k),o(()=>{let e=C(A,{title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:c.vertical,preview:()=>D(K,{orientation:`vertical`,style:{height:520},children:[O(K.Panel,{defaultSize:`32%`,min:`10%`,children:O($,{title:`Summary`,subtitle:`顶部保留关键指标和状态总览。`,children:D(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[O(`div`,{className:`rounded-box bg-success/12 p-3 text-sm`,children:`Success 18`}),O(`div`,{className:`rounded-box bg-warning/12 p-3 text-sm`,children:`Queued 4`}),O(`div`,{className:`rounded-box bg-info/12 p-3 text-sm`,children:`Running 2`})]})})}),O(K.Panel,{children:O($,{title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:O(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70`,children:`这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。`})})})]}),code:Z});t(()=>x(e,u,k))});let j=a(`rue:component:anchor`);n(u,j),o(()=>{let e=C(A,{title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:c.reset,preview:ce,code:Q});t(()=>x(e,u,j))});let M=a(`rue:component:anchor`);n(u,M),o(()=>{let e=C(A,{title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:c.lazy,preview:le,code:ae});t(()=>x(e,u,M))});let N=i(`h2`,u);n(u,N),l(N,`id`,`splitter-api`),n(N,e(`API`));let P=i(`p`,u);n(u,P),S(P,`text-sm mt-3 mb-4`),n(P,e(`Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是`));let F=d(P);n(P,F),_(F,` `);let I=i(`code`,P);n(P,I),n(I,e(`Splitter.Panel`)),n(P,e(`。 如果你在业务里需要把布局状态持久化，优先使用`));let L=d(P);n(P,L),_(L,` `);let R=i(`code`,P);n(P,R),n(R,e(`size`)),n(P,e(`+`));let z=i(`code`,P);n(P,z),n(z,e(`onResize`)),n(P,e(`的受控写法；如果只需要默认占比，用`));let B=i(`code`,P);n(P,B),n(B,e(`defaultSize`)),n(P,e(`即可。`));let V=a(`rue:component:anchor`);return n(u,V),o(()=>{let e=C(oe,{rows:J});t(()=>x(e,u,V))}),r})}),u,f),u})};export{ue as default};
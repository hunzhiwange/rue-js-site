import{Q as e,Vt as t,Xt as n,Z as r,a as i,at as a,bt as o,dt as s,i as c,it as l,l as u,n as d,nt as f,o as p,on as m,pt as h,r as g,rt as _,t as v,tn as y,tt as b,vt as x,wt as S,xt as C}from"./vapor-runtime-x7F5M-49.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-D1LP4JjK.js";import{n as D,t as O}from"./src-Dlanwp1X.js";import{r as k}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as A}from"./PreviewBlock-CCAV1yb7.js";var j=.5,M=3,N=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),P=(e,t,n)=>Math.min(n,Math.max(t,e)),F=(e,t)=>t?`${e} ${t}`:e,I=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,L=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:I(e.width),minWidth:I(e.minWidth),maxWidth:I(e.maxWidth),height:I(e.height),minHeight:I(e.minHeight),maxHeight:I(e.maxHeight)}},R=e=>e.map(e=>Math.max(0,Math.round(e))),z=e=>e.reduce((e,t)=>e+t,0),B=(e,t)=>{let n=z(e);if(t<=0||n<=j)return e.slice();let r=t/n;return e.map(e=>e*r)},V=(e,t)=>e.length===t.length?e.every((e,n)=>Math.abs(e-t[n])<=j):!1,ee=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),H=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},U=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:P(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=P(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-z(r);if(Math.abs(e)<=j)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>j?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>j?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=j?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},te=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},W=(e,t)=>t===`vertical`?e.clientY:e.clientX,G=(e,t)=>e.map(e=>{let n=H(e.min,t)??0,r=H(e.max,t)??t;return{min:P(n,0,t),max:P(Math.max(r,n),n,t)}}),ne=(e,t,n)=>{let r=G(e,t),i=n&&n.length===e.length&&z(n)>j?B(n,t):void 0;return U(e.map((e,n)=>{let r=H(e.size,t);if(typeof r==`number`)return r;let a=H(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},re=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=P(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},ie=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},K=Object.assign(n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:i,__rue_rest_omit_2:a,__rue_rest_omit_3:o,__rue_rest_omit_4:l,__rue_rest_omit_5:f,__rue_rest_omit_6:v,__rue_rest_omit_7:T,__rue_rest_omit_8:D,__rue_rest_omit_9:O,__rue_rest_omit_10:k,rest:A,state:j,resolvedOrientation:I,resolvedStyle:B,verticalDefaultStyle:H,getPanelElements:K,getAvailableSize:q,emitResize:J,applyPanelSizes:Y,panelLayoutMatches:X,updateHandleVisuals:Z,clearHandles:Q,commitSizes:ae,rebuildHandles:oe,syncPanelsFromDom:$,restoreAppliedLayout:se,scheduleLayoutRestore:ce,scheduleMutationSync:le,handlePanelMutations:ue,scheduleSyncFromRender:de,teardownDragListeners:fe,handleWindowMouseMove:pe,handleWindowMouseUp:me,startDrag:he,assignRootElement:ge,assignOverlayElement:_e}=w(`useSetup:0:0:dup1`,()=>m(()=>{let{orientation:e,layout:t,vertical:r,lazy:i,className:a,style:o,onDraggerDoubleClick:s,onResizeStart:l,onResize:u,onResizeEnd:d,children:f,...p}=n,h=w(`useSetup:1:1`,()=>m(()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0}))),_=w(`computed:1:2`,()=>S(()=>ee(n.orientation,n.layout,n.vertical))),v=_,y=w(`computed:1:3`,()=>S(()=>L(n.style))),b=y,x=w(`computed:1:4`,()=>S(()=>v.get()===`vertical`&&b.get()?.height==null?{height:b.get()?.minHeight??`320px`}:void 0)),C=()=>{let e=h.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},T=()=>te(h.rootElement??void 0,v.get()),E=e=>{n.onResize&&n.onResize(R(e)),H()},D=e=>{h.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),v.get()===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},O=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?v.get()===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},k=()=>{let e=h.handleRecords,t=h.panelConfigs,r=h.sizeState,i=T();e.forEach((e,a)=>{let o=t[a],s=t[a+1],c=z(r.slice(0,a+1)),l=h.activeHandleIndex===a,u=P((n.lazy!==void 0&&n.lazy&&l?c+h.previewOffset:c)-M/2,0,Math.max(i-M,0));e.root.dataset.rueSplitterHandleActive=l?`true`:`false`,e.root.style.transform=``,v.get()===`vertical`?(e.root.style.top=`${u}px`,e.root.style.left=`0`,e.root.style.height=`${M}px`,e.root.style.width=`100%`):(e.root.style.left=`${u}px`,e.root.style.top=`0`,e.root.style.width=`${M}px`,e.root.style.height=`100%`);let d=!o.resizable||!s?.resizable;e.root.dataset.rueSplitterHandleDisabled=d?`true`:`false`,d&&(e.root.style.cursor=`default`)})},A=()=>{let e=h.overlayElement;e&&(e.innerHTML=``),h.handleRecords=[]},j=(e,t=!1)=>{let n=T(),r=U(e,G(h.panelConfigs,n),n);h.sizeState=r,D(r),k(),t&&E(r)},F=()=>{A();let e=h.overlayElement,t=h.panelConfigs;if(!e||t.length<=1)return;let r=[];t.slice(0,-1).forEach((i,a)=>{let o=t[a+1],s=document.createElement(`div`);s.setAttribute(`role`,`separator`),s.setAttribute(`aria-orientation`,v.get()),s.setAttribute(`aria-label`,`调整面板 ${a+1} 与 ${a+2}`),s.setAttribute(`data-rue-splitter-handle`,String(a)),s.className=v.get()===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,s.addEventListener(`mousedown`,e=>{Q(e,a)}),s.addEventListener(`dblclick`,()=>{n.onDraggerDoubleClick&&n.onDraggerDoubleClick(a)}),(!i.resizable||!o?.resizable)&&(s.dataset.rueSplitterHandleDisabled=`true`,s.style.cursor=`default`),e.appendChild(s),r.push({root:s})}),h.handleRecords=r,k()},I=(e=!0)=>{h.panelElements=C(),h.panelConfigs=h.panelElements.map(ie);let t=h.panelConfigs;if(!t.length){h.sizeState=[],A();return}let n=ne(t,T(),e&&h.sizeState.length===t.length?h.sizeState:void 0);V(h.sizeState,n)||(h.sizeState=n),D(n),F()},B=()=>{let e=C();!e.length||e.length!==h.sizeState.length||e.every((e,t)=>O(e,h.sizeState[t]??0))||(h.panelElements=e,D(h.sizeState),k())},H=()=>{let e=C();e.length===h.sizeState.length&&e.every((e,t)=>O(e,h.sizeState[t]??0))||h.layoutRestorePending||(h.layoutRestorePending=!0,queueMicrotask(()=>{h.layoutRestorePending=!1,h.rootElement&&B()}))},K=e=>{h.mutationSyncPreferCurrent=h.mutationSyncPending?h.mutationSyncPreferCurrent&&e:e,!h.mutationSyncPending&&(h.mutationSyncPending=!0,queueMicrotask(()=>{let e=h.mutationSyncPreferCurrent;if(h.mutationSyncPending=!1,h.mutationSyncPreferCurrent=!0,h.rootElement){if(h.dragState){H();return}I(e)}}))},q=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==h.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&N.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&K(!n)},J=()=>{h.pendingSync||(h.pendingSync=!0,queueMicrotask(()=>{h.pendingSync=!1,!(!h.rootElement||h.dragState)&&I(!1)}))},Y=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,X),window.removeEventListener(`mouseup`,Z))};function X(e){let t=h.dragState;if(!t)return;let r=G(h.panelConfigs,t.availableSize),i=W(e,v.get())-t.startPoint,a=re(t.startSizes,r,t.index,i),o=a[t.index]-t.startSizes[t.index];if(h.pendingSizes=a,h.previewOffset=n.lazy!==void 0&&n.lazy?o:0,n.lazy!==void 0&&n.lazy){k();return}j(a,!0)}function Z(){let e=h.dragState;if(!e)return;let t=h.sizeState,r=h.panelConfigs,i=n.lazy!==void 0&&n.lazy?h.pendingSizes??e.startSizes:t.length===r.length?t.slice():e.startSizes;n.lazy!==void 0&&n.lazy&&j(i,!0),h.dragState=null,h.pendingSizes=null,h.activeHandleIndex=null,h.previewOffset=0,k(),Y(),n.onResizeEnd&&n.onResizeEnd(R(i))}let Q=(e,t)=>{if(e.button!==0)return;h.panelElements=C(),h.panelConfigs=h.panelElements.map(ie);let r=h.panelConfigs;if(!r[t]||!r[t+1]||!r[t].resizable||!r[t+1].resizable)return;e.preventDefault();let i=T(),a=h.sizeState.length===r.length?h.sizeState.slice():ne(r,i);h.dragState={index:t,startPoint:W(e,v.get()),startSizes:a,availableSize:i},h.pendingSizes=null,h.activeHandleIndex=t,h.previewOffset=0,k(),typeof window<`u`&&(window.addEventListener(`mousemove`,X),window.addEventListener(`mouseup`,Z)),n.onResizeStart&&n.onResizeStart(R(a))};return g(()=>{h.mountedRootElement=h.rootElement,I(!1),h.handlePanelConfigChange=()=>{h.dragState||I(!0)},h.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,h.handlePanelConfigChange),typeof MutationObserver<`u`&&h.mountedRootElement&&(h.panelMutationObserver=new MutationObserver(q),h.panelMutationObserver.observe(h.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(N)})),h.handleWindowResize=()=>{h.dragState||I(!0)},typeof window<`u`&&window.addEventListener(`resize`,h.handleWindowResize)}),c(()=>{Y(),h.panelMutationObserver?.disconnect(),h.panelMutationObserver=null,h.handlePanelConfigChange&&h.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,h.handlePanelConfigChange),typeof window<`u`&&h.handleWindowResize&&window.removeEventListener(`resize`,h.handleWindowResize),A()}),J(),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:o,__rue_rest_omit_6:s,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:d,__rue_rest_omit_10:f,rest:p,state:h,resolvedOrientation:_,resolvedStyle:y,verticalDefaultStyle:x,getPanelElements:C,getAvailableSize:T,emitResize:E,applyPanelSizes:D,panelLayoutMatches:O,updateHandleVisuals:k,clearHandles:A,commitSizes:j,rebuildHandles:F,syncPanelsFromDom:I,restoreAppliedLayout:B,scheduleLayoutRestore:H,scheduleMutationSync:K,handlePanelMutations:q,scheduleSyncFromRender:J,teardownDragListeners:Y,handleWindowMouseMove:X,handleWindowMouseUp:Z,startDrag:Q,assignRootElement:e=>{h.rootElement=e},assignOverlayElement:e=>{h.overlayElement=e}}}));return u(r=>{let i=_(`div`,r);t(()=>{C(i,A)});let a=E(i,()=>ge);d(()=>{a()}),t(()=>{h(i,F(F(F(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,I.get()===`vertical`?`flex-col`:void 0),`items-stretch`),n.className))}),t(()=>{x(i,{...H.get(),...B.get(),flexDirection:I.get()===`vertical`?`column`:`row`})}),s(i,`data-rue-splitter-root`,`true`),t(()=>{s(i,`data-rue-splitter-orientation`,String(I.get()))}),t(()=>{s(i,`data-rue-splitter-lazy`,String(n.lazy!==void 0&&n.lazy?`true`:`false`))});let o=b(`rue:children:anchor`);e(i,o),t(()=>{let e=n.children;y(()=>p(e,i,o))});let c=_(`div`,i);e(i,c);let l=E(c,()=>_e);return d(()=>{l()}),h(c,`pointer-events-none absolute inset-0`),s(c,`aria-hidden`,`true`),i})},{Panel:n=>{let{__rue_rest_omit_0:r,__rue_rest_omit_1:a,__rue_rest_omit_2:o,__rue_rest_omit_3:c,__rue_rest_omit_4:l,__rue_rest_omit_5:f,__rue_rest_omit_6:v,__rue_rest_omit_7:S,rest:T,panelState:D,dispatchConfigChange:O,assignPanelElement:k}=w(`useSetup:0:0`,()=>m(()=>{let{className:e,style:t,min:r,max:a,size:o,defaultSize:s,resizable:c,children:l,...u}=n,d=w(`useSetup:1:0`,()=>m(()=>({element:null}))),f=()=>{let e=d.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)};return g(f),i(f),{__rue_rest_omit_0:e,__rue_rest_omit_1:t,__rue_rest_omit_2:r,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:u,panelState:d,dispatchConfigChange:f,assignPanelElement:e=>{d.element=e,e&&f()}}}));return u(r=>{let i=_(`div`,r);t(()=>{C(i,T)});let a=E(i,()=>k);d(()=>{a()}),t(()=>{h(i,F(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,n.className))}),t(()=>{let e=n.style;x(i,e)}),s(i,`data-rue-splitter-panel`,`true`),t(()=>{s(i,`data-rue-splitter-min`,String(n.min==null?void 0:String(n.min)))}),t(()=>{s(i,`data-rue-splitter-max`,String(n.max==null?void 0:String(n.max)))}),t(()=>{s(i,`data-rue-splitter-size`,String(n.size==null?void 0:String(n.size)))}),t(()=>{s(i,`data-rue-splitter-default-size`,String(n.defaultSize==null?void 0:String(n.defaultSize)))}),t(()=>{s(i,`data-rue-splitter-resizable`,String(n.resizable===void 0||n.resizable?`true`:`false`))});let o=_(`div`,i);e(i,o),h(o,`h-full w-full`);let c=b(`rue:children:anchor`);return e(o,c),t(()=>{let e=n.children;y(()=>p(e,o,c))}),i})}}),q=[180,260,160],J=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为别名保持。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保持布局结构。`,type:`boolean`,defaultValue:`true`}],Y=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,oe=n=>u(r=>{let i=_(`div`,r);h(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=_(`table`,i);e(i,a),h(a,`table table-zebra`);let o=_(`thead`,a);e(a,o);let c=_(`tr`,o);e(o,c);let d=_(`th`,c);e(c,d),e(d,l(`属性`));let m=_(`th`,c);e(c,m),e(m,l(`说明`));let g=_(`th`,c);e(c,g),e(g,l(`类型`));let v=_(`th`,c);e(c,v),e(v,l(`默认值`));let x=_(`tbody`,a);e(a,x);let S=b(`rue:list:start`),C=b(`rue:list:end`);e(x,S),e(x,C);let w=new Map;return t(()=>{w=T({items:n.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,i,a,o)=>{p(u(()=>{let r=f(),i=_(`tr`,r);e(r,i),t(()=>{s(i,`key`,String(n.prop))});let a=_(`td`,i);e(i,a);let o=_(`code`,a);e(a,o);let c=b(`rue:slot:anchor`);e(o,c),t(()=>{let e=n.prop;y(()=>p(e,o,c))});let l=_(`td`,i);e(i,l);let u=b(`rue:slot:anchor`);e(l,u),t(()=>{let e=n.description;y(()=>p(e,l,u))});let d=_(`td`,i);e(i,d);let m=_(`code`,d);e(d,m);let h=b(`rue:slot:anchor`);e(m,h),t(()=>{let e=n.type;y(()=>p(e,m,h))});let g=_(`td`,i);e(i,g);let v=_(`code`,g);e(g,v);let x=b(`rue:slot:anchor`);return e(v,x),t(()=>{let e=n.defaultValue;y(()=>p(e,v,x))}),r}),r,i)}})}),i}),$=n=>u(r=>{let i=_(`div`,r);t(()=>{h(i,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${n.className??``}`.trim())});let a=_(`div`,i);e(i,a),h(a,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`);let o=b(`rue:slot:anchor`);e(a,o),t(()=>{let e=n.title;y(()=>p(e,a,o))});let s=_(`div`,i);e(i,s),h(s,`mb-4 text-sm leading-6 text-base-content/70`);let c=b(`rue:slot:anchor`);e(s,c),t(()=>{let e=n.subtitle;y(()=>p(e,s,c))});let l=_(`div`,i);e(i,l),h(l,`min-h-0`);let u=b(`rue:children:anchor`);return e(l,u),t(()=>{let e=n.children;y(()=>p(e,l,u))}),i}),se=()=>{let{controlledSizes:i,controlledResizable:c,controlledStatus:d}=w(`useSetup:0:0`,()=>m(()=>({controlledSizes:w(`ref:1:0`,()=>n([`38%`,`62%`])),controlledResizable:w(`ref:1:1`,()=>n(!0)),controlledStatus:w(`ref:1:2`,()=>n(`等待拖拽`))})));return u(n=>{let m=_(`div`,n);h(m,`space-y-4`);let g=_(`div`,m);e(m,g),h(g,`flex flex-wrap gap-2`);let x=_(`button`,g);e(g,x),s(x,`type`,`button`),h(x,`btn btn-sm`),r(x,`click`,()=>{i.value=[`30%`,`70%`],d.value=`已切到 30 / 70 预设`}),e(x,l(`30 / 70`));let S=_(`button`,g);e(g,S),s(S,`type`,`button`),h(S,`btn btn-sm btn-outline`),r(S,`click`,()=>{i.value=[`50%`,`50%`],d.value=`已重置为 50 / 50`}),e(S,l(`平分`));let C=_(`button`,g);e(g,C),s(C,`type`,`button`),t(()=>{h(C,`btn btn-sm btn-ghost ${c.value?``:`btn-active`}`.trim())}),r(C,`click`,()=>{c.value=!c.value,d.value=c.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`});let w=a(C);e(C,w),t(()=>{o(w,c.value?`锁定左栏`:`恢复拖拽`)});let T=b(`rue:component:anchor`);e(m,T);let E=u(()=>{let n=f(),r=b(`rue:component:anchor`);e(n,r);let s=u(()=>{let n=f(),r=_(`div`,n);e(n,r),h(r,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let i=_(`div`,r);e(r,i),h(i,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),e(i,l(`Filters`));let s=_(`div`,r);e(r,s),h(s,`mb-4 text-sm leading-6 text-base-content/70`),e(s,l(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let c=_(`div`,r);e(r,c),h(c,`text-xs text-base-content/60`);let u=a(c);return e(c,u),t(()=>{o(u,d.value)}),n});t(()=>{let e=v(K.Panel,{size:i.value[0],resizable:c.value,children:s});y(()=>p(e,n,r))});let m=b(`rue:component:anchor`);e(n,m);let g=u(()=>{let n=f(),r=_(`div`,n);e(n,r),h(r,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let s=_(`div`,r);e(r,s),h(s,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),e(s,l(`Results`));let c=_(`div`,r);e(r,c),h(c,`mb-4 text-sm leading-6 text-base-content/70`),e(c,l(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let u=_(`div`,r);e(r,u),h(u,`text-sm text-base-content/70`),e(u,l(`受控尺寸：`));let d=a(u);return e(u,d),t(()=>{o(d,i.value.join(` / `))}),n});return t(()=>{let e=v(K.Panel,{size:i.value[1],children:g});y(()=>p(e,n,m))}),n});return t(()=>{let e=v(K,{style:{height:300},onResize:e=>{i.value=e,d.value=`当前尺寸：${e.join(` / `)}`},children:E});y(()=>p(e,m,T))}),m})},ce=()=>{let{triptychSizes:r,triptychStatus:i}=w(`useSetup:0:0:dup1`,()=>m(()=>({triptychSizes:w(`ref:1:3`,()=>n(q.slice())),triptychStatus:w(`ref:1:4`,()=>n(`双击任意分隔柄可重置`))})));return u(n=>{let s=_(`div`,n);h(s,`space-y-4`);let c=_(`div`,s);e(s,c),h(c,`text-sm text-base-content/65`);let l=a(c);e(c,l),t(()=>{o(l,i.value)});let d=b(`rue:component:anchor`);e(s,d);let m=u(()=>{let n=f(),i=b(`rue:component:anchor`);e(n,i);let a=v($,{title:`Sources`,subtitle:`左侧资源树或文档大纲。`});t(()=>{let e=v(K.Panel,{size:r.value[0],min:120,children:a});y(()=>p(e,n,i))});let o=b(`rue:component:anchor`);e(n,o);let s=v($,{title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`});t(()=>{let e=v(K.Panel,{size:r.value[1],min:180,children:s});y(()=>p(e,n,o))});let c=b(`rue:component:anchor`);e(n,c);let l=v($,{title:`Preview`,subtitle:`右侧实时预览或审阅信息。`});return t(()=>{let e=v(K.Panel,{size:r.value[2],min:120,children:l});y(()=>p(e,n,c))}),n});return t(()=>{let e=v(K,{style:{height:260},onResize:e=>{r.value=e,i.value=`当前布局：${e.join(` / `)}`},onDraggerDoubleClick:()=>{r.value=q.slice(),i.value=`已恢复 Sources / Editor / Preview 默认布局`},children:m});y(()=>p(e,s,d))}),s})},le=()=>{let{lazyStatus:r}=w(`useSetup:0:0:dup2`,()=>m(()=>({lazyStatus:w(`ref:1:5`,()=>n(`拖拽时只移动 handle，释放后才提交尺寸`))})));return u(n=>{let i=_(`div`,n);h(i,`space-y-4`);let s=_(`div`,i);e(i,s),h(s,`text-sm text-base-content/65`);let c=a(s);e(s,c),t(()=>{o(c,r.value)});let d=b(`rue:component:anchor`);e(i,d);let m=u(()=>{let t=f(),n=b(`rue:component:anchor`);e(t,n);let r=v($,{title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:u(()=>{let t=f(),n=_(`div`,t);return e(t,n),h(n,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),e(n,l(`Strategy setup`)),t})});p(v(K.Panel,{defaultSize:`44%`,min:`30%`,children:r}),t,n);let i=b(`rue:component:anchor`);e(t,i);let a=v($,{title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:u(()=>{let t=f(),n=_(`div`,t);e(t,n),h(n,`space-y-2 text-sm text-base-content/70`);let r=_(`div`,n);e(n,r),h(r,`rounded-box bg-base-200/70 px-3 py-2`),e(r,l(`Insight A`));let i=_(`div`,n);e(n,i),h(i,`rounded-box bg-base-200/70 px-3 py-2`),e(i,l(`Insight B`));let a=_(`div`,n);return e(n,a),h(a,`rounded-box bg-base-200/70 px-3 py-2`),e(a,l(`Insight C`)),t})});return p(v(K.Panel,{children:a}),t,i),t});return t(()=>{let e=v(K,{lazy:!0,style:{height:280},onResizeStart:()=>{r.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{r.value=`释放后已提交尺寸：${e.join(` / `)}`},children:m});y(()=>p(e,i,d))}),i})},ue=()=>{let{tabs:r}=w(`useSetup:0:0:dup3`,()=>m(()=>({tabs:{basic:w(`ref:1:6`,()=>n(`preview`)),controlled:w(`ref:1:7`,()=>n(`preview`)),vertical:w(`ref:1:8`,()=>n(`preview`)),reset:w(`ref:1:9`,()=>n(`preview`)),lazy:w(`ref:1:10`,()=>n(`preview`))}})));return u(n=>{let i=f(),c=b(`rue:component:anchor`);return e(i,c),p(v(k,{children:u(()=>{let n=f(),i=_(`div`,n);e(n,i),h(i,`max-w-none prose prose-sm md:prose-base`);let c=_(`h1`,i);e(i,c),e(c,l(`Splitter 分割面板`));let u=_(`p`,i);e(i,u),h(u,`text-sm mt-3 mb-3`),e(u,l(`Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它使用 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。`));let d=_(`h2`,i);e(i,d),e(d,l(`何时使用`));let m=_(`ul`,i);e(i,m);let g=_(`li`,m);e(m,g),e(g,l(`需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。`));let x=_(`li`,m);e(m,x),e(x,l(`需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。`));let S=_(`li`,m);e(m,S),e(S,l(`需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。`));let C=_(`h2`,i);e(i,C),e(C,l(`推荐用法`));let w=_(`p`,i);e(i,w),h(w,`text-sm mt-3 mb-4`),e(w,l(`下面每个 JSX 示例都保持了完整结构，方便直接复制到页面组件里使用。`));let T=b(`rue:component:anchor`);e(i,T),t(()=>{let e=v(A,{title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:r.basic,preview:()=>D(K,{style:{height:280},children:[O(K.Panel,{defaultSize:`40%`,min:`24%`,max:`70%`,children:O($,{title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:D(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Overview`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Metrics`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Deployments`})]})})}),O(K.Panel,{children:O($,{title:`Editor`,subtitle:`右侧保持完整内容区，适合表单、文档或分析结果。`,children:O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70`,children:`这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。`})})})]}),code:Y});y(()=>p(e,i,T))});let E=b(`rue:component:anchor`);e(i,E),t(()=>{let e=v(A,{title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:r.controlled,preview:se,code:X});y(()=>p(e,i,E))});let k=b(`rue:component:anchor`);e(i,k),t(()=>{let e=v(A,{title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:r.vertical,preview:()=>D(K,{orientation:`vertical`,style:{height:520},children:[O(K.Panel,{defaultSize:`32%`,min:`10%`,children:O($,{title:`Summary`,subtitle:`顶部保持关键指标和状态总览。`,children:D(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[O(`div`,{className:`rounded-box bg-success/12 p-3 text-sm`,children:`Success 18`}),O(`div`,{className:`rounded-box bg-warning/12 p-3 text-sm`,children:`Queued 4`}),O(`div`,{className:`rounded-box bg-info/12 p-3 text-sm`,children:`Running 2`})]})})}),O(K.Panel,{children:O($,{title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:O(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70`,children:`这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。`})})})]}),code:Z});y(()=>p(e,i,k))});let j=b(`rue:component:anchor`);e(i,j),t(()=>{let e=v(A,{title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:r.reset,preview:ce,code:Q});y(()=>p(e,i,j))});let M=b(`rue:component:anchor`);e(i,M),t(()=>{let e=v(A,{title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:r.lazy,preview:le,code:ae});y(()=>p(e,i,M))});let N=_(`h2`,i);e(i,N),s(N,`id`,`splitter-api`),e(N,l(`API`));let P=_(`p`,i);e(i,P),h(P,`text-sm mt-3 mb-4`),e(P,l(`Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是`));let F=a(P);e(P,F),o(F,` `);let I=_(`code`,P);e(P,I),e(I,l(`Splitter.Panel`)),e(P,l(`。 如果你在业务里需要把布局状态持久化，优先使用`));let L=a(P);e(P,L),o(L,` `);let R=_(`code`,P);e(P,R),e(R,l(`size`)),e(P,l(`+`));let z=_(`code`,P);e(P,z),e(z,l(`onResize`)),e(P,l(`的受控写法；如果只需要默认占比，用`));let B=_(`code`,P);e(P,B),e(B,l(`defaultSize`)),e(P,l(`即可。`));let V=b(`rue:component:anchor`);return e(i,V),t(()=>{let e=v(oe,{rows:J});y(()=>p(e,i,V))}),n})}),i,c),i})};export{ue as default};
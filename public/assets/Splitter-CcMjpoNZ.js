import{At as e,Cn as t,Ct as n,Lt as r,Mt as i,Nt as a,Tt as o,dt as s,ft as c,ht as l,mt as u,ot as d,pn as f,pt as p,st as m,tn as h,vn as g}from"./context-8lXZvIn-.js";import{a as _,i as v,l as y,n as b,o as x,r as S,t as C}from"./vapor-runtime-ygJWVcNn.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-CMwHgsXf.js";import{n as D,t as O}from"./src-CCTNpCXV.js";import{r as k}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as A}from"./PreviewBlock-ARp---67.js";var j=.5,M=3,N=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),P=()=>{let e=globalThis.__rue_is_server_rendering__;return typeof e==`number`&&e>0},F=(e,t,n)=>Math.min(n,Math.max(t,e)),I=(e,t)=>t?`${e} ${t}`:e,L=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,R=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:L(e.width),minWidth:L(e.minWidth),maxWidth:L(e.maxWidth),height:L(e.height),minHeight:L(e.minHeight),maxHeight:L(e.maxHeight)}},z=e=>e.map(e=>Math.max(0,Math.round(e))),B=e=>e.reduce((e,t)=>e+t,0),V=(e,t)=>{let n=B(e);if(t<=0||n<=j)return e.slice();let r=t/n;return e.map(e=>e*r)},ee=(e,t)=>e.length===t.length&&e.every((e,n)=>Math.abs(e-t[n])<=j),te=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),H=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},U=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:F(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=F(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-B(r);if(Math.abs(e)<=j)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>j?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>j?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=j?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},ne=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},W=(e,t)=>t===`vertical`?e.clientY:e.clientX,G=(e,t)=>e.map(e=>{let n=H(e.min,t)??0,r=H(e.max,t)??t;return{min:F(n,0,t),max:F(Math.max(r,n),n,t)}}),re=(e,t,n)=>{let r=G(e,t),i=n&&n.length===e.length&&B(n)>j?V(n,t):void 0;return U(e.map((e,n)=>{let r=H(e.size,t);if(typeof r==`number`)return r;let a=H(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},ie=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=F(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},ae=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},K=Object.assign(i=>{let{__rue_rest_omit_0:c,__rue_rest_omit_1:l,__rue_rest_omit_2:u,__rue_rest_omit_3:d,__rue_rest_omit_4:f,__rue_rest_omit_5:_,__rue_rest_omit_6:C,__rue_rest_omit_7:T,__rue_rest_omit_8:D,__rue_rest_omit_9:O,__rue_rest_omit_10:k,rest:A,state:j,resolvedOrientation:L,resolvedStyle:V,verticalDefaultStyle:H,getPanelElements:K,getAvailableSize:q,emitResize:J,applyPanelSizes:Y,panelLayoutMatches:X,updateHandleVisuals:Z,clearHandles:Q,commitSizes:oe,rebuildHandles:se,syncPanelsFromDom:$,restoreAppliedLayout:ce,scheduleLayoutRestore:le,scheduleMutationSync:ue,handlePanelMutations:de,scheduleSyncFromRender:fe,teardownDragListeners:pe,handleWindowMouseMove:me,handleWindowMouseUp:he,startDrag:ge,assignRootElement:_e,assignOverlayElement:ve}=w(`useSetup:0:0:dup1`,()=>t(()=>{let{orientation:e,layout:n,vertical:a,lazy:o,className:s,style:c,onDraggerDoubleClick:l,onResizeStart:u,onResize:d,onResizeEnd:f,children:p,...m}=i,h=w(`useSetup:1:1`,()=>t(()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0}))),g=w(`computed:1:2`,()=>r(()=>te(i.orientation,i.layout,i.vertical))),_=g,y=w(`computed:1:3`,()=>r(()=>R(i.style))),b=y,x=w(`computed:1:4`,()=>r(()=>_.get()===`vertical`&&b.get()?.height==null?{height:b.get()?.minHeight??`320px`}:void 0)),C=()=>{let e=h.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},T=()=>ne(h.rootElement??void 0,_.get()),E=e=>{i.onResize&&i.onResize(z(e)),H()},D=e=>{h.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),_.get()===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},O=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?_.get()===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},k=()=>{let e=h.handleRecords,t=h.panelConfigs,n=h.sizeState,r=T();e.forEach((e,a)=>{let o=t[a],s=t[a+1],c=B(n.slice(0,a+1)),l=h.activeHandleIndex===a,u=F((i.lazy!==void 0&&i.lazy&&l?c+h.previewOffset:c)-M/2,0,Math.max(r-M,0));e.root.dataset.rueSplitterHandleActive=l?`true`:`false`,e.root.style.transform=``,_.get()===`vertical`?(e.root.style.top=`${u}px`,e.root.style.left=`0`,e.root.style.height=`${M}px`,e.root.style.width=`100%`):(e.root.style.left=`${u}px`,e.root.style.top=`0`,e.root.style.width=`${M}px`,e.root.style.height=`100%`);let d=!o.resizable||!s?.resizable;e.root.dataset.rueSplitterHandleDisabled=d?`true`:`false`,d&&(e.root.style.cursor=`default`)})},A=()=>{let e=h.overlayElement;e&&(e.innerHTML=``),h.handleRecords=[]},j=(e,t=!1)=>{let n=T(),r=U(e,G(h.panelConfigs,n),n);h.sizeState=r,D(r),k(),t&&E(r)},I=()=>{A();let e=h.overlayElement,t=h.panelConfigs;if(!e||t.length<=1)return;let n=[];t.slice(0,-1).forEach((r,a)=>{let o=t[a+1],s=document.createElement(`div`);s.setAttribute(`role`,`separator`),s.setAttribute(`aria-orientation`,_.get()),s.setAttribute(`aria-label`,`调整面板 ${a+1} 与 ${a+2}`),s.setAttribute(`data-rue-splitter-handle`,String(a)),s.className=_.get()===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,s.addEventListener(`mousedown`,e=>{Q(e,a)}),s.addEventListener(`dblclick`,()=>{i.onDraggerDoubleClick&&i.onDraggerDoubleClick(a)}),(!r.resizable||!o?.resizable)&&(s.dataset.rueSplitterHandleDisabled=`true`,s.style.cursor=`default`),e.appendChild(s),n.push({root:s})}),h.handleRecords=n,k()},L=(e=!0)=>{h.panelElements=C(),h.panelConfigs=h.panelElements.map(ae);let t=h.panelConfigs;if(!t.length){h.sizeState=[],A();return}let n=re(t,T(),e&&h.sizeState.length===t.length?h.sizeState:void 0);ee(h.sizeState,n)||(h.sizeState=n),D(n),I()},V=()=>{let e=C();!e.length||e.length!==h.sizeState.length||e.every((e,t)=>O(e,h.sizeState[t]??0))||(h.panelElements=e,D(h.sizeState),k())},H=()=>{let e=C();e.length===h.sizeState.length&&e.every((e,t)=>O(e,h.sizeState[t]??0))||h.layoutRestorePending||(h.layoutRestorePending=!0,queueMicrotask(()=>{h.layoutRestorePending=!1,h.rootElement&&V()}))},K=e=>{h.mutationSyncPreferCurrent=h.mutationSyncPending?h.mutationSyncPreferCurrent&&e:e,!h.mutationSyncPending&&(h.mutationSyncPending=!0,queueMicrotask(()=>{let e=h.mutationSyncPreferCurrent;if(h.mutationSyncPending=!1,h.mutationSyncPreferCurrent=!0,h.rootElement){if(h.dragState){H();return}L(e)}}))},q=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==h.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&N.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&K(!n)},J=()=>{P()||h.pendingSync||(h.pendingSync=!0,queueMicrotask(()=>{h.pendingSync=!1,!(!h.rootElement||h.dragState)&&L(!1)}))},Y=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,X),window.removeEventListener(`mouseup`,Z))};function X(e){let t=h.dragState;if(!t)return;let n=G(h.panelConfigs,t.availableSize),r=W(e,_.get())-t.startPoint,a=ie(t.startSizes,n,t.index,r),o=a[t.index]-t.startSizes[t.index];if(h.pendingSizes=a,h.previewOffset=i.lazy!==void 0&&i.lazy?o:0,i.lazy!==void 0&&i.lazy){k();return}j(a,!0)}function Z(){let e=h.dragState;if(!e)return;let t=h.sizeState,n=h.panelConfigs,r=i.lazy!==void 0&&i.lazy?h.pendingSizes??e.startSizes:t.length===n.length?t.slice():e.startSizes;i.lazy!==void 0&&i.lazy&&j(r,!0),h.dragState=null,h.pendingSizes=null,h.activeHandleIndex=null,h.previewOffset=0,k(),Y(),i.onResizeEnd&&i.onResizeEnd(z(r))}let Q=(e,t)=>{if(e.button!==0)return;h.panelElements=C(),h.panelConfigs=h.panelElements.map(ae);let n=h.panelConfigs;if(!n[t]||!n[t+1]||!n[t].resizable||!n[t+1].resizable)return;e.preventDefault();let r=T(),a=h.sizeState.length===n.length?h.sizeState.slice():re(n,r);h.dragState={index:t,startPoint:W(e,_.get()),startSizes:a,availableSize:r},h.pendingSizes=null,h.activeHandleIndex=t,h.previewOffset=0,k(),typeof window<`u`&&(window.addEventListener(`mousemove`,X),window.addEventListener(`mouseup`,Z)),i.onResizeStart&&i.onResizeStart(z(a))};return S(()=>{P()||(h.mountedRootElement=h.rootElement,L(!1),h.handlePanelConfigChange=()=>{h.dragState||L(!0)},h.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,h.handlePanelConfigChange),typeof MutationObserver<`u`&&h.mountedRootElement&&(h.panelMutationObserver=new MutationObserver(q),h.panelMutationObserver.observe(h.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(N)})),h.handleWindowResize=()=>{h.dragState||L(!0)},typeof window<`u`&&window.addEventListener(`resize`,h.handleWindowResize))}),v(()=>{Y(),h.panelMutationObserver?.disconnect(),h.panelMutationObserver=null,h.handlePanelConfigChange&&h.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,h.handlePanelConfigChange),typeof window<`u`&&h.handleWindowResize&&window.removeEventListener(`resize`,h.handleWindowResize),A()}),J(),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:a,__rue_rest_omit_3:o,__rue_rest_omit_4:s,__rue_rest_omit_5:c,__rue_rest_omit_6:l,__rue_rest_omit_7:u,__rue_rest_omit_8:d,__rue_rest_omit_9:f,__rue_rest_omit_10:p,rest:m,state:h,resolvedOrientation:g,resolvedStyle:y,verticalDefaultStyle:x,getPanelElements:C,getAvailableSize:T,emitResize:E,applyPanelSizes:D,panelLayoutMatches:O,updateHandleVisuals:k,clearHandles:A,commitSizes:j,rebuildHandles:I,syncPanelsFromDom:L,restoreAppliedLayout:V,scheduleLayoutRestore:H,scheduleMutationSync:K,handlePanelMutations:q,scheduleSyncFromRender:J,teardownDragListeners:Y,handleWindowMouseMove:X,handleWindowMouseUp:Z,startDrag:Q,assignRootElement:e=>{h.rootElement=e},assignOverlayElement:e=>{h.overlayElement=e}}}));return y(t=>{let r=p(`div`,t);h(()=>{a(r,A)});let c=E(r,()=>_e);b(()=>{c()}),h(()=>{o(r,I(I(I(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,L.get()===`vertical`?`flex-col`:void 0),`items-stretch`),i.className))}),h(()=>{let t={...H.get(),...V.get(),flexDirection:L.get()===`vertical`?`column`:`row`};e(r,t)}),n(r,`data-rue-splitter-root`,`true`),h(()=>{n(r,`data-rue-splitter-orientation`,String(L.get()))}),h(()=>{n(r,`data-rue-splitter-lazy`,String(i.lazy!==void 0&&i.lazy?`true`:`false`))});let l=s(`rue:children:anchor`);m(r,l),h(()=>{let e=i.children;g(()=>x(e,r,l))});let u=p(`div`,r);m(r,u);let d=E(u,()=>ve);return b(()=>{d()}),o(u,`pointer-events-none absolute inset-0`),n(u,`aria-hidden`,`true`),r})},{Panel:r=>{let{__rue_rest_omit_0:i,__rue_rest_omit_1:c,__rue_rest_omit_2:l,__rue_rest_omit_3:u,__rue_rest_omit_4:d,__rue_rest_omit_5:f,__rue_rest_omit_6:v,__rue_rest_omit_7:C,rest:T,panelState:D,dispatchConfigChange:O,assignPanelElement:k}=w(`useSetup:0:0`,()=>t(()=>{let{className:e,style:n,min:i,max:a,size:o,defaultSize:s,resizable:c,children:l,...u}=r,d=w(`useSetup:1:0`,()=>t(()=>({element:null}))),f=()=>{let e=d.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)};return S(f),_(f),{__rue_rest_omit_0:e,__rue_rest_omit_1:n,__rue_rest_omit_2:i,__rue_rest_omit_3:a,__rue_rest_omit_4:o,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,rest:u,panelState:d,dispatchConfigChange:f,assignPanelElement:e=>{d.element=e,e&&f()}}}));return y(t=>{let i=p(`div`,t);h(()=>{a(i,T)});let c=E(i,()=>k);b(()=>{c()}),h(()=>{o(i,I(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,r.className))}),h(()=>{let t=r.style;e(i,t)}),n(i,`data-rue-splitter-panel`,`true`),h(()=>{n(i,`data-rue-splitter-min`,String(r.min==null?void 0:String(r.min)))}),h(()=>{n(i,`data-rue-splitter-max`,String(r.max==null?void 0:String(r.max)))}),h(()=>{n(i,`data-rue-splitter-size`,String(r.size==null?void 0:String(r.size)))}),h(()=>{n(i,`data-rue-splitter-default-size`,String(r.defaultSize==null?void 0:String(r.defaultSize)))}),h(()=>{n(i,`data-rue-splitter-resizable`,String(r.resizable===void 0||r.resizable?`true`:`false`))});let l=p(`div`,i);m(i,l),o(l,`h-full w-full`);let u=s(`rue:children:anchor`);return m(l,u),h(()=>{let e=r.children;g(()=>x(e,l,u))}),i})}}),q=[180,260,160],J=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为别名保持。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保持布局结构。`,type:`boolean`,defaultValue:`true`}],Y=`import type { FC } from '@rue-js/rue'
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

export default ResettableSplitterDemo`,oe=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,se=e=>y(t=>{let r=p(`div`,t);o(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=p(`table`,r);m(r,i),o(i,`table table-zebra`);let a=p(`thead`,i);m(i,a);let l=p(`tr`,a);m(a,l);let d=p(`th`,l);m(l,d),m(d,u(`属性`));let f=p(`th`,l);m(l,f),m(f,u(`说明`));let _=p(`th`,l);m(l,_),m(_,u(`类型`));let v=p(`th`,l);m(l,v),m(v,u(`默认值`));let b=p(`tbody`,i);m(i,b);let S=s(`rue:list:start`),C=s(`rue:list:end`);m(b,S),m(b,C);let w=new Map;return h(()=>{w=T({items:e.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,t,r,i,a)=>{x(y(()=>{let t=c(),r=p(`tr`,t);m(t,r),h(()=>{n(r,`key`,String(e.prop))});let i=p(`td`,r);m(r,i);let a=p(`code`,i);m(i,a);let o=s(`rue:slot:anchor`);m(a,o),h(()=>{let t=e.prop;g(()=>x(t,a,o))});let l=p(`td`,r);m(r,l);let u=s(`rue:slot:anchor`);m(l,u),h(()=>{let t=e.description;g(()=>x(t,l,u))});let d=p(`td`,r);m(r,d);let f=p(`code`,d);m(d,f);let _=s(`rue:slot:anchor`);m(f,_),h(()=>{let t=e.type;g(()=>x(t,f,_))});let v=p(`td`,r);m(r,v);let y=p(`code`,v);m(v,y);let b=s(`rue:slot:anchor`);return m(y,b),h(()=>{let t=e.defaultValue;g(()=>x(t,y,b))}),t}),t,r)}})}),r}),$=e=>y(t=>{let n=p(`div`,t);h(()=>{o(n,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${e.className??``}`.trim())});let r=p(`div`,n);m(n,r),o(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`);let i=s(`rue:slot:anchor`);m(r,i),h(()=>{let t=e.title;g(()=>x(t,r,i))});let a=p(`div`,n);m(n,a),o(a,`mb-4 text-sm leading-6 text-base-content/70`);let c=s(`rue:slot:anchor`);m(a,c),h(()=>{let t=e.subtitle;g(()=>x(t,a,c))});let l=p(`div`,n);m(n,l),o(l,`min-h-0`);let u=s(`rue:children:anchor`);return m(l,u),h(()=>{let t=e.children;g(()=>x(t,l,u))}),n}),ce=()=>{let{controlledSizes:e,controlledResizable:r,controlledStatus:a}=w(`useSetup:0:0`,()=>t(()=>({controlledSizes:w(`ref:1:0`,()=>f([`38%`,`62%`])),controlledResizable:w(`ref:1:1`,()=>f(!0)),controlledStatus:w(`ref:1:2`,()=>f(`等待拖拽`))})));return y(t=>{let f=p(`div`,t);o(f,`space-y-4`);let _=p(`div`,f);m(f,_),o(_,`flex flex-wrap gap-2`);let v=p(`button`,_);m(_,v),n(v,`type`,`button`),o(v,`btn btn-sm`),d(v,`click`,()=>{e.value=[`30%`,`70%`],a.value=`已切到 30 / 70 预设`}),m(v,u(`30 / 70`));let b=p(`button`,_);m(_,b),n(b,`type`,`button`),o(b,`btn btn-sm btn-outline`),d(b,`click`,()=>{e.value=[`50%`,`50%`],a.value=`已重置为 50 / 50`}),m(b,u(`平分`));let S=p(`button`,_);m(_,S),n(S,`type`,`button`),h(()=>{o(S,`btn btn-sm btn-ghost ${r.value?``:`btn-active`}`.trim())}),d(S,`click`,()=>{r.value=!r.value,a.value=r.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`});let w=l(S);m(S,w),h(()=>{i(w,r.value?`锁定左栏`:`恢复拖拽`)});let T=s(`rue:component:anchor`);m(f,T);let E=y(()=>{let t=c(),n=s(`rue:component:anchor`);m(t,n);let d=y(()=>{let e=c(),t=p(`div`,e);m(e,t),o(t,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let n=p(`div`,t);m(t,n),o(n,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),m(n,u(`Filters`));let r=p(`div`,t);m(t,r),o(r,`mb-4 text-sm leading-6 text-base-content/70`),m(r,u(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let s=p(`div`,t);m(t,s),o(s,`text-xs text-base-content/60`);let d=l(s);return m(s,d),h(()=>{i(d,a.value)}),e});h(()=>{let i=C(K.Panel,{size:e.value[0],resizable:r.value,children:d});g(()=>x(i,t,n))});let f=s(`rue:component:anchor`);m(t,f);let _=y(()=>{let t=c(),n=p(`div`,t);m(t,n),o(n,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let r=p(`div`,n);m(n,r),o(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),m(r,u(`Results`));let a=p(`div`,n);m(n,a),o(a,`mb-4 text-sm leading-6 text-base-content/70`),m(a,u(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let s=p(`div`,n);m(n,s),o(s,`text-sm text-base-content/70`),m(s,u(`受控尺寸：`));let d=l(s);return m(s,d),h(()=>{i(d,e.value.join(` / `))}),t});return h(()=>{let n=C(K.Panel,{size:e.value[1],children:_});g(()=>x(n,t,f))}),t});return h(()=>{let t=C(K,{style:{height:300},onResize:t=>{e.value=t,a.value=`当前尺寸：${t.join(` / `)}`},children:E});g(()=>x(t,f,T))}),f})},le=()=>{let{triptychSizes:e,triptychStatus:n}=w(`useSetup:0:0:dup1`,()=>t(()=>({triptychSizes:w(`ref:1:3`,()=>f(q.slice())),triptychStatus:w(`ref:1:4`,()=>f(`双击任意分隔柄可重置`))})));return y(t=>{let r=p(`div`,t);o(r,`space-y-4`);let a=p(`div`,r);m(r,a),o(a,`text-sm text-base-content/65`);let u=l(a);m(a,u),h(()=>{i(u,n.value)});let d=s(`rue:component:anchor`);m(r,d);let f=y(()=>{let t=c(),n=s(`rue:component:anchor`);m(t,n);let r=C($,{title:`Sources`,subtitle:`左侧资源树或文档大纲。`});h(()=>{let i=C(K.Panel,{size:e.value[0],min:120,children:r});g(()=>x(i,t,n))});let i=s(`rue:component:anchor`);m(t,i);let a=C($,{title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`});h(()=>{let n=C(K.Panel,{size:e.value[1],min:180,children:a});g(()=>x(n,t,i))});let o=s(`rue:component:anchor`);m(t,o);let l=C($,{title:`Preview`,subtitle:`右侧实时预览或审阅信息。`});return h(()=>{let n=C(K.Panel,{size:e.value[2],min:120,children:l});g(()=>x(n,t,o))}),t});return h(()=>{let t=C(K,{style:{height:260},onResize:t=>{e.value=t,n.value=`当前布局：${t.join(` / `)}`},onDraggerDoubleClick:()=>{e.value=q.slice(),n.value=`已恢复 Sources / Editor / Preview 默认布局`},children:f});g(()=>x(t,r,d))}),r})},ue=()=>{let{lazyStatus:e}=w(`useSetup:0:0:dup2`,()=>t(()=>({lazyStatus:w(`ref:1:5`,()=>f(`拖拽时只移动 handle，释放后才提交尺寸`))})));return y(t=>{let n=p(`div`,t);o(n,`space-y-4`);let r=p(`div`,n);m(n,r),o(r,`text-sm text-base-content/65`);let a=l(r);m(r,a),h(()=>{i(a,e.value)});let d=s(`rue:component:anchor`);m(n,d);let f=y(()=>{let e=c(),t=s(`rue:component:anchor`);m(e,t);let n=C($,{title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:y(()=>{let e=c(),t=p(`div`,e);return m(e,t),o(t,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),m(t,u(`Strategy setup`)),e})});x(C(K.Panel,{defaultSize:`44%`,min:`30%`,children:n}),e,t);let r=s(`rue:component:anchor`);m(e,r);let i=C($,{title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:y(()=>{let e=c(),t=p(`div`,e);m(e,t),o(t,`space-y-2 text-sm text-base-content/70`);let n=p(`div`,t);m(t,n),o(n,`rounded-box bg-base-200/70 px-3 py-2`),m(n,u(`Insight A`));let r=p(`div`,t);m(t,r),o(r,`rounded-box bg-base-200/70 px-3 py-2`),m(r,u(`Insight B`));let i=p(`div`,t);return m(t,i),o(i,`rounded-box bg-base-200/70 px-3 py-2`),m(i,u(`Insight C`)),e})});return x(C(K.Panel,{children:i}),e,r),e});return h(()=>{let t=C(K,{lazy:!0,style:{height:280},onResizeStart:()=>{e.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:t=>{e.value=`释放后已提交尺寸：${t.join(` / `)}`},children:f});g(()=>x(t,n,d))}),n})},de=()=>{let{tabs:e}=w(`useSetup:0:0:dup3`,()=>t(()=>({tabs:{basic:w(`ref:1:6`,()=>f(`preview`)),controlled:w(`ref:1:7`,()=>f(`preview`)),vertical:w(`ref:1:8`,()=>f(`preview`)),reset:w(`ref:1:9`,()=>f(`preview`)),lazy:w(`ref:1:10`,()=>f(`preview`))}})));return y(t=>{let r=c(),a=s(`rue:component:anchor`);return m(r,a),x(C(k,{children:y(()=>{let t=c(),r=p(`div`,t);m(t,r),o(r,`max-w-none prose prose-sm md:prose-base`);let a=p(`h1`,r);m(r,a),m(a,u(`Splitter 分割面板`));let d=p(`p`,r);m(r,d),o(d,`text-sm mt-3 mb-3`),m(d,u(`Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它使用 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。`));let f=p(`h2`,r);m(r,f),m(f,u(`何时使用`));let _=p(`ul`,r);m(r,_);let v=p(`li`,_);m(_,v),m(v,u(`需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。`));let y=p(`li`,_);m(_,y),m(y,u(`需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。`));let b=p(`li`,_);m(_,b),m(b,u(`需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。`));let S=p(`h2`,r);m(r,S),m(S,u(`推荐用法`));let w=p(`p`,r);m(r,w),o(w,`text-sm mt-3 mb-4`),m(w,u(`下面每个 JSX 示例都保持了完整结构，方便直接复制到页面组件里使用。`));let T=s(`rue:component:anchor`);m(r,T),h(()=>{let t=C(A,{title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:e.basic,preview:()=>D(K,{style:{height:280},children:[O(K.Panel,{defaultSize:`40%`,min:`24%`,max:`70%`,children:O($,{title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:D(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Overview`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Metrics`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Deployments`})]})})}),O(K.Panel,{children:O($,{title:`Editor`,subtitle:`右侧保持完整内容区，适合表单、文档或分析结果。`,children:O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70`,children:`这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。`})})})]}),code:Y});g(()=>x(t,r,T))});let E=s(`rue:component:anchor`);m(r,E),h(()=>{let t=C(A,{title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:e.controlled,preview:ce,code:X});g(()=>x(t,r,E))});let k=s(`rue:component:anchor`);m(r,k),h(()=>{let t=C(A,{title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:e.vertical,preview:()=>D(K,{orientation:`vertical`,style:{height:520},children:[O(K.Panel,{defaultSize:`32%`,min:`10%`,children:O($,{title:`Summary`,subtitle:`顶部保持关键指标和状态总览。`,children:D(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[O(`div`,{className:`rounded-box bg-success/12 p-3 text-sm`,children:`Success 18`}),O(`div`,{className:`rounded-box bg-warning/12 p-3 text-sm`,children:`Queued 4`}),O(`div`,{className:`rounded-box bg-info/12 p-3 text-sm`,children:`Running 2`})]})})}),O(K.Panel,{children:O($,{title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:O(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70`,children:`这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。`})})})]}),code:Z});g(()=>x(t,r,k))});let j=s(`rue:component:anchor`);m(r,j),h(()=>{let t=C(A,{title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:e.reset,preview:le,code:Q});g(()=>x(t,r,j))});let M=s(`rue:component:anchor`);m(r,M),h(()=>{let t=C(A,{title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:e.lazy,preview:ue,code:oe});g(()=>x(t,r,M))});let N=p(`h2`,r);m(r,N),n(N,`id`,`splitter-api`),m(N,u(`API`));let P=p(`p`,r);m(r,P),o(P,`text-sm mt-3 mb-4`),m(P,u(`Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是`));let F=l(P);m(P,F),i(F,` `);let I=p(`code`,P);m(P,I),m(I,u(`Splitter.Panel`)),m(P,u(`。 如果你在业务里需要把布局状态持久化，优先使用`));let L=l(P);m(P,L),i(L,` `);let R=p(`code`,P);m(P,R),m(R,u(`size`)),m(P,u(`+`));let z=p(`code`,P);m(P,z),m(z,u(`onResize`)),m(P,u(`的受控写法；如果只需要默认占比，用`));let B=p(`code`,P);m(P,B),m(B,u(`defaultSize`)),m(P,u(`即可。`));let V=s(`rue:component:anchor`);return m(r,V),h(()=>{let e=C(se,{rows:J});g(()=>x(e,r,V))}),t})}),r,a),r})};export{de as default};
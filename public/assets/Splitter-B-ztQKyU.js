import{$ as e,Q as t,Qt as n,Wt as r,X as i,Y as a,Yt as o,a as s,et as c,gt as l,ht as u,i as d,l as f,lt as p,n as m,nt as h,o as g,pt as _,r as v,st as y,t as b,tt as x,vt as S,zt as C}from"./vapor-runtime-CXIalONM.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as D,i as O}from"./persistentSidebarPlayground-DBDp2zjv.js";import{r as k}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as A}from"./PreviewBlock-RQJhyX9w.js";var j=.5,M=3,N=new Set([`data-rue-splitter-min`,`data-rue-splitter-max`,`data-rue-splitter-size`,`data-rue-splitter-default-size`,`data-rue-splitter-resizable`]),P=(e,t,n)=>Math.min(n,Math.max(t,e)),F=(e,t)=>t?`${e} ${t}`:e,I=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,L=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:I(e.width),minWidth:I(e.minWidth),maxWidth:I(e.maxWidth),height:I(e.height),minHeight:I(e.minHeight),maxHeight:I(e.maxHeight)}},R=e=>e.map(e=>Math.max(0,Math.round(e))),z=e=>e.reduce((e,t)=>e+t,0),B=(e,t)=>{let n=z(e);if(t<=0||n<=j)return e.slice();let r=t/n;return e.map(e=>e*r)},V=(e,t)=>e.length===t.length?e.every((e,n)=>Math.abs(e-t[n])<=j):!1,ee=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),H=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},U=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:P(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=P(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-z(r);if(Math.abs(e)<=j)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>j?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>j?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=j?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},te=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},W=(e,t)=>t===`vertical`?e.clientY:e.clientX,G=(e,t)=>e.map(e=>{let n=H(e.min,t)??0,r=H(e.max,t)??t;return{min:P(n,0,t),max:P(Math.max(r,n),n,t)}}),ne=(e,t,n)=>{let r=G(e,t),i=n&&n.length===e.length&&z(n)>j?B(n,t):void 0;return U(e.map((e,n)=>{let r=H(e.size,t);if(typeof r==`number`)return r;let a=H(e.defaultSize,t);if(typeof a==`number`)return a;if(i)return i[n]}),r,t)},re=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=P(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},ie=e=>{let t=t=>e.getAttribute(t)??void 0;return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:((t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`})(`data-rue-splitter-resizable`,!0)}},K=Object.assign(e=>{let{__rue_rest_omit_0:a,__rue_rest_omit_1:s,__rue_rest_omit_2:u,__rue_rest_omit_3:h,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:C,__rue_rest_omit_7:T,__rue_rest_omit_8:D,__rue_rest_omit_9:O,__rue_rest_omit_10:k,rest:A,state:j,resolvedOrientation:I,resolvedStyle:B,verticalDefaultStyle:H,getPanelElements:K,getAvailableSize:q,emitResize:J,applyPanelSizes:Y,panelLayoutMatches:X,updateHandleVisuals:Z,clearHandles:Q,commitSizes:ae,rebuildHandles:oe,syncPanelsFromDom:$,restoreAppliedLayout:se,scheduleLayoutRestore:ce,scheduleMutationSync:le,handlePanelMutations:ue,scheduleSyncFromRender:de,teardownDragListeners:fe,handleWindowMouseMove:pe,handleWindowMouseUp:me,startDrag:he,assignRootElement:ge,assignOverlayElement:_e}=w(`useSetup:0:0:dup1`,()=>o(()=>{let{orientation:t,layout:n,vertical:r,lazy:i,className:a,style:s,onDraggerDoubleClick:c,onResizeStart:l,onResize:u,onResizeEnd:f,children:p,...m}=e,h=w(`useSetup:1:1`,()=>o(()=>({rootElement:null,overlayElement:null,dragState:null,panelElements:[],panelConfigs:[],sizeState:[],handleRecords:[],pendingSizes:null,activeHandleIndex:null,pendingSync:!1,previewOffset:0,mountedRootElement:null,handlePanelConfigChange:null,handleWindowResize:null,panelMutationObserver:null,layoutRestorePending:!1,mutationSyncPending:!1,mutationSyncPreferCurrent:!0}))),g=w(`computed:1:2`,()=>S(()=>ee(e.orientation,e.layout,e.vertical))),_=g,y=w(`computed:1:3`,()=>S(()=>L(e.style))),b=y,x=w(`computed:1:4`,()=>S(()=>_.get()===`vertical`&&b.get()?.height==null?{height:b.get()?.minHeight??`320px`}:void 0)),C=()=>{let e=h.rootElement;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},T=()=>te(h.rootElement??void 0,_.get()),E=t=>{e.onResize&&e.onResize(R(t)),H()},D=e=>{h.panelElements.forEach((t,n)=>{let r=e[n]??0;t.dataset.rueSplitterPanelIndex=String(n);let i=`${r}px`;t.style.flex!==`0 0 auto`&&(t.style.flex=`0 0 auto`),t.style.flexBasis!==i&&(t.style.flexBasis=i),_.get()===`vertical`?(t.style.height!==i&&(t.style.height=i),t.style.width!==``&&(t.style.width=``)):(t.style.width!==i&&(t.style.width=i),t.style.height!==``&&(t.style.height=``))})},O=(e,t)=>{let n=`${t}px`;return e.style.flexBasis===n?_.get()===`vertical`?e.style.height===n&&e.style.width===``:e.style.width===n&&e.style.height===``:!1},k=()=>{let t=h.handleRecords,n=h.panelConfigs,r=h.sizeState,i=T();t.forEach((t,a)=>{let o=n[a],s=n[a+1],c=z(r.slice(0,a+1)),l=h.activeHandleIndex===a,u=P((e.lazy!==void 0&&e.lazy&&l?c+h.previewOffset:c)-M/2,0,Math.max(i-M,0));t.root.dataset.rueSplitterHandleActive=l?`true`:`false`,t.root.style.transform=``,_.get()===`vertical`?(t.root.style.top=`${u}px`,t.root.style.left=`0`,t.root.style.height=`${M}px`,t.root.style.width=`100%`):(t.root.style.left=`${u}px`,t.root.style.top=`0`,t.root.style.width=`${M}px`,t.root.style.height=`100%`);let d=!o.resizable||!s?.resizable;t.root.dataset.rueSplitterHandleDisabled=d?`true`:`false`,d&&(t.root.style.cursor=`default`)})},A=()=>{let e=h.overlayElement;e&&(e.innerHTML=``),h.handleRecords=[]},j=(e,t=!1)=>{let n=T(),r=U(e,G(h.panelConfigs,n),n);h.sizeState=r,D(r),k(),t&&E(r)},F=()=>{A();let t=h.overlayElement,n=h.panelConfigs;if(!t||n.length<=1)return;let r=[];n.slice(0,-1).forEach((i,a)=>{let o=n[a+1],s=document.createElement(`div`);s.setAttribute(`role`,`separator`),s.setAttribute(`aria-orientation`,_.get()),s.setAttribute(`aria-label`,`调整面板 ${a+1} 与 ${a+2}`),s.setAttribute(`data-rue-splitter-handle`,String(a)),s.className=_.get()===`vertical`?`pointer-events-auto absolute z-10 h-[3px] w-full select-none cursor-row-resize bg-base-300/90 transition-colors hover:bg-primary/70`:`pointer-events-auto absolute z-10 h-full w-[3px] select-none cursor-col-resize bg-base-300/90 transition-colors hover:bg-primary/70`,s.addEventListener(`mousedown`,e=>{Q(e,a)}),s.addEventListener(`dblclick`,()=>{e.onDraggerDoubleClick&&e.onDraggerDoubleClick(a)}),(!i.resizable||!o?.resizable)&&(s.dataset.rueSplitterHandleDisabled=`true`,s.style.cursor=`default`),t.appendChild(s),r.push({root:s})}),h.handleRecords=r,k()},I=(e=!0)=>{h.panelElements=C(),h.panelConfigs=h.panelElements.map(ie);let t=h.panelConfigs;if(!t.length){h.sizeState=[],A();return}let n=ne(t,T(),e&&h.sizeState.length===t.length?h.sizeState:void 0);V(h.sizeState,n)||(h.sizeState=n),D(n),F()},B=()=>{let e=C();!e.length||e.length!==h.sizeState.length||e.every((e,t)=>O(e,h.sizeState[t]??0))||(h.panelElements=e,D(h.sizeState),k())},H=()=>{let e=C();e.length===h.sizeState.length&&e.every((e,t)=>O(e,h.sizeState[t]??0))||h.layoutRestorePending||(h.layoutRestorePending=!0,queueMicrotask(()=>{h.layoutRestorePending=!1,h.rootElement&&B()}))},K=e=>{h.mutationSyncPreferCurrent=h.mutationSyncPending?h.mutationSyncPreferCurrent&&e:e,!h.mutationSyncPending&&(h.mutationSyncPending=!0,queueMicrotask(()=>{let e=h.mutationSyncPreferCurrent;if(h.mutationSyncPending=!1,h.mutationSyncPreferCurrent=!0,h.rootElement){if(h.dragState){H();return}I(e)}}))},q=e=>{let t=!1,n=!1;e.forEach(e=>{if(e.type===`childList`){if(e.target!==h.rootElement)return;[...e.addedNodes,...e.removedNodes].some(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`)&&(t=!0);return}if(e.type!==`attributes`)return;let r=e.target;r instanceof HTMLElement&&r.getAttribute(`data-rue-splitter-panel`)===`true`&&e.attributeName&&N.has(e.attributeName)&&(t=!0,e.attributeName===`data-rue-splitter-size`&&(n=!0))}),t&&K(!n)},J=()=>{h.pendingSync||(h.pendingSync=!0,queueMicrotask(()=>{h.pendingSync=!1,!(!h.rootElement||h.dragState)&&I(!1)}))},Y=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,X),window.removeEventListener(`mouseup`,Z))};function X(t){let n=h.dragState;if(!n)return;let r=G(h.panelConfigs,n.availableSize),i=W(t,_.get())-n.startPoint,a=re(n.startSizes,r,n.index,i),o=a[n.index]-n.startSizes[n.index];if(h.pendingSizes=a,h.previewOffset=e.lazy!==void 0&&e.lazy?o:0,e.lazy!==void 0&&e.lazy){k();return}j(a,!0)}function Z(){let t=h.dragState;if(!t)return;let n=h.sizeState,r=h.panelConfigs,i=e.lazy!==void 0&&e.lazy?h.pendingSizes??t.startSizes:n.length===r.length?n.slice():t.startSizes;e.lazy!==void 0&&e.lazy&&j(i,!0),h.dragState=null,h.pendingSizes=null,h.activeHandleIndex=null,h.previewOffset=0,k(),Y(),e.onResizeEnd&&e.onResizeEnd(R(i))}let Q=(t,n)=>{if(t.button!==0)return;h.panelElements=C(),h.panelConfigs=h.panelElements.map(ie);let r=h.panelConfigs;if(!r[n]||!r[n+1]||!r[n].resizable||!r[n+1].resizable)return;t.preventDefault();let i=T(),a=h.sizeState.length===r.length?h.sizeState.slice():ne(r,i);h.dragState={index:n,startPoint:W(t,_.get()),startSizes:a,availableSize:i},h.pendingSizes=null,h.activeHandleIndex=n,h.previewOffset=0,k(),typeof window<`u`&&(window.addEventListener(`mousemove`,X),window.addEventListener(`mouseup`,Z)),e.onResizeStart&&e.onResizeStart(R(a))};return v(()=>{h.mountedRootElement=h.rootElement,I(!1),h.handlePanelConfigChange=()=>{h.dragState||I(!0)},h.mountedRootElement?.addEventListener(`rue-splitter-panel-config-change`,h.handlePanelConfigChange),typeof MutationObserver<`u`&&h.mountedRootElement&&(h.panelMutationObserver=new MutationObserver(q),h.panelMutationObserver.observe(h.mountedRootElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:Array.from(N)})),h.handleWindowResize=()=>{h.dragState||I(!0)},typeof window<`u`&&window.addEventListener(`resize`,h.handleWindowResize)}),d(()=>{Y(),h.panelMutationObserver?.disconnect(),h.panelMutationObserver=null,h.handlePanelConfigChange&&h.mountedRootElement?.removeEventListener(`rue-splitter-panel-config-change`,h.handlePanelConfigChange),typeof window<`u`&&h.handleWindowResize&&window.removeEventListener(`resize`,h.handleWindowResize),A()}),J(),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:s,__rue_rest_omit_6:c,__rue_rest_omit_7:l,__rue_rest_omit_8:u,__rue_rest_omit_9:f,__rue_rest_omit_10:p,rest:m,state:h,resolvedOrientation:g,resolvedStyle:y,verticalDefaultStyle:x,getPanelElements:C,getAvailableSize:T,emitResize:E,applyPanelSizes:D,panelLayoutMatches:O,updateHandleVisuals:k,clearHandles:A,commitSizes:j,rebuildHandles:F,syncPanelsFromDom:I,restoreAppliedLayout:B,scheduleLayoutRestore:H,scheduleMutationSync:K,handlePanelMutations:q,scheduleSyncFromRender:J,teardownDragListeners:Y,handleWindowMouseMove:X,handleWindowMouseUp:Z,startDrag:Q,assignRootElement:e=>{h.rootElement=e},assignOverlayElement:e=>{h.overlayElement=e}}}));return f(a=>{let o=c(`div`,a);n(()=>{l(o,A)});let s=E(o,()=>ge);m(()=>{s()}),n(()=>{p(o,F(F(F(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,I.get()===`vertical`?`flex-col`:void 0),`items-stretch`),e.className))}),n(()=>{_(o,{...H.get(),...B.get(),flexDirection:I.get()===`vertical`?`column`:`row`})}),y(o,`data-rue-splitter-root`,`true`),n(()=>{y(o,`data-rue-splitter-orientation`,String(I.get()))}),n(()=>{y(o,`data-rue-splitter-lazy`,String(e.lazy!==void 0&&e.lazy?`true`:`false`))});let u=t(`rue:children:anchor`);i(o,u),n(()=>{let t=e.children;r(()=>g(t,o,u))});let d=c(`div`,o);i(o,d);let f=E(d,()=>_e);return m(()=>{f()}),p(d,`pointer-events-none absolute inset-0`),y(d,`aria-hidden`,`true`),o})},{Panel:e=>{let{__rue_rest_omit_0:a,__rue_rest_omit_1:u,__rue_rest_omit_2:d,__rue_rest_omit_3:h,__rue_rest_omit_4:b,__rue_rest_omit_5:x,__rue_rest_omit_6:S,__rue_rest_omit_7:C,rest:T,panelState:D,dispatchConfigChange:O,assignPanelElement:k}=w(`useSetup:0:0`,()=>o(()=>{let{className:t,style:n,min:r,max:i,size:a,defaultSize:c,resizable:l,children:u,...d}=e,f=w(`useSetup:1:0`,()=>o(()=>({element:null}))),p=()=>{let e=f.element;if(!e)return;let t=()=>{e.isConnected&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))};queueMicrotask(()=>{t()}),setTimeout(t,0)};return v(p),s(p),{__rue_rest_omit_0:t,__rue_rest_omit_1:n,__rue_rest_omit_2:r,__rue_rest_omit_3:i,__rue_rest_omit_4:a,__rue_rest_omit_5:c,__rue_rest_omit_6:l,__rue_rest_omit_7:u,rest:d,panelState:f,dispatchConfigChange:p,assignPanelElement:e=>{f.element=e,e&&p()}}}));return f(a=>{let o=c(`div`,a);n(()=>{l(o,T)});let s=E(o,()=>k);m(()=>{s()}),n(()=>{p(o,F(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,e.className))}),n(()=>{let t=e.style;_(o,t)}),y(o,`data-rue-splitter-panel`,`true`),n(()=>{y(o,`data-rue-splitter-min`,String(e.min==null?void 0:String(e.min)))}),n(()=>{y(o,`data-rue-splitter-max`,String(e.max==null?void 0:String(e.max)))}),n(()=>{y(o,`data-rue-splitter-size`,String(e.size==null?void 0:String(e.size)))}),n(()=>{y(o,`data-rue-splitter-default-size`,String(e.defaultSize==null?void 0:String(e.defaultSize)))}),n(()=>{y(o,`data-rue-splitter-resizable`,String(e.resizable===void 0||e.resizable?`true`:`false`))});let u=c(`div`,o);i(o,u),p(u,`h-full w-full`);let d=t(`rue:children:anchor`);return i(u,d),n(()=>{let t=e.children;r(()=>g(t,u,d))}),o})}}),q=[180,260,160],J=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为兼容别名保留。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保留布局结构。`,type:`boolean`,defaultValue:`true`}],Y=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,oe=a=>f(o=>{let s=c(`div`,o);p(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=c(`table`,s);i(s,l),p(l,`table table-zebra`);let u=c(`thead`,l);i(l,u);let d=c(`tr`,u);i(u,d);let m=c(`th`,d);i(d,m),i(m,x(`属性`));let h=c(`th`,d);i(d,h),i(h,x(`说明`));let _=c(`th`,d);i(d,_),i(_,x(`类型`));let v=c(`th`,d);i(d,v),i(v,x(`默认值`));let b=c(`tbody`,l);i(l,b);let S=t(`rue:list:start`),C=t(`rue:list:end`);i(b,S),i(b,C);let w=new Map;return n(()=>{w=T({items:a.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(a,o,s,l,u)=>{g(f(()=>{let o=e(),s=c(`tr`,o);i(o,s),n(()=>{y(s,`key`,String(a.prop))});let l=c(`td`,s);i(s,l);let u=c(`code`,l);i(l,u);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let e=a.prop;r(()=>g(e,u,d))});let f=c(`td`,s);i(s,f);let p=t(`rue:slot:anchor`);i(f,p),n(()=>{let e=a.description;r(()=>g(e,f,p))});let m=c(`td`,s);i(s,m);let h=c(`code`,m);i(m,h);let _=t(`rue:slot:anchor`);i(h,_),n(()=>{let e=a.type;r(()=>g(e,h,_))});let v=c(`td`,s);i(s,v);let b=c(`code`,v);i(v,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>g(e,b,x))}),o}),o,s)}})}),s}),$=e=>f(a=>{let o=c(`div`,a);n(()=>{p(o,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${e.className??``}`.trim())});let s=c(`div`,o);i(o,s),p(s,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`);let l=t(`rue:slot:anchor`);i(s,l),n(()=>{let t=e.title;r(()=>g(t,s,l))});let u=c(`div`,o);i(o,u),p(u,`mb-4 text-sm leading-6 text-base-content/70`);let d=t(`rue:slot:anchor`);i(u,d),n(()=>{let t=e.subtitle;r(()=>g(t,u,d))});let f=c(`div`,o);i(o,f),p(f,`min-h-0`);let m=t(`rue:children:anchor`);return i(f,m),n(()=>{let t=e.children;r(()=>g(t,f,m))}),o}),se=()=>{let{controlledSizes:s,controlledResizable:l,controlledStatus:d}=w(`useSetup:0:0`,()=>o(()=>({controlledSizes:w(`ref:1:0`,()=>C([`38%`,`62%`])),controlledResizable:w(`ref:1:1`,()=>C(!0)),controlledStatus:w(`ref:1:2`,()=>C(`等待拖拽`))})));return f(o=>{let m=c(`div`,o);p(m,`space-y-4`);let _=c(`div`,m);i(m,_),p(_,`flex flex-wrap gap-2`);let v=c(`button`,_);i(_,v),y(v,`type`,`button`),p(v,`btn btn-sm`),a(v,`click`,()=>{s.value=[`30%`,`70%`],d.value=`已切到 30 / 70 预设`}),i(v,x(`30 / 70`));let S=c(`button`,_);i(_,S),y(S,`type`,`button`),p(S,`btn btn-sm btn-outline`),a(S,`click`,()=>{s.value=[`50%`,`50%`],d.value=`已重置为 50 / 50`}),i(S,x(`平分`));let C=c(`button`,_);i(_,C),y(C,`type`,`button`),n(()=>{p(C,`btn btn-sm btn-ghost ${l.value?``:`btn-active`}`.trim())}),a(C,`click`,()=>{l.value=!l.value,d.value=l.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`});let w=h(C);i(C,w),n(()=>{u(w,l.value?`锁定左栏`:`恢复拖拽`)});let T=t(`rue:component:anchor`);i(m,T);let E=f(()=>{let a=e(),o=t(`rue:component:anchor`);i(a,o);let m=f(()=>{let t=e(),r=c(`div`,t);i(t,r),p(r,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let a=c(`div`,r);i(r,a),p(a,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),i(a,x(`Filters`));let o=c(`div`,r);i(r,o),p(o,`mb-4 text-sm leading-6 text-base-content/70`),i(o,x(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let s=c(`div`,r);i(r,s),p(s,`text-xs text-base-content/60`);let l=h(s);return i(s,l),n(()=>{u(l,d.value)}),t});n(()=>{let e=b(K.Panel,{size:s.value[0],resizable:l.value,children:m});r(()=>g(e,a,o))});let _=t(`rue:component:anchor`);i(a,_);let v=f(()=>{let t=e(),r=c(`div`,t);i(t,r),p(r,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let a=c(`div`,r);i(r,a),p(a,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),i(a,x(`Results`));let o=c(`div`,r);i(r,o),p(o,`mb-4 text-sm leading-6 text-base-content/70`),i(o,x(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let l=c(`div`,r);i(r,l),p(l,`text-sm text-base-content/70`),i(l,x(`受控尺寸：`));let d=h(l);return i(l,d),n(()=>{u(d,s.value.join(` / `))}),t});return n(()=>{let e=b(K.Panel,{size:s.value[1],children:v});r(()=>g(e,a,_))}),a});return n(()=>{let e=b(K,{style:{height:300},onResize:e=>{s.value=e,d.value=`当前尺寸：${e.join(` / `)}`},children:E});r(()=>g(e,m,T))}),m})},ce=()=>{let{triptychSizes:a,triptychStatus:s}=w(`useSetup:0:0:dup1`,()=>o(()=>({triptychSizes:w(`ref:1:3`,()=>C(q.slice())),triptychStatus:w(`ref:1:4`,()=>C(`双击任意分隔柄可重置`))})));return f(o=>{let l=c(`div`,o);p(l,`space-y-4`);let d=c(`div`,l);i(l,d),p(d,`text-sm text-base-content/65`);let m=h(d);i(d,m),n(()=>{u(m,s.value)});let _=t(`rue:component:anchor`);i(l,_);let v=f(()=>{let o=e(),s=t(`rue:component:anchor`);i(o,s);let c=b($,{title:`Sources`,subtitle:`左侧资源树或文档大纲。`});n(()=>{let e=b(K.Panel,{size:a.value[0],min:120,children:c});r(()=>g(e,o,s))});let l=t(`rue:component:anchor`);i(o,l);let u=b($,{title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`});n(()=>{let e=b(K.Panel,{size:a.value[1],min:180,children:u});r(()=>g(e,o,l))});let d=t(`rue:component:anchor`);i(o,d);let f=b($,{title:`Preview`,subtitle:`右侧实时预览或审阅信息。`});return n(()=>{let e=b(K.Panel,{size:a.value[2],min:120,children:f});r(()=>g(e,o,d))}),o});return n(()=>{let e=b(K,{style:{height:260},onResize:e=>{a.value=e,s.value=`当前布局：${e.join(` / `)}`},onDraggerDoubleClick:()=>{a.value=q.slice(),s.value=`已恢复 Sources / Editor / Preview 默认布局`},children:v});r(()=>g(e,l,_))}),l})},le=()=>{let{lazyStatus:a}=w(`useSetup:0:0:dup2`,()=>o(()=>({lazyStatus:w(`ref:1:5`,()=>C(`拖拽时只移动 handle，释放后才提交尺寸`))})));return f(o=>{let s=c(`div`,o);p(s,`space-y-4`);let l=c(`div`,s);i(s,l),p(l,`text-sm text-base-content/65`);let d=h(l);i(l,d),n(()=>{u(d,a.value)});let m=t(`rue:component:anchor`);i(s,m);let _=f(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let a=b($,{title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:f(()=>{let t=e(),n=c(`div`,t);return i(t,n),p(n,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),i(n,x(`Strategy setup`)),t})});g(b(K.Panel,{defaultSize:`44%`,min:`30%`,children:a}),n,r);let o=t(`rue:component:anchor`);i(n,o);let s=b($,{title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:f(()=>{let t=e(),n=c(`div`,t);i(t,n),p(n,`space-y-2 text-sm text-base-content/70`);let r=c(`div`,n);i(n,r),p(r,`rounded-box bg-base-200/70 px-3 py-2`),i(r,x(`Insight A`));let a=c(`div`,n);i(n,a),p(a,`rounded-box bg-base-200/70 px-3 py-2`),i(a,x(`Insight B`));let o=c(`div`,n);return i(n,o),p(o,`rounded-box bg-base-200/70 px-3 py-2`),i(o,x(`Insight C`)),t})});return g(b(K.Panel,{children:s}),n,o),n});return n(()=>{let e=b(K,{lazy:!0,style:{height:280},onResizeStart:()=>{a.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{a.value=`释放后已提交尺寸：${e.join(` / `)}`},children:_});r(()=>g(e,s,m))}),s})},ue=()=>{let{tabs:a}=w(`useSetup:0:0:dup3`,()=>o(()=>({tabs:{basic:w(`ref:1:6`,()=>C(`preview`)),controlled:w(`ref:1:7`,()=>C(`preview`)),vertical:w(`ref:1:8`,()=>C(`preview`)),reset:w(`ref:1:9`,()=>C(`preview`)),lazy:w(`ref:1:10`,()=>C(`preview`))}})));return f(o=>{let s=e(),l=t(`rue:component:anchor`);return i(s,l),g(b(k,{children:f(()=>{let o=e(),s=c(`div`,o);i(o,s),p(s,`max-w-none prose prose-sm md:prose-base`);let l=c(`h1`,s);i(s,l),i(l,x(`Splitter 分割面板`));let d=c(`p`,s);i(s,d),p(d,`text-sm mt-3 mb-3`),i(d,x(`Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它保留 Rue Design 当前的柔和卡片气质和 3px 分隔条视觉，同时补上可拖拽、受控尺寸、垂直布局、lazy 拖拽和双击重置这些常用能力。`));let f=c(`h2`,s);i(s,f),i(f,x(`何时使用`));let m=c(`ul`,s);i(s,m);let _=c(`li`,m);i(m,_),i(_,x(`需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。`));let v=c(`li`,m);i(m,v),i(v,x(`需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。`));let S=c(`li`,m);i(m,S),i(S,x(`需要在布局层提供受控重置和 lazy 拖拽，而不是只做静态栅格分栏。`));let C=c(`h2`,s);i(s,C),i(C,x(`推荐用法`));let w=c(`p`,s);i(s,w),p(w,`text-sm mt-3 mb-4`),i(w,x(`下面每个 JSX 示例都保留了完整结构，方便直接复制到页面组件里使用。`));let T=t(`rue:component:anchor`);i(s,T),n(()=>{let e=b(A,{title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:a.basic,preview:()=>D(K,{style:{height:280},children:[O(K.Panel,{defaultSize:`40%`,min:`24%`,max:`70%`,children:O($,{title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:D(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Overview`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Metrics`}),O(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Deployments`})]})})}),O(K.Panel,{children:O($,{title:`Editor`,subtitle:`右侧保留完整内容区，适合表单、文档或分析结果。`,children:O(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70`,children:`这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。`})})})]}),code:Y});r(()=>g(e,s,T))});let E=t(`rue:component:anchor`);i(s,E),n(()=>{let e=b(A,{title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:a.controlled,preview:se,code:X});r(()=>g(e,s,E))});let k=t(`rue:component:anchor`);i(s,k),n(()=>{let e=b(A,{title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:a.vertical,preview:()=>D(K,{orientation:`vertical`,style:{height:520},children:[O(K.Panel,{defaultSize:`32%`,min:`10%`,children:O($,{title:`Summary`,subtitle:`顶部保留关键指标和状态总览。`,children:D(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[O(`div`,{className:`rounded-box bg-success/12 p-3 text-sm`,children:`Success 18`}),O(`div`,{className:`rounded-box bg-warning/12 p-3 text-sm`,children:`Queued 4`}),O(`div`,{className:`rounded-box bg-info/12 p-3 text-sm`,children:`Running 2`})]})})}),O(K.Panel,{children:O($,{title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:O(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70`,children:`这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。`})})})]}),code:Z});r(()=>g(e,s,k))});let j=t(`rue:component:anchor`);i(s,j),n(()=>{let e=b(A,{title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:a.reset,preview:ce,code:Q});r(()=>g(e,s,j))});let M=t(`rue:component:anchor`);i(s,M),n(()=>{let e=b(A,{title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:a.lazy,preview:le,code:ae});r(()=>g(e,s,M))});let N=c(`h2`,s);i(s,N),y(N,`id`,`splitter-api`),i(N,x(`API`));let P=c(`p`,s);i(s,P),p(P,`text-sm mt-3 mb-4`),i(P,x(`Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是`));let F=h(P);i(P,F),u(F,` `);let I=c(`code`,P);i(P,I),i(I,x(`Splitter.Panel`)),i(P,x(`。 如果你在业务里需要把布局状态持久化，优先使用`));let L=h(P);i(P,L),u(L,` `);let R=c(`code`,P);i(P,R),i(R,x(`size`)),i(P,x(`+`));let z=c(`code`,P);i(P,z),i(z,x(`onResize`)),i(P,x(`的受控写法；如果只需要默认占比，用`));let B=c(`code`,P);i(P,B),i(B,x(`defaultSize`)),i(P,x(`即可。`));let V=t(`rue:component:anchor`);return i(s,V),n(()=>{let e=b(oe,{rows:J});r(()=>g(e,s,V))}),o})}),s,l),s})};export{ue as default};
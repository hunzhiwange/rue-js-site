import{$ as e,Gt as t,J as n,Kt as r,Lt as i,M as a,O as o,Q as s,S as c,Vt as l,Y as u,Yt as d,Z as f,ct as p,et as m,j as h,l as g,mt as _,ot as v,s as y,t as b,tt as x}from"./vapor-runtime-DHPuOjqh.js";import{a as S,n as C}from"./vapor-helpers-vapor-CJFAWine.js";import{a as w,i as T}from"./persistentSidebarPlayground-C_0jw6dq.js";import{n as E}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as D}from"./PreviewBlock-BYaG1RFO.js";var O=.5,k=10,A=(e,t,n)=>Math.min(n,Math.max(t,e)),j=(e,t)=>t?`${e} ${t}`:e,M=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,ee=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:M(e.width),minWidth:M(e.minWidth),maxWidth:M(e.maxWidth),height:M(e.height),minHeight:M(e.minHeight),maxHeight:M(e.maxHeight)}},N=e=>Array.isArray(e)?e.flatMap(e=>N(e)):e==null||typeof e==`boolean`?[]:[e],P=e=>e.map(e=>Math.max(0,Math.round(e))),F=e=>e.reduce((e,t)=>e+t,0),I=(e,t)=>{let n=F(e);if(t<=0||n<=O)return e.slice();let r=t/n;return e.map(e=>e*r)},te=(e,t)=>e.length===t.length?e.every((e,n)=>Math.abs(e-t[n])<=O):!1,L=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),R=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},z=e=>e?e===!0?{start:!0,end:!0,show:!0}:{start:!!e.start,end:!!e.end,show:e.showCollapsibleIcon!==!1}:{start:!1,end:!1,show:!1},B=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:A(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=A(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-F(r);if(Math.abs(e)<=O)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>O?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>O?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=O?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},ne=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},re=(e,t)=>t===`vertical`?e.clientY:e.clientX,V=(e,t,n)=>e.map((e,r)=>{if(n[r])return{min:0,max:0};let i=R(e.min,t)??0,a=R(e.max,t)??t;return{min:A(i,0,t),max:A(Math.max(a,i),i,t)}}),ie=(e,t,n,r)=>{let i=V(e,t,n),a=r&&r.length===e.length&&F(r)>O?I(r,t):void 0;return B(e.map((e,r)=>{if(n[r])return 0;let i=R(e.size,t);if(typeof i==`number`)return i;let o=R(e.defaultSize,t);if(typeof o==`number`)return o;if(a)return a[r]}),i,t)},ae=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=A(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},oe=(e,t,n,r)=>{if(!t[r])return B(e,t,n);let i=A(e[r],t[r].min,t[r].max),a=Array.from({length:e.length},()=>0),o=e.map((e,t)=>t).filter(e=>e!==r),s=o.map(e=>t[e]),c=B(o.map(t=>e[t]),s,Math.max(n-i,0));return a[r]=i,o.forEach((e,t)=>{a[e]=c[t]}),a},se=e=>{let t=`M10 6 6 10l4 4`;e===`right`&&(t=`m6 6 4 4-4 4`),e===`up`&&(t=`m6 10 4-4 4 4`),e===`down`&&(t=`m6 6 4 4 4-4`);let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke`,`currentColor`),n.setAttribute(`stroke-width`,`1.75`),n.setAttribute(`class`,`h-3.5 w-3.5`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return r.setAttribute(`d`,t),r.setAttribute(`stroke-linecap`,`round`),r.setAttribute(`stroke-linejoin`,`round`),n.appendChild(r),n},ce=e=>{let t=document.createElement(`span`);t.className=e===`vertical`?`inline-grid h-2 w-3 grid-cols-3 grid-rows-2 place-items-center gap-px leading-none text-base-content/55`:`inline-grid h-3 w-2 grid-cols-2 grid-rows-3 place-items-center gap-px leading-none text-base-content/55`;for(let e=0;e<6;e+=1){let e=document.createElement(`span`);e.className=`h-[3px] w-[3px] rounded-full bg-current opacity-65`,t.appendChild(e)}return t},le=(e,t,n)=>{if(e.innerHTML=``,t==null||t===!1){e.appendChild(n());return}if(typeof t==`string`||typeof t==`number`){e.textContent=String(t);return}if(typeof Node<`u`&&t instanceof Node){e.appendChild(t.cloneNode(!0));return}try{a(t,e)}catch{e.appendChild(n())}},ue=(e,t,n)=>n===`vertical`?e===`end`?t?`down`:`up`:t?`up`:`down`:e===`end`?t?`right`:`left`:t?`left`:`right`,de=e=>{let t=t=>e.getAttribute(t)??void 0,n=(t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`};return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:n(`data-rue-splitter-resizable`,!0),collapsible:{start:n(`data-rue-splitter-collapsible-start`),end:n(`data-rue-splitter-collapsible-end`),show:n(`data-rue-splitter-collapsible-show`)}}},H=Object.assign(({orientation:e,layout:n,vertical:r,lazy:i=!1,className:a,style:s,draggerIcon:l,collapsibleIcon:u,onDraggerDoubleClick:d,onResizeStart:f,onResize:p,onResizeEnd:m,onCollapse:g,children:_,...v})=>{let y=t(),b=t(),x=t(),S=t(),C=t(),w=t(),T=t(),E=t(),D=t(),A=t(),M=t(),I=t(!1),z=t(0),H=L(e,n,r);S.current||=[],C.current||=[],w.current||=[],T.current||=[],E.current||=[],D.current||=[];let U=ee(s),W=H===`vertical`&&U?.height==null?{height:U?.minHeight??`320px`}:void 0,fe=()=>{let e=y.current;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},G=e=>{let t=T.current;if(t.length===e)return t;let n=Array.from({length:e},(e,n)=>t[n]??!1);return T.current=n,E.current=Array.from({length:e},(e,t)=>E.current?.[t]??0),n},K=()=>ne(y.current,H),q=e=>{p&&p(P(e))},pe=(e,t)=>{g&&g(e.slice(),P(t))},J=e=>{let t=S.current??[],n=T.current??[];t.forEach((t,r)=>{let i=e[r]??0;t.dataset.rueSplitterPanelIndex=String(r),t.dataset.rueSplitterCollapsed=n[r]?`true`:`false`,t.style.flex=`0 0 auto`,t.style.flexBasis=`${i}px`,H===`vertical`?(t.style.height=`${i}px`,t.style.width=``):(t.style.width=`${i}px`,t.style.height=``)})},Y=()=>{let e=D.current??[],t=C.current??[],n=w.current??[],r=T.current??[],a=M.current,o=z.current;e.forEach((e,s)=>{let c=t[s],d=t[s+1],f=F(n.slice(0,s+1)),p=r[s]===!0,m=r[s+1]===!0,h=a===s,g=i&&h?H===`vertical`?`translateY(${o}px)`:`translateX(${o}px)`:``;e.root.dataset.rueSplitterHandleActive=h?`true`:`false`,e.root.style.transform=g,H===`vertical`?(e.root.style.top=`${f-k/2}px`,e.root.style.left=`0`,e.root.style.height=`${k}px`,e.root.style.width=`100%`):(e.root.style.left=`${f-k/2}px`,e.root.style.top=`0`,e.root.style.width=`${k}px`,e.root.style.height=`100%`),e.previousButton&&e.previousIconHost&&(e.previousButton.setAttribute(`aria-label`,`${p?`展开`:`折叠`}面板 ${s+1}`),le(e.previousIconHost,u?.end,()=>se(ue(`end`,p,H)))),e.nextButton&&e.nextIconHost&&(e.nextButton.setAttribute(`aria-label`,`${m?`展开`:`折叠`}面板 ${s+2}`),le(e.nextIconHost,u?.start,()=>se(ue(`start`,m,H)))),le(e.draggerHost,l,()=>ce(H));let _=!c.resizable||!d?.resizable;e.root.dataset.rueSplitterHandleDisabled=_?`true`:`false`,_&&(e.root.style.cursor=`default`)})},X=()=>{let e=b.current;e&&(e.innerHTML=``),D.current=[]},Z=(e,t=!1)=>{let n=K(),r=T.current??[],i=B(e,V(C.current??[],n,r),n);w.current=i,i.forEach((e,t)=>{!r[t]&&e>O&&(E.current[t]=e)}),J(i),Y(),t&&q(i)},Q=e=>{let t=C.current??[];if(!t[e])return;let n=K(),r=G(t.length).slice(),i=w.current?.length===t.length?w.current.slice():ie(t,n,r);if(r[e]){r[e]=!1,i[e]=R(t[e].size,n)??E.current?.[e]??R(t[e].defaultSize,n)??n/Math.max(t.length,1),T.current=r;let a=oe(i,V(t,n,r),n,e);w.current=a,J(a),Y(),q(a),pe(r,a);return}else i[e]>O&&(E.current[e]=i[e]),r[e]=!0,i[e]=0;T.current=r;let a=B(i,V(t,n,r),n);w.current=a,J(a),Y(),q(a),pe(r,a)},me=()=>{X();let e=b.current,t=C.current??[];if(!e||t.length<=1)return;let n=[];t.slice(0,-1).forEach((r,i)=>{let a=t[i+1],o=document.createElement(`div`);o.setAttribute(`role`,`separator`),o.setAttribute(`aria-orientation`,H),o.setAttribute(`aria-label`,`调整面板 ${i+1} 与 ${i+2}`),o.setAttribute(`data-rue-splitter-handle`,String(i)),o.className=H===`vertical`?`pointer-events-auto absolute z-10 h-2.5 w-full select-none cursor-row-resize`:`pointer-events-auto absolute z-10 h-full w-2.5 select-none cursor-col-resize`;let s=document.createElement(`span`);s.className=H===`vertical`?`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-base-300/90`:`absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-base-300/90`,o.appendChild(s);let c=document.createElement(`div`);c.className=H===`vertical`?`absolute left-1/2 top-1/2 flex min-w-[2.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-base-300 bg-base-100/95 px-1 py-0.5 text-base-content/70 shadow-sm`:`absolute left-1/2 top-1/2 flex min-h-[2.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full border border-base-300 bg-base-100/95 px-1 py-0.5 text-base-content/70 shadow-sm`,o.appendChild(c);let l,u,f,p;r.collapsible.end&&r.collapsible.show&&(l=document.createElement(`button`),l.type=`button`,l.className=`inline-flex h-4 w-4 items-center justify-center rounded-full text-base-content/60 transition hover:bg-base-200 hover:text-base-content`,f=document.createElement(`span`),f.className=`inline-flex h-full w-full items-center justify-center leading-none`,l.appendChild(f),l.addEventListener(`mousedown`,e=>{e.stopPropagation()}),l.addEventListener(`click`,e=>{e.stopPropagation(),Q(i)}),c.appendChild(l));let m=document.createElement(`span`);m.className=`inline-flex h-4 w-4 items-center justify-center leading-none`,m.setAttribute(`aria-hidden`,`true`),c.appendChild(m),a?.collapsible.start&&a.collapsible.show&&(u=document.createElement(`button`),u.type=`button`,u.className=`inline-flex h-4 w-4 items-center justify-center rounded-full text-base-content/60 transition hover:bg-base-200 hover:text-base-content`,p=document.createElement(`span`),p.className=`inline-flex h-full w-full items-center justify-center leading-none`,u.appendChild(p),u.addEventListener(`mousedown`,e=>{e.stopPropagation()}),u.addEventListener(`click`,e=>{e.stopPropagation(),Q(i+1)}),c.appendChild(u)),o.addEventListener(`mousedown`,e=>{e.target?.closest(`button`)||ye(e,i)}),o.addEventListener(`dblclick`,e=>{e.target?.closest(`button`)||d&&d(i)}),(!r.resizable||!a?.resizable)&&(o.dataset.rueSplitterHandleDisabled=`true`,o.style.cursor=`default`),e.appendChild(o),n.push({root:o,previousButton:l,nextButton:u,draggerHost:m,previousIconHost:f,nextIconHost:p})}),D.current=n,Y()},$=(e=!0)=>{S.current=fe(),C.current=S.current.map(de);let t=C.current;if(!t.length){w.current=[],T.current=[],X();return}let n=K(),r=G(t.length),i=ie(t,n,r,e&&w.current?.length===t.length?w.current:void 0);te(w.current??[],i)||(w.current=i),i.forEach((e,t)=>{!r[t]&&e>O&&(E.current[t]=e)}),J(i),me()},he=()=>{I.current||(I.current=!0,queueMicrotask(()=>{I.current=!1,!(!y.current||x.current)&&$(!1)}))},ge=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,_e),window.removeEventListener(`mouseup`,ve))};function _e(e){let t=x.current;if(!t)return;let n=V(C.current??[],t.availableSize,T.current??[]),r=re(e,H)-t.startPoint,a=ae(t.startSizes,n,t.index,r),o=a[t.index]-t.startSizes[t.index];if(A.current=a,z.current=i?o:0,i){Y();return}Z(a,!0)}function ve(){let e=x.current;if(!e)return;let t=w.current??[],n=C.current,r=i?A.current??e.startSizes:t.length===n?.length?t.slice():e.startSizes;i&&Z(r,!0),x.current=null,A.current=null,M.current=null,z.current=0,Y(),ge(),m&&m(P(r))}let ye=(e,t)=>{if(e.button!==0)return;S.current=fe(),C.current=S.current.map(de);let n=C.current??[];if(!n[t]||!n[t+1]||!n[t].resizable||!n[t+1].resizable)return;e.preventDefault();let r=K(),i=w.current?.length===n.length?w.current.slice():ie(n,r,G(n.length));x.current={index:t,startPoint:re(e,H),startSizes:i,availableSize:r},A.current=null,M.current=t,z.current=0,Y(),typeof window<`u`&&(window.addEventListener(`mousemove`,_e),window.addEventListener(`mouseup`,ve)),f&&f(P(i))};return o(()=>{$(!1);let e=()=>{x.current||$(!0)};y.current?.addEventListener(`rue-splitter-panel-config-change`,e);let t=()=>{x.current||$(!0)};typeof window<`u`&&window.addEventListener(`resize`,t),h(()=>{ge(),y.current?.removeEventListener(`rue-splitter-panel-config-change`,e),typeof window<`u`&&window.removeEventListener(`resize`,t),X()})}),he(),c(`div`,{...v,ref:y,className:j(j(j(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,H===`vertical`?`flex-col`:void 0),`items-stretch`),a),style:{...W,...U,flexDirection:H===`vertical`?`column`:`row`},"data-rue-splitter-root":`true`,"data-rue-splitter-orientation":H,"data-rue-splitter-lazy":i?`true`:`false`},...N(_),c(`div`,{ref:b,className:`pointer-events-none absolute inset-0`,"aria-hidden":`true`}))},{Panel:({className:e,style:n,min:r,max:i,size:a,defaultSize:o,resizable:s=!0,collapsible:l,children:u,...d})=>{let f=t(),p=z(l);return queueMicrotask(()=>{let e=f.current;e&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))}),c(`div`,{...d,ref:f,className:j(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,e),style:n,"data-rue-splitter-panel":`true`,"data-rue-splitter-min":r==null?void 0:String(r),"data-rue-splitter-max":i==null?void 0:String(i),"data-rue-splitter-size":a==null?void 0:String(a),"data-rue-splitter-default-size":o==null?void 0:String(o),"data-rue-splitter-resizable":s?`true`:`false`,"data-rue-splitter-collapsible-start":p.start?`true`:void 0,"data-rue-splitter-collapsible-end":p.end?`true`:void 0,"data-rue-splitter-collapsible-show":p.show?`true`:void 0},c(`div`,{className:`h-full w-full`},...N(u)))}}),U=[180,260,160],W=e=>Array.isArray(e)?e.flatMap(e=>W(e)):e==null||typeof e==`boolean`?[]:[e],fe=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为兼容别名保留。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`draggerIcon / collapsibleIcon`,description:`自定义中间拖拽柄与折叠按钮内容，保持 Rue 自己的 handle 结构。`,type:`any / { start?: any; end?: any }`,defaultValue:`-`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`onCollapse`,description:`折叠或展开面板后触发，返回 collapsed 状态与最新尺寸。`,type:`(collapsed: boolean[], sizes: number[]) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保留布局结构。`,type:`boolean`,defaultValue:`true`},{prop:`Splitter.Panel collapsible`,description:`支持 boolean 快速折叠，也支持 start/end/showCollapsibleIcon 精细控制按钮展示。`,type:`boolean | { start?: boolean; end?: boolean; showCollapsibleIcon?: boolean | auto }`,defaultValue:`false`}],G=`import type { FC } from '@rue-js/rue'
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

export default BasicSplitterDemo`,K=`import type { FC } from '@rue-js/rue'
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

export default ControlledSplitterDemo`,q=`import type { FC } from '@rue-js/rue'
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

export default VerticalSplitterDemo`,pe=`import type { FC } from '@rue-js/rue'
import { Splitter } from '@rue-js/design'

const CollapsibleSplitterDemo: FC = () => {
  return (
    <Splitter
      style={{ height: 320 }}
      draggerIcon={<span className="inline-flex h-4 w-4 items-center justify-center text-[10px] font-black leading-none text-base-content/70">|||</span>}
      collapsibleIcon={{
        start: <span className="text-xs">+</span>,
        end: <span className="text-xs">-</span>,
      }}
    >
      <Splitter.Panel defaultSize="28%" collapsible={{ end: true }}>
        <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
            Palette
          </div>
          <div className="space-y-2 text-sm text-base-content/70">
            <div className="rounded-box bg-base-200/70 px-3 py-2">Components</div>
            <div className="rounded-box bg-base-200/70 px-3 py-2">Tokens</div>
            <div className="rounded-box bg-base-200/70 px-3 py-2">Layers</div>
          </div>
        </div>
      </Splitter.Panel>

      <Splitter.Panel collapsible={{ start: true, end: true }}>
        <div className="flex h-full items-center justify-center rounded-box border border-base-300 bg-base-100 p-4">
          <div className="flex h-40 w-full items-center justify-center rounded-box border border-dashed border-base-300 bg-base-200/40 text-sm text-base-content/55">
            Main canvas
          </div>
        </div>
      </Splitter.Panel>

      <Splitter.Panel defaultSize="22%" collapsible={{ start: true }}>
        <div className="h-full rounded-box border border-base-300 bg-base-100 p-4">
          <div className="mb-3 text-xs uppercase tracking-[0.24em] text-base-content/45">
            Inspector
          </div>
          <div className="space-y-2 text-sm text-base-content/70">
            <div>Width: 320</div>
            <div>Height: 180</div>
            <div>Radius: 16</div>
          </div>
        </div>
      </Splitter.Panel>
    </Splitter>
  )
}

export default CollapsibleSplitterDemo`,J=`import type { FC } from '@rue-js/rue'
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

export default ResettableSplitterDemo`,Y=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,X=t=>g(n=>{let r=e(`div`,n);p(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);u(r,i),p(i,`table table-zebra`);let a=e(`thead`,i);u(i,a);let o=e(`tr`,a);u(a,o);let c=e(`th`,o);u(o,c),u(c,m(`属性`));let h=e(`th`,o);u(o,h),u(h,m(`说明`));let _=e(`th`,o);u(o,_),u(_,m(`类型`));let b=e(`th`,o);u(o,b),u(b,m(`默认值`));let x=e(`tbody`,i);u(i,x);let S=f(`rue:list:start`),w=f(`rue:list:end`);u(x,S),u(x,w);let T=new Map;return d(()=>{T=C({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,n,r,i,a)=>{y(g(()=>{let n=s(),r=e(`tr`,n);u(n,r),d(()=>{v(r,`key`,String(t.prop))});let i=e(`td`,r);u(r,i);let a=e(`code`,i);u(i,a);let o=f(`rue:slot:anchor`);u(a,o),d(()=>{let e=t.prop;l(()=>y(e,a,o))});let c=e(`td`,r);u(r,c);let p=f(`rue:slot:anchor`);u(c,p),d(()=>{let e=t.description;l(()=>y(e,c,p))});let m=e(`td`,r);u(r,m);let h=e(`code`,m);u(m,h);let g=f(`rue:slot:anchor`);u(h,g),d(()=>{let e=t.type;l(()=>y(e,h,g))});let _=e(`td`,r);u(r,_);let b=e(`code`,_);u(_,b);let x=f(`rue:slot:anchor`);return u(b,x),d(()=>{let e=t.defaultValue;l(()=>y(e,b,x))}),n}),n,r)}})}),r}),Z=e=>c(`div`,{className:`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${e.className??``}`.trim()},c(`div`,{className:`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`},e.title),c(`div`,{className:`mb-4 text-sm leading-6 text-base-content/70`},e.subtitle),c(`div`,{className:`min-h-0`},...W(e.children))),Q=()=>{let{controlledSizes:t,controlledResizable:a,controlledStatus:o}=S(`useSetup:0:0`,()=>r(()=>({controlledSizes:S(`ref:1:0`,()=>i([`38%`,`62%`])),controlledResizable:S(`ref:1:1`,()=>i(!0)),controlledStatus:S(`ref:1:2`,()=>i(`等待拖拽`))})));return g(r=>{let i=e(`div`,r);p(i,`space-y-4`);let c=e(`div`,i);u(i,c),p(c,`flex flex-wrap gap-2`);let h=e(`button`,c);u(c,h),v(h,`type`,`button`),p(h,`btn btn-sm`),n(h,`click`,()=>{t.value=[`30%`,`70%`],o.value=`已切到 30 / 70 预设`}),u(h,m(`30 / 70`));let S=e(`button`,c);u(c,S),v(S,`type`,`button`),p(S,`btn btn-sm btn-outline`),n(S,`click`,()=>{t.value=[`50%`,`50%`],o.value=`已重置为 50 / 50`}),u(S,m(`平分`));let C=e(`button`,c);u(c,C),v(C,`type`,`button`),d(()=>{p(C,String(`btn btn-sm btn-ghost ${a.value?``:`btn-active`}`.trim()))}),n(C,`click`,()=>{a.value=!a.value,o.value=a.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`});let w=x(C);u(C,w),d(()=>{_(w,a.value?`锁定左栏`:`恢复拖拽`)});let T=f(`rue:component:anchor`);u(i,T);let E=g(()=>{let n=s(),r=f(`rue:component:anchor`);u(n,r);let i=g(()=>{let t=s(),n=e(`div`,t);u(t,n),p(n,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let r=e(`div`,n);u(n,r),p(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),u(r,m(`Filters`));let i=e(`div`,n);u(n,i),p(i,`mb-4 text-sm leading-6 text-base-content/70`),u(i,m(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let a=e(`div`,n);u(n,a),p(a,`text-xs text-base-content/60`);let c=x(a);return u(a,c),d(()=>{_(c,o.value)}),t});d(()=>{let e=b(H.Panel,{size:t.value[0],resizable:a.value,children:i});l(()=>y(e,n,r))});let c=f(`rue:component:anchor`);u(n,c);let h=g(()=>{let n=s(),r=e(`div`,n);u(n,r),p(r,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let i=e(`div`,r);u(r,i),p(i,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),u(i,m(`Results`));let a=e(`div`,r);u(r,a),p(a,`mb-4 text-sm leading-6 text-base-content/70`),u(a,m(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let o=e(`div`,r);u(r,o),p(o,`text-sm text-base-content/70`),u(o,m(`受控尺寸：`));let c=x(o);return u(o,c),d(()=>{_(c,t.value.join(` / `))}),n});return d(()=>{let e=b(H.Panel,{size:t.value[1],children:h});l(()=>y(e,n,c))}),n});return d(()=>{let e=b(H,{style:{height:300},onResize:e=>{t.value=e,o.value=`当前尺寸：${e.join(` / `)}`},children:E});l(()=>y(e,i,T))}),i})},me=()=>{let{triptychSizes:t,triptychStatus:n}=S(`useSetup:0:0:dup1`,()=>r(()=>({triptychSizes:S(`ref:1:3`,()=>i(U.slice())),triptychStatus:S(`ref:1:4`,()=>i(`双击任意分隔柄可重置`))})));return g(r=>{let i=e(`div`,r);p(i,`space-y-4`);let a=e(`div`,i);u(i,a),p(a,`text-sm text-base-content/65`);let o=x(a);u(a,o),d(()=>{_(o,n.value)});let c=f(`rue:component:anchor`);u(i,c);let m=g(()=>{let e=s(),n=f(`rue:component:anchor`);u(e,n);let r=b(Z,{title:`Sources`,subtitle:`左侧资源树或文档大纲。`});d(()=>{let i=b(H.Panel,{size:t.value[0],min:120,children:r});l(()=>y(i,e,n))});let i=f(`rue:component:anchor`);u(e,i);let a=b(Z,{title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`});d(()=>{let n=b(H.Panel,{size:t.value[1],min:180,children:a});l(()=>y(n,e,i))});let o=f(`rue:component:anchor`);u(e,o);let c=b(Z,{title:`Preview`,subtitle:`右侧实时预览或审阅信息。`});return d(()=>{let n=b(H.Panel,{size:t.value[2],min:120,children:c});l(()=>y(n,e,o))}),e});return d(()=>{let e=b(H,{style:{height:260},onResize:e=>{t.value=e,n.value=`当前布局：${e.join(` / `)}`},onDraggerDoubleClick:()=>{t.value=U.slice(),n.value=`已恢复 Sources / Editor / Preview 默认布局`},children:m});l(()=>y(e,i,c))}),i})},$=()=>{let{lazyStatus:t}=S(`useSetup:0:0:dup2`,()=>r(()=>({lazyStatus:S(`ref:1:5`,()=>i(`拖拽时只移动 handle，释放后才提交尺寸`))})));return g(n=>{let r=e(`div`,n);p(r,`space-y-4`);let i=e(`div`,r);u(r,i),p(i,`text-sm text-base-content/65`);let a=x(i);u(i,a),d(()=>{_(a,t.value)});let o=f(`rue:component:anchor`);u(r,o);let c=g(()=>{let t=s(),n=f(`rue:component:anchor`);u(t,n);let r=b(Z,{title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:g(()=>{let t=s(),n=e(`div`,t);return u(t,n),p(n,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),u(n,m(`Strategy setup`)),t})});y(b(H.Panel,{defaultSize:`44%`,min:`30%`,children:r}),t,n);let i=f(`rue:component:anchor`);u(t,i);let a=b(Z,{title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:g(()=>{let t=s(),n=e(`div`,t);u(t,n),p(n,`space-y-2 text-sm text-base-content/70`);let r=e(`div`,n);u(n,r),p(r,`rounded-box bg-base-200/70 px-3 py-2`),u(r,m(`Insight A`));let i=e(`div`,n);u(n,i),p(i,`rounded-box bg-base-200/70 px-3 py-2`),u(i,m(`Insight B`));let a=e(`div`,n);return u(n,a),p(a,`rounded-box bg-base-200/70 px-3 py-2`),u(a,m(`Insight C`)),t})});return y(b(H.Panel,{children:a}),t,i),t});return d(()=>{let e=b(H,{lazy:!0,style:{height:280},onResizeStart:()=>{t.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{t.value=`释放后已提交尺寸：${e.join(` / `)}`},children:c});l(()=>y(e,r,o))}),r})},he=()=>{let{tabs:t}=S(`useSetup:0:0:dup3`,()=>r(()=>({tabs:{basic:S(`ref:1:6`,()=>i(`preview`)),controlled:S(`ref:1:7`,()=>i(`preview`)),vertical:S(`ref:1:8`,()=>i(`preview`)),collapsible:S(`ref:1:9`,()=>i(`preview`)),reset:S(`ref:1:10`,()=>i(`preview`)),lazy:S(`ref:1:11`,()=>i(`preview`))}})));return g(n=>{let r=s(),i=f(`rue:component:anchor`);return u(r,i),y(b(E,{children:g(()=>{let n=s(),r=e(`div`,n);u(n,r),p(r,`max-w-none prose prose-sm md:prose-base`);let i=e(`h1`,r);u(r,i),u(i,m(`Splitter 分割面板`));let a=e(`p`,r);u(r,a),p(a,`text-sm mt-3 mb-3`),u(a,m(`Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它保留 Rue Design 当前的柔和卡片气质和细颗粒 handle 视觉，同时补上可拖拽、受控尺寸、垂直布局、 折叠、lazy 拖拽和双击重置这些更接近成熟组件库的核心能力。`));let o=e(`h2`,r);u(r,o),u(o,m(`何时使用`));let c=e(`ul`,r);u(r,c);let h=e(`li`,c);u(c,h),u(h,m(`需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。`));let g=e(`li`,c);u(c,g),u(g,m(`需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。`));let S=e(`li`,c);u(c,S),u(S,m(`需要在布局层提供折叠、受控重置和 lazy 拖拽，而不是只做静态栅格分栏。`));let C=e(`h2`,r);u(r,C),u(C,m(`推荐用法`));let E=e(`p`,r);u(r,E),p(E,`text-sm mt-3 mb-4`),u(E,m(`下面每个 JSX 示例都保留了完整结构，方便直接复制到页面组件里使用。`));let O=f(`rue:component:anchor`);u(r,O),d(()=>{let e=b(D,{title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:t.basic,preview:()=>w(H,{style:{height:280},children:[T(H.Panel,{defaultSize:`40%`,min:`24%`,max:`70%`,children:T(Z,{title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Overview`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Metrics`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Deployments`})]})})}),T(H.Panel,{children:T(Z,{title:`Editor`,subtitle:`右侧保留完整内容区，适合表单、文档或分析结果。`,children:T(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70`,children:`这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。`})})})]}),code:G});l(()=>y(e,r,O))});let k=f(`rue:component:anchor`);u(r,k),d(()=>{let e=b(D,{title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:t.controlled,preview:Q,code:K});l(()=>y(e,r,k))});let A=f(`rue:component:anchor`);u(r,A),d(()=>{let e=b(D,{title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:t.vertical,preview:()=>w(H,{orientation:`vertical`,style:{height:520},children:[T(H.Panel,{defaultSize:`32%`,min:`10%`,children:T(Z,{title:`Summary`,subtitle:`顶部保留关键指标和状态总览。`,children:w(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[T(`div`,{className:`rounded-box bg-success/12 p-3 text-sm`,children:`Success 18`}),T(`div`,{className:`rounded-box bg-warning/12 p-3 text-sm`,children:`Queued 4`}),T(`div`,{className:`rounded-box bg-info/12 p-3 text-sm`,children:`Running 2`})]})})}),T(H.Panel,{children:T(Z,{title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:T(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70`,children:`这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。`})})})]}),code:q});l(()=>y(e,r,A))});let j=f(`rue:component:anchor`);u(r,j),d(()=>{let e=b(D,{title:`Collapsible panels and custom handle`,summary:`折叠按钮和自定义 draggerIcon 适合三栏工作区，让辅助区可以快速收起。`,tab:t.collapsible,preview:()=>w(H,{style:{height:320},draggerIcon:T(`span`,{className:`inline-flex h-4 w-4 items-center justify-center text-[10px] font-black leading-none text-base-content/70`,children:`|||`}),collapsibleIcon:{start:T(`span`,{className:`text-xs`,children:`+`}),end:T(`span`,{className:`text-xs`,children:`-`})},children:[T(H.Panel,{defaultSize:`28%`,collapsible:{end:!0},children:T(Z,{title:`Palette`,subtitle:`左栏可快速折叠，适合图层、筛选器或工具箱。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Components`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Tokens`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Layers`})]})})}),T(H.Panel,{collapsible:{start:!0,end:!0},children:T(Z,{title:`Canvas`,subtitle:`中间主区保留最大的操作空间。`,children:T(`div`,{className:`flex h-40 items-center justify-center rounded-box border border-dashed border-base-300 bg-base-200/40 text-sm text-base-content/55`,children:`Main canvas`})})}),T(H.Panel,{defaultSize:`22%`,collapsible:{start:!0},children:T(Z,{title:`Inspector`,subtitle:`右侧检查面板按需展开，减少噪音。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{children:`Width: 320`}),T(`div`,{children:`Height: 180`}),T(`div`,{children:`Radius: 16`})]})})})]}),code:pe});l(()=>y(e,r,j))});let M=f(`rue:component:anchor`);u(r,M),d(()=>{let e=b(D,{title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:t.reset,preview:me,code:J});l(()=>y(e,r,M))});let ee=f(`rue:component:anchor`);u(r,ee),d(()=>{let e=b(D,{title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:t.lazy,preview:$,code:Y});l(()=>y(e,r,ee))});let N=e(`h2`,r);u(r,N),v(N,`id`,`splitter-api`),u(N,m(`API`));let P=e(`p`,r);u(r,P),p(P,`text-sm mt-3 mb-4`),u(P,m(`Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是`));let F=x(P);u(P,F),_(F,` `);let I=e(`code`,P);u(P,I),u(I,m(`Splitter.Panel`)),u(P,m(`。 如果你在业务里需要把布局状态持久化，优先使用`));let te=x(P);u(P,te),_(te,` `);let L=e(`code`,P);u(P,L),u(L,m(`size`)),u(P,m(`+`));let R=e(`code`,P);u(P,R),u(R,m(`onResize`)),u(P,m(`的受控写法；如果只需要默认占比，用`));let z=e(`code`,P);u(P,z),u(z,m(`defaultSize`)),u(P,m(`即可。`));let B=f(`rue:component:anchor`);return u(r,B),d(()=>{let e=b(X,{rows:fe});l(()=>y(e,r,B))}),n})}),r,i),r})};export{he as default};
import{$ as e,B as t,C as n,Ct as r,D as i,Dt as a,G as o,H as s,K as c,O as l,U as u,W as d,Z as f,at as p,ht as m,k as h,l as g,s as _,t as v,wt as y,yt as b,z as x}from"./vapor-runtime-C1rlwc61.js";import{a as S,n as C}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as w,t as T}from"./src-BLzF0BqW.js";import{n as E}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as D}from"./PreviewBlock-CfdDuiov.js";var O=.5,k=10,A=(e,t,n)=>Math.min(n,Math.max(t,e)),j=(e,t)=>t?`${e} ${t}`:e,M=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,N=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:M(e.width),minWidth:M(e.minWidth),maxWidth:M(e.maxWidth),height:M(e.height),minHeight:M(e.minHeight),maxHeight:M(e.maxHeight)}},P=e=>Array.isArray(e)?e.flatMap(e=>P(e)):e==null||typeof e==`boolean`?[]:[e],F=e=>e.map(e=>Math.max(0,Math.round(e))),I=e=>e.reduce((e,t)=>e+t,0),L=(e,t)=>{let n=I(e);if(t<=0||n<=O)return e.slice();let r=t/n;return e.map(e=>e*r)},ee=(e,t)=>e.length===t.length?e.every((e,n)=>Math.abs(e-t[n])<=O):!1,R=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),z=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},B=e=>e?e===!0?{start:!0,end:!0,show:!0}:{start:!!e.start,end:!!e.end,show:e.showCollapsibleIcon!==!1}:{start:!1,end:!1,show:!1},V=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:A(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=A(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-I(r);if(Math.abs(e)<=O)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>O?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>O?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=O?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},te=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},ne=(e,t)=>t===`vertical`?e.clientY:e.clientX,H=(e,t,n)=>e.map((e,r)=>{if(n[r])return{min:0,max:0};let i=z(e.min,t)??0,a=z(e.max,t)??t;return{min:A(i,0,t),max:A(Math.max(a,i),i,t)}}),re=(e,t,n,r)=>{let i=H(e,t,n),a=r&&r.length===e.length&&I(r)>O?L(r,t):void 0;return V(e.map((e,r)=>{if(n[r])return 0;let i=z(e.size,t);if(typeof i==`number`)return i;let o=z(e.defaultSize,t);if(typeof o==`number`)return o;if(a)return a[r]}),i,t)},ie=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=A(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},ae=(e,t,n,r)=>{if(!t[r])return V(e,t,n);let i=A(e[r],t[r].min,t[r].max),a=Array.from({length:e.length},()=>0),o=e.map((e,t)=>t).filter(e=>e!==r),s=o.map(e=>t[e]),c=V(o.map(t=>e[t]),s,Math.max(n-i,0));return a[r]=i,o.forEach((e,t)=>{a[e]=c[t]}),a},oe=e=>{let t=`M10 6 6 10l4 4`;e===`right`&&(t=`m6 6 4 4-4 4`),e===`up`&&(t=`m6 10 4-4 4 4`),e===`down`&&(t=`m6 6 4 4 4-4`);let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke`,`currentColor`),n.setAttribute(`stroke-width`,`1.75`),n.setAttribute(`class`,`h-3.5 w-3.5`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return r.setAttribute(`d`,t),r.setAttribute(`stroke-linecap`,`round`),r.setAttribute(`stroke-linejoin`,`round`),n.appendChild(r),n},se=e=>{let t=document.createElement(`span`);t.className=e===`vertical`?`inline-grid h-2 w-3 grid-cols-3 grid-rows-2 place-items-center gap-px leading-none text-base-content/55`:`inline-grid h-3 w-2 grid-cols-2 grid-rows-3 place-items-center gap-px leading-none text-base-content/55`;for(let e=0;e<6;e+=1){let e=document.createElement(`span`);e.className=`h-[3px] w-[3px] rounded-full bg-current opacity-65`,t.appendChild(e)}return t},ce=(e,t,n)=>{if(e.innerHTML=``,t==null||t===!1){e.appendChild(n());return}if(typeof t==`string`||typeof t==`number`){e.textContent=String(t);return}if(typeof Node<`u`&&t instanceof Node){e.appendChild(t.cloneNode(!0));return}try{h(t,e)}catch{e.appendChild(n())}},le=(e,t,n)=>n===`vertical`?e===`end`?t?`down`:`up`:t?`up`:`down`:e===`end`?t?`right`:`left`:t?`left`:`right`,ue=e=>{let t=t=>e.getAttribute(t)??void 0,n=(t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`};return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:n(`data-rue-splitter-resizable`,!0),collapsible:{start:n(`data-rue-splitter-collapsible-start`),end:n(`data-rue-splitter-collapsible-end`),show:n(`data-rue-splitter-collapsible-show`)}}},U=Object.assign(({orientation:e,layout:t,vertical:a,lazy:o=!1,className:s,style:c,draggerIcon:u,collapsibleIcon:d,onDraggerDoubleClick:f,onResizeStart:p,onResize:m,onResizeEnd:h,onCollapse:g,children:_,...v})=>{let y=r(),b=r(),x=r(),S=r(),C=r(),w=r(),T=r(),E=r(),D=r(),A=r(),M=r(),L=r(!1),B=r(0),U=R(e,t,a);S.current||=[],C.current||=[],w.current||=[],T.current||=[],E.current||=[],D.current||=[];let W=N(c),G=U===`vertical`&&W?.height==null?{height:W?.minHeight??`320px`}:void 0,de=()=>{let e=y.current;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},K=e=>{let t=T.current;if(t.length===e)return t;let n=Array.from({length:e},(e,n)=>t[n]??!1);return T.current=n,E.current=Array.from({length:e},(e,t)=>E.current?.[t]??0),n},q=()=>te(y.current,U),J=e=>{m&&m(F(e))},fe=(e,t)=>{g&&g(e.slice(),F(t))},Y=e=>{let t=S.current??[],n=T.current??[];t.forEach((t,r)=>{let i=e[r]??0;t.dataset.rueSplitterPanelIndex=String(r),t.dataset.rueSplitterCollapsed=n[r]?`true`:`false`,t.style.flex=`0 0 auto`,t.style.flexBasis=`${i}px`,U===`vertical`?(t.style.height=`${i}px`,t.style.width=``):(t.style.width=`${i}px`,t.style.height=``)})},X=()=>{let e=D.current??[],t=C.current??[],n=w.current??[],r=T.current??[],i=M.current,a=B.current;e.forEach((e,s)=>{let c=t[s],l=t[s+1],f=I(n.slice(0,s+1)),p=r[s]===!0,m=r[s+1]===!0,h=i===s,g=o&&h?U===`vertical`?`translateY(${a}px)`:`translateX(${a}px)`:``;e.root.dataset.rueSplitterHandleActive=h?`true`:`false`,e.root.style.transform=g,U===`vertical`?(e.root.style.top=`${f-k/2}px`,e.root.style.left=`0`,e.root.style.height=`${k}px`,e.root.style.width=`100%`):(e.root.style.left=`${f-k/2}px`,e.root.style.top=`0`,e.root.style.width=`${k}px`,e.root.style.height=`100%`),e.previousButton&&e.previousIconHost&&(e.previousButton.setAttribute(`aria-label`,`${p?`展开`:`折叠`}面板 ${s+1}`),ce(e.previousIconHost,d?.end,()=>oe(le(`end`,p,U)))),e.nextButton&&e.nextIconHost&&(e.nextButton.setAttribute(`aria-label`,`${m?`展开`:`折叠`}面板 ${s+2}`),ce(e.nextIconHost,d?.start,()=>oe(le(`start`,m,U)))),ce(e.draggerHost,u,()=>se(U));let _=!c.resizable||!l?.resizable;e.root.dataset.rueSplitterHandleDisabled=_?`true`:`false`,_&&(e.root.style.cursor=`default`)})},Z=()=>{let e=b.current;e&&(e.innerHTML=``),D.current=[]},Q=(e,t=!1)=>{let n=q(),r=T.current??[],i=V(e,H(C.current??[],n,r),n);w.current=i,i.forEach((e,t)=>{!r[t]&&e>O&&(E.current[t]=e)}),Y(i),X(),t&&J(i)},pe=e=>{let t=C.current??[];if(!t[e])return;let n=q(),r=K(t.length).slice(),i=w.current?.length===t.length?w.current.slice():re(t,n,r);if(r[e]){r[e]=!1,i[e]=z(t[e].size,n)??E.current?.[e]??z(t[e].defaultSize,n)??n/Math.max(t.length,1),T.current=r;let a=ae(i,H(t,n,r),n,e);w.current=a,Y(a),X(),J(a),fe(r,a);return}else i[e]>O&&(E.current[e]=i[e]),r[e]=!0,i[e]=0;T.current=r;let a=V(i,H(t,n,r),n);w.current=a,Y(a),X(),J(a),fe(r,a)},me=()=>{Z();let e=b.current,t=C.current??[];if(!e||t.length<=1)return;let n=[];t.slice(0,-1).forEach((r,i)=>{let a=t[i+1],o=document.createElement(`div`);o.setAttribute(`role`,`separator`),o.setAttribute(`aria-orientation`,U),o.setAttribute(`aria-label`,`调整面板 ${i+1} 与 ${i+2}`),o.setAttribute(`data-rue-splitter-handle`,String(i)),o.className=U===`vertical`?`pointer-events-auto absolute z-10 h-2.5 w-full select-none cursor-row-resize`:`pointer-events-auto absolute z-10 h-full w-2.5 select-none cursor-col-resize`;let s=document.createElement(`span`);s.className=U===`vertical`?`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-base-300/90`:`absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-base-300/90`,o.appendChild(s);let c=document.createElement(`div`);c.className=U===`vertical`?`absolute left-1/2 top-1/2 flex min-w-[2.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-base-300 bg-base-100/95 px-1 py-0.5 text-base-content/70 shadow-sm`:`absolute left-1/2 top-1/2 flex min-h-[2.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full border border-base-300 bg-base-100/95 px-1 py-0.5 text-base-content/70 shadow-sm`,o.appendChild(c);let l,u,d,p;r.collapsible.end&&r.collapsible.show&&(l=document.createElement(`button`),l.type=`button`,l.className=`inline-flex h-4 w-4 items-center justify-center rounded-full text-base-content/60 transition hover:bg-base-200 hover:text-base-content`,d=document.createElement(`span`),d.className=`inline-flex h-full w-full items-center justify-center leading-none`,l.appendChild(d),l.addEventListener(`mousedown`,e=>{e.stopPropagation()}),l.addEventListener(`click`,e=>{e.stopPropagation(),pe(i)}),c.appendChild(l));let m=document.createElement(`span`);m.className=`inline-flex h-4 w-4 items-center justify-center leading-none`,m.setAttribute(`aria-hidden`,`true`),c.appendChild(m),a?.collapsible.start&&a.collapsible.show&&(u=document.createElement(`button`),u.type=`button`,u.className=`inline-flex h-4 w-4 items-center justify-center rounded-full text-base-content/60 transition hover:bg-base-200 hover:text-base-content`,p=document.createElement(`span`),p.className=`inline-flex h-full w-full items-center justify-center leading-none`,u.appendChild(p),u.addEventListener(`mousedown`,e=>{e.stopPropagation()}),u.addEventListener(`click`,e=>{e.stopPropagation(),pe(i+1)}),c.appendChild(u)),o.addEventListener(`mousedown`,e=>{e.target?.closest(`button`)||ye(e,i)}),o.addEventListener(`dblclick`,e=>{e.target?.closest(`button`)||f&&f(i)}),(!r.resizable||!a?.resizable)&&(o.dataset.rueSplitterHandleDisabled=`true`,o.style.cursor=`default`),e.appendChild(o),n.push({root:o,previousButton:l,nextButton:u,draggerHost:m,previousIconHost:d,nextIconHost:p})}),D.current=n,X()},$=(e=!0)=>{S.current=de(),C.current=S.current.map(ue);let t=C.current;if(!t.length){w.current=[],T.current=[],Z();return}let n=q(),r=K(t.length),i=re(t,n,r,e&&w.current?.length===t.length?w.current:void 0);ee(w.current??[],i)||(w.current=i),i.forEach((e,t)=>{!r[t]&&e>O&&(E.current[t]=e)}),Y(i),me()},he=()=>{L.current||(L.current=!0,queueMicrotask(()=>{L.current=!1,!(!y.current||x.current)&&$(!1)}))},ge=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,_e),window.removeEventListener(`mouseup`,ve))};function _e(e){let t=x.current;if(!t)return;let n=H(C.current??[],t.availableSize,T.current??[]),r=ne(e,U)-t.startPoint,i=ie(t.startSizes,n,t.index,r),a=i[t.index]-t.startSizes[t.index];if(A.current=i,B.current=o?a:0,o){X();return}Q(i,!0)}function ve(){let e=x.current;if(!e)return;let t=w.current??[],n=C.current,r=o?A.current??e.startSizes:t.length===n?.length?t.slice():e.startSizes;o&&Q(r,!0),x.current=null,A.current=null,M.current=null,B.current=0,X(),ge(),h&&h(F(r))}let ye=(e,t)=>{if(e.button!==0)return;S.current=de(),C.current=S.current.map(ue);let n=C.current??[];if(!n[t]||!n[t+1]||!n[t].resizable||!n[t+1].resizable)return;e.preventDefault();let r=q(),i=w.current?.length===n.length?w.current.slice():re(n,r,K(n.length));x.current={index:t,startPoint:ne(e,U),startSizes:i,availableSize:r},A.current=null,M.current=t,B.current=0,X(),typeof window<`u`&&(window.addEventListener(`mousemove`,_e),window.addEventListener(`mouseup`,ve)),p&&p(F(i))};return i(()=>{$(!1);let e=()=>{x.current||$(!0)};y.current?.addEventListener(`rue-splitter-panel-config-change`,e);let t=()=>{x.current||$(!0)};typeof window<`u`&&window.addEventListener(`resize`,t),l(()=>{ge(),y.current?.removeEventListener(`rue-splitter-panel-config-change`,e),typeof window<`u`&&window.removeEventListener(`resize`,t),Z()})}),he(),n(`div`,{...v,ref:y,className:j(j(j(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,U===`vertical`?`flex-col`:void 0),`items-stretch`),s),style:{...G,...W,flexDirection:U===`vertical`?`column`:`row`},"data-rue-splitter-root":`true`,"data-rue-splitter-orientation":U,"data-rue-splitter-lazy":o?`true`:`false`},...P(_),n(`div`,{ref:b,className:`pointer-events-none absolute inset-0`,"aria-hidden":`true`}))},{Panel:({className:e,style:t,min:i,max:a,size:o,defaultSize:s,resizable:c=!0,collapsible:l,children:u,...d})=>{let f=r(),p=B(l);return queueMicrotask(()=>{let e=f.current;e&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))}),n(`div`,{...d,ref:f,className:j(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,e),style:t,"data-rue-splitter-panel":`true`,"data-rue-splitter-min":i==null?void 0:String(i),"data-rue-splitter-max":a==null?void 0:String(a),"data-rue-splitter-size":o==null?void 0:String(o),"data-rue-splitter-default-size":s==null?void 0:String(s),"data-rue-splitter-resizable":c?`true`:`false`,"data-rue-splitter-collapsible-start":p.start?`true`:void 0,"data-rue-splitter-collapsible-end":p.end?`true`:void 0,"data-rue-splitter-collapsible-show":p.show?`true`:void 0},n(`div`,{className:`h-full w-full`},...P(u)))}}),W=[180,260,160],G=e=>Array.isArray(e)?e.flatMap(e=>G(e)):e==null||typeof e==`boolean`?[]:[e],de=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为兼容别名保留。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`draggerIcon / collapsibleIcon`,description:`自定义中间拖拽柄与折叠按钮内容，保持 Rue 自己的 handle 结构。`,type:`any / { start?: any; end?: any }`,defaultValue:`-`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`onCollapse`,description:`折叠或展开面板后触发，返回 collapsed 状态与最新尺寸。`,type:`(collapsed: boolean[], sizes: number[]) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保留布局结构。`,type:`boolean`,defaultValue:`true`},{prop:`Splitter.Panel collapsible`,description:`支持 boolean 快速折叠，也支持 start/end/showCollapsibleIcon 精细控制按钮展示。`,type:`boolean | { start?: boolean; end?: boolean; showCollapsibleIcon?: boolean | auto }`,defaultValue:`false`}],K=`import type { FC } from '@rue-js/rue'
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

export default BasicSplitterDemo`,q=`import type { FC } from '@rue-js/rue'
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

export default ControlledSplitterDemo`,J=`import type { FC } from '@rue-js/rue'
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

export default VerticalSplitterDemo`,fe=`import type { FC } from '@rue-js/rue'
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

export default CollapsibleSplitterDemo`,Y=`import type { FC } from '@rue-js/rue'
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

export default ResettableSplitterDemo`,X=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,Z=n=>g(r=>{let i=d(`div`,r);e(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=d(`table`,i);t(i,c),e(c,`table table-zebra`);let l=d(`thead`,c);t(c,l);let p=d(`tr`,l);t(l,p);let m=d(`th`,p);t(p,m),t(m,o(`属性`));let h=d(`th`,p);t(p,h),t(h,o(`说明`));let v=d(`th`,p);t(p,v),t(v,o(`类型`));let y=d(`th`,p);t(p,y),t(y,o(`默认值`));let x=d(`tbody`,c);t(c,x);let S=s(`rue:list:start`),w=s(`rue:list:end`);t(x,S),t(x,w);let T=new Map;return a(()=>{T=C({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,n,r,i,o)=>{_(g(()=>{let n=u(),r=d(`tr`,n);t(n,r),a(()=>{f(r,`key`,String(e.prop))});let i=d(`td`,r);t(r,i);let o=d(`code`,i);t(i,o);let c=s(`rue:slot:anchor`);t(o,c),a(()=>{let t=e.prop;b(()=>_(t,o,c))});let l=d(`td`,r);t(r,l);let p=s(`rue:slot:anchor`);t(l,p),a(()=>{let t=e.description;b(()=>_(t,l,p))});let m=d(`td`,r);t(r,m);let h=d(`code`,m);t(m,h);let g=s(`rue:slot:anchor`);t(h,g),a(()=>{let t=e.type;b(()=>_(t,h,g))});let v=d(`td`,r);t(r,v);let y=d(`code`,v);t(v,y);let x=s(`rue:slot:anchor`);return t(y,x),a(()=>{let t=e.defaultValue;b(()=>_(t,y,x))}),n}),n,r)}})}),i}),Q=e=>n(`div`,{className:`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${e.className??``}`.trim()},n(`div`,{className:`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`},e.title),n(`div`,{className:`mb-4 text-sm leading-6 text-base-content/70`},e.subtitle),n(`div`,{className:`min-h-0`},...G(e.children))),pe=()=>{let{controlledSizes:n,controlledResizable:r,controlledStatus:i}=S(`useSetup:0:0`,()=>y(()=>({controlledSizes:S(`ref:1:0`,()=>m([`38%`,`62%`])),controlledResizable:S(`ref:1:1`,()=>m(!0)),controlledStatus:S(`ref:1:2`,()=>m(`等待拖拽`))})));return g(l=>{let m=d(`div`,l);e(m,`space-y-4`);let h=d(`div`,m);t(m,h),e(h,`flex flex-wrap gap-2`);let y=d(`button`,h);t(h,y),f(y,`type`,`button`),e(y,`btn btn-sm`),x(y,`click`,()=>{n.value=[`30%`,`70%`],i.value=`已切到 30 / 70 预设`}),t(y,o(`30 / 70`));let S=d(`button`,h);t(h,S),f(S,`type`,`button`),e(S,`btn btn-sm btn-outline`),x(S,`click`,()=>{n.value=[`50%`,`50%`],i.value=`已重置为 50 / 50`}),t(S,o(`平分`));let C=d(`button`,h);t(h,C),f(C,`type`,`button`),a(()=>{e(C,String(`btn btn-sm btn-ghost ${r.value?``:`btn-active`}`.trim()))}),x(C,`click`,()=>{r.value=!r.value,i.value=r.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`});let w=c(C);t(C,w),a(()=>{p(w,r.value?`锁定左栏`:`恢复拖拽`)});let T=s(`rue:component:anchor`);t(m,T);let E=g(()=>{let l=u(),f=s(`rue:component:anchor`);t(l,f);let m=g(()=>{let n=u(),r=d(`div`,n);t(n,r),e(r,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let s=d(`div`,r);t(r,s),e(s,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),t(s,o(`Filters`));let l=d(`div`,r);t(r,l),e(l,`mb-4 text-sm leading-6 text-base-content/70`),t(l,o(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let f=d(`div`,r);t(r,f),e(f,`text-xs text-base-content/60`);let m=c(f);return t(f,m),a(()=>{p(m,i.value)}),n});a(()=>{let e=v(U.Panel,{size:n.value[0],resizable:r.value,children:m});b(()=>_(e,l,f))});let h=s(`rue:component:anchor`);t(l,h);let y=g(()=>{let r=u(),i=d(`div`,r);t(r,i),e(i,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let s=d(`div`,i);t(i,s),e(s,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),t(s,o(`Results`));let l=d(`div`,i);t(i,l),e(l,`mb-4 text-sm leading-6 text-base-content/70`),t(l,o(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let f=d(`div`,i);t(i,f),e(f,`text-sm text-base-content/70`),t(f,o(`受控尺寸：`));let m=c(f);return t(f,m),a(()=>{p(m,n.value.join(` / `))}),r});return a(()=>{let e=v(U.Panel,{size:n.value[1],children:y});b(()=>_(e,l,h))}),l});return a(()=>{let e=v(U,{style:{height:300},onResize:e=>{n.value=e,i.value=`当前尺寸：${e.join(` / `)}`},children:E});b(()=>_(e,m,T))}),m})},me=()=>{let{triptychSizes:n,triptychStatus:r}=S(`useSetup:0:0:dup1`,()=>y(()=>({triptychSizes:S(`ref:1:3`,()=>m(W.slice())),triptychStatus:S(`ref:1:4`,()=>m(`双击任意分隔柄可重置`))})));return g(i=>{let o=d(`div`,i);e(o,`space-y-4`);let l=d(`div`,o);t(o,l),e(l,`text-sm text-base-content/65`);let f=c(l);t(l,f),a(()=>{p(f,r.value)});let m=s(`rue:component:anchor`);t(o,m);let h=g(()=>{let e=u(),r=s(`rue:component:anchor`);t(e,r);let i=v(Q,{title:`Sources`,subtitle:`左侧资源树或文档大纲。`});a(()=>{let t=v(U.Panel,{size:n.value[0],min:120,children:i});b(()=>_(t,e,r))});let o=s(`rue:component:anchor`);t(e,o);let c=v(Q,{title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`});a(()=>{let t=v(U.Panel,{size:n.value[1],min:180,children:c});b(()=>_(t,e,o))});let l=s(`rue:component:anchor`);t(e,l);let d=v(Q,{title:`Preview`,subtitle:`右侧实时预览或审阅信息。`});return a(()=>{let t=v(U.Panel,{size:n.value[2],min:120,children:d});b(()=>_(t,e,l))}),e});return a(()=>{let e=v(U,{style:{height:260},onResize:e=>{n.value=e,r.value=`当前布局：${e.join(` / `)}`},onDraggerDoubleClick:()=>{n.value=W.slice(),r.value=`已恢复 Sources / Editor / Preview 默认布局`},children:h});b(()=>_(e,o,m))}),o})},$=()=>{let{lazyStatus:n}=S(`useSetup:0:0:dup2`,()=>y(()=>({lazyStatus:S(`ref:1:5`,()=>m(`拖拽时只移动 handle，释放后才提交尺寸`))})));return g(r=>{let i=d(`div`,r);e(i,`space-y-4`);let l=d(`div`,i);t(i,l),e(l,`text-sm text-base-content/65`);let f=c(l);t(l,f),a(()=>{p(f,n.value)});let m=s(`rue:component:anchor`);t(i,m);let h=g(()=>{let n=u(),r=s(`rue:component:anchor`);t(n,r);let i=v(Q,{title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:g(()=>{let n=u(),r=d(`div`,n);return t(n,r),e(r,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),t(r,o(`Strategy setup`)),n})});_(v(U.Panel,{defaultSize:`44%`,min:`30%`,children:i}),n,r);let a=s(`rue:component:anchor`);t(n,a);let c=v(Q,{title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:g(()=>{let n=u(),r=d(`div`,n);t(n,r),e(r,`space-y-2 text-sm text-base-content/70`);let i=d(`div`,r);t(r,i),e(i,`rounded-box bg-base-200/70 px-3 py-2`),t(i,o(`Insight A`));let a=d(`div`,r);t(r,a),e(a,`rounded-box bg-base-200/70 px-3 py-2`),t(a,o(`Insight B`));let s=d(`div`,r);return t(r,s),e(s,`rounded-box bg-base-200/70 px-3 py-2`),t(s,o(`Insight C`)),n})});return _(v(U.Panel,{children:c}),n,a),n});return a(()=>{let e=v(U,{lazy:!0,style:{height:280},onResizeStart:()=>{n.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{n.value=`释放后已提交尺寸：${e.join(` / `)}`},children:h});b(()=>_(e,i,m))}),i})},he=()=>{let{tabs:n}=S(`useSetup:0:0:dup3`,()=>y(()=>({tabs:{basic:S(`ref:1:6`,()=>m(`preview`)),controlled:S(`ref:1:7`,()=>m(`preview`)),vertical:S(`ref:1:8`,()=>m(`preview`)),collapsible:S(`ref:1:9`,()=>m(`preview`)),reset:S(`ref:1:10`,()=>m(`preview`)),lazy:S(`ref:1:11`,()=>m(`preview`))}})));return g(r=>{let i=u(),l=s(`rue:component:anchor`);return t(i,l),_(v(E,{children:g(()=>{let r=u(),i=d(`div`,r);t(r,i),e(i,`max-w-none prose prose-sm md:prose-base`);let l=d(`h1`,i);t(i,l),t(l,o(`Splitter 分割面板`));let m=d(`p`,i);t(i,m),e(m,`text-sm mt-3 mb-3`),t(m,o(`Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它保留 Rue Design 当前的柔和卡片气质和细颗粒 handle 视觉，同时补上可拖拽、受控尺寸、垂直布局、 折叠、lazy 拖拽和双击重置这些更接近成熟组件库的核心能力。`));let h=d(`h2`,i);t(i,h),t(h,o(`何时使用`));let g=d(`ul`,i);t(i,g);let y=d(`li`,g);t(g,y),t(y,o(`需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。`));let x=d(`li`,g);t(g,x),t(x,o(`需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。`));let S=d(`li`,g);t(g,S),t(S,o(`需要在布局层提供折叠、受控重置和 lazy 拖拽，而不是只做静态栅格分栏。`));let C=d(`h2`,i);t(i,C),t(C,o(`推荐用法`));let E=d(`p`,i);t(i,E),e(E,`text-sm mt-3 mb-4`),t(E,o(`下面每个 JSX 示例都保留了完整结构，方便直接复制到页面组件里使用。`));let O=s(`rue:component:anchor`);t(i,O),a(()=>{let e=v(D,{title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:n.basic,preview:()=>w(U,{style:{height:280},children:[T(U.Panel,{defaultSize:`40%`,min:`24%`,max:`70%`,children:T(Q,{title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Overview`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Metrics`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Deployments`})]})})}),T(U.Panel,{children:T(Q,{title:`Editor`,subtitle:`右侧保留完整内容区，适合表单、文档或分析结果。`,children:T(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70`,children:`这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。`})})})]}),code:K});b(()=>_(e,i,O))});let k=s(`rue:component:anchor`);t(i,k),a(()=>{let e=v(D,{title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:n.controlled,preview:pe,code:q});b(()=>_(e,i,k))});let A=s(`rue:component:anchor`);t(i,A),a(()=>{let e=v(D,{title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:n.vertical,preview:()=>w(U,{orientation:`vertical`,style:{height:520},children:[T(U.Panel,{defaultSize:`32%`,min:`10%`,children:T(Q,{title:`Summary`,subtitle:`顶部保留关键指标和状态总览。`,children:w(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[T(`div`,{className:`rounded-box bg-success/12 p-3 text-sm`,children:`Success 18`}),T(`div`,{className:`rounded-box bg-warning/12 p-3 text-sm`,children:`Queued 4`}),T(`div`,{className:`rounded-box bg-info/12 p-3 text-sm`,children:`Running 2`})]})})}),T(U.Panel,{children:T(Q,{title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:T(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70`,children:`这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。`})})})]}),code:J});b(()=>_(e,i,A))});let j=s(`rue:component:anchor`);t(i,j),a(()=>{let e=v(D,{title:`Collapsible panels and custom handle`,summary:`折叠按钮和自定义 draggerIcon 适合三栏工作区，让辅助区可以快速收起。`,tab:n.collapsible,preview:()=>w(U,{style:{height:320},draggerIcon:T(`span`,{className:`inline-flex h-4 w-4 items-center justify-center text-[10px] font-black leading-none text-base-content/70`,children:`|||`}),collapsibleIcon:{start:T(`span`,{className:`text-xs`,children:`+`}),end:T(`span`,{className:`text-xs`,children:`-`})},children:[T(U.Panel,{defaultSize:`28%`,collapsible:{end:!0},children:T(Q,{title:`Palette`,subtitle:`左栏可快速折叠，适合图层、筛选器或工具箱。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Components`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Tokens`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Layers`})]})})}),T(U.Panel,{collapsible:{start:!0,end:!0},children:T(Q,{title:`Canvas`,subtitle:`中间主区保留最大的操作空间。`,children:T(`div`,{className:`flex h-40 items-center justify-center rounded-box border border-dashed border-base-300 bg-base-200/40 text-sm text-base-content/55`,children:`Main canvas`})})}),T(U.Panel,{defaultSize:`22%`,collapsible:{start:!0},children:T(Q,{title:`Inspector`,subtitle:`右侧检查面板按需展开，减少噪音。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{children:`Width: 320`}),T(`div`,{children:`Height: 180`}),T(`div`,{children:`Radius: 16`})]})})})]}),code:fe});b(()=>_(e,i,j))});let M=s(`rue:component:anchor`);t(i,M),a(()=>{let e=v(D,{title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:n.reset,preview:me,code:Y});b(()=>_(e,i,M))});let N=s(`rue:component:anchor`);t(i,N),a(()=>{let e=v(D,{title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:n.lazy,preview:$,code:X});b(()=>_(e,i,N))});let P=d(`h2`,i);t(i,P),f(P,`id`,`splitter-api`),t(P,o(`API`));let F=d(`p`,i);t(i,F),e(F,`text-sm mt-3 mb-4`),t(F,o(`Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是`));let I=c(F);t(F,I),p(I,` `);let L=d(`code`,F);t(F,L),t(L,o(`Splitter.Panel`)),t(F,o(`。 如果你在业务里需要把布局状态持久化，优先使用`));let ee=c(F);t(F,ee),p(ee,` `);let R=d(`code`,F);t(F,R),t(R,o(`size`)),t(F,o(`+`));let z=d(`code`,F);t(F,z),t(z,o(`onResize`)),t(F,o(`的受控写法；如果只需要默认占比，用`));let B=d(`code`,F);t(F,B),t(B,o(`defaultSize`)),t(F,o(`即可。`));let V=s(`rue:component:anchor`);return t(i,V),a(()=>{let e=v(Z,{rows:de});b(()=>_(e,i,V))}),r})}),i,l),i})};export{he as default};
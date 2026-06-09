import{$ as e,Ht as t,J as n,Kt as r,M as i,O as a,Q as o,Rt as s,S as c,Xt as l,Y as u,Z as d,ct as f,et as p,j as m,l as h,mt as g,ot as _,qt as v,s as y,t as b,tt as x}from"./vapor-runtime-aZAg0Qkw.js";import{a as S,n as C}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as w,i as T}from"./persistentSidebarPlayground-IkfbXpbu.js";import{r as E}from"./SidebarPlaygroundDesign-CS11MI8e.js";import{t as D}from"./PreviewBlock-Byu5jIqR.js";var O=.5,k=10,A=(e,t,n)=>Math.min(n,Math.max(t,e)),j=(e,t)=>t?`${e} ${t}`:e,M=e=>typeof e==`number`&&Number.isFinite(e)?`${e}px`:e,N=e=>{if(!(!e||typeof e!=`object`||Array.isArray(e)))return{...e,width:M(e.width),minWidth:M(e.minWidth),maxWidth:M(e.maxWidth),height:M(e.height),minHeight:M(e.minHeight),maxHeight:M(e.maxHeight)}},P=e=>Array.isArray(e)?e.flatMap(e=>P(e)):e==null||typeof e==`boolean`?[]:[e],F=e=>e.map(e=>Math.max(0,Math.round(e))),I=e=>e.reduce((e,t)=>e+t,0),L=(e,t)=>{let n=I(e);if(t<=0||n<=O)return e.slice();let r=t/n;return e.map(e=>e*r)},ee=(e,t)=>e.length===t.length?e.every((e,n)=>Math.abs(e-t[n])<=O):!1,R=(e,t,n)=>e||t||(n?`vertical`:`horizontal`),z=(e,t)=>{if(e==null)return;if(typeof e==`number`&&Number.isFinite(e))return Math.max(0,e);if(typeof e!=`string`)return;let n=e.trim();if(!n)return;if(n.endsWith(`%`)){let e=Number.parseFloat(n.slice(0,-1));return Number.isFinite(e)?Math.max(0,e/100*t):void 0}let r=Number.parseFloat(n);if(Number.isFinite(r))return Math.max(0,r)},B=e=>e?e===!0?{start:!0,end:!0,show:!0}:{start:!!e.start,end:!!e.end,show:e.showCollapsibleIcon!==!1}:{start:!1,end:!1,show:!1},V=(e,t,n)=>{if(n<=0)return e.map(()=>0);let r=e.map((e,n)=>typeof e!=`number`||!Number.isFinite(e)?NaN:A(e,t[n].min,t[n].max)),i=r.map((e,t)=>Number.isNaN(e)?t:-1).filter(e=>e>=0),a=r.reduce((e,t)=>Number.isNaN(t)?e:e+t,0),o=i.length?Math.max(n-a,0)/i.length:0;i.forEach(e=>{r[e]=A(o||n/Math.max(r.length,1),t[e].min,t[e].max)});for(let e=0;e<16;e+=1){let e=n-I(r);if(Math.abs(e)<=O)return r;if(e>0){let n=r.map((e,n)=>t[n].max-e>O?n:-1).filter(e=>e>=0);if(!n.length)return r;let i=e/n.length;n.forEach(e=>{r[e]=Math.min(r[e]+i,t[e].max)});continue}let i=r.map((e,n)=>e-t[n].min>O?n:-1).filter(e=>e>=0);if(!i.length)return r;let a=i.reduce((e,n)=>e+(r[n]-t[n].min),0);i.forEach(n=>{let o=r[n]-t[n].min,s=a<=O?1/i.length:o/a;r[n]=Math.max(r[n]+e*s,t[n].min)})}return r},te=(e,t)=>{if(!e)return 0;let n=e.getBoundingClientRect();return t===`vertical`?n.height||e.clientHeight||0:n.width||e.clientWidth||0},ne=(e,t)=>t===`vertical`?e.clientY:e.clientX,H=(e,t,n)=>e.map((e,r)=>{if(n[r])return{min:0,max:0};let i=z(e.min,t)??0,a=z(e.max,t)??t;return{min:A(i,0,t),max:A(Math.max(a,i),i,t)}}),re=(e,t,n,r)=>{let i=H(e,t,n),a=r&&r.length===e.length&&I(r)>O?L(r,t):void 0;return V(e.map((e,r)=>{if(n[r])return 0;let i=z(e.size,t);if(typeof i==`number`)return i;let o=z(e.defaultSize,t);if(typeof o==`number`)return o;if(a)return a[r]}),i,t)},ie=(e,t,n,r)=>{let i=e.slice(),a=e[n],o=a+e[n+1],s=Math.max(t[n].min,o-t[n+1].max),c=Math.min(t[n].max,o-t[n+1].min),l=A(a+r,s,c);return i[n]=l,i[n+1]=o-l,i},ae=(e,t,n,r)=>{if(!t[r])return V(e,t,n);let i=A(e[r],t[r].min,t[r].max),a=Array.from({length:e.length},()=>0),o=e.map((e,t)=>t).filter(e=>e!==r),s=o.map(e=>t[e]),c=V(o.map(t=>e[t]),s,Math.max(n-i,0));return a[r]=i,o.forEach((e,t)=>{a[e]=c[t]}),a},oe=e=>{let t=`M10 6 6 10l4 4`;e===`right`&&(t=`m6 6 4 4-4 4`),e===`up`&&(t=`m6 10 4-4 4 4`),e===`down`&&(t=`m6 6 4 4 4-4`);let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.setAttribute(`viewBox`,`0 0 16 16`),n.setAttribute(`fill`,`none`),n.setAttribute(`stroke`,`currentColor`),n.setAttribute(`stroke-width`,`1.75`),n.setAttribute(`class`,`h-3.5 w-3.5`);let r=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);return r.setAttribute(`d`,t),r.setAttribute(`stroke-linecap`,`round`),r.setAttribute(`stroke-linejoin`,`round`),n.appendChild(r),n},se=e=>{let t=document.createElement(`span`);t.className=e===`vertical`?`inline-grid h-2 w-3 grid-cols-3 grid-rows-2 place-items-center gap-px leading-none text-base-content/55`:`inline-grid h-3 w-2 grid-cols-2 grid-rows-3 place-items-center gap-px leading-none text-base-content/55`;for(let e=0;e<6;e+=1){let e=document.createElement(`span`);e.className=`h-[3px] w-[3px] rounded-full bg-current opacity-65`,t.appendChild(e)}return t},ce=(e,t,n)=>{if(e.innerHTML=``,t==null||t===!1){e.appendChild(n());return}if(typeof t==`string`||typeof t==`number`){e.textContent=String(t);return}if(typeof Node<`u`&&t instanceof Node){e.appendChild(t.cloneNode(!0));return}try{i(t,e)}catch{e.appendChild(n())}},le=(e,t,n)=>n===`vertical`?e===`end`?t?`down`:`up`:t?`up`:`down`:e===`end`?t?`right`:`left`:t?`left`:`right`,ue=e=>{let t=t=>e.getAttribute(t)??void 0,n=(t,n=!1)=>{let r=e.getAttribute(t);return r==null?n:r!==`false`};return{min:t(`data-rue-splitter-min`),max:t(`data-rue-splitter-max`),size:t(`data-rue-splitter-size`),defaultSize:t(`data-rue-splitter-default-size`),resizable:n(`data-rue-splitter-resizable`,!0),collapsible:{start:n(`data-rue-splitter-collapsible-start`),end:n(`data-rue-splitter-collapsible-end`),show:n(`data-rue-splitter-collapsible-show`)}}},U=Object.assign(({orientation:e,layout:t,vertical:n,lazy:i=!1,className:o,style:s,draggerIcon:l,collapsibleIcon:u,onDraggerDoubleClick:d,onResizeStart:f,onResize:p,onResizeEnd:h,onCollapse:g,children:_,...v})=>{let y=r(),b=r(),x=r(),S=r(),C=r(),w=r(),T=r(),E=r(),D=r(),A=r(),M=r(),L=r(!1),B=r(0),U=R(e,t,n);S.current||=[],C.current||=[],w.current||=[],T.current||=[],E.current||=[],D.current||=[];let W=N(s),G=U===`vertical`&&W?.height==null?{height:W?.minHeight??`320px`}:void 0,de=()=>{let e=y.current;return e?Array.from(e.children).filter(e=>e instanceof HTMLElement&&e.getAttribute(`data-rue-splitter-panel`)===`true`):[]},K=e=>{let t=T.current;if(t.length===e)return t;let n=Array.from({length:e},(e,n)=>t[n]??!1);return T.current=n,E.current=Array.from({length:e},(e,t)=>E.current?.[t]??0),n},q=()=>te(y.current,U),J=e=>{p&&p(F(e))},fe=(e,t)=>{g&&g(e.slice(),F(t))},Y=e=>{let t=S.current??[],n=T.current??[];t.forEach((t,r)=>{let i=e[r]??0;t.dataset.rueSplitterPanelIndex=String(r),t.dataset.rueSplitterCollapsed=n[r]?`true`:`false`,t.style.flex=`0 0 auto`,t.style.flexBasis=`${i}px`,U===`vertical`?(t.style.height=`${i}px`,t.style.width=``):(t.style.width=`${i}px`,t.style.height=``)})},X=()=>{let e=D.current??[],t=C.current??[],n=w.current??[],r=T.current??[],a=M.current,o=B.current;e.forEach((e,s)=>{let c=t[s],d=t[s+1],f=I(n.slice(0,s+1)),p=r[s]===!0,m=r[s+1]===!0,h=a===s,g=i&&h?U===`vertical`?`translateY(${o}px)`:`translateX(${o}px)`:``;e.root.dataset.rueSplitterHandleActive=h?`true`:`false`,e.root.style.transform=g,U===`vertical`?(e.root.style.top=`${f-k/2}px`,e.root.style.left=`0`,e.root.style.height=`${k}px`,e.root.style.width=`100%`):(e.root.style.left=`${f-k/2}px`,e.root.style.top=`0`,e.root.style.width=`${k}px`,e.root.style.height=`100%`),e.previousButton&&e.previousIconHost&&(e.previousButton.setAttribute(`aria-label`,`${p?`展开`:`折叠`}面板 ${s+1}`),ce(e.previousIconHost,u?.end,()=>oe(le(`end`,p,U)))),e.nextButton&&e.nextIconHost&&(e.nextButton.setAttribute(`aria-label`,`${m?`展开`:`折叠`}面板 ${s+2}`),ce(e.nextIconHost,u?.start,()=>oe(le(`start`,m,U)))),ce(e.draggerHost,l,()=>se(U));let _=!c.resizable||!d?.resizable;e.root.dataset.rueSplitterHandleDisabled=_?`true`:`false`,_&&(e.root.style.cursor=`default`)})},Z=()=>{let e=b.current;e&&(e.innerHTML=``),D.current=[]},Q=(e,t=!1)=>{let n=q(),r=T.current??[],i=V(e,H(C.current??[],n,r),n);w.current=i,i.forEach((e,t)=>{!r[t]&&e>O&&(E.current[t]=e)}),Y(i),X(),t&&J(i)},pe=e=>{let t=C.current??[];if(!t[e])return;let n=q(),r=K(t.length).slice(),i=w.current?.length===t.length?w.current.slice():re(t,n,r);if(r[e]){r[e]=!1,i[e]=z(t[e].size,n)??E.current?.[e]??z(t[e].defaultSize,n)??n/Math.max(t.length,1),T.current=r;let a=ae(i,H(t,n,r),n,e);w.current=a,Y(a),X(),J(a),fe(r,a);return}else i[e]>O&&(E.current[e]=i[e]),r[e]=!0,i[e]=0;T.current=r;let a=V(i,H(t,n,r),n);w.current=a,Y(a),X(),J(a),fe(r,a)},me=()=>{Z();let e=b.current,t=C.current??[];if(!e||t.length<=1)return;let n=[];t.slice(0,-1).forEach((r,i)=>{let a=t[i+1],o=document.createElement(`div`);o.setAttribute(`role`,`separator`),o.setAttribute(`aria-orientation`,U),o.setAttribute(`aria-label`,`调整面板 ${i+1} 与 ${i+2}`),o.setAttribute(`data-rue-splitter-handle`,String(i)),o.className=U===`vertical`?`pointer-events-auto absolute z-10 h-2.5 w-full select-none cursor-row-resize`:`pointer-events-auto absolute z-10 h-full w-2.5 select-none cursor-col-resize`;let s=document.createElement(`span`);s.className=U===`vertical`?`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-base-300/90`:`absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-base-300/90`,o.appendChild(s);let c=document.createElement(`div`);c.className=U===`vertical`?`absolute left-1/2 top-1/2 flex min-w-[2.25rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border border-base-300 bg-base-100/95 px-1 py-0.5 text-base-content/70 shadow-sm`:`absolute left-1/2 top-1/2 flex min-h-[2.25rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-0.5 rounded-full border border-base-300 bg-base-100/95 px-1 py-0.5 text-base-content/70 shadow-sm`,o.appendChild(c);let l,u,f,p;r.collapsible.end&&r.collapsible.show&&(l=document.createElement(`button`),l.type=`button`,l.className=`inline-flex h-4 w-4 items-center justify-center rounded-full text-base-content/60 transition hover:bg-base-200 hover:text-base-content`,f=document.createElement(`span`),f.className=`inline-flex h-full w-full items-center justify-center leading-none`,l.appendChild(f),l.addEventListener(`mousedown`,e=>{e.stopPropagation()}),l.addEventListener(`click`,e=>{e.stopPropagation(),pe(i)}),c.appendChild(l));let m=document.createElement(`span`);m.className=`inline-flex h-4 w-4 items-center justify-center leading-none`,m.setAttribute(`aria-hidden`,`true`),c.appendChild(m),a?.collapsible.start&&a.collapsible.show&&(u=document.createElement(`button`),u.type=`button`,u.className=`inline-flex h-4 w-4 items-center justify-center rounded-full text-base-content/60 transition hover:bg-base-200 hover:text-base-content`,p=document.createElement(`span`),p.className=`inline-flex h-full w-full items-center justify-center leading-none`,u.appendChild(p),u.addEventListener(`mousedown`,e=>{e.stopPropagation()}),u.addEventListener(`click`,e=>{e.stopPropagation(),pe(i+1)}),c.appendChild(u)),o.addEventListener(`mousedown`,e=>{e.target?.closest(`button`)||ye(e,i)}),o.addEventListener(`dblclick`,e=>{e.target?.closest(`button`)||d&&d(i)}),(!r.resizable||!a?.resizable)&&(o.dataset.rueSplitterHandleDisabled=`true`,o.style.cursor=`default`),e.appendChild(o),n.push({root:o,previousButton:l,nextButton:u,draggerHost:m,previousIconHost:f,nextIconHost:p})}),D.current=n,X()},$=(e=!0)=>{S.current=de(),C.current=S.current.map(ue);let t=C.current;if(!t.length){w.current=[],T.current=[],Z();return}let n=q(),r=K(t.length),i=re(t,n,r,e&&w.current?.length===t.length?w.current:void 0);ee(w.current??[],i)||(w.current=i),i.forEach((e,t)=>{!r[t]&&e>O&&(E.current[t]=e)}),Y(i),me()},he=()=>{L.current||(L.current=!0,queueMicrotask(()=>{L.current=!1,!(!y.current||x.current)&&$(!1)}))},ge=()=>{typeof window>`u`||(window.removeEventListener(`mousemove`,_e),window.removeEventListener(`mouseup`,ve))};function _e(e){let t=x.current;if(!t)return;let n=H(C.current??[],t.availableSize,T.current??[]),r=ne(e,U)-t.startPoint,a=ie(t.startSizes,n,t.index,r),o=a[t.index]-t.startSizes[t.index];if(A.current=a,B.current=i?o:0,i){X();return}Q(a,!0)}function ve(){let e=x.current;if(!e)return;let t=w.current??[],n=C.current,r=i?A.current??e.startSizes:t.length===n?.length?t.slice():e.startSizes;i&&Q(r,!0),x.current=null,A.current=null,M.current=null,B.current=0,X(),ge(),h&&h(F(r))}let ye=(e,t)=>{if(e.button!==0)return;S.current=de(),C.current=S.current.map(ue);let n=C.current??[];if(!n[t]||!n[t+1]||!n[t].resizable||!n[t+1].resizable)return;e.preventDefault();let r=q(),i=w.current?.length===n.length?w.current.slice():re(n,r,K(n.length));x.current={index:t,startPoint:ne(e,U),startSizes:i,availableSize:r},A.current=null,M.current=t,B.current=0,X(),typeof window<`u`&&(window.addEventListener(`mousemove`,_e),window.addEventListener(`mouseup`,ve)),f&&f(F(i))};return a(()=>{$(!1);let e=()=>{x.current||$(!0)};y.current?.addEventListener(`rue-splitter-panel-config-change`,e);let t=()=>{x.current||$(!0)};typeof window<`u`&&window.addEventListener(`resize`,t),m(()=>{ge(),y.current?.removeEventListener(`rue-splitter-panel-config-change`,e),typeof window<`u`&&window.removeEventListener(`resize`,t),Z()})}),he(),c(`div`,{...v,ref:y,className:j(j(j(`rue-splitter relative flex min-h-0 min-w-0 overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm`,U===`vertical`?`flex-col`:void 0),`items-stretch`),o),style:{...G,...W,flexDirection:U===`vertical`?`column`:`row`},"data-rue-splitter-root":`true`,"data-rue-splitter-orientation":U,"data-rue-splitter-lazy":i?`true`:`false`},...P(_),c(`div`,{ref:b,className:`pointer-events-none absolute inset-0`,"aria-hidden":`true`}))},{Panel:({className:e,style:t,min:n,max:i,size:a,defaultSize:o,resizable:s=!0,collapsible:l,children:u,...d})=>{let f=r(),p=B(l);return queueMicrotask(()=>{let e=f.current;e&&e.dispatchEvent(new Event(`rue-splitter-panel-config-change`,{bubbles:!0}))}),c(`div`,{...d,ref:f,className:j(`rue-splitter-panel relative min-h-0 min-w-0 overflow-hidden bg-base-100`,e),style:t,"data-rue-splitter-panel":`true`,"data-rue-splitter-min":n==null?void 0:String(n),"data-rue-splitter-max":i==null?void 0:String(i),"data-rue-splitter-size":a==null?void 0:String(a),"data-rue-splitter-default-size":o==null?void 0:String(o),"data-rue-splitter-resizable":s?`true`:`false`,"data-rue-splitter-collapsible-start":p.start?`true`:void 0,"data-rue-splitter-collapsible-end":p.end?`true`:void 0,"data-rue-splitter-collapsible-show":p.show?`true`:void 0},c(`div`,{className:`h-full w-full`},...P(u)))}}),W=[180,260,160],G=e=>Array.isArray(e)?e.flatMap(e=>G(e)):e==null||typeof e==`boolean`?[]:[e],de=[{prop:`orientation / layout / vertical`,description:`控制分割方向；推荐用 orientation，vertical 作为兼容别名保留。`,type:`'horizontal' | 'vertical' / boolean`,defaultValue:`'horizontal'`},{prop:`lazy`,description:`开启后拖拽期间只移动分隔柄，释放鼠标时才真正提交面板尺寸。`,type:`boolean`,defaultValue:`false`},{prop:`draggerIcon / collapsibleIcon`,description:`自定义中间拖拽柄与折叠按钮内容，保持 Rue 自己的 handle 结构。`,type:`any / { start?: any; end?: any }`,defaultValue:`-`},{prop:`onResizeStart / onResize / onResizeEnd`,description:`拖拽开始、拖拽中、拖拽结束的回调，统一返回当前所有面板尺寸。`,type:`(sizes: number[]) => void`,defaultValue:`-`},{prop:`onDraggerDoubleClick`,description:`双击分隔柄时触发，适合和“重置布局”联动。`,type:`(index: number) => void`,defaultValue:`-`},{prop:`onCollapse`,description:`折叠或展开面板后触发，返回 collapsed 状态与最新尺寸。`,type:`(collapsed: boolean[], sizes: number[]) => void`,defaultValue:`-`},{prop:`Splitter.Panel size`,description:`受控尺寸，支持像素数值或百分比字符串。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel defaultSize`,description:`非受控初始尺寸，常用于两栏默认占比。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel min / max`,description:`限制面板最小值和最大值，防止拖拽过界。`,type:`number | string`,defaultValue:`-`},{prop:`Splitter.Panel resizable`,description:`禁用相邻分隔柄的拖拽能力，但保留布局结构。`,type:`boolean`,defaultValue:`true`},{prop:`Splitter.Panel collapsible`,description:`支持 boolean 快速折叠，也支持 start/end/showCollapsibleIcon 精细控制按钮展示。`,type:`boolean | { start?: boolean; end?: boolean; showCollapsibleIcon?: boolean | auto }`,defaultValue:`false`}],K=`import type { FC } from '@rue-js/rue'
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

export default LazySplitterDemo`,Z=n=>h(r=>{let i=e(`div`,r);f(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=e(`table`,i);u(i,a),f(a,`table table-zebra`);let s=e(`thead`,a);u(a,s);let c=e(`tr`,s);u(s,c);let m=e(`th`,c);u(c,m),u(m,p(`属性`));let g=e(`th`,c);u(c,g),u(g,p(`说明`));let v=e(`th`,c);u(c,v),u(v,p(`类型`));let b=e(`th`,c);u(c,b),u(b,p(`默认值`));let x=e(`tbody`,a);u(a,x);let S=d(`rue:list:start`),w=d(`rue:list:end`);u(x,S),u(x,w);let T=new Map;return l(()=>{T=C({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,r,i,a,s)=>{y(h(()=>{let r=o(),i=e(`tr`,r);u(r,i),l(()=>{_(i,`key`,String(n.prop))});let a=e(`td`,i);u(i,a);let s=e(`code`,a);u(a,s);let c=d(`rue:slot:anchor`);u(s,c),l(()=>{let e=n.prop;t(()=>y(e,s,c))});let f=e(`td`,i);u(i,f);let p=d(`rue:slot:anchor`);u(f,p),l(()=>{let e=n.description;t(()=>y(e,f,p))});let m=e(`td`,i);u(i,m);let h=e(`code`,m);u(m,h);let g=d(`rue:slot:anchor`);u(h,g),l(()=>{let e=n.type;t(()=>y(e,h,g))});let v=e(`td`,i);u(i,v);let b=e(`code`,v);u(v,b);let x=d(`rue:slot:anchor`);return u(b,x),l(()=>{let e=n.defaultValue;t(()=>y(e,b,x))}),r}),r,i)}})}),i}),Q=e=>c(`div`,{className:`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)] ${e.className??``}`.trim()},c(`div`,{className:`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`},e.title),c(`div`,{className:`mb-4 text-sm leading-6 text-base-content/70`},e.subtitle),c(`div`,{className:`min-h-0`},...G(e.children))),pe=()=>{let{controlledSizes:r,controlledResizable:i,controlledStatus:a}=S(`useSetup:0:0`,()=>v(()=>({controlledSizes:S(`ref:1:0`,()=>s([`38%`,`62%`])),controlledResizable:S(`ref:1:1`,()=>s(!0)),controlledStatus:S(`ref:1:2`,()=>s(`等待拖拽`))})));return h(s=>{let c=e(`div`,s);f(c,`space-y-4`);let m=e(`div`,c);u(c,m),f(m,`flex flex-wrap gap-2`);let v=e(`button`,m);u(m,v),_(v,`type`,`button`),f(v,`btn btn-sm`),n(v,`click`,()=>{r.value=[`30%`,`70%`],a.value=`已切到 30 / 70 预设`}),u(v,p(`30 / 70`));let S=e(`button`,m);u(m,S),_(S,`type`,`button`),f(S,`btn btn-sm btn-outline`),n(S,`click`,()=>{r.value=[`50%`,`50%`],a.value=`已重置为 50 / 50`}),u(S,p(`平分`));let C=e(`button`,m);u(m,C),_(C,`type`,`button`),l(()=>{f(C,String(`btn btn-sm btn-ghost ${i.value?``:`btn-active`}`.trim()))}),n(C,`click`,()=>{i.value=!i.value,a.value=i.value?`已恢复左栏拖拽`:`已锁定左栏拖拽`});let w=x(C);u(C,w),l(()=>{g(w,i.value?`锁定左栏`:`恢复拖拽`)});let T=d(`rue:component:anchor`);u(c,T);let E=h(()=>{let n=o(),s=d(`rue:component:anchor`);u(n,s);let c=h(()=>{let t=o(),n=e(`div`,t);u(t,n),f(n,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let r=e(`div`,n);u(n,r),f(r,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),u(r,p(`Filters`));let i=e(`div`,n);u(n,i),f(i,`mb-4 text-sm leading-6 text-base-content/70`),u(i,p(`受控模式下，这一栏可以被外部按钮锁定或重置。`));let s=e(`div`,n);u(n,s),f(s,`text-xs text-base-content/60`);let c=x(s);return u(s,c),l(()=>{g(c,a.value)}),t});l(()=>{let e=b(U.Panel,{size:r.value[0],resizable:i.value,children:c});t(()=>y(e,n,s))});let m=d(`rue:component:anchor`);u(n,m);let _=h(()=>{let t=o(),n=e(`div`,t);u(t,n),f(n,`h-full rounded-box border border-base-300/75 bg-base-100/95 p-4 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.55)]`);let i=e(`div`,n);u(n,i),f(i,`mb-3 text-[11px] uppercase tracking-[0.24em] text-base-content/45`),u(i,p(`Results`));let a=e(`div`,n);u(n,a),f(a,`mb-4 text-sm leading-6 text-base-content/70`),u(a,p(`右栏跟随 onResize 返回值同步，适合持久化工作台布局。`));let s=e(`div`,n);u(n,s),f(s,`text-sm text-base-content/70`),u(s,p(`受控尺寸：`));let c=x(s);return u(s,c),l(()=>{g(c,r.value.join(` / `))}),t});return l(()=>{let e=b(U.Panel,{size:r.value[1],children:_});t(()=>y(e,n,m))}),n});return l(()=>{let e=b(U,{style:{height:300},onResize:e=>{r.value=e,a.value=`当前尺寸：${e.join(` / `)}`},children:E});t(()=>y(e,c,T))}),c})},me=()=>{let{triptychSizes:n,triptychStatus:r}=S(`useSetup:0:0:dup1`,()=>v(()=>({triptychSizes:S(`ref:1:3`,()=>s(W.slice())),triptychStatus:S(`ref:1:4`,()=>s(`双击任意分隔柄可重置`))})));return h(i=>{let a=e(`div`,i);f(a,`space-y-4`);let s=e(`div`,a);u(a,s),f(s,`text-sm text-base-content/65`);let c=x(s);u(s,c),l(()=>{g(c,r.value)});let p=d(`rue:component:anchor`);u(a,p);let m=h(()=>{let e=o(),r=d(`rue:component:anchor`);u(e,r);let i=b(Q,{title:`Sources`,subtitle:`左侧资源树或文档大纲。`});l(()=>{let a=b(U.Panel,{size:n.value[0],min:120,children:i});t(()=>y(a,e,r))});let a=d(`rue:component:anchor`);u(e,a);let s=b(Q,{title:`Editor`,subtitle:`中间主编辑区通常需要最大的宽度。`});l(()=>{let r=b(U.Panel,{size:n.value[1],min:180,children:s});t(()=>y(r,e,a))});let c=d(`rue:component:anchor`);u(e,c);let f=b(Q,{title:`Preview`,subtitle:`右侧实时预览或审阅信息。`});return l(()=>{let r=b(U.Panel,{size:n.value[2],min:120,children:f});t(()=>y(r,e,c))}),e});return l(()=>{let e=b(U,{style:{height:260},onResize:e=>{n.value=e,r.value=`当前布局：${e.join(` / `)}`},onDraggerDoubleClick:()=>{n.value=W.slice(),r.value=`已恢复 Sources / Editor / Preview 默认布局`},children:m});t(()=>y(e,a,p))}),a})},$=()=>{let{lazyStatus:n}=S(`useSetup:0:0:dup2`,()=>v(()=>({lazyStatus:S(`ref:1:5`,()=>s(`拖拽时只移动 handle，释放后才提交尺寸`))})));return h(r=>{let i=e(`div`,r);f(i,`space-y-4`);let a=e(`div`,i);u(i,a),f(a,`text-sm text-base-content/65`);let s=x(a);u(a,s),l(()=>{g(s,n.value)});let c=d(`rue:component:anchor`);u(i,c);let m=h(()=>{let t=o(),n=d(`rue:component:anchor`);u(t,n);let r=b(Q,{title:`Analysis`,subtitle:`左侧适合放图表、规则或输入参数。`,children:h(()=>{let t=o(),n=e(`div`,t);return u(t,n),f(n,`rounded-box bg-primary/10 p-4 text-sm text-base-content/70`),u(n,p(`Strategy setup`)),t})});y(b(U.Panel,{defaultSize:`44%`,min:`30%`,children:r}),t,n);let i=d(`rue:component:anchor`);u(t,i);let a=b(Q,{title:`Output`,subtitle:`右侧接收结果、日志或建议列表。`,children:h(()=>{let t=o(),n=e(`div`,t);u(t,n),f(n,`space-y-2 text-sm text-base-content/70`);let r=e(`div`,n);u(n,r),f(r,`rounded-box bg-base-200/70 px-3 py-2`),u(r,p(`Insight A`));let i=e(`div`,n);u(n,i),f(i,`rounded-box bg-base-200/70 px-3 py-2`),u(i,p(`Insight B`));let a=e(`div`,n);return u(n,a),f(a,`rounded-box bg-base-200/70 px-3 py-2`),u(a,p(`Insight C`)),t})});return y(b(U.Panel,{children:a}),t,i),t});return l(()=>{let e=b(U,{lazy:!0,style:{height:280},onResizeStart:()=>{n.value=`开始拖拽，当前只移动 handle 预览位移`},onResize:e=>{n.value=`释放后已提交尺寸：${e.join(` / `)}`},children:m});t(()=>y(e,i,c))}),i})},he=()=>{let{tabs:n}=S(`useSetup:0:0:dup3`,()=>v(()=>({tabs:{basic:S(`ref:1:6`,()=>s(`preview`)),controlled:S(`ref:1:7`,()=>s(`preview`)),vertical:S(`ref:1:8`,()=>s(`preview`)),collapsible:S(`ref:1:9`,()=>s(`preview`)),reset:S(`ref:1:10`,()=>s(`preview`)),lazy:S(`ref:1:11`,()=>s(`preview`))}})));return h(r=>{let i=o(),a=d(`rue:component:anchor`);return u(i,a),y(b(E,{children:h(()=>{let r=o(),i=e(`div`,r);u(r,i),f(i,`max-w-none prose prose-sm md:prose-base`);let a=e(`h1`,i);u(i,a),u(a,p(`Splitter 分割面板`));let s=e(`p`,i);u(i,s),f(s,`text-sm mt-3 mb-3`),u(s,p(`Splitter 在 Rue 里不是一条简单的分隔线，而是一套适合工作台、配置台和双栏内容区的布局行为层。 它保留 Rue Design 当前的柔和卡片气质和细颗粒 handle 视觉，同时补上可拖拽、受控尺寸、垂直布局、 折叠、lazy 拖拽和双击重置这些更接近成熟组件库的核心能力。`));let c=e(`h2`,i);u(i,c),u(c,p(`何时使用`));let m=e(`ul`,i);u(i,m);let h=e(`li`,m);u(m,h),u(h,p(`需要左右或上下两个工作区同时存在，并允许用户按内容密度自己调节比例。`));let v=e(`li`,m);u(m,v),u(v,p(`需要把筛选区、编辑区、预览区、日志区这类不同角色的面板拆开，但仍保持同一个页面上下文。`));let S=e(`li`,m);u(m,S),u(S,p(`需要在布局层提供折叠、受控重置和 lazy 拖拽，而不是只做静态栅格分栏。`));let C=e(`h2`,i);u(i,C),u(C,p(`推荐用法`));let E=e(`p`,i);u(i,E),f(E,`text-sm mt-3 mb-4`),u(E,p(`下面每个 JSX 示例都保留了完整结构，方便直接复制到页面组件里使用。`));let O=d(`rue:component:anchor`);u(i,O),l(()=>{let e=b(D,{title:`Basic workspace split`,summary:`最基础的双栏写法，默认比例、最小值和最大值都在 Panel 上声明。`,tab:n.basic,preview:()=>w(U,{style:{height:280},children:[T(U.Panel,{defaultSize:`40%`,min:`24%`,max:`70%`,children:T(Q,{title:`Navigation`,subtitle:`把目录、资源树或查询条件放在左侧。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Overview`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Metrics`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Deployments`})]})})}),T(U.Panel,{children:T(Q,{title:`Editor`,subtitle:`右侧保留完整内容区，适合表单、文档或分析结果。`,children:T(`div`,{className:`rounded-box border border-dashed border-base-300 bg-base-200/50 p-4 text-sm leading-7 text-base-content/70`,children:`这里是主工作区。拖动中间的 handle，可以把左右空间分配给导航和正文。`})})})]}),code:K});t(()=>y(e,i,O))});let k=d(`rue:component:anchor`);u(i,k),l(()=>{let e=b(D,{title:`Controlled sizes and reset`,summary:`受控模式适合和按钮、预设布局、权限开关联动。`,tab:n.controlled,preview:pe,code:q});t(()=>y(e,i,k))});let A=d(`rue:component:anchor`);u(i,A),l(()=>{let e=b(D,{title:`Vertical split`,summary:`上下分栏适合 dashboard 顶部概览 + 底部明细、编辑区 + 日志区这类结构。`,tab:n.vertical,preview:()=>w(U,{orientation:`vertical`,style:{height:520},children:[T(U.Panel,{defaultSize:`32%`,min:`10%`,children:T(Q,{title:`Summary`,subtitle:`顶部保留关键指标和状态总览。`,children:w(`div`,{className:`grid gap-3 sm:grid-cols-3`,children:[T(`div`,{className:`rounded-box bg-success/12 p-3 text-sm`,children:`Success 18`}),T(`div`,{className:`rounded-box bg-warning/12 p-3 text-sm`,children:`Queued 4`}),T(`div`,{className:`rounded-box bg-info/12 p-3 text-sm`,children:`Running 2`})]})})}),T(U.Panel,{children:T(Q,{title:`Details`,subtitle:`底部用来承接更长的列表、表格或日志。`,children:T(`div`,{className:`rounded-box bg-base-200/60 p-4 text-sm leading-7 text-base-content/70`,children:`这里可以放明细列表、数据表格、执行日志，或者任何比顶部更“长”的内容。`})})})]}),code:J});t(()=>y(e,i,A))});let j=d(`rue:component:anchor`);u(i,j),l(()=>{let e=b(D,{title:`Collapsible panels and custom handle`,summary:`折叠按钮和自定义 draggerIcon 适合三栏工作区，让辅助区可以快速收起。`,tab:n.collapsible,preview:()=>w(U,{style:{height:320},draggerIcon:T(`span`,{className:`inline-flex h-4 w-4 items-center justify-center text-[10px] font-black leading-none text-base-content/70`,children:`|||`}),collapsibleIcon:{start:T(`span`,{className:`text-xs`,children:`+`}),end:T(`span`,{className:`text-xs`,children:`-`})},children:[T(U.Panel,{defaultSize:`28%`,collapsible:{end:!0},children:T(Q,{title:`Palette`,subtitle:`左栏可快速折叠，适合图层、筛选器或工具箱。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Components`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Tokens`}),T(`div`,{className:`rounded-box bg-base-200/70 px-3 py-2`,children:`Layers`})]})})}),T(U.Panel,{collapsible:{start:!0,end:!0},children:T(Q,{title:`Canvas`,subtitle:`中间主区保留最大的操作空间。`,children:T(`div`,{className:`flex h-40 items-center justify-center rounded-box border border-dashed border-base-300 bg-base-200/40 text-sm text-base-content/55`,children:`Main canvas`})})}),T(U.Panel,{defaultSize:`22%`,collapsible:{start:!0},children:T(Q,{title:`Inspector`,subtitle:`右侧检查面板按需展开，减少噪音。`,children:w(`div`,{className:`space-y-2 text-sm text-base-content/70`,children:[T(`div`,{children:`Width: 320`}),T(`div`,{children:`Height: 180`}),T(`div`,{children:`Radius: 16`})]})})})]}),code:fe});t(()=>y(e,i,j))});let M=d(`rue:component:anchor`);u(i,M),l(()=>{let e=b(D,{title:`Multiple panels and double click reset`,summary:`多面板场景里，双击分隔柄常常比额外按钮更顺手。`,tab:n.reset,preview:me,code:Y});t(()=>y(e,i,M))});let N=d(`rue:component:anchor`);u(i,N),l(()=>{let e=b(D,{title:`Lazy drag for analysis view`,summary:`lazy 模式更适合重内容布局，拖动过程先预览位置，释放后再真正提交尺寸。`,tab:n.lazy,preview:$,code:X});t(()=>y(e,i,N))});let P=e(`h2`,i);u(i,P),_(P,`id`,`splitter-api`),u(P,p(`API`));let F=e(`p`,i);u(i,F),f(F,`text-sm mt-3 mb-4`),u(F,p(`Splitter 的根组件负责布局和交互，所有真正参与计算的子节点都应该是`));let I=x(F);u(F,I),g(I,` `);let L=e(`code`,F);u(F,L),u(L,p(`Splitter.Panel`)),u(F,p(`。 如果你在业务里需要把布局状态持久化，优先使用`));let ee=x(F);u(F,ee),g(ee,` `);let R=e(`code`,F);u(F,R),u(R,p(`size`)),u(F,p(`+`));let z=e(`code`,F);u(F,z),u(z,p(`onResize`)),u(F,p(`的受控写法；如果只需要默认占比，用`));let B=e(`code`,F);u(F,B),u(B,p(`defaultSize`)),u(F,p(`即可。`));let V=d(`rue:component:anchor`);return u(i,V),l(()=>{let e=b(Z,{rows:de});t(()=>y(e,i,V))}),r})}),i,a),i})};export{he as default};
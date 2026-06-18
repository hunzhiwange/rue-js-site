const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BheVC8rZ.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{$ as t,A as n,Ht as r,J as i,Kt as a,Lt as o,M as s,Q as c,Ut as l,X as u,Xt as d,Z as f,a as p,at as m,et as h,i as g,l as _,p as v,pt as y,q as b,qt as x,s as S,st as C,t as w}from"./vapor-runtime-iQZthBPQ.js";import{a as T,n as E}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as D,i as O}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as k}from"./preload-helper-CsoeaaUJ.js";import{t as A}from"./Code-CZqShVUj.js";import{t as j}from"./tabs-BBuGEPV7.js";import{r as M}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as N}from"./preview-test-gate-PvTX1w6L.js";var P=(e,t)=>t?`${e} ${t}`:e,ee=()=>({date:new Map,month:new Map,year:new Map}),F=new Map,I=new Map,te=new Map,ne=new Map,re=new Map,L=()=>typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now(),ie=(e,t)=>({enabled:e,start:e?L():0,threshold:t,cellCount:0,customRenderCount:0,cellRenderCount:0,fullCellRenderCount:0,dateCellRenderCount:0,dateFullCellRenderCount:0,monthCellRenderCount:0,monthFullCellRenderCount:0,slowCells:[]}),R=(e,t)=>{e.enabled&&(e.customRenderCount+=1,t===`cellRender`?e.cellRenderCount+=1:t===`fullCellRender`?e.fullCellRenderCount+=1:t===`dateCellRender`?e.dateCellRenderCount+=1:t===`dateFullCellRender`?e.dateFullCellRenderCount+=1:t===`monthCellRender`?e.monthCellRenderCount+=1:e.monthFullCellRenderCount+=1)},ae=(e,t,n,r)=>{if(!e.enabled)return r();R(e,t);let i=L(),a=r(),o=L()-i;return o>=e.threshold&&e.slowCells.push({type:n.type,key:n.key,renderName:t,duration:o,row:n.row,column:n.column}),a},oe=(e,t,n,r)=>{if(!e||!t.enabled)return;let i=L()-t.start,a={component:`Calendar`,mode:n,phase:r,duration:i,cellCount:t.cellCount,customRenderCount:t.customRenderCount,cellRenderCount:t.cellRenderCount,fullCellRenderCount:t.fullCellRenderCount,dateCellRenderCount:t.dateCellRenderCount,dateFullCellRenderCount:t.dateFullCellRenderCount,monthCellRenderCount:t.monthCellRenderCount,monthFullCellRenderCount:t.monthFullCellRenderCount,slow:i>=t.threshold||t.slowCells.length>0,threshold:t.threshold,slowCells:t.slowCells.slice()},o=()=>e(a);typeof queueMicrotask==`function`?queueMicrotask(o):Promise.resolve().then(o)},z=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return t?a+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?a+=` border-base-300/70 bg-base-200/50 text-base-content/35`:r?a+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:a+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},B=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return t?i+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?i+=` border-base-300/70 bg-base-200/50 text-base-content/35`:i+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},V=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},se=(e,t,n)=>`${e.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${t.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${Array.from(n.values()).map(e=>`${e.key}:${e.inView?`1`:`0`}:${e.isToday?`1`:`0`}:${e.disabled?`1`:`0`}`).join(`,`)}`,ce=(e,t)=>e.currentMode===`month`&&t.currentMode===`month`&&e.patchKey===t.patchKey&&e.selectedKey!==t.selectedKey,le=(e,t,n,r)=>{let i=new Set([t.selectedKey,n.selectedKey]);for(let t of i){let i=n.dateCellStates.get(t);if(!i)continue;let a=e.querySelector(`[data-rue-calendar-cell="${t}"]`);a&&(a.disabled=i.disabled,a.className=z(n.fullscreen,i.selected,i.disabled,i.inView,i.isToday),a.setAttribute(`aria-pressed`,i.selected?`true`:`false`),i.isToday?a.setAttribute(`aria-current`,`date`):a.removeAttribute(`aria-current`),n.hasDateCustomRender?r&&he(e,r,n,[t]):a.innerHTML=V(i,n.todayMarkerLabel))}},H=e=>`${e??``}`.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),U=(e,t)=>t?` ${e}`:``,W=(e,t)=>t==null||t===!1||typeof t==`function`||typeof t==`object`?``:t===!0?` ${e}`:` ${e}="${H(t)}"`,ue=e=>Object.entries(e).map(([e,t])=>e===`children`||e===`class`||e===`className`?``:W(e,t)).join(``),de=e=>`<div data-rue-calendar-managed-cell="${H(e)}" style="display: contents;"></div>`,fe=()=>`<div data-rue-calendar-managed-header="true" style="display: contents;"></div>`,pe=e=>{e&&s(null,e.host,e.anchor)},me=(e,t,n)=>{let r=e.querySelector(`[data-rue-calendar-managed-header="true"]`);if(!n.hasCustomHeader||!r)return pe(t),null;let i=t;if(!i||i.host!==r){pe(i);let e=(r.ownerDocument??document).createComment(`rue-calendar-managed-header`);r.appendChild(e),i={host:r,anchor:e}}return s(n.customHeaderContent==null?null:O(v,{children:n.customHeaderContent}),r,i.anchor),i},he=(e,t,n,r)=>{let i=r?new Set(r):null,a=i??new Set(n.managedCellContent.keys());for(let r of a){let i=n.managedCellContent.get(r),a=Array.from(e.querySelectorAll(`[data-rue-calendar-managed-cell]`)).find(e=>e.getAttribute(`data-rue-calendar-managed-cell`)===r);if(!i||!a){let e=t.get(r);e&&(s(null,e.host,e.anchor),t.delete(r));continue}let o=t.get(r);if(!o||o.host!==a){o&&s(null,o.host,o.anchor);let e=(a.ownerDocument??document).createComment(`rue-calendar-managed-anchor`);a.appendChild(e),o={host:a,anchor:e},t.set(r,o)}s(i.content==null?null:O(v,{children:i.content}),a,o.anchor)}if(!i)for(let[e,r]of Array.from(t.entries()))n.managedCellContent.has(e)||(s(null,r.host,r.anchor),t.delete(e))},ge=e=>{for(let t of e.values())s(null,t.host,t.anchor);e.clear()},_e=e=>{let t=e.fullscreen,n=ue(e.rest),r=`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,i=t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,a=e.hasCustomHeader?fe():`<div class="${H(r)}">
      <div>
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55">Rue Calendar</div>
        <div class="mt-1 text-xl font-semibold leading-tight">${H(e.headerTitle)}</div>
        <div class="mt-1 text-xs text-base-content/60">${H(e.todayLabel)}</div>
      </div>
      <div class="flex flex-wrap items-center gap-2 lg:justify-end">
        <div class="join">
          <button type="button" class="btn btn-sm join-item" aria-label="Previous" data-rue-calendar-action="previous"${U(`disabled`,e.previousDisabled)}><span aria-hidden="true">&lt;</span></button>
          <button type="button" class="btn btn-sm join-item btn-ghost" data-rue-calendar-action="today"${U(`disabled`,e.todayDisabled)}>${H(e.todayButtonLabel)}</button>
          <button type="button" class="btn btn-sm join-item" aria-label="Next" data-rue-calendar-action="next"${U(`disabled`,e.nextDisabled)}><span aria-hidden="true">&gt;</span></button>
        </div>
        <select class="select select-sm min-w-24" data-rue-calendar-select="year">
          ${e.yearOptions.map(t=>`<option value="${t.value}"${U(`selected`,t.value===e.currentValue.getFullYear())}${U(`disabled`,t.disabled)}>${t.value}</option>`).join(``)}
        </select>
        <select class="select select-sm min-w-24" data-rue-calendar-select="month"${U(`disabled`,e.currentMode===`year`)}>
          ${e.monthOptions.map(t=>`<option value="${t.value}"${U(`selected`,t.value===e.currentValue.getMonth())}${U(`disabled`,t.disabled)}>${H(t.label)}</option>`).join(``)}
        </select>
        <div class="join">
          <button type="button" data-rue-calendar-mode-switch="month" data-rue-calendar-action="mode-month" class="btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}">${H(e.monthButtonLabel)}</button>
          <button type="button" data-rue-calendar-mode-switch="year" data-rue-calendar-action="mode-year" class="btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}">${H(e.yearButtonLabel)}</button>
        </div>
      </div>
    </div>`,o=e.showWeek?`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${H(e.weekButtonLabel)}</div>`:``,s=e.weekdayLabels.map(e=>`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${H(e)}</div>`).join(``),c=e.currentMode===`month`?`<div class="space-y-2">
          <div class="${H(e.rowClassName)}">${o}${s}</div>
          <div role="grid" class="space-y-2">
            ${e.dateRows.map(n=>`<div role="row" class="${H(e.rowClassName)}">
                    ${e.showWeek?`<div class="flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60" data-rue-calendar-week="${n.week}">${n.week}</div>`:``}
                    ${n.cells.map(n=>{let r=e.dateCellStates.get(n.key),i=r.isToday?` aria-current="date"`:``;return`<button
                          type="button"
                          role="gridcell"
                          data-rue-calendar-cell="${H(n.key)}"
                          data-rue-calendar-in-view="${r.inView?`true`:`false`}"
                          aria-pressed="${r.selected?`true`:`false`}"${i}
                          ${U(`disabled`,r.disabled)}
                          class="${H(z(t,r.selected,r.disabled,r.inView,r.isToday))}"
                        >${e.hasDateCustomRender?de(n.key):V(r,e.todayMarkerLabel)}</button>`}).join(``)}
                  </div>`).join(``)}
          </div>
        </div>`:`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          ${e.monthOptions.map(n=>{let r=K(e.currentValue.getFullYear(),n.value,1),i=Oe(r,e.currentValue),a=Oe(r,q(new Date)),o=n.disabled===!0,s=`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`;return`<button
                type="button"
                data-rue-calendar-month="${s}"
                aria-pressed="${i?`true`:`false`}"
                ${U(`disabled`,o)}
                class="${H(B(t,i,o,a))}"
              >
                ${e.hasMonthCustomRender?de(s):`<span class="flex items-center justify-between gap-2">
                        <span class="text-sm font-semibold">${H(n.label)}</span>
                        ${a?`<span class="badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${H(e.todayMarkerLabel)}</span>`:``}
                      </span>`}
              </button>`}).join(``)}
        </div>`;return`<div${n} data-rue-calendar-root="true" data-rue-calendar-mode="${e.currentMode}" class="${H(e.rootClassName)}">
    ${a}
    <div class="${H(i)}">
      <div class="flex items-center justify-between gap-3 px-1">
        <div class="badge badge-outline badge-sm">${H(e.viewLabel)}</div>
        ${e.showWeek&&e.currentMode===`month`?`<div class="badge badge-soft badge-sm">${H(e.weekButtonLabel)}</div>`:``}
      </div>
      ${c}
    </div>
  </div>`},ve=e=>{let t=e.fullscreen;return D(`div`,{...e.rest,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":e.currentMode,className:e.rootClassName,children:[e.hasCustomHeader?e.customHeaderContent:D(`div`,{className:`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[D(`div`,{children:[O(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),O(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:e.headerTitle}),O(`div`,{className:`mt-1 text-xs text-base-content/60`,children:e.todayLabel})]}),D(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[D(`div`,{className:`join`,children:[O(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Previous`,disabled:e.previousDisabled,onClick:e.onPrevious,children:O(`span`,{"aria-hidden":`true`,children:`<`})}),O(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:e.todayDisabled,onClick:e.onToday,children:e.todayButtonLabel}),O(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Next`,disabled:e.nextDisabled,onClick:e.onNext,children:O(`span`,{"aria-hidden":`true`,children:`>`})})]}),O(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getFullYear(),onChange:t=>e.onYearChange(Number(t.currentTarget.value)),children:e.yearOptions.map(e=>O(`option`,{value:e.value,disabled:e.disabled,children:e.value},e.value))}),O(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getMonth(),disabled:e.currentMode===`year`,onChange:t=>e.onMonthChange(Number(t.currentTarget.value)),children:e.monthOptions.map(e=>O(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),D(`div`,{className:`join`,children:[O(`button`,{type:`button`,"data-rue-calendar-mode-switch":`month`,className:`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeMonth,children:e.monthButtonLabel}),O(`button`,{type:`button`,"data-rue-calendar-mode-switch":`year`,className:`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeYear,children:e.yearButtonLabel})]})]})]}),D(`div`,{className:t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[D(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[O(`div`,{className:`badge badge-outline badge-sm`,children:e.viewLabel}),e.showWeek&&e.currentMode===`month`?O(`div`,{className:`badge badge-soft badge-sm`,children:e.weekButtonLabel}):null]}),e.currentMode===`month`?D(`div`,{className:`space-y-2`,children:[D(`div`,{className:e.rowClassName,children:[e.showWeek?O(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e.weekButtonLabel}):null,e.weekdayLabels.map(e=>O(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),O(`div`,{role:`grid`,className:`space-y-2`,children:e.dateRows.map(n=>D(`div`,{role:`row`,className:e.rowClassName,children:[e.showWeek?O(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":n.week,children:n.week}):null,n.cells.map(n=>{let r=e.dateCellStates.get(n.key);return O(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":r.inView?`true`:`false`,"aria-pressed":r.selected?`true`:`false`,"aria-current":r.isToday?`date`:void 0,disabled:r.disabled,className:z(t,r.selected,r.disabled,r.inView,r.isToday),onClick:()=>e.onDateSelect(n.date),children:e.hasDateCustomRender?e.managedCellContent.get(n.key)?.content??null:D(`span`,{className:`flex items-start justify-between gap-2`,children:[O(`span`,{className:`text-sm font-semibold ${r.inView?``:`opacity-60`}`,children:r.dayNumber}),r.isToday?O(`span`,{className:`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},n.key)})]},n.key))})]}):O(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:e.monthOptions.map(n=>{let r=K(e.currentValue.getFullYear(),n.value,1),i=Oe(r,e.currentValue),a=Oe(r,q(new Date)),o=n.disabled===!0;return O(`button`,{type:`button`,"data-rue-calendar-month":`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:B(t,i,o,a),onClick:()=>e.onMonthSelect(r),children:e.hasMonthCustomRender?e.managedCellContent.get(`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`)?.content??null:D(`span`,{className:`flex items-center justify-between gap-2`,children:[O(`span`,{className:`text-sm font-semibold`,children:n.label}),a?O(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},`${e.currentValue.getFullYear()}-${n.value}`)})})]})]})},ye=e=>typeof e==`number`&&e>=0&&e<=6?e:1,G=e=>new Date(e.getTime()),K=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},q=e=>{let t=G(e);return t.setHours(0,0,0,0),t},be=e=>K(e.getFullYear(),e.getMonth(),1),xe=e=>K(e.getFullYear(),e.getMonth()+1,0),Se=e=>K(e.getFullYear(),0,1),Ce=e=>K(e.getFullYear(),11,31),J=(e,t)=>K(e.getFullYear(),e.getMonth(),e.getDate()+t),we=e=>e instanceof Date&&!Number.isNaN(e.getTime()),Te=(e,t=new Date)=>{if(we(e))return G(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(we(t))return t}return G(t)},Ee=e=>{if(!e)return null;let t=q(Te(e[0])),n=q(Te(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},De=(e,t)=>e.getFullYear()===t.getFullYear(),Oe=(e,t)=>De(e,t)&&e.getMonth()===t.getMonth(),ke=(e,t)=>Oe(e,t)&&e.getDate()===t.getDate(),Ae=(e,t)=>{let n=K(e.getFullYear(),e.getMonth()+t,1),r=xe(n).getDate();return K(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},je=(e,t)=>{let n=K(e.getFullYear()+t,e.getMonth(),1),r=xe(n).getDate();return K(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},Me=(e,t)=>je(e,t-e.getFullYear()),Ne=(e,t)=>Ae(e,t-e.getMonth()),Pe=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Fe=(e,t,n)=>{let r=q(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(G(r))},Ie=(e,t,n,r)=>{let i=be(e),a=xe(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):Fe(o,t,n))return!0;o=J(o,1)}return!1},Le=(e,t,n,r)=>{let i=Se(e),a=Ce(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>K(e.getFullYear(),n,1)).some(e=>r?r(e):Ie(e,t,n))},Re=e=>{let t=q(e),n=K(J(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=J(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},ze=(e,t)=>{let n=`${e}:${t}`,r=F.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=K(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(J(a,(t+n)%7)));return F.set(n,o),o},Be=e=>{let t=I.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(K(2026,t,1)));return I.set(e,r),r},Ve=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},He=(e,t,n,r,i)=>{let a=Be(e);return Array.from({length:12},(e,o)=>{let s=K(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):Ie(s,n,r))}})},Ue=(e,t)=>{let n=be(e),r=J(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=J(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:Re(i),cells:Array.from({length:7},(t,n)=>{let r=J(i,n);return{key:Pe(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},We=e=>{let t=te.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),te.set(e,t)),t},Ge=e=>{let t=ne.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),ne.set(e,t)),t},Ke=e=>{let t=re.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),re.set(e,t)),t},Y=Object.assign(({value:e,defaultValue:t,mode:r,fullscreen:i=!0,showWeek:s,locale:c,weekStartsOn:l,validRange:u,disabledDate:d,dateFullCellRender:f,dateCellRender:p,monthFullCellRender:m,monthCellRender:h,cellRender:g,fullCellRender:_,headerRender:v,className:y,onRenderProfile:b,renderProfileThreshold:S=16,onChange:C,onPanelChange:w,onSelect:T,...E})=>{let k=ie(!!b,S),A=x(()=>({value:o(Te(e??t??new Date)),mode:o(r??`month`)})),j=A.value,M=A.mode,N=a(),F=a(),I=a(),te=a(null),ne=a(null),re=a(`__none__`),L=e===void 0?j.value:Te(e,j.value),R=r??M.value,z=q(new Date),B=Ee(u),V=!!B||!!d,H=c??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),U=ye(l),W=H.toLowerCase().startsWith(`zh`);N.current||=ee().date,F.current||=ee().month,I.current||=ee().year;let ue=B?B.start.getTime():null,de=B?B.end.getTime():null,fe=d?d.toString():`__none__`;(te.current!==ue||ne.current!==de||re.current!==fe)&&(N.current.clear(),F.current.clear(),I.current.clear(),te.current=ue,ne.current=de,re.current=fe);let be=e=>{if(!V)return!0;let t=Pe(q(e)),n=N.current?.get(t);if(n!==void 0)return n;let r=Fe(e,B,d);return N.current?.set(t,r),r},xe=e=>{if(!V)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=F.current?.get(t);if(n!==void 0)return n;let r=Ie(e,B,d,be);return F.current?.set(t,r),r},Se=e=>{if(!V)return!0;let t=`${e.getFullYear()}`,n=I.current?.get(t);if(n!==void 0)return n;let r=Le(e,B,d,xe);return I.current?.set(t,r),r},Ce=R===`month`,J=Ce?ze(H,U):[],we=Ce?Ue(L,U):[];k.cellCount=Ce?we.reduce((e,t)=>e+t.cells.length,0):12;let Re=Ve(L,B),Be=He(H,L,V?B:null,V?d:void 0,V?xe:void 0),Y=P(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${i?`rounded-[1.75rem]`:`w-full max-w-[24rem] rounded-[1.5rem]`}`,y),qe=s?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,Je=R===`month`?We(H).format(L):Ge(H).format(L),Ye=Ke(H).format(z),Xe=W?`今天`:`Today`,Ze=W?`月`:`Month`,Qe=W?`年`:`Year`,$e=W?`周`:`Week`,et=W?`今`:`Today`,tt=R===`month`?W?`月视图`:`Month view`:W?`年视图`:`Year view`,nt=V?R===`month`?!xe(Ae(L,-1)):!Se(je(L,-1)):!1,rt=V?R===`month`?!xe(Ae(L,1)):!Se(je(L,1)):!1,it=V?!be(z):!1,at=!!(g||_||p||f),ot=!!(g||_||h||m),X=(t,n)=>{let r=q(Te(t,L)),i=!ke(r,L),a=R===`month`?!Oe(r,L):!De(r,L);e===void 0&&(j.value=r),i&&C?.(G(r)),a&&w?.(G(r),R),T?.(G(r),{source:n})},st=e=>{e!==R&&(r===void 0&&(M.value=e),w?.(G(L),e))},ct={value:G(L),type:R,yearOptions:Re,monthOptions:Be,onChange:e=>X(e,`customize`),onTypeChange:st,onYearChange:e=>X(Me(L,e),`customize`),onMonthChange:e=>X(Ne(L,e),`customize`)},lt=!!v,ut=v?v(ct):null,Z=x(()=>({host:null,lastSnapshot:null,managedContentMounts:new Map,managedHeaderMount:null,eventsAttached:!1})),dt=()=>{if(Z.host||typeof document>`u`)return;let e=document.createElement(`span`);e.style.display=`contents`,Z.host=e},ft=()=>{!Z.host||Z.eventsAttached||(Z.host.addEventListener(`click`,e=>{let t=Z.lastSnapshot,n=e.target?.closest(`[data-rue-calendar-action], [data-rue-calendar-cell], [data-rue-calendar-month]`);if(!t||!n||!Z.host?.contains(n)||n.disabled)return;let r=n.getAttribute(`data-rue-calendar-action`);if(r===`previous`){t.onPrevious();return}if(r===`today`){t.onToday();return}if(r===`next`){t.onNext();return}if(r===`mode-month`){t.onModeMonth();return}if(r===`mode-year`){t.onModeYear();return}let i=n.getAttribute(`data-rue-calendar-cell`);if(i){t.onDateSelect(Te(i,t.currentValue));return}let a=n.getAttribute(`data-rue-calendar-month`);if(a){let[e,n]=a.split(`-`).map(e=>Number(e));Number.isFinite(e)&&Number.isFinite(n)&&t.onMonthSelect(K(e,n-1,1))}}),Z.host.addEventListener(`change`,e=>{let t=Z.lastSnapshot,n=e.target;if(!t||!n||!Z.host?.contains(n))return;let r=n.getAttribute(`data-rue-calendar-select`),i=Number(n.value);Number.isFinite(i)&&(r===`year`?t.onYearChange(i):r===`month`&&t.onMonthChange(i))}),Z.eventsAttached=!0)},pt=new Map;if(Ce)for(let e of we)for(let t of e.cells)pt.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:ke(t.date,L),isToday:ke(t.date,z),disabled:!be(t.date)});let mt=Re.map(e=>({value:e,disabled:!Se(K(e,L.getMonth(),1))})),ht=Pe(L),gt=[R,L.getFullYear(),L.getMonth(),i?`full`:`card`,lt?`custom-header`:`default-header`,s?`week`:`day`,Y,qe,et,$e,se(mt,Be,pt),nt?`prev-off`:`prev-on`,rt?`next-off`:`next-on`,it?`today-off`:`today-on`].join(`|`),_t=Z.lastSnapshot&&Z.lastSnapshot.currentMode===`month`&&R===`month`&&Z.lastSnapshot.patchKey===gt&&Z.lastSnapshot.selectedKey!==ht?new Set([Z.lastSnapshot.selectedKey,ht]):null,vt=new Map;Ce&&at?we.forEach((e,t)=>{e.cells.forEach((n,r)=>{if(_t&&!_t.has(n.key))return;let i=pt.get(n.key),a={type:`date`,key:n.key,row:t,column:r},o=O(`div`,{className:`flex h-full flex-col gap-2`,children:D(`div`,{className:`flex items-start justify-between gap-2`,children:[O(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),i.isToday?O(`span`,{className:`badge badge-xs ${i.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:et}):null]})}),s=g?ae(k,`cellRender`,a,()=>g(G(n.date),{type:`date`,originNode:o,today:G(z),selected:i.selected,isToday:i.isToday,inView:n.inView,disabled:i.disabled,row:t,column:r,week:e.week})):void 0;s==null&&p&&(s=ae(k,`dateCellRender`,a,()=>p(G(n.date))));let c=D(`div`,{className:`flex h-full flex-col gap-2`,children:[D(`div`,{className:`flex items-start justify-between gap-2`,children:[O(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),i.isToday?O(`span`,{className:`badge badge-xs ${i.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:et}):null]}),O(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${i.selected?`opacity-90`:`opacity-75`}`,children:s})]}),l=_?ae(k,`fullCellRender`,a,()=>_(G(n.date),{type:`date`,originNode:c,today:G(z),selected:i.selected,isToday:i.isToday,inView:n.inView,disabled:i.disabled,row:t,column:r,week:e.week})):void 0;l==null&&f&&(l=ae(k,`dateFullCellRender`,a,()=>f(G(n.date)))),vt.set(n.key,{key:n.key,type:`date`,content:l??c})})}):!Ce&&ot&&Be.forEach((e,t)=>{let n=K(L.getFullYear(),e.value,1),r=Oe(n,L),i=Oe(n,z),a=e.disabled===!0,o=`${L.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,s={type:`month`,key:o,row:Math.floor(t/4),column:t%4},c=O(`div`,{className:`flex h-full flex-col gap-2`,children:D(`div`,{className:`flex items-center justify-between gap-2`,children:[O(`span`,{className:`text-sm font-semibold`,children:e.label}),i?O(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:et}):null]})}),l=g?ae(k,`cellRender`,s,()=>g(G(n),{type:`month`,originNode:c,today:G(z),selected:r,isToday:i,inView:!0,disabled:a,row:Math.floor(t/4),column:t%4})):void 0;l==null&&h&&(l=ae(k,`monthCellRender`,s,()=>h(G(n))));let u=D(`div`,{className:`flex h-full flex-col gap-2`,children:[D(`div`,{className:`flex items-center justify-between gap-2`,children:[O(`span`,{className:`text-sm font-semibold`,children:e.label}),i?O(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:et}):null]}),O(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${r?`opacity-90`:`opacity-75`}`,children:l})]}),d=_?ae(k,`fullCellRender`,s,()=>_(G(n),{type:`month`,originNode:u,today:G(z),selected:r,isToday:i,inView:!0,disabled:a,row:Math.floor(t/4),column:t%4})):void 0;d==null&&m&&(d=ae(k,`monthFullCellRender`,s,()=>m(G(n)))),vt.set(o,{key:o,type:`month`,content:d??u})});let Q={rest:E,rootClassName:Y,fullscreen:i,hasCustomHeader:lt,customHeaderContent:ut,currentMode:R,currentValue:G(L),headerTitle:Je,todayLabel:Ye,previousDisabled:nt,nextDisabled:rt,todayDisabled:it,yearOptions:mt,monthOptions:Be,weekdayLabels:J,dateRows:we,rowClassName:qe,showWeek:s,viewLabel:tt,weekButtonLabel:$e,todayButtonLabel:Xe,monthButtonLabel:Ze,yearButtonLabel:Qe,todayMarkerLabel:et,dateCellStates:pt,managedCellContent:vt,hasDateCustomRender:at,hasMonthCustomRender:ot,patchKey:gt,selectedKey:ht,onPrevious:()=>X(R===`month`?Ae(L,-1):je(L,-1),`customize`),onToday:()=>X(z,`customize`),onNext:()=>X(R===`month`?Ae(L,1):je(L,1),`customize`),onYearChange:e=>X(Me(L,e),`customize`),onMonthChange:e=>X(Ne(L,e),`customize`),onModeMonth:()=>st(`month`),onModeYear:()=>st(`year`),onDateSelect:e=>X(e,`date`),onMonthSelect:e=>X(e,`month`)};if(n(()=>{ge(Z.managedContentMounts),pe(Z.managedHeaderMount),Z.managedHeaderMount=null,Z.host&&Z.host.replaceChildren(),Z.lastSnapshot=null}),dt(),!Z.host)return oe(b,k,R,`jsx`),ve(Q);ft();let yt=`html`;return Z.lastSnapshot&&ce(Z.lastSnapshot,Q)?(yt=`patch`,le(Z.host,Z.lastSnapshot,Q,Z.managedContentMounts)):(ge(Z.managedContentMounts),pe(Z.managedHeaderMount),Z.managedHeaderMount=null,Z.host.innerHTML=_e(Q)),yt===`html`&&he(Z.host,Z.managedContentMounts,Q),Z.managedHeaderMount=me(Z.host,Z.managedHeaderMount,Q),Z.lastSnapshot=Q,oe(b,k,R,yt),{__rue_host_node:Z.host}},{Cally:({className:e,children:t,...n})=>O(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:P(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>O(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>O(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:P(`pika-single`,t)})}),qe=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),Je=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Ye=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},Xe=e=>e?typeof e==`string`?e:Je(e):`未选择`,Ze=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Qe=[Ye(`2026-04-01`),Ye(`2026-05-31`)],$e=e=>e.getDay()===0||e.getDay()===6||qe.has(Je(e)),et=()=>{let{selectedValue:e,selectedSource:n,panelMode:a,panelState:s,handleChange:f,handlePanelChange:p,handleSelect:m}=T(`useSetup:0:0`,()=>x(()=>{let e=T(`ref:1:0`,()=>o(`2026-04-12`)),t=T(`ref:1:1`,()=>o(`date`)),n=T(`ref:1:2`,()=>o(`month`)),r=T(`ref:1:3`,()=>o(Ze(Ye(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelMode:n,panelState:r,handleChange:T(`useCallback:1:4`,()=>l(t=>{e.value=Je(t)},[])),handlePanelChange:T(`useCallback:1:5`,()=>l((e,t)=>{r.value=Ze(e,t)},[])),handleSelect:T(`useCallback:1:6`,()=>l((e,n)=>{t.value=n.source},[]))}}));return _(o=>{let l=c(`div`,o);C(l,`space-y-4`);let g=u(`rue:component:anchor`);i(l,g),d(()=>{let t=w(Y,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:a.value,showWeek:!0,validRange:Qe,disabledDate:$e,onChange:f,onPanelChange:(e,t)=>{a.value=t,p(e,t)},onSelect:m});r(()=>S(t,l,g))});let _=c(`div`,l);i(l,_),C(_,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let v=c(`div`,_);i(_,v),C(v,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let b=c(`div`,v);i(v,b),C(b,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),i(b,t(`当前值`));let x=c(`div`,v);i(v,x),C(x,`mt-1 text-sm font-medium`);let T=u(`rue:slot:anchor`);i(x,T),d(()=>{let t=Xe(e.value);r(()=>S(t,x,T))});let E=c(`div`,_);i(_,E),C(E,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let D=c(`div`,E);i(E,D),C(D,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),i(D,t(`选择来源`));let O=c(`div`,E);i(E,O),C(O,`mt-1 text-sm font-medium`);let k=h(O);i(O,k),d(()=>{y(k,n.value)});let A=c(`div`,_);i(_,A),C(A,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let j=c(`div`,A);i(A,j),C(j,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),i(j,t(`面板状态`));let M=c(`div`,A);i(A,M),C(M,`mt-1 text-sm font-medium`);let N=h(M);i(M,N),d(()=>{y(N,s.value)});let P=c(`p`,l);return i(l,P),C(P,`m-0 text-xs text-base-content/70`),i(P,t(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),l})},tt=null,nt=null,rt=Y.Cally,it=Y.Month,at=Y.PikaSingle,ot=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,X=async()=>{typeof window>`u`||typeof customElements>`u`||(tt||=(async()=>{let e=ot();customElements.get(`calendar-date`)||await(e?.cally?e.cally():k(()=>import(`./cally-D2HO0Jj5.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await tt)},st=async()=>{if(!nt){let t=ot();nt=(t?.pikaday?t.pikaday():k(()=>import(`./pikaday-BheVC8rZ.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return nt},ct=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,lt=(e,t=`未选择`)=>e||t,ut=e=>e||`Pick a date`,Z=e=>_(t=>{let n=c(`div`,t);C(n,`flex flex-wrap gap-2 text-xs`);let a=c(`span`,n);i(n,a),d(()=>{C(a,`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`)});let o=u(`rue:slot:anchor`);i(a,o),d(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;r(()=>S(t,a,o))});let s=u(`rue:slot:anchor`);return i(n,s),d(()=>{let t=e.error?_(()=>{let t=f(),n=c(`span`,t);i(t,n),C(n,`badge badge-error badge-soft`);let a=u(`rue:slot:anchor`);return i(n,a),d(()=>{let t=e.error;r(()=>S(t,n,a))}),t}):``;r(()=>S(t,n,s))}),n}),dt=()=>_(e=>{let t=c(`svg`,e);m(t,`aria-label`,`Previous`),C(t,`fill-current size-4`),m(t,`slot`,`previous`),m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`viewBox`,`0 0 24 24`);let n=c(`path`,t);return i(t,n),m(n,`fill`,`currentColor`),m(n,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),t}),ft=()=>_(e=>{let t=c(`svg`,e);m(t,`aria-label`,`Next`),C(t,`fill-current size-4`),m(t,`slot`,`next`),m(t,`xmlns`,`http://www.w3.org/2000/svg`),m(t,`viewBox`,`0 0 24 24`);let n=c(`path`,t);return i(t,n),m(n,`fill`,`currentColor`),m(n,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),t}),pt=()=>{let{calendarRef:e,cleanupRef:n,selectedValue:s,ready:l,error:m}=T(`useSetup:0:0`,()=>x(()=>{let e=T(`useRef:1:0`,()=>a()),t=T(`useRef:1:1`,()=>a(()=>{})),n=T(`ref:1:2`,()=>o(`2026-04-12`)),r=T(`ref:1:3`,()=>o(!1)),i=T(`ref:1:4`,()=>o(``));return g(()=>{let a=!0;X().then(()=>{if(!a)return;r.value=!0;let i=e.current;if(!i)return;i.value=n.value;let o=()=>{n.value=i.value||``};i.addEventListener(`change`,o),t.current=()=>i.removeEventListener(`change`,o)}).catch(()=>{a&&(i.value=`Cally 加载失败`)}),p(()=>{a=!1})}),p(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:r,error:i}}));return _(n=>{let a=c(`div`,n);C(a,`space-y-3`);let o=u(`rue:component:anchor`);i(a,o);let p=_(()=>{let e=f(),t=u(`rue:component:anchor`);i(e,t),S(w(dt,{}),e,t);let n=u(`rue:component:anchor`);i(e,n),S(w(ft,{}),e,n);let r=u(`rue:component:anchor`);return i(e,r),S(w(it,{}),e,r),e});d(()=>{let t=w(rt,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:p});r(()=>S(t,a,o))});let h=u(`rue:component:anchor`);i(a,h),d(()=>{let e=w(Z,{ready:l.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:m.value});r(()=>S(e,a,h))});let g=c(`p`,a);i(a,g),C(g,`m-0 text-xs text-base-content/70`),i(g,t(`当前选择：`));let v=u(`rue:slot:anchor`);return i(g,v),d(()=>{let e=lt(s.value);r(()=>S(e,g,v))}),i(g,t(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),a})},mt=()=>{let{calendarRef:e,cleanupRef:n,selectedValue:s,open:l,ready:h,error:v}=T(`useSetup:0:0:dup1`,()=>x(()=>{let e=T(`useRef:1:5`,()=>a()),t=T(`useRef:1:6`,()=>a(()=>{})),n=T(`ref:1:7`,()=>o(``)),r=T(`ref:1:8`,()=>o(!1)),i=T(`ref:1:9`,()=>o(!1)),s=T(`ref:1:10`,()=>o(``));return g(()=>{let a=!0;X().then(()=>{if(!a)return;i.value=!0;let o=e.current;if(!o)return;o.value=n.value;let s=()=>{n.value=o.value||``,r.value=!1};o.addEventListener(`change`,s),t.current=()=>o.removeEventListener(`change`,s)}).catch(()=>{a&&(s.value=`Cally 加载失败`)}),p(()=>{a=!1})}),p(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:r,ready:i,error:s}}));return _(n=>{let a=c(`div`,n);C(a,`space-y-3`);let o=c(`div`,a);i(a,o),C(o,`flex flex-wrap items-center gap-3`);let p=c(`button`,o);i(o,p),m(p,`type`,`button`),m(p,`data-testid`,`cally-picker-button`),C(p,`input input-bordered w-fit cursor-pointer`),b(p,`click`,()=>{l.value=!l.value});let g=u(`rue:slot:anchor`);i(p,g),d(()=>{let e=ut(s.value);r(()=>S(e,p,g))});let y=c(`span`,o);i(o,y),C(y,`text-xs text-base-content/70`),i(y,t(`当前选择：`));let x=u(`rue:slot:anchor`);i(y,x),d(()=>{let e=lt(s.value);r(()=>S(e,y,x))});let T=c(`div`,a);i(a,T),m(T,`data-testid`,`cally-picker-panel`),d(()=>{C(T,`inline-block rounded-box bg-base-100 p-3 shadow-lg ${l.value?``:`hidden`}`)});let E=u(`rue:component:anchor`);i(T,E);let D=_(()=>{let e=f(),t=u(`rue:component:anchor`);i(e,t),S(w(dt,{}),e,t);let n=u(`rue:component:anchor`);i(e,n),S(w(ft,{}),e,n);let r=u(`rue:component:anchor`);return i(e,r),S(w(it,{}),e,r),e});d(()=>{let t=w(rt,{ref:e,"data-testid":`cally-picker-calendar`,children:D});r(()=>S(t,T,E))});let O=u(`rue:component:anchor`);i(a,O),d(()=>{let e=w(Z,{ready:h.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:v.value});r(()=>S(e,a,O))});let k=c(`p`,a);return i(a,k),C(k,`m-0 text-xs text-base-content/70`),i(k,t(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),a})},ht=()=>{let{inputRef:e,instanceRef:n,selectedValue:s,ready:l,error:f}=T(`useSetup:0:0:dup2`,()=>x(()=>{let e=T(`useRef:1:11`,()=>a()),t=T(`useRef:1:12`,()=>a()),n=T(`ref:1:13`,()=>o(``)),r=T(`ref:1:14`,()=>o(!1)),i=T(`ref:1:15`,()=>o(``));return g(()=>{let a=!0;st().then(i=>{if(!a)return;let o=e.current;o&&(t.current=new i({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>ct(e),onSelect:e=>{n.value=o.value||ct(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,r.value=!0)}).catch(()=>{a&&(i.value=`Pikaday 加载失败`)}),p(()=>{a=!1})}),p(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:r,error:i}}));return _(n=>{let a=c(`div`,n);C(a,`space-y-3`);let o=u(`rue:component:anchor`);i(a,o),d(()=>{let t=w(at,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});r(()=>S(t,a,o))});let p=u(`rue:component:anchor`);i(a,p),d(()=>{let e=w(Z,{ready:l.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:f.value});r(()=>S(e,a,p))});let m=c(`p`,a);i(a,m),C(m,`m-0 text-xs text-base-content/70`),i(m,t(`当前选择：`));let h=u(`rue:slot:anchor`);i(m,h),d(()=>{let e=lt(s.value);r(()=>S(e,m,h))});let g=c(`p`,a);return i(a,g),C(g,`m-0 text-xs text-base-content/70`),i(g,t(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),a})},gt=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`onRenderProfile`,description:`渲染诊断回调，报告本次更新阶段、耗时、cellRender 调用次数与慢单元格`,type:`(event: CalendarRenderProfileEvent) => void`,defaultValue:`-`},{prop:`renderProfileThreshold`,description:`渲染诊断的慢调用阈值，超过后会在 onRenderProfile 中标记 slow`,type:`number`,defaultValue:`16`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],_t=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],vt={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},Q={2:12,3:28,4:18,8:43},yt={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},bt={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},xt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,St=e=>e?typeof e==`string`?e:xt(e):`未选择`,Ct=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,$=e=>_(t=>{let n=c(`div`,t);C(n,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let a=c(`span`,n);i(n,a),C(a,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let o=u(`rue:slot:anchor`);i(a,o),d(()=>{let t=e.label;r(()=>S(t,a,o))});let s=c(`span`,n);i(n,s),C(s,`text-sm font-medium`);let l=h(s);return i(s,l),d(()=>{y(l,e.value)}),n}),wt=e=>_(n=>{let a=c(`div`,n);C(a,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let o=c(`table`,a);i(a,o),C(o,`table table-zebra`);let s=c(`thead`,o);i(o,s);let l=c(`tr`,s);i(s,l);let p=c(`th`,l);i(l,p),i(p,t(`属性`));let h=c(`th`,l);i(l,h),i(h,t(`说明`));let g=c(`th`,l);i(l,g),i(g,t(`类型`));let v=c(`th`,l);i(l,v),i(v,t(`默认值`));let y=c(`tbody`,o);i(o,y);let b=u(`rue:list:start`),x=u(`rue:list:end`);i(y,b),i(y,x);let w=new Map;return d(()=>{w=E({items:e.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,t,n,a,o)=>{S(_(()=>{let t=f(),n=c(`tr`,t);i(t,n),d(()=>{m(n,`key`,String(e.prop))});let a=c(`td`,n);i(n,a);let o=c(`code`,a);i(a,o);let s=u(`rue:slot:anchor`);i(o,s),d(()=>{let t=e.prop;r(()=>S(t,o,s))});let l=c(`td`,n);i(n,l);let p=u(`rue:slot:anchor`);i(l,p),d(()=>{let t=e.description;r(()=>S(t,l,p))});let h=c(`td`,n);i(n,h);let g=c(`code`,h);i(h,g);let _=u(`rue:slot:anchor`);i(g,_),d(()=>{let t=e.type;r(()=>S(t,g,_))});let v=c(`td`,n);i(n,v);let y=c(`code`,v);i(v,y);let b=u(`rue:slot:anchor`);return i(y,b),d(()=>{let t=e.defaultValue;r(()=>S(t,y,b))}),t}),t,n)}})}),a}),Tt=e=>_(n=>{let a=c(`div`,n);C(a,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let o=c(`table`,a);i(a,o),C(o,`table table-zebra`);let s=c(`thead`,o);i(o,s);let l=c(`tr`,s);i(s,l);let p=c(`th`,l);i(l,p),i(p,t(`导出`));let h=c(`th`,l);i(l,h),i(h,t(`说明`));let g=c(`tbody`,o);i(o,g);let v=u(`rue:list:start`),y=u(`rue:list:end`);i(g,v),i(g,y);let b=new Map;return d(()=>{b=E({items:e.rows||[],getKey:(e,t)=>e.name,elements:b,parent:g,before:y,singleRoot:!0,trackIndex:!1,start:v,renderItem:(e,t,n,a,o)=>{S(_(()=>{let t=f(),n=c(`tr`,t);i(t,n),d(()=>{m(n,`key`,String(e.name))});let a=c(`td`,n);i(n,a);let o=c(`code`,a);i(a,o);let s=u(`rue:slot:anchor`);i(o,s),d(()=>{let t=e.name;r(()=>S(t,o,s))});let l=c(`td`,n);i(n,l);let p=u(`rue:slot:anchor`);return i(l,p),d(()=>{let t=e.description;r(()=>S(t,l,p))}),t}),t,n)}})}),a}),Et=e=>{let{shouldLoadPreview:n,preloadTimer:s}=T(`useSetup:0:0`,()=>x(()=>{let t=T(`ref:1:0`,()=>o(e.previewLoadDelay==null)),n=T(`useRef:1:1`,()=>a(null));return g(()=>{e.previewLoadDelay==null||t.value||(n.current=window.setTimeout(()=>{t.value=!0,n.current=null},e.previewLoadDelay))}),p(()=>{n.current!=null&&(window.clearTimeout(n.current),n.current=null)}),{shouldLoadPreview:t,preloadTimer:n}}));return _(a=>{let o=c(`div`,a);C(o,`component-preview not-prose my-6 text-base-content lg:my-12`);let s=c(`div`,o);i(o,s),C(s,`flex flex-wrap items-start justify-between gap-3`);let l=c(`div`,s);i(s,l);let p=c(`h2`,l);i(l,p),C(p,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(p,t(`# `));let m=u(`rue:slot:anchor`);i(p,m),d(()=>{let t=e.title;r(()=>S(t,p,m))});let h=u(`rue:slot:anchor`);i(l,h),d(()=>{let t=e.summary?_(()=>{let t=f(),n=c(`p`,t);i(t,n),C(n,`m-0 text-sm opacity-70`);let a=u(`rue:slot:anchor`);return i(n,a),d(()=>{let t=e.summary;r(()=>S(t,n,a))}),t}):``;r(()=>S(t,l,h))});let g=u(`rue:component:anchor`);i(o,g),d(()=>{let t=w(j,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});r(()=>S(t,o,g))});let v=u(`rue:slot:anchor`);return i(o,v),d(()=>{let a=e.tab.value===`preview`?n.value?N(e.title,e.preview):_(()=>{let n=f(),a=c(`div`,n);i(n,a),C(a,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let o=c(`div`,a);i(a,o),C(o,`badge badge-outline badge-sm`),i(o,t(`Preview`));let s=c(`p`,a);i(a,s),C(s,`mb-0 mt-3 text-sm text-base-content/72`);let l=u(`rue:slot:anchor`);return i(s,l),d(()=>{let t=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;r(()=>S(t,s,l))}),n}):_(()=>{let t=f(),n=u(`rue:component:anchor`);return i(t,n),d(()=>{let i=w(A,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});r(()=>S(i,t,n))}),t});r(()=>S(a,o,v))}),o})},Dt=e=>_(t=>{let n=c(`div`,t);C(n,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let a=c(`div`,n);i(n,a),C(a,`badge badge-outline badge-sm`);let o=u(`rue:slot:anchor`);i(a,o),d(()=>{let t=e.badge;r(()=>S(t,a,o))});let s=c(`h3`,n);i(n,s),C(s,`mt-3 mb-1 text-base font-semibold`);let l=u(`rue:slot:anchor`);i(s,l),d(()=>{let t=e.title;r(()=>S(t,s,l))});let f=c(`p`,n);i(n,f),C(f,`m-0 text-sm text-base-content/70`);let p=u(`rue:slot:anchor`);return i(f,p),d(()=>{let t=e.detail;r(()=>S(t,f,p))}),n}),Ot=()=>{let{selectedValue:e,panelMode:t}=T(`useSetup:0:0:dup1`,()=>x(()=>({selectedValue:T(`ref:1:2`,()=>o(`2026-04-15`)),panelMode:T(`ref:1:3`,()=>o(`month`))})));return _(n=>{let a=c(`div`,n);C(a,`space-y-4`);let o=u(`rue:component:anchor`);i(a,o),d(()=>{let n=w(Y,{"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,onChange:t=>{e.value=xt(t)},onPanelChange:(e,n)=>{t.value=n},cellRender:(e,t)=>{if(t.type===`month`){let t=Q[e.getMonth()];return t?D(`div`,{className:`space-y-1`,children:[O(`div`,{className:`text-lg font-semibold leading-none`,children:t}),O(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=vt[xt(e)]??[];return n.length?D(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>O(`div`,{className:`badge badge-soft badge-xs ${bt[e.tone]}`,children:e.label},e.label)),n.length>2?D(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});r(()=>S(n,a,o))});let s=c(`div`,a);i(a,s),C(s,`grid gap-3 md:grid-cols-3`);let l=u(`rue:component:anchor`);i(s,l),d(()=>{let t=w($,{label:`当前日期`,value:St(e.value)});r(()=>S(t,s,l))});let f=u(`rue:component:anchor`);i(s,f),d(()=>{let e=w($,{label:`4 月 15 日事件`,value:`${vt[`2026-04-15`]?.length??0} 条`});r(()=>S(e,s,f))});let p=u(`rue:component:anchor`);return i(s,p),d(()=>{let e=w($,{label:`9 月 backlog`,value:`${Q[8]} 项`});r(()=>S(e,s,p))}),a})},kt=()=>{let{selectedValue:e,panelMode:n}=T(`useSetup:0:0:dup2`,()=>x(()=>({selectedValue:T(`ref:1:4`,()=>o(`2026-09-18`)),panelMode:T(`ref:1:5`,()=>o(`month`))})));return _(a=>{let o=c(`div`,a);C(o,`space-y-4`);let s=c(`div`,o);i(o,s),C(s,`grid gap-4`);let l=c(`div`,s);i(s,l),C(l,`max-w-full overflow-x-auto`);let f=u(`rue:component:anchor`);i(l,f),d(()=>{let t=w(Y,{"data-testid":`card-calendar`,className:`w-[34rem] max-w-none`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:n.value,onChange:t=>{e.value=xt(t)},onPanelChange:(e,t)=>{n.value=t},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=yt[xt(e)];return n==null?t.originNode:D(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[D(`div`,{className:`flex items-center justify-between gap-2`,children:[O(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),D(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),D(`div`,{className:`space-y-1`,children:[O(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:O(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),O(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});r(()=>S(t,l,f))});let p=c(`div`,s);i(s,p),C(p,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let m=c(`div`,p);i(p,m),C(m,`badge badge-secondary badge-soft`),i(m,t(`Card Mode`));let h=c(`h3`,p);i(p,h),C(h,`mt-3 mb-1 text-base font-semibold`),i(h,t(`容量面板`));let g=c(`p`,p);i(p,g),C(g,`m-0 text-sm text-base-content/70`),i(g,t(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let _=c(`div`,p);i(p,_),C(_,`mt-4 space-y-3`);let v=u(`rue:component:anchor`);i(_,v),d(()=>{let t=w($,{label:`当前日期`,value:St(e.value)});r(()=>S(t,_,v))});let y=u(`rue:component:anchor`);i(_,y),S(w($,{label:`高负载日`,value:`9/18 · 92%`}),_,y);let b=u(`rue:component:anchor`);return i(_,b),S(w($,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),_,b),o})},At=()=>{let{selectedValue:e,panelMode:t,actionSource:n}=T(`useSetup:0:0:dup3`,()=>x(()=>({selectedValue:T(`ref:1:6`,()=>o(`2026-07-04`)),panelMode:T(`ref:1:7`,()=>o(`month`)),actionSource:T(`ref:1:8`,()=>o(`date`))})));return _(a=>{let o=c(`div`,a);C(o,`space-y-4`);let s=u(`rue:component:anchor`);i(o,s),d(()=>{let i=w(Y,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>D(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[D(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[D(`div`,{children:[O(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),O(`div`,{className:`mt-1 text-base font-semibold`,children:Ct(e,t)})]}),D(`div`,{className:`join`,children:[O(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),O(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),D(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[O(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>O(`option`,{value:e,children:e},e))}),O(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>O(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=xt(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{n.value=t.source}});r(()=>S(i,o,s))});let l=c(`div`,o);i(o,l),C(l,`grid gap-3 md:grid-cols-3`);let f=u(`rue:component:anchor`);i(l,f),d(()=>{let t=w($,{label:`当前日期`,value:St(e.value)});r(()=>S(t,l,f))});let p=u(`rue:component:anchor`);i(l,p),d(()=>{let e=w($,{label:`当前模式`,value:t.value});r(()=>S(e,l,p))});let m=u(`rue:component:anchor`);return i(l,m),d(()=>{let e=w($,{label:`最近来源`,value:n.value});r(()=>S(e,l,m))}),o})},jt=`import { ref, useCallback } from '@rue-js/rue'
import { Calendar } from '@rue-js/design'

const maintenanceDates = new Set(['2026-04-04', '2026-04-05', '2026-05-01'])

const formatIsoDate = (date: Date) => {
  const year = date.getFullYear()
  const month = \`\${date.getMonth() + 1}\`.padStart(2, '0')
  const day = \`\${date.getDate()}\`.padStart(2, '0')
  return \`\${year}-\${month}-\${day}\`
}

const parseDate = (value: string) => {
  const date = new Date(\`\${value}T00:00:00\`)
  date.setHours(12, 0, 0, 0)
  return date
}

const formatPanelLabel = (date: Date, mode: 'month' | 'year') => {
  if (mode === 'year') {
    return \`\${new Intl.DateTimeFormat('zh-CN', { year: 'numeric' }).format(date)} / 年视图\`
  }
  return \`\${new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long' }).format(date)} / 月视图\`
}

const basicCalendarValidRange: [Date, Date] = [parseDate('2026-04-01'), parseDate('2026-05-31')]

const isBasicCalendarDateDisabled = (date: Date) => {
  return date.getDay() === 0 || date.getDay() === 6 || maintenanceDates.has(formatIsoDate(date))
}

const formatDateLabel = (value?: string | Date) => {
  if (!value) {
    return '未选择'
  }
  return typeof value === 'string' ? value : formatIsoDate(value)
}

export default function BasicCalendarDemo() {
  const selectedValue = ref('2026-04-12')
  const selectedSource = ref('date')
  const panelMode = ref<'month' | 'year'>('month')
  const panelState = ref(formatPanelLabel(parseDate(selectedValue.value), 'month'))
  const handleChange = useCallback((date: Date) => {
    selectedValue.value = formatIsoDate(date)
  }, [])
  const handlePanelChange = useCallback((date: Date, nextMode: 'month' | 'year') => {
    panelState.value = formatPanelLabel(date, nextMode)
  }, [])
  const handleSelect = useCallback((_date: Date, info: { source: string }) => {
    selectedSource.value = info.source
  }, [])

  return (
    <div className="space-y-4">
      <Calendar
        locale="zh-CN"
        value={selectedValue.value}
        mode={panelMode.value}
        showWeek
        validRange={basicCalendarValidRange}
        disabledDate={isBasicCalendarDateDisabled}
        onChange={handleChange}
        onPanelChange={(date, nextMode) => {
          panelMode.value = nextMode
          handlePanelChange(date, nextMode)
        }}
        onSelect={handleSelect}
      />

      <div className="grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2">
        <div className="rounded-[1rem] bg-base-200/70 px-3 py-2">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            当前值
          </div>
          <div className="mt-1 text-sm font-medium">{formatDateLabel(selectedValue.value)}</div>
        </div>

        <div className="rounded-[1rem] bg-base-200/70 px-3 py-2">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            选择来源
          </div>
          <div className="mt-1 text-sm font-medium">{selectedSource.value}</div>
        </div>

        <div className="rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2">
          <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            面板状态
          </div>
          <div className="mt-1 text-sm font-medium">{panelState.value}</div>
        </div>
      </div>

      <p className="m-0 text-xs text-base-content/70">
        日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。
      </p>
    </div>
  )
}`,Mt=`import { ref } from '@rue-js/rue'
import { Calendar } from '@rue-js/design'

const agendaByDate = {
  '2026-04-08': [
    { tone: 'warning', label: 'Risk review' },
    { tone: 'success', label: 'QA ready' },
  ],
  '2026-04-10': [
    { tone: 'warning', label: 'Traffic replay' },
    { tone: 'success', label: 'Deploy window' },
    { tone: 'error', label: 'Rollback drill' },
  ],
  '2026-04-15': [
    { tone: 'info', label: 'Townhall' },
    { tone: 'warning', label: 'Launch freeze' },
    { tone: 'success', label: 'Content sync' },
    { tone: 'error', label: 'Incident review' },
  ],
  '2026-04-18': [{ tone: 'accent', label: 'Design crit' }],
  '2026-04-22': [
    { tone: 'primary', label: 'v2 beta' },
    { tone: 'success', label: 'Landing ready' },
  ],
} as const

const monthBacklog: Record<number, number> = {
  2: 12,
  3: 28,
  4: 18,
  8: 43,
}

const eventToneClassName = {
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
} as const

const formatIsoDate = (date: Date) => {
  const year = date.getFullYear()
  const month = \`\${date.getMonth() + 1}\`.padStart(2, '0')
  const day = \`\${date.getDate()}\`.padStart(2, '0')
  return \`\${year}-\${month}-\${day}\`
}

export default function NoticeCalendarDemo() {
  const selectedValue = ref('2026-04-15')
  const panelMode = ref<'month' | 'year'>('month')

  return (
    <div className="space-y-4">
      <Calendar
        locale="zh-CN"
        value={selectedValue.value}
        mode={panelMode.value}
        onChange={date => {
          selectedValue.value = formatIsoDate(date)
        }}
        onPanelChange={(_date, nextMode) => {
          panelMode.value = nextMode
        }}
        cellRender={(date, info) => {
          if (info.type === 'month') {
            const backlog = monthBacklog[date.getMonth()]
            return backlog ? (
              <div className="space-y-1">
                <div className="text-lg font-semibold leading-none">{backlog}</div>
                <div className="text-[0.68rem] uppercase tracking-[0.22em] opacity-60">Backlog</div>
              </div>
            ) : null
          }

          const items = agendaByDate[formatIsoDate(date)] ?? []
          if (!items.length) {
            return null
          }

          return (
            <div className="space-y-1">
              {items.slice(0, 2).map(item => (
                <div key={item.label} className={\`badge badge-soft badge-xs \${eventToneClassName[item.tone]}\`}>
                  {item.label}
                </div>
              ))}
              {items.length > 2 ? (
                <div className="text-[0.62rem] opacity-60">+\${items.length - 2} more</div>
              ) : null}
            </div>
          )
        }}
      />

      <div className="grid gap-3 md:grid-cols-3">
        <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            当前日期
          </span>
          <span className="text-sm font-medium">{selectedValue.value}</span>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            4 月 15 日事件
          </span>
          <span className="text-sm font-medium">{agendaByDate['2026-04-15']?.length ?? 0} 条</span>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            9 月 backlog
          </span>
          <span className="text-sm font-medium">{monthBacklog[8]} 项</span>
        </div>
      </div>
    </div>
  )
}`,Nt=`import { ref } from '@rue-js/rue'
import { Calendar } from '@rue-js/design'

const compactLoad: Record<string, number> = {
  '2026-09-03': 24,
  '2026-09-07': 46,
  '2026-09-11': 68,
  '2026-09-18': 92,
  '2026-09-23': 58,
  '2026-09-27': 37,
}

const formatIsoDate = (date: Date) => {
  const year = date.getFullYear()
  const month = \`\${date.getMonth() + 1}\`.padStart(2, '0')
  const day = \`\${date.getDate()}\`.padStart(2, '0')
  return \`\${year}-\${month}-\${day}\`
}

export default function CardCalendarDemo() {
  const selectedValue = ref('2026-09-18')
  const panelMode = ref<'month' | 'year'>('month')

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <div className="max-w-full overflow-x-auto">
          <Calendar
            className="w-[34rem] max-w-none"
            locale="zh-CN"
            fullscreen={false}
            value={selectedValue.value}
            mode={panelMode.value}
            onChange={date => {
              selectedValue.value = formatIsoDate(date)
            }}
            onPanelChange={(_date, nextMode) => {
              panelMode.value = nextMode
            }}
            fullCellRender={(date, info) => {
              if (info.type !== 'date') {
                return info.originNode
              }

              const load = compactLoad[formatIsoDate(date)]
              if (load == null) {
                return info.originNode
              }

              return (
                <div className="flex h-full flex-col justify-between gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold">{date.getDate()}</span>
                    <span className={\`badge badge-xs \${load >= 80 ? 'badge-error' : load >= 60 ? 'badge-warning' : 'badge-success'} badge-soft\`}>
                      {load}%
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 overflow-hidden rounded-full bg-base-300/70">
                      <div
                        className={\`h-full rounded-full \${load >= 80 ? 'bg-error' : load >= 60 ? 'bg-warning' : 'bg-success'}\`}
                        style={{ width: \`\${load}%\` }}
                      ></div>
                    </div>
                    <div className="text-[0.62rem] uppercase tracking-[0.22em] opacity-60">Studio load</div>
                  </div>
                </div>
              )
            }}
          />
        </div>

        <div className="rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm">
          <div className="badge badge-secondary badge-soft">Card Mode</div>
          <h3 className="mt-3 mb-1 text-base font-semibold">容量面板</h3>
          <p className="m-0 text-sm text-base-content/70">
            使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
                当前日期
              </span>
              <span className="text-sm font-medium">{selectedValue.value}</span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
                高负载日
              </span>
              <span className="text-sm font-medium">9/18 · 92%</span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
                布局定位
              </span>
              <span className="text-sm font-medium">侧栏、仪表盘、详情卡片</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}`,Pt=`import { ref } from '@rue-js/rue'
import { Calendar } from '@rue-js/design'

const formatIsoDate = (date: Date) => {
  const year = date.getFullYear()
  const month = \`\${date.getMonth() + 1}\`.padStart(2, '0')
  const day = \`\${date.getDate()}\`.padStart(2, '0')
  return \`\${year}-\${month}-\${day}\`
}

const formatPanelLabel = (date: Date, mode: 'month' | 'year') => {
  if (mode === 'year') {
    return \`\${new Intl.DateTimeFormat('zh-CN', { year: 'numeric' }).format(date)} / 年视图\`
  }
  return \`\${new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: 'long' }).format(date)} / 月视图\`
}

export default function CustomHeaderCalendarDemo() {
  const selectedValue = ref('2026-07-04')
  const panelMode = ref<'month' | 'year'>('month')
  const actionSource = ref('date')

  return (
    <div className="space-y-4">
      <Calendar
        locale="zh-CN"
        value={selectedValue.value}
        mode={panelMode.value}
        headerRender={({ value: current, type, yearOptions, monthOptions, onMonthChange, onTypeChange, onYearChange }) => (
          <div className="border-b border-base-300/70 px-3 py-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
                  Studio Header
                </div>
                <div className="mt-1 text-base font-semibold">{formatPanelLabel(current, type as 'month' | 'year')}</div>
              </div>
              <div className="join">
                <button
                  type="button"
                  className={\`btn btn-sm join-item \${type === 'month' ? 'btn-primary' : 'btn-ghost'}\`}
                  onClick={() => onTypeChange('month')}
                >
                  月视图
                </button>
                <button
                  type="button"
                  className={\`btn btn-sm join-item \${type === 'year' ? 'btn-primary' : 'btn-ghost'}\`}
                  onClick={() => onTypeChange('year')}
                >
                  年视图
                </button>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <select
                className="select select-sm min-w-24"
                value={current.getFullYear()}
                onChange={event => onYearChange(Number((event.currentTarget as HTMLSelectElement).value))}
              >
                {yearOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <select
                className="select select-sm min-w-24"
                value={current.getMonth()}
                disabled={type === 'year'}
                onChange={event => onMonthChange(Number((event.currentTarget as HTMLSelectElement).value))}
              >
                {monthOptions.map(option => (
                  <option key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
        onChange={date => {
          selectedValue.value = formatIsoDate(date)
        }}
        onPanelChange={(_date, nextMode) => {
          panelMode.value = nextMode as 'month' | 'year'
        }}
        onSelect={(_date, info) => {
          actionSource.value = info.source
        }}
      />

      <div className="grid gap-3 md:grid-cols-3">
        <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            当前日期
          </span>
          <span className="text-sm font-medium">{selectedValue.value}</span>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            当前模式
          </span>
          <span className="text-sm font-medium">{panelMode.value}</span>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            最近来源
          </span>
          <span className="text-sm font-medium">{actionSource.value}</span>
        </div>
      </div>
    </div>
  )
}`,Ft=`import 'cally'
import { Calendar } from '@rue-js/design'

export default function CallyCalendarDemo() {
  return (
    <Calendar.Cally className="border border-base-300 bg-base-100 shadow-lg rounded-box">
      <svg
        aria-label="Previous"
        className="fill-current size-4"
        slot="previous"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
      </svg>
      <svg
        aria-label="Next"
        className="fill-current size-4"
        slot="next"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
      </svg>
      <Calendar.Month />
    </Calendar.Cally>
  )
}`,It=`import 'cally'
import { ref } from '@rue-js/rue'
import { Calendar } from '@rue-js/design'

export default function CallyDatePickerDemo() {
  const open = ref(false)
  const value = ref('')

  return (
    <div className="space-y-3">
      <button
        type="button"
        className="input input-bordered w-fit cursor-pointer"
        onClick={() => {
          open.value = !open.value
        }}
      >
        {value.value || 'Pick a date'}
      </button>

      <div className={\`inline-block rounded-box bg-base-100 p-3 shadow-lg \${open.value ? '' : 'hidden'}\`}>
        <Calendar.Cally
          onChange={event => {
            value.value = (event.currentTarget as HTMLElement & { value?: string }).value || ''
            open.value = false
          }}
        >
          <svg
            aria-label="Previous"
            className="fill-current size-4"
            slot="previous"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg
            aria-label="Next"
            className="fill-current size-4"
            slot="next"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <Calendar.Month />
        </Calendar.Cally>
      </div>
    </div>
  )
}`,Lt=()=>{let{tabBasic:e,tabNotice:n,tabCard:a,tabHeader:s,tabCallyCalendar:l,tabCallyDatePicker:p,tabPikaday:m}=T(`useSetup:0:0:dup4`,()=>x(()=>({tabBasic:T(`ref:1:9`,()=>o(`preview`)),tabNotice:T(`ref:1:10`,()=>o(`preview`)),tabCard:T(`ref:1:11`,()=>o(`preview`)),tabHeader:T(`ref:1:12`,()=>o(`preview`)),tabCallyCalendar:T(`ref:1:13`,()=>o(`preview`)),tabCallyDatePicker:T(`ref:1:14`,()=>o(`preview`)),tabPikaday:T(`ref:1:15`,()=>o(`preview`))})));return _(o=>{let h=f(),g=u(`rue:component:anchor`);return i(h,g),S(w(M,{children:_(()=>{let o=f(),h=c(`div`,o);i(o,h),C(h,`prose prose-sm max-w-none md:prose-base`);let g=c(`h1`,h);i(h,g),i(g,t(`Calendar 日历`));let _=c(`p`,h);i(h,_),C(_,`mt-3 mb-3 text-sm`),i(_,t(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let v=c(`div`,h);i(h,v),C(v,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let y=u(`rue:component:anchor`);i(v,y),S(w(Dt,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),v,y);let b=u(`rue:component:anchor`);i(v,b),S(w(Dt,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),v,b);let x=u(`rue:component:anchor`);i(v,x),S(w(Dt,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),v,x);let T=u(`rue:component:anchor`);i(h,T),d(()=>{let t=w(Et,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:et,code:jt});r(()=>S(t,h,T))});let E=u(`rue:component:anchor`);i(h,E),d(()=>{let e=w(Et,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:n,preview:Ot,code:Mt,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});r(()=>S(e,h,E))});let D=u(`rue:component:anchor`);i(h,D),d(()=>{let e=w(Et,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:a,preview:kt,code:Nt,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});r(()=>S(e,h,D))});let O=u(`rue:component:anchor`);i(h,O),d(()=>{let e=w(Et,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:s,preview:At,code:Pt,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});r(()=>S(e,h,O))});let k=u(`rue:component:anchor`);i(h,k),d(()=>{let e=w(Et,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:l,preview:pt,code:Ft,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`});r(()=>S(e,h,k))});let A=u(`rue:component:anchor`);i(h,A),d(()=>{let e=w(Et,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:p,preview:mt,code:It,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`});r(()=>S(e,h,A))});let j=u(`rue:component:anchor`);i(h,j),d(()=>{let e=w(Et,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:m,preview:ht,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});r(()=>S(e,h,j))});let M=c(`section`,h);i(h,M),C(M,`my-12 space-y-6`);let N=c(`div`,M);i(M,N);let P=c(`h2`,N);i(N,P),C(P,`mb-2`),i(P,t(`API`));let ee=c(`p`,N);i(N,ee),C(ee,`m-0 text-sm text-base-content/70`),i(ee,t(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let F=u(`rue:component:anchor`);i(M,F),d(()=>{let e=w(wt,{rows:gt});r(()=>S(e,M,F))});let I=c(`div`,M);i(M,I);let te=c(`h2`,I);i(I,te),C(te,`mb-2`),i(te,t(`附属导出`));let ne=c(`p`,I);i(I,ne),C(ne,`m-0 text-sm text-base-content/70`),i(ne,t(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let re=u(`rue:component:anchor`);return i(M,re),d(()=>{let e=w(Tt,{rows:_t});r(()=>S(e,M,re))}),o})}),h,g),h})};export{Lt as default};
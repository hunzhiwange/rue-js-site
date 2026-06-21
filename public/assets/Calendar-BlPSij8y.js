const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-CYhCVBrL.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{$t as t,A as n,Jt as r,N as i,Q as a,R as o,Z as s,dt as c,en as l,et as u,i as d,in as f,it as p,l as m,lt as h,m as g,nt as _,o as v,r as y,rn as b,rt as x,t as S,tt as C,vt as w,zt as T}from"./vapor-runtime-DsQWl-IB.js";import{a as E,n as D}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as O,i as k}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as A}from"./preload-helper-Bf_JiD2A.js";import{t as j}from"./Code-4SUSUwRg.js";import{t as M}from"./tabs-Duzh3URW.js";import{r as N}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as P}from"./preview-test-gate-nDDBbirJ.js";var ee=(e,t)=>t?`${e} ${t}`:e,te=()=>({date:new Map,month:new Map,year:new Map}),F=new Map,I=new Map,ne=new Map,re=new Map,ie=new Map,L=()=>typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now(),ae=(e,t)=>({enabled:e,start:e?L():0,threshold:t,cellCount:0,customRenderCount:0,cellRenderCount:0,fullCellRenderCount:0,dateCellRenderCount:0,dateFullCellRenderCount:0,monthCellRenderCount:0,monthFullCellRenderCount:0,slowCells:[]}),R=(e,t)=>{e.enabled&&(e.customRenderCount+=1,t===`cellRender`?e.cellRenderCount+=1:t===`fullCellRender`?e.fullCellRenderCount+=1:t===`dateCellRender`?e.dateCellRenderCount+=1:t===`dateFullCellRender`?e.dateFullCellRenderCount+=1:t===`monthCellRender`?e.monthCellRenderCount+=1:e.monthFullCellRenderCount+=1)},z=(e,t,n,r)=>{if(!e.enabled)return r();R(e,t);let i=L(),a=r(),o=L()-i;return o>=e.threshold&&e.slowCells.push({type:n.type,key:n.key,renderName:t,duration:o,row:n.row,column:n.column}),a},oe=(e,t,n,r)=>{if(!e||!t.enabled)return;let i=L()-t.start,a={component:`Calendar`,mode:n,phase:r,duration:i,cellCount:t.cellCount,customRenderCount:t.customRenderCount,cellRenderCount:t.cellRenderCount,fullCellRenderCount:t.fullCellRenderCount,dateCellRenderCount:t.dateCellRenderCount,dateFullCellRenderCount:t.dateFullCellRenderCount,monthCellRenderCount:t.monthCellRenderCount,monthFullCellRenderCount:t.monthFullCellRenderCount,slow:i>=t.threshold||t.slowCells.length>0,threshold:t.threshold,slowCells:t.slowCells.slice()},o=()=>e(a);typeof queueMicrotask==`function`?queueMicrotask(o):Promise.resolve().then(o)},B=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return t?a+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?a+=` border-base-300/70 bg-base-200/50 text-base-content/35`:r?a+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:a+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},V=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return t?i+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?i+=` border-base-300/70 bg-base-200/50 text-base-content/35`:i+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},H=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},U=e=>`${e??``}`.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),W=(e,t)=>t?` ${e}`:``,G=(e,t)=>t==null||t===!1||typeof t==`function`||typeof t==`object`?``:t===!0?` ${e}`:` ${e}="${U(t)}"`,se=e=>Object.entries(e).map(([e,t])=>e===`children`||e===`class`||e===`className`?``:G(e,t)).join(``),ce=e=>`<div data-rue-calendar-managed-cell="${U(e)}" style="display: contents;"></div>`,le=()=>`<div data-rue-calendar-managed-header="true" style="display: contents;"></div>`,ue=e=>{e&&i(null,e.host,e.anchor)},de=(e,t,n)=>{let r=e.querySelector(`[data-rue-calendar-managed-header="true"]`);if(!n.hasCustomHeader||!r)return ue(t),null;let a=t;if(!a||a.host!==r){ue(a);let e=(r.ownerDocument??document).createComment(`rue-calendar-managed-header`);r.appendChild(e),a={host:r,anchor:e}}return i(n.customHeaderContent==null?null:k(g,{children:n.customHeaderContent}),r,a.anchor),a},fe=(e,t,n,r)=>{let a=r?new Set(r):null,o=a??new Set(n.managedCellContent.keys());for(let r of o){let a=n.managedCellContent.get(r),o=Array.from(e.querySelectorAll(`[data-rue-calendar-managed-cell]`)).find(e=>e.getAttribute(`data-rue-calendar-managed-cell`)===r);if(!a||!o){let e=t.get(r);e&&(i(null,e.host,e.anchor),t.delete(r));continue}let s=t.get(r);if(!s||s.host!==o){s&&i(null,s.host,s.anchor);let e=(o.ownerDocument??document).createComment(`rue-calendar-managed-anchor`);o.appendChild(e),s={host:o,anchor:e},t.set(r,s)}i(a.content==null?null:k(g,{children:a.content}),o,s.anchor)}if(!a)for(let[e,r]of Array.from(t.entries()))n.managedCellContent.has(e)||(i(null,r.host,r.anchor),t.delete(e))},pe=e=>{for(let t of e.values())i(null,t.host,t.anchor);e.clear()},me=e=>{let t=e.fullscreen,n=se(e.rest),r=`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,i=t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,a=e.hasCustomHeader?le():`<div class="${U(r)}">
      <div>
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55">Rue Calendar</div>
        <div class="mt-1 text-xl font-semibold leading-tight">${U(e.headerTitle)}</div>
        <div class="mt-1 text-xs text-base-content/60">${U(e.todayLabel)}</div>
      </div>
      <div class="flex flex-wrap items-center gap-2 lg:justify-end">
        <div class="join">
          <button type="button" class="btn btn-sm join-item" aria-label="Previous" data-rue-calendar-action="previous"${W(`disabled`,e.previousDisabled)}><span aria-hidden="true">&lt;</span></button>
          <button type="button" class="btn btn-sm join-item btn-ghost" data-rue-calendar-action="today"${W(`disabled`,e.todayDisabled)}>${U(e.todayButtonLabel)}</button>
          <button type="button" class="btn btn-sm join-item" aria-label="Next" data-rue-calendar-action="next"${W(`disabled`,e.nextDisabled)}><span aria-hidden="true">&gt;</span></button>
        </div>
        <select class="select select-sm min-w-24" data-rue-calendar-select="year">
          ${e.yearOptions.map(t=>`<option value="${t.value}"${W(`selected`,t.value===e.currentValue.getFullYear())}${W(`disabled`,t.disabled)}>${t.value}</option>`).join(``)}
        </select>
        <select class="select select-sm min-w-24" data-rue-calendar-select="month"${W(`disabled`,e.currentMode===`year`)}>
          ${e.monthOptions.map(t=>`<option value="${t.value}"${W(`selected`,t.value===e.currentValue.getMonth())}${W(`disabled`,t.disabled)}>${U(t.label)}</option>`).join(``)}
        </select>
        <div class="join">
          <button type="button" data-rue-calendar-mode-switch="month" data-rue-calendar-action="mode-month" class="btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}">${U(e.monthButtonLabel)}</button>
          <button type="button" data-rue-calendar-mode-switch="year" data-rue-calendar-action="mode-year" class="btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}">${U(e.yearButtonLabel)}</button>
        </div>
      </div>
    </div>`,o=e.showWeek?`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${U(e.weekButtonLabel)}</div>`:``,s=e.weekdayLabels.map(e=>`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${U(e)}</div>`).join(``),c=e.currentMode===`month`?`<div class="space-y-2">
          <div class="${U(e.rowClassName)}">${o}${s}</div>
          <div role="grid" class="space-y-2">
            ${e.dateRows.map(n=>`<div role="row" class="${U(e.rowClassName)}">
                    ${e.showWeek?`<div class="flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60" data-rue-calendar-week="${n.week}">${n.week}</div>`:``}
                    ${n.cells.map(n=>{let r=e.dateCellStates.get(n.key),i=r.isToday?` aria-current="date"`:``;return`<button
                          type="button"
                          role="gridcell"
                          data-rue-calendar-cell="${U(n.key)}"
                          data-rue-calendar-in-view="${r.inView?`true`:`false`}"
                          aria-pressed="${r.selected?`true`:`false`}"${i}
                          ${W(`disabled`,r.disabled)}
                          class="${U(B(t,r.selected,r.disabled,r.inView,r.isToday))}"
                        >${e.hasDateCustomRender?ce(n.key):H(r,e.todayMarkerLabel)}</button>`}).join(``)}
                  </div>`).join(``)}
          </div>
        </div>`:`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          ${e.monthOptions.map(n=>{let r=q(e.currentValue.getFullYear(),n.value,1),i=X(r,e.currentValue),a=X(r,J(new Date)),o=n.disabled===!0,s=`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`;return`<button
                type="button"
                data-rue-calendar-month="${s}"
                aria-pressed="${i?`true`:`false`}"
                ${W(`disabled`,o)}
                class="${U(V(t,i,o,a))}"
              >
                ${e.hasMonthCustomRender?ce(s):`<span class="flex items-center justify-between gap-2">
                        <span class="text-sm font-semibold">${U(n.label)}</span>
                        ${a?`<span class="badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${U(e.todayMarkerLabel)}</span>`:``}
                      </span>`}
              </button>`}).join(``)}
        </div>`;return`<div${n} data-rue-calendar-root="true" data-rue-calendar-mode="${e.currentMode}" class="${U(e.rootClassName)}">
    ${a}
    <div class="${U(i)}">
      <div class="flex items-center justify-between gap-3 px-1">
        <div class="badge badge-outline badge-sm">${U(e.viewLabel)}</div>
        ${e.showWeek&&e.currentMode===`month`?`<div class="badge badge-soft badge-sm">${U(e.weekButtonLabel)}</div>`:``}
      </div>
      ${c}
    </div>
  </div>`},he=e=>{let t=e.fullscreen;return O(`div`,{...e.rest,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":e.currentMode,className:e.rootClassName,children:[e.hasCustomHeader?e.customHeaderContent:O(`div`,{className:`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[O(`div`,{children:[k(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),k(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:e.headerTitle}),k(`div`,{className:`mt-1 text-xs text-base-content/60`,children:e.todayLabel})]}),O(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Previous`,disabled:e.previousDisabled,onClick:e.onPrevious,children:k(`span`,{"aria-hidden":`true`,children:`<`})}),k(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:e.todayDisabled,onClick:e.onToday,children:e.todayButtonLabel}),k(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Next`,disabled:e.nextDisabled,onClick:e.onNext,children:k(`span`,{"aria-hidden":`true`,children:`>`})})]}),k(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getFullYear(),onChange:t=>e.onYearChange(Number(t.currentTarget.value)),children:e.yearOptions.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.value},e.value))}),k(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getMonth(),disabled:e.currentMode===`year`,onChange:t=>e.onMonthChange(Number(t.currentTarget.value)),children:e.monthOptions.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),O(`div`,{className:`join`,children:[k(`button`,{type:`button`,"data-rue-calendar-mode-switch":`month`,className:`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeMonth,children:e.monthButtonLabel}),k(`button`,{type:`button`,"data-rue-calendar-mode-switch":`year`,className:`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeYear,children:e.yearButtonLabel})]})]})]}),O(`div`,{className:t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[O(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[k(`div`,{className:`badge badge-outline badge-sm`,children:e.viewLabel}),e.showWeek&&e.currentMode===`month`?k(`div`,{className:`badge badge-soft badge-sm`,children:e.weekButtonLabel}):null]}),e.currentMode===`month`?O(`div`,{className:`space-y-2`,children:[O(`div`,{className:e.rowClassName,children:[e.showWeek?k(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e.weekButtonLabel}):null,e.weekdayLabels.map(e=>k(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),k(`div`,{role:`grid`,className:`space-y-2`,children:e.dateRows.map(n=>O(`div`,{role:`row`,className:e.rowClassName,children:[e.showWeek?k(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":n.week,children:n.week}):null,n.cells.map(n=>{let r=e.dateCellStates.get(n.key);return k(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":r.inView?`true`:`false`,"aria-pressed":r.selected?`true`:`false`,"aria-current":r.isToday?`date`:void 0,disabled:r.disabled,className:B(t,r.selected,r.disabled,r.inView,r.isToday),onClick:()=>e.onDateSelect(n.date),children:e.hasDateCustomRender?e.managedCellContent.get(n.key)?.content??null:O(`span`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${r.inView?``:`opacity-60`}`,children:r.dayNumber}),r.isToday?k(`span`,{className:`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},n.key)})]},n.key))})]}):k(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:e.monthOptions.map(n=>{let r=q(e.currentValue.getFullYear(),n.value,1),i=X(r,e.currentValue),a=X(r,J(new Date)),o=n.disabled===!0;return k(`button`,{type:`button`,"data-rue-calendar-month":`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:V(t,i,o,a),onClick:()=>e.onMonthSelect(r),children:e.hasMonthCustomRender?e.managedCellContent.get(`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`)?.content??null:O(`span`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:n.label}),a?k(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},`${e.currentValue.getFullYear()}-${n.value}`)})})]})]})},ge=e=>typeof e==`number`&&e>=0&&e<=6?e:1,K=e=>new Date(e.getTime()),q=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},J=e=>{let t=K(e);return t.setHours(0,0,0,0),t},_e=e=>q(e.getFullYear(),e.getMonth(),1),ve=e=>q(e.getFullYear(),e.getMonth()+1,0),ye=e=>q(e.getFullYear(),0,1),be=e=>q(e.getFullYear(),11,31),Y=(e,t)=>q(e.getFullYear(),e.getMonth(),e.getDate()+t),xe=e=>e instanceof Date&&!Number.isNaN(e.getTime()),Se=(e,t=new Date)=>{if(xe(e))return K(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(xe(t))return t}return K(t)},Ce=e=>{if(!e)return null;let t=J(Se(e[0])),n=J(Se(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},we=(e,t)=>e.getFullYear()===t.getFullYear(),X=(e,t)=>we(e,t)&&e.getMonth()===t.getMonth(),Te=(e,t)=>X(e,t)&&e.getDate()===t.getDate(),Ee=(e,t)=>{let n=q(e.getFullYear(),e.getMonth()+t,1),r=ve(n).getDate();return q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},De=(e,t)=>{let n=q(e.getFullYear()+t,e.getMonth(),1),r=ve(n).getDate();return q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},Oe=(e,t)=>De(e,t-e.getFullYear()),ke=(e,t)=>Ee(e,t-e.getMonth()),Ae=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,je=(e,t,n)=>{let r=J(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(K(r))},Me=(e,t,n,r)=>{let i=_e(e),a=ve(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):je(o,t,n))return!0;o=Y(o,1)}return!1},Ne=(e,t,n,r)=>{let i=ye(e),a=be(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>q(e.getFullYear(),n,1)).some(e=>r?r(e):Me(e,t,n))},Pe=e=>{let t=J(e),n=q(Y(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=Y(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Fe=(e,t)=>{let n=`${e}:${t}`,r=F.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=q(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(Y(a,(t+n)%7)));return F.set(n,o),o},Ie=e=>{let t=I.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(q(2026,t,1)));return I.set(e,r),r},Le=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Re=(e,t,n,r,i)=>{let a=Ie(e);return Array.from({length:12},(e,o)=>{let s=q(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):Me(s,n,r))}})},ze=(e,t)=>{let n=_e(e),r=Y(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=Y(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:Pe(i),cells:Array.from({length:7},(t,n)=>{let r=Y(i,n);return{key:Ae(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},Be=e=>{let t=ne.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),ne.set(e,t)),t},Ve=e=>{let t=re.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),re.set(e,t)),t},He=e=>{let t=ie.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),ie.set(e,t)),t},Ue=Object.assign(({value:e,defaultValue:t,mode:i,fullscreen:a=!0,showWeek:s,locale:c,weekStartsOn:l,validRange:u,disabledDate:d,dateFullCellRender:p,dateCellRender:m,monthFullCellRender:h,monthCellRender:g,cellRender:_,fullCellRender:v,headerRender:y,className:x,onRenderProfile:S,renderProfileThreshold:C=16,onChange:w,onPanelChange:T,onSelect:E,...D})=>{let A=ae(!!S,C),j=f(()=>({value:r(Se(e??t??new Date)),mode:r(i??`month`)})),M=j.value,N=j.mode,P=b(),F=b(),I=b(),ne=b(null),re=b(null),ie=b(`__none__`),L=e===void 0?M.value:Se(e,M.value),R=i??N.value,B=J(new Date),V=Ce(u),H=!!V||!!d,U=c??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),W=ge(l),G=U.toLowerCase().startsWith(`zh`);P.current||=te().date,F.current||=te().month,I.current||=te().year;let se=V?V.start.getTime():null,ce=V?V.end.getTime():null,le=d?d.toString():`__none__`;(ne.current!==se||re.current!==ce||ie.current!==le)&&(P.current.clear(),F.current.clear(),I.current.clear(),ne.current=se,re.current=ce,ie.current=le);let _e=e=>{if(!H)return!0;let t=Ae(J(e)),n=P.current?.get(t);if(n!==void 0)return n;let r=je(e,V,d);return P.current?.set(t,r),r},ve=e=>{if(!H)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=F.current?.get(t);if(n!==void 0)return n;let r=Me(e,V,d,_e);return F.current?.set(t,r),r},ye=e=>{if(!H)return!0;let t=`${e.getFullYear()}`,n=I.current?.get(t);if(n!==void 0)return n;let r=Ne(e,V,d,ve);return I.current?.set(t,r),r},be=R===`month`,Y=be?Fe(U,W):[],xe=be?ze(L,W):[];A.cellCount=be?xe.reduce((e,t)=>e+t.cells.length,0):12;let Pe=Le(L,V),Ie=Re(U,L,H?V:null,H?d:void 0,H?ve:void 0),Ue=ee(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${a?`rounded-[1.75rem]`:`w-full max-w-[24rem] rounded-[1.5rem]`}`,x),We=s?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,Ge=R===`month`?Be(U).format(L):Ve(U).format(L),Ke=He(U).format(B),qe=G?`今天`:`Today`,Je=G?`月`:`Month`,Ye=G?`年`:`Year`,Xe=G?`周`:`Week`,Ze=G?`今`:`Today`,Qe=R===`month`?G?`月视图`:`Month view`:G?`年视图`:`Year view`,$e=H?R===`month`?!ve(Ee(L,-1)):!ye(De(L,-1)):!1,et=H?R===`month`?!ve(Ee(L,1)):!ye(De(L,1)):!1,tt=H?!_e(B):!1,nt=!!(_||v||m||p),rt=!!(_||v||g||h),Z=(t,n)=>{let r=J(Se(t,L)),i=!Te(r,L),a=R===`month`?!X(r,L):!we(r,L);e===void 0&&(M.value=r),i&&w?.(K(r)),a&&T?.(K(r),R),E?.(K(r),{source:n})},it=e=>{e!==R&&(i===void 0&&(N.value=e),T?.(K(L),e))},at={value:K(L),type:R,yearOptions:Pe,monthOptions:Ie,onChange:e=>Z(e,`customize`),onTypeChange:it,onYearChange:e=>Z(Oe(L,e),`customize`),onMonthChange:e=>Z(ke(L,e),`customize`)},ot=!!y,st=y?y(at):null,Q=f(()=>({host:null,lastSnapshot:null,managedContentMounts:new Map,managedHeaderMount:null,eventsAttached:!1,cleanupVersion:0})),ct=()=>{!Q.host||Q.eventsAttached||(Q.host.addEventListener(`click`,e=>{let t=Q.lastSnapshot,n=e.target?.closest(`[data-rue-calendar-action], [data-rue-calendar-cell], [data-rue-calendar-month]`);if(!t||!n||!Q.host?.contains(n)||n.disabled)return;let r=n.getAttribute(`data-rue-calendar-action`);if(r===`previous`){t.onPrevious();return}if(r===`today`){t.onToday();return}if(r===`next`){t.onNext();return}if(r===`mode-month`){t.onModeMonth();return}if(r===`mode-year`){t.onModeYear();return}let i=n.getAttribute(`data-rue-calendar-cell`);if(i){t.onDateSelect(Se(i,t.currentValue));return}let a=n.getAttribute(`data-rue-calendar-month`);if(a){let[e,n]=a.split(`-`).map(e=>Number(e));Number.isFinite(e)&&Number.isFinite(n)&&t.onMonthSelect(q(e,n-1,1))}}),Q.host.addEventListener(`change`,e=>{let t=Q.lastSnapshot,n=e.target;if(!t||!n||!Q.host?.contains(n))return;let r=n.getAttribute(`data-rue-calendar-select`),i=Number(n.value);Number.isFinite(i)&&(r===`year`?t.onYearChange(i):r===`month`&&t.onMonthChange(i))}),Q.eventsAttached=!0)},lt=new Map;if(be)for(let e of xe)for(let t of e.cells)lt.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:Te(t.date,L),isToday:Te(t.date,B),disabled:!_e(t.date)});let ut=Pe.map(e=>({value:e,disabled:!ye(q(e,L.getMonth(),1))})),dt=new Map;be&&nt?xe.forEach((e,t)=>{e.cells.forEach((n,r)=>{let i=lt.get(n.key),a={type:`date`,key:n.key,row:t,column:r},o=k(`div`,{className:`flex h-full flex-col gap-2`,children:O(`div`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),i.isToday?k(`span`,{className:`badge badge-xs ${i.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]})}),s=_?z(A,`cellRender`,a,()=>_(K(n.date),{type:`date`,originNode:o,today:K(B),selected:i.selected,isToday:i.isToday,inView:n.inView,disabled:i.disabled,row:t,column:r,week:e.week})):void 0;s==null&&m&&(s=z(A,`dateCellRender`,a,()=>m(K(n.date))));let c=O(`div`,{className:`flex h-full flex-col gap-2`,children:[O(`div`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),i.isToday?k(`span`,{className:`badge badge-xs ${i.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]}),k(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${i.selected?`opacity-90`:`opacity-75`}`,children:s})]}),l=v?z(A,`fullCellRender`,a,()=>v(K(n.date),{type:`date`,originNode:c,today:K(B),selected:i.selected,isToday:i.isToday,inView:n.inView,disabled:i.disabled,row:t,column:r,week:e.week})):void 0;l==null&&p&&(l=z(A,`dateFullCellRender`,a,()=>p(K(n.date)))),dt.set(n.key,{key:n.key,type:`date`,content:l??c})})}):!be&&rt&&Ie.forEach((e,t)=>{let n=q(L.getFullYear(),e.value,1),r=X(n,L),i=X(n,B),a=e.disabled===!0,o=`${L.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,s={type:`month`,key:o,row:Math.floor(t/4),column:t%4},c=k(`div`,{className:`flex h-full flex-col gap-2`,children:O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.label}),i?k(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]})}),l=_?z(A,`cellRender`,s,()=>_(K(n),{type:`month`,originNode:c,today:K(B),selected:r,isToday:i,inView:!0,disabled:a,row:Math.floor(t/4),column:t%4})):void 0;l==null&&g&&(l=z(A,`monthCellRender`,s,()=>g(K(n))));let u=O(`div`,{className:`flex h-full flex-col gap-2`,children:[O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.label}),i?k(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]}),k(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${r?`opacity-90`:`opacity-75`}`,children:l})]}),d=v?z(A,`fullCellRender`,s,()=>v(K(n),{type:`month`,originNode:u,today:K(B),selected:r,isToday:i,inView:!0,disabled:a,row:Math.floor(t/4),column:t%4})):void 0;d==null&&h&&(d=z(A,`monthFullCellRender`,s,()=>h(K(n)))),dt.set(o,{key:o,type:`month`,content:d??u})});let ft={rest:D,rootClassName:Ue,fullscreen:a,hasCustomHeader:ot,customHeaderContent:st,currentMode:R,currentValue:K(L),headerTitle:Ge,todayLabel:Ke,previousDisabled:$e,nextDisabled:et,todayDisabled:tt,yearOptions:ut,monthOptions:Ie,weekdayLabels:Y,dateRows:xe,rowClassName:We,showWeek:s,viewLabel:Qe,weekButtonLabel:Xe,todayButtonLabel:qe,monthButtonLabel:Je,yearButtonLabel:Ye,todayMarkerLabel:Ze,dateCellStates:lt,managedCellContent:dt,hasDateCustomRender:nt,hasMonthCustomRender:rt,onPrevious:()=>Z(R===`month`?Ee(L,-1):De(L,-1),`customize`),onToday:()=>Z(B,`customize`),onNext:()=>Z(R===`month`?Ee(L,1):De(L,1),`customize`),onYearChange:e=>Z(Oe(L,e),`customize`),onMonthChange:e=>Z(ke(L,e),`customize`),onModeMonth:()=>it(`month`),onModeYear:()=>it(`year`),onDateSelect:e=>Z(e,`date`),onMonthSelect:e=>Z(e,`month`)};return n(()=>{let e=++Q.cleanupVersion;queueMicrotask(()=>{Q.cleanupVersion===e&&(pe(Q.managedContentMounts),ue(Q.managedHeaderMount),Q.managedHeaderMount=null,Q.host&&Q.host.replaceChildren(),Q.lastSnapshot=null)})}),typeof document>`u`?(oe(S,A,R,`jsx`),he(ft)):o(()=>{Q.cleanupVersion+=1,pe(Q.managedContentMounts),ue(Q.managedHeaderMount),Q.managedHeaderMount=null;let e=document.createElement(`span`);return e.style.display=`contents`,Q.host=e,Q.eventsAttached=!1,Q.lastSnapshot=null,ct(),e.innerHTML=me(ft),fe(e,Q.managedContentMounts,ft),Q.managedHeaderMount=de(e,Q.managedHeaderMount,ft),Q.lastSnapshot=ft,oe(S,A,R,`html`),e})},{Cally:({className:e,children:t,...n})=>k(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:ee(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>k(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>k(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:ee(`pika-single`,t)})}),We=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),Ge=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Ke=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},qe=e=>e?typeof e==`string`?e:Ge(e):`未选择`,Je=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Ye=[Ke(`2026-04-01`),Ke(`2026-05-31`)],Xe=e=>e.getDay()===0||e.getDay()===6||We.has(Ge(e)),Ze=()=>{let{selectedValue:e,selectedSource:n,panelMode:i,panelState:o,handleChange:s,handlePanelChange:d,handleSelect:h}=E(`useSetup:0:0`,()=>f(()=>{let e=E(`ref:1:0`,()=>r(`2026-04-12`)),t=E(`ref:1:1`,()=>r(`date`)),n=E(`ref:1:2`,()=>r(`month`)),i=E(`ref:1:3`,()=>r(Je(Ke(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelMode:n,panelState:i,handleChange:E(`useCallback:1:4`,()=>l(t=>{e.value=Ge(t)},[])),handlePanelChange:E(`useCallback:1:5`,()=>l((e,t)=>{i.value=Je(e,t)},[])),handleSelect:E(`useCallback:1:6`,()=>l((e,n)=>{t.value=n.source},[]))}}));return m(r=>{let l=_(`div`,r);c(l,`space-y-4`);let f=u(`rue:component:anchor`);a(l,f),T(()=>{let n=S(Ue,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:i.value,showWeek:!0,validRange:Ye,disabledDate:Xe,onChange:s,onPanelChange:(e,t)=>{i.value=t,d(e,t)},onSelect:h});t(()=>v(n,l,f))});let m=_(`div`,l);a(l,m),c(m,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let g=_(`div`,m);a(m,g),c(g,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let y=_(`div`,g);a(g,y),c(y,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),a(y,x(`当前值`));let b=_(`div`,g);a(g,b),c(b,`mt-1 text-sm font-medium`);let C=u(`rue:slot:anchor`);a(b,C),T(()=>{let n=qe(e.value);t(()=>v(n,b,C))});let E=_(`div`,m);a(m,E),c(E,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let D=_(`div`,E);a(E,D),c(D,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),a(D,x(`选择来源`));let O=_(`div`,E);a(E,O),c(O,`mt-1 text-sm font-medium`);let k=p(O);a(O,k),T(()=>{w(k,n.value)});let A=_(`div`,m);a(m,A),c(A,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let j=_(`div`,A);a(A,j),c(j,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),a(j,x(`面板状态`));let M=_(`div`,A);a(A,M),c(M,`mt-1 text-sm font-medium`);let N=p(M);a(M,N),T(()=>{w(N,o.value)});let P=_(`p`,l);return a(l,P),c(P,`m-0 text-xs text-base-content/70`),a(P,x(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),l})},Qe=null,$e=null,et=Ue.Cally,tt=Ue.Month,nt=Ue.PikaSingle,rt=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,Z=async()=>{typeof window>`u`||typeof customElements>`u`||(Qe||=(async()=>{let e=rt();customElements.get(`calendar-date`)||await(e?.cally?e.cally():A(()=>import(`./cally-DCI7Qaca.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await Qe)},it=async()=>{if(!$e){let t=rt();$e=(t?.pikaday?t.pikaday():A(()=>import(`./pikaday-CYhCVBrL.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return $e},at=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ot=(e,t=`未选择`)=>e||t,st=e=>e||`Pick a date`,Q=e=>m(n=>{let r=_(`div`,n);c(r,`flex flex-wrap gap-2 text-xs`);let i=_(`span`,r);a(r,i),T(()=>{c(i,`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`)});let o=u(`rue:slot:anchor`);a(i,o),T(()=>{let n=e.ready?e.readyLabel:e.loadingLabel;t(()=>v(n,i,o))});let s=u(`rue:slot:anchor`);return a(r,s),T(()=>{let n=e.error?m(()=>{let n=C(),r=_(`span`,n);a(n,r),c(r,`badge badge-error badge-soft`);let i=u(`rue:slot:anchor`);return a(r,i),T(()=>{let n=e.error;t(()=>v(n,r,i))}),n}):``;t(()=>v(n,r,s))}),r}),ct=()=>m(e=>{let t=_(`svg`,e);h(t,`aria-label`,`Previous`),c(t,`fill-current size-4`),h(t,`slot`,`previous`),h(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`viewBox`,`0 0 24 24`);let n=_(`path`,t);return a(t,n),h(n,`fill`,`currentColor`),h(n,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),t}),lt=()=>m(e=>{let t=_(`svg`,e);h(t,`aria-label`,`Next`),c(t,`fill-current size-4`),h(t,`slot`,`next`),h(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`viewBox`,`0 0 24 24`);let n=_(`path`,t);return a(t,n),h(n,`fill`,`currentColor`),h(n,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),t}),ut=()=>{let{calendarRef:e,cleanupRef:n,selectedValue:i,ready:o,error:s}=E(`useSetup:0:0`,()=>f(()=>{let e=E(`useRef:1:0`,()=>b()),t=E(`useRef:1:1`,()=>b(()=>{})),n=E(`ref:1:2`,()=>r(`2026-04-12`)),i=E(`ref:1:3`,()=>r(!1)),a=E(`ref:1:4`,()=>r(``));return y(()=>{let r=!0;Z().then(()=>{if(!r)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let o=()=>{n.value=a.value||``};a.addEventListener(`change`,o),t.current=()=>a.removeEventListener(`change`,o)}).catch(()=>{r&&(a.value=`Cally 加载失败`)}),d(()=>{r=!1})}),d(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:i,error:a}}));return m(n=>{let r=_(`div`,n);c(r,`space-y-3`);let l=u(`rue:component:anchor`);a(r,l);let d=m(()=>{let e=C(),t=u(`rue:component:anchor`);a(e,t),v(S(ct,{}),e,t);let n=u(`rue:component:anchor`);a(e,n),v(S(lt,{}),e,n);let r=u(`rue:component:anchor`);return a(e,r),v(S(tt,{}),e,r),e});T(()=>{let n=S(et,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:d});t(()=>v(n,r,l))});let f=u(`rue:component:anchor`);a(r,f),T(()=>{let e=S(Q,{ready:o.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:s.value});t(()=>v(e,r,f))});let p=_(`p`,r);a(r,p),c(p,`m-0 text-xs text-base-content/70`),a(p,x(`当前选择：`));let h=u(`rue:slot:anchor`);return a(p,h),T(()=>{let e=ot(i.value);t(()=>v(e,p,h))}),a(p,x(`。这条示例 原样保持，用于展示原生 web component 接口。`)),r})},dt=()=>{let{calendarRef:e,cleanupRef:n,selectedValue:i,open:o,ready:l,error:p}=E(`useSetup:0:0:dup1`,()=>f(()=>{let e=E(`useRef:1:5`,()=>b()),t=E(`useRef:1:6`,()=>b(()=>{})),n=E(`ref:1:7`,()=>r(``)),i=E(`ref:1:8`,()=>r(!1)),a=E(`ref:1:9`,()=>r(!1)),o=E(`ref:1:10`,()=>r(``));return y(()=>{let r=!0;Z().then(()=>{if(!r)return;a.value=!0;let o=e.current;if(!o)return;o.value=n.value;let s=()=>{n.value=o.value||``,i.value=!1};o.addEventListener(`change`,s),t.current=()=>o.removeEventListener(`change`,s)}).catch(()=>{r&&(o.value=`Cally 加载失败`)}),d(()=>{r=!1})}),d(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:i,ready:a,error:o}}));return m(n=>{let r=_(`div`,n);c(r,`space-y-3`);let d=_(`div`,r);a(r,d),c(d,`flex flex-wrap items-center gap-3`);let f=_(`button`,d);a(d,f),h(f,`type`,`button`),h(f,`data-testid`,`cally-picker-button`),c(f,`input input-bordered w-fit cursor-pointer`),s(f,`click`,()=>{o.value=!o.value});let g=u(`rue:slot:anchor`);a(f,g),T(()=>{let e=st(i.value);t(()=>v(e,f,g))});let y=_(`span`,d);a(d,y),c(y,`text-xs text-base-content/70`),a(y,x(`当前选择：`));let b=u(`rue:slot:anchor`);a(y,b),T(()=>{let e=ot(i.value);t(()=>v(e,y,b))});let w=_(`div`,r);a(r,w),h(w,`data-testid`,`cally-picker-panel`),T(()=>{c(w,`inline-block rounded-box bg-base-100 p-3 shadow-lg ${o.value?``:`hidden`}`)});let E=u(`rue:component:anchor`);a(w,E);let D=m(()=>{let e=C(),t=u(`rue:component:anchor`);a(e,t),v(S(ct,{}),e,t);let n=u(`rue:component:anchor`);a(e,n),v(S(lt,{}),e,n);let r=u(`rue:component:anchor`);return a(e,r),v(S(tt,{}),e,r),e});T(()=>{let n=S(et,{ref:e,"data-testid":`cally-picker-calendar`,children:D});t(()=>v(n,w,E))});let O=u(`rue:component:anchor`);a(r,O),T(()=>{let e=S(Q,{ready:l.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:p.value});t(()=>v(e,r,O))});let k=_(`p`,r);return a(r,k),c(k,`m-0 text-xs text-base-content/70`),a(k,x(`点击按钮展开面板，选中日期后会自动回填并收起。这条基础示例 同样完整保持。`)),r})},ft=()=>{let{inputRef:e,instanceRef:n,selectedValue:i,ready:o,error:s}=E(`useSetup:0:0:dup2`,()=>f(()=>{let e=E(`useRef:1:11`,()=>b()),t=E(`useRef:1:12`,()=>b()),n=E(`ref:1:13`,()=>r(``)),i=E(`ref:1:14`,()=>r(!1)),a=E(`ref:1:15`,()=>r(``));return y(()=>{let r=!0;it().then(a=>{if(!r)return;let o=e.current;o&&(t.current=new a({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>at(e),onSelect:e=>{n.value=o.value||at(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,i.value=!0)}).catch(()=>{r&&(a.value=`Pikaday 加载失败`)}),d(()=>{r=!1})}),d(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:i,error:a}}));return m(n=>{let r=_(`div`,n);c(r,`space-y-3`);let l=u(`rue:component:anchor`);a(r,l),T(()=>{let n=S(nt,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});t(()=>v(n,r,l))});let d=u(`rue:component:anchor`);a(r,d),T(()=>{let e=S(Q,{ready:o.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:s.value});t(()=>v(e,r,d))});let f=_(`p`,r);a(r,f),c(f,`m-0 text-xs text-base-content/70`),a(f,x(`当前选择：`));let p=u(`rue:slot:anchor`);a(f,p),T(()=>{let e=ot(i.value);t(()=>v(e,f,p))});let m=_(`p`,r);return a(r,m),c(m,`m-0 text-xs text-base-content/70`),a(m,x(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),r})},pt=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`onRenderProfile`,description:`渲染诊断回调，报告当前更新阶段、耗时、cellRender 调用次数与慢单元格`,type:`(event: CalendarRenderProfileEvent) => void`,defaultValue:`-`},{prop:`renderProfileThreshold`,description:`渲染诊断的慢调用阈值，超过后会在 onRenderProfile 中标记 slow`,type:`number`,defaultValue:`16`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],mt=[{name:`Calendar.Cally`,description:`展示基础 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],ht={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},gt={2:12,3:28,4:18,8:43},_t={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},vt={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},yt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,bt=e=>e?typeof e==`string`?e:yt(e):`未选择`,xt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,$=e=>m(n=>{let r=_(`div`,n);c(r,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let i=_(`span`,r);a(r,i),c(i,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let o=u(`rue:slot:anchor`);a(i,o),T(()=>{let n=e.label;t(()=>v(n,i,o))});let s=_(`span`,r);a(r,s),c(s,`text-sm font-medium`);let l=p(s);return a(s,l),T(()=>{w(l,e.value)}),r}),St=e=>m(n=>{let r=_(`div`,n);c(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=_(`table`,r);a(r,i),c(i,`table table-zebra`);let o=_(`thead`,i);a(i,o);let s=_(`tr`,o);a(o,s);let l=_(`th`,s);a(s,l),a(l,x(`属性`));let d=_(`th`,s);a(s,d),a(d,x(`说明`));let f=_(`th`,s);a(s,f),a(f,x(`类型`));let p=_(`th`,s);a(s,p),a(p,x(`默认值`));let g=_(`tbody`,i);a(i,g);let y=u(`rue:list:start`),b=u(`rue:list:end`);a(g,y),a(g,b);let S=new Map;return T(()=>{S=D({items:e.rows||[],getKey:(e,t)=>e.prop,elements:S,parent:g,before:b,singleRoot:!0,trackIndex:!1,start:y,renderItem:(e,n,r,i,o)=>{v(m(()=>{let n=C(),r=_(`tr`,n);a(n,r),T(()=>{h(r,`key`,String(e.prop))});let i=_(`td`,r);a(r,i);let o=_(`code`,i);a(i,o);let s=u(`rue:slot:anchor`);a(o,s),T(()=>{let n=e.prop;t(()=>v(n,o,s))});let c=_(`td`,r);a(r,c);let l=u(`rue:slot:anchor`);a(c,l),T(()=>{let n=e.description;t(()=>v(n,c,l))});let d=_(`td`,r);a(r,d);let f=_(`code`,d);a(d,f);let p=u(`rue:slot:anchor`);a(f,p),T(()=>{let n=e.type;t(()=>v(n,f,p))});let m=_(`td`,r);a(r,m);let g=_(`code`,m);a(m,g);let y=u(`rue:slot:anchor`);return a(g,y),T(()=>{let n=e.defaultValue;t(()=>v(n,g,y))}),n}),n,r)}})}),r}),Ct=e=>m(n=>{let r=_(`div`,n);c(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=_(`table`,r);a(r,i),c(i,`table table-zebra`);let o=_(`thead`,i);a(i,o);let s=_(`tr`,o);a(o,s);let l=_(`th`,s);a(s,l),a(l,x(`导出`));let d=_(`th`,s);a(s,d),a(d,x(`说明`));let f=_(`tbody`,i);a(i,f);let p=u(`rue:list:start`),g=u(`rue:list:end`);a(f,p),a(f,g);let y=new Map;return T(()=>{y=D({items:e.rows||[],getKey:(e,t)=>e.name,elements:y,parent:f,before:g,singleRoot:!0,trackIndex:!1,start:p,renderItem:(e,n,r,i,o)=>{v(m(()=>{let n=C(),r=_(`tr`,n);a(n,r),T(()=>{h(r,`key`,String(e.name))});let i=_(`td`,r);a(r,i);let o=_(`code`,i);a(i,o);let s=u(`rue:slot:anchor`);a(o,s),T(()=>{let n=e.name;t(()=>v(n,o,s))});let c=_(`td`,r);a(r,c);let l=u(`rue:slot:anchor`);return a(c,l),T(()=>{let n=e.description;t(()=>v(n,c,l))}),n}),n,r)}})}),r}),wt=e=>{let{shouldLoadPreview:n,preloadTimer:i}=E(`useSetup:0:0`,()=>f(()=>{let t=E(`ref:1:0`,()=>r(e.previewLoadDelay==null)),n=E(`useRef:1:1`,()=>b(null));return y(()=>{e.previewLoadDelay==null||t.value||(n.current=window.setTimeout(()=>{t.value=!0,n.current=null},e.previewLoadDelay))}),d(()=>{n.current!=null&&(window.clearTimeout(n.current),n.current=null)}),{shouldLoadPreview:t,preloadTimer:n}}));return m(r=>{let i=_(`div`,r);c(i,`component-preview not-prose my-6 text-base-content lg:my-12`);let o=_(`div`,i);a(i,o),c(o,`flex flex-wrap items-start justify-between gap-3`);let s=_(`div`,o);a(o,s);let l=_(`h2`,s);a(s,l),c(l,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(l,x(`# `));let d=u(`rue:slot:anchor`);a(l,d),T(()=>{let n=e.title;t(()=>v(n,l,d))});let f=u(`rue:slot:anchor`);a(s,f),T(()=>{let n=e.summary?m(()=>{let n=C(),r=_(`p`,n);a(n,r),c(r,`m-0 text-sm opacity-70`);let i=u(`rue:slot:anchor`);return a(r,i),T(()=>{let n=e.summary;t(()=>v(n,r,i))}),n}):``;t(()=>v(n,s,f))});let p=u(`rue:component:anchor`);a(i,p),T(()=>{let n=S(M,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});t(()=>v(n,i,p))});let h=u(`rue:slot:anchor`);return a(i,h),T(()=>{let r=e.tab.value===`preview`?n.value?P(e.title,e.preview):m(()=>{let n=C(),r=_(`div`,n);a(n,r),c(r,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let i=_(`div`,r);a(r,i),c(i,`badge badge-outline badge-sm`),a(i,x(`Preview`));let o=_(`p`,r);a(r,o),c(o,`mb-0 mt-3 text-sm text-base-content/72`);let s=u(`rue:slot:anchor`);return a(o,s),T(()=>{let n=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;t(()=>v(n,o,s))}),n}):m(()=>{let n=C(),r=u(`rue:component:anchor`);return a(n,r),T(()=>{let i=S(j,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});t(()=>v(i,n,r))}),n});t(()=>v(r,i,h))}),i})},Tt=e=>m(n=>{let r=_(`div`,n);c(r,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let i=_(`div`,r);a(r,i),c(i,`badge badge-outline badge-sm`);let o=u(`rue:slot:anchor`);a(i,o),T(()=>{let n=e.badge;t(()=>v(n,i,o))});let s=_(`h3`,r);a(r,s),c(s,`mt-3 mb-1 text-base font-semibold`);let l=u(`rue:slot:anchor`);a(s,l),T(()=>{let n=e.title;t(()=>v(n,s,l))});let d=_(`p`,r);a(r,d),c(d,`m-0 text-sm text-base-content/70`);let f=u(`rue:slot:anchor`);return a(d,f),T(()=>{let n=e.detail;t(()=>v(n,d,f))}),r}),Et=()=>{let{selectedValue:e,panelMode:n}=E(`useSetup:0:0:dup1`,()=>f(()=>({selectedValue:E(`ref:1:2`,()=>r(`2026-04-15`)),panelMode:E(`ref:1:3`,()=>r(`month`))})));return m(r=>{let i=_(`div`,r);c(i,`space-y-4`);let o=u(`rue:component:anchor`);a(i,o),T(()=>{let r=S(Ue,{"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:n.value,onChange:t=>{e.value=yt(t)},onPanelChange:(e,t)=>{n.value=t},cellRender:(e,t)=>{if(t.type===`month`){let t=gt[e.getMonth()];return t?O(`div`,{className:`space-y-1`,children:[k(`div`,{className:`text-lg font-semibold leading-none`,children:t}),k(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=ht[yt(e)]??[];return n.length?O(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>k(`div`,{className:`badge badge-soft badge-xs ${vt[e.tone]}`,children:e.label},e.label)),n.length>2?O(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});t(()=>v(r,i,o))});let s=_(`div`,i);a(i,s),c(s,`grid gap-3 md:grid-cols-3`);let l=u(`rue:component:anchor`);a(s,l),T(()=>{let n=S($,{label:`当前日期`,value:bt(e.value)});t(()=>v(n,s,l))});let d=u(`rue:component:anchor`);a(s,d),T(()=>{let e=S($,{label:`4 月 15 日事件`,value:`${ht[`2026-04-15`]?.length??0} 条`});t(()=>v(e,s,d))});let f=u(`rue:component:anchor`);return a(s,f),T(()=>{let e=S($,{label:`9 月 backlog`,value:`${gt[8]} 项`});t(()=>v(e,s,f))}),i})},Dt=()=>{let{selectedValue:e,panelMode:n}=E(`useSetup:0:0:dup2`,()=>f(()=>({selectedValue:E(`ref:1:4`,()=>r(`2026-09-18`)),panelMode:E(`ref:1:5`,()=>r(`month`))})));return m(r=>{let i=_(`div`,r);c(i,`space-y-4`);let o=_(`div`,i);a(i,o),c(o,`grid gap-4`);let s=_(`div`,o);a(o,s),c(s,`max-w-full overflow-x-auto`);let l=u(`rue:component:anchor`);a(s,l),T(()=>{let r=S(Ue,{"data-testid":`card-calendar`,className:`w-[34rem] max-w-none`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:n.value,onChange:t=>{e.value=yt(t)},onPanelChange:(e,t)=>{n.value=t},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=_t[yt(e)];return n==null?t.originNode:O(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),O(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),O(`div`,{className:`space-y-1`,children:[k(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:k(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),k(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});t(()=>v(r,s,l))});let d=_(`div`,o);a(o,d),c(d,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let f=_(`div`,d);a(d,f),c(f,`badge badge-secondary badge-soft`),a(f,x(`Card Mode`));let p=_(`h3`,d);a(d,p),c(p,`mt-3 mb-1 text-base font-semibold`),a(p,x(`容量面板`));let m=_(`p`,d);a(d,m),c(m,`m-0 text-sm text-base-content/70`),a(m,x(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let h=_(`div`,d);a(d,h),c(h,`mt-4 space-y-3`);let g=u(`rue:component:anchor`);a(h,g),T(()=>{let n=S($,{label:`当前日期`,value:bt(e.value)});t(()=>v(n,h,g))});let y=u(`rue:component:anchor`);a(h,y),v(S($,{label:`高负载日`,value:`9/18 · 92%`}),h,y);let b=u(`rue:component:anchor`);return a(h,b),v(S($,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),h,b),i})},Ot=()=>{let{selectedValue:e,panelMode:n,actionSource:i}=E(`useSetup:0:0:dup3`,()=>f(()=>({selectedValue:E(`ref:1:6`,()=>r(`2026-07-04`)),panelMode:E(`ref:1:7`,()=>r(`month`)),actionSource:E(`ref:1:8`,()=>r(`date`))})));return m(r=>{let o=_(`div`,r);c(o,`space-y-4`);let s=u(`rue:component:anchor`);a(o,s),T(()=>{let r=S(Ue,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:n.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>O(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[O(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[O(`div`,{children:[k(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),k(`div`,{className:`mt-1 text-base font-semibold`,children:xt(e,t)})]}),O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),k(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),O(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[k(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>k(`option`,{value:e,children:e},e))}),k(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=yt(t)},onPanelChange:(e,t)=>{n.value=t},onSelect:(e,t)=>{i.value=t.source}});t(()=>v(r,o,s))});let l=_(`div`,o);a(o,l),c(l,`grid gap-3 md:grid-cols-3`);let d=u(`rue:component:anchor`);a(l,d),T(()=>{let n=S($,{label:`当前日期`,value:bt(e.value)});t(()=>v(n,l,d))});let f=u(`rue:component:anchor`);a(l,f),T(()=>{let e=S($,{label:`当前模式`,value:n.value});t(()=>v(e,l,f))});let p=u(`rue:component:anchor`);return a(l,p),T(()=>{let e=S($,{label:`最近来源`,value:i.value});t(()=>v(e,l,p))}),o})},kt=`import { ref, useCallback } from '@rue-js/rue'
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
}`,At=`import { ref } from '@rue-js/rue'
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
}`,jt=`import { ref } from '@rue-js/rue'
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
}`,Mt=`import { ref } from '@rue-js/rue'
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
}`,Nt=`import 'cally'
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
}`,Pt=`import 'cally'
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
}`,Ft=()=>{let{tabBasic:e,tabNotice:n,tabCard:i,tabHeader:o,tabCallyCalendar:s,tabCallyDatePicker:l,tabPikaday:d}=E(`useSetup:0:0:dup4`,()=>f(()=>({tabBasic:E(`ref:1:9`,()=>r(`preview`)),tabNotice:E(`ref:1:10`,()=>r(`preview`)),tabCard:E(`ref:1:11`,()=>r(`preview`)),tabHeader:E(`ref:1:12`,()=>r(`preview`)),tabCallyCalendar:E(`ref:1:13`,()=>r(`preview`)),tabCallyDatePicker:E(`ref:1:14`,()=>r(`preview`)),tabPikaday:E(`ref:1:15`,()=>r(`preview`))})));return m(r=>{let f=C(),p=u(`rue:component:anchor`);return a(f,p),v(S(N,{children:m(()=>{let r=C(),f=_(`div`,r);a(r,f),c(f,`prose prose-sm max-w-none md:prose-base`);let p=_(`h1`,f);a(f,p),a(p,x(`Calendar 日历`));let m=_(`p`,f);a(f,m),c(m,`mt-3 mb-3 text-sm`),a(m,x(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条基础接入链路。`));let h=_(`div`,f);a(f,h),c(h,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let g=u(`rue:component:anchor`);a(h,g),v(S(Tt,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),h,g);let y=u(`rue:component:anchor`);a(h,y),v(S(Tt,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格组织为事项列表、容量卡或数据看板。`}),h,y);let b=u(`rue:component:anchor`);a(h,b),v(S(Tt,{badge:`Composition Ready`,title:`基础场景完整覆盖`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，基础接入方式不需要拆。`}),h,b);let w=u(`rue:component:anchor`);a(f,w),T(()=>{let n=S(wt,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:Ze,code:kt});t(()=>v(n,f,w))});let E=u(`rue:component:anchor`);a(f,E),T(()=>{let e=S(wt,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:n,preview:Et,code:At,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});t(()=>v(e,f,E))});let D=u(`rue:component:anchor`);a(f,D),T(()=>{let e=S(wt,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:i,preview:Dt,code:jt,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});t(()=>v(e,f,D))});let O=u(`rue:component:anchor`);a(f,O),T(()=>{let e=S(wt,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:o,preview:Ot,code:Mt,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});t(()=>v(e,f,O))});let k=u(`rue:component:anchor`);a(f,k),T(()=>{let e=S(wt,{title:`Cally calendar example`,summary:`基础的 Cally web component 日历壳层仍然原样可用。`,tab:s,preview:ut,code:Nt,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`});t(()=>v(e,f,k))});let A=u(`rue:component:anchor`);a(f,A),T(()=>{let e=S(wt,{title:`Cally date picker example`,summary:`基础的日期输入弹层示例 展示，只把交互说明和布局重新编排。`,tab:l,preview:dt,code:Pt,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`});t(()=>v(e,f,A))});let j=u(`rue:component:anchor`);a(f,j),T(()=>{let e=S(wt,{title:`Pikaday input example`,summary:`展示基础 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:d,preview:ft,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});t(()=>v(e,f,j))});let M=_(`section`,f);a(f,M),c(M,`my-12 space-y-6`);let N=_(`div`,M);a(M,N);let P=_(`h2`,N);a(N,P),c(P,`mb-2`),a(P,x(`API`));let ee=_(`p`,N);a(N,ee),c(ee,`m-0 text-sm text-base-content/70`),a(ee,x(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时使用 Rue 自己的视觉和基础导出方式。`));let te=u(`rue:component:anchor`);a(M,te),T(()=>{let e=S(St,{rows:pt});t(()=>v(e,M,te))});let F=_(`div`,M);a(M,F);let I=_(`h2`,F);a(F,I),c(I,`mb-2`),a(I,x(`附属导出`));let ne=_(`p`,F);a(F,ne),c(ne,`m-0 text-sm text-base-content/70`),a(ne,x(`基础的 Cally 与 Pikaday 接口没有删除，而是并列保持为复合导出，便于按需接入。`));let re=u(`rue:component:anchor`);return a(M,re),T(()=>{let e=S(Ct,{rows:mt});t(()=>v(e,M,re))}),r})}),f,p),f})};export{Ft as default};
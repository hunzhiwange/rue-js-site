const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BheVC8rZ.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{$ as t,Gt as n,Jt as r,L as i,M as a,Q as o,Qt as s,Wt as c,X as l,Y as u,Yt as d,et as f,ht as p,i as m,k as h,l as g,lt as _,nt as v,o as y,p as b,r as x,st as S,t as C,tt as w,zt as T}from"./vapor-runtime-CXIalONM.js";import{a as E,n as D}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as O,i as k}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as A}from"./preload-helper-CsoeaaUJ.js";import{t as j}from"./Code-BIscIyEp.js";import{t as M}from"./tabs-CZWMQq5i.js";import{r as N}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as P}from"./preview-test-gate-DumhDfV7.js";var ee=(e,t)=>t?`${e} ${t}`:e,te=()=>({date:new Map,month:new Map,year:new Map}),F=new Map,I=new Map,ne=new Map,re=new Map,ie=new Map,L=()=>typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now(),ae=(e,t)=>({enabled:e,start:e?L():0,threshold:t,cellCount:0,customRenderCount:0,cellRenderCount:0,fullCellRenderCount:0,dateCellRenderCount:0,dateFullCellRenderCount:0,monthCellRenderCount:0,monthFullCellRenderCount:0,slowCells:[]}),R=(e,t)=>{e.enabled&&(e.customRenderCount+=1,t===`cellRender`?e.cellRenderCount+=1:t===`fullCellRender`?e.fullCellRenderCount+=1:t===`dateCellRender`?e.dateCellRenderCount+=1:t===`dateFullCellRender`?e.dateFullCellRenderCount+=1:t===`monthCellRender`?e.monthCellRenderCount+=1:e.monthFullCellRenderCount+=1)},z=(e,t,n,r)=>{if(!e.enabled)return r();R(e,t);let i=L(),a=r(),o=L()-i;return o>=e.threshold&&e.slowCells.push({type:n.type,key:n.key,renderName:t,duration:o,row:n.row,column:n.column}),a},oe=(e,t,n,r)=>{if(!e||!t.enabled)return;let i=L()-t.start,a={component:`Calendar`,mode:n,phase:r,duration:i,cellCount:t.cellCount,customRenderCount:t.customRenderCount,cellRenderCount:t.cellRenderCount,fullCellRenderCount:t.fullCellRenderCount,dateCellRenderCount:t.dateCellRenderCount,dateFullCellRenderCount:t.dateFullCellRenderCount,monthCellRenderCount:t.monthCellRenderCount,monthFullCellRenderCount:t.monthFullCellRenderCount,slow:i>=t.threshold||t.slowCells.length>0,threshold:t.threshold,slowCells:t.slowCells.slice()},o=()=>e(a);typeof queueMicrotask==`function`?queueMicrotask(o):Promise.resolve().then(o)},B=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return t?a+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?a+=` border-base-300/70 bg-base-200/50 text-base-content/35`:r?a+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:a+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},V=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return t?i+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?i+=` border-base-300/70 bg-base-200/50 text-base-content/35`:i+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},H=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},U=e=>`${e??``}`.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),W=(e,t)=>t?` ${e}`:``,G=(e,t)=>t==null||t===!1||typeof t==`function`||typeof t==`object`?``:t===!0?` ${e}`:` ${e}="${U(t)}"`,se=e=>Object.entries(e).map(([e,t])=>e===`children`||e===`class`||e===`className`?``:G(e,t)).join(``),ce=e=>`<div data-rue-calendar-managed-cell="${U(e)}" style="display: contents;"></div>`,le=()=>`<div data-rue-calendar-managed-header="true" style="display: contents;"></div>`,ue=e=>{e&&a(null,e.host,e.anchor)},de=(e,t,n)=>{let r=e.querySelector(`[data-rue-calendar-managed-header="true"]`);if(!n.hasCustomHeader||!r)return ue(t),null;let i=t;if(!i||i.host!==r){ue(i);let e=(r.ownerDocument??document).createComment(`rue-calendar-managed-header`);r.appendChild(e),i={host:r,anchor:e}}return a(n.customHeaderContent==null?null:k(b,{children:n.customHeaderContent}),r,i.anchor),i},fe=(e,t,n,r)=>{let i=r?new Set(r):null,o=i??new Set(n.managedCellContent.keys());for(let r of o){let i=n.managedCellContent.get(r),o=Array.from(e.querySelectorAll(`[data-rue-calendar-managed-cell]`)).find(e=>e.getAttribute(`data-rue-calendar-managed-cell`)===r);if(!i||!o){let e=t.get(r);e&&(a(null,e.host,e.anchor),t.delete(r));continue}let s=t.get(r);if(!s||s.host!==o){s&&a(null,s.host,s.anchor);let e=(o.ownerDocument??document).createComment(`rue-calendar-managed-anchor`);o.appendChild(e),s={host:o,anchor:e},t.set(r,s)}a(i.content==null?null:k(b,{children:i.content}),o,s.anchor)}if(!i)for(let[e,r]of Array.from(t.entries()))n.managedCellContent.has(e)||(a(null,r.host,r.anchor),t.delete(e))},pe=e=>{for(let t of e.values())a(null,t.host,t.anchor);e.clear()},me=e=>{let t=e.fullscreen,n=se(e.rest),r=`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,i=t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,a=e.hasCustomHeader?le():`<div class="${U(r)}">
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
  </div>`},he=e=>{let t=e.fullscreen;return O(`div`,{...e.rest,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":e.currentMode,className:e.rootClassName,children:[e.hasCustomHeader?e.customHeaderContent:O(`div`,{className:`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[O(`div`,{children:[k(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),k(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:e.headerTitle}),k(`div`,{className:`mt-1 text-xs text-base-content/60`,children:e.todayLabel})]}),O(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Previous`,disabled:e.previousDisabled,onClick:e.onPrevious,children:k(`span`,{"aria-hidden":`true`,children:`<`})}),k(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:e.todayDisabled,onClick:e.onToday,children:e.todayButtonLabel}),k(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Next`,disabled:e.nextDisabled,onClick:e.onNext,children:k(`span`,{"aria-hidden":`true`,children:`>`})})]}),k(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getFullYear(),onChange:t=>e.onYearChange(Number(t.currentTarget.value)),children:e.yearOptions.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.value},e.value))}),k(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getMonth(),disabled:e.currentMode===`year`,onChange:t=>e.onMonthChange(Number(t.currentTarget.value)),children:e.monthOptions.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),O(`div`,{className:`join`,children:[k(`button`,{type:`button`,"data-rue-calendar-mode-switch":`month`,className:`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeMonth,children:e.monthButtonLabel}),k(`button`,{type:`button`,"data-rue-calendar-mode-switch":`year`,className:`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeYear,children:e.yearButtonLabel})]})]})]}),O(`div`,{className:t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[O(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[k(`div`,{className:`badge badge-outline badge-sm`,children:e.viewLabel}),e.showWeek&&e.currentMode===`month`?k(`div`,{className:`badge badge-soft badge-sm`,children:e.weekButtonLabel}):null]}),e.currentMode===`month`?O(`div`,{className:`space-y-2`,children:[O(`div`,{className:e.rowClassName,children:[e.showWeek?k(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e.weekButtonLabel}):null,e.weekdayLabels.map(e=>k(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),k(`div`,{role:`grid`,className:`space-y-2`,children:e.dateRows.map(n=>O(`div`,{role:`row`,className:e.rowClassName,children:[e.showWeek?k(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":n.week,children:n.week}):null,n.cells.map(n=>{let r=e.dateCellStates.get(n.key);return k(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":r.inView?`true`:`false`,"aria-pressed":r.selected?`true`:`false`,"aria-current":r.isToday?`date`:void 0,disabled:r.disabled,className:B(t,r.selected,r.disabled,r.inView,r.isToday),onClick:()=>e.onDateSelect(n.date),children:e.hasDateCustomRender?e.managedCellContent.get(n.key)?.content??null:O(`span`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${r.inView?``:`opacity-60`}`,children:r.dayNumber}),r.isToday?k(`span`,{className:`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},n.key)})]},n.key))})]}):k(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:e.monthOptions.map(n=>{let r=q(e.currentValue.getFullYear(),n.value,1),i=X(r,e.currentValue),a=X(r,J(new Date)),o=n.disabled===!0;return k(`button`,{type:`button`,"data-rue-calendar-month":`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:V(t,i,o,a),onClick:()=>e.onMonthSelect(r),children:e.hasMonthCustomRender?e.managedCellContent.get(`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`)?.content??null:O(`span`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:n.label}),a?k(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},`${e.currentValue.getFullYear()}-${n.value}`)})})]})]})},ge=e=>typeof e==`number`&&e>=0&&e<=6?e:1,K=e=>new Date(e.getTime()),q=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},J=e=>{let t=K(e);return t.setHours(0,0,0,0),t},_e=e=>q(e.getFullYear(),e.getMonth(),1),ve=e=>q(e.getFullYear(),e.getMonth()+1,0),ye=e=>q(e.getFullYear(),0,1),be=e=>q(e.getFullYear(),11,31),Y=(e,t)=>q(e.getFullYear(),e.getMonth(),e.getDate()+t),xe=e=>e instanceof Date&&!Number.isNaN(e.getTime()),Se=(e,t=new Date)=>{if(xe(e))return K(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(xe(t))return t}return K(t)},Ce=e=>{if(!e)return null;let t=J(Se(e[0])),n=J(Se(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},we=(e,t)=>e.getFullYear()===t.getFullYear(),X=(e,t)=>we(e,t)&&e.getMonth()===t.getMonth(),Te=(e,t)=>X(e,t)&&e.getDate()===t.getDate(),Ee=(e,t)=>{let n=q(e.getFullYear(),e.getMonth()+t,1),r=ve(n).getDate();return q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},De=(e,t)=>{let n=q(e.getFullYear()+t,e.getMonth(),1),r=ve(n).getDate();return q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},Oe=(e,t)=>De(e,t-e.getFullYear()),ke=(e,t)=>Ee(e,t-e.getMonth()),Ae=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,je=(e,t,n)=>{let r=J(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(K(r))},Me=(e,t,n,r)=>{let i=_e(e),a=ve(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):je(o,t,n))return!0;o=Y(o,1)}return!1},Ne=(e,t,n,r)=>{let i=ye(e),a=be(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>q(e.getFullYear(),n,1)).some(e=>r?r(e):Me(e,t,n))},Pe=e=>{let t=J(e),n=q(Y(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=Y(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Fe=(e,t)=>{let n=`${e}:${t}`,r=F.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=q(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(Y(a,(t+n)%7)));return F.set(n,o),o},Ie=e=>{let t=I.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(q(2026,t,1)));return I.set(e,r),r},Le=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Re=(e,t,n,r,i)=>{let a=Ie(e);return Array.from({length:12},(e,o)=>{let s=q(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):Me(s,n,r))}})},ze=(e,t)=>{let n=_e(e),r=Y(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=Y(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:Pe(i),cells:Array.from({length:7},(t,n)=>{let r=Y(i,n);return{key:Ae(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},Be=e=>{let t=ne.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),ne.set(e,t)),t},Ve=e=>{let t=re.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),re.set(e,t)),t},He=e=>{let t=ie.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),ie.set(e,t)),t},Ue=Object.assign(({value:e,defaultValue:t,mode:n,fullscreen:a=!0,showWeek:o,locale:s,weekStartsOn:c,validRange:l,disabledDate:u,dateFullCellRender:f,dateCellRender:p,monthFullCellRender:m,monthCellRender:g,cellRender:_,fullCellRender:v,headerRender:y,className:b,onRenderProfile:x,renderProfileThreshold:S=16,onChange:C,onPanelChange:w,onSelect:E,...D})=>{let A=ae(!!x,S),j=d(()=>({value:T(Se(e??t??new Date)),mode:T(n??`month`)})),M=j.value,N=j.mode,P=r(),F=r(),I=r(),ne=r(null),re=r(null),ie=r(`__none__`),L=e===void 0?M.value:Se(e,M.value),R=n??N.value,B=J(new Date),V=Ce(l),H=!!V||!!u,U=s??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),W=ge(c),G=U.toLowerCase().startsWith(`zh`);P.current||=te().date,F.current||=te().month,I.current||=te().year;let se=V?V.start.getTime():null,ce=V?V.end.getTime():null,le=u?u.toString():`__none__`;(ne.current!==se||re.current!==ce||ie.current!==le)&&(P.current.clear(),F.current.clear(),I.current.clear(),ne.current=se,re.current=ce,ie.current=le);let _e=e=>{if(!H)return!0;let t=Ae(J(e)),n=P.current?.get(t);if(n!==void 0)return n;let r=je(e,V,u);return P.current?.set(t,r),r},ve=e=>{if(!H)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=F.current?.get(t);if(n!==void 0)return n;let r=Me(e,V,u,_e);return F.current?.set(t,r),r},ye=e=>{if(!H)return!0;let t=`${e.getFullYear()}`,n=I.current?.get(t);if(n!==void 0)return n;let r=Ne(e,V,u,ve);return I.current?.set(t,r),r},be=R===`month`,Y=be?Fe(U,W):[],xe=be?ze(L,W):[];A.cellCount=be?xe.reduce((e,t)=>e+t.cells.length,0):12;let Pe=Le(L,V),Ie=Re(U,L,H?V:null,H?u:void 0,H?ve:void 0),Ue=ee(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${a?`rounded-[1.75rem]`:`w-full max-w-[24rem] rounded-[1.5rem]`}`,b),We=o?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,Ge=R===`month`?Be(U).format(L):Ve(U).format(L),Ke=He(U).format(B),qe=G?`今天`:`Today`,Je=G?`月`:`Month`,Ye=G?`年`:`Year`,Xe=G?`周`:`Week`,Ze=G?`今`:`Today`,Qe=R===`month`?G?`月视图`:`Month view`:G?`年视图`:`Year view`,$e=H?R===`month`?!ve(Ee(L,-1)):!ye(De(L,-1)):!1,et=H?R===`month`?!ve(Ee(L,1)):!ye(De(L,1)):!1,tt=H?!_e(B):!1,nt=!!(_||v||p||f),rt=!!(_||v||g||m),Z=(t,n)=>{let r=J(Se(t,L)),i=!Te(r,L),a=R===`month`?!X(r,L):!we(r,L);e===void 0&&(M.value=r),i&&C?.(K(r)),a&&w?.(K(r),R),E?.(K(r),{source:n})},it=e=>{e!==R&&(n===void 0&&(N.value=e),w?.(K(L),e))},at={value:K(L),type:R,yearOptions:Pe,monthOptions:Ie,onChange:e=>Z(e,`customize`),onTypeChange:it,onYearChange:e=>Z(Oe(L,e),`customize`),onMonthChange:e=>Z(ke(L,e),`customize`)},ot=!!y,st=y?y(at):null,Q=d(()=>({host:null,lastSnapshot:null,managedContentMounts:new Map,managedHeaderMount:null,eventsAttached:!1,cleanupVersion:0})),ct=()=>{!Q.host||Q.eventsAttached||(Q.host.addEventListener(`click`,e=>{let t=Q.lastSnapshot,n=e.target?.closest(`[data-rue-calendar-action], [data-rue-calendar-cell], [data-rue-calendar-month]`);if(!t||!n||!Q.host?.contains(n)||n.disabled)return;let r=n.getAttribute(`data-rue-calendar-action`);if(r===`previous`){t.onPrevious();return}if(r===`today`){t.onToday();return}if(r===`next`){t.onNext();return}if(r===`mode-month`){t.onModeMonth();return}if(r===`mode-year`){t.onModeYear();return}let i=n.getAttribute(`data-rue-calendar-cell`);if(i){t.onDateSelect(Se(i,t.currentValue));return}let a=n.getAttribute(`data-rue-calendar-month`);if(a){let[e,n]=a.split(`-`).map(e=>Number(e));Number.isFinite(e)&&Number.isFinite(n)&&t.onMonthSelect(q(e,n-1,1))}}),Q.host.addEventListener(`change`,e=>{let t=Q.lastSnapshot,n=e.target;if(!t||!n||!Q.host?.contains(n))return;let r=n.getAttribute(`data-rue-calendar-select`),i=Number(n.value);Number.isFinite(i)&&(r===`year`?t.onYearChange(i):r===`month`&&t.onMonthChange(i))}),Q.eventsAttached=!0)},lt=new Map;if(be)for(let e of xe)for(let t of e.cells)lt.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:Te(t.date,L),isToday:Te(t.date,B),disabled:!_e(t.date)});let ut=Pe.map(e=>({value:e,disabled:!ye(q(e,L.getMonth(),1))})),dt=new Map;be&&nt?xe.forEach((e,t)=>{e.cells.forEach((n,r)=>{let i=lt.get(n.key),a={type:`date`,key:n.key,row:t,column:r},o=k(`div`,{className:`flex h-full flex-col gap-2`,children:O(`div`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),i.isToday?k(`span`,{className:`badge badge-xs ${i.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]})}),s=_?z(A,`cellRender`,a,()=>_(K(n.date),{type:`date`,originNode:o,today:K(B),selected:i.selected,isToday:i.isToday,inView:n.inView,disabled:i.disabled,row:t,column:r,week:e.week})):void 0;s==null&&p&&(s=z(A,`dateCellRender`,a,()=>p(K(n.date))));let c=O(`div`,{className:`flex h-full flex-col gap-2`,children:[O(`div`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),i.isToday?k(`span`,{className:`badge badge-xs ${i.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]}),k(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${i.selected?`opacity-90`:`opacity-75`}`,children:s})]}),l=v?z(A,`fullCellRender`,a,()=>v(K(n.date),{type:`date`,originNode:c,today:K(B),selected:i.selected,isToday:i.isToday,inView:n.inView,disabled:i.disabled,row:t,column:r,week:e.week})):void 0;l==null&&f&&(l=z(A,`dateFullCellRender`,a,()=>f(K(n.date)))),dt.set(n.key,{key:n.key,type:`date`,content:l??c})})}):!be&&rt&&Ie.forEach((e,t)=>{let n=q(L.getFullYear(),e.value,1),r=X(n,L),i=X(n,B),a=e.disabled===!0,o=`${L.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,s={type:`month`,key:o,row:Math.floor(t/4),column:t%4},c=k(`div`,{className:`flex h-full flex-col gap-2`,children:O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.label}),i?k(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]})}),l=_?z(A,`cellRender`,s,()=>_(K(n),{type:`month`,originNode:c,today:K(B),selected:r,isToday:i,inView:!0,disabled:a,row:Math.floor(t/4),column:t%4})):void 0;l==null&&g&&(l=z(A,`monthCellRender`,s,()=>g(K(n))));let u=O(`div`,{className:`flex h-full flex-col gap-2`,children:[O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.label}),i?k(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]}),k(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${r?`opacity-90`:`opacity-75`}`,children:l})]}),d=v?z(A,`fullCellRender`,s,()=>v(K(n),{type:`month`,originNode:u,today:K(B),selected:r,isToday:i,inView:!0,disabled:a,row:Math.floor(t/4),column:t%4})):void 0;d==null&&m&&(d=z(A,`monthFullCellRender`,s,()=>m(K(n)))),dt.set(o,{key:o,type:`month`,content:d??u})});let ft={rest:D,rootClassName:Ue,fullscreen:a,hasCustomHeader:ot,customHeaderContent:st,currentMode:R,currentValue:K(L),headerTitle:Ge,todayLabel:Ke,previousDisabled:$e,nextDisabled:et,todayDisabled:tt,yearOptions:ut,monthOptions:Ie,weekdayLabels:Y,dateRows:xe,rowClassName:We,showWeek:o,viewLabel:Qe,weekButtonLabel:Xe,todayButtonLabel:qe,monthButtonLabel:Je,yearButtonLabel:Ye,todayMarkerLabel:Ze,dateCellStates:lt,managedCellContent:dt,hasDateCustomRender:nt,hasMonthCustomRender:rt,onPrevious:()=>Z(R===`month`?Ee(L,-1):De(L,-1),`customize`),onToday:()=>Z(B,`customize`),onNext:()=>Z(R===`month`?Ee(L,1):De(L,1),`customize`),onYearChange:e=>Z(Oe(L,e),`customize`),onMonthChange:e=>Z(ke(L,e),`customize`),onModeMonth:()=>it(`month`),onModeYear:()=>it(`year`),onDateSelect:e=>Z(e,`date`),onMonthSelect:e=>Z(e,`month`)};return h(()=>{let e=++Q.cleanupVersion;queueMicrotask(()=>{Q.cleanupVersion===e&&(pe(Q.managedContentMounts),ue(Q.managedHeaderMount),Q.managedHeaderMount=null,Q.host&&Q.host.replaceChildren(),Q.lastSnapshot=null)})}),typeof document>`u`?(oe(x,A,R,`jsx`),he(ft)):i(()=>{Q.cleanupVersion+=1,pe(Q.managedContentMounts),ue(Q.managedHeaderMount),Q.managedHeaderMount=null;let e=document.createElement(`span`);return e.style.display=`contents`,Q.host=e,Q.eventsAttached=!1,Q.lastSnapshot=null,ct(),e.innerHTML=me(ft),fe(e,Q.managedContentMounts,ft),Q.managedHeaderMount=de(e,Q.managedHeaderMount,ft),Q.lastSnapshot=ft,oe(x,A,R,`html`),e})},{Cally:({className:e,children:t,...n})=>k(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:ee(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>k(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>k(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:ee(`pika-single`,t)})}),We=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),Ge=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Ke=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},qe=e=>e?typeof e==`string`?e:Ge(e):`未选择`,Je=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Ye=[Ke(`2026-04-01`),Ke(`2026-05-31`)],Xe=e=>e.getDay()===0||e.getDay()===6||We.has(Ge(e)),Ze=()=>{let{selectedValue:e,selectedSource:t,panelMode:r,panelState:i,handleChange:a,handlePanelChange:u,handleSelect:m}=E(`useSetup:0:0`,()=>d(()=>{let e=E(`ref:1:0`,()=>T(`2026-04-12`)),t=E(`ref:1:1`,()=>T(`date`)),r=E(`ref:1:2`,()=>T(`month`)),i=E(`ref:1:3`,()=>T(Je(Ke(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelMode:r,panelState:i,handleChange:E(`useCallback:1:4`,()=>n(t=>{e.value=Ge(t)},[])),handlePanelChange:E(`useCallback:1:5`,()=>n((e,t)=>{i.value=Je(e,t)},[])),handleSelect:E(`useCallback:1:6`,()=>n((e,n)=>{t.value=n.source},[]))}}));return g(n=>{let d=f(`div`,n);_(d,`space-y-4`);let h=o(`rue:component:anchor`);l(d,h),s(()=>{let t=C(Ue,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:r.value,showWeek:!0,validRange:Ye,disabledDate:Xe,onChange:a,onPanelChange:(e,t)=>{r.value=t,u(e,t)},onSelect:m});c(()=>y(t,d,h))});let g=f(`div`,d);l(d,g),_(g,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let b=f(`div`,g);l(g,b),_(b,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let x=f(`div`,b);l(b,x),_(x,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),l(x,w(`当前值`));let S=f(`div`,b);l(b,S),_(S,`mt-1 text-sm font-medium`);let T=o(`rue:slot:anchor`);l(S,T),s(()=>{let t=qe(e.value);c(()=>y(t,S,T))});let E=f(`div`,g);l(g,E),_(E,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let D=f(`div`,E);l(E,D),_(D,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),l(D,w(`选择来源`));let O=f(`div`,E);l(E,O),_(O,`mt-1 text-sm font-medium`);let k=v(O);l(O,k),s(()=>{p(k,t.value)});let A=f(`div`,g);l(g,A),_(A,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let j=f(`div`,A);l(A,j),_(j,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),l(j,w(`面板状态`));let M=f(`div`,A);l(A,M),_(M,`mt-1 text-sm font-medium`);let N=v(M);l(M,N),s(()=>{p(N,i.value)});let P=f(`p`,d);return l(d,P),_(P,`m-0 text-xs text-base-content/70`),l(P,w(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),d})},Qe=null,$e=null,et=Ue.Cally,tt=Ue.Month,nt=Ue.PikaSingle,rt=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,Z=async()=>{typeof window>`u`||typeof customElements>`u`||(Qe||=(async()=>{let e=rt();customElements.get(`calendar-date`)||await(e?.cally?e.cally():A(()=>import(`./cally-D2HO0Jj5.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await Qe)},it=async()=>{if(!$e){let t=rt();$e=(t?.pikaday?t.pikaday():A(()=>import(`./pikaday-BheVC8rZ.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return $e},at=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ot=(e,t=`未选择`)=>e||t,st=e=>e||`Pick a date`,Q=e=>g(n=>{let r=f(`div`,n);_(r,`flex flex-wrap gap-2 text-xs`);let i=f(`span`,r);l(r,i),s(()=>{_(i,`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`)});let a=o(`rue:slot:anchor`);l(i,a),s(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;c(()=>y(t,i,a))});let u=o(`rue:slot:anchor`);return l(r,u),s(()=>{let n=e.error?g(()=>{let n=t(),r=f(`span`,n);l(n,r),_(r,`badge badge-error badge-soft`);let i=o(`rue:slot:anchor`);return l(r,i),s(()=>{let t=e.error;c(()=>y(t,r,i))}),n}):``;c(()=>y(n,r,u))}),r}),ct=()=>g(e=>{let t=f(`svg`,e);S(t,`aria-label`,`Previous`),_(t,`fill-current size-4`),S(t,`slot`,`previous`),S(t,`xmlns`,`http://www.w3.org/2000/svg`),S(t,`viewBox`,`0 0 24 24`);let n=f(`path`,t);return l(t,n),S(n,`fill`,`currentColor`),S(n,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),t}),lt=()=>g(e=>{let t=f(`svg`,e);S(t,`aria-label`,`Next`),_(t,`fill-current size-4`),S(t,`slot`,`next`),S(t,`xmlns`,`http://www.w3.org/2000/svg`),S(t,`viewBox`,`0 0 24 24`);let n=f(`path`,t);return l(t,n),S(n,`fill`,`currentColor`),S(n,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),t}),ut=()=>{let{calendarRef:e,cleanupRef:n,selectedValue:i,ready:a,error:u}=E(`useSetup:0:0`,()=>d(()=>{let e=E(`useRef:1:0`,()=>r()),t=E(`useRef:1:1`,()=>r(()=>{})),n=E(`ref:1:2`,()=>T(`2026-04-12`)),i=E(`ref:1:3`,()=>T(!1)),a=E(`ref:1:4`,()=>T(``));return x(()=>{let r=!0;Z().then(()=>{if(!r)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let o=()=>{n.value=a.value||``};a.addEventListener(`change`,o),t.current=()=>a.removeEventListener(`change`,o)}).catch(()=>{r&&(a.value=`Cally 加载失败`)}),m(()=>{r=!1})}),m(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:i,error:a}}));return g(n=>{let r=f(`div`,n);_(r,`space-y-3`);let d=o(`rue:component:anchor`);l(r,d);let p=g(()=>{let e=t(),n=o(`rue:component:anchor`);l(e,n),y(C(ct,{}),e,n);let r=o(`rue:component:anchor`);l(e,r),y(C(lt,{}),e,r);let i=o(`rue:component:anchor`);return l(e,i),y(C(tt,{}),e,i),e});s(()=>{let t=C(et,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:p});c(()=>y(t,r,d))});let m=o(`rue:component:anchor`);l(r,m),s(()=>{let e=C(Q,{ready:a.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:u.value});c(()=>y(e,r,m))});let h=f(`p`,r);l(r,h),_(h,`m-0 text-xs text-base-content/70`),l(h,w(`当前选择：`));let v=o(`rue:slot:anchor`);return l(h,v),s(()=>{let e=ot(i.value);c(()=>y(e,h,v))}),l(h,w(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),r})},dt=()=>{let{calendarRef:e,cleanupRef:n,selectedValue:i,open:a,ready:p,error:h}=E(`useSetup:0:0:dup1`,()=>d(()=>{let e=E(`useRef:1:5`,()=>r()),t=E(`useRef:1:6`,()=>r(()=>{})),n=E(`ref:1:7`,()=>T(``)),i=E(`ref:1:8`,()=>T(!1)),a=E(`ref:1:9`,()=>T(!1)),o=E(`ref:1:10`,()=>T(``));return x(()=>{let r=!0;Z().then(()=>{if(!r)return;a.value=!0;let o=e.current;if(!o)return;o.value=n.value;let s=()=>{n.value=o.value||``,i.value=!1};o.addEventListener(`change`,s),t.current=()=>o.removeEventListener(`change`,s)}).catch(()=>{r&&(o.value=`Cally 加载失败`)}),m(()=>{r=!1})}),m(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:i,ready:a,error:o}}));return g(n=>{let r=f(`div`,n);_(r,`space-y-3`);let d=f(`div`,r);l(r,d),_(d,`flex flex-wrap items-center gap-3`);let m=f(`button`,d);l(d,m),S(m,`type`,`button`),S(m,`data-testid`,`cally-picker-button`),_(m,`input input-bordered w-fit cursor-pointer`),u(m,`click`,()=>{a.value=!a.value});let v=o(`rue:slot:anchor`);l(m,v),s(()=>{let e=st(i.value);c(()=>y(e,m,v))});let b=f(`span`,d);l(d,b),_(b,`text-xs text-base-content/70`),l(b,w(`当前选择：`));let x=o(`rue:slot:anchor`);l(b,x),s(()=>{let e=ot(i.value);c(()=>y(e,b,x))});let T=f(`div`,r);l(r,T),S(T,`data-testid`,`cally-picker-panel`),s(()=>{_(T,`inline-block rounded-box bg-base-100 p-3 shadow-lg ${a.value?``:`hidden`}`)});let E=o(`rue:component:anchor`);l(T,E);let D=g(()=>{let e=t(),n=o(`rue:component:anchor`);l(e,n),y(C(ct,{}),e,n);let r=o(`rue:component:anchor`);l(e,r),y(C(lt,{}),e,r);let i=o(`rue:component:anchor`);return l(e,i),y(C(tt,{}),e,i),e});s(()=>{let t=C(et,{ref:e,"data-testid":`cally-picker-calendar`,children:D});c(()=>y(t,T,E))});let O=o(`rue:component:anchor`);l(r,O),s(()=>{let e=C(Q,{ready:p.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:h.value});c(()=>y(e,r,O))});let k=f(`p`,r);return l(r,k),_(k,`m-0 text-xs text-base-content/70`),l(k,w(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),r})},ft=()=>{let{inputRef:e,instanceRef:t,selectedValue:n,ready:i,error:a}=E(`useSetup:0:0:dup2`,()=>d(()=>{let e=E(`useRef:1:11`,()=>r()),t=E(`useRef:1:12`,()=>r()),n=E(`ref:1:13`,()=>T(``)),i=E(`ref:1:14`,()=>T(!1)),a=E(`ref:1:15`,()=>T(``));return x(()=>{let r=!0;it().then(a=>{if(!r)return;let o=e.current;o&&(t.current=new a({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>at(e),onSelect:e=>{n.value=o.value||at(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,i.value=!0)}).catch(()=>{r&&(a.value=`Pikaday 加载失败`)}),m(()=>{r=!1})}),m(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:i,error:a}}));return g(t=>{let r=f(`div`,t);_(r,`space-y-3`);let u=o(`rue:component:anchor`);l(r,u),s(()=>{let t=C(nt,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});c(()=>y(t,r,u))});let d=o(`rue:component:anchor`);l(r,d),s(()=>{let e=C(Q,{ready:i.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:a.value});c(()=>y(e,r,d))});let p=f(`p`,r);l(r,p),_(p,`m-0 text-xs text-base-content/70`),l(p,w(`当前选择：`));let m=o(`rue:slot:anchor`);l(p,m),s(()=>{let e=ot(n.value);c(()=>y(e,p,m))});let h=f(`p`,r);return l(r,h),_(h,`m-0 text-xs text-base-content/70`),l(h,w(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),r})},pt=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`onRenderProfile`,description:`渲染诊断回调，报告本次更新阶段、耗时、cellRender 调用次数与慢单元格`,type:`(event: CalendarRenderProfileEvent) => void`,defaultValue:`-`},{prop:`renderProfileThreshold`,description:`渲染诊断的慢调用阈值，超过后会在 onRenderProfile 中标记 slow`,type:`number`,defaultValue:`16`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],mt=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],ht={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},gt={2:12,3:28,4:18,8:43},_t={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},vt={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},yt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,bt=e=>e?typeof e==`string`?e:yt(e):`未选择`,xt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,$=e=>g(t=>{let n=f(`div`,t);_(n,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let r=f(`span`,n);l(n,r),_(r,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let i=o(`rue:slot:anchor`);l(r,i),s(()=>{let t=e.label;c(()=>y(t,r,i))});let a=f(`span`,n);l(n,a),_(a,`text-sm font-medium`);let u=v(a);return l(a,u),s(()=>{p(u,e.value)}),n}),St=e=>g(n=>{let r=f(`div`,n);_(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=f(`table`,r);l(r,i),_(i,`table table-zebra`);let a=f(`thead`,i);l(i,a);let u=f(`tr`,a);l(a,u);let d=f(`th`,u);l(u,d),l(d,w(`属性`));let p=f(`th`,u);l(u,p),l(p,w(`说明`));let m=f(`th`,u);l(u,m),l(m,w(`类型`));let h=f(`th`,u);l(u,h),l(h,w(`默认值`));let v=f(`tbody`,i);l(i,v);let b=o(`rue:list:start`),x=o(`rue:list:end`);l(v,b),l(v,x);let C=new Map;return s(()=>{C=D({items:e.rows||[],getKey:(e,t)=>e.prop,elements:C,parent:v,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,n,r,i,a)=>{y(g(()=>{let n=t(),r=f(`tr`,n);l(n,r),s(()=>{S(r,`key`,String(e.prop))});let i=f(`td`,r);l(r,i);let a=f(`code`,i);l(i,a);let u=o(`rue:slot:anchor`);l(a,u),s(()=>{let t=e.prop;c(()=>y(t,a,u))});let d=f(`td`,r);l(r,d);let p=o(`rue:slot:anchor`);l(d,p),s(()=>{let t=e.description;c(()=>y(t,d,p))});let m=f(`td`,r);l(r,m);let h=f(`code`,m);l(m,h);let g=o(`rue:slot:anchor`);l(h,g),s(()=>{let t=e.type;c(()=>y(t,h,g))});let _=f(`td`,r);l(r,_);let v=f(`code`,_);l(_,v);let b=o(`rue:slot:anchor`);return l(v,b),s(()=>{let t=e.defaultValue;c(()=>y(t,v,b))}),n}),n,r)}})}),r}),Ct=e=>g(n=>{let r=f(`div`,n);_(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=f(`table`,r);l(r,i),_(i,`table table-zebra`);let a=f(`thead`,i);l(i,a);let u=f(`tr`,a);l(a,u);let d=f(`th`,u);l(u,d),l(d,w(`导出`));let p=f(`th`,u);l(u,p),l(p,w(`说明`));let m=f(`tbody`,i);l(i,m);let h=o(`rue:list:start`),v=o(`rue:list:end`);l(m,h),l(m,v);let b=new Map;return s(()=>{b=D({items:e.rows||[],getKey:(e,t)=>e.name,elements:b,parent:m,before:v,singleRoot:!0,trackIndex:!1,start:h,renderItem:(e,n,r,i,a)=>{y(g(()=>{let n=t(),r=f(`tr`,n);l(n,r),s(()=>{S(r,`key`,String(e.name))});let i=f(`td`,r);l(r,i);let a=f(`code`,i);l(i,a);let u=o(`rue:slot:anchor`);l(a,u),s(()=>{let t=e.name;c(()=>y(t,a,u))});let d=f(`td`,r);l(r,d);let p=o(`rue:slot:anchor`);return l(d,p),s(()=>{let t=e.description;c(()=>y(t,d,p))}),n}),n,r)}})}),r}),wt=e=>{let{shouldLoadPreview:n,preloadTimer:i}=E(`useSetup:0:0`,()=>d(()=>{let t=E(`ref:1:0`,()=>T(e.previewLoadDelay==null)),n=E(`useRef:1:1`,()=>r(null));return x(()=>{e.previewLoadDelay==null||t.value||(n.current=window.setTimeout(()=>{t.value=!0,n.current=null},e.previewLoadDelay))}),m(()=>{n.current!=null&&(window.clearTimeout(n.current),n.current=null)}),{shouldLoadPreview:t,preloadTimer:n}}));return g(r=>{let i=f(`div`,r);_(i,`component-preview not-prose my-6 text-base-content lg:my-12`);let a=f(`div`,i);l(i,a),_(a,`flex flex-wrap items-start justify-between gap-3`);let u=f(`div`,a);l(a,u);let d=f(`h2`,u);l(u,d),_(d,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(d,w(`# `));let p=o(`rue:slot:anchor`);l(d,p),s(()=>{let t=e.title;c(()=>y(t,d,p))});let m=o(`rue:slot:anchor`);l(u,m),s(()=>{let n=e.summary?g(()=>{let n=t(),r=f(`p`,n);l(n,r),_(r,`m-0 text-sm opacity-70`);let i=o(`rue:slot:anchor`);return l(r,i),s(()=>{let t=e.summary;c(()=>y(t,r,i))}),n}):``;c(()=>y(n,u,m))});let h=o(`rue:component:anchor`);l(i,h),s(()=>{let t=C(M,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});c(()=>y(t,i,h))});let v=o(`rue:slot:anchor`);return l(i,v),s(()=>{let r=e.tab.value===`preview`?n.value?P(e.title,e.preview):g(()=>{let n=t(),r=f(`div`,n);l(n,r),_(r,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let i=f(`div`,r);l(r,i),_(i,`badge badge-outline badge-sm`),l(i,w(`Preview`));let a=f(`p`,r);l(r,a),_(a,`mb-0 mt-3 text-sm text-base-content/72`);let u=o(`rue:slot:anchor`);return l(a,u),s(()=>{let t=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;c(()=>y(t,a,u))}),n}):g(()=>{let n=t(),r=o(`rue:component:anchor`);return l(n,r),s(()=>{let t=C(j,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});c(()=>y(t,n,r))}),n});c(()=>y(r,i,v))}),i})},Tt=e=>g(t=>{let n=f(`div`,t);_(n,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let r=f(`div`,n);l(n,r),_(r,`badge badge-outline badge-sm`);let i=o(`rue:slot:anchor`);l(r,i),s(()=>{let t=e.badge;c(()=>y(t,r,i))});let a=f(`h3`,n);l(n,a),_(a,`mt-3 mb-1 text-base font-semibold`);let u=o(`rue:slot:anchor`);l(a,u),s(()=>{let t=e.title;c(()=>y(t,a,u))});let d=f(`p`,n);l(n,d),_(d,`m-0 text-sm text-base-content/70`);let p=o(`rue:slot:anchor`);return l(d,p),s(()=>{let t=e.detail;c(()=>y(t,d,p))}),n}),Et=()=>{let{selectedValue:e,panelMode:t}=E(`useSetup:0:0:dup1`,()=>d(()=>({selectedValue:E(`ref:1:2`,()=>T(`2026-04-15`)),panelMode:E(`ref:1:3`,()=>T(`month`))})));return g(n=>{let r=f(`div`,n);_(r,`space-y-4`);let i=o(`rue:component:anchor`);l(r,i),s(()=>{let n=C(Ue,{"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,onChange:t=>{e.value=yt(t)},onPanelChange:(e,n)=>{t.value=n},cellRender:(e,t)=>{if(t.type===`month`){let t=gt[e.getMonth()];return t?O(`div`,{className:`space-y-1`,children:[k(`div`,{className:`text-lg font-semibold leading-none`,children:t}),k(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=ht[yt(e)]??[];return n.length?O(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>k(`div`,{className:`badge badge-soft badge-xs ${vt[e.tone]}`,children:e.label},e.label)),n.length>2?O(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});c(()=>y(n,r,i))});let a=f(`div`,r);l(r,a),_(a,`grid gap-3 md:grid-cols-3`);let u=o(`rue:component:anchor`);l(a,u),s(()=>{let t=C($,{label:`当前日期`,value:bt(e.value)});c(()=>y(t,a,u))});let d=o(`rue:component:anchor`);l(a,d),s(()=>{let e=C($,{label:`4 月 15 日事件`,value:`${ht[`2026-04-15`]?.length??0} 条`});c(()=>y(e,a,d))});let p=o(`rue:component:anchor`);return l(a,p),s(()=>{let e=C($,{label:`9 月 backlog`,value:`${gt[8]} 项`});c(()=>y(e,a,p))}),r})},Dt=()=>{let{selectedValue:e,panelMode:t}=E(`useSetup:0:0:dup2`,()=>d(()=>({selectedValue:E(`ref:1:4`,()=>T(`2026-09-18`)),panelMode:E(`ref:1:5`,()=>T(`month`))})));return g(n=>{let r=f(`div`,n);_(r,`space-y-4`);let i=f(`div`,r);l(r,i),_(i,`grid gap-4`);let a=f(`div`,i);l(i,a),_(a,`max-w-full overflow-x-auto`);let u=o(`rue:component:anchor`);l(a,u),s(()=>{let n=C(Ue,{"data-testid":`card-calendar`,className:`w-[34rem] max-w-none`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:t.value,onChange:t=>{e.value=yt(t)},onPanelChange:(e,n)=>{t.value=n},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=_t[yt(e)];return n==null?t.originNode:O(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),O(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),O(`div`,{className:`space-y-1`,children:[k(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:k(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),k(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});c(()=>y(n,a,u))});let d=f(`div`,i);l(i,d),_(d,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let p=f(`div`,d);l(d,p),_(p,`badge badge-secondary badge-soft`),l(p,w(`Card Mode`));let m=f(`h3`,d);l(d,m),_(m,`mt-3 mb-1 text-base font-semibold`),l(m,w(`容量面板`));let h=f(`p`,d);l(d,h),_(h,`m-0 text-sm text-base-content/70`),l(h,w(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let g=f(`div`,d);l(d,g),_(g,`mt-4 space-y-3`);let v=o(`rue:component:anchor`);l(g,v),s(()=>{let t=C($,{label:`当前日期`,value:bt(e.value)});c(()=>y(t,g,v))});let b=o(`rue:component:anchor`);l(g,b),y(C($,{label:`高负载日`,value:`9/18 · 92%`}),g,b);let x=o(`rue:component:anchor`);return l(g,x),y(C($,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),g,x),r})},Ot=()=>{let{selectedValue:e,panelMode:t,actionSource:n}=E(`useSetup:0:0:dup3`,()=>d(()=>({selectedValue:E(`ref:1:6`,()=>T(`2026-07-04`)),panelMode:E(`ref:1:7`,()=>T(`month`)),actionSource:E(`ref:1:8`,()=>T(`date`))})));return g(r=>{let i=f(`div`,r);_(i,`space-y-4`);let a=o(`rue:component:anchor`);l(i,a),s(()=>{let r=C(Ue,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>O(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[O(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[O(`div`,{children:[k(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),k(`div`,{className:`mt-1 text-base font-semibold`,children:xt(e,t)})]}),O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),k(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),O(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[k(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>k(`option`,{value:e,children:e},e))}),k(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=yt(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{n.value=t.source}});c(()=>y(r,i,a))});let u=f(`div`,i);l(i,u),_(u,`grid gap-3 md:grid-cols-3`);let d=o(`rue:component:anchor`);l(u,d),s(()=>{let t=C($,{label:`当前日期`,value:bt(e.value)});c(()=>y(t,u,d))});let p=o(`rue:component:anchor`);l(u,p),s(()=>{let e=C($,{label:`当前模式`,value:t.value});c(()=>y(e,u,p))});let m=o(`rue:component:anchor`);return l(u,m),s(()=>{let e=C($,{label:`最近来源`,value:n.value});c(()=>y(e,u,m))}),i})},kt=`import { ref, useCallback } from '@rue-js/rue'
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
}`,Ft=()=>{let{tabBasic:e,tabNotice:n,tabCard:r,tabHeader:i,tabCallyCalendar:a,tabCallyDatePicker:u,tabPikaday:p}=E(`useSetup:0:0:dup4`,()=>d(()=>({tabBasic:E(`ref:1:9`,()=>T(`preview`)),tabNotice:E(`ref:1:10`,()=>T(`preview`)),tabCard:E(`ref:1:11`,()=>T(`preview`)),tabHeader:E(`ref:1:12`,()=>T(`preview`)),tabCallyCalendar:E(`ref:1:13`,()=>T(`preview`)),tabCallyDatePicker:E(`ref:1:14`,()=>T(`preview`)),tabPikaday:E(`ref:1:15`,()=>T(`preview`))})));return g(d=>{let m=t(),h=o(`rue:component:anchor`);return l(m,h),y(C(N,{children:g(()=>{let d=t(),m=f(`div`,d);l(d,m),_(m,`prose prose-sm max-w-none md:prose-base`);let h=f(`h1`,m);l(m,h),l(h,w(`Calendar 日历`));let g=f(`p`,m);l(m,g),_(g,`mt-3 mb-3 text-sm`),l(g,w(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let v=f(`div`,m);l(m,v),_(v,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let b=o(`rue:component:anchor`);l(v,b),y(C(Tt,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),v,b);let x=o(`rue:component:anchor`);l(v,x),y(C(Tt,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),v,x);let S=o(`rue:component:anchor`);l(v,S),y(C(Tt,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),v,S);let T=o(`rue:component:anchor`);l(m,T),s(()=>{let t=C(wt,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:Ze,code:kt});c(()=>y(t,m,T))});let E=o(`rue:component:anchor`);l(m,E),s(()=>{let e=C(wt,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:n,preview:Et,code:At,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});c(()=>y(e,m,E))});let D=o(`rue:component:anchor`);l(m,D),s(()=>{let e=C(wt,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:r,preview:Dt,code:jt,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});c(()=>y(e,m,D))});let O=o(`rue:component:anchor`);l(m,O),s(()=>{let e=C(wt,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:i,preview:Ot,code:Mt,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});c(()=>y(e,m,O))});let k=o(`rue:component:anchor`);l(m,k),s(()=>{let e=C(wt,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:a,preview:ut,code:Nt,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`});c(()=>y(e,m,k))});let A=o(`rue:component:anchor`);l(m,A),s(()=>{let e=C(wt,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:u,preview:dt,code:Pt,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`});c(()=>y(e,m,A))});let j=o(`rue:component:anchor`);l(m,j),s(()=>{let e=C(wt,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:p,preview:ft,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});c(()=>y(e,m,j))});let M=f(`section`,m);l(m,M),_(M,`my-12 space-y-6`);let N=f(`div`,M);l(M,N);let P=f(`h2`,N);l(N,P),_(P,`mb-2`),l(P,w(`API`));let ee=f(`p`,N);l(N,ee),_(ee,`m-0 text-sm text-base-content/70`),l(ee,w(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let te=o(`rue:component:anchor`);l(M,te),s(()=>{let e=C(St,{rows:pt});c(()=>y(e,M,te))});let F=f(`div`,M);l(M,F);let I=f(`h2`,F);l(F,I),_(I,`mb-2`),l(I,w(`附属导出`));let ne=f(`p`,F);l(F,ne),_(ne,`m-0 text-sm text-base-content/70`),l(ne,w(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let re=o(`rue:component:anchor`);return l(M,re),s(()=>{let e=C(Ct,{rows:mt});c(()=>y(e,M,re))}),d})}),m,h),m})};export{Ft as default};
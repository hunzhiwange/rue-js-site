const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BKj4hRh0.js","assets/rolldown-runtime-aKtaBQYM.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-aKtaBQYM.js";import{C as t,Cn as n,Ct as r,E as i,Mt as a,Sn as o,Tt as s,dt as c,ft as l,ht as u,j as d,mt as f,ot as p,pn as m,pt as h,s as g,st as _,tn as v,vn as y,yn as b}from"./context-8lXZvIn-.js";import{i as x,l as S,o as C,r as w,t as T}from"./vapor-runtime-ygJWVcNn.js";import{a as E,n as D}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as O}from"./preload-helper-Czpn1I53.js";import{t as k}from"./Code-DhoWkRkB.js";import{n as A,t as j}from"./src-CCTNpCXV.js";import{t as M}from"./tabs-B1XdBEJF.js";import{r as N}from"./SidebarPlaygroundDesign-BbUFY3mM.js";import{t as P}from"./preview-test-gate-DVT0twjZ.js";var ee=(e,t)=>t?`${e} ${t}`:e,te=()=>({date:new Map,month:new Map,year:new Map}),F=new Map,I=new Map,ne=new Map,re=new Map,ie=new Map,L=()=>typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now(),ae=(e,t)=>({enabled:e,start:e?L():0,threshold:t,cellCount:0,customRenderCount:0,cellRenderCount:0,fullCellRenderCount:0,dateCellRenderCount:0,dateFullCellRenderCount:0,monthCellRenderCount:0,monthFullCellRenderCount:0,slowCells:[]}),R=(e,t)=>{e.enabled&&(e.customRenderCount+=1,t===`cellRender`?e.cellRenderCount+=1:t===`fullCellRender`?e.fullCellRenderCount+=1:t===`dateCellRender`?e.dateCellRenderCount+=1:t===`dateFullCellRender`?e.dateFullCellRenderCount+=1:t===`monthCellRender`?e.monthCellRenderCount+=1:e.monthFullCellRenderCount+=1)},z=(e,t,n,r)=>{if(!e.enabled)return r();R(e,t);let i=L(),a=r(),o=L()-i;return o>=e.threshold&&e.slowCells.push({type:n.type,key:n.key,renderName:t,duration:o,row:n.row,column:n.column}),a},oe=(e,t,n,r)=>{if(!e||!t.enabled)return;let i=L()-t.start,a={component:`Calendar`,mode:n,phase:r,duration:i,cellCount:t.cellCount,customRenderCount:t.customRenderCount,cellRenderCount:t.cellRenderCount,fullCellRenderCount:t.fullCellRenderCount,dateCellRenderCount:t.dateCellRenderCount,dateFullCellRenderCount:t.dateFullCellRenderCount,monthCellRenderCount:t.monthCellRenderCount,monthFullCellRenderCount:t.monthFullCellRenderCount,slow:i>=t.threshold||t.slowCells.length>0,threshold:t.threshold,slowCells:t.slowCells.slice()},o=()=>e(a);typeof queueMicrotask==`function`?queueMicrotask(o):Promise.resolve().then(o)},B=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return t?a+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?a+=` border-base-300/70 bg-base-200/50 text-base-content/35`:r?a+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:a+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},V=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return t?i+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?i+=` border-base-300/70 bg-base-200/50 text-base-content/35`:i+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},H=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},U=e=>`${e??``}`.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),W=(e,t)=>t?` ${e}`:``,G=(e,t)=>t==null||t===!1||typeof t==`function`||typeof t==`object`?``:t===!0?` ${e}`:` ${e}="${U(t)}"`,se=e=>Object.entries(e).map(([e,t])=>e===`children`||e===`class`||e===`className`?``:G(e,t)).join(``),ce=e=>`<div data-rue-calendar-managed-cell="${U(e)}" style="display: contents;"></div>`,le=()=>`<div data-rue-calendar-managed-header="true" style="display: contents;"></div>`,ue=e=>{e&&i(null,e.host,e.anchor)},de=(e,t,n)=>{let r=e.querySelector(`[data-rue-calendar-managed-header="true"]`);if(!n.hasCustomHeader||!r)return ue(t),null;let a=t;if(!a||a.host!==r){ue(a);let e=(r.ownerDocument??document).createComment(`rue-calendar-managed-header`);r.appendChild(e),a={host:r,anchor:e}}return i(n.customHeaderContent==null?null:j(g,{children:n.customHeaderContent}),r,a.anchor),a},fe=(e,t,n,r)=>{let a=r?new Set(r):null,o=a??new Set(n.managedCellContent.keys());for(let r of o){let a=n.managedCellContent.get(r),o=Array.from(e.querySelectorAll(`[data-rue-calendar-managed-cell]`)).find(e=>e.getAttribute(`data-rue-calendar-managed-cell`)===r);if(!a||!o){let e=t.get(r);e&&(i(null,e.host,e.anchor),t.delete(r));continue}let s=t.get(r);if(!s||s.host!==o){s&&i(null,s.host,s.anchor);let e=(o.ownerDocument??document).createComment(`rue-calendar-managed-anchor`);o.appendChild(e),s={host:o,anchor:e},t.set(r,s)}i(a.content==null?null:j(g,{children:a.content}),o,s.anchor)}if(!a)for(let[e,r]of Array.from(t.entries()))n.managedCellContent.has(e)||(i(null,r.host,r.anchor),t.delete(e))},pe=e=>{for(let t of e.values())i(null,t.host,t.anchor);e.clear()},me=e=>{let t=e.fullscreen,n=se(e.rest),r=`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,i=t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,a=e.hasCustomHeader?le():`<div class="${U(r)}">
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
  </div>`},he=e=>{let t=e.fullscreen;return A(`div`,{...e.rest,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":e.currentMode,className:e.rootClassName,children:[e.hasCustomHeader?e.customHeaderContent:A(`div`,{className:`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[A(`div`,{children:[j(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),j(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:e.headerTitle}),j(`div`,{className:`mt-1 text-xs text-base-content/60`,children:e.todayLabel})]}),A(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[A(`div`,{className:`join`,children:[j(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Previous`,disabled:e.previousDisabled,onClick:e.onPrevious,children:j(`span`,{"aria-hidden":`true`,children:`<`})}),j(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:e.todayDisabled,onClick:e.onToday,children:e.todayButtonLabel}),j(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Next`,disabled:e.nextDisabled,onClick:e.onNext,children:j(`span`,{"aria-hidden":`true`,children:`>`})})]}),j(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getFullYear(),onChange:t=>e.onYearChange(Number(t.currentTarget.value)),children:e.yearOptions.map(e=>j(`option`,{value:e.value,disabled:e.disabled,children:e.value},e.value))}),j(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getMonth(),disabled:e.currentMode===`year`,onChange:t=>e.onMonthChange(Number(t.currentTarget.value)),children:e.monthOptions.map(e=>j(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),A(`div`,{className:`join`,children:[j(`button`,{type:`button`,"data-rue-calendar-mode-switch":`month`,className:`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeMonth,children:e.monthButtonLabel}),j(`button`,{type:`button`,"data-rue-calendar-mode-switch":`year`,className:`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeYear,children:e.yearButtonLabel})]})]})]}),A(`div`,{className:t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[A(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[j(`div`,{className:`badge badge-outline badge-sm`,children:e.viewLabel}),e.showWeek&&e.currentMode===`month`?j(`div`,{className:`badge badge-soft badge-sm`,children:e.weekButtonLabel}):null]}),e.currentMode===`month`?A(`div`,{className:`space-y-2`,children:[A(`div`,{className:e.rowClassName,children:[e.showWeek?j(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e.weekButtonLabel}):null,e.weekdayLabels.map(e=>j(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),j(`div`,{role:`grid`,className:`space-y-2`,children:e.dateRows.map(n=>A(`div`,{role:`row`,className:e.rowClassName,children:[e.showWeek?j(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":n.week,children:n.week}):null,n.cells.map(n=>{let r=e.dateCellStates.get(n.key);return j(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":r.inView?`true`:`false`,"aria-pressed":r.selected?`true`:`false`,"aria-current":r.isToday?`date`:void 0,disabled:r.disabled,className:B(t,r.selected,r.disabled,r.inView,r.isToday),onClick:()=>e.onDateSelect(n.date),children:e.hasDateCustomRender?e.managedCellContent.get(n.key)?.content??null:A(`span`,{className:`flex items-start justify-between gap-2`,children:[j(`span`,{className:`text-sm font-semibold ${r.inView?``:`opacity-60`}`,children:r.dayNumber}),r.isToday?j(`span`,{className:`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},n.key)})]},n.key))})]}):j(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:e.monthOptions.map(n=>{let r=q(e.currentValue.getFullYear(),n.value,1),i=X(r,e.currentValue),a=X(r,J(new Date)),o=n.disabled===!0;return j(`button`,{type:`button`,"data-rue-calendar-month":`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:V(t,i,o,a),onClick:()=>e.onMonthSelect(r),children:e.hasMonthCustomRender?e.managedCellContent.get(`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`)?.content??null:A(`span`,{className:`flex items-center justify-between gap-2`,children:[j(`span`,{className:`text-sm font-semibold`,children:n.label}),a?j(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},`${e.currentValue.getFullYear()}-${n.value}`)})})]})]})},ge=e=>typeof e==`number`&&e>=0&&e<=6?e:1,K=e=>new Date(e.getTime()),q=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},J=e=>{let t=K(e);return t.setHours(0,0,0,0),t},_e=e=>q(e.getFullYear(),e.getMonth(),1),ve=e=>q(e.getFullYear(),e.getMonth()+1,0),ye=e=>q(e.getFullYear(),0,1),be=e=>q(e.getFullYear(),11,31),Y=(e,t)=>q(e.getFullYear(),e.getMonth(),e.getDate()+t),xe=e=>e instanceof Date&&!Number.isNaN(e.getTime()),Se=(e,t=new Date)=>{if(xe(e))return K(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(xe(t))return t}return K(t)},Ce=e=>{if(!e)return null;let t=J(Se(e[0])),n=J(Se(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},we=(e,t)=>e.getFullYear()===t.getFullYear(),X=(e,t)=>we(e,t)&&e.getMonth()===t.getMonth(),Te=(e,t)=>X(e,t)&&e.getDate()===t.getDate(),Ee=(e,t)=>{let n=q(e.getFullYear(),e.getMonth()+t,1),r=ve(n).getDate();return q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},De=(e,t)=>{let n=q(e.getFullYear()+t,e.getMonth(),1),r=ve(n).getDate();return q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},Oe=(e,t)=>De(e,t-e.getFullYear()),ke=(e,t)=>Ee(e,t-e.getMonth()),Ae=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,je=(e,t,n)=>{let r=J(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(K(r))},Me=(e,t,n,r)=>{let i=_e(e),a=ve(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):je(o,t,n))return!0;o=Y(o,1)}return!1},Ne=(e,t,n,r)=>{let i=ye(e),a=be(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>q(e.getFullYear(),n,1)).some(e=>r?r(e):Me(e,t,n))},Pe=e=>{let t=J(e),n=q(Y(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=Y(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Fe=(e,t)=>{let n=`${e}:${t}`,r=F.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=q(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(Y(a,(t+n)%7)));return F.set(n,o),o},Ie=e=>{let t=I.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(q(2026,t,1)));return I.set(e,r),r},Le=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Re=(e,t,n,r,i)=>{let a=Ie(e);return Array.from({length:12},(e,o)=>{let s=q(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):Me(s,n,r))}})},ze=(e,t)=>{let n=_e(e),r=Y(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=Y(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:Pe(i),cells:Array.from({length:7},(t,n)=>{let r=Y(i,n);return{key:Ae(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},Be=e=>{let t=ne.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),ne.set(e,t)),t},Ve=e=>{let t=re.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),re.set(e,t)),t},He=e=>{let t=ie.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),ie.set(e,t)),t},Ue=Object.assign(({value:e,defaultValue:r,mode:i,fullscreen:a=!0,showWeek:s,locale:c,weekStartsOn:l,validRange:u,disabledDate:f,dateFullCellRender:p,dateCellRender:h,monthFullCellRender:g,monthCellRender:_,cellRender:v,fullCellRender:y,headerRender:b,className:x,onRenderProfile:S,renderProfileThreshold:C=16,onChange:w,onPanelChange:T,onSelect:E,...D})=>{let O=ae(!!S,C),k=n(()=>({value:m(Se(e??r??new Date)),mode:m(i??`month`)})),M=k.value,N=k.mode,P=o(),F=o(),I=o(),ne=o(null),re=o(null),ie=o(`__none__`),L=e===void 0?M.value:Se(e,M.value),R=i??N.value,B=J(new Date),V=Ce(u),H=!!V||!!f,U=c??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),W=ge(l),G=U.toLowerCase().startsWith(`zh`);P.current||=te().date,F.current||=te().month,I.current||=te().year;let se=V?V.start.getTime():null,ce=V?V.end.getTime():null,le=f?f.toString():`__none__`;(ne.current!==se||re.current!==ce||ie.current!==le)&&(P.current.clear(),F.current.clear(),I.current.clear(),ne.current=se,re.current=ce,ie.current=le);let _e=e=>{if(!H)return!0;let t=Ae(J(e)),n=P.current?.get(t);if(n!==void 0)return n;let r=je(e,V,f);return P.current?.set(t,r),r},ve=e=>{if(!H)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=F.current?.get(t);if(n!==void 0)return n;let r=Me(e,V,f,_e);return F.current?.set(t,r),r},ye=e=>{if(!H)return!0;let t=`${e.getFullYear()}`,n=I.current?.get(t);if(n!==void 0)return n;let r=Ne(e,V,f,ve);return I.current?.set(t,r),r},be=R===`month`,Y=be?Fe(U,W):[],xe=be?ze(L,W):[];O.cellCount=be?xe.reduce((e,t)=>e+t.cells.length,0):12;let Pe=Le(L,V),Ie=Re(U,L,H?V:null,H?f:void 0,H?ve:void 0),Ue=ee(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${a?`rounded-[1.75rem]`:`w-full max-w-[24rem] rounded-[1.5rem]`}`,x),We=s?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,Ge=R===`month`?Be(U).format(L):Ve(U).format(L),Ke=He(U).format(B),qe=G?`今天`:`Today`,Je=G?`月`:`Month`,Ye=G?`年`:`Year`,Xe=G?`周`:`Week`,Ze=G?`今`:`Today`,Qe=R===`month`?G?`月视图`:`Month view`:G?`年视图`:`Year view`,$e=H?R===`month`?!ve(Ee(L,-1)):!ye(De(L,-1)):!1,et=H?R===`month`?!ve(Ee(L,1)):!ye(De(L,1)):!1,tt=H?!_e(B):!1,nt=!!(v||y||h||p),rt=!!(v||y||_||g),Z=(t,n)=>{let r=J(Se(t,L)),i=!Te(r,L),a=R===`month`?!X(r,L):!we(r,L);e===void 0&&(M.value=r),i&&w?.(K(r)),a&&T?.(K(r),R),E?.(K(r),{source:n})},it=e=>{e!==R&&(i===void 0&&(N.value=e),T?.(K(L),e))},at={value:K(L),type:R,yearOptions:Pe,monthOptions:Ie,onChange:e=>Z(e,`customize`),onTypeChange:it,onYearChange:e=>Z(Oe(L,e),`customize`),onMonthChange:e=>Z(ke(L,e),`customize`)},ot=!!b,st=b?b(at):null,Q=n(()=>({host:null,lastSnapshot:null,managedContentMounts:new Map,managedHeaderMount:null,eventsAttached:!1,cleanupVersion:0})),ct=()=>{!Q.host||Q.eventsAttached||(Q.host.addEventListener(`click`,e=>{let t=Q.lastSnapshot,n=e.target?.closest(`[data-rue-calendar-action], [data-rue-calendar-cell], [data-rue-calendar-month]`);if(!t||!n||!Q.host?.contains(n)||n.disabled)return;let r=n.getAttribute(`data-rue-calendar-action`);if(r===`previous`){t.onPrevious();return}if(r===`today`){t.onToday();return}if(r===`next`){t.onNext();return}if(r===`mode-month`){t.onModeMonth();return}if(r===`mode-year`){t.onModeYear();return}let i=n.getAttribute(`data-rue-calendar-cell`);if(i){t.onDateSelect(Se(i,t.currentValue));return}let a=n.getAttribute(`data-rue-calendar-month`);if(a){let[e,n]=a.split(`-`).map(e=>Number(e));Number.isFinite(e)&&Number.isFinite(n)&&t.onMonthSelect(q(e,n-1,1))}}),Q.host.addEventListener(`change`,e=>{let t=Q.lastSnapshot,n=e.target;if(!t||!n||!Q.host?.contains(n))return;let r=n.getAttribute(`data-rue-calendar-select`),i=Number(n.value);Number.isFinite(i)&&(r===`year`?t.onYearChange(i):r===`month`&&t.onMonthChange(i))}),Q.eventsAttached=!0)},lt=new Map;if(be)for(let e of xe)for(let t of e.cells)lt.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:Te(t.date,L),isToday:Te(t.date,B),disabled:!_e(t.date)});let ut=Pe.map(e=>({value:e,disabled:!ye(q(e,L.getMonth(),1))})),dt=new Map;be&&nt?xe.forEach((e,t)=>{e.cells.forEach((n,r)=>{let i=lt.get(n.key),a={type:`date`,key:n.key,row:t,column:r},o=j(`div`,{className:`flex h-full flex-col gap-2`,children:A(`div`,{className:`flex items-start justify-between gap-2`,children:[j(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),i.isToday?j(`span`,{className:`badge badge-xs ${i.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]})}),s=v?z(O,`cellRender`,a,()=>v(K(n.date),{type:`date`,originNode:o,today:K(B),selected:i.selected,isToday:i.isToday,inView:n.inView,disabled:i.disabled,row:t,column:r,week:e.week})):void 0;s==null&&h&&(s=z(O,`dateCellRender`,a,()=>h(K(n.date))));let c=A(`div`,{className:`flex h-full flex-col gap-2`,children:[A(`div`,{className:`flex items-start justify-between gap-2`,children:[j(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),i.isToday?j(`span`,{className:`badge badge-xs ${i.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]}),j(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${i.selected?`opacity-90`:`opacity-75`}`,children:s})]}),l=y?z(O,`fullCellRender`,a,()=>y(K(n.date),{type:`date`,originNode:c,today:K(B),selected:i.selected,isToday:i.isToday,inView:n.inView,disabled:i.disabled,row:t,column:r,week:e.week})):void 0;l==null&&p&&(l=z(O,`dateFullCellRender`,a,()=>p(K(n.date)))),dt.set(n.key,{key:n.key,type:`date`,content:l??c})})}):!be&&rt&&Ie.forEach((e,t)=>{let n=q(L.getFullYear(),e.value,1),r=X(n,L),i=X(n,B),a=e.disabled===!0,o=`${L.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,s={type:`month`,key:o,row:Math.floor(t/4),column:t%4},c=j(`div`,{className:`flex h-full flex-col gap-2`,children:A(`div`,{className:`flex items-center justify-between gap-2`,children:[j(`span`,{className:`text-sm font-semibold`,children:e.label}),i?j(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]})}),l=v?z(O,`cellRender`,s,()=>v(K(n),{type:`month`,originNode:c,today:K(B),selected:r,isToday:i,inView:!0,disabled:a,row:Math.floor(t/4),column:t%4})):void 0;l==null&&_&&(l=z(O,`monthCellRender`,s,()=>_(K(n))));let u=A(`div`,{className:`flex h-full flex-col gap-2`,children:[A(`div`,{className:`flex items-center justify-between gap-2`,children:[j(`span`,{className:`text-sm font-semibold`,children:e.label}),i?j(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Ze}):null]}),j(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${r?`opacity-90`:`opacity-75`}`,children:l})]}),d=y?z(O,`fullCellRender`,s,()=>y(K(n),{type:`month`,originNode:u,today:K(B),selected:r,isToday:i,inView:!0,disabled:a,row:Math.floor(t/4),column:t%4})):void 0;d==null&&g&&(d=z(O,`monthFullCellRender`,s,()=>g(K(n)))),dt.set(o,{key:o,type:`month`,content:d??u})});let ft={rest:D,rootClassName:Ue,fullscreen:a,hasCustomHeader:ot,customHeaderContent:st,currentMode:R,currentValue:K(L),headerTitle:Ge,todayLabel:Ke,previousDisabled:$e,nextDisabled:et,todayDisabled:tt,yearOptions:ut,monthOptions:Ie,weekdayLabels:Y,dateRows:xe,rowClassName:We,showWeek:s,viewLabel:Qe,weekButtonLabel:Xe,todayButtonLabel:qe,monthButtonLabel:Je,yearButtonLabel:Ye,todayMarkerLabel:Ze,dateCellStates:lt,managedCellContent:dt,hasDateCustomRender:nt,hasMonthCustomRender:rt,onPrevious:()=>Z(R===`month`?Ee(L,-1):De(L,-1),`customize`),onToday:()=>Z(B,`customize`),onNext:()=>Z(R===`month`?Ee(L,1):De(L,1),`customize`),onYearChange:e=>Z(Oe(L,e),`customize`),onMonthChange:e=>Z(ke(L,e),`customize`),onModeMonth:()=>it(`month`),onModeYear:()=>it(`year`),onDateSelect:e=>Z(e,`date`),onMonthSelect:e=>Z(e,`month`)};return t(()=>{let e=++Q.cleanupVersion;queueMicrotask(()=>{Q.cleanupVersion===e&&(pe(Q.managedContentMounts),ue(Q.managedHeaderMount),Q.managedHeaderMount=null,Q.host&&Q.host.replaceChildren(),Q.lastSnapshot=null)})}),typeof document>`u`?(oe(S,O,R,`jsx`),he(ft)):d(()=>{Q.cleanupVersion+=1,pe(Q.managedContentMounts),ue(Q.managedHeaderMount),Q.managedHeaderMount=null;let e=document.createElement(`span`);return e.style.display=`contents`,Q.host=e,Q.eventsAttached=!1,Q.lastSnapshot=null,ct(),e.innerHTML=me(ft),fe(e,Q.managedContentMounts,ft),Q.managedHeaderMount=de(e,Q.managedHeaderMount,ft),Q.lastSnapshot=ft,oe(S,O,R,`html`),e})},{Cally:({className:e,children:t,...n})=>j(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:ee(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>j(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>j(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:ee(`pika-single`,t)})}),We=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),Ge=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Ke=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},qe=e=>e?typeof e==`string`?e:Ge(e):`未选择`,Je=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Ye=[Ke(`2026-04-01`),Ke(`2026-05-31`)],Xe=e=>e.getDay()===0||e.getDay()===6||We.has(Ge(e)),Ze=()=>{let{selectedValue:e,selectedSource:t,panelMode:r,panelState:i,handleChange:o,handlePanelChange:l,handleSelect:d}=E(`useSetup:0:0`,()=>n(()=>{let e=E(`ref:1:0`,()=>m(`2026-04-12`)),t=E(`ref:1:1`,()=>m(`date`)),n=E(`ref:1:2`,()=>m(`month`)),r=E(`ref:1:3`,()=>m(Je(Ke(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelMode:n,panelState:r,handleChange:E(`useCallback:1:4`,()=>b(t=>{e.value=Ge(t)},[])),handlePanelChange:E(`useCallback:1:5`,()=>b((e,t)=>{r.value=Je(e,t)},[])),handleSelect:E(`useCallback:1:6`,()=>b((e,n)=>{t.value=n.source},[]))}}));return S(n=>{let p=h(`div`,n);s(p,`space-y-4`);let m=c(`rue:component:anchor`);_(p,m),v(()=>{let t=T(Ue,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:r.value,showWeek:!0,validRange:Ye,disabledDate:Xe,onChange:o,onPanelChange:(e,t)=>{r.value=t,l(e,t)},onSelect:d});y(()=>C(t,p,m))});let g=h(`div`,p);_(p,g),s(g,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let b=h(`div`,g);_(g,b),s(b,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let x=h(`div`,b);_(b,x),s(x,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),_(x,f(`当前值`));let S=h(`div`,b);_(b,S),s(S,`mt-1 text-sm font-medium`);let w=c(`rue:slot:anchor`);_(S,w),v(()=>{let t=qe(e.value);y(()=>C(t,S,w))});let E=h(`div`,g);_(g,E),s(E,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let D=h(`div`,E);_(E,D),s(D,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),_(D,f(`选择来源`));let O=h(`div`,E);_(E,O),s(O,`mt-1 text-sm font-medium`);let k=u(O);_(O,k),v(()=>{a(k,t.value)});let A=h(`div`,g);_(g,A),s(A,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let j=h(`div`,A);_(A,j),s(j,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),_(j,f(`面板状态`));let M=h(`div`,A);_(A,M),s(M,`mt-1 text-sm font-medium`);let N=u(M);_(M,N),v(()=>{a(N,i.value)});let P=h(`p`,p);return _(p,P),s(P,`m-0 text-xs text-base-content/70`),_(P,f(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),p})},Qe=null,$e=null,et=Ue.Cally,tt=Ue.Month,nt=Ue.PikaSingle,rt=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,Z=async()=>{typeof window>`u`||typeof customElements>`u`||(Qe||=(async()=>{let e=rt();customElements.get(`calendar-date`)||await(e?.cally?e.cally():O(()=>import(`./cally-39lXo63a.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await Qe)},it=async()=>{if(!$e){let t=rt();$e=(t?.pikaday?t.pikaday():O(()=>import(`./pikaday-BKj4hRh0.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return $e},at=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ot=(e,t=`未选择`)=>e||t,st=e=>e||`Pick a date`,Q=e=>S(t=>{let n=h(`div`,t);s(n,`flex flex-wrap gap-2 text-xs`);let r=h(`span`,n);_(n,r),v(()=>{s(r,`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`)});let i=c(`rue:slot:anchor`);_(r,i),v(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;y(()=>C(t,r,i))});let a=c(`rue:slot:anchor`);return _(n,a),v(()=>{let t=e.error?S(()=>{let t=l(),n=h(`span`,t);_(t,n),s(n,`badge badge-error badge-soft`);let r=c(`rue:slot:anchor`);return _(n,r),v(()=>{let t=e.error;y(()=>C(t,n,r))}),t}):``;y(()=>C(t,n,a))}),n}),ct=()=>S(e=>{let t=h(`svg`,e);r(t,`aria-label`,`Previous`),s(t,`fill-current size-4`),r(t,`slot`,`previous`),r(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`viewBox`,`0 0 24 24`);let n=h(`path`,t);return _(t,n),r(n,`fill`,`currentColor`),r(n,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),t}),lt=()=>S(e=>{let t=h(`svg`,e);r(t,`aria-label`,`Next`),s(t,`fill-current size-4`),r(t,`slot`,`next`),r(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`viewBox`,`0 0 24 24`);let n=h(`path`,t);return _(t,n),r(n,`fill`,`currentColor`),r(n,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),t}),ut=()=>{let{calendarRef:e,cleanupRef:t,selectedValue:r,ready:i,error:a}=E(`useSetup:0:0`,()=>n(()=>{let e=E(`useRef:1:0`,()=>o()),t=E(`useRef:1:1`,()=>o(()=>{})),n=E(`ref:1:2`,()=>m(`2026-04-12`)),r=E(`ref:1:3`,()=>m(!1)),i=E(`ref:1:4`,()=>m(``));return w(()=>{let a=!0;Z().then(()=>{if(!a)return;r.value=!0;let i=e.current;if(!i)return;i.value=n.value;let o=()=>{n.value=i.value||``};i.addEventListener(`change`,o),t.current=()=>i.removeEventListener(`change`,o)}).catch(()=>{a&&(i.value=`Cally 加载失败`)}),x(()=>{a=!1})}),x(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:r,error:i}}));return S(t=>{let n=h(`div`,t);s(n,`space-y-3`);let o=c(`rue:component:anchor`);_(n,o);let u=S(()=>{let e=l(),t=c(`rue:component:anchor`);_(e,t),C(T(ct,{}),e,t);let n=c(`rue:component:anchor`);_(e,n),C(T(lt,{}),e,n);let r=c(`rue:component:anchor`);return _(e,r),C(T(tt,{}),e,r),e});v(()=>{let t=T(et,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:u});y(()=>C(t,n,o))});let d=c(`rue:component:anchor`);_(n,d),v(()=>{let e=T(Q,{ready:i.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:a.value});y(()=>C(e,n,d))});let p=h(`p`,n);_(n,p),s(p,`m-0 text-xs text-base-content/70`),_(p,f(`当前选择：`));let m=c(`rue:slot:anchor`);return _(p,m),v(()=>{let e=ot(r.value);y(()=>C(e,p,m))}),_(p,f(`。这条示例 原样保持，用于展示原生 web component 接口。`)),n})},dt=()=>{let{calendarRef:e,cleanupRef:t,selectedValue:i,open:a,ready:u,error:d}=E(`useSetup:0:0:dup1`,()=>n(()=>{let e=E(`useRef:1:5`,()=>o()),t=E(`useRef:1:6`,()=>o(()=>{})),n=E(`ref:1:7`,()=>m(``)),r=E(`ref:1:8`,()=>m(!1)),i=E(`ref:1:9`,()=>m(!1)),a=E(`ref:1:10`,()=>m(``));return w(()=>{let o=!0;Z().then(()=>{if(!o)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let s=()=>{n.value=a.value||``,r.value=!1};a.addEventListener(`change`,s),t.current=()=>a.removeEventListener(`change`,s)}).catch(()=>{o&&(a.value=`Cally 加载失败`)}),x(()=>{o=!1})}),x(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:r,ready:i,error:a}}));return S(t=>{let n=h(`div`,t);s(n,`space-y-3`);let o=h(`div`,n);_(n,o),s(o,`flex flex-wrap items-center gap-3`);let m=h(`button`,o);_(o,m),r(m,`type`,`button`),r(m,`data-testid`,`cally-picker-button`),s(m,`input input-bordered w-fit cursor-pointer`),p(m,`click`,()=>{a.value=!a.value});let g=c(`rue:slot:anchor`);_(m,g),v(()=>{let e=st(i.value);y(()=>C(e,m,g))});let b=h(`span`,o);_(o,b),s(b,`text-xs text-base-content/70`),_(b,f(`当前选择：`));let x=c(`rue:slot:anchor`);_(b,x),v(()=>{let e=ot(i.value);y(()=>C(e,b,x))});let w=h(`div`,n);_(n,w),r(w,`data-testid`,`cally-picker-panel`),v(()=>{s(w,`inline-block rounded-box bg-base-100 p-3 shadow-lg ${a.value?``:`hidden`}`)});let E=c(`rue:component:anchor`);_(w,E);let D=S(()=>{let e=l(),t=c(`rue:component:anchor`);_(e,t),C(T(ct,{}),e,t);let n=c(`rue:component:anchor`);_(e,n),C(T(lt,{}),e,n);let r=c(`rue:component:anchor`);return _(e,r),C(T(tt,{}),e,r),e});v(()=>{let t=T(et,{ref:e,"data-testid":`cally-picker-calendar`,children:D});y(()=>C(t,w,E))});let O=c(`rue:component:anchor`);_(n,O),v(()=>{let e=T(Q,{ready:u.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:d.value});y(()=>C(e,n,O))});let k=h(`p`,n);return _(n,k),s(k,`m-0 text-xs text-base-content/70`),_(k,f(`点击按钮展开面板，选中日期后会自动回填并收起。这条基础示例 同样完整保持。`)),n})},ft=()=>{let{inputRef:e,instanceRef:t,selectedValue:r,ready:i,error:a}=E(`useSetup:0:0:dup2`,()=>n(()=>{let e=E(`useRef:1:11`,()=>o()),t=E(`useRef:1:12`,()=>o()),n=E(`ref:1:13`,()=>m(``)),r=E(`ref:1:14`,()=>m(!1)),i=E(`ref:1:15`,()=>m(``));return w(()=>{let a=!0;it().then(i=>{if(!a)return;let o=e.current;o&&(t.current=new i({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>at(e),onSelect:e=>{n.value=o.value||at(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,r.value=!0)}).catch(()=>{a&&(i.value=`Pikaday 加载失败`)}),x(()=>{a=!1})}),x(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:r,error:i}}));return S(t=>{let n=h(`div`,t);s(n,`space-y-3`);let o=c(`rue:component:anchor`);_(n,o),v(()=>{let t=T(nt,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});y(()=>C(t,n,o))});let l=c(`rue:component:anchor`);_(n,l),v(()=>{let e=T(Q,{ready:i.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:a.value});y(()=>C(e,n,l))});let u=h(`p`,n);_(n,u),s(u,`m-0 text-xs text-base-content/70`),_(u,f(`当前选择：`));let d=c(`rue:slot:anchor`);_(u,d),v(()=>{let e=ot(r.value);y(()=>C(e,u,d))});let p=h(`p`,n);return _(n,p),s(p,`m-0 text-xs text-base-content/70`),_(p,f(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),n})},pt=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`onRenderProfile`,description:`渲染诊断回调，报告当前更新阶段、耗时、cellRender 调用次数与慢单元格`,type:`(event: CalendarRenderProfileEvent) => void`,defaultValue:`-`},{prop:`renderProfileThreshold`,description:`渲染诊断的慢调用阈值，超过后会在 onRenderProfile 中标记 slow`,type:`number`,defaultValue:`16`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],mt=[{name:`Calendar.Cally`,description:`展示基础 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],ht={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},gt={2:12,3:28,4:18,8:43},_t={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},vt={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},yt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,bt=e=>e?typeof e==`string`?e:yt(e):`未选择`,xt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,$=e=>S(t=>{let n=h(`div`,t);s(n,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let r=h(`span`,n);_(n,r),s(r,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let i=c(`rue:slot:anchor`);_(r,i),v(()=>{let t=e.label;y(()=>C(t,r,i))});let o=h(`span`,n);_(n,o),s(o,`text-sm font-medium`);let l=u(o);return _(o,l),v(()=>{a(l,e.value)}),n}),St=e=>S(t=>{let n=h(`div`,t);s(n,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=h(`table`,n);_(n,i),s(i,`table table-zebra`);let a=h(`thead`,i);_(i,a);let o=h(`tr`,a);_(a,o);let u=h(`th`,o);_(o,u),_(u,f(`属性`));let d=h(`th`,o);_(o,d),_(d,f(`说明`));let p=h(`th`,o);_(o,p),_(p,f(`类型`));let m=h(`th`,o);_(o,m),_(m,f(`默认值`));let g=h(`tbody`,i);_(i,g);let b=c(`rue:list:start`),x=c(`rue:list:end`);_(g,b),_(g,x);let w=new Map;return v(()=>{w=D({items:e.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:g,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,t,n,i,a)=>{C(S(()=>{let t=l(),n=h(`tr`,t);_(t,n),v(()=>{r(n,`key`,String(e.prop))});let i=h(`td`,n);_(n,i);let a=h(`code`,i);_(i,a);let o=c(`rue:slot:anchor`);_(a,o),v(()=>{let t=e.prop;y(()=>C(t,a,o))});let s=h(`td`,n);_(n,s);let u=c(`rue:slot:anchor`);_(s,u),v(()=>{let t=e.description;y(()=>C(t,s,u))});let d=h(`td`,n);_(n,d);let f=h(`code`,d);_(d,f);let p=c(`rue:slot:anchor`);_(f,p),v(()=>{let t=e.type;y(()=>C(t,f,p))});let m=h(`td`,n);_(n,m);let g=h(`code`,m);_(m,g);let b=c(`rue:slot:anchor`);return _(g,b),v(()=>{let t=e.defaultValue;y(()=>C(t,g,b))}),t}),t,n)}})}),n}),Ct=e=>S(t=>{let n=h(`div`,t);s(n,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=h(`table`,n);_(n,i),s(i,`table table-zebra`);let a=h(`thead`,i);_(i,a);let o=h(`tr`,a);_(a,o);let u=h(`th`,o);_(o,u),_(u,f(`导出`));let d=h(`th`,o);_(o,d),_(d,f(`说明`));let p=h(`tbody`,i);_(i,p);let m=c(`rue:list:start`),g=c(`rue:list:end`);_(p,m),_(p,g);let b=new Map;return v(()=>{b=D({items:e.rows||[],getKey:(e,t)=>e.name,elements:b,parent:p,before:g,singleRoot:!0,trackIndex:!1,start:m,renderItem:(e,t,n,i,a)=>{C(S(()=>{let t=l(),n=h(`tr`,t);_(t,n),v(()=>{r(n,`key`,String(e.name))});let i=h(`td`,n);_(n,i);let a=h(`code`,i);_(i,a);let o=c(`rue:slot:anchor`);_(a,o),v(()=>{let t=e.name;y(()=>C(t,a,o))});let s=h(`td`,n);_(n,s);let u=c(`rue:slot:anchor`);return _(s,u),v(()=>{let t=e.description;y(()=>C(t,s,u))}),t}),t,n)}})}),n}),wt=e=>{let{shouldLoadPreview:t,preloadTimer:r}=E(`useSetup:0:0`,()=>n(()=>{let t=E(`ref:1:0`,()=>m(e.previewLoadDelay==null)),n=E(`useRef:1:1`,()=>o(null));return w(()=>{e.previewLoadDelay==null||t.value||(n.current=window.setTimeout(()=>{t.value=!0,n.current=null},e.previewLoadDelay))}),x(()=>{n.current!=null&&(window.clearTimeout(n.current),n.current=null)}),{shouldLoadPreview:t,preloadTimer:n}}));return S(n=>{let r=h(`div`,n);s(r,`component-preview not-prose my-6 text-base-content lg:my-12`);let i=h(`div`,r);_(r,i),s(i,`flex flex-wrap items-start justify-between gap-3`);let a=h(`div`,i);_(i,a);let o=h(`h2`,a);_(a,o),s(o,`component-preview-title mt-2 mb-1 text-lg font-semibold`),_(o,f(`# `));let u=c(`rue:slot:anchor`);_(o,u),v(()=>{let t=e.title;y(()=>C(t,o,u))});let d=c(`rue:slot:anchor`);_(a,d),v(()=>{let t=e.summary?S(()=>{let t=l(),n=h(`p`,t);_(t,n),s(n,`m-0 text-sm opacity-70`);let r=c(`rue:slot:anchor`);return _(n,r),v(()=>{let t=e.summary;y(()=>C(t,n,r))}),t}):``;y(()=>C(t,a,d))});let p=c(`rue:component:anchor`);_(r,p),v(()=>{let t=T(M,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});y(()=>C(t,r,p))});let m=c(`rue:slot:anchor`);return _(r,m),v(()=>{let n=e.tab.value===`preview`?t.value?P(e.title,e.preview):S(()=>{let t=l(),n=h(`div`,t);_(t,n),s(n,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let r=h(`div`,n);_(n,r),s(r,`badge badge-outline badge-sm`),_(r,f(`Preview`));let i=h(`p`,n);_(n,i),s(i,`mb-0 mt-3 text-sm text-base-content/72`);let a=c(`rue:slot:anchor`);return _(i,a),v(()=>{let t=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;y(()=>C(t,i,a))}),t}):S(()=>{let t=l(),n=c(`rue:component:anchor`);return _(t,n),v(()=>{let r=T(k,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});y(()=>C(r,t,n))}),t});y(()=>C(n,r,m))}),r})},Tt=e=>S(t=>{let n=h(`div`,t);s(n,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let r=h(`div`,n);_(n,r),s(r,`badge badge-outline badge-sm`);let i=c(`rue:slot:anchor`);_(r,i),v(()=>{let t=e.badge;y(()=>C(t,r,i))});let a=h(`h3`,n);_(n,a),s(a,`mt-3 mb-1 text-base font-semibold`);let o=c(`rue:slot:anchor`);_(a,o),v(()=>{let t=e.title;y(()=>C(t,a,o))});let l=h(`p`,n);_(n,l),s(l,`m-0 text-sm text-base-content/70`);let u=c(`rue:slot:anchor`);return _(l,u),v(()=>{let t=e.detail;y(()=>C(t,l,u))}),n}),Et=()=>{let{selectedValue:e,panelMode:t}=E(`useSetup:0:0:dup1`,()=>n(()=>({selectedValue:E(`ref:1:2`,()=>m(`2026-04-15`)),panelMode:E(`ref:1:3`,()=>m(`month`))})));return S(n=>{let r=h(`div`,n);s(r,`space-y-4`);let i=c(`rue:component:anchor`);_(r,i),v(()=>{let n=T(Ue,{"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,onChange:t=>{e.value=yt(t)},onPanelChange:(e,n)=>{t.value=n},cellRender:(e,t)=>{if(t.type===`month`){let t=gt[e.getMonth()];return t?A(`div`,{className:`space-y-1`,children:[j(`div`,{className:`text-lg font-semibold leading-none`,children:t}),j(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=ht[yt(e)]??[];return n.length?A(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>j(`div`,{className:`badge badge-soft badge-xs ${vt[e.tone]}`,children:e.label},e.label)),n.length>2?A(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});y(()=>C(n,r,i))});let a=h(`div`,r);_(r,a),s(a,`grid gap-3 md:grid-cols-3`);let o=c(`rue:component:anchor`);_(a,o),v(()=>{let t=T($,{label:`当前日期`,value:bt(e.value)});y(()=>C(t,a,o))});let l=c(`rue:component:anchor`);_(a,l),v(()=>{let e=T($,{label:`4 月 15 日事件`,value:`${ht[`2026-04-15`]?.length??0} 条`});y(()=>C(e,a,l))});let u=c(`rue:component:anchor`);return _(a,u),v(()=>{let e=T($,{label:`9 月 backlog`,value:`${gt[8]} 项`});y(()=>C(e,a,u))}),r})},Dt=()=>{let{selectedValue:e,panelMode:t}=E(`useSetup:0:0:dup2`,()=>n(()=>({selectedValue:E(`ref:1:4`,()=>m(`2026-09-18`)),panelMode:E(`ref:1:5`,()=>m(`month`))})));return S(n=>{let r=h(`div`,n);s(r,`space-y-4`);let i=h(`div`,r);_(r,i),s(i,`grid gap-4`);let a=h(`div`,i);_(i,a),s(a,`max-w-full overflow-x-auto`);let o=c(`rue:component:anchor`);_(a,o),v(()=>{let n=T(Ue,{"data-testid":`card-calendar`,className:`w-[34rem] max-w-none`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:t.value,onChange:t=>{e.value=yt(t)},onPanelChange:(e,n)=>{t.value=n},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=_t[yt(e)];return n==null?t.originNode:A(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[A(`div`,{className:`flex items-center justify-between gap-2`,children:[j(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),A(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),A(`div`,{className:`space-y-1`,children:[j(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:j(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),j(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});y(()=>C(n,a,o))});let l=h(`div`,i);_(i,l),s(l,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let u=h(`div`,l);_(l,u),s(u,`badge badge-secondary badge-soft`),_(u,f(`Card Mode`));let d=h(`h3`,l);_(l,d),s(d,`mt-3 mb-1 text-base font-semibold`),_(d,f(`容量面板`));let p=h(`p`,l);_(l,p),s(p,`m-0 text-sm text-base-content/70`),_(p,f(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let m=h(`div`,l);_(l,m),s(m,`mt-4 space-y-3`);let g=c(`rue:component:anchor`);_(m,g),v(()=>{let t=T($,{label:`当前日期`,value:bt(e.value)});y(()=>C(t,m,g))});let b=c(`rue:component:anchor`);_(m,b),C(T($,{label:`高负载日`,value:`9/18 · 92%`}),m,b);let x=c(`rue:component:anchor`);return _(m,x),C(T($,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),m,x),r})},Ot=()=>{let{selectedValue:e,panelMode:t,actionSource:r}=E(`useSetup:0:0:dup3`,()=>n(()=>({selectedValue:E(`ref:1:6`,()=>m(`2026-07-04`)),panelMode:E(`ref:1:7`,()=>m(`month`)),actionSource:E(`ref:1:8`,()=>m(`date`))})));return S(n=>{let i=h(`div`,n);s(i,`space-y-4`);let a=c(`rue:component:anchor`);_(i,a),v(()=>{let n=T(Ue,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>A(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[A(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[A(`div`,{children:[j(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),j(`div`,{className:`mt-1 text-base font-semibold`,children:xt(e,t)})]}),A(`div`,{className:`join`,children:[j(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),j(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),A(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[j(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>j(`option`,{value:e,children:e},e))}),j(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>j(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=yt(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{r.value=t.source}});y(()=>C(n,i,a))});let o=h(`div`,i);_(i,o),s(o,`grid gap-3 md:grid-cols-3`);let l=c(`rue:component:anchor`);_(o,l),v(()=>{let t=T($,{label:`当前日期`,value:bt(e.value)});y(()=>C(t,o,l))});let u=c(`rue:component:anchor`);_(o,u),v(()=>{let e=T($,{label:`当前模式`,value:t.value});y(()=>C(e,o,u))});let d=c(`rue:component:anchor`);return _(o,d),v(()=>{let e=T($,{label:`最近来源`,value:r.value});y(()=>C(e,o,d))}),i})},kt=`import { ref, useCallback } from '@rue-js/rue'
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
}`,Ft=()=>{let{tabBasic:e,tabNotice:t,tabCard:r,tabHeader:i,tabCallyCalendar:a,tabCallyDatePicker:o,tabPikaday:u}=E(`useSetup:0:0:dup4`,()=>n(()=>({tabBasic:E(`ref:1:9`,()=>m(`preview`)),tabNotice:E(`ref:1:10`,()=>m(`preview`)),tabCard:E(`ref:1:11`,()=>m(`preview`)),tabHeader:E(`ref:1:12`,()=>m(`preview`)),tabCallyCalendar:E(`ref:1:13`,()=>m(`preview`)),tabCallyDatePicker:E(`ref:1:14`,()=>m(`preview`)),tabPikaday:E(`ref:1:15`,()=>m(`preview`))})));return S(n=>{let d=l(),p=c(`rue:component:anchor`);return _(d,p),C(T(N,{children:S(()=>{let n=l(),d=h(`div`,n);_(n,d),s(d,`prose prose-sm max-w-none md:prose-base`);let p=h(`h1`,d);_(d,p),_(p,f(`Calendar 日历`));let m=h(`p`,d);_(d,m),s(m,`mt-3 mb-3 text-sm`),_(m,f(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条基础接入链路。`));let g=h(`div`,d);_(d,g),s(g,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let b=c(`rue:component:anchor`);_(g,b),C(T(Tt,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),g,b);let x=c(`rue:component:anchor`);_(g,x),C(T(Tt,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格组织为事项列表、容量卡或数据看板。`}),g,x);let S=c(`rue:component:anchor`);_(g,S),C(T(Tt,{badge:`Composition Ready`,title:`基础场景完整覆盖`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，基础接入方式不需要拆。`}),g,S);let w=c(`rue:component:anchor`);_(d,w),v(()=>{let t=T(wt,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:Ze,code:kt});y(()=>C(t,d,w))});let E=c(`rue:component:anchor`);_(d,E),v(()=>{let e=T(wt,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:t,preview:Et,code:At,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});y(()=>C(e,d,E))});let D=c(`rue:component:anchor`);_(d,D),v(()=>{let e=T(wt,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:r,preview:Dt,code:jt,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});y(()=>C(e,d,D))});let O=c(`rue:component:anchor`);_(d,O),v(()=>{let e=T(wt,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:i,preview:Ot,code:Mt,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});y(()=>C(e,d,O))});let k=c(`rue:component:anchor`);_(d,k),v(()=>{let e=T(wt,{title:`Cally calendar example`,summary:`基础的 Cally web component 日历壳层仍然原样可用。`,tab:a,preview:ut,code:Nt,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`});y(()=>C(e,d,k))});let A=c(`rue:component:anchor`);_(d,A),v(()=>{let e=T(wt,{title:`Cally date picker example`,summary:`基础的日期输入弹层示例 展示，只把交互说明和布局重新编排。`,tab:o,preview:dt,code:Pt,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`});y(()=>C(e,d,A))});let j=c(`rue:component:anchor`);_(d,j),v(()=>{let e=T(wt,{title:`Pikaday input example`,summary:`展示基础 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:u,preview:ft,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});y(()=>C(e,d,j))});let M=h(`section`,d);_(d,M),s(M,`my-12 space-y-6`);let N=h(`div`,M);_(M,N);let P=h(`h2`,N);_(N,P),s(P,`mb-2`),_(P,f(`API`));let ee=h(`p`,N);_(N,ee),s(ee,`m-0 text-sm text-base-content/70`),_(ee,f(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时使用 Rue 自己的视觉和基础导出方式。`));let te=c(`rue:component:anchor`);_(M,te),v(()=>{let e=T(St,{rows:pt});y(()=>C(e,M,te))});let F=h(`div`,M);_(M,F);let I=h(`h2`,F);_(F,I),s(I,`mb-2`),_(I,f(`附属导出`));let ne=h(`p`,F);_(F,ne),s(ne,`m-0 text-sm text-base-content/70`),_(ne,f(`基础的 Cally 与 Pikaday 接口没有删除，而是并列保持为复合导出，便于按需接入。`));let re=c(`rue:component:anchor`);return _(M,re),v(()=>{let e=T(Ct,{rows:mt});y(()=>C(e,M,re))}),n})}),d,p),d})};export{Ft as default};
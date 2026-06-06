const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BR-EJEbz.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{$ as t,Gt as n,Ht as r,J as i,Kt as a,Lt as o,Q as s,Vt as c,Y as l,Yt as u,Z as d,a as f,ct as p,et as m,i as h,j as g,l as _,mt as v,ot as y,s as b,t as x,tt as S}from"./vapor-runtime-DHPuOjqh.js";import{a as C,n as w}from"./vapor-helpers-vapor-CJFAWine.js";import{a as T,i as E}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as D}from"./preload-helper-CM8YhcCa.js";import{t as O}from"./Code-Ds9lKLk6.js";import{t as k}from"./tabs-DSy0eY-V.js";import{n as A}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as j}from"./preview-test-gate-CxeqnU1g.js";var M=(e,t)=>t?`${e} ${t}`:e,N=()=>({date:new Map,month:new Map,year:new Map}),P=new Map,F=new Map,ee=new Map,I=new Map,L=new Map,R=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return t?a+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?a+=` border-base-300/70 bg-base-200/50 text-base-content/35`:r?a+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:a+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},z=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return t?i+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?i+=` border-base-300/70 bg-base-200/50 text-base-content/35`:i+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},B=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},te=(e,t,n)=>`${e.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${t.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${Array.from(n.values()).map(e=>`${e.key}:${e.inView?`1`:`0`}:${e.isToday?`1`:`0`}:${e.disabled?`1`:`0`}`).join(`,`)}`,ne=(e,t)=>e.currentMode===`month`&&t.currentMode===`month`&&e.patchKey===t.patchKey&&e.selectedKey!==t.selectedKey,re=(e,t,n)=>{let r=new Set([t.selectedKey,n.selectedKey]);for(let t of r){let r=n.dateCellStates.get(t);if(!r)continue;let i=e.querySelector(`[data-rue-calendar-cell="${t}"]`);i&&(i.disabled=r.disabled,i.className=R(!n.rootClassName.includes(`max-w-[24rem]`),r.selected,r.disabled,r.inView,r.isToday),i.setAttribute(`aria-pressed`,r.selected?`true`:`false`),r.isToday?i.setAttribute(`aria-current`,`date`):i.removeAttribute(`aria-current`),i.innerHTML=B(r,n.todayMarkerLabel))}},V=e=>`${e??``}`.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),H=(e,t)=>t?` ${e}`:``,U=(e,t)=>t==null||t===!1||typeof t==`function`||typeof t==`object`?``:t===!0?` ${e}`:` ${e}="${V(t)}"`,ie=e=>Object.entries(e).map(([e,t])=>e===`children`||e===`class`||e===`className`?``:U(e,t)).join(``),ae=e=>{let t=!e.rootClassName.includes(`max-w-[24rem]`),n=ie(e.rest),r=`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,i=t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,a=e.showWeek?`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${V(e.weekButtonLabel)}</div>`:``,o=e.weekdayLabels.map(e=>`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${V(e)}</div>`).join(``),s=e.currentMode===`month`?`<div class="space-y-2">
          <div class="${V(e.rowClassName)}">${a}${o}</div>
          <div role="grid" class="space-y-2">
            ${e.dateRows.map(n=>`<div role="row" class="${V(e.rowClassName)}">
                    ${e.showWeek?`<div class="flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60" data-rue-calendar-week="${n.week}">${n.week}</div>`:``}
                    ${n.cells.map(n=>{let r=e.dateCellStates.get(n.key),i=r.isToday?` aria-current="date"`:``;return`<button
                          type="button"
                          role="gridcell"
                          data-rue-calendar-cell="${V(n.key)}"
                          data-rue-calendar-in-view="${r.inView?`true`:`false`}"
                          aria-pressed="${r.selected?`true`:`false`}"${i}
                          ${H(`disabled`,r.disabled)}
                          class="${V(R(t,r.selected,r.disabled,r.inView,r.isToday))}"
                        >${B(r,e.todayMarkerLabel)}</button>`}).join(``)}
                  </div>`).join(``)}
          </div>
        </div>`:`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          ${e.monthOptions.map(n=>{let r=G(e.currentValue.getFullYear(),n.value,1),i=J(r,e.currentValue),a=J(r,K(new Date)),o=n.disabled===!0;return`<button
                type="button"
                data-rue-calendar-month="${`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`}"
                aria-pressed="${i?`true`:`false`}"
                ${H(`disabled`,o)}
                class="${V(z(t,i,o,a))}"
              >
                <span class="flex items-center justify-between gap-2">
                  <span class="text-sm font-semibold">${V(n.label)}</span>
                  ${a?`<span class="badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${V(e.todayMarkerLabel)}</span>`:``}
                </span>
              </button>`}).join(``)}
        </div>`;return`<div${n} data-rue-calendar-root="true" data-rue-calendar-mode="${e.currentMode}" class="${V(e.rootClassName)}">
    <div class="${V(r)}">
      <div>
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55">Rue Calendar</div>
        <div class="mt-1 text-xl font-semibold leading-tight">${V(e.headerTitle)}</div>
        <div class="mt-1 text-xs text-base-content/60">${V(e.todayLabel)}</div>
      </div>
      <div class="flex flex-wrap items-center gap-2 lg:justify-end">
        <div class="join">
          <button type="button" class="btn btn-sm join-item" aria-label="Previous" data-rue-calendar-action="previous"${H(`disabled`,e.previousDisabled)}><span aria-hidden="true">&lt;</span></button>
          <button type="button" class="btn btn-sm join-item btn-ghost" data-rue-calendar-action="today"${H(`disabled`,e.todayDisabled)}>${V(e.todayButtonLabel)}</button>
          <button type="button" class="btn btn-sm join-item" aria-label="Next" data-rue-calendar-action="next"${H(`disabled`,e.nextDisabled)}><span aria-hidden="true">&gt;</span></button>
        </div>
        <select class="select select-sm min-w-24" data-rue-calendar-select="year">
          ${e.yearOptions.map(t=>`<option value="${t.value}"${H(`selected`,t.value===e.currentValue.getFullYear())}${H(`disabled`,t.disabled)}>${t.value}</option>`).join(``)}
        </select>
        <select class="select select-sm min-w-24" data-rue-calendar-select="month"${H(`disabled`,e.currentMode===`year`)}>
          ${e.monthOptions.map(t=>`<option value="${t.value}"${H(`selected`,t.value===e.currentValue.getMonth())}${H(`disabled`,t.disabled)}>${V(t.label)}</option>`).join(``)}
        </select>
        <div class="join">
          <button type="button" data-rue-calendar-mode-switch="month" data-rue-calendar-action="mode-month" class="btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}">${V(e.monthButtonLabel)}</button>
          <button type="button" data-rue-calendar-mode-switch="year" data-rue-calendar-action="mode-year" class="btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}">${V(e.yearButtonLabel)}</button>
        </div>
      </div>
    </div>
    <div class="${V(i)}">
      <div class="flex items-center justify-between gap-3 px-1">
        <div class="badge badge-outline badge-sm">${V(e.viewLabel)}</div>
        ${e.showWeek&&e.currentMode===`month`?`<div class="badge badge-soft badge-sm">${V(e.weekButtonLabel)}</div>`:``}
      </div>
      ${s}
    </div>
  </div>`},oe=e=>{let t=!e.rootClassName.includes(`max-w-[24rem]`);return T(`div`,{...e.rest,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":e.currentMode,className:e.rootClassName,children:[T(`div`,{className:`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[T(`div`,{children:[E(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),E(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:e.headerTitle}),E(`div`,{className:`mt-1 text-xs text-base-content/60`,children:e.todayLabel})]}),T(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Previous`,disabled:e.previousDisabled,onClick:e.onPrevious,children:E(`span`,{"aria-hidden":`true`,children:`<`})}),E(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:e.todayDisabled,onClick:e.onToday,children:e.todayButtonLabel}),E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Next`,disabled:e.nextDisabled,onClick:e.onNext,children:E(`span`,{"aria-hidden":`true`,children:`>`})})]}),E(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getFullYear(),onChange:t=>e.onYearChange(Number(t.currentTarget.value)),children:e.yearOptions.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.value},e.value))}),E(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getMonth(),disabled:e.currentMode===`year`,onChange:t=>e.onMonthChange(Number(t.currentTarget.value)),children:e.monthOptions.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),T(`div`,{className:`join`,children:[E(`button`,{type:`button`,"data-rue-calendar-mode-switch":`month`,className:`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeMonth,children:e.monthButtonLabel}),E(`button`,{type:`button`,"data-rue-calendar-mode-switch":`year`,className:`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeYear,children:e.yearButtonLabel})]})]})]}),T(`div`,{className:t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[T(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[E(`div`,{className:`badge badge-outline badge-sm`,children:e.viewLabel}),e.showWeek&&e.currentMode===`month`?E(`div`,{className:`badge badge-soft badge-sm`,children:e.weekButtonLabel}):null]}),e.currentMode===`month`?T(`div`,{className:`space-y-2`,children:[T(`div`,{className:e.rowClassName,children:[e.showWeek?E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e.weekButtonLabel}):null,e.weekdayLabels.map(e=>E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),E(`div`,{role:`grid`,className:`space-y-2`,children:e.dateRows.map(n=>T(`div`,{role:`row`,className:e.rowClassName,children:[e.showWeek?E(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":n.week,children:n.week}):null,n.cells.map(n=>{let r=e.dateCellStates.get(n.key);return E(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":r.inView?`true`:`false`,"aria-pressed":r.selected?`true`:`false`,"aria-current":r.isToday?`date`:void 0,disabled:r.disabled,className:R(t,r.selected,r.disabled,r.inView,r.isToday),onClick:()=>e.onDateSelect(n.date),children:T(`span`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${r.inView?``:`opacity-60`}`,children:r.dayNumber}),r.isToday?E(`span`,{className:`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},n.key)})]},n.key))})]}):E(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:e.monthOptions.map(n=>{let r=G(e.currentValue.getFullYear(),n.value,1),i=J(r,e.currentValue),a=J(r,K(new Date)),o=n.disabled===!0;return E(`button`,{type:`button`,"data-rue-calendar-month":`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:z(t,i,o,a),onClick:()=>e.onMonthSelect(r),children:T(`span`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:n.label}),a?E(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},`${e.currentValue.getFullYear()}-${n.value}`)})})]})]})},se=e=>typeof e==`number`&&e>=0&&e<=6?e:1,W=e=>new Date(e.getTime()),G=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},K=e=>{let t=W(e);return t.setHours(0,0,0,0),t},ce=e=>G(e.getFullYear(),e.getMonth(),1),le=e=>G(e.getFullYear(),e.getMonth()+1,0),ue=e=>G(e.getFullYear(),0,1),de=e=>G(e.getFullYear(),11,31),q=(e,t)=>G(e.getFullYear(),e.getMonth(),e.getDate()+t),fe=e=>e instanceof Date&&!Number.isNaN(e.getTime()),pe=(e,t=new Date)=>{if(fe(e))return W(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(fe(t))return t}return W(t)},me=e=>{if(!e)return null;let t=K(pe(e[0])),n=K(pe(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},he=(e,t)=>e.getFullYear()===t.getFullYear(),J=(e,t)=>he(e,t)&&e.getMonth()===t.getMonth(),ge=(e,t)=>J(e,t)&&e.getDate()===t.getDate(),Y=(e,t)=>{let n=G(e.getFullYear(),e.getMonth()+t,1),r=le(n).getDate();return G(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},_e=(e,t)=>{let n=G(e.getFullYear()+t,e.getMonth(),1),r=le(n).getDate();return G(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},ve=(e,t)=>_e(e,t-e.getFullYear()),ye=(e,t)=>Y(e,t-e.getMonth()),be=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,xe=(e,t,n)=>{let r=K(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(W(r))},Se=(e,t,n,r)=>{let i=ce(e),a=le(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):xe(o,t,n))return!0;o=q(o,1)}return!1},Ce=(e,t,n,r)=>{let i=ue(e),a=de(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>G(e.getFullYear(),n,1)).some(e=>r?r(e):Se(e,t,n))},we=e=>{let t=K(e),n=G(q(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=q(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Te=(e,t)=>{let n=`${e}:${t}`,r=P.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=G(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(q(a,(t+n)%7)));return P.set(n,o),o},Ee=e=>{let t=F.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(G(2026,t,1)));return F.set(e,r),r},De=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Oe=(e,t,n,r,i)=>{let a=Ee(e);return Array.from({length:12},(e,o)=>{let s=G(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):Se(s,n,r))}})},ke=(e,t)=>{let n=ce(e),r=q(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=q(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:we(i),cells:Array.from({length:7},(t,n)=>{let r=q(i,n);return{key:be(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},Ae=e=>{let t=ee.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),ee.set(e,t)),t},je=e=>{let t=I.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),I.set(e,t)),t},Me=e=>{let t=L.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),L.set(e,t)),t},X=Object.assign(({value:e,defaultValue:t,mode:r,fullscreen:i=!0,showWeek:s,locale:c,weekStartsOn:l,validRange:u,disabledDate:d,dateFullCellRender:f,dateCellRender:p,monthFullCellRender:m,monthCellRender:h,cellRender:_,fullCellRender:v,headerRender:y,className:b,onChange:x,onPanelChange:S,onSelect:C,...w})=>{let D=o(pe(e??t??new Date)),O=o(r??`month`),k=n(),A=n(),j=n(),P=n(null),F=n(null),ee=n(`__none__`),I=e===void 0?D.value:pe(e,D.value),L=r??O.value,R=K(new Date),z=me(u),B=!!z||!!d,V=c??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),H=se(l),U=V.toLowerCase().startsWith(`zh`);k.current||=N().date,A.current||=N().month,j.current||=N().year;let ie=z?z.start.getTime():null,ce=z?z.end.getTime():null,le=d?d.toString():`__none__`;(P.current!==ie||F.current!==ce||ee.current!==le)&&(k.current.clear(),A.current.clear(),j.current.clear(),P.current=ie,F.current=ce,ee.current=le);let ue=e=>{if(!B)return!0;let t=be(K(e)),n=k.current?.get(t);if(n!==void 0)return n;let r=xe(e,z,d);return k.current?.set(t,r),r},de=e=>{if(!B)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=A.current?.get(t);if(n!==void 0)return n;let r=Se(e,z,d,ue);return A.current?.set(t,r),r},q=e=>{if(!B)return!0;let t=`${e.getFullYear()}`,n=j.current?.get(t);if(n!==void 0)return n;let r=Ce(e,z,d,de);return j.current?.set(t,r),r},fe=L===`month`,we=fe?Te(V,H):[],Ee=fe?ke(I,H):[],X=De(I,z),Ne=Oe(V,I,B?z:null,B?d:void 0,B?de:void 0),Pe=M(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${i?`rounded-[1.75rem]`:`max-w-[24rem] rounded-[1.5rem]`}`,b),Fe=s?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,Ie=L===`month`?Ae(V).format(I):je(V).format(I),Le=Me(V).format(R),Re=U?`今天`:`Today`,ze=U?`月`:`Month`,Be=U?`年`:`Year`,Ve=U?`周`:`Week`,Z=U?`今`:`Today`,He=L===`month`?U?`月视图`:`Month view`:U?`年视图`:`Year view`,Ue=B?L===`month`?!de(Y(I,-1)):!q(_e(I,-1)):!1,We=B?L===`month`?!de(Y(I,1)):!q(_e(I,1)):!1,Ge=B?!ue(R):!1,Ke=!!(_||v||p||f),qe=!!(_||v||h||m),Je=!y&&!Ke&&!qe&&e!==void 0&&r!==void 0,Q=(t,n)=>{let r=K(pe(t,I)),i=!ge(r,I),a=L===`month`?!J(r,I):!he(r,I);e===void 0&&(D.value=r),i&&x?.(W(r)),a&&S?.(W(r),L),C?.(W(r),{source:n})},Ye=e=>{e!==L&&(r===void 0&&(O.value=e),S?.(W(I),e))},Xe={value:W(I),type:L,yearOptions:X,monthOptions:Ne,onChange:e=>Q(e,`customize`),onTypeChange:Ye,onYearChange:e=>Q(ve(I,e),`customize`),onMonthChange:e=>Q(ye(I,e),`customize`)};if(Je){let e=a(()=>({host:null,lastSnapshot:null,eventsAttached:!1})),t=()=>{if(e.host||typeof document>`u`)return;let t=document.createElement(`span`);t.style.display=`contents`,e.host=t},n=()=>{!e.host||e.eventsAttached||(e.host.addEventListener(`click`,t=>{let n=e.lastSnapshot,r=t.target?.closest(`[data-rue-calendar-action], [data-rue-calendar-cell], [data-rue-calendar-month]`);if(!n||!r||!e.host?.contains(r)||r.disabled)return;let i=r.getAttribute(`data-rue-calendar-action`);if(i===`previous`){n.onPrevious();return}if(i===`today`){n.onToday();return}if(i===`next`){n.onNext();return}if(i===`mode-month`){n.onModeMonth();return}if(i===`mode-year`){n.onModeYear();return}let a=r.getAttribute(`data-rue-calendar-cell`);if(a){n.onDateSelect(pe(a,n.currentValue));return}let o=r.getAttribute(`data-rue-calendar-month`);if(o){let[e,t]=o.split(`-`).map(e=>Number(e));Number.isFinite(e)&&Number.isFinite(t)&&n.onMonthSelect(G(e,t-1,1))}}),e.host.addEventListener(`change`,t=>{let n=e.lastSnapshot,r=t.target;if(!n||!r||!e.host?.contains(r))return;let i=r.getAttribute(`data-rue-calendar-select`),a=Number(r.value);Number.isFinite(a)&&(i===`year`?n.onYearChange(a):i===`month`&&n.onMonthChange(a))}),e.eventsAttached=!0)},r=new Map;if(fe)for(let e of Ee)for(let t of e.cells)r.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:ge(t.date,I),isToday:ge(t.date,R),disabled:!ue(t.date)});let o={rest:w,rootClassName:Pe,currentMode:L,currentValue:W(I),headerTitle:Ie,todayLabel:Le,previousDisabled:Ue,nextDisabled:We,todayDisabled:Ge,yearOptions:X.map(e=>({value:e,disabled:!q(G(e,I.getMonth(),1))})),monthOptions:Ne,weekdayLabels:we,dateRows:Ee,rowClassName:Fe,showWeek:s,viewLabel:He,weekButtonLabel:Ve,todayButtonLabel:Re,monthButtonLabel:ze,yearButtonLabel:Be,todayMarkerLabel:Z,dateCellStates:r,patchKey:[L,I.getFullYear(),I.getMonth(),i?`full`:`card`,s?`week`:`day`,Pe,Fe,Z,Ve,te(X.map(e=>({value:e,disabled:!q(G(e,I.getMonth(),1))})),Ne,r),Ue?`prev-off`:`prev-on`,We?`next-off`:`next-on`,Ge?`today-off`:`today-on`].join(`|`),selectedKey:be(I),onPrevious:()=>Q(L===`month`?Y(I,-1):_e(I,-1),`customize`),onToday:()=>Q(R,`customize`),onNext:()=>Q(L===`month`?Y(I,1):_e(I,1),`customize`),onYearChange:e=>Q(ve(I,e),`customize`),onMonthChange:e=>Q(ye(I,e),`customize`),onModeMonth:()=>Ye(`month`),onModeYear:()=>Ye(`year`),onDateSelect:e=>Q(e,`date`),onMonthSelect:e=>Q(e,`month`)};return g(()=>{e.host&&e.host.replaceChildren(),e.lastSnapshot=null}),t(),e.host?(n(),e.lastSnapshot&&ne(e.lastSnapshot,o)?re(e.host,e.lastSnapshot,o):e.host.innerHTML=ae(o),e.lastSnapshot=o,{__rue_host_node:e.host}):oe(o)}return T(`div`,{...w,"data-testid":w[`data-testid`],"data-rue-calendar-root":`true`,"data-rue-calendar-mode":L,className:Pe,children:[y?y(Xe):T(`div`,{className:`border-b border-base-300/70 ${i?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[T(`div`,{children:[E(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),E(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:Ie}),E(`div`,{className:`mt-1 text-xs text-base-content/60`,children:Le})]}),T(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":U?`上一页`:`Previous`,disabled:Ue,onClick:()=>Q(L===`month`?Y(I,-1):_e(I,-1),`customize`),children:E(`span`,{"aria-hidden":`true`,children:`<`})}),E(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:Ge,onClick:()=>Q(R,`customize`),children:Re}),E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":U?`下一页`:`Next`,disabled:We,onClick:()=>Q(L===`month`?Y(I,1):_e(I,1),`customize`),children:E(`span`,{"aria-hidden":`true`,children:`>`})})]}),E(`select`,{className:`select select-sm min-w-24`,value:I.getFullYear(),onChange:e=>Xe.onYearChange(Number(e.currentTarget.value)),children:X.map(e=>E(`option`,{value:e,disabled:!q(G(e,I.getMonth(),1)),children:e},e))}),E(`select`,{className:`select select-sm min-w-24`,value:I.getMonth(),disabled:L===`year`,onChange:e=>Xe.onMonthChange(Number(e.currentTarget.value)),children:Ne.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),T(`div`,{className:`join`,children:[E(`button`,{type:`button`,"data-rue-calendar-mode-switch":`month`,className:`btn btn-sm join-item ${L===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>Ye(`month`),children:ze}),E(`button`,{type:`button`,"data-rue-calendar-mode-switch":`year`,className:`btn btn-sm join-item ${L===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>Ye(`year`),children:Be})]})]})]}),T(`div`,{className:i?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[T(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[E(`div`,{className:`badge badge-outline badge-sm`,children:He}),s&&L===`month`?E(`div`,{className:`badge badge-soft badge-sm`,children:Ve}):null]}),L===`month`?T(`div`,{className:`space-y-2`,children:[T(`div`,{className:Fe,children:[s?E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:Ve}):null,we.map(e=>E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),E(`div`,{role:`grid`,className:`space-y-2`,children:Ee.map((e,t)=>T(`div`,{role:`row`,className:Fe,children:[s?E(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":e.week,children:e.week}):null,e.cells.map((n,r)=>{let a=ge(n.date,I),o=ge(n.date,R),s=!ue(n.date),c=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${i?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;if(a?c+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:s?c+=` border-base-300/70 bg-base-200/50 text-base-content/35`:n.inView?c+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:c+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,o&&!a&&(c+=` ring-1 ring-primary/20`),!Ke)return E(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>Q(n.date,`date`),children:T(`span`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})},n.key);let l=E(`div`,{className:`flex h-full flex-col gap-2`,children:T(`div`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})}),u=_?.(W(n.date),{type:`date`,originNode:l,today:W(R),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:r,week:e.week})??p?.(W(n.date)),d=T(`div`,{className:`flex h-full flex-col gap-2`,children:[T(`div`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]}),E(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${a?`opacity-90`:`opacity-75`}`,children:u})]}),m=v?.(W(n.date),{type:`date`,originNode:d,today:W(R),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:r,week:e.week})??f?.(W(n.date))??d;return E(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>Q(n.date,`date`),children:m},n.key)})]},e.key))})]}):E(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:Ne.map((e,t)=>{let n=G(I.getFullYear(),e.value,1),r=J(n,I),a=J(n,R),o=e.disabled===!0,s=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${i?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;if(r?s+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:o?s+=` border-base-300/70 bg-base-200/50 text-base-content/35`:s+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,a&&!r&&(s+=` ring-1 ring-primary/20`),!qe)return E(`button`,{type:`button`,"data-rue-calendar-month":`${I.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":r?`true`:`false`,disabled:o,className:s,onClick:()=>Q(n,`month`),children:T(`span`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),a?E(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})},`${I.getFullYear()}-${e.value}`);let c=E(`div`,{className:`flex h-full flex-col gap-2`,children:T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),a?E(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})}),l=_?.(W(n),{type:`month`,originNode:c,today:W(R),selected:r,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??h?.(W(n)),u=T(`div`,{className:`flex h-full flex-col gap-2`,children:[T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),a?E(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]}),E(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${r?`opacity-90`:`opacity-75`}`,children:l})]}),d=v?.(W(n),{type:`month`,originNode:u,today:W(R),selected:r,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??m?.(W(n))??u;return E(`button`,{type:`button`,"data-rue-calendar-month":`${I.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":r?`true`:`false`,disabled:o,className:s,onClick:()=>Q(n,`month`),children:d},`${I.getFullYear()}-${e.value}`)})})]})]})},{Cally:({className:e,children:t,...n})=>E(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:M(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>E(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>E(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:M(`pika-single`,t)})}),Ne=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),Pe=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Fe=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},Ie=e=>e?typeof e==`string`?e:Pe(e):`未选择`,Le=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Re=[Fe(`2026-04-01`),Fe(`2026-05-31`)],ze=e=>e.getDay()===0||e.getDay()===6||Ne.has(Pe(e)),Be=()=>{let{selectedValue:e,selectedSource:n,panelMode:i,panelState:s,handleChange:f,handlePanelChange:h,handleSelect:g}=C(`useSetup:0:0`,()=>a(()=>{let e=C(`ref:1:0`,()=>o(`2026-04-12`)),t=C(`ref:1:1`,()=>o(`date`)),n=C(`ref:1:2`,()=>o(`month`)),i=C(`ref:1:3`,()=>o(Le(Fe(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelMode:n,panelState:i,handleChange:C(`useCallback:1:4`,()=>r(t=>{e.value=Pe(t)},[])),handlePanelChange:C(`useCallback:1:5`,()=>r((e,t)=>{i.value=Le(e,t)},[])),handleSelect:C(`useCallback:1:6`,()=>r((e,n)=>{t.value=n.source},[]))}}));return _(r=>{let a=t(`div`,r);p(a,`space-y-4`);let o=d(`rue:component:anchor`);l(a,o),u(()=>{let t=x(X,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:i.value,showWeek:!0,validRange:Re,disabledDate:ze,onChange:f,onPanelChange:(e,t)=>{i.value=t,h(e,t)},onSelect:g});c(()=>b(t,a,o))});let _=t(`div`,a);l(a,_),p(_,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let y=t(`div`,_);l(_,y),p(y,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let C=t(`div`,y);l(y,C),p(C,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),l(C,m(`当前值`));let w=t(`div`,y);l(y,w),p(w,`mt-1 text-sm font-medium`);let T=d(`rue:slot:anchor`);l(w,T),u(()=>{let t=Ie(e.value);c(()=>b(t,w,T))});let E=t(`div`,_);l(_,E),p(E,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let D=t(`div`,E);l(E,D),p(D,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),l(D,m(`选择来源`));let O=t(`div`,E);l(E,O),p(O,`mt-1 text-sm font-medium`);let k=S(O);l(O,k),u(()=>{v(k,n.value)});let A=t(`div`,_);l(_,A),p(A,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let j=t(`div`,A);l(A,j),p(j,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),l(j,m(`面板状态`));let M=t(`div`,A);l(A,M),p(M,`mt-1 text-sm font-medium`);let N=S(M);l(M,N),u(()=>{v(N,s.value)});let P=t(`p`,a);return l(a,P),p(P,`m-0 text-xs text-base-content/70`),l(P,m(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),a})},Ve=null,Z=null,He=X.Cally,Ue=X.Month,We=X.PikaSingle,Ge=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,Ke=async()=>{typeof window>`u`||typeof customElements>`u`||(Ve||=(async()=>{let e=Ge();customElements.get(`calendar-date`)||await(e?.cally?e.cally():D(()=>import(`./cally-C7GBJm8_.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await Ve)},qe=async()=>{if(!Z){let t=Ge();Z=(t?.pikaday?t.pikaday():D(()=>import(`./pikaday-BR-EJEbz.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return Z},Je=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Q=(e,t=`未选择`)=>e||t,Ye=e=>e||`Pick a date`,Xe=e=>_(n=>{let r=t(`div`,n);p(r,`flex flex-wrap gap-2 text-xs`);let i=t(`span`,r);l(r,i),u(()=>{p(i,String(`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`))});let a=d(`rue:slot:anchor`);l(i,a),u(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;c(()=>b(t,i,a))});let o=d(`rue:slot:anchor`);return l(r,o),u(()=>{let n=e.error?_(()=>{let n=s(),r=t(`span`,n);l(n,r),p(r,`badge badge-error badge-soft`);let i=d(`rue:slot:anchor`);return l(r,i),u(()=>{let t=e.error;c(()=>b(t,r,i))}),n}):``;c(()=>b(n,r,o))}),r}),Ze=()=>_(e=>{let n=t(`svg`,e);y(n,`aria-label`,`Previous`),p(n,`fill-current size-4`),y(n,`slot`,`previous`),y(n,`xmlns`,`http://www.w3.org/2000/svg`),y(n,`viewBox`,`0 0 24 24`);let r=t(`path`,n);return l(n,r),y(r,`fill`,`currentColor`),y(r,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),n}),Qe=()=>_(e=>{let n=t(`svg`,e);y(n,`aria-label`,`Next`),p(n,`fill-current size-4`),y(n,`slot`,`next`),y(n,`xmlns`,`http://www.w3.org/2000/svg`),y(n,`viewBox`,`0 0 24 24`);let r=t(`path`,n);return l(n,r),y(r,`fill`,`currentColor`),y(r,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),n}),$e=()=>{let{calendarRef:e,cleanupRef:r,selectedValue:i,ready:g,error:v}=C(`useSetup:0:0`,()=>a(()=>{let e=C(`useRef:1:0`,()=>n()),t=C(`useRef:1:1`,()=>n(()=>{})),r=C(`ref:1:2`,()=>o(`2026-04-12`)),i=C(`ref:1:3`,()=>o(!1)),a=C(`ref:1:4`,()=>o(``));return h(()=>{let n=!0;Ke().then(()=>{if(!n)return;i.value=!0;let a=e.current;if(!a)return;a.value=r.value;let o=()=>{r.value=a.value||``};a.addEventListener(`change`,o),t.current=()=>a.removeEventListener(`change`,o)}).catch(()=>{n&&(a.value=`Cally 加载失败`)}),f(()=>{n=!1})}),f(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:r,ready:i,error:a}}));return _(n=>{let r=t(`div`,n);p(r,`space-y-3`);let a=d(`rue:component:anchor`);l(r,a);let o=_(()=>{let e=s(),t=d(`rue:component:anchor`);l(e,t),b(x(Ze,{}),e,t);let n=d(`rue:component:anchor`);l(e,n),b(x(Qe,{}),e,n);let r=d(`rue:component:anchor`);return l(e,r),b(x(Ue,{}),e,r),e});u(()=>{let t=x(He,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:o});c(()=>b(t,r,a))});let f=d(`rue:component:anchor`);l(r,f),u(()=>{let e=x(Xe,{ready:g.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:v.value});c(()=>b(e,r,f))});let h=t(`p`,r);l(r,h),p(h,`m-0 text-xs text-base-content/70`),l(h,m(`当前选择：`));let y=d(`rue:slot:anchor`);return l(h,y),u(()=>{let e=Q(i.value);c(()=>b(e,h,y))}),l(h,m(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),r})},et=()=>{let{calendarRef:e,cleanupRef:r,selectedValue:g,open:v,ready:S,error:w}=C(`useSetup:0:0:dup1`,()=>a(()=>{let e=C(`useRef:1:5`,()=>n()),t=C(`useRef:1:6`,()=>n(()=>{})),r=C(`ref:1:7`,()=>o(``)),i=C(`ref:1:8`,()=>o(!1)),a=C(`ref:1:9`,()=>o(!1)),s=C(`ref:1:10`,()=>o(``));return h(()=>{let n=!0;Ke().then(()=>{if(!n)return;a.value=!0;let o=e.current;if(!o)return;o.value=r.value;let s=()=>{r.value=o.value||``,i.value=!1};o.addEventListener(`change`,s),t.current=()=>o.removeEventListener(`change`,s)}).catch(()=>{n&&(s.value=`Cally 加载失败`)}),f(()=>{n=!1})}),f(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:r,open:i,ready:a,error:s}}));return _(n=>{let r=t(`div`,n);p(r,`space-y-3`);let a=t(`div`,r);l(r,a),p(a,`flex flex-wrap items-center gap-3`);let o=t(`button`,a);l(a,o),y(o,`type`,`button`),y(o,`data-testid`,`cally-picker-button`),p(o,`input input-bordered w-fit cursor-pointer`),i(o,`click`,()=>{v.value=!v.value});let f=d(`rue:slot:anchor`);l(o,f),u(()=>{let e=Ye(g.value);c(()=>b(e,o,f))});let h=t(`span`,a);l(a,h),p(h,`text-xs text-base-content/70`),l(h,m(`当前选择：`));let C=d(`rue:slot:anchor`);l(h,C),u(()=>{let e=Q(g.value);c(()=>b(e,h,C))});let T=t(`div`,r);l(r,T),y(T,`data-testid`,`cally-picker-panel`),u(()=>{p(T,String(`inline-block rounded-box bg-base-100 p-3 shadow-lg ${v.value?``:`hidden`}`))});let E=d(`rue:component:anchor`);l(T,E);let D=_(()=>{let e=s(),t=d(`rue:component:anchor`);l(e,t),b(x(Ze,{}),e,t);let n=d(`rue:component:anchor`);l(e,n),b(x(Qe,{}),e,n);let r=d(`rue:component:anchor`);return l(e,r),b(x(Ue,{}),e,r),e});u(()=>{let t=x(He,{ref:e,"data-testid":`cally-picker-calendar`,children:D});c(()=>b(t,T,E))});let O=d(`rue:component:anchor`);l(r,O),u(()=>{let e=x(Xe,{ready:S.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:w.value});c(()=>b(e,r,O))});let k=t(`p`,r);return l(r,k),p(k,`m-0 text-xs text-base-content/70`),l(k,m(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),r})},tt=()=>{let{inputRef:e,instanceRef:r,selectedValue:i,ready:s,error:g}=C(`useSetup:0:0:dup2`,()=>a(()=>{let e=C(`useRef:1:11`,()=>n()),t=C(`useRef:1:12`,()=>n()),r=C(`ref:1:13`,()=>o(``)),i=C(`ref:1:14`,()=>o(!1)),a=C(`ref:1:15`,()=>o(``));return h(()=>{let n=!0;qe().then(a=>{if(!n)return;let o=e.current;o&&(t.current=new a({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>Je(e),onSelect:e=>{r.value=o.value||Je(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),r.value=o.value||`2026-04-12`,i.value=!0)}).catch(()=>{n&&(a.value=`Pikaday 加载失败`)}),f(()=>{n=!1})}),f(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:r,ready:i,error:a}}));return _(n=>{let r=t(`div`,n);p(r,`space-y-3`);let a=d(`rue:component:anchor`);l(r,a),u(()=>{let t=x(We,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});c(()=>b(t,r,a))});let o=d(`rue:component:anchor`);l(r,o),u(()=>{let e=x(Xe,{ready:s.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:g.value});c(()=>b(e,r,o))});let f=t(`p`,r);l(r,f),p(f,`m-0 text-xs text-base-content/70`),l(f,m(`当前选择：`));let h=d(`rue:slot:anchor`);l(f,h),u(()=>{let e=Q(i.value);c(()=>b(e,f,h))});let _=t(`p`,r);return l(r,_),p(_,`m-0 text-xs text-base-content/70`),l(_,m(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),r})},nt=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],rt=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],it={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},at={2:12,3:28,4:18,8:43},ot={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},st={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},ct=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,lt=e=>e?typeof e==`string`?e:ct(e):`未选择`,ut=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,$=e=>_(n=>{let r=t(`div`,n);p(r,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let i=t(`span`,r);l(r,i),p(i,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let a=d(`rue:slot:anchor`);l(i,a),u(()=>{let t=e.label;c(()=>b(t,i,a))});let o=t(`span`,r);l(r,o),p(o,`text-sm font-medium`);let s=S(o);return l(o,s),u(()=>{v(s,e.value)}),r}),dt=e=>_(n=>{let r=t(`div`,n);p(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=t(`table`,r);l(r,i),p(i,`table table-zebra`);let a=t(`thead`,i);l(i,a);let o=t(`tr`,a);l(a,o);let f=t(`th`,o);l(o,f),l(f,m(`属性`));let h=t(`th`,o);l(o,h),l(h,m(`说明`));let g=t(`th`,o);l(o,g),l(g,m(`类型`));let v=t(`th`,o);l(o,v),l(v,m(`默认值`));let x=t(`tbody`,i);l(i,x);let S=d(`rue:list:start`),C=d(`rue:list:end`);l(x,S),l(x,C);let T=new Map;return u(()=>{T=w({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,n,r,i,a)=>{b(_(()=>{let n=s(),r=t(`tr`,n);l(n,r),u(()=>{y(r,`key`,String(e.prop))});let i=t(`td`,r);l(r,i);let a=t(`code`,i);l(i,a);let o=d(`rue:slot:anchor`);l(a,o),u(()=>{let t=e.prop;c(()=>b(t,a,o))});let f=t(`td`,r);l(r,f);let p=d(`rue:slot:anchor`);l(f,p),u(()=>{let t=e.description;c(()=>b(t,f,p))});let m=t(`td`,r);l(r,m);let h=t(`code`,m);l(m,h);let g=d(`rue:slot:anchor`);l(h,g),u(()=>{let t=e.type;c(()=>b(t,h,g))});let _=t(`td`,r);l(r,_);let v=t(`code`,_);l(_,v);let x=d(`rue:slot:anchor`);return l(v,x),u(()=>{let t=e.defaultValue;c(()=>b(t,v,x))}),n}),n,r)}})}),r}),ft=e=>_(n=>{let r=t(`div`,n);p(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=t(`table`,r);l(r,i),p(i,`table table-zebra`);let a=t(`thead`,i);l(i,a);let o=t(`tr`,a);l(a,o);let f=t(`th`,o);l(o,f),l(f,m(`导出`));let h=t(`th`,o);l(o,h),l(h,m(`说明`));let g=t(`tbody`,i);l(i,g);let v=d(`rue:list:start`),x=d(`rue:list:end`);l(g,v),l(g,x);let S=new Map;return u(()=>{S=w({items:e.rows||[],getKey:(e,t)=>e.name,elements:S,parent:g,before:x,singleRoot:!0,trackIndex:!1,start:v,renderItem:(e,n,r,i,a)=>{b(_(()=>{let n=s(),r=t(`tr`,n);l(n,r),u(()=>{y(r,`key`,String(e.name))});let i=t(`td`,r);l(r,i);let a=t(`code`,i);l(i,a);let o=d(`rue:slot:anchor`);l(a,o),u(()=>{let t=e.name;c(()=>b(t,a,o))});let f=t(`td`,r);l(r,f);let p=d(`rue:slot:anchor`);return l(f,p),u(()=>{let t=e.description;c(()=>b(t,f,p))}),n}),n,r)}})}),r}),pt=e=>{let{shouldLoadPreview:r,preloadTimer:i}=C(`useSetup:0:0`,()=>a(()=>{let t=C(`ref:1:0`,()=>o(e.previewLoadDelay==null)),r=C(`useRef:1:1`,()=>n(null));return h(()=>{e.previewLoadDelay==null||t.value||(r.current=window.setTimeout(()=>{t.value=!0,r.current=null},e.previewLoadDelay))}),f(()=>{r.current!=null&&(window.clearTimeout(r.current),r.current=null)}),{shouldLoadPreview:t,preloadTimer:r}}));return _(n=>{let i=t(`div`,n);p(i,`component-preview not-prose my-6 text-base-content lg:my-12`);let a=t(`div`,i);l(i,a),p(a,`flex flex-wrap items-start justify-between gap-3`);let o=t(`div`,a);l(a,o);let f=t(`h2`,o);l(o,f),p(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(f,m(`# `));let h=d(`rue:slot:anchor`);l(f,h),u(()=>{let t=e.title;c(()=>b(t,f,h))});let g=d(`rue:slot:anchor`);l(o,g),u(()=>{let n=e.summary?_(()=>{let n=s(),r=t(`p`,n);l(n,r),p(r,`m-0 text-sm opacity-70`);let i=d(`rue:slot:anchor`);return l(r,i),u(()=>{let t=e.summary;c(()=>b(t,r,i))}),n}):``;c(()=>b(n,o,g))});let v=d(`rue:component:anchor`);l(i,v),u(()=>{let t=x(k,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});c(()=>b(t,i,v))});let y=d(`rue:slot:anchor`);return l(i,y),u(()=>{let n=e.tab.value===`preview`?r.value?j(e.title,e.preview):_(()=>{let n=s(),r=t(`div`,n);l(n,r),p(r,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let i=t(`div`,r);l(r,i),p(i,`badge badge-outline badge-sm`),l(i,m(`Preview`));let a=t(`p`,r);l(r,a),p(a,`mb-0 mt-3 text-sm text-base-content/72`);let o=d(`rue:slot:anchor`);return l(a,o),u(()=>{let t=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;c(()=>b(t,a,o))}),n}):_(()=>{let t=s(),n=d(`rue:component:anchor`);return l(t,n),u(()=>{let r=x(O,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});c(()=>b(r,t,n))}),t});c(()=>b(n,i,y))}),i})},mt=e=>_(n=>{let r=t(`div`,n);p(r,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let i=t(`div`,r);l(r,i),p(i,`badge badge-outline badge-sm`);let a=d(`rue:slot:anchor`);l(i,a),u(()=>{let t=e.badge;c(()=>b(t,i,a))});let o=t(`h3`,r);l(r,o),p(o,`mt-3 mb-1 text-base font-semibold`);let s=d(`rue:slot:anchor`);l(o,s),u(()=>{let t=e.title;c(()=>b(t,o,s))});let f=t(`p`,r);l(r,f),p(f,`m-0 text-sm text-base-content/70`);let m=d(`rue:slot:anchor`);return l(f,m),u(()=>{let t=e.detail;c(()=>b(t,f,m))}),r}),ht=()=>{let{selectedValue:e}=C(`useSetup:0:0:dup1`,()=>a(()=>({selectedValue:C(`ref:1:2`,()=>o(`2026-04-15`))})));return _(n=>{let r=t(`div`,n);p(r,`space-y-4`);let i=d(`rue:component:anchor`);l(r,i),u(()=>{let t=x(X,{"data-testid":`notice-calendar`,locale:`zh-CN`,defaultValue:e.value,onChange:t=>{e.value=ct(t)},cellRender:(e,t)=>{if(t.type===`month`){let t=at[e.getMonth()];return t?T(`div`,{className:`space-y-1`,children:[E(`div`,{className:`text-lg font-semibold leading-none`,children:t}),E(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=it[ct(e)]??[];return n.length?T(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>E(`div`,{className:`badge badge-soft badge-xs ${st[e.tone]}`,children:e.label},e.label)),n.length>2?T(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});c(()=>b(t,r,i))});let a=t(`div`,r);l(r,a),p(a,`grid gap-3 md:grid-cols-3`);let o=d(`rue:component:anchor`);l(a,o),u(()=>{let t=x($,{label:`当前日期`,value:lt(e.value)});c(()=>b(t,a,o))});let s=d(`rue:component:anchor`);l(a,s),u(()=>{let e=x($,{label:`4 月 15 日事件`,value:`${it[`2026-04-15`]?.length??0} 条`});c(()=>b(e,a,s))});let f=d(`rue:component:anchor`);return l(a,f),u(()=>{let e=x($,{label:`9 月 backlog`,value:`${at[8]} 项`});c(()=>b(e,a,f))}),r})},gt=()=>{let{selectedValue:e}=C(`useSetup:0:0:dup2`,()=>a(()=>({selectedValue:C(`ref:1:3`,()=>o(`2026-09-18`))})));return _(n=>{let r=t(`div`,n);p(r,`space-y-4`);let i=t(`div`,r);l(r,i),p(i,`grid gap-4`);let a=t(`div`,i);l(i,a),p(a,`max-w-full overflow-x-auto`);let o=d(`rue:component:anchor`);l(a,o),u(()=>{let t=x(X,{"data-testid":`card-calendar`,className:`w-fit max-w-none min-w-[34rem]`,locale:`zh-CN`,fullscreen:!1,defaultValue:e.value,onChange:t=>{e.value=ct(t)},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=ot[ct(e)];return n==null?t.originNode:T(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),T(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),T(`div`,{className:`space-y-1`,children:[E(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:E(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),E(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});c(()=>b(t,a,o))});let s=t(`div`,i);l(i,s),p(s,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let f=t(`div`,s);l(s,f),p(f,`badge badge-secondary badge-soft`),l(f,m(`Card Mode`));let h=t(`h3`,s);l(s,h),p(h,`mt-3 mb-1 text-base font-semibold`),l(h,m(`容量面板`));let g=t(`p`,s);l(s,g),p(g,`m-0 text-sm text-base-content/70`),l(g,m(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let _=t(`div`,s);l(s,_),p(_,`mt-4 space-y-3`);let v=d(`rue:component:anchor`);l(_,v),u(()=>{let t=x($,{label:`当前日期`,value:lt(e.value)});c(()=>b(t,_,v))});let y=d(`rue:component:anchor`);l(_,y),b(x($,{label:`高负载日`,value:`9/18 · 92%`}),_,y);let S=d(`rue:component:anchor`);return l(_,S),b(x($,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),_,S),r})},_t=()=>{let{selectedValue:e,panelMode:n,actionSource:r}=C(`useSetup:0:0:dup3`,()=>a(()=>({selectedValue:C(`ref:1:4`,()=>o(`2026-07-04`)),panelMode:C(`ref:1:5`,()=>o(`month`)),actionSource:C(`ref:1:6`,()=>o(`date`))})));return _(i=>{let a=t(`div`,i);p(a,`space-y-4`);let o=d(`rue:component:anchor`);l(a,o),u(()=>{let t=x(X,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,defaultValue:e.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>T(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[T(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[T(`div`,{children:[E(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),E(`div`,{className:`mt-1 text-base font-semibold`,children:ut(e,t)})]}),T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),E(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),T(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[E(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>E(`option`,{value:e,children:e},e))}),E(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=ct(t)},onPanelChange:(e,t)=>{n.value=t},onSelect:(e,t)=>{r.value=t.source}});c(()=>b(t,a,o))});let s=t(`div`,a);l(a,s),p(s,`grid gap-3 md:grid-cols-3`);let f=d(`rue:component:anchor`);l(s,f),u(()=>{let t=x($,{label:`当前日期`,value:lt(e.value)});c(()=>b(t,s,f))});let m=d(`rue:component:anchor`);l(s,m),u(()=>{let e=x($,{label:`当前模式`,value:n.value});c(()=>b(e,s,m))});let h=d(`rue:component:anchor`);return l(s,h),u(()=>{let e=x($,{label:`最近来源`,value:r.value});c(()=>b(e,s,h))}),a})},vt=`import { ref, useCallback } from '@rue-js/rue'
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
}`,yt=`import { ref } from '@rue-js/rue'
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

  return (
    <div className="space-y-4">
      <Calendar
        locale="zh-CN"
        defaultValue={selectedValue.value}
        onChange={date => {
          selectedValue.value = formatIsoDate(date)
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
}`,bt=`import { ref } from '@rue-js/rue'
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

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <div className="max-w-full overflow-x-auto">
          <Calendar
            className="w-fit max-w-none min-w-[34rem]"
            locale="zh-CN"
            fullscreen={false}
            defaultValue={selectedValue.value}
            onChange={date => {
              selectedValue.value = formatIsoDate(date)
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
}`,xt=`import { ref } from '@rue-js/rue'
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
        defaultValue={selectedValue.value}
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
}`,St=`import 'cally'
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
}`,Ct=`import 'cally'
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
}`,wt=()=>{let{tabBasic:e,tabNotice:n,tabCard:r,tabHeader:i,tabCallyCalendar:f,tabCallyDatePicker:h,tabPikaday:g}=C(`useSetup:0:0:dup4`,()=>a(()=>({tabBasic:C(`ref:1:7`,()=>o(`preview`)),tabNotice:C(`ref:1:8`,()=>o(`preview`)),tabCard:C(`ref:1:9`,()=>o(`preview`)),tabHeader:C(`ref:1:10`,()=>o(`preview`)),tabCallyCalendar:C(`ref:1:11`,()=>o(`preview`)),tabCallyDatePicker:C(`ref:1:12`,()=>o(`preview`)),tabPikaday:C(`ref:1:13`,()=>o(`preview`))})));return _(a=>{let o=s(),v=d(`rue:component:anchor`);return l(o,v),b(x(A,{children:_(()=>{let a=s(),o=t(`div`,a);l(a,o),p(o,`prose prose-sm max-w-none md:prose-base`);let _=t(`h1`,o);l(o,_),l(_,m(`Calendar 日历`));let v=t(`p`,o);l(o,v),p(v,`mt-3 mb-3 text-sm`),l(v,m(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let y=t(`div`,o);l(o,y),p(y,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let S=d(`rue:component:anchor`);l(y,S),b(x(mt,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),y,S);let C=d(`rue:component:anchor`);l(y,C),b(x(mt,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),y,C);let w=d(`rue:component:anchor`);l(y,w),b(x(mt,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),y,w);let T=d(`rue:component:anchor`);l(o,T),u(()=>{let t=x(pt,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:Be,code:vt});c(()=>b(t,o,T))});let E=d(`rue:component:anchor`);l(o,E),u(()=>{let e=x(pt,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:n,preview:ht,code:yt,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});c(()=>b(e,o,E))});let D=d(`rue:component:anchor`);l(o,D),u(()=>{let e=x(pt,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:r,preview:gt,code:bt,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});c(()=>b(e,o,D))});let O=d(`rue:component:anchor`);l(o,O),u(()=>{let e=x(pt,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:i,preview:_t,code:xt,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});c(()=>b(e,o,O))});let k=d(`rue:component:anchor`);l(o,k),u(()=>{let e=x(pt,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:f,preview:$e,code:St,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`});c(()=>b(e,o,k))});let A=d(`rue:component:anchor`);l(o,A),u(()=>{let e=x(pt,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:h,preview:et,code:Ct,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`});c(()=>b(e,o,A))});let j=d(`rue:component:anchor`);l(o,j),u(()=>{let e=x(pt,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:g,preview:tt,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});c(()=>b(e,o,j))});let M=t(`section`,o);l(o,M),p(M,`my-12 space-y-6`);let N=t(`div`,M);l(M,N);let P=t(`h2`,N);l(N,P),p(P,`mb-2`),l(P,m(`API`));let F=t(`p`,N);l(N,F),p(F,`m-0 text-sm text-base-content/70`),l(F,m(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let ee=d(`rue:component:anchor`);l(M,ee),u(()=>{let e=x(dt,{rows:nt});c(()=>b(e,M,ee))});let I=t(`div`,M);l(M,I);let L=t(`h2`,I);l(I,L),p(L,`mb-2`),l(L,m(`附属导出`));let R=t(`p`,I);l(I,R),p(R,`m-0 text-sm text-base-content/70`),l(R,m(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let z=d(`rue:component:anchor`);return l(M,z),u(()=>{let e=x(ft,{rows:rt});c(()=>b(e,M,z))}),a})}),o,v),o})};export{wt as default};
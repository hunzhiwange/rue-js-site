const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-CH9Gq8FZ.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{$ as t,Gt as n,Ht as r,I as i,J as a,Kt as o,Lt as s,Q as c,Vt as l,Y as u,Yt as d,Z as f,ct as p,d as m,et as h,l as g,mt as _,o as v,ot as y,s as b,t as x,tt as S}from"./vapor-runtime-BR_2rwNk.js";import{a as C,n as w}from"./vapor-helpers-vapor-DkadWylb.js";import{i as T,r as E}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as D}from"./preload-helper-CM8YhcCa.js";import{t as O}from"./tabs-DMHgT-aV.js";import{n as k}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as A}from"./Code-B_4lzH85.js";import{t as j}from"./preview-test-gate-BMJrlY7m.js";var M=(e,t)=>t?`${e} ${t}`:e,N=()=>({date:new Map,month:new Map,year:new Map}),P=new Map,ee=new Map,te=new Map,F=new Map,I=new Map,L=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return t?a+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?a+=` border-base-300/70 bg-base-200/50 text-base-content/35`:r?a+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:a+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},R=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return t?i+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?i+=` border-base-300/70 bg-base-200/50 text-base-content/35`:i+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},z=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},ne=(e,t,n)=>`${e.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${t.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${Array.from(n.values()).map(e=>`${e.key}:${e.inView?`1`:`0`}:${e.isToday?`1`:`0`}:${e.disabled?`1`:`0`}`).join(`,`)}`,re=(e,t)=>e.currentMode===`month`&&t.currentMode===`month`&&e.patchKey===t.patchKey&&e.selectedKey!==t.selectedKey,ie=(e,t,n)=>{let r=new Set([t.selectedKey,n.selectedKey]);for(let t of r){let r=n.dateCellStates.get(t);if(!r)continue;let i=e.querySelector(`[data-rue-calendar-cell="${t}"]`);i&&(i.disabled=r.disabled,i.className=L(!n.rootClassName.includes(`max-w-[24rem]`),r.selected,r.disabled,r.inView,r.isToday),i.setAttribute(`aria-pressed`,r.selected?`true`:`false`),r.isToday?i.setAttribute(`aria-current`,`date`):i.removeAttribute(`aria-current`),i.innerHTML=z(r,n.todayMarkerLabel))}},B=e=>`${e??``}`.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),V=(e,t)=>t?` ${e}`:``,H=(e,t)=>t==null||t===!1||typeof t==`function`||typeof t==`object`?``:t===!0?` ${e}`:` ${e}="${B(t)}"`,ae=e=>Object.entries(e).map(([e,t])=>e===`children`||e===`class`||e===`className`?``:H(e,t)).join(``),oe=e=>{let t=!e.rootClassName.includes(`max-w-[24rem]`),n=ae(e.rest),r=`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,i=t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,a=e.showWeek?`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${B(e.weekButtonLabel)}</div>`:``,o=e.weekdayLabels.map(e=>`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${B(e)}</div>`).join(``),s=e.currentMode===`month`?`<div class="space-y-2">
          <div class="${B(e.rowClassName)}">${a}${o}</div>
          <div role="grid" class="space-y-2">
            ${e.dateRows.map(n=>`<div role="row" class="${B(e.rowClassName)}">
                    ${e.showWeek?`<div class="flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60" data-rue-calendar-week="${n.week}">${n.week}</div>`:``}
                    ${n.cells.map(n=>{let r=e.dateCellStates.get(n.key),i=r.isToday?` aria-current="date"`:``;return`<button
                          type="button"
                          role="gridcell"
                          data-rue-calendar-cell="${B(n.key)}"
                          data-rue-calendar-in-view="${r.inView?`true`:`false`}"
                          aria-pressed="${r.selected?`true`:`false`}"${i}
                          ${V(`disabled`,r.disabled)}
                          class="${B(L(t,r.selected,r.disabled,r.inView,r.isToday))}"
                        >${z(r,e.todayMarkerLabel)}</button>`}).join(``)}
                  </div>`).join(``)}
          </div>
        </div>`:`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          ${e.monthOptions.map(n=>{let r=W(e.currentValue.getFullYear(),n.value,1),i=q(r,e.currentValue),a=q(r,G(new Date)),o=n.disabled===!0;return`<button
                type="button"
                data-rue-calendar-month="${`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`}"
                aria-pressed="${i?`true`:`false`}"
                ${V(`disabled`,o)}
                class="${B(R(t,i,o,a))}"
              >
                <span class="flex items-center justify-between gap-2">
                  <span class="text-sm font-semibold">${B(n.label)}</span>
                  ${a?`<span class="badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${B(e.todayMarkerLabel)}</span>`:``}
                </span>
              </button>`}).join(``)}
        </div>`;return`<div${n} data-rue-calendar-root="true" data-rue-calendar-mode="${e.currentMode}" class="${B(e.rootClassName)}">
    <div class="${B(r)}">
      <div>
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55">Rue Calendar</div>
        <div class="mt-1 text-xl font-semibold leading-tight">${B(e.headerTitle)}</div>
        <div class="mt-1 text-xs text-base-content/60">${B(e.todayLabel)}</div>
      </div>
      <div class="flex flex-wrap items-center gap-2 lg:justify-end">
        <div class="join">
          <button type="button" class="btn btn-sm join-item" aria-label="Previous" data-rue-calendar-action="previous"${V(`disabled`,e.previousDisabled)}><span aria-hidden="true">&lt;</span></button>
          <button type="button" class="btn btn-sm join-item btn-ghost" data-rue-calendar-action="today"${V(`disabled`,e.todayDisabled)}>${B(e.todayButtonLabel)}</button>
          <button type="button" class="btn btn-sm join-item" aria-label="Next" data-rue-calendar-action="next"${V(`disabled`,e.nextDisabled)}><span aria-hidden="true">&gt;</span></button>
        </div>
        <select class="select select-sm min-w-24" data-rue-calendar-select="year">
          ${e.yearOptions.map(t=>`<option value="${t.value}"${V(`selected`,t.value===e.currentValue.getFullYear())}${V(`disabled`,t.disabled)}>${t.value}</option>`).join(``)}
        </select>
        <select class="select select-sm min-w-24" data-rue-calendar-select="month"${V(`disabled`,e.currentMode===`year`)}>
          ${e.monthOptions.map(t=>`<option value="${t.value}"${V(`selected`,t.value===e.currentValue.getMonth())}${V(`disabled`,t.disabled)}>${B(t.label)}</option>`).join(``)}
        </select>
        <div class="join">
          <button type="button" data-rue-calendar-mode-switch="month" data-rue-calendar-action="mode-month" class="btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}">${B(e.monthButtonLabel)}</button>
          <button type="button" data-rue-calendar-mode-switch="year" data-rue-calendar-action="mode-year" class="btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}">${B(e.yearButtonLabel)}</button>
        </div>
      </div>
    </div>
    <div class="${B(i)}">
      <div class="flex items-center justify-between gap-3 px-1">
        <div class="badge badge-outline badge-sm">${B(e.viewLabel)}</div>
        ${e.showWeek&&e.currentMode===`month`?`<div class="badge badge-soft badge-sm">${B(e.weekButtonLabel)}</div>`:``}
      </div>
      ${s}
    </div>
  </div>`},se=e=>{let t=!e.rootClassName.includes(`max-w-[24rem]`);return T(`div`,{...e.rest,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":e.currentMode,className:e.rootClassName,children:[T(`div`,{className:`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[T(`div`,{children:[E(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),E(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:e.headerTitle}),E(`div`,{className:`mt-1 text-xs text-base-content/60`,children:e.todayLabel})]}),T(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Previous`,disabled:e.previousDisabled,onClick:e.onPrevious,children:E(`span`,{"aria-hidden":`true`,children:`<`})}),E(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:e.todayDisabled,onClick:e.onToday,children:e.todayButtonLabel}),E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Next`,disabled:e.nextDisabled,onClick:e.onNext,children:E(`span`,{"aria-hidden":`true`,children:`>`})})]}),E(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getFullYear(),onChange:t=>e.onYearChange(Number(t.currentTarget.value)),children:e.yearOptions.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.value},e.value))}),E(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getMonth(),disabled:e.currentMode===`year`,onChange:t=>e.onMonthChange(Number(t.currentTarget.value)),children:e.monthOptions.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),T(`div`,{className:`join`,children:[E(`button`,{type:`button`,"data-rue-calendar-mode-switch":`month`,className:`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeMonth,children:e.monthButtonLabel}),E(`button`,{type:`button`,"data-rue-calendar-mode-switch":`year`,className:`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeYear,children:e.yearButtonLabel})]})]})]}),T(`div`,{className:t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[T(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[E(`div`,{className:`badge badge-outline badge-sm`,children:e.viewLabel}),e.showWeek&&e.currentMode===`month`?E(`div`,{className:`badge badge-soft badge-sm`,children:e.weekButtonLabel}):null]}),e.currentMode===`month`?T(`div`,{className:`space-y-2`,children:[T(`div`,{className:e.rowClassName,children:[e.showWeek?E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e.weekButtonLabel}):null,e.weekdayLabels.map(e=>E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),E(`div`,{role:`grid`,className:`space-y-2`,children:e.dateRows.map(n=>T(`div`,{role:`row`,className:e.rowClassName,children:[e.showWeek?E(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":n.week,children:n.week}):null,n.cells.map(n=>{let r=e.dateCellStates.get(n.key);return E(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":r.inView?`true`:`false`,"aria-pressed":r.selected?`true`:`false`,"aria-current":r.isToday?`date`:void 0,disabled:r.disabled,className:L(t,r.selected,r.disabled,r.inView,r.isToday),onClick:()=>e.onDateSelect(n.date),children:T(`span`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${r.inView?``:`opacity-60`}`,children:r.dayNumber}),r.isToday?E(`span`,{className:`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},n.key)})]},n.key))})]}):E(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:e.monthOptions.map(n=>{let r=W(e.currentValue.getFullYear(),n.value,1),i=q(r,e.currentValue),a=q(r,G(new Date)),o=n.disabled===!0;return E(`button`,{type:`button`,"data-rue-calendar-month":`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:R(t,i,o,a),onClick:()=>e.onMonthSelect(r),children:T(`span`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:n.label}),a?E(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},`${e.currentValue.getFullYear()}-${n.value}`)})})]})]})},ce=e=>typeof e==`number`&&e>=0&&e<=6?e:1,U=e=>new Date(e.getTime()),W=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},G=e=>{let t=U(e);return t.setHours(0,0,0,0),t},le=e=>W(e.getFullYear(),e.getMonth(),1),ue=e=>W(e.getFullYear(),e.getMonth()+1,0),de=e=>W(e.getFullYear(),0,1),fe=e=>W(e.getFullYear(),11,31),K=(e,t)=>W(e.getFullYear(),e.getMonth(),e.getDate()+t),pe=e=>e instanceof Date&&!Number.isNaN(e.getTime()),me=(e,t=new Date)=>{if(pe(e))return U(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(pe(t))return t}return U(t)},he=e=>{if(!e)return null;let t=G(me(e[0])),n=G(me(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},ge=(e,t)=>e.getFullYear()===t.getFullYear(),q=(e,t)=>ge(e,t)&&e.getMonth()===t.getMonth(),_e=(e,t)=>q(e,t)&&e.getDate()===t.getDate(),J=(e,t)=>{let n=W(e.getFullYear(),e.getMonth()+t,1),r=ue(n).getDate();return W(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},Y=(e,t)=>{let n=W(e.getFullYear()+t,e.getMonth(),1),r=ue(n).getDate();return W(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},ve=(e,t)=>Y(e,t-e.getFullYear()),ye=(e,t)=>J(e,t-e.getMonth()),be=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,xe=(e,t,n)=>{let r=G(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(U(r))},Se=(e,t,n,r)=>{let i=le(e),a=ue(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):xe(o,t,n))return!0;o=K(o,1)}return!1},Ce=(e,t,n,r)=>{let i=de(e),a=fe(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>W(e.getFullYear(),n,1)).some(e=>r?r(e):Se(e,t,n))},we=e=>{let t=G(e),n=W(K(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=K(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Te=(e,t)=>{let n=`${e}:${t}`,r=P.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=W(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(K(a,(t+n)%7)));return P.set(n,o),o},Ee=e=>{let t=ee.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(W(2026,t,1)));return ee.set(e,r),r},De=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Oe=(e,t,n,r,i)=>{let a=Ee(e);return Array.from({length:12},(e,o)=>{let s=W(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):Se(s,n,r))}})},ke=(e,t)=>{let n=le(e),r=K(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=K(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:we(i),cells:Array.from({length:7},(t,n)=>{let r=K(i,n);return{key:be(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},Ae=e=>{let t=te.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),te.set(e,t)),t},je=e=>{let t=F.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),F.set(e,t)),t},Me=e=>{let t=I.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),I.set(e,t)),t},X=Object.assign(({value:e,defaultValue:t,mode:r,fullscreen:a=!0,showWeek:c,locale:l,weekStartsOn:u,validRange:d,disabledDate:f,dateFullCellRender:p,dateCellRender:m,monthFullCellRender:h,monthCellRender:g,cellRender:_,fullCellRender:v,headerRender:y,className:b,onChange:x,onPanelChange:S,onSelect:C,...w})=>{let D=s(me(e??t??new Date)),O=s(r??`month`),k=n(),A=n(),j=n(),P=n(null),ee=n(null),te=n(`__none__`),F=e===void 0?D.value:me(e,D.value),I=r??O.value,L=G(new Date),R=he(d),z=!!R||!!f,B=l??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),V=ce(u),H=B.toLowerCase().startsWith(`zh`);k.current||=N().date,A.current||=N().month,j.current||=N().year;let ae=R?R.start.getTime():null,le=R?R.end.getTime():null,ue=f?f.toString():`__none__`;(P.current!==ae||ee.current!==le||te.current!==ue)&&(k.current.clear(),A.current.clear(),j.current.clear(),P.current=ae,ee.current=le,te.current=ue);let de=e=>{if(!z)return!0;let t=be(G(e)),n=k.current?.get(t);if(n!==void 0)return n;let r=xe(e,R,f);return k.current?.set(t,r),r},fe=e=>{if(!z)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=A.current?.get(t);if(n!==void 0)return n;let r=Se(e,R,f,de);return A.current?.set(t,r),r},K=e=>{if(!z)return!0;let t=`${e.getFullYear()}`,n=j.current?.get(t);if(n!==void 0)return n;let r=Ce(e,R,f,fe);return j.current?.set(t,r),r},pe=I===`month`,we=pe?Te(B,V):[],Ee=pe?ke(F,V):[],X=De(F,R),Ne=Oe(B,F,z?R:null,z?f:void 0,z?fe:void 0),Pe=M(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${a?`rounded-[1.75rem]`:`max-w-[24rem] rounded-[1.5rem]`}`,b),Fe=c?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,Ie=I===`month`?Ae(B).format(F):je(B).format(F),Le=Me(B).format(L),Re=H?`今天`:`Today`,ze=H?`月`:`Month`,Be=H?`年`:`Year`,Ve=H?`周`:`Week`,Z=H?`今`:`Today`,He=I===`month`?H?`月视图`:`Month view`:H?`年视图`:`Year view`,Ue=z?I===`month`?!fe(J(F,-1)):!K(Y(F,-1)):!1,We=z?I===`month`?!fe(J(F,1)):!K(Y(F,1)):!1,Ge=z?!de(L):!1,Ke=!!(_||v||m||p),qe=!!(_||v||g||h),Je=!y&&!Ke&&!qe&&e!==void 0&&r!==void 0,Q=(t,n)=>{let r=G(me(t,F)),i=!_e(r,F),a=I===`month`?!q(r,F):!ge(r,F);e===void 0&&(D.value=r),i&&x?.(U(r)),a&&S?.(U(r),I),C?.(U(r),{source:n})},Ye=e=>{e!==I&&(r===void 0&&(O.value=e),S?.(U(F),e))},Xe={value:U(F),type:I,yearOptions:X,monthOptions:Ne,onChange:e=>Q(e,`customize`),onTypeChange:Ye,onYearChange:e=>Q(ve(F,e),`customize`),onMonthChange:e=>Q(ye(F,e),`customize`)};if(Je){let e=o(()=>({host:null,lastSnapshot:null,eventsAttached:!1})),t=()=>{if(e.host||typeof document>`u`)return;let t=document.createElement(`span`);t.style.display=`contents`,e.host=t},n=()=>{!e.host||e.eventsAttached||(e.host.addEventListener(`click`,t=>{let n=e.lastSnapshot,r=t.target?.closest(`[data-rue-calendar-action], [data-rue-calendar-cell], [data-rue-calendar-month]`);if(!n||!r||!e.host?.contains(r)||r.disabled)return;let i=r.getAttribute(`data-rue-calendar-action`);if(i===`previous`){n.onPrevious();return}if(i===`today`){n.onToday();return}if(i===`next`){n.onNext();return}if(i===`mode-month`){n.onModeMonth();return}if(i===`mode-year`){n.onModeYear();return}let a=r.getAttribute(`data-rue-calendar-cell`);if(a){n.onDateSelect(me(a,n.currentValue));return}let o=r.getAttribute(`data-rue-calendar-month`);if(o){let[e,t]=o.split(`-`).map(e=>Number(e));Number.isFinite(e)&&Number.isFinite(t)&&n.onMonthSelect(W(e,t-1,1))}}),e.host.addEventListener(`change`,t=>{let n=e.lastSnapshot,r=t.target;if(!n||!r||!e.host?.contains(r))return;let i=r.getAttribute(`data-rue-calendar-select`),a=Number(r.value);Number.isFinite(a)&&(i===`year`?n.onYearChange(a):i===`month`&&n.onMonthChange(a))}),e.eventsAttached=!0)},r=new Map;if(pe)for(let e of Ee)for(let t of e.cells)r.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:_e(t.date,F),isToday:_e(t.date,L),disabled:!de(t.date)});let s={rest:w,rootClassName:Pe,currentMode:I,currentValue:U(F),headerTitle:Ie,todayLabel:Le,previousDisabled:Ue,nextDisabled:We,todayDisabled:Ge,yearOptions:X.map(e=>({value:e,disabled:!K(W(e,F.getMonth(),1))})),monthOptions:Ne,weekdayLabels:we,dateRows:Ee,rowClassName:Fe,showWeek:c,viewLabel:He,weekButtonLabel:Ve,todayButtonLabel:Re,monthButtonLabel:ze,yearButtonLabel:Be,todayMarkerLabel:Z,dateCellStates:r,patchKey:[I,F.getFullYear(),F.getMonth(),a?`full`:`card`,c?`week`:`day`,Pe,Fe,Z,Ve,ne(X.map(e=>({value:e,disabled:!K(W(e,F.getMonth(),1))})),Ne,r),Ue?`prev-off`:`prev-on`,We?`next-off`:`next-on`,Ge?`today-off`:`today-on`].join(`|`),selectedKey:be(F),onPrevious:()=>Q(I===`month`?J(F,-1):Y(F,-1),`customize`),onToday:()=>Q(L,`customize`),onNext:()=>Q(I===`month`?J(F,1):Y(F,1),`customize`),onYearChange:e=>Q(ve(F,e),`customize`),onMonthChange:e=>Q(ye(F,e),`customize`),onModeMonth:()=>Ye(`month`),onModeYear:()=>Ye(`year`),onDateSelect:e=>Q(e,`date`),onMonthSelect:e=>Q(e,`month`)};return i(()=>{e.host&&e.host.replaceChildren(),e.lastSnapshot=null}),t(),e.host?(n(),e.lastSnapshot&&re(e.lastSnapshot,s)?ie(e.host,e.lastSnapshot,s):e.host.innerHTML=oe(s),e.lastSnapshot=s,{__rue_host_node:e.host}):se(s)}return T(`div`,{...w,"data-testid":w[`data-testid`],"data-rue-calendar-root":`true`,"data-rue-calendar-mode":I,className:Pe,children:[y?y(Xe):T(`div`,{className:`border-b border-base-300/70 ${a?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[T(`div`,{children:[E(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),E(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:Ie}),E(`div`,{className:`mt-1 text-xs text-base-content/60`,children:Le})]}),T(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":H?`上一页`:`Previous`,disabled:Ue,onClick:()=>Q(I===`month`?J(F,-1):Y(F,-1),`customize`),children:E(`span`,{"aria-hidden":`true`,children:`<`})}),E(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:Ge,onClick:()=>Q(L,`customize`),children:Re}),E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":H?`下一页`:`Next`,disabled:We,onClick:()=>Q(I===`month`?J(F,1):Y(F,1),`customize`),children:E(`span`,{"aria-hidden":`true`,children:`>`})})]}),E(`select`,{className:`select select-sm min-w-24`,value:F.getFullYear(),onChange:e=>Xe.onYearChange(Number(e.currentTarget.value)),children:X.map(e=>E(`option`,{value:e,disabled:!K(W(e,F.getMonth(),1)),children:e},e))}),E(`select`,{className:`select select-sm min-w-24`,value:F.getMonth(),disabled:I===`year`,onChange:e=>Xe.onMonthChange(Number(e.currentTarget.value)),children:Ne.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),T(`div`,{className:`join`,children:[E(`button`,{type:`button`,"data-rue-calendar-mode-switch":`month`,className:`btn btn-sm join-item ${I===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>Ye(`month`),children:ze}),E(`button`,{type:`button`,"data-rue-calendar-mode-switch":`year`,className:`btn btn-sm join-item ${I===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>Ye(`year`),children:Be})]})]})]}),T(`div`,{className:a?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[T(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[E(`div`,{className:`badge badge-outline badge-sm`,children:He}),c&&I===`month`?E(`div`,{className:`badge badge-soft badge-sm`,children:Ve}):null]}),I===`month`?T(`div`,{className:`space-y-2`,children:[T(`div`,{className:Fe,children:[c?E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:Ve}):null,we.map(e=>E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),E(`div`,{role:`grid`,className:`space-y-2`,children:Ee.map((e,t)=>T(`div`,{role:`row`,className:Fe,children:[c?E(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":e.week,children:e.week}):null,e.cells.map((n,r)=>{let i=_e(n.date,F),o=_e(n.date,L),s=!de(n.date),c=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${a?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;if(i?c+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:s?c+=` border-base-300/70 bg-base-200/50 text-base-content/35`:n.inView?c+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:c+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,o&&!i&&(c+=` ring-1 ring-primary/20`),!Ke)return E(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":i?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>Q(n.date,`date`),children:T(`span`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})},n.key);let l=E(`div`,{className:`flex h-full flex-col gap-2`,children:T(`div`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})}),u=_?.(U(n.date),{type:`date`,originNode:l,today:U(L),selected:i,isToday:o,inView:n.inView,disabled:s,row:t,column:r,week:e.week})??m?.(U(n.date)),d=T(`div`,{className:`flex h-full flex-col gap-2`,children:[T(`div`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]}),E(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${i?`opacity-90`:`opacity-75`}`,children:u})]}),f=v?.(U(n.date),{type:`date`,originNode:d,today:U(L),selected:i,isToday:o,inView:n.inView,disabled:s,row:t,column:r,week:e.week})??p?.(U(n.date))??d;return E(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":i?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>Q(n.date,`date`),children:f},n.key)})]},e.key))})]}):E(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:Ne.map((e,t)=>{let n=W(F.getFullYear(),e.value,1),r=q(n,F),i=q(n,L),o=e.disabled===!0,s=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${a?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;if(r?s+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:o?s+=` border-base-300/70 bg-base-200/50 text-base-content/35`:s+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,i&&!r&&(s+=` ring-1 ring-primary/20`),!qe)return E(`button`,{type:`button`,"data-rue-calendar-month":`${F.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":r?`true`:`false`,disabled:o,className:s,onClick:()=>Q(n,`month`),children:T(`span`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),i?E(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})},`${F.getFullYear()}-${e.value}`);let c=E(`div`,{className:`flex h-full flex-col gap-2`,children:T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),i?E(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})}),l=_?.(U(n),{type:`month`,originNode:c,today:U(L),selected:r,isToday:i,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??g?.(U(n)),u=T(`div`,{className:`flex h-full flex-col gap-2`,children:[T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),i?E(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]}),E(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${r?`opacity-90`:`opacity-75`}`,children:l})]}),d=v?.(U(n),{type:`month`,originNode:u,today:U(L),selected:r,isToday:i,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??h?.(U(n))??u;return E(`button`,{type:`button`,"data-rue-calendar-month":`${F.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":r?`true`:`false`,disabled:o,className:s,onClick:()=>Q(n,`month`),children:d},`${F.getFullYear()}-${e.value}`)})})]})]})},{Cally:({className:e,children:t,...n})=>E(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:M(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>E(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>E(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:M(`pika-single`,t)})}),Ne=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),Pe=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Fe=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},Ie=e=>e?typeof e==`string`?e:Pe(e):`未选择`,Le=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Re=[Fe(`2026-04-01`),Fe(`2026-05-31`)],ze=e=>e.getDay()===0||e.getDay()===6||Ne.has(Pe(e)),Be=()=>{let{selectedValue:e,selectedSource:n,panelMode:i,panelState:a,handleChange:c,handlePanelChange:v,handleSelect:y}=C(`useSetup:0:0`,()=>o(()=>{let e=C(`ref:1:0`,()=>s(`2026-04-12`)),t=C(`ref:1:1`,()=>s(`date`)),n=C(`ref:1:2`,()=>s(`month`)),i=C(`ref:1:3`,()=>s(Le(Fe(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelMode:n,panelState:i,handleChange:C(`useCallback:1:4`,()=>r(t=>{e.value=Pe(t)},[])),handlePanelChange:C(`useCallback:1:5`,()=>r((e,t)=>{i.value=Le(e,t)},[])),handleSelect:C(`useCallback:1:6`,()=>r((e,n)=>{t.value=n.source},[]))}}));return m(r=>{let o=t(`div`,r);p(o,`space-y-4`);let s=f(`rue:component:anchor`);u(o,s),d(()=>{let t=x(X,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:i.value,showWeek:!0,validRange:Re,disabledDate:ze,onChange:c,onPanelChange:(e,t)=>{i.value=t,v(e,t)},onSelect:y});l(()=>g(t,o,s))});let m=t(`div`,o);u(o,m),p(m,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let b=t(`div`,m);u(m,b),p(b,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let C=t(`div`,b);u(b,C),p(C,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),u(C,h(`当前值`));let w=t(`div`,b);u(b,w),p(w,`mt-1 text-sm font-medium`);let T=f(`rue:slot:anchor`);u(w,T),d(()=>{let t=Ie(e.value);l(()=>g(t,w,T))});let E=t(`div`,m);u(m,E),p(E,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let D=t(`div`,E);u(E,D),p(D,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),u(D,h(`选择来源`));let O=t(`div`,E);u(E,O),p(O,`mt-1 text-sm font-medium`);let k=S(O);u(O,k),d(()=>{_(k,n.value)});let A=t(`div`,m);u(m,A),p(A,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let j=t(`div`,A);u(A,j),p(j,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),u(j,h(`面板状态`));let M=t(`div`,A);u(A,M),p(M,`mt-1 text-sm font-medium`);let N=S(M);u(M,N),d(()=>{_(N,a.value)});let P=t(`p`,o);return u(o,P),p(P,`m-0 text-xs text-base-content/70`),u(P,h(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),o})},Ve=null,Z=null,He=X.Cally,Ue=X.Month,We=X.PikaSingle,Ge=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,Ke=async()=>{typeof window>`u`||typeof customElements>`u`||(Ve||=(async()=>{let e=Ge();customElements.get(`calendar-date`)||await(e?.cally?e.cally():D(()=>import(`./cally-DJuUsN-V.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await Ve)},qe=async()=>{if(!Z){let t=Ge();Z=(t?.pikaday?t.pikaday():D(()=>import(`./pikaday-CH9Gq8FZ.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return Z},Je=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Q=(e,t=`未选择`)=>e||t,Ye=e=>e||`Pick a date`,Xe=e=>m(n=>{let r=t(`div`,n);p(r,`flex flex-wrap gap-2 text-xs`);let i=t(`span`,r);u(r,i),d(()=>{p(i,String(`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`))});let a=f(`rue:slot:anchor`);u(i,a),d(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;l(()=>g(t,i,a))});let o=f(`rue:slot:anchor`);return u(r,o),d(()=>{let n=e.error?m(()=>{let n=c(),r=t(`span`,n);u(n,r),p(r,`badge badge-error badge-soft`);let i=f(`rue:slot:anchor`);return u(r,i),d(()=>{let t=e.error;l(()=>g(t,r,i))}),n}):``;l(()=>g(n,r,o))}),r}),Ze=()=>m(e=>{let n=t(`svg`,e);y(n,`aria-label`,`Previous`),p(n,`fill-current size-4`),y(n,`slot`,`previous`),y(n,`xmlns`,`http://www.w3.org/2000/svg`),y(n,`viewBox`,`0 0 24 24`);let r=t(`path`,n);return u(n,r),y(r,`fill`,`currentColor`),y(r,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),n}),Qe=()=>m(e=>{let n=t(`svg`,e);y(n,`aria-label`,`Next`),p(n,`fill-current size-4`),y(n,`slot`,`next`),y(n,`xmlns`,`http://www.w3.org/2000/svg`),y(n,`viewBox`,`0 0 24 24`);let r=t(`path`,n);return u(n,r),y(r,`fill`,`currentColor`),y(r,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),n}),$e=()=>{let{calendarRef:e,cleanupRef:r,selectedValue:i,ready:a,error:_}=C(`useSetup:0:0`,()=>o(()=>{let e=C(`useRef:1:0`,()=>n()),t=C(`useRef:1:1`,()=>n(()=>{})),r=C(`ref:1:2`,()=>s(`2026-04-12`)),i=C(`ref:1:3`,()=>s(!1)),a=C(`ref:1:4`,()=>s(``));return v(()=>{let n=!0;Ke().then(()=>{if(!n)return;i.value=!0;let a=e.current;if(!a)return;a.value=r.value;let o=()=>{r.value=a.value||``};a.addEventListener(`change`,o),t.current=()=>a.removeEventListener(`change`,o)}).catch(()=>{n&&(a.value=`Cally 加载失败`)}),b(()=>{n=!1})}),b(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:r,ready:i,error:a}}));return m(n=>{let r=t(`div`,n);p(r,`space-y-3`);let o=f(`rue:component:anchor`);u(r,o);let s=m(()=>{let e=c(),t=f(`rue:component:anchor`);u(e,t),g(x(Ze,{}),e,t);let n=f(`rue:component:anchor`);u(e,n),g(x(Qe,{}),e,n);let r=f(`rue:component:anchor`);return u(e,r),g(x(Ue,{}),e,r),e});d(()=>{let t=x(He,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:s});l(()=>g(t,r,o))});let v=f(`rue:component:anchor`);u(r,v),d(()=>{let e=x(Xe,{ready:a.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:_.value});l(()=>g(e,r,v))});let y=t(`p`,r);u(r,y),p(y,`m-0 text-xs text-base-content/70`),u(y,h(`当前选择：`));let b=f(`rue:slot:anchor`);return u(y,b),d(()=>{let e=Q(i.value);l(()=>g(e,y,b))}),u(y,h(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),r})},et=()=>{let{calendarRef:e,cleanupRef:r,selectedValue:i,open:_,ready:S,error:w}=C(`useSetup:0:0:dup1`,()=>o(()=>{let e=C(`useRef:1:5`,()=>n()),t=C(`useRef:1:6`,()=>n(()=>{})),r=C(`ref:1:7`,()=>s(``)),i=C(`ref:1:8`,()=>s(!1)),a=C(`ref:1:9`,()=>s(!1)),o=C(`ref:1:10`,()=>s(``));return v(()=>{let n=!0;Ke().then(()=>{if(!n)return;a.value=!0;let o=e.current;if(!o)return;o.value=r.value;let s=()=>{r.value=o.value||``,i.value=!1};o.addEventListener(`change`,s),t.current=()=>o.removeEventListener(`change`,s)}).catch(()=>{n&&(o.value=`Cally 加载失败`)}),b(()=>{n=!1})}),b(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:r,open:i,ready:a,error:o}}));return m(n=>{let r=t(`div`,n);p(r,`space-y-3`);let o=t(`div`,r);u(r,o),p(o,`flex flex-wrap items-center gap-3`);let s=t(`button`,o);u(o,s),y(s,`type`,`button`),y(s,`data-testid`,`cally-picker-button`),p(s,`input input-bordered w-fit cursor-pointer`),a(s,`click`,()=>{_.value=!_.value});let v=f(`rue:slot:anchor`);u(s,v),d(()=>{let e=Ye(i.value);l(()=>g(e,s,v))});let b=t(`span`,o);u(o,b),p(b,`text-xs text-base-content/70`),u(b,h(`当前选择：`));let C=f(`rue:slot:anchor`);u(b,C),d(()=>{let e=Q(i.value);l(()=>g(e,b,C))});let T=t(`div`,r);u(r,T),y(T,`data-testid`,`cally-picker-panel`),d(()=>{p(T,String(`inline-block rounded-box bg-base-100 p-3 shadow-lg ${_.value?``:`hidden`}`))});let E=f(`rue:component:anchor`);u(T,E);let D=m(()=>{let e=c(),t=f(`rue:component:anchor`);u(e,t),g(x(Ze,{}),e,t);let n=f(`rue:component:anchor`);u(e,n),g(x(Qe,{}),e,n);let r=f(`rue:component:anchor`);return u(e,r),g(x(Ue,{}),e,r),e});d(()=>{let t=x(He,{ref:e,"data-testid":`cally-picker-calendar`,children:D});l(()=>g(t,T,E))});let O=f(`rue:component:anchor`);u(r,O),d(()=>{let e=x(Xe,{ready:S.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:w.value});l(()=>g(e,r,O))});let k=t(`p`,r);return u(r,k),p(k,`m-0 text-xs text-base-content/70`),u(k,h(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),r})},tt=()=>{let{inputRef:e,instanceRef:r,selectedValue:i,ready:a,error:c}=C(`useSetup:0:0:dup2`,()=>o(()=>{let e=C(`useRef:1:11`,()=>n()),t=C(`useRef:1:12`,()=>n()),r=C(`ref:1:13`,()=>s(``)),i=C(`ref:1:14`,()=>s(!1)),a=C(`ref:1:15`,()=>s(``));return v(()=>{let n=!0;qe().then(a=>{if(!n)return;let o=e.current;o&&(t.current=new a({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>Je(e),onSelect:e=>{r.value=o.value||Je(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),r.value=o.value||`2026-04-12`,i.value=!0)}).catch(()=>{n&&(a.value=`Pikaday 加载失败`)}),b(()=>{n=!1})}),b(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:r,ready:i,error:a}}));return m(n=>{let r=t(`div`,n);p(r,`space-y-3`);let o=f(`rue:component:anchor`);u(r,o),d(()=>{let t=x(We,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});l(()=>g(t,r,o))});let s=f(`rue:component:anchor`);u(r,s),d(()=>{let e=x(Xe,{ready:a.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:c.value});l(()=>g(e,r,s))});let m=t(`p`,r);u(r,m),p(m,`m-0 text-xs text-base-content/70`),u(m,h(`当前选择：`));let _=f(`rue:slot:anchor`);u(m,_),d(()=>{let e=Q(i.value);l(()=>g(e,m,_))});let v=t(`p`,r);return u(r,v),p(v,`m-0 text-xs text-base-content/70`),u(v,h(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),r})},nt=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],rt=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],it={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},at={2:12,3:28,4:18,8:43},ot={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},st={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},ct=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,lt=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},ut=e=>e?typeof e==`string`?e:ct(e):`未选择`,dt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`;lt(`2026-04-01`),lt(`2026-05-31`),X.Cally,X.Month,X.PikaSingle;var $=e=>m(n=>{let r=t(`div`,n);p(r,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let i=t(`span`,r);u(r,i),p(i,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let a=f(`rue:slot:anchor`);u(i,a),d(()=>{let t=e.label;l(()=>g(t,i,a))});let o=t(`span`,r);u(r,o),p(o,`text-sm font-medium`);let s=S(o);return u(o,s),d(()=>{_(s,e.value)}),r}),ft=e=>m(n=>{let r=t(`div`,n);p(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=t(`table`,r);u(r,i),p(i,`table table-zebra`);let a=t(`thead`,i);u(i,a);let o=t(`tr`,a);u(a,o);let s=t(`th`,o);u(o,s),u(s,h(`属性`));let _=t(`th`,o);u(o,_),u(_,h(`说明`));let v=t(`th`,o);u(o,v),u(v,h(`类型`));let b=t(`th`,o);u(o,b),u(b,h(`默认值`));let x=t(`tbody`,i);u(i,x);let S=f(`rue:list:start`),C=f(`rue:list:end`);u(x,S),u(x,C);let T=new Map;return d(()=>{T=w({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,n,r,i,a)=>{g(m(()=>{let n=c(),r=t(`tr`,n);u(n,r),d(()=>{y(r,`key`,String(e.prop))});let i=t(`td`,r);u(r,i);let a=t(`code`,i);u(i,a);let o=f(`rue:slot:anchor`);u(a,o),d(()=>{let t=e.prop;l(()=>g(t,a,o))});let s=t(`td`,r);u(r,s);let p=f(`rue:slot:anchor`);u(s,p),d(()=>{let t=e.description;l(()=>g(t,s,p))});let m=t(`td`,r);u(r,m);let h=t(`code`,m);u(m,h);let _=f(`rue:slot:anchor`);u(h,_),d(()=>{let t=e.type;l(()=>g(t,h,_))});let v=t(`td`,r);u(r,v);let b=t(`code`,v);u(v,b);let x=f(`rue:slot:anchor`);return u(b,x),d(()=>{let t=e.defaultValue;l(()=>g(t,b,x))}),n}),n,r)}})}),r}),pt=e=>m(n=>{let r=t(`div`,n);p(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let i=t(`table`,r);u(r,i),p(i,`table table-zebra`);let a=t(`thead`,i);u(i,a);let o=t(`tr`,a);u(a,o);let s=t(`th`,o);u(o,s),u(s,h(`导出`));let _=t(`th`,o);u(o,_),u(_,h(`说明`));let v=t(`tbody`,i);u(i,v);let b=f(`rue:list:start`),x=f(`rue:list:end`);u(v,b),u(v,x);let S=new Map;return d(()=>{S=w({items:e.rows||[],getKey:(e,t)=>e.name,elements:S,parent:v,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,n,r,i,a)=>{g(m(()=>{let n=c(),r=t(`tr`,n);u(n,r),d(()=>{y(r,`key`,String(e.name))});let i=t(`td`,r);u(r,i);let a=t(`code`,i);u(i,a);let o=f(`rue:slot:anchor`);u(a,o),d(()=>{let t=e.name;l(()=>g(t,a,o))});let s=t(`td`,r);u(r,s);let p=f(`rue:slot:anchor`);return u(s,p),d(()=>{let t=e.description;l(()=>g(t,s,p))}),n}),n,r)}})}),r}),mt=e=>{let{shouldLoadPreview:r,preloadTimer:i}=C(`useSetup:0:0`,()=>o(()=>{let t=C(`ref:1:0`,()=>s(e.previewLoadDelay==null)),r=C(`useRef:1:1`,()=>n(null));return v(()=>{e.previewLoadDelay==null||t.value||(r.current=window.setTimeout(()=>{t.value=!0,r.current=null},e.previewLoadDelay))}),b(()=>{r.current!=null&&(window.clearTimeout(r.current),r.current=null)}),{shouldLoadPreview:t,preloadTimer:r}}));return m(n=>{let i=t(`div`,n);p(i,`component-preview not-prose my-6 text-base-content lg:my-12`);let a=t(`div`,i);u(i,a),p(a,`flex flex-wrap items-start justify-between gap-3`);let o=t(`div`,a);u(a,o);let s=t(`h2`,o);u(o,s),p(s,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(s,h(`# `));let _=f(`rue:slot:anchor`);u(s,_),d(()=>{let t=e.title;l(()=>g(t,s,_))});let v=f(`rue:slot:anchor`);u(o,v),d(()=>{let n=e.summary?m(()=>{let n=c(),r=t(`p`,n);u(n,r),p(r,`m-0 text-sm opacity-70`);let i=f(`rue:slot:anchor`);return u(r,i),d(()=>{let t=e.summary;l(()=>g(t,r,i))}),n}):``;l(()=>g(n,o,v))});let y=f(`rue:component:anchor`);u(i,y),d(()=>{let t=x(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});l(()=>g(t,i,y))});let b=f(`rue:slot:anchor`);return u(i,b),d(()=>{let n=e.tab.value===`preview`?r.value?j(e.title,e.preview):m(()=>{let n=c(),r=t(`div`,n);u(n,r),p(r,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let i=t(`div`,r);u(r,i),p(i,`badge badge-outline badge-sm`),u(i,h(`Preview`));let a=t(`p`,r);u(r,a),p(a,`mb-0 mt-3 text-sm text-base-content/72`);let o=f(`rue:slot:anchor`);return u(a,o),d(()=>{let t=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;l(()=>g(t,a,o))}),n}):m(()=>{let t=c(),n=f(`rue:component:anchor`);return u(t,n),d(()=>{let r=x(A,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});l(()=>g(r,t,n))}),t});l(()=>g(n,i,b))}),i})},ht=e=>m(n=>{let r=t(`div`,n);p(r,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let i=t(`div`,r);u(r,i),p(i,`badge badge-outline badge-sm`);let a=f(`rue:slot:anchor`);u(i,a),d(()=>{let t=e.badge;l(()=>g(t,i,a))});let o=t(`h3`,r);u(r,o),p(o,`mt-3 mb-1 text-base font-semibold`);let s=f(`rue:slot:anchor`);u(o,s),d(()=>{let t=e.title;l(()=>g(t,o,s))});let c=t(`p`,r);u(r,c),p(c,`m-0 text-sm text-base-content/70`);let m=f(`rue:slot:anchor`);return u(c,m),d(()=>{let t=e.detail;l(()=>g(t,c,m))}),r}),gt=()=>{let{selectedValue:e}=C(`useSetup:0:0:dup1`,()=>o(()=>({selectedValue:C(`ref:1:2`,()=>s(`2026-04-15`))})));return m(n=>{let r=t(`div`,n);p(r,`space-y-4`);let i=f(`rue:component:anchor`);u(r,i),d(()=>{let t=x(X,{"data-testid":`notice-calendar`,locale:`zh-CN`,defaultValue:e.value,onChange:t=>{e.value=ct(t)},cellRender:(e,t)=>{if(t.type===`month`){let t=at[e.getMonth()];return t?T(`div`,{className:`space-y-1`,children:[E(`div`,{className:`text-lg font-semibold leading-none`,children:t}),E(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=it[ct(e)]??[];return n.length?T(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>E(`div`,{className:`badge badge-soft badge-xs ${st[e.tone]}`,children:e.label},e.label)),n.length>2?T(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});l(()=>g(t,r,i))});let a=t(`div`,r);u(r,a),p(a,`grid gap-3 md:grid-cols-3`);let o=f(`rue:component:anchor`);u(a,o),d(()=>{let t=x($,{label:`当前日期`,value:ut(e.value)});l(()=>g(t,a,o))});let s=f(`rue:component:anchor`);u(a,s),d(()=>{let e=x($,{label:`4 月 15 日事件`,value:`${it[`2026-04-15`]?.length??0} 条`});l(()=>g(e,a,s))});let c=f(`rue:component:anchor`);return u(a,c),d(()=>{let e=x($,{label:`9 月 backlog`,value:`${at[8]} 项`});l(()=>g(e,a,c))}),r})},_t=()=>{let{selectedValue:e}=C(`useSetup:0:0:dup2`,()=>o(()=>({selectedValue:C(`ref:1:3`,()=>s(`2026-09-18`))})));return m(n=>{let r=t(`div`,n);p(r,`space-y-4`);let i=t(`div`,r);u(r,i),p(i,`grid gap-4`);let a=t(`div`,i);u(i,a),p(a,`max-w-full overflow-x-auto`);let o=f(`rue:component:anchor`);u(a,o),d(()=>{let t=x(X,{"data-testid":`card-calendar`,className:`w-fit max-w-none min-w-[34rem]`,locale:`zh-CN`,fullscreen:!1,defaultValue:e.value,onChange:t=>{e.value=ct(t)},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=ot[ct(e)];return n==null?t.originNode:T(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),T(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),T(`div`,{className:`space-y-1`,children:[E(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:E(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),E(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});l(()=>g(t,a,o))});let s=t(`div`,i);u(i,s),p(s,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let c=t(`div`,s);u(s,c),p(c,`badge badge-secondary badge-soft`),u(c,h(`Card Mode`));let m=t(`h3`,s);u(s,m),p(m,`mt-3 mb-1 text-base font-semibold`),u(m,h(`容量面板`));let _=t(`p`,s);u(s,_),p(_,`m-0 text-sm text-base-content/70`),u(_,h(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let v=t(`div`,s);u(s,v),p(v,`mt-4 space-y-3`);let y=f(`rue:component:anchor`);u(v,y),d(()=>{let t=x($,{label:`当前日期`,value:ut(e.value)});l(()=>g(t,v,y))});let b=f(`rue:component:anchor`);u(v,b),g(x($,{label:`高负载日`,value:`9/18 · 92%`}),v,b);let S=f(`rue:component:anchor`);return u(v,S),g(x($,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),v,S),r})},vt=()=>{let{selectedValue:e,panelMode:n,actionSource:r}=C(`useSetup:0:0:dup3`,()=>o(()=>({selectedValue:C(`ref:1:4`,()=>s(`2026-07-04`)),panelMode:C(`ref:1:5`,()=>s(`month`)),actionSource:C(`ref:1:6`,()=>s(`date`))})));return m(i=>{let a=t(`div`,i);p(a,`space-y-4`);let o=f(`rue:component:anchor`);u(a,o),d(()=>{let t=x(X,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,defaultValue:e.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>T(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[T(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[T(`div`,{children:[E(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),E(`div`,{className:`mt-1 text-base font-semibold`,children:dt(e,t)})]}),T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),E(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),T(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[E(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>E(`option`,{value:e,children:e},e))}),E(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=ct(t)},onPanelChange:(e,t)=>{n.value=t},onSelect:(e,t)=>{r.value=t.source}});l(()=>g(t,a,o))});let s=t(`div`,a);u(a,s),p(s,`grid gap-3 md:grid-cols-3`);let c=f(`rue:component:anchor`);u(s,c),d(()=>{let t=x($,{label:`当前日期`,value:ut(e.value)});l(()=>g(t,s,c))});let m=f(`rue:component:anchor`);u(s,m),d(()=>{let e=x($,{label:`当前模式`,value:n.value});l(()=>g(e,s,m))});let h=f(`rue:component:anchor`);return u(s,h),d(()=>{let e=x($,{label:`最近来源`,value:r.value});l(()=>g(e,s,h))}),a})},yt=`import { ref, useCallback } from '@rue-js/rue'
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
}`,bt=`import { ref } from '@rue-js/rue'
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
}`,xt=`import { ref } from '@rue-js/rue'
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
}`,St=`import { ref } from '@rue-js/rue'
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
}`,Ct=`import 'cally'
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
}`,wt=`import 'cally'
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
}`,Tt=()=>{let{tabBasic:e,tabNotice:n,tabCard:r,tabHeader:i,tabCallyCalendar:a,tabCallyDatePicker:_,tabPikaday:v}=C(`useSetup:0:0:dup4`,()=>o(()=>({tabBasic:C(`ref:1:7`,()=>s(`preview`)),tabNotice:C(`ref:1:8`,()=>s(`preview`)),tabCard:C(`ref:1:9`,()=>s(`preview`)),tabHeader:C(`ref:1:10`,()=>s(`preview`)),tabCallyCalendar:C(`ref:1:11`,()=>s(`preview`)),tabCallyDatePicker:C(`ref:1:12`,()=>s(`preview`)),tabPikaday:C(`ref:1:13`,()=>s(`preview`))})));return m(o=>{let s=c(),y=f(`rue:component:anchor`);return u(s,y),g(x(k,{children:m(()=>{let o=c(),s=t(`div`,o);u(o,s),p(s,`prose prose-sm max-w-none md:prose-base`);let m=t(`h1`,s);u(s,m),u(m,h(`Calendar 日历`));let y=t(`p`,s);u(s,y),p(y,`mt-3 mb-3 text-sm`),u(y,h(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let b=t(`div`,s);u(s,b),p(b,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let S=f(`rue:component:anchor`);u(b,S),g(x(ht,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),b,S);let C=f(`rue:component:anchor`);u(b,C),g(x(ht,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),b,C);let w=f(`rue:component:anchor`);u(b,w),g(x(ht,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),b,w);let T=f(`rue:component:anchor`);u(s,T),d(()=>{let t=x(mt,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:Be,code:yt});l(()=>g(t,s,T))});let E=f(`rue:component:anchor`);u(s,E),d(()=>{let e=x(mt,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:n,preview:gt,code:bt,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});l(()=>g(e,s,E))});let D=f(`rue:component:anchor`);u(s,D),d(()=>{let e=x(mt,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:r,preview:_t,code:xt,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});l(()=>g(e,s,D))});let O=f(`rue:component:anchor`);u(s,O),d(()=>{let e=x(mt,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:i,preview:vt,code:St,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});l(()=>g(e,s,O))});let k=f(`rue:component:anchor`);u(s,k),d(()=>{let e=x(mt,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:a,preview:$e,code:Ct,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`});l(()=>g(e,s,k))});let A=f(`rue:component:anchor`);u(s,A),d(()=>{let e=x(mt,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:_,preview:et,code:wt,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`});l(()=>g(e,s,A))});let j=f(`rue:component:anchor`);u(s,j),d(()=>{let e=x(mt,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:v,preview:tt,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});l(()=>g(e,s,j))});let M=t(`section`,s);u(s,M),p(M,`my-12 space-y-6`);let N=t(`div`,M);u(M,N);let P=t(`h2`,N);u(N,P),p(P,`mb-2`),u(P,h(`API`));let ee=t(`p`,N);u(N,ee),p(ee,`m-0 text-sm text-base-content/70`),u(ee,h(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let te=f(`rue:component:anchor`);u(M,te),d(()=>{let e=x(ft,{rows:nt});l(()=>g(e,M,te))});let F=t(`div`,M);u(M,F);let I=t(`h2`,F);u(F,I),p(I,`mb-2`),u(I,h(`附属导出`));let L=t(`p`,F);u(F,L),p(L,`m-0 text-sm text-base-content/70`),u(L,h(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let R=f(`rue:component:anchor`);return u(M,R),d(()=>{let e=x(pt,{rows:rt});l(()=>g(e,M,R))}),o})}),s,y),s})};export{Tt as default};
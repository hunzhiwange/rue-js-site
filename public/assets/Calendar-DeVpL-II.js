const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-CrmxdIOT.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{$ as t,B as n,Ct as r,Dt as i,G as a,H as o,K as s,O as c,P as l,U as u,W as d,Z as f,a as p,at as m,bt as h,ht as g,i as _,j as v,l as y,s as b,t as x,wt as S,yt as C,z as w}from"./vapor-runtime-C1rlwc61.js";import{a as T,n as E}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as D}from"./preload-helper-CsoeaaUJ.js";import{t as O}from"./Code-BCLFq1E3.js";import{n as k,t as A}from"./src-BLzF0BqW.js";import{n as j}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as M}from"./tabs-BOxm6iIN.js";import{t as N}from"./preview-test-gate-DtKtoe96.js";var ee=(e,t)=>t?`${e} ${t}`:e,te=()=>({date:new Map,month:new Map,year:new Map}),P=new Map,F=new Map,ne=new Map,I=new Map,L=new Map,R=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return t?a+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?a+=` border-base-300/70 bg-base-200/50 text-base-content/35`:r?a+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:a+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},z=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return t?i+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?i+=` border-base-300/70 bg-base-200/50 text-base-content/35`:i+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},B=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},re=(e,t,n)=>`${e.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${t.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${Array.from(n.values()).map(e=>`${e.key}:${e.inView?`1`:`0`}:${e.isToday?`1`:`0`}:${e.disabled?`1`:`0`}`).join(`,`)}`,ie=(e,t)=>e.currentMode===`month`&&t.currentMode===`month`&&e.patchKey===t.patchKey&&e.selectedKey!==t.selectedKey,ae=(e,t,n)=>{let r=new Set([t.selectedKey,n.selectedKey]);for(let t of r){let r=n.dateCellStates.get(t);if(!r)continue;let i=e.querySelector(`[data-rue-calendar-cell="${t}"]`);i&&(i.disabled=r.disabled,i.className=R(!n.rootClassName.includes(`max-w-[24rem]`),r.selected,r.disabled,r.inView,r.isToday),i.setAttribute(`aria-pressed`,r.selected?`true`:`false`),r.isToday?i.setAttribute(`aria-current`,`date`):i.removeAttribute(`aria-current`),i.innerHTML=B(r,n.todayMarkerLabel))}},oe=e=>{let t=!e.rootClassName.includes(`max-w-[24rem]`);return k(`div`,{...e.rest,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":e.currentMode,className:e.rootClassName,children:[k(`div`,{className:`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[k(`div`,{children:[A(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),A(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:e.headerTitle}),A(`div`,{className:`mt-1 text-xs text-base-content/60`,children:e.todayLabel})]}),k(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[k(`div`,{className:`join`,children:[A(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Previous`,disabled:e.previousDisabled,onClick:e.onPrevious,children:A(`span`,{"aria-hidden":`true`,children:`<`})}),A(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:e.todayDisabled,onClick:e.onToday,children:e.todayButtonLabel}),A(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Next`,disabled:e.nextDisabled,onClick:e.onNext,children:A(`span`,{"aria-hidden":`true`,children:`>`})})]}),A(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getFullYear(),onChange:t=>e.onYearChange(Number(t.currentTarget.value)),children:e.yearOptions.map(e=>A(`option`,{value:e.value,disabled:e.disabled,children:e.value},e.value))}),A(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getMonth(),disabled:e.currentMode===`year`,onChange:t=>e.onMonthChange(Number(t.currentTarget.value)),children:e.monthOptions.map(e=>A(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),k(`div`,{className:`join`,children:[A(`button`,{type:`button`,className:`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeMonth,children:e.monthButtonLabel}),A(`button`,{type:`button`,className:`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeYear,children:e.yearButtonLabel})]})]})]}),k(`div`,{className:t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[k(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[A(`div`,{className:`badge badge-outline badge-sm`,children:e.viewLabel}),e.showWeek&&e.currentMode===`month`?A(`div`,{className:`badge badge-soft badge-sm`,children:e.weekButtonLabel}):null]}),e.currentMode===`month`?k(`div`,{className:`space-y-2`,children:[k(`div`,{className:e.rowClassName,children:[e.showWeek?A(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e.weekButtonLabel}):null,e.weekdayLabels.map(e=>A(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),A(`div`,{role:`grid`,className:`space-y-2`,children:e.dateRows.map(n=>k(`div`,{role:`row`,className:e.rowClassName,children:[e.showWeek?A(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":n.week,children:n.week}):null,n.cells.map(n=>{let r=e.dateCellStates.get(n.key);return A(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":r.inView?`true`:`false`,"aria-pressed":r.selected?`true`:`false`,"aria-current":r.isToday?`date`:void 0,disabled:r.disabled,className:R(t,r.selected,r.disabled,r.inView,r.isToday),onClick:()=>e.onDateSelect(n.date),children:k(`span`,{className:`flex items-start justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold ${r.inView?``:`opacity-60`}`,children:r.dayNumber}),r.isToday?A(`span`,{className:`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},n.key)})]},n.key))})]}):A(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:e.monthOptions.map(n=>{let r=H(e.currentValue.getFullYear(),n.value,1),i=me(r,e.currentValue),a=me(r,U(new Date)),o=n.disabled===!0;return A(`button`,{type:`button`,"data-rue-calendar-month":`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:z(t,i,o,a),onClick:()=>e.onMonthSelect(r),children:k(`span`,{className:`flex items-center justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold`,children:n.label}),a?A(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},`${e.currentValue.getFullYear()}-${n.value}`)})})]})]})},se=e=>typeof e==`number`&&e>=0&&e<=6?e:1,V=e=>new Date(e.getTime()),H=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},U=e=>{let t=V(e);return t.setHours(0,0,0,0),t},W=e=>H(e.getFullYear(),e.getMonth(),1),ce=e=>H(e.getFullYear(),e.getMonth()+1,0),G=e=>H(e.getFullYear(),0,1),le=e=>H(e.getFullYear(),11,31),K=(e,t)=>H(e.getFullYear(),e.getMonth(),e.getDate()+t),ue=e=>e instanceof Date&&!Number.isNaN(e.getTime()),de=(e,t=new Date)=>{if(ue(e))return V(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(ue(t))return t}return V(t)},fe=e=>{if(!e)return null;let t=U(de(e[0])),n=U(de(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},pe=(e,t)=>e.getFullYear()===t.getFullYear(),me=(e,t)=>pe(e,t)&&e.getMonth()===t.getMonth(),he=(e,t)=>me(e,t)&&e.getDate()===t.getDate(),q=(e,t)=>{let n=H(e.getFullYear(),e.getMonth()+t,1),r=ce(n).getDate();return H(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},J=(e,t)=>{let n=H(e.getFullYear()+t,e.getMonth(),1),r=ce(n).getDate();return H(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},ge=(e,t)=>J(e,t-e.getFullYear()),_e=(e,t)=>q(e,t-e.getMonth()),ve=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ye=(e,t,n)=>{let r=U(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(V(r))},be=(e,t,n,r)=>{let i=W(e),a=ce(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):ye(o,t,n))return!0;o=K(o,1)}return!1},xe=(e,t,n,r)=>{let i=G(e),a=le(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>H(e.getFullYear(),n,1)).some(e=>r?r(e):be(e,t,n))},Se=e=>{let t=U(e),n=H(K(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=K(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Ce=(e,t)=>{let n=`${e}:${t}`,r=P.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=H(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(K(a,(t+n)%7)));return P.set(n,o),o},we=e=>{let t=F.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(H(2026,t,1)));return F.set(e,r),r},Te=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Ee=(e,t,n,r,i)=>{let a=we(e);return Array.from({length:12},(e,o)=>{let s=H(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):be(s,n,r))}})},De=(e,t)=>{let n=W(e),r=K(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=K(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:Se(i),cells:Array.from({length:7},(t,n)=>{let r=K(i,n);return{key:ve(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},Oe=e=>{let t=ne.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),ne.set(e,t)),t},ke=e=>{let t=I.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),I.set(e,t)),t},Ae=e=>{let t=L.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),L.set(e,t)),t},je=(e,t)=>{for(let[n,r]of t.dateCellStates){let t=e.querySelector(`[data-rue-calendar-cell="${n}"]`);t&&(t.setAttribute(`aria-pressed`,r.selected?`true`:`false`),r.isToday?t.setAttribute(`aria-current`,`date`):t.removeAttribute(`aria-current`))}},Y=Object.assign(({value:e,defaultValue:t,mode:n,fullscreen:i=!0,showWeek:a,locale:o,weekStartsOn:s,validRange:u,disabledDate:d,dateFullCellRender:f,dateCellRender:p,monthFullCellRender:m,monthCellRender:h,cellRender:_,fullCellRender:y,headerRender:b,className:x,onChange:C,onPanelChange:w,onSelect:T,...E})=>{let D=g(de(e??t??new Date)),O=g(n??`month`),j=r(),M=r(),N=r(),P=r(null),F=r(null),ne=r(`__none__`),I=e===void 0?D.value:de(e,D.value),L=n??O.value,R=U(new Date),z=fe(u),B=!!z||!!d,W=o??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),ce=se(s),G=W.toLowerCase().startsWith(`zh`);j.current||=te().date,M.current||=te().month,N.current||=te().year;let le=z?z.start.getTime():null,K=z?z.end.getTime():null,ue=d?d.toString():`__none__`;(P.current!==le||F.current!==K||ne.current!==ue)&&(j.current.clear(),M.current.clear(),N.current.clear(),P.current=le,F.current=K,ne.current=ue);let Se=e=>{if(!B)return!0;let t=ve(U(e)),n=j.current?.get(t);if(n!==void 0)return n;let r=ye(e,z,d);return j.current?.set(t,r),r},we=e=>{if(!B)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=M.current?.get(t);if(n!==void 0)return n;let r=be(e,z,d,Se);return M.current?.set(t,r),r},Y=e=>{if(!B)return!0;let t=`${e.getFullYear()}`,n=N.current?.get(t);if(n!==void 0)return n;let r=xe(e,z,d,we);return N.current?.set(t,r),r},Me=L===`month`,Ne=Me?Ce(W,ce):[],Pe=Me?De(I,ce):[],Fe=Te(I,z),X=Ee(W,I,B?z:null,B?d:void 0,B?we:void 0),Ie=ee(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${i?`rounded-[1.75rem]`:`max-w-[24rem] rounded-[1.5rem]`}`,x),Le=a?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,Re=L===`month`?Oe(W).format(I):ke(W).format(I),ze=Ae(W).format(R),Be=G?`今天`:`Today`,Ve=G?`月`:`Month`,He=G?`年`:`Year`,Ue=G?`周`:`Week`,Z=G?`今`:`Today`,We=L===`month`?G?`月视图`:`Month view`:G?`年视图`:`Year view`,Ge=B?L===`month`?!we(q(I,-1)):!Y(J(I,-1)):!1,Ke=B?L===`month`?!we(q(I,1)):!Y(J(I,1)):!1,qe=B?!Se(R):!1,Je=!!(_||y||p||f),Ye=!!(_||y||h||m),Xe=!b&&!Je&&!Ye,Q=(t,n)=>{let r=U(de(t,I)),i=!he(r,I),a=L===`month`?!me(r,I):!pe(r,I);e===void 0&&(D.value=r),i&&C?.(V(r)),a&&w?.(V(r),L),T?.(V(r),{source:n})},Ze=e=>{e!==L&&(n===void 0&&(O.value=e),w?.(V(I),e))},Qe={value:V(I),type:L,yearOptions:Fe,monthOptions:X,onChange:e=>Q(e,`customize`),onTypeChange:Ze,onYearChange:e=>Q(ge(I,e),`customize`),onMonthChange:e=>Q(_e(I,e),`customize`)};if(Xe){let e=S(()=>({host:null,start:null,end:null,lastSnapshot:null})),t=()=>{if(e.host||typeof document>`u`)return;let t=document.createElement(`span`);t.style.display=`contents`;let n=document.createComment(`rue-calendar-start`),r=document.createComment(`rue-calendar-end`);t.appendChild(n),t.appendChild(r),e.host=t,e.start=n,e.end=r},n=new Map;if(Me)for(let e of Pe)for(let t of e.cells)n.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:he(t.date,I),isToday:he(t.date,R),disabled:!Se(t.date)});let r={rest:E,rootClassName:Ie,currentMode:L,currentValue:V(I),headerTitle:Re,todayLabel:ze,previousDisabled:Ge,nextDisabled:Ke,todayDisabled:qe,yearOptions:Fe.map(e=>({value:e,disabled:!Y(H(e,I.getMonth(),1))})),monthOptions:X,weekdayLabels:Ne,dateRows:Pe,rowClassName:Le,showWeek:a,viewLabel:We,weekButtonLabel:Ue,todayButtonLabel:Be,monthButtonLabel:Ve,yearButtonLabel:He,todayMarkerLabel:Z,dateCellStates:n,patchKey:[L,I.getFullYear(),I.getMonth(),i?`full`:`card`,a?`week`:`day`,Ie,Le,Z,Ue,re(Fe.map(e=>({value:e,disabled:!Y(H(e,I.getMonth(),1))})),X,n),Ge?`prev-off`:`prev-on`,Ke?`next-off`:`next-on`,qe?`today-off`:`today-on`].join(`|`),selectedKey:ve(I),onPrevious:()=>Q(L===`month`?q(I,-1):J(I,-1),`customize`),onToday:()=>Q(R,`customize`),onNext:()=>Q(L===`month`?q(I,1):J(I,1),`customize`),onYearChange:e=>Q(ge(I,e),`customize`),onMonthChange:e=>Q(_e(I,e),`customize`),onModeMonth:()=>Ze(`month`),onModeYear:()=>Ze(`year`),onDateSelect:e=>Q(e,`date`),onMonthSelect:e=>Q(e,`month`)};return c(()=>{e.host&&e.start&&e.end&&v([],e.host,e.start,e.end),e.lastSnapshot=null}),l(()=>(t(),!e.host||!e.start||!e.end?oe(r):(e.lastSnapshot&&ie(e.lastSnapshot,r)?ae(e.host,e.lastSnapshot,r):(v(oe(r),e.host,e.start,e.end),je(e.host,r)),e.lastSnapshot=r,e.host)))}return k(`div`,{...E,"data-testid":E[`data-testid`],"data-rue-calendar-root":`true`,"data-rue-calendar-mode":L,className:Ie,children:[b?b(Qe):k(`div`,{className:`border-b border-base-300/70 ${i?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[k(`div`,{children:[A(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),A(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:Re}),A(`div`,{className:`mt-1 text-xs text-base-content/60`,children:ze})]}),k(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[k(`div`,{className:`join`,children:[A(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":G?`上一页`:`Previous`,disabled:Ge,onClick:()=>Q(L===`month`?q(I,-1):J(I,-1),`customize`),children:A(`span`,{"aria-hidden":`true`,children:`<`})}),A(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:qe,onClick:()=>Q(R,`customize`),children:Be}),A(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":G?`下一页`:`Next`,disabled:Ke,onClick:()=>Q(L===`month`?q(I,1):J(I,1),`customize`),children:A(`span`,{"aria-hidden":`true`,children:`>`})})]}),A(`select`,{className:`select select-sm min-w-24`,value:I.getFullYear(),onChange:e=>Qe.onYearChange(Number(e.currentTarget.value)),children:Fe.map(e=>A(`option`,{value:e,disabled:!Y(H(e,I.getMonth(),1)),children:e},e))}),A(`select`,{className:`select select-sm min-w-24`,value:I.getMonth(),disabled:L===`year`,onChange:e=>Qe.onMonthChange(Number(e.currentTarget.value)),children:X.map(e=>A(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),k(`div`,{className:`join`,children:[A(`button`,{type:`button`,className:`btn btn-sm join-item ${L===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>Ze(`month`),children:Ve}),A(`button`,{type:`button`,className:`btn btn-sm join-item ${L===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>Ze(`year`),children:He})]})]})]}),k(`div`,{className:i?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[k(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[A(`div`,{className:`badge badge-outline badge-sm`,children:We}),a&&L===`month`?A(`div`,{className:`badge badge-soft badge-sm`,children:Ue}):null]}),L===`month`?k(`div`,{className:`space-y-2`,children:[k(`div`,{className:Le,children:[a?A(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:Ue}):null,Ne.map(e=>A(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),A(`div`,{role:`grid`,className:`space-y-2`,children:Pe.map((e,t)=>k(`div`,{role:`row`,className:Le,children:[a?A(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":e.week,children:e.week}):null,e.cells.map((n,r)=>{let a=he(n.date,I),o=he(n.date,R),s=!Se(n.date),c=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${i?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;if(a?c+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:s?c+=` border-base-300/70 bg-base-200/50 text-base-content/35`:n.inView?c+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:c+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,o&&!a&&(c+=` ring-1 ring-primary/20`),!Je)return A(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>Q(n.date,`date`),children:k(`span`,{className:`flex items-start justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?A(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})},n.key);let l=A(`div`,{className:`flex h-full flex-col gap-2`,children:k(`div`,{className:`flex items-start justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?A(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})}),u=_?.(V(n.date),{type:`date`,originNode:l,today:V(R),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:r,week:e.week})??p?.(V(n.date)),d=k(`div`,{className:`flex h-full flex-col gap-2`,children:[k(`div`,{className:`flex items-start justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?A(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]}),A(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${a?`opacity-90`:`opacity-75`}`,children:u})]}),m=y?.(V(n.date),{type:`date`,originNode:d,today:V(R),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:r,week:e.week})??f?.(V(n.date))??d;return A(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>Q(n.date,`date`),children:m},n.key)})]},e.key))})]}):A(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:X.map((e,t)=>{let n=H(I.getFullYear(),e.value,1),r=me(n,I),a=me(n,R),o=e.disabled===!0,s=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${i?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;if(r?s+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:o?s+=` border-base-300/70 bg-base-200/50 text-base-content/35`:s+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,a&&!r&&(s+=` ring-1 ring-primary/20`),!Ye)return A(`button`,{type:`button`,"data-rue-calendar-month":`${I.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":r?`true`:`false`,disabled:o,className:s,onClick:()=>Q(n,`month`),children:k(`span`,{className:`flex items-center justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold`,children:e.label}),a?A(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})},`${I.getFullYear()}-${e.value}`);let c=A(`div`,{className:`flex h-full flex-col gap-2`,children:k(`div`,{className:`flex items-center justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold`,children:e.label}),a?A(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})}),l=_?.(V(n),{type:`month`,originNode:c,today:V(R),selected:r,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??h?.(V(n)),u=k(`div`,{className:`flex h-full flex-col gap-2`,children:[k(`div`,{className:`flex items-center justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold`,children:e.label}),a?A(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]}),A(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${r?`opacity-90`:`opacity-75`}`,children:l})]}),d=y?.(V(n),{type:`month`,originNode:u,today:V(R),selected:r,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??m?.(V(n))??u;return A(`button`,{type:`button`,"data-rue-calendar-month":`${I.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":r?`true`:`false`,disabled:o,className:s,onClick:()=>Q(n,`month`),children:d},`${I.getFullYear()}-${e.value}`)})})]})]})},{Cally:({className:e,children:t,...n})=>A(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:ee(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>A(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>A(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:ee(`pika-single`,t)})}),Me=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),Ne=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Pe=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},Fe=e=>e?typeof e==`string`?e:Ne(e):`未选择`,X=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Ie=[Pe(`2026-04-01`),Pe(`2026-05-31`)],Le=e=>e.getDay()===0||e.getDay()===6||Me.has(Ne(e)),Re=()=>{let{selectedValue:e,selectedSource:r,panelState:c,handleChange:l,handlePanelChange:u,handleSelect:f}=T(`useSetup:0:0`,()=>S(()=>{let e=T(`ref:1:0`,()=>g(`2026-04-12`)),t=T(`ref:1:1`,()=>g(`date`)),n=T(`ref:1:2`,()=>g(X(Pe(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelState:n,handleChange:T(`useCallback:1:3`,()=>h(t=>{e.value=Ne(t)},[])),handlePanelChange:T(`useCallback:1:4`,()=>h((e,t)=>{n.value=X(e,t)},[])),handleSelect:T(`useCallback:1:5`,()=>h((e,n)=>{t.value=n.source},[]))}}));return y(p=>{let h=d(`div`,p);t(h,`space-y-4`);let g=o(`rue:component:anchor`);n(h,g),i(()=>{let t=x(Y,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,showWeek:!0,validRange:Ie,disabledDate:Le,onChange:l,onPanelChange:u,onSelect:f});C(()=>b(t,h,g))});let _=d(`div`,h);n(h,_),t(_,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let v=d(`div`,_);n(_,v),t(v,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let y=d(`div`,v);n(v,y),t(y,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),n(y,a(`当前值`));let S=d(`div`,v);n(v,S),t(S,`mt-1 text-sm font-medium`);let w=o(`rue:slot:anchor`);n(S,w),i(()=>{let t=Fe(e.value);C(()=>b(t,S,w))});let T=d(`div`,_);n(_,T),t(T,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let E=d(`div`,T);n(T,E),t(E,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),n(E,a(`选择来源`));let D=d(`div`,T);n(T,D),t(D,`mt-1 text-sm font-medium`);let O=s(D);n(D,O),i(()=>{m(O,r.value)});let k=d(`div`,_);n(_,k),t(k,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let A=d(`div`,k);n(k,A),t(A,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),n(A,a(`面板状态`));let j=d(`div`,k);n(k,j),t(j,`mt-1 text-sm font-medium`);let M=s(j);n(j,M),i(()=>{m(M,c.value)});let N=d(`p`,h);return n(h,N),t(N,`m-0 text-xs text-base-content/70`),n(N,a(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),h})},ze=null,Be=null,Ve=Y.Cally,He=Y.Month,Ue=Y.PikaSingle,Z=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,We=async()=>{typeof window>`u`||typeof customElements>`u`||(ze||=(async()=>{let e=Z();customElements.get(`calendar-date`)||await(e?.cally?e.cally():D(()=>import(`./cally-D9pAL_9F.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await ze)},Ge=async()=>{if(!Be){let t=Z();Be=(t?.pikaday?t.pikaday():D(()=>import(`./pikaday-CrmxdIOT.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return Be},Ke=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,qe=(e,t=`未选择`)=>e||t,Je=e=>e||`Pick a date`,Ye=e=>y(r=>{let a=d(`div`,r);t(a,`flex flex-wrap gap-2 text-xs`);let s=d(`span`,a);n(a,s),i(()=>{t(s,String(`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`))});let c=o(`rue:slot:anchor`);n(s,c),i(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;C(()=>b(t,s,c))});let l=o(`rue:slot:anchor`);return n(a,l),i(()=>{let r=e.error?y(()=>{let r=u(),a=d(`span`,r);n(r,a),t(a,`badge badge-error badge-soft`);let s=o(`rue:slot:anchor`);return n(a,s),i(()=>{let t=e.error;C(()=>b(t,a,s))}),r}):``;C(()=>b(r,a,l))}),a}),Xe=()=>y(e=>{let r=d(`svg`,e);f(r,`aria-label`,`Previous`),t(r,`fill-current size-4`),f(r,`slot`,`previous`),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`viewBox`,`0 0 24 24`);let i=d(`path`,r);return n(r,i),f(i,`fill`,`currentColor`),f(i,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),r}),Q=()=>y(e=>{let r=d(`svg`,e);f(r,`aria-label`,`Next`),t(r,`fill-current size-4`),f(r,`slot`,`next`),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`viewBox`,`0 0 24 24`);let i=d(`path`,r);return n(r,i),f(i,`fill`,`currentColor`),f(i,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),r}),Ze=()=>{let{calendarRef:e,cleanupRef:s,selectedValue:c,ready:l,error:f}=T(`useSetup:0:0`,()=>S(()=>{let e=T(`useRef:1:0`,()=>r()),t=T(`useRef:1:1`,()=>r(()=>{})),n=T(`ref:1:2`,()=>g(`2026-04-12`)),i=T(`ref:1:3`,()=>g(!1)),a=T(`ref:1:4`,()=>g(``));return _(()=>{let r=!0;We().then(()=>{if(!r)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let o=()=>{n.value=a.value||``};a.addEventListener(`change`,o),t.current=()=>a.removeEventListener(`change`,o)}).catch(()=>{r&&(a.value=`Cally 加载失败`)}),p(()=>{r=!1})}),p(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:i,error:a}}));return y(r=>{let s=d(`div`,r);t(s,`space-y-3`);let p=o(`rue:component:anchor`);n(s,p);let m=y(()=>{let e=u(),t=o(`rue:component:anchor`);n(e,t),b(x(Xe,{}),e,t);let r=o(`rue:component:anchor`);n(e,r),b(x(Q,{}),e,r);let i=o(`rue:component:anchor`);return n(e,i),b(x(He,{}),e,i),e});i(()=>{let t=x(Ve,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:m});C(()=>b(t,s,p))});let h=o(`rue:component:anchor`);n(s,h),i(()=>{let e=x(Ye,{ready:l.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:f.value});C(()=>b(e,s,h))});let g=d(`p`,s);n(s,g),t(g,`m-0 text-xs text-base-content/70`),n(g,a(`当前选择：`));let _=o(`rue:slot:anchor`);return n(g,_),i(()=>{let e=qe(c.value);C(()=>b(e,g,_))}),n(g,a(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),s})},Qe=()=>{let{calendarRef:e,cleanupRef:s,selectedValue:c,open:l,ready:m,error:h}=T(`useSetup:0:0:dup1`,()=>S(()=>{let e=T(`useRef:1:5`,()=>r()),t=T(`useRef:1:6`,()=>r(()=>{})),n=T(`ref:1:7`,()=>g(``)),i=T(`ref:1:8`,()=>g(!1)),a=T(`ref:1:9`,()=>g(!1)),o=T(`ref:1:10`,()=>g(``));return _(()=>{let r=!0;We().then(()=>{if(!r)return;a.value=!0;let o=e.current;if(!o)return;o.value=n.value;let s=()=>{n.value=o.value||``,i.value=!1};o.addEventListener(`change`,s),t.current=()=>o.removeEventListener(`change`,s)}).catch(()=>{r&&(o.value=`Cally 加载失败`)}),p(()=>{r=!1})}),p(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:i,ready:a,error:o}}));return y(r=>{let s=d(`div`,r);t(s,`space-y-3`);let p=d(`div`,s);n(s,p),t(p,`flex flex-wrap items-center gap-3`);let g=d(`button`,p);n(p,g),f(g,`type`,`button`),f(g,`data-testid`,`cally-picker-button`),t(g,`input input-bordered w-fit cursor-pointer`),w(g,`click`,()=>{l.value=!l.value});let _=o(`rue:slot:anchor`);n(g,_),i(()=>{let e=Je(c.value);C(()=>b(e,g,_))});let v=d(`span`,p);n(p,v),t(v,`text-xs text-base-content/70`),n(v,a(`当前选择：`));let S=o(`rue:slot:anchor`);n(v,S),i(()=>{let e=qe(c.value);C(()=>b(e,v,S))});let T=d(`div`,s);n(s,T),f(T,`data-testid`,`cally-picker-panel`),i(()=>{t(T,String(`inline-block rounded-box bg-base-100 p-3 shadow-lg ${l.value?``:`hidden`}`))});let E=o(`rue:component:anchor`);n(T,E);let D=y(()=>{let e=u(),t=o(`rue:component:anchor`);n(e,t),b(x(Xe,{}),e,t);let r=o(`rue:component:anchor`);n(e,r),b(x(Q,{}),e,r);let i=o(`rue:component:anchor`);return n(e,i),b(x(He,{}),e,i),e});i(()=>{let t=x(Ve,{ref:e,"data-testid":`cally-picker-calendar`,children:D});C(()=>b(t,T,E))});let O=o(`rue:component:anchor`);n(s,O),i(()=>{let e=x(Ye,{ready:m.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:h.value});C(()=>b(e,s,O))});let k=d(`p`,s);return n(s,k),t(k,`m-0 text-xs text-base-content/70`),n(k,a(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),s})},$e=()=>{let{inputRef:e,instanceRef:s,selectedValue:c,ready:l,error:u}=T(`useSetup:0:0:dup2`,()=>S(()=>{let e=T(`useRef:1:11`,()=>r()),t=T(`useRef:1:12`,()=>r()),n=T(`ref:1:13`,()=>g(``)),i=T(`ref:1:14`,()=>g(!1)),a=T(`ref:1:15`,()=>g(``));return _(()=>{let r=!0;Ge().then(a=>{if(!r)return;let o=e.current;o&&(t.current=new a({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>Ke(e),onSelect:e=>{n.value=o.value||Ke(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,i.value=!0)}).catch(()=>{r&&(a.value=`Pikaday 加载失败`)}),p(()=>{r=!1})}),p(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:i,error:a}}));return y(r=>{let s=d(`div`,r);t(s,`space-y-3`);let f=o(`rue:component:anchor`);n(s,f),i(()=>{let t=x(Ue,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});C(()=>b(t,s,f))});let p=o(`rue:component:anchor`);n(s,p),i(()=>{let e=x(Ye,{ready:l.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:u.value});C(()=>b(e,s,p))});let m=d(`p`,s);n(s,m),t(m,`m-0 text-xs text-base-content/70`),n(m,a(`当前选择：`));let h=o(`rue:slot:anchor`);n(m,h),i(()=>{let e=qe(c.value);C(()=>b(e,m,h))});let g=d(`p`,s);return n(s,g),t(g,`m-0 text-xs text-base-content/70`),n(g,a(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),s})},et=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],tt=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],nt={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},rt={2:12,3:28,4:18,8:43},it={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},at={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},ot=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,st=e=>e?typeof e==`string`?e:ot(e):`未选择`,ct=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,$=e=>y(r=>{let a=d(`div`,r);t(a,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let c=d(`span`,a);n(a,c),t(c,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let l=o(`rue:slot:anchor`);n(c,l),i(()=>{let t=e.label;C(()=>b(t,c,l))});let u=d(`span`,a);n(a,u),t(u,`text-sm font-medium`);let f=s(u);return n(u,f),i(()=>{m(f,e.value)}),a}),lt=e=>y(r=>{let s=d(`div`,r);t(s,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let c=d(`table`,s);n(s,c),t(c,`table table-zebra`);let l=d(`thead`,c);n(c,l);let p=d(`tr`,l);n(l,p);let m=d(`th`,p);n(p,m),n(m,a(`属性`));let h=d(`th`,p);n(p,h),n(h,a(`说明`));let g=d(`th`,p);n(p,g),n(g,a(`类型`));let _=d(`th`,p);n(p,_),n(_,a(`默认值`));let v=d(`tbody`,c);n(c,v);let x=o(`rue:list:start`),S=o(`rue:list:end`);n(v,x),n(v,S);let w=new Map;return i(()=>{w=E({items:e.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:v,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(e,t,r,a,s)=>{b(y(()=>{let t=u(),r=d(`tr`,t);n(t,r),i(()=>{f(r,`key`,String(e.prop))});let a=d(`td`,r);n(r,a);let s=d(`code`,a);n(a,s);let c=o(`rue:slot:anchor`);n(s,c),i(()=>{let t=e.prop;C(()=>b(t,s,c))});let l=d(`td`,r);n(r,l);let p=o(`rue:slot:anchor`);n(l,p),i(()=>{let t=e.description;C(()=>b(t,l,p))});let m=d(`td`,r);n(r,m);let h=d(`code`,m);n(m,h);let g=o(`rue:slot:anchor`);n(h,g),i(()=>{let t=e.type;C(()=>b(t,h,g))});let _=d(`td`,r);n(r,_);let v=d(`code`,_);n(_,v);let y=o(`rue:slot:anchor`);return n(v,y),i(()=>{let t=e.defaultValue;C(()=>b(t,v,y))}),t}),t,r)}})}),s}),ut=e=>y(r=>{let s=d(`div`,r);t(s,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let c=d(`table`,s);n(s,c),t(c,`table table-zebra`);let l=d(`thead`,c);n(c,l);let p=d(`tr`,l);n(l,p);let m=d(`th`,p);n(p,m),n(m,a(`导出`));let h=d(`th`,p);n(p,h),n(h,a(`说明`));let g=d(`tbody`,c);n(c,g);let _=o(`rue:list:start`),v=o(`rue:list:end`);n(g,_),n(g,v);let x=new Map;return i(()=>{x=E({items:e.rows||[],getKey:(e,t)=>e.name,elements:x,parent:g,before:v,singleRoot:!0,trackIndex:!1,start:_,renderItem:(e,t,r,a,s)=>{b(y(()=>{let t=u(),r=d(`tr`,t);n(t,r),i(()=>{f(r,`key`,String(e.name))});let a=d(`td`,r);n(r,a);let s=d(`code`,a);n(a,s);let c=o(`rue:slot:anchor`);n(s,c),i(()=>{let t=e.name;C(()=>b(t,s,c))});let l=d(`td`,r);n(r,l);let p=o(`rue:slot:anchor`);return n(l,p),i(()=>{let t=e.description;C(()=>b(t,l,p))}),t}),t,r)}})}),s}),dt=e=>y(r=>{let s=d(`div`,r);t(s,`component-preview not-prose my-6 text-base-content lg:my-12`);let c=d(`div`,s);n(s,c),t(c,`flex flex-wrap items-start justify-between gap-3`);let l=d(`div`,c);n(c,l);let f=d(`h2`,l);n(l,f),t(f,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(f,a(`# `));let p=o(`rue:slot:anchor`);n(f,p),i(()=>{let t=e.title;C(()=>b(t,f,p))});let m=o(`rue:slot:anchor`);n(l,m),i(()=>{let r=e.summary?y(()=>{let r=u(),a=d(`p`,r);n(r,a),t(a,`m-0 text-sm opacity-70`);let s=o(`rue:slot:anchor`);return n(a,s),i(()=>{let t=e.summary;C(()=>b(t,a,s))}),r}):``;C(()=>b(r,l,m))});let h=o(`rue:component:anchor`);n(s,h),i(()=>{let t=x(M,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});C(()=>b(t,s,h))});let g=o(`rue:slot:anchor`);return n(s,g),i(()=>{let r=e.tab.value===`preview`?e.shouldLoadPreview&&!e.shouldLoadPreview.value?y(()=>{let r=u(),s=d(`div`,r);n(r,s),t(s,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let c=d(`div`,s);n(s,c),t(c,`badge badge-outline badge-sm`),n(c,a(`Preview`));let l=d(`p`,s);n(s,l),t(l,`mb-0 mt-3 text-sm text-base-content/72`);let f=o(`rue:slot:anchor`);return n(l,f),i(()=>{let t=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;C(()=>b(t,l,f))}),r}):N(e.title,e.preview):y(()=>{let t=u(),r=o(`rue:component:anchor`);return n(t,r),i(()=>{let n=x(O,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});C(()=>b(n,t,r))}),t});C(()=>b(r,s,g))}),s}),ft=e=>y(r=>{let a=d(`div`,r);t(a,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let s=d(`div`,a);n(a,s),t(s,`badge badge-outline badge-sm`);let c=o(`rue:slot:anchor`);n(s,c),i(()=>{let t=e.badge;C(()=>b(t,s,c))});let l=d(`h3`,a);n(a,l),t(l,`mt-3 mb-1 text-base font-semibold`);let u=o(`rue:slot:anchor`);n(l,u),i(()=>{let t=e.title;C(()=>b(t,l,u))});let f=d(`p`,a);n(a,f),t(f,`m-0 text-sm text-base-content/70`);let p=o(`rue:slot:anchor`);return n(f,p),i(()=>{let t=e.detail;C(()=>b(t,f,p))}),a}),pt=()=>{let{selectedValue:e}=T(`useSetup:0:0`,()=>S(()=>({selectedValue:T(`ref:1:0`,()=>g(`2026-04-15`))})));return y(r=>{let a=d(`div`,r);t(a,`space-y-4`);let s=o(`rue:component:anchor`);n(a,s),i(()=>{let t=x(Y,{"data-testid":`notice-calendar`,locale:`zh-CN`,defaultValue:e.value,onChange:t=>{e.value=ot(t)},cellRender:(e,t)=>{if(t.type===`month`){let t=rt[e.getMonth()];return t?k(`div`,{className:`space-y-1`,children:[A(`div`,{className:`text-lg font-semibold leading-none`,children:t}),A(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=nt[ot(e)]??[];return n.length?k(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>A(`div`,{className:`badge badge-soft badge-xs ${at[e.tone]}`,children:e.label},e.label)),n.length>2?k(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});C(()=>b(t,a,s))});let c=d(`div`,a);n(a,c),t(c,`grid gap-3 md:grid-cols-3`);let l=o(`rue:component:anchor`);n(c,l),i(()=>{let t=x($,{label:`当前日期`,value:st(e.value)});C(()=>b(t,c,l))});let u=o(`rue:component:anchor`);n(c,u),i(()=>{let e=x($,{label:`4 月 15 日事件`,value:`${nt[`2026-04-15`]?.length??0} 条`});C(()=>b(e,c,u))});let f=o(`rue:component:anchor`);return n(c,f),i(()=>{let e=x($,{label:`9 月 backlog`,value:`${rt[8]} 项`});C(()=>b(e,c,f))}),a})},mt=()=>{let{selectedValue:e}=T(`useSetup:0:0:dup1`,()=>S(()=>({selectedValue:T(`ref:1:1`,()=>g(`2026-09-18`))})));return y(r=>{let s=d(`div`,r);t(s,`space-y-4`);let c=d(`div`,s);n(s,c),t(c,`grid gap-4`);let l=d(`div`,c);n(c,l),t(l,`max-w-full overflow-x-auto`);let u=o(`rue:component:anchor`);n(l,u),i(()=>{let t=x(Y,{"data-testid":`card-calendar`,className:`w-fit max-w-none min-w-[34rem]`,locale:`zh-CN`,fullscreen:!1,defaultValue:e.value,onChange:t=>{e.value=ot(t)},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=it[ot(e)];return n==null?t.originNode:k(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[k(`div`,{className:`flex items-center justify-between gap-2`,children:[A(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),k(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),k(`div`,{className:`space-y-1`,children:[A(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:A(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),A(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});C(()=>b(t,l,u))});let f=d(`div`,c);n(c,f),t(f,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let p=d(`div`,f);n(f,p),t(p,`badge badge-secondary badge-soft`),n(p,a(`Card Mode`));let m=d(`h3`,f);n(f,m),t(m,`mt-3 mb-1 text-base font-semibold`),n(m,a(`容量面板`));let h=d(`p`,f);n(f,h),t(h,`m-0 text-sm text-base-content/70`),n(h,a(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let g=d(`div`,f);n(f,g),t(g,`mt-4 space-y-3`);let _=o(`rue:component:anchor`);n(g,_),i(()=>{let t=x($,{label:`当前日期`,value:st(e.value)});C(()=>b(t,g,_))});let v=o(`rue:component:anchor`);n(g,v),b(x($,{label:`高负载日`,value:`9/18 · 92%`}),g,v);let y=o(`rue:component:anchor`);return n(g,y),b(x($,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),g,y),s})},ht=()=>{let{selectedValue:e,panelMode:r,actionSource:a}=T(`useSetup:0:0:dup2`,()=>S(()=>({selectedValue:T(`ref:1:2`,()=>g(`2026-07-04`)),panelMode:T(`ref:1:3`,()=>g(`month`)),actionSource:T(`ref:1:4`,()=>g(`date`))})));return y(s=>{let c=d(`div`,s);t(c,`space-y-4`);let l=o(`rue:component:anchor`);n(c,l),i(()=>{let t=x(Y,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,defaultValue:e.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>k(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[k(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[k(`div`,{children:[A(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),A(`div`,{className:`mt-1 text-base font-semibold`,children:ct(e,t)})]}),k(`div`,{className:`join`,children:[A(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),A(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),k(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[A(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>A(`option`,{value:e,children:e},e))}),A(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>A(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=ot(t)},onPanelChange:(e,t)=>{r.value=t},onSelect:(e,t)=>{a.value=t.source}});C(()=>b(t,c,l))});let u=d(`div`,c);n(c,u),t(u,`grid gap-3 md:grid-cols-3`);let f=o(`rue:component:anchor`);n(u,f),i(()=>{let t=x($,{label:`当前日期`,value:st(e.value)});C(()=>b(t,u,f))});let p=o(`rue:component:anchor`);n(u,p),i(()=>{let e=x($,{label:`当前模式`,value:r.value});C(()=>b(e,u,p))});let m=o(`rue:component:anchor`);return n(u,m),i(()=>{let e=x($,{label:`最近来源`,value:a.value});C(()=>b(e,u,m))}),c})},gt=`import { ref, useCallback } from '@rue-js/rue'
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
        showWeek
        validRange={basicCalendarValidRange}
        disabledDate={isBasicCalendarDateDisabled}
        onChange={handleChange}
        onPanelChange={handlePanelChange}
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
}`,_t=`import { ref } from '@rue-js/rue'
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
}`,vt=`import { ref } from '@rue-js/rue'
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
}`,yt=`import { ref } from '@rue-js/rue'
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
}`,bt=`import 'cally'
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
}`,xt=`import 'cally'
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
}`,St=()=>{let{tabBasic:e,tabNotice:s,tabCard:c,tabHeader:l,tabCallyCalendar:f,tabCallyDatePicker:m,tabPikaday:h,shouldLoadNotice:v,shouldLoadCard:w,shouldLoadHeader:E,preloadTimers:D}=T(`useSetup:0:0:dup3`,()=>S(()=>{let e=T(`ref:1:5`,()=>g(`preview`)),t=T(`ref:1:6`,()=>g(`preview`)),n=T(`ref:1:7`,()=>g(`preview`)),i=T(`ref:1:8`,()=>g(`preview`)),a=T(`ref:1:9`,()=>g(`preview`)),o=T(`ref:1:10`,()=>g(`preview`)),s=T(`ref:1:11`,()=>g(`preview`)),c=T(`ref:1:12`,()=>g(!1)),l=T(`ref:1:13`,()=>g(!1)),u=T(`ref:1:14`,()=>g(!1)),d=T(`useRef:1:15`,()=>r([]));return _(()=>{d.current=[window.setTimeout(()=>{c.value=!0},0),window.setTimeout(()=>{l.value=!0},32),window.setTimeout(()=>{u.value=!0},64)]}),p(()=>{for(let e of d.current??[])window.clearTimeout(e);d.current=[]}),{tabBasic:e,tabNotice:t,tabCard:n,tabHeader:i,tabCallyCalendar:a,tabCallyDatePicker:o,tabPikaday:s,shouldLoadNotice:c,shouldLoadCard:l,shouldLoadHeader:u,preloadTimers:d}}));return y(r=>{let p=u(),g=o(`rue:component:anchor`);return n(p,g),b(x(j,{children:y(()=>{let r=u(),p=d(`div`,r);n(r,p),t(p,`prose prose-sm max-w-none md:prose-base`);let g=d(`h1`,p);n(p,g),n(g,a(`Calendar 日历`));let _=d(`p`,p);n(p,_),t(_,`mt-3 mb-3 text-sm`),n(_,a(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let y=d(`div`,p);n(p,y),t(y,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let S=o(`rue:component:anchor`);n(y,S),b(x(ft,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),y,S);let T=o(`rue:component:anchor`);n(y,T),b(x(ft,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),y,T);let D=o(`rue:component:anchor`);n(y,D),b(x(ft,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),y,D);let O=o(`rue:component:anchor`);n(p,O),i(()=>{let t=x(dt,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:A(Re,{}),code:gt});C(()=>b(t,p,O))});let k=o(`rue:component:anchor`);n(p,k),i(()=>{let e=x(dt,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:s,preview:A(pt,{}),code:_t,shouldLoadPreview:v,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});C(()=>b(e,p,k))});let j=o(`rue:component:anchor`);n(p,j),i(()=>{let e=x(dt,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:c,preview:A(mt,{}),code:vt,shouldLoadPreview:w,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});C(()=>b(e,p,j))});let M=o(`rue:component:anchor`);n(p,M),i(()=>{let e=x(dt,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:l,preview:A(ht,{}),code:yt,shouldLoadPreview:E,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});C(()=>b(e,p,M))});let N=o(`rue:component:anchor`);n(p,N),i(()=>{let e=x(dt,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:f,preview:A(Ze,{}),code:bt});C(()=>b(e,p,N))});let ee=o(`rue:component:anchor`);n(p,ee),i(()=>{let e=x(dt,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:m,preview:A(Qe,{}),code:xt});C(()=>b(e,p,ee))});let te=o(`rue:component:anchor`);n(p,te),i(()=>{let e=x(dt,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:h,preview:A($e,{}),lang:`html`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});C(()=>b(e,p,te))});let P=d(`section`,p);n(p,P),t(P,`my-12 space-y-6`);let F=d(`div`,P);n(P,F);let ne=d(`h2`,F);n(F,ne),t(ne,`mb-2`),n(ne,a(`API`));let I=d(`p`,F);n(F,I),t(I,`m-0 text-sm text-base-content/70`),n(I,a(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let L=o(`rue:component:anchor`);n(P,L),i(()=>{let e=x(lt,{rows:et});C(()=>b(e,P,L))});let R=d(`div`,P);n(P,R);let z=d(`h2`,R);n(R,z),t(z,`mb-2`),n(z,a(`附属导出`));let B=d(`p`,R);n(R,B),t(B,`m-0 text-sm text-base-content/70`),n(B,a(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let re=o(`rue:component:anchor`);return n(P,re),i(()=>{let e=x(ut,{rows:tt});C(()=>b(e,P,re))}),r})}),p,g),p})};export{St as default};
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-CModz87D.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{$ as t,A as n,Et as r,G as i,H as a,I as o,J as s,K as c,N as l,St as u,Tt as d,V as f,W as p,_t as m,d as h,kt as g,l as _,o as v,q as y,s as b,st as x,t as S,tt as C,xt as w}from"./vapor-runtime-ACs_OvwU.js";import{a as T,n as E}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as D}from"./preload-helper-CsoeaaUJ.js";import{n as O,t as k}from"./src-B0RvnZVV.js";import{n as A}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as j}from"./Code-CliOXHNE.js";import{t as M}from"./tabs-CPymQe79.js";import{t as N}from"./preview-test-gate-CxnSZVJe.js";var ee=(e,t)=>t?`${e} ${t}`:e,te=()=>({date:new Map,month:new Map,year:new Map}),P=new Map,F=new Map,ne=new Map,I=new Map,L=new Map,R=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return t?a+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?a+=` border-base-300/70 bg-base-200/50 text-base-content/35`:r?a+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:a+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},z=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return t?i+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?i+=` border-base-300/70 bg-base-200/50 text-base-content/35`:i+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},B=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},re=(e,t,n)=>`${e.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${t.map(e=>`${e.value}:${e.disabled?`1`:`0`}`).join(`,`)}|${Array.from(n.values()).map(e=>`${e.key}:${e.inView?`1`:`0`}:${e.isToday?`1`:`0`}:${e.disabled?`1`:`0`}`).join(`,`)}`,ie=(e,t)=>e.currentMode===`month`&&t.currentMode===`month`&&e.patchKey===t.patchKey&&e.selectedKey!==t.selectedKey,ae=(e,t,n)=>{let r=new Set([t.selectedKey,n.selectedKey]);for(let t of r){let r=n.dateCellStates.get(t);if(!r)continue;let i=e.querySelector(`[data-rue-calendar-cell="${t}"]`);i&&(i.disabled=r.disabled,i.className=R(!n.rootClassName.includes(`max-w-[24rem]`),r.selected,r.disabled,r.inView,r.isToday),i.setAttribute(`aria-pressed`,r.selected?`true`:`false`),r.isToday?i.setAttribute(`aria-current`,`date`):i.removeAttribute(`aria-current`),i.innerHTML=B(r,n.todayMarkerLabel))}},oe=e=>{let t=!e.rootClassName.includes(`max-w-[24rem]`);return O(`div`,{...e.rest,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":e.currentMode,className:e.rootClassName,children:[O(`div`,{className:`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[O(`div`,{children:[k(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),k(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:e.headerTitle}),k(`div`,{className:`mt-1 text-xs text-base-content/60`,children:e.todayLabel})]}),O(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Previous`,disabled:e.previousDisabled,onClick:e.onPrevious,children:k(`span`,{"aria-hidden":`true`,children:`<`})}),k(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:e.todayDisabled,onClick:e.onToday,children:e.todayButtonLabel}),k(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":`Next`,disabled:e.nextDisabled,onClick:e.onNext,children:k(`span`,{"aria-hidden":`true`,children:`>`})})]}),k(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getFullYear(),onChange:t=>e.onYearChange(Number(t.currentTarget.value)),children:e.yearOptions.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.value},e.value))}),k(`select`,{className:`select select-sm min-w-24`,value:e.currentValue.getMonth(),disabled:e.currentMode===`year`,onChange:t=>e.onMonthChange(Number(t.currentTarget.value)),children:e.monthOptions.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeMonth,children:e.monthButtonLabel}),k(`button`,{type:`button`,className:`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,onClick:e.onModeYear,children:e.yearButtonLabel})]})]})]}),O(`div`,{className:t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[O(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[k(`div`,{className:`badge badge-outline badge-sm`,children:e.viewLabel}),e.showWeek&&e.currentMode===`month`?k(`div`,{className:`badge badge-soft badge-sm`,children:e.weekButtonLabel}):null]}),e.currentMode===`month`?O(`div`,{className:`space-y-2`,children:[O(`div`,{className:e.rowClassName,children:[e.showWeek?k(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e.weekButtonLabel}):null,e.weekdayLabels.map(e=>k(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),k(`div`,{role:`grid`,className:`space-y-2`,children:e.dateRows.map(n=>O(`div`,{role:`row`,className:e.rowClassName,children:[e.showWeek?k(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":n.week,children:n.week}):null,n.cells.map(n=>{let r=e.dateCellStates.get(n.key);return k(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":r.inView?`true`:`false`,"aria-pressed":r.selected?`true`:`false`,"aria-current":r.isToday?`date`:void 0,disabled:r.disabled,className:R(t,r.selected,r.disabled,r.inView,r.isToday),onClick:()=>e.onDateSelect(n.date),children:O(`span`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${r.inView?``:`opacity-60`}`,children:r.dayNumber}),r.isToday?k(`span`,{className:`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},n.key)})]},n.key))})]}):k(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:e.monthOptions.map(n=>{let r=H(e.currentValue.getFullYear(),n.value,1),i=me(r,e.currentValue),a=me(r,U(new Date)),o=n.disabled===!0;return k(`button`,{type:`button`,"data-rue-calendar-month":`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:z(t,i,o,a),onClick:()=>e.onMonthSelect(r),children:O(`span`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:n.label}),a?k(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:e.todayMarkerLabel}):null]})},`${e.currentValue.getFullYear()}-${n.value}`)})})]})]})},se=e=>typeof e==`number`&&e>=0&&e<=6?e:1,V=e=>new Date(e.getTime()),H=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},U=e=>{let t=V(e);return t.setHours(0,0,0,0),t},W=e=>H(e.getFullYear(),e.getMonth(),1),ce=e=>H(e.getFullYear(),e.getMonth()+1,0),G=e=>H(e.getFullYear(),0,1),le=e=>H(e.getFullYear(),11,31),K=(e,t)=>H(e.getFullYear(),e.getMonth(),e.getDate()+t),ue=e=>e instanceof Date&&!Number.isNaN(e.getTime()),de=(e,t=new Date)=>{if(ue(e))return V(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(ue(t))return t}return V(t)},fe=e=>{if(!e)return null;let t=U(de(e[0])),n=U(de(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},pe=(e,t)=>e.getFullYear()===t.getFullYear(),me=(e,t)=>pe(e,t)&&e.getMonth()===t.getMonth(),he=(e,t)=>me(e,t)&&e.getDate()===t.getDate(),q=(e,t)=>{let n=H(e.getFullYear(),e.getMonth()+t,1),r=ce(n).getDate();return H(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},J=(e,t)=>{let n=H(e.getFullYear()+t,e.getMonth(),1),r=ce(n).getDate();return H(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},ge=(e,t)=>J(e,t-e.getFullYear()),_e=(e,t)=>q(e,t-e.getMonth()),ve=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ye=(e,t,n)=>{let r=U(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(V(r))},be=(e,t,n,r)=>{let i=W(e),a=ce(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):ye(o,t,n))return!0;o=K(o,1)}return!1},xe=(e,t,n,r)=>{let i=G(e),a=le(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>H(e.getFullYear(),n,1)).some(e=>r?r(e):be(e,t,n))},Se=e=>{let t=U(e),n=H(K(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=K(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Ce=(e,t)=>{let n=`${e}:${t}`,r=P.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=H(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(K(a,(t+n)%7)));return P.set(n,o),o},we=e=>{let t=F.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(H(2026,t,1)));return F.set(e,r),r},Te=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Ee=(e,t,n,r,i)=>{let a=we(e);return Array.from({length:12},(e,o)=>{let s=H(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):be(s,n,r))}})},De=(e,t)=>{let n=W(e),r=K(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=K(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:Se(i),cells:Array.from({length:7},(t,n)=>{let r=K(i,n);return{key:ve(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},Oe=e=>{let t=ne.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),ne.set(e,t)),t},ke=e=>{let t=I.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),I.set(e,t)),t},Ae=e=>{let t=L.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),L.set(e,t)),t},je=(e,t)=>{for(let[n,r]of t.dateCellStates){let t=e.querySelector(`[data-rue-calendar-cell="${n}"]`);t&&(t.setAttribute(`aria-pressed`,r.selected?`true`:`false`),r.isToday?t.setAttribute(`aria-current`,`date`):t.removeAttribute(`aria-current`))}},Y=Object.assign(({value:e,defaultValue:t,mode:i,fullscreen:a=!0,showWeek:s,locale:c,weekStartsOn:u,validRange:f,disabledDate:p,dateFullCellRender:h,dateCellRender:g,monthFullCellRender:_,monthCellRender:v,cellRender:y,fullCellRender:b,headerRender:x,className:S,onChange:C,onPanelChange:w,onSelect:T,...E})=>{let D=m(de(e??t??new Date)),A=m(i??`month`),j=d(),M=d(),N=d(),P=d(null),F=d(null),ne=d(`__none__`),I=e===void 0?D.value:de(e,D.value),L=i??A.value,R=U(new Date),z=fe(f),B=!!z||!!p,W=c??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),ce=se(u),G=W.toLowerCase().startsWith(`zh`);j.current||=te().date,M.current||=te().month,N.current||=te().year;let le=z?z.start.getTime():null,K=z?z.end.getTime():null,ue=p?p.toString():`__none__`;(P.current!==le||F.current!==K||ne.current!==ue)&&(j.current.clear(),M.current.clear(),N.current.clear(),P.current=le,F.current=K,ne.current=ue);let Se=e=>{if(!B)return!0;let t=ve(U(e)),n=j.current?.get(t);if(n!==void 0)return n;let r=ye(e,z,p);return j.current?.set(t,r),r},we=e=>{if(!B)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=M.current?.get(t);if(n!==void 0)return n;let r=be(e,z,p,Se);return M.current?.set(t,r),r},Y=e=>{if(!B)return!0;let t=`${e.getFullYear()}`,n=N.current?.get(t);if(n!==void 0)return n;let r=xe(e,z,p,we);return N.current?.set(t,r),r},Me=L===`month`,Ne=Me?Ce(W,ce):[],Pe=Me?De(I,ce):[],Fe=Te(I,z),X=Ee(W,I,B?z:null,B?p:void 0,B?we:void 0),Ie=ee(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${a?`rounded-[1.75rem]`:`max-w-[24rem] rounded-[1.5rem]`}`,S),Le=s?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,Re=L===`month`?Oe(W).format(I):ke(W).format(I),ze=Ae(W).format(R),Be=G?`今天`:`Today`,Ve=G?`月`:`Month`,He=G?`年`:`Year`,Ue=G?`周`:`Week`,Z=G?`今`:`Today`,We=L===`month`?G?`月视图`:`Month view`:G?`年视图`:`Year view`,Ge=B?L===`month`?!we(q(I,-1)):!Y(J(I,-1)):!1,Ke=B?L===`month`?!we(q(I,1)):!Y(J(I,1)):!1,qe=B?!Se(R):!1,Je=!!(y||b||g||h),Ye=!!(y||b||v||_),Xe=!x&&!Je&&!Ye,Q=(t,n)=>{let r=U(de(t,I)),i=!he(r,I),a=L===`month`?!me(r,I):!pe(r,I);e===void 0&&(D.value=r),i&&C?.(V(r)),a&&w?.(V(r),L),T?.(V(r),{source:n})},Ze=e=>{e!==L&&(i===void 0&&(A.value=e),w?.(V(I),e))},Qe={value:V(I),type:L,yearOptions:Fe,monthOptions:X,onChange:e=>Q(e,`customize`),onTypeChange:Ze,onYearChange:e=>Q(ge(I,e),`customize`),onMonthChange:e=>Q(_e(I,e),`customize`)};if(Xe){let e=r(()=>({host:null,start:null,end:null,lastSnapshot:null})),t=()=>{if(e.host||typeof document>`u`)return;let t=document.createElement(`span`);t.style.display=`contents`;let n=document.createComment(`rue-calendar-start`),r=document.createComment(`rue-calendar-end`);t.appendChild(n),t.appendChild(r),e.host=t,e.start=n,e.end=r},i=new Map;if(Me)for(let e of Pe)for(let t of e.cells)i.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:he(t.date,I),isToday:he(t.date,R),disabled:!Se(t.date)});let c={rest:E,rootClassName:Ie,currentMode:L,currentValue:V(I),headerTitle:Re,todayLabel:ze,previousDisabled:Ge,nextDisabled:Ke,todayDisabled:qe,yearOptions:Fe.map(e=>({value:e,disabled:!Y(H(e,I.getMonth(),1))})),monthOptions:X,weekdayLabels:Ne,dateRows:Pe,rowClassName:Le,showWeek:s,viewLabel:We,weekButtonLabel:Ue,todayButtonLabel:Be,monthButtonLabel:Ve,yearButtonLabel:He,todayMarkerLabel:Z,dateCellStates:i,patchKey:[L,I.getFullYear(),I.getMonth(),a?`full`:`card`,s?`week`:`day`,Ie,Le,Z,Ue,re(Fe.map(e=>({value:e,disabled:!Y(H(e,I.getMonth(),1))})),X,i),Ge?`prev-off`:`prev-on`,Ke?`next-off`:`next-on`,qe?`today-off`:`today-on`].join(`|`),selectedKey:ve(I),onPrevious:()=>Q(L===`month`?q(I,-1):J(I,-1),`customize`),onToday:()=>Q(R,`customize`),onNext:()=>Q(L===`month`?q(I,1):J(I,1),`customize`),onYearChange:e=>Q(ge(I,e),`customize`),onMonthChange:e=>Q(_e(I,e),`customize`),onModeMonth:()=>Ze(`month`),onModeYear:()=>Ze(`year`),onDateSelect:e=>Q(e,`date`),onMonthSelect:e=>Q(e,`month`)};return n(()=>{e.host&&e.start&&e.end&&l([],e.host,e.start,e.end),e.lastSnapshot=null}),o(()=>(t(),!e.host||!e.start||!e.end?oe(c):(e.lastSnapshot&&ie(e.lastSnapshot,c)?ae(e.host,e.lastSnapshot,c):(l(oe(c),e.host,e.start,e.end),je(e.host,c)),e.lastSnapshot=c,e.host)))}return O(`div`,{...E,"data-testid":E[`data-testid`],"data-rue-calendar-root":`true`,"data-rue-calendar-mode":L,className:Ie,children:[x?x(Qe):O(`div`,{className:`border-b border-base-300/70 ${a?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[O(`div`,{children:[k(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),k(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:Re}),k(`div`,{className:`mt-1 text-xs text-base-content/60`,children:ze})]}),O(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":G?`上一页`:`Previous`,disabled:Ge,onClick:()=>Q(L===`month`?q(I,-1):J(I,-1),`customize`),children:k(`span`,{"aria-hidden":`true`,children:`<`})}),k(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:qe,onClick:()=>Q(R,`customize`),children:Be}),k(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":G?`下一页`:`Next`,disabled:Ke,onClick:()=>Q(L===`month`?q(I,1):J(I,1),`customize`),children:k(`span`,{"aria-hidden":`true`,children:`>`})})]}),k(`select`,{className:`select select-sm min-w-24`,value:I.getFullYear(),onChange:e=>Qe.onYearChange(Number(e.currentTarget.value)),children:Fe.map(e=>k(`option`,{value:e,disabled:!Y(H(e,I.getMonth(),1)),children:e},e))}),k(`select`,{className:`select select-sm min-w-24`,value:I.getMonth(),disabled:L===`year`,onChange:e=>Qe.onMonthChange(Number(e.currentTarget.value)),children:X.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item ${L===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>Ze(`month`),children:Ve}),k(`button`,{type:`button`,className:`btn btn-sm join-item ${L===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>Ze(`year`),children:He})]})]})]}),O(`div`,{className:a?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[O(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[k(`div`,{className:`badge badge-outline badge-sm`,children:We}),s&&L===`month`?k(`div`,{className:`badge badge-soft badge-sm`,children:Ue}):null]}),L===`month`?O(`div`,{className:`space-y-2`,children:[O(`div`,{className:Le,children:[s?k(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:Ue}):null,Ne.map(e=>k(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),k(`div`,{role:`grid`,className:`space-y-2`,children:Pe.map((e,t)=>O(`div`,{role:`row`,className:Le,children:[s?k(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":e.week,children:e.week}):null,e.cells.map((n,r)=>{let i=he(n.date,I),o=he(n.date,R),s=!Se(n.date),c=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${a?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;if(i?c+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:s?c+=` border-base-300/70 bg-base-200/50 text-base-content/35`:n.inView?c+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:c+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,o&&!i&&(c+=` ring-1 ring-primary/20`),!Je)return k(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":i?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>Q(n.date,`date`),children:O(`span`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?k(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})},n.key);let l=k(`div`,{className:`flex h-full flex-col gap-2`,children:O(`div`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?k(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})}),u=y?.(V(n.date),{type:`date`,originNode:l,today:V(R),selected:i,isToday:o,inView:n.inView,disabled:s,row:t,column:r,week:e.week})??g?.(V(n.date)),d=O(`div`,{className:`flex h-full flex-col gap-2`,children:[O(`div`,{className:`flex items-start justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?k(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]}),k(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${i?`opacity-90`:`opacity-75`}`,children:u})]}),f=b?.(V(n.date),{type:`date`,originNode:d,today:V(R),selected:i,isToday:o,inView:n.inView,disabled:s,row:t,column:r,week:e.week})??h?.(V(n.date))??d;return k(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":i?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>Q(n.date,`date`),children:f},n.key)})]},e.key))})]}):k(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:X.map((e,t)=>{let n=H(I.getFullYear(),e.value,1),r=me(n,I),i=me(n,R),o=e.disabled===!0,s=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${a?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;if(r?s+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:o?s+=` border-base-300/70 bg-base-200/50 text-base-content/35`:s+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,i&&!r&&(s+=` ring-1 ring-primary/20`),!Ye)return k(`button`,{type:`button`,"data-rue-calendar-month":`${I.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":r?`true`:`false`,disabled:o,className:s,onClick:()=>Q(n,`month`),children:O(`span`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.label}),i?k(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})},`${I.getFullYear()}-${e.value}`);let c=k(`div`,{className:`flex h-full flex-col gap-2`,children:O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.label}),i?k(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]})}),l=y?.(V(n),{type:`month`,originNode:c,today:V(R),selected:r,isToday:i,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??v?.(V(n)),u=O(`div`,{className:`flex h-full flex-col gap-2`,children:[O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.label}),i?k(`span`,{className:`badge badge-xs ${r?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Z}):null]}),k(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${r?`opacity-90`:`opacity-75`}`,children:l})]}),d=b?.(V(n),{type:`month`,originNode:u,today:V(R),selected:r,isToday:i,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??_?.(V(n))??u;return k(`button`,{type:`button`,"data-rue-calendar-month":`${I.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":r?`true`:`false`,disabled:o,className:s,onClick:()=>Q(n,`month`),children:d},`${I.getFullYear()}-${e.value}`)})})]})]})},{Cally:({className:e,children:t,...n})=>k(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:ee(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>k(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>k(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:ee(`pika-single`,t)})}),Me=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),Ne=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Pe=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},Fe=e=>e?typeof e==`string`?e:Ne(e):`未选择`,X=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Ie=[Pe(`2026-04-01`),Pe(`2026-05-31`)],Le=e=>e.getDay()===0||e.getDay()===6||Me.has(Ne(e)),Re=()=>{let{selectedValue:e,selectedSource:t,panelState:n,handleChange:i,handlePanelChange:o,handleSelect:l}=T(`useSetup:0:0`,()=>r(()=>{let e=T(`ref:1:0`,()=>m(`2026-04-12`)),t=T(`ref:1:1`,()=>m(`date`)),n=T(`ref:1:2`,()=>m(X(Pe(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelState:n,handleChange:T(`useCallback:1:3`,()=>u(t=>{e.value=Ne(t)},[])),handlePanelChange:T(`useCallback:1:4`,()=>u((e,t)=>{n.value=X(e,t)},[])),handleSelect:T(`useCallback:1:5`,()=>u((e,n)=>{t.value=n.source},[]))}}));return h(r=>{let u=c(`div`,r);C(u,`space-y-4`);let d=p(`rue:component:anchor`);a(u,d),g(()=>{let t=S(Y,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,showWeek:!0,validRange:Ie,disabledDate:Le,onChange:i,onPanelChange:o,onSelect:l});w(()=>_(t,u,d))});let f=c(`div`,u);a(u,f),C(f,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let m=c(`div`,f);a(f,m),C(m,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let h=c(`div`,m);a(m,h),C(h,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),a(h,y(`当前值`));let v=c(`div`,m);a(m,v),C(v,`mt-1 text-sm font-medium`);let b=p(`rue:slot:anchor`);a(v,b),g(()=>{let t=Fe(e.value);w(()=>_(t,v,b))});let T=c(`div`,f);a(f,T),C(T,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let E=c(`div`,T);a(T,E),C(E,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),a(E,y(`选择来源`));let D=c(`div`,T);a(T,D),C(D,`mt-1 text-sm font-medium`);let O=s(D);a(D,O),g(()=>{x(O,t.value)});let k=c(`div`,f);a(f,k),C(k,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let A=c(`div`,k);a(k,A),C(A,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),a(A,y(`面板状态`));let j=c(`div`,k);a(k,j),C(j,`mt-1 text-sm font-medium`);let M=s(j);a(j,M),g(()=>{x(M,n.value)});let N=c(`p`,u);return a(u,N),C(N,`m-0 text-xs text-base-content/70`),a(N,y(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),u})},ze=null,Be=null,Ve=Y.Cally,He=Y.Month,Ue=Y.PikaSingle,Z=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,We=async()=>{typeof window>`u`||typeof customElements>`u`||(ze||=(async()=>{let e=Z();customElements.get(`calendar-date`)||await(e?.cally?e.cally():D(()=>import(`./cally-BXgW-moo.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await ze)},Ge=async()=>{if(!Be){let t=Z();Be=(t?.pikaday?t.pikaday():D(()=>import(`./pikaday-CModz87D.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return Be},Ke=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,qe=(e,t=`未选择`)=>e||t,Je=e=>e||`Pick a date`,Ye=e=>h(t=>{let n=c(`div`,t);C(n,`flex flex-wrap gap-2 text-xs`);let r=c(`span`,n);a(n,r),g(()=>{C(r,String(`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`))});let o=p(`rue:slot:anchor`);a(r,o),g(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;w(()=>_(t,r,o))});let s=p(`rue:slot:anchor`);return a(n,s),g(()=>{let t=e.error?h(()=>{let t=i(),n=c(`span`,t);a(t,n),C(n,`badge badge-error badge-soft`);let r=p(`rue:slot:anchor`);return a(n,r),g(()=>{let t=e.error;w(()=>_(t,n,r))}),t}):``;w(()=>_(t,n,s))}),n}),Xe=()=>h(e=>{let n=c(`svg`,e);t(n,`aria-label`,`Previous`),C(n,`fill-current size-4`),t(n,`slot`,`previous`),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`);let r=c(`path`,n);return a(n,r),t(r,`fill`,`currentColor`),t(r,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),n}),Q=()=>h(e=>{let n=c(`svg`,e);t(n,`aria-label`,`Next`),C(n,`fill-current size-4`),t(n,`slot`,`next`),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`);let r=c(`path`,n);return a(n,r),t(r,`fill`,`currentColor`),t(r,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),n}),Ze=()=>{let{calendarRef:e,cleanupRef:t,selectedValue:n,ready:o,error:s}=T(`useSetup:0:0`,()=>r(()=>{let e=T(`useRef:1:0`,()=>d()),t=T(`useRef:1:1`,()=>d(()=>{})),n=T(`ref:1:2`,()=>m(`2026-04-12`)),r=T(`ref:1:3`,()=>m(!1)),i=T(`ref:1:4`,()=>m(``));return v(()=>{let a=!0;We().then(()=>{if(!a)return;r.value=!0;let i=e.current;if(!i)return;i.value=n.value;let o=()=>{n.value=i.value||``};i.addEventListener(`change`,o),t.current=()=>i.removeEventListener(`change`,o)}).catch(()=>{a&&(i.value=`Cally 加载失败`)}),b(()=>{a=!1})}),b(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:r,error:i}}));return h(t=>{let r=c(`div`,t);C(r,`space-y-3`);let l=p(`rue:component:anchor`);a(r,l);let u=h(()=>{let e=i(),t=p(`rue:component:anchor`);a(e,t),_(S(Xe,{}),e,t);let n=p(`rue:component:anchor`);a(e,n),_(S(Q,{}),e,n);let r=p(`rue:component:anchor`);return a(e,r),_(S(He,{}),e,r),e});g(()=>{let t=S(Ve,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:u});w(()=>_(t,r,l))});let d=p(`rue:component:anchor`);a(r,d),g(()=>{let e=S(Ye,{ready:o.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:s.value});w(()=>_(e,r,d))});let f=c(`p`,r);a(r,f),C(f,`m-0 text-xs text-base-content/70`),a(f,y(`当前选择：`));let m=p(`rue:slot:anchor`);return a(f,m),g(()=>{let e=qe(n.value);w(()=>_(e,f,m))}),a(f,y(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),r})},Qe=()=>{let{calendarRef:e,cleanupRef:n,selectedValue:o,open:s,ready:l,error:u}=T(`useSetup:0:0:dup1`,()=>r(()=>{let e=T(`useRef:1:5`,()=>d()),t=T(`useRef:1:6`,()=>d(()=>{})),n=T(`ref:1:7`,()=>m(``)),r=T(`ref:1:8`,()=>m(!1)),i=T(`ref:1:9`,()=>m(!1)),a=T(`ref:1:10`,()=>m(``));return v(()=>{let o=!0;We().then(()=>{if(!o)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let s=()=>{n.value=a.value||``,r.value=!1};a.addEventListener(`change`,s),t.current=()=>a.removeEventListener(`change`,s)}).catch(()=>{o&&(a.value=`Cally 加载失败`)}),b(()=>{o=!1})}),b(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:r,ready:i,error:a}}));return h(n=>{let r=c(`div`,n);C(r,`space-y-3`);let d=c(`div`,r);a(r,d),C(d,`flex flex-wrap items-center gap-3`);let m=c(`button`,d);a(d,m),t(m,`type`,`button`),t(m,`data-testid`,`cally-picker-button`),C(m,`input input-bordered w-fit cursor-pointer`),f(m,`click`,()=>{s.value=!s.value});let v=p(`rue:slot:anchor`);a(m,v),g(()=>{let e=Je(o.value);w(()=>_(e,m,v))});let b=c(`span`,d);a(d,b),C(b,`text-xs text-base-content/70`),a(b,y(`当前选择：`));let x=p(`rue:slot:anchor`);a(b,x),g(()=>{let e=qe(o.value);w(()=>_(e,b,x))});let T=c(`div`,r);a(r,T),t(T,`data-testid`,`cally-picker-panel`),g(()=>{C(T,String(`inline-block rounded-box bg-base-100 p-3 shadow-lg ${s.value?``:`hidden`}`))});let E=p(`rue:component:anchor`);a(T,E);let D=h(()=>{let e=i(),t=p(`rue:component:anchor`);a(e,t),_(S(Xe,{}),e,t);let n=p(`rue:component:anchor`);a(e,n),_(S(Q,{}),e,n);let r=p(`rue:component:anchor`);return a(e,r),_(S(He,{}),e,r),e});g(()=>{let t=S(Ve,{ref:e,"data-testid":`cally-picker-calendar`,children:D});w(()=>_(t,T,E))});let O=p(`rue:component:anchor`);a(r,O),g(()=>{let e=S(Ye,{ready:l.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:u.value});w(()=>_(e,r,O))});let k=c(`p`,r);return a(r,k),C(k,`m-0 text-xs text-base-content/70`),a(k,y(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),r})},$e=()=>{let{inputRef:e,instanceRef:t,selectedValue:n,ready:i,error:o}=T(`useSetup:0:0:dup2`,()=>r(()=>{let e=T(`useRef:1:11`,()=>d()),t=T(`useRef:1:12`,()=>d()),n=T(`ref:1:13`,()=>m(``)),r=T(`ref:1:14`,()=>m(!1)),i=T(`ref:1:15`,()=>m(``));return v(()=>{let a=!0;Ge().then(i=>{if(!a)return;let o=e.current;o&&(t.current=new i({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>Ke(e),onSelect:e=>{n.value=o.value||Ke(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,r.value=!0)}).catch(()=>{a&&(i.value=`Pikaday 加载失败`)}),b(()=>{a=!1})}),b(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:r,error:i}}));return h(t=>{let r=c(`div`,t);C(r,`space-y-3`);let s=p(`rue:component:anchor`);a(r,s),g(()=>{let t=S(Ue,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});w(()=>_(t,r,s))});let l=p(`rue:component:anchor`);a(r,l),g(()=>{let e=S(Ye,{ready:i.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:o.value});w(()=>_(e,r,l))});let u=c(`p`,r);a(r,u),C(u,`m-0 text-xs text-base-content/70`),a(u,y(`当前选择：`));let d=p(`rue:slot:anchor`);a(u,d),g(()=>{let e=qe(n.value);w(()=>_(e,u,d))});let f=c(`p`,r);return a(r,f),C(f,`m-0 text-xs text-base-content/70`),a(f,y(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),r})},et=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],tt=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],nt={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},rt={2:12,3:28,4:18,8:43},it={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},at={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},ot=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,st=e=>e?typeof e==`string`?e:ot(e):`未选择`,ct=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,$=e=>h(t=>{let n=c(`div`,t);C(n,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let r=c(`span`,n);a(n,r),C(r,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let i=p(`rue:slot:anchor`);a(r,i),g(()=>{let t=e.label;w(()=>_(t,r,i))});let o=c(`span`,n);a(n,o),C(o,`text-sm font-medium`);let l=s(o);return a(o,l),g(()=>{x(l,e.value)}),n}),lt=e=>h(n=>{let r=c(`div`,n);C(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let o=c(`table`,r);a(r,o),C(o,`table table-zebra`);let s=c(`thead`,o);a(o,s);let l=c(`tr`,s);a(s,l);let u=c(`th`,l);a(l,u),a(u,y(`属性`));let d=c(`th`,l);a(l,d),a(d,y(`说明`));let f=c(`th`,l);a(l,f),a(f,y(`类型`));let m=c(`th`,l);a(l,m),a(m,y(`默认值`));let v=c(`tbody`,o);a(o,v);let b=p(`rue:list:start`),x=p(`rue:list:end`);a(v,b),a(v,x);let S=new Map;return g(()=>{S=E({items:e.rows||[],getKey:(e,t)=>e.prop,elements:S,parent:v,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,n,r,o,s)=>{_(h(()=>{let n=i(),r=c(`tr`,n);a(n,r),g(()=>{t(r,`key`,String(e.prop))});let o=c(`td`,r);a(r,o);let s=c(`code`,o);a(o,s);let l=p(`rue:slot:anchor`);a(s,l),g(()=>{let t=e.prop;w(()=>_(t,s,l))});let u=c(`td`,r);a(r,u);let d=p(`rue:slot:anchor`);a(u,d),g(()=>{let t=e.description;w(()=>_(t,u,d))});let f=c(`td`,r);a(r,f);let m=c(`code`,f);a(f,m);let h=p(`rue:slot:anchor`);a(m,h),g(()=>{let t=e.type;w(()=>_(t,m,h))});let v=c(`td`,r);a(r,v);let y=c(`code`,v);a(v,y);let b=p(`rue:slot:anchor`);return a(y,b),g(()=>{let t=e.defaultValue;w(()=>_(t,y,b))}),n}),n,r)}})}),r}),ut=e=>h(n=>{let r=c(`div`,n);C(r,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let o=c(`table`,r);a(r,o),C(o,`table table-zebra`);let s=c(`thead`,o);a(o,s);let l=c(`tr`,s);a(s,l);let u=c(`th`,l);a(l,u),a(u,y(`导出`));let d=c(`th`,l);a(l,d),a(d,y(`说明`));let f=c(`tbody`,o);a(o,f);let m=p(`rue:list:start`),v=p(`rue:list:end`);a(f,m),a(f,v);let b=new Map;return g(()=>{b=E({items:e.rows||[],getKey:(e,t)=>e.name,elements:b,parent:f,before:v,singleRoot:!0,trackIndex:!1,start:m,renderItem:(e,n,r,o,s)=>{_(h(()=>{let n=i(),r=c(`tr`,n);a(n,r),g(()=>{t(r,`key`,String(e.name))});let o=c(`td`,r);a(r,o);let s=c(`code`,o);a(o,s);let l=p(`rue:slot:anchor`);a(s,l),g(()=>{let t=e.name;w(()=>_(t,s,l))});let u=c(`td`,r);a(r,u);let d=p(`rue:slot:anchor`);return a(u,d),g(()=>{let t=e.description;w(()=>_(t,u,d))}),n}),n,r)}})}),r}),dt=e=>h(t=>{let n=c(`div`,t);C(n,`component-preview not-prose my-6 text-base-content lg:my-12`);let r=c(`div`,n);a(n,r),C(r,`flex flex-wrap items-start justify-between gap-3`);let o=c(`div`,r);a(r,o);let s=c(`h2`,o);a(o,s),C(s,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(s,y(`# `));let l=p(`rue:slot:anchor`);a(s,l),g(()=>{let t=e.title;w(()=>_(t,s,l))});let u=p(`rue:slot:anchor`);a(o,u),g(()=>{let t=e.summary?h(()=>{let t=i(),n=c(`p`,t);a(t,n),C(n,`m-0 text-sm opacity-70`);let r=p(`rue:slot:anchor`);return a(n,r),g(()=>{let t=e.summary;w(()=>_(t,n,r))}),t}):``;w(()=>_(t,o,u))});let d=p(`rue:component:anchor`);a(n,d),g(()=>{let t=S(M,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});w(()=>_(t,n,d))});let f=p(`rue:slot:anchor`);return a(n,f),g(()=>{let t=e.tab.value===`preview`?e.shouldLoadPreview&&!e.shouldLoadPreview.value?h(()=>{let t=i(),n=c(`div`,t);a(t,n),C(n,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let r=c(`div`,n);a(n,r),C(r,`badge badge-outline badge-sm`),a(r,y(`Preview`));let o=c(`p`,n);a(n,o),C(o,`mb-0 mt-3 text-sm text-base-content/72`);let s=p(`rue:slot:anchor`);return a(o,s),g(()=>{let t=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;w(()=>_(t,o,s))}),t}):N(e.title,e.preview):h(()=>{let t=i(),n=p(`rue:component:anchor`);return a(t,n),g(()=>{let r=S(j,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});w(()=>_(r,t,n))}),t});w(()=>_(t,n,f))}),n}),ft=e=>h(t=>{let n=c(`div`,t);C(n,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let r=c(`div`,n);a(n,r),C(r,`badge badge-outline badge-sm`);let i=p(`rue:slot:anchor`);a(r,i),g(()=>{let t=e.badge;w(()=>_(t,r,i))});let o=c(`h3`,n);a(n,o),C(o,`mt-3 mb-1 text-base font-semibold`);let s=p(`rue:slot:anchor`);a(o,s),g(()=>{let t=e.title;w(()=>_(t,o,s))});let l=c(`p`,n);a(n,l),C(l,`m-0 text-sm text-base-content/70`);let u=p(`rue:slot:anchor`);return a(l,u),g(()=>{let t=e.detail;w(()=>_(t,l,u))}),n}),pt=()=>{let{selectedValue:e}=T(`useSetup:0:0`,()=>r(()=>({selectedValue:T(`ref:1:0`,()=>m(`2026-04-15`))})));return h(t=>{let n=c(`div`,t);C(n,`space-y-4`);let r=p(`rue:component:anchor`);a(n,r),g(()=>{let t=S(Y,{"data-testid":`notice-calendar`,locale:`zh-CN`,defaultValue:e.value,onChange:t=>{e.value=ot(t)},cellRender:(e,t)=>{if(t.type===`month`){let t=rt[e.getMonth()];return t?O(`div`,{className:`space-y-1`,children:[k(`div`,{className:`text-lg font-semibold leading-none`,children:t}),k(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=nt[ot(e)]??[];return n.length?O(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>k(`div`,{className:`badge badge-soft badge-xs ${at[e.tone]}`,children:e.label},e.label)),n.length>2?O(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});w(()=>_(t,n,r))});let i=c(`div`,n);a(n,i),C(i,`grid gap-3 md:grid-cols-3`);let o=p(`rue:component:anchor`);a(i,o),g(()=>{let t=S($,{label:`当前日期`,value:st(e.value)});w(()=>_(t,i,o))});let s=p(`rue:component:anchor`);a(i,s),g(()=>{let e=S($,{label:`4 月 15 日事件`,value:`${nt[`2026-04-15`]?.length??0} 条`});w(()=>_(e,i,s))});let l=p(`rue:component:anchor`);return a(i,l),g(()=>{let e=S($,{label:`9 月 backlog`,value:`${rt[8]} 项`});w(()=>_(e,i,l))}),n})},mt=()=>{let{selectedValue:e}=T(`useSetup:0:0:dup1`,()=>r(()=>({selectedValue:T(`ref:1:1`,()=>m(`2026-09-18`))})));return h(t=>{let n=c(`div`,t);C(n,`space-y-4`);let r=c(`div`,n);a(n,r),C(r,`grid gap-4`);let i=c(`div`,r);a(r,i),C(i,`max-w-full overflow-x-auto`);let o=p(`rue:component:anchor`);a(i,o),g(()=>{let t=S(Y,{"data-testid":`card-calendar`,className:`w-fit max-w-none min-w-[34rem]`,locale:`zh-CN`,fullscreen:!1,defaultValue:e.value,onChange:t=>{e.value=ot(t)},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=it[ot(e)];return n==null?t.originNode:O(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[O(`div`,{className:`flex items-center justify-between gap-2`,children:[k(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),O(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),O(`div`,{className:`space-y-1`,children:[k(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:k(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),k(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});w(()=>_(t,i,o))});let s=c(`div`,r);a(r,s),C(s,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let l=c(`div`,s);a(s,l),C(l,`badge badge-secondary badge-soft`),a(l,y(`Card Mode`));let u=c(`h3`,s);a(s,u),C(u,`mt-3 mb-1 text-base font-semibold`),a(u,y(`容量面板`));let d=c(`p`,s);a(s,d),C(d,`m-0 text-sm text-base-content/70`),a(d,y(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let f=c(`div`,s);a(s,f),C(f,`mt-4 space-y-3`);let m=p(`rue:component:anchor`);a(f,m),g(()=>{let t=S($,{label:`当前日期`,value:st(e.value)});w(()=>_(t,f,m))});let h=p(`rue:component:anchor`);a(f,h),_(S($,{label:`高负载日`,value:`9/18 · 92%`}),f,h);let v=p(`rue:component:anchor`);return a(f,v),_(S($,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),f,v),n})},ht=()=>{let{selectedValue:e,panelMode:t,actionSource:n}=T(`useSetup:0:0:dup2`,()=>r(()=>({selectedValue:T(`ref:1:2`,()=>m(`2026-07-04`)),panelMode:T(`ref:1:3`,()=>m(`month`)),actionSource:T(`ref:1:4`,()=>m(`date`))})));return h(r=>{let i=c(`div`,r);C(i,`space-y-4`);let o=p(`rue:component:anchor`);a(i,o),g(()=>{let r=S(Y,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,defaultValue:e.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>O(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[O(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[O(`div`,{children:[k(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),k(`div`,{className:`mt-1 text-base font-semibold`,children:ct(e,t)})]}),O(`div`,{className:`join`,children:[k(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),k(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),O(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[k(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>k(`option`,{value:e,children:e},e))}),k(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>k(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=ot(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{n.value=t.source}});w(()=>_(r,i,o))});let s=c(`div`,i);a(i,s),C(s,`grid gap-3 md:grid-cols-3`);let l=p(`rue:component:anchor`);a(s,l),g(()=>{let t=S($,{label:`当前日期`,value:st(e.value)});w(()=>_(t,s,l))});let u=p(`rue:component:anchor`);a(s,u),g(()=>{let e=S($,{label:`当前模式`,value:t.value});w(()=>_(e,s,u))});let d=p(`rue:component:anchor`);return a(s,d),g(()=>{let e=S($,{label:`最近来源`,value:n.value});w(()=>_(e,s,d))}),i})},gt=`import { ref, useCallback } from '@rue-js/rue'
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
}`,St=()=>{let{tabBasic:e,tabNotice:t,tabCard:n,tabHeader:o,tabCallyCalendar:s,tabCallyDatePicker:l,tabPikaday:u,shouldLoadNotice:f,shouldLoadCard:x,shouldLoadHeader:E,preloadTimers:D}=T(`useSetup:0:0:dup3`,()=>r(()=>{let e=T(`ref:1:5`,()=>m(`preview`)),t=T(`ref:1:6`,()=>m(`preview`)),n=T(`ref:1:7`,()=>m(`preview`)),r=T(`ref:1:8`,()=>m(`preview`)),i=T(`ref:1:9`,()=>m(`preview`)),a=T(`ref:1:10`,()=>m(`preview`)),o=T(`ref:1:11`,()=>m(`preview`)),s=T(`ref:1:12`,()=>m(!1)),c=T(`ref:1:13`,()=>m(!1)),l=T(`ref:1:14`,()=>m(!1)),u=T(`useRef:1:15`,()=>d([]));return v(()=>{u.current=[window.setTimeout(()=>{s.value=!0},0),window.setTimeout(()=>{c.value=!0},32),window.setTimeout(()=>{l.value=!0},64)]}),b(()=>{for(let e of u.current??[])window.clearTimeout(e);u.current=[]}),{tabBasic:e,tabNotice:t,tabCard:n,tabHeader:r,tabCallyCalendar:i,tabCallyDatePicker:a,tabPikaday:o,shouldLoadNotice:s,shouldLoadCard:c,shouldLoadHeader:l,preloadTimers:u}}));return h(r=>{let d=i(),m=p(`rue:component:anchor`);return a(d,m),_(S(A,{children:h(()=>{let r=i(),d=c(`div`,r);a(r,d),C(d,`prose prose-sm max-w-none md:prose-base`);let m=c(`h1`,d);a(d,m),a(m,y(`Calendar 日历`));let h=c(`p`,d);a(d,h),C(h,`mt-3 mb-3 text-sm`),a(h,y(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let v=c(`div`,d);a(d,v),C(v,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let b=p(`rue:component:anchor`);a(v,b),_(S(ft,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),v,b);let T=p(`rue:component:anchor`);a(v,T),_(S(ft,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),v,T);let D=p(`rue:component:anchor`);a(v,D),_(S(ft,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),v,D);let O=p(`rue:component:anchor`);a(d,O),g(()=>{let t=S(dt,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:k(Re,{}),code:gt});w(()=>_(t,d,O))});let A=p(`rue:component:anchor`);a(d,A),g(()=>{let e=S(dt,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:t,preview:k(pt,{}),code:_t,shouldLoadPreview:f,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});w(()=>_(e,d,A))});let j=p(`rue:component:anchor`);a(d,j),g(()=>{let e=S(dt,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:n,preview:k(mt,{}),code:vt,shouldLoadPreview:x,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});w(()=>_(e,d,j))});let M=p(`rue:component:anchor`);a(d,M),g(()=>{let e=S(dt,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:o,preview:k(ht,{}),code:yt,shouldLoadPreview:E,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});w(()=>_(e,d,M))});let N=p(`rue:component:anchor`);a(d,N),g(()=>{let e=S(dt,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:s,preview:k(Ze,{}),code:bt});w(()=>_(e,d,N))});let ee=p(`rue:component:anchor`);a(d,ee),g(()=>{let e=S(dt,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:l,preview:k(Qe,{}),code:xt});w(()=>_(e,d,ee))});let te=p(`rue:component:anchor`);a(d,te),g(()=>{let e=S(dt,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:u,preview:k($e,{}),lang:`html`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});w(()=>_(e,d,te))});let P=c(`section`,d);a(d,P),C(P,`my-12 space-y-6`);let F=c(`div`,P);a(P,F);let ne=c(`h2`,F);a(F,ne),C(ne,`mb-2`),a(ne,y(`API`));let I=c(`p`,F);a(F,I),C(I,`m-0 text-sm text-base-content/70`),a(I,y(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let L=p(`rue:component:anchor`);a(P,L),g(()=>{let e=S(lt,{rows:et});w(()=>_(e,P,L))});let R=c(`div`,P);a(P,R);let z=c(`h2`,R);a(R,z),C(z,`mb-2`),a(z,y(`附属导出`));let B=c(`p`,R);a(R,B),C(B,`m-0 text-sm text-base-content/70`),a(B,y(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let re=p(`rue:component:anchor`);return a(P,re),g(()=>{let e=S(ut,{rows:tt});w(()=>_(e,P,re))}),r})}),d,m),d})};export{St as default};
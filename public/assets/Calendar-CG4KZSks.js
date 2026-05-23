const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-D2PNBO2J.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{$ as t,Et as n,G as r,H as i,J as a,K as o,St as s,Tt as c,V as l,W as u,_t as d,d as f,kt as p,l as m,o as h,q as g,s as _,st as v,t as y,tt as b,xt as x}from"./vapor-runtime-BAZOdMd8.js";import{a as S,n as C}from"./vapor-helpers-vapor-BvUp1QnH.js";import{t as w}from"./preload-helper-BEFjQwLd.js";import{n as T,t as E}from"./src-DZJ4J6sD.js";import{n as D}from"./SidebarPlaygroundDesign-COnQ_JKl.js";import{t as O}from"./Code-DY4Ua5uc.js";import{t as k}from"./tabs-Casd077O.js";var A=(e,t)=>t?`${e} ${t}`:e,j=()=>({date:new Map,month:new Map,year:new Map}),ee=e=>typeof e==`number`&&e>=0&&e<=6?e:1,M=e=>new Date(e.getTime()),N=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},P=e=>{let t=M(e);return t.setHours(0,0,0,0),t},F=e=>N(e.getFullYear(),e.getMonth(),1),I=e=>N(e.getFullYear(),e.getMonth()+1,0),L=e=>N(e.getFullYear(),0,1),R=e=>N(e.getFullYear(),11,31),z=(e,t)=>N(e.getFullYear(),e.getMonth(),e.getDate()+t),B=e=>e instanceof Date&&!Number.isNaN(e.getTime()),V=(e,t=new Date)=>{if(B(e))return M(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(B(t))return t}return M(t)},te=e=>{if(!e)return null;let t=P(V(e[0])),n=P(V(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},ne=(e,t)=>e.getFullYear()===t.getFullYear(),re=(e,t)=>ne(e,t)&&e.getMonth()===t.getMonth(),ie=(e,t)=>re(e,t)&&e.getDate()===t.getDate(),ae=(e,t)=>{let n=N(e.getFullYear(),e.getMonth()+t,1),r=I(n).getDate();return N(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},oe=(e,t)=>{let n=N(e.getFullYear()+t,e.getMonth(),1),r=I(n).getDate();return N(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},se=(e,t)=>oe(e,t-e.getFullYear()),ce=(e,t)=>ae(e,t-e.getMonth()),le=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ue=(e,t,n)=>{let r=P(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(M(r))},de=(e,t,n,r)=>{let i=F(e),a=I(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):ue(o,t,n))return!0;o=z(o,1)}return!1},fe=(e,t,n,r)=>{let i=L(e),a=R(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>N(e.getFullYear(),n,1)).some(e=>r?r(e):de(e,t,n))},H=e=>{let t=P(e),n=N(z(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=z(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},pe=(e,t)=>{let n=new Intl.DateTimeFormat(e,{weekday:`short`}),r=N(2026,2,1);return Array.from({length:7},(e,i)=>n.format(z(r,(t+i)%7)))},me=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},he=(e,t,n,r,i)=>{let a=new Intl.DateTimeFormat(e,{month:`short`});return Array.from({length:12},(e,o)=>{let s=N(t.getFullYear(),o,1);return{value:o,label:a.format(s),disabled:!(i?i(s):de(s,n,r))}})},ge=(e,t)=>{let n=F(e),r=z(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=z(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:H(i),cells:Array.from({length:7},(t,n)=>{let r=z(i,n);return{key:le(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},U=Object.assign(({value:e,defaultValue:t,mode:n,fullscreen:r=!0,showWeek:i,locale:a,weekStartsOn:o,validRange:s,disabledDate:l,dateFullCellRender:u,dateCellRender:f,monthFullCellRender:p,monthCellRender:m,cellRender:h,fullCellRender:g,headerRender:_,className:v,onChange:y,onPanelChange:b,onSelect:x,...S})=>{let C=d(V(e??t??new Date)),w=d(n??`month`),D=c(),O=c(),k=c(),F=c(null),I=c(null),L=c(`__none__`),R=e===void 0?C.value:V(e,C.value),z=n??w.value,B=P(new Date),H=te(s),U=a??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),_e=ee(o),W=U.toLowerCase().startsWith(`zh`);D.current||=j().date,O.current||=j().month,k.current||=j().year;let G=H?H.start.getTime():null,ve=H?H.end.getTime():null,ye=l?l.toString():`__none__`;(F.current!==G||I.current!==ve||L.current!==ye)&&(D.current.clear(),O.current.clear(),k.current.clear(),F.current=G,I.current=ve,L.current=ye);let be=e=>{let t=le(P(e)),n=D.current?.get(t);if(n!==void 0)return n;let r=ue(e,H,l);return D.current?.set(t,r),r},K=e=>{let t=`${e.getFullYear()}-${e.getMonth()}`,n=O.current?.get(t);if(n!==void 0)return n;let r=de(e,H,l,be);return O.current?.set(t,r),r},xe=e=>{let t=`${e.getFullYear()}`,n=k.current?.get(t);if(n!==void 0)return n;let r=fe(e,H,l,K);return k.current?.set(t,r),r},Se=pe(U,_e),Ce=ge(R,_e),we=me(R,H),q=he(U,R,H,l,K),Te=A(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${r?`rounded-[1.75rem]`:`max-w-[24rem] rounded-[1.5rem]`}`,v),Ee=i?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,De=z===`month`?new Intl.DateTimeFormat(U,{year:`numeric`,month:`long`}).format(R):new Intl.DateTimeFormat(U,{year:`numeric`}).format(R),Oe=new Intl.DateTimeFormat(U,{weekday:`long`,month:`long`,day:`numeric`}).format(B),ke=W?`今天`:`Today`,Ae=W?`月`:`Month`,je=W?`年`:`Year`,J=W?`周`:`Week`,Y=W?`今`:`Today`,Me=z===`month`?W?`月视图`:`Month view`:W?`年视图`:`Year view`,Ne=z===`month`?!K(ae(R,-1)):!xe(oe(R,-1)),Pe=z===`month`?!K(ae(R,1)):!xe(oe(R,1)),Fe=!be(B),Ie=!!(h||g||f||u),Le=!!(h||g||m||p),X=(t,n)=>{let r=P(V(t,R)),i=!ie(r,R),a=z===`month`?!re(r,R):!ne(r,R);e===void 0&&(C.value=r),i&&y?.(M(r)),a&&b?.(M(r),z),x?.(M(r),{source:n})},Re=e=>{e!==z&&(n===void 0&&(w.value=e),b?.(M(R),e))},ze={value:M(R),type:z,yearOptions:we,monthOptions:q,onChange:e=>X(e,`customize`),onTypeChange:Re,onYearChange:e=>X(se(R,e),`customize`),onMonthChange:e=>X(ce(R,e),`customize`)};return T(`div`,{...S,"data-testid":S[`data-testid`],"data-rue-calendar-root":`true`,"data-rue-calendar-mode":z,className:Te,children:[_?_(ze):T(`div`,{className:`border-b border-base-300/70 ${r?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[T(`div`,{children:[E(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),E(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:De}),E(`div`,{className:`mt-1 text-xs text-base-content/60`,children:Oe})]}),T(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":W?`上一页`:`Previous`,disabled:Ne,onClick:()=>X(z===`month`?ae(R,-1):oe(R,-1),`customize`),children:E(`span`,{"aria-hidden":`true`,children:`<`})}),E(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:Fe,onClick:()=>X(B,`customize`),children:ke}),E(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":W?`下一页`:`Next`,disabled:Pe,onClick:()=>X(z===`month`?ae(R,1):oe(R,1),`customize`),children:E(`span`,{"aria-hidden":`true`,children:`>`})})]}),E(`select`,{className:`select select-sm min-w-24`,value:R.getFullYear(),onChange:e=>ze.onYearChange(Number(e.currentTarget.value)),children:we.map(e=>E(`option`,{value:e,disabled:!xe(N(e,R.getMonth(),1)),children:e},e))}),E(`select`,{className:`select select-sm min-w-24`,value:R.getMonth(),disabled:z===`year`,onChange:e=>ze.onMonthChange(Number(e.currentTarget.value)),children:q.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item ${z===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>Re(`month`),children:Ae}),E(`button`,{type:`button`,className:`btn btn-sm join-item ${z===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>Re(`year`),children:je})]})]})]}),T(`div`,{className:r?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[T(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[E(`div`,{className:`badge badge-outline badge-sm`,children:Me}),i&&z===`month`?E(`div`,{className:`badge badge-soft badge-sm`,children:J}):null]}),z===`month`?T(`div`,{className:`space-y-2`,children:[T(`div`,{className:Ee,children:[i?E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:J}):null,Se.map(e=>E(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),E(`div`,{role:`grid`,className:`space-y-2`,children:Ce.map((e,t)=>T(`div`,{role:`row`,className:Ee,children:[i?E(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":e.week,children:e.week}):null,e.cells.map((n,i)=>{let a=ie(n.date,R),o=ie(n.date,B),s=!be(n.date),c=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${r?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;if(a?c+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:s?c+=` border-base-300/70 bg-base-200/50 text-base-content/35`:n.inView?c+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:c+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,o&&!a&&(c+=` ring-1 ring-primary/20`),!Ie)return E(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>X(n.date,`date`),children:T(`span`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Y}):null]})},n.key);let l=E(`div`,{className:`flex h-full flex-col gap-2`,children:T(`div`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Y}):null]})}),d=h?.(M(n.date),{type:`date`,originNode:l,today:M(B),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:i,week:e.week})??f?.(M(n.date)),p=T(`div`,{className:`flex h-full flex-col gap-2`,children:[T(`div`,{className:`flex items-start justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?E(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Y}):null]}),E(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${a?`opacity-90`:`opacity-75`}`,children:d})]}),m=g?.(M(n.date),{type:`date`,originNode:p,today:M(B),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:i,week:e.week})??u?.(M(n.date))??p;return E(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:c,onClick:()=>X(n.date,`date`),children:m},n.key)})]},e.key))})]}):E(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:q.map((e,t)=>{let n=N(R.getFullYear(),e.value,1),i=re(n,R),a=re(n,B),o=e.disabled===!0,s=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${r?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;if(i?s+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:o?s+=` border-base-300/70 bg-base-200/50 text-base-content/35`:s+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,a&&!i&&(s+=` ring-1 ring-primary/20`),!Le)return E(`button`,{type:`button`,"data-rue-calendar-month":`${R.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:s,onClick:()=>X(n,`month`),children:T(`span`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),a?E(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Y}):null]})},`${R.getFullYear()}-${e.value}`);let c=E(`div`,{className:`flex h-full flex-col gap-2`,children:T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),a?E(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Y}):null]})}),l=h?.(M(n),{type:`month`,originNode:c,today:M(B),selected:i,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??m?.(M(n)),u=T(`div`,{className:`flex h-full flex-col gap-2`,children:[T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.label}),a?E(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:Y}):null]}),E(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${i?`opacity-90`:`opacity-75`}`,children:l})]}),d=g?.(M(n),{type:`month`,originNode:u,today:M(B),selected:i,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??p?.(M(n))??u;return E(`button`,{type:`button`,"data-rue-calendar-month":`${R.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:s,onClick:()=>X(n,`month`),children:d},`${R.getFullYear()}-${e.value}`)})})]})]})},{Cally:({className:e,children:t,...n})=>E(`calendar-date`,{...n,"data-testid":n[`data-testid`],className:A(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>E(`calendar-month`,{...n,"data-testid":n[`data-testid`],className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>E(`input`,{...n,"data-testid":n[`data-testid`],id:n.id,value:n.value,type:e,className:A(`pika-single`,t)})}),_e=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),W=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,G=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},ve=e=>e?typeof e==`string`?e:W(e):`未选择`,ye=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,be=[G(`2026-04-01`),G(`2026-05-31`)],K=e=>e.getDay()===0||e.getDay()===6||_e.has(W(e)),xe=()=>{let{selectedValue:e,selectedSource:t,panelState:r,handleChange:c,handlePanelChange:l,handleSelect:h}=S(`useSetup:0:0`,()=>n(()=>{let e=S(`ref:1:0`,()=>d(`2026-04-12`)),t=S(`ref:1:1`,()=>d(`date`)),n=S(`ref:1:2`,()=>d(ye(G(e.value),`month`)));return{selectedValue:e,selectedSource:t,panelState:n,handleChange:S(`useCallback:1:3`,()=>s(t=>{e.value=W(t)},[])),handlePanelChange:S(`useCallback:1:4`,()=>s((e,t)=>{n.value=ye(e,t)},[])),handleSelect:S(`useCallback:1:5`,()=>s((e,n)=>{t.value=n.source},[]))}}));return f(n=>{let s=o(`div`,n);b(s,`space-y-4`);let d=u(`rue:component:anchor`);i(s,d),p(()=>{let t=y(U,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,showWeek:!0,validRange:be,disabledDate:K,onChange:c,onPanelChange:l,onSelect:h});x(()=>m(t,s,d))});let f=o(`div`,s);i(s,f),b(f,`grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2`);let _=o(`div`,f);i(f,_),b(_,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let S=o(`div`,_);i(_,S),b(S,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),i(S,g(`当前值`));let C=o(`div`,_);i(_,C),b(C,`mt-1 text-sm font-medium`);let w=u(`rue:slot:anchor`);i(C,w),p(()=>{let t=ve(e.value);x(()=>m(t,C,w))});let T=o(`div`,f);i(f,T),b(T,`rounded-[1rem] bg-base-200/70 px-3 py-2`);let E=o(`div`,T);i(T,E),b(E,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),i(E,g(`选择来源`));let D=o(`div`,T);i(T,D),b(D,`mt-1 text-sm font-medium`);let O=a(D);i(D,O),p(()=>{v(O,t.value)});let k=o(`div`,f);i(f,k),b(k,`rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2`);let A=o(`div`,k);i(k,A),b(A,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`),i(A,g(`面板状态`));let j=o(`div`,k);i(k,j),b(j,`mt-1 text-sm font-medium`);let ee=a(j);i(j,ee),p(()=>{v(ee,r.value)});let M=o(`p`,s);return i(s,M),b(M,`m-0 text-xs text-base-content/70`),i(M,g(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),s})},Se=null,Ce=null,we=U.Cally,q=U.Month,Te=U.PikaSingle,Ee=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,De=async()=>{typeof window>`u`||typeof customElements>`u`||(Se||=(async()=>{let e=Ee();customElements.get(`calendar-date`)||await(e?.cally?e.cally():w(()=>import(`./cally-8V0gZHH-.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await Se)},Oe=async()=>{if(!Ce){let t=Ee();Ce=(t?.pikaday?t.pikaday():w(()=>import(`./pikaday-D2PNBO2J.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return Ce},ke=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Ae=(e,t=`未选择`)=>e||t,je=e=>e||`Pick a date`,J=e=>f(t=>{let n=o(`div`,t);b(n,`flex flex-wrap gap-2 text-xs`);let a=o(`span`,n);i(n,a),p(()=>{b(a,String(`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`))});let s=u(`rue:slot:anchor`);i(a,s),p(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;x(()=>m(t,a,s))});let c=u(`rue:slot:anchor`);return i(n,c),p(()=>{let t=e.error?f(()=>{let t=r(),n=o(`span`,t);i(t,n),b(n,`badge badge-error badge-soft`);let a=u(`rue:slot:anchor`);return i(n,a),p(()=>{let t=e.error;x(()=>m(t,n,a))}),t}):``;x(()=>m(t,n,c))}),n}),Y=()=>f(e=>{let n=o(`svg`,e);t(n,`aria-label`,`Previous`),b(n,`fill-current size-4`),t(n,`slot`,`previous`),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`);let r=o(`path`,n);return i(n,r),t(r,`fill`,`currentColor`),t(r,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),n}),Me=()=>f(e=>{let n=o(`svg`,e);t(n,`aria-label`,`Next`),b(n,`fill-current size-4`),t(n,`slot`,`next`),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`viewBox`,`0 0 24 24`);let r=o(`path`,n);return i(n,r),t(r,`fill`,`currentColor`),t(r,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),n}),Ne=()=>{let{calendarRef:e,cleanupRef:t,selectedValue:a,ready:s,error:l}=S(`useSetup:0:0`,()=>n(()=>{let e=S(`useRef:1:0`,()=>c()),t=S(`useRef:1:1`,()=>c(()=>{})),n=S(`ref:1:2`,()=>d(`2026-04-12`)),r=S(`ref:1:3`,()=>d(!1)),i=S(`ref:1:4`,()=>d(``));return h(()=>{let a=!0;De().then(()=>{if(!a)return;r.value=!0;let i=e.current;if(!i)return;i.value=n.value;let o=()=>{n.value=i.value||``};i.addEventListener(`change`,o),t.current=()=>i.removeEventListener(`change`,o)}).catch(()=>{a&&(i.value=`Cally 加载失败`)}),_(()=>{a=!1})}),_(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:r,error:i}}));return f(t=>{let n=o(`div`,t);b(n,`space-y-3`);let c=u(`rue:component:anchor`);i(n,c);let d=f(()=>{let e=r(),t=u(`rue:component:anchor`);i(e,t),m(y(Y,{}),e,t);let n=u(`rue:component:anchor`);i(e,n),m(y(Me,{}),e,n);let a=u(`rue:component:anchor`);return i(e,a),m(y(q,{}),e,a),e});p(()=>{let t=y(we,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:d});x(()=>m(t,n,c))});let h=u(`rue:component:anchor`);i(n,h),p(()=>{let e=y(J,{ready:s.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:l.value});x(()=>m(e,n,h))});let _=o(`p`,n);i(n,_),b(_,`m-0 text-xs text-base-content/70`),i(_,g(`当前选择：`));let v=u(`rue:slot:anchor`);return i(_,v),p(()=>{let e=Ae(a.value);x(()=>m(e,_,v))}),i(_,g(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),n})},Pe=()=>{let{calendarRef:e,cleanupRef:a,selectedValue:s,open:v,ready:C,error:w}=S(`useSetup:0:0:dup1`,()=>n(()=>{let e=S(`useRef:1:5`,()=>c()),t=S(`useRef:1:6`,()=>c(()=>{})),n=S(`ref:1:7`,()=>d(``)),r=S(`ref:1:8`,()=>d(!1)),i=S(`ref:1:9`,()=>d(!1)),a=S(`ref:1:10`,()=>d(``));return h(()=>{let o=!0;De().then(()=>{if(!o)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let s=()=>{n.value=a.value||``,r.value=!1};a.addEventListener(`change`,s),t.current=()=>a.removeEventListener(`change`,s)}).catch(()=>{o&&(a.value=`Cally 加载失败`)}),_(()=>{o=!1})}),_(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:r,ready:i,error:a}}));return f(n=>{let a=o(`div`,n);b(a,`space-y-3`);let c=o(`div`,a);i(a,c),b(c,`flex flex-wrap items-center gap-3`);let d=o(`button`,c);i(c,d),t(d,`type`,`button`),t(d,`data-testid`,`cally-picker-button`),b(d,`input input-bordered w-fit cursor-pointer`),l(d,`click`,()=>{v.value=!v.value});let h=u(`rue:slot:anchor`);i(d,h),p(()=>{let e=je(s.value);x(()=>m(e,d,h))});let _=o(`span`,c);i(c,_),b(_,`text-xs text-base-content/70`),i(_,g(`当前选择：`));let S=u(`rue:slot:anchor`);i(_,S),p(()=>{let e=Ae(s.value);x(()=>m(e,_,S))});let T=o(`div`,a);i(a,T),t(T,`data-testid`,`cally-picker-panel`),p(()=>{b(T,String(`inline-block rounded-box bg-base-100 p-3 shadow-lg ${v.value?``:`hidden`}`))});let E=u(`rue:component:anchor`);i(T,E);let D=f(()=>{let e=r(),t=u(`rue:component:anchor`);i(e,t),m(y(Y,{}),e,t);let n=u(`rue:component:anchor`);i(e,n),m(y(Me,{}),e,n);let a=u(`rue:component:anchor`);return i(e,a),m(y(q,{}),e,a),e});p(()=>{let t=y(we,{ref:e,"data-testid":`cally-picker-calendar`,children:D});x(()=>m(t,T,E))});let O=u(`rue:component:anchor`);i(a,O),p(()=>{let e=y(J,{ready:C.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:w.value});x(()=>m(e,a,O))});let k=o(`p`,a);return i(a,k),b(k,`m-0 text-xs text-base-content/70`),i(k,g(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),a})},Fe=()=>{let{inputRef:e,instanceRef:t,selectedValue:r,ready:a,error:s}=S(`useSetup:0:0:dup2`,()=>n(()=>{let e=S(`useRef:1:11`,()=>c()),t=S(`useRef:1:12`,()=>c()),n=S(`ref:1:13`,()=>d(``)),r=S(`ref:1:14`,()=>d(!1)),i=S(`ref:1:15`,()=>d(``));return h(()=>{let a=!0;Oe().then(i=>{if(!a)return;let o=e.current;o&&(t.current=new i({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>ke(e),onSelect:e=>{n.value=o.value||ke(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,r.value=!0)}).catch(()=>{a&&(i.value=`Pikaday 加载失败`)}),_(()=>{a=!1})}),_(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:r,error:i}}));return f(t=>{let n=o(`div`,t);b(n,`space-y-3`);let c=u(`rue:component:anchor`);i(n,c),p(()=>{let t=y(Te,{ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});x(()=>m(t,n,c))});let l=u(`rue:component:anchor`);i(n,l),p(()=>{let e=y(J,{ready:a.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:s.value});x(()=>m(e,n,l))});let d=o(`p`,n);i(n,d),b(d,`m-0 text-xs text-base-content/70`),i(d,g(`当前选择：`));let f=u(`rue:slot:anchor`);i(d,f),p(()=>{let e=Ae(r.value);x(()=>m(e,d,f))});let h=o(`p`,n);return i(n,h),b(h,`m-0 text-xs text-base-content/70`),i(h,g(`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`)),n})},Ie=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],Le=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],X={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},Re={2:12,3:28,4:18,8:43},ze={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},Be={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},Z=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Ve=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},He=e=>e?typeof e==`string`?e:Z(e):`未选择`,Ue=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`;Ve(`2026-04-01`),Ve(`2026-05-31`),U.Cally,U.Month,U.PikaSingle;var Q=e=>f(t=>{let n=o(`div`,t);b(n,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let r=o(`span`,n);i(n,r),b(r,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let s=u(`rue:slot:anchor`);i(r,s),p(()=>{let t=e.label;x(()=>m(t,r,s))});let c=o(`span`,n);i(n,c),b(c,`text-sm font-medium`);let l=a(c);return i(c,l),p(()=>{v(l,e.value)}),n}),We=e=>f(n=>{let a=o(`div`,n);b(a,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let s=o(`table`,a);i(a,s),b(s,`table table-zebra`);let c=o(`thead`,s);i(s,c);let l=o(`tr`,c);i(c,l);let d=o(`th`,l);i(l,d),i(d,g(`属性`));let h=o(`th`,l);i(l,h),i(h,g(`说明`));let _=o(`th`,l);i(l,_),i(_,g(`类型`));let v=o(`th`,l);i(l,v),i(v,g(`默认值`));let y=o(`tbody`,s);i(s,y);let S=u(`rue:list:start`),w=u(`rue:list:end`);i(y,S),i(y,w);let T=new Map;return p(()=>{T=C({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:y,before:w,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,n,a,s,c)=>{m(f(()=>{let n=r(),a=o(`tr`,n);i(n,a),p(()=>{t(a,`key`,String(e.prop))});let s=o(`td`,a);i(a,s);let c=o(`code`,s);i(s,c);let l=u(`rue:slot:anchor`);i(c,l),p(()=>{let t=e.prop;x(()=>m(t,c,l))});let d=o(`td`,a);i(a,d);let f=u(`rue:slot:anchor`);i(d,f),p(()=>{let t=e.description;x(()=>m(t,d,f))});let h=o(`td`,a);i(a,h);let g=o(`code`,h);i(h,g);let _=u(`rue:slot:anchor`);i(g,_),p(()=>{let t=e.type;x(()=>m(t,g,_))});let v=o(`td`,a);i(a,v);let y=o(`code`,v);i(v,y);let b=u(`rue:slot:anchor`);return i(y,b),p(()=>{let t=e.defaultValue;x(()=>m(t,y,b))}),n}),n,a)}})}),a}),Ge=e=>f(n=>{let a=o(`div`,n);b(a,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let s=o(`table`,a);i(a,s),b(s,`table table-zebra`);let c=o(`thead`,s);i(s,c);let l=o(`tr`,c);i(c,l);let d=o(`th`,l);i(l,d),i(d,g(`导出`));let h=o(`th`,l);i(l,h),i(h,g(`说明`));let _=o(`tbody`,s);i(s,_);let v=u(`rue:list:start`),y=u(`rue:list:end`);i(_,v),i(_,y);let S=new Map;return p(()=>{S=C({items:e.rows||[],getKey:(e,t)=>e.name,elements:S,parent:_,before:y,singleRoot:!0,trackIndex:!1,start:v,renderItem:(e,n,a,s,c)=>{m(f(()=>{let n=r(),a=o(`tr`,n);i(n,a),p(()=>{t(a,`key`,String(e.name))});let s=o(`td`,a);i(a,s);let c=o(`code`,s);i(s,c);let l=u(`rue:slot:anchor`);i(c,l),p(()=>{let t=e.name;x(()=>m(t,c,l))});let d=o(`td`,a);i(a,d);let f=u(`rue:slot:anchor`);return i(d,f),p(()=>{let t=e.description;x(()=>m(t,d,f))}),n}),n,a)}})}),a}),$=e=>f(t=>{let n=o(`div`,t);b(n,`component-preview not-prose my-6 text-base-content lg:my-12`);let a=o(`div`,n);i(n,a),b(a,`flex flex-wrap items-start justify-between gap-3`);let s=o(`div`,a);i(a,s);let c=o(`h2`,s);i(s,c),b(c,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(c,g(`# `));let l=u(`rue:slot:anchor`);i(c,l),p(()=>{let t=e.title;x(()=>m(t,c,l))});let d=u(`rue:slot:anchor`);i(s,d),p(()=>{let t=e.summary?f(()=>{let t=r(),n=o(`p`,t);i(t,n),b(n,`m-0 text-sm opacity-70`);let a=u(`rue:slot:anchor`);return i(n,a),p(()=>{let t=e.summary;x(()=>m(t,n,a))}),t}):``;x(()=>m(t,s,d))});let h=u(`rue:component:anchor`);i(n,h),p(()=>{let t=y(k,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});x(()=>m(t,n,h))});let _=u(`rue:slot:anchor`);return i(n,_),p(()=>{let t=e.tab.value===`preview`?e.shouldLoadPreview&&!e.shouldLoadPreview.value?f(()=>{let t=r(),n=o(`div`,t);i(t,n),b(n,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let a=o(`div`,n);i(n,a),b(a,`badge badge-outline badge-sm`),i(a,g(`Preview`));let s=o(`p`,n);i(n,s),b(s,`mb-0 mt-3 text-sm text-base-content/72`);let c=u(`rue:slot:anchor`);return i(s,c),p(()=>{let t=e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`;x(()=>m(t,s,c))}),t}):e.preview:f(()=>{let t=r(),n=u(`rue:component:anchor`);return i(t,n),p(()=>{let r=y(O,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});x(()=>m(r,t,n))}),t});x(()=>m(t,n,_))}),n}),Ke=e=>f(t=>{let n=o(`div`,t);b(n,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let r=o(`div`,n);i(n,r),b(r,`badge badge-outline badge-sm`);let a=u(`rue:slot:anchor`);i(r,a),p(()=>{let t=e.badge;x(()=>m(t,r,a))});let s=o(`h3`,n);i(n,s),b(s,`mt-3 mb-1 text-base font-semibold`);let c=u(`rue:slot:anchor`);i(s,c),p(()=>{let t=e.title;x(()=>m(t,s,c))});let l=o(`p`,n);i(n,l),b(l,`m-0 text-sm text-base-content/70`);let d=u(`rue:slot:anchor`);return i(l,d),p(()=>{let t=e.detail;x(()=>m(t,l,d))}),n}),qe=()=>{let{selectedValue:e}=S(`useSetup:0:0`,()=>n(()=>({selectedValue:S(`ref:1:0`,()=>d(`2026-04-15`))})));return f(t=>{let n=o(`div`,t);b(n,`space-y-4`);let r=u(`rue:component:anchor`);i(n,r),p(()=>{let t=y(U,{"data-testid":`notice-calendar`,locale:`zh-CN`,defaultValue:e.value,onChange:t=>{e.value=Z(t)},cellRender:(e,t)=>{if(t.type===`month`){let t=Re[e.getMonth()];return t?T(`div`,{className:`space-y-1`,children:[E(`div`,{className:`text-lg font-semibold leading-none`,children:t}),E(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=X[Z(e)]??[];return n.length?T(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>E(`div`,{className:`badge badge-soft badge-xs ${Be[e.tone]}`,children:e.label},e.label)),n.length>2?T(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});x(()=>m(t,n,r))});let a=o(`div`,n);i(n,a),b(a,`grid gap-3 md:grid-cols-3`);let s=u(`rue:component:anchor`);i(a,s),p(()=>{let t=y(Q,{label:`当前日期`,value:He(e.value)});x(()=>m(t,a,s))});let c=u(`rue:component:anchor`);i(a,c),p(()=>{let e=y(Q,{label:`4 月 15 日事件`,value:`${X[`2026-04-15`]?.length??0} 条`});x(()=>m(e,a,c))});let l=u(`rue:component:anchor`);return i(a,l),p(()=>{let e=y(Q,{label:`9 月 backlog`,value:`${Re[8]} 项`});x(()=>m(e,a,l))}),n})},Je=()=>{let{selectedValue:e}=S(`useSetup:0:0:dup1`,()=>n(()=>({selectedValue:S(`ref:1:1`,()=>d(`2026-09-18`))})));return f(t=>{let n=o(`div`,t);b(n,`space-y-4`);let r=o(`div`,n);i(n,r),b(r,`grid gap-4`);let a=o(`div`,r);i(r,a),b(a,`max-w-full overflow-x-auto`);let s=u(`rue:component:anchor`);i(a,s),p(()=>{let t=y(U,{"data-testid":`card-calendar`,className:`w-fit max-w-none min-w-[34rem]`,locale:`zh-CN`,fullscreen:!1,defaultValue:e.value,onChange:t=>{e.value=Z(t)},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=ze[Z(e)];return n==null?t.originNode:T(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[T(`div`,{className:`flex items-center justify-between gap-2`,children:[E(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),T(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),T(`div`,{className:`space-y-1`,children:[E(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:E(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),E(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});x(()=>m(t,a,s))});let c=o(`div`,r);i(r,c),b(c,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let l=o(`div`,c);i(c,l),b(l,`badge badge-secondary badge-soft`),i(l,g(`Card Mode`));let d=o(`h3`,c);i(c,d),b(d,`mt-3 mb-1 text-base font-semibold`),i(d,g(`容量面板`));let f=o(`p`,c);i(c,f),b(f,`m-0 text-sm text-base-content/70`),i(f,g(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let h=o(`div`,c);i(c,h),b(h,`mt-4 space-y-3`);let _=u(`rue:component:anchor`);i(h,_),p(()=>{let t=y(Q,{label:`当前日期`,value:He(e.value)});x(()=>m(t,h,_))});let v=u(`rue:component:anchor`);i(h,v),m(y(Q,{label:`高负载日`,value:`9/18 · 92%`}),h,v);let S=u(`rue:component:anchor`);return i(h,S),m(y(Q,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),h,S),n})},Ye=()=>{let{selectedValue:e,panelMode:t,actionSource:r}=S(`useSetup:0:0:dup2`,()=>n(()=>({selectedValue:S(`ref:1:2`,()=>d(`2026-07-04`)),panelMode:S(`ref:1:3`,()=>d(`month`)),actionSource:S(`ref:1:4`,()=>d(`date`))})));return f(n=>{let a=o(`div`,n);b(a,`space-y-4`);let s=u(`rue:component:anchor`);i(a,s),p(()=>{let n=y(U,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,defaultValue:e.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>T(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[T(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[T(`div`,{children:[E(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),E(`div`,{className:`mt-1 text-base font-semibold`,children:Ue(e,t)})]}),T(`div`,{className:`join`,children:[E(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),E(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),T(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[E(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>E(`option`,{value:e,children:e},e))}),E(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>E(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=Z(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{r.value=t.source}});x(()=>m(n,a,s))});let c=o(`div`,a);i(a,c),b(c,`grid gap-3 md:grid-cols-3`);let l=u(`rue:component:anchor`);i(c,l),p(()=>{let t=y(Q,{label:`当前日期`,value:He(e.value)});x(()=>m(t,c,l))});let d=u(`rue:component:anchor`);i(c,d),p(()=>{let e=y(Q,{label:`当前模式`,value:t.value});x(()=>m(e,c,d))});let f=u(`rue:component:anchor`);return i(c,f),p(()=>{let e=y(Q,{label:`最近来源`,value:r.value});x(()=>m(e,c,f))}),a})},Xe=`import { ref, useCallback } from '@rue-js/rue'
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
}`,Ze=`import { ref } from '@rue-js/rue'
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
}`,Qe=`import { ref } from '@rue-js/rue'
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
}`,$e=`import { ref } from '@rue-js/rue'
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
}`,et=`import 'cally'
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
}`,tt=`import 'cally'
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
}`,nt=()=>{let{tabBasic:e,tabNotice:t,tabCard:a,tabHeader:s,tabCallyCalendar:l,tabCallyDatePicker:v,tabPikaday:C,shouldLoadNotice:w,shouldLoadCard:T,shouldLoadHeader:O,preloadTimers:k}=S(`useSetup:0:0:dup3`,()=>n(()=>{let e=S(`ref:1:5`,()=>d(`preview`)),t=S(`ref:1:6`,()=>d(`preview`)),n=S(`ref:1:7`,()=>d(`preview`)),r=S(`ref:1:8`,()=>d(`preview`)),i=S(`ref:1:9`,()=>d(`preview`)),a=S(`ref:1:10`,()=>d(`preview`)),o=S(`ref:1:11`,()=>d(`preview`)),s=S(`ref:1:12`,()=>d(!1)),l=S(`ref:1:13`,()=>d(!1)),u=S(`ref:1:14`,()=>d(!1)),f=S(`useRef:1:15`,()=>c([]));return h(()=>{f.current=[window.setTimeout(()=>{s.value=!0},0),window.setTimeout(()=>{l.value=!0},32),window.setTimeout(()=>{u.value=!0},64)]}),_(()=>{for(let e of f.current??[])window.clearTimeout(e);f.current=[]}),{tabBasic:e,tabNotice:t,tabCard:n,tabHeader:r,tabCallyCalendar:i,tabCallyDatePicker:a,tabPikaday:o,shouldLoadNotice:s,shouldLoadCard:l,shouldLoadHeader:u,preloadTimers:f}}));return f(n=>{let c=r(),d=u(`rue:component:anchor`);return i(c,d),m(y(D,{children:f(()=>{let n=r(),c=o(`div`,n);i(n,c),b(c,`prose prose-sm max-w-none md:prose-base`);let d=o(`h1`,c);i(c,d),i(d,g(`Calendar 日历`));let f=o(`p`,c);i(c,f),b(f,`mt-3 mb-3 text-sm`),i(f,g(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let h=o(`div`,c);i(c,h),b(h,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let _=u(`rue:component:anchor`);i(h,_),m(y(Ke,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),h,_);let S=u(`rue:component:anchor`);i(h,S),m(y(Ke,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),h,S);let D=u(`rue:component:anchor`);i(h,D),m(y(Ke,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),h,D);let k=u(`rue:component:anchor`);i(c,k),p(()=>{let t=y($,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:E(xe,{}),code:Xe});x(()=>m(t,c,k))});let A=u(`rue:component:anchor`);i(c,A),p(()=>{let e=y($,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:t,preview:E(qe,{}),code:Ze,shouldLoadPreview:w,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`});x(()=>m(e,c,A))});let j=u(`rue:component:anchor`);i(c,j),p(()=>{let e=y($,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:a,preview:E(Je,{}),code:Qe,shouldLoadPreview:T,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`});x(()=>m(e,c,j))});let ee=u(`rue:component:anchor`);i(c,ee),p(()=>{let e=y($,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:s,preview:E(Ye,{}),code:$e,shouldLoadPreview:O,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`});x(()=>m(e,c,ee))});let M=u(`rue:component:anchor`);i(c,M),p(()=>{let e=y($,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:l,preview:E(Ne,{}),code:et});x(()=>m(e,c,M))});let N=u(`rue:component:anchor`);i(c,N),p(()=>{let e=y($,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:v,preview:E(Pe,{}),code:tt});x(()=>m(e,c,N))});let P=u(`rue:component:anchor`);i(c,P),p(()=>{let e=y($,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:C,preview:E(Fe,{}),lang:`html`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});x(()=>m(e,c,P))});let F=o(`section`,c);i(c,F),b(F,`my-12 space-y-6`);let I=o(`div`,F);i(F,I);let L=o(`h2`,I);i(I,L),b(L,`mb-2`),i(L,g(`API`));let R=o(`p`,I);i(I,R),b(R,`m-0 text-sm text-base-content/70`),i(R,g(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let z=u(`rue:component:anchor`);i(F,z),p(()=>{let e=y(We,{rows:Ie});x(()=>m(e,F,z))});let B=o(`div`,F);i(F,B);let V=o(`h2`,B);i(B,V),b(V,`mb-2`),i(V,g(`附属导出`));let te=o(`p`,B);i(B,te),b(te,`m-0 text-sm text-base-content/70`),i(te,g(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let ne=u(`rue:component:anchor`);return i(F,ne),p(()=>{let e=y(Ge,{rows:Le});x(()=>m(e,F,ne))}),n})}),c,d),c})};export{nt as default};
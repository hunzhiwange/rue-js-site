const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-C4YFvwel.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{F as t,G as n,I as r,L as i,M as a,P as o,R as s,U as c,Z as l,_t as u,bt as d,c as f,gt as p,j as m,lt as h,o as g,pt as _,s as v,t as y,u as b}from"./vapor-runtime-D3a-68js.js";import{a as x,n as S}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as C}from"./preload-helper-qlgyTAkD.js";import{n as w,t as T}from"./src-BfQKH6_d.js";import{n as E}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as D}from"./Code-2C2psoH3.js";import{t as O}from"./tabs-BgQmsOey.js";var k=(e,t)=>t?`${e} ${t}`:e,ee=e=>typeof e==`number`&&e>=0&&e<=6?e:1,A=e=>new Date(e.getTime()),j=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},M=e=>{let t=A(e);return t.setHours(0,0,0,0),t},N=e=>j(e.getFullYear(),e.getMonth(),1),P=e=>j(e.getFullYear(),e.getMonth()+1,0),F=e=>j(e.getFullYear(),0,1),I=e=>j(e.getFullYear(),11,31),L=(e,t)=>j(e.getFullYear(),e.getMonth(),e.getDate()+t),R=e=>e instanceof Date&&!Number.isNaN(e.getTime()),z=(e,t=new Date)=>{if(R(e))return A(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(R(t))return t}return A(t)},te=e=>{if(!e)return null;let t=M(z(e[0])),n=M(z(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},B=(e,t)=>e.getFullYear()===t.getFullYear(),V=(e,t)=>B(e,t)&&e.getMonth()===t.getMonth(),H=(e,t)=>V(e,t)&&e.getDate()===t.getDate(),U=(e,t)=>{let n=j(e.getFullYear(),e.getMonth()+t,1),r=P(n).getDate();return j(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},W=(e,t)=>{let n=j(e.getFullYear()+t,e.getMonth(),1),r=P(n).getDate();return j(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},ne=(e,t)=>W(e,t-e.getFullYear()),re=(e,t)=>U(e,t-e.getMonth()),ie=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ae=(e,t,n)=>{let r=M(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(A(r))},G=(e,t,n)=>{let r=N(e),i=P(e);if(t&&(i.getTime()<t.start.getTime()||r.getTime()>t.end.getTime()))return!1;let a=r;for(;a.getTime()<=i.getTime();){if(ae(a,t,n))return!0;a=L(a,1)}return!1},oe=(e,t,n)=>{let r=F(e),i=I(e);return t&&(i.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>j(e.getFullYear(),n,1)).some(e=>G(e,t,n))},se=e=>{let t=M(e),n=j(L(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=L(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},ce=(e,t)=>{let n=new Intl.DateTimeFormat(e,{weekday:`short`}),r=j(2026,2,1);return Array.from({length:7},(e,i)=>n.format(L(r,(t+i)%7)))},le=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},ue=(e,t,n,r)=>{let i=new Intl.DateTimeFormat(e,{month:`short`});return Array.from({length:12},(e,a)=>{let o=j(t.getFullYear(),a,1);return{value:a,label:i.format(o),disabled:!G(o,n,r)}})},de=(e,t)=>{let n=N(e),r=L(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=L(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:se(i),cells:Array.from({length:7},(t,n)=>{let r=L(i,n);return{key:ie(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},K=Object.assign(({value:e,defaultValue:t,mode:n,fullscreen:r=!0,showWeek:i,locale:a,weekStartsOn:o,validRange:s,disabledDate:c,dateFullCellRender:l,dateCellRender:u,monthFullCellRender:d,monthCellRender:f,cellRender:p,fullCellRender:m,headerRender:g,className:_,onChange:v,onPanelChange:y,onSelect:b,...x})=>{let S=h(z(e??t??new Date)),C=h(n??`month`),E=e===void 0?S.value:z(e,S.value),D=n??C.value,O=M(new Date),N=te(s),P=a??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),F=ee(o),I=P.toLowerCase().startsWith(`zh`),L=ce(P,F),R=de(E,F),ie=le(E,N),se=ue(P,E,N,c),K=k(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${r?`rounded-[1.75rem]`:`max-w-[24rem] rounded-[1.5rem]`}`,_),fe=i?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,pe=D===`month`?new Intl.DateTimeFormat(P,{year:`numeric`,month:`long`}).format(E):new Intl.DateTimeFormat(P,{year:`numeric`}).format(E),me=new Intl.DateTimeFormat(P,{weekday:`long`,month:`long`,day:`numeric`}).format(O),he=I?`今天`:`Today`,ge=I?`月`:`Month`,_e=I?`年`:`Year`,ve=I?`周`:`Week`,q=I?`今`:`Today`,ye=D===`month`?I?`月视图`:`Month view`:I?`年视图`:`Year view`,be=D===`month`?!G(U(E,-1),N,c):!oe(W(E,-1),N,c),xe=D===`month`?!G(U(E,1),N,c):!oe(W(E,1),N,c),Se=!ae(O,N,c),J=(t,n)=>{let r=M(z(t,E)),i=!H(r,E),a=D===`month`?!V(r,E):!B(r,E);e===void 0&&(S.value=r),i&&v?.(A(r)),a&&y?.(A(r),D),b?.(A(r),{source:n})},Y=e=>{e!==D&&(n===void 0&&(C.value=e),y?.(A(E),e))},X={value:A(E),type:D,yearOptions:ie,monthOptions:se,onChange:e=>J(e,`customize`),onTypeChange:Y,onYearChange:e=>J(ne(E,e),`customize`),onMonthChange:e=>J(re(E,e),`customize`)},Ce=(e,t,n,i)=>{let a=H(n.date,E),o=H(n.date,O),s=!ae(n.date,N,c),d=T(`div`,{className:`flex h-full flex-col gap-2`,children:w(`div`,{className:`flex items-start justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?T(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]})}),f=p?.(A(n.date),{type:`date`,originNode:d,today:A(O),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:i,week:e.week})??u?.(A(n.date)),h=w(`div`,{className:`flex h-full flex-col gap-2`,children:[w(`div`,{className:`flex items-start justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?T(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]}),T(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${a?`opacity-90`:`opacity-75`}`,children:f})]}),g=m?.(A(n.date),{type:`date`,originNode:h,today:A(O),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:i,week:e.week})??l?.(A(n.date))??h,_=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${r?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return a?_+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:s?_+=` border-base-300/70 bg-base-200/50 text-base-content/35`:n.inView?_+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:_+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,o&&!a&&(_+=` ring-1 ring-primary/20`),T(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:_,onClick:()=>J(n.date,`date`),children:g},n.key)},Z=(e,t)=>{let n=j(E.getFullYear(),e.value,1),i=V(n,E),a=V(n,O),o=e.disabled===!0,s=T(`div`,{className:`flex h-full flex-col gap-2`,children:w(`div`,{className:`flex items-center justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold`,children:e.label}),a?T(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]})}),c=p?.(A(n),{type:`month`,originNode:s,today:A(O),selected:i,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??f?.(A(n)),l=w(`div`,{className:`flex h-full flex-col gap-2`,children:[w(`div`,{className:`flex items-center justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold`,children:e.label}),a?T(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]}),T(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${i?`opacity-90`:`opacity-75`}`,children:c})]}),u=m?.(A(n),{type:`month`,originNode:l,today:A(O),selected:i,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??d?.(A(n))??l,h=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${r?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return i?h+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:o?h+=` border-base-300/70 bg-base-200/50 text-base-content/35`:h+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,a&&!i&&(h+=` ring-1 ring-primary/20`),T(`button`,{type:`button`,"data-rue-calendar-month":`${E.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:h,onClick:()=>J(n,`month`),children:u},`${E.getFullYear()}-${e.value}`)};return w(`div`,{...x,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":D,className:K,children:[g?g(X):w(`div`,{className:`border-b border-base-300/70 ${r?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[w(`div`,{children:[T(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),T(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:pe}),T(`div`,{className:`mt-1 text-xs text-base-content/60`,children:me})]}),w(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[w(`div`,{className:`join`,children:[T(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":I?`上一页`:`Previous`,disabled:be,onClick:()=>J(D===`month`?U(E,-1):W(E,-1),`customize`),children:T(`span`,{"aria-hidden":`true`,children:`<`})}),T(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:Se,onClick:()=>J(O,`customize`),children:he}),T(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":I?`下一页`:`Next`,disabled:xe,onClick:()=>J(D===`month`?U(E,1):W(E,1),`customize`),children:T(`span`,{"aria-hidden":`true`,children:`>`})})]}),T(`select`,{className:`select select-sm min-w-24`,value:E.getFullYear(),onChange:e=>X.onYearChange(Number(e.currentTarget.value)),children:ie.map(e=>T(`option`,{value:e,disabled:!oe(j(e,E.getMonth(),1),N,c),children:e},e))}),T(`select`,{className:`select select-sm min-w-24`,value:E.getMonth(),disabled:D===`year`,onChange:e=>X.onMonthChange(Number(e.currentTarget.value)),children:se.map(e=>T(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),w(`div`,{className:`join`,children:[T(`button`,{type:`button`,className:`btn btn-sm join-item ${D===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>Y(`month`),children:ge}),T(`button`,{type:`button`,className:`btn btn-sm join-item ${D===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>Y(`year`),children:_e})]})]})]}),w(`div`,{className:r?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[w(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[T(`div`,{className:`badge badge-outline badge-sm`,children:ye}),i&&D===`month`?T(`div`,{className:`badge badge-soft badge-sm`,children:ve}):null]}),D===`month`?w(`div`,{className:`space-y-2`,children:[w(`div`,{className:fe,children:[i?T(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:ve}):null,L.map(e=>T(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),T(`div`,{role:`grid`,className:`space-y-2`,children:R.map((e,t)=>w(`div`,{role:`row`,className:fe,children:[i?T(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":e.week,children:e.week}):null,e.cells.map((n,r)=>Ce(e,t,n,r))]},e.key))})]}):T(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:se.map((e,t)=>Z(e,t))})]})]})},{Cally:({className:e,children:t,...n})=>T(`calendar-date`,{...n,className:k(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>T(`calendar-month`,{...n,className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>T(`input`,{...n,type:e,className:k(`pika-single`,t)})}),fe=null,pe=null,me=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],he=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],ge=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),_e={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},ve={2:12,3:28,4:18,8:43},q={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},ye={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},be=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,xe=async()=>{typeof window>`u`||typeof customElements>`u`||(fe||=(async()=>{let e=be();customElements.get(`calendar-date`)||await(e?.cally?e.cally():C(()=>import(`./cally-ucXHlEAt.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await fe)},Se=async()=>{if(!pe){let t=be();pe=(t?.pikaday?t.pikaday():C(()=>import(`./pikaday-C4YFvwel.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return pe},J=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Y=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},X=(e,t=`未选择`)=>e||t,Ce=e=>e||`Pick a date`,Z=e=>e?typeof e==`string`?e:J(e):`未选择`,we=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Q=e=>b(()=>{let t=r(`div`);n(t,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let i=r(`span`);a(t,i),n(i,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let c=o(`rue:slot:anchor`);a(i,c),d(()=>{let t=e.label;_(()=>f(t,i,c))});let u=r(`span`);a(t,u),n(u,`text-sm font-medium`);let p=s(u);return a(u,p),d(()=>{l(p,e.value)}),t}),Te=e=>b(()=>{let s=r(`div`);n(s,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let l=r(`table`);a(s,l),n(l,`table table-zebra`);let u=r(`thead`);a(l,u);let p=r(`tr`);a(u,p);let m=r(`th`);a(p,m),a(m,i(`属性`));let h=r(`th`);a(p,h),a(h,i(`说明`));let g=r(`th`);a(p,g),a(g,i(`类型`));let v=r(`th`);a(p,v),a(v,i(`默认值`));let y=r(`tbody`);a(l,y);let x=o(`rue:list:start`),C=o(`rue:list:end`);a(y,x),a(y,C);let w=new Map;return d(()=>{w=S({items:e.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(e,n,i,s,l)=>{f(b(()=>{let n=t(),i=r(`tr`);a(n,i),d(()=>{c(i,`key`,String(e.prop))});let s=r(`td`);a(i,s);let l=r(`code`);a(s,l);let u=o(`rue:slot:anchor`);a(l,u),d(()=>{let t=e.prop;_(()=>f(t,l,u))});let p=r(`td`);a(i,p);let m=o(`rue:slot:anchor`);a(p,m),d(()=>{let t=e.description;_(()=>f(t,p,m))});let h=r(`td`);a(i,h);let g=r(`code`);a(h,g);let v=o(`rue:slot:anchor`);a(g,v),d(()=>{let t=e.type;_(()=>f(t,g,v))});let y=r(`td`);a(i,y);let b=r(`code`);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),d(()=>{let t=e.defaultValue;_(()=>f(t,b,x))}),n}),n,i)}})}),s}),Ee=e=>b(()=>{let s=r(`div`);n(s,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let l=r(`table`);a(s,l),n(l,`table table-zebra`);let u=r(`thead`);a(l,u);let p=r(`tr`);a(u,p);let m=r(`th`);a(p,m),a(m,i(`导出`));let h=r(`th`);a(p,h),a(h,i(`说明`));let g=r(`tbody`);a(l,g);let v=o(`rue:list:start`),y=o(`rue:list:end`);a(g,v),a(g,y);let x=new Map;return d(()=>{x=S({items:e.rows||[],getKey:(e,t)=>e.name,elements:x,parent:g,before:y,singleRoot:!0,trackIndex:!1,start:v,renderItem:(e,n,i,s,l)=>{f(b(()=>{let n=t(),i=r(`tr`);a(n,i),d(()=>{c(i,`key`,String(e.name))});let s=r(`td`);a(i,s);let l=r(`code`);a(s,l);let u=o(`rue:slot:anchor`);a(l,u),d(()=>{let t=e.name;_(()=>f(t,l,u))});let p=r(`td`);a(i,p);let m=o(`rue:slot:anchor`);return a(p,m),d(()=>{let t=e.description;_(()=>f(t,p,m))}),n}),n,i)}})}),s}),De=e=>b(()=>{let i=r(`div`);n(i,`flex flex-wrap gap-2 text-xs`);let c=r(`span`);a(i,c),d(()=>{n(c,String(`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`))});let u=s(c);a(c,u),d(()=>{l(u,e.ready?e.readyLabel:e.loadingLabel)});let p=o(`rue:slot:anchor`);return a(i,p),d(()=>{let s=e.error?b(()=>{let i=t(),s=r(`span`);a(i,s),n(s,`badge badge-error badge-soft`);let c=o(`rue:slot:anchor`);return a(s,c),d(()=>{let t=e.error;_(()=>f(t,s,c))}),i}):``;_(()=>f(s,i,p))}),i}),$=e=>b(()=>{let s=r(`div`);n(s,`component-preview not-prose my-6 text-base-content lg:my-12`);let c=r(`div`);a(s,c),n(c,`flex flex-wrap items-start justify-between gap-3`);let l=r(`div`);a(c,l);let u=r(`h2`);a(l,u),n(u,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(u,i(`# `));let p=o(`rue:slot:anchor`);a(u,p),d(()=>{let t=e.title;_(()=>f(t,u,p))});let m=o(`rue:slot:anchor`);a(l,m),d(()=>{let i=e.summary?b(()=>{let i=t(),s=r(`p`);a(i,s),n(s,`m-0 text-sm opacity-70`);let c=o(`rue:slot:anchor`);return a(s,c),d(()=>{let t=e.summary;_(()=>f(t,s,c))}),i}):``;_(()=>f(i,l,m))});let h=o(`rue:component:anchor`);a(s,h),d(()=>{let t=y(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});_(()=>f(t,s,h))});let g=o(`rue:slot:anchor`);return a(s,g),d(()=>{let n=e.tab.value===`preview`?e.preview():b(()=>{let n=t(),r=o(`rue:component:anchor`);return a(n,r),d(()=>{let t=y(D,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});_(()=>f(t,n,r))}),n});_(()=>f(n,s,g))}),s}),Oe=e=>b(()=>{let t=r(`div`);n(t,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let i=r(`div`);a(t,i),n(i,`badge badge-outline badge-sm`);let s=o(`rue:slot:anchor`);a(i,s),d(()=>{let t=e.badge;_(()=>f(t,i,s))});let c=r(`h3`);a(t,c),n(c,`mt-3 mb-1 text-base font-semibold`);let l=o(`rue:slot:anchor`);a(c,l),d(()=>{let t=e.title;_(()=>f(t,c,l))});let u=r(`p`);a(t,u),n(u,`m-0 text-sm text-base-content/70`);let p=o(`rue:slot:anchor`);return a(u,p),d(()=>{let t=e.detail;_(()=>f(t,u,p))}),t}),ke=()=>{let{value:e,mode:t,selectedSource:s,panelState:c}=x(`useSetup:0:0`,()=>u(()=>{let e=x(`ref:1:0`,()=>h(`2026-04-12`));return{value:e,mode:x(`ref:1:1`,()=>h(`month`)),selectedSource:x(`ref:1:2`,()=>h(`date`)),panelState:x(`ref:1:3`,()=>h(we(Y(e.value),`month`)))}}));return b(()=>{let l=r(`div`);n(l,`space-y-4`);let u=r(`div`);a(l,u),n(u,`grid gap-4`);let p=o(`rue:component:anchor`);a(u,p),d(()=>{let n=y(K,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,showWeek:!0,validRange:[Y(`2026-04-01`),Y(`2026-05-31`)],disabledDate:e=>e.getDay()===0||e.getDay()===6||ge.has(J(e)),onChange:t=>{e.value=J(t)},onPanelChange:(e,n)=>{t.value=n,c.value=we(e,n)},onSelect:(t,n)=>{e.value=J(t),s.value=n.source}});_(()=>f(n,u,p))});let m=r(`div`);a(u,m),n(m,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let h=r(`div`);a(m,h),n(h,`badge badge-primary badge-soft`),a(h,i(`Core Panel`));let g=r(`h3`);a(m,g),n(g,`mt-3 mb-1 text-base font-semibold`),a(g,i(`排班窗口`));let v=r(`p`);a(m,v),n(v,`m-0 text-sm text-base-content/70`),a(v,i(`同时演示受控 value、validRange、disabledDate、showWeek、onSelect 与 onPanelChange。`));let b=r(`div`);a(m,b),n(b,`mt-4 space-y-3`);let x=o(`rue:component:anchor`);a(b,x),d(()=>{let t=y(Q,{label:`当前值`,value:Z(e.value)});_(()=>f(t,b,x))});let S=o(`rue:component:anchor`);a(b,S),d(()=>{let e=y(Q,{label:`选择来源`,value:s.value});_(()=>f(e,b,S))});let C=o(`rue:component:anchor`);a(b,C),d(()=>{let e=y(Q,{label:`面板状态`,value:c.value});_(()=>f(e,b,C))});let w=o(`rue:component:anchor`);a(b,w),f(y(Q,{label:`禁用规则`,value:`周末 + 4/4、4/5、5/1`}),b,w);let T=r(`p`);return a(l,T),n(T,`m-0 text-xs text-base-content/70`),a(T,i(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),l})},Ae=()=>{let{value:e,mode:t}=x(`useSetup:0:0:dup1`,()=>u(()=>({value:x(`ref:1:4`,()=>h(`2026-04-15`)),mode:x(`ref:1:5`,()=>h(`month`))})));return b(()=>{let i=r(`div`);n(i,`space-y-4`);let s=o(`rue:component:anchor`);a(i,s),d(()=>{let n=y(K,{"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,onChange:t=>{e.value=J(t)},onPanelChange:(e,n)=>{t.value=n},cellRender:(e,t)=>{if(t.type===`month`){let t=ve[e.getMonth()];return t?w(`div`,{className:`space-y-1`,children:[T(`div`,{className:`text-lg font-semibold leading-none`,children:t}),T(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=_e[J(e)]??[];return n.length?w(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>T(`div`,{className:`badge badge-soft badge-xs ${ye[e.tone]}`,children:e.label},e.label)),n.length>2?w(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});_(()=>f(n,i,s))});let c=r(`div`);a(i,c),n(c,`grid gap-3 md:grid-cols-3`);let l=o(`rue:component:anchor`);a(c,l),d(()=>{let t=y(Q,{label:`当前日期`,value:Z(e.value)});_(()=>f(t,c,l))});let u=o(`rue:component:anchor`);a(c,u),d(()=>{let e=y(Q,{label:`4 月 15 日事件`,value:`${_e[`2026-04-15`]?.length??0} 条`});_(()=>f(e,c,u))});let p=o(`rue:component:anchor`);return a(c,p),d(()=>{let e=y(Q,{label:`9 月 backlog`,value:`${ve[8]} 项`});_(()=>f(e,c,p))}),i})},je=()=>{let{value:e,mode:t}=x(`useSetup:0:0:dup2`,()=>u(()=>({value:x(`ref:1:6`,()=>h(`2026-09-18`)),mode:x(`ref:1:7`,()=>h(`month`))})));return b(()=>{let s=r(`div`);n(s,`space-y-4`);let c=r(`div`);a(s,c),n(c,`grid gap-4`);let l=r(`div`);a(c,l),n(l,`max-w-full overflow-x-auto`);let u=o(`rue:component:anchor`);a(l,u),d(()=>{let n=y(K,{"data-testid":`card-calendar`,className:`w-fit max-w-none min-w-[34rem]`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:t.value,onChange:t=>{e.value=J(t)},onPanelChange:(e,n)=>{t.value=n},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=q[J(e)];return n==null?t.originNode:w(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[w(`div`,{className:`flex items-center justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),w(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),w(`div`,{className:`space-y-1`,children:[T(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:T(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),T(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});_(()=>f(n,l,u))});let p=r(`div`);a(c,p),n(p,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let m=r(`div`);a(p,m),n(m,`badge badge-secondary badge-soft`),a(m,i(`Card Mode`));let h=r(`h3`);a(p,h),n(h,`mt-3 mb-1 text-base font-semibold`),a(h,i(`容量面板`));let g=r(`p`);a(p,g),n(g,`m-0 text-sm text-base-content/70`),a(g,i(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let v=r(`div`);a(p,v),n(v,`mt-4 space-y-3`);let b=o(`rue:component:anchor`);a(v,b),d(()=>{let t=y(Q,{label:`当前日期`,value:Z(e.value)});_(()=>f(t,v,b))});let x=o(`rue:component:anchor`);a(v,x),f(y(Q,{label:`高负载日`,value:`9/18 · 92%`}),v,x);let S=o(`rue:component:anchor`);return a(v,S),f(y(Q,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),v,S),s})},Me=()=>{let{value:e,mode:t,actionSource:i}=x(`useSetup:0:0:dup3`,()=>u(()=>({value:x(`ref:1:8`,()=>h(`2026-07-04`)),mode:x(`ref:1:9`,()=>h(`month`)),actionSource:x(`ref:1:10`,()=>h(`date`))})));return b(()=>{let s=r(`div`);n(s,`space-y-4`);let c=o(`rue:component:anchor`);a(s,c),d(()=>{let n=y(K,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>w(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[w(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[w(`div`,{children:[T(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),T(`div`,{className:`mt-1 text-base font-semibold`,children:we(e,t)})]}),w(`div`,{className:`join`,children:[T(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),T(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),w(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[T(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>T(`option`,{value:e,children:e},e))}),T(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>T(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=J(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{i.value=t.source}});_(()=>f(n,s,c))});let l=r(`div`);a(s,l),n(l,`grid gap-3 md:grid-cols-3`);let u=o(`rue:component:anchor`);a(l,u),d(()=>{let t=y(Q,{label:`当前日期`,value:Z(e.value)});_(()=>f(t,l,u))});let p=o(`rue:component:anchor`);a(l,p),d(()=>{let e=y(Q,{label:`当前模式`,value:t.value});_(()=>f(e,l,p))});let m=o(`rue:component:anchor`);return a(l,m),d(()=>{let e=y(Q,{label:`最近来源`,value:i.value});_(()=>f(e,l,m))}),s})},Ne=()=>{let{calendarRef:e,cleanupRef:s,selectedValue:c,ready:l,error:m}=x(`useSetup:0:0:dup4`,()=>u(()=>{let e=x(`useRef:1:11`,()=>p()),t=x(`useRef:1:12`,()=>p(()=>{})),n=x(`ref:1:13`,()=>h(`2026-04-12`)),r=x(`ref:1:14`,()=>h(!1)),i=x(`ref:1:15`,()=>h(``));return g(()=>{let a=!0;xe().then(()=>{if(!a)return;r.value=!0;let i=e.current;if(!i)return;i.value=n.value;let o=()=>{n.value=i.value||``};i.addEventListener(`change`,o),t.current=()=>i.removeEventListener(`change`,o)}).catch(()=>{a&&(i.value=`Cally 加载失败`)}),v(()=>{a=!1})}),v(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:r,error:i}}));return b(()=>{let s=r(`div`);n(s,`space-y-3`);let u=o(`rue:component:anchor`);a(s,u);let p=b(()=>{let e=t(),n=o(`rue:component:anchor`);a(e,n),f(y(Ie,{}),e,n);let r=o(`rue:component:anchor`);a(e,r),f(y(Le,{}),e,r);let i=o(`rue:component:anchor`);return a(e,i),f(y(K.Month,{}),e,i),e});d(()=>{let t=y(K.Cally,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:p});_(()=>f(t,s,u))});let h=o(`rue:component:anchor`);a(s,h),d(()=>{let e=y(De,{ready:l.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:m.value});_(()=>f(e,s,h))});let g=r(`p`);a(s,g),n(g,`m-0 text-xs text-base-content/70`),a(g,i(`当前选择：`));let v=o(`rue:slot:anchor`);return a(g,v),d(()=>{let e=X(c.value);_(()=>f(e,g,v))}),a(g,i(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),s})},Pe=()=>{let{calendarRef:e,cleanupRef:s,selectedValue:l,open:S,ready:C,error:w}=x(`useSetup:0:0:dup5`,()=>u(()=>{let e=x(`useRef:1:16`,()=>p()),t=x(`useRef:1:17`,()=>p(()=>{})),n=x(`ref:1:18`,()=>h(``)),r=x(`ref:1:19`,()=>h(!1)),i=x(`ref:1:20`,()=>h(!1)),a=x(`ref:1:21`,()=>h(``));return g(()=>{let o=!0;xe().then(()=>{if(!o)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let s=()=>{n.value=a.value||``,r.value=!1};a.addEventListener(`change`,s),t.current=()=>a.removeEventListener(`change`,s)}).catch(()=>{o&&(a.value=`Cally 加载失败`)}),v(()=>{o=!1})}),v(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:r,ready:i,error:a}}));return b(()=>{let s=r(`div`);n(s,`space-y-3`);let u=r(`div`);a(s,u),n(u,`flex flex-wrap items-center gap-3`);let p=r(`button`);a(u,p),c(p,`type`,`button`),c(p,`data-testid`,`cally-picker-button`),n(p,`input input-bordered w-fit cursor-pointer`),m(p,`click`,()=>{S.value=!S.value});let h=o(`rue:slot:anchor`);a(p,h),d(()=>{let e=Ce(l.value);_(()=>f(e,p,h))});let g=r(`span`);a(u,g),n(g,`text-xs text-base-content/70`),a(g,i(`当前选择：`));let v=o(`rue:slot:anchor`);a(g,v),d(()=>{let e=X(l.value);_(()=>f(e,g,v))});let x=r(`div`);a(s,x),c(x,`data-testid`,`cally-picker-panel`),d(()=>{n(x,String(`inline-block rounded-box bg-base-100 p-3 shadow-lg ${S.value?``:`hidden`}`))});let T=o(`rue:component:anchor`);a(x,T);let E=b(()=>{let e=t(),n=o(`rue:component:anchor`);a(e,n),f(y(Ie,{}),e,n);let r=o(`rue:component:anchor`);a(e,r),f(y(Le,{}),e,r);let i=o(`rue:component:anchor`);return a(e,i),f(y(K.Month,{}),e,i),e});d(()=>{let t=y(K.Cally,{ref:e,"data-testid":`cally-picker-calendar`,children:E});_(()=>f(t,x,T))});let D=o(`rue:component:anchor`);a(s,D),d(()=>{let e=y(De,{ready:C.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:w.value});_(()=>f(e,s,D))});let O=r(`p`);return a(s,O),n(O,`m-0 text-xs text-base-content/70`),a(O,i(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),s})},Fe=e=>{let{inputRef:t,instanceRef:s,selectedValue:c,ready:l,error:m}=x(`useSetup:0:0:dup6`,()=>u(()=>{let e=x(`useRef:1:22`,()=>p()),t=x(`useRef:1:23`,()=>p()),n=x(`ref:1:24`,()=>h(``)),r=x(`ref:1:25`,()=>h(!1)),i=x(`ref:1:26`,()=>h(``));return g(()=>{let a=!0;Se().then(i=>{if(!a)return;let o=e.current;o&&(t.current=new i({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>J(e),onSelect:e=>{n.value=o.value||J(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,r.value=!0)}).catch(()=>{a&&(i.value=`Pikaday 加载失败`)}),v(()=>{a=!1})}),v(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:r,error:i}}));return b(()=>{let s=r(`div`);n(s,`space-y-3`);let u=o(`rue:component:anchor`);a(s,u),d(()=>{let n=y(K.PikaSingle,{ref:t,"data-testid":e.testId,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});_(()=>f(n,s,u))});let p=o(`rue:component:anchor`);a(s,p),d(()=>{let e=y(De,{ready:l.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:m.value});_(()=>f(e,s,p))});let h=r(`p`);a(s,h),n(h,`m-0 text-xs text-base-content/70`),a(h,i(`当前选择：`));let g=o(`rue:slot:anchor`);a(h,g),d(()=>{let e=X(c.value);_(()=>f(e,h,g))});let v=r(`p`);a(s,v),n(v,`m-0 text-xs text-base-content/70`);let b=o(`rue:slot:anchor`);return a(v,b),d(()=>{let t=e.note;_(()=>f(t,v,b))}),s})},Ie=()=>b(()=>{let e=r(`svg`);c(e,`aria-label`,`Previous`),n(e,`fill-current size-4`),c(e,`slot`,`previous`),c(e,`xmlns`,`http://www.w3.org/2000/svg`),c(e,`viewBox`,`0 0 24 24`);let t=r(`path`);return a(e,t),c(t,`fill`,`currentColor`),c(t,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),e}),Le=()=>b(()=>{let e=r(`svg`);c(e,`aria-label`,`Next`),n(e,`fill-current size-4`),c(e,`slot`,`next`),c(e,`xmlns`,`http://www.w3.org/2000/svg`),c(e,`viewBox`,`0 0 24 24`);let t=r(`path`);return a(e,t),c(t,`fill`,`currentColor`),c(t,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),e}),Re=`import { ref } from '@rue-js/rue'
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

const formatDateLabel = (value?: string | Date) => {
  if (!value) {
    return '未选择'
  }
  return typeof value === 'string' ? value : formatIsoDate(value)
}

export default function BasicCalendarDemo() {
  const value = ref('2026-04-12')
  const mode = ref<'month' | 'year'>('month')
  const selectedSource = ref('date')
  const panelState = ref(formatPanelLabel(parseDate(value.value), 'month'))

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <Calendar
          locale="zh-CN"
          value={value.value}
          mode={mode.value}
          showWeek
          validRange={[parseDate('2026-04-01'), parseDate('2026-05-31')]}
          disabledDate={date =>
            date.getDay() === 0 ||
            date.getDay() === 6 ||
            maintenanceDates.has(formatIsoDate(date))
          }
          onChange={date => {
            value.value = formatIsoDate(date)
          }}
          onPanelChange={(date, nextMode) => {
            mode.value = nextMode as 'month' | 'year'
            panelState.value = formatPanelLabel(date, nextMode as 'month' | 'year')
          }}
          onSelect={(date, info) => {
            value.value = formatIsoDate(date)
            selectedSource.value = info.source
          }}
        />

        <div className="rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm">
          <div className="badge badge-primary badge-soft">Core Panel</div>
          <h3 className="mt-3 mb-1 text-base font-semibold">排班窗口</h3>
          <p className="m-0 text-sm text-base-content/70">
            同时演示受控 value、validRange、disabledDate、showWeek、onSelect 与 onPanelChange。
          </p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
                当前值
              </span>
              <span className="text-sm font-medium">{formatDateLabel(value.value)}</span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
                选择来源
              </span>
              <span className="text-sm font-medium">{selectedSource.value}</span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
                面板状态
              </span>
              <span className="text-sm font-medium">{panelState.value}</span>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
                禁用规则
              </span>
              <span className="text-sm font-medium">周末 + 4/4、4/5、5/1</span>
            </div>
          </div>
        </div>
      </div>

      <p className="m-0 text-xs text-base-content/70">
        日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。
      </p>
    </div>
  )
}`,ze=`import { ref } from '@rue-js/rue'
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
  const value = ref('2026-04-15')
  const mode = ref<'month' | 'year'>('month')

  return (
    <div className="space-y-4">
      <Calendar
        locale="zh-CN"
        value={value.value}
        mode={mode.value}
        onChange={date => {
          value.value = formatIsoDate(date)
        }}
        onPanelChange={(_date, nextMode) => {
          mode.value = nextMode as 'month' | 'year'
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
          <span className="text-sm font-medium">{value.value}</span>
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
}`,Be=`import { ref } from '@rue-js/rue'
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
  const value = ref('2026-09-18')
  const mode = ref<'month' | 'year'>('month')

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <div className="max-w-full overflow-x-auto">
          <Calendar
            className="w-fit max-w-none min-w-[34rem]"
            locale="zh-CN"
            fullscreen={false}
            value={value.value}
            mode={mode.value}
            onChange={date => {
              value.value = formatIsoDate(date)
            }}
            onPanelChange={(_date, nextMode) => {
              mode.value = nextMode as 'month' | 'year'
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
              <span className="text-sm font-medium">{value.value}</span>
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
}`,Ve=`import { ref } from '@rue-js/rue'
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
  const value = ref('2026-07-04')
  const mode = ref<'month' | 'year'>('month')
  const actionSource = ref('date')

  return (
    <div className="space-y-4">
      <Calendar
        locale="zh-CN"
        value={value.value}
        mode={mode.value}
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
          value.value = formatIsoDate(date)
        }}
        onPanelChange={(_date, nextMode) => {
          mode.value = nextMode as 'month' | 'year'
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
          <span className="text-sm font-medium">{value.value}</span>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">
            当前模式
          </span>
          <span className="text-sm font-medium">{mode.value}</span>
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
}`,He=`import 'cally'
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
}`,Ue=`import 'cally'
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
}`,We=()=>{let{tabBasic:e,tabNotice:s,tabCard:l,tabHeader:p,tabCallyCalendar:m,tabCallyDatePicker:g,tabPikaday:v}=x(`useSetup:0:0:dup7`,()=>u(()=>({tabBasic:x(`ref:1:27`,()=>h(`preview`)),tabNotice:x(`ref:1:28`,()=>h(`preview`)),tabCard:x(`ref:1:29`,()=>h(`preview`)),tabHeader:x(`ref:1:30`,()=>h(`preview`)),tabCallyCalendar:x(`ref:1:31`,()=>h(`preview`)),tabCallyDatePicker:x(`ref:1:32`,()=>h(`preview`)),tabPikaday:x(`ref:1:33`,()=>h(`preview`))})));return b(()=>{let u=t(),h=o(`rue:component:anchor`);return a(u,h),f(y(E,{children:b(()=>{let u=t(),h=r(`div`);a(u,h),n(h,`prose prose-sm max-w-none md:prose-base`);let b=r(`h1`);a(h,b),a(b,i(`Calendar 日历`));let x=r(`p`);a(h,x),n(x,`mt-3 mb-3 text-sm`),a(x,i(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let S=r(`div`);a(h,S),n(S,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let C=o(`rue:component:anchor`);a(S,C),f(y(Oe,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),S,C);let w=o(`rue:component:anchor`);a(S,w),f(y(Oe,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),S,w);let E=o(`rue:component:anchor`);a(S,E),f(y(Oe,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),S,E);let D=r(`div`);a(h,D),n(D,`mt-4 text-sm`);let O=r(`a`);a(D,O),c(O,`href`,`https://daisyui.com/components/calendar/`),c(O,`target`,`_blank`),a(O,i(`查看 Calendar 静态样式`));let k=o(`rue:component:anchor`);a(h,k),d(()=>{let t=y($,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:()=>T(ke,{}),code:Re});_(()=>f(t,h,k))});let ee=o(`rue:component:anchor`);a(h,ee),d(()=>{let e=y($,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:s,preview:()=>T(Ae,{}),code:ze});_(()=>f(e,h,ee))});let A=o(`rue:component:anchor`);a(h,A),d(()=>{let e=y($,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:l,preview:()=>T(je,{}),code:Be});_(()=>f(e,h,A))});let j=o(`rue:component:anchor`);a(h,j),d(()=>{let e=y($,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:p,preview:()=>T(Me,{}),code:Ve});_(()=>f(e,h,j))});let M=o(`rue:component:anchor`);a(h,M),d(()=>{let e=y($,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:m,preview:()=>T(Ne,{}),code:He});_(()=>f(e,h,M))});let N=o(`rue:component:anchor`);a(h,N),d(()=>{let e=y($,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:g,preview:()=>T(Pe,{}),code:Ue});_(()=>f(e,h,N))});let P=o(`rue:component:anchor`);a(h,P),d(()=>{let e=y($,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:v,preview:()=>T(Fe,{testId:`pikaday-cdn-input`,note:`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`}),lang:`html`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});_(()=>f(e,h,P))});let F=r(`section`);a(h,F),n(F,`my-12 space-y-6`);let I=r(`div`);a(F,I);let L=r(`h2`);a(I,L),n(L,`mb-2`),a(L,i(`API`));let R=r(`p`);a(I,R),n(R,`m-0 text-sm text-base-content/70`),a(R,i(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let z=o(`rue:component:anchor`);a(F,z),d(()=>{let e=y(Te,{rows:me});_(()=>f(e,F,z))});let te=r(`div`);a(F,te);let B=r(`h2`);a(te,B),n(B,`mb-2`),a(B,i(`附属导出`));let V=r(`p`);a(te,V),n(V,`m-0 text-sm text-base-content/70`),a(V,i(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let H=o(`rue:component:anchor`);return a(F,H),d(()=>{let e=y(Ee,{rows:he});_(()=>f(e,F,H))}),u})}),u,h),u})};export{We as default};
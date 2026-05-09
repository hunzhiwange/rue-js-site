const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-tTjA8gKJ.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{A as t,F as n,H as r,I as i,L as a,N as o,P as s,W as c,Y as l,c as u,j as d,lt as f,o as p,pt as m,rt as h,s as g,t as _,u as v,ut as y}from"./vapor-runtime-BZZbPG7x.js";import{a as b,n as x}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as S}from"./preload-helper-qlgyTAkD.js";import{n as C,t as w}from"./src-DP0sEeZS.js";import{n as T}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as E}from"./Code-C8wy38VS.js";import{t as D}from"./tabs-B-QPmbH8.js";var O=(e,t)=>t?`${e} ${t}`:e,k=e=>typeof e==`number`&&e>=0&&e<=6?e:1,A=e=>new Date(e.getTime()),j=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},M=e=>{let t=A(e);return t.setHours(0,0,0,0),t},N=e=>j(e.getFullYear(),e.getMonth(),1),P=e=>j(e.getFullYear(),e.getMonth()+1,0),F=e=>j(e.getFullYear(),0,1),I=e=>j(e.getFullYear(),11,31),L=(e,t)=>j(e.getFullYear(),e.getMonth(),e.getDate()+t),R=e=>e instanceof Date&&!Number.isNaN(e.getTime()),z=(e,t=new Date)=>{if(R(e))return A(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(R(t))return t}return A(t)},ee=e=>{if(!e)return null;let t=M(z(e[0])),n=M(z(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},B=(e,t)=>e.getFullYear()===t.getFullYear(),V=(e,t)=>B(e,t)&&e.getMonth()===t.getMonth(),H=(e,t)=>V(e,t)&&e.getDate()===t.getDate(),U=(e,t)=>{let n=j(e.getFullYear(),e.getMonth()+t,1),r=P(n).getDate();return j(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},W=(e,t)=>{let n=j(e.getFullYear()+t,e.getMonth(),1),r=P(n).getDate();return j(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},te=(e,t)=>W(e,t-e.getFullYear()),ne=(e,t)=>U(e,t-e.getMonth()),re=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ie=(e,t,n)=>{let r=M(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(A(r))},ae=(e,t,n)=>{let r=N(e),i=P(e);if(t&&(i.getTime()<t.start.getTime()||r.getTime()>t.end.getTime()))return!1;let a=r;for(;a.getTime()<=i.getTime();){if(ie(a,t,n))return!0;a=L(a,1)}return!1},oe=(e,t,n)=>{let r=F(e),i=I(e);return t&&(i.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>j(e.getFullYear(),n,1)).some(e=>ae(e,t,n))},se=e=>{let t=M(e),n=j(L(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=L(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},ce=(e,t)=>{let n=new Intl.DateTimeFormat(e,{weekday:`short`}),r=j(2026,2,1);return Array.from({length:7},(e,i)=>n.format(L(r,(t+i)%7)))},le=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},ue=(e,t,n,r)=>{let i=new Intl.DateTimeFormat(e,{month:`short`});return Array.from({length:12},(e,a)=>{let o=j(t.getFullYear(),a,1);return{value:a,label:i.format(o),disabled:!ae(o,n,r)}})},de=(e,t)=>{let n=N(e),r=L(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=L(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:se(i),cells:Array.from({length:7},(t,n)=>{let r=L(i,n);return{key:re(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},G=Object.assign(({value:e,defaultValue:t,mode:n,fullscreen:r=!0,showWeek:i,locale:a,weekStartsOn:o,validRange:s,disabledDate:c,dateFullCellRender:l,dateCellRender:u,monthFullCellRender:d,monthCellRender:f,cellRender:p,fullCellRender:m,headerRender:g,className:_,onChange:v,onPanelChange:y,onSelect:b,...x})=>{let S=h(z(e??t??new Date)),T=h(n??`month`),E=e===void 0?S.value:z(e,S.value),D=n??T.value,N=M(new Date),P=ee(s),F=a??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),I=k(o),L=F.toLowerCase().startsWith(`zh`),R=ce(F,I),re=de(E,I),se=le(E,P),G=ue(F,E,P,c),fe=O(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${r?`rounded-[1.75rem]`:`max-w-[24rem] rounded-[1.5rem]`}`,_),K=i?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,pe=D===`month`?new Intl.DateTimeFormat(F,{year:`numeric`,month:`long`}).format(E):new Intl.DateTimeFormat(F,{year:`numeric`}).format(E),me=new Intl.DateTimeFormat(F,{weekday:`long`,month:`long`,day:`numeric`}).format(N),he=L?`今天`:`Today`,ge=L?`月`:`Month`,_e=L?`年`:`Year`,ve=L?`周`:`Week`,q=L?`今`:`Today`,ye=D===`month`?L?`月视图`:`Month view`:L?`年视图`:`Year view`,be=D===`month`?!ae(U(E,-1),P,c):!oe(W(E,-1),P,c),xe=D===`month`?!ae(U(E,1),P,c):!oe(W(E,1),P,c),J=!ie(N,P,c),Y=(t,n)=>{let r=M(z(t,E)),i=!H(r,E),a=D===`month`?!V(r,E):!B(r,E);e===void 0&&(S.value=r),i&&v?.(A(r)),a&&y?.(A(r),D),b?.(A(r),{source:n})},X=e=>{e!==D&&(n===void 0&&(T.value=e),y?.(A(E),e))},Se={value:A(E),type:D,yearOptions:se,monthOptions:G,onChange:e=>Y(e,`customize`),onTypeChange:X,onYearChange:e=>Y(te(E,e),`customize`),onMonthChange:e=>Y(ne(E,e),`customize`)},Z=(e,t,n,i)=>{let a=H(n.date,E),o=H(n.date,N),s=!ie(n.date,P,c),d=w(`div`,{className:`flex h-full flex-col gap-2`,children:C(`div`,{className:`flex items-start justify-between gap-2`,children:[w(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?w(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]})}),f=p?.(A(n.date),{type:`date`,originNode:d,today:A(N),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:i,week:e.week})??u?.(A(n.date)),h=C(`div`,{className:`flex h-full flex-col gap-2`,children:[C(`div`,{className:`flex items-start justify-between gap-2`,children:[w(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?w(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]}),w(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${a?`opacity-90`:`opacity-75`}`,children:f})]}),g=m?.(A(n.date),{type:`date`,originNode:h,today:A(N),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:i,week:e.week})??l?.(A(n.date))??h,_=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${r?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return a?_+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:s?_+=` border-base-300/70 bg-base-200/50 text-base-content/35`:n.inView?_+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:_+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,o&&!a&&(_+=` ring-1 ring-primary/20`),w(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:_,onClick:()=>Y(n.date,`date`),children:g},n.key)},Ce=(e,t)=>{let n=j(E.getFullYear(),e.value,1),i=V(n,E),a=V(n,N),o=e.disabled===!0,s=w(`div`,{className:`flex h-full flex-col gap-2`,children:C(`div`,{className:`flex items-center justify-between gap-2`,children:[w(`span`,{className:`text-sm font-semibold`,children:e.label}),a?w(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]})}),c=p?.(A(n),{type:`month`,originNode:s,today:A(N),selected:i,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??f?.(A(n)),l=C(`div`,{className:`flex h-full flex-col gap-2`,children:[C(`div`,{className:`flex items-center justify-between gap-2`,children:[w(`span`,{className:`text-sm font-semibold`,children:e.label}),a?w(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]}),w(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${i?`opacity-90`:`opacity-75`}`,children:c})]}),u=m?.(A(n),{type:`month`,originNode:l,today:A(N),selected:i,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??d?.(A(n))??l,h=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${r?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return i?h+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:o?h+=` border-base-300/70 bg-base-200/50 text-base-content/35`:h+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,a&&!i&&(h+=` ring-1 ring-primary/20`),w(`button`,{type:`button`,"data-rue-calendar-month":`${E.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:h,onClick:()=>Y(n,`month`),children:u},`${E.getFullYear()}-${e.value}`)};return C(`div`,{...x,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":D,className:fe,children:[g?g(Se):C(`div`,{className:`border-b border-base-300/70 ${r?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[C(`div`,{children:[w(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),w(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:pe}),w(`div`,{className:`mt-1 text-xs text-base-content/60`,children:me})]}),C(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[C(`div`,{className:`join`,children:[w(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":L?`上一页`:`Previous`,disabled:be,onClick:()=>Y(D===`month`?U(E,-1):W(E,-1),`customize`),children:w(`span`,{"aria-hidden":`true`,children:`<`})}),w(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:J,onClick:()=>Y(N,`customize`),children:he}),w(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":L?`下一页`:`Next`,disabled:xe,onClick:()=>Y(D===`month`?U(E,1):W(E,1),`customize`),children:w(`span`,{"aria-hidden":`true`,children:`>`})})]}),w(`select`,{className:`select select-sm min-w-24`,value:E.getFullYear(),onChange:e=>Se.onYearChange(Number(e.currentTarget.value)),children:se.map(e=>w(`option`,{value:e,disabled:!oe(j(e,E.getMonth(),1),P,c),children:e},e))}),w(`select`,{className:`select select-sm min-w-24`,value:E.getMonth(),disabled:D===`year`,onChange:e=>Se.onMonthChange(Number(e.currentTarget.value)),children:G.map(e=>w(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),C(`div`,{className:`join`,children:[w(`button`,{type:`button`,className:`btn btn-sm join-item ${D===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>X(`month`),children:ge}),w(`button`,{type:`button`,className:`btn btn-sm join-item ${D===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>X(`year`),children:_e})]})]})]}),C(`div`,{className:r?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[C(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[w(`div`,{className:`badge badge-outline badge-sm`,children:ye}),i&&D===`month`?w(`div`,{className:`badge badge-soft badge-sm`,children:ve}):null]}),D===`month`?C(`div`,{className:`space-y-2`,children:[C(`div`,{className:K,children:[i?w(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:ve}):null,R.map(e=>w(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),w(`div`,{role:`grid`,className:`space-y-2`,children:re.map((e,t)=>C(`div`,{role:`row`,className:K,children:[i?w(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":e.week,children:e.week}):null,e.cells.map((n,r)=>Z(e,t,n,r))]},e.key))})]}):w(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:G.map((e,t)=>Ce(e,t))})]})]})},{Cally:({className:e,children:t,...n})=>w(`calendar-date`,{...n,className:O(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>w(`calendar-month`,{...n,className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>w(`input`,{...n,type:e,className:O(`pika-single`,t)})}),fe=null,K=null,pe=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],me=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],he=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),ge={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},_e={2:12,3:28,4:18,8:43},ve={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},q={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},ye=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,be=async()=>{typeof window>`u`||typeof customElements>`u`||(fe||=(async()=>{let e=ye();customElements.get(`calendar-date`)||await(e?.cally?e.cally():S(()=>import(`./cally-CpCBxJIp.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await fe)},xe=async()=>{if(!K){let t=ye();K=(t?.pikaday?t.pikaday():S(()=>import(`./pikaday-tTjA8gKJ.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return K},J=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Y=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},X=(e,t=`未选择`)=>e||t,Se=e=>e||`Pick a date`,Z=e=>e?typeof e==`string`?e:J(e):`未选择`,Ce=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Q=({label:e,value:t})=>v(()=>{let r=n(`div`);c(r,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let i=n(`span`);d(r,i),c(i,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let o=a(i);d(i,o),m(()=>{l(o,e)});let s=n(`span`);d(r,s),c(s,`text-sm font-medium`);let u=a(s);return d(s,u),m(()=>{l(u,t)}),r}),we=({rows:e})=>v(()=>{let t=n(`div`);c(t,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let a=n(`table`);d(t,a),c(a,`table table-zebra`);let l=n(`thead`);d(a,l);let f=n(`tr`);d(l,f);let p=n(`th`);d(f,p),d(p,i(`属性`));let h=n(`th`);d(f,h),d(h,i(`说明`));let g=n(`th`);d(f,g),d(g,i(`类型`));let _=n(`th`);d(f,_),d(_,i(`默认值`));let y=n(`tbody`);d(a,y);let b=o(`rue:list:start`),S=o(`rue:list:end`);d(y,b),d(y,S);let C=new Map;return m(()=>{C=x({items:e||[],getKey:(e,t)=>e.prop,elements:C,parent:y,before:S,singleRoot:!0,start:b,renderItem:(e,t,i,a,c)=>{u(v(()=>{let t=s(),i=n(`tr`);d(t,i),m(()=>{r(i,`key`,String(e.prop))});let a=n(`td`);d(i,a);let c=n(`code`);d(a,c);let l=o(`rue:slot:anchor`);d(c,l),m(()=>{let t=e.prop;u(t,c,l)});let f=n(`td`);d(i,f);let p=o(`rue:slot:anchor`);d(f,p),m(()=>{let t=e.description;u(t,f,p)});let h=n(`td`);d(i,h);let g=n(`code`);d(h,g);let _=o(`rue:slot:anchor`);d(g,_),m(()=>{let t=e.type;u(t,g,_)});let v=n(`td`);d(i,v);let y=n(`code`);d(v,y);let b=o(`rue:slot:anchor`);return d(y,b),m(()=>{let t=e.defaultValue;u(t,y,b)}),t}),t,i)}})}),t}),Te=({rows:e})=>v(()=>{let t=n(`div`);c(t,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let a=n(`table`);d(t,a),c(a,`table table-zebra`);let l=n(`thead`);d(a,l);let f=n(`tr`);d(l,f);let p=n(`th`);d(f,p),d(p,i(`导出`));let h=n(`th`);d(f,h),d(h,i(`说明`));let g=n(`tbody`);d(a,g);let _=o(`rue:list:start`),y=o(`rue:list:end`);d(g,_),d(g,y);let b=new Map;return m(()=>{b=x({items:e||[],getKey:(e,t)=>e.name,elements:b,parent:g,before:y,singleRoot:!0,start:_,renderItem:(e,t,i,a,c)=>{u(v(()=>{let t=s(),i=n(`tr`);d(t,i),m(()=>{r(i,`key`,String(e.name))});let a=n(`td`);d(i,a);let c=n(`code`);d(a,c);let l=o(`rue:slot:anchor`);d(c,l),m(()=>{let t=e.name;u(t,c,l)});let f=n(`td`);d(i,f);let p=o(`rue:slot:anchor`);return d(f,p),m(()=>{let t=e.description;u(t,f,p)}),t}),t,i)}})}),t}),Ee=({ready:e,readyLabel:t,loadingLabel:r,error:i})=>v(()=>{let f=n(`div`);c(f,`flex flex-wrap gap-2 text-xs`);let p=n(`span`);d(f,p),m(()=>{c(p,String(`badge ${e?`badge-success badge-soft`:`badge-outline`}`))});let h=a(p);d(p,h),m(()=>{l(h,e?t:r)});let g=o(`rue:slot:anchor`);return d(f,g),m(()=>{u(i?v(()=>{let e=s(),t=n(`span`);d(e,t),c(t,`badge badge-error badge-soft`);let r=a(t);return d(t,r),m(()=>{l(r,i)}),e}):``,f,g)}),f}),$=({title:e,summary:t,tab:r,preview:f,code:p,lang:h=`tsx`})=>v(()=>{let g=n(`div`);c(g,`component-preview not-prose my-6 text-base-content lg:my-12`);let y=n(`div`);d(g,y),c(y,`flex flex-wrap items-start justify-between gap-3`);let b=n(`div`);d(y,b);let x=n(`h2`);d(b,x),c(x,`component-preview-title mt-2 mb-1 text-lg font-semibold`),d(x,i(`# `));let S=a(x);d(x,S),m(()=>{l(S,e)});let C=o(`rue:slot:anchor`);d(b,C),m(()=>{u(t?v(()=>{let e=s(),r=n(`p`);d(e,r),c(r,`m-0 text-sm opacity-70`);let i=a(r);return d(r,i),m(()=>{l(i,t)}),e}):``,b,C)});let w=o(`rue:component:anchor`);d(g,w),m(()=>{u(_(D,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.value,onChange:e=>r.value=e,className:`mb-3 mt-4`}),g,w)});let T=o(`rue:slot:anchor`);return d(g,T),m(()=>{u(r.value===`preview`?f():v(()=>{let e=s(),t=o(`rue:component:anchor`);return d(e,t),m(()=>{u(_(E,{className:`mt-2`,lang:h,code:p}),e,t)}),e}),g,T)}),g}),De=({title:e,detail:t,badge:r})=>v(()=>{let i=n(`div`);c(i,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let o=n(`div`);d(i,o),c(o,`badge badge-outline badge-sm`);let s=a(o);d(o,s),m(()=>{l(s,r)});let u=n(`h3`);d(i,u),c(u,`mt-3 mb-1 text-base font-semibold`);let f=a(u);d(u,f),m(()=>{l(f,e)});let p=n(`p`);d(i,p),c(p,`m-0 text-sm text-base-content/70`);let h=a(p);return d(p,h),m(()=>{l(h,t)}),i}),Oe=()=>{let{value:e,mode:t,selectedSource:r,panelState:a}=b(`useSetup:0:0`,()=>y(()=>{let e=b(`ref:1:0`,()=>h(`2026-04-12`));return{value:e,mode:b(`ref:1:1`,()=>h(`month`)),selectedSource:b(`ref:1:2`,()=>h(`date`)),panelState:b(`ref:1:3`,()=>h(Ce(Y(e.value),`month`)))}}));return v(()=>{let s=n(`div`);c(s,`space-y-4`);let l=n(`div`);d(s,l),c(l,`grid gap-4`);let f=o(`rue:component:anchor`);d(l,f),m(()=>{u(_(G,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,showWeek:!0,validRange:[Y(`2026-04-01`),Y(`2026-05-31`)],disabledDate:e=>e.getDay()===0||e.getDay()===6||he.has(J(e)),onChange:t=>{e.value=J(t)},onPanelChange:(e,n)=>{t.value=n,a.value=Ce(e,n)},onSelect:(t,n)=>{e.value=J(t),r.value=n.source}}),l,f)});let p=n(`div`);d(l,p),c(p,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let h=n(`div`);d(p,h),c(h,`badge badge-primary badge-soft`),d(h,i(`Core Panel`));let g=n(`h3`);d(p,g),c(g,`mt-3 mb-1 text-base font-semibold`),d(g,i(`排班窗口`));let v=n(`p`);d(p,v),c(v,`m-0 text-sm text-base-content/70`),d(v,i(`同时演示受控 value、validRange、disabledDate、showWeek、onSelect 与 onPanelChange。`));let y=n(`div`);d(p,y),c(y,`mt-4 space-y-3`);let b=o(`rue:component:anchor`);d(y,b),m(()=>{u(_(Q,{label:`当前值`,value:Z(e.value)}),y,b)});let x=o(`rue:component:anchor`);d(y,x),m(()=>{u(_(Q,{label:`选择来源`,value:r.value}),y,x)});let S=o(`rue:component:anchor`);d(y,S),m(()=>{u(_(Q,{label:`面板状态`,value:a.value}),y,S)});let C=o(`rue:component:anchor`);d(y,C),u(_(Q,{label:`禁用规则`,value:`周末 + 4/4、4/5、5/1`}),y,C);let w=n(`p`);return d(s,w),c(w,`m-0 text-xs text-base-content/70`),d(w,i(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),s})},ke=()=>{let{value:e,mode:t}=b(`useSetup:0:0`,()=>y(()=>({value:b(`ref:1:4`,()=>h(`2026-04-15`)),mode:b(`ref:1:5`,()=>h(`month`))})));return v(()=>{let r=n(`div`);c(r,`space-y-4`);let i=o(`rue:component:anchor`);d(r,i),m(()=>{u(_(G,{"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,onChange:t=>{e.value=J(t)},onPanelChange:(e,n)=>{t.value=n},cellRender:(e,t)=>{if(t.type===`month`){let t=_e[e.getMonth()];return t?C(`div`,{className:`space-y-1`,children:[w(`div`,{className:`text-lg font-semibold leading-none`,children:t}),w(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=ge[J(e)]??[];return n.length?C(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>w(`div`,{className:`badge badge-soft badge-xs ${q[e.tone]}`,children:e.label},e.label)),n.length>2?C(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}}),r,i)});let a=n(`div`);d(r,a),c(a,`grid gap-3 md:grid-cols-3`);let s=o(`rue:component:anchor`);d(a,s),m(()=>{u(_(Q,{label:`当前日期`,value:Z(e.value)}),a,s)});let l=o(`rue:component:anchor`);d(a,l),m(()=>{u(_(Q,{label:`4 月 15 日事件`,value:`${ge[`2026-04-15`]?.length??0} 条`}),a,l)});let f=o(`rue:component:anchor`);return d(a,f),m(()=>{u(_(Q,{label:`9 月 backlog`,value:`${_e[8]} 项`}),a,f)}),r})},Ae=()=>{let{value:e,mode:t}=b(`useSetup:0:0`,()=>y(()=>({value:b(`ref:1:6`,()=>h(`2026-09-18`)),mode:b(`ref:1:7`,()=>h(`month`))})));return v(()=>{let r=n(`div`);c(r,`space-y-4`);let a=n(`div`);d(r,a),c(a,`grid gap-4`);let s=n(`div`);d(a,s),c(s,`max-w-full overflow-x-auto`);let l=o(`rue:component:anchor`);d(s,l),m(()=>{u(_(G,{"data-testid":`card-calendar`,className:`w-fit max-w-none min-w-[34rem]`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:t.value,onChange:t=>{e.value=J(t)},onPanelChange:(e,n)=>{t.value=n},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=ve[J(e)];return n==null?t.originNode:C(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[C(`div`,{className:`flex items-center justify-between gap-2`,children:[w(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),C(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),C(`div`,{className:`space-y-1`,children:[w(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:w(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),w(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}}),s,l)});let f=n(`div`);d(a,f),c(f,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let p=n(`div`);d(f,p),c(p,`badge badge-secondary badge-soft`),d(p,i(`Card Mode`));let h=n(`h3`);d(f,h),c(h,`mt-3 mb-1 text-base font-semibold`),d(h,i(`容量面板`));let g=n(`p`);d(f,g),c(g,`m-0 text-sm text-base-content/70`),d(g,i(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let v=n(`div`);d(f,v),c(v,`mt-4 space-y-3`);let y=o(`rue:component:anchor`);d(v,y),m(()=>{u(_(Q,{label:`当前日期`,value:Z(e.value)}),v,y)});let b=o(`rue:component:anchor`);d(v,b),u(_(Q,{label:`高负载日`,value:`9/18 · 92%`}),v,b);let x=o(`rue:component:anchor`);return d(v,x),u(_(Q,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),v,x),r})},je=()=>{let{value:e,mode:t,actionSource:r}=b(`useSetup:0:0`,()=>y(()=>({value:b(`ref:1:8`,()=>h(`2026-07-04`)),mode:b(`ref:1:9`,()=>h(`month`)),actionSource:b(`ref:1:10`,()=>h(`date`))})));return v(()=>{let i=n(`div`);c(i,`space-y-4`);let a=o(`rue:component:anchor`);d(i,a),m(()=>{u(_(G,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>C(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[C(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[C(`div`,{children:[w(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),w(`div`,{className:`mt-1 text-base font-semibold`,children:Ce(e,t)})]}),C(`div`,{className:`join`,children:[w(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),w(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),C(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[w(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>w(`option`,{value:e,children:e},e))}),w(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>w(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=J(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{r.value=t.source}}),i,a)});let s=n(`div`);d(i,s),c(s,`grid gap-3 md:grid-cols-3`);let l=o(`rue:component:anchor`);d(s,l),m(()=>{u(_(Q,{label:`当前日期`,value:Z(e.value)}),s,l)});let f=o(`rue:component:anchor`);d(s,f),m(()=>{u(_(Q,{label:`当前模式`,value:t.value}),s,f)});let p=o(`rue:component:anchor`);return d(s,p),m(()=>{u(_(Q,{label:`最近来源`,value:r.value}),s,p)}),i})},Me=()=>{let{calendarRef:e,cleanupRef:t,selectedValue:r,ready:x,error:S}=b(`useSetup:0:0`,()=>y(()=>{let e=b(`useRef:1:11`,()=>f()),t=b(`useRef:1:12`,()=>f(()=>{})),n=b(`ref:1:13`,()=>h(`2026-04-12`)),r=b(`ref:1:14`,()=>h(!1)),i=b(`ref:1:15`,()=>h(``));return p(()=>{let a=!0;be().then(()=>{if(!a)return;r.value=!0;let i=e.current;if(!i)return;i.value=n.value;let o=()=>{n.value=i.value||``};i.addEventListener(`change`,o),t.current=()=>i.removeEventListener(`change`,o)}).catch(()=>{a&&(i.value=`Cally 加载失败`)}),g(()=>{a=!1})}),g(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:r,error:i}}));return v(()=>{let t=n(`div`);c(t,`space-y-3`);let f=o(`rue:component:anchor`);d(t,f);let p=v(()=>{let e=s(),t=o(`rue:component:anchor`);d(e,t),u(_(Fe,{}),e,t);let n=o(`rue:component:anchor`);d(e,n),u(_(Ie,{}),e,n);let r=o(`rue:component:anchor`);return d(e,r),u(_(G.Month,{}),e,r),e});m(()=>{u(_(G.Cally,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:p}),t,f)});let h=o(`rue:component:anchor`);d(t,h),m(()=>{u(_(Ee,{ready:x.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:S.value}),t,h)});let g=n(`p`);d(t,g),c(g,`m-0 text-xs text-base-content/70`),d(g,i(`当前选择：`));let y=a(g);return d(g,y),m(()=>{l(y,X(r.value))}),d(g,i(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),t})},Ne=()=>{let{calendarRef:e,cleanupRef:x,selectedValue:S,open:C,ready:w,error:T}=b(`useSetup:0:0`,()=>y(()=>{let e=b(`useRef:1:16`,()=>f()),t=b(`useRef:1:17`,()=>f(()=>{})),n=b(`ref:1:18`,()=>h(``)),r=b(`ref:1:19`,()=>h(!1)),i=b(`ref:1:20`,()=>h(!1)),a=b(`ref:1:21`,()=>h(``));return p(()=>{let o=!0;be().then(()=>{if(!o)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let s=()=>{n.value=a.value||``,r.value=!1};a.addEventListener(`change`,s),t.current=()=>a.removeEventListener(`change`,s)}).catch(()=>{o&&(a.value=`Cally 加载失败`)}),g(()=>{o=!1})}),g(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:r,ready:i,error:a}}));return v(()=>{let f=n(`div`);c(f,`space-y-3`);let p=n(`div`);d(f,p),c(p,`flex flex-wrap items-center gap-3`);let h=n(`button`);d(p,h),r(h,`type`,`button`),r(h,`data-testid`,`cally-picker-button`),c(h,`input input-bordered w-fit cursor-pointer`),t(h,`click`,()=>{C.value=!C.value});let g=a(h);d(h,g),m(()=>{l(g,Se(S.value))});let y=n(`span`);d(p,y),c(y,`text-xs text-base-content/70`),d(y,i(`当前选择：`));let b=a(y);d(y,b),m(()=>{l(b,X(S.value))});let x=n(`div`);d(f,x),r(x,`data-testid`,`cally-picker-panel`),m(()=>{c(x,String(`inline-block rounded-box bg-base-100 p-3 shadow-lg ${C.value?``:`hidden`}`))});let E=o(`rue:component:anchor`);d(x,E);let D=v(()=>{let e=s(),t=o(`rue:component:anchor`);d(e,t),u(_(Fe,{}),e,t);let n=o(`rue:component:anchor`);d(e,n),u(_(Ie,{}),e,n);let r=o(`rue:component:anchor`);return d(e,r),u(_(G.Month,{}),e,r),e});m(()=>{u(_(G.Cally,{ref:e,"data-testid":`cally-picker-calendar`,children:D}),x,E)});let O=o(`rue:component:anchor`);d(f,O),m(()=>{u(_(Ee,{ready:w.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:T.value}),f,O)});let k=n(`p`);return d(f,k),c(k,`m-0 text-xs text-base-content/70`),d(k,i(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),f})},Pe=({note:e,testId:t})=>{let{inputRef:r,instanceRef:s,selectedValue:x,ready:S,error:C}=b(`useSetup:0:0`,()=>y(()=>{let e=b(`useRef:1:22`,()=>f()),t=b(`useRef:1:23`,()=>f()),n=b(`ref:1:24`,()=>h(``)),r=b(`ref:1:25`,()=>h(!1)),i=b(`ref:1:26`,()=>h(``));return p(()=>{let a=!0;xe().then(i=>{if(!a)return;let o=e.current;o&&(t.current=new i({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>J(e),onSelect:e=>{n.value=o.value||J(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,r.value=!0)}).catch(()=>{a&&(i.value=`Pikaday 加载失败`)}),g(()=>{a=!1})}),g(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:r,error:i}}));return v(()=>{let s=n(`div`);c(s,`space-y-3`);let f=o(`rue:component:anchor`);d(s,f),m(()=>{u(_(G.PikaSingle,{ref:r,"data-testid":t,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`}),s,f)});let p=o(`rue:component:anchor`);d(s,p),m(()=>{u(_(Ee,{ready:S.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:C.value}),s,p)});let h=n(`p`);d(s,h),c(h,`m-0 text-xs text-base-content/70`),d(h,i(`当前选择：`));let g=a(h);d(h,g),m(()=>{l(g,X(x.value))});let v=n(`p`);d(s,v),c(v,`m-0 text-xs text-base-content/70`);let y=a(v);return d(v,y),m(()=>{l(y,e)}),s})},Fe=()=>v(()=>{let e=n(`svg`);r(e,`aria-label`,`Previous`),c(e,`fill-current size-4`),r(e,`slot`,`previous`),r(e,`xmlns`,`http://www.w3.org/2000/svg`),r(e,`viewBox`,`0 0 24 24`);let t=n(`path`);return d(e,t),r(t,`fill`,`currentColor`),r(t,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),e}),Ie=()=>v(()=>{let e=n(`svg`);r(e,`aria-label`,`Next`),c(e,`fill-current size-4`),r(e,`slot`,`next`),r(e,`xmlns`,`http://www.w3.org/2000/svg`),r(e,`viewBox`,`0 0 24 24`);let t=n(`path`);return d(e,t),r(t,`fill`,`currentColor`),r(t,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),e}),Le=`import { ref } from '@rue-js/rue'
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
}`,Re=`import { ref } from '@rue-js/rue'
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
}`,ze=`import { ref } from '@rue-js/rue'
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
}`,Be=`import { ref } from '@rue-js/rue'
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
}`,Ve=`import 'cally'
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
}`,He=`import 'cally'
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
}`,Ue=()=>{let{tabBasic:e,tabNotice:t,tabCard:a,tabHeader:l,tabCallyCalendar:f,tabCallyDatePicker:p,tabPikaday:g}=b(`useSetup:0:0`,()=>y(()=>({tabBasic:b(`ref:1:27`,()=>h(`preview`)),tabNotice:b(`ref:1:28`,()=>h(`preview`)),tabCard:b(`ref:1:29`,()=>h(`preview`)),tabHeader:b(`ref:1:30`,()=>h(`preview`)),tabCallyCalendar:b(`ref:1:31`,()=>h(`preview`)),tabCallyDatePicker:b(`ref:1:32`,()=>h(`preview`)),tabPikaday:b(`ref:1:33`,()=>h(`preview`))})));return v(()=>{let h=s(),y=o(`rue:component:anchor`);return d(h,y),u(_(T,{children:v(()=>{let h=s(),v=n(`div`);d(h,v),c(v,`prose prose-sm max-w-none md:prose-base`);let y=n(`h1`);d(v,y),d(y,i(`Calendar 日历`));let b=n(`p`);d(v,b),c(b,`mt-3 mb-3 text-sm`),d(b,i(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let x=n(`div`);d(v,x),c(x,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let S=o(`rue:component:anchor`);d(x,S),u(_(De,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),x,S);let C=o(`rue:component:anchor`);d(x,C),u(_(De,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),x,C);let T=o(`rue:component:anchor`);d(x,T),u(_(De,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),x,T);let E=n(`div`);d(v,E),c(E,`mt-4 text-sm`);let D=n(`a`);d(E,D),r(D,`href`,`https://daisyui.com/components/calendar/`),r(D,`target`,`_blank`),d(D,i(`查看 Calendar 静态样式`));let O=o(`rue:component:anchor`);d(v,O),m(()=>{u(_($,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:()=>w(Oe,{}),code:Le}),v,O)});let k=o(`rue:component:anchor`);d(v,k),m(()=>{u(_($,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:t,preview:()=>w(ke,{}),code:Re}),v,k)});let A=o(`rue:component:anchor`);d(v,A),m(()=>{u(_($,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:a,preview:()=>w(Ae,{}),code:ze}),v,A)});let j=o(`rue:component:anchor`);d(v,j),m(()=>{u(_($,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:l,preview:()=>w(je,{}),code:Be}),v,j)});let M=o(`rue:component:anchor`);d(v,M),m(()=>{u(_($,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:f,preview:()=>w(Me,{}),code:Ve}),v,M)});let N=o(`rue:component:anchor`);d(v,N),m(()=>{u(_($,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:p,preview:()=>w(Ne,{}),code:He}),v,N)});let P=o(`rue:component:anchor`);d(v,P),m(()=>{u(_($,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:g,preview:()=>w(Pe,{testId:`pikaday-cdn-input`,note:`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`}),lang:`html`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`}),v,P)});let F=n(`section`);d(v,F),c(F,`my-12 space-y-6`);let I=n(`div`);d(F,I);let L=n(`h2`);d(I,L),c(L,`mb-2`),d(L,i(`API`));let R=n(`p`);d(I,R),c(R,`m-0 text-sm text-base-content/70`),d(R,i(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let z=o(`rue:component:anchor`);d(F,z),m(()=>{u(_(we,{rows:pe}),F,z)});let ee=n(`div`);d(F,ee);let B=n(`h2`);d(ee,B),c(B,`mb-2`),d(B,i(`附属导出`));let V=n(`p`);d(ee,V),c(V,`m-0 text-sm text-base-content/70`),d(V,i(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let H=o(`rue:component:anchor`);return d(F,H),m(()=>{u(_(Te,{rows:me}),F,H)}),h})}),h,y),h})};export{Ue as default};
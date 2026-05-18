const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BrtZYcYk.js","assets/chunk-62oNxeRG.js"])))=>i.map(i=>d[i]);
import{i as e}from"./chunk-62oNxeRG.js";import{F as t,I as n,K as r,L as i,M as a,N as o,Q as s,R as c,W as l,d as u,dt as d,ht as f,l as p,mt as m,o as h,s as g,st as _,t as v,vt as y,z as b}from"./vapor-runtime-BuwLbCGk.js";import{a as x,n as S}from"./vapor-helpers-vapor-Bly5xJie.js";import{t as C}from"./preload-helper-qlgyTAkD.js";import{n as w,t as T}from"./src-BQwLQD8R.js";import{n as E}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as D}from"./Code-DQxnq0in.js";import{t as O}from"./tabs-DqfJzZfa.js";var k=(e,t)=>t?`${e} ${t}`:e,ee=e=>typeof e==`number`&&e>=0&&e<=6?e:1,A=e=>new Date(e.getTime()),j=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},M=e=>{let t=A(e);return t.setHours(0,0,0,0),t},N=e=>j(e.getFullYear(),e.getMonth(),1),P=e=>j(e.getFullYear(),e.getMonth()+1,0),F=e=>j(e.getFullYear(),0,1),I=e=>j(e.getFullYear(),11,31),L=(e,t)=>j(e.getFullYear(),e.getMonth(),e.getDate()+t),R=e=>e instanceof Date&&!Number.isNaN(e.getTime()),z=(e,t=new Date)=>{if(R(e))return A(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(R(t))return t}return A(t)},B=e=>{if(!e)return null;let t=M(z(e[0])),n=M(z(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},V=(e,t)=>e.getFullYear()===t.getFullYear(),H=(e,t)=>V(e,t)&&e.getMonth()===t.getMonth(),U=(e,t)=>H(e,t)&&e.getDate()===t.getDate(),W=(e,t)=>{let n=j(e.getFullYear(),e.getMonth()+t,1),r=P(n).getDate();return j(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},G=(e,t)=>{let n=j(e.getFullYear()+t,e.getMonth(),1),r=P(n).getDate();return j(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},te=(e,t)=>G(e,t-e.getFullYear()),ne=(e,t)=>W(e,t-e.getMonth()),re=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ie=(e,t,n)=>{let r=M(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(A(r))},ae=(e,t,n)=>{let r=N(e),i=P(e);if(t&&(i.getTime()<t.start.getTime()||r.getTime()>t.end.getTime()))return!1;let a=r;for(;a.getTime()<=i.getTime();){if(ie(a,t,n))return!0;a=L(a,1)}return!1},oe=(e,t,n)=>{let r=F(e),i=I(e);return t&&(i.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>j(e.getFullYear(),n,1)).some(e=>ae(e,t,n))},se=e=>{let t=M(e),n=j(L(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=L(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},ce=(e,t)=>{let n=new Intl.DateTimeFormat(e,{weekday:`short`}),r=j(2026,2,1);return Array.from({length:7},(e,i)=>n.format(L(r,(t+i)%7)))},le=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},ue=(e,t,n,r)=>{let i=new Intl.DateTimeFormat(e,{month:`short`});return Array.from({length:12},(e,a)=>{let o=j(t.getFullYear(),a,1);return{value:a,label:i.format(o),disabled:!ae(o,n,r)}})},de=(e,t)=>{let n=N(e),r=L(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=L(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:se(i),cells:Array.from({length:7},(t,n)=>{let r=L(i,n);return{key:re(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},K=Object.assign(({value:e,defaultValue:t,mode:n,fullscreen:r=!0,showWeek:i,locale:a,weekStartsOn:o,validRange:s,disabledDate:c,dateFullCellRender:l,dateCellRender:u,monthFullCellRender:d,monthCellRender:f,cellRender:p,fullCellRender:m,headerRender:h,className:g,onChange:v,onPanelChange:y,onSelect:b,...x})=>{let S=_(z(e??t??new Date)),C=_(n??`month`),E=e===void 0?S.value:z(e,S.value),D=n??C.value,O=M(new Date),N=B(s),P=a??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),F=ee(o),I=P.toLowerCase().startsWith(`zh`),L=ce(P,F),R=de(E,F),re=le(E,N),se=ue(P,E,N,c),K=k(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${r?`rounded-[1.75rem]`:`max-w-[24rem] rounded-[1.5rem]`}`,g),fe=i?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,pe=D===`month`?new Intl.DateTimeFormat(P,{year:`numeric`,month:`long`}).format(E):new Intl.DateTimeFormat(P,{year:`numeric`}).format(E),me=new Intl.DateTimeFormat(P,{weekday:`long`,month:`long`,day:`numeric`}).format(O),he=I?`今天`:`Today`,ge=I?`月`:`Month`,_e=I?`年`:`Year`,ve=I?`周`:`Week`,q=I?`今`:`Today`,ye=D===`month`?I?`月视图`:`Month view`:I?`年视图`:`Year view`,be=D===`month`?!ae(W(E,-1),N,c):!oe(G(E,-1),N,c),xe=D===`month`?!ae(W(E,1),N,c):!oe(G(E,1),N,c),Se=!ie(O,N,c),J=(t,n)=>{let r=M(z(t,E)),i=!U(r,E),a=D===`month`?!H(r,E):!V(r,E);e===void 0&&(S.value=r),i&&v?.(A(r)),a&&y?.(A(r),D),b?.(A(r),{source:n})},Y=e=>{e!==D&&(n===void 0&&(C.value=e),y?.(A(E),e))},X={value:A(E),type:D,yearOptions:re,monthOptions:se,onChange:e=>J(e,`customize`),onTypeChange:Y,onYearChange:e=>J(te(E,e),`customize`),onMonthChange:e=>J(ne(E,e),`customize`)},Ce=(e,t,n,i)=>{let a=U(n.date,E),o=U(n.date,O),s=!ie(n.date,N,c),d=T(`div`,{className:`flex h-full flex-col gap-2`,children:w(`div`,{className:`flex items-start justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?T(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]})}),f=p?.(A(n.date),{type:`date`,originNode:d,today:A(O),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:i,week:e.week})??u?.(A(n.date)),h=w(`div`,{className:`flex h-full flex-col gap-2`,children:[w(`div`,{className:`flex items-start justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold ${n.inView?``:`opacity-60`}`,children:n.date.getDate()}),o?T(`span`,{className:`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]}),T(`div`,{className:`min-h-[1.85rem] text-[0.68rem] leading-4 ${a?`opacity-90`:`opacity-75`}`,children:f})]}),g=m?.(A(n.date),{type:`date`,originNode:h,today:A(O),selected:a,isToday:o,inView:n.inView,disabled:s,row:t,column:i,week:e.week})??l?.(A(n.date))??h,_=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${r?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return a?_+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:s?_+=` border-base-300/70 bg-base-200/50 text-base-content/35`:n.inView?_+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:_+=` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,o&&!a&&(_+=` ring-1 ring-primary/20`),T(`button`,{type:`button`,role:`gridcell`,"data-rue-calendar-cell":n.key,"data-rue-calendar-in-view":n.inView?`true`:`false`,"aria-pressed":a?`true`:`false`,"aria-current":o?`date`:void 0,disabled:s,className:_,onClick:()=>J(n.date,`date`),children:g},n.key)},Z=(e,t)=>{let n=j(E.getFullYear(),e.value,1),i=H(n,E),a=H(n,O),o=e.disabled===!0,s=T(`div`,{className:`flex h-full flex-col gap-2`,children:w(`div`,{className:`flex items-center justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold`,children:e.label}),a?T(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]})}),c=p?.(A(n),{type:`month`,originNode:s,today:A(O),selected:i,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??f?.(A(n)),l=w(`div`,{className:`flex h-full flex-col gap-2`,children:[w(`div`,{className:`flex items-center justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold`,children:e.label}),a?T(`span`,{className:`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,children:q}):null]}),T(`div`,{className:`min-h-[2.1rem] text-xs leading-5 ${i?`opacity-90`:`opacity-75`}`,children:c})]}),u=m?.(A(n),{type:`month`,originNode:l,today:A(O),selected:i,isToday:a,inView:!0,disabled:o,row:Math.floor(t/4),column:t%4})??d?.(A(n))??l,h=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${r?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return i?h+=` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:o?h+=` border-base-300/70 bg-base-200/50 text-base-content/35`:h+=` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,a&&!i&&(h+=` ring-1 ring-primary/20`),T(`button`,{type:`button`,"data-rue-calendar-month":`${E.getFullYear()}-${`${e.value+1}`.padStart(2,`0`)}`,"aria-pressed":i?`true`:`false`,disabled:o,className:h,onClick:()=>J(n,`month`),children:u},`${E.getFullYear()}-${e.value}`)};return w(`div`,{...x,"data-rue-calendar-root":`true`,"data-rue-calendar-mode":D,className:K,children:[h?h(X):w(`div`,{className:`border-b border-base-300/70 ${r?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,children:[w(`div`,{children:[T(`div`,{className:`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Rue Calendar`}),T(`div`,{className:`mt-1 text-xl font-semibold leading-tight`,children:pe}),T(`div`,{className:`mt-1 text-xs text-base-content/60`,children:me})]}),w(`div`,{className:`flex flex-wrap items-center gap-2 lg:justify-end`,children:[w(`div`,{className:`join`,children:[T(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":I?`上一页`:`Previous`,disabled:be,onClick:()=>J(D===`month`?W(E,-1):G(E,-1),`customize`),children:T(`span`,{"aria-hidden":`true`,children:`<`})}),T(`button`,{type:`button`,className:`btn btn-sm join-item btn-ghost`,disabled:Se,onClick:()=>J(O,`customize`),children:he}),T(`button`,{type:`button`,className:`btn btn-sm join-item`,"aria-label":I?`下一页`:`Next`,disabled:xe,onClick:()=>J(D===`month`?W(E,1):G(E,1),`customize`),children:T(`span`,{"aria-hidden":`true`,children:`>`})})]}),T(`select`,{className:`select select-sm min-w-24`,value:E.getFullYear(),onChange:e=>X.onYearChange(Number(e.currentTarget.value)),children:re.map(e=>T(`option`,{value:e,disabled:!oe(j(e,E.getMonth(),1),N,c),children:e},e))}),T(`select`,{className:`select select-sm min-w-24`,value:E.getMonth(),disabled:D===`year`,onChange:e=>X.onMonthChange(Number(e.currentTarget.value)),children:se.map(e=>T(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))}),w(`div`,{className:`join`,children:[T(`button`,{type:`button`,className:`btn btn-sm join-item ${D===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>Y(`month`),children:ge}),T(`button`,{type:`button`,className:`btn btn-sm join-item ${D===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>Y(`year`),children:_e})]})]})]}),w(`div`,{className:r?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,children:[w(`div`,{className:`flex items-center justify-between gap-3 px-1`,children:[T(`div`,{className:`badge badge-outline badge-sm`,children:ye}),i&&D===`month`?T(`div`,{className:`badge badge-soft badge-sm`,children:ve}):null]}),D===`month`?w(`div`,{className:`space-y-2`,children:[w(`div`,{className:fe,children:[i?T(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:ve}):null,L.map(e=>T(`div`,{className:`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`,children:e},e))]}),T(`div`,{role:`grid`,className:`space-y-2`,children:R.map((e,t)=>w(`div`,{role:`row`,className:fe,children:[i?T(`div`,{className:`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`,"data-rue-calendar-week":e.week,children:e.week}):null,e.cells.map((n,r)=>Ce(e,t,n,r))]},e.key))})]}):T(`div`,{className:`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`,children:se.map((e,t)=>Z(e,t))})]})]})},{Cally:({className:e,children:t,...n})=>T(`calendar-date`,{...n,className:k(`cally`,e),children:t}),Month:({className:e,children:t,...n})=>T(`calendar-month`,{...n,className:e,children:t}),PikaSingle:({type:e=`text`,className:t,...n})=>T(`input`,{...n,type:e,className:k(`pika-single`,t)})}),fe=null,pe=null,me=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],he=[{name:`Calendar.Cally`,description:`保留原有 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],ge=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),_e={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},ve={2:12,3:28,4:18,8:43},q={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},ye={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},be=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,xe=async()=>{typeof window>`u`||typeof customElements>`u`||(fe||=(async()=>{let e=be();customElements.get(`calendar-date`)||await(e?.cally?e.cally():C(()=>import(`./cally-DOZvissa.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await fe)},Se=async()=>{if(!pe){let t=be();pe=(t?.pikaday?t.pikaday():C(()=>import(`./pikaday-BrtZYcYk.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return pe},J=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Y=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},X=(e,t=`未选择`)=>e||t,Ce=e=>e||`Pick a date`,Z=e=>e?typeof e==`string`?e:J(e):`未选择`,we=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Q=e=>u(n=>{let a=i(`div`,n);r(a,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let c=i(`span`,a);o(a,c),r(c,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let l=t(`rue:slot:anchor`);o(c,l),y(()=>{let t=e.label;d(()=>p(t,c,l))});let u=i(`span`,a);o(a,u),r(u,`text-sm font-medium`);let f=b(u);return o(u,f),y(()=>{s(f,e.value)}),a}),Te=e=>u(a=>{let s=i(`div`,a);r(s,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let f=i(`table`,s);o(s,f),r(f,`table table-zebra`);let m=i(`thead`,f);o(f,m);let h=i(`tr`,m);o(m,h);let g=i(`th`,h);o(h,g),o(g,c(`属性`));let _=i(`th`,h);o(h,_),o(_,c(`说明`));let v=i(`th`,h);o(h,v),o(v,c(`类型`));let b=i(`th`,h);o(h,b),o(b,c(`默认值`));let x=i(`tbody`,f);o(f,x);let C=t(`rue:list:start`),w=t(`rue:list:end`);o(x,C),o(x,w);let T=new Map;return y(()=>{T=S({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,s,c)=>{p(u(()=>{let r=n(),a=i(`tr`,r);o(r,a),y(()=>{l(a,`key`,String(e.prop))});let s=i(`td`,a);o(a,s);let c=i(`code`,s);o(s,c);let u=t(`rue:slot:anchor`);o(c,u),y(()=>{let t=e.prop;d(()=>p(t,c,u))});let f=i(`td`,a);o(a,f);let m=t(`rue:slot:anchor`);o(f,m),y(()=>{let t=e.description;d(()=>p(t,f,m))});let h=i(`td`,a);o(a,h);let g=i(`code`,h);o(h,g);let _=t(`rue:slot:anchor`);o(g,_),y(()=>{let t=e.type;d(()=>p(t,g,_))});let v=i(`td`,a);o(a,v);let b=i(`code`,v);o(v,b);let x=t(`rue:slot:anchor`);return o(b,x),y(()=>{let t=e.defaultValue;d(()=>p(t,b,x))}),r}),r,a)}})}),s}),Ee=e=>u(a=>{let s=i(`div`,a);r(s,`not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm`);let f=i(`table`,s);o(s,f),r(f,`table table-zebra`);let m=i(`thead`,f);o(f,m);let h=i(`tr`,m);o(m,h);let g=i(`th`,h);o(h,g),o(g,c(`导出`));let _=i(`th`,h);o(h,_),o(_,c(`说明`));let v=i(`tbody`,f);o(f,v);let b=t(`rue:list:start`),x=t(`rue:list:end`);o(v,b),o(v,x);let C=new Map;return y(()=>{C=S({items:e.rows||[],getKey:(e,t)=>e.name,elements:C,parent:v,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,r,a,s,c)=>{p(u(()=>{let r=n(),a=i(`tr`,r);o(r,a),y(()=>{l(a,`key`,String(e.name))});let s=i(`td`,a);o(a,s);let c=i(`code`,s);o(s,c);let u=t(`rue:slot:anchor`);o(c,u),y(()=>{let t=e.name;d(()=>p(t,c,u))});let f=i(`td`,a);o(a,f);let m=t(`rue:slot:anchor`);return o(f,m),y(()=>{let t=e.description;d(()=>p(t,f,m))}),r}),r,a)}})}),s}),De=e=>u(a=>{let s=i(`div`,a);r(s,`flex flex-wrap gap-2 text-xs`);let c=i(`span`,s);o(s,c),y(()=>{r(c,String(`badge ${e.ready?`badge-success badge-soft`:`badge-outline`}`))});let l=t(`rue:slot:anchor`);o(c,l),y(()=>{let t=e.ready?e.readyLabel:e.loadingLabel;d(()=>p(t,c,l))});let f=t(`rue:slot:anchor`);return o(s,f),y(()=>{let a=e.error?u(()=>{let a=n(),s=i(`span`,a);o(a,s),r(s,`badge badge-error badge-soft`);let c=t(`rue:slot:anchor`);return o(s,c),y(()=>{let t=e.error;d(()=>p(t,s,c))}),a}):``;d(()=>p(a,s,f))}),s}),$=e=>u(a=>{let s=i(`div`,a);r(s,`component-preview not-prose my-6 text-base-content lg:my-12`);let l=i(`div`,s);o(s,l),r(l,`flex flex-wrap items-start justify-between gap-3`);let f=i(`div`,l);o(l,f);let m=i(`h2`,f);o(f,m),r(m,`component-preview-title mt-2 mb-1 text-lg font-semibold`),o(m,c(`# `));let h=t(`rue:slot:anchor`);o(m,h),y(()=>{let t=e.title;d(()=>p(t,m,h))});let g=t(`rue:slot:anchor`);o(f,g),y(()=>{let a=e.summary?u(()=>{let a=n(),s=i(`p`,a);o(a,s),r(s,`m-0 text-sm opacity-70`);let c=t(`rue:slot:anchor`);return o(s,c),y(()=>{let t=e.summary;d(()=>p(t,s,c))}),a}):``;d(()=>p(a,f,g))});let _=t(`rue:component:anchor`);o(s,_),y(()=>{let t=v(O,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});d(()=>p(t,s,_))});let b=t(`rue:slot:anchor`);return o(s,b),y(()=>{let r=e.tab.value===`preview`?e.preview():u(()=>{let r=n(),i=t(`rue:component:anchor`);return o(r,i),y(()=>{let t=v(D,{className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code});d(()=>p(t,r,i))}),r});d(()=>p(r,s,b))}),s}),Oe=e=>u(n=>{let a=i(`div`,n);r(a,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let s=i(`div`,a);o(a,s),r(s,`badge badge-outline badge-sm`);let c=t(`rue:slot:anchor`);o(s,c),y(()=>{let t=e.badge;d(()=>p(t,s,c))});let l=i(`h3`,a);o(a,l),r(l,`mt-3 mb-1 text-base font-semibold`);let u=t(`rue:slot:anchor`);o(l,u),y(()=>{let t=e.title;d(()=>p(t,l,u))});let f=i(`p`,a);o(a,f),r(f,`m-0 text-sm text-base-content/70`);let m=t(`rue:slot:anchor`);return o(f,m),y(()=>{let t=e.detail;d(()=>p(t,f,m))}),a}),ke=()=>{let{value:e,mode:n,selectedSource:a,panelState:s}=x(`useSetup:0:0`,()=>f(()=>{let e=x(`ref:1:0`,()=>_(`2026-04-12`));return{value:e,mode:x(`ref:1:1`,()=>_(`month`)),selectedSource:x(`ref:1:2`,()=>_(`date`)),panelState:x(`ref:1:3`,()=>_(we(Y(e.value),`month`)))}}));return u(l=>{let u=i(`div`,l);r(u,`space-y-4`);let f=i(`div`,u);o(u,f),r(f,`grid gap-4`);let m=t(`rue:component:anchor`);o(f,m),y(()=>{let t=v(K,{"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:n.value,showWeek:!0,validRange:[Y(`2026-04-01`),Y(`2026-05-31`)],disabledDate:e=>e.getDay()===0||e.getDay()===6||ge.has(J(e)),onChange:t=>{e.value=J(t)},onPanelChange:(e,t)=>{n.value=t,s.value=we(e,t)},onSelect:(t,n)=>{e.value=J(t),a.value=n.source}});d(()=>p(t,f,m))});let h=i(`div`,f);o(f,h),r(h,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let g=i(`div`,h);o(h,g),r(g,`badge badge-primary badge-soft`),o(g,c(`Core Panel`));let _=i(`h3`,h);o(h,_),r(_,`mt-3 mb-1 text-base font-semibold`),o(_,c(`排班窗口`));let b=i(`p`,h);o(h,b),r(b,`m-0 text-sm text-base-content/70`),o(b,c(`同时演示受控 value、validRange、disabledDate、showWeek、onSelect 与 onPanelChange。`));let x=i(`div`,h);o(h,x),r(x,`mt-4 space-y-3`);let S=t(`rue:component:anchor`);o(x,S),y(()=>{let t=v(Q,{label:`当前值`,value:Z(e.value)});d(()=>p(t,x,S))});let C=t(`rue:component:anchor`);o(x,C),y(()=>{let e=v(Q,{label:`选择来源`,value:a.value});d(()=>p(e,x,C))});let w=t(`rue:component:anchor`);o(x,w),y(()=>{let e=v(Q,{label:`面板状态`,value:s.value});d(()=>p(e,x,w))});let T=t(`rue:component:anchor`);o(x,T),p(v(Q,{label:`禁用规则`,value:`周末 + 4/4、4/5、5/1`}),x,T);let E=i(`p`,u);return o(u,E),r(E,`m-0 text-xs text-base-content/70`),o(E,c(`日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。`)),u})},Ae=()=>{let{value:e,mode:n}=x(`useSetup:0:0:dup1`,()=>f(()=>({value:x(`ref:1:4`,()=>_(`2026-04-15`)),mode:x(`ref:1:5`,()=>_(`month`))})));return u(a=>{let s=i(`div`,a);r(s,`space-y-4`);let c=t(`rue:component:anchor`);o(s,c),y(()=>{let t=v(K,{"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:n.value,onChange:t=>{e.value=J(t)},onPanelChange:(e,t)=>{n.value=t},cellRender:(e,t)=>{if(t.type===`month`){let t=ve[e.getMonth()];return t?w(`div`,{className:`space-y-1`,children:[T(`div`,{className:`text-lg font-semibold leading-none`,children:t}),T(`div`,{className:`text-[0.68rem] uppercase tracking-[0.22em] opacity-60`,children:`Backlog`})]}):null}let n=_e[J(e)]??[];return n.length?w(`div`,{className:`space-y-1`,children:[n.slice(0,2).map(e=>T(`div`,{className:`badge badge-soft badge-xs ${ye[e.tone]}`,children:e.label},e.label)),n.length>2?w(`div`,{className:`text-[0.62rem] opacity-60`,children:[`+`,n.length-2,` more`]}):null]}):null}});d(()=>p(t,s,c))});let l=i(`div`,s);o(s,l),r(l,`grid gap-3 md:grid-cols-3`);let u=t(`rue:component:anchor`);o(l,u),y(()=>{let t=v(Q,{label:`当前日期`,value:Z(e.value)});d(()=>p(t,l,u))});let f=t(`rue:component:anchor`);o(l,f),y(()=>{let e=v(Q,{label:`4 月 15 日事件`,value:`${_e[`2026-04-15`]?.length??0} 条`});d(()=>p(e,l,f))});let m=t(`rue:component:anchor`);return o(l,m),y(()=>{let e=v(Q,{label:`9 月 backlog`,value:`${ve[8]} 项`});d(()=>p(e,l,m))}),s})},je=()=>{let{value:e,mode:n}=x(`useSetup:0:0:dup2`,()=>f(()=>({value:x(`ref:1:6`,()=>_(`2026-09-18`)),mode:x(`ref:1:7`,()=>_(`month`))})));return u(a=>{let s=i(`div`,a);r(s,`space-y-4`);let l=i(`div`,s);o(s,l),r(l,`grid gap-4`);let u=i(`div`,l);o(l,u),r(u,`max-w-full overflow-x-auto`);let f=t(`rue:component:anchor`);o(u,f),y(()=>{let t=v(K,{"data-testid":`card-calendar`,className:`w-fit max-w-none min-w-[34rem]`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:n.value,onChange:t=>{e.value=J(t)},onPanelChange:(e,t)=>{n.value=t},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=q[J(e)];return n==null?t.originNode:w(`div`,{className:`flex h-full flex-col justify-between gap-2`,children:[w(`div`,{className:`flex items-center justify-between gap-2`,children:[T(`span`,{className:`text-sm font-semibold`,children:e.getDate()}),w(`span`,{className:`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,children:[n,`%`]})]}),w(`div`,{className:`space-y-1`,children:[T(`div`,{className:`h-1.5 overflow-hidden rounded-full bg-base-300/70`,children:T(`div`,{className:`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,style:{width:`${n}%`}})}),T(`div`,{className:`text-[0.62rem] uppercase tracking-[0.22em] opacity-60`,children:`Studio load`})]})]})}});d(()=>p(t,u,f))});let m=i(`div`,l);o(l,m),r(m,`rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm`);let h=i(`div`,m);o(m,h),r(h,`badge badge-secondary badge-soft`),o(h,c(`Card Mode`));let g=i(`h3`,m);o(m,g),r(g,`mt-3 mb-1 text-base font-semibold`),o(g,c(`容量面板`));let _=i(`p`,m);o(m,_),r(_,`m-0 text-sm text-base-content/70`),o(_,c(`使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。`));let b=i(`div`,m);o(m,b),r(b,`mt-4 space-y-3`);let x=t(`rue:component:anchor`);o(b,x),y(()=>{let t=v(Q,{label:`当前日期`,value:Z(e.value)});d(()=>p(t,b,x))});let S=t(`rue:component:anchor`);o(b,S),p(v(Q,{label:`高负载日`,value:`9/18 · 92%`}),b,S);let C=t(`rue:component:anchor`);return o(b,C),p(v(Q,{label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}),b,C),s})},Me=()=>{let{value:e,mode:n,actionSource:a}=x(`useSetup:0:0:dup3`,()=>f(()=>({value:x(`ref:1:8`,()=>_(`2026-07-04`)),mode:x(`ref:1:9`,()=>_(`month`)),actionSource:x(`ref:1:10`,()=>_(`date`))})));return u(s=>{let c=i(`div`,s);r(c,`space-y-4`);let l=t(`rue:component:anchor`);o(c,l),y(()=>{let t=v(K,{"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:n.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:r,onMonthChange:i,onTypeChange:a,onYearChange:o})=>w(`div`,{className:`border-b border-base-300/70 px-3 py-3`,children:[w(`div`,{className:`flex flex-wrap items-start justify-between gap-3`,children:[w(`div`,{children:[T(`div`,{className:`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`,children:`Studio Header`}),T(`div`,{className:`mt-1 text-base font-semibold`,children:we(e,t)})]}),w(`div`,{className:`join`,children:[T(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`month`),children:`月视图`}),T(`button`,{type:`button`,className:`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,onClick:()=>a(`year`),children:`年视图`})]})]}),w(`div`,{className:`mt-3 flex flex-wrap gap-2`,children:[T(`select`,{className:`select select-sm min-w-24`,value:e.getFullYear(),onChange:e=>o(Number(e.currentTarget.value)),children:n.map(e=>T(`option`,{value:e,children:e},e))}),T(`select`,{className:`select select-sm min-w-24`,value:e.getMonth(),disabled:t===`year`,onChange:e=>i(Number(e.currentTarget.value)),children:r.map(e=>T(`option`,{value:e.value,disabled:e.disabled,children:e.label},e.value))})]})]}),onChange:t=>{e.value=J(t)},onPanelChange:(e,t)=>{n.value=t},onSelect:(e,t)=>{a.value=t.source}});d(()=>p(t,c,l))});let u=i(`div`,c);o(c,u),r(u,`grid gap-3 md:grid-cols-3`);let f=t(`rue:component:anchor`);o(u,f),y(()=>{let t=v(Q,{label:`当前日期`,value:Z(e.value)});d(()=>p(t,u,f))});let m=t(`rue:component:anchor`);o(u,m),y(()=>{let e=v(Q,{label:`当前模式`,value:n.value});d(()=>p(e,u,m))});let h=t(`rue:component:anchor`);return o(u,h),y(()=>{let e=v(Q,{label:`最近来源`,value:a.value});d(()=>p(e,u,h))}),c})},Ne=e=>u(n=>{let s=i(`div`,n);r(s,`rounded-[1.5rem] border border-dashed border-base-300 bg-base-100/80 p-5 shadow-sm`);let u=i(`div`,s);o(s,u),r(u,`badge badge-outline badge-sm`),o(u,c(`Legacy preview`));let f=i(`p`,s);o(s,f),r(f,`mb-0 mt-3 text-sm text-base-content/72`);let m=t(`rue:slot:anchor`);o(f,m),y(()=>{let t=e.note;d(()=>p(t,f,m))});let h=i(`button`,s);return o(s,h),l(h,`type`,`button`),r(h,`btn btn-sm btn-primary mt-4`),a(h,`click`,e.onLoad),o(h,c(`加载预览`)),s}),Pe=()=>{let{calendarRef:e,cleanupRef:a,selectedValue:s,ready:l,error:b}=x(`useSetup:0:0:dup4`,()=>f(()=>{let e=x(`useRef:1:11`,()=>m()),t=x(`useRef:1:12`,()=>m(()=>{})),n=x(`ref:1:13`,()=>_(`2026-04-12`)),r=x(`ref:1:14`,()=>_(!1)),i=x(`ref:1:15`,()=>_(``));return h(()=>{let a=!0;xe().then(()=>{if(!a)return;r.value=!0;let i=e.current;if(!i)return;i.value=n.value;let o=()=>{n.value=i.value||``};i.addEventListener(`change`,o),t.current=()=>i.removeEventListener(`change`,o)}).catch(()=>{a&&(i.value=`Cally 加载失败`)}),g(()=>{a=!1})}),g(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,ready:r,error:i}}));return u(a=>{let f=i(`div`,a);r(f,`space-y-3`);let m=t(`rue:component:anchor`);o(f,m);let h=u(()=>{let e=n(),r=t(`rue:component:anchor`);o(e,r),p(v(Be,{}),e,r);let i=t(`rue:component:anchor`);o(e,i),p(v(Ve,{}),e,i);let a=t(`rue:component:anchor`);return o(e,a),p(v(K.Month,{}),e,a),e});y(()=>{let t=v(K.Cally,{ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:h});d(()=>p(t,f,m))});let g=t(`rue:component:anchor`);o(f,g),y(()=>{let e=v(De,{ready:l.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:b.value});d(()=>p(e,f,g))});let _=i(`p`,f);o(f,_),r(_,`m-0 text-xs text-base-content/70`),o(_,c(`当前选择：`));let x=t(`rue:slot:anchor`);return o(_,x),y(()=>{let e=X(s.value);d(()=>p(e,_,x))}),o(_,c(`。这条 demo 原样保留，用于展示原生 web component 接口。`)),f})},Fe=()=>{let{shouldLoad:e}=x(`useSetup:0:0:dup5`,()=>f(()=>({shouldLoad:x(`ref:1:16`,()=>_(!1))})));return e.value?T(Pe,{}):T(Ne,{note:`Cally web component 旧链路会在挂载时注册自定义元素，这里改为手动加载。`,onLoad:()=>{e.value=!0}})},Ie=()=>{let{calendarRef:e,cleanupRef:s,selectedValue:b,open:S,ready:C,error:w}=x(`useSetup:0:0:dup6`,()=>f(()=>{let e=x(`useRef:1:17`,()=>m()),t=x(`useRef:1:18`,()=>m(()=>{})),n=x(`ref:1:19`,()=>_(``)),r=x(`ref:1:20`,()=>_(!1)),i=x(`ref:1:21`,()=>_(!1)),a=x(`ref:1:22`,()=>_(``));return h(()=>{let o=!0;xe().then(()=>{if(!o)return;i.value=!0;let a=e.current;if(!a)return;a.value=n.value;let s=()=>{n.value=a.value||``,r.value=!1};a.addEventListener(`change`,s),t.current=()=>a.removeEventListener(`change`,s)}).catch(()=>{o&&(a.value=`Cally 加载失败`)}),g(()=>{o=!1})}),g(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:n,open:r,ready:i,error:a}}));return u(s=>{let f=i(`div`,s);r(f,`space-y-3`);let m=i(`div`,f);o(f,m),r(m,`flex flex-wrap items-center gap-3`);let h=i(`button`,m);o(m,h),l(h,`type`,`button`),l(h,`data-testid`,`cally-picker-button`),r(h,`input input-bordered w-fit cursor-pointer`),a(h,`click`,()=>{S.value=!S.value});let g=t(`rue:slot:anchor`);o(h,g),y(()=>{let e=Ce(b.value);d(()=>p(e,h,g))});let _=i(`span`,m);o(m,_),r(_,`text-xs text-base-content/70`),o(_,c(`当前选择：`));let x=t(`rue:slot:anchor`);o(_,x),y(()=>{let e=X(b.value);d(()=>p(e,_,x))});let T=i(`div`,f);o(f,T),l(T,`data-testid`,`cally-picker-panel`),y(()=>{r(T,String(`inline-block rounded-box bg-base-100 p-3 shadow-lg ${S.value?``:`hidden`}`))});let E=t(`rue:component:anchor`);o(T,E);let D=u(()=>{let e=n(),r=t(`rue:component:anchor`);o(e,r),p(v(Be,{}),e,r);let i=t(`rue:component:anchor`);o(e,i),p(v(Ve,{}),e,i);let a=t(`rue:component:anchor`);return o(e,a),p(v(K.Month,{}),e,a),e});y(()=>{let t=v(K.Cally,{ref:e,"data-testid":`cally-picker-calendar`,children:D});d(()=>p(t,T,E))});let O=t(`rue:component:anchor`);o(f,O),y(()=>{let e=v(De,{ready:C.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:w.value});d(()=>p(e,f,O))});let k=i(`p`,f);return o(f,k),r(k,`m-0 text-xs text-base-content/70`),o(k,c(`点击按钮展开面板，选中日期后会自动回填并收起。这条旧 demo 同样完整保留。`)),f})},Le=()=>{let{shouldLoad:e}=x(`useSetup:0:0:dup7`,()=>f(()=>({shouldLoad:x(`ref:1:23`,()=>_(!1))})));return e.value?T(Ie,{}):T(Ne,{note:`旧 date picker demo 会额外挂起 Cally 实例，默认不在页面首次打开时立即加载。`,onLoad:()=>{e.value=!0}})},Re=e=>{let{inputRef:n,instanceRef:a,selectedValue:s,ready:l,error:b}=x(`useSetup:0:0:dup8`,()=>f(()=>{let e=x(`useRef:1:24`,()=>m()),t=x(`useRef:1:25`,()=>m()),n=x(`ref:1:26`,()=>_(``)),r=x(`ref:1:27`,()=>_(!1)),i=x(`ref:1:28`,()=>_(``));return h(()=>{let a=!0;Se().then(i=>{if(!a)return;let o=e.current;o&&(t.current=new i({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>J(e),onSelect:e=>{n.value=o.value||J(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),n.value=o.value||`2026-04-12`,r.value=!0)}).catch(()=>{a&&(i.value=`Pikaday 加载失败`)}),g(()=>{a=!1})}),g(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:n,ready:r,error:i}}));return u(a=>{let u=i(`div`,a);r(u,`space-y-3`);let f=t(`rue:component:anchor`);o(u,f),y(()=>{let t=v(K.PikaSingle,{ref:n,"data-testid":e.testId,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`});d(()=>p(t,u,f))});let m=t(`rue:component:anchor`);o(u,m),y(()=>{let e=v(De,{ready:l.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:b.value});d(()=>p(e,u,m))});let h=i(`p`,u);o(u,h),r(h,`m-0 text-xs text-base-content/70`),o(h,c(`当前选择：`));let g=t(`rue:slot:anchor`);o(h,g),y(()=>{let e=X(s.value);d(()=>p(e,h,g))});let _=i(`p`,u);o(u,_),r(_,`m-0 text-xs text-base-content/70`);let x=t(`rue:slot:anchor`);return o(_,x),y(()=>{let t=e.note;d(()=>p(t,_,x))}),u})},ze=e=>{let{shouldLoad:t}=x(`useSetup:0:0:dup9`,()=>f(()=>({shouldLoad:x(`ref:1:29`,()=>_(!1))})));return t.value?T(Re,{...e}):T(Ne,{note:`Pikaday 会在首次挂载时初始化第三方实例，改为按需加载以避免设计页打开卡顿。`,onLoad:()=>{t.value=!0}})},Be=()=>u(e=>{let t=i(`svg`,e);l(t,`aria-label`,`Previous`),r(t,`fill-current size-4`),l(t,`slot`,`previous`),l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`);let n=i(`path`,t);return o(t,n),l(n,`fill`,`currentColor`),l(n,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),t}),Ve=()=>u(e=>{let t=i(`svg`,e);l(t,`aria-label`,`Next`),r(t,`fill-current size-4`),l(t,`slot`,`next`),l(t,`xmlns`,`http://www.w3.org/2000/svg`),l(t,`viewBox`,`0 0 24 24`);let n=i(`path`,t);return o(t,n),l(n,`fill`,`currentColor`),l(n,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),t}),He=`import { ref } from '@rue-js/rue'
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
}`,Ue=`import { ref } from '@rue-js/rue'
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
}`,We=`import { ref } from '@rue-js/rue'
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
}`,Ge=`import { ref } from '@rue-js/rue'
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
}`,Ke=`import 'cally'
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
}`,qe=`import 'cally'
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
}`,Je=()=>{let{tabBasic:e,tabNotice:a,tabCard:s,tabHeader:m,tabCallyCalendar:h,tabCallyDatePicker:g,tabPikaday:b}=x(`useSetup:0:0:dup10`,()=>f(()=>({tabBasic:x(`ref:1:30`,()=>_(`preview`)),tabNotice:x(`ref:1:31`,()=>_(`preview`)),tabCard:x(`ref:1:32`,()=>_(`preview`)),tabHeader:x(`ref:1:33`,()=>_(`preview`)),tabCallyCalendar:x(`ref:1:34`,()=>_(`preview`)),tabCallyDatePicker:x(`ref:1:35`,()=>_(`preview`)),tabPikaday:x(`ref:1:36`,()=>_(`preview`))})));return u(f=>{let _=n(),x=t(`rue:component:anchor`);return o(_,x),p(v(E,{children:u(()=>{let u=n(),f=i(`div`,u);o(u,f),r(f,`prose prose-sm max-w-none md:prose-base`);let _=i(`h1`,f);o(f,_),o(_,c(`Calendar 日历`));let x=i(`p`,f);o(f,x),r(x,`mt-3 mb-3 text-sm`),o(x,c(`Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条旧接入链路。`));let S=i(`div`,f);o(f,S),r(S,`not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3`);let C=t(`rue:component:anchor`);o(S,C),p(v(Oe,{badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}),S,C);let w=t(`rue:component:anchor`);o(S,w),p(v(Oe,{badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格升级为事项列表、容量卡或数据看板。`}),S,w);let E=t(`rue:component:anchor`);o(S,E),p(v(Oe,{badge:`Legacy Friendly`,title:`旧 demo 全部保留`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，老接入方式不需要拆。`}),S,E);let D=i(`div`,f);o(f,D),r(D,`mt-4 text-sm`);let O=i(`a`,D);o(D,O),l(O,`href`,`https://daisyui.com/components/calendar/`),l(O,`target`,`_blank`),o(O,c(`查看 Calendar 静态样式`));let k=t(`rue:component:anchor`);o(f,k),y(()=>{let t=v($,{title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:()=>T(ke,{}),code:He});d(()=>p(t,f,k))});let ee=t(`rue:component:anchor`);o(f,ee),y(()=>{let e=v($,{title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:a,preview:()=>T(Ae,{}),code:Ue});d(()=>p(e,f,ee))});let A=t(`rue:component:anchor`);o(f,A),y(()=>{let e=v($,{title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:s,preview:()=>T(je,{}),code:We});d(()=>p(e,f,A))});let j=t(`rue:component:anchor`);o(f,j),y(()=>{let e=v($,{title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:m,preview:()=>T(Me,{}),code:Ge});d(()=>p(e,f,j))});let M=t(`rue:component:anchor`);o(f,M),y(()=>{let e=v($,{title:`Cally calendar example`,summary:`旧的 Cally web component 日历壳层仍然原样可用。`,tab:h,preview:()=>T(Fe,{}),code:Ke});d(()=>p(e,f,M))});let N=t(`rue:component:anchor`);o(f,N),y(()=>{let e=v($,{title:`Cally date picker example`,summary:`旧的日期输入弹层 demo 继续保留，只把交互说明和布局重新编排。`,tab:g,preview:()=>T(Le,{}),code:qe});d(()=>p(e,f,N))});let P=t(`rue:component:anchor`);o(f,P),y(()=>{let e=v($,{title:`Pikaday input example`,summary:`保留原有 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:b,preview:()=>T(ze,{testId:`pikaday-cdn-input`,note:`输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。`}),lang:`html`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`});d(()=>p(e,f,P))});let F=i(`section`,f);o(f,F),r(F,`my-12 space-y-6`);let I=i(`div`,F);o(F,I);let L=i(`h2`,I);o(I,L),r(L,`mb-2`),o(L,c(`API`));let R=i(`p`,I);o(I,R),r(R,`m-0 text-sm text-base-content/70`),o(R,c(`默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时保留 Rue 自己的视觉和旧导出方式。`));let z=t(`rue:component:anchor`);o(F,z),y(()=>{let e=v(Te,{rows:me});d(()=>p(e,F,z))});let B=i(`div`,F);o(F,B);let V=i(`h2`,B);o(B,V),r(V,`mb-2`),o(V,c(`附属导出`));let H=i(`p`,B);o(B,H),r(H,`m-0 text-sm text-base-content/70`),o(H,c(`历史上的 Cally 与 Pikaday 接口没有删除，而是并列保留为复合导出，便于渐进迁移。`));let U=t(`rue:component:anchor`);return o(F,U),y(()=>{let e=v(Ee,{rows:he});d(()=>p(e,F,U))}),u})}),_,x),_})};export{Je as default};
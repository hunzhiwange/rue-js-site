const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BlN5cxGq.js","assets/rolldown-runtime-Dd_uD5pT.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{At as t,B as n,Bt as r,Ct as i,Dt as a,F as o,Ht as s,I as c,Jt as l,L as u,M as d,P as f,Qt as p,St as m,Tt as h,Ut as g,V as _,Vt as v,W as y,Wt as b,X as x,Y as S,_n as C,an as w,ct as T,dt as E,en as D,et as O,f as k,fn as A,ft as j,g as M,gn as N,h as P,hn as F,in as I,m as L,mn as R,mt as z,nt as B,p as V,pn as H,qt as U,sn as W,u as G,vn as ee,wt as te,xt as ne,yn as K,z as q,zt as J}from"./rue-runtime-BWbIfNT8.js";import{t as re}from"./preload-helper-Czpn1I53.js";import{t as ie}from"./Code-C5ZhIIr9.js";import{t as ae}from"./tabs-BJAzN1Eb.js";import{r as oe}from"./SidebarPlaygroundDesign-DS4naa5t.js";import{t as se}from"./preview-test-gate-BVbSCGe9.js";var ce=K(`<span>rue:direct-text</span>`),le=K(`<button type="button" role="gridcell"></button>`),Y=K(`<div role="row"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ue=K(`<button type="button"></button>`),de=K(`<div data-rue-calendar-root="true"><div data-rue-calendar-header="true"><div><div class="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55">Rue Calendar</div><div class="mt-1 text-xl font-semibold leading-tight"><!--rue:opaque-hole:0--></div><div class="mt-1 text-xs text-base-content/60"><!--rue:opaque-hole:1--></div></div><div class="flex flex-wrap items-center gap-2 lg:justify-end"><div class="join"><button type="button" class="btn btn-sm join-item" aria-label="Previous"><span aria-hidden="true">&lt;</span></button><button type="button" class="btn btn-sm join-item btn-ghost"><!--rue:opaque-hole:2--></button><button type="button" class="btn btn-sm join-item" aria-label="Next"><span aria-hidden="true">&gt;</span></button></div><select class="select select-sm min-w-24" data-rue-calendar-year-select="true"><!--rue:text-hole:3--></select><select class="select select-sm min-w-24" data-rue-calendar-month-select="true"><!--rue:text-hole:4--></select><div class="join"><button type="button" data-rue-calendar-mode-switch="month"><!--rue:opaque-hole:5--></button><button type="button" data-rue-calendar-mode-switch="year"><!--rue:opaque-hole:6--></button></div></div></div><div><div class="flex items-center justify-between gap-3 px-1"><div class="badge badge-outline badge-sm"><!--rue:opaque-hole:7--></div><!--rue:text-hole:8--></div><!--rue:text-hole:9--></div></div>`),fe=K(`<input>`),pe=(e,t)=>t?`${e} ${t}`:e,me=()=>({date:new Map,month:new Map,year:new Map}),he=new Map,ge=new Map,_e=new Map,ve=new Map,ye=new Map,be=()=>typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now(),xe=(e,t)=>({enabled:e,start:e?be():0,threshold:t,cellCount:0,customRenderCount:0,cellFormatterCount:0,fullCellRenderCount:0,dateCellRenderCount:0,dateFullCellRenderCount:0,monthCellRenderCount:0,monthFullCellRenderCount:0,slowCells:[]}),Se=(e,t)=>{e.enabled&&(e.customRenderCount+=1,t===`cellFormatter`?e.cellFormatterCount+=1:t===`fullCellRender`?e.fullCellRenderCount+=1:t===`dateCellRender`?e.dateCellRenderCount+=1:t===`dateFullCellRender`?e.dateFullCellRenderCount+=1:t===`monthCellRender`?e.monthCellRenderCount+=1:e.monthFullCellRenderCount+=1)},Ce=(e,t,n,r)=>{if(!e.enabled)return r();Se(e,t);let i=be(),a=r(),o=be()-i;return o>=e.threshold&&e.slowCells.push({type:n.type,key:n.key,renderName:t,duration:o,row:n.row,column:n.column}),a},we=(e,t,n,r)=>{if(!e||!t.enabled)return;let i=be()-t.start,a={component:`Calendar`,mode:n,phase:r,duration:i,cellCount:t.cellCount,customRenderCount:t.customRenderCount,cellFormatterCount:t.cellFormatterCount,fullCellRenderCount:t.fullCellRenderCount,dateCellRenderCount:t.dateCellRenderCount,dateFullCellRenderCount:t.dateFullCellRenderCount,monthCellRenderCount:t.monthCellRenderCount,monthFullCellRenderCount:t.monthFullCellRenderCount,slow:i>=t.threshold||t.slowCells.length>0,threshold:t.threshold,slowCells:t.slowCells.slice()},o=()=>e(a);typeof queueMicrotask==`function`?queueMicrotask(o):Promise.resolve().then(o)},Te=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return a+=t?` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?` border-base-300/70 bg-base-200/50 text-base-content/35`:r?` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},Ee=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return i+=t?` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?` border-base-300/70 bg-base-200/50 text-base-content/35`:` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},X=(e,t,r)=>{let i=y(q(e,`value`));return c(S(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,x(n,()=>String(String(i.get()))),[t,t]}),e=>D(()=>{i.set(e.value)}),()=>n(e))},De=(e,t,a)=>{let u=y(q(e,`arg0`)),d=y(q(e,`rootProps`)),p=()=>u.get(),m=(e,t,r)=>{let{CompiledRow102:i,row:a,__rue_phase2_row:u}=l(`useSetup:0:0`,()=>{let t=(e,t,r)=>{let i=y(q(e,`rowArg0`)),{cell:a,__rue_phase2_cell:u,state:d}=l(`useSetup:0:0`,()=>{let e=T(()=>i.get());e.get();let t=e;return{cell:e,__rue_phase2_cell:t,state:T(()=>p().dateCellStates.get(t.get().key)??{key:t.get().key,dayNumber:t.get().date.getDate(),inView:!1,selected:!1,isToday:!1,disabled:!0})}});return c((e=>e)(b(e=>{let t=le().content.cloneNode(!0).firstChild,n=t,r=t;n.setAttribute(`type`,`button`),n.setAttribute(`role`,`gridcell`);let i;I(()=>{let e=a.get().key;Object.is(i,e)||(i=e,e==null?n.removeAttribute(`data-rue-calendar-cell`):n.setAttribute(`data-rue-calendar-cell`,String(e)))});let c;I(()=>{let e=d.get().inView?`true`:`false`;Object.is(c,e)||(c=e,e==null?n.removeAttribute(`data-rue-calendar-in-view`):n.setAttribute(`data-rue-calendar-in-view`,String(e)))});let l;I(()=>{let e=d.get().selected?`true`:`false`;Object.is(l,e)||(l=e,e==null?n.removeAttribute(`aria-pressed`):n.setAttribute(`aria-pressed`,String(e)))});let u;I(()=>{let e=d.get().isToday?`date`:void 0;Object.is(u,e)||(u=e,e==null?n.removeAttribute(`aria-current`):n.setAttribute(`aria-current`,String(e)))});let f;I(()=>{let e=!!d.get().disabled;Object.is(f,e)||(f=e,n.disabled=e)});let m;return I(()=>{let e=Te(w.get(),d.get().selected,d.get().disabled,d.get().inView,d.get().isToday),t=e===!1||e==null?``:String(e);Object.is(m,t)||(m=t,n.setAttribute(`class`,t))}),W(G(e,n,`click`,()=>()=>p().onDateSelect(a.get().date))),g(r,null,()=>p().hasDateCustomRender?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`span`,e),n;return I(()=>{let e=a.get().key;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`data-rue-calendar-detail`):t.setAttribute(`data-rue-calendar-detail`,String(e)))}),o(t,X,()=>({value:String(p().managedCellContent.get(a.get().key)?.content??``)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>b(e=>{let t=F(`span`,e);t.setAttribute(`class`,`flex items-start justify-between gap-2`);let n=F(`span`,t);A(t,n);let r;return I(()=>{let e=`text-sm font-semibold ${d.get().inView?``:`opacity-60`}`,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))}),o(n,X,()=>({value:String(d.get().dayNumber)})),s(()=>d.get().isToday?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`span`,e),n;return I(()=>{let e=`badge badge-xs ${d.get().selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,r=e===!1||e==null?``:String(e);Object.is(n,r)||(n=r,t.setAttribute(`class`,r))}),o(t,X,()=>({value:String(p().todayMarkerLabel)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=R();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),[t,t]})}),[t,t]}),a.get().key),e=>D(()=>{i.set(e.rowArg0)}),()=>n(e))},r=T(()=>q(e,`rowArg0`));return r.get(),{CompiledRow102:t,row:r,__rue_phase2_row:r}});return b(e=>{let t=Y().content.cloneNode(!0).firstChild,n=t,r=t.childNodes[0],s=r.parentNode,c=t.childNodes[1],l=c.parentNode;n.setAttribute(`role`,`row`);let u;I(()=>{let e=p().rowClassName,t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,n.setAttribute(`class`,t))}),g(s,r,()=>p().showWeek?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`div`,e);t.setAttribute(`class`,`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`);let n;return I(()=>{let e=a.get().week;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`data-rue-calendar-week`):t.setAttribute(`data-rue-calendar-week`,String(e)))}),o(t,X,()=>({value:String(a.get().week)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=R();return[t.firstChild,t.lastChild]})});let d=[];return U(()=>{let e=a.get().cells||[];d=P(l,c,d,e,(e,t)=>t,(e,t)=>{let n=y(e);return V((e,t,r)=>{let a=()=>f(i,()=>({rowArg0:n.get()}));return e==null?a():v(e,r,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),W(()=>k(d)),[t,t]})},h=(e,t,r)=>{let i=y(q(e,`rowArg0`)),{monthOption:a,__rue_phase2_monthOption:u,monthDate:d,__rue_phase2_monthDate:f,selected:m,__rue_phase2_selected:h,isToday:v,__rue_phase2_isToday:x,disabled:S,__rue_phase2_disabled:C}=l(`useSetup:0:0`,()=>{let e=T(()=>i.get());e.get();let t=e,n=T(()=>Q(p().currentValue.getFullYear(),t.get().value,1));n.get();let r=n,a=T(()=>Re(r.get(),p().currentValue));a.get();let o=a,s=T(()=>Re(r.get(),$(new Date)));s.get();let c=s,l=T(()=>t.get().disabled===!0);return l.get(),{monthOption:e,__rue_phase2_monthOption:t,monthDate:n,__rue_phase2_monthDate:r,selected:a,__rue_phase2_selected:o,isToday:s,__rue_phase2_isToday:c,disabled:l,__rue_phase2_disabled:l}});return c((e=>e)(b(e=>{let t=ue().content.cloneNode(!0).firstChild,n=t,r=t;n.setAttribute(`type`,`button`);let i;I(()=>{let e=`${p().currentValue.getFullYear()}-${`${a.get().value+1}`.padStart(2,`0`)}`;Object.is(i,e)||(i=e,e==null?n.removeAttribute(`data-rue-calendar-month`):n.setAttribute(`data-rue-calendar-month`,String(e)))});let c;I(()=>{let e=m.get()?`true`:`false`;Object.is(c,e)||(c=e,e==null?n.removeAttribute(`aria-pressed`):n.setAttribute(`aria-pressed`,String(e)))});let l;I(()=>{let e=!!S.get();Object.is(l,e)||(l=e,n.disabled=e)});let u;return I(()=>{let e=Ee(w.get(),m.get(),S.get(),v.get()),t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,n.setAttribute(`class`,t))}),W(G(e,n,`click`,()=>()=>p().onMonthSelect(d.get()))),g(r,null,()=>p().hasMonthCustomRender?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`span`,e),n;return I(()=>{let e=`${p().currentValue.getFullYear()}-${String(a.get().value+1).padStart(2,`0`)}`;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`data-rue-calendar-detail`):t.setAttribute(`data-rue-calendar-detail`,String(e)))}),o(t,X,()=>({value:String(p().managedCellContent.get(`${p().currentValue.getFullYear()}-${String(a.get().value+1).padStart(2,`0`)}`)?.content??``)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>b(e=>{let t=F(`span`,e);t.setAttribute(`class`,`flex items-center justify-between gap-2`);let n=F(`span`,t);return A(t,n),n.setAttribute(`class`,`text-sm font-semibold`),o(n,X,()=>({value:String(a.get().label)})),s(()=>v.get()?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`span`,e),n;return I(()=>{let e=`badge badge-xs ${m.get()?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,r=e===!1||e==null?``:String(e);Object.is(n,r)||(n=r,t.setAttribute(`class`,r))}),o(t,X,()=>({value:String(p().todayMarkerLabel)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=R();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),[t,t]})}),[t,t]}),`${p().currentValue.getFullYear()}-${a.get().value}`),e=>D(()=>{i.set(e.rowArg0)}),()=>n(e))},C=T(()=>p().fullscreen);C.get();let w=C;return c(b(e=>{let t=de().content.cloneNode(!0).firstChild,n=t,a=t.childNodes[0],c=t.childNodes[0].childNodes[1].childNodes[0].childNodes[0],l=t.childNodes[0].childNodes[1].childNodes[0].childNodes[1],u=t.childNodes[0].childNodes[1].childNodes[0].childNodes[2],w=t.childNodes[0].childNodes[1].childNodes[1],T=t.childNodes[0].childNodes[1].childNodes[2],E=t.childNodes[0].childNodes[1].childNodes[3].childNodes[0],D=t.childNodes[0].childNodes[1].childNodes[3].childNodes[1],O=t.childNodes[1],j=t.childNodes[0].childNodes[0].childNodes[1].childNodes[0],M=j.parentNode,L=t.childNodes[0].childNodes[0].childNodes[2].childNodes[0],z=L.parentNode,B=t.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],G=B.parentNode,ee=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0],te=ee.parentNode,K=t.childNodes[0].childNodes[1].childNodes[2].childNodes[0],q=K.parentNode,J=t.childNodes[0].childNodes[1].childNodes[3].childNodes[0].childNodes[0],re=J.parentNode,ie=t.childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[0],ae=ie.parentNode,oe=t.childNodes[1].childNodes[0].childNodes[0].childNodes[0],se=oe.parentNode,ce=t.childNodes[1].childNodes[0].childNodes[1],le=ce.parentNode,Y=t.childNodes[1].childNodes[1],ue=Y.parentNode;i(n,()=>d.get(),[`data-rue-calendar-root`,`data-rue-calendar-mode`,`className`,`__rue_static_template_id__`]),n.setAttribute(`data-rue-calendar-root`,`true`);let fe;I(()=>{let e=p().currentMode;Object.is(fe,e)||(fe=e,e==null?n.removeAttribute(`data-rue-calendar-mode`):n.setAttribute(`data-rue-calendar-mode`,String(e)))});let pe;I(()=>{let e=p().rootClassName,t=e===!1||e==null?``:String(e);Object.is(pe,t)||(pe=t,n.setAttribute(`class`,t))}),a.setAttribute(`data-rue-calendar-header`,`true`);let me;I(()=>{let e=p().headerTitle;Object.is(me,e)||(me=e,e==null?a.removeAttribute(`data-current`):a.setAttribute(`data-current`,String(e)))});let he;I(()=>{let e=p().currentMode;Object.is(he,e)||(he=e,e==null?a.removeAttribute(`data-mode`):a.setAttribute(`data-mode`,String(e)))});let ge;I(()=>{let e=`border-b border-base-300/70 ${C.get()?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,t=e===!1||e==null?``:String(e);Object.is(ge,t)||(ge=t,a.setAttribute(`class`,t))}),c.setAttribute(`type`,`button`),c.setAttribute(`class`,`btn btn-sm join-item`),c.setAttribute(`aria-label`,`Previous`);let _e;I(()=>{let e=!!p().previousDisabled;Object.is(_e,e)||(_e=e,c.disabled=e)});let ve=e=>{let t=p().onPrevious;typeof t==`function`&&t(e)};c.addEventListener(`click`,ve),W(()=>c.removeEventListener(`click`,ve)),l.setAttribute(`type`,`button`),l.setAttribute(`class`,`btn btn-sm join-item btn-ghost`);let ye;I(()=>{let e=!!p().todayDisabled;Object.is(ye,e)||(ye=e,l.disabled=e)});let be=e=>{let t=p().onToday;typeof t==`function`&&t(e)};l.addEventListener(`click`,be),W(()=>l.removeEventListener(`click`,be)),u.setAttribute(`type`,`button`),u.setAttribute(`class`,`btn btn-sm join-item`),u.setAttribute(`aria-label`,`Next`);let xe;I(()=>{let e=!!p().nextDisabled;Object.is(xe,e)||(xe=e,u.disabled=e)});let Se=e=>{let t=p().onNext;typeof t==`function`&&t(e)};u.addEventListener(`click`,Se),W(()=>u.removeEventListener(`click`,Se)),w.setAttribute(`class`,`select select-sm min-w-24`),w.setAttribute(`data-rue-calendar-year-select`,`true`);let Ce;I(()=>{let e=p().currentValue.getFullYear();Object.is(Ce,e)||(Ce=e,ne(w,e))});let we=e=>{let t=e=>p().onYearChange(Number(e.currentTarget.value));typeof t==`function`&&t(e)};w.addEventListener(`change`,we),W(()=>w.removeEventListener(`change`,we)),T.setAttribute(`class`,`select select-sm min-w-24`),T.setAttribute(`data-rue-calendar-month-select`,`true`);let Te;I(()=>{let e=p().currentValue.getMonth();Object.is(Te,e)||(Te=e,ne(T,e))});let Ee;I(()=>{let e=p().currentMode===`year`;Object.is(Ee,e)||(Ee=e,T.disabled=e)});let De=e=>{let t=e=>p().onMonthChange(Number(e.currentTarget.value));typeof t==`function`&&t(e)};T.addEventListener(`change`,De),W(()=>T.removeEventListener(`change`,De)),E.setAttribute(`type`,`button`),E.setAttribute(`data-rue-calendar-mode-switch`,`month`);let Oe;I(()=>{let e=`btn btn-sm join-item ${p().currentMode===`month`?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(Oe,t)||(Oe=t,E.setAttribute(`class`,t))});let Z=e=>{let t=p().onModeMonth;typeof t==`function`&&t(e)};E.addEventListener(`click`,Z),W(()=>E.removeEventListener(`click`,Z)),D.setAttribute(`type`,`button`),D.setAttribute(`data-rue-calendar-mode-switch`,`year`);let Q;I(()=>{let e=`btn btn-sm join-item ${p().currentMode===`year`?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(Q,t)||(Q=t,D.setAttribute(`class`,t))});let $=e=>{let t=p().onModeYear;typeof t==`function`&&t(e)};D.addEventListener(`click`,$),W(()=>D.removeEventListener(`click`,$));let ke;I(()=>{let e=C.get()?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,t=e===!1||e==null?``:String(e);Object.is(ke,t)||(ke=t,O.setAttribute(`class`,t))});let Ae=(e,t,n)=>{let r=()=>f(X,()=>({value:String(p().headerTitle)}));return e==null?r():v(e,n,r)},je=j.nextSibling;M.removeChild(j),r({parent:M,before:je},()=>Ae,()=>({}));let Me=(e,t,n)=>{let r=()=>f(X,()=>({value:String(p().todayLabel)}));return e==null?r():v(e,n,r)},Ne=L.nextSibling;z.removeChild(L),r({parent:z,before:Ne},()=>Me,()=>({}));let Pe=(e,t,n)=>{let r=()=>f(X,()=>({value:String(p().todayButtonLabel)}));return e==null?r():v(e,n,r)},Fe=B.nextSibling;G.removeChild(B),r({parent:G,before:Fe},()=>Pe,()=>({}));let Ie=[];U(()=>{let e=p().yearOptions||[];Ie=P(te,ee,Ie,e,(e,t)=>e.value,(e,t)=>{let n=y(e);return V((e,t,r)=>{let i=()=>b(e=>{let t=F(`option`,e),r;I(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,t.value=i)});let i;return I(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)}),o(t,X,()=>({value:String(n.get().value)})),[t,t]});return e==null?i():v(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),W(()=>k(Ie));let Le=[];U(()=>{let e=p().monthOptions||[];Le=P(q,K,Le,e,(e,t)=>e.value,(e,t)=>{let n=y(e);return V((e,t,r)=>{let i=()=>b(e=>{let t=F(`option`,e),r;I(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,t.value=i)});let i;return I(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)}),o(t,X,()=>({value:String(n.get().label)})),[t,t]});return e==null?i():v(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),W(()=>k(Le));let Re=(e,t,n)=>{let r=()=>f(X,()=>({value:String(p().monthButtonLabel)}));return e==null?r():v(e,n,r)},ze=J.nextSibling;re.removeChild(J),r({parent:re,before:ze},()=>Re,()=>({}));let Be=(e,t,n)=>{let r=()=>f(X,()=>({value:String(p().yearButtonLabel)}));return e==null?r():v(e,n,r)},Ve=ie.nextSibling;ae.removeChild(ie),r({parent:ae,before:Ve},()=>Be,()=>({}));let He=(e,t,n)=>{let r=()=>f(X,()=>({value:String(p().viewLabel)}));return e==null?r():v(e,n,r)},Ue=oe.nextSibling;return se.removeChild(oe),r({parent:se,before:Ue},()=>He,()=>({})),g(le,ce,()=>p().showWeek&&p().currentMode===`month`?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`div`,e);return t.setAttribute(`class`,`badge badge-soft badge-sm`),o(t,X,()=>({value:String(p().weekButtonLabel)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=R();return[t.firstChild,t.lastChild]})}),g(ue,Y,()=>p().currentMode===`month`?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`div`,e);t.setAttribute(`class`,`space-y-2`);let n=F(`div`,t);A(t,n);let r;I(()=>{let e=p().rowClassName,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))}),s(()=>p().showWeek?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`div`,e);return t.setAttribute(`class`,`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`),o(t,X,()=>({value:String(p().weekButtonLabel)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=R();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n);let i=H(`rue:list:end`);A(n,i);let a=[];U(()=>{let e=p().weekdayLabels||[];a=P(n,i,a,e,(e,t)=>e,(e,t)=>{let n=y(e);return V((e,t,r)=>{let i=()=>S(e=>{let t=F(`div`,e);t.setAttribute(`class`,`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let r=N(``);return A(t,r),x(r,()=>n.get()),[t,t]});return e==null?i():v(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),W(()=>k(a));let c=F(`div`,t);A(t,c),c.setAttribute(`role`,`grid`),c.setAttribute(`class`,`space-y-2`);let l=H(`rue:list:end`);A(c,l);let u=[];return U(()=>{let e=p().dateRows||[];u=P(c,l,u,e,(e,t)=>t,(e,t)=>{let n=y(e);return V((e,t,r)=>{let i=()=>f(m,()=>({rowArg0:n.get()}));return e==null?i():v(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),W(()=>k(u)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>b(e=>{let t=F(`div`,e);t.setAttribute(`class`,`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`);let n=H(`rue:list:end`);A(t,n);let r=[];return U(()=>{let e=p().monthOptions||[];r=P(n.parentNode,n,r,e,(e,t)=>t,(e,t)=>{let n=y(e);return V((e,t,r)=>{let i=()=>f(h,()=>({rowArg0:n.get()}));return e==null?i():v(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),W(()=>k(r)),[t,t]})}),[t,t]}),e=>D(()=>{u.set(e.arg0),d.set(e.rootProps)}),()=>n(e))},Oe=e=>typeof e==`number`&&e>=0&&e<=6?e:1,Z=e=>new Date(e.getTime()),Q=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},$=e=>{let t=Z(e);return t.setHours(0,0,0,0),t},ke=e=>Q(e.getFullYear(),e.getMonth(),1),Ae=e=>Q(e.getFullYear(),e.getMonth()+1,0),je=e=>Q(e.getFullYear(),0,1),Me=e=>Q(e.getFullYear(),11,31),Ne=(e,t)=>Q(e.getFullYear(),e.getMonth(),e.getDate()+t),Pe=e=>e instanceof Date&&!Number.isNaN(e.getTime()),Fe=(e,t=new Date)=>{if(Pe(e))return Z(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(Pe(t))return t}return Z(t)},Ie=e=>{if(!e)return null;let t=$(Fe(e[0])),n=$(Fe(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},Le=(e,t)=>e.getFullYear()===t.getFullYear(),Re=(e,t)=>Le(e,t)&&e.getMonth()===t.getMonth(),ze=(e,t)=>Re(e,t)&&e.getDate()===t.getDate(),Be=(e,t)=>{let n=Q(e.getFullYear(),e.getMonth()+t,1),r=Ae(n).getDate();return Q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},Ve=(e,t)=>{let n=Q(e.getFullYear()+t,e.getMonth(),1),r=Ae(n).getDate();return Q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},He=(e,t)=>Ve(e,t-e.getFullYear()),Ue=(e,t)=>Be(e,t-e.getMonth()),We=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Ge=(e,t,n)=>{let r=$(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(Z(r))},Ke=(e,t,n,r)=>{let i=ke(e),a=Ae(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):Ge(o,t,n))return!0;o=Ne(o,1)}return!1},qe=(e,t,n,r)=>{let i=je(e),a=Me(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>Q(e.getFullYear(),n,1)).some(e=>r?r(e):Ke(e,t,n))},Je=e=>{let t=$(e),n=Q(Ne(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=Ne(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Ye=(e,t)=>{let n=`${e}:${t}`,r=he.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=Q(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(Ne(a,(t+n)%7)));return he.set(n,o),o},Xe=e=>{let t=ge.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(Q(2026,t,1)));return ge.set(e,r),r},Ze=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Qe=(e,t,n,r,i)=>{let a=Xe(e);return Array.from({length:12},(e,o)=>{let s=Q(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):Ke(s,n,r))}})},$e=(e,t)=>{let n=ke(e),r=Ne(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=Ne(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:Je(i),cells:Array.from({length:7},(t,n)=>{let r=Ne(i,n);return{key:We(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},et=e=>{let t=_e.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),_e.set(e,t)),t},tt=e=>{let t=ve.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),ve.set(e,t)),t},nt=e=>{let t=ye.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),ye.set(e,t)),t},rt=Object.assign((e,t,r)=>{let i=y(q(e,`cellFormatter`)),a=y(q(e,`className`)),o=y(q(e,`defaultValue`)),s=y(q(e,`disabledDate`)),l=y(q(e,`fullscreen`)),d=y(q(e,`headerTitleFormatter`)),p=y(q(e,`locale`)),m=y(q(e,`mode`)),h=y(q(e,`onChange`)),g=y(q(e,`onPanelChange`)),_=y(q(e,`onRenderProfile`)),v=y(q(e,`onSelect`)),b=y(q(e,`renderProfileThreshold`)),x=y(q(e,`showWeek`)),S=y(q(e,`validRange`)),C=y(q(e,`value`)),w=y(q(e,`weekStartsOn`)),E=y(u(n(e),[`cellFormatter`,`className`,`defaultValue`,`disabledDate`,`fullscreen`,`headerTitleFormatter`,`locale`,`mode`,`onChange`,`onPanelChange`,`onRenderProfile`,`onSelect`,`renderProfileThreshold`,`showWeek`,`validRange`,`value`,`weekStartsOn`])),k={value:z(Fe(C.get()??o.get()??new Date)),mode:z(m.get()??`month`)},A=k.value,j=k.mode,M=O(`CalendarPanelImpl:hook:0`),N=O(`CalendarPanelImpl:hook:1`),P=O(`CalendarPanelImpl:hook:2`),F=O(`CalendarPanelImpl:hook:3`,null),I=O(`CalendarPanelImpl:hook:4`,null),L=O(`CalendarPanelImpl:hook:5`,`__none__`),R=T(()=>{let e=xe(!!_.get(),b.get()===void 0?16:b.get()),t=C.get()===void 0?A.value:Fe(C.get(),A.value),n=m.get()??j.value,r=$(new Date),o=Ie(S.get()),c=!!o||!!s.get(),u=p.get()??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),f=Oe(w.get()),y=u.toLowerCase().startsWith(`zh`);M.current||=me().date,N.current||=me().month,P.current||=me().year;let T=o?o.start.getTime():null,E=o?o.end.getTime():null,D=s.get()?s.get().toString():`__none__`;(F.current!==T||I.current!==E||L.current!==D)&&(M.current.clear(),N.current.clear(),P.current.clear(),F.current=T,I.current=E,L.current=D);let O=e=>{if(!c)return!0;let t=We($(e)),n=M.current?.get(t);if(n!==void 0)return n;let r=Ge(e,o,s.get());return M.current?.set(t,r),r},k=e=>{if(!c)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=N.current?.get(t);if(n!==void 0)return n;let r=Ke(e,o,s.get(),O);return N.current?.set(t,r),r},R=e=>{if(!c)return!0;let t=`${e.getFullYear()}`,n=P.current?.get(t);if(n!==void 0)return n;let r=qe(e,o,s.get(),k);return P.current?.set(t,r),r},z=n===`month`,B=z?Ye(u,f):[],V=z?$e(t,f):[];e.cellCount=z?V.reduce((e,t)=>e+t.cells.length,0):12;let H=Ze(t,o),U=Qe(u,t,c?o:null,c?s.get():void 0,c?k:void 0),W=pe(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${l.get()===void 0||l.get()?`rounded-[1.75rem]`:`w-full max-w-[24rem] rounded-[1.5rem]`}`,a.get()),G=x.get()?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,ee=d.get()?d.get()(Z(t),n):n===`month`?et(u).format(t):tt(u).format(t),te=nt(u).format(r),ne=y?`今天`:`Today`,K=y?`月`:`Month`,q=y?`年`:`Year`,J=y?`周`:`Week`,re=y?`今`:`Today`,ie=n===`month`?y?`月视图`:`Month view`:y?`年视图`:`Year view`,ae=c?n===`month`?!k(Be(t,-1)):!R(Ve(t,-1)):!1,oe=c?n===`month`?!k(Be(t,1)):!R(Ve(t,1)):!1,se=c?!O(r):!1,ce=!!i.get(),le=!!i.get(),Y=(e,r)=>{let i=$(Fe(e,t)),a=!ze(i,t),o=n===`month`?!Re(i,t):!Le(i,t);C.get()===void 0&&(A.value=i),a&&h.get()?.(Z(i)),o&&g.get()?.(Z(i),n),v.get()?.(Z(i),{source:r})},ue=e=>{e!==n&&(m.get()===void 0&&(j.value=e),g.get()?.(Z(t),e))},de=new Map;if(z)for(let e of V)for(let n of e.cells)de.set(n.key,{key:n.key,dayNumber:n.date.getDate(),inView:n.inView,selected:ze(n.date,t),isToday:ze(n.date,r),disabled:!O(n.date)});let fe=H.map(e=>({value:e,disabled:!R(Q(e,t.getMonth(),1))})),he=new Map;if(i.get()){let n=z?V.flatMap((e,t)=>e.cells.map((n,r)=>({date:n.date,key:n.key,inView:n.inView,row:t,column:r,week:e.week}))):U.map((e,n)=>({date:Q(t.getFullYear(),e.value,1),key:`${t.getFullYear()}-${String(e.value+1).padStart(2,`0`)}`,inView:!0,row:Math.floor(n/4),column:n%4,week:void 0}));for(let a of n){let n=z?`date`:`month`,o=z?ze(a.date,t):Re(a.date,t),s=Ce(e,`cellFormatter`,{type:n,key:a.key,row:a.row,column:a.column},()=>i.get()(Z(a.date),{type:n,today:Z(r),selected:o,isToday:z?ze(a.date,r):Re(a.date,r),inView:a.inView,disabled:!O(a.date),row:a.row,column:a.column,week:a.week}));he.set(a.key,{key:a.key,type:n,content:String(s??``)})}}let ge={rest:{},rootClassName:W,fullscreen:l.get()===void 0||l.get(),currentMode:n,currentValue:Z(t),headerTitle:ee,todayLabel:te,previousDisabled:ae,nextDisabled:oe,todayDisabled:se,yearOptions:fe,monthOptions:U,weekdayLabels:B,dateRows:V,rowClassName:G,showWeek:x.get(),viewLabel:ie,weekButtonLabel:J,todayButtonLabel:ne,monthButtonLabel:K,yearButtonLabel:q,todayMarkerLabel:re,dateCellStates:de,managedCellContent:he,hasDateCustomRender:ce,hasMonthCustomRender:le,onPrevious:()=>Y(n===`month`?Be(t,-1):Ve(t,-1),`customize`),onToday:()=>Y(r,`customize`),onNext:()=>Y(n===`month`?Be(t,1):Ve(t,1),`customize`),onYearChange:e=>Y(He(t,e),`customize`),onMonthChange:e=>Y(Ue(t,e),`customize`),onModeMonth:()=>ue(`month`),onModeYear:()=>ue(`year`),onDateSelect:e=>Y(e,`date`),onMonthSelect:e=>Y(e,`month`)};return we(_.get(),e,n,`compiled`),ge});return B(()=>c(f(De,()=>({arg0:R.get(),rootProps:E.get()})),e=>D(()=>{i.set(e.cellFormatter),a.set(e.className),o.set(e.defaultValue),s.set(e.disabledDate),l.set(e.fullscreen),d.set(e.headerTitleFormatter),p.set(e.locale),m.set(e.mode),h.set(e.onChange),g.set(e.onPanelChange),_.set(e.onRenderProfile),v.set(e.onSelect),b.set(e.renderProfileThreshold),x.set(e.showWeek),S.set(e.validRange),C.set(e.value),w.set(e.weekStartsOn),E.set(u(e,[`cellFormatter`,`className`,`defaultValue`,`disabledDate`,`fullscreen`,`headerTitleFormatter`,`locale`,`mode`,`onChange`,`onPanelChange`,`onRenderProfile`,`onSelect`,`renderProfileThreshold`,`showWeek`,`validRange`,`value`,`weekStartsOn`]))}),()=>n(e)))},{Cally:(e,i,o)=>{let s=y(q(e,`children`)),l=y(q(e,`className`)),d=y(u(n(e),[`children`,`className`]));return c(b(()=>{let e=R(),n=F(`calendar-date`,e);t(n,`__rue_context_parent_instance__`,w()),A(e,n),I(()=>{te(n,d.get(),[`data-testid`,`className`])}),I(()=>{h(n,`data-testid`,String(d.get()[`data-testid`]))}),I(()=>{a(n,pe(`cally`,l.get()))});let i=H(`rue:children:anchor`);A(n,i),r({parent:n,before:i},()=>s.get(),()=>({}));let o=N(``),c=N(``);return e.insertBefore(o,e.firstChild),e.appendChild(c),[e.firstChild,e.lastChild]}),e=>D(()=>{s.set(e.children),l.set(e.className),d.set(u(e,[`children`,`className`]))}),()=>n(e))},Month:(e,i,o)=>{let s=y(q(e,`children`)),l=y(q(e,`className`)),d=y(u(n(e),[`children`,`className`]));return c(b(()=>{let e=R(),n=F(`calendar-month`,e);t(n,`__rue_context_parent_instance__`,w()),A(e,n),I(()=>{te(n,d.get(),[`data-testid`,`className`])}),I(()=>{h(n,`data-testid`,String(d.get()[`data-testid`]))}),I(()=>{a(n,l.get())});let i=H(`rue:children:anchor`);A(n,i),r({parent:n,before:i},()=>s.get(),()=>({}));let o=N(``),c=N(``);return e.insertBefore(o,e.firstChild),e.appendChild(c),[e.firstChild,e.lastChild]}),e=>D(()=>{s.set(e.children),l.set(e.className),d.set(u(e,[`children`,`className`]))}),()=>n(e))},PikaSingle:(e,t,r)=>{let a=y(q(e,`className`)),o=y(q(e,`type`)),s=y(u(n(e),[`className`,`type`]));return c(b(e=>{let t=fe().content.cloneNode(!0).firstChild,n=t;i(n,()=>s.get(),[`data-testid`,`id`,`value`,`type`,`className`,`__rue_static_template_id__`]);let r;I(()=>{let e=s.get()[`data-testid`];Object.is(r,e)||(r=e,e==null?n.removeAttribute(`data-testid`):n.setAttribute(`data-testid`,String(e)))});let c;I(()=>{let e=s.get().id;Object.is(c,e)||(c=e,e==null||e===!1?n.removeAttribute(`id`):n.setAttribute(`id`,String(e)))});let l;I(()=>{let e=s.get().value,t=e==null?``:String(e);Object.is(l,t)||(l=t,n.value=t)});let u;I(()=>{let e=o.get()===void 0?`text`:o.get();Object.is(u,e)||(u=e,e==null||e===!1?n.removeAttribute(`type`):n.setAttribute(`type`,String(e)))});let d;return I(()=>{let e=pe(`pika-single`,a.get()),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,n.setAttribute(`class`,t))}),[t,t]}),e=>D(()=>{a.set(e.className),o.set(e.type),s.set(u(e,[`className`,`type`]))}),()=>n(e))}}),it=K(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2"><div class="rounded-[1rem] bg-base-200/70 px-3 py-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">当前值</div><div class="mt-1 text-sm font-medium"><!--rue:text-hole:1--></div></div><div class="rounded-[1rem] bg-base-200/70 px-3 py-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">选择来源</div><div class="mt-1 text-sm font-medium">rue:direct-text</div></div><div class="rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">面板状态</div><div class="mt-1 text-sm font-medium">rue:direct-text</div></div></div><p class="m-0 text-xs text-base-content/70">日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。</p></div>`),at=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),ot=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,st=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},ct=e=>e?typeof e==`string`?e:ot(e):`未选择`,lt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,ut=[st(`2026-04-01`),st(`2026-05-31`)],dt=e=>e.getDay()===0||e.getDay()===6||at.has(ot(e)),ft=(e,t,n)=>{let i=z(`2026-04-12`),a=z(`date`),o=z(`month`),s=z(lt(st(i.value),`month`)),c=e=>{i.value=ot(e)},l=(e,t)=>{s.value=lt(e,t)},u=(e,t)=>{a.value=t.source};return B(()=>b(e=>{let t=it().content.cloneNode(!0).firstChild,n=t.childNodes[0],d=n.parentNode,p=t.childNodes[1].childNodes[0].childNodes[1].childNodes[0],m=p.parentNode,h=t.childNodes[1].childNodes[1].childNodes[1].childNodes[0],g=h.parentNode,_=t.childNodes[1].childNodes[2].childNodes[1].childNodes[0],y=_.parentNode,b=H(`rue:text-hole:2`);g.replaceChild(b,h);let x=H(`rue:text-hole:3`);y.replaceChild(x,_);let S=(e,t,n)=>{let r=()=>f(rt,()=>({"data-testid":`basic-calendar`,locale:`zh-CN`,value:i.value,mode:o.value,showWeek:!0,validRange:ut,disabledDate:dt,onChange:c,onPanelChange:(e,t)=>{o.value=t,l(e,t)},onSelect:u}));return e==null?r():v(e,n,r)},C=n.nextSibling;return d.removeChild(n),r({parent:d,before:C},()=>S,()=>({})),r({parent:m,before:p},()=>(e=>(t,n,r)=>J(ct(e))(t,n,r))(i.value),()=>({})),r({parent:g,before:b},()=>J(a.value),()=>({})),r({parent:y,before:x},()=>J(s.value),()=>({})),[t,t]}))},pt=K(`<div class="space-y-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><p class="m-0 text-xs text-base-content/70">当前选择：<!--rue:text-hole:2-->。这条示例 原样保持，用于展示原生 web component 接口。</p></div>`),mt=K(`<div class="space-y-3"><div class="flex flex-wrap items-center gap-3"><button type="button" data-testid="cally-picker-button" class="input input-bordered w-fit cursor-pointer"><!--rue:text-hole:0--></button><span class="text-xs text-base-content/70">当前选择：<!--rue:text-hole:1--></span></div><div data-testid="cally-picker-panel"><!--rue:opaque-hole:2--></div><!--rue:opaque-hole:3--><p class="m-0 text-xs text-base-content/70">点击按钮展开面板，选中日期后会自动回填并收起。这条基础示例 同样完整保持。</p></div>`),ht=K(`<div class="space-y-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><p class="m-0 text-xs text-base-content/70">当前选择：<!--rue:text-hole:2--></p><p class="m-0 text-xs text-base-content/70">输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。</p></div>`),gt=null,_t=null,vt=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,yt=async()=>{typeof window>`u`||typeof customElements>`u`||(gt||=(async()=>{let e=vt();customElements.get(`calendar-date`)||await(e?.cally?e.cally():re(()=>import(`./cally-B-msaaMx.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await gt)},bt=async()=>{if(!_t){let t=vt();_t=(t?.pikaday?t.pikaday():re(()=>import(`./pikaday-BlN5cxGq.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return _t},xt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,St=(e,t=`未选择`)=>e||t,Ct=e=>e||`Pick a date`,wt=(e,t,i)=>{let a=y(q(e,`error`)),o=y(q(e,`loadingLabel`)),l=y(q(e,`ready`)),u=y(q(e,`readyLabel`));return c(b(e=>{let t=F(`div`,e);t.setAttribute(`class`,`flex flex-wrap gap-2 text-xs`);let n=F(`span`,t);A(t,n);let i;I(()=>{let e=`badge ${l.get()?`badge-success badge-soft`:`badge-outline`}`,t=e===!1||e==null?``:String(e);Object.is(i,t)||(i=t,n.setAttribute(`class`,t))});let c=H(`rue:compiled-slot`);return A(n,c),r({parent:n,before:c},()=>l.get()?J(u.get()):J(o.get()),()=>({})),s(()=>a.get()?{__rue_compiled_branch_key:!0,create:()=>b(e=>{let t=F(`span`,e);t.setAttribute(`class`,`badge badge-error badge-soft`);let n=H(`rue:compiled-slot`);return A(t,n),r({parent:t,before:n},()=>J(a.get()),()=>({})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=R();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),[t,t]}),e=>D(()=>{a.set(e.error),o.set(e.loadingLabel),l.set(e.ready),u.set(e.readyLabel)}),()=>n(e))},Tt=(e,t,n)=>_(e=>{let t=F(`svg`,e);t.setAttribute(`aria-label`,`Previous`),t.setAttribute(`class`,`fill-current size-4`),t.setAttribute(`slot`,`previous`),t.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),t.setAttribute(`viewBox`,`0 0 24 24`);let n=F(`path`,t);return A(t,n),n.setAttribute(`fill`,`currentColor`),n.setAttribute(`d`,`M15.75 19.5 8.25 12l7.5-7.5`),[t,t]}),Et=(e,t,n)=>_(e=>{let t=F(`svg`,e);t.setAttribute(`aria-label`,`Next`),t.setAttribute(`class`,`fill-current size-4`),t.setAttribute(`slot`,`next`),t.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),t.setAttribute(`viewBox`,`0 0 24 24`);let n=F(`path`,t);return A(t,n),n.setAttribute(`fill`,`currentColor`),n.setAttribute(`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),[t,t]}),Dt=(e,t,n)=>{let i=O(`CallyCalendarPreview:hook:0`),a=O(`CallyCalendarPreview:hook:1`,()=>{}),o=z(`2026-04-12`),s=z(!1),c=z(``);return E(()=>{let e=!0;yt().then(()=>{if(!e)return;s.value=!0;let t=i.current;if(!t)return;t.value=o.value;let n=()=>{o.value=t.value||``};t.addEventListener(`change`,n),a.current=()=>t.removeEventListener(`change`,n)}).catch(()=>{e&&(c.value=`Cally 加载失败`)}),j(()=>{e=!1})}),j(()=>{a.current?.(),a.current=()=>{}}),B(()=>b(e=>{let t=pt().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,l=t.childNodes[1],u=l.parentNode,p=t.childNodes[2].childNodes[1],m=p.parentNode,h=d(Tt,()=>({})),g=d(Et,()=>({})),_=d(rt.Month,()=>({}));r({parent:a,before:n},()=>(e,t,n)=>v(e,n,()=>d(rt.Cally,()=>({ref:i,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:[h,g,_]}))),()=>({}));let y=(e,t,n)=>{let r=()=>f(wt,()=>({ready:s.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:c.value}));return e==null?r():v(e,n,r)},b=l.nextSibling;return u.removeChild(l),r({parent:u,before:b},()=>y,()=>({})),r({parent:m,before:p},()=>(e=>(t,n,r)=>J(St(e))(t,n,r))(o.value),()=>({})),[t,t]}))},Ot=(e,t,n)=>{let i=O(`CallyDatePickerPreview:hook:0`),a=O(`CallyDatePickerPreview:hook:1`,()=>{}),o=z(``),s=z(!1),c=z(!1),l=z(``);return E(()=>{let e=!0;yt().then(()=>{if(!e)return;c.value=!0;let t=i.current;if(!t)return;t.value=o.value;let n=()=>{o.value=t.value||``,s.value=!1};t.addEventListener(`change`,n),a.current=()=>t.removeEventListener(`change`,n)}).catch(()=>{e&&(l.value=`Cally 加载失败`)}),j(()=>{e=!1})}),j(()=>{a.current?.(),a.current=()=>{}}),B(()=>b(e=>{let t=mt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0],a=t.childNodes[1],u=t.childNodes[0].childNodes[0].childNodes[0],p=u.parentNode,m=t.childNodes[0].childNodes[1].childNodes[1],h=m.parentNode,g=t.childNodes[1].childNodes[0],_=g.parentNode,y=t.childNodes[2],b=y.parentNode;n.setAttribute(`type`,`button`),n.setAttribute(`data-testid`,`cally-picker-button`),n.setAttribute(`class`,`input input-bordered w-fit cursor-pointer`),W(G(e,n,`click`,()=>()=>{s.value=!s.value})),a.setAttribute(`data-testid`,`cally-picker-panel`);let x;I(()=>{let e=`inline-block rounded-box bg-base-100 p-3 shadow-lg ${s.value?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(x,t)||(x=t,a.setAttribute(`class`,t))}),r({parent:p,before:u},()=>(e=>(t,n,r)=>J(Ct(e))(t,n,r))(o.value),()=>({})),r({parent:h,before:m},()=>(e=>(t,n,r)=>J(St(e))(t,n,r))(o.value),()=>({}));let S=d(Tt,()=>({})),C=d(Et,()=>({})),w=d(rt.Month,()=>({}));r({parent:_,before:g},()=>(e,t,n)=>v(e,n,()=>d(rt.Cally,()=>({ref:i,"data-testid":`cally-picker-calendar`,children:[S,C,w]}))),()=>({}));let T=(e,t,n)=>{let r=()=>f(wt,()=>({ready:c.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:l.value}));return e==null?r():v(e,n,r)},E=y.nextSibling;return b.removeChild(y),r({parent:b,before:E},()=>T,()=>({})),[t,t]}))},kt=(e,t,n)=>{let i=O(`PikadayCalendarPreview:hook:0`),a=O(`PikadayCalendarPreview:hook:1`),o=z(``),s=z(!1),c=z(``);return E(()=>{let e=!0;bt().then(t=>{if(!e)return;let n=i.current;n&&(a.current=new t({field:n,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>xt(e),onSelect:e=>{o.value=n.value||xt(e)}}),n.setAttribute(`data-pikaday-ready`,`true`),o.value=n.value||`2026-04-12`,s.value=!0)}).catch(()=>{e&&(c.value=`Pikaday 加载失败`)}),j(()=>{e=!1})}),j(()=>{a.current?.destroy?.(),a.current=null}),B(()=>b(e=>{let t=ht().content.cloneNode(!0).firstChild,n=t.childNodes[0],a=n.parentNode,l=t.childNodes[1],u=l.parentNode,p=t.childNodes[2].childNodes[1],m=p.parentNode;r({parent:a,before:n},()=>(e,t,n)=>v(e,n,()=>d(rt.PikaSingle,()=>({ref:i,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`}))),()=>({}));let h=(e,t,n)=>{let r=()=>f(wt,()=>({ready:s.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:c.value}));return e==null?r():v(e,n,r)},g=l.nextSibling;return u.removeChild(l),r({parent:u,before:g},()=>h,()=>({})),r({parent:m,before:p},()=>(e=>(t,n,r)=>J(St(e))(t,n,r))(o.value),()=>({})),[t,t]}))},At=K(`<div class="space-y-1"><div class="text-lg font-semibold leading-none"><!--rue:text-hole:0--></div><div class="text-[0.68rem] uppercase tracking-[0.22em] opacity-60">Backlog</div></div>`),jt=K(`<div class="space-y-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),Mt=K(`<div class="flex h-full flex-col justify-between gap-2"><div class="flex items-center justify-between gap-2"><span class="text-sm font-semibold"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1-->%</span></div><div class="space-y-1"><div class="h-1.5 overflow-hidden rounded-full bg-base-300/70"><div></div></div><div class="text-[0.62rem] uppercase tracking-[0.22em] opacity-60">Studio load</div></div></div>`),Nt=K(`<div class="border-b border-base-300/70 px-3 py-3"><div class="flex flex-wrap items-start justify-between gap-3"><div><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">Studio Header</div><div class="mt-1 text-base font-semibold"><!--rue:text-hole:0--></div></div><div class="join"><button type="button">月视图</button><button type="button">年视图</button></div></div><div class="mt-3 flex flex-wrap gap-2"><select class="select select-sm min-w-24"><!--rue:text-hole:1--></select><select class="select select-sm min-w-24"><!--rue:text-hole:2--></select></div></div>`),Pt=K(`<div class="not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),Ft=K(`<div class="not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"><table class="table table-zebra"><thead><tr><th>导出</th><th>说明</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),It=K(`<div class="component-preview not-prose my-6 text-base-content lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),Lt=K(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="grid gap-3 md:grid-cols-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div>`),Rt=K(`<div class="space-y-4"><div class="grid gap-4"><div class="max-w-full overflow-x-auto"><!--rue:opaque-hole:0--></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm"><div class="badge badge-secondary badge-soft">Card Mode</div><h3 class="mt-3 mb-1 text-base font-semibold">容量面板</h3><p class="m-0 text-sm text-base-content/70">使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。</p><div class="mt-4 space-y-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div></div></div>`),zt=K(`<div class="prose prose-sm max-w-none md:prose-base"><h1>Calendar 日历</h1><p class="mt-3 mb-3 text-sm">Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条基础接入链路。</p><div class="not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><section class="my-12 space-y-6"><div><h2 class="mb-2">API</h2><p class="m-0 text-sm text-base-content/70">默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时使用 Rue 自己的视觉和基础导出方式。</p></div><!--rue:opaque-hole:10--><div><h2 class="mb-2">附属导出</h2><p class="m-0 text-sm text-base-content/70">基础的 Cally 与 Pikaday 接口没有删除，而是并列保持为复合导出，便于按需接入。</p></div><!--rue:opaque-hole:11--></section></div>`),Bt=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`onRenderProfile`,description:`渲染诊断回调，报告当前更新阶段、耗时、cellRender 调用次数与慢单元格`,type:`(event: CalendarRenderProfileEvent) => void`,defaultValue:`-`},{prop:`renderProfileThreshold`,description:`渲染诊断的慢调用阈值，超过后会在 onRenderProfile 中标记 slow`,type:`number`,defaultValue:`16`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],Vt=[{name:`Calendar.Cally`,description:`展示基础 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],Ht={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},Ut={2:12,3:28,4:18,8:43},Wt={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},Gt={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},Kt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,qt=e=>e?typeof e==`string`?e:Kt(e):`未选择`,Jt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Yt=(e,t,i)=>{let a=y(q(e,`label`)),o=y(q(e,`value`));return c(b(e=>{let t=F(`div`,e);t.setAttribute(`class`,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let n=F(`span`,t);A(t,n),n.setAttribute(`class`,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let i=H(`rue:compiled-slot`);A(n,i),r({parent:n,before:i},()=>J(a.get()),()=>({}));let s=F(`span`,t);A(t,s),s.setAttribute(`class`,`text-sm font-medium`);let c=H(`rue:compiled-slot`);return A(s,c),r({parent:s,before:c},()=>J(o.get()),()=>({})),[t,t]}),e=>D(()=>{a.set(e.label),o.set(e.value)}),()=>n(e))},Xt=(e,t,r)=>{let i=y(q(e,`rows`));return c(b(e=>{let t=Pt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,a=K(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return U(()=>{let e=i.get()||[];o=M(r,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return L(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=N(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=N(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=N(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),W(()=>k(o)),[t,t]}),e=>D(()=>{i.set(e.rows)}),()=>n(e))},Zt=(e,t,r)=>{let i=y(q(e,`rows`));return c(b(e=>{let t=Ft().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],r=n.parentNode,a=K(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td></tr>`),o=[];return U(()=>{let e=i.get()||[];o=M(r,n,o,e,(e,t)=>e.name,(e,t,n)=>{let r=e,i;return L(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=N(``);o.insertBefore(c,n),o.removeChild(n);let l=r.name==null||typeof r.name==`boolean`?``:String(r.name);c.textContent=l;let u=r.description==null||typeof r.description==`boolean`?``:String(r.description);return s.textContent=u,i=()=>{{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(l,e)||(c.textContent=e,l=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(u,e)||(s.textContent=e,u=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),W(()=>k(o)),[t,t]}),e=>D(()=>{i.set(e.rows)}),()=>n(e))},Qt=(e,t,n)=>{let{shouldLoadPreview:i,preloadTimer:o}=l(`useSetup:0:0`,()=>{let t=z(q(e,`previewLoadDelay`)==null),n=O(`plan:7813:hook:0`,null);return E(()=>{q(e,`previewLoadDelay`)==null||t.value||(n.current=window.setTimeout(()=>{t.value=!0,n.current=null},q(e,`previewLoadDelay`)))}),j(()=>{n.current!=null&&(window.clearTimeout(n.current),n.current=null)}),{shouldLoadPreview:t,preloadTimer:n}});return b(t=>{let n=It().content.cloneNode(!0).firstChild,o=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=n.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u=n.childNodes[1],d=u.parentNode,p=n.childNodes[2],m=p.parentNode;r({parent:s,before:o},()=>J(q(e,`title`)),()=>({})),r({parent:l,before:c},()=>q(e,`summary`)?(t,n,i)=>v(t,i,()=>b(()=>{let t=R(),n=F(`p`,t);A(t,n),a(n,`m-0 text-sm opacity-70`);let i=H(`rue:slot:anchor`);A(n,i),r({parent:n,before:i},()=>J(q(e,`summary`)),()=>({}));let o=N(``),s=N(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})):(e,t,n)=>{let r=()=>_(e=>{let t=N(``);return[t,t]});return e==null?r():v(e,n,r)},()=>({}));let h=(t,n,r)=>{let i=()=>f(ae,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:q(e,`tab`).value,onChange:t=>q(e,`tab`).value=t,className:`mb-3 mt-4`}));return t==null?i():v(t,r,i)},g=u.nextSibling;return d.removeChild(u),r({parent:d,before:g},()=>h,()=>({})),r({parent:m,before:p},()=>q(e,`tab`).value===`preview`?i.value?((e,t)=>(n,r,i)=>J(se(e,t))(n,r,i))(q(e,`title`),q(e,`preview`)):(t,n,i)=>v(t,i,()=>b(()=>{let t=R(),n=F(`div`,t);A(t,n),a(n,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let i=F(`div`,n);A(n,i),a(i,`badge badge-outline badge-sm`),A(i,N(`Preview`));let o=F(`p`,n);A(n,o),a(o,`mb-0 mt-3 text-sm text-base-content/72`);let s=H(`rue:slot:anchor`);A(o,s),r({parent:o,before:s},()=>J(q(e,`previewLoadNote`)||`预览正在后台初始化，页面主体会先显示出来。`),()=>({}));let c=N(``),l=N(``);return t.insertBefore(c,t.firstChild),t.appendChild(l),[t.firstChild,t.lastChild]})):(t,n,r)=>v(t,r,()=>f(ie,()=>({className:`mt-2`,lang:q(e,`lang`)===void 0?`tsx`:q(e,`lang`),code:q(e,`code`)}))),()=>({})),[n,n]})},$t=(e,t,i)=>{let a=y(q(e,`badge`)),o=y(q(e,`detail`)),s=y(q(e,`title`));return c(b(e=>{let t=F(`div`,e);t.setAttribute(`class`,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let n=F(`div`,t);A(t,n),n.setAttribute(`class`,`badge badge-outline badge-sm`);let i=H(`rue:compiled-slot`);A(n,i),r({parent:n,before:i},()=>J(a.get()),()=>({}));let c=F(`h3`,t);A(t,c),c.setAttribute(`class`,`mt-3 mb-1 text-base font-semibold`);let l=H(`rue:compiled-slot`);A(c,l),r({parent:c,before:l},()=>J(s.get()),()=>({}));let u=F(`p`,t);A(t,u),u.setAttribute(`class`,`m-0 text-sm text-base-content/70`);let d=H(`rue:compiled-slot`);return A(u,d),r({parent:u,before:d},()=>J(o.get()),()=>({})),[t,t]}),e=>D(()=>{a.set(e.badge),o.set(e.detail),s.set(e.title)}),()=>n(e))},en=(e,t,n)=>{let i=z(`2026-04-15`),o=z(`month`);return B(()=>b(e=>{let t=Lt().content.cloneNode(!0).firstChild,n=t.childNodes[0],s=n.parentNode,c=t.childNodes[1].childNodes[0],l=c.parentNode,u=t.childNodes[1].childNodes[1],d=u.parentNode,p=t.childNodes[1].childNodes[2],m=p.parentNode,h=(e,t,n)=>{let s=()=>f(rt,()=>({"data-testid":`notice-calendar`,locale:`zh-CN`,value:i.value,mode:o.value,onChange:e=>{i.value=Kt(e)},onPanelChange:(e,t)=>{o.value=t},cellRender:(e,t)=>{if(t.type===`month`){let t=Ut[e.getMonth()];return t?b(()=>{let e=R(),n=At().content.cloneNode(!0),i=n.firstChild.childNodes[0].childNodes[0],a=i.parentNode;e.appendChild(n),r({parent:a,before:i},()=>J(t),()=>({}));let o=N(``),s=N(``);return e.insertBefore(o,e.firstChild),e.appendChild(s),[e.firstChild,e.lastChild]}):null}let n=Ht[Kt(e)]??[];return n.length?b(e=>{let t=jt().content.cloneNode(!0).firstChild,i=t.childNodes[0],o=i.parentNode,s=t.childNodes[1],c=s.parentNode,l=[];return U(()=>{let e=n.slice(0,2)||[];l=P(o,i,l,e,(e,t)=>e.label,(e,t)=>{let n=y(e);return V((e,t,i)=>{let a=()=>b(e=>{let t=F(`div`,e),i;I(()=>{let e=`badge badge-soft badge-xs ${Gt[n.get().tone]}`,r=e===!1||e==null?``:String(e);Object.is(i,r)||(i=r,t.setAttribute(`class`,r))});let a=H(`rue:compiled-slot`);return A(t,a),r({parent:t,before:a},()=>J(n.get().label),()=>({})),[t,t]});return e==null?a():v(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),W(()=>k(l)),r({parent:c,before:s},()=>n.length>2?(e,t,r)=>v(e,r,()=>b(()=>{let e=R(),t=F(`div`,e);A(e,t),a(t,`text-[0.62rem] opacity-60`),A(t,N(`+`));let r=C(t);A(t,r),I(()=>{ee(r,n.length-2)}),A(t,N(` more`));let i=N(``),o=N(``);return e.insertBefore(i,e.firstChild),e.appendChild(o),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>_(e=>{let t=N(``);return[t,t]});return e==null?r():v(e,n,r)},()=>({})),[t,t]}):null}}));return e==null?s():v(e,n,s)},g=n.nextSibling;s.removeChild(n),r({parent:s,before:g},()=>h,()=>({}));let x=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`当前日期`,value:qt(i.value)}));return e==null?r():v(e,n,r)},S=c.nextSibling;l.removeChild(c),r({parent:l,before:S},()=>x,()=>({}));let w=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`4 月 15 日事件`,value:`${Ht[`2026-04-15`]?.length??0} 条`}));return e==null?r():v(e,n,r)},T=u.nextSibling;d.removeChild(u),r({parent:d,before:T},()=>w,()=>({}));let E=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`9 月 backlog`,value:`${Ut[8]} 项`}));return e==null?r():v(e,n,r)},D=p.nextSibling;return m.removeChild(p),r({parent:m,before:D},()=>E,()=>({})),[t,t]}))},tn=(e,t,n)=>{let i=z(`2026-09-18`),a=z(`month`);return B(()=>b(e=>{let t=Rt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[0].childNodes[1].childNodes[3].childNodes[0],c=s.parentNode,l=t.childNodes[0].childNodes[1].childNodes[3].childNodes[1],u=l.parentNode,d=t.childNodes[0].childNodes[1].childNodes[3].childNodes[2],p=d.parentNode,h=(e,t,n)=>{let o=()=>f(rt,()=>({"data-testid":`card-calendar`,className:`w-[34rem] max-w-none`,locale:`zh-CN`,fullscreen:!1,value:i.value,mode:a.value,onChange:e=>{i.value=Kt(e)},onPanelChange:(e,t)=>{a.value=t},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=Wt[Kt(e)];return n==null?t.originNode:b(t=>{let i=Mt().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1],o=i.childNodes[1].childNodes[0].childNodes[0],s=i.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode,l=i.childNodes[0].childNodes[1].childNodes[0],u=l.parentNode,d;I(()=>{let e=`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`,t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,a.setAttribute(`class`,t))});let f;I(()=>{let e=`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,o.setAttribute(`class`,t))});let p;return I(()=>{let e={width:`${n}%`},t=m(e);Object.is(p,t)||(p=t,o.style.cssText=t)}),r({parent:c,before:s},()=>J(e.getDate()),()=>({})),r({parent:u,before:l},()=>J(n),()=>({})),[i,i]})}}));return e==null?o():v(e,n,o)},g=n.nextSibling;o.removeChild(n),r({parent:o,before:g},()=>h,()=>({}));let _=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`当前日期`,value:qt(i.value)}));return e==null?r():v(e,n,r)},y=s.nextSibling;c.removeChild(s),r({parent:c,before:y},()=>_,()=>({}));let x=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`高负载日`,value:`9/18 · 92%`}));return e==null?r():v(e,n,r)},S=l.nextSibling;u.removeChild(l),r({parent:u,before:S},()=>x,()=>({}));let C=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}));return e==null?r():v(e,n,r)},w=d.nextSibling;return p.removeChild(d),r({parent:p,before:w},()=>C,()=>({})),[t,t]}))},nn=(e,t,n)=>{let i=z(`2026-07-04`),a=z(`month`),o=z(`date`);return B(()=>b(e=>{let t=Lt().content.cloneNode(!0).firstChild,n=t.childNodes[0],s=n.parentNode,c=t.childNodes[1].childNodes[0],l=c.parentNode,u=t.childNodes[1].childNodes[1],d=u.parentNode,m=t.childNodes[1].childNodes[2],h=m.parentNode,g=(e,t,n)=>{let s=()=>f(rt,()=>({"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:i.value,mode:a.value,headerRender:({value:e,type:t,yearOptions:n,monthOptions:i,onMonthChange:a,onTypeChange:o,onYearChange:s})=>b(c=>{let l=Nt().content.cloneNode(!0).firstChild,u=l.childNodes[0].childNodes[1].childNodes[0],d=l.childNodes[0].childNodes[1].childNodes[1],f=l.childNodes[1].childNodes[0],m=l.childNodes[1].childNodes[1],h=l.childNodes[0].childNodes[0].childNodes[1].childNodes[0],g=h.parentNode,_=l.childNodes[1].childNodes[0].childNodes[0],x=_.parentNode,S=l.childNodes[1].childNodes[1].childNodes[0],C=S.parentNode;u.setAttribute(`type`,`button`);let w;I(()=>{let e=`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,n=e===!1||e==null?``:String(e);Object.is(w,n)||(w=n,u.setAttribute(`class`,n))}),W(G(c,u,`click`,()=>()=>o(`month`))),d.setAttribute(`type`,`button`);let T;I(()=>{let e=`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,n=e===!1||e==null?``:String(e);Object.is(T,n)||(T=n,d.setAttribute(`class`,n))}),W(G(c,d,`click`,()=>()=>o(`year`))),f.setAttribute(`class`,`select select-sm min-w-24`);let E;I(()=>{let t=e.getFullYear();Object.is(E,t)||(E=t,ne(f,t))});let D=e=>{let t=e=>s(Number(e.currentTarget.value));typeof t==`function`&&t(e)};f.addEventListener(`change`,D),W(()=>f.removeEventListener(`change`,D)),m.setAttribute(`class`,`select select-sm min-w-24`);let O;I(()=>{let t=e.getMonth();Object.is(O,t)||(O=t,ne(m,t))});let j;I(()=>{let e=t===`year`;Object.is(j,e)||(j=e,m.disabled=e)});let R=e=>{let t=e=>a(Number(e.currentTarget.value));typeof t==`function`&&t(e)};m.addEventListener(`change`,R),W(()=>m.removeEventListener(`change`,R)),r({parent:g,before:h},()=>((e,t)=>(n,r,i)=>J(Jt(e,t))(n,r,i))(e,t),()=>({}));let z=[];U(()=>{z=P(x,_,z,n||[],(e,t)=>e,(e,t)=>{let n=y(e);return V((e,t,r)=>{let i=()=>b(e=>{let t=F(`option`,e),r;I(()=>{let e=n.get(),i=e==null?``:String(e);Object.is(r,i)||(r=i,t.value=i)});let i=N(``);return A(t,i),p(i,()=>n.get()),[t,t]});return e==null?i():v(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),W(()=>k(z));let B=K(`<option><!--rue:text-hole:0--></option>`),H=[];return U(()=>{H=M(C,S,H,i||[],(e,t)=>e.value,(e,t,n)=>{let r=e,i;return L(e=>{let t=B().content.cloneNode(!0).firstChild,n=t,a=t.childNodes[0],o=a.parentNode,s;{let e=r.value,t=e==null?``:String(e);Object.is(s,t)||(s=t,n.value=t)}let c;{let e=!!r.disabled;Object.is(c,e)||(c=e,n.disabled=e)}let l=N(``);o.insertBefore(l,a),o.removeChild(a);let u=r.label==null||typeof r.label==`boolean`?``:String(r.label);return l.textContent=u,i=()=>{{let e=r.value,t=e==null?``:String(e);Object.is(s,t)||(s=t,n.value=t)}{let e=!!r.disabled;Object.is(c,e)||(c=e,n.disabled=e)}{let e=r.label==null||typeof r.label==`boolean`?``:String(r.label);Object.is(u,e)||(l.textContent=e,u=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),W(()=>k(H)),[l,l]}),onChange:e=>{i.value=Kt(e)},onPanelChange:(e,t)=>{a.value=t},onSelect:(e,t)=>{o.value=t.source}}));return e==null?s():v(e,n,s)},_=n.nextSibling;s.removeChild(n),r({parent:s,before:_},()=>g,()=>({}));let x=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`当前日期`,value:qt(i.value)}));return e==null?r():v(e,n,r)},S=c.nextSibling;l.removeChild(c),r({parent:l,before:S},()=>x,()=>({}));let C=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`当前模式`,value:a.value}));return e==null?r():v(e,n,r)},w=u.nextSibling;d.removeChild(u),r({parent:d,before:w},()=>C,()=>({}));let T=(e,t,n)=>{let r=()=>f(Yt,()=>({label:`最近来源`,value:o.value}));return e==null?r():v(e,n,r)},E=m.nextSibling;return h.removeChild(m),r({parent:h,before:E},()=>T,()=>({})),[t,t]}))},rn=`import { ref } from '@rue-js/rue'
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
  const handleChange = (date: Date) => {
    selectedValue.value = formatIsoDate(date)
  }
  const handlePanelChange = (date: Date, nextMode: 'month' | 'year') => {
    panelState.value = formatPanelLabel(date, nextMode)
  }
  const handleSelect = (_date: Date, info: { source: string }) => {
    selectedSource.value = info.source
  }

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
}`,an=`import { ref } from '@rue-js/rue'
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
}`,on=`import { ref } from '@rue-js/rue'
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
}`,sn=`import { ref } from '@rue-js/rue'
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
}`,cn=`import 'cally'
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
}`,ln=`import 'cally'
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
}`,un=(e,t,n)=>{let i=z(`preview`),a=z(`preview`),o=z(`preview`),s=z(`preview`),c=z(`preview`),l=z(`preview`),u=z(`preview`);return B(()=>f(oe,()=>({children:(e,t,n)=>{let d=()=>b(e=>{let t=R(),n=zt().content.cloneNode(!0),d=n.firstChild,p=d.childNodes[2].childNodes[0],m=p.parentNode,h=d.childNodes[2].childNodes[1],g=h.parentNode,_=d.childNodes[2].childNodes[2],y=_.parentNode,b=d.childNodes[3],x=b.parentNode,S=d.childNodes[4],C=S.parentNode,w=d.childNodes[5],T=w.parentNode,E=d.childNodes[6],D=E.parentNode,O=d.childNodes[7],k=O.parentNode,A=d.childNodes[8],j=A.parentNode,M=d.childNodes[9],P=M.parentNode,F=d.childNodes[10].childNodes[1],I=F.parentNode,L=d.childNodes[10].childNodes[3],z=L.parentNode;t.appendChild(n);let B=(e,t,n)=>{let r=()=>f($t,()=>({badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}));return e==null?r():v(e,n,r)},V=p.nextSibling;m.removeChild(p),r({parent:m,before:V},()=>B,()=>({}));let H=(e,t,n)=>{let r=()=>f($t,()=>({badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格组织为事项列表、容量卡或数据看板。`}));return e==null?r():v(e,n,r)},U=h.nextSibling;g.removeChild(h),r({parent:g,before:U},()=>H,()=>({}));let W=(e,t,n)=>{let r=()=>f($t,()=>({badge:`Composition Ready`,title:`基础场景完整覆盖`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，基础接入方式不需要拆。`}));return e==null?r():v(e,n,r)},G=_.nextSibling;y.removeChild(_),r({parent:y,before:G},()=>W,()=>({}));let ee=(e,t,n)=>{let r=()=>f(Qt,()=>({title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:i,preview:ft,code:rn}));return e==null?r():v(e,n,r)},te=b.nextSibling;x.removeChild(b),r({parent:x,before:te},()=>ee,()=>({}));let ne=(e,t,n)=>{let r=()=>f(Qt,()=>({title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:a,preview:en,code:an,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`}));return e==null?r():v(e,n,r)},K=S.nextSibling;C.removeChild(S),r({parent:C,before:K},()=>ne,()=>({}));let q=(e,t,n)=>{let r=()=>f(Qt,()=>({title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:o,preview:tn,code:on,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`}));return e==null?r():v(e,n,r)},J=w.nextSibling;T.removeChild(w),r({parent:T,before:J},()=>q,()=>({}));let re=(e,t,n)=>{let r=()=>f(Qt,()=>({title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:s,preview:nn,code:sn,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`}));return e==null?r():v(e,n,r)},ie=E.nextSibling;D.removeChild(E),r({parent:D,before:ie},()=>re,()=>({}));let ae=(e,t,n)=>{let r=()=>f(Qt,()=>({title:`Cally calendar example`,summary:`基础的 Cally web component 日历壳层仍然原样可用。`,tab:c,preview:Dt,code:cn,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`}));return e==null?r():v(e,n,r)},oe=O.nextSibling;k.removeChild(O),r({parent:k,before:oe},()=>ae,()=>({}));let se=(e,t,n)=>{let r=()=>f(Qt,()=>({title:`Cally date picker example`,summary:`基础的日期输入弹层示例 展示，只把交互说明和布局重新编排。`,tab:l,preview:Ot,code:ln,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`}));return e==null?r():v(e,n,r)},ce=A.nextSibling;j.removeChild(A),r({parent:j,before:ce},()=>se,()=>({}));let le=(e,t,n)=>{let r=()=>f(Qt,()=>({title:`Pikaday input example`,summary:`展示基础 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:u,preview:kt,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`}));return e==null?r():v(e,n,r)},Y=M.nextSibling;P.removeChild(M),r({parent:P,before:Y},()=>le,()=>({}));let ue=(e,t,n)=>{let r=()=>f(Xt,()=>({rows:Bt}));return e==null?r():v(e,n,r)},de=F.nextSibling;I.removeChild(F),r({parent:I,before:de},()=>ue,()=>({}));let fe=(e,t,n)=>{let r=()=>f(Zt,()=>({rows:Vt}));return e==null?r():v(e,n,r)},pe=L.nextSibling;z.removeChild(L),r({parent:z,before:pe},()=>fe,()=>({}));let me=N(``),he=N(``);return t.insertBefore(me,t.firstChild),t.appendChild(he),[t.firstChild,t.lastChild]});return e==null?d():v(e,n,d)}})))};export{un as default};
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BlN5cxGq.js","assets/rolldown-runtime-Dd_uD5pT.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{At as t,Bt as n,Ct as r,Dt as i,F as a,H as o,Ht as s,I as c,Jt as l,Qt as u,St as d,Tt as f,U as p,Ut as m,V as h,Vt as g,Wt as _,Y as v,_n as y,_t as b,an as x,at as S,en as C,f as w,fn as T,g as E,gn as D,gt as O,h as k,hn as A,in as j,it as M,m as N,mn as P,mt as F,p as I,pn as L,q as R,qt as z,sn as B,st as V,tt as H,u as U,vn as ee,vt as W,wt as te,xt as ne,yn as G,yt as K,z as q,zt as J}from"./rue-runtime-Cv6BZekS.js";import{t as re}from"./preload-helper-Czpn1I53.js";import{t as ie}from"./Code-BzFVdc3U.js";import{t as ae}from"./tabs-vLOp20OU.js";import{r as oe}from"./SidebarPlaygroundDesign-CoDFHXQl.js";import{t as se}from"./preview-test-gate-BVbSCGe9.js";var ce=G(`<span>rue:direct-text</span>`),le=G(`<button type="button" role="gridcell"></button>`),Y=G(`<div role="row"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),ue=G(`<button type="button"></button>`),de=G(`<div data-rue-calendar-root="true"><div data-rue-calendar-header="true"><div><div class="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55">Rue Calendar</div><div class="mt-1 text-xl font-semibold leading-tight"><!--rue:opaque-hole:0--></div><div class="mt-1 text-xs text-base-content/60"><!--rue:opaque-hole:1--></div></div><div class="flex flex-wrap items-center gap-2 lg:justify-end"><div class="join"><button type="button" class="btn btn-sm join-item" aria-label="Previous"><span aria-hidden="true">&lt;</span></button><button type="button" class="btn btn-sm join-item btn-ghost"><!--rue:opaque-hole:2--></button><button type="button" class="btn btn-sm join-item" aria-label="Next"><span aria-hidden="true">&gt;</span></button></div><select class="select select-sm min-w-24" data-rue-calendar-year-select="true"><!--rue:text-hole:3--></select><select class="select select-sm min-w-24" data-rue-calendar-month-select="true"><!--rue:text-hole:4--></select><div class="join"><button type="button" data-rue-calendar-mode-switch="month"><!--rue:opaque-hole:5--></button><button type="button" data-rue-calendar-mode-switch="year"><!--rue:opaque-hole:6--></button></div></div></div><div><div class="flex items-center justify-between gap-3 px-1"><div class="badge badge-outline badge-sm"><!--rue:opaque-hole:7--></div><!--rue:text-hole:8--></div><!--rue:text-hole:9--></div></div>`),fe=G(`<input>`),pe=(e,t)=>t?`${e} ${t}`:e,me=()=>({date:new Map,month:new Map,year:new Map}),he=new Map,ge=new Map,_e=new Map,ve=new Map,ye=new Map,be=()=>typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now(),xe=(e,t)=>({enabled:e,start:e?be():0,threshold:t,cellCount:0,customRenderCount:0,cellFormatterCount:0,fullCellRenderCount:0,dateCellRenderCount:0,dateFullCellRenderCount:0,monthCellRenderCount:0,monthFullCellRenderCount:0,slowCells:[]}),Se=(e,t)=>{e.enabled&&(e.customRenderCount+=1,t===`cellFormatter`?e.cellFormatterCount+=1:t===`fullCellRender`?e.fullCellRenderCount+=1:t===`dateCellRender`?e.dateCellRenderCount+=1:t===`dateFullCellRender`?e.dateFullCellRenderCount+=1:t===`monthCellRender`?e.monthCellRenderCount+=1:e.monthFullCellRenderCount+=1)},Ce=(e,t,n,r)=>{if(!e.enabled)return r();Se(e,t);let i=be(),a=r(),o=be()-i;return o>=e.threshold&&e.slowCells.push({type:n.type,key:n.key,renderName:t,duration:o,row:n.row,column:n.column}),a},we=(e,t,n,r)=>{if(!e||!t.enabled)return;let i=be()-t.start,a={component:`Calendar`,mode:n,phase:r,duration:i,cellCount:t.cellCount,customRenderCount:t.customRenderCount,cellFormatterCount:t.cellFormatterCount,fullCellRenderCount:t.fullCellRenderCount,dateCellRenderCount:t.dateCellRenderCount,dateFullCellRenderCount:t.dateFullCellRenderCount,monthCellRenderCount:t.monthCellRenderCount,monthFullCellRenderCount:t.monthFullCellRenderCount,slow:i>=t.threshold||t.slowCells.length>0,threshold:t.threshold,slowCells:t.slowCells.slice()},o=()=>e(a);typeof queueMicrotask==`function`?queueMicrotask(o):Promise.resolve().then(o)},Te=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return a+=t?` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?` border-base-300/70 bg-base-200/50 text-base-content/35`:r?` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},Ee=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return i+=t?` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?` border-base-300/70 bg-base-200/50 text-base-content/35`:` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},X=(e,t,n)=>{let r=W(O(e,`value`));return p(a(e=>{let t=ce().content.cloneNode(!0).firstChild,n=t.childNodes[0];return n.parentNode,c(n,()=>String(String(r.get()))),[t,t]}),e=>C(()=>{r.set(e.value)}),()=>b(e))},De=(e,t,i)=>{let u=W(O(e,`arg0`)),d=W(O(e,`rootProps`)),f=()=>u.get(),v=(e,t,n)=>{let{CompiledRow102:r,row:i,__rue_phase2_row:a}=l(`useSetup:0:0`,()=>{let t=(e,t,n)=>{let r=W(O(e,`rowArg0`)),{cell:i,__rue_phase2_cell:a,state:c}=l(`useSetup:0:0`,()=>{let e=H(()=>r.get());e.get();let t=e;return{cell:e,__rue_phase2_cell:t,state:H(()=>f().dateCellStates.get(t.get().key)??{key:t.get().key,dayNumber:t.get().date.getDate(),inView:!1,selected:!1,isToday:!1,disabled:!0})}});return p((e=>e)(_(e=>{let t=le().content.cloneNode(!0).firstChild,n=t,r=t;n.setAttribute(`type`,`button`),n.setAttribute(`role`,`gridcell`);let a;j(()=>{let e=i.get().key;Object.is(a,e)||(a=e,e==null?n.removeAttribute(`data-rue-calendar-cell`):n.setAttribute(`data-rue-calendar-cell`,String(e)))});let l;j(()=>{let e=c.get().inView?`true`:`false`;Object.is(l,e)||(l=e,e==null?n.removeAttribute(`data-rue-calendar-in-view`):n.setAttribute(`data-rue-calendar-in-view`,String(e)))});let u;j(()=>{let e=c.get().selected?`true`:`false`;Object.is(u,e)||(u=e,e==null?n.removeAttribute(`aria-pressed`):n.setAttribute(`aria-pressed`,String(e)))});let d;j(()=>{let e=c.get().isToday?`date`:void 0;Object.is(d,e)||(d=e,e==null?n.removeAttribute(`aria-current`):n.setAttribute(`aria-current`,String(e)))});let p;j(()=>{let e=!!c.get().disabled;Object.is(p,e)||(p=e,n.disabled=e)});let h;return j(()=>{let e=Te(S.get(),c.get().selected,c.get().disabled,c.get().inView,c.get().isToday),t=e===!1||e==null?``:String(e);Object.is(h,t)||(h=t,n.setAttribute(`class`,t))}),B(U(e,n,`click`,()=>()=>f().onDateSelect(i.get().date))),m(r,null,()=>f().hasDateCustomRender?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`span`,e),n;return j(()=>{let e=i.get().key;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`data-rue-calendar-detail`):t.setAttribute(`data-rue-calendar-detail`,String(e)))}),o(t,X,()=>({value:String(f().managedCellContent.get(i.get().key)?.content??``)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=A(`span`,e);t.setAttribute(`class`,`flex items-start justify-between gap-2`);let n=A(`span`,t);T(t,n);let r;return j(()=>{let e=`text-sm font-semibold ${c.get().inView?``:`opacity-60`}`,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))}),o(n,X,()=>({value:String(c.get().dayNumber)})),s(()=>c.get().isToday?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`span`,e),n;return j(()=>{let e=`badge badge-xs ${c.get().selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,r=e===!1||e==null?``:String(e);Object.is(n,r)||(n=r,t.setAttribute(`class`,r))}),o(t,X,()=>({value:String(f().todayMarkerLabel)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>K(e=>{let t=P();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),[t,t]})}),[t,t]}),i.get().key),e=>C(()=>{r.set(e.rowArg0)}),()=>b(e))},n=H(()=>O(e,`rowArg0`));return n.get(),{CompiledRow102:t,row:n,__rue_phase2_row:n}});return _(e=>{let t=Y().content.cloneNode(!0).firstChild,n=t,a=t.childNodes[0],s=a.parentNode,c=t.childNodes[1],l=c.parentNode;n.setAttribute(`role`,`row`);let u;j(()=>{let e=f().rowClassName,t=e===!1||e==null?``:String(e);Object.is(u,t)||(u=t,n.setAttribute(`class`,t))}),m(s,a,()=>f().showWeek?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`div`,e);t.setAttribute(`class`,`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`);let n;return j(()=>{let e=i.get().week;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`data-rue-calendar-week`):t.setAttribute(`data-rue-calendar-week`,String(e)))}),o(t,X,()=>({value:String(i.get().week)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>K(e=>{let t=P();return[t.firstChild,t.lastChild]})});let d=[];return z(()=>{let e=i.get().cells||[];d=k(l,c,d,e,(e,t)=>t,(e,t)=>{let n=W(e);return I((e,t,i)=>{let a=()=>h(r,()=>({rowArg0:n.get()}));return e==null?a():g(e,i,a)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(d)),[t,t]})},y=(e,t,n)=>{let r=W(O(e,`rowArg0`)),{monthOption:i,__rue_phase2_monthOption:a,monthDate:c,__rue_phase2_monthDate:u,selected:d,__rue_phase2_selected:h,isToday:g,__rue_phase2_isToday:v,disabled:y,__rue_phase2_disabled:x}=l(`useSetup:0:0`,()=>{let e=H(()=>r.get());e.get();let t=e,n=H(()=>Q(f().currentValue.getFullYear(),t.get().value,1));n.get();let i=n,a=H(()=>Re(i.get(),f().currentValue));a.get();let o=a,s=H(()=>Re(i.get(),$(new Date)));s.get();let c=s,l=H(()=>t.get().disabled===!0);return l.get(),{monthOption:e,__rue_phase2_monthOption:t,monthDate:n,__rue_phase2_monthDate:i,selected:a,__rue_phase2_selected:o,isToday:s,__rue_phase2_isToday:c,disabled:l,__rue_phase2_disabled:l}});return p((e=>e)(_(e=>{let t=ue().content.cloneNode(!0).firstChild,n=t,r=t;n.setAttribute(`type`,`button`);let a;j(()=>{let e=`${f().currentValue.getFullYear()}-${`${i.get().value+1}`.padStart(2,`0`)}`;Object.is(a,e)||(a=e,e==null?n.removeAttribute(`data-rue-calendar-month`):n.setAttribute(`data-rue-calendar-month`,String(e)))});let l;j(()=>{let e=d.get()?`true`:`false`;Object.is(l,e)||(l=e,e==null?n.removeAttribute(`aria-pressed`):n.setAttribute(`aria-pressed`,String(e)))});let u;j(()=>{let e=!!y.get();Object.is(u,e)||(u=e,n.disabled=e)});let p;return j(()=>{let e=Ee(S.get(),d.get(),y.get(),g.get()),t=e===!1||e==null?``:String(e);Object.is(p,t)||(p=t,n.setAttribute(`class`,t))}),B(U(e,n,`click`,()=>()=>f().onMonthSelect(c.get()))),m(r,null,()=>f().hasMonthCustomRender?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`span`,e),n;return j(()=>{let e=`${f().currentValue.getFullYear()}-${String(i.get().value+1).padStart(2,`0`)}`;Object.is(n,e)||(n=e,e==null?t.removeAttribute(`data-rue-calendar-detail`):t.setAttribute(`data-rue-calendar-detail`,String(e)))}),o(t,X,()=>({value:String(f().managedCellContent.get(`${f().currentValue.getFullYear()}-${String(i.get().value+1).padStart(2,`0`)}`)?.content??``)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=A(`span`,e);t.setAttribute(`class`,`flex items-center justify-between gap-2`);let n=A(`span`,t);return T(t,n),n.setAttribute(`class`,`text-sm font-semibold`),o(n,X,()=>({value:String(i.get().label)})),s(()=>g.get()?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`span`,e),n;return j(()=>{let e=`badge badge-xs ${d.get()?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,r=e===!1||e==null?``:String(e);Object.is(n,r)||(n=r,t.setAttribute(`class`,r))}),o(t,X,()=>({value:String(f().todayMarkerLabel)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>K(e=>{let t=P();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),[t,t]})}),[t,t]}),`${f().currentValue.getFullYear()}-${i.get().value}`),e=>C(()=>{r.set(e.rowArg0)}),()=>b(e))},x=H(()=>f().fullscreen);x.get();let S=x;return p(_(e=>{let t=de().content.cloneNode(!0).firstChild,i=t,l=t.childNodes[0],u=t.childNodes[0].childNodes[1].childNodes[0].childNodes[0],p=t.childNodes[0].childNodes[1].childNodes[0].childNodes[1],b=t.childNodes[0].childNodes[1].childNodes[0].childNodes[2],S=t.childNodes[0].childNodes[1].childNodes[1],C=t.childNodes[0].childNodes[1].childNodes[2],E=t.childNodes[0].childNodes[1].childNodes[3].childNodes[0],O=t.childNodes[0].childNodes[1].childNodes[3].childNodes[1],M=t.childNodes[1],N=t.childNodes[0].childNodes[0].childNodes[1].childNodes[0],F=N.parentNode,R=t.childNodes[0].childNodes[0].childNodes[2].childNodes[0],V=R.parentNode,H=t.childNodes[0].childNodes[1].childNodes[0].childNodes[1].childNodes[0],U=H.parentNode,ee=t.childNodes[0].childNodes[1].childNodes[1].childNodes[0],te=ee.parentNode,G=t.childNodes[0].childNodes[1].childNodes[2].childNodes[0],q=G.parentNode,J=t.childNodes[0].childNodes[1].childNodes[3].childNodes[0].childNodes[0],re=J.parentNode,ie=t.childNodes[0].childNodes[1].childNodes[3].childNodes[1].childNodes[0],ae=ie.parentNode,oe=t.childNodes[1].childNodes[0].childNodes[0].childNodes[0],se=oe.parentNode,ce=t.childNodes[1].childNodes[0].childNodes[1],le=ce.parentNode,Y=t.childNodes[1].childNodes[1],ue=Y.parentNode;r(i,()=>d.get(),[`data-rue-calendar-root`,`data-rue-calendar-mode`,`className`,`__rue_static_template_id__`]),i.setAttribute(`data-rue-calendar-root`,`true`);let fe;j(()=>{let e=f().currentMode;Object.is(fe,e)||(fe=e,e==null?i.removeAttribute(`data-rue-calendar-mode`):i.setAttribute(`data-rue-calendar-mode`,String(e)))});let pe;j(()=>{let e=f().rootClassName,t=e===!1||e==null?``:String(e);Object.is(pe,t)||(pe=t,i.setAttribute(`class`,t))}),l.setAttribute(`data-rue-calendar-header`,`true`);let me;j(()=>{let e=f().headerTitle;Object.is(me,e)||(me=e,e==null?l.removeAttribute(`data-current`):l.setAttribute(`data-current`,String(e)))});let he;j(()=>{let e=f().currentMode;Object.is(he,e)||(he=e,e==null?l.removeAttribute(`data-mode`):l.setAttribute(`data-mode`,String(e)))});let ge;j(()=>{let e=`border-b border-base-300/70 ${x.get()?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,t=e===!1||e==null?``:String(e);Object.is(ge,t)||(ge=t,l.setAttribute(`class`,t))}),u.setAttribute(`type`,`button`),u.setAttribute(`class`,`btn btn-sm join-item`),u.setAttribute(`aria-label`,`Previous`);let _e;j(()=>{let e=!!f().previousDisabled;Object.is(_e,e)||(_e=e,u.disabled=e)});let ve=e=>{let t=f().onPrevious;typeof t==`function`&&t(e)};u.addEventListener(`click`,ve),B(()=>u.removeEventListener(`click`,ve)),p.setAttribute(`type`,`button`),p.setAttribute(`class`,`btn btn-sm join-item btn-ghost`);let ye;j(()=>{let e=!!f().todayDisabled;Object.is(ye,e)||(ye=e,p.disabled=e)});let be=e=>{let t=f().onToday;typeof t==`function`&&t(e)};p.addEventListener(`click`,be),B(()=>p.removeEventListener(`click`,be)),b.setAttribute(`type`,`button`),b.setAttribute(`class`,`btn btn-sm join-item`),b.setAttribute(`aria-label`,`Next`);let xe;j(()=>{let e=!!f().nextDisabled;Object.is(xe,e)||(xe=e,b.disabled=e)});let Se=e=>{let t=f().onNext;typeof t==`function`&&t(e)};b.addEventListener(`click`,Se),B(()=>b.removeEventListener(`click`,Se)),S.setAttribute(`class`,`select select-sm min-w-24`),S.setAttribute(`data-rue-calendar-year-select`,`true`);let Ce;j(()=>{let e=f().currentValue.getFullYear();Object.is(Ce,e)||(Ce=e,ne(S,e))});let we=e=>{let t=e=>f().onYearChange(Number(e.currentTarget.value));typeof t==`function`&&t(e)};S.addEventListener(`change`,we),B(()=>S.removeEventListener(`change`,we)),C.setAttribute(`class`,`select select-sm min-w-24`),C.setAttribute(`data-rue-calendar-month-select`,`true`);let Te;j(()=>{let e=f().currentValue.getMonth();Object.is(Te,e)||(Te=e,ne(C,e))});let Ee;j(()=>{let e=f().currentMode===`year`;Object.is(Ee,e)||(Ee=e,C.disabled=e)});let De=e=>{let t=e=>f().onMonthChange(Number(e.currentTarget.value));typeof t==`function`&&t(e)};C.addEventListener(`change`,De),B(()=>C.removeEventListener(`change`,De)),E.setAttribute(`type`,`button`),E.setAttribute(`data-rue-calendar-mode-switch`,`month`);let Oe;j(()=>{let e=`btn btn-sm join-item ${f().currentMode===`month`?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(Oe,t)||(Oe=t,E.setAttribute(`class`,t))});let Z=e=>{let t=f().onModeMonth;typeof t==`function`&&t(e)};E.addEventListener(`click`,Z),B(()=>E.removeEventListener(`click`,Z)),O.setAttribute(`type`,`button`),O.setAttribute(`data-rue-calendar-mode-switch`,`year`);let Q;j(()=>{let e=`btn btn-sm join-item ${f().currentMode===`year`?`btn-primary`:`btn-ghost`}`,t=e===!1||e==null?``:String(e);Object.is(Q,t)||(Q=t,O.setAttribute(`class`,t))});let $=e=>{let t=f().onModeYear;typeof t==`function`&&t(e)};O.addEventListener(`click`,$),B(()=>O.removeEventListener(`click`,$));let ke;j(()=>{let e=x.get()?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,t=e===!1||e==null?``:String(e);Object.is(ke,t)||(ke=t,M.setAttribute(`class`,t))});let Ae=(e,t,n)=>{let r=()=>h(X,()=>({value:String(f().headerTitle)}));return e==null?r():g(e,n,r)},je=N.nextSibling;F.removeChild(N),n({parent:F,before:je},()=>Ae,()=>({}));let Me=(e,t,n)=>{let r=()=>h(X,()=>({value:String(f().todayLabel)}));return e==null?r():g(e,n,r)},Ne=R.nextSibling;V.removeChild(R),n({parent:V,before:Ne},()=>Me,()=>({}));let Pe=(e,t,n)=>{let r=()=>h(X,()=>({value:String(f().todayButtonLabel)}));return e==null?r():g(e,n,r)},Fe=H.nextSibling;U.removeChild(H),n({parent:U,before:Fe},()=>Pe,()=>({}));let Ie=[];z(()=>{let e=f().yearOptions||[];Ie=k(te,ee,Ie,e,(e,t)=>e.value,(e,t)=>{let n=W(e);return I((e,t,r)=>{let i=()=>_(e=>{let t=A(`option`,e),r;j(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,t.value=i)});let i;return j(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)}),o(t,X,()=>({value:String(n.get().value)})),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(Ie));let Le=[];z(()=>{let e=f().monthOptions||[];Le=k(q,G,Le,e,(e,t)=>e.value,(e,t)=>{let n=W(e);return I((e,t,r)=>{let i=()=>_(e=>{let t=A(`option`,e),r;j(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,t.value=i)});let i;return j(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)}),o(t,X,()=>({value:String(n.get().label)})),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(Le));let Re=(e,t,n)=>{let r=()=>h(X,()=>({value:String(f().monthButtonLabel)}));return e==null?r():g(e,n,r)},ze=J.nextSibling;re.removeChild(J),n({parent:re,before:ze},()=>Re,()=>({}));let Be=(e,t,n)=>{let r=()=>h(X,()=>({value:String(f().yearButtonLabel)}));return e==null?r():g(e,n,r)},Ve=ie.nextSibling;ae.removeChild(ie),n({parent:ae,before:Ve},()=>Be,()=>({}));let He=(e,t,n)=>{let r=()=>h(X,()=>({value:String(f().viewLabel)}));return e==null?r():g(e,n,r)},Ue=oe.nextSibling;return se.removeChild(oe),n({parent:se,before:Ue},()=>He,()=>({})),m(le,ce,()=>f().showWeek&&f().currentMode===`month`?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`div`,e);return t.setAttribute(`class`,`badge badge-soft badge-sm`),o(t,X,()=>({value:String(f().weekButtonLabel)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>K(e=>{let t=P();return[t.firstChild,t.lastChild]})}),m(ue,Y,()=>f().currentMode===`month`?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`div`,e);t.setAttribute(`class`,`space-y-2`);let n=A(`div`,t);T(t,n);let r;j(()=>{let e=f().rowClassName,t=e===!1||e==null?``:String(e);Object.is(r,t)||(r=t,n.setAttribute(`class`,t))}),s(()=>f().showWeek?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`div`,e);return t.setAttribute(`class`,`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`),o(t,X,()=>({value:String(f().weekButtonLabel)})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>K(e=>{let t=P();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(n);let i=L(`rue:list:end`);T(n,i);let l=[];z(()=>{let e=f().weekdayLabels||[];l=k(n,i,l,e,(e,t)=>e,(e,t)=>{let n=W(e);return I((e,t,r)=>{let i=()=>a(e=>{let t=A(`div`,e);t.setAttribute(`class`,`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`);let r=D(``);return T(t,r),c(r,()=>n.get()),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(l));let u=A(`div`,t);T(t,u),u.setAttribute(`role`,`grid`),u.setAttribute(`class`,`space-y-2`);let d=L(`rue:list:end`);T(u,d);let p=[];return z(()=>{let e=f().dateRows||[];p=k(u,d,p,e,(e,t)=>t,(e,t)=>{let n=W(e);return I((e,t,r)=>{let i=()=>h(v,()=>({rowArg0:n.get()}));return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(p)),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>_(e=>{let t=A(`div`,e);t.setAttribute(`class`,`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`);let n=L(`rue:list:end`);T(t,n);let r=[];return z(()=>{let e=f().monthOptions||[];r=k(n.parentNode,n,r,e,(e,t)=>t,(e,t)=>{let n=W(e);return I((e,t,r)=>{let i=()=>h(y,()=>({rowArg0:n.get()}));return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(r)),[t,t]})}),[t,t]}),e=>C(()=>{u.set(e.arg0),d.set(e.rootProps)}),()=>b(e))},Oe=e=>typeof e==`number`&&e>=0&&e<=6?e:1,Z=e=>new Date(e.getTime()),Q=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},$=e=>{let t=Z(e);return t.setHours(0,0,0,0),t},ke=e=>Q(e.getFullYear(),e.getMonth(),1),Ae=e=>Q(e.getFullYear(),e.getMonth()+1,0),je=e=>Q(e.getFullYear(),0,1),Me=e=>Q(e.getFullYear(),11,31),Ne=(e,t)=>Q(e.getFullYear(),e.getMonth(),e.getDate()+t),Pe=e=>e instanceof Date&&!Number.isNaN(e.getTime()),Fe=(e,t=new Date)=>{if(Pe(e))return Z(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(Pe(t))return t}return Z(t)},Ie=e=>{if(!e)return null;let t=$(Fe(e[0])),n=$(Fe(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},Le=(e,t)=>e.getFullYear()===t.getFullYear(),Re=(e,t)=>Le(e,t)&&e.getMonth()===t.getMonth(),ze=(e,t)=>Re(e,t)&&e.getDate()===t.getDate(),Be=(e,t)=>{let n=Q(e.getFullYear(),e.getMonth()+t,1),r=Ae(n).getDate();return Q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},Ve=(e,t)=>{let n=Q(e.getFullYear()+t,e.getMonth(),1),r=Ae(n).getDate();return Q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},He=(e,t)=>Ve(e,t-e.getFullYear()),Ue=(e,t)=>Be(e,t-e.getMonth()),We=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Ge=(e,t,n)=>{let r=$(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(Z(r))},Ke=(e,t,n,r)=>{let i=ke(e),a=Ae(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):Ge(o,t,n))return!0;o=Ne(o,1)}return!1},qe=(e,t,n,r)=>{let i=je(e),a=Me(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>Q(e.getFullYear(),n,1)).some(e=>r?r(e):Ke(e,t,n))},Je=e=>{let t=$(e),n=Q(Ne(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=Ne(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},Ye=(e,t)=>{let n=`${e}:${t}`,r=he.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=Q(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(Ne(a,(t+n)%7)));return he.set(n,o),o},Xe=e=>{let t=ge.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(Q(2026,t,1)));return ge.set(e,r),r},Ze=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},Qe=(e,t,n,r,i)=>{let a=Xe(e);return Array.from({length:12},(e,o)=>{let s=Q(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):Ke(s,n,r))}})},$e=(e,t)=>{let n=ke(e),r=Ne(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=Ne(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:Je(i),cells:Array.from({length:7},(t,n)=>{let r=Ne(i,n);return{key:We(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},et=e=>{let t=_e.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),_e.set(e,t)),t},tt=e=>{let t=ve.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),ve.set(e,t)),t},nt=e=>{let t=ye.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),ye.set(e,t)),t},rt=Object.assign((e,t,n)=>{let r=W(O(e,`cellFormatter`)),i=W(O(e,`className`)),a=W(O(e,`defaultValue`)),o=W(O(e,`disabledDate`)),s=W(O(e,`fullscreen`)),c=W(O(e,`headerTitleFormatter`)),l=W(O(e,`locale`)),u=W(O(e,`mode`)),d=W(O(e,`onChange`)),f=W(O(e,`onPanelChange`)),m=W(O(e,`onRenderProfile`)),g=W(O(e,`onSelect`)),_=W(O(e,`renderProfileThreshold`)),y=W(O(e,`showWeek`)),x=W(O(e,`validRange`)),S=W(O(e,`value`)),w=W(O(e,`weekStartsOn`)),T=W(F(b(e),[`cellFormatter`,`className`,`defaultValue`,`disabledDate`,`fullscreen`,`headerTitleFormatter`,`locale`,`mode`,`onChange`,`onPanelChange`,`onRenderProfile`,`onSelect`,`renderProfileThreshold`,`showWeek`,`validRange`,`value`,`weekStartsOn`])),E={value:V(Fe(S.get()??a.get()??new Date)),mode:V(u.get()??`month`)},D=E.value,k=E.mode,A=R(`CalendarPanelImpl:hook:0`),j=R(`CalendarPanelImpl:hook:1`),M=R(`CalendarPanelImpl:hook:2`),N=R(`CalendarPanelImpl:hook:3`,null),P=R(`CalendarPanelImpl:hook:4`,null),I=R(`CalendarPanelImpl:hook:5`,`__none__`),L=H(()=>{let e=xe(!!m.get(),_.get()===void 0?16:_.get()),t=S.get()===void 0?D.value:Fe(S.get(),D.value),n=u.get()??k.value,a=$(new Date),p=Ie(x.get()),h=!!p||!!o.get(),v=l.get()??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`),b=Oe(w.get()),C=v.toLowerCase().startsWith(`zh`);A.current||=me().date,j.current||=me().month,M.current||=me().year;let T=p?p.start.getTime():null,E=p?p.end.getTime():null,O=o.get()?o.get().toString():`__none__`;(N.current!==T||P.current!==E||I.current!==O)&&(A.current.clear(),j.current.clear(),M.current.clear(),N.current=T,P.current=E,I.current=O);let F=e=>{if(!h)return!0;let t=We($(e)),n=A.current?.get(t);if(n!==void 0)return n;let r=Ge(e,p,o.get());return A.current?.set(t,r),r},L=e=>{if(!h)return!0;let t=`${e.getFullYear()}-${e.getMonth()}`,n=j.current?.get(t);if(n!==void 0)return n;let r=Ke(e,p,o.get(),F);return j.current?.set(t,r),r},R=e=>{if(!h)return!0;let t=`${e.getFullYear()}`,n=M.current?.get(t);if(n!==void 0)return n;let r=qe(e,p,o.get(),L);return M.current?.set(t,r),r},z=n===`month`,B=z?Ye(v,b):[],V=z?$e(t,b):[];e.cellCount=z?V.reduce((e,t)=>e+t.cells.length,0):12;let H=Ze(t,p),U=Qe(v,t,h?p:null,h?o.get():void 0,h?L:void 0),ee=pe(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${s.get()===void 0||s.get()?`rounded-[1.75rem]`:`w-full max-w-[24rem] rounded-[1.5rem]`}`,i.get()),W=y.get()?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`,te=c.get()?c.get()(Z(t),n):n===`month`?et(v).format(t):tt(v).format(t),ne=nt(v).format(a),G=C?`今天`:`Today`,K=C?`月`:`Month`,q=C?`年`:`Year`,J=C?`周`:`Week`,re=C?`今`:`Today`,ie=n===`month`?C?`月视图`:`Month view`:C?`年视图`:`Year view`,ae=h?n===`month`?!L(Be(t,-1)):!R(Ve(t,-1)):!1,oe=h?n===`month`?!L(Be(t,1)):!R(Ve(t,1)):!1,se=h?!F(a):!1,ce=!!r.get(),le=!!r.get(),Y=(e,r)=>{let i=$(Fe(e,t)),a=!ze(i,t),o=n===`month`?!Re(i,t):!Le(i,t);S.get()===void 0&&(D.value=i),a&&d.get()?.(Z(i)),o&&f.get()?.(Z(i),n),g.get()?.(Z(i),{source:r})},ue=e=>{e!==n&&(u.get()===void 0&&(k.value=e),f.get()?.(Z(t),e))},de=new Map;if(z)for(let e of V)for(let n of e.cells)de.set(n.key,{key:n.key,dayNumber:n.date.getDate(),inView:n.inView,selected:ze(n.date,t),isToday:ze(n.date,a),disabled:!F(n.date)});let fe=H.map(e=>({value:e,disabled:!R(Q(e,t.getMonth(),1))})),he=new Map;if(r.get()){let n=z?V.flatMap((e,t)=>e.cells.map((n,r)=>({date:n.date,key:n.key,inView:n.inView,row:t,column:r,week:e.week}))):U.map((e,n)=>({date:Q(t.getFullYear(),e.value,1),key:`${t.getFullYear()}-${String(e.value+1).padStart(2,`0`)}`,inView:!0,row:Math.floor(n/4),column:n%4,week:void 0}));for(let i of n){let n=z?`date`:`month`,o=z?ze(i.date,t):Re(i.date,t),s=Ce(e,`cellFormatter`,{type:n,key:i.key,row:i.row,column:i.column},()=>r.get()(Z(i.date),{type:n,today:Z(a),selected:o,isToday:z?ze(i.date,a):Re(i.date,a),inView:i.inView,disabled:!F(i.date),row:i.row,column:i.column,week:i.week}));he.set(i.key,{key:i.key,type:n,content:String(s??``)})}}let ge={rest:{},rootClassName:ee,fullscreen:s.get()===void 0||s.get(),currentMode:n,currentValue:Z(t),headerTitle:te,todayLabel:ne,previousDisabled:ae,nextDisabled:oe,todayDisabled:se,yearOptions:fe,monthOptions:U,weekdayLabels:B,dateRows:V,rowClassName:W,showWeek:y.get(),viewLabel:ie,weekButtonLabel:J,todayButtonLabel:G,monthButtonLabel:K,yearButtonLabel:q,todayMarkerLabel:re,dateCellStates:de,managedCellContent:he,hasDateCustomRender:ce,hasMonthCustomRender:le,onPrevious:()=>Y(n===`month`?Be(t,-1):Ve(t,-1),`customize`),onToday:()=>Y(a,`customize`),onNext:()=>Y(n===`month`?Be(t,1):Ve(t,1),`customize`),onYearChange:e=>Y(He(t,e),`customize`),onMonthChange:e=>Y(Ue(t,e),`customize`),onModeMonth:()=>ue(`month`),onModeYear:()=>ue(`year`),onDateSelect:e=>Y(e,`date`),onMonthSelect:e=>Y(e,`month`)};return we(m.get(),e,n,`compiled`),ge});return v(()=>p(h(De,()=>({arg0:L.get(),rootProps:T.get()})),e=>C(()=>{r.set(e.cellFormatter),i.set(e.className),a.set(e.defaultValue),o.set(e.disabledDate),s.set(e.fullscreen),c.set(e.headerTitleFormatter),l.set(e.locale),u.set(e.mode),d.set(e.onChange),f.set(e.onPanelChange),m.set(e.onRenderProfile),g.set(e.onSelect),_.set(e.renderProfileThreshold),y.set(e.showWeek),x.set(e.validRange),S.set(e.value),w.set(e.weekStartsOn),T.set(F(e,[`cellFormatter`,`className`,`defaultValue`,`disabledDate`,`fullscreen`,`headerTitleFormatter`,`locale`,`mode`,`onChange`,`onPanelChange`,`onRenderProfile`,`onSelect`,`renderProfileThreshold`,`showWeek`,`validRange`,`value`,`weekStartsOn`]))}),()=>b(e)))},{Cally:(e,r,a)=>{let o=W(O(e,`children`)),s=W(O(e,`className`)),c=W(F(b(e),[`children`,`className`]));return p(_(()=>{let e=P(),r=A(`calendar-date`,e);t(r,`__rue_context_parent_instance__`,x()),T(e,r),j(()=>{te(r,c.get(),[`data-testid`,`className`])}),j(()=>{f(r,`data-testid`,String(c.get()[`data-testid`]))}),j(()=>{i(r,pe(`cally`,s.get()))});let a=L(`rue:children:anchor`);T(r,a),n({parent:r,before:a},()=>o.get(),()=>({}));let l=D(``),u=D(``);return e.insertBefore(l,e.firstChild),e.appendChild(u),[e.firstChild,e.lastChild]}),e=>C(()=>{o.set(e.children),s.set(e.className),c.set(F(e,[`children`,`className`]))}),()=>b(e))},Month:(e,r,a)=>{let o=W(O(e,`children`)),s=W(O(e,`className`)),c=W(F(b(e),[`children`,`className`]));return p(_(()=>{let e=P(),r=A(`calendar-month`,e);t(r,`__rue_context_parent_instance__`,x()),T(e,r),j(()=>{te(r,c.get(),[`data-testid`,`className`])}),j(()=>{f(r,`data-testid`,String(c.get()[`data-testid`]))}),j(()=>{i(r,s.get())});let a=L(`rue:children:anchor`);T(r,a),n({parent:r,before:a},()=>o.get(),()=>({}));let l=D(``),u=D(``);return e.insertBefore(l,e.firstChild),e.appendChild(u),[e.firstChild,e.lastChild]}),e=>C(()=>{o.set(e.children),s.set(e.className),c.set(F(e,[`children`,`className`]))}),()=>b(e))},PikaSingle:(e,t,n)=>{let i=W(O(e,`className`)),a=W(O(e,`type`)),o=W(F(b(e),[`className`,`type`]));return p(_(e=>{let t=fe().content.cloneNode(!0).firstChild,n=t;r(n,()=>o.get(),[`data-testid`,`id`,`value`,`type`,`className`,`__rue_static_template_id__`]);let s;j(()=>{let e=o.get()[`data-testid`];Object.is(s,e)||(s=e,e==null?n.removeAttribute(`data-testid`):n.setAttribute(`data-testid`,String(e)))});let c;j(()=>{let e=o.get().id;Object.is(c,e)||(c=e,e==null||e===!1?n.removeAttribute(`id`):n.setAttribute(`id`,String(e)))});let l;j(()=>{let e=o.get().value,t=e==null?``:String(e);Object.is(l,t)||(l=t,n.value=t)});let u;j(()=>{let e=a.get()===void 0?`text`:a.get();Object.is(u,e)||(u=e,e==null||e===!1?n.removeAttribute(`type`):n.setAttribute(`type`,String(e)))});let d;return j(()=>{let e=pe(`pika-single`,i.get()),t=e===!1||e==null?``:String(e);Object.is(d,t)||(d=t,n.setAttribute(`class`,t))}),[t,t]}),e=>C(()=>{i.set(e.className),a.set(e.type),o.set(F(e,[`className`,`type`]))}),()=>b(e))}}),it=G(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2"><div class="rounded-[1rem] bg-base-200/70 px-3 py-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">当前值</div><div class="mt-1 text-sm font-medium"><!--rue:text-hole:1--></div></div><div class="rounded-[1rem] bg-base-200/70 px-3 py-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">选择来源</div><div class="mt-1 text-sm font-medium">rue:direct-text</div></div><div class="rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">面板状态</div><div class="mt-1 text-sm font-medium">rue:direct-text</div></div></div><p class="m-0 text-xs text-base-content/70">日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。</p></div>`),at=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),ot=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,st=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},ct=e=>e?typeof e==`string`?e:ot(e):`未选择`,lt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,ut=[st(`2026-04-01`),st(`2026-05-31`)],dt=e=>e.getDay()===0||e.getDay()===6||at.has(ot(e)),ft=(e,t,r)=>{let i=V(`2026-04-12`),a=V(`date`),o=V(`month`),s=V(lt(st(i.value),`month`)),c=e=>{i.value=ot(e)},l=(e,t)=>{s.value=lt(e,t)},u=(e,t)=>{a.value=t.source};return v(()=>_(e=>{let t=it().content.cloneNode(!0).firstChild,r=t.childNodes[0],d=r.parentNode,f=t.childNodes[1].childNodes[0].childNodes[1].childNodes[0],p=f.parentNode,m=t.childNodes[1].childNodes[1].childNodes[1].childNodes[0],_=m.parentNode,v=t.childNodes[1].childNodes[2].childNodes[1].childNodes[0],y=v.parentNode,b=L(`rue:text-hole:2`);_.replaceChild(b,m);let x=L(`rue:text-hole:3`);y.replaceChild(x,v);let S=(e,t,n)=>{let r=()=>h(rt,()=>({"data-testid":`basic-calendar`,locale:`zh-CN`,value:i.value,mode:o.value,showWeek:!0,validRange:ut,disabledDate:dt,onChange:c,onPanelChange:(e,t)=>{o.value=t,l(e,t)},onSelect:u}));return e==null?r():g(e,n,r)},C=r.nextSibling;return d.removeChild(r),n({parent:d,before:C},()=>S,()=>({})),n({parent:p,before:f},()=>(e=>(t,n,r)=>J(ct(e))(t,n,r))(i.value),()=>({})),n({parent:_,before:b},()=>J(a.value),()=>({})),n({parent:y,before:x},()=>J(s.value),()=>({})),[t,t]}))},pt=G(`<div class="space-y-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><p class="m-0 text-xs text-base-content/70">当前选择：<!--rue:text-hole:2-->。这条示例 原样保持，用于展示原生 web component 接口。</p></div>`),mt=G(`<div class="space-y-3"><div class="flex flex-wrap items-center gap-3"><button type="button" data-testid="cally-picker-button" class="input input-bordered w-fit cursor-pointer"><!--rue:text-hole:0--></button><span class="text-xs text-base-content/70">当前选择：<!--rue:text-hole:1--></span></div><div data-testid="cally-picker-panel"><!--rue:opaque-hole:2--></div><!--rue:opaque-hole:3--><p class="m-0 text-xs text-base-content/70">点击按钮展开面板，选中日期后会自动回填并收起。这条基础示例 同样完整保持。</p></div>`),ht=G(`<div class="space-y-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><p class="m-0 text-xs text-base-content/70">当前选择：<!--rue:text-hole:2--></p><p class="m-0 text-xs text-base-content/70">输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。</p></div>`),gt=null,_t=null,vt=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,yt=async()=>{typeof window>`u`||typeof customElements>`u`||(gt||=(async()=>{let e=vt();customElements.get(`calendar-date`)||await(e?.cally?e.cally():re(()=>import(`./cally-B-msaaMx.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await gt)},bt=async()=>{if(!_t){let t=vt();_t=(t?.pikaday?t.pikaday():re(()=>import(`./pikaday-BlN5cxGq.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return _t},xt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,St=(e,t=`未选择`)=>e||t,Ct=e=>e||`Pick a date`,wt=(e,t,r)=>{let i=W(O(e,`error`)),a=W(O(e,`loadingLabel`)),o=W(O(e,`ready`)),c=W(O(e,`readyLabel`));return p(_(e=>{let t=A(`div`,e);t.setAttribute(`class`,`flex flex-wrap gap-2 text-xs`);let r=A(`span`,t);T(t,r);let l;j(()=>{let e=`badge ${o.get()?`badge-success badge-soft`:`badge-outline`}`,t=e===!1||e==null?``:String(e);Object.is(l,t)||(l=t,r.setAttribute(`class`,t))});let u=L(`rue:compiled-slot`);return T(r,u),n({parent:r,before:u},()=>o.get()?J(c.get()):J(a.get()),()=>({})),s(()=>i.get()?{__rue_compiled_branch_key:!0,create:()=>_(e=>{let t=A(`span`,e);t.setAttribute(`class`,`badge badge-error badge-soft`);let r=L(`rue:compiled-slot`);return T(t,r),n({parent:t,before:r},()=>J(i.get()),()=>({})),[t,t]})}:{__rue_compiled_branch_key:!1,create:()=>K(e=>{let t=P();return[t.firstChild,t.lastChild]})}).__rue_compiled_mount(t),[t,t]}),e=>C(()=>{i.set(e.error),a.set(e.loadingLabel),o.set(e.ready),c.set(e.readyLabel)}),()=>b(e))},Tt=(e,t,n)=>K(e=>{let t=A(`svg`,e);t.setAttribute(`aria-label`,`Previous`),t.setAttribute(`class`,`fill-current size-4`),t.setAttribute(`slot`,`previous`),t.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),t.setAttribute(`viewBox`,`0 0 24 24`);let n=A(`path`,t);return T(t,n),n.setAttribute(`fill`,`currentColor`),n.setAttribute(`d`,`M15.75 19.5 8.25 12l7.5-7.5`),[t,t]}),Et=(e,t,n)=>K(e=>{let t=A(`svg`,e);t.setAttribute(`aria-label`,`Next`),t.setAttribute(`class`,`fill-current size-4`),t.setAttribute(`slot`,`next`),t.setAttribute(`xmlns`,`http://www.w3.org/2000/svg`),t.setAttribute(`viewBox`,`0 0 24 24`);let n=A(`path`,t);return T(t,n),n.setAttribute(`fill`,`currentColor`),n.setAttribute(`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),[t,t]}),Dt=(e,t,r)=>{let i=R(`CallyCalendarPreview:hook:0`),a=R(`CallyCalendarPreview:hook:1`,()=>{}),o=V(`2026-04-12`),s=V(!1),c=V(``);return M(()=>{let e=!0;yt().then(()=>{if(!e)return;s.value=!0;let t=i.current;if(!t)return;t.value=o.value;let n=()=>{o.value=t.value||``};t.addEventListener(`change`,n),a.current=()=>t.removeEventListener(`change`,n)}).catch(()=>{e&&(c.value=`Cally 加载失败`)}),S(()=>{e=!1})}),S(()=>{a.current?.(),a.current=()=>{}}),v(()=>_(e=>{let t=pt().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,l=t.childNodes[1],u=l.parentNode,d=t.childNodes[2].childNodes[1],f=d.parentNode,p=q(Tt,()=>({})),m=q(Et,()=>({})),_=q(rt.Month,()=>({}));n({parent:a,before:r},()=>(e,t,n)=>g(e,n,()=>q(rt.Cally,()=>({ref:i,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:[p,m,_]}))),()=>({}));let v=(e,t,n)=>{let r=()=>h(wt,()=>({ready:s.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:c.value}));return e==null?r():g(e,n,r)},y=l.nextSibling;return u.removeChild(l),n({parent:u,before:y},()=>v,()=>({})),n({parent:f,before:d},()=>(e=>(t,n,r)=>J(St(e))(t,n,r))(o.value),()=>({})),[t,t]}))},Ot=(e,t,r)=>{let i=R(`CallyDatePickerPreview:hook:0`),a=R(`CallyDatePickerPreview:hook:1`,()=>{}),o=V(``),s=V(!1),c=V(!1),l=V(``);return M(()=>{let e=!0;yt().then(()=>{if(!e)return;c.value=!0;let t=i.current;if(!t)return;t.value=o.value;let n=()=>{o.value=t.value||``,s.value=!1};t.addEventListener(`change`,n),a.current=()=>t.removeEventListener(`change`,n)}).catch(()=>{e&&(l.value=`Cally 加载失败`)}),S(()=>{e=!1})}),S(()=>{a.current?.(),a.current=()=>{}}),v(()=>_(e=>{let t=mt().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0],a=t.childNodes[1],u=t.childNodes[0].childNodes[0].childNodes[0],d=u.parentNode,f=t.childNodes[0].childNodes[1].childNodes[1],p=f.parentNode,m=t.childNodes[1].childNodes[0],_=m.parentNode,v=t.childNodes[2],y=v.parentNode;r.setAttribute(`type`,`button`),r.setAttribute(`data-testid`,`cally-picker-button`),r.setAttribute(`class`,`input input-bordered w-fit cursor-pointer`),B(U(e,r,`click`,()=>()=>{s.value=!s.value})),a.setAttribute(`data-testid`,`cally-picker-panel`);let b;j(()=>{let e=`inline-block rounded-box bg-base-100 p-3 shadow-lg ${s.value?``:`hidden`}`,t=e===!1||e==null?``:String(e);Object.is(b,t)||(b=t,a.setAttribute(`class`,t))}),n({parent:d,before:u},()=>(e=>(t,n,r)=>J(Ct(e))(t,n,r))(o.value),()=>({})),n({parent:p,before:f},()=>(e=>(t,n,r)=>J(St(e))(t,n,r))(o.value),()=>({}));let x=q(Tt,()=>({})),S=q(Et,()=>({})),C=q(rt.Month,()=>({}));n({parent:_,before:m},()=>(e,t,n)=>g(e,n,()=>q(rt.Cally,()=>({ref:i,"data-testid":`cally-picker-calendar`,children:[x,S,C]}))),()=>({}));let w=(e,t,n)=>{let r=()=>h(wt,()=>({ready:c.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:l.value}));return e==null?r():g(e,n,r)},T=v.nextSibling;return y.removeChild(v),n({parent:y,before:T},()=>w,()=>({})),[t,t]}))},kt=(e,t,r)=>{let i=R(`PikadayCalendarPreview:hook:0`),a=R(`PikadayCalendarPreview:hook:1`),o=V(``),s=V(!1),c=V(``);return M(()=>{let e=!0;bt().then(t=>{if(!e)return;let n=i.current;n&&(a.current=new t({field:n,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>xt(e),onSelect:e=>{o.value=n.value||xt(e)}}),n.setAttribute(`data-pikaday-ready`,`true`),o.value=n.value||`2026-04-12`,s.value=!0)}).catch(()=>{e&&(c.value=`Pikaday 加载失败`)}),S(()=>{e=!1})}),S(()=>{a.current?.destroy?.(),a.current=null}),v(()=>_(e=>{let t=ht().content.cloneNode(!0).firstChild,r=t.childNodes[0],a=r.parentNode,l=t.childNodes[1],u=l.parentNode,d=t.childNodes[2].childNodes[1],f=d.parentNode;n({parent:a,before:r},()=>(e,t,n)=>g(e,n,()=>q(rt.PikaSingle,()=>({ref:i,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`}))),()=>({}));let p=(e,t,n)=>{let r=()=>h(wt,()=>({ready:s.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:c.value}));return e==null?r():g(e,n,r)},m=l.nextSibling;return u.removeChild(l),n({parent:u,before:m},()=>p,()=>({})),n({parent:f,before:d},()=>(e=>(t,n,r)=>J(St(e))(t,n,r))(o.value),()=>({})),[t,t]}))},At=G(`<div class="space-y-1"><div class="text-lg font-semibold leading-none"><!--rue:text-hole:0--></div><div class="text-[0.68rem] uppercase tracking-[0.22em] opacity-60">Backlog</div></div>`),jt=G(`<div class="space-y-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),Mt=G(`<div class="flex h-full flex-col justify-between gap-2"><div class="flex items-center justify-between gap-2"><span class="text-sm font-semibold"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1-->%</span></div><div class="space-y-1"><div class="h-1.5 overflow-hidden rounded-full bg-base-300/70"><div></div></div><div class="text-[0.62rem] uppercase tracking-[0.22em] opacity-60">Studio load</div></div></div>`),Nt=G(`<div class="border-b border-base-300/70 px-3 py-3"><div class="flex flex-wrap items-start justify-between gap-3"><div><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">Studio Header</div><div class="mt-1 text-base font-semibold"><!--rue:text-hole:0--></div></div><div class="join"><button type="button">月视图</button><button type="button">年视图</button></div></div><div class="mt-3 flex flex-wrap gap-2"><select class="select select-sm min-w-24"><!--rue:text-hole:1--></select><select class="select select-sm min-w-24"><!--rue:text-hole:2--></select></div></div>`),Pt=G(`<div class="not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),Ft=G(`<div class="not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"><table class="table table-zebra"><thead><tr><th>导出</th><th>说明</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),It=G(`<div class="component-preview not-prose my-6 text-base-content lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),Lt=G(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="grid gap-3 md:grid-cols-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div>`),Rt=G(`<div class="space-y-4"><div class="grid gap-4"><div class="max-w-full overflow-x-auto"><!--rue:opaque-hole:0--></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm"><div class="badge badge-secondary badge-soft">Card Mode</div><h3 class="mt-3 mb-1 text-base font-semibold">容量面板</h3><p class="m-0 text-sm text-base-content/70">使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。</p><div class="mt-4 space-y-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div></div></div>`),zt=G(`<div class="prose prose-sm max-w-none md:prose-base"><h1>Calendar 日历</h1><p class="mt-3 mb-3 text-sm">Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条基础接入链路。</p><div class="not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><section class="my-12 space-y-6"><div><h2 class="mb-2">API</h2><p class="m-0 text-sm text-base-content/70">默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时使用 Rue 自己的视觉和基础导出方式。</p></div><!--rue:opaque-hole:10--><div><h2 class="mb-2">附属导出</h2><p class="m-0 text-sm text-base-content/70">基础的 Cally 与 Pikaday 接口没有删除，而是并列保持为复合导出，便于按需接入。</p></div><!--rue:opaque-hole:11--></section></div>`),Bt=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`onRenderProfile`,description:`渲染诊断回调，报告当前更新阶段、耗时、cellRender 调用次数与慢单元格`,type:`(event: CalendarRenderProfileEvent) => void`,defaultValue:`-`},{prop:`renderProfileThreshold`,description:`渲染诊断的慢调用阈值，超过后会在 onRenderProfile 中标记 slow`,type:`number`,defaultValue:`16`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],Vt=[{name:`Calendar.Cally`,description:`展示基础 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],Ht={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},Ut={2:12,3:28,4:18,8:43},Wt={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},Gt={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},Kt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,qt=e=>e?typeof e==`string`?e:Kt(e):`未选择`,Jt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Yt=(e,t,r)=>{let i=W(O(e,`label`)),a=W(O(e,`value`));return p(_(e=>{let t=A(`div`,e);t.setAttribute(`class`,`flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2`);let r=A(`span`,t);T(t,r),r.setAttribute(`class`,`text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55`);let o=L(`rue:compiled-slot`);T(r,o),n({parent:r,before:o},()=>J(i.get()),()=>({}));let s=A(`span`,t);T(t,s),s.setAttribute(`class`,`text-sm font-medium`);let c=L(`rue:compiled-slot`);return T(s,c),n({parent:s,before:c},()=>J(a.get()),()=>({})),[t,t]}),e=>C(()=>{i.set(e.label),a.set(e.value)}),()=>b(e))},Xt=(e,t,n)=>{let r=W(O(e,`rows`));return p(_(e=>{let t=Pt().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],i=n.parentNode,a=G(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),o=[];return z(()=>{let e=r.get()||[];o=E(i,n,o,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return N(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=D(``);o.insertBefore(f,n),o.removeChild(n);let p=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);f.textContent=p;let m=r.description==null||typeof r.description==`boolean`?``:String(r.description);s.textContent=m;let h=D(``);l.insertBefore(h,c),l.removeChild(c);let g=r.type==null||typeof r.type==`boolean`?``:String(r.type);h.textContent=g;let _=D(``);d.insertBefore(_,u),d.removeChild(u);let v=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);return _.textContent=v,i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),B(()=>w(o)),[t,t]}),e=>C(()=>{r.set(e.rows)}),()=>b(e))},Zt=(e,t,n)=>{let r=W(O(e,`rows`));return p(_(e=>{let t=Ft().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[1].childNodes[0],i=n.parentNode,a=G(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td></tr>`),o=[];return z(()=>{let e=r.get()||[];o=E(i,n,o,e,(e,t)=>e.name,(e,t,n)=>{let r=e,i;return N(e=>{let t=a().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],o=n.parentNode,s=t.childNodes[1].childNodes[0];s.parentNode;let c=D(``);o.insertBefore(c,n),o.removeChild(n);let l=r.name==null||typeof r.name==`boolean`?``:String(r.name);c.textContent=l;let u=r.description==null||typeof r.description==`boolean`?``:String(r.description);return s.textContent=u,i=()=>{{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(l,e)||(c.textContent=e,l=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(u,e)||(s.textContent=e,u=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),B(()=>w(o)),[t,t]}),e=>C(()=>{r.set(e.rows)}),()=>b(e))},Qt=(e,t,r)=>{let{shouldLoadPreview:a,preloadTimer:o}=l(`useSetup:0:0`,()=>{let t=V(O(e,`previewLoadDelay`)==null),n=R(`plan:7813:hook:0`,null);return M(()=>{O(e,`previewLoadDelay`)==null||t.value||(n.current=window.setTimeout(()=>{t.value=!0,n.current=null},O(e,`previewLoadDelay`)))}),S(()=>{n.current!=null&&(window.clearTimeout(n.current),n.current=null)}),{shouldLoadPreview:t,preloadTimer:n}});return _(t=>{let r=It().content.cloneNode(!0).firstChild,o=r.childNodes[0].childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=r.childNodes[0].childNodes[0].childNodes[1],l=c.parentNode,u=r.childNodes[1],d=u.parentNode,f=r.childNodes[2],p=f.parentNode;n({parent:s,before:o},()=>J(O(e,`title`)),()=>({})),n({parent:l,before:c},()=>O(e,`summary`)?(t,r,a)=>g(t,a,()=>_(()=>{let t=P(),r=A(`p`,t);T(t,r),i(r,`m-0 text-sm opacity-70`);let a=L(`rue:slot:anchor`);T(r,a),n({parent:r,before:a},()=>J(O(e,`summary`)),()=>({}));let o=D(``),s=D(``);return t.insertBefore(o,t.firstChild),t.appendChild(s),[t.firstChild,t.lastChild]})):(e,t,n)=>{let r=()=>K(e=>{let t=D(``);return[t,t]});return e==null?r():g(e,n,r)},()=>({}));let m=(t,n,r)=>{let i=()=>h(ae,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O(e,`tab`).value,onChange:t=>O(e,`tab`).value=t,className:`mb-3 mt-4`}));return t==null?i():g(t,r,i)},v=u.nextSibling;return d.removeChild(u),n({parent:d,before:v},()=>m,()=>({})),n({parent:p,before:f},()=>O(e,`tab`).value===`preview`?a.value?((e,t)=>(n,r,i)=>J(se(e,t))(n,r,i))(O(e,`title`),O(e,`preview`)):(t,r,a)=>g(t,a,()=>_(()=>{let t=P(),r=A(`div`,t);T(t,r),i(r,`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`);let a=A(`div`,r);T(r,a),i(a,`badge badge-outline badge-sm`),T(a,D(`Preview`));let o=A(`p`,r);T(r,o),i(o,`mb-0 mt-3 text-sm text-base-content/72`);let s=L(`rue:slot:anchor`);T(o,s),n({parent:o,before:s},()=>J(O(e,`previewLoadNote`)||`预览正在后台初始化，页面主体会先显示出来。`),()=>({}));let c=D(``),l=D(``);return t.insertBefore(c,t.firstChild),t.appendChild(l),[t.firstChild,t.lastChild]})):(t,n,r)=>g(t,r,()=>h(ie,()=>({className:`mt-2`,lang:O(e,`lang`)===void 0?`tsx`:O(e,`lang`),code:O(e,`code`)}))),()=>({})),[r,r]})},$t=(e,t,r)=>{let i=W(O(e,`badge`)),a=W(O(e,`detail`)),o=W(O(e,`title`));return p(_(e=>{let t=A(`div`,e);t.setAttribute(`class`,`rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm`);let r=A(`div`,t);T(t,r),r.setAttribute(`class`,`badge badge-outline badge-sm`);let s=L(`rue:compiled-slot`);T(r,s),n({parent:r,before:s},()=>J(i.get()),()=>({}));let c=A(`h3`,t);T(t,c),c.setAttribute(`class`,`mt-3 mb-1 text-base font-semibold`);let l=L(`rue:compiled-slot`);T(c,l),n({parent:c,before:l},()=>J(o.get()),()=>({}));let u=A(`p`,t);T(t,u),u.setAttribute(`class`,`m-0 text-sm text-base-content/70`);let d=L(`rue:compiled-slot`);return T(u,d),n({parent:u,before:d},()=>J(a.get()),()=>({})),[t,t]}),e=>C(()=>{i.set(e.badge),a.set(e.detail),o.set(e.title)}),()=>b(e))},en=(e,t,r)=>{let a=V(`2026-04-15`),o=V(`month`);return v(()=>_(e=>{let t=Lt().content.cloneNode(!0).firstChild,r=t.childNodes[0],s=r.parentNode,c=t.childNodes[1].childNodes[0],l=c.parentNode,u=t.childNodes[1].childNodes[1],d=u.parentNode,f=t.childNodes[1].childNodes[2],p=f.parentNode,m=(e,t,r)=>{let s=()=>h(rt,()=>({"data-testid":`notice-calendar`,locale:`zh-CN`,value:a.value,mode:o.value,onChange:e=>{a.value=Kt(e)},onPanelChange:(e,t)=>{o.value=t},cellRender:(e,t)=>{if(t.type===`month`){let t=Ut[e.getMonth()];return t?_(()=>{let e=P(),r=At().content.cloneNode(!0),i=r.firstChild.childNodes[0].childNodes[0],a=i.parentNode;e.appendChild(r),n({parent:a,before:i},()=>J(t),()=>({}));let o=D(``),s=D(``);return e.insertBefore(o,e.firstChild),e.appendChild(s),[e.firstChild,e.lastChild]}):null}let r=Ht[Kt(e)]??[];return r.length?_(e=>{let t=jt().content.cloneNode(!0).firstChild,a=t.childNodes[0],o=a.parentNode,s=t.childNodes[1],c=s.parentNode,l=[];return z(()=>{let e=r.slice(0,2)||[];l=k(o,a,l,e,(e,t)=>e.label,(e,t)=>{let r=W(e);return I((e,t,i)=>{let a=()=>_(e=>{let t=A(`div`,e),i;j(()=>{let e=`badge badge-soft badge-xs ${Gt[r.get().tone]}`,n=e===!1||e==null?``:String(e);Object.is(i,n)||(i=n,t.setAttribute(`class`,n))});let a=L(`rue:compiled-slot`);return T(t,a),n({parent:t,before:a},()=>J(r.get().label),()=>({})),[t,t]});return e==null?a():g(e,i,a)},(n,i)=>{e=n,t=i,r.set(n)},void 0)},!1,!1)}),B(()=>w(l)),n({parent:c,before:s},()=>r.length>2?(e,t,n)=>g(e,n,()=>_(()=>{let e=P(),t=A(`div`,e);T(e,t),i(t,`text-[0.62rem] opacity-60`),T(t,D(`+`));let n=y(t);T(t,n),j(()=>{ee(n,r.length-2)}),T(t,D(` more`));let a=D(``),o=D(``);return e.insertBefore(a,e.firstChild),e.appendChild(o),[e.firstChild,e.lastChild]})):(e,t,n)=>{let r=()=>K(e=>{let t=D(``);return[t,t]});return e==null?r():g(e,n,r)},()=>({})),[t,t]}):null}}));return e==null?s():g(e,r,s)},v=r.nextSibling;s.removeChild(r),n({parent:s,before:v},()=>m,()=>({}));let b=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`当前日期`,value:qt(a.value)}));return e==null?r():g(e,n,r)},x=c.nextSibling;l.removeChild(c),n({parent:l,before:x},()=>b,()=>({}));let S=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`4 月 15 日事件`,value:`${Ht[`2026-04-15`]?.length??0} 条`}));return e==null?r():g(e,n,r)},C=u.nextSibling;d.removeChild(u),n({parent:d,before:C},()=>S,()=>({}));let E=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`9 月 backlog`,value:`${Ut[8]} 项`}));return e==null?r():g(e,n,r)},O=f.nextSibling;return p.removeChild(f),n({parent:p,before:O},()=>E,()=>({})),[t,t]}))},tn=(e,t,r)=>{let i=V(`2026-09-18`),a=V(`month`);return v(()=>_(e=>{let t=Rt().content.cloneNode(!0).firstChild,r=t.childNodes[0].childNodes[0].childNodes[0],o=r.parentNode,s=t.childNodes[0].childNodes[1].childNodes[3].childNodes[0],c=s.parentNode,l=t.childNodes[0].childNodes[1].childNodes[3].childNodes[1],u=l.parentNode,f=t.childNodes[0].childNodes[1].childNodes[3].childNodes[2],p=f.parentNode,m=(e,t,r)=>{let o=()=>h(rt,()=>({"data-testid":`card-calendar`,className:`w-[34rem] max-w-none`,locale:`zh-CN`,fullscreen:!1,value:i.value,mode:a.value,onChange:e=>{i.value=Kt(e)},onPanelChange:(e,t)=>{a.value=t},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let r=Wt[Kt(e)];return r==null?t.originNode:_(t=>{let i=Mt().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1],o=i.childNodes[1].childNodes[0].childNodes[0],s=i.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode,l=i.childNodes[0].childNodes[1].childNodes[0],u=l.parentNode,f;j(()=>{let e=`badge badge-xs ${r>=80?`badge-error`:r>=60?`badge-warning`:`badge-success`} badge-soft`,t=e===!1||e==null?``:String(e);Object.is(f,t)||(f=t,a.setAttribute(`class`,t))});let p;j(()=>{let e=`h-full rounded-full ${r>=80?`bg-error`:r>=60?`bg-warning`:`bg-success`}`,t=e===!1||e==null?``:String(e);Object.is(p,t)||(p=t,o.setAttribute(`class`,t))});let m;return j(()=>{let e={width:`${r}%`},t=d(e);Object.is(m,t)||(m=t,o.style.cssText=t)}),n({parent:c,before:s},()=>J(e.getDate()),()=>({})),n({parent:u,before:l},()=>J(r),()=>({})),[i,i]})}}));return e==null?o():g(e,r,o)},v=r.nextSibling;o.removeChild(r),n({parent:o,before:v},()=>m,()=>({}));let y=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`当前日期`,value:qt(i.value)}));return e==null?r():g(e,n,r)},b=s.nextSibling;c.removeChild(s),n({parent:c,before:b},()=>y,()=>({}));let x=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`高负载日`,value:`9/18 · 92%`}));return e==null?r():g(e,n,r)},S=l.nextSibling;u.removeChild(l),n({parent:u,before:S},()=>x,()=>({}));let C=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`布局定位`,value:`侧栏、仪表盘、详情卡片`}));return e==null?r():g(e,n,r)},w=f.nextSibling;return p.removeChild(f),n({parent:p,before:w},()=>C,()=>({})),[t,t]}))},nn=(e,t,r)=>{let i=V(`2026-07-04`),a=V(`month`),o=V(`date`);return v(()=>_(e=>{let t=Lt().content.cloneNode(!0).firstChild,r=t.childNodes[0],s=r.parentNode,c=t.childNodes[1].childNodes[0],l=c.parentNode,d=t.childNodes[1].childNodes[1],f=d.parentNode,p=t.childNodes[1].childNodes[2],m=p.parentNode,v=(e,t,r)=>{let s=()=>h(rt,()=>({"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:i.value,mode:a.value,headerRender:({value:e,type:t,yearOptions:r,monthOptions:i,onMonthChange:a,onTypeChange:o,onYearChange:s})=>_(c=>{let l=Nt().content.cloneNode(!0).firstChild,d=l.childNodes[0].childNodes[1].childNodes[0],f=l.childNodes[0].childNodes[1].childNodes[1],p=l.childNodes[1].childNodes[0],m=l.childNodes[1].childNodes[1],h=l.childNodes[0].childNodes[0].childNodes[1].childNodes[0],v=h.parentNode,y=l.childNodes[1].childNodes[0].childNodes[0],b=y.parentNode,x=l.childNodes[1].childNodes[1].childNodes[0],S=x.parentNode;d.setAttribute(`type`,`button`);let C;j(()=>{let e=`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`,n=e===!1||e==null?``:String(e);Object.is(C,n)||(C=n,d.setAttribute(`class`,n))}),B(U(c,d,`click`,()=>()=>o(`month`))),f.setAttribute(`type`,`button`);let O;j(()=>{let e=`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`,n=e===!1||e==null?``:String(e);Object.is(O,n)||(O=n,f.setAttribute(`class`,n))}),B(U(c,f,`click`,()=>()=>o(`year`))),p.setAttribute(`class`,`select select-sm min-w-24`);let M;j(()=>{let t=e.getFullYear();Object.is(M,t)||(M=t,ne(p,t))});let P=e=>{let t=e=>s(Number(e.currentTarget.value));typeof t==`function`&&t(e)};p.addEventListener(`change`,P),B(()=>p.removeEventListener(`change`,P)),m.setAttribute(`class`,`select select-sm min-w-24`);let F;j(()=>{let t=e.getMonth();Object.is(F,t)||(F=t,ne(m,t))});let L;j(()=>{let e=t===`year`;Object.is(L,e)||(L=e,m.disabled=e)});let R=e=>{let t=e=>a(Number(e.currentTarget.value));typeof t==`function`&&t(e)};m.addEventListener(`change`,R),B(()=>m.removeEventListener(`change`,R)),n({parent:v,before:h},()=>((e,t)=>(n,r,i)=>J(Jt(e,t))(n,r,i))(e,t),()=>({}));let V=[];z(()=>{V=k(b,y,V,r||[],(e,t)=>e,(e,t)=>{let n=W(e);return I((e,t,r)=>{let i=()=>_(e=>{let t=A(`option`,e),r;j(()=>{let e=n.get(),i=e==null?``:String(e);Object.is(r,i)||(r=i,t.value=i)});let i=D(``);return T(t,i),u(i,()=>n.get()),[t,t]});return e==null?i():g(e,r,i)},(r,i)=>{e=r,t=i,n.set(r)},void 0)},!1,!1)}),B(()=>w(V));let H=G(`<option><!--rue:text-hole:0--></option>`),ee=[];return z(()=>{ee=E(S,x,ee,i||[],(e,t)=>e.value,(e,t,n)=>{let r=e,i;return N(e=>{let t=H().content.cloneNode(!0).firstChild,n=t,a=t.childNodes[0],o=a.parentNode,s;{let e=r.value,t=e==null?``:String(e);Object.is(s,t)||(s=t,n.value=t)}let c;{let e=!!r.disabled;Object.is(c,e)||(c=e,n.disabled=e)}let l=D(``);o.insertBefore(l,a),o.removeChild(a);let u=r.label==null||typeof r.label==`boolean`?``:String(r.label);return l.textContent=u,i=()=>{{let e=r.value,t=e==null?``:String(e);Object.is(s,t)||(s=t,n.value=t)}{let e=!!r.disabled;Object.is(c,e)||(c=e,n.disabled=e)}{let e=r.label==null||typeof r.label==`boolean`?``:String(r.label);Object.is(u,e)||(l.textContent=e,u=e)}},[t,t]},(n,a)=>{e=n,t=a,r=n,i()},void 0,n)},!1,!0)}),B(()=>w(ee)),[l,l]}),onChange:e=>{i.value=Kt(e)},onPanelChange:(e,t)=>{a.value=t},onSelect:(e,t)=>{o.value=t.source}}));return e==null?s():g(e,r,s)},y=r.nextSibling;s.removeChild(r),n({parent:s,before:y},()=>v,()=>({}));let b=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`当前日期`,value:qt(i.value)}));return e==null?r():g(e,n,r)},x=c.nextSibling;l.removeChild(c),n({parent:l,before:x},()=>b,()=>({}));let S=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`当前模式`,value:a.value}));return e==null?r():g(e,n,r)},C=d.nextSibling;f.removeChild(d),n({parent:f,before:C},()=>S,()=>({}));let O=(e,t,n)=>{let r=()=>h(Yt,()=>({label:`最近来源`,value:o.value}));return e==null?r():g(e,n,r)},M=p.nextSibling;return m.removeChild(p),n({parent:m,before:M},()=>O,()=>({})),[t,t]}))},rn=`import { ref } from '@rue-js/rue'
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
}`,un=(e,t,r)=>{let i=V(`preview`),a=V(`preview`),o=V(`preview`),s=V(`preview`),c=V(`preview`),l=V(`preview`),u=V(`preview`);return v(()=>h(oe,()=>({children:(e,t,r)=>{let d=()=>_(e=>{let t=P(),r=zt().content.cloneNode(!0),d=r.firstChild,f=d.childNodes[2].childNodes[0],p=f.parentNode,m=d.childNodes[2].childNodes[1],_=m.parentNode,v=d.childNodes[2].childNodes[2],y=v.parentNode,b=d.childNodes[3],x=b.parentNode,S=d.childNodes[4],C=S.parentNode,w=d.childNodes[5],T=w.parentNode,E=d.childNodes[6],O=E.parentNode,k=d.childNodes[7],A=k.parentNode,j=d.childNodes[8],M=j.parentNode,N=d.childNodes[9],F=N.parentNode,I=d.childNodes[10].childNodes[1],L=I.parentNode,R=d.childNodes[10].childNodes[3],z=R.parentNode;t.appendChild(r);let B=(e,t,n)=>{let r=()=>h($t,()=>({badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`}));return e==null?r():g(e,n,r)},V=f.nextSibling;p.removeChild(f),n({parent:p,before:V},()=>B,()=>({}));let H=(e,t,n)=>{let r=()=>h($t,()=>({badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格组织为事项列表、容量卡或数据看板。`}));return e==null?r():g(e,n,r)},U=m.nextSibling;_.removeChild(m),n({parent:_,before:U},()=>H,()=>({}));let ee=(e,t,n)=>{let r=()=>h($t,()=>({badge:`Composition Ready`,title:`基础场景完整覆盖`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，基础接入方式不需要拆。`}));return e==null?r():g(e,n,r)},W=v.nextSibling;y.removeChild(v),n({parent:y,before:W},()=>ee,()=>({}));let te=(e,t,n)=>{let r=()=>h(Qt,()=>({title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:i,preview:ft,code:rn}));return e==null?r():g(e,n,r)},ne=b.nextSibling;x.removeChild(b),n({parent:x,before:ne},()=>te,()=>({}));let G=(e,t,n)=>{let r=()=>h(Qt,()=>({title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:a,preview:en,code:an,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`}));return e==null?r():g(e,n,r)},K=S.nextSibling;C.removeChild(S),n({parent:C,before:K},()=>G,()=>({}));let q=(e,t,n)=>{let r=()=>h(Qt,()=>({title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:o,preview:tn,code:on,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`}));return e==null?r():g(e,n,r)},J=w.nextSibling;T.removeChild(w),n({parent:T,before:J},()=>q,()=>({}));let re=(e,t,n)=>{let r=()=>h(Qt,()=>({title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:s,preview:nn,code:sn,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`}));return e==null?r():g(e,n,r)},ie=E.nextSibling;O.removeChild(E),n({parent:O,before:ie},()=>re,()=>({}));let ae=(e,t,n)=>{let r=()=>h(Qt,()=>({title:`Cally calendar example`,summary:`基础的 Cally web component 日历壳层仍然原样可用。`,tab:c,preview:Dt,code:cn,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`}));return e==null?r():g(e,n,r)},oe=k.nextSibling;A.removeChild(k),n({parent:A,before:oe},()=>ae,()=>({}));let se=(e,t,n)=>{let r=()=>h(Qt,()=>({title:`Cally date picker example`,summary:`基础的日期输入弹层示例 展示，只把交互说明和布局重新编排。`,tab:l,preview:Ot,code:ln,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`}));return e==null?r():g(e,n,r)},ce=j.nextSibling;M.removeChild(j),n({parent:M,before:ce},()=>se,()=>({}));let le=(e,t,n)=>{let r=()=>h(Qt,()=>({title:`Pikaday input example`,summary:`展示基础 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:u,preview:kt,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`}));return e==null?r():g(e,n,r)},Y=N.nextSibling;F.removeChild(N),n({parent:F,before:Y},()=>le,()=>({}));let ue=(e,t,n)=>{let r=()=>h(Xt,()=>({rows:Bt}));return e==null?r():g(e,n,r)},de=I.nextSibling;L.removeChild(I),n({parent:L,before:de},()=>ue,()=>({}));let fe=(e,t,n)=>{let r=()=>h(Zt,()=>({rows:Vt}));return e==null?r():g(e,n,r)},pe=R.nextSibling;z.removeChild(R),n({parent:z,before:pe},()=>fe,()=>({}));let me=D(``),he=D(``);return t.insertBefore(me,t.firstChild),t.appendChild(he),[t.firstChild,t.lastChild]});return e==null?d():g(e,r,d)}})))};export{un as default};
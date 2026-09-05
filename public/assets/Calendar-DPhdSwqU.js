const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BlN5cxGq.js","assets/rolldown-runtime-Dd_uD5pT.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{B as t,Bt as n,C as r,Dn as i,Dt as a,Et as o,H as s,It as c,K as l,Kt as u,L as d,Lt as f,Mt as p,Rt as m,S as h,Sn as g,Tn as _,Ut as v,V as y,W as b,Wt as x,X as S,Y as C,_n as w,_t as T,at as E,b as D,bn as O,ct as ee,dt as te,fn as k,ft as ne,gn as A,hn as j,ht as M,it as re,kn as N,mn as P,mt as ie,nt as F,ot as I,pn as L,pt as ae,q as R,qt as z,rt as B,tt as V,ut as H,vn as oe,wn as U,x as W,yn as se,yt as ce,z as G}from"./rue-runtime-CwEGJ854.js";import{t as le}from"./preload-helper-Czpn1I53.js";import{t as K}from"./Code-B3jCYMAr.js";import{t as q}from"./tabs-DUviBzjL.js";import{r as ue}from"./SidebarPlaygroundDesign-CwCJwf8H.js";import{t as de}from"./preview-test-gate-DjzWv8cx.js";var fe=w(`<button type="button" role="gridcell"><!--rue:text-hole:0--></button>`),pe=w(`<div data-rue-calendar-root="true"><!--rue:text-hole:0--><div><div class="flex items-center justify-between gap-3 px-1"><div class="badge badge-outline badge-sm"><!--rue:text-hole:1--></div><!--rue:text-hole:2--></div><!--rue:text-hole:3--></div></div>`),me=w(`<div class="flex h-full flex-col gap-2"><div class="flex items-start justify-between gap-2"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div></div>`),he=w(`<div class="flex h-full flex-col gap-2"><div class="flex items-start justify-between gap-2"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div><div><!--rue:text-hole:2--></div></div>`),ge=w(`<div class="flex h-full flex-col gap-2"><div class="flex items-center justify-between gap-2"><span class="text-sm font-semibold"><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div></div>`),_e=w(`<div class="flex h-full flex-col gap-2"><div class="flex items-center justify-between gap-2"><span class="text-sm font-semibold"><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div><div><!--rue:text-hole:2--></div></div>`),ve=w(`<input>`),ye=(e,t)=>t?`${e} ${t}`:e,be=()=>({date:new Map,month:new Map,year:new Map}),xe=new Map,Se=new Map,Ce=new Map,we=new Map,Te=new Map,Ee=()=>typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now(),De=(e,t)=>({enabled:e,start:e?Ee():0,threshold:t,cellCount:0,customRenderCount:0,cellRenderCount:0,fullCellRenderCount:0,dateCellRenderCount:0,dateFullCellRenderCount:0,monthCellRenderCount:0,monthFullCellRenderCount:0,slowCells:[]}),Oe=(e,t)=>{e.enabled&&(e.customRenderCount+=1,t===`cellRender`?e.cellRenderCount+=1:t===`fullCellRender`?e.fullCellRenderCount+=1:t===`dateCellRender`?e.dateCellRenderCount+=1:t===`dateFullCellRender`?e.dateFullCellRenderCount+=1:t===`monthCellRender`?e.monthCellRenderCount+=1:e.monthFullCellRenderCount+=1)},ke=(e,t,n,r)=>{if(!e.enabled)return r();Oe(e,t);let i=Ee(),a=r(),o=Ee()-i;return o>=e.threshold&&e.slowCells.push({type:n.type,key:n.key,renderName:t,duration:o,row:n.row,column:n.column}),a},Ae=(e,t,n,r)=>{if(!e||!t.enabled)return;let i=Ee()-t.start,a={component:`Calendar`,mode:n,phase:r,duration:i,cellCount:t.cellCount,customRenderCount:t.customRenderCount,cellRenderCount:t.cellRenderCount,fullCellRenderCount:t.fullCellRenderCount,dateCellRenderCount:t.dateCellRenderCount,dateFullCellRenderCount:t.dateFullCellRenderCount,monthCellRenderCount:t.monthCellRenderCount,monthFullCellRenderCount:t.monthFullCellRenderCount,slow:i>=t.threshold||t.slowCells.length>0,threshold:t.threshold,slowCells:t.slowCells.slice()},o=()=>e(a);typeof queueMicrotask==`function`?queueMicrotask(o):Promise.resolve().then(o)},je=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return a+=t?` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?` border-base-300/70 bg-base-200/50 text-base-content/35`:r?` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},Me=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return i+=t?` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?` border-base-300/70 bg-base-200/50 text-base-content/35`:` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},Ne=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},J=e=>`${e??``}`.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),Y=(e,t)=>t?` ${e}`:``,Pe=(e,t)=>t==null||t===!1||typeof t==`function`||typeof t==`object`?``:t===!0?` ${e}`:` ${e}="${J(t)}"`,Fe=e=>Object.entries(e).map(([e,t])=>e===`children`||e===`class`||e===`className`?``:Pe(e,t)).join(``),Ie=e=>`<div data-rue-calendar-managed-cell="${J(e)}" style="display: contents;"></div>`,Le=()=>`<div data-rue-calendar-managed-header="true" style="display: contents;"></div>`,Re=e=>{e&&C(null,e.host,e.anchor)},ze=(e,t,n)=>{let r=e.querySelector(`[data-rue-calendar-managed-header="true"]`);if(!n.hasCustomHeader||!r)return Re(t),null;let i=t;if(!i||i.host!==r){Re(i);let e=(r.ownerDocument??document).createComment(`rue-calendar-managed-header`);r.appendChild(e),i={host:r,anchor:e}}return C(n.customHeaderContent==null?null:M(()=>{let e=F(),t=V(`rue:slot:anchor`);return S(e,t),U(()=>{let r=n.customHeaderContent;N(()=>C(r,e,t))}),e},!0),r,i.anchor),i},Be=(e,t,n,r)=>{let i=r?new Set(r):null,a=i??new Set(n.managedCellContent.keys());for(let r of a){let i=n.managedCellContent.get(r),a=Array.from(e.querySelectorAll(`[data-rue-calendar-managed-cell]`)).find(e=>e.getAttribute(`data-rue-calendar-managed-cell`)===r);if(!i||!a){let e=t.get(r);e&&(C(null,e.host,e.anchor),t.delete(r));continue}let o=t.get(r);if(!o||o.host!==a){o&&C(null,o.host,o.anchor);let e=(a.ownerDocument??document).createComment(`rue-calendar-managed-anchor`);a.appendChild(e),o={host:a,anchor:e},t.set(r,o)}C(i.content==null?null:M(()=>{let e=F(),t=V(`rue:slot:anchor`);return S(e,t),U(()=>{let n=i.content;N(()=>C(n,e,t))}),e},!0),a,o.anchor)}if(!i)for(let[e,r]of Array.from(t.entries()))n.managedCellContent.has(e)||(C(null,r.host,r.anchor),t.delete(e))},Ve=e=>{for(let t of e.values())C(null,t.host,t.anchor);e.clear()},He=e=>{let t=e.fullscreen,n=Fe(e.rest),r=`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,i=t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,a=e.hasCustomHeader?Le():`<div class="${J(r)}">
      <div>
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55">Rue Calendar</div>
        <div class="mt-1 text-xl font-semibold leading-tight">${J(e.headerTitle)}</div>
        <div class="mt-1 text-xs text-base-content/60">${J(e.todayLabel)}</div>
      </div>
      <div class="flex flex-wrap items-center gap-2 lg:justify-end">
        <div class="join">
          <button type="button" class="btn btn-sm join-item" aria-label="Previous" data-rue-calendar-action="previous"${Y(`disabled`,e.previousDisabled)}><span aria-hidden="true">&lt;</span></button>
          <button type="button" class="btn btn-sm join-item btn-ghost" data-rue-calendar-action="today"${Y(`disabled`,e.todayDisabled)}>${J(e.todayButtonLabel)}</button>
          <button type="button" class="btn btn-sm join-item" aria-label="Next" data-rue-calendar-action="next"${Y(`disabled`,e.nextDisabled)}><span aria-hidden="true">&gt;</span></button>
        </div>
        <select class="select select-sm min-w-24" data-rue-calendar-select="year">
          ${e.yearOptions.map(t=>`<option value="${t.value}"${Y(`selected`,t.value===e.currentValue.getFullYear())}${Y(`disabled`,t.disabled)}>${t.value}</option>`).join(``)}
        </select>
        <select class="select select-sm min-w-24" data-rue-calendar-select="month"${Y(`disabled`,e.currentMode===`year`)}>
          ${e.monthOptions.map(t=>`<option value="${t.value}"${Y(`selected`,t.value===e.currentValue.getMonth())}${Y(`disabled`,t.disabled)}>${J(t.label)}</option>`).join(``)}
        </select>
        <div class="join">
          <button type="button" data-rue-calendar-mode-switch="month" data-rue-calendar-action="mode-month" class="btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}">${J(e.monthButtonLabel)}</button>
          <button type="button" data-rue-calendar-mode-switch="year" data-rue-calendar-action="mode-year" class="btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}">${J(e.yearButtonLabel)}</button>
        </div>
      </div>
    </div>`,o=e.showWeek?`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${J(e.weekButtonLabel)}</div>`:``,s=e.weekdayLabels.map(e=>`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${J(e)}</div>`).join(``),c=e.currentMode===`month`?`<div class="space-y-2">
          <div class="${J(e.rowClassName)}">${o}${s}</div>
          <div role="grid" class="space-y-2">
            ${e.dateRows.map(n=>`<div role="row" class="${J(e.rowClassName)}">
                    ${e.showWeek?`<div class="flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60" data-rue-calendar-week="${n.week}">${n.week}</div>`:``}
                    ${n.cells.map(n=>{let r=e.dateCellStates.get(n.key),i=r.isToday?` aria-current="date"`:``;return`<button
                          type="button"
                          role="gridcell"
                          data-rue-calendar-cell="${J(n.key)}"
                          data-rue-calendar-in-view="${r.inView?`true`:`false`}"
                          aria-pressed="${r.selected?`true`:`false`}"${i}
                          ${Y(`disabled`,r.disabled)}
                          class="${J(je(t,r.selected,r.disabled,r.inView,r.isToday))}"
                        >${e.hasDateCustomRender?Ie(n.key):Ne(r,e.todayMarkerLabel)}</button>`}).join(``)}
                  </div>`).join(``)}
          </div>
        </div>`:`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          ${e.monthOptions.map(n=>{let r=Z(e.currentValue.getFullYear(),n.value,1),i=tt(r,e.currentValue),a=tt(r,Ge(new Date)),o=n.disabled===!0,s=`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`;return`<button
                type="button"
                data-rue-calendar-month="${s}"
                aria-pressed="${i?`true`:`false`}"
                ${Y(`disabled`,o)}
                class="${J(Me(t,i,o,a))}"
              >
                ${e.hasMonthCustomRender?Ie(s):`<span class="flex items-center justify-between gap-2">
                        <span class="text-sm font-semibold">${J(n.label)}</span>
                        ${a?`<span class="badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${J(e.todayMarkerLabel)}</span>`:``}
                      </span>`}
              </button>`}).join(``)}
        </div>`;return`<div${n} data-rue-calendar-root="true" data-rue-calendar-mode="${e.currentMode}" class="${J(e.rootClassName)}">
    ${a}
    <div class="${J(i)}">
      <div class="flex items-center justify-between gap-3 px-1">
        <div class="badge badge-outline badge-sm">${J(e.viewLabel)}</div>
        ${e.showWeek&&e.currentMode===`month`?`<div class="badge badge-soft badge-sm">${J(e.weekButtonLabel)}</div>`:``}
      </div>
      ${c}
    </div>
  </div>`},Ue=e=>{let{fullscreen:n,__rue_phase2_fullscreen:a}=se(`useSetup:0:0`,()=>{let t=g(()=>e.fullscreen);return t.get(),{fullscreen:t,__rue_phase2_fullscreen:t}});return o(Object.assign(a=>{let s=pe().content.cloneNode(!0).firstChild,c=s,l=s.childNodes[1],u=s.childNodes[0],p=u.parentNode,m=s.childNodes[1].childNodes[0].childNodes[0].childNodes[0],g=m.parentNode,_=s.childNodes[1].childNodes[0].childNodes[1],v=_.parentNode,x=s.childNodes[1].childNodes[1],w=x.parentNode;ce(c,()=>e.rest,[`data-rue-calendar-root`,`data-rue-calendar-mode`,`className`,`__rue_static_template_id__`]),c.setAttribute(`data-rue-calendar-root`,`true`);let T;U(()=>{let t=e.currentMode;Object.is(T,t)||(T=t,t==null||t===!1?c.removeAttribute(`data-rue-calendar-mode`):c.setAttribute(`data-rue-calendar-mode`,String(t)))});let E;U(()=>{let t=e.rootClassName,n=t==null?``:String(t);Object.is(E,n)||(E=n,c.className=n)});let D;U(()=>{let e=n.get()?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,t=e==null?``:String(e);Object.is(D,t)||(D=t,l.className=t)}),y(p,u,()=>e.hasCustomHeader?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(t=>{let n=A(typeof e.customHeaderContent==`string`||typeof e.customHeaderContent==`number`||typeof e.customHeaderContent==`bigint`?e.customHeaderContent:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(t=>{let a=j(`div`,t),s;U(()=>{let e=`border-b border-base-300/70 ${n.get()?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,t=e==null?``:String(e);Object.is(s,t)||(s=t,a.className=t)});let c=j(`div`,a);k(a,c);let l=j(`div`,c);k(c,l),l.className=`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,k(l,A(`Rue Calendar`));let u=j(`div`,c);k(c,u),u.className=`mt-1 text-xl font-semibold leading-tight`;let d=A(``);k(u,d),O(d,()=>e.headerTitle);let f=j(`div`,c);k(c,f),f.className=`mt-1 text-xs text-base-content/60`;let p=A(``);k(f,p),O(p,()=>e.todayLabel);let m=j(`div`,a);k(a,m),m.className=`flex flex-wrap items-center gap-2 lg:justify-end`;let g=j(`div`,m);k(m,g),g.className=`join`;let _=j(`button`,g);k(g,_),_.setAttribute(`type`,`button`),_.className=`btn btn-sm join-item`,_.setAttribute(`aria-label`,`Previous`);let v;U(()=>{let t=!!e.previousDisabled;Object.is(v,t)||(v=t,_.disabled=t)});let y=t=>{let n=e.onPrevious;typeof n==`function`&&n(t)};_.addEventListener(`click`,y),i(()=>_.removeEventListener(`click`,y));let x=j(`span`,_);k(_,x),x.setAttribute(`aria-hidden`,`true`),k(x,A(`<`));let S=j(`button`,g);k(g,S),S.setAttribute(`type`,`button`),S.className=`btn btn-sm join-item btn-ghost`;let C;U(()=>{let t=!!e.todayDisabled;Object.is(C,t)||(C=t,S.disabled=t)});let w=t=>{let n=e.onToday;typeof n==`function`&&n(t)};S.addEventListener(`click`,w),i(()=>S.removeEventListener(`click`,w));let T=A(``);k(S,T),O(T,()=>e.todayButtonLabel);let E=j(`button`,g);k(g,E),E.setAttribute(`type`,`button`),E.className=`btn btn-sm join-item`,E.setAttribute(`aria-label`,`Next`);let D;U(()=>{let t=!!e.nextDisabled;Object.is(D,t)||(D=t,E.disabled=t)});let ee=t=>{let n=e.onNext;typeof n==`function`&&n(t)};E.addEventListener(`click`,ee),i(()=>E.removeEventListener(`click`,ee));let te=j(`span`,E);k(E,te),te.setAttribute(`aria-hidden`,`true`),k(te,A(`>`));let M=j(`select`,m);k(m,M),M.className=`select select-sm min-w-24`;let re;U(()=>{let t=e.currentValue.getFullYear(),n=t==null?``:String(t);Object.is(re,n)||(re=n,ne(M,n))});let N=t=>{let n=t=>e.onYearChange(Number(t.currentTarget.value));typeof n==`function`&&n(t)};M.addEventListener(`change`,N),i(()=>M.removeEventListener(`change`,N));let P=L(`rue:list:end`);k(M,P);let ie=[];U(()=>{let t=e.yearOptions||[];ie=r(M,P,ie,t,(e,t)=>e.value,(e,t)=>{let n=b(e),r=b(t);return h((e,t,r)=>W(e,r,()=>o(Object.assign(e=>{let t=j(`option`,e),r;U(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,ne(t,i))});let i;U(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)});let a=A(``);return k(t,a),O(a,()=>n.get().value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let F=j(`select`,m);k(m,F),F.className=`select select-sm min-w-24`;let I;U(()=>{let t=e.currentValue.getMonth(),n=t==null?``:String(t);Object.is(I,n)||(I=n,ne(F,n))});let ae;U(()=>{let t=e.currentMode===`year`;Object.is(ae,t)||(ae=t,F.disabled=t)});let R=t=>{let n=t=>e.onMonthChange(Number(t.currentTarget.value));typeof n==`function`&&n(t)};F.addEventListener(`change`,R),i(()=>F.removeEventListener(`change`,R));let z=L(`rue:list:end`);k(F,z);let B=[];U(()=>{let t=e.monthOptions||[];B=r(F,z,B,t,(e,t)=>e.value,(e,t)=>{let n=b(e),r=b(t);return h((e,t,r)=>W(e,r,()=>o(Object.assign(e=>{let t=j(`option`,e),r;U(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,ne(t,i))});let i;U(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)});let a=A(``);return k(t,a),O(a,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let V=j(`div`,m);k(m,V),V.className=`join`;let H=j(`button`,V);k(V,H),H.setAttribute(`type`,`button`),H.setAttribute(`data-rue-calendar-mode-switch`,`month`);let oe;U(()=>{let t=`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,n=t==null?``:String(t);Object.is(oe,n)||(oe=n,H.className=n)});let se=t=>{let n=e.onModeMonth;typeof n==`function`&&n(t)};H.addEventListener(`click`,se),i(()=>H.removeEventListener(`click`,se));let ce=A(``);k(H,ce),O(ce,()=>e.monthButtonLabel);let G=j(`button`,V);k(V,G),G.setAttribute(`type`,`button`),G.setAttribute(`data-rue-calendar-mode-switch`,`year`);let le;U(()=>{let t=`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,n=t==null?``:String(t);Object.is(le,n)||(le=n,G.className=n)});let K=t=>{let n=e.onModeYear;typeof n==`function`&&n(t)};G.addEventListener(`click`,K),i(()=>G.removeEventListener(`click`,K));let q=A(``);return k(G,q),O(q,()=>e.yearButtonLabel),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))});let te=A(``);return g.insertBefore(te,m),g.removeChild(m),O(te,()=>e.viewLabel),y(v,_,()=>e.showWeek&&e.currentMode===`month`?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(t=>{let n=j(`div`,t);n.className=`badge badge-soft badge-sm`;let r=A(``);return k(n,r),O(r,()=>e.weekButtonLabel),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),y(w,x,()=>e.currentMode===`month`?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(i=>{let a=j(`div`,i);a.className=`space-y-2`;let s=j(`div`,a);k(a,s);let c;U(()=>{let t=e.rowClassName,n=t==null?``:String(t);Object.is(c,n)||(c=n,s.className=n)}),t(()=>e.showWeek?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(t=>{let n=j(`div`,t);n.className=`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`;let r=A(``);return k(n,r),O(r,()=>e.weekButtonLabel),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(s);let l=L(`rue:list:end`);k(s,l);let u=[];U(()=>{let t=e.weekdayLabels||[];u=r(s,l,u,t,(e,t)=>e,(e,t)=>{let n=b(e),r=b(t);return h((e,t,r)=>W(e,r,()=>o(Object.assign(e=>{let t=j(`div`,e);t.className=`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`;let r=A(``);return k(t,r),O(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let p=j(`div`,a);k(a,p),p.setAttribute(`role`,`grid`),p.className=`space-y-2`;let m=L(`rue:list:end`);k(p,m);let g=[];return U(()=>{let i=e.dateRows||[];g=r(p,m,g,i,(e,t)=>e.key,(r,i)=>{let a=b(r),s=b(i);return h((r,i,s)=>W(r,s,()=>o(Object.assign(r=>{let i=j(`div`,r);i.setAttribute(`role`,`row`);let s;U(()=>{let t=e.rowClassName,n=t==null?``:String(t);Object.is(s,n)||(s=n,i.className=n)}),t(()=>e.showWeek?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=j(`div`,e);t.className=`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`;let n;U(()=>{let e=a.get().week;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`data-rue-calendar-week`):t.setAttribute(`data-rue-calendar-week`,String(e)))});let r=A(``);return k(t,r),O(r,()=>a.get().week),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(i);let c=L(`rue:compiled-slot`);return k(i,c),U(()=>{let t=a.get().cells.map(t=>{let r=e.dateCellStates.get(t.key);return M(i=>{let a=fe().content.cloneNode(!0).firstChild,o=a,s=a.childNodes[0],c=s.parentNode;I(o,`type`,`button`),I(o,`role`,`gridcell`),U(()=>{I(o,`data-rue-calendar-cell`,String(t.key))}),U(()=>{I(o,`data-rue-calendar-in-view`,String(r.inView?`true`:`false`))}),U(()=>{I(o,`aria-pressed`,String(r.selected?`true`:`false`))}),U(()=>{I(o,`aria-current`,String(r.isToday?`date`:void 0))}),U(()=>{ee(o,r.disabled)}),U(()=>{d(o,je(n.get(),r.selected,r.disabled,r.inView,r.isToday))});let l=n=>{let r=()=>e.onDateSelect(t.date);typeof r==`function`&&r(n)};return o.addEventListener(`click`,l),f(()=>o.removeEventListener(`click`,l)),U(()=>{let n=e.hasDateCustomRender?e.managedCellContent.get(t.key)?.content??null:M(()=>{let t=F(),n=B(`span`,t);S(t,n),d(n,`flex items-start justify-between gap-2`);let i=B(`span`,n);S(n,i),U(()=>{d(i,`text-sm font-semibold ${r.inView?``:`opacity-60`}`)});let a=V(`rue:slot:anchor`);S(i,a),U(()=>{let e=r.dayNumber;N(()=>C(e,i,a))});let o=V(`rue:slot:anchor`);return S(n,o),U(()=>{let t=r.isToday?M(()=>{let t=F(),n=B(`span`,t);S(t,n),U(()=>{d(n,`badge badge-xs ${r.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`)});let i=V(`rue:slot:anchor`);return S(n,i),U(()=>{let t=e.todayMarkerLabel;N(()=>C(t,n,i))}),t},!0):``;N(()=>C(t,n,o))}),t},!0);N(()=>C(n,c,s))}),a})});N(()=>C(t,i,c))}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{r=e,i=t,a.set(e),s.set(t)})})}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(a=>{let s=j(`div`,a);s.className=`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`;let c=L(`rue:list:end`);k(s,c);let l=[];return U(()=>{let a=e.monthOptions||[];l=r(c.parentNode,c,l,a,(t,n)=>`${e.currentValue.getFullYear()}-${t.value}`,(r,a)=>{let s=Z(e.currentValue.getFullYear(),r.value,1),c=tt(s,e.currentValue),l=tt(s,Ge(new Date)),u=r.disabled===!0,d=b(r),f=b(a);return h((r,a,f)=>W(r,f,()=>o(Object.assign(r=>{let a=j(`button`,r);a.setAttribute(`type`,`button`);let f;U(()=>{let t=`${e.currentValue.getFullYear()}-${`${d.get().value+1}`.padStart(2,`0`)}`;Object.is(f,t)||(f=t,t==null||t===!1?a.removeAttribute(`data-rue-calendar-month`):a.setAttribute(`data-rue-calendar-month`,String(t)))});let p;U(()=>{let e=c?`true`:`false`;Object.is(p,e)||(p=e,e==null||e===!1?a.removeAttribute(`aria-pressed`):a.setAttribute(`aria-pressed`,String(e)))});let m;U(()=>{let e=!!u;Object.is(m,e)||(m=e,a.disabled=e)});let h;U(()=>{let e=Me(n.get(),c,u,l),t=e==null?``:String(e);Object.is(h,t)||(h=t,a.className=t)});let g=t=>{let n=()=>e.onMonthSelect(s);typeof n==`function`&&n(t)};return a.addEventListener(`click`,g),i(()=>a.removeEventListener(`click`,g)),t(()=>e.hasMonthCustomRender?{__rue_compiled_branch_key:!0,create:()=>t(()=>{let t=e.managedCellContent.get(`${e.currentValue.getFullYear()}-${`${d.get().value+1}`.padStart(2,`0`)}`)?.content;return t==null?{__rue_compiled_branch_key:null,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:t,create:()=>o(Object.assign(e=>{let n=A(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}})}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(n=>{let r=j(`span`,n);r.className=`flex items-center justify-between gap-2`;let i=j(`span`,r);k(r,i),i.className=`text-sm font-semibold`;let a=A(``);return k(i,a),O(a,()=>d.get().label),t(()=>l?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(t=>{let n=j(`span`,t),r;U(()=>{let e=`badge badge-xs ${c?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let i=A(``);return k(n,i),O(i,()=>e.todayMarkerLabel),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(r),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(a),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{r=e,a=t,d.set(e),f.set(t)})})}),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:s,__rue_compiled_roots:[s]}},{__rue_compiled_explicit_roots:!0}))},We=e=>typeof e==`number`&&e>=0&&e<=6?e:1,X=e=>new Date(e.getTime()),Z=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},Ge=e=>{let t=X(e);return t.setHours(0,0,0,0),t},Ke=e=>Z(e.getFullYear(),e.getMonth(),1),qe=e=>Z(e.getFullYear(),e.getMonth()+1,0),Je=e=>Z(e.getFullYear(),0,1),Ye=e=>Z(e.getFullYear(),11,31),Xe=(e,t)=>Z(e.getFullYear(),e.getMonth(),e.getDate()+t),Ze=e=>e instanceof Date&&!Number.isNaN(e.getTime()),Qe=(e,t=new Date)=>{if(Ze(e))return X(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(Ze(t))return t}return X(t)},$e=e=>{if(!e)return null;let t=Ge(Qe(e[0])),n=Ge(Qe(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},et=(e,t)=>e.getFullYear()===t.getFullYear(),tt=(e,t)=>et(e,t)&&e.getMonth()===t.getMonth(),nt=(e,t)=>tt(e,t)&&e.getDate()===t.getDate(),rt=(e,t)=>{let n=Z(e.getFullYear(),e.getMonth()+t,1),r=qe(n).getDate();return Z(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},it=(e,t)=>{let n=Z(e.getFullYear()+t,e.getMonth(),1),r=qe(n).getDate();return Z(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},at=(e,t)=>it(e,t-e.getFullYear()),ot=(e,t)=>rt(e,t-e.getMonth()),st=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ct=(e,t,n)=>{let r=Ge(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(X(r))},lt=(e,t,n,r)=>{let i=Ke(e),a=qe(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):ct(o,t,n))return!0;o=Xe(o,1)}return!1},ut=(e,t,n,r)=>{let i=Je(e),a=Ye(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>Z(e.getFullYear(),n,1)).some(e=>r?r(e):lt(e,t,n))},dt=e=>{let t=Ge(e),n=Z(Xe(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=Xe(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},ft=(e,t)=>{let n=`${e}:${t}`,r=xe.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=Z(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(Xe(a,(t+n)%7)));return xe.set(n,o),o},pt=e=>{let t=Se.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(Z(2026,t,1)));return Se.set(e,r),r},mt=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},ht=(e,t,n,r,i)=>{let a=pt(e);return Array.from({length:12},(e,o)=>{let s=Z(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):lt(s,n,r))}})},gt=(e,t)=>{let n=Ke(e),r=Xe(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=Xe(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:dt(i),cells:Array.from({length:7},(t,n)=>{let r=Xe(i,n);return{key:st(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},_t=e=>{let t=Ce.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),Ce.set(e,t)),t},vt=e=>{let t=we.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),we.set(e,t)),t},yt=e=>{let t=Te.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),Te.set(e,t)),t},bt=u(e=>{u();let{value:t,defaultValue:r,mode:i,fullscreen:a,showWeek:s,locale:c,weekStartsOn:l,validRange:f,disabledDate:p,dateFullCellRender:h,dateCellRender:_,monthFullCellRender:b,monthCellRender:S,cellRender:w,fullCellRender:T,headerRender:E,className:D,onRenderProfile:ee,renderProfileThreshold:te,onChange:ne,onPanelChange:re,onSelect:P,...ie}=e,I=De(!!e.onRenderProfile,e.renderProfileThreshold===void 0?16:e.renderProfileThreshold),L=z(`useSetup:1:3`,()=>x(()=>({value:z(`ref:1:1`,()=>n(Qe(e.value??e.defaultValue??new Date))),mode:z(`ref:1:2`,()=>n(e.mode??`month`))}))),ae=L.value,R=L.mode,B=z(`useRef:1:4`,()=>v()),V=z(`useRef:1:5`,()=>v()),H=z(`useRef:1:6`,()=>v()),oe=z(`useRef:1:7`,()=>v(null)),W=z(`useRef:1:8`,()=>v(null)),se=z(`useRef:1:9`,()=>v(`__none__`)),ce=g(()=>e.value===void 0?ae.value:Qe(e.value,ae.value));ce.get();let G=ce,le=g(()=>e.mode??R.value);le.get();let K=le,q=Ge(new Date),ue=g(()=>$e(e.validRange));ue.get();let de=ue,fe=!!de.get()||!!e.disabledDate,pe=g(()=>e.locale??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`));pe.get();let ve=pe,xe=g(()=>We(e.weekStartsOn));xe.get();let Se=xe,Ce=g(()=>ve.get().toLowerCase().startsWith(`zh`));Ce.get();let we=Ce;B.current||=be().date,V.current||=be().month,H.current||=be().year;let Te=g(()=>de.get()?de.get().start.getTime():null);Te.get();let Ee=Te,Oe=g(()=>de.get()?de.get().end.getTime():null);Oe.get();let je=Oe,Me=g(()=>e.disabledDate?e.disabledDate.toString():`__none__`);Me.get();let Ne=Me;(oe.current!==Ee.get()||W.current!==je.get()||se.current!==Ne.get())&&(B.current.clear(),V.current.clear(),H.current.clear(),oe.current=Ee.get(),W.current=je.get(),se.current=Ne.get());let J=t=>{if(!fe)return!0;let n=st(Ge(t)),r=B.current?.get(n);if(r!==void 0)return r;let i=ct(t,de.get(),e.disabledDate);return B.current?.set(n,i),i},Y=t=>{if(!fe)return!0;let n=`${t.getFullYear()}-${t.getMonth()}`,r=V.current?.get(n);if(r!==void 0)return r;let i=lt(t,de.get(),e.disabledDate,J);return V.current?.set(n,i),i},Pe=t=>{if(!fe)return!0;let n=`${t.getFullYear()}`,r=H.current?.get(n);if(r!==void 0)return r;let i=ut(t,de.get(),e.disabledDate,Y);return H.current?.set(n,i),i},Fe=g(()=>K.get()===`month`);Fe.get();let Ie=Fe,Le=g(()=>Ie.get()?ft(ve.get(),Se.get()):[]);Le.get();let Ke=Le,qe=g(()=>Ie.get()?gt(G.get(),Se.get()):[]);qe.get();let Je=qe;I.cellCount=Ie.get()?Je.get().reduce((e,t)=>e+t.cells.length,0):12;let Ye=g(()=>mt(G.get(),de.get()));Ye.get();let Xe=Ye,Ze=g(()=>ht(ve.get(),G.get(),fe?de.get():null,fe?e.disabledDate:void 0,fe?Y:void 0));Ze.get();let dt=Ze,pt=g(()=>ye(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${e.fullscreen===void 0||e.fullscreen?`rounded-[1.75rem]`:`w-full max-w-[24rem] rounded-[1.5rem]`}`,e.className));pt.get();let bt=pt,xt=g(()=>e.showWeek?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`);xt.get();let St=xt,Ct=g(()=>K.get()===`month`?_t(ve.get()).format(G.get()):vt(ve.get()).format(G.get()));Ct.get();let wt=Ct,Tt=g(()=>yt(ve.get()).format(q));Tt.get();let Et=Tt,Dt=g(()=>we.get()?`今天`:`Today`);Dt.get();let Ot=Dt,kt=g(()=>we.get()?`月`:`Month`);kt.get();let At=kt,jt=g(()=>we.get()?`年`:`Year`);jt.get();let Mt=jt,Nt=g(()=>we.get()?`周`:`Week`);Nt.get();let Pt=Nt,Ft=g(()=>we.get()?`今`:`Today`);Ft.get();let It=Ft,Lt=g(()=>K.get()===`month`?we.get()?`月视图`:`Month view`:we.get()?`年视图`:`Year view`);Lt.get();let Rt=Lt,zt=g(()=>fe?K.get()===`month`?!Y(rt(G.get(),-1)):!Pe(it(G.get(),-1)):!1);zt.get();let Bt=zt,Vt=g(()=>fe?K.get()===`month`?!Y(rt(G.get(),1)):!Pe(it(G.get(),1)):!1);Vt.get();let Ht=Vt,Ut=fe?!J(q):!1,Wt=!!(e.cellRender||e.fullCellRender||e.dateCellRender||e.dateFullCellRender),Gt=!!(e.cellRender||e.fullCellRender||e.monthCellRender||e.monthFullCellRender),Q=(t,n)=>{let r=Ge(Qe(t,G.get())),i=!nt(r,G.get()),a=K.get()===`month`?!tt(r,G.get()):!et(r,G.get());e.value===void 0&&(ae.value=r),i&&e.onChange?.(X(r)),a&&e.onPanelChange?.(X(r),K.get()),e.onSelect?.(X(r),{source:n})},Kt=t=>{t!==K.get()&&(e.mode===void 0&&(R.value=t),e.onPanelChange?.(X(G.get()),t))},qt=g(()=>({value:X(G.get()),type:K.get(),yearOptions:Xe.get(),monthOptions:dt.get(),onChange:e=>Q(e,`customize`),onTypeChange:Kt,onYearChange:e=>Q(at(G.get(),e),`customize`),onMonthChange:e=>Q(ot(G.get(),e),`customize`)}));qt.get();let Jt=qt,Yt=!!e.headerRender,Xt=g(()=>e.headerRender?e.headerRender(Jt.get()):null);Xt.get();let Zt=Xt,$=z(`useSetup:1:10`,()=>x(()=>({host:null,lastSnapshot:null,managedContentMounts:new Map,managedHeaderMount:null,eventsAttached:!1,cleanupVersion:0}))),Qt=()=>{!$.host||$.eventsAttached||($.host.addEventListener(`click`,e=>{let t=$.lastSnapshot,n=e.target?.closest(`[data-rue-calendar-action], [data-rue-calendar-cell], [data-rue-calendar-month]`);if(!t||!n||!$.host?.contains(n)||n.disabled)return;let r=n.getAttribute(`data-rue-calendar-action`);if(r===`previous`){t.onPrevious();return}if(r===`today`){t.onToday();return}if(r===`next`){t.onNext();return}if(r===`mode-month`){t.onModeMonth();return}if(r===`mode-year`){t.onModeYear();return}let i=n.getAttribute(`data-rue-calendar-cell`);if(i){t.onDateSelect(Qe(i,t.currentValue));return}let a=n.getAttribute(`data-rue-calendar-month`);if(a){let[e,n]=a.split(`-`).map(e=>Number(e));Number.isFinite(e)&&Number.isFinite(n)&&t.onMonthSelect(Z(e,n-1,1))}}),$.host.addEventListener(`change`,e=>{let t=$.lastSnapshot,n=e.target;if(!t||!n||!$.host?.contains(n))return;let r=n.getAttribute(`data-rue-calendar-select`),i=Number(n.value);Number.isFinite(i)&&(r===`year`?t.onYearChange(i):r===`month`&&t.onMonthChange(i))}),$.eventsAttached=!0)},$t=new Map;if(Ie.get())for(let e of Je.get())for(let t of e.cells)$t.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:nt(t.date,G.get()),isToday:nt(t.date,q),disabled:!J(t.date)});let en=g(()=>Xe.get().map(e=>({value:e,disabled:!Pe(Z(e,G.get().getMonth(),1))})));en.get();let tn=en,nn=new Map;Ie.get()&&Wt?Je.get().forEach((t,n)=>{t.cells.forEach((r,i)=>{let a=$t.get(r.key),s={type:`date`,key:r.key,row:n,column:i},c=M(()=>{let e=F(),t=me().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[0].childNodes[0],s=n.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode,l=n.childNodes[0].childNodes[1],u=l.parentNode;return e.appendChild(t),U(()=>{d(i,`text-sm font-semibold ${r.inView?``:`opacity-60`}`)}),U(()=>{let e=r.date.getDate();N(()=>C(e,c,s))}),y(u,l,()=>a.isToday?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=j(`span`,e),n;U(()=>{let e=`badge badge-xs ${a.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let r=A(``);return k(t,r),O(r,()=>It.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),e},!0),l=e.cellRender?ke(I,`cellRender`,s,()=>e.cellRender(X(r.date),{type:`date`,originNode:c,today:X(q),selected:a.selected,isToday:a.isToday,inView:r.inView,disabled:a.disabled,row:n,column:i,week:t.week})):void 0;l==null&&e.dateCellRender&&(l=ke(I,`dateCellRender`,s,()=>e.dateCellRender(X(r.date))));let u=M(()=>{let e=F(),t=he().content.cloneNode(!0),n=t.firstChild,i=n.childNodes[0].childNodes[0],s=n.childNodes[1],c=n.childNodes[0].childNodes[0].childNodes[0],u=c.parentNode,f=n.childNodes[0].childNodes[1],p=f.parentNode,m=n.childNodes[1].childNodes[0],h=m.parentNode;return e.appendChild(t),U(()=>{d(i,`text-sm font-semibold ${r.inView?``:`opacity-60`}`)}),U(()=>{d(s,`min-h-[1.85rem] text-[0.68rem] leading-4 ${a.selected?`opacity-90`:`opacity-75`}`)}),U(()=>{let e=r.date.getDate();N(()=>C(e,u,c))}),y(p,f,()=>a.isToday?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=j(`span`,e),n;U(()=>{let e=`badge badge-xs ${a.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let r=A(``);return k(t,r),O(r,()=>It.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),U(()=>{let e=l;N(()=>C(e,h,m))}),e},!0),f=e.fullCellRender?ke(I,`fullCellRender`,s,()=>e.fullCellRender(X(r.date),{type:`date`,originNode:u,today:X(q),selected:a.selected,isToday:a.isToday,inView:r.inView,disabled:a.disabled,row:n,column:i,week:t.week})):void 0;f==null&&e.dateFullCellRender&&(f=ke(I,`dateFullCellRender`,s,()=>e.dateFullCellRender(X(r.date)))),nn.set(r.key,{key:r.key,type:`date`,content:f??u})})}):!Ie.get()&&Gt&&dt.get().forEach((t,n)=>{let r=Z(G.get().getFullYear(),t.value,1),i=tt(r,G.get()),a=tt(r,q),s=t.disabled===!0,c=`${G.get().getFullYear()}-${`${t.value+1}`.padStart(2,`0`)}`,l={type:`month`,key:c,row:Math.floor(n/4),column:n%4},u=M(()=>{let e=F(),n=ge().content.cloneNode(!0),r=n.firstChild,s=r.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode,l=r.childNodes[0].childNodes[1],u=l.parentNode;return e.appendChild(n),U(()=>{let e=t.label;N(()=>C(e,c,s))}),y(u,l,()=>a?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=j(`span`,e),n;U(()=>{let e=`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let r=A(``);return k(t,r),O(r,()=>It.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),e},!0),f=e.cellRender?ke(I,`cellRender`,l,()=>e.cellRender(X(r),{type:`month`,originNode:u,today:X(q),selected:i,isToday:a,inView:!0,disabled:s,row:Math.floor(n/4),column:n%4})):void 0;f==null&&e.monthCellRender&&(f=ke(I,`monthCellRender`,l,()=>e.monthCellRender(X(r))));let p=M(()=>{let e=F(),n=_e().content.cloneNode(!0),r=n.firstChild,s=r.childNodes[1],c=r.childNodes[0].childNodes[0].childNodes[0],l=c.parentNode,u=r.childNodes[0].childNodes[1],p=u.parentNode,m=r.childNodes[1].childNodes[0],h=m.parentNode;return e.appendChild(n),U(()=>{d(s,`min-h-[2.1rem] text-xs leading-5 ${i?`opacity-90`:`opacity-75`}`)}),U(()=>{let e=t.label;N(()=>C(e,l,c))}),y(p,u,()=>a?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let t=j(`span`,e),n;U(()=>{let e=`badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,r=e==null?``:String(e);Object.is(n,r)||(n=r,t.className=r)});let r=A(``);return k(t,r),O(r,()=>It.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),U(()=>{let e=f;N(()=>C(e,h,m))}),e},!0),m=e.fullCellRender?ke(I,`fullCellRender`,l,()=>e.fullCellRender(X(r),{type:`month`,originNode:p,today:X(q),selected:i,isToday:a,inView:!0,disabled:s,row:Math.floor(n/4),column:n%4})):void 0;m==null&&e.monthFullCellRender&&(m=ke(I,`monthFullCellRender`,l,()=>e.monthFullCellRender(X(r)))),nn.set(c,{key:c,type:`month`,content:m??p})});let rn=g(()=>({rest:ie,rootClassName:bt.get(),fullscreen:e.fullscreen===void 0||e.fullscreen,hasCustomHeader:Yt,customHeaderContent:Zt.get(),currentMode:K.get(),currentValue:X(G.get()),headerTitle:wt.get(),todayLabel:Et.get(),previousDisabled:Bt.get(),nextDisabled:Ht.get(),todayDisabled:Ut,yearOptions:tn.get(),monthOptions:dt.get(),weekdayLabels:Ke.get(),dateRows:Je.get(),rowClassName:St.get(),showWeek:e.showWeek,viewLabel:Rt.get(),weekButtonLabel:Pt.get(),todayButtonLabel:Ot.get(),monthButtonLabel:At.get(),yearButtonLabel:Mt.get(),todayMarkerLabel:It.get(),dateCellStates:$t,managedCellContent:nn,hasDateCustomRender:Wt,hasMonthCustomRender:Gt,onPrevious:()=>Q(K.get()===`month`?rt(G.get(),-1):it(G.get(),-1),`customize`),onToday:()=>Q(q,`customize`),onNext:()=>Q(K.get()===`month`?rt(G.get(),1):it(G.get(),1),`customize`),onYearChange:e=>Q(at(G.get(),e),`customize`),onMonthChange:e=>Q(ot(G.get(),e),`customize`),onModeMonth:()=>Kt(`month`),onModeYear:()=>Kt(`year`),onDateSelect:e=>Q(e,`date`),onMonthSelect:e=>Q(e,`month`)}));if(rn.get(),m(()=>{let e=++$.cleanupVersion;queueMicrotask(()=>{$.cleanupVersion===e&&(Ve($.managedContentMounts),Re($.managedHeaderMount),$.managedHeaderMount=null,$.host&&$.host.replaceChildren(),$.lastSnapshot=null)})}),typeof document>`u`)return Ae(e.onRenderProfile,I,le.get(),`jsx`),Ue(rn.get());$.cleanupVersion+=1,Ve($.managedContentMounts),Re($.managedHeaderMount),$.managedHeaderMount=null;let an=document.createElement(`span`);return an.style.display=`contents`,$.host=an,$.eventsAttached=!1,$.lastSnapshot=null,Qt(),an.innerHTML=He(rn.get()),Be(an,$.managedContentMounts,rn.get()),$.managedHeaderMount=ze(an,$.managedHeaderMount,rn.get()),$.lastSnapshot=rn.get(),Ae(e.onRenderProfile,I,le.get(),`html`),an}),xt=Object.assign(bt,{Cally:e=>{let t=b(e.children),n=b(e.className),r=b(oe(e,[`children`,`className`]));return R(M(()=>{let e=F(),i=B(`calendar-date`,e);H(i,`__rue_context_parent_instance__`,_()),S(e,i),U(()=>{ie(i,r.get(),[`data-testid`,`className`])}),U(()=>{I(i,`data-testid`,String(r.get()[`data-testid`]))}),U(()=>{d(i,ye(`cally`,n.get()))});let a=V(`rue:slot:anchor`);return S(i,a),D({parent:i,before:a},()=>t.get(),()=>({})),e},!0),e=>G(()=>{t.set(e.children),n.set(e.className),r.set(oe(e,[`children`,`className`]))}),()=>e)},Month:e=>{let t=b(e.children),n=b(e.className),r=b(oe(e,[`children`,`className`]));return R(M(()=>{let e=F(),i=B(`calendar-month`,e);H(i,`__rue_context_parent_instance__`,_()),S(e,i),U(()=>{ie(i,r.get(),[`data-testid`,`className`])}),U(()=>{I(i,`data-testid`,String(r.get()[`data-testid`]))}),U(()=>{d(i,n.get())});let a=V(`rue:slot:anchor`);return S(i,a),D({parent:i,before:a},()=>t.get(),()=>({})),e},!0),e=>G(()=>{t.set(e.children),n.set(e.className),r.set(oe(e,[`children`,`className`]))}),()=>e)},PikaSingle:e=>{let t=b(e.className),n=b(e.type),r=b(oe(e,[`className`,`type`]));return R(o(Object.assign(e=>{let i=ve().content.cloneNode(!0).firstChild,a=i;ce(a,()=>r.get(),[`data-testid`,`id`,`value`,`type`,`className`,`__rue_static_template_id__`]);let o;U(()=>{let e=r.get()[`data-testid`];Object.is(o,e)||(o=e,e==null||e===!1?a.removeAttribute(`data-testid`):a.setAttribute(`data-testid`,String(e)))});let s;U(()=>{let e=r.get().id;Object.is(s,e)||(s=e,e==null||e===!1?a.removeAttribute(`id`):a.setAttribute(`id`,String(e)))});let c;U(()=>{let e=r.get().value,t=e==null?``:String(e);Object.is(c,t)||(c=t,ne(a,t))});let l;U(()=>{let e=n.get()===void 0?`text`:n.get();Object.is(l,e)||(l=e,e==null||e===!1?a.removeAttribute(`type`):a.setAttribute(`type`,String(e)))});let u;return U(()=>{let e=ye(`pika-single`,t.get()),n=e==null?``:String(e);Object.is(u,n)||(u=n,a.className=n)}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{t.set(e.className),n.set(e.type),r.set(oe(e,[`className`,`type`]))}),()=>e)}}),St=w(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2"><div class="rounded-[1rem] bg-base-200/70 px-3 py-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">当前值</div><div class="mt-1 text-sm font-medium"><!--rue:text-hole:1--></div></div><div class="rounded-[1rem] bg-base-200/70 px-3 py-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">选择来源</div><div class="mt-1 text-sm font-medium"><!--rue:text-hole:2--></div></div><div class="rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">面板状态</div><div class="mt-1 text-sm font-medium"><!--rue:text-hole:3--></div></div></div><p class="m-0 text-xs text-base-content/70">日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。</p></div>`),Ct=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),wt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Tt=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},Et=e=>e?typeof e==`string`?e:wt(e):`未选择`,Dt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Ot=[Tt(`2026-04-01`),Tt(`2026-05-31`)],kt=e=>e.getDay()===0||e.getDay()===6||Ct.has(wt(e)),At=()=>{let e=n(`2026-04-12`),t=n(`date`),r=n(`month`),i=n(Dt(Tt(e.value),`month`)),o=a(`BasicCalendarPreview:hook:0`,t=>{e.value=wt(t)},[]),s=a(`BasicCalendarPreview:hook:1`,(e,t)=>{i.value=Dt(e,t)},[]),c=a(`BasicCalendarPreview:hook:2`,(e,n)=>{t.value=n.source},[]);return p(()=>R(M(()=>{let n=F(),a=St().content.cloneNode(!0),u=a.firstChild,d=u.childNodes[0],f=d.parentNode,p=u.childNodes[1].childNodes[0].childNodes[1].childNodes[0],m=p.parentNode,h=u.childNodes[1].childNodes[1].childNodes[1].childNodes[0],g=h.parentNode,_=u.childNodes[1].childNodes[2].childNodes[1].childNodes[0],v=_.parentNode;n.appendChild(a);let y=P(f);return l(y,xt,()=>({"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:r.value,showWeek:!0,validRange:Ot,disabledDate:kt,onChange:o,onPanelChange:(e,t)=>{r.value=t,s(e,t)},onSelect:c})),f.insertBefore(y,d),U(()=>{let t=Et(e.value);N(()=>C(t,m,p))}),U(()=>{let e=t.value;N(()=>C(e,g,h))}),U(()=>{let e=i.value;N(()=>C(e,v,_))}),n},!0),e=>G(()=>{})))},jt=w(`<div class="flex flex-wrap gap-2 text-xs"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div>`),Mt=w(`<div class="space-y-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><p class="m-0 text-xs text-base-content/70">当前选择：<!--rue:text-hole:2-->。这条示例 原样保持，用于展示原生 web component 接口。</p></div>`),Nt=w(`<div class="space-y-3"><div class="flex flex-wrap items-center gap-3"><button type="button" data-testid="cally-picker-button" class="input input-bordered w-fit cursor-pointer"><!--rue:text-hole:0--></button><span class="text-xs text-base-content/70">当前选择：<!--rue:text-hole:1--></span></div><div data-testid="cally-picker-panel"><!--rue:opaque-hole:2--></div><!--rue:opaque-hole:3--><p class="m-0 text-xs text-base-content/70">点击按钮展开面板，选中日期后会自动回填并收起。这条基础示例 同样完整保持。</p></div>`),Pt=w(`<div class="space-y-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><p class="m-0 text-xs text-base-content/70">当前选择：<!--rue:text-hole:2--></p><p class="m-0 text-xs text-base-content/70">输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。</p></div>`),Ft=null,It=null,Lt=xt.Cally,Rt=xt.Month,zt=xt.PikaSingle,Bt=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,Vt=async()=>{typeof window>`u`||typeof customElements>`u`||(Ft||=(async()=>{let e=Bt();customElements.get(`calendar-date`)||await(e?.cally?e.cally():le(()=>import(`./cally-B-msaaMx.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await Ft)},Ht=async()=>{if(!It){let t=Bt();It=(t?.pikaday?t.pikaday():le(()=>import(`./pikaday-BlN5cxGq.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return It},Ut=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Wt=(e,t=`未选择`)=>e||t,Gt=e=>e||`Pick a date`,Q=e=>{let t=b(e.error),n=b(e.loadingLabel),r=b(e.ready),i=b(e.readyLabel);return R(o(Object.assign(e=>{let a=jt().content.cloneNode(!0).firstChild,s=a.childNodes[0],c=a.childNodes[0].childNodes[0],l=c.parentNode,u=a.childNodes[1],d=u.parentNode,f;U(()=>{let e=`badge ${r.get()?`badge-success badge-soft`:`badge-outline`}`,t=e==null?``:String(e);Object.is(f,t)||(f=t,s.className=t)});let p=A(``);return l.insertBefore(p,c),l.removeChild(c),O(p,()=>r.get()?i.get():n.get()),y(d,u,()=>t.get()?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(e=>{let n=j(`span`,e);n.className=`badge badge-error badge-soft`;let r=A(``);return k(n,r),O(r,()=>t.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{t.set(e.error),n.set(e.loadingLabel),r.set(e.ready),i.set(e.readyLabel)}),()=>e)},Kt=()=>R(M(()=>{let e=F(),t=B(`svg`,e);S(e,t),I(t,`aria-label`,`Previous`),d(t,`fill-current size-4`),I(t,`slot`,`previous`),I(t,`xmlns`,`http://www.w3.org/2000/svg`),I(t,`viewBox`,`0 0 24 24`);let n=B(`path`,t);return S(t,n),I(n,`fill`,`currentColor`),I(n,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),e},!0),e=>G(()=>{})),qt=()=>R(M(()=>{let e=F(),t=B(`svg`,e);S(e,t),I(t,`aria-label`,`Next`),d(t,`fill-current size-4`),I(t,`slot`,`next`),I(t,`xmlns`,`http://www.w3.org/2000/svg`),I(t,`viewBox`,`0 0 24 24`);let n=B(`path`,t);return S(t,n),I(n,`fill`,`currentColor`),I(n,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),e},!0),e=>G(()=>{})),Jt=()=>{let{calendarRef:e,cleanupRef:t,selectedValue:r,ready:i,error:a}=se(`useSetup:0:0`,()=>{let e=v(),t=v(()=>{}),r=n(`2026-04-12`),i=n(!1),a=n(``);return c(()=>{let n=!0;Vt().then(()=>{if(!n)return;i.value=!0;let a=e.current;if(!a)return;a.value=r.value;let o=()=>{r.value=a.value||``};a.addEventListener(`change`,o),t.current=()=>a.removeEventListener(`change`,o)}).catch(()=>{n&&(a.value=`Cally 加载失败`)}),m(()=>{n=!1})}),m(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:r,ready:i,error:a}});return M(t=>{let n=Mt().content.cloneNode(!0).firstChild,o=n.childNodes[0],s=o.parentNode,c=n.childNodes[1],u=c.parentNode,d=n.childNodes[2].childNodes[1],f=d.parentNode;U(()=>{let t=T(Kt,()=>({})),n=T(qt,()=>({})),r=T(Rt,()=>({})),i=T(Lt,()=>({ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:[t,n,r]}));N(()=>C(i,s,o))});let p=P(u);return l(p,Q,()=>({ready:i.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:a.value})),u.insertBefore(p,c),U(()=>{let e=Wt(r.value);N(()=>C(e,f,d))}),n})},Yt=()=>{let{calendarRef:e,cleanupRef:t,selectedValue:r,open:i,ready:a,error:o}=se(`useSetup:0:0`,()=>{let e=v(),t=v(()=>{}),r=n(``),i=n(!1),a=n(!1),o=n(``);return c(()=>{let n=!0;Vt().then(()=>{if(!n)return;a.value=!0;let o=e.current;if(!o)return;o.value=r.value;let s=()=>{r.value=o.value||``,i.value=!1};o.addEventListener(`change`,s),t.current=()=>o.removeEventListener(`change`,s)}).catch(()=>{n&&(o.value=`Cally 加载失败`)}),m(()=>{n=!1})}),m(()=>{t.current?.(),t.current=()=>{}}),{calendarRef:e,cleanupRef:t,selectedValue:r,open:i,ready:a,error:o}});return M(t=>{let n=Nt().content.cloneNode(!0).firstChild,s=n.childNodes[0].childNodes[0],c=n.childNodes[1],u=n.childNodes[0].childNodes[0].childNodes[0],p=u.parentNode,m=n.childNodes[0].childNodes[1].childNodes[1],h=m.parentNode,g=n.childNodes[1].childNodes[0],_=g.parentNode,v=n.childNodes[2],y=v.parentNode;I(s,`type`,`button`),I(s,`data-testid`,`cally-picker-button`),d(s,`input input-bordered w-fit cursor-pointer`);let b=e=>{let t=()=>{i.value=!i.value};typeof t==`function`&&t(e)};s.addEventListener(`click`,b),f(()=>s.removeEventListener(`click`,b)),I(c,`data-testid`,`cally-picker-panel`),U(()=>{d(c,`inline-block rounded-box bg-base-100 p-3 shadow-lg ${i.value?``:`hidden`}`)}),U(()=>{let e=Gt(r.value);N(()=>C(e,p,u))}),U(()=>{let e=Wt(r.value);N(()=>C(e,h,m))}),U(()=>{let t=T(Kt,()=>({})),n=T(qt,()=>({})),r=T(Rt,()=>({})),i=T(Lt,()=>({ref:e,"data-testid":`cally-picker-calendar`,children:[t,n,r]}));N(()=>C(i,_,g))});let x=P(y);return l(x,Q,()=>({ready:a.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:o.value})),y.insertBefore(x,v),n})},Xt=()=>{let{inputRef:e,instanceRef:t,selectedValue:r,ready:i,error:a}=se(`useSetup:0:0`,()=>{let e=v(),t=v(),r=n(``),i=n(!1),a=n(``);return c(()=>{let n=!0;Ht().then(a=>{if(!n)return;let o=e.current;o&&(t.current=new a({field:o,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>Ut(e),onSelect:e=>{r.value=o.value||Ut(e)}}),o.setAttribute(`data-pikaday-ready`,`true`),r.value=o.value||`2026-04-12`,i.value=!0)}).catch(()=>{n&&(a.value=`Pikaday 加载失败`)}),m(()=>{n=!1})}),m(()=>{t.current?.destroy?.(),t.current=null}),{inputRef:e,instanceRef:t,selectedValue:r,ready:i,error:a}});return M(t=>{let n=Pt().content.cloneNode(!0).firstChild,o=n.childNodes[0],s=o.parentNode,c=n.childNodes[1],u=c.parentNode,d=n.childNodes[2].childNodes[1],f=d.parentNode;U(()=>{let t=T(zt,()=>({ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`}));N(()=>C(t,s,o))});let p=P(u);return l(p,Q,()=>({ready:i.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:a.value})),u.insertBefore(p,c),U(()=>{let e=Wt(r.value);N(()=>C(e,f,d))}),n})},Zt=w(`<div class="space-y-1"><div class="text-lg font-semibold leading-none"><!--rue:text-hole:0--></div><div class="text-[0.68rem] uppercase tracking-[0.22em] opacity-60">Backlog</div></div>`),$=w(`<div class="space-y-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),Qt=w(`<div class="flex h-full flex-col justify-between gap-2"><div class="flex items-center justify-between gap-2"><span class="text-sm font-semibold"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1-->%</span></div><div class="space-y-1"><div class="h-1.5 overflow-hidden rounded-full bg-base-300/70"><div></div></div><div class="text-[0.62rem] uppercase tracking-[0.22em] opacity-60">Studio load</div></div></div>`),$t=w(`<div class="border-b border-base-300/70 px-3 py-3"><div class="flex flex-wrap items-start justify-between gap-3"><div><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">Studio Header</div><div class="mt-1 text-base font-semibold"><!--rue:text-hole:0--></div></div><div class="join"><button type="button">月视图</button><button type="button">年视图</button></div></div><div class="mt-3 flex flex-wrap gap-2"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div></div>`),en=w(`<div class="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2"><span class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55"><!--rue:text-hole:0--></span><span class="text-sm font-medium"><!--rue:text-hole:1--></span></div>`),tn=w(`<div class="not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),nn=w(`<div class="not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"><table class="table table-zebra"><thead><tr><th>导出</th><th>说明</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),rn=w(`<div class="component-preview not-prose my-6 text-base-content lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),an=w(`<div class="rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm"><div class="badge badge-outline badge-sm"><!--rue:text-hole:0--></div><h3 class="mt-3 mb-1 text-base font-semibold"><!--rue:text-hole:1--></h3><p class="m-0 text-sm text-base-content/70"><!--rue:text-hole:2--></p></div>`),on=w(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="grid gap-3 md:grid-cols-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div>`),sn=w(`<div class="space-y-4"><div class="grid gap-4"><div class="max-w-full overflow-x-auto"><!--rue:opaque-hole:0--></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm"><div class="badge badge-secondary badge-soft">Card Mode</div><h3 class="mt-3 mb-1 text-base font-semibold">容量面板</h3><p class="m-0 text-sm text-base-content/70">使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。</p><div class="mt-4 space-y-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div></div></div>`),cn=w(`<div class="prose prose-sm max-w-none md:prose-base"><h1>Calendar 日历</h1><p class="mt-3 mb-3 text-sm">Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条基础接入链路。</p><div class="not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><section class="my-12 space-y-6"><div><h2 class="mb-2">API</h2><p class="m-0 text-sm text-base-content/70">默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时使用 Rue 自己的视觉和基础导出方式。</p></div><!--rue:opaque-hole:10--><div><h2 class="mb-2">附属导出</h2><p class="m-0 text-sm text-base-content/70">基础的 Cally 与 Pikaday 接口没有删除，而是并列保持为复合导出，便于按需接入。</p></div><!--rue:opaque-hole:11--></section></div>`),ln=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`onRenderProfile`,description:`渲染诊断回调，报告当前更新阶段、耗时、cellRender 调用次数与慢单元格`,type:`(event: CalendarRenderProfileEvent) => void`,defaultValue:`-`},{prop:`renderProfileThreshold`,description:`渲染诊断的慢调用阈值，超过后会在 onRenderProfile 中标记 slow`,type:`number`,defaultValue:`16`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],un=[{name:`Calendar.Cally`,description:`展示基础 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],dn={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},fn={2:12,3:28,4:18,8:43},pn={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},mn={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},hn=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,gn=e=>e?typeof e==`string`?e:hn(e):`未选择`,_n=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,vn=e=>{let t=b(e.label),n=b(e.value);return R(o(Object.assign(e=>{let r=en().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0],s=o.parentNode,c=A(``);a.insertBefore(c,i),a.removeChild(i),O(c,()=>t.get());let l=A(``);return s.insertBefore(l,o),s.removeChild(o),O(l,()=>n.get()),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{t.set(e.label),n.set(e.value)}),()=>e)},yn=e=>{let t=b(e.rows);return R(o(Object.assign(e=>{let n=tn().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,s=[];return U(()=>{let e=t.get()||[];s=r(a,i,s,e,(e,t)=>e.prop,(e,t)=>{let n=b(e),r=b(t);return h((e,t,r)=>W(e,r,()=>o(Object.assign(e=>{let t=j(`tr`,e),r=j(`td`,t);k(t,r);let i=j(`code`,r);k(r,i);let a=A(``);k(i,a),O(a,()=>n.get().prop);let o=j(`td`,t);k(t,o);let s=A(``);k(o,s),O(s,()=>n.get().description);let c=j(`td`,t);k(t,c);let l=j(`code`,c);k(c,l);let u=A(``);k(l,u),O(u,()=>n.get().type);let d=j(`td`,t);k(t,d);let f=j(`code`,d);k(d,f);let p=A(``);return k(f,p),O(p,()=>n.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{t.set(e.rows)}),()=>e)},bn=e=>{let t=b(e.rows);return R(o(Object.assign(e=>{let n=nn().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[1].childNodes[0],a=i.parentNode,s=[];return U(()=>{let e=t.get()||[];s=r(a,i,s,e,(e,t)=>e.name,(e,t)=>{let n=b(e),r=b(t);return h((e,t,r)=>W(e,r,()=>o(Object.assign(e=>{let t=j(`tr`,e),r=j(`td`,t);k(t,r);let i=j(`code`,r);k(r,i);let a=A(``);k(i,a),O(a,()=>n.get().name);let o=j(`td`,t);k(t,o);let s=A(``);return k(o,s),O(s,()=>n.get().description),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{t.set(e.rows)}),()=>e)},xn=e=>{let{shouldLoadPreview:t,preloadTimer:r}=se(`useSetup:0:0`,()=>{let t=n(e.previewLoadDelay==null),r=v(null);return c(()=>{e.previewLoadDelay==null||t.value||(r.current=window.setTimeout(()=>{t.value=!0,r.current=null},e.previewLoadDelay))}),m(()=>{r.current!=null&&(window.clearTimeout(r.current),r.current=null)}),{shouldLoadPreview:t,preloadTimer:r}});return M(n=>{let r=rn().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0].childNodes[0].childNodes[1],a=i.parentNode,c=r.childNodes[0].childNodes[0].childNodes[1],u=c.parentNode,d=r.childNodes[1],f=d.parentNode,p=r.childNodes[2],m=p.parentNode;D({parent:a,before:i},()=>e.title,()=>({})),y(u,c,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>o(Object.assign(t=>{let n=j(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=L(`rue:compiled-slot`);return k(n,r),D({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>o(Object.assign(e=>{let t=F();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let h=P(f);return l(h,q,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),f.insertBefore(h,d),U(()=>{let n=e.tab.value===`preview`?t.value?de(e.title,e.preview):o(Object.assign(t=>{let n=j(`div`,t);n.className=`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`;let r=j(`div`,n);k(n,r),r.className=`badge badge-outline badge-sm`,k(r,A(`Preview`));let i=j(`p`,n);k(n,i),i.className=`mb-0 mt-3 text-sm text-base-content/72`;let a=A(``);return k(i,a),O(a,()=>e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):s(K,()=>({className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code}));N(()=>C(n,m,p))}),r})},Sn=e=>{let t=b(e.badge),n=b(e.detail),r=b(e.title);return R(o(Object.assign(e=>{let i=an().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],o=a.parentNode,s=i.childNodes[1].childNodes[0],c=s.parentNode,l=i.childNodes[2].childNodes[0],u=l.parentNode,d=A(``);o.insertBefore(d,a),o.removeChild(a),O(d,()=>t.get());let f=A(``);c.insertBefore(f,s),c.removeChild(s),O(f,()=>r.get());let p=A(``);return u.insertBefore(p,l),u.removeChild(l),O(p,()=>n.get()),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{t.set(e.badge),n.set(e.detail),r.set(e.title)}),()=>e)},Cn=()=>{let e=n(`2026-04-15`),t=n(`month`);return p(()=>R(o(Object.assign(n=>{let i=on().content.cloneNode(!0).firstChild,a=i.childNodes[0],s=a.parentNode,c=i.childNodes[1].childNodes[0],u=c.parentNode,f=i.childNodes[1].childNodes[1],p=f.parentNode,m=i.childNodes[1].childNodes[2],g=m.parentNode,_=P(s);l(_,xt,()=>({"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,onChange:t=>{e.value=hn(t)},onPanelChange:(e,n)=>{t.value=n},cellRender:(e,t)=>{if(t.type===`month`){let t=fn[e.getMonth()];return t?M(()=>{let e=F(),n=Zt().content.cloneNode(!0),r=n.firstChild.childNodes[0].childNodes[0],i=r.parentNode;return e.appendChild(n),U(()=>{let e=t;N(()=>C(e,i,r))}),e},!0):null}let n=dn[hn(e)]??[];return n.length?M(e=>{let t=$().content.cloneNode(!0).firstChild,i=t.childNodes[0],a=i.parentNode,s=t.childNodes[1],c=s.parentNode,l=[];return U(()=>{let e=n.slice(0,2)||[];l=r(a,i,l,e,(e,t)=>e.label,(e,t)=>{let n=b(e),r=b(t);return h((e,t,r)=>W(e,r,()=>o(Object.assign(e=>{let t=j(`div`,e),r;U(()=>{let e=`badge badge-soft badge-xs ${mn[n.get().tone]}`,i=e==null?``:String(e);Object.is(r,i)||(r=i,t.className=i)});let i=A(``);return k(t,i),O(i,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),U(()=>{let e=n.length>2?M(()=>{let e=F(),t=B(`div`,e);S(e,t),d(t,`text-[0.62rem] opacity-60`),S(t,re(`+`));let r=E(t);return S(t,r),U(()=>{ae(r,n.length-2)}),S(t,re(` more`)),e},!0):``;N(()=>C(e,c,s))}),t}):null}})),s.insertBefore(_,a);let v=P(u);l(v,vn,()=>({label:`当前日期`,value:gn(e.value)})),u.insertBefore(v,c);let y=P(p);l(y,vn,()=>({label:`4 月 15 日事件`,value:`${dn[`2026-04-15`]?.length??0} 条`})),p.insertBefore(y,f);let x=P(g);return l(x,vn,()=>({label:`9 月 backlog`,value:`${fn[8]} 项`})),g.insertBefore(x,m),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{})))},wn=()=>{let e=n(`2026-09-18`),t=n(`month`);return p(()=>R(o(Object.assign(n=>{let r=sn().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[0].childNodes[1].childNodes[3].childNodes[0],s=o.parentNode,c=r.childNodes[0].childNodes[1].childNodes[3].childNodes[1],u=c.parentNode,f=r.childNodes[0].childNodes[1].childNodes[3].childNodes[2],p=f.parentNode,m=P(a);l(m,xt,()=>({"data-testid":`card-calendar`,className:`w-[34rem] max-w-none`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:t.value,onChange:t=>{e.value=hn(t)},onPanelChange:(e,n)=>{t.value=n},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let n=pn[hn(e)];return n==null?t.originNode:M(t=>{let r=Qt().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[1],a=r.childNodes[1].childNodes[0].childNodes[0],o=r.childNodes[0].childNodes[0].childNodes[0],s=o.parentNode,c=r.childNodes[0].childNodes[1].childNodes[0],l=c.parentNode;return U(()=>{d(i,`badge badge-xs ${n>=80?`badge-error`:n>=60?`badge-warning`:`badge-success`} badge-soft`)}),U(()=>{d(a,`h-full rounded-full ${n>=80?`bg-error`:n>=60?`bg-warning`:`bg-success`}`)}),U(()=>{let e={width:`${n}%`};te(a,e)}),U(()=>{let t=e.getDate();N(()=>C(t,s,o))}),U(()=>{let e=n;N(()=>C(e,l,c))}),r})}})),a.insertBefore(m,i);let h=P(s);l(h,vn,()=>({label:`当前日期`,value:gn(e.value)})),s.insertBefore(h,o);let g=P(u);l(g,vn,()=>({label:`高负载日`,value:`9/18 · 92%`})),u.insertBefore(g,c);let _=P(p);return l(_,vn,()=>({label:`布局定位`,value:`侧栏、仪表盘、详情卡片`})),p.insertBefore(_,f),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{})))},Tn=()=>{let e=n(`2026-07-04`),t=n(`month`),i=n(`date`);return p(()=>R(o(Object.assign(n=>{let a=on().content.cloneNode(!0).firstChild,s=a.childNodes[0],c=s.parentNode,p=a.childNodes[1].childNodes[0],m=p.parentNode,g=a.childNodes[1].childNodes[1],_=g.parentNode,v=a.childNodes[1].childNodes[2],y=v.parentNode,x=P(c);l(x,xt,()=>({"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,headerRender:u(({value:e,type:t,yearOptions:n,monthOptions:i,onMonthChange:a,onTypeChange:s,onYearChange:c})=>M(l=>{let u=$t().content.cloneNode(!0).firstChild,p=u.childNodes[0].childNodes[1].childNodes[0],m=u.childNodes[0].childNodes[1].childNodes[1],g=u.childNodes[0].childNodes[0].childNodes[1].childNodes[0],_=g.parentNode,v=u.childNodes[1].childNodes[0],y=v.parentNode,x=u.childNodes[1].childNodes[1],w=x.parentNode;I(p,`type`,`button`),U(()=>{d(p,`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`)});let T=e=>{let t=()=>s(`month`);typeof t==`function`&&t(e)};p.addEventListener(`click`,T),f(()=>p.removeEventListener(`click`,T)),I(m,`type`,`button`),U(()=>{d(m,`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`)});let E=e=>{let t=()=>s(`year`);typeof t==`function`&&t(e)};m.addEventListener(`click`,E),f(()=>m.removeEventListener(`click`,E)),U(()=>{let n=_n(e,t);N(()=>C(n,_,g))});let D=B(`select`,y);S(y,D),y.insertBefore(D,v),d(D,`select select-sm min-w-24`),U(()=>{ne(D,e.getFullYear())});let te=e=>{let t=e=>c(Number(e.currentTarget.value));typeof t==`function`&&t(e)};D.addEventListener(`change`,te),f(()=>D.removeEventListener(`change`,te));let M=L(`rue:list:end`);k(D,M);let re=[];U(()=>{re=r(D,M,re,n||[],(e,t)=>e,(e,t)=>{let n=b(e),r=b(t);return h((e,t,r)=>W(e,r,()=>o(Object.assign(e=>{let t=j(`option`,e),r;U(()=>{let e=n.get(),i=e==null?``:String(e);Object.is(r,i)||(r=i,ne(t,i))});let i=A(``);return k(t,i),O(i,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})});let P=B(`select`,w);S(w,P),w.insertBefore(P,x),d(P,`select select-sm min-w-24`),U(()=>{ne(P,e.getMonth())}),U(()=>{ee(P,t===`year`)});let ie=e=>{let t=e=>a(Number(e.currentTarget.value));typeof t==`function`&&t(e)};P.addEventListener(`change`,ie),f(()=>P.removeEventListener(`change`,ie));let F=L(`rue:list:end`);k(P,F);let ae=[];return U(()=>{ae=r(P,F,ae,i||[],(e,t)=>e.value,(e,t)=>{let n=b(e),r=b(t);return h((e,t,r)=>W(e,r,()=>o(Object.assign(e=>{let t=j(`option`,e),r;U(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,ne(t,i))});let i;U(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)});let a=A(``);return k(t,a),O(a,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(i,a)=>{e=i,t=a,n.set(i),r.set(a)})})}),u})),onChange:t=>{e.value=hn(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{i.value=t.source}})),c.insertBefore(x,s);let w=P(m);l(w,vn,()=>({label:`当前日期`,value:gn(e.value)})),m.insertBefore(w,p);let T=P(_);l(T,vn,()=>({label:`当前模式`,value:t.value})),_.insertBefore(T,g);let E=P(y);return l(E,vn,()=>({label:`最近来源`,value:i.value})),y.insertBefore(E,v),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>G(()=>{})))},En=`import { ref, useCallback } from '@rue-js/rue'
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
}`,Dn=`import { ref } from '@rue-js/rue'
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
}`,On=`import { ref } from '@rue-js/rue'
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
}`,kn=`import { ref } from '@rue-js/rue'
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
}`,An=`import 'cally'
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
}`,jn=`import 'cally'
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
}`,Mn=()=>{let e=n(`preview`),t=n(`preview`),r=n(`preview`),i=n(`preview`),a=n(`preview`),o=n(`preview`),s=n(`preview`);return p(()=>R((()=>{let n=M(()=>{let n=F(),c=cn().content.cloneNode(!0),u=c.firstChild,d=u.childNodes[2].childNodes[0],f=d.parentNode,p=u.childNodes[2].childNodes[1],m=p.parentNode,h=u.childNodes[2].childNodes[2],g=h.parentNode,_=u.childNodes[3],v=_.parentNode,y=u.childNodes[4],b=y.parentNode,x=u.childNodes[5],S=x.parentNode,w=u.childNodes[6],E=w.parentNode,D=u.childNodes[7],O=D.parentNode,ee=u.childNodes[8],te=ee.parentNode,k=u.childNodes[9],ne=k.parentNode,A=u.childNodes[10].childNodes[1],j=A.parentNode,M=u.childNodes[10].childNodes[3],re=M.parentNode;n.appendChild(c);let ie=P(f);l(ie,Sn,()=>({badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`})),f.insertBefore(ie,d);let I=P(m);l(I,Sn,()=>({badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格组织为事项列表、容量卡或数据看板。`})),m.insertBefore(I,p);let L=P(g);l(L,Sn,()=>({badge:`Composition Ready`,title:`基础场景完整覆盖`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，基础接入方式不需要拆。`})),g.insertBefore(L,h),U(()=>{let t=T(xn,()=>({title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:At,code:En}));N(()=>C(t,v,_))}),U(()=>{let e=T(xn,()=>({title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:t,preview:Cn,code:Dn,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`}));N(()=>C(e,b,y))}),U(()=>{let e=T(xn,()=>({title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:r,preview:wn,code:On,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`}));N(()=>C(e,S,x))}),U(()=>{let e=T(xn,()=>({title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:i,preview:Tn,code:kn,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`}));N(()=>C(e,E,w))}),U(()=>{let e=T(xn,()=>({title:`Cally calendar example`,summary:`基础的 Cally web component 日历壳层仍然原样可用。`,tab:a,preview:Jt,code:An,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`}));N(()=>C(e,O,D))}),U(()=>{let e=T(xn,()=>({title:`Cally date picker example`,summary:`基础的日期输入弹层示例 展示，只把交互说明和布局重新编排。`,tab:o,preview:Yt,code:jn,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`}));N(()=>C(e,te,ee))}),U(()=>{let e=T(xn,()=>({title:`Pikaday input example`,summary:`展示基础 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:s,preview:Xt,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`}));N(()=>C(e,ne,k))});let ae=P(j);l(ae,yn,()=>({rows:ln})),j.insertBefore(ae,A);let R=P(re);return l(R,bn,()=>({rows:un})),re.insertBefore(R,M),n});return T(ue,()=>({children:n}))})(),e=>G(()=>{})))};export{Mn as default};
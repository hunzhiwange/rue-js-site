const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pikaday-BlN5cxGq.js","assets/rolldown-runtime-Dd_uD5pT.js"])))=>i.map(i=>d[i]);
import{i as e}from"./rolldown-runtime-Dd_uD5pT.js";import{$t as t,At as n,C as r,Ct as i,Dn as a,Dt as o,E as s,Et as c,Mt as l,Ot as u,P as d,Pt as f,Q as p,Qt as m,T as h,Tn as g,Tt as _,Vt as v,Zt as y,_n as b,_t as x,at as S,b as ee,bn as C,bt as w,ct as T,dt as E,et as D,gn as O,gt as k,hn as A,in as j,kn as M,kt as N,mn as P,nt as te,on as ne,pn as F,qt as I,rn as L,rt as R,sn as z,st as B,tn as V,tt as re,ut as H,vn as U,vt as W,w as ie,wn as G,x as K,xn as q,xt as J,yn as Y,yt as ae}from"./rue-runtime-HIMg8Lz8.js";import{t as oe}from"./preload-helper-Czpn1I53.js";import{t as se}from"./Code-DpH7u0gk.js";import{t as ce}from"./tabs-C020zIXs.js";import{r as le}from"./SidebarPlaygroundDesign-Cj7sFoQ4.js";import{t as ue}from"./preview-test-gate-CGfD1qFX.js";var de=U(`<button type="button" role="gridcell"><!--rue:text-hole:0--></button>`),fe=U(`<div data-rue-calendar-root="true"><!--rue:text-hole:0--><div><div class="flex items-center justify-between gap-3 px-1"><div class="badge badge-outline badge-sm"><!--rue:text-hole:1--></div><!--rue:text-hole:2--></div><!--rue:text-hole:3--></div></div>`),pe=U(`<div class="flex h-full flex-col gap-2"><div class="flex items-start justify-between gap-2"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div></div>`),me=U(`<div class="flex h-full flex-col gap-2"><div class="flex items-start justify-between gap-2"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div><div><!--rue:text-hole:2--></div></div>`),he=U(`<div class="flex h-full flex-col gap-2"><div class="flex items-center justify-between gap-2"><span class="text-sm font-semibold"><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div></div>`),ge=U(`<div class="flex h-full flex-col gap-2"><div class="flex items-center justify-between gap-2"><span class="text-sm font-semibold"><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div><div><!--rue:text-hole:2--></div></div>`),_e=U(`<input>`),ve=(e,t)=>t?`${e} ${t}`:e,ye=()=>({date:new Map,month:new Map,year:new Map}),be=new Map,xe=new Map,Se=new Map,Ce=new Map,we=new Map,Te=()=>typeof performance<`u`&&typeof performance.now==`function`?performance.now():Date.now(),Ee=(e,t)=>({enabled:e,start:e?Te():0,threshold:t,cellCount:0,customRenderCount:0,cellRenderCount:0,fullCellRenderCount:0,dateCellRenderCount:0,dateFullCellRenderCount:0,monthCellRenderCount:0,monthFullCellRenderCount:0,slowCells:[]}),De=(e,t)=>{e.enabled&&(e.customRenderCount+=1,t===`cellRender`?e.cellRenderCount+=1:t===`fullCellRender`?e.fullCellRenderCount+=1:t===`dateCellRender`?e.dateCellRenderCount+=1:t===`dateFullCellRender`?e.dateFullCellRenderCount+=1:t===`monthCellRender`?e.monthCellRenderCount+=1:e.monthFullCellRenderCount+=1)},Oe=(e,t,n,r)=>{if(!e.enabled)return r();De(e,t);let i=Te(),a=r(),o=Te()-i;return o>=e.threshold&&e.slowCells.push({type:n.type,key:n.key,renderName:t,duration:o,row:n.row,column:n.column}),a},ke=(e,t,n,r)=>{if(!e||!t.enabled)return;let i=Te()-t.start,a={component:`Calendar`,mode:n,phase:r,duration:i,cellCount:t.cellCount,customRenderCount:t.customRenderCount,cellRenderCount:t.cellRenderCount,fullCellRenderCount:t.fullCellRenderCount,dateCellRenderCount:t.dateCellRenderCount,dateFullCellRenderCount:t.dateFullCellRenderCount,monthCellRenderCount:t.monthCellRenderCount,monthFullCellRenderCount:t.monthFullCellRenderCount,slow:i>=t.threshold||t.slowCells.length>0,threshold:t.threshold,slowCells:t.slowCells.slice()},o=()=>e(a);typeof queueMicrotask==`function`?queueMicrotask(o):Promise.resolve().then(o)},Ae=(e,t,n,r,i)=>{let a=`group relative flex min-h-[5.35rem] w-full flex-col rounded-[1.2rem] border px-2.5 py-2.5 text-left transition duration-150 ${e?``:`min-h-[4.7rem] rounded-[1rem] px-2 py-2`}`;return a+=t?` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?` border-base-300/70 bg-base-200/50 text-base-content/35`:r?` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`:` border-base-300/60 bg-base-200/60 text-base-content/55 hover:border-primary/20`,i&&!t&&(a+=` ring-1 ring-primary/20`),a},je=(e,t,n,r)=>{let i=`group relative flex min-h-[6.1rem] w-full flex-col rounded-[1.2rem] border px-3 py-3 text-left transition duration-150 ${e?``:`min-h-[5.5rem] rounded-[1rem] px-2.5 py-2.5`}`;return i+=t?` border-primary bg-primary text-primary-content shadow-md shadow-primary/15`:n?` border-base-300/70 bg-base-200/50 text-base-content/35`:` border-base-300/80 bg-base-100 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-sm`,r&&!t&&(i+=` ring-1 ring-primary/20`),i},Me=(e,t)=>{let n=`text-sm font-semibold ${e.inView?``:`opacity-60`}`.trim(),r=e.isToday?`<span class="badge badge-xs ${e.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${t}</span>`:``;return`<span class="flex items-start justify-between gap-2"><span class="${n}">${e.dayNumber}</span>${r}</span>`},X=e=>`${e??``}`.replace(/[&<>"']/g,e=>{switch(e){case`&`:return`&amp;`;case`<`:return`&lt;`;case`>`:return`&gt;`;case`"`:return`&quot;`;case`'`:return`&#39;`;default:return e}}),Ne=(e,t)=>t?` ${e}`:``,Pe=(e,t)=>t==null||t===!1||typeof t==`function`||typeof t==`object`?``:t===!0?` ${e}`:` ${e}="${X(t)}"`,Fe=e=>Object.entries(e).map(([e,t])=>e===`children`||e===`class`||e===`className`?``:Pe(e,t)).join(``),Ie=e=>`<div data-rue-calendar-managed-cell="${X(e)}" style="display: contents;"></div>`,Le=()=>`<div data-rue-calendar-managed-header="true" style="display: contents;"></div>`,Re=e=>{e&&H(null,e.host,e.anchor)},ze=(e,t,r)=>{let i=e.querySelector(`[data-rue-calendar-managed-header="true"]`);if(!r.hasCustomHeader||!i)return Re(t),null;let a=t;if(!a||a.host!==i){Re(a);let e=(i.ownerDocument??document).createComment(`rue-calendar-managed-header`);i.appendChild(e),a={host:i,anchor:e}}return H(r.customHeaderContent==null?null:n(()=>{let e=x(),t=k(`rue:slot:anchor`);return E(e,t),G(()=>{let n=r.customHeaderContent;M(()=>H(n,e,t))}),e},!0),i,a.anchor),a},Be=(e,t,r,i)=>{let a=i?new Set(i):null,o=a??new Set(r.managedCellContent.keys());for(let i of o){let a=r.managedCellContent.get(i),o=Array.from(e.querySelectorAll(`[data-rue-calendar-managed-cell]`)).find(e=>e.getAttribute(`data-rue-calendar-managed-cell`)===i);if(!a||!o){let e=t.get(i);e&&(H(null,e.host,e.anchor),t.delete(i));continue}let s=t.get(i);if(!s||s.host!==o){s&&H(null,s.host,s.anchor);let e=(o.ownerDocument??document).createComment(`rue-calendar-managed-anchor`);o.appendChild(e),s={host:o,anchor:e},t.set(i,s)}H(a.content==null?null:n(()=>{let e=x(),t=k(`rue:slot:anchor`);return E(e,t),G(()=>{let n=a.content;M(()=>H(n,e,t))}),e},!0),o,s.anchor)}if(!a)for(let[e,n]of Array.from(t.entries()))r.managedCellContent.has(e)||(H(null,n.host,n.anchor),t.delete(e))},Ve=e=>{for(let t of e.values())H(null,t.host,t.anchor);e.clear()},He=e=>{let t=e.fullscreen,n=Fe(e.rest),r=`border-b border-base-300/70 ${t?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,i=t?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,a=e.hasCustomHeader?Le():`<div class="${X(r)}">
      <div>
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55">Rue Calendar</div>
        <div class="mt-1 text-xl font-semibold leading-tight">${X(e.headerTitle)}</div>
        <div class="mt-1 text-xs text-base-content/60">${X(e.todayLabel)}</div>
      </div>
      <div class="flex flex-wrap items-center gap-2 lg:justify-end">
        <div class="join">
          <button type="button" class="btn btn-sm join-item" aria-label="Previous" data-rue-calendar-action="previous"${Ne(`disabled`,e.previousDisabled)}><span aria-hidden="true">&lt;</span></button>
          <button type="button" class="btn btn-sm join-item btn-ghost" data-rue-calendar-action="today"${Ne(`disabled`,e.todayDisabled)}>${X(e.todayButtonLabel)}</button>
          <button type="button" class="btn btn-sm join-item" aria-label="Next" data-rue-calendar-action="next"${Ne(`disabled`,e.nextDisabled)}><span aria-hidden="true">&gt;</span></button>
        </div>
        <select class="select select-sm min-w-24" data-rue-calendar-select="year">
          ${e.yearOptions.map(t=>`<option value="${t.value}"${Ne(`selected`,t.value===e.currentValue.getFullYear())}${Ne(`disabled`,t.disabled)}>${t.value}</option>`).join(``)}
        </select>
        <select class="select select-sm min-w-24" data-rue-calendar-select="month"${Ne(`disabled`,e.currentMode===`year`)}>
          ${e.monthOptions.map(t=>`<option value="${t.value}"${Ne(`selected`,t.value===e.currentValue.getMonth())}${Ne(`disabled`,t.disabled)}>${X(t.label)}</option>`).join(``)}
        </select>
        <div class="join">
          <button type="button" data-rue-calendar-mode-switch="month" data-rue-calendar-action="mode-month" class="btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}">${X(e.monthButtonLabel)}</button>
          <button type="button" data-rue-calendar-mode-switch="year" data-rue-calendar-action="mode-year" class="btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}">${X(e.yearButtonLabel)}</button>
        </div>
      </div>
    </div>`,o=e.showWeek?`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${X(e.weekButtonLabel)}</div>`:``,s=e.weekdayLabels.map(e=>`<div class="px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45">${X(e)}</div>`).join(``),c=e.currentMode===`month`?`<div class="space-y-2">
          <div class="${X(e.rowClassName)}">${o}${s}</div>
          <div role="grid" class="space-y-2">
            ${e.dateRows.map(n=>`<div role="row" class="${X(e.rowClassName)}">
                    ${e.showWeek?`<div class="flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60" data-rue-calendar-week="${n.week}">${n.week}</div>`:``}
                    ${n.cells.map(n=>{let r=e.dateCellStates.get(n.key),i=r.isToday?` aria-current="date"`:``;return`<button
                          type="button"
                          role="gridcell"
                          data-rue-calendar-cell="${X(n.key)}"
                          data-rue-calendar-in-view="${r.inView?`true`:`false`}"
                          aria-pressed="${r.selected?`true`:`false`}"${i}
                          ${Ne(`disabled`,r.disabled)}
                          class="${X(Ae(t,r.selected,r.disabled,r.inView,r.isToday))}"
                        >${e.hasDateCustomRender?Ie(n.key):Me(r,e.todayMarkerLabel)}</button>`}).join(``)}
                  </div>`).join(``)}
          </div>
        </div>`:`<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          ${e.monthOptions.map(n=>{let r=Q(e.currentValue.getFullYear(),n.value,1),i=tt(r,e.currentValue),a=tt(r,Ge(new Date)),o=n.disabled===!0,s=`${e.currentValue.getFullYear()}-${`${n.value+1}`.padStart(2,`0`)}`;return`<button
                type="button"
                data-rue-calendar-month="${s}"
                aria-pressed="${i?`true`:`false`}"
                ${Ne(`disabled`,o)}
                class="${X(je(t,i,o,a))}"
              >
                ${e.hasMonthCustomRender?Ie(s):`<span class="flex items-center justify-between gap-2">
                        <span class="text-sm font-semibold">${X(n.label)}</span>
                        ${a?`<span class="badge badge-xs ${i?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}">${X(e.todayMarkerLabel)}</span>`:``}
                      </span>`}
              </button>`}).join(``)}
        </div>`;return`<div${n} data-rue-calendar-root="true" data-rue-calendar-mode="${e.currentMode}" class="${X(e.rootClassName)}">
    ${a}
    <div class="${X(i)}">
      <div class="flex items-center justify-between gap-3 px-1">
        <div class="badge badge-outline badge-sm">${X(e.viewLabel)}</div>
        ${e.showWeek&&e.currentMode===`month`?`<div class="badge badge-soft badge-sm">${X(e.weekButtonLabel)}</div>`:``}
      </div>
      ${c}
    </div>
  </div>`},Ue=e=>{let{fullscreen:t,__rue_phase2_fullscreen:c}=C(`useSetup:0:0`,()=>{let t=d(()=>e.fullscreen);return t.get(),{fullscreen:t,__rue_phase2_fullscreen:t}});return v(Object.assign(c=>{let l=fe().content.cloneNode(!0).firstChild,u=l,d=l.childNodes[1],h=l.childNodes[0],g=h.parentNode,_=l.childNodes[1].childNodes[0].childNodes[0].childNodes[0],y=_.parentNode,C=l.childNodes[1].childNodes[0].childNodes[1],w=C.parentNode,T=l.childNodes[1].childNodes[1],D=T.parentNode;f(u,()=>e.rest,[`data-rue-calendar-root`,`data-rue-calendar-mode`,`className`,`__rue_static_template_id__`]),u.setAttribute(`data-rue-calendar-root`,`true`);let A;G(()=>{let t=e.currentMode;Object.is(A,t)||(A=t,t==null||t===!1?u.removeAttribute(`data-rue-calendar-mode`):u.setAttribute(`data-rue-calendar-mode`,String(t)))});let j;G(()=>{let t=e.rootClassName,n=t==null?``:String(t);Object.is(j,n)||(j=n,u.className=n)});let N;G(()=>{let e=t.get()?`space-y-3 px-4 py-4`:`space-y-3 px-3 py-3`,n=e==null?``:String(e);Object.is(N,n)||(N=n,d.className=n)}),te(g,h,()=>e.hasCustomHeader?{__rue_compiled_branch_key:!0,create:()=>v(Object.assign(t=>{let n=b(typeof e.customHeaderContent==`string`||typeof e.customHeaderContent==`number`||typeof e.customHeaderContent==`bigint`?e.customHeaderContent:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(n=>{let i=O(`div`,n),c;G(()=>{let e=`border-b border-base-300/70 ${t.get()?`flex flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between`:`flex flex-col gap-3 px-3 py-3`}`,n=e==null?``:String(e);Object.is(c,n)||(c=n,i.className=n)});let l=O(`div`,i);F(i,l);let u=O(`div`,l);F(l,u),u.className=`text-xs font-semibold uppercase tracking-[0.24em] text-base-content/55`,F(u,b(`Rue Calendar`));let d=O(`div`,l);F(l,d),d.className=`mt-1 text-xl font-semibold leading-tight`;let f=b(``);F(d,f),q(f,()=>e.headerTitle);let p=O(`div`,l);F(l,p),p.className=`mt-1 text-xs text-base-content/60`;let m=b(``);F(p,m),q(m,()=>e.todayLabel);let h=O(`div`,i);F(i,h),h.className=`flex flex-wrap items-center gap-2 lg:justify-end`;let g=O(`div`,h);F(h,g),g.className=`join`;let _=O(`button`,g);F(g,_),_.setAttribute(`type`,`button`),_.className=`btn btn-sm join-item`,_.setAttribute(`aria-label`,`Previous`);let y;G(()=>{let t=!!e.previousDisabled;Object.is(y,t)||(y=t,_.disabled=t)});let x=t=>{let n=e.onPrevious;typeof n==`function`&&n(t)};_.addEventListener(`click`,x),a(()=>_.removeEventListener(`click`,x));let C=O(`span`,_);F(_,C),C.setAttribute(`aria-hidden`,`true`),F(C,b(`<`));let w=O(`button`,g);F(g,w),w.setAttribute(`type`,`button`),w.className=`btn btn-sm join-item btn-ghost`;let T;G(()=>{let t=!!e.todayDisabled;Object.is(T,t)||(T=t,w.disabled=t)});let E=t=>{let n=e.onToday;typeof n==`function`&&n(t)};w.addEventListener(`click`,E),a(()=>w.removeEventListener(`click`,E));let D=b(``);F(w,D),q(D,()=>e.todayButtonLabel);let k=O(`button`,g);F(g,k),k.setAttribute(`type`,`button`),k.className=`btn btn-sm join-item`,k.setAttribute(`aria-label`,`Next`);let A;G(()=>{let t=!!e.nextDisabled;Object.is(A,t)||(A=t,k.disabled=t)});let j=t=>{let n=e.onNext;typeof n==`function`&&n(t)};k.addEventListener(`click`,j),a(()=>k.removeEventListener(`click`,j));let M=O(`span`,k);F(k,M),M.setAttribute(`aria-hidden`,`true`),F(M,b(`>`));let N=O(`select`,h);F(h,N),N.className=`select select-sm min-w-24`;let te;G(()=>{let t=e.currentValue.getFullYear(),n=t==null?``:String(t);Object.is(te,n)||(te=n,o(N,n))});let ne=t=>{let n=t=>e.onYearChange(Number(t.currentTarget.value));typeof n==`function`&&n(t)};N.addEventListener(`change`,ne),a(()=>N.removeEventListener(`change`,ne));let I=P(`rue:list:end`);F(N,I);let L=[];G(()=>{let t=e.yearOptions||[];L=ie(N,I,L,t,(e,t)=>e.value,(e,t)=>{let n=S(e);return r((e,t,r)=>s(e,r,()=>v(Object.assign(e=>{let t=O(`option`,e),r;G(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,o(t,i))});let i;G(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)});let a=b(``);return F(t,a),q(a,()=>n.get().value),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),a(()=>ee(L));let R=O(`select`,h);F(h,R),R.className=`select select-sm min-w-24`;let z;G(()=>{let t=e.currentValue.getMonth(),n=t==null?``:String(t);Object.is(z,n)||(z=n,o(R,n))});let B;G(()=>{let t=e.currentMode===`year`;Object.is(B,t)||(B=t,R.disabled=t)});let V=t=>{let n=t=>e.onMonthChange(Number(t.currentTarget.value));typeof n==`function`&&n(t)};R.addEventListener(`change`,V),a(()=>R.removeEventListener(`change`,V));let re=P(`rue:list:end`);F(R,re);let H=[];G(()=>{let t=e.monthOptions||[];H=ie(R,re,H,t,(e,t)=>e.value,(e,t)=>{let n=S(e);return r((e,t,r)=>s(e,r,()=>v(Object.assign(e=>{let t=O(`option`,e),r;G(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,o(t,i))});let i;G(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)});let a=b(``);return F(t,a),q(a,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),a(()=>ee(H));let U=O(`div`,h);F(h,U),U.className=`join`;let W=O(`button`,U);F(U,W),W.setAttribute(`type`,`button`),W.setAttribute(`data-rue-calendar-mode-switch`,`month`);let K;G(()=>{let t=`btn btn-sm join-item ${e.currentMode===`month`?`btn-primary`:`btn-ghost`}`,n=t==null?``:String(t);Object.is(K,n)||(K=n,W.className=n)});let J=t=>{let n=e.onModeMonth;typeof n==`function`&&n(t)};W.addEventListener(`click`,J),a(()=>W.removeEventListener(`click`,J));let Y=b(``);F(W,Y),q(Y,()=>e.monthButtonLabel);let ae=O(`button`,U);F(U,ae),ae.setAttribute(`type`,`button`),ae.setAttribute(`data-rue-calendar-mode-switch`,`year`);let oe;G(()=>{let t=`btn btn-sm join-item ${e.currentMode===`year`?`btn-primary`:`btn-ghost`}`,n=t==null?``:String(t);Object.is(oe,n)||(oe=n,ae.className=n)});let se=t=>{let n=e.onModeYear;typeof n==`function`&&n(t)};ae.addEventListener(`click`,se),a(()=>ae.removeEventListener(`click`,se));let ce=b(``);return F(ae,ce),q(ce,()=>e.yearButtonLabel),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))});let ne=b(``);return y.insertBefore(ne,_),y.removeChild(_),q(ne,()=>e.viewLabel),te(w,C,()=>e.showWeek&&e.currentMode===`month`?{__rue_compiled_branch_key:!0,create:()=>v(Object.assign(t=>{let n=O(`div`,t);n.className=`badge badge-soft badge-sm`;let r=b(``);return F(n,r),q(r,()=>e.weekButtonLabel),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),te(D,T,()=>e.currentMode===`month`?{__rue_compiled_branch_key:!0,create:()=>v(Object.assign(o=>{let c=O(`div`,o);c.className=`space-y-2`;let l=O(`div`,c);F(c,l);let u;G(()=>{let t=e.rowClassName,n=t==null?``:String(t);Object.is(u,n)||(u=n,l.className=n)}),re(()=>e.showWeek?{__rue_compiled_branch_key:!0,create:()=>v(Object.assign(t=>{let n=O(`div`,t);n.className=`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`;let r=b(``);return F(n,r),q(r,()=>e.weekButtonLabel),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(l);let d=P(`rue:list:end`);F(l,d);let f=[];G(()=>{let t=e.weekdayLabels||[];f=ie(l,d,f,t,(e,t)=>e,(e,t)=>{let n=S(e);return r((e,t,r)=>s(e,r,()=>v(Object.assign(e=>{let t=O(`div`,e);t.className=`px-2 py-1 text-center text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/45`;let r=b(``);return F(t,r),q(r,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),a(()=>ee(f));let h=O(`div`,c);F(c,h),h.setAttribute(`role`,`grid`),h.className=`space-y-2`;let g=P(`rue:list:end`);F(h,g);let _=[];return G(()=>{let a=e.dateRows||[];_=ie(h,g,_,a,(e,t)=>e.key,(a,o)=>{let c=S(a);return r((r,a,o)=>s(r,o,()=>v(Object.assign(r=>{let a=O(`div`,r);a.setAttribute(`role`,`row`);let o;G(()=>{let t=e.rowClassName,n=t==null?``:String(t);Object.is(o,n)||(o=n,a.className=n)}),re(()=>e.showWeek?{__rue_compiled_branch_key:!0,create:()=>v(Object.assign(e=>{let t=O(`div`,e);t.className=`flex items-center justify-center rounded-[1rem] border border-base-300/70 bg-base-200/60 text-sm font-semibold text-base-content/60`;let n;G(()=>{let e=c.get().week;Object.is(n,e)||(n=e,e==null||e===!1?t.removeAttribute(`data-rue-calendar-week`):t.setAttribute(`data-rue-calendar-week`,String(e)))});let r=b(``);return F(t,r),q(r,()=>c.get().week),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(a);let s=P(`rue:compiled-slot`);return F(a,s),G(()=>{let r=c.get().cells.map(r=>{let a=e.dateCellStates.get(r.key);return n(o=>{let s=de().content.cloneNode(!0).firstChild,c=s,l=s.childNodes[0],u=l.parentNode;J(c,`type`,`button`),J(c,`role`,`gridcell`),G(()=>{J(c,`data-rue-calendar-cell`,String(r.key))}),G(()=>{J(c,`data-rue-calendar-in-view`,String(a.inView?`true`:`false`))}),G(()=>{J(c,`aria-pressed`,String(a.selected?`true`:`false`))}),G(()=>{J(c,`aria-current`,String(a.isToday?`date`:void 0))}),G(()=>{i(c,a.disabled)}),G(()=>{p(c,Ae(t.get(),a.selected,a.disabled,a.inView,a.isToday))});let d=t=>{let n=()=>e.onDateSelect(r.date);typeof n==`function`&&n(t)};return c.addEventListener(`click`,d),m(()=>c.removeEventListener(`click`,d)),G(()=>{let t=e.hasDateCustomRender?e.managedCellContent.get(r.key)?.content??null:n(()=>{let t=x(),r=W(`span`,t);E(t,r),p(r,`flex items-start justify-between gap-2`);let i=W(`span`,r);E(r,i),G(()=>{p(i,`text-sm font-semibold ${a.inView?``:`opacity-60`}`)});let o=k(`rue:slot:anchor`);E(i,o),G(()=>{let e=a.dayNumber;M(()=>H(e,i,o))});let s=k(`rue:slot:anchor`);return E(r,s),G(()=>{let t=a.isToday?n(()=>{let t=x(),n=W(`span`,t);E(t,n),G(()=>{p(n,`badge badge-xs ${a.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`)});let r=k(`rue:slot:anchor`);return E(n,r),G(()=>{let t=e.todayMarkerLabel;M(()=>H(t,n,r))}),t},!0):``;M(()=>H(t,r,s))}),t},!0);M(()=>H(t,u,l))}),s})});M(()=>H(r,a,s))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{a=e,o=t,c.set(e)})})}),a(()=>ee(_)),{__rue_compiled_host:c,__rue_compiled_roots:[c]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(n=>{let i=O(`div`,n);i.className=`grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4`;let o=P(`rue:list:end`);F(i,o);let c=[];return G(()=>{let n=e.monthOptions||[];c=ie(o.parentNode,o,c,n,(t,n)=>`${e.currentValue.getFullYear()}-${t.value}`,(n,i)=>{let o=Q(e.currentValue.getFullYear(),n.value,1),c=tt(o,e.currentValue),l=tt(o,Ge(new Date)),u=n.disabled===!0,d=S(n);return r((n,r,i)=>s(n,i,()=>v(Object.assign(n=>{let r=O(`button`,n);r.setAttribute(`type`,`button`);let i;G(()=>{let t=`${e.currentValue.getFullYear()}-${`${d.get().value+1}`.padStart(2,`0`)}`;Object.is(i,t)||(i=t,t==null||t===!1?r.removeAttribute(`data-rue-calendar-month`):r.setAttribute(`data-rue-calendar-month`,String(t)))});let s;G(()=>{let e=c?`true`:`false`;Object.is(s,e)||(s=e,e==null||e===!1?r.removeAttribute(`aria-pressed`):r.setAttribute(`aria-pressed`,String(e)))});let f;G(()=>{let e=!!u;Object.is(f,e)||(f=e,r.disabled=e)});let p;G(()=>{let e=je(t.get(),c,u,l),n=e==null?``:String(e);Object.is(p,n)||(p=n,r.className=n)});let m=t=>{let n=()=>e.onMonthSelect(o);typeof n==`function`&&n(t)};return r.addEventListener(`click`,m),a(()=>r.removeEventListener(`click`,m)),re(()=>e.hasMonthCustomRender?{__rue_compiled_branch_key:!0,create:()=>re(()=>{let t=e.managedCellContent.get(`${e.currentValue.getFullYear()}-${`${d.get().value+1}`.padStart(2,`0`)}`)?.content;return t==null?{__rue_compiled_branch_key:null,create:()=>v(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:t,create:()=>v(Object.assign(e=>{let n=b(typeof t==`string`||typeof t==`number`||typeof t==`bigint`?t:``);return{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}})}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(t=>{let n=O(`span`,t);n.className=`flex items-center justify-between gap-2`;let r=O(`span`,n);F(n,r),r.className=`text-sm font-semibold`;let i=b(``);return F(r,i),q(i,()=>d.get().label),re(()=>l?{__rue_compiled_branch_key:!0,create:()=>v(Object.assign(t=>{let n=O(`span`,t),r;G(()=>{let e=`badge badge-xs ${c?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`,t=e==null?``:String(e);Object.is(r,t)||(r=t,n.className=t)});let i=b(``);return F(n,i),q(i,()=>e.todayMarkerLabel),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(n),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}).__rue_compiled_mount(r),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0}))),(e,t)=>{n=e,i=t,d.set(e)})})}),a(()=>ee(c)),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:l,__rue_compiled_roots:[l]}},{__rue_compiled_explicit_roots:!0}))},We=e=>typeof e==`number`&&e>=0&&e<=6?e:1,Z=e=>new Date(e.getTime()),Q=(e,t,n)=>{let r=new Date(e,t,n);return r.setHours(12,0,0,0),r},Ge=e=>{let t=Z(e);return t.setHours(0,0,0,0),t},Ke=e=>Q(e.getFullYear(),e.getMonth(),1),qe=e=>Q(e.getFullYear(),e.getMonth()+1,0),Je=e=>Q(e.getFullYear(),0,1),Ye=e=>Q(e.getFullYear(),11,31),Xe=(e,t)=>Q(e.getFullYear(),e.getMonth(),e.getDate()+t),Ze=e=>e instanceof Date&&!Number.isNaN(e.getTime()),Qe=(e,t=new Date)=>{if(Ze(e))return Z(e);if(typeof e==`string`||typeof e==`number`){let t=new Date(e);if(Ze(t))return t}return Z(t)},$e=e=>{if(!e)return null;let t=Ge(Qe(e[0])),n=Ge(Qe(e[1]));return t.getTime()<=n.getTime()?{start:t,end:n}:{start:n,end:t}},et=(e,t)=>e.getFullYear()===t.getFullYear(),tt=(e,t)=>et(e,t)&&e.getMonth()===t.getMonth(),nt=(e,t)=>tt(e,t)&&e.getDate()===t.getDate(),rt=(e,t)=>{let n=Q(e.getFullYear(),e.getMonth()+t,1),r=qe(n).getDate();return Q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},it=(e,t)=>{let n=Q(e.getFullYear()+t,e.getMonth(),1),r=qe(n).getDate();return Q(n.getFullYear(),n.getMonth(),Math.min(e.getDate(),r))},at=(e,t)=>it(e,t-e.getFullYear()),ot=(e,t)=>rt(e,t-e.getMonth()),st=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,ct=(e,t,n)=>{let r=Ge(e);return t&&(r.getTime()<t.start.getTime()||r.getTime()>t.end.getTime())?!1:!n?.(Z(r))},lt=(e,t,n,r)=>{let i=Ke(e),a=qe(e);if(t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime()))return!1;let o=i;for(;o.getTime()<=a.getTime();){if(r?r(o):ct(o,t,n))return!0;o=Xe(o,1)}return!1},ut=(e,t,n,r)=>{let i=Je(e),a=Ye(e);return t&&(a.getTime()<t.start.getTime()||i.getTime()>t.end.getTime())?!1:Array.from({length:12},(t,n)=>Q(e.getFullYear(),n,1)).some(e=>r?r(e):lt(e,t,n))},dt=e=>{let t=Ge(e),n=Q(Xe(t,3-(t.getDay()+6)%7).getFullYear(),0,4),r=Xe(n,-((n.getDay()+6)%7));return 1+Math.round((t.getTime()-r.getTime())/6048e5)},ft=(e,t)=>{let n=`${e}:${t}`,r=be.get(n);if(r)return r;let i=new Intl.DateTimeFormat(e,{weekday:`short`}),a=Q(2026,2,1),o=Array.from({length:7},(e,n)=>i.format(Xe(a,(t+n)%7)));return be.set(n,o),o},pt=e=>{let t=xe.get(e);if(t)return t;let n=new Intl.DateTimeFormat(e,{month:`short`}),r=Array.from({length:12},(e,t)=>n.format(Q(2026,t,1)));return xe.set(e,r),r},mt=(e,t)=>{let n=e.getFullYear();if(!t)return Array.from({length:13},(e,t)=>n-6+t);let r=t.start.getFullYear(),i=t.end.getFullYear();if(i-r<=24)return Array.from({length:i-r+1},(e,t)=>r+t);let a=Math.max(r,n-6),o=Math.min(i,n+6);return Array.from({length:o-a+1},(e,t)=>a+t)},ht=(e,t,n,r,i)=>{let a=pt(e);return Array.from({length:12},(e,o)=>{let s=Q(t.getFullYear(),o,1);return{value:o,label:a[o],disabled:!(i?i(s):lt(s,n,r))}})},gt=(e,t)=>{let n=Ke(e),r=Xe(n,-((n.getDay()-t+7)%7));return Array.from({length:6},(t,n)=>{let i=Xe(r,n*7);return{key:`${e.getFullYear()}-${e.getMonth()}-${n}`,week:dt(i),cells:Array.from({length:7},(t,n)=>{let r=Xe(i,n);return{key:st(r),date:r,inView:r.getMonth()===e.getMonth()}})}})},_t=e=>{let t=Se.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`,month:`long`}),Se.set(e,t)),t},vt=e=>{let t=Ce.get(e);return t||(t=new Intl.DateTimeFormat(e,{year:`numeric`}),Ce.set(e,t)),t},yt=e=>{let t=we.get(e);return t||(t=new Intl.DateTimeFormat(e,{weekday:`long`,month:`long`,day:`numeric`}),we.set(e,t)),t},bt=ne(e=>{ne();let{value:r,defaultValue:i,mode:a,fullscreen:o,showWeek:s,locale:c,weekStartsOn:l,validRange:u,disabledDate:f,dateFullCellRender:m,dateCellRender:h,monthFullCellRender:g,monthCellRender:_,cellRender:v,fullCellRender:y,headerRender:b,className:S,onRenderProfile:ee,renderProfileThreshold:C,onChange:w,onPanelChange:T,onSelect:D,...O}=e,A=Ee(!!e.onRenderProfile,e.renderProfileThreshold===void 0?16:e.renderProfileThreshold),N=z(`useSetup:1:3`,()=>j(()=>({value:z(`ref:1:1`,()=>V(Qe(e.value??e.defaultValue??new Date))),mode:z(`ref:1:2`,()=>V(e.mode??`month`))}))),P=N.value,te=N.mode,F=z(`useRef:1:4`,()=>L()),I=z(`useRef:1:5`,()=>L()),R=z(`useRef:1:6`,()=>L()),B=z(`useRef:1:7`,()=>L(null)),re=z(`useRef:1:8`,()=>L(null)),U=z(`useRef:1:9`,()=>L(`__none__`)),ie=d(()=>e.value===void 0?P.value:Qe(e.value,P.value));ie.get();let K=ie,q=d(()=>e.mode??te.value);q.get();let J=q,Y=Ge(new Date),ae=d(()=>$e(e.validRange));ae.get();let oe=ae,se=!!oe.get()||!!e.disabledDate,ce=d(()=>e.locale??(typeof navigator<`u`&&navigator.language?navigator.language:`zh-CN`));ce.get();let le=ce,ue=d(()=>We(e.weekStartsOn));ue.get();let de=ue,fe=d(()=>le.get().toLowerCase().startsWith(`zh`));fe.get();let _e=fe;F.current||=ye().date,I.current||=ye().month,R.current||=ye().year;let be=d(()=>oe.get()?oe.get().start.getTime():null);be.get();let xe=be,Se=d(()=>oe.get()?oe.get().end.getTime():null);Se.get();let Ce=Se,we=d(()=>e.disabledDate?e.disabledDate.toString():`__none__`);we.get();let Te=we;(B.current!==xe.get()||re.current!==Ce.get()||U.current!==Te.get())&&(F.current.clear(),I.current.clear(),R.current.clear(),B.current=xe.get(),re.current=Ce.get(),U.current=Te.get());let De=t=>{if(!se)return!0;let n=st(Ge(t)),r=F.current?.get(n);if(r!==void 0)return r;let i=ct(t,oe.get(),e.disabledDate);return F.current?.set(n,i),i},Ae=t=>{if(!se)return!0;let n=`${t.getFullYear()}-${t.getMonth()}`,r=I.current?.get(n);if(r!==void 0)return r;let i=lt(t,oe.get(),e.disabledDate,De);return I.current?.set(n,i),i},je=t=>{if(!se)return!0;let n=`${t.getFullYear()}`,r=R.current?.get(n);if(r!==void 0)return r;let i=ut(t,oe.get(),e.disabledDate,Ae);return R.current?.set(n,i),i},Me=d(()=>J.get()===`month`);Me.get();let X=Me,Ne=d(()=>X.get()?ft(le.get(),de.get()):[]);Ne.get();let Pe=Ne,Fe=d(()=>X.get()?gt(K.get(),de.get()):[]);Fe.get();let Ie=Fe;A.cellCount=X.get()?Ie.get().reduce((e,t)=>e+t.cells.length,0):12;let Le=d(()=>mt(K.get(),oe.get()));Le.get();let Ke=Le,qe=d(()=>ht(le.get(),K.get(),se?oe.get():null,se?e.disabledDate:void 0,se?Ae:void 0));qe.get();let Je=qe,Ye=d(()=>ve(`overflow-hidden border border-base-300 bg-gradient-to-b from-base-100 via-base-100 to-base-200/70 text-base-content shadow-sm ${e.fullscreen===void 0||e.fullscreen?`rounded-[1.75rem]`:`w-full max-w-[24rem] rounded-[1.5rem]`}`,e.className));Ye.get();let Xe=Ye,Ze=d(()=>e.showWeek?`grid grid-cols-[3.25rem_repeat(7,minmax(0,1fr))] gap-2`:`grid grid-cols-7 gap-2`);Ze.get();let dt=Ze,pt=d(()=>J.get()===`month`?_t(le.get()).format(K.get()):vt(le.get()).format(K.get()));pt.get();let bt=pt,xt=d(()=>yt(le.get()).format(Y));xt.get();let St=xt,Ct=d(()=>_e.get()?`今天`:`Today`);Ct.get();let wt=Ct,Tt=d(()=>_e.get()?`月`:`Month`);Tt.get();let Et=Tt,Dt=d(()=>_e.get()?`年`:`Year`);Dt.get();let Ot=Dt,kt=d(()=>_e.get()?`周`:`Week`);kt.get();let At=kt,jt=d(()=>_e.get()?`今`:`Today`);jt.get();let Mt=jt,Nt=d(()=>J.get()===`month`?_e.get()?`月视图`:`Month view`:_e.get()?`年视图`:`Year view`);Nt.get();let Pt=Nt,Ft=d(()=>se?J.get()===`month`?!Ae(rt(K.get(),-1)):!je(it(K.get(),-1)):!1);Ft.get();let It=Ft,Lt=d(()=>se?J.get()===`month`?!Ae(rt(K.get(),1)):!je(it(K.get(),1)):!1);Lt.get();let Rt=Lt,zt=se?!De(Y):!1,Bt=!!(e.cellRender||e.fullCellRender||e.dateCellRender||e.dateFullCellRender),Vt=!!(e.cellRender||e.fullCellRender||e.monthCellRender||e.monthFullCellRender),Ht=(t,n)=>{let r=Ge(Qe(t,K.get())),i=!nt(r,K.get()),a=J.get()===`month`?!tt(r,K.get()):!et(r,K.get());e.value===void 0&&(P.value=r),i&&e.onChange?.(Z(r)),a&&e.onPanelChange?.(Z(r),J.get()),e.onSelect?.(Z(r),{source:n})},Ut=t=>{t!==J.get()&&(e.mode===void 0&&(te.value=t),e.onPanelChange?.(Z(K.get()),t))},Wt=d(()=>({value:Z(K.get()),type:J.get(),yearOptions:Ke.get(),monthOptions:Je.get(),onChange:e=>Ht(e,`customize`),onTypeChange:Ut,onYearChange:e=>Ht(at(K.get(),e),`customize`),onMonthChange:e=>Ht(ot(K.get(),e),`customize`)}));Wt.get();let Gt=Wt,Kt=!!e.headerRender,qt=d(()=>e.headerRender?e.headerRender(Gt.get()):null);qt.get();let Jt=qt,$=z(`useSetup:1:10`,()=>j(()=>({host:null,lastSnapshot:null,managedContentMounts:new Map,managedHeaderMount:null,eventsAttached:!1,cleanupVersion:0}))),Yt=()=>{!$.host||$.eventsAttached||($.host.addEventListener(`click`,e=>{let t=$.lastSnapshot,n=e.target?.closest(`[data-rue-calendar-action], [data-rue-calendar-cell], [data-rue-calendar-month]`);if(!t||!n||!$.host?.contains(n)||n.disabled)return;let r=n.getAttribute(`data-rue-calendar-action`);if(r===`previous`){t.onPrevious();return}if(r===`today`){t.onToday();return}if(r===`next`){t.onNext();return}if(r===`mode-month`){t.onModeMonth();return}if(r===`mode-year`){t.onModeYear();return}let i=n.getAttribute(`data-rue-calendar-cell`);if(i){t.onDateSelect(Qe(i,t.currentValue));return}let a=n.getAttribute(`data-rue-calendar-month`);if(a){let[e,n]=a.split(`-`).map(e=>Number(e));Number.isFinite(e)&&Number.isFinite(n)&&t.onMonthSelect(Q(e,n-1,1))}}),$.host.addEventListener(`change`,e=>{let t=$.lastSnapshot,n=e.target;if(!t||!n||!$.host?.contains(n))return;let r=n.getAttribute(`data-rue-calendar-select`),i=Number(n.value);Number.isFinite(i)&&(r===`year`?t.onYearChange(i):r===`month`&&t.onMonthChange(i))}),$.eventsAttached=!0)},Xt=new Map;if(X.get())for(let e of Ie.get())for(let t of e.cells)Xt.set(t.key,{key:t.key,dayNumber:t.date.getDate(),inView:t.inView,selected:nt(t.date,K.get()),isToday:nt(t.date,Y),disabled:!De(t.date)});let Zt=d(()=>Ke.get().map(e=>({value:e,disabled:!je(Q(e,K.get().getMonth(),1))})));Zt.get();let Qt=Zt,$t=new Map;X.get()&&Bt?Ie.get().forEach((t,r)=>{t.cells.forEach((i,a)=>{let o=Xt.get(i.key),s={type:`date`,key:i.key,row:r,column:a},c=n(()=>{let e=x(),t=pe().content.cloneNode(!0),r=t.firstChild,a=r.childNodes[0].childNodes[0],s=r.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode,l=r.childNodes[0].childNodes[1],u=l.parentNode;return e.appendChild(t),G(()=>{p(a,`text-sm font-semibold ${i.inView?``:`opacity-60`}`)}),G(()=>{let e=i.date.getDate();M(()=>H(e,c,s))}),G(()=>{let e=o.isToday?n(()=>{let e=x(),t=W(`span`,e);E(e,t),G(()=>{p(t,`badge badge-xs ${o.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`)});let n=k(`rue:slot:anchor`);return E(t,n),G(()=>{let e=Mt.get();M(()=>H(e,t,n))}),e},!0):``;M(()=>H(e,u,l))}),e},!0),l=e.cellRender?Oe(A,`cellRender`,s,()=>e.cellRender(Z(i.date),{type:`date`,originNode:c,today:Z(Y),selected:o.selected,isToday:o.isToday,inView:i.inView,disabled:o.disabled,row:r,column:a,week:t.week})):void 0;l==null&&e.dateCellRender&&(l=Oe(A,`dateCellRender`,s,()=>e.dateCellRender(Z(i.date))));let u=n(()=>{let e=x(),t=me().content.cloneNode(!0),r=t.firstChild,a=r.childNodes[0].childNodes[0],s=r.childNodes[1],c=r.childNodes[0].childNodes[0].childNodes[0],u=c.parentNode,d=r.childNodes[0].childNodes[1],f=d.parentNode,m=r.childNodes[1].childNodes[0],h=m.parentNode;return e.appendChild(t),G(()=>{p(a,`text-sm font-semibold ${i.inView?``:`opacity-60`}`)}),G(()=>{p(s,`min-h-[1.85rem] text-[0.68rem] leading-4 ${o.selected?`opacity-90`:`opacity-75`}`)}),G(()=>{let e=i.date.getDate();M(()=>H(e,u,c))}),G(()=>{let e=o.isToday?n(()=>{let e=x(),t=W(`span`,e);E(e,t),G(()=>{p(t,`badge badge-xs ${o.selected?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`)});let n=k(`rue:slot:anchor`);return E(t,n),G(()=>{let e=Mt.get();M(()=>H(e,t,n))}),e},!0):``;M(()=>H(e,f,d))}),G(()=>{let e=l;M(()=>H(e,h,m))}),e},!0),d=e.fullCellRender?Oe(A,`fullCellRender`,s,()=>e.fullCellRender(Z(i.date),{type:`date`,originNode:u,today:Z(Y),selected:o.selected,isToday:o.isToday,inView:i.inView,disabled:o.disabled,row:r,column:a,week:t.week})):void 0;d==null&&e.dateFullCellRender&&(d=Oe(A,`dateFullCellRender`,s,()=>e.dateFullCellRender(Z(i.date)))),$t.set(i.key,{key:i.key,type:`date`,content:d??u})})}):!X.get()&&Vt&&Je.get().forEach((t,r)=>{let i=Q(K.get().getFullYear(),t.value,1),a=tt(i,K.get()),o=tt(i,Y),s=t.disabled===!0,c=`${K.get().getFullYear()}-${`${t.value+1}`.padStart(2,`0`)}`,l={type:`month`,key:c,row:Math.floor(r/4),column:r%4},u=n(()=>{let e=x(),r=he().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[0].childNodes[0].childNodes[0],c=s.parentNode,l=i.childNodes[0].childNodes[1],u=l.parentNode;return e.appendChild(r),G(()=>{let e=t.label;M(()=>H(e,c,s))}),G(()=>{let e=o?n(()=>{let e=x(),t=W(`span`,e);E(e,t),G(()=>{p(t,`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`)});let n=k(`rue:slot:anchor`);return E(t,n),G(()=>{let e=Mt.get();M(()=>H(e,t,n))}),e},!0):``;M(()=>H(e,u,l))}),e},!0),d=e.cellRender?Oe(A,`cellRender`,l,()=>e.cellRender(Z(i),{type:`month`,originNode:u,today:Z(Y),selected:a,isToday:o,inView:!0,disabled:s,row:Math.floor(r/4),column:r%4})):void 0;d==null&&e.monthCellRender&&(d=Oe(A,`monthCellRender`,l,()=>e.monthCellRender(Z(i))));let f=n(()=>{let e=x(),r=ge().content.cloneNode(!0),i=r.firstChild,s=i.childNodes[1],c=i.childNodes[0].childNodes[0].childNodes[0],l=c.parentNode,u=i.childNodes[0].childNodes[1],f=u.parentNode,m=i.childNodes[1].childNodes[0],h=m.parentNode;return e.appendChild(r),G(()=>{p(s,`min-h-[2.1rem] text-xs leading-5 ${a?`opacity-90`:`opacity-75`}`)}),G(()=>{let e=t.label;M(()=>H(e,l,c))}),G(()=>{let e=o?n(()=>{let e=x(),t=W(`span`,e);E(e,t),G(()=>{p(t,`badge badge-xs ${a?`badge-neutral text-neutral-content`:`badge-primary badge-outline`}`)});let n=k(`rue:slot:anchor`);return E(t,n),G(()=>{let e=Mt.get();M(()=>H(e,t,n))}),e},!0):``;M(()=>H(e,f,u))}),G(()=>{let e=d;M(()=>H(e,h,m))}),e},!0),m=e.fullCellRender?Oe(A,`fullCellRender`,l,()=>e.fullCellRender(Z(i),{type:`month`,originNode:f,today:Z(Y),selected:a,isToday:o,inView:!0,disabled:s,row:Math.floor(r/4),column:r%4})):void 0;m==null&&e.monthFullCellRender&&(m=Oe(A,`monthFullCellRender`,l,()=>e.monthFullCellRender(Z(i)))),$t.set(c,{key:c,type:`month`,content:m??f})});let en=d(()=>({rest:O,rootClassName:Xe.get(),fullscreen:e.fullscreen===void 0||e.fullscreen,hasCustomHeader:Kt,customHeaderContent:Jt.get(),currentMode:J.get(),currentValue:Z(K.get()),headerTitle:bt.get(),todayLabel:St.get(),previousDisabled:It.get(),nextDisabled:Rt.get(),todayDisabled:zt,yearOptions:Qt.get(),monthOptions:Je.get(),weekdayLabels:Pe.get(),dateRows:Ie.get(),rowClassName:dt.get(),showWeek:e.showWeek,viewLabel:Pt.get(),weekButtonLabel:At.get(),todayButtonLabel:wt.get(),monthButtonLabel:Et.get(),yearButtonLabel:Ot.get(),todayMarkerLabel:Mt.get(),dateCellStates:Xt,managedCellContent:$t,hasDateCustomRender:Bt,hasMonthCustomRender:Vt,onPrevious:()=>Ht(J.get()===`month`?rt(K.get(),-1):it(K.get(),-1),`customize`),onToday:()=>Ht(Y,`customize`),onNext:()=>Ht(J.get()===`month`?rt(K.get(),1):it(K.get(),1),`customize`),onYearChange:e=>Ht(at(K.get(),e),`customize`),onMonthChange:e=>Ht(ot(K.get(),e),`customize`),onModeMonth:()=>Ut(`month`),onModeYear:()=>Ut(`year`),onDateSelect:e=>Ht(e,`date`),onMonthSelect:e=>Ht(e,`month`)}));if(en.get(),t(()=>{let e=++$.cleanupVersion;queueMicrotask(()=>{$.cleanupVersion===e&&(Ve($.managedContentMounts),Re($.managedHeaderMount),$.managedHeaderMount=null,$.host&&$.host.replaceChildren(),$.lastSnapshot=null)})}),typeof document>`u`)return ke(e.onRenderProfile,A,q.get(),`jsx`),Ue(en.get());$.cleanupVersion+=1,Ve($.managedContentMounts),Re($.managedHeaderMount),$.managedHeaderMount=null;let tn=document.createElement(`span`);return tn.style.display=`contents`,$.host=tn,$.eventsAttached=!1,$.lastSnapshot=null,Yt(),tn.innerHTML=He(en.get()),Be(tn,$.managedContentMounts,en.get()),$.managedHeaderMount=ze(tn,$.managedHeaderMount,en.get()),$.lastSnapshot=en.get(),ke(e.onRenderProfile,A,q.get(),`html`),tn}),xt=Object.assign(bt,{Cally:e=>{let t=S(e.children),r=S(e.className),i=S(Y(e,[`children`,`className`]));return T(n(()=>{let e=x(),n=W(`calendar-date`,e);_(n,`__rue_context_parent_instance__`,g()),E(e,n),G(()=>{N(n,i.get(),[`data-testid`,`className`])}),G(()=>{J(n,`data-testid`,String(i.get()[`data-testid`]))}),G(()=>{p(n,ve(`cally`,r.get()))});let a=k(`rue:slot:anchor`);return E(n,a),h({parent:n,before:a},()=>t.get(),()=>({})),e},!0),e=>D(()=>{t.set(e.children),r.set(e.className),i.set(Y(e,[`children`,`className`]))}),()=>e)},Month:e=>{let t=S(e.children),r=S(e.className),i=S(Y(e,[`children`,`className`]));return T(n(()=>{let e=x(),n=W(`calendar-month`,e);_(n,`__rue_context_parent_instance__`,g()),E(e,n),G(()=>{N(n,i.get(),[`data-testid`,`className`])}),G(()=>{J(n,`data-testid`,String(i.get()[`data-testid`]))}),G(()=>{p(n,r.get())});let a=k(`rue:slot:anchor`);return E(n,a),h({parent:n,before:a},()=>t.get(),()=>({})),e},!0),e=>D(()=>{t.set(e.children),r.set(e.className),i.set(Y(e,[`children`,`className`]))}),()=>e)},PikaSingle:e=>{let t=S(e.className),n=S(e.type),r=S(Y(e,[`className`,`type`]));return T(v(Object.assign(e=>{let i=_e().content.cloneNode(!0).firstChild,a=i;f(a,()=>r.get(),[`data-testid`,`id`,`value`,`type`,`className`,`__rue_static_template_id__`]);let s;G(()=>{let e=r.get()[`data-testid`];Object.is(s,e)||(s=e,e==null||e===!1?a.removeAttribute(`data-testid`):a.setAttribute(`data-testid`,String(e)))});let c;G(()=>{let e=r.get().id;Object.is(c,e)||(c=e,e==null||e===!1?a.removeAttribute(`id`):a.setAttribute(`id`,String(e)))});let l;G(()=>{let e=r.get().value,t=e==null?``:String(e);Object.is(l,t)||(l=t,o(a,t))});let u;G(()=>{let e=n.get()===void 0?`text`:n.get();Object.is(u,e)||(u=e,e==null||e===!1?a.removeAttribute(`type`):a.setAttribute(`type`,String(e)))});let d;return G(()=>{let e=ve(`pika-single`,t.get()),n=e==null?``:String(e);Object.is(d,n)||(d=n,a.className=n)}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{t.set(e.className),n.set(e.type),r.set(Y(e,[`className`,`type`]))}),()=>e)}}),St=U(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="grid gap-3 rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm md:grid-cols-2"><div class="rounded-[1rem] bg-base-200/70 px-3 py-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">当前值</div><div class="mt-1 text-sm font-medium"><!--rue:text-hole:1--></div></div><div class="rounded-[1rem] bg-base-200/70 px-3 py-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">选择来源</div><div class="mt-1 text-sm font-medium"><!--rue:text-hole:2--></div></div><div class="rounded-[1rem] bg-base-200/70 px-3 py-2 md:col-span-2"><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">面板状态</div><div class="mt-1 text-sm font-medium"><!--rue:text-hole:3--></div></div></div><p class="m-0 text-xs text-base-content/70">日期范围被限制在 2026 年 4 至 5 月之间，适合产品排期、门店值班或发布窗口场景。</p></div>`),Ct=new Set([`2026-04-04`,`2026-04-05`,`2026-05-01`]),wt=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Tt=e=>{let t=new Date(`${e}T00:00:00`);return t.setHours(12,0,0,0),t},Et=e=>e?typeof e==`string`?e:wt(e):`未选择`,Dt=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,Ot=[Tt(`2026-04-01`),Tt(`2026-05-31`)],kt=e=>e.getDay()===0||e.getDay()===6||Ct.has(wt(e)),At=()=>{let e=V(`2026-04-12`),t=V(`date`),r=V(`month`),i=V(Dt(Tt(e.value),`month`)),a=t=>{e.value=wt(t)},o=(e,t)=>{i.value=Dt(e,t)},s=(e,n)=>{t.value=n.source};return I(()=>T(n(()=>{let n=x(),c=St().content.cloneNode(!0),l=c.firstChild,u=l.childNodes[0],d=u.parentNode,f=l.childNodes[1].childNodes[0].childNodes[1].childNodes[0],p=f.parentNode,m=l.childNodes[1].childNodes[1].childNodes[1].childNodes[0],h=m.parentNode,g=l.childNodes[1].childNodes[2].childNodes[1].childNodes[0],_=g.parentNode;n.appendChild(c);let v=A(d);return B(v,xt,()=>({"data-testid":`basic-calendar`,locale:`zh-CN`,value:e.value,mode:r.value,showWeek:!0,validRange:Ot,disabledDate:kt,onChange:a,onPanelChange:(e,t)=>{r.value=t,o(e,t)},onSelect:s})),d.insertBefore(v,u),G(()=>{let t=Et(e.value);M(()=>H(t,p,f))}),G(()=>{let e=t.value;M(()=>H(e,h,m))}),G(()=>{let e=i.value;M(()=>H(e,_,g))}),n},!0),e=>D(()=>{})))},jt=U(`<div class="flex flex-wrap gap-2 text-xs"><span><!--rue:text-hole:0--></span><!--rue:text-hole:1--></div>`),Mt=U(`<div class="space-y-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><p class="m-0 text-xs text-base-content/70">当前选择：<!--rue:text-hole:2-->。这条示例 原样保持，用于展示原生 web component 接口。</p></div>`),Nt=U(`<div class="space-y-3"><div class="flex flex-wrap items-center gap-3"><button type="button" data-testid="cally-picker-button" class="input input-bordered w-fit cursor-pointer"><!--rue:text-hole:0--></button><span class="text-xs text-base-content/70">当前选择：<!--rue:text-hole:1--></span></div><div data-testid="cally-picker-panel"><!--rue:opaque-hole:2--></div><!--rue:opaque-hole:3--><p class="m-0 text-xs text-base-content/70">点击按钮展开面板，选中日期后会自动回填并收起。这条基础示例 同样完整保持。</p></div>`),Pt=U(`<div class="space-y-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><p class="m-0 text-xs text-base-content/70">当前选择：<!--rue:text-hole:2--></p><p class="m-0 text-xs text-base-content/70">输入框已挂上真实 Pikaday 实例，点击即可弹出日期面板。</p></div>`),Ft=null,It=null,Lt=xt.Cally,Rt=xt.Month,zt=xt.PikaSingle,Bt=()=>globalThis.__RUE_CALENDAR_EXTERNALS__,Vt=async()=>{typeof window>`u`||typeof customElements>`u`||(Ft||=(async()=>{let e=Bt();customElements.get(`calendar-date`)||await(e?.cally?e.cally():oe(()=>import(`./cally-B-msaaMx.js`),[])),customElements.get(`calendar-date`)&&typeof customElements.whenDefined==`function`&&await customElements.whenDefined(`calendar-date`)})(),await Ft)},Ht=async()=>{if(!It){let t=Bt();It=(t?.pikaday?t.pikaday():oe(()=>import(`./pikaday-BlN5cxGq.js`).then(t=>e(t.default,1)),__vite__mapDeps([0,1]))).then(e=>e.default??e)}return It},Ut=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,Wt=(e,t=`未选择`)=>e||t,Gt=e=>e||`Pick a date`,Kt=e=>{let t=S(e.error),n=S(e.loadingLabel),r=S(e.ready),i=S(e.readyLabel);return T(v(Object.assign(e=>{let a=jt().content.cloneNode(!0).firstChild,o=a.childNodes[0],s=a.childNodes[0].childNodes[0],c=s.parentNode,l=a.childNodes[1],u=l.parentNode,d;G(()=>{let e=`badge ${r.get()?`badge-success badge-soft`:`badge-outline`}`,t=e==null?``:String(e);Object.is(d,t)||(d=t,o.className=t)});let f=b(``);return c.insertBefore(f,s),c.removeChild(s),q(f,()=>r.get()?i.get():n.get()),te(u,l,()=>t.get()?{__rue_compiled_branch_key:!0,create:()=>v(Object.assign(e=>{let n=O(`span`,e);n.className=`badge badge-error badge-soft`;let r=b(``);return F(n,r),q(r,()=>t.get()),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))}),{__rue_compiled_host:a,__rue_compiled_roots:[a]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{t.set(e.error),n.set(e.loadingLabel),r.set(e.ready),i.set(e.readyLabel)}),()=>e)},qt=()=>T(n(()=>{let e=x(),t=W(`svg`,e);E(e,t),J(t,`aria-label`,`Previous`),p(t,`fill-current size-4`),J(t,`slot`,`previous`),J(t,`xmlns`,`http://www.w3.org/2000/svg`),J(t,`viewBox`,`0 0 24 24`);let n=W(`path`,t);return E(t,n),J(n,`fill`,`currentColor`),J(n,`d`,`M15.75 19.5 8.25 12l7.5-7.5`),e},!0),e=>D(()=>{})),Jt=()=>T(n(()=>{let e=x(),t=W(`svg`,e);E(e,t),J(t,`aria-label`,`Next`),p(t,`fill-current size-4`),J(t,`slot`,`next`),J(t,`xmlns`,`http://www.w3.org/2000/svg`),J(t,`viewBox`,`0 0 24 24`);let n=W(`path`,t);return E(t,n),J(n,`fill`,`currentColor`),J(n,`d`,`m8.25 4.5 7.5 7.5-7.5 7.5`),e},!0),e=>D(()=>{})),$=()=>{let{calendarRef:e,cleanupRef:r,selectedValue:i,ready:a,error:o}=C(`useSetup:0:0`,()=>{let e=L(),n=L(()=>{}),r=V(`2026-04-12`),i=V(!1),a=V(``);return y(()=>{let o=!0;Vt().then(()=>{if(!o)return;i.value=!0;let t=e.current;if(!t)return;t.value=r.value;let a=()=>{r.value=t.value||``};t.addEventListener(`change`,a),n.current=()=>t.removeEventListener(`change`,a)}).catch(()=>{o&&(a.value=`Cally 加载失败`)}),t(()=>{o=!1})}),t(()=>{n.current?.(),n.current=()=>{}}),{calendarRef:e,cleanupRef:n,selectedValue:r,ready:i,error:a}});return n(t=>{let n=Mt().content.cloneNode(!0).firstChild,r=n.childNodes[0],s=r.parentNode,c=n.childNodes[1],u=c.parentNode,d=n.childNodes[2].childNodes[1],f=d.parentNode;G(()=>{let t=l(qt,()=>({})),n=l(Jt,()=>({})),i=l(Rt,()=>({})),a=l(Lt,()=>({ref:e,"data-testid":`cally-calendar`,className:`border border-base-300 bg-base-100 shadow-lg rounded-box`,children:[t,n,i]}));M(()=>H(a,s,r))});let p=A(u);return B(p,Kt,()=>({ready:a.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:o.value})),u.insertBefore(p,c),G(()=>{let e=Wt(i.value);M(()=>H(e,f,d))}),n})},Yt=()=>{let{calendarRef:e,cleanupRef:r,selectedValue:i,open:a,ready:o,error:s}=C(`useSetup:0:0`,()=>{let e=L(),n=L(()=>{}),r=V(``),i=V(!1),a=V(!1),o=V(``);return y(()=>{let s=!0;Vt().then(()=>{if(!s)return;a.value=!0;let t=e.current;if(!t)return;t.value=r.value;let o=()=>{r.value=t.value||``,i.value=!1};t.addEventListener(`change`,o),n.current=()=>t.removeEventListener(`change`,o)}).catch(()=>{s&&(o.value=`Cally 加载失败`)}),t(()=>{s=!1})}),t(()=>{n.current?.(),n.current=()=>{}}),{calendarRef:e,cleanupRef:n,selectedValue:r,open:i,ready:a,error:o}});return n(t=>{let n=Nt().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[0],c=n.childNodes[1],u=n.childNodes[0].childNodes[0].childNodes[0],d=u.parentNode,f=n.childNodes[0].childNodes[1].childNodes[1],h=f.parentNode,g=n.childNodes[1].childNodes[0],_=g.parentNode,v=n.childNodes[2],y=v.parentNode;J(r,`type`,`button`),J(r,`data-testid`,`cally-picker-button`),p(r,`input input-bordered w-fit cursor-pointer`);let b=e=>{let t=()=>{a.value=!a.value};typeof t==`function`&&t(e)};r.addEventListener(`click`,b),m(()=>r.removeEventListener(`click`,b)),J(c,`data-testid`,`cally-picker-panel`),G(()=>{p(c,`inline-block rounded-box bg-base-100 p-3 shadow-lg ${a.value?``:`hidden`}`)}),G(()=>{let e=Gt(i.value);M(()=>H(e,d,u))}),G(()=>{let e=Wt(i.value);M(()=>H(e,h,f))}),G(()=>{let t=l(qt,()=>({})),n=l(Jt,()=>({})),r=l(Rt,()=>({})),i=l(Lt,()=>({ref:e,"data-testid":`cally-picker-calendar`,children:[t,n,r]}));M(()=>H(i,_,g))});let x=A(y);return B(x,Kt,()=>({ready:o.value,readyLabel:`Cally ready`,loadingLabel:`Loading Cally...`,error:s.value})),y.insertBefore(x,v),n})},Xt=()=>{let{inputRef:e,instanceRef:r,selectedValue:i,ready:a,error:o}=C(`useSetup:0:0`,()=>{let e=L(),n=L(),r=V(``),i=V(!1),a=V(``);return y(()=>{let o=!0;Ht().then(t=>{if(!o)return;let a=e.current;a&&(n.current=new t({field:a,defaultDate:new Date(`2026-04-12T00:00:00`),setDefaultDate:!0,toString:e=>Ut(e),onSelect:e=>{r.value=a.value||Ut(e)}}),a.setAttribute(`data-pikaday-ready`,`true`),r.value=a.value||`2026-04-12`,i.value=!0)}).catch(()=>{o&&(a.value=`Pikaday 加载失败`)}),t(()=>{o=!1})}),t(()=>{n.current?.destroy?.(),n.current=null}),{inputRef:e,instanceRef:n,selectedValue:r,ready:i,error:a}});return n(t=>{let n=Pt().content.cloneNode(!0).firstChild,r=n.childNodes[0],s=r.parentNode,c=n.childNodes[1],u=c.parentNode,d=n.childNodes[2].childNodes[1],f=d.parentNode;G(()=>{let t=l(zt,()=>({ref:e,"data-testid":`pikaday-cdn-input`,className:`input input-bordered w-full max-w-xs`,placeholder:`Pick a day`}));M(()=>H(t,s,r))});let p=A(u);return B(p,Kt,()=>({ready:a.value,readyLabel:`Pikaday ready`,loadingLabel:`Loading Pikaday...`,error:o.value})),u.insertBefore(p,c),G(()=>{let e=Wt(i.value);M(()=>H(e,f,d))}),n})},Zt=U(`<div class="space-y-1"><div class="text-lg font-semibold leading-none"><!--rue:text-hole:0--></div><div class="text-[0.68rem] uppercase tracking-[0.22em] opacity-60">Backlog</div></div>`),Qt=U(`<div class="space-y-1"><!--rue:text-hole:0--><!--rue:text-hole:1--></div>`),$t=U(`<div class="flex h-full flex-col justify-between gap-2"><div class="flex items-center justify-between gap-2"><span class="text-sm font-semibold"><!--rue:text-hole:0--></span><span><!--rue:text-hole:1-->%</span></div><div class="space-y-1"><div class="h-1.5 overflow-hidden rounded-full bg-base-300/70"><div></div></div><div class="text-[0.62rem] uppercase tracking-[0.22em] opacity-60">Studio load</div></div></div>`),en=U(`<div class="border-b border-base-300/70 px-3 py-3"><div class="flex flex-wrap items-start justify-between gap-3"><div><div class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55">Studio Header</div><div class="mt-1 text-base font-semibold"><!--rue:text-hole:0--></div></div><div class="join"><button type="button">月视图</button><button type="button">年视图</button></div></div><div class="mt-3 flex flex-wrap gap-2"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div></div>`),tn=U(`<div class="flex items-center justify-between gap-4 rounded-[1rem] bg-base-200/70 px-3 py-2"><span class="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-base-content/55"><!--rue:text-hole:0--></span><span class="text-sm font-medium"><!--rue:text-hole:1--></span></div>`),nn=U(`<div class="not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),rn=U(`<div class="not-prose overflow-x-auto rounded-[1.5rem] border border-base-300 bg-base-100 shadow-sm"><table class="table table-zebra"><thead><tr><th>导出</th><th>说明</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),an=U(`<div class="component-preview not-prose my-6 text-base-content lg:my-12"><div class="flex flex-wrap items-start justify-between gap-3"><div><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># <!--rue:text-hole:0--></h2><!--rue:text-hole:1--></div></div><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div>`),on=U(`<div class="rounded-[1.35rem] border border-base-300/80 bg-base-100/85 p-4 shadow-sm"><div class="badge badge-outline badge-sm"><!--rue:text-hole:0--></div><h3 class="mt-3 mb-1 text-base font-semibold"><!--rue:text-hole:1--></h3><p class="m-0 text-sm text-base-content/70"><!--rue:text-hole:2--></p></div>`),sn=U(`<div class="space-y-4"><!--rue:opaque-hole:0--><div class="grid gap-3 md:grid-cols-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div>`),cn=U(`<div class="space-y-4"><div class="grid gap-4"><div class="max-w-full overflow-x-auto"><!--rue:opaque-hole:0--></div><div class="rounded-[1.5rem] border border-base-300 bg-base-100/85 p-4 shadow-sm"><div class="badge badge-secondary badge-soft">Card Mode</div><h3 class="mt-3 mb-1 text-base font-semibold">容量面板</h3><p class="m-0 text-sm text-base-content/70">使用 fullscreen=false 收成卡片，再用 fullCellRender 把单元格改造成带进度条的容量卡。</p><div class="mt-4 space-y-3"><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--><!--rue:opaque-hole:3--></div></div></div></div>`),ln=U(`<div class="prose prose-sm max-w-none md:prose-base"><h1>Calendar 日历</h1><p class="mt-3 mb-3 text-sm">Calendar 现在同时覆盖 Rue 原生月历面板、事项渲染、卡片式日历，以及 Cally、Pikaday 两条基础接入链路。</p><div class="not-prose grid gap-3 rounded-[1.75rem] border border-base-300 bg-gradient-to-br from-base-100 via-base-100 to-base-200/75 p-4 shadow-sm md:grid-cols-3"><!--rue:opaque-hole:0--><!--rue:opaque-hole:1--><!--rue:opaque-hole:2--></div><!--rue:opaque-hole:3--><!--rue:opaque-hole:4--><!--rue:opaque-hole:5--><!--rue:opaque-hole:6--><!--rue:opaque-hole:7--><!--rue:opaque-hole:8--><!--rue:opaque-hole:9--><section class="my-12 space-y-6"><div><h2 class="mb-2">API</h2><p class="m-0 text-sm text-base-content/70">默认 Calendar 面板聚焦于日历组件常见的核心交互能力，同时使用 Rue 自己的视觉和基础导出方式。</p></div><!--rue:opaque-hole:10--><div><h2 class="mb-2">附属导出</h2><p class="m-0 text-sm text-base-content/70">基础的 Cally 与 Pikaday 接口没有删除，而是并列保持为复合导出，便于按需接入。</p></div><!--rue:opaque-hole:11--></section></div>`),un=[{prop:`cellRender`,description:`按日期格或月份格补充内容，适合放日程列表、状态徽标等轻量信息`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`defaultValue`,description:`非受控模式下的初始日期`,type:`Date | string | number`,defaultValue:`new Date()`},{prop:`disabledDate`,description:`禁用特定日期；会同时影响日期格、月份导航与年份导航`,type:`(date: Date) => boolean`,defaultValue:`-`},{prop:`fullscreen`,description:`切换为大面板或卡片模式`,type:`boolean`,defaultValue:`true`},{prop:`fullCellRender`,description:`完全接管单元格内容，适合 KPI、容量卡片等更强视觉定制`,type:`(date: Date, info) => any`,defaultValue:`-`},{prop:`headerRender`,description:`自定义头部，拿到年/月选项与模式切换方法`,type:`(config) => any`,defaultValue:`-`},{prop:`mode`,description:`视图模式，可在月视图与年视图之间切换`,type:`'month' | 'year'`,defaultValue:`'month'`},{prop:`onRenderProfile`,description:`渲染诊断回调，报告当前更新阶段、耗时、cellRender 调用次数与慢单元格`,type:`(event: CalendarRenderProfileEvent) => void`,defaultValue:`-`},{prop:`renderProfileThreshold`,description:`渲染诊断的慢调用阈值，超过后会在 onRenderProfile 中标记 slow`,type:`number`,defaultValue:`16`},{prop:`showWeek`,description:`月视图下显示 ISO 周序号，适合排班和周计划看板`,type:`boolean`,defaultValue:`false`},{prop:`validRange`,description:`限定可浏览与可选择的日期范围`,type:`[Date | string | number, Date | string | number]`,defaultValue:`-`},{prop:`value`,description:`受控日期；通常与 onChange、onPanelChange 搭配`,type:`Date | string | number`,defaultValue:`-`},{prop:`weekStartsOn`,description:`自定义周起始日，0 表示周日，1 表示周一`,type:`0 | 1 | 2 | 3 | 4 | 5 | 6`,defaultValue:`1`}],dn=[{name:`Calendar.Cally`,description:`展示基础 Cally web component 容器，适合需要 slot 导航的原生体验`},{name:`Calendar.Month`,description:`Cally 的月份节点，和 Calendar.Cally 组合使用`},{name:`Calendar.PikaSingle`,description:`Pikaday 输入框样式包装，仍可按原方式挂载第三方实例`}],fn={"2026-04-08":[{tone:`warning`,label:`Risk review`},{tone:`success`,label:`QA ready`}],"2026-04-10":[{tone:`warning`,label:`Traffic replay`},{tone:`success`,label:`Deploy window`},{tone:`error`,label:`Rollback drill`}],"2026-04-15":[{tone:`info`,label:`Townhall`},{tone:`warning`,label:`Launch freeze`},{tone:`success`,label:`Content sync`},{tone:`error`,label:`Incident review`}],"2026-04-18":[{tone:`accent`,label:`Design crit`}],"2026-04-22":[{tone:`primary`,label:`v2 beta`},{tone:`success`,label:`Landing ready`}]},pn={2:12,3:28,4:18,8:43},mn={"2026-09-03":24,"2026-09-07":46,"2026-09-11":68,"2026-09-18":92,"2026-09-23":58,"2026-09-27":37},hn={primary:`badge-primary`,secondary:`badge-secondary`,accent:`badge-accent`,info:`badge-info`,success:`badge-success`,warning:`badge-warning`,error:`badge-error`},gn=e=>`${e.getFullYear()}-${`${e.getMonth()+1}`.padStart(2,`0`)}-${`${e.getDate()}`.padStart(2,`0`)}`,_n=e=>e?typeof e==`string`?e:gn(e):`未选择`,vn=(e,t)=>t===`year`?`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`}).format(e)} / 年视图`:`${new Intl.DateTimeFormat(`zh-CN`,{year:`numeric`,month:`long`}).format(e)} / 月视图`,yn=e=>{let t=S(e.label),n=S(e.value);return T(v(Object.assign(e=>{let r=tn().content.cloneNode(!0).firstChild,i=r.childNodes[0].childNodes[0],a=i.parentNode,o=r.childNodes[1].childNodes[0],s=o.parentNode,c=b(``);a.insertBefore(c,i),a.removeChild(i),q(c,()=>t.get());let l=b(``);return s.insertBefore(l,o),s.removeChild(o),q(l,()=>n.get()),{__rue_compiled_host:r,__rue_compiled_roots:[r]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{t.set(e.label),n.set(e.value)}),()=>e)},bn=e=>{let t=S(e.rows);return T(v(Object.assign(e=>{let n=nn().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1].childNodes[0],i=r.parentNode,o=U(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td><td><code><!--rue:text-hole:2--></code></td><td><code><!--rue:text-hole:3--></code></td></tr>`),s=[];return G(()=>{let e=t.get()||[];s=ie(i,r,s,e,(e,t)=>e.prop,(e,t,n)=>{let r=e,i;return K(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=t.childNodes[2].childNodes[0].childNodes[0],l=c.parentNode,u=t.childNodes[3].childNodes[0].childNodes[0],d=u.parentNode,f=b(``);a.insertBefore(f,n),a.removeChild(n);let p;{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}let m;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}let h=b(``);l.insertBefore(h,c),l.removeChild(c);let g;{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}let _=b(``);d.insertBefore(_,u),d.removeChild(u);let v;{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}return i=()=>{{let e=r.prop==null||typeof r.prop==`boolean`?``:String(r.prop);Object.is(p,e)||(f.textContent=e,p=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(m,e)||(s.textContent=e,m=e)}{let e=r.type==null||typeof r.type==`boolean`?``:String(r.type);Object.is(g,e)||(h.textContent=e,g=e)}{let e=r.defaultValue==null||typeof r.defaultValue==`boolean`?``:String(r.defaultValue);Object.is(v,e)||(_.textContent=e,v=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),a(()=>ee(s)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{t.set(e.rows)}),()=>e)},xn=e=>{let t=S(e.rows);return T(v(Object.assign(e=>{let n=rn().content.cloneNode(!0).firstChild,r=n.childNodes[0].childNodes[1].childNodes[0],i=r.parentNode,o=U(`<tr><td><code><!--rue:text-hole:0--></code></td><td>rue:row-text</td></tr>`),s=[];return G(()=>{let e=t.get()||[];s=ie(i,r,s,e,(e,t)=>e.name,(e,t,n)=>{let r=e,i;return K(e=>{let t=o().content.cloneNode(!0).firstChild,n=t.childNodes[0].childNodes[0].childNodes[0],a=n.parentNode,s=t.childNodes[1].childNodes[0];s.data=``,s.parentNode;let c=b(``);a.insertBefore(c,n),a.removeChild(n);let l;{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(l,e)||(c.textContent=e,l=e)}let u;{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(u,e)||(s.textContent=e,u=e)}return i=()=>{{let e=r.name==null||typeof r.name==`boolean`?``:String(r.name);Object.is(l,e)||(c.textContent=e,l=e)}{let e=r.description==null||typeof r.description==`boolean`?``:String(r.description);Object.is(u,e)||(s.textContent=e,u=e)}},{__rue_compiled_host:t,__rue_compiled_roots:[t]}},(n,a)=>{e=n,t=a,r=n,i()},n)})}),a(()=>ee(s)),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{t.set(e.rows)}),()=>e)},Sn=e=>{let{shouldLoadPreview:r,preloadTimer:i}=C(`useSetup:0:0`,()=>{let n=V(e.previewLoadDelay==null),r=L(null);return y(()=>{e.previewLoadDelay==null||n.value||(r.current=window.setTimeout(()=>{n.value=!0,r.current=null},e.previewLoadDelay))}),t(()=>{r.current!=null&&(window.clearTimeout(r.current),r.current=null)}),{shouldLoadPreview:n,preloadTimer:r}});return n(t=>{let n=an().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[0].childNodes[0].childNodes[1],a=i.parentNode,o=n.childNodes[0].childNodes[0].childNodes[1],s=o.parentNode,c=n.childNodes[1],l=c.parentNode,u=n.childNodes[2],d=u.parentNode;h({parent:a,before:i},()=>e.title,()=>({})),te(s,o,()=>e.summary?{__rue_compiled_branch_key:!0,create:()=>v(Object.assign(t=>{let n=O(`p`,t);n.className=`m-0 text-sm opacity-70`;let r=P(`rue:compiled-slot`);return F(n,r),h({parent:n,before:r},()=>e.summary,()=>({})),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0}))}:{__rue_compiled_branch_key:!1,create:()=>v(Object.assign(e=>{let t=x();return{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))});let f=A(l);return B(f,ce,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`})),l.insertBefore(f,c),G(()=>{let t=e.tab.value===`preview`?r.value?ue(e.title,e.preview):v(Object.assign(t=>{let n=O(`div`,t);n.className=`rounded-[1.5rem] border border-base-300 bg-base-100/80 p-5 shadow-sm`;let r=O(`div`,n);F(n,r),r.className=`badge badge-outline badge-sm`,F(r,b(`Preview`));let i=O(`p`,n);F(n,i),i.className=`mb-0 mt-3 text-sm text-base-content/72`;let a=b(``);return F(i,a),q(a,()=>e.previewLoadNote||`预览正在后台初始化，页面主体会先显示出来。`),{__rue_compiled_host:n,__rue_compiled_roots:[n]}},{__rue_compiled_explicit_roots:!0})):R(se,()=>({className:`mt-2`,lang:e.lang===void 0?`tsx`:e.lang,code:e.code}));M(()=>H(t,d,u))}),n})},Cn=e=>{let t=S(e.badge),n=S(e.detail),r=S(e.title);return T(v(Object.assign(e=>{let i=on().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0],o=a.parentNode,s=i.childNodes[1].childNodes[0],c=s.parentNode,l=i.childNodes[2].childNodes[0],u=l.parentNode,d=b(``);o.insertBefore(d,a),o.removeChild(a),q(d,()=>t.get());let f=b(``);c.insertBefore(f,s),c.removeChild(s),q(f,()=>r.get());let p=b(``);return u.insertBefore(p,l),u.removeChild(l),q(p,()=>n.get()),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{t.set(e.badge),n.set(e.detail),r.set(e.title)}),()=>e)},wn=()=>{let e=V(`2026-04-15`),t=V(`month`);return I(()=>T(v(Object.assign(i=>{let o=sn().content.cloneNode(!0).firstChild,c=o.childNodes[0],l=c.parentNode,d=o.childNodes[1].childNodes[0],f=d.parentNode,m=o.childNodes[1].childNodes[1],h=m.parentNode,g=o.childNodes[1].childNodes[2],_=g.parentNode,y=A(l);B(y,xt,()=>({"data-testid":`notice-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,onChange:t=>{e.value=gn(t)},onPanelChange:(e,n)=>{t.value=n},cellRender:(e,t)=>{if(t.type===`month`){let t=pn[e.getMonth()];return t?n(()=>{let e=x(),n=Zt().content.cloneNode(!0),r=n.firstChild.childNodes[0].childNodes[0],i=r.parentNode;return e.appendChild(n),G(()=>{let e=t;M(()=>H(e,i,r))}),e},!0):null}let i=fn[gn(e)]??[];return i.length?n(e=>{let t=Qt().content.cloneNode(!0).firstChild,o=t.childNodes[0],c=o.parentNode,l=t.childNodes[1],d=l.parentNode,f=[];return G(()=>{let e=i.slice(0,2)||[];f=ie(c,o,f,e,(e,t)=>e.label,(e,t)=>{let n=S(e);return r((e,t,r)=>s(e,r,()=>v(Object.assign(e=>{let t=O(`div`,e),r;G(()=>{let e=`badge badge-soft badge-xs ${hn[n.get().tone]}`,i=e==null?``:String(e);Object.is(r,i)||(r=i,t.className=i)});let i=b(``);return F(t,i),q(i,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),a(()=>ee(f)),G(()=>{let e=i.length>2?n(()=>{let e=x(),t=W(`div`,e);E(e,t),p(t,`text-[0.62rem] opacity-60`),E(t,ae(`+`));let n=w(t);return E(t,n),G(()=>{u(n,i.length-2)}),E(t,ae(` more`)),e},!0):``;M(()=>H(e,d,l))}),t}):null}})),l.insertBefore(y,c);let C=A(f);B(C,yn,()=>({label:`当前日期`,value:_n(e.value)})),f.insertBefore(C,d);let T=A(h);B(T,yn,()=>({label:`4 月 15 日事件`,value:`${fn[`2026-04-15`]?.length??0} 条`})),h.insertBefore(T,m);let D=A(_);return B(D,yn,()=>({label:`9 月 backlog`,value:`${pn[8]} 项`})),_.insertBefore(D,g),{__rue_compiled_host:o,__rue_compiled_roots:[o]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{})))},Tn=()=>{let e=V(`2026-09-18`),t=V(`month`);return I(()=>T(v(Object.assign(r=>{let i=cn().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[0].childNodes[0],o=a.parentNode,s=i.childNodes[0].childNodes[1].childNodes[3].childNodes[0],l=s.parentNode,u=i.childNodes[0].childNodes[1].childNodes[3].childNodes[1],d=u.parentNode,f=i.childNodes[0].childNodes[1].childNodes[3].childNodes[2],m=f.parentNode,h=A(o);B(h,xt,()=>({"data-testid":`card-calendar`,className:`w-[34rem] max-w-none`,locale:`zh-CN`,fullscreen:!1,value:e.value,mode:t.value,onChange:t=>{e.value=gn(t)},onPanelChange:(e,n)=>{t.value=n},fullCellRender:(e,t)=>{if(t.type!==`date`)return t.originNode;let r=mn[gn(e)];return r==null?t.originNode:n(t=>{let n=$t().content.cloneNode(!0).firstChild,i=n.childNodes[0].childNodes[1],a=n.childNodes[1].childNodes[0].childNodes[0],o=n.childNodes[0].childNodes[0].childNodes[0],s=o.parentNode,l=n.childNodes[0].childNodes[1].childNodes[0],u=l.parentNode;return G(()=>{p(i,`badge badge-xs ${r>=80?`badge-error`:r>=60?`badge-warning`:`badge-success`} badge-soft`)}),G(()=>{p(a,`h-full rounded-full ${r>=80?`bg-error`:r>=60?`bg-warning`:`bg-success`}`)}),G(()=>{let e={width:`${r}%`};c(a,e)}),G(()=>{let t=e.getDate();M(()=>H(t,s,o))}),G(()=>{let e=r;M(()=>H(e,u,l))}),n})}})),o.insertBefore(h,a);let g=A(l);B(g,yn,()=>({label:`当前日期`,value:_n(e.value)})),l.insertBefore(g,s);let _=A(d);B(_,yn,()=>({label:`高负载日`,value:`9/18 · 92%`})),d.insertBefore(_,u);let v=A(m);return B(v,yn,()=>({label:`布局定位`,value:`侧栏、仪表盘、详情卡片`})),m.insertBefore(v,f),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{})))},En=()=>{let e=V(`2026-07-04`),t=V(`month`),c=V(`date`);return I(()=>T(v(Object.assign(l=>{let u=sn().content.cloneNode(!0).firstChild,d=u.childNodes[0],f=d.parentNode,h=u.childNodes[1].childNodes[0],g=h.parentNode,_=u.childNodes[1].childNodes[1],y=_.parentNode,x=u.childNodes[1].childNodes[2],C=x.parentNode,w=A(f);B(w,xt,()=>({"data-testid":`custom-header-calendar`,locale:`zh-CN`,value:e.value,mode:t.value,headerRender:ne(({value:e,type:t,yearOptions:c,monthOptions:l,onMonthChange:u,onTypeChange:d,onYearChange:f})=>n(n=>{let h=en().content.cloneNode(!0).firstChild,g=h.childNodes[0].childNodes[1].childNodes[0],_=h.childNodes[0].childNodes[1].childNodes[1],y=h.childNodes[0].childNodes[0].childNodes[1].childNodes[0],x=y.parentNode,C=h.childNodes[1].childNodes[0],w=C.parentNode,T=h.childNodes[1].childNodes[1],D=T.parentNode;J(g,`type`,`button`),G(()=>{p(g,`btn btn-sm join-item ${t===`month`?`btn-primary`:`btn-ghost`}`)});let k=e=>{let t=()=>d(`month`);typeof t==`function`&&t(e)};g.addEventListener(`click`,k),m(()=>g.removeEventListener(`click`,k)),J(_,`type`,`button`),G(()=>{p(_,`btn btn-sm join-item ${t===`year`?`btn-primary`:`btn-ghost`}`)});let A=e=>{let t=()=>d(`year`);typeof t==`function`&&t(e)};_.addEventListener(`click`,A),m(()=>_.removeEventListener(`click`,A)),G(()=>{let n=vn(e,t);M(()=>H(n,x,y))});let j=W(`select`,w);E(w,j),w.insertBefore(j,C),p(j,`select select-sm min-w-24`),G(()=>{o(j,e.getFullYear())});let N=e=>{let t=e=>f(Number(e.currentTarget.value));typeof t==`function`&&t(e)};j.addEventListener(`change`,N),m(()=>j.removeEventListener(`change`,N));let te=P(`rue:list:end`);F(j,te);let ne=[];G(()=>{ne=ie(j,te,ne,c||[],(e,t)=>e,(e,t)=>{let n=S(e);return r((e,t,r)=>s(e,r,()=>v(Object.assign(e=>{let t=O(`option`,e),r;G(()=>{let e=n.get(),i=e==null?``:String(e);Object.is(r,i)||(r=i,o(t,i))});let i=b(``);return F(t,i),q(i,()=>n.get()),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),a(()=>ee(ne));let I=W(`select`,D);E(D,I),D.insertBefore(I,T),p(I,`select select-sm min-w-24`),G(()=>{o(I,e.getMonth())}),G(()=>{i(I,t===`year`)});let L=e=>{let t=e=>u(Number(e.currentTarget.value));typeof t==`function`&&t(e)};I.addEventListener(`change`,L),m(()=>I.removeEventListener(`change`,L));let R=P(`rue:list:end`);F(I,R);let z=[];return G(()=>{z=ie(I,R,z,l||[],(e,t)=>e.value,(e,t)=>{let n=S(e);return r((e,t,r)=>s(e,r,()=>v(Object.assign(e=>{let t=O(`option`,e),r;G(()=>{let e=n.get().value,i=e==null?``:String(e);Object.is(r,i)||(r=i,o(t,i))});let i;G(()=>{let e=!!n.get().disabled;Object.is(i,e)||(i=e,t.disabled=e)});let a=b(``);return F(t,a),q(a,()=>n.get().label),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(r,i)=>{e=r,t=i,n.set(r)})})}),a(()=>ee(z)),h})),onChange:t=>{e.value=gn(t)},onPanelChange:(e,n)=>{t.value=n},onSelect:(e,t)=>{c.value=t.source}})),f.insertBefore(w,d);let T=A(g);B(T,yn,()=>({label:`当前日期`,value:_n(e.value)})),g.insertBefore(T,h);let D=A(y);B(D,yn,()=>({label:`当前模式`,value:t.value})),y.insertBefore(D,_);let k=A(C);return B(k,yn,()=>({label:`最近来源`,value:c.value})),C.insertBefore(k,x),{__rue_compiled_host:u,__rue_compiled_roots:[u]}},{__rue_compiled_explicit_roots:!0})),e=>D(()=>{})))},Dn=`import { ref } from '@rue-js/rue'
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
}`,On=`import { ref } from '@rue-js/rue'
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
}`,kn=`import { ref } from '@rue-js/rue'
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
}`,An=`import { ref } from '@rue-js/rue'
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
}`,jn=`import 'cally'
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
}`,Mn=`import 'cally'
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
}`,Nn=()=>{let e=V(`preview`),t=V(`preview`),r=V(`preview`),i=V(`preview`),a=V(`preview`),o=V(`preview`),s=V(`preview`);return I(()=>T((()=>{let c=n(()=>{let n=x(),c=ln().content.cloneNode(!0),u=c.firstChild,d=u.childNodes[2].childNodes[0],f=d.parentNode,p=u.childNodes[2].childNodes[1],m=p.parentNode,h=u.childNodes[2].childNodes[2],g=h.parentNode,_=u.childNodes[3],v=_.parentNode,y=u.childNodes[4],b=y.parentNode,S=u.childNodes[5],ee=S.parentNode,C=u.childNodes[6],w=C.parentNode,T=u.childNodes[7],E=T.parentNode,D=u.childNodes[8],O=D.parentNode,k=u.childNodes[9],j=k.parentNode,N=u.childNodes[10].childNodes[1],P=N.parentNode,te=u.childNodes[10].childNodes[3],ne=te.parentNode;n.appendChild(c);let F=A(f);B(F,Cn,()=>({badge:`Native Panel`,title:`Month / Year 两种面板`,detail:`新增默认 Calendar 面板，支持 value、mode、validRange、showWeek 与 headerRender。`})),f.insertBefore(F,d);let I=A(m);B(I,Cn,()=>({badge:`Render Hooks`,title:`细胞级渲染能力`,detail:`cellRender 和 fullCellRender 可以把普通日期格组织为事项列表、容量卡或数据看板。`})),m.insertBefore(I,p);let L=A(g);B(L,Cn,()=>({badge:`Composition Ready`,title:`基础场景完整覆盖`,detail:`Calendar.Cally、Calendar.Month、Calendar.PikaSingle 仍然可用，基础接入方式不需要拆。`})),g.insertBefore(L,h),G(()=>{let t=l(Sn,()=>({title:`Basic calendar`,summary:`默认面板，覆盖受控日期、范围限制、禁用规则与周序号。`,tab:e,preview:At,code:Dn}));M(()=>H(t,v,_))}),G(()=>{let e=l(Sn,()=>({title:`Notice calendar`,summary:`使用 cellRender 在日期格展示事项，在年视图展示月份 backlog。`,tab:t,preview:wn,code:On,previewLoadDelay:1200,previewLoadNote:`事项日历会在页面显示后自动初始化，不再需要手动点击加载。`}));M(()=>H(e,b,y))}),G(()=>{let e=l(Sn,()=>({title:`Card mode`,summary:`缩成仪表盘卡片，再用 fullCellRender 为少量日期挂上负载进度。`,tab:r,preview:Tn,code:kn,previewLoadDelay:1800,previewLoadNote:`卡片模式会在后台分帧挂载，避免首屏一次性把多个重预览一起算完。`}));M(()=>H(e,ee,S))}),G(()=>{let e=l(Sn,()=>({title:`Custom header`,summary:`接管顶部工具条，自定义模式切换、年份与月份选择器。`,tab:i,preview:En,code:An,previewLoadDelay:2400,previewLoadNote:`自定义头部示例会在页面稳定后自动挂载，减少首屏阻塞。`}));M(()=>H(e,w,C))}),G(()=>{let e=l(Sn,()=>({title:`Cally calendar example`,summary:`基础的 Cally web component 日历壳层仍然原样可用。`,tab:a,preview:$,code:jn,previewLoadDelay:3200,previewLoadNote:`Cally 预览会延后挂载，避免阻塞第一个日历示例。`}));M(()=>H(e,E,T))}),G(()=>{let e=l(Sn,()=>({title:`Cally date picker example`,summary:`基础的日期输入弹层示例 展示，只把交互说明和布局重新编排。`,tab:o,preview:Yt,code:Mn,previewLoadDelay:4e3,previewLoadNote:`日期输入弹层会延后挂载，页面主体优先完成交互。`}));M(()=>H(e,O,D))}),G(()=>{let e=l(Sn,()=>({title:`Pikaday input example`,summary:`展示基础 pika-single 输入壳层，让第三方实例继续挂载在 Rue 组件树里。`,tab:s,preview:Xt,lang:`html`,previewLoadDelay:4800,previewLoadNote:`Pikaday 第三方实例会延后初始化，避免拖慢首屏。`,code:`<script src="https://cdn.jsdelivr.net/npm/pikaday/pikaday.js"><\/script>
<input type="text" class="input pika-single" id="myDatepicker">
<script>
  var picker = new Pikaday({ field: document.getElementById('myDatepicker') });
<\/script>`}));M(()=>H(e,j,k))});let R=A(P);B(R,bn,()=>({rows:un})),P.insertBefore(R,N);let z=A(ne);return B(z,xn,()=>({rows:dn})),ne.insertBefore(z,te),n});return l(le,()=>({children:c}))})(),e=>D(()=>{})))};export{Nn as default};
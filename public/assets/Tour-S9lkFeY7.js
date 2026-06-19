import{$ as e,$t as t,Bt as n,Gt as r,Qt as i,X as a,Xt as o,Yt as s,Z as c,ct as l,et as u,gt as d,i as f,l as p,mt as m,n as h,nt as g,o as _,p as v,r as y,rt as b,t as x,tt as S,ut as C,yt as w}from"./vapor-runtime-CKrmRMZX.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as O,i as k}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as A}from"./Teleport-DXcSJ21D.js";import{r as j}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as M}from"./PreviewBlock-xsXk-Jrr.js";var N={next:`下一步`,previous:`上一步`,finish:`完成`,close:`关闭引导`},P=16,F=18,I=(...e)=>e.filter(Boolean).join(` `),L=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},R=e=>`${e}px`,z=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=I(e?.[r],t?.[r]);i&&(n[r]=i)}),n},B=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=L(e?.[r],t?.[r]);Object.keys(i).length>0&&(n[r]=i)}),n},V=(e,t,n)=>n<t?t:Math.min(Math.max(e,t),n),H=e=>typeof e==`function`?e():e,ee=e=>typeof e==`function`?e()??null:e??null,U=e=>{let t=e?.offset??8;if(Array.isArray(t))return{horizontal:Math.max(0,t[0]??0),vertical:Math.max(0,t[1]??t[0]??0)};let n=Math.max(0,t);return{horizontal:n,vertical:n}},te=e=>Math.max(0,e?.radius??18),W=e=>e===!1?null:e&&typeof e==`object`?{color:e.color??`rgba(15, 23, 42, 0.46)`,style:e.style}:{color:`rgba(15, 23, 42, 0.46)`,style:void 0},ne=e=>e!==!1,re=e=>typeof e==`object`?e.pointAtCenter!==!1:!0,G=e=>e??`bottom`,K=e=>e===`center`?`center`:e.startsWith(`top`)?`top`:e.startsWith(`bottom`)?`bottom`:e.startsWith(`left`)?`left`:`right`,ie=e=>{switch(e){case`top`:return`bottom`;case`topLeft`:return`bottomLeft`;case`topRight`:return`bottomRight`;case`bottom`:return`top`;case`bottomLeft`:return`topLeft`;case`bottomRight`:return`topRight`;case`left`:return`right`;case`leftTop`:return`rightTop`;case`leftBottom`:return`rightBottom`;case`right`:return`left`;case`rightTop`:return`leftTop`;case`rightBottom`:return`leftBottom`;default:return`center`}},ae=()=>typeof window>`u`||typeof document>`u`?{width:1440,height:900}:{width:document.documentElement.clientWidth||window.innerWidth||1440,height:document.documentElement.clientHeight||window.innerHeight||900},oe=(e,t)=>{if(!e)return null;let n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let r=ae(),i=U(t),a=te(t),o=V(n.left-i.horizontal,4,r.width-4),s=V(n.top-i.vertical,4,r.height-4),c=V(n.right+i.horizontal,4,r.width-4),l=V(n.bottom+i.vertical,4,r.height-4),u=Math.max(0,c-o),d=Math.max(0,l-s);return{left:o,top:s,width:u,height:d,radius:a,centerX:o+u/2,centerY:s+d/2,right:c,bottom:l}},se=(e,t,n,r)=>{switch(e){case`top`:return{left:t.centerX-n/2,top:t.top-r-F};case`topLeft`:return{left:t.left,top:t.top-r-F};case`topRight`:return{left:t.right-n,top:t.top-r-F};case`bottom`:return{left:t.centerX-n/2,top:t.bottom+F};case`bottomLeft`:return{left:t.left,top:t.bottom+F};case`bottomRight`:return{left:t.right-n,top:t.bottom+F};case`left`:return{left:t.left-n-F,top:t.centerY-r/2};case`leftTop`:return{left:t.left-n-F,top:t.top};case`leftBottom`:return{left:t.left-n-F,top:t.bottom-r};case`right`:return{left:t.right+F,top:t.centerY-r/2};case`rightTop`:return{left:t.right+F,top:t.top};case`rightBottom`:return{left:t.right+F,top:t.bottom-r};default:return{left:t.centerX-n/2,top:t.bottom+F}}},ce=(e,t,n,r,i)=>{switch(K(e)){case`top`:return t.top<P;case`bottom`:return t.top+r>i.height-P;case`left`:return t.left<P;case`right`:return t.left+n>i.width-P;default:return!1}},le=(e,t,n,r)=>{let i=ae();if(!t||e===`center`)return{placement:`center`,left:V((i.width-n)/2,P,i.width-n-P),top:V((i.height-r)/2,P,i.height-r-P)};let a=e,o=se(a,t,n,r);return ce(a,o,n,r,i)&&(a=ie(a),o=se(a,t,n,r)),{placement:a,left:V(o.left,P,i.width-n-P),top:V(o.top,P,i.height-r-P)}},ue=(e,t,n,r,i,a,o)=>{if(!t||e===`center`)return null;let s=V(t.centerX-n-9,24,i-24),c=V(t.centerY-r-9,24,a-24),l=o?void 0:28;switch(K(e)){case`top`:return{left:R(l??s),bottom:`-9px`};case`bottom`:return{left:R(l??s),top:`-9px`};case`left`:return{top:R(l??c),right:`-9px`};case`right`:return{top:R(l??c),left:`-9px`};default:return null}},de=()=>p(e=>{let t=S(`svg`,e);l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`1.9`),C(t,`size-4`);let n=S(`path`,t);return c(t,n),l(n,`strokeLinecap`,`round`),l(n,`strokeLinejoin`,`round`),l(n,`d`,`M6 6l12 12M18 6 6 18`),t}),fe=()=>p(e=>{let t=S(`svg`,e);l(t,`viewBox`,`0 0 24 24`),l(t,`fill`,`none`),l(t,`stroke`,`currentColor`),l(t,`strokeWidth`,`1.8`),C(t,`size-4`);let n=S(`path`,t);c(t,n),l(n,`strokeLinecap`,`round`),l(n,`strokeLinejoin`,`round`),l(n,`d`,`m12 3 1.7 4.2L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.8L12 3Z`);let r=S(`path`,t);return c(t,r),l(r,`strokeLinecap`,`round`),l(r,`strokeLinejoin`,`round`),l(r,`d`,`M5 19h.01M12 21h.01M19 19h.01`),t}),q=a=>{let{steps:d,defaultOpen:h,defaultCurrent:g,placement:b,mask:w,gap:E,arrow:D,type:j,closeIcon:M,disabledInteraction:P,keyboard:F,zIndex:U,scrollIntoViewOptions:te,getPopupContainer:K,locale:ie,indicatorsRender:ae,actionsRender:se,className:ce,style:q,classNames:pe,styles:me,onChange:he,onClose:ge,onFinish:_e,onOpenChange:ve,rest:ye,panelRef:be,rafIdRef:xe,renderVersion:Se,isControlledOpen:Ce,isControlledCurrent:we,uncontrolledOpen:Te,uncontrolledCurrent:Ee,lastDefaultOpen:De,lastDefaultCurrent:Oe,currentOpenRef:ke,currentIndexRef:Ae,panelStyleRef:je,arrowStyleRef:Me,spotlightRef:Ne,placementRef:Pe,mergedLocale:Fe,getTotal:Ie,normalizeCurrentValue:Le,getMergedOpen:Re,getMergedCurrent:ze,getCurrentStep:Be,requestRender:Ve,requestOpenChange:He,requestCurrentChange:Ue,scheduleLayoutSync:We,syncScrollIntoView:Ge,handleClose:Ke,handleMaskClick:qe,handleNext:Je,handlePrev:Ye,total:Xe,currentIndex:Ze,step:J,mergedOpen:Qe}=T(`useSetup:0:0`,()=>o(()=>{let{steps:e=[],defaultOpen:t=!1,defaultCurrent:r=0,placement:o=`bottom`,mask:c=!0,gap:l,arrow:u=!0,type:d=`default`,closeIcon:p,disabledInteraction:m=!1,keyboard:h=!0,zIndex:g=1400,scrollIntoViewOptions:_={block:`center`,inline:`center`,behavior:`smooth`},getPopupContainer:v,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:w,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,...M}=a,P=T(`useRef:1:0`,()=>s()),F=T(`useRef:1:1`,()=>s()),I=T(`ref:1:2`,()=>n(0)),L=typeof a.open==`boolean`,z=typeof a.current==`number`,B=T(`ref:1:3`,()=>n(t)),H=T(`ref:1:4`,()=>n(r)),U=T(`ref:1:5`,()=>n(!!t)),te=T(`ref:1:6`,()=>n(Math.max(0,Math.floor(r)))),W=T(`ref:1:7`,()=>n(L?!!a.open:t)),K=T(`ref:1:8`,()=>n(z?Math.max(0,Math.floor(a.current)):Math.max(0,Math.floor(r)))),ie=T(`ref:1:9`,()=>n({visibility:`hidden`,opacity:0})),ae=T(`ref:1:10`,()=>n(null)),se=T(`ref:1:11`,()=>n(null)),ce=T(`ref:1:12`,()=>n(G(o))),de={...N,...b},fe=()=>e.length,q=e=>{let t=fe();return t<=0?0:V(Math.floor(e),0,t-1)},pe=()=>L?!!a.open:W.value,me=()=>q(z?a.current:K.value),he=()=>e[me()],ge=()=>{I.value+=1},_e=e=>{W.value=e,L||(B.value=e),ge(),j&&j(e)},ve=e=>{let t=fe();if(t<=0)return;let n=V(e,0,t-1);K.value=n,z||(H.value=n),ge(),O&&O(n)},ye=()=>{typeof window>`u`||(F.current!=null&&window.cancelAnimationFrame(F.current),F.current=window.requestAnimationFrame(()=>{let e=P.current??document.querySelector(`[data-rue-tour-panel="true"]`),t=he();if(!pe()||!e||!t){ie.value={visibility:`hidden`,opacity:0},se.value=null,ae.value=null,ge();return}let n=oe(ee(t.target),l),r=e.getBoundingClientRect(),i=le(G(t.placement??o),n,Math.max(r.width,320),Math.max(r.height,1)),a=ne(t.arrow??u),s=re(t.arrow??u);se.value=n,ce.value=i.placement,ie.value={left:R(i.left),top:R(i.top),opacity:1,visibility:`visible`},ae.value=a?ue(i.placement,n,i.left,i.top,r.width,r.height,s):null,ge()}))},be=()=>{let e=he();if(!pe()||!e||typeof window>`u`)return;let t=ee(e.target),n=e.scrollIntoViewOptions??_;!t||n===!1||typeof t.scrollIntoView!=`function`||window.requestAnimationFrame(()=>{t.scrollIntoView(n===!0?{block:`center`,inline:`center`,behavior:`smooth`}:n)})},xe=()=>{he()?.onClose?.(),_e(!1),k&&k()},Se=()=>{xe()},Ce=()=>{let e=he();if(!e)return;e.nextButtonProps?.onClick?.();let t=me();if(t>=fe()-1){A&&A(),_e(!1);return}ve(t+1)},we=()=>{let e=he();e&&(e.prevButtonProps?.onClick?.(),ve(me()-1))};y(()=>{if(typeof window>`u`)return;let e=e=>{if(!(!pe()||!h)){if(e.key===`Escape`){e.preventDefault(),xe();return}if(e.key===`ArrowRight`){e.preventDefault(),Ce();return}e.key===`ArrowLeft`&&(e.preventDefault(),we())}},t=()=>{ye()};window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),window.addEventListener(`keydown`,e),be(),ye(),f(()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`keydown`,e),F.current!=null&&window.cancelAnimationFrame(F.current)})}),T(`watch:1:13`,()=>i(()=>a.open,e=>{typeof e==`boolean`&&(W.value=e)},{immediate:!0})),T(`watch:1:14`,()=>i(()=>a.current,e=>{typeof e==`number`&&(K.value=q(e))},{immediate:!0})),T(`watch:1:15`,()=>i(()=>e.length,()=>{K.value=q(K.value)},{immediate:!0})),T(`watch:1:16`,()=>i(()=>[pe(),me(),e.length,o,l?.radius??-1,Array.isArray(l?.offset)?`${l?.offset[0]??0}:${l?.offset[1]??0}`:l?.offset??-1],()=>{be(),ye()},{immediate:!0})),T(`watch:1:17`,()=>i(()=>t,e=>{let t=!!e;!L&&t!==U.value&&(U.value=t,B.value=t,W.value=t)})),T(`watch:1:18`,()=>i(()=>r,e=>{let t=Math.max(0,Math.floor(e));!z&&t!==te.value&&(te.value=t,H.value=t,K.value=q(t))}));let Te=e.length,Ee=(I.value,q(z?a.current:K.value));return{steps:e,defaultOpen:t,defaultCurrent:r,placement:o,mask:c,gap:l,arrow:u,type:d,closeIcon:p,disabledInteraction:m,keyboard:h,zIndex:g,scrollIntoViewOptions:_,getPopupContainer:v,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:w,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,rest:M,panelRef:P,rafIdRef:F,renderVersion:I,isControlledOpen:L,isControlledCurrent:z,uncontrolledOpen:B,uncontrolledCurrent:H,lastDefaultOpen:U,lastDefaultCurrent:te,currentOpenRef:W,currentIndexRef:K,panelStyleRef:ie,arrowStyleRef:ae,spotlightRef:se,placementRef:ce,mergedLocale:de,getTotal:fe,normalizeCurrentValue:q,getMergedOpen:pe,getMergedCurrent:me,getCurrentStep:he,requestRender:ge,requestOpenChange:_e,requestCurrentChange:ve,scheduleLayoutSync:ye,syncScrollIntoView:be,handleClose:xe,handleMaskClick:Se,handleNext:Ce,handlePrev:we,total:Te,currentIndex:Ee,step:Te>0?e[Ee]:void 0,mergedOpen:(I.value,L?!!a.open:W.value)}}));if(!Qe||!J||Xe===0)return null;let Y=W(J.mask??w),X=J.type??j,$e={...Fe,...J.locale},Z=z(pe,J.classNames),Q=B(me,J.styles),et=oe(ee(J.target),E),tt=le(G(J.placement??b),et,368,225),nt=je.value.visibility===`visible`?je.value:{left:R(tt.left),top:R(tt.top),opacity:1,visibility:`visible`},rt=je.value.visibility===`visible`?Pe.value:tt.placement,it=Ne.value,$=it&&it.width>0&&it.height>0?it:et,at=!!$,ot=J.indicatorsRender??ae,st=J.actionsRender??se,ct=J.closeIcon??M??k(de,{}),lt=O(`div`,{...ye,className:I(`pointer-events-none fixed inset-0`,Z.root,ce),style:L(Q.root,q,{zIndex:U}),"data-rue-tour":`true`,"data-rue-tour-placement":rt,"data-rue-tour-version":String(Se.value),"data-rue-tour-current":String(we?a.current:Ae.value),"data-rue-tour-total":String(Xe),"data-rue-tour-open":String(Ce?!!a.open:ke.value),children:[Y?k(v,{children:at?O(v,{children:[k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 top-0`,Z.mask),style:L(Q.mask,Y.style,{height:R($.top),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`top`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:`0px`,top:R($.top),width:R($.left),height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`left`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:R($.right),top:R($.top),width:`calc(100vw - ${$.right}px)`,height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`right`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 bottom-0`,Z.mask),style:L(Q.mask,Y.style,{top:R($.bottom),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`bottom`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-none fixed border border-primary/25 bg-primary/10 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_20px_60px_-36px_rgba(59,130,246,0.75)] backdrop-blur-[1px]`,Z.spotlight),style:L(Q.spotlight,{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)}),"data-rue-tour-spotlight":`true`}),P?k(`div`,{"aria-hidden":`true`,className:`pointer-events-auto fixed`,style:{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)},"data-rue-tour-blocker":`true`}):null]}):k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-0`,Z.mask),style:L(Q.mask,Y.style,{background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`full`})}):null,O(`div`,{ref:e=>{be.current=e??void 0,e&&We()},role:`dialog`,"aria-modal":Y?`true`:`false`,className:I(`pointer-events-auto fixed w-[min(92vw,23rem)] rounded-[14px] border px-0 py-0 transition duration-200 ease-out md:w-[23rem]`,X===`primary`?`border-primary/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.98),rgba(8,78,119,0.96))] text-primary-content shadow-[0_28px_90px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl`:`border-black/[0.06] bg-white text-[#262626] shadow-[0_12px_32px_rgba(0,0,0,0.18),0_3px_10px_rgba(0,0,0,0.12)]`,Z.panel,J.className),style:L(Q.panel,J.style,nt),"data-rue-tour-panel":`true`,children:[Me.value?k(`span`,{"aria-hidden":`true`,className:I(`absolute size-[14px] rotate-45 border`,X===`primary`?`border-primary/20 bg-sky-900 shadow-[8px_8px_18px_-14px_rgba(15,23,42,0.75)]`:`border-black/[0.06] bg-white shadow-[8px_8px_18px_-14px_rgba(0,0,0,0.28)]`,Z.arrow),style:L(Q.arrow,Me.value),"data-rue-tour-arrow":`true`}):null,O(`div`,{className:I(`relative px-6 pb-5 pt-5`,Z.section),style:Q.section,"data-rue-tour-section":`true`,children:[k(`button`,{type:`button`,"aria-label":String($e.close),className:I(`absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full transition`,X===`primary`?`text-primary-content/80 hover:bg-white/10 hover:text-primary-content`:`text-black/35 hover:bg-black/[0.04] hover:text-black/60`,Z.close),style:Q.close,onClick:Ke,"data-rue-tour-close":`true`,children:ct}),J.cover?k(`div`,{className:I(`mb-5 overflow-hidden rounded-[12px]`,Z.cover),style:Q.cover,"data-rue-tour-cover":`true`,children:J.cover}):null,O(`div`,{className:I(`pr-11`,Z.body),style:Q.body,"data-rue-tour-body":`true`,children:[O(`div`,{className:I(`mb-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium`,X===`primary`?`bg-white/10 text-primary-content/70`:`border border-black/[0.06] bg-[#fafafa] text-[#8c8c8c]`,Z.meta),style:Q.meta,"data-rue-tour-meta":`true`,children:[k(fe,{}),k(`span`,{children:`Tour`}),O(`span`,{className:X===`primary`?`text-primary-content/50`:`text-base-content/40`,children:[String(Ze+1).padStart(2,`0`),` / `,String(Xe).padStart(2,`0`)]})]}),k(`div`,{className:I(``,Z.header),style:Q.header,"data-rue-tour-header":`true`,children:J.title?k(`div`,{className:I(`text-[1.08rem] font-semibold leading-7 tracking-[0.01em]`,Z.title),style:Q.title,"data-rue-tour-title":`true`,children:J.title}):null}),J.description?k(`div`,{className:I(`mt-3 text-[15px] leading-7`,X===`primary`?`text-primary-content/80`:`text-[#595959]`,Z.description),style:Q.description,"data-rue-tour-description":`true`,children:J.description}):null]}),(()=>{let e=ot?ot(Ze,Xe):k(`div`,{className:I(`flex flex-wrap items-center gap-2.5`,Z.indicators),style:Q.indicators,"data-rue-tour-indicators":`true`,children:Array.from({length:Xe}).map((e,n)=>p(e=>{let r=S(`span`,e);return t(()=>{l(r,`key`,String(`indicator-${n}`))}),t(()=>{C(r,I(`block size-2.5 rounded-full transition-all duration-200`,n===Ze?X===`primary`?`bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)]`:`bg-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.14)]`:X===`primary`?`bg-white/30`:`bg-black/12`,Z.indicator))}),t(()=>{let e=Q.indicator;m(r,e)}),t(()=>{l(r,`data-rue-tour-indicator`,String(n===Ze?`active`:`inactive`))}),t(()=>{l(r,`data-rue-tour-indicator-index`,String(String(n)))}),r}))}),n=Ze===0||J.prevButtonProps?.disabled,r=!!J.nextButtonProps?.disabled,i=O(`div`,{className:I(`flex flex-wrap items-center justify-between gap-3`,Z.actions),style:Q.actions,"data-rue-tour-actions":`true`,children:[e,O(`div`,{className:I(`flex items-center gap-2.5`,Z.buttons),style:Q.buttons,"data-rue-tour-buttons":`true`,children:[k(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[84px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-white/18 bg-transparent text-primary-content/78 hover:bg-white/10 hover:text-primary-content disabled:border-white/10 disabled:text-white/28`:`border-black/[0.08] bg-white text-[#595959] hover:border-black/[0.12] hover:bg-[#fafafa] disabled:border-black/[0.06] disabled:bg-[#fafafa] disabled:text-black/25`,Z.prevButton,J.prevButtonProps?.className),style:L(Q.prevButton,J.prevButtonProps?.style),disabled:n,onClick:Ye,"data-rue-tour-prev":`true`,children:J.prevButtonProps?.children??$e.previous}),k(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[96px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-0 bg-white text-sky-900 shadow-[0_2px_0_rgba(255,255,255,0.08)] hover:bg-sky-50 disabled:bg-white/40 disabled:text-sky-950/40`:`border-[#1677ff] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.12)] hover:border-[#4096ff] hover:bg-[#4096ff] disabled:border-[#91caff] disabled:bg-[#91caff]`,Z.nextButton,J.nextButtonProps?.className),style:L(Q.nextButton,J.nextButtonProps?.style),disabled:r,onClick:Je,"data-rue-tour-next":Ze===Xe-1?`finish`:`next`,children:J.nextButtonProps?.children??(Ze===Xe-1?$e.finish:$e.next)})]})]}),a=st?st(i,{current:Ze,total:Xe}):i;return a?k(`div`,{className:I(`mt-5 border-t pt-4`,X===`primary`?`border-white/10`:`border-black/[0.06]`,Z.footer),style:Q.footer,"data-rue-tour-footer":`true`,children:a}):null})()]})]})]}),ut=H(K);return ut===!1||ut==null?lt:p(n=>{let i=u(),a=e(`rue:component:anchor`);return c(i,a),t(()=>{let e=x(A,{to:ut,children:lt});r(()=>_(e,i,a))}),i})},pe=n=>p(i=>{let a=S(`div`,i);C(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let o=S(`table`,a);c(a,o),C(o,`table table-zebra`);let s=S(`thead`,o);c(o,s);let d=S(`tr`,s);c(s,d);let f=S(`th`,d);c(d,f),c(f,g(`属性`));let m=S(`th`,d);c(d,m),c(m,g(`说明`));let h=S(`th`,d);c(d,h),c(h,g(`类型`));let v=S(`th`,d);c(d,v),c(v,g(`默认值`));let y=S(`tbody`,o);c(o,y);let b=e(`rue:list:start`),x=e(`rue:list:end`);c(y,b),c(y,x);let w=new Map;return t(()=>{w=E({items:n.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(n,i,a,o,s)=>{_(p(()=>{let i=u(),a=S(`tr`,i);c(i,a),t(()=>{l(a,`key`,String(n.prop))});let o=S(`td`,a);c(a,o);let s=S(`code`,o);c(o,s);let d=e(`rue:slot:anchor`);c(s,d),t(()=>{let e=n.prop;r(()=>_(e,s,d))});let f=S(`td`,a);c(a,f);let p=e(`rue:slot:anchor`);c(f,p),t(()=>{let e=n.description;r(()=>_(e,f,p))});let m=S(`td`,a);c(a,m);let h=S(`code`,m);c(m,h);let g=e(`rue:slot:anchor`);c(h,g),t(()=>{let e=n.type;r(()=>_(e,h,g))});let v=S(`td`,a);c(a,v);let y=S(`code`,v);c(v,y);let b=e(`rue:slot:anchor`);return c(y,b),t(()=>{let e=n.defaultValue;r(()=>_(e,y,b))}),i}),i,a)}})}),a}),me=T(`ref:1:0`,()=>n(`preview`)),he=T(`ref:1:1`,()=>n(`preview`)),ge=T(`ref:1:2`,()=>n(`preview`)),_e=T(`ref:1:3`,()=>n(`preview`)),ve=[`top`,`right`,`bottom`,`left`],ye=[{prop:`steps`,description:`引导步骤数组，每步可独立配置 target、placement、mask、cover 与按钮文案。`,type:`TourStepProps[]`,defaultValue:`[]`},{prop:`open / defaultOpen`,description:`受控或非受控地打开引导浮层。`,type:`boolean`,defaultValue:`false`},{prop:`current / defaultCurrent`,description:`受控或非受控地指定当前步骤索引。`,type:`number`,defaultValue:`0`},{prop:`placement`,description:`全局浮层位置，单步可继续覆盖。`,type:`TourPlacement`,defaultValue:`bottom`},{prop:`mask / disabledInteraction`,description:`控制遮罩是否启用，以及高亮区是否允许继续交互。`,type:`boolean | { color?: string; style?: object } / boolean`,defaultValue:`true / false`},{prop:`gap`,description:`调整高亮区与目标的间距和圆角，适合按钮、卡片、输入框等不同密度场景。`,type:`{ offset?: number | [number, number]; radius?: number }`,defaultValue:`{ offset: 8, radius: 18 }`},{prop:`arrow / closeIcon / type`,description:`配置箭头、关闭按钮与主视觉主题。`,type:`boolean | object / any / default | primary`,defaultValue:`true / x / default`},{prop:`indicatorsRender / actionsRender`,description:`自定义底部步骤指示器与整体操作区。`,type:`(current, total) => any / (originNode, info) => any`,defaultValue:`-`},{prop:`scrollIntoViewOptions`,description:`步骤切换时自动把目标滚动进视口，可关闭或传入原生配置。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`{ block: center, inline: center, behavior: smooth }`},{prop:`onChange / onClose / onFinish / onOpenChange`,description:`监听步骤变化、关闭、完成和打开状态变化。`,type:`function`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义节点扩展 root、mask、spotlight、panel、footer、indicator 等样式。`,type:`object`,defaultValue:`-`}],be=`import { ref, useRef } from '@rue-js/rue'
import { Tour } from '@rue-js/design'

const visible = ref(false)
const current = ref(0)
const session = ref(0)
const uploadRef = useRef<HTMLButtonElement>()
const saveRef = useRef<HTMLButtonElement>()
const moreRef = useRef<HTMLButtonElement>()

const steps = [
  {
    target: () => uploadRef.current ?? null,
    title: 'Upload',
    description: 'Bring files into the workspace first.',
    placement: 'top',
  },
  {
    target: () => saveRef.current ?? null,
    title: 'Save',
    description: 'Save your changes.',
    placement: 'top',
  },
  {
    target: () => moreRef.current ?? null,
    title: 'More',
    description: 'Open additional actions from here.',
    placement: 'left',
    nextButtonProps: { children: '完成引导' },
  },
]

const openTour = () => {
  session.value += 1
  current.value = 0
  visible.value = true
}

<button type="button" className="btn btn-primary" onClick={openTour}>
  Basic
</button>

<div className="flex items-center gap-3">
  <button ref={element => { uploadRef.current = element ?? undefined }} data-basic-tour-target="upload" type="button" className="btn btn-outline">
    Upload
  </button>
  <button ref={element => { saveRef.current = element ?? undefined }} data-basic-tour-target="save" type="button" className="btn btn-primary">
    Save
  </button>
  <button ref={element => { moreRef.current = element ?? undefined }} data-basic-tour-target="more" type="button" className="btn btn-outline" aria-label="More actions">
    More
  </button>
</div>

{visible.value ? (
  <Tour
    key={\`basic-tour-\${session.value}-\${current.value}-\${visible.value ? 'open' : 'closed'}\`}
    open={visible.value}
    current={current.value}
    steps={steps}
    onOpenChange={nextOpen => {
      visible.value = nextOpen
    }}
    onChange={nextCurrent => {
      current.value = nextCurrent
    }}
  />
) : null}
`,xe=`import { ref, useRef } from '@rue-js/rue'
import { Tour } from '@rue-js/design'

const open = ref(false)
const current = ref(0)
const heroRef = useRef<HTMLDivElement>()

const steps = [
  {
    placement: 'center',
    title: '欢迎来到新工作台',
    description: '第一步没有 target，会自动居中渲染。',
    cover: <div className="h-28 rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-700" />,
  },
  {
    target: () => heroRef.current,
    title: '非模态模式',
    description: '把 mask 设为 false 时，浮层只负责讲解，不阻断页面。',
    placement: 'bottomRight',
  },
]

<Tour
  open={open.value}
  current={current.value}
  mask={false}
  steps={steps}
  onOpenChange={nextOpen => {
    open.value = nextOpen
  }}
  onChange={nextCurrent => {
    current.value = nextCurrent
  }}
/>
`,Se=`import { ref, useRef } from '@rue-js/rue'
import { Tour } from '@rue-js/design'

const open = ref(false)
const current = ref(0)
const activePlacement = ref<'top' | 'right' | 'bottom' | 'left'>('right')
const anchorRef = useRef<HTMLButtonElement>()

<Tour
  open={open.value}
  current={current.value}
  placement={activePlacement.value}
  gap={{ offset: [12, 16], radius: 22 }}
  steps={[
    {
      target: () => anchorRef.current,
      title: '高亮区仍可交互',
      description: 'disabledInteraction 默认为 false，所以目标仍可被点击。',
    },
  ]}
  onOpenChange={nextOpen => {
    open.value = nextOpen
  }}
  onChange={nextCurrent => {
    current.value = nextCurrent
  }}
/>
`,Ce=`import { ref, useRef } from '@rue-js/rue'
import { Tour } from '@rue-js/design'

const open = ref(false)
const current = ref(0)
const summaryRef = useRef<HTMLDivElement>()
const approvalRef = useRef<HTMLButtonElement>()

const compactPrimaryStyles = {
  panel: {
    width: 'min(92vw, 21rem)',
    maxHeight: 'calc(100vh - 1.5rem)',
  },
  section: {
    maxHeight: 'calc(100vh - 1.5rem)',
    overflowY: 'auto',
    padding: '16px',
  },
  cover: {
    marginBottom: '12px',
  },
  meta: {
    color: 'rgba(255,255,255,0.82)',
    background: 'rgba(255,255,255,0.12)',
  },
  title: {
    color: '#fff',
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  description: {
    color: 'rgba(255,255,255,0.88)',
    marginTop: '10px',
    fontSize: '14px',
    lineHeight: '1.5rem',
  },
  footer: {
    marginTop: '14px',
    paddingTop: '12px',
    borderColor: 'rgba(255,255,255,0.14)',
  },
  actions: {
    gap: '10px',
  },
  buttons: {
    gap: '8px',
  },
  prevButton: {
    minWidth: '72px',
    height: '36px',
    color: '#fff',
    borderColor: 'rgba(255,255,255,0.22)',
  },
  nextButton: {
    minWidth: '88px',
    height: '36px',
  },
}

<Tour
  open={open.value}
  current={current.value}
  type="primary"
  styles={compactPrimaryStyles}
  steps={[
    {
      target: () => summaryRef.current,
      title: '自定义头图与主题',
      description: '单步可以覆盖 cover、按钮文案和主题。',
      cover: <div className="h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700" />,
    },
    {
      target: () => approvalRef.current,
      title: '重写底部 actions',
      description: '适合接入跳过、重播、埋点或业务动作。',
      nextButtonProps: { children: '提交并结束' },
    },
  ]}
  indicatorsRender={(step, total) => (
    <span className="text-xs uppercase tracking-[0.2em] text-white/80">{step + 1} / {total}</span>
  )}
  actionsRender={(originNode, info) => (
    <div className="flex items-center justify-between gap-3">
      <span className="text-xs uppercase tracking-[0.2em] text-white/72">phase {info.current + 1}</span>
      {originNode}
    </div>
  )}
  onOpenChange={nextOpen => {
    open.value = nextOpen
  }}
  onChange={nextCurrent => {
    current.value = nextCurrent
  }}
/>
`,we={panel:{width:`min(92vw, 21rem)`,maxHeight:`calc(100vh - 1.5rem)`},section:{maxHeight:`calc(100vh - 1.5rem)`,overflowY:`auto`,padding:`16px`},cover:{marginBottom:`12px`},meta:{color:`rgba(255,255,255,0.82)`,background:`rgba(255,255,255,0.12)`},title:{color:`#fff`,fontSize:`1rem`,lineHeight:`1.5rem`},description:{color:`rgba(255,255,255,0.88)`,marginTop:`10px`,fontSize:`14px`,lineHeight:`1.5rem`},footer:{marginTop:`14px`,paddingTop:`12px`,borderColor:`rgba(255,255,255,0.14)`},actions:{gap:`10px`},buttons:{gap:`8px`},prevButton:{minWidth:`72px`,height:`36px`,color:`#fff`,borderColor:`rgba(255,255,255,0.22)`},nextButton:{minWidth:`88px`,height:`36px`}},Te=()=>{let{tourVisible:i,current:f,tourSession:m,note:v,uploadRef:y,saveRef:E,moreRef:O,steps:k,startTour:A}=T(`useSetup:0:0`,()=>o(()=>{let e=T(`ref:1:4`,()=>n(!1)),t=T(`ref:1:5`,()=>n(0)),r=T(`ref:1:6`,()=>n(0)),i=T(`ref:1:7`,()=>n(`点击 Basic 按钮后弹出引导`)),a=T(`useRef:1:8`,()=>s()),o=T(`useRef:1:9`,()=>s()),c=T(`useRef:1:10`,()=>s());return{tourVisible:e,current:t,tourSession:r,note:i,uploadRef:a,saveRef:o,moreRef:c,steps:T(`computed:1:11`,()=>w(()=>[{target:()=>a.current??null,title:`Upload`,description:`Bring files into the workspace first.`,placement:`top`},{target:()=>o.current??null,title:`Save`,description:`Save your changes.`,placement:`top`},{target:()=>c.current??null,title:`More`,description:`Open additional actions from here.`,placement:`left`,nextButtonProps:{children:`完成引导`}}])),startTour:()=>{r.value+=1,t.value=0,e.value=!0,i.value=`正在查看 Upload`}}}));return p(n=>{let o=S(`div`,n);C(o,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]`);let s=S(`div`,o);c(o,s),C(s,`mb-6 text-[2.25rem] font-semibold tracking-tight text-base-content md:text-[2.7rem]`),c(s,g(`代码演示`));let w=S(`div`,o);c(o,w),C(w,`mb-5 flex flex-wrap items-center gap-3`);let T=S(`button`,w);c(w,T),l(T,`type`,`button`),C(T,`btn btn-primary rounded-2xl px-5`),a(T,`click`,A),c(T,g(`Basic`));let j=S(`button`,w);c(w,j),l(j,`type`,`button`),C(j,`btn btn-ghost rounded-2xl px-4`),a(j,`click`,()=>{f.value=0,i.value=!1,v.value=`基础引导已重置`}),c(j,g(`重置`));let M=S(`span`,w);c(w,M),C(M,`text-sm text-base-content/60`);let N=b(M);c(M,N),t(()=>{d(N,v.value)});let P=S(`div`,o);c(o,P),C(P,`rounded-[1.7rem] border border-base-300/70 bg-base-100/82 p-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.6)]`);let F=S(`div`,P);c(P,F),C(F,`rounded-[1.5rem] border border-base-300/70 bg-base-100 p-5`);let I=S(`div`,F);c(F,I),C(I,`mb-4 flex flex-wrap items-center justify-between gap-3`);let L=S(`div`,I);c(I,L);let R=S(`div`,L);c(L,R),C(R,`text-sm font-semibold text-base-content`),c(R,g(`Action Bar`));let z=S(`div`,L);c(L,z),C(z,`mt-1 text-sm text-base-content/55`),c(z,g(`点击 Basic 后，会依次讲解 Upload、Save 和更多操作。`));let B=S(`span`,I);c(I,B),C(B,`badge badge-outline badge-sm px-3 py-3`),c(B,g(`Code Demo`));let V=S(`div`,F);c(F,V),C(V,`flex flex-wrap items-center gap-3`);let H=S(`button`,V);c(V,H);let ee=D(H,()=>e=>{y.current=e??void 0});h(()=>{ee()}),l(H,`data-basic-tour-target`,`upload`),l(H,`type`,`button`),C(H,`btn btn-outline rounded-2xl px-6`),c(H,g(`Upload`));let U=S(`button`,V);c(V,U);let te=D(U,()=>e=>{E.current=e??void 0});h(()=>{te()}),l(U,`data-basic-tour-target`,`save`),l(U,`type`,`button`),C(U,`btn btn-primary rounded-2xl px-7`),c(U,g(`Save`));let W=S(`button`,V);c(V,W);let ne=D(W,()=>e=>{O.current=e??void 0});h(()=>{ne()}),l(W,`data-basic-tour-target`,`more`),l(W,`type`,`button`),l(W,`aria-label`,`More actions`),C(W,`btn btn-outline rounded-2xl px-5`),c(W,g(`More`));let re=e(`rue:slot:anchor`);return c(o,re),t(()=>{let n=i.value?p(()=>{let n=u(),a=e(`rue:component:anchor`);return c(n,a),t(()=>{let e=x(q,{key:`basic-tour-${m.value}-${f.value}-${i.value?`open`:`closed`}`,open:i.value,current:f.value,steps:k.get(),gap:{offset:[10,14],radius:18},onOpenChange:e=>{i.value=e,e||(f.value=0)},onChange:e=>{f.value=e,v.value=`正在查看 ${k.get()[e]?.title??`第 ${e+1} 步`}`},onClose:()=>{v.value=`基础引导已关闭`},onFinish:()=>{f.value=0,v.value=`基础引导已完成`}});r(()=>_(e,n,a))}),n}):``;r(()=>_(n,o,re))}),o})},Ee=()=>{let{open:i,current:d,tourSession:f,heroRef:m,metricsRef:v,steps:y}=T(`useSetup:0:0:dup1`,()=>o(()=>{let e=T(`ref:1:12`,()=>n(!1)),t=T(`ref:1:13`,()=>n(0)),r=T(`ref:1:14`,()=>n(0)),i=T(`useRef:1:15`,()=>s()),a=T(`useRef:1:16`,()=>s());return{open:e,current:t,tourSession:r,heroRef:i,metricsRef:a,steps:T(`computed:1:17`,()=>w(()=>[{placement:`center`,title:`欢迎来到 Rue Tour`,description:`第一步不绑定 target，会自动居中显示。适合首访说明、版本更新和整页 onboarding。`,cover:k(`div`,{className:`h-28 rounded-[1.25rem] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续看页面`}},{target:()=>i.current,title:`非模态说明更适合轻引导`,description:`这里关闭了遮罩，用户仍然可以浏览内容，不会被强行打断。`,placement:`bottomRight`},{target:()=>a.current,title:`局部强调也能单独覆盖 placement`,description:`同一套 Tour 可以混合 center 步骤与 target 步骤。`,placement:`top`,nextButtonProps:{children:`知道了`}}]))}}));return p(n=>{let o=S(`div`,n);C(o,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let s=S(`div`,o);c(o,s),C(s,`mb-4 flex flex-wrap items-center justify-between gap-3`);let b=S(`div`,s);c(s,b);let w=S(`div`,b);c(b,w),C(w,`text-sm font-semibold`),c(w,g(`欢迎页 + 非模态引导`));let T=S(`div`,b);c(b,T),C(T,`mt-1 text-sm text-base-content/60`),c(T,g(`适合把版本亮点和页面主内容穿在同一条体验线上。`));let O=S(`button`,s);c(s,O),l(O,`type`,`button`),C(O,`btn btn-outline btn-sm rounded-full`),a(O,`click`,()=>{f.value+=1,d.value=0,i.value=!0}),c(O,g(`打开欢迎引导`));let k=S(`div`,o);c(o,k);let A=D(k,()=>e=>{m.current=e??void 0});h(()=>{A()}),C(k,`rounded-[1.7rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 p-6 text-white`);let j=S(`div`,k);c(k,j),C(j,`badge badge-sm border-0 bg-white/15 text-white`),c(j,g(`Release Note`));let M=S(`div`,k);c(k,M),C(M,`mt-4 text-2xl font-semibold`),c(M,g(`Shipping cockpit for product operations`));let N=S(`div`,k);c(k,N),C(N,`mt-2 max-w-xl text-sm text-white/75`),c(N,g(`把素材、上线窗口、审批节点和回放笔记收进同一块工作区，不必在多个页面之间反复跳转。`));let P=S(`div`,o);c(o,P);let F=D(P,()=>e=>{v.current=e??void 0});h(()=>{F()}),C(P,`mt-4 grid gap-4 md:grid-cols-3`);let I=e(`rue:list:start`),L=e(`rue:list:end`);c(P,I),c(P,L);let R=new Map;t(()=>{R=E({items:[[`Launches`,`12`],[`Reviews`,`5`],[`Pending`,`2`]],getKey:(e,t)=>e[0],elements:R,parent:P,before:L,singleRoot:!0,trackIndex:!1,start:I,renderItem:(n,i,a,o,s)=>{_(p(()=>{let i=u(),a=S(`div`,i);c(i,a),t(()=>{l(a,`key`,String(n[0]))}),C(a,`rounded-[1.4rem] border border-base-300/70 bg-base-100/80 p-4`);let o=S(`div`,a);c(a,o),C(o,`text-sm text-base-content/55`);let s=e(`rue:slot:anchor`);c(o,s),t(()=>{let e=n[0];r(()=>_(e,o,s))});let d=S(`div`,a);c(a,d),C(d,`mt-2 text-3xl font-semibold`);let f=e(`rue:slot:anchor`);return c(d,f),t(()=>{let e=n[1];r(()=>_(e,d,f))}),i}),i,a)}})});let z=e(`rue:slot:anchor`);return c(o,z),t(()=>{let n=i.value?p(()=>{let n=u(),a=e(`rue:component:anchor`);return c(n,a),t(()=>{let e=x(q,{key:`welcome-tour-${f.value}-${d.value}-${i.value?`open`:`closed`}`,open:i.value,current:d.value,mask:!1,steps:y.get(),onOpenChange:e=>{i.value=e,e||(d.value=0)},onChange:e=>{d.value=e},onFinish:()=>{d.value=0}});r(()=>_(e,n,a))}),n}):``;r(()=>_(n,o,z))}),o})},De=()=>{let{open:i,current:f,tourSession:m,tapCount:v,activePlacement:y,anchorRef:O,steps:k}=T(`useSetup:0:0:dup2`,()=>o(()=>{let e=T(`ref:1:18`,()=>n(!1)),t=T(`ref:1:19`,()=>n(0)),r=T(`ref:1:20`,()=>n(0)),i=T(`ref:1:21`,()=>n(0)),a=T(`ref:1:22`,()=>n(`right`)),o=T(`useRef:1:23`,()=>s());return{open:e,current:t,tourSession:r,tapCount:i,activePlacement:a,anchorRef:o,steps:T(`computed:1:24`,()=>w(()=>[{target:()=>o.current,title:`高亮区默认仍可点击`,description:`disabledInteraction 默认为 false，所以聚焦区域内的按钮还能继续触发业务动作。`}]))}}));return p(n=>{let o=S(`div`,n);C(o,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let s=S(`div`,o);c(o,s),C(s,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=S(`div`,s);c(s,w);let T=S(`div`,w);c(w,T),C(T,`text-sm font-semibold`),c(T,g(`Placement 与高亮区实验`));let A=S(`div`,w);c(w,A),C(A,`mt-1 text-sm text-base-content/60`),c(A,g(`切换浮层方向时，目标按钮仍然可以在洞口区域被点击。`));let j=S(`button`,s);c(s,j),l(j,`type`,`button`),C(j,`btn btn-outline btn-sm rounded-full`),a(j,`click`,()=>{m.value+=1,f.value=0,i.value=!0}),c(j,g(`打开定位实验`));let M=S(`div`,o);c(o,M),C(M,`mb-4 flex flex-wrap gap-2`);let N=e(`rue:list:start`),P=e(`rue:list:end`);c(M,N),c(M,P);let F=new Map;t(()=>{F=E({items:ve||[],getKey:(e,t)=>e,elements:F,parent:M,before:P,singleRoot:!0,trackIndex:!1,start:N,renderItem:(e,n,r,o,s)=>{_(p(()=>{let n=u(),r=S(`button`,n);c(n,r),t(()=>{l(r,`key`,String(e))}),l(r,`type`,`button`),t(()=>{C(r,`btn btn-sm rounded-full ${y.value===e?`btn-primary`:`btn-outline`}`)}),a(r,`click`,()=>{y.value=e,m.value+=1,f.value=0,i.value=!0});let o=b(r);return c(r,o),t(()=>{d(o,e)}),n}),n,r)}})});let I=S(`div`,o);c(o,I),C(I,`grid min-h-[18rem] place-items-center rounded-[1.7rem] border border-dashed border-base-300/80 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_50%)] p-6`);let L=S(`button`,I);c(I,L);let R=D(L,()=>e=>{O.current=e??void 0});h(()=>{R()}),l(L,`type`,`button`),C(L,`btn btn-primary rounded-full px-6`),a(L,`click`,()=>{v.value+=1}),c(L,g(`已点击 `));let z=b(L);c(L,z),t(()=>{d(z,v.value)}),c(L,g(` 次`));let B=e(`rue:slot:anchor`);return c(o,B),t(()=>{let n=i.value?p(()=>{let n=u(),a=e(`rue:component:anchor`);return c(n,a),t(()=>{let e=x(q,{key:`placement-tour-${m.value}-${y.value}-${f.value}`,open:i.value,current:f.value,placement:y.value,gap:{offset:[12,16],radius:22},mask:{color:`rgba(15, 23, 42, 0.38)`},steps:k.get(),onOpenChange:e=>{i.value=e,e||(f.value=0)},onChange:e=>{f.value=e}});r(()=>_(e,n,a))}),n}):``;r(()=>_(n,o,B))}),o})},Oe=()=>{let{open:i,current:d,tourSession:f,summaryRef:m,timelineRef:v,approvalRef:y,steps:b}=T(`useSetup:0:0:dup3`,()=>o(()=>{let e=T(`ref:1:25`,()=>n(!1)),t=T(`ref:1:26`,()=>n(0)),r=T(`ref:1:27`,()=>n(0)),i=T(`useRef:1:28`,()=>s()),a=T(`useRef:1:29`,()=>s()),o=T(`useRef:1:30`,()=>s());return{open:e,current:t,tourSession:r,summaryRef:i,timelineRef:a,approvalRef:o,steps:T(`computed:1:31`,()=>w(()=>[{target:()=>i.current,title:`把封面和主题一起做强`,description:`默认样式延续 Rue 的轻卡片语言，但你也可以切到 primary，让产品引导更像一个任务流。`,placement:`bottomLeft`,cover:k(`div`,{className:`h-20 rounded-[1.25rem] bg-gradient-to-br from-cyan-300 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续`}},{target:()=>a.current,title:`中间步骤适合解释过程`,description:`当你要穿过多个版块时，指示器和 actionsRender 可以直接融入业务语境。`,placement:`topLeft`,prevButtonProps:{children:`返回`},nextButtonProps:{children:`看审批`}},{target:()=>o.current,title:`最后把业务动作接住`,description:`把完成按钮改成提交、发布、同步都可以，不需要额外封装。`,placement:`left`,nextButtonProps:{children:`提交并结束`}}]))}}));return p(n=>{let o=S(`div`,n);C(o,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let s=S(`div`,o);c(o,s),C(s,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=S(`div`,s);c(s,w);let T=S(`div`,w);c(w,T),C(T,`text-sm font-semibold`),c(T,g(`自定义 indicator 与 actions`));let A=S(`div`,w);c(w,A),C(A,`mt-1 text-sm text-base-content/60`),c(A,g(`这套写法更接近常见分步引导的心智，但视觉和布局还是 Rue 自己的。`));let j=S(`button`,s);c(s,j),l(j,`type`,`button`),C(j,`btn btn-outline btn-sm rounded-full`),a(j,`click`,()=>{f.value+=1,d.value=0,i.value=!0}),c(j,g(`启动主视觉引导`));let M=S(`div`,o);c(o,M);let N=D(M,()=>e=>{m.current=e??void 0});h(()=>{N()}),C(M,`rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let P=S(`div`,M);c(M,P),C(P,`flex flex-wrap items-center justify-between gap-3`);let F=S(`div`,P);c(P,F);let I=S(`div`,F);c(F,I),C(I,`badge badge-outline badge-sm`),c(I,g(`Launch Summary`));let L=S(`div`,F);c(F,L),C(L,`mt-3 text-xl font-semibold`),c(L,g(`One surface for launch, approval and playback`));let R=S(`div`,F);c(F,R),C(R,`mt-2 max-w-xl text-sm text-base-content/60`),c(R,g(`用一个页面完成素材汇总、审批流转、上线窗口对齐和上线后的回放，不再分散在多个工具里。`));let z=S(`div`,P);c(P,z),C(z,`grid h-16 w-16 place-items-center rounded-3xl bg-primary/10 text-primary`);let B=S(`svg`,z);c(z,B),l(B,`viewBox`,`0 0 24 24`),l(B,`fill`,`none`),l(B,`stroke`,`currentColor`),l(B,`strokeWidth`,`1.8`),C(B,`size-8`);let V=S(`path`,B);c(B,V),l(V,`strokeLinecap`,`round`),l(V,`strokeLinejoin`,`round`),l(V,`d`,`m12 3 2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8L12 3Z`);let H=S(`div`,o);c(o,H);let ee=D(H,()=>e=>{v.current=e??void 0});h(()=>{ee()}),C(H,`mt-4 rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let U=S(`div`,H);c(H,U),C(U,`grid gap-3 md:grid-cols-3`);let te=e(`rue:list:start`),W=e(`rue:list:end`);c(U,te),c(U,W);let ne=new Map;t(()=>{ne=E({items:[[`Brief`,`完成背景与目标归纳`],[`Review`,`跨团队确认视觉与文案`],[`Ship`,`统一 CTA 与发布时间窗`]],getKey:(e,t)=>e[0],elements:ne,parent:U,before:W,singleRoot:!0,trackIndex:!1,start:te,renderItem:(n,i,a,o,s)=>{_(p(()=>{let i=u(),a=S(`div`,i);c(i,a),t(()=>{l(a,`key`,String(n[0]))}),C(a,`rounded-[1.2rem] bg-base-200/65 px-4 py-4`);let o=S(`div`,a);c(a,o),C(o,`text-sm font-semibold`);let s=e(`rue:slot:anchor`);c(o,s),t(()=>{let e=n[0];r(()=>_(e,o,s))});let d=S(`div`,a);c(a,d),C(d,`mt-2 text-sm text-base-content/60`);let f=e(`rue:slot:anchor`);return c(d,f),t(()=>{let e=n[1];r(()=>_(e,d,f))}),i}),i,a)}})});let re=S(`div`,o);c(o,re),C(re,`mt-4 flex justify-end`);let G=S(`button`,re);c(re,G);let K=D(G,()=>e=>{y.current=e??void 0});h(()=>{K()}),l(G,`type`,`button`),C(G,`btn btn-primary rounded-full px-5`),c(G,g(`提交审批`));let ie=e(`rue:slot:anchor`);return c(o,ie),t(()=>{let n=i.value?p(()=>{let n=u(),a=e(`rue:component:anchor`);return c(n,a),t(()=>{let e=x(q,{key:`custom-tour-${f.value}-${d.value}-${i.value?`open`:`closed`}`,open:i.value,current:d.value,type:`primary`,styles:we,steps:b.get(),indicatorsRender:(e,t)=>O(`div`,{className:`flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/80`,children:[k(`span`,{children:`phase`}),k(`span`,{className:`rounded-full border border-white/20 px-2 py-1 text-white`,children:e+1}),k(`span`,{children:`/`}),k(`span`,{children:t})]}),actionsRender:(e,t)=>O(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[O(`div`,{className:`text-xs uppercase tracking-[0.24em] text-white/70`,children:[`launch guide · step `,t.current+1]}),e]}),onOpenChange:e=>{i.value=e,e||(d.value=0)},onChange:e=>{d.value=e},onFinish:()=>{d.value=0}});r(()=>_(e,n,a))}),n}):``;r(()=>_(n,o,ie))}),o})},ke=()=>p(n=>{let i=u(),a=e(`rue:component:anchor`);return c(i,a),_(x(j,{children:p(()=>{let n=u(),i=S(`div`,n);c(n,i),C(i,`max-w-none prose prose-sm md:prose-base`);let a=S(`h1`,i);c(i,a),c(a,g(`Tour 漫游引导`));let o=S(`p`,i);c(i,o),C(o,`text-sm mt-3 mb-3`),c(o,g(`Tour 用分步浮层把用户带过关键入口、局部强调和最终动作。Rue 的实现参考了成熟组件库的能力模型，但视觉仍然保持自己的 card、badge 和 button 语言，不直接照搬现成面板样式。`));let s=S(`p`,i);c(i,s),C(s,`text-sm mt-3 mb-3`),c(s,g(`这次补齐的不只是静态外观，而是完整执行逻辑：围绕真实 DOM target 做高亮、自动定位、切步滚动、非模态展示，以及自定义 indicator 和底部 actions。`));let l=S(`h2`,i);c(i,l),c(l,g(`何时使用`));let d=S(`ul`,i);c(i,d);let f=S(`li`,d);c(d,f),c(f,g(`需要把新用户逐步带过核心入口、关键按钮或首次配置流程。`));let p=S(`li`,d);c(d,p),c(p,g(`需要在复杂页面里突出某个局部区域，并配合文案解释当前操作目的。`));let m=S(`li`,d);c(d,m),c(m,g(`需要把产品说明、轻 onboarding 和最终业务动作串成一条连续体验。`));let h=e(`rue:component:anchor`);c(n,h),t(()=>{let e=x(M,{title:`基础引导`,summary:`点击 Basic 后，从 Upload、Save 到更多操作依次弹出讲解。`,tab:me,preview:Te,code:be});r(()=>_(e,n,h))});let v=e(`rue:component:anchor`);c(n,v),t(()=>{let e=x(M,{title:`欢迎页与非模态`,summary:`展示没有 target 的中心步骤，以及 mask=false 时的轻量引导方式。`,tab:he,preview:Ee,code:xe});r(()=>_(e,n,v))});let y=e(`rue:component:anchor`);c(n,y),t(()=>{let e=x(M,{title:`Placement 与交互洞口`,summary:`切换 top/right/bottom/left，并验证高亮区默认仍可继续触发目标元素。`,tab:ge,preview:De,code:Se});r(()=>_(e,n,y))});let b=e(`rue:component:anchor`);c(n,b),t(()=>{let e=x(M,{title:`自定义指示器与动作区`,summary:`通过 primary 主题、cover、indicatorsRender 和 actionsRender 把引导做成更完整的任务流。`,tab:_e,preview:Oe,code:Ce});r(()=>_(e,n,b))});let w=S(`div`,n);c(n,w),C(w,`component-preview not-prose text-base-content my-6 lg:my-12`);let T=S(`h2`,w);c(w,T),C(T,`component-preview-title mt-2 mb-3 text-lg font-semibold`),c(T,g(`# API`));let E=e(`rue:component:anchor`);return c(w,E),t(()=>{let e=x(pe,{rows:ye});r(()=>_(e,w,E))}),n})}),i,a),i});export{ke as default};
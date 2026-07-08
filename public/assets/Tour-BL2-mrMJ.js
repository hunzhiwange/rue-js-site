import{Bt as e,Q as t,Vt as n,Xt as r,Z as i,an as a,at as o,bt as s,dt as c,i as l,it as u,l as d,m as f,n as p,nt as m,o as h,on as g,pt as _,r as v,rt as y,t as b,tn as x,tt as S,vt as C,wt as w}from"./vapor-runtime-x7F5M-49.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-D1LP4JjK.js";import{t as O}from"./Teleport-bniowk5x.js";import{n as k,t as A}from"./src-Dlanwp1X.js";import{r as j}from"./SidebarPlaygroundDesign-CK4W0Rsr.js";import{t as M}from"./PreviewBlock-CCAV1yb7.js";var N={next:`下一步`,previous:`上一步`,finish:`完成`,close:`关闭引导`},P=16,F=18,I=(...e)=>e.filter(Boolean).join(` `),L=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},R=e=>`${e}px`,z=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=I(e?.[r],t?.[r]);i&&(n[r]=i)}),n},B=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=L(e?.[r],t?.[r]);Object.keys(i).length>0&&(n[r]=i)}),n},V=(e,t,n)=>n<t?t:Math.min(Math.max(e,t),n),H=e=>typeof e==`function`?e():e,ee=e=>typeof e==`function`?e()??null:e??null,U=e=>{let t=e?.offset??8;if(Array.isArray(t))return{horizontal:Math.max(0,t[0]??0),vertical:Math.max(0,t[1]??t[0]??0)};let n=Math.max(0,t);return{horizontal:n,vertical:n}},te=e=>Math.max(0,e?.radius??18),W=e=>e===!1?null:e&&typeof e==`object`?{color:e.color??`rgba(15, 23, 42, 0.46)`,style:e.style}:{color:`rgba(15, 23, 42, 0.46)`,style:void 0},ne=e=>e!==!1,re=e=>typeof e==`object`?e.pointAtCenter!==!1:!0,G=e=>e??`bottom`,K=e=>e===`center`?`center`:e.startsWith(`top`)?`top`:e.startsWith(`bottom`)?`bottom`:e.startsWith(`left`)?`left`:`right`,ie=e=>{switch(e){case`top`:return`bottom`;case`topLeft`:return`bottomLeft`;case`topRight`:return`bottomRight`;case`bottom`:return`top`;case`bottomLeft`:return`topLeft`;case`bottomRight`:return`topRight`;case`left`:return`right`;case`leftTop`:return`rightTop`;case`leftBottom`:return`rightBottom`;case`right`:return`left`;case`rightTop`:return`leftTop`;case`rightBottom`:return`leftBottom`;default:return`center`}},ae=()=>typeof window>`u`||typeof document>`u`?{width:1440,height:900}:{width:document.documentElement.clientWidth||window.innerWidth||1440,height:document.documentElement.clientHeight||window.innerHeight||900},oe=(e,t)=>{if(!e)return null;let n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let r=ae(),i=U(t),a=te(t),o=V(n.left-i.horizontal,4,r.width-4),s=V(n.top-i.vertical,4,r.height-4),c=V(n.right+i.horizontal,4,r.width-4),l=V(n.bottom+i.vertical,4,r.height-4),u=Math.max(0,c-o),d=Math.max(0,l-s);return{left:o,top:s,width:u,height:d,radius:a,centerX:o+u/2,centerY:s+d/2,right:c,bottom:l}},se=(e,t,n,r)=>{switch(e){case`top`:return{left:t.centerX-n/2,top:t.top-r-F};case`topLeft`:return{left:t.left,top:t.top-r-F};case`topRight`:return{left:t.right-n,top:t.top-r-F};case`bottom`:return{left:t.centerX-n/2,top:t.bottom+F};case`bottomLeft`:return{left:t.left,top:t.bottom+F};case`bottomRight`:return{left:t.right-n,top:t.bottom+F};case`left`:return{left:t.left-n-F,top:t.centerY-r/2};case`leftTop`:return{left:t.left-n-F,top:t.top};case`leftBottom`:return{left:t.left-n-F,top:t.bottom-r};case`right`:return{left:t.right+F,top:t.centerY-r/2};case`rightTop`:return{left:t.right+F,top:t.top};case`rightBottom`:return{left:t.right+F,top:t.bottom-r};default:return{left:t.centerX-n/2,top:t.bottom+F}}},ce=(e,t,n,r,i)=>{switch(K(e)){case`top`:return t.top<P;case`bottom`:return t.top+r>i.height-P;case`left`:return t.left<P;case`right`:return t.left+n>i.width-P;default:return!1}},le=(e,t,n,r)=>{let i=ae();if(!t||e===`center`)return{placement:`center`,left:V((i.width-n)/2,P,i.width-n-P),top:V((i.height-r)/2,P,i.height-r-P)};let a=e,o=se(a,t,n,r);return ce(a,o,n,r,i)&&(a=ie(a),o=se(a,t,n,r)),{placement:a,left:V(o.left,P,i.width-n-P),top:V(o.top,P,i.height-r-P)}},ue=(e,t,n,r,i,a,o)=>{if(!t||e===`center`)return null;let s=V(t.centerX-n-9,24,i-24),c=V(t.centerY-r-9,24,a-24),l=o?void 0:28;switch(K(e)){case`top`:return{left:R(l??s),bottom:`-9px`};case`bottom`:return{left:R(l??s),top:`-9px`};case`left`:return{top:R(l??c),right:`-9px`};case`right`:return{top:R(l??c),left:`-9px`};default:return null}},de=()=>d(e=>{let n=y(`svg`,e);c(n,`viewBox`,`0 0 24 24`),c(n,`fill`,`none`),c(n,`stroke`,`currentColor`),c(n,`strokeWidth`,`1.9`),_(n,`size-4`);let r=y(`path`,n);return t(n,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`M6 6l12 12M18 6 6 18`),n}),fe=()=>d(e=>{let n=y(`svg`,e);c(n,`viewBox`,`0 0 24 24`),c(n,`fill`,`none`),c(n,`stroke`,`currentColor`),c(n,`strokeWidth`,`1.8`),_(n,`size-4`);let r=y(`path`,n);t(n,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`d`,`m12 3 1.7 4.2L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.8L12 3Z`);let i=y(`path`,n);return t(n,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M5 19h.01M12 21h.01M19 19h.01`),n}),q=i=>{let{steps:o,defaultOpen:s,defaultCurrent:u,placement:p,mask:w,gap:E,arrow:D,type:j,closeIcon:M,disabledInteraction:P,keyboard:F,zIndex:U,scrollIntoViewOptions:te,getPopupContainer:K,locale:ie,indicatorsRender:ae,actionsRender:se,className:ce,style:q,classNames:pe,styles:me,onChange:he,onClose:ge,onFinish:_e,onOpenChange:ve,rest:ye,panelRef:be,rafIdRef:xe,renderVersion:Se,isControlledOpen:Ce,isControlledCurrent:we,uncontrolledOpen:Te,uncontrolledCurrent:Ee,lastDefaultOpen:De,lastDefaultCurrent:Oe,currentOpenRef:ke,currentIndexRef:Ae,panelStyleRef:je,arrowStyleRef:Me,spotlightRef:Ne,placementRef:Pe,mergedLocale:Fe,getTotal:Ie,normalizeCurrentValue:Le,getMergedOpen:Re,getMergedCurrent:ze,getCurrentStep:Be,requestRender:Ve,requestOpenChange:He,requestCurrentChange:Ue,scheduleLayoutSync:We,syncScrollIntoView:Ge,handleClose:Ke,handleMaskClick:qe,handleNext:Je,handlePrev:Ye,total:Xe,currentIndex:Ze,step:J,mergedOpen:Qe}=T(`useSetup:0:0`,()=>g(()=>{let{steps:t=[],defaultOpen:n=!1,defaultCurrent:o=0,placement:s=`bottom`,mask:c=!0,gap:u,arrow:d=!0,type:f=`default`,closeIcon:p,disabledInteraction:m=!1,keyboard:h=!0,zIndex:g=1400,scrollIntoViewOptions:_={block:`center`,inline:`center`,behavior:`smooth`},getPopupContainer:y,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:w,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,...M}=i,P=T(`useRef:1:0`,()=>a()),F=T(`useRef:1:1`,()=>a()),I=T(`ref:1:2`,()=>r(0)),L=typeof i.open==`boolean`,z=typeof i.current==`number`,B=T(`ref:1:3`,()=>r(n)),H=T(`ref:1:4`,()=>r(o)),U=T(`ref:1:5`,()=>r(!!n)),te=T(`ref:1:6`,()=>r(Math.max(0,Math.floor(o)))),W=T(`ref:1:7`,()=>r(L?!!i.open:n)),K=T(`ref:1:8`,()=>r(z?Math.max(0,Math.floor(i.current)):Math.max(0,Math.floor(o)))),ie=T(`ref:1:9`,()=>r({visibility:`hidden`,opacity:0})),ae=T(`ref:1:10`,()=>r(null)),se=T(`ref:1:11`,()=>r(null)),ce=T(`ref:1:12`,()=>r(G(s))),de={...N,...b},fe=()=>t.length,q=e=>{let t=fe();return t<=0?0:V(Math.floor(e),0,t-1)},pe=()=>L?!!i.open:W.value,me=()=>q(z?i.current:K.value),he=()=>t[me()],ge=()=>{I.value+=1},_e=e=>{W.value=e,L||(B.value=e),ge(),j&&j(e)},ve=e=>{let t=fe();if(t<=0)return;let n=V(e,0,t-1);K.value=n,z||(H.value=n),ge(),O&&O(n)},ye=()=>{typeof window>`u`||(F.current!=null&&window.cancelAnimationFrame(F.current),F.current=window.requestAnimationFrame(()=>{let e=P.current??document.querySelector(`[data-rue-tour-panel="true"]`),t=he();if(!pe()||!e||!t){ie.value={visibility:`hidden`,opacity:0},se.value=null,ae.value=null,ge();return}let n=oe(ee(t.target),u),r=e.getBoundingClientRect(),i=le(G(t.placement??s),n,Math.max(r.width,320),Math.max(r.height,1)),a=ne(t.arrow??d),o=re(t.arrow??d);se.value=n,ce.value=i.placement,ie.value={left:R(i.left),top:R(i.top),opacity:1,visibility:`visible`},ae.value=a?ue(i.placement,n,i.left,i.top,r.width,r.height,o):null,ge()}))},be=()=>{let e=he();if(!pe()||!e||typeof window>`u`)return;let t=ee(e.target),n=e.scrollIntoViewOptions??_;!t||n===!1||typeof t.scrollIntoView!=`function`||window.requestAnimationFrame(()=>{t.scrollIntoView(n===!0?{block:`center`,inline:`center`,behavior:`smooth`}:n)})},xe=()=>{he()?.onClose?.(),_e(!1),k&&k()},Se=()=>{xe()},Ce=()=>{let e=he();if(!e)return;e.nextButtonProps?.onClick?.();let t=me();if(t>=fe()-1){A&&A(),_e(!1);return}ve(t+1)},we=()=>{let e=he();e&&(e.prevButtonProps?.onClick?.(),ve(me()-1))};v(()=>{if(typeof window>`u`)return;let e=e=>{if(!(!pe()||!h)){if(e.key===`Escape`){e.preventDefault(),xe();return}if(e.key===`ArrowRight`){e.preventDefault(),Ce();return}e.key===`ArrowLeft`&&(e.preventDefault(),we())}},t=()=>{ye()};window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),window.addEventListener(`keydown`,e),be(),ye(),l(()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`keydown`,e),F.current!=null&&window.cancelAnimationFrame(F.current)})}),T(`watch:1:13`,()=>e(()=>i.open,e=>{typeof e==`boolean`&&(W.value=e)},{immediate:!0})),T(`watch:1:14`,()=>e(()=>i.current,e=>{typeof e==`number`&&(K.value=q(e))},{immediate:!0})),T(`watch:1:15`,()=>e(()=>t.length,()=>{K.value=q(K.value)},{immediate:!0})),T(`watch:1:16`,()=>e(()=>[pe(),me(),t.length,s,u?.radius??-1,Array.isArray(u?.offset)?`${u?.offset[0]??0}:${u?.offset[1]??0}`:u?.offset??-1],()=>{be(),ye()},{immediate:!0})),T(`watch:1:17`,()=>e(()=>n,e=>{let t=!!e;!L&&t!==U.value&&(U.value=t,B.value=t,W.value=t)})),T(`watch:1:18`,()=>e(()=>o,e=>{let t=Math.max(0,Math.floor(e));!z&&t!==te.value&&(te.value=t,H.value=t,K.value=q(t))}));let Te=t.length,Ee=(I.value,q(z?i.current:K.value));return{steps:t,defaultOpen:n,defaultCurrent:o,placement:s,mask:c,gap:u,arrow:d,type:f,closeIcon:p,disabledInteraction:m,keyboard:h,zIndex:g,scrollIntoViewOptions:_,getPopupContainer:y,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:w,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,rest:M,panelRef:P,rafIdRef:F,renderVersion:I,isControlledOpen:L,isControlledCurrent:z,uncontrolledOpen:B,uncontrolledCurrent:H,lastDefaultOpen:U,lastDefaultCurrent:te,currentOpenRef:W,currentIndexRef:K,panelStyleRef:ie,arrowStyleRef:ae,spotlightRef:se,placementRef:ce,mergedLocale:de,getTotal:fe,normalizeCurrentValue:q,getMergedOpen:pe,getMergedCurrent:me,getCurrentStep:he,requestRender:ge,requestOpenChange:_e,requestCurrentChange:ve,scheduleLayoutSync:ye,syncScrollIntoView:be,handleClose:xe,handleMaskClick:Se,handleNext:Ce,handlePrev:we,total:Te,currentIndex:Ee,step:Te>0?t[Ee]:void 0,mergedOpen:(I.value,L?!!i.open:W.value)}}));if(!Qe||!J||Xe===0)return null;let Y=W(J.mask??w),X=J.type??j,$e={...Fe,...J.locale},Z=z(pe,J.classNames),Q=B(me,J.styles),et=oe(ee(J.target),E),tt=le(G(J.placement??p),et,368,225),nt=je.value.visibility===`visible`?je.value:{left:R(tt.left),top:R(tt.top),opacity:1,visibility:`visible`},rt=je.value.visibility===`visible`?Pe.value:tt.placement,it=Ne.value,$=it&&it.width>0&&it.height>0?it:et,at=!!$,ot=J.indicatorsRender??ae,st=J.actionsRender??se,ct=J.closeIcon??M??A(de,{}),lt=k(`div`,{...ye,className:I(`pointer-events-none fixed inset-0`,Z.root,ce),style:L(Q.root,q,{zIndex:U}),"data-rue-tour":`true`,"data-rue-tour-placement":rt,"data-rue-tour-version":String(Se.value),"data-rue-tour-current":String(we?i.current:Ae.value),"data-rue-tour-total":String(Xe),"data-rue-tour-open":String(Ce?!!i.open:ke.value),children:[Y?A(f,{children:at?k(f,{children:[A(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 top-0`,Z.mask),style:L(Q.mask,Y.style,{height:R($.top),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`top`}),A(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:`0px`,top:R($.top),width:R($.left),height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`left`}),A(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:R($.right),top:R($.top),width:`calc(100vw - ${$.right}px)`,height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`right`}),A(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 bottom-0`,Z.mask),style:L(Q.mask,Y.style,{top:R($.bottom),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`bottom`}),A(`div`,{"aria-hidden":`true`,className:I(`pointer-events-none fixed border border-primary/25 bg-primary/10 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_20px_60px_-36px_rgba(59,130,246,0.75)] backdrop-blur-[1px]`,Z.spotlight),style:L(Q.spotlight,{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)}),"data-rue-tour-spotlight":`true`}),P?A(`div`,{"aria-hidden":`true`,className:`pointer-events-auto fixed`,style:{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)},"data-rue-tour-blocker":`true`}):null]}):A(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-0`,Z.mask),style:L(Q.mask,Y.style,{background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`full`})}):null,k(`div`,{ref:e=>{be.current=e??void 0,e&&We()},role:`dialog`,"aria-modal":Y?`true`:`false`,className:I(`pointer-events-auto fixed w-[min(92vw,23rem)] rounded-[14px] border px-0 py-0 transition duration-200 ease-out md:w-[23rem]`,X===`primary`?`border-primary/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.98),rgba(8,78,119,0.96))] text-primary-content shadow-[0_28px_90px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl`:`border-black/[0.06] bg-white text-[#262626] shadow-[0_12px_32px_rgba(0,0,0,0.18),0_3px_10px_rgba(0,0,0,0.12)]`,Z.panel,J.className),style:L(Q.panel,J.style,nt),"data-rue-tour-panel":`true`,children:[Me.value?A(`span`,{"aria-hidden":`true`,className:I(`absolute size-[14px] rotate-45 border`,X===`primary`?`border-primary/20 bg-sky-900 shadow-[8px_8px_18px_-14px_rgba(15,23,42,0.75)]`:`border-black/[0.06] bg-white shadow-[8px_8px_18px_-14px_rgba(0,0,0,0.28)]`,Z.arrow),style:L(Q.arrow,Me.value),"data-rue-tour-arrow":`true`}):null,k(`div`,{className:I(`relative px-6 pb-5 pt-5`,Z.section),style:Q.section,"data-rue-tour-section":`true`,children:[A(`button`,{type:`button`,"aria-label":String($e.close),className:I(`absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full transition`,X===`primary`?`text-primary-content/80 hover:bg-white/10 hover:text-primary-content`:`text-black/35 hover:bg-black/[0.04] hover:text-black/60`,Z.close),style:Q.close,onClick:Ke,"data-rue-tour-close":`true`,children:ct}),J.cover?A(`div`,{className:I(`mb-5 overflow-hidden rounded-[12px]`,Z.cover),style:Q.cover,"data-rue-tour-cover":`true`,children:J.cover}):null,k(`div`,{className:I(`pr-11`,Z.body),style:Q.body,"data-rue-tour-body":`true`,children:[k(`div`,{className:I(`mb-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium`,X===`primary`?`bg-white/10 text-primary-content/70`:`border border-black/[0.06] bg-[#fafafa] text-[#8c8c8c]`,Z.meta),style:Q.meta,"data-rue-tour-meta":`true`,children:[A(fe,{}),A(`span`,{children:`Tour`}),k(`span`,{className:X===`primary`?`text-primary-content/50`:`text-base-content/40`,children:[String(Ze+1).padStart(2,`0`),` / `,String(Xe).padStart(2,`0`)]})]}),A(`div`,{className:I(``,Z.header),style:Q.header,"data-rue-tour-header":`true`,children:J.title?A(`div`,{className:I(`text-[1.08rem] font-semibold leading-7 tracking-[0.01em]`,Z.title),style:Q.title,"data-rue-tour-title":`true`,children:J.title}):null}),J.description?A(`div`,{className:I(`mt-3 text-[15px] leading-7`,X===`primary`?`text-primary-content/80`:`text-[#595959]`,Z.description),style:Q.description,"data-rue-tour-description":`true`,children:J.description}):null]}),(()=>{let e=ot?ot(Ze,Xe):A(`div`,{className:I(`flex flex-wrap items-center gap-2.5`,Z.indicators),style:Q.indicators,"data-rue-tour-indicators":`true`,children:Array.from({length:Xe}).map((e,t)=>d(e=>{let r=y(`span`,e);return n(()=>{c(r,`key`,String(`indicator-${t}`))}),n(()=>{_(r,I(`block size-2.5 rounded-full transition-all duration-200`,t===Ze?X===`primary`?`bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)]`:`bg-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.14)]`:X===`primary`?`bg-white/30`:`bg-black/12`,Z.indicator))}),n(()=>{let e=Q.indicator;C(r,e)}),n(()=>{c(r,`data-rue-tour-indicator`,String(t===Ze?`active`:`inactive`))}),n(()=>{c(r,`data-rue-tour-indicator-index`,String(String(t)))}),r}))}),t=Ze===0||J.prevButtonProps?.disabled,r=!!J.nextButtonProps?.disabled,i=k(`div`,{className:I(`flex flex-wrap items-center justify-between gap-3`,Z.actions),style:Q.actions,"data-rue-tour-actions":`true`,children:[e,k(`div`,{className:I(`flex items-center gap-2.5`,Z.buttons),style:Q.buttons,"data-rue-tour-buttons":`true`,children:[A(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[84px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-white/18 bg-transparent text-primary-content/78 hover:bg-white/10 hover:text-primary-content disabled:border-white/10 disabled:text-white/28`:`border-black/[0.08] bg-white text-[#595959] hover:border-black/[0.12] hover:bg-[#fafafa] disabled:border-black/[0.06] disabled:bg-[#fafafa] disabled:text-black/25`,Z.prevButton,J.prevButtonProps?.className),style:L(Q.prevButton,J.prevButtonProps?.style),disabled:t,onClick:Ye,"data-rue-tour-prev":`true`,children:J.prevButtonProps?.children??$e.previous}),A(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[96px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-0 bg-white text-sky-900 shadow-[0_2px_0_rgba(255,255,255,0.08)] hover:bg-sky-50 disabled:bg-white/40 disabled:text-sky-950/40`:`border-[#1677ff] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.12)] hover:border-[#4096ff] hover:bg-[#4096ff] disabled:border-[#91caff] disabled:bg-[#91caff]`,Z.nextButton,J.nextButtonProps?.className),style:L(Q.nextButton,J.nextButtonProps?.style),disabled:r,onClick:Je,"data-rue-tour-next":Ze===Xe-1?`finish`:`next`,children:J.nextButtonProps?.children??(Ze===Xe-1?$e.finish:$e.next)})]})]}),a=st?st(i,{current:Ze,total:Xe}):i;return a?A(`div`,{className:I(`mt-5 border-t pt-4`,X===`primary`?`border-white/10`:`border-black/[0.06]`,Z.footer),style:Q.footer,"data-rue-tour-footer":`true`,children:a}):null})()]})]})]}),ut=H(K);return ut===!1||ut==null?lt:d(e=>{let r=m(),i=S(`rue:component:anchor`);return t(r,i),n(()=>{let e=b(O,{to:ut,children:lt});x(()=>h(e,r,i))}),r})},pe=e=>d(r=>{let i=y(`div`,r);_(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=y(`table`,i);t(i,a),_(a,`table table-zebra`);let o=y(`thead`,a);t(a,o);let s=y(`tr`,o);t(o,s);let l=y(`th`,s);t(s,l),t(l,u(`属性`));let f=y(`th`,s);t(s,f),t(f,u(`说明`));let p=y(`th`,s);t(s,p),t(p,u(`类型`));let g=y(`th`,s);t(s,g),t(g,u(`默认值`));let v=y(`tbody`,a);t(a,v);let b=S(`rue:list:start`),C=S(`rue:list:end`);t(v,b),t(v,C);let w=new Map;return n(()=>{w=E({items:e.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:v,before:C,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,r,i,a,o)=>{h(d(()=>{let r=m(),i=y(`tr`,r);t(r,i),n(()=>{c(i,`key`,String(e.prop))});let a=y(`td`,i);t(i,a);let o=y(`code`,a);t(a,o);let s=S(`rue:slot:anchor`);t(o,s),n(()=>{let t=e.prop;x(()=>h(t,o,s))});let l=y(`td`,i);t(i,l);let u=S(`rue:slot:anchor`);t(l,u),n(()=>{let t=e.description;x(()=>h(t,l,u))});let d=y(`td`,i);t(i,d);let f=y(`code`,d);t(d,f);let p=S(`rue:slot:anchor`);t(f,p),n(()=>{let t=e.type;x(()=>h(t,f,p))});let g=y(`td`,i);t(i,g);let _=y(`code`,g);t(g,_);let v=S(`rue:slot:anchor`);return t(_,v),n(()=>{let t=e.defaultValue;x(()=>h(t,_,v))}),r}),r,i)}})}),i}),me=T(`ref:1:0`,()=>r(`preview`)),he=T(`ref:1:1`,()=>r(`preview`)),ge=T(`ref:1:2`,()=>r(`preview`)),_e=T(`ref:1:3`,()=>r(`preview`)),ve=[`top`,`right`,`bottom`,`left`],ye=[{prop:`steps`,description:`引导步骤数组，每步可独立配置 target、placement、mask、cover 与按钮文案。`,type:`TourStepProps[]`,defaultValue:`[]`},{prop:`open / defaultOpen`,description:`受控或非受控地打开引导浮层。`,type:`boolean`,defaultValue:`false`},{prop:`current / defaultCurrent`,description:`受控或非受控地指定当前步骤索引。`,type:`number`,defaultValue:`0`},{prop:`placement`,description:`全局浮层位置，单步可继续覆盖。`,type:`TourPlacement`,defaultValue:`bottom`},{prop:`mask / disabledInteraction`,description:`控制遮罩是否启用，以及高亮区是否允许继续交互。`,type:`boolean | { color?: string; style?: object } / boolean`,defaultValue:`true / false`},{prop:`gap`,description:`调整高亮区与目标的间距和圆角，适合按钮、卡片、输入框等不同密度场景。`,type:`{ offset?: number | [number, number]; radius?: number }`,defaultValue:`{ offset: 8, radius: 18 }`},{prop:`arrow / closeIcon / type`,description:`配置箭头、关闭按钮与主视觉主题。`,type:`boolean | object / any / default | primary`,defaultValue:`true / x / default`},{prop:`indicatorsRender / actionsRender`,description:`自定义底部步骤指示器与整体操作区。`,type:`(current, total) => any / (originNode, info) => any`,defaultValue:`-`},{prop:`scrollIntoViewOptions`,description:`步骤切换时自动把目标滚动进视口，可关闭或传入原生配置。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`{ block: center, inline: center, behavior: smooth }`},{prop:`onChange / onClose / onFinish / onOpenChange`,description:`监听步骤变化、关闭、完成和打开状态变化。`,type:`function`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义节点扩展 root、mask、spotlight、panel、footer、indicator 等样式。`,type:`object`,defaultValue:`-`}],be=`import { ref, useRef } from '@rue-js/rue'
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
`,we={panel:{width:`min(92vw, 21rem)`,maxHeight:`calc(100vh - 1.5rem)`},section:{maxHeight:`calc(100vh - 1.5rem)`,overflowY:`auto`,padding:`16px`},cover:{marginBottom:`12px`},meta:{color:`rgba(255,255,255,0.82)`,background:`rgba(255,255,255,0.12)`},title:{color:`#fff`,fontSize:`1rem`,lineHeight:`1.5rem`},description:{color:`rgba(255,255,255,0.88)`,marginTop:`10px`,fontSize:`14px`,lineHeight:`1.5rem`},footer:{marginTop:`14px`,paddingTop:`12px`,borderColor:`rgba(255,255,255,0.14)`},actions:{gap:`10px`},buttons:{gap:`8px`},prevButton:{minWidth:`72px`,height:`36px`,color:`#fff`,borderColor:`rgba(255,255,255,0.22)`},nextButton:{minWidth:`88px`,height:`36px`}},Te=()=>{let{tourVisible:e,current:l,tourSession:f,note:v,uploadRef:C,saveRef:E,moreRef:O,steps:k,startTour:A}=T(`useSetup:0:0`,()=>g(()=>{let e=T(`ref:1:4`,()=>r(!1)),t=T(`ref:1:5`,()=>r(0)),n=T(`ref:1:6`,()=>r(0)),i=T(`ref:1:7`,()=>r(`点击 Basic 按钮后弹出引导`)),o=T(`useRef:1:8`,()=>a()),s=T(`useRef:1:9`,()=>a()),c=T(`useRef:1:10`,()=>a());return{tourVisible:e,current:t,tourSession:n,note:i,uploadRef:o,saveRef:s,moreRef:c,steps:T(`computed:1:11`,()=>w(()=>[{target:()=>o.current??null,title:`Upload`,description:`Bring files into the workspace first.`,placement:`top`},{target:()=>s.current??null,title:`Save`,description:`Save your changes.`,placement:`top`},{target:()=>c.current??null,title:`More`,description:`Open additional actions from here.`,placement:`left`,nextButtonProps:{children:`完成引导`}}])),startTour:()=>{n.value+=1,t.value=0,e.value=!0,i.value=`正在查看 Upload`}}}));return d(r=>{let a=y(`div`,r);_(a,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]`);let g=y(`div`,a);t(a,g),_(g,`mb-6 text-[2.25rem] font-semibold tracking-tight text-base-content md:text-[2.7rem]`),t(g,u(`代码演示`));let w=y(`div`,a);t(a,w),_(w,`mb-5 flex flex-wrap items-center gap-3`);let T=y(`button`,w);t(w,T),c(T,`type`,`button`),_(T,`btn btn-primary rounded-2xl px-5`),i(T,`click`,A),t(T,u(`Basic`));let j=y(`button`,w);t(w,j),c(j,`type`,`button`),_(j,`btn btn-ghost rounded-2xl px-4`),i(j,`click`,()=>{l.value=0,e.value=!1,v.value=`基础引导已重置`}),t(j,u(`重置`));let M=y(`span`,w);t(w,M),_(M,`text-sm text-base-content/60`);let N=o(M);t(M,N),n(()=>{s(N,v.value)});let P=y(`div`,a);t(a,P),_(P,`rounded-[1.7rem] border border-base-300/70 bg-base-100/82 p-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.6)]`);let F=y(`div`,P);t(P,F),_(F,`rounded-[1.5rem] border border-base-300/70 bg-base-100 p-5`);let I=y(`div`,F);t(F,I),_(I,`mb-4 flex flex-wrap items-center justify-between gap-3`);let L=y(`div`,I);t(I,L);let R=y(`div`,L);t(L,R),_(R,`text-sm font-semibold text-base-content`),t(R,u(`Action Bar`));let z=y(`div`,L);t(L,z),_(z,`mt-1 text-sm text-base-content/55`),t(z,u(`点击 Basic 后，会依次讲解 Upload、Save 和更多操作。`));let B=y(`span`,I);t(I,B),_(B,`badge badge-outline badge-sm px-3 py-3`),t(B,u(`Code 示例`));let V=y(`div`,F);t(F,V),_(V,`flex flex-wrap items-center gap-3`);let H=y(`button`,V);t(V,H);let ee=D(H,()=>e=>{C.current=e??void 0});p(()=>{ee()}),c(H,`data-basic-tour-target`,`upload`),c(H,`type`,`button`),_(H,`btn btn-outline rounded-2xl px-6`),t(H,u(`Upload`));let U=y(`button`,V);t(V,U);let te=D(U,()=>e=>{E.current=e??void 0});p(()=>{te()}),c(U,`data-basic-tour-target`,`save`),c(U,`type`,`button`),_(U,`btn btn-primary rounded-2xl px-7`),t(U,u(`Save`));let W=y(`button`,V);t(V,W);let ne=D(W,()=>e=>{O.current=e??void 0});p(()=>{ne()}),c(W,`data-basic-tour-target`,`more`),c(W,`type`,`button`),c(W,`aria-label`,`More actions`),_(W,`btn btn-outline rounded-2xl px-5`),t(W,u(`More`));let re=S(`rue:slot:anchor`);return t(a,re),n(()=>{let r=e.value?d(()=>{let r=m(),i=S(`rue:component:anchor`);return t(r,i),n(()=>{let t=b(q,{key:`basic-tour-${f.value}-${l.value}-${e.value?`open`:`closed`}`,open:e.value,current:l.value,steps:k.get(),gap:{offset:[10,14],radius:18},onOpenChange:t=>{e.value=t,t||(l.value=0)},onChange:e=>{l.value=e,v.value=`正在查看 ${k.get()[e]?.title??`第 ${e+1} 步`}`},onClose:()=>{v.value=`基础引导已关闭`},onFinish:()=>{l.value=0,v.value=`基础引导已完成`}});x(()=>h(t,r,i))}),r}):``;x(()=>h(r,a,re))}),a})},Ee=()=>{let{open:e,current:o,tourSession:s,heroRef:l,metricsRef:f,steps:v}=T(`useSetup:0:0:dup1`,()=>g(()=>{let e=T(`ref:1:12`,()=>r(!1)),t=T(`ref:1:13`,()=>r(0)),n=T(`ref:1:14`,()=>r(0)),i=T(`useRef:1:15`,()=>a()),o=T(`useRef:1:16`,()=>a());return{open:e,current:t,tourSession:n,heroRef:i,metricsRef:o,steps:T(`computed:1:17`,()=>w(()=>[{placement:`center`,title:`欢迎来到 Rue Tour`,description:`第一步不绑定 target，会自动居中显示。适合首访说明、版本更新和整页 onboarding。`,cover:A(`div`,{className:`h-28 rounded-[1.25rem] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续看页面`}},{target:()=>i.current,title:`非模态说明更适合轻引导`,description:`这里关闭了遮罩，用户仍然可以浏览内容，不会被强行打断。`,placement:`bottomRight`},{target:()=>o.current,title:`局部强调也能单独覆盖 placement`,description:`同一套 Tour 可以混合 center 步骤与 target 步骤。`,placement:`top`,nextButtonProps:{children:`知道了`}}]))}}));return d(r=>{let a=y(`div`,r);_(a,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let g=y(`div`,a);t(a,g),_(g,`mb-4 flex flex-wrap items-center justify-between gap-3`);let C=y(`div`,g);t(g,C);let w=y(`div`,C);t(C,w),_(w,`text-sm font-semibold`),t(w,u(`欢迎页 + 非模态引导`));let T=y(`div`,C);t(C,T),_(T,`mt-1 text-sm text-base-content/60`),t(T,u(`适合把版本亮点和页面主内容穿在同一条体验线上。`));let O=y(`button`,g);t(g,O),c(O,`type`,`button`),_(O,`btn btn-outline btn-sm rounded-full`),i(O,`click`,()=>{s.value+=1,o.value=0,e.value=!0}),t(O,u(`打开欢迎引导`));let k=y(`div`,a);t(a,k);let A=D(k,()=>e=>{l.current=e??void 0});p(()=>{A()}),_(k,`rounded-[1.7rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 p-6 text-white`);let j=y(`div`,k);t(k,j),_(j,`badge badge-sm border-0 bg-white/15 text-white`),t(j,u(`Release Note`));let M=y(`div`,k);t(k,M),_(M,`mt-4 text-2xl font-semibold`),t(M,u(`Shipping cockpit for product operations`));let N=y(`div`,k);t(k,N),_(N,`mt-2 max-w-xl text-sm text-white/75`),t(N,u(`把素材、上线窗口、审批节点和回放笔记收进同一块工作区，不必在多个页面之间反复跳转。`));let P=y(`div`,a);t(a,P);let F=D(P,()=>e=>{f.current=e??void 0});p(()=>{F()}),_(P,`mt-4 grid gap-4 md:grid-cols-3`);let I=S(`rue:list:start`),L=S(`rue:list:end`);t(P,I),t(P,L);let R=new Map;n(()=>{R=E({items:[[`Launches`,`12`],[`Reviews`,`5`],[`Pending`,`2`]],getKey:(e,t)=>e[0],elements:R,parent:P,before:L,singleRoot:!0,trackIndex:!1,start:I,renderItem:(e,r,i,a,o)=>{h(d(()=>{let r=m(),i=y(`div`,r);t(r,i),n(()=>{c(i,`key`,String(e[0]))}),_(i,`rounded-[1.4rem] border border-base-300/70 bg-base-100/80 p-4`);let a=y(`div`,i);t(i,a),_(a,`text-sm text-base-content/55`);let o=S(`rue:slot:anchor`);t(a,o),n(()=>{let t=e[0];x(()=>h(t,a,o))});let s=y(`div`,i);t(i,s),_(s,`mt-2 text-3xl font-semibold`);let l=S(`rue:slot:anchor`);return t(s,l),n(()=>{let t=e[1];x(()=>h(t,s,l))}),r}),r,i)}})});let z=S(`rue:slot:anchor`);return t(a,z),n(()=>{let r=e.value?d(()=>{let r=m(),i=S(`rue:component:anchor`);return t(r,i),n(()=>{let t=b(q,{key:`welcome-tour-${s.value}-${o.value}-${e.value?`open`:`closed`}`,open:e.value,current:o.value,mask:!1,steps:v.get(),onOpenChange:t=>{e.value=t,t||(o.value=0)},onChange:e=>{o.value=e},onFinish:()=>{o.value=0}});x(()=>h(t,r,i))}),r}):``;x(()=>h(r,a,z))}),a})},De=()=>{let{open:e,current:l,tourSession:f,tapCount:v,activePlacement:C,anchorRef:O,steps:k}=T(`useSetup:0:0:dup2`,()=>g(()=>{let e=T(`ref:1:18`,()=>r(!1)),t=T(`ref:1:19`,()=>r(0)),n=T(`ref:1:20`,()=>r(0)),i=T(`ref:1:21`,()=>r(0)),o=T(`ref:1:22`,()=>r(`right`)),s=T(`useRef:1:23`,()=>a());return{open:e,current:t,tourSession:n,tapCount:i,activePlacement:o,anchorRef:s,steps:T(`computed:1:24`,()=>w(()=>[{target:()=>s.current,title:`高亮区默认仍可点击`,description:`disabledInteraction 默认为 false，所以聚焦区域内的按钮还能继续触发业务动作。`}]))}}));return d(r=>{let a=y(`div`,r);_(a,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let g=y(`div`,a);t(a,g),_(g,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=y(`div`,g);t(g,w);let T=y(`div`,w);t(w,T),_(T,`text-sm font-semibold`),t(T,u(`Placement 与高亮区实验`));let A=y(`div`,w);t(w,A),_(A,`mt-1 text-sm text-base-content/60`),t(A,u(`切换浮层方向时，目标按钮仍然可以在洞口区域被点击。`));let j=y(`button`,g);t(g,j),c(j,`type`,`button`),_(j,`btn btn-outline btn-sm rounded-full`),i(j,`click`,()=>{f.value+=1,l.value=0,e.value=!0}),t(j,u(`打开定位实验`));let M=y(`div`,a);t(a,M),_(M,`mb-4 flex flex-wrap gap-2`);let N=S(`rue:list:start`),P=S(`rue:list:end`);t(M,N),t(M,P);let F=new Map;n(()=>{F=E({items:ve||[],getKey:(e,t)=>e,elements:F,parent:M,before:P,singleRoot:!0,trackIndex:!1,start:N,renderItem:(r,a,u,p,g)=>{h(d(()=>{let a=m(),u=y(`button`,a);t(a,u),n(()=>{c(u,`key`,String(r))}),c(u,`type`,`button`),n(()=>{_(u,`btn btn-sm rounded-full ${C.value===r?`btn-primary`:`btn-outline`}`)}),i(u,`click`,()=>{C.value=r,f.value+=1,l.value=0,e.value=!0});let d=o(u);return t(u,d),n(()=>{s(d,r)}),a}),a,u)}})});let I=y(`div`,a);t(a,I),_(I,`grid min-h-[18rem] place-items-center rounded-[1.7rem] border border-dashed border-base-300/80 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_50%)] p-6`);let L=y(`button`,I);t(I,L);let R=D(L,()=>e=>{O.current=e??void 0});p(()=>{R()}),c(L,`type`,`button`),_(L,`btn btn-primary rounded-full px-6`),i(L,`click`,()=>{v.value+=1}),t(L,u(`已点击 `));let z=o(L);t(L,z),n(()=>{s(z,v.value)}),t(L,u(` 次`));let B=S(`rue:slot:anchor`);return t(a,B),n(()=>{let r=e.value?d(()=>{let r=m(),i=S(`rue:component:anchor`);return t(r,i),n(()=>{let t=b(q,{key:`placement-tour-${f.value}-${C.value}-${l.value}`,open:e.value,current:l.value,placement:C.value,gap:{offset:[12,16],radius:22},mask:{color:`rgba(15, 23, 42, 0.38)`},steps:k.get(),onOpenChange:t=>{e.value=t,t||(l.value=0)},onChange:e=>{l.value=e}});x(()=>h(t,r,i))}),r}):``;x(()=>h(r,a,B))}),a})},Oe=()=>{let{open:e,current:o,tourSession:s,summaryRef:l,timelineRef:f,approvalRef:v,steps:C}=T(`useSetup:0:0:dup3`,()=>g(()=>{let e=T(`ref:1:25`,()=>r(!1)),t=T(`ref:1:26`,()=>r(0)),n=T(`ref:1:27`,()=>r(0)),i=T(`useRef:1:28`,()=>a()),o=T(`useRef:1:29`,()=>a()),s=T(`useRef:1:30`,()=>a());return{open:e,current:t,tourSession:n,summaryRef:i,timelineRef:o,approvalRef:s,steps:T(`computed:1:31`,()=>w(()=>[{target:()=>i.current,title:`把封面和主题一起做强`,description:`默认样式使用 Rue 的轻卡片语言，但你也可以切到 primary，让产品引导更像一个任务流。`,placement:`bottomLeft`,cover:A(`div`,{className:`h-20 rounded-[1.25rem] bg-gradient-to-br from-cyan-300 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续`}},{target:()=>o.current,title:`中间步骤适合解释过程`,description:`当你要穿过多个版块时，指示器和 actionsRender 可以直接融入业务语境。`,placement:`topLeft`,prevButtonProps:{children:`返回`},nextButtonProps:{children:`看审批`}},{target:()=>s.current,title:`最后把业务动作接住`,description:`把完成按钮改成提交、发布、同步都可以，不需要额外封装。`,placement:`left`,nextButtonProps:{children:`提交并结束`}}]))}}));return d(r=>{let a=y(`div`,r);_(a,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let g=y(`div`,a);t(a,g),_(g,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=y(`div`,g);t(g,w);let T=y(`div`,w);t(w,T),_(T,`text-sm font-semibold`),t(T,u(`自定义 indicator 与 actions`));let O=y(`div`,w);t(w,O),_(O,`mt-1 text-sm text-base-content/60`),t(O,u(`这套写法更接近常见分步引导的心智，但视觉和布局还是 Rue 自己的。`));let j=y(`button`,g);t(g,j),c(j,`type`,`button`),_(j,`btn btn-outline btn-sm rounded-full`),i(j,`click`,()=>{s.value+=1,o.value=0,e.value=!0}),t(j,u(`启动主视觉引导`));let M=y(`div`,a);t(a,M);let N=D(M,()=>e=>{l.current=e??void 0});p(()=>{N()}),_(M,`rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let P=y(`div`,M);t(M,P),_(P,`flex flex-wrap items-center justify-between gap-3`);let F=y(`div`,P);t(P,F);let I=y(`div`,F);t(F,I),_(I,`badge badge-outline badge-sm`),t(I,u(`Launch Summary`));let L=y(`div`,F);t(F,L),_(L,`mt-3 text-xl font-semibold`),t(L,u(`One surface for launch, approval and playback`));let R=y(`div`,F);t(F,R),_(R,`mt-2 max-w-xl text-sm text-base-content/60`),t(R,u(`用一个页面完成素材汇总、审批流转、上线窗口对齐和上线后的回放，不再分散在多个工具里。`));let z=y(`div`,P);t(P,z),_(z,`grid h-16 w-16 place-items-center rounded-3xl bg-primary/10 text-primary`);let B=y(`svg`,z);t(z,B),c(B,`viewBox`,`0 0 24 24`),c(B,`fill`,`none`),c(B,`stroke`,`currentColor`),c(B,`strokeWidth`,`1.8`),_(B,`size-8`);let V=y(`path`,B);t(B,V),c(V,`strokeLinecap`,`round`),c(V,`strokeLinejoin`,`round`),c(V,`d`,`m12 3 2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8L12 3Z`);let H=y(`div`,a);t(a,H);let ee=D(H,()=>e=>{f.current=e??void 0});p(()=>{ee()}),_(H,`mt-4 rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let U=y(`div`,H);t(H,U),_(U,`grid gap-3 md:grid-cols-3`);let te=S(`rue:list:start`),W=S(`rue:list:end`);t(U,te),t(U,W);let ne=new Map;n(()=>{ne=E({items:[[`Brief`,`完成背景与目标归纳`],[`Review`,`跨团队确认视觉与文案`],[`Ship`,`统一 CTA 与发布时间窗`]],getKey:(e,t)=>e[0],elements:ne,parent:U,before:W,singleRoot:!0,trackIndex:!1,start:te,renderItem:(e,r,i,a,o)=>{h(d(()=>{let r=m(),i=y(`div`,r);t(r,i),n(()=>{c(i,`key`,String(e[0]))}),_(i,`rounded-[1.2rem] bg-base-200/65 px-4 py-4`);let a=y(`div`,i);t(i,a),_(a,`text-sm font-semibold`);let o=S(`rue:slot:anchor`);t(a,o),n(()=>{let t=e[0];x(()=>h(t,a,o))});let s=y(`div`,i);t(i,s),_(s,`mt-2 text-sm text-base-content/60`);let l=S(`rue:slot:anchor`);return t(s,l),n(()=>{let t=e[1];x(()=>h(t,s,l))}),r}),r,i)}})});let re=y(`div`,a);t(a,re),_(re,`mt-4 flex justify-end`);let G=y(`button`,re);t(re,G);let K=D(G,()=>e=>{v.current=e??void 0});p(()=>{K()}),c(G,`type`,`button`),_(G,`btn btn-primary rounded-full px-5`),t(G,u(`提交审批`));let ie=S(`rue:slot:anchor`);return t(a,ie),n(()=>{let r=e.value?d(()=>{let r=m(),i=S(`rue:component:anchor`);return t(r,i),n(()=>{let t=b(q,{key:`custom-tour-${s.value}-${o.value}-${e.value?`open`:`closed`}`,open:e.value,current:o.value,type:`primary`,styles:we,steps:C.get(),indicatorsRender:(e,t)=>k(`div`,{className:`flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/80`,children:[A(`span`,{children:`phase`}),A(`span`,{className:`rounded-full border border-white/20 px-2 py-1 text-white`,children:e+1}),A(`span`,{children:`/`}),A(`span`,{children:t})]}),actionsRender:(e,t)=>k(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[k(`div`,{className:`text-xs uppercase tracking-[0.24em] text-white/70`,children:[`launch guide · step `,t.current+1]}),e]}),onOpenChange:t=>{e.value=t,t||(o.value=0)},onChange:e=>{o.value=e},onFinish:()=>{o.value=0}});x(()=>h(t,r,i))}),r}):``;x(()=>h(r,a,ie))}),a})},ke=()=>d(e=>{let r=m(),i=S(`rue:component:anchor`);return t(r,i),h(b(j,{children:d(()=>{let e=m(),r=y(`div`,e);t(e,r),_(r,`max-w-none prose prose-sm md:prose-base`);let i=y(`h1`,r);t(r,i),t(i,u(`Tour 漫游引导`));let a=y(`p`,r);t(r,a),_(a,`text-sm mt-3 mb-3`),t(a,u(`Tour 用分步浮层把用户带过关键入口、局部强调和最终动作。Rue 的实现参考了成熟组件库的能力模型，但视觉仍然保持自己的 card、badge 和 button 语言，不直接照搬现成面板样式。`));let o=y(`p`,r);t(r,o),_(o,`text-sm mt-3 mb-3`),t(o,u(`Tour 覆盖的不只是静态外观，也包含完整执行逻辑：围绕真实 DOM target 做高亮、自动定位、切步滚动、非模态展示，以及自定义 indicator 和底部 actions。`));let s=y(`h2`,r);t(r,s),t(s,u(`何时使用`));let c=y(`ul`,r);t(r,c);let l=y(`li`,c);t(c,l),t(l,u(`需要把新用户逐步带过核心入口、关键按钮或首次配置流程。`));let d=y(`li`,c);t(c,d),t(d,u(`需要在复杂页面里突出某个局部区域，并配合文案解释当前操作目的。`));let f=y(`li`,c);t(c,f),t(f,u(`需要把产品说明、轻 onboarding 和最终业务动作串成一条连续体验。`));let p=S(`rue:component:anchor`);t(e,p),n(()=>{let t=b(M,{title:`基础引导`,summary:`点击 Basic 后，从 Upload、Save 到更多操作依次弹出讲解。`,tab:me,preview:Te,code:be});x(()=>h(t,e,p))});let g=S(`rue:component:anchor`);t(e,g),n(()=>{let t=b(M,{title:`欢迎页与非模态`,summary:`展示没有 target 的中心步骤，以及 mask=false 时的轻量引导方式。`,tab:he,preview:Ee,code:xe});x(()=>h(t,e,g))});let v=S(`rue:component:anchor`);t(e,v),n(()=>{let t=b(M,{title:`Placement 与交互洞口`,summary:`切换 top/right/bottom/left，并验证高亮区默认仍可继续触发目标元素。`,tab:ge,preview:De,code:Se});x(()=>h(t,e,v))});let C=S(`rue:component:anchor`);t(e,C),n(()=>{let t=b(M,{title:`自定义指示器与动作区`,summary:`通过 primary 主题、cover、indicatorsRender 和 actionsRender 把引导做成更完整的任务流。`,tab:_e,preview:Oe,code:Ce});x(()=>h(t,e,C))});let w=y(`div`,e);t(e,w),_(w,`component-preview not-prose text-base-content my-6 lg:my-12`);let T=y(`h2`,w);t(w,T),_(T,`component-preview-title mt-2 mb-3 text-lg font-semibold`),t(T,u(`# API`));let E=S(`rue:component:anchor`);return t(w,E),n(()=>{let e=b(pe,{rows:ye});x(()=>h(e,w,E))}),e})}),r,i),r});export{ke as default};
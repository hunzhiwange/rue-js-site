import{$ as e,Ht as t,J as n,Kt as r,Lt as i,Q as a,X as o,Xt as s,Yt as c,Z as l,a as u,at as d,dt as f,et as p,gt as m,i as h,l as g,p as _,pt as v,q as y,qt as b,r as x,s as S,st as C,t as w}from"./vapor-runtime-iQZthBPQ.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-BjKHCvOa.js";import{a as O,i as k}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as A}from"./Teleport--IYhcwEl.js";import{r as j}from"./SidebarPlaygroundDesign-BcHYLGe4.js";import{t as M}from"./PreviewBlock-DJFn4Hia.js";var N={next:`下一步`,previous:`上一步`,finish:`完成`,close:`关闭引导`},P=16,F=18,I=(...e)=>e.filter(Boolean).join(` `),L=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},R=e=>`${e}px`,z=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=I(e?.[r],t?.[r]);i&&(n[r]=i)}),n},B=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=L(e?.[r],t?.[r]);Object.keys(i).length>0&&(n[r]=i)}),n},V=(e,t,n)=>n<t?t:Math.min(Math.max(e,t),n),H=e=>typeof e==`function`?e():e,ee=e=>typeof e==`function`?e()??null:e??null,U=e=>{let t=e?.offset??8;if(Array.isArray(t))return{horizontal:Math.max(0,t[0]??0),vertical:Math.max(0,t[1]??t[0]??0)};let n=Math.max(0,t);return{horizontal:n,vertical:n}},te=e=>Math.max(0,e?.radius??18),W=e=>e===!1?null:e&&typeof e==`object`?{color:e.color??`rgba(15, 23, 42, 0.46)`,style:e.style}:{color:`rgba(15, 23, 42, 0.46)`,style:void 0},ne=e=>e!==!1,re=e=>typeof e==`object`?e.pointAtCenter!==!1:!0,G=e=>e??`bottom`,K=e=>e===`center`?`center`:e.startsWith(`top`)?`top`:e.startsWith(`bottom`)?`bottom`:e.startsWith(`left`)?`left`:`right`,ie=e=>{switch(e){case`top`:return`bottom`;case`topLeft`:return`bottomLeft`;case`topRight`:return`bottomRight`;case`bottom`:return`top`;case`bottomLeft`:return`topLeft`;case`bottomRight`:return`topRight`;case`left`:return`right`;case`leftTop`:return`rightTop`;case`leftBottom`:return`rightBottom`;case`right`:return`left`;case`rightTop`:return`leftTop`;case`rightBottom`:return`leftBottom`;default:return`center`}},ae=()=>typeof window>`u`||typeof document>`u`?{width:1440,height:900}:{width:document.documentElement.clientWidth||window.innerWidth||1440,height:document.documentElement.clientHeight||window.innerHeight||900},oe=(e,t)=>{if(!e)return null;let n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let r=ae(),i=U(t),a=te(t),o=V(n.left-i.horizontal,4,r.width-4),s=V(n.top-i.vertical,4,r.height-4),c=V(n.right+i.horizontal,4,r.width-4),l=V(n.bottom+i.vertical,4,r.height-4),u=Math.max(0,c-o),d=Math.max(0,l-s);return{left:o,top:s,width:u,height:d,radius:a,centerX:o+u/2,centerY:s+d/2,right:c,bottom:l}},se=(e,t,n,r)=>{switch(e){case`top`:return{left:t.centerX-n/2,top:t.top-r-F};case`topLeft`:return{left:t.left,top:t.top-r-F};case`topRight`:return{left:t.right-n,top:t.top-r-F};case`bottom`:return{left:t.centerX-n/2,top:t.bottom+F};case`bottomLeft`:return{left:t.left,top:t.bottom+F};case`bottomRight`:return{left:t.right-n,top:t.bottom+F};case`left`:return{left:t.left-n-F,top:t.centerY-r/2};case`leftTop`:return{left:t.left-n-F,top:t.top};case`leftBottom`:return{left:t.left-n-F,top:t.bottom-r};case`right`:return{left:t.right+F,top:t.centerY-r/2};case`rightTop`:return{left:t.right+F,top:t.top};case`rightBottom`:return{left:t.right+F,top:t.bottom-r};default:return{left:t.centerX-n/2,top:t.bottom+F}}},ce=(e,t,n,r,i)=>{switch(K(e)){case`top`:return t.top<P;case`bottom`:return t.top+r>i.height-P;case`left`:return t.left<P;case`right`:return t.left+n>i.width-P;default:return!1}},le=(e,t,n,r)=>{let i=ae();if(!t||e===`center`)return{placement:`center`,left:V((i.width-n)/2,P,i.width-n-P),top:V((i.height-r)/2,P,i.height-r-P)};let a=e,o=se(a,t,n,r);return ce(a,o,n,r,i)&&(a=ie(a),o=se(a,t,n,r)),{placement:a,left:V(o.left,P,i.width-n-P),top:V(o.top,P,i.height-r-P)}},ue=(e,t,n,r,i,a,o)=>{if(!t||e===`center`)return null;let s=V(t.centerX-n-9,24,i-24),c=V(t.centerY-r-9,24,a-24),l=o?void 0:28;switch(K(e)){case`top`:return{left:R(l??s),bottom:`-9px`};case`bottom`:return{left:R(l??s),top:`-9px`};case`left`:return{top:R(l??c),right:`-9px`};case`right`:return{top:R(l??c),left:`-9px`};default:return null}},de=()=>g(e=>{let t=a(`svg`,e);d(t,`viewBox`,`0 0 24 24`),d(t,`fill`,`none`),d(t,`stroke`,`currentColor`),d(t,`strokeWidth`,`1.9`),C(t,`size-4`);let r=a(`path`,t);return n(t,r),d(r,`strokeLinecap`,`round`),d(r,`strokeLinejoin`,`round`),d(r,`d`,`M6 6l12 12M18 6 6 18`),t}),fe=()=>g(e=>{let t=a(`svg`,e);d(t,`viewBox`,`0 0 24 24`),d(t,`fill`,`none`),d(t,`stroke`,`currentColor`),d(t,`strokeWidth`,`1.8`),C(t,`size-4`);let r=a(`path`,t);n(t,r),d(r,`strokeLinecap`,`round`),d(r,`strokeLinejoin`,`round`),d(r,`d`,`m12 3 1.7 4.2L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.8L12 3Z`);let i=a(`path`,t);return n(t,i),d(i,`strokeLinecap`,`round`),d(i,`strokeLinejoin`,`round`),d(i,`d`,`M5 19h.01M12 21h.01M19 19h.01`),t}),q=e=>{let{steps:p,defaultOpen:m,defaultCurrent:v,placement:y,mask:x,gap:E,arrow:D,type:j,closeIcon:M,disabledInteraction:P,keyboard:F,zIndex:U,scrollIntoViewOptions:te,getPopupContainer:K,locale:ie,indicatorsRender:ae,actionsRender:se,className:ce,style:q,classNames:pe,styles:me,onChange:he,onClose:ge,onFinish:_e,onOpenChange:ve,rest:ye,panelRef:be,rafIdRef:xe,renderVersion:Se,isControlledOpen:Ce,isControlledCurrent:we,uncontrolledOpen:Te,uncontrolledCurrent:Ee,lastDefaultOpen:De,lastDefaultCurrent:Oe,currentOpenRef:ke,currentIndexRef:Ae,panelStyleRef:je,arrowStyleRef:Me,spotlightRef:Ne,placementRef:Pe,mergedLocale:Fe,getTotal:Ie,normalizeCurrentValue:Le,getMergedOpen:Re,getMergedCurrent:ze,getCurrentStep:Be,requestRender:Ve,requestOpenChange:He,requestCurrentChange:Ue,scheduleLayoutSync:We,syncScrollIntoView:Ge,handleClose:Ke,handleMaskClick:qe,handleNext:Je,handlePrev:Ye,total:Xe,currentIndex:Ze,step:J,mergedOpen:Qe}=T(`useSetup:0:0`,()=>b(()=>{let{steps:t=[],defaultOpen:n=!1,defaultCurrent:a=0,placement:o=`bottom`,mask:s=!0,gap:l,arrow:d=!0,type:f=`default`,closeIcon:p,disabledInteraction:m=!1,keyboard:g=!0,zIndex:_=1400,scrollIntoViewOptions:v={block:`center`,inline:`center`,behavior:`smooth`},getPopupContainer:y,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:w,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,...M}=e,P=T(`useRef:1:0`,()=>r()),F=T(`useRef:1:1`,()=>r()),I=T(`ref:1:2`,()=>i(0)),L=typeof e.open==`boolean`,z=typeof e.current==`number`,B=T(`ref:1:3`,()=>i(n)),H=T(`ref:1:4`,()=>i(a)),U=T(`ref:1:5`,()=>i(!!n)),te=T(`ref:1:6`,()=>i(Math.max(0,Math.floor(a)))),W=T(`ref:1:7`,()=>i(L?!!e.open:n)),K=T(`ref:1:8`,()=>i(z?Math.max(0,Math.floor(e.current)):Math.max(0,Math.floor(a)))),ie=T(`ref:1:9`,()=>i({visibility:`hidden`,opacity:0})),ae=T(`ref:1:10`,()=>i(null)),se=T(`ref:1:11`,()=>i(null)),ce=T(`ref:1:12`,()=>i(G(o))),de={...N,...b},fe=()=>t.length,q=e=>{let t=fe();return t<=0?0:V(Math.floor(e),0,t-1)},pe=()=>L?!!e.open:W.value,me=()=>q(z?e.current:K.value),he=()=>t[me()],ge=()=>{I.value+=1},_e=e=>{W.value=e,L||(B.value=e),ge(),j&&j(e)},ve=e=>{let t=fe();if(t<=0)return;let n=V(e,0,t-1);K.value=n,z||(H.value=n),ge(),O&&O(n)},ye=()=>{typeof window>`u`||(F.current!=null&&window.cancelAnimationFrame(F.current),F.current=window.requestAnimationFrame(()=>{let e=P.current??document.querySelector(`[data-rue-tour-panel="true"]`),t=he();if(!pe()||!e||!t){ie.value={visibility:`hidden`,opacity:0},se.value=null,ae.value=null,ge();return}let n=oe(ee(t.target),l),r=e.getBoundingClientRect(),i=le(G(t.placement??o),n,Math.max(r.width,320),Math.max(r.height,1)),a=ne(t.arrow??d),s=re(t.arrow??d);se.value=n,ce.value=i.placement,ie.value={left:R(i.left),top:R(i.top),opacity:1,visibility:`visible`},ae.value=a?ue(i.placement,n,i.left,i.top,r.width,r.height,s):null,ge()}))},be=()=>{let e=he();if(!pe()||!e||typeof window>`u`)return;let t=ee(e.target),n=e.scrollIntoViewOptions??v;!t||n===!1||typeof t.scrollIntoView!=`function`||window.requestAnimationFrame(()=>{t.scrollIntoView(n===!0?{block:`center`,inline:`center`,behavior:`smooth`}:n)})},xe=()=>{he()?.onClose?.(),_e(!1),k&&k()},Se=()=>{xe()},Ce=()=>{let e=he();if(!e)return;e.nextButtonProps?.onClick?.();let t=me();if(t>=fe()-1){A&&A(),_e(!1);return}ve(t+1)},we=()=>{let e=he();e&&(e.prevButtonProps?.onClick?.(),ve(me()-1))};h(()=>{if(typeof window>`u`)return;let e=e=>{if(!(!pe()||!g)){if(e.key===`Escape`){e.preventDefault(),xe();return}if(e.key===`ArrowRight`){e.preventDefault(),Ce();return}e.key===`ArrowLeft`&&(e.preventDefault(),we())}},t=()=>{ye()};window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),window.addEventListener(`keydown`,e),be(),ye(),u(()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`keydown`,e),F.current!=null&&window.cancelAnimationFrame(F.current)})}),T(`watch:1:13`,()=>c(()=>e.open,e=>{typeof e==`boolean`&&(W.value=e)},{immediate:!0})),T(`watch:1:14`,()=>c(()=>e.current,e=>{typeof e==`number`&&(K.value=q(e))},{immediate:!0})),T(`watch:1:15`,()=>c(()=>t.length,()=>{K.value=q(K.value)},{immediate:!0})),T(`watch:1:16`,()=>c(()=>[pe(),me(),t.length,o,l?.radius??-1,Array.isArray(l?.offset)?`${l?.offset[0]??0}:${l?.offset[1]??0}`:l?.offset??-1],()=>{be(),ye()},{immediate:!0})),T(`watch:1:17`,()=>c(()=>n,e=>{let t=!!e;!L&&t!==U.value&&(U.value=t,B.value=t,W.value=t)})),T(`watch:1:18`,()=>c(()=>a,e=>{let t=Math.max(0,Math.floor(e));!z&&t!==te.value&&(te.value=t,H.value=t,K.value=q(t))}));let Te=t.length,Ee=(I.value,q(z?e.current:K.value));return{steps:t,defaultOpen:n,defaultCurrent:a,placement:o,mask:s,gap:l,arrow:d,type:f,closeIcon:p,disabledInteraction:m,keyboard:g,zIndex:_,scrollIntoViewOptions:v,getPopupContainer:y,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:w,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,rest:M,panelRef:P,rafIdRef:F,renderVersion:I,isControlledOpen:L,isControlledCurrent:z,uncontrolledOpen:B,uncontrolledCurrent:H,lastDefaultOpen:U,lastDefaultCurrent:te,currentOpenRef:W,currentIndexRef:K,panelStyleRef:ie,arrowStyleRef:ae,spotlightRef:se,placementRef:ce,mergedLocale:de,getTotal:fe,normalizeCurrentValue:q,getMergedOpen:pe,getMergedCurrent:me,getCurrentStep:he,requestRender:ge,requestOpenChange:_e,requestCurrentChange:ve,scheduleLayoutSync:ye,syncScrollIntoView:be,handleClose:xe,handleMaskClick:Se,handleNext:Ce,handlePrev:we,total:Te,currentIndex:Ee,step:Te>0?t[Ee]:void 0,mergedOpen:(I.value,L?!!e.open:W.value)}}));if(!Qe||!J||Xe===0)return null;let Y=W(J.mask??x),X=J.type??j,$e={...Fe,...J.locale},Z=z(pe,J.classNames),Q=B(me,J.styles),et=oe(ee(J.target),E),tt=le(G(J.placement??y),et,368,225),nt=je.value.visibility===`visible`?je.value:{left:R(tt.left),top:R(tt.top),opacity:1,visibility:`visible`},rt=je.value.visibility===`visible`?Pe.value:tt.placement,it=Ne.value,$=it&&it.width>0&&it.height>0?it:et,at=!!$,ot=J.indicatorsRender??ae,st=J.actionsRender??se,ct=J.closeIcon??M??k(de,{}),lt=O(`div`,{...ye,className:I(`pointer-events-none fixed inset-0`,Z.root,ce),style:L(Q.root,q,{zIndex:U}),"data-rue-tour":`true`,"data-rue-tour-placement":rt,"data-rue-tour-version":String(Se.value),"data-rue-tour-current":String(we?e.current:Ae.value),"data-rue-tour-total":String(Xe),"data-rue-tour-open":String(Ce?!!e.open:ke.value),children:[Y?k(_,{children:at?O(_,{children:[k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 top-0`,Z.mask),style:L(Q.mask,Y.style,{height:R($.top),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`top`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:`0px`,top:R($.top),width:R($.left),height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`left`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:R($.right),top:R($.top),width:`calc(100vw - ${$.right}px)`,height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`right`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 bottom-0`,Z.mask),style:L(Q.mask,Y.style,{top:R($.bottom),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`bottom`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-none fixed border border-primary/25 bg-primary/10 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_20px_60px_-36px_rgba(59,130,246,0.75)] backdrop-blur-[1px]`,Z.spotlight),style:L(Q.spotlight,{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)}),"data-rue-tour-spotlight":`true`}),P?k(`div`,{"aria-hidden":`true`,className:`pointer-events-auto fixed`,style:{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)},"data-rue-tour-blocker":`true`}):null]}):k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-0`,Z.mask),style:L(Q.mask,Y.style,{background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`full`})}):null,O(`div`,{ref:e=>{be.current=e??void 0,e&&We()},role:`dialog`,"aria-modal":Y?`true`:`false`,className:I(`pointer-events-auto fixed w-[min(92vw,23rem)] rounded-[14px] border px-0 py-0 transition duration-200 ease-out md:w-[23rem]`,X===`primary`?`border-primary/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.98),rgba(8,78,119,0.96))] text-primary-content shadow-[0_28px_90px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl`:`border-black/[0.06] bg-white text-[#262626] shadow-[0_12px_32px_rgba(0,0,0,0.18),0_3px_10px_rgba(0,0,0,0.12)]`,Z.panel,J.className),style:L(Q.panel,J.style,nt),"data-rue-tour-panel":`true`,children:[Me.value?k(`span`,{"aria-hidden":`true`,className:I(`absolute size-[14px] rotate-45 border`,X===`primary`?`border-primary/20 bg-sky-900 shadow-[8px_8px_18px_-14px_rgba(15,23,42,0.75)]`:`border-black/[0.06] bg-white shadow-[8px_8px_18px_-14px_rgba(0,0,0,0.28)]`,Z.arrow),style:L(Q.arrow,Me.value),"data-rue-tour-arrow":`true`}):null,O(`div`,{className:I(`relative px-6 pb-5 pt-5`,Z.section),style:Q.section,"data-rue-tour-section":`true`,children:[k(`button`,{type:`button`,"aria-label":String($e.close),className:I(`absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full transition`,X===`primary`?`text-primary-content/80 hover:bg-white/10 hover:text-primary-content`:`text-black/35 hover:bg-black/[0.04] hover:text-black/60`,Z.close),style:Q.close,onClick:Ke,"data-rue-tour-close":`true`,children:ct}),J.cover?k(`div`,{className:I(`mb-5 overflow-hidden rounded-[12px]`,Z.cover),style:Q.cover,"data-rue-tour-cover":`true`,children:J.cover}):null,O(`div`,{className:I(`pr-11`,Z.body),style:Q.body,"data-rue-tour-body":`true`,children:[O(`div`,{className:I(`mb-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium`,X===`primary`?`bg-white/10 text-primary-content/70`:`border border-black/[0.06] bg-[#fafafa] text-[#8c8c8c]`,Z.meta),style:Q.meta,"data-rue-tour-meta":`true`,children:[k(fe,{}),k(`span`,{children:`Tour`}),O(`span`,{className:X===`primary`?`text-primary-content/50`:`text-base-content/40`,children:[String(Ze+1).padStart(2,`0`),` / `,String(Xe).padStart(2,`0`)]})]}),k(`div`,{className:I(``,Z.header),style:Q.header,"data-rue-tour-header":`true`,children:J.title?k(`div`,{className:I(`text-[1.08rem] font-semibold leading-7 tracking-[0.01em]`,Z.title),style:Q.title,"data-rue-tour-title":`true`,children:J.title}):null}),J.description?k(`div`,{className:I(`mt-3 text-[15px] leading-7`,X===`primary`?`text-primary-content/80`:`text-[#595959]`,Z.description),style:Q.description,"data-rue-tour-description":`true`,children:J.description}):null]}),(()=>{let e=ot?ot(Ze,Xe):k(`div`,{className:I(`flex flex-wrap items-center gap-2.5`,Z.indicators),style:Q.indicators,"data-rue-tour-indicators":`true`,children:Array.from({length:Xe}).map((e,t)=>g(e=>{let n=a(`span`,e);return s(()=>{d(n,`key`,String(`indicator-${t}`))}),s(()=>{C(n,I(`block size-2.5 rounded-full transition-all duration-200`,t===Ze?X===`primary`?`bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)]`:`bg-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.14)]`:X===`primary`?`bg-white/30`:`bg-black/12`,Z.indicator))}),s(()=>{let e=Q.indicator;f(n,e)}),s(()=>{d(n,`data-rue-tour-indicator`,String(t===Ze?`active`:`inactive`))}),s(()=>{d(n,`data-rue-tour-indicator-index`,String(String(t)))}),n}))}),t=Ze===0||J.prevButtonProps?.disabled,n=!!J.nextButtonProps?.disabled,r=O(`div`,{className:I(`flex flex-wrap items-center justify-between gap-3`,Z.actions),style:Q.actions,"data-rue-tour-actions":`true`,children:[e,O(`div`,{className:I(`flex items-center gap-2.5`,Z.buttons),style:Q.buttons,"data-rue-tour-buttons":`true`,children:[k(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[84px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-white/18 bg-transparent text-primary-content/78 hover:bg-white/10 hover:text-primary-content disabled:border-white/10 disabled:text-white/28`:`border-black/[0.08] bg-white text-[#595959] hover:border-black/[0.12] hover:bg-[#fafafa] disabled:border-black/[0.06] disabled:bg-[#fafafa] disabled:text-black/25`,Z.prevButton,J.prevButtonProps?.className),style:L(Q.prevButton,J.prevButtonProps?.style),disabled:t,onClick:Ye,"data-rue-tour-prev":`true`,children:J.prevButtonProps?.children??$e.previous}),k(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[96px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-0 bg-white text-sky-900 shadow-[0_2px_0_rgba(255,255,255,0.08)] hover:bg-sky-50 disabled:bg-white/40 disabled:text-sky-950/40`:`border-[#1677ff] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.12)] hover:border-[#4096ff] hover:bg-[#4096ff] disabled:border-[#91caff] disabled:bg-[#91caff]`,Z.nextButton,J.nextButtonProps?.className),style:L(Q.nextButton,J.nextButtonProps?.style),disabled:n,onClick:Je,"data-rue-tour-next":Ze===Xe-1?`finish`:`next`,children:J.nextButtonProps?.children??(Ze===Xe-1?$e.finish:$e.next)})]})]}),i=st?st(r,{current:Ze,total:Xe}):r;return i?k(`div`,{className:I(`mt-5 border-t pt-4`,X===`primary`?`border-white/10`:`border-black/[0.06]`,Z.footer),style:Q.footer,"data-rue-tour-footer":`true`,children:i}):null})()]})]})]}),ut=H(K);return ut===!1||ut==null?lt:g(e=>{let r=l(),i=o(`rue:component:anchor`);return n(r,i),s(()=>{let e=w(A,{to:ut,children:lt});t(()=>S(e,r,i))}),r})},pe=r=>g(i=>{let c=a(`div`,i);C(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=a(`table`,c);n(c,u),C(u,`table table-zebra`);let f=a(`thead`,u);n(u,f);let p=a(`tr`,f);n(f,p);let m=a(`th`,p);n(p,m),n(m,e(`属性`));let h=a(`th`,p);n(p,h),n(h,e(`说明`));let _=a(`th`,p);n(p,_),n(_,e(`类型`));let v=a(`th`,p);n(p,v),n(v,e(`默认值`));let y=a(`tbody`,u);n(u,y);let b=o(`rue:list:start`),x=o(`rue:list:end`);n(y,b),n(y,x);let w=new Map;return s(()=>{w=E({items:r.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(e,r,i,c,u)=>{S(g(()=>{let r=l(),i=a(`tr`,r);n(r,i),s(()=>{d(i,`key`,String(e.prop))});let c=a(`td`,i);n(i,c);let u=a(`code`,c);n(c,u);let f=o(`rue:slot:anchor`);n(u,f),s(()=>{let n=e.prop;t(()=>S(n,u,f))});let p=a(`td`,i);n(i,p);let m=o(`rue:slot:anchor`);n(p,m),s(()=>{let n=e.description;t(()=>S(n,p,m))});let h=a(`td`,i);n(i,h);let g=a(`code`,h);n(h,g);let _=o(`rue:slot:anchor`);n(g,_),s(()=>{let n=e.type;t(()=>S(n,g,_))});let v=a(`td`,i);n(i,v);let y=a(`code`,v);n(v,y);let b=o(`rue:slot:anchor`);return n(y,b),s(()=>{let n=e.defaultValue;t(()=>S(n,y,b))}),r}),r,i)}})}),c}),me=T(`ref:1:0`,()=>i(`preview`)),he=T(`ref:1:1`,()=>i(`preview`)),ge=T(`ref:1:2`,()=>i(`preview`)),_e=T(`ref:1:3`,()=>i(`preview`)),ve=[`top`,`right`,`bottom`,`left`],ye=[{prop:`steps`,description:`引导步骤数组，每步可独立配置 target、placement、mask、cover 与按钮文案。`,type:`TourStepProps[]`,defaultValue:`[]`},{prop:`open / defaultOpen`,description:`受控或非受控地打开引导浮层。`,type:`boolean`,defaultValue:`false`},{prop:`current / defaultCurrent`,description:`受控或非受控地指定当前步骤索引。`,type:`number`,defaultValue:`0`},{prop:`placement`,description:`全局浮层位置，单步可继续覆盖。`,type:`TourPlacement`,defaultValue:`bottom`},{prop:`mask / disabledInteraction`,description:`控制遮罩是否启用，以及高亮区是否允许继续交互。`,type:`boolean | { color?: string; style?: object } / boolean`,defaultValue:`true / false`},{prop:`gap`,description:`调整高亮区与目标的间距和圆角，适合按钮、卡片、输入框等不同密度场景。`,type:`{ offset?: number | [number, number]; radius?: number }`,defaultValue:`{ offset: 8, radius: 18 }`},{prop:`arrow / closeIcon / type`,description:`配置箭头、关闭按钮与主视觉主题。`,type:`boolean | object / any / default | primary`,defaultValue:`true / x / default`},{prop:`indicatorsRender / actionsRender`,description:`自定义底部步骤指示器与整体操作区。`,type:`(current, total) => any / (originNode, info) => any`,defaultValue:`-`},{prop:`scrollIntoViewOptions`,description:`步骤切换时自动把目标滚动进视口，可关闭或传入原生配置。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`{ block: center, inline: center, behavior: smooth }`},{prop:`onChange / onClose / onFinish / onOpenChange`,description:`监听步骤变化、关闭、完成和打开状态变化。`,type:`function`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义节点扩展 root、mask、spotlight、panel、footer、indicator 等样式。`,type:`object`,defaultValue:`-`}],be=`import { ref, useRef } from '@rue-js/rue'
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
`,we={panel:{width:`min(92vw, 21rem)`,maxHeight:`calc(100vh - 1.5rem)`},section:{maxHeight:`calc(100vh - 1.5rem)`,overflowY:`auto`,padding:`16px`},cover:{marginBottom:`12px`},meta:{color:`rgba(255,255,255,0.82)`,background:`rgba(255,255,255,0.12)`},title:{color:`#fff`,fontSize:`1rem`,lineHeight:`1.5rem`},description:{color:`rgba(255,255,255,0.88)`,marginTop:`10px`,fontSize:`14px`,lineHeight:`1.5rem`},footer:{marginTop:`14px`,paddingTop:`12px`,borderColor:`rgba(255,255,255,0.14)`},actions:{gap:`10px`},buttons:{gap:`8px`},prevButton:{minWidth:`72px`,height:`36px`,color:`#fff`,borderColor:`rgba(255,255,255,0.22)`},nextButton:{minWidth:`88px`,height:`36px`}},Te=()=>{let{tourVisible:c,current:u,tourSession:f,note:h,uploadRef:_,saveRef:E,moreRef:O,steps:k,startTour:A}=T(`useSetup:0:0`,()=>b(()=>{let e=T(`ref:1:4`,()=>i(!1)),t=T(`ref:1:5`,()=>i(0)),n=T(`ref:1:6`,()=>i(0)),a=T(`ref:1:7`,()=>i(`点击 Basic 按钮后弹出引导`)),o=T(`useRef:1:8`,()=>r()),s=T(`useRef:1:9`,()=>r()),c=T(`useRef:1:10`,()=>r());return{tourVisible:e,current:t,tourSession:n,note:a,uploadRef:o,saveRef:s,moreRef:c,steps:T(`computed:1:11`,()=>m(()=>[{target:()=>o.current??null,title:`Upload`,description:`Bring files into the workspace first.`,placement:`top`},{target:()=>s.current??null,title:`Save`,description:`Save your changes.`,placement:`top`},{target:()=>c.current??null,title:`More`,description:`Open additional actions from here.`,placement:`left`,nextButtonProps:{children:`完成引导`}}])),startTour:()=>{n.value+=1,t.value=0,e.value=!0,a.value=`正在查看 Upload`}}}));return g(r=>{let i=a(`div`,r);C(i,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]`);let m=a(`div`,i);n(i,m),C(m,`mb-6 text-[2.25rem] font-semibold tracking-tight text-base-content md:text-[2.7rem]`),n(m,e(`代码演示`));let b=a(`div`,i);n(i,b),C(b,`mb-5 flex flex-wrap items-center gap-3`);let T=a(`button`,b);n(b,T),d(T,`type`,`button`),C(T,`btn btn-primary rounded-2xl px-5`),y(T,`click`,A),n(T,e(`Basic`));let j=a(`button`,b);n(b,j),d(j,`type`,`button`),C(j,`btn btn-ghost rounded-2xl px-4`),y(j,`click`,()=>{u.value=0,c.value=!1,h.value=`基础引导已重置`}),n(j,e(`重置`));let M=a(`span`,b);n(b,M),C(M,`text-sm text-base-content/60`);let N=p(M);n(M,N),s(()=>{v(N,h.value)});let P=a(`div`,i);n(i,P),C(P,`rounded-[1.7rem] border border-base-300/70 bg-base-100/82 p-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.6)]`);let F=a(`div`,P);n(P,F),C(F,`rounded-[1.5rem] border border-base-300/70 bg-base-100 p-5`);let I=a(`div`,F);n(F,I),C(I,`mb-4 flex flex-wrap items-center justify-between gap-3`);let L=a(`div`,I);n(I,L);let R=a(`div`,L);n(L,R),C(R,`text-sm font-semibold text-base-content`),n(R,e(`Action Bar`));let z=a(`div`,L);n(L,z),C(z,`mt-1 text-sm text-base-content/55`),n(z,e(`点击 Basic 后，会依次讲解 Upload、Save 和更多操作。`));let B=a(`span`,I);n(I,B),C(B,`badge badge-outline badge-sm px-3 py-3`),n(B,e(`Code Demo`));let V=a(`div`,F);n(F,V),C(V,`flex flex-wrap items-center gap-3`);let H=a(`button`,V);n(V,H);let ee=D(H,()=>e=>{_.current=e??void 0});x(()=>{ee()}),d(H,`data-basic-tour-target`,`upload`),d(H,`type`,`button`),C(H,`btn btn-outline rounded-2xl px-6`),n(H,e(`Upload`));let U=a(`button`,V);n(V,U);let te=D(U,()=>e=>{E.current=e??void 0});x(()=>{te()}),d(U,`data-basic-tour-target`,`save`),d(U,`type`,`button`),C(U,`btn btn-primary rounded-2xl px-7`),n(U,e(`Save`));let W=a(`button`,V);n(V,W);let ne=D(W,()=>e=>{O.current=e??void 0});x(()=>{ne()}),d(W,`data-basic-tour-target`,`more`),d(W,`type`,`button`),d(W,`aria-label`,`More actions`),C(W,`btn btn-outline rounded-2xl px-5`),n(W,e(`More`));let re=o(`rue:slot:anchor`);return n(i,re),s(()=>{let e=c.value?g(()=>{let e=l(),r=o(`rue:component:anchor`);return n(e,r),s(()=>{let n=w(q,{key:`basic-tour-${f.value}-${u.value}-${c.value?`open`:`closed`}`,open:c.value,current:u.value,steps:k.get(),gap:{offset:[10,14],radius:18},onOpenChange:e=>{c.value=e,e||(u.value=0)},onChange:e=>{u.value=e,h.value=`正在查看 ${k.get()[e]?.title??`第 ${e+1} 步`}`},onClose:()=>{h.value=`基础引导已关闭`},onFinish:()=>{u.value=0,h.value=`基础引导已完成`}});t(()=>S(n,e,r))}),e}):``;t(()=>S(e,i,re))}),i})},Ee=()=>{let{open:c,current:u,tourSession:f,heroRef:p,metricsRef:h,steps:_}=T(`useSetup:0:0:dup1`,()=>b(()=>{let e=T(`ref:1:12`,()=>i(!1)),t=T(`ref:1:13`,()=>i(0)),n=T(`ref:1:14`,()=>i(0)),a=T(`useRef:1:15`,()=>r()),o=T(`useRef:1:16`,()=>r());return{open:e,current:t,tourSession:n,heroRef:a,metricsRef:o,steps:T(`computed:1:17`,()=>m(()=>[{placement:`center`,title:`欢迎来到 Rue Tour`,description:`第一步不绑定 target，会自动居中显示。适合首访说明、版本更新和整页 onboarding。`,cover:k(`div`,{className:`h-28 rounded-[1.25rem] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续看页面`}},{target:()=>a.current,title:`非模态说明更适合轻引导`,description:`这里关闭了遮罩，用户仍然可以浏览内容，不会被强行打断。`,placement:`bottomRight`},{target:()=>o.current,title:`局部强调也能单独覆盖 placement`,description:`同一套 Tour 可以混合 center 步骤与 target 步骤。`,placement:`top`,nextButtonProps:{children:`知道了`}}]))}}));return g(r=>{let i=a(`div`,r);C(i,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let m=a(`div`,i);n(i,m),C(m,`mb-4 flex flex-wrap items-center justify-between gap-3`);let v=a(`div`,m);n(m,v);let b=a(`div`,v);n(v,b),C(b,`text-sm font-semibold`),n(b,e(`欢迎页 + 非模态引导`));let T=a(`div`,v);n(v,T),C(T,`mt-1 text-sm text-base-content/60`),n(T,e(`适合把版本亮点和页面主内容穿在同一条体验线上。`));let O=a(`button`,m);n(m,O),d(O,`type`,`button`),C(O,`btn btn-outline btn-sm rounded-full`),y(O,`click`,()=>{f.value+=1,u.value=0,c.value=!0}),n(O,e(`打开欢迎引导`));let k=a(`div`,i);n(i,k);let A=D(k,()=>e=>{p.current=e??void 0});x(()=>{A()}),C(k,`rounded-[1.7rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 p-6 text-white`);let j=a(`div`,k);n(k,j),C(j,`badge badge-sm border-0 bg-white/15 text-white`),n(j,e(`Release Note`));let M=a(`div`,k);n(k,M),C(M,`mt-4 text-2xl font-semibold`),n(M,e(`Shipping cockpit for product operations`));let N=a(`div`,k);n(k,N),C(N,`mt-2 max-w-xl text-sm text-white/75`),n(N,e(`把素材、上线窗口、审批节点和回放笔记收进同一块工作区，不必在多个页面之间反复跳转。`));let P=a(`div`,i);n(i,P);let F=D(P,()=>e=>{h.current=e??void 0});x(()=>{F()}),C(P,`mt-4 grid gap-4 md:grid-cols-3`);let I=o(`rue:list:start`),L=o(`rue:list:end`);n(P,I),n(P,L);let R=new Map;s(()=>{R=E({items:[[`Launches`,`12`],[`Reviews`,`5`],[`Pending`,`2`]],getKey:(e,t)=>e[0],elements:R,parent:P,before:L,singleRoot:!0,trackIndex:!1,start:I,renderItem:(e,r,i,c,u)=>{S(g(()=>{let r=l(),i=a(`div`,r);n(r,i),s(()=>{d(i,`key`,String(e[0]))}),C(i,`rounded-[1.4rem] border border-base-300/70 bg-base-100/80 p-4`);let c=a(`div`,i);n(i,c),C(c,`text-sm text-base-content/55`);let u=o(`rue:slot:anchor`);n(c,u),s(()=>{let n=e[0];t(()=>S(n,c,u))});let f=a(`div`,i);n(i,f),C(f,`mt-2 text-3xl font-semibold`);let p=o(`rue:slot:anchor`);return n(f,p),s(()=>{let n=e[1];t(()=>S(n,f,p))}),r}),r,i)}})});let z=o(`rue:slot:anchor`);return n(i,z),s(()=>{let e=c.value?g(()=>{let e=l(),r=o(`rue:component:anchor`);return n(e,r),s(()=>{let n=w(q,{key:`welcome-tour-${f.value}-${u.value}-${c.value?`open`:`closed`}`,open:c.value,current:u.value,mask:!1,steps:_.get(),onOpenChange:e=>{c.value=e,e||(u.value=0)},onChange:e=>{u.value=e},onFinish:()=>{u.value=0}});t(()=>S(n,e,r))}),e}):``;t(()=>S(e,i,z))}),i})},De=()=>{let{open:c,current:u,tourSession:f,tapCount:h,activePlacement:_,anchorRef:O,steps:k}=T(`useSetup:0:0:dup2`,()=>b(()=>{let e=T(`ref:1:18`,()=>i(!1)),t=T(`ref:1:19`,()=>i(0)),n=T(`ref:1:20`,()=>i(0)),a=T(`ref:1:21`,()=>i(0)),o=T(`ref:1:22`,()=>i(`right`)),s=T(`useRef:1:23`,()=>r());return{open:e,current:t,tourSession:n,tapCount:a,activePlacement:o,anchorRef:s,steps:T(`computed:1:24`,()=>m(()=>[{target:()=>s.current,title:`高亮区默认仍可点击`,description:`disabledInteraction 默认为 false，所以聚焦区域内的按钮还能继续触发业务动作。`}]))}}));return g(r=>{let i=a(`div`,r);C(i,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let m=a(`div`,i);n(i,m),C(m,`mb-4 flex flex-wrap items-center justify-between gap-3`);let b=a(`div`,m);n(m,b);let T=a(`div`,b);n(b,T),C(T,`text-sm font-semibold`),n(T,e(`Placement 与高亮区实验`));let A=a(`div`,b);n(b,A),C(A,`mt-1 text-sm text-base-content/60`),n(A,e(`切换浮层方向时，目标按钮仍然可以在洞口区域被点击。`));let j=a(`button`,m);n(m,j),d(j,`type`,`button`),C(j,`btn btn-outline btn-sm rounded-full`),y(j,`click`,()=>{f.value+=1,u.value=0,c.value=!0}),n(j,e(`打开定位实验`));let M=a(`div`,i);n(i,M),C(M,`mb-4 flex flex-wrap gap-2`);let N=o(`rue:list:start`),P=o(`rue:list:end`);n(M,N),n(M,P);let F=new Map;s(()=>{F=E({items:ve||[],getKey:(e,t)=>e,elements:F,parent:M,before:P,singleRoot:!0,trackIndex:!1,start:N,renderItem:(e,t,r,i,o)=>{S(g(()=>{let t=l(),r=a(`button`,t);n(t,r),s(()=>{d(r,`key`,String(e))}),d(r,`type`,`button`),s(()=>{C(r,`btn btn-sm rounded-full ${_.value===e?`btn-primary`:`btn-outline`}`)}),y(r,`click`,()=>{_.value=e,f.value+=1,u.value=0,c.value=!0});let i=p(r);return n(r,i),s(()=>{v(i,e)}),t}),t,r)}})});let I=a(`div`,i);n(i,I),C(I,`grid min-h-[18rem] place-items-center rounded-[1.7rem] border border-dashed border-base-300/80 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_50%)] p-6`);let L=a(`button`,I);n(I,L);let R=D(L,()=>e=>{O.current=e??void 0});x(()=>{R()}),d(L,`type`,`button`),C(L,`btn btn-primary rounded-full px-6`),y(L,`click`,()=>{h.value+=1}),n(L,e(`已点击 `));let z=p(L);n(L,z),s(()=>{v(z,h.value)}),n(L,e(` 次`));let B=o(`rue:slot:anchor`);return n(i,B),s(()=>{let e=c.value?g(()=>{let e=l(),r=o(`rue:component:anchor`);return n(e,r),s(()=>{let n=w(q,{key:`placement-tour-${f.value}-${_.value}-${u.value}`,open:c.value,current:u.value,placement:_.value,gap:{offset:[12,16],radius:22},mask:{color:`rgba(15, 23, 42, 0.38)`},steps:k.get(),onOpenChange:e=>{c.value=e,e||(u.value=0)},onChange:e=>{u.value=e}});t(()=>S(n,e,r))}),e}):``;t(()=>S(e,i,B))}),i})},Oe=()=>{let{open:c,current:u,tourSession:f,summaryRef:p,timelineRef:h,approvalRef:_,steps:v}=T(`useSetup:0:0:dup3`,()=>b(()=>{let e=T(`ref:1:25`,()=>i(!1)),t=T(`ref:1:26`,()=>i(0)),n=T(`ref:1:27`,()=>i(0)),a=T(`useRef:1:28`,()=>r()),o=T(`useRef:1:29`,()=>r()),s=T(`useRef:1:30`,()=>r());return{open:e,current:t,tourSession:n,summaryRef:a,timelineRef:o,approvalRef:s,steps:T(`computed:1:31`,()=>m(()=>[{target:()=>a.current,title:`把封面和主题一起做强`,description:`默认样式延续 Rue 的轻卡片语言，但你也可以切到 primary，让产品引导更像一个任务流。`,placement:`bottomLeft`,cover:k(`div`,{className:`h-20 rounded-[1.25rem] bg-gradient-to-br from-cyan-300 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续`}},{target:()=>o.current,title:`中间步骤适合解释过程`,description:`当你要穿过多个版块时，指示器和 actionsRender 可以直接融入业务语境。`,placement:`topLeft`,prevButtonProps:{children:`返回`},nextButtonProps:{children:`看审批`}},{target:()=>s.current,title:`最后把业务动作接住`,description:`把完成按钮改成提交、发布、同步都可以，不需要额外封装。`,placement:`left`,nextButtonProps:{children:`提交并结束`}}]))}}));return g(r=>{let i=a(`div`,r);C(i,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let m=a(`div`,i);n(i,m),C(m,`mb-4 flex flex-wrap items-center justify-between gap-3`);let b=a(`div`,m);n(m,b);let T=a(`div`,b);n(b,T),C(T,`text-sm font-semibold`),n(T,e(`自定义 indicator 与 actions`));let A=a(`div`,b);n(b,A),C(A,`mt-1 text-sm text-base-content/60`),n(A,e(`这套写法更接近常见分步引导的心智，但视觉和布局还是 Rue 自己的。`));let j=a(`button`,m);n(m,j),d(j,`type`,`button`),C(j,`btn btn-outline btn-sm rounded-full`),y(j,`click`,()=>{f.value+=1,u.value=0,c.value=!0}),n(j,e(`启动主视觉引导`));let M=a(`div`,i);n(i,M);let N=D(M,()=>e=>{p.current=e??void 0});x(()=>{N()}),C(M,`rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let P=a(`div`,M);n(M,P),C(P,`flex flex-wrap items-center justify-between gap-3`);let F=a(`div`,P);n(P,F);let I=a(`div`,F);n(F,I),C(I,`badge badge-outline badge-sm`),n(I,e(`Launch Summary`));let L=a(`div`,F);n(F,L),C(L,`mt-3 text-xl font-semibold`),n(L,e(`One surface for launch, approval and playback`));let R=a(`div`,F);n(F,R),C(R,`mt-2 max-w-xl text-sm text-base-content/60`),n(R,e(`用一个页面完成素材汇总、审批流转、上线窗口对齐和上线后的回放，不再分散在多个工具里。`));let z=a(`div`,P);n(P,z),C(z,`grid h-16 w-16 place-items-center rounded-3xl bg-primary/10 text-primary`);let B=a(`svg`,z);n(z,B),d(B,`viewBox`,`0 0 24 24`),d(B,`fill`,`none`),d(B,`stroke`,`currentColor`),d(B,`strokeWidth`,`1.8`),C(B,`size-8`);let V=a(`path`,B);n(B,V),d(V,`strokeLinecap`,`round`),d(V,`strokeLinejoin`,`round`),d(V,`d`,`m12 3 2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8L12 3Z`);let H=a(`div`,i);n(i,H);let ee=D(H,()=>e=>{h.current=e??void 0});x(()=>{ee()}),C(H,`mt-4 rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let U=a(`div`,H);n(H,U),C(U,`grid gap-3 md:grid-cols-3`);let te=o(`rue:list:start`),W=o(`rue:list:end`);n(U,te),n(U,W);let ne=new Map;s(()=>{ne=E({items:[[`Brief`,`完成背景与目标归纳`],[`Review`,`跨团队确认视觉与文案`],[`Ship`,`统一 CTA 与发布时间窗`]],getKey:(e,t)=>e[0],elements:ne,parent:U,before:W,singleRoot:!0,trackIndex:!1,start:te,renderItem:(e,r,i,c,u)=>{S(g(()=>{let r=l(),i=a(`div`,r);n(r,i),s(()=>{d(i,`key`,String(e[0]))}),C(i,`rounded-[1.2rem] bg-base-200/65 px-4 py-4`);let c=a(`div`,i);n(i,c),C(c,`text-sm font-semibold`);let u=o(`rue:slot:anchor`);n(c,u),s(()=>{let n=e[0];t(()=>S(n,c,u))});let f=a(`div`,i);n(i,f),C(f,`mt-2 text-sm text-base-content/60`);let p=o(`rue:slot:anchor`);return n(f,p),s(()=>{let n=e[1];t(()=>S(n,f,p))}),r}),r,i)}})});let re=a(`div`,i);n(i,re),C(re,`mt-4 flex justify-end`);let G=a(`button`,re);n(re,G);let K=D(G,()=>e=>{_.current=e??void 0});x(()=>{K()}),d(G,`type`,`button`),C(G,`btn btn-primary rounded-full px-5`),n(G,e(`提交审批`));let ie=o(`rue:slot:anchor`);return n(i,ie),s(()=>{let e=c.value?g(()=>{let e=l(),r=o(`rue:component:anchor`);return n(e,r),s(()=>{let n=w(q,{key:`custom-tour-${f.value}-${u.value}-${c.value?`open`:`closed`}`,open:c.value,current:u.value,type:`primary`,styles:we,steps:v.get(),indicatorsRender:(e,t)=>O(`div`,{className:`flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/80`,children:[k(`span`,{children:`phase`}),k(`span`,{className:`rounded-full border border-white/20 px-2 py-1 text-white`,children:e+1}),k(`span`,{children:`/`}),k(`span`,{children:t})]}),actionsRender:(e,t)=>O(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[O(`div`,{className:`text-xs uppercase tracking-[0.24em] text-white/70`,children:[`launch guide · step `,t.current+1]}),e]}),onOpenChange:e=>{c.value=e,e||(u.value=0)},onChange:e=>{u.value=e},onFinish:()=>{u.value=0}});t(()=>S(n,e,r))}),e}):``;t(()=>S(e,i,ie))}),i})},ke=()=>g(r=>{let i=l(),c=o(`rue:component:anchor`);return n(i,c),S(w(j,{children:g(()=>{let r=l(),i=a(`div`,r);n(r,i),C(i,`max-w-none prose prose-sm md:prose-base`);let c=a(`h1`,i);n(i,c),n(c,e(`Tour 漫游引导`));let u=a(`p`,i);n(i,u),C(u,`text-sm mt-3 mb-3`),n(u,e(`Tour 用分步浮层把用户带过关键入口、局部强调和最终动作。Rue 的实现参考了成熟组件库的能力模型，但视觉仍然保持自己的 card、badge 和 button 语言，不直接照搬现成面板样式。`));let d=a(`p`,i);n(i,d),C(d,`text-sm mt-3 mb-3`),n(d,e(`这次补齐的不只是静态外观，而是完整执行逻辑：围绕真实 DOM target 做高亮、自动定位、切步滚动、非模态展示，以及自定义 indicator 和底部 actions。`));let f=a(`h2`,i);n(i,f),n(f,e(`何时使用`));let p=a(`ul`,i);n(i,p);let m=a(`li`,p);n(p,m),n(m,e(`需要把新用户逐步带过核心入口、关键按钮或首次配置流程。`));let h=a(`li`,p);n(p,h),n(h,e(`需要在复杂页面里突出某个局部区域，并配合文案解释当前操作目的。`));let g=a(`li`,p);n(p,g),n(g,e(`需要把产品说明、轻 onboarding 和最终业务动作串成一条连续体验。`));let _=o(`rue:component:anchor`);n(r,_),s(()=>{let e=w(M,{title:`基础引导`,summary:`点击 Basic 后，从 Upload、Save 到更多操作依次弹出讲解。`,tab:me,preview:Te,code:be});t(()=>S(e,r,_))});let v=o(`rue:component:anchor`);n(r,v),s(()=>{let e=w(M,{title:`欢迎页与非模态`,summary:`展示没有 target 的中心步骤，以及 mask=false 时的轻量引导方式。`,tab:he,preview:Ee,code:xe});t(()=>S(e,r,v))});let y=o(`rue:component:anchor`);n(r,y),s(()=>{let e=w(M,{title:`Placement 与交互洞口`,summary:`切换 top/right/bottom/left，并验证高亮区默认仍可继续触发目标元素。`,tab:ge,preview:De,code:Se});t(()=>S(e,r,y))});let b=o(`rue:component:anchor`);n(r,b),s(()=>{let e=w(M,{title:`自定义指示器与动作区`,summary:`通过 primary 主题、cover、indicatorsRender 和 actionsRender 把引导做成更完整的任务流。`,tab:_e,preview:Oe,code:Ce});t(()=>S(e,r,b))});let x=a(`div`,r);n(r,x),C(x,`component-preview not-prose text-base-content my-6 lg:my-12`);let T=a(`h2`,x);n(x,T),C(T,`component-preview-title mt-2 mb-3 text-lg font-semibold`),n(T,e(`# API`));let E=o(`rue:component:anchor`);return n(x,E),s(()=>{let e=w(pe,{rows:ye});t(()=>S(e,x,E))}),r})}),i,c),i});export{ke as default};
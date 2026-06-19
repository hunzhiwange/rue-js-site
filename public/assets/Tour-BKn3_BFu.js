import{$ as e,Jt as t,Q as n,Qt as r,Wt as i,X as a,Y as o,Yt as s,Zt as c,et as l,ht as u,i as d,l as f,lt as p,n as m,nt as h,o as g,p as _,pt as v,r as y,st as b,t as x,tt as S,vt as C,zt as w}from"./vapor-runtime-CXIalONM.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-CoXKrGmY.js";import{a as O,i as k}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as A}from"./Teleport-DbaANAG7.js";import{r as j}from"./SidebarPlaygroundDesign-CsC_YS7V.js";import{t as M}from"./PreviewBlock-RQJhyX9w.js";var N={next:`下一步`,previous:`上一步`,finish:`完成`,close:`关闭引导`},P=16,F=18,I=(...e)=>e.filter(Boolean).join(` `),L=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},R=e=>`${e}px`,z=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=I(e?.[r],t?.[r]);i&&(n[r]=i)}),n},B=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=L(e?.[r],t?.[r]);Object.keys(i).length>0&&(n[r]=i)}),n},V=(e,t,n)=>n<t?t:Math.min(Math.max(e,t),n),H=e=>typeof e==`function`?e():e,ee=e=>typeof e==`function`?e()??null:e??null,U=e=>{let t=e?.offset??8;if(Array.isArray(t))return{horizontal:Math.max(0,t[0]??0),vertical:Math.max(0,t[1]??t[0]??0)};let n=Math.max(0,t);return{horizontal:n,vertical:n}},te=e=>Math.max(0,e?.radius??18),W=e=>e===!1?null:e&&typeof e==`object`?{color:e.color??`rgba(15, 23, 42, 0.46)`,style:e.style}:{color:`rgba(15, 23, 42, 0.46)`,style:void 0},ne=e=>e!==!1,re=e=>typeof e==`object`?e.pointAtCenter!==!1:!0,G=e=>e??`bottom`,K=e=>e===`center`?`center`:e.startsWith(`top`)?`top`:e.startsWith(`bottom`)?`bottom`:e.startsWith(`left`)?`left`:`right`,ie=e=>{switch(e){case`top`:return`bottom`;case`topLeft`:return`bottomLeft`;case`topRight`:return`bottomRight`;case`bottom`:return`top`;case`bottomLeft`:return`topLeft`;case`bottomRight`:return`topRight`;case`left`:return`right`;case`leftTop`:return`rightTop`;case`leftBottom`:return`rightBottom`;case`right`:return`left`;case`rightTop`:return`leftTop`;case`rightBottom`:return`leftBottom`;default:return`center`}},ae=()=>typeof window>`u`||typeof document>`u`?{width:1440,height:900}:{width:document.documentElement.clientWidth||window.innerWidth||1440,height:document.documentElement.clientHeight||window.innerHeight||900},oe=(e,t)=>{if(!e)return null;let n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let r=ae(),i=U(t),a=te(t),o=V(n.left-i.horizontal,4,r.width-4),s=V(n.top-i.vertical,4,r.height-4),c=V(n.right+i.horizontal,4,r.width-4),l=V(n.bottom+i.vertical,4,r.height-4),u=Math.max(0,c-o),d=Math.max(0,l-s);return{left:o,top:s,width:u,height:d,radius:a,centerX:o+u/2,centerY:s+d/2,right:c,bottom:l}},se=(e,t,n,r)=>{switch(e){case`top`:return{left:t.centerX-n/2,top:t.top-r-F};case`topLeft`:return{left:t.left,top:t.top-r-F};case`topRight`:return{left:t.right-n,top:t.top-r-F};case`bottom`:return{left:t.centerX-n/2,top:t.bottom+F};case`bottomLeft`:return{left:t.left,top:t.bottom+F};case`bottomRight`:return{left:t.right-n,top:t.bottom+F};case`left`:return{left:t.left-n-F,top:t.centerY-r/2};case`leftTop`:return{left:t.left-n-F,top:t.top};case`leftBottom`:return{left:t.left-n-F,top:t.bottom-r};case`right`:return{left:t.right+F,top:t.centerY-r/2};case`rightTop`:return{left:t.right+F,top:t.top};case`rightBottom`:return{left:t.right+F,top:t.bottom-r};default:return{left:t.centerX-n/2,top:t.bottom+F}}},ce=(e,t,n,r,i)=>{switch(K(e)){case`top`:return t.top<P;case`bottom`:return t.top+r>i.height-P;case`left`:return t.left<P;case`right`:return t.left+n>i.width-P;default:return!1}},le=(e,t,n,r)=>{let i=ae();if(!t||e===`center`)return{placement:`center`,left:V((i.width-n)/2,P,i.width-n-P),top:V((i.height-r)/2,P,i.height-r-P)};let a=e,o=se(a,t,n,r);return ce(a,o,n,r,i)&&(a=ie(a),o=se(a,t,n,r)),{placement:a,left:V(o.left,P,i.width-n-P),top:V(o.top,P,i.height-r-P)}},ue=(e,t,n,r,i,a,o)=>{if(!t||e===`center`)return null;let s=V(t.centerX-n-9,24,i-24),c=V(t.centerY-r-9,24,a-24),l=o?void 0:28;switch(K(e)){case`top`:return{left:R(l??s),bottom:`-9px`};case`bottom`:return{left:R(l??s),top:`-9px`};case`left`:return{top:R(l??c),right:`-9px`};case`right`:return{top:R(l??c),left:`-9px`};default:return null}},de=()=>f(e=>{let t=l(`svg`,e);b(t,`viewBox`,`0 0 24 24`),b(t,`fill`,`none`),b(t,`stroke`,`currentColor`),b(t,`strokeWidth`,`1.9`),p(t,`size-4`);let n=l(`path`,t);return a(t,n),b(n,`strokeLinecap`,`round`),b(n,`strokeLinejoin`,`round`),b(n,`d`,`M6 6l12 12M18 6 6 18`),t}),fe=()=>f(e=>{let t=l(`svg`,e);b(t,`viewBox`,`0 0 24 24`),b(t,`fill`,`none`),b(t,`stroke`,`currentColor`),b(t,`strokeWidth`,`1.8`),p(t,`size-4`);let n=l(`path`,t);a(t,n),b(n,`strokeLinecap`,`round`),b(n,`strokeLinejoin`,`round`),b(n,`d`,`m12 3 1.7 4.2L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.8L12 3Z`);let r=l(`path`,t);return a(t,r),b(r,`strokeLinecap`,`round`),b(r,`strokeLinejoin`,`round`),b(r,`d`,`M5 19h.01M12 21h.01M19 19h.01`),t}),q=o=>{let{steps:u,defaultOpen:m,defaultCurrent:h,placement:S,mask:C,gap:E,arrow:D,type:j,closeIcon:M,disabledInteraction:P,keyboard:F,zIndex:U,scrollIntoViewOptions:te,getPopupContainer:K,locale:ie,indicatorsRender:ae,actionsRender:se,className:ce,style:q,classNames:pe,styles:me,onChange:he,onClose:ge,onFinish:_e,onOpenChange:ve,rest:ye,panelRef:be,rafIdRef:xe,renderVersion:Se,isControlledOpen:Ce,isControlledCurrent:we,uncontrolledOpen:Te,uncontrolledCurrent:Ee,lastDefaultOpen:De,lastDefaultCurrent:Oe,currentOpenRef:ke,currentIndexRef:Ae,panelStyleRef:je,arrowStyleRef:Me,spotlightRef:Ne,placementRef:Pe,mergedLocale:Fe,getTotal:Ie,normalizeCurrentValue:Le,getMergedOpen:Re,getMergedCurrent:ze,getCurrentStep:Be,requestRender:Ve,requestOpenChange:He,requestCurrentChange:Ue,scheduleLayoutSync:We,syncScrollIntoView:Ge,handleClose:Ke,handleMaskClick:qe,handleNext:Je,handlePrev:Ye,total:Xe,currentIndex:Ze,step:J,mergedOpen:Qe}=T(`useSetup:0:0`,()=>s(()=>{let{steps:e=[],defaultOpen:n=!1,defaultCurrent:r=0,placement:i=`bottom`,mask:a=!0,gap:s,arrow:l=!0,type:u=`default`,closeIcon:f,disabledInteraction:p=!1,keyboard:m=!0,zIndex:h=1400,scrollIntoViewOptions:g={block:`center`,inline:`center`,behavior:`smooth`},getPopupContainer:_,locale:v,indicatorsRender:b,actionsRender:x,className:S,style:C,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,...M}=o,P=T(`useRef:1:0`,()=>t()),F=T(`useRef:1:1`,()=>t()),I=T(`ref:1:2`,()=>w(0)),L=typeof o.open==`boolean`,z=typeof o.current==`number`,B=T(`ref:1:3`,()=>w(n)),H=T(`ref:1:4`,()=>w(r)),U=T(`ref:1:5`,()=>w(!!n)),te=T(`ref:1:6`,()=>w(Math.max(0,Math.floor(r)))),W=T(`ref:1:7`,()=>w(L?!!o.open:n)),K=T(`ref:1:8`,()=>w(z?Math.max(0,Math.floor(o.current)):Math.max(0,Math.floor(r)))),ie=T(`ref:1:9`,()=>w({visibility:`hidden`,opacity:0})),ae=T(`ref:1:10`,()=>w(null)),se=T(`ref:1:11`,()=>w(null)),ce=T(`ref:1:12`,()=>w(G(i))),de={...N,...v},fe=()=>e.length,q=e=>{let t=fe();return t<=0?0:V(Math.floor(e),0,t-1)},pe=()=>L?!!o.open:W.value,me=()=>q(z?o.current:K.value),he=()=>e[me()],ge=()=>{I.value+=1},_e=e=>{W.value=e,L||(B.value=e),ge(),j&&j(e)},ve=e=>{let t=fe();if(t<=0)return;let n=V(e,0,t-1);K.value=n,z||(H.value=n),ge(),O&&O(n)},ye=()=>{typeof window>`u`||(F.current!=null&&window.cancelAnimationFrame(F.current),F.current=window.requestAnimationFrame(()=>{let e=P.current??document.querySelector(`[data-rue-tour-panel="true"]`),t=he();if(!pe()||!e||!t){ie.value={visibility:`hidden`,opacity:0},se.value=null,ae.value=null,ge();return}let n=oe(ee(t.target),s),r=e.getBoundingClientRect(),a=le(G(t.placement??i),n,Math.max(r.width,320),Math.max(r.height,1)),o=ne(t.arrow??l),c=re(t.arrow??l);se.value=n,ce.value=a.placement,ie.value={left:R(a.left),top:R(a.top),opacity:1,visibility:`visible`},ae.value=o?ue(a.placement,n,a.left,a.top,r.width,r.height,c):null,ge()}))},be=()=>{let e=he();if(!pe()||!e||typeof window>`u`)return;let t=ee(e.target),n=e.scrollIntoViewOptions??g;!t||n===!1||typeof t.scrollIntoView!=`function`||window.requestAnimationFrame(()=>{t.scrollIntoView(n===!0?{block:`center`,inline:`center`,behavior:`smooth`}:n)})},xe=()=>{he()?.onClose?.(),_e(!1),k&&k()},Se=()=>{xe()},Ce=()=>{let e=he();if(!e)return;e.nextButtonProps?.onClick?.();let t=me();if(t>=fe()-1){A&&A(),_e(!1);return}ve(t+1)},we=()=>{let e=he();e&&(e.prevButtonProps?.onClick?.(),ve(me()-1))};y(()=>{if(typeof window>`u`)return;let e=e=>{if(!(!pe()||!m)){if(e.key===`Escape`){e.preventDefault(),xe();return}if(e.key===`ArrowRight`){e.preventDefault(),Ce();return}e.key===`ArrowLeft`&&(e.preventDefault(),we())}},t=()=>{ye()};window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),window.addEventListener(`keydown`,e),be(),ye(),d(()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`keydown`,e),F.current!=null&&window.cancelAnimationFrame(F.current)})}),T(`watch:1:13`,()=>c(()=>o.open,e=>{typeof e==`boolean`&&(W.value=e)},{immediate:!0})),T(`watch:1:14`,()=>c(()=>o.current,e=>{typeof e==`number`&&(K.value=q(e))},{immediate:!0})),T(`watch:1:15`,()=>c(()=>e.length,()=>{K.value=q(K.value)},{immediate:!0})),T(`watch:1:16`,()=>c(()=>[pe(),me(),e.length,i,s?.radius??-1,Array.isArray(s?.offset)?`${s?.offset[0]??0}:${s?.offset[1]??0}`:s?.offset??-1],()=>{be(),ye()},{immediate:!0})),T(`watch:1:17`,()=>c(()=>n,e=>{let t=!!e;!L&&t!==U.value&&(U.value=t,B.value=t,W.value=t)})),T(`watch:1:18`,()=>c(()=>r,e=>{let t=Math.max(0,Math.floor(e));!z&&t!==te.value&&(te.value=t,H.value=t,K.value=q(t))}));let Te=e.length,Ee=(I.value,q(z?o.current:K.value));return{steps:e,defaultOpen:n,defaultCurrent:r,placement:i,mask:a,gap:s,arrow:l,type:u,closeIcon:f,disabledInteraction:p,keyboard:m,zIndex:h,scrollIntoViewOptions:g,getPopupContainer:_,locale:v,indicatorsRender:b,actionsRender:x,className:S,style:C,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,rest:M,panelRef:P,rafIdRef:F,renderVersion:I,isControlledOpen:L,isControlledCurrent:z,uncontrolledOpen:B,uncontrolledCurrent:H,lastDefaultOpen:U,lastDefaultCurrent:te,currentOpenRef:W,currentIndexRef:K,panelStyleRef:ie,arrowStyleRef:ae,spotlightRef:se,placementRef:ce,mergedLocale:de,getTotal:fe,normalizeCurrentValue:q,getMergedOpen:pe,getMergedCurrent:me,getCurrentStep:he,requestRender:ge,requestOpenChange:_e,requestCurrentChange:ve,scheduleLayoutSync:ye,syncScrollIntoView:be,handleClose:xe,handleMaskClick:Se,handleNext:Ce,handlePrev:we,total:Te,currentIndex:Ee,step:Te>0?e[Ee]:void 0,mergedOpen:(I.value,L?!!o.open:W.value)}}));if(!Qe||!J||Xe===0)return null;let Y=W(J.mask??C),X=J.type??j,$e={...Fe,...J.locale},Z=z(pe,J.classNames),Q=B(me,J.styles),et=oe(ee(J.target),E),tt=le(G(J.placement??S),et,368,225),nt=je.value.visibility===`visible`?je.value:{left:R(tt.left),top:R(tt.top),opacity:1,visibility:`visible`},rt=je.value.visibility===`visible`?Pe.value:tt.placement,it=Ne.value,$=it&&it.width>0&&it.height>0?it:et,at=!!$,ot=J.indicatorsRender??ae,st=J.actionsRender??se,ct=J.closeIcon??M??k(de,{}),lt=O(`div`,{...ye,className:I(`pointer-events-none fixed inset-0`,Z.root,ce),style:L(Q.root,q,{zIndex:U}),"data-rue-tour":`true`,"data-rue-tour-placement":rt,"data-rue-tour-version":String(Se.value),"data-rue-tour-current":String(we?o.current:Ae.value),"data-rue-tour-total":String(Xe),"data-rue-tour-open":String(Ce?!!o.open:ke.value),children:[Y?k(_,{children:at?O(_,{children:[k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 top-0`,Z.mask),style:L(Q.mask,Y.style,{height:R($.top),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`top`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:`0px`,top:R($.top),width:R($.left),height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`left`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:R($.right),top:R($.top),width:`calc(100vw - ${$.right}px)`,height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`right`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 bottom-0`,Z.mask),style:L(Q.mask,Y.style,{top:R($.bottom),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`bottom`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-none fixed border border-primary/25 bg-primary/10 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_20px_60px_-36px_rgba(59,130,246,0.75)] backdrop-blur-[1px]`,Z.spotlight),style:L(Q.spotlight,{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)}),"data-rue-tour-spotlight":`true`}),P?k(`div`,{"aria-hidden":`true`,className:`pointer-events-auto fixed`,style:{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)},"data-rue-tour-blocker":`true`}):null]}):k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-0`,Z.mask),style:L(Q.mask,Y.style,{background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`full`})}):null,O(`div`,{ref:e=>{be.current=e??void 0,e&&We()},role:`dialog`,"aria-modal":Y?`true`:`false`,className:I(`pointer-events-auto fixed w-[min(92vw,23rem)] rounded-[14px] border px-0 py-0 transition duration-200 ease-out md:w-[23rem]`,X===`primary`?`border-primary/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.98),rgba(8,78,119,0.96))] text-primary-content shadow-[0_28px_90px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl`:`border-black/[0.06] bg-white text-[#262626] shadow-[0_12px_32px_rgba(0,0,0,0.18),0_3px_10px_rgba(0,0,0,0.12)]`,Z.panel,J.className),style:L(Q.panel,J.style,nt),"data-rue-tour-panel":`true`,children:[Me.value?k(`span`,{"aria-hidden":`true`,className:I(`absolute size-[14px] rotate-45 border`,X===`primary`?`border-primary/20 bg-sky-900 shadow-[8px_8px_18px_-14px_rgba(15,23,42,0.75)]`:`border-black/[0.06] bg-white shadow-[8px_8px_18px_-14px_rgba(0,0,0,0.28)]`,Z.arrow),style:L(Q.arrow,Me.value),"data-rue-tour-arrow":`true`}):null,O(`div`,{className:I(`relative px-6 pb-5 pt-5`,Z.section),style:Q.section,"data-rue-tour-section":`true`,children:[k(`button`,{type:`button`,"aria-label":String($e.close),className:I(`absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full transition`,X===`primary`?`text-primary-content/80 hover:bg-white/10 hover:text-primary-content`:`text-black/35 hover:bg-black/[0.04] hover:text-black/60`,Z.close),style:Q.close,onClick:Ke,"data-rue-tour-close":`true`,children:ct}),J.cover?k(`div`,{className:I(`mb-5 overflow-hidden rounded-[12px]`,Z.cover),style:Q.cover,"data-rue-tour-cover":`true`,children:J.cover}):null,O(`div`,{className:I(`pr-11`,Z.body),style:Q.body,"data-rue-tour-body":`true`,children:[O(`div`,{className:I(`mb-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium`,X===`primary`?`bg-white/10 text-primary-content/70`:`border border-black/[0.06] bg-[#fafafa] text-[#8c8c8c]`,Z.meta),style:Q.meta,"data-rue-tour-meta":`true`,children:[k(fe,{}),k(`span`,{children:`Tour`}),O(`span`,{className:X===`primary`?`text-primary-content/50`:`text-base-content/40`,children:[String(Ze+1).padStart(2,`0`),` / `,String(Xe).padStart(2,`0`)]})]}),k(`div`,{className:I(``,Z.header),style:Q.header,"data-rue-tour-header":`true`,children:J.title?k(`div`,{className:I(`text-[1.08rem] font-semibold leading-7 tracking-[0.01em]`,Z.title),style:Q.title,"data-rue-tour-title":`true`,children:J.title}):null}),J.description?k(`div`,{className:I(`mt-3 text-[15px] leading-7`,X===`primary`?`text-primary-content/80`:`text-[#595959]`,Z.description),style:Q.description,"data-rue-tour-description":`true`,children:J.description}):null]}),(()=>{let e=ot?ot(Ze,Xe):k(`div`,{className:I(`flex flex-wrap items-center gap-2.5`,Z.indicators),style:Q.indicators,"data-rue-tour-indicators":`true`,children:Array.from({length:Xe}).map((e,t)=>f(e=>{let n=l(`span`,e);return r(()=>{b(n,`key`,String(`indicator-${t}`))}),r(()=>{p(n,I(`block size-2.5 rounded-full transition-all duration-200`,t===Ze?X===`primary`?`bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)]`:`bg-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.14)]`:X===`primary`?`bg-white/30`:`bg-black/12`,Z.indicator))}),r(()=>{let e=Q.indicator;v(n,e)}),r(()=>{b(n,`data-rue-tour-indicator`,String(t===Ze?`active`:`inactive`))}),r(()=>{b(n,`data-rue-tour-indicator-index`,String(String(t)))}),n}))}),t=Ze===0||J.prevButtonProps?.disabled,n=!!J.nextButtonProps?.disabled,i=O(`div`,{className:I(`flex flex-wrap items-center justify-between gap-3`,Z.actions),style:Q.actions,"data-rue-tour-actions":`true`,children:[e,O(`div`,{className:I(`flex items-center gap-2.5`,Z.buttons),style:Q.buttons,"data-rue-tour-buttons":`true`,children:[k(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[84px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-white/18 bg-transparent text-primary-content/78 hover:bg-white/10 hover:text-primary-content disabled:border-white/10 disabled:text-white/28`:`border-black/[0.08] bg-white text-[#595959] hover:border-black/[0.12] hover:bg-[#fafafa] disabled:border-black/[0.06] disabled:bg-[#fafafa] disabled:text-black/25`,Z.prevButton,J.prevButtonProps?.className),style:L(Q.prevButton,J.prevButtonProps?.style),disabled:t,onClick:Ye,"data-rue-tour-prev":`true`,children:J.prevButtonProps?.children??$e.previous}),k(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[96px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-0 bg-white text-sky-900 shadow-[0_2px_0_rgba(255,255,255,0.08)] hover:bg-sky-50 disabled:bg-white/40 disabled:text-sky-950/40`:`border-[#1677ff] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.12)] hover:border-[#4096ff] hover:bg-[#4096ff] disabled:border-[#91caff] disabled:bg-[#91caff]`,Z.nextButton,J.nextButtonProps?.className),style:L(Q.nextButton,J.nextButtonProps?.style),disabled:n,onClick:Je,"data-rue-tour-next":Ze===Xe-1?`finish`:`next`,children:J.nextButtonProps?.children??(Ze===Xe-1?$e.finish:$e.next)})]})]}),a=st?st(i,{current:Ze,total:Xe}):i;return a?k(`div`,{className:I(`mt-5 border-t pt-4`,X===`primary`?`border-white/10`:`border-black/[0.06]`,Z.footer),style:Q.footer,"data-rue-tour-footer":`true`,children:a}):null})()]})]})]}),ut=H(K);return ut===!1||ut==null?lt:f(t=>{let o=e(),s=n(`rue:component:anchor`);return a(o,s),r(()=>{let e=x(A,{to:ut,children:lt});i(()=>g(e,o,s))}),o})},pe=t=>f(o=>{let s=l(`div`,o);p(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,s);a(s,c),p(c,`table table-zebra`);let u=l(`thead`,c);a(c,u);let d=l(`tr`,u);a(u,d);let m=l(`th`,d);a(d,m),a(m,S(`属性`));let h=l(`th`,d);a(d,h),a(h,S(`说明`));let _=l(`th`,d);a(d,_),a(_,S(`类型`));let v=l(`th`,d);a(d,v),a(v,S(`默认值`));let y=l(`tbody`,c);a(c,y);let x=n(`rue:list:start`),C=n(`rue:list:end`);a(y,x),a(y,C);let w=new Map;return r(()=>{w=E({items:t.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(t,o,s,c,u)=>{g(f(()=>{let o=e(),s=l(`tr`,o);a(o,s),r(()=>{b(s,`key`,String(t.prop))});let c=l(`td`,s);a(s,c);let u=l(`code`,c);a(c,u);let d=n(`rue:slot:anchor`);a(u,d),r(()=>{let e=t.prop;i(()=>g(e,u,d))});let f=l(`td`,s);a(s,f);let p=n(`rue:slot:anchor`);a(f,p),r(()=>{let e=t.description;i(()=>g(e,f,p))});let m=l(`td`,s);a(s,m);let h=l(`code`,m);a(m,h);let _=n(`rue:slot:anchor`);a(h,_),r(()=>{let e=t.type;i(()=>g(e,h,_))});let v=l(`td`,s);a(s,v);let y=l(`code`,v);a(v,y);let x=n(`rue:slot:anchor`);return a(y,x),r(()=>{let e=t.defaultValue;i(()=>g(e,y,x))}),o}),o,s)}})}),s}),me=T(`ref:1:0`,()=>w(`preview`)),he=T(`ref:1:1`,()=>w(`preview`)),ge=T(`ref:1:2`,()=>w(`preview`)),_e=T(`ref:1:3`,()=>w(`preview`)),ve=[`top`,`right`,`bottom`,`left`],ye=[{prop:`steps`,description:`引导步骤数组，每步可独立配置 target、placement、mask、cover 与按钮文案。`,type:`TourStepProps[]`,defaultValue:`[]`},{prop:`open / defaultOpen`,description:`受控或非受控地打开引导浮层。`,type:`boolean`,defaultValue:`false`},{prop:`current / defaultCurrent`,description:`受控或非受控地指定当前步骤索引。`,type:`number`,defaultValue:`0`},{prop:`placement`,description:`全局浮层位置，单步可继续覆盖。`,type:`TourPlacement`,defaultValue:`bottom`},{prop:`mask / disabledInteraction`,description:`控制遮罩是否启用，以及高亮区是否允许继续交互。`,type:`boolean | { color?: string; style?: object } / boolean`,defaultValue:`true / false`},{prop:`gap`,description:`调整高亮区与目标的间距和圆角，适合按钮、卡片、输入框等不同密度场景。`,type:`{ offset?: number | [number, number]; radius?: number }`,defaultValue:`{ offset: 8, radius: 18 }`},{prop:`arrow / closeIcon / type`,description:`配置箭头、关闭按钮与主视觉主题。`,type:`boolean | object / any / default | primary`,defaultValue:`true / x / default`},{prop:`indicatorsRender / actionsRender`,description:`自定义底部步骤指示器与整体操作区。`,type:`(current, total) => any / (originNode, info) => any`,defaultValue:`-`},{prop:`scrollIntoViewOptions`,description:`步骤切换时自动把目标滚动进视口，可关闭或传入原生配置。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`{ block: center, inline: center, behavior: smooth }`},{prop:`onChange / onClose / onFinish / onOpenChange`,description:`监听步骤变化、关闭、完成和打开状态变化。`,type:`function`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义节点扩展 root、mask、spotlight、panel、footer、indicator 等样式。`,type:`object`,defaultValue:`-`}],be=`import { ref, useRef } from '@rue-js/rue'
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
`,we={panel:{width:`min(92vw, 21rem)`,maxHeight:`calc(100vh - 1.5rem)`},section:{maxHeight:`calc(100vh - 1.5rem)`,overflowY:`auto`,padding:`16px`},cover:{marginBottom:`12px`},meta:{color:`rgba(255,255,255,0.82)`,background:`rgba(255,255,255,0.12)`},title:{color:`#fff`,fontSize:`1rem`,lineHeight:`1.5rem`},description:{color:`rgba(255,255,255,0.88)`,marginTop:`10px`,fontSize:`14px`,lineHeight:`1.5rem`},footer:{marginTop:`14px`,paddingTop:`12px`,borderColor:`rgba(255,255,255,0.14)`},actions:{gap:`10px`},buttons:{gap:`8px`},prevButton:{minWidth:`72px`,height:`36px`,color:`#fff`,borderColor:`rgba(255,255,255,0.22)`},nextButton:{minWidth:`88px`,height:`36px`}},Te=()=>{let{tourVisible:c,current:d,tourSession:_,note:v,uploadRef:y,saveRef:E,moreRef:O,steps:k,startTour:A}=T(`useSetup:0:0`,()=>s(()=>{let e=T(`ref:1:4`,()=>w(!1)),n=T(`ref:1:5`,()=>w(0)),r=T(`ref:1:6`,()=>w(0)),i=T(`ref:1:7`,()=>w(`点击 Basic 按钮后弹出引导`)),a=T(`useRef:1:8`,()=>t()),o=T(`useRef:1:9`,()=>t()),s=T(`useRef:1:10`,()=>t());return{tourVisible:e,current:n,tourSession:r,note:i,uploadRef:a,saveRef:o,moreRef:s,steps:T(`computed:1:11`,()=>C(()=>[{target:()=>a.current??null,title:`Upload`,description:`Bring files into the workspace first.`,placement:`top`},{target:()=>o.current??null,title:`Save`,description:`Save your changes.`,placement:`top`},{target:()=>s.current??null,title:`More`,description:`Open additional actions from here.`,placement:`left`,nextButtonProps:{children:`完成引导`}}])),startTour:()=>{r.value+=1,n.value=0,e.value=!0,i.value=`正在查看 Upload`}}}));return f(t=>{let s=l(`div`,t);p(s,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]`);let C=l(`div`,s);a(s,C),p(C,`mb-6 text-[2.25rem] font-semibold tracking-tight text-base-content md:text-[2.7rem]`),a(C,S(`代码演示`));let w=l(`div`,s);a(s,w),p(w,`mb-5 flex flex-wrap items-center gap-3`);let T=l(`button`,w);a(w,T),b(T,`type`,`button`),p(T,`btn btn-primary rounded-2xl px-5`),o(T,`click`,A),a(T,S(`Basic`));let j=l(`button`,w);a(w,j),b(j,`type`,`button`),p(j,`btn btn-ghost rounded-2xl px-4`),o(j,`click`,()=>{d.value=0,c.value=!1,v.value=`基础引导已重置`}),a(j,S(`重置`));let M=l(`span`,w);a(w,M),p(M,`text-sm text-base-content/60`);let N=h(M);a(M,N),r(()=>{u(N,v.value)});let P=l(`div`,s);a(s,P),p(P,`rounded-[1.7rem] border border-base-300/70 bg-base-100/82 p-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.6)]`);let F=l(`div`,P);a(P,F),p(F,`rounded-[1.5rem] border border-base-300/70 bg-base-100 p-5`);let I=l(`div`,F);a(F,I),p(I,`mb-4 flex flex-wrap items-center justify-between gap-3`);let L=l(`div`,I);a(I,L);let R=l(`div`,L);a(L,R),p(R,`text-sm font-semibold text-base-content`),a(R,S(`Action Bar`));let z=l(`div`,L);a(L,z),p(z,`mt-1 text-sm text-base-content/55`),a(z,S(`点击 Basic 后，会依次讲解 Upload、Save 和更多操作。`));let B=l(`span`,I);a(I,B),p(B,`badge badge-outline badge-sm px-3 py-3`),a(B,S(`Code Demo`));let V=l(`div`,F);a(F,V),p(V,`flex flex-wrap items-center gap-3`);let H=l(`button`,V);a(V,H);let ee=D(H,()=>e=>{y.current=e??void 0});m(()=>{ee()}),b(H,`data-basic-tour-target`,`upload`),b(H,`type`,`button`),p(H,`btn btn-outline rounded-2xl px-6`),a(H,S(`Upload`));let U=l(`button`,V);a(V,U);let te=D(U,()=>e=>{E.current=e??void 0});m(()=>{te()}),b(U,`data-basic-tour-target`,`save`),b(U,`type`,`button`),p(U,`btn btn-primary rounded-2xl px-7`),a(U,S(`Save`));let W=l(`button`,V);a(V,W);let ne=D(W,()=>e=>{O.current=e??void 0});m(()=>{ne()}),b(W,`data-basic-tour-target`,`more`),b(W,`type`,`button`),b(W,`aria-label`,`More actions`),p(W,`btn btn-outline rounded-2xl px-5`),a(W,S(`More`));let re=n(`rue:slot:anchor`);return a(s,re),r(()=>{let t=c.value?f(()=>{let t=e(),o=n(`rue:component:anchor`);return a(t,o),r(()=>{let e=x(q,{key:`basic-tour-${_.value}-${d.value}-${c.value?`open`:`closed`}`,open:c.value,current:d.value,steps:k.get(),gap:{offset:[10,14],radius:18},onOpenChange:e=>{c.value=e,e||(d.value=0)},onChange:e=>{d.value=e,v.value=`正在查看 ${k.get()[e]?.title??`第 ${e+1} 步`}`},onClose:()=>{v.value=`基础引导已关闭`},onFinish:()=>{d.value=0,v.value=`基础引导已完成`}});i(()=>g(e,t,o))}),t}):``;i(()=>g(t,s,re))}),s})},Ee=()=>{let{open:c,current:u,tourSession:d,heroRef:h,metricsRef:_,steps:v}=T(`useSetup:0:0:dup1`,()=>s(()=>{let e=T(`ref:1:12`,()=>w(!1)),n=T(`ref:1:13`,()=>w(0)),r=T(`ref:1:14`,()=>w(0)),i=T(`useRef:1:15`,()=>t()),a=T(`useRef:1:16`,()=>t());return{open:e,current:n,tourSession:r,heroRef:i,metricsRef:a,steps:T(`computed:1:17`,()=>C(()=>[{placement:`center`,title:`欢迎来到 Rue Tour`,description:`第一步不绑定 target，会自动居中显示。适合首访说明、版本更新和整页 onboarding。`,cover:k(`div`,{className:`h-28 rounded-[1.25rem] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续看页面`}},{target:()=>i.current,title:`非模态说明更适合轻引导`,description:`这里关闭了遮罩，用户仍然可以浏览内容，不会被强行打断。`,placement:`bottomRight`},{target:()=>a.current,title:`局部强调也能单独覆盖 placement`,description:`同一套 Tour 可以混合 center 步骤与 target 步骤。`,placement:`top`,nextButtonProps:{children:`知道了`}}]))}}));return f(t=>{let s=l(`div`,t);p(s,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let y=l(`div`,s);a(s,y),p(y,`mb-4 flex flex-wrap items-center justify-between gap-3`);let C=l(`div`,y);a(y,C);let w=l(`div`,C);a(C,w),p(w,`text-sm font-semibold`),a(w,S(`欢迎页 + 非模态引导`));let T=l(`div`,C);a(C,T),p(T,`mt-1 text-sm text-base-content/60`),a(T,S(`适合把版本亮点和页面主内容穿在同一条体验线上。`));let O=l(`button`,y);a(y,O),b(O,`type`,`button`),p(O,`btn btn-outline btn-sm rounded-full`),o(O,`click`,()=>{d.value+=1,u.value=0,c.value=!0}),a(O,S(`打开欢迎引导`));let k=l(`div`,s);a(s,k);let A=D(k,()=>e=>{h.current=e??void 0});m(()=>{A()}),p(k,`rounded-[1.7rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 p-6 text-white`);let j=l(`div`,k);a(k,j),p(j,`badge badge-sm border-0 bg-white/15 text-white`),a(j,S(`Release Note`));let M=l(`div`,k);a(k,M),p(M,`mt-4 text-2xl font-semibold`),a(M,S(`Shipping cockpit for product operations`));let N=l(`div`,k);a(k,N),p(N,`mt-2 max-w-xl text-sm text-white/75`),a(N,S(`把素材、上线窗口、审批节点和回放笔记收进同一块工作区，不必在多个页面之间反复跳转。`));let P=l(`div`,s);a(s,P);let F=D(P,()=>e=>{_.current=e??void 0});m(()=>{F()}),p(P,`mt-4 grid gap-4 md:grid-cols-3`);let I=n(`rue:list:start`),L=n(`rue:list:end`);a(P,I),a(P,L);let R=new Map;r(()=>{R=E({items:[[`Launches`,`12`],[`Reviews`,`5`],[`Pending`,`2`]],getKey:(e,t)=>e[0],elements:R,parent:P,before:L,singleRoot:!0,trackIndex:!1,start:I,renderItem:(t,o,s,c,u)=>{g(f(()=>{let o=e(),s=l(`div`,o);a(o,s),r(()=>{b(s,`key`,String(t[0]))}),p(s,`rounded-[1.4rem] border border-base-300/70 bg-base-100/80 p-4`);let c=l(`div`,s);a(s,c),p(c,`text-sm text-base-content/55`);let u=n(`rue:slot:anchor`);a(c,u),r(()=>{let e=t[0];i(()=>g(e,c,u))});let d=l(`div`,s);a(s,d),p(d,`mt-2 text-3xl font-semibold`);let f=n(`rue:slot:anchor`);return a(d,f),r(()=>{let e=t[1];i(()=>g(e,d,f))}),o}),o,s)}})});let z=n(`rue:slot:anchor`);return a(s,z),r(()=>{let t=c.value?f(()=>{let t=e(),o=n(`rue:component:anchor`);return a(t,o),r(()=>{let e=x(q,{key:`welcome-tour-${d.value}-${u.value}-${c.value?`open`:`closed`}`,open:c.value,current:u.value,mask:!1,steps:v.get(),onOpenChange:e=>{c.value=e,e||(u.value=0)},onChange:e=>{u.value=e},onFinish:()=>{u.value=0}});i(()=>g(e,t,o))}),t}):``;i(()=>g(t,s,z))}),s})},De=()=>{let{open:c,current:d,tourSession:_,tapCount:v,activePlacement:y,anchorRef:O,steps:k}=T(`useSetup:0:0:dup2`,()=>s(()=>{let e=T(`ref:1:18`,()=>w(!1)),n=T(`ref:1:19`,()=>w(0)),r=T(`ref:1:20`,()=>w(0)),i=T(`ref:1:21`,()=>w(0)),a=T(`ref:1:22`,()=>w(`right`)),o=T(`useRef:1:23`,()=>t());return{open:e,current:n,tourSession:r,tapCount:i,activePlacement:a,anchorRef:o,steps:T(`computed:1:24`,()=>C(()=>[{target:()=>o.current,title:`高亮区默认仍可点击`,description:`disabledInteraction 默认为 false，所以聚焦区域内的按钮还能继续触发业务动作。`}]))}}));return f(t=>{let s=l(`div`,t);p(s,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let C=l(`div`,s);a(s,C),p(C,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=l(`div`,C);a(C,w);let T=l(`div`,w);a(w,T),p(T,`text-sm font-semibold`),a(T,S(`Placement 与高亮区实验`));let A=l(`div`,w);a(w,A),p(A,`mt-1 text-sm text-base-content/60`),a(A,S(`切换浮层方向时，目标按钮仍然可以在洞口区域被点击。`));let j=l(`button`,C);a(C,j),b(j,`type`,`button`),p(j,`btn btn-outline btn-sm rounded-full`),o(j,`click`,()=>{_.value+=1,d.value=0,c.value=!0}),a(j,S(`打开定位实验`));let M=l(`div`,s);a(s,M),p(M,`mb-4 flex flex-wrap gap-2`);let N=n(`rue:list:start`),P=n(`rue:list:end`);a(M,N),a(M,P);let F=new Map;r(()=>{F=E({items:ve||[],getKey:(e,t)=>e,elements:F,parent:M,before:P,singleRoot:!0,trackIndex:!1,start:N,renderItem:(t,n,i,s,m)=>{g(f(()=>{let n=e(),i=l(`button`,n);a(n,i),r(()=>{b(i,`key`,String(t))}),b(i,`type`,`button`),r(()=>{p(i,`btn btn-sm rounded-full ${y.value===t?`btn-primary`:`btn-outline`}`)}),o(i,`click`,()=>{y.value=t,_.value+=1,d.value=0,c.value=!0});let s=h(i);return a(i,s),r(()=>{u(s,t)}),n}),n,i)}})});let I=l(`div`,s);a(s,I),p(I,`grid min-h-[18rem] place-items-center rounded-[1.7rem] border border-dashed border-base-300/80 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_50%)] p-6`);let L=l(`button`,I);a(I,L);let R=D(L,()=>e=>{O.current=e??void 0});m(()=>{R()}),b(L,`type`,`button`),p(L,`btn btn-primary rounded-full px-6`),o(L,`click`,()=>{v.value+=1}),a(L,S(`已点击 `));let z=h(L);a(L,z),r(()=>{u(z,v.value)}),a(L,S(` 次`));let B=n(`rue:slot:anchor`);return a(s,B),r(()=>{let t=c.value?f(()=>{let t=e(),o=n(`rue:component:anchor`);return a(t,o),r(()=>{let e=x(q,{key:`placement-tour-${_.value}-${y.value}-${d.value}`,open:c.value,current:d.value,placement:y.value,gap:{offset:[12,16],radius:22},mask:{color:`rgba(15, 23, 42, 0.38)`},steps:k.get(),onOpenChange:e=>{c.value=e,e||(d.value=0)},onChange:e=>{d.value=e}});i(()=>g(e,t,o))}),t}):``;i(()=>g(t,s,B))}),s})},Oe=()=>{let{open:c,current:u,tourSession:d,summaryRef:h,timelineRef:_,approvalRef:v,steps:y}=T(`useSetup:0:0:dup3`,()=>s(()=>{let e=T(`ref:1:25`,()=>w(!1)),n=T(`ref:1:26`,()=>w(0)),r=T(`ref:1:27`,()=>w(0)),i=T(`useRef:1:28`,()=>t()),a=T(`useRef:1:29`,()=>t()),o=T(`useRef:1:30`,()=>t());return{open:e,current:n,tourSession:r,summaryRef:i,timelineRef:a,approvalRef:o,steps:T(`computed:1:31`,()=>C(()=>[{target:()=>i.current,title:`把封面和主题一起做强`,description:`默认样式延续 Rue 的轻卡片语言，但你也可以切到 primary，让产品引导更像一个任务流。`,placement:`bottomLeft`,cover:k(`div`,{className:`h-20 rounded-[1.25rem] bg-gradient-to-br from-cyan-300 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续`}},{target:()=>a.current,title:`中间步骤适合解释过程`,description:`当你要穿过多个版块时，指示器和 actionsRender 可以直接融入业务语境。`,placement:`topLeft`,prevButtonProps:{children:`返回`},nextButtonProps:{children:`看审批`}},{target:()=>o.current,title:`最后把业务动作接住`,description:`把完成按钮改成提交、发布、同步都可以，不需要额外封装。`,placement:`left`,nextButtonProps:{children:`提交并结束`}}]))}}));return f(t=>{let s=l(`div`,t);p(s,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let C=l(`div`,s);a(s,C),p(C,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=l(`div`,C);a(C,w);let T=l(`div`,w);a(w,T),p(T,`text-sm font-semibold`),a(T,S(`自定义 indicator 与 actions`));let A=l(`div`,w);a(w,A),p(A,`mt-1 text-sm text-base-content/60`),a(A,S(`这套写法更接近常见分步引导的心智，但视觉和布局还是 Rue 自己的。`));let j=l(`button`,C);a(C,j),b(j,`type`,`button`),p(j,`btn btn-outline btn-sm rounded-full`),o(j,`click`,()=>{d.value+=1,u.value=0,c.value=!0}),a(j,S(`启动主视觉引导`));let M=l(`div`,s);a(s,M);let N=D(M,()=>e=>{h.current=e??void 0});m(()=>{N()}),p(M,`rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let P=l(`div`,M);a(M,P),p(P,`flex flex-wrap items-center justify-between gap-3`);let F=l(`div`,P);a(P,F);let I=l(`div`,F);a(F,I),p(I,`badge badge-outline badge-sm`),a(I,S(`Launch Summary`));let L=l(`div`,F);a(F,L),p(L,`mt-3 text-xl font-semibold`),a(L,S(`One surface for launch, approval and playback`));let R=l(`div`,F);a(F,R),p(R,`mt-2 max-w-xl text-sm text-base-content/60`),a(R,S(`用一个页面完成素材汇总、审批流转、上线窗口对齐和上线后的回放，不再分散在多个工具里。`));let z=l(`div`,P);a(P,z),p(z,`grid h-16 w-16 place-items-center rounded-3xl bg-primary/10 text-primary`);let B=l(`svg`,z);a(z,B),b(B,`viewBox`,`0 0 24 24`),b(B,`fill`,`none`),b(B,`stroke`,`currentColor`),b(B,`strokeWidth`,`1.8`),p(B,`size-8`);let V=l(`path`,B);a(B,V),b(V,`strokeLinecap`,`round`),b(V,`strokeLinejoin`,`round`),b(V,`d`,`m12 3 2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8L12 3Z`);let H=l(`div`,s);a(s,H);let ee=D(H,()=>e=>{_.current=e??void 0});m(()=>{ee()}),p(H,`mt-4 rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let U=l(`div`,H);a(H,U),p(U,`grid gap-3 md:grid-cols-3`);let te=n(`rue:list:start`),W=n(`rue:list:end`);a(U,te),a(U,W);let ne=new Map;r(()=>{ne=E({items:[[`Brief`,`完成背景与目标归纳`],[`Review`,`跨团队确认视觉与文案`],[`Ship`,`统一 CTA 与发布时间窗`]],getKey:(e,t)=>e[0],elements:ne,parent:U,before:W,singleRoot:!0,trackIndex:!1,start:te,renderItem:(t,o,s,c,u)=>{g(f(()=>{let o=e(),s=l(`div`,o);a(o,s),r(()=>{b(s,`key`,String(t[0]))}),p(s,`rounded-[1.2rem] bg-base-200/65 px-4 py-4`);let c=l(`div`,s);a(s,c),p(c,`text-sm font-semibold`);let u=n(`rue:slot:anchor`);a(c,u),r(()=>{let e=t[0];i(()=>g(e,c,u))});let d=l(`div`,s);a(s,d),p(d,`mt-2 text-sm text-base-content/60`);let f=n(`rue:slot:anchor`);return a(d,f),r(()=>{let e=t[1];i(()=>g(e,d,f))}),o}),o,s)}})});let re=l(`div`,s);a(s,re),p(re,`mt-4 flex justify-end`);let G=l(`button`,re);a(re,G);let K=D(G,()=>e=>{v.current=e??void 0});m(()=>{K()}),b(G,`type`,`button`),p(G,`btn btn-primary rounded-full px-5`),a(G,S(`提交审批`));let ie=n(`rue:slot:anchor`);return a(s,ie),r(()=>{let t=c.value?f(()=>{let t=e(),o=n(`rue:component:anchor`);return a(t,o),r(()=>{let e=x(q,{key:`custom-tour-${d.value}-${u.value}-${c.value?`open`:`closed`}`,open:c.value,current:u.value,type:`primary`,styles:we,steps:y.get(),indicatorsRender:(e,t)=>O(`div`,{className:`flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/80`,children:[k(`span`,{children:`phase`}),k(`span`,{className:`rounded-full border border-white/20 px-2 py-1 text-white`,children:e+1}),k(`span`,{children:`/`}),k(`span`,{children:t})]}),actionsRender:(e,t)=>O(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[O(`div`,{className:`text-xs uppercase tracking-[0.24em] text-white/70`,children:[`launch guide · step `,t.current+1]}),e]}),onOpenChange:e=>{c.value=e,e||(u.value=0)},onChange:e=>{u.value=e},onFinish:()=>{u.value=0}});i(()=>g(e,t,o))}),t}):``;i(()=>g(t,s,ie))}),s})},ke=()=>f(t=>{let o=e(),s=n(`rue:component:anchor`);return a(o,s),g(x(j,{children:f(()=>{let t=e(),o=l(`div`,t);a(t,o),p(o,`max-w-none prose prose-sm md:prose-base`);let s=l(`h1`,o);a(o,s),a(s,S(`Tour 漫游引导`));let c=l(`p`,o);a(o,c),p(c,`text-sm mt-3 mb-3`),a(c,S(`Tour 用分步浮层把用户带过关键入口、局部强调和最终动作。Rue 的实现参考了成熟组件库的能力模型，但视觉仍然保持自己的 card、badge 和 button 语言，不直接照搬现成面板样式。`));let u=l(`p`,o);a(o,u),p(u,`text-sm mt-3 mb-3`),a(u,S(`这次补齐的不只是静态外观，而是完整执行逻辑：围绕真实 DOM target 做高亮、自动定位、切步滚动、非模态展示，以及自定义 indicator 和底部 actions。`));let d=l(`h2`,o);a(o,d),a(d,S(`何时使用`));let f=l(`ul`,o);a(o,f);let m=l(`li`,f);a(f,m),a(m,S(`需要把新用户逐步带过核心入口、关键按钮或首次配置流程。`));let h=l(`li`,f);a(f,h),a(h,S(`需要在复杂页面里突出某个局部区域，并配合文案解释当前操作目的。`));let _=l(`li`,f);a(f,_),a(_,S(`需要把产品说明、轻 onboarding 和最终业务动作串成一条连续体验。`));let v=n(`rue:component:anchor`);a(t,v),r(()=>{let e=x(M,{title:`基础引导`,summary:`点击 Basic 后，从 Upload、Save 到更多操作依次弹出讲解。`,tab:me,preview:Te,code:be});i(()=>g(e,t,v))});let y=n(`rue:component:anchor`);a(t,y),r(()=>{let e=x(M,{title:`欢迎页与非模态`,summary:`展示没有 target 的中心步骤，以及 mask=false 时的轻量引导方式。`,tab:he,preview:Ee,code:xe});i(()=>g(e,t,y))});let b=n(`rue:component:anchor`);a(t,b),r(()=>{let e=x(M,{title:`Placement 与交互洞口`,summary:`切换 top/right/bottom/left，并验证高亮区默认仍可继续触发目标元素。`,tab:ge,preview:De,code:Se});i(()=>g(e,t,b))});let C=n(`rue:component:anchor`);a(t,C),r(()=>{let e=x(M,{title:`自定义指示器与动作区`,summary:`通过 primary 主题、cover、indicatorsRender 和 actionsRender 把引导做成更完整的任务流。`,tab:_e,preview:Oe,code:Ce});i(()=>g(e,t,C))});let w=l(`div`,t);a(t,w),p(w,`component-preview not-prose text-base-content my-6 lg:my-12`);let T=l(`h2`,w);a(w,T),p(T,`component-preview-title mt-2 mb-3 text-lg font-semibold`),a(T,S(`# API`));let E=n(`rue:component:anchor`);return a(w,E),r(()=>{let e=x(pe,{rows:ye});i(()=>g(e,w,E))}),t})}),o,s),o});export{ke as default};
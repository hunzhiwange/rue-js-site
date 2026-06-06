import{$ as e,B as t,Ct as n,Dt as r,Et as i,G as a,H as o,K as s,U as c,W as l,Z as u,_ as d,a as f,at as p,ht as m,i as h,l as g,r as _,rt as v,s as y,t as b,wt as x,yt as S,z as C}from"./vapor-runtime-C1rlwc61.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as D}from"./Teleport-C_QtYL7W.js";import{n as O,t as k}from"./src-BLzF0BqW.js";import{n as A}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as j}from"./PreviewBlock-CfdDuiov.js";var M={next:`下一步`,previous:`上一步`,finish:`完成`,close:`关闭引导`},N=16,P=18,F=(...e)=>e.filter(Boolean).join(` `),I=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},L=e=>`${e}px`,R=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=F(e?.[r],t?.[r]);i&&(n[r]=i)}),n},z=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=I(e?.[r],t?.[r]);Object.keys(i).length>0&&(n[r]=i)}),n},B=(e,t,n)=>n<t?t:Math.min(Math.max(e,t),n),V=e=>typeof e==`function`?e():e,H=e=>typeof e==`function`?e()??null:e??null,ee=e=>{let t=e?.offset??8;if(Array.isArray(t))return{horizontal:Math.max(0,t[0]??0),vertical:Math.max(0,t[1]??t[0]??0)};let n=Math.max(0,t);return{horizontal:n,vertical:n}},U=e=>Math.max(0,e?.radius??18),te=e=>e===!1?null:e&&typeof e==`object`?{color:e.color??`rgba(15, 23, 42, 0.46)`,style:e.style}:{color:`rgba(15, 23, 42, 0.46)`,style:void 0},W=e=>e!==!1,ne=e=>typeof e==`object`?e.pointAtCenter!==!1:!0,G=e=>e??`bottom`,K=e=>e===`center`?`center`:e.startsWith(`top`)?`top`:e.startsWith(`bottom`)?`bottom`:e.startsWith(`left`)?`left`:`right`,q=e=>{switch(e){case`top`:return`bottom`;case`topLeft`:return`bottomLeft`;case`topRight`:return`bottomRight`;case`bottom`:return`top`;case`bottomLeft`:return`topLeft`;case`bottomRight`:return`topRight`;case`left`:return`right`;case`leftTop`:return`rightTop`;case`leftBottom`:return`rightBottom`;case`right`:return`left`;case`rightTop`:return`leftTop`;case`rightBottom`:return`leftBottom`;default:return`center`}},re=()=>typeof window>`u`||typeof document>`u`?{width:1440,height:900}:{width:document.documentElement.clientWidth||window.innerWidth||1440,height:document.documentElement.clientHeight||window.innerHeight||900},ie=(e,t)=>{if(!e)return null;let n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let r=re(),i=ee(t),a=U(t),o=B(n.left-i.horizontal,4,r.width-4),s=B(n.top-i.vertical,4,r.height-4),c=B(n.right+i.horizontal,4,r.width-4),l=B(n.bottom+i.vertical,4,r.height-4),u=Math.max(0,c-o),d=Math.max(0,l-s);return{left:o,top:s,width:u,height:d,radius:a,centerX:o+u/2,centerY:s+d/2,right:c,bottom:l}},ae=(e,t,n,r)=>{switch(e){case`top`:return{left:t.centerX-n/2,top:t.top-r-P};case`topLeft`:return{left:t.left,top:t.top-r-P};case`topRight`:return{left:t.right-n,top:t.top-r-P};case`bottom`:return{left:t.centerX-n/2,top:t.bottom+P};case`bottomLeft`:return{left:t.left,top:t.bottom+P};case`bottomRight`:return{left:t.right-n,top:t.bottom+P};case`left`:return{left:t.left-n-P,top:t.centerY-r/2};case`leftTop`:return{left:t.left-n-P,top:t.top};case`leftBottom`:return{left:t.left-n-P,top:t.bottom-r};case`right`:return{left:t.right+P,top:t.centerY-r/2};case`rightTop`:return{left:t.right+P,top:t.top};case`rightBottom`:return{left:t.right+P,top:t.bottom-r};default:return{left:t.centerX-n/2,top:t.bottom+P}}},oe=(e,t,n,r,i)=>{switch(K(e)){case`top`:return t.top<N;case`bottom`:return t.top+r>i.height-N;case`left`:return t.left<N;case`right`:return t.left+n>i.width-N;default:return!1}},se=(e,t,n,r)=>{let i=re();if(!t||e===`center`)return{placement:`center`,left:B((i.width-n)/2,N,i.width-n-N),top:B((i.height-r)/2,N,i.height-r-N)};let a=e,o=ae(a,t,n,r);return oe(a,o,n,r,i)&&(a=q(a),o=ae(a,t,n,r)),{placement:a,left:B(o.left,N,i.width-n-N),top:B(o.top,N,i.height-r-N)}},ce=(e,t,n,r,i,a,o)=>{if(!t||e===`center`)return null;let s=B(t.centerX-n-9,24,i-24),c=B(t.centerY-r-9,24,a-24),l=o?void 0:28;switch(K(e)){case`top`:return{left:L(l??s),bottom:`-9px`};case`bottom`:return{left:L(l??s),top:`-9px`};case`left`:return{top:L(l??c),right:`-9px`};case`right`:return{top:L(l??c),left:`-9px`};default:return null}},le=()=>g(n=>{let r=l(`svg`,n);u(r,`viewBox`,`0 0 24 24`),u(r,`fill`,`none`),u(r,`stroke`,`currentColor`),u(r,`strokeWidth`,`1.9`),e(r,`size-4`);let i=l(`path`,r);return t(r,i),u(i,`strokeLinecap`,`round`),u(i,`strokeLinejoin`,`round`),u(i,`d`,`M6 6l12 12M18 6 6 18`),r}),ue=()=>g(n=>{let r=l(`svg`,n);u(r,`viewBox`,`0 0 24 24`),u(r,`fill`,`none`),u(r,`stroke`,`currentColor`),u(r,`strokeWidth`,`1.8`),e(r,`size-4`);let i=l(`path`,r);t(r,i),u(i,`strokeLinecap`,`round`),u(i,`strokeLinejoin`,`round`),u(i,`d`,`m12 3 1.7 4.2L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.8L12 3Z`);let a=l(`path`,r);return t(r,a),u(a,`strokeLinecap`,`round`),u(a,`strokeLinejoin`,`round`),u(a,`d`,`M5 19h.01M12 21h.01M19 19h.01`),r}),de=a=>{let{steps:s,defaultOpen:p,defaultCurrent:_,placement:C,mask:T,gap:E,arrow:A,type:j,closeIcon:N,disabledInteraction:P,keyboard:ee,zIndex:U,scrollIntoViewOptions:K,getPopupContainer:q,locale:re,indicatorsRender:ae,actionsRender:oe,className:de,style:fe,classNames:pe,styles:me,onChange:he,onClose:ge,onFinish:_e,onOpenChange:ve,rest:ye,panelRef:be,rafIdRef:xe,renderVersion:Se,isControlledOpen:Ce,isControlledCurrent:we,uncontrolledOpen:Te,uncontrolledCurrent:Ee,lastDefaultOpen:De,lastDefaultCurrent:Oe,currentOpenRef:ke,currentIndexRef:Ae,panelStyleRef:je,arrowStyleRef:Me,spotlightRef:Ne,placementRef:Pe,mergedLocale:Fe,getTotal:Ie,normalizeCurrentValue:Le,getMergedOpen:Re,getMergedCurrent:ze,getCurrentStep:Be,requestRender:Ve,requestOpenChange:He,requestCurrentChange:Ue,scheduleLayoutSync:We,syncScrollIntoView:Ge,handleClose:Ke,handleMaskClick:qe,handleNext:Je,handlePrev:Ye,total:Xe,currentIndex:Ze,step:J,mergedOpen:Qe}=w(`useSetup:0:0`,()=>x(()=>{let{steps:e=[],defaultOpen:t=!1,defaultCurrent:r=0,placement:o=`bottom`,mask:s=!0,gap:c,arrow:l=!0,type:u=`default`,closeIcon:d,disabledInteraction:p=!1,keyboard:g=!0,zIndex:_=1400,scrollIntoViewOptions:v={block:`center`,inline:`center`,behavior:`smooth`},getPopupContainer:y,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:T,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,...N}=a,P=w(`useRef:1:0`,()=>n()),F=w(`useRef:1:1`,()=>n()),I=w(`ref:1:2`,()=>m(0)),R=typeof a.open==`boolean`,z=typeof a.current==`number`,V=w(`ref:1:3`,()=>m(t)),ee=w(`ref:1:4`,()=>m(r)),U=w(`ref:1:5`,()=>m(!!t)),te=w(`ref:1:6`,()=>m(Math.max(0,Math.floor(r)))),K=w(`ref:1:7`,()=>m(R?!!a.open:t)),q=w(`ref:1:8`,()=>m(z?Math.max(0,Math.floor(a.current)):Math.max(0,Math.floor(r)))),re=w(`ref:1:9`,()=>m({visibility:`hidden`,opacity:0})),ae=w(`ref:1:10`,()=>m(null)),oe=w(`ref:1:11`,()=>m(null)),le=w(`ref:1:12`,()=>m(G(o))),ue={...M,...b},de=()=>e.length,fe=e=>{let t=de();return t<=0?0:B(Math.floor(e),0,t-1)},pe=()=>R?!!a.open:K.value,me=()=>fe(z?a.current:q.value),he=()=>e[me()],ge=()=>{I.value+=1},_e=e=>{K.value=e,R||(V.value=e),ge(),j&&j(e)},ve=e=>{let t=de();if(t<=0)return;let n=B(e,0,t-1);q.value=n,z||(ee.value=n),ge(),O&&O(n)},ye=()=>{typeof window>`u`||(F.current!=null&&window.cancelAnimationFrame(F.current),F.current=window.requestAnimationFrame(()=>{let e=P.current??document.querySelector(`[data-rue-tour-panel="true"]`),t=he();if(!pe()||!e||!t){re.value={visibility:`hidden`,opacity:0},oe.value=null,ae.value=null,ge();return}let n=ie(H(t.target),c),r=e.getBoundingClientRect(),i=se(G(t.placement??o),n,Math.max(r.width,320),Math.max(r.height,1)),a=W(t.arrow??l),s=ne(t.arrow??l);oe.value=n,le.value=i.placement,re.value={left:L(i.left),top:L(i.top),opacity:1,visibility:`visible`},ae.value=a?ce(i.placement,n,i.left,i.top,r.width,r.height,s):null,ge()}))},be=()=>{let e=he();if(!pe()||!e||typeof window>`u`)return;let t=H(e.target),n=e.scrollIntoViewOptions??v;!t||n===!1||typeof t.scrollIntoView!=`function`||window.requestAnimationFrame(()=>{t.scrollIntoView(n===!0?{block:`center`,inline:`center`,behavior:`smooth`}:n)})},xe=()=>{he()?.onClose?.(),_e(!1),k&&k()},Se=()=>{xe()},Ce=()=>{let e=he();if(!e)return;e.nextButtonProps?.onClick?.();let t=me();if(t>=de()-1){A&&A(),_e(!1);return}ve(t+1)},we=()=>{let e=he();e&&(e.prevButtonProps?.onClick?.(),ve(me()-1))};h(()=>{if(typeof window>`u`)return;let e=e=>{if(!(!pe()||!g)){if(e.key===`Escape`){e.preventDefault(),xe();return}if(e.key===`ArrowRight`){e.preventDefault(),Ce();return}e.key===`ArrowLeft`&&(e.preventDefault(),we())}},t=()=>{ye()};window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),window.addEventListener(`keydown`,e),be(),ye(),f(()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`keydown`,e),F.current!=null&&window.cancelAnimationFrame(F.current)})}),w(`watch:1:13`,()=>i(()=>a.open,e=>{typeof e==`boolean`&&(K.value=e)},{immediate:!0})),w(`watch:1:14`,()=>i(()=>a.current,e=>{typeof e==`number`&&(q.value=fe(e))},{immediate:!0})),w(`watch:1:15`,()=>i(()=>e.length,()=>{q.value=fe(q.value)},{immediate:!0})),w(`watch:1:16`,()=>i(()=>[pe(),me(),e.length,o,c?.radius??-1,Array.isArray(c?.offset)?`${c?.offset[0]??0}:${c?.offset[1]??0}`:c?.offset??-1],()=>{be(),ye()},{immediate:!0})),w(`watch:1:17`,()=>i(()=>t,e=>{let t=!!e;!R&&t!==U.value&&(U.value=t,V.value=t,K.value=t)})),w(`watch:1:18`,()=>i(()=>r,e=>{let t=Math.max(0,Math.floor(e));!z&&t!==te.value&&(te.value=t,ee.value=t,q.value=fe(t))}));let Te=e.length,Ee=(I.value,fe(z?a.current:q.value));return{steps:e,defaultOpen:t,defaultCurrent:r,placement:o,mask:s,gap:c,arrow:l,type:u,closeIcon:d,disabledInteraction:p,keyboard:g,zIndex:_,scrollIntoViewOptions:v,getPopupContainer:y,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:T,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,rest:N,panelRef:P,rafIdRef:F,renderVersion:I,isControlledOpen:R,isControlledCurrent:z,uncontrolledOpen:V,uncontrolledCurrent:ee,lastDefaultOpen:U,lastDefaultCurrent:te,currentOpenRef:K,currentIndexRef:q,panelStyleRef:re,arrowStyleRef:ae,spotlightRef:oe,placementRef:le,mergedLocale:ue,getTotal:de,normalizeCurrentValue:fe,getMergedOpen:pe,getMergedCurrent:me,getCurrentStep:he,requestRender:ge,requestOpenChange:_e,requestCurrentChange:ve,scheduleLayoutSync:ye,syncScrollIntoView:be,handleClose:xe,handleMaskClick:Se,handleNext:Ce,handlePrev:we,total:Te,currentIndex:Ee,step:Te>0?e[Ee]:void 0,mergedOpen:(I.value,R?!!a.open:K.value)}}));if(!Qe||!J||Xe===0)return null;let Y=te(J.mask??T),X=J.type??j,$e={...Fe,...J.locale},Z=R(pe,J.classNames),Q=z(me,J.styles),et=ie(H(J.target),E),tt=se(G(J.placement??C),et,368,225),nt=je.value.visibility===`visible`?je.value:{left:L(tt.left),top:L(tt.top),opacity:1,visibility:`visible`},rt=je.value.visibility===`visible`?Pe.value:tt.placement,it=Ne.value,$=it&&it.width>0&&it.height>0?it:et,at=!!$,ot=J.indicatorsRender??ae,st=J.actionsRender??oe,ct=J.closeIcon??N??k(le,{}),lt=O(`div`,{...ye,className:F(`pointer-events-none fixed inset-0`,Z.root,de),style:I(Q.root,fe,{zIndex:U}),"data-rue-tour":`true`,"data-rue-tour-placement":rt,"data-rue-tour-version":String(Se.value),"data-rue-tour-current":String(we?a.current:Ae.value),"data-rue-tour-total":String(Xe),"data-rue-tour-open":String(Ce?!!a.open:ke.value),children:[Y?k(d,{children:at?O(d,{children:[k(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed inset-x-0 top-0`,Z.mask),style:I(Q.mask,Y.style,{height:L($.top),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`top`}),k(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed`,Z.mask),style:I(Q.mask,Y.style,{left:`0px`,top:L($.top),width:L($.left),height:L($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`left`}),k(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed`,Z.mask),style:I(Q.mask,Y.style,{left:L($.right),top:L($.top),width:`calc(100vw - ${$.right}px)`,height:L($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`right`}),k(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed inset-x-0 bottom-0`,Z.mask),style:I(Q.mask,Y.style,{top:L($.bottom),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`bottom`}),k(`div`,{"aria-hidden":`true`,className:F(`pointer-events-none fixed border border-primary/25 bg-primary/10 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_20px_60px_-36px_rgba(59,130,246,0.75)] backdrop-blur-[1px]`,Z.spotlight),style:I(Q.spotlight,{left:L($.left),top:L($.top),width:L($.width),height:L($.height),borderRadius:L($.radius)}),"data-rue-tour-spotlight":`true`}),P?k(`div`,{"aria-hidden":`true`,className:`pointer-events-auto fixed`,style:{left:L($.left),top:L($.top),width:L($.width),height:L($.height),borderRadius:L($.radius)},"data-rue-tour-blocker":`true`}):null]}):k(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed inset-0`,Z.mask),style:I(Q.mask,Y.style,{background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`full`})}):null,O(`div`,{ref:e=>{be.current=e??void 0,e&&We()},role:`dialog`,"aria-modal":Y?`true`:`false`,className:F(`pointer-events-auto fixed w-[min(92vw,23rem)] rounded-[14px] border px-0 py-0 transition duration-200 ease-out md:w-[23rem]`,X===`primary`?`border-primary/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.98),rgba(8,78,119,0.96))] text-primary-content shadow-[0_28px_90px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl`:`border-black/[0.06] bg-white text-[#262626] shadow-[0_12px_32px_rgba(0,0,0,0.18),0_3px_10px_rgba(0,0,0,0.12)]`,Z.panel,J.className),style:I(Q.panel,J.style,nt),"data-rue-tour-panel":`true`,children:[Me.value?k(`span`,{"aria-hidden":`true`,className:F(`absolute size-[14px] rotate-45 border`,X===`primary`?`border-primary/20 bg-sky-900 shadow-[8px_8px_18px_-14px_rgba(15,23,42,0.75)]`:`border-black/[0.06] bg-white shadow-[8px_8px_18px_-14px_rgba(0,0,0,0.28)]`,Z.arrow),style:I(Q.arrow,Me.value),"data-rue-tour-arrow":`true`}):null,O(`div`,{className:F(`relative px-6 pb-5 pt-5`,Z.section),style:Q.section,"data-rue-tour-section":`true`,children:[k(`button`,{type:`button`,"aria-label":String($e.close),className:F(`absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full transition`,X===`primary`?`text-primary-content/80 hover:bg-white/10 hover:text-primary-content`:`text-black/35 hover:bg-black/[0.04] hover:text-black/60`,Z.close),style:Q.close,onClick:Ke,"data-rue-tour-close":`true`,children:ct}),J.cover?k(`div`,{className:F(`mb-5 overflow-hidden rounded-[12px]`,Z.cover),style:Q.cover,"data-rue-tour-cover":`true`,children:J.cover}):null,O(`div`,{className:F(`pr-11`,Z.body),style:Q.body,"data-rue-tour-body":`true`,children:[O(`div`,{className:F(`mb-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium`,X===`primary`?`bg-white/10 text-primary-content/70`:`border border-black/[0.06] bg-[#fafafa] text-[#8c8c8c]`,Z.meta),style:Q.meta,"data-rue-tour-meta":`true`,children:[k(ue,{}),k(`span`,{children:`Tour`}),O(`span`,{className:X===`primary`?`text-primary-content/50`:`text-base-content/40`,children:[String(Ze+1).padStart(2,`0`),` / `,String(Xe).padStart(2,`0`)]})]}),k(`div`,{className:F(``,Z.header),style:Q.header,"data-rue-tour-header":`true`,children:J.title?k(`div`,{className:F(`text-[1.08rem] font-semibold leading-7 tracking-[0.01em]`,Z.title),style:Q.title,"data-rue-tour-title":`true`,children:J.title}):null}),J.description?k(`div`,{className:F(`mt-3 text-[15px] leading-7`,X===`primary`?`text-primary-content/80`:`text-[#595959]`,Z.description),style:Q.description,"data-rue-tour-description":`true`,children:J.description}):null]}),(()=>{let t=ot?ot(Ze,Xe):k(`div`,{className:F(`flex flex-wrap items-center gap-2.5`,Z.indicators),style:Q.indicators,"data-rue-tour-indicators":`true`,children:Array.from({length:Xe}).map((t,n)=>g(t=>{let i=l(`span`,t);return r(()=>{u(i,`key`,String(`indicator-${n}`))}),r(()=>{e(i,String(F(`block size-2.5 rounded-full transition-all duration-200`,n===Ze?X===`primary`?`bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)]`:`bg-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.14)]`:X===`primary`?`bg-white/30`:`bg-black/12`,Z.indicator)))}),r(()=>{let e=Q.indicator;v(i,e)}),r(()=>{u(i,`data-rue-tour-indicator`,String(n===Ze?`active`:`inactive`))}),r(()=>{u(i,`data-rue-tour-indicator-index`,String(String(n)))}),i}))}),n=Ze===0||J.prevButtonProps?.disabled,i=!!J.nextButtonProps?.disabled,a=O(`div`,{className:F(`flex flex-wrap items-center justify-between gap-3`,Z.actions),style:Q.actions,"data-rue-tour-actions":`true`,children:[t,O(`div`,{className:F(`flex items-center gap-2.5`,Z.buttons),style:Q.buttons,"data-rue-tour-buttons":`true`,children:[k(`button`,{type:`button`,className:F(`inline-flex h-10 min-w-[84px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-white/18 bg-transparent text-primary-content/78 hover:bg-white/10 hover:text-primary-content disabled:border-white/10 disabled:text-white/28`:`border-black/[0.08] bg-white text-[#595959] hover:border-black/[0.12] hover:bg-[#fafafa] disabled:border-black/[0.06] disabled:bg-[#fafafa] disabled:text-black/25`,Z.prevButton,J.prevButtonProps?.className),style:I(Q.prevButton,J.prevButtonProps?.style),disabled:n,onClick:Ye,"data-rue-tour-prev":`true`,children:J.prevButtonProps?.children??$e.previous}),k(`button`,{type:`button`,className:F(`inline-flex h-10 min-w-[96px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-0 bg-white text-sky-900 shadow-[0_2px_0_rgba(255,255,255,0.08)] hover:bg-sky-50 disabled:bg-white/40 disabled:text-sky-950/40`:`border-[#1677ff] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.12)] hover:border-[#4096ff] hover:bg-[#4096ff] disabled:border-[#91caff] disabled:bg-[#91caff]`,Z.nextButton,J.nextButtonProps?.className),style:I(Q.nextButton,J.nextButtonProps?.style),disabled:i,onClick:Je,"data-rue-tour-next":Ze===Xe-1?`finish`:`next`,children:J.nextButtonProps?.children??(Ze===Xe-1?$e.finish:$e.next)})]})]}),o=st?st(a,{current:Ze,total:Xe}):a;return o?k(`div`,{className:F(`mt-5 border-t pt-4`,X===`primary`?`border-white/10`:`border-black/[0.06]`,Z.footer),style:Q.footer,"data-rue-tour-footer":`true`,children:o}):null})()]})]})]}),ut=V(q);return ut===!1||ut==null?lt:g(e=>{let n=c(),i=o(`rue:component:anchor`);return t(n,i),r(()=>{let e=b(D,{to:ut,children:lt});S(()=>y(e,n,i))}),n})},fe=n=>g(i=>{let s=l(`div`,i);e(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=l(`table`,s);t(s,d),e(d,`table table-zebra`);let f=l(`thead`,d);t(d,f);let p=l(`tr`,f);t(f,p);let m=l(`th`,p);t(p,m),t(m,a(`属性`));let h=l(`th`,p);t(p,h),t(h,a(`说明`));let _=l(`th`,p);t(p,_),t(_,a(`类型`));let v=l(`th`,p);t(p,v),t(v,a(`默认值`));let b=l(`tbody`,d);t(d,b);let x=o(`rue:list:start`),C=o(`rue:list:end`);t(b,x),t(b,C);let w=new Map;return r(()=>{w=T({items:n.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:x,renderItem:(e,n,i,a,s)=>{y(g(()=>{let n=c(),i=l(`tr`,n);t(n,i),r(()=>{u(i,`key`,String(e.prop))});let a=l(`td`,i);t(i,a);let s=l(`code`,a);t(a,s);let d=o(`rue:slot:anchor`);t(s,d),r(()=>{let t=e.prop;S(()=>y(t,s,d))});let f=l(`td`,i);t(i,f);let p=o(`rue:slot:anchor`);t(f,p),r(()=>{let t=e.description;S(()=>y(t,f,p))});let m=l(`td`,i);t(i,m);let h=l(`code`,m);t(m,h);let g=o(`rue:slot:anchor`);t(h,g),r(()=>{let t=e.type;S(()=>y(t,h,g))});let _=l(`td`,i);t(i,_);let v=l(`code`,_);t(_,v);let b=o(`rue:slot:anchor`);return t(v,b),r(()=>{let t=e.defaultValue;S(()=>y(t,v,b))}),n}),n,i)}})}),s}),pe=w(`ref:1:0`,()=>m(`preview`)),me=w(`ref:1:1`,()=>m(`preview`)),he=w(`ref:1:2`,()=>m(`preview`)),ge=w(`ref:1:3`,()=>m(`preview`)),_e=[`top`,`right`,`bottom`,`left`],ve=[{prop:`steps`,description:`引导步骤数组，每步可独立配置 target、placement、mask、cover 与按钮文案。`,type:`TourStepProps[]`,defaultValue:`[]`},{prop:`open / defaultOpen`,description:`受控或非受控地打开引导浮层。`,type:`boolean`,defaultValue:`false`},{prop:`current / defaultCurrent`,description:`受控或非受控地指定当前步骤索引。`,type:`number`,defaultValue:`0`},{prop:`placement`,description:`全局浮层位置，单步可继续覆盖。`,type:`TourPlacement`,defaultValue:`bottom`},{prop:`mask / disabledInteraction`,description:`控制遮罩是否启用，以及高亮区是否允许继续交互。`,type:`boolean | { color?: string; style?: object } / boolean`,defaultValue:`true / false`},{prop:`gap`,description:`调整高亮区与目标的间距和圆角，适合按钮、卡片、输入框等不同密度场景。`,type:`{ offset?: number | [number, number]; radius?: number }`,defaultValue:`{ offset: 8, radius: 18 }`},{prop:`arrow / closeIcon / type`,description:`配置箭头、关闭按钮与主视觉主题。`,type:`boolean | object / any / default | primary`,defaultValue:`true / x / default`},{prop:`indicatorsRender / actionsRender`,description:`自定义底部步骤指示器与整体操作区。`,type:`(current, total) => any / (originNode, info) => any`,defaultValue:`-`},{prop:`scrollIntoViewOptions`,description:`步骤切换时自动把目标滚动进视口，可关闭或传入原生配置。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`{ block: center, inline: center, behavior: smooth }`},{prop:`onChange / onClose / onFinish / onOpenChange`,description:`监听步骤变化、关闭、完成和打开状态变化。`,type:`function`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义节点扩展 root、mask、spotlight、panel、footer、indicator 等样式。`,type:`object`,defaultValue:`-`}],ye=`import { ref, useRef } from '@rue-js/rue'
import { Tour } from '@rue-js/design'

const visible = ref(false)
const current = ref(0)
const session = ref(0)
const uploadRef = useRef<HTMLButtonElement>()
const saveRef = useRef<HTMLButtonElement>()
const moreRef = useRef<HTMLButtonElement>()

const steps = [
  {
    target: () => document.querySelector('[data-basic-tour-target="upload"]') as HTMLButtonElement | null,
    title: 'Upload',
    description: 'Bring files into the workspace first.',
    placement: 'top',
  },
  {
    target: () => document.querySelector('[data-basic-tour-target="save"]') as HTMLButtonElement | null,
    title: 'Save',
    description: 'Save your changes.',
    placement: 'top',
  },
  {
    target: () => document.querySelector('[data-basic-tour-target="more"]') as HTMLButtonElement | null,
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
  <button ref={element => { moreRef.current = element ?? undefined }} data-basic-tour-target="more" type="button" className="btn btn-square btn-outline" aria-label="More actions">
    ...
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
`,be=`import { ref, useRef } from '@rue-js/rue'
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
`,xe=`import { ref, useRef } from '@rue-js/rue'
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
`,Se=`import { ref, useRef } from '@rue-js/rue'
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
`,Ce={panel:{width:`min(92vw, 21rem)`,maxHeight:`calc(100vh - 1.5rem)`},section:{maxHeight:`calc(100vh - 1.5rem)`,overflowY:`auto`,padding:`16px`},cover:{marginBottom:`12px`},meta:{color:`rgba(255,255,255,0.82)`,background:`rgba(255,255,255,0.12)`},title:{color:`#fff`,fontSize:`1rem`,lineHeight:`1.5rem`},description:{color:`rgba(255,255,255,0.88)`,marginTop:`10px`,fontSize:`14px`,lineHeight:`1.5rem`},footer:{marginTop:`14px`,paddingTop:`12px`,borderColor:`rgba(255,255,255,0.14)`},actions:{gap:`10px`},buttons:{gap:`8px`},prevButton:{minWidth:`72px`,height:`36px`,color:`#fff`,borderColor:`rgba(255,255,255,0.22)`},nextButton:{minWidth:`88px`,height:`36px`}},we=()=>{let{tourVisible:i,current:d,tourSession:f,note:h,uploadRef:v,saveRef:T,moreRef:D,steps:O,startTour:k}=w(`useSetup:0:0`,()=>x(()=>{let e=w(`ref:1:4`,()=>m(!1)),t=w(`ref:1:5`,()=>m(0)),r=w(`ref:1:6`,()=>m(0)),i=w(`ref:1:7`,()=>m(`点击 Basic 按钮后弹出引导`));return{tourVisible:e,current:t,tourSession:r,note:i,uploadRef:w(`useRef:1:8`,()=>n()),saveRef:w(`useRef:1:9`,()=>n()),moreRef:w(`useRef:1:10`,()=>n()),steps:[{target:()=>document.querySelector(`[data-basic-tour-target="upload"]`),title:`Upload`,description:`Bring files into the workspace first.`,placement:`top`},{target:()=>document.querySelector(`[data-basic-tour-target="save"]`),title:`Save`,description:`Save your changes.`,placement:`top`},{target:()=>document.querySelector(`[data-basic-tour-target="more"]`),title:`More`,description:`Open additional actions from here.`,placement:`left`,nextButtonProps:{children:`完成引导`}}],startTour:()=>{r.value+=1,t.value=0,e.value=!0,i.value=`正在查看 Upload`}}}));return g(n=>{let m=l(`div`,n);e(m,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]`);let x=l(`div`,m);t(m,x),e(x,`mb-6 text-[2.25rem] font-semibold tracking-tight text-base-content md:text-[2.7rem]`),t(x,a(`代码演示`));let w=l(`div`,m);t(m,w),e(w,`mb-5 flex flex-wrap items-center gap-3`);let A=l(`button`,w);t(w,A),u(A,`type`,`button`),e(A,`btn btn-primary rounded-2xl px-5`),C(A,`click`,k),t(A,a(`Basic`));let j=l(`button`,w);t(w,j),u(j,`type`,`button`),e(j,`btn btn-ghost rounded-2xl px-4`),C(j,`click`,()=>{d.value=0,i.value=!1,h.value=`基础引导已重置`}),t(j,a(`重置`));let M=l(`span`,w);t(w,M),e(M,`text-sm text-base-content/60`);let N=s(M);t(M,N),r(()=>{p(N,h.value)});let P=l(`div`,m);t(m,P),e(P,`rounded-[1.7rem] border border-base-300/70 bg-base-100/82 p-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.6)]`);let F=l(`div`,P);t(P,F),e(F,`rounded-[1.5rem] border border-base-300/70 bg-base-100 p-5`);let I=l(`div`,F);t(F,I),e(I,`mb-4 flex flex-wrap items-center justify-between gap-3`);let L=l(`div`,I);t(I,L);let R=l(`div`,L);t(L,R),e(R,`text-sm font-semibold text-base-content`),t(R,a(`Action Bar`));let z=l(`div`,L);t(L,z),e(z,`mt-1 text-sm text-base-content/55`),t(z,a(`点击 Basic 后，会依次讲解 Upload、Save 和更多操作。`));let B=l(`span`,I);t(I,B),e(B,`badge badge-outline badge-sm px-3 py-3`),t(B,a(`Code Demo`));let V=l(`div`,F);t(F,V),e(V,`flex flex-wrap items-center gap-3`);let H=l(`button`,V);t(V,H);let ee=E(H,()=>e=>{v.current=e??void 0});_(()=>{ee()}),u(H,`data-basic-tour-target`,`upload`),u(H,`type`,`button`),e(H,`btn btn-outline rounded-2xl px-6`),t(H,a(`Upload`));let U=l(`button`,V);t(V,U);let te=E(U,()=>e=>{T.current=e??void 0});_(()=>{te()}),u(U,`data-basic-tour-target`,`save`),u(U,`type`,`button`),e(U,`btn btn-primary rounded-2xl px-7`),t(U,a(`Save`));let W=l(`button`,V);t(V,W);let ne=E(W,()=>e=>{D.current=e??void 0});_(()=>{ne()}),u(W,`data-basic-tour-target`,`more`),u(W,`type`,`button`),u(W,`aria-label`,`More actions`),e(W,`btn btn-square btn-outline rounded-2xl text-lg`),t(W,a(`...`));let G=o(`rue:slot:anchor`);return t(m,G),r(()=>{let e=i.value?g(()=>{let e=c(),n=o(`rue:component:anchor`);return t(e,n),r(()=>{let t=b(de,{key:`basic-tour-${f.value}-${d.value}-${i.value?`open`:`closed`}`,open:i.value,current:d.value,steps:O,gap:{offset:[10,14],radius:18},onOpenChange:e=>{i.value=e,e||(d.value=0)},onChange:e=>{d.value=e,h.value=`正在查看 ${O[e]?.title??`第 ${e+1} 步`}`},onClose:()=>{h.value=`基础引导已关闭`},onFinish:()=>{d.value=0,h.value=`基础引导已完成`}});S(()=>y(t,e,n))}),e}):``;S(()=>y(e,m,G))}),m})},Te=()=>{let{open:i,current:s,tourSession:d,heroRef:f,metricsRef:p}=w(`useSetup:0:0:dup1`,()=>x(()=>({open:w(`ref:1:11`,()=>m(!1)),current:w(`ref:1:12`,()=>m(0)),tourSession:w(`ref:1:13`,()=>m(0)),heroRef:w(`useRef:1:14`,()=>n()),metricsRef:w(`useRef:1:15`,()=>n())}))),h=[{placement:`center`,title:`欢迎来到 Rue Tour`,description:`第一步不绑定 target，会自动居中显示。适合首访说明、版本更新和整页 onboarding。`,cover:k(`div`,{className:`h-28 rounded-[1.25rem] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续看页面`}},{target:()=>f.current,title:`非模态说明更适合轻引导`,description:`这里关闭了遮罩，用户仍然可以浏览内容，不会被强行打断。`,placement:`bottomRight`},{target:()=>p.current,title:`局部强调也能单独覆盖 placement`,description:`同一套 Tour 可以混合 center 步骤与 target 步骤。`,placement:`top`,nextButtonProps:{children:`知道了`}}];return g(n=>{let m=l(`div`,n);e(m,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let v=l(`div`,m);t(m,v),e(v,`mb-4 flex flex-wrap items-center justify-between gap-3`);let x=l(`div`,v);t(v,x);let w=l(`div`,x);t(x,w),e(w,`text-sm font-semibold`),t(w,a(`欢迎页 + 非模态引导`));let D=l(`div`,x);t(x,D),e(D,`mt-1 text-sm text-base-content/60`),t(D,a(`适合把版本亮点和页面主内容穿在同一条体验线上。`));let O=l(`button`,v);t(v,O),u(O,`type`,`button`),e(O,`btn btn-outline btn-sm rounded-full`),C(O,`click`,()=>{d.value+=1,s.value=0,i.value=!0}),t(O,a(`打开欢迎引导`));let k=l(`div`,m);t(m,k);let A=E(k,()=>e=>{f.current=e??void 0});_(()=>{A()}),e(k,`rounded-[1.7rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 p-6 text-white`);let j=l(`div`,k);t(k,j),e(j,`badge badge-sm border-0 bg-white/15 text-white`),t(j,a(`Release Note`));let M=l(`div`,k);t(k,M),e(M,`mt-4 text-2xl font-semibold`),t(M,a(`Shipping cockpit for product operations`));let N=l(`div`,k);t(k,N),e(N,`mt-2 max-w-xl text-sm text-white/75`),t(N,a(`把素材、上线窗口、审批节点和回放笔记收进同一块工作区，不必在多个页面之间反复跳转。`));let P=l(`div`,m);t(m,P);let F=E(P,()=>e=>{p.current=e??void 0});_(()=>{F()}),e(P,`mt-4 grid gap-4 md:grid-cols-3`);let I=o(`rue:list:start`),L=o(`rue:list:end`);t(P,I),t(P,L);let R=new Map;r(()=>{R=T({items:[[`Launches`,`12`],[`Reviews`,`5`],[`Pending`,`2`]],getKey:(e,t)=>e[0],elements:R,parent:P,before:L,singleRoot:!0,trackIndex:!1,start:I,renderItem:(n,i,a,s,d)=>{y(g(()=>{let i=c(),a=l(`div`,i);t(i,a),r(()=>{u(a,`key`,String(n[0]))}),e(a,`rounded-[1.4rem] border border-base-300/70 bg-base-100/80 p-4`);let s=l(`div`,a);t(a,s),e(s,`text-sm text-base-content/55`);let d=o(`rue:slot:anchor`);t(s,d),r(()=>{let e=n[0];S(()=>y(e,s,d))});let f=l(`div`,a);t(a,f),e(f,`mt-2 text-3xl font-semibold`);let p=o(`rue:slot:anchor`);return t(f,p),r(()=>{let e=n[1];S(()=>y(e,f,p))}),i}),i,a)}})});let z=o(`rue:slot:anchor`);return t(m,z),r(()=>{let e=i.value?g(()=>{let e=c(),n=o(`rue:component:anchor`);return t(e,n),r(()=>{let t=b(de,{key:`welcome-tour-${d.value}-${s.value}-${i.value?`open`:`closed`}`,open:i.value,current:s.value,mask:!1,steps:h,onOpenChange:e=>{i.value=e,e||(s.value=0)},onChange:e=>{s.value=e},onFinish:()=>{s.value=0}});S(()=>y(t,e,n))}),e}):``;S(()=>y(e,m,z))}),m})},Ee=()=>{let{open:i,current:d,tourSession:f,tapCount:h,activePlacement:v,anchorRef:D,steps:O}=w(`useSetup:0:0:dup2`,()=>x(()=>{let e=w(`ref:1:16`,()=>m(!1)),t=w(`ref:1:17`,()=>m(0)),r=w(`ref:1:18`,()=>m(0)),i=w(`ref:1:19`,()=>m(0)),a=w(`ref:1:20`,()=>m(`right`)),o=w(`useRef:1:21`,()=>n());return{open:e,current:t,tourSession:r,tapCount:i,activePlacement:a,anchorRef:o,steps:[{target:()=>o.current,title:`高亮区默认仍可点击`,description:`disabledInteraction 默认为 false，所以聚焦区域内的按钮还能继续触发业务动作。`}]}}));return g(n=>{let m=l(`div`,n);e(m,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let x=l(`div`,m);t(m,x),e(x,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=l(`div`,x);t(x,w);let k=l(`div`,w);t(w,k),e(k,`text-sm font-semibold`),t(k,a(`Placement 与高亮区实验`));let A=l(`div`,w);t(w,A),e(A,`mt-1 text-sm text-base-content/60`),t(A,a(`切换浮层方向时，目标按钮仍然可以在洞口区域被点击。`));let j=l(`button`,x);t(x,j),u(j,`type`,`button`),e(j,`btn btn-outline btn-sm rounded-full`),C(j,`click`,()=>{f.value+=1,d.value=0,i.value=!0}),t(j,a(`打开定位实验`));let M=l(`div`,m);t(m,M),e(M,`mb-4 flex flex-wrap gap-2`);let N=o(`rue:list:start`),P=o(`rue:list:end`);t(M,N),t(M,P);let F=new Map;r(()=>{F=T({items:_e||[],getKey:(e,t)=>e,elements:F,parent:M,before:P,singleRoot:!0,trackIndex:!1,start:N,renderItem:(n,a,o,m,h)=>{y(g(()=>{let a=c(),o=l(`button`,a);t(a,o),r(()=>{u(o,`key`,String(n))}),u(o,`type`,`button`),r(()=>{e(o,String(`btn btn-sm rounded-full ${v.value===n?`btn-primary`:`btn-outline`}`))}),C(o,`click`,()=>{v.value=n,f.value+=1,d.value=0,i.value=!0});let m=s(o);return t(o,m),r(()=>{p(m,n)}),a}),a,o)}})});let I=l(`div`,m);t(m,I),e(I,`grid min-h-[18rem] place-items-center rounded-[1.7rem] border border-dashed border-base-300/80 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_50%)] p-6`);let L=l(`button`,I);t(I,L);let R=E(L,()=>e=>{D.current=e??void 0});_(()=>{R()}),u(L,`type`,`button`),e(L,`btn btn-primary rounded-full px-6`),C(L,`click`,()=>{h.value+=1}),t(L,a(`已点击 `));let z=s(L);t(L,z),r(()=>{p(z,h.value)}),t(L,a(` 次`));let B=o(`rue:slot:anchor`);return t(m,B),r(()=>{let e=i.value?g(()=>{let e=c(),n=o(`rue:component:anchor`);return t(e,n),r(()=>{let t=b(de,{key:`placement-tour-${f.value}-${v.value}-${d.value}`,open:i.value,current:d.value,placement:v.value,gap:{offset:[12,16],radius:22},mask:{color:`rgba(15, 23, 42, 0.38)`},steps:O,onOpenChange:e=>{i.value=e,e||(d.value=0)},onChange:e=>{d.value=e}});S(()=>y(t,e,n))}),e}):``;S(()=>y(e,m,B))}),m})},De=()=>{let{open:i,current:s,tourSession:d,summaryRef:f,timelineRef:p,approvalRef:h}=w(`useSetup:0:0:dup3`,()=>x(()=>({open:w(`ref:1:22`,()=>m(!1)),current:w(`ref:1:23`,()=>m(0)),tourSession:w(`ref:1:24`,()=>m(0)),summaryRef:w(`useRef:1:25`,()=>n()),timelineRef:w(`useRef:1:26`,()=>n()),approvalRef:w(`useRef:1:27`,()=>n())}))),v=[{target:()=>f.current,title:`把封面和主题一起做强`,description:`默认样式延续 Rue 的轻卡片语言，但你也可以切到 primary，让产品引导更像一个任务流。`,placement:`bottomLeft`,cover:k(`div`,{className:`h-20 rounded-[1.25rem] bg-gradient-to-br from-cyan-300 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续`}},{target:()=>p.current,title:`中间步骤适合解释过程`,description:`当你要穿过多个版块时，指示器和 actionsRender 可以直接融入业务语境。`,placement:`topLeft`,prevButtonProps:{children:`返回`},nextButtonProps:{children:`看审批`}},{target:()=>h.current,title:`最后把业务动作接住`,description:`把完成按钮改成提交、发布、同步都可以，不需要额外封装。`,placement:`left`,nextButtonProps:{children:`提交并结束`}}];return g(n=>{let m=l(`div`,n);e(m,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let x=l(`div`,m);t(m,x),e(x,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=l(`div`,x);t(x,w);let D=l(`div`,w);t(w,D),e(D,`text-sm font-semibold`),t(D,a(`自定义 indicator 与 actions`));let A=l(`div`,w);t(w,A),e(A,`mt-1 text-sm text-base-content/60`),t(A,a(`这套写法更接近常见分步引导的心智，但视觉和布局还是 Rue 自己的。`));let j=l(`button`,x);t(x,j),u(j,`type`,`button`),e(j,`btn btn-outline btn-sm rounded-full`),C(j,`click`,()=>{d.value+=1,s.value=0,i.value=!0}),t(j,a(`启动主视觉引导`));let M=l(`div`,m);t(m,M);let N=E(M,()=>e=>{f.current=e??void 0});_(()=>{N()}),e(M,`rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let P=l(`div`,M);t(M,P),e(P,`flex flex-wrap items-center justify-between gap-3`);let F=l(`div`,P);t(P,F);let I=l(`div`,F);t(F,I),e(I,`badge badge-outline badge-sm`),t(I,a(`Launch Summary`));let L=l(`div`,F);t(F,L),e(L,`mt-3 text-xl font-semibold`),t(L,a(`One surface for launch, approval and playback`));let R=l(`div`,F);t(F,R),e(R,`mt-2 max-w-xl text-sm text-base-content/60`),t(R,a(`用一个页面完成素材汇总、审批流转、上线窗口对齐和上线后的回放，不再分散在多个工具里。`));let z=l(`div`,P);t(P,z),e(z,`grid h-16 w-16 place-items-center rounded-3xl bg-primary/10 text-primary`);let B=l(`svg`,z);t(z,B),u(B,`viewBox`,`0 0 24 24`),u(B,`fill`,`none`),u(B,`stroke`,`currentColor`),u(B,`strokeWidth`,`1.8`),e(B,`size-8`);let V=l(`path`,B);t(B,V),u(V,`strokeLinecap`,`round`),u(V,`strokeLinejoin`,`round`),u(V,`d`,`m12 3 2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8L12 3Z`);let H=l(`div`,m);t(m,H);let ee=E(H,()=>e=>{p.current=e??void 0});_(()=>{ee()}),e(H,`mt-4 rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let U=l(`div`,H);t(H,U),e(U,`grid gap-3 md:grid-cols-3`);let te=o(`rue:list:start`),W=o(`rue:list:end`);t(U,te),t(U,W);let ne=new Map;r(()=>{ne=T({items:[[`Brief`,`完成背景与目标归纳`],[`Review`,`跨团队确认视觉与文案`],[`Ship`,`统一 CTA 与发布时间窗`]],getKey:(e,t)=>e[0],elements:ne,parent:U,before:W,singleRoot:!0,trackIndex:!1,start:te,renderItem:(n,i,a,s,d)=>{y(g(()=>{let i=c(),a=l(`div`,i);t(i,a),r(()=>{u(a,`key`,String(n[0]))}),e(a,`rounded-[1.2rem] bg-base-200/65 px-4 py-4`);let s=l(`div`,a);t(a,s),e(s,`text-sm font-semibold`);let d=o(`rue:slot:anchor`);t(s,d),r(()=>{let e=n[0];S(()=>y(e,s,d))});let f=l(`div`,a);t(a,f),e(f,`mt-2 text-sm text-base-content/60`);let p=o(`rue:slot:anchor`);return t(f,p),r(()=>{let e=n[1];S(()=>y(e,f,p))}),i}),i,a)}})});let G=l(`div`,m);t(m,G),e(G,`mt-4 flex justify-end`);let K=l(`button`,G);t(G,K);let q=E(K,()=>e=>{h.current=e??void 0});_(()=>{q()}),u(K,`type`,`button`),e(K,`btn btn-primary rounded-full px-5`),t(K,a(`提交审批`));let re=o(`rue:slot:anchor`);return t(m,re),r(()=>{let e=i.value?g(()=>{let e=c(),n=o(`rue:component:anchor`);return t(e,n),r(()=>{let t=b(de,{key:`custom-tour-${d.value}-${s.value}-${i.value?`open`:`closed`}`,open:i.value,current:s.value,type:`primary`,styles:Ce,steps:v,indicatorsRender:(e,t)=>O(`div`,{className:`flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/80`,children:[k(`span`,{children:`phase`}),k(`span`,{className:`rounded-full border border-white/20 px-2 py-1 text-white`,children:e+1}),k(`span`,{children:`/`}),k(`span`,{children:t})]}),actionsRender:(e,t)=>O(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[O(`div`,{className:`text-xs uppercase tracking-[0.24em] text-white/70`,children:[`launch guide · step `,t.current+1]}),e]}),onOpenChange:e=>{i.value=e,e||(s.value=0)},onChange:e=>{s.value=e},onFinish:()=>{s.value=0}});S(()=>y(t,e,n))}),e}):``;S(()=>y(e,m,re))}),m})},Oe=()=>g(n=>{let i=c(),s=o(`rue:component:anchor`);return t(i,s),y(b(A,{children:g(()=>{let n=c(),i=l(`div`,n);t(n,i),e(i,`max-w-none prose prose-sm md:prose-base`);let s=l(`h1`,i);t(i,s),t(s,a(`Tour 漫游引导`));let u=l(`p`,i);t(i,u),e(u,`text-sm mt-3 mb-3`),t(u,a(`Tour 用分步浮层把用户带过关键入口、局部强调和最终动作。Rue 的实现参考了成熟组件库的能力模型，但视觉仍然保持自己的 card、badge 和 button 语言，不直接照搬现成面板样式。`));let d=l(`p`,i);t(i,d),e(d,`text-sm mt-3 mb-3`),t(d,a(`这次补齐的不只是静态外观，而是完整执行逻辑：围绕真实 DOM target 做高亮、自动定位、切步滚动、非模态展示，以及自定义 indicator 和底部 actions。`));let f=l(`h2`,i);t(i,f),t(f,a(`何时使用`));let p=l(`ul`,i);t(i,p);let m=l(`li`,p);t(p,m),t(m,a(`需要把新用户逐步带过核心入口、关键按钮或首次配置流程。`));let h=l(`li`,p);t(p,h),t(h,a(`需要在复杂页面里突出某个局部区域，并配合文案解释当前操作目的。`));let g=l(`li`,p);t(p,g),t(g,a(`需要把产品说明、轻 onboarding 和最终业务动作串成一条连续体验。`));let _=o(`rue:component:anchor`);t(n,_),r(()=>{let e=b(j,{title:`基础引导`,summary:`点击 Basic 后，从 Upload、Save 到更多操作依次弹出讲解。`,tab:pe,preview:we,code:ye});S(()=>y(e,n,_))});let v=o(`rue:component:anchor`);t(n,v),r(()=>{let e=b(j,{title:`欢迎页与非模态`,summary:`展示没有 target 的中心步骤，以及 mask=false 时的轻量引导方式。`,tab:me,preview:Te,code:be});S(()=>y(e,n,v))});let x=o(`rue:component:anchor`);t(n,x),r(()=>{let e=b(j,{title:`Placement 与交互洞口`,summary:`切换 top/right/bottom/left，并验证高亮区默认仍可继续触发目标元素。`,tab:he,preview:Ee,code:xe});S(()=>y(e,n,x))});let C=o(`rue:component:anchor`);t(n,C),r(()=>{let e=b(j,{title:`自定义指示器与动作区`,summary:`通过 primary 主题、cover、indicatorsRender 和 actionsRender 把引导做成更完整的任务流。`,tab:ge,preview:De,code:Se});S(()=>y(e,n,C))});let w=l(`div`,n);t(n,w),e(w,`component-preview not-prose text-base-content my-6 lg:my-12`);let T=l(`h2`,w);t(w,T),e(T,`component-preview-title mt-2 mb-3 text-lg font-semibold`),t(T,a(`# API`));let E=o(`rue:component:anchor`);return t(w,E),r(()=>{let e=b(fe,{rows:ve});S(()=>y(e,w,E))}),n})}),i,s),i});export{Oe as default};
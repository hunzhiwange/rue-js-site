import{$ as e,Gt as t,J as n,Jt as r,Kt as i,Lt as a,Q as o,Vt as s,Y as c,Yt as l,Z as u,a as d,ct as f,et as p,ft as m,i as h,l as g,m as _,mt as v,ot as y,r as b,s as x,t as S,tt as C}from"./vapor-runtime-DHPuOjqh.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-CJFAWine.js";import{a as D,i as O}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as k}from"./Teleport-CRIVj57P.js";import{n as A}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as j}from"./PreviewBlock-BYaG1RFO.js";var M={next:`下一步`,previous:`上一步`,finish:`完成`,close:`关闭引导`},N=16,P=18,F=(...e)=>e.filter(Boolean).join(` `),I=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},L=e=>`${e}px`,R=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=F(e?.[r],t?.[r]);i&&(n[r]=i)}),n},z=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=I(e?.[r],t?.[r]);Object.keys(i).length>0&&(n[r]=i)}),n},B=(e,t,n)=>n<t?t:Math.min(Math.max(e,t),n),V=e=>typeof e==`function`?e():e,H=e=>typeof e==`function`?e()??null:e??null,ee=e=>{let t=e?.offset??8;if(Array.isArray(t))return{horizontal:Math.max(0,t[0]??0),vertical:Math.max(0,t[1]??t[0]??0)};let n=Math.max(0,t);return{horizontal:n,vertical:n}},U=e=>Math.max(0,e?.radius??18),te=e=>e===!1?null:e&&typeof e==`object`?{color:e.color??`rgba(15, 23, 42, 0.46)`,style:e.style}:{color:`rgba(15, 23, 42, 0.46)`,style:void 0},W=e=>e!==!1,ne=e=>typeof e==`object`?e.pointAtCenter!==!1:!0,re=e=>e??`bottom`,G=e=>e===`center`?`center`:e.startsWith(`top`)?`top`:e.startsWith(`bottom`)?`bottom`:e.startsWith(`left`)?`left`:`right`,K=e=>{switch(e){case`top`:return`bottom`;case`topLeft`:return`bottomLeft`;case`topRight`:return`bottomRight`;case`bottom`:return`top`;case`bottomLeft`:return`topLeft`;case`bottomRight`:return`topRight`;case`left`:return`right`;case`leftTop`:return`rightTop`;case`leftBottom`:return`rightBottom`;case`right`:return`left`;case`rightTop`:return`leftTop`;case`rightBottom`:return`leftBottom`;default:return`center`}},ie=()=>typeof window>`u`||typeof document>`u`?{width:1440,height:900}:{width:document.documentElement.clientWidth||window.innerWidth||1440,height:document.documentElement.clientHeight||window.innerHeight||900},ae=(e,t)=>{if(!e)return null;let n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let r=ie(),i=ee(t),a=U(t),o=B(n.left-i.horizontal,4,r.width-4),s=B(n.top-i.vertical,4,r.height-4),c=B(n.right+i.horizontal,4,r.width-4),l=B(n.bottom+i.vertical,4,r.height-4),u=Math.max(0,c-o),d=Math.max(0,l-s);return{left:o,top:s,width:u,height:d,radius:a,centerX:o+u/2,centerY:s+d/2,right:c,bottom:l}},oe=(e,t,n,r)=>{switch(e){case`top`:return{left:t.centerX-n/2,top:t.top-r-P};case`topLeft`:return{left:t.left,top:t.top-r-P};case`topRight`:return{left:t.right-n,top:t.top-r-P};case`bottom`:return{left:t.centerX-n/2,top:t.bottom+P};case`bottomLeft`:return{left:t.left,top:t.bottom+P};case`bottomRight`:return{left:t.right-n,top:t.bottom+P};case`left`:return{left:t.left-n-P,top:t.centerY-r/2};case`leftTop`:return{left:t.left-n-P,top:t.top};case`leftBottom`:return{left:t.left-n-P,top:t.bottom-r};case`right`:return{left:t.right+P,top:t.centerY-r/2};case`rightTop`:return{left:t.right+P,top:t.top};case`rightBottom`:return{left:t.right+P,top:t.bottom-r};default:return{left:t.centerX-n/2,top:t.bottom+P}}},se=(e,t,n,r,i)=>{switch(G(e)){case`top`:return t.top<N;case`bottom`:return t.top+r>i.height-N;case`left`:return t.left<N;case`right`:return t.left+n>i.width-N;default:return!1}},ce=(e,t,n,r)=>{let i=ie();if(!t||e===`center`)return{placement:`center`,left:B((i.width-n)/2,N,i.width-n-N),top:B((i.height-r)/2,N,i.height-r-N)};let a=e,o=oe(a,t,n,r);return se(a,o,n,r,i)&&(a=K(a),o=oe(a,t,n,r)),{placement:a,left:B(o.left,N,i.width-n-N),top:B(o.top,N,i.height-r-N)}},le=(e,t,n,r,i,a,o)=>{if(!t||e===`center`)return null;let s=B(t.centerX-n-9,24,i-24),c=B(t.centerY-r-9,24,a-24),l=o?void 0:28;switch(G(e)){case`top`:return{left:L(l??s),bottom:`-9px`};case`bottom`:return{left:L(l??s),top:`-9px`};case`left`:return{top:L(l??c),right:`-9px`};case`right`:return{top:L(l??c),left:`-9px`};default:return null}},ue=()=>g(t=>{let n=e(`svg`,t);y(n,`viewBox`,`0 0 24 24`),y(n,`fill`,`none`),y(n,`stroke`,`currentColor`),y(n,`strokeWidth`,`1.9`),f(n,`size-4`);let r=e(`path`,n);return c(n,r),y(r,`strokeLinecap`,`round`),y(r,`strokeLinejoin`,`round`),y(r,`d`,`M6 6l12 12M18 6 6 18`),n}),de=()=>g(t=>{let n=e(`svg`,t);y(n,`viewBox`,`0 0 24 24`),y(n,`fill`,`none`),y(n,`stroke`,`currentColor`),y(n,`strokeWidth`,`1.8`),f(n,`size-4`);let r=e(`path`,n);c(n,r),y(r,`strokeLinecap`,`round`),y(r,`strokeLinejoin`,`round`),y(r,`d`,`m12 3 1.7 4.2L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.8L12 3Z`);let i=e(`path`,n);return c(n,i),y(i,`strokeLinecap`,`round`),y(i,`strokeLinejoin`,`round`),y(i,`d`,`M5 19h.01M12 21h.01M19 19h.01`),n}),q=n=>{let{steps:p,defaultOpen:v,defaultCurrent:b,placement:C,mask:T,gap:E,arrow:A,type:j,closeIcon:N,disabledInteraction:P,keyboard:ee,zIndex:U,scrollIntoViewOptions:G,getPopupContainer:K,locale:ie,indicatorsRender:oe,actionsRender:se,className:q,style:fe,classNames:pe,styles:me,onChange:he,onClose:ge,onFinish:_e,onOpenChange:ve,rest:ye,panelRef:be,rafIdRef:xe,renderVersion:Se,isControlledOpen:Ce,isControlledCurrent:we,uncontrolledOpen:Te,uncontrolledCurrent:Ee,lastDefaultOpen:De,lastDefaultCurrent:Oe,currentOpenRef:ke,currentIndexRef:Ae,panelStyleRef:je,arrowStyleRef:Me,spotlightRef:Ne,placementRef:Pe,mergedLocale:Fe,getTotal:Ie,normalizeCurrentValue:Le,getMergedOpen:Re,getMergedCurrent:ze,getCurrentStep:Be,requestRender:Ve,requestOpenChange:He,requestCurrentChange:Ue,scheduleLayoutSync:We,syncScrollIntoView:Ge,handleClose:Ke,handleMaskClick:qe,handleNext:Je,handlePrev:Ye,total:Xe,currentIndex:Ze,step:J,mergedOpen:Qe}=w(`useSetup:0:0`,()=>i(()=>{let{steps:e=[],defaultOpen:i=!1,defaultCurrent:o=0,placement:s=`bottom`,mask:c=!0,gap:l,arrow:u=!0,type:f=`default`,closeIcon:p,disabledInteraction:m=!1,keyboard:g=!0,zIndex:_=1400,scrollIntoViewOptions:v={block:`center`,inline:`center`,behavior:`smooth`},getPopupContainer:y,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:T,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,...N}=n,P=w(`useRef:1:0`,()=>t()),F=w(`useRef:1:1`,()=>t()),I=w(`ref:1:2`,()=>a(0)),R=typeof n.open==`boolean`,z=typeof n.current==`number`,V=w(`ref:1:3`,()=>a(i)),ee=w(`ref:1:4`,()=>a(o)),U=w(`ref:1:5`,()=>a(!!i)),te=w(`ref:1:6`,()=>a(Math.max(0,Math.floor(o)))),G=w(`ref:1:7`,()=>a(R?!!n.open:i)),K=w(`ref:1:8`,()=>a(z?Math.max(0,Math.floor(n.current)):Math.max(0,Math.floor(o)))),ie=w(`ref:1:9`,()=>a({visibility:`hidden`,opacity:0})),oe=w(`ref:1:10`,()=>a(null)),se=w(`ref:1:11`,()=>a(null)),ue=w(`ref:1:12`,()=>a(re(s))),de={...M,...b},q=()=>e.length,fe=e=>{let t=q();return t<=0?0:B(Math.floor(e),0,t-1)},pe=()=>R?!!n.open:G.value,me=()=>fe(z?n.current:K.value),he=()=>e[me()],ge=()=>{I.value+=1},_e=e=>{G.value=e,R||(V.value=e),ge(),j&&j(e)},ve=e=>{let t=q();if(t<=0)return;let n=B(e,0,t-1);K.value=n,z||(ee.value=n),ge(),O&&O(n)},ye=()=>{typeof window>`u`||(F.current!=null&&window.cancelAnimationFrame(F.current),F.current=window.requestAnimationFrame(()=>{let e=P.current??document.querySelector(`[data-rue-tour-panel="true"]`),t=he();if(!pe()||!e||!t){ie.value={visibility:`hidden`,opacity:0},se.value=null,oe.value=null,ge();return}let n=ae(H(t.target),l),r=e.getBoundingClientRect(),i=ce(re(t.placement??s),n,Math.max(r.width,320),Math.max(r.height,1)),a=W(t.arrow??u),o=ne(t.arrow??u);se.value=n,ue.value=i.placement,ie.value={left:L(i.left),top:L(i.top),opacity:1,visibility:`visible`},oe.value=a?le(i.placement,n,i.left,i.top,r.width,r.height,o):null,ge()}))},be=()=>{let e=he();if(!pe()||!e||typeof window>`u`)return;let t=H(e.target),n=e.scrollIntoViewOptions??v;!t||n===!1||typeof t.scrollIntoView!=`function`||window.requestAnimationFrame(()=>{t.scrollIntoView(n===!0?{block:`center`,inline:`center`,behavior:`smooth`}:n)})},xe=()=>{he()?.onClose?.(),_e(!1),k&&k()},Se=()=>{xe()},Ce=()=>{let e=he();if(!e)return;e.nextButtonProps?.onClick?.();let t=me();if(t>=q()-1){A&&A(),_e(!1);return}ve(t+1)},we=()=>{let e=he();e&&(e.prevButtonProps?.onClick?.(),ve(me()-1))};h(()=>{if(typeof window>`u`)return;let e=e=>{if(!(!pe()||!g)){if(e.key===`Escape`){e.preventDefault(),xe();return}if(e.key===`ArrowRight`){e.preventDefault(),Ce();return}e.key===`ArrowLeft`&&(e.preventDefault(),we())}},t=()=>{ye()};window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),window.addEventListener(`keydown`,e),be(),ye(),d(()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`keydown`,e),F.current!=null&&window.cancelAnimationFrame(F.current)})}),w(`watch:1:13`,()=>r(()=>n.open,e=>{typeof e==`boolean`&&(G.value=e)},{immediate:!0})),w(`watch:1:14`,()=>r(()=>n.current,e=>{typeof e==`number`&&(K.value=fe(e))},{immediate:!0})),w(`watch:1:15`,()=>r(()=>e.length,()=>{K.value=fe(K.value)},{immediate:!0})),w(`watch:1:16`,()=>r(()=>[pe(),me(),e.length,s,l?.radius??-1,Array.isArray(l?.offset)?`${l?.offset[0]??0}:${l?.offset[1]??0}`:l?.offset??-1],()=>{be(),ye()},{immediate:!0})),w(`watch:1:17`,()=>r(()=>i,e=>{let t=!!e;!R&&t!==U.value&&(U.value=t,V.value=t,G.value=t)})),w(`watch:1:18`,()=>r(()=>o,e=>{let t=Math.max(0,Math.floor(e));!z&&t!==te.value&&(te.value=t,ee.value=t,K.value=fe(t))}));let Te=e.length,Ee=(I.value,fe(z?n.current:K.value));return{steps:e,defaultOpen:i,defaultCurrent:o,placement:s,mask:c,gap:l,arrow:u,type:f,closeIcon:p,disabledInteraction:m,keyboard:g,zIndex:_,scrollIntoViewOptions:v,getPopupContainer:y,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:T,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,rest:N,panelRef:P,rafIdRef:F,renderVersion:I,isControlledOpen:R,isControlledCurrent:z,uncontrolledOpen:V,uncontrolledCurrent:ee,lastDefaultOpen:U,lastDefaultCurrent:te,currentOpenRef:G,currentIndexRef:K,panelStyleRef:ie,arrowStyleRef:oe,spotlightRef:se,placementRef:ue,mergedLocale:de,getTotal:q,normalizeCurrentValue:fe,getMergedOpen:pe,getMergedCurrent:me,getCurrentStep:he,requestRender:ge,requestOpenChange:_e,requestCurrentChange:ve,scheduleLayoutSync:ye,syncScrollIntoView:be,handleClose:xe,handleMaskClick:Se,handleNext:Ce,handlePrev:we,total:Te,currentIndex:Ee,step:Te>0?e[Ee]:void 0,mergedOpen:(I.value,R?!!n.open:G.value)}}));if(!Qe||!J||Xe===0)return null;let Y=te(J.mask??T),X=J.type??j,$e={...Fe,...J.locale},Z=R(pe,J.classNames),Q=z(me,J.styles),et=ae(H(J.target),E),tt=ce(re(J.placement??C),et,368,225),nt=je.value.visibility===`visible`?je.value:{left:L(tt.left),top:L(tt.top),opacity:1,visibility:`visible`},rt=je.value.visibility===`visible`?Pe.value:tt.placement,it=Ne.value,$=it&&it.width>0&&it.height>0?it:et,at=!!$,ot=J.indicatorsRender??oe,st=J.actionsRender??se,ct=J.closeIcon??N??O(ue,{}),lt=D(`div`,{...ye,className:F(`pointer-events-none fixed inset-0`,Z.root,q),style:I(Q.root,fe,{zIndex:U}),"data-rue-tour":`true`,"data-rue-tour-placement":rt,"data-rue-tour-version":String(Se.value),"data-rue-tour-current":String(we?n.current:Ae.value),"data-rue-tour-total":String(Xe),"data-rue-tour-open":String(Ce?!!n.open:ke.value),children:[Y?O(_,{children:at?D(_,{children:[O(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed inset-x-0 top-0`,Z.mask),style:I(Q.mask,Y.style,{height:L($.top),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`top`}),O(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed`,Z.mask),style:I(Q.mask,Y.style,{left:`0px`,top:L($.top),width:L($.left),height:L($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`left`}),O(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed`,Z.mask),style:I(Q.mask,Y.style,{left:L($.right),top:L($.top),width:`calc(100vw - ${$.right}px)`,height:L($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`right`}),O(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed inset-x-0 bottom-0`,Z.mask),style:I(Q.mask,Y.style,{top:L($.bottom),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`bottom`}),O(`div`,{"aria-hidden":`true`,className:F(`pointer-events-none fixed border border-primary/25 bg-primary/10 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_20px_60px_-36px_rgba(59,130,246,0.75)] backdrop-blur-[1px]`,Z.spotlight),style:I(Q.spotlight,{left:L($.left),top:L($.top),width:L($.width),height:L($.height),borderRadius:L($.radius)}),"data-rue-tour-spotlight":`true`}),P?O(`div`,{"aria-hidden":`true`,className:`pointer-events-auto fixed`,style:{left:L($.left),top:L($.top),width:L($.width),height:L($.height),borderRadius:L($.radius)},"data-rue-tour-blocker":`true`}):null]}):O(`div`,{"aria-hidden":`true`,className:F(`pointer-events-auto fixed inset-0`,Z.mask),style:I(Q.mask,Y.style,{background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`full`})}):null,D(`div`,{ref:e=>{be.current=e??void 0,e&&We()},role:`dialog`,"aria-modal":Y?`true`:`false`,className:F(`pointer-events-auto fixed w-[min(92vw,23rem)] rounded-[14px] border px-0 py-0 transition duration-200 ease-out md:w-[23rem]`,X===`primary`?`border-primary/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.98),rgba(8,78,119,0.96))] text-primary-content shadow-[0_28px_90px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl`:`border-black/[0.06] bg-white text-[#262626] shadow-[0_12px_32px_rgba(0,0,0,0.18),0_3px_10px_rgba(0,0,0,0.12)]`,Z.panel,J.className),style:I(Q.panel,J.style,nt),"data-rue-tour-panel":`true`,children:[Me.value?O(`span`,{"aria-hidden":`true`,className:F(`absolute size-[14px] rotate-45 border`,X===`primary`?`border-primary/20 bg-sky-900 shadow-[8px_8px_18px_-14px_rgba(15,23,42,0.75)]`:`border-black/[0.06] bg-white shadow-[8px_8px_18px_-14px_rgba(0,0,0,0.28)]`,Z.arrow),style:I(Q.arrow,Me.value),"data-rue-tour-arrow":`true`}):null,D(`div`,{className:F(`relative px-6 pb-5 pt-5`,Z.section),style:Q.section,"data-rue-tour-section":`true`,children:[O(`button`,{type:`button`,"aria-label":String($e.close),className:F(`absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full transition`,X===`primary`?`text-primary-content/80 hover:bg-white/10 hover:text-primary-content`:`text-black/35 hover:bg-black/[0.04] hover:text-black/60`,Z.close),style:Q.close,onClick:Ke,"data-rue-tour-close":`true`,children:ct}),J.cover?O(`div`,{className:F(`mb-5 overflow-hidden rounded-[12px]`,Z.cover),style:Q.cover,"data-rue-tour-cover":`true`,children:J.cover}):null,D(`div`,{className:F(`pr-11`,Z.body),style:Q.body,"data-rue-tour-body":`true`,children:[D(`div`,{className:F(`mb-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium`,X===`primary`?`bg-white/10 text-primary-content/70`:`border border-black/[0.06] bg-[#fafafa] text-[#8c8c8c]`,Z.meta),style:Q.meta,"data-rue-tour-meta":`true`,children:[O(de,{}),O(`span`,{children:`Tour`}),D(`span`,{className:X===`primary`?`text-primary-content/50`:`text-base-content/40`,children:[String(Ze+1).padStart(2,`0`),` / `,String(Xe).padStart(2,`0`)]})]}),O(`div`,{className:F(``,Z.header),style:Q.header,"data-rue-tour-header":`true`,children:J.title?O(`div`,{className:F(`text-[1.08rem] font-semibold leading-7 tracking-[0.01em]`,Z.title),style:Q.title,"data-rue-tour-title":`true`,children:J.title}):null}),J.description?O(`div`,{className:F(`mt-3 text-[15px] leading-7`,X===`primary`?`text-primary-content/80`:`text-[#595959]`,Z.description),style:Q.description,"data-rue-tour-description":`true`,children:J.description}):null]}),(()=>{let t=ot?ot(Ze,Xe):O(`div`,{className:F(`flex flex-wrap items-center gap-2.5`,Z.indicators),style:Q.indicators,"data-rue-tour-indicators":`true`,children:Array.from({length:Xe}).map((t,n)=>g(t=>{let r=e(`span`,t);return l(()=>{y(r,`key`,String(`indicator-${n}`))}),l(()=>{f(r,String(F(`block size-2.5 rounded-full transition-all duration-200`,n===Ze?X===`primary`?`bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)]`:`bg-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.14)]`:X===`primary`?`bg-white/30`:`bg-black/12`,Z.indicator)))}),l(()=>{let e=Q.indicator;m(r,e)}),l(()=>{y(r,`data-rue-tour-indicator`,String(n===Ze?`active`:`inactive`))}),l(()=>{y(r,`data-rue-tour-indicator-index`,String(String(n)))}),r}))}),n=Ze===0||J.prevButtonProps?.disabled,r=!!J.nextButtonProps?.disabled,i=D(`div`,{className:F(`flex flex-wrap items-center justify-between gap-3`,Z.actions),style:Q.actions,"data-rue-tour-actions":`true`,children:[t,D(`div`,{className:F(`flex items-center gap-2.5`,Z.buttons),style:Q.buttons,"data-rue-tour-buttons":`true`,children:[O(`button`,{type:`button`,className:F(`inline-flex h-10 min-w-[84px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-white/18 bg-transparent text-primary-content/78 hover:bg-white/10 hover:text-primary-content disabled:border-white/10 disabled:text-white/28`:`border-black/[0.08] bg-white text-[#595959] hover:border-black/[0.12] hover:bg-[#fafafa] disabled:border-black/[0.06] disabled:bg-[#fafafa] disabled:text-black/25`,Z.prevButton,J.prevButtonProps?.className),style:I(Q.prevButton,J.prevButtonProps?.style),disabled:n,onClick:Ye,"data-rue-tour-prev":`true`,children:J.prevButtonProps?.children??$e.previous}),O(`button`,{type:`button`,className:F(`inline-flex h-10 min-w-[96px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-0 bg-white text-sky-900 shadow-[0_2px_0_rgba(255,255,255,0.08)] hover:bg-sky-50 disabled:bg-white/40 disabled:text-sky-950/40`:`border-[#1677ff] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.12)] hover:border-[#4096ff] hover:bg-[#4096ff] disabled:border-[#91caff] disabled:bg-[#91caff]`,Z.nextButton,J.nextButtonProps?.className),style:I(Q.nextButton,J.nextButtonProps?.style),disabled:r,onClick:Je,"data-rue-tour-next":Ze===Xe-1?`finish`:`next`,children:J.nextButtonProps?.children??(Ze===Xe-1?$e.finish:$e.next)})]})]}),a=st?st(i,{current:Ze,total:Xe}):i;return a?O(`div`,{className:F(`mt-5 border-t pt-4`,X===`primary`?`border-white/10`:`border-black/[0.06]`,Z.footer),style:Q.footer,"data-rue-tour-footer":`true`,children:a}):null})()]})]})]}),ut=V(K);return ut===!1||ut==null?lt:g(e=>{let t=o(),n=u(`rue:component:anchor`);return c(t,n),l(()=>{let e=S(k,{to:ut,children:lt});s(()=>x(e,t,n))}),t})},fe=t=>g(n=>{let r=e(`div`,n);f(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);c(r,i),f(i,`table table-zebra`);let a=e(`thead`,i);c(i,a);let d=e(`tr`,a);c(a,d);let m=e(`th`,d);c(d,m),c(m,p(`属性`));let h=e(`th`,d);c(d,h),c(h,p(`说明`));let _=e(`th`,d);c(d,_),c(_,p(`类型`));let v=e(`th`,d);c(d,v),c(v,p(`默认值`));let b=e(`tbody`,i);c(i,b);let S=u(`rue:list:start`),C=u(`rue:list:end`);c(b,S),c(b,C);let w=new Map;return l(()=>{w=T({items:t.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,n,r,i,a)=>{x(g(()=>{let n=o(),r=e(`tr`,n);c(n,r),l(()=>{y(r,`key`,String(t.prop))});let i=e(`td`,r);c(r,i);let a=e(`code`,i);c(i,a);let d=u(`rue:slot:anchor`);c(a,d),l(()=>{let e=t.prop;s(()=>x(e,a,d))});let f=e(`td`,r);c(r,f);let p=u(`rue:slot:anchor`);c(f,p),l(()=>{let e=t.description;s(()=>x(e,f,p))});let m=e(`td`,r);c(r,m);let h=e(`code`,m);c(m,h);let g=u(`rue:slot:anchor`);c(h,g),l(()=>{let e=t.type;s(()=>x(e,h,g))});let _=e(`td`,r);c(r,_);let v=e(`code`,_);c(_,v);let b=u(`rue:slot:anchor`);return c(v,b),l(()=>{let e=t.defaultValue;s(()=>x(e,v,b))}),n}),n,r)}})}),r}),pe=w(`ref:1:0`,()=>a(`preview`)),me=w(`ref:1:1`,()=>a(`preview`)),he=w(`ref:1:2`,()=>a(`preview`)),ge=w(`ref:1:3`,()=>a(`preview`)),_e=[`top`,`right`,`bottom`,`left`],ve=[{prop:`steps`,description:`引导步骤数组，每步可独立配置 target、placement、mask、cover 与按钮文案。`,type:`TourStepProps[]`,defaultValue:`[]`},{prop:`open / defaultOpen`,description:`受控或非受控地打开引导浮层。`,type:`boolean`,defaultValue:`false`},{prop:`current / defaultCurrent`,description:`受控或非受控地指定当前步骤索引。`,type:`number`,defaultValue:`0`},{prop:`placement`,description:`全局浮层位置，单步可继续覆盖。`,type:`TourPlacement`,defaultValue:`bottom`},{prop:`mask / disabledInteraction`,description:`控制遮罩是否启用，以及高亮区是否允许继续交互。`,type:`boolean | { color?: string; style?: object } / boolean`,defaultValue:`true / false`},{prop:`gap`,description:`调整高亮区与目标的间距和圆角，适合按钮、卡片、输入框等不同密度场景。`,type:`{ offset?: number | [number, number]; radius?: number }`,defaultValue:`{ offset: 8, radius: 18 }`},{prop:`arrow / closeIcon / type`,description:`配置箭头、关闭按钮与主视觉主题。`,type:`boolean | object / any / default | primary`,defaultValue:`true / x / default`},{prop:`indicatorsRender / actionsRender`,description:`自定义底部步骤指示器与整体操作区。`,type:`(current, total) => any / (originNode, info) => any`,defaultValue:`-`},{prop:`scrollIntoViewOptions`,description:`步骤切换时自动把目标滚动进视口，可关闭或传入原生配置。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`{ block: center, inline: center, behavior: smooth }`},{prop:`onChange / onClose / onFinish / onOpenChange`,description:`监听步骤变化、关闭、完成和打开状态变化。`,type:`function`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义节点扩展 root、mask、spotlight、panel、footer、indicator 等样式。`,type:`object`,defaultValue:`-`}],ye=`import { ref, useRef } from '@rue-js/rue'
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
`,Ce={panel:{width:`min(92vw, 21rem)`,maxHeight:`calc(100vh - 1.5rem)`},section:{maxHeight:`calc(100vh - 1.5rem)`,overflowY:`auto`,padding:`16px`},cover:{marginBottom:`12px`},meta:{color:`rgba(255,255,255,0.82)`,background:`rgba(255,255,255,0.12)`},title:{color:`#fff`,fontSize:`1rem`,lineHeight:`1.5rem`},description:{color:`rgba(255,255,255,0.88)`,marginTop:`10px`,fontSize:`14px`,lineHeight:`1.5rem`},footer:{marginTop:`14px`,paddingTop:`12px`,borderColor:`rgba(255,255,255,0.14)`},actions:{gap:`10px`},buttons:{gap:`8px`},prevButton:{minWidth:`72px`,height:`36px`,color:`#fff`,borderColor:`rgba(255,255,255,0.22)`},nextButton:{minWidth:`88px`,height:`36px`}},we=()=>{let{tourVisible:r,current:d,tourSession:m,note:h,uploadRef:_,saveRef:T,moreRef:D,steps:O,startTour:k}=w(`useSetup:0:0`,()=>i(()=>{let e=w(`ref:1:4`,()=>a(!1)),n=w(`ref:1:5`,()=>a(0)),r=w(`ref:1:6`,()=>a(0)),i=w(`ref:1:7`,()=>a(`点击 Basic 按钮后弹出引导`));return{tourVisible:e,current:n,tourSession:r,note:i,uploadRef:w(`useRef:1:8`,()=>t()),saveRef:w(`useRef:1:9`,()=>t()),moreRef:w(`useRef:1:10`,()=>t()),steps:[{target:()=>document.querySelector(`[data-basic-tour-target="upload"]`),title:`Upload`,description:`Bring files into the workspace first.`,placement:`top`},{target:()=>document.querySelector(`[data-basic-tour-target="save"]`),title:`Save`,description:`Save your changes.`,placement:`top`},{target:()=>document.querySelector(`[data-basic-tour-target="more"]`),title:`More`,description:`Open additional actions from here.`,placement:`left`,nextButtonProps:{children:`完成引导`}}],startTour:()=>{r.value+=1,n.value=0,e.value=!0,i.value=`正在查看 Upload`}}}));return g(t=>{let i=e(`div`,t);f(i,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]`);let a=e(`div`,i);c(i,a),f(a,`mb-6 text-[2.25rem] font-semibold tracking-tight text-base-content md:text-[2.7rem]`),c(a,p(`代码演示`));let w=e(`div`,i);c(i,w),f(w,`mb-5 flex flex-wrap items-center gap-3`);let A=e(`button`,w);c(w,A),y(A,`type`,`button`),f(A,`btn btn-primary rounded-2xl px-5`),n(A,`click`,k),c(A,p(`Basic`));let j=e(`button`,w);c(w,j),y(j,`type`,`button`),f(j,`btn btn-ghost rounded-2xl px-4`),n(j,`click`,()=>{d.value=0,r.value=!1,h.value=`基础引导已重置`}),c(j,p(`重置`));let M=e(`span`,w);c(w,M),f(M,`text-sm text-base-content/60`);let N=C(M);c(M,N),l(()=>{v(N,h.value)});let P=e(`div`,i);c(i,P),f(P,`rounded-[1.7rem] border border-base-300/70 bg-base-100/82 p-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.6)]`);let F=e(`div`,P);c(P,F),f(F,`rounded-[1.5rem] border border-base-300/70 bg-base-100 p-5`);let I=e(`div`,F);c(F,I),f(I,`mb-4 flex flex-wrap items-center justify-between gap-3`);let L=e(`div`,I);c(I,L);let R=e(`div`,L);c(L,R),f(R,`text-sm font-semibold text-base-content`),c(R,p(`Action Bar`));let z=e(`div`,L);c(L,z),f(z,`mt-1 text-sm text-base-content/55`),c(z,p(`点击 Basic 后，会依次讲解 Upload、Save 和更多操作。`));let B=e(`span`,I);c(I,B),f(B,`badge badge-outline badge-sm px-3 py-3`),c(B,p(`Code Demo`));let V=e(`div`,F);c(F,V),f(V,`flex flex-wrap items-center gap-3`);let H=e(`button`,V);c(V,H);let ee=E(H,()=>e=>{_.current=e??void 0});b(()=>{ee()}),y(H,`data-basic-tour-target`,`upload`),y(H,`type`,`button`),f(H,`btn btn-outline rounded-2xl px-6`),c(H,p(`Upload`));let U=e(`button`,V);c(V,U);let te=E(U,()=>e=>{T.current=e??void 0});b(()=>{te()}),y(U,`data-basic-tour-target`,`save`),y(U,`type`,`button`),f(U,`btn btn-primary rounded-2xl px-7`),c(U,p(`Save`));let W=e(`button`,V);c(V,W);let ne=E(W,()=>e=>{D.current=e??void 0});b(()=>{ne()}),y(W,`data-basic-tour-target`,`more`),y(W,`type`,`button`),y(W,`aria-label`,`More actions`),f(W,`btn btn-square btn-outline rounded-2xl text-lg`),c(W,p(`...`));let re=u(`rue:slot:anchor`);return c(i,re),l(()=>{let e=r.value?g(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),l(()=>{let n=S(q,{key:`basic-tour-${m.value}-${d.value}-${r.value?`open`:`closed`}`,open:r.value,current:d.value,steps:O,gap:{offset:[10,14],radius:18},onOpenChange:e=>{r.value=e,e||(d.value=0)},onChange:e=>{d.value=e,h.value=`正在查看 ${O[e]?.title??`第 ${e+1} 步`}`},onClose:()=>{h.value=`基础引导已关闭`},onFinish:()=>{d.value=0,h.value=`基础引导已完成`}});s(()=>x(n,e,t))}),e}):``;s(()=>x(e,i,re))}),i})},Te=()=>{let{open:r,current:d,tourSession:m,heroRef:h,metricsRef:_}=w(`useSetup:0:0:dup1`,()=>i(()=>({open:w(`ref:1:11`,()=>a(!1)),current:w(`ref:1:12`,()=>a(0)),tourSession:w(`ref:1:13`,()=>a(0)),heroRef:w(`useRef:1:14`,()=>t()),metricsRef:w(`useRef:1:15`,()=>t())}))),v=[{placement:`center`,title:`欢迎来到 Rue Tour`,description:`第一步不绑定 target，会自动居中显示。适合首访说明、版本更新和整页 onboarding。`,cover:O(`div`,{className:`h-28 rounded-[1.25rem] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续看页面`}},{target:()=>h.current,title:`非模态说明更适合轻引导`,description:`这里关闭了遮罩，用户仍然可以浏览内容，不会被强行打断。`,placement:`bottomRight`},{target:()=>_.current,title:`局部强调也能单独覆盖 placement`,description:`同一套 Tour 可以混合 center 步骤与 target 步骤。`,placement:`top`,nextButtonProps:{children:`知道了`}}];return g(t=>{let i=e(`div`,t);f(i,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let a=e(`div`,i);c(i,a),f(a,`mb-4 flex flex-wrap items-center justify-between gap-3`);let C=e(`div`,a);c(a,C);let w=e(`div`,C);c(C,w),f(w,`text-sm font-semibold`),c(w,p(`欢迎页 + 非模态引导`));let D=e(`div`,C);c(C,D),f(D,`mt-1 text-sm text-base-content/60`),c(D,p(`适合把版本亮点和页面主内容穿在同一条体验线上。`));let O=e(`button`,a);c(a,O),y(O,`type`,`button`),f(O,`btn btn-outline btn-sm rounded-full`),n(O,`click`,()=>{m.value+=1,d.value=0,r.value=!0}),c(O,p(`打开欢迎引导`));let k=e(`div`,i);c(i,k);let A=E(k,()=>e=>{h.current=e??void 0});b(()=>{A()}),f(k,`rounded-[1.7rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 p-6 text-white`);let j=e(`div`,k);c(k,j),f(j,`badge badge-sm border-0 bg-white/15 text-white`),c(j,p(`Release Note`));let M=e(`div`,k);c(k,M),f(M,`mt-4 text-2xl font-semibold`),c(M,p(`Shipping cockpit for product operations`));let N=e(`div`,k);c(k,N),f(N,`mt-2 max-w-xl text-sm text-white/75`),c(N,p(`把素材、上线窗口、审批节点和回放笔记收进同一块工作区，不必在多个页面之间反复跳转。`));let P=e(`div`,i);c(i,P);let F=E(P,()=>e=>{_.current=e??void 0});b(()=>{F()}),f(P,`mt-4 grid gap-4 md:grid-cols-3`);let I=u(`rue:list:start`),L=u(`rue:list:end`);c(P,I),c(P,L);let R=new Map;l(()=>{R=T({items:[[`Launches`,`12`],[`Reviews`,`5`],[`Pending`,`2`]],getKey:(e,t)=>e[0],elements:R,parent:P,before:L,singleRoot:!0,trackIndex:!1,start:I,renderItem:(t,n,r,i,a)=>{x(g(()=>{let n=o(),r=e(`div`,n);c(n,r),l(()=>{y(r,`key`,String(t[0]))}),f(r,`rounded-[1.4rem] border border-base-300/70 bg-base-100/80 p-4`);let i=e(`div`,r);c(r,i),f(i,`text-sm text-base-content/55`);let a=u(`rue:slot:anchor`);c(i,a),l(()=>{let e=t[0];s(()=>x(e,i,a))});let d=e(`div`,r);c(r,d),f(d,`mt-2 text-3xl font-semibold`);let p=u(`rue:slot:anchor`);return c(d,p),l(()=>{let e=t[1];s(()=>x(e,d,p))}),n}),n,r)}})});let z=u(`rue:slot:anchor`);return c(i,z),l(()=>{let e=r.value?g(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),l(()=>{let n=S(q,{key:`welcome-tour-${m.value}-${d.value}-${r.value?`open`:`closed`}`,open:r.value,current:d.value,mask:!1,steps:v,onOpenChange:e=>{r.value=e,e||(d.value=0)},onChange:e=>{d.value=e},onFinish:()=>{d.value=0}});s(()=>x(n,e,t))}),e}):``;s(()=>x(e,i,z))}),i})},Ee=()=>{let{open:r,current:d,tourSession:m,tapCount:h,activePlacement:_,anchorRef:D,steps:O}=w(`useSetup:0:0:dup2`,()=>i(()=>{let e=w(`ref:1:16`,()=>a(!1)),n=w(`ref:1:17`,()=>a(0)),r=w(`ref:1:18`,()=>a(0)),i=w(`ref:1:19`,()=>a(0)),o=w(`ref:1:20`,()=>a(`right`)),s=w(`useRef:1:21`,()=>t());return{open:e,current:n,tourSession:r,tapCount:i,activePlacement:o,anchorRef:s,steps:[{target:()=>s.current,title:`高亮区默认仍可点击`,description:`disabledInteraction 默认为 false，所以聚焦区域内的按钮还能继续触发业务动作。`}]}}));return g(t=>{let i=e(`div`,t);f(i,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let a=e(`div`,i);c(i,a),f(a,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=e(`div`,a);c(a,w);let k=e(`div`,w);c(w,k),f(k,`text-sm font-semibold`),c(k,p(`Placement 与高亮区实验`));let A=e(`div`,w);c(w,A),f(A,`mt-1 text-sm text-base-content/60`),c(A,p(`切换浮层方向时，目标按钮仍然可以在洞口区域被点击。`));let j=e(`button`,a);c(a,j),y(j,`type`,`button`),f(j,`btn btn-outline btn-sm rounded-full`),n(j,`click`,()=>{m.value+=1,d.value=0,r.value=!0}),c(j,p(`打开定位实验`));let M=e(`div`,i);c(i,M),f(M,`mb-4 flex flex-wrap gap-2`);let N=u(`rue:list:start`),P=u(`rue:list:end`);c(M,N),c(M,P);let F=new Map;l(()=>{F=T({items:_e||[],getKey:(e,t)=>e,elements:F,parent:M,before:P,singleRoot:!0,trackIndex:!1,start:N,renderItem:(t,i,a,s,u)=>{x(g(()=>{let i=o(),a=e(`button`,i);c(i,a),l(()=>{y(a,`key`,String(t))}),y(a,`type`,`button`),l(()=>{f(a,String(`btn btn-sm rounded-full ${_.value===t?`btn-primary`:`btn-outline`}`))}),n(a,`click`,()=>{_.value=t,m.value+=1,d.value=0,r.value=!0});let s=C(a);return c(a,s),l(()=>{v(s,t)}),i}),i,a)}})});let I=e(`div`,i);c(i,I),f(I,`grid min-h-[18rem] place-items-center rounded-[1.7rem] border border-dashed border-base-300/80 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_50%)] p-6`);let L=e(`button`,I);c(I,L);let R=E(L,()=>e=>{D.current=e??void 0});b(()=>{R()}),y(L,`type`,`button`),f(L,`btn btn-primary rounded-full px-6`),n(L,`click`,()=>{h.value+=1}),c(L,p(`已点击 `));let z=C(L);c(L,z),l(()=>{v(z,h.value)}),c(L,p(` 次`));let B=u(`rue:slot:anchor`);return c(i,B),l(()=>{let e=r.value?g(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),l(()=>{let n=S(q,{key:`placement-tour-${m.value}-${_.value}-${d.value}`,open:r.value,current:d.value,placement:_.value,gap:{offset:[12,16],radius:22},mask:{color:`rgba(15, 23, 42, 0.38)`},steps:O,onOpenChange:e=>{r.value=e,e||(d.value=0)},onChange:e=>{d.value=e}});s(()=>x(n,e,t))}),e}):``;s(()=>x(e,i,B))}),i})},De=()=>{let{open:r,current:d,tourSession:m,summaryRef:h,timelineRef:_,approvalRef:v}=w(`useSetup:0:0:dup3`,()=>i(()=>({open:w(`ref:1:22`,()=>a(!1)),current:w(`ref:1:23`,()=>a(0)),tourSession:w(`ref:1:24`,()=>a(0)),summaryRef:w(`useRef:1:25`,()=>t()),timelineRef:w(`useRef:1:26`,()=>t()),approvalRef:w(`useRef:1:27`,()=>t())}))),C=[{target:()=>h.current,title:`把封面和主题一起做强`,description:`默认样式延续 Rue 的轻卡片语言，但你也可以切到 primary，让产品引导更像一个任务流。`,placement:`bottomLeft`,cover:O(`div`,{className:`h-20 rounded-[1.25rem] bg-gradient-to-br from-cyan-300 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续`}},{target:()=>_.current,title:`中间步骤适合解释过程`,description:`当你要穿过多个版块时，指示器和 actionsRender 可以直接融入业务语境。`,placement:`topLeft`,prevButtonProps:{children:`返回`},nextButtonProps:{children:`看审批`}},{target:()=>v.current,title:`最后把业务动作接住`,description:`把完成按钮改成提交、发布、同步都可以，不需要额外封装。`,placement:`left`,nextButtonProps:{children:`提交并结束`}}];return g(t=>{let i=e(`div`,t);f(i,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let a=e(`div`,i);c(i,a),f(a,`mb-4 flex flex-wrap items-center justify-between gap-3`);let w=e(`div`,a);c(a,w);let k=e(`div`,w);c(w,k),f(k,`text-sm font-semibold`),c(k,p(`自定义 indicator 与 actions`));let A=e(`div`,w);c(w,A),f(A,`mt-1 text-sm text-base-content/60`),c(A,p(`这套写法更接近常见分步引导的心智，但视觉和布局还是 Rue 自己的。`));let j=e(`button`,a);c(a,j),y(j,`type`,`button`),f(j,`btn btn-outline btn-sm rounded-full`),n(j,`click`,()=>{m.value+=1,d.value=0,r.value=!0}),c(j,p(`启动主视觉引导`));let M=e(`div`,i);c(i,M);let N=E(M,()=>e=>{h.current=e??void 0});b(()=>{N()}),f(M,`rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let P=e(`div`,M);c(M,P),f(P,`flex flex-wrap items-center justify-between gap-3`);let F=e(`div`,P);c(P,F);let I=e(`div`,F);c(F,I),f(I,`badge badge-outline badge-sm`),c(I,p(`Launch Summary`));let L=e(`div`,F);c(F,L),f(L,`mt-3 text-xl font-semibold`),c(L,p(`One surface for launch, approval and playback`));let R=e(`div`,F);c(F,R),f(R,`mt-2 max-w-xl text-sm text-base-content/60`),c(R,p(`用一个页面完成素材汇总、审批流转、上线窗口对齐和上线后的回放，不再分散在多个工具里。`));let z=e(`div`,P);c(P,z),f(z,`grid h-16 w-16 place-items-center rounded-3xl bg-primary/10 text-primary`);let B=e(`svg`,z);c(z,B),y(B,`viewBox`,`0 0 24 24`),y(B,`fill`,`none`),y(B,`stroke`,`currentColor`),y(B,`strokeWidth`,`1.8`),f(B,`size-8`);let V=e(`path`,B);c(B,V),y(V,`strokeLinecap`,`round`),y(V,`strokeLinejoin`,`round`),y(V,`d`,`m12 3 2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8L12 3Z`);let H=e(`div`,i);c(i,H);let ee=E(H,()=>e=>{_.current=e??void 0});b(()=>{ee()}),f(H,`mt-4 rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let U=e(`div`,H);c(H,U),f(U,`grid gap-3 md:grid-cols-3`);let te=u(`rue:list:start`),W=u(`rue:list:end`);c(U,te),c(U,W);let ne=new Map;l(()=>{ne=T({items:[[`Brief`,`完成背景与目标归纳`],[`Review`,`跨团队确认视觉与文案`],[`Ship`,`统一 CTA 与发布时间窗`]],getKey:(e,t)=>e[0],elements:ne,parent:U,before:W,singleRoot:!0,trackIndex:!1,start:te,renderItem:(t,n,r,i,a)=>{x(g(()=>{let n=o(),r=e(`div`,n);c(n,r),l(()=>{y(r,`key`,String(t[0]))}),f(r,`rounded-[1.2rem] bg-base-200/65 px-4 py-4`);let i=e(`div`,r);c(r,i),f(i,`text-sm font-semibold`);let a=u(`rue:slot:anchor`);c(i,a),l(()=>{let e=t[0];s(()=>x(e,i,a))});let d=e(`div`,r);c(r,d),f(d,`mt-2 text-sm text-base-content/60`);let p=u(`rue:slot:anchor`);return c(d,p),l(()=>{let e=t[1];s(()=>x(e,d,p))}),n}),n,r)}})});let re=e(`div`,i);c(i,re),f(re,`mt-4 flex justify-end`);let G=e(`button`,re);c(re,G);let K=E(G,()=>e=>{v.current=e??void 0});b(()=>{K()}),y(G,`type`,`button`),f(G,`btn btn-primary rounded-full px-5`),c(G,p(`提交审批`));let ie=u(`rue:slot:anchor`);return c(i,ie),l(()=>{let e=r.value?g(()=>{let e=o(),t=u(`rue:component:anchor`);return c(e,t),l(()=>{let n=S(q,{key:`custom-tour-${m.value}-${d.value}-${r.value?`open`:`closed`}`,open:r.value,current:d.value,type:`primary`,styles:Ce,steps:C,indicatorsRender:(e,t)=>D(`div`,{className:`flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/80`,children:[O(`span`,{children:`phase`}),O(`span`,{className:`rounded-full border border-white/20 px-2 py-1 text-white`,children:e+1}),O(`span`,{children:`/`}),O(`span`,{children:t})]}),actionsRender:(e,t)=>D(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[D(`div`,{className:`text-xs uppercase tracking-[0.24em] text-white/70`,children:[`launch guide · step `,t.current+1]}),e]}),onOpenChange:e=>{r.value=e,e||(d.value=0)},onChange:e=>{d.value=e},onFinish:()=>{d.value=0}});s(()=>x(n,e,t))}),e}):``;s(()=>x(e,i,ie))}),i})},Oe=()=>g(t=>{let n=o(),r=u(`rue:component:anchor`);return c(n,r),x(S(A,{children:g(()=>{let t=o(),n=e(`div`,t);c(t,n),f(n,`max-w-none prose prose-sm md:prose-base`);let r=e(`h1`,n);c(n,r),c(r,p(`Tour 漫游引导`));let i=e(`p`,n);c(n,i),f(i,`text-sm mt-3 mb-3`),c(i,p(`Tour 用分步浮层把用户带过关键入口、局部强调和最终动作。Rue 的实现参考了成熟组件库的能力模型，但视觉仍然保持自己的 card、badge 和 button 语言，不直接照搬现成面板样式。`));let a=e(`p`,n);c(n,a),f(a,`text-sm mt-3 mb-3`),c(a,p(`这次补齐的不只是静态外观，而是完整执行逻辑：围绕真实 DOM target 做高亮、自动定位、切步滚动、非模态展示，以及自定义 indicator 和底部 actions。`));let d=e(`h2`,n);c(n,d),c(d,p(`何时使用`));let m=e(`ul`,n);c(n,m);let h=e(`li`,m);c(m,h),c(h,p(`需要把新用户逐步带过核心入口、关键按钮或首次配置流程。`));let g=e(`li`,m);c(m,g),c(g,p(`需要在复杂页面里突出某个局部区域，并配合文案解释当前操作目的。`));let _=e(`li`,m);c(m,_),c(_,p(`需要把产品说明、轻 onboarding 和最终业务动作串成一条连续体验。`));let v=u(`rue:component:anchor`);c(t,v),l(()=>{let e=S(j,{title:`基础引导`,summary:`点击 Basic 后，从 Upload、Save 到更多操作依次弹出讲解。`,tab:pe,preview:we,code:ye});s(()=>x(e,t,v))});let y=u(`rue:component:anchor`);c(t,y),l(()=>{let e=S(j,{title:`欢迎页与非模态`,summary:`展示没有 target 的中心步骤，以及 mask=false 时的轻量引导方式。`,tab:me,preview:Te,code:be});s(()=>x(e,t,y))});let b=u(`rue:component:anchor`);c(t,b),l(()=>{let e=S(j,{title:`Placement 与交互洞口`,summary:`切换 top/right/bottom/left，并验证高亮区默认仍可继续触发目标元素。`,tab:he,preview:Ee,code:xe});s(()=>x(e,t,b))});let C=u(`rue:component:anchor`);c(t,C),l(()=>{let e=S(j,{title:`自定义指示器与动作区`,summary:`通过 primary 主题、cover、indicatorsRender 和 actionsRender 把引导做成更完整的任务流。`,tab:ge,preview:De,code:Se});s(()=>x(e,t,C))});let w=e(`div`,t);c(t,w),f(w,`component-preview not-prose text-base-content my-6 lg:my-12`);let T=e(`h2`,w);c(w,T),f(T,`component-preview-title mt-2 mb-3 text-lg font-semibold`),c(T,p(`# API`));let E=u(`rue:component:anchor`);return c(w,E),l(()=>{let e=S(fe,{rows:ve});s(()=>x(e,w,E))}),t})}),n,r),n});export{Oe as default};
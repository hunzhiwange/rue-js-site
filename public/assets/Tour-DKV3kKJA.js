import{$t as e,Jt as t,Q as n,Rt as r,St as i,Z as a,dt as o,et as s,gt as c,i as l,in as u,it as d,l as f,lt as p,m,n as h,nt as g,o as _,r as v,rn as y,rt as b,t as x,tt as S,vt as C,zt as w}from"./vapor-runtime-DsQWl-IB.js";import{a as T,n as E,t as D}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as O,i as k}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as A}from"./Teleport-u7K6crFD.js";import{r as j}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as M}from"./PreviewBlock-wHSyDiek.js";var N={next:`下一步`,previous:`上一步`,finish:`完成`,close:`关闭引导`},P=16,F=18,I=(...e)=>e.filter(Boolean).join(` `),L=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},R=e=>`${e}px`,z=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=I(e?.[r],t?.[r]);i&&(n[r]=i)}),n},B=(e,t)=>{let n={};return new Set([...Object.keys(e??{}),...Object.keys(t??{})]).forEach(r=>{let i=L(e?.[r],t?.[r]);Object.keys(i).length>0&&(n[r]=i)}),n},V=(e,t,n)=>n<t?t:Math.min(Math.max(e,t),n),H=e=>typeof e==`function`?e():e,ee=e=>typeof e==`function`?e()??null:e??null,U=e=>{let t=e?.offset??8;if(Array.isArray(t))return{horizontal:Math.max(0,t[0]??0),vertical:Math.max(0,t[1]??t[0]??0)};let n=Math.max(0,t);return{horizontal:n,vertical:n}},te=e=>Math.max(0,e?.radius??18),W=e=>e===!1?null:e&&typeof e==`object`?{color:e.color??`rgba(15, 23, 42, 0.46)`,style:e.style}:{color:`rgba(15, 23, 42, 0.46)`,style:void 0},ne=e=>e!==!1,re=e=>typeof e==`object`?e.pointAtCenter!==!1:!0,G=e=>e??`bottom`,K=e=>e===`center`?`center`:e.startsWith(`top`)?`top`:e.startsWith(`bottom`)?`bottom`:e.startsWith(`left`)?`left`:`right`,ie=e=>{switch(e){case`top`:return`bottom`;case`topLeft`:return`bottomLeft`;case`topRight`:return`bottomRight`;case`bottom`:return`top`;case`bottomLeft`:return`topLeft`;case`bottomRight`:return`topRight`;case`left`:return`right`;case`leftTop`:return`rightTop`;case`leftBottom`:return`rightBottom`;case`right`:return`left`;case`rightTop`:return`leftTop`;case`rightBottom`:return`leftBottom`;default:return`center`}},ae=()=>typeof window>`u`||typeof document>`u`?{width:1440,height:900}:{width:document.documentElement.clientWidth||window.innerWidth||1440,height:document.documentElement.clientHeight||window.innerHeight||900},oe=(e,t)=>{if(!e)return null;let n=e.getBoundingClientRect();if(n.width<=0||n.height<=0)return null;let r=ae(),i=U(t),a=te(t),o=V(n.left-i.horizontal,4,r.width-4),s=V(n.top-i.vertical,4,r.height-4),c=V(n.right+i.horizontal,4,r.width-4),l=V(n.bottom+i.vertical,4,r.height-4),u=Math.max(0,c-o),d=Math.max(0,l-s);return{left:o,top:s,width:u,height:d,radius:a,centerX:o+u/2,centerY:s+d/2,right:c,bottom:l}},se=(e,t,n,r)=>{switch(e){case`top`:return{left:t.centerX-n/2,top:t.top-r-F};case`topLeft`:return{left:t.left,top:t.top-r-F};case`topRight`:return{left:t.right-n,top:t.top-r-F};case`bottom`:return{left:t.centerX-n/2,top:t.bottom+F};case`bottomLeft`:return{left:t.left,top:t.bottom+F};case`bottomRight`:return{left:t.right-n,top:t.bottom+F};case`left`:return{left:t.left-n-F,top:t.centerY-r/2};case`leftTop`:return{left:t.left-n-F,top:t.top};case`leftBottom`:return{left:t.left-n-F,top:t.bottom-r};case`right`:return{left:t.right+F,top:t.centerY-r/2};case`rightTop`:return{left:t.right+F,top:t.top};case`rightBottom`:return{left:t.right+F,top:t.bottom-r};default:return{left:t.centerX-n/2,top:t.bottom+F}}},ce=(e,t,n,r,i)=>{switch(K(e)){case`top`:return t.top<P;case`bottom`:return t.top+r>i.height-P;case`left`:return t.left<P;case`right`:return t.left+n>i.width-P;default:return!1}},le=(e,t,n,r)=>{let i=ae();if(!t||e===`center`)return{placement:`center`,left:V((i.width-n)/2,P,i.width-n-P),top:V((i.height-r)/2,P,i.height-r-P)};let a=e,o=se(a,t,n,r);return ce(a,o,n,r,i)&&(a=ie(a),o=se(a,t,n,r)),{placement:a,left:V(o.left,P,i.width-n-P),top:V(o.top,P,i.height-r-P)}},ue=(e,t,n,r,i,a,o)=>{if(!t||e===`center`)return null;let s=V(t.centerX-n-9,24,i-24),c=V(t.centerY-r-9,24,a-24),l=o?void 0:28;switch(K(e)){case`top`:return{left:R(l??s),bottom:`-9px`};case`bottom`:return{left:R(l??s),top:`-9px`};case`left`:return{top:R(l??c),right:`-9px`};case`right`:return{top:R(l??c),left:`-9px`};default:return null}},de=()=>f(e=>{let t=g(`svg`,e);p(t,`viewBox`,`0 0 24 24`),p(t,`fill`,`none`),p(t,`stroke`,`currentColor`),p(t,`strokeWidth`,`1.9`),o(t,`size-4`);let r=g(`path`,t);return n(t,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M6 6l12 12M18 6 6 18`),t}),fe=()=>f(e=>{let t=g(`svg`,e);p(t,`viewBox`,`0 0 24 24`),p(t,`fill`,`none`),p(t,`stroke`,`currentColor`),p(t,`strokeWidth`,`1.8`),o(t,`size-4`);let r=g(`path`,t);n(t,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`m12 3 1.7 4.2L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.8L12 3Z`);let i=g(`path`,t);return n(t,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M5 19h.01M12 21h.01M19 19h.01`),t}),q=i=>{let{steps:a,defaultOpen:d,defaultCurrent:h,placement:b,mask:C,gap:E,arrow:D,type:j,closeIcon:M,disabledInteraction:P,keyboard:F,zIndex:U,scrollIntoViewOptions:te,getPopupContainer:K,locale:ie,indicatorsRender:ae,actionsRender:se,className:ce,style:q,classNames:pe,styles:me,onChange:he,onClose:ge,onFinish:_e,onOpenChange:ve,rest:ye,panelRef:be,rafIdRef:xe,renderVersion:Se,isControlledOpen:Ce,isControlledCurrent:we,uncontrolledOpen:Te,uncontrolledCurrent:Ee,lastDefaultOpen:De,lastDefaultCurrent:Oe,currentOpenRef:ke,currentIndexRef:Ae,panelStyleRef:je,arrowStyleRef:Me,spotlightRef:Ne,placementRef:Pe,mergedLocale:Fe,getTotal:Ie,normalizeCurrentValue:Le,getMergedOpen:Re,getMergedCurrent:ze,getCurrentStep:Be,requestRender:Ve,requestOpenChange:He,requestCurrentChange:Ue,scheduleLayoutSync:We,syncScrollIntoView:Ge,handleClose:Ke,handleMaskClick:qe,handleNext:Je,handlePrev:Ye,total:Xe,currentIndex:Ze,step:J,mergedOpen:Qe}=T(`useSetup:0:0`,()=>u(()=>{let{steps:e=[],defaultOpen:n=!1,defaultCurrent:a=0,placement:o=`bottom`,mask:s=!0,gap:c,arrow:u=!0,type:d=`default`,closeIcon:f,disabledInteraction:p=!1,keyboard:m=!0,zIndex:h=1400,scrollIntoViewOptions:g={block:`center`,inline:`center`,behavior:`smooth`},getPopupContainer:_,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:w,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,...M}=i,P=T(`useRef:1:0`,()=>y()),F=T(`useRef:1:1`,()=>y()),I=T(`ref:1:2`,()=>t(0)),L=typeof i.open==`boolean`,z=typeof i.current==`number`,B=T(`ref:1:3`,()=>t(n)),H=T(`ref:1:4`,()=>t(a)),U=T(`ref:1:5`,()=>t(!!n)),te=T(`ref:1:6`,()=>t(Math.max(0,Math.floor(a)))),W=T(`ref:1:7`,()=>t(L?!!i.open:n)),K=T(`ref:1:8`,()=>t(z?Math.max(0,Math.floor(i.current)):Math.max(0,Math.floor(a)))),ie=T(`ref:1:9`,()=>t({visibility:`hidden`,opacity:0})),ae=T(`ref:1:10`,()=>t(null)),se=T(`ref:1:11`,()=>t(null)),ce=T(`ref:1:12`,()=>t(G(o))),de={...N,...b},fe=()=>e.length,q=e=>{let t=fe();return t<=0?0:V(Math.floor(e),0,t-1)},pe=()=>L?!!i.open:W.value,me=()=>q(z?i.current:K.value),he=()=>e[me()],ge=()=>{I.value+=1},_e=e=>{W.value=e,L||(B.value=e),ge(),j&&j(e)},ve=e=>{let t=fe();if(t<=0)return;let n=V(e,0,t-1);K.value=n,z||(H.value=n),ge(),O&&O(n)},ye=()=>{typeof window>`u`||(F.current!=null&&window.cancelAnimationFrame(F.current),F.current=window.requestAnimationFrame(()=>{let e=P.current??document.querySelector(`[data-rue-tour-panel="true"]`),t=he();if(!pe()||!e||!t){ie.value={visibility:`hidden`,opacity:0},se.value=null,ae.value=null,ge();return}let n=oe(ee(t.target),c),r=e.getBoundingClientRect(),i=le(G(t.placement??o),n,Math.max(r.width,320),Math.max(r.height,1)),a=ne(t.arrow??u),s=re(t.arrow??u);se.value=n,ce.value=i.placement,ie.value={left:R(i.left),top:R(i.top),opacity:1,visibility:`visible`},ae.value=a?ue(i.placement,n,i.left,i.top,r.width,r.height,s):null,ge()}))},be=()=>{let e=he();if(!pe()||!e||typeof window>`u`)return;let t=ee(e.target),n=e.scrollIntoViewOptions??g;!t||n===!1||typeof t.scrollIntoView!=`function`||window.requestAnimationFrame(()=>{t.scrollIntoView(n===!0?{block:`center`,inline:`center`,behavior:`smooth`}:n)})},xe=()=>{he()?.onClose?.(),_e(!1),k&&k()},Se=()=>{xe()},Ce=()=>{let e=he();if(!e)return;e.nextButtonProps?.onClick?.();let t=me();if(t>=fe()-1){A&&A(),_e(!1);return}ve(t+1)},we=()=>{let e=he();e&&(e.prevButtonProps?.onClick?.(),ve(me()-1))};v(()=>{if(typeof window>`u`)return;let e=e=>{if(!(!pe()||!m)){if(e.key===`Escape`){e.preventDefault(),xe();return}if(e.key===`ArrowRight`){e.preventDefault(),Ce();return}e.key===`ArrowLeft`&&(e.preventDefault(),we())}},t=()=>{ye()};window.addEventListener(`resize`,t),window.addEventListener(`scroll`,t,!0),window.addEventListener(`keydown`,e),be(),ye(),l(()=>{window.removeEventListener(`resize`,t),window.removeEventListener(`scroll`,t,!0),window.removeEventListener(`keydown`,e),F.current!=null&&window.cancelAnimationFrame(F.current)})}),T(`watch:1:13`,()=>r(()=>i.open,e=>{typeof e==`boolean`&&(W.value=e)},{immediate:!0})),T(`watch:1:14`,()=>r(()=>i.current,e=>{typeof e==`number`&&(K.value=q(e))},{immediate:!0})),T(`watch:1:15`,()=>r(()=>e.length,()=>{K.value=q(K.value)},{immediate:!0})),T(`watch:1:16`,()=>r(()=>[pe(),me(),e.length,o,c?.radius??-1,Array.isArray(c?.offset)?`${c?.offset[0]??0}:${c?.offset[1]??0}`:c?.offset??-1],()=>{be(),ye()},{immediate:!0})),T(`watch:1:17`,()=>r(()=>n,e=>{let t=!!e;!L&&t!==U.value&&(U.value=t,B.value=t,W.value=t)})),T(`watch:1:18`,()=>r(()=>a,e=>{let t=Math.max(0,Math.floor(e));!z&&t!==te.value&&(te.value=t,H.value=t,K.value=q(t))}));let Te=e.length,Ee=(I.value,q(z?i.current:K.value));return{steps:e,defaultOpen:n,defaultCurrent:a,placement:o,mask:s,gap:c,arrow:u,type:d,closeIcon:f,disabledInteraction:p,keyboard:m,zIndex:h,scrollIntoViewOptions:g,getPopupContainer:_,locale:b,indicatorsRender:x,actionsRender:S,className:C,style:w,classNames:E,styles:D,onChange:O,onClose:k,onFinish:A,onOpenChange:j,rest:M,panelRef:P,rafIdRef:F,renderVersion:I,isControlledOpen:L,isControlledCurrent:z,uncontrolledOpen:B,uncontrolledCurrent:H,lastDefaultOpen:U,lastDefaultCurrent:te,currentOpenRef:W,currentIndexRef:K,panelStyleRef:ie,arrowStyleRef:ae,spotlightRef:se,placementRef:ce,mergedLocale:de,getTotal:fe,normalizeCurrentValue:q,getMergedOpen:pe,getMergedCurrent:me,getCurrentStep:he,requestRender:ge,requestOpenChange:_e,requestCurrentChange:ve,scheduleLayoutSync:ye,syncScrollIntoView:be,handleClose:xe,handleMaskClick:Se,handleNext:Ce,handlePrev:we,total:Te,currentIndex:Ee,step:Te>0?e[Ee]:void 0,mergedOpen:(I.value,L?!!i.open:W.value)}}));if(!Qe||!J||Xe===0)return null;let Y=W(J.mask??C),X=J.type??j,$e={...Fe,...J.locale},Z=z(pe,J.classNames),Q=B(me,J.styles),et=oe(ee(J.target),E),tt=le(G(J.placement??b),et,368,225),nt=je.value.visibility===`visible`?je.value:{left:R(tt.left),top:R(tt.top),opacity:1,visibility:`visible`},rt=je.value.visibility===`visible`?Pe.value:tt.placement,it=Ne.value,$=it&&it.width>0&&it.height>0?it:et,at=!!$,ot=J.indicatorsRender??ae,st=J.actionsRender??se,ct=J.closeIcon??M??k(de,{}),lt=O(`div`,{...ye,className:I(`pointer-events-none fixed inset-0`,Z.root,ce),style:L(Q.root,q,{zIndex:U}),"data-rue-tour":`true`,"data-rue-tour-placement":rt,"data-rue-tour-version":String(Se.value),"data-rue-tour-current":String(we?i.current:Ae.value),"data-rue-tour-total":String(Xe),"data-rue-tour-open":String(Ce?!!i.open:ke.value),children:[Y?k(m,{children:at?O(m,{children:[k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 top-0`,Z.mask),style:L(Q.mask,Y.style,{height:R($.top),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`top`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:`0px`,top:R($.top),width:R($.left),height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`left`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed`,Z.mask),style:L(Q.mask,Y.style,{left:R($.right),top:R($.top),width:`calc(100vw - ${$.right}px)`,height:R($.height),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`right`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-x-0 bottom-0`,Z.mask),style:L(Q.mask,Y.style,{top:R($.bottom),background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`bottom`}),k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-none fixed border border-primary/25 bg-primary/10 shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_20px_60px_-36px_rgba(59,130,246,0.75)] backdrop-blur-[1px]`,Z.spotlight),style:L(Q.spotlight,{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)}),"data-rue-tour-spotlight":`true`}),P?k(`div`,{"aria-hidden":`true`,className:`pointer-events-auto fixed`,style:{left:R($.left),top:R($.top),width:R($.width),height:R($.height),borderRadius:R($.radius)},"data-rue-tour-blocker":`true`}):null]}):k(`div`,{"aria-hidden":`true`,className:I(`pointer-events-auto fixed inset-0`,Z.mask),style:L(Q.mask,Y.style,{background:Y.color}),onClick:qe,"data-rue-tour-mask":`true`,"data-rue-tour-mask-part":`full`})}):null,O(`div`,{ref:e=>{be.current=e??void 0,e&&We()},role:`dialog`,"aria-modal":Y?`true`:`false`,className:I(`pointer-events-auto fixed w-[min(92vw,23rem)] rounded-[14px] border px-0 py-0 transition duration-200 ease-out md:w-[23rem]`,X===`primary`?`border-primary/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.98),rgba(8,78,119,0.96))] text-primary-content shadow-[0_28px_90px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl`:`border-black/[0.06] bg-white text-[#262626] shadow-[0_12px_32px_rgba(0,0,0,0.18),0_3px_10px_rgba(0,0,0,0.12)]`,Z.panel,J.className),style:L(Q.panel,J.style,nt),"data-rue-tour-panel":`true`,children:[Me.value?k(`span`,{"aria-hidden":`true`,className:I(`absolute size-[14px] rotate-45 border`,X===`primary`?`border-primary/20 bg-sky-900 shadow-[8px_8px_18px_-14px_rgba(15,23,42,0.75)]`:`border-black/[0.06] bg-white shadow-[8px_8px_18px_-14px_rgba(0,0,0,0.28)]`,Z.arrow),style:L(Q.arrow,Me.value),"data-rue-tour-arrow":`true`}):null,O(`div`,{className:I(`relative px-6 pb-5 pt-5`,Z.section),style:Q.section,"data-rue-tour-section":`true`,children:[k(`button`,{type:`button`,"aria-label":String($e.close),className:I(`absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full transition`,X===`primary`?`text-primary-content/80 hover:bg-white/10 hover:text-primary-content`:`text-black/35 hover:bg-black/[0.04] hover:text-black/60`,Z.close),style:Q.close,onClick:Ke,"data-rue-tour-close":`true`,children:ct}),J.cover?k(`div`,{className:I(`mb-5 overflow-hidden rounded-[12px]`,Z.cover),style:Q.cover,"data-rue-tour-cover":`true`,children:J.cover}):null,O(`div`,{className:I(`pr-11`,Z.body),style:Q.body,"data-rue-tour-body":`true`,children:[O(`div`,{className:I(`mb-3 inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium`,X===`primary`?`bg-white/10 text-primary-content/70`:`border border-black/[0.06] bg-[#fafafa] text-[#8c8c8c]`,Z.meta),style:Q.meta,"data-rue-tour-meta":`true`,children:[k(fe,{}),k(`span`,{children:`Tour`}),O(`span`,{className:X===`primary`?`text-primary-content/50`:`text-base-content/40`,children:[String(Ze+1).padStart(2,`0`),` / `,String(Xe).padStart(2,`0`)]})]}),k(`div`,{className:I(``,Z.header),style:Q.header,"data-rue-tour-header":`true`,children:J.title?k(`div`,{className:I(`text-[1.08rem] font-semibold leading-7 tracking-[0.01em]`,Z.title),style:Q.title,"data-rue-tour-title":`true`,children:J.title}):null}),J.description?k(`div`,{className:I(`mt-3 text-[15px] leading-7`,X===`primary`?`text-primary-content/80`:`text-[#595959]`,Z.description),style:Q.description,"data-rue-tour-description":`true`,children:J.description}):null]}),(()=>{let e=ot?ot(Ze,Xe):k(`div`,{className:I(`flex flex-wrap items-center gap-2.5`,Z.indicators),style:Q.indicators,"data-rue-tour-indicators":`true`,children:Array.from({length:Xe}).map((e,t)=>f(e=>{let n=g(`span`,e);return w(()=>{p(n,`key`,String(`indicator-${t}`))}),w(()=>{o(n,I(`block size-2.5 rounded-full transition-all duration-200`,t===Ze?X===`primary`?`bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.18)]`:`bg-[#1677ff] shadow-[0_0_0_2px_rgba(22,119,255,0.14)]`:X===`primary`?`bg-white/30`:`bg-black/12`,Z.indicator))}),w(()=>{let e=Q.indicator;c(n,e)}),w(()=>{p(n,`data-rue-tour-indicator`,String(t===Ze?`active`:`inactive`))}),w(()=>{p(n,`data-rue-tour-indicator-index`,String(String(t)))}),n}))}),t=Ze===0||J.prevButtonProps?.disabled,n=!!J.nextButtonProps?.disabled,r=O(`div`,{className:I(`flex flex-wrap items-center justify-between gap-3`,Z.actions),style:Q.actions,"data-rue-tour-actions":`true`,children:[e,O(`div`,{className:I(`flex items-center gap-2.5`,Z.buttons),style:Q.buttons,"data-rue-tour-buttons":`true`,children:[k(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[84px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-white/18 bg-transparent text-primary-content/78 hover:bg-white/10 hover:text-primary-content disabled:border-white/10 disabled:text-white/28`:`border-black/[0.08] bg-white text-[#595959] hover:border-black/[0.12] hover:bg-[#fafafa] disabled:border-black/[0.06] disabled:bg-[#fafafa] disabled:text-black/25`,Z.prevButton,J.prevButtonProps?.className),style:L(Q.prevButton,J.prevButtonProps?.style),disabled:t,onClick:Ye,"data-rue-tour-prev":`true`,children:J.prevButtonProps?.children??$e.previous}),k(`button`,{type:`button`,className:I(`inline-flex h-10 min-w-[96px] items-center justify-center rounded-[10px] border px-4 text-[14px] font-medium transition disabled:cursor-not-allowed`,X===`primary`?`border-0 bg-white text-sky-900 shadow-[0_2px_0_rgba(255,255,255,0.08)] hover:bg-sky-50 disabled:bg-white/40 disabled:text-sky-950/40`:`border-[#1677ff] bg-[#1677ff] text-white shadow-[0_2px_0_rgba(5,145,255,0.12)] hover:border-[#4096ff] hover:bg-[#4096ff] disabled:border-[#91caff] disabled:bg-[#91caff]`,Z.nextButton,J.nextButtonProps?.className),style:L(Q.nextButton,J.nextButtonProps?.style),disabled:n,onClick:Je,"data-rue-tour-next":Ze===Xe-1?`finish`:`next`,children:J.nextButtonProps?.children??(Ze===Xe-1?$e.finish:$e.next)})]})]}),i=st?st(r,{current:Ze,total:Xe}):r;return i?k(`div`,{className:I(`mt-5 border-t pt-4`,X===`primary`?`border-white/10`:`border-black/[0.06]`,Z.footer),style:Q.footer,"data-rue-tour-footer":`true`,children:i}):null})()]})]})]}),ut=H(K);return ut===!1||ut==null?lt:f(t=>{let r=S(),i=s(`rue:component:anchor`);return n(r,i),w(()=>{let t=x(A,{to:ut,children:lt});e(()=>_(t,r,i))}),r})},pe=t=>f(r=>{let i=g(`div`,r);o(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let a=g(`table`,i);n(i,a),o(a,`table table-zebra`);let c=g(`thead`,a);n(a,c);let l=g(`tr`,c);n(c,l);let u=g(`th`,l);n(l,u),n(u,b(`属性`));let d=g(`th`,l);n(l,d),n(d,b(`说明`));let m=g(`th`,l);n(l,m),n(m,b(`类型`));let h=g(`th`,l);n(l,h),n(h,b(`默认值`));let v=g(`tbody`,a);n(a,v);let y=s(`rue:list:start`),x=s(`rue:list:end`);n(v,y),n(v,x);let C=new Map;return w(()=>{C=E({items:t.rows||[],getKey:(e,t)=>e.prop,elements:C,parent:v,before:x,singleRoot:!0,trackIndex:!1,start:y,renderItem:(t,r,i,a,o)=>{_(f(()=>{let r=S(),i=g(`tr`,r);n(r,i),w(()=>{p(i,`key`,String(t.prop))});let a=g(`td`,i);n(i,a);let o=g(`code`,a);n(a,o);let c=s(`rue:slot:anchor`);n(o,c),w(()=>{let n=t.prop;e(()=>_(n,o,c))});let l=g(`td`,i);n(i,l);let u=s(`rue:slot:anchor`);n(l,u),w(()=>{let n=t.description;e(()=>_(n,l,u))});let d=g(`td`,i);n(i,d);let f=g(`code`,d);n(d,f);let m=s(`rue:slot:anchor`);n(f,m),w(()=>{let n=t.type;e(()=>_(n,f,m))});let h=g(`td`,i);n(i,h);let v=g(`code`,h);n(h,v);let y=s(`rue:slot:anchor`);return n(v,y),w(()=>{let n=t.defaultValue;e(()=>_(n,v,y))}),r}),r,i)}})}),i}),me=T(`ref:1:0`,()=>t(`preview`)),he=T(`ref:1:1`,()=>t(`preview`)),ge=T(`ref:1:2`,()=>t(`preview`)),_e=T(`ref:1:3`,()=>t(`preview`)),ve=[`top`,`right`,`bottom`,`left`],ye=[{prop:`steps`,description:`引导步骤数组，每步可独立配置 target、placement、mask、cover 与按钮文案。`,type:`TourStepProps[]`,defaultValue:`[]`},{prop:`open / defaultOpen`,description:`受控或非受控地打开引导浮层。`,type:`boolean`,defaultValue:`false`},{prop:`current / defaultCurrent`,description:`受控或非受控地指定当前步骤索引。`,type:`number`,defaultValue:`0`},{prop:`placement`,description:`全局浮层位置，单步可继续覆盖。`,type:`TourPlacement`,defaultValue:`bottom`},{prop:`mask / disabledInteraction`,description:`控制遮罩是否启用，以及高亮区是否允许继续交互。`,type:`boolean | { color?: string; style?: object } / boolean`,defaultValue:`true / false`},{prop:`gap`,description:`调整高亮区与目标的间距和圆角，适合按钮、卡片、输入框等不同密度场景。`,type:`{ offset?: number | [number, number]; radius?: number }`,defaultValue:`{ offset: 8, radius: 18 }`},{prop:`arrow / closeIcon / type`,description:`配置箭头、关闭按钮与主视觉主题。`,type:`boolean | object / any / default | primary`,defaultValue:`true / x / default`},{prop:`indicatorsRender / actionsRender`,description:`自定义底部步骤指示器与整体操作区。`,type:`(current, total) => any / (originNode, info) => any`,defaultValue:`-`},{prop:`scrollIntoViewOptions`,description:`步骤切换时自动把目标滚动进视口，可关闭或传入原生配置。`,type:`boolean | ScrollIntoViewOptions`,defaultValue:`{ block: center, inline: center, behavior: smooth }`},{prop:`onChange / onClose / onFinish / onOpenChange`,description:`监听步骤变化、关闭、完成和打开状态变化。`,type:`function`,defaultValue:`-`},{prop:`classNames / styles`,description:`按语义节点扩展 root、mask、spotlight、panel、footer、indicator 等样式。`,type:`object`,defaultValue:`-`}],be=`import { ref, useRef } from '@rue-js/rue'
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
`,we={panel:{width:`min(92vw, 21rem)`,maxHeight:`calc(100vh - 1.5rem)`},section:{maxHeight:`calc(100vh - 1.5rem)`,overflowY:`auto`,padding:`16px`},cover:{marginBottom:`12px`},meta:{color:`rgba(255,255,255,0.82)`,background:`rgba(255,255,255,0.12)`},title:{color:`#fff`,fontSize:`1rem`,lineHeight:`1.5rem`},description:{color:`rgba(255,255,255,0.88)`,marginTop:`10px`,fontSize:`14px`,lineHeight:`1.5rem`},footer:{marginTop:`14px`,paddingTop:`12px`,borderColor:`rgba(255,255,255,0.14)`},actions:{gap:`10px`},buttons:{gap:`8px`},prevButton:{minWidth:`72px`,height:`36px`,color:`#fff`,borderColor:`rgba(255,255,255,0.22)`},nextButton:{minWidth:`88px`,height:`36px`}},Te=()=>{let{tourVisible:r,current:c,tourSession:l,note:m,uploadRef:v,saveRef:E,moreRef:O,steps:k,startTour:A}=T(`useSetup:0:0`,()=>u(()=>{let e=T(`ref:1:4`,()=>t(!1)),n=T(`ref:1:5`,()=>t(0)),r=T(`ref:1:6`,()=>t(0)),a=T(`ref:1:7`,()=>t(`点击 Basic 按钮后弹出引导`)),o=T(`useRef:1:8`,()=>y()),s=T(`useRef:1:9`,()=>y()),c=T(`useRef:1:10`,()=>y());return{tourVisible:e,current:n,tourSession:r,note:a,uploadRef:o,saveRef:s,moreRef:c,steps:T(`computed:1:11`,()=>i(()=>[{target:()=>o.current??null,title:`Upload`,description:`Bring files into the workspace first.`,placement:`top`},{target:()=>s.current??null,title:`Save`,description:`Save your changes.`,placement:`top`},{target:()=>c.current??null,title:`More`,description:`Open additional actions from here.`,placement:`left`,nextButtonProps:{children:`完成引导`}}])),startTour:()=>{r.value+=1,n.value=0,e.value=!0,a.value=`正在查看 Upload`}}}));return f(t=>{let i=g(`div`,t);o(i,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_30px_90px_-55px_rgba(15,23,42,0.55)]`);let u=g(`div`,i);n(i,u),o(u,`mb-6 text-[2.25rem] font-semibold tracking-tight text-base-content md:text-[2.7rem]`),n(u,b(`代码演示`));let y=g(`div`,i);n(i,y),o(y,`mb-5 flex flex-wrap items-center gap-3`);let T=g(`button`,y);n(y,T),p(T,`type`,`button`),o(T,`btn btn-primary rounded-2xl px-5`),a(T,`click`,A),n(T,b(`Basic`));let j=g(`button`,y);n(y,j),p(j,`type`,`button`),o(j,`btn btn-ghost rounded-2xl px-4`),a(j,`click`,()=>{c.value=0,r.value=!1,m.value=`基础引导已重置`}),n(j,b(`重置`));let M=g(`span`,y);n(y,M),o(M,`text-sm text-base-content/60`);let N=d(M);n(M,N),w(()=>{C(N,m.value)});let P=g(`div`,i);n(i,P),o(P,`rounded-[1.7rem] border border-base-300/70 bg-base-100/82 p-6 shadow-[0_22px_60px_-48px_rgba(15,23,42,0.6)]`);let F=g(`div`,P);n(P,F),o(F,`rounded-[1.5rem] border border-base-300/70 bg-base-100 p-5`);let I=g(`div`,F);n(F,I),o(I,`mb-4 flex flex-wrap items-center justify-between gap-3`);let L=g(`div`,I);n(I,L);let R=g(`div`,L);n(L,R),o(R,`text-sm font-semibold text-base-content`),n(R,b(`Action Bar`));let z=g(`div`,L);n(L,z),o(z,`mt-1 text-sm text-base-content/55`),n(z,b(`点击 Basic 后，会依次讲解 Upload、Save 和更多操作。`));let B=g(`span`,I);n(I,B),o(B,`badge badge-outline badge-sm px-3 py-3`),n(B,b(`Code 示例`));let V=g(`div`,F);n(F,V),o(V,`flex flex-wrap items-center gap-3`);let H=g(`button`,V);n(V,H);let ee=D(H,()=>e=>{v.current=e??void 0});h(()=>{ee()}),p(H,`data-basic-tour-target`,`upload`),p(H,`type`,`button`),o(H,`btn btn-outline rounded-2xl px-6`),n(H,b(`Upload`));let U=g(`button`,V);n(V,U);let te=D(U,()=>e=>{E.current=e??void 0});h(()=>{te()}),p(U,`data-basic-tour-target`,`save`),p(U,`type`,`button`),o(U,`btn btn-primary rounded-2xl px-7`),n(U,b(`Save`));let W=g(`button`,V);n(V,W);let ne=D(W,()=>e=>{O.current=e??void 0});h(()=>{ne()}),p(W,`data-basic-tour-target`,`more`),p(W,`type`,`button`),p(W,`aria-label`,`More actions`),o(W,`btn btn-outline rounded-2xl px-5`),n(W,b(`More`));let re=s(`rue:slot:anchor`);return n(i,re),w(()=>{let t=r.value?f(()=>{let t=S(),i=s(`rue:component:anchor`);return n(t,i),w(()=>{let n=x(q,{key:`basic-tour-${l.value}-${c.value}-${r.value?`open`:`closed`}`,open:r.value,current:c.value,steps:k.get(),gap:{offset:[10,14],radius:18},onOpenChange:e=>{r.value=e,e||(c.value=0)},onChange:e=>{c.value=e,m.value=`正在查看 ${k.get()[e]?.title??`第 ${e+1} 步`}`},onClose:()=>{m.value=`基础引导已关闭`},onFinish:()=>{c.value=0,m.value=`基础引导已完成`}});e(()=>_(n,t,i))}),t}):``;e(()=>_(t,i,re))}),i})},Ee=()=>{let{open:r,current:c,tourSession:l,heroRef:d,metricsRef:m,steps:v}=T(`useSetup:0:0:dup1`,()=>u(()=>{let e=T(`ref:1:12`,()=>t(!1)),n=T(`ref:1:13`,()=>t(0)),r=T(`ref:1:14`,()=>t(0)),a=T(`useRef:1:15`,()=>y()),o=T(`useRef:1:16`,()=>y());return{open:e,current:n,tourSession:r,heroRef:a,metricsRef:o,steps:T(`computed:1:17`,()=>i(()=>[{placement:`center`,title:`欢迎来到 Rue Tour`,description:`第一步不绑定 target，会自动居中显示。适合首访说明、版本更新和整页 onboarding。`,cover:k(`div`,{className:`h-28 rounded-[1.25rem] bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续看页面`}},{target:()=>a.current,title:`非模态说明更适合轻引导`,description:`这里关闭了遮罩，用户仍然可以浏览内容，不会被强行打断。`,placement:`bottomRight`},{target:()=>o.current,title:`局部强调也能单独覆盖 placement`,description:`同一套 Tour 可以混合 center 步骤与 target 步骤。`,placement:`top`,nextButtonProps:{children:`知道了`}}]))}}));return f(t=>{let i=g(`div`,t);o(i,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let u=g(`div`,i);n(i,u),o(u,`mb-4 flex flex-wrap items-center justify-between gap-3`);let y=g(`div`,u);n(u,y);let C=g(`div`,y);n(y,C),o(C,`text-sm font-semibold`),n(C,b(`欢迎页 + 非模态引导`));let T=g(`div`,y);n(y,T),o(T,`mt-1 text-sm text-base-content/60`),n(T,b(`适合把版本亮点和页面主内容穿在同一条体验线上。`));let O=g(`button`,u);n(u,O),p(O,`type`,`button`),o(O,`btn btn-outline btn-sm rounded-full`),a(O,`click`,()=>{l.value+=1,c.value=0,r.value=!0}),n(O,b(`打开欢迎引导`));let k=g(`div`,i);n(i,k);let A=D(k,()=>e=>{d.current=e??void 0});h(()=>{A()}),o(k,`rounded-[1.7rem] bg-gradient-to-br from-sky-600 via-cyan-600 to-teal-500 p-6 text-white`);let j=g(`div`,k);n(k,j),o(j,`badge badge-sm border-0 bg-white/15 text-white`),n(j,b(`Release Note`));let M=g(`div`,k);n(k,M),o(M,`mt-4 text-2xl font-semibold`),n(M,b(`Shipping cockpit for product operations`));let N=g(`div`,k);n(k,N),o(N,`mt-2 max-w-xl text-sm text-white/75`),n(N,b(`把素材、上线窗口、审批节点和回放笔记收进同一块工作区，不必在多个页面之间反复跳转。`));let P=g(`div`,i);n(i,P);let F=D(P,()=>e=>{m.current=e??void 0});h(()=>{F()}),o(P,`mt-4 grid gap-4 md:grid-cols-3`);let I=s(`rue:list:start`),L=s(`rue:list:end`);n(P,I),n(P,L);let R=new Map;w(()=>{R=E({items:[[`Launches`,`12`],[`Reviews`,`5`],[`Pending`,`2`]],getKey:(e,t)=>e[0],elements:R,parent:P,before:L,singleRoot:!0,trackIndex:!1,start:I,renderItem:(t,r,i,a,c)=>{_(f(()=>{let r=S(),i=g(`div`,r);n(r,i),w(()=>{p(i,`key`,String(t[0]))}),o(i,`rounded-[1.4rem] border border-base-300/70 bg-base-100/80 p-4`);let a=g(`div`,i);n(i,a),o(a,`text-sm text-base-content/55`);let c=s(`rue:slot:anchor`);n(a,c),w(()=>{let n=t[0];e(()=>_(n,a,c))});let l=g(`div`,i);n(i,l),o(l,`mt-2 text-3xl font-semibold`);let u=s(`rue:slot:anchor`);return n(l,u),w(()=>{let n=t[1];e(()=>_(n,l,u))}),r}),r,i)}})});let z=s(`rue:slot:anchor`);return n(i,z),w(()=>{let t=r.value?f(()=>{let t=S(),i=s(`rue:component:anchor`);return n(t,i),w(()=>{let n=x(q,{key:`welcome-tour-${l.value}-${c.value}-${r.value?`open`:`closed`}`,open:r.value,current:c.value,mask:!1,steps:v.get(),onOpenChange:e=>{r.value=e,e||(c.value=0)},onChange:e=>{c.value=e},onFinish:()=>{c.value=0}});e(()=>_(n,t,i))}),t}):``;e(()=>_(t,i,z))}),i})},De=()=>{let{open:r,current:c,tourSession:l,tapCount:m,activePlacement:v,anchorRef:O,steps:k}=T(`useSetup:0:0:dup2`,()=>u(()=>{let e=T(`ref:1:18`,()=>t(!1)),n=T(`ref:1:19`,()=>t(0)),r=T(`ref:1:20`,()=>t(0)),a=T(`ref:1:21`,()=>t(0)),o=T(`ref:1:22`,()=>t(`right`)),s=T(`useRef:1:23`,()=>y());return{open:e,current:n,tourSession:r,tapCount:a,activePlacement:o,anchorRef:s,steps:T(`computed:1:24`,()=>i(()=>[{target:()=>s.current,title:`高亮区默认仍可点击`,description:`disabledInteraction 默认为 false，所以聚焦区域内的按钮还能继续触发业务动作。`}]))}}));return f(t=>{let i=g(`div`,t);o(i,`rounded-[2rem] border border-base-300/70 bg-gradient-to-br from-base-100 via-base-100 to-base-200/45 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let u=g(`div`,i);n(i,u),o(u,`mb-4 flex flex-wrap items-center justify-between gap-3`);let y=g(`div`,u);n(u,y);let T=g(`div`,y);n(y,T),o(T,`text-sm font-semibold`),n(T,b(`Placement 与高亮区实验`));let A=g(`div`,y);n(y,A),o(A,`mt-1 text-sm text-base-content/60`),n(A,b(`切换浮层方向时，目标按钮仍然可以在洞口区域被点击。`));let j=g(`button`,u);n(u,j),p(j,`type`,`button`),o(j,`btn btn-outline btn-sm rounded-full`),a(j,`click`,()=>{l.value+=1,c.value=0,r.value=!0}),n(j,b(`打开定位实验`));let M=g(`div`,i);n(i,M),o(M,`mb-4 flex flex-wrap gap-2`);let N=s(`rue:list:start`),P=s(`rue:list:end`);n(M,N),n(M,P);let F=new Map;w(()=>{F=E({items:ve||[],getKey:(e,t)=>e,elements:F,parent:M,before:P,singleRoot:!0,trackIndex:!1,start:N,renderItem:(e,t,i,s,u)=>{_(f(()=>{let t=S(),i=g(`button`,t);n(t,i),w(()=>{p(i,`key`,String(e))}),p(i,`type`,`button`),w(()=>{o(i,`btn btn-sm rounded-full ${v.value===e?`btn-primary`:`btn-outline`}`)}),a(i,`click`,()=>{v.value=e,l.value+=1,c.value=0,r.value=!0});let s=d(i);return n(i,s),w(()=>{C(s,e)}),t}),t,i)}})});let I=g(`div`,i);n(i,I),o(I,`grid min-h-[18rem] place-items-center rounded-[1.7rem] border border-dashed border-base-300/80 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.12),transparent_50%)] p-6`);let L=g(`button`,I);n(I,L);let R=D(L,()=>e=>{O.current=e??void 0});h(()=>{R()}),p(L,`type`,`button`),o(L,`btn btn-primary rounded-full px-6`),a(L,`click`,()=>{m.value+=1}),n(L,b(`已点击 `));let z=d(L);n(L,z),w(()=>{C(z,m.value)}),n(L,b(` 次`));let B=s(`rue:slot:anchor`);return n(i,B),w(()=>{let t=r.value?f(()=>{let t=S(),i=s(`rue:component:anchor`);return n(t,i),w(()=>{let n=x(q,{key:`placement-tour-${l.value}-${v.value}-${c.value}`,open:r.value,current:c.value,placement:v.value,gap:{offset:[12,16],radius:22},mask:{color:`rgba(15, 23, 42, 0.38)`},steps:k.get(),onOpenChange:e=>{r.value=e,e||(c.value=0)},onChange:e=>{c.value=e}});e(()=>_(n,t,i))}),t}):``;e(()=>_(t,i,B))}),i})},Oe=()=>{let{open:r,current:c,tourSession:l,summaryRef:d,timelineRef:m,approvalRef:v,steps:C}=T(`useSetup:0:0:dup3`,()=>u(()=>{let e=T(`ref:1:25`,()=>t(!1)),n=T(`ref:1:26`,()=>t(0)),r=T(`ref:1:27`,()=>t(0)),a=T(`useRef:1:28`,()=>y()),o=T(`useRef:1:29`,()=>y()),s=T(`useRef:1:30`,()=>y());return{open:e,current:n,tourSession:r,summaryRef:a,timelineRef:o,approvalRef:s,steps:T(`computed:1:31`,()=>i(()=>[{target:()=>a.current,title:`把封面和主题一起做强`,description:`默认样式使用 Rue 的轻卡片语言，但你也可以切到 primary，让产品引导更像一个任务流。`,placement:`bottomLeft`,cover:k(`div`,{className:`h-20 rounded-[1.25rem] bg-gradient-to-br from-cyan-300 via-sky-500 to-indigo-700`}),nextButtonProps:{children:`继续`}},{target:()=>o.current,title:`中间步骤适合解释过程`,description:`当你要穿过多个版块时，指示器和 actionsRender 可以直接融入业务语境。`,placement:`topLeft`,prevButtonProps:{children:`返回`},nextButtonProps:{children:`看审批`}},{target:()=>s.current,title:`最后把业务动作接住`,description:`把完成按钮改成提交、发布、同步都可以，不需要额外封装。`,placement:`left`,nextButtonProps:{children:`提交并结束`}}]))}}));return f(t=>{let i=g(`div`,t);o(i,`rounded-[2rem] border border-base-300/70 bg-base-100 p-5 shadow-[0_24px_80px_-50px_rgba(15,23,42,0.55)]`);let u=g(`div`,i);n(i,u),o(u,`mb-4 flex flex-wrap items-center justify-between gap-3`);let y=g(`div`,u);n(u,y);let T=g(`div`,y);n(y,T),o(T,`text-sm font-semibold`),n(T,b(`自定义 indicator 与 actions`));let A=g(`div`,y);n(y,A),o(A,`mt-1 text-sm text-base-content/60`),n(A,b(`这套写法更接近常见分步引导的心智，但视觉和布局还是 Rue 自己的。`));let j=g(`button`,u);n(u,j),p(j,`type`,`button`),o(j,`btn btn-outline btn-sm rounded-full`),a(j,`click`,()=>{l.value+=1,c.value=0,r.value=!0}),n(j,b(`启动主视觉引导`));let M=g(`div`,i);n(i,M);let N=D(M,()=>e=>{d.current=e??void 0});h(()=>{N()}),o(M,`rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let P=g(`div`,M);n(M,P),o(P,`flex flex-wrap items-center justify-between gap-3`);let F=g(`div`,P);n(P,F);let I=g(`div`,F);n(F,I),o(I,`badge badge-outline badge-sm`),n(I,b(`Launch Summary`));let L=g(`div`,F);n(F,L),o(L,`mt-3 text-xl font-semibold`),n(L,b(`One surface for launch, approval and playback`));let R=g(`div`,F);n(F,R),o(R,`mt-2 max-w-xl text-sm text-base-content/60`),n(R,b(`用一个页面完成素材汇总、审批流转、上线窗口对齐和上线后的回放，不再分散在多个工具里。`));let z=g(`div`,P);n(P,z),o(z,`grid h-16 w-16 place-items-center rounded-3xl bg-primary/10 text-primary`);let B=g(`svg`,z);n(z,B),p(B,`viewBox`,`0 0 24 24`),p(B,`fill`,`none`),p(B,`stroke`,`currentColor`),p(B,`strokeWidth`,`1.8`),o(B,`size-8`);let V=g(`path`,B);n(B,V),p(V,`strokeLinecap`,`round`),p(V,`strokeLinejoin`,`round`),p(V,`d`,`m12 3 2.2 5.2L20 10l-5.8 1.8L12 17l-2.2-5.2L4 10l5.8-1.8L12 3Z`);let H=g(`div`,i);n(i,H);let ee=D(H,()=>e=>{m.current=e??void 0});h(()=>{ee()}),o(H,`mt-4 rounded-[1.6rem] border border-base-300/70 bg-base-100/80 p-5`);let U=g(`div`,H);n(H,U),o(U,`grid gap-3 md:grid-cols-3`);let te=s(`rue:list:start`),W=s(`rue:list:end`);n(U,te),n(U,W);let ne=new Map;w(()=>{ne=E({items:[[`Brief`,`完成背景与目标归纳`],[`Review`,`跨团队确认视觉与文案`],[`Ship`,`统一 CTA 与发布时间窗`]],getKey:(e,t)=>e[0],elements:ne,parent:U,before:W,singleRoot:!0,trackIndex:!1,start:te,renderItem:(t,r,i,a,c)=>{_(f(()=>{let r=S(),i=g(`div`,r);n(r,i),w(()=>{p(i,`key`,String(t[0]))}),o(i,`rounded-[1.2rem] bg-base-200/65 px-4 py-4`);let a=g(`div`,i);n(i,a),o(a,`text-sm font-semibold`);let c=s(`rue:slot:anchor`);n(a,c),w(()=>{let n=t[0];e(()=>_(n,a,c))});let l=g(`div`,i);n(i,l),o(l,`mt-2 text-sm text-base-content/60`);let u=s(`rue:slot:anchor`);return n(l,u),w(()=>{let n=t[1];e(()=>_(n,l,u))}),r}),r,i)}})});let re=g(`div`,i);n(i,re),o(re,`mt-4 flex justify-end`);let G=g(`button`,re);n(re,G);let K=D(G,()=>e=>{v.current=e??void 0});h(()=>{K()}),p(G,`type`,`button`),o(G,`btn btn-primary rounded-full px-5`),n(G,b(`提交审批`));let ie=s(`rue:slot:anchor`);return n(i,ie),w(()=>{let t=r.value?f(()=>{let t=S(),i=s(`rue:component:anchor`);return n(t,i),w(()=>{let n=x(q,{key:`custom-tour-${l.value}-${c.value}-${r.value?`open`:`closed`}`,open:r.value,current:c.value,type:`primary`,styles:we,steps:C.get(),indicatorsRender:(e,t)=>O(`div`,{className:`flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-white/80`,children:[k(`span`,{children:`phase`}),k(`span`,{className:`rounded-full border border-white/20 px-2 py-1 text-white`,children:e+1}),k(`span`,{children:`/`}),k(`span`,{children:t})]}),actionsRender:(e,t)=>O(`div`,{className:`flex flex-wrap items-center justify-between gap-3`,children:[O(`div`,{className:`text-xs uppercase tracking-[0.24em] text-white/70`,children:[`launch guide · step `,t.current+1]}),e]}),onOpenChange:e=>{r.value=e,e||(c.value=0)},onChange:e=>{c.value=e},onFinish:()=>{c.value=0}});e(()=>_(n,t,i))}),t}):``;e(()=>_(t,i,ie))}),i})},ke=()=>f(t=>{let r=S(),i=s(`rue:component:anchor`);return n(r,i),_(x(j,{children:f(()=>{let t=S(),r=g(`div`,t);n(t,r),o(r,`max-w-none prose prose-sm md:prose-base`);let i=g(`h1`,r);n(r,i),n(i,b(`Tour 漫游引导`));let a=g(`p`,r);n(r,a),o(a,`text-sm mt-3 mb-3`),n(a,b(`Tour 用分步浮层把用户带过关键入口、局部强调和最终动作。Rue 的实现参考了成熟组件库的能力模型，但视觉仍然保持自己的 card、badge 和 button 语言，不直接照搬现成面板样式。`));let c=g(`p`,r);n(r,c),o(c,`text-sm mt-3 mb-3`),n(c,b(`Tour 覆盖的不只是静态外观，也包含完整执行逻辑：围绕真实 DOM target 做高亮、自动定位、切步滚动、非模态展示，以及自定义 indicator 和底部 actions。`));let l=g(`h2`,r);n(r,l),n(l,b(`何时使用`));let u=g(`ul`,r);n(r,u);let d=g(`li`,u);n(u,d),n(d,b(`需要把新用户逐步带过核心入口、关键按钮或首次配置流程。`));let f=g(`li`,u);n(u,f),n(f,b(`需要在复杂页面里突出某个局部区域，并配合文案解释当前操作目的。`));let p=g(`li`,u);n(u,p),n(p,b(`需要把产品说明、轻 onboarding 和最终业务动作串成一条连续体验。`));let m=s(`rue:component:anchor`);n(t,m),w(()=>{let n=x(M,{title:`基础引导`,summary:`点击 Basic 后，从 Upload、Save 到更多操作依次弹出讲解。`,tab:me,preview:Te,code:be});e(()=>_(n,t,m))});let h=s(`rue:component:anchor`);n(t,h),w(()=>{let n=x(M,{title:`欢迎页与非模态`,summary:`展示没有 target 的中心步骤，以及 mask=false 时的轻量引导方式。`,tab:he,preview:Ee,code:xe});e(()=>_(n,t,h))});let v=s(`rue:component:anchor`);n(t,v),w(()=>{let n=x(M,{title:`Placement 与交互洞口`,summary:`切换 top/right/bottom/left，并验证高亮区默认仍可继续触发目标元素。`,tab:ge,preview:De,code:Se});e(()=>_(n,t,v))});let y=s(`rue:component:anchor`);n(t,y),w(()=>{let n=x(M,{title:`自定义指示器与动作区`,summary:`通过 primary 主题、cover、indicatorsRender 和 actionsRender 把引导做成更完整的任务流。`,tab:_e,preview:Oe,code:Ce});e(()=>_(n,t,y))});let C=g(`div`,t);n(t,C),o(C,`component-preview not-prose text-base-content my-6 lg:my-12`);let T=g(`h2`,C);n(C,T),o(T,`component-preview-title mt-2 mb-3 text-lg font-semibold`),n(T,b(`# API`));let E=s(`rue:component:anchor`);return n(C,E),w(()=>{let t=x(pe,{rows:ye});e(()=>_(t,C,E))}),t})}),r,i),r});export{ke as default};
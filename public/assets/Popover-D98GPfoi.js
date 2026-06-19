import{$ as e,$t as t,Bt as n,Gt as r,Qt as i,X as a,Xt as o,Z as s,_t as c,b as l,ct as u,et as d,gt as f,i as p,l as m,mt as h,n as g,nt as _,o as v,r as y,rt as b,t as x,tt as S,ut as C}from"./vapor-runtime-CKrmRMZX.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{a as D,i as O}from"./persistentSidebarPlayground-CKHFGglU.js";import{r as k}from"./SidebarPlaygroundDesign-CWudvLqE.js";import{t as A}from"./PreviewBlock-xsXk-Jrr.js";var j=(...e)=>e.filter(Boolean).join(` `),M=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},ee=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),N=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:ee(e)}:${String(t)}`).join(`; `):``,te=(e,t)=>[N(e),N(t)].filter(Boolean).join(`; `)||void 0,ne=e=>{let t=Array.isArray(e)?e:e?[e]:[`hover`];return Array.from(new Set(t))},P=(e,t)=>{typeof e==`function`&&e(t)},F=e=>typeof e==`function`?e():e,I=e=>e!=null&&e!==!1,re=e=>{switch(e){case`top`:return{direction:`top`,align:`center`};case`topLeft`:return{direction:`top`,align:`start`};case`topRight`:return{direction:`top`,align:`end`};case`bottom`:return{direction:`bottom`,align:`center`};case`bottomRight`:return{direction:`bottom`,align:`end`};case`left`:return{direction:`left`,align:`center`};case`leftTop`:return{direction:`left`,align:`start`};case`leftBottom`:return{direction:`left`,align:`end`};case`right`:return{direction:`right`,align:`center`};case`rightTop`:return{direction:`right`,align:`start`};case`rightBottom`:return{direction:`right`,align:`end`};default:return{direction:`bottom`,align:`start`}}},ie=e=>{switch(e){case`top`:return`bottom-full left-1/2 mb-3 -translate-x-1/2`;case`topLeft`:return`bottom-full left-0 mb-3`;case`topRight`:return`bottom-full right-0 mb-3`;case`bottom`:return`top-full left-1/2 mt-3 -translate-x-1/2`;case`bottomRight`:return`top-full right-0 mt-3`;case`left`:return`right-full top-1/2 me-3 -translate-y-1/2`;case`leftTop`:return`right-full top-0 me-3`;case`leftBottom`:return`right-full bottom-0 me-3`;case`right`:return`left-full top-1/2 ms-3 -translate-y-1/2`;case`rightTop`:return`left-full top-0 ms-3`;case`rightBottom`:return`left-full bottom-0 ms-3`;default:return`top-full left-0 mt-3`}},ae=e=>{switch(e){case`top`:case`topLeft`:case`topRight`:return`origin-bottom`;case`left`:case`leftTop`:case`leftBottom`:return`origin-right`;case`right`:case`rightTop`:case`rightBottom`:return`origin-left`;default:return`origin-top`}},oe=(e,t)=>{let n=re(e);return n.direction===`top`?j(`bottom-[-6px] border-r border-b`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`bottom`?j(`top-[-6px] border-l border-t`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`left`?j(`right-[-6px] border-r border-t`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`):j(`left-[-6px] border-l border-b`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`)},se=(n,i,o,u,d,f,p,y,b,x,w)=>n===`span`?m(n=>{let l=S(`span`,n);t(()=>{c(l,i)}),t(()=>{C(l,o)}),t(()=>{h(l,u)});let m=E(l,()=>d);g(()=>{m()}),a(l,`mouseenter`,f),a(l,`mouseleave`,p),a(l,`focus`,y),a(l,`blur`,b);let T=e(`rue:slot:anchor`);s(l,T),t(()=>{let e=x;r(()=>v(e,l,T))}),s(l,_(` `));let D=e(`rue:slot:anchor`);return s(l,D),t(()=>{let e=w;r(()=>v(e,l,D))}),l}):n===`section`?m(n=>{let l=S(`section`,n);t(()=>{c(l,i)}),t(()=>{C(l,o)}),t(()=>{h(l,u)});let m=E(l,()=>d);g(()=>{m()}),a(l,`mouseenter`,f),a(l,`mouseleave`,p),a(l,`focus`,y),a(l,`blur`,b);let T=e(`rue:slot:anchor`);s(l,T),t(()=>{let e=x;r(()=>v(e,l,T))}),s(l,_(` `));let D=e(`rue:slot:anchor`);return s(l,D),t(()=>{let e=w;r(()=>v(e,l,D))}),l}):n===`article`?m(n=>{let l=S(`article`,n);t(()=>{c(l,i)}),t(()=>{C(l,o)}),t(()=>{h(l,u)});let m=E(l,()=>d);g(()=>{m()}),a(l,`mouseenter`,f),a(l,`mouseleave`,p),a(l,`focus`,y),a(l,`blur`,b);let T=e(`rue:slot:anchor`);s(l,T),t(()=>{let e=x;r(()=>v(e,l,T))}),s(l,_(` `));let D=e(`rue:slot:anchor`);return s(l,D),t(()=>{let e=w;r(()=>v(e,l,D))}),l}):n===`label`?m(n=>{let l=S(`label`,n);t(()=>{c(l,i)}),t(()=>{C(l,o)}),t(()=>{h(l,u)});let m=E(l,()=>d);g(()=>{m()}),a(l,`mouseenter`,f),a(l,`mouseleave`,p),a(l,`focus`,y),a(l,`blur`,b);let T=e(`rue:slot:anchor`);s(l,T),t(()=>{let e=x;r(()=>v(e,l,T))}),s(l,_(` `));let D=e(`rue:slot:anchor`);return s(l,D),t(()=>{let e=w;r(()=>v(e,l,D))}),l}):n===`div`?m(n=>{let l=S(`div`,n);t(()=>{c(l,i)}),t(()=>{C(l,o)}),t(()=>{h(l,u)});let m=E(l,()=>d);g(()=>{m()}),a(l,`mouseenter`,f),a(l,`mouseleave`,p),a(l,`focus`,y),a(l,`blur`,b);let T=e(`rue:slot:anchor`);s(l,T),t(()=>{let e=x;r(()=>v(e,l,T))}),s(l,_(` `));let D=e(`rue:slot:anchor`);return s(l,D),t(()=>{let e=w;r(()=>v(e,l,D))}),l}):l(n,{...i,className:o,style:u,ref:d,onMouseEnter:f,onMouseLeave:p,onFocus:y,onBlur:b},x,w),L=({as:e=`div`,title:t,content:r,overlay:a,placement:o=`top`,trigger:s,open:c,defaultOpen:l,disabled:u,arrow:d=!0,destroyOnHidden:f=!1,mouseEnterDelay:m=.08,mouseLeaveDelay:h=.12,zIndex:g,className:_,style:v,triggerClassName:b,triggerStyle:x,overlayClassName:S,overlayStyle:C,classNames:T,styles:E,onOpenChange:k,children:A,...ee})=>{let re=e,L=w(`ref:1:0`,()=>n(l??!1)),R=w(`ref:1:1`,()=>n(c??l??!1)),z=w(`ref:1:2`,()=>n(ne(s))),B=c!==void 0,V=null,H=null,U=null,W=null,G=null,K=e=>{H&&H.setAttribute(`aria-expanded`,String(e)),U&&(U.setAttribute(`aria-hidden`,e?`false`:`true`),U.classList.toggle(`pointer-events-auto`,e),U.classList.toggle(`visible`,e),U.classList.toggle(`opacity-100`,e),U.classList.toggle(`scale-100`,e),U.classList.toggle(`pointer-events-none`,!e),U.classList.toggle(`invisible`,!e),U.classList.toggle(`opacity-0`,!e),U.classList.toggle(`scale-95`,!e))};w(`watch:1:3`,()=>i(()=>c,e=>{R.value=typeof e==`boolean`?e:L.value,K(R.value)},{immediate:!0})),w(`watch:1:4`,()=>i(()=>s,e=>{z.value=ne(e)},{immediate:!0})),w(`watch:1:5`,()=>i(()=>l,e=>{B||(L.value=!!e,R.value=!!e,K(R.value))},{immediate:!0}));let q=()=>{W&&=(clearTimeout(W),null),G&&=(clearTimeout(G),null)},J=()=>R.value,Y=e=>{u||!$||e!==J()&&(B||(L.value=e),R.value=e,K(e),typeof k==`function`&&k(e))},ce=()=>{if(he){if(G&&=(clearTimeout(G),null),m<=0){Y(!0);return}W&&clearTimeout(W),W=setTimeout(()=>{W=null,Y(!0)},m*1e3)}},le=()=>{if(he){if(W&&=(clearTimeout(W),null),h<=0){Y(!1);return}G&&clearTimeout(G),G=setTimeout(()=>{G=null,Y(!1)},h*1e3)}},ue=e=>{J()&&(_e||ve)&&(V?.contains(e.target)||Y(!1))},de=e=>{!J()||e.key!==`Escape`||Y(!1)},fe=e=>{ge&&Y(!0)},pe=e=>{if(!ge)return;let t=e.relatedTarget;t&&V?.contains(t)||Y(!1)};y(()=>{typeof window>`u`||(window.addEventListener(`click`,ue,!0),window.addEventListener(`keydown`,de),V?.addEventListener(`focusin`,fe),V?.addEventListener(`focusout`,pe),K(R.value))}),p(()=>{q(),V?.removeEventListener(`focusin`,fe),V?.removeEventListener(`focusout`,pe),!(typeof window>`u`)&&(window.removeEventListener(`click`,ue,!0),window.removeEventListener(`keydown`,de))});let X=F(t),Z=F(r),Q=a===void 0?void 0:F(a),me=I(X)||I(Z),$=I(Q)||me,he=z.value.includes(`hover`),ge=z.value.includes(`focus`),_e=z.value.includes(`click`),ve=z.value.includes(`contextMenu`),ye=$&&(R.value||!f),be=typeof d==`object`&&!!d.pointAtCenter,xe=d!==!1,{onMouseEnter:Se,onMouseLeave:Ce,onFocus:we,onBlur:Te,onClick:Ee,onContextMenu:De,...Oe}=ee,ke=j(`relative inline-flex max-w-full align-top`,T?.root,_),Ae=j(`inline-flex max-w-full items-stretch`,T?.trigger,b),je=j(`absolute z-50 w-max max-w-[min(24rem,calc(100vw-2rem))] transform-gpu transition duration-150 ease-out`,ie(o),ae(o),R.value?`pointer-events-auto visible opacity-100 scale-100`:`pointer-events-none invisible opacity-0 scale-95`,T?.overlay,S),Me=j(`relative min-w-64 overflow-hidden rounded-[1.15rem] border border-base-300/80 bg-base-100/95 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,T?.panel),Ne=j(`absolute block h-3 w-3 rotate-45 border-base-300/80 bg-base-100/95`,oe(o,be),T?.arrow),Pe=j(`border-b border-base-300/70 px-4 py-3`,T?.header),Fe=j(`text-sm font-semibold tracking-[0.01em] text-base-content`,T?.title),Ie=j(`px-4 py-3 text-sm leading-6 text-base-content/80`,T?.content),Le=te(v,E?.root),Re=te(x,E?.trigger),ze=M(E?.overlay,C);typeof g==`number`&&(ze.zIndex=g);let Be=N(ze)||void 0,Ve=N(E?.panel)||void 0,He=N(E?.arrow)||void 0,Ue=N(E?.header)||void 0,We=N(E?.title)||void 0,Ge=N(E?.content)||void 0,Ke=ye?I(Q)?Q:D(`div`,{className:Me,style:Ve,role:`dialog`,"aria-modal":`false`,children:[I(X)?O(`div`,{className:Pe,style:Ue,children:O(`div`,{className:Fe,style:We,children:X})}):null,I(Z)?O(`div`,{className:Ie,style:Ge,children:Z}):null]}):null;return se(re,Oe,ke,Le,e=>{V=e},e=>{P(Se,e),e?.defaultPrevented||ce()},e=>{P(Ce,e),e?.defaultPrevented||le()},e=>{P(we,e)},e=>{P(Te,e)},O(`div`,{className:Ae,style:Re,ref:e=>{H=e},"aria-haspopup":$?`dialog`:void 0,"aria-expanded":$?String(R.value):void 0,onClick:e=>{P(Ee,e),!e?.defaultPrevented&&_e&&(q(),Y(!J()))},onContextMenu:e=>{P(De,e),!e?.defaultPrevented&&ve&&(typeof e.preventDefault==`function`&&e.preventDefault(),q(),Y(!J()))},children:A}),ye?D(`div`,{className:je,style:Be,ref:e=>{U=e},"aria-hidden":R.value?`false`:`true`,children:[xe?O(`span`,{className:Ne,style:He}):null,Ke]}):null)},R=n=>m(i=>{let a=S(`div`,i);C(a,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let o=S(`table`,a);s(a,o),C(o,`table table-zebra`);let c=S(`thead`,o);s(o,c);let l=S(`tr`,c);s(c,l);let f=S(`th`,l);s(l,f),s(f,_(`属性`));let p=S(`th`,l);s(l,p),s(p,_(`说明`));let h=S(`th`,l);s(l,h),s(h,_(`类型`));let g=S(`th`,l);s(l,g),s(g,_(`默认值`));let y=S(`tbody`,o);s(o,y);let b=e(`rue:list:start`),x=e(`rue:list:end`);s(y,b),s(y,x);let w=new Map;return t(()=>{w=T({items:n.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:y,before:x,singleRoot:!0,trackIndex:!1,start:b,renderItem:(n,i,a,o,c)=>{v(m(()=>{let i=d(),a=S(`tr`,i);s(i,a),t(()=>{u(a,`key`,String(n.prop))});let o=S(`td`,a);s(a,o);let c=S(`code`,o);s(o,c);let l=e(`rue:slot:anchor`);s(c,l),t(()=>{let e=n.prop;r(()=>v(e,c,l))});let f=S(`td`,a);s(a,f);let p=e(`rue:slot:anchor`);s(f,p),t(()=>{let e=n.description;r(()=>v(e,f,p))});let m=S(`td`,a);s(a,m);let h=S(`code`,m);s(m,h);let g=e(`rue:slot:anchor`);s(h,g),t(()=>{let e=n.type;r(()=>v(e,h,g))});let _=S(`td`,a);s(a,_);let y=S(`code`,_);s(_,y);let b=e(`rue:slot:anchor`);return s(y,b),t(()=>{let e=n.defaultValue;r(()=>v(e,y,b))}),i}),i,a)}})}),a}),z=[{prop:`title / content / overlay`,description:`支持标准标题与内容，也支持直接传完整 overlay 卡片以承载更自由的结构。`,type:`any`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单个或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控开合，适合做外部按钮联动、校验提示或场景化引导。`,type:`boolean / boolean / (open: boolean) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`支持四个基础方向和常见角落别名，便于和成熟浮层组件保持一致心智。`,type:`'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | ...`,defaultValue:`'top'`},{prop:`arrow`,description:`支持关闭箭头或通过 pointAtCenter 让箭头对齐触发器中心。`,type:`boolean | { pointAtCenter?: boolean }`,defaultValue:`true`},{prop:`destroyOnHidden`,description:`关闭后是否卸载浮层内容；默认保留 DOM 并切换可见状态，适合轻操作卡片。`,type:`boolean`,defaultValue:`false`},{prop:`mouseEnterDelay / mouseLeaveDelay`,description:`控制 hover 模式的开合延时，单位为秒。`,type:`number / number`,defaultValue:`0.08 / 0.12`},{prop:`classNames / styles`,description:`按 root、trigger、overlay、panel、header、title、content、arrow 等语义块定制。`,type:`PopoverClassNames / PopoverStyles`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle / zIndex`,description:`补充浮层层级、尺寸和视觉样式扩展。`,type:`string / Record<string, any> / number`,defaultValue:`- / - / -`}],B=()=>{let{controlledOpen:i,nextControlledOpen:c}=w(`useSetup:0:0`,()=>o(()=>({controlledOpen:w(`ref:1:0`,()=>n(!1)),nextControlledOpen:w(`ref:1:1`,()=>n(!1))})));return m(n=>{let o=S(`div`,n);C(o,`rounded-box border border-base-300 bg-base-100/75 p-5`);let l=S(`div`,o);s(o,l),C(l,`flex flex-wrap items-center gap-3`);let u=e(`rue:component:anchor`);s(l,u);let p=m(()=>{let e=d(),t=S(`button`,e);return s(e,t),C(t,`btn btn-outline`),s(t,_(`受控触发器`)),e});t(()=>{let e=x(L,{open:i.value,trigger:`click`,title:`受控 Popover`,content:`可以由外部按钮、校验状态或流程步骤直接控制。`,onOpenChange:e=>{i.value=e},children:p});r(()=>v(e,l,u))});let h=S(`button`,l);s(l,h),C(h,`btn btn-primary`),a(h,`mousedown`,()=>{c.value=!i.value}),a(h,`click`,()=>{i.value=c.value});let g=b(h);s(h,g),t(()=>{f(g,i.value?`收起外部控制面板`:`打开外部控制面板`)});let y=S(`span`,l);s(l,y),C(y,`badge badge-outline min-w-[6rem] justify-center`);let w=b(y);return s(y,w),t(()=>{f(w,i.value?`open`:`closed`)}),o})},V=()=>{let{tabBasic:i,tabPlacement:a,tabTrigger:c,tabControlled:l,tabRich:u}=w(`useSetup:0:0:dup1`,()=>o(()=>({tabBasic:w(`ref:1:2`,()=>n(`preview`)),tabPlacement:w(`ref:1:3`,()=>n(`preview`)),tabTrigger:w(`ref:1:4`,()=>n(`preview`)),tabControlled:w(`ref:1:5`,()=>n(`preview`)),tabRich:w(`ref:1:6`,()=>n(`preview`))})));return m(n=>{let o=d(),f=e(`rue:component:anchor`);return s(o,f),v(x(k,{children:m(()=>{let n=d(),o=S(`div`,n);s(n,o),C(o,`max-w-none prose prose-sm md:prose-base`);let f=S(`h1`,o);s(o,f),s(f,_(`Popover 气泡卡片`));let p=S(`p`,o);s(o,p),C(p,`text-sm mt-3 mb-3`),s(p,_(`Popover 用来承载比 Tooltip 更完整的信息块和轻操作。Rue 版本延续了当前的轻卡片视觉， 同时补齐`));let m=S(`code`,p);s(p,m),s(m,_(`title`)),s(p,_(`、`));let h=S(`code`,p);s(p,h),s(h,_(`content`)),s(p,_(`、`));let g=S(`code`,p);s(p,g),s(g,_(`overlay`)),s(p,_(`、触发方式、 定位、箭头和受控开合等核心能力。`));let y=S(`p`,o);s(o,y),C(y,`text-sm text-base-content/70`),s(y,_(`它更适合字段解释、快速状态卡、内联操作和轻量二次确认，而不是用 Modal 打断页面流程。`));let b=e(`rue:component:anchor`);s(o,b),t(()=>{let e=x(A,{title:`Basic popovers`,tab:i,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[O(L,{title:`部署窗口`,content:`今晚 22:00 后会自动切换到新构建。`,children:O(`button`,{className:`btn btn-outline`,children:`Hover for status`})}),O(L,{trigger:`click`,title:`审批提示`,content:`这个批次还缺法务签字，建议先补全再提交。`,children:O(`button`,{className:`btn btn-soft btn-primary`,children:`Click for guidance`})}),O(L,{overlay:D(`div`,{className:`space-y-3 rounded-[1.15rem] border border-base-300/80 bg-base-100/95 p-4 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,children:[D(`div`,{className:`space-y-1`,children:[O(`div`,{className:`text-sm font-semibold`,children:`Release checklist`}),O(`div`,{className:`text-xs leading-5 text-base-content/70`,children:`包含资源校验、追踪链路确认与灰度开关检查。`})]}),D(`div`,{className:`flex gap-2`,children:[O(`button`,{className:`btn btn-sm btn-primary`,children:`继续发布`}),O(`button`,{className:`btn btn-sm btn-ghost`,children:`稍后处理`})]})]}),trigger:`click`,overlayClassName:`max-w-80`,children:O(`button`,{className:`btn btn-soft`,children:`Custom action card`})})]}),code:`<div className="grid gap-4 lg:grid-cols-3">
  <Popover title="部署窗口" content="今晚 22:00 后会自动切换到新构建。">
    <button className="btn btn-outline">Hover for status</button>
  </Popover>

  <Popover
    trigger="click"
    title="审批提示"
    content="这个批次还缺法务签字，建议先补全再提交。"
  >
    <button className="btn btn-soft btn-primary">Click for guidance</button>
  </Popover>

  <Popover
    trigger="click"
    overlay={
      <div className="space-y-3 rounded-[1.15rem] border border-base-300/80 bg-base-100/95 p-4 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur">
        <div className="space-y-1">
          <div className="text-sm font-semibold">Release checklist</div>
          <div className="text-xs leading-5 text-base-content/70">
            包含资源校验、追踪链路确认与灰度开关检查。
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-primary">继续发布</button>
          <button className="btn btn-sm btn-ghost">稍后处理</button>
        </div>
      </div>
    }
    overlayClassName="max-w-80"
  >
    <button className="btn btn-soft">Custom action card</button>
  </Popover>
</div>`});r(()=>v(e,o,b))});let w=e(`rue:component:anchor`);s(o,w),t(()=>{let e=x(A,{title:`Placement`,tab:a,preview:()=>D(`div`,{className:`grid gap-6 sm:grid-cols-2 xl:grid-cols-4`,children:[O(L,{open:!0,placement:`topLeft`,title:`Top start`,content:`适合贴着触发器左边缘展示信息。`,className:`justify-self-start`,children:O(`button`,{className:`btn`,children:`Top left`})}),O(L,{open:!0,placement:`bottomRight`,title:`Bottom end`,content:`右下角常用来对齐工具条末端。`,className:`justify-self-start`,children:O(`button`,{className:`btn`,children:`Bottom right`})}),O(L,{open:!0,placement:`leftTop`,title:`Left top`,content:`适合桌面端列表或表格中的侧向说明。`,className:`justify-self-start`,children:O(`button`,{className:`btn`,children:`Left top`})}),O(L,{open:!0,placement:`rightBottom`,title:`Right bottom`,content:`在工具面板、筛选块里会更自然。`,className:`justify-self-start`,children:O(`button`,{className:`btn`,children:`Right bottom`})})]}),code:`<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
  <Popover open={true} placement="topLeft" title="Top start" content="适合贴着触发器左边缘展示信息。" className="justify-self-start">
    <button className="btn">Top left</button>
  </Popover>

  <Popover open={true} placement="bottomRight" title="Bottom end" content="右下角常用来对齐工具条末端。" className="justify-self-start">
    <button className="btn">Bottom right</button>
  </Popover>

  <Popover open={true} placement="leftTop" title="Left top" content="适合桌面端列表或表格中的侧向说明。" className="justify-self-start">
    <button className="btn">Left top</button>
  </Popover>

  <Popover open={true} placement="rightBottom" title="Right bottom" content="在工具面板、筛选块里会更自然。" className="justify-self-start">
    <button className="btn">Right bottom</button>
  </Popover>
</div>`});r(()=>v(e,o,w))});let T=e(`rue:component:anchor`);s(o,T),t(()=>{let e=x(A,{title:`Trigger modes`,tab:c,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-2 xl:grid-cols-4`,children:[O(L,{title:`默认 hover`,content:`鼠标进入时展示，移出后收起。`,children:O(`button`,{className:`btn btn-outline`,children:`Hover`})}),O(L,{trigger:`click`,title:`Click trigger`,content:`再次点击同一个触发器即可关闭。`,children:O(`button`,{className:`btn btn-soft`,children:`Click`})}),O(L,{trigger:`contextMenu`,title:`Context menu`,content:`右键适合承载次级命令或辅助说明。`,children:O(`button`,{className:`btn btn-ghost border border-base-300`,children:`Right click`})}),O(L,{trigger:`focus`,title:`Focus trigger`,content:`适合输入前的字段说明与校验前置提示。`,children:O(`input`,{className:`input input-bordered w-full`,placeholder:`Focus this input`})})]}),code:`<div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
  <Popover title="默认 hover" content="鼠标进入时展示，移出后收起。">
    <button className="btn btn-outline">Hover</button>
  </Popover>

  <Popover trigger="click" title="Click trigger" content="再次点击同一个触发器即可关闭。">
    <button className="btn btn-soft">Click</button>
  </Popover>

  <Popover trigger="contextMenu" title="Context menu" content="右键适合承载次级命令或辅助说明。">
    <button className="btn btn-ghost border border-base-300">Right click</button>
  </Popover>

  <Popover trigger="focus" title="Focus trigger" content="适合输入前的字段说明与校验前置提示。">
    <input className="input input-bordered w-full" placeholder="Focus this input" />
  </Popover>
</div>`});r(()=>v(e,o,T))});let E=e(`rue:component:anchor`);s(o,E),t(()=>{let e=x(A,{title:`Controlled visibility`,tab:l,preview:()=>O(B,{}),code:`const controlledOpen = ref(false)
const nextControlledOpen = ref(false)

<div className="rounded-box border border-base-300 bg-base-100/75 p-5">
  <div className="flex flex-wrap items-center gap-3">
    <Popover
      open={controlledOpen.value}
      trigger="click"
      title="受控 Popover"
      content="可以由外部按钮、校验状态或流程步骤直接控制。"
      onOpenChange={nextOpen => {
        controlledOpen.value = nextOpen
      }}
    >
      <button className="btn btn-outline">受控触发器</button>
    </Popover>

    <button
      className="btn btn-primary"
      onMouseDown={() => {
        nextControlledOpen.value = !controlledOpen.value
      }}
      onClick={() => {
        controlledOpen.value = nextControlledOpen.value
      }}
    >
      {controlledOpen.value ? '收起外部控制面板' : '打开外部控制面板'}
    </button>

    <span className="badge badge-outline min-w-[6rem] justify-center">
      {controlledOpen.value ? 'open' : 'closed'}
    </span>
  </div>
</div>`});r(()=>v(e,o,E))});let k=e(`rue:component:anchor`);s(o,k),t(()=>{let e=x(A,{title:`Arrow and semantic styling`,tab:u,preview:()=>D(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[O(L,{open:!0,placement:`bottom`,arrow:{pointAtCenter:!0},title:`Centered arrow`,content:`箭头会对齐到触发器中心，更适合宽按钮或卡片入口。`,className:`justify-self-start`,children:O(`button`,{className:`btn btn-primary w-52 justify-center`,children:`Point at center`})}),O(L,{open:!0,placement:`rightTop`,arrow:!1,title:`Editorial pulse`,content:D(`div`,{className:`space-y-2`,children:[O(`div`,{className:`text-xs text-base-content/60`,children:`本周更新节奏`}),D(`div`,{className:`flex items-center gap-2`,children:[O(`span`,{className:`badge badge-primary badge-soft`,children:`+12%`}),O(`span`,{className:`text-xs text-base-content/70`,children:`首屏转化高于上周`})]})]}),classNames:{panel:`border-primary/20 bg-base-100/98`,header:`bg-primary/5`,title:`uppercase tracking-[0.14em] text-[11px] text-primary`},styles:{content:{padding:`0.75rem 1rem 1rem`}},className:`justify-self-start`,children:O(`button`,{className:`btn btn-outline btn-primary`,children:`Styled card`})})]}),code:`<div className="grid gap-6 lg:grid-cols-2">
  <Popover
    open={true}
    placement="bottom"
    arrow={{ pointAtCenter: true }}
    title="Centered arrow"
    content="箭头会对齐到触发器中心，更适合宽按钮或卡片入口。"
    className="justify-self-start"
  >
    <button className="btn btn-primary w-52 justify-center">Point at center</button>
  </Popover>

  <Popover
    open={true}
    placement="rightTop"
    arrow={false}
    title="Editorial pulse"
    content={
      <div className="space-y-2">
        <div className="text-xs text-base-content/60">本周更新节奏</div>
        <div className="flex items-center gap-2">
          <span className="badge badge-primary badge-soft">+12%</span>
          <span className="text-xs text-base-content/70">首屏转化高于上周</span>
        </div>
      </div>
    }
    classNames={{
      panel: 'border-primary/20 bg-base-100/98',
      header: 'bg-primary/5',
      title: 'uppercase tracking-[0.14em] text-[11px] text-primary',
    }}
    styles={{
      content: { padding: '0.75rem 1rem 1rem' },
    }}
    className="justify-self-start"
  >
    <button className="btn btn-outline btn-primary">Styled card</button>
  </Popover>
</div>`});r(()=>v(e,o,k))});let j=S(`h2`,o);s(o,j),C(j,`mt-12`),s(j,_(`API`));let M=e(`rue:component:anchor`);return s(o,M),t(()=>{let e=x(R,{rows:z});r(()=>v(e,o,M))}),n})}),o,f),o})};export{V as default};
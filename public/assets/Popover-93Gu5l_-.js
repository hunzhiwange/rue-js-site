import{$ as e,B as t,C as n,Dt as r,Et as i,G as a,H as o,K as s,U as c,W as l,Z as u,a as d,at as f,ht as p,i as m,l as h,r as g,rt as _,s as v,t as y,wt as b,yt as x,z as S}from"./vapor-runtime-C1rlwc61.js";import{a as C,n as w,t as T}from"./vapor-helpers-vapor-HR6N5lMH.js";import{n as E,t as D}from"./src-BLzF0BqW.js";import{n as O}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as k}from"./PreviewBlock-CfdDuiov.js";var A=(...e)=>e.filter(Boolean).join(` `),j=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},M=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),N=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:M(e)}:${String(t)}`).join(`; `):``,ee=(e,t)=>[N(e),N(t)].filter(Boolean).join(`; `)||void 0,te=e=>{let t=Array.isArray(e)?e:e?[e]:[`hover`];return Array.from(new Set(t))},P=(e,t)=>{typeof e==`function`&&e(t)},F=e=>typeof e==`function`?e():e,I=e=>e!=null&&e!==!1,ne=e=>{switch(e){case`top`:return{direction:`top`,align:`center`};case`topLeft`:return{direction:`top`,align:`start`};case`topRight`:return{direction:`top`,align:`end`};case`bottom`:return{direction:`bottom`,align:`center`};case`bottomRight`:return{direction:`bottom`,align:`end`};case`left`:return{direction:`left`,align:`center`};case`leftTop`:return{direction:`left`,align:`start`};case`leftBottom`:return{direction:`left`,align:`end`};case`right`:return{direction:`right`,align:`center`};case`rightTop`:return{direction:`right`,align:`start`};case`rightBottom`:return{direction:`right`,align:`end`};default:return{direction:`bottom`,align:`start`}}},re=e=>{switch(e){case`top`:return`bottom-full left-1/2 mb-3 -translate-x-1/2`;case`topLeft`:return`bottom-full left-0 mb-3`;case`topRight`:return`bottom-full right-0 mb-3`;case`bottom`:return`top-full left-1/2 mt-3 -translate-x-1/2`;case`bottomRight`:return`top-full right-0 mt-3`;case`left`:return`right-full top-1/2 me-3 -translate-y-1/2`;case`leftTop`:return`right-full top-0 me-3`;case`leftBottom`:return`right-full bottom-0 me-3`;case`right`:return`left-full top-1/2 ms-3 -translate-y-1/2`;case`rightTop`:return`left-full top-0 ms-3`;case`rightBottom`:return`left-full bottom-0 ms-3`;default:return`top-full left-0 mt-3`}},ie=e=>{switch(e){case`top`:case`topLeft`:case`topRight`:return`origin-bottom`;case`left`:case`leftTop`:case`leftBottom`:return`origin-right`;case`right`:case`rightTop`:case`rightBottom`:return`origin-left`;default:return`origin-top`}},ae=(e,t)=>{let n=ne(e);return n.direction===`top`?A(`bottom-[-6px] border-r border-b`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`bottom`?A(`top-[-6px] border-l border-t`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`left`?A(`right-[-6px] border-r border-t`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`):A(`left-[-6px] border-l border-b`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`)},oe=(i,s,c,u,d,f,p,m,y,b,C)=>i===`span`?h(n=>{let i=l(`span`,n);r(()=>{e(i,String(c))}),r(()=>{_(i,u)});let s=T(i,()=>d);g(()=>{s()}),S(i,`mouseenter`,f),S(i,`mouseleave`,p),S(i,`focus`,m),S(i,`blur`,y);let h=o(`rue:slot:anchor`);t(i,h),r(()=>{let e=b;x(()=>v(e,i,h))}),t(i,a(` `));let w=o(`rue:slot:anchor`);return t(i,w),r(()=>{let e=C;x(()=>v(e,i,w))}),i}):i===`section`?h(n=>{let i=l(`section`,n);r(()=>{e(i,String(c))}),r(()=>{_(i,u)});let s=T(i,()=>d);g(()=>{s()}),S(i,`mouseenter`,f),S(i,`mouseleave`,p),S(i,`focus`,m),S(i,`blur`,y);let h=o(`rue:slot:anchor`);t(i,h),r(()=>{let e=b;x(()=>v(e,i,h))}),t(i,a(` `));let w=o(`rue:slot:anchor`);return t(i,w),r(()=>{let e=C;x(()=>v(e,i,w))}),i}):i===`article`?h(n=>{let i=l(`article`,n);r(()=>{e(i,String(c))}),r(()=>{_(i,u)});let s=T(i,()=>d);g(()=>{s()}),S(i,`mouseenter`,f),S(i,`mouseleave`,p),S(i,`focus`,m),S(i,`blur`,y);let h=o(`rue:slot:anchor`);t(i,h),r(()=>{let e=b;x(()=>v(e,i,h))}),t(i,a(` `));let w=o(`rue:slot:anchor`);return t(i,w),r(()=>{let e=C;x(()=>v(e,i,w))}),i}):i===`label`?h(n=>{let i=l(`label`,n);r(()=>{e(i,String(c))}),r(()=>{_(i,u)});let s=T(i,()=>d);g(()=>{s()}),S(i,`mouseenter`,f),S(i,`mouseleave`,p),S(i,`focus`,m),S(i,`blur`,y);let h=o(`rue:slot:anchor`);t(i,h),r(()=>{let e=b;x(()=>v(e,i,h))}),t(i,a(` `));let w=o(`rue:slot:anchor`);return t(i,w),r(()=>{let e=C;x(()=>v(e,i,w))}),i}):i===`div`?h(n=>{let i=l(`div`,n);r(()=>{e(i,String(c))}),r(()=>{_(i,u)});let s=T(i,()=>d);g(()=>{s()}),S(i,`mouseenter`,f),S(i,`mouseleave`,p),S(i,`focus`,m),S(i,`blur`,y);let h=o(`rue:slot:anchor`);t(i,h),r(()=>{let e=b;x(()=>v(e,i,h))}),t(i,a(` `));let w=o(`rue:slot:anchor`);return t(i,w),r(()=>{let e=C;x(()=>v(e,i,w))}),i}):n(i,{...s,className:c,style:u,ref:d,onMouseEnter:f,onMouseLeave:p,onFocus:m,onBlur:y},b,C),L=({as:e=`div`,title:t,content:n,overlay:r,placement:a=`top`,trigger:o,open:s,defaultOpen:c,disabled:l,arrow:u=!0,destroyOnHidden:f=!1,mouseEnterDelay:h=.08,mouseLeaveDelay:g=.12,zIndex:_,className:v,style:y,triggerClassName:b,triggerStyle:x,overlayClassName:S,overlayStyle:w,classNames:T,styles:O,onOpenChange:k,children:M,...ne})=>{let L=e,R=C(`ref:1:0`,()=>p(c??!1)),z=C(`ref:1:1`,()=>p(s??c??!1)),B=C(`ref:1:2`,()=>p(te(o))),se=s!==void 0,V=null,H=null,U=null,W=null,G=null,K=e=>{H&&H.setAttribute(`aria-expanded`,String(e)),U&&(U.setAttribute(`aria-hidden`,e?`false`:`true`),U.classList.toggle(`pointer-events-auto`,e),U.classList.toggle(`visible`,e),U.classList.toggle(`opacity-100`,e),U.classList.toggle(`scale-100`,e),U.classList.toggle(`pointer-events-none`,!e),U.classList.toggle(`invisible`,!e),U.classList.toggle(`opacity-0`,!e),U.classList.toggle(`scale-95`,!e))};C(`watch:1:3`,()=>i(()=>s,e=>{z.value=typeof e==`boolean`?e:R.value,K(z.value)},{immediate:!0})),C(`watch:1:4`,()=>i(()=>o,e=>{B.value=te(e)},{immediate:!0})),C(`watch:1:5`,()=>i(()=>c,e=>{se||(R.value=!!e,z.value=!!e,K(z.value))},{immediate:!0}));let q=()=>{W&&=(clearTimeout(W),null),G&&=(clearTimeout(G),null)},J=()=>z.value,Y=e=>{l||!$||e!==J()&&(se||(R.value=e),z.value=e,K(e),typeof k==`function`&&k(e))},ce=()=>{if(he){if(G&&=(clearTimeout(G),null),h<=0){Y(!0);return}W&&clearTimeout(W),W=setTimeout(()=>{W=null,Y(!0)},h*1e3)}},le=()=>{if(he){if(W&&=(clearTimeout(W),null),g<=0){Y(!1);return}G&&clearTimeout(G),G=setTimeout(()=>{G=null,Y(!1)},g*1e3)}},ue=e=>{J()&&(_e||ve)&&(V?.contains(e.target)||Y(!1))},de=e=>{!J()||e.key!==`Escape`||Y(!1)},fe=e=>{ge&&Y(!0)},pe=e=>{if(!ge)return;let t=e.relatedTarget;t&&V?.contains(t)||Y(!1)};m(()=>{typeof window>`u`||(window.addEventListener(`click`,ue,!0),window.addEventListener(`keydown`,de),V?.addEventListener(`focusin`,fe),V?.addEventListener(`focusout`,pe),K(z.value))}),d(()=>{q(),V?.removeEventListener(`focusin`,fe),V?.removeEventListener(`focusout`,pe),!(typeof window>`u`)&&(window.removeEventListener(`click`,ue,!0),window.removeEventListener(`keydown`,de))});let X=F(t),Z=F(n),Q=r===void 0?void 0:F(r),me=I(X)||I(Z),$=I(Q)||me,he=B.value.includes(`hover`),ge=B.value.includes(`focus`),_e=B.value.includes(`click`),ve=B.value.includes(`contextMenu`),ye=$&&(z.value||!f),be=typeof u==`object`&&!!u.pointAtCenter,xe=u!==!1,{onMouseEnter:Se,onMouseLeave:Ce,onFocus:we,onBlur:Te,onClick:Ee,onContextMenu:De,...Oe}=ne,ke=A(`relative inline-flex max-w-full align-top`,T?.root,v),Ae=A(`inline-flex max-w-full items-stretch`,T?.trigger,b),je=A(`absolute z-50 w-max max-w-[min(24rem,calc(100vw-2rem))] transform-gpu transition duration-150 ease-out`,re(a),ie(a),z.value?`pointer-events-auto visible opacity-100 scale-100`:`pointer-events-none invisible opacity-0 scale-95`,T?.overlay,S),Me=A(`relative min-w-64 overflow-hidden rounded-[1.15rem] border border-base-300/80 bg-base-100/95 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,T?.panel),Ne=A(`absolute block h-3 w-3 rotate-45 border-base-300/80 bg-base-100/95`,ae(a,be),T?.arrow),Pe=A(`border-b border-base-300/70 px-4 py-3`,T?.header),Fe=A(`text-sm font-semibold tracking-[0.01em] text-base-content`,T?.title),Ie=A(`px-4 py-3 text-sm leading-6 text-base-content/80`,T?.content),Le=ee(y,O?.root),Re=ee(x,O?.trigger),ze=j(O?.overlay,w);typeof _==`number`&&(ze.zIndex=_);let Be=N(ze)||void 0,Ve=N(O?.panel)||void 0,He=N(O?.arrow)||void 0,Ue=N(O?.header)||void 0,We=N(O?.title)||void 0,Ge=N(O?.content)||void 0,Ke=ye?I(Q)?Q:E(`div`,{className:Me,style:Ve,role:`dialog`,"aria-modal":`false`,children:[I(X)?D(`div`,{className:Pe,style:Ue,children:D(`div`,{className:Fe,style:We,children:X})}):null,I(Z)?D(`div`,{className:Ie,style:Ge,children:Z}):null]}):null;return oe(L,Oe,ke,Le,e=>{V=e},e=>{P(Se,e),e?.defaultPrevented||ce()},e=>{P(Ce,e),e?.defaultPrevented||le()},e=>{P(we,e)},e=>{P(Te,e)},D(`div`,{className:Ae,style:Re,ref:e=>{H=e},"aria-haspopup":$?`dialog`:void 0,"aria-expanded":$?String(z.value):void 0,onClick:e=>{P(Ee,e),!e?.defaultPrevented&&_e&&(q(),Y(!J()))},onContextMenu:e=>{P(De,e),!e?.defaultPrevented&&ve&&(typeof e.preventDefault==`function`&&e.preventDefault(),q(),Y(!J()))},children:M}),ye?E(`div`,{className:je,style:Be,ref:e=>{U=e},"aria-hidden":z.value?`false`:`true`,children:[xe?D(`span`,{className:Ne,style:He}):null,Ke]}):null)},R=n=>h(i=>{let s=l(`div`,i);e(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=l(`table`,s);t(s,d),e(d,`table table-zebra`);let f=l(`thead`,d);t(d,f);let p=l(`tr`,f);t(f,p);let m=l(`th`,p);t(p,m),t(m,a(`属性`));let g=l(`th`,p);t(p,g),t(g,a(`说明`));let _=l(`th`,p);t(p,_),t(_,a(`类型`));let y=l(`th`,p);t(p,y),t(y,a(`默认值`));let b=l(`tbody`,d);t(d,b);let S=o(`rue:list:start`),C=o(`rue:list:end`);t(b,S),t(b,C);let T=new Map;return r(()=>{T=w({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(e,n,i,a,s)=>{v(h(()=>{let n=c(),i=l(`tr`,n);t(n,i),r(()=>{u(i,`key`,String(e.prop))});let a=l(`td`,i);t(i,a);let s=l(`code`,a);t(a,s);let d=o(`rue:slot:anchor`);t(s,d),r(()=>{let t=e.prop;x(()=>v(t,s,d))});let f=l(`td`,i);t(i,f);let p=o(`rue:slot:anchor`);t(f,p),r(()=>{let t=e.description;x(()=>v(t,f,p))});let m=l(`td`,i);t(i,m);let h=l(`code`,m);t(m,h);let g=o(`rue:slot:anchor`);t(h,g),r(()=>{let t=e.type;x(()=>v(t,h,g))});let _=l(`td`,i);t(i,_);let y=l(`code`,_);t(_,y);let b=o(`rue:slot:anchor`);return t(y,b),r(()=>{let t=e.defaultValue;x(()=>v(t,y,b))}),n}),n,i)}})}),s}),z=[{prop:`title / content / overlay`,description:`支持标准标题与内容，也支持直接传完整 overlay 卡片以承载更自由的结构。`,type:`any`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单个或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控开合，适合做外部按钮联动、校验提示或场景化引导。`,type:`boolean / boolean / (open: boolean) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`支持四个基础方向和常见角落别名，便于和成熟浮层组件保持一致心智。`,type:`'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | ...`,defaultValue:`'top'`},{prop:`arrow`,description:`支持关闭箭头或通过 pointAtCenter 让箭头对齐触发器中心。`,type:`boolean | { pointAtCenter?: boolean }`,defaultValue:`true`},{prop:`destroyOnHidden`,description:`关闭后是否卸载浮层内容；默认保留 DOM 并切换可见状态，适合轻操作卡片。`,type:`boolean`,defaultValue:`false`},{prop:`mouseEnterDelay / mouseLeaveDelay`,description:`控制 hover 模式的开合延时，单位为秒。`,type:`number / number`,defaultValue:`0.08 / 0.12`},{prop:`classNames / styles`,description:`按 root、trigger、overlay、panel、header、title、content、arrow 等语义块定制。`,type:`PopoverClassNames / PopoverStyles`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle / zIndex`,description:`补充浮层层级、尺寸和视觉样式扩展。`,type:`string / Record<string, any> / number`,defaultValue:`- / - / -`}],B=()=>{let{controlledOpen:n,nextControlledOpen:i}=C(`useSetup:0:0`,()=>b(()=>({controlledOpen:C(`ref:1:0`,()=>p(!1)),nextControlledOpen:C(`ref:1:1`,()=>p(!1))})));return h(u=>{let d=l(`div`,u);e(d,`rounded-box border border-base-300 bg-base-100/75 p-5`);let p=l(`div`,d);t(d,p),e(p,`flex flex-wrap items-center gap-3`);let m=o(`rue:component:anchor`);t(p,m);let g=h(()=>{let n=c(),r=l(`button`,n);return t(n,r),e(r,`btn btn-outline`),t(r,a(`受控触发器`)),n});r(()=>{let e=y(L,{open:n.value,trigger:`click`,title:`受控 Popover`,content:`可以由外部按钮、校验状态或流程步骤直接控制。`,onOpenChange:e=>{n.value=e},children:g});x(()=>v(e,p,m))});let _=l(`button`,p);t(p,_),e(_,`btn btn-primary`),S(_,`mousedown`,()=>{i.value=!n.value}),S(_,`click`,()=>{n.value=i.value});let b=s(_);t(_,b),r(()=>{f(b,n.value?`收起外部控制面板`:`打开外部控制面板`)});let C=l(`span`,p);t(p,C),e(C,`badge badge-outline min-w-[6rem] justify-center`);let w=s(C);return t(C,w),r(()=>{f(w,n.value?`open`:`closed`)}),d})},se=()=>{let{tabBasic:n,tabPlacement:i,tabTrigger:s,tabControlled:u,tabRich:d}=C(`useSetup:0:0:dup1`,()=>b(()=>({tabBasic:C(`ref:1:2`,()=>p(`preview`)),tabPlacement:C(`ref:1:3`,()=>p(`preview`)),tabTrigger:C(`ref:1:4`,()=>p(`preview`)),tabControlled:C(`ref:1:5`,()=>p(`preview`)),tabRich:C(`ref:1:6`,()=>p(`preview`))})));return h(f=>{let p=c(),m=o(`rue:component:anchor`);return t(p,m),v(y(O,{children:h(()=>{let f=c(),p=l(`div`,f);t(f,p),e(p,`max-w-none prose prose-sm md:prose-base`);let m=l(`h1`,p);t(p,m),t(m,a(`Popover 气泡卡片`));let h=l(`p`,p);t(p,h),e(h,`text-sm mt-3 mb-3`),t(h,a(`Popover 用来承载比 Tooltip 更完整的信息块和轻操作。Rue 版本延续了当前的轻卡片视觉， 同时补齐`));let g=l(`code`,h);t(h,g),t(g,a(`title`)),t(h,a(`、`));let _=l(`code`,h);t(h,_),t(_,a(`content`)),t(h,a(`、`));let b=l(`code`,h);t(h,b),t(b,a(`overlay`)),t(h,a(`、触发方式、 定位、箭头和受控开合等核心能力。`));let S=l(`p`,p);t(p,S),e(S,`text-sm text-base-content/70`),t(S,a(`它更适合字段解释、快速状态卡、内联操作和轻量二次确认，而不是用 Modal 打断页面流程。`));let C=o(`rue:component:anchor`);t(p,C),r(()=>{let e=y(k,{title:`Basic popovers`,tab:n,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[D(L,{title:`部署窗口`,content:`今晚 22:00 后会自动切换到新构建。`,children:D(`button`,{className:`btn btn-outline`,children:`Hover for status`})}),D(L,{trigger:`click`,title:`审批提示`,content:`这个批次还缺法务签字，建议先补全再提交。`,children:D(`button`,{className:`btn btn-soft btn-primary`,children:`Click for guidance`})}),D(L,{overlay:E(`div`,{className:`space-y-3 rounded-[1.15rem] border border-base-300/80 bg-base-100/95 p-4 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,children:[E(`div`,{className:`space-y-1`,children:[D(`div`,{className:`text-sm font-semibold`,children:`Release checklist`}),D(`div`,{className:`text-xs leading-5 text-base-content/70`,children:`包含资源校验、追踪链路确认与灰度开关检查。`})]}),E(`div`,{className:`flex gap-2`,children:[D(`button`,{className:`btn btn-sm btn-primary`,children:`继续发布`}),D(`button`,{className:`btn btn-sm btn-ghost`,children:`稍后处理`})]})]}),trigger:`click`,overlayClassName:`max-w-80`,children:D(`button`,{className:`btn btn-soft`,children:`Custom action card`})})]}),code:`<div className="grid gap-4 lg:grid-cols-3">
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
</div>`});x(()=>v(e,p,C))});let w=o(`rue:component:anchor`);t(p,w),r(()=>{let e=y(k,{title:`Placement`,tab:i,preview:()=>E(`div`,{className:`grid gap-6 sm:grid-cols-2 xl:grid-cols-4`,children:[D(L,{open:!0,placement:`topLeft`,title:`Top start`,content:`适合贴着触发器左边缘展示信息。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Top left`})}),D(L,{open:!0,placement:`bottomRight`,title:`Bottom end`,content:`右下角常用来对齐工具条末端。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Bottom right`})}),D(L,{open:!0,placement:`leftTop`,title:`Left top`,content:`适合桌面端列表或表格中的侧向说明。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Left top`})}),D(L,{open:!0,placement:`rightBottom`,title:`Right bottom`,content:`在工具面板、筛选块里会更自然。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Right bottom`})})]}),code:`<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});x(()=>v(e,p,w))});let T=o(`rue:component:anchor`);t(p,T),r(()=>{let e=y(k,{title:`Trigger modes`,tab:s,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-2 xl:grid-cols-4`,children:[D(L,{title:`默认 hover`,content:`鼠标进入时展示，移出后收起。`,children:D(`button`,{className:`btn btn-outline`,children:`Hover`})}),D(L,{trigger:`click`,title:`Click trigger`,content:`再次点击同一个触发器即可关闭。`,children:D(`button`,{className:`btn btn-soft`,children:`Click`})}),D(L,{trigger:`contextMenu`,title:`Context menu`,content:`右键适合承载次级命令或辅助说明。`,children:D(`button`,{className:`btn btn-ghost border border-base-300`,children:`Right click`})}),D(L,{trigger:`focus`,title:`Focus trigger`,content:`适合输入前的字段说明与校验前置提示。`,children:D(`input`,{className:`input input-bordered w-full`,placeholder:`Focus this input`})})]}),code:`<div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
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
</div>`});x(()=>v(e,p,T))});let O=o(`rue:component:anchor`);t(p,O),r(()=>{let e=y(k,{title:`Controlled visibility`,tab:u,preview:()=>D(B,{}),code:`const controlledOpen = ref(false)
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
</div>`});x(()=>v(e,p,O))});let A=o(`rue:component:anchor`);t(p,A),r(()=>{let e=y(k,{title:`Arrow and semantic styling`,tab:d,preview:()=>E(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[D(L,{open:!0,placement:`bottom`,arrow:{pointAtCenter:!0},title:`Centered arrow`,content:`箭头会对齐到触发器中心，更适合宽按钮或卡片入口。`,className:`justify-self-start`,children:D(`button`,{className:`btn btn-primary w-52 justify-center`,children:`Point at center`})}),D(L,{open:!0,placement:`rightTop`,arrow:!1,title:`Editorial pulse`,content:E(`div`,{className:`space-y-2`,children:[D(`div`,{className:`text-xs text-base-content/60`,children:`本周更新节奏`}),E(`div`,{className:`flex items-center gap-2`,children:[D(`span`,{className:`badge badge-primary badge-soft`,children:`+12%`}),D(`span`,{className:`text-xs text-base-content/70`,children:`首屏转化高于上周`})]})]}),classNames:{panel:`border-primary/20 bg-base-100/98`,header:`bg-primary/5`,title:`uppercase tracking-[0.14em] text-[11px] text-primary`},styles:{content:{padding:`0.75rem 1rem 1rem`}},className:`justify-self-start`,children:D(`button`,{className:`btn btn-outline btn-primary`,children:`Styled card`})})]}),code:`<div className="grid gap-6 lg:grid-cols-2">
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
</div>`});x(()=>v(e,p,A))});let j=l(`h2`,p);t(p,j),e(j,`mt-12`),t(j,a(`API`));let M=o(`rue:component:anchor`);return t(p,M),r(()=>{let e=y(R,{rows:z});x(()=>v(e,p,M))}),f})}),p,m),p})};export{se as default};
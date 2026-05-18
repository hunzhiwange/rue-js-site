import{F as e,I as t,K as n,L as r,M as i,N as a,Q as o,R as s,W as c,X as l,_t as u,d,dt as f,ht as p,i as m,l as h,o as g,s as _,st as v,t as y,v as b,vt as x,z as S}from"./vapor-runtime-BuwLbCGk.js";import{a as C,n as w,t as T}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as E,t as D}from"./src-BQwLQD8R.js";import{n as O}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as k}from"./PreviewBlock-Cks1b4IL.js";var A=(...e)=>e.filter(Boolean).join(` `),j=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},M=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),N=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:M(e)}:${String(t)}`).join(`; `):``,ee=(e,t)=>[N(e),N(t)].filter(Boolean).join(`; `)||void 0,te=e=>{let t=Array.isArray(e)?e:e?[e]:[`hover`];return Array.from(new Set(t))},P=(e,t)=>{typeof e==`function`&&e(t)},F=e=>typeof e==`function`?e():e,I=e=>e!=null&&e!==!1,ne=e=>{switch(e){case`top`:return{direction:`top`,align:`center`};case`topLeft`:return{direction:`top`,align:`start`};case`topRight`:return{direction:`top`,align:`end`};case`bottom`:return{direction:`bottom`,align:`center`};case`bottomRight`:return{direction:`bottom`,align:`end`};case`left`:return{direction:`left`,align:`center`};case`leftTop`:return{direction:`left`,align:`start`};case`leftBottom`:return{direction:`left`,align:`end`};case`right`:return{direction:`right`,align:`center`};case`rightTop`:return{direction:`right`,align:`start`};case`rightBottom`:return{direction:`right`,align:`end`};default:return{direction:`bottom`,align:`start`}}},re=e=>{switch(e){case`top`:return`bottom-full left-1/2 mb-3 -translate-x-1/2`;case`topLeft`:return`bottom-full left-0 mb-3`;case`topRight`:return`bottom-full right-0 mb-3`;case`bottom`:return`top-full left-1/2 mt-3 -translate-x-1/2`;case`bottomRight`:return`top-full right-0 mt-3`;case`left`:return`right-full top-1/2 me-3 -translate-y-1/2`;case`leftTop`:return`right-full top-0 me-3`;case`leftBottom`:return`right-full bottom-0 me-3`;case`right`:return`left-full top-1/2 ms-3 -translate-y-1/2`;case`rightTop`:return`left-full top-0 ms-3`;case`rightBottom`:return`left-full bottom-0 ms-3`;default:return`top-full left-0 mt-3`}},ie=e=>{switch(e){case`top`:case`topLeft`:case`topRight`:return`origin-bottom`;case`left`:case`leftTop`:case`leftBottom`:return`origin-right`;case`right`:case`rightTop`:case`rightBottom`:return`origin-left`;default:return`origin-top`}},ae=(e,t)=>{let n=ne(e);return n.direction===`top`?A(`bottom-[-6px] border-r border-b`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`bottom`?A(`top-[-6px] border-l border-t`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`left`?A(`right-[-6px] border-r border-t`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`):A(`left-[-6px] border-l border-b`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`)},oe=(t,o,c,u,p,g,_,v,y,S,C)=>t===`span`?d(t=>{let o=r(`span`,t);x(()=>{n(o,String(c))}),x(()=>{l(o,u)});let d=T(o,()=>p);m(()=>{d()}),i(o,`mouseenter`,g),i(o,`mouseleave`,_),i(o,`focus`,v),i(o,`blur`,y);let b=e(`rue:slot:anchor`);a(o,b),x(()=>{let e=S;f(()=>h(e,o,b))}),a(o,s(` `));let w=e(`rue:slot:anchor`);return a(o,w),x(()=>{let e=C;f(()=>h(e,o,w))}),o}):t===`section`?d(t=>{let o=r(`section`,t);x(()=>{n(o,String(c))}),x(()=>{l(o,u)});let d=T(o,()=>p);m(()=>{d()}),i(o,`mouseenter`,g),i(o,`mouseleave`,_),i(o,`focus`,v),i(o,`blur`,y);let b=e(`rue:slot:anchor`);a(o,b),x(()=>{let e=S;f(()=>h(e,o,b))}),a(o,s(` `));let w=e(`rue:slot:anchor`);return a(o,w),x(()=>{let e=C;f(()=>h(e,o,w))}),o}):t===`article`?d(t=>{let o=r(`article`,t);x(()=>{n(o,String(c))}),x(()=>{l(o,u)});let d=T(o,()=>p);m(()=>{d()}),i(o,`mouseenter`,g),i(o,`mouseleave`,_),i(o,`focus`,v),i(o,`blur`,y);let b=e(`rue:slot:anchor`);a(o,b),x(()=>{let e=S;f(()=>h(e,o,b))}),a(o,s(` `));let w=e(`rue:slot:anchor`);return a(o,w),x(()=>{let e=C;f(()=>h(e,o,w))}),o}):t===`label`?d(t=>{let o=r(`label`,t);x(()=>{n(o,String(c))}),x(()=>{l(o,u)});let d=T(o,()=>p);m(()=>{d()}),i(o,`mouseenter`,g),i(o,`mouseleave`,_),i(o,`focus`,v),i(o,`blur`,y);let b=e(`rue:slot:anchor`);a(o,b),x(()=>{let e=S;f(()=>h(e,o,b))}),a(o,s(` `));let w=e(`rue:slot:anchor`);return a(o,w),x(()=>{let e=C;f(()=>h(e,o,w))}),o}):t===`div`?d(t=>{let o=r(`div`,t);x(()=>{n(o,String(c))}),x(()=>{l(o,u)});let d=T(o,()=>p);m(()=>{d()}),i(o,`mouseenter`,g),i(o,`mouseleave`,_),i(o,`focus`,v),i(o,`blur`,y);let b=e(`rue:slot:anchor`);a(o,b),x(()=>{let e=S;f(()=>h(e,o,b))}),a(o,s(` `));let w=e(`rue:slot:anchor`);return a(o,w),x(()=>{let e=C;f(()=>h(e,o,w))}),o}):b(t,{...o,className:c,style:u,ref:p,onMouseEnter:g,onMouseLeave:_,onFocus:v,onBlur:y},S,C),L=({as:e=`div`,title:t,content:n,overlay:r,placement:i=`top`,trigger:a,open:o,defaultOpen:s,disabled:c,arrow:l=!0,destroyOnHidden:d=!1,mouseEnterDelay:f=.08,mouseLeaveDelay:p=.12,zIndex:m,className:h,style:y,triggerClassName:b,triggerStyle:x,overlayClassName:S,overlayStyle:w,classNames:T,styles:O,onOpenChange:k,children:M,...ne})=>{let L=e,R=C(`ref:1:0`,()=>v(s??!1)),z=C(`ref:1:1`,()=>v(o??s??!1)),B=C(`ref:1:2`,()=>v(te(a))),se=o!==void 0,V=null,H=null,U=null,W=null,G=null,K=e=>{H&&H.setAttribute(`aria-expanded`,String(e)),U&&(U.setAttribute(`aria-hidden`,e?`false`:`true`),U.classList.toggle(`pointer-events-auto`,e),U.classList.toggle(`visible`,e),U.classList.toggle(`opacity-100`,e),U.classList.toggle(`scale-100`,e),U.classList.toggle(`pointer-events-none`,!e),U.classList.toggle(`invisible`,!e),U.classList.toggle(`opacity-0`,!e),U.classList.toggle(`scale-95`,!e))};C(`watch:1:3`,()=>u(()=>o,e=>{z.value=typeof e==`boolean`?e:R.value,K(z.value)},{immediate:!0})),C(`watch:1:4`,()=>u(()=>a,e=>{B.value=te(e)},{immediate:!0})),C(`watch:1:5`,()=>u(()=>s,e=>{se||(R.value=!!e,z.value=!!e,K(z.value))},{immediate:!0}));let q=()=>{W&&=(clearTimeout(W),null),G&&=(clearTimeout(G),null)},J=()=>z.value,Y=e=>{c||!$||e!==J()&&(se||(R.value=e),z.value=e,K(e),typeof k==`function`&&k(e))},ce=()=>{if(he){if(G&&=(clearTimeout(G),null),f<=0){Y(!0);return}W&&clearTimeout(W),W=setTimeout(()=>{W=null,Y(!0)},f*1e3)}},le=()=>{if(he){if(W&&=(clearTimeout(W),null),p<=0){Y(!1);return}G&&clearTimeout(G),G=setTimeout(()=>{G=null,Y(!1)},p*1e3)}},ue=e=>{J()&&(_e||ve)&&(V?.contains(e.target)||Y(!1))},de=e=>{!J()||e.key!==`Escape`||Y(!1)},fe=e=>{ge&&Y(!0)},pe=e=>{if(!ge)return;let t=e.relatedTarget;t&&V?.contains(t)||Y(!1)};g(()=>{typeof window>`u`||(window.addEventListener(`click`,ue,!0),window.addEventListener(`keydown`,de),V?.addEventListener(`focusin`,fe),V?.addEventListener(`focusout`,pe),K(z.value))}),_(()=>{q(),V?.removeEventListener(`focusin`,fe),V?.removeEventListener(`focusout`,pe),!(typeof window>`u`)&&(window.removeEventListener(`click`,ue,!0),window.removeEventListener(`keydown`,de))});let X=F(t),Z=F(n),Q=r===void 0?void 0:F(r),me=I(X)||I(Z),$=I(Q)||me,he=B.value.includes(`hover`),ge=B.value.includes(`focus`),_e=B.value.includes(`click`),ve=B.value.includes(`contextMenu`),ye=$&&(z.value||!d),be=typeof l==`object`&&!!l.pointAtCenter,xe=l!==!1,{onMouseEnter:Se,onMouseLeave:Ce,onFocus:we,onBlur:Te,onClick:Ee,onContextMenu:De,...Oe}=ne,ke=A(`relative inline-flex max-w-full align-top`,T?.root,h),Ae=A(`inline-flex max-w-full items-stretch`,T?.trigger,b),je=A(`absolute z-50 w-max max-w-[min(24rem,calc(100vw-2rem))] transform-gpu transition duration-150 ease-out`,re(i),ie(i),z.value?`pointer-events-auto visible opacity-100 scale-100`:`pointer-events-none invisible opacity-0 scale-95`,T?.overlay,S),Me=A(`relative min-w-64 overflow-hidden rounded-[1.15rem] border border-base-300/80 bg-base-100/95 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,T?.panel),Ne=A(`absolute block h-3 w-3 rotate-45 border-base-300/80 bg-base-100/95`,ae(i,be),T?.arrow),Pe=A(`border-b border-base-300/70 px-4 py-3`,T?.header),Fe=A(`text-sm font-semibold tracking-[0.01em] text-base-content`,T?.title),Ie=A(`px-4 py-3 text-sm leading-6 text-base-content/80`,T?.content),Le=ee(y,O?.root),Re=ee(x,O?.trigger),ze=j(O?.overlay,w);typeof m==`number`&&(ze.zIndex=m);let Be=N(ze)||void 0,Ve=N(O?.panel)||void 0,He=N(O?.arrow)||void 0,Ue=N(O?.header)||void 0,We=N(O?.title)||void 0,Ge=N(O?.content)||void 0,Ke=ye?I(Q)?Q:E(`div`,{className:Me,style:Ve,role:`dialog`,"aria-modal":`false`,children:[I(X)?D(`div`,{className:Pe,style:Ue,children:D(`div`,{className:Fe,style:We,children:X})}):null,I(Z)?D(`div`,{className:Ie,style:Ge,children:Z}):null]}):null;return oe(L,Oe,ke,Le,e=>{V=e},e=>{P(Se,e),e?.defaultPrevented||ce()},e=>{P(Ce,e),e?.defaultPrevented||le()},e=>{P(we,e)},e=>{P(Te,e)},D(`div`,{className:Ae,style:Re,ref:e=>{H=e},"aria-haspopup":$?`dialog`:void 0,"aria-expanded":$?String(z.value):void 0,onClick:e=>{P(Ee,e),!e?.defaultPrevented&&_e&&(q(),Y(!J()))},onContextMenu:e=>{P(De,e),!e?.defaultPrevented&&ve&&(typeof e.preventDefault==`function`&&e.preventDefault(),q(),Y(!J()))},children:M}),ye?E(`div`,{className:je,style:Be,ref:e=>{U=e},"aria-hidden":z.value?`false`:`true`,children:[xe?D(`span`,{className:Ne,style:He}):null,Ke]}):null)},R=i=>d(o=>{let l=r(`div`,o);n(l,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=r(`table`,l);a(l,u),n(u,`table table-zebra`);let p=r(`thead`,u);a(u,p);let m=r(`tr`,p);a(p,m);let g=r(`th`,m);a(m,g),a(g,s(`属性`));let _=r(`th`,m);a(m,_),a(_,s(`说明`));let v=r(`th`,m);a(m,v),a(v,s(`类型`));let y=r(`th`,m);a(m,y),a(y,s(`默认值`));let b=r(`tbody`,u);a(u,b);let S=e(`rue:list:start`),C=e(`rue:list:end`);a(b,S),a(b,C);let T=new Map;return x(()=>{T=w({items:i.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:b,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(n,i,o,s,l)=>{h(d(()=>{let i=t(),o=r(`tr`,i);a(i,o),x(()=>{c(o,`key`,String(n.prop))});let s=r(`td`,o);a(o,s);let l=r(`code`,s);a(s,l);let u=e(`rue:slot:anchor`);a(l,u),x(()=>{let e=n.prop;f(()=>h(e,l,u))});let d=r(`td`,o);a(o,d);let p=e(`rue:slot:anchor`);a(d,p),x(()=>{let e=n.description;f(()=>h(e,d,p))});let m=r(`td`,o);a(o,m);let g=r(`code`,m);a(m,g);let _=e(`rue:slot:anchor`);a(g,_),x(()=>{let e=n.type;f(()=>h(e,g,_))});let v=r(`td`,o);a(o,v);let y=r(`code`,v);a(v,y);let b=e(`rue:slot:anchor`);return a(y,b),x(()=>{let e=n.defaultValue;f(()=>h(e,y,b))}),i}),i,o)}})}),l}),z=[{prop:`title / content / overlay`,description:`支持标准标题与内容，也支持直接传完整 overlay 卡片以承载更自由的结构。`,type:`any`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单个或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控开合，适合做外部按钮联动、校验提示或场景化引导。`,type:`boolean / boolean / (open: boolean) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`支持四个基础方向和常见角落别名，便于和成熟浮层组件保持一致心智。`,type:`'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | ...`,defaultValue:`'top'`},{prop:`arrow`,description:`支持关闭箭头或通过 pointAtCenter 让箭头对齐触发器中心。`,type:`boolean | { pointAtCenter?: boolean }`,defaultValue:`true`},{prop:`destroyOnHidden`,description:`关闭后是否卸载浮层内容；默认保留 DOM 并切换可见状态，适合轻操作卡片。`,type:`boolean`,defaultValue:`false`},{prop:`mouseEnterDelay / mouseLeaveDelay`,description:`控制 hover 模式的开合延时，单位为秒。`,type:`number / number`,defaultValue:`0.08 / 0.12`},{prop:`classNames / styles`,description:`按 root、trigger、overlay、panel、header、title、content、arrow 等语义块定制。`,type:`PopoverClassNames / PopoverStyles`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle / zIndex`,description:`补充浮层层级、尺寸和视觉样式扩展。`,type:`string / Record<string, any> / number`,defaultValue:`- / - / -`}],B=()=>{let{controlledOpen:c,nextControlledOpen:l}=C(`useSetup:0:0`,()=>p(()=>({controlledOpen:C(`ref:1:0`,()=>v(!1)),nextControlledOpen:C(`ref:1:1`,()=>v(!1))})));return d(u=>{let p=r(`div`,u);n(p,`rounded-box border border-base-300 bg-base-100/75 p-5`);let m=r(`div`,p);a(p,m),n(m,`flex flex-wrap items-center gap-3`);let g=e(`rue:component:anchor`);a(m,g);let _=d(()=>{let e=t(),i=r(`button`,e);return a(e,i),n(i,`btn btn-outline`),a(i,s(`受控触发器`)),e});x(()=>{let e=y(L,{open:c.value,trigger:`click`,title:`受控 Popover`,content:`可以由外部按钮、校验状态或流程步骤直接控制。`,onOpenChange:e=>{c.value=e},children:_});f(()=>h(e,m,g))});let v=r(`button`,m);a(m,v),n(v,`btn btn-primary`),i(v,`mousedown`,()=>{l.value=!c.value}),i(v,`click`,()=>{c.value=l.value});let b=S(v);a(v,b),x(()=>{o(b,c.value?`收起外部控制面板`:`打开外部控制面板`)});let C=r(`span`,m);a(m,C),n(C,`badge badge-outline min-w-[6rem] justify-center`);let w=S(C);return a(C,w),x(()=>{o(w,c.value?`open`:`closed`)}),p})},se=()=>{let{tabBasic:i,tabPlacement:o,tabTrigger:c,tabControlled:l,tabRich:u}=C(`useSetup:0:0:dup1`,()=>p(()=>({tabBasic:C(`ref:1:2`,()=>v(`preview`)),tabPlacement:C(`ref:1:3`,()=>v(`preview`)),tabTrigger:C(`ref:1:4`,()=>v(`preview`)),tabControlled:C(`ref:1:5`,()=>v(`preview`)),tabRich:C(`ref:1:6`,()=>v(`preview`))})));return d(p=>{let m=t(),g=e(`rue:component:anchor`);return a(m,g),h(y(O,{children:d(()=>{let d=t(),p=r(`div`,d);a(d,p),n(p,`max-w-none prose prose-sm md:prose-base`);let m=r(`h1`,p);a(p,m),a(m,s(`Popover 气泡卡片`));let g=r(`p`,p);a(p,g),n(g,`text-sm mt-3 mb-3`),a(g,s(`Popover 用来承载比 Tooltip 更完整的信息块和轻操作。Rue 版本延续了当前的轻卡片视觉， 同时补齐`));let _=r(`code`,g);a(g,_),a(_,s(`title`)),a(g,s(`、`));let v=r(`code`,g);a(g,v),a(v,s(`content`)),a(g,s(`、`));let b=r(`code`,g);a(g,b),a(b,s(`overlay`)),a(g,s(`、触发方式、 定位、箭头和受控开合等核心能力。`));let S=r(`p`,p);a(p,S),n(S,`text-sm text-base-content/70`),a(S,s(`它更适合字段解释、快速状态卡、内联操作和轻量二次确认，而不是用 Modal 打断页面流程。`));let C=e(`rue:component:anchor`);a(p,C),x(()=>{let e=y(k,{title:`Basic popovers`,tab:i,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[D(L,{title:`部署窗口`,content:`今晚 22:00 后会自动切换到新构建。`,children:D(`button`,{className:`btn btn-outline`,children:`Hover for status`})}),D(L,{trigger:`click`,title:`审批提示`,content:`这个批次还缺法务签字，建议先补全再提交。`,children:D(`button`,{className:`btn btn-soft btn-primary`,children:`Click for guidance`})}),D(L,{overlay:E(`div`,{className:`space-y-3 rounded-[1.15rem] border border-base-300/80 bg-base-100/95 p-4 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,children:[E(`div`,{className:`space-y-1`,children:[D(`div`,{className:`text-sm font-semibold`,children:`Release checklist`}),D(`div`,{className:`text-xs leading-5 text-base-content/70`,children:`包含资源校验、追踪链路确认与灰度开关检查。`})]}),E(`div`,{className:`flex gap-2`,children:[D(`button`,{className:`btn btn-sm btn-primary`,children:`继续发布`}),D(`button`,{className:`btn btn-sm btn-ghost`,children:`稍后处理`})]})]}),trigger:`click`,overlayClassName:`max-w-80`,children:D(`button`,{className:`btn btn-soft`,children:`Custom action card`})})]}),code:`<div className="grid gap-4 lg:grid-cols-3">
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
</div>`});f(()=>h(e,p,C))});let w=e(`rue:component:anchor`);a(p,w),x(()=>{let e=y(k,{title:`Placement`,tab:o,preview:()=>E(`div`,{className:`grid gap-6 sm:grid-cols-2 xl:grid-cols-4`,children:[D(L,{open:!0,placement:`topLeft`,title:`Top start`,content:`适合贴着触发器左边缘展示信息。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Top left`})}),D(L,{open:!0,placement:`bottomRight`,title:`Bottom end`,content:`右下角常用来对齐工具条末端。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Bottom right`})}),D(L,{open:!0,placement:`leftTop`,title:`Left top`,content:`适合桌面端列表或表格中的侧向说明。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Left top`})}),D(L,{open:!0,placement:`rightBottom`,title:`Right bottom`,content:`在工具面板、筛选块里会更自然。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Right bottom`})})]}),code:`<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});f(()=>h(e,p,w))});let T=e(`rue:component:anchor`);a(p,T),x(()=>{let e=y(k,{title:`Trigger modes`,tab:c,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-2 xl:grid-cols-4`,children:[D(L,{title:`默认 hover`,content:`鼠标进入时展示，移出后收起。`,children:D(`button`,{className:`btn btn-outline`,children:`Hover`})}),D(L,{trigger:`click`,title:`Click trigger`,content:`再次点击同一个触发器即可关闭。`,children:D(`button`,{className:`btn btn-soft`,children:`Click`})}),D(L,{trigger:`contextMenu`,title:`Context menu`,content:`右键适合承载次级命令或辅助说明。`,children:D(`button`,{className:`btn btn-ghost border border-base-300`,children:`Right click`})}),D(L,{trigger:`focus`,title:`Focus trigger`,content:`适合输入前的字段说明与校验前置提示。`,children:D(`input`,{className:`input input-bordered w-full`,placeholder:`Focus this input`})})]}),code:`<div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
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
</div>`});f(()=>h(e,p,T))});let O=e(`rue:component:anchor`);a(p,O),x(()=>{let e=y(k,{title:`Controlled visibility`,tab:l,preview:()=>D(B,{}),code:`const controlledOpen = ref(false)
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
</div>`});f(()=>h(e,p,O))});let A=e(`rue:component:anchor`);a(p,A),x(()=>{let e=y(k,{title:`Arrow and semantic styling`,tab:u,preview:()=>E(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[D(L,{open:!0,placement:`bottom`,arrow:{pointAtCenter:!0},title:`Centered arrow`,content:`箭头会对齐到触发器中心，更适合宽按钮或卡片入口。`,className:`justify-self-start`,children:D(`button`,{className:`btn btn-primary w-52 justify-center`,children:`Point at center`})}),D(L,{open:!0,placement:`rightTop`,arrow:!1,title:`Editorial pulse`,content:E(`div`,{className:`space-y-2`,children:[D(`div`,{className:`text-xs text-base-content/60`,children:`本周更新节奏`}),E(`div`,{className:`flex items-center gap-2`,children:[D(`span`,{className:`badge badge-primary badge-soft`,children:`+12%`}),D(`span`,{className:`text-xs text-base-content/70`,children:`首屏转化高于上周`})]})]}),classNames:{panel:`border-primary/20 bg-base-100/98`,header:`bg-primary/5`,title:`uppercase tracking-[0.14em] text-[11px] text-primary`},styles:{content:{padding:`0.75rem 1rem 1rem`}},className:`justify-self-start`,children:D(`button`,{className:`btn btn-outline btn-primary`,children:`Styled card`})})]}),code:`<div className="grid gap-6 lg:grid-cols-2">
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
</div>`});f(()=>h(e,p,A))});let j=r(`h2`,p);a(p,j),n(j,`mt-12`),a(j,s(`API`));let M=e(`rue:component:anchor`);return a(p,M),x(()=>{let e=y(R,{rows:z});f(()=>h(e,p,M))}),d})}),m,g),m})};export{se as default};
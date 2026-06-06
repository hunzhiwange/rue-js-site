import{$ as e,J as t,Jt as n,Kt as r,Lt as i,Q as a,S as o,Vt as s,Y as c,Yt as l,Z as u,a as d,ct as f,et as p,ft as m,i as h,l as g,mt as _,ot as v,r as y,s as b,t as x,tt as S}from"./vapor-runtime-DHPuOjqh.js";import{a as C,n as w,t as T}from"./vapor-helpers-vapor-CJFAWine.js";import{a as E,i as D}from"./persistentSidebarPlayground-C_0jw6dq.js";import{n as O}from"./SidebarPlaygroundDesign-DMSFSCs3.js";import{t as k}from"./PreviewBlock-BYaG1RFO.js";var A=(...e)=>e.filter(Boolean).join(` `),j=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},M=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),N=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:M(e)}:${String(t)}`).join(`; `):``,ee=(e,t)=>[N(e),N(t)].filter(Boolean).join(`; `)||void 0,te=e=>{let t=Array.isArray(e)?e:e?[e]:[`hover`];return Array.from(new Set(t))},P=(e,t)=>{typeof e==`function`&&e(t)},F=e=>typeof e==`function`?e():e,I=e=>e!=null&&e!==!1,ne=e=>{switch(e){case`top`:return{direction:`top`,align:`center`};case`topLeft`:return{direction:`top`,align:`start`};case`topRight`:return{direction:`top`,align:`end`};case`bottom`:return{direction:`bottom`,align:`center`};case`bottomRight`:return{direction:`bottom`,align:`end`};case`left`:return{direction:`left`,align:`center`};case`leftTop`:return{direction:`left`,align:`start`};case`leftBottom`:return{direction:`left`,align:`end`};case`right`:return{direction:`right`,align:`center`};case`rightTop`:return{direction:`right`,align:`start`};case`rightBottom`:return{direction:`right`,align:`end`};default:return{direction:`bottom`,align:`start`}}},re=e=>{switch(e){case`top`:return`bottom-full left-1/2 mb-3 -translate-x-1/2`;case`topLeft`:return`bottom-full left-0 mb-3`;case`topRight`:return`bottom-full right-0 mb-3`;case`bottom`:return`top-full left-1/2 mt-3 -translate-x-1/2`;case`bottomRight`:return`top-full right-0 mt-3`;case`left`:return`right-full top-1/2 me-3 -translate-y-1/2`;case`leftTop`:return`right-full top-0 me-3`;case`leftBottom`:return`right-full bottom-0 me-3`;case`right`:return`left-full top-1/2 ms-3 -translate-y-1/2`;case`rightTop`:return`left-full top-0 ms-3`;case`rightBottom`:return`left-full bottom-0 ms-3`;default:return`top-full left-0 mt-3`}},ie=e=>{switch(e){case`top`:case`topLeft`:case`topRight`:return`origin-bottom`;case`left`:case`leftTop`:case`leftBottom`:return`origin-right`;case`right`:case`rightTop`:case`rightBottom`:return`origin-left`;default:return`origin-top`}},ae=(e,t)=>{let n=ne(e);return n.direction===`top`?A(`bottom-[-6px] border-r border-b`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`bottom`?A(`top-[-6px] border-l border-t`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`left`?A(`right-[-6px] border-r border-t`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`):A(`left-[-6px] border-l border-b`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`)},oe=(n,r,i,a,d,h,_,v,x,S,C)=>n===`span`?g(n=>{let r=e(`span`,n);l(()=>{f(r,String(i))}),l(()=>{m(r,a)});let o=T(r,()=>d);y(()=>{o()}),t(r,`mouseenter`,h),t(r,`mouseleave`,_),t(r,`focus`,v),t(r,`blur`,x);let g=u(`rue:slot:anchor`);c(r,g),l(()=>{let e=S;s(()=>b(e,r,g))}),c(r,p(` `));let w=u(`rue:slot:anchor`);return c(r,w),l(()=>{let e=C;s(()=>b(e,r,w))}),r}):n===`section`?g(n=>{let r=e(`section`,n);l(()=>{f(r,String(i))}),l(()=>{m(r,a)});let o=T(r,()=>d);y(()=>{o()}),t(r,`mouseenter`,h),t(r,`mouseleave`,_),t(r,`focus`,v),t(r,`blur`,x);let g=u(`rue:slot:anchor`);c(r,g),l(()=>{let e=S;s(()=>b(e,r,g))}),c(r,p(` `));let w=u(`rue:slot:anchor`);return c(r,w),l(()=>{let e=C;s(()=>b(e,r,w))}),r}):n===`article`?g(n=>{let r=e(`article`,n);l(()=>{f(r,String(i))}),l(()=>{m(r,a)});let o=T(r,()=>d);y(()=>{o()}),t(r,`mouseenter`,h),t(r,`mouseleave`,_),t(r,`focus`,v),t(r,`blur`,x);let g=u(`rue:slot:anchor`);c(r,g),l(()=>{let e=S;s(()=>b(e,r,g))}),c(r,p(` `));let w=u(`rue:slot:anchor`);return c(r,w),l(()=>{let e=C;s(()=>b(e,r,w))}),r}):n===`label`?g(n=>{let r=e(`label`,n);l(()=>{f(r,String(i))}),l(()=>{m(r,a)});let o=T(r,()=>d);y(()=>{o()}),t(r,`mouseenter`,h),t(r,`mouseleave`,_),t(r,`focus`,v),t(r,`blur`,x);let g=u(`rue:slot:anchor`);c(r,g),l(()=>{let e=S;s(()=>b(e,r,g))}),c(r,p(` `));let w=u(`rue:slot:anchor`);return c(r,w),l(()=>{let e=C;s(()=>b(e,r,w))}),r}):n===`div`?g(n=>{let r=e(`div`,n);l(()=>{f(r,String(i))}),l(()=>{m(r,a)});let o=T(r,()=>d);y(()=>{o()}),t(r,`mouseenter`,h),t(r,`mouseleave`,_),t(r,`focus`,v),t(r,`blur`,x);let g=u(`rue:slot:anchor`);c(r,g),l(()=>{let e=S;s(()=>b(e,r,g))}),c(r,p(` `));let w=u(`rue:slot:anchor`);return c(r,w),l(()=>{let e=C;s(()=>b(e,r,w))}),r}):o(n,{...r,className:i,style:a,ref:d,onMouseEnter:h,onMouseLeave:_,onFocus:v,onBlur:x},S,C),L=({as:e=`div`,title:t,content:r,overlay:a,placement:o=`top`,trigger:s,open:c,defaultOpen:l,disabled:u,arrow:f=!0,destroyOnHidden:p=!1,mouseEnterDelay:m=.08,mouseLeaveDelay:g=.12,zIndex:_,className:v,style:y,triggerClassName:b,triggerStyle:x,overlayClassName:S,overlayStyle:w,classNames:T,styles:O,onOpenChange:k,children:M,...ne})=>{let L=e,R=C(`ref:1:0`,()=>i(l??!1)),z=C(`ref:1:1`,()=>i(c??l??!1)),B=C(`ref:1:2`,()=>i(te(s))),se=c!==void 0,V=null,H=null,U=null,W=null,G=null,K=e=>{H&&H.setAttribute(`aria-expanded`,String(e)),U&&(U.setAttribute(`aria-hidden`,e?`false`:`true`),U.classList.toggle(`pointer-events-auto`,e),U.classList.toggle(`visible`,e),U.classList.toggle(`opacity-100`,e),U.classList.toggle(`scale-100`,e),U.classList.toggle(`pointer-events-none`,!e),U.classList.toggle(`invisible`,!e),U.classList.toggle(`opacity-0`,!e),U.classList.toggle(`scale-95`,!e))};C(`watch:1:3`,()=>n(()=>c,e=>{z.value=typeof e==`boolean`?e:R.value,K(z.value)},{immediate:!0})),C(`watch:1:4`,()=>n(()=>s,e=>{B.value=te(e)},{immediate:!0})),C(`watch:1:5`,()=>n(()=>l,e=>{se||(R.value=!!e,z.value=!!e,K(z.value))},{immediate:!0}));let q=()=>{W&&=(clearTimeout(W),null),G&&=(clearTimeout(G),null)},J=()=>z.value,Y=e=>{u||!$||e!==J()&&(se||(R.value=e),z.value=e,K(e),typeof k==`function`&&k(e))},ce=()=>{if(he){if(G&&=(clearTimeout(G),null),m<=0){Y(!0);return}W&&clearTimeout(W),W=setTimeout(()=>{W=null,Y(!0)},m*1e3)}},le=()=>{if(he){if(W&&=(clearTimeout(W),null),g<=0){Y(!1);return}G&&clearTimeout(G),G=setTimeout(()=>{G=null,Y(!1)},g*1e3)}},ue=e=>{J()&&(_e||ve)&&(V?.contains(e.target)||Y(!1))},de=e=>{!J()||e.key!==`Escape`||Y(!1)},fe=e=>{ge&&Y(!0)},pe=e=>{if(!ge)return;let t=e.relatedTarget;t&&V?.contains(t)||Y(!1)};h(()=>{typeof window>`u`||(window.addEventListener(`click`,ue,!0),window.addEventListener(`keydown`,de),V?.addEventListener(`focusin`,fe),V?.addEventListener(`focusout`,pe),K(z.value))}),d(()=>{q(),V?.removeEventListener(`focusin`,fe),V?.removeEventListener(`focusout`,pe),!(typeof window>`u`)&&(window.removeEventListener(`click`,ue,!0),window.removeEventListener(`keydown`,de))});let X=F(t),Z=F(r),Q=a===void 0?void 0:F(a),me=I(X)||I(Z),$=I(Q)||me,he=B.value.includes(`hover`),ge=B.value.includes(`focus`),_e=B.value.includes(`click`),ve=B.value.includes(`contextMenu`),ye=$&&(z.value||!p),be=typeof f==`object`&&!!f.pointAtCenter,xe=f!==!1,{onMouseEnter:Se,onMouseLeave:Ce,onFocus:we,onBlur:Te,onClick:Ee,onContextMenu:De,...Oe}=ne,ke=A(`relative inline-flex max-w-full align-top`,T?.root,v),Ae=A(`inline-flex max-w-full items-stretch`,T?.trigger,b),je=A(`absolute z-50 w-max max-w-[min(24rem,calc(100vw-2rem))] transform-gpu transition duration-150 ease-out`,re(o),ie(o),z.value?`pointer-events-auto visible opacity-100 scale-100`:`pointer-events-none invisible opacity-0 scale-95`,T?.overlay,S),Me=A(`relative min-w-64 overflow-hidden rounded-[1.15rem] border border-base-300/80 bg-base-100/95 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,T?.panel),Ne=A(`absolute block h-3 w-3 rotate-45 border-base-300/80 bg-base-100/95`,ae(o,be),T?.arrow),Pe=A(`border-b border-base-300/70 px-4 py-3`,T?.header),Fe=A(`text-sm font-semibold tracking-[0.01em] text-base-content`,T?.title),Ie=A(`px-4 py-3 text-sm leading-6 text-base-content/80`,T?.content),Le=ee(y,O?.root),Re=ee(x,O?.trigger),ze=j(O?.overlay,w);typeof _==`number`&&(ze.zIndex=_);let Be=N(ze)||void 0,Ve=N(O?.panel)||void 0,He=N(O?.arrow)||void 0,Ue=N(O?.header)||void 0,We=N(O?.title)||void 0,Ge=N(O?.content)||void 0,Ke=ye?I(Q)?Q:E(`div`,{className:Me,style:Ve,role:`dialog`,"aria-modal":`false`,children:[I(X)?D(`div`,{className:Pe,style:Ue,children:D(`div`,{className:Fe,style:We,children:X})}):null,I(Z)?D(`div`,{className:Ie,style:Ge,children:Z}):null]}):null;return oe(L,Oe,ke,Le,e=>{V=e},e=>{P(Se,e),e?.defaultPrevented||ce()},e=>{P(Ce,e),e?.defaultPrevented||le()},e=>{P(we,e)},e=>{P(Te,e)},D(`div`,{className:Ae,style:Re,ref:e=>{H=e},"aria-haspopup":$?`dialog`:void 0,"aria-expanded":$?String(z.value):void 0,onClick:e=>{P(Ee,e),!e?.defaultPrevented&&_e&&(q(),Y(!J()))},onContextMenu:e=>{P(De,e),!e?.defaultPrevented&&ve&&(typeof e.preventDefault==`function`&&e.preventDefault(),q(),Y(!J()))},children:M}),ye?E(`div`,{className:je,style:Be,ref:e=>{U=e},"aria-hidden":z.value?`false`:`true`,children:[xe?D(`span`,{className:Ne,style:He}):null,Ke]}):null)},R=t=>g(n=>{let r=e(`div`,n);f(r,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let i=e(`table`,r);c(r,i),f(i,`table table-zebra`);let o=e(`thead`,i);c(i,o);let d=e(`tr`,o);c(o,d);let m=e(`th`,d);c(d,m),c(m,p(`属性`));let h=e(`th`,d);c(d,h),c(h,p(`说明`));let _=e(`th`,d);c(d,_),c(_,p(`类型`));let y=e(`th`,d);c(d,y),c(y,p(`默认值`));let x=e(`tbody`,i);c(i,x);let S=u(`rue:list:start`),C=u(`rue:list:end`);c(x,S),c(x,C);let T=new Map;return l(()=>{T=w({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,n,r,i,o)=>{b(g(()=>{let n=a(),r=e(`tr`,n);c(n,r),l(()=>{v(r,`key`,String(t.prop))});let i=e(`td`,r);c(r,i);let o=e(`code`,i);c(i,o);let d=u(`rue:slot:anchor`);c(o,d),l(()=>{let e=t.prop;s(()=>b(e,o,d))});let f=e(`td`,r);c(r,f);let p=u(`rue:slot:anchor`);c(f,p),l(()=>{let e=t.description;s(()=>b(e,f,p))});let m=e(`td`,r);c(r,m);let h=e(`code`,m);c(m,h);let g=u(`rue:slot:anchor`);c(h,g),l(()=>{let e=t.type;s(()=>b(e,h,g))});let _=e(`td`,r);c(r,_);let y=e(`code`,_);c(_,y);let x=u(`rue:slot:anchor`);return c(y,x),l(()=>{let e=t.defaultValue;s(()=>b(e,y,x))}),n}),n,r)}})}),r}),z=[{prop:`title / content / overlay`,description:`支持标准标题与内容，也支持直接传完整 overlay 卡片以承载更自由的结构。`,type:`any`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单个或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控开合，适合做外部按钮联动、校验提示或场景化引导。`,type:`boolean / boolean / (open: boolean) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`支持四个基础方向和常见角落别名，便于和成熟浮层组件保持一致心智。`,type:`'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | ...`,defaultValue:`'top'`},{prop:`arrow`,description:`支持关闭箭头或通过 pointAtCenter 让箭头对齐触发器中心。`,type:`boolean | { pointAtCenter?: boolean }`,defaultValue:`true`},{prop:`destroyOnHidden`,description:`关闭后是否卸载浮层内容；默认保留 DOM 并切换可见状态，适合轻操作卡片。`,type:`boolean`,defaultValue:`false`},{prop:`mouseEnterDelay / mouseLeaveDelay`,description:`控制 hover 模式的开合延时，单位为秒。`,type:`number / number`,defaultValue:`0.08 / 0.12`},{prop:`classNames / styles`,description:`按 root、trigger、overlay、panel、header、title、content、arrow 等语义块定制。`,type:`PopoverClassNames / PopoverStyles`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle / zIndex`,description:`补充浮层层级、尺寸和视觉样式扩展。`,type:`string / Record<string, any> / number`,defaultValue:`- / - / -`}],B=()=>{let{controlledOpen:n,nextControlledOpen:o}=C(`useSetup:0:0`,()=>r(()=>({controlledOpen:C(`ref:1:0`,()=>i(!1)),nextControlledOpen:C(`ref:1:1`,()=>i(!1))})));return g(r=>{let i=e(`div`,r);f(i,`rounded-box border border-base-300 bg-base-100/75 p-5`);let d=e(`div`,i);c(i,d),f(d,`flex flex-wrap items-center gap-3`);let m=u(`rue:component:anchor`);c(d,m);let h=g(()=>{let t=a(),n=e(`button`,t);return c(t,n),f(n,`btn btn-outline`),c(n,p(`受控触发器`)),t});l(()=>{let e=x(L,{open:n.value,trigger:`click`,title:`受控 Popover`,content:`可以由外部按钮、校验状态或流程步骤直接控制。`,onOpenChange:e=>{n.value=e},children:h});s(()=>b(e,d,m))});let v=e(`button`,d);c(d,v),f(v,`btn btn-primary`),t(v,`mousedown`,()=>{o.value=!n.value}),t(v,`click`,()=>{n.value=o.value});let y=S(v);c(v,y),l(()=>{_(y,n.value?`收起外部控制面板`:`打开外部控制面板`)});let C=e(`span`,d);c(d,C),f(C,`badge badge-outline min-w-[6rem] justify-center`);let w=S(C);return c(C,w),l(()=>{_(w,n.value?`open`:`closed`)}),i})},se=()=>{let{tabBasic:t,tabPlacement:n,tabTrigger:o,tabControlled:d,tabRich:m}=C(`useSetup:0:0:dup1`,()=>r(()=>({tabBasic:C(`ref:1:2`,()=>i(`preview`)),tabPlacement:C(`ref:1:3`,()=>i(`preview`)),tabTrigger:C(`ref:1:4`,()=>i(`preview`)),tabControlled:C(`ref:1:5`,()=>i(`preview`)),tabRich:C(`ref:1:6`,()=>i(`preview`))})));return g(r=>{let i=a(),h=u(`rue:component:anchor`);return c(i,h),b(x(O,{children:g(()=>{let r=a(),i=e(`div`,r);c(r,i),f(i,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`,i);c(i,h),c(h,p(`Popover 气泡卡片`));let g=e(`p`,i);c(i,g),f(g,`text-sm mt-3 mb-3`),c(g,p(`Popover 用来承载比 Tooltip 更完整的信息块和轻操作。Rue 版本延续了当前的轻卡片视觉， 同时补齐`));let _=e(`code`,g);c(g,_),c(_,p(`title`)),c(g,p(`、`));let v=e(`code`,g);c(g,v),c(v,p(`content`)),c(g,p(`、`));let y=e(`code`,g);c(g,y),c(y,p(`overlay`)),c(g,p(`、触发方式、 定位、箭头和受控开合等核心能力。`));let S=e(`p`,i);c(i,S),f(S,`text-sm text-base-content/70`),c(S,p(`它更适合字段解释、快速状态卡、内联操作和轻量二次确认，而不是用 Modal 打断页面流程。`));let C=u(`rue:component:anchor`);c(i,C),l(()=>{let e=x(k,{title:`Basic popovers`,tab:t,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[D(L,{title:`部署窗口`,content:`今晚 22:00 后会自动切换到新构建。`,children:D(`button`,{className:`btn btn-outline`,children:`Hover for status`})}),D(L,{trigger:`click`,title:`审批提示`,content:`这个批次还缺法务签字，建议先补全再提交。`,children:D(`button`,{className:`btn btn-soft btn-primary`,children:`Click for guidance`})}),D(L,{overlay:E(`div`,{className:`space-y-3 rounded-[1.15rem] border border-base-300/80 bg-base-100/95 p-4 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,children:[E(`div`,{className:`space-y-1`,children:[D(`div`,{className:`text-sm font-semibold`,children:`Release checklist`}),D(`div`,{className:`text-xs leading-5 text-base-content/70`,children:`包含资源校验、追踪链路确认与灰度开关检查。`})]}),E(`div`,{className:`flex gap-2`,children:[D(`button`,{className:`btn btn-sm btn-primary`,children:`继续发布`}),D(`button`,{className:`btn btn-sm btn-ghost`,children:`稍后处理`})]})]}),trigger:`click`,overlayClassName:`max-w-80`,children:D(`button`,{className:`btn btn-soft`,children:`Custom action card`})})]}),code:`<div className="grid gap-4 lg:grid-cols-3">
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
</div>`});s(()=>b(e,i,C))});let w=u(`rue:component:anchor`);c(i,w),l(()=>{let e=x(k,{title:`Placement`,tab:n,preview:()=>E(`div`,{className:`grid gap-6 sm:grid-cols-2 xl:grid-cols-4`,children:[D(L,{open:!0,placement:`topLeft`,title:`Top start`,content:`适合贴着触发器左边缘展示信息。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Top left`})}),D(L,{open:!0,placement:`bottomRight`,title:`Bottom end`,content:`右下角常用来对齐工具条末端。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Bottom right`})}),D(L,{open:!0,placement:`leftTop`,title:`Left top`,content:`适合桌面端列表或表格中的侧向说明。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Left top`})}),D(L,{open:!0,placement:`rightBottom`,title:`Right bottom`,content:`在工具面板、筛选块里会更自然。`,className:`justify-self-start`,children:D(`button`,{className:`btn`,children:`Right bottom`})})]}),code:`<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});s(()=>b(e,i,w))});let T=u(`rue:component:anchor`);c(i,T),l(()=>{let e=x(k,{title:`Trigger modes`,tab:o,preview:()=>E(`div`,{className:`grid gap-4 lg:grid-cols-2 xl:grid-cols-4`,children:[D(L,{title:`默认 hover`,content:`鼠标进入时展示，移出后收起。`,children:D(`button`,{className:`btn btn-outline`,children:`Hover`})}),D(L,{trigger:`click`,title:`Click trigger`,content:`再次点击同一个触发器即可关闭。`,children:D(`button`,{className:`btn btn-soft`,children:`Click`})}),D(L,{trigger:`contextMenu`,title:`Context menu`,content:`右键适合承载次级命令或辅助说明。`,children:D(`button`,{className:`btn btn-ghost border border-base-300`,children:`Right click`})}),D(L,{trigger:`focus`,title:`Focus trigger`,content:`适合输入前的字段说明与校验前置提示。`,children:D(`input`,{className:`input input-bordered w-full`,placeholder:`Focus this input`})})]}),code:`<div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
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
</div>`});s(()=>b(e,i,T))});let O=u(`rue:component:anchor`);c(i,O),l(()=>{let e=x(k,{title:`Controlled visibility`,tab:d,preview:()=>D(B,{}),code:`const controlledOpen = ref(false)
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
</div>`});s(()=>b(e,i,O))});let A=u(`rue:component:anchor`);c(i,A),l(()=>{let e=x(k,{title:`Arrow and semantic styling`,tab:m,preview:()=>E(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[D(L,{open:!0,placement:`bottom`,arrow:{pointAtCenter:!0},title:`Centered arrow`,content:`箭头会对齐到触发器中心，更适合宽按钮或卡片入口。`,className:`justify-self-start`,children:D(`button`,{className:`btn btn-primary w-52 justify-center`,children:`Point at center`})}),D(L,{open:!0,placement:`rightTop`,arrow:!1,title:`Editorial pulse`,content:E(`div`,{className:`space-y-2`,children:[D(`div`,{className:`text-xs text-base-content/60`,children:`本周更新节奏`}),E(`div`,{className:`flex items-center gap-2`,children:[D(`span`,{className:`badge badge-primary badge-soft`,children:`+12%`}),D(`span`,{className:`text-xs text-base-content/70`,children:`首屏转化高于上周`})]})]}),classNames:{panel:`border-primary/20 bg-base-100/98`,header:`bg-primary/5`,title:`uppercase tracking-[0.14em] text-[11px] text-primary`},styles:{content:{padding:`0.75rem 1rem 1rem`}},className:`justify-self-start`,children:D(`button`,{className:`btn btn-outline btn-primary`,children:`Styled card`})})]}),code:`<div className="grid gap-6 lg:grid-cols-2">
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
</div>`});s(()=>b(e,i,A))});let j=e(`h2`,i);c(i,j),f(j,`mt-12`),c(j,p(`API`));let M=u(`rue:component:anchor`);return c(i,M),l(()=>{let e=x(R,{rows:z});s(()=>b(e,i,M))}),r})}),i,h),i})};export{se as default};
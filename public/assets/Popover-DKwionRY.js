import{$t as e,Jt as t,Q as n,Rt as r,Z as i,dt as a,et as o,gt as s,i as c,in as l,it as u,l as d,lt as f,n as p,nt as m,o as h,r as g,rt as _,t as v,tt as y,vt as b,x,yt as S,zt as C}from"./vapor-runtime-DsQWl-IB.js";import{a as w,n as T,t as E}from"./vapor-helpers-vapor-Dg64FcpK.js";import{a as D,i as O}from"./persistentSidebarPlayground-6jqnvaEa.js";import{r as k}from"./SidebarPlaygroundDesign-EU389JDE.js";import{t as A}from"./PreviewBlock-wHSyDiek.js";var j=(...e)=>e.filter(Boolean).join(` `),M=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},N=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),P=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:N(e)}:${String(t)}`).join(`; `):``,F=(e,t)=>[P(e),P(t)].filter(Boolean).join(`; `)||void 0,ee=e=>{let t=Array.isArray(e)?e:e?[e]:[`hover`];return Array.from(new Set(t))},I=(e,t)=>{typeof e==`function`&&e(t)},L=e=>typeof e==`function`?e():e,R=e=>e!=null&&e!==!1,te=e=>{switch(e){case`top`:return{direction:`top`,align:`center`};case`topLeft`:return{direction:`top`,align:`start`};case`topRight`:return{direction:`top`,align:`end`};case`bottom`:return{direction:`bottom`,align:`center`};case`bottomRight`:return{direction:`bottom`,align:`end`};case`left`:return{direction:`left`,align:`center`};case`leftTop`:return{direction:`left`,align:`start`};case`leftBottom`:return{direction:`left`,align:`end`};case`right`:return{direction:`right`,align:`center`};case`rightTop`:return{direction:`right`,align:`start`};case`rightBottom`:return{direction:`right`,align:`end`};default:return{direction:`bottom`,align:`start`}}},ne=e=>{switch(e){case`top`:return`bottom-full left-1/2 mb-3 -translate-x-1/2`;case`topLeft`:return`bottom-full left-0 mb-3`;case`topRight`:return`bottom-full right-0 mb-3`;case`bottom`:return`top-full left-1/2 mt-3 -translate-x-1/2`;case`bottomRight`:return`top-full right-0 mt-3`;case`left`:return`right-full top-1/2 me-3 -translate-y-1/2`;case`leftTop`:return`right-full top-0 me-3`;case`leftBottom`:return`right-full bottom-0 me-3`;case`right`:return`left-full top-1/2 ms-3 -translate-y-1/2`;case`rightTop`:return`left-full top-0 ms-3`;case`rightBottom`:return`left-full bottom-0 ms-3`;default:return`top-full left-0 mt-3`}},re=e=>{switch(e){case`top`:case`topLeft`:case`topRight`:return`origin-bottom`;case`left`:case`leftTop`:case`leftBottom`:return`origin-right`;case`right`:case`rightTop`:case`rightBottom`:return`origin-left`;default:return`origin-top`}},ie=(e,t)=>{let n=te(e);return n.direction===`top`?j(`bottom-[-6px] border-r border-b`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`bottom`?j(`top-[-6px] border-l border-t`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`left`?j(`right-[-6px] border-r border-t`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`):j(`left-[-6px] border-l border-b`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`)},ae=(t,r,c,l,u,f,g,v,y,b,w)=>t===`span`?d(t=>{let d=m(`span`,t);C(()=>{S(d,r)}),C(()=>{a(d,c)}),C(()=>{s(d,l)});let x=E(d,()=>u);p(()=>{x()}),i(d,`mouseenter`,f),i(d,`mouseleave`,g),i(d,`focus`,v),i(d,`blur`,y);let T=o(`rue:slot:anchor`);n(d,T),C(()=>{let t=b;e(()=>h(t,d,T))}),n(d,_(` `));let D=o(`rue:slot:anchor`);return n(d,D),C(()=>{let t=w;e(()=>h(t,d,D))}),d}):t===`section`?d(t=>{let d=m(`section`,t);C(()=>{S(d,r)}),C(()=>{a(d,c)}),C(()=>{s(d,l)});let x=E(d,()=>u);p(()=>{x()}),i(d,`mouseenter`,f),i(d,`mouseleave`,g),i(d,`focus`,v),i(d,`blur`,y);let T=o(`rue:slot:anchor`);n(d,T),C(()=>{let t=b;e(()=>h(t,d,T))}),n(d,_(` `));let D=o(`rue:slot:anchor`);return n(d,D),C(()=>{let t=w;e(()=>h(t,d,D))}),d}):t===`article`?d(t=>{let d=m(`article`,t);C(()=>{S(d,r)}),C(()=>{a(d,c)}),C(()=>{s(d,l)});let x=E(d,()=>u);p(()=>{x()}),i(d,`mouseenter`,f),i(d,`mouseleave`,g),i(d,`focus`,v),i(d,`blur`,y);let T=o(`rue:slot:anchor`);n(d,T),C(()=>{let t=b;e(()=>h(t,d,T))}),n(d,_(` `));let D=o(`rue:slot:anchor`);return n(d,D),C(()=>{let t=w;e(()=>h(t,d,D))}),d}):t===`label`?d(t=>{let d=m(`label`,t);C(()=>{S(d,r)}),C(()=>{a(d,c)}),C(()=>{s(d,l)});let x=E(d,()=>u);p(()=>{x()}),i(d,`mouseenter`,f),i(d,`mouseleave`,g),i(d,`focus`,v),i(d,`blur`,y);let T=o(`rue:slot:anchor`);n(d,T),C(()=>{let t=b;e(()=>h(t,d,T))}),n(d,_(` `));let D=o(`rue:slot:anchor`);return n(d,D),C(()=>{let t=w;e(()=>h(t,d,D))}),d}):t===`div`?d(t=>{let d=m(`div`,t);C(()=>{S(d,r)}),C(()=>{a(d,c)}),C(()=>{s(d,l)});let x=E(d,()=>u);p(()=>{x()}),i(d,`mouseenter`,f),i(d,`mouseleave`,g),i(d,`focus`,v),i(d,`blur`,y);let T=o(`rue:slot:anchor`);n(d,T),C(()=>{let t=b;e(()=>h(t,d,T))}),n(d,_(` `));let D=o(`rue:slot:anchor`);return n(d,D),C(()=>{let t=w;e(()=>h(t,d,D))}),d}):x(t,{...r,className:c,style:l,ref:u,onMouseEnter:f,onMouseLeave:g,onFocus:v,onBlur:y},b,w),z=({as:e=`div`,title:n,content:i,overlay:a,placement:o=`top`,trigger:s,open:l,defaultOpen:u,disabled:d,arrow:f=!0,destroyOnHidden:p=!1,mouseEnterDelay:m=.08,mouseLeaveDelay:h=.12,zIndex:_,className:v,style:y,triggerClassName:b,triggerStyle:x,overlayClassName:S,overlayStyle:C,classNames:T,styles:E,onOpenChange:k,children:A,...N})=>{let te=e,z=w(`ref:1:0`,()=>t(u??!1)),B=w(`ref:1:1`,()=>t(l??u??!1)),V=w(`ref:1:2`,()=>t(ee(s))),oe=l!==void 0,H=null,U=null,W=null,G=null,K=null,q=e=>{U&&U.setAttribute(`aria-expanded`,String(e)),W&&(W.setAttribute(`aria-hidden`,e?`false`:`true`),W.classList.toggle(`pointer-events-auto`,e),W.classList.toggle(`visible`,e),W.classList.toggle(`opacity-100`,e),W.classList.toggle(`scale-100`,e),W.classList.toggle(`pointer-events-none`,!e),W.classList.toggle(`invisible`,!e),W.classList.toggle(`opacity-0`,!e),W.classList.toggle(`scale-95`,!e))};w(`watch:1:3`,()=>r(()=>l,e=>{B.value=typeof e==`boolean`?e:z.value,q(B.value)},{immediate:!0})),w(`watch:1:4`,()=>r(()=>s,e=>{V.value=ee(e)},{immediate:!0})),w(`watch:1:5`,()=>r(()=>u,e=>{oe||(z.value=!!e,B.value=!!e,q(B.value))},{immediate:!0}));let J=()=>{G&&=(clearTimeout(G),null),K&&=(clearTimeout(K),null)},Y=()=>B.value,X=e=>{d||!$||e!==Y()&&(oe||(z.value=e),B.value=e,q(e),typeof k==`function`&&k(e))},se=()=>{if(he){if(K&&=(clearTimeout(K),null),m<=0){X(!0);return}G&&clearTimeout(G),G=setTimeout(()=>{G=null,X(!0)},m*1e3)}},ce=()=>{if(he){if(G&&=(clearTimeout(G),null),h<=0){X(!1);return}K&&clearTimeout(K),K=setTimeout(()=>{K=null,X(!1)},h*1e3)}},le=e=>{Y()&&(_e||ve)&&(H?.contains(e.target)||X(!1))},ue=e=>{!Y()||e.key!==`Escape`||X(!1)},de=e=>{ge&&X(!0)},fe=e=>{if(!ge)return;let t=e.relatedTarget;t&&H?.contains(t)||X(!1)};g(()=>{typeof window>`u`||(window.addEventListener(`click`,le,!0),window.addEventListener(`keydown`,ue),H?.addEventListener(`focusin`,de),H?.addEventListener(`focusout`,fe),q(B.value))}),c(()=>{J(),H?.removeEventListener(`focusin`,de),H?.removeEventListener(`focusout`,fe),!(typeof window>`u`)&&(window.removeEventListener(`click`,le,!0),window.removeEventListener(`keydown`,ue))});let Z=L(n),Q=L(i),pe=a===void 0?void 0:L(a),me=R(Z)||R(Q),$=R(pe)||me,he=V.value.includes(`hover`),ge=V.value.includes(`focus`),_e=V.value.includes(`click`),ve=V.value.includes(`contextMenu`),ye=$&&(B.value||!p),be=typeof f==`object`&&!!f.pointAtCenter,xe=f!==!1,{onMouseEnter:Se,onMouseLeave:Ce,onFocus:we,onBlur:Te,onClick:Ee,onContextMenu:De,...Oe}=N,ke=j(`relative inline-flex max-w-full align-top`,T?.root,v),Ae=j(`inline-flex max-w-full items-stretch`,T?.trigger,b),je=j(`absolute z-50 w-max max-w-[min(24rem,calc(100vw-2rem))] transform-gpu transition duration-150 ease-out`,ne(o),re(o),B.value?`pointer-events-auto visible opacity-100 scale-100`:`pointer-events-none invisible opacity-0 scale-95`,T?.overlay,S),Me=j(`relative min-w-64 overflow-hidden rounded-[1.15rem] border border-base-300/80 bg-base-100/95 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,T?.panel),Ne=j(`absolute block h-3 w-3 rotate-45 border-base-300/80 bg-base-100/95`,ie(o,be),T?.arrow),Pe=j(`border-b border-base-300/70 px-4 py-3`,T?.header),Fe=j(`text-sm font-semibold tracking-[0.01em] text-base-content`,T?.title),Ie=j(`px-4 py-3 text-sm leading-6 text-base-content/80`,T?.content),Le=F(y,E?.root),Re=F(x,E?.trigger),ze=M(E?.overlay,C);typeof _==`number`&&(ze.zIndex=_);let Be=P(ze)||void 0,Ve=P(E?.panel)||void 0,He=P(E?.arrow)||void 0,Ue=P(E?.header)||void 0,We=P(E?.title)||void 0,Ge=P(E?.content)||void 0,Ke=ye?R(pe)?pe:D(`div`,{className:Me,style:Ve,role:`dialog`,"aria-modal":`false`,children:[R(Z)?O(`div`,{className:Pe,style:Ue,children:O(`div`,{className:Fe,style:We,children:Z})}):null,R(Q)?O(`div`,{className:Ie,style:Ge,children:Q}):null]}):null;return ae(te,Oe,ke,Le,e=>{H=e},e=>{I(Se,e),e?.defaultPrevented||se()},e=>{I(Ce,e),e?.defaultPrevented||ce()},e=>{I(we,e)},e=>{I(Te,e)},O(`div`,{className:Ae,style:Re,ref:e=>{U=e},"aria-haspopup":$?`dialog`:void 0,"aria-expanded":$?String(B.value):void 0,onClick:e=>{I(Ee,e),!e?.defaultPrevented&&_e&&(J(),X(!Y()))},onContextMenu:e=>{I(De,e),!e?.defaultPrevented&&ve&&(typeof e.preventDefault==`function`&&e.preventDefault(),J(),X(!Y()))},children:A}),ye?D(`div`,{className:je,style:Be,ref:e=>{W=e},"aria-hidden":B.value?`false`:`true`,children:[xe?O(`span`,{className:Ne,style:He}):null,Ke]}):null)},B=t=>d(r=>{let i=m(`div`,r);a(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let s=m(`table`,i);n(i,s),a(s,`table table-zebra`);let c=m(`thead`,s);n(s,c);let l=m(`tr`,c);n(c,l);let u=m(`th`,l);n(l,u),n(u,_(`属性`));let p=m(`th`,l);n(l,p),n(p,_(`说明`));let g=m(`th`,l);n(l,g),n(g,_(`类型`));let v=m(`th`,l);n(l,v),n(v,_(`默认值`));let b=m(`tbody`,s);n(s,b);let x=o(`rue:list:start`),S=o(`rue:list:end`);n(b,x),n(b,S);let w=new Map;return C(()=>{w=T({items:t.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:b,before:S,singleRoot:!0,trackIndex:!1,start:x,renderItem:(t,r,i,a,s)=>{h(d(()=>{let r=y(),i=m(`tr`,r);n(r,i),C(()=>{f(i,`key`,String(t.prop))});let a=m(`td`,i);n(i,a);let s=m(`code`,a);n(a,s);let c=o(`rue:slot:anchor`);n(s,c),C(()=>{let n=t.prop;e(()=>h(n,s,c))});let l=m(`td`,i);n(i,l);let u=o(`rue:slot:anchor`);n(l,u),C(()=>{let n=t.description;e(()=>h(n,l,u))});let d=m(`td`,i);n(i,d);let p=m(`code`,d);n(d,p);let g=o(`rue:slot:anchor`);n(p,g),C(()=>{let n=t.type;e(()=>h(n,p,g))});let _=m(`td`,i);n(i,_);let v=m(`code`,_);n(_,v);let b=o(`rue:slot:anchor`);return n(v,b),C(()=>{let n=t.defaultValue;e(()=>h(n,v,b))}),r}),r,i)}})}),i}),V=[{prop:`title / content / overlay`,description:`支持标准标题与内容，也支持直接传完整 overlay 卡片以承载更自由的结构。`,type:`any`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单个或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控开合，适合做外部按钮联动、校验提示或场景化引导。`,type:`boolean / boolean / (open: boolean) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`支持四个基础方向和常见角落别名，便于和成熟浮层组件保持一致心智。`,type:`'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | ...`,defaultValue:`'top'`},{prop:`arrow`,description:`支持关闭箭头或通过 pointAtCenter 让箭头对齐触发器中心。`,type:`boolean | { pointAtCenter?: boolean }`,defaultValue:`true`},{prop:`destroyOnHidden`,description:`关闭后是否卸载浮层内容；默认保持 DOM 并切换可见状态，适合轻操作卡片。`,type:`boolean`,defaultValue:`false`},{prop:`mouseEnterDelay / mouseLeaveDelay`,description:`控制 hover 模式的开合延时，单位为秒。`,type:`number / number`,defaultValue:`0.08 / 0.12`},{prop:`classNames / styles`,description:`按 root、trigger、overlay、panel、header、title、content、arrow 等语义块定制。`,type:`PopoverClassNames / PopoverStyles`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle / zIndex`,description:`补充浮层层级、尺寸和视觉样式扩展。`,type:`string / Record<string, any> / number`,defaultValue:`- / - / -`}],oe=()=>{let{controlledOpen:r,nextControlledOpen:s}=w(`useSetup:0:0`,()=>l(()=>({controlledOpen:w(`ref:1:0`,()=>t(!1)),nextControlledOpen:w(`ref:1:1`,()=>t(!1))})));return d(t=>{let c=m(`div`,t);a(c,`rounded-box border border-base-300 bg-base-100/75 p-5`);let l=m(`div`,c);n(c,l),a(l,`flex flex-wrap items-center gap-3`);let f=o(`rue:component:anchor`);n(l,f);let p=d(()=>{let e=y(),t=m(`button`,e);return n(e,t),a(t,`btn btn-outline`),n(t,_(`受控触发器`)),e});C(()=>{let t=v(z,{open:r.value,trigger:`click`,title:`受控 Popover`,content:`可以由外部按钮、校验状态或流程步骤直接控制。`,onOpenChange:e=>{r.value=e},children:p});e(()=>h(t,l,f))});let g=m(`button`,l);n(l,g),a(g,`btn btn-primary`),i(g,`mousedown`,()=>{s.value=!r.value}),i(g,`click`,()=>{r.value=s.value});let x=u(g);n(g,x),C(()=>{b(x,r.value?`收起外部控制面板`:`打开外部控制面板`)});let S=m(`span`,l);n(l,S),a(S,`badge badge-outline min-w-[6rem] justify-center`);let w=u(S);return n(S,w),C(()=>{b(w,r.value?`open`:`closed`)}),c})},H=()=>{let{tabBasic:r,tabPlacement:i,tabTrigger:s,tabControlled:c,tabRich:f}=w(`useSetup:0:0:dup1`,()=>l(()=>({tabBasic:w(`ref:1:2`,()=>t(`preview`)),tabPlacement:w(`ref:1:3`,()=>t(`preview`)),tabTrigger:w(`ref:1:4`,()=>t(`preview`)),tabControlled:w(`ref:1:5`,()=>t(`preview`)),tabRich:w(`ref:1:6`,()=>t(`preview`))})));return d(t=>{let l=y(),p=o(`rue:component:anchor`);return n(l,p),h(v(k,{children:d(()=>{let t=y(),l=m(`div`,t);n(t,l),a(l,`max-w-none prose prose-sm md:prose-base`);let d=m(`h1`,l);n(l,d),n(d,_(`Popover 气泡卡片`));let p=m(`p`,l);n(l,p),a(p,`text-sm mt-3 mb-3`),n(p,_(`Popover 用来承载比 Tooltip 更完整的信息块和轻操作。Rue 实现采用当前的轻卡片视觉， 同时补充`));let g=u(p);n(p,g),b(g,` `);let x=m(`code`,p);n(p,x),n(x,_(`title`)),n(p,_(`、`));let S=m(`code`,p);n(p,S),n(S,_(`content`)),n(p,_(`、`));let w=m(`code`,p);n(p,w),n(w,_(`overlay`)),n(p,_(`、触发方式、 定位、箭头和受控开合等核心能力。`));let T=m(`p`,l);n(l,T),a(T,`text-sm text-base-content/70`),n(T,_(`它更适合字段解释、快速状态卡、内联操作和轻量二次确认，而不是用 Modal 打断页面流程。`));let E=o(`rue:component:anchor`);n(l,E),C(()=>{let t=v(A,{title:`Basic popovers`,tab:r,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[O(z,{title:`部署窗口`,content:`今晚 22:00 后会自动切换到新构建。`,children:O(`button`,{className:`btn btn-outline`,children:`Hover for status`})}),O(z,{trigger:`click`,title:`审批提示`,content:`这个批次还缺法务签字，建议先补全再提交。`,children:O(`button`,{className:`btn btn-soft btn-primary`,children:`Click for guidance`})}),O(z,{overlay:D(`div`,{className:`space-y-3 rounded-[1.15rem] border border-base-300/80 bg-base-100/95 p-4 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,children:[D(`div`,{className:`space-y-1`,children:[O(`div`,{className:`text-sm font-semibold`,children:`Release checklist`}),O(`div`,{className:`text-xs leading-5 text-base-content/70`,children:`包含资源校验、追踪链路确认与灰度开关检查。`})]}),D(`div`,{className:`flex gap-2`,children:[O(`button`,{className:`btn btn-sm btn-primary`,children:`继续发布`}),O(`button`,{className:`btn btn-sm btn-ghost`,children:`稍后处理`})]})]}),trigger:`click`,overlayClassName:`max-w-80`,children:O(`button`,{className:`btn btn-soft`,children:`Custom action card`})})]}),code:`<div className="grid gap-4 lg:grid-cols-3">
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
</div>`});e(()=>h(t,l,E))});let k=o(`rue:component:anchor`);n(l,k),C(()=>{let t=v(A,{title:`Placement`,tab:i,preview:()=>D(`div`,{className:`grid gap-6 sm:grid-cols-2 xl:grid-cols-4`,children:[O(z,{open:!0,placement:`topLeft`,title:`Top start`,content:`适合贴着触发器左边缘展示信息。`,className:`justify-self-start`,children:O(`button`,{className:`btn`,children:`Top left`})}),O(z,{open:!0,placement:`bottomRight`,title:`Bottom end`,content:`右下角常用来对齐工具条末端。`,className:`justify-self-start`,children:O(`button`,{className:`btn`,children:`Bottom right`})}),O(z,{open:!0,placement:`leftTop`,title:`Left top`,content:`适合桌面端列表或表格中的侧向说明。`,className:`justify-self-start`,children:O(`button`,{className:`btn`,children:`Left top`})}),O(z,{open:!0,placement:`rightBottom`,title:`Right bottom`,content:`在工具面板、筛选块里会更自然。`,className:`justify-self-start`,children:O(`button`,{className:`btn`,children:`Right bottom`})})]}),code:`<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});e(()=>h(t,l,k))});let j=o(`rue:component:anchor`);n(l,j),C(()=>{let t=v(A,{title:`Trigger modes`,tab:s,preview:()=>D(`div`,{className:`grid gap-4 lg:grid-cols-2 xl:grid-cols-4`,children:[O(z,{title:`默认 hover`,content:`鼠标进入时展示，移出后收起。`,children:O(`button`,{className:`btn btn-outline`,children:`Hover`})}),O(z,{trigger:`click`,title:`Click trigger`,content:`再次点击同一个触发器即可关闭。`,children:O(`button`,{className:`btn btn-soft`,children:`Click`})}),O(z,{trigger:`contextMenu`,title:`Context menu`,content:`右键适合承载次级命令或辅助说明。`,children:O(`button`,{className:`btn btn-ghost border border-base-300`,children:`Right click`})}),O(z,{trigger:`focus`,title:`Focus trigger`,content:`适合输入前的字段说明与校验前置提示。`,children:O(`input`,{className:`input input-bordered w-full`,placeholder:`Focus this input`})})]}),code:`<div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
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
</div>`});e(()=>h(t,l,j))});let M=o(`rue:component:anchor`);n(l,M),C(()=>{let t=v(A,{title:`Controlled visibility`,tab:c,preview:()=>O(oe,{}),code:`const controlledOpen = ref(false)
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
</div>`});e(()=>h(t,l,M))});let N=o(`rue:component:anchor`);n(l,N),C(()=>{let t=v(A,{title:`Arrow and semantic styling`,tab:f,preview:()=>D(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[O(z,{open:!0,placement:`bottom`,arrow:{pointAtCenter:!0},title:`Centered arrow`,content:`箭头会对齐到触发器中心，更适合宽按钮或卡片入口。`,className:`justify-self-start`,children:O(`button`,{className:`btn btn-primary w-52 justify-center`,children:`Point at center`})}),O(z,{open:!0,placement:`rightTop`,arrow:!1,title:`Editorial pulse`,content:D(`div`,{className:`space-y-2`,children:[O(`div`,{className:`text-xs text-base-content/60`,children:`本周更新节奏`}),D(`div`,{className:`flex items-center gap-2`,children:[O(`span`,{className:`badge badge-primary badge-soft`,children:`+12%`}),O(`span`,{className:`text-xs text-base-content/70`,children:`首屏转化高于上周`})]})]}),classNames:{panel:`border-primary/20 bg-base-100/98`,header:`bg-primary/5`,title:`uppercase tracking-[0.14em] text-[11px] text-primary`},styles:{content:{padding:`0.75rem 1rem 1rem`}},className:`justify-self-start`,children:O(`button`,{className:`btn btn-outline btn-primary`,children:`Styled card`})})]}),code:`<div className="grid gap-6 lg:grid-cols-2">
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
</div>`});e(()=>h(t,l,N))});let P=m(`h2`,l);n(l,P),a(P,`mt-12`),n(P,_(`API`));let F=o(`rue:component:anchor`);return n(l,F),C(()=>{let t=v(B,{rows:V});e(()=>h(t,l,F))}),t})}),l,p),l})};export{H as default};
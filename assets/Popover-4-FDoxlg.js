import{F as e,I as t,K as n,L as r,M as i,N as a,R as o,W as s,X as c,_t as l,d as u,gt as d,i as f,l as p,mt as m,o as h,ot as g,s as _,t as v,ut as y,v as b}from"./vapor-runtime-Dfq7aA8z.js";import{a as x,n as S,t as C}from"./vapor-helpers-vapor-CpxsbTjB.js";import{n as w,t as T}from"./src-BaNG2YQR.js";import{n as E}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as D}from"./PreviewBlock-BK9yBzOD.js";var O=(...e)=>e.filter(Boolean).join(` `),k=(...e)=>{let t={};return e.forEach(e=>{e&&Object.assign(t,e)}),t},A=e=>e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`),j=e=>e?typeof e==`string`?e.trim():Object.entries(e).filter(([,e])=>e!=null).map(([e,t])=>`${e.startsWith(`--`)?e:A(e)}:${String(t)}`).join(`; `):``,M=(e,t)=>[j(e),j(t)].filter(Boolean).join(`; `)||void 0,N=e=>{let t=Array.isArray(e)?e:e?[e]:[`hover`];return Array.from(new Set(t))},P=(e,t)=>{typeof e==`function`&&e(t)},F=e=>typeof e==`function`?e():e,I=e=>e!=null&&e!==!1,L=e=>{switch(e){case`top`:return{direction:`top`,align:`center`};case`topLeft`:return{direction:`top`,align:`start`};case`topRight`:return{direction:`top`,align:`end`};case`bottom`:return{direction:`bottom`,align:`center`};case`bottomRight`:return{direction:`bottom`,align:`end`};case`left`:return{direction:`left`,align:`center`};case`leftTop`:return{direction:`left`,align:`start`};case`leftBottom`:return{direction:`left`,align:`end`};case`right`:return{direction:`right`,align:`center`};case`rightTop`:return{direction:`right`,align:`start`};case`rightBottom`:return{direction:`right`,align:`end`};default:return{direction:`bottom`,align:`start`}}},ee=e=>{switch(e){case`top`:return`bottom-full left-1/2 mb-3 -translate-x-1/2`;case`topLeft`:return`bottom-full left-0 mb-3`;case`topRight`:return`bottom-full right-0 mb-3`;case`bottom`:return`top-full left-1/2 mt-3 -translate-x-1/2`;case`bottomRight`:return`top-full right-0 mt-3`;case`left`:return`right-full top-1/2 me-3 -translate-y-1/2`;case`leftTop`:return`right-full top-0 me-3`;case`leftBottom`:return`right-full bottom-0 me-3`;case`right`:return`left-full top-1/2 ms-3 -translate-y-1/2`;case`rightTop`:return`left-full top-0 ms-3`;case`rightBottom`:return`left-full bottom-0 ms-3`;default:return`top-full left-0 mt-3`}},te=e=>{switch(e){case`top`:case`topLeft`:case`topRight`:return`origin-bottom`;case`left`:case`leftTop`:case`leftBottom`:return`origin-right`;case`right`:case`rightTop`:case`rightBottom`:return`origin-left`;default:return`origin-top`}},ne=(e,t)=>{let n=L(e);return n.direction===`top`?O(`bottom-[-6px] border-r border-b`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`bottom`?O(`top-[-6px] border-l border-t`,t||n.align===`center`?`left-1/2 -translate-x-1/2`:n.align===`end`?`right-5`:`left-5`):n.direction===`left`?O(`right-[-6px] border-r border-t`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`):O(`left-[-6px] border-l border-b`,t||n.align===`center`?`top-1/2 -translate-y-1/2`:n.align===`end`?`bottom-5`:`top-5`)},re=(t,s,d,m,h,g,_,v,x,S,w)=>t===`span`?u(t=>{let s=r(`span`,t);l(()=>{n(s,String(d))}),l(()=>{c(s,m)});let u=C(s,()=>h);f(()=>{u()}),i(s,`mouseenter`,g),i(s,`mouseleave`,_),i(s,`focus`,v),i(s,`blur`,x);let b=e(`rue:slot:anchor`);a(s,b),l(()=>{let e=S;y(()=>p(e,s,b))}),a(s,o(` `));let T=e(`rue:slot:anchor`);return a(s,T),l(()=>{let e=w;y(()=>p(e,s,T))}),s}):t===`section`?u(t=>{let s=r(`section`,t);l(()=>{n(s,String(d))}),l(()=>{c(s,m)});let u=C(s,()=>h);f(()=>{u()}),i(s,`mouseenter`,g),i(s,`mouseleave`,_),i(s,`focus`,v),i(s,`blur`,x);let b=e(`rue:slot:anchor`);a(s,b),l(()=>{let e=S;y(()=>p(e,s,b))}),a(s,o(` `));let T=e(`rue:slot:anchor`);return a(s,T),l(()=>{let e=w;y(()=>p(e,s,T))}),s}):t===`article`?u(t=>{let s=r(`article`,t);l(()=>{n(s,String(d))}),l(()=>{c(s,m)});let u=C(s,()=>h);f(()=>{u()}),i(s,`mouseenter`,g),i(s,`mouseleave`,_),i(s,`focus`,v),i(s,`blur`,x);let b=e(`rue:slot:anchor`);a(s,b),l(()=>{let e=S;y(()=>p(e,s,b))}),a(s,o(` `));let T=e(`rue:slot:anchor`);return a(s,T),l(()=>{let e=w;y(()=>p(e,s,T))}),s}):t===`label`?u(t=>{let s=r(`label`,t);l(()=>{n(s,String(d))}),l(()=>{c(s,m)});let u=C(s,()=>h);f(()=>{u()}),i(s,`mouseenter`,g),i(s,`mouseleave`,_),i(s,`focus`,v),i(s,`blur`,x);let b=e(`rue:slot:anchor`);a(s,b),l(()=>{let e=S;y(()=>p(e,s,b))}),a(s,o(` `));let T=e(`rue:slot:anchor`);return a(s,T),l(()=>{let e=w;y(()=>p(e,s,T))}),s}):t===`div`?u(t=>{let s=r(`div`,t);l(()=>{n(s,String(d))}),l(()=>{c(s,m)});let u=C(s,()=>h);f(()=>{u()}),i(s,`mouseenter`,g),i(s,`mouseleave`,_),i(s,`focus`,v),i(s,`blur`,x);let b=e(`rue:slot:anchor`);a(s,b),l(()=>{let e=S;y(()=>p(e,s,b))}),a(s,o(` `));let T=e(`rue:slot:anchor`);return a(s,T),l(()=>{let e=w;y(()=>p(e,s,T))}),s}):b(t,{...s,className:d,style:m,ref:h,onMouseEnter:g,onMouseLeave:_,onFocus:v,onBlur:x},S,w),R=({as:e=`div`,title:t,content:n,overlay:r,placement:i=`top`,trigger:a,open:o,defaultOpen:s,disabled:c,arrow:l=!0,destroyOnHidden:u=!1,mouseEnterDelay:f=.08,mouseLeaveDelay:p=.12,zIndex:m,className:v,style:y,triggerClassName:b,triggerStyle:S,overlayClassName:C,overlayStyle:E,classNames:D,styles:A,onOpenChange:L,children:R,...ie})=>{let ae=e,z=x(`ref:1:0`,()=>g(s??!1)),B=x(`ref:1:1`,()=>g(o)),V=x(`ref:1:2`,()=>g(o??s??!1)),H=x(`ref:1:3`,()=>g(N(a))),U=null,W=null,G=null,K=null,q=null,J=e=>{W&&W.setAttribute(`aria-expanded`,String(e)),G&&(G.setAttribute(`aria-hidden`,e?`false`:`true`),G.classList.toggle(`pointer-events-auto`,e),G.classList.toggle(`visible`,e),G.classList.toggle(`opacity-100`,e),G.classList.toggle(`scale-100`,e),G.classList.toggle(`pointer-events-none`,!e),G.classList.toggle(`invisible`,!e),G.classList.toggle(`opacity-0`,!e),G.classList.toggle(`scale-95`,!e))};x(`watch:1:4`,()=>d(()=>o,e=>{B.value=e,V.value=typeof e==`boolean`?e:z.value,J(V.value)},{immediate:!0})),x(`watch:1:5`,()=>d(()=>a,e=>{H.value=N(e)},{immediate:!0})),x(`watch:1:6`,()=>d(()=>s,e=>{B.value===void 0&&(z.value=!!e,V.value=!!e,J(V.value))},{immediate:!0}));let Y=()=>{K&&=(clearTimeout(K),null),q&&=(clearTimeout(q),null)},X=()=>V.value,Z=e=>{c||!$||e!==X()&&(B.value===void 0&&(z.value=e,V.value=e),J(e),typeof L==`function`&&L(e))},oe=()=>{if(pe){if(q&&=(clearTimeout(q),null),f<=0){Z(!0);return}K&&clearTimeout(K),K=setTimeout(()=>{K=null,Z(!0)},f*1e3)}},se=()=>{if(pe){if(K&&=(clearTimeout(K),null),p<=0){Z(!1);return}q&&clearTimeout(q),q=setTimeout(()=>{q=null,Z(!1)},p*1e3)}},ce=e=>{X()&&(he||ge)&&(U?.contains(e.target)||Z(!1))},le=e=>{!X()||e.key!==`Escape`||Z(!1)};h(()=>{typeof window>`u`||(window.addEventListener(`click`,ce,!0),window.addEventListener(`keydown`,le),J(V.value))}),_(()=>{Y(),!(typeof window>`u`)&&(window.removeEventListener(`click`,ce,!0),window.removeEventListener(`keydown`,le))});let Q=F(t),ue=F(n),de=r===void 0?void 0:F(r),fe=I(Q)||I(ue),$=I(de)||fe,pe=H.value.includes(`hover`),me=H.value.includes(`focus`),he=H.value.includes(`click`),ge=H.value.includes(`contextMenu`),_e=$&&(V.value||!u),ve=typeof l==`object`&&!!l.pointAtCenter,ye=l!==!1,{onMouseEnter:be,onMouseLeave:xe,onFocus:Se,onBlur:Ce,onClick:we,onContextMenu:Te,...Ee}=ie,De=O(`relative inline-flex max-w-full align-top`,D?.root,v),Oe=O(`inline-flex max-w-full items-stretch`,D?.trigger,b),ke=O(`absolute z-50 w-max max-w-[min(24rem,calc(100vw-2rem))] transform-gpu transition duration-150 ease-out`,ee(i),te(i),V.value?`pointer-events-auto visible opacity-100 scale-100`:`pointer-events-none invisible opacity-0 scale-95`,D?.overlay,C),Ae=O(`relative min-w-64 overflow-hidden rounded-[1.15rem] border border-base-300/80 bg-base-100/95 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,D?.panel),je=O(`absolute block h-3 w-3 rotate-45 border-base-300/80 bg-base-100/95`,ne(i,ve),D?.arrow),Me=O(`border-b border-base-300/70 px-4 py-3`,D?.header),Ne=O(`text-sm font-semibold tracking-[0.01em] text-base-content`,D?.title),Pe=O(`px-4 py-3 text-sm leading-6 text-base-content/80`,D?.content),Fe=M(y,A?.root),Ie=M(S,A?.trigger),Le=k(A?.overlay,E);typeof m==`number`&&(Le.zIndex=m);let Re=j(Le)||void 0,ze=j(A?.panel)||void 0,Be=j(A?.arrow)||void 0,Ve=j(A?.header)||void 0,He=j(A?.title)||void 0,Ue=j(A?.content)||void 0,We=_e?I(de)?de:w(`div`,{className:Ae,style:ze,role:`dialog`,"aria-modal":`false`,children:[I(Q)?T(`div`,{className:Me,style:Ve,children:T(`div`,{className:Ne,style:He,children:Q})}):null,I(ue)?T(`div`,{className:Pe,style:Ue,children:ue}):null]}):null;return re(ae,Ee,De,Fe,e=>{U=e},e=>{P(be,e),e?.defaultPrevented||oe()},e=>{P(xe,e),e?.defaultPrevented||se()},e=>{P(Se,e),!e?.defaultPrevented&&me&&Z(!0)},e=>{if(P(Ce,e),e?.defaultPrevented||!me)return;let t=e?.relatedTarget;t&&U?.contains(t)||Z(!1)},T(`div`,{className:Oe,style:Ie,ref:e=>{W=e},"aria-haspopup":$?`dialog`:void 0,"aria-expanded":$?String(V.value):void 0,onClick:e=>{P(we,e),!e?.defaultPrevented&&he&&(Y(),Z(!X()))},onContextMenu:e=>{P(Te,e),!e?.defaultPrevented&&ge&&(typeof e.preventDefault==`function`&&e.preventDefault(),Y(),Z(!X()))},children:R}),_e?w(`div`,{className:ke,style:Re,ref:e=>{G=e},"aria-hidden":V.value?`false`:`true`,children:[ye?T(`span`,{className:je,style:Be}):null,We]}):null)},ie=i=>u(c=>{let d=r(`div`,c);n(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=r(`table`,d);a(d,f),n(f,`table table-zebra`);let m=r(`thead`,f);a(f,m);let h=r(`tr`,m);a(m,h);let g=r(`th`,h);a(h,g),a(g,o(`属性`));let _=r(`th`,h);a(h,_),a(_,o(`说明`));let v=r(`th`,h);a(h,v),a(v,o(`类型`));let b=r(`th`,h);a(h,b),a(b,o(`默认值`));let x=r(`tbody`,f);a(f,x);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(x,C),a(x,w);let T=new Map;return l(()=>{T=S({items:i.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:x,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,o,c,d)=>{p(u(()=>{let i=t(),o=r(`tr`,i);a(i,o),l(()=>{s(o,`key`,String(n.prop))});let c=r(`td`,o);a(o,c);let u=r(`code`,c);a(c,u);let d=e(`rue:slot:anchor`);a(u,d),l(()=>{let e=n.prop;y(()=>p(e,u,d))});let f=r(`td`,o);a(o,f);let m=e(`rue:slot:anchor`);a(f,m),l(()=>{let e=n.description;y(()=>p(e,f,m))});let h=r(`td`,o);a(o,h);let g=r(`code`,h);a(h,g);let _=e(`rue:slot:anchor`);a(g,_),l(()=>{let e=n.type;y(()=>p(e,g,_))});let v=r(`td`,o);a(o,v);let b=r(`code`,v);a(v,b);let x=e(`rue:slot:anchor`);return a(b,x),l(()=>{let e=n.defaultValue;y(()=>p(e,b,x))}),i}),i,o)}})}),d}),ae=[{prop:`title / content / overlay`,description:`支持标准标题与内容，也支持直接传完整 overlay 卡片以承载更自由的结构。`,type:`any`,defaultValue:`-`},{prop:`trigger`,description:`触发方式，可单个或组合使用 hover、focus、click、contextMenu。`,type:`'hover' | 'focus' | 'click' | 'contextMenu' | Array<...>`,defaultValue:`'hover'`},{prop:`open / defaultOpen / onOpenChange`,description:`受控与非受控开合，适合做外部按钮联动、校验提示或场景化引导。`,type:`boolean / boolean / (open: boolean) => void`,defaultValue:`false / false / -`},{prop:`placement`,description:`支持四个基础方向和常见角落别名，便于和成熟浮层组件保持一致心智。`,type:`'top' | 'topLeft' | 'topRight' | 'bottom' | 'bottomLeft' | ...`,defaultValue:`'top'`},{prop:`arrow`,description:`支持关闭箭头或通过 pointAtCenter 让箭头对齐触发器中心。`,type:`boolean | { pointAtCenter?: boolean }`,defaultValue:`true`},{prop:`destroyOnHidden`,description:`关闭后是否卸载浮层内容；默认保留 DOM 并切换可见状态，适合轻操作卡片。`,type:`boolean`,defaultValue:`false`},{prop:`mouseEnterDelay / mouseLeaveDelay`,description:`控制 hover 模式的开合延时，单位为秒。`,type:`number / number`,defaultValue:`0.08 / 0.12`},{prop:`classNames / styles`,description:`按 root、trigger、overlay、panel、header、title、content、arrow 等语义块定制。`,type:`PopoverClassNames / PopoverStyles`,defaultValue:`-`},{prop:`overlayClassName / overlayStyle / zIndex`,description:`补充浮层层级、尺寸和视觉样式扩展。`,type:`string / Record<string, any> / number`,defaultValue:`- / - / -`}],z=()=>{let{tabBasic:i,tabPlacement:s,tabTrigger:c,tabControlled:d,tabRich:f,controlledOpen:h}=x(`useSetup:0:0`,()=>m(()=>({tabBasic:x(`ref:1:0`,()=>g(`preview`)),tabPlacement:x(`ref:1:1`,()=>g(`preview`)),tabTrigger:x(`ref:1:2`,()=>g(`preview`)),tabControlled:x(`ref:1:3`,()=>g(`preview`)),tabRich:x(`ref:1:4`,()=>g(`preview`)),controlledOpen:x(`ref:1:5`,()=>g(!1))})));return u(m=>{let g=t(),_=e(`rue:component:anchor`);return a(g,_),p(v(E,{children:u(()=>{let u=t(),m=r(`div`,u);a(u,m),n(m,`max-w-none prose prose-sm md:prose-base`);let g=r(`h1`,m);a(m,g),a(g,o(`Popover 气泡卡片`));let _=r(`p`,m);a(m,_),n(_,`text-sm mt-3 mb-3`),a(_,o(`Popover 用来承载比 Tooltip 更完整的信息块和轻操作。Rue 版本延续了当前的轻卡片视觉， 同时补齐`));let b=r(`code`,_);a(_,b),a(b,o(`title`)),a(_,o(`、`));let x=r(`code`,_);a(_,x),a(x,o(`content`)),a(_,o(`、`));let S=r(`code`,_);a(_,S),a(S,o(`overlay`)),a(_,o(`、触发方式、 定位、箭头和受控开合等核心能力。`));let C=r(`p`,m);a(m,C),n(C,`text-sm text-base-content/70`),a(C,o(`它更适合字段解释、快速状态卡、内联操作和轻量二次确认，而不是用 Modal 打断页面流程。`));let E=e(`rue:component:anchor`);a(m,E),l(()=>{let e=v(D,{title:`Basic popovers`,tab:i,preview:()=>w(`div`,{className:`grid gap-4 lg:grid-cols-3`,children:[T(R,{title:`部署窗口`,content:`今晚 22:00 后会自动切换到新构建。`,children:T(`button`,{className:`btn btn-outline`,children:`Hover for status`})}),T(R,{trigger:`click`,title:`审批提示`,content:`这个批次还缺法务签字，建议先补全再提交。`,children:T(`button`,{className:`btn btn-soft btn-primary`,children:`Click for guidance`})}),T(R,{overlay:w(`div`,{className:`space-y-3 rounded-[1.15rem] border border-base-300/80 bg-base-100/95 p-4 shadow-[0_20px_48px_-28px_rgba(15,23,42,0.55)] backdrop-blur`,children:[w(`div`,{className:`space-y-1`,children:[T(`div`,{className:`text-sm font-semibold`,children:`Release checklist`}),T(`div`,{className:`text-xs leading-5 text-base-content/70`,children:`包含资源校验、追踪链路确认与灰度开关检查。`})]}),w(`div`,{className:`flex gap-2`,children:[T(`button`,{className:`btn btn-sm btn-primary`,children:`继续发布`}),T(`button`,{className:`btn btn-sm btn-ghost`,children:`稍后处理`})]})]}),trigger:`click`,overlayClassName:`max-w-80`,children:T(`button`,{className:`btn btn-soft`,children:`Custom action card`})})]}),code:`<div className="grid gap-4 lg:grid-cols-3">
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
</div>`});y(()=>p(e,m,E))});let O=e(`rue:component:anchor`);a(m,O),l(()=>{let e=v(D,{title:`Placement`,tab:s,preview:()=>w(`div`,{className:`grid gap-6 sm:grid-cols-2 xl:grid-cols-4`,children:[T(R,{open:!0,placement:`topLeft`,title:`Top start`,content:`适合贴着触发器左边缘展示信息。`,className:`justify-self-start`,children:T(`button`,{className:`btn`,children:`Top left`})}),T(R,{open:!0,placement:`bottomRight`,title:`Bottom end`,content:`右下角常用来对齐工具条末端。`,className:`justify-self-start`,children:T(`button`,{className:`btn`,children:`Bottom right`})}),T(R,{open:!0,placement:`leftTop`,title:`Left top`,content:`适合桌面端列表或表格中的侧向说明。`,className:`justify-self-start`,children:T(`button`,{className:`btn`,children:`Left top`})}),T(R,{open:!0,placement:`rightBottom`,title:`Right bottom`,content:`在工具面板、筛选块里会更自然。`,className:`justify-self-start`,children:T(`button`,{className:`btn`,children:`Right bottom`})})]}),code:`<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
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
</div>`});y(()=>p(e,m,O))});let k=e(`rue:component:anchor`);a(m,k),l(()=>{let e=v(D,{title:`Trigger modes`,tab:c,preview:()=>w(`div`,{className:`grid gap-4 lg:grid-cols-2 xl:grid-cols-4`,children:[T(R,{title:`默认 hover`,content:`鼠标进入时展示，移出后收起。`,children:T(`button`,{className:`btn btn-outline`,children:`Hover`})}),T(R,{trigger:`click`,title:`Click trigger`,content:`再次点击同一个触发器即可关闭。`,children:T(`button`,{className:`btn btn-soft`,children:`Click`})}),T(R,{trigger:`contextMenu`,title:`Context menu`,content:`右键适合承载次级命令或辅助说明。`,children:T(`button`,{className:`btn btn-ghost border border-base-300`,children:`Right click`})}),T(R,{trigger:`focus`,title:`Focus trigger`,content:`适合输入前的字段说明与校验前置提示。`,children:T(`input`,{className:`input input-bordered w-full`,placeholder:`Focus this input`})})]}),code:`<div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
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
</div>`});y(()=>p(e,m,k))});let A=e(`rue:component:anchor`);a(m,A),l(()=>{let e=v(D,{title:`Controlled visibility`,tab:d,preview:()=>T(`div`,{className:`rounded-box border border-base-300 bg-base-100/75 p-5`,children:w(`div`,{className:`flex flex-wrap items-center gap-3`,children:[T(R,{open:h.value,trigger:`click`,title:`受控 Popover`,content:`可以由外部按钮、校验状态或流程步骤直接控制。`,onOpenChange:e=>{h.value=e},children:T(`button`,{className:`btn btn-outline`,children:`受控触发器`})}),T(`button`,{className:`btn btn-primary`,onClick:()=>{h.value=!h.value},children:h.value?`收起外部控制面板`:`打开外部控制面板`}),T(`span`,{className:`badge badge-outline min-w-[6rem] justify-center`,children:h.value?`open`:`closed`})]})}),code:`const controlledOpen = ref(false)

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
      onClick={() => {
        controlledOpen.value = !controlledOpen.value
      }}
    >
      {controlledOpen.value ? '收起外部控制面板' : '打开外部控制面板'}
    </button>

    <span className="badge badge-outline min-w-[6rem] justify-center">
      {controlledOpen.value ? 'open' : 'closed'}
    </span>
  </div>
</div>`});y(()=>p(e,m,A))});let j=e(`rue:component:anchor`);a(m,j),l(()=>{let e=v(D,{title:`Arrow and semantic styling`,tab:f,preview:()=>w(`div`,{className:`grid gap-6 lg:grid-cols-2`,children:[T(R,{open:!0,placement:`bottom`,arrow:{pointAtCenter:!0},title:`Centered arrow`,content:`箭头会对齐到触发器中心，更适合宽按钮或卡片入口。`,className:`justify-self-start`,children:T(`button`,{className:`btn btn-primary w-52 justify-center`,children:`Point at center`})}),T(R,{open:!0,placement:`rightTop`,arrow:!1,title:`Editorial pulse`,content:w(`div`,{className:`space-y-2`,children:[T(`div`,{className:`text-xs text-base-content/60`,children:`本周更新节奏`}),w(`div`,{className:`flex items-center gap-2`,children:[T(`span`,{className:`badge badge-primary badge-soft`,children:`+12%`}),T(`span`,{className:`text-xs text-base-content/70`,children:`首屏转化高于上周`})]})]}),classNames:{panel:`border-primary/20 bg-base-100/98`,header:`bg-primary/5`,title:`uppercase tracking-[0.14em] text-[11px] text-primary`},styles:{content:{padding:`0.75rem 1rem 1rem`}},className:`justify-self-start`,children:T(`button`,{className:`btn btn-outline btn-primary`,children:`Styled card`})})]}),code:`<div className="grid gap-6 lg:grid-cols-2">
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
</div>`});y(()=>p(e,m,j))});let M=r(`h2`,m);a(m,M),n(M,`mt-12`),a(M,o(`API`));let N=e(`rue:component:anchor`);return a(m,N),l(()=>{let e=v(ie,{rows:ae});y(()=>p(e,m,N))}),u})}),g,_),g})};export{z as default};
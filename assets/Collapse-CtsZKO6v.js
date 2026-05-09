import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-BZZbPG7x.js";import{a as h,n as g}from"./vapor-helpers-vapor-DuGQh50d.js";import{n as _,t as v}from"./src-DP0sEeZS.js";import{n as y}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as b}from"./Code-C8wy38VS.js";import{t as x}from"./tabs-B-QPmbH8.js";var S=0,C=(e,t)=>e?t?`${e} ${t}`:e:t??``,w=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},T=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),E=(e,t)=>t instanceof Node?!!T(e)?.contains(t):!1,D=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),ee=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=T(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},O=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=T(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},k=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},A=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},te=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},j=e=>Array.isArray(e)?e:e==null?[]:[e],M=(e,t)=>{let n=k(j(e));return t?n.slice(0,1):n},N=e=>{switch(A(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},P=e=>{switch(A(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},F=(e,t,n)=>M(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),I=(e,t,n,r)=>r?n?[t]:[]:n?k([...e,t]):e.filter(e=>e!==t),L=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),C(r,n)},R=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,z=({open:e})=>v(`span`,{"data-rue-collapse-arrow-icon":`true`,"aria-hidden":`true`,className:`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e?`rotate-90`:``}`.trim(),children:v(`svg`,{viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:`size-4`,children:v(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 4 6 6-6 6`})})}),B=({open:e})=>_(`span`,{"aria-hidden":`true`,className:`relative inline-flex size-5 items-center justify-center`,children:[v(`span`,{className:`absolute h-0.5 w-3 rounded-full bg-current`}),v(`span`,{"data-rue-collapse-plus-vertical":`true`,className:`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e?`opacity-0`:`opacity-100`}`.trim()})]}),V=(e,t)=>v(e===`plus`?B:z,{open:t}),H=(e,t,n,r,i)=>t==null&&n==null?e:_(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[_(`div`,{className:`min-w-0 flex-1`,children:[v(`div`,{children:e}),t==null?null:v(`div`,{className:C(`mt-1 text-xs opacity-70`,r),children:t})]}),n==null?null:v(`div`,{className:C(`shrink-0 text-xs opacity-70`,i),onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),children:n})]}),U=Object.assign(({icon:e,arrow:t,plus:n,showArrow:r,open:i,close:a,defaultOpen:o,activeKey:s,defaultActiveKey:c,accordion:l,bordered:u,ghost:f,disabled:p,collapsible:m,size:h,expandIconPlacement:g=`end`,tabIndex:y,tag:b=`div`,className:x,titleClassName:T,contentClassName:k,items:A,children:j,onChange:z})=>{let B=A?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],U=B.length>0,W=u??U,G=te(e,t,n),ne=r===!1?!1:!!G,K=d(`rue-collapse-${S++}`),q=d(F(B,c,l)),J=()=>s===void 0?q.value:M(s,l),Y=J();if(U){let e=K.value,t=(t,n)=>{w(e,n).forEach(e=>{let n=B[Number(e.dataset.rueCollapseIndex)];n&&ee(e,t.some(e=>e===n.key))})},n=(e,n,r)=>{let i=I(J(),e.key,n,l),a=i.some(t=>t===e.key);s===void 0&&(q.value=i,t(i,r)),z&&z(l?i[0]??null:i,{key:e.key,index:e.index,open:a,item:e})};return v(`div`,{className:L(W,f,x),children:B.map(t=>{let r=t.icon??G,i=t.showArrow??ne,a=p||t.disabled?`disabled`:t.collapsible??m??`header`,o=Y.some(e=>e===t.key),s=t.description!=null||t.extra!=null?`pt-1`:`mt-0.5`,c=R(W,f),l=C(C(C(`collapse`,o?`collapse-open`:`collapse-close`),c),t.className),u=C(C(`collapse-title`,N(h)),C(T,t.titleClassName)),d=C(C(`collapse-content`,P(h)),C(k,t.contentClassName)),y=H(t.label,t.description,t.extra,t.descriptionClassName,t.extraClassName),b=e=>{a!==`disabled`&&n(t,!J().some(e=>e===t.key),e)},x=a===`header`?{role:`button`,tabIndex:0,onClick:e=>b(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),b(e.currentTarget))}}:{};return _(`div`,{className:l,"data-rue-collapse-group":e,"data-rue-collapse-index":String(t.index),children:[v(`div`,{className:C(u,a===`header`?`cursor-pointer select-none`:``),"aria-expanded":o?`true`:`false`,...x,children:_(`div`,{className:`flex w-full items-start gap-3`,children:[i&&r&&g===`start`?a===`icon`?v(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:C(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:V(r,o)}):v(`span`,{className:C(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:V(r,o)}):null,v(`div`,{className:`min-w-0 flex-1`,children:y}),i&&r&&g===`end`?a===`icon`?v(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:C(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:V(r,o)}):v(`span`,{className:C(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:V(r,o)}):null]})}),v(`div`,{className:d,children:t.content})]},t.key)})})}let X=`collapse`;r!==!1&&(t||G===`arrow`)&&(X+=` collapse-arrow`),r!==!1&&(n||G===`plus`)&&(X+=` collapse-plus`),i&&(X+=` collapse-open`),a&&(X+=` collapse-close`),!i&&!a&&o&&(X+=` collapse-open`),p&&(X+=` opacity-70`);let Z=R(!!W,f);if(Z&&(X+=` ${Z}`),x&&(X+=` ${x}`),b===`details`)return v(`details`,{className:X,open:i||!a&&o?!0:void 0,children:j});let Q=typeof y==`number`?y:void 0,$=!!i||!!a||!!o;return v(`div`,{className:X,tabindex:Q===void 0?void 0:String(Q),onMouseDown:e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`},onClick:e=>{let t=e.currentTarget,n=e.target,r=D(t),i=E(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}Q!==void 0&&(t.tabIndex=Q,t.setAttribute(`tabindex`,String(Q)),t.focus()),$||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),O(t,r.checked)):O(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown},onFocus:e=>{if(Q===void 0||$)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&O(t,!0)},onBlur:e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(Q===void 0||$)&&O(e.currentTarget,!1)},onKeyDown:e=>{if(Q===void 0||$||e.key!==`Enter`&&e.key!==` `||!E(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;O(t,!t.classList.contains(`collapse-open`))},onChange:e=>{if($)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||O(e.currentTarget,t.checked)},children:j})},{Title:({as:e=`div`,className:t,description:n,extra:r,descriptionClassName:i,extraClassName:a,children:o})=>{let s=C(`collapse-title`,t),c=H(o,n,r,i,a);return v(e===`summary`?`summary`:`div`,{className:s,children:c})},Content:({className:e,children:t})=>v(`div`,{className:C(`collapse-content`,e),children:t})}),W=({title:t,summary:d,tab:m,preview:h,code:g})=>p(()=>{let _=e(`div`);o(_,`component-preview not-prose text-base-content my-6 lg:my-12`);let v=e(`div`);l(_,v);let y=e(`h3`);l(v,y),o(y,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(y,n(`# `));let S=r(y);l(y,S),u(()=>{s(S,t)});let C=i(`rue:slot:anchor`);l(v,C),u(()=>{c(d?p(()=>{let t=a(),n=e(`p`);l(t,n),o(n,`m-0 text-sm opacity-70`);let i=r(n);return l(n,i),u(()=>{s(i,d)}),t}):``,v,C)});let w=i(`rue:component:anchor`);l(_,w),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3 mt-4`}),_,w)});let T=i(`rue:slot:anchor`);return l(_,T),u(()=>{c(m.value===`preview`?h():p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:g}),e,t)}),e}),_,T)}),_}),G=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),ne=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`兼容旧写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],K=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，兼容 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，兼容 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],q=()=>{let{tabItemsBasic:r,tabAccordion:s,tabMeta:g,tabPlacement:b,tabGhost:x,tabControlled:S,tabFocus:C,tabCheckbox:w,tabDetails:T,tabNoBorder:E,tabArrow:D,tabPlus:ee,tabIconStart:O,tabOpen:k,tabClose:A,tabCustomFocus:te,tabCustomCheckbox:j,controlledKeys:M,accordionKey:N}=h(`useSetup:0:0`,()=>m(()=>({tabItemsBasic:h(`ref:1:0`,()=>d(`preview`)),tabAccordion:h(`ref:1:1`,()=>d(`preview`)),tabMeta:h(`ref:1:2`,()=>d(`preview`)),tabPlacement:h(`ref:1:3`,()=>d(`preview`)),tabGhost:h(`ref:1:4`,()=>d(`preview`)),tabControlled:h(`ref:1:5`,()=>d(`preview`)),tabFocus:h(`ref:1:6`,()=>d(`preview`)),tabCheckbox:h(`ref:1:7`,()=>d(`preview`)),tabDetails:h(`ref:1:8`,()=>d(`preview`)),tabNoBorder:h(`ref:1:9`,()=>d(`preview`)),tabArrow:h(`ref:1:10`,()=>d(`preview`)),tabPlus:h(`ref:1:11`,()=>d(`preview`)),tabIconStart:h(`ref:1:12`,()=>d(`preview`)),tabOpen:h(`ref:1:13`,()=>d(`preview`)),tabClose:h(`ref:1:14`,()=>d(`preview`)),tabCustomFocus:h(`ref:1:15`,()=>d(`preview`)),tabCustomCheckbox:h(`ref:1:16`,()=>d(`preview`)),controlledKeys:h(`ref:1:17`,()=>d([`release`])),accordionKey:h(`ref:1:18`,()=>d(`guide`))})));return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),p=e(`div`);l(d,p),o(p,`max-w-none prose prose-sm md:prose-base`);let m=e(`h1`);l(p,m),l(m,n(`Collapse 折叠面板`));let h=e(`p`);l(p,h),o(h,`mt-3 mb-3 text-sm`),l(h,n("保留 Rue 原本基于 daisyUI 的视觉语言，并在此基础上补齐 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let y=e(`div`);l(p,y),o(y,`text-sm`);let P=e(`a`);l(y,P),t(P,`href`,`https://daisyui.com/components/collapse/`),t(P,`target`,`_blank`),l(P,n(`查看 Collapse 静态样式`));let F=e(`h2`);l(p,F),l(F,n(`增强 API`));let I=e(`p`);l(p,I),o(I,`text-sm opacity-80`),l(I,n("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但保留 Rue 视觉风格。"));let L=i(`rue:component:anchor`);l(p,L),u(()=>{c(f(W,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:r,preview:()=>v(U,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
  arrow
  defaultActiveKey={['overview']}
  items={[
    {
      key: 'overview',
      label: 'Overview',
      children: '汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。',
    },
    {
      key: 'release',
      label: 'Release Checklist',
      children: '确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。',
    },
    {
      key: 'faq',
      label: 'FAQ',
      children: '常见问题、风险提示和升级说明也可以继续放进同一个折叠组。',
    },
  ]}
/>`}),p,L)});let R=i(`rue:component:anchor`);l(p,R),u(()=>{c(f(W,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:s,preview:()=>_(`div`,{className:`space-y-4`,children:[_(`div`,{className:`flex flex-wrap gap-2`,children:[v(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`guide`,children:`打开 Guide`}),v(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`api`,children:`打开 API`}),v(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>N.value=null,children:`全部收起`})]}),v(U,{accordion:!0,plus:!0,activeKey:N.value,onChange:e=>N.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出新增属性、弃用写法与向后兼容策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

<Collapse
  accordion
  plus
  activeKey={activeKey.value}
  onChange={nextValue => (activeKey.value = (nextValue as string | null) ?? null)}
  items={[
    {
      key: 'guide',
      label: 'Migration Guide',
      children: '梳理 breaking changes、默认行为差异与升级建议。',
    },
    {
      key: 'api',
      label: 'API Delta',
      children: '列出新增属性、弃用写法与向后兼容策略。',
    },
    {
      key: 'qa',
      label: 'QA Notes',
      children: '补充测试范围、回归清单和已知限制。',
    },
  ]}
/>`}),p,R)});let z=i(`rue:component:anchor`);l(p,z),u(()=>{c(f(W,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:g,preview:()=>v(U,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:v(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在迁移，暂不开放编辑。`,extra:v(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保留信息展示，但不响应交互。`}]}),code:`<Collapse
  arrow
  defaultActiveKey={['ops']}
  items={[
    {
      key: 'ops',
      label: 'Ops Console',
      description: '控制发布节奏、灰度范围与告警阈值。',
      extra: <span className="badge badge-soft badge-info">Beta</span>,
      children: '适合放置运维策略、SLA 约束和异常回滚说明。',
    },
    {
      key: 'billing',
      label: 'Billing Center',
      description: '当前模块仍在迁移，暂不开放编辑。',
      extra: <span className="badge badge-soft">Read only</span>,
      disabled: true,
      children: '禁用项会保留信息展示，但不响应交互。',
    },
  ]}
/>`}),p,z)});let B=i(`rue:component:anchor`);l(p,B),u(()=>{c(f(W,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:b,preview:()=>v(U,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
  arrow
  expandIconPlacement="start"
  items={[
    {
      key: 'deployment',
      label: 'Deployment Window',
      description: '只有左侧图标可点击，标题区更适合放长文本说明。',
      collapsible: 'icon',
      children: '当标题里还有链接、状态或操作说明时，这个模式会更稳妥。',
    },
    {
      key: 'security',
      label: 'Security Review',
      description: '保持默认 header 触发，图标只是视觉反馈。',
      children: '适合和 icon-only 模式混合使用。',
    },
  ]}
/>`}),p,B)});let V=i(`rue:component:anchor`);l(p,V),u(()=>{c(f(W,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:x,preview:()=>v(U,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
  arrow
  bordered={false}
  ghost
  className="space-y-3"
  defaultActiveKey={['design']}
  items={[
    {
      key: 'design',
      label: 'Design Tokens',
      children: '透明背景更适合嵌在卡片、侧栏或深色容器中。',
    },
    {
      key: 'theme',
      label: 'Theme Sync',
      children: '可继续叠加自定义类名，让容器完全交给外层布局控制。',
    },
  ]}
/>`}),p,V)});let H=i(`rue:component:anchor`);l(p,H),u(()=>{c(f(W,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:S,preview:()=>_(`div`,{className:`space-y-4`,children:[_(`div`,{className:`flex flex-wrap gap-2`,children:[v(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`],children:`仅展开 Release`}),v(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`,`notes`],children:`展开两项`}),v(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>M.value=[],children:`全部收起`})]}),v(U,{plus:!0,size:`lg`,activeKey:M.value,onChange:e=>M.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

<Collapse
  plus
  size="lg"
  activeKey={openKeys.value}
  onChange={nextValue => (openKeys.value = (nextValue as string[]) ?? [])}
  items={[
    {
      key: 'release',
      label: 'Release Plan',
      children: '大尺寸适合在信息层级较重的管理页或文档页中使用。',
    },
    {
      key: 'notes',
      label: 'Release Notes',
      children: '多开模式下可以把相邻的几块信息一起展开对照查看。',
    },
    {
      key: 'rollback',
      label: 'Rollback',
      children: '受控模式更方便和 URL、筛选器或外部按钮联动。',
    },
  ]}
/>`}),p,H)});let q=i(`rue:component:anchor`);l(p,q),u(()=>{c(f(W,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:C,preview:()=>_(U,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[v(U.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,q)});let J=i(`rue:component:anchor`);l(p,J),u(()=>{c(f(W,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>_(U,{className:`bg-base-100 border border-base-300`,children:[v(`input`,{type:`checkbox`}),v(U.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,J)});let Y=i(`rue:component:anchor`);l(p,Y),u(()=>{c(f(W,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>_(U,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[v(U.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,Y)});let X=i(`rue:component:anchor`);l(p,X),u(()=>{c(f(W,{title:`Without border and background color`,tab:E,preview:()=>_(U,{tabIndex:0,children:[v(U.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,X)});let Z=i(`rue:component:anchor`);l(p,Z),u(()=>{c(f(W,{title:`With arrow icon`,tab:D,preview:()=>_(U,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[v(U.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,Z)});let Q=i(`rue:component:anchor`);l(p,Q),u(()=>{c(f(W,{title:`With plus/minus icon`,tab:ee,preview:()=>_(U,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[v(U.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,Q)});let $=i(`rue:component:anchor`);l(p,$),u(()=>{c(f(W,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保留标题区重复点击切换能力。`,tab:O,preview:()=>_(U,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[v(U.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,$)});let re=i(`rue:component:anchor`);l(p,re),u(()=>{c(f(W,{title:`Force open`,tab:k,preview:()=>_(U,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[v(U.Title,{className:`font-semibold`,children:`I have collapse-open class`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,re)});let ie=i(`rue:component:anchor`);l(p,ie),u(()=>{c(f(W,{title:`Force close`,tab:A,preview:()=>_(U,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[v(U.Title,{className:`font-semibold`,children:`I have collapse-close class`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,ie)});let ae=i(`rue:component:anchor`);l(p,ae),u(()=>{c(f(W,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:te,preview:()=>_(U,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[v(U.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(U.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,ae)});let oe=i(`rue:component:anchor`);l(p,oe),u(()=>{c(f(W,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:j,preview:()=>_(U,{className:`bg-base-100 border border-base-300`,children:[v(`input`,{type:`checkbox`,className:`peer`}),v(U.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),v(U.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`}),p,oe)});let se=e(`h2`);l(p,se),l(se,n(`API`));let ce=e(`h3`);l(p,ce),l(ce,n(`Collapse`));let le=i(`rue:component:anchor`);l(p,le),u(()=>{c(f(G,{rows:ne}),p,le)});let ue=e(`h3`);l(p,ue),l(ue,n(`CollapseItem`));let de=i(`rue:component:anchor`);return l(p,de),u(()=>{c(f(G,{rows:K}),p,de)}),d})}),d,m),d})};export{q as default};
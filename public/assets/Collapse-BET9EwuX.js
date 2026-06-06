import{$ as e,Et as t,G as n,H as r,K as i,W as a,_t as o,d as s,kt as c,l,q as u,t as d,tt as f,xt as p}from"./vapor-runtime-ACs_OvwU.js";import{a as m,n as h}from"./vapor-helpers-vapor-BFB_fGs4.js";import{n as g,t as _}from"./src-B0RvnZVV.js";import{n as v}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as y}from"./Code-CliOXHNE.js";import{t as b}from"./tabs-CPymQe79.js";var x=0,S=(e,t)=>e?t?`${e} ${t}`:e:t??``,C=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},w=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),T=(e,t)=>t instanceof Node?!!w(e)?.contains(t):!1,ee=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),te=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=w(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},E=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=w(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},D=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},k=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},A=e=>Array.isArray(e)?e:e==null?[]:[e],j=(e,t)=>{let n=D(A(e));return t?n.slice(0,1):n},M=e=>{switch(O(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},N=e=>{switch(O(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},P=(e,t,n)=>j(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),F=(e,t,n,r)=>r?n?[t]:[]:n?D([...e,t]):e.filter(e=>e!==t),I=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),S(r,n)},L=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,R=({open:e})=>_(`span`,{"data-rue-collapse-arrow-icon":`true`,"aria-hidden":`true`,className:`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e?`rotate-90`:``}`.trim(),children:_(`svg`,{viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:`size-4`,children:_(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 4 6 6-6 6`})})}),z=({open:e})=>g(`span`,{"aria-hidden":`true`,className:`relative inline-flex size-5 items-center justify-center`,children:[_(`span`,{className:`absolute h-0.5 w-3 rounded-full bg-current`}),_(`span`,{"data-rue-collapse-plus-vertical":`true`,className:`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e?`opacity-0`:`opacity-100`}`.trim()})]}),B=(e,t)=>_(e===`plus`?z:R,{open:t}),V=(e,t,n,r,i)=>t==null&&n==null?e:g(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[g(`div`,{className:`min-w-0 flex-1`,children:[_(`div`,{children:e}),t==null?null:_(`div`,{className:S(`mt-1 text-xs opacity-70`,r),children:t})]}),n==null?null:_(`div`,{className:S(`shrink-0 text-xs opacity-70`,i),onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),children:n})]}),H=Object.assign(({icon:e,arrow:t,plus:n,showArrow:r,open:i,close:a,defaultOpen:s,activeKey:c,defaultActiveKey:l,accordion:u,bordered:d,ghost:f,disabled:p,collapsible:m,size:h,expandIconPlacement:v=`end`,tabIndex:y,tag:b=`div`,className:w,titleClassName:D,contentClassName:O,items:A,children:R,onChange:z})=>{let H=A?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],U=H.length>0,W=d??U,G=k(e,t,n),ne=r===!1?!1:!!G,K=o(`rue-collapse-${x++}`),q=o(P(H,l,u)),J=()=>c===void 0?q.value:j(c,u),Y=J();if(U){let e=K.value,t=(t,n)=>{C(e,n).forEach(e=>{let n=H[Number(e.dataset.rueCollapseIndex)];n&&te(e,t.some(e=>e===n.key))})},n=(e,n,r)=>{let i=F(J(),e.key,n,u),a=i.some(t=>t===e.key);c===void 0&&(q.value=i,t(i,r)),z&&z(u?i[0]??null:i,{key:e.key,index:e.index,open:a,item:e})};return _(`div`,{className:I(W,f,w),children:H.map(t=>{let r=t.icon??G,i=t.showArrow??ne,a=p||t.disabled?`disabled`:t.collapsible??m??`header`,o=Y.some(e=>e===t.key),s=t.description!=null||t.extra!=null?`pt-1`:`mt-0.5`,c=L(W,f),l=S(S(S(`collapse`,o?`collapse-open`:`collapse-close`),c),t.className),u=S(S(`collapse-title`,M(h)),S(D,t.titleClassName)),d=S(S(`collapse-content`,N(h)),S(O,t.contentClassName)),y=V(t.label,t.description,t.extra,t.descriptionClassName,t.extraClassName),b=e=>{a!==`disabled`&&n(t,!J().some(e=>e===t.key),e)},x=a===`header`?{role:`button`,tabIndex:0,onClick:e=>b(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),b(e.currentTarget))}}:{};return g(`div`,{className:l,"data-rue-collapse-group":e,"data-rue-collapse-index":String(t.index),children:[_(`div`,{className:S(u,a===`header`?`cursor-pointer select-none`:``),"aria-expanded":o?`true`:`false`,...x,children:g(`div`,{className:`flex w-full items-start gap-3`,children:[i&&r&&v===`start`?a===`icon`?_(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:B(r,o)}):_(`span`,{className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:B(r,o)}):null,_(`div`,{className:`min-w-0 flex-1`,children:y}),i&&r&&v===`end`?a===`icon`?_(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:B(r,o)}):_(`span`,{className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:B(r,o)}):null]})}),_(`div`,{className:d,children:t.content})]},t.key)})})}let X=`collapse`;r!==!1&&(t||G===`arrow`)&&(X+=` collapse-arrow`),r!==!1&&(n||G===`plus`)&&(X+=` collapse-plus`),i&&(X+=` collapse-open`),a&&(X+=` collapse-close`),!i&&!a&&s&&(X+=` collapse-open`),p&&(X+=` opacity-70`);let Z=L(!!W,f);if(Z&&(X+=` ${Z}`),w&&(X+=` ${w}`),b===`details`)return _(`details`,{className:X,open:i||!a&&s?!0:void 0,children:R});let Q=typeof y==`number`?y:void 0,$=!!i||!!a||!!s;return _(`div`,{className:X,tabindex:Q===void 0?void 0:String(Q),onMouseDown:e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`},onClick:e=>{let t=e.currentTarget,n=e.target,r=ee(t),i=T(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}Q!==void 0&&(t.tabIndex=Q,t.setAttribute(`tabindex`,String(Q)),t.focus()),$||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),E(t,r.checked)):E(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown},onFocus:e=>{if(Q===void 0||$)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&E(t,!0)},onBlur:e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(Q===void 0||$)&&E(e.currentTarget,!1)},onKeyDown:e=>{if(Q===void 0||$||e.key!==`Enter`&&e.key!==` `||!T(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;E(t,!t.classList.contains(`collapse-open`))},onChange:e=>{if($)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||E(e.currentTarget,t.checked)},children:R})},{Title:({as:e=`div`,className:t,description:n,extra:r,descriptionClassName:i,extraClassName:a,children:o})=>{let s=S(`collapse-title`,t),c=V(o,n,r,i,a);return _(e===`summary`?`summary`:`div`,{className:s,children:c})},Content:({className:e,children:t})=>_(`div`,{className:S(`collapse-content`,e),children:t})}),U=e=>s(t=>{let o=i(`div`,t);f(o,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=i(`div`,o);r(o,m);let h=i(`h3`,m);r(m,h),f(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(h,u(`# `));let g=a(`rue:slot:anchor`);r(h,g),c(()=>{let t=e.title;p(()=>l(t,h,g))});let _=a(`rue:slot:anchor`);r(m,_),c(()=>{let t=e.summary?s(()=>{let t=n(),o=i(`p`,t);r(t,o),f(o,`m-0 text-sm opacity-70`);let s=a(`rue:slot:anchor`);return r(o,s),c(()=>{let t=e.summary;p(()=>l(t,o,s))}),t}):``;p(()=>l(t,m,_))});let v=a(`rue:component:anchor`);r(o,v),c(()=>{let t=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:e.tab.value,onChange:t=>e.tab.value=t,className:`mb-3 mt-4`});p(()=>l(t,o,v))});let x=a(`rue:slot:anchor`);return r(o,x),c(()=>{let t=e.tab.value===`preview`?e.preview():s(()=>{let t=n(),i=a(`rue:component:anchor`);return r(t,i),c(()=>{let n=d(y,{className:`mt-2`,lang:`tsx`,code:e.code});p(()=>l(n,t,i))}),t});p(()=>l(t,o,x))}),o}),W=t=>s(o=>{let d=i(`div`,o);f(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=i(`table`,d);r(d,m),f(m,`table table-zebra`);let g=i(`thead`,m);r(m,g);let _=i(`tr`,g);r(g,_);let v=i(`th`,_);r(_,v),r(v,u(`属性`));let y=i(`th`,_);r(_,y),r(y,u(`说明`));let b=i(`th`,_);r(_,b),r(b,u(`类型`));let x=i(`th`,_);r(_,x),r(x,u(`默认值`));let S=i(`tbody`,m);r(m,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return c(()=>{T=h({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,o,u,d,f)=>{l(s(()=>{let o=n(),s=i(`tr`,o);r(o,s),c(()=>{e(s,`key`,String(t.prop))});let u=i(`td`,s);r(s,u);let d=i(`code`,u);r(u,d);let f=a(`rue:slot:anchor`);r(d,f),c(()=>{let e=t.prop;p(()=>l(e,d,f))});let m=i(`td`,s);r(s,m);let h=a(`rue:slot:anchor`);r(m,h),c(()=>{let e=t.description;p(()=>l(e,m,h))});let g=i(`td`,s);r(s,g);let _=i(`code`,g);r(g,_);let v=a(`rue:slot:anchor`);r(_,v),c(()=>{let e=t.type;p(()=>l(e,_,v))});let y=i(`td`,s);r(s,y);let b=i(`code`,y);r(y,b);let x=a(`rue:slot:anchor`);return r(b,x),c(()=>{let e=t.defaultValue;p(()=>l(e,b,x))}),o}),o,u)}})}),d}),G=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`兼容旧写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],ne=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，兼容 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，兼容 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],K=()=>{let{tabItemsBasic:e,tabAccordion:h,tabMeta:y,tabPlacement:b,tabGhost:x,tabControlled:S,tabFocus:C,tabCheckbox:w,tabDetails:T,tabNoBorder:ee,tabArrow:te,tabPlus:E,tabIconStart:D,tabOpen:O,tabClose:k,tabCustomFocus:A,tabCustomCheckbox:j,controlledKeys:M,accordionKey:N}=m(`useSetup:0:0`,()=>t(()=>({tabItemsBasic:m(`ref:1:0`,()=>o(`preview`)),tabAccordion:m(`ref:1:1`,()=>o(`preview`)),tabMeta:m(`ref:1:2`,()=>o(`preview`)),tabPlacement:m(`ref:1:3`,()=>o(`preview`)),tabGhost:m(`ref:1:4`,()=>o(`preview`)),tabControlled:m(`ref:1:5`,()=>o(`preview`)),tabFocus:m(`ref:1:6`,()=>o(`preview`)),tabCheckbox:m(`ref:1:7`,()=>o(`preview`)),tabDetails:m(`ref:1:8`,()=>o(`preview`)),tabNoBorder:m(`ref:1:9`,()=>o(`preview`)),tabArrow:m(`ref:1:10`,()=>o(`preview`)),tabPlus:m(`ref:1:11`,()=>o(`preview`)),tabIconStart:m(`ref:1:12`,()=>o(`preview`)),tabOpen:m(`ref:1:13`,()=>o(`preview`)),tabClose:m(`ref:1:14`,()=>o(`preview`)),tabCustomFocus:m(`ref:1:15`,()=>o(`preview`)),tabCustomCheckbox:m(`ref:1:16`,()=>o(`preview`)),controlledKeys:m(`ref:1:17`,()=>o([`release`])),accordionKey:m(`ref:1:18`,()=>o(`guide`))})));return s(t=>{let o=n(),m=a(`rue:component:anchor`);return r(o,m),l(d(v,{children:s(()=>{let t=n(),o=i(`div`,t);r(t,o),f(o,`max-w-none prose prose-sm md:prose-base`);let s=i(`h1`,o);r(o,s),r(s,u(`Collapse 折叠面板`));let m=i(`p`,o);r(o,m),f(m,`mt-3 mb-3 text-sm`),r(m,u("保留 Rue 原本基于 daisyUI 的视觉语言，并在此基础上补齐 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let v=i(`h2`,o);r(o,v),r(v,u(`增强 API`));let P=i(`p`,o);r(o,P),f(P,`text-sm opacity-80`),r(P,u("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但保留 Rue 视觉风格。"));let F=a(`rue:component:anchor`);r(o,F),c(()=>{let t=d(U,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:e,preview:()=>_(H,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});p(()=>l(t,o,F))});let I=a(`rue:component:anchor`);r(o,I),c(()=>{let e=d(U,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:h,preview:()=>g(`div`,{className:`space-y-4`,children:[g(`div`,{className:`flex flex-wrap gap-2`,children:[_(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`guide`,children:`打开 Guide`}),_(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`api`,children:`打开 API`}),_(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>N.value=null,children:`全部收起`})]}),_(H,{accordion:!0,plus:!0,activeKey:N.value,onChange:e=>N.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出新增属性、弃用写法与向后兼容策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
/>`});p(()=>l(e,o,I))});let L=a(`rue:component:anchor`);r(o,L),c(()=>{let e=d(U,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:y,preview:()=>_(H,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:_(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在迁移，暂不开放编辑。`,extra:_(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保留信息展示，但不响应交互。`}]}),code:`<Collapse
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
/>`});p(()=>l(e,o,L))});let R=a(`rue:component:anchor`);r(o,R),c(()=>{let e=d(U,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:b,preview:()=>_(H,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});p(()=>l(e,o,R))});let z=a(`rue:component:anchor`);r(o,z),c(()=>{let e=d(U,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:x,preview:()=>_(H,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});p(()=>l(e,o,z))});let B=a(`rue:component:anchor`);r(o,B),c(()=>{let e=d(U,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:S,preview:()=>g(`div`,{className:`space-y-4`,children:[g(`div`,{className:`flex flex-wrap gap-2`,children:[_(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`],children:`仅展开 Release`}),_(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`,`notes`],children:`展开两项`}),_(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>M.value=[],children:`全部收起`})]}),_(H,{plus:!0,size:`lg`,activeKey:M.value,onChange:e=>M.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});p(()=>l(e,o,B))});let V=a(`rue:component:anchor`);r(o,V),c(()=>{let e=d(U,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:C,preview:()=>g(H,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,V))});let K=a(`rue:component:anchor`);r(o,K),c(()=>{let e=d(U,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>g(H,{className:`bg-base-100 border border-base-300`,children:[_(`input`,{type:`checkbox`}),_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,K))});let q=a(`rue:component:anchor`);r(o,q),c(()=>{let e=d(U,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>g(H,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,q))});let J=a(`rue:component:anchor`);r(o,J),c(()=>{let e=d(U,{title:`Without border and background color`,tab:ee,preview:()=>g(H,{tabIndex:0,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,J))});let Y=a(`rue:component:anchor`);r(o,Y),c(()=>{let e=d(U,{title:`With arrow icon`,tab:te,preview:()=>g(H,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,Y))});let X=a(`rue:component:anchor`);r(o,X),c(()=>{let e=d(U,{title:`With plus/minus icon`,tab:E,preview:()=>g(H,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,X))});let Z=a(`rue:component:anchor`);r(o,Z),c(()=>{let e=d(U,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保留标题区重复点击切换能力。`,tab:D,preview:()=>g(H,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,Z))});let Q=a(`rue:component:anchor`);r(o,Q),c(()=>{let e=d(U,{title:`Force open`,tab:O,preview:()=>g(H,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`I have collapse-open class`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,Q))});let $=a(`rue:component:anchor`);r(o,$),c(()=>{let e=d(U,{title:`Force close`,tab:k,preview:()=>g(H,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`I have collapse-close class`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,$))});let re=a(`rue:component:anchor`);r(o,re),c(()=>{let e=d(U,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:A,preview:()=>g(H,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,re))});let ie=a(`rue:component:anchor`);r(o,ie),c(()=>{let e=d(U,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:j,preview:()=>g(H,{className:`bg-base-100 border border-base-300`,children:[_(`input`,{type:`checkbox`,className:`peer`}),_(H.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>l(e,o,ie))});let ae=i(`h2`,o);r(o,ae),r(ae,u(`API`));let oe=i(`h3`,o);r(o,oe),r(oe,u(`Collapse`));let se=a(`rue:component:anchor`);r(o,se),c(()=>{let e=d(W,{rows:G});p(()=>l(e,o,se))});let ce=i(`h3`,o);r(o,ce),r(ce,u(`CollapseItem`));let le=a(`rue:component:anchor`);return r(o,le),c(()=>{let e=d(W,{rows:ne});p(()=>l(e,o,le))}),t})}),o,m),o})};export{K as default};
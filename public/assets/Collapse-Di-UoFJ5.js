import{$ as e,B as t,Dt as n,G as r,H as i,U as a,W as o,Z as s,ht as c,l,s as u,t as d,wt as f,yt as p}from"./vapor-runtime-C1rlwc61.js";import{a as m,n as h}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as g}from"./Code-BCLFq1E3.js";import{n as _,t as v}from"./src-BLzF0BqW.js";import{n as y}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as b}from"./tabs-BOxm6iIN.js";var x=0,S=(e,t)=>e?t?`${e} ${t}`:e:t??``,C=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},w=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),T=(e,t)=>t instanceof Node?!!w(e)?.contains(t):!1,ee=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),te=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=w(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},E=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=w(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},D=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},k=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},A=e=>Array.isArray(e)?e:e==null?[]:[e],j=(e,t)=>{let n=D(A(e));return t?n.slice(0,1):n},M=e=>{switch(O(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},N=e=>{switch(O(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},P=(e,t,n)=>j(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),F=(e,t,n,r)=>r?n?[t]:[]:n?D([...e,t]):e.filter(e=>e!==t),I=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),S(r,n)},L=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,R=({open:e})=>v(`span`,{"data-rue-collapse-arrow-icon":`true`,"aria-hidden":`true`,className:`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e?`rotate-90`:``}`.trim(),children:v(`svg`,{viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:`size-4`,children:v(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 4 6 6-6 6`})})}),z=({open:e})=>_(`span`,{"aria-hidden":`true`,className:`relative inline-flex size-5 items-center justify-center`,children:[v(`span`,{className:`absolute h-0.5 w-3 rounded-full bg-current`}),v(`span`,{"data-rue-collapse-plus-vertical":`true`,className:`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e?`opacity-0`:`opacity-100`}`.trim()})]}),B=(e,t)=>v(e===`plus`?z:R,{open:t}),V=(e,t,n,r,i)=>t==null&&n==null?e:_(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[_(`div`,{className:`min-w-0 flex-1`,children:[v(`div`,{children:e}),t==null?null:v(`div`,{className:S(`mt-1 text-xs opacity-70`,r),children:t})]}),n==null?null:v(`div`,{className:S(`shrink-0 text-xs opacity-70`,i),onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),children:n})]}),H=Object.assign(({icon:e,arrow:t,plus:n,showArrow:r,open:i,close:a,defaultOpen:o,activeKey:s,defaultActiveKey:l,accordion:u,bordered:d,ghost:f,disabled:p,collapsible:m,size:h,expandIconPlacement:g=`end`,tabIndex:y,tag:b=`div`,className:w,titleClassName:D,contentClassName:O,items:A,children:R,onChange:z})=>{let H=A?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],U=H.length>0,W=d??U,G=k(e,t,n),ne=r===!1?!1:!!G,K=c(`rue-collapse-${x++}`),q=c(P(H,l,u)),J=()=>s===void 0?q.value:j(s,u),Y=J();if(U){let e=K.value,t=(t,n)=>{C(e,n).forEach(e=>{let n=H[Number(e.dataset.rueCollapseIndex)];n&&te(e,t.some(e=>e===n.key))})},n=(e,n,r)=>{let i=F(J(),e.key,n,u),a=i.some(t=>t===e.key);s===void 0&&(q.value=i,t(i,r)),z&&z(u?i[0]??null:i,{key:e.key,index:e.index,open:a,item:e})};return v(`div`,{className:I(W,f,w),children:H.map(t=>{let r=t.icon??G,i=t.showArrow??ne,a=p||t.disabled?`disabled`:t.collapsible??m??`header`,o=Y.some(e=>e===t.key),s=t.description!=null||t.extra!=null?`pt-1`:`mt-0.5`,c=L(W,f),l=S(S(S(`collapse`,o?`collapse-open`:`collapse-close`),c),t.className),u=S(S(`collapse-title`,M(h)),S(D,t.titleClassName)),d=S(S(`collapse-content`,N(h)),S(O,t.contentClassName)),y=V(t.label,t.description,t.extra,t.descriptionClassName,t.extraClassName),b=e=>{a!==`disabled`&&n(t,!J().some(e=>e===t.key),e)},x=a===`header`?{role:`button`,tabIndex:0,onClick:e=>b(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),b(e.currentTarget))}}:{};return _(`div`,{className:l,"data-rue-collapse-group":e,"data-rue-collapse-index":String(t.index),children:[v(`div`,{className:S(u,a===`header`?`cursor-pointer select-none`:``),"aria-expanded":o?`true`:`false`,...x,children:_(`div`,{className:`flex w-full items-start gap-3`,children:[i&&r&&g===`start`?a===`icon`?v(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:B(r,o)}):v(`span`,{className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:B(r,o)}):null,v(`div`,{className:`min-w-0 flex-1`,children:y}),i&&r&&g===`end`?a===`icon`?v(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:B(r,o)}):v(`span`,{className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:B(r,o)}):null]})}),v(`div`,{className:d,children:t.content})]},t.key)})})}let X=`collapse`;r!==!1&&(t||G===`arrow`)&&(X+=` collapse-arrow`),r!==!1&&(n||G===`plus`)&&(X+=` collapse-plus`),i&&(X+=` collapse-open`),a&&(X+=` collapse-close`),!i&&!a&&o&&(X+=` collapse-open`),p&&(X+=` opacity-70`);let Z=L(!!W,f);if(Z&&(X+=` ${Z}`),w&&(X+=` ${w}`),b===`details`)return v(`details`,{className:X,open:i||!a&&o?!0:void 0,children:R});let Q=typeof y==`number`?y:void 0,$=!!i||!!a||!!o;return v(`div`,{className:X,tabindex:Q===void 0?void 0:String(Q),onMouseDown:e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`},onClick:e=>{let t=e.currentTarget,n=e.target,r=ee(t),i=T(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}Q!==void 0&&(t.tabIndex=Q,t.setAttribute(`tabindex`,String(Q)),t.focus()),$||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),E(t,r.checked)):E(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown},onFocus:e=>{if(Q===void 0||$)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&E(t,!0)},onBlur:e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(Q===void 0||$)&&E(e.currentTarget,!1)},onKeyDown:e=>{if(Q===void 0||$||e.key!==`Enter`&&e.key!==` `||!T(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;E(t,!t.classList.contains(`collapse-open`))},onChange:e=>{if($)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||E(e.currentTarget,t.checked)},children:R})},{Title:({as:e=`div`,className:t,description:n,extra:r,descriptionClassName:i,extraClassName:a,children:o})=>{let s=S(`collapse-title`,t),c=V(o,n,r,i,a);return v(e===`summary`?`summary`:`div`,{className:s,children:c})},Content:({className:e,children:t})=>v(`div`,{className:S(`collapse-content`,e),children:t})}),U=s=>l(c=>{let f=o(`div`,c);e(f,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=o(`div`,f);t(f,m);let h=o(`h3`,m);t(m,h),e(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(h,r(`# `));let _=i(`rue:slot:anchor`);t(h,_),n(()=>{let e=s.title;p(()=>u(e,h,_))});let v=i(`rue:slot:anchor`);t(m,v),n(()=>{let r=s.summary?l(()=>{let r=a(),c=o(`p`,r);t(r,c),e(c,`m-0 text-sm opacity-70`);let l=i(`rue:slot:anchor`);return t(c,l),n(()=>{let e=s.summary;p(()=>u(e,c,l))}),r}):``;p(()=>u(r,m,v))});let y=i(`rue:component:anchor`);t(f,y),n(()=>{let e=d(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:s.tab.value,onChange:e=>s.tab.value=e,className:`mb-3 mt-4`});p(()=>u(e,f,y))});let x=i(`rue:slot:anchor`);return t(f,x),n(()=>{let e=s.tab.value===`preview`?s.preview():l(()=>{let e=a(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=d(g,{className:`mt-2`,lang:`tsx`,code:s.code});p(()=>u(t,e,r))}),e});p(()=>u(e,f,x))}),f}),W=c=>l(d=>{let f=o(`div`,d);e(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=o(`table`,f);t(f,m),e(m,`table table-zebra`);let g=o(`thead`,m);t(m,g);let _=o(`tr`,g);t(g,_);let v=o(`th`,_);t(_,v),t(v,r(`属性`));let y=o(`th`,_);t(_,y),t(y,r(`说明`));let b=o(`th`,_);t(_,b),t(b,r(`类型`));let x=o(`th`,_);t(_,x),t(x,r(`默认值`));let S=o(`tbody`,m);t(m,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=h({items:c.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,c,d,f)=>{u(l(()=>{let r=a(),c=o(`tr`,r);t(r,c),n(()=>{s(c,`key`,String(e.prop))});let l=o(`td`,c);t(c,l);let d=o(`code`,l);t(l,d);let f=i(`rue:slot:anchor`);t(d,f),n(()=>{let t=e.prop;p(()=>u(t,d,f))});let m=o(`td`,c);t(c,m);let h=i(`rue:slot:anchor`);t(m,h),n(()=>{let t=e.description;p(()=>u(t,m,h))});let g=o(`td`,c);t(c,g);let _=o(`code`,g);t(g,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;p(()=>u(t,_,v))});let y=o(`td`,c);t(c,y);let b=o(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;p(()=>u(t,b,x))}),r}),r,c)}})}),f}),G=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`兼容旧写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],ne=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，兼容 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，兼容 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],K=()=>{let{tabItemsBasic:s,tabAccordion:h,tabMeta:g,tabPlacement:b,tabGhost:x,tabControlled:S,tabFocus:C,tabCheckbox:w,tabDetails:T,tabNoBorder:ee,tabArrow:te,tabPlus:E,tabIconStart:D,tabOpen:O,tabClose:k,tabCustomFocus:A,tabCustomCheckbox:j,controlledKeys:M,accordionKey:N}=m(`useSetup:0:0`,()=>f(()=>({tabItemsBasic:m(`ref:1:0`,()=>c(`preview`)),tabAccordion:m(`ref:1:1`,()=>c(`preview`)),tabMeta:m(`ref:1:2`,()=>c(`preview`)),tabPlacement:m(`ref:1:3`,()=>c(`preview`)),tabGhost:m(`ref:1:4`,()=>c(`preview`)),tabControlled:m(`ref:1:5`,()=>c(`preview`)),tabFocus:m(`ref:1:6`,()=>c(`preview`)),tabCheckbox:m(`ref:1:7`,()=>c(`preview`)),tabDetails:m(`ref:1:8`,()=>c(`preview`)),tabNoBorder:m(`ref:1:9`,()=>c(`preview`)),tabArrow:m(`ref:1:10`,()=>c(`preview`)),tabPlus:m(`ref:1:11`,()=>c(`preview`)),tabIconStart:m(`ref:1:12`,()=>c(`preview`)),tabOpen:m(`ref:1:13`,()=>c(`preview`)),tabClose:m(`ref:1:14`,()=>c(`preview`)),tabCustomFocus:m(`ref:1:15`,()=>c(`preview`)),tabCustomCheckbox:m(`ref:1:16`,()=>c(`preview`)),controlledKeys:m(`ref:1:17`,()=>c([`release`])),accordionKey:m(`ref:1:18`,()=>c(`guide`))})));return l(c=>{let f=a(),m=i(`rue:component:anchor`);return t(f,m),u(d(y,{children:l(()=>{let c=a(),l=o(`div`,c);t(c,l),e(l,`max-w-none prose prose-sm md:prose-base`);let f=o(`h1`,l);t(l,f),t(f,r(`Collapse 折叠面板`));let m=o(`p`,l);t(l,m),e(m,`mt-3 mb-3 text-sm`),t(m,r("保留 Rue 原本基于 daisyUI 的视觉语言，并在此基础上补齐 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let y=o(`h2`,l);t(l,y),t(y,r(`增强 API`));let P=o(`p`,l);t(l,P),e(P,`text-sm opacity-80`),t(P,r("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但保留 Rue 视觉风格。"));let F=i(`rue:component:anchor`);t(l,F),n(()=>{let e=d(U,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:s,preview:()=>v(H,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});p(()=>u(e,l,F))});let I=i(`rue:component:anchor`);t(l,I),n(()=>{let e=d(U,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:h,preview:()=>_(`div`,{className:`space-y-4`,children:[_(`div`,{className:`flex flex-wrap gap-2`,children:[v(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`guide`,children:`打开 Guide`}),v(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`api`,children:`打开 API`}),v(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>N.value=null,children:`全部收起`})]}),v(H,{accordion:!0,plus:!0,activeKey:N.value,onChange:e=>N.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出新增属性、弃用写法与向后兼容策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
/>`});p(()=>u(e,l,I))});let L=i(`rue:component:anchor`);t(l,L),n(()=>{let e=d(U,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:g,preview:()=>v(H,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:v(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在迁移，暂不开放编辑。`,extra:v(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保留信息展示，但不响应交互。`}]}),code:`<Collapse
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
/>`});p(()=>u(e,l,L))});let R=i(`rue:component:anchor`);t(l,R),n(()=>{let e=d(U,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:b,preview:()=>v(H,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});p(()=>u(e,l,R))});let z=i(`rue:component:anchor`);t(l,z),n(()=>{let e=d(U,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:x,preview:()=>v(H,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});p(()=>u(e,l,z))});let B=i(`rue:component:anchor`);t(l,B),n(()=>{let e=d(U,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:S,preview:()=>_(`div`,{className:`space-y-4`,children:[_(`div`,{className:`flex flex-wrap gap-2`,children:[v(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`],children:`仅展开 Release`}),v(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`,`notes`],children:`展开两项`}),v(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>M.value=[],children:`全部收起`})]}),v(H,{plus:!0,size:`lg`,activeKey:M.value,onChange:e=>M.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});p(()=>u(e,l,B))});let V=i(`rue:component:anchor`);t(l,V),n(()=>{let e=d(U,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:C,preview:()=>_(H,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[v(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,V))});let K=i(`rue:component:anchor`);t(l,K),n(()=>{let e=d(U,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>_(H,{className:`bg-base-100 border border-base-300`,children:[v(`input`,{type:`checkbox`}),v(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,K))});let q=i(`rue:component:anchor`);t(l,q),n(()=>{let e=d(U,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>_(H,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[v(H.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,q))});let J=i(`rue:component:anchor`);t(l,J),n(()=>{let e=d(U,{title:`Without border and background color`,tab:ee,preview:()=>_(H,{tabIndex:0,children:[v(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,J))});let Y=i(`rue:component:anchor`);t(l,Y),n(()=>{let e=d(U,{title:`With arrow icon`,tab:te,preview:()=>_(H,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[v(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,Y))});let X=i(`rue:component:anchor`);t(l,X),n(()=>{let e=d(U,{title:`With plus/minus icon`,tab:E,preview:()=>_(H,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[v(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,X))});let Z=i(`rue:component:anchor`);t(l,Z),n(()=>{let e=d(U,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保留标题区重复点击切换能力。`,tab:D,preview:()=>_(H,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[v(H.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,Z))});let Q=i(`rue:component:anchor`);t(l,Q),n(()=>{let e=d(U,{title:`Force open`,tab:O,preview:()=>_(H,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[v(H.Title,{className:`font-semibold`,children:`I have collapse-open class`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,Q))});let $=i(`rue:component:anchor`);t(l,$),n(()=>{let e=d(U,{title:`Force close`,tab:k,preview:()=>_(H,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[v(H.Title,{className:`font-semibold`,children:`I have collapse-close class`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,$))});let re=i(`rue:component:anchor`);t(l,re),n(()=>{let e=d(U,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:A,preview:()=>_(H,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[v(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),v(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,re))});let ie=i(`rue:component:anchor`);t(l,ie),n(()=>{let e=d(U,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:j,preview:()=>_(H,{className:`bg-base-100 border border-base-300`,children:[v(`input`,{type:`checkbox`,className:`peer`}),v(H.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),v(H.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});p(()=>u(e,l,ie))});let ae=o(`h2`,l);t(l,ae),t(ae,r(`API`));let oe=o(`h3`,l);t(l,oe),t(oe,r(`Collapse`));let se=i(`rue:component:anchor`);t(l,se),n(()=>{let e=d(W,{rows:G});p(()=>u(e,l,se))});let ce=o(`h3`,l);t(l,ce),t(ce,r(`CollapseItem`));let le=i(`rue:component:anchor`);return t(l,le),n(()=>{let e=d(W,{rows:ne});p(()=>u(e,l,le))}),c})}),f,m),f})};export{K as default};
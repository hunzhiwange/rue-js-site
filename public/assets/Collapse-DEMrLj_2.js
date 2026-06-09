import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,ct as s,et as c,l,ot as u,qt as d,s as f,t as p}from"./vapor-runtime-aZAg0Qkw.js";import{a as m,n as h}from"./vapor-helpers-vapor-gtGwiIv0.js";import{a as g,i as _}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as v}from"./Code-5DOEyGxf.js";import{t as y}from"./tabs-CWmjyn0I.js";import{r as b}from"./SidebarPlaygroundDesign-CS11MI8e.js";var x=0,S=(e,t)=>e?t?`${e} ${t}`:e:t??``,C=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},w=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),T=(e,t)=>t instanceof Node?!!w(e)?.contains(t):!1,ee=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),te=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=w(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},E=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=w(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},D=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},k=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},A=e=>Array.isArray(e)?e:e==null?[]:[e],j=(e,t)=>{let n=D(A(e));return t?n.slice(0,1):n},M=e=>{switch(O(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},N=e=>{switch(O(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},P=(e,t,n)=>j(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),F=(e,t,n,r)=>r?n?[t]:[]:n?D([...e,t]):e.filter(e=>e!==t),I=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),S(r,n)},L=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,R=({open:e})=>_(`span`,{"data-rue-collapse-arrow-icon":`true`,"aria-hidden":`true`,className:`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e?`rotate-90`:``}`.trim(),children:_(`svg`,{viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:`size-4`,children:_(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 4 6 6-6 6`})})}),z=({open:e})=>g(`span`,{"aria-hidden":`true`,className:`relative inline-flex size-5 items-center justify-center`,children:[_(`span`,{className:`absolute h-0.5 w-3 rounded-full bg-current`}),_(`span`,{"data-rue-collapse-plus-vertical":`true`,className:`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e?`opacity-0`:`opacity-100`}`.trim()})]}),B=(e,t)=>_(e===`plus`?z:R,{open:t}),V=(e,t,n,r,i)=>t==null&&n==null?e:g(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[g(`div`,{className:`min-w-0 flex-1`,children:[_(`div`,{children:e}),t==null?null:_(`div`,{className:S(`mt-1 text-xs opacity-70`,r),children:t})]}),n==null?null:_(`div`,{className:S(`shrink-0 text-xs opacity-70`,i),onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),children:n})]}),H=Object.assign(({icon:e,arrow:t,plus:n,showArrow:i,open:a,close:o,defaultOpen:s,activeKey:c,defaultActiveKey:l,accordion:u,bordered:d,ghost:f,disabled:p,collapsible:m,size:h,expandIconPlacement:v=`end`,tabIndex:y,tag:b=`div`,className:w,titleClassName:D,contentClassName:O,items:A,children:R,onChange:z})=>{let H=A?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],U=H.length>0,W=d??U,G=k(e,t,n),ne=i===!1?!1:!!G,K=r(`rue-collapse-${x++}`),q=r(P(H,l,u)),J=()=>c===void 0?q.value:j(c,u),Y=J();if(U){let e=K.value,t=(t,n)=>{C(e,n).forEach(e=>{let n=H[Number(e.dataset.rueCollapseIndex)];n&&te(e,t.some(e=>e===n.key))})},n=(e,n,r)=>{let i=F(J(),e.key,n,u),a=i.some(t=>t===e.key);c===void 0&&(q.value=i,t(i,r)),z&&z(u?i[0]??null:i,{key:e.key,index:e.index,open:a,item:e})};return _(`div`,{className:I(W,f,w),children:H.map(t=>{let r=t.icon??G,i=t.showArrow??ne,a=p||t.disabled?`disabled`:t.collapsible??m??`header`,o=Y.some(e=>e===t.key),s=t.description!=null||t.extra!=null?`pt-1`:`mt-0.5`,c=L(W,f),l=S(S(S(`collapse`,o?`collapse-open`:`collapse-close`),c),t.className),u=S(S(`collapse-title`,M(h)),S(D,t.titleClassName)),d=S(S(`collapse-content`,N(h)),S(O,t.contentClassName)),y=V(t.label,t.description,t.extra,t.descriptionClassName,t.extraClassName),b=e=>{a!==`disabled`&&n(t,!J().some(e=>e===t.key),e)},x=a===`header`?{role:`button`,tabIndex:0,onClick:e=>b(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),b(e.currentTarget))}}:{};return g(`div`,{className:l,"data-rue-collapse-group":e,"data-rue-collapse-index":String(t.index),children:[_(`div`,{className:S(u,a===`header`?`cursor-pointer select-none`:``),"aria-expanded":o?`true`:`false`,...x,children:g(`div`,{className:`flex w-full items-start gap-3`,children:[i&&r&&v===`start`?a===`icon`?_(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:B(r,o)}):_(`span`,{className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:B(r,o)}):null,_(`div`,{className:`min-w-0 flex-1`,children:y}),i&&r&&v===`end`?a===`icon`?_(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:B(r,o)}):_(`span`,{className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:B(r,o)}):null]})}),_(`div`,{className:d,children:t.content})]},t.key)})})}let X=`collapse`;i!==!1&&(t||G===`arrow`)&&(X+=` collapse-arrow`),i!==!1&&(n||G===`plus`)&&(X+=` collapse-plus`),a&&(X+=` collapse-open`),o&&(X+=` collapse-close`),!a&&!o&&s&&(X+=` collapse-open`),p&&(X+=` opacity-70`);let Z=L(!!W,f);if(Z&&(X+=` ${Z}`),w&&(X+=` ${w}`),b===`details`)return _(`details`,{className:X,open:a||!o&&s?!0:void 0,children:R});let Q=typeof y==`number`?y:void 0,$=!!a||!!o||!!s;return _(`div`,{className:X,tabindex:Q===void 0?void 0:String(Q),onMouseDown:e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`},onClick:e=>{let t=e.currentTarget,n=e.target,r=ee(t),i=T(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}Q!==void 0&&(t.tabIndex=Q,t.setAttribute(`tabindex`,String(Q)),t.focus()),$||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),E(t,r.checked)):E(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown},onFocus:e=>{if(Q===void 0||$)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&E(t,!0)},onBlur:e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(Q===void 0||$)&&E(e.currentTarget,!1)},onKeyDown:e=>{if(Q===void 0||$||e.key!==`Enter`&&e.key!==` `||!T(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;E(t,!t.classList.contains(`collapse-open`))},onChange:e=>{if($)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||E(e.currentTarget,t.checked)},children:R})},{Title:({as:e=`div`,className:t,description:n,extra:r,descriptionClassName:i,extraClassName:a,children:o})=>{let s=S(`collapse-title`,t),c=V(o,n,r,i,a);return _(e===`summary`?`summary`:`div`,{className:s,children:c})},Content:({className:e,children:t})=>_(`div`,{className:S(`collapse-content`,e),children:t})}),U=r=>l(u=>{let d=e(`div`,u);s(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=e(`div`,d);a(d,m);let h=e(`h3`,m);a(m,h),s(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(h,c(`# `));let g=o(`rue:slot:anchor`);a(h,g),i(()=>{let e=r.title;t(()=>f(e,h,g))});let _=o(`rue:slot:anchor`);a(m,_),i(()=>{let c=r.summary?l(()=>{let c=n(),l=e(`p`,c);a(c,l),s(l,`m-0 text-sm opacity-70`);let u=o(`rue:slot:anchor`);return a(l,u),i(()=>{let e=r.summary;t(()=>f(e,l,u))}),c}):``;t(()=>f(c,m,_))});let b=o(`rue:component:anchor`);a(d,b),i(()=>{let e=p(y,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:r.tab.value,onChange:e=>r.tab.value=e,className:`mb-3 mt-4`});t(()=>f(e,d,b))});let x=o(`rue:slot:anchor`);return a(d,x),i(()=>{let e=r.tab.value===`preview`?r.preview():l(()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=p(v,{className:`mt-2`,lang:`tsx`,code:r.code});t(()=>f(n,e,s))}),e});t(()=>f(e,d,x))}),d}),W=r=>l(d=>{let p=e(`div`,d);s(p,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,p);a(p,m),s(m,`table table-zebra`);let g=e(`thead`,m);a(m,g);let _=e(`tr`,g);a(g,_);let v=e(`th`,_);a(_,v),a(v,c(`属性`));let y=e(`th`,_);a(_,y),a(y,c(`说明`));let b=e(`th`,_);a(_,b),a(b,c(`类型`));let x=e(`th`,_);a(_,x),a(x,c(`默认值`));let S=e(`tbody`,m);a(m,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=h({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,d,p)=>{f(l(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{u(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let d=e(`code`,l);a(l,d);let p=o(`rue:slot:anchor`);a(d,p),i(()=>{let e=r.prop;t(()=>f(e,d,p))});let m=e(`td`,c);a(c,m);let h=o(`rue:slot:anchor`);a(m,h),i(()=>{let e=r.description;t(()=>f(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>f(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>f(e,b,x))}),s}),s,c)}})}),p}),G=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`兼容旧写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],ne=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，兼容 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，兼容 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],K=()=>{let{tabItemsBasic:u,tabAccordion:h,tabMeta:v,tabPlacement:y,tabGhost:x,tabControlled:S,tabFocus:C,tabCheckbox:w,tabDetails:T,tabNoBorder:ee,tabArrow:te,tabPlus:E,tabIconStart:D,tabOpen:O,tabClose:k,tabCustomFocus:A,tabCustomCheckbox:j,controlledKeys:M,accordionKey:N}=m(`useSetup:0:0`,()=>d(()=>({tabItemsBasic:m(`ref:1:0`,()=>r(`preview`)),tabAccordion:m(`ref:1:1`,()=>r(`preview`)),tabMeta:m(`ref:1:2`,()=>r(`preview`)),tabPlacement:m(`ref:1:3`,()=>r(`preview`)),tabGhost:m(`ref:1:4`,()=>r(`preview`)),tabControlled:m(`ref:1:5`,()=>r(`preview`)),tabFocus:m(`ref:1:6`,()=>r(`preview`)),tabCheckbox:m(`ref:1:7`,()=>r(`preview`)),tabDetails:m(`ref:1:8`,()=>r(`preview`)),tabNoBorder:m(`ref:1:9`,()=>r(`preview`)),tabArrow:m(`ref:1:10`,()=>r(`preview`)),tabPlus:m(`ref:1:11`,()=>r(`preview`)),tabIconStart:m(`ref:1:12`,()=>r(`preview`)),tabOpen:m(`ref:1:13`,()=>r(`preview`)),tabClose:m(`ref:1:14`,()=>r(`preview`)),tabCustomFocus:m(`ref:1:15`,()=>r(`preview`)),tabCustomCheckbox:m(`ref:1:16`,()=>r(`preview`)),controlledKeys:m(`ref:1:17`,()=>r([`release`])),accordionKey:m(`ref:1:18`,()=>r(`guide`))})));return l(r=>{let d=n(),m=o(`rue:component:anchor`);return a(d,m),f(p(b,{children:l(()=>{let r=n(),l=e(`div`,r);a(r,l),s(l,`max-w-none prose prose-sm md:prose-base`);let d=e(`h1`,l);a(l,d),a(d,c(`Collapse 折叠面板`));let m=e(`p`,l);a(l,m),s(m,`mt-3 mb-3 text-sm`),a(m,c("保留 Rue 原本基于 daisyUI 的视觉语言，并在此基础上补齐 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let b=e(`h2`,l);a(l,b),a(b,c(`增强 API`));let P=e(`p`,l);a(l,P),s(P,`text-sm opacity-80`),a(P,c("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但保留 Rue 视觉风格。"));let F=o(`rue:component:anchor`);a(l,F),i(()=>{let e=p(U,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:u,preview:()=>_(H,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});t(()=>f(e,l,F))});let I=o(`rue:component:anchor`);a(l,I),i(()=>{let e=p(U,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:h,preview:()=>g(`div`,{className:`space-y-4`,children:[g(`div`,{className:`flex flex-wrap gap-2`,children:[_(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`guide`,children:`打开 Guide`}),_(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`api`,children:`打开 API`}),_(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>N.value=null,children:`全部收起`})]}),_(H,{accordion:!0,plus:!0,activeKey:N.value,onChange:e=>N.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出新增属性、弃用写法与向后兼容策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
/>`});t(()=>f(e,l,I))});let L=o(`rue:component:anchor`);a(l,L),i(()=>{let e=p(U,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:v,preview:()=>_(H,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:_(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在迁移，暂不开放编辑。`,extra:_(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保留信息展示，但不响应交互。`}]}),code:`<Collapse
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
/>`});t(()=>f(e,l,L))});let R=o(`rue:component:anchor`);a(l,R),i(()=>{let e=p(U,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:y,preview:()=>_(H,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});t(()=>f(e,l,R))});let z=o(`rue:component:anchor`);a(l,z),i(()=>{let e=p(U,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:x,preview:()=>_(H,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});t(()=>f(e,l,z))});let B=o(`rue:component:anchor`);a(l,B),i(()=>{let e=p(U,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:S,preview:()=>g(`div`,{className:`space-y-4`,children:[g(`div`,{className:`flex flex-wrap gap-2`,children:[_(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`],children:`仅展开 Release`}),_(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`,`notes`],children:`展开两项`}),_(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>M.value=[],children:`全部收起`})]}),_(H,{plus:!0,size:`lg`,activeKey:M.value,onChange:e=>M.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});t(()=>f(e,l,B))});let V=o(`rue:component:anchor`);a(l,V),i(()=>{let e=p(U,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:C,preview:()=>g(H,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,V))});let K=o(`rue:component:anchor`);a(l,K),i(()=>{let e=p(U,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:w,preview:()=>g(H,{className:`bg-base-100 border border-base-300`,children:[_(`input`,{type:`checkbox`}),_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,K))});let q=o(`rue:component:anchor`);a(l,q),i(()=>{let e=p(U,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:T,preview:()=>g(H,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,q))});let J=o(`rue:component:anchor`);a(l,J),i(()=>{let e=p(U,{title:`Without border and background color`,tab:ee,preview:()=>g(H,{tabIndex:0,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,J))});let Y=o(`rue:component:anchor`);a(l,Y),i(()=>{let e=p(U,{title:`With arrow icon`,tab:te,preview:()=>g(H,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,Y))});let X=o(`rue:component:anchor`);a(l,X),i(()=>{let e=p(U,{title:`With plus/minus icon`,tab:E,preview:()=>g(H,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,X))});let Z=o(`rue:component:anchor`);a(l,Z),i(()=>{let e=p(U,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保留标题区重复点击切换能力。`,tab:D,preview:()=>g(H,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,Z))});let Q=o(`rue:component:anchor`);a(l,Q),i(()=>{let e=p(U,{title:`Force open`,tab:O,preview:()=>g(H,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`I have collapse-open class`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,Q))});let $=o(`rue:component:anchor`);a(l,$),i(()=>{let e=p(U,{title:`Force close`,tab:k,preview:()=>g(H,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[_(H.Title,{className:`font-semibold`,children:`I have collapse-close class`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,$))});let re=o(`rue:component:anchor`);a(l,re),i(()=>{let e=p(U,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:A,preview:()=>g(H,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[_(H.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,re))});let ie=o(`rue:component:anchor`);a(l,ie),i(()=>{let e=p(U,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:j,preview:()=>g(H,{className:`bg-base-100 border border-base-300`,children:[_(`input`,{type:`checkbox`,className:`peer`}),_(H.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),_(H.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});t(()=>f(e,l,ie))});let ae=e(`h2`,l);a(l,ae),a(ae,c(`API`));let oe=e(`h3`,l);a(l,oe),a(oe,c(`Collapse`));let se=o(`rue:component:anchor`);a(l,se),i(()=>{let e=p(W,{rows:G});t(()=>f(e,l,se))});let ce=e(`h3`,l);a(l,ce),a(ce,c(`CollapseItem`));let le=o(`rue:component:anchor`);return a(l,le),i(()=>{let e=p(W,{rows:ne});t(()=>f(e,l,le))}),r})}),d,m),d})};export{K as default};
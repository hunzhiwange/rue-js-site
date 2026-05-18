import{F as e,I as t,K as n,L as r,N as i,R as a,W as o,d as s,dt as c,ht as l,l as u,st as d,t as f,vt as p}from"./vapor-runtime-BuwLbCGk.js";import{a as m,n as h}from"./vapor-helpers-vapor-Bly5xJie.js";import{n as g,t as _}from"./src-BQwLQD8R.js";import{n as v}from"./SidebarPlaygroundDesign-SQXYHI-q.js";import{t as y}from"./Code-DQxnq0in.js";import{t as b}from"./tabs-DqfJzZfa.js";var x=0,S=(e,t)=>e?t?`${e} ${t}`:e:t??``,C=(e,t)=>{let n=t?.getRootNode?.(),r=n&&typeof n.querySelectorAll==`function`?n:typeof document<`u`?document:null;return r?Array.from(r.querySelectorAll(`[data-rue-collapse-group]`)).filter(t=>t.dataset.rueCollapseGroup===e):[]},w=e=>Array.from(e.children).find(e=>e instanceof HTMLElement&&e.classList.contains(`collapse-title`)),T=(e,t)=>t instanceof Node?!!w(e)?.contains(t):!1,ee=e=>Array.from(e.children).find(e=>e instanceof HTMLInputElement&&(e.type===`checkbox`||e.type===`radio`)),te=(e,t)=>{if(!(e instanceof HTMLElement))return;e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=w(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`);let r=e.querySelector(`[data-rue-collapse-arrow-icon]`);r&&r.classList.toggle(`rotate-90`,t);let i=e.querySelector(`[data-rue-collapse-plus-vertical]`);i&&(i.classList.remove(`opacity-0`,`opacity-100`),i.classList.add(t?`opacity-0`:`opacity-100`));let a=e.querySelector(`[data-rue-collapse-icon-trigger]`);a&&a.setAttribute(`aria-label`,t?`收起`:`展开`)},E=(e,t)=>{e.classList.remove(`collapse-open`,`collapse-close`),e.classList.add(t?`collapse-open`:`collapse-close`);let n=w(e);n&&n.setAttribute(`aria-expanded`,t?`true`:`false`)},D=e=>{let t=[];return e.forEach(e=>{t.some(t=>t===e)||t.push(e)}),t},O=e=>{switch(e){case`small`:return`sm`;case`middle`:return`md`;case`large`:return`lg`;default:return e}},k=(e,t,n)=>{if(e)return e;if(n)return`plus`;if(t)return`arrow`},A=e=>Array.isArray(e)?e:e==null?[]:[e],j=(e,t)=>{let n=D(A(e));return t?n.slice(0,1):n},ne=e=>{switch(O(e)){case`sm`:return`min-h-0 py-3 text-sm`;case`lg`:return`min-h-0 py-5 text-lg`;default:return``}},M=e=>{switch(O(e)){case`sm`:return`pt-0 pb-3 text-sm`;case`lg`:return`pt-0 pb-5 text-base`;default:return``}},N=(e,t,n)=>j(t===void 0?e.filter(e=>e.open).map(e=>e.key):t,n),P=(e,t,n,r)=>r?n?[t]:[]:n?D([...e,t]):e.filter(e=>e!==t),F=(e,t,n)=>{let r=e?`overflow-hidden rounded-box border border-base-300 bg-base-100 divide-y divide-base-300`:`space-y-3`;return t&&(r+=` bg-transparent`),S(r,n)},I=(e,t)=>e?``:t?`bg-transparent`:`rounded-box border border-base-300 bg-base-100`,L=({open:e})=>_(`span`,{"data-rue-collapse-arrow-icon":`true`,"aria-hidden":`true`,className:`inline-flex size-5 items-center justify-center transition-transform duration-200 ${e?`rotate-90`:``}`.trim(),children:_(`svg`,{viewBox:`0 0 20 20`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,className:`size-4`,children:_(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`m7 4 6 6-6 6`})})}),R=({open:e})=>g(`span`,{"aria-hidden":`true`,className:`relative inline-flex size-5 items-center justify-center`,children:[_(`span`,{className:`absolute h-0.5 w-3 rounded-full bg-current`}),_(`span`,{"data-rue-collapse-plus-vertical":`true`,className:`absolute h-3 w-0.5 rounded-full bg-current transition-opacity duration-200 ${e?`opacity-0`:`opacity-100`}`.trim()})]}),z=(e,t)=>_(e===`plus`?R:L,{open:t}),B=(e,t,n,r,i)=>t==null&&n==null?e:g(`div`,{className:`flex w-full items-start justify-between gap-3`,children:[g(`div`,{className:`min-w-0 flex-1`,children:[_(`div`,{children:e}),t==null?null:_(`div`,{className:S(`mt-1 text-xs opacity-70`,r),children:t})]}),n==null?null:_(`div`,{className:S(`shrink-0 text-xs opacity-70`,i),onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),children:n})]}),V=Object.assign(({icon:e,arrow:t,plus:n,showArrow:r,open:i,close:a,defaultOpen:o,activeKey:s,defaultActiveKey:c,accordion:l,bordered:u,ghost:f,disabled:p,collapsible:m,size:h,expandIconPlacement:v=`end`,tabIndex:y,tag:b=`div`,className:w,titleClassName:D,contentClassName:O,items:A,children:L,onChange:R})=>{let V=A?.map((e,t)=>({...e,key:e.key??t,index:t,label:e.label??e.title,content:e.children??e.content}))??[],H=V.length>0,U=u??H,W=k(e,t,n),re=r===!1?!1:!!W,G=d(`rue-collapse-${x++}`),K=d(N(V,c,l)),q=()=>s===void 0?K.value:j(s,l),J=q();if(H){let e=G.value,t=(t,n)=>{C(e,n).forEach(e=>{let n=V[Number(e.dataset.rueCollapseIndex)];n&&te(e,t.some(e=>e===n.key))})},n=(e,n,r)=>{let i=P(q(),e.key,n,l),a=i.some(t=>t===e.key);s===void 0&&(K.value=i,t(i,r)),R&&R(l?i[0]??null:i,{key:e.key,index:e.index,open:a,item:e})};return _(`div`,{className:F(U,f,w),children:V.map(t=>{let r=t.icon??W,i=t.showArrow??re,a=p||t.disabled?`disabled`:t.collapsible??m??`header`,o=J.some(e=>e===t.key),s=t.description!=null||t.extra!=null?`pt-1`:`mt-0.5`,c=I(U,f),l=S(S(S(`collapse`,o?`collapse-open`:`collapse-close`),c),t.className),u=S(S(`collapse-title`,ne(h)),S(D,t.titleClassName)),d=S(S(`collapse-content`,M(h)),S(O,t.contentClassName)),y=B(t.label,t.description,t.extra,t.descriptionClassName,t.extraClassName),b=e=>{a!==`disabled`&&n(t,!q().some(e=>e===t.key),e)},x=a===`header`?{role:`button`,tabIndex:0,onClick:e=>b(e.currentTarget),onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),b(e.currentTarget))}}:{};return g(`div`,{className:l,"data-rue-collapse-group":e,"data-rue-collapse-index":String(t.index),children:[_(`div`,{className:S(u,a===`header`?`cursor-pointer select-none`:``),"aria-expanded":o?`true`:`false`,...x,children:g(`div`,{className:`flex w-full items-start gap-3`,children:[i&&r&&v===`start`?a===`icon`?_(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:z(r,o)}):_(`span`,{className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:z(r,o)}):null,_(`div`,{className:`min-w-0 flex-1`,children:y}),i&&r&&v===`end`?a===`icon`?_(`button`,{"data-rue-collapse-icon-trigger":`true`,type:`button`,className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center rounded-full border border-transparent transition-colors hover:bg-base-200/70`,s),"aria-label":o?`收起`:`展开`,onClick:e=>{e.stopPropagation(),b(e.currentTarget)},children:z(r,o)}):_(`span`,{className:S(`inline-flex size-7 shrink-0 self-start items-center justify-center`,s),children:z(r,o)}):null]})}),_(`div`,{className:d,children:t.content})]},t.key)})})}let Y=`collapse`;r!==!1&&(t||W===`arrow`)&&(Y+=` collapse-arrow`),r!==!1&&(n||W===`plus`)&&(Y+=` collapse-plus`),i&&(Y+=` collapse-open`),a&&(Y+=` collapse-close`),!i&&!a&&o&&(Y+=` collapse-open`),p&&(Y+=` opacity-70`);let X=I(!!U,f);if(X&&(Y+=` ${X}`),w&&(Y+=` ${w}`),b===`details`)return _(`details`,{className:Y,open:i||!a&&o?!0:void 0,children:L});let Z=typeof y==`number`?y:void 0,Q=!!i||!!a||!!o;return _(`div`,{className:Y,tabindex:Z===void 0?void 0:String(Z),onMouseDown:e=>{let t=e.currentTarget;t.dataset.rueCollapsePointerDown=`true`},onClick:e=>{let t=e.currentTarget,n=e.target,r=ee(t),i=T(t,n),a=n instanceof HTMLInputElement&&n===r;if(!i&&!a){delete t.dataset.rueCollapsePointerDown;return}Z!==void 0&&(t.tabIndex=Z,t.setAttribute(`tabindex`,String(Z)),t.focus()),Q||(r?(a||(r.type===`checkbox`?r.checked=!r.checked:r.type===`radio`&&(r.checked=!0)),E(t,r.checked)):E(t,!t.classList.contains(`collapse-open`))),delete t.dataset.rueCollapsePointerDown},onFocus:e=>{if(Z===void 0||Q)return;let t=e.currentTarget;t.dataset.rueCollapsePointerDown!==`true`&&E(t,!0)},onBlur:e=>{delete e.currentTarget.dataset.rueCollapsePointerDown,!(Z===void 0||Q)&&E(e.currentTarget,!1)},onKeyDown:e=>{if(Z===void 0||Q||e.key!==`Enter`&&e.key!==` `||!T(e.currentTarget,e.target))return;e.preventDefault();let t=e.currentTarget;E(t,!t.classList.contains(`collapse-open`))},onChange:e=>{if(Q)return;let t=e.target;!t||t.type!==`checkbox`&&t.type!==`radio`||E(e.currentTarget,t.checked)},children:L})},{Title:({as:e=`div`,className:t,description:n,extra:r,descriptionClassName:i,extraClassName:a,children:o})=>{let s=S(`collapse-title`,t),c=B(o,n,r,i,a);return _(e===`summary`?`summary`:`div`,{className:s,children:c})},Content:({className:e,children:t})=>_(`div`,{className:S(`collapse-content`,e),children:t})}),H=o=>s(l=>{let d=r(`div`,l);n(d,`component-preview not-prose text-base-content my-6 lg:my-12`);let m=r(`div`,d);i(d,m);let h=r(`h3`,m);i(m,h),n(h,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(h,a(`# `));let g=e(`rue:slot:anchor`);i(h,g),p(()=>{let e=o.title;c(()=>u(e,h,g))});let _=e(`rue:slot:anchor`);i(m,_),p(()=>{let a=o.summary?s(()=>{let a=t(),s=r(`p`,a);i(a,s),n(s,`m-0 text-sm opacity-70`);let l=e(`rue:slot:anchor`);return i(s,l),p(()=>{let e=o.summary;c(()=>u(e,s,l))}),a}):``;c(()=>u(a,m,_))});let v=e(`rue:component:anchor`);i(d,v),p(()=>{let e=f(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:o.tab.value,onChange:e=>o.tab.value=e,className:`mb-3 mt-4`});c(()=>u(e,d,v))});let x=e(`rue:slot:anchor`);return i(d,x),p(()=>{let n=o.tab.value===`preview`?o.preview():s(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),p(()=>{let e=f(y,{className:`mt-2`,lang:`tsx`,code:o.code});c(()=>u(e,n,r))}),n});c(()=>u(n,d,x))}),d}),U=l=>s(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=r(`table`,f);i(f,m),n(m,`table table-zebra`);let g=r(`thead`,m);i(m,g);let _=r(`tr`,g);i(g,_);let v=r(`th`,_);i(_,v),i(v,a(`属性`));let y=r(`th`,_);i(_,y),i(y,a(`说明`));let b=r(`th`,_);i(_,b),i(b,a(`类型`));let x=r(`th`,_);i(_,x),i(x,a(`默认值`));let S=r(`tbody`,m);i(m,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return p(()=>{T=h({items:l.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,l,d,f)=>{u(s(()=>{let a=t(),s=r(`tr`,a);i(a,s),p(()=>{o(s,`key`,String(n.prop))});let l=r(`td`,s);i(s,l);let d=r(`code`,l);i(l,d);let f=e(`rue:slot:anchor`);i(d,f),p(()=>{let e=n.prop;c(()=>u(e,d,f))});let m=r(`td`,s);i(s,m);let h=e(`rue:slot:anchor`);i(m,h),p(()=>{let e=n.description;c(()=>u(e,m,h))});let g=r(`td`,s);i(s,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),p(()=>{let e=n.type;c(()=>u(e,_,v))});let y=r(`td`,s);i(s,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),p(()=>{let e=n.defaultValue;c(()=>u(e,b,x))}),a}),a,l)}})}),f}),W=[{prop:`items`,description:`数据驱动的折叠面板列表`,type:`CollapseItem[]`,defaultValue:`-`},{prop:`activeKey`,description:`受控展开项；accordion 模式下可传单值`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`defaultActiveKey`,description:`非受控默认展开项`,type:`string | number | Array<string | number>`,defaultValue:`-`},{prop:`accordion`,description:`是否只允许同时展开一项`,type:`boolean`,defaultValue:`false`},{prop:`bordered`,description:`是否使用分组边框容器`,type:`boolean`,defaultValue:`items 模式默认 true`},{prop:`ghost`,description:`是否使用透明背景`,type:`boolean`,defaultValue:`false`},{prop:`size`,description:`标题与内容尺寸`,type:`'sm' | 'md' | 'lg'`,defaultValue:`'md'`},{prop:`expandIconPlacement`,description:`展开图标位置`,type:`'start' | 'end'`,defaultValue:`'end'`},{prop:`onChange`,description:`items 模式切换时触发，返回下一个展开 key`,type:`(nextValue, context) => void`,defaultValue:`-`},{prop:`tag`,description:`兼容旧写法的根标签切换`,type:`'div' | 'details'`,defaultValue:`'div'`}],re=[{prop:`key`,description:`面板唯一标识`,type:`string | number`,defaultValue:`索引值`},{prop:`label`,description:`标题内容，兼容 title 别名`,type:`any`,defaultValue:`-`},{prop:`children`,description:`面板内容，兼容 content 别名`,type:`any`,defaultValue:`-`},{prop:`description`,description:`标题下方的说明文案`,type:`any`,defaultValue:`-`},{prop:`extra`,description:`标题右侧附加区域，不触发展开`,type:`any`,defaultValue:`-`},{prop:`showArrow`,description:`是否显示展开图标`,type:`boolean`,defaultValue:`继承父级`},{prop:`collapsible`,description:`触发区域控制`,type:`'header' | 'icon' | 'disabled'`,defaultValue:`'header'`},{prop:`disabled`,description:`禁用当前项交互`,type:`boolean`,defaultValue:`false`},{prop:`open`,description:`非受控初始展开`,type:`boolean`,defaultValue:`false`}],G=()=>{let{tabItemsBasic:h,tabAccordion:y,tabMeta:b,tabPlacement:x,tabGhost:S,tabControlled:C,tabFocus:w,tabCheckbox:T,tabDetails:ee,tabNoBorder:te,tabArrow:E,tabPlus:D,tabIconStart:O,tabOpen:k,tabClose:A,tabCustomFocus:j,tabCustomCheckbox:ne,controlledKeys:M,accordionKey:N}=m(`useSetup:0:0`,()=>l(()=>({tabItemsBasic:m(`ref:1:0`,()=>d(`preview`)),tabAccordion:m(`ref:1:1`,()=>d(`preview`)),tabMeta:m(`ref:1:2`,()=>d(`preview`)),tabPlacement:m(`ref:1:3`,()=>d(`preview`)),tabGhost:m(`ref:1:4`,()=>d(`preview`)),tabControlled:m(`ref:1:5`,()=>d(`preview`)),tabFocus:m(`ref:1:6`,()=>d(`preview`)),tabCheckbox:m(`ref:1:7`,()=>d(`preview`)),tabDetails:m(`ref:1:8`,()=>d(`preview`)),tabNoBorder:m(`ref:1:9`,()=>d(`preview`)),tabArrow:m(`ref:1:10`,()=>d(`preview`)),tabPlus:m(`ref:1:11`,()=>d(`preview`)),tabIconStart:m(`ref:1:12`,()=>d(`preview`)),tabOpen:m(`ref:1:13`,()=>d(`preview`)),tabClose:m(`ref:1:14`,()=>d(`preview`)),tabCustomFocus:m(`ref:1:15`,()=>d(`preview`)),tabCustomCheckbox:m(`ref:1:16`,()=>d(`preview`)),controlledKeys:m(`ref:1:17`,()=>d([`release`])),accordionKey:m(`ref:1:18`,()=>d(`guide`))})));return s(l=>{let d=t(),m=e(`rue:component:anchor`);return i(d,m),u(f(v,{children:s(()=>{let s=t(),l=r(`div`,s);i(s,l),n(l,`max-w-none prose prose-sm md:prose-base`);let d=r(`h1`,l);i(l,d),i(d,a(`Collapse 折叠面板`));let m=r(`p`,l);i(l,m),n(m,`mt-3 mb-3 text-sm`),i(m,a("保留 Rue 原本基于 daisyUI 的视觉语言，并在此基础上补齐 `items`、accordion、 `activeKey`、`extra`、`description`、尺寸与图标位置等增强能力。"));let v=r(`div`,l);i(l,v),n(v,`text-sm`);let P=r(`a`,v);i(v,P),o(P,`href`,`https://daisyui.com/components/collapse/`),o(P,`target`,`_blank`),i(P,a(`查看 Collapse 静态样式`));let F=r(`h2`,l);i(l,F),i(F,a(`增强 API`));let I=r(`p`,l);i(l,I),n(I,`text-sm opacity-80`),i(I,a("优先面向 `items` 数据驱动用法，组织方式贴近常见业务组件，但保留 Rue 视觉风格。"));let L=e(`rue:component:anchor`);i(l,L),p(()=>{let e=f(H,{title:`Items 基础用法`,summary:`直接通过 items 渲染多项折叠面板，并默认使用带边框的分组容器。`,tab:h,preview:()=>_(V,{arrow:!0,defaultActiveKey:[`overview`],items:[{key:`overview`,label:`Overview`,children:`汇总版本亮点、上线范围与回滚策略，适合用作页面最上方的信息概览。`},{key:`release`,label:`Release Checklist`,children:`确认灰度开关、日志埋点、告警阈值与发布窗口已经准备完毕。`},{key:`faq`,label:`FAQ`,children:`常见问题、风险提示和升级说明也可以继续放进同一个折叠组。`}]}),code:`<Collapse
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
/>`});c(()=>u(e,l,L))});let R=e(`rue:component:anchor`);i(l,R),p(()=>{let e=f(H,{title:`Accordion`,summary:`使用 accordion 改成一次只展开一项，并结合受控 key 管理当前面板。`,tab:y,preview:()=>g(`div`,{className:`space-y-4`,children:[g(`div`,{className:`flex flex-wrap gap-2`,children:[_(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`guide`,children:`打开 Guide`}),_(`button`,{className:`btn btn-sm`,onClick:()=>N.value=`api`,children:`打开 API`}),_(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>N.value=null,children:`全部收起`})]}),_(V,{accordion:!0,plus:!0,activeKey:N.value,onChange:e=>N.value=e??null,items:[{key:`guide`,label:`Migration Guide`,children:`梳理 breaking changes、默认行为差异与升级建议。`},{key:`api`,label:`API Delta`,children:`列出新增属性、弃用写法与向后兼容策略。`},{key:`qa`,label:`QA Notes`,children:`补充测试范围、回归清单和已知限制。`}]})]}),code:`const activeKey = ref<string | null>('guide')

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
/>`});c(()=>u(e,l,R))});let z=e(`rue:component:anchor`);i(l,z),p(()=>{let e=f(H,{title:`描述与额外操作`,summary:`每一项可带 description、extra 和独立禁用状态，extra 区域点击不会触发展开。`,tab:b,preview:()=>_(V,{arrow:!0,defaultActiveKey:[`ops`],items:[{key:`ops`,label:`Ops Console`,description:`控制发布节奏、灰度范围与告警阈值。`,extra:_(`span`,{className:`badge badge-soft badge-info`,children:`Beta`}),children:`适合放置运维策略、SLA 约束和异常回滚说明。`},{key:`billing`,label:`Billing Center`,description:`当前模块仍在迁移，暂不开放编辑。`,extra:_(`span`,{className:`badge badge-soft`,children:`Read only`}),disabled:!0,children:`禁用项会保留信息展示，但不响应交互。`}]}),code:`<Collapse
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
/>`});c(()=>u(e,l,z))});let B=e(`rue:component:anchor`);i(l,B),p(()=>{let e=f(H,{title:`图标位置与触发区域`,summary:`支持把图标放在左侧，并限制只有图标本身可触发开合。`,tab:x,preview:()=>_(V,{arrow:!0,expandIconPlacement:`start`,items:[{key:`deployment`,label:`Deployment Window`,description:`只有左侧图标可点击，标题区更适合放长文本说明。`,collapsible:`icon`,children:`当标题里还有链接、状态或操作说明时，这个模式会更稳妥。`},{key:`security`,label:`Security Review`,description:`保持默认 header 触发，图标只是视觉反馈。`,children:`适合和 icon-only 模式混合使用。`}]}),code:`<Collapse
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
/>`});c(()=>u(e,l,B))});let G=e(`rue:component:anchor`);i(l,G),p(()=>{let e=f(H,{title:`Ghost 与无边框`,summary:`不想用分组边框时，可以关闭 bordered，再按需开启 ghost。`,tab:S,preview:()=>_(V,{arrow:!0,bordered:!1,ghost:!0,className:`space-y-3`,defaultActiveKey:[`design`],items:[{key:`design`,label:`Design Tokens`,children:`透明背景更适合嵌在卡片、侧栏或深色容器中。`},{key:`theme`,label:`Theme Sync`,children:`可继续叠加自定义类名，让容器完全交给外层布局控制。`}]}),code:`<Collapse
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
/>`});c(()=>u(e,l,G))});let K=e(`rue:component:anchor`);i(l,K),p(()=>{let e=f(H,{title:`尺寸与受控多开`,summary:`size 会统一影响标题和内容尺寸；非 accordion 模式可同时展开多项。`,tab:C,preview:()=>g(`div`,{className:`space-y-4`,children:[g(`div`,{className:`flex flex-wrap gap-2`,children:[_(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`],children:`仅展开 Release`}),_(`button`,{className:`btn btn-sm`,onClick:()=>M.value=[`release`,`notes`],children:`展开两项`}),_(`button`,{className:`btn btn-sm btn-ghost`,onClick:()=>M.value=[],children:`全部收起`})]}),_(V,{plus:!0,size:`lg`,activeKey:M.value,onChange:e=>M.value=e??[],items:[{key:`release`,label:`Release Plan`,children:`大尺寸适合在信息层级较重的管理页或文档页中使用。`},{key:`notes`,label:`Release Notes`,children:`多开模式下可以把相邻的几块信息一起展开对照查看。`},{key:`rollback`,label:`Rollback`,children:`受控模式更方便和 URL、筛选器或外部按钮联动。`}]})]}),code:`const openKeys = ref<string[]>(['release'])

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
/>`});c(()=>u(e,l,K))});let q=e(`rue:component:anchor`);i(l,q),p(()=>{let e=f(H,{title:`Collapse with focus`,summary:`聚焦时展开、失焦时关闭，同时也支持重复点击标题切换开合。`,tab:w,preview:()=>g(V,{tabIndex:0,className:`bg-base-100 border border-base-300`,children:[_(V.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,q))});let J=e(`rue:component:anchor`);i(l,J),p(()=>{let e=f(H,{title:`Collapse with checkbox`,summary:`使用复选框控制展开与关闭，并支持重复点击标题切换。`,tab:T,preview:()=>g(V,{className:`bg-base-100 border border-base-300`,children:[_(`input`,{type:`checkbox`}),_(V.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" />
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,J))});let Y=e(`rue:component:anchor`);i(l,Y),p(()=>{let e=f(H,{title:`Collapse using details and summary tag`,summary:`使用 details/summary 标签。`,tab:ee,preview:()=>g(V,{tag:`details`,className:`bg-base-100 border border-base-300`,children:[_(V.Title,{as:`summary`,className:`font-semibold`,children:`How do I create an account?`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tag="details" className="bg-base-100 border border-base-300">
  <Collapse.Title as="summary" className="font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,Y))});let X=e(`rue:component:anchor`);i(l,X),p(()=>{let e=f(H,{title:`Without border and background color`,tab:te,preview:()=>g(V,{tabIndex:0,children:[_(V.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0}>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,X))});let Z=e(`rue:component:anchor`);i(l,Z),p(()=>{let e=f(H,{title:`With arrow icon`,tab:E,preview:()=>g(V,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[_(V.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,Z))});let Q=e(`rue:component:anchor`);i(l,Q),p(()=>{let e=f(H,{title:`With plus/minus icon`,tab:D,preview:()=>g(V,{tabIndex:0,plus:!0,className:`bg-base-100 border border-base-300`,children:[_(V.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} plus className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,Q))});let ie=e(`rue:component:anchor`);i(l,ie),p(()=>{let e=f(H,{title:`Moving collapse icon to the start`,summary:`通过 utility 类移动图标位置，并保留标题区重复点击切换能力。`,tab:O,preview:()=>g(V,{tabIndex:0,arrow:!0,className:`bg-base-100 border border-base-300`,children:[_(V.Title,{className:`font-semibold after:start-5 after:end-auto pe-4 ps-12`,children:`How do I create an account?`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} arrow className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold after:start-5 after:end-auto pe-4 ps-12">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,ie))});let ae=e(`rue:component:anchor`);i(l,ae),p(()=>{let e=f(H,{title:`Force open`,tab:k,preview:()=>g(V,{tabIndex:0,open:!0,className:`bg-base-100 border border-base-300`,children:[_(V.Title,{className:`font-semibold`,children:`I have collapse-open class`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} open className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-open class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,ae))});let oe=e(`rue:component:anchor`);i(l,oe),p(()=>{let e=f(H,{title:`Force close`,tab:A,preview:()=>g(V,{tabIndex:0,close:!0,className:`bg-base-100 border border-base-300`,children:[_(V.Title,{className:`font-semibold`,children:`I have collapse-close class`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse tabIndex={0} close className="bg-base-100 border border-base-300">
  <Collapse.Title className="font-semibold">I have collapse-close class</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,oe))});let se=e(`rue:component:anchor`);i(l,se),p(()=>{let e=f(H,{title:`Custom colors for collapse that works with focus`,summary:`通过 focus 触发颜色变化。`,tab:j,preview:()=>g(V,{tabIndex:0,className:`bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content`,children:[_(V.Title,{className:`font-semibold`,children:`How do I create an account?`}),_(V.Content,{className:`text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse
  tabIndex={0}
  className="bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content"
>
  <Collapse.Title className="font-semibold">How do I create an account?</Collapse.Title>
  <Collapse.Content className="text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,se))});let ce=e(`rue:component:anchor`);i(l,ce),p(()=>{let e=f(H,{title:`Custom colors for collapse that works with checkbox`,summary:`通过 peer/peer-checked 触发颜色变化，并支持重复点击标题切换。`,tab:ne,preview:()=>g(V,{className:`bg-base-100 border border-base-300`,children:[_(`input`,{type:`checkbox`,className:`peer`}),_(V.Title,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold`,children:`How do I create an account?`}),_(V.Content,{className:`bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm`,children:`Click the "Sign Up" button in the top right corner and follow the registration process.`})]}),code:`<Collapse className="bg-base-100 border border-base-300">
  <input type="checkbox" className="peer" />
  <Collapse.Title className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content font-semibold">
    How do I create an account?
  </Collapse.Title>
  <Collapse.Content className="bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content text-sm">
    Click the "Sign Up" button in the top right corner and follow the registration process.
  </Collapse.Content>
</Collapse>`});c(()=>u(e,l,ce))});let $=r(`h2`,l);i(l,$),i($,a(`API`));let le=r(`h3`,l);i(l,le),i(le,a(`Collapse`));let ue=e(`rue:component:anchor`);i(l,ue),p(()=>{let e=f(U,{rows:W});c(()=>u(e,l,ue))});let de=r(`h3`,l);i(l,de),i(de,a(`CollapseItem`));let fe=e(`rue:component:anchor`);return i(l,fe),p(()=>{let e=f(U,{rows:re});c(()=>u(e,l,fe))}),s})}),d,m),d})};export{G as default};
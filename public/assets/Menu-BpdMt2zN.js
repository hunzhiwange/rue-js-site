import{$t as e,Jt as t,Q as n,dt as r,et as i,in as a,it as o,l as s,lt as c,nt as l,o as u,rt as d,s as f,t as p,tt as m,vt as h,zt as g}from"./vapor-runtime-DsQWl-IB.js";import{a as _,n as v}from"./vapor-helpers-vapor-Dg64FcpK.js";import{i as y}from"./persistentSidebarPlayground-6jqnvaEa.js";import{t as b}from"./Code-4SUSUwRg.js";import{t as x}from"./tabs-Duzh3URW.js";import{t as S}from"./badge-rO8-umnf.js";import{t as C}from"./menu-BaUWGo1R.js";import{r as w}from"./SidebarPlaygroundDesign-EU389JDE.js";var T=t=>s(a=>{let o=l(`div`,a);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=l(`table`,o);n(o,f),r(f,`table table-zebra`);let p=l(`thead`,f);n(f,p);let h=l(`tr`,p);n(p,h);let _=l(`th`,h);n(h,_),n(_,d(`属性`));let y=l(`th`,h);n(h,y),n(y,d(`说明`));let b=l(`th`,h);n(h,b),n(b,d(`类型`));let x=l(`th`,h);n(h,x),n(x,d(`默认值`));let S=l(`tbody`,f);n(f,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return g(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,r,a,o,d)=>{u(s(()=>{let r=m(),a=l(`tr`,r);n(r,a),g(()=>{c(a,`key`,String(t.prop))});let o=l(`td`,a);n(a,o);let s=l(`code`,o);n(o,s);let d=i(`rue:slot:anchor`);n(s,d),g(()=>{let n=t.prop;e(()=>u(n,s,d))});let f=l(`td`,a);n(a,f);let p=i(`rue:slot:anchor`);n(f,p),g(()=>{let n=t.description;e(()=>u(n,f,p))});let h=l(`td`,a);n(a,h);let _=l(`code`,h);n(h,_);let v=i(`rue:slot:anchor`);n(_,v),g(()=>{let n=t.type;e(()=>u(n,_,v))});let y=l(`td`,a);n(a,y);let b=l(`code`,y);n(y,b);let x=i(`rue:slot:anchor`);return n(b,x),g(()=>{let n=t.defaultValue;e(()=>u(n,b,x))}),r}),r,a)}})}),o}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKey:Te,recommendedOpenKeys:Ee,compoundSelectedKeys:De,compoundOpenKeys:Oe,recommendedMenuClassName:ke,fileTreeMenuClassName:Ae,toggleDropdownByClass:je,menuData:Me,menuItems:Ne}=_(`useSetup:0:0`,()=>a(()=>({tRecommended:_(`ref:1:0`,()=>t(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>t(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>t(`preview`)),tBasic:_(`ref:1:3`,()=>t(`preview`)),tResponsive:_(`ref:1:4`,()=>t(`preview`)),tIconOnly:_(`ref:1:5`,()=>t(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>t(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>t(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>t(`preview`)),tSizes:_(`ref:1:9`,()=>t(`preview`)),tDisabled:_(`ref:1:10`,()=>t(`preview`)),tIcons:_(`ref:1:11`,()=>t(`preview`)),tIconsBadge:_(`ref:1:12`,()=>t(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>t(`preview`)),tTitle:_(`ref:1:14`,()=>t(`preview`)),tTitleParent:_(`ref:1:15`,()=>t(`preview`)),tSubmenu:_(`ref:1:16`,()=>t(`preview`)),tCollapsible:_(`ref:1:17`,()=>t(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>t(`preview`)),tFileTree:_(`ref:1:19`,()=>t(`preview`)),tActiveItem:_(`ref:1:20`,()=>t(`preview`)),tHorizontal:_(`ref:1:21`,()=>t(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>t(`preview`)),tMega:_(`ref:1:23`,()=>t(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>t(`preview`)),tArray:_(`ref:1:25`,()=>t(`preview`)),tArrayInternal:_(`ref:1:26`,()=>t(`preview`)),tNavigation:_(`ref:1:27`,()=>t(`preview`)),recommendedSelectedKey:_(`ref:1:28`,()=>t(`overview`)),recommendedOpenKeys:_(`ref:1:29`,()=>t([`workspace`])),compoundSelectedKeys:_(`ref:1:30`,()=>t([`profile`])),compoundOpenKeys:_(`ref:1:31`,()=>t([`settings`])),recommendedMenuClassName:`bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content`,fileTreeMenuClassName:`bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0`,toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Pe=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Fe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return s(t=>{let a=m(),_=i(`rue:component:anchor`);return n(a,_),u(p(w,{children:s(()=>{let t=m(),a=l(`div`,t);n(t,a),r(a,`max-w-none prose prose-sm md:prose-base`);let _=l(`h1`,a);n(a,_),n(_,d(`Menu 菜单`));let w=l(`p`,a);n(a,w),r(w,`text-sm mt-3 mb-3`),n(w,d("Menu 用于垂直或水平展示导航链接。它同时支持组合静态结构，以及 `items / selectedKeys / openKeys / group / divider / extra` 等数据驱动 API。"));let A=l(`div`,a);n(a,A),r(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ie=l(`h2`,A);n(A,Ie),r(Ie,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Ie,d(`# 推荐：items 数据驱动导航`));let Le=l(`p`,A);n(A,Le),r(Le,`mb-3 text-sm text-base-content/70`),n(Le,d(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Re=i(`rue:component:anchor`);n(A,Re),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});e(()=>u(t,A,Re))});let ze=i(`rue:slot:anchor`);n(A,ze),g(()=>{let t=E.value===`preview`?s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(C,{mode:`inline`,className:ke,items:Pe,selectedKeys:[Te.value],openKeys:Ee.value,onSelect:e=>Te.value=String(e.key),onOpenChange:e=>Ee.value=e});e(()=>u(n,t,r))}),t}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
import { ref } from '@rue-js/rue';

const selectedKey = ref('overview');
const openKeys = ref(['workspace']);

const items = [
  {
    type: 'group',
    label: 'Console',
    children: [
      {
        key: 'overview',
        label: 'Overview',
        icon: <span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />,
        extra: <Badge size="xs" variant="info">Live</Badge>,
      },
      {
        type: 'submenu',
        key: 'workspace',
        label: 'Workspace',
        icon: <span className="inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />,
        children: [
          { key: 'projects', label: 'Projects' },
          { key: 'deployments', label: 'Deployments' },
          { key: 'activity', label: 'Activity Feed', extra: <Badge size="xs" variant="warning">12</Badge> },
        ],
      },
    ],
  },
  { type: 'divider' },
  {
    type: 'group',
    label: 'Team',
    children: [
      { key: 'billing', label: 'Billing', extra: 'Cmd+B' },
      { key: 'members', label: 'Members', extra: <Badge size="xs" variant="success">8</Badge> },
      { key: 'danger-zone', label: 'Danger Zone', danger: true },
    ],
  },
];

<Menu
  mode="inline"
  className="bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content"
  items={items}
  selectedKeys={[selectedKey.value]}
  openKeys={openKeys.value}
  onSelect={info => (selectedKey.value = String(info.key))}
  onOpenChange={keys => (openKeys.value = keys as string[])}
/>`});e(()=>u(n,t,r))}),t});e(()=>u(t,A,ze))});let j=l(`div`,a);n(a,j),r(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Be=l(`h2`,j);n(j,Be),r(Be,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Be,d(`# 推荐：多选、分组与分割线`));let Ve=l(`p`,j);n(j,Ve),r(Ve,`mb-3 text-sm text-base-content/70`),n(Ve,d("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let He=i(`rue:component:anchor`);n(j,He),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});e(()=>u(t,j,He))});let Ue=i(`rue:slot:anchor`);n(j,Ue),g(()=>{let t=te.value===`preview`?s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(C,{className:`bg-base-200 rounded-box w-80`,items:Fe,multiple:!0,defaultSelectedKeys:[`mentions`,`archived`]});e(()=>u(n,t,r))}),t}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`const items = [
  {
    type: 'group',
    label: 'Inbox',
    children: [
      { key: 'mentions', label: 'Mentions', extra: <Badge size="xs" variant="error">3</Badge> },
      { key: 'reviews', label: 'Code Reviews', extra: <Badge size="xs" variant="warning">5</Badge> },
    ],
  },
  { type: 'divider', dashed: true },
  {
    type: 'group',
    label: 'Archive',
    children: [
      { key: 'archived', label: 'Archived Threads' },
      { key: 'muted', label: 'Muted Channels', disabled: true },
    ],
  },
];

<Menu
  className="bg-base-200 rounded-box w-80"
  items={items}
  multiple
  defaultSelectedKeys={['mentions', 'archived']}
/>`});e(()=>u(n,t,r))}),t});e(()=>u(t,j,Ue))});let M=l(`div`,a);n(a,M),r(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let We=l(`h2`,M);n(M,We),r(We,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(We,d(`# 推荐：组合式语义 API`));let Ge=l(`p`,M);n(M,Ge),r(Ge,`mb-3 text-sm text-base-content/70`),n(Ge,d("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ke=i(`rue:component:anchor`);n(M,Ke),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});e(()=>u(t,M,Ke))});let qe=i(`rue:slot:anchor`);n(M,qe),g(()=>{let t=D.value===`preview`?s(()=>{let t=m(),r=i(`rue:component:anchor`);n(t,r);let a=s(()=>{let t=m(),r=i(`rue:component:anchor`);n(t,r);let a=s(()=>{let t=m(),r=i(`rue:component:anchor`);n(t,r),g(()=>{let n=p(C.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});e(()=>u(n,t,r))});let a=i(`rue:component:anchor`);return n(t,a),g(()=>{let n=p(C.Item,{eventKey:`notifications`,extra:y(S,{size:`xs`,children:`2`}),children:`Notifications`});e(()=>u(n,t,a))}),t});u(p(C.ItemGroup,{title:`Account`,children:a}),t,r);let o=i(`rue:component:anchor`);n(t,o),u(p(C.Divider,{}),t,o);let c=i(`rue:component:anchor`);n(t,c);let l=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{eventKey:`security`,children:`Security`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,r),e});return g(()=>{let n=p(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:l});e(()=>u(n,t,c))}),t});return g(()=>{let n=p(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:De.value,openKeys:Oe.value,onSelect:e=>De.value=e.selectedKeys,onOpenChange:e=>Oe.value=e,children:a});e(()=>u(n,t,r))}),t}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
const openKeys = ref(['settings']);

<Menu
  className="bg-base-200 rounded-box w-80"
  selectedKeys={selectedKeys.value}
  openKeys={openKeys.value}
  onSelect={info => (selectedKeys.value = info.selectedKeys as string[])}
  onOpenChange={keys => (openKeys.value = keys as string[])}
>
  <Menu.ItemGroup title="Account">
    <Menu.Item eventKey="profile" icon={<span className="inline-flex h-2.5 w-2.5 rounded-full bg-primary" />}>
      Profile
    </Menu.Item>
    <Menu.Item eventKey="notifications" extra={<Badge size="xs">2</Badge>}>
      Notifications
    </Menu.Item>
  </Menu.ItemGroup>
  <Menu.Divider />
  <Menu.SubMenu
    eventKey="settings"
    title="Settings"
    icon={<span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent" />}
  >
    <Menu.Item eventKey="security">Security</Menu.Item>
    <Menu.Item eventKey="tokens" extra="Beta">API Tokens</Menu.Item>
  </Menu.SubMenu>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,M,qe))});let Je=l(`div`,a);n(a,Je),r(Je,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),n(Je,d(`下面的示例全部使用 Rue 当前静态/基础结构写法，用于展示 daisyUI 风格能力与覆盖范围。`));let N=l(`div`,a);n(a,N),r(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ye=l(`h2`,N);n(N,Ye),r(Ye,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Ye,d(`# 导航跳转`));let Xe=i(`rue:component:anchor`);n(N,Xe),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});e(()=>u(t,N,Xe))});let Ze=i(`rue:slot:anchor`);n(N,Ze),g(()=>{let t=we.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,r);let a=i(`rue:component:anchor`);return n(e,a),u(p(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,a),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,N,Ze))});let P=l(`div`,a);n(a,P),r(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qe=l(`h2`,P);n(P,Qe),r(Qe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Qe,d(`# Menu 通过数据渲染（数组）`));let $e=i(`rue:component:anchor`);n(P,$e),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});e(()=>u(t,P,$e))});let et=i(`rue:slot:anchor`);n(P,et),g(()=>{let t=Se.value===`preview`?s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),u(p(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:s(()=>{let t=m(),r=i(`rue:list:start`),a=i(`rue:list:end`);n(t,r),n(t,a);let o=new Map;return g(()=>{o=v({items:Me||[],getKey:(e,t)=>t,elements:o,parent:r.parentNode,before:a,singleRoot:!0,start:r,renderItem:(t,r,a,o,d)=>{u(s(()=>{let r=m(),a=l(`li`,r);n(r,a),g(()=>{c(a,`key`,String(d))});let o=i(`rue:component:anchor`);n(a,o),u(p(C.Item,{children:t.label}),a,o);let h=i(`rue:component:anchor`);return n(a,h),u(p(C.Submenu,{children:s(()=>{let r=m(),a=i(`rue:list:start`),o=i(`rue:list:end`);n(r,a),n(r,o);let d=new Map;return g(()=>{d=v({items:t.children||[],getKey:(e,t)=>t,elements:d,parent:a.parentNode,before:o,start:a,renderItem:(t,r,a,o,d)=>{f(s(typeof t==`string`?()=>{let r=m(),a=i(`rue:component:anchor`);return n(r,a),g(()=>{let n=p(C.Item,{key:d,children:t});e(()=>u(n,r,a))}),r}:()=>{let e=m(),r=l(`li`,e);n(e,r),g(()=>{c(r,`key`,String(d))});let a=i(`rue:component:anchor`);n(r,a),u(p(C.Item,{children:t.label}),r,a);let o=i(`rue:component:anchor`);return n(r,o),u(p(C.Submenu,{children:s(()=>{let e=m(),r=i(`rue:list:start`),a=i(`rue:list:end`);n(e,r),n(e,a);let o=new Map;return g(()=>{o=v({items:t.children||[],getKey:(e,t)=>t,elements:o,parent:r.parentNode,before:a,start:r,renderItem:(e,t,n,r,i)=>{f(p(C.Item,{key:i,children:e}),t,n,r)}})}),e})}),r,o),e}),r,a,o)}})}),r})}),a,h),r}),r,a)}})}),t})}),t,r),t}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
const menuData = [
  { label: 'Solutions', children: ['Design', 'Development', 'Hosting', 'Domain register'] },
  { label: 'Enterprise', children: ['CRM software', 'Marketing management', 'Security', 'Consulting'] },
  {
    label: 'Products',
    children: [
      'UI Kit',
      'WordPress themes',
      'WordPress plugins',
      { label: 'Open source', children: ['Auth management system', 'VScode theme', 'Color picker app'] },
    ],
  },
  { label: 'Company', children: ['About us', 'Contact us', 'Privacy policy', 'Press kit'] },
];
<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
  {menuData.map((g, i) => (
    <li key={i}>
      <Menu.Item>{g.label}</Menu.Item>
      <Menu.Submenu>
        {g.children.map((c, j) =>
          typeof c === 'string' ? (
            <Menu.Item key={j}>{c}</Menu.Item>
          ) : (
            <li key={j}>
              <Menu.Item>{c.label}</Menu.Item>
              <Menu.Submenu>
                {c.children.map((x, k) => (
                  <Menu.Item key={k}>{x}</Menu.Item>
                ))}
              </Menu.Submenu>
            </li>
          )
        )}
      </Menu.Submenu>
    </li>
  ))}
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,P,et))});let F=l(`div`,a);n(a,F),r(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let tt=l(`h2`,F);n(F,tt),r(tt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(tt,d(`# Menu 通过数据渲染（数组，组件内部）`));let nt=i(`rue:component:anchor`);n(F,nt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});e(()=>u(t,F,nt))});let rt=i(`rue:slot:anchor`);n(F,rt),g(()=>{let t=Ce.value===`preview`?s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(C,{items:Ne,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});e(()=>u(n,t,r))}),t}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
const menuItems = [
  { kind: 'title', children: 'Main' },
  { kind: 'item', children: 'Solutions', submenu: { items: ['Design', 'Development', 'Hosting', 'Domain register'].map(t => ({ kind: 'item', children: t })) } },
  { kind: 'item', children: 'Enterprise', dropdownToggle: { children: 'More' }, dropdown: { visible: true, items: ['CRM software', 'Marketing management', 'Security', 'Consulting'].map(t => ({ kind: 'item', children: t })) } },
  { kind: 'item', children: 'Products', submenu: { items: [
    { kind: 'item', children: 'UI Kit' },
    { kind: 'item', children: 'WordPress themes' },
    { kind: 'item', children: 'WordPress plugins' },
    { kind: 'item', children: 'Open source', submenu: { items: ['Auth management system', 'VScode theme', 'Color picker app'].map(t => ({ kind: 'item', children: t })) } },
  ] } },
  { kind: 'item', children: 'Company', submenu: { items: ['About us', 'Contact us', 'Privacy policy', 'Press kit'].map(t => ({ kind: 'item', children: t })) } },
];
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});e(()=>u(n,t,r))}),t});e(()=>u(t,F,rt))});let I=l(`div`,a);n(a,I),r(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let it=l(`h2`,I);n(I,it),r(it,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(it,d(`# Menu`));let at=i(`rue:component:anchor`);n(I,at),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});e(()=>u(t,I,at))});let ot=i(`rue:slot:anchor`);n(I,ot),g(()=>{let t=ne.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{as:`button`,children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return n(e,a),u(p(C.Item,{as:`button`,children:`Item 3`}),e,a),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,I,ot))});let st=l(`div`,a);n(a,st),r(st,`component-preview not-prose text-base-content my-6 lg:my-12`);let ct=l(`h2`,st);n(st,ct),r(ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(ct,d(`# 响应式：小屏垂直，大屏水平`));let lt=i(`rue:component:anchor`);n(st,lt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});e(()=>u(t,st,lt))});let ut=i(`rue:slot:anchor`);n(st,ut),g(()=>{let t=re.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{as:`button`,children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return n(e,a),u(p(C.Item,{as:`button`,children:`Item 3`}),e,a),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,st,ut))});let L=l(`div`,a);n(a,L),r(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let dt=l(`h2`,L);n(L,dt),r(dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(dt,d(`# 仅图标`));let ft=i(`rue:component:anchor`);n(L,ft),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});e(()=>u(t,L,ft))});let pt=i(`rue:slot:anchor`);n(L,pt),g(()=>{let t=ie.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t);let a=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});u(p(C.Item,{as:`button`,children:a}),e,t);let o=i(`rue:component:anchor`);n(e,o);let d=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});u(p(C.Item,{as:`button`,children:d}),e,o);let f=i(`rue:component:anchor`);n(e,f);let h=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return u(p(C.Item,{as:`button`,children:h}),e,f),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  </Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,L,pt))});let R=l(`div`,a);n(a,R),r(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let mt=l(`h2`,R);n(R,mt),r(mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(mt,d(`# 仅图标（水平）`));let ht=i(`rue:component:anchor`);n(R,ht),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});e(()=>u(t,R,ht))});let gt=i(`rue:slot:anchor`);n(R,gt),g(()=>{let t=ae.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t);let a=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});u(p(C.Item,{as:`button`,children:a}),e,t);let o=i(`rue:component:anchor`);n(e,o);let d=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});u(p(C.Item,{as:`button`,children:d}),e,o);let f=i(`rue:component:anchor`);n(e,f);let h=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return u(p(C.Item,{as:`button`,children:h}),e,f),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  </Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,R,gt))});let z=l(`div`,a);n(a,z),r(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let _t=l(`h2`,z);n(z,_t),r(_t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(_t,d(`# 仅图标（带 tooltip）`));let vt=i(`rue:component:anchor`);n(z,vt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});e(()=>u(t,z,vt))});let yt=i(`rue:slot:anchor`);n(z,yt),g(()=>{let t=oe.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t);let a=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),e});u(p(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:a}),e,t);let o=i(`rue:component:anchor`);n(e,o);let d=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});u(p(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:d}),e,o);let f=i(`rue:component:anchor`);n(e,f);let h=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return u(p(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:h}),e,f),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
  <Menu.Item as="button" className="tooltip tooltip-right" data-tip="Home">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button" className="tooltip tooltip-right" data-tip="Details">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button" className="tooltip tooltip-right" data-tip="Stats">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2a2 2 0 002-2zm0 0 V9a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z" />
    </svg>
  </Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,z,yt))});let B=l(`div`,a);n(a,B),r(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let bt=l(`h2`,B);n(B,bt),r(bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(bt,d(`# 仅图标（水平，tooltip）`));let xt=i(`rue:component:anchor`);n(B,xt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});e(()=>u(t,B,xt))});let St=i(`rue:slot:anchor`);n(B,St),g(()=>{let t=O.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t);let a=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),e});u(p(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:a}),e,t);let o=i(`rue:component:anchor`);n(e,o);let d=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});u(p(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:d}),e,o);let f=i(`rue:component:anchor`);n(e,f);let h=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),e});return u(p(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:h}),e,f),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
  <Menu.Item as="button" className="tooltip" data-tip="Home">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button" className="tooltip" data-tip="Details">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </Menu.Item>
  <Menu.Item as="button" className="tooltip" data-tip="Stats">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z" />
    </svg>
  </Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,B,St))});let V=l(`div`,a);n(a,V),r(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ct=l(`h2`,V);n(V,Ct),r(Ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Ct,d(`# Menu 尺寸`));let wt=i(`rue:component:anchor`);n(V,wt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});e(()=>u(t,V,wt))});let Tt=i(`rue:slot:anchor`);n(V,Tt),g(()=>{let t=se.value===`preview`?s(()=>{let e=m(),t=l(`div`,e);n(e,t),r(t,`grid gap-6`);let a=i(`rue:component:anchor`);n(t,a),u(p(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Xsmall 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{as:`button`,children:`Xsmall 2`}),e,r),e})}),t,a);let o=i(`rue:component:anchor`);n(t,o),u(p(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Small 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{as:`button`,children:`Small 2`}),e,r),e})}),t,o);let c=i(`rue:component:anchor`);n(t,c),u(p(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Medium 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{as:`button`,children:`Medium 2`}),e,r),e})}),t,c);let d=i(`rue:component:anchor`);n(t,d),u(p(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Large 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{as:`button`,children:`Large 2`}),e,r),e})}),t,d);let f=i(`rue:component:anchor`);return n(t,f),u(p(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Xlarge 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{as:`button`,children:`Xlarge 2`}),e,r),e})}),t,f),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
  <Menu size="xs" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Xsmall 1</Menu.Item>
    <Menu.Item as="button">Xsmall 2</Menu.Item>
  </Menu>
  <Menu size="sm" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Small 1</Menu.Item>
    <Menu.Item as="button">Small 2</Menu.Item>
  </Menu>
  <Menu size="md" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Medium 1</Menu.Item>
    <Menu.Item as="button">Medium 2</Menu.Item>
  </Menu>
  <Menu size="lg" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Large 1</Menu.Item>
    <Menu.Item as="button">Large 2</Menu.Item>
  </Menu>
  <Menu size="xl" className="bg-base-200 rounded-box w-56">
    <Menu.Item as="button">Xlarge 1</Menu.Item>
    <Menu.Item as="button">Xlarge 2</Menu.Item>
  </Menu>
</div>`});e(()=>u(n,t,r))}),t});e(()=>u(t,V,Tt))});let H=l(`div`,a);n(a,H),r(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let Et=l(`h2`,H);n(H,Et),r(Et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Et,d(`# 禁用项目`));let Dt=i(`rue:component:anchor`);n(H,Dt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});e(()=>u(t,H,Dt))});let Ot=i(`rue:slot:anchor`);n(H,Ot),g(()=>{let t=k.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Enabled item`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,r);let a=i(`rue:component:anchor`);return n(e,a),u(p(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,a),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,H,Ot))});let U=l(`div`,a);n(a,U),r(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let kt=l(`h2`,U);n(U,kt),r(kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(kt,d(`# 带图标`));let At=i(`rue:component:anchor`);n(U,At),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});e(()=>u(t,U,At))});let jt=i(`rue:slot:anchor`);n(U,jt),g(()=>{let t=ce.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t);let a=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n(e,d(`Item 2`)),e});u(p(C.Item,{as:`button`,children:a}),e,t);let o=i(`rue:component:anchor`);n(e,o);let f=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n(e,d(`Item 1`)),e});u(p(C.Item,{as:`button`,children:f}),e,o);let h=i(`rue:component:anchor`);n(e,h);let g=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n(e,d(`Item 3`)),e});return u(p(C.Item,{as:`button`,children:g}),e,h),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    Item 2
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Item 1
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
    Item 3
  </Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,U,jt))});let W=l(`div`,a);n(a,W),r(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Mt=l(`h2`,W);n(W,Mt),r(Mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Mt,d(`# 带图标与徽章（响应式）`));let Nt=i(`rue:component:anchor`);n(W,Nt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});e(()=>u(t,W,Nt))});let Pt=i(`rue:slot:anchor`);n(W,Pt),g(()=>{let t=le.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t);let a=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let a=l(`path`,t);n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n(e,d(`Inbox`));let o=i(`rue:component:anchor`);return n(e,o),u(p(S,{size:`xs`,children:`99+`}),e,o),e});u(p(C.Item,{as:`button`,children:a}),e,t);let f=i(`rue:component:anchor`);n(e,f);let g=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),r(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let a=l(`path`,t);n(t,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n(e,d(`Updates`));let s=o(e);n(e,s),h(s,` `);let f=i(`rue:component:anchor`);return n(e,f),u(p(S,{size:`xs`,variant:`warning`,children:`NEW`}),e,f),e});u(p(C.Item,{as:`button`,children:g}),e,f);let _=i(`rue:component:anchor`);n(e,_);let v=s(()=>{let e=m();n(e,d(`Stats`));let t=i(`rue:component:anchor`);return n(e,t),u(p(S,{size:`xs`,variant:`info`}),e,t),e});return u(p(C.Item,{as:`button`,children:v}),e,_),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
    Inbox <Badge size="xs">99+</Badge>
  </Menu.Item>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    Updates <Badge size="xs" variant="warning">NEW</Badge>
  </Menu.Item>
  <Menu.Item as="button">
    Stats <Badge size="xs" variant="info" />
  </Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,W,Pt))});let G=l(`div`,a);n(a,G),r(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ft=l(`h2`,G);n(G,Ft),r(Ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Ft,d(`# 去除内边距和圆角`));let It=i(`rue:component:anchor`);n(G,It),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});e(()=>u(t,G,It))});let Lt=i(`rue:slot:anchor`);n(G,Lt),g(()=>{let t=ue.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Item 1`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return n(e,a),u(p(C.Item,{children:`Item 3`}),e,a),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,G,Lt))});let K=l(`div`,a);n(a,K),r(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Rt=l(`h2`,K);n(K,Rt),r(Rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Rt,d(`# 带标题`));let zt=i(`rue:component:anchor`);n(K,zt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});e(()=>u(t,K,zt))});let Bt=i(`rue:slot:anchor`);n(K,Bt),g(()=>{let t=de.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Title,{children:`Title`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{children:`Item 1`}),e,r);let a=i(`rue:component:anchor`);n(e,a),u(p(C.Item,{children:`Item 2`}),e,a);let o=i(`rue:component:anchor`);return n(e,o),u(p(C.Item,{children:`Item 3`}),e,o),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,K,Bt))});let q=l(`div`,a);n(a,q),r(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Vt=l(`h2`,q);n(q,Vt),r(Vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Vt,d(`# 标题作为父级`));let Ht=i(`rue:component:anchor`);n(q,Ht),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});e(()=>u(t,q,Ht))});let Ut=i(`rue:slot:anchor`);n(q,Ut),g(()=>{let t=fe.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=l(`li`,e);n(e,t);let r=i(`rue:component:anchor`);n(t,r),u(p(C.Title,{as:`h2`,children:`Title`}),t,r);let a=l(`ul`,t);n(t,a);let o=i(`rue:component:anchor`);n(a,o),u(p(C.Item,{children:`Item 1`}),a,o);let s=i(`rue:component:anchor`);n(a,s),u(p(C.Item,{children:`Item 2`}),a,s);let c=i(`rue:component:anchor`);return n(a,c),u(p(C.Item,{children:`Item 3`}),a,c),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,q,Ut))});let J=l(`div`,a);n(a,J),r(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Wt=l(`h2`,J);n(J,Wt),r(Wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Wt,d(`# 子菜单`));let Gt=i(`rue:component:anchor`);n(J,Gt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});e(()=>u(t,J,Gt))});let Kt=i(`rue:slot:anchor`);n(J,Kt),g(()=>{let t=pe.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=l(`li`,e);n(e,r);let a=i(`rue:component:anchor`);n(r,a),u(p(C.Item,{as:`button`,children:`Parent`}),r,a);let o=i(`rue:component:anchor`);n(r,o);let c=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{as:`button`,children:`Submenu 2`}),e,r);let a=l(`li`,e);n(e,a);let o=i(`rue:component:anchor`);n(a,o),u(p(C.Item,{as:`button`,children:`Parent`}),a,o);let c=i(`rue:component:anchor`);n(a,c);let d=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{as:`button`,children:`Submenu 2`}),e,r),e});return u(p(C.Submenu,{children:d}),a,c),e});u(p(C.Submenu,{children:c}),r,o);let d=i(`rue:component:anchor`);return n(e,d),u(p(C.Item,{as:`button`,children:`Item 3`}),e,d),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <li>
    <Menu.Item as="button">Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item as="button">Submenu 1</Menu.Item>
      <Menu.Item as="button">Submenu 2</Menu.Item>
      <li>
        <Menu.Item as="button">Parent</Menu.Item>
        <Menu.Submenu>
          <Menu.Item as="button">Submenu 1</Menu.Item>
          <Menu.Item as="button">Submenu 2</Menu.Item>
        </Menu.Submenu>
      </li>
    </Menu.Submenu>
  </li>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,J,Kt))});let Y=l(`div`,a);n(a,Y),r(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let qt=l(`h2`,Y);n(Y,qt),r(qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(qt,d(`# 可折叠子菜单`));let Jt=i(`rue:component:anchor`);n(Y,Jt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});e(()=>u(t,Y,Jt))});let Yt=i(`rue:slot:anchor`);n(Y,Yt),g(()=>{let t=me.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=l(`li`,e);n(e,r);let a=l(`details`,r);n(r,a);let o=l(`summary`,a);n(a,o),n(o,d(`Parent`));let s=l(`ul`,a);n(a,s);let c=i(`rue:component:anchor`);n(s,c),u(p(C.Item,{as:`button`,children:`Submenu 1`}),s,c);let f=i(`rue:component:anchor`);n(s,f),u(p(C.Item,{as:`button`,children:`Submenu 2`}),s,f);let h=l(`li`,s);n(s,h);let g=l(`details`,h);n(h,g);let _=l(`summary`,g);n(g,_),n(_,d(`Parent`));let v=l(`ul`,g);n(g,v);let y=i(`rue:component:anchor`);n(v,y),u(p(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=i(`rue:component:anchor`);n(v,b),u(p(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=i(`rue:component:anchor`);return n(e,x),u(p(C.Item,{as:`button`,children:`Item 3`}),e,x),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <li>
    <details open>
      <summary>Parent</summary>
      <ul>
        <Menu.Item as="button">Submenu 1</Menu.Item>
        <Menu.Item as="button">Submenu 2</Menu.Item>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <Menu.Item as="button">Submenu 1</Menu.Item>
              <Menu.Item as="button">Submenu 2</Menu.Item>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,Y,Yt))});let X=l(`div`,a);n(a,X),r(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xt=l(`h2`,X);n(X,Xt),r(Xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Xt,d(`# 通过类名控制展开（JS）`));let Zt=i(`rue:component:anchor`);n(X,Zt),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});e(()=>u(t,X,Zt))});let Qt=i(`rue:slot:anchor`);n(X,Qt),g(()=>{let t=he.value===`preview`?s(()=>{let t=m(),a=l(`div`,t);n(t,a),r(a,`grid gap-6`);let o=i(`rue:component:anchor`);n(a,o),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Item 1`}),e,t);let r=l(`li`,e);n(e,r);let a=i(`rue:component:anchor`);n(r,a),u(p(C.DropdownToggle,{onClick:je,children:`Parent`}),r,a);let o=i(`rue:component:anchor`);n(r,o);let c=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Submenu 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{children:`Submenu 2`}),e,r),e});return u(p(C.Dropdown,{children:c}),r,o),e})}),a,o);let c=i(`rue:component:anchor`);return n(a,c),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=m(),r=i(`rue:component:anchor`);n(t,r),u(p(C.Item,{children:`Item 1`}),t,r);let a=l(`li`,t);n(t,a);let o=i(`rue:component:anchor`);n(a,o),g(()=>{let t=p(C.DropdownToggle,{show:!0,onClick:je,children:`Parent`});e(()=>u(t,a,o))});let c=i(`rue:component:anchor`);n(a,c);let d=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Submenu 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{children:`Submenu 2`}),e,r),e});return g(()=>{let t=p(C.Dropdown,{show:!0,children:d});e(()=>u(t,a,c))}),t})}),a,c),t}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

const toggleDropdownByClass = (event: MouseEvent) => {
  const toggle = event.currentTarget as HTMLElement | null;
  const dropdown = toggle?.nextElementSibling as HTMLElement | null;
  if (!toggle || !dropdown) return;
  const nextOpen = !toggle.classList.contains('menu-dropdown-show');
  toggle.classList.toggle('menu-dropdown-show', nextOpen);
  dropdown.classList.toggle('menu-dropdown-show', nextOpen);
  toggle.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
};

<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.DropdownToggle onClick={toggleDropdownByClass}>Parent</Menu.DropdownToggle>
    <Menu.Dropdown>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Dropdown>
  </li>
</Menu>

<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.DropdownToggle show onClick={toggleDropdownByClass}>Parent</Menu.DropdownToggle>
    <Menu.Dropdown show>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Dropdown>
  </li>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,X,Qt))});let Z=l(`div`,a);n(a,Z),r(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let $t=l(`h2`,Z);n(Z,$t),r($t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n($t,d(`# 文件树`));let en=i(`rue:component:anchor`);n(Z,en),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});e(()=>u(t,Z,en))});let tn=i(`rue:slot:anchor`);n(Z,tn),g(()=>{let t=ge.value===`preview`?s(()=>{let t=m(),a=i(`rue:component:anchor`);n(t,a);let o=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t);let a=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`strokeWidth`,`1.5`),c(t,`stroke`,`currentColor`),r(t,`w-4 h-4`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),n(e,d(`resume.pdf`)),e});u(p(C.Item,{as:`button`,children:a}),e,t);let o=l(`li`,e);n(e,o);let f=l(`details`,o);n(o,f);let h=l(`summary`,f);n(f,h);let g=l(`svg`,h);n(h,g),c(g,`xmlns`,`http://www.w3.org/2000/svg`),c(g,`fill`,`none`),c(g,`viewBox`,`0 0 24 24`),c(g,`strokeWidth`,`1.5`),c(g,`stroke`,`currentColor`),r(g,`w-4 h-4`);let _=l(`path`,g);n(g,_),c(_,`strokeLinecap`,`round`),c(_,`strokeLinejoin`,`round`),c(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),n(h,d(`My Files`));let v=l(`ul`,f);n(f,v);let y=i(`rue:component:anchor`);n(v,y);let b=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`strokeWidth`,`1.5`),c(t,`stroke`,`currentColor`),r(t,`w-4 h-4`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),n(e,d(`Project-final.psd`)),e});u(p(C.Item,{as:`button`,children:b}),v,y);let x=i(`rue:component:anchor`);n(v,x);let S=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`strokeWidth`,`1.5`),c(t,`stroke`,`currentColor`),r(t,`w-4 h-4`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),n(e,d(`Project-final-2.psd`)),e});u(p(C.Item,{as:`button`,children:S}),v,x);let w=l(`li`,v);n(v,w);let T=l(`details`,w);n(w,T);let ee=l(`summary`,T);n(T,ee);let E=l(`svg`,ee);n(ee,E),c(E,`xmlns`,`http://www.w3.org/2000/svg`),c(E,`fill`,`none`),c(E,`viewBox`,`0 0 24 24`),c(E,`strokeWidth`,`1.5`),c(E,`stroke`,`currentColor`),r(E,`w-4 h-4`);let te=l(`path`,E);n(E,te),c(te,`strokeLinecap`,`round`),c(te,`strokeLinejoin`,`round`),c(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),n(ee,d(`Images`));let D=l(`ul`,T);n(T,D);let ne=i(`rue:component:anchor`);n(D,ne);let re=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`strokeWidth`,`1.5`),c(t,`stroke`,`currentColor`),r(t,`w-4 h-4`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),n(e,d(`Screenshot1.png`)),e});u(p(C.Item,{as:`button`,children:re}),D,ne);let ie=i(`rue:component:anchor`);n(D,ie);let ae=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`strokeWidth`,`1.5`),c(t,`stroke`,`currentColor`),r(t,`w-4 h-4`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),n(e,d(`Screenshot2.png`)),e});u(p(C.Item,{as:`button`,children:ae}),D,ie);let oe=l(`li`,D);n(D,oe);let O=l(`details`,oe);n(oe,O);let se=l(`summary`,O);n(O,se);let k=l(`svg`,se);n(se,k),c(k,`xmlns`,`http://www.w3.org/2000/svg`),c(k,`fill`,`none`),c(k,`viewBox`,`0 0 24 24`),c(k,`strokeWidth`,`1.5`),c(k,`stroke`,`currentColor`),r(k,`w-4 h-4`);let ce=l(`path`,k);n(k,ce),c(ce,`strokeLinecap`,`round`),c(ce,`strokeLinejoin`,`round`),c(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),n(se,d(`Others`));let le=l(`ul`,O);n(O,le);let ue=i(`rue:component:anchor`);n(le,ue);let de=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`strokeWidth`,`1.5`),c(t,`stroke`,`currentColor`),r(t,`w-4 h-4`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),n(e,d(`Screenshot3.png`)),e});u(p(C.Item,{as:`button`,children:de}),le,ue);let fe=i(`rue:component:anchor`);n(e,fe);let pe=s(()=>{let e=m(),t=l(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`strokeWidth`,`1.5`),c(t,`stroke`,`currentColor`),r(t,`w-4 h-4`);let i=l(`path`,t);return n(t,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),n(e,d(`reports-final-2.pdf`)),e});return u(p(C.Item,{as:`button`,children:pe}),e,fe),e});return g(()=>{let n=p(C,{size:`xs`,className:Ae,children:o});e(()=>u(n,t,a))}),t}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu
  size="xs"
  className="bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0"
>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
    resume.pdf
  </Menu.Item>
  <li>
    <details open>
      <summary>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        My Files
      </summary>
      <ul>
        <Menu.Item as="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          Project-final.psd
        </Menu.Item>
        <Menu.Item as="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          Project-final-2.psd
        </Menu.Item>
        <li>
          <details open>
            <summary>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
              </svg>
              Images
            </summary>
            <ul>
              <Menu.Item as="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Screenshot1.png
              </Menu.Item>
              <Menu.Item as="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                Screenshot2.png
              </Menu.Item>
              <li>
                <details open>
                  <summary>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                    </svg>
                    Others
                  </summary>
                  <ul>
                    <Menu.Item as="button">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                      Screenshot3.png
                    </Menu.Item>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <Menu.Item as="button">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
    reports-final-2.pdf
  </Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,Z,tn))});let Q=l(`div`,a);n(a,Q),r(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let nn=l(`h2`,Q);n(Q,nn),r(nn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(nn,d(`# 激活项`));let rn=i(`rue:component:anchor`);n(Q,rn),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});e(()=>u(t,Q,rn))});let an=i(`rue:slot:anchor`);n(Q,an),g(()=>{let t=_e.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Item 1`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{className:`menu-active`,children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return n(e,a),u(p(C.Item,{children:`Item 3`}),e,a),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,Q,an))});let on=l(`div`,a);n(a,on),r(on,`component-preview not-prose text-base-content my-6 lg:my-12`);let sn=l(`h2`,on);n(on,sn),r(sn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(sn,d(`# 水平菜单`));let cn=i(`rue:component:anchor`);n(on,cn),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});e(()=>u(t,on,cn))});let ln=i(`rue:slot:anchor`);n(on,ln),g(()=>{let t=ve.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Item 1`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return n(e,a),u(p(C.Item,{children:`Item 3`}),e,a),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,on,ln))});let un=l(`div`,a);n(a,un),r(un,`component-preview not-prose text-base-content my-6 lg:my-12`);let dn=l(`h2`,un);n(un,dn),r(dn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(dn,d(`# 水平子菜单`));let fn=i(`rue:component:anchor`);n(un,fn),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});e(()=>u(t,un,fn))});let pn=i(`rue:slot:anchor`);n(un,pn),g(()=>{let t=ye.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Item 1`}),e,t);let r=l(`li`,e);n(e,r);let a=i(`rue:component:anchor`);n(r,a),u(p(C.Item,{children:`Parent`}),r,a);let o=i(`rue:component:anchor`);n(r,o);let c=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Submenu 1`}),e,t);let r=i(`rue:component:anchor`);return n(e,r),u(p(C.Item,{children:`Submenu 2`}),e,r),e});u(p(C.Submenu,{children:c}),r,o);let d=i(`rue:component:anchor`);return n(e,d),u(p(C.Item,{children:`Item 3`}),e,d),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,un,pn))});let mn=l(`div`,a);n(a,mn),r(mn,`component-preview not-prose text-base-content my-6 lg:my-12`);let hn=l(`h2`,mn);n(mn,hn),r(hn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(hn,d(`# Mega 菜单（响应式）`));let gn=i(`rue:component:anchor`);n(mn,gn),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});e(()=>u(t,mn,gn))});let _n=i(`rue:slot:anchor`);n(mn,_n),g(()=>{let t=be.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:s(()=>{let e=m(),t=l(`li`,e);n(e,t);let r=i(`rue:component:anchor`);n(t,r),u(p(C.Item,{children:`Solutions`}),t,r);let a=i(`rue:component:anchor`);n(t,a);let o=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Design`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{children:`Development`}),e,r);let a=i(`rue:component:anchor`);n(e,a),u(p(C.Item,{children:`Hosting`}),e,a);let o=i(`rue:component:anchor`);return n(e,o),u(p(C.Item,{children:`Domain register`}),e,o),e});u(p(C.Submenu,{children:o}),t,a);let c=l(`li`,e);n(e,c);let d=i(`rue:component:anchor`);n(c,d),u(p(C.Item,{children:`Enterprise`}),c,d);let f=i(`rue:component:anchor`);n(c,f);let h=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`CRM software`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{children:`Marketing management`}),e,r);let a=i(`rue:component:anchor`);n(e,a),u(p(C.Item,{children:`Security`}),e,a);let o=i(`rue:component:anchor`);return n(e,o),u(p(C.Item,{children:`Consulting`}),e,o),e});u(p(C.Submenu,{children:h}),c,f);let g=l(`li`,e);n(e,g);let _=i(`rue:component:anchor`);n(g,_),u(p(C.Item,{children:`Products`}),g,_);let v=i(`rue:component:anchor`);n(g,v);let y=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`UI Kit`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{children:`WordPress themes`}),e,r);let a=i(`rue:component:anchor`);n(e,a),u(p(C.Item,{children:`WordPress plugins`}),e,a);let o=l(`li`,e);n(e,o);let c=i(`rue:component:anchor`);n(o,c),u(p(C.Item,{children:`Open source`}),o,c);let d=i(`rue:component:anchor`);n(o,d);let f=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`Auth management system`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{children:`VScode theme`}),e,r);let a=i(`rue:component:anchor`);return n(e,a),u(p(C.Item,{children:`Color picker app`}),e,a),e});return u(p(C.Submenu,{children:f}),o,d),e});u(p(C.Submenu,{children:y}),g,v);let b=l(`li`,e);n(e,b);let x=i(`rue:component:anchor`);n(b,x),u(p(C.Item,{children:`Company`}),b,x);let S=i(`rue:component:anchor`);n(b,S);let w=s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{children:`About us`}),e,t);let r=i(`rue:component:anchor`);n(e,r),u(p(C.Item,{children:`Contact us`}),e,r);let a=i(`rue:component:anchor`);n(e,a),u(p(C.Item,{children:`Privacy policy`}),e,a);let o=i(`rue:component:anchor`);return n(e,o),u(p(C.Item,{children:`Press kit`}),e,o),e});return u(p(C.Submenu,{children:w}),b,S),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
  <li>
    <Menu.Item>Solutions</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Design</Menu.Item>
      <Menu.Item>Development</Menu.Item>
      <Menu.Item>Hosting</Menu.Item>
      <Menu.Item>Domain register</Menu.Item>
    </Menu.Submenu>
  </li>
  <li>
    <Menu.Item>Enterprise</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>CRM software</Menu.Item>
      <Menu.Item>Marketing management</Menu.Item>
      <Menu.Item>Security</Menu.Item>
      <Menu.Item>Consulting</Menu.Item>
    </Menu.Submenu>
  </li>
  <li>
    <Menu.Item>Products</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>UI Kit</Menu.Item>
      <Menu.Item>WordPress themes</Menu.Item>
      <Menu.Item>WordPress plugins</Menu.Item>
      <li>
        <Menu.Item>Open source</Menu.Item>
        <Menu.Submenu>
          <Menu.Item>Auth management system</Menu.Item>
          <Menu.Item>VScode theme</Menu.Item>
          <Menu.Item>Color picker app</Menu.Item>
        </Menu.Submenu>
      </li>
    </Menu.Submenu>
  </li>
  <li>
    <Menu.Item>Company</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>About us</Menu.Item>
      <Menu.Item>Contact us</Menu.Item>
      <Menu.Item>Privacy policy</Menu.Item>
      <Menu.Item>Press kit</Menu.Item>
    </Menu.Submenu>
  </li>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,mn,_n))});let $=l(`div`,a);n(a,$),r($,`component-preview not-prose text-base-content my-6 lg:my-12`);let vn=l(`h2`,$);n($,vn),r(vn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(vn,d(`# 可折叠（响应式）`));let yn=i(`rue:component:anchor`);n($,yn),g(()=>{let t=p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});e(()=>u(t,$,yn))});let bn=i(`rue:slot:anchor`);n($,bn),g(()=>{let t=xe.value===`preview`?s(()=>{let e=m(),t=i(`rue:component:anchor`);return n(e,t),u(p(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:s(()=>{let e=m(),t=i(`rue:component:anchor`);n(e,t),u(p(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=l(`li`,e);n(e,r);let a=l(`details`,r);n(r,a);let o=l(`summary`,a);n(a,o),n(o,d(`Parent item`));let s=l(`ul`,a);n(a,s);let c=i(`rue:component:anchor`);n(s,c),u(p(C.Item,{as:`button`,children:`Submenu 1`}),s,c);let f=i(`rue:component:anchor`);n(s,f),u(p(C.Item,{as:`button`,children:`Submenu 2`}),s,f);let h=l(`li`,s);n(s,h);let g=l(`details`,h);n(h,g);let _=l(`summary`,g);n(g,_),n(_,d(`Parent`));let v=l(`ul`,g);n(g,v);let y=i(`rue:component:anchor`);n(v,y),u(p(C.Item,{as:`button`,children:`item 1`}),v,y);let b=i(`rue:component:anchor`);n(v,b),u(p(C.Item,{as:`button`,children:`item 2`}),v,b);let x=i(`rue:component:anchor`);return n(e,x),u(p(C.Item,{as:`button`,children:`Item 3`}),e,x),e})}),e,t),e}):s(()=>{let t=m(),r=i(`rue:component:anchor`);return n(t,r),g(()=>{let n=p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
  <Menu.Item as="button">Item 1</Menu.Item>
  <li>
    <details open>
      <summary>Parent item</summary>
      <ul>
        <Menu.Item as="button">Submenu 1</Menu.Item>
        <Menu.Item as="button">Submenu 2</Menu.Item>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <Menu.Item as="button">item 1</Menu.Item>
              <Menu.Item as="button">item 2</Menu.Item>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});e(()=>u(n,t,r))}),t});e(()=>u(t,$,bn))});let xn=l(`h2`,a);n(a,xn),n(xn,d(`API`));let Sn=l(`p`,a);n(a,Sn),r(Sn,`text-sm text-base-content/70`),n(Sn,d("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Cn=l(`h3`,a);n(a,Cn),n(Cn,d(`Menu.Item 链接相关`));let wn=i(`rue:component:anchor`);return n(a,wn),g(()=>{let t=p(T,{rows:ee});e(()=>u(t,a,wn))}),t})}),a,_),a})};export{E as default};
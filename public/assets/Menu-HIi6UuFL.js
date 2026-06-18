import{$ as e,Ht as t,J as n,Lt as r,Q as i,X as a,Xt as o,Z as s,at as c,c as l,et as u,l as d,pt as f,qt as p,s as m,st as h,t as g}from"./vapor-runtime-iQZthBPQ.js";import{a as _,n as v}from"./vapor-helpers-vapor-BjKHCvOa.js";import{i as y}from"./persistentSidebarPlayground-BfF7yM0K.js";import{t as b}from"./Code-CZqShVUj.js";import{t as x}from"./tabs-BBuGEPV7.js";import{t as S}from"./badge-BBo7V0Er.js";import{t as C}from"./menu-DP-3MZPe.js";import{r as w}from"./SidebarPlaygroundDesign-BcHYLGe4.js";var T=r=>d(l=>{let u=i(`div`,l);h(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=i(`table`,u);n(u,f),h(f,`table table-zebra`);let p=i(`thead`,f);n(f,p);let g=i(`tr`,p);n(p,g);let _=i(`th`,g);n(g,_),n(_,e(`属性`));let y=i(`th`,g);n(g,y),n(y,e(`说明`));let b=i(`th`,g);n(g,b),n(b,e(`类型`));let x=i(`th`,g);n(g,x),n(x,e(`默认值`));let S=i(`tbody`,f);n(f,S);let C=a(`rue:list:start`),w=a(`rue:list:end`);n(S,C),n(S,w);let T=new Map;return o(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,l,u,f)=>{m(d(()=>{let r=s(),l=i(`tr`,r);n(r,l),o(()=>{c(l,`key`,String(e.prop))});let u=i(`td`,l);n(l,u);let d=i(`code`,u);n(u,d);let f=a(`rue:slot:anchor`);n(d,f),o(()=>{let n=e.prop;t(()=>m(n,d,f))});let p=i(`td`,l);n(l,p);let h=a(`rue:slot:anchor`);n(p,h),o(()=>{let n=e.description;t(()=>m(n,p,h))});let g=i(`td`,l);n(l,g);let _=i(`code`,g);n(g,_);let v=a(`rue:slot:anchor`);n(_,v),o(()=>{let n=e.type;t(()=>m(n,_,v))});let y=i(`td`,l);n(l,y);let b=i(`code`,y);n(y,b);let x=a(`rue:slot:anchor`);return n(b,x),o(()=>{let n=e.defaultValue;t(()=>m(n,b,x))}),r}),r,l)}})}),u}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKey:Te,recommendedOpenKeys:Ee,compoundSelectedKeys:De,compoundOpenKeys:Oe,recommendedMenuClassName:ke,fileTreeMenuClassName:Ae,toggleDropdownByClass:je,menuData:Me,menuItems:Ne}=_(`useSetup:0:0`,()=>p(()=>({tRecommended:_(`ref:1:0`,()=>r(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>r(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>r(`preview`)),tBasic:_(`ref:1:3`,()=>r(`preview`)),tResponsive:_(`ref:1:4`,()=>r(`preview`)),tIconOnly:_(`ref:1:5`,()=>r(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>r(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>r(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>r(`preview`)),tSizes:_(`ref:1:9`,()=>r(`preview`)),tDisabled:_(`ref:1:10`,()=>r(`preview`)),tIcons:_(`ref:1:11`,()=>r(`preview`)),tIconsBadge:_(`ref:1:12`,()=>r(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>r(`preview`)),tTitle:_(`ref:1:14`,()=>r(`preview`)),tTitleParent:_(`ref:1:15`,()=>r(`preview`)),tSubmenu:_(`ref:1:16`,()=>r(`preview`)),tCollapsible:_(`ref:1:17`,()=>r(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>r(`preview`)),tFileTree:_(`ref:1:19`,()=>r(`preview`)),tActiveItem:_(`ref:1:20`,()=>r(`preview`)),tHorizontal:_(`ref:1:21`,()=>r(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>r(`preview`)),tMega:_(`ref:1:23`,()=>r(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>r(`preview`)),tArray:_(`ref:1:25`,()=>r(`preview`)),tArrayInternal:_(`ref:1:26`,()=>r(`preview`)),tNavigation:_(`ref:1:27`,()=>r(`preview`)),recommendedSelectedKey:_(`ref:1:28`,()=>r(`overview`)),recommendedOpenKeys:_(`ref:1:29`,()=>r([`workspace`])),compoundSelectedKeys:_(`ref:1:30`,()=>r([`profile`])),compoundOpenKeys:_(`ref:1:31`,()=>r([`settings`])),recommendedMenuClassName:`bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content`,fileTreeMenuClassName:`bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0`,toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Pe=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Fe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return d(r=>{let p=s(),_=a(`rue:component:anchor`);return n(p,_),m(g(w,{children:d(()=>{let r=s(),p=i(`div`,r);n(r,p),h(p,`max-w-none prose prose-sm md:prose-base`);let _=i(`h1`,p);n(p,_),n(_,e(`Menu 菜单`));let w=i(`p`,p);n(p,w),h(w,`text-sm mt-3 mb-3`),n(w,e("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let A=i(`div`,p);n(p,A),h(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ie=i(`h2`,A);n(A,Ie),h(Ie,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Ie,e(`# 推荐：items 数据驱动导航`));let Le=i(`p`,A);n(A,Le),h(Le,`mb-3 text-sm text-base-content/70`),n(Le,e(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Re=a(`rue:component:anchor`);n(A,Re),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});t(()=>m(e,A,Re))});let ze=a(`rue:slot:anchor`);n(A,ze),o(()=>{let e=E.value===`preview`?d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(C,{mode:`inline`,className:ke,items:Pe,selectedKeys:[Te.value],openKeys:Ee.value,onSelect:e=>Te.value=String(e.key),onOpenChange:e=>Ee.value=e});t(()=>m(n,e,r))}),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});t(()=>m(n,e,r))}),e});t(()=>m(e,A,ze))});let j=i(`div`,p);n(p,j),h(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Be=i(`h2`,j);n(j,Be),h(Be,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Be,e(`# 推荐：多选、分组与分割线`));let Ve=i(`p`,j);n(j,Ve),h(Ve,`mb-3 text-sm text-base-content/70`),n(Ve,e("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let He=a(`rue:component:anchor`);n(j,He),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});t(()=>m(e,j,He))});let Ue=a(`rue:slot:anchor`);n(j,Ue),o(()=>{let e=te.value===`preview`?d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(C,{className:`bg-base-200 rounded-box w-80`,items:Fe,multiple:!0,defaultSelectedKeys:[`mentions`,`archived`]});t(()=>m(n,e,r))}),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`const items = [
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
/>`});t(()=>m(n,e,r))}),e});t(()=>m(e,j,Ue))});let M=i(`div`,p);n(p,M),h(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let We=i(`h2`,M);n(M,We),h(We,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(We,e(`# 推荐：组合式增强 API`));let Ge=i(`p`,M);n(M,Ge),h(Ge,`mb-3 text-sm text-base-content/70`),n(Ge,e("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ke=a(`rue:component:anchor`);n(M,Ke),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});t(()=>m(e,M,Ke))});let qe=a(`rue:slot:anchor`);n(M,qe),o(()=>{let e=D.value===`preview`?d(()=>{let e=s(),r=a(`rue:component:anchor`);n(e,r);let i=d(()=>{let e=s(),r=a(`rue:component:anchor`);n(e,r);let i=d(()=>{let e=s(),r=a(`rue:component:anchor`);n(e,r),o(()=>{let n=g(C.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});t(()=>m(n,e,r))});let i=a(`rue:component:anchor`);return n(e,i),o(()=>{let n=g(C.Item,{eventKey:`notifications`,extra:y(S,{size:`xs`,children:`2`}),children:`Notifications`});t(()=>m(n,e,i))}),e});m(g(C.ItemGroup,{title:`Account`,children:i}),e,r);let c=a(`rue:component:anchor`);n(e,c),m(g(C.Divider,{}),e,c);let l=a(`rue:component:anchor`);n(e,l);let u=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{eventKey:`security`,children:`Security`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,r),e});return o(()=>{let n=g(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:u});t(()=>m(n,e,l))}),e});return o(()=>{let n=g(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:De.value,openKeys:Oe.value,onSelect:e=>De.value=e.selectedKeys,onOpenChange:e=>Oe.value=e,children:i});t(()=>m(n,e,r))}),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,M,qe))});let Je=i(`div`,p);n(p,Je),h(Je,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),n(Je,e(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=i(`div`,p);n(p,N),h(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ye=i(`h2`,N);n(N,Ye),h(Ye,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Ye,e(`# 导航跳转`));let Xe=a(`rue:component:anchor`);n(N,Xe),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});t(()=>m(e,N,Xe))});let Ze=a(`rue:slot:anchor`);n(N,Ze),o(()=>{let e=we.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,r);let i=a(`rue:component:anchor`);return n(e,i),m(g(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,i),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,N,Ze))});let P=i(`div`,p);n(p,P),h(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qe=i(`h2`,P);n(P,Qe),h(Qe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Qe,e(`# Menu 通过数据渲染（数组）`));let $e=a(`rue:component:anchor`);n(P,$e),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});t(()=>m(e,P,$e))});let et=a(`rue:slot:anchor`);n(P,et),o(()=>{let e=Se.value===`preview`?d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),m(g(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:d(()=>{let e=s(),r=a(`rue:list:start`),u=a(`rue:list:end`);n(e,r),n(e,u);let f=new Map;return o(()=>{f=v({items:Me||[],getKey:(e,t)=>t,elements:f,parent:r.parentNode,before:u,singleRoot:!0,start:r,renderItem:(e,r,u,f,p)=>{m(d(()=>{let r=s(),u=i(`li`,r);n(r,u),o(()=>{c(u,`key`,String(p))});let f=a(`rue:component:anchor`);n(u,f),m(g(C.Item,{children:e.label}),u,f);let h=a(`rue:component:anchor`);return n(u,h),m(g(C.Submenu,{children:d(()=>{let r=s(),u=a(`rue:list:start`),f=a(`rue:list:end`);n(r,u),n(r,f);let p=new Map;return o(()=>{p=v({items:e.children||[],getKey:(e,t)=>t,elements:p,parent:u.parentNode,before:f,start:u,renderItem:(e,r,u,f,p)=>{l(d(typeof e==`string`?()=>{let r=s(),i=a(`rue:component:anchor`);return n(r,i),o(()=>{let n=g(C.Item,{key:p,children:e});t(()=>m(n,r,i))}),r}:()=>{let t=s(),r=i(`li`,t);n(t,r),o(()=>{c(r,`key`,String(p))});let u=a(`rue:component:anchor`);n(r,u),m(g(C.Item,{children:e.label}),r,u);let f=a(`rue:component:anchor`);return n(r,f),m(g(C.Submenu,{children:d(()=>{let t=s(),r=a(`rue:list:start`),i=a(`rue:list:end`);n(t,r),n(t,i);let c=new Map;return o(()=>{c=v({items:e.children||[],getKey:(e,t)=>t,elements:c,parent:r.parentNode,before:i,start:r,renderItem:(e,t,n,r,i)=>{l(g(C.Item,{key:i,children:e}),t,n,r)}})}),t})}),r,f),t}),r,u,f)}})}),r})}),u,h),r}),r,u)}})}),e})}),e,r),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,P,et))});let F=i(`div`,p);n(p,F),h(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let tt=i(`h2`,F);n(F,tt),h(tt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(tt,e(`# Menu 通过数据渲染（数组，组件内部）`));let nt=a(`rue:component:anchor`);n(F,nt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});t(()=>m(e,F,nt))});let rt=a(`rue:slot:anchor`);n(F,rt),o(()=>{let e=Ce.value===`preview`?d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(C,{items:Ne,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});t(()=>m(n,e,r))}),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});t(()=>m(n,e,r))}),e});t(()=>m(e,F,rt))});let I=i(`div`,p);n(p,I),h(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let it=i(`h2`,I);n(I,it),h(it,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(it,e(`# Menu`));let at=a(`rue:component:anchor`);n(I,at),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});t(()=>m(e,I,at))});let ot=a(`rue:slot:anchor`);n(I,ot),o(()=>{let e=ne.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{as:`button`,children:`Item 2`}),e,r);let i=a(`rue:component:anchor`);return n(e,i),m(g(C.Item,{as:`button`,children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,I,ot))});let st=i(`div`,p);n(p,st),h(st,`component-preview not-prose text-base-content my-6 lg:my-12`);let ct=i(`h2`,st);n(st,ct),h(ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(ct,e(`# 响应式：小屏垂直，大屏水平`));let lt=a(`rue:component:anchor`);n(st,lt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});t(()=>m(e,st,lt))});let ut=a(`rue:slot:anchor`);n(st,ut),o(()=>{let e=re.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{as:`button`,children:`Item 2`}),e,r);let i=a(`rue:component:anchor`);return n(e,i),m(g(C.Item,{as:`button`,children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,st,ut))});let L=i(`div`,p);n(p,L),h(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let dt=i(`h2`,L);n(L,dt),h(dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(dt,e(`# 仅图标`));let ft=a(`rue:component:anchor`);n(L,ft),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});t(()=>m(e,L,ft))});let pt=a(`rue:slot:anchor`);n(L,pt),o(()=>{let e=ie.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t);let r=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});m(g(C.Item,{as:`button`,children:r}),e,t);let o=a(`rue:component:anchor`);n(e,o);let l=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});m(g(C.Item,{as:`button`,children:l}),e,o);let u=a(`rue:component:anchor`);n(e,u);let f=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return m(g(C.Item,{as:`button`,children:f}),e,u),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,L,pt))});let R=i(`div`,p);n(p,R),h(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let mt=i(`h2`,R);n(R,mt),h(mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(mt,e(`# 仅图标（水平）`));let ht=a(`rue:component:anchor`);n(R,ht),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});t(()=>m(e,R,ht))});let gt=a(`rue:slot:anchor`);n(R,gt),o(()=>{let e=ae.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t);let r=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});m(g(C.Item,{as:`button`,children:r}),e,t);let o=a(`rue:component:anchor`);n(e,o);let l=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});m(g(C.Item,{as:`button`,children:l}),e,o);let u=a(`rue:component:anchor`);n(e,u);let f=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return m(g(C.Item,{as:`button`,children:f}),e,u),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,R,gt))});let z=i(`div`,p);n(p,z),h(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let _t=i(`h2`,z);n(z,_t),h(_t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(_t,e(`# 仅图标（带 tooltip）`));let vt=a(`rue:component:anchor`);n(z,vt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});t(()=>m(e,z,vt))});let yt=a(`rue:slot:anchor`);n(z,yt),o(()=>{let e=oe.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t);let r=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),e});m(g(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:r}),e,t);let o=a(`rue:component:anchor`);n(e,o);let l=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});m(g(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:l}),e,o);let u=a(`rue:component:anchor`);n(e,u);let f=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return m(g(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:f}),e,u),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,z,yt))});let B=i(`div`,p);n(p,B),h(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let bt=i(`h2`,B);n(B,bt),h(bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(bt,e(`# 仅图标（水平，tooltip）`));let xt=a(`rue:component:anchor`);n(B,xt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});t(()=>m(e,B,xt))});let St=a(`rue:slot:anchor`);n(B,St),o(()=>{let e=O.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t);let r=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),e});m(g(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:r}),e,t);let o=a(`rue:component:anchor`);n(e,o);let l=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});m(g(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:l}),e,o);let u=a(`rue:component:anchor`);n(e,u);let f=d(()=>{let e=s(),t=i(`svg`,e);n(e,t),c(t,`xmlns`,`http://www.w3.org/2000/svg`),h(t,`h-5 w-5`),c(t,`fill`,`none`),c(t,`viewBox`,`0 0 24 24`),c(t,`stroke`,`currentColor`);let r=i(`path`,t);return n(t,r),c(r,`strokeLinecap`,`round`),c(r,`strokeLinejoin`,`round`),c(r,`strokeWidth`,`2`),c(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),e});return m(g(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:f}),e,u),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,B,St))});let V=i(`div`,p);n(p,V),h(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ct=i(`h2`,V);n(V,Ct),h(Ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Ct,e(`# Menu 尺寸`));let wt=a(`rue:component:anchor`);n(V,wt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});t(()=>m(e,V,wt))});let Tt=a(`rue:slot:anchor`);n(V,Tt),o(()=>{let e=se.value===`preview`?d(()=>{let e=s(),t=i(`div`,e);n(e,t),h(t,`grid gap-6`);let r=a(`rue:component:anchor`);n(t,r),m(g(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Xsmall 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{as:`button`,children:`Xsmall 2`}),e,r),e})}),t,r);let o=a(`rue:component:anchor`);n(t,o),m(g(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Small 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{as:`button`,children:`Small 2`}),e,r),e})}),t,o);let c=a(`rue:component:anchor`);n(t,c),m(g(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Medium 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{as:`button`,children:`Medium 2`}),e,r),e})}),t,c);let l=a(`rue:component:anchor`);n(t,l),m(g(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Large 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{as:`button`,children:`Large 2`}),e,r),e})}),t,l);let u=a(`rue:component:anchor`);return n(t,u),m(g(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Xlarge 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{as:`button`,children:`Xlarge 2`}),e,r),e})}),t,u),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});t(()=>m(n,e,r))}),e});t(()=>m(e,V,Tt))});let H=i(`div`,p);n(p,H),h(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let Et=i(`h2`,H);n(H,Et),h(Et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Et,e(`# 禁用项目`));let Dt=a(`rue:component:anchor`);n(H,Dt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});t(()=>m(e,H,Dt))});let Ot=a(`rue:slot:anchor`);n(H,Ot),o(()=>{let e=k.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Enabled item`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,r);let i=a(`rue:component:anchor`);return n(e,i),m(g(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,i),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,H,Ot))});let U=i(`div`,p);n(p,U),h(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let kt=i(`h2`,U);n(U,kt),h(kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(kt,e(`# 带图标`));let At=a(`rue:component:anchor`);n(U,At),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});t(()=>m(e,U,At))});let jt=a(`rue:slot:anchor`);n(U,jt),o(()=>{let r=ce.value===`preview`?d(()=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let t=s(),r=a(`rue:component:anchor`);n(t,r);let o=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),h(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n(t,e(`Item 2`)),t});m(g(C.Item,{as:`button`,children:o}),t,r);let l=a(`rue:component:anchor`);n(t,l);let u=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),h(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n(t,e(`Item 1`)),t});m(g(C.Item,{as:`button`,children:u}),t,l);let f=a(`rue:component:anchor`);n(t,f);let p=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),h(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n(t,e(`Item 3`)),t});return m(g(C.Item,{as:`button`,children:p}),t,f),t})}),t,r),t}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,U,jt))});let W=i(`div`,p);n(p,W),h(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Mt=i(`h2`,W);n(W,Mt),h(Mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Mt,e(`# 带图标与徽章（响应式）`));let Nt=a(`rue:component:anchor`);n(W,Nt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});t(()=>m(e,W,Nt))});let Pt=a(`rue:slot:anchor`);n(W,Pt),o(()=>{let r=le.value===`preview`?d(()=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),m(g(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:d(()=>{let t=s(),r=a(`rue:component:anchor`);n(t,r);let o=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),h(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let o=i(`path`,r);n(r,o),c(o,`strokeLinecap`,`round`),c(o,`strokeLinejoin`,`round`),c(o,`strokeWidth`,`2`),c(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n(t,e(`Inbox`));let l=a(`rue:component:anchor`);return n(t,l),m(g(S,{size:`xs`,children:`99+`}),t,l),t});m(g(C.Item,{as:`button`,children:o}),t,r);let l=a(`rue:component:anchor`);n(t,l);let p=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),h(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let o=i(`path`,r);n(r,o),c(o,`strokeLinecap`,`round`),c(o,`strokeLinejoin`,`round`),c(o,`strokeWidth`,`2`),c(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n(t,e(`Updates`));let l=u(t);n(t,l),f(l,` `);let d=a(`rue:component:anchor`);return n(t,d),m(g(S,{size:`xs`,variant:`warning`,children:`NEW`}),t,d),t});m(g(C.Item,{as:`button`,children:p}),t,l);let _=a(`rue:component:anchor`);n(t,_);let v=d(()=>{let t=s();n(t,e(`Stats`));let r=a(`rue:component:anchor`);return n(t,r),m(g(S,{size:`xs`,variant:`info`}),t,r),t});return m(g(C.Item,{as:`button`,children:v}),t,_),t})}),t,r),t}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,W,Pt))});let G=i(`div`,p);n(p,G),h(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ft=i(`h2`,G);n(G,Ft),h(Ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Ft,e(`# 去除内边距和圆角`));let It=a(`rue:component:anchor`);n(G,It),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});t(()=>m(e,G,It))});let Lt=a(`rue:slot:anchor`);n(G,Lt),o(()=>{let e=ue.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`Item 2`}),e,r);let i=a(`rue:component:anchor`);return n(e,i),m(g(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,G,Lt))});let K=i(`div`,p);n(p,K),h(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Rt=i(`h2`,K);n(K,Rt),h(Rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Rt,e(`# 带标题`));let zt=a(`rue:component:anchor`);n(K,zt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});t(()=>m(e,K,zt))});let Bt=a(`rue:slot:anchor`);n(K,Bt),o(()=>{let e=de.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Title,{children:`Title`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`Item 1`}),e,r);let i=a(`rue:component:anchor`);n(e,i),m(g(C.Item,{children:`Item 2`}),e,i);let o=a(`rue:component:anchor`);return n(e,o),m(g(C.Item,{children:`Item 3`}),e,o),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,K,Bt))});let q=i(`div`,p);n(p,q),h(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Vt=i(`h2`,q);n(q,Vt),h(Vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Vt,e(`# 标题作为父级`));let Ht=a(`rue:component:anchor`);n(q,Ht),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});t(()=>m(e,q,Ht))});let Ut=a(`rue:slot:anchor`);n(q,Ut),o(()=>{let e=fe.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=i(`li`,e);n(e,t);let r=a(`rue:component:anchor`);n(t,r),m(g(C.Title,{as:`h2`,children:`Title`}),t,r);let o=i(`ul`,t);n(t,o);let c=a(`rue:component:anchor`);n(o,c),m(g(C.Item,{children:`Item 1`}),o,c);let l=a(`rue:component:anchor`);n(o,l),m(g(C.Item,{children:`Item 2`}),o,l);let u=a(`rue:component:anchor`);return n(o,u),m(g(C.Item,{children:`Item 3`}),o,u),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,q,Ut))});let J=i(`div`,p);n(p,J),h(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Wt=i(`h2`,J);n(J,Wt),h(Wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Wt,e(`# 子菜单`));let Gt=a(`rue:component:anchor`);n(J,Gt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});t(()=>m(e,J,Gt))});let Kt=a(`rue:slot:anchor`);n(J,Kt),o(()=>{let e=pe.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=i(`li`,e);n(e,r);let o=a(`rue:component:anchor`);n(r,o),m(g(C.Item,{as:`button`,children:`Parent`}),r,o);let c=a(`rue:component:anchor`);n(r,c);let l=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{as:`button`,children:`Submenu 2`}),e,r);let o=i(`li`,e);n(e,o);let c=a(`rue:component:anchor`);n(o,c),m(g(C.Item,{as:`button`,children:`Parent`}),o,c);let l=a(`rue:component:anchor`);n(o,l);let u=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{as:`button`,children:`Submenu 2`}),e,r),e});return m(g(C.Submenu,{children:u}),o,l),e});m(g(C.Submenu,{children:l}),r,c);let u=a(`rue:component:anchor`);return n(e,u),m(g(C.Item,{as:`button`,children:`Item 3`}),e,u),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,J,Kt))});let Y=i(`div`,p);n(p,Y),h(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let qt=i(`h2`,Y);n(Y,qt),h(qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(qt,e(`# 可折叠子菜单`));let Jt=a(`rue:component:anchor`);n(Y,Jt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});t(()=>m(e,Y,Jt))});let Yt=a(`rue:slot:anchor`);n(Y,Yt),o(()=>{let r=me.value===`preview`?d(()=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let t=s(),r=a(`rue:component:anchor`);n(t,r),m(g(C.Item,{as:`button`,children:`Item 1`}),t,r);let o=i(`li`,t);n(t,o);let c=i(`details`,o);n(o,c);let l=i(`summary`,c);n(c,l),n(l,e(`Parent`));let u=i(`ul`,c);n(c,u);let d=a(`rue:component:anchor`);n(u,d),m(g(C.Item,{as:`button`,children:`Submenu 1`}),u,d);let f=a(`rue:component:anchor`);n(u,f),m(g(C.Item,{as:`button`,children:`Submenu 2`}),u,f);let p=i(`li`,u);n(u,p);let h=i(`details`,p);n(p,h);let _=i(`summary`,h);n(h,_),n(_,e(`Parent`));let v=i(`ul`,h);n(h,v);let y=a(`rue:component:anchor`);n(v,y),m(g(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=a(`rue:component:anchor`);n(v,b),m(g(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=a(`rue:component:anchor`);return n(t,x),m(g(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,r),t}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,Y,Yt))});let X=i(`div`,p);n(p,X),h(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xt=i(`h2`,X);n(X,Xt),h(Xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(Xt,e(`# 通过类名控制展开（JS）`));let Zt=a(`rue:component:anchor`);n(X,Zt),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});t(()=>m(e,X,Zt))});let Qt=a(`rue:slot:anchor`);n(X,Qt),o(()=>{let e=he.value===`preview`?d(()=>{let e=s(),r=i(`div`,e);n(e,r),h(r,`grid gap-6`);let c=a(`rue:component:anchor`);n(r,c),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let r=i(`li`,e);n(e,r);let o=a(`rue:component:anchor`);n(r,o),m(g(C.DropdownToggle,{onClick:je,children:`Parent`}),r,o);let c=a(`rue:component:anchor`);n(r,c);let l=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Submenu 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{children:`Submenu 2`}),e,r),e});return m(g(C.Dropdown,{children:l}),r,c),e})}),r,c);let l=a(`rue:component:anchor`);return n(r,l),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`Item 1`}),e,r);let c=i(`li`,e);n(e,c);let l=a(`rue:component:anchor`);n(c,l),o(()=>{let e=g(C.DropdownToggle,{show:!0,onClick:je,children:`Parent`});t(()=>m(e,c,l))});let u=a(`rue:component:anchor`);n(c,u);let f=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Submenu 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{children:`Submenu 2`}),e,r),e});return o(()=>{let e=g(C.Dropdown,{show:!0,children:f});t(()=>m(e,c,u))}),e})}),r,l),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,X,Qt))});let Z=i(`div`,p);n(p,Z),h(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let $t=i(`h2`,Z);n(Z,$t),h($t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n($t,e(`# 文件树`));let en=a(`rue:component:anchor`);n(Z,en),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});t(()=>m(e,Z,en))});let tn=a(`rue:slot:anchor`);n(Z,tn),o(()=>{let r=ge.value===`preview`?d(()=>{let r=s(),l=a(`rue:component:anchor`);n(r,l);let u=d(()=>{let t=s(),r=a(`rue:component:anchor`);n(t,r);let o=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`strokeWidth`,`1.5`),c(r,`stroke`,`currentColor`),h(r,`w-4 h-4`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),n(t,e(`resume.pdf`)),t});m(g(C.Item,{as:`button`,children:o}),t,r);let l=i(`li`,t);n(t,l);let u=i(`details`,l);n(l,u);let f=i(`summary`,u);n(u,f);let p=i(`svg`,f);n(f,p),c(p,`xmlns`,`http://www.w3.org/2000/svg`),c(p,`fill`,`none`),c(p,`viewBox`,`0 0 24 24`),c(p,`strokeWidth`,`1.5`),c(p,`stroke`,`currentColor`),h(p,`w-4 h-4`);let _=i(`path`,p);n(p,_),c(_,`strokeLinecap`,`round`),c(_,`strokeLinejoin`,`round`),c(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),n(f,e(`My Files`));let v=i(`ul`,u);n(u,v);let y=a(`rue:component:anchor`);n(v,y);let b=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`strokeWidth`,`1.5`),c(r,`stroke`,`currentColor`),h(r,`w-4 h-4`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),n(t,e(`Project-final.psd`)),t});m(g(C.Item,{as:`button`,children:b}),v,y);let x=a(`rue:component:anchor`);n(v,x);let S=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`strokeWidth`,`1.5`),c(r,`stroke`,`currentColor`),h(r,`w-4 h-4`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),n(t,e(`Project-final-2.psd`)),t});m(g(C.Item,{as:`button`,children:S}),v,x);let w=i(`li`,v);n(v,w);let T=i(`details`,w);n(w,T);let ee=i(`summary`,T);n(T,ee);let E=i(`svg`,ee);n(ee,E),c(E,`xmlns`,`http://www.w3.org/2000/svg`),c(E,`fill`,`none`),c(E,`viewBox`,`0 0 24 24`),c(E,`strokeWidth`,`1.5`),c(E,`stroke`,`currentColor`),h(E,`w-4 h-4`);let te=i(`path`,E);n(E,te),c(te,`strokeLinecap`,`round`),c(te,`strokeLinejoin`,`round`),c(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),n(ee,e(`Images`));let D=i(`ul`,T);n(T,D);let ne=a(`rue:component:anchor`);n(D,ne);let re=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`strokeWidth`,`1.5`),c(r,`stroke`,`currentColor`),h(r,`w-4 h-4`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),n(t,e(`Screenshot1.png`)),t});m(g(C.Item,{as:`button`,children:re}),D,ne);let ie=a(`rue:component:anchor`);n(D,ie);let ae=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`strokeWidth`,`1.5`),c(r,`stroke`,`currentColor`),h(r,`w-4 h-4`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),n(t,e(`Screenshot2.png`)),t});m(g(C.Item,{as:`button`,children:ae}),D,ie);let oe=i(`li`,D);n(D,oe);let O=i(`details`,oe);n(oe,O);let se=i(`summary`,O);n(O,se);let k=i(`svg`,se);n(se,k),c(k,`xmlns`,`http://www.w3.org/2000/svg`),c(k,`fill`,`none`),c(k,`viewBox`,`0 0 24 24`),c(k,`strokeWidth`,`1.5`),c(k,`stroke`,`currentColor`),h(k,`w-4 h-4`);let ce=i(`path`,k);n(k,ce),c(ce,`strokeLinecap`,`round`),c(ce,`strokeLinejoin`,`round`),c(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),n(se,e(`Others`));let le=i(`ul`,O);n(O,le);let ue=a(`rue:component:anchor`);n(le,ue);let de=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`strokeWidth`,`1.5`),c(r,`stroke`,`currentColor`),h(r,`w-4 h-4`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),n(t,e(`Screenshot3.png`)),t});m(g(C.Item,{as:`button`,children:de}),le,ue);let fe=a(`rue:component:anchor`);n(t,fe);let pe=d(()=>{let t=s(),r=i(`svg`,t);n(t,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`strokeWidth`,`1.5`),c(r,`stroke`,`currentColor`),h(r,`w-4 h-4`);let a=i(`path`,r);return n(r,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),n(t,e(`reports-final-2.pdf`)),t});return m(g(C.Item,{as:`button`,children:pe}),t,fe),t});return o(()=>{let e=g(C,{size:`xs`,className:Ae,children:u});t(()=>m(e,r,l))}),r}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,Z,tn))});let Q=i(`div`,p);n(p,Q),h(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let nn=i(`h2`,Q);n(Q,nn),h(nn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(nn,e(`# 激活项`));let rn=a(`rue:component:anchor`);n(Q,rn),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});t(()=>m(e,Q,rn))});let an=a(`rue:slot:anchor`);n(Q,an),o(()=>{let e=_e.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{className:`menu-active`,children:`Item 2`}),e,r);let i=a(`rue:component:anchor`);return n(e,i),m(g(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,Q,an))});let on=i(`div`,p);n(p,on),h(on,`component-preview not-prose text-base-content my-6 lg:my-12`);let sn=i(`h2`,on);n(on,sn),h(sn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(sn,e(`# 水平菜单`));let cn=a(`rue:component:anchor`);n(on,cn),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});t(()=>m(e,on,cn))});let ln=a(`rue:slot:anchor`);n(on,ln),o(()=>{let e=ve.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`Item 2`}),e,r);let i=a(`rue:component:anchor`);return n(e,i),m(g(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,on,ln))});let un=i(`div`,p);n(p,un),h(un,`component-preview not-prose text-base-content my-6 lg:my-12`);let dn=i(`h2`,un);n(un,dn),h(dn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(dn,e(`# 水平子菜单`));let fn=a(`rue:component:anchor`);n(un,fn),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});t(()=>m(e,un,fn))});let pn=a(`rue:slot:anchor`);n(un,pn),o(()=>{let e=ye.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let r=i(`li`,e);n(e,r);let o=a(`rue:component:anchor`);n(r,o),m(g(C.Item,{children:`Parent`}),r,o);let c=a(`rue:component:anchor`);n(r,c);let l=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Submenu 1`}),e,t);let r=a(`rue:component:anchor`);return n(e,r),m(g(C.Item,{children:`Submenu 2`}),e,r),e});m(g(C.Submenu,{children:l}),r,c);let u=a(`rue:component:anchor`);return n(e,u),m(g(C.Item,{children:`Item 3`}),e,u),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,un,pn))});let mn=i(`div`,p);n(p,mn),h(mn,`component-preview not-prose text-base-content my-6 lg:my-12`);let hn=i(`h2`,mn);n(mn,hn),h(hn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(hn,e(`# Mega 菜单（响应式）`));let gn=a(`rue:component:anchor`);n(mn,gn),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});t(()=>m(e,mn,gn))});let _n=a(`rue:slot:anchor`);n(mn,_n),o(()=>{let e=be.value===`preview`?d(()=>{let e=s(),t=a(`rue:component:anchor`);return n(e,t),m(g(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:d(()=>{let e=s(),t=i(`li`,e);n(e,t);let r=a(`rue:component:anchor`);n(t,r),m(g(C.Item,{children:`Solutions`}),t,r);let o=a(`rue:component:anchor`);n(t,o);let c=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Design`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`Development`}),e,r);let i=a(`rue:component:anchor`);n(e,i),m(g(C.Item,{children:`Hosting`}),e,i);let o=a(`rue:component:anchor`);return n(e,o),m(g(C.Item,{children:`Domain register`}),e,o),e});m(g(C.Submenu,{children:c}),t,o);let l=i(`li`,e);n(e,l);let u=a(`rue:component:anchor`);n(l,u),m(g(C.Item,{children:`Enterprise`}),l,u);let f=a(`rue:component:anchor`);n(l,f);let p=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`CRM software`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`Marketing management`}),e,r);let i=a(`rue:component:anchor`);n(e,i),m(g(C.Item,{children:`Security`}),e,i);let o=a(`rue:component:anchor`);return n(e,o),m(g(C.Item,{children:`Consulting`}),e,o),e});m(g(C.Submenu,{children:p}),l,f);let h=i(`li`,e);n(e,h);let _=a(`rue:component:anchor`);n(h,_),m(g(C.Item,{children:`Products`}),h,_);let v=a(`rue:component:anchor`);n(h,v);let y=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`UI Kit`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`WordPress themes`}),e,r);let o=a(`rue:component:anchor`);n(e,o),m(g(C.Item,{children:`WordPress plugins`}),e,o);let c=i(`li`,e);n(e,c);let l=a(`rue:component:anchor`);n(c,l),m(g(C.Item,{children:`Open source`}),c,l);let u=a(`rue:component:anchor`);n(c,u);let f=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`Auth management system`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`VScode theme`}),e,r);let i=a(`rue:component:anchor`);return n(e,i),m(g(C.Item,{children:`Color picker app`}),e,i),e});return m(g(C.Submenu,{children:f}),c,u),e});m(g(C.Submenu,{children:y}),h,v);let b=i(`li`,e);n(e,b);let x=a(`rue:component:anchor`);n(b,x),m(g(C.Item,{children:`Company`}),b,x);let S=a(`rue:component:anchor`);n(b,S);let w=d(()=>{let e=s(),t=a(`rue:component:anchor`);n(e,t),m(g(C.Item,{children:`About us`}),e,t);let r=a(`rue:component:anchor`);n(e,r),m(g(C.Item,{children:`Contact us`}),e,r);let i=a(`rue:component:anchor`);n(e,i),m(g(C.Item,{children:`Privacy policy`}),e,i);let o=a(`rue:component:anchor`);return n(e,o),m(g(C.Item,{children:`Press kit`}),e,o),e});return m(g(C.Submenu,{children:w}),b,S),e})}),e,t),e}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,mn,_n))});let $=i(`div`,p);n(p,$),h($,`component-preview not-prose text-base-content my-6 lg:my-12`);let vn=i(`h2`,$);n($,vn),h(vn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),n(vn,e(`# 可折叠（响应式）`));let yn=a(`rue:component:anchor`);n($,yn),o(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});t(()=>m(e,$,yn))});let bn=a(`rue:slot:anchor`);n($,bn),o(()=>{let r=xe.value===`preview`?d(()=>{let t=s(),r=a(`rue:component:anchor`);return n(t,r),m(g(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:d(()=>{let t=s(),r=a(`rue:component:anchor`);n(t,r),m(g(C.Item,{as:`button`,children:`Item 1`}),t,r);let o=i(`li`,t);n(t,o);let c=i(`details`,o);n(o,c);let l=i(`summary`,c);n(c,l),n(l,e(`Parent item`));let u=i(`ul`,c);n(c,u);let d=a(`rue:component:anchor`);n(u,d),m(g(C.Item,{as:`button`,children:`Submenu 1`}),u,d);let f=a(`rue:component:anchor`);n(u,f),m(g(C.Item,{as:`button`,children:`Submenu 2`}),u,f);let p=i(`li`,u);n(u,p);let h=i(`details`,p);n(p,h);let _=i(`summary`,h);n(h,_),n(_,e(`Parent`));let v=i(`ul`,h);n(h,v);let y=a(`rue:component:anchor`);n(v,y),m(g(C.Item,{as:`button`,children:`item 1`}),v,y);let b=a(`rue:component:anchor`);n(v,b),m(g(C.Item,{as:`button`,children:`item 2`}),v,b);let x=a(`rue:component:anchor`);return n(t,x),m(g(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,r),t}):d(()=>{let e=s(),r=a(`rue:component:anchor`);return n(e,r),o(()=>{let n=g(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,$,bn))});let xn=i(`h2`,p);n(p,xn),n(xn,e(`API`));let Sn=i(`p`,p);n(p,Sn),h(Sn,`text-sm text-base-content/70`),n(Sn,e("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Cn=i(`h3`,p);n(p,Cn),n(Cn,e(`Menu.Item 链接相关`));let wn=a(`rue:component:anchor`);return n(p,wn),o(()=>{let e=g(T,{rows:ee});t(()=>m(e,p,wn))}),r})}),p,_),p})};export{E as default};
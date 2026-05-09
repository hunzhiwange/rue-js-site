import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,l as u,pt as d,rt as f,t as p,u as m,ut as h}from"./vapor-runtime-BZZbPG7x.js";import{a as g,n as _}from"./vapor-helpers-vapor-DuGQh50d.js";import{t as v}from"./src-DP0sEeZS.js";import{n as y}from"./SidebarPlaygroundDesign-DJfSSlM7.js";import{t as b}from"./Code-C8wy38VS.js";import{t as x}from"./tabs-B-QPmbH8.js";import{t as S}from"./badge-C9jCgbat.js";import{t as C}from"./menu-1_KVGd2s.js";var ee=({rows:r})=>m(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=e(`table`);l(s,u),o(u,`table table-zebra`);let f=e(`thead`);l(u,f);let p=e(`tr`);l(f,p);let h=e(`th`);l(p,h),l(h,n(`属性`));let g=e(`th`);l(p,g),l(g,n(`说明`));let v=e(`th`);l(p,v),l(v,n(`类型`));let y=e(`th`);l(p,y),l(y,n(`默认值`));let b=e(`tbody`);l(u,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return d(()=>{C=_({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,u)=>{c(m(()=>{let r=a(),o=e(`tr`);l(r,o),d(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let u=e(`code`);l(s,u);let f=i(`rue:slot:anchor`);l(u,f),d(()=>{let e=n.prop;c(e,u,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),d(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),d(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),d(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),te=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],w=()=>{let{tRecommended:w,tMultipleEnhanced:T,tCompoundEnhanced:E,tBasic:D,tResponsive:ne,tIconOnly:re,tIconOnlyH:ie,tIconOnlyTooltip:ae,tIconOnlyHTooltip:oe,tSizes:se,tDisabled:ce,tIcons:O,tIconsBadge:k,tNoPadRadius:le,tTitle:ue,tTitleParent:de,tSubmenu:fe,tCollapsible:pe,tDropdownClassJS:me,tFileTree:he,tActiveItem:ge,tHorizontal:_e,tHorizontalSubmenu:ve,tMega:ye,tCollapsibleResponsive:be,tArray:xe,tArrayInternal:Se,tNavigation:Ce,recommendedSelectedKeys:we,recommendedOpenKeys:Te,multipleSelectedKeys:Ee,compoundSelectedKeys:De,compoundOpenKeys:Oe,toggleDropdownByClass:ke,menuData:Ae,menuItems:je}=g(`useSetup:0:0`,()=>h(()=>({tRecommended:g(`ref:1:0`,()=>f(`preview`)),tMultipleEnhanced:g(`ref:1:1`,()=>f(`preview`)),tCompoundEnhanced:g(`ref:1:2`,()=>f(`preview`)),tBasic:g(`ref:1:3`,()=>f(`preview`)),tResponsive:g(`ref:1:4`,()=>f(`preview`)),tIconOnly:g(`ref:1:5`,()=>f(`preview`)),tIconOnlyH:g(`ref:1:6`,()=>f(`preview`)),tIconOnlyTooltip:g(`ref:1:7`,()=>f(`preview`)),tIconOnlyHTooltip:g(`ref:1:8`,()=>f(`preview`)),tSizes:g(`ref:1:9`,()=>f(`preview`)),tDisabled:g(`ref:1:10`,()=>f(`preview`)),tIcons:g(`ref:1:11`,()=>f(`preview`)),tIconsBadge:g(`ref:1:12`,()=>f(`preview`)),tNoPadRadius:g(`ref:1:13`,()=>f(`preview`)),tTitle:g(`ref:1:14`,()=>f(`preview`)),tTitleParent:g(`ref:1:15`,()=>f(`preview`)),tSubmenu:g(`ref:1:16`,()=>f(`preview`)),tCollapsible:g(`ref:1:17`,()=>f(`preview`)),tDropdownClassJS:g(`ref:1:18`,()=>f(`preview`)),tFileTree:g(`ref:1:19`,()=>f(`preview`)),tActiveItem:g(`ref:1:20`,()=>f(`preview`)),tHorizontal:g(`ref:1:21`,()=>f(`preview`)),tHorizontalSubmenu:g(`ref:1:22`,()=>f(`preview`)),tMega:g(`ref:1:23`,()=>f(`preview`)),tCollapsibleResponsive:g(`ref:1:24`,()=>f(`preview`)),tArray:g(`ref:1:25`,()=>f(`preview`)),tArrayInternal:g(`ref:1:26`,()=>f(`preview`)),tNavigation:g(`ref:1:27`,()=>f(`preview`)),recommendedSelectedKeys:g(`ref:1:28`,()=>f([`overview`])),recommendedOpenKeys:g(`ref:1:29`,()=>f([`workspace`])),multipleSelectedKeys:g(`ref:1:30`,()=>f([`mentions`,`archived`])),compoundSelectedKeys:g(`ref:1:31`,()=>f([`profile`])),compoundOpenKeys:g(`ref:1:32`,()=>f([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Me=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:v(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:v(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:v(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:v(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:v(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Ne=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:v(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:v(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return m(()=>{let f=a(),h=i(`rue:component:anchor`);return l(f,h),c(p(y,{children:m(()=>{let f=a(),h=e(`div`);l(f,h),o(h,`max-w-none prose prose-sm md:prose-base`);let g=e(`h1`);l(h,g),l(g,n(`Menu 菜单`));let y=e(`p`);l(h,y),o(y,`text-sm mt-3 mb-3`),l(y,n("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let Pe=e(`div`);l(h,Pe),o(Pe,`text-sm`);let Fe=e(`a`);l(Pe,Fe),t(Fe,`href`,`https://daisyui.com/components/menu/`),t(Fe,`target`,`_blank`),l(Fe,n(`查看 Menu 静态样式`));let A=e(`div`);l(h,A),o(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ie=e(`h2`);l(A,Ie),o(Ie,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Ie,n(`# 推荐：items 数据驱动导航`));let Le=e(`p`);l(A,Le),o(Le,`mb-3 text-sm text-base-content/70`),l(Le,n(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Re=i(`rue:component:anchor`);l(A,Re),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:w.value,onChange:e=>w.value=e,className:`mb-3`}),A,Re)});let ze=i(`rue:slot:anchor`);l(A,ze),d(()=>{c(w.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(C,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:Me,selectedKeys:we.value,openKeys:Te.value,onSelect:e=>we.value=e.selectedKeys,onOpenChange:e=>Te.value=e}),e,t)}),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
import { ref } from '@rue-js/rue';

const selectedKeys = ref(['overview']);
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
  className="bg-base-200 rounded-box w-80"
  items={items}
  selectedKeys={selectedKeys.value}
  openKeys={openKeys.value}
  onSelect={info => (selectedKeys.value = info.selectedKeys as string[])}
  onOpenChange={keys => (openKeys.value = keys as string[])}
/>`}),e,t)}),e}),A,ze)});let j=e(`div`);l(h,j),o(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Be=e(`h2`);l(j,Be),o(Be,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Be,n(`# 推荐：多选、分组与分割线`));let Ve=e(`p`);l(j,Ve),o(Ve,`mb-3 text-sm text-base-content/70`),l(Ve,n("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let He=i(`rue:component:anchor`);l(j,He),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:T.value,onChange:e=>T.value=e,className:`mb-3`}),j,He)});let Ue=i(`rue:slot:anchor`);l(j,Ue),d(()=>{c(T.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(C,{className:`bg-base-200 rounded-box w-80`,items:Ne,multiple:!0,selectedKeys:Ee.value,onSelect:e=>Ee.value=e.selectedKeys,onDeselect:e=>Ee.value=e.selectedKeys}),e,t)}),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

const items = [
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
  selectedKeys={selectedKeys.value}
  onSelect={info => (selectedKeys.value = info.selectedKeys as string[])}
  onDeselect={info => (selectedKeys.value = info.selectedKeys as string[])}
/>`}),e,t)}),e}),j,Ue)});let M=e(`div`);l(h,M),o(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let We=e(`h2`);l(M,We),o(We,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(We,n(`# 推荐：组合式增强 API`));let Ge=e(`p`);l(M,Ge),o(Ge,`mb-3 text-sm text-base-content/70`),l(Ge,n("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ke=i(`rue:component:anchor`);l(M,Ke),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`}),M,Ke)});let qe=i(`rue:slot:anchor`);l(M,qe),d(()=>{c(E.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t);let n=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t);let n=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),d(()=>{c(p(C.Item,{eventKey:`profile`,icon:v(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`}),e,t)});let n=i(`rue:component:anchor`);return l(e,n),d(()=>{c(p(C.Item,{eventKey:`notifications`,extra:v(S,{size:`xs`,children:`2`}),children:`Notifications`}),e,n)}),e});c(p(C.ItemGroup,{title:`Account`,children:n}),e,t);let r=i(`rue:component:anchor`);l(e,r),c(p(C.Divider,{}),e,r);let o=i(`rue:component:anchor`);l(e,o);let s=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{eventKey:`security`,children:`Security`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,n),e});return d(()=>{c(p(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:v(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:s}),e,o)}),e});return d(()=>{c(p(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:De.value,openKeys:Oe.value,onSelect:e=>De.value=e.selectedKeys,onOpenChange:e=>Oe.value=e,children:n}),e,t)}),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`}),e,t)}),e}),M,qe)});let Je=e(`div`);l(h,Je),o(Je,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),l(Je,n(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=e(`div`);l(h,N),o(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ye=e(`h2`);l(N,Ye),o(Ye,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Ye,n(`# 导航跳转`));let Xe=i(`rue:component:anchor`);l(N,Xe),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`}),N,Xe)});let Ze=i(`rue:slot:anchor`);l(N,Ze),d(()=>{c(Ce.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(p(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,r),e})}),e,t),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`}),e,t)}),e}),N,Ze)});let P=e(`div`);l(h,P),o(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qe=e(`h2`);l(P,Qe),o(Qe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Qe,n(`# Menu 通过数据渲染（数组）`));let $e=i(`rue:component:anchor`);l(P,$e),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`}),P,$e)});let et=i(`rue:slot:anchor`);l(P,et),d(()=>{c(xe.value===`preview`?m(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(p(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:m(()=>{let n=a(),r=i(`rue:list:start`),o=i(`rue:list:end`);l(n,r),l(n,o);let s=new Map;return d(()=>{s=_({items:Ae||[],getKey:(e,t)=>t,elements:s,parent:r.parentNode,before:o,start:r,renderItem:(n,r,o,s,f)=>{u(m(()=>{let r=e(`li`);d(()=>{t(r,`key`,String(f))});let o=i(`rue:component:anchor`);l(r,o),c(p(C.Item,{children:n.label}),r,o);let s=i(`rue:component:anchor`);return l(r,s),c(p(C.Submenu,{children:m(()=>{let r=a(),o=i(`rue:list:start`),s=i(`rue:list:end`);l(r,o),l(r,s);let f=new Map;return d(()=>{f=_({items:n.children||[],getKey:(e,t)=>t,elements:f,parent:o.parentNode,before:s,start:o,renderItem:(n,r,o,s,f)=>{u(m(typeof n==`string`?()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(C.Item,{key:f,children:n}),e,t)}),e}:()=>{let r=a(),o=e(`li`);l(r,o),d(()=>{t(o,`key`,String(f))});let s=i(`rue:component:anchor`);l(o,s),c(p(C.Item,{children:n.label}),o,s);let u=i(`rue:component:anchor`);return l(o,u),c(p(C.Submenu,{children:n.children.map((e,t)=>m(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),d(()=>{c(p(C.Item,{key:t,children:e}),n,r)}),n}))}),o,u),r}),r,o,s)}})}),r})}),r,s),r}),r,o,s)}})}),n})}),n,r),n}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`}),e,t)}),e}),P,et)});let F=e(`div`);l(h,F),o(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let tt=e(`h2`);l(F,tt),o(tt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(tt,n(`# Menu 通过数据渲染（数组，组件内部）`));let nt=i(`rue:component:anchor`);l(F,nt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`}),F,nt)});let rt=i(`rue:slot:anchor`);l(F,rt),d(()=>{c(Se.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(C,{items:je,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`}),e,t)}),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`}),e,t)}),e}),F,rt)});let I=e(`div`);l(h,I),o(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let it=e(`h2`);l(I,it),o(it,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(it,n(`# Menu`));let at=i(`rue:component:anchor`);l(I,at),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`}),I,at)});let ot=i(`rue:slot:anchor`);l(I,ot),d(()=>{c(D.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{as:`button`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(p(C.Item,{as:`button`,children:`Item 3`}),e,r),e})}),e,t),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),I,ot)});let L=e(`div`);l(h,L),o(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let st=e(`h2`);l(L,st),o(st,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(st,n(`# 响应式：小屏垂直，大屏水平`));let ct=i(`rue:component:anchor`);l(L,ct),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`}),L,ct)});let lt=i(`rue:slot:anchor`);l(L,lt),d(()=>{c(ne.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(p(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{as:`button`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(p(C.Item,{as:`button`,children:`Item 3`}),e,r),e})}),e,t),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),L,lt)});let R=e(`div`);l(h,R),o(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let ut=e(`h2`);l(R,ut),o(ut,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(ut,n(`# 仅图标`));let dt=i(`rue:component:anchor`);l(R,dt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`}),R,dt)});let ft=i(`rue:slot:anchor`);l(R,ft),d(()=>{c(re.value===`preview`?m(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(p(C,{className:`bg-base-200 rounded-box`,children:m(()=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n});c(p(C.Item,{as:`button`,children:s}),n,r);let u=i(`rue:component:anchor`);l(n,u);let d=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});c(p(C.Item,{as:`button`,children:d}),n,u);let f=i(`rue:component:anchor`);l(n,f);let h=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return c(p(C.Item,{as:`button`,children:h}),n,f),n})}),n,r),n}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`}),e,t)}),e}),R,ft)});let z=e(`div`);l(h,z),o(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let pt=e(`h2`);l(z,pt),o(pt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(pt,n(`# 仅图标（水平）`));let mt=i(`rue:component:anchor`);l(z,mt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`}),z,mt)});let ht=i(`rue:slot:anchor`);l(z,ht),d(()=>{c(ie.value===`preview`?m(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(p(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:m(()=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n});c(p(C.Item,{as:`button`,children:s}),n,r);let u=i(`rue:component:anchor`);l(n,u);let d=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});c(p(C.Item,{as:`button`,children:d}),n,u);let f=i(`rue:component:anchor`);l(n,f);let h=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return c(p(C.Item,{as:`button`,children:h}),n,f),n})}),n,r),n}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`}),e,t)}),e}),z,ht)});let B=e(`div`);l(h,B),o(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let gt=e(`h2`);l(B,gt),o(gt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(gt,n(`# 仅图标（带 tooltip）`));let _t=i(`rue:component:anchor`);l(B,_t),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`}),B,_t)});let vt=i(`rue:slot:anchor`);l(B,vt),d(()=>{c(ae.value===`preview`?m(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(p(C,{className:`bg-base-200 rounded-box`,children:m(()=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),n});c(p(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:s}),n,r);let u=i(`rue:component:anchor`);l(n,u);let d=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});c(p(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:d}),n,u);let f=i(`rue:component:anchor`);l(n,f);let h=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return c(p(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:h}),n,f),n})}),n,r),n}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`}),e,t)}),e}),B,vt)});let V=e(`div`);l(h,V),o(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let yt=e(`h2`);l(V,yt),o(yt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(yt,n(`# 仅图标（水平，tooltip）`));let bt=i(`rue:component:anchor`);l(V,bt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`}),V,bt)});let xt=i(`rue:slot:anchor`);l(V,xt),d(()=>{c(oe.value===`preview`?m(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(p(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:m(()=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),n});c(p(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:s}),n,r);let u=i(`rue:component:anchor`);l(n,u);let d=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});c(p(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:d}),n,u);let f=i(`rue:component:anchor`);l(n,f);let h=m(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),n});return c(p(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:h}),n,f),n})}),n,r),n}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`}),e,t)}),e}),V,xt)});let H=e(`div`);l(h,H),o(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let St=e(`h2`);l(H,St),o(St,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(St,n(`# Menu 尺寸`));let Ct=i(`rue:component:anchor`);l(H,Ct),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`}),H,Ct)});let wt=i(`rue:slot:anchor`);l(H,wt),d(()=>{c(se.value===`preview`?m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`grid gap-6`);let r=i(`rue:component:anchor`);l(n,r),c(p(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Xsmall 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{as:`button`,children:`Xsmall 2`}),e,n),e})}),n,r);let s=i(`rue:component:anchor`);l(n,s),c(p(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Small 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{as:`button`,children:`Small 2`}),e,n),e})}),n,s);let u=i(`rue:component:anchor`);l(n,u),c(p(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Medium 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{as:`button`,children:`Medium 2`}),e,n),e})}),n,u);let d=i(`rue:component:anchor`);l(n,d),c(p(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Large 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{as:`button`,children:`Large 2`}),e,n),e})}),n,d);let f=i(`rue:component:anchor`);return l(n,f),c(p(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Xlarge 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{as:`button`,children:`Xlarge 2`}),e,n),e})}),n,f),t}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`}),e,t)}),e}),H,wt)});let U=e(`div`);l(h,U),o(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let Tt=e(`h2`);l(U,Tt),o(Tt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Tt,n(`# 禁用项目`));let Et=i(`rue:component:anchor`);l(U,Et),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`}),U,Et)});let Dt=i(`rue:slot:anchor`);l(U,Dt),d(()=>{c(ce.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Enabled item`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(p(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,r),e})}),e,t),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`}),e,t)}),e}),U,Dt)});let W=e(`div`);l(h,W),o(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ot=e(`h2`);l(W,Ot),o(Ot,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Ot,n(`# 带图标`));let kt=i(`rue:component:anchor`);l(W,kt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`}),W,kt)});let At=i(`rue:slot:anchor`);l(W,At),d(()=>{c(O.value===`preview`?m(()=>{let r=a(),s=i(`rue:component:anchor`);return l(r,s),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let r=a(),s=i(`rue:component:anchor`);l(r,s);let u=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),o(i,`h-5 w-5`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`stroke`,`currentColor`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`strokeWidth`,`2`),t(s,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),l(r,n(`Item 2`)),r});c(p(C.Item,{as:`button`,children:u}),r,s);let d=i(`rue:component:anchor`);l(r,d);let f=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),o(i,`h-5 w-5`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`stroke`,`currentColor`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`strokeWidth`,`2`),t(s,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),l(r,n(`Item 1`)),r});c(p(C.Item,{as:`button`,children:f}),r,d);let h=i(`rue:component:anchor`);l(r,h);let g=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),o(i,`h-5 w-5`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`stroke`,`currentColor`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`strokeWidth`,`2`),t(s,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),l(r,n(`Item 3`)),r});return c(p(C.Item,{as:`button`,children:g}),r,h),r})}),r,s),r}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}),e,t)}),e}),W,At)});let G=e(`div`);l(h,G),o(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let jt=e(`h2`);l(G,jt),o(jt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(jt,n(`# 带图标与徽章（响应式）`));let Mt=i(`rue:component:anchor`);l(G,Mt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`}),G,Mt)});let Nt=i(`rue:slot:anchor`);l(G,Nt),d(()=>{c(k.value===`preview`?m(()=>{let u=a(),d=i(`rue:component:anchor`);return l(u,d),c(p(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:m(()=>{let u=a(),d=i(`rue:component:anchor`);l(u,d);let f=m(()=>{let r=a(),s=e(`svg`);l(r,s),t(s,`xmlns`,`http://www.w3.org/2000/svg`),o(s,`h-5 w-5`),t(s,`fill`,`none`),t(s,`viewBox`,`0 0 24 24`),t(s,`stroke`,`currentColor`);let u=e(`path`);l(s,u),t(u,`strokeLinecap`,`round`),t(u,`strokeLinejoin`,`round`),t(u,`strokeWidth`,`2`),t(u,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),l(r,n(`Inbox`));let d=i(`rue:component:anchor`);return l(r,d),c(p(S,{size:`xs`,children:`99+`}),r,d),r});c(p(C.Item,{as:`button`,children:f}),u,d);let h=i(`rue:component:anchor`);l(u,h);let g=m(()=>{let u=a(),d=e(`svg`);l(u,d),t(d,`xmlns`,`http://www.w3.org/2000/svg`),o(d,`h-5 w-5`),t(d,`fill`,`none`),t(d,`viewBox`,`0 0 24 24`),t(d,`stroke`,`currentColor`);let f=e(`path`);l(d,f),t(f,`strokeLinecap`,`round`),t(f,`strokeLinejoin`,`round`),t(f,`strokeWidth`,`2`),t(f,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),l(u,n(`Updates`));let m=r(u);l(u,m),s(m,` `);let h=i(`rue:component:anchor`);return l(u,h),c(p(S,{size:`xs`,variant:`warning`,children:`NEW`}),u,h),u});c(p(C.Item,{as:`button`,children:g}),u,h);let _=i(`rue:component:anchor`);l(u,_);let v=m(()=>{let e=a();l(e,n(`Stats`));let t=i(`rue:component:anchor`);return l(e,t),c(p(S,{size:`xs`,variant:`info`}),e,t),e});return c(p(C.Item,{as:`button`,children:v}),u,_),u})}),u,d),u}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`}),e,t)}),e}),G,Nt)});let K=e(`div`);l(h,K),o(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Pt=e(`h2`);l(K,Pt),o(Pt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Pt,n(`# 去除内边距和圆角`));let Ft=i(`rue:component:anchor`);l(K,Ft),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`}),K,Ft)});let It=i(`rue:slot:anchor`);l(K,It),d(()=>{c(le.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(p(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(p(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),K,It)});let q=e(`div`);l(h,q),o(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Lt=e(`h2`);l(q,Lt),o(Lt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Lt,n(`# 带标题`));let Rt=i(`rue:component:anchor`);l(q,Rt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`}),q,Rt)});let zt=i(`rue:slot:anchor`);l(q,zt),d(()=>{c(ue.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Title,{children:`Title`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{children:`Item 1`}),e,n);let r=i(`rue:component:anchor`);l(e,r),c(p(C.Item,{children:`Item 2`}),e,r);let o=i(`rue:component:anchor`);return l(e,o),c(p(C.Item,{children:`Item 3`}),e,o),e})}),e,t),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),q,zt)});let J=e(`div`);l(h,J),o(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Bt=e(`h2`);l(J,Bt),o(Bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Bt,n(`# 标题作为父级`));let Vt=i(`rue:component:anchor`);l(J,Vt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`}),J,Vt)});let Ht=i(`rue:slot:anchor`);l(J,Ht),d(()=>{c(de.value===`preview`?m(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let t=a(),n=e(`li`);l(t,n);let r=i(`rue:component:anchor`);l(n,r),c(p(C.Title,{as:`h2`,children:`Title`}),n,r);let o=e(`ul`);l(n,o);let s=i(`rue:component:anchor`);l(o,s),c(p(C.Item,{children:`Item 1`}),o,s);let u=i(`rue:component:anchor`);l(o,u),c(p(C.Item,{children:`Item 2`}),o,u);let d=i(`rue:component:anchor`);return l(o,d),c(p(C.Item,{children:`Item 3`}),o,d),t})}),t,n),t}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`}),e,t)}),e}),J,Ht)});let Y=e(`div`);l(h,Y),o(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ut=e(`h2`);l(Y,Ut),o(Ut,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Ut,n(`# 子菜单`));let Wt=i(`rue:component:anchor`);l(Y,Wt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`}),Y,Wt)});let Gt=i(`rue:slot:anchor`);l(Y,Gt),d(()=>{c(fe.value===`preview`?m(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(p(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=e(`li`);l(t,r);let o=i(`rue:component:anchor`);l(r,o),c(p(C.Item,{as:`button`,children:`Parent`}),r,o);let s=i(`rue:component:anchor`);l(r,s);let u=m(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(p(C.Item,{as:`button`,children:`Submenu 1`}),t,n);let r=i(`rue:component:anchor`);l(t,r),c(p(C.Item,{as:`button`,children:`Submenu 2`}),t,r);let o=e(`li`);l(t,o);let s=i(`rue:component:anchor`);l(o,s),c(p(C.Item,{as:`button`,children:`Parent`}),o,s);let u=i(`rue:component:anchor`);l(o,u);let d=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{as:`button`,children:`Submenu 2`}),e,n),e});return c(p(C.Submenu,{children:d}),o,u),t});c(p(C.Submenu,{children:u}),r,s);let d=i(`rue:component:anchor`);return l(t,d),c(p(C.Item,{as:`button`,children:`Item 3`}),t,d),t})}),t,n),t}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}),e,t)}),e}),Y,Gt)});let X=e(`div`);l(h,X),o(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Kt=e(`h2`);l(X,Kt),o(Kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Kt,n(`# 可折叠子菜单`));let qt=i(`rue:component:anchor`);l(X,qt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`}),X,qt)});let Jt=i(`rue:slot:anchor`);l(X,Jt),d(()=>{c(pe.value===`preview`?m(()=>{let t=a(),r=i(`rue:component:anchor`);return l(t,r),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let t=a(),r=i(`rue:component:anchor`);l(t,r),c(p(C.Item,{as:`button`,children:`Item 1`}),t,r);let o=e(`li`);l(t,o);let s=e(`details`);l(o,s);let u=e(`summary`);l(s,u),l(u,n(`Parent`));let d=e(`ul`);l(s,d);let f=i(`rue:component:anchor`);l(d,f),c(p(C.Item,{as:`button`,children:`Submenu 1`}),d,f);let m=i(`rue:component:anchor`);l(d,m),c(p(C.Item,{as:`button`,children:`Submenu 2`}),d,m);let h=e(`li`);l(d,h);let g=e(`details`);l(h,g);let _=e(`summary`);l(g,_),l(_,n(`Parent`));let v=e(`ul`);l(g,v);let y=i(`rue:component:anchor`);l(v,y),c(p(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=i(`rue:component:anchor`);l(v,b),c(p(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=i(`rue:component:anchor`);return l(t,x),c(p(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,r),t}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}),e,t)}),e}),X,Jt)});let Z=e(`div`);l(h,Z),o(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Yt=e(`h2`);l(Z,Yt),o(Yt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Yt,n(`# 通过类名控制展开（JS）`));let Xt=i(`rue:component:anchor`);l(Z,Xt),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`}),Z,Xt)});let Zt=i(`rue:slot:anchor`);l(Z,Zt),d(()=>{c(me.value===`preview`?m(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`grid gap-6`);let r=i(`rue:component:anchor`);l(n,r),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(p(C.Item,{children:`Item 1`}),t,n);let r=e(`li`);l(t,r);let o=i(`rue:component:anchor`);l(r,o),c(p(C.DropdownToggle,{onClick:ke,children:`Parent`}),r,o);let s=i(`rue:component:anchor`);l(r,s);let u=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{children:`Submenu 2`}),e,n),e});return c(p(C.Dropdown,{children:u}),r,s),t})}),n,r);let s=i(`rue:component:anchor`);return l(n,s),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(p(C.Item,{children:`Item 1`}),t,n);let r=e(`li`);l(t,r);let o=i(`rue:component:anchor`);l(r,o),d(()=>{c(p(C.DropdownToggle,{show:!0,onClick:ke,children:`Parent`}),r,o)});let s=i(`rue:component:anchor`);l(r,s);let u=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{children:`Submenu 2`}),e,n),e});return d(()=>{c(p(C.Dropdown,{show:!0,children:u}),r,s)}),t})}),n,s),t}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`}),e,t)}),e}),Z,Zt)});let Q=e(`div`);l(h,Q),o(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qt=e(`h2`);l(Q,Qt),o(Qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Qt,n(`# 文件树`));let $t=i(`rue:component:anchor`);l(Q,$t),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`}),Q,$t)});let en=i(`rue:slot:anchor`);l(Q,en),d(()=>{c(he.value===`preview`?m(()=>{let r=a(),s=i(`rue:component:anchor`);return l(r,s),c(p(C,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:m(()=>{let r=a(),s=i(`rue:component:anchor`);l(r,s);let u=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),l(r,n(`resume.pdf`)),r});c(p(C.Item,{as:`button`,children:u}),r,s);let d=e(`li`);l(r,d);let f=e(`details`);l(d,f);let h=e(`summary`);l(f,h);let g=e(`svg`);l(h,g),t(g,`xmlns`,`http://www.w3.org/2000/svg`),t(g,`fill`,`none`),t(g,`viewBox`,`0 0 24 24`),t(g,`strokeWidth`,`1.5`),t(g,`stroke`,`currentColor`),o(g,`w-4 h-4`);let _=e(`path`);l(g,_),t(_,`strokeLinecap`,`round`),t(_,`strokeLinejoin`,`round`),t(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),l(h,n(`My Files`));let v=e(`ul`);l(f,v);let y=i(`rue:component:anchor`);l(v,y);let b=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),l(r,n(`Project-final.psd`)),r});c(p(C.Item,{as:`button`,children:b}),v,y);let x=i(`rue:component:anchor`);l(v,x);let S=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),l(r,n(`Project-final-2.psd`)),r});c(p(C.Item,{as:`button`,children:S}),v,x);let ee=e(`li`);l(v,ee);let te=e(`details`);l(ee,te);let w=e(`summary`);l(te,w);let T=e(`svg`);l(w,T),t(T,`xmlns`,`http://www.w3.org/2000/svg`),t(T,`fill`,`none`),t(T,`viewBox`,`0 0 24 24`),t(T,`strokeWidth`,`1.5`),t(T,`stroke`,`currentColor`),o(T,`w-4 h-4`);let E=e(`path`);l(T,E),t(E,`strokeLinecap`,`round`),t(E,`strokeLinejoin`,`round`),t(E,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),l(w,n(`Images`));let D=e(`ul`);l(te,D);let ne=i(`rue:component:anchor`);l(D,ne);let re=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),l(r,n(`Screenshot1.png`)),r});c(p(C.Item,{as:`button`,children:re}),D,ne);let ie=i(`rue:component:anchor`);l(D,ie);let ae=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),l(r,n(`Screenshot2.png`)),r});c(p(C.Item,{as:`button`,children:ae}),D,ie);let oe=e(`li`);l(D,oe);let se=e(`details`);l(oe,se);let ce=e(`summary`);l(se,ce);let O=e(`svg`);l(ce,O),t(O,`xmlns`,`http://www.w3.org/2000/svg`),t(O,`fill`,`none`),t(O,`viewBox`,`0 0 24 24`),t(O,`strokeWidth`,`1.5`),t(O,`stroke`,`currentColor`),o(O,`w-4 h-4`);let k=e(`path`);l(O,k),t(k,`strokeLinecap`,`round`),t(k,`strokeLinejoin`,`round`),t(k,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),l(ce,n(`Others`));let le=e(`ul`);l(se,le);let ue=i(`rue:component:anchor`);l(le,ue);let de=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),l(r,n(`Screenshot3.png`)),r});c(p(C.Item,{as:`button`,children:de}),le,ue);let fe=i(`rue:component:anchor`);l(r,fe);let pe=m(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),l(r,n(`reports-final-2.pdf`)),r});return c(p(C.Item,{as:`button`,children:pe}),r,fe),r})}),r,s),r}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`}),e,t)}),e}),Q,en)});let tn=e(`div`);l(h,tn),o(tn,`component-preview not-prose text-base-content my-6 lg:my-12`);let nn=e(`h2`);l(tn,nn),o(nn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(nn,n(`# 激活项`));let rn=i(`rue:component:anchor`);l(tn,rn),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`}),tn,rn)});let an=i(`rue:slot:anchor`);l(tn,an),d(()=>{c(ge.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(p(C,{className:`bg-base-200 rounded-box w-56`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{className:`menu-active`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(p(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`}),e,t)}),e}),tn,an)});let on=e(`div`);l(h,on),o(on,`component-preview not-prose text-base-content my-6 lg:my-12`);let sn=e(`h2`);l(on,sn),o(sn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(sn,n(`# 水平菜单`));let cn=i(`rue:component:anchor`);l(on,cn),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`}),on,cn)});let ln=i(`rue:slot:anchor`);l(on,ln),d(()=>{c(_e.value===`preview`?m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(p(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(p(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),on,ln)});let un=e(`div`);l(h,un),o(un,`component-preview not-prose text-base-content my-6 lg:my-12`);let dn=e(`h2`);l(un,dn),o(dn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(dn,n(`# 水平子菜单`));let fn=i(`rue:component:anchor`);l(un,fn),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`}),un,fn)});let pn=i(`rue:slot:anchor`);l(un,pn),d(()=>{c(ve.value===`preview`?m(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),c(p(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:m(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(p(C.Item,{children:`Item 1`}),t,n);let r=e(`li`);l(t,r);let o=i(`rue:component:anchor`);l(r,o),c(p(C.Item,{children:`Parent`}),r,o);let s=i(`rue:component:anchor`);l(r,s);let u=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(p(C.Item,{children:`Submenu 2`}),e,n),e});c(p(C.Submenu,{children:u}),r,s);let d=i(`rue:component:anchor`);return l(t,d),c(p(C.Item,{children:`Item 3`}),t,d),t})}),t,n),t}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),un,pn)});let mn=e(`div`);l(h,mn),o(mn,`component-preview not-prose text-base-content my-6 lg:my-12`);let hn=e(`h2`);l(mn,hn),o(hn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(hn,n(`# Mega 菜单（响应式）`));let gn=i(`rue:component:anchor`);l(mn,gn),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`}),mn,gn)});let _n=i(`rue:slot:anchor`);l(mn,_n),d(()=>{c(ye.value===`preview`?m(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),c(p(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:m(()=>{let t=a(),n=e(`li`);l(t,n);let r=i(`rue:component:anchor`);l(n,r),c(p(C.Item,{children:`Solutions`}),n,r);let o=i(`rue:component:anchor`);l(n,o);let s=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`Design`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{children:`Development`}),e,n);let r=i(`rue:component:anchor`);l(e,r),c(p(C.Item,{children:`Hosting`}),e,r);let o=i(`rue:component:anchor`);return l(e,o),c(p(C.Item,{children:`Domain register`}),e,o),e});c(p(C.Submenu,{children:s}),n,o);let u=e(`li`);l(t,u);let d=i(`rue:component:anchor`);l(u,d),c(p(C.Item,{children:`Enterprise`}),u,d);let f=i(`rue:component:anchor`);l(u,f);let h=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`CRM software`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{children:`Marketing management`}),e,n);let r=i(`rue:component:anchor`);l(e,r),c(p(C.Item,{children:`Security`}),e,r);let o=i(`rue:component:anchor`);return l(e,o),c(p(C.Item,{children:`Consulting`}),e,o),e});c(p(C.Submenu,{children:h}),u,f);let g=e(`li`);l(t,g);let _=i(`rue:component:anchor`);l(g,_),c(p(C.Item,{children:`Products`}),g,_);let v=i(`rue:component:anchor`);l(g,v);let y=m(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(p(C.Item,{children:`UI Kit`}),t,n);let r=i(`rue:component:anchor`);l(t,r),c(p(C.Item,{children:`WordPress themes`}),t,r);let o=i(`rue:component:anchor`);l(t,o),c(p(C.Item,{children:`WordPress plugins`}),t,o);let s=e(`li`);l(t,s);let u=i(`rue:component:anchor`);l(s,u),c(p(C.Item,{children:`Open source`}),s,u);let d=i(`rue:component:anchor`);l(s,d);let f=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`Auth management system`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{children:`VScode theme`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(p(C.Item,{children:`Color picker app`}),e,r),e});return c(p(C.Submenu,{children:f}),s,d),t});c(p(C.Submenu,{children:y}),g,v);let b=e(`li`);l(t,b);let x=i(`rue:component:anchor`);l(b,x),c(p(C.Item,{children:`Company`}),b,x);let S=i(`rue:component:anchor`);l(b,S);let ee=m(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(p(C.Item,{children:`About us`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(p(C.Item,{children:`Contact us`}),e,n);let r=i(`rue:component:anchor`);l(e,r),c(p(C.Item,{children:`Privacy policy`}),e,r);let o=i(`rue:component:anchor`);return l(e,o),c(p(C.Item,{children:`Press kit`}),e,o),e});return c(p(C.Submenu,{children:ee}),b,S),t})}),t,n),t}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`}),e,t)}),e}),mn,_n)});let $=e(`div`);l(h,$),o($,`component-preview not-prose text-base-content my-6 lg:my-12`);let vn=e(`h2`);l($,vn),o(vn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(vn,n(`# 可折叠（响应式）`));let yn=i(`rue:component:anchor`);l($,yn),d(()=>{c(p(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`}),$,yn)});let bn=i(`rue:slot:anchor`);l($,bn),d(()=>{c(be.value===`preview`?m(()=>{let t=a(),r=i(`rue:component:anchor`);return l(t,r),c(p(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:m(()=>{let t=a(),r=i(`rue:component:anchor`);l(t,r),c(p(C.Item,{as:`button`,children:`Item 1`}),t,r);let o=e(`li`);l(t,o);let s=e(`details`);l(o,s);let u=e(`summary`);l(s,u),l(u,n(`Parent item`));let d=e(`ul`);l(s,d);let f=i(`rue:component:anchor`);l(d,f),c(p(C.Item,{as:`button`,children:`Submenu 1`}),d,f);let m=i(`rue:component:anchor`);l(d,m),c(p(C.Item,{as:`button`,children:`Submenu 2`}),d,m);let h=e(`li`);l(d,h);let g=e(`details`);l(h,g);let _=e(`summary`);l(g,_),l(_,n(`Parent`));let v=e(`ul`);l(g,v);let y=i(`rue:component:anchor`);l(v,y),c(p(C.Item,{as:`button`,children:`item 1`}),v,y);let b=i(`rue:component:anchor`);l(v,b),c(p(C.Item,{as:`button`,children:`item 2`}),v,b);let x=i(`rue:component:anchor`);return l(t,x),c(p(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,r),t}):m(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),d(()=>{c(p(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`}),e,t)}),e}),$,bn)});let xn=e(`h2`);l(h,xn),l(xn,n(`API`));let Sn=e(`p`);l(h,Sn),o(Sn,`text-sm text-base-content/70`),l(Sn,n("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Cn=e(`h3`);l(h,Cn),l(Cn,n(`Menu.Item 链接相关`));let wn=i(`rue:component:anchor`);return l(h,wn),d(()=>{c(p(ee,{rows:te}),h,wn)}),f})}),f,h),f})};export{w as default};
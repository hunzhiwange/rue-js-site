import{F as e,H as t,I as n,L as r,N as i,P as a,W as o,Y as s,c,j as l,pt as u,rt as d,t as f,u as p,ut as m}from"./vapor-runtime-CKndxKFn.js";import{a as h,n as g}from"./vapor-helpers-vapor-yxlhW-_4.js";import{n as _,t as v}from"./src-CqIWk1va.js";import{n as y}from"./SidebarPlaygroundDesign-CBV-3y9s.js";import{t as b}from"./Code-B1JFTu6m.js";import{t as x}from"./tabs-BbiCzXqJ.js";import{t as S}from"./badge-DV5igjDa.js";import{t as C}from"./menu-CNaqhhKc.js";var ee=({rows:r})=>p(()=>{let s=e(`div`);o(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=e(`table`);l(s,d),o(d,`table table-zebra`);let f=e(`thead`);l(d,f);let m=e(`tr`);l(f,m);let h=e(`th`);l(m,h),l(h,n(`属性`));let _=e(`th`);l(m,_),l(_,n(`说明`));let v=e(`th`);l(m,v),l(v,n(`类型`));let y=e(`th`);l(m,y),l(y,n(`默认值`));let b=e(`tbody`);l(d,b);let x=i(`rue:list:start`),S=i(`rue:list:end`);l(b,x),l(b,S);let C=new Map;return u(()=>{C=g({items:r||[],getKey:(e,t)=>e.prop,elements:C,parent:b,before:S,singleRoot:!0,start:x,renderItem:(n,r,o,s,d)=>{c(p(()=>{let r=a(),o=e(`tr`);l(r,o),u(()=>{t(o,`key`,String(n.prop))});let s=e(`td`);l(o,s);let d=e(`code`);l(s,d);let f=i(`rue:slot:anchor`);l(d,f),u(()=>{let e=n.prop;c(e,d,f)});let p=e(`td`);l(o,p);let m=i(`rue:slot:anchor`);l(p,m),u(()=>{let e=n.description;c(e,p,m)});let h=e(`td`);l(o,h);let g=e(`code`);l(h,g);let _=i(`rue:slot:anchor`);l(g,_),u(()=>{let e=n.type;c(e,g,_)});let v=e(`td`);l(o,v);let y=e(`code`);l(v,y);let b=i(`rue:slot:anchor`);return l(y,b),u(()=>{let e=n.defaultValue;c(e,y,b)}),r}),r,o)}})}),s}),te=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],w=()=>{let{tRecommended:g,tMultipleEnhanced:w,tCompoundEnhanced:T,tBasic:E,tResponsive:D,tIconOnly:ne,tIconOnlyH:re,tIconOnlyTooltip:ie,tIconOnlyHTooltip:ae,tSizes:oe,tDisabled:se,tIcons:ce,tIconsBadge:O,tNoPadRadius:k,tTitle:le,tTitleParent:ue,tSubmenu:de,tCollapsible:fe,tDropdownClassJS:pe,tFileTree:me,tActiveItem:he,tHorizontal:ge,tHorizontalSubmenu:_e,tMega:ve,tCollapsibleResponsive:ye,tArray:be,tArrayInternal:xe,tNavigation:Se,recommendedSelectedKeys:Ce,recommendedOpenKeys:we,multipleSelectedKeys:Te,compoundSelectedKeys:Ee,compoundOpenKeys:De,toggleDropdownByClass:Oe,menuData:ke,menuItems:Ae}=h(`useSetup:0:0`,()=>m(()=>({tRecommended:h(`ref:1:0`,()=>d(`preview`)),tMultipleEnhanced:h(`ref:1:1`,()=>d(`preview`)),tCompoundEnhanced:h(`ref:1:2`,()=>d(`preview`)),tBasic:h(`ref:1:3`,()=>d(`preview`)),tResponsive:h(`ref:1:4`,()=>d(`preview`)),tIconOnly:h(`ref:1:5`,()=>d(`preview`)),tIconOnlyH:h(`ref:1:6`,()=>d(`preview`)),tIconOnlyTooltip:h(`ref:1:7`,()=>d(`preview`)),tIconOnlyHTooltip:h(`ref:1:8`,()=>d(`preview`)),tSizes:h(`ref:1:9`,()=>d(`preview`)),tDisabled:h(`ref:1:10`,()=>d(`preview`)),tIcons:h(`ref:1:11`,()=>d(`preview`)),tIconsBadge:h(`ref:1:12`,()=>d(`preview`)),tNoPadRadius:h(`ref:1:13`,()=>d(`preview`)),tTitle:h(`ref:1:14`,()=>d(`preview`)),tTitleParent:h(`ref:1:15`,()=>d(`preview`)),tSubmenu:h(`ref:1:16`,()=>d(`preview`)),tCollapsible:h(`ref:1:17`,()=>d(`preview`)),tDropdownClassJS:h(`ref:1:18`,()=>d(`preview`)),tFileTree:h(`ref:1:19`,()=>d(`preview`)),tActiveItem:h(`ref:1:20`,()=>d(`preview`)),tHorizontal:h(`ref:1:21`,()=>d(`preview`)),tHorizontalSubmenu:h(`ref:1:22`,()=>d(`preview`)),tMega:h(`ref:1:23`,()=>d(`preview`)),tCollapsibleResponsive:h(`ref:1:24`,()=>d(`preview`)),tArray:h(`ref:1:25`,()=>d(`preview`)),tArrayInternal:h(`ref:1:26`,()=>d(`preview`)),tNavigation:h(`ref:1:27`,()=>d(`preview`)),recommendedSelectedKeys:h(`ref:1:28`,()=>d([`overview`])),recommendedOpenKeys:h(`ref:1:29`,()=>d([`workspace`])),multipleSelectedKeys:h(`ref:1:30`,()=>d([`mentions`,`archived`])),compoundSelectedKeys:h(`ref:1:31`,()=>d([`profile`])),compoundOpenKeys:h(`ref:1:32`,()=>d([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),je=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:v(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:v(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:v(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:v(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:v(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Me=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:v(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:v(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return p(()=>{let d=a(),m=i(`rue:component:anchor`);return l(d,m),c(f(y,{children:p(()=>{let d=a(),m=e(`div`);l(d,m),o(m,`max-w-none prose prose-sm md:prose-base`);let h=e(`h1`);l(m,h),l(h,n(`Menu 菜单`));let y=e(`p`);l(m,y),o(y,`text-sm mt-3 mb-3`),l(y,n("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let Ne=e(`div`);l(m,Ne),o(Ne,`text-sm`);let Pe=e(`a`);l(Ne,Pe),t(Pe,`href`,`https://daisyui.com/components/menu/`),t(Pe,`target`,`_blank`),l(Pe,n(`查看 Menu 静态样式`));let A=e(`div`);l(m,A),o(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Fe=e(`h2`);l(A,Fe),o(Fe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Fe,n(`# 推荐：items 数据驱动导航`));let Ie=e(`p`);l(A,Ie),o(Ie,`mb-3 text-sm text-base-content/70`),l(Ie,n(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Le=i(`rue:component:anchor`);l(A,Le),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:g.value,onChange:e=>g.value=e,className:`mb-3`}),A,Le)});let Re=i(`rue:slot:anchor`);l(A,Re),u(()=>{c(g.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(C,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:je,selectedKeys:Ce.value,openKeys:we.value,onSelect:e=>Ce.value=e.selectedKeys,onOpenChange:e=>we.value=e}),e,t)}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`}),e,t)}),e}),A,Re)});let j=e(`div`);l(m,j),o(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let ze=e(`h2`);l(j,ze),o(ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(ze,n(`# 推荐：多选、分组与分割线`));let Be=e(`p`);l(j,Be),o(Be,`mb-3 text-sm text-base-content/70`),l(Be,n("对照 ant-design 的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let Ve=i(`rue:component:anchor`);l(j,Ve),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:w.value,onChange:e=>w.value=e,className:`mb-3`}),j,Ve)});let He=i(`rue:slot:anchor`);l(j,He),u(()=>{c(w.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(C,{className:`bg-base-200 rounded-box w-80`,items:Me,multiple:!0,selectedKeys:Te.value,onSelect:e=>Te.value=e.selectedKeys,onDeselect:e=>Te.value=e.selectedKeys}),e,t)}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

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
/>`}),e,t)}),e}),j,He)});let M=e(`div`);l(m,M),o(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ue=e(`h2`);l(M,Ue),o(Ue,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Ue,n(`# 推荐：组合式增强 API`));let We=e(`p`);l(M,We),o(We,`mb-3 text-sm text-base-content/70`),l(We,n("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ge=i(`rue:component:anchor`);l(M,Ge),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:T.value,onChange:e=>T.value=e,className:`mb-3`}),M,Ge)});let Ke=i(`rue:slot:anchor`);l(M,Ke),u(()=>{c(T.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t);let n=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t);let n=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),u(()=>{c(f(C.Item,{eventKey:`profile`,icon:v(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`}),e,t)});let n=i(`rue:component:anchor`);return l(e,n),u(()=>{c(f(C.Item,{eventKey:`notifications`,extra:v(S,{size:`xs`,children:`2`}),children:`Notifications`}),e,n)}),e});c(f(C.ItemGroup,{title:`Account`,children:n}),e,t);let r=i(`rue:component:anchor`);l(e,r),c(f(C.Divider,{}),e,r);let o=i(`rue:component:anchor`);l(e,o);let s=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{eventKey:`security`,children:`Security`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,n),e});return u(()=>{c(f(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:v(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:s}),e,o)}),e});return u(()=>{c(f(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:Ee.value,openKeys:De.value,onSelect:e=>Ee.value=e.selectedKeys,onOpenChange:e=>De.value=e,children:n}),e,t)}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`}),e,t)}),e}),M,Ke)});let qe=e(`div`);l(m,qe),o(qe,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),l(qe,n(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=e(`div`);l(m,N),o(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Je=e(`h2`);l(N,Je),o(Je,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Je,n(`# 导航跳转`));let Ye=i(`rue:component:anchor`);l(N,Ye),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`}),N,Ye)});let Xe=i(`rue:slot:anchor`);l(N,Xe),u(()=>{c(Se.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(f(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`}),e,t)}),e}),N,Xe)});let P=e(`div`);l(m,P),o(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ze=e(`h2`);l(P,Ze),o(Ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Ze,n(`# Menu 通过数据渲染（数组）`));let Qe=i(`rue:component:anchor`);l(P,Qe),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`}),P,Qe)});let $e=i(`rue:slot:anchor`);l(P,$e),u(()=>{c(be.value===`preview`?p(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(f(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:ke.map((n,r)=>p(()=>{let o=e(`li`);u(()=>{t(o,`key`,String(r))});let s=i(`rue:component:anchor`);l(o,s),c(f(C.Item,{children:n.label}),o,s);let d=i(`rue:component:anchor`);return l(o,d),c(f(C.Submenu,{children:n.children.map((e,t)=>typeof e==`string`?v(C.Item,{children:e},t):_(`li`,{children:[v(C.Item,{children:e.label}),v(C.Submenu,{children:e.children.map((e,t)=>p(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),u(()=>{c(f(C.Item,{key:t,children:e}),n,r)}),n}))})]},t))}),o,d),o}))}),n,r),n}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`}),e,t)}),e}),P,$e)});let F=e(`div`);l(m,F),o(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let et=e(`h2`);l(F,et),o(et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(et,n(`# Menu 通过数据渲染（数组，组件内部）`));let tt=i(`rue:component:anchor`);l(F,tt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`}),F,tt)});let nt=i(`rue:slot:anchor`);l(F,nt),u(()=>{c(xe.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(C,{items:Ae,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`}),e,t)}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`}),e,t)}),e}),F,nt)});let I=e(`div`);l(m,I),o(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let rt=e(`h2`);l(I,rt),o(rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(rt,n(`# Menu`));let it=i(`rue:component:anchor`);l(I,it),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`}),I,it)});let at=i(`rue:slot:anchor`);l(I,at),u(()=>{c(E.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{as:`button`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(f(C.Item,{as:`button`,children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),I,at)});let L=e(`div`);l(m,L),o(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let ot=e(`h2`);l(L,ot),o(ot,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(ot,n(`# 响应式：小屏垂直，大屏水平`));let st=i(`rue:component:anchor`);l(L,st),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`}),L,st)});let ct=i(`rue:slot:anchor`);l(L,ct),u(()=>{c(D.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(f(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{as:`button`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(f(C.Item,{as:`button`,children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),L,ct)});let R=e(`div`);l(m,R),o(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let lt=e(`h2`);l(R,lt),o(lt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(lt,n(`# 仅图标`));let ut=i(`rue:component:anchor`);l(R,ut),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`}),R,ut)});let dt=i(`rue:slot:anchor`);l(R,dt),u(()=>{c(ne.value===`preview`?p(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(f(C,{className:`bg-base-200 rounded-box`,children:p(()=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n});c(f(C.Item,{as:`button`,children:s}),n,r);let u=i(`rue:component:anchor`);l(n,u);let d=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});c(f(C.Item,{as:`button`,children:d}),n,u);let m=i(`rue:component:anchor`);l(n,m);let h=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return c(f(C.Item,{as:`button`,children:h}),n,m),n})}),n,r),n}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`}),e,t)}),e}),R,dt)});let z=e(`div`);l(m,z),o(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let ft=e(`h2`);l(z,ft),o(ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(ft,n(`# 仅图标（水平）`));let pt=i(`rue:component:anchor`);l(z,pt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`}),z,pt)});let mt=i(`rue:slot:anchor`);l(z,mt),u(()=>{c(re.value===`preview`?p(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(f(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:p(()=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n});c(f(C.Item,{as:`button`,children:s}),n,r);let u=i(`rue:component:anchor`);l(n,u);let d=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});c(f(C.Item,{as:`button`,children:d}),n,u);let m=i(`rue:component:anchor`);l(n,m);let h=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return c(f(C.Item,{as:`button`,children:h}),n,m),n})}),n,r),n}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`}),e,t)}),e}),z,mt)});let B=e(`div`);l(m,B),o(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let ht=e(`h2`);l(B,ht),o(ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(ht,n(`# 仅图标（带 tooltip）`));let gt=i(`rue:component:anchor`);l(B,gt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`}),B,gt)});let _t=i(`rue:slot:anchor`);l(B,_t),u(()=>{c(ie.value===`preview`?p(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(f(C,{className:`bg-base-200 rounded-box`,children:p(()=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),n});c(f(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:s}),n,r);let u=i(`rue:component:anchor`);l(n,u);let d=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});c(f(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:d}),n,u);let m=i(`rue:component:anchor`);l(n,m);let h=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return c(f(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:h}),n,m),n})}),n,r),n}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`}),e,t)}),e}),B,_t)});let V=e(`div`);l(m,V),o(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let vt=e(`h2`);l(V,vt),o(vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(vt,n(`# 仅图标（水平，tooltip）`));let yt=i(`rue:component:anchor`);l(V,yt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`}),V,yt)});let bt=i(`rue:slot:anchor`);l(V,bt),u(()=>{c(ae.value===`preview`?p(()=>{let n=a(),r=i(`rue:component:anchor`);return l(n,r),c(f(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:p(()=>{let n=a(),r=i(`rue:component:anchor`);l(n,r);let s=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),n});c(f(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:s}),n,r);let u=i(`rue:component:anchor`);l(n,u);let d=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});c(f(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:d}),n,u);let m=i(`rue:component:anchor`);l(n,m);let h=p(()=>{let n=a(),r=e(`svg`);l(n,r),t(r,`xmlns`,`http://www.w3.org/2000/svg`),o(r,`h-5 w-5`),t(r,`fill`,`none`),t(r,`viewBox`,`0 0 24 24`),t(r,`stroke`,`currentColor`);let i=e(`path`);return l(r,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),n});return c(f(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:h}),n,m),n})}),n,r),n}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`}),e,t)}),e}),V,bt)});let H=e(`div`);l(m,H),o(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let xt=e(`h2`);l(H,xt),o(xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(xt,n(`# Menu 尺寸`));let St=i(`rue:component:anchor`);l(H,St),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`}),H,St)});let Ct=i(`rue:slot:anchor`);l(H,Ct),u(()=>{c(oe.value===`preview`?p(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`grid gap-6`);let r=i(`rue:component:anchor`);l(n,r),c(f(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Xsmall 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{as:`button`,children:`Xsmall 2`}),e,n),e})}),n,r);let s=i(`rue:component:anchor`);l(n,s),c(f(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Small 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{as:`button`,children:`Small 2`}),e,n),e})}),n,s);let u=i(`rue:component:anchor`);l(n,u),c(f(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Medium 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{as:`button`,children:`Medium 2`}),e,n),e})}),n,u);let d=i(`rue:component:anchor`);l(n,d),c(f(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Large 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{as:`button`,children:`Large 2`}),e,n),e})}),n,d);let m=i(`rue:component:anchor`);return l(n,m),c(f(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Xlarge 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{as:`button`,children:`Xlarge 2`}),e,n),e})}),n,m),t}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`}),e,t)}),e}),H,Ct)});let U=e(`div`);l(m,U),o(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let wt=e(`h2`);l(U,wt),o(wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(wt,n(`# 禁用项目`));let Tt=i(`rue:component:anchor`);l(U,Tt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`}),U,Tt)});let Et=i(`rue:slot:anchor`);l(U,Et),u(()=>{c(se.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Enabled item`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(f(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`}),e,t)}),e}),U,Et)});let W=e(`div`);l(m,W),o(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Dt=e(`h2`);l(W,Dt),o(Dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Dt,n(`# 带图标`));let Ot=i(`rue:component:anchor`);l(W,Ot),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`}),W,Ot)});let kt=i(`rue:slot:anchor`);l(W,kt),u(()=>{c(ce.value===`preview`?p(()=>{let r=a(),s=i(`rue:component:anchor`);return l(r,s),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let r=a(),s=i(`rue:component:anchor`);l(r,s);let u=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),o(i,`h-5 w-5`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`stroke`,`currentColor`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`strokeWidth`,`2`),t(s,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),l(r,n(`Item 2`)),r});c(f(C.Item,{as:`button`,children:u}),r,s);let d=i(`rue:component:anchor`);l(r,d);let m=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),o(i,`h-5 w-5`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`stroke`,`currentColor`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`strokeWidth`,`2`),t(s,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),l(r,n(`Item 1`)),r});c(f(C.Item,{as:`button`,children:m}),r,d);let h=i(`rue:component:anchor`);l(r,h);let g=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),o(i,`h-5 w-5`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`stroke`,`currentColor`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`strokeWidth`,`2`),t(s,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),l(r,n(`Item 3`)),r});return c(f(C.Item,{as:`button`,children:g}),r,h),r})}),r,s),r}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}),e,t)}),e}),W,kt)});let G=e(`div`);l(m,G),o(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let At=e(`h2`);l(G,At),o(At,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(At,n(`# 带图标与徽章（响应式）`));let jt=i(`rue:component:anchor`);l(G,jt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`}),G,jt)});let Mt=i(`rue:slot:anchor`);l(G,Mt),u(()=>{c(O.value===`preview`?p(()=>{let u=a(),d=i(`rue:component:anchor`);return l(u,d),c(f(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:p(()=>{let u=a(),d=i(`rue:component:anchor`);l(u,d);let m=p(()=>{let r=a(),s=e(`svg`);l(r,s),t(s,`xmlns`,`http://www.w3.org/2000/svg`),o(s,`h-5 w-5`),t(s,`fill`,`none`),t(s,`viewBox`,`0 0 24 24`),t(s,`stroke`,`currentColor`);let u=e(`path`);l(s,u),t(u,`strokeLinecap`,`round`),t(u,`strokeLinejoin`,`round`),t(u,`strokeWidth`,`2`),t(u,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),l(r,n(`Inbox`));let d=i(`rue:component:anchor`);return l(r,d),c(f(S,{size:`xs`,children:`99+`}),r,d),r});c(f(C.Item,{as:`button`,children:m}),u,d);let h=i(`rue:component:anchor`);l(u,h);let g=p(()=>{let u=a(),d=e(`svg`);l(u,d),t(d,`xmlns`,`http://www.w3.org/2000/svg`),o(d,`h-5 w-5`),t(d,`fill`,`none`),t(d,`viewBox`,`0 0 24 24`),t(d,`stroke`,`currentColor`);let p=e(`path`);l(d,p),t(p,`strokeLinecap`,`round`),t(p,`strokeLinejoin`,`round`),t(p,`strokeWidth`,`2`),t(p,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),l(u,n(`Updates`));let m=r(u);l(u,m),s(m,` `);let h=i(`rue:component:anchor`);return l(u,h),c(f(S,{size:`xs`,variant:`warning`,children:`NEW`}),u,h),u});c(f(C.Item,{as:`button`,children:g}),u,h);let _=i(`rue:component:anchor`);l(u,_);let v=p(()=>{let e=a();l(e,n(`Stats`));let t=i(`rue:component:anchor`);return l(e,t),c(f(S,{size:`xs`,variant:`info`}),e,t),e});return c(f(C.Item,{as:`button`,children:v}),u,_),u})}),u,d),u}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`}),e,t)}),e}),G,Mt)});let K=e(`div`);l(m,K),o(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Nt=e(`h2`);l(K,Nt),o(Nt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Nt,n(`# 去除内边距和圆角`));let Pt=i(`rue:component:anchor`);l(K,Pt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`}),K,Pt)});let Ft=i(`rue:slot:anchor`);l(K,Ft),u(()=>{c(k.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(f(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(f(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),K,Ft)});let q=e(`div`);l(m,q),o(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let It=e(`h2`);l(q,It),o(It,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(It,n(`# 带标题`));let Lt=i(`rue:component:anchor`);l(q,Lt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`}),q,Lt)});let Rt=i(`rue:slot:anchor`);l(q,Rt),u(()=>{c(le.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Title,{children:`Title`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{children:`Item 1`}),e,n);let r=i(`rue:component:anchor`);l(e,r),c(f(C.Item,{children:`Item 2`}),e,r);let o=i(`rue:component:anchor`);return l(e,o),c(f(C.Item,{children:`Item 3`}),e,o),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),q,Rt)});let J=e(`div`);l(m,J),o(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let zt=e(`h2`);l(J,zt),o(zt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(zt,n(`# 标题作为父级`));let Bt=i(`rue:component:anchor`);l(J,Bt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`}),J,Bt)});let Vt=i(`rue:slot:anchor`);l(J,Vt),u(()=>{c(ue.value===`preview`?p(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let t=a(),n=e(`li`);l(t,n);let r=i(`rue:component:anchor`);l(n,r),c(f(C.Title,{as:`h2`,children:`Title`}),n,r);let o=e(`ul`);l(n,o);let s=i(`rue:component:anchor`);l(o,s),c(f(C.Item,{children:`Item 1`}),o,s);let u=i(`rue:component:anchor`);l(o,u),c(f(C.Item,{children:`Item 2`}),o,u);let d=i(`rue:component:anchor`);return l(o,d),c(f(C.Item,{children:`Item 3`}),o,d),t})}),t,n),t}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`}),e,t)}),e}),J,Vt)});let Y=e(`div`);l(m,Y),o(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ht=e(`h2`);l(Y,Ht),o(Ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Ht,n(`# 子菜单`));let Ut=i(`rue:component:anchor`);l(Y,Ut),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`}),Y,Ut)});let Wt=i(`rue:slot:anchor`);l(Y,Wt),u(()=>{c(de.value===`preview`?p(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(f(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=e(`li`);l(t,r);let o=i(`rue:component:anchor`);l(r,o),c(f(C.Item,{as:`button`,children:`Parent`}),r,o);let s=i(`rue:component:anchor`);l(r,s);let u=p(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(f(C.Item,{as:`button`,children:`Submenu 1`}),t,n);let r=i(`rue:component:anchor`);l(t,r),c(f(C.Item,{as:`button`,children:`Submenu 2`}),t,r);let o=e(`li`);l(t,o);let s=i(`rue:component:anchor`);l(o,s),c(f(C.Item,{as:`button`,children:`Parent`}),o,s);let u=i(`rue:component:anchor`);l(o,u);let d=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{as:`button`,children:`Submenu 2`}),e,n),e});return c(f(C.Submenu,{children:d}),o,u),t});c(f(C.Submenu,{children:u}),r,s);let d=i(`rue:component:anchor`);return l(t,d),c(f(C.Item,{as:`button`,children:`Item 3`}),t,d),t})}),t,n),t}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}),e,t)}),e}),Y,Wt)});let X=e(`div`);l(m,X),o(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Gt=e(`h2`);l(X,Gt),o(Gt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Gt,n(`# 可折叠子菜单`));let Kt=i(`rue:component:anchor`);l(X,Kt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`}),X,Kt)});let qt=i(`rue:slot:anchor`);l(X,qt),u(()=>{c(fe.value===`preview`?p(()=>{let t=a(),r=i(`rue:component:anchor`);return l(t,r),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let t=a(),r=i(`rue:component:anchor`);l(t,r),c(f(C.Item,{as:`button`,children:`Item 1`}),t,r);let o=e(`li`);l(t,o);let s=e(`details`);l(o,s);let u=e(`summary`);l(s,u),l(u,n(`Parent`));let d=e(`ul`);l(s,d);let p=i(`rue:component:anchor`);l(d,p),c(f(C.Item,{as:`button`,children:`Submenu 1`}),d,p);let m=i(`rue:component:anchor`);l(d,m),c(f(C.Item,{as:`button`,children:`Submenu 2`}),d,m);let h=e(`li`);l(d,h);let g=e(`details`);l(h,g);let _=e(`summary`);l(g,_),l(_,n(`Parent`));let v=e(`ul`);l(g,v);let y=i(`rue:component:anchor`);l(v,y),c(f(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=i(`rue:component:anchor`);l(v,b),c(f(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=i(`rue:component:anchor`);return l(t,x),c(f(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,r),t}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}),e,t)}),e}),X,qt)});let Z=e(`div`);l(m,Z),o(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Jt=e(`h2`);l(Z,Jt),o(Jt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Jt,n(`# 通过类名控制展开（JS）`));let Yt=i(`rue:component:anchor`);l(Z,Yt),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`}),Z,Yt)});let Xt=i(`rue:slot:anchor`);l(Z,Xt),u(()=>{c(pe.value===`preview`?p(()=>{let t=a(),n=e(`div`);l(t,n),o(n,`grid gap-6`);let r=i(`rue:component:anchor`);l(n,r),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(f(C.Item,{children:`Item 1`}),t,n);let r=e(`li`);l(t,r);let o=i(`rue:component:anchor`);l(r,o),c(f(C.DropdownToggle,{onClick:Oe,children:`Parent`}),r,o);let s=i(`rue:component:anchor`);l(r,s);let u=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{children:`Submenu 2`}),e,n),e});return c(f(C.Dropdown,{children:u}),r,s),t})}),n,r);let s=i(`rue:component:anchor`);return l(n,s),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(f(C.Item,{children:`Item 1`}),t,n);let r=e(`li`);l(t,r);let o=i(`rue:component:anchor`);l(r,o),u(()=>{c(f(C.DropdownToggle,{show:!0,onClick:Oe,children:`Parent`}),r,o)});let s=i(`rue:component:anchor`);l(r,s);let d=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{children:`Submenu 2`}),e,n),e});return u(()=>{c(f(C.Dropdown,{show:!0,children:d}),r,s)}),t})}),n,s),t}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`}),e,t)}),e}),Z,Xt)});let Zt=e(`div`);l(m,Zt),o(Zt,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qt=e(`h2`);l(Zt,Qt),o(Qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(Qt,n(`# 文件树`));let $t=i(`rue:component:anchor`);l(Zt,$t),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`}),Zt,$t)});let en=i(`rue:slot:anchor`);l(Zt,en),u(()=>{c(me.value===`preview`?p(()=>{let r=a(),s=i(`rue:component:anchor`);return l(r,s),c(f(C,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:p(()=>{let r=a(),s=i(`rue:component:anchor`);l(r,s);let u=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),l(r,n(`resume.pdf`)),r});c(f(C.Item,{as:`button`,children:u}),r,s);let d=e(`li`);l(r,d);let m=e(`details`);l(d,m);let h=e(`summary`);l(m,h);let g=e(`svg`);l(h,g),t(g,`xmlns`,`http://www.w3.org/2000/svg`),t(g,`fill`,`none`),t(g,`viewBox`,`0 0 24 24`),t(g,`strokeWidth`,`1.5`),t(g,`stroke`,`currentColor`),o(g,`w-4 h-4`);let _=e(`path`);l(g,_),t(_,`strokeLinecap`,`round`),t(_,`strokeLinejoin`,`round`),t(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),l(h,n(`My Files`));let v=e(`ul`);l(m,v);let y=i(`rue:component:anchor`);l(v,y);let b=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),l(r,n(`Project-final.psd`)),r});c(f(C.Item,{as:`button`,children:b}),v,y);let x=i(`rue:component:anchor`);l(v,x);let S=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),l(r,n(`Project-final-2.psd`)),r});c(f(C.Item,{as:`button`,children:S}),v,x);let ee=e(`li`);l(v,ee);let te=e(`details`);l(ee,te);let w=e(`summary`);l(te,w);let T=e(`svg`);l(w,T),t(T,`xmlns`,`http://www.w3.org/2000/svg`),t(T,`fill`,`none`),t(T,`viewBox`,`0 0 24 24`),t(T,`strokeWidth`,`1.5`),t(T,`stroke`,`currentColor`),o(T,`w-4 h-4`);let E=e(`path`);l(T,E),t(E,`strokeLinecap`,`round`),t(E,`strokeLinejoin`,`round`),t(E,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),l(w,n(`Images`));let D=e(`ul`);l(te,D);let ne=i(`rue:component:anchor`);l(D,ne);let re=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),l(r,n(`Screenshot1.png`)),r});c(f(C.Item,{as:`button`,children:re}),D,ne);let ie=i(`rue:component:anchor`);l(D,ie);let ae=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),l(r,n(`Screenshot2.png`)),r});c(f(C.Item,{as:`button`,children:ae}),D,ie);let oe=e(`li`);l(D,oe);let se=e(`details`);l(oe,se);let ce=e(`summary`);l(se,ce);let O=e(`svg`);l(ce,O),t(O,`xmlns`,`http://www.w3.org/2000/svg`),t(O,`fill`,`none`),t(O,`viewBox`,`0 0 24 24`),t(O,`strokeWidth`,`1.5`),t(O,`stroke`,`currentColor`),o(O,`w-4 h-4`);let k=e(`path`);l(O,k),t(k,`strokeLinecap`,`round`),t(k,`strokeLinejoin`,`round`),t(k,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),l(ce,n(`Others`));let le=e(`ul`);l(se,le);let ue=i(`rue:component:anchor`);l(le,ue);let de=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),l(r,n(`Screenshot3.png`)),r});c(f(C.Item,{as:`button`,children:de}),le,ue);let fe=i(`rue:component:anchor`);l(r,fe);let pe=p(()=>{let r=a(),i=e(`svg`);l(r,i),t(i,`xmlns`,`http://www.w3.org/2000/svg`),t(i,`fill`,`none`),t(i,`viewBox`,`0 0 24 24`),t(i,`strokeWidth`,`1.5`),t(i,`stroke`,`currentColor`),o(i,`w-4 h-4`);let s=e(`path`);return l(i,s),t(s,`strokeLinecap`,`round`),t(s,`strokeLinejoin`,`round`),t(s,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),l(r,n(`reports-final-2.pdf`)),r});return c(f(C.Item,{as:`button`,children:pe}),r,fe),r})}),r,s),r}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`}),e,t)}),e}),Zt,en)});let Q=e(`div`);l(m,Q),o(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let tn=e(`h2`);l(Q,tn),o(tn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(tn,n(`# 激活项`));let nn=i(`rue:component:anchor`);l(Q,nn),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`}),Q,nn)});let rn=i(`rue:slot:anchor`);l(Q,rn),u(()=>{c(he.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(f(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{className:`menu-active`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(f(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`}),e,t)}),e}),Q,rn)});let an=e(`div`);l(m,an),o(an,`component-preview not-prose text-base-content my-6 lg:my-12`);let on=e(`h2`);l(an,on),o(on,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(on,n(`# 水平菜单`));let sn=i(`rue:component:anchor`);l(an,sn),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`}),an,sn)});let cn=i(`rue:slot:anchor`);l(an,cn),u(()=>{c(ge.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),c(f(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(f(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),an,cn)});let ln=e(`div`);l(m,ln),o(ln,`component-preview not-prose text-base-content my-6 lg:my-12`);let un=e(`h2`);l(ln,un),o(un,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(un,n(`# 水平子菜单`));let dn=i(`rue:component:anchor`);l(ln,dn),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`}),ln,dn)});let fn=i(`rue:slot:anchor`);l(ln,fn),u(()=>{c(_e.value===`preview`?p(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),c(f(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:p(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(f(C.Item,{children:`Item 1`}),t,n);let r=e(`li`);l(t,r);let o=i(`rue:component:anchor`);l(r,o),c(f(C.Item,{children:`Parent`}),r,o);let s=i(`rue:component:anchor`);l(r,s);let u=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return l(e,n),c(f(C.Item,{children:`Submenu 2`}),e,n),e});c(f(C.Submenu,{children:u}),r,s);let d=i(`rue:component:anchor`);return l(t,d),c(f(C.Item,{children:`Item 3`}),t,d),t})}),t,n),t}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}),e,t)}),e}),ln,fn)});let pn=e(`div`);l(m,pn),o(pn,`component-preview not-prose text-base-content my-6 lg:my-12`);let mn=e(`h2`);l(pn,mn),o(mn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(mn,n(`# Mega 菜单（响应式）`));let hn=i(`rue:component:anchor`);l(pn,hn),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`}),pn,hn)});let gn=i(`rue:slot:anchor`);l(pn,gn),u(()=>{c(ve.value===`preview`?p(()=>{let t=a(),n=i(`rue:component:anchor`);return l(t,n),c(f(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:p(()=>{let t=a(),n=e(`li`);l(t,n);let r=i(`rue:component:anchor`);l(n,r),c(f(C.Item,{children:`Solutions`}),n,r);let o=i(`rue:component:anchor`);l(n,o);let s=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`Design`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{children:`Development`}),e,n);let r=i(`rue:component:anchor`);l(e,r),c(f(C.Item,{children:`Hosting`}),e,r);let o=i(`rue:component:anchor`);return l(e,o),c(f(C.Item,{children:`Domain register`}),e,o),e});c(f(C.Submenu,{children:s}),n,o);let u=e(`li`);l(t,u);let d=i(`rue:component:anchor`);l(u,d),c(f(C.Item,{children:`Enterprise`}),u,d);let m=i(`rue:component:anchor`);l(u,m);let h=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`CRM software`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{children:`Marketing management`}),e,n);let r=i(`rue:component:anchor`);l(e,r),c(f(C.Item,{children:`Security`}),e,r);let o=i(`rue:component:anchor`);return l(e,o),c(f(C.Item,{children:`Consulting`}),e,o),e});c(f(C.Submenu,{children:h}),u,m);let g=e(`li`);l(t,g);let _=i(`rue:component:anchor`);l(g,_),c(f(C.Item,{children:`Products`}),g,_);let v=i(`rue:component:anchor`);l(g,v);let y=p(()=>{let t=a(),n=i(`rue:component:anchor`);l(t,n),c(f(C.Item,{children:`UI Kit`}),t,n);let r=i(`rue:component:anchor`);l(t,r),c(f(C.Item,{children:`WordPress themes`}),t,r);let o=i(`rue:component:anchor`);l(t,o),c(f(C.Item,{children:`WordPress plugins`}),t,o);let s=e(`li`);l(t,s);let u=i(`rue:component:anchor`);l(s,u),c(f(C.Item,{children:`Open source`}),s,u);let d=i(`rue:component:anchor`);l(s,d);let m=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`Auth management system`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{children:`VScode theme`}),e,n);let r=i(`rue:component:anchor`);return l(e,r),c(f(C.Item,{children:`Color picker app`}),e,r),e});return c(f(C.Submenu,{children:m}),s,d),t});c(f(C.Submenu,{children:y}),g,v);let b=e(`li`);l(t,b);let x=i(`rue:component:anchor`);l(b,x),c(f(C.Item,{children:`Company`}),b,x);let S=i(`rue:component:anchor`);l(b,S);let ee=p(()=>{let e=a(),t=i(`rue:component:anchor`);l(e,t),c(f(C.Item,{children:`About us`}),e,t);let n=i(`rue:component:anchor`);l(e,n),c(f(C.Item,{children:`Contact us`}),e,n);let r=i(`rue:component:anchor`);l(e,r),c(f(C.Item,{children:`Privacy policy`}),e,r);let o=i(`rue:component:anchor`);return l(e,o),c(f(C.Item,{children:`Press kit`}),e,o),e});return c(f(C.Submenu,{children:ee}),b,S),t})}),t,n),t}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`}),e,t)}),e}),pn,gn)});let $=e(`div`);l(m,$),o($,`component-preview not-prose text-base-content my-6 lg:my-12`);let _n=e(`h2`);l($,_n),o(_n,`component-preview-title mt-2 mb-1 text-lg font-semibold`),l(_n,n(`# 可折叠（响应式）`));let vn=i(`rue:component:anchor`);l($,vn),u(()=>{c(f(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`}),$,vn)});let yn=i(`rue:slot:anchor`);l($,yn),u(()=>{c(ye.value===`preview`?p(()=>{let t=a(),r=i(`rue:component:anchor`);return l(t,r),c(f(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:p(()=>{let t=a(),r=i(`rue:component:anchor`);l(t,r),c(f(C.Item,{as:`button`,children:`Item 1`}),t,r);let o=e(`li`);l(t,o);let s=e(`details`);l(o,s);let u=e(`summary`);l(s,u),l(u,n(`Parent item`));let d=e(`ul`);l(s,d);let p=i(`rue:component:anchor`);l(d,p),c(f(C.Item,{as:`button`,children:`Submenu 1`}),d,p);let m=i(`rue:component:anchor`);l(d,m),c(f(C.Item,{as:`button`,children:`Submenu 2`}),d,m);let h=e(`li`);l(d,h);let g=e(`details`);l(h,g);let _=e(`summary`);l(g,_),l(_,n(`Parent`));let v=e(`ul`);l(g,v);let y=i(`rue:component:anchor`);l(v,y),c(f(C.Item,{as:`button`,children:`item 1`}),v,y);let b=i(`rue:component:anchor`);l(v,b),c(f(C.Item,{as:`button`,children:`item 2`}),v,b);let x=i(`rue:component:anchor`);return l(t,x),c(f(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,r),t}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return l(e,t),u(()=>{c(f(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`}),e,t)}),e}),$,yn)});let bn=e(`h2`);l(m,bn),l(bn,n(`API`));let xn=e(`p`);l(m,xn),o(xn,`text-sm text-base-content/70`),l(xn,n("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Sn=e(`h3`);l(m,Sn),l(Sn,n(`Menu.Item 链接相关`));let Cn=i(`rue:component:anchor`);return l(m,Cn),u(()=>{c(f(ee,{rows:te}),m,Cn)}),d})}),d,m),d})};export{w as default};
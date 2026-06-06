import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,c,ct as l,et as u,l as d,mt as f,ot as p,s as m,t as h,tt as g}from"./vapor-runtime-DHPuOjqh.js";import{a as _,n as v}from"./vapor-helpers-vapor-CJFAWine.js";import{i as y}from"./persistentSidebarPlayground-C_0jw6dq.js";import{t as b}from"./Code-Ds9lKLk6.js";import{t as x}from"./tabs-DSy0eY-V.js";import{t as S}from"./badge-D84isAR2.js";import{t as C}from"./menu-BsVApB2d.js";import{n as w}from"./SidebarPlaygroundDesign-DMSFSCs3.js";var T=t=>d(n=>{let c=e(`div`,n);l(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=e(`table`,c);a(c,f),l(f,`table table-zebra`);let h=e(`thead`,f);a(f,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,u(`属性`));let y=e(`th`,g);a(g,y),a(y,u(`说明`));let b=e(`th`,g);a(g,b),a(b,u(`类型`));let x=e(`th`,g);a(g,x),a(x,u(`默认值`));let S=e(`tbody`,f);a(f,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,l,u)=>{m(d(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{p(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=s(`rue:slot:anchor`);a(u,d),o(()=>{let e=t.prop;i(()=>m(e,u,d))});let f=e(`td`,c);a(c,f);let h=s(`rue:slot:anchor`);a(f,h),o(()=>{let e=t.description;i(()=>m(e,f,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>m(e,b,x))}),n}),n,c)}})}),c}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKeys:Te,recommendedOpenKeys:Ee,multipleSelectedKeys:De,compoundSelectedKeys:Oe,compoundOpenKeys:ke,toggleDropdownByClass:Ae,menuData:je,menuItems:Me}=_(`useSetup:0:0`,()=>t(()=>({tRecommended:_(`ref:1:0`,()=>n(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>n(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>n(`preview`)),tBasic:_(`ref:1:3`,()=>n(`preview`)),tResponsive:_(`ref:1:4`,()=>n(`preview`)),tIconOnly:_(`ref:1:5`,()=>n(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>n(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>n(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>n(`preview`)),tSizes:_(`ref:1:9`,()=>n(`preview`)),tDisabled:_(`ref:1:10`,()=>n(`preview`)),tIcons:_(`ref:1:11`,()=>n(`preview`)),tIconsBadge:_(`ref:1:12`,()=>n(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>n(`preview`)),tTitle:_(`ref:1:14`,()=>n(`preview`)),tTitleParent:_(`ref:1:15`,()=>n(`preview`)),tSubmenu:_(`ref:1:16`,()=>n(`preview`)),tCollapsible:_(`ref:1:17`,()=>n(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>n(`preview`)),tFileTree:_(`ref:1:19`,()=>n(`preview`)),tActiveItem:_(`ref:1:20`,()=>n(`preview`)),tHorizontal:_(`ref:1:21`,()=>n(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>n(`preview`)),tMega:_(`ref:1:23`,()=>n(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>n(`preview`)),tArray:_(`ref:1:25`,()=>n(`preview`)),tArrayInternal:_(`ref:1:26`,()=>n(`preview`)),tNavigation:_(`ref:1:27`,()=>n(`preview`)),recommendedSelectedKeys:_(`ref:1:28`,()=>n([`overview`])),recommendedOpenKeys:_(`ref:1:29`,()=>n([`workspace`])),multipleSelectedKeys:_(`ref:1:30`,()=>n([`mentions`,`archived`])),compoundSelectedKeys:_(`ref:1:31`,()=>n([`profile`])),compoundOpenKeys:_(`ref:1:32`,()=>n([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Ne=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Pe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return d(t=>{let n=r(),_=s(`rue:component:anchor`);return a(n,_),m(h(w,{children:d(()=>{let t=r(),n=e(`div`,t);a(t,n),l(n,`max-w-none prose prose-sm md:prose-base`);let _=e(`h1`,n);a(n,_),a(_,u(`Menu 菜单`));let w=e(`p`,n);a(n,w),l(w,`text-sm mt-3 mb-3`),a(w,u("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let A=e(`div`,n);a(n,A),l(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Fe=e(`h2`,A);a(A,Fe),l(Fe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Fe,u(`# 推荐：items 数据驱动导航`));let Ie=e(`p`,A);a(A,Ie),l(Ie,`mb-3 text-sm text-base-content/70`),a(Ie,u(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Le=s(`rue:component:anchor`);a(A,Le),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});i(()=>m(e,A,Le))});let Re=s(`rue:slot:anchor`);a(A,Re),o(()=>{let e=E.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(C,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:Ne,selectedKeys:Te.value,openKeys:Ee.value,onSelect:e=>Te.value=e.selectedKeys,onOpenChange:e=>Ee.value=e});i(()=>m(n,e,t))}),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});i(()=>m(n,e,t))}),e});i(()=>m(e,A,Re))});let j=e(`div`,n);a(n,j),l(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let ze=e(`h2`,j);a(j,ze),l(ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ze,u(`# 推荐：多选、分组与分割线`));let Be=e(`p`,j);a(j,Be),l(Be,`mb-3 text-sm text-base-content/70`),a(Be,u("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let Ve=s(`rue:component:anchor`);a(j,Ve),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});i(()=>m(e,j,Ve))});let He=s(`rue:slot:anchor`);a(j,He),o(()=>{let e=te.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(C,{className:`bg-base-200 rounded-box w-80`,items:Pe,multiple:!0,selectedKeys:De.value,onSelect:e=>De.value=e.selectedKeys,onDeselect:e=>De.value=e.selectedKeys});i(()=>m(n,e,t))}),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

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
/>`});i(()=>m(n,e,t))}),e});i(()=>m(e,j,He))});let M=e(`div`,n);a(n,M),l(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ue=e(`h2`,M);a(M,Ue),l(Ue,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ue,u(`# 推荐：组合式增强 API`));let We=e(`p`,M);a(M,We),l(We,`mb-3 text-sm text-base-content/70`),a(We,u("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ge=s(`rue:component:anchor`);a(M,Ge),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});i(()=>m(e,M,Ge))});let Ke=s(`rue:slot:anchor`);a(M,Ke),o(()=>{let e=D.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t);let n=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t);let n=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),o(()=>{let n=h(C.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});i(()=>m(n,e,t))});let n=s(`rue:component:anchor`);return a(e,n),o(()=>{let t=h(C.Item,{eventKey:`notifications`,extra:y(S,{size:`xs`,children:`2`}),children:`Notifications`});i(()=>m(t,e,n))}),e});m(h(C.ItemGroup,{title:`Account`,children:n}),e,t);let c=s(`rue:component:anchor`);a(e,c),m(h(C.Divider,{}),e,c);let l=s(`rue:component:anchor`);a(e,l);let u=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{eventKey:`security`,children:`Security`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,n),e});return o(()=>{let t=h(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:u});i(()=>m(t,e,l))}),e});return o(()=>{let r=h(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:Oe.value,openKeys:ke.value,onSelect:e=>Oe.value=e.selectedKeys,onOpenChange:e=>ke.value=e,children:n});i(()=>m(r,e,t))}),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,M,Ke))});let qe=e(`div`,n);a(n,qe),l(qe,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),a(qe,u(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=e(`div`,n);a(n,N),l(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Je=e(`h2`,N);a(N,Je),l(Je,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Je,u(`# 导航跳转`));let Ye=s(`rue:component:anchor`);a(N,Ye),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});i(()=>m(e,N,Ye))});let Xe=s(`rue:slot:anchor`);a(N,Xe),o(()=>{let e=we.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),m(h(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,i),e})}),e,t),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,N,Xe))});let P=e(`div`,n);a(n,P),l(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ze=e(`h2`,P);a(P,Ze),l(Ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ze,u(`# Menu 通过数据渲染（数组）`));let Qe=s(`rue:component:anchor`);a(P,Qe),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});i(()=>m(e,P,Qe))});let $e=s(`rue:slot:anchor`);a(P,$e),o(()=>{let t=Se.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:d(()=>{let t=r(),n=s(`rue:list:start`),l=s(`rue:list:end`);a(t,n),a(t,l);let u=new Map;return o(()=>{u=v({items:je||[],getKey:(e,t)=>t,elements:u,parent:n.parentNode,before:l,singleRoot:!0,start:n,renderItem:(t,n,l,u,f)=>{m(d(()=>{let n=r(),l=e(`li`,n);a(n,l),o(()=>{p(l,`key`,String(f))});let u=s(`rue:component:anchor`);a(l,u),m(h(C.Item,{children:t.label}),l,u);let g=s(`rue:component:anchor`);return a(l,g),m(h(C.Submenu,{children:d(()=>{let n=r(),l=s(`rue:list:start`),u=s(`rue:list:end`);a(n,l),a(n,u);let f=new Map;return o(()=>{f=v({items:t.children||[],getKey:(e,t)=>t,elements:f,parent:l.parentNode,before:u,start:l,renderItem:(t,n,l,u,f)=>{c(d(typeof t==`string`?()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=h(C.Item,{key:f,children:t});i(()=>m(r,e,n))}),e}:()=>{let n=r(),i=e(`li`,n);a(n,i),o(()=>{p(i,`key`,String(f))});let l=s(`rue:component:anchor`);a(i,l),m(h(C.Item,{children:t.label}),i,l);let u=s(`rue:component:anchor`);return a(i,u),m(h(C.Submenu,{children:d(()=>{let e=r(),n=s(`rue:list:start`),i=s(`rue:list:end`);a(e,n),a(e,i);let l=new Map;return o(()=>{l=v({items:t.children||[],getKey:(e,t)=>t,elements:l,parent:n.parentNode,before:i,start:n,renderItem:(e,t,n,r,i)=>{c(h(C.Item,{key:i,children:e}),t,n,r)}})}),e})}),i,u),n}),n,l,u)}})}),n})}),l,g),n}),n,l)}})}),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,P,$e))});let F=e(`div`,n);a(n,F),l(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let et=e(`h2`,F);a(F,et),l(et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(et,u(`# Menu 通过数据渲染（数组，组件内部）`));let tt=s(`rue:component:anchor`);a(F,tt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});i(()=>m(e,F,tt))});let nt=s(`rue:slot:anchor`);a(F,nt),o(()=>{let e=Ce.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(C,{items:Me,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});i(()=>m(n,e,t))}),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});i(()=>m(n,e,t))}),e});i(()=>m(e,F,nt))});let I=e(`div`,n);a(n,I),l(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let rt=e(`h2`,I);a(I,rt),l(rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(rt,u(`# Menu`));let it=s(`rue:component:anchor`);a(I,it),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});i(()=>m(e,I,it))});let at=s(`rue:slot:anchor`);a(I,at),o(()=>{let e=ne.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{as:`button`,children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),m(h(C.Item,{as:`button`,children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,I,at))});let L=e(`div`,n);a(n,L),l(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let ot=e(`h2`,L);a(L,ot),l(ot,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ot,u(`# 响应式：小屏垂直，大屏水平`));let st=s(`rue:component:anchor`);a(L,st),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});i(()=>m(e,L,st))});let ct=s(`rue:slot:anchor`);a(L,ct),o(()=>{let e=re.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),m(h(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{as:`button`,children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),m(h(C.Item,{as:`button`,children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,L,ct))});let R=e(`div`,n);a(n,R),l(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let lt=e(`h2`,R);a(R,lt),l(lt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(lt,u(`# 仅图标`));let ut=s(`rue:component:anchor`);a(R,ut),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});i(()=>m(e,R,ut))});let dt=s(`rue:slot:anchor`);a(R,dt),o(()=>{let t=ie.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`bg-base-200 rounded-box`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});m(h(C.Item,{as:`button`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let c=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});m(h(C.Item,{as:`button`,children:c}),t,o);let u=s(`rue:component:anchor`);a(t,u);let f=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return m(h(C.Item,{as:`button`,children:f}),t,u),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,R,dt))});let z=e(`div`,n);a(n,z),l(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let ft=e(`h2`,z);a(z,ft),l(ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ft,u(`# 仅图标（水平）`));let pt=s(`rue:component:anchor`);a(z,pt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});i(()=>m(e,z,pt))});let mt=s(`rue:slot:anchor`);a(z,mt),o(()=>{let t=ae.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});m(h(C.Item,{as:`button`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let c=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});m(h(C.Item,{as:`button`,children:c}),t,o);let u=s(`rue:component:anchor`);a(t,u);let f=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return m(h(C.Item,{as:`button`,children:f}),t,u),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,z,mt))});let B=e(`div`,n);a(n,B),l(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let ht=e(`h2`,B);a(B,ht),l(ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ht,u(`# 仅图标（带 tooltip）`));let gt=s(`rue:component:anchor`);a(B,gt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});i(()=>m(e,B,gt))});let _t=s(`rue:slot:anchor`);a(B,_t),o(()=>{let t=oe.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`bg-base-200 rounded-box`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),t});m(h(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let c=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});m(h(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:c}),t,o);let u=s(`rue:component:anchor`);a(t,u);let f=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return m(h(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:f}),t,u),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,B,_t))});let V=e(`div`,n);a(n,V),l(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let vt=e(`h2`,V);a(V,vt),l(vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(vt,u(`# 仅图标（水平，tooltip）`));let yt=s(`rue:component:anchor`);a(V,yt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});i(()=>m(e,V,yt))});let bt=s(`rue:slot:anchor`);a(V,bt),o(()=>{let t=O.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),t});m(h(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let c=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});m(h(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:c}),t,o);let u=s(`rue:component:anchor`);a(t,u);let f=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),t});return m(h(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:f}),t,u),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,V,bt))});let H=e(`div`,n);a(n,H),l(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let xt=e(`h2`,H);a(H,xt),l(xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(xt,u(`# Menu 尺寸`));let St=s(`rue:component:anchor`);a(H,St),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});i(()=>m(e,H,St))});let Ct=s(`rue:slot:anchor`);a(H,Ct),o(()=>{let t=se.value===`preview`?d(()=>{let t=r(),n=e(`div`,t);a(t,n),l(n,`grid gap-6`);let i=s(`rue:component:anchor`);a(n,i),m(h(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Xsmall 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{as:`button`,children:`Xsmall 2`}),e,n),e})}),n,i);let o=s(`rue:component:anchor`);a(n,o),m(h(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Small 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{as:`button`,children:`Small 2`}),e,n),e})}),n,o);let c=s(`rue:component:anchor`);a(n,c),m(h(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Medium 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{as:`button`,children:`Medium 2`}),e,n),e})}),n,c);let u=s(`rue:component:anchor`);a(n,u),m(h(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Large 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{as:`button`,children:`Large 2`}),e,n),e})}),n,u);let f=s(`rue:component:anchor`);return a(n,f),m(h(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Xlarge 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{as:`button`,children:`Xlarge 2`}),e,n),e})}),n,f),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});i(()=>m(n,e,t))}),e});i(()=>m(t,H,Ct))});let U=e(`div`,n);a(n,U),l(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let wt=e(`h2`,U);a(U,wt),l(wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(wt,u(`# 禁用项目`));let Tt=s(`rue:component:anchor`);a(U,Tt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});i(()=>m(e,U,Tt))});let Et=s(`rue:slot:anchor`);a(U,Et),o(()=>{let e=k.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Enabled item`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),m(h(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,i),e})}),e,t),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,U,Et))});let W=e(`div`,n);a(n,W),l(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Dt=e(`h2`,W);a(W,Dt),l(Dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Dt,u(`# 带图标`));let Ot=s(`rue:component:anchor`);a(W,Ot),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});i(()=>m(e,W,Ot))});let kt=s(`rue:slot:anchor`);a(W,kt),o(()=>{let t=ce.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),a(t,u(`Item 2`)),t});m(h(C.Item,{as:`button`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let c=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),a(t,u(`Item 1`)),t});m(h(C.Item,{as:`button`,children:c}),t,o);let f=s(`rue:component:anchor`);a(t,f);let g=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),a(t,u(`Item 3`)),t});return m(h(C.Item,{as:`button`,children:g}),t,f),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,W,kt))});let G=e(`div`,n);a(n,G),l(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let At=e(`h2`,G);a(G,At),l(At,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(At,u(`# 带图标与徽章（响应式）`));let jt=s(`rue:component:anchor`);a(G,jt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});i(()=>m(e,G,jt))});let Mt=s(`rue:slot:anchor`);a(G,Mt),o(()=>{let t=le.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),a(t,u(`Inbox`));let o=s(`rue:component:anchor`);return a(t,o),m(h(S,{size:`xs`,children:`99+`}),t,o),t});m(h(C.Item,{as:`button`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let c=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),a(t,u(`Updates`));let o=g(t);a(t,o),f(o,` `);let c=s(`rue:component:anchor`);return a(t,c),m(h(S,{size:`xs`,variant:`warning`,children:`NEW`}),t,c),t});m(h(C.Item,{as:`button`,children:c}),t,o);let _=s(`rue:component:anchor`);a(t,_);let v=d(()=>{let e=r();a(e,u(`Stats`));let t=s(`rue:component:anchor`);return a(e,t),m(h(S,{size:`xs`,variant:`info`}),e,t),e});return m(h(C.Item,{as:`button`,children:v}),t,_),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,G,Mt))});let K=e(`div`,n);a(n,K),l(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Nt=e(`h2`,K);a(K,Nt),l(Nt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Nt,u(`# 去除内边距和圆角`));let Pt=s(`rue:component:anchor`);a(K,Pt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});i(()=>m(e,K,Pt))});let Ft=s(`rue:slot:anchor`);a(K,Ft),o(()=>{let e=ue.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),m(h(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,K,Ft))});let q=e(`div`,n);a(n,q),l(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let It=e(`h2`,q);a(q,It),l(It,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(It,u(`# 带标题`));let Lt=s(`rue:component:anchor`);a(q,Lt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});i(()=>m(e,q,Lt))});let Rt=s(`rue:slot:anchor`);a(q,Rt),o(()=>{let e=de.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Title,{children:`Title`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{children:`Item 1`}),e,n);let i=s(`rue:component:anchor`);a(e,i),m(h(C.Item,{children:`Item 2`}),e,i);let o=s(`rue:component:anchor`);return a(e,o),m(h(C.Item,{children:`Item 3`}),e,o),e})}),e,t),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,q,Rt))});let J=e(`div`,n);a(n,J),l(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let zt=e(`h2`,J);a(J,zt),l(zt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(zt,u(`# 标题作为父级`));let Bt=s(`rue:component:anchor`);a(J,Bt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});i(()=>m(e,J,Bt))});let Vt=s(`rue:slot:anchor`);a(J,Vt),o(()=>{let t=fe.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let t=r(),n=e(`li`,t);a(t,n);let i=s(`rue:component:anchor`);a(n,i),m(h(C.Title,{as:`h2`,children:`Title`}),n,i);let o=e(`ul`,n);a(n,o);let c=s(`rue:component:anchor`);a(o,c),m(h(C.Item,{children:`Item 1`}),o,c);let l=s(`rue:component:anchor`);a(o,l),m(h(C.Item,{children:`Item 2`}),o,l);let u=s(`rue:component:anchor`);return a(o,u),m(h(C.Item,{children:`Item 3`}),o,u),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,J,Vt))});let Y=e(`div`,n);a(n,Y),l(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ht=e(`h2`,Y);a(Y,Ht),l(Ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ht,u(`# 子菜单`));let Ut=s(`rue:component:anchor`);a(Y,Ut),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});i(()=>m(e,Y,Ut))});let Wt=s(`rue:slot:anchor`);a(Y,Wt),o(()=>{let t=pe.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),m(h(C.Item,{as:`button`,children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=s(`rue:component:anchor`);a(i,o),m(h(C.Item,{as:`button`,children:`Parent`}),i,o);let c=s(`rue:component:anchor`);a(i,c);let l=d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),m(h(C.Item,{as:`button`,children:`Submenu 1`}),t,n);let i=s(`rue:component:anchor`);a(t,i),m(h(C.Item,{as:`button`,children:`Submenu 2`}),t,i);let o=e(`li`,t);a(t,o);let c=s(`rue:component:anchor`);a(o,c),m(h(C.Item,{as:`button`,children:`Parent`}),o,c);let l=s(`rue:component:anchor`);a(o,l);let u=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{as:`button`,children:`Submenu 2`}),e,n),e});return m(h(C.Submenu,{children:u}),o,l),t});m(h(C.Submenu,{children:l}),i,c);let u=s(`rue:component:anchor`);return a(t,u),m(h(C.Item,{as:`button`,children:`Item 3`}),t,u),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,Y,Wt))});let X=e(`div`,n);a(n,X),l(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Gt=e(`h2`,X);a(X,Gt),l(Gt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Gt,u(`# 可折叠子菜单`));let Kt=s(`rue:component:anchor`);a(X,Kt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});i(()=>m(e,X,Kt))});let qt=s(`rue:slot:anchor`);a(X,qt),o(()=>{let t=me.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),m(h(C.Item,{as:`button`,children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=e(`details`,i);a(i,o);let c=e(`summary`,o);a(o,c),a(c,u(`Parent`));let l=e(`ul`,o);a(o,l);let d=s(`rue:component:anchor`);a(l,d),m(h(C.Item,{as:`button`,children:`Submenu 1`}),l,d);let f=s(`rue:component:anchor`);a(l,f),m(h(C.Item,{as:`button`,children:`Submenu 2`}),l,f);let p=e(`li`,l);a(l,p);let g=e(`details`,p);a(p,g);let _=e(`summary`,g);a(g,_),a(_,u(`Parent`));let v=e(`ul`,g);a(g,v);let y=s(`rue:component:anchor`);a(v,y),m(h(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=s(`rue:component:anchor`);a(v,b),m(h(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=s(`rue:component:anchor`);return a(t,x),m(h(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,X,qt))});let Z=e(`div`,n);a(n,Z),l(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Jt=e(`h2`,Z);a(Z,Jt),l(Jt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Jt,u(`# 通过类名控制展开（JS）`));let Yt=s(`rue:component:anchor`);a(Z,Yt),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});i(()=>m(e,Z,Yt))});let Xt=s(`rue:slot:anchor`);a(Z,Xt),o(()=>{let t=he.value===`preview`?d(()=>{let t=r(),n=e(`div`,t);a(t,n),l(n,`grid gap-6`);let c=s(`rue:component:anchor`);a(n,c),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),m(h(C.Item,{children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=s(`rue:component:anchor`);a(i,o),m(h(C.DropdownToggle,{onClick:Ae,children:`Parent`}),i,o);let c=s(`rue:component:anchor`);a(i,c);let l=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Submenu 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{children:`Submenu 2`}),e,n),e});return m(h(C.Dropdown,{children:l}),i,c),t})}),n,c);let u=s(`rue:component:anchor`);return a(n,u),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),m(h(C.Item,{children:`Item 1`}),t,n);let c=e(`li`,t);a(t,c);let l=s(`rue:component:anchor`);a(c,l),o(()=>{let e=h(C.DropdownToggle,{show:!0,onClick:Ae,children:`Parent`});i(()=>m(e,c,l))});let u=s(`rue:component:anchor`);a(c,u);let f=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Submenu 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{children:`Submenu 2`}),e,n),e});return o(()=>{let e=h(C.Dropdown,{show:!0,children:f});i(()=>m(e,c,u))}),t})}),n,u),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,Z,Xt))});let Zt=e(`div`,n);a(n,Zt),l(Zt,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qt=e(`h2`,Zt);a(Zt,Qt),l(Qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Qt,u(`# 文件树`));let $t=s(`rue:component:anchor`);a(Zt,$t),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});i(()=>m(e,Zt,$t))});let en=s(`rue:slot:anchor`);a(Zt,en),o(()=>{let t=ge.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,u(`resume.pdf`)),t});m(h(C.Item,{as:`button`,children:i}),t,n);let o=e(`li`,t);a(t,o);let c=e(`details`,o);a(o,c);let f=e(`summary`,c);a(c,f);let g=e(`svg`,f);a(f,g),p(g,`xmlns`,`http://www.w3.org/2000/svg`),p(g,`fill`,`none`),p(g,`viewBox`,`0 0 24 24`),p(g,`strokeWidth`,`1.5`),p(g,`stroke`,`currentColor`),l(g,`w-4 h-4`);let _=e(`path`,g);a(g,_),p(_,`strokeLinecap`,`round`),p(_,`strokeLinejoin`,`round`),p(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(f,u(`My Files`));let v=e(`ul`,c);a(c,v);let y=s(`rue:component:anchor`);a(v,y);let b=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,u(`Project-final.psd`)),t});m(h(C.Item,{as:`button`,children:b}),v,y);let x=s(`rue:component:anchor`);a(v,x);let S=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,u(`Project-final-2.psd`)),t});m(h(C.Item,{as:`button`,children:S}),v,x);let w=e(`li`,v);a(v,w);let T=e(`details`,w);a(w,T);let ee=e(`summary`,T);a(T,ee);let E=e(`svg`,ee);a(ee,E),p(E,`xmlns`,`http://www.w3.org/2000/svg`),p(E,`fill`,`none`),p(E,`viewBox`,`0 0 24 24`),p(E,`strokeWidth`,`1.5`),p(E,`stroke`,`currentColor`),l(E,`w-4 h-4`);let te=e(`path`,E);a(E,te),p(te,`strokeLinecap`,`round`),p(te,`strokeLinejoin`,`round`),p(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(ee,u(`Images`));let D=e(`ul`,T);a(T,D);let ne=s(`rue:component:anchor`);a(D,ne);let re=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,u(`Screenshot1.png`)),t});m(h(C.Item,{as:`button`,children:re}),D,ne);let ie=s(`rue:component:anchor`);a(D,ie);let ae=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,u(`Screenshot2.png`)),t});m(h(C.Item,{as:`button`,children:ae}),D,ie);let oe=e(`li`,D);a(D,oe);let O=e(`details`,oe);a(oe,O);let se=e(`summary`,O);a(O,se);let k=e(`svg`,se);a(se,k),p(k,`xmlns`,`http://www.w3.org/2000/svg`),p(k,`fill`,`none`),p(k,`viewBox`,`0 0 24 24`),p(k,`strokeWidth`,`1.5`),p(k,`stroke`,`currentColor`),l(k,`w-4 h-4`);let ce=e(`path`,k);a(k,ce),p(ce,`strokeLinecap`,`round`),p(ce,`strokeLinejoin`,`round`),p(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(se,u(`Others`));let le=e(`ul`,O);a(O,le);let ue=s(`rue:component:anchor`);a(le,ue);let de=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,u(`Screenshot3.png`)),t});m(h(C.Item,{as:`button`,children:de}),le,ue);let fe=s(`rue:component:anchor`);a(t,fe);let pe=d(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,u(`reports-final-2.pdf`)),t});return m(h(C.Item,{as:`button`,children:pe}),t,fe),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,Zt,en))});let Q=e(`div`,n);a(n,Q),l(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let tn=e(`h2`,Q);a(Q,tn),l(tn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(tn,u(`# 激活项`));let nn=s(`rue:component:anchor`);a(Q,nn),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});i(()=>m(e,Q,nn))});let rn=s(`rue:slot:anchor`);a(Q,rn),o(()=>{let e=_e.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{className:`menu-active`,children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),m(h(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,Q,rn))});let an=e(`div`,n);a(n,an),l(an,`component-preview not-prose text-base-content my-6 lg:my-12`);let on=e(`h2`,an);a(an,on),l(on,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(on,u(`# 水平菜单`));let sn=s(`rue:component:anchor`);a(an,sn),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});i(()=>m(e,an,sn))});let cn=s(`rue:slot:anchor`);a(an,cn),o(()=>{let e=ve.value===`preview`?d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),m(h(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),m(h(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(e,an,cn))});let ln=e(`div`,n);a(n,ln),l(ln,`component-preview not-prose text-base-content my-6 lg:my-12`);let un=e(`h2`,ln);a(ln,un),l(un,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(un,u(`# 水平子菜单`));let dn=s(`rue:component:anchor`);a(ln,dn),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});i(()=>m(e,ln,dn))});let fn=s(`rue:slot:anchor`);a(ln,fn),o(()=>{let t=ye.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),m(h(C.Item,{children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=s(`rue:component:anchor`);a(i,o),m(h(C.Item,{children:`Parent`}),i,o);let c=s(`rue:component:anchor`);a(i,c);let l=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Submenu 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),m(h(C.Item,{children:`Submenu 2`}),e,n),e});m(h(C.Submenu,{children:l}),i,c);let u=s(`rue:component:anchor`);return a(t,u),m(h(C.Item,{children:`Item 3`}),t,u),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,ln,fn))});let pn=e(`div`,n);a(n,pn),l(pn,`component-preview not-prose text-base-content my-6 lg:my-12`);let mn=e(`h2`,pn);a(pn,mn),l(mn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(mn,u(`# Mega 菜单（响应式）`));let hn=s(`rue:component:anchor`);a(pn,hn),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});i(()=>m(e,pn,hn))});let gn=s(`rue:slot:anchor`);a(pn,gn),o(()=>{let t=be.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:d(()=>{let t=r(),n=e(`li`,t);a(t,n);let i=s(`rue:component:anchor`);a(n,i),m(h(C.Item,{children:`Solutions`}),n,i);let o=s(`rue:component:anchor`);a(n,o);let c=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Design`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{children:`Development`}),e,n);let i=s(`rue:component:anchor`);a(e,i),m(h(C.Item,{children:`Hosting`}),e,i);let o=s(`rue:component:anchor`);return a(e,o),m(h(C.Item,{children:`Domain register`}),e,o),e});m(h(C.Submenu,{children:c}),n,o);let l=e(`li`,t);a(t,l);let u=s(`rue:component:anchor`);a(l,u),m(h(C.Item,{children:`Enterprise`}),l,u);let f=s(`rue:component:anchor`);a(l,f);let p=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`CRM software`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{children:`Marketing management`}),e,n);let i=s(`rue:component:anchor`);a(e,i),m(h(C.Item,{children:`Security`}),e,i);let o=s(`rue:component:anchor`);return a(e,o),m(h(C.Item,{children:`Consulting`}),e,o),e});m(h(C.Submenu,{children:p}),l,f);let g=e(`li`,t);a(t,g);let _=s(`rue:component:anchor`);a(g,_),m(h(C.Item,{children:`Products`}),g,_);let v=s(`rue:component:anchor`);a(g,v);let y=d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),m(h(C.Item,{children:`UI Kit`}),t,n);let i=s(`rue:component:anchor`);a(t,i),m(h(C.Item,{children:`WordPress themes`}),t,i);let o=s(`rue:component:anchor`);a(t,o),m(h(C.Item,{children:`WordPress plugins`}),t,o);let c=e(`li`,t);a(t,c);let l=s(`rue:component:anchor`);a(c,l),m(h(C.Item,{children:`Open source`}),c,l);let u=s(`rue:component:anchor`);a(c,u);let f=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Auth management system`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{children:`VScode theme`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),m(h(C.Item,{children:`Color picker app`}),e,i),e});return m(h(C.Submenu,{children:f}),c,u),t});m(h(C.Submenu,{children:y}),g,v);let b=e(`li`,t);a(t,b);let x=s(`rue:component:anchor`);a(b,x),m(h(C.Item,{children:`Company`}),b,x);let S=s(`rue:component:anchor`);a(b,S);let w=d(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`About us`}),e,t);let n=s(`rue:component:anchor`);a(e,n),m(h(C.Item,{children:`Contact us`}),e,n);let i=s(`rue:component:anchor`);a(e,i),m(h(C.Item,{children:`Privacy policy`}),e,i);let o=s(`rue:component:anchor`);return a(e,o),m(h(C.Item,{children:`Press kit`}),e,o),e});return m(h(C.Submenu,{children:w}),b,S),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,pn,gn))});let $=e(`div`,n);a(n,$),l($,`component-preview not-prose text-base-content my-6 lg:my-12`);let _n=e(`h2`,$);a($,_n),l(_n,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(_n,u(`# 可折叠（响应式）`));let vn=s(`rue:component:anchor`);a($,vn),o(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});i(()=>m(e,$,vn))});let yn=s(`rue:slot:anchor`);a($,yn),o(()=>{let t=xe.value===`preview`?d(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),m(h(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:d(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),m(h(C.Item,{as:`button`,children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=e(`details`,i);a(i,o);let c=e(`summary`,o);a(o,c),a(c,u(`Parent item`));let l=e(`ul`,o);a(o,l);let d=s(`rue:component:anchor`);a(l,d),m(h(C.Item,{as:`button`,children:`Submenu 1`}),l,d);let f=s(`rue:component:anchor`);a(l,f),m(h(C.Item,{as:`button`,children:`Submenu 2`}),l,f);let p=e(`li`,l);a(l,p);let g=e(`details`,p);a(p,g);let _=e(`summary`,g);a(g,_),a(_,u(`Parent`));let v=e(`ul`,g);a(g,v);let y=s(`rue:component:anchor`);a(v,y),m(h(C.Item,{as:`button`,children:`item 1`}),v,y);let b=s(`rue:component:anchor`);a(v,b),m(h(C.Item,{as:`button`,children:`item 2`}),v,b);let x=s(`rue:component:anchor`);return a(t,x),m(h(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,n),t}):d(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});i(()=>m(n,e,t))}),e});i(()=>m(t,$,yn))});let bn=e(`h2`,n);a(n,bn),a(bn,u(`API`));let xn=e(`p`,n);a(n,xn),l(xn,`text-sm text-base-content/70`),a(xn,u("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Sn=e(`h3`,n);a(n,Sn),a(Sn,u(`Menu.Item 链接相关`));let Cn=s(`rue:component:anchor`);return a(n,Cn),o(()=>{let e=h(T,{rows:ee});i(()=>m(e,n,Cn))}),t})}),n,_),n})};export{E as default};
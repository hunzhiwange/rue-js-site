import{$ as e,Kt as t,Lt as n,Q as r,Vt as i,Y as a,Yt as o,Z as s,ct as c,d as l,et as u,l as d,mt as f,ot as p,t as m,tt as h,u as g}from"./vapor-runtime-BR_2rwNk.js";import{a as _,n as v}from"./vapor-helpers-vapor-DkadWylb.js";import{r as y}from"./persistentSidebarPlayground-BLfmxcKI.js";import{t as b}from"./tabs-DMHgT-aV.js";import{t as x}from"./badge-2OxLkSBG.js";import{t as S}from"./menu-DokH1cWo.js";import{n as C}from"./SidebarPlaygroundDesign-BScNtO2r.js";import{t as w}from"./Code-B_4lzH85.js";var T=t=>l(n=>{let f=e(`div`,n);c(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let m=e(`table`,f);a(f,m),c(m,`table table-zebra`);let h=e(`thead`,m);a(m,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,u(`属性`));let y=e(`th`,g);a(g,y),a(y,u(`说明`));let b=e(`th`,g);a(g,b),a(b,u(`类型`));let x=e(`th`,g);a(g,x),a(x,u(`默认值`));let S=e(`tbody`,m);a(m,S);let C=s(`rue:list:start`),w=s(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return o(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,n,c,u,f)=>{d(l(()=>{let n=r(),c=e(`tr`,n);a(n,c),o(()=>{p(c,`key`,String(t.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let f=s(`rue:slot:anchor`);a(u,f),o(()=>{let e=t.prop;i(()=>d(e,u,f))});let m=e(`td`,c);a(c,m);let h=s(`rue:slot:anchor`);a(m,h),o(()=>{let e=t.description;i(()=>d(e,m,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=s(`rue:slot:anchor`);a(_,v),o(()=>{let e=t.type;i(()=>d(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=s(`rue:slot:anchor`);return a(b,x),o(()=>{let e=t.defaultValue;i(()=>d(e,b,x))}),n}),n,c)}})}),f}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKeys:Te,recommendedOpenKeys:Ee,multipleSelectedKeys:De,compoundSelectedKeys:Oe,compoundOpenKeys:ke,toggleDropdownByClass:Ae,menuData:je,menuItems:Me}=_(`useSetup:0:0`,()=>t(()=>({tRecommended:_(`ref:1:0`,()=>n(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>n(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>n(`preview`)),tBasic:_(`ref:1:3`,()=>n(`preview`)),tResponsive:_(`ref:1:4`,()=>n(`preview`)),tIconOnly:_(`ref:1:5`,()=>n(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>n(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>n(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>n(`preview`)),tSizes:_(`ref:1:9`,()=>n(`preview`)),tDisabled:_(`ref:1:10`,()=>n(`preview`)),tIcons:_(`ref:1:11`,()=>n(`preview`)),tIconsBadge:_(`ref:1:12`,()=>n(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>n(`preview`)),tTitle:_(`ref:1:14`,()=>n(`preview`)),tTitleParent:_(`ref:1:15`,()=>n(`preview`)),tSubmenu:_(`ref:1:16`,()=>n(`preview`)),tCollapsible:_(`ref:1:17`,()=>n(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>n(`preview`)),tFileTree:_(`ref:1:19`,()=>n(`preview`)),tActiveItem:_(`ref:1:20`,()=>n(`preview`)),tHorizontal:_(`ref:1:21`,()=>n(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>n(`preview`)),tMega:_(`ref:1:23`,()=>n(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>n(`preview`)),tArray:_(`ref:1:25`,()=>n(`preview`)),tArrayInternal:_(`ref:1:26`,()=>n(`preview`)),tNavigation:_(`ref:1:27`,()=>n(`preview`)),recommendedSelectedKeys:_(`ref:1:28`,()=>n([`overview`])),recommendedOpenKeys:_(`ref:1:29`,()=>n([`workspace`])),multipleSelectedKeys:_(`ref:1:30`,()=>n([`mentions`,`archived`])),compoundSelectedKeys:_(`ref:1:31`,()=>n([`profile`])),compoundOpenKeys:_(`ref:1:32`,()=>n([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Ne=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(x,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(x,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(x,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Pe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(x,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(x,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return l(t=>{let n=r(),_=s(`rue:component:anchor`);return a(n,_),d(m(C,{children:l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`max-w-none prose prose-sm md:prose-base`);let _=e(`h1`,n);a(n,_),a(_,u(`Menu 菜单`));let C=e(`p`,n);a(n,C),c(C,`text-sm mt-3 mb-3`),a(C,u("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let A=e(`div`,n);a(n,A),c(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Fe=e(`h2`,A);a(A,Fe),c(Fe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Fe,u(`# 推荐：items 数据驱动导航`));let Ie=e(`p`,A);a(A,Ie),c(Ie,`mb-3 text-sm text-base-content/70`),a(Ie,u(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Le=s(`rue:component:anchor`);a(A,Le),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});i(()=>d(e,A,Le))});let Re=s(`rue:slot:anchor`);a(A,Re),o(()=>{let e=E.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(S,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:Ne,selectedKeys:Te.value,openKeys:Ee.value,onSelect:e=>Te.value=e.selectedKeys,onOpenChange:e=>Ee.value=e});i(()=>d(n,e,t))}),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});i(()=>d(n,e,t))}),e});i(()=>d(e,A,Re))});let j=e(`div`,n);a(n,j),c(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let ze=e(`h2`,j);a(j,ze),c(ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ze,u(`# 推荐：多选、分组与分割线`));let Be=e(`p`,j);a(j,Be),c(Be,`mb-3 text-sm text-base-content/70`),a(Be,u("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let Ve=s(`rue:component:anchor`);a(j,Ve),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});i(()=>d(e,j,Ve))});let He=s(`rue:slot:anchor`);a(j,He),o(()=>{let e=te.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(S,{className:`bg-base-200 rounded-box w-80`,items:Pe,multiple:!0,selectedKeys:De.value,onSelect:e=>De.value=e.selectedKeys,onDeselect:e=>De.value=e.selectedKeys});i(()=>d(n,e,t))}),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

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
/>`});i(()=>d(n,e,t))}),e});i(()=>d(e,j,He))});let M=e(`div`,n);a(n,M),c(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ue=e(`h2`,M);a(M,Ue),c(Ue,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ue,u(`# 推荐：组合式增强 API`));let We=e(`p`,M);a(M,We),c(We,`mb-3 text-sm text-base-content/70`),a(We,u("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ge=s(`rue:component:anchor`);a(M,Ge),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});i(()=>d(e,M,Ge))});let Ke=s(`rue:slot:anchor`);a(M,Ke),o(()=>{let e=D.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t);let n=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t);let n=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),o(()=>{let n=m(S.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});i(()=>d(n,e,t))});let n=s(`rue:component:anchor`);return a(e,n),o(()=>{let t=m(S.Item,{eventKey:`notifications`,extra:y(x,{size:`xs`,children:`2`}),children:`Notifications`});i(()=>d(t,e,n))}),e});d(m(S.ItemGroup,{title:`Account`,children:n}),e,t);let c=s(`rue:component:anchor`);a(e,c),d(m(S.Divider,{}),e,c);let u=s(`rue:component:anchor`);a(e,u);let f=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{eventKey:`security`,children:`Security`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,n),e});return o(()=>{let t=m(S.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:f});i(()=>d(t,e,u))}),e});return o(()=>{let r=m(S,{className:`bg-base-200 rounded-box w-80`,selectedKeys:Oe.value,openKeys:ke.value,onSelect:e=>Oe.value=e.selectedKeys,onOpenChange:e=>ke.value=e,children:n});i(()=>d(r,e,t))}),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,M,Ke))});let qe=e(`div`,n);a(n,qe),c(qe,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),a(qe,u(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=e(`div`,n);a(n,N),c(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Je=e(`h2`,N);a(N,Je),c(Je,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Je,u(`# 导航跳转`));let Ye=s(`rue:component:anchor`);a(N,Ye),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});i(()=>d(e,N,Ye))});let Xe=s(`rue:slot:anchor`);a(N,Xe),o(()=>{let e=we.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),d(m(S.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,i),e})}),e,t),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,N,Xe))});let P=e(`div`,n);a(n,P),c(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ze=e(`h2`,P);a(P,Ze),c(Ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ze,u(`# Menu 通过数据渲染（数组）`));let Qe=s(`rue:component:anchor`);a(P,Qe),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});i(()=>d(e,P,Qe))});let $e=s(`rue:slot:anchor`);a(P,$e),o(()=>{let t=Se.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:l(()=>{let t=r(),n=s(`rue:list:start`),c=s(`rue:list:end`);a(t,n),a(t,c);let u=new Map;return o(()=>{u=v({items:je||[],getKey:(e,t)=>t,elements:u,parent:n.parentNode,before:c,singleRoot:!0,start:n,renderItem:(t,n,c,u,f)=>{d(l(()=>{let n=r(),c=e(`li`,n);a(n,c),o(()=>{p(c,`key`,String(f))});let u=s(`rue:component:anchor`);a(c,u),d(m(S.Item,{children:t.label}),c,u);let h=s(`rue:component:anchor`);return a(c,h),d(m(S.Submenu,{children:l(()=>{let n=r(),c=s(`rue:list:start`),u=s(`rue:list:end`);a(n,c),a(n,u);let f=new Map;return o(()=>{f=v({items:t.children||[],getKey:(e,t)=>t,elements:f,parent:c.parentNode,before:u,start:c,renderItem:(t,n,c,u,f)=>{g(l(typeof t==`string`?()=>{let e=r(),n=s(`rue:component:anchor`);return a(e,n),o(()=>{let r=m(S.Item,{key:f,children:t});i(()=>d(r,e,n))}),e}:()=>{let n=r(),i=e(`li`,n);a(n,i),o(()=>{p(i,`key`,String(f))});let c=s(`rue:component:anchor`);a(i,c),d(m(S.Item,{children:t.label}),i,c);let u=s(`rue:component:anchor`);return a(i,u),d(m(S.Submenu,{children:l(()=>{let e=r(),n=s(`rue:list:start`),i=s(`rue:list:end`);a(e,n),a(e,i);let c=new Map;return o(()=>{c=v({items:t.children||[],getKey:(e,t)=>t,elements:c,parent:n.parentNode,before:i,start:n,renderItem:(e,t,n,r,i)=>{g(m(S.Item,{key:i,children:e}),t,n,r)}})}),e})}),i,u),n}),n,c,u)}})}),n})}),c,h),n}),n,c)}})}),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,P,$e))});let F=e(`div`,n);a(n,F),c(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let et=e(`h2`,F);a(F,et),c(et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(et,u(`# Menu 通过数据渲染（数组，组件内部）`));let tt=s(`rue:component:anchor`);a(F,tt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});i(()=>d(e,F,tt))});let nt=s(`rue:slot:anchor`);a(F,nt),o(()=>{let e=Ce.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(S,{items:Me,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});i(()=>d(n,e,t))}),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});i(()=>d(n,e,t))}),e});i(()=>d(e,F,nt))});let I=e(`div`,n);a(n,I),c(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let rt=e(`h2`,I);a(I,rt),c(rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(rt,u(`# Menu`));let it=s(`rue:component:anchor`);a(I,it),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});i(()=>d(e,I,it))});let at=s(`rue:slot:anchor`);a(I,at),o(()=>{let e=ne.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{as:`button`,children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),d(m(S.Item,{as:`button`,children:`Item 3`}),e,i),e})}),e,t),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,I,at))});let L=e(`div`,n);a(n,L),c(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let ot=e(`h2`,L);a(L,ot),c(ot,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ot,u(`# 响应式：小屏垂直，大屏水平`));let st=s(`rue:component:anchor`);a(L,st),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});i(()=>d(e,L,st))});let ct=s(`rue:slot:anchor`);a(L,ct),o(()=>{let e=re.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),d(m(S,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{as:`button`,children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),d(m(S.Item,{as:`button`,children:`Item 3`}),e,i),e})}),e,t),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,L,ct))});let R=e(`div`,n);a(n,R),c(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let lt=e(`h2`,R);a(R,lt),c(lt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(lt,u(`# 仅图标`));let ut=s(`rue:component:anchor`);a(R,ut),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});i(()=>d(e,R,ut))});let dt=s(`rue:slot:anchor`);a(R,dt),o(()=>{let t=ie.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`bg-base-200 rounded-box`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});d(m(S.Item,{as:`button`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let u=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});d(m(S.Item,{as:`button`,children:u}),t,o);let f=s(`rue:component:anchor`);a(t,f);let h=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return d(m(S.Item,{as:`button`,children:h}),t,f),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,R,dt))});let z=e(`div`,n);a(n,z),c(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let ft=e(`h2`,z);a(z,ft),c(ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ft,u(`# 仅图标（水平）`));let pt=s(`rue:component:anchor`);a(z,pt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});i(()=>d(e,z,pt))});let mt=s(`rue:slot:anchor`);a(z,mt),o(()=>{let t=ae.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});d(m(S.Item,{as:`button`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let u=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});d(m(S.Item,{as:`button`,children:u}),t,o);let f=s(`rue:component:anchor`);a(t,f);let h=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return d(m(S.Item,{as:`button`,children:h}),t,f),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,z,mt))});let B=e(`div`,n);a(n,B),c(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let ht=e(`h2`,B);a(B,ht),c(ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ht,u(`# 仅图标（带 tooltip）`));let gt=s(`rue:component:anchor`);a(B,gt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});i(()=>d(e,B,gt))});let _t=s(`rue:slot:anchor`);a(B,_t),o(()=>{let t=oe.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`bg-base-200 rounded-box`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),t});d(m(S.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let u=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});d(m(S.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:u}),t,o);let f=s(`rue:component:anchor`);a(t,f);let h=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return d(m(S.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:h}),t,f),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,B,_t))});let V=e(`div`,n);a(n,V),c(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let vt=e(`h2`,V);a(V,vt),c(vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(vt,u(`# 仅图标（水平，tooltip）`));let yt=s(`rue:component:anchor`);a(V,yt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});i(()=>d(e,V,yt))});let bt=s(`rue:slot:anchor`);a(V,bt),o(()=>{let t=O.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),t});d(m(S.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let u=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});d(m(S.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:u}),t,o);let f=s(`rue:component:anchor`);a(t,f);let h=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),t});return d(m(S.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:h}),t,f),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,V,bt))});let H=e(`div`,n);a(n,H),c(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let xt=e(`h2`,H);a(H,xt),c(xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(xt,u(`# Menu 尺寸`));let St=s(`rue:component:anchor`);a(H,St),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});i(()=>d(e,H,St))});let Ct=s(`rue:slot:anchor`);a(H,Ct),o(()=>{let t=se.value===`preview`?l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`grid gap-6`);let i=s(`rue:component:anchor`);a(n,i),d(m(S,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Xsmall 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{as:`button`,children:`Xsmall 2`}),e,n),e})}),n,i);let o=s(`rue:component:anchor`);a(n,o),d(m(S,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Small 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{as:`button`,children:`Small 2`}),e,n),e})}),n,o);let u=s(`rue:component:anchor`);a(n,u),d(m(S,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Medium 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{as:`button`,children:`Medium 2`}),e,n),e})}),n,u);let f=s(`rue:component:anchor`);a(n,f),d(m(S,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Large 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{as:`button`,children:`Large 2`}),e,n),e})}),n,f);let p=s(`rue:component:anchor`);return a(n,p),d(m(S,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Xlarge 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{as:`button`,children:`Xlarge 2`}),e,n),e})}),n,p),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});i(()=>d(n,e,t))}),e});i(()=>d(t,H,Ct))});let U=e(`div`,n);a(n,U),c(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let wt=e(`h2`,U);a(U,wt),c(wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(wt,u(`# 禁用项目`));let Tt=s(`rue:component:anchor`);a(U,Tt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});i(()=>d(e,U,Tt))});let Et=s(`rue:slot:anchor`);a(U,Et),o(()=>{let e=k.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Enabled item`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),d(m(S.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,i),e})}),e,t),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,U,Et))});let W=e(`div`,n);a(n,W),c(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Dt=e(`h2`,W);a(W,Dt),c(Dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Dt,u(`# 带图标`));let Ot=s(`rue:component:anchor`);a(W,Ot),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});i(()=>d(e,W,Ot))});let kt=s(`rue:slot:anchor`);a(W,kt),o(()=>{let t=ce.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),a(t,u(`Item 2`)),t});d(m(S.Item,{as:`button`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let f=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),a(t,u(`Item 1`)),t});d(m(S.Item,{as:`button`,children:f}),t,o);let h=s(`rue:component:anchor`);a(t,h);let g=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),a(t,u(`Item 3`)),t});return d(m(S.Item,{as:`button`,children:g}),t,h),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,W,kt))});let G=e(`div`,n);a(n,G),c(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let At=e(`h2`,G);a(G,At),c(At,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(At,u(`# 带图标与徽章（响应式）`));let jt=s(`rue:component:anchor`);a(G,jt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});i(()=>d(e,G,jt))});let Mt=s(`rue:slot:anchor`);a(G,Mt),o(()=>{let t=le.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),a(t,u(`Inbox`));let o=s(`rue:component:anchor`);return a(t,o),d(m(x,{size:`xs`,children:`99+`}),t,o),t});d(m(S.Item,{as:`button`,children:i}),t,n);let o=s(`rue:component:anchor`);a(t,o);let g=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),c(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let i=e(`path`,n);a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`strokeWidth`,`2`),p(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),a(t,u(`Updates`));let o=h(t);a(t,o),f(o,` `);let l=s(`rue:component:anchor`);return a(t,l),d(m(x,{size:`xs`,variant:`warning`,children:`NEW`}),t,l),t});d(m(S.Item,{as:`button`,children:g}),t,o);let _=s(`rue:component:anchor`);a(t,_);let v=l(()=>{let e=r();a(e,u(`Stats`));let t=s(`rue:component:anchor`);return a(e,t),d(m(x,{size:`xs`,variant:`info`}),e,t),e});return d(m(S.Item,{as:`button`,children:v}),t,_),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,G,Mt))});let K=e(`div`,n);a(n,K),c(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Nt=e(`h2`,K);a(K,Nt),c(Nt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Nt,u(`# 去除内边距和圆角`));let Pt=s(`rue:component:anchor`);a(K,Pt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});i(()=>d(e,K,Pt))});let Ft=s(`rue:slot:anchor`);a(K,Ft),o(()=>{let e=ue.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),d(m(S,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),d(m(S.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,K,Ft))});let q=e(`div`,n);a(n,q),c(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let It=e(`h2`,q);a(q,It),c(It,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(It,u(`# 带标题`));let Lt=s(`rue:component:anchor`);a(q,Lt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});i(()=>d(e,q,Lt))});let Rt=s(`rue:slot:anchor`);a(q,Rt),o(()=>{let e=de.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Title,{children:`Title`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{children:`Item 1`}),e,n);let i=s(`rue:component:anchor`);a(e,i),d(m(S.Item,{children:`Item 2`}),e,i);let o=s(`rue:component:anchor`);return a(e,o),d(m(S.Item,{children:`Item 3`}),e,o),e})}),e,t),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,q,Rt))});let J=e(`div`,n);a(n,J),c(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let zt=e(`h2`,J);a(J,zt),c(zt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(zt,u(`# 标题作为父级`));let Bt=s(`rue:component:anchor`);a(J,Bt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});i(()=>d(e,J,Bt))});let Vt=s(`rue:slot:anchor`);a(J,Vt),o(()=>{let t=fe.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=r(),n=e(`li`,t);a(t,n);let i=s(`rue:component:anchor`);a(n,i),d(m(S.Title,{as:`h2`,children:`Title`}),n,i);let o=e(`ul`,n);a(n,o);let c=s(`rue:component:anchor`);a(o,c),d(m(S.Item,{children:`Item 1`}),o,c);let l=s(`rue:component:anchor`);a(o,l),d(m(S.Item,{children:`Item 2`}),o,l);let u=s(`rue:component:anchor`);return a(o,u),d(m(S.Item,{children:`Item 3`}),o,u),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,J,Vt))});let Y=e(`div`,n);a(n,Y),c(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ht=e(`h2`,Y);a(Y,Ht),c(Ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ht,u(`# 子菜单`));let Ut=s(`rue:component:anchor`);a(Y,Ut),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});i(()=>d(e,Y,Ut))});let Wt=s(`rue:slot:anchor`);a(Y,Wt),o(()=>{let t=pe.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),d(m(S.Item,{as:`button`,children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=s(`rue:component:anchor`);a(i,o),d(m(S.Item,{as:`button`,children:`Parent`}),i,o);let c=s(`rue:component:anchor`);a(i,c);let u=l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),d(m(S.Item,{as:`button`,children:`Submenu 1`}),t,n);let i=s(`rue:component:anchor`);a(t,i),d(m(S.Item,{as:`button`,children:`Submenu 2`}),t,i);let o=e(`li`,t);a(t,o);let c=s(`rue:component:anchor`);a(o,c),d(m(S.Item,{as:`button`,children:`Parent`}),o,c);let u=s(`rue:component:anchor`);a(o,u);let f=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{as:`button`,children:`Submenu 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{as:`button`,children:`Submenu 2`}),e,n),e});return d(m(S.Submenu,{children:f}),o,u),t});d(m(S.Submenu,{children:u}),i,c);let f=s(`rue:component:anchor`);return a(t,f),d(m(S.Item,{as:`button`,children:`Item 3`}),t,f),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,Y,Wt))});let X=e(`div`,n);a(n,X),c(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Gt=e(`h2`,X);a(X,Gt),c(Gt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Gt,u(`# 可折叠子菜单`));let Kt=s(`rue:component:anchor`);a(X,Kt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});i(()=>d(e,X,Kt))});let qt=s(`rue:slot:anchor`);a(X,qt),o(()=>{let t=me.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),d(m(S.Item,{as:`button`,children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=e(`details`,i);a(i,o);let c=e(`summary`,o);a(o,c),a(c,u(`Parent`));let l=e(`ul`,o);a(o,l);let f=s(`rue:component:anchor`);a(l,f),d(m(S.Item,{as:`button`,children:`Submenu 1`}),l,f);let p=s(`rue:component:anchor`);a(l,p),d(m(S.Item,{as:`button`,children:`Submenu 2`}),l,p);let h=e(`li`,l);a(l,h);let g=e(`details`,h);a(h,g);let _=e(`summary`,g);a(g,_),a(_,u(`Parent`));let v=e(`ul`,g);a(g,v);let y=s(`rue:component:anchor`);a(v,y),d(m(S.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=s(`rue:component:anchor`);a(v,b),d(m(S.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=s(`rue:component:anchor`);return a(t,x),d(m(S.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,X,qt))});let Z=e(`div`,n);a(n,Z),c(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Jt=e(`h2`,Z);a(Z,Jt),c(Jt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Jt,u(`# 通过类名控制展开（JS）`));let Yt=s(`rue:component:anchor`);a(Z,Yt),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});i(()=>d(e,Z,Yt))});let Xt=s(`rue:slot:anchor`);a(Z,Xt),o(()=>{let t=he.value===`preview`?l(()=>{let t=r(),n=e(`div`,t);a(t,n),c(n,`grid gap-6`);let u=s(`rue:component:anchor`);a(n,u),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),d(m(S.Item,{children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=s(`rue:component:anchor`);a(i,o),d(m(S.DropdownToggle,{onClick:Ae,children:`Parent`}),i,o);let c=s(`rue:component:anchor`);a(i,c);let u=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`Submenu 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{children:`Submenu 2`}),e,n),e});return d(m(S.Dropdown,{children:u}),i,c),t})}),n,u);let f=s(`rue:component:anchor`);return a(n,f),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),d(m(S.Item,{children:`Item 1`}),t,n);let c=e(`li`,t);a(t,c);let u=s(`rue:component:anchor`);a(c,u),o(()=>{let e=m(S.DropdownToggle,{show:!0,onClick:Ae,children:`Parent`});i(()=>d(e,c,u))});let f=s(`rue:component:anchor`);a(c,f);let p=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`Submenu 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{children:`Submenu 2`}),e,n),e});return o(()=>{let e=m(S.Dropdown,{show:!0,children:p});i(()=>d(e,c,f))}),t})}),n,f),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,Z,Xt))});let Zt=e(`div`,n);a(n,Zt),c(Zt,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qt=e(`h2`,Zt);a(Zt,Qt),c(Qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Qt,u(`# 文件树`));let $t=s(`rue:component:anchor`);a(Zt,$t),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});i(()=>d(e,Zt,$t))});let en=s(`rue:slot:anchor`);a(Zt,en),o(()=>{let t=ge.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n);let i=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),c(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,u(`resume.pdf`)),t});d(m(S.Item,{as:`button`,children:i}),t,n);let o=e(`li`,t);a(t,o);let f=e(`details`,o);a(o,f);let h=e(`summary`,f);a(f,h);let g=e(`svg`,h);a(h,g),p(g,`xmlns`,`http://www.w3.org/2000/svg`),p(g,`fill`,`none`),p(g,`viewBox`,`0 0 24 24`),p(g,`strokeWidth`,`1.5`),p(g,`stroke`,`currentColor`),c(g,`w-4 h-4`);let _=e(`path`,g);a(g,_),p(_,`strokeLinecap`,`round`),p(_,`strokeLinejoin`,`round`),p(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(h,u(`My Files`));let v=e(`ul`,f);a(f,v);let y=s(`rue:component:anchor`);a(v,y);let b=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),c(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,u(`Project-final.psd`)),t});d(m(S.Item,{as:`button`,children:b}),v,y);let x=s(`rue:component:anchor`);a(v,x);let C=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),c(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,u(`Project-final-2.psd`)),t});d(m(S.Item,{as:`button`,children:C}),v,x);let w=e(`li`,v);a(v,w);let T=e(`details`,w);a(w,T);let ee=e(`summary`,T);a(T,ee);let E=e(`svg`,ee);a(ee,E),p(E,`xmlns`,`http://www.w3.org/2000/svg`),p(E,`fill`,`none`),p(E,`viewBox`,`0 0 24 24`),p(E,`strokeWidth`,`1.5`),p(E,`stroke`,`currentColor`),c(E,`w-4 h-4`);let te=e(`path`,E);a(E,te),p(te,`strokeLinecap`,`round`),p(te,`strokeLinejoin`,`round`),p(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(ee,u(`Images`));let D=e(`ul`,T);a(T,D);let ne=s(`rue:component:anchor`);a(D,ne);let re=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),c(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,u(`Screenshot1.png`)),t});d(m(S.Item,{as:`button`,children:re}),D,ne);let ie=s(`rue:component:anchor`);a(D,ie);let ae=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),c(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,u(`Screenshot2.png`)),t});d(m(S.Item,{as:`button`,children:ae}),D,ie);let oe=e(`li`,D);a(D,oe);let O=e(`details`,oe);a(oe,O);let se=e(`summary`,O);a(O,se);let k=e(`svg`,se);a(se,k),p(k,`xmlns`,`http://www.w3.org/2000/svg`),p(k,`fill`,`none`),p(k,`viewBox`,`0 0 24 24`),p(k,`strokeWidth`,`1.5`),p(k,`stroke`,`currentColor`),c(k,`w-4 h-4`);let ce=e(`path`,k);a(k,ce),p(ce,`strokeLinecap`,`round`),p(ce,`strokeLinejoin`,`round`),p(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(se,u(`Others`));let le=e(`ul`,O);a(O,le);let ue=s(`rue:component:anchor`);a(le,ue);let de=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),c(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,u(`Screenshot3.png`)),t});d(m(S.Item,{as:`button`,children:de}),le,ue);let fe=s(`rue:component:anchor`);a(t,fe);let pe=l(()=>{let t=r(),n=e(`svg`,t);a(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),c(n,`w-4 h-4`);let i=e(`path`,n);return a(n,i),p(i,`strokeLinecap`,`round`),p(i,`strokeLinejoin`,`round`),p(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,u(`reports-final-2.pdf`)),t});return d(m(S.Item,{as:`button`,children:pe}),t,fe),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,Zt,en))});let Q=e(`div`,n);a(n,Q),c(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let tn=e(`h2`,Q);a(Q,tn),c(tn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(tn,u(`# 激活项`));let nn=s(`rue:component:anchor`);a(Q,nn),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});i(()=>d(e,Q,nn))});let rn=s(`rue:slot:anchor`);a(Q,rn),o(()=>{let e=_e.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),d(m(S,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{className:`menu-active`,children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),d(m(S.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,Q,rn))});let an=e(`div`,n);a(n,an),c(an,`component-preview not-prose text-base-content my-6 lg:my-12`);let on=e(`h2`,an);a(an,on),c(on,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(on,u(`# 水平菜单`));let sn=s(`rue:component:anchor`);a(an,sn),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});i(()=>d(e,an,sn))});let cn=s(`rue:slot:anchor`);a(an,cn),o(()=>{let e=ve.value===`preview`?l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),d(m(S,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`Item 1`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{children:`Item 2`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),d(m(S.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(e,an,cn))});let ln=e(`div`,n);a(n,ln),c(ln,`component-preview not-prose text-base-content my-6 lg:my-12`);let un=e(`h2`,ln);a(ln,un),c(un,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(un,u(`# 水平子菜单`));let dn=s(`rue:component:anchor`);a(ln,dn),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});i(()=>d(e,ln,dn))});let fn=s(`rue:slot:anchor`);a(ln,fn),o(()=>{let t=ye.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),d(m(S.Item,{children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=s(`rue:component:anchor`);a(i,o),d(m(S.Item,{children:`Parent`}),i,o);let c=s(`rue:component:anchor`);a(i,c);let u=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`Submenu 1`}),e,t);let n=s(`rue:component:anchor`);return a(e,n),d(m(S.Item,{children:`Submenu 2`}),e,n),e});d(m(S.Submenu,{children:u}),i,c);let f=s(`rue:component:anchor`);return a(t,f),d(m(S.Item,{children:`Item 3`}),t,f),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,ln,fn))});let pn=e(`div`,n);a(n,pn),c(pn,`component-preview not-prose text-base-content my-6 lg:my-12`);let mn=e(`h2`,pn);a(pn,mn),c(mn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(mn,u(`# Mega 菜单（响应式）`));let hn=s(`rue:component:anchor`);a(pn,hn),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});i(()=>d(e,pn,hn))});let gn=s(`rue:slot:anchor`);a(pn,gn),o(()=>{let t=be.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:l(()=>{let t=r(),n=e(`li`,t);a(t,n);let i=s(`rue:component:anchor`);a(n,i),d(m(S.Item,{children:`Solutions`}),n,i);let o=s(`rue:component:anchor`);a(n,o);let c=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`Design`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{children:`Development`}),e,n);let i=s(`rue:component:anchor`);a(e,i),d(m(S.Item,{children:`Hosting`}),e,i);let o=s(`rue:component:anchor`);return a(e,o),d(m(S.Item,{children:`Domain register`}),e,o),e});d(m(S.Submenu,{children:c}),n,o);let u=e(`li`,t);a(t,u);let f=s(`rue:component:anchor`);a(u,f),d(m(S.Item,{children:`Enterprise`}),u,f);let p=s(`rue:component:anchor`);a(u,p);let h=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`CRM software`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{children:`Marketing management`}),e,n);let i=s(`rue:component:anchor`);a(e,i),d(m(S.Item,{children:`Security`}),e,i);let o=s(`rue:component:anchor`);return a(e,o),d(m(S.Item,{children:`Consulting`}),e,o),e});d(m(S.Submenu,{children:h}),u,p);let g=e(`li`,t);a(t,g);let _=s(`rue:component:anchor`);a(g,_),d(m(S.Item,{children:`Products`}),g,_);let v=s(`rue:component:anchor`);a(g,v);let y=l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),d(m(S.Item,{children:`UI Kit`}),t,n);let i=s(`rue:component:anchor`);a(t,i),d(m(S.Item,{children:`WordPress themes`}),t,i);let o=s(`rue:component:anchor`);a(t,o),d(m(S.Item,{children:`WordPress plugins`}),t,o);let c=e(`li`,t);a(t,c);let u=s(`rue:component:anchor`);a(c,u),d(m(S.Item,{children:`Open source`}),c,u);let f=s(`rue:component:anchor`);a(c,f);let p=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`Auth management system`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{children:`VScode theme`}),e,n);let i=s(`rue:component:anchor`);return a(e,i),d(m(S.Item,{children:`Color picker app`}),e,i),e});return d(m(S.Submenu,{children:p}),c,f),t});d(m(S.Submenu,{children:y}),g,v);let b=e(`li`,t);a(t,b);let x=s(`rue:component:anchor`);a(b,x),d(m(S.Item,{children:`Company`}),b,x);let C=s(`rue:component:anchor`);a(b,C);let w=l(()=>{let e=r(),t=s(`rue:component:anchor`);a(e,t),d(m(S.Item,{children:`About us`}),e,t);let n=s(`rue:component:anchor`);a(e,n),d(m(S.Item,{children:`Contact us`}),e,n);let i=s(`rue:component:anchor`);a(e,i),d(m(S.Item,{children:`Privacy policy`}),e,i);let o=s(`rue:component:anchor`);return a(e,o),d(m(S.Item,{children:`Press kit`}),e,o),e});return d(m(S.Submenu,{children:w}),b,C),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,pn,gn))});let $=e(`div`,n);a(n,$),c($,`component-preview not-prose text-base-content my-6 lg:my-12`);let _n=e(`h2`,$);a($,_n),c(_n,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(_n,u(`# 可折叠（响应式）`));let vn=s(`rue:component:anchor`);a($,vn),o(()=>{let e=m(b,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});i(()=>d(e,$,vn))});let yn=s(`rue:slot:anchor`);a($,yn),o(()=>{let t=xe.value===`preview`?l(()=>{let t=r(),n=s(`rue:component:anchor`);return a(t,n),d(m(S,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:l(()=>{let t=r(),n=s(`rue:component:anchor`);a(t,n),d(m(S.Item,{as:`button`,children:`Item 1`}),t,n);let i=e(`li`,t);a(t,i);let o=e(`details`,i);a(i,o);let c=e(`summary`,o);a(o,c),a(c,u(`Parent item`));let l=e(`ul`,o);a(o,l);let f=s(`rue:component:anchor`);a(l,f),d(m(S.Item,{as:`button`,children:`Submenu 1`}),l,f);let p=s(`rue:component:anchor`);a(l,p),d(m(S.Item,{as:`button`,children:`Submenu 2`}),l,p);let h=e(`li`,l);a(l,h);let g=e(`details`,h);a(h,g);let _=e(`summary`,g);a(g,_),a(_,u(`Parent`));let v=e(`ul`,g);a(g,v);let y=s(`rue:component:anchor`);a(v,y),d(m(S.Item,{as:`button`,children:`item 1`}),v,y);let b=s(`rue:component:anchor`);a(v,b),d(m(S.Item,{as:`button`,children:`item 2`}),v,b);let x=s(`rue:component:anchor`);return a(t,x),d(m(S.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,n),t}):l(()=>{let e=r(),t=s(`rue:component:anchor`);return a(e,t),o(()=>{let n=m(w,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});i(()=>d(n,e,t))}),e});i(()=>d(t,$,yn))});let bn=e(`h2`,n);a(n,bn),a(bn,u(`API`));let xn=e(`p`,n);a(n,xn),c(xn,`text-sm text-base-content/70`),a(xn,u("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Sn=e(`h3`,n);a(n,Sn),a(Sn,u(`Menu.Item 链接相关`));let Cn=s(`rue:component:anchor`);return a(n,Cn),o(()=>{let e=m(T,{rows:ee});i(()=>d(e,n,Cn))}),t})}),n,_),n})};export{E as default};
import{$ as e,$t as t,Bt as n,Gt as r,Xt as i,Z as a,ct as o,et as s,gt as c,l,nt as u,o as d,rt as f,s as p,t as m,tt as h,ut as g}from"./vapor-runtime-CKrmRMZX.js";import{a as _,n as v}from"./vapor-helpers-vapor-s6lMjTDZ.js";import{i as y}from"./persistentSidebarPlayground-CKHFGglU.js";import{t as b}from"./Code-D5UqTwV6.js";import{t as x}from"./tabs-DRfs918f.js";import{t as S}from"./badge-DhL0-cBn.js";import{t as C}from"./menu-BfznPccg.js";import{r as w}from"./SidebarPlaygroundDesign-CWudvLqE.js";var T=n=>l(i=>{let c=h(`div`,i);g(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=h(`table`,c);a(c,f),g(f,`table table-zebra`);let p=h(`thead`,f);a(f,p);let m=h(`tr`,p);a(p,m);let _=h(`th`,m);a(m,_),a(_,u(`属性`));let y=h(`th`,m);a(m,y),a(y,u(`说明`));let b=h(`th`,m);a(m,b),a(b,u(`类型`));let x=h(`th`,m);a(m,x),a(x,u(`默认值`));let S=h(`tbody`,f);a(f,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,i,c,u,f)=>{d(l(()=>{let i=s(),c=h(`tr`,i);a(i,c),t(()=>{o(c,`key`,String(n.prop))});let l=h(`td`,c);a(c,l);let u=h(`code`,l);a(l,u);let f=e(`rue:slot:anchor`);a(u,f),t(()=>{let e=n.prop;r(()=>d(e,u,f))});let p=h(`td`,c);a(c,p);let m=e(`rue:slot:anchor`);a(p,m),t(()=>{let e=n.description;r(()=>d(e,p,m))});let g=h(`td`,c);a(c,g);let _=h(`code`,g);a(g,_);let v=e(`rue:slot:anchor`);a(_,v),t(()=>{let e=n.type;r(()=>d(e,_,v))});let y=h(`td`,c);a(c,y);let b=h(`code`,y);a(y,b);let x=e(`rue:slot:anchor`);return a(b,x),t(()=>{let e=n.defaultValue;r(()=>d(e,b,x))}),i}),i,c)}})}),c}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKey:Te,recommendedOpenKeys:Ee,compoundSelectedKeys:De,compoundOpenKeys:Oe,recommendedMenuClassName:ke,fileTreeMenuClassName:Ae,toggleDropdownByClass:je,menuData:Me,menuItems:Ne}=_(`useSetup:0:0`,()=>i(()=>({tRecommended:_(`ref:1:0`,()=>n(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>n(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>n(`preview`)),tBasic:_(`ref:1:3`,()=>n(`preview`)),tResponsive:_(`ref:1:4`,()=>n(`preview`)),tIconOnly:_(`ref:1:5`,()=>n(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>n(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>n(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>n(`preview`)),tSizes:_(`ref:1:9`,()=>n(`preview`)),tDisabled:_(`ref:1:10`,()=>n(`preview`)),tIcons:_(`ref:1:11`,()=>n(`preview`)),tIconsBadge:_(`ref:1:12`,()=>n(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>n(`preview`)),tTitle:_(`ref:1:14`,()=>n(`preview`)),tTitleParent:_(`ref:1:15`,()=>n(`preview`)),tSubmenu:_(`ref:1:16`,()=>n(`preview`)),tCollapsible:_(`ref:1:17`,()=>n(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>n(`preview`)),tFileTree:_(`ref:1:19`,()=>n(`preview`)),tActiveItem:_(`ref:1:20`,()=>n(`preview`)),tHorizontal:_(`ref:1:21`,()=>n(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>n(`preview`)),tMega:_(`ref:1:23`,()=>n(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>n(`preview`)),tArray:_(`ref:1:25`,()=>n(`preview`)),tArrayInternal:_(`ref:1:26`,()=>n(`preview`)),tNavigation:_(`ref:1:27`,()=>n(`preview`)),recommendedSelectedKey:_(`ref:1:28`,()=>n(`overview`)),recommendedOpenKeys:_(`ref:1:29`,()=>n([`workspace`])),compoundSelectedKeys:_(`ref:1:30`,()=>n([`profile`])),compoundOpenKeys:_(`ref:1:31`,()=>n([`settings`])),recommendedMenuClassName:`bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content`,fileTreeMenuClassName:`bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0`,toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Pe=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Fe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return l(n=>{let i=s(),_=e(`rue:component:anchor`);return a(i,_),d(m(w,{children:l(()=>{let n=s(),i=h(`div`,n);a(n,i),g(i,`max-w-none prose prose-sm md:prose-base`);let _=h(`h1`,i);a(i,_),a(_,u(`Menu 菜单`));let w=h(`p`,i);a(i,w),g(w,`text-sm mt-3 mb-3`),a(w,u("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let A=h(`div`,i);a(i,A),g(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ie=h(`h2`,A);a(A,Ie),g(Ie,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ie,u(`# 推荐：items 数据驱动导航`));let Le=h(`p`,A);a(A,Le),g(Le,`mb-3 text-sm text-base-content/70`),a(Le,u(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Re=e(`rue:component:anchor`);a(A,Re),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});r(()=>d(e,A,Re))});let ze=e(`rue:slot:anchor`);a(A,ze),t(()=>{let n=E.value===`preview`?l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(C,{mode:`inline`,className:ke,items:Pe,selectedKeys:[Te.value],openKeys:Ee.value,onSelect:e=>Te.value=String(e.key),onOpenChange:e=>Ee.value=e});r(()=>d(e,n,i))}),n}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});r(()=>d(e,n,i))}),n});r(()=>d(n,A,ze))});let j=h(`div`,i);a(i,j),g(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Be=h(`h2`,j);a(j,Be),g(Be,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Be,u(`# 推荐：多选、分组与分割线`));let Ve=h(`p`,j);a(j,Ve),g(Ve,`mb-3 text-sm text-base-content/70`),a(Ve,u("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let He=e(`rue:component:anchor`);a(j,He),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});r(()=>d(e,j,He))});let Ue=e(`rue:slot:anchor`);a(j,Ue),t(()=>{let n=te.value===`preview`?l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(C,{className:`bg-base-200 rounded-box w-80`,items:Fe,multiple:!0,defaultSelectedKeys:[`mentions`,`archived`]});r(()=>d(e,n,i))}),n}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`const items = [
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
/>`});r(()=>d(e,n,i))}),n});r(()=>d(n,j,Ue))});let M=h(`div`,i);a(i,M),g(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let We=h(`h2`,M);a(M,We),g(We,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(We,u(`# 推荐：组合式增强 API`));let Ge=h(`p`,M);a(M,Ge),g(Ge,`mb-3 text-sm text-base-content/70`),a(Ge,u("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ke=e(`rue:component:anchor`);a(M,Ke),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});r(()=>d(e,M,Ke))});let qe=e(`rue:slot:anchor`);a(M,qe),t(()=>{let n=D.value===`preview`?l(()=>{let n=s(),i=e(`rue:component:anchor`);a(n,i);let o=l(()=>{let n=s(),i=e(`rue:component:anchor`);a(n,i);let o=l(()=>{let n=s(),i=e(`rue:component:anchor`);a(n,i),t(()=>{let e=m(C.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});r(()=>d(e,n,i))});let o=e(`rue:component:anchor`);return a(n,o),t(()=>{let e=m(C.Item,{eventKey:`notifications`,extra:y(S,{size:`xs`,children:`2`}),children:`Notifications`});r(()=>d(e,n,o))}),n});d(m(C.ItemGroup,{title:`Account`,children:o}),n,i);let c=e(`rue:component:anchor`);a(n,c),d(m(C.Divider,{}),n,c);let u=e(`rue:component:anchor`);a(n,u);let f=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{eventKey:`security`,children:`Security`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),t,r),t});return t(()=>{let e=m(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:f});r(()=>d(e,n,u))}),n});return t(()=>{let e=m(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:De.value,openKeys:Oe.value,onSelect:e=>De.value=e.selectedKeys,onOpenChange:e=>Oe.value=e,children:o});r(()=>d(e,n,i))}),n}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,M,qe))});let Je=h(`div`,i);a(i,Je),g(Je,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),a(Je,u(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=h(`div`,i);a(i,N),g(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ye=h(`h2`,N);a(N,Ye),g(Ye,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ye,u(`# 导航跳转`));let Xe=e(`rue:component:anchor`);a(N,Xe),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});r(()=>d(e,N,Xe))});let Ze=e(`rue:slot:anchor`);a(N,Ze),t(()=>{let n=we.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),t,r);let i=e(`rue:component:anchor`);return a(t,i),d(m(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),t,i),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,N,Ze))});let P=h(`div`,i);a(i,P),g(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qe=h(`h2`,P);a(P,Qe),g(Qe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Qe,u(`# Menu 通过数据渲染（数组）`));let $e=e(`rue:component:anchor`);a(P,$e),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});r(()=>d(e,P,$e))});let et=e(`rue:slot:anchor`);a(P,et),t(()=>{let n=Se.value===`preview`?l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),d(m(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:l(()=>{let n=s(),i=e(`rue:list:start`),c=e(`rue:list:end`);a(n,i),a(n,c);let u=new Map;return t(()=>{u=v({items:Me||[],getKey:(e,t)=>t,elements:u,parent:i.parentNode,before:c,singleRoot:!0,start:i,renderItem:(n,i,c,u,f)=>{d(l(()=>{let i=s(),c=h(`li`,i);a(i,c),t(()=>{o(c,`key`,String(f))});let u=e(`rue:component:anchor`);a(c,u),d(m(C.Item,{children:n.label}),c,u);let g=e(`rue:component:anchor`);return a(c,g),d(m(C.Submenu,{children:l(()=>{let i=s(),c=e(`rue:list:start`),u=e(`rue:list:end`);a(i,c),a(i,u);let f=new Map;return t(()=>{f=v({items:n.children||[],getKey:(e,t)=>t,elements:f,parent:c.parentNode,before:u,start:c,renderItem:(n,i,c,u,f)=>{p(l(typeof n==`string`?()=>{let i=s(),o=e(`rue:component:anchor`);return a(i,o),t(()=>{let e=m(C.Item,{key:f,children:n});r(()=>d(e,i,o))}),i}:()=>{let r=s(),i=h(`li`,r);a(r,i),t(()=>{o(i,`key`,String(f))});let c=e(`rue:component:anchor`);a(i,c),d(m(C.Item,{children:n.label}),i,c);let u=e(`rue:component:anchor`);return a(i,u),d(m(C.Submenu,{children:l(()=>{let r=s(),i=e(`rue:list:start`),o=e(`rue:list:end`);a(r,i),a(r,o);let c=new Map;return t(()=>{c=v({items:n.children||[],getKey:(e,t)=>t,elements:c,parent:i.parentNode,before:o,start:i,renderItem:(e,t,n,r,i)=>{p(m(C.Item,{key:i,children:e}),t,n,r)}})}),r})}),i,u),r}),i,c,u)}})}),i})}),c,g),i}),i,c)}})}),n})}),n,i),n}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,P,et))});let F=h(`div`,i);a(i,F),g(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let tt=h(`h2`,F);a(F,tt),g(tt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(tt,u(`# Menu 通过数据渲染（数组，组件内部）`));let nt=e(`rue:component:anchor`);a(F,nt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});r(()=>d(e,F,nt))});let rt=e(`rue:slot:anchor`);a(F,rt),t(()=>{let n=Ce.value===`preview`?l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(C,{items:Ne,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});r(()=>d(e,n,i))}),n}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});r(()=>d(e,n,i))}),n});r(()=>d(n,F,rt))});let I=h(`div`,i);a(i,I),g(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let it=h(`h2`,I);a(I,it),g(it,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(it,u(`# Menu`));let at=e(`rue:component:anchor`);a(I,at),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});r(()=>d(e,I,at))});let ot=e(`rue:slot:anchor`);a(I,ot),t(()=>{let n=ne.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{as:`button`,children:`Item 2`}),t,r);let i=e(`rue:component:anchor`);return a(t,i),d(m(C.Item,{as:`button`,children:`Item 3`}),t,i),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,I,ot))});let st=h(`div`,i);a(i,st),g(st,`component-preview not-prose text-base-content my-6 lg:my-12`);let ct=h(`h2`,st);a(st,ct),g(ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ct,u(`# 响应式：小屏垂直，大屏水平`));let lt=e(`rue:component:anchor`);a(st,lt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});r(()=>d(e,st,lt))});let ut=e(`rue:slot:anchor`);a(st,ut),t(()=>{let n=re.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{as:`button`,children:`Item 2`}),t,r);let i=e(`rue:component:anchor`);return a(t,i),d(m(C.Item,{as:`button`,children:`Item 3`}),t,i),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,st,ut))});let L=h(`div`,i);a(i,L),g(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let dt=h(`h2`,L);a(L,dt),g(dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(dt,u(`# 仅图标`));let ft=e(`rue:component:anchor`);a(L,ft),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});r(()=>d(e,L,ft))});let pt=e(`rue:slot:anchor`);a(L,pt),t(()=>{let n=ie.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n);let r=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});d(m(C.Item,{as:`button`,children:r}),t,n);let i=e(`rue:component:anchor`);a(t,i);let c=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});d(m(C.Item,{as:`button`,children:c}),t,i);let u=e(`rue:component:anchor`);a(t,u);let f=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return d(m(C.Item,{as:`button`,children:f}),t,u),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,L,pt))});let R=h(`div`,i);a(i,R),g(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let mt=h(`h2`,R);a(R,mt),g(mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(mt,u(`# 仅图标（水平）`));let ht=e(`rue:component:anchor`);a(R,ht),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});r(()=>d(e,R,ht))});let gt=e(`rue:slot:anchor`);a(R,gt),t(()=>{let n=ae.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n);let r=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});d(m(C.Item,{as:`button`,children:r}),t,n);let i=e(`rue:component:anchor`);a(t,i);let c=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});d(m(C.Item,{as:`button`,children:c}),t,i);let u=e(`rue:component:anchor`);a(t,u);let f=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return d(m(C.Item,{as:`button`,children:f}),t,u),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,R,gt))});let z=h(`div`,i);a(i,z),g(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let _t=h(`h2`,z);a(z,_t),g(_t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(_t,u(`# 仅图标（带 tooltip）`));let vt=e(`rue:component:anchor`);a(z,vt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});r(()=>d(e,z,vt))});let yt=e(`rue:slot:anchor`);a(z,yt),t(()=>{let n=oe.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n);let r=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),e});d(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:r}),t,n);let i=e(`rue:component:anchor`);a(t,i);let c=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});d(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:c}),t,i);let u=e(`rue:component:anchor`);a(t,u);let f=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return d(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:f}),t,u),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,z,yt))});let B=h(`div`,i);a(i,B),g(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let bt=h(`h2`,B);a(B,bt),g(bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(bt,u(`# 仅图标（水平，tooltip）`));let xt=e(`rue:component:anchor`);a(B,xt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});r(()=>d(e,B,xt))});let St=e(`rue:slot:anchor`);a(B,St),t(()=>{let n=O.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n);let r=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),e});d(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:r}),t,n);let i=e(`rue:component:anchor`);a(t,i);let c=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});d(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:c}),t,i);let u=e(`rue:component:anchor`);a(t,u);let f=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),e});return d(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:f}),t,u),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,B,St))});let V=h(`div`,i);a(i,V),g(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ct=h(`h2`,V);a(V,Ct),g(Ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ct,u(`# Menu 尺寸`));let wt=e(`rue:component:anchor`);a(V,wt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});r(()=>d(e,V,wt))});let Tt=e(`rue:slot:anchor`);a(V,Tt),t(()=>{let n=se.value===`preview`?l(()=>{let t=s(),n=h(`div`,t);a(t,n),g(n,`grid gap-6`);let r=e(`rue:component:anchor`);a(n,r),d(m(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Xsmall 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{as:`button`,children:`Xsmall 2`}),t,r),t})}),n,r);let i=e(`rue:component:anchor`);a(n,i),d(m(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Small 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{as:`button`,children:`Small 2`}),t,r),t})}),n,i);let o=e(`rue:component:anchor`);a(n,o),d(m(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Medium 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{as:`button`,children:`Medium 2`}),t,r),t})}),n,o);let c=e(`rue:component:anchor`);a(n,c),d(m(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Large 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{as:`button`,children:`Large 2`}),t,r),t})}),n,c);let u=e(`rue:component:anchor`);return a(n,u),d(m(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Xlarge 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{as:`button`,children:`Xlarge 2`}),t,r),t})}),n,u),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});r(()=>d(e,n,i))}),n});r(()=>d(n,V,Tt))});let H=h(`div`,i);a(i,H),g(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let Et=h(`h2`,H);a(H,Et),g(Et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Et,u(`# 禁用项目`));let Dt=e(`rue:component:anchor`);a(H,Dt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});r(()=>d(e,H,Dt))});let Ot=e(`rue:slot:anchor`);a(H,Ot),t(()=>{let n=k.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Enabled item`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),t,r);let i=e(`rue:component:anchor`);return a(t,i),d(m(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),t,i),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,H,Ot))});let U=h(`div`,i);a(i,U),g(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let kt=h(`h2`,U);a(U,kt),g(kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(kt,u(`# 带图标`));let At=e(`rue:component:anchor`);a(U,At),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});r(()=>d(e,U,At))});let jt=e(`rue:slot:anchor`);a(U,jt),t(()=>{let n=ce.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n);let r=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),a(e,u(`Item 2`)),e});d(m(C.Item,{as:`button`,children:r}),t,n);let i=e(`rue:component:anchor`);a(t,i);let c=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),a(e,u(`Item 1`)),e});d(m(C.Item,{as:`button`,children:c}),t,i);let f=e(`rue:component:anchor`);a(t,f);let p=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),g(t,`h-5 w-5`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`stroke`,`currentColor`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`strokeWidth`,`2`),o(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),a(e,u(`Item 3`)),e});return d(m(C.Item,{as:`button`,children:p}),t,f),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,U,jt))});let W=h(`div`,i);a(i,W),g(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Mt=h(`h2`,W);a(W,Mt),g(Mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Mt,u(`# 带图标与徽章（响应式）`));let Nt=e(`rue:component:anchor`);a(W,Nt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});r(()=>d(e,W,Nt))});let Pt=e(`rue:slot:anchor`);a(W,Pt),t(()=>{let n=le.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n);let r=l(()=>{let t=s(),n=h(`svg`,t);a(t,n),o(n,`xmlns`,`http://www.w3.org/2000/svg`),g(n,`h-5 w-5`),o(n,`fill`,`none`),o(n,`viewBox`,`0 0 24 24`),o(n,`stroke`,`currentColor`);let r=h(`path`,n);a(n,r),o(r,`strokeLinecap`,`round`),o(r,`strokeLinejoin`,`round`),o(r,`strokeWidth`,`2`),o(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),a(t,u(`Inbox`));let i=e(`rue:component:anchor`);return a(t,i),d(m(S,{size:`xs`,children:`99+`}),t,i),t});d(m(C.Item,{as:`button`,children:r}),t,n);let i=e(`rue:component:anchor`);a(t,i);let p=l(()=>{let t=s(),n=h(`svg`,t);a(t,n),o(n,`xmlns`,`http://www.w3.org/2000/svg`),g(n,`h-5 w-5`),o(n,`fill`,`none`),o(n,`viewBox`,`0 0 24 24`),o(n,`stroke`,`currentColor`);let r=h(`path`,n);a(n,r),o(r,`strokeLinecap`,`round`),o(r,`strokeLinejoin`,`round`),o(r,`strokeWidth`,`2`),o(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),a(t,u(`Updates`));let i=f(t);a(t,i),c(i,` `);let l=e(`rue:component:anchor`);return a(t,l),d(m(S,{size:`xs`,variant:`warning`,children:`NEW`}),t,l),t});d(m(C.Item,{as:`button`,children:p}),t,i);let _=e(`rue:component:anchor`);a(t,_);let v=l(()=>{let t=s();a(t,u(`Stats`));let n=e(`rue:component:anchor`);return a(t,n),d(m(S,{size:`xs`,variant:`info`}),t,n),t});return d(m(C.Item,{as:`button`,children:v}),t,_),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,W,Pt))});let G=h(`div`,i);a(i,G),g(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ft=h(`h2`,G);a(G,Ft),g(Ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ft,u(`# 去除内边距和圆角`));let It=e(`rue:component:anchor`);a(G,It),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});r(()=>d(e,G,It))});let Lt=e(`rue:slot:anchor`);a(G,Lt),t(()=>{let n=ue.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Item 1`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{children:`Item 2`}),t,r);let i=e(`rue:component:anchor`);return a(t,i),d(m(C.Item,{children:`Item 3`}),t,i),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,G,Lt))});let K=h(`div`,i);a(i,K),g(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Rt=h(`h2`,K);a(K,Rt),g(Rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Rt,u(`# 带标题`));let zt=e(`rue:component:anchor`);a(K,zt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});r(()=>d(e,K,zt))});let Bt=e(`rue:slot:anchor`);a(K,Bt),t(()=>{let n=de.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Title,{children:`Title`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{children:`Item 1`}),t,r);let i=e(`rue:component:anchor`);a(t,i),d(m(C.Item,{children:`Item 2`}),t,i);let o=e(`rue:component:anchor`);return a(t,o),d(m(C.Item,{children:`Item 3`}),t,o),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,K,Bt))});let q=h(`div`,i);a(i,q),g(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Vt=h(`h2`,q);a(q,Vt),g(Vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Vt,u(`# 标题作为父级`));let Ht=e(`rue:component:anchor`);a(q,Ht),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});r(()=>d(e,q,Ht))});let Ut=e(`rue:slot:anchor`);a(q,Ut),t(()=>{let n=fe.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=h(`li`,t);a(t,n);let r=e(`rue:component:anchor`);a(n,r),d(m(C.Title,{as:`h2`,children:`Title`}),n,r);let i=h(`ul`,n);a(n,i);let o=e(`rue:component:anchor`);a(i,o),d(m(C.Item,{children:`Item 1`}),i,o);let c=e(`rue:component:anchor`);a(i,c),d(m(C.Item,{children:`Item 2`}),i,c);let l=e(`rue:component:anchor`);return a(i,l),d(m(C.Item,{children:`Item 3`}),i,l),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,q,Ut))});let J=h(`div`,i);a(i,J),g(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Wt=h(`h2`,J);a(J,Wt),g(Wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Wt,u(`# 子菜单`));let Gt=e(`rue:component:anchor`);a(J,Gt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});r(()=>d(e,J,Gt))});let Kt=e(`rue:slot:anchor`);a(J,Kt),t(()=>{let n=pe.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=h(`li`,t);a(t,r);let i=e(`rue:component:anchor`);a(r,i),d(m(C.Item,{as:`button`,children:`Parent`}),r,i);let o=e(`rue:component:anchor`);a(r,o);let c=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Submenu 1`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{as:`button`,children:`Submenu 2`}),t,r);let i=h(`li`,t);a(t,i);let o=e(`rue:component:anchor`);a(i,o),d(m(C.Item,{as:`button`,children:`Parent`}),i,o);let c=e(`rue:component:anchor`);a(i,c);let u=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Submenu 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{as:`button`,children:`Submenu 2`}),t,r),t});return d(m(C.Submenu,{children:u}),i,c),t});d(m(C.Submenu,{children:c}),r,o);let u=e(`rue:component:anchor`);return a(t,u),d(m(C.Item,{as:`button`,children:`Item 3`}),t,u),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,J,Kt))});let Y=h(`div`,i);a(i,Y),g(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let qt=h(`h2`,Y);a(Y,qt),g(qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(qt,u(`# 可折叠子菜单`));let Jt=e(`rue:component:anchor`);a(Y,Jt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});r(()=>d(e,Y,Jt))});let Yt=e(`rue:slot:anchor`);a(Y,Yt),t(()=>{let n=me.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=h(`li`,t);a(t,r);let i=h(`details`,r);a(r,i);let o=h(`summary`,i);a(i,o),a(o,u(`Parent`));let c=h(`ul`,i);a(i,c);let l=e(`rue:component:anchor`);a(c,l),d(m(C.Item,{as:`button`,children:`Submenu 1`}),c,l);let f=e(`rue:component:anchor`);a(c,f),d(m(C.Item,{as:`button`,children:`Submenu 2`}),c,f);let p=h(`li`,c);a(c,p);let g=h(`details`,p);a(p,g);let _=h(`summary`,g);a(g,_),a(_,u(`Parent`));let v=h(`ul`,g);a(g,v);let y=e(`rue:component:anchor`);a(v,y),d(m(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=e(`rue:component:anchor`);a(v,b),d(m(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=e(`rue:component:anchor`);return a(t,x),d(m(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,Y,Yt))});let X=h(`div`,i);a(i,X),g(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xt=h(`h2`,X);a(X,Xt),g(Xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Xt,u(`# 通过类名控制展开（JS）`));let Zt=e(`rue:component:anchor`);a(X,Zt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});r(()=>d(e,X,Zt))});let Qt=e(`rue:slot:anchor`);a(X,Qt),t(()=>{let n=he.value===`preview`?l(()=>{let n=s(),i=h(`div`,n);a(n,i),g(i,`grid gap-6`);let o=e(`rue:component:anchor`);a(i,o),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Item 1`}),t,n);let r=h(`li`,t);a(t,r);let i=e(`rue:component:anchor`);a(r,i),d(m(C.DropdownToggle,{onClick:je,children:`Parent`}),r,i);let o=e(`rue:component:anchor`);a(r,o);let c=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Submenu 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{children:`Submenu 2`}),t,r),t});return d(m(C.Dropdown,{children:c}),r,o),t})}),i,o);let c=e(`rue:component:anchor`);return a(i,c),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=s(),i=e(`rue:component:anchor`);a(n,i),d(m(C.Item,{children:`Item 1`}),n,i);let o=h(`li`,n);a(n,o);let c=e(`rue:component:anchor`);a(o,c),t(()=>{let e=m(C.DropdownToggle,{show:!0,onClick:je,children:`Parent`});r(()=>d(e,o,c))});let u=e(`rue:component:anchor`);a(o,u);let f=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Submenu 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{children:`Submenu 2`}),t,r),t});return t(()=>{let e=m(C.Dropdown,{show:!0,children:f});r(()=>d(e,o,u))}),n})}),i,c),n}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,X,Qt))});let Z=h(`div`,i);a(i,Z),g(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let $t=h(`h2`,Z);a(Z,$t),g($t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a($t,u(`# 文件树`));let en=e(`rue:component:anchor`);a(Z,en),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});r(()=>d(e,Z,en))});let tn=e(`rue:slot:anchor`);a(Z,tn),t(()=>{let n=ge.value===`preview`?l(()=>{let n=s(),i=e(`rue:component:anchor`);a(n,i);let c=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n);let r=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`strokeWidth`,`1.5`),o(t,`stroke`,`currentColor`),g(t,`w-4 h-4`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(e,u(`resume.pdf`)),e});d(m(C.Item,{as:`button`,children:r}),t,n);let i=h(`li`,t);a(t,i);let c=h(`details`,i);a(i,c);let f=h(`summary`,c);a(c,f);let p=h(`svg`,f);a(f,p),o(p,`xmlns`,`http://www.w3.org/2000/svg`),o(p,`fill`,`none`),o(p,`viewBox`,`0 0 24 24`),o(p,`strokeWidth`,`1.5`),o(p,`stroke`,`currentColor`),g(p,`w-4 h-4`);let _=h(`path`,p);a(p,_),o(_,`strokeLinecap`,`round`),o(_,`strokeLinejoin`,`round`),o(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(f,u(`My Files`));let v=h(`ul`,c);a(c,v);let y=e(`rue:component:anchor`);a(v,y);let b=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`strokeWidth`,`1.5`),o(t,`stroke`,`currentColor`),g(t,`w-4 h-4`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(e,u(`Project-final.psd`)),e});d(m(C.Item,{as:`button`,children:b}),v,y);let x=e(`rue:component:anchor`);a(v,x);let S=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`strokeWidth`,`1.5`),o(t,`stroke`,`currentColor`),g(t,`w-4 h-4`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(e,u(`Project-final-2.psd`)),e});d(m(C.Item,{as:`button`,children:S}),v,x);let w=h(`li`,v);a(v,w);let T=h(`details`,w);a(w,T);let ee=h(`summary`,T);a(T,ee);let E=h(`svg`,ee);a(ee,E),o(E,`xmlns`,`http://www.w3.org/2000/svg`),o(E,`fill`,`none`),o(E,`viewBox`,`0 0 24 24`),o(E,`strokeWidth`,`1.5`),o(E,`stroke`,`currentColor`),g(E,`w-4 h-4`);let te=h(`path`,E);a(E,te),o(te,`strokeLinecap`,`round`),o(te,`strokeLinejoin`,`round`),o(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(ee,u(`Images`));let D=h(`ul`,T);a(T,D);let ne=e(`rue:component:anchor`);a(D,ne);let re=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`strokeWidth`,`1.5`),o(t,`stroke`,`currentColor`),g(t,`w-4 h-4`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(e,u(`Screenshot1.png`)),e});d(m(C.Item,{as:`button`,children:re}),D,ne);let ie=e(`rue:component:anchor`);a(D,ie);let ae=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`strokeWidth`,`1.5`),o(t,`stroke`,`currentColor`),g(t,`w-4 h-4`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(e,u(`Screenshot2.png`)),e});d(m(C.Item,{as:`button`,children:ae}),D,ie);let oe=h(`li`,D);a(D,oe);let O=h(`details`,oe);a(oe,O);let se=h(`summary`,O);a(O,se);let k=h(`svg`,se);a(se,k),o(k,`xmlns`,`http://www.w3.org/2000/svg`),o(k,`fill`,`none`),o(k,`viewBox`,`0 0 24 24`),o(k,`strokeWidth`,`1.5`),o(k,`stroke`,`currentColor`),g(k,`w-4 h-4`);let ce=h(`path`,k);a(k,ce),o(ce,`strokeLinecap`,`round`),o(ce,`strokeLinejoin`,`round`),o(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(se,u(`Others`));let le=h(`ul`,O);a(O,le);let ue=e(`rue:component:anchor`);a(le,ue);let de=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`strokeWidth`,`1.5`),o(t,`stroke`,`currentColor`),g(t,`w-4 h-4`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(e,u(`Screenshot3.png`)),e});d(m(C.Item,{as:`button`,children:de}),le,ue);let fe=e(`rue:component:anchor`);a(t,fe);let pe=l(()=>{let e=s(),t=h(`svg`,e);a(e,t),o(t,`xmlns`,`http://www.w3.org/2000/svg`),o(t,`fill`,`none`),o(t,`viewBox`,`0 0 24 24`),o(t,`strokeWidth`,`1.5`),o(t,`stroke`,`currentColor`),g(t,`w-4 h-4`);let n=h(`path`,t);return a(t,n),o(n,`strokeLinecap`,`round`),o(n,`strokeLinejoin`,`round`),o(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(e,u(`reports-final-2.pdf`)),e});return d(m(C.Item,{as:`button`,children:pe}),t,fe),t});return t(()=>{let e=m(C,{size:`xs`,className:Ae,children:c});r(()=>d(e,n,i))}),n}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,Z,tn))});let Q=h(`div`,i);a(i,Q),g(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let nn=h(`h2`,Q);a(Q,nn),g(nn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(nn,u(`# 激活项`));let rn=e(`rue:component:anchor`);a(Q,rn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});r(()=>d(e,Q,rn))});let an=e(`rue:slot:anchor`);a(Q,an),t(()=>{let n=_e.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Item 1`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{className:`menu-active`,children:`Item 2`}),t,r);let i=e(`rue:component:anchor`);return a(t,i),d(m(C.Item,{children:`Item 3`}),t,i),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,Q,an))});let on=h(`div`,i);a(i,on),g(on,`component-preview not-prose text-base-content my-6 lg:my-12`);let sn=h(`h2`,on);a(on,sn),g(sn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(sn,u(`# 水平菜单`));let cn=e(`rue:component:anchor`);a(on,cn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});r(()=>d(e,on,cn))});let ln=e(`rue:slot:anchor`);a(on,ln),t(()=>{let n=ve.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Item 1`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{children:`Item 2`}),t,r);let i=e(`rue:component:anchor`);return a(t,i),d(m(C.Item,{children:`Item 3`}),t,i),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,on,ln))});let un=h(`div`,i);a(i,un),g(un,`component-preview not-prose text-base-content my-6 lg:my-12`);let dn=h(`h2`,un);a(un,dn),g(dn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(dn,u(`# 水平子菜单`));let fn=e(`rue:component:anchor`);a(un,fn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});r(()=>d(e,un,fn))});let pn=e(`rue:slot:anchor`);a(un,pn),t(()=>{let n=ye.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Item 1`}),t,n);let r=h(`li`,t);a(t,r);let i=e(`rue:component:anchor`);a(r,i),d(m(C.Item,{children:`Parent`}),r,i);let o=e(`rue:component:anchor`);a(r,o);let c=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Submenu 1`}),t,n);let r=e(`rue:component:anchor`);return a(t,r),d(m(C.Item,{children:`Submenu 2`}),t,r),t});d(m(C.Submenu,{children:c}),r,o);let u=e(`rue:component:anchor`);return a(t,u),d(m(C.Item,{children:`Item 3`}),t,u),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,un,pn))});let mn=h(`div`,i);a(i,mn),g(mn,`component-preview not-prose text-base-content my-6 lg:my-12`);let hn=h(`h2`,mn);a(mn,hn),g(hn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(hn,u(`# Mega 菜单（响应式）`));let gn=e(`rue:component:anchor`);a(mn,gn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});r(()=>d(e,mn,gn))});let _n=e(`rue:slot:anchor`);a(mn,_n),t(()=>{let n=be.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:l(()=>{let t=s(),n=h(`li`,t);a(t,n);let r=e(`rue:component:anchor`);a(n,r),d(m(C.Item,{children:`Solutions`}),n,r);let i=e(`rue:component:anchor`);a(n,i);let o=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Design`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{children:`Development`}),t,r);let i=e(`rue:component:anchor`);a(t,i),d(m(C.Item,{children:`Hosting`}),t,i);let o=e(`rue:component:anchor`);return a(t,o),d(m(C.Item,{children:`Domain register`}),t,o),t});d(m(C.Submenu,{children:o}),n,i);let c=h(`li`,t);a(t,c);let u=e(`rue:component:anchor`);a(c,u),d(m(C.Item,{children:`Enterprise`}),c,u);let f=e(`rue:component:anchor`);a(c,f);let p=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`CRM software`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{children:`Marketing management`}),t,r);let i=e(`rue:component:anchor`);a(t,i),d(m(C.Item,{children:`Security`}),t,i);let o=e(`rue:component:anchor`);return a(t,o),d(m(C.Item,{children:`Consulting`}),t,o),t});d(m(C.Submenu,{children:p}),c,f);let g=h(`li`,t);a(t,g);let _=e(`rue:component:anchor`);a(g,_),d(m(C.Item,{children:`Products`}),g,_);let v=e(`rue:component:anchor`);a(g,v);let y=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`UI Kit`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{children:`WordPress themes`}),t,r);let i=e(`rue:component:anchor`);a(t,i),d(m(C.Item,{children:`WordPress plugins`}),t,i);let o=h(`li`,t);a(t,o);let c=e(`rue:component:anchor`);a(o,c),d(m(C.Item,{children:`Open source`}),o,c);let u=e(`rue:component:anchor`);a(o,u);let f=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`Auth management system`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{children:`VScode theme`}),t,r);let i=e(`rue:component:anchor`);return a(t,i),d(m(C.Item,{children:`Color picker app`}),t,i),t});return d(m(C.Submenu,{children:f}),o,u),t});d(m(C.Submenu,{children:y}),g,v);let b=h(`li`,t);a(t,b);let x=e(`rue:component:anchor`);a(b,x),d(m(C.Item,{children:`Company`}),b,x);let S=e(`rue:component:anchor`);a(b,S);let w=l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{children:`About us`}),t,n);let r=e(`rue:component:anchor`);a(t,r),d(m(C.Item,{children:`Contact us`}),t,r);let i=e(`rue:component:anchor`);a(t,i),d(m(C.Item,{children:`Privacy policy`}),t,i);let o=e(`rue:component:anchor`);return a(t,o),d(m(C.Item,{children:`Press kit`}),t,o),t});return d(m(C.Submenu,{children:w}),b,S),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,mn,_n))});let $=h(`div`,i);a(i,$),g($,`component-preview not-prose text-base-content my-6 lg:my-12`);let vn=h(`h2`,$);a($,vn),g(vn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(vn,u(`# 可折叠（响应式）`));let yn=e(`rue:component:anchor`);a($,yn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});r(()=>d(e,$,yn))});let bn=e(`rue:slot:anchor`);a($,bn),t(()=>{let n=xe.value===`preview`?l(()=>{let t=s(),n=e(`rue:component:anchor`);return a(t,n),d(m(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:l(()=>{let t=s(),n=e(`rue:component:anchor`);a(t,n),d(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=h(`li`,t);a(t,r);let i=h(`details`,r);a(r,i);let o=h(`summary`,i);a(i,o),a(o,u(`Parent item`));let c=h(`ul`,i);a(i,c);let l=e(`rue:component:anchor`);a(c,l),d(m(C.Item,{as:`button`,children:`Submenu 1`}),c,l);let f=e(`rue:component:anchor`);a(c,f),d(m(C.Item,{as:`button`,children:`Submenu 2`}),c,f);let p=h(`li`,c);a(c,p);let g=h(`details`,p);a(p,g);let _=h(`summary`,g);a(g,_),a(_,u(`Parent`));let v=h(`ul`,g);a(g,v);let y=e(`rue:component:anchor`);a(v,y),d(m(C.Item,{as:`button`,children:`item 1`}),v,y);let b=e(`rue:component:anchor`);a(v,b),d(m(C.Item,{as:`button`,children:`item 2`}),v,b);let x=e(`rue:component:anchor`);return a(t,x),d(m(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,n),t}):l(()=>{let n=s(),i=e(`rue:component:anchor`);return a(n,i),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});r(()=>d(e,n,i))}),n});r(()=>d(n,$,bn))});let xn=h(`h2`,i);a(i,xn),a(xn,u(`API`));let Sn=h(`p`,i);a(i,Sn),g(Sn,`text-sm text-base-content/70`),a(Sn,u("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Cn=h(`h3`,i);a(i,Cn),a(Cn,u(`Menu.Item 链接相关`));let wn=e(`rue:component:anchor`);return a(i,wn),t(()=>{let e=m(T,{rows:ee});r(()=>d(e,i,wn))}),n})}),i,_),i})};export{E as default};
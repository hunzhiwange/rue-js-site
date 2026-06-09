import{$ as e,Ht as t,Q as n,Rt as r,Xt as i,Y as a,Z as o,c as s,ct as c,et as l,l as u,mt as d,ot as f,qt as p,s as m,t as h,tt as g}from"./vapor-runtime-aZAg0Qkw.js";import{a as _,n as v}from"./vapor-helpers-vapor-gtGwiIv0.js";import{i as y}from"./persistentSidebarPlayground-IkfbXpbu.js";import{t as b}from"./Code-5DOEyGxf.js";import{t as x}from"./tabs-CWmjyn0I.js";import{t as S}from"./badge-BESJ10D8.js";import{t as C}from"./menu-CjXNa54u.js";import{r as w}from"./SidebarPlaygroundDesign-CS11MI8e.js";var T=r=>u(s=>{let d=e(`div`,s);c(d,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=e(`table`,d);a(d,p),c(p,`table table-zebra`);let h=e(`thead`,p);a(p,h);let g=e(`tr`,h);a(h,g);let _=e(`th`,g);a(g,_),a(_,l(`属性`));let y=e(`th`,g);a(g,y),a(y,l(`说明`));let b=e(`th`,g);a(g,b),a(b,l(`类型`));let x=e(`th`,g);a(g,x),a(x,l(`默认值`));let S=e(`tbody`,p);a(p,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);a(S,C),a(S,w);let T=new Map;return i(()=>{T=v({items:r.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(r,s,c,l,d)=>{m(u(()=>{let s=n(),c=e(`tr`,s);a(s,c),i(()=>{f(c,`key`,String(r.prop))});let l=e(`td`,c);a(c,l);let u=e(`code`,l);a(l,u);let d=o(`rue:slot:anchor`);a(u,d),i(()=>{let e=r.prop;t(()=>m(e,u,d))});let p=e(`td`,c);a(c,p);let h=o(`rue:slot:anchor`);a(p,h),i(()=>{let e=r.description;t(()=>m(e,p,h))});let g=e(`td`,c);a(c,g);let _=e(`code`,g);a(g,_);let v=o(`rue:slot:anchor`);a(_,v),i(()=>{let e=r.type;t(()=>m(e,_,v))});let y=e(`td`,c);a(c,y);let b=e(`code`,y);a(y,b);let x=o(`rue:slot:anchor`);return a(b,x),i(()=>{let e=r.defaultValue;t(()=>m(e,b,x))}),s}),s,c)}})}),d}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKeys:Te,recommendedOpenKeys:Ee,multipleSelectedKeys:De,compoundSelectedKeys:Oe,compoundOpenKeys:ke,toggleDropdownByClass:Ae,menuData:je,menuItems:Me}=_(`useSetup:0:0`,()=>p(()=>({tRecommended:_(`ref:1:0`,()=>r(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>r(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>r(`preview`)),tBasic:_(`ref:1:3`,()=>r(`preview`)),tResponsive:_(`ref:1:4`,()=>r(`preview`)),tIconOnly:_(`ref:1:5`,()=>r(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>r(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>r(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>r(`preview`)),tSizes:_(`ref:1:9`,()=>r(`preview`)),tDisabled:_(`ref:1:10`,()=>r(`preview`)),tIcons:_(`ref:1:11`,()=>r(`preview`)),tIconsBadge:_(`ref:1:12`,()=>r(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>r(`preview`)),tTitle:_(`ref:1:14`,()=>r(`preview`)),tTitleParent:_(`ref:1:15`,()=>r(`preview`)),tSubmenu:_(`ref:1:16`,()=>r(`preview`)),tCollapsible:_(`ref:1:17`,()=>r(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>r(`preview`)),tFileTree:_(`ref:1:19`,()=>r(`preview`)),tActiveItem:_(`ref:1:20`,()=>r(`preview`)),tHorizontal:_(`ref:1:21`,()=>r(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>r(`preview`)),tMega:_(`ref:1:23`,()=>r(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>r(`preview`)),tArray:_(`ref:1:25`,()=>r(`preview`)),tArrayInternal:_(`ref:1:26`,()=>r(`preview`)),tNavigation:_(`ref:1:27`,()=>r(`preview`)),recommendedSelectedKeys:_(`ref:1:28`,()=>r([`overview`])),recommendedOpenKeys:_(`ref:1:29`,()=>r([`workspace`])),multipleSelectedKeys:_(`ref:1:30`,()=>r([`mentions`,`archived`])),compoundSelectedKeys:_(`ref:1:31`,()=>r([`profile`])),compoundOpenKeys:_(`ref:1:32`,()=>r([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Ne=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Pe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return u(r=>{let p=n(),_=o(`rue:component:anchor`);return a(p,_),m(h(w,{children:u(()=>{let r=n(),p=e(`div`,r);a(r,p),c(p,`max-w-none prose prose-sm md:prose-base`);let _=e(`h1`,p);a(p,_),a(_,l(`Menu 菜单`));let w=e(`p`,p);a(p,w),c(w,`text-sm mt-3 mb-3`),a(w,l("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let A=e(`div`,p);a(p,A),c(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Fe=e(`h2`,A);a(A,Fe),c(Fe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Fe,l(`# 推荐：items 数据驱动导航`));let Ie=e(`p`,A);a(A,Ie),c(Ie,`mb-3 text-sm text-base-content/70`),a(Ie,l(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Le=o(`rue:component:anchor`);a(A,Le),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});t(()=>m(e,A,Le))});let Re=o(`rue:slot:anchor`);a(A,Re),i(()=>{let e=E.value===`preview`?u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(C,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:Ne,selectedKeys:Te.value,openKeys:Ee.value,onSelect:e=>Te.value=e.selectedKeys,onOpenChange:e=>Ee.value=e});t(()=>m(n,e,r))}),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});t(()=>m(n,e,r))}),e});t(()=>m(e,A,Re))});let j=e(`div`,p);a(p,j),c(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let ze=e(`h2`,j);a(j,ze),c(ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ze,l(`# 推荐：多选、分组与分割线`));let Be=e(`p`,j);a(j,Be),c(Be,`mb-3 text-sm text-base-content/70`),a(Be,l("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let Ve=o(`rue:component:anchor`);a(j,Ve),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});t(()=>m(e,j,Ve))});let He=o(`rue:slot:anchor`);a(j,He),i(()=>{let e=te.value===`preview`?u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(C,{className:`bg-base-200 rounded-box w-80`,items:Pe,multiple:!0,selectedKeys:De.value,onSelect:e=>De.value=e.selectedKeys,onDeselect:e=>De.value=e.selectedKeys});t(()=>m(n,e,r))}),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

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
/>`});t(()=>m(n,e,r))}),e});t(()=>m(e,j,He))});let M=e(`div`,p);a(p,M),c(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ue=e(`h2`,M);a(M,Ue),c(Ue,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ue,l(`# 推荐：组合式增强 API`));let We=e(`p`,M);a(M,We),c(We,`mb-3 text-sm text-base-content/70`),a(We,l("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ge=o(`rue:component:anchor`);a(M,Ge),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});t(()=>m(e,M,Ge))});let Ke=o(`rue:slot:anchor`);a(M,Ke),i(()=>{let e=D.value===`preview`?u(()=>{let e=n(),r=o(`rue:component:anchor`);a(e,r);let s=u(()=>{let e=n(),r=o(`rue:component:anchor`);a(e,r);let s=u(()=>{let e=n(),r=o(`rue:component:anchor`);a(e,r),i(()=>{let n=h(C.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});t(()=>m(n,e,r))});let s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=h(C.Item,{eventKey:`notifications`,extra:y(S,{size:`xs`,children:`2`}),children:`Notifications`});t(()=>m(n,e,s))}),e});m(h(C.ItemGroup,{title:`Account`,children:s}),e,r);let c=o(`rue:component:anchor`);a(e,c),m(h(C.Divider,{}),e,c);let l=o(`rue:component:anchor`);a(e,l);let d=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{eventKey:`security`,children:`Security`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,r),e});return i(()=>{let n=h(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:d});t(()=>m(n,e,l))}),e});return i(()=>{let n=h(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:Oe.value,openKeys:ke.value,onSelect:e=>Oe.value=e.selectedKeys,onOpenChange:e=>ke.value=e,children:s});t(()=>m(n,e,r))}),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,M,Ke))});let qe=e(`div`,p);a(p,qe),c(qe,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),a(qe,l(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=e(`div`,p);a(p,N),c(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Je=e(`h2`,N);a(N,Je),c(Je,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Je,l(`# 导航跳转`));let Ye=o(`rue:component:anchor`);a(N,Ye),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});t(()=>m(e,N,Ye))});let Xe=o(`rue:slot:anchor`);a(N,Xe),i(()=>{let e=we.value===`preview`?u(()=>{let e=n(),t=o(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,r);let i=o(`rue:component:anchor`);return a(e,i),m(h(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,i),e})}),e,t),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,N,Xe))});let P=e(`div`,p);a(p,P),c(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ze=e(`h2`,P);a(P,Ze),c(Ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ze,l(`# Menu 通过数据渲染（数组）`));let Qe=o(`rue:component:anchor`);a(P,Qe),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});t(()=>m(e,P,Qe))});let $e=o(`rue:slot:anchor`);a(P,$e),i(()=>{let r=Se.value===`preview`?u(()=>{let r=n(),c=o(`rue:component:anchor`);return a(r,c),m(h(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:u(()=>{let r=n(),c=o(`rue:list:start`),l=o(`rue:list:end`);a(r,c),a(r,l);let d=new Map;return i(()=>{d=v({items:je||[],getKey:(e,t)=>t,elements:d,parent:c.parentNode,before:l,singleRoot:!0,start:c,renderItem:(r,c,l,d,p)=>{m(u(()=>{let c=n(),l=e(`li`,c);a(c,l),i(()=>{f(l,`key`,String(p))});let d=o(`rue:component:anchor`);a(l,d),m(h(C.Item,{children:r.label}),l,d);let g=o(`rue:component:anchor`);return a(l,g),m(h(C.Submenu,{children:u(()=>{let c=n(),l=o(`rue:list:start`),d=o(`rue:list:end`);a(c,l),a(c,d);let p=new Map;return i(()=>{p=v({items:r.children||[],getKey:(e,t)=>t,elements:p,parent:l.parentNode,before:d,start:l,renderItem:(r,c,l,d,p)=>{s(u(typeof r==`string`?()=>{let e=n(),s=o(`rue:component:anchor`);return a(e,s),i(()=>{let n=h(C.Item,{key:p,children:r});t(()=>m(n,e,s))}),e}:()=>{let t=n(),c=e(`li`,t);a(t,c),i(()=>{f(c,`key`,String(p))});let l=o(`rue:component:anchor`);a(c,l),m(h(C.Item,{children:r.label}),c,l);let d=o(`rue:component:anchor`);return a(c,d),m(h(C.Submenu,{children:u(()=>{let e=n(),t=o(`rue:list:start`),c=o(`rue:list:end`);a(e,t),a(e,c);let l=new Map;return i(()=>{l=v({items:r.children||[],getKey:(e,t)=>t,elements:l,parent:t.parentNode,before:c,start:t,renderItem:(e,t,n,r,i)=>{s(h(C.Item,{key:i,children:e}),t,n,r)}})}),e})}),c,d),t}),c,l,d)}})}),c})}),l,g),c}),c,l)}})}),r})}),r,c),r}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,P,$e))});let F=e(`div`,p);a(p,F),c(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let et=e(`h2`,F);a(F,et),c(et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(et,l(`# Menu 通过数据渲染（数组，组件内部）`));let tt=o(`rue:component:anchor`);a(F,tt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});t(()=>m(e,F,tt))});let nt=o(`rue:slot:anchor`);a(F,nt),i(()=>{let e=Ce.value===`preview`?u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(C,{items:Me,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});t(()=>m(n,e,r))}),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});t(()=>m(n,e,r))}),e});t(()=>m(e,F,nt))});let I=e(`div`,p);a(p,I),c(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let rt=e(`h2`,I);a(I,rt),c(rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(rt,l(`# Menu`));let it=o(`rue:component:anchor`);a(I,it),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});t(()=>m(e,I,it))});let at=o(`rue:slot:anchor`);a(I,at),i(()=>{let e=ne.value===`preview`?u(()=>{let e=n(),t=o(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{as:`button`,children:`Item 2`}),e,r);let i=o(`rue:component:anchor`);return a(e,i),m(h(C.Item,{as:`button`,children:`Item 3`}),e,i),e})}),e,t),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,I,at))});let L=e(`div`,p);a(p,L),c(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let ot=e(`h2`,L);a(L,ot),c(ot,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ot,l(`# 响应式：小屏垂直，大屏水平`));let st=o(`rue:component:anchor`);a(L,st),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});t(()=>m(e,L,st))});let ct=o(`rue:slot:anchor`);a(L,ct),i(()=>{let e=re.value===`preview`?u(()=>{let e=n(),t=o(`rue:component:anchor`);return a(e,t),m(h(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Item 1`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{as:`button`,children:`Item 2`}),e,r);let i=o(`rue:component:anchor`);return a(e,i),m(h(C.Item,{as:`button`,children:`Item 3`}),e,i),e})}),e,t),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,L,ct))});let R=e(`div`,p);a(p,R),c(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let lt=e(`h2`,R);a(R,lt),c(lt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(lt,l(`# 仅图标`));let ut=o(`rue:component:anchor`);a(R,ut),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});t(()=>m(e,R,ut))});let dt=o(`rue:slot:anchor`);a(R,dt),i(()=>{let r=ie.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`bg-base-200 rounded-box`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r);let i=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});m(h(C.Item,{as:`button`,children:i}),t,r);let s=o(`rue:component:anchor`);a(t,s);let l=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});m(h(C.Item,{as:`button`,children:l}),t,s);let d=o(`rue:component:anchor`);a(t,d);let p=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return m(h(C.Item,{as:`button`,children:p}),t,d),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,R,dt))});let z=e(`div`,p);a(p,z),c(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let ft=e(`h2`,z);a(z,ft),c(ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ft,l(`# 仅图标（水平）`));let pt=o(`rue:component:anchor`);a(z,pt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});t(()=>m(e,z,pt))});let mt=o(`rue:slot:anchor`);a(z,mt),i(()=>{let r=ae.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r);let i=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});m(h(C.Item,{as:`button`,children:i}),t,r);let s=o(`rue:component:anchor`);a(t,s);let l=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});m(h(C.Item,{as:`button`,children:l}),t,s);let d=o(`rue:component:anchor`);a(t,d);let p=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return m(h(C.Item,{as:`button`,children:p}),t,d),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,z,mt))});let B=e(`div`,p);a(p,B),c(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let ht=e(`h2`,B);a(B,ht),c(ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(ht,l(`# 仅图标（带 tooltip）`));let gt=o(`rue:component:anchor`);a(B,gt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});t(()=>m(e,B,gt))});let _t=o(`rue:slot:anchor`);a(B,_t),i(()=>{let r=oe.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`bg-base-200 rounded-box`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r);let i=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),t});m(h(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:i}),t,r);let s=o(`rue:component:anchor`);a(t,s);let l=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});m(h(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:l}),t,s);let d=o(`rue:component:anchor`);a(t,d);let p=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return m(h(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:p}),t,d),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,B,_t))});let V=e(`div`,p);a(p,V),c(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let vt=e(`h2`,V);a(V,vt),c(vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(vt,l(`# 仅图标（水平，tooltip）`));let yt=o(`rue:component:anchor`);a(V,yt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});t(()=>m(e,V,yt))});let bt=o(`rue:slot:anchor`);a(V,bt),i(()=>{let r=O.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r);let i=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),t});m(h(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:i}),t,r);let s=o(`rue:component:anchor`);a(t,s);let l=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});m(h(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:l}),t,s);let d=o(`rue:component:anchor`);a(t,d);let p=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),t});return m(h(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:p}),t,d),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,V,bt))});let H=e(`div`,p);a(p,H),c(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let xt=e(`h2`,H);a(H,xt),c(xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(xt,l(`# Menu 尺寸`));let St=o(`rue:component:anchor`);a(H,St),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});t(()=>m(e,H,St))});let Ct=o(`rue:slot:anchor`);a(H,Ct),i(()=>{let r=se.value===`preview`?u(()=>{let t=n(),r=e(`div`,t);a(t,r),c(r,`grid gap-6`);let i=o(`rue:component:anchor`);a(r,i),m(h(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Xsmall 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{as:`button`,children:`Xsmall 2`}),e,r),e})}),r,i);let s=o(`rue:component:anchor`);a(r,s),m(h(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Small 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{as:`button`,children:`Small 2`}),e,r),e})}),r,s);let l=o(`rue:component:anchor`);a(r,l),m(h(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Medium 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{as:`button`,children:`Medium 2`}),e,r),e})}),r,l);let d=o(`rue:component:anchor`);a(r,d),m(h(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Large 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{as:`button`,children:`Large 2`}),e,r),e})}),r,d);let f=o(`rue:component:anchor`);return a(r,f),m(h(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Xlarge 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{as:`button`,children:`Xlarge 2`}),e,r),e})}),r,f),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});t(()=>m(n,e,r))}),e});t(()=>m(r,H,Ct))});let U=e(`div`,p);a(p,U),c(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let wt=e(`h2`,U);a(U,wt),c(wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(wt,l(`# 禁用项目`));let Tt=o(`rue:component:anchor`);a(U,Tt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});t(()=>m(e,U,Tt))});let Et=o(`rue:slot:anchor`);a(U,Et),i(()=>{let e=k.value===`preview`?u(()=>{let e=n(),t=o(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Enabled item`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,r);let i=o(`rue:component:anchor`);return a(e,i),m(h(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,i),e})}),e,t),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,U,Et))});let W=e(`div`,p);a(p,W),c(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Dt=e(`h2`,W);a(W,Dt),c(Dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Dt,l(`# 带图标`));let Ot=o(`rue:component:anchor`);a(W,Ot),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});t(()=>m(e,W,Ot))});let kt=o(`rue:slot:anchor`);a(W,kt),i(()=>{let r=ce.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r);let i=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),a(t,l(`Item 2`)),t});m(h(C.Item,{as:`button`,children:i}),t,r);let s=o(`rue:component:anchor`);a(t,s);let d=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),a(t,l(`Item 1`)),t});m(h(C.Item,{as:`button`,children:d}),t,s);let p=o(`rue:component:anchor`);a(t,p);let g=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),a(t,l(`Item 3`)),t});return m(h(C.Item,{as:`button`,children:g}),t,p),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,W,kt))});let G=e(`div`,p);a(p,G),c(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let At=e(`h2`,G);a(G,At),c(At,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(At,l(`# 带图标与徽章（响应式）`));let jt=o(`rue:component:anchor`);a(G,jt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});t(()=>m(e,G,jt))});let Mt=o(`rue:slot:anchor`);a(G,Mt),i(()=>{let r=le.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r);let i=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),a(t,l(`Inbox`));let s=o(`rue:component:anchor`);return a(t,s),m(h(S,{size:`xs`,children:`99+`}),t,s),t});m(h(C.Item,{as:`button`,children:i}),t,r);let s=o(`rue:component:anchor`);a(t,s);let p=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),c(r,`h-5 w-5`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`stroke`,`currentColor`);let i=e(`path`,r);a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`strokeWidth`,`2`),f(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),a(t,l(`Updates`));let s=g(t);a(t,s),d(s,` `);let u=o(`rue:component:anchor`);return a(t,u),m(h(S,{size:`xs`,variant:`warning`,children:`NEW`}),t,u),t});m(h(C.Item,{as:`button`,children:p}),t,s);let _=o(`rue:component:anchor`);a(t,_);let v=u(()=>{let e=n();a(e,l(`Stats`));let t=o(`rue:component:anchor`);return a(e,t),m(h(S,{size:`xs`,variant:`info`}),e,t),e});return m(h(C.Item,{as:`button`,children:v}),t,_),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,G,Mt))});let K=e(`div`,p);a(p,K),c(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Nt=e(`h2`,K);a(K,Nt),c(Nt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Nt,l(`# 去除内边距和圆角`));let Pt=o(`rue:component:anchor`);a(K,Pt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});t(()=>m(e,K,Pt))});let Ft=o(`rue:slot:anchor`);a(K,Ft),i(()=>{let e=ue.value===`preview`?u(()=>{let e=n(),t=o(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Item 1`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{children:`Item 2`}),e,r);let i=o(`rue:component:anchor`);return a(e,i),m(h(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,K,Ft))});let q=e(`div`,p);a(p,q),c(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let It=e(`h2`,q);a(q,It),c(It,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(It,l(`# 带标题`));let Lt=o(`rue:component:anchor`);a(q,Lt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});t(()=>m(e,q,Lt))});let Rt=o(`rue:slot:anchor`);a(q,Rt),i(()=>{let e=de.value===`preview`?u(()=>{let e=n(),t=o(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Title,{children:`Title`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{children:`Item 1`}),e,r);let i=o(`rue:component:anchor`);a(e,i),m(h(C.Item,{children:`Item 2`}),e,i);let s=o(`rue:component:anchor`);return a(e,s),m(h(C.Item,{children:`Item 3`}),e,s),e})}),e,t),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,q,Rt))});let J=e(`div`,p);a(p,J),c(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let zt=e(`h2`,J);a(J,zt),c(zt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(zt,l(`# 标题作为父级`));let Bt=o(`rue:component:anchor`);a(J,Bt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});t(()=>m(e,J,Bt))});let Vt=o(`rue:slot:anchor`);a(J,Vt),i(()=>{let r=fe.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let t=n(),r=e(`li`,t);a(t,r);let i=o(`rue:component:anchor`);a(r,i),m(h(C.Title,{as:`h2`,children:`Title`}),r,i);let s=e(`ul`,r);a(r,s);let c=o(`rue:component:anchor`);a(s,c),m(h(C.Item,{children:`Item 1`}),s,c);let l=o(`rue:component:anchor`);a(s,l),m(h(C.Item,{children:`Item 2`}),s,l);let u=o(`rue:component:anchor`);return a(s,u),m(h(C.Item,{children:`Item 3`}),s,u),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,J,Vt))});let Y=e(`div`,p);a(p,Y),c(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ht=e(`h2`,Y);a(Y,Ht),c(Ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Ht,l(`# 子菜单`));let Ut=o(`rue:component:anchor`);a(Y,Ut),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});t(()=>m(e,Y,Ut))});let Wt=o(`rue:slot:anchor`);a(Y,Wt),i(()=>{let r=pe.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r),m(h(C.Item,{as:`button`,children:`Item 1`}),t,r);let i=e(`li`,t);a(t,i);let s=o(`rue:component:anchor`);a(i,s),m(h(C.Item,{as:`button`,children:`Parent`}),i,s);let c=o(`rue:component:anchor`);a(i,c);let l=u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r),m(h(C.Item,{as:`button`,children:`Submenu 1`}),t,r);let i=o(`rue:component:anchor`);a(t,i),m(h(C.Item,{as:`button`,children:`Submenu 2`}),t,i);let s=e(`li`,t);a(t,s);let c=o(`rue:component:anchor`);a(s,c),m(h(C.Item,{as:`button`,children:`Parent`}),s,c);let l=o(`rue:component:anchor`);a(s,l);let d=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{as:`button`,children:`Submenu 2`}),e,r),e});return m(h(C.Submenu,{children:d}),s,l),t});m(h(C.Submenu,{children:l}),i,c);let d=o(`rue:component:anchor`);return a(t,d),m(h(C.Item,{as:`button`,children:`Item 3`}),t,d),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,Y,Wt))});let X=e(`div`,p);a(p,X),c(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Gt=e(`h2`,X);a(X,Gt),c(Gt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Gt,l(`# 可折叠子菜单`));let Kt=o(`rue:component:anchor`);a(X,Kt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});t(()=>m(e,X,Kt))});let qt=o(`rue:slot:anchor`);a(X,qt),i(()=>{let r=me.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r),m(h(C.Item,{as:`button`,children:`Item 1`}),t,r);let i=e(`li`,t);a(t,i);let s=e(`details`,i);a(i,s);let c=e(`summary`,s);a(s,c),a(c,l(`Parent`));let u=e(`ul`,s);a(s,u);let d=o(`rue:component:anchor`);a(u,d),m(h(C.Item,{as:`button`,children:`Submenu 1`}),u,d);let f=o(`rue:component:anchor`);a(u,f),m(h(C.Item,{as:`button`,children:`Submenu 2`}),u,f);let p=e(`li`,u);a(u,p);let g=e(`details`,p);a(p,g);let _=e(`summary`,g);a(g,_),a(_,l(`Parent`));let v=e(`ul`,g);a(g,v);let y=o(`rue:component:anchor`);a(v,y),m(h(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=o(`rue:component:anchor`);a(v,b),m(h(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=o(`rue:component:anchor`);return a(t,x),m(h(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,X,qt))});let Z=e(`div`,p);a(p,Z),c(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Jt=e(`h2`,Z);a(Z,Jt),c(Jt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Jt,l(`# 通过类名控制展开（JS）`));let Yt=o(`rue:component:anchor`);a(Z,Yt),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});t(()=>m(e,Z,Yt))});let Xt=o(`rue:slot:anchor`);a(Z,Xt),i(()=>{let r=he.value===`preview`?u(()=>{let r=n(),s=e(`div`,r);a(r,s),c(s,`grid gap-6`);let l=o(`rue:component:anchor`);a(s,l),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r),m(h(C.Item,{children:`Item 1`}),t,r);let i=e(`li`,t);a(t,i);let s=o(`rue:component:anchor`);a(i,s),m(h(C.DropdownToggle,{onClick:Ae,children:`Parent`}),i,s);let c=o(`rue:component:anchor`);a(i,c);let l=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Submenu 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{children:`Submenu 2`}),e,r),e});return m(h(C.Dropdown,{children:l}),i,c),t})}),s,l);let d=o(`rue:component:anchor`);return a(s,d),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let r=n(),s=o(`rue:component:anchor`);a(r,s),m(h(C.Item,{children:`Item 1`}),r,s);let c=e(`li`,r);a(r,c);let l=o(`rue:component:anchor`);a(c,l),i(()=>{let e=h(C.DropdownToggle,{show:!0,onClick:Ae,children:`Parent`});t(()=>m(e,c,l))});let d=o(`rue:component:anchor`);a(c,d);let f=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Submenu 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{children:`Submenu 2`}),e,r),e});return i(()=>{let e=h(C.Dropdown,{show:!0,children:f});t(()=>m(e,c,d))}),r})}),s,d),r}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,Z,Xt))});let Zt=e(`div`,p);a(p,Zt),c(Zt,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qt=e(`h2`,Zt);a(Zt,Qt),c(Qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(Qt,l(`# 文件树`));let $t=o(`rue:component:anchor`);a(Zt,$t),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});t(()=>m(e,Zt,$t))});let en=o(`rue:slot:anchor`);a(Zt,en),i(()=>{let r=ge.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r);let i=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`strokeWidth`,`1.5`),f(r,`stroke`,`currentColor`),c(r,`w-4 h-4`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,l(`resume.pdf`)),t});m(h(C.Item,{as:`button`,children:i}),t,r);let s=e(`li`,t);a(t,s);let d=e(`details`,s);a(s,d);let p=e(`summary`,d);a(d,p);let g=e(`svg`,p);a(p,g),f(g,`xmlns`,`http://www.w3.org/2000/svg`),f(g,`fill`,`none`),f(g,`viewBox`,`0 0 24 24`),f(g,`strokeWidth`,`1.5`),f(g,`stroke`,`currentColor`),c(g,`w-4 h-4`);let _=e(`path`,g);a(g,_),f(_,`strokeLinecap`,`round`),f(_,`strokeLinejoin`,`round`),f(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(p,l(`My Files`));let v=e(`ul`,d);a(d,v);let y=o(`rue:component:anchor`);a(v,y);let b=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`strokeWidth`,`1.5`),f(r,`stroke`,`currentColor`),c(r,`w-4 h-4`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,l(`Project-final.psd`)),t});m(h(C.Item,{as:`button`,children:b}),v,y);let x=o(`rue:component:anchor`);a(v,x);let S=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`strokeWidth`,`1.5`),f(r,`stroke`,`currentColor`),c(r,`w-4 h-4`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,l(`Project-final-2.psd`)),t});m(h(C.Item,{as:`button`,children:S}),v,x);let w=e(`li`,v);a(v,w);let T=e(`details`,w);a(w,T);let ee=e(`summary`,T);a(T,ee);let E=e(`svg`,ee);a(ee,E),f(E,`xmlns`,`http://www.w3.org/2000/svg`),f(E,`fill`,`none`),f(E,`viewBox`,`0 0 24 24`),f(E,`strokeWidth`,`1.5`),f(E,`stroke`,`currentColor`),c(E,`w-4 h-4`);let te=e(`path`,E);a(E,te),f(te,`strokeLinecap`,`round`),f(te,`strokeLinejoin`,`round`),f(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(ee,l(`Images`));let D=e(`ul`,T);a(T,D);let ne=o(`rue:component:anchor`);a(D,ne);let re=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`strokeWidth`,`1.5`),f(r,`stroke`,`currentColor`),c(r,`w-4 h-4`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,l(`Screenshot1.png`)),t});m(h(C.Item,{as:`button`,children:re}),D,ne);let ie=o(`rue:component:anchor`);a(D,ie);let ae=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`strokeWidth`,`1.5`),f(r,`stroke`,`currentColor`),c(r,`w-4 h-4`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,l(`Screenshot2.png`)),t});m(h(C.Item,{as:`button`,children:ae}),D,ie);let oe=e(`li`,D);a(D,oe);let O=e(`details`,oe);a(oe,O);let se=e(`summary`,O);a(O,se);let k=e(`svg`,se);a(se,k),f(k,`xmlns`,`http://www.w3.org/2000/svg`),f(k,`fill`,`none`),f(k,`viewBox`,`0 0 24 24`),f(k,`strokeWidth`,`1.5`),f(k,`stroke`,`currentColor`),c(k,`w-4 h-4`);let ce=e(`path`,k);a(k,ce),f(ce,`strokeLinecap`,`round`),f(ce,`strokeLinejoin`,`round`),f(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),a(se,l(`Others`));let le=e(`ul`,O);a(O,le);let ue=o(`rue:component:anchor`);a(le,ue);let de=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`strokeWidth`,`1.5`),f(r,`stroke`,`currentColor`),c(r,`w-4 h-4`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),a(t,l(`Screenshot3.png`)),t});m(h(C.Item,{as:`button`,children:de}),le,ue);let fe=o(`rue:component:anchor`);a(t,fe);let pe=u(()=>{let t=n(),r=e(`svg`,t);a(t,r),f(r,`xmlns`,`http://www.w3.org/2000/svg`),f(r,`fill`,`none`),f(r,`viewBox`,`0 0 24 24`),f(r,`strokeWidth`,`1.5`),f(r,`stroke`,`currentColor`),c(r,`w-4 h-4`);let i=e(`path`,r);return a(r,i),f(i,`strokeLinecap`,`round`),f(i,`strokeLinejoin`,`round`),f(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),a(t,l(`reports-final-2.pdf`)),t});return m(h(C.Item,{as:`button`,children:pe}),t,fe),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,Zt,en))});let Q=e(`div`,p);a(p,Q),c(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let tn=e(`h2`,Q);a(Q,tn),c(tn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(tn,l(`# 激活项`));let nn=o(`rue:component:anchor`);a(Q,nn),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});t(()=>m(e,Q,nn))});let rn=o(`rue:slot:anchor`);a(Q,rn),i(()=>{let e=_e.value===`preview`?u(()=>{let e=n(),t=o(`rue:component:anchor`);return a(e,t),m(h(C,{className:`bg-base-200 rounded-box w-56`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Item 1`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{className:`menu-active`,children:`Item 2`}),e,r);let i=o(`rue:component:anchor`);return a(e,i),m(h(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,Q,rn))});let an=e(`div`,p);a(p,an),c(an,`component-preview not-prose text-base-content my-6 lg:my-12`);let on=e(`h2`,an);a(an,on),c(on,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(on,l(`# 水平菜单`));let sn=o(`rue:component:anchor`);a(an,sn),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});t(()=>m(e,an,sn))});let cn=o(`rue:slot:anchor`);a(an,cn),i(()=>{let e=ve.value===`preview`?u(()=>{let e=n(),t=o(`rue:component:anchor`);return a(e,t),m(h(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Item 1`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{children:`Item 2`}),e,r);let i=o(`rue:component:anchor`);return a(e,i),m(h(C.Item,{children:`Item 3`}),e,i),e})}),e,t),e}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(e,an,cn))});let ln=e(`div`,p);a(p,ln),c(ln,`component-preview not-prose text-base-content my-6 lg:my-12`);let un=e(`h2`,ln);a(ln,un),c(un,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(un,l(`# 水平子菜单`));let dn=o(`rue:component:anchor`);a(ln,dn),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});t(()=>m(e,ln,dn))});let fn=o(`rue:slot:anchor`);a(ln,fn),i(()=>{let r=ye.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r),m(h(C.Item,{children:`Item 1`}),t,r);let i=e(`li`,t);a(t,i);let s=o(`rue:component:anchor`);a(i,s),m(h(C.Item,{children:`Parent`}),i,s);let c=o(`rue:component:anchor`);a(i,c);let l=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Submenu 1`}),e,t);let r=o(`rue:component:anchor`);return a(e,r),m(h(C.Item,{children:`Submenu 2`}),e,r),e});m(h(C.Submenu,{children:l}),i,c);let d=o(`rue:component:anchor`);return a(t,d),m(h(C.Item,{children:`Item 3`}),t,d),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,ln,fn))});let pn=e(`div`,p);a(p,pn),c(pn,`component-preview not-prose text-base-content my-6 lg:my-12`);let mn=e(`h2`,pn);a(pn,mn),c(mn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(mn,l(`# Mega 菜单（响应式）`));let hn=o(`rue:component:anchor`);a(pn,hn),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});t(()=>m(e,pn,hn))});let gn=o(`rue:slot:anchor`);a(pn,gn),i(()=>{let r=be.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:u(()=>{let t=n(),r=e(`li`,t);a(t,r);let i=o(`rue:component:anchor`);a(r,i),m(h(C.Item,{children:`Solutions`}),r,i);let s=o(`rue:component:anchor`);a(r,s);let c=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Design`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{children:`Development`}),e,r);let i=o(`rue:component:anchor`);a(e,i),m(h(C.Item,{children:`Hosting`}),e,i);let s=o(`rue:component:anchor`);return a(e,s),m(h(C.Item,{children:`Domain register`}),e,s),e});m(h(C.Submenu,{children:c}),r,s);let l=e(`li`,t);a(t,l);let d=o(`rue:component:anchor`);a(l,d),m(h(C.Item,{children:`Enterprise`}),l,d);let f=o(`rue:component:anchor`);a(l,f);let p=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`CRM software`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{children:`Marketing management`}),e,r);let i=o(`rue:component:anchor`);a(e,i),m(h(C.Item,{children:`Security`}),e,i);let s=o(`rue:component:anchor`);return a(e,s),m(h(C.Item,{children:`Consulting`}),e,s),e});m(h(C.Submenu,{children:p}),l,f);let g=e(`li`,t);a(t,g);let _=o(`rue:component:anchor`);a(g,_),m(h(C.Item,{children:`Products`}),g,_);let v=o(`rue:component:anchor`);a(g,v);let y=u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r),m(h(C.Item,{children:`UI Kit`}),t,r);let i=o(`rue:component:anchor`);a(t,i),m(h(C.Item,{children:`WordPress themes`}),t,i);let s=o(`rue:component:anchor`);a(t,s),m(h(C.Item,{children:`WordPress plugins`}),t,s);let c=e(`li`,t);a(t,c);let l=o(`rue:component:anchor`);a(c,l),m(h(C.Item,{children:`Open source`}),c,l);let d=o(`rue:component:anchor`);a(c,d);let f=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`Auth management system`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{children:`VScode theme`}),e,r);let i=o(`rue:component:anchor`);return a(e,i),m(h(C.Item,{children:`Color picker app`}),e,i),e});return m(h(C.Submenu,{children:f}),c,d),t});m(h(C.Submenu,{children:y}),g,v);let b=e(`li`,t);a(t,b);let x=o(`rue:component:anchor`);a(b,x),m(h(C.Item,{children:`Company`}),b,x);let S=o(`rue:component:anchor`);a(b,S);let w=u(()=>{let e=n(),t=o(`rue:component:anchor`);a(e,t),m(h(C.Item,{children:`About us`}),e,t);let r=o(`rue:component:anchor`);a(e,r),m(h(C.Item,{children:`Contact us`}),e,r);let i=o(`rue:component:anchor`);a(e,i),m(h(C.Item,{children:`Privacy policy`}),e,i);let s=o(`rue:component:anchor`);return a(e,s),m(h(C.Item,{children:`Press kit`}),e,s),e});return m(h(C.Submenu,{children:w}),b,S),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,pn,gn))});let $=e(`div`,p);a(p,$),c($,`component-preview not-prose text-base-content my-6 lg:my-12`);let _n=e(`h2`,$);a($,_n),c(_n,`component-preview-title mt-2 mb-1 text-lg font-semibold`),a(_n,l(`# 可折叠（响应式）`));let vn=o(`rue:component:anchor`);a($,vn),i(()=>{let e=h(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});t(()=>m(e,$,vn))});let yn=o(`rue:slot:anchor`);a($,yn),i(()=>{let r=xe.value===`preview`?u(()=>{let t=n(),r=o(`rue:component:anchor`);return a(t,r),m(h(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:u(()=>{let t=n(),r=o(`rue:component:anchor`);a(t,r),m(h(C.Item,{as:`button`,children:`Item 1`}),t,r);let i=e(`li`,t);a(t,i);let s=e(`details`,i);a(i,s);let c=e(`summary`,s);a(s,c),a(c,l(`Parent item`));let u=e(`ul`,s);a(s,u);let d=o(`rue:component:anchor`);a(u,d),m(h(C.Item,{as:`button`,children:`Submenu 1`}),u,d);let f=o(`rue:component:anchor`);a(u,f),m(h(C.Item,{as:`button`,children:`Submenu 2`}),u,f);let p=e(`li`,u);a(u,p);let g=e(`details`,p);a(p,g);let _=e(`summary`,g);a(g,_),a(_,l(`Parent`));let v=e(`ul`,g);a(g,v);let y=o(`rue:component:anchor`);a(v,y),m(h(C.Item,{as:`button`,children:`item 1`}),v,y);let b=o(`rue:component:anchor`);a(v,b),m(h(C.Item,{as:`button`,children:`item 2`}),v,b);let x=o(`rue:component:anchor`);return a(t,x),m(h(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,r),t}):u(()=>{let e=n(),r=o(`rue:component:anchor`);return a(e,r),i(()=>{let n=h(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});t(()=>m(n,e,r))}),e});t(()=>m(r,$,yn))});let bn=e(`h2`,p);a(p,bn),a(bn,l(`API`));let xn=e(`p`,p);a(p,xn),c(xn,`text-sm text-base-content/70`),a(xn,l("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Sn=e(`h3`,p);a(p,Sn),a(Sn,l(`Menu.Item 链接相关`));let Cn=o(`rue:component:anchor`);return a(p,Cn),i(()=>{let e=h(T,{rows:ee});t(()=>m(e,p,Cn))}),r})}),p,_),p})};export{E as default};
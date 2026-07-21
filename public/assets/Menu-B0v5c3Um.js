import{Cn as e,Ct as t,Mt as n,Tt as r,dt as i,ft as a,ht as o,mt as s,pn as c,pt as l,st as u,tn as d,vn as f}from"./context-8lXZvIn-.js";import{l as p,o as m,s as h,t as g}from"./vapor-runtime-ygJWVcNn.js";import{a as _,n as v}from"./vapor-helpers-vapor-CMwHgsXf.js";import{t as y}from"./Code-DhoWkRkB.js";import{t as b}from"./src-CCTNpCXV.js";import{t as x}from"./tabs-B1XdBEJF.js";import{t as S}from"./badge-B-YHGclR.js";import{t as C}from"./menu-BkiP6LwM.js";import{r as w}from"./SidebarPlaygroundDesign-BbUFY3mM.js";var T=e=>p(n=>{let o=l(`div`,n);r(o,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let c=l(`table`,o);u(o,c),r(c,`table table-zebra`);let h=l(`thead`,c);u(c,h);let g=l(`tr`,h);u(h,g);let _=l(`th`,g);u(g,_),u(_,s(`属性`));let y=l(`th`,g);u(g,y),u(y,s(`说明`));let b=l(`th`,g);u(g,b),u(b,s(`类型`));let x=l(`th`,g);u(g,x),u(x,s(`默认值`));let S=l(`tbody`,c);u(c,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);u(S,C),u(S,w);let T=new Map;return d(()=>{T=v({items:e.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,n,r,o,s)=>{m(p(()=>{let n=a(),r=l(`tr`,n);u(n,r),d(()=>{t(r,`key`,String(e.prop))});let o=l(`td`,r);u(r,o);let s=l(`code`,o);u(o,s);let c=i(`rue:slot:anchor`);u(s,c),d(()=>{let t=e.prop;f(()=>m(t,s,c))});let p=l(`td`,r);u(r,p);let h=i(`rue:slot:anchor`);u(p,h),d(()=>{let t=e.description;f(()=>m(t,p,h))});let g=l(`td`,r);u(r,g);let _=l(`code`,g);u(g,_);let v=i(`rue:slot:anchor`);u(_,v),d(()=>{let t=e.type;f(()=>m(t,_,v))});let y=l(`td`,r);u(r,y);let b=l(`code`,y);u(y,b);let x=i(`rue:slot:anchor`);return u(b,x),d(()=>{let t=e.defaultValue;f(()=>m(t,b,x))}),n}),n,r)}})}),o}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKey:Te,recommendedOpenKeys:Ee,compoundSelectedKeys:De,compoundOpenKeys:Oe,recommendedMenuClassName:ke,fileTreeMenuClassName:Ae,toggleDropdownByClass:je,menuData:Me,menuItems:Ne}=_(`useSetup:0:0`,()=>e(()=>({tRecommended:_(`ref:1:0`,()=>c(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>c(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>c(`preview`)),tBasic:_(`ref:1:3`,()=>c(`preview`)),tResponsive:_(`ref:1:4`,()=>c(`preview`)),tIconOnly:_(`ref:1:5`,()=>c(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>c(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>c(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>c(`preview`)),tSizes:_(`ref:1:9`,()=>c(`preview`)),tDisabled:_(`ref:1:10`,()=>c(`preview`)),tIcons:_(`ref:1:11`,()=>c(`preview`)),tIconsBadge:_(`ref:1:12`,()=>c(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>c(`preview`)),tTitle:_(`ref:1:14`,()=>c(`preview`)),tTitleParent:_(`ref:1:15`,()=>c(`preview`)),tSubmenu:_(`ref:1:16`,()=>c(`preview`)),tCollapsible:_(`ref:1:17`,()=>c(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>c(`preview`)),tFileTree:_(`ref:1:19`,()=>c(`preview`)),tActiveItem:_(`ref:1:20`,()=>c(`preview`)),tHorizontal:_(`ref:1:21`,()=>c(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>c(`preview`)),tMega:_(`ref:1:23`,()=>c(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>c(`preview`)),tArray:_(`ref:1:25`,()=>c(`preview`)),tArrayInternal:_(`ref:1:26`,()=>c(`preview`)),tNavigation:_(`ref:1:27`,()=>c(`preview`)),recommendedSelectedKey:_(`ref:1:28`,()=>c(`overview`)),recommendedOpenKeys:_(`ref:1:29`,()=>c([`workspace`])),compoundSelectedKeys:_(`ref:1:30`,()=>c([`profile`])),compoundOpenKeys:_(`ref:1:31`,()=>c([`settings`])),recommendedMenuClassName:`bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content`,fileTreeMenuClassName:`bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0`,toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Pe=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:b(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:b(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:b(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:b(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:b(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Fe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:b(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:b(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return p(e=>{let c=a(),_=i(`rue:component:anchor`);return u(c,_),m(g(w,{children:p(()=>{let e=a(),c=l(`div`,e);u(e,c),r(c,`max-w-none prose prose-sm md:prose-base`);let _=l(`h1`,c);u(c,_),u(_,s(`Menu 菜单`));let w=l(`p`,c);u(c,w),r(w,`text-sm mt-3 mb-3`),u(w,s("Menu 用于垂直或水平展示导航链接。它同时支持组合静态结构，以及 `items / selectedKeys / openKeys / group / divider / extra` 等数据驱动 API。"));let A=l(`div`,c);u(c,A),r(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ie=l(`h2`,A);u(A,Ie),r(Ie,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Ie,s(`# 推荐：items 数据驱动导航`));let Le=l(`p`,A);u(A,Le),r(Le,`mb-3 text-sm text-base-content/70`),u(Le,s(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Re=i(`rue:component:anchor`);u(A,Re),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});f(()=>m(e,A,Re))});let ze=i(`rue:slot:anchor`);u(A,ze),d(()=>{let e=E.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(C,{mode:`inline`,className:ke,items:Pe,selectedKeys:[Te.value],openKeys:Ee.value,onSelect:e=>Te.value=String(e.key),onOpenChange:e=>Ee.value=e});f(()=>m(n,e,t))}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});f(()=>m(n,e,t))}),e});f(()=>m(e,A,ze))});let j=l(`div`,c);u(c,j),r(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Be=l(`h2`,j);u(j,Be),r(Be,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Be,s(`# 推荐：多选、分组与分割线`));let Ve=l(`p`,j);u(j,Ve),r(Ve,`mb-3 text-sm text-base-content/70`),u(Ve,s("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let He=i(`rue:component:anchor`);u(j,He),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});f(()=>m(e,j,He))});let Ue=i(`rue:slot:anchor`);u(j,Ue),d(()=>{let e=te.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(C,{className:`bg-base-200 rounded-box w-80`,items:Fe,multiple:!0,defaultSelectedKeys:[`mentions`,`archived`]});f(()=>m(n,e,t))}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`const items = [
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
/>`});f(()=>m(n,e,t))}),e});f(()=>m(e,j,Ue))});let M=l(`div`,c);u(c,M),r(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let We=l(`h2`,M);u(M,We),r(We,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(We,s(`# 推荐：组合式语义 API`));let Ge=l(`p`,M);u(M,Ge),r(Ge,`mb-3 text-sm text-base-content/70`),u(Ge,s("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ke=i(`rue:component:anchor`);u(M,Ke),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});f(()=>m(e,M,Ke))});let qe=i(`rue:slot:anchor`);u(M,qe),d(()=>{let e=D.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t);let n=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),d(()=>{let n=g(C.Item,{eventKey:`profile`,icon:b(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});f(()=>m(n,e,t))});let n=i(`rue:component:anchor`);return u(e,n),d(()=>{let t=g(C.Item,{eventKey:`notifications`,extra:b(S,{size:`xs`,children:`2`}),children:`Notifications`});f(()=>m(t,e,n))}),e});m(g(C.ItemGroup,{title:`Account`,children:n}),e,t);let r=i(`rue:component:anchor`);u(e,r),m(g(C.Divider,{}),e,r);let o=i(`rue:component:anchor`);u(e,o);let s=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{eventKey:`security`,children:`Security`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,n),e});return d(()=>{let t=g(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:b(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:s});f(()=>m(t,e,o))}),e});return d(()=>{let r=g(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:De.value,openKeys:Oe.value,onSelect:e=>De.value=e.selectedKeys,onOpenChange:e=>Oe.value=e,children:n});f(()=>m(r,e,t))}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,M,qe))});let Je=l(`div`,c);u(c,Je),r(Je,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),u(Je,s(`下面的示例全部使用 Rue 当前静态/基础结构写法，用于展示 daisyUI 风格能力与覆盖范围。`));let N=l(`div`,c);u(c,N),r(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ye=l(`h2`,N);u(N,Ye),r(Ye,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Ye,s(`# 导航跳转`));let Xe=i(`rue:component:anchor`);u(N,Xe),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});f(()=>m(e,N,Xe))});let Ze=i(`rue:slot:anchor`);u(N,Ze),d(()=>{let e=we.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,n);let r=i(`rue:component:anchor`);return u(e,r),m(g(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,N,Ze))});let P=l(`div`,c);u(c,P),r(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qe=l(`h2`,P);u(P,Qe),r(Qe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Qe,s(`# Menu 通过数据渲染（数组）`));let $e=i(`rue:component:anchor`);u(P,$e),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});f(()=>m(e,P,$e))});let et=i(`rue:slot:anchor`);u(P,et),d(()=>{let e=Se.value===`preview`?p(()=>{let e=a(),n=i(`rue:component:anchor`);return u(e,n),m(g(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:p(()=>{let e=a(),n=i(`rue:list:start`),r=i(`rue:list:end`);u(e,n),u(e,r);let o=new Map;return d(()=>{o=v({items:Me||[],getKey:(e,t)=>t,elements:o,parent:n.parentNode,before:r,singleRoot:!0,start:n,renderItem:(e,n,r,o,s)=>{m(p(()=>{let n=a(),r=l(`li`,n);u(n,r),d(()=>{t(r,`key`,String(s))});let o=i(`rue:component:anchor`);u(r,o),m(g(C.Item,{children:e.label}),r,o);let c=i(`rue:component:anchor`);return u(r,c),m(g(C.Submenu,{children:p(()=>{let n=a(),r=i(`rue:list:start`),o=i(`rue:list:end`);u(n,r),u(n,o);let s=new Map;return d(()=>{s=v({items:e.children||[],getKey:(e,t)=>t,elements:s,parent:r.parentNode,before:o,start:r,renderItem:(e,n,r,o,s)=>{h(p(typeof e==`string`?()=>{let t=a(),n=i(`rue:component:anchor`);return u(t,n),d(()=>{let r=g(C.Item,{key:s,children:e});f(()=>m(r,t,n))}),t}:()=>{let n=a(),r=l(`li`,n);u(n,r),d(()=>{t(r,`key`,String(s))});let o=i(`rue:component:anchor`);u(r,o),m(g(C.Item,{children:e.label}),r,o);let c=i(`rue:component:anchor`);return u(r,c),m(g(C.Submenu,{children:p(()=>{let t=a(),n=i(`rue:list:start`),r=i(`rue:list:end`);u(t,n),u(t,r);let o=new Map;return d(()=>{o=v({items:e.children||[],getKey:(e,t)=>t,elements:o,parent:n.parentNode,before:r,start:n,renderItem:(e,t,n,r,i)=>{h(g(C.Item,{key:i,children:e}),t,n,r)}})}),t})}),r,c),n}),n,r,o)}})}),n})}),r,c),n}),n,r)}})}),e})}),e,n),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,P,et))});let F=l(`div`,c);u(c,F),r(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let tt=l(`h2`,F);u(F,tt),r(tt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(tt,s(`# Menu 通过数据渲染（数组，组件内部）`));let nt=i(`rue:component:anchor`);u(F,nt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});f(()=>m(e,F,nt))});let rt=i(`rue:slot:anchor`);u(F,rt),d(()=>{let e=Ce.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(C,{items:Ne,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});f(()=>m(n,e,t))}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});f(()=>m(n,e,t))}),e});f(()=>m(e,F,rt))});let I=l(`div`,c);u(c,I),r(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let it=l(`h2`,I);u(I,it),r(it,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(it,s(`# Menu`));let at=i(`rue:component:anchor`);u(I,at),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});f(()=>m(e,I,at))});let ot=i(`rue:slot:anchor`);u(I,ot),d(()=>{let e=ne.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{as:`button`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return u(e,r),m(g(C.Item,{as:`button`,children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,I,ot))});let st=l(`div`,c);u(c,st),r(st,`component-preview not-prose text-base-content my-6 lg:my-12`);let ct=l(`h2`,st);u(st,ct),r(ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(ct,s(`# 响应式：小屏垂直，大屏水平`));let lt=i(`rue:component:anchor`);u(st,lt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});f(()=>m(e,st,lt))});let ut=i(`rue:slot:anchor`);u(st,ut),d(()=>{let e=re.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{as:`button`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return u(e,r),m(g(C.Item,{as:`button`,children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,st,ut))});let L=l(`div`,c);u(c,L),r(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let dt=l(`h2`,L);u(L,dt),r(dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(dt,s(`# 仅图标`));let ft=i(`rue:component:anchor`);u(L,ft),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});f(()=>m(e,L,ft))});let pt=i(`rue:slot:anchor`);u(L,pt),d(()=>{let e=ie.value===`preview`?p(()=>{let e=a(),n=i(`rue:component:anchor`);return u(e,n),m(g(C,{className:`bg-base-200 rounded-box`,children:p(()=>{let e=a(),n=i(`rue:component:anchor`);u(e,n);let o=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});m(g(C.Item,{as:`button`,children:o}),e,n);let s=i(`rue:component:anchor`);u(e,s);let c=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});m(g(C.Item,{as:`button`,children:c}),e,s);let d=i(`rue:component:anchor`);u(e,d);let f=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return m(g(C.Item,{as:`button`,children:f}),e,d),e})}),e,n),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,L,pt))});let R=l(`div`,c);u(c,R),r(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let mt=l(`h2`,R);u(R,mt),r(mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(mt,s(`# 仅图标（水平）`));let ht=i(`rue:component:anchor`);u(R,ht),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});f(()=>m(e,R,ht))});let gt=i(`rue:slot:anchor`);u(R,gt),d(()=>{let e=ae.value===`preview`?p(()=>{let e=a(),n=i(`rue:component:anchor`);return u(e,n),m(g(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:p(()=>{let e=a(),n=i(`rue:component:anchor`);u(e,n);let o=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});m(g(C.Item,{as:`button`,children:o}),e,n);let s=i(`rue:component:anchor`);u(e,s);let c=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});m(g(C.Item,{as:`button`,children:c}),e,s);let d=i(`rue:component:anchor`);u(e,d);let f=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return m(g(C.Item,{as:`button`,children:f}),e,d),e})}),e,n),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,R,gt))});let z=l(`div`,c);u(c,z),r(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let _t=l(`h2`,z);u(z,_t),r(_t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(_t,s(`# 仅图标（带 tooltip）`));let vt=i(`rue:component:anchor`);u(z,vt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});f(()=>m(e,z,vt))});let yt=i(`rue:slot:anchor`);u(z,yt),d(()=>{let e=oe.value===`preview`?p(()=>{let e=a(),n=i(`rue:component:anchor`);return u(e,n),m(g(C,{className:`bg-base-200 rounded-box`,children:p(()=>{let e=a(),n=i(`rue:component:anchor`);u(e,n);let o=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),e});m(g(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:o}),e,n);let s=i(`rue:component:anchor`);u(e,s);let c=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});m(g(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:c}),e,s);let d=i(`rue:component:anchor`);u(e,d);let f=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return m(g(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:f}),e,d),e})}),e,n),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,z,yt))});let B=l(`div`,c);u(c,B),r(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let bt=l(`h2`,B);u(B,bt),r(bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(bt,s(`# 仅图标（水平，tooltip）`));let xt=i(`rue:component:anchor`);u(B,xt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});f(()=>m(e,B,xt))});let St=i(`rue:slot:anchor`);u(B,St),d(()=>{let e=O.value===`preview`?p(()=>{let e=a(),n=i(`rue:component:anchor`);return u(e,n),m(g(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:p(()=>{let e=a(),n=i(`rue:component:anchor`);u(e,n);let o=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),e});m(g(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:o}),e,n);let s=i(`rue:component:anchor`);u(e,s);let c=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});m(g(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:c}),e,s);let d=i(`rue:component:anchor`);u(e,d);let f=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),e});return m(g(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:f}),e,d),e})}),e,n),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,B,St))});let V=l(`div`,c);u(c,V),r(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ct=l(`h2`,V);u(V,Ct),r(Ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Ct,s(`# Menu 尺寸`));let wt=i(`rue:component:anchor`);u(V,wt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});f(()=>m(e,V,wt))});let Tt=i(`rue:slot:anchor`);u(V,Tt),d(()=>{let e=se.value===`preview`?p(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`grid gap-6`);let n=i(`rue:component:anchor`);u(t,n),m(g(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Xsmall 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{as:`button`,children:`Xsmall 2`}),e,n),e})}),t,n);let o=i(`rue:component:anchor`);u(t,o),m(g(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Small 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{as:`button`,children:`Small 2`}),e,n),e})}),t,o);let s=i(`rue:component:anchor`);u(t,s),m(g(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Medium 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{as:`button`,children:`Medium 2`}),e,n),e})}),t,s);let c=i(`rue:component:anchor`);u(t,c),m(g(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Large 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{as:`button`,children:`Large 2`}),e,n),e})}),t,c);let d=i(`rue:component:anchor`);return u(t,d),m(g(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Xlarge 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{as:`button`,children:`Xlarge 2`}),e,n),e})}),t,d),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});f(()=>m(n,e,t))}),e});f(()=>m(e,V,Tt))});let H=l(`div`,c);u(c,H),r(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let Et=l(`h2`,H);u(H,Et),r(Et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Et,s(`# 禁用项目`));let Dt=i(`rue:component:anchor`);u(H,Dt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});f(()=>m(e,H,Dt))});let Ot=i(`rue:slot:anchor`);u(H,Ot),d(()=>{let e=k.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Enabled item`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,n);let r=i(`rue:component:anchor`);return u(e,r),m(g(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,H,Ot))});let U=l(`div`,c);u(c,U),r(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let kt=l(`h2`,U);u(U,kt),r(kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(kt,s(`# 带图标`));let At=i(`rue:component:anchor`);u(U,At),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});f(()=>m(e,U,At))});let jt=i(`rue:slot:anchor`);u(U,jt),d(()=>{let e=ce.value===`preview`?p(()=>{let e=a(),n=i(`rue:component:anchor`);return u(e,n),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),n=i(`rue:component:anchor`);u(e,n);let o=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),u(e,s(`Item 2`)),e});m(g(C.Item,{as:`button`,children:o}),e,n);let c=i(`rue:component:anchor`);u(e,c);let d=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),u(e,s(`Item 1`)),e});m(g(C.Item,{as:`button`,children:d}),e,c);let f=i(`rue:component:anchor`);u(e,f);let h=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`strokeWidth`,`2`),t(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),u(e,s(`Item 3`)),e});return m(g(C.Item,{as:`button`,children:h}),e,f),e})}),e,n),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,U,jt))});let W=l(`div`,c);u(c,W),r(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Mt=l(`h2`,W);u(W,Mt),r(Mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Mt,s(`# 带图标与徽章（响应式）`));let Nt=i(`rue:component:anchor`);u(W,Nt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});f(()=>m(e,W,Nt))});let Pt=i(`rue:slot:anchor`);u(W,Pt),d(()=>{let e=le.value===`preview`?p(()=>{let e=a(),c=i(`rue:component:anchor`);return u(e,c),m(g(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:p(()=>{let e=a(),c=i(`rue:component:anchor`);u(e,c);let d=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),r(n,`h-5 w-5`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`stroke`,`currentColor`);let o=l(`path`,n);u(n,o),t(o,`strokeLinecap`,`round`),t(o,`strokeLinejoin`,`round`),t(o,`strokeWidth`,`2`),t(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),u(e,s(`Inbox`));let c=i(`rue:component:anchor`);return u(e,c),m(g(S,{size:`xs`,children:`99+`}),e,c),e});m(g(C.Item,{as:`button`,children:d}),e,c);let f=i(`rue:component:anchor`);u(e,f);let h=p(()=>{let e=a(),c=l(`svg`,e);u(e,c),t(c,`xmlns`,`http://www.w3.org/2000/svg`),r(c,`h-5 w-5`),t(c,`fill`,`none`),t(c,`viewBox`,`0 0 24 24`),t(c,`stroke`,`currentColor`);let d=l(`path`,c);u(c,d),t(d,`strokeLinecap`,`round`),t(d,`strokeLinejoin`,`round`),t(d,`strokeWidth`,`2`),t(d,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),u(e,s(`Updates`));let f=o(e);u(e,f),n(f,` `);let p=i(`rue:component:anchor`);return u(e,p),m(g(S,{size:`xs`,variant:`warning`,children:`NEW`}),e,p),e});m(g(C.Item,{as:`button`,children:h}),e,f);let _=i(`rue:component:anchor`);u(e,_);let v=p(()=>{let e=a();u(e,s(`Stats`));let t=i(`rue:component:anchor`);return u(e,t),m(g(S,{size:`xs`,variant:`info`}),e,t),e});return m(g(C.Item,{as:`button`,children:v}),e,_),e})}),e,c),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,W,Pt))});let G=l(`div`,c);u(c,G),r(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ft=l(`h2`,G);u(G,Ft),r(Ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Ft,s(`# 去除内边距和圆角`));let It=i(`rue:component:anchor`);u(G,It),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});f(()=>m(e,G,It))});let Lt=i(`rue:slot:anchor`);u(G,Lt),d(()=>{let e=ue.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return u(e,r),m(g(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,G,Lt))});let K=l(`div`,c);u(c,K),r(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Rt=l(`h2`,K);u(K,Rt),r(Rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Rt,s(`# 带标题`));let zt=i(`rue:component:anchor`);u(K,zt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});f(()=>m(e,K,zt))});let Bt=i(`rue:slot:anchor`);u(K,Bt),d(()=>{let e=de.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Title,{children:`Title`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{children:`Item 1`}),e,n);let r=i(`rue:component:anchor`);u(e,r),m(g(C.Item,{children:`Item 2`}),e,r);let o=i(`rue:component:anchor`);return u(e,o),m(g(C.Item,{children:`Item 3`}),e,o),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,K,Bt))});let q=l(`div`,c);u(c,q),r(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Vt=l(`h2`,q);u(q,Vt),r(Vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Vt,s(`# 标题作为父级`));let Ht=i(`rue:component:anchor`);u(q,Ht),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});f(()=>m(e,q,Ht))});let Ut=i(`rue:slot:anchor`);u(q,Ut),d(()=>{let e=fe.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=l(`li`,e);u(e,t);let n=i(`rue:component:anchor`);u(t,n),m(g(C.Title,{as:`h2`,children:`Title`}),t,n);let r=l(`ul`,t);u(t,r);let o=i(`rue:component:anchor`);u(r,o),m(g(C.Item,{children:`Item 1`}),r,o);let s=i(`rue:component:anchor`);u(r,s),m(g(C.Item,{children:`Item 2`}),r,s);let c=i(`rue:component:anchor`);return u(r,c),m(g(C.Item,{children:`Item 3`}),r,c),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,q,Ut))});let J=l(`div`,c);u(c,J),r(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Wt=l(`h2`,J);u(J,Wt),r(Wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Wt,s(`# 子菜单`));let Gt=i(`rue:component:anchor`);u(J,Gt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});f(()=>m(e,J,Gt))});let Kt=i(`rue:slot:anchor`);u(J,Kt),d(()=>{let e=pe.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=l(`li`,e);u(e,n);let r=i(`rue:component:anchor`);u(n,r),m(g(C.Item,{as:`button`,children:`Parent`}),n,r);let o=i(`rue:component:anchor`);u(n,o);let s=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{as:`button`,children:`Submenu 2`}),e,n);let r=l(`li`,e);u(e,r);let o=i(`rue:component:anchor`);u(r,o),m(g(C.Item,{as:`button`,children:`Parent`}),r,o);let s=i(`rue:component:anchor`);u(r,s);let c=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{as:`button`,children:`Submenu 2`}),e,n),e});return m(g(C.Submenu,{children:c}),r,s),e});m(g(C.Submenu,{children:s}),n,o);let c=i(`rue:component:anchor`);return u(e,c),m(g(C.Item,{as:`button`,children:`Item 3`}),e,c),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,J,Kt))});let Y=l(`div`,c);u(c,Y),r(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let qt=l(`h2`,Y);u(Y,qt),r(qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(qt,s(`# 可折叠子菜单`));let Jt=i(`rue:component:anchor`);u(Y,Jt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});f(()=>m(e,Y,Jt))});let Yt=i(`rue:slot:anchor`);u(Y,Yt),d(()=>{let e=me.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=l(`li`,e);u(e,n);let r=l(`details`,n);u(n,r);let o=l(`summary`,r);u(r,o),u(o,s(`Parent`));let c=l(`ul`,r);u(r,c);let d=i(`rue:component:anchor`);u(c,d),m(g(C.Item,{as:`button`,children:`Submenu 1`}),c,d);let f=i(`rue:component:anchor`);u(c,f),m(g(C.Item,{as:`button`,children:`Submenu 2`}),c,f);let p=l(`li`,c);u(c,p);let h=l(`details`,p);u(p,h);let _=l(`summary`,h);u(h,_),u(_,s(`Parent`));let v=l(`ul`,h);u(h,v);let y=i(`rue:component:anchor`);u(v,y),m(g(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=i(`rue:component:anchor`);u(v,b),m(g(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=i(`rue:component:anchor`);return u(e,x),m(g(C.Item,{as:`button`,children:`Item 3`}),e,x),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,Y,Yt))});let X=l(`div`,c);u(c,X),r(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xt=l(`h2`,X);u(X,Xt),r(Xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(Xt,s(`# 通过类名控制展开（JS）`));let Zt=i(`rue:component:anchor`);u(X,Zt),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});f(()=>m(e,X,Zt))});let Qt=i(`rue:slot:anchor`);u(X,Qt),d(()=>{let e=he.value===`preview`?p(()=>{let e=a(),t=l(`div`,e);u(e,t),r(t,`grid gap-6`);let n=i(`rue:component:anchor`);u(t,n),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let n=l(`li`,e);u(e,n);let r=i(`rue:component:anchor`);u(n,r),m(g(C.DropdownToggle,{onClick:je,children:`Parent`}),n,r);let o=i(`rue:component:anchor`);u(n,o);let s=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{children:`Submenu 2`}),e,n),e});return m(g(C.Dropdown,{children:s}),n,o),e})}),t,n);let o=i(`rue:component:anchor`);return u(t,o),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let n=l(`li`,e);u(e,n);let r=i(`rue:component:anchor`);u(n,r),d(()=>{let e=g(C.DropdownToggle,{show:!0,onClick:je,children:`Parent`});f(()=>m(e,n,r))});let o=i(`rue:component:anchor`);u(n,o);let s=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{children:`Submenu 2`}),e,n),e});return d(()=>{let e=g(C.Dropdown,{show:!0,children:s});f(()=>m(e,n,o))}),e})}),t,o),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,X,Qt))});let Z=l(`div`,c);u(c,Z),r(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let $t=l(`h2`,Z);u(Z,$t),r($t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u($t,s(`# 文件树`));let en=i(`rue:component:anchor`);u(Z,en),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});f(()=>m(e,Z,en))});let tn=i(`rue:slot:anchor`);u(Z,tn),d(()=>{let e=ge.value===`preview`?p(()=>{let e=a(),n=i(`rue:component:anchor`);u(e,n);let o=p(()=>{let e=a(),n=i(`rue:component:anchor`);u(e,n);let o=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`strokeWidth`,`1.5`),t(n,`stroke`,`currentColor`),r(n,`w-4 h-4`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),u(e,s(`resume.pdf`)),e});m(g(C.Item,{as:`button`,children:o}),e,n);let c=l(`li`,e);u(e,c);let d=l(`details`,c);u(c,d);let f=l(`summary`,d);u(d,f);let h=l(`svg`,f);u(f,h),t(h,`xmlns`,`http://www.w3.org/2000/svg`),t(h,`fill`,`none`),t(h,`viewBox`,`0 0 24 24`),t(h,`strokeWidth`,`1.5`),t(h,`stroke`,`currentColor`),r(h,`w-4 h-4`);let _=l(`path`,h);u(h,_),t(_,`strokeLinecap`,`round`),t(_,`strokeLinejoin`,`round`),t(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),u(f,s(`My Files`));let v=l(`ul`,d);u(d,v);let y=i(`rue:component:anchor`);u(v,y);let b=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`strokeWidth`,`1.5`),t(n,`stroke`,`currentColor`),r(n,`w-4 h-4`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),u(e,s(`Project-final.psd`)),e});m(g(C.Item,{as:`button`,children:b}),v,y);let x=i(`rue:component:anchor`);u(v,x);let S=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`strokeWidth`,`1.5`),t(n,`stroke`,`currentColor`),r(n,`w-4 h-4`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),u(e,s(`Project-final-2.psd`)),e});m(g(C.Item,{as:`button`,children:S}),v,x);let w=l(`li`,v);u(v,w);let T=l(`details`,w);u(w,T);let ee=l(`summary`,T);u(T,ee);let E=l(`svg`,ee);u(ee,E),t(E,`xmlns`,`http://www.w3.org/2000/svg`),t(E,`fill`,`none`),t(E,`viewBox`,`0 0 24 24`),t(E,`strokeWidth`,`1.5`),t(E,`stroke`,`currentColor`),r(E,`w-4 h-4`);let te=l(`path`,E);u(E,te),t(te,`strokeLinecap`,`round`),t(te,`strokeLinejoin`,`round`),t(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),u(ee,s(`Images`));let D=l(`ul`,T);u(T,D);let ne=i(`rue:component:anchor`);u(D,ne);let re=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`strokeWidth`,`1.5`),t(n,`stroke`,`currentColor`),r(n,`w-4 h-4`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),u(e,s(`Screenshot1.png`)),e});m(g(C.Item,{as:`button`,children:re}),D,ne);let ie=i(`rue:component:anchor`);u(D,ie);let ae=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`strokeWidth`,`1.5`),t(n,`stroke`,`currentColor`),r(n,`w-4 h-4`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),u(e,s(`Screenshot2.png`)),e});m(g(C.Item,{as:`button`,children:ae}),D,ie);let oe=l(`li`,D);u(D,oe);let O=l(`details`,oe);u(oe,O);let se=l(`summary`,O);u(O,se);let k=l(`svg`,se);u(se,k),t(k,`xmlns`,`http://www.w3.org/2000/svg`),t(k,`fill`,`none`),t(k,`viewBox`,`0 0 24 24`),t(k,`strokeWidth`,`1.5`),t(k,`stroke`,`currentColor`),r(k,`w-4 h-4`);let ce=l(`path`,k);u(k,ce),t(ce,`strokeLinecap`,`round`),t(ce,`strokeLinejoin`,`round`),t(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),u(se,s(`Others`));let le=l(`ul`,O);u(O,le);let ue=i(`rue:component:anchor`);u(le,ue);let de=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`strokeWidth`,`1.5`),t(n,`stroke`,`currentColor`),r(n,`w-4 h-4`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),u(e,s(`Screenshot3.png`)),e});m(g(C.Item,{as:`button`,children:de}),le,ue);let fe=i(`rue:component:anchor`);u(e,fe);let pe=p(()=>{let e=a(),n=l(`svg`,e);u(e,n),t(n,`xmlns`,`http://www.w3.org/2000/svg`),t(n,`fill`,`none`),t(n,`viewBox`,`0 0 24 24`),t(n,`strokeWidth`,`1.5`),t(n,`stroke`,`currentColor`),r(n,`w-4 h-4`);let i=l(`path`,n);return u(n,i),t(i,`strokeLinecap`,`round`),t(i,`strokeLinejoin`,`round`),t(i,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),u(e,s(`reports-final-2.pdf`)),e});return m(g(C.Item,{as:`button`,children:pe}),e,fe),e});return d(()=>{let t=g(C,{size:`xs`,className:Ae,children:o});f(()=>m(t,e,n))}),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,Z,tn))});let Q=l(`div`,c);u(c,Q),r(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let nn=l(`h2`,Q);u(Q,nn),r(nn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(nn,s(`# 激活项`));let rn=i(`rue:component:anchor`);u(Q,rn),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});f(()=>m(e,Q,rn))});let an=i(`rue:slot:anchor`);u(Q,an),d(()=>{let e=_e.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`bg-base-200 rounded-box w-56`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{className:`menu-active`,children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return u(e,r),m(g(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,Q,an))});let on=l(`div`,c);u(c,on),r(on,`component-preview not-prose text-base-content my-6 lg:my-12`);let sn=l(`h2`,on);u(on,sn),r(sn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(sn,s(`# 水平菜单`));let cn=i(`rue:component:anchor`);u(on,cn),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});f(()=>m(e,on,cn))});let ln=i(`rue:slot:anchor`);u(on,ln),d(()=>{let e=ve.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{children:`Item 2`}),e,n);let r=i(`rue:component:anchor`);return u(e,r),m(g(C.Item,{children:`Item 3`}),e,r),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,on,ln))});let un=l(`div`,c);u(c,un),r(un,`component-preview not-prose text-base-content my-6 lg:my-12`);let dn=l(`h2`,un);u(un,dn),r(dn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(dn,s(`# 水平子菜单`));let fn=i(`rue:component:anchor`);u(un,fn),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});f(()=>m(e,un,fn))});let pn=i(`rue:slot:anchor`);u(un,pn),d(()=>{let e=ye.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Item 1`}),e,t);let n=l(`li`,e);u(e,n);let r=i(`rue:component:anchor`);u(n,r),m(g(C.Item,{children:`Parent`}),n,r);let o=i(`rue:component:anchor`);u(n,o);let s=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Submenu 1`}),e,t);let n=i(`rue:component:anchor`);return u(e,n),m(g(C.Item,{children:`Submenu 2`}),e,n),e});m(g(C.Submenu,{children:s}),n,o);let c=i(`rue:component:anchor`);return u(e,c),m(g(C.Item,{children:`Item 3`}),e,c),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,un,pn))});let mn=l(`div`,c);u(c,mn),r(mn,`component-preview not-prose text-base-content my-6 lg:my-12`);let hn=l(`h2`,mn);u(mn,hn),r(hn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(hn,s(`# Mega 菜单（响应式）`));let gn=i(`rue:component:anchor`);u(mn,gn),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});f(()=>m(e,mn,gn))});let _n=i(`rue:slot:anchor`);u(mn,_n),d(()=>{let e=be.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:p(()=>{let e=a(),t=l(`li`,e);u(e,t);let n=i(`rue:component:anchor`);u(t,n),m(g(C.Item,{children:`Solutions`}),t,n);let r=i(`rue:component:anchor`);u(t,r);let o=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Design`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{children:`Development`}),e,n);let r=i(`rue:component:anchor`);u(e,r),m(g(C.Item,{children:`Hosting`}),e,r);let o=i(`rue:component:anchor`);return u(e,o),m(g(C.Item,{children:`Domain register`}),e,o),e});m(g(C.Submenu,{children:o}),t,r);let s=l(`li`,e);u(e,s);let c=i(`rue:component:anchor`);u(s,c),m(g(C.Item,{children:`Enterprise`}),s,c);let d=i(`rue:component:anchor`);u(s,d);let f=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`CRM software`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{children:`Marketing management`}),e,n);let r=i(`rue:component:anchor`);u(e,r),m(g(C.Item,{children:`Security`}),e,r);let o=i(`rue:component:anchor`);return u(e,o),m(g(C.Item,{children:`Consulting`}),e,o),e});m(g(C.Submenu,{children:f}),s,d);let h=l(`li`,e);u(e,h);let _=i(`rue:component:anchor`);u(h,_),m(g(C.Item,{children:`Products`}),h,_);let v=i(`rue:component:anchor`);u(h,v);let y=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`UI Kit`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{children:`WordPress themes`}),e,n);let r=i(`rue:component:anchor`);u(e,r),m(g(C.Item,{children:`WordPress plugins`}),e,r);let o=l(`li`,e);u(e,o);let s=i(`rue:component:anchor`);u(o,s),m(g(C.Item,{children:`Open source`}),o,s);let c=i(`rue:component:anchor`);u(o,c);let d=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`Auth management system`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{children:`VScode theme`}),e,n);let r=i(`rue:component:anchor`);return u(e,r),m(g(C.Item,{children:`Color picker app`}),e,r),e});return m(g(C.Submenu,{children:d}),o,c),e});m(g(C.Submenu,{children:y}),h,v);let b=l(`li`,e);u(e,b);let x=i(`rue:component:anchor`);u(b,x),m(g(C.Item,{children:`Company`}),b,x);let S=i(`rue:component:anchor`);u(b,S);let w=p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{children:`About us`}),e,t);let n=i(`rue:component:anchor`);u(e,n),m(g(C.Item,{children:`Contact us`}),e,n);let r=i(`rue:component:anchor`);u(e,r),m(g(C.Item,{children:`Privacy policy`}),e,r);let o=i(`rue:component:anchor`);return u(e,o),m(g(C.Item,{children:`Press kit`}),e,o),e});return m(g(C.Submenu,{children:w}),b,S),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,mn,_n))});let $=l(`div`,c);u(c,$),r($,`component-preview not-prose text-base-content my-6 lg:my-12`);let vn=l(`h2`,$);u($,vn),r(vn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),u(vn,s(`# 可折叠（响应式）`));let yn=i(`rue:component:anchor`);u($,yn),d(()=>{let e=g(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});f(()=>m(e,$,yn))});let bn=i(`rue:slot:anchor`);u($,bn),d(()=>{let e=xe.value===`preview`?p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),m(g(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:p(()=>{let e=a(),t=i(`rue:component:anchor`);u(e,t),m(g(C.Item,{as:`button`,children:`Item 1`}),e,t);let n=l(`li`,e);u(e,n);let r=l(`details`,n);u(n,r);let o=l(`summary`,r);u(r,o),u(o,s(`Parent item`));let c=l(`ul`,r);u(r,c);let d=i(`rue:component:anchor`);u(c,d),m(g(C.Item,{as:`button`,children:`Submenu 1`}),c,d);let f=i(`rue:component:anchor`);u(c,f),m(g(C.Item,{as:`button`,children:`Submenu 2`}),c,f);let p=l(`li`,c);u(c,p);let h=l(`details`,p);u(p,h);let _=l(`summary`,h);u(h,_),u(_,s(`Parent`));let v=l(`ul`,h);u(h,v);let y=i(`rue:component:anchor`);u(v,y),m(g(C.Item,{as:`button`,children:`item 1`}),v,y);let b=i(`rue:component:anchor`);u(v,b),m(g(C.Item,{as:`button`,children:`item 2`}),v,b);let x=i(`rue:component:anchor`);return u(e,x),m(g(C.Item,{as:`button`,children:`Item 3`}),e,x),e})}),e,t),e}):p(()=>{let e=a(),t=i(`rue:component:anchor`);return u(e,t),d(()=>{let n=g(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});f(()=>m(n,e,t))}),e});f(()=>m(e,$,bn))});let xn=l(`h2`,c);u(c,xn),u(xn,s(`API`));let Sn=l(`p`,c);u(c,Sn),r(Sn,`text-sm text-base-content/70`),u(Sn,s("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Cn=l(`h3`,c);u(c,Cn),u(Cn,s(`Menu.Item 链接相关`));let wn=i(`rue:component:anchor`);return u(c,wn),d(()=>{let e=g(T,{rows:ee});f(()=>m(e,c,wn))}),e})}),c,_),c})};export{E as default};
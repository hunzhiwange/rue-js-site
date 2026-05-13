import{F as e,G as t,I as n,L as r,M as i,P as a,R as o,U as s,Z as c,_t as l,bt as u,c as d,l as f,lt as p,pt as m,t as h,u as g}from"./vapor-runtime-D3a-68js.js";import{a as _,n as v}from"./vapor-helpers-vapor-DGjYaAZX.js";import{t as y}from"./src-BfQKH6_d.js";import{n as b}from"./SidebarPlaygroundDesign-vpnUkFCM.js";import{t as x}from"./Code-2C2psoH3.js";import{t as S}from"./tabs-BgQmsOey.js";import{t as C}from"./badge-60HGICjs.js";import{t as w}from"./menu-Dbdtave8.js";var ee=o=>g(()=>{let c=n(`div`);t(c,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let l=n(`table`);i(c,l),t(l,`table table-zebra`);let f=n(`thead`);i(l,f);let p=n(`tr`);i(f,p);let h=n(`th`);i(p,h),i(h,r(`属性`));let _=n(`th`);i(p,_),i(_,r(`说明`));let y=n(`th`);i(p,y),i(y,r(`类型`));let b=n(`th`);i(p,b),i(b,r(`默认值`));let x=n(`tbody`);i(l,x);let S=a(`rue:list:start`),C=a(`rue:list:end`);i(x,S),i(x,C);let w=new Map;return u(()=>{w=v({items:o.rows||[],getKey:(e,t)=>e.prop,elements:w,parent:x,before:C,singleRoot:!0,trackIndex:!1,start:S,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`tr`);i(r,o),u(()=>{s(o,`key`,String(t.prop))});let c=n(`td`);i(o,c);let l=n(`code`);i(c,l);let f=a(`rue:slot:anchor`);i(l,f),u(()=>{let e=t.prop;m(()=>d(e,l,f))});let p=n(`td`);i(o,p);let h=a(`rue:slot:anchor`);i(p,h),u(()=>{let e=t.description;m(()=>d(e,p,h))});let g=n(`td`);i(o,g);let _=n(`code`);i(g,_);let v=a(`rue:slot:anchor`);i(_,v),u(()=>{let e=t.type;m(()=>d(e,_,v))});let y=n(`td`);i(o,y);let b=n(`code`);i(y,b);let x=a(`rue:slot:anchor`);return i(b,x),u(()=>{let e=t.defaultValue;m(()=>d(e,b,x))}),r}),r,o)}})}),c}),te=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],T=()=>{let{tRecommended:T,tMultipleEnhanced:E,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:se,tSizes:ce,tDisabled:O,tIcons:k,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKeys:Te,recommendedOpenKeys:Ee,multipleSelectedKeys:De,compoundSelectedKeys:Oe,compoundOpenKeys:ke,toggleDropdownByClass:Ae,menuData:je,menuItems:Me}=_(`useSetup:0:0`,()=>l(()=>({tRecommended:_(`ref:1:0`,()=>p(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>p(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>p(`preview`)),tBasic:_(`ref:1:3`,()=>p(`preview`)),tResponsive:_(`ref:1:4`,()=>p(`preview`)),tIconOnly:_(`ref:1:5`,()=>p(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>p(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>p(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>p(`preview`)),tSizes:_(`ref:1:9`,()=>p(`preview`)),tDisabled:_(`ref:1:10`,()=>p(`preview`)),tIcons:_(`ref:1:11`,()=>p(`preview`)),tIconsBadge:_(`ref:1:12`,()=>p(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>p(`preview`)),tTitle:_(`ref:1:14`,()=>p(`preview`)),tTitleParent:_(`ref:1:15`,()=>p(`preview`)),tSubmenu:_(`ref:1:16`,()=>p(`preview`)),tCollapsible:_(`ref:1:17`,()=>p(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>p(`preview`)),tFileTree:_(`ref:1:19`,()=>p(`preview`)),tActiveItem:_(`ref:1:20`,()=>p(`preview`)),tHorizontal:_(`ref:1:21`,()=>p(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>p(`preview`)),tMega:_(`ref:1:23`,()=>p(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>p(`preview`)),tArray:_(`ref:1:25`,()=>p(`preview`)),tArrayInternal:_(`ref:1:26`,()=>p(`preview`)),tNavigation:_(`ref:1:27`,()=>p(`preview`)),recommendedSelectedKeys:_(`ref:1:28`,()=>p([`overview`])),recommendedOpenKeys:_(`ref:1:29`,()=>p([`workspace`])),multipleSelectedKeys:_(`ref:1:30`,()=>p([`mentions`,`archived`])),compoundSelectedKeys:_(`ref:1:31`,()=>p([`profile`])),compoundOpenKeys:_(`ref:1:32`,()=>p([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Ne=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(C,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(C,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(C,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Pe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(C,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(C,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return g(()=>{let l=e(),p=a(`rue:component:anchor`);return i(l,p),d(h(b,{children:g(()=>{let l=e(),p=n(`div`);i(l,p),t(p,`max-w-none prose prose-sm md:prose-base`);let _=n(`h1`);i(p,_),i(_,r(`Menu 菜单`));let b=n(`p`);i(p,b),t(b,`text-sm mt-3 mb-3`),i(b,r("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let Fe=n(`div`);i(p,Fe),t(Fe,`text-sm`);let Ie=n(`a`);i(Fe,Ie),s(Ie,`href`,`https://daisyui.com/components/menu/`),s(Ie,`target`,`_blank`),i(Ie,r(`查看 Menu 静态样式`));let A=n(`div`);i(p,A),t(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Le=n(`h2`);i(A,Le),t(Le,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Le,r(`# 推荐：items 数据驱动导航`));let Re=n(`p`);i(A,Re),t(Re,`mb-3 text-sm text-base-content/70`),i(Re,r(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let ze=a(`rue:component:anchor`);i(A,ze),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:T.value,onChange:e=>T.value=e,className:`mb-3`});m(()=>d(e,A,ze))});let Be=a(`rue:slot:anchor`);i(A,Be),u(()=>{let t=T.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(w,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:Ne,selectedKeys:Te.value,openKeys:Ee.value,onSelect:e=>Te.value=e.selectedKeys,onOpenChange:e=>Ee.value=e});m(()=>d(e,t,n))}),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});m(()=>d(e,t,n))}),t});m(()=>d(t,A,Be))});let j=n(`div`);i(p,j),t(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ve=n(`h2`);i(j,Ve),t(Ve,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ve,r(`# 推荐：多选、分组与分割线`));let He=n(`p`);i(j,He),t(He,`mb-3 text-sm text-base-content/70`),i(He,r("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let Ue=a(`rue:component:anchor`);i(j,Ue),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});m(()=>d(e,j,Ue))});let We=a(`rue:slot:anchor`);i(j,We),u(()=>{let t=E.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(w,{className:`bg-base-200 rounded-box w-80`,items:Pe,multiple:!0,selectedKeys:De.value,onSelect:e=>De.value=e.selectedKeys,onDeselect:e=>De.value=e.selectedKeys});m(()=>d(e,t,n))}),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

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
/>`});m(()=>d(e,t,n))}),t});m(()=>d(t,j,We))});let M=n(`div`);i(p,M),t(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ge=n(`h2`);i(M,Ge),t(Ge,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ge,r(`# 推荐：组合式增强 API`));let Ke=n(`p`);i(M,Ke),t(Ke,`mb-3 text-sm text-base-content/70`),i(Ke,r("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let qe=a(`rue:component:anchor`);i(M,qe),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});m(()=>d(e,M,qe))});let Je=a(`rue:slot:anchor`);i(M,Je),u(()=>{let t=D.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n);let r=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n);let r=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),u(()=>{let e=h(w.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});m(()=>d(e,t,n))});let r=a(`rue:component:anchor`);return i(t,r),u(()=>{let e=h(w.Item,{eventKey:`notifications`,extra:y(C,{size:`xs`,children:`2`}),children:`Notifications`});m(()=>d(e,t,r))}),t});d(h(w.ItemGroup,{title:`Account`,children:r}),t,n);let o=a(`rue:component:anchor`);i(t,o),d(h(w.Divider,{}),t,o);let s=a(`rue:component:anchor`);i(t,s);let c=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{eventKey:`security`,children:`Security`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),t,r),t});return u(()=>{let e=h(w.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:c});m(()=>d(e,t,s))}),t});return u(()=>{let e=h(w,{className:`bg-base-200 rounded-box w-80`,selectedKeys:Oe.value,openKeys:ke.value,onSelect:e=>Oe.value=e.selectedKeys,onOpenChange:e=>ke.value=e,children:r});m(()=>d(e,t,n))}),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,M,Je))});let Ye=n(`div`);i(p,Ye),t(Ye,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),i(Ye,r(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=n(`div`);i(p,N),t(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xe=n(`h2`);i(N,Xe),t(Xe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Xe,r(`# 导航跳转`));let Ze=a(`rue:component:anchor`);i(N,Ze),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});m(()=>d(e,N,Ze))});let Qe=a(`rue:slot:anchor`);i(N,Qe),u(()=>{let t=we.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(w.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),t,o),t})}),t,n),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,N,Qe))});let P=n(`div`);i(p,P),t(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let $e=n(`h2`);i(P,$e),t($e,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i($e,r(`# Menu 通过数据渲染（数组）`));let et=a(`rue:component:anchor`);i(P,et),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});m(()=>d(e,P,et))});let tt=a(`rue:slot:anchor`);i(P,tt),u(()=>{let t=Se.value===`preview`?g(()=>{let t=e(),r=a(`rue:component:anchor`);return i(t,r),d(h(w,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:g(()=>{let t=e(),r=a(`rue:list:start`),o=a(`rue:list:end`);i(t,r),i(t,o);let c=new Map;return u(()=>{c=v({items:je||[],getKey:(e,t)=>t,elements:c,parent:r.parentNode,before:o,singleRoot:!0,start:r,renderItem:(t,r,o,c,l)=>{d(g(()=>{let r=e(),o=n(`li`);i(r,o),u(()=>{s(o,`key`,String(l))});let c=a(`rue:component:anchor`);i(o,c),d(h(w.Item,{children:t.label}),o,c);let p=a(`rue:component:anchor`);return i(o,p),d(h(w.Submenu,{children:g(()=>{let r=e(),o=a(`rue:list:start`),c=a(`rue:list:end`);i(r,o),i(r,c);let l=new Map;return u(()=>{l=v({items:t.children||[],getKey:(e,t)=>t,elements:l,parent:o.parentNode,before:c,start:o,renderItem:(t,r,o,c,l)=>{f(g(typeof t==`string`?()=>{let n=e(),r=a(`rue:component:anchor`);return i(n,r),u(()=>{let e=h(w.Item,{key:l,children:t});m(()=>d(e,n,r))}),n}:()=>{let r=e(),o=n(`li`);i(r,o),u(()=>{s(o,`key`,String(l))});let c=a(`rue:component:anchor`);i(o,c),d(h(w.Item,{children:t.label}),o,c);let p=a(`rue:component:anchor`);return i(o,p),d(h(w.Submenu,{children:g(()=>{let n=e(),r=a(`rue:list:start`),o=a(`rue:list:end`);i(n,r),i(n,o);let s=new Map;return u(()=>{s=v({items:t.children||[],getKey:(e,t)=>t,elements:s,parent:r.parentNode,before:o,start:r,renderItem:(e,t,n,r,i)=>{f(h(w.Item,{key:i,children:e}),t,n,r)}})}),n})}),o,p),r}),r,o,c)}})}),r})}),o,p),r}),r,o)}})}),t})}),t,r),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,P,tt))});let F=n(`div`);i(p,F),t(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let nt=n(`h2`);i(F,nt),t(nt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(nt,r(`# Menu 通过数据渲染（数组，组件内部）`));let rt=a(`rue:component:anchor`);i(F,rt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});m(()=>d(e,F,rt))});let it=a(`rue:slot:anchor`);i(F,it),u(()=>{let t=Ce.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(w,{items:Me,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});m(()=>d(e,t,n))}),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});m(()=>d(e,t,n))}),t});m(()=>d(t,F,it))});let I=n(`div`);i(p,I),t(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let at=n(`h2`);i(I,at),t(at,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(at,r(`# Menu`));let ot=a(`rue:component:anchor`);i(I,ot),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});m(()=>d(e,I,ot))});let st=a(`rue:slot:anchor`);i(I,st),u(()=>{let t=ne.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Item 1`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{as:`button`,children:`Item 2`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(w.Item,{as:`button`,children:`Item 3`}),t,o),t})}),t,n),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,I,st))});let L=n(`div`);i(p,L),t(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let ct=n(`h2`);i(L,ct),t(ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(ct,r(`# 响应式：小屏垂直，大屏水平`));let lt=a(`rue:component:anchor`);i(L,lt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});m(()=>d(e,L,lt))});let ut=a(`rue:slot:anchor`);i(L,ut),u(()=>{let t=re.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(h(w,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Item 1`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{as:`button`,children:`Item 2`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(w.Item,{as:`button`,children:`Item 3`}),t,o),t})}),t,n),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,L,ut))});let R=n(`div`);i(p,R),t(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let dt=n(`h2`);i(R,dt),t(dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(dt,r(`# 仅图标`));let ft=a(`rue:component:anchor`);i(R,ft),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});m(()=>d(e,R,ft))});let pt=a(`rue:slot:anchor`);i(R,pt),u(()=>{let r=ie.value===`preview`?g(()=>{let r=e(),o=a(`rue:component:anchor`);return i(r,o),d(h(w,{className:`bg-base-200 rounded-box`,children:g(()=>{let r=e(),o=a(`rue:component:anchor`);i(r,o);let c=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),r});d(h(w.Item,{as:`button`,children:c}),r,o);let l=a(`rue:component:anchor`);i(r,l);let u=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),r});d(h(w.Item,{as:`button`,children:u}),r,l);let f=a(`rue:component:anchor`);i(r,f);let p=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),r});return d(h(w.Item,{as:`button`,children:p}),r,f),r})}),r,o),r}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(r,R,pt))});let z=n(`div`);i(p,z),t(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let mt=n(`h2`);i(z,mt),t(mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(mt,r(`# 仅图标（水平）`));let ht=a(`rue:component:anchor`);i(z,ht),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});m(()=>d(e,z,ht))});let gt=a(`rue:slot:anchor`);i(z,gt),u(()=>{let r=ae.value===`preview`?g(()=>{let r=e(),o=a(`rue:component:anchor`);return i(r,o),d(h(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:g(()=>{let r=e(),o=a(`rue:component:anchor`);i(r,o);let c=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),r});d(h(w.Item,{as:`button`,children:c}),r,o);let l=a(`rue:component:anchor`);i(r,l);let u=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),r});d(h(w.Item,{as:`button`,children:u}),r,l);let f=a(`rue:component:anchor`);i(r,f);let p=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),r});return d(h(w.Item,{as:`button`,children:p}),r,f),r})}),r,o),r}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(r,z,gt))});let B=n(`div`);i(p,B),t(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let _t=n(`h2`);i(B,_t),t(_t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(_t,r(`# 仅图标（带 tooltip）`));let vt=a(`rue:component:anchor`);i(B,vt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});m(()=>d(e,B,vt))});let yt=a(`rue:slot:anchor`);i(B,yt),u(()=>{let r=oe.value===`preview`?g(()=>{let r=e(),o=a(`rue:component:anchor`);return i(r,o),d(h(w,{className:`bg-base-200 rounded-box`,children:g(()=>{let r=e(),o=a(`rue:component:anchor`);i(r,o);let c=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),r});d(h(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:c}),r,o);let l=a(`rue:component:anchor`);i(r,l);let u=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),r});d(h(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:u}),r,l);let f=a(`rue:component:anchor`);i(r,f);let p=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),r});return d(h(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:p}),r,f),r})}),r,o),r}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(r,B,yt))});let V=n(`div`);i(p,V),t(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let bt=n(`h2`);i(V,bt),t(bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(bt,r(`# 仅图标（水平，tooltip）`));let xt=a(`rue:component:anchor`);i(V,xt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});m(()=>d(e,V,xt))});let St=a(`rue:slot:anchor`);i(V,St),u(()=>{let r=se.value===`preview`?g(()=>{let r=e(),o=a(`rue:component:anchor`);return i(r,o),d(h(w,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:g(()=>{let r=e(),o=a(`rue:component:anchor`);i(r,o);let c=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),r});d(h(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:c}),r,o);let l=a(`rue:component:anchor`);i(r,l);let u=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),r});d(h(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:u}),r,l);let f=a(`rue:component:anchor`);i(r,f);let p=g(()=>{let r=e(),a=n(`svg`);i(r,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),t(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=n(`path`);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),r});return d(h(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:p}),r,f),r})}),r,o),r}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(r,V,St))});let H=n(`div`);i(p,H),t(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ct=n(`h2`);i(H,Ct),t(Ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ct,r(`# Menu 尺寸`));let wt=a(`rue:component:anchor`);i(H,wt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});m(()=>d(e,H,wt))});let Tt=a(`rue:slot:anchor`);i(H,Tt),u(()=>{let r=ce.value===`preview`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`grid gap-6`);let s=a(`rue:component:anchor`);i(o,s),d(h(w,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Xsmall 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{as:`button`,children:`Xsmall 2`}),t,r),t})}),o,s);let c=a(`rue:component:anchor`);i(o,c),d(h(w,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Small 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{as:`button`,children:`Small 2`}),t,r),t})}),o,c);let l=a(`rue:component:anchor`);i(o,l),d(h(w,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Medium 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{as:`button`,children:`Medium 2`}),t,r),t})}),o,l);let u=a(`rue:component:anchor`);i(o,u),d(h(w,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Large 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{as:`button`,children:`Large 2`}),t,r),t})}),o,u);let f=a(`rue:component:anchor`);return i(o,f),d(h(w,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Xlarge 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{as:`button`,children:`Xlarge 2`}),t,r),t})}),o,f),r}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});m(()=>d(e,t,n))}),t});m(()=>d(r,H,Tt))});let U=n(`div`);i(p,U),t(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let Et=n(`h2`);i(U,Et),t(Et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Et,r(`# 禁用项目`));let Dt=a(`rue:component:anchor`);i(U,Dt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});m(()=>d(e,U,Dt))});let Ot=a(`rue:slot:anchor`);i(U,Ot),u(()=>{let t=O.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Enabled item`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(w.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),t,o),t})}),t,n),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,U,Ot))});let W=n(`div`);i(p,W),t(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let kt=n(`h2`);i(W,kt),t(kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(kt,r(`# 带图标`));let At=a(`rue:component:anchor`);i(W,At),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});m(()=>d(e,W,At))});let jt=a(`rue:slot:anchor`);i(W,jt),u(()=>{let o=k.value===`preview`?g(()=>{let o=e(),c=a(`rue:component:anchor`);return i(o,c),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let o=e(),c=a(`rue:component:anchor`);i(o,c);let l=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),t(o,`h-5 w-5`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`stroke`,`currentColor`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`strokeWidth`,`2`),s(c,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),i(a,r(`Item 2`)),a});d(h(w.Item,{as:`button`,children:l}),o,c);let u=a(`rue:component:anchor`);i(o,u);let f=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),t(o,`h-5 w-5`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`stroke`,`currentColor`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`strokeWidth`,`2`),s(c,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),i(a,r(`Item 1`)),a});d(h(w.Item,{as:`button`,children:f}),o,u);let p=a(`rue:component:anchor`);i(o,p);let m=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),t(o,`h-5 w-5`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`stroke`,`currentColor`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`strokeWidth`,`2`),s(c,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),i(a,r(`Item 3`)),a});return d(h(w.Item,{as:`button`,children:m}),o,p),o})}),o,c),o}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(o,W,jt))});let G=n(`div`);i(p,G),t(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let Mt=n(`h2`);i(G,Mt),t(Mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Mt,r(`# 带图标与徽章（响应式）`));let Nt=a(`rue:component:anchor`);i(G,Nt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});m(()=>d(e,G,Nt))});let Pt=a(`rue:slot:anchor`);i(G,Pt),u(()=>{let l=le.value===`preview`?g(()=>{let l=e(),u=a(`rue:component:anchor`);return i(l,u),d(h(w,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:g(()=>{let l=e(),u=a(`rue:component:anchor`);i(l,u);let f=g(()=>{let o=e(),c=n(`svg`);i(o,c),s(c,`xmlns`,`http://www.w3.org/2000/svg`),t(c,`h-5 w-5`),s(c,`fill`,`none`),s(c,`viewBox`,`0 0 24 24`),s(c,`stroke`,`currentColor`);let l=n(`path`);i(c,l),s(l,`strokeLinecap`,`round`),s(l,`strokeLinejoin`,`round`),s(l,`strokeWidth`,`2`),s(l,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),i(o,r(`Inbox`));let u=a(`rue:component:anchor`);return i(o,u),d(h(C,{size:`xs`,children:`99+`}),o,u),o});d(h(w.Item,{as:`button`,children:f}),l,u);let p=a(`rue:component:anchor`);i(l,p);let m=g(()=>{let l=e(),u=n(`svg`);i(l,u),s(u,`xmlns`,`http://www.w3.org/2000/svg`),t(u,`h-5 w-5`),s(u,`fill`,`none`),s(u,`viewBox`,`0 0 24 24`),s(u,`stroke`,`currentColor`);let f=n(`path`);i(u,f),s(f,`strokeLinecap`,`round`),s(f,`strokeLinejoin`,`round`),s(f,`strokeWidth`,`2`),s(f,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),i(l,r(`Updates`));let p=o(l);i(l,p),c(p,` `);let m=a(`rue:component:anchor`);return i(l,m),d(h(C,{size:`xs`,variant:`warning`,children:`NEW`}),l,m),l});d(h(w.Item,{as:`button`,children:m}),l,p);let _=a(`rue:component:anchor`);i(l,_);let v=g(()=>{let t=e();i(t,r(`Stats`));let n=a(`rue:component:anchor`);return i(t,n),d(h(C,{size:`xs`,variant:`info`}),t,n),t});return d(h(w.Item,{as:`button`,children:v}),l,_),l})}),l,u),l}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(l,G,Pt))});let K=n(`div`);i(p,K),t(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ft=n(`h2`);i(K,Ft),t(Ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ft,r(`# 去除内边距和圆角`));let It=a(`rue:component:anchor`);i(K,It),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});m(()=>d(e,K,It))});let Lt=a(`rue:slot:anchor`);i(K,Lt),u(()=>{let t=ue.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(h(w,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`Item 1`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Item 2`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(w.Item,{children:`Item 3`}),t,o),t})}),t,n),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,K,Lt))});let q=n(`div`);i(p,q),t(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Rt=n(`h2`);i(q,Rt),t(Rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Rt,r(`# 带标题`));let zt=a(`rue:component:anchor`);i(q,zt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});m(()=>d(e,q,zt))});let Bt=a(`rue:slot:anchor`);i(q,Bt),u(()=>{let t=de.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Title,{children:`Title`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Item 1`}),t,r);let o=a(`rue:component:anchor`);i(t,o),d(h(w.Item,{children:`Item 2`}),t,o);let s=a(`rue:component:anchor`);return i(t,s),d(h(w.Item,{children:`Item 3`}),t,s),t})}),t,n),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,q,Bt))});let J=n(`div`);i(p,J),t(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Vt=n(`h2`);i(J,Vt),t(Vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Vt,r(`# 标题作为父级`));let Ht=a(`rue:component:anchor`);i(J,Ht),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});m(()=>d(e,J,Ht))});let Ut=a(`rue:slot:anchor`);i(J,Ut),u(()=>{let t=fe.value===`preview`?g(()=>{let t=e(),r=a(`rue:component:anchor`);return i(t,r),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),r=n(`li`);i(t,r);let o=a(`rue:component:anchor`);i(r,o),d(h(w.Title,{as:`h2`,children:`Title`}),r,o);let s=n(`ul`);i(r,s);let c=a(`rue:component:anchor`);i(s,c),d(h(w.Item,{children:`Item 1`}),s,c);let l=a(`rue:component:anchor`);i(s,l),d(h(w.Item,{children:`Item 2`}),s,l);let u=a(`rue:component:anchor`);return i(s,u),d(h(w.Item,{children:`Item 3`}),s,u),t})}),t,r),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,J,Ut))});let Y=n(`div`);i(p,Y),t(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Wt=n(`h2`);i(Y,Wt),t(Wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Wt,r(`# 子菜单`));let Gt=a(`rue:component:anchor`);i(Y,Gt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});m(()=>d(e,Y,Gt))});let Kt=a(`rue:slot:anchor`);i(Y,Kt),u(()=>{let t=pe.value===`preview`?g(()=>{let t=e(),r=a(`rue:component:anchor`);return i(t,r),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{as:`button`,children:`Item 1`}),t,r);let o=n(`li`);i(t,o);let s=a(`rue:component:anchor`);i(o,s),d(h(w.Item,{as:`button`,children:`Parent`}),o,s);let c=a(`rue:component:anchor`);i(o,c);let l=g(()=>{let t=e(),r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{as:`button`,children:`Submenu 1`}),t,r);let o=a(`rue:component:anchor`);i(t,o),d(h(w.Item,{as:`button`,children:`Submenu 2`}),t,o);let s=n(`li`);i(t,s);let c=a(`rue:component:anchor`);i(s,c),d(h(w.Item,{as:`button`,children:`Parent`}),s,c);let l=a(`rue:component:anchor`);i(s,l);let u=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{as:`button`,children:`Submenu 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{as:`button`,children:`Submenu 2`}),t,r),t});return d(h(w.Submenu,{children:u}),s,l),t});d(h(w.Submenu,{children:l}),o,c);let u=a(`rue:component:anchor`);return i(t,u),d(h(w.Item,{as:`button`,children:`Item 3`}),t,u),t})}),t,r),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,Y,Kt))});let X=n(`div`);i(p,X),t(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let qt=n(`h2`);i(X,qt),t(qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(qt,r(`# 可折叠子菜单`));let Jt=a(`rue:component:anchor`);i(X,Jt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});m(()=>d(e,X,Jt))});let Yt=a(`rue:slot:anchor`);i(X,Yt),u(()=>{let t=me.value===`preview`?g(()=>{let t=e(),o=a(`rue:component:anchor`);return i(t,o),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),o=a(`rue:component:anchor`);i(t,o),d(h(w.Item,{as:`button`,children:`Item 1`}),t,o);let s=n(`li`);i(t,s);let c=n(`details`);i(s,c);let l=n(`summary`);i(c,l),i(l,r(`Parent`));let u=n(`ul`);i(c,u);let f=a(`rue:component:anchor`);i(u,f),d(h(w.Item,{as:`button`,children:`Submenu 1`}),u,f);let p=a(`rue:component:anchor`);i(u,p),d(h(w.Item,{as:`button`,children:`Submenu 2`}),u,p);let m=n(`li`);i(u,m);let g=n(`details`);i(m,g);let _=n(`summary`);i(g,_),i(_,r(`Parent`));let v=n(`ul`);i(g,v);let y=a(`rue:component:anchor`);i(v,y),d(h(w.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=a(`rue:component:anchor`);i(v,b),d(h(w.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=a(`rue:component:anchor`);return i(t,x),d(h(w.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,o),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,X,Yt))});let Z=n(`div`);i(p,Z),t(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xt=n(`h2`);i(Z,Xt),t(Xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Xt,r(`# 通过类名控制展开（JS）`));let Zt=a(`rue:component:anchor`);i(Z,Zt),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});m(()=>d(e,Z,Zt))});let Qt=a(`rue:slot:anchor`);i(Z,Qt),u(()=>{let r=he.value===`preview`?g(()=>{let r=e(),o=n(`div`);i(r,o),t(o,`grid gap-6`);let s=a(`rue:component:anchor`);i(o,s),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Item 1`}),t,r);let o=n(`li`);i(t,o);let s=a(`rue:component:anchor`);i(o,s),d(h(w.DropdownToggle,{onClick:Ae,children:`Parent`}),o,s);let c=a(`rue:component:anchor`);i(o,c);let l=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`Submenu 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{children:`Submenu 2`}),t,r),t});return d(h(w.Dropdown,{children:l}),o,c),t})}),o,s);let c=a(`rue:component:anchor`);return i(o,c),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Item 1`}),t,r);let o=n(`li`);i(t,o);let s=a(`rue:component:anchor`);i(o,s),u(()=>{let e=h(w.DropdownToggle,{show:!0,onClick:Ae,children:`Parent`});m(()=>d(e,o,s))});let c=a(`rue:component:anchor`);i(o,c);let l=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`Submenu 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{children:`Submenu 2`}),t,r),t});return u(()=>{let e=h(w.Dropdown,{show:!0,children:l});m(()=>d(e,o,c))}),t})}),o,c),r}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(r,Z,Qt))});let Q=n(`div`);i(p,Q),t(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let $t=n(`h2`);i(Q,$t),t($t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i($t,r(`# 文件树`));let en=a(`rue:component:anchor`);i(Q,en),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});m(()=>d(e,Q,en))});let tn=a(`rue:slot:anchor`);i(Q,tn),u(()=>{let o=ge.value===`preview`?g(()=>{let o=e(),c=a(`rue:component:anchor`);return i(o,c),d(h(w,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:g(()=>{let o=e(),c=a(`rue:component:anchor`);i(o,c);let l=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`strokeWidth`,`1.5`),s(o,`stroke`,`currentColor`),t(o,`w-4 h-4`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(a,r(`resume.pdf`)),a});d(h(w.Item,{as:`button`,children:l}),o,c);let u=n(`li`);i(o,u);let f=n(`details`);i(u,f);let p=n(`summary`);i(f,p);let m=n(`svg`);i(p,m),s(m,`xmlns`,`http://www.w3.org/2000/svg`),s(m,`fill`,`none`),s(m,`viewBox`,`0 0 24 24`),s(m,`strokeWidth`,`1.5`),s(m,`stroke`,`currentColor`),t(m,`w-4 h-4`);let _=n(`path`);i(m,_),s(_,`strokeLinecap`,`round`),s(_,`strokeLinejoin`,`round`),s(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(p,r(`My Files`));let v=n(`ul`);i(f,v);let y=a(`rue:component:anchor`);i(v,y);let b=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`strokeWidth`,`1.5`),s(o,`stroke`,`currentColor`),t(o,`w-4 h-4`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(a,r(`Project-final.psd`)),a});d(h(w.Item,{as:`button`,children:b}),v,y);let x=a(`rue:component:anchor`);i(v,x);let S=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`strokeWidth`,`1.5`),s(o,`stroke`,`currentColor`),t(o,`w-4 h-4`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(a,r(`Project-final-2.psd`)),a});d(h(w.Item,{as:`button`,children:S}),v,x);let C=n(`li`);i(v,C);let ee=n(`details`);i(C,ee);let te=n(`summary`);i(ee,te);let T=n(`svg`);i(te,T),s(T,`xmlns`,`http://www.w3.org/2000/svg`),s(T,`fill`,`none`),s(T,`viewBox`,`0 0 24 24`),s(T,`strokeWidth`,`1.5`),s(T,`stroke`,`currentColor`),t(T,`w-4 h-4`);let E=n(`path`);i(T,E),s(E,`strokeLinecap`,`round`),s(E,`strokeLinejoin`,`round`),s(E,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(te,r(`Images`));let D=n(`ul`);i(ee,D);let ne=a(`rue:component:anchor`);i(D,ne);let re=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`strokeWidth`,`1.5`),s(o,`stroke`,`currentColor`),t(o,`w-4 h-4`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(a,r(`Screenshot1.png`)),a});d(h(w.Item,{as:`button`,children:re}),D,ne);let ie=a(`rue:component:anchor`);i(D,ie);let ae=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`strokeWidth`,`1.5`),s(o,`stroke`,`currentColor`),t(o,`w-4 h-4`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(a,r(`Screenshot2.png`)),a});d(h(w.Item,{as:`button`,children:ae}),D,ie);let oe=n(`li`);i(D,oe);let se=n(`details`);i(oe,se);let ce=n(`summary`);i(se,ce);let O=n(`svg`);i(ce,O),s(O,`xmlns`,`http://www.w3.org/2000/svg`),s(O,`fill`,`none`),s(O,`viewBox`,`0 0 24 24`),s(O,`strokeWidth`,`1.5`),s(O,`stroke`,`currentColor`),t(O,`w-4 h-4`);let k=n(`path`);i(O,k),s(k,`strokeLinecap`,`round`),s(k,`strokeLinejoin`,`round`),s(k,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(ce,r(`Others`));let le=n(`ul`);i(se,le);let ue=a(`rue:component:anchor`);i(le,ue);let de=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`strokeWidth`,`1.5`),s(o,`stroke`,`currentColor`),t(o,`w-4 h-4`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(a,r(`Screenshot3.png`)),a});d(h(w.Item,{as:`button`,children:de}),le,ue);let fe=a(`rue:component:anchor`);i(o,fe);let pe=g(()=>{let a=e(),o=n(`svg`);i(a,o),s(o,`xmlns`,`http://www.w3.org/2000/svg`),s(o,`fill`,`none`),s(o,`viewBox`,`0 0 24 24`),s(o,`strokeWidth`,`1.5`),s(o,`stroke`,`currentColor`),t(o,`w-4 h-4`);let c=n(`path`);return i(o,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(a,r(`reports-final-2.pdf`)),a});return d(h(w.Item,{as:`button`,children:pe}),o,fe),o})}),o,c),o}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(o,Q,tn))});let nn=n(`div`);i(p,nn),t(nn,`component-preview not-prose text-base-content my-6 lg:my-12`);let rn=n(`h2`);i(nn,rn),t(rn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(rn,r(`# 激活项`));let an=a(`rue:component:anchor`);i(nn,an),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});m(()=>d(e,nn,an))});let on=a(`rue:slot:anchor`);i(nn,on),u(()=>{let t=_e.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(h(w,{className:`bg-base-200 rounded-box w-56`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`Item 1`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{className:`menu-active`,children:`Item 2`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(w.Item,{children:`Item 3`}),t,o),t})}),t,n),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,nn,on))});let sn=n(`div`);i(p,sn),t(sn,`component-preview not-prose text-base-content my-6 lg:my-12`);let cn=n(`h2`);i(sn,cn),t(cn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(cn,r(`# 水平菜单`));let ln=a(`rue:component:anchor`);i(sn,ln),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});m(()=>d(e,sn,ln))});let un=a(`rue:slot:anchor`);i(sn,un),u(()=>{let t=ve.value===`preview`?g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),d(h(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`Item 1`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Item 2`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(w.Item,{children:`Item 3`}),t,o),t})}),t,n),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,sn,un))});let dn=n(`div`);i(p,dn),t(dn,`component-preview not-prose text-base-content my-6 lg:my-12`);let fn=n(`h2`);i(dn,fn),t(fn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(fn,r(`# 水平子菜单`));let pn=a(`rue:component:anchor`);i(dn,pn),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});m(()=>d(e,dn,pn))});let mn=a(`rue:slot:anchor`);i(dn,mn),u(()=>{let t=ye.value===`preview`?g(()=>{let t=e(),r=a(`rue:component:anchor`);return i(t,r),d(h(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:g(()=>{let t=e(),r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Item 1`}),t,r);let o=n(`li`);i(t,o);let s=a(`rue:component:anchor`);i(o,s),d(h(w.Item,{children:`Parent`}),o,s);let c=a(`rue:component:anchor`);i(o,c);let l=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`Submenu 1`}),t,n);let r=a(`rue:component:anchor`);return i(t,r),d(h(w.Item,{children:`Submenu 2`}),t,r),t});d(h(w.Submenu,{children:l}),o,c);let u=a(`rue:component:anchor`);return i(t,u),d(h(w.Item,{children:`Item 3`}),t,u),t})}),t,r),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,dn,mn))});let hn=n(`div`);i(p,hn),t(hn,`component-preview not-prose text-base-content my-6 lg:my-12`);let gn=n(`h2`);i(hn,gn),t(gn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(gn,r(`# Mega 菜单（响应式）`));let _n=a(`rue:component:anchor`);i(hn,_n),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});m(()=>d(e,hn,_n))});let vn=a(`rue:slot:anchor`);i(hn,vn),u(()=>{let t=be.value===`preview`?g(()=>{let t=e(),r=a(`rue:component:anchor`);return i(t,r),d(h(w,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:g(()=>{let t=e(),r=n(`li`);i(t,r);let o=a(`rue:component:anchor`);i(r,o),d(h(w.Item,{children:`Solutions`}),r,o);let s=a(`rue:component:anchor`);i(r,s);let c=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`Design`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Development`}),t,r);let o=a(`rue:component:anchor`);i(t,o),d(h(w.Item,{children:`Hosting`}),t,o);let s=a(`rue:component:anchor`);return i(t,s),d(h(w.Item,{children:`Domain register`}),t,s),t});d(h(w.Submenu,{children:c}),r,s);let l=n(`li`);i(t,l);let u=a(`rue:component:anchor`);i(l,u),d(h(w.Item,{children:`Enterprise`}),l,u);let f=a(`rue:component:anchor`);i(l,f);let p=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`CRM software`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Marketing management`}),t,r);let o=a(`rue:component:anchor`);i(t,o),d(h(w.Item,{children:`Security`}),t,o);let s=a(`rue:component:anchor`);return i(t,s),d(h(w.Item,{children:`Consulting`}),t,s),t});d(h(w.Submenu,{children:p}),l,f);let m=n(`li`);i(t,m);let _=a(`rue:component:anchor`);i(m,_),d(h(w.Item,{children:`Products`}),m,_);let v=a(`rue:component:anchor`);i(m,v);let y=g(()=>{let t=e(),r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`UI Kit`}),t,r);let o=a(`rue:component:anchor`);i(t,o),d(h(w.Item,{children:`WordPress themes`}),t,o);let s=a(`rue:component:anchor`);i(t,s),d(h(w.Item,{children:`WordPress plugins`}),t,s);let c=n(`li`);i(t,c);let l=a(`rue:component:anchor`);i(c,l),d(h(w.Item,{children:`Open source`}),c,l);let u=a(`rue:component:anchor`);i(c,u);let f=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`Auth management system`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`VScode theme`}),t,r);let o=a(`rue:component:anchor`);return i(t,o),d(h(w.Item,{children:`Color picker app`}),t,o),t});return d(h(w.Submenu,{children:f}),c,u),t});d(h(w.Submenu,{children:y}),m,v);let b=n(`li`);i(t,b);let x=a(`rue:component:anchor`);i(b,x),d(h(w.Item,{children:`Company`}),b,x);let S=a(`rue:component:anchor`);i(b,S);let C=g(()=>{let t=e(),n=a(`rue:component:anchor`);i(t,n),d(h(w.Item,{children:`About us`}),t,n);let r=a(`rue:component:anchor`);i(t,r),d(h(w.Item,{children:`Contact us`}),t,r);let o=a(`rue:component:anchor`);i(t,o),d(h(w.Item,{children:`Privacy policy`}),t,o);let s=a(`rue:component:anchor`);return i(t,s),d(h(w.Item,{children:`Press kit`}),t,s),t});return d(h(w.Submenu,{children:C}),b,S),t})}),t,r),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,hn,vn))});let $=n(`div`);i(p,$),t($,`component-preview not-prose text-base-content my-6 lg:my-12`);let yn=n(`h2`);i($,yn),t(yn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(yn,r(`# 可折叠（响应式）`));let bn=a(`rue:component:anchor`);i($,bn),u(()=>{let e=h(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});m(()=>d(e,$,bn))});let xn=a(`rue:slot:anchor`);i($,xn),u(()=>{let t=xe.value===`preview`?g(()=>{let t=e(),o=a(`rue:component:anchor`);return i(t,o),d(h(w,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:g(()=>{let t=e(),o=a(`rue:component:anchor`);i(t,o),d(h(w.Item,{as:`button`,children:`Item 1`}),t,o);let s=n(`li`);i(t,s);let c=n(`details`);i(s,c);let l=n(`summary`);i(c,l),i(l,r(`Parent item`));let u=n(`ul`);i(c,u);let f=a(`rue:component:anchor`);i(u,f),d(h(w.Item,{as:`button`,children:`Submenu 1`}),u,f);let p=a(`rue:component:anchor`);i(u,p),d(h(w.Item,{as:`button`,children:`Submenu 2`}),u,p);let m=n(`li`);i(u,m);let g=n(`details`);i(m,g);let _=n(`summary`);i(g,_),i(_,r(`Parent`));let v=n(`ul`);i(g,v);let y=a(`rue:component:anchor`);i(v,y),d(h(w.Item,{as:`button`,children:`item 1`}),v,y);let b=a(`rue:component:anchor`);i(v,b),d(h(w.Item,{as:`button`,children:`item 2`}),v,b);let x=a(`rue:component:anchor`);return i(t,x),d(h(w.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,o),t}):g(()=>{let t=e(),n=a(`rue:component:anchor`);return i(t,n),u(()=>{let e=h(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});m(()=>d(e,t,n))}),t});m(()=>d(t,$,xn))});let Sn=n(`h2`);i(p,Sn),i(Sn,r(`API`));let Cn=n(`p`);i(p,Cn),t(Cn,`text-sm text-base-content/70`),i(Cn,r("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let wn=n(`h3`);i(p,wn),i(wn,r(`Menu.Item 链接相关`));let Tn=a(`rue:component:anchor`);return i(p,Tn),u(()=>{let e=h(ee,{rows:te});m(()=>d(e,p,Tn))}),l})}),l,p),l})};export{T as default};
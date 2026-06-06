import{$ as e,Et as t,G as n,H as r,J as i,K as a,W as o,_t as s,d as c,kt as l,l as u,q as d,st as f,t as p,tt as m,u as h,xt as g}from"./vapor-runtime-ACs_OvwU.js";import{a as _,n as v}from"./vapor-helpers-vapor-BFB_fGs4.js";import{t as y}from"./src-B0RvnZVV.js";import{n as b}from"./SidebarPlaygroundDesign-fKTv1NQ3.js";import{t as x}from"./Code-CliOXHNE.js";import{t as S}from"./tabs-CPymQe79.js";import{t as C}from"./badge-BuRROX_W.js";import{t as w}from"./menu-B0n3MWOq.js";var T=t=>c(i=>{let s=a(`div`,i);m(s,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=a(`table`,s);r(s,f),m(f,`table table-zebra`);let p=a(`thead`,f);r(f,p);let h=a(`tr`,p);r(p,h);let _=a(`th`,h);r(h,_),r(_,d(`属性`));let y=a(`th`,h);r(h,y),r(y,d(`说明`));let b=a(`th`,h);r(h,b),r(b,d(`类型`));let x=a(`th`,h);r(h,x),r(x,d(`默认值`));let S=a(`tbody`,f);r(f,S);let C=o(`rue:list:start`),w=o(`rue:list:end`);r(S,C),r(S,w);let T=new Map;return l(()=>{T=v({items:t.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`tr`,i);r(i,s),l(()=>{e(s,`key`,String(t.prop))});let c=a(`td`,s);r(s,c);let d=a(`code`,c);r(c,d);let f=o(`rue:slot:anchor`);r(d,f),l(()=>{let e=t.prop;g(()=>u(e,d,f))});let p=a(`td`,s);r(s,p);let m=o(`rue:slot:anchor`);r(p,m),l(()=>{let e=t.description;g(()=>u(e,p,m))});let h=a(`td`,s);r(s,h);let _=a(`code`,h);r(h,_);let v=o(`rue:slot:anchor`);r(_,v),l(()=>{let e=t.type;g(()=>u(e,_,v))});let y=a(`td`,s);r(s,y);let b=a(`code`,y);r(y,b);let x=o(`rue:slot:anchor`);return r(b,x),l(()=>{let e=t.defaultValue;g(()=>u(e,b,x))}),i}),i,s)}})}),s}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKeys:Te,recommendedOpenKeys:Ee,multipleSelectedKeys:De,compoundSelectedKeys:Oe,compoundOpenKeys:ke,toggleDropdownByClass:Ae,menuData:je,menuItems:Me}=_(`useSetup:0:0`,()=>t(()=>({tRecommended:_(`ref:1:0`,()=>s(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>s(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>s(`preview`)),tBasic:_(`ref:1:3`,()=>s(`preview`)),tResponsive:_(`ref:1:4`,()=>s(`preview`)),tIconOnly:_(`ref:1:5`,()=>s(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>s(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>s(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>s(`preview`)),tSizes:_(`ref:1:9`,()=>s(`preview`)),tDisabled:_(`ref:1:10`,()=>s(`preview`)),tIcons:_(`ref:1:11`,()=>s(`preview`)),tIconsBadge:_(`ref:1:12`,()=>s(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>s(`preview`)),tTitle:_(`ref:1:14`,()=>s(`preview`)),tTitleParent:_(`ref:1:15`,()=>s(`preview`)),tSubmenu:_(`ref:1:16`,()=>s(`preview`)),tCollapsible:_(`ref:1:17`,()=>s(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>s(`preview`)),tFileTree:_(`ref:1:19`,()=>s(`preview`)),tActiveItem:_(`ref:1:20`,()=>s(`preview`)),tHorizontal:_(`ref:1:21`,()=>s(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>s(`preview`)),tMega:_(`ref:1:23`,()=>s(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>s(`preview`)),tArray:_(`ref:1:25`,()=>s(`preview`)),tArrayInternal:_(`ref:1:26`,()=>s(`preview`)),tNavigation:_(`ref:1:27`,()=>s(`preview`)),recommendedSelectedKeys:_(`ref:1:28`,()=>s([`overview`])),recommendedOpenKeys:_(`ref:1:29`,()=>s([`workspace`])),multipleSelectedKeys:_(`ref:1:30`,()=>s([`mentions`,`archived`])),compoundSelectedKeys:_(`ref:1:31`,()=>s([`profile`])),compoundOpenKeys:_(`ref:1:32`,()=>s([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Ne=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(C,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(C,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(C,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Pe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(C,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(C,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return c(t=>{let s=n(),_=o(`rue:component:anchor`);return r(s,_),u(p(b,{children:c(()=>{let t=n(),s=a(`div`,t);r(t,s),m(s,`max-w-none prose prose-sm md:prose-base`);let _=a(`h1`,s);r(s,_),r(_,d(`Menu 菜单`));let b=a(`p`,s);r(s,b),m(b,`text-sm mt-3 mb-3`),r(b,d("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let A=a(`div`,s);r(s,A),m(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Fe=a(`h2`,A);r(A,Fe),m(Fe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Fe,d(`# 推荐：items 数据驱动导航`));let Ie=a(`p`,A);r(A,Ie),m(Ie,`mb-3 text-sm text-base-content/70`),r(Ie,d(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Le=o(`rue:component:anchor`);r(A,Le),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});g(()=>u(e,A,Le))});let Re=o(`rue:slot:anchor`);r(A,Re),l(()=>{let e=E.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(w,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:Ne,selectedKeys:Te.value,openKeys:Ee.value,onSelect:e=>Te.value=e.selectedKeys,onOpenChange:e=>Ee.value=e});g(()=>u(n,e,t))}),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});g(()=>u(n,e,t))}),e});g(()=>u(e,A,Re))});let j=a(`div`,s);r(s,j),m(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let ze=a(`h2`,j);r(j,ze),m(ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(ze,d(`# 推荐：多选、分组与分割线`));let Be=a(`p`,j);r(j,Be),m(Be,`mb-3 text-sm text-base-content/70`),r(Be,d("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let Ve=o(`rue:component:anchor`);r(j,Ve),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});g(()=>u(e,j,Ve))});let He=o(`rue:slot:anchor`);r(j,He),l(()=>{let e=te.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(w,{className:`bg-base-200 rounded-box w-80`,items:Pe,multiple:!0,selectedKeys:De.value,onSelect:e=>De.value=e.selectedKeys,onDeselect:e=>De.value=e.selectedKeys});g(()=>u(n,e,t))}),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

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
/>`});g(()=>u(n,e,t))}),e});g(()=>u(e,j,He))});let M=a(`div`,s);r(s,M),m(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ue=a(`h2`,M);r(M,Ue),m(Ue,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Ue,d(`# 推荐：组合式增强 API`));let We=a(`p`,M);r(M,We),m(We,`mb-3 text-sm text-base-content/70`),r(We,d("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ge=o(`rue:component:anchor`);r(M,Ge),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});g(()=>u(e,M,Ge))});let Ke=o(`rue:slot:anchor`);r(M,Ke),l(()=>{let e=D.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t);let i=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t);let i=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),l(()=>{let n=p(w.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});g(()=>u(n,e,t))});let i=o(`rue:component:anchor`);return r(e,i),l(()=>{let t=p(w.Item,{eventKey:`notifications`,extra:y(C,{size:`xs`,children:`2`}),children:`Notifications`});g(()=>u(t,e,i))}),e});u(p(w.ItemGroup,{title:`Account`,children:i}),e,t);let a=o(`rue:component:anchor`);r(e,a),u(p(w.Divider,{}),e,a);let s=o(`rue:component:anchor`);r(e,s);let d=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{eventKey:`security`,children:`Security`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,i),e});return l(()=>{let t=p(w.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:d});g(()=>u(t,e,s))}),e});return l(()=>{let n=p(w,{className:`bg-base-200 rounded-box w-80`,selectedKeys:Oe.value,openKeys:ke.value,onSelect:e=>Oe.value=e.selectedKeys,onOpenChange:e=>ke.value=e,children:i});g(()=>u(n,e,t))}),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,M,Ke))});let qe=a(`div`,s);r(s,qe),m(qe,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),r(qe,d(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=a(`div`,s);r(s,N),m(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Je=a(`h2`,N);r(N,Je),m(Je,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Je,d(`# 导航跳转`));let Ye=o(`rue:component:anchor`);r(N,Ye),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});g(()=>u(e,N,Ye))});let Xe=o(`rue:slot:anchor`);r(N,Xe),l(()=>{let e=we.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,i);let a=o(`rue:component:anchor`);return r(e,a),u(p(w.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,a),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,N,Xe))});let P=a(`div`,s);r(s,P),m(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ze=a(`h2`,P);r(P,Ze),m(Ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Ze,d(`# Menu 通过数据渲染（数组）`));let Qe=o(`rue:component:anchor`);r(P,Qe),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});g(()=>u(e,P,Qe))});let $e=o(`rue:slot:anchor`);r(P,$e),l(()=>{let t=Se.value===`preview`?c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),u(p(w,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:c(()=>{let t=n(),i=o(`rue:list:start`),s=o(`rue:list:end`);r(t,i),r(t,s);let d=new Map;return l(()=>{d=v({items:je||[],getKey:(e,t)=>t,elements:d,parent:i.parentNode,before:s,singleRoot:!0,start:i,renderItem:(t,i,s,d,f)=>{u(c(()=>{let i=n(),s=a(`li`,i);r(i,s),l(()=>{e(s,`key`,String(f))});let d=o(`rue:component:anchor`);r(s,d),u(p(w.Item,{children:t.label}),s,d);let m=o(`rue:component:anchor`);return r(s,m),u(p(w.Submenu,{children:c(()=>{let i=n(),s=o(`rue:list:start`),d=o(`rue:list:end`);r(i,s),r(i,d);let f=new Map;return l(()=>{f=v({items:t.children||[],getKey:(e,t)=>t,elements:f,parent:s.parentNode,before:d,start:s,renderItem:(t,i,s,d,f)=>{h(c(typeof t==`string`?()=>{let e=n(),i=o(`rue:component:anchor`);return r(e,i),l(()=>{let n=p(w.Item,{key:f,children:t});g(()=>u(n,e,i))}),e}:()=>{let i=n(),s=a(`li`,i);r(i,s),l(()=>{e(s,`key`,String(f))});let d=o(`rue:component:anchor`);r(s,d),u(p(w.Item,{children:t.label}),s,d);let m=o(`rue:component:anchor`);return r(s,m),u(p(w.Submenu,{children:c(()=>{let e=n(),i=o(`rue:list:start`),a=o(`rue:list:end`);r(e,i),r(e,a);let s=new Map;return l(()=>{s=v({items:t.children||[],getKey:(e,t)=>t,elements:s,parent:i.parentNode,before:a,start:i,renderItem:(e,t,n,r,i)=>{h(p(w.Item,{key:i,children:e}),t,n,r)}})}),e})}),s,m),i}),i,s,d)}})}),i})}),s,m),i}),i,s)}})}),t})}),t,i),t}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(t,P,$e))});let F=a(`div`,s);r(s,F),m(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let et=a(`h2`,F);r(F,et),m(et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(et,d(`# Menu 通过数据渲染（数组，组件内部）`));let tt=o(`rue:component:anchor`);r(F,tt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});g(()=>u(e,F,tt))});let nt=o(`rue:slot:anchor`);r(F,nt),l(()=>{let e=Ce.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(w,{items:Me,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});g(()=>u(n,e,t))}),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});g(()=>u(n,e,t))}),e});g(()=>u(e,F,nt))});let I=a(`div`,s);r(s,I),m(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let rt=a(`h2`,I);r(I,rt),m(rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(rt,d(`# Menu`));let it=o(`rue:component:anchor`);r(I,it),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});g(()=>u(e,I,it))});let at=o(`rue:slot:anchor`);r(I,at),l(()=>{let e=ne.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Item 1`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{as:`button`,children:`Item 2`}),e,i);let a=o(`rue:component:anchor`);return r(e,a),u(p(w.Item,{as:`button`,children:`Item 3`}),e,a),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,I,at))});let L=a(`div`,s);r(s,L),m(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let ot=a(`h2`,L);r(L,ot),m(ot,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(ot,d(`# 响应式：小屏垂直，大屏水平`));let st=o(`rue:component:anchor`);r(L,st),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});g(()=>u(e,L,st))});let ct=o(`rue:slot:anchor`);r(L,ct),l(()=>{let e=re.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Item 1`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{as:`button`,children:`Item 2`}),e,i);let a=o(`rue:component:anchor`);return r(e,a),u(p(w.Item,{as:`button`,children:`Item 3`}),e,a),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,L,ct))});let R=a(`div`,s);r(s,R),m(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let lt=a(`h2`,R);r(R,lt),m(lt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(lt,d(`# 仅图标`));let ut=o(`rue:component:anchor`);r(R,ut),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});g(()=>u(e,R,ut))});let dt=o(`rue:slot:anchor`);r(R,dt),l(()=>{let t=ie.value===`preview`?c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),u(p(w,{className:`bg-base-200 rounded-box`,children:c(()=>{let t=n(),i=o(`rue:component:anchor`);r(t,i);let s=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});u(p(w.Item,{as:`button`,children:s}),t,i);let l=o(`rue:component:anchor`);r(t,l);let d=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});u(p(w.Item,{as:`button`,children:d}),t,l);let f=o(`rue:component:anchor`);r(t,f);let h=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return u(p(w.Item,{as:`button`,children:h}),t,f),t})}),t,i),t}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(t,R,dt))});let z=a(`div`,s);r(s,z),m(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let ft=a(`h2`,z);r(z,ft),m(ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(ft,d(`# 仅图标（水平）`));let pt=o(`rue:component:anchor`);r(z,pt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});g(()=>u(e,z,pt))});let mt=o(`rue:slot:anchor`);r(z,mt),l(()=>{let t=ae.value===`preview`?c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),u(p(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:c(()=>{let t=n(),i=o(`rue:component:anchor`);r(t,i);let s=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});u(p(w.Item,{as:`button`,children:s}),t,i);let l=o(`rue:component:anchor`);r(t,l);let d=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});u(p(w.Item,{as:`button`,children:d}),t,l);let f=o(`rue:component:anchor`);r(t,f);let h=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return u(p(w.Item,{as:`button`,children:h}),t,f),t})}),t,i),t}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(t,z,mt))});let B=a(`div`,s);r(s,B),m(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let ht=a(`h2`,B);r(B,ht),m(ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(ht,d(`# 仅图标（带 tooltip）`));let gt=o(`rue:component:anchor`);r(B,gt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});g(()=>u(e,B,gt))});let _t=o(`rue:slot:anchor`);r(B,_t),l(()=>{let t=oe.value===`preview`?c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),u(p(w,{className:`bg-base-200 rounded-box`,children:c(()=>{let t=n(),i=o(`rue:component:anchor`);r(t,i);let s=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),t});u(p(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:s}),t,i);let l=o(`rue:component:anchor`);r(t,l);let d=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});u(p(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:d}),t,l);let f=o(`rue:component:anchor`);r(t,f);let h=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return u(p(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:h}),t,f),t})}),t,i),t}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(t,B,_t))});let V=a(`div`,s);r(s,V),m(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let vt=a(`h2`,V);r(V,vt),m(vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(vt,d(`# 仅图标（水平，tooltip）`));let yt=o(`rue:component:anchor`);r(V,yt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});g(()=>u(e,V,yt))});let bt=o(`rue:slot:anchor`);r(V,bt),l(()=>{let t=O.value===`preview`?c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),u(p(w,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:c(()=>{let t=n(),i=o(`rue:component:anchor`);r(t,i);let s=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),t});u(p(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:s}),t,i);let l=o(`rue:component:anchor`);r(t,l);let d=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});u(p(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:d}),t,l);let f=o(`rue:component:anchor`);r(t,f);let h=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),t});return u(p(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:h}),t,f),t})}),t,i),t}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(t,V,bt))});let H=a(`div`,s);r(s,H),m(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let xt=a(`h2`,H);r(H,xt),m(xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(xt,d(`# Menu 尺寸`));let St=o(`rue:component:anchor`);r(H,St),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});g(()=>u(e,H,St))});let Ct=o(`rue:slot:anchor`);r(H,Ct),l(()=>{let e=se.value===`preview`?c(()=>{let e=n(),t=a(`div`,e);r(e,t),m(t,`grid gap-6`);let i=o(`rue:component:anchor`);r(t,i),u(p(w,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Xsmall 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{as:`button`,children:`Xsmall 2`}),e,i),e})}),t,i);let s=o(`rue:component:anchor`);r(t,s),u(p(w,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Small 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{as:`button`,children:`Small 2`}),e,i),e})}),t,s);let l=o(`rue:component:anchor`);r(t,l),u(p(w,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Medium 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{as:`button`,children:`Medium 2`}),e,i),e})}),t,l);let d=o(`rue:component:anchor`);r(t,d),u(p(w,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Large 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{as:`button`,children:`Large 2`}),e,i),e})}),t,d);let f=o(`rue:component:anchor`);return r(t,f),u(p(w,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Xlarge 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{as:`button`,children:`Xlarge 2`}),e,i),e})}),t,f),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});g(()=>u(n,e,t))}),e});g(()=>u(e,H,Ct))});let U=a(`div`,s);r(s,U),m(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let wt=a(`h2`,U);r(U,wt),m(wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(wt,d(`# 禁用项目`));let Tt=o(`rue:component:anchor`);r(U,Tt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});g(()=>u(e,U,Tt))});let Et=o(`rue:slot:anchor`);r(U,Et),l(()=>{let e=k.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Enabled item`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,i);let a=o(`rue:component:anchor`);return r(e,a),u(p(w.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,a),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,U,Et))});let W=a(`div`,s);r(s,W),m(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Dt=a(`h2`,W);r(W,Dt),m(Dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Dt,d(`# 带图标`));let Ot=o(`rue:component:anchor`);r(W,Ot),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});g(()=>u(e,W,Ot))});let kt=o(`rue:slot:anchor`);r(W,kt),l(()=>{let t=ce.value===`preview`?c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let t=n(),i=o(`rue:component:anchor`);r(t,i);let s=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),r(t,d(`Item 2`)),t});u(p(w.Item,{as:`button`,children:s}),t,i);let l=o(`rue:component:anchor`);r(t,l);let f=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),r(t,d(`Item 1`)),t});u(p(w.Item,{as:`button`,children:f}),t,l);let h=o(`rue:component:anchor`);r(t,h);let g=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`strokeWidth`,`2`),e(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),r(t,d(`Item 3`)),t});return u(p(w.Item,{as:`button`,children:g}),t,h),t})}),t,i),t}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(t,W,kt))});let G=a(`div`,s);r(s,G),m(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let At=a(`h2`,G);r(G,At),m(At,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(At,d(`# 带图标与徽章（响应式）`));let jt=o(`rue:component:anchor`);r(G,jt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});g(()=>u(e,G,jt))});let Mt=o(`rue:slot:anchor`);r(G,Mt),l(()=>{let t=le.value===`preview`?c(()=>{let t=n(),s=o(`rue:component:anchor`);return r(t,s),u(p(w,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:c(()=>{let t=n(),s=o(`rue:component:anchor`);r(t,s);let l=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),m(i,`h-5 w-5`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`stroke`,`currentColor`);let s=a(`path`,i);r(i,s),e(s,`strokeLinecap`,`round`),e(s,`strokeLinejoin`,`round`),e(s,`strokeWidth`,`2`),e(s,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),r(t,d(`Inbox`));let c=o(`rue:component:anchor`);return r(t,c),u(p(C,{size:`xs`,children:`99+`}),t,c),t});u(p(w.Item,{as:`button`,children:l}),t,s);let h=o(`rue:component:anchor`);r(t,h);let g=c(()=>{let t=n(),s=a(`svg`,t);r(t,s),e(s,`xmlns`,`http://www.w3.org/2000/svg`),m(s,`h-5 w-5`),e(s,`fill`,`none`),e(s,`viewBox`,`0 0 24 24`),e(s,`stroke`,`currentColor`);let c=a(`path`,s);r(s,c),e(c,`strokeLinecap`,`round`),e(c,`strokeLinejoin`,`round`),e(c,`strokeWidth`,`2`),e(c,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),r(t,d(`Updates`));let l=i(t);r(t,l),f(l,` `);let h=o(`rue:component:anchor`);return r(t,h),u(p(C,{size:`xs`,variant:`warning`,children:`NEW`}),t,h),t});u(p(w.Item,{as:`button`,children:g}),t,h);let _=o(`rue:component:anchor`);r(t,_);let v=c(()=>{let e=n();r(e,d(`Stats`));let t=o(`rue:component:anchor`);return r(e,t),u(p(C,{size:`xs`,variant:`info`}),e,t),e});return u(p(w.Item,{as:`button`,children:v}),t,_),t})}),t,s),t}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(t,G,Mt))});let K=a(`div`,s);r(s,K),m(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Nt=a(`h2`,K);r(K,Nt),m(Nt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Nt,d(`# 去除内边距和圆角`));let Pt=o(`rue:component:anchor`);r(K,Pt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});g(()=>u(e,K,Pt))});let Ft=o(`rue:slot:anchor`);r(K,Ft),l(()=>{let e=ue.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Item 1`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{children:`Item 2`}),e,i);let a=o(`rue:component:anchor`);return r(e,a),u(p(w.Item,{children:`Item 3`}),e,a),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,K,Ft))});let q=a(`div`,s);r(s,q),m(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let It=a(`h2`,q);r(q,It),m(It,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(It,d(`# 带标题`));let Lt=o(`rue:component:anchor`);r(q,Lt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});g(()=>u(e,q,Lt))});let Rt=o(`rue:slot:anchor`);r(q,Rt),l(()=>{let e=de.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Title,{children:`Title`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{children:`Item 1`}),e,i);let a=o(`rue:component:anchor`);r(e,a),u(p(w.Item,{children:`Item 2`}),e,a);let s=o(`rue:component:anchor`);return r(e,s),u(p(w.Item,{children:`Item 3`}),e,s),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,q,Rt))});let J=a(`div`,s);r(s,J),m(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let zt=a(`h2`,J);r(J,zt),m(zt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(zt,d(`# 标题作为父级`));let Bt=o(`rue:component:anchor`);r(J,Bt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});g(()=>u(e,J,Bt))});let Vt=o(`rue:slot:anchor`);r(J,Vt),l(()=>{let e=fe.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=a(`li`,e);r(e,t);let i=o(`rue:component:anchor`);r(t,i),u(p(w.Title,{as:`h2`,children:`Title`}),t,i);let s=a(`ul`,t);r(t,s);let c=o(`rue:component:anchor`);r(s,c),u(p(w.Item,{children:`Item 1`}),s,c);let l=o(`rue:component:anchor`);r(s,l),u(p(w.Item,{children:`Item 2`}),s,l);let d=o(`rue:component:anchor`);return r(s,d),u(p(w.Item,{children:`Item 3`}),s,d),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,J,Vt))});let Y=a(`div`,s);r(s,Y),m(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ht=a(`h2`,Y);r(Y,Ht),m(Ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Ht,d(`# 子菜单`));let Ut=o(`rue:component:anchor`);r(Y,Ut),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});g(()=>u(e,Y,Ut))});let Wt=o(`rue:slot:anchor`);r(Y,Wt),l(()=>{let e=pe.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Item 1`}),e,t);let i=a(`li`,e);r(e,i);let s=o(`rue:component:anchor`);r(i,s),u(p(w.Item,{as:`button`,children:`Parent`}),i,s);let l=o(`rue:component:anchor`);r(i,l);let d=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Submenu 1`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{as:`button`,children:`Submenu 2`}),e,i);let s=a(`li`,e);r(e,s);let l=o(`rue:component:anchor`);r(s,l),u(p(w.Item,{as:`button`,children:`Parent`}),s,l);let d=o(`rue:component:anchor`);r(s,d);let f=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Submenu 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{as:`button`,children:`Submenu 2`}),e,i),e});return u(p(w.Submenu,{children:f}),s,d),e});u(p(w.Submenu,{children:d}),i,l);let f=o(`rue:component:anchor`);return r(e,f),u(p(w.Item,{as:`button`,children:`Item 3`}),e,f),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,Y,Wt))});let X=a(`div`,s);r(s,X),m(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Gt=a(`h2`,X);r(X,Gt),m(Gt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Gt,d(`# 可折叠子菜单`));let Kt=o(`rue:component:anchor`);r(X,Kt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});g(()=>u(e,X,Kt))});let qt=o(`rue:slot:anchor`);r(X,qt),l(()=>{let e=me.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Item 1`}),e,t);let i=a(`li`,e);r(e,i);let s=a(`details`,i);r(i,s);let c=a(`summary`,s);r(s,c),r(c,d(`Parent`));let l=a(`ul`,s);r(s,l);let f=o(`rue:component:anchor`);r(l,f),u(p(w.Item,{as:`button`,children:`Submenu 1`}),l,f);let m=o(`rue:component:anchor`);r(l,m),u(p(w.Item,{as:`button`,children:`Submenu 2`}),l,m);let h=a(`li`,l);r(l,h);let g=a(`details`,h);r(h,g);let _=a(`summary`,g);r(g,_),r(_,d(`Parent`));let v=a(`ul`,g);r(g,v);let y=o(`rue:component:anchor`);r(v,y),u(p(w.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=o(`rue:component:anchor`);r(v,b),u(p(w.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=o(`rue:component:anchor`);return r(e,x),u(p(w.Item,{as:`button`,children:`Item 3`}),e,x),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,X,qt))});let Z=a(`div`,s);r(s,Z),m(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Jt=a(`h2`,Z);r(Z,Jt),m(Jt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Jt,d(`# 通过类名控制展开（JS）`));let Yt=o(`rue:component:anchor`);r(Z,Yt),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});g(()=>u(e,Z,Yt))});let Xt=o(`rue:slot:anchor`);r(Z,Xt),l(()=>{let e=he.value===`preview`?c(()=>{let e=n(),t=a(`div`,e);r(e,t),m(t,`grid gap-6`);let i=o(`rue:component:anchor`);r(t,i),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Item 1`}),e,t);let i=a(`li`,e);r(e,i);let s=o(`rue:component:anchor`);r(i,s),u(p(w.DropdownToggle,{onClick:Ae,children:`Parent`}),i,s);let l=o(`rue:component:anchor`);r(i,l);let d=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Submenu 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{children:`Submenu 2`}),e,i),e});return u(p(w.Dropdown,{children:d}),i,l),e})}),t,i);let s=o(`rue:component:anchor`);return r(t,s),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Item 1`}),e,t);let i=a(`li`,e);r(e,i);let s=o(`rue:component:anchor`);r(i,s),l(()=>{let e=p(w.DropdownToggle,{show:!0,onClick:Ae,children:`Parent`});g(()=>u(e,i,s))});let d=o(`rue:component:anchor`);r(i,d);let f=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Submenu 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{children:`Submenu 2`}),e,i),e});return l(()=>{let e=p(w.Dropdown,{show:!0,children:f});g(()=>u(e,i,d))}),e})}),t,s),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,Z,Xt))});let Zt=a(`div`,s);r(s,Zt),m(Zt,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qt=a(`h2`,Zt);r(Zt,Qt),m(Qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(Qt,d(`# 文件树`));let $t=o(`rue:component:anchor`);r(Zt,$t),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});g(()=>u(e,Zt,$t))});let en=o(`rue:slot:anchor`);r(Zt,en),l(()=>{let t=ge.value===`preview`?c(()=>{let t=n(),i=o(`rue:component:anchor`);return r(t,i),u(p(w,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:c(()=>{let t=n(),i=o(`rue:component:anchor`);r(t,i);let s=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`strokeWidth`,`1.5`),e(i,`stroke`,`currentColor`),m(i,`w-4 h-4`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),r(t,d(`resume.pdf`)),t});u(p(w.Item,{as:`button`,children:s}),t,i);let l=a(`li`,t);r(t,l);let f=a(`details`,l);r(l,f);let h=a(`summary`,f);r(f,h);let g=a(`svg`,h);r(h,g),e(g,`xmlns`,`http://www.w3.org/2000/svg`),e(g,`fill`,`none`),e(g,`viewBox`,`0 0 24 24`),e(g,`strokeWidth`,`1.5`),e(g,`stroke`,`currentColor`),m(g,`w-4 h-4`);let _=a(`path`,g);r(g,_),e(_,`strokeLinecap`,`round`),e(_,`strokeLinejoin`,`round`),e(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),r(h,d(`My Files`));let v=a(`ul`,f);r(f,v);let y=o(`rue:component:anchor`);r(v,y);let b=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`strokeWidth`,`1.5`),e(i,`stroke`,`currentColor`),m(i,`w-4 h-4`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),r(t,d(`Project-final.psd`)),t});u(p(w.Item,{as:`button`,children:b}),v,y);let x=o(`rue:component:anchor`);r(v,x);let S=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`strokeWidth`,`1.5`),e(i,`stroke`,`currentColor`),m(i,`w-4 h-4`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),r(t,d(`Project-final-2.psd`)),t});u(p(w.Item,{as:`button`,children:S}),v,x);let C=a(`li`,v);r(v,C);let T=a(`details`,C);r(C,T);let ee=a(`summary`,T);r(T,ee);let E=a(`svg`,ee);r(ee,E),e(E,`xmlns`,`http://www.w3.org/2000/svg`),e(E,`fill`,`none`),e(E,`viewBox`,`0 0 24 24`),e(E,`strokeWidth`,`1.5`),e(E,`stroke`,`currentColor`),m(E,`w-4 h-4`);let te=a(`path`,E);r(E,te),e(te,`strokeLinecap`,`round`),e(te,`strokeLinejoin`,`round`),e(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),r(ee,d(`Images`));let D=a(`ul`,T);r(T,D);let ne=o(`rue:component:anchor`);r(D,ne);let re=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`strokeWidth`,`1.5`),e(i,`stroke`,`currentColor`),m(i,`w-4 h-4`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),r(t,d(`Screenshot1.png`)),t});u(p(w.Item,{as:`button`,children:re}),D,ne);let ie=o(`rue:component:anchor`);r(D,ie);let ae=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`strokeWidth`,`1.5`),e(i,`stroke`,`currentColor`),m(i,`w-4 h-4`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),r(t,d(`Screenshot2.png`)),t});u(p(w.Item,{as:`button`,children:ae}),D,ie);let oe=a(`li`,D);r(D,oe);let O=a(`details`,oe);r(oe,O);let se=a(`summary`,O);r(O,se);let k=a(`svg`,se);r(se,k),e(k,`xmlns`,`http://www.w3.org/2000/svg`),e(k,`fill`,`none`),e(k,`viewBox`,`0 0 24 24`),e(k,`strokeWidth`,`1.5`),e(k,`stroke`,`currentColor`),m(k,`w-4 h-4`);let ce=a(`path`,k);r(k,ce),e(ce,`strokeLinecap`,`round`),e(ce,`strokeLinejoin`,`round`),e(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),r(se,d(`Others`));let le=a(`ul`,O);r(O,le);let ue=o(`rue:component:anchor`);r(le,ue);let de=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`strokeWidth`,`1.5`),e(i,`stroke`,`currentColor`),m(i,`w-4 h-4`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),r(t,d(`Screenshot3.png`)),t});u(p(w.Item,{as:`button`,children:de}),le,ue);let fe=o(`rue:component:anchor`);r(t,fe);let pe=c(()=>{let t=n(),i=a(`svg`,t);r(t,i),e(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`fill`,`none`),e(i,`viewBox`,`0 0 24 24`),e(i,`strokeWidth`,`1.5`),e(i,`stroke`,`currentColor`),m(i,`w-4 h-4`);let o=a(`path`,i);return r(i,o),e(o,`strokeLinecap`,`round`),e(o,`strokeLinejoin`,`round`),e(o,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),r(t,d(`reports-final-2.pdf`)),t});return u(p(w.Item,{as:`button`,children:pe}),t,fe),t})}),t,i),t}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(t,Zt,en))});let Q=a(`div`,s);r(s,Q),m(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let tn=a(`h2`,Q);r(Q,tn),m(tn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(tn,d(`# 激活项`));let nn=o(`rue:component:anchor`);r(Q,nn),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});g(()=>u(e,Q,nn))});let rn=o(`rue:slot:anchor`);r(Q,rn),l(()=>{let e=_e.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Item 1`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{className:`menu-active`,children:`Item 2`}),e,i);let a=o(`rue:component:anchor`);return r(e,a),u(p(w.Item,{children:`Item 3`}),e,a),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,Q,rn))});let an=a(`div`,s);r(s,an),m(an,`component-preview not-prose text-base-content my-6 lg:my-12`);let on=a(`h2`,an);r(an,on),m(on,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(on,d(`# 水平菜单`));let sn=o(`rue:component:anchor`);r(an,sn),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});g(()=>u(e,an,sn))});let cn=o(`rue:slot:anchor`);r(an,cn),l(()=>{let e=ve.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Item 1`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{children:`Item 2`}),e,i);let a=o(`rue:component:anchor`);return r(e,a),u(p(w.Item,{children:`Item 3`}),e,a),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,an,cn))});let ln=a(`div`,s);r(s,ln),m(ln,`component-preview not-prose text-base-content my-6 lg:my-12`);let un=a(`h2`,ln);r(ln,un),m(un,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(un,d(`# 水平子菜单`));let dn=o(`rue:component:anchor`);r(ln,dn),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});g(()=>u(e,ln,dn))});let fn=o(`rue:slot:anchor`);r(ln,fn),l(()=>{let e=ye.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Item 1`}),e,t);let i=a(`li`,e);r(e,i);let s=o(`rue:component:anchor`);r(i,s),u(p(w.Item,{children:`Parent`}),i,s);let l=o(`rue:component:anchor`);r(i,l);let d=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Submenu 1`}),e,t);let i=o(`rue:component:anchor`);return r(e,i),u(p(w.Item,{children:`Submenu 2`}),e,i),e});u(p(w.Submenu,{children:d}),i,l);let f=o(`rue:component:anchor`);return r(e,f),u(p(w.Item,{children:`Item 3`}),e,f),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,ln,fn))});let pn=a(`div`,s);r(s,pn),m(pn,`component-preview not-prose text-base-content my-6 lg:my-12`);let mn=a(`h2`,pn);r(pn,mn),m(mn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(mn,d(`# Mega 菜单（响应式）`));let hn=o(`rue:component:anchor`);r(pn,hn),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});g(()=>u(e,pn,hn))});let gn=o(`rue:slot:anchor`);r(pn,gn),l(()=>{let e=be.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:c(()=>{let e=n(),t=a(`li`,e);r(e,t);let i=o(`rue:component:anchor`);r(t,i),u(p(w.Item,{children:`Solutions`}),t,i);let s=o(`rue:component:anchor`);r(t,s);let l=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Design`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{children:`Development`}),e,i);let a=o(`rue:component:anchor`);r(e,a),u(p(w.Item,{children:`Hosting`}),e,a);let s=o(`rue:component:anchor`);return r(e,s),u(p(w.Item,{children:`Domain register`}),e,s),e});u(p(w.Submenu,{children:l}),t,s);let d=a(`li`,e);r(e,d);let f=o(`rue:component:anchor`);r(d,f),u(p(w.Item,{children:`Enterprise`}),d,f);let m=o(`rue:component:anchor`);r(d,m);let h=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`CRM software`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{children:`Marketing management`}),e,i);let a=o(`rue:component:anchor`);r(e,a),u(p(w.Item,{children:`Security`}),e,a);let s=o(`rue:component:anchor`);return r(e,s),u(p(w.Item,{children:`Consulting`}),e,s),e});u(p(w.Submenu,{children:h}),d,m);let g=a(`li`,e);r(e,g);let _=o(`rue:component:anchor`);r(g,_),u(p(w.Item,{children:`Products`}),g,_);let v=o(`rue:component:anchor`);r(g,v);let y=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`UI Kit`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{children:`WordPress themes`}),e,i);let s=o(`rue:component:anchor`);r(e,s),u(p(w.Item,{children:`WordPress plugins`}),e,s);let l=a(`li`,e);r(e,l);let d=o(`rue:component:anchor`);r(l,d),u(p(w.Item,{children:`Open source`}),l,d);let f=o(`rue:component:anchor`);r(l,f);let m=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`Auth management system`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{children:`VScode theme`}),e,i);let a=o(`rue:component:anchor`);return r(e,a),u(p(w.Item,{children:`Color picker app`}),e,a),e});return u(p(w.Submenu,{children:m}),l,f),e});u(p(w.Submenu,{children:y}),g,v);let b=a(`li`,e);r(e,b);let x=o(`rue:component:anchor`);r(b,x),u(p(w.Item,{children:`Company`}),b,x);let S=o(`rue:component:anchor`);r(b,S);let C=c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{children:`About us`}),e,t);let i=o(`rue:component:anchor`);r(e,i),u(p(w.Item,{children:`Contact us`}),e,i);let a=o(`rue:component:anchor`);r(e,a),u(p(w.Item,{children:`Privacy policy`}),e,a);let s=o(`rue:component:anchor`);return r(e,s),u(p(w.Item,{children:`Press kit`}),e,s),e});return u(p(w.Submenu,{children:C}),b,S),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,pn,gn))});let $=a(`div`,s);r(s,$),m($,`component-preview not-prose text-base-content my-6 lg:my-12`);let _n=a(`h2`,$);r($,_n),m(_n,`component-preview-title mt-2 mb-1 text-lg font-semibold`),r(_n,d(`# 可折叠（响应式）`));let vn=o(`rue:component:anchor`);r($,vn),l(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});g(()=>u(e,$,vn))});let yn=o(`rue:slot:anchor`);r($,yn),l(()=>{let e=xe.value===`preview`?c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),u(p(w,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:c(()=>{let e=n(),t=o(`rue:component:anchor`);r(e,t),u(p(w.Item,{as:`button`,children:`Item 1`}),e,t);let i=a(`li`,e);r(e,i);let s=a(`details`,i);r(i,s);let c=a(`summary`,s);r(s,c),r(c,d(`Parent item`));let l=a(`ul`,s);r(s,l);let f=o(`rue:component:anchor`);r(l,f),u(p(w.Item,{as:`button`,children:`Submenu 1`}),l,f);let m=o(`rue:component:anchor`);r(l,m),u(p(w.Item,{as:`button`,children:`Submenu 2`}),l,m);let h=a(`li`,l);r(l,h);let g=a(`details`,h);r(h,g);let _=a(`summary`,g);r(g,_),r(_,d(`Parent`));let v=a(`ul`,g);r(g,v);let y=o(`rue:component:anchor`);r(v,y),u(p(w.Item,{as:`button`,children:`item 1`}),v,y);let b=o(`rue:component:anchor`);r(v,b),u(p(w.Item,{as:`button`,children:`item 2`}),v,b);let x=o(`rue:component:anchor`);return r(e,x),u(p(w.Item,{as:`button`,children:`Item 3`}),e,x),e})}),e,t),e}):c(()=>{let e=n(),t=o(`rue:component:anchor`);return r(e,t),l(()=>{let n=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});g(()=>u(n,e,t))}),e});g(()=>u(e,$,yn))});let bn=a(`h2`,s);r(s,bn),r(bn,d(`API`));let xn=a(`p`,s);r(s,xn),m(xn,`text-sm text-base-content/70`),r(xn,d("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Sn=a(`h3`,s);r(s,Sn),r(Sn,d(`Menu.Item 链接相关`));let Cn=o(`rue:component:anchor`);return r(s,Cn),l(()=>{let e=p(T,{rows:ee});g(()=>u(e,s,Cn))}),t})}),s,_),s})};export{E as default};
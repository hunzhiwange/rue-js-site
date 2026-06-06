import{$ as e,B as t,Dt as n,G as r,H as i,K as a,U as o,W as s,Z as c,at as l,c as u,ht as d,l as f,s as p,t as m,wt as h,yt as g}from"./vapor-runtime-C1rlwc61.js";import{a as _,n as v}from"./vapor-helpers-vapor-HR6N5lMH.js";import{t as y}from"./Code-BCLFq1E3.js";import{t as b}from"./src-BLzF0BqW.js";import{n as x}from"./SidebarPlaygroundDesign-DmoUIYgb.js";import{t as S}from"./tabs-BOxm6iIN.js";import{t as C}from"./badge-brlKCV7x.js";import{t as w}from"./menu-BBXvFT0s.js";var T=a=>f(l=>{let u=s(`div`,l);e(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let d=s(`table`,u);t(u,d),e(d,`table table-zebra`);let m=s(`thead`,d);t(d,m);let h=s(`tr`,m);t(m,h);let _=s(`th`,h);t(h,_),t(_,r(`属性`));let y=s(`th`,h);t(h,y),t(y,r(`说明`));let b=s(`th`,h);t(h,b),t(b,r(`类型`));let x=s(`th`,h);t(h,x),t(x,r(`默认值`));let S=s(`tbody`,d);t(d,S);let C=i(`rue:list:start`),w=i(`rue:list:end`);t(S,C),t(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(e,r,a,l,u)=>{p(f(()=>{let r=o(),a=s(`tr`,r);t(r,a),n(()=>{c(a,`key`,String(e.prop))});let l=s(`td`,a);t(a,l);let u=s(`code`,l);t(l,u);let d=i(`rue:slot:anchor`);t(u,d),n(()=>{let t=e.prop;g(()=>p(t,u,d))});let f=s(`td`,a);t(a,f);let m=i(`rue:slot:anchor`);t(f,m),n(()=>{let t=e.description;g(()=>p(t,f,m))});let h=s(`td`,a);t(a,h);let _=s(`code`,h);t(h,_);let v=i(`rue:slot:anchor`);t(_,v),n(()=>{let t=e.type;g(()=>p(t,_,v))});let y=s(`td`,a);t(a,y);let b=s(`code`,y);t(y,b);let x=i(`rue:slot:anchor`);return t(b,x),n(()=>{let t=e.defaultValue;g(()=>p(t,b,x))}),r}),r,a)}})}),u}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKeys:Te,recommendedOpenKeys:Ee,multipleSelectedKeys:De,compoundSelectedKeys:Oe,compoundOpenKeys:ke,toggleDropdownByClass:Ae,menuData:je,menuItems:Me}=_(`useSetup:0:0`,()=>h(()=>({tRecommended:_(`ref:1:0`,()=>d(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>d(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>d(`preview`)),tBasic:_(`ref:1:3`,()=>d(`preview`)),tResponsive:_(`ref:1:4`,()=>d(`preview`)),tIconOnly:_(`ref:1:5`,()=>d(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>d(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>d(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>d(`preview`)),tSizes:_(`ref:1:9`,()=>d(`preview`)),tDisabled:_(`ref:1:10`,()=>d(`preview`)),tIcons:_(`ref:1:11`,()=>d(`preview`)),tIconsBadge:_(`ref:1:12`,()=>d(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>d(`preview`)),tTitle:_(`ref:1:14`,()=>d(`preview`)),tTitleParent:_(`ref:1:15`,()=>d(`preview`)),tSubmenu:_(`ref:1:16`,()=>d(`preview`)),tCollapsible:_(`ref:1:17`,()=>d(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>d(`preview`)),tFileTree:_(`ref:1:19`,()=>d(`preview`)),tActiveItem:_(`ref:1:20`,()=>d(`preview`)),tHorizontal:_(`ref:1:21`,()=>d(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>d(`preview`)),tMega:_(`ref:1:23`,()=>d(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>d(`preview`)),tArray:_(`ref:1:25`,()=>d(`preview`)),tArrayInternal:_(`ref:1:26`,()=>d(`preview`)),tNavigation:_(`ref:1:27`,()=>d(`preview`)),recommendedSelectedKeys:_(`ref:1:28`,()=>d([`overview`])),recommendedOpenKeys:_(`ref:1:29`,()=>d([`workspace`])),multipleSelectedKeys:_(`ref:1:30`,()=>d([`mentions`,`archived`])),compoundSelectedKeys:_(`ref:1:31`,()=>d([`profile`])),compoundOpenKeys:_(`ref:1:32`,()=>d([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Ne=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:b(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:b(C,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:b(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:b(C,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:b(C,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Pe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:b(C,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:b(C,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return f(d=>{let h=o(),_=i(`rue:component:anchor`);return t(h,_),p(m(x,{children:f(()=>{let d=o(),h=s(`div`,d);t(d,h),e(h,`max-w-none prose prose-sm md:prose-base`);let _=s(`h1`,h);t(h,_),t(_,r(`Menu 菜单`));let x=s(`p`,h);t(h,x),e(x,`text-sm mt-3 mb-3`),t(x,r("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let A=s(`div`,h);t(h,A),e(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Fe=s(`h2`,A);t(A,Fe),e(Fe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Fe,r(`# 推荐：items 数据驱动导航`));let Ie=s(`p`,A);t(A,Ie),e(Ie,`mb-3 text-sm text-base-content/70`),t(Ie,r(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Le=i(`rue:component:anchor`);t(A,Le),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});g(()=>p(e,A,Le))});let Re=i(`rue:slot:anchor`);t(A,Re),n(()=>{let e=E.value===`preview`?f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(w,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:Ne,selectedKeys:Te.value,openKeys:Ee.value,onSelect:e=>Te.value=e.selectedKeys,onOpenChange:e=>Ee.value=e});g(()=>p(t,e,r))}),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});g(()=>p(t,e,r))}),e});g(()=>p(e,A,Re))});let j=s(`div`,h);t(h,j),e(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let ze=s(`h2`,j);t(j,ze),e(ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(ze,r(`# 推荐：多选、分组与分割线`));let Be=s(`p`,j);t(j,Be),e(Be,`mb-3 text-sm text-base-content/70`),t(Be,r("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let Ve=i(`rue:component:anchor`);t(j,Ve),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});g(()=>p(e,j,Ve))});let He=i(`rue:slot:anchor`);t(j,He),n(()=>{let e=te.value===`preview`?f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(w,{className:`bg-base-200 rounded-box w-80`,items:Pe,multiple:!0,selectedKeys:De.value,onSelect:e=>De.value=e.selectedKeys,onDeselect:e=>De.value=e.selectedKeys});g(()=>p(t,e,r))}),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

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
/>`});g(()=>p(t,e,r))}),e});g(()=>p(e,j,He))});let M=s(`div`,h);t(h,M),e(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ue=s(`h2`,M);t(M,Ue),e(Ue,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Ue,r(`# 推荐：组合式增强 API`));let We=s(`p`,M);t(M,We),e(We,`mb-3 text-sm text-base-content/70`),t(We,r("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ge=i(`rue:component:anchor`);t(M,Ge),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});g(()=>p(e,M,Ge))});let Ke=i(`rue:slot:anchor`);t(M,Ke),n(()=>{let e=D.value===`preview`?f(()=>{let e=o(),r=i(`rue:component:anchor`);t(e,r);let a=f(()=>{let e=o(),r=i(`rue:component:anchor`);t(e,r);let a=f(()=>{let e=o(),r=i(`rue:component:anchor`);t(e,r),n(()=>{let t=m(w.Item,{eventKey:`profile`,icon:b(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});g(()=>p(t,e,r))});let a=i(`rue:component:anchor`);return t(e,a),n(()=>{let t=m(w.Item,{eventKey:`notifications`,extra:b(C,{size:`xs`,children:`2`}),children:`Notifications`});g(()=>p(t,e,a))}),e});p(m(w.ItemGroup,{title:`Account`,children:a}),e,r);let s=i(`rue:component:anchor`);t(e,s),p(m(w.Divider,{}),e,s);let c=i(`rue:component:anchor`);t(e,c);let l=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{eventKey:`security`,children:`Security`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),e,r),e});return n(()=>{let t=m(w.SubMenu,{eventKey:`settings`,title:`Settings`,icon:b(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:l});g(()=>p(t,e,c))}),e});return n(()=>{let t=m(w,{className:`bg-base-200 rounded-box w-80`,selectedKeys:Oe.value,openKeys:ke.value,onSelect:e=>Oe.value=e.selectedKeys,onOpenChange:e=>ke.value=e,children:a});g(()=>p(t,e,r))}),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,M,Ke))});let qe=s(`div`,h);t(h,qe),e(qe,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),t(qe,r(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=s(`div`,h);t(h,N),e(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Je=s(`h2`,N);t(N,Je),e(Je,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Je,r(`# 导航跳转`));let Ye=i(`rue:component:anchor`);t(N,Ye),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});g(()=>p(e,N,Ye))});let Xe=i(`rue:slot:anchor`);t(N,Xe),n(()=>{let e=we.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),e,r);let a=i(`rue:component:anchor`);return t(e,a),p(m(w.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),e,a),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,N,Xe))});let P=s(`div`,h);t(h,P),e(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ze=s(`h2`,P);t(P,Ze),e(Ze,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Ze,r(`# Menu 通过数据渲染（数组）`));let Qe=i(`rue:component:anchor`);t(P,Qe),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});g(()=>p(e,P,Qe))});let $e=i(`rue:slot:anchor`);t(P,$e),n(()=>{let e=Se.value===`preview`?f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),p(m(w,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:f(()=>{let e=o(),r=i(`rue:list:start`),a=i(`rue:list:end`);t(e,r),t(e,a);let l=new Map;return n(()=>{l=v({items:je||[],getKey:(e,t)=>t,elements:l,parent:r.parentNode,before:a,singleRoot:!0,start:r,renderItem:(e,r,a,l,d)=>{p(f(()=>{let r=o(),a=s(`li`,r);t(r,a),n(()=>{c(a,`key`,String(d))});let l=i(`rue:component:anchor`);t(a,l),p(m(w.Item,{children:e.label}),a,l);let h=i(`rue:component:anchor`);return t(a,h),p(m(w.Submenu,{children:f(()=>{let r=o(),a=i(`rue:list:start`),l=i(`rue:list:end`);t(r,a),t(r,l);let d=new Map;return n(()=>{d=v({items:e.children||[],getKey:(e,t)=>t,elements:d,parent:a.parentNode,before:l,start:a,renderItem:(e,r,a,l,d)=>{u(f(typeof e==`string`?()=>{let r=o(),a=i(`rue:component:anchor`);return t(r,a),n(()=>{let t=m(w.Item,{key:d,children:e});g(()=>p(t,r,a))}),r}:()=>{let r=o(),a=s(`li`,r);t(r,a),n(()=>{c(a,`key`,String(d))});let l=i(`rue:component:anchor`);t(a,l),p(m(w.Item,{children:e.label}),a,l);let h=i(`rue:component:anchor`);return t(a,h),p(m(w.Submenu,{children:f(()=>{let r=o(),a=i(`rue:list:start`),s=i(`rue:list:end`);t(r,a),t(r,s);let c=new Map;return n(()=>{c=v({items:e.children||[],getKey:(e,t)=>t,elements:c,parent:a.parentNode,before:s,start:a,renderItem:(e,t,n,r,i)=>{u(m(w.Item,{key:i,children:e}),t,n,r)}})}),r})}),a,h),r}),r,a,l)}})}),r})}),a,h),r}),r,a)}})}),e})}),e,r),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,P,$e))});let F=s(`div`,h);t(h,F),e(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let et=s(`h2`,F);t(F,et),e(et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(et,r(`# Menu 通过数据渲染（数组，组件内部）`));let tt=i(`rue:component:anchor`);t(F,tt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});g(()=>p(e,F,tt))});let nt=i(`rue:slot:anchor`);t(F,nt),n(()=>{let e=Ce.value===`preview`?f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(w,{items:Me,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});g(()=>p(t,e,r))}),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});g(()=>p(t,e,r))}),e});g(()=>p(e,F,nt))});let I=s(`div`,h);t(h,I),e(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let rt=s(`h2`,I);t(I,rt),e(rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(rt,r(`# Menu`));let it=i(`rue:component:anchor`);t(I,it),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});g(()=>p(e,I,it))});let at=i(`rue:slot:anchor`);t(I,at),n(()=>{let e=ne.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Item 1`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{as:`button`,children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return t(e,a),p(m(w.Item,{as:`button`,children:`Item 3`}),e,a),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,I,at))});let L=s(`div`,h);t(h,L),e(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let ot=s(`h2`,L);t(L,ot),e(ot,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(ot,r(`# 响应式：小屏垂直，大屏水平`));let st=i(`rue:component:anchor`);t(L,st),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});g(()=>p(e,L,st))});let ct=i(`rue:slot:anchor`);t(L,ct),n(()=>{let e=re.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Item 1`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{as:`button`,children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return t(e,a),p(m(w.Item,{as:`button`,children:`Item 3`}),e,a),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,L,ct))});let R=s(`div`,h);t(h,R),e(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let lt=s(`h2`,R);t(R,lt),e(lt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(lt,r(`# 仅图标`));let ut=i(`rue:component:anchor`);t(R,ut),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});g(()=>p(e,R,ut))});let dt=i(`rue:slot:anchor`);t(R,dt),n(()=>{let r=ie.value===`preview`?f(()=>{let n=o(),r=i(`rue:component:anchor`);return t(n,r),p(m(w,{className:`bg-base-200 rounded-box`,children:f(()=>{let n=o(),r=i(`rue:component:anchor`);t(n,r);let a=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n});p(m(w.Item,{as:`button`,children:a}),n,r);let l=i(`rue:component:anchor`);t(n,l);let u=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});p(m(w.Item,{as:`button`,children:u}),n,l);let d=i(`rue:component:anchor`);t(n,d);let h=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return p(m(w.Item,{as:`button`,children:h}),n,d),n})}),n,r),n}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(r,R,dt))});let z=s(`div`,h);t(h,z),e(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let ft=s(`h2`,z);t(z,ft),e(ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(ft,r(`# 仅图标（水平）`));let pt=i(`rue:component:anchor`);t(z,pt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});g(()=>p(e,z,pt))});let mt=i(`rue:slot:anchor`);t(z,mt),n(()=>{let r=ae.value===`preview`?f(()=>{let n=o(),r=i(`rue:component:anchor`);return t(n,r),p(m(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:f(()=>{let n=o(),r=i(`rue:component:anchor`);t(n,r);let a=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),n});p(m(w.Item,{as:`button`,children:a}),n,r);let l=i(`rue:component:anchor`);t(n,l);let u=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});p(m(w.Item,{as:`button`,children:u}),n,l);let d=i(`rue:component:anchor`);t(n,d);let h=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return p(m(w.Item,{as:`button`,children:h}),n,d),n})}),n,r),n}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(r,z,mt))});let B=s(`div`,h);t(h,B),e(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let ht=s(`h2`,B);t(B,ht),e(ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(ht,r(`# 仅图标（带 tooltip）`));let gt=i(`rue:component:anchor`);t(B,gt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});g(()=>p(e,B,gt))});let _t=i(`rue:slot:anchor`);t(B,_t),n(()=>{let r=oe.value===`preview`?f(()=>{let n=o(),r=i(`rue:component:anchor`);return t(n,r),p(m(w,{className:`bg-base-200 rounded-box`,children:f(()=>{let n=o(),r=i(`rue:component:anchor`);t(n,r);let a=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),n});p(m(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:a}),n,r);let l=i(`rue:component:anchor`);t(n,l);let u=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});p(m(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:u}),n,l);let d=i(`rue:component:anchor`);t(n,d);let h=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),n});return p(m(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:h}),n,d),n})}),n,r),n}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(r,B,_t))});let V=s(`div`,h);t(h,V),e(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let vt=s(`h2`,V);t(V,vt),e(vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(vt,r(`# 仅图标（水平，tooltip）`));let yt=i(`rue:component:anchor`);t(V,yt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});g(()=>p(e,V,yt))});let bt=i(`rue:slot:anchor`);t(V,bt),n(()=>{let r=O.value===`preview`?f(()=>{let n=o(),r=i(`rue:component:anchor`);return t(n,r),p(m(w,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:f(()=>{let n=o(),r=i(`rue:component:anchor`);t(n,r);let a=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),n});p(m(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:a}),n,r);let l=i(`rue:component:anchor`);t(n,l);let u=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),n});p(m(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:u}),n,l);let d=i(`rue:component:anchor`);t(n,d);let h=f(()=>{let n=o(),r=s(`svg`,n);t(n,r),c(r,`xmlns`,`http://www.w3.org/2000/svg`),e(r,`h-5 w-5`),c(r,`fill`,`none`),c(r,`viewBox`,`0 0 24 24`),c(r,`stroke`,`currentColor`);let i=s(`path`,r);return t(r,i),c(i,`strokeLinecap`,`round`),c(i,`strokeLinejoin`,`round`),c(i,`strokeWidth`,`2`),c(i,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),n});return p(m(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:h}),n,d),n})}),n,r),n}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(r,V,bt))});let H=s(`div`,h);t(h,H),e(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let xt=s(`h2`,H);t(H,xt),e(xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(xt,r(`# Menu 尺寸`));let St=i(`rue:component:anchor`);t(H,St),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});g(()=>p(e,H,St))});let Ct=i(`rue:slot:anchor`);t(H,Ct),n(()=>{let r=se.value===`preview`?f(()=>{let n=o(),r=s(`div`,n);t(n,r),e(r,`grid gap-6`);let a=i(`rue:component:anchor`);t(r,a),p(m(w,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Xsmall 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{as:`button`,children:`Xsmall 2`}),e,r),e})}),r,a);let c=i(`rue:component:anchor`);t(r,c),p(m(w,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Small 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{as:`button`,children:`Small 2`}),e,r),e})}),r,c);let l=i(`rue:component:anchor`);t(r,l),p(m(w,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Medium 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{as:`button`,children:`Medium 2`}),e,r),e})}),r,l);let u=i(`rue:component:anchor`);t(r,u),p(m(w,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Large 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{as:`button`,children:`Large 2`}),e,r),e})}),r,u);let d=i(`rue:component:anchor`);return t(r,d),p(m(w,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Xlarge 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{as:`button`,children:`Xlarge 2`}),e,r),e})}),r,d),n}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});g(()=>p(t,e,r))}),e});g(()=>p(r,H,Ct))});let U=s(`div`,h);t(h,U),e(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let wt=s(`h2`,U);t(U,wt),e(wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(wt,r(`# 禁用项目`));let Tt=i(`rue:component:anchor`);t(U,Tt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});g(()=>p(e,U,Tt))});let Et=i(`rue:slot:anchor`);t(U,Et),n(()=>{let e=k.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Enabled item`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),e,r);let a=i(`rue:component:anchor`);return t(e,a),p(m(w.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),e,a),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,U,Et))});let W=s(`div`,h);t(h,W),e(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Dt=s(`h2`,W);t(W,Dt),e(Dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Dt,r(`# 带图标`));let Ot=i(`rue:component:anchor`);t(W,Ot),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});g(()=>p(e,W,Ot))});let kt=i(`rue:slot:anchor`);t(W,kt),n(()=>{let a=ce.value===`preview`?f(()=>{let n=o(),a=i(`rue:component:anchor`);return t(n,a),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let n=o(),a=i(`rue:component:anchor`);t(n,a);let l=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`h-5 w-5`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`stroke`,`currentColor`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t(n,r(`Item 2`)),n});p(m(w.Item,{as:`button`,children:l}),n,a);let u=i(`rue:component:anchor`);t(n,u);let d=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`h-5 w-5`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`stroke`,`currentColor`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t(n,r(`Item 1`)),n});p(m(w.Item,{as:`button`,children:d}),n,u);let h=i(`rue:component:anchor`);t(n,h);let g=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),e(i,`h-5 w-5`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`stroke`,`currentColor`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`strokeWidth`,`2`),c(a,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t(n,r(`Item 3`)),n});return p(m(w.Item,{as:`button`,children:g}),n,h),n})}),n,a),n}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(a,W,kt))});let G=s(`div`,h);t(h,G),e(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let At=s(`h2`,G);t(G,At),e(At,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(At,r(`# 带图标与徽章（响应式）`));let jt=i(`rue:component:anchor`);t(G,jt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});g(()=>p(e,G,jt))});let Mt=i(`rue:slot:anchor`);t(G,Mt),n(()=>{let u=le.value===`preview`?f(()=>{let n=o(),u=i(`rue:component:anchor`);return t(n,u),p(m(w,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:f(()=>{let n=o(),u=i(`rue:component:anchor`);t(n,u);let d=f(()=>{let n=o(),a=s(`svg`,n);t(n,a),c(a,`xmlns`,`http://www.w3.org/2000/svg`),e(a,`h-5 w-5`),c(a,`fill`,`none`),c(a,`viewBox`,`0 0 24 24`),c(a,`stroke`,`currentColor`);let l=s(`path`,a);t(a,l),c(l,`strokeLinecap`,`round`),c(l,`strokeLinejoin`,`round`),c(l,`strokeWidth`,`2`),c(l,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t(n,r(`Inbox`));let u=i(`rue:component:anchor`);return t(n,u),p(m(C,{size:`xs`,children:`99+`}),n,u),n});p(m(w.Item,{as:`button`,children:d}),n,u);let h=i(`rue:component:anchor`);t(n,h);let g=f(()=>{let n=o(),u=s(`svg`,n);t(n,u),c(u,`xmlns`,`http://www.w3.org/2000/svg`),e(u,`h-5 w-5`),c(u,`fill`,`none`),c(u,`viewBox`,`0 0 24 24`),c(u,`stroke`,`currentColor`);let d=s(`path`,u);t(u,d),c(d,`strokeLinecap`,`round`),c(d,`strokeLinejoin`,`round`),c(d,`strokeWidth`,`2`),c(d,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t(n,r(`Updates`));let f=a(n);t(n,f),l(f,` `);let h=i(`rue:component:anchor`);return t(n,h),p(m(C,{size:`xs`,variant:`warning`,children:`NEW`}),n,h),n});p(m(w.Item,{as:`button`,children:g}),n,h);let _=i(`rue:component:anchor`);t(n,_);let v=f(()=>{let e=o();t(e,r(`Stats`));let n=i(`rue:component:anchor`);return t(e,n),p(m(C,{size:`xs`,variant:`info`}),e,n),e});return p(m(w.Item,{as:`button`,children:v}),n,_),n})}),n,u),n}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(u,G,Mt))});let K=s(`div`,h);t(h,K),e(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Nt=s(`h2`,K);t(K,Nt),e(Nt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Nt,r(`# 去除内边距和圆角`));let Pt=i(`rue:component:anchor`);t(K,Pt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});g(()=>p(e,K,Pt))});let Ft=i(`rue:slot:anchor`);t(K,Ft),n(()=>{let e=ue.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Item 1`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return t(e,a),p(m(w.Item,{children:`Item 3`}),e,a),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,K,Ft))});let q=s(`div`,h);t(h,q),e(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let It=s(`h2`,q);t(q,It),e(It,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(It,r(`# 带标题`));let Lt=i(`rue:component:anchor`);t(q,Lt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});g(()=>p(e,q,Lt))});let Rt=i(`rue:slot:anchor`);t(q,Rt),n(()=>{let e=de.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Title,{children:`Title`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`Item 1`}),e,r);let a=i(`rue:component:anchor`);t(e,a),p(m(w.Item,{children:`Item 2`}),e,a);let s=i(`rue:component:anchor`);return t(e,s),p(m(w.Item,{children:`Item 3`}),e,s),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,q,Rt))});let J=s(`div`,h);t(h,J),e(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let zt=s(`h2`,J);t(J,zt),e(zt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(zt,r(`# 标题作为父级`));let Bt=i(`rue:component:anchor`);t(J,Bt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});g(()=>p(e,J,Bt))});let Vt=i(`rue:slot:anchor`);t(J,Vt),n(()=>{let e=fe.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=s(`li`,e);t(e,n);let r=i(`rue:component:anchor`);t(n,r),p(m(w.Title,{as:`h2`,children:`Title`}),n,r);let a=s(`ul`,n);t(n,a);let c=i(`rue:component:anchor`);t(a,c),p(m(w.Item,{children:`Item 1`}),a,c);let l=i(`rue:component:anchor`);t(a,l),p(m(w.Item,{children:`Item 2`}),a,l);let u=i(`rue:component:anchor`);return t(a,u),p(m(w.Item,{children:`Item 3`}),a,u),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,J,Vt))});let Y=s(`div`,h);t(h,Y),e(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ht=s(`h2`,Y);t(Y,Ht),e(Ht,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Ht,r(`# 子菜单`));let Ut=i(`rue:component:anchor`);t(Y,Ut),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});g(()=>p(e,Y,Ut))});let Wt=i(`rue:slot:anchor`);t(Y,Wt),n(()=>{let e=pe.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Item 1`}),e,n);let r=s(`li`,e);t(e,r);let a=i(`rue:component:anchor`);t(r,a),p(m(w.Item,{as:`button`,children:`Parent`}),r,a);let c=i(`rue:component:anchor`);t(r,c);let l=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Submenu 1`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{as:`button`,children:`Submenu 2`}),e,r);let a=s(`li`,e);t(e,a);let c=i(`rue:component:anchor`);t(a,c),p(m(w.Item,{as:`button`,children:`Parent`}),a,c);let l=i(`rue:component:anchor`);t(a,l);let u=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Submenu 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{as:`button`,children:`Submenu 2`}),e,r),e});return p(m(w.Submenu,{children:u}),a,l),e});p(m(w.Submenu,{children:l}),r,c);let u=i(`rue:component:anchor`);return t(e,u),p(m(w.Item,{as:`button`,children:`Item 3`}),e,u),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,Y,Wt))});let X=s(`div`,h);t(h,X),e(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Gt=s(`h2`,X);t(X,Gt),e(Gt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Gt,r(`# 可折叠子菜单`));let Kt=i(`rue:component:anchor`);t(X,Kt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});g(()=>p(e,X,Kt))});let qt=i(`rue:slot:anchor`);t(X,qt),n(()=>{let e=me.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Item 1`}),e,n);let a=s(`li`,e);t(e,a);let c=s(`details`,a);t(a,c);let l=s(`summary`,c);t(c,l),t(l,r(`Parent`));let u=s(`ul`,c);t(c,u);let d=i(`rue:component:anchor`);t(u,d),p(m(w.Item,{as:`button`,children:`Submenu 1`}),u,d);let f=i(`rue:component:anchor`);t(u,f),p(m(w.Item,{as:`button`,children:`Submenu 2`}),u,f);let h=s(`li`,u);t(u,h);let g=s(`details`,h);t(h,g);let _=s(`summary`,g);t(g,_),t(_,r(`Parent`));let v=s(`ul`,g);t(g,v);let y=i(`rue:component:anchor`);t(v,y),p(m(w.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=i(`rue:component:anchor`);t(v,b),p(m(w.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=i(`rue:component:anchor`);return t(e,x),p(m(w.Item,{as:`button`,children:`Item 3`}),e,x),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,X,qt))});let Z=s(`div`,h);t(h,Z),e(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Jt=s(`h2`,Z);t(Z,Jt),e(Jt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Jt,r(`# 通过类名控制展开（JS）`));let Yt=i(`rue:component:anchor`);t(Z,Yt),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});g(()=>p(e,Z,Yt))});let Xt=i(`rue:slot:anchor`);t(Z,Xt),n(()=>{let r=he.value===`preview`?f(()=>{let r=o(),a=s(`div`,r);t(r,a),e(a,`grid gap-6`);let c=i(`rue:component:anchor`);t(a,c),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Item 1`}),e,n);let r=s(`li`,e);t(e,r);let a=i(`rue:component:anchor`);t(r,a),p(m(w.DropdownToggle,{onClick:Ae,children:`Parent`}),r,a);let c=i(`rue:component:anchor`);t(r,c);let l=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Submenu 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{children:`Submenu 2`}),e,r),e});return p(m(w.Dropdown,{children:l}),r,c),e})}),a,c);let l=i(`rue:component:anchor`);return t(a,l),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`Item 1`}),e,r);let a=s(`li`,e);t(e,a);let c=i(`rue:component:anchor`);t(a,c),n(()=>{let e=m(w.DropdownToggle,{show:!0,onClick:Ae,children:`Parent`});g(()=>p(e,a,c))});let l=i(`rue:component:anchor`);t(a,l);let u=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Submenu 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{children:`Submenu 2`}),e,r),e});return n(()=>{let e=m(w.Dropdown,{show:!0,children:u});g(()=>p(e,a,l))}),e})}),a,l),r}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(r,Z,Xt))});let Zt=s(`div`,h);t(h,Zt),e(Zt,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qt=s(`h2`,Zt);t(Zt,Qt),e(Qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(Qt,r(`# 文件树`));let $t=i(`rue:component:anchor`);t(Zt,$t),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});g(()=>p(e,Zt,$t))});let en=i(`rue:slot:anchor`);t(Zt,en),n(()=>{let a=ge.value===`preview`?f(()=>{let n=o(),a=i(`rue:component:anchor`);return t(n,a),p(m(w,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:f(()=>{let n=o(),a=i(`rue:component:anchor`);t(n,a);let l=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`strokeWidth`,`1.5`),c(i,`stroke`,`currentColor`),e(i,`w-4 h-4`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),t(n,r(`resume.pdf`)),n});p(m(w.Item,{as:`button`,children:l}),n,a);let u=s(`li`,n);t(n,u);let d=s(`details`,u);t(u,d);let h=s(`summary`,d);t(d,h);let g=s(`svg`,h);t(h,g),c(g,`xmlns`,`http://www.w3.org/2000/svg`),c(g,`fill`,`none`),c(g,`viewBox`,`0 0 24 24`),c(g,`strokeWidth`,`1.5`),c(g,`stroke`,`currentColor`),e(g,`w-4 h-4`);let _=s(`path`,g);t(g,_),c(_,`strokeLinecap`,`round`),c(_,`strokeLinejoin`,`round`),c(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),t(h,r(`My Files`));let v=s(`ul`,d);t(d,v);let y=i(`rue:component:anchor`);t(v,y);let b=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`strokeWidth`,`1.5`),c(i,`stroke`,`currentColor`),e(i,`w-4 h-4`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),t(n,r(`Project-final.psd`)),n});p(m(w.Item,{as:`button`,children:b}),v,y);let x=i(`rue:component:anchor`);t(v,x);let S=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`strokeWidth`,`1.5`),c(i,`stroke`,`currentColor`),e(i,`w-4 h-4`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),t(n,r(`Project-final-2.psd`)),n});p(m(w.Item,{as:`button`,children:S}),v,x);let C=s(`li`,v);t(v,C);let T=s(`details`,C);t(C,T);let ee=s(`summary`,T);t(T,ee);let E=s(`svg`,ee);t(ee,E),c(E,`xmlns`,`http://www.w3.org/2000/svg`),c(E,`fill`,`none`),c(E,`viewBox`,`0 0 24 24`),c(E,`strokeWidth`,`1.5`),c(E,`stroke`,`currentColor`),e(E,`w-4 h-4`);let te=s(`path`,E);t(E,te),c(te,`strokeLinecap`,`round`),c(te,`strokeLinejoin`,`round`),c(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),t(ee,r(`Images`));let D=s(`ul`,T);t(T,D);let ne=i(`rue:component:anchor`);t(D,ne);let re=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`strokeWidth`,`1.5`),c(i,`stroke`,`currentColor`),e(i,`w-4 h-4`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),t(n,r(`Screenshot1.png`)),n});p(m(w.Item,{as:`button`,children:re}),D,ne);let ie=i(`rue:component:anchor`);t(D,ie);let ae=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`strokeWidth`,`1.5`),c(i,`stroke`,`currentColor`),e(i,`w-4 h-4`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),t(n,r(`Screenshot2.png`)),n});p(m(w.Item,{as:`button`,children:ae}),D,ie);let oe=s(`li`,D);t(D,oe);let O=s(`details`,oe);t(oe,O);let se=s(`summary`,O);t(O,se);let k=s(`svg`,se);t(se,k),c(k,`xmlns`,`http://www.w3.org/2000/svg`),c(k,`fill`,`none`),c(k,`viewBox`,`0 0 24 24`),c(k,`strokeWidth`,`1.5`),c(k,`stroke`,`currentColor`),e(k,`w-4 h-4`);let ce=s(`path`,k);t(k,ce),c(ce,`strokeLinecap`,`round`),c(ce,`strokeLinejoin`,`round`),c(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),t(se,r(`Others`));let le=s(`ul`,O);t(O,le);let ue=i(`rue:component:anchor`);t(le,ue);let de=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`strokeWidth`,`1.5`),c(i,`stroke`,`currentColor`),e(i,`w-4 h-4`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),t(n,r(`Screenshot3.png`)),n});p(m(w.Item,{as:`button`,children:de}),le,ue);let fe=i(`rue:component:anchor`);t(n,fe);let pe=f(()=>{let n=o(),i=s(`svg`,n);t(n,i),c(i,`xmlns`,`http://www.w3.org/2000/svg`),c(i,`fill`,`none`),c(i,`viewBox`,`0 0 24 24`),c(i,`strokeWidth`,`1.5`),c(i,`stroke`,`currentColor`),e(i,`w-4 h-4`);let a=s(`path`,i);return t(i,a),c(a,`strokeLinecap`,`round`),c(a,`strokeLinejoin`,`round`),c(a,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),t(n,r(`reports-final-2.pdf`)),n});return p(m(w.Item,{as:`button`,children:pe}),n,fe),n})}),n,a),n}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(a,Zt,en))});let Q=s(`div`,h);t(h,Q),e(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let tn=s(`h2`,Q);t(Q,tn),e(tn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(tn,r(`# 激活项`));let nn=i(`rue:component:anchor`);t(Q,nn),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});g(()=>p(e,Q,nn))});let rn=i(`rue:slot:anchor`);t(Q,rn),n(()=>{let e=_e.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`bg-base-200 rounded-box w-56`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Item 1`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{className:`menu-active`,children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return t(e,a),p(m(w.Item,{children:`Item 3`}),e,a),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,Q,rn))});let an=s(`div`,h);t(h,an),e(an,`component-preview not-prose text-base-content my-6 lg:my-12`);let on=s(`h2`,an);t(an,on),e(on,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(on,r(`# 水平菜单`));let sn=i(`rue:component:anchor`);t(an,sn),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});g(()=>p(e,an,sn))});let cn=i(`rue:slot:anchor`);t(an,cn),n(()=>{let e=ve.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Item 1`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`Item 2`}),e,r);let a=i(`rue:component:anchor`);return t(e,a),p(m(w.Item,{children:`Item 3`}),e,a),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,an,cn))});let ln=s(`div`,h);t(h,ln),e(ln,`component-preview not-prose text-base-content my-6 lg:my-12`);let un=s(`h2`,ln);t(ln,un),e(un,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(un,r(`# 水平子菜单`));let dn=i(`rue:component:anchor`);t(ln,dn),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});g(()=>p(e,ln,dn))});let fn=i(`rue:slot:anchor`);t(ln,fn),n(()=>{let e=ye.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Item 1`}),e,n);let r=s(`li`,e);t(e,r);let a=i(`rue:component:anchor`);t(r,a),p(m(w.Item,{children:`Parent`}),r,a);let c=i(`rue:component:anchor`);t(r,c);let l=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Submenu 1`}),e,n);let r=i(`rue:component:anchor`);return t(e,r),p(m(w.Item,{children:`Submenu 2`}),e,r),e});p(m(w.Submenu,{children:l}),r,c);let u=i(`rue:component:anchor`);return t(e,u),p(m(w.Item,{children:`Item 3`}),e,u),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,ln,fn))});let pn=s(`div`,h);t(h,pn),e(pn,`component-preview not-prose text-base-content my-6 lg:my-12`);let mn=s(`h2`,pn);t(pn,mn),e(mn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(mn,r(`# Mega 菜单（响应式）`));let hn=i(`rue:component:anchor`);t(pn,hn),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});g(()=>p(e,pn,hn))});let gn=i(`rue:slot:anchor`);t(pn,gn),n(()=>{let e=be.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:f(()=>{let e=o(),n=s(`li`,e);t(e,n);let r=i(`rue:component:anchor`);t(n,r),p(m(w.Item,{children:`Solutions`}),n,r);let a=i(`rue:component:anchor`);t(n,a);let c=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Design`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`Development`}),e,r);let a=i(`rue:component:anchor`);t(e,a),p(m(w.Item,{children:`Hosting`}),e,a);let s=i(`rue:component:anchor`);return t(e,s),p(m(w.Item,{children:`Domain register`}),e,s),e});p(m(w.Submenu,{children:c}),n,a);let l=s(`li`,e);t(e,l);let u=i(`rue:component:anchor`);t(l,u),p(m(w.Item,{children:`Enterprise`}),l,u);let d=i(`rue:component:anchor`);t(l,d);let h=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`CRM software`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`Marketing management`}),e,r);let a=i(`rue:component:anchor`);t(e,a),p(m(w.Item,{children:`Security`}),e,a);let s=i(`rue:component:anchor`);return t(e,s),p(m(w.Item,{children:`Consulting`}),e,s),e});p(m(w.Submenu,{children:h}),l,d);let g=s(`li`,e);t(e,g);let _=i(`rue:component:anchor`);t(g,_),p(m(w.Item,{children:`Products`}),g,_);let v=i(`rue:component:anchor`);t(g,v);let y=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`UI Kit`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`WordPress themes`}),e,r);let a=i(`rue:component:anchor`);t(e,a),p(m(w.Item,{children:`WordPress plugins`}),e,a);let c=s(`li`,e);t(e,c);let l=i(`rue:component:anchor`);t(c,l),p(m(w.Item,{children:`Open source`}),c,l);let u=i(`rue:component:anchor`);t(c,u);let d=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`Auth management system`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`VScode theme`}),e,r);let a=i(`rue:component:anchor`);return t(e,a),p(m(w.Item,{children:`Color picker app`}),e,a),e});return p(m(w.Submenu,{children:d}),c,u),e});p(m(w.Submenu,{children:y}),g,v);let b=s(`li`,e);t(e,b);let x=i(`rue:component:anchor`);t(b,x),p(m(w.Item,{children:`Company`}),b,x);let S=i(`rue:component:anchor`);t(b,S);let C=f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{children:`About us`}),e,n);let r=i(`rue:component:anchor`);t(e,r),p(m(w.Item,{children:`Contact us`}),e,r);let a=i(`rue:component:anchor`);t(e,a),p(m(w.Item,{children:`Privacy policy`}),e,a);let s=i(`rue:component:anchor`);return t(e,s),p(m(w.Item,{children:`Press kit`}),e,s),e});return p(m(w.Submenu,{children:C}),b,S),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,pn,gn))});let $=s(`div`,h);t(h,$),e($,`component-preview not-prose text-base-content my-6 lg:my-12`);let _n=s(`h2`,$);t($,_n),e(_n,`component-preview-title mt-2 mb-1 text-lg font-semibold`),t(_n,r(`# 可折叠（响应式）`));let vn=i(`rue:component:anchor`);t($,vn),n(()=>{let e=m(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});g(()=>p(e,$,vn))});let yn=i(`rue:slot:anchor`);t($,yn),n(()=>{let e=xe.value===`preview`?f(()=>{let e=o(),n=i(`rue:component:anchor`);return t(e,n),p(m(w,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:f(()=>{let e=o(),n=i(`rue:component:anchor`);t(e,n),p(m(w.Item,{as:`button`,children:`Item 1`}),e,n);let a=s(`li`,e);t(e,a);let c=s(`details`,a);t(a,c);let l=s(`summary`,c);t(c,l),t(l,r(`Parent item`));let u=s(`ul`,c);t(c,u);let d=i(`rue:component:anchor`);t(u,d),p(m(w.Item,{as:`button`,children:`Submenu 1`}),u,d);let f=i(`rue:component:anchor`);t(u,f),p(m(w.Item,{as:`button`,children:`Submenu 2`}),u,f);let h=s(`li`,u);t(u,h);let g=s(`details`,h);t(h,g);let _=s(`summary`,g);t(g,_),t(_,r(`Parent`));let v=s(`ul`,g);t(g,v);let y=i(`rue:component:anchor`);t(v,y),p(m(w.Item,{as:`button`,children:`item 1`}),v,y);let b=i(`rue:component:anchor`);t(v,b),p(m(w.Item,{as:`button`,children:`item 2`}),v,b);let x=i(`rue:component:anchor`);return t(e,x),p(m(w.Item,{as:`button`,children:`Item 3`}),e,x),e})}),e,n),e}):f(()=>{let e=o(),r=i(`rue:component:anchor`);return t(e,r),n(()=>{let t=m(y,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});g(()=>p(t,e,r))}),e});g(()=>p(e,$,yn))});let bn=s(`h2`,h);t(h,bn),t(bn,r(`API`));let xn=s(`p`,h);t(h,xn),e(xn,`text-sm text-base-content/70`),t(xn,r("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Sn=s(`h3`,h);t(h,Sn),t(Sn,r(`Menu.Item 链接相关`));let Cn=i(`rue:component:anchor`);return t(h,Cn),n(()=>{let e=m(T,{rows:ee});g(()=>p(e,h,Cn))}),d})}),h,_),h})};export{E as default};
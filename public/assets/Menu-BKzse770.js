import{$ as e,Q as t,Qt as n,Wt as r,X as i,Yt as a,et as o,ht as s,l as c,lt as l,nt as u,o as d,s as f,st as p,t as m,tt as h,zt as g}from"./vapor-runtime-CXIalONM.js";import{a as _,n as v}from"./vapor-helpers-vapor-CoXKrGmY.js";import{i as y}from"./persistentSidebarPlayground-DBDp2zjv.js";import{t as b}from"./Code-BIscIyEp.js";import{t as x}from"./tabs-CZWMQq5i.js";import{t as S}from"./badge-yUyMWmRO.js";import{t as C}from"./menu-DH0y5hfE.js";import{r as w}from"./SidebarPlaygroundDesign-CsC_YS7V.js";var T=a=>c(s=>{let u=o(`div`,s);l(u,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let f=o(`table`,u);i(u,f),l(f,`table table-zebra`);let m=o(`thead`,f);i(f,m);let g=o(`tr`,m);i(m,g);let _=o(`th`,g);i(g,_),i(_,h(`属性`));let y=o(`th`,g);i(g,y),i(y,h(`说明`));let b=o(`th`,g);i(g,b),i(b,h(`类型`));let x=o(`th`,g);i(g,x),i(x,h(`默认值`));let S=o(`tbody`,f);i(f,S);let C=t(`rue:list:start`),w=t(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return n(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(a,s,l,u,f)=>{d(c(()=>{let s=e(),c=o(`tr`,s);i(s,c),n(()=>{p(c,`key`,String(a.prop))});let l=o(`td`,c);i(c,l);let u=o(`code`,l);i(l,u);let f=t(`rue:slot:anchor`);i(u,f),n(()=>{let e=a.prop;r(()=>d(e,u,f))});let m=o(`td`,c);i(c,m);let h=t(`rue:slot:anchor`);i(m,h),n(()=>{let e=a.description;r(()=>d(e,m,h))});let g=o(`td`,c);i(c,g);let _=o(`code`,g);i(g,_);let v=t(`rue:slot:anchor`);i(_,v),n(()=>{let e=a.type;r(()=>d(e,_,v))});let y=o(`td`,c);i(c,y);let b=o(`code`,y);i(y,b);let x=t(`rue:slot:anchor`);return i(b,x),n(()=>{let e=a.defaultValue;r(()=>d(e,b,x))}),s}),s,l)}})}),u}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKey:Te,recommendedOpenKeys:Ee,compoundSelectedKeys:De,compoundOpenKeys:Oe,recommendedMenuClassName:ke,fileTreeMenuClassName:Ae,toggleDropdownByClass:je,menuData:Me,menuItems:Ne}=_(`useSetup:0:0`,()=>a(()=>({tRecommended:_(`ref:1:0`,()=>g(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>g(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>g(`preview`)),tBasic:_(`ref:1:3`,()=>g(`preview`)),tResponsive:_(`ref:1:4`,()=>g(`preview`)),tIconOnly:_(`ref:1:5`,()=>g(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>g(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>g(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>g(`preview`)),tSizes:_(`ref:1:9`,()=>g(`preview`)),tDisabled:_(`ref:1:10`,()=>g(`preview`)),tIcons:_(`ref:1:11`,()=>g(`preview`)),tIconsBadge:_(`ref:1:12`,()=>g(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>g(`preview`)),tTitle:_(`ref:1:14`,()=>g(`preview`)),tTitleParent:_(`ref:1:15`,()=>g(`preview`)),tSubmenu:_(`ref:1:16`,()=>g(`preview`)),tCollapsible:_(`ref:1:17`,()=>g(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>g(`preview`)),tFileTree:_(`ref:1:19`,()=>g(`preview`)),tActiveItem:_(`ref:1:20`,()=>g(`preview`)),tHorizontal:_(`ref:1:21`,()=>g(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>g(`preview`)),tMega:_(`ref:1:23`,()=>g(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>g(`preview`)),tArray:_(`ref:1:25`,()=>g(`preview`)),tArrayInternal:_(`ref:1:26`,()=>g(`preview`)),tNavigation:_(`ref:1:27`,()=>g(`preview`)),recommendedSelectedKey:_(`ref:1:28`,()=>g(`overview`)),recommendedOpenKeys:_(`ref:1:29`,()=>g([`workspace`])),compoundSelectedKeys:_(`ref:1:30`,()=>g([`profile`])),compoundOpenKeys:_(`ref:1:31`,()=>g([`settings`])),recommendedMenuClassName:`bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content`,fileTreeMenuClassName:`bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0`,toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Pe=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Fe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return c(a=>{let g=e(),_=t(`rue:component:anchor`);return i(g,_),d(m(w,{children:c(()=>{let a=e(),g=o(`div`,a);i(a,g),l(g,`max-w-none prose prose-sm md:prose-base`);let _=o(`h1`,g);i(g,_),i(_,h(`Menu 菜单`));let w=o(`p`,g);i(g,w),l(w,`text-sm mt-3 mb-3`),i(w,h("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let A=o(`div`,g);i(g,A),l(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ie=o(`h2`,A);i(A,Ie),l(Ie,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ie,h(`# 推荐：items 数据驱动导航`));let Le=o(`p`,A);i(A,Le),l(Le,`mb-3 text-sm text-base-content/70`),i(Le,h(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Re=t(`rue:component:anchor`);i(A,Re),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});r(()=>d(e,A,Re))});let ze=t(`rue:slot:anchor`);i(A,ze),n(()=>{let a=E.value===`preview`?c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(C,{mode:`inline`,className:ke,items:Pe,selectedKeys:[Te.value],openKeys:Ee.value,onSelect:e=>Te.value=String(e.key),onOpenChange:e=>Ee.value=e});r(()=>d(e,a,o))}),a}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});r(()=>d(e,a,o))}),a});r(()=>d(a,A,ze))});let j=o(`div`,g);i(g,j),l(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Be=o(`h2`,j);i(j,Be),l(Be,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Be,h(`# 推荐：多选、分组与分割线`));let Ve=o(`p`,j);i(j,Ve),l(Ve,`mb-3 text-sm text-base-content/70`),i(Ve,h("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let He=t(`rue:component:anchor`);i(j,He),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});r(()=>d(e,j,He))});let Ue=t(`rue:slot:anchor`);i(j,Ue),n(()=>{let a=te.value===`preview`?c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(C,{className:`bg-base-200 rounded-box w-80`,items:Fe,multiple:!0,defaultSelectedKeys:[`mentions`,`archived`]});r(()=>d(e,a,o))}),a}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`const items = [
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
/>`});r(()=>d(e,a,o))}),a});r(()=>d(a,j,Ue))});let M=o(`div`,g);i(g,M),l(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let We=o(`h2`,M);i(M,We),l(We,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(We,h(`# 推荐：组合式增强 API`));let Ge=o(`p`,M);i(M,Ge),l(Ge,`mb-3 text-sm text-base-content/70`),i(Ge,h("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ke=t(`rue:component:anchor`);i(M,Ke),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});r(()=>d(e,M,Ke))});let qe=t(`rue:slot:anchor`);i(M,qe),n(()=>{let a=D.value===`preview`?c(()=>{let a=e(),o=t(`rue:component:anchor`);i(a,o);let s=c(()=>{let a=e(),o=t(`rue:component:anchor`);i(a,o);let s=c(()=>{let a=e(),o=t(`rue:component:anchor`);i(a,o),n(()=>{let e=m(C.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});r(()=>d(e,a,o))});let s=t(`rue:component:anchor`);return i(a,s),n(()=>{let e=m(C.Item,{eventKey:`notifications`,extra:y(S,{size:`xs`,children:`2`}),children:`Notifications`});r(()=>d(e,a,s))}),a});d(m(C.ItemGroup,{title:`Account`,children:s}),a,o);let l=t(`rue:component:anchor`);i(a,l),d(m(C.Divider,{}),a,l);let u=t(`rue:component:anchor`);i(a,u);let f=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{eventKey:`security`,children:`Security`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),n,a),n});return n(()=>{let e=m(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:f});r(()=>d(e,a,u))}),a});return n(()=>{let e=m(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:De.value,openKeys:Oe.value,onSelect:e=>De.value=e.selectedKeys,onOpenChange:e=>Oe.value=e,children:s});r(()=>d(e,a,o))}),a}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,M,qe))});let Je=o(`div`,g);i(g,Je),l(Je,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),i(Je,h(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=o(`div`,g);i(g,N),l(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ye=o(`h2`,N);i(N,Ye),l(Ye,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ye,h(`# 导航跳转`));let Xe=t(`rue:component:anchor`);i(N,Xe),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});r(()=>d(e,N,Xe))});let Ze=t(`rue:slot:anchor`);i(N,Ze),n(()=>{let a=we.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),n,a);let o=t(`rue:component:anchor`);return i(n,o),d(m(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),n,o),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,N,Ze))});let P=o(`div`,g);i(g,P),l(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qe=o(`h2`,P);i(P,Qe),l(Qe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Qe,h(`# Menu 通过数据渲染（数组）`));let $e=t(`rue:component:anchor`);i(P,$e),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});r(()=>d(e,P,$e))});let et=t(`rue:slot:anchor`);i(P,et),n(()=>{let a=Se.value===`preview`?c(()=>{let a=e(),s=t(`rue:component:anchor`);return i(a,s),d(m(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:c(()=>{let a=e(),s=t(`rue:list:start`),l=t(`rue:list:end`);i(a,s),i(a,l);let u=new Map;return n(()=>{u=v({items:Me||[],getKey:(e,t)=>t,elements:u,parent:s.parentNode,before:l,singleRoot:!0,start:s,renderItem:(a,s,l,u,h)=>{d(c(()=>{let s=e(),l=o(`li`,s);i(s,l),n(()=>{p(l,`key`,String(h))});let u=t(`rue:component:anchor`);i(l,u),d(m(C.Item,{children:a.label}),l,u);let g=t(`rue:component:anchor`);return i(l,g),d(m(C.Submenu,{children:c(()=>{let s=e(),l=t(`rue:list:start`),u=t(`rue:list:end`);i(s,l),i(s,u);let h=new Map;return n(()=>{h=v({items:a.children||[],getKey:(e,t)=>t,elements:h,parent:l.parentNode,before:u,start:l,renderItem:(a,s,l,u,h)=>{f(c(typeof a==`string`?()=>{let o=e(),s=t(`rue:component:anchor`);return i(o,s),n(()=>{let e=m(C.Item,{key:h,children:a});r(()=>d(e,o,s))}),o}:()=>{let r=e(),s=o(`li`,r);i(r,s),n(()=>{p(s,`key`,String(h))});let l=t(`rue:component:anchor`);i(s,l),d(m(C.Item,{children:a.label}),s,l);let u=t(`rue:component:anchor`);return i(s,u),d(m(C.Submenu,{children:c(()=>{let r=e(),o=t(`rue:list:start`),s=t(`rue:list:end`);i(r,o),i(r,s);let c=new Map;return n(()=>{c=v({items:a.children||[],getKey:(e,t)=>t,elements:c,parent:o.parentNode,before:s,start:o,renderItem:(e,t,n,r,i)=>{f(m(C.Item,{key:i,children:e}),t,n,r)}})}),r})}),s,u),r}),s,l,u)}})}),s})}),l,g),s}),s,l)}})}),a})}),a,s),a}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,P,et))});let F=o(`div`,g);i(g,F),l(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let tt=o(`h2`,F);i(F,tt),l(tt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(tt,h(`# Menu 通过数据渲染（数组，组件内部）`));let nt=t(`rue:component:anchor`);i(F,nt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});r(()=>d(e,F,nt))});let rt=t(`rue:slot:anchor`);i(F,rt),n(()=>{let a=Ce.value===`preview`?c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(C,{items:Ne,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});r(()=>d(e,a,o))}),a}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});r(()=>d(e,a,o))}),a});r(()=>d(a,F,rt))});let I=o(`div`,g);i(g,I),l(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let it=o(`h2`,I);i(I,it),l(it,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(it,h(`# Menu`));let at=t(`rue:component:anchor`);i(I,at),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});r(()=>d(e,I,at))});let ot=t(`rue:slot:anchor`);i(I,ot),n(()=>{let a=ne.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Item 1`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{as:`button`,children:`Item 2`}),n,a);let o=t(`rue:component:anchor`);return i(n,o),d(m(C.Item,{as:`button`,children:`Item 3`}),n,o),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,I,ot))});let st=o(`div`,g);i(g,st),l(st,`component-preview not-prose text-base-content my-6 lg:my-12`);let ct=o(`h2`,st);i(st,ct),l(ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(ct,h(`# 响应式：小屏垂直，大屏水平`));let lt=t(`rue:component:anchor`);i(st,lt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});r(()=>d(e,st,lt))});let ut=t(`rue:slot:anchor`);i(st,ut),n(()=>{let a=re.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Item 1`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{as:`button`,children:`Item 2`}),n,a);let o=t(`rue:component:anchor`);return i(n,o),d(m(C.Item,{as:`button`,children:`Item 3`}),n,o),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,st,ut))});let L=o(`div`,g);i(g,L),l(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let dt=o(`h2`,L);i(L,dt),l(dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(dt,h(`# 仅图标`));let ft=t(`rue:component:anchor`);i(L,ft),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});r(()=>d(e,L,ft))});let pt=t(`rue:slot:anchor`);i(L,pt),n(()=>{let a=ie.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let a=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});d(m(C.Item,{as:`button`,children:a}),n,r);let s=t(`rue:component:anchor`);i(n,s);let u=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});d(m(C.Item,{as:`button`,children:u}),n,s);let f=t(`rue:component:anchor`);i(n,f);let h=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return d(m(C.Item,{as:`button`,children:h}),n,f),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,L,pt))});let R=o(`div`,g);i(g,R),l(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let mt=o(`h2`,R);i(R,mt),l(mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(mt,h(`# 仅图标（水平）`));let ht=t(`rue:component:anchor`);i(R,ht),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});r(()=>d(e,R,ht))});let gt=t(`rue:slot:anchor`);i(R,gt),n(()=>{let a=ae.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let a=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});d(m(C.Item,{as:`button`,children:a}),n,r);let s=t(`rue:component:anchor`);i(n,s);let u=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});d(m(C.Item,{as:`button`,children:u}),n,s);let f=t(`rue:component:anchor`);i(n,f);let h=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return d(m(C.Item,{as:`button`,children:h}),n,f),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,R,gt))});let z=o(`div`,g);i(g,z),l(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let _t=o(`h2`,z);i(z,_t),l(_t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(_t,h(`# 仅图标（带 tooltip）`));let vt=t(`rue:component:anchor`);i(z,vt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});r(()=>d(e,z,vt))});let yt=t(`rue:slot:anchor`);i(z,yt),n(()=>{let a=oe.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let a=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),t});d(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:a}),n,r);let s=t(`rue:component:anchor`);i(n,s);let u=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});d(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:u}),n,s);let f=t(`rue:component:anchor`);i(n,f);let h=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return d(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:h}),n,f),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,z,yt))});let B=o(`div`,g);i(g,B),l(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let bt=o(`h2`,B);i(B,bt),l(bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(bt,h(`# 仅图标（水平，tooltip）`));let xt=t(`rue:component:anchor`);i(B,xt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});r(()=>d(e,B,xt))});let St=t(`rue:slot:anchor`);i(B,St),n(()=>{let a=O.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let a=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),t});d(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:a}),n,r);let s=t(`rue:component:anchor`);i(n,s);let u=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});d(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:u}),n,s);let f=t(`rue:component:anchor`);i(n,f);let h=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),t});return d(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:h}),n,f),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,B,St))});let V=o(`div`,g);i(g,V),l(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ct=o(`h2`,V);i(V,Ct),l(Ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ct,h(`# Menu 尺寸`));let wt=t(`rue:component:anchor`);i(V,wt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});r(()=>d(e,V,wt))});let Tt=t(`rue:slot:anchor`);i(V,Tt),n(()=>{let a=se.value===`preview`?c(()=>{let n=e(),r=o(`div`,n);i(n,r),l(r,`grid gap-6`);let a=t(`rue:component:anchor`);i(r,a),d(m(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Xsmall 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{as:`button`,children:`Xsmall 2`}),n,a),n})}),r,a);let s=t(`rue:component:anchor`);i(r,s),d(m(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Small 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{as:`button`,children:`Small 2`}),n,a),n})}),r,s);let u=t(`rue:component:anchor`);i(r,u),d(m(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Medium 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{as:`button`,children:`Medium 2`}),n,a),n})}),r,u);let f=t(`rue:component:anchor`);i(r,f),d(m(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Large 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{as:`button`,children:`Large 2`}),n,a),n})}),r,f);let p=t(`rue:component:anchor`);return i(r,p),d(m(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Xlarge 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{as:`button`,children:`Xlarge 2`}),n,a),n})}),r,p),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});r(()=>d(e,a,o))}),a});r(()=>d(a,V,Tt))});let H=o(`div`,g);i(g,H),l(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let Et=o(`h2`,H);i(H,Et),l(Et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Et,h(`# 禁用项目`));let Dt=t(`rue:component:anchor`);i(H,Dt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});r(()=>d(e,H,Dt))});let Ot=t(`rue:slot:anchor`);i(H,Ot),n(()=>{let a=k.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Enabled item`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),n,a);let o=t(`rue:component:anchor`);return i(n,o),d(m(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),n,o),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,H,Ot))});let U=o(`div`,g);i(g,U),l(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let kt=o(`h2`,U);i(U,kt),l(kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(kt,h(`# 带图标`));let At=t(`rue:component:anchor`);i(U,At),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});r(()=>d(e,U,At))});let jt=t(`rue:slot:anchor`);i(U,jt),n(()=>{let a=ce.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let a=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),i(t,h(`Item 2`)),t});d(m(C.Item,{as:`button`,children:a}),n,r);let s=t(`rue:component:anchor`);i(n,s);let u=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),i(t,h(`Item 1`)),t});d(m(C.Item,{as:`button`,children:u}),n,s);let f=t(`rue:component:anchor`);i(n,f);let g=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),l(n,`h-5 w-5`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`stroke`,`currentColor`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`strokeWidth`,`2`),p(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),i(t,h(`Item 3`)),t});return d(m(C.Item,{as:`button`,children:g}),n,f),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,U,jt))});let W=o(`div`,g);i(g,W),l(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Mt=o(`h2`,W);i(W,Mt),l(Mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Mt,h(`# 带图标与徽章（响应式）`));let Nt=t(`rue:component:anchor`);i(W,Nt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});r(()=>d(e,W,Nt))});let Pt=t(`rue:slot:anchor`);i(W,Pt),n(()=>{let a=le.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let a=c(()=>{let n=e(),r=o(`svg`,n);i(n,r),p(r,`xmlns`,`http://www.w3.org/2000/svg`),l(r,`h-5 w-5`),p(r,`fill`,`none`),p(r,`viewBox`,`0 0 24 24`),p(r,`stroke`,`currentColor`);let a=o(`path`,r);i(r,a),p(a,`strokeLinecap`,`round`),p(a,`strokeLinejoin`,`round`),p(a,`strokeWidth`,`2`),p(a,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),i(n,h(`Inbox`));let s=t(`rue:component:anchor`);return i(n,s),d(m(S,{size:`xs`,children:`99+`}),n,s),n});d(m(C.Item,{as:`button`,children:a}),n,r);let f=t(`rue:component:anchor`);i(n,f);let g=c(()=>{let n=e(),r=o(`svg`,n);i(n,r),p(r,`xmlns`,`http://www.w3.org/2000/svg`),l(r,`h-5 w-5`),p(r,`fill`,`none`),p(r,`viewBox`,`0 0 24 24`),p(r,`stroke`,`currentColor`);let a=o(`path`,r);i(r,a),p(a,`strokeLinecap`,`round`),p(a,`strokeLinejoin`,`round`),p(a,`strokeWidth`,`2`),p(a,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),i(n,h(`Updates`));let c=u(n);i(n,c),s(c,` `);let f=t(`rue:component:anchor`);return i(n,f),d(m(S,{size:`xs`,variant:`warning`,children:`NEW`}),n,f),n});d(m(C.Item,{as:`button`,children:g}),n,f);let _=t(`rue:component:anchor`);i(n,_);let v=c(()=>{let n=e();i(n,h(`Stats`));let r=t(`rue:component:anchor`);return i(n,r),d(m(S,{size:`xs`,variant:`info`}),n,r),n});return d(m(C.Item,{as:`button`,children:v}),n,_),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,W,Pt))});let G=o(`div`,g);i(g,G),l(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ft=o(`h2`,G);i(G,Ft),l(Ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ft,h(`# 去除内边距和圆角`));let It=t(`rue:component:anchor`);i(G,It),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});r(()=>d(e,G,It))});let Lt=t(`rue:slot:anchor`);i(G,Lt),n(()=>{let a=ue.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Item 1`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{children:`Item 2`}),n,a);let o=t(`rue:component:anchor`);return i(n,o),d(m(C.Item,{children:`Item 3`}),n,o),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,G,Lt))});let K=o(`div`,g);i(g,K),l(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Rt=o(`h2`,K);i(K,Rt),l(Rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Rt,h(`# 带标题`));let zt=t(`rue:component:anchor`);i(K,zt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});r(()=>d(e,K,zt))});let Bt=t(`rue:slot:anchor`);i(K,Bt),n(()=>{let a=de.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Title,{children:`Title`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{children:`Item 1`}),n,a);let o=t(`rue:component:anchor`);i(n,o),d(m(C.Item,{children:`Item 2`}),n,o);let s=t(`rue:component:anchor`);return i(n,s),d(m(C.Item,{children:`Item 3`}),n,s),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,K,Bt))});let q=o(`div`,g);i(g,q),l(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Vt=o(`h2`,q);i(q,Vt),l(Vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Vt,h(`# 标题作为父级`));let Ht=t(`rue:component:anchor`);i(q,Ht),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});r(()=>d(e,q,Ht))});let Ut=t(`rue:slot:anchor`);i(q,Ut),n(()=>{let a=fe.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=o(`li`,n);i(n,r);let a=t(`rue:component:anchor`);i(r,a),d(m(C.Title,{as:`h2`,children:`Title`}),r,a);let s=o(`ul`,r);i(r,s);let c=t(`rue:component:anchor`);i(s,c),d(m(C.Item,{children:`Item 1`}),s,c);let l=t(`rue:component:anchor`);i(s,l),d(m(C.Item,{children:`Item 2`}),s,l);let u=t(`rue:component:anchor`);return i(s,u),d(m(C.Item,{children:`Item 3`}),s,u),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,q,Ut))});let J=o(`div`,g);i(g,J),l(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Wt=o(`h2`,J);i(J,Wt),l(Wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Wt,h(`# 子菜单`));let Gt=t(`rue:component:anchor`);i(J,Gt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});r(()=>d(e,J,Gt))});let Kt=t(`rue:slot:anchor`);i(J,Kt),n(()=>{let a=pe.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Item 1`}),n,r);let a=o(`li`,n);i(n,a);let s=t(`rue:component:anchor`);i(a,s),d(m(C.Item,{as:`button`,children:`Parent`}),a,s);let l=t(`rue:component:anchor`);i(a,l);let u=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Submenu 1`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{as:`button`,children:`Submenu 2`}),n,a);let s=o(`li`,n);i(n,s);let l=t(`rue:component:anchor`);i(s,l),d(m(C.Item,{as:`button`,children:`Parent`}),s,l);let u=t(`rue:component:anchor`);i(s,u);let f=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Submenu 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{as:`button`,children:`Submenu 2`}),n,a),n});return d(m(C.Submenu,{children:f}),s,u),n});d(m(C.Submenu,{children:u}),a,l);let f=t(`rue:component:anchor`);return i(n,f),d(m(C.Item,{as:`button`,children:`Item 3`}),n,f),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,J,Kt))});let Y=o(`div`,g);i(g,Y),l(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let qt=o(`h2`,Y);i(Y,qt),l(qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(qt,h(`# 可折叠子菜单`));let Jt=t(`rue:component:anchor`);i(Y,Jt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});r(()=>d(e,Y,Jt))});let Yt=t(`rue:slot:anchor`);i(Y,Yt),n(()=>{let a=me.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Item 1`}),n,r);let a=o(`li`,n);i(n,a);let s=o(`details`,a);i(a,s);let c=o(`summary`,s);i(s,c),i(c,h(`Parent`));let l=o(`ul`,s);i(s,l);let u=t(`rue:component:anchor`);i(l,u),d(m(C.Item,{as:`button`,children:`Submenu 1`}),l,u);let f=t(`rue:component:anchor`);i(l,f),d(m(C.Item,{as:`button`,children:`Submenu 2`}),l,f);let p=o(`li`,l);i(l,p);let g=o(`details`,p);i(p,g);let _=o(`summary`,g);i(g,_),i(_,h(`Parent`));let v=o(`ul`,g);i(g,v);let y=t(`rue:component:anchor`);i(v,y),d(m(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=t(`rue:component:anchor`);i(v,b),d(m(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=t(`rue:component:anchor`);return i(n,x),d(m(C.Item,{as:`button`,children:`Item 3`}),n,x),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,Y,Yt))});let X=o(`div`,g);i(g,X),l(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xt=o(`h2`,X);i(X,Xt),l(Xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Xt,h(`# 通过类名控制展开（JS）`));let Zt=t(`rue:component:anchor`);i(X,Zt),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});r(()=>d(e,X,Zt))});let Qt=t(`rue:slot:anchor`);i(X,Qt),n(()=>{let a=he.value===`preview`?c(()=>{let a=e(),s=o(`div`,a);i(a,s),l(s,`grid gap-6`);let u=t(`rue:component:anchor`);i(s,u),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Item 1`}),n,r);let a=o(`li`,n);i(n,a);let s=t(`rue:component:anchor`);i(a,s),d(m(C.DropdownToggle,{onClick:je,children:`Parent`}),a,s);let l=t(`rue:component:anchor`);i(a,l);let u=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Submenu 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{children:`Submenu 2`}),n,a),n});return d(m(C.Dropdown,{children:u}),a,l),n})}),s,u);let f=t(`rue:component:anchor`);return i(s,f),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let a=e(),s=t(`rue:component:anchor`);i(a,s),d(m(C.Item,{children:`Item 1`}),a,s);let l=o(`li`,a);i(a,l);let u=t(`rue:component:anchor`);i(l,u),n(()=>{let e=m(C.DropdownToggle,{show:!0,onClick:je,children:`Parent`});r(()=>d(e,l,u))});let f=t(`rue:component:anchor`);i(l,f);let p=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Submenu 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{children:`Submenu 2`}),n,a),n});return n(()=>{let e=m(C.Dropdown,{show:!0,children:p});r(()=>d(e,l,f))}),a})}),s,f),a}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,X,Qt))});let Z=o(`div`,g);i(g,Z),l(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let $t=o(`h2`,Z);i(Z,$t),l($t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i($t,h(`# 文件树`));let en=t(`rue:component:anchor`);i(Z,en),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});r(()=>d(e,Z,en))});let tn=t(`rue:slot:anchor`);i(Z,tn),n(()=>{let a=ge.value===`preview`?c(()=>{let a=e(),s=t(`rue:component:anchor`);i(a,s);let u=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r);let a=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(t,h(`resume.pdf`)),t});d(m(C.Item,{as:`button`,children:a}),n,r);let s=o(`li`,n);i(n,s);let u=o(`details`,s);i(s,u);let f=o(`summary`,u);i(u,f);let g=o(`svg`,f);i(f,g),p(g,`xmlns`,`http://www.w3.org/2000/svg`),p(g,`fill`,`none`),p(g,`viewBox`,`0 0 24 24`),p(g,`strokeWidth`,`1.5`),p(g,`stroke`,`currentColor`),l(g,`w-4 h-4`);let _=o(`path`,g);i(g,_),p(_,`strokeLinecap`,`round`),p(_,`strokeLinejoin`,`round`),p(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(f,h(`My Files`));let v=o(`ul`,u);i(u,v);let y=t(`rue:component:anchor`);i(v,y);let b=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(t,h(`Project-final.psd`)),t});d(m(C.Item,{as:`button`,children:b}),v,y);let x=t(`rue:component:anchor`);i(v,x);let S=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(t,h(`Project-final-2.psd`)),t});d(m(C.Item,{as:`button`,children:S}),v,x);let w=o(`li`,v);i(v,w);let T=o(`details`,w);i(w,T);let ee=o(`summary`,T);i(T,ee);let E=o(`svg`,ee);i(ee,E),p(E,`xmlns`,`http://www.w3.org/2000/svg`),p(E,`fill`,`none`),p(E,`viewBox`,`0 0 24 24`),p(E,`strokeWidth`,`1.5`),p(E,`stroke`,`currentColor`),l(E,`w-4 h-4`);let te=o(`path`,E);i(E,te),p(te,`strokeLinecap`,`round`),p(te,`strokeLinejoin`,`round`),p(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(ee,h(`Images`));let D=o(`ul`,T);i(T,D);let ne=t(`rue:component:anchor`);i(D,ne);let re=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(t,h(`Screenshot1.png`)),t});d(m(C.Item,{as:`button`,children:re}),D,ne);let ie=t(`rue:component:anchor`);i(D,ie);let ae=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(t,h(`Screenshot2.png`)),t});d(m(C.Item,{as:`button`,children:ae}),D,ie);let oe=o(`li`,D);i(D,oe);let O=o(`details`,oe);i(oe,O);let se=o(`summary`,O);i(O,se);let k=o(`svg`,se);i(se,k),p(k,`xmlns`,`http://www.w3.org/2000/svg`),p(k,`fill`,`none`),p(k,`viewBox`,`0 0 24 24`),p(k,`strokeWidth`,`1.5`),p(k,`stroke`,`currentColor`),l(k,`w-4 h-4`);let ce=o(`path`,k);i(k,ce),p(ce,`strokeLinecap`,`round`),p(ce,`strokeLinejoin`,`round`),p(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(se,h(`Others`));let le=o(`ul`,O);i(O,le);let ue=t(`rue:component:anchor`);i(le,ue);let de=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(t,h(`Screenshot3.png`)),t});d(m(C.Item,{as:`button`,children:de}),le,ue);let fe=t(`rue:component:anchor`);i(n,fe);let pe=c(()=>{let t=e(),n=o(`svg`,t);i(t,n),p(n,`xmlns`,`http://www.w3.org/2000/svg`),p(n,`fill`,`none`),p(n,`viewBox`,`0 0 24 24`),p(n,`strokeWidth`,`1.5`),p(n,`stroke`,`currentColor`),l(n,`w-4 h-4`);let r=o(`path`,n);return i(n,r),p(r,`strokeLinecap`,`round`),p(r,`strokeLinejoin`,`round`),p(r,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(t,h(`reports-final-2.pdf`)),t});return d(m(C.Item,{as:`button`,children:pe}),n,fe),n});return n(()=>{let e=m(C,{size:`xs`,className:Ae,children:u});r(()=>d(e,a,s))}),a}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,Z,tn))});let Q=o(`div`,g);i(g,Q),l(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let nn=o(`h2`,Q);i(Q,nn),l(nn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(nn,h(`# 激活项`));let rn=t(`rue:component:anchor`);i(Q,rn),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});r(()=>d(e,Q,rn))});let an=t(`rue:slot:anchor`);i(Q,an),n(()=>{let a=_e.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`bg-base-200 rounded-box w-56`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Item 1`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{className:`menu-active`,children:`Item 2`}),n,a);let o=t(`rue:component:anchor`);return i(n,o),d(m(C.Item,{children:`Item 3`}),n,o),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,Q,an))});let on=o(`div`,g);i(g,on),l(on,`component-preview not-prose text-base-content my-6 lg:my-12`);let sn=o(`h2`,on);i(on,sn),l(sn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(sn,h(`# 水平菜单`));let cn=t(`rue:component:anchor`);i(on,cn),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});r(()=>d(e,on,cn))});let ln=t(`rue:slot:anchor`);i(on,ln),n(()=>{let a=ve.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Item 1`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{children:`Item 2`}),n,a);let o=t(`rue:component:anchor`);return i(n,o),d(m(C.Item,{children:`Item 3`}),n,o),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,on,ln))});let un=o(`div`,g);i(g,un),l(un,`component-preview not-prose text-base-content my-6 lg:my-12`);let dn=o(`h2`,un);i(un,dn),l(dn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(dn,h(`# 水平子菜单`));let fn=t(`rue:component:anchor`);i(un,fn),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});r(()=>d(e,un,fn))});let pn=t(`rue:slot:anchor`);i(un,pn),n(()=>{let a=ye.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Item 1`}),n,r);let a=o(`li`,n);i(n,a);let s=t(`rue:component:anchor`);i(a,s),d(m(C.Item,{children:`Parent`}),a,s);let l=t(`rue:component:anchor`);i(a,l);let u=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Submenu 1`}),n,r);let a=t(`rue:component:anchor`);return i(n,a),d(m(C.Item,{children:`Submenu 2`}),n,a),n});d(m(C.Submenu,{children:u}),a,l);let f=t(`rue:component:anchor`);return i(n,f),d(m(C.Item,{children:`Item 3`}),n,f),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,un,pn))});let mn=o(`div`,g);i(g,mn),l(mn,`component-preview not-prose text-base-content my-6 lg:my-12`);let hn=o(`h2`,mn);i(mn,hn),l(hn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(hn,h(`# Mega 菜单（响应式）`));let gn=t(`rue:component:anchor`);i(mn,gn),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});r(()=>d(e,mn,gn))});let _n=t(`rue:slot:anchor`);i(mn,_n),n(()=>{let a=be.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:c(()=>{let n=e(),r=o(`li`,n);i(n,r);let a=t(`rue:component:anchor`);i(r,a),d(m(C.Item,{children:`Solutions`}),r,a);let s=t(`rue:component:anchor`);i(r,s);let l=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Design`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{children:`Development`}),n,a);let o=t(`rue:component:anchor`);i(n,o),d(m(C.Item,{children:`Hosting`}),n,o);let s=t(`rue:component:anchor`);return i(n,s),d(m(C.Item,{children:`Domain register`}),n,s),n});d(m(C.Submenu,{children:l}),r,s);let u=o(`li`,n);i(n,u);let f=t(`rue:component:anchor`);i(u,f),d(m(C.Item,{children:`Enterprise`}),u,f);let p=t(`rue:component:anchor`);i(u,p);let h=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`CRM software`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{children:`Marketing management`}),n,a);let o=t(`rue:component:anchor`);i(n,o),d(m(C.Item,{children:`Security`}),n,o);let s=t(`rue:component:anchor`);return i(n,s),d(m(C.Item,{children:`Consulting`}),n,s),n});d(m(C.Submenu,{children:h}),u,p);let g=o(`li`,n);i(n,g);let _=t(`rue:component:anchor`);i(g,_),d(m(C.Item,{children:`Products`}),g,_);let v=t(`rue:component:anchor`);i(g,v);let y=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`UI Kit`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{children:`WordPress themes`}),n,a);let s=t(`rue:component:anchor`);i(n,s),d(m(C.Item,{children:`WordPress plugins`}),n,s);let l=o(`li`,n);i(n,l);let u=t(`rue:component:anchor`);i(l,u),d(m(C.Item,{children:`Open source`}),l,u);let f=t(`rue:component:anchor`);i(l,f);let p=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`Auth management system`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{children:`VScode theme`}),n,a);let o=t(`rue:component:anchor`);return i(n,o),d(m(C.Item,{children:`Color picker app`}),n,o),n});return d(m(C.Submenu,{children:p}),l,f),n});d(m(C.Submenu,{children:y}),g,v);let b=o(`li`,n);i(n,b);let x=t(`rue:component:anchor`);i(b,x),d(m(C.Item,{children:`Company`}),b,x);let S=t(`rue:component:anchor`);i(b,S);let w=c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{children:`About us`}),n,r);let a=t(`rue:component:anchor`);i(n,a),d(m(C.Item,{children:`Contact us`}),n,a);let o=t(`rue:component:anchor`);i(n,o),d(m(C.Item,{children:`Privacy policy`}),n,o);let s=t(`rue:component:anchor`);return i(n,s),d(m(C.Item,{children:`Press kit`}),n,s),n});return d(m(C.Submenu,{children:w}),b,S),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,mn,_n))});let $=o(`div`,g);i(g,$),l($,`component-preview not-prose text-base-content my-6 lg:my-12`);let vn=o(`h2`,$);i($,vn),l(vn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(vn,h(`# 可折叠（响应式）`));let yn=t(`rue:component:anchor`);i($,yn),n(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});r(()=>d(e,$,yn))});let bn=t(`rue:slot:anchor`);i($,bn),n(()=>{let a=xe.value===`preview`?c(()=>{let n=e(),r=t(`rue:component:anchor`);return i(n,r),d(m(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:c(()=>{let n=e(),r=t(`rue:component:anchor`);i(n,r),d(m(C.Item,{as:`button`,children:`Item 1`}),n,r);let a=o(`li`,n);i(n,a);let s=o(`details`,a);i(a,s);let c=o(`summary`,s);i(s,c),i(c,h(`Parent item`));let l=o(`ul`,s);i(s,l);let u=t(`rue:component:anchor`);i(l,u),d(m(C.Item,{as:`button`,children:`Submenu 1`}),l,u);let f=t(`rue:component:anchor`);i(l,f),d(m(C.Item,{as:`button`,children:`Submenu 2`}),l,f);let p=o(`li`,l);i(l,p);let g=o(`details`,p);i(p,g);let _=o(`summary`,g);i(g,_),i(_,h(`Parent`));let v=o(`ul`,g);i(g,v);let y=t(`rue:component:anchor`);i(v,y),d(m(C.Item,{as:`button`,children:`item 1`}),v,y);let b=t(`rue:component:anchor`);i(v,b),d(m(C.Item,{as:`button`,children:`item 2`}),v,b);let x=t(`rue:component:anchor`);return i(n,x),d(m(C.Item,{as:`button`,children:`Item 3`}),n,x),n})}),n,r),n}):c(()=>{let a=e(),o=t(`rue:component:anchor`);return i(a,o),n(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});r(()=>d(e,a,o))}),a});r(()=>d(a,$,bn))});let xn=o(`h2`,g);i(g,xn),i(xn,h(`API`));let Sn=o(`p`,g);i(g,Sn),l(Sn,`text-sm text-base-content/70`),i(Sn,h("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Cn=o(`h3`,g);i(g,Cn),i(Cn,h(`Menu.Item 链接相关`));let wn=t(`rue:component:anchor`);return i(g,wn),n(()=>{let e=m(T,{rows:ee});r(()=>d(e,g,wn))}),a})}),g,_),g})};export{E as default};
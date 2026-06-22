import{Q as e,Vt as t,Xt as n,at as r,bt as i,dt as a,it as o,l as s,nt as c,o as l,on as u,pt as d,rt as f,s as p,t as m,tn as h,tt as g}from"./vapor-runtime-x7F5M-49.js";import{a as _,n as v}from"./vapor-helpers-vapor-D1LP4JjK.js";import{a as y}from"./persistentSidebarPlayground-Cl_JMYk5.js";import{t as b}from"./Code-C5NjdoiC.js";import{t as x}from"./tabs-C4UF43sZ.js";import{t as S}from"./badge-DmAwNfkt.js";import{t as C}from"./menu-EwyOLLXA.js";import{r as w}from"./SidebarPlaygroundDesign-Bmw9WJ3p.js";var T=n=>s(r=>{let i=f(`div`,r);d(i,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let u=f(`table`,i);e(i,u),d(u,`table table-zebra`);let p=f(`thead`,u);e(u,p);let m=f(`tr`,p);e(p,m);let _=f(`th`,m);e(m,_),e(_,o(`属性`));let y=f(`th`,m);e(m,y),e(y,o(`说明`));let b=f(`th`,m);e(m,b),e(b,o(`类型`));let x=f(`th`,m);e(m,x),e(x,o(`默认值`));let S=f(`tbody`,u);e(u,S);let C=g(`rue:list:start`),w=g(`rue:list:end`);e(S,C),e(S,w);let T=new Map;return t(()=>{T=v({items:n.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,r,i,o,u)=>{l(s(()=>{let r=c(),i=f(`tr`,r);e(r,i),t(()=>{a(i,`key`,String(n.prop))});let o=f(`td`,i);e(i,o);let s=f(`code`,o);e(o,s);let u=g(`rue:slot:anchor`);e(s,u),t(()=>{let e=n.prop;h(()=>l(e,s,u))});let d=f(`td`,i);e(i,d);let p=g(`rue:slot:anchor`);e(d,p),t(()=>{let e=n.description;h(()=>l(e,d,p))});let m=f(`td`,i);e(i,m);let _=f(`code`,m);e(m,_);let v=g(`rue:slot:anchor`);e(_,v),t(()=>{let e=n.type;h(()=>l(e,_,v))});let y=f(`td`,i);e(i,y);let b=f(`code`,y);e(y,b);let x=g(`rue:slot:anchor`);return e(b,x),t(()=>{let e=n.defaultValue;h(()=>l(e,b,x))}),r}),r,i)}})}),i}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKey:Te,recommendedOpenKeys:Ee,compoundSelectedKeys:De,compoundOpenKeys:Oe,recommendedMenuClassName:ke,fileTreeMenuClassName:Ae,toggleDropdownByClass:je,menuData:Me,menuItems:Ne}=_(`useSetup:0:0`,()=>u(()=>({tRecommended:_(`ref:1:0`,()=>n(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>n(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>n(`preview`)),tBasic:_(`ref:1:3`,()=>n(`preview`)),tResponsive:_(`ref:1:4`,()=>n(`preview`)),tIconOnly:_(`ref:1:5`,()=>n(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>n(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>n(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>n(`preview`)),tSizes:_(`ref:1:9`,()=>n(`preview`)),tDisabled:_(`ref:1:10`,()=>n(`preview`)),tIcons:_(`ref:1:11`,()=>n(`preview`)),tIconsBadge:_(`ref:1:12`,()=>n(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>n(`preview`)),tTitle:_(`ref:1:14`,()=>n(`preview`)),tTitleParent:_(`ref:1:15`,()=>n(`preview`)),tSubmenu:_(`ref:1:16`,()=>n(`preview`)),tCollapsible:_(`ref:1:17`,()=>n(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>n(`preview`)),tFileTree:_(`ref:1:19`,()=>n(`preview`)),tActiveItem:_(`ref:1:20`,()=>n(`preview`)),tHorizontal:_(`ref:1:21`,()=>n(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>n(`preview`)),tMega:_(`ref:1:23`,()=>n(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>n(`preview`)),tArray:_(`ref:1:25`,()=>n(`preview`)),tArrayInternal:_(`ref:1:26`,()=>n(`preview`)),tNavigation:_(`ref:1:27`,()=>n(`preview`)),recommendedSelectedKey:_(`ref:1:28`,()=>n(`overview`)),recommendedOpenKeys:_(`ref:1:29`,()=>n([`workspace`])),compoundSelectedKeys:_(`ref:1:30`,()=>n([`profile`])),compoundOpenKeys:_(`ref:1:31`,()=>n([`settings`])),recommendedMenuClassName:`bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content`,fileTreeMenuClassName:`bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0`,toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Pe=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(S,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(S,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(S,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Fe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(S,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(S,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return s(n=>{let u=c(),_=g(`rue:component:anchor`);return e(u,_),l(m(w,{children:s(()=>{let n=c(),u=f(`div`,n);e(n,u),d(u,`max-w-none prose prose-sm md:prose-base`);let _=f(`h1`,u);e(u,_),e(_,o(`Menu 菜单`));let w=f(`p`,u);e(u,w),d(w,`text-sm mt-3 mb-3`),e(w,o("Menu 用于垂直或水平展示导航链接。它同时支持组合静态结构，以及 `items / selectedKeys / openKeys / group / divider / extra` 等数据驱动 API。"));let A=f(`div`,u);e(u,A),d(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ie=f(`h2`,A);e(A,Ie),d(Ie,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Ie,o(`# 推荐：items 数据驱动导航`));let Le=f(`p`,A);e(A,Le),d(Le,`mb-3 text-sm text-base-content/70`),e(Le,o(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let Re=g(`rue:component:anchor`);e(A,Re),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});h(()=>l(e,A,Re))});let ze=g(`rue:slot:anchor`);e(A,ze),t(()=>{let n=E.value===`preview`?s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(C,{mode:`inline`,className:ke,items:Pe,selectedKeys:[Te.value],openKeys:Ee.value,onSelect:e=>Te.value=String(e.key),onOpenChange:e=>Ee.value=e});h(()=>l(e,n,r))}),n}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});h(()=>l(e,n,r))}),n});h(()=>l(n,A,ze))});let j=f(`div`,u);e(u,j),d(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Be=f(`h2`,j);e(j,Be),d(Be,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Be,o(`# 推荐：多选、分组与分割线`));let Ve=f(`p`,j);e(j,Ve),d(Ve,`mb-3 text-sm text-base-content/70`),e(Ve,o("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let He=g(`rue:component:anchor`);e(j,He),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});h(()=>l(e,j,He))});let Ue=g(`rue:slot:anchor`);e(j,Ue),t(()=>{let n=te.value===`preview`?s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(C,{className:`bg-base-200 rounded-box w-80`,items:Fe,multiple:!0,defaultSelectedKeys:[`mentions`,`archived`]});h(()=>l(e,n,r))}),n}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`const items = [
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
/>`});h(()=>l(e,n,r))}),n});h(()=>l(n,j,Ue))});let M=f(`div`,u);e(u,M),d(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let We=f(`h2`,M);e(M,We),d(We,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(We,o(`# 推荐：组合式语义 API`));let Ge=f(`p`,M);e(M,Ge),d(Ge,`mb-3 text-sm text-base-content/70`),e(Ge,o("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let Ke=g(`rue:component:anchor`);e(M,Ke),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});h(()=>l(e,M,Ke))});let qe=g(`rue:slot:anchor`);e(M,qe),t(()=>{let n=D.value===`preview`?s(()=>{let n=c(),r=g(`rue:component:anchor`);e(n,r);let i=s(()=>{let n=c(),r=g(`rue:component:anchor`);e(n,r);let i=s(()=>{let n=c(),r=g(`rue:component:anchor`);e(n,r),t(()=>{let e=m(C.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});h(()=>l(e,n,r))});let i=g(`rue:component:anchor`);return e(n,i),t(()=>{let e=m(C.Item,{eventKey:`notifications`,extra:y(S,{size:`xs`,children:`2`}),children:`Notifications`});h(()=>l(e,n,i))}),n});l(m(C.ItemGroup,{title:`Account`,children:i}),n,r);let a=g(`rue:component:anchor`);e(n,a),l(m(C.Divider,{}),n,a);let o=g(`rue:component:anchor`);e(n,o);let u=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{eventKey:`security`,children:`Security`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),t,r),t});return t(()=>{let e=m(C.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:u});h(()=>l(e,n,o))}),n});return t(()=>{let e=m(C,{className:`bg-base-200 rounded-box w-80`,selectedKeys:De.value,openKeys:Oe.value,onSelect:e=>De.value=e.selectedKeys,onOpenChange:e=>Oe.value=e,children:i});h(()=>l(e,n,r))}),n}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,M,qe))});let Je=f(`div`,u);e(u,Je),d(Je,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),e(Je,o(`下面的示例全部使用 Rue 当前静态/基础结构写法，用于展示 daisyUI 风格能力与覆盖范围。`));let N=f(`div`,u);e(u,N),d(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ye=f(`h2`,N);e(N,Ye),d(Ye,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Ye,o(`# 导航跳转`));let Xe=g(`rue:component:anchor`);e(N,Xe),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});h(()=>l(e,N,Xe))});let Ze=g(`rue:slot:anchor`);e(N,Ze),t(()=>{let n=we.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),t,r);let i=g(`rue:component:anchor`);return e(t,i),l(m(C.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),t,i),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,N,Ze))});let P=f(`div`,u);e(u,P),d(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let Qe=f(`h2`,P);e(P,Qe),d(Qe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Qe,o(`# Menu 通过数据渲染（数组）`));let $e=g(`rue:component:anchor`);e(P,$e),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});h(()=>l(e,P,$e))});let et=g(`rue:slot:anchor`);e(P,et),t(()=>{let n=Se.value===`preview`?s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),l(m(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:s(()=>{let n=c(),r=g(`rue:list:start`),i=g(`rue:list:end`);e(n,r),e(n,i);let o=new Map;return t(()=>{o=v({items:Me||[],getKey:(e,t)=>t,elements:o,parent:r.parentNode,before:i,singleRoot:!0,start:r,renderItem:(n,r,i,o,u)=>{l(s(()=>{let r=c(),i=f(`li`,r);e(r,i),t(()=>{a(i,`key`,String(u))});let o=g(`rue:component:anchor`);e(i,o),l(m(C.Item,{children:n.label}),i,o);let d=g(`rue:component:anchor`);return e(i,d),l(m(C.Submenu,{children:s(()=>{let r=c(),i=g(`rue:list:start`),o=g(`rue:list:end`);e(r,i),e(r,o);let u=new Map;return t(()=>{u=v({items:n.children||[],getKey:(e,t)=>t,elements:u,parent:i.parentNode,before:o,start:i,renderItem:(n,r,i,o,u)=>{p(s(typeof n==`string`?()=>{let r=c(),i=g(`rue:component:anchor`);return e(r,i),t(()=>{let e=m(C.Item,{key:u,children:n});h(()=>l(e,r,i))}),r}:()=>{let r=c(),i=f(`li`,r);e(r,i),t(()=>{a(i,`key`,String(u))});let o=g(`rue:component:anchor`);e(i,o),l(m(C.Item,{children:n.label}),i,o);let d=g(`rue:component:anchor`);return e(i,d),l(m(C.Submenu,{children:s(()=>{let r=c(),i=g(`rue:list:start`),a=g(`rue:list:end`);e(r,i),e(r,a);let o=new Map;return t(()=>{o=v({items:n.children||[],getKey:(e,t)=>t,elements:o,parent:i.parentNode,before:a,start:i,renderItem:(e,t,n,r,i)=>{p(m(C.Item,{key:i,children:e}),t,n,r)}})}),r})}),i,d),r}),r,i,o)}})}),r})}),i,d),r}),r,i)}})}),n})}),n,r),n}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,P,et))});let F=f(`div`,u);e(u,F),d(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let tt=f(`h2`,F);e(F,tt),d(tt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(tt,o(`# Menu 通过数据渲染（数组，组件内部）`));let nt=g(`rue:component:anchor`);e(F,nt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});h(()=>l(e,F,nt))});let rt=g(`rue:slot:anchor`);e(F,rt),t(()=>{let n=Ce.value===`preview`?s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(C,{items:Ne,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});h(()=>l(e,n,r))}),n}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});h(()=>l(e,n,r))}),n});h(()=>l(n,F,rt))});let I=f(`div`,u);e(u,I),d(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let it=f(`h2`,I);e(I,it),d(it,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(it,o(`# Menu`));let at=g(`rue:component:anchor`);e(I,at),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});h(()=>l(e,I,at))});let ot=g(`rue:slot:anchor`);e(I,ot),t(()=>{let n=ne.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{as:`button`,children:`Item 2`}),t,r);let i=g(`rue:component:anchor`);return e(t,i),l(m(C.Item,{as:`button`,children:`Item 3`}),t,i),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,I,ot))});let st=f(`div`,u);e(u,st),d(st,`component-preview not-prose text-base-content my-6 lg:my-12`);let ct=f(`h2`,st);e(st,ct),d(ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(ct,o(`# 响应式：小屏垂直，大屏水平`));let lt=g(`rue:component:anchor`);e(st,lt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});h(()=>l(e,st,lt))});let ut=g(`rue:slot:anchor`);e(st,ut),t(()=>{let n=re.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{as:`button`,children:`Item 2`}),t,r);let i=g(`rue:component:anchor`);return e(t,i),l(m(C.Item,{as:`button`,children:`Item 3`}),t,i),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,st,ut))});let L=f(`div`,u);e(u,L),d(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let dt=f(`h2`,L);e(L,dt),d(dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(dt,o(`# 仅图标`));let ft=g(`rue:component:anchor`);e(L,ft),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});h(()=>l(e,L,ft))});let pt=g(`rue:slot:anchor`);e(L,pt),t(()=>{let n=ie.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n);let r=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});l(m(C.Item,{as:`button`,children:r}),t,n);let i=g(`rue:component:anchor`);e(t,i);let o=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});l(m(C.Item,{as:`button`,children:o}),t,i);let u=g(`rue:component:anchor`);e(t,u);let p=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return l(m(C.Item,{as:`button`,children:p}),t,u),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,L,pt))});let R=f(`div`,u);e(u,R),d(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let mt=f(`h2`,R);e(R,mt),d(mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(mt,o(`# 仅图标（水平）`));let ht=g(`rue:component:anchor`);e(R,ht),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});h(()=>l(e,R,ht))});let gt=g(`rue:slot:anchor`);e(R,gt),t(()=>{let n=ae.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n);let r=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),t});l(m(C.Item,{as:`button`,children:r}),t,n);let i=g(`rue:component:anchor`);e(t,i);let o=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});l(m(C.Item,{as:`button`,children:o}),t,i);let u=g(`rue:component:anchor`);e(t,u);let p=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return l(m(C.Item,{as:`button`,children:p}),t,u),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,R,gt))});let z=f(`div`,u);e(u,z),d(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let _t=f(`h2`,z);e(z,_t),d(_t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(_t,o(`# 仅图标（带 tooltip）`));let vt=g(`rue:component:anchor`);e(z,vt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});h(()=>l(e,z,vt))});let yt=g(`rue:slot:anchor`);e(z,yt),t(()=>{let n=oe.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n);let r=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),t});l(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:r}),t,n);let i=g(`rue:component:anchor`);e(t,i);let o=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});l(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:o}),t,i);let u=g(`rue:component:anchor`);e(t,u);let p=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),t});return l(m(C.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:p}),t,u),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,z,yt))});let B=f(`div`,u);e(u,B),d(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let bt=f(`h2`,B);e(B,bt),d(bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(bt,o(`# 仅图标（水平，tooltip）`));let xt=g(`rue:component:anchor`);e(B,xt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});h(()=>l(e,B,xt))});let St=g(`rue:slot:anchor`);e(B,St),t(()=>{let n=O.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n);let r=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),t});l(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:r}),t,n);let i=g(`rue:component:anchor`);e(t,i);let o=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),t});l(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:o}),t,i);let u=g(`rue:component:anchor`);e(t,u);let p=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),t});return l(m(C.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:p}),t,u),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,B,St))});let V=f(`div`,u);e(u,V),d(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ct=f(`h2`,V);e(V,Ct),d(Ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Ct,o(`# Menu 尺寸`));let wt=g(`rue:component:anchor`);e(V,wt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});h(()=>l(e,V,wt))});let Tt=g(`rue:slot:anchor`);e(V,Tt),t(()=>{let n=se.value===`preview`?s(()=>{let t=c(),n=f(`div`,t);e(t,n),d(n,`grid gap-6`);let r=g(`rue:component:anchor`);e(n,r),l(m(C,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Xsmall 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{as:`button`,children:`Xsmall 2`}),t,r),t})}),n,r);let i=g(`rue:component:anchor`);e(n,i),l(m(C,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Small 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{as:`button`,children:`Small 2`}),t,r),t})}),n,i);let a=g(`rue:component:anchor`);e(n,a),l(m(C,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Medium 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{as:`button`,children:`Medium 2`}),t,r),t})}),n,a);let o=g(`rue:component:anchor`);e(n,o),l(m(C,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Large 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{as:`button`,children:`Large 2`}),t,r),t})}),n,o);let u=g(`rue:component:anchor`);return e(n,u),l(m(C,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Xlarge 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{as:`button`,children:`Xlarge 2`}),t,r),t})}),n,u),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});h(()=>l(e,n,r))}),n});h(()=>l(n,V,Tt))});let H=f(`div`,u);e(u,H),d(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let Et=f(`h2`,H);e(H,Et),d(Et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Et,o(`# 禁用项目`));let Dt=g(`rue:component:anchor`);e(H,Dt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});h(()=>l(e,H,Dt))});let Ot=g(`rue:slot:anchor`);e(H,Ot),t(()=>{let n=k.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Enabled item`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),t,r);let i=g(`rue:component:anchor`);return e(t,i),l(m(C.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),t,i),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,H,Ot))});let U=f(`div`,u);e(u,U),d(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let kt=f(`h2`,U);e(U,kt),d(kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(kt,o(`# 带图标`));let At=g(`rue:component:anchor`);e(U,At),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});h(()=>l(e,U,At))});let jt=g(`rue:slot:anchor`);e(U,jt),t(()=>{let n=ce.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n);let r=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e(t,o(`Item 2`)),t});l(m(C.Item,{as:`button`,children:r}),t,n);let i=g(`rue:component:anchor`);e(t,i);let u=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e(t,o(`Item 1`)),t});l(m(C.Item,{as:`button`,children:u}),t,i);let p=g(`rue:component:anchor`);e(t,p);let h=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e(t,o(`Item 3`)),t});return l(m(C.Item,{as:`button`,children:h}),t,p),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,U,jt))});let W=f(`div`,u);e(u,W),d(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let Mt=f(`h2`,W);e(W,Mt),d(Mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Mt,o(`# 带图标与徽章（响应式）`));let Nt=g(`rue:component:anchor`);e(W,Nt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});h(()=>l(e,W,Nt))});let Pt=g(`rue:slot:anchor`);e(W,Pt),t(()=>{let n=le.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n);let u=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let r=f(`path`,n);e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`strokeWidth`,`2`),a(r,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e(t,o(`Inbox`));let i=g(`rue:component:anchor`);return e(t,i),l(m(S,{size:`xs`,children:`99+`}),t,i),t});l(m(C.Item,{as:`button`,children:u}),t,n);let p=g(`rue:component:anchor`);e(t,p);let h=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),d(n,`h-5 w-5`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`stroke`,`currentColor`);let s=f(`path`,n);e(n,s),a(s,`strokeLinecap`,`round`),a(s,`strokeLinejoin`,`round`),a(s,`strokeWidth`,`2`),a(s,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e(t,o(`Updates`));let u=r(t);e(t,u),i(u,` `);let p=g(`rue:component:anchor`);return e(t,p),l(m(S,{size:`xs`,variant:`warning`,children:`NEW`}),t,p),t});l(m(C.Item,{as:`button`,children:h}),t,p);let _=g(`rue:component:anchor`);e(t,_);let v=s(()=>{let t=c();e(t,o(`Stats`));let n=g(`rue:component:anchor`);return e(t,n),l(m(S,{size:`xs`,variant:`info`}),t,n),t});return l(m(C.Item,{as:`button`,children:v}),t,_),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,W,Pt))});let G=f(`div`,u);e(u,G),d(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ft=f(`h2`,G);e(G,Ft),d(Ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Ft,o(`# 去除内边距和圆角`));let It=g(`rue:component:anchor`);e(G,It),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});h(()=>l(e,G,It))});let Lt=g(`rue:slot:anchor`);e(G,Lt),t(()=>{let n=ue.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Item 1`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{children:`Item 2`}),t,r);let i=g(`rue:component:anchor`);return e(t,i),l(m(C.Item,{children:`Item 3`}),t,i),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,G,Lt))});let K=f(`div`,u);e(u,K),d(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Rt=f(`h2`,K);e(K,Rt),d(Rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Rt,o(`# 带标题`));let zt=g(`rue:component:anchor`);e(K,zt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});h(()=>l(e,K,zt))});let Bt=g(`rue:slot:anchor`);e(K,Bt),t(()=>{let n=de.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Title,{children:`Title`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{children:`Item 1`}),t,r);let i=g(`rue:component:anchor`);e(t,i),l(m(C.Item,{children:`Item 2`}),t,i);let a=g(`rue:component:anchor`);return e(t,a),l(m(C.Item,{children:`Item 3`}),t,a),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,K,Bt))});let q=f(`div`,u);e(u,q),d(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Vt=f(`h2`,q);e(q,Vt),d(Vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Vt,o(`# 标题作为父级`));let Ht=g(`rue:component:anchor`);e(q,Ht),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});h(()=>l(e,q,Ht))});let Ut=g(`rue:slot:anchor`);e(q,Ut),t(()=>{let n=fe.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=f(`li`,t);e(t,n);let r=g(`rue:component:anchor`);e(n,r),l(m(C.Title,{as:`h2`,children:`Title`}),n,r);let i=f(`ul`,n);e(n,i);let a=g(`rue:component:anchor`);e(i,a),l(m(C.Item,{children:`Item 1`}),i,a);let o=g(`rue:component:anchor`);e(i,o),l(m(C.Item,{children:`Item 2`}),i,o);let s=g(`rue:component:anchor`);return e(i,s),l(m(C.Item,{children:`Item 3`}),i,s),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,q,Ut))});let J=f(`div`,u);e(u,J),d(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Wt=f(`h2`,J);e(J,Wt),d(Wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Wt,o(`# 子菜单`));let Gt=g(`rue:component:anchor`);e(J,Gt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});h(()=>l(e,J,Gt))});let Kt=g(`rue:slot:anchor`);e(J,Kt),t(()=>{let n=pe.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=f(`li`,t);e(t,r);let i=g(`rue:component:anchor`);e(r,i),l(m(C.Item,{as:`button`,children:`Parent`}),r,i);let a=g(`rue:component:anchor`);e(r,a);let o=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Submenu 1`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{as:`button`,children:`Submenu 2`}),t,r);let i=f(`li`,t);e(t,i);let a=g(`rue:component:anchor`);e(i,a),l(m(C.Item,{as:`button`,children:`Parent`}),i,a);let o=g(`rue:component:anchor`);e(i,o);let u=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Submenu 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{as:`button`,children:`Submenu 2`}),t,r),t});return l(m(C.Submenu,{children:u}),i,o),t});l(m(C.Submenu,{children:o}),r,a);let u=g(`rue:component:anchor`);return e(t,u),l(m(C.Item,{as:`button`,children:`Item 3`}),t,u),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,J,Kt))});let Y=f(`div`,u);e(u,Y),d(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let qt=f(`h2`,Y);e(Y,qt),d(qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(qt,o(`# 可折叠子菜单`));let Jt=g(`rue:component:anchor`);e(Y,Jt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});h(()=>l(e,Y,Jt))});let Yt=g(`rue:slot:anchor`);e(Y,Yt),t(()=>{let n=me.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=f(`li`,t);e(t,r);let i=f(`details`,r);e(r,i);let a=f(`summary`,i);e(i,a),e(a,o(`Parent`));let s=f(`ul`,i);e(i,s);let u=g(`rue:component:anchor`);e(s,u),l(m(C.Item,{as:`button`,children:`Submenu 1`}),s,u);let d=g(`rue:component:anchor`);e(s,d),l(m(C.Item,{as:`button`,children:`Submenu 2`}),s,d);let p=f(`li`,s);e(s,p);let h=f(`details`,p);e(p,h);let _=f(`summary`,h);e(h,_),e(_,o(`Parent`));let v=f(`ul`,h);e(h,v);let y=g(`rue:component:anchor`);e(v,y),l(m(C.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=g(`rue:component:anchor`);e(v,b),l(m(C.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=g(`rue:component:anchor`);return e(t,x),l(m(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,Y,Yt))});let X=f(`div`,u);e(u,X),d(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xt=f(`h2`,X);e(X,Xt),d(Xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(Xt,o(`# 通过类名控制展开（JS）`));let Zt=g(`rue:component:anchor`);e(X,Zt),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});h(()=>l(e,X,Zt))});let Qt=g(`rue:slot:anchor`);e(X,Qt),t(()=>{let n=he.value===`preview`?s(()=>{let n=c(),r=f(`div`,n);e(n,r),d(r,`grid gap-6`);let i=g(`rue:component:anchor`);e(r,i),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Item 1`}),t,n);let r=f(`li`,t);e(t,r);let i=g(`rue:component:anchor`);e(r,i),l(m(C.DropdownToggle,{onClick:je,children:`Parent`}),r,i);let a=g(`rue:component:anchor`);e(r,a);let o=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Submenu 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{children:`Submenu 2`}),t,r),t});return l(m(C.Dropdown,{children:o}),r,a),t})}),r,i);let a=g(`rue:component:anchor`);return e(r,a),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let n=c(),r=g(`rue:component:anchor`);e(n,r),l(m(C.Item,{children:`Item 1`}),n,r);let i=f(`li`,n);e(n,i);let a=g(`rue:component:anchor`);e(i,a),t(()=>{let e=m(C.DropdownToggle,{show:!0,onClick:je,children:`Parent`});h(()=>l(e,i,a))});let o=g(`rue:component:anchor`);e(i,o);let u=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Submenu 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{children:`Submenu 2`}),t,r),t});return t(()=>{let e=m(C.Dropdown,{show:!0,children:u});h(()=>l(e,i,o))}),n})}),r,a),n}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,X,Qt))});let Z=f(`div`,u);e(u,Z),d(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let $t=f(`h2`,Z);e(Z,$t),d($t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e($t,o(`# 文件树`));let en=g(`rue:component:anchor`);e(Z,en),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});h(()=>l(e,Z,en))});let tn=g(`rue:slot:anchor`);e(Z,tn),t(()=>{let n=ge.value===`preview`?s(()=>{let n=c(),r=g(`rue:component:anchor`);e(n,r);let i=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n);let r=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`strokeWidth`,`1.5`),a(n,`stroke`,`currentColor`),d(n,`w-4 h-4`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e(t,o(`resume.pdf`)),t});l(m(C.Item,{as:`button`,children:r}),t,n);let i=f(`li`,t);e(t,i);let u=f(`details`,i);e(i,u);let p=f(`summary`,u);e(u,p);let h=f(`svg`,p);e(p,h),a(h,`xmlns`,`http://www.w3.org/2000/svg`),a(h,`fill`,`none`),a(h,`viewBox`,`0 0 24 24`),a(h,`strokeWidth`,`1.5`),a(h,`stroke`,`currentColor`),d(h,`w-4 h-4`);let _=f(`path`,h);e(h,_),a(_,`strokeLinecap`,`round`),a(_,`strokeLinejoin`,`round`),a(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),e(p,o(`My Files`));let v=f(`ul`,u);e(u,v);let y=g(`rue:component:anchor`);e(v,y);let b=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`strokeWidth`,`1.5`),a(n,`stroke`,`currentColor`),d(n,`w-4 h-4`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e(t,o(`Project-final.psd`)),t});l(m(C.Item,{as:`button`,children:b}),v,y);let x=g(`rue:component:anchor`);e(v,x);let S=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`strokeWidth`,`1.5`),a(n,`stroke`,`currentColor`),d(n,`w-4 h-4`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e(t,o(`Project-final-2.psd`)),t});l(m(C.Item,{as:`button`,children:S}),v,x);let w=f(`li`,v);e(v,w);let T=f(`details`,w);e(w,T);let ee=f(`summary`,T);e(T,ee);let E=f(`svg`,ee);e(ee,E),a(E,`xmlns`,`http://www.w3.org/2000/svg`),a(E,`fill`,`none`),a(E,`viewBox`,`0 0 24 24`),a(E,`strokeWidth`,`1.5`),a(E,`stroke`,`currentColor`),d(E,`w-4 h-4`);let te=f(`path`,E);e(E,te),a(te,`strokeLinecap`,`round`),a(te,`strokeLinejoin`,`round`),a(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),e(ee,o(`Images`));let D=f(`ul`,T);e(T,D);let ne=g(`rue:component:anchor`);e(D,ne);let re=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`strokeWidth`,`1.5`),a(n,`stroke`,`currentColor`),d(n,`w-4 h-4`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e(t,o(`Screenshot1.png`)),t});l(m(C.Item,{as:`button`,children:re}),D,ne);let ie=g(`rue:component:anchor`);e(D,ie);let ae=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`strokeWidth`,`1.5`),a(n,`stroke`,`currentColor`),d(n,`w-4 h-4`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e(t,o(`Screenshot2.png`)),t});l(m(C.Item,{as:`button`,children:ae}),D,ie);let oe=f(`li`,D);e(D,oe);let O=f(`details`,oe);e(oe,O);let se=f(`summary`,O);e(O,se);let k=f(`svg`,se);e(se,k),a(k,`xmlns`,`http://www.w3.org/2000/svg`),a(k,`fill`,`none`),a(k,`viewBox`,`0 0 24 24`),a(k,`strokeWidth`,`1.5`),a(k,`stroke`,`currentColor`),d(k,`w-4 h-4`);let ce=f(`path`,k);e(k,ce),a(ce,`strokeLinecap`,`round`),a(ce,`strokeLinejoin`,`round`),a(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),e(se,o(`Others`));let le=f(`ul`,O);e(O,le);let ue=g(`rue:component:anchor`);e(le,ue);let de=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`strokeWidth`,`1.5`),a(n,`stroke`,`currentColor`),d(n,`w-4 h-4`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e(t,o(`Screenshot3.png`)),t});l(m(C.Item,{as:`button`,children:de}),le,ue);let fe=g(`rue:component:anchor`);e(t,fe);let pe=s(()=>{let t=c(),n=f(`svg`,t);e(t,n),a(n,`xmlns`,`http://www.w3.org/2000/svg`),a(n,`fill`,`none`),a(n,`viewBox`,`0 0 24 24`),a(n,`strokeWidth`,`1.5`),a(n,`stroke`,`currentColor`),d(n,`w-4 h-4`);let r=f(`path`,n);return e(n,r),a(r,`strokeLinecap`,`round`),a(r,`strokeLinejoin`,`round`),a(r,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e(t,o(`reports-final-2.pdf`)),t});return l(m(C.Item,{as:`button`,children:pe}),t,fe),t});return t(()=>{let e=m(C,{size:`xs`,className:Ae,children:i});h(()=>l(e,n,r))}),n}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,Z,tn))});let Q=f(`div`,u);e(u,Q),d(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let nn=f(`h2`,Q);e(Q,nn),d(nn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(nn,o(`# 激活项`));let rn=g(`rue:component:anchor`);e(Q,rn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});h(()=>l(e,Q,rn))});let an=g(`rue:slot:anchor`);e(Q,an),t(()=>{let n=_e.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`bg-base-200 rounded-box w-56`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Item 1`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{className:`menu-active`,children:`Item 2`}),t,r);let i=g(`rue:component:anchor`);return e(t,i),l(m(C.Item,{children:`Item 3`}),t,i),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,Q,an))});let on=f(`div`,u);e(u,on),d(on,`component-preview not-prose text-base-content my-6 lg:my-12`);let sn=f(`h2`,on);e(on,sn),d(sn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(sn,o(`# 水平菜单`));let cn=g(`rue:component:anchor`);e(on,cn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});h(()=>l(e,on,cn))});let ln=g(`rue:slot:anchor`);e(on,ln),t(()=>{let n=ve.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Item 1`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{children:`Item 2`}),t,r);let i=g(`rue:component:anchor`);return e(t,i),l(m(C.Item,{children:`Item 3`}),t,i),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,on,ln))});let un=f(`div`,u);e(u,un),d(un,`component-preview not-prose text-base-content my-6 lg:my-12`);let dn=f(`h2`,un);e(un,dn),d(dn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(dn,o(`# 水平子菜单`));let fn=g(`rue:component:anchor`);e(un,fn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});h(()=>l(e,un,fn))});let pn=g(`rue:slot:anchor`);e(un,pn),t(()=>{let n=ye.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Item 1`}),t,n);let r=f(`li`,t);e(t,r);let i=g(`rue:component:anchor`);e(r,i),l(m(C.Item,{children:`Parent`}),r,i);let a=g(`rue:component:anchor`);e(r,a);let o=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Submenu 1`}),t,n);let r=g(`rue:component:anchor`);return e(t,r),l(m(C.Item,{children:`Submenu 2`}),t,r),t});l(m(C.Submenu,{children:o}),r,a);let u=g(`rue:component:anchor`);return e(t,u),l(m(C.Item,{children:`Item 3`}),t,u),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,un,pn))});let mn=f(`div`,u);e(u,mn),d(mn,`component-preview not-prose text-base-content my-6 lg:my-12`);let hn=f(`h2`,mn);e(mn,hn),d(hn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(hn,o(`# Mega 菜单（响应式）`));let gn=g(`rue:component:anchor`);e(mn,gn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});h(()=>l(e,mn,gn))});let _n=g(`rue:slot:anchor`);e(mn,_n),t(()=>{let n=be.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:s(()=>{let t=c(),n=f(`li`,t);e(t,n);let r=g(`rue:component:anchor`);e(n,r),l(m(C.Item,{children:`Solutions`}),n,r);let i=g(`rue:component:anchor`);e(n,i);let a=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Design`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{children:`Development`}),t,r);let i=g(`rue:component:anchor`);e(t,i),l(m(C.Item,{children:`Hosting`}),t,i);let a=g(`rue:component:anchor`);return e(t,a),l(m(C.Item,{children:`Domain register`}),t,a),t});l(m(C.Submenu,{children:a}),n,i);let o=f(`li`,t);e(t,o);let u=g(`rue:component:anchor`);e(o,u),l(m(C.Item,{children:`Enterprise`}),o,u);let d=g(`rue:component:anchor`);e(o,d);let p=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`CRM software`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{children:`Marketing management`}),t,r);let i=g(`rue:component:anchor`);e(t,i),l(m(C.Item,{children:`Security`}),t,i);let a=g(`rue:component:anchor`);return e(t,a),l(m(C.Item,{children:`Consulting`}),t,a),t});l(m(C.Submenu,{children:p}),o,d);let h=f(`li`,t);e(t,h);let _=g(`rue:component:anchor`);e(h,_),l(m(C.Item,{children:`Products`}),h,_);let v=g(`rue:component:anchor`);e(h,v);let y=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`UI Kit`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{children:`WordPress themes`}),t,r);let i=g(`rue:component:anchor`);e(t,i),l(m(C.Item,{children:`WordPress plugins`}),t,i);let a=f(`li`,t);e(t,a);let o=g(`rue:component:anchor`);e(a,o),l(m(C.Item,{children:`Open source`}),a,o);let u=g(`rue:component:anchor`);e(a,u);let d=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`Auth management system`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{children:`VScode theme`}),t,r);let i=g(`rue:component:anchor`);return e(t,i),l(m(C.Item,{children:`Color picker app`}),t,i),t});return l(m(C.Submenu,{children:d}),a,u),t});l(m(C.Submenu,{children:y}),h,v);let b=f(`li`,t);e(t,b);let x=g(`rue:component:anchor`);e(b,x),l(m(C.Item,{children:`Company`}),b,x);let S=g(`rue:component:anchor`);e(b,S);let w=s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{children:`About us`}),t,n);let r=g(`rue:component:anchor`);e(t,r),l(m(C.Item,{children:`Contact us`}),t,r);let i=g(`rue:component:anchor`);e(t,i),l(m(C.Item,{children:`Privacy policy`}),t,i);let a=g(`rue:component:anchor`);return e(t,a),l(m(C.Item,{children:`Press kit`}),t,a),t});return l(m(C.Submenu,{children:w}),b,S),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,mn,_n))});let $=f(`div`,u);e(u,$),d($,`component-preview not-prose text-base-content my-6 lg:my-12`);let vn=f(`h2`,$);e($,vn),d(vn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),e(vn,o(`# 可折叠（响应式）`));let yn=g(`rue:component:anchor`);e($,yn),t(()=>{let e=m(x,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});h(()=>l(e,$,yn))});let bn=g(`rue:slot:anchor`);e($,bn),t(()=>{let n=xe.value===`preview`?s(()=>{let t=c(),n=g(`rue:component:anchor`);return e(t,n),l(m(C,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:s(()=>{let t=c(),n=g(`rue:component:anchor`);e(t,n),l(m(C.Item,{as:`button`,children:`Item 1`}),t,n);let r=f(`li`,t);e(t,r);let i=f(`details`,r);e(r,i);let a=f(`summary`,i);e(i,a),e(a,o(`Parent item`));let s=f(`ul`,i);e(i,s);let u=g(`rue:component:anchor`);e(s,u),l(m(C.Item,{as:`button`,children:`Submenu 1`}),s,u);let d=g(`rue:component:anchor`);e(s,d),l(m(C.Item,{as:`button`,children:`Submenu 2`}),s,d);let p=f(`li`,s);e(s,p);let h=f(`details`,p);e(p,h);let _=f(`summary`,h);e(h,_),e(_,o(`Parent`));let v=f(`ul`,h);e(h,v);let y=g(`rue:component:anchor`);e(v,y),l(m(C.Item,{as:`button`,children:`item 1`}),v,y);let b=g(`rue:component:anchor`);e(v,b),l(m(C.Item,{as:`button`,children:`item 2`}),v,b);let x=g(`rue:component:anchor`);return e(t,x),l(m(C.Item,{as:`button`,children:`Item 3`}),t,x),t})}),t,n),t}):s(()=>{let n=c(),r=g(`rue:component:anchor`);return e(n,r),t(()=>{let e=m(b,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});h(()=>l(e,n,r))}),n});h(()=>l(n,$,bn))});let xn=f(`h2`,u);e(u,xn),e(xn,o(`API`));let Sn=f(`p`,u);e(u,Sn),d(Sn,`text-sm text-base-content/70`),e(Sn,o("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let Cn=f(`h3`,u);e(u,Cn),e(Cn,o(`Menu.Item 链接相关`));let wn=g(`rue:component:anchor`);return e(u,wn),t(()=>{let e=m(T,{rows:ee});h(()=>l(e,u,wn))}),n})}),u,_),u})};export{E as default};
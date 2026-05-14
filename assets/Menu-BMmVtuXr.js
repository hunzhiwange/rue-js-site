import{F as e,I as t,K as n,L as r,N as i,Q as a,R as o,W as s,_t as c,d as l,l as u,mt as d,ot as f,t as p,u as m,ut as h,z as g}from"./vapor-runtime-Dfq7aA8z.js";import{a as _,n as v}from"./vapor-helpers-vapor-CpxsbTjB.js";import{t as y}from"./src-BaNG2YQR.js";import{n as b}from"./SidebarPlaygroundDesign-CGhyvgx7.js";import{t as x}from"./Code-CLTo4rRM.js";import{t as S}from"./tabs-CxVJfyAw.js";import{t as C}from"./badge-1CmtkJNV.js";import{t as w}from"./menu-Dpa9qCTC.js";var T=a=>l(d=>{let f=r(`div`,d);n(f,`not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100`);let p=r(`table`,f);i(f,p),n(p,`table table-zebra`);let m=r(`thead`,p);i(p,m);let g=r(`tr`,m);i(m,g);let _=r(`th`,g);i(g,_),i(_,o(`属性`));let y=r(`th`,g);i(g,y),i(y,o(`说明`));let b=r(`th`,g);i(g,b),i(b,o(`类型`));let x=r(`th`,g);i(g,x),i(x,o(`默认值`));let S=r(`tbody`,p);i(p,S);let C=e(`rue:list:start`),w=e(`rue:list:end`);i(S,C),i(S,w);let T=new Map;return c(()=>{T=v({items:a.rows||[],getKey:(e,t)=>e.prop,elements:T,parent:S,before:w,singleRoot:!0,trackIndex:!1,start:C,renderItem:(n,a,o,d,f)=>{u(l(()=>{let a=t(),o=r(`tr`,a);i(a,o),c(()=>{s(o,`key`,String(n.prop))});let l=r(`td`,o);i(o,l);let d=r(`code`,l);i(l,d);let f=e(`rue:slot:anchor`);i(d,f),c(()=>{let e=n.prop;h(()=>u(e,d,f))});let p=r(`td`,o);i(o,p);let m=e(`rue:slot:anchor`);i(p,m),c(()=>{let e=n.description;h(()=>u(e,p,m))});let g=r(`td`,o);i(o,g);let _=r(`code`,g);i(g,_);let v=e(`rue:slot:anchor`);i(_,v),c(()=>{let e=n.type;h(()=>u(e,_,v))});let y=r(`td`,o);i(o,y);let b=r(`code`,y);i(y,b);let x=e(`rue:slot:anchor`);return i(b,x),c(()=>{let e=n.defaultValue;h(()=>u(e,b,x))}),a}),a,o)}})}),f}),ee=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],E=()=>{let{tRecommended:E,tMultipleEnhanced:te,tCompoundEnhanced:D,tBasic:ne,tResponsive:re,tIconOnly:ie,tIconOnlyH:ae,tIconOnlyTooltip:oe,tIconOnlyHTooltip:O,tSizes:se,tDisabled:k,tIcons:ce,tIconsBadge:le,tNoPadRadius:ue,tTitle:de,tTitleParent:fe,tSubmenu:pe,tCollapsible:me,tDropdownClassJS:he,tFileTree:ge,tActiveItem:_e,tHorizontal:ve,tHorizontalSubmenu:ye,tMega:be,tCollapsibleResponsive:xe,tArray:Se,tArrayInternal:Ce,tNavigation:we,recommendedSelectedKeys:Te,recommendedOpenKeys:Ee,multipleSelectedKeys:De,compoundSelectedKeys:Oe,compoundOpenKeys:ke,toggleDropdownByClass:Ae,menuData:je,menuItems:Me}=_(`useSetup:0:0`,()=>d(()=>({tRecommended:_(`ref:1:0`,()=>f(`preview`)),tMultipleEnhanced:_(`ref:1:1`,()=>f(`preview`)),tCompoundEnhanced:_(`ref:1:2`,()=>f(`preview`)),tBasic:_(`ref:1:3`,()=>f(`preview`)),tResponsive:_(`ref:1:4`,()=>f(`preview`)),tIconOnly:_(`ref:1:5`,()=>f(`preview`)),tIconOnlyH:_(`ref:1:6`,()=>f(`preview`)),tIconOnlyTooltip:_(`ref:1:7`,()=>f(`preview`)),tIconOnlyHTooltip:_(`ref:1:8`,()=>f(`preview`)),tSizes:_(`ref:1:9`,()=>f(`preview`)),tDisabled:_(`ref:1:10`,()=>f(`preview`)),tIcons:_(`ref:1:11`,()=>f(`preview`)),tIconsBadge:_(`ref:1:12`,()=>f(`preview`)),tNoPadRadius:_(`ref:1:13`,()=>f(`preview`)),tTitle:_(`ref:1:14`,()=>f(`preview`)),tTitleParent:_(`ref:1:15`,()=>f(`preview`)),tSubmenu:_(`ref:1:16`,()=>f(`preview`)),tCollapsible:_(`ref:1:17`,()=>f(`preview`)),tDropdownClassJS:_(`ref:1:18`,()=>f(`preview`)),tFileTree:_(`ref:1:19`,()=>f(`preview`)),tActiveItem:_(`ref:1:20`,()=>f(`preview`)),tHorizontal:_(`ref:1:21`,()=>f(`preview`)),tHorizontalSubmenu:_(`ref:1:22`,()=>f(`preview`)),tMega:_(`ref:1:23`,()=>f(`preview`)),tCollapsibleResponsive:_(`ref:1:24`,()=>f(`preview`)),tArray:_(`ref:1:25`,()=>f(`preview`)),tArrayInternal:_(`ref:1:26`,()=>f(`preview`)),tNavigation:_(`ref:1:27`,()=>f(`preview`)),recommendedSelectedKeys:_(`ref:1:28`,()=>f([`overview`])),recommendedOpenKeys:_(`ref:1:29`,()=>f([`workspace`])),multipleSelectedKeys:_(`ref:1:30`,()=>f([`mentions`,`archived`])),compoundSelectedKeys:_(`ref:1:31`,()=>f([`profile`])),compoundOpenKeys:_(`ref:1:32`,()=>f([`settings`])),toggleDropdownByClass:e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},menuData:[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],menuItems:[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}]}))),Ne=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),extra:y(C,{size:`xs`,variant:`info`,children:`Live`})},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`}),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:y(C,{size:`xs`,variant:`warning`,children:`12`})}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:y(C,{size:`xs`,variant:`success`,children:`8`})},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],Pe=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:y(C,{size:`xs`,variant:`error`,children:`3`})},{key:`reviews`,label:`Code Reviews`,extra:y(C,{size:`xs`,variant:`warning`,children:`5`})}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return l(d=>{let f=t(),_=e(`rue:component:anchor`);return i(f,_),u(p(b,{children:l(()=>{let d=t(),f=r(`div`,d);i(d,f),n(f,`max-w-none prose prose-sm md:prose-base`);let _=r(`h1`,f);i(f,_),i(_,o(`Menu 菜单`));let b=r(`p`,f);i(f,b),n(b,`text-sm mt-3 mb-3`),i(b,o("Menu 用于垂直或水平展示导航链接。Rue 现在同时支持经典静态结构，以及更接近成熟组件库的 `items / selectedKeys / openKeys / group / divider / extra` 增强 API。"));let Fe=r(`div`,f);i(f,Fe),n(Fe,`text-sm`);let Ie=r(`a`,Fe);i(Fe,Ie),s(Ie,`href`,`https://daisyui.com/components/menu/`),s(Ie,`target`,`_blank`),i(Ie,o(`查看 Menu 静态样式`));let A=r(`div`,f);i(f,A),n(A,`component-preview not-prose text-base-content my-6 lg:my-12`);let Le=r(`h2`,A);i(A,Le),n(Le,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Le,o(`# 推荐：items 数据驱动导航`));let Re=r(`p`,A);i(A,Re),n(Re,`mb-3 text-sm text-base-content/70`),i(Re,o(`适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。`));let ze=e(`rue:component:anchor`);i(A,ze),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:E.value,onChange:e=>E.value=e,className:`mb-3`});h(()=>u(e,A,ze))});let Be=e(`rue:slot:anchor`);i(A,Be),c(()=>{let n=E.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(w,{mode:`inline`,className:`bg-base-200 rounded-box w-80`,items:Ne,selectedKeys:Te.value,openKeys:Ee.value,onSelect:e=>Te.value=e.selectedKeys,onOpenChange:e=>Ee.value=e});h(()=>u(e,n,r))}),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`});h(()=>u(e,n,r))}),n});h(()=>u(n,A,Be))});let j=r(`div`,f);i(f,j),n(j,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ve=r(`h2`,j);i(j,Ve),n(Ve,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ve,o(`# 推荐：多选、分组与分割线`));let He=r(`p`,j);i(j,He),n(He,`mb-3 text-sm text-base-content/70`),i(He,o("沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。"));let Ue=e(`rue:component:anchor`);i(j,Ue),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:te.value,onChange:e=>te.value=e,className:`mb-3`});h(()=>u(e,j,Ue))});let We=e(`rue:slot:anchor`);i(j,We),c(()=>{let n=te.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(w,{className:`bg-base-200 rounded-box w-80`,items:Pe,multiple:!0,selectedKeys:De.value,onSelect:e=>De.value=e.selectedKeys,onDeselect:e=>De.value=e.selectedKeys});h(()=>u(e,n,r))}),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['mentions', 'archived']);

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
/>`});h(()=>u(e,n,r))}),n});h(()=>u(n,j,We))});let M=r(`div`,f);i(f,M),n(M,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ge=r(`h2`,M);i(M,Ge),n(Ge,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ge,o(`# 推荐：组合式增强 API`));let Ke=r(`p`,M);i(M,Ke),n(Ke,`mb-3 text-sm text-base-content/70`),i(Ke,o("如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。"));let qe=e(`rue:component:anchor`);i(M,qe),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:D.value,onChange:e=>D.value=e,className:`mb-3`});h(()=>u(e,M,qe))});let Je=e(`rue:slot:anchor`);i(M,Je),c(()=>{let n=D.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r);let a=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r);let a=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),c(()=>{let e=p(w.Item,{eventKey:`profile`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-primary`}),children:`Profile`});h(()=>u(e,n,r))});let a=e(`rue:component:anchor`);return i(n,a),c(()=>{let e=p(w.Item,{eventKey:`notifications`,extra:y(C,{size:`xs`,children:`2`}),children:`Notifications`});h(()=>u(e,n,a))}),n});u(p(w.ItemGroup,{title:`Account`,children:a}),n,r);let o=e(`rue:component:anchor`);i(n,o),u(p(w.Divider,{}),n,o);let s=e(`rue:component:anchor`);i(n,s);let d=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{eventKey:`security`,children:`Security`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{eventKey:`tokens`,extra:`Beta`,children:`API Tokens`}),n,a),n});return c(()=>{let e=p(w.SubMenu,{eventKey:`settings`,title:`Settings`,icon:y(`span`,{className:`inline-flex h-2.5 w-2.5 rounded-full bg-accent`}),children:d});h(()=>u(e,n,s))}),n});return c(()=>{let e=p(w,{className:`bg-base-200 rounded-box w-80`,selectedKeys:Oe.value,openKeys:ke.value,onSelect:e=>Oe.value=e.selectedKeys,onOpenChange:e=>ke.value=e,children:a});h(()=>u(e,n,r))}),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,M,Je))});let Ye=r(`div`,f);i(f,Ye),n(Ye,`my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose`),i(Ye,o(`下面的示例全部保留 Rue 现有静态/原始结构写法，用于展示 daisyUI 风格能力与兼容性。`));let N=r(`div`,f);i(f,N),n(N,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xe=r(`h2`,N);i(N,Xe),n(Xe,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Xe,o(`# 导航跳转`));let Ze=e(`rue:component:anchor`);i(N,Ze),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:we.value,onChange:e=>we.value=e,className:`mb-3`});h(()=>u(e,N,Ze))});let Qe=e(`rue:slot:anchor`);i(N,Qe),c(()=>{let n=we.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{to:`/examples/hello-world`,children:`路由跳转到 Hello World`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),u(p(w.Item,{onClick:()=>alert(`clicked`),children:`点击执行逻辑`}),n,o),n})}),n,r),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,N,Qe))});let P=r(`div`,f);i(f,P),n(P,`component-preview not-prose text-base-content my-6 lg:my-12`);let $e=r(`h2`,P);i(P,$e),n($e,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i($e,o(`# Menu 通过数据渲染（数组）`));let et=e(`rue:component:anchor`);i(P,et),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Se.value,onChange:e=>Se.value=e,className:`mb-3`});h(()=>u(e,P,et))});let tt=e(`rue:slot:anchor`);i(P,tt),c(()=>{let n=Se.value===`preview`?l(()=>{let n=t(),a=e(`rue:component:anchor`);return i(n,a),u(p(w,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:l(()=>{let n=t(),a=e(`rue:list:start`),o=e(`rue:list:end`);i(n,a),i(n,o);let d=new Map;return c(()=>{d=v({items:je||[],getKey:(e,t)=>t,elements:d,parent:a.parentNode,before:o,singleRoot:!0,start:a,renderItem:(n,a,o,d,f)=>{u(l(()=>{let a=t(),o=r(`li`,a);i(a,o),c(()=>{s(o,`key`,String(f))});let d=e(`rue:component:anchor`);i(o,d),u(p(w.Item,{children:n.label}),o,d);let g=e(`rue:component:anchor`);return i(o,g),u(p(w.Submenu,{children:l(()=>{let a=t(),o=e(`rue:list:start`),d=e(`rue:list:end`);i(a,o),i(a,d);let f=new Map;return c(()=>{f=v({items:n.children||[],getKey:(e,t)=>t,elements:f,parent:o.parentNode,before:d,start:o,renderItem:(n,a,o,d,f)=>{m(l(typeof n==`string`?()=>{let r=t(),a=e(`rue:component:anchor`);return i(r,a),c(()=>{let e=p(w.Item,{key:f,children:n});h(()=>u(e,r,a))}),r}:()=>{let a=t(),o=r(`li`,a);i(a,o),c(()=>{s(o,`key`,String(f))});let d=e(`rue:component:anchor`);i(o,d),u(p(w.Item,{children:n.label}),o,d);let h=e(`rue:component:anchor`);return i(o,h),u(p(w.Submenu,{children:l(()=>{let r=t(),a=e(`rue:list:start`),o=e(`rue:list:end`);i(r,a),i(r,o);let s=new Map;return c(()=>{s=v({items:n.children||[],getKey:(e,t)=>t,elements:s,parent:a.parentNode,before:o,start:a,renderItem:(e,t,n,r,i)=>{m(p(w.Item,{key:i,children:e}),t,n,r)}})}),r})}),o,h),a}),a,o,d)}})}),a})}),o,g),a}),a,o)}})}),n})}),n,a),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,P,tt))});let F=r(`div`,f);i(f,F),n(F,`component-preview not-prose text-base-content my-6 lg:my-12`);let nt=r(`h2`,F);i(F,nt),n(nt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(nt,o(`# Menu 通过数据渲染（数组，组件内部）`));let rt=e(`rue:component:anchor`);i(F,rt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Ce.value,onChange:e=>Ce.value=e,className:`mb-3`});h(()=>u(e,F,rt))});let it=e(`rue:slot:anchor`);i(F,it),c(()=>{let n=Ce.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(w,{items:Me,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`});h(()=>u(e,n,r))}),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`});h(()=>u(e,n,r))}),n});h(()=>u(n,F,it))});let I=r(`div`,f);i(f,I),n(I,`component-preview not-prose text-base-content my-6 lg:my-12`);let at=r(`h2`,I);i(I,at),n(at,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(at,o(`# Menu`));let ot=e(`rue:component:anchor`);i(I,ot),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`});h(()=>u(e,I,ot))});let st=e(`rue:slot:anchor`);i(I,st),c(()=>{let n=ne.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Item 1`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{as:`button`,children:`Item 2`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),u(p(w.Item,{as:`button`,children:`Item 3`}),n,o),n})}),n,r),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,I,st))});let L=r(`div`,f);i(f,L),n(L,`component-preview not-prose text-base-content my-6 lg:my-12`);let ct=r(`h2`,L);i(L,ct),n(ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(ct,o(`# 响应式：小屏垂直，大屏水平`));let lt=e(`rue:component:anchor`);i(L,lt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`});h(()=>u(e,L,lt))});let ut=e(`rue:slot:anchor`);i(L,ut),c(()=>{let n=re.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),u(p(w,{className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Item 1`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{as:`button`,children:`Item 2`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),u(p(w.Item,{as:`button`,children:`Item 3`}),n,o),n})}),n,r),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,L,ut))});let R=r(`div`,f);i(f,R),n(R,`component-preview not-prose text-base-content my-6 lg:my-12`);let dt=r(`h2`,R);i(R,dt),n(dt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(dt,o(`# 仅图标`));let ft=e(`rue:component:anchor`);i(R,ft),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`});h(()=>u(e,R,ft))});let pt=e(`rue:slot:anchor`);i(R,pt),c(()=>{let a=ie.value===`preview`?l(()=>{let a=t(),o=e(`rue:component:anchor`);return i(a,o),u(p(w,{className:`bg-base-200 rounded-box`,children:l(()=>{let a=t(),o=e(`rue:component:anchor`);i(a,o);let c=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});u(p(w.Item,{as:`button`,children:c}),a,o);let d=e(`rue:component:anchor`);i(a,d);let f=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});u(p(w.Item,{as:`button`,children:f}),a,d);let m=e(`rue:component:anchor`);i(a,m);let h=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return u(p(w.Item,{as:`button`,children:h}),a,m),a})}),a,o),a}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(a,R,pt))});let z=r(`div`,f);i(f,z),n(z,`component-preview not-prose text-base-content my-6 lg:my-12`);let mt=r(`h2`,z);i(z,mt),n(mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(mt,o(`# 仅图标（水平）`));let ht=e(`rue:component:anchor`);i(z,ht),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`});h(()=>u(e,z,ht))});let gt=e(`rue:slot:anchor`);i(z,gt),c(()=>{let a=ae.value===`preview`?l(()=>{let a=t(),o=e(`rue:component:anchor`);return i(a,o),u(p(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let a=t(),o=e(`rue:component:anchor`);i(a,o);let c=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e});u(p(w.Item,{as:`button`,children:c}),a,o);let d=e(`rue:component:anchor`);i(a,d);let f=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});u(p(w.Item,{as:`button`,children:f}),a,d);let m=e(`rue:component:anchor`);i(a,m);let h=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return u(p(w.Item,{as:`button`,children:h}),a,m),a})}),a,o),a}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(a,z,gt))});let B=r(`div`,f);i(f,B),n(B,`component-preview not-prose text-base-content my-6 lg:my-12`);let _t=r(`h2`,B);i(B,_t),n(_t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(_t,o(`# 仅图标（带 tooltip）`));let vt=e(`rue:component:anchor`);i(B,vt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`});h(()=>u(e,B,vt))});let yt=e(`rue:slot:anchor`);i(B,yt),c(()=>{let a=oe.value===`preview`?l(()=>{let a=t(),o=e(`rue:component:anchor`);return i(a,o),u(p(w,{className:`bg-base-200 rounded-box`,children:l(()=>{let a=t(),o=e(`rue:component:anchor`);i(a,o);let c=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),e});u(p(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:c}),a,o);let d=e(`rue:component:anchor`);i(a,d);let f=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});u(p(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:f}),a,d);let m=e(`rue:component:anchor`);i(a,m);let h=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e});return u(p(w.Item,{as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:h}),a,m),a})}),a,o),a}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(a,B,yt))});let V=r(`div`,f);i(f,V),n(V,`component-preview not-prose text-base-content my-6 lg:my-12`);let bt=r(`h2`,V);i(V,bt),n(bt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(bt,o(`# 仅图标（水平，tooltip）`));let xt=e(`rue:component:anchor`);i(V,xt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:O.value,onChange:e=>O.value=e,className:`mb-3`});h(()=>u(e,V,xt))});let St=e(`rue:slot:anchor`);i(V,St),c(()=>{let a=O.value===`preview`?l(()=>{let a=t(),o=e(`rue:component:anchor`);return i(a,o),u(p(w,{direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:l(()=>{let a=t(),o=e(`rue:component:anchor`);i(a,o);let c=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),e});u(p(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Home`,children:c}),a,o);let d=e(`rue:component:anchor`);i(a,d);let f=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e});u(p(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Details`,children:f}),a,d);let m=e(`rue:component:anchor`);i(a,m);let h=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let o=r(`path`,a);return i(a,o),s(o,`strokeLinecap`,`round`),s(o,`strokeLinejoin`,`round`),s(o,`strokeWidth`,`2`),s(o,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),e});return u(p(w.Item,{as:`button`,className:`tooltip`,"data-tip":`Stats`,children:h}),a,m),a})}),a,o),a}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(a,V,St))});let H=r(`div`,f);i(f,H),n(H,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ct=r(`h2`,H);i(H,Ct),n(Ct,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ct,o(`# Menu 尺寸`));let wt=e(`rue:component:anchor`);i(H,wt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:se.value,onChange:e=>se.value=e,className:`mb-3`});h(()=>u(e,H,wt))});let Tt=e(`rue:slot:anchor`);i(H,Tt),c(()=>{let a=se.value===`preview`?l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`grid gap-6`);let s=e(`rue:component:anchor`);i(o,s),u(p(w,{size:`xs`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Xsmall 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{as:`button`,children:`Xsmall 2`}),n,a),n})}),o,s);let c=e(`rue:component:anchor`);i(o,c),u(p(w,{size:`sm`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Small 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{as:`button`,children:`Small 2`}),n,a),n})}),o,c);let d=e(`rue:component:anchor`);i(o,d),u(p(w,{size:`md`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Medium 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{as:`button`,children:`Medium 2`}),n,a),n})}),o,d);let f=e(`rue:component:anchor`);i(o,f),u(p(w,{size:`lg`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Large 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{as:`button`,children:`Large 2`}),n,a),n})}),o,f);let m=e(`rue:component:anchor`);return i(o,m),u(p(w,{size:`xl`,className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Xlarge 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{as:`button`,children:`Xlarge 2`}),n,a),n})}),o,m),a}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`});h(()=>u(e,n,r))}),n});h(()=>u(a,H,Tt))});let U=r(`div`,f);i(f,U),n(U,`component-preview not-prose text-base-content my-6 lg:my-12`);let Et=r(`h2`,U);i(U,Et),n(Et,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Et,o(`# 禁用项目`));let Dt=e(`rue:component:anchor`);i(U,Dt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:k.value,onChange:e=>k.value=e,className:`mb-3`});h(()=>u(e,U,Dt))});let Ot=e(`rue:slot:anchor`);i(U,Ot),c(()=>{let n=k.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Enabled item`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{as:`button`,liClassName:`menu-disabled`,children:`disabled item`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),u(p(w.Item,{as:`a`,className:`menu-disabled`,children:`disabled item`}),n,o),n})}),n,r),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,U,Ot))});let W=r(`div`,f);i(f,W),n(W,`component-preview not-prose text-base-content my-6 lg:my-12`);let kt=r(`h2`,W);i(W,kt),n(kt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(kt,o(`# 带图标`));let At=e(`rue:component:anchor`);i(W,At),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ce.value,onChange:e=>ce.value=e,className:`mb-3`});h(()=>u(e,W,At))});let jt=e(`rue:slot:anchor`);i(W,jt),c(()=>{let a=ce.value===`preview`?l(()=>{let a=t(),c=e(`rue:component:anchor`);return i(a,c),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let a=t(),c=e(`rue:component:anchor`);i(a,c);let d=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`strokeWidth`,`2`),s(c,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),i(e,o(`Item 2`)),e});u(p(w.Item,{as:`button`,children:d}),a,c);let f=e(`rue:component:anchor`);i(a,f);let m=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`strokeWidth`,`2`),s(c,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),i(e,o(`Item 1`)),e});u(p(w.Item,{as:`button`,children:m}),a,f);let h=e(`rue:component:anchor`);i(a,h);let g=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),n(a,`h-5 w-5`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`stroke`,`currentColor`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`strokeWidth`,`2`),s(c,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),i(e,o(`Item 3`)),e});return u(p(w.Item,{as:`button`,children:g}),a,h),a})}),a,c),a}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(a,W,jt))});let G=r(`div`,f);i(f,G),n(G,`component-preview not-prose text-base-content my-6 lg:my-12`);let Mt=r(`h2`,G);i(G,Mt),n(Mt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Mt,o(`# 带图标与徽章（响应式）`));let Nt=e(`rue:component:anchor`);i(G,Nt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:le.value,onChange:e=>le.value=e,className:`mb-3`});h(()=>u(e,G,Nt))});let Pt=e(`rue:slot:anchor`);i(G,Pt),c(()=>{let d=le.value===`preview`?l(()=>{let c=t(),d=e(`rue:component:anchor`);return i(c,d),u(p(w,{className:`bg-base-200 lg:menu-horizontal rounded-box`,children:l(()=>{let c=t(),d=e(`rue:component:anchor`);i(c,d);let f=l(()=>{let a=t(),c=r(`svg`,a);i(a,c),s(c,`xmlns`,`http://www.w3.org/2000/svg`),n(c,`h-5 w-5`),s(c,`fill`,`none`),s(c,`viewBox`,`0 0 24 24`),s(c,`stroke`,`currentColor`);let l=r(`path`,c);i(c,l),s(l,`strokeLinecap`,`round`),s(l,`strokeLinejoin`,`round`),s(l,`strokeWidth`,`2`),s(l,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),i(a,o(`Inbox`));let d=e(`rue:component:anchor`);return i(a,d),u(p(C,{size:`xs`,children:`99+`}),a,d),a});u(p(w.Item,{as:`button`,children:f}),c,d);let m=e(`rue:component:anchor`);i(c,m);let h=l(()=>{let c=t(),l=r(`svg`,c);i(c,l),s(l,`xmlns`,`http://www.w3.org/2000/svg`),n(l,`h-5 w-5`),s(l,`fill`,`none`),s(l,`viewBox`,`0 0 24 24`),s(l,`stroke`,`currentColor`);let d=r(`path`,l);i(l,d),s(d,`strokeLinecap`,`round`),s(d,`strokeLinejoin`,`round`),s(d,`strokeWidth`,`2`),s(d,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),i(c,o(`Updates`));let f=g(c);i(c,f),a(f,` `);let m=e(`rue:component:anchor`);return i(c,m),u(p(C,{size:`xs`,variant:`warning`,children:`NEW`}),c,m),c});u(p(w.Item,{as:`button`,children:h}),c,m);let _=e(`rue:component:anchor`);i(c,_);let v=l(()=>{let n=t();i(n,o(`Stats`));let r=e(`rue:component:anchor`);return i(n,r),u(p(C,{size:`xs`,variant:`info`}),n,r),n});return u(p(w.Item,{as:`button`,children:v}),c,_),c})}),c,d),c}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(d,G,Pt))});let K=r(`div`,f);i(f,K),n(K,`component-preview not-prose text-base-content my-6 lg:my-12`);let Ft=r(`h2`,K);i(K,Ft),n(Ft,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Ft,o(`# 去除内边距和圆角`));let It=e(`rue:component:anchor`);i(K,It),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ue.value,onChange:e=>ue.value=e,className:`mb-3`});h(()=>u(e,K,It))});let Lt=e(`rue:slot:anchor`);i(K,Lt),c(()=>{let n=ue.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),u(p(w,{className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`Item 1`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Item 2`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),u(p(w.Item,{children:`Item 3`}),n,o),n})}),n,r),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,K,Lt))});let q=r(`div`,f);i(f,q),n(q,`component-preview not-prose text-base-content my-6 lg:my-12`);let Rt=r(`h2`,q);i(q,Rt),n(Rt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Rt,o(`# 带标题`));let zt=e(`rue:component:anchor`);i(q,zt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:de.value,onChange:e=>de.value=e,className:`mb-3`});h(()=>u(e,q,zt))});let Bt=e(`rue:slot:anchor`);i(q,Bt),c(()=>{let n=de.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Title,{children:`Title`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Item 1`}),n,a);let o=e(`rue:component:anchor`);i(n,o),u(p(w.Item,{children:`Item 2`}),n,o);let s=e(`rue:component:anchor`);return i(n,s),u(p(w.Item,{children:`Item 3`}),n,s),n})}),n,r),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,q,Bt))});let J=r(`div`,f);i(f,J),n(J,`component-preview not-prose text-base-content my-6 lg:my-12`);let Vt=r(`h2`,J);i(J,Vt),n(Vt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Vt,o(`# 标题作为父级`));let Ht=e(`rue:component:anchor`);i(J,Ht),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:fe.value,onChange:e=>fe.value=e,className:`mb-3`});h(()=>u(e,J,Ht))});let Ut=e(`rue:slot:anchor`);i(J,Ut),c(()=>{let n=fe.value===`preview`?l(()=>{let n=t(),a=e(`rue:component:anchor`);return i(n,a),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),a=r(`li`,n);i(n,a);let o=e(`rue:component:anchor`);i(a,o),u(p(w.Title,{as:`h2`,children:`Title`}),a,o);let s=r(`ul`,a);i(a,s);let c=e(`rue:component:anchor`);i(s,c),u(p(w.Item,{children:`Item 1`}),s,c);let l=e(`rue:component:anchor`);i(s,l),u(p(w.Item,{children:`Item 2`}),s,l);let d=e(`rue:component:anchor`);return i(s,d),u(p(w.Item,{children:`Item 3`}),s,d),n})}),n,a),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,J,Ut))});let Y=r(`div`,f);i(f,Y),n(Y,`component-preview not-prose text-base-content my-6 lg:my-12`);let Wt=r(`h2`,Y);i(Y,Wt),n(Wt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Wt,o(`# 子菜单`));let Gt=e(`rue:component:anchor`);i(Y,Gt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:pe.value,onChange:e=>pe.value=e,className:`mb-3`});h(()=>u(e,Y,Gt))});let Kt=e(`rue:slot:anchor`);i(Y,Kt),c(()=>{let n=pe.value===`preview`?l(()=>{let n=t(),a=e(`rue:component:anchor`);return i(n,a),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{as:`button`,children:`Item 1`}),n,a);let o=r(`li`,n);i(n,o);let s=e(`rue:component:anchor`);i(o,s),u(p(w.Item,{as:`button`,children:`Parent`}),o,s);let c=e(`rue:component:anchor`);i(o,c);let d=l(()=>{let n=t(),a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{as:`button`,children:`Submenu 1`}),n,a);let o=e(`rue:component:anchor`);i(n,o),u(p(w.Item,{as:`button`,children:`Submenu 2`}),n,o);let s=r(`li`,n);i(n,s);let c=e(`rue:component:anchor`);i(s,c),u(p(w.Item,{as:`button`,children:`Parent`}),s,c);let d=e(`rue:component:anchor`);i(s,d);let f=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{as:`button`,children:`Submenu 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{as:`button`,children:`Submenu 2`}),n,a),n});return u(p(w.Submenu,{children:f}),s,d),n});u(p(w.Submenu,{children:d}),o,c);let f=e(`rue:component:anchor`);return i(n,f),u(p(w.Item,{as:`button`,children:`Item 3`}),n,f),n})}),n,a),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,Y,Kt))});let X=r(`div`,f);i(f,X),n(X,`component-preview not-prose text-base-content my-6 lg:my-12`);let qt=r(`h2`,X);i(X,qt),n(qt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(qt,o(`# 可折叠子菜单`));let Jt=e(`rue:component:anchor`);i(X,Jt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:me.value,onChange:e=>me.value=e,className:`mb-3`});h(()=>u(e,X,Jt))});let Yt=e(`rue:slot:anchor`);i(X,Yt),c(()=>{let n=me.value===`preview`?l(()=>{let n=t(),a=e(`rue:component:anchor`);return i(n,a),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{as:`button`,children:`Item 1`}),n,a);let s=r(`li`,n);i(n,s);let c=r(`details`,s);i(s,c);let l=r(`summary`,c);i(c,l),i(l,o(`Parent`));let d=r(`ul`,c);i(c,d);let f=e(`rue:component:anchor`);i(d,f),u(p(w.Item,{as:`button`,children:`Submenu 1`}),d,f);let m=e(`rue:component:anchor`);i(d,m),u(p(w.Item,{as:`button`,children:`Submenu 2`}),d,m);let h=r(`li`,d);i(d,h);let g=r(`details`,h);i(h,g);let _=r(`summary`,g);i(g,_),i(_,o(`Parent`));let v=r(`ul`,g);i(g,v);let y=e(`rue:component:anchor`);i(v,y),u(p(w.Item,{as:`button`,children:`Submenu 1`}),v,y);let b=e(`rue:component:anchor`);i(v,b),u(p(w.Item,{as:`button`,children:`Submenu 2`}),v,b);let x=e(`rue:component:anchor`);return i(n,x),u(p(w.Item,{as:`button`,children:`Item 3`}),n,x),n})}),n,a),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,X,Yt))});let Z=r(`div`,f);i(f,Z),n(Z,`component-preview not-prose text-base-content my-6 lg:my-12`);let Xt=r(`h2`,Z);i(Z,Xt),n(Xt,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(Xt,o(`# 通过类名控制展开（JS）`));let Zt=e(`rue:component:anchor`);i(Z,Zt),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:he.value,onChange:e=>he.value=e,className:`mb-3`});h(()=>u(e,Z,Zt))});let Qt=e(`rue:slot:anchor`);i(Z,Qt),c(()=>{let a=he.value===`preview`?l(()=>{let a=t(),o=r(`div`,a);i(a,o),n(o,`grid gap-6`);let s=e(`rue:component:anchor`);i(o,s),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Item 1`}),n,a);let o=r(`li`,n);i(n,o);let s=e(`rue:component:anchor`);i(o,s),u(p(w.DropdownToggle,{onClick:Ae,children:`Parent`}),o,s);let c=e(`rue:component:anchor`);i(o,c);let d=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`Submenu 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{children:`Submenu 2`}),n,a),n});return u(p(w.Dropdown,{children:d}),o,c),n})}),o,s);let d=e(`rue:component:anchor`);return i(o,d),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Item 1`}),n,a);let o=r(`li`,n);i(n,o);let s=e(`rue:component:anchor`);i(o,s),c(()=>{let e=p(w.DropdownToggle,{show:!0,onClick:Ae,children:`Parent`});h(()=>u(e,o,s))});let d=e(`rue:component:anchor`);i(o,d);let f=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`Submenu 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{children:`Submenu 2`}),n,a),n});return c(()=>{let e=p(w.Dropdown,{show:!0,children:f});h(()=>u(e,o,d))}),n})}),o,d),a}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(a,Z,Qt))});let Q=r(`div`,f);i(f,Q),n(Q,`component-preview not-prose text-base-content my-6 lg:my-12`);let $t=r(`h2`,Q);i(Q,$t),n($t,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i($t,o(`# 文件树`));let en=e(`rue:component:anchor`);i(Q,en),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ge.value,onChange:e=>ge.value=e,className:`mb-3`});h(()=>u(e,Q,en))});let tn=e(`rue:slot:anchor`);i(Q,tn),c(()=>{let a=ge.value===`preview`?l(()=>{let a=t(),c=e(`rue:component:anchor`);return i(a,c),u(p(w,{size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full`,children:l(()=>{let a=t(),c=e(`rue:component:anchor`);i(a,c);let d=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`strokeWidth`,`1.5`),s(a,`stroke`,`currentColor`),n(a,`w-4 h-4`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(e,o(`resume.pdf`)),e});u(p(w.Item,{as:`button`,children:d}),a,c);let f=r(`li`,a);i(a,f);let m=r(`details`,f);i(f,m);let h=r(`summary`,m);i(m,h);let g=r(`svg`,h);i(h,g),s(g,`xmlns`,`http://www.w3.org/2000/svg`),s(g,`fill`,`none`),s(g,`viewBox`,`0 0 24 24`),s(g,`strokeWidth`,`1.5`),s(g,`stroke`,`currentColor`),n(g,`w-4 h-4`);let _=r(`path`,g);i(g,_),s(_,`strokeLinecap`,`round`),s(_,`strokeLinejoin`,`round`),s(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(h,o(`My Files`));let v=r(`ul`,m);i(m,v);let y=e(`rue:component:anchor`);i(v,y);let b=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`strokeWidth`,`1.5`),s(a,`stroke`,`currentColor`),n(a,`w-4 h-4`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(e,o(`Project-final.psd`)),e});u(p(w.Item,{as:`button`,children:b}),v,y);let x=e(`rue:component:anchor`);i(v,x);let S=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`strokeWidth`,`1.5`),s(a,`stroke`,`currentColor`),n(a,`w-4 h-4`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(e,o(`Project-final-2.psd`)),e});u(p(w.Item,{as:`button`,children:S}),v,x);let C=r(`li`,v);i(v,C);let T=r(`details`,C);i(C,T);let ee=r(`summary`,T);i(T,ee);let E=r(`svg`,ee);i(ee,E),s(E,`xmlns`,`http://www.w3.org/2000/svg`),s(E,`fill`,`none`),s(E,`viewBox`,`0 0 24 24`),s(E,`strokeWidth`,`1.5`),s(E,`stroke`,`currentColor`),n(E,`w-4 h-4`);let te=r(`path`,E);i(E,te),s(te,`strokeLinecap`,`round`),s(te,`strokeLinejoin`,`round`),s(te,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(ee,o(`Images`));let D=r(`ul`,T);i(T,D);let ne=e(`rue:component:anchor`);i(D,ne);let re=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`strokeWidth`,`1.5`),s(a,`stroke`,`currentColor`),n(a,`w-4 h-4`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(e,o(`Screenshot1.png`)),e});u(p(w.Item,{as:`button`,children:re}),D,ne);let ie=e(`rue:component:anchor`);i(D,ie);let ae=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`strokeWidth`,`1.5`),s(a,`stroke`,`currentColor`),n(a,`w-4 h-4`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(e,o(`Screenshot2.png`)),e});u(p(w.Item,{as:`button`,children:ae}),D,ie);let oe=r(`li`,D);i(D,oe);let O=r(`details`,oe);i(oe,O);let se=r(`summary`,O);i(O,se);let k=r(`svg`,se);i(se,k),s(k,`xmlns`,`http://www.w3.org/2000/svg`),s(k,`fill`,`none`),s(k,`viewBox`,`0 0 24 24`),s(k,`strokeWidth`,`1.5`),s(k,`stroke`,`currentColor`),n(k,`w-4 h-4`);let ce=r(`path`,k);i(k,ce),s(ce,`strokeLinecap`,`round`),s(ce,`strokeLinejoin`,`round`),s(ce,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),i(se,o(`Others`));let le=r(`ul`,O);i(O,le);let ue=e(`rue:component:anchor`);i(le,ue);let de=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`strokeWidth`,`1.5`),s(a,`stroke`,`currentColor`),n(a,`w-4 h-4`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),i(e,o(`Screenshot3.png`)),e});u(p(w.Item,{as:`button`,children:de}),le,ue);let fe=e(`rue:component:anchor`);i(a,fe);let pe=l(()=>{let e=t(),a=r(`svg`,e);i(e,a),s(a,`xmlns`,`http://www.w3.org/2000/svg`),s(a,`fill`,`none`),s(a,`viewBox`,`0 0 24 24`),s(a,`strokeWidth`,`1.5`),s(a,`stroke`,`currentColor`),n(a,`w-4 h-4`);let c=r(`path`,a);return i(a,c),s(c,`strokeLinecap`,`round`),s(c,`strokeLinejoin`,`round`),s(c,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),i(e,o(`reports-final-2.pdf`)),e});return u(p(w.Item,{as:`button`,children:pe}),a,fe),a})}),a,c),a}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu size="xs" className="bg-base-200 rounded-box max-w-xs w-full">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(a,Q,tn))});let $=r(`div`,f);i(f,$),n($,`component-preview not-prose text-base-content my-6 lg:my-12`);let nn=r(`h2`,$);i($,nn),n(nn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(nn,o(`# 激活项`));let rn=e(`rue:component:anchor`);i($,rn),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:_e.value,onChange:e=>_e.value=e,className:`mb-3`});h(()=>u(e,$,rn))});let an=e(`rue:slot:anchor`);i($,an),c(()=>{let n=_e.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),u(p(w,{className:`bg-base-200 rounded-box w-56`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`Item 1`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{className:`menu-active`,children:`Item 2`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),u(p(w.Item,{children:`Item 3`}),n,o),n})}),n,r),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,$,an))});let on=r(`div`,f);i(f,on),n(on,`component-preview not-prose text-base-content my-6 lg:my-12`);let sn=r(`h2`,on);i(on,sn),n(sn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(sn,o(`# 水平菜单`));let cn=e(`rue:component:anchor`);i(on,cn),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ve.value,onChange:e=>ve.value=e,className:`mb-3`});h(()=>u(e,on,cn))});let ln=e(`rue:slot:anchor`);i(on,ln),c(()=>{let n=ve.value===`preview`?l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),u(p(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`Item 1`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Item 2`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),u(p(w.Item,{children:`Item 3`}),n,o),n})}),n,r),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,on,ln))});let un=r(`div`,f);i(f,un),n(un,`component-preview not-prose text-base-content my-6 lg:my-12`);let dn=r(`h2`,un);i(un,dn),n(dn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(dn,o(`# 水平子菜单`));let fn=e(`rue:component:anchor`);i(un,fn),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ye.value,onChange:e=>ye.value=e,className:`mb-3`});h(()=>u(e,un,fn))});let pn=e(`rue:slot:anchor`);i(un,pn),c(()=>{let n=ye.value===`preview`?l(()=>{let n=t(),a=e(`rue:component:anchor`);return i(n,a),u(p(w,{direction:`horizontal`,className:`bg-base-200 rounded-box`,children:l(()=>{let n=t(),a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Item 1`}),n,a);let o=r(`li`,n);i(n,o);let s=e(`rue:component:anchor`);i(o,s),u(p(w.Item,{children:`Parent`}),o,s);let c=e(`rue:component:anchor`);i(o,c);let d=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`Submenu 1`}),n,r);let a=e(`rue:component:anchor`);return i(n,a),u(p(w.Item,{children:`Submenu 2`}),n,a),n});u(p(w.Submenu,{children:d}),o,c);let f=e(`rue:component:anchor`);return i(n,f),u(p(w.Item,{children:`Item 3`}),n,f),n})}),n,a),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,un,pn))});let mn=r(`div`,f);i(f,mn),n(mn,`component-preview not-prose text-base-content my-6 lg:my-12`);let hn=r(`h2`,mn);i(mn,hn),n(hn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(hn,o(`# Mega 菜单（响应式）`));let gn=e(`rue:component:anchor`);i(mn,gn),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:be.value,onChange:e=>be.value=e,className:`mb-3`});h(()=>u(e,mn,gn))});let _n=e(`rue:slot:anchor`);i(mn,_n),c(()=>{let n=be.value===`preview`?l(()=>{let n=t(),a=e(`rue:component:anchor`);return i(n,a),u(p(w,{className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:l(()=>{let n=t(),a=r(`li`,n);i(n,a);let o=e(`rue:component:anchor`);i(a,o),u(p(w.Item,{children:`Solutions`}),a,o);let s=e(`rue:component:anchor`);i(a,s);let c=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`Design`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Development`}),n,a);let o=e(`rue:component:anchor`);i(n,o),u(p(w.Item,{children:`Hosting`}),n,o);let s=e(`rue:component:anchor`);return i(n,s),u(p(w.Item,{children:`Domain register`}),n,s),n});u(p(w.Submenu,{children:c}),a,s);let d=r(`li`,n);i(n,d);let f=e(`rue:component:anchor`);i(d,f),u(p(w.Item,{children:`Enterprise`}),d,f);let m=e(`rue:component:anchor`);i(d,m);let h=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`CRM software`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Marketing management`}),n,a);let o=e(`rue:component:anchor`);i(n,o),u(p(w.Item,{children:`Security`}),n,o);let s=e(`rue:component:anchor`);return i(n,s),u(p(w.Item,{children:`Consulting`}),n,s),n});u(p(w.Submenu,{children:h}),d,m);let g=r(`li`,n);i(n,g);let _=e(`rue:component:anchor`);i(g,_),u(p(w.Item,{children:`Products`}),g,_);let v=e(`rue:component:anchor`);i(g,v);let y=l(()=>{let n=t(),a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`UI Kit`}),n,a);let o=e(`rue:component:anchor`);i(n,o),u(p(w.Item,{children:`WordPress themes`}),n,o);let s=e(`rue:component:anchor`);i(n,s),u(p(w.Item,{children:`WordPress plugins`}),n,s);let c=r(`li`,n);i(n,c);let d=e(`rue:component:anchor`);i(c,d),u(p(w.Item,{children:`Open source`}),c,d);let f=e(`rue:component:anchor`);i(c,f);let m=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`Auth management system`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`VScode theme`}),n,a);let o=e(`rue:component:anchor`);return i(n,o),u(p(w.Item,{children:`Color picker app`}),n,o),n});return u(p(w.Submenu,{children:m}),c,f),n});u(p(w.Submenu,{children:y}),g,v);let b=r(`li`,n);i(n,b);let x=e(`rue:component:anchor`);i(b,x),u(p(w.Item,{children:`Company`}),b,x);let S=e(`rue:component:anchor`);i(b,S);let C=l(()=>{let n=t(),r=e(`rue:component:anchor`);i(n,r),u(p(w.Item,{children:`About us`}),n,r);let a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{children:`Contact us`}),n,a);let o=e(`rue:component:anchor`);i(n,o),u(p(w.Item,{children:`Privacy policy`}),n,o);let s=e(`rue:component:anchor`);return i(n,s),u(p(w.Item,{children:`Press kit`}),n,s),n});return u(p(w.Submenu,{children:C}),b,S),n})}),n,a),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,mn,_n))});let vn=r(`div`,f);i(f,vn),n(vn,`component-preview not-prose text-base-content my-6 lg:my-12`);let yn=r(`h2`,vn);i(vn,yn),n(yn,`component-preview-title mt-2 mb-1 text-lg font-semibold`),i(yn,o(`# 可折叠（响应式）`));let bn=e(`rue:component:anchor`);i(vn,bn),c(()=>{let e=p(S,{style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:xe.value,onChange:e=>xe.value=e,className:`mb-3`});h(()=>u(e,vn,bn))});let xn=e(`rue:slot:anchor`);i(vn,xn),c(()=>{let n=xe.value===`preview`?l(()=>{let n=t(),a=e(`rue:component:anchor`);return i(n,a),u(p(w,{className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:l(()=>{let n=t(),a=e(`rue:component:anchor`);i(n,a),u(p(w.Item,{as:`button`,children:`Item 1`}),n,a);let s=r(`li`,n);i(n,s);let c=r(`details`,s);i(s,c);let l=r(`summary`,c);i(c,l),i(l,o(`Parent item`));let d=r(`ul`,c);i(c,d);let f=e(`rue:component:anchor`);i(d,f),u(p(w.Item,{as:`button`,children:`Submenu 1`}),d,f);let m=e(`rue:component:anchor`);i(d,m),u(p(w.Item,{as:`button`,children:`Submenu 2`}),d,m);let h=r(`li`,d);i(d,h);let g=r(`details`,h);i(h,g);let _=r(`summary`,g);i(g,_),i(_,o(`Parent`));let v=r(`ul`,g);i(g,v);let y=e(`rue:component:anchor`);i(v,y),u(p(w.Item,{as:`button`,children:`item 1`}),v,y);let b=e(`rue:component:anchor`);i(v,b),u(p(w.Item,{as:`button`,children:`item 2`}),v,b);let x=e(`rue:component:anchor`);return i(n,x),u(p(w.Item,{as:`button`,children:`Item 3`}),n,x),n})}),n,a),n}):l(()=>{let n=t(),r=e(`rue:component:anchor`);return i(n,r),c(()=>{let e=p(x,{className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`});h(()=>u(e,n,r))}),n});h(()=>u(n,vn,xn))});let Sn=r(`h2`,f);i(f,Sn),i(Sn,o(`API`));let Cn=r(`p`,f);i(f,Cn),n(Cn,`text-sm text-base-content/70`),i(Cn,o("`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。"));let wn=r(`h3`,f);i(f,wn),i(wn,o(`Menu.Item 链接相关`));let Tn=e(`rue:component:anchor`);return i(f,Tn),c(()=>{let e=p(T,{rows:ee});h(()=>u(e,f,Tn))}),d})}),f,_),f})};export{E as default};
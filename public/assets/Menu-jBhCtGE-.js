import{Bt as e,C as t,Et as n,H as r,K as i,L as a,Mt as o,S as s,V as c,W as l,X as u,Y as d,_n as f,_t as p,bn as m,fn as h,gn as g,hn as _,ht as v,it as y,kn as b,mn as x,nt as S,ot as C,q as w,rt as T,tt as E,wn as D,x as O,z as k}from"./rue-runtime-CwEGJ854.js";import{t as A}from"./Code-B3jCYMAr.js";import{t as j}from"./tabs-DUviBzjL.js";import{t as M}from"./badge-Lxy6ry0O.js";import{t as N}from"./menu-DezkwURB.js";import{r as P}from"./SidebarPlaygroundDesign-CwCJwf8H.js";var F=f(`<div class="not-prose overflow-x-auto rounded-box border border-base-300 bg-base-100"><table class="table table-zebra"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><!--rue:text-hole:0--></tbody></table></div>`),I=f('<div class="max-w-none prose prose-sm md:prose-base"><h1>Menu 菜单</h1><p class="text-sm mt-3 mb-3">Menu 用于垂直或水平展示导航链接。它同时支持组合静态结构，以及 `items / selectedKeys / openKeys / group / divider / extra` 等数据驱动 API。</p><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 推荐：items 数据驱动导航</h2><p class="mb-3 text-sm text-base-content/70">适合后台导航、设置菜单、侧边栏这类需要受控选中态和展开态的场景。</p><!--rue:opaque-hole:0--><!--rue:text-hole:1--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 推荐：多选、分组与分割线</h2><p class="mb-3 text-sm text-base-content/70">沿着常见菜单组件的 `multiple + group + divider` 思路，适合消息筛选、标签面板一类场景。</p><!--rue:opaque-hole:2--><!--rue:text-hole:3--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 推荐：组合式语义 API</h2><p class="mb-3 text-sm text-base-content/70">如果你更喜欢手写 JSX 结构，可以直接使用 `Menu.SubMenu / Menu.ItemGroup / Menu.Divider`。</p><!--rue:opaque-hole:4--><!--rue:text-hole:5--></div><div class="my-8 rounded-box border border-base-300/60 bg-base-100 px-4 py-3 text-sm text-base-content/70 not-prose">下面的示例全部使用 Rue 当前静态/基础结构写法，用于展示 daisyUI 风格能力与覆盖范围。</div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 导航跳转</h2><!--rue:opaque-hole:6--><!--rue:text-hole:7--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Menu 通过数据渲染（数组）</h2><!--rue:opaque-hole:8--><!--rue:text-hole:9--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Menu 通过数据渲染（数组，组件内部）</h2><!--rue:opaque-hole:10--><!--rue:text-hole:11--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Menu</h2><!--rue:opaque-hole:12--><!--rue:text-hole:13--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 响应式：小屏垂直，大屏水平</h2><!--rue:opaque-hole:14--><!--rue:text-hole:15--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 仅图标</h2><!--rue:opaque-hole:16--><!--rue:text-hole:17--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 仅图标（水平）</h2><!--rue:opaque-hole:18--><!--rue:text-hole:19--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 仅图标（带 tooltip）</h2><!--rue:opaque-hole:20--><!--rue:text-hole:21--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 仅图标（水平，tooltip）</h2><!--rue:opaque-hole:22--><!--rue:text-hole:23--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Menu 尺寸</h2><!--rue:opaque-hole:24--><!--rue:text-hole:25--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 禁用项目</h2><!--rue:opaque-hole:26--><!--rue:text-hole:27--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 带图标</h2><!--rue:opaque-hole:28--><!--rue:text-hole:29--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 带图标与徽章（响应式）</h2><!--rue:opaque-hole:30--><!--rue:text-hole:31--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 去除内边距和圆角</h2><!--rue:opaque-hole:32--><!--rue:text-hole:33--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 带标题</h2><!--rue:opaque-hole:34--><!--rue:text-hole:35--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 标题作为父级</h2><!--rue:opaque-hole:36--><!--rue:text-hole:37--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 子菜单</h2><!--rue:opaque-hole:38--><!--rue:text-hole:39--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 可折叠子菜单</h2><!--rue:opaque-hole:40--><!--rue:text-hole:41--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 通过类名控制展开（JS）</h2><!--rue:opaque-hole:42--><!--rue:text-hole:43--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 文件树</h2><!--rue:opaque-hole:44--><!--rue:text-hole:45--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 激活项</h2><!--rue:opaque-hole:46--><!--rue:text-hole:47--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 水平菜单</h2><!--rue:opaque-hole:48--><!--rue:text-hole:49--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 水平子菜单</h2><!--rue:opaque-hole:50--><!--rue:text-hole:51--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># Mega 菜单（响应式）</h2><!--rue:opaque-hole:52--><!--rue:text-hole:53--></div><div class="component-preview not-prose text-base-content my-6 lg:my-12"><h2 class="component-preview-title mt-2 mb-1 text-lg font-semibold"># 可折叠（响应式）</h2><!--rue:opaque-hole:54--><!--rue:text-hole:55--></div><h2>API</h2><p class="text-sm text-base-content/70">`Menu.Item` 内置了常用链接能力，导航跳转示例里出现的 `to`、`href`、`target` 等属性可直接用于菜单项。</p><h3>Menu.Item 链接相关</h3><!--rue:opaque-hole:56--></div>'),ee=e=>{let r=l(e.rows);return w(n(Object.assign(e=>{let i=F().content.cloneNode(!0).firstChild,a=i.childNodes[0].childNodes[1].childNodes[0],o=a.parentNode,c=[];return D(()=>{let e=r.get()||[];c=t(o,a,c,e,(e,t)=>e.prop,(e,t)=>{let r=l(e),i=l(t);return s((e,t,i)=>O(e,i,()=>n(Object.assign(e=>{let t=_(`tr`,e),n=_(`td`,t);h(t,n);let i=_(`code`,n);h(n,i);let a=g(``);h(i,a),m(a,()=>r.get().prop);let o=_(`td`,t);h(t,o);let s=g(``);h(o,s),m(s,()=>r.get().description);let c=_(`td`,t);h(t,c);let l=_(`code`,c);h(c,l);let u=g(``);h(l,u),m(u,()=>r.get().type);let d=_(`td`,t);h(t,d);let f=_(`code`,d);h(d,f);let p=g(``);return h(f,p),m(p,()=>r.get().defaultValue),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0}))),(n,a)=>{e=n,t=a,r.set(n),i.set(a)})})}),{__rue_compiled_host:i,__rue_compiled_roots:[i]}},{__rue_compiled_explicit_roots:!0})),e=>k(()=>{r.set(e.rows)}),()=>e)},te=[{prop:`as`,description:`指定交互节点类型；传入 to / href 时通常保持默认 a，纯动作项可改成 button 或 span。`,type:`'a' | 'button' | 'span'`,defaultValue:`'a'`},{prop:`href`,description:`外链或普通锚点地址；存在 href 且未传 to 时渲染原生 a 标签。`,type:`string`,defaultValue:`-`},{prop:`to`,description:`Rue Router 路由地址；传入后渲染 RouterLink，适合站内导航菜单。`,type:`string`,defaultValue:`-`},{prop:`target / rel`,description:`外链透传属性；target="_blank" 且未传 rel 时，会自动补上安全的 rel。`,type:`string`,defaultValue:`-`},{prop:`title`,description:`透传到交互节点的 title，适合长文案或补充说明。`,type:`string`,defaultValue:`-`},{prop:`disabled`,description:`禁用点击与导航；会移除 href / to 的实际跳转并输出 aria-disabled。`,type:`boolean`,defaultValue:`false`},{prop:`onClick`,description:`点击回调；可与 href / to 共用，也可配合 preventDefault 自定义拦截逻辑。`,type:`(event: MouseEvent) => void`,defaultValue:`-`},{prop:`icon / extra`,description:`菜单项前置图标与右侧补充内容，适合链接导航里展示状态、快捷键或徽标。`,type:`any`,defaultValue:`-`}],L=()=>{let t=e(`preview`),s=e(`preview`),l=e(`preview`),f=e(`preview`),m=e(`preview`),F=e(`preview`),L=e(`preview`),R=e(`preview`),z=e(`preview`),B=e(`preview`),V=e(`preview`),H=e(`preview`),U=e(`preview`),W=e(`preview`),G=e(`preview`),K=e(`preview`),q=e(`preview`),J=e(`preview`),Y=e(`preview`),X=e(`preview`),Z=e(`preview`),Q=e(`preview`),$=e(`preview`),ne=e(`preview`),re=e(`preview`),ie=e(`preview`),ae=e(`preview`),oe=e(`preview`),se=e(`overview`),ce=e([`workspace`]),le=e([`profile`]),ue=e([`settings`]),de=e=>{let t=e.currentTarget,n=t?.nextElementSibling;if(!t||!n)return;let r=!t.classList.contains(`menu-dropdown-show`);t.classList.toggle(`menu-dropdown-show`,r),n.classList.toggle(`menu-dropdown-show`,r),t.setAttribute(`aria-expanded`,r?`true`:`false`)},fe=[{label:`Solutions`,children:[`Design`,`Development`,`Hosting`,`Domain register`]},{label:`Enterprise`,children:[`CRM software`,`Marketing management`,`Security`,`Consulting`]},{label:`Products`,children:[`UI Kit`,`WordPress themes`,`WordPress plugins`,{label:`Open source`,children:[`Auth management system`,`VScode theme`,`Color picker app`]}]},{label:`Company`,children:[`About us`,`Contact us`,`Privacy policy`,`Press kit`]}],pe=[{kind:`title`,children:`Main`},{kind:`item`,children:`Solutions`,submenu:{items:[`Design`,`Development`,`Hosting`,`Domain register`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Enterprise`,dropdownToggle:{children:`More`},dropdown:{visible:!0,items:[`CRM software`,`Marketing management`,`Security`,`Consulting`].map(e=>({kind:`item`,children:e}))}},{kind:`item`,children:`Products`,submenu:{items:[{kind:`item`,children:`UI Kit`},{kind:`item`,children:`WordPress themes`},{kind:`item`,children:`WordPress plugins`},{kind:`item`,children:`Open source`,submenu:{items:[`Auth management system`,`VScode theme`,`Color picker app`].map(e=>({kind:`item`,children:e}))}}]}},{kind:`item`,children:`Company`,submenu:{items:[`About us`,`Contact us`,`Privacy policy`,`Press kit`].map(e=>({kind:`item`,children:e}))}}],me=[{type:`group`,label:`Console`,children:[{key:`overview`,label:`Overview`,icon:n(Object.assign(e=>{let t=_(`span`,e);return t.className=`inline-flex h-2.5 w-2.5 rounded-full bg-primary`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),extra:r(M,()=>({size:`xs`,variant:`info`,children:(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=S();return h(t,g(`Live`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))},{type:`submenu`,key:`workspace`,label:`Workspace`,icon:n(Object.assign(e=>{let t=_(`span`,e);return t.className=`inline-flex h-2.5 w-2.5 rounded-full bg-secondary`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),children:[{key:`projects`,label:`Projects`},{key:`deployments`,label:`Deployments`},{key:`activity`,label:`Activity Feed`,extra:r(M,()=>({size:`xs`,variant:`warning`,children:(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=S();return h(t,g(`12`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}]}]},{type:`divider`},{type:`group`,label:`Team`,children:[{key:`billing`,label:`Billing`,extra:`Cmd+B`},{key:`members`,label:`Members`,extra:r(M,()=>({size:`xs`,variant:`success`,children:(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=S();return h(t,g(`8`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))},{key:`danger-zone`,label:`Danger Zone`,danger:!0}]}],he=[{type:`group`,label:`Inbox`,children:[{key:`mentions`,label:`Mentions`,extra:r(M,()=>({size:`xs`,variant:`error`,children:(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=S();return h(t,g(`3`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))},{key:`reviews`,label:`Code Reviews`,extra:r(M,()=>({size:`xs`,variant:`warning`,children:(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=S();return h(t,g(`5`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))}))}]},{type:`divider`,dashed:!0},{type:`group`,label:`Archive`,children:[{key:`archived`,label:`Archived Threads`},{key:`muted`,label:`Muted Channels`,disabled:!0}]}];return o(()=>w((()=>{let e=v(()=>{let e=S(),o=I().content.cloneNode(!0),w=o.firstChild,k=w.childNodes[2].childNodes[2],P=k.parentNode,ge=w.childNodes[2].childNodes[3],_e=ge.parentNode,ve=w.childNodes[3].childNodes[2],ye=ve.parentNode,be=w.childNodes[3].childNodes[3],xe=be.parentNode,Se=w.childNodes[4].childNodes[2],Ce=Se.parentNode,we=w.childNodes[4].childNodes[3],Te=we.parentNode,Ee=w.childNodes[6].childNodes[1],De=Ee.parentNode,Oe=w.childNodes[6].childNodes[2],ke=Oe.parentNode,Ae=w.childNodes[7].childNodes[1],je=Ae.parentNode,Me=w.childNodes[7].childNodes[2],Ne=Me.parentNode,Pe=w.childNodes[8].childNodes[1],Fe=Pe.parentNode,Ie=w.childNodes[8].childNodes[2],Le=Ie.parentNode,Re=w.childNodes[9].childNodes[1],ze=Re.parentNode,Be=w.childNodes[9].childNodes[2],Ve=Be.parentNode,He=w.childNodes[10].childNodes[1],Ue=He.parentNode,We=w.childNodes[10].childNodes[2],Ge=We.parentNode,Ke=w.childNodes[11].childNodes[1],qe=Ke.parentNode,Je=w.childNodes[11].childNodes[2],Ye=Je.parentNode,Xe=w.childNodes[12].childNodes[1],Ze=Xe.parentNode,Qe=w.childNodes[12].childNodes[2],$e=Qe.parentNode,et=w.childNodes[13].childNodes[1],tt=et.parentNode,nt=w.childNodes[13].childNodes[2],rt=nt.parentNode,it=w.childNodes[14].childNodes[1],at=it.parentNode,ot=w.childNodes[14].childNodes[2],st=ot.parentNode,ct=w.childNodes[15].childNodes[1],lt=ct.parentNode,ut=w.childNodes[15].childNodes[2],dt=ut.parentNode,ft=w.childNodes[16].childNodes[1],pt=ft.parentNode,mt=w.childNodes[16].childNodes[2],ht=mt.parentNode,gt=w.childNodes[17].childNodes[1],_t=gt.parentNode,vt=w.childNodes[17].childNodes[2],yt=vt.parentNode,bt=w.childNodes[18].childNodes[1],xt=bt.parentNode,St=w.childNodes[18].childNodes[2],Ct=St.parentNode,wt=w.childNodes[19].childNodes[1],Tt=wt.parentNode,Et=w.childNodes[19].childNodes[2],Dt=Et.parentNode,Ot=w.childNodes[20].childNodes[1],kt=Ot.parentNode,At=w.childNodes[20].childNodes[2],jt=At.parentNode,Mt=w.childNodes[21].childNodes[1],Nt=Mt.parentNode,Pt=w.childNodes[21].childNodes[2],Ft=Pt.parentNode,It=w.childNodes[22].childNodes[1],Lt=It.parentNode,Rt=w.childNodes[22].childNodes[2],zt=Rt.parentNode,Bt=w.childNodes[23].childNodes[1],Vt=Bt.parentNode,Ht=w.childNodes[23].childNodes[2],Ut=Ht.parentNode,Wt=w.childNodes[24].childNodes[1],Gt=Wt.parentNode,Kt=w.childNodes[24].childNodes[2],qt=Kt.parentNode,Jt=w.childNodes[25].childNodes[1],Yt=Jt.parentNode,Xt=w.childNodes[25].childNodes[2],Zt=Xt.parentNode,Qt=w.childNodes[26].childNodes[1],$t=Qt.parentNode,en=w.childNodes[26].childNodes[2],tn=en.parentNode,nn=w.childNodes[27].childNodes[1],rn=nn.parentNode,an=w.childNodes[27].childNodes[2],on=an.parentNode,sn=w.childNodes[28].childNodes[1],cn=sn.parentNode,ln=w.childNodes[28].childNodes[2],un=ln.parentNode,dn=w.childNodes[29].childNodes[1],fn=dn.parentNode,pn=w.childNodes[29].childNodes[2],mn=pn.parentNode,hn=w.childNodes[30].childNodes[1],gn=hn.parentNode,_n=w.childNodes[30].childNodes[2],vn=_n.parentNode,yn=w.childNodes[34],bn=yn.parentNode;e.appendChild(o);let xn=x(P);i(xn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:t.value,onChange:e=>t.value=e,className:`mb-3`})),P.insertBefore(xn,k),c(_e,ge,()=>t.value===`preview`?{__rue_compiled_branch_key:!0,create:()=>r(N,()=>({mode:`inline`,className:`bg-base-200 rounded-box w-80 [&_button[aria-expanded='true'].menu-active]:!bg-transparent [&_button[aria-expanded='true'].menu-active]:!text-base-content`,items:me,selectedKeys:[se.value],openKeys:ce.value,onSelect:e=>se.value=String(e.key),onOpenChange:e=>ce.value=e}))}:{__rue_compiled_branch_key:!1,create:()=>r(A,()=>({className:`mt-2`,lang:`tsx`,code:`import { Badge, Menu } from '@rue-js/design';
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
/>`}))});let Sn=x(ye);i(Sn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:s.value,onChange:e=>s.value=e,className:`mb-3`})),ye.insertBefore(Sn,ve),c(xe,be,()=>s.value===`preview`?{__rue_compiled_branch_key:!0,create:()=>r(N,()=>({className:`bg-base-200 rounded-box w-80`,items:he,multiple:!0,defaultSelectedKeys:[`mentions`,`archived`]}))}:{__rue_compiled_branch_key:!1,create:()=>r(A,()=>({className:`mt-2`,lang:`tsx`,code:`const items = [
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
/>`}))});let Cn=x(Ce);i(Cn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:l.value,onChange:e=>l.value=e,className:`mb-3`})),Ce.insertBefore(Cn,Se),D(()=>{let e=l.value===`preview`?(()=>{let e=p(N.Item,()=>({eventKey:`profile`,icon:n(Object.assign(e=>{let t=_(`span`,e);return t.className=`inline-flex h-2.5 w-2.5 rounded-full bg-primary`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),children:`Profile`})),t=p(N.Item,()=>({eventKey:`notifications`,extra:r(M,()=>({size:`xs`,children:(e,t,r)=>O(e,r,()=>n(Object.assign(e=>{let t=S();return h(t,g(`2`)),{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})))})),children:`Notifications`})),i=p(N.ItemGroup,()=>({title:`Account`,children:[e,t]})),a=p(N.Divider,()=>({})),o=p(N.Item,()=>({eventKey:`security`,children:`Security`})),s=p(N.Item,()=>({eventKey:`tokens`,extra:`Beta`,children:`API Tokens`})),c=p(N.SubMenu,()=>({eventKey:`settings`,title:`Settings`,icon:n(Object.assign(e=>{let t=_(`span`,e);return t.className=`inline-flex h-2.5 w-2.5 rounded-full bg-accent`,{__rue_compiled_host:t,__rue_compiled_roots:[t]}},{__rue_compiled_explicit_roots:!0})),children:[o,s]}));return p(N,()=>({className:`bg-base-200 rounded-box w-80`,selectedKeys:le.value,openKeys:ue.value,onSelect:e=>le.value=e.selectedKeys,onOpenChange:e=>ue.value=e,children:[i,a,c]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`const selectedKeys = ref(['profile']);
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
</Menu>`}));b(()=>d(e,Te,we))});let wn=x(De);i(wn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:oe.value,onChange:e=>oe.value=e,className:`mb-3`})),De.insertBefore(wn,Ee),D(()=>{let e=oe.value===`preview`?(()=>{let e=p(N.Item,()=>({to:`/examples/hello-world`,children:`路由跳转到 Hello World`})),t=p(N.Item,()=>({href:`https://example.com`,target:`_blank`,rel:`noreferrer`,children:`跳转到外部网站`})),n=p(N.Item,()=>({onClick:()=>alert(`clicked`),children:`点击执行逻辑`}));return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item to="/examples/hello-world">路由跳转到 Hello World</Menu.Item>
  <Menu.Item href="https://example.com" target="_blank" rel="noreferrer">跳转到外部网站</Menu.Item>
  <Menu.Item onClick={() => alert('clicked')}>点击执行逻辑</Menu.Item>
</Menu>`}));b(()=>d(e,ke,Oe))});let Tn=x(je);i(Tn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ie.value,onChange:e=>ie.value=e,className:`mb-3`})),je.insertBefore(Tn,Ae),D(()=>{let e=ie.value===`preview`?p(N,()=>({className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:fe.map((e,t)=>v(()=>{let t=S(),n=T(`li`,t);u(t,n);let r=E(`rue:component:anchor`);u(n,r);let i=p(N.Item,()=>({children:e.label}));d(i,n,r);let a=E(`rue:component:anchor`);u(n,a);let o=p(N.Submenu,()=>({children:e.children.map((e,t)=>typeof e==`string`?p(N.Item,()=>({key:t,children:e})):v(()=>{let t=S(),n=T(`li`,t);u(t,n);let r=E(`rue:component:anchor`);u(n,r);let i=p(N.Item,()=>({children:e.label}));d(i,n,r);let a=E(`rue:component:anchor`);u(n,a);let o=p(N.Submenu,()=>({children:e.children.map((e,t)=>p(N.Item,()=>({key:t,children:e})))}));return d(o,n,a),t},!0))}));return d(o,n,a),t},!0))})):r(A,()=>({className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
</Menu>`}));b(()=>d(e,Ne,Me))});let En=x(Fe);i(En,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ae.value,onChange:e=>ae.value=e,className:`mb-3`})),Fe.insertBefore(En,Pe),c(Le,Ie,()=>ae.value===`preview`?{__rue_compiled_branch_key:!0,create:()=>r(N,()=>({items:pe,className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`}))}:{__rue_compiled_branch_key:!1,create:()=>r(A,()=>({className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';
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
<Menu items={menuItems} className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max" />`}))});let Dn=x(ze);i(Dn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:f.value,onChange:e=>f.value=e,className:`mb-3`})),ze.insertBefore(Dn,Re),D(()=>{let e=f.value===`preview`?(()=>{let e=p(N.Item,()=>({as:`button`,children:`Item 1`})),t=p(N.Item,()=>({as:`button`,children:`Item 2`})),n=p(N.Item,()=>({as:`button`,children:`Item 3`}));return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`}));b(()=>d(e,Ve,Be))});let On=x(Ue);i(On,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:m.value,onChange:e=>m.value=e,className:`mb-3`})),Ue.insertBefore(On,He),D(()=>{let e=m.value===`preview`?(()=>{let e=p(N.Item,()=>({as:`button`,children:`Item 1`})),t=p(N.Item,()=>({as:`button`,children:`Item 2`})),n=p(N.Item,()=>({as:`button`,children:`Item 3`}));return p(N,()=>({className:`menu-vertical lg:menu-horizontal bg-base-200 rounded-box`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
  <Menu.Item as="button">Item 1</Menu.Item>
  <Menu.Item as="button">Item 2</Menu.Item>
  <Menu.Item as="button">Item 3</Menu.Item>
</Menu>`}));b(()=>d(e,Ge,We))});let kn=x(qe);i(kn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:F.value,onChange:e=>F.value=e,className:`mb-3`})),qe.insertBefore(kn,Ke),D(()=>{let e=F.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e}),t=p(N.Item,()=>({as:`button`,children:e})),n=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),r=p(N.Item,()=>({as:`button`,children:n})),i=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e}),o=p(N.Item,()=>({as:`button`,children:i}));return p(N,()=>({className:`bg-base-200 rounded-box`,children:[t,r,o]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`}));b(()=>d(e,Ye,Je))});let An=x(Ze);i(An,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:L.value,onChange:e=>L.value=e,className:`mb-3`})),Ze.insertBefore(An,Xe),D(()=>{let e=L.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e}),t=p(N.Item,()=>({as:`button`,children:e})),n=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),r=p(N.Item,()=>({as:`button`,children:n})),i=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e}),o=p(N.Item,()=>({as:`button`,children:i}));return p(N,()=>({direction:`horizontal`,className:`bg-base-200 rounded-box`,children:[t,r,o]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
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
</Menu>`}));b(()=>d(e,$e,Qe))});let jn=x(tt);i(jn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:R.value,onChange:e=>R.value=e,className:`mb-3`})),tt.insertBefore(jn,et),D(()=>{let e=R.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0 h6`),e}),t=p(N.Item,()=>({as:`button`,className:`tooltip tooltip-right`,"data-tip":`Home`,children:e})),n=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),r=p(N.Item,()=>({as:`button`,className:`tooltip tooltip-right`,"data-tip":`Details`,children:n})),i=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2a2 2 0 002-2m0 0 V5a2 2 0 012-2h2a2 2 0 012 2v14 a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e}),o=p(N.Item,()=>({as:`button`,className:`tooltip tooltip-right`,"data-tip":`Stats`,children:i}));return p(N,()=>({className:`bg-base-200 rounded-box`,children:[t,r,o]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box">
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
</Menu>`}));b(()=>d(e,rt,nt))});let Mn=x(at);i(Mn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:z.value,onChange:e=>z.value=e,className:`mb-3`})),at.insertBefore(Mn,it),D(()=>{let e=z.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0 a1 1 0 001-1v-4a1 1 0 011-1h2 a1 1 0 011 1v4 a1 1 0 001 1m-6 0 h6`),e}),t=p(N.Item,()=>({as:`button`,className:`tooltip`,"data-tip":`Home`,children:e})),n=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),r=p(N.Item,()=>({as:`button`,className:`tooltip`,"data-tip":`Details`,children:n})),i=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6 a2 2 0 002 2h2 a2 2 0 002-2zm0 0 V9 a2 2 0 012-2h2 a2 2 0 012 2v10m-6 0 a2 2 0 002 2h2 a2 2 0 002-2m0 0 V5 a2 2 0 012-2h2 a2 2 0 012 2v14 a2 2 0 01-2 2h-2 a2 2 0 01-2-2z`),e}),o=p(N.Item,()=>({as:`button`,className:`tooltip`,"data-tip":`Stats`,children:i}));return p(N,()=>({direction:`horizontal`,className:`bg-base-200 rounded-box mt-6`,children:[t,r,o]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box mt-6">
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
</Menu>`}));b(()=>d(e,st,ot))});let Nn=x(lt);i(Nn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:B.value,onChange:e=>B.value=e,className:`mb-3`})),lt.insertBefore(Nn,ct),D(()=>{let e=B.value===`preview`?v(()=>{let e=S(),t=T(`div`,e);u(e,t),a(t,`grid gap-6`);let n=E(`rue:component:anchor`);u(t,n),D(()=>{let e=p(N.Item,()=>({as:`button`,children:`Xsmall 1`})),r=p(N.Item,()=>({as:`button`,children:`Xsmall 2`})),i=p(N,()=>({size:`xs`,className:`bg-base-200 rounded-box w-56`,children:[e,r]}));b(()=>d(i,t,n))});let r=E(`rue:component:anchor`);u(t,r),D(()=>{let e=p(N.Item,()=>({as:`button`,children:`Small 1`})),n=p(N.Item,()=>({as:`button`,children:`Small 2`})),i=p(N,()=>({size:`sm`,className:`bg-base-200 rounded-box w-56`,children:[e,n]}));b(()=>d(i,t,r))});let i=E(`rue:component:anchor`);u(t,i),D(()=>{let e=p(N.Item,()=>({as:`button`,children:`Medium 1`})),n=p(N.Item,()=>({as:`button`,children:`Medium 2`})),r=p(N,()=>({size:`md`,className:`bg-base-200 rounded-box w-56`,children:[e,n]}));b(()=>d(r,t,i))});let o=E(`rue:component:anchor`);u(t,o),D(()=>{let e=p(N.Item,()=>({as:`button`,children:`Large 1`})),n=p(N.Item,()=>({as:`button`,children:`Large 2`})),r=p(N,()=>({size:`lg`,className:`bg-base-200 rounded-box w-56`,children:[e,n]}));b(()=>d(r,t,o))});let s=E(`rue:component:anchor`);return u(t,s),D(()=>{let e=p(N.Item,()=>({as:`button`,children:`Xlarge 1`})),n=p(N.Item,()=>({as:`button`,children:`Xlarge 2`})),r=p(N,()=>({size:`xl`,className:`bg-base-200 rounded-box w-56`,children:[e,n]}));b(()=>d(r,t,s))}),e},!0):r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<div className="grid gap-6">
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
</div>`}));b(()=>d(e,dt,ut))});let Pn=x(pt);i(Pn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:V.value,onChange:e=>V.value=e,className:`mb-3`})),pt.insertBefore(Pn,ft),D(()=>{let e=V.value===`preview`?(()=>{let e=p(N.Item,()=>({as:`button`,children:`Enabled item`})),t=p(N.Item,()=>({as:`button`,liClassName:`menu-disabled`,children:`disabled item`})),n=p(N.Item,()=>({as:`a`,className:`menu-disabled`,children:`disabled item`}));return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Item as="button">Enabled item</Menu.Item>
  <Menu.Item as="button" liClassName="menu-disabled">disabled item</Menu.Item>
  <Menu.Item as="a" className="menu-disabled">disabled item</Menu.Item>
</Menu>`}));b(()=>d(e,ht,mt))});let Fn=x(_t);i(Fn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:H.value,onChange:e=>H.value=e,className:`mb-3`})),_t.insertBefore(Fn,gt),D(()=>{let e=H.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e}),t=p(N.Item,()=>({as:`button`,children:[e,`Item 2`]})),n=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),r=p(N.Item,()=>({as:`button`,children:[n,`Item 1`]})),i=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z`),e}),o=p(N.Item,()=>({as:`button`,children:[i,`Item 3`]}));return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[t,r,o]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}));b(()=>d(e,yt,vt))});let In=x(xt);i(In,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:U.value,onChange:e=>U.value=e,className:`mb-3`})),xt.insertBefore(In,bt),D(()=>{let e=U.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6`),e}),t=p(M,()=>({size:`xs`,children:`99+`})),n=p(N.Item,()=>({as:`button`,children:[e,`Inbox`,t]})),r=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),a(t,`h-5 w-5`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`stroke`,`currentColor`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`strokeWidth`,`2`),C(n,`d`,`M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z`),e}),i=p(M,()=>({size:`xs`,variant:`warning`,children:`NEW`})),o=p(N.Item,()=>({as:`button`,children:[r,`Updates`,` `,i]})),s=p(M,()=>({size:`xs`,variant:`info`})),c=p(N.Item,()=>({as:`button`,children:[`Stats`,s]}));return p(N,()=>({className:`bg-base-200 lg:menu-horizontal rounded-box`,children:[n,o,c]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 lg:menu-horizontal rounded-box">
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
</Menu>`}));b(()=>d(e,Ct,St))});let Ln=x(Tt);i(Ln,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:W.value,onChange:e=>W.value=e,className:`mb-3`})),Tt.insertBefore(Ln,wt),D(()=>{let e=W.value===`preview`?(()=>{let e=p(N.Item,()=>({children:`Item 1`})),t=p(N.Item,()=>({children:`Item 2`})),n=p(N.Item,()=>({children:`Item 3`}));return p(N,()=>({className:`bg-base-200 w-56 [&_li>*]:rounded-none p-0`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 w-56 [&_li>*]:rounded-none p-0">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}));b(()=>d(e,Dt,Et))});let Rn=x(kt);i(Rn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:G.value,onChange:e=>G.value=e,className:`mb-3`})),kt.insertBefore(Rn,Ot),D(()=>{let e=G.value===`preview`?(()=>{let e=p(N.Title,()=>({children:`Title`})),t=p(N.Item,()=>({children:`Item 1`})),n=p(N.Item,()=>({children:`Item 2`})),r=p(N.Item,()=>({children:`Item 3`}));return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n,r]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <Menu.Title>Title</Menu.Title>
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}));b(()=>d(e,jt,At))});let zn=x(Nt);i(zn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:K.value,onChange:e=>K.value=e,className:`mb-3`})),Nt.insertBefore(zn,Mt),D(()=>{let e=K.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Title,()=>({as:`h2`,children:`Title`}));d(r,t,n);let i=T(`ul`,t);u(t,i);let a=E(`rue:component:anchor`);u(i,a);let o=p(N.Item,()=>({children:`Item 1`}));d(o,i,a);let s=E(`rue:component:anchor`);u(i,s);let c=p(N.Item,()=>({children:`Item 2`}));d(c,i,s);let l=E(`rue:component:anchor`);u(i,l);let f=p(N.Item,()=>({children:`Item 3`}));return d(f,i,l),e});return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:e}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
  <li>
    <Menu.Title as="h2">Title</Menu.Title>
    <ul>
      <Menu.Item>Item 1</Menu.Item>
      <Menu.Item>Item 2</Menu.Item>
      <Menu.Item>Item 3</Menu.Item>
    </ul>
  </li>
</Menu>`}));b(()=>d(e,Ft,Pt))});let Bn=x(Lt);i(Bn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:q.value,onChange:e=>q.value=e,className:`mb-3`})),Lt.insertBefore(Bn,It),D(()=>{let e=q.value===`preview`?(()=>{let e=p(N.Item,()=>({as:`button`,children:`Item 1`})),t=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Item,()=>({as:`button`,children:`Parent`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({as:`button`,children:`Submenu 1`})),n=p(N.Item,()=>({as:`button`,children:`Submenu 2`})),r=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Item,()=>({as:`button`,children:`Parent`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({as:`button`,children:`Submenu 1`})),n=p(N.Item,()=>({as:`button`,children:`Submenu 2`})),r=p(N.Submenu,()=>({children:[e,n]}));b(()=>d(r,t,i))}),e}),a=p(N.Submenu,()=>({children:[e,n,r]}));b(()=>d(a,t,i))}),e}),n=p(N.Item,()=>({as:`button`,children:`Item 3`}));return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}));b(()=>d(e,zt,Rt))});let Vn=x(Vt);i(Vn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:J.value,onChange:e=>J.value=e,className:`mb-3`})),Vt.insertBefore(Vn,Bt),D(()=>{let e=J.value===`preview`?(()=>{let e=p(N.Item,()=>({as:`button`,children:`Item 1`})),t=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=T(`details`,t);u(t,n);let r=T(`summary`,n);u(n,r),u(r,y(`Parent`));let i=T(`ul`,n);u(n,i);let a=E(`rue:component:anchor`);u(i,a);let o=p(N.Item,()=>({as:`button`,children:`Submenu 1`}));d(o,i,a);let s=E(`rue:component:anchor`);u(i,s);let c=p(N.Item,()=>({as:`button`,children:`Submenu 2`}));d(c,i,s);let l=T(`li`,i);u(i,l);let f=T(`details`,l);u(l,f);let m=T(`summary`,f);u(f,m),u(m,y(`Parent`));let h=T(`ul`,f);u(f,h);let g=E(`rue:component:anchor`);u(h,g);let _=p(N.Item,()=>({as:`button`,children:`Submenu 1`}));d(_,h,g);let v=E(`rue:component:anchor`);u(h,v);let b=p(N.Item,()=>({as:`button`,children:`Submenu 2`}));return d(b,h,v),e}),n=p(N.Item,()=>({as:`button`,children:`Item 3`}));return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56">
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
</Menu>`}));b(()=>d(e,Ut,Ht))});let Hn=x(Gt);i(Hn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Y.value,onChange:e=>Y.value=e,className:`mb-3`})),Gt.insertBefore(Hn,Wt),D(()=>{let e=Y.value===`preview`?v(()=>{let e=S(),t=T(`div`,e);u(e,t),a(t,`grid gap-6`);let n=E(`rue:component:anchor`);u(t,n),D(()=>{let e=p(N.Item,()=>({children:`Item 1`})),r=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.DropdownToggle,()=>({onClick:de,children:`Parent`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({children:`Submenu 1`})),n=p(N.Item,()=>({children:`Submenu 2`})),r=p(N.Dropdown,()=>({children:[e,n]}));b(()=>d(r,t,i))}),e}),i=p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,r]}));b(()=>d(i,t,n))});let r=E(`rue:component:anchor`);return u(t,r),D(()=>{let e=p(N.Item,()=>({children:`Item 1`})),n=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n),D(()=>{let e=p(N.DropdownToggle,()=>({show:!0,onClick:de,children:`Parent`}));b(()=>d(e,t,n))});let r=E(`rue:component:anchor`);return u(t,r),D(()=>{let e=p(N.Item,()=>({children:`Submenu 1`})),n=p(N.Item,()=>({children:`Submenu 2`})),i=p(N.Dropdown,()=>({show:!0,children:[e,n]}));b(()=>d(i,t,r))}),e}),i=p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,n]}));b(()=>d(i,t,r))}),e},!0):r(A,()=>({className:`mt-2`,lang:`tsx`,code:`import { Menu } from '@rue-js/design';

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
</Menu>`}));b(()=>d(e,qt,Kt))});let Un=x(Yt);i(Un,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:X.value,onChange:e=>X.value=e,className:`mb-3`})),Yt.insertBefore(Un,Jt),D(()=>{let e=X.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`strokeWidth`,`1.5`),C(t,`stroke`,`currentColor`),a(t,`w-4 h-4`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e}),t=p(N.Item,()=>({as:`button`,children:[e,`resume.pdf`]})),n=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=T(`details`,t);u(t,n);let r=T(`summary`,n);u(n,r);let i=T(`svg`,r);u(r,i),C(i,`xmlns`,`http://www.w3.org/2000/svg`),C(i,`fill`,`none`),C(i,`viewBox`,`0 0 24 24`),C(i,`strokeWidth`,`1.5`),C(i,`stroke`,`currentColor`),a(i,`w-4 h-4`);let o=T(`path`,i);u(i,o),C(o,`strokeLinecap`,`round`),C(o,`strokeLinejoin`,`round`),C(o,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),u(r,y(` My Files`));let s=T(`ul`,n);u(n,s);let c=E(`rue:component:anchor`);u(s,c),D(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`strokeWidth`,`1.5`),C(t,`stroke`,`currentColor`),a(t,`w-4 h-4`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e}),t=p(N.Item,()=>({as:`button`,children:[e,`Project-final.psd`]}));b(()=>d(t,s,c))});let l=E(`rue:component:anchor`);u(s,l),D(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`strokeWidth`,`1.5`),C(t,`stroke`,`currentColor`),a(t,`w-4 h-4`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e}),t=p(N.Item,()=>({as:`button`,children:[e,`Project-final-2.psd`]}));b(()=>d(t,s,l))});let f=T(`li`,s);u(s,f);let m=T(`details`,f);u(f,m);let h=T(`summary`,m);u(m,h);let g=T(`svg`,h);u(h,g),C(g,`xmlns`,`http://www.w3.org/2000/svg`),C(g,`fill`,`none`),C(g,`viewBox`,`0 0 24 24`),C(g,`strokeWidth`,`1.5`),C(g,`stroke`,`currentColor`),a(g,`w-4 h-4`);let _=T(`path`,g);u(g,_),C(_,`strokeLinecap`,`round`),C(_,`strokeLinejoin`,`round`),C(_,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),u(h,y(` Images`));let x=T(`ul`,m);u(m,x);let w=E(`rue:component:anchor`);u(x,w),D(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`strokeWidth`,`1.5`),C(t,`stroke`,`currentColor`),a(t,`w-4 h-4`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e}),t=p(N.Item,()=>({as:`button`,children:[e,`Screenshot1.png`]}));b(()=>d(t,x,w))});let O=E(`rue:component:anchor`);u(x,O),D(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`strokeWidth`,`1.5`),C(t,`stroke`,`currentColor`),a(t,`w-4 h-4`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e}),t=p(N.Item,()=>({as:`button`,children:[e,`Screenshot2.png`]}));b(()=>d(t,x,O))});let k=T(`li`,x);u(x,k);let A=T(`details`,k);u(k,A);let j=T(`summary`,A);u(A,j);let M=T(`svg`,j);u(j,M),C(M,`xmlns`,`http://www.w3.org/2000/svg`),C(M,`fill`,`none`),C(M,`viewBox`,`0 0 24 24`),C(M,`strokeWidth`,`1.5`),C(M,`stroke`,`currentColor`),a(M,`w-4 h-4`);let P=T(`path`,M);u(M,P),C(P,`strokeLinecap`,`round`),C(P,`strokeLinejoin`,`round`),C(P,`d`,`M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z`),u(j,y(` Others`));let F=T(`ul`,A);u(A,F);let I=E(`rue:component:anchor`);return u(F,I),D(()=>{let e=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`strokeWidth`,`1.5`),C(t,`stroke`,`currentColor`),a(t,`w-4 h-4`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`d`,`M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z`),e}),t=p(N.Item,()=>({as:`button`,children:[e,`Screenshot3.png`]}));b(()=>d(t,F,I))}),e}),r=v(()=>{let e=S(),t=T(`svg`,e);u(e,t),C(t,`xmlns`,`http://www.w3.org/2000/svg`),C(t,`fill`,`none`),C(t,`viewBox`,`0 0 24 24`),C(t,`strokeWidth`,`1.5`),C(t,`stroke`,`currentColor`),a(t,`w-4 h-4`);let n=T(`path`,t);return u(t,n),C(n,`strokeLinecap`,`round`),C(n,`strokeLinejoin`,`round`),C(n,`d`,`M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z`),e}),i=p(N.Item,()=>({as:`button`,children:[r,`reports-final-2.pdf`]}));return p(N,()=>({size:`xs`,className:`bg-base-200 rounded-box max-w-xs w-full [&_button>span]:inline-flex [&_button>span]:items-center [&_button>span]:gap-2 [&_button>span>svg]:shrink-0 [&_summary]:flex [&_summary]:items-center [&_summary]:gap-2 [&_summary>svg]:shrink-0`,children:[t,n,i]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu
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
</Menu>`}));b(()=>d(e,Zt,Xt))});let Wn=x($t);i(Wn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Z.value,onChange:e=>Z.value=e,className:`mb-3`})),$t.insertBefore(Wn,Qt),D(()=>{let e=Z.value===`preview`?(()=>{let e=p(N.Item,()=>({children:`Item 1`})),t=p(N.Item,()=>({className:`menu-active`,children:`Item 2`})),n=p(N.Item,()=>({children:`Item 3`}));return p(N,()=>({className:`bg-base-200 rounded-box w-56`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="bg-base-200 rounded-box w-56"><Menu.Item className="menu-active">Item 2</Menu.Item></Menu>`}));b(()=>d(e,tn,en))});let Gn=x(rn);i(Gn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:Q.value,onChange:e=>Q.value=e,className:`mb-3`})),rn.insertBefore(Gn,nn),D(()=>{let e=Q.value===`preview`?(()=>{let e=p(N.Item,()=>({children:`Item 1`})),t=p(N.Item,()=>({children:`Item 2`})),n=p(N.Item,()=>({children:`Item 3`}));return p(N,()=>({direction:`horizontal`,className:`bg-base-200 rounded-box`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <Menu.Item>Item 2</Menu.Item>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}));b(()=>d(e,on,an))});let Kn=x(cn);i(Kn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:$.value,onChange:e=>$.value=e,className:`mb-3`})),cn.insertBefore(Kn,sn),D(()=>{let e=$.value===`preview`?(()=>{let e=p(N.Item,()=>({children:`Item 1`})),t=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Item,()=>({children:`Parent`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({children:`Submenu 1`})),n=p(N.Item,()=>({children:`Submenu 2`})),r=p(N.Submenu,()=>({children:[e,n]}));b(()=>d(r,t,i))}),e}),n=p(N.Item,()=>({children:`Item 3`}));return p(N,()=>({direction:`horizontal`,className:`bg-base-200 rounded-box`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu direction="horizontal" className="bg-base-200 rounded-box">
  <Menu.Item>Item 1</Menu.Item>
  <li>
    <Menu.Item>Parent</Menu.Item>
    <Menu.Submenu>
      <Menu.Item>Submenu 1</Menu.Item>
      <Menu.Item>Submenu 2</Menu.Item>
    </Menu.Submenu>
  </li>
  <Menu.Item>Item 3</Menu.Item>
</Menu>`}));b(()=>d(e,un,ln))});let qn=x(fn);i(qn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:ne.value,onChange:e=>ne.value=e,className:`mb-3`})),fn.insertBefore(qn,dn),D(()=>{let e=ne.value===`preview`?(()=>{let e=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Item,()=>({children:`Solutions`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({children:`Design`})),n=p(N.Item,()=>({children:`Development`})),r=p(N.Item,()=>({children:`Hosting`})),a=p(N.Item,()=>({children:`Domain register`})),o=p(N.Submenu,()=>({children:[e,n,r,a]}));b(()=>d(o,t,i))}),e}),t=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Item,()=>({children:`Enterprise`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({children:`CRM software`})),n=p(N.Item,()=>({children:`Marketing management`})),r=p(N.Item,()=>({children:`Security`})),a=p(N.Item,()=>({children:`Consulting`})),o=p(N.Submenu,()=>({children:[e,n,r,a]}));b(()=>d(o,t,i))}),e}),n=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Item,()=>({children:`Products`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({children:`UI Kit`})),n=p(N.Item,()=>({children:`WordPress themes`})),r=p(N.Item,()=>({children:`WordPress plugins`})),a=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Item,()=>({children:`Open source`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({children:`Auth management system`})),n=p(N.Item,()=>({children:`VScode theme`})),r=p(N.Item,()=>({children:`Color picker app`})),a=p(N.Submenu,()=>({children:[e,n,r]}));b(()=>d(a,t,i))}),e}),o=p(N.Submenu,()=>({children:[e,n,r,a]}));b(()=>d(o,t,i))}),e}),r=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=E(`rue:component:anchor`);u(t,n);let r=p(N.Item,()=>({children:`Company`}));d(r,t,n);let i=E(`rue:component:anchor`);return u(t,i),D(()=>{let e=p(N.Item,()=>({children:`About us`})),n=p(N.Item,()=>({children:`Contact us`})),r=p(N.Item,()=>({children:`Privacy policy`})),a=p(N.Item,()=>({children:`Press kit`})),o=p(N.Submenu,()=>({children:[e,n,r,a]}));b(()=>d(o,t,i))}),e});return p(N,()=>({className:`xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max`,children:[e,t,n,r]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="xl:menu-horizontal bg-base-200 rounded-box lg:min-w-max">
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
</Menu>`}));b(()=>d(e,mn,pn))});let Jn=x(gn);i(Jn,j,()=>({style:`box`,items:[{key:`preview`,label:`预览`},{key:`code`,label:`JSX代码`}],activeKey:re.value,onChange:e=>re.value=e,className:`mb-3`})),gn.insertBefore(Jn,hn),D(()=>{let e=re.value===`preview`?(()=>{let e=p(N.Item,()=>({as:`button`,children:`Item 1`})),t=v(()=>{let e=S(),t=T(`li`,e);u(e,t);let n=T(`details`,t);u(t,n);let r=T(`summary`,n);u(n,r),u(r,y(`Parent item`));let i=T(`ul`,n);u(n,i);let a=E(`rue:component:anchor`);u(i,a);let o=p(N.Item,()=>({as:`button`,children:`Submenu 1`}));d(o,i,a);let s=E(`rue:component:anchor`);u(i,s);let c=p(N.Item,()=>({as:`button`,children:`Submenu 2`}));d(c,i,s);let l=T(`li`,i);u(i,l);let f=T(`details`,l);u(l,f);let m=T(`summary`,f);u(f,m),u(m,y(`Parent`));let h=T(`ul`,f);u(f,h);let g=E(`rue:component:anchor`);u(h,g);let _=p(N.Item,()=>({as:`button`,children:`item 1`}));d(_,h,g);let v=E(`rue:component:anchor`);u(h,v);let b=p(N.Item,()=>({as:`button`,children:`item 2`}));return d(b,h,v),e}),n=p(N.Item,()=>({as:`button`,children:`Item 3`}));return p(N,()=>({className:`lg:menu-horizontal bg-base-200 rounded-box lg:mb-64`,children:[e,t,n]}))})():r(A,()=>({className:`mt-2`,lang:`tsx`,code:`<Menu className="lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
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
</Menu>`}));b(()=>d(e,vn,_n))});let Yn=x(bn);return i(Yn,ee,()=>({rows:te})),bn.insertBefore(Yn,yn),e});return p(P,()=>({children:e}))})(),e=>k(()=>{})))};export{L as default};